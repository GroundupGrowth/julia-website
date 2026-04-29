import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteShell from "@/components/site-shell";
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

export const metadata = {
  title: "BasePsych — Attachment-informed psychotherapy in Singapore",
  description:
    "BasePsych is a small, careful clinical practice in Singapore offering attachment-informed psychotherapy with Julia Khaw, Clinical Psychologist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
