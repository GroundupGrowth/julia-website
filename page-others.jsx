// BasePsych — Services, Therapists, Articles, Contact, FAQs

// ────────────────────────────────────────────────
// SERVICES PAGE
// ────────────────────────────────────────────────
const ServicesPage = ({ onNav }) => (
  <>
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Services</div>
          <h1 className="h-display" style={{ marginBottom: 28 }}>What we <em>can do</em>, together.</h1>
          <p className="lead">Each service draws from attachment-informed psychotherapy. We adapt our approach
            to who you are, the season you're in, and the change you're ready for.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="services-grid">
          {SERVICES.map((s, i) => {
            const I = Ico[s.icon];
            return (
              <div key={s.id} className="card reveal in" style={{ padding: 40, transitionDelay: i * 0.04 + "s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 28 }}>
                  <div className="deco-circle" style={{ width: 64, height: 64 }}><I size={26} stroke={1.4}/></div>
                  <div className="serif" style={{ fontSize: 22, fontStyle: "italic", color: "var(--clay-deep)" }}>0{i + 1}</div>
                </div>
                <h3 className="h-2" style={{ fontSize: 32, marginBottom: 14 }}>{s.title}</h3>
                <p className="body" style={{ marginBottom: 24 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
                  {s.topics.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <a className="link-arrow" onClick={() => onNav("contact")}>Enquire about {s.title.toLowerCase()} <Ico.Arrow size={14}/></a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Our approach</div>
        <h2 className="h-1" style={{ marginBottom: 24 }}>Attachment-informed, <em>practiced gently.</em></h2>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          We draw on attachment theory, emotion-focused therapy, and parts work — and adapt for what each person needs.
          Some weeks, that means careful, slow exploration. Other weeks, very practical tools.
        </p>
        <button className="btn btn-primary" onClick={() => onNav("contact")}>Book a first session <Ico.Arrow size={13}/></button>
      </div>
    </section>
    <HomeBookCTA onNav={onNav}/>
  </>
);

// ────────────────────────────────────────────────
// THERAPISTS PAGE
// ────────────────────────────────────────────────
const TherapistsPage = ({ onNav }) => {
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
            <h1 className="h-display" style={{ marginBottom: 28 }}>Meet <em>Julia.</em></h1>
            <p className="lead">BasePsych is a single, careful clinical practice — built around one therapist
              and the relationships she keeps. No pairing algorithms, no shuffle. Just one steady hand.</p>
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(320px, 460px) 1fr", gap: 0 }}>
            <img src={t.photo} alt={t.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 480 }}/>
            <div style={{ padding: 48 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16, gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 className="h-1" style={{ fontSize: 48, marginBottom: 6 }}>{t.name}</h3>
                  <div style={{ fontSize: 15, color: "var(--ink-mute)" }}>{t.title}</div>
                </div>
                <span className="tag tag-forest" style={{ alignSelf: "start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--forest)" }}/>
                  Available {t.availability.toLowerCase()}
                </span>
              </div>
              <p className="serif" style={{ fontSize: 24, fontStyle: "italic", color: "var(--ink)", marginBottom: 28, lineHeight: 1.4 }}>
                "{t.blurb}"
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>Focus areas</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {t.focuses.map(f => <span key={f} className="tag">{f}</span>)}
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
                <button className="btn btn-primary" onClick={() => onNav("contact")}>
                  Book with Julia <Ico.Arrow size={13}/>
                </button>
                <a className="btn btn-ghost" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
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
                <div key={a.title} className="card reveal in" style={{ padding: 32, transitionDelay: i * 0.06 + "s" }}>
                  <div className="deco-circle" style={{ marginBottom: 24 }}><I size={22} stroke={1.4}/></div>
                  <h3 className="h-3" style={{ marginBottom: 12 }}>{a.title}</h3>
                  <p className="body">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeBookCTA onNav={onNav}/>
    </>
  );
};

// ────────────────────────────────────────────────
// ARTICLES PAGE
// ────────────────────────────────────────────────
const ArticlesPage = ({ onNav }) => {
  const cats = ["All", "Attachment", "Anxiety", "Couples", "Therapy 101"];
  const [cat, setCat] = React.useState("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter(a => a.cat === cat);
  return (
    <>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>The journal</div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>Notes from <em>the consulting room.</em></h1>
            <p className="lead">Slow, careful writing on therapy, attachment, and being human. No listicles, no quick fixes —
              just what we wish more people knew.</p>
          </div>

          {/* Featured */}
          <article className="card reveal in" onClick={() => onNav("article", ARTICLES[0].id)} style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", marginBottom: 64, cursor: "pointer" }}>
            <div className="imgph" style={{ minHeight: 420 }}>
              <span className="imgph-tag">Featured · {ARTICLES[0].cat}</span>
            </div>
            <div style={{ padding: 56 }}>
              <span className="tag tag-forest" style={{ marginBottom: 20 }}>Featured · {ARTICLES[0].cat}</span>
              <h2 className="h-1" style={{ fontSize: 44, margin: "20px 0 20px" }}>{ARTICLES[0].title}</h2>
              <p className="body" style={{ marginBottom: 24 }}>{ARTICLES[0].excerpt}</p>
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 28 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", background: "var(--sage)" }}>
                  <img src={THERAPISTS[0].photo} alt="Julia Khaw" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>Julia Khaw</div>
                  <div className="small">{ARTICLES[0].read} min read · {ARTICLES[0].date}</div>
                </div>
              </div>
              <a className="link-arrow" onClick={(e) => { e.stopPropagation(); onNav("article", ARTICLES[0].id); }}>Read essay <Ico.Arrow size={14}/></a>
            </div>
          </article>

          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{
                  padding: "8px 16px", borderRadius: "var(--r-pill)",
                  border: "1px solid " + (cat === c ? "var(--forest)" : "var(--line)"),
                  background: cat === c ? "var(--forest)" : "transparent",
                  color: cat === c ? "var(--bg-card)" : "var(--ink)",
                  fontSize: 13, fontWeight: 500
                }}>{c}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {list.slice(1).map((a, i) => (
              <article key={a.id} onClick={() => onNav("article", a.id)} className="reveal in" style={{ cursor: "pointer", transitionDelay: i * 0.05 + "s" }}>
                <div className="imgph" style={{ aspectRatio: "4/3", borderRadius: 6, marginBottom: 20 }}>
                  <span className="imgph-tag">{a.cat}</span>
                </div>
                <span className="tag tag-forest" style={{ marginBottom: 14 }}>{a.cat}</span>
                <h3 className="h-3" style={{ marginBottom: 10, marginTop: 14 }}>{a.title}</h3>
                <p className="body" style={{ fontSize: 15, marginBottom: 16 }}>{a.excerpt}</p>
                <div className="small">{a.read} min read · {a.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeBookCTA onNav={onNav}/>
    </>
  );
};

// ────────────────────────────────────────────────
// CONTACT PAGE — human, multi-step booking flow
// ────────────────────────────────────────────────
const ContactPage = ({ onNav }) => {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({ reason: "", who: "", mode: "", name: "", email: "", phone: "", note: "", time: "" });
  const update = (k, v) => setForm({ ...form, [k]: v });

  const reasons = [
    { id: "anxious", label: "I've been feeling anxious or overwhelmed" },
    { id: "low", label: "I've been feeling low or unmotivated" },
    { id: "relational", label: "Something in a relationship feels stuck" },
    { id: "transition", label: "I'm in a life transition" },
    { id: "trauma", label: "I'm carrying something old and want to look at it" },
    { id: "unsure", label: "I'm not sure — I just know I'd like to talk" },
  ];
  const whos = [
    { id: "self", label: "Just me" }, { id: "couple", label: "Me and my partner" },
    { id: "family", label: "Me and a family member" }, { id: "young", label: "A young person" },
  ];
  const modes = [
    { id: "studio", label: "In our Temple Street studio", desc: "63b Temple St, Singapore" },
    { id: "online", label: "Online", desc: "Encrypted video — anywhere in Singapore" },
    { id: "either", label: "Either is fine", desc: "We'll suggest the best fit" },
  ];
  const times = ["This week", "Next week", "In the next month", "I'm flexible"];

  const steps = [
    { title: "What brings you here?", body: () => (
      <div style={{ display: "grid", gap: 10 }}>
        {reasons.map(r => (
          <button key={r.id} onClick={() => { update("reason", r.id); setStep(1); }}
            style={{ padding: "18px 22px", borderRadius: "var(--r-md)", border: "1px solid var(--line)", background: "var(--bg-card)", textAlign: "left", fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)", fontStyle: "italic", transition: "all 0.18s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; e.currentTarget.style.background = "var(--bg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg-card)"; }}>
            "{r.label}"
          </button>
        ))}
      </div>
    )},
    { title: "Who is therapy for?", body: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {whos.map(w => (
          <button key={w.id} onClick={() => { update("who", w.id); setStep(2); }} className="card" style={{ padding: 28, textAlign: "left", cursor: "pointer" }}>
            <div className="serif" style={{ fontSize: 22 }}>{w.label}</div>
          </button>
        ))}
      </div>
    )},
    { title: "Where would you like to meet?", body: () => (
      <div style={{ display: "grid", gap: 12 }}>
        {modes.map(m => (
          <button key={m.id} onClick={() => { update("mode", m.id); setStep(3); }} className="card" style={{ padding: 24, textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
            <div className="deco-circle">{m.id === "studio" ? <Ico.Map/> : m.id === "online" ? <Ico.Spark size={20}/> : <Ico.Hand size={20}/>}</div>
            <div>
              <div className="serif" style={{ fontSize: 20, marginBottom: 4 }}>{m.label}</div>
              <div className="small">{m.desc}</div>
            </div>
            <div style={{ marginLeft: "auto", color: "var(--ink-mute)" }}><Ico.Arrow/></div>
          </button>
        ))}
      </div>
    )},
    { title: "When works for you?", body: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {times.map(t => (
          <button key={t} onClick={() => { update("time", t); setStep(4); }} className="card" style={{ padding: 24, textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 16 }}>
            <Ico.Calendar/>
            <span className="serif" style={{ fontSize: 20 }}>{t}</span>
          </button>
        ))}
      </div>
    )},
    { title: "How can we reach you?", body: () => (
      <form onSubmit={(e) => { e.preventDefault(); setStep(5); }} style={{ display: "grid", gap: 18 }}>
        <div><label className="fld">Your name</label><input className="txt" value={form.name} onChange={(e) => update("name", e.target.value)} required/></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div><label className="fld">Email</label><input className="txt" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required/></div>
          <div><label className="fld">Phone (optional)</label><input className="txt" value={form.phone} onChange={(e) => update("phone", e.target.value)}/></div>
        </div>
        <div><label className="fld">Anything else? (optional)</label><textarea className="txt" rows="4" value={form.note} onChange={(e) => update("note", e.target.value)} placeholder="Anything you'd like us to know before we get in touch."/></div>
        <button type="submit" className="btn btn-primary btn-lg" style={{ justifySelf: "start" }}>Send to BasePsych <Ico.Arrow/></button>
      </form>
    )},
    { title: "Thank you, " + (form.name || "we'll be in touch") + ".", body: () => (
      <div>
        <p className="quote" style={{ marginBottom: 24 }}>A real person from our team will reply within one working day, often sooner.</p>
        <p className="body" style={{ marginBottom: 32 }}>If your situation is urgent, please use the crisis numbers in the footer.
          You're also welcome to message us on WhatsApp.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btn-whatsapp" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
            <Ico.WhatsApp/> Continue on WhatsApp
          </a>
          <button className="btn btn-ghost" onClick={() => onNav("home")}>Back to home</button>
        </div>
      </div>
    )},
  ];
  const cur = steps[step];
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 100 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Get in touch</div>
          <h1 className="h-1" style={{ marginBottom: 28 }}>Tell us a little. <em>We'll take it from there.</em></h1>
          <p className="body" style={{ marginBottom: 36 }}>This isn't a form to fill out. It's a few small questions that
            help us point you to the right therapist, the right service, the right pace.</p>
          <div className="rule" style={{ marginBottom: 28 }}/>
          <div style={{ display: "grid", gap: 18 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>WhatsApp</div>
              <a className="link-arrow" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">+65 8910 7529 <Ico.Arrow size={13}/></a>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Visit</div>
              <div className="body" style={{ fontSize: 15 }}>63b Temple St, Singapore 058608<br/>Mon–Sat · 9am–9pm</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Email</div>
              <div className="body" style={{ fontSize: 15 }}>hello@basepsych.com</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 28, display: "flex", gap: 6 }}>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= step ? "var(--forest)" : "var(--line)", transition: "background 0.3s" }}/>
            ))}
          </div>
          <div className="small" style={{ marginBottom: 12 }}>Step {Math.min(step + 1, steps.length)} of {steps.length}</div>
          <h2 className="h-2" style={{ marginBottom: 36 }}>{cur.title}</h2>
          {cur.body()}
          {step > 0 && step < 5 && (
            <button onClick={() => setStep(step - 1)} className="link-arrow" style={{ marginTop: 32, color: "var(--ink-mute)", borderColor: "var(--ink-mute)" }}>
              ← Back a step
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────
// FAQS PAGE
// ────────────────────────────────────────────────
const FaqsPage = ({ onNav }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <>
      <section className="section">
        <div className="container-narrow">
          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>FAQs</div>
            <h1 className="h-display" style={{ marginBottom: 24 }}>The honest answers, <em>up front.</em></h1>
            <p className="lead">If you have a question we haven't answered, just message us — we always reply.</p>
          </div>
          <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line)" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)}
                  style={{ width: "100%", padding: "28px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                  <span className="serif" style={{ fontSize: 24, color: "var(--ink)", lineHeight: 1.3, paddingRight: 24 }}>{f.q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1px solid var(--line)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: open === i ? "var(--forest)" : "transparent",
                    color: open === i ? "var(--bg-card)" : "var(--ink)",
                    flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "all 0.2s"
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
          <div style={{ marginTop: 64, padding: 36, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", textAlign: "center" }}>
            <h3 className="h-3" style={{ marginBottom: 10 }}>Still have a question?</h3>
            <p className="body" style={{ marginBottom: 24 }}>We're a small team — your message goes straight to a real person.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-whatsapp" href="https://wa.me/6589107529" target="_blank" rel="noreferrer"><Ico.WhatsApp/> WhatsApp us</a>
              <button className="btn btn-ghost" onClick={() => onNav("contact")}>Use the contact form</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { ServicesPage, TherapistsPage, ArticlesPage, ContactPage, FaqsPage });
