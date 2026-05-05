"use client";

import { useState, useTransition } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Textarea } from "@/components/admin/ui/textarea";
import { SectionCard } from "@/components/admin/section-card";
import { saveSettings, SettingsSchema, type SettingsValues } from "./actions";

export function SettingsForm({ initial }: { initial: SettingsValues }) {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<SettingsValues>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: initial,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "hours_summary",
  });

  function onSubmit(values: SettingsValues) {
    setServerError(null);
    startTransition(async () => {
      const res = await saveSettings(values);
      if (res.ok) {
        toast.success("Settings saved");
      } else {
        setServerError(res.error);
        toast.error(res.error);
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <SectionCard
        title="Practice"
        description="The name and contact channels for the practice."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Organisation name" error={form.formState.errors.org_name?.message}>
            <Input {...form.register("org_name")} />
          </Field>
          <Field label="Email" error={form.formState.errors.email?.message}>
            <Input type="email" {...form.register("email")} />
          </Field>
          <Field label="Phone (E.164)" error={form.formState.errors.phone_e164?.message}>
            <Input {...form.register("phone_e164")} />
          </Field>
          <Field
            label="WhatsApp display"
            error={form.formState.errors.whatsapp_display?.message}
          >
            <Input {...form.register("whatsapp_display")} />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Address" description="Used in the footer and schema.org markup.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Line 1" error={form.formState.errors.address?.line1?.message}>
            <Input {...form.register("address.line1")} />
          </Field>
          <Field label="City" error={form.formState.errors.address?.city?.message}>
            <Input {...form.register("address.city")} />
          </Field>
          <Field label="Postal code" error={form.formState.errors.address?.postal?.message}>
            <Input {...form.register("address.postal")} />
          </Field>
          <Field label="Country code" error={form.formState.errors.address?.country?.message}>
            <Input {...form.register("address.country")} />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Full address" error={form.formState.errors.address?.full?.message}>
              <Input {...form.register("address.full")} />
            </Field>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Hours"
        description="Compact opening-hours summary."
        actions={
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ label: "", time: "" })}
          >
            <Plus className="h-4 w-4" />
            Add row
          </Button>
        }
      >
        <div className="flex flex-col gap-3">
          {fields.map((field, idx) => (
            <div
              key={field.id}
              className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]"
            >
              <Field
                label={idx === 0 ? "Label" : undefined}
                error={form.formState.errors.hours_summary?.[idx]?.label?.message}
              >
                <Input
                  placeholder="Mon, Wed–Fri"
                  {...form.register(`hours_summary.${idx}.label` as const)}
                />
              </Field>
              <Field
                label={idx === 0 ? "Time" : undefined}
                error={form.formState.errors.hours_summary?.[idx]?.time?.message}
              >
                <Input
                  placeholder="10am – 6pm"
                  {...form.register(`hours_summary.${idx}.time` as const)}
                />
              </Field>
              <div className={idx === 0 ? "self-end" : "self-start"}>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(idx)}
                  aria-label="Remove row"
                  disabled={fields.length <= 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Social" description="Instagram link and handle.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Instagram URL"
            error={form.formState.errors.instagram_url?.message}
          >
            <Input {...form.register("instagram_url")} />
          </Field>
          <Field
            label="Instagram handle"
            error={form.formState.errors.instagram_handle?.message}
          >
            <Input {...form.register("instagram_handle")} />
          </Field>
        </div>
      </SectionCard>

      <SectionCard
        title="Offer"
        description="Surfaced on the contact page and in the FAQs."
      >
        <Field
          label="Referral discount copy"
          error={form.formState.errors.referral_discount?.message}
        >
          <Textarea rows={3} {...form.register("referral_discount")} />
        </Field>
      </SectionCard>

      {serverError ? (
        <p className="text-sm text-destructive" role="alert">
          {serverError}
        </p>
      ) : null}
      <div className="flex justify-end">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving…" : "Save changes"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label ? <Label>{label}</Label> : null}
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
