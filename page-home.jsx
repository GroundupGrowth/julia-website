// BasePsych — page content (Home, Services, Therapists, Articles, Contact, FAQs)

const SERVICES = [
  { id: "individual", icon: "Anchor", title: "Individual therapy", desc: "One-to-one sessions for adults navigating anxiety, depression, life transitions, identity, and meaning.", topics: ["Anxiety", "Depression", "Burnout", "Identity"] },
  { id: "couples", icon: "Thread", title: "Couples therapy", desc: "Repair, deepen, or renegotiate the way you connect — grounded in attachment science.", topics: ["Communication", "Trust", "Intimacy", "Conflict"] },
  { id: "trauma", icon: "Shelter", title: "Trauma-focused work", desc: "Carefully paced therapy for unprocessed experiences and complex relational wounds.", topics: ["PTSD", "Childhood", "Grief"] },
  { id: "young", icon: "Roots", title: "Young adults & students", desc: "Support during the in-between years — direction, friendships, family, the weight of expectation.", topics: ["School", "Family", "Loneliness"] },
  { id: "parents", icon: "Nest", title: "Parents & families", desc: "Whether you're new to parenting or rebuilding your bond, we help families feel safer together.", topics: ["Postnatal", "Teen years", "Co-parenting"] },
  { id: "assess", icon: "Spark", title: "Assessments", desc: "Psychological assessments for clarity — clinical, cognitive, and diagnostic.", topics: ["ADHD", "Autism", "Mood"] },
];

const THERAPISTS = [
  {
    id: "julia-khaw",
    name: "Julia Khaw",
    title: "Clinical Psychologist",
    photo: "assets/julia-khaw.webp",
    languages: ["English", "Mandarin"],
    focuses: ["Depression", "Trauma-related", "Attachment", "ADHD"],
    blurb: "I work attachment-first. Whatever you're carrying — the heaviness, the patterns that won't shift, the pieces you can't quite name — we'll meet it together, gently, at the pace your nervous system can hold.",
    availability: "This week",
    tone: "#8A9A7B",
  },
];

const ARTICLES = [
  { id: 1, cat: "Attachment", title: "What does it mean to have a 'secure base' as an adult?", read: 6, date: "Apr 2026", excerpt: "We don't outgrow our attachment needs — we just hide them better. Here's what a secure base actually looks like in adulthood." },
  { id: 2, cat: "Anxiety", title: "The body keeps showing up before the thought does", read: 8, date: "Mar 2026", excerpt: "On the somatic signals we miss, and how attending to them is half the work of therapy." },
  { id: 3, cat: "Couples", title: "When the argument isn't about the dishes", read: 5, date: "Mar 2026", excerpt: "Most fights are protests of disconnection in disguise. A short guide to listening past the surface." },
  { id: 4, cat: "Therapy 101", title: "Your first session: what actually happens", read: 4, date: "Feb 2026", excerpt: "If you've been on the fence, here's a plain-language walkthrough of what the first hour looks like." },
  { id: 5, cat: "Anxiety", title: "Overthinking is a feeling that hasn't been allowed to land", read: 6, date: "Feb 2026", excerpt: "Why the mental loop won't close — and what actually quiets it. (Hint: it isn't more thinking.)" },
  { id: 6, cat: "Attachment", title: "On being the steady one: notes for parentified adults", read: 7, date: "Jan 2026", excerpt: "For the ones who held things up too early, and are now too tired to receive what they've been giving." },
];

const FAQS = [
  { q: "How much does a session cost?", a: "We charge $240 for a 60-minute session with a registered clinical psychologist. We also offer fee scaling/concession rates if you are eligible." },
  { q: "Can I claim therapy fees through my insurance or employee benefits?", a: "You may be able to claim therapy fees depending on your provider's coverage. It's a good idea to check directly with your insurer or HR. We'll happily provide an invoice or supporting documents for your claim." },
  { q: "Am I eligible for fee scaling/concession rates?", a: "A limited number of reduced-fee slots are available for students, individuals who are unemployed, or those experiencing temporary financial hardship. Reduced rates are reviewed on a case-by-case basis. Reach out if you think you meet the requirements." },
  { q: "What happens in the first session?", a: "Your first session is an opportunity for you and your therapist to meet, and a time to ask any questions. Your therapist will lead the conversation to understand what you've been experiencing. It's typical to feel nervous; many feel reassured once they meet their therapist." },
  { q: "Can I bring someone with me for my first appointment?", a: "Yes. You're welcome to bring someone along if it helps you feel comfortable. Therapy is a personal process, so your therapist will mostly speak with you directly, but a support person can join briefly at the start or end." },
  { q: "What if I don't know where to start?", a: "Many people don't — that's okay. Your therapist will guide you. Often, conversation unfolds naturally once you begin." },
  { q: "How many sessions do I need?", a: "It varies. Some find a few sessions enough; others benefit from longer-term therapy to explore deeper patterns. We'll review your goals regularly so you have a clear sense of pace." },
  { q: "Is what I share kept confidential?", a: "Yes. Your discussions and notes are kept private and stored on a HIPAA-compliant electronic management system." },
];

// ────────────────────────────────────────────────
// HOME
// ────────────────────────────────────────────────
const HomePage = ({ heroVariant, onNav }) => (
  <>
    <HomeHero variant={heroVariant} onNav={onNav}/>
    <HomeStory/>
    <HomeMood onNav={onNav}/>
    <HomeHowItWorks onNav={onNav}/>
    <HomeServices onNav={onNav}/>
    <HomeTherapists onNav={onNav}/>
    <HomeAssessment/>
    <HomeArticles onNav={onNav}/>
    <HomeBookCTA onNav={onNav}/>
  </>
);

const HomeHero = ({ variant, onNav }) => {
  if (variant === "editorial") {
    return (
      <section className="section" style={{ paddingTop: "calc(80px * var(--space))" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }} className="hero-grid">
            <div className="reveal in">
              <div className="eyebrow" style={{ marginBottom: 24 }}>Singapore · Attachment-informed</div>
              <h1 className="h-display" style={{ marginBottom: 28 }}>
                A safe place<br/>to start over,<br/><em>quietly.</em>
              </h1>
              <p className="lead" style={{ marginBottom: 36, maxWidth: 480 }}>
                Therapy that begins where attachment science begins —
                with the human need for a secure base.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary btn-lg" onClick={() => onNav("contact")}>Book a first session <Ico.Arrow/></button>
                <a className="btn btn-ghost btn-lg" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
                  <Ico.WhatsApp size={16}/> Ask a question
                </a>
              </div>
            </div>
            <div className="reveal in" style={{ position: "relative" }}>
              <div className="imgph" style={{ aspectRatio: "4/5", borderRadius: 4 }}>
                <span className="imgph-tag">Hero · soft window light, plant, hands holding tea</span>
              </div>
              <div style={{ position: "absolute", left: -32, bottom: 32, color: "var(--sage)" }}>
                <ThreadMotif width={160} height={60}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (variant === "fullbleed") {
    return (
      <section style={{ position: "relative", paddingTop: 0 }}>
        <div style={{ position: "relative", height: "82vh", minHeight: 620 }}>
          <div className="imgph" style={{ position: "absolute", inset: 0, borderRadius: 0 }}>
            <span className="imgph-tag">Full-bleed · linen-light room, morning</span>
          </div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,24,18,0.0) 30%, rgba(28,24,18,0.55) 100%)" }}/>
          <div className="container" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "48px 48px 64px" }}>
            <div style={{ maxWidth: 720, color: "white" }}>
              <div className="eyebrow" style={{ color: "rgba(255,250,235,0.7)", marginBottom: 20 }}>Singapore · Since 2024</div>
              <h1 className="h-display" style={{ color: "white", marginBottom: 28 }}>
                Mental health care,<br/><em style={{ color: "var(--clay)" }}>quietly held.</em>
              </h1>
              <p className="lead" style={{ color: "rgba(255,250,235,0.85)", marginBottom: 32 }}>
                Attachment-informed psychotherapy for adults, couples, and families in Singapore.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn btn-clay btn-lg" onClick={() => onNav("contact")}>Book a session <Ico.Arrow/></button>
                <button className="btn btn-ghost btn-lg" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }} onClick={() => onNav("therapists")}>Meet our therapists</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  // Default: typographic
  return (
    <section className="section">
      <div className="container">
        <div className="reveal in" style={{ textAlign: "center", maxWidth: 960, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Singapore · Attachment-informed psychotherapy</div>
          <h1 className="h-display" style={{ marginBottom: 32 }}>
            We all need somewhere<br/>to land. <em>This is one</em><br/>of those places.
          </h1>
          <p className="lead" style={{ margin: "0 auto 36px" }}>
            BasePsych is a small, careful clinical practice in Singapore — built around the
            principle that healing happens when we feel safe enough to look.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav("contact")}>Book a first session <Ico.Arrow/></button>
            <a className="btn btn-ghost btn-lg" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={16}/> Send a message
            </a>
          </div>
        </div>
        <div style={{ marginTop: 80, position: "relative" }}>
          <div className="imgph" style={{ height: 420, borderRadius: 6 }}>
            <span className="imgph-tag">Wide · therapy room interior, natural light</span>
          </div>
          <div style={{ position: "absolute", top: -24, right: -24, color: "var(--sage)", opacity: 0.7 }}>
            <RingsMotif size={120}/>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeStory = () => (
  <section className="section-tight" style={{ background: "var(--bg-soft)" }}>
    <div className="container-narrow" style={{ textAlign: "center" }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Why "BasePsych"?</div>
      <p className="quote" style={{ marginBottom: 20 }}>
        "The name BasePsych is inspired by attachment theory — our primal need for a <em>secure base</em>:
        a safe foundation that gives us a space to explore, learn, and flourish."
      </p>
      <p className="body" style={{ maxWidth: 580, margin: "0 auto" }}>
        At the heart of our practice is a commitment to serve our community with the highest
        professional and ethical standards. We wish you a smooth start in this journey.
      </p>
    </div>
  </section>
);

const HomeMood = ({ onNav }) => (
  <section className="section">
    <div className="container">
      <div className="grid-2">
        <MoodEntry onContinue={() => onNav("therapists")}/>
        <div style={{ position: "relative" }}>
          <div className="imgph" style={{ aspectRatio: "4/5", borderRadius: 6 }}>
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

const HomeHowItWorks = ({ onNav }) => {
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
          <button className="btn btn-ghost" onClick={() => onNav("contact")}>Start here <Ico.Arrow size={14}/></button>
        </div>
        <div className="grid-3">
          {steps.map((s, i) => {
            const I = Ico[s.icon];
            return (
              <div key={s.n} className="card reveal in" style={{ padding: 32, transitionDelay: i * 0.08 + "s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 32 }}>
                  <div className="deco-circle"><I size={22} stroke={1.4}/></div>
                  <div className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--clay-deep)" }}>{s.n}</div>
                </div>
                <h3 className="h-3" style={{ marginBottom: 12 }}>{s.title}</h3>
                <p className="body">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HomeServices = ({ onNav }) => (
  <section className="section">
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>What we offer</div>
          <h2 className="h-1" style={{ maxWidth: 600 }}>Care that meets you <em>where you are</em>.</h2>
        </div>
        <button className="btn btn-ghost" onClick={() => onNav("services")}>All services <Ico.Arrow size={14}/></button>
      </div>
      <div className="grid-3">
        {SERVICES.slice(0, 6).map((s, i) => {
          const I = Ico[s.icon];
          return (
            <button key={s.id} className="card reveal in" onClick={() => onNav("services")}
              style={{ textAlign: "left", cursor: "pointer", transitionDelay: i * 0.04 + "s" }}>
              <div style={{ color: "var(--forest)", marginBottom: 24 }}><I size={28} stroke={1.4}/></div>
              <h3 className="h-3" style={{ marginBottom: 10 }}>{s.title}</h3>
              <p className="body" style={{ marginBottom: 20, fontSize: 15 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {s.topics.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  </section>
);

const HomeTherapists = ({ onNav }) => {
  const t = THERAPISTS[0];
  return (
    <section className="section" style={{ background: "var(--forest-deep)", color: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(320px, 460px) 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div className="reveal in" style={{ position: "relative" }}>
            <img src={t.photo} alt={t.name}
              style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block" }}/>
            <div style={{ position: "absolute", left: -24, bottom: -24, color: "var(--clay)", opacity: 0.55 }}>
              <RingsMotif size={120}/>
            </div>
          </div>
          <div className="reveal in">
            <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 16 }}>Meet your therapist</div>
            <h2 className="h-1" style={{ color: "var(--bg-soft)", marginBottom: 24 }}>
              One careful practice. <em style={{ color: "var(--clay)" }}>One steady hand.</em>
            </h2>
            <p className="serif" style={{ fontSize: 24, fontStyle: "italic", lineHeight: 1.4, color: "var(--bg-soft)", marginBottom: 28 }}>
              "{t.blurb}"
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
              {t.focuses.map(f => (
                <span key={f} className="tag" style={{ background: "rgba(212,184,150,0.15)", border: "1px solid rgba(212,184,150,0.3)", color: "var(--clay)" }}>{f}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 24, marginBottom: 32, fontSize: 14, color: "rgba(245,240,225,0.7)" }}>
              <div><span style={{ color: "var(--clay)" }}>Languages</span> · {t.languages.join(", ")}</div>
              <div><span style={{ color: "var(--clay)" }}>Available</span> · {t.availability.toLowerCase()}</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-clay" onClick={() => onNav("contact")}>Book with Julia <Ico.Arrow size={13}/></button>
              <button className="btn btn-ghost" style={{ color: "var(--bg-soft)", borderColor: "rgba(245,240,225,0.4)" }} onClick={() => onNav("therapists")}>Read full bio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeAssessment = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const questions = [
    { id: "q1", text: "Over the past two weeks, I've felt little interest or pleasure in things I usually enjoy." },
    { id: "q2", text: "I've noticed I'm more on edge or restless than usual." },
    { id: "q3", text: "I find it hard to switch off, even when I'm tired." },
    { id: "q4", text: "Past patterns or relationships keep playing on my mind." },
  ];
  const choices = ["Not at all", "Some days", "Most days", "Nearly every day"];
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = questions.length * 3;
  const percent = Math.round((total / max) * 100);
  const done = step >= questions.length;

  let tone = "We hear you.";
  let advice = "Reach out — even a short conversation can help us point you in the right direction.";
  if (done) {
    if (percent < 25) { tone = "Things sound mostly steady right now."; advice = "If you'd still like to chat, we're happy to. Otherwise, we'll see you when you need us."; }
    else if (percent < 60) { tone = "There's some weight here."; advice = "A few sessions of focused work could lighten the load. Let's chat about what would suit you."; }
    else { tone = "That sounds heavy to carry alone."; advice = "We'd love to talk — book a first session and we'll meet you where you are."; }
  }

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card" style={{ padding: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>A small check-in · 2 minutes</div>
          <h2 className="h-2" style={{ marginBottom: 8 }}>How are <em>things</em>, really?</h2>
          <p className="body" style={{ marginBottom: 32 }}>This isn't a diagnosis — just a gentle signal of where you are.</p>

          {!done ? (
            <div>
              <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
                {questions.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= step ? "var(--forest)" : "var(--line)" }}/>
                ))}
              </div>
              <p className="serif" style={{ fontSize: 24, lineHeight: 1.4, marginBottom: 28, fontStyle: "italic", color: "var(--ink)" }}>
                "{questions[step].text}"
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {choices.map((c, idx) => (
                  <button key={c} onClick={() => { setAnswers({ ...answers, [questions[step].id]: idx }); setStep(step + 1); }}
                    style={{ padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "var(--r-md)", background: "var(--bg)", textAlign: "left", fontSize: 15, transition: "all 0.18s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; e.currentTarget.style.background = "var(--bg-card)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg)"; }}>
                    {c}
                  </button>
                ))}
              </div>
              <div className="small" style={{ marginTop: 20, textAlign: "center" }}>{step + 1} of {questions.length}</div>
            </div>
          ) : (
            <div>
              <p className="quote" style={{ marginBottom: 20 }}>{tone}</p>
              <p className="body" style={{ marginBottom: 28 }}>{advice}</p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn btn-primary" onClick={() => window.__bpNav("contact")}>Book a session <Ico.Arrow size={13}/></button>
                <button className="btn btn-ghost" onClick={() => { setStep(0); setAnswers({}); }}>Take it again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const HomeArticles = ({ onNav }) => (
  <section className="section" style={{ background: "var(--bg-soft)" }}>
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Articles & essays</div>
          <h2 className="h-1" style={{ maxWidth: 540 }}>Slow reading <em>about staying soft.</em></h2>
        </div>
        <button className="btn btn-ghost" onClick={() => onNav("articles")}>Read the journal <Ico.Arrow size={14}/></button>
      </div>
      <div className="grid-2" style={{ gap: 32 }}>
        {ARTICLES.slice(0, 2).map((a, i) => (
          <article key={a.id} className="reveal in" style={{ transitionDelay: i * 0.06 + "s", cursor: "pointer" }} onClick={() => onNav("article", a.id)}>
            <div className="imgph" style={{ aspectRatio: "16/10", borderRadius: 6, marginBottom: 24 }}>
              <span className="imgph-tag">Editorial · {a.cat}</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <span className="tag tag-forest">{a.cat}</span>
              <span className="small">{a.read} min read · {a.date}</span>
            </div>
            <h3 className="h-2" style={{ fontSize: 32, marginBottom: 14 }}>{a.title}</h3>
            <p className="body">{a.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const HomeBookCTA = ({ onNav }) => (
  <section style={{ position: "relative", padding: "calc(120px * var(--space)) 0", overflow: "hidden" }}>
    <div className="container">
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", padding: "80px 64px", background: "var(--forest)", color: "var(--bg-card)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.18, color: "var(--clay)" }}>
          <RingsMotif size={420}/>
        </div>
        <div style={{ position: "relative", maxWidth: 640 }}>
          <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Same-day & after-hours</div>
          <h2 className="h-1" style={{ color: "var(--bg-card)", marginBottom: 24 }}>
            Make an appointment <em style={{ color: "var(--clay)" }}>today.</em>
          </h2>
          <p className="lead" style={{ color: "rgba(245,240,225,0.8)", marginBottom: 36 }}>
            Same-day appointments, after-hours availability, or your preferred dates.
            We hold a few slots open each week for new clients.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-clay btn-lg" onClick={() => onNav("contact")}>Book now <Ico.Arrow/></button>
            <a className="btn btn-ghost btn-lg" style={{ color: "var(--bg-card)", borderColor: "rgba(245,240,225,0.4)" }} href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={16}/> Or WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomePage, SERVICES, THERAPISTS, ARTICLES, FAQS });
