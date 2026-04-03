"use client";

import { useState, useEffect, useRef, useCallback, createContext, useContext, ReactNode } from "react";

/* ═══════════════════════════════════════════════
   i18n
   ═══════════════════════════════════════════════ */
type Locale = "zh" | "en";
const T = {
  zh: {
    nav: { work: "作品", services: "服务", about: "关于", contact: "联系" },
    hero: {
      role: "全栈开发者",
      based: "远程 / 中国",
      intro: "我为企业和团队构建高质量的数字产品。从交互式网站到数据工具，从管理后台到AI应用——不只是写代码，而是解决真正的问题。",
      available: "可接新项目",
      cta: "查看作品集",
    },
    section: { work: "精选作品", services: "服务范围", about: "关于", contact: "联系" },
    projects: [
      {
        title: "TechWave",
        category: "企业官网",
        desc: "为AI科技公司设计的交互式落地页。滚动动画、定价切换、FAQ手风琴、表单验证、评价轮播——不是静态模板，而是完整的产品级页面。",
        features: ["滚动触发动画", "月/年定价切换", "FAQ 手风琴", "实时表单验证", "自动轮播"],
        url: "https://techwave-pi.vercel.app",
        github: "https://github.com/stevenliang026-lab/techwave",
        stack: "Next.js / Tailwind / TypeScript",
      },
      {
        title: "InsightBoard",
        category: "数据面板",
        desc: "五个页面的管理后台——概览、分析、订单、客户、设置。所有数据由算法生成并联动计算，支持时间范围筛选、列排序、搜索、分页。",
        features: ["5 页面联动", "时间范围筛选", "表头排序", "搜索 + 分页", "订单详情面板"],
        url: "https://dashboard-sand-pi-34.vercel.app",
        github: "https://github.com/stevenliang026-lab/dashboard",
        stack: "React / Recharts / TypeScript",
      },
      {
        title: "DataForge",
        category: "开发工具",
        desc: "支持 JSON、CSV、TSV、YAML、XML 五种格式互相转换。拖拽上传文件、自动识别格式、语法高亮、行号显示、数据表格预览。",
        features: ["5 种格式互转", "拖拽上传", "格式自动检测", "语法高亮", "键盘快捷键"],
        url: "https://dataforge-silk.vercel.app",
        github: "https://github.com/stevenliang026-lab/dataforge",
        stack: "TypeScript / Next.js",
      },
      {
        title: "ClientFlow",
        category: "全栈 SaaS",
        desc: "完整的项目管理应用——用户认证、CRUD 操作、数据库建模、行级安全策略。支持项目和任务管理、仪表盘统计、个人设置，含 Demo 一键体验。",
        features: ["用户认证", "项目 CRUD", "任务管理", "RLS 权限", "Demo 模式"],
        url: "https://clientflow-delta.vercel.app",
        github: "https://github.com/stevenliang026-lab/clientflow",
        stack: "Next.js / Supabase / TypeScript",
      },
    ],
    viewLive: "查看线上版本",
    viewSource: "源代码",
    services: {
      items: [
        { title: "网站开发", desc: "响应式企业官网、SaaS 落地页、电商站点。使用 Next.js + Tailwind，性能与 SEO 兼顾。" },
        { title: "数据可视化", desc: "管理后台、报表系统、数据面板。交互式图表、实时筛选、多维分析，让数据讲故事。" },
        { title: "自动化工具", desc: "数据转换、工作流自动化、API 对接。减少重复劳动，用工具代替人力。" },
        { title: "AI 应用", desc: "基于大语言模型的智能应用——聊天助手、内容生成器、数据分析工具。" },
      ],
    },
    about: {
      bio: "我是 Steven Liang，全栈开发者。我相信好的技术应该是隐形的——用户只看到流畅的体验，而非底层的复杂。",
      bio2: "我的工作方式很简单：理解你的需求，设计最优方案，快速交付可用的产品。没有多余的会议，没有模糊的承诺。",
      stats: [
        { value: "50+", label: "完成项目" },
        { value: "30+", label: "合作客户" },
        { value: "3+", label: "年经验" },
      ],
    },
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "MongoDB"],
    contact: {
      heading: "有项目想聊聊？",
      desc: "告诉我你的需求，24 小时内回复。",
      name: "姓名",
      email: "邮箱",
      message: "项目描述（至少 10 个字符）",
      send: "发送",
      sending: "发送中...",
      sent: "已发送",
      sentDesc: "感谢联系，我会尽快回复。",
      reset: "再发一条",
      err: { name: "请输入姓名", email: "请输入有效邮箱", msg: "请至少输入 10 个字符" },
    },
    footer: { rights: "All rights reserved." },
  },
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    hero: {
      role: "Full-Stack Developer",
      based: "Remote / China",
      intro: "I build high-quality digital products for businesses and teams. From interactive websites to data tools, admin panels to AI apps — not just code, but solutions to real problems.",
      available: "Available for projects",
      cta: "See my work",
    },
    section: { work: "Selected Work", services: "Services", about: "About", contact: "Contact" },
    projects: [
      {
        title: "TechWave",
        category: "Corporate Site",
        desc: "Interactive landing page for an AI company. Scroll animations, pricing toggle, FAQ accordion, form validation, testimonial carousel — a production-grade page, not a static template.",
        features: ["Scroll animations", "Monthly/annual toggle", "FAQ accordion", "Live form validation", "Auto-carousel"],
        url: "https://techwave-pi.vercel.app",
        github: "https://github.com/stevenliang026-lab/techwave",
        stack: "Next.js / Tailwind / TypeScript",
      },
      {
        title: "InsightBoard",
        category: "Dashboard",
        desc: "Five-page admin panel — Overview, Analytics, Orders, Customers, Settings. All data algorithmically generated and dynamically linked. Time range filtering, column sorting, search, pagination.",
        features: ["5 linked pages", "Time range filter", "Column sorting", "Search + pagination", "Order detail panel"],
        url: "https://dashboard-sand-pi-34.vercel.app",
        github: "https://github.com/stevenliang026-lab/dashboard",
        stack: "React / Recharts / TypeScript",
      },
      {
        title: "DataForge",
        category: "Dev Tool",
        desc: "Universal converter for JSON, CSV, TSV, YAML, XML. Drag-drop file upload, auto-detect format, syntax highlighting, line numbers, and table preview.",
        features: ["5-format conversion", "Drag & drop", "Auto-detection", "Syntax highlighting", "Keyboard shortcuts"],
        url: "https://dataforge-silk.vercel.app",
        github: "https://github.com/stevenliang026-lab/dataforge",
        stack: "TypeScript / Next.js",
      },
      {
        title: "ClientFlow",
        category: "Full-Stack SaaS",
        desc: "Complete project management app — user auth, CRUD operations, database modeling, row-level security. Manage projects and tasks, dashboard stats, profile settings, with one-click demo.",
        features: ["Authentication", "Projects CRUD", "Task management", "RLS policies", "Demo mode"],
        url: "https://clientflow-delta.vercel.app",
        github: "https://github.com/stevenliang026-lab/clientflow",
        stack: "Next.js / Supabase / TypeScript",
      },
    ],
    viewLive: "View live",
    viewSource: "Source",
    services: {
      items: [
        { title: "Web Development", desc: "Responsive corporate sites, SaaS landing pages, e-commerce. Next.js + Tailwind for performance and SEO." },
        { title: "Data Visualization", desc: "Admin dashboards, reporting, analytics panels. Interactive charts, real-time filtering, multi-dimensional analysis." },
        { title: "Automation Tools", desc: "Data conversion, workflow automation, API integration. Replace manual work with smart tooling." },
        { title: "AI Applications", desc: "LLM-powered apps — chat assistants, content generators, data analysis tools." },
      ],
    },
    about: {
      bio: "I'm Steven Liang, a full-stack developer. I believe good technology should be invisible — users see a smooth experience, not underlying complexity.",
      bio2: "My process is simple: understand your needs, design the best approach, deliver a working product fast. No unnecessary meetings, no vague promises.",
      stats: [
        { value: "50+", label: "Projects" },
        { value: "30+", label: "Clients" },
        { value: "3+", label: "Years" },
      ],
    },
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "MongoDB"],
    contact: {
      heading: "Have a project in mind?",
      desc: "Tell me what you need. I'll respond within 24 hours.",
      name: "Name",
      email: "Email",
      message: "Project description (min 10 chars)",
      send: "Send",
      sending: "Sending...",
      sent: "Sent",
      sentDesc: "Thanks for reaching out. I'll get back to you soon.",
      reset: "Send another",
      err: { name: "Name required", email: "Valid email required", msg: "At least 10 characters" },
    },
    footer: { rights: "All rights reserved." },
  },
};

type Tx = typeof T.zh;
interface I18nCtx { locale: Locale; t: Tx; toggle: () => void }
const Ctx = createContext<I18nCtx | null>(null);
function useI18n() { const c = useContext(Ctx); if (!c) throw new Error("wrap"); return c; }
function I18n({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  return <Ctx.Provider value={{ locale, t: T[locale], toggle: () => setLocale(p => p === "zh" ? "en" : "zh") }}>{children}</Ctx.Provider>;
}

/* ═══════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    o.observe(el); return () => o.disconnect();
  }, [threshold]);
  return { ref, v };
}

/* Section number label */
function SectionNum({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-amber-500 tracking-wider">{n}</span>
      <div className="rule flex-1" />
      <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Navbar — minimal, sharp
   ═══════════════════════════════════════════════ */
function Navbar() {
  const { t, locale, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#08080a]/90 backdrop-blur-lg" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14 border-b border-zinc-800/60">
          <a href="#" className="font-mono text-sm text-stone-100 hover:text-amber-500 transition-colors tracking-tight">
            steven.liang
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline px-3 py-1.5 text-[13px] text-zinc-400 hover:text-stone-100 transition-colors">
                {l.label}
              </a>
            ))}
            <button onClick={toggle} className="ml-3 px-2.5 py-1 text-[13px] text-zinc-500 border border-zinc-800 hover:border-zinc-600 hover:text-stone-100 transition-all">
              {locale === "zh" ? "EN" : "中"}
            </button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={toggle} className="px-2 py-1 text-[13px] text-zinc-500 border border-zinc-800">
              {locale === "zh" ? "EN" : "中"}
            </button>
            <button onClick={() => setOpen(!open)} className="text-zinc-400 p-1" aria-label="Menu">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? <path d="M4 4l14 14M4 18L18 4" /> : <path d="M2 5h18M2 11h18M2 17h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-48" : "max-h-0"}`}>
        <div className="px-6 py-3 bg-[#08080a]/95 backdrop-blur border-b border-zinc-800/60 space-y-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-zinc-400 hover:text-stone-100">{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   Hero — editorial, left-aligned, no gradients
   ═══════════════════════════════════════════════ */
function Hero() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="min-h-[92vh] flex items-end pb-20 pt-20 px-6 sm:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Status line */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">{t.hero.available}</span>
            <span className="text-zinc-700 mx-1">/</span>
            <span className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider">{t.hero.based}</span>
          </div>

          {/* Name — big serif */}
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-6">
            <span className="text-stone-100">Steven</span>
            <br />
            <span className="text-amber-500">Liang</span>
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-zinc-500 uppercase tracking-[0.15em] mb-8">
            {t.hero.role}
          </p>

          {/* Intro — constrained width */}
          <p className="text-[17px] text-zinc-400 leading-relaxed max-w-xl mb-12">
            {t.hero.intro}
          </p>

          {/* Quick access — direct links to live projects */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            {[
              { name: "TechWave", label: t.hero.role === "全栈开发者" ? "企业官网" : "Corporate Site", url: "https://techwave-pi.vercel.app" },
              { name: "InsightBoard", label: t.hero.role === "全栈开发者" ? "数据面板" : "Dashboard", url: "https://dashboard-sand-pi-34.vercel.app" },
              { name: "DataForge", label: t.hero.role === "全栈开发者" ? "开发工具" : "Dev Tool", url: "https://dataforge-silk.vercel.app" },
              { name: "ClientFlow", label: t.hero.role === "全栈开发者" ? "全栈 SaaS" : "Full-Stack SaaS", url: "https://clientflow-delta.vercel.app" },
            ].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 border border-zinc-800/60 hover:border-amber-500/40 hover:bg-zinc-900/30 transition-all">
                <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-stone-100 group-hover:text-amber-500 transition-colors">{p.name}</div>
                  <div className="font-mono text-[10px] text-zinc-600">{p.label}</div>
                </div>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-zinc-700 group-hover:text-amber-500 transition-colors shrink-0">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#work" className="group inline-flex items-center gap-3 text-sm text-stone-100 border-b border-zinc-700 pb-1 hover:border-amber-500 transition-colors">
            {t.hero.cta}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="transition-transform group-hover:translate-y-0.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Work — editorial project entries
   ═══════════════════════════════════════════════ */
function Work() {
  const { t } = useI18n();
  const { ref, v } = useInView();

  return (
    <section id="work" className="py-24 px-6 sm:px-8" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionNum n="01" label={t.section.work} />

        <div className="space-y-0">
          {t.projects.map((p, i) => (
            <div key={i} className="group border-b border-zinc-800/60 py-10 first:pt-0 last:border-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left — number + meta */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                </div>

                {/* Center — title + desc */}
                <div className="lg:col-span-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-3xl sm:text-4xl text-stone-100 group-hover:text-amber-500 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider hidden sm:inline">{p.category}</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mt-3 max-w-lg">
                    {p.desc}
                  </p>
                  {/* Links */}
                  <div className="flex items-center gap-4 mt-5">
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] text-amber-500 hover:text-amber-400 transition-colors">
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                      {t.viewLive}
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-stone-100 transition-colors">
                      <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      {t.viewSource}
                    </a>
                  </div>
                </div>

                {/* Right — features + stack */}
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.features.map((f) => (
                      <span key={f} className="text-[11px] px-2.5 py-1 border border-zinc-800 text-zinc-500 font-mono">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-[11px] text-zinc-600 mt-3">{p.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Services — horizontal, numbered
   ═══════════════════════════════════════════════ */
function Services() {
  const { t } = useI18n();
  const { ref, v } = useInView();

  return (
    <section id="services" className="py-24 px-6 sm:px-8 border-t border-zinc-800/40" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionNum n="02" label={t.section.services} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
          {t.services.items.map((item, i) => (
            <div key={i} className="bg-[#08080a] p-6 sm:p-8 group hover:bg-zinc-900/50 transition-colors duration-300">
              <span className="font-mono text-[11px] text-amber-500/60 mb-4 block">0{i + 1}</span>
              <h3 className="text-base font-medium text-stone-100 mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   About
   ═══════════════════════════════════════════════ */
function About() {
  const { t } = useI18n();
  const { ref, v } = useInView();

  return (
    <section id="about" className="py-24 px-6 sm:px-8 border-t border-zinc-800/40" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionNum n="03" label={t.section.about} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Bio */}
          <div className="lg:col-span-7">
            <p className="text-[17px] text-zinc-300 leading-relaxed mb-5">
              {t.about.bio}
            </p>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-10">
              {t.about.bio2}
            </p>

            {/* Stats — inline, not cards */}
            <div className="flex gap-10 sm:gap-16">
              {t.about.stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl text-stone-100">{s.value}</div>
                  <div className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="lg:col-span-5">
            <h3 className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-5">Stack</h3>
            <div className="space-y-0 border-t border-zinc-800/60">
              {t.tech.map((tech) => (
                <div key={tech} className="flex items-center justify-between py-3 border-b border-zinc-800/40 group hover:pl-2 transition-all duration-200">
                  <span className="text-sm text-zinc-400 group-hover:text-stone-100 transition-colors">{tech}</span>
                  <span className="w-1 h-1 bg-zinc-700 group-hover:bg-amber-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Contact — clean, functional
   ═══════════════════════════════════════════════ */
function Contact() {
  const { t, locale } = useI18n();
  const { ref, v } = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<"idle" | "sending" | "sent">("idle");

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = t.contact.err.name;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t.contact.err.email;
    if (msg.trim().length < 10) e.msg = t.contact.err.msg;
    return e;
  }, [name, email, msg, t]);

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setPhase("sending");
    try {
      const res = await fetch("https://bkuftdpykibmkvezgzjh.supabase.co/rest/v1/contact_messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdWZ0ZHB5a2libWt2ZXpnempoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNzIxNzMsImV4cCI6MjA5MDY0ODE3M30.uuSXIpsWYbTzJPdzarirq0_PBKedcZaxz6a_87ntE-A",
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: msg.trim() }),
      });
      if (res.ok) setPhase("sent");
      else throw new Error();
    } catch {
      setPhase("idle");
      setErrors({ msg: locale === "zh" ? "发送失败，请稍后重试" : "Failed to send, please try again" });
    }
  };

  if (phase === "sent") {
    return (
      <section id="contact" className="py-24 px-6 sm:px-8 border-t border-zinc-800/40">
        <div className="max-w-[1200px] mx-auto">
          <SectionNum n="04" label={t.section.contact} />
          <div className="max-w-md">
            <span className="font-mono text-sm text-amber-500">{t.contact.sent}</span>
            <p className="text-zinc-500 text-sm mt-2 mb-6">{t.contact.sentDesc}</p>
            <button onClick={() => { setPhase("idle"); setName(""); setEmail(""); setMsg(""); }}
              className="text-[13px] text-zinc-500 border-b border-zinc-700 pb-0.5 hover:text-stone-100 hover:border-zinc-500 transition-colors">
              {t.contact.reset}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 border-t border-zinc-800/40" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionNum n="04" label={t.section.contact} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl text-stone-100 mb-4">{t.contact.heading}</h2>
            <p className="text-sm text-zinc-500 mb-8">{t.contact.desc}</p>
            <div className="space-y-3">
              <a href="mailto:stevenliang026@gmail.com" className="flex items-center gap-3 text-[13px] text-zinc-400 hover:text-amber-500 transition-colors group">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-zinc-600 group-hover:text-amber-500 transition-colors"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
                stevenliang026@gmail.com
              </a>
              <a href="https://github.com/stevenliang026-lab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] text-zinc-400 hover:text-amber-500 transition-colors group">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-zinc-600 group-hover:text-amber-500 transition-colors"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                github.com/stevenliang026-lab
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(p => { const n = { ...p }; delete n.name; return n; }); }}
                    placeholder={t.contact.name}
                    className={`w-full px-0 py-3 bg-transparent border-b text-sm text-stone-100 placeholder-zinc-600 focus:outline-none transition-colors ${errors.name ? "border-red-500/60" : "border-zinc-800 focus:border-amber-500/60"}`} />
                  {errors.name && <p className="text-[11px] text-red-400/80 mt-1.5 font-mono">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(p => { const n = { ...p }; delete n.email; return n; }); }}
                    placeholder={t.contact.email}
                    className={`w-full px-0 py-3 bg-transparent border-b text-sm text-stone-100 placeholder-zinc-600 focus:outline-none transition-colors ${errors.email ? "border-red-500/60" : "border-zinc-800 focus:border-amber-500/60"}`} />
                  {errors.email && <p className="text-[11px] text-red-400/80 mt-1.5 font-mono">{errors.email}</p>}
                </div>
              </div>
              <div>
                <textarea value={msg} onChange={(e) => { setMsg(e.target.value); setErrors(p => { const n = { ...p }; delete n.msg; return n; }); }}
                  placeholder={t.contact.message} rows={4}
                  className={`w-full px-0 py-3 bg-transparent border-b text-sm text-stone-100 placeholder-zinc-600 focus:outline-none transition-colors resize-none ${errors.msg ? "border-red-500/60" : "border-zinc-800 focus:border-amber-500/60"}`} />
                {errors.msg && <p className="text-[11px] text-red-400/80 mt-1.5 font-mono">{errors.msg}</p>}
              </div>
              <button type="submit" disabled={phase === "sending"}
                className="text-[13px] px-6 py-2.5 bg-amber-500 text-[#08080a] font-medium hover:bg-amber-400 transition-colors disabled:opacity-60">
                {phase === "sending" ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Footer — one line
   ═══════════════════════════════════════════════ */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-6 sm:px-8 py-8 border-t border-zinc-800/40">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-zinc-600">
          &copy; {new Date().getFullYear()} Steven Liang
        </span>
        <span className="text-[11px] text-zinc-700">{t.footer.rights}</span>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   Chat Widget
   ═══════════════════════════════════════════════ */
interface Msg { role: "user" | "bot"; text: string }

const CHAT_RESPONSES: Record<string, { zh: string; en: string }> = {
  "price|pricing|价格|报价|收费|多少钱|cost|rate|budget": {
    zh: "项目报价取决于复杂度和周期。一般来说：\n• 落地页/官网：¥3,000–8,000\n• 管理后台/Dashboard：¥8,000–20,000\n• 全栈应用：¥15,000+\n可以先聊聊需求，我给你一个准确的报价。",
    en: "Pricing depends on scope and timeline:\n• Landing pages: $500–1,200\n• Dashboards: $1,200–3,000\n• Full-stack apps: $2,500+\nLet's discuss your needs for an accurate quote.",
  },
  "tech|stack|技术|技术栈|framework|react|next|what do you use": {
    zh: "主要技术栈：React / Next.js / TypeScript / Tailwind CSS / Node.js / PostgreSQL。也有 Python、Swift 和云服务（Vercel、Supabase、AWS）的经验。根据项目需求选择最合适的方案。",
    en: "Primary stack: React / Next.js / TypeScript / Tailwind CSS / Node.js / PostgreSQL. Also experienced with Python, Swift, and cloud services (Vercel, Supabase, AWS). I pick the best tool for each project.",
  },
  "project|案例|作品|portfolio|work|example|看看|展示": {
    zh: "你可以在上方「精选作品」看到三个代表项目：\n• TechWave — 交互式企业官网\n• InsightBoard — 数据分析面板\n• DataForge — 数据格式转换工具\n每个都是可在线体验的完整项目，不是静态模板。",
    en: "Check out the Featured Works section above:\n• TechWave — Interactive corporate site\n• InsightBoard — Analytics dashboard\n• DataForge — Data format converter\nAll fully interactive, not static mockups.",
  },
  "time|timeline|周期|多久|工期|how long|when|deadline|deliver": {
    zh: "一般时间线：\n• 简单落地页：3–5 天\n• 中等复杂项目：1–2 周\n• 全栈应用：2–4 周\n我习惯每天同步进度，你随时可以看到最新状态。",
    en: "Typical timelines:\n• Simple landing page: 3–5 days\n• Medium project: 1–2 weeks\n• Full-stack app: 2–4 weeks\nI share daily progress updates so you always know the status.",
  },
  "contact|联系|hire|雇|合作|email|邮箱|怎么找你|reach": {
    zh: "可以直接发邮件到 stevenliang026@gmail.com，或者在下方联系表单留言。我通常 24 小时内回复。",
    en: "Email me at stevenliang026@gmail.com or use the contact form below. I typically reply within 24 hours.",
  },
  "available|接单|有空|能接|是否可以|free|busy": {
    zh: "目前可以接新项目！如果你有想法，可以先简单聊聊需求和预算，我来评估可行性。",
    en: "Currently available for new projects! Share your idea and budget, and I'll assess feasibility.",
  },
  "hello|你好|hi|hey|嗨|哈喽|greet": {
    zh: "你好！👋 我是 Steven 的智能助手。你可以问我关于项目报价、技术栈、合作方式等问题。有什么想了解的？",
    en: "Hello! 👋 I'm Steven's assistant. Ask me about pricing, tech stack, availability, or past projects. How can I help?",
  },
};

const FALLBACK = {
  zh: "这个问题我暂时无法回答。你可以问我关于：报价、技术栈、项目案例、工期、联系方式等。或者直接发邮件 stevenliang026@gmail.com 聊聊你的需求。",
  en: "I'm not sure about that. You can ask about: pricing, tech stack, projects, timelines, or contact info. Or email stevenliang026@gmail.com directly.",
};

function matchResponse(input: string, locale: Locale): string {
  const lower = input.toLowerCase();
  for (const [pattern, resp] of Object.entries(CHAT_RESPONSES)) {
    const keywords = pattern.split("|");
    if (keywords.some((k) => lower.includes(k))) return resp[locale];
  }
  return FALLBACK[locale];
}

function ChatWidget() {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "bot", text: locale === "zh"
        ? "你好！我是 Steven 的 AI 助手。问我任何关于项目合作的问题吧 😊"
        : "Hi! I'm Steven's AI assistant. Ask me anything about working together 😊" }]);
    }
  }, [open, locale, msgs.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = useCallback(() => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMsgs((p) => [...p, { role: "user", text: q }]);
    setTyping(true);
    const delay = 400 + Math.random() * 800;
    setTimeout(() => {
      setMsgs((p) => [...p, { role: "bot", text: matchResponse(q, locale) }]);
      setTyping(false);
    }, delay);
  }, [input, locale]);

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all shadow-lg shadow-amber-500/20"
        aria-label="Chat"
      >
        {open ? (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>

      {/* Panel */}
      <div className={`fixed bottom-20 right-6 z-50 w-80 sm:w-96 transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="border border-zinc-800 bg-[#0c0c0e] shadow-2xl flex flex-col" style={{ height: 440 }}>
          {/* Header */}
          <div className="px-4 py-3 border-b border-zinc-800 flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <div>
              <div className="text-sm font-medium text-stone-100">Steven&apos;s AI Assistant</div>
              <div className="text-[10px] text-zinc-600 font-mono">online &middot; avg. reply &lt; 1s</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 text-[13px] leading-relaxed whitespace-pre-line ${
                  m.role === "user"
                    ? "bg-amber-500/15 text-amber-200 border border-amber-500/20"
                    : "bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/60 border border-zinc-700/40 px-3 py-2 text-[13px] text-zinc-500">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>&bull;</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>&bull;</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>&bull;</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick prompts */}
          {msgs.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {(locale === "zh"
                ? ["报价多少？", "技术栈？", "能看案例吗？", "多久交付？"]
                : ["Pricing?", "Tech stack?", "See projects?", "Timeline?"]
              ).map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(() => { setInput(""); setMsgs((p) => [...p, { role: "user", text: q }]); setTyping(true); setTimeout(() => { setMsgs((p) => [...p, { role: "bot", text: matchResponse(q, locale) }]); setTyping(false); }, 600); }, 50); }}
                  className="px-2.5 py-1 text-[11px] border border-zinc-700/50 text-zinc-500 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-2 border-t border-zinc-800 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(); }}
              placeholder={locale === "zh" ? "输入你的问题..." : "Ask a question..."}
              className="flex-1 bg-transparent text-sm text-stone-100 placeholder-zinc-600 focus:outline-none"
            />
            <button onClick={send} disabled={!input.trim()} className="text-amber-500 disabled:text-zinc-700 transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <I18n>
      <div className="noise">
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </I18n>
  );
}
