import { db } from "@/lib/cms/db";
import { embeds, type Embed } from "@/lib/cms/schema";
import { EmbedsManager } from "./embeds-manager";

export const dynamic = "force-dynamic";

async function loadEmbeds(): Promise<Embed[]> {
  try {
    return await db.select().from(embeds).orderBy(embeds.name);
  } catch {
    return [];
  }
}

export default async function EmbedsPage() {
  const list = await loadEmbeds();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Embeds</h1>
        <p className="text-sm text-muted-foreground">
          Reusable HTML snippets (booking widgets, newsletter forms, etc.).
          Reference them on the site by their key.
        </p>
      </div>
      <EmbedsManager initial={list} />
    </div>
  );
}
