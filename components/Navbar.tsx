"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/galerie", label: "Galerie" },
  { href: "/services", label: "Services" },
  { href: "/produits", label: "Produits" },
  { href: "/rejoins", label: "Rejoins l'équipe" },
  { href: "/contact", label: "Contact" },
];

/* Scroll-reveal observer — runs once on mount */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const floatHiddenRef = useRef(false);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      // Show floating button after 400px, hide near footer
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        floatHiddenRef.current = footerTop < 120;
      }
      setShowFloat(y > 400 && !floatHiddenRef.current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,45,28,0.1)] border-b border-[#002d1c]/5"
            : "bg-white/80 backdrop-blur-xl border-b border-[#002d1c]/5"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-[#002d1c] hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            DM Cut
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-tight transition-colors relative py-1 ${
                  pathname === link.href
                    ? "text-[#002d1c]"
                    : "text-[#002d1c]/50 hover:text-[#002d1c]"
                }`}
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#002d1c] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://www.dmcut.ca/prendre-rendez-vous"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#002d1c] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-80 transition-all duration-300 active:scale-95"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Prendre Rendez-vous
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#002d1c] rounded-lg hover:bg-[#002d1c]/5 transition-colors"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mobile-menu bg-white border-t border-[#002d1c]/5 px-6 py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                  pathname === link.href
                    ? "bg-[#002d1c] text-white"
                    : "text-[#002d1c]/70 hover:bg-[#002d1c]/5 hover:text-[#002d1c]"
                }`}
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#002d1c]/5">
              <a
                href="https://www.dmcut.ca/prendre-rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#002d1c] text-white py-3.5 rounded-xl text-sm font-black hover:opacity-80 transition-opacity"
              >
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Floating CTA (mobile + desktop) ────────────────── */}
      <a
        href="https://www.dmcut.ca/prendre-rendez-vous"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#002d1c] text-white px-5 py-3.5 rounded-full font-black text-sm shadow-2xl shadow-[#002d1c]/40 hover:scale-105 active:scale-95 transition-all duration-300 ${
          showFloat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Prendre rendez-vous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        <span>Réserver</span>
      </a>
    </>
  );
}
