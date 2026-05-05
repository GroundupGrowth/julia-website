#!/usr/bin/env node
// Hash a password for ADMIN_PASSWORD_HASH.
// Usage:
//   node scripts/hash-password.mjs 'your-password'
//
// Prints the bcrypt hash to stdout. Paste the result into the
// ADMIN_PASSWORD_HASH env var on Vercel (or .env.local).

import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/hash-password.mjs '<password>'");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
console.log(hash);
