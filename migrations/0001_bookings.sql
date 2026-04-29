CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS bookings (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reason      text,
  who         text,
  mode        text,
  time_window text,
  name        text NOT NULL,
  email       text NOT NULL,
  phone       text,
  note        text,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);
