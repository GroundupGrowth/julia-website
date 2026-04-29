import Link from "next/link";
import { Ico } from "@/components/icons";
import { ARTICLES, THERAPISTS } from "@/lib/data";
import { ARTICLE_BODIES } from "@/lib/articles";

function ArticleBlock({ block }) {
  if (block.h) return <h2 className="article-h">{block.h}</h2>;
  if (block.q) return <blockquote className="article-quote">{block.q}</blockquote>;
  if (block.l) {
    return (
      <ul className="article-list">
        {block.l.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  if (block.img) {
    return (
      <figure className="article-figure">
        <div className="article-figure-img imgph">
          <span className="imgph-tag">{block.img}</span>
        </div>
      </figure>
    );
  }
  if (block.p) return <p className="article-p">{block.p}</p>;
  return null;
}

export default function ArticleView({ articleId, readingWidth = "comfortable" }) {
  const article = ARTICLES.find((a) => a.id === articleId) || ARTICLES[0];
  const body = ARTICLE_BODIES[article.id] || ARTICLE_BODIES[1];
  const julia = THERAPISTS[0];

  const sameCat = ARTICLES.filter((a) => a.id !== article.id && a.cat === article.cat);
  const others = ARTICLES.filter((a) => a.id !== article.id && a.cat !== article.cat);
  const related = [...sameCat, ...others].slice(0, 2);

  return (
    <article className="article-view article-quiet" data-width={readingWidth}>
      <div className="article-meta-strip">
        <div className="container">
          <Link className="link-arrow" href="/articles" style={{ color: "var(--ink-mute)", borderColor: "var(--ink-mute)" }}>
            ← The journal
          </Link>
        </div>
      </div>

      <header className="article-quiet-header">
        <div className="article-quiet-meta">
          <span className="article-quiet-no">{body.no}</span>
          <span className="article-quiet-dot"/>
          <span className="article-quiet-kicker">{body.kicker}</span>
          <span className="article-quiet-dot"/>
          <span className="article-quiet-cat">{article.cat}</span>
        </div>
        <h1 className="article-quiet-title">{article.title}</h1>
        <p className="article-quiet-standfirst">{body.standfirst}</p>
        <div className="article-quiet-byline">
          <span>By Julia Khaw</span>
          <span className="article-quiet-dot"/>
          <span>{article.read} min read</span>
          <span className="article-quiet-dot"/>
          <span>{article.date}</span>
        </div>
        <div className="article-quiet-rule"/>
      </header>

      <div className="article-body">
        {body.blocks.map((b, i) => <ArticleBlock key={i} block={b}/>)}
      </div>

      <div className="article-end-mark">
        <span className="article-end-glyph">·   ·   ·</span>
      </div>

      <section className="article-more-wrap">
        <div className="article-more-inner">
          <div className="article-more-eyebrow">More from Julia</div>
          <div className="article-more-list">
            {related.map((a) => {
              const meta = ARTICLE_BODIES[a.id];
              return (
                <Link key={a.id} href={`/articles/${a.id}`} className="article-more-item">
                  <div className="article-more-no">{meta?.no || ""}</div>
                  <div>
                    <div className="article-more-cat">{a.cat}</div>
                    <div className="article-more-title">{a.title}</div>
                    <div className="article-more-meta">{a.read} min read · {a.date}</div>
                  </div>
                  <Ico.Arrow size={14}/>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="article-author-card-wrap">
        <div className="article-author-card">
          <div className="article-author-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={julia.photo} alt="Julia Khaw"/>
          </div>
          <div className="article-author-body">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Written by</div>
            <h3 className="h-2" style={{ marginBottom: 14 }}>Julia Khaw</h3>
            <div style={{ fontSize: 14, color: "var(--ink-mute)", marginBottom: 20 }}>{julia.title}</div>
            <p className="body" style={{ marginBottom: 24, maxWidth: 560 }}>
              Julia is a registered clinical psychologist working with adults navigating anxiety, attachment,
              relationships, and the long, slow work of feeling more at home in themselves. She writes here
              between sessions — quietly, and only when she has something worth saying.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/contact">
                Book a consultation <Ico.Arrow size={13}/>
              </Link>
              <Link className="btn btn-ghost" href="/therapists">
                Read more about Julia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
