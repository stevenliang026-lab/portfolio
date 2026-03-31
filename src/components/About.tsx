"use client";

import { useI18n } from "@/lib/i18n";

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Python", "PostgreSQL", "MongoDB",
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-zinc-400 leading-relaxed mb-4">{t.about.desc}</p>
            <p className="text-zinc-400 leading-relaxed mb-8">{t.about.desc2}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-zinc-800/50 border border-zinc-800">
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.about.techTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700 text-sm hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
