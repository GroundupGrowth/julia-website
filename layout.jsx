// BasePsych — shared layout pieces (Nav, Footer, MoodEntry, etc.)

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "therapists", label: "Therapists" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
  { id: "faqs", label: "FAQs" },
];

const Logo = ({ small = false }) => (
  <a href="#home" onClick={(e) => { e.preventDefault(); window.__bpNav("home"); }} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <svg width={small ? 26 : 32} height={small ? 26 : 32} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <circle cx="16" cy="16" r="4" fill="currentColor"/>
    </svg>
    <span className="serif" style={{ fontSize: small ? 18 : 22, letterSpacing: "-0.01em", fontWeight: 500 }}>
      BasePsych
    </span>
  </a>
);

const Nav = ({ active, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector(".bp-scroll");
    if (!root) return;
    const onScroll = () => setScrolled(root.scrollTop > 24);
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={"#" + l.id} className={active === l.id ? "active" : ""}
               onClick={(e) => { e.preventDefault(); onNav(l.id); }}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn btn-ghost btn-sm" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
            <Ico.WhatsApp size={14}/> WhatsApp
          </a>
          <button className="btn btn-primary btn-sm" onClick={() => onNav("contact")}>
            Book now <Ico.Arrow size={13}/>
          </button>
          <button className="nav-mobile-toggle" aria-label="Menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, color: "var(--clay)" }}>
            <Logo />
          </div>
          <p className="body" style={{ maxWidth: 360 }}>
            Singapore's attachment-informed psychological services.
            A safe foundation that gives space to explore, learn, and flourish.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <a className="btn btn-clay btn-sm" href="https://wa.me/6589107529" target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={14}/> Message us
            </a>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Visit</div>
          <p className="body">63b Temple St<br/>Singapore 058608</p>
          <p className="body" style={{ marginTop: 12 }}>Mon–Sat<br/>9am – 9pm</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Pages</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={"#" + l.id} onClick={(e) => { e.preventDefault(); onNav(l.id); }}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 20 }}>Crisis support</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }} className="body">
            <li><strong style={{ color: "var(--bg-soft)" }}>999</strong> — Emergency</li>
            <li><strong style={{ color: "var(--bg-soft)" }}>6389 2222</strong> — IMH</li>
            <li><strong style={{ color: "var(--bg-soft)" }}>1800 221 444</strong> — SOS</li>
          </ul>
        </div>
      </div>
      <div className="rule"></div>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, fontSize: 13, color: "rgba(245,240,225,0.5)" }}>
        <span>© 2026 BasePsych. All rights reserved.</span>
        <span>Privacy · Terms · HIPAA-compliant</span>
      </div>
    </div>
  </footer>
);

// Mood entry — interactive "How are you feeling today?" orb
const MOODS = [
  { id: "anxious", label: "Anxious", color: "#C46A4F", desc: "Racing thoughts, restless body" },
  { id: "low", label: "Low", color: "#7A8A8B", desc: "Heavy, flat, hard to begin" },
  { id: "stuck", label: "Stuck", color: "#B89773", desc: "Patterns that won't shift" },
  { id: "tender", label: "Tender", color: "#C9A07A", desc: "A loss or change is near" },
  { id: "tired", label: "Tired", color: "#8A9A7B", desc: "Burnt out, depleted" },
  { id: "hopeful", label: "Hopeful", color: "#5C7C5E", desc: "Ready, but unsure where to start" },
];

const MoodEntry = ({ onContinue }) => {
  const [picked, setPicked] = React.useState(null);
  const mood = MOODS.find((m) => m.id === picked);
  return (
    <div style={{ position: "relative" }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>How are you, today?</div>
      <h2 className="h-2" style={{ marginBottom: 32, maxWidth: 520 }}>
        Pick what feels closest. <em>We'll meet you there.</em>
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
              <div className="small">Many people who've felt <em>{mood.label.toLowerCase()}</em> have found relief through attachment-based work.</div>
            </div>
            <button className="btn btn-primary" onClick={() => onContinue && onContinue(mood)}>
              Find a therapist <Ico.Arrow size={13}/>
            </button>
          </>
        ) : (
          <div className="body" style={{ color: "var(--ink-mute)" }}>
            ↑ Choose one — there's no wrong answer.
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { Nav, Footer, Logo, MoodEntry, NAV_LINKS, MOODS });
