-- CMS schema (Phase 1). gen_random_uuid() comes from pgcrypto, already
-- created by 0001_bookings.sql.

CREATE TABLE IF NOT EXISTS settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  position integer NOT NULL DEFAULT 0,
  enabled boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS faqs_position_idx ON faqs (position ASC);

CREATE TABLE IF NOT EXISTS articles (
  id integer PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL,
  excerpt text NOT NULL,
  read_minutes integer NOT NULL DEFAULT 5,
  date_label text NOT NULL,
  no_label text,
  kicker text,
  standfirst text,
  blocks jsonb NOT NULL DEFAULT '[]'::jsonb,
  cover_asset_id uuid,
  status text NOT NULL DEFAULT 'draft',
  published_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS embeds (
  key text PRIMARY KEY,
  name text NOT NULL,
  html text NOT NULL DEFAULT '',
  enabled boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  pathname text NOT NULL,
  mime_type text NOT NULL,
  size integer NOT NULL,
  width integer,
  height integer,
  alt_text text,
  uploaded_at timestamptz NOT NULL DEFAULT now()
);

-- bookings already exists from migration 0001; not recreated here.
