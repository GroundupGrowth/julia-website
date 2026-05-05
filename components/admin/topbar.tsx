import Link from "next/link";
import { ExternalLink, LogOut } from "lucide-react";

import { Button } from "@/components/admin/ui/button";

type TopbarProps = {
  email?: string;
};

export function Topbar({ email }: TopbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-card px-6">
      <div className="text-sm text-muted-foreground">
        {email ? <span>Signed in as {email}</span> : null}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" />
            View site
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="/handler/sign-out">
            <LogOut className="h-4 w-4" />
            Sign out
          </a>
        </Button>
      </div>
    </header>
  );
}
