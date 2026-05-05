import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Toaster } from "sonner";

import { getStackServerApp } from "@/lib/cms/stack";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin · BasePsych",
  robots: { index: false, follow: false },
};

// Admin is always rendered at request time — never prerendered.
export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StackProvider app={getStackServerApp()}>
      <StackTheme>
        <div className="admin-shell min-h-screen">
          {children}
          <Toaster position="top-right" richColors />
        </div>
      </StackTheme>
    </StackProvider>
  );
}
