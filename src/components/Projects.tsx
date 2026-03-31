"use client";

import { useI18n } from "@/lib/i18n";

/* Mock UI previews for each project card */
function WebsiteMockup() {
  return (
    <div className="w-[85%] h-[85%] rounded-lg bg-zinc-900 border border-zinc-700/50 overflow-hidden shadow-lg">
      {/* Browser bar */}
      <div className="h-5 bg-zinc-800 flex items-center gap-1.5 px-2">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 h-2.5 rounded bg-zinc-700/50" />
      </div>
      {/* Page content */}
      <div className="p-3 space-y-2">
        <div className="flex gap-2">
          <div className="w-1/2 space-y-1.5">
            <div className="h-2 w-3/4 rounded bg-zinc-700" />
            <div className="h-1.5 w-full rounded bg-zinc-800" />
            <div className="h-1.5 w-5/6 rounded bg-zinc-800" />
            <div className="mt-2 h-4 w-16 rounded bg-blue-600/60" />
          </div>
          <div className="w-1/2 h-16 rounded bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-zinc-700/30" />
        </div>
        <div className="flex gap-1.5 pt-1">
          <div className="flex-1 h-10 rounded bg-zinc-800 border border-zinc-700/30 p-1.5">
            <div className="h-1.5 w-1/2 rounded bg-zinc-700 mb-1" />
            <div className="h-1 w-3/4 rounded bg-zinc-700/50" />
          </div>
          <div className="flex-1 h-10 rounded bg-zinc-800 border border-zinc-700/30 p-1.5">
            <div className="h-1.5 w-1/2 rounded bg-zinc-700 mb-1" />
            <div className="h-1 w-3/4 rounded bg-zinc-700/50" />
          </div>
          <div className="flex-1 h-10 rounded bg-zinc-800 border border-zinc-700/30 p-1.5">
            <div className="h-1.5 w-1/2 rounded bg-zinc-700 mb-1" />
            <div className="h-1 w-3/4 rounded bg-zinc-700/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="w-[85%] h-[85%] rounded-lg bg-zinc-900 border border-zinc-700/50 overflow-hidden shadow-lg">
      {/* Top bar */}
      <div className="h-5 bg-zinc-800 flex items-center gap-1.5 px-2">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
      </div>
      <div className="flex h-[calc(100%-20px)]">
        {/* Sidebar */}
        <div className="w-8 bg-zinc-800/50 border-r border-zinc-700/30 p-1.5 space-y-1.5">
          <div className="w-full h-3 rounded bg-emerald-500/30" />
          <div className="w-full h-2 rounded bg-zinc-700/50" />
          <div className="w-full h-2 rounded bg-zinc-700/50" />
          <div className="w-full h-2 rounded bg-zinc-700/50" />
        </div>
        {/* Main */}
        <div className="flex-1 p-2 space-y-1.5">
          {/* Stats row */}
          <div className="flex gap-1">
            <div className="flex-1 h-6 rounded bg-zinc-800 border border-zinc-700/30 flex items-center justify-center">
              <span className="text-[6px] text-emerald-400/70 font-bold">+24%</span>
            </div>
            <div className="flex-1 h-6 rounded bg-zinc-800 border border-zinc-700/30 flex items-center justify-center">
              <span className="text-[6px] text-blue-400/70 font-bold">1,280</span>
            </div>
            <div className="flex-1 h-6 rounded bg-zinc-800 border border-zinc-700/30 flex items-center justify-center">
              <span className="text-[6px] text-purple-400/70 font-bold">98.5%</span>
            </div>
          </div>
          {/* Chart area */}
          <div className="h-16 rounded bg-zinc-800 border border-zinc-700/30 p-1.5 flex items-end gap-0.5">
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "40%" }} />
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "65%" }} />
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "45%" }} />
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "80%" }} />
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "55%" }} />
            <div className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: "90%" }} />
            <div className="flex-1 bg-emerald-500/40 rounded-t" style={{ height: "70%" }} />
            <div className="flex-1 bg-emerald-500/40 rounded-t" style={{ height: "95%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="w-[85%] h-[85%] rounded-lg bg-zinc-900 border border-zinc-700/50 overflow-hidden shadow-lg">
      {/* Top bar */}
      <div className="h-5 bg-zinc-800 flex items-center gap-1.5 px-2">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
      </div>
      {/* Terminal-like content */}
      <div className="p-2.5 space-y-1.5 font-mono">
        <div className="flex items-center gap-1">
          <span className="text-[7px] text-orange-400/80">$</span>
          <div className="h-1.5 w-20 rounded bg-zinc-700" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] text-green-400/70">✓</span>
          <div className="h-1.5 w-24 rounded bg-zinc-800" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] text-green-400/70">✓</span>
          <div className="h-1.5 w-16 rounded bg-zinc-800" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] text-green-400/70">✓</span>
          <div className="h-1.5 w-28 rounded bg-zinc-800" />
        </div>
        {/* Progress bar */}
        <div className="mt-1 h-2 rounded bg-zinc-800 overflow-hidden">
          <div className="h-full w-4/5 rounded bg-gradient-to-r from-orange-500/50 to-red-500/50" />
        </div>
        <div className="flex justify-between">
          <span className="text-[6px] text-zinc-500">Processing...</span>
          <span className="text-[6px] text-orange-400/70">80%</span>
        </div>
        {/* Table mockup */}
        <div className="mt-1 space-y-0.5">
          <div className="flex gap-1">
            <div className="flex-1 h-2 rounded bg-zinc-700/50" />
            <div className="flex-1 h-2 rounded bg-zinc-700/50" />
            <div className="flex-1 h-2 rounded bg-zinc-700/50" />
          </div>
          <div className="flex gap-1">
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
          </div>
          <div className="flex gap-1">
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
            <div className="flex-1 h-2 rounded bg-zinc-800/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups = [WebsiteMockup, DashboardMockup, AutomationMockup];

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
          {t.projects.items.map((project, i) => {
            const Mockup = mockups[i];
            return (
              <div
                key={i}
                className="group rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${projectColors[i]} flex items-center justify-center`}
                >
                  <Mockup />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
