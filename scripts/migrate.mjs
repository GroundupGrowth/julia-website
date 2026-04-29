#!/usr/bin/env node
// Run any *.sql files in /migrations that haven't been applied yet.
// Usage: DATABASE_URL=... node scripts/migrate.mjs

import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const sql = neon(url);
const here = dirname(fileURLToPath(import.meta.url));
const dir = join(here, "..", "migrations");

await sql`CREATE TABLE IF NOT EXISTS _migrations (
  name text PRIMARY KEY,
  run_at timestamptz NOT NULL DEFAULT now()
)`;

const applied = new Set(
  (await sql`SELECT name FROM _migrations`).map((r) => r.name),
);

const files = readdirSync(dir).filter((f) => f.endsWith(".sql")).sort();

for (const f of files) {
  if (applied.has(f)) {
    console.log(`skip   ${f}`);
    continue;
  }
  const stmt = readFileSync(join(dir, f), "utf8");
  console.log(`apply  ${f}`);
  // The serverless driver supports unsafe(text) for raw multi-statement SQL.
  await sql.unsafe(stmt);
  await sql`INSERT INTO _migrations (name) VALUES (${f})`;
}

console.log("done");
