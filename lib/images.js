// Editorial photography map. Public Unsplash CDN URLs — no API key, no
// rate limit for direct image fetches. Swap any of these with brand
// photography by replacing the URL.

const u = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

// Hero / home moments
export const HERO_IMG    = u("1545239351-1141bd82e8a6"); // hands cradling tea, soft light
export const MOOD_IMG    = u("1481833761820-0509d3217039"); // hands holding warm cup

// Article cover images keyed by article id (matches lib/data.js)
export const ARTICLE_COVERS = {
  1: u("1517248135467-4c7edcad34c4"), // chair by a window — secure base
  2: u("1474401471707-1c8505fbc55a"), // soft natural light, body close-up — somatic
  3: u("1495474472287-4d71bcdd2085"), // two coffee cups on a counter — couples
  4: u("1503602642458-232111445657"), // armchair, side table — first session
  5: u("1455390582262-044cdead277a"), // open notebook + pen — overthinking
  6: u("1556909114-f6e7ad7d3136"),    // warm domestic kitchen — parentified
};

// Inline body images keyed by `${articleId}:${imgIndex}` so each in-essay
// figure gets its own directed photograph.
export const ARTICLE_INLINE = {
  "1:0": u("1481833761820-0509d3217039"), // hands wrapped around clay mug
  "2:0": u("1500372841062-2cea2d3a96bb"), // glass of water on wood, light ripple
  "3:0": u("1505693416388-ac5ce068fe85"), // unmade bed seen from above
  "4:0": u("1505691938895-1758d7feb511"), // worn linen armchair + side table
  "5:0": u("1517677208171-0bc6725a3e60"), // hand resting on chest, warm light
  "6:0": u("1556909114-f6e7ad7d3136"),    // worn slippers by front door
};
