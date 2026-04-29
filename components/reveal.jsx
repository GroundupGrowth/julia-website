"use client";

import { useEffect, useState } from "react";

// Lightweight replacement for the prototype IntersectionObserver: just adds
// the .in class shortly after mount so the fade-in transition runs once.
export default function Reveal({ as: Tag = "div", className = "", style, children, delay = 0, ...rest }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const cls = ["reveal", shown ? "in" : "", className].filter(Boolean).join(" ");
  const merged = { transitionDelay: delay ? `${delay}s` : undefined, ...style };

  return (
    <Tag className={cls} style={merged} {...rest}>
      {children}
    </Tag>
  );
}
