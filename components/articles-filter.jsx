"use client";

import { useState } from "react";
import Link from "next/link";

const CATS = ["All", "Attachment", "Anxiety", "Couples", "Therapy 101"];

export default function ArticlesFilter({ articles }) {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.cat === cat);

  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              padding: "8px 16px",
              borderRadius: "var(--r-pill)",
              border: "1px solid " + (cat === c ? "var(--forest)" : "var(--line)"),
              background: cat === c ? "var(--forest)" : "transparent",
              color: cat === c ? "var(--bg-card)" : "var(--ink)",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="articles-list">
        {list.slice(1).map((a, i) => (
          <Link
            key={a.id}
            href={`/articles/${a.id}`}
            className="reveal in"
            style={{ cursor: "pointer", transitionDelay: i * 0.05 + "s", display: "block" }}
          >
            <div className="imgph" style={{ aspectRatio: "4/3", borderRadius: 6, marginBottom: 20 }}>
              <span className="imgph-tag">{a.cat}</span>
            </div>
            <span className="tag tag-forest" style={{ marginBottom: 14 }}>{a.cat}</span>
            <h3 className="h-3" style={{ marginBottom: 10, marginTop: 14 }}>{a.title}</h3>
            <p className="body" style={{ fontSize: 15, marginBottom: 16 }}>{a.excerpt}</p>
            <div className="small">{a.read} min read · {a.date}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
