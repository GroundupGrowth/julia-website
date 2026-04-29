"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Ico } from "@/components/icons";

const QUESTIONS = [
  { id: "q1", text: "Over the past two weeks, I've felt little interest or pleasure in things I usually enjoy." },
  { id: "q2", text: "I've noticed I'm more on edge or restless than usual." },
  { id: "q3", text: "I find it hard to switch off, even when I'm tired." },
  { id: "q4", text: "Past patterns or relationships keep playing on my mind." },
];
const CHOICES = ["Not at all", "Some days", "Most days", "Nearly every day"];

export default function Assessment() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = QUESTIONS.length * 3;
  const percent = Math.round((total / max) * 100);
  const done = step >= QUESTIONS.length;

  let tone = "We hear you.";
  let advice = "Reach out — even a short conversation can help us point you in the right direction.";
  if (done) {
    if (percent < 25) {
      tone = "Things sound mostly steady right now.";
      advice = "If you'd still like to chat, we're happy to. Otherwise, we'll see you when you need us.";
    } else if (percent < 60) {
      tone = "There's some weight here.";
      advice = "A few sessions of focused work could lighten the load. Let's chat about what would suit you.";
    } else {
      tone = "That sounds heavy to carry alone.";
      advice = "We'd love to talk — book a first session and we'll meet you where you are.";
    }
  }

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card" style={{ padding: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>A small check-in · 2 minutes</div>
          <h2 className="h-2" style={{ marginBottom: 8 }}>How are <em>things</em>, really?</h2>
          <p className="body" style={{ marginBottom: 32 }}>This isn&apos;t a diagnosis — just a gentle signal of where you are.</p>

          {!done ? (
            <div>
              <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
                {QUESTIONS.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= step ? "var(--forest)" : "var(--line)" }}/>
                ))}
              </div>
              <p className="serif" style={{ fontSize: 24, lineHeight: 1.4, marginBottom: 28, fontStyle: "italic", color: "var(--ink)" }}>
                &ldquo;{QUESTIONS[step].text}&rdquo;
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {CHOICES.map((c, idx) => (
                  <button
                    key={c}
                    onClick={() => {
                      setAnswers({ ...answers, [QUESTIONS[step].id]: idx });
                      setStep(step + 1);
                    }}
                    style={{ padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "var(--r-md)", background: "var(--bg)", textAlign: "left", fontSize: 15, transition: "all 0.18s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; e.currentTarget.style.background = "var(--bg-card)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg)"; }}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="small" style={{ marginTop: 20, textAlign: "center" }}>{step + 1} of {QUESTIONS.length}</div>
            </div>
          ) : (
            <div>
              <p className="quote" style={{ marginBottom: 20 }}>{tone}</p>
              <p className="body" style={{ marginBottom: 28 }}>{advice}</p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn btn-primary" onClick={() => router.push("/contact")}>
                  Book a session <Ico.Arrow size={13}/>
                </button>
                <button className="btn btn-ghost" onClick={() => { setStep(0); setAnswers({}); }}>
                  Take it again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
