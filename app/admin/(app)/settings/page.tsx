import { db } from "@/lib/cms/db";
import { settings } from "@/lib/cms/schema";
import { SettingsForm } from "./settings-form";
import type { SettingsValues } from "./actions";

export const dynamic = "force-dynamic";

const DEFAULTS: SettingsValues = {
  org_name: "BasePsych",
  email: "julia.khaw@basepsych.com",
  phone_e164: "+6589107529",
  whatsapp_display: "+65 8910 7529",
  address: {
    line1: "63B Temple Street",
    city: "Singapore",
    postal: "058608",
    country: "SG",
    full: "63B Temple Street, Singapore 058608",
  },
  hours_summary: [
    { label: "Mon, Wed–Fri", time: "10am – 6pm" },
    { label: "Tue", time: "2pm – 9pm" },
    { label: "Sat", time: "10am – 2pm" },
    { label: "Sun", time: "Closed" },
  ],
  instagram_url: "https://instagram.com/base.psych",
  instagram_handle: "@base.psych",
  referral_discount:
    "10% off your first month for returning clients and referrals from past clients.",
};

async function loadValues(): Promise<SettingsValues> {
  try {
    const rows = await db.select().from(settings);
    const map = new Map(rows.map((r) => [r.key, r.value]));
    return {
      org_name: (map.get("org_name") as string) ?? DEFAULTS.org_name,
      email: (map.get("email") as string) ?? DEFAULTS.email,
      phone_e164: (map.get("phone_e164") as string) ?? DEFAULTS.phone_e164,
      whatsapp_display:
        (map.get("whatsapp_display") as string) ?? DEFAULTS.whatsapp_display,
      address:
        (map.get("address") as SettingsValues["address"]) ?? DEFAULTS.address,
      hours_summary:
        (map.get("hours_summary") as SettingsValues["hours_summary"]) ??
        DEFAULTS.hours_summary,
      instagram_url:
        (map.get("instagram_url") as string) ?? DEFAULTS.instagram_url,
      instagram_handle:
        (map.get("instagram_handle") as string) ?? DEFAULTS.instagram_handle,
      referral_discount:
        (map.get("referral_discount") as string) ?? DEFAULTS.referral_discount,
    };
  } catch {
    return DEFAULTS;
  }
}

export default async function SettingsPage() {
  const initial = await loadValues();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Practice details, hours, and social. Saved here now; the marketing
          site will start reading from these in Phase 2.
        </p>
      </div>
      <SettingsForm initial={initial} />
    </div>
  );
}
