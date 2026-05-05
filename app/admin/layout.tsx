import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./admin.css";

export const metadata: Metadata = {
  title: "Admin · BasePsych",
  robots: { index: false, follow: false },
};

// Top-level admin layout. Loads admin.css (Tailwind + shadcn variables) and
// renders nothing but children — so the login page (at /admin/login) gets
// only this and not the chrome. The (app) sub-layout adds the chrome.
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell min-h-screen">
      {children}
      <Toaster position="top-right" richColors />
    </div>
  );
}
