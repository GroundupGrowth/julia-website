import Link from "next/link";
import { Ico } from "@/components/icons";
import Reveal from "@/components/reveal";
import { HomeBookCTA } from "@/components/home/home-sections";
import { THERAPISTS, WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Your therapist — Julia Khaw — BasePsych",
  description:
    "Meet Julia Khaw, Clinical Psychologist at BasePsych. Attachment-informed, trauma-aware therapy in Singapore.",
};

export default function TherapistsPage() {
  const t = THERAPISTS[0];
  const approach = [
    { icon: "Anchor", title: "Attachment-informed", desc: "Rooted in the science of how early bonds shape adult lives — and how new, secure ones can be built." },
    { icon: "Shelter", title: "Trauma-aware pace", desc: "Carefully paced work that respects what your nervous system can hold. Slowness is part of the medicine." },
    { icon: "Thread", title: "Whole-person", desc: "Mood, body, relationships, identity, and the patterns running underneath — held together, not in pieces." },
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Your therapist</div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              Meet <em>Julia.</em>
            </h1>
            <p className="lead">
              BasePsych is a single, careful clinical practice — built around one therapist
              and the relationships she keeps. No pairing algorithms, no shuffle. Just one steady hand.
            </p>
          </div>

          <div className="card split-bio" style={{ padding: 0, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.photo}
              alt={t.name}
              className="profile-photo"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div className="profile-card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16, gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 className="h-1" style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 6 }}>{t.name}</h3>
                  <div style={{ fontSize: 15, color: "var(--ink-mute)" }}>{t.title}</div>
                </div>
                <span className="tag tag-forest" style={{ alignSelf: "start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--forest)" }}/>
                  Available {t.availability.toLowerCase()}
                </span>
              </div>
              <p className="serif" style={{ fontSize: 24, fontStyle: "italic", color: "var(--ink)", marginBottom: 28, lineHeight: 1.4 }}>
                &ldquo;{t.blurb}&rdquo;
              </p>
              <div className="form-row-2" style={{ gap: 28, marginBottom: 32 }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>Focus areas</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {t.focuses.map((f) => <span key={f} className="tag">{f}</span>)}
                  </div>
                </div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>Languages</div>
                  <div className="body" style={{ fontSize: 15 }}>{t.languages.join(", ")}</div>
                  <div className="eyebrow" style={{ marginTop: 18, marginBottom: 10 }}>Modality</div>
                  <div className="body" style={{ fontSize: 15 }}>In-person & online</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn btn-primary" href="/contact">
                  Book with Julia <Ico.Arrow size={13}/>
                </Link>
                <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <Ico.WhatsApp size={14}/> Ask first
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>How Julia works</div>
            <h2 className="h-1">Three principles that <em>shape every session.</em></h2>
          </div>
          <div className="grid-3">
            {approach.map((a, i) => {
              const I = Ico[a.icon];
              return (
                <Reveal key={a.title} className="card" style={{ padding: 32 }} delay={i * 0.06}>
                  <div className="deco-circle" style={{ marginBottom: 24 }}><I size={22} stroke={1.4}/></div>
                  <h3 className="h-3" style={{ marginBottom: 12 }}>{a.title}</h3>
                  <p className="body">{a.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <HomeBookCTA />
    </>
  );
}
