"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/lib/cms/db";
import { embeds } from "@/lib/cms/schema";
import { slugify } from "@/lib/cms/utils";

export type ActionResult<T = void> =
  | { ok: true; data?: T }
  | { ok: false; error: string };

const CreateSchema = z.object({
  name: z.string().min(1).max(120),
  key: z
    .string()
    .min(1)
    .max(64)
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and dashes only"),
});

const UpdateSchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1).max(120),
  html: z.string(),
  enabled: z.boolean(),
});

const ToggleSchema = z.object({
  key: z.string().min(1),
  enabled: z.boolean(),
});

export async function createEmbed(
  input: z.input<typeof CreateSchema>,
): Promise<ActionResult<{ key: string }>> {
  const parsed = CreateSchema.safeParse({
    name: input.name,
    key: input.key || slugify(input.name),
  });
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  try {
    await db
      .insert(embeds)
      .values({
        key: parsed.data.key,
        name: parsed.data.name,
        html: "",
        enabled: false,
      })
      .onConflictDoNothing();
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Database error",
    };
  }
  revalidatePath("/admin/embeds");
  revalidatePath("/");
  return { ok: true, data: { key: parsed.data.key } };
}

export async function updateEmbed(
  input: z.input<typeof UpdateSchema>,
): Promise<ActionResult> {
  const parsed = UpdateSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid input" };
  }
  try {
    await db
      .update(embeds)
      .set({
        name: parsed.data.name,
        html: parsed.data.html,
        enabled: parsed.data.enabled,
        updatedAt: new Date(),
      })
      .where(eq(embeds.key, parsed.data.key));
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Database error",
    };
  }
  revalidatePath("/admin/embeds");
  revalidatePath("/");
  return { ok: true };
}

export async function toggleEmbed(
  input: z.input<typeof ToggleSchema>,
): Promise<ActionResult> {
  const parsed = ToggleSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid input" };
  }
  try {
    await db
      .update(embeds)
      .set({ enabled: parsed.data.enabled, updatedAt: new Date() })
      .where(eq(embeds.key, parsed.data.key));
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Database error",
    };
  }
  revalidatePath("/admin/embeds");
  revalidatePath("/");
  return { ok: true };
}

export async function deleteEmbed(key: string): Promise<ActionResult> {
  try {
    await db.delete(embeds).where(eq(embeds.key, key));
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Database error",
    };
  }
  revalidatePath("/admin/embeds");
  revalidatePath("/");
  return { ok: true };
}
