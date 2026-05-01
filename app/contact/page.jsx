import Link from "next/link";
import { Ico } from "@/components/icons";
import BookingFlow from "@/components/contact/booking-flow";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/data";

export const metadata = {
  title: "Contact — BasePsych",
  description:
    "Tell us a little about what brings you here. A real person from BasePsych will reply within one working day.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-aside" style={{ position: "sticky", top: 100 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Get in touch</div>
          <h1 className="h-1" style={{ marginBottom: 28 }}>
            Tell us a little. <em>We&apos;ll take it from there.</em>
          </h1>
          <p className="body" style={{ marginBottom: 36 }}>
            This isn&apos;t a form to fill out. It&apos;s a few small questions that
            help us point you to the right therapist, the right service, the right pace.
          </p>
          <div className="rule" style={{ marginBottom: 28 }}/>
          <div style={{ display: "grid", gap: 18 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>WhatsApp</div>
              <a className="link-arrow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {WHATSAPP_DISPLAY} <Ico.Arrow size={13}/>
              </a>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Visit</div>
              <div className="body" style={{ fontSize: 15 }}>63b Temple St, Singapore 058608<br/>Mon–Sat · 9am–9pm</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Email</div>
              <div className="body" style={{ fontSize: 15 }}>hello@basepsych.com</div>
            </div>
            <div>
              <Link className="link-arrow" href="/faqs" style={{ color: "var(--ink-mute)", borderColor: "var(--ink-mute)" }}>
                Read FAQs first <Ico.Arrow size={13}/>
              </Link>
            </div>
          </div>
        </div>
        <BookingFlow />
      </div>
    </section>
  );
}
