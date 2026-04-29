import Link from "next/link";
import { Ico } from "@/components/icons";
import Reveal from "@/components/reveal";
import ArticlesFilter from "@/components/articles-filter";
import { HomeBookCTA } from "@/components/home/home-sections";
import { ARTICLES, THERAPISTS } from "@/lib/data";

export const metadata = {
  title: "Articles & essays — BasePsych",
  description:
    "Slow, careful writing on therapy, attachment, and being human — by Julia Khaw, Clinical Psychologist.",
};

export default function ArticlesPage() {
  const featured = ARTICLES[0];
  const julia = THERAPISTS[0];

  return (
    <>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>The journal</div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              Notes from <em>the consulting room.</em>
            </h1>
            <p className="lead">
              Slow, careful writing on therapy, attachment, and being human. No listicles, no quick fixes —
              just what we wish more people knew.
            </p>
          </div>

          <Reveal as="article" style={{ marginBottom: 64 }}>
            <Link href={`/articles/${featured.id}`} className="card" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", color: "inherit" }}>
              <div className="imgph" style={{ minHeight: 420 }}>
                <span className="imgph-tag">Featured · {featured.cat}</span>
              </div>
              <div style={{ padding: 56 }}>
                <span className="tag tag-forest" style={{ marginBottom: 20 }}>Featured · {featured.cat}</span>
                <h2 className="h-1" style={{ fontSize: 44, margin: "20px 0 20px" }}>{featured.title}</h2>
                <p className="body" style={{ marginBottom: 24 }}>{featured.excerpt}</p>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 28 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", background: "var(--sage)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={julia.photo} alt="Julia Khaw" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>Julia Khaw</div>
                    <div className="small">{featured.read} min read · {featured.date}</div>
                  </div>
                </div>
                <span className="link-arrow">Read essay <Ico.Arrow size={14}/></span>
              </div>
            </Link>
          </Reveal>

          <ArticlesFilter articles={ARTICLES}/>
        </div>
      </section>
      <HomeBookCTA />
    </>
  );
}
