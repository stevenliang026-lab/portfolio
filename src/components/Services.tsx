"use client";

import { useI18n } from "@/lib/i18n";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  ),
  mobile: (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  zap: (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  brain: (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.2 6H8.2C6.3 13.7 5 11.5 5 9a7 7 0 017-7zM9 22h6M10 18v4M14 18v4" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{icons[item.icon]}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
