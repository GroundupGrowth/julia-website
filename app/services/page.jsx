import Link from "next/link";
import { Ico } from "@/components/icons";
import Reveal from "@/components/reveal";
import { HomeBookCTA } from "@/components/home/home-sections";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "Services — BasePsych",
  description:
    "Attachment-informed psychotherapy services for individuals, couples, families, and assessments.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Services</div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              What we <em>can do</em>, together.
            </h1>
            <p className="lead">
              Each service draws from attachment-informed psychotherapy. We adapt our approach
              to who you are, the season you&apos;re in, and the change you&apos;re ready for.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {SERVICES.map((s, i) => {
              const I = Ico[s.icon];
              return (
                <Reveal key={s.id} className="card" style={{ padding: 40 }} delay={i * 0.04}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 28 }}>
                    <div className="deco-circle" style={{ width: 64, height: 64 }}><I size={26} stroke={1.4}/></div>
                    <div className="serif" style={{ fontSize: 22, fontStyle: "italic", color: "var(--clay-deep)" }}>0{i + 1}</div>
                  </div>
                  <h3 className="h-2" style={{ fontSize: 32, marginBottom: 14 }}>{s.title}</h3>
                  <p className="body" style={{ marginBottom: 24 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
                    {s.topics.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <Link className="link-arrow" href="/contact">
                    Enquire about {s.title.toLowerCase()} <Ico.Arrow size={14}/>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Our approach</div>
          <h2 className="h-1" style={{ marginBottom: 24 }}>
            Attachment-informed, <em>practiced gently.</em>
          </h2>
          <p className="lead" style={{ margin: "0 auto 32px" }}>
            We draw on attachment theory, emotion-focused therapy, and parts work — and adapt for what each person needs.
            Some weeks, that means careful, slow exploration. Other weeks, very practical tools.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Book a first session <Ico.Arrow size={13}/>
          </Link>
        </div>
      </section>
      <HomeBookCTA />
    </>
  );
}
