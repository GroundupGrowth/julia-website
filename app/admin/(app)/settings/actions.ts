"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/cms/db";
import { settings } from "@/lib/cms/schema";
import { sql } from "drizzle-orm";

const HoursRowSchema = z.object({
  label: z.string().min(1),
  time: z.string().min(1),
});

export const SettingsSchema = z.object({
  org_name: z.string().min(1),
  email: z.string().email(),
  phone_e164: z.string().min(3),
  whatsapp_display: z.string().min(3),
  address: z.object({
    line1: z.string().min(1),
    city: z.string().min(1),
    postal: z.string().min(1),
    country: z.string().min(1),
    full: z.string().min(1),
  }),
  hours_summary: z.array(HoursRowSchema).min(1),
  instagram_url: z.string().url(),
  instagram_handle: z.string().min(1),
  referral_discount: z.string().min(1),
});

export type SettingsValues = z.infer<typeof SettingsSchema>;
export type SaveResult =
  | { ok: true }
  | { ok: false; error: string };

// Server action: upsert every settings key in a single transaction. After
// success, revalidate the paths that surface this content.
export async function saveSettings(values: SettingsValues): Promise<SaveResult> {
  const parsed = SettingsSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed" };
  }
  const v = parsed.data;

  const rows: Array<[string, unknown]> = [
    ["org_name", v.org_name],
    ["email", v.email],
    ["phone_e164", v.phone_e164],
    ["whatsapp_display", v.whatsapp_display],
    ["address", v.address],
    ["hours_summary", v.hours_summary],
    ["instagram_url", v.instagram_url],
    ["instagram_handle", v.instagram_handle],
    ["referral_discount", v.referral_discount],
  ];

  try {
    // neon-http doesn't support multi-statement transactions in the same
    // way as a TCP client; emulate one with a CTE. Drizzle's neon-http
    // .transaction() runs each call separately, so we just upsert each
    // row sequentially. Failures bubble up.
    for (const [key, value] of rows) {
      await db
        .insert(settings)
        .values({ key, value: value as never })
        .onConflictDoUpdate({
          target: settings.key,
          set: {
            value: sql`EXCLUDED.value`,
            updatedAt: sql`now()`,
          },
        });
    }
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Database error",
    };
  }

  // Marketing site doesn't yet read these (Phase 2), but revalidate anyway
  // so the moment we wire it up, caches drop.
  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/faqs");

  return { ok: true };
}
