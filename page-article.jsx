// BasePsych — Article reading view (quiet literary layout)
// Body content uses simple block descriptors:
//   { p: "..." }                  paragraph
//   { h: "..." }                  section subhead
//   { q: "..." }                  pull quote
//   { l: ["..."] }                unordered list
//   { img: "directed caption" }   inline directed-image placeholder
// Author: Julia Khaw

const ARTICLE_BODIES = {
  1: {
    no: "No. 01",
    kicker: "Field notes",
    standfirst: "Most of us were taught that 'attachment' is a baby word — something you graduate from. It isn't. It just gets quieter, and a little harder to name.",
    cover: "A weathered wooden chair beside a window. Soft afternoon light. Empty seat — implied presence.",
    blocks: [
      { p: "When I ask new clients what they're hoping for, the answer often arrives in three or four sentences. They want to feel less anxious. They want to stop reaching for their phone before their feet hit the floor. They want their partner to listen. They want to sleep." },
      { p: "Underneath these is almost always a quieter sentence: I would like a place where I am known, and where my knowing is not too much. That sentence — phrased a hundred different ways — is what John Bowlby called a secure base. He was writing about children, but he could just as easily have been writing about us." },
      { q: "A secure base in adulthood isn't a person who fixes you. It's a person, or a place, or a practice, in whose presence you can finally exhale." },
      { h: "What it actually feels like" },
      { p: "Some of the steadiest indicators are the smallest. You return from somewhere difficult and feel — without having to perform anything — that you can land. Your nervous system, which has been quietly running its own weather report all day, downshifts a notch. You don't have to explain yourself to be received." },
      { img: "A pair of hands wrapped around a clay mug, steam rising. Knit sleeves, soft window light. Anchoring detail." },
      { p: "It is not, importantly, the absence of conflict. A secure base can hold a hard conversation; that's part of what makes it secure. What it doesn't do is punish you for needing it." },
      { h: "Why so many of us missed it" },
      { p: "Most of the adults I sit with had one or two adults in their early life who were doing their best with not enough. Maybe a parent who loved fiercely but was anxious. A father who showed up but left the room when feelings did. A mother who managed everything except her own grief. None of this is blame — it's just inheritance. We learned, very early, what was welcome and what wasn't." },
      { p: "The cost is that we became experts at folding ourselves smaller in order to keep the people we needed close. That folding becomes a habit. It travels into adulthood disguised as independence, or perfectionism, or 'I'm fine.'" },
      { q: "Independence is sometimes a wound that learned to walk." },
      { h: "Building one now" },
      { p: "The good news, which sounds quiet but is in fact astonishing, is that the brain remains relational its entire life. Secure attachment is not only inheritable — it is buildable. Therapy is one place where this happens. So is a long friendship. So is a partnership where both people are willing to be seen at their less-charming hours. So is a steady relationship with your own inner life." },
      { p: "If you are looking for a starting point, try this: notice where, in your week, your shoulders drop a quarter-inch. That is the beginning of a map." },
    ],
  },
  2: {
    no: "No. 02",
    kicker: "On the body",
    standfirst: "By the time a thought arrives, your body has been speaking for hours. Most of the work of therapy is learning to listen earlier.",
    cover: "Close-up of a person's collarbones and bare shoulder, soft natural light, eyes closed, mid-exhale. Quiet, embodied, not posed.",
    blocks: [
      { p: "A client recently said something that has stayed with me. 'I notice I'm anxious,' she said, 'about three hours after I notice my jaw.' We laughed, gently, because it was true and because it was a small piece of grief. The body had been telling her for the better part of a morning. The thought arrived, as it usually does, after the meeting." },
      { p: "This is the order most of us live in. The body knows first; the mind catches up later, often by inventing a reason." },
      { q: "Anxiety is rarely the first signal. It's usually the first signal we know how to name." },
      { h: "Why we miss the earlier ones" },
      { p: "If you grew up in a home where feelings were inconvenient, or unsafe, or simply too big for the adults around you, you learned — sensibly — to stop noticing them. The signals didn't disappear. They got quieter, and you got faster at overriding them. By adulthood, the override is so automatic that you genuinely don't feel the wave until it's breaking." },
      { img: "A glass of water on a wooden table, sunlight through it casting a small ripple of light on the surface. Stillness, tension just-released." },
      { p: "What we call 'sudden' anxiety is almost never sudden. It is the moment your body crosses a threshold loud enough to bypass a lifetime of dismissing it." },
      { h: "A small practice" },
      { p: "Three times a day — when you sit down at your desk, before you eat, before you get into bed — pause for one breath and ask: where is my body right now? Not what should it feel, not why does it feel that. Just: where is it, and what is it doing." },
      { l: [
        "Jaw — clenched, soft, somewhere in between?",
        "Shoulders — up near your ears, or down where they live?",
        "Chest — open, tight, hollow, full?",
        "Stomach — settled, gripping, fluttery?",
      ]},
      { p: "You're not trying to change anything. You're just learning the language. Most clients find that, after a few weeks of this, the 'sudden' anxiety becomes much less sudden. It announces itself earlier, in the body, where it can still be tended to instead of managed." },
      { q: "The work is not to think your way out of feeling. It's to feel a little earlier, while there's still room to be kind to yourself about it." },
    ],
  },
  3: {
    no: "No. 03",
    kicker: "Between two people",
    standfirst: "Couples rarely fight about what they're fighting about. The dishes are almost never about the dishes.",
    cover: "Two cups of half-finished coffee on a kitchen counter, morning light. One pulled close, one pushed away. The conversation, in objects.",
    blocks: [
      { p: "A couple comes in. They have been together for nine years. They love each other; they say so within the first ten minutes, looking at each other with something tender and exhausted. They are here because they cannot stop fighting about the dishes." },
      { p: "I ask them to walk me through the most recent one. He left a pan in the sink overnight. She found it in the morning. By 8:14 she was crying in the bathroom. By 8:22 he was furious, slamming a cupboard. By 8:45 they were not speaking, and they did not speak again until they sat down on this couch." },
      { q: "Most fights are not about the thing. They are protests of disconnection wearing the costume of the thing." },
      { h: "What's actually happening" },
      { p: "Underneath almost every recurring fight is a much older, quieter sentence. For her, that morning, it was: I am the only one holding this together, and no one is holding me. For him, two minutes later, it was: I cannot do anything right in this house, and I am going to be alone in this." },
      { img: "An unmade bed seen from above, two depressions in the pillows, a single book left open between them. Tenderness and distance in the same frame." },
      { p: "Neither of them said either of those sentences out loud. They couldn't — those sentences are too tender to lead with. So instead they fought about a pan." },
      { h: "Listening past the surface" },
      { p: "When you find yourself in a familiar fight — the same shape, the same soundtrack — try, for a moment, to translate it. Not your partner's words; their underneath. The sentence they cannot quite say is almost always one of three:" },
      { l: [
        "I am afraid you don't see me.",
        "I am afraid I'm too much for you.",
        "I am afraid I'm alone in this, even with you here.",
      ]},
      { p: "Your job, in that moment, is not to win. It's to answer the underneath sentence. 'I see you.' 'You're not too much.' 'You're not alone in this.' These sentences sound small. They are not small. They are the entire argument, reversed." },
      { q: "The opposite of conflict is not agreement. It's contact." },
    ],
  },
  4: {
    no: "No. 04",
    kicker: "Beginnings",
    standfirst: "If you've been on the fence about therapy, the unknown is usually doing more work than the actual hour ever could. Here is what the first session looks like.",
    cover: "A door pulled gently to — not closed, not open. Soft hallway light spilling around the gap. The threshold of an honest room.",
    blocks: [
      { p: "Most people, before their first session, have rehearsed it for weeks. They've imagined the room. They've imagined the questions. They've imagined a version of themselves that is composed enough to answer well. Then they arrive, and almost without exception, the first thing they say is: I don't know where to start." },
      { p: "That is, in fact, the right place to start. Here is roughly what unfolds." },
      { h: "The first ten minutes" },
      { p: "We meet. There's a glass of water, a couch, a chair, a small clock you cannot see from where you're sitting. I'll ask if you'd like the door fully closed or just pulled to. We'll talk about confidentiality — what stays in the room (almost everything) and the small handful of things that don't. You will probably feel some version of nervous. That is appropriate; you are about to do something honest with a stranger." },
      { q: "Your nervousness is not in the way of the work. It is the work, beginning." },
      { img: "A worn linen-upholstered armchair, a small side table, a glass of water, a folded blanket on the arm. The consulting room as a quiet welcome." },
      { h: "The middle of the hour" },
      { p: "I'll ask, in some form: what brings you here, now? Not what brings you to therapy in general — what made today the day you sat down. The answer often surprises both of us. Sometimes it's the obvious thing. Sometimes it's a small moment from last Tuesday that wouldn't leave you alone." },
      { p: "From there, we follow the thread. I'll ask about your history — family, relationships, work, body, sleep — but lightly, in service of understanding the now. You don't have to come prepared. You don't have to be articulate. You can cry, or not cry, or do the thing where you almost cry and then make a joke. All of it is welcome." },
      { h: "The last ten minutes" },
      { p: "We'll slow down, on purpose. I'll share what I'm noticing — patterns, possible directions, what I think we could work on together. You'll have a chance to ask anything. We'll talk about whether it feels like a fit. If it doesn't, that's a real answer; I'll help you find someone it might fit better with." },
      { q: "The first session is not a test. It is two people checking whether this room could become useful to one of them." },
      { p: "You will leave a little tired. That is normal — being honest is metabolically expensive. Be gentle with yourself for the rest of the day." },
    ],
  },
  5: {
    no: "No. 05",
    kicker: "On the mind",
    standfirst: "Most of what gets called 'overthinking' is not a thinking problem. It's a feeling that hasn't been allowed to land yet.",
    cover: "A notebook open on a desk, pen left mid-sentence, a faint ring of coffee beside it. Late evening lamp light. Thinking, paused.",
    blocks: [
      { p: "A client described it perfectly the other day. 'My mind,' she said, 'is a tab I can't close.' She wasn't wrong. By the time she sat down she had run the same conversation through her head forty-three times since Sunday. It was Wednesday." },
      { p: "We tend to treat overthinking as a cognitive failure — something to fix with better discipline, more meditation, fewer thoughts. In my experience it's almost never that. Overthinking is what feeling does when it isn't allowed to feel." },
      { q: "The mind keeps running the loop because the body hasn't been given permission to finish the sentence." },
      { h: "The loop, explained gently" },
      { p: "Here is what is usually happening. Something has occurred — a conversation, an email, a silence — and a feeling has arrived in your body. Hurt, maybe. Or fear. Or the small, hot loneliness of feeling misunderstood. The feeling is uncomfortable and your nervous system is, understandably, not interested in sitting with it." },
      { img: "A hand resting gently against a person's chest, fingers slightly spread. Cotton shirt. Soft, warm light. The smallest act of self-acknowledgement." },
      { p: "So the mind, which is helpful and clever and means well, takes over. It re-runs the moment. It writes alternate scripts. It hunts for the thing you should have said. Each loop is a small attempt to control the uncomfortable feeling by thinking it into submission. It almost works. That's why you keep doing it." },
      { h: "What actually closes the tab" },
      { p: "Not more thinking. The tab closes when the feeling underneath it gets to be felt — briefly, gently, without being argued with." },
      { p: "Try this, the next time the loop is running. Pause. Place a hand somewhere honest — chest, belly, the space between your collarbones. Ask the loop: what feeling are you trying to keep me from? Wait. Don't answer for it. Often, within thirty seconds, a quieter sentence will arrive. 'I'm hurt.' 'I'm scared they don't like me.' 'I miss her.'" },
      { p: "Let that sentence be true for one minute. That is usually all it takes. The loop, having done its job of protecting you, can now rest." },
      { q: "Overthinking is loyalty in disguise. It is the mind, working overtime, to keep a feeling safe." },
    ],
  },
  6: {
    no: "No. 06",
    kicker: "Field notes",
    standfirst: "Many of the people I work with arrived in adulthood already exhausted. They were the ones who held everything together — long before anyone asked them to.",
    cover: "A child's drawing taped to a fridge, edges curling. Adult kitchen out of focus around it. The weight of being looked-up-to, captured small.",
    blocks: [
      { p: "There is a particular kind of client who arrives in their early thirties, deeply competent and deeply tired. They are the ones their family calls in a crisis. They are the ones their friends lean on. They are, often, the ones who are good at therapy — articulate, insightful, ready with the right vocabulary. They are also the ones who, when I ask what they need, look at me as if I have asked them to translate from a language they used to speak as a child." },
      { p: "Most of them were parentified. Not always dramatically — sometimes just by being the steady one in a household that needed a steady one and didn't have a grown-up free." },
      { q: "Parentification is not always loud. Sometimes it is just being the child whose feelings were a little too inconvenient to have." },
      { h: "What it costs" },
      { p: "The cost is not, primarily, in childhood. Children are extraordinarily adaptive; many parentified kids appear to be thriving. The cost arrives later, in three quiet places." },
      { l: [
        "Receiving care feels strange — almost itchy. You can give it beautifully; getting it is much harder.",
        "Rest feels unsafe. The moment you stop holding things up, an old anxiety arrives, certain something is about to fall.",
        "Your own needs are dim. You can list other people's needs in your sleep. Yours are harder to find.",
      ]},
      { img: "A worn pair of house slippers placed carefully by the front door, one slightly askew. The labour of keeping a household, made visible in small things." },
      { h: "The work, slowly" },
      { p: "Therapy with parentified adults is, in many ways, a long practice in receiving. Receiving care from the therapist. Receiving permission to be small for an hour. Receiving the radical news that your needs do not have to earn their way into the room — they are allowed in just because you are." },
      { p: "It can take months for a client like this to cry in session. Not because the grief isn't there, but because crying requires a kind of trust — that someone will be there at the end of the tears, and that they won't ask you to apologise for them." },
      { q: "You do not have to be useful to be welcome here. You did not have to be useful to be welcome anywhere — even if no one ever told you so." },
      { p: "If any of this is landing, I want to say one thing very directly: the part of you that learned to hold everything up was not wrong to do so. It kept you safe. It is also allowed, now, to put some of it down." },
    ],
  },
};

// Render a body block based on its shape
const ArticleBlock = ({ block }) => {
  if (block.h)   return <h2 className="article-h">{block.h}</h2>;
  if (block.q)   return <blockquote className="article-quote">{block.q}</blockquote>;
  if (block.l)   return (
    <ul className="article-list">{block.l.map((item, i) => <li key={i}>{item}</li>)}</ul>
  );
  if (block.img) return (
    <figure className="article-figure">
      <div className="article-figure-img imgph">
        <span className="imgph-tag">{block.img}</span>
      </div>
    </figure>
  );
  if (block.p)   return <p className="article-p">{block.p}</p>;
  return null;
};

// ────────────────────────────────────────────────
// ARTICLE PAGE — quiet literary layout
// ────────────────────────────────────────────────
const ArticlePage = ({ articleId, onNav, readingWidth = "comfortable" }) => {
  const article = ARTICLES.find(a => a.id === articleId) || ARTICLES[0];
  const body = ARTICLE_BODIES[article.id] || ARTICLE_BODIES[1];
  const julia = THERAPISTS[0];

  // Pick 2 related articles (same category preferred, otherwise next two)
  const related = (() => {
    const sameCat = ARTICLES.filter(a => a.id !== article.id && a.cat === article.cat);
    const others  = ARTICLES.filter(a => a.id !== article.id && a.cat !== article.cat);
    return [...sameCat, ...others].slice(0, 2);
  })();

  return (
    <article className="article-view article-quiet" data-width={readingWidth}>
      {/* Top meta strip — back link */}
      <div className="article-meta-strip">
        <div className="container">
          <button className="link-arrow" onClick={() => onNav("articles")}
            style={{ color: "var(--ink-mute)", borderColor: "var(--ink-mute)" }}>
            ← The journal
          </button>
        </div>
      </div>

      {/* Title block — quiet, no cover */}
      <header className="article-quiet-header">
        <div className="article-quiet-meta">
          <span className="article-quiet-no">{body.no}</span>
          <span className="article-quiet-dot"/>
          <span className="article-quiet-kicker">{body.kicker}</span>
          <span className="article-quiet-dot"/>
          <span className="article-quiet-cat">{article.cat}</span>
        </div>
        <h1 className="article-quiet-title">{article.title}</h1>
        <p className="article-quiet-standfirst">{body.standfirst}</p>
        <div className="article-quiet-byline">
          <span>By Julia Khaw</span>
          <span className="article-quiet-dot"/>
          <span>{article.read} min read</span>
          <span className="article-quiet-dot"/>
          <span>{article.date}</span>
        </div>
        <div className="article-quiet-rule"/>
      </header>

      {/* Body */}
      <div className="article-body">
        {body.blocks.map((b, i) => <ArticleBlock key={i} block={b}/>)}
      </div>

      {/* End mark */}
      <div className="article-end-mark">
        <span className="article-end-glyph">·   ·   ·</span>
      </div>

      {/* More from Julia — type only, no photos */}
      <section className="article-more-wrap">
        <div className="article-more-inner">
          <div className="article-more-eyebrow">More from Julia</div>
          <div className="article-more-list">
            {related.map((a) => {
              const meta = ARTICLE_BODIES[a.id];
              return (
                <button key={a.id} className="article-more-item" onClick={() => onNav("article", a.id)}>
                  <div className="article-more-no">{meta?.no || ""}</div>
                  <div>
                    <div className="article-more-cat">{a.cat}</div>
                    <div className="article-more-title">{a.title}</div>
                    <div className="article-more-meta">{a.read} min read · {a.date}</div>
                  </div>
                  <Ico.Arrow size={14}/>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author card — only place Julia's photo appears */}
      <section className="article-author-card-wrap">
        <div className="container">
          <div className="article-author-card">
            <div className="article-author-photo">
              <img src={julia.photo} alt="Julia Khaw"/>
            </div>
            <div className="article-author-body">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Written by</div>
              <h3 className="h-2" style={{ marginBottom: 14 }}>Julia Khaw</h3>
              <div style={{ fontSize: 14, color: "var(--ink-mute)", marginBottom: 20 }}>{julia.title}</div>
              <p className="body" style={{ marginBottom: 24, maxWidth: 560 }}>
                Julia is a registered clinical psychologist working with adults navigating anxiety, attachment,
                relationships, and the long, slow work of feeling more at home in themselves. She writes here
                between sessions — quietly, and only when she has something worth saying.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => onNav("contact")}>
                  Book a consultation <Ico.Arrow size={13}/>
                </button>
                <button className="btn btn-ghost" onClick={() => onNav("therapists")}>
                  Read more about Julia
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

Object.assign(window, { ArticlePage, ARTICLE_BODIES });
