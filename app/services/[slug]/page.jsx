import Link from "next/link";
import { notFound } from "next/navigation";
import { Ico } from "@/components/icons";
import Reveal from "@/components/reveal";
import { HomeBookCTA } from "@/components/home/home-sections";
import { SERVICES, FAQS, WHATSAPP_URL } from "@/lib/data";
import { SERVICE_DETAILS } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.id === slug);
  if (!s) return { title: "Not found" };
  const d = SERVICE_DETAILS[slug];
  return {
    title: `${s.title} — BasePsych`,
    description: d?.standfirst || s.desc,
  };
}

// Render a title that may contain inline <em> markup. We accept a plain
// string with optional <em>...</em>; everything else is escaped by React.
function ServiceTitle({ html }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();
  const d = SERVICE_DETAILS[slug];
  if (!d) notFound();

  const matchingFaqs = (d.faq || [])
    .map((q) => FAQS.find((f) => f.q === q))
    .filter(Boolean);
  const related = (d.related || [])
    .map((id) => SERVICES.find((s) => s.id === id))
    .filter(Boolean);
  const HeroIcon = Ico[service.icon];

  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <Link className="link-arrow" href="/services" style={{ color: "var(--ink-mute)", borderColor: "var(--ink-mute)", marginBottom: 28 }}>
              ← All services
            </Link>
            <div className="eyebrow" style={{ marginTop: 28, marginBottom: 20 }}>{d.eyebrow}</div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              <ServiceTitle html={d.title}/>
            </h1>
            <p className="lead">{d.standfirst}</p>
          </div>
        </div>
      </section>

      {/* Intro paragraphs + topic chips */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-bio with-gap">
            <div>
              <div className="deco-circle" style={{ width: 72, height: 72, marginBottom: 28 }}>
                <HeroIcon size={28} stroke={1.4}/>
              </div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>What we work with</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {service.topics.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div>
              {d.intro.map((p, i) => (
                <p key={i} className="serif" style={{ fontSize: 22, lineHeight: 1.55, color: "var(--ink)", marginBottom: 20, fontStyle: i === 0 ? "italic" : "normal" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Shape of the work</div>
            <h2 className="h-1">What you can expect.</h2>
          </div>
          <div className="grid-3">
            {d.pillars.map((p, i) => {
              const I = Ico[p.icon];
              return (
                <Reveal key={p.title} className="card" style={{ padding: 32 }} delay={i * 0.06}>
                  <div className="deco-circle" style={{ marginBottom: 24 }}><I size={22} stroke={1.4}/></div>
                  <h3 className="h-3" style={{ marginBottom: 12 }}>{p.title}</h3>
                  <p className="body">{p.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>How it goes</div>
            <h2 className="h-1">From first message to first session.</h2>
          </div>
          <div className="grid-3">
            {d.process.map((s, i) => (
              <Reveal key={s.n} className="card" style={{ padding: 32 }} delay={i * 0.06}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 24 }}>
                  <div className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--clay-deep)" }}>{s.n}</div>
                </div>
                <h3 className="h-3" style={{ marginBottom: 12 }}>{s.title}</h3>
                <p className="body">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Pricing</div>
          <h2 className="h-1" style={{ marginBottom: 24 }}>{d.pricing.headline}</h2>
          <p className="lead" style={{ margin: "0 auto 32px" }}>{d.pricing.detail}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-primary btn-lg" href="/contact">
              {d.cta.primary} <Ico.Arrow/>
            </Link>
            <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={16}/> Or WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Inline FAQs (if any are tagged on this service) */}
      {matchingFaqs.length > 0 && (
        <section className="section">
          <div className="container-narrow">
            <div className="eyebrow" style={{ marginBottom: 16 }}>FAQs</div>
            <h2 className="h-1" style={{ marginBottom: 36 }}>The honest answers, <em>up front.</em></h2>
            <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line)" }}>
              {matchingFaqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--line)", padding: "24px 0" }}>
                  <h3 className="serif" style={{ fontSize: 22, color: "var(--ink)", marginBottom: 10, lineHeight: 1.3 }}>{f.q}</h3>
                  <p className="body">{f.a}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <Link className="link-arrow" href="/faqs">All FAQs <Ico.Arrow size={14}/></Link>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div style={{ maxWidth: 640, marginBottom: 40 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Other services</div>
              <h2 className="h-2">Also at BasePsych.</h2>
            </div>
            <div className="services-grid">
              {related.map((s, i) => {
                const I = Ico[s.icon];
                return (
                  <Reveal key={s.id} as={Link} href={`/services/${s.id}`} className="card service-card" delay={i * 0.06} style={{ display: "block", color: "inherit" }}>
                    <div style={{ color: "var(--forest)", marginBottom: 24 }}><I size={28} stroke={1.4}/></div>
                    <h3 className="h-3" style={{ marginBottom: 10 }}>{s.title}</h3>
                    <p className="body" style={{ marginBottom: 20, fontSize: 15 }}>{s.desc}</p>
                    <span className="link-arrow">Learn more <Ico.Arrow size={14}/></span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <HomeBookCTA />
    </>
  );
}
