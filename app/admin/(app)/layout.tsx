import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";
import { requireSession } from "@/lib/cms/auth";

// Authenticated admin chrome. Wraps every admin page EXCEPT /admin/login
// (which lives outside this route group).
export default async function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense in depth — middleware already redirects, but if it's bypassed
  // (e.g. config drift) this re-checks before rendering protected UI.
  const session = await requireSession();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar email={session.email} />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
