import { neon } from "@neondatabase/serverless";

let _sql = null;

function getSql() {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL environment variable is not set");
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
