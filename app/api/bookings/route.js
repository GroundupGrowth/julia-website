import { z } from "zod";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  reason: z.string().trim().max(64).optional().default(""),
  who:    z.string().trim().max(64).optional().default(""),
  mode:   z.string().trim().max(64).optional().default(""),
  time:   z.string().trim().max(64).optional().default(""),
  name:   z.string().trim().min(1).max(120),
  email:  z.string().trim().email().max(254),
  phone:  z.string().trim().max(40).optional().default(""),
  note:   z.string().trim().max(2000).optional().default(""),
});

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const v = parsed.data;

  try {
    const rows = await sql`
      INSERT INTO bookings (reason, who, mode, time_window, name, email, phone, note)
      VALUES (${v.reason}, ${v.who}, ${v.mode}, ${v.time}, ${v.name}, ${v.email}, ${v.phone}, ${v.note})
      RETURNING id
    `;
    return Response.json({ ok: true, id: rows[0]?.id });
  } catch (err) {
    console.error("bookings: db insert failed", err?.message);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
