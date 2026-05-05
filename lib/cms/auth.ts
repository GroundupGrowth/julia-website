import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getIronSession, type SessionOptions } from "iron-session";

export type AdminSession = {
  email?: string;
};

const COOKIE_NAME = "bp_admin";

function getSessionOptions(): SessionOptions {
  const password = process.env.SESSION_PASSWORD;
  if (!password || password.length < 32) {
    throw new Error(
      "SESSION_PASSWORD must be set to a 32+ character random string",
    );
  }
  return {
    password,
    cookieName: COOKIE_NAME,
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      // Scope to /admin so the cookie isn't sent with every marketing-site
      // request.
      path: "/admin",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  };
}

// Read the current admin session. Always safe to call — returns an empty
// session if no cookie is set or env is missing.
export async function getSession() {
  // In Next.js 15+ `cookies()` is async.
  const store = await cookies();
  return getIronSession<AdminSession>(store, getSessionOptions());
}

// Use inside server components / route handlers that REQUIRE an authenticated
// admin. Redirects to /admin/login?from=<current> on failure.
export async function requireSession(currentPath: string = "/admin") {
  const session = await getSession();
  if (!session.email) {
    const target = `/admin/login?from=${encodeURIComponent(currentPath)}`;
    redirect(target);
  }
  return session;
}

// Sign the user in by writing their email into the session cookie.
export async function signIn(email: string) {
  const session = await getSession();
  session.email = email;
  await session.save();
}

// Destroy the session.
export async function signOut() {
  const session = await getSession();
  session.destroy();
}
