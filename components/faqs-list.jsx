"use client";

import { useState } from "react";
import { Ico } from "@/components/icons";
import { FAQS } from "@/lib/data";

export default function FaqsList() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line)" }}>
      {FAQS.map((f, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{ width: "100%", padding: "28px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}
          >
            <span className="serif" style={{ fontSize: 24, color: "var(--ink)", lineHeight: 1.3, paddingRight: 24 }}>{f.q}</span>
            <span style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: open === i ? "var(--forest)" : "transparent",
              color: open === i ? "var(--bg-card)" : "var(--ink)",
              flexShrink: 0,
              transform: open === i ? "rotate(45deg)" : "none",
              transition: "all 0.2s",
            }}>
              <Ico.Plus size={14}/>
            </span>
          </button>
          <div style={{ maxHeight: open === i ? 600 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
            <p className="body" style={{ paddingBottom: 28, paddingRight: 60, fontSize: 16 }}>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
