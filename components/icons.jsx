// BasePsych — shared SVG icons & abstract motifs
// Attachment-themed: anchor (secure base), shelter (home), roots, threads, nest

export const Ico = {
  Anchor: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.2"/>
      <path d="M12 7.2v13"/>
      <path d="M8.5 11h7"/>
      <path d="M5 14c0 4 3 6.2 7 6.2s7-2.2 7-6.2"/>
      <path d="M3 14h2.5M21 14h-2.5"/>
    </svg>
  ),
  Shelter: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5L12 4l9 7.5"/>
      <path d="M5.5 10v9.5h13V10"/>
      <path d="M10 19.5v-5h4v5"/>
    </svg>
  ),
  Roots: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v8"/>
      <path d="M12 11c-2 0-3 1.5-3 3.5S10.5 21 8 21"/>
      <path d="M12 11c2 0 3 1.5 3 3.5S13.5 21 16 21"/>
      <path d="M9.5 7c-1 0-2 0.5-2.5 1.5"/>
      <path d="M14.5 7c1 0 2 0.5 2.5 1.5"/>
    </svg>
  ),
  Thread: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      <path d="M3 12c2-4 5-4 7 0s5 4 7 0 4-2 4-2"/>
      <circle cx="3" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Nest: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14c2-3 4-4 9-4s7 1 9 4"/>
      <path d="M5 16c1.5-1 4-1.5 7-1.5s5.5 0.5 7 1.5"/>
      <ellipse cx="12" cy="12" rx="2" ry="1.5"/>
    </svg>
  ),
  Hand: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 11V5.5a1.5 1.5 0 013 0V11"/>
      <path d="M11 5.5V4a1.5 1.5 0 013 0v7"/>
      <path d="M14 5.5a1.5 1.5 0 013 0V12"/>
      <path d="M17 7a1.5 1.5 0 013 0v8c0 3-2 6-6 6h-2c-3 0-5-2-6-4l-2.5-5.5c-0.5-1.5 1-2.5 2-1.5L8 13"/>
    </svg>
  ),
  Spark: ({ size = 24, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>
    </svg>
  ),
  Arrow: ({ size = 16, stroke = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  ArrowDown: ({ size = 16, stroke = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6"/>
    </svg>
  ),
  Plus: ({ size = 16, stroke = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  WhatsApp: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.7-1-2.5-1.7-.6-.6-1.1-1.3-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.3.1-.6.2-.8.5-1 1-1.4 2.1-1.3 3.3.3 1.6 1 3 2.1 4.2 1.6 2 3.7 3.4 6 4.2.5.2 1.1.3 1.6.4.6.1 1.2.1 1.7 0 .8-.1 1.6-.7 2-1.4.3-.5.4-1.1.3-1.6 0-.1-.2-.2-.5-.3z"/>
      <path d="M20.5 3.5C16.4-.6 9.7-.6 5.6 3.5c-3.4 3.4-4 8.6-1.5 12.6L3 21l5.1-1.1c1.5.8 3.2 1.2 4.8 1.2 5.7 0 10.4-4.6 10.4-10.4 0-2.7-1-5.4-2.8-7.2zM13 19.4c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-2.4-3.9-1.2-9 2.7-11.4S18 3 20.4 6.9 21.6 16 17.7 18.4c-1.4.7-2.9 1.1-4.4 1z"/>
    </svg>
  ),
  Check: ({ size = 18, stroke = 1.8 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7"/>
    </svg>
  ),
  Calendar: ({ size = 18, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      <rect x="3.5" y="5" width="17" height="15" rx="2"/>
      <path d="M3.5 10h17M8 3v4M16 3v4"/>
    </svg>
  ),
  Map: ({ size = 18, stroke = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c3 0 6 2.5 6 6 0 4.5-6 12-6 12s-6-7.5-6-12c0-3.5 3-6 6-6z"/>
      <circle cx="12" cy="8" r="2"/>
    </svg>
  ),
};

// Abstract motif — looped thread (secure base metaphor)
export const ThreadMotif = ({ width = 320, height = 120, stroke = "currentColor" }) => (
  <svg viewBox="0 0 320 120" width={width} height={height} fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round">
    <path d="M10 60 C 60 10, 100 110, 160 60 S 260 10, 310 60" opacity="0.55"/>
    <path d="M10 60 C 60 30, 100 90, 160 60 S 260 30, 310 60" opacity="0.35"/>
    <path d="M10 60 C 60 50, 100 70, 160 60 S 260 50, 310 60" opacity="0.2"/>
    <circle cx="10" cy="60" r="2.5" fill={stroke} stroke="none"/>
    <circle cx="310" cy="60" r="2.5" fill={stroke} stroke="none"/>
  </svg>
);

// Abstract: concentric rings — "secure base"
export const RingsMotif = ({ size = 160, stroke = "currentColor" }) => (
  <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={stroke} strokeWidth="0.8">
    <circle cx="80" cy="80" r="78" opacity="0.18"/>
    <circle cx="80" cy="80" r="60" opacity="0.32"/>
    <circle cx="80" cy="80" r="42" opacity="0.5"/>
    <circle cx="80" cy="80" r="24" opacity="0.75"/>
    <circle cx="80" cy="80" r="6" fill={stroke} stroke="none"/>
  </svg>
);
