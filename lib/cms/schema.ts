import {
  pgTable,
  text,
  jsonb,
  timestamp,
  uuid,
  integer,
  boolean,
  index,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// settings: key/value JSON store. One row per logical key
// (e.g. "address", "hours_summary", "referral_discount").
export const settings = pgTable("settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Setting = typeof settings.$inferSelect;
export type NewSetting = typeof settings.$inferInsert;

// faqs: editable FAQ list, ordered by `position`.
export const faqs = pgTable(
  "faqs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    position: integer("position").notNull().default(0),
    enabled: boolean("enabled").notNull().default(true),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    positionIdx: index("faqs_position_idx").on(table.position),
  }),
);

export type Faq = typeof faqs.$inferSelect;
export type NewFaq = typeof faqs.$inferInsert;

// articles: long-form content. `blocks` is a JSON array of structured
// content blocks (headings, paragraphs, callouts, etc.).
export const articles = pgTable("articles", {
  id: integer("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  excerpt: text("excerpt").notNull(),
  readMinutes: integer("read_minutes").notNull().default(5),
  dateLabel: text("date_label").notNull(),
  noLabel: text("no_label"),
  kicker: text("kicker"),
  standfirst: text("standfirst"),
  blocks: jsonb("blocks")
    .notNull()
    .default(sql`'[]'::jsonb`),
  coverAssetId: uuid("cover_asset_id"),
  status: text("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Article = typeof articles.$inferSelect;
export type NewArticle = typeof articles.$inferInsert;

// embeds: arbitrary HTML snippets keyed by slug (e.g. "booking-calendar").
export const embeds = pgTable("embeds", {
  key: text("key").primaryKey(),
  name: text("name").notNull(),
  html: text("html").notNull().default(""),
  enabled: boolean("enabled").notNull().default(true),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Embed = typeof embeds.$inferSelect;
export type NewEmbed = typeof embeds.$inferInsert;

// assets: uploaded images / files. URL points to wherever they live
// (Vercel Blob, R2, etc.).
export const assets = pgTable("assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  pathname: text("pathname").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  width: integer("width"),
  height: integer("height"),
  altText: text("alt_text"),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Asset = typeof assets.$inferSelect;
export type NewAsset = typeof assets.$inferInsert;
