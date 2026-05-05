import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Build a Drizzle client lazily so importing this module during `next build`
// (where DATABASE_URL may be absent) doesn't crash. Only routes that actually
// run a query will hit the missing-env error.
let _db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error("Neither DATABASE_URL nor POSTGRES_URL is set");
  }
  _db = drizzle(neon(url), { schema });
  return _db;
}

export const db: ReturnType<typeof drizzle> = new Proxy(
  {} as ReturnType<typeof drizzle>,
  {
    get(_target, prop) {
      const real = getDb() as unknown as Record<PropertyKey, unknown>;
      const value = real[prop];
      return typeof value === "function" ? value.bind(real) : value;
    },
  },
);

export { schema };
