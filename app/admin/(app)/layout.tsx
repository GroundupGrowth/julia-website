import { redirect } from "next/navigation";

import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";
import { stackServerApp, isAuthorisedAdmin } from "@/lib/cms/stack";

// Authenticated admin chrome. Wraps every admin page that lives in the
// (app) route group. /handler/* (Stack's hosted auth UI) lives outside
// /admin so it has its own routing.
export default async function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No Next.js middleware on /admin/* anymore — Stack auth check happens
  // here in the layout. Server-rendered, so no flash of unauthenticated UI.
  const user = await stackServerApp.getUser();
  if (!user) {
    redirect("/handler/sign-in?after_auth_return_to_url=/admin");
  }
  const email = user.primaryEmail;
  if (!isAuthorisedAdmin(email)) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="max-w-md rounded-lg border bg-card p-8 text-center">
          <h1 className="mb-2 text-xl font-semibold">Not authorised</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Your account ({email ?? "no email on file"}) isn&apos;t on the admin
            allowlist for this site. Ask the site owner to add you, or sign
            out and use a different account.
          </p>
          <a
            href="/handler/sign-out"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign out
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar email={email ?? undefined} />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
