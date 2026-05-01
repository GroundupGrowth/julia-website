"use client";

import { useState } from "react";
import Link from "next/link";
import { Ico } from "@/components/icons";
import {
  BOOKING_REASONS,
  BOOKING_WHOS,
  BOOKING_MODES,
  BOOKING_TIMES,
  WHATSAPP_URL,
} from "@/lib/data";

const TOTAL_STEPS = 6;

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    reason: "", who: "", mode: "", time: "",
    name: "", email: "", phone: "", note: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Something went wrong sending your message.");
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      setStep(5);
    } catch {
      setError("Network problem — please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 28, display: "flex", gap: 6 }}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= step ? "var(--forest)" : "var(--line)", transition: "background 0.3s" }}/>
        ))}
      </div>
      <div className="small" style={{ marginBottom: 12 }}>
        Step {Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}
      </div>

      {step === 0 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>What brings you here?</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {BOOKING_REASONS.map((r) => (
              <button
                key={r.id}
                onClick={() => { update("reason", r.id); setStep(1); }}
                style={{ padding: "18px 22px", borderRadius: "var(--r-md)", border: "1px solid var(--line)", background: "var(--bg-card)", textAlign: "left", fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)", fontStyle: "italic", transition: "all 0.18s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; e.currentTarget.style.background = "var(--bg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              >
                &ldquo;{r.label}&rdquo;
              </button>
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>Who is therapy for?</h2>
          <div className="choice-2col">
            {BOOKING_WHOS.map((w) => (
              <button key={w.id} onClick={() => { update("who", w.id); setStep(2); }} className="card" style={{ padding: 28, textAlign: "left", cursor: "pointer" }}>
                <div className="serif" style={{ fontSize: 22 }}>{w.label}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>Where would you like to meet?</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {BOOKING_MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => { update("mode", m.id); setStep(3); }}
                className="card"
                style={{ padding: 24, textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}
              >
                <div className="deco-circle">
                  {m.id === "studio" ? <Ico.Map/> : m.id === "online" ? <Ico.Spark size={20}/> : <Ico.Hand size={20}/>}
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 20, marginBottom: 4 }}>{m.label}</div>
                  <div className="small">{m.desc}</div>
                </div>
                <div style={{ marginLeft: "auto", color: "var(--ink-mute)" }}><Ico.Arrow/></div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>When works for you?</h2>
          <div className="choice-2col" style={{ gap: 12 }}>
            {BOOKING_TIMES.map((t) => (
              <button
                key={t}
                onClick={() => { update("time", t); setStep(4); }}
                className="card"
                style={{ padding: 24, textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 16 }}
              >
                <Ico.Calendar/>
                <span className="serif" style={{ fontSize: 20 }}>{t}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>How can we reach you?</h2>
          <form onSubmit={submit} style={{ display: "grid", gap: 18 }}>
            <div>
              <label className="fld" htmlFor="bf-name">Your name</label>
              <input id="bf-name" className="txt" value={form.name} onChange={(e) => update("name", e.target.value)} required/>
            </div>
            <div className="form-row-2">
              <div>
                <label className="fld" htmlFor="bf-email">Email</label>
                <input id="bf-email" className="txt" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required/>
              </div>
              <div>
                <label className="fld" htmlFor="bf-phone">Phone (optional)</label>
                <input id="bf-phone" className="txt" value={form.phone} onChange={(e) => update("phone", e.target.value)}/>
              </div>
            </div>
            <div>
              <label className="fld" htmlFor="bf-note">Anything else? (optional)</label>
              <textarea id="bf-note" className="txt" rows="4" value={form.note} onChange={(e) => update("note", e.target.value)} placeholder="Anything you'd like us to know before we get in touch."/>
            </div>
            {error && (
              <div role="alert" style={{ background: "rgba(196,106,79,0.1)", border: "1px solid rgba(196,106,79,0.4)", color: "var(--terracotta)", padding: "12px 16px", borderRadius: "var(--r-md)", fontSize: 14 }}>
                {error}
              </div>
            )}
            <button type="submit" disabled={submitting} className="btn btn-primary btn-lg" style={{ justifySelf: "start", opacity: submitting ? 0.7 : 1 }}>
              {submitting ? "Sending…" : <>Send to BasePsych <Ico.Arrow/></>}
            </button>
          </form>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="h-2" style={{ marginBottom: 36 }}>
            Thank you, {form.name || "we'll be in touch"}.
          </h2>
          <p className="quote" style={{ marginBottom: 24 }}>
            A real person from our team will reply within one working day, often sooner.
          </p>
          <p className="body" style={{ marginBottom: 32 }}>
            If your situation is urgent, please use the crisis numbers in the footer.
            You&apos;re also welcome to message us on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Ico.WhatsApp/> Continue on WhatsApp
            </a>
            <Link className="btn btn-ghost" href="/">Back to home</Link>
          </div>
        </>
      )}

      {step > 0 && step < 5 && (
        <button
          onClick={() => setStep(step - 1)}
          className="link-arrow"
          style={{ marginTop: 32, color: "var(--ink-mute)", borderColor: "var(--ink-mute)" }}
        >
          ← Back a step
        </button>
      )}
    </div>
  );
}
