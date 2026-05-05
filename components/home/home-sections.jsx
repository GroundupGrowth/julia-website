// BasePsych — Home page section components (Server Components by default)

import Link from "next/link";
import { Ico, ThreadMotif, RingsMotif } from "@/components/icons";
import Reveal from "@/components/reveal";
import MoodEntry from "@/components/mood-entry";
import { SERVICES, THERAPISTS, ARTICLES, WHATSAPP_URL } from "@/lib/data";
import { HERO_IMG, MOOD_IMG, ARTICLE_COVERS } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="section">
      <div className="container">
        <Reveal style={{ textAlign: "center", maxWidth: 960, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Singapore · Attachment-informed psychotherapy</div>
          <h1 className="h-display" style={{ marginBottom: 32 }}>
            We all need somewhere<br/>to land. <em>This is one</em><br/>of those places.
          </h1>
          <p className="lead" style={{ margin: "0 auto 36px" }}>
            BasePsych is a small, careful clinical practice in Singapore — built around the
            principle that healing happens when we feel safe enough to look.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-primary btn-lg" href="/contact">Book a first session <Ico.Arrow/></Link>
            <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={16}/> Send a message
            </a>
          </div>
        </Reveal>
        <div style={{ marginTop: 80, position: "relative" }}>
          <div className="imgph" style={{ height: 420, borderRadius: 6 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Soft natural light through a window in a quiet room"/>
            <span className="imgph-tag">Wide · therapy room interior, natural light</span>
          </div>
          <div style={{ position: "absolute", top: -24, right: -24, color: "var(--sage)", opacity: 0.7 }}>
            <RingsMotif size={120}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <section className="section-tight" style={{ background: "var(--bg-soft)" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Why &ldquo;BasePsych&rdquo;?</div>
        <p className="quote" style={{ marginBottom: 20 }}>
          &ldquo;The name BasePsych is inspired by attachment theory — our primal need for a <em>secure base</em>:
          a safe foundation that gives us a space to explore, learn, and flourish.&rdquo;
        </p>
        <p className="body" style={{ maxWidth: 580, margin: "0 auto" }}>
          At the heart of our practice is a commitment to serve our community with the highest
          professional and ethical standards. We wish you a smooth start in this journey.
        </p>
      </div>
    </section>
  );
}

export function HomeMood() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <MoodEntry />
          <div style={{ position: "relative" }}>
            <div className="imgph" style={{ aspectRatio: "4/5", borderRadius: 6 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={MOOD_IMG} alt="A pair of hands cradling a warm cup beside a plant"/>
              <span className="imgph-tag">Hands · cradling warm cup, blurred plant</span>
            </div>
            <div style={{ position: "absolute", left: -28, top: -28, color: "var(--clay-deep)", opacity: 0.6 }}>
              <RingsMotif size={130}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeHowItWorks() {
  const steps = [
    { n: "01", icon: "Hand", title: "Reach out", desc: "WhatsApp, email, or our form. A real person — not a bot — replies within a day." },
    { n: "02", icon: "Thread", title: "Get matched", desc: "We pair you with a therapist suited to your needs, language, and preference." },
    { n: "03", icon: "Shelter", title: "Start therapy", desc: "Meet in our Temple Street studio or online. A confidential, unhurried space." },
  ];
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>How it works</div>
            <h2 className="h-1" style={{ maxWidth: 540 }}>Three steps. <em>No surprises.</em></h2>
          </div>
          <Link className="btn btn-ghost" href="/contact">Start here <Ico.Arrow size={14}/></Link>
        </div>
        <div className="grid-3">
          {steps.map((s, i) => {
            const I = Ico[s.icon];
            return (
              <Reveal key={s.n} className="card" style={{ padding: 32 }} delay={i * 0.08}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 32 }}>
                  <div className="deco-circle"><I size={22} stroke={1.4}/></div>
                  <div className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--clay-deep)" }}>{s.n}</div>
                </div>
                <h3 className="h-3" style={{ marginBottom: 12 }}>{s.title}</h3>
                <p className="body">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeServices() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>What we offer</div>
            <h2 className="h-1" style={{ maxWidth: 600 }}>Care that meets you <em>where you are</em>.</h2>
          </div>
          <Link className="btn btn-ghost" href="/services">All services <Ico.Arrow size={14}/></Link>
        </div>
        <div className="grid-3">
          {SERVICES.slice(0, 6).map((s, i) => {
            const I = Ico[s.icon];
            return (
              <Reveal
                as={Link}
                key={s.id}
                href="/services"
                className="card"
                style={{ textAlign: "left", cursor: "pointer", display: "block" }}
                delay={i * 0.04}
              >
                <div style={{ color: "var(--forest)", marginBottom: 24 }}><I size={28} stroke={1.4}/></div>
                <h3 className="h-3" style={{ marginBottom: 10 }}>{s.title}</h3>
                <p className="body" style={{ marginBottom: 20, fontSize: 15 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.topics.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeTherapists() {
  const t = THERAPISTS[0];
  return (
    <section className="section" style={{ background: "var(--forest-deep)", color: "var(--bg-soft)" }}>
      <div className="container">
        <div className="split-bio with-gap">
          <Reveal style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.photo}
              alt={t.name}
              style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block" }}
            />
            <div style={{ position: "absolute", left: -24, bottom: -24, color: "var(--clay)", opacity: 0.55 }}>
              <RingsMotif size={120}/>
            </div>
          </Reveal>
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 16 }}>Meet your therapist</div>
            <h2 className="h-1" style={{ color: "var(--bg-soft)", marginBottom: 24 }}>
              One careful practice. <em style={{ color: "var(--clay)" }}>One steady hand.</em>
            </h2>
            <p className="serif" style={{ fontSize: 24, fontStyle: "italic", lineHeight: 1.4, color: "var(--bg-soft)", marginBottom: 28 }}>
              &ldquo;{t.blurb}&rdquo;
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
              {t.focuses.map((f) => (
                <span key={f} className="tag" style={{ background: "rgba(212,184,150,0.15)", border: "1px solid rgba(212,184,150,0.3)", color: "var(--clay)" }}>{f}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 24, marginBottom: 32, fontSize: 14, color: "rgba(245,240,225,0.7)" }}>
              <div><span style={{ color: "var(--clay)" }}>Languages</span> · {t.languages.join(", ")}</div>
              <div><span style={{ color: "var(--clay)" }}>Available</span> · {t.availability.toLowerCase()}</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-clay" href="/contact">Book with Julia <Ico.Arrow size={13}/></Link>
              <Link
                className="btn btn-ghost"
                style={{ color: "var(--bg-soft)", borderColor: "rgba(245,240,225,0.4)" }}
                href="/therapists"
              >
                Read full bio
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomeArticles() {
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Articles &amp; essays</div>
            <h2 className="h-1" style={{ maxWidth: 540 }}>Slow reading <em>about staying soft.</em></h2>
          </div>
          <Link className="btn btn-ghost" href="/articles">Read the journal <Ico.Arrow size={14}/></Link>
        </div>
        <div className="grid-2" style={{ gap: 32 }}>
          {ARTICLES.slice(0, 2).map((a, i) => (
            <Reveal
              as="article"
              key={a.id}
              delay={i * 0.06}
              style={{ cursor: "pointer" }}
            >
              <Link href={`/articles/${a.id}`} style={{ display: "block", color: "inherit" }}>
                <div className="imgph" style={{ aspectRatio: "16/10", borderRadius: 6, marginBottom: 24 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ARTICLE_COVERS[a.id]} alt={a.title}/>
                  <span className="imgph-tag">Editorial · {a.cat}</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <span className="tag tag-forest">{a.cat}</span>
                  <span className="small">{a.read} min read · {a.date}</span>
                </div>
                <h3 className="h-2" style={{ fontSize: 32, marginBottom: 14 }}>{a.title}</h3>
                <p className="body">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBookCTA() {
  return (
    <section style={{ position: "relative", padding: "calc(120px * var(--space)) 0", overflow: "hidden" }}>
      <div className="container">
        <div className="cta-box">
          <div style={{ position: "absolute", inset: 0, opacity: 0.18, color: "var(--clay)" }}>
            <RingsMotif size={420}/>
          </div>
          <div style={{ position: "relative", maxWidth: 640 }}>
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Same-day &amp; after-hours</div>
            <h2 className="h-1" style={{ color: "var(--bg-card)", marginBottom: 24 }}>
              Make an appointment <em style={{ color: "var(--clay)" }}>today.</em>
            </h2>
            <p className="lead" style={{ color: "rgba(245,240,225,0.8)", marginBottom: 36 }}>
              Same-day appointments, after-hours availability, or your preferred dates.
              We hold a few slots open each week for new clients.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-clay btn-lg" href="/contact">Book now <Ico.Arrow/></Link>
              <a
                className="btn btn-ghost btn-lg"
                style={{ color: "var(--bg-card)", borderColor: "rgba(245,240,225,0.4)" }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Ico.WhatsApp size={16}/> Or WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-export ThreadMotif so its module is treated as used (otherwise lint warns
// for unreferenced imports in some bundlers).
export { ThreadMotif };
