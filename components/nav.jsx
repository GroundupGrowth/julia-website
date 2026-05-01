"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ico } from "@/components/icons";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/data";

function Logo({ small = false }) {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={small ? 26 : 32} height={small ? 26 : 32} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <circle cx="16" cy="16" r="4" fill="currentColor"/>
      </svg>
      <span className="serif" style={{ fontSize: small ? 18 : 22, letterSpacing: "-0.01em", fontWeight: 500 }}>
        BasePsych
      </span>
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on every route change.
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "") + (menuOpen ? " menu-open" : "")}>
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn btn-ghost btn-sm nav-cta-desktop" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Ico.WhatsApp size={14}/> WhatsApp
          </a>
          <Link className="btn btn-primary btn-sm nav-cta-desktop" href="/contact">
            Book now <Ico.Arrow size={13}/>
          </Link>
          <button
            className="nav-mobile-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile-panel" role="dialog" aria-label="Site menu">
          <ul className="nav-mobile-list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-mobile-actions">
            <Link className="btn btn-primary" href="/contact">
              Book a session <Ico.Arrow size={13}/>
            </Link>
            <a className="btn btn-clay" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Ico.WhatsApp size={14}/> WhatsApp us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
