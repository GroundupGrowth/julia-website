// Long-form copy for each service page. Keyed by the same id as in
// SERVICES (lib/data.js). Each entry feeds /services/[slug].

export const SERVICE_DETAILS = {
  individual: {
    eyebrow: "Individual psychotherapy",
    title: "One-to-one therapy, attachment-first.",
    standfirst:
      "Careful, paced work for youths and adults navigating anxiety, depression, trauma, adverse childhood experiences, and the relational patterns that keep showing up.",
    intro: [
      "Most of the people I sit with arrive carrying something they haven't been able to put down on their own. A heaviness that isn't lifting. A pattern that keeps repeating. A small sentence — said early in life, by someone they needed — that has been quietly shaping the rest of it.",
      "Individual therapy at BasePsych is unhurried. We work attachment-first, which means we hold the body, the relationships, and the inner life as one piece — and we move at the pace your nervous system can hold.",
    ],
    pillars: [
      {
        icon: "Anchor",
        title: "Who it's for",
        body:
          "Adults and youths (16+) navigating anxiety, depression, trauma, adverse childhood experiences, complex relational patterns, life transitions, and identity work.",
      },
      {
        icon: "Shelter",
        title: "What sessions look like",
        body:
          "Weekly 60-minute sessions to start. In-person at our Temple Street studio, or online via encrypted video. We'll review pace and goals together, regularly.",
      },
      {
        icon: "Thread",
        title: "The approach",
        body:
          "Attachment theory + emotion-focused therapy + parts work, drawn on as needed. Some weeks we'll move slowly through old material; some weeks we'll work on practical tools.",
      },
    ],
    process: [
      { n: "01", title: "Reach out", desc: "WhatsApp, email, or the booking form. A reply lands within one working day, often sooner." },
      { n: "02", title: "First session", desc: "An hour to meet, talk through what's bringing you here, and check whether the room feels right." },
      { n: "03", title: "Ongoing work", desc: "We agree a rhythm — weekly is most common — and review goals together every few sessions." },
    ],
    pricing: {
      headline: "$240 per 60-minute session",
      detail:
        "Fee scaling/concession rates available case-by-case for students, those between work, or in temporary financial hardship. Receipts and supporting docs provided for insurance / EAP claims.",
    },
    faq: [
      "What happens in the first session?",
      "How many sessions do I need?",
      "Is what I share kept confidential?",
    ],
    cta: { primary: "Book a first session", secondary: "Read FAQs" },
    related: ["assess", "talks"],
  },

  talks: {
    eyebrow: "Talks & workshops",
    title: "Bring attachment-informed thinking <em>to your team.</em>",
    standfirst:
      "Speaking engagements and small-group workshops on attachment, trauma-aware living, and emotional health — designed for organisations, schools, and community groups in Singapore.",
    intro: [
      "A lot of the questions I'm asked in the consulting room — Why do I keep choosing this? Why can't I rest? Why does this team keep falling out the same way? — have answers that travel well outside it.",
      "Talks and workshops are how we bring attachment-aware thinking into the rooms where it's needed: schools, workplaces, community spaces, parent groups. Built for the context, never off-the-shelf.",
    ],
    pillars: [
      {
        icon: "Spark",
        title: "Who it's for",
        body:
          "Schools, universities, employers (HR / People & Culture / wellness), community organisations, parent groups, professional networks.",
      },
      {
        icon: "Hand",
        title: "Sample topics",
        body:
          "Attachment in adulthood. Supporting trauma-affected staff. Parenting from a secure base. The body and anxiety. Burnout as a relational problem. Ask for a topic and we'll shape it.",
      },
      {
        icon: "Roots",
        title: "Formats",
        body:
          "Keynote talk (45–60 min). Half-day workshop (~3 hrs, interactive). Full-day workshop (~6 hrs). Custom curricula for multi-session programmes.",
      },
    ],
    process: [
      { n: "01", title: "Tell us about your context", desc: "A short call to understand your audience, the moment they're in, and the outcome you'd like." },
      { n: "02", title: "We propose a shape", desc: "Topic, format, length, and framing — written up so your team can sign off easily." },
      { n: "03", title: "Delivery & follow-up", desc: "Held in your space or ours. Follow-up notes and resources sent within the week." },
    ],
    pricing: {
      headline: "Pricing on enquiry",
      detail:
        "Fees depend on format, prep time, and your organisation's size. We'll send a clean quote after the first call — no surprises.",
    },
    faq: null,
    cta: { primary: "Enquire about a talk", secondary: "Read about my approach" },
    related: ["individual", "assess"],
  },

  assess: {
    eyebrow: "Psychological assessments",
    title: "Clarity, <em>in plain language.</em>",
    standfirst:
      "Clinical, cognitive, and diagnostic assessments — conducted with care, written up plainly, and delivered with a clear next step. Useful for self-understanding or formal documentation.",
    intro: [
      "Sometimes the most useful thing therapy can offer isn't more therapy. It's a careful, well-conducted assessment — a piece of paper that names what you're navigating, in language you and the people around you can use.",
      "All assessments at BasePsych are conducted personally by Julia, written up in plain language (no jargon dump), and delivered with a feedback session so you actually understand what's in the report.",
    ],
    pillars: [
      {
        icon: "Spark",
        title: "Types we offer",
        body:
          "ADHD assessments. Cognitive / IQ assessments. Mood and anxiety assessments. Broad clinical and diagnostic assessments. Multi-domain assessments where useful.",
      },
      {
        icon: "Nest",
        title: "Why people come",
        body:
          "Self-understanding. School or university accommodations. Workplace support. Insurance or formal documentation. Clarification before starting therapy.",
      },
      {
        icon: "Thread",
        title: "How we write reports",
        body:
          "Plain language. Clear summary up top. Honest about uncertainty. Always with practical next steps — not a diagnosis dropped in your lap.",
      },
    ],
    process: [
      { n: "01", title: "Intake conversation", desc: "60 minutes. We talk through what you're hoping the assessment will clarify, and which protocols make sense." },
      { n: "02", title: "Assessment session(s)", desc: "1–3 sessions depending on scope. Standardised tests, clinical interview, and any collateral information." },
      { n: "03", title: "Report + feedback", desc: "Written up within 2–3 weeks. We meet again to walk through it together — paper alone is not enough." },
    ],
    pricing: {
      headline: "Pricing on enquiry",
      detail:
        "Quoted per assessment scope. We'll explain exactly what's included — sessions, tests used, report length — before you commit.",
    },
    faq: [
      "Is what I share kept confidential?",
      "Can I claim therapy fees through my insurance or employee benefits?",
    ],
    cta: { primary: "Enquire about an assessment", secondary: "Read FAQs" },
    related: ["individual", "talks"],
  },
};
