import Link from "next/link";
import { sql } from "drizzle-orm";
import {
  Code2,
  FileText,
  HelpCircle,
  ImageIcon,
  Inbox,
  Settings,
} from "lucide-react";

import { db } from "@/lib/cms/db";
import { articles, assets, embeds, faqs, settings } from "@/lib/cms/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/admin/ui/card";

export const dynamic = "force-dynamic";

type Counts = {
  settings: number;
  faqs: number;
  articles: number;
  embeds: number;
  bookings: number;
  assets: number;
};

async function getCounts(): Promise<Counts> {
  const fallback: Counts = {
    settings: 0,
    faqs: 0,
    articles: 0,
    embeds: 0,
    bookings: 0,
    assets: 0,
  };
  try {
    const results = await Promise.all([
      db.execute(sql`SELECT COUNT(*)::int AS c FROM ${settings}`),
      db.execute(sql`SELECT COUNT(*)::int AS c FROM ${faqs}`),
      db.execute(
        sql`SELECT COUNT(*)::int AS c FROM ${articles} WHERE status = 'published'`,
      ),
      db.execute(
        sql`SELECT COUNT(*)::int AS c FROM ${embeds} WHERE enabled = true`,
      ),
      db.execute(
        sql`SELECT COUNT(*)::int AS c FROM bookings WHERE created_at > now() - interval '7 days'`,
      ),
      db.execute(sql`SELECT COUNT(*)::int AS c FROM ${assets}`),
    ]);
    const [s, f, a, e, b, as] = results.map((r) => {
      const rows = (r as unknown as { rows?: Array<{ c: number }> }).rows;
      const first = rows && rows[0];
      return Number(first?.c ?? 0) || 0;
    });
    return {
      settings: s,
      faqs: f,
      articles: a,
      embeds: e,
      bookings: b,
      assets: as,
    };
  } catch {
    // DB unavailable (e.g. local dev without DATABASE_URL set, or before
    // the migration has run). Show zeros instead of crashing the dashboard.
    return fallback;
  }
}

const TILES: Array<{
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  countKey: keyof Counts;
  unit: string;
}> = [
  {
    href: "/admin/settings",
    title: "Settings",
    description: "Practice info, hours, social links",
    icon: Settings,
    countKey: "settings",
    unit: "keys",
  },
  {
    href: "/admin/faqs",
    title: "FAQs",
    description: "Frequently asked questions",
    icon: HelpCircle,
    countKey: "faqs",
    unit: "questions",
  },
  {
    href: "/admin/articles",
    title: "Articles",
    description: "Published long-form content",
    icon: FileText,
    countKey: "articles",
    unit: "published",
  },
  {
    href: "/admin/embeds",
    title: "Embeds",
    description: "Active third-party HTML snippets",
    icon: Code2,
    countKey: "embeds",
    unit: "active",
  },
  {
    href: "/admin/bookings",
    title: "Bookings",
    description: "Contact-form submissions (7d)",
    icon: Inbox,
    countKey: "bookings",
    unit: "this week",
  },
  {
    href: "/admin/assets",
    title: "Assets",
    description: "Uploaded images and files",
    icon: ImageIcon,
    countKey: "assets",
    unit: "files",
  },
];

export default async function DashboardPage() {
  const counts = await getCounts();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your CMS content.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((tile) => {
          const Icon = tile.icon;
          const value = counts[tile.countKey];
          return (
            <Link key={tile.href} href={tile.href} className="block">
              <Card className="h-full transition-colors hover:border-primary/40 hover:bg-accent/40">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {tile.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{value}</div>
                  <CardDescription className="mt-1">
                    {tile.unit} · {tile.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
