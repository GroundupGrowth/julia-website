import { NextResponse } from "next/server";

import { signOut } from "@/lib/cms/auth";

// POST /api/admin/auth/signout — clears the iron-session cookie and bounces
// the user to the login page.
export async function POST(req: Request) {
  await signOut();
  const url = new URL("/admin/login", req.url);
  return NextResponse.redirect(url, { status: 303 });
}
