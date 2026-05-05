import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteShell from "@/components/site-shell";
import {
  ORG_NAME,
  PHONE_E164,
  EMAIL,
  INSTAGRAM_URL,
  SITE_URL,
  ADDRESS,
  HOURS,
  NAP_FOR_SCHEMA,
} from "@/lib/data";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const DESCRIPTION =
  "Attachment-informed psychotherapy in Singapore. Individual therapy for youths and adults, talks and workshops, and psychological assessments — with Julia Khaw, Registered Clinical Psychologist.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${ORG_NAME} — Attachment-informed psychotherapy in Singapore`,
    template: `%s — ${ORG_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: `${ORG_NAME} — Attachment-informed psychotherapy in Singapore`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: ORG_NAME,
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORG_NAME} — Attachment-informed psychotherapy`,
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

// Schema.org openingHoursSpecification — Sun is omitted (closed).
const openingHoursSpecification = HOURS
  .filter((h) => h.open)
  .map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${({
      Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday",
      Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
    })[h.day]}`,
    opens: h.open,
    closes: h.close,
  }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: ORG_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  address: NAP_FOR_SCHEMA,
  areaServed: { "@type": "City", name: "Singapore" },
  openingHoursSpecification,
  sameAs: [INSTAGRAM_URL],
  // Reuse the address line for makesOffer hints — Schema doesn't strictly need this.
  founder: { "@type": "Person", name: "Julia Khaw", jobTitle: "Registered Clinical Psychologist" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
