"use client";

import { useI18n } from "@/lib/i18n";

const projectColors = [
  "from-blue-600/20 to-purple-600/20",
  "from-emerald-600/20 to-teal-600/20",
  "from-orange-600/20 to-red-600/20",
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">{t.projects.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${projectColors[i]} flex items-center justify-center`}
              >
                <div className="w-3/4 h-3/4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-zinc-600"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 3v18" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
