export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/therapists", label: "Therapists" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
];

// Practice contact details — single source of truth for the whole site.
export const ORG_NAME      = "BasePsych";
export const PHONE_E164    = "+6589107529";
export const WHATSAPP_URL  = `https://wa.me/${PHONE_E164.replace(/[^0-9]/g, "")}`;
export const WHATSAPP_DISPLAY = "+65 8910 7529";
export const EMAIL         = "julia.khaw@basepsych.com";
export const INSTAGRAM_URL = "https://instagram.com/base.psych";
export const INSTAGRAM_HANDLE = "@base.psych";
export const SITE_URL      = "https://basepsych.com";

export const ADDRESS = {
  line1: "63B Temple Street",
  city: "Singapore",
  postal: "058608",
  country: "SG",
  full: "63B Temple Street, Singapore 058608",
};

// Opening hours — Tue is the late-evening slot; Sun closed.
export const HOURS = [
  { day: "Mon",     open: "10:00", close: "18:00" },
  { day: "Tue",     open: "14:00", close: "21:00" },
  { day: "Wed",     open: "10:00", close: "18:00" },
  { day: "Thu",     open: "10:00", close: "18:00" },
  { day: "Fri",     open: "10:00", close: "18:00" },
  { day: "Sat",     open: "10:00", close: "14:00" },
  { day: "Sun",     open: null,    close: null    },
];
// Compact human-readable summary used in the footer / contact aside.
export const HOURS_SUMMARY = [
  { label: "Mon, Wed–Fri", time: "10am – 6pm" },
  { label: "Tue",          time: "2pm – 9pm"  },
  { label: "Sat",          time: "10am – 2pm" },
  { label: "Sun",          time: "Closed"     },
];

// Referral / returning-client offer. Surfaced on contact page + a FAQ.
export const REFERRAL_DISCOUNT = "10% off your first month for returning clients and referrals from past clients.";

export const NAP_KEY_VALUE_STR = `BasePsych · ${ADDRESS.full}`;

export const NAP_FOR_SCHEMA = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS.line1,
  addressLocality: ADDRESS.city,
  postalCode: ADDRESS.postal,
  addressCountry: ADDRESS.country,
};

export const SERVICES = [
  {
    id: "individual",
    icon: "Anchor",
    title: "Individual psychotherapy",
    desc: "One-to-one sessions for youths and adults — attachment-based, carefully paced for what your nervous system can hold. We work with anxiety, depression, trauma, adverse childhood experiences, and the relational patterns that keep showing up.",
    topics: ["Adults", "Youths", "Anxiety", "Depression", "Trauma & ACEs", "Relationships"],
  },
  {
    id: "talks",
    icon: "Thread",
    title: "Talks & workshops",
    desc: "Speaking engagements and small-group workshops on attachment, trauma-aware living, and emotional health — designed for organisations, schools, and community groups in Singapore.",
    topics: ["Speaking", "Workshops", "Schools", "Workplaces", "Community"],
  },
  {
    id: "assess",
    icon: "Spark",
    title: "Psychological assessments",
    desc: "Clinical, cognitive, and diagnostic assessments — conducted with care, written up in plain language, and delivered with a clear next step. Useful for self-understanding or formal documentation.",
    topics: ["ADHD", "Cognitive", "Mood", "Diagnostic"],
  },
];

export const THERAPISTS = [
  {
    id: "julia-khaw",
    name: "Julia Khaw",
    title: "Registered Clinical Psychologist",
    photo: "/assets/julia-khaw.webp",
    languages: ["English", "Mandarin"],
    focuses: ["Depression", "Trauma & ACEs", "Anxiety", "Attachment", "Relationships"],
    blurb: "I work attachment-first. Whatever you're carrying — the heaviness, the patterns that won't shift, the pieces you can't quite name — we'll meet it together, gently, at the pace your nervous system can hold.",
    availability: "This week",
    tone: "#8A9A7B",
  },
];

export const ARTICLES = [
  { id: 1, cat: "Attachment", title: "What does it mean to have a 'secure base' as an adult?", read: 6, date: "Apr 2026", excerpt: "We don't outgrow our attachment needs — we just hide them better. Here's what a secure base actually looks like in adulthood." },
  { id: 2, cat: "Anxiety", title: "The body keeps showing up before the thought does", read: 8, date: "Mar 2026", excerpt: "On the somatic signals we miss, and how attending to them is half the work of therapy." },
  { id: 3, cat: "Couples", title: "When the argument isn't about the dishes", read: 5, date: "Mar 2026", excerpt: "Most fights are protests of disconnection in disguise. A short guide to listening past the surface." },
  { id: 4, cat: "Therapy 101", title: "Your first session: what actually happens", read: 4, date: "Feb 2026", excerpt: "If you've been on the fence, here's a plain-language walkthrough of what the first hour looks like." },
  { id: 5, cat: "Anxiety", title: "Overthinking is a feeling that hasn't been allowed to land", read: 6, date: "Feb 2026", excerpt: "Why the mental loop won't close — and what actually quiets it. (Hint: it isn't more thinking.)" },
  { id: 6, cat: "Attachment", title: "On being the steady one: notes for parentified adults", read: 7, date: "Jan 2026", excerpt: "For the ones who held things up too early, and are now too tired to receive what they've been giving." },
];

export const FAQS = [
  { q: "How much does a session cost?", a: "We charge $240 for a 60-minute session with a registered clinical psychologist. We also offer fee scaling/concession rates if you are eligible." },
  { q: "Do you offer any discounts?", a: "Yes — 10% off your first month of therapy for returning clients and for friends or family referred by past clients. Just mention the referral when you book." },
  { q: "Can I claim therapy fees through my insurance or employee benefits?", a: "You may be able to claim therapy fees depending on your provider's coverage. It's a good idea to check directly with your insurer or HR. We'll happily provide an invoice or supporting documents for your claim." },
  { q: "Am I eligible for fee scaling/concession rates?", a: "A limited number of reduced-fee slots are available for students, individuals who are unemployed, or those experiencing temporary financial hardship. Reduced rates are reviewed on a case-by-case basis. Reach out if you think you meet the requirements." },
  { q: "What happens in the first session?", a: "Your first session is an opportunity for you and your therapist to meet, and a time to ask any questions. Your therapist will lead the conversation to understand what you've been experiencing. It's typical to feel nervous; many feel reassured once they meet their therapist." },
  { q: "Can I bring someone with me for my first appointment?", a: "Yes. You're welcome to bring someone along if it helps you feel comfortable. Therapy is a personal process, so your therapist will mostly speak with you directly, but a support person can join briefly at the start or end." },
  { q: "What if I don't know where to start?", a: "Many people don't — that's okay. Your therapist will guide you. Often, conversation unfolds naturally once you begin." },
  { q: "How many sessions do I need?", a: "It varies. Some find a few sessions enough; others benefit from longer-term therapy to explore deeper patterns. We'll review your goals regularly so you have a clear sense of pace." },
  { q: "Is what I share kept confidential?", a: "Yes. Your discussions and notes are kept private and stored on a HIPAA-compliant electronic management system." },
];

export const MOODS = [
  { id: "anxious", label: "Anxious", color: "#C46A4F", desc: "Racing thoughts, restless body" },
  { id: "low", label: "Low", color: "#7A8A8B", desc: "Heavy, flat, hard to begin" },
  { id: "stuck", label: "Stuck", color: "#B89773", desc: "Patterns that won't shift" },
  { id: "tender", label: "Tender", color: "#C9A07A", desc: "A loss or change is near" },
  { id: "tired", label: "Tired", color: "#8A9A7B", desc: "Burnt out, depleted" },
  { id: "hopeful", label: "Hopeful", color: "#5C7C5E", desc: "Ready, but unsure where to start" },
];

export const BOOKING_REASONS = [
  { id: "anxious", label: "I've been feeling anxious or overwhelmed" },
  { id: "low", label: "I've been feeling low or unmotivated" },
  { id: "relational", label: "Something in a relationship feels stuck" },
  { id: "transition", label: "I'm in a life transition" },
  { id: "trauma", label: "I'm carrying something old and want to look at it" },
  { id: "unsure", label: "I'm not sure — I just know I'd like to talk" },
];

export const BOOKING_WHOS = [
  { id: "self", label: "Just me" },
  { id: "couple", label: "Me and my partner" },
  { id: "family", label: "Me and a family member" },
  { id: "young", label: "A young person" },
];

export const BOOKING_MODES = [
  { id: "studio", label: "In our Temple Street studio", desc: "63B Temple Street, Singapore" },
  { id: "online", label: "Online", desc: "Encrypted video — anywhere in Singapore" },
  { id: "either", label: "Either is fine", desc: "We'll suggest the best fit" },
];

export const BOOKING_TIMES = ["This week", "Next week", "In the next month", "I'm flexible"];
