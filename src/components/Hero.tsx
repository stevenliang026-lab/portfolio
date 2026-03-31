"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 bg-zinc-950">
      <div className="max-w-3xl text-center">
        <p className="text-blue-400 text-lg mb-4 animate-fade-in">{t.hero.greeting}</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-2 animate-fade-in-up">
          {t.hero.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-400 mb-8 animate-fade-in-up delay-100">
          {t.hero.title}
        </h2>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-zinc-700 text-zinc-300 rounded-full font-medium hover:border-zinc-500 hover:text-white transition-colors"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
