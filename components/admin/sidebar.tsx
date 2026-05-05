"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  HelpCircle,
  FileText,
  Code2,
  Inbox,
  ImageIcon,
} from "lucide-react";

import { cn } from "@/lib/cms/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/settings", label: "Settings", icon: Settings },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/articles", label: "Articles", icon: FileText },
  { href: "/admin/embeds", label: "Embeds", icon: Code2 },
  { href: "/admin/bookings", label: "Bookings", icon: Inbox },
  { href: "/admin/assets", label: "Assets", icon: ImageIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r bg-card">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin" className="text-base font-semibold">
          BasePsych CMS
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {NAV.map(({ href, label, icon: Icon, exact }) => {
          const active = exact
            ? pathname === href
            : pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
