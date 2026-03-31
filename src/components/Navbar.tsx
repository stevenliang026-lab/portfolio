"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white">
          {"<SL />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            className="text-sm px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLocale}
            className="text-sm px-3 py-1 rounded-full border border-zinc-700 text-zinc-400"
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-zinc-400"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
