import "server-only";
import { StackServerApp } from "@stackframe/stack";

// Single Stack server app for the admin. Reads its config from env:
//   NEXT_PUBLIC_STACK_PROJECT_ID
//   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY
//   STACK_SECRET_SERVER_KEY
// All three are auto-provisioned by the Neon Auth integration on Vercel.
export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  // After sign-in / sign-up land back in the admin, not the marketing site.
  urls: {
    signIn: "/handler/sign-in",
    signUp: "/handler/sign-up",
    afterSignIn: "/admin",
    afterSignUp: "/admin",
    afterSignOut: "/handler/sign-in",
  },
});

// Optional comma-separated allowlist (e.g. "you@example.com,partner@example.com").
// If unset, any signed-in Neon Auth user is treated as an admin — fine when
// Stack's public sign-up is disabled in the Stack dashboard.
function getAllowedEmails(): string[] | null {
  const raw = process.env.ADMIN_EMAILS;
  if (!raw) return null;
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAuthorisedAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  const allowed = getAllowedEmails();
  if (!allowed) return true; // no allowlist configured — any signed-in user
  return allowed.includes(email.toLowerCase());
}
