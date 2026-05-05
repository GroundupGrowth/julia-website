#!/usr/bin/env node
// Idempotently seed the CMS tables with values mirrored from lib/data.js.
// Usage: DATABASE_URL=... node scripts/seed.mjs
//
// Safe to re-run — every insert uses ON CONFLICT DO NOTHING.

import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const sql = neon(url);

// Mirrors of the constants from lib/data.js. Kept inline so this script
// has no dependency on the app's bundling.
const ADDRESS = {
  line1: "63B Temple Street",
  city: "Singapore",
  postal: "058608",
  country: "SG",
  full: "63B Temple Street, Singapore 058608",
};

const HOURS_SUMMARY = [
  { label: "Mon, Wed–Fri", time: "10am – 6pm" },
  { label: "Tue", time: "2pm – 9pm" },
  { label: "Sat", time: "10am – 2pm" },
  { label: "Sun", time: "Closed" },
];

const REFERRAL_DISCOUNT =
  "10% off your first month for returning clients and referrals from past clients.";

const settingsSeed = [
  ["org_name", "BasePsych"],
  ["address", ADDRESS],
  ["email", "julia.khaw@basepsych.com"],
  ["phone_e164", "+6589107529"],
  ["whatsapp_display", "+65 8910 7529"],
  ["instagram_url", "https://instagram.com/base.psych"],
  ["instagram_handle", "@base.psych"],
  ["hours_summary", HOURS_SUMMARY],
  ["referral_discount", REFERRAL_DISCOUNT],
];

console.log("seed   settings");
for (const [key, value] of settingsSeed) {
  await sql`
    INSERT INTO settings (key, value)
    VALUES (${key}, ${JSON.stringify(value)}::jsonb)
    ON CONFLICT (key) DO NOTHING
  `;
}

console.log("seed   embeds");
const embedsSeed = [
  {
    key: "booking-calendar",
    name: "Booking calendar",
    html: "<!-- paste your Cal.com / Calendly embed here -->",
    enabled: false,
  },
  {
    key: "newsletter",
    name: "Newsletter signup",
    html: "<!-- paste embed here -->",
    enabled: false,
  },
];
for (const e of embedsSeed) {
  await sql`
    INSERT INTO embeds (key, name, html, enabled)
    VALUES (${e.key}, ${e.name}, ${e.html}, ${e.enabled})
    ON CONFLICT (key) DO NOTHING
  `;
}

console.log("done");
