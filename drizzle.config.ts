import type { Config } from "drizzle-kit";

// We do NOT use drizzle-kit to apply migrations — raw SQL files in
// /migrations are applied via scripts/migrate.mjs. This config exists so
// `drizzle-kit studio` and `drizzle-kit generate` work for inspection.
export default {
  schema: "./lib/cms/schema.ts",
  out: "./migrations/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
} satisfies Config;
