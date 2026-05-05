import Link from "next/link";
import { Ico } from "@/components/icons";
import {
  NAV_LINKS,
  WHATSAPP_URL,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ADDRESS,
  HOURS_SUMMARY,
} from "@/lib/data";

function FooterLogo() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <circle cx="16" cy="16" r="4" fill="currentColor"/>
      </svg>
      <span className="serif" style={{ fontSize: 22, letterSpacing: "-0.01em", fontWeight: 500 }}>
        BasePsych
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, color: "var(--clay)" }}>
              <FooterLogo />
            </div>
            <p className="body" style={{ maxWidth: 360 }}>
              Singapore&apos;s attachment-informed psychological services.
              A safe foundation that gives space to explore, learn, and flourish.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-clay btn-sm" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Ico.WhatsApp size={14}/> Message us
              </a>
              <a className="btn btn-ghost btn-sm" style={{ color: "var(--bg-soft)", borderColor: "rgba(245,240,225,0.4)" }} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram · {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Visit</div>
            <p className="body">{ADDRESS.line1}<br/>{ADDRESS.city} {ADDRESS.postal}</p>
            <div className="eyebrow" style={{ color: "var(--clay)", marginTop: 24, marginBottom: 12 }}>Hours</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }} className="body">
              {HOURS_SUMMARY.map((h) => (
                <li key={h.label}>{h.label} · {h.time}</li>
              ))}
            </ul>
            <div className="eyebrow" style={{ color: "var(--clay)", marginTop: 24, marginBottom: 8 }}>Email</div>
            <a className="body" style={{ wordBreak: "break-word" }} href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Pages</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Crisis support</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }} className="body">
              <li><strong style={{ color: "var(--bg-soft)" }}>999</strong> — Emergency</li>
              <li><strong style={{ color: "var(--bg-soft)" }}>6389 2222</strong> — IMH</li>
              <li><strong style={{ color: "var(--bg-soft)" }}>1800 221 444</strong> — SOS</li>
            </ul>
          </div>
        </div>
        <div className="rule"></div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 24, fontSize: 13, color: "rgba(245,240,225,0.5)" }}>
          <span>© 2026 BasePsych. All rights reserved.</span>
          <span>Privacy · Terms · HIPAA-compliant</span>
        </div>
      </div>
    </footer>
  );
}
