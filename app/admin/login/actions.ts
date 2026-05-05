"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { signIn } from "@/lib/cms/auth";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  from: z.string().optional(),
});

export type LoginResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Invalid email or password";

// Server action: validate credentials, set the iron-session cookie, then
// redirect into the admin. On failure delays 1s to slow brute-force.
export async function loginAction(
  _prev: LoginResult | null,
  formData: FormData,
): Promise<LoginResult> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    from: formData.get("from"),
  });

  if (!parsed.success) {
    await sleep(1000);
    return { ok: false, error: GENERIC_ERROR };
  }

  const { email, password, from } = parsed.data;
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminHash) {
    await sleep(1000);
    return {
      ok: false,
      error:
        "Admin is not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD_HASH in env.",
    };
  }

  const emailMatches = email.toLowerCase() === adminEmail.toLowerCase();
  // Always run bcrypt.compare even if the email is wrong, so timing is
  // similar in both branches.
  const passwordMatches = await bcrypt.compare(password, adminHash);

  if (!emailMatches || !passwordMatches) {
    await sleep(1000);
    return { ok: false, error: GENERIC_ERROR };
  }

  await signIn(adminEmail);

  // Throw via redirect — Next handles the response.
  redirect(from && from.startsWith("/admin") ? from : "/admin");
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
