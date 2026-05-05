import { NextResponse, type NextRequest } from "next/server";
import { getIronSession, type SessionOptions } from "iron-session";

// Mirror of lib/cms/auth.ts session options. Kept duplicated so middleware
// has no runtime dependency on a server-only module.
type AdminSession = { email?: string };

function getSessionOptions(): SessionOptions {
  const password = process.env.SESSION_PASSWORD;
  if (!password || password.length < 32) {
    throw new Error(
      "SESSION_PASSWORD must be set to a 32+ character random string",
    );
  }
  return {
    password,
    cookieName: "bp_admin",
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/admin",
      maxAge: 60 * 60 * 24 * 7,
    },
  };
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow the login page itself + the signout API.
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/auth/")
  ) {
    return NextResponse.next();
  }

  // Build a response we can attach cookies to (iron-session needs both req
  // and res in middleware).
  const res = NextResponse.next();

  try {
    const session = await getIronSession<AdminSession>(
      req,
      res,
      getSessionOptions(),
    );
    if (!session.email) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = `?from=${encodeURIComponent(pathname + search)}`;
      return NextResponse.redirect(url);
    }
  } catch {
    // Misconfigured env — bounce to login so the user can't get stuck on a
    // protected page with a broken cookie.
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = `?from=${encodeURIComponent(pathname + search)}`;
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  // Run on every /admin/* path. Login + signout-API early-exit above.
  matcher: ["/admin/:path*"],
};
