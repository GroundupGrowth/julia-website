import { neon } from "@neondatabase/serverless";

let _sql = null;

function getSql() {
  if (_sql) return _sql;
  // Vercel's Neon integration sets DATABASE_URL; some projects only get
  // POSTGRES_URL. Accept either so the API works regardless of which one
  // the integration provisioned.
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error("Neither DATABASE_URL nor POSTGRES_URL is set");
  }
  _sql = neon(url);
  return _sql;
}

// Proxy that lazily initializes the underlying neon tag the first time it's
// used. This lets the module be imported during `next build` (where env may
// not be present) without crashing — only routes that actually run a query
// will hit the missing-env error.
export const sql = new Proxy(function () {}, {
  apply(_target, _thisArg, args) {
    return getSql().apply(undefined, args);
  },
  get(_target, prop) {
    const tag = getSql();
    return tag[prop];
  },
});
