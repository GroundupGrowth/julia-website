"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Ico } from "@/components/icons";
import { MOODS } from "@/lib/data";

export default function MoodEntry() {
  const router = useRouter();
  const [picked, setPicked] = useState(null);
  const mood = MOODS.find((m) => m.id === picked);

  return (
    <div style={{ position: "relative" }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>How are you, today?</div>
      <h2 className="h-2" style={{ marginBottom: 32, maxWidth: 520 }}>
        Pick what feels closest. <em>We&apos;ll meet you there.</em>
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {MOODS.map((m) => (
          <button
            key={m.id}
            onClick={() => setPicked(m.id)}
            style={{
              padding: "12px 20px",
              borderRadius: "var(--r-pill)",
              border: "1px solid " + (picked === m.id ? m.color : "var(--line)"),
              background: picked === m.id ? m.color : "var(--bg-card)",
              color: picked === m.id ? "white" : "var(--ink)",
              fontFamily: "var(--serif)",
              fontSize: 19,
              fontStyle: "italic",
              transition: "all 0.25s ease",
              transform: picked === m.id ? "scale(1.03)" : "none",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div style={{
        minHeight: 110, padding: 24,
        background: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-md)",
        display: "flex", alignItems: "center",
        gap: 20,
      }}>
        {picked ? (
          <>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: mood.color, flexShrink: 0 }} className="breathe"/>
            <div style={{ flex: 1 }}>
              <div className="body" style={{ marginBottom: 8 }}>{mood.desc}.</div>
              <div className="small">Many people who&apos;ve felt <em>{mood.label.toLowerCase()}</em> have found relief through attachment-based work.</div>
            </div>
            <button className="btn btn-primary" onClick={() => router.push("/therapists")}>
              Find a therapist <Ico.Arrow size={13}/>
            </button>
          </>
        ) : (
          <div className="body" style={{ color: "var(--ink-mute)" }}>
            ↑ Choose one — there&apos;s no wrong answer.
          </div>
        )}
      </div>
    </div>
  );
}
