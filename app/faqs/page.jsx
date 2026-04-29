import Link from "next/link";
import { Ico } from "@/components/icons";
import FaqsList from "@/components/faqs-list";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "FAQs — BasePsych",
  description:
    "Honest answers to common questions about therapy at BasePsych — fees, insurance, first sessions, and confidentiality.",
};

export default function FaqsPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>FAQs</div>
          <h1 className="h-display" style={{ marginBottom: 24 }}>
            The honest answers, <em>up front.</em>
          </h1>
          <p className="lead">If you have a question we haven&apos;t answered, just message us — we always reply.</p>
        </div>
        <FaqsList />
        <div style={{ marginTop: 64, padding: 36, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", textAlign: "center" }}>
          <h3 className="h-3" style={{ marginBottom: 10 }}>Still have a question?</h3>
          <p className="body" style={{ marginBottom: 24 }}>We&apos;re a small team — your message goes straight to a real person.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Ico.WhatsApp/> WhatsApp us
            </a>
            <Link className="btn btn-ghost" href="/contact">Use the contact form</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
