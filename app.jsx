// BasePsych — Main app shell (router + tweaks + page mount)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "warm",
  "dark": false,
  "fonts": "editorial",
  "hero": "default",
  "density": "regular",
  "photos": "on",
  "readingWidth": "comfortable"
}/*EDITMODE-END*/;

function BasePsychApp({ initialPage = "home", initialArticleId = 1 }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState(initialPage);
  const [articleId, setArticleId] = React.useState(initialArticleId);
  const scrollRef = React.useRef(null);

  React.useEffect(() => { window.__bpNav = (p) => setPage(p); }, []);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [page]);

  // reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll(".bp-scroll .reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.15, root: scrollRef.current });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page]);

  const themeAttr = t.dark ? "dusk" : t.theme;

  const onNav = (p, id) => {
    if (p === "article" && id != null) setArticleId(id);
    setPage(p);
  };

  let pageEl;
  switch (page) {
    case "services":   pageEl = <ServicesPage onNav={onNav}/>; break;
    case "therapists": pageEl = <TherapistsPage onNav={onNav}/>; break;
    case "articles":   pageEl = <ArticlesPage onNav={onNav}/>; break;
    case "article":    pageEl = <ArticlePage articleId={articleId} onNav={onNav} readingWidth={t.readingWidth}/>; break;
    case "contact":    pageEl = <ContactPage onNav={onNav}/>; break;
    case "faqs":       pageEl = <FaqsPage onNav={onNav}/>; break;
    default:           pageEl = <HomePage heroVariant={t.hero} onNav={onNav}/>;
  }

  return (
    <div ref={scrollRef} className="bp-scroll"
         data-theme={themeAttr} data-fonts={t.fonts}
         data-density={t.density} data-photos={t.photos}
         style={{ height: "100%", overflowY: "auto", overflowX: "hidden", background: "var(--bg)", color: "var(--ink)" }}>
      <Nav active={page} onNav={onNav}/>
      <main>{pageEl}</main>
      <Footer onNav={onNav}/>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/6589107529" target="_blank" rel="noreferrer"
         style={{
           position: "fixed", bottom: 24, right: 24, zIndex: 40,
           background: "var(--whatsapp)", color: "white",
           width: 56, height: 56, borderRadius: "50%",
           display: "flex", alignItems: "center", justifyContent: "center",
           boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
         }} className="breathe" aria-label="Chat on WhatsApp">
        <Ico.WhatsApp size={24}/>
      </a>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme"/>
        <TweakSelect label="Color theme" value={t.theme}
          options={[{value:"warm",label:"Warm forest"},{value:"ocean",label:"Quiet ocean"},{value:"terracotta",label:"Terracotta"}]}
          onChange={(v) => setTweak("theme", v)}/>
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)}/>
        <TweakSection label="Typography"/>
        <TweakSelect label="Font pairing" value={t.fonts}
          options={[{value:"editorial",label:"Cormorant + Inter"},{value:"literary",label:"Lora + DM Sans"},{value:"modern",label:"Fraunces + Manrope"},{value:"warm",label:"Source Serif + Work Sans"}]}
          onChange={(v) => setTweak("fonts", v)}/>
        <TweakSection label="Layout"/>
        <TweakRadio label="Hero variant" value={t.hero}
          options={[{value:"default",label:"Center"},{value:"editorial",label:"Editorial"},{value:"fullbleed",label:"Full-bleed"}]}
          onChange={(v) => setTweak("hero", v)}/>
        <TweakRadio label="Density" value={t.density}
          options={[{value:"compact",label:"Compact"},{value:"regular",label:"Regular"},{value:"comfy",label:"Spacious"}]}
          onChange={(v) => setTweak("density", v)}/>
        <TweakSection label="Reading"/>
        <TweakRadio label="Reading width" value={t.readingWidth}
          options={[{value:"narrow",label:"Narrow"},{value:"comfortable",label:"Comfort"},{value:"wide",label:"Wide"}]}
          onChange={(v) => setTweak("readingWidth", v)}/>
        <TweakSection label="Imagery"/>
        <TweakRadio label="Photography" value={t.photos}
          options={[{value:"on",label:"On"},{value:"off",label:"Off (abstract)"}]}
          onChange={(v) => setTweak("photos", v)}/>
      </TweaksPanel>
    </div>
  );
}

Object.assign(window, { BasePsychApp, TWEAK_DEFAULTS });
