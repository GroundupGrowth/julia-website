import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Toaster } from "sonner";

import { stackServerApp } from "@/lib/cms/stack";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin · BasePsych",
  robots: { index: false, follow: false },
};

// Top-level admin layout. Loads admin.css (Tailwind + shadcn variables) and
// wraps the admin tree in Stack's provider so client components can call
// useUser() / useStackApp(). Auth gate happens in the (app) sub-layout.
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StackProvider app={stackServerApp}>
      <StackTheme>
        <div className="admin-shell min-h-screen">
          {children}
          <Toaster position="top-right" richColors />
        </div>
      </StackTheme>
    </StackProvider>
  );
}
