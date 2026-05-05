import "server-only";
import { StackServerApp } from "@stackframe/stack";

// Cached lazily so importing this module never constructs the Stack app.
// Why: StackServerApp validates env vars in its constructor; if those are
// missing during the Vercel build's "collect page data" phase the whole
// build fails. Lazy construction defers that to request time, where env
// vars are guaranteed to be present.
// The generic argument tracks "has a token store", which Stack's
// StackProvider type requires. Setting tokenStore: 'nextjs-cookie'
// satisfies that — encode it explicitly so TS narrows correctly.
type ConfiguredStackApp = StackServerApp<true>;

let _app: ConfiguredStackApp | null = null;

export function getStackServerApp(): ConfiguredStackApp {
  if (_app) return _app;
  _app = new StackServerApp({
    tokenStore: "nextjs-cookie",
    urls: {
      signIn: "/handler/sign-in",
      signUp: "/handler/sign-up",
      afterSignIn: "/admin",
      afterSignUp: "/admin",
      afterSignOut: "/handler/sign-in",
    },
  }) as ConfiguredStackApp;
  return _app;
}

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
  if (!allowed) return true;
  return allowed.includes(email.toLowerCase());
}
