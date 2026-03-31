"use client";

import { useState, useEffect, useRef, useCallback, createContext, useContext, ReactNode } from "react";

/* ═══════════════════════════════════════════════
   i18n System
   ═══════════════════════════════════════════════ */
type Locale = "zh" | "en";
const T = {
  zh: {
    nav: { services: "服务", projects: "作品", about: "关于", contact: "联系", resume: "简历" },
    hero: { greeting: "你好，我是", name: "Steven Liang", roles: ["全栈开发者", "UI/UX 设计师", "AI 应用专家", "自动化工程师"], subtitle: "我帮助企业和个人将想法变成高质量的数字产品。专注于网站开发、数据可视化、自动化解决方案。", cta: "查看作品", contact: "联系我" },
    services: { title: "我的服务", subtitle: "提供全方位的技术解决方案，助力您的业务增长", items: [
      { title: "网站开发", desc: "响应式企业官网、SaaS落地页、电商网站。使用Next.js + Tailwind CSS，确保高性能和优秀的SEO。", icon: "globe" },
      { title: "数据可视化", desc: "管理后台、数据面板、报表系统。交互式图表、实时数据筛选、多维度分析展示。", icon: "chart" },
      { title: "自动化工具", desc: "数据格式转换、工作流自动化、API对接。帮您节省时间，大幅提升团队效率。", icon: "zap" },
      { title: "AI应用开发", desc: "基于大语言模型的智能应用。聊天机器人、内容生成、数据分析助手、智能推荐。", icon: "brain" },
    ]},
    projects: { title: "精选作品", subtitle: "每个项目都有真实的交互功能，点击体验", items: [
      { title: "TechWave 企业官网", desc: "交互式SaaS落地页——滚动动画、计数器、月/年定价切换、FAQ手风琴、表单验证、评价轮播。", tags: ["Next.js", "动画", "交互设计"], url: "https://techwave-pi.vercel.app", github: "https://github.com/stevenliang026-lab/techwave", color: "cyan" },
      { title: "InsightBoard 数据面板", desc: "5页面管理后台，时间范围筛选、表头排序、搜索过滤、分页、订单详情面板，数据联动计算。", tags: ["React", "Recharts", "数据可视化"], url: "https://dashboard-sand-pi-34.vercel.app", github: "https://github.com/stevenliang026-lab/dashboard", color: "emerald" },
      { title: "DataForge 数据转换", desc: "5种格式互转（JSON/CSV/TSV/YAML/XML），拖拽上传、格式自动检测、语法高亮、表格预览。", tags: ["TypeScript", "工具", "数据处理"], url: "https://dataforge-silk.vercel.app", github: "https://github.com/stevenliang026-lab/dataforge", color: "orange" },
    ], live: "在线演示", source: "源代码" },
    about: { title: "关于我", desc: "我是一名全栈开发者，擅长使用现代技术栈快速交付高质量项目。我相信技术应为业务服务，每一行代码都应创造价值。", desc2: "从企业官网到复杂的Web应用，从自动化工具到AI驱动的智能系统，我都能提供专业的解决方案。", stats: [
      { number: "50+", label: "完成项目" }, { number: "30+", label: "满意客户" }, { number: "3+", label: "年经验" }, { number: "100%", label: "交付率" },
    ], techTitle: "技术栈" },
    contact: { title: "开始合作", subtitle: "有项目想法？告诉我您的需求，我会在24小时内回复。", name: "您的姓名", email: "邮箱地址", message: "项目描述", send: "发送消息", or: "或者直接联系我", sending: "发送中...", success: "消息已发送！", successDesc: "感谢您的来信，我会尽快回复。", another: "再发一条", errors: { name: "请输入姓名", email: "请输入邮箱", emailInvalid: "邮箱格式不正确", message: "请描述您的项目", messageTooShort: "请至少输入10个字符" } },
    footer: { rights: "保留所有权利", builtWith: "使用 Next.js + Tailwind CSS 构建" },
  },
  en: {
    nav: { services: "Services", projects: "Projects", about: "About", contact: "Contact", resume: "Resume" },
    hero: { greeting: "Hi, I'm", name: "Steven Liang", roles: ["Full-Stack Developer", "UI/UX Designer", "AI App Builder", "Automation Engineer"], subtitle: "I help businesses turn ideas into high-quality digital products. Specializing in web development, data visualization, and automation.", cta: "View Work", contact: "Contact Me" },
    services: { title: "My Services", subtitle: "Comprehensive tech solutions to grow your business", items: [
      { title: "Web Development", desc: "Responsive corporate sites, SaaS landing pages, e-commerce. Built with Next.js + Tailwind for top performance and SEO.", icon: "globe" },
      { title: "Data Visualization", desc: "Admin dashboards, analytics panels, reporting systems. Interactive charts, real-time filtering, multi-dimensional analysis.", icon: "chart" },
      { title: "Automation Tools", desc: "Data format conversion, workflow automation, API integration. Save time and dramatically boost team efficiency.", icon: "zap" },
      { title: "AI Applications", desc: "LLM-powered intelligent apps. Chatbots, content generators, data analysis assistants, smart recommendations.", icon: "brain" },
    ]},
    projects: { title: "Featured Work", subtitle: "Every project has real interactive functionality — click to explore", items: [
      { title: "TechWave Corporate Site", desc: "Interactive SaaS landing page — scroll animations, counters, monthly/annual pricing toggle, FAQ accordion, form validation, testimonial carousel.", tags: ["Next.js", "Animation", "Interactive"], url: "https://techwave-pi.vercel.app", github: "https://github.com/stevenliang026-lab/techwave", color: "cyan" },
      { title: "InsightBoard Dashboard", desc: "5-page admin panel with time range filtering, column sorting, search, pagination, order detail panel — all data dynamically computed.", tags: ["React", "Recharts", "Data Viz"], url: "https://dashboard-sand-pi-34.vercel.app", github: "https://github.com/stevenliang026-lab/dashboard", color: "emerald" },
      { title: "DataForge Converter", desc: "Universal converter for JSON/CSV/TSV/YAML/XML. Drag-drop upload, auto-detection, syntax highlighting, table preview.", tags: ["TypeScript", "Tool", "Data"], url: "https://dataforge-silk.vercel.app", github: "https://github.com/stevenliang026-lab/dataforge", color: "orange" },
    ], live: "Live Demo", source: "Source Code" },
    about: { title: "About Me", desc: "I'm a full-stack developer skilled in modern tech stacks for rapid, high-quality delivery. I believe technology should serve business — every line of code should create value.", desc2: "From corporate sites to complex web apps, from automation tools to AI-driven systems, I deliver professional solutions.", stats: [
      { number: "50+", label: "Projects" }, { number: "30+", label: "Happy Clients" }, { number: "3+", label: "Years Exp." }, { number: "100%", label: "Delivery Rate" },
    ], techTitle: "Tech Stack" },
    contact: { title: "Let's Work Together", subtitle: "Have a project idea? Tell me your needs and I'll respond within 24 hours.", name: "Your Name", email: "Email Address", message: "Project Description", send: "Send Message", or: "Or reach me directly", sending: "Sending...", success: "Message Sent!", successDesc: "Thank you for reaching out. I'll get back to you soon.", another: "Send Another", errors: { name: "Name is required", email: "Email is required", emailInvalid: "Invalid email address", message: "Please describe your project", messageTooShort: "At least 10 characters required" } },
    footer: { rights: "All rights reserved", builtWith: "Built with Next.js + Tailwind CSS" },
  },
};

type Translations = typeof T.zh;
interface I18nCtx { locale: Locale; t: Translations; toggle: () => void }
const I18nContext = createContext<I18nCtx | null>(null);
function useI18n() { const c = useContext(I18nContext); if (!c) throw new Error("no i18n"); return c; }
function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  return <I18nContext.Provider value={{ locale, t: T[locale], toggle: () => setLocale(p => p === "zh" ? "en" : "zh") }}>{children}</I18nContext.Provider>;
}

/* ═══════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

/* ═══════════════════════════════════════════════
   Navbar
   ═══════════════════════════════════════════════ */
function Navbar() {
  const { t, locale, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-xl shadow-xl shadow-black/10 border-b border-zinc-800/50" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-violet-300 transition-all">
          {"<SL />"}
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${active === l.href.slice(1) ? "text-white bg-zinc-800/60" : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"}`}
            >{l.label}</a>
          ))}
          <div className="w-px h-5 bg-zinc-800 mx-2" />
          <button onClick={toggle} className="text-sm px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 transition-all">
            {locale === "zh" ? "EN" : "中文"}
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-400 p-2" aria-label="Menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-zinc-950/95 backdrop-blur-xl px-6 pb-4 space-y-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block py-2.5 px-3 rounded-lg transition-colors ${active === l.href.slice(1) ? "text-white bg-zinc-800/50" : "text-zinc-400"}`}
            >{l.label}</a>
          ))}
          <button onClick={() => { toggle(); setOpen(false); }} className="block w-full text-left py-2.5 px-3 rounded-lg text-zinc-400 hover:text-white">
            {locale === "zh" ? "Switch to EN" : "切换中文"}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   Hero — typing animation + gradient mesh
   ═══════════════════════════════════════════════ */
function Hero() {
  const { t } = useI18n();
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = t.hero.roles[roleIdx];
    const speed = deleting ? 40 : 80;
    if (!deleting && text === role) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % t.hero.roles.length);
      return;
    }
    const timer = setTimeout(() => {
      setText(deleting ? role.slice(0, text.length - 1) : role.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, t.hero.roles]);

  // Reset on language change
  useEffect(() => { setText(""); setDeleting(false); setRoleIdx(0); }, [t]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.greeting === "你好，我是" ? "开放接单中" : "Available for work"}
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4 leading-tight">
          <span className="text-white">{t.hero.name}</span>
        </h1>

        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="w-0.5 h-7 sm:h-8 bg-blue-400 ml-1 animate-pulse" />
        </div>

        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5">
            {t.hero.cta}
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="#contact" className="px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-full font-medium hover:border-zinc-500 hover:text-white hover:bg-zinc-800/30 transition-all hover:-translate-y-0.5">
            {t.hero.contact}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 14l-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Services
   ═══════════════════════════════════════════════ */
function Services() {
  const { t } = useI18n();
  const { ref, vis } = useInView();

  const iconPaths: Record<string, React.ReactNode> = {
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" /></>,
    chart: <><path d="M18 20V10M12 20V4M6 20v-6" /></>,
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    brain: <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.2 6H8.2C6.3 13.7 5 11.5 5 9a7 7 0 017-7zM9 22h6M10 18v4M14 18v4" />,
  };

  const colors = ["from-blue-500/10 to-blue-600/5 hover:border-blue-500/30", "from-emerald-500/10 to-emerald-600/5 hover:border-emerald-500/30", "from-orange-500/10 to-orange-600/5 hover:border-orange-500/30", "from-violet-500/10 to-violet-600/5 hover:border-violet-500/30"];
  const iconColors = ["text-blue-400", "text-emerald-400", "text-orange-400", "text-violet-400"];

  return (
    <section id="services" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3 uppercase tracking-wider">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((item, i) => (
            <div key={i}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${colors[i]} border border-zinc-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-11 h-11 rounded-xl bg-zinc-800/80 flex items-center justify-center ${iconColors[i]} mb-5 group-hover:scale-110 transition-transform`}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{iconPaths[item.icon]}</svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Projects — with real representative mini-UIs
   ═══════════════════════════════════════════════ */
function TechWaveMini() {
  return (
    <div className="w-full h-full rounded-lg bg-slate-950 overflow-hidden shadow-2xl border border-zinc-700/30">
      <div className="h-5 bg-slate-900 flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-red-400/60" /><span className="w-2 h-2 rounded-full bg-yellow-400/60" /><span className="w-2 h-2 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[8px] text-zinc-600">techwave.dev</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="text-center py-2">
          <div className="text-[7px] text-cyan-400 mb-1">AI-Powered Solutions</div>
          <div className="h-1.5 w-24 mx-auto rounded bg-white/80 mb-1" />
          <div className="h-1 w-16 mx-auto rounded bg-zinc-600" />
          <div className="flex justify-center gap-1 mt-2">
            <div className="h-3 w-10 rounded-full bg-cyan-500/60 text-[5px] text-white flex items-center justify-center">Start</div>
            <div className="h-3 w-10 rounded-full border border-zinc-600 text-[5px] text-zinc-400 flex items-center justify-center">Learn</div>
          </div>
        </div>
        <div className="flex gap-1">
          {["99.9%", "10x", "200+"].map(n => (
            <div key={n} className="flex-1 text-center">
              <div className="text-[7px] font-bold text-white">{n}</div>
              <div className="h-0.5 w-4 mx-auto rounded bg-zinc-700 mt-0.5" />
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {[1,2,3].map(i => (
            <div key={i} className="flex-1 p-1 rounded bg-slate-800/60 border border-zinc-700/30">
              <div className="w-3 h-3 rounded bg-cyan-500/10 mb-1 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
              </div>
              <div className="h-0.5 w-full rounded bg-zinc-700 mb-0.5" />
              <div className="h-0.5 w-3/4 rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMini() {
  return (
    <div className="w-full h-full rounded-lg bg-zinc-950 overflow-hidden shadow-2xl border border-zinc-700/30">
      <div className="h-5 bg-zinc-900 flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-red-400/60" /><span className="w-2 h-2 rounded-full bg-yellow-400/60" /><span className="w-2 h-2 rounded-full bg-green-400/60" />
      </div>
      <div className="flex h-[calc(100%-20px)]">
        <div className="w-10 bg-zinc-900/80 border-r border-zinc-800/50 py-2 px-1.5 space-y-1">
          {["emerald","zinc","zinc","zinc","zinc"].map((c,i) => (
            <div key={i} className={`h-2.5 rounded ${i===0 ? "bg-emerald-500/30" : "bg-zinc-800/50"}`} />
          ))}
        </div>
        <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
          <div className="flex gap-1">
            {[{v:"$48.2K",c:"emerald"},{v:"1,284",c:"blue"},{v:"64.8%",c:"violet"}].map(s => (
              <div key={s.v} className="flex-1 p-1 rounded bg-zinc-900 border border-zinc-800/50">
                <div className="text-[5px] text-zinc-500 mb-0.5">Revenue</div>
                <div className={`text-[8px] font-bold text-${s.c}-400`}>{s.v}</div>
              </div>
            ))}
          </div>
          <div className="h-14 rounded bg-zinc-900 border border-zinc-800/50 p-1 flex items-end gap-px">
            {[30,50,35,70,45,85,60,90,55,75].map((h,i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-600/30 to-emerald-400/60" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="space-y-0.5">
            {[1,2,3].map(i => (
              <div key={i} className="flex gap-1 items-center h-2.5 px-1 rounded bg-zinc-900/50">
                <div className="w-5 h-1 rounded bg-zinc-700" />
                <div className="flex-1 h-1 rounded bg-zinc-800" />
                <div className={`w-6 h-1.5 rounded-full text-[4px] flex items-center justify-center ${i===1 ? "bg-emerald-500/20 text-emerald-400" : i===2 ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"}`}>
                  {i===1 ? "Done" : i===2 ? "Ship" : "New"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataForgeMini() {
  return (
    <div className="w-full h-full rounded-lg bg-zinc-950 overflow-hidden shadow-2xl border border-zinc-700/30">
      <div className="h-5 bg-zinc-900 flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-red-400/60" /><span className="w-2 h-2 rounded-full bg-yellow-400/60" /><span className="w-2 h-2 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[8px] text-zinc-600">DataForge</span>
      </div>
      <div className="p-2 space-y-1.5">
        <div className="flex items-center gap-1">
          {["JSON","CSV","XML"].map((f,i) => (
            <div key={f} className={`px-1.5 py-0.5 rounded text-[6px] font-medium ${i===0 ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}>{f}</div>
          ))}
          <div className="text-[8px] text-zinc-600 mx-1">&rarr;</div>
          {["JSON","CSV","XML"].map((f,i) => (
            <div key={f} className={`px-1.5 py-0.5 rounded text-[6px] font-medium ${i===1 ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}>{f}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="rounded bg-zinc-900 border border-zinc-800/50 p-1.5">
            <div className="text-[6px] text-yellow-400 mb-0.5">{"{"}</div>
            <div className="text-[5px] text-blue-400 ml-1">&quot;name&quot;: <span className="text-emerald-400">&quot;Alice&quot;</span></div>
            <div className="text-[5px] text-blue-400 ml-1">&quot;age&quot;: <span className="text-orange-400">30</span></div>
            <div className="text-[5px] text-blue-400 ml-1">&quot;city&quot;: <span className="text-emerald-400">&quot;NYC&quot;</span></div>
            <div className="text-[6px] text-yellow-400">{"}"}</div>
          </div>
          <div className="rounded bg-zinc-900 border border-zinc-800/50 p-1.5">
            <div className="text-[5px] text-blue-400 font-semibold">name,age,city</div>
            <div className="text-[5px] text-zinc-400">Alice,30,NYC</div>
            <div className="text-[5px] text-zinc-400">Bob,25,London</div>
            <div className="text-[5px] text-zinc-400">Carol,35,Tokyo</div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex-1 p-1 rounded bg-zinc-900/50 border border-zinc-800/30">
            <div className="text-[5px] text-emerald-400 mb-0.5">3 records</div>
            <div className="h-1 rounded-full bg-zinc-800 overflow-hidden"><div className="h-full w-full bg-emerald-500/40 rounded-full" /></div>
          </div>
          <div className="flex-1 p-1 rounded bg-zinc-900/50 border border-zinc-800/30">
            <div className="text-[5px] text-zinc-500 mb-0.5">142 B &rarr; 68 B</div>
            <div className="h-1 rounded-full bg-zinc-800 overflow-hidden"><div className="h-full w-1/2 bg-orange-500/40 rounded-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const miniComponents = [TechWaveMini, DashboardMini, DataForgeMini];
const borderColors: Record<string, string> = { cyan: "hover:border-cyan-500/40", emerald: "hover:border-emerald-500/40", orange: "hover:border-orange-500/40" };
const gradients: Record<string, string> = { cyan: "from-cyan-600/15 to-blue-600/10", emerald: "from-emerald-600/15 to-teal-600/10", orange: "from-orange-600/15 to-red-600/10" };

function Projects() {
  const { t } = useI18n();
  const { ref, vis } = useInView();

  return (
    <section id="projects" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3 uppercase tracking-wider">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">{t.projects.subtitle}</p>
        </div>
        <div className="space-y-6">
          {t.projects.items.map((project, i) => {
            const Mini = miniComponents[i];
            const isEven = i % 2 === 1;
            return (
              <div key={i}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 rounded-2xl border border-zinc-800/60 ${borderColors[project.color]} bg-zinc-900/30 transition-all duration-500 hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-black/20`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Preview */}
                <div className={`${isEven ? "lg:order-2" : ""}`}>
                  <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${gradients[project.color]} p-4 flex items-center justify-center`}>
                    <div className="w-[80%] h-[85%] group-hover:scale-105 transition-transform duration-500">
                      <Mini />
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className={`flex flex-col justify-center ${isEven ? "lg:order-1 lg:text-right lg:items-end" : ""}`}>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-md">{project.desc}</p>
                  <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? "lg:justify-end" : ""}`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">{tag}</span>
                    ))}
                  </div>
                  <div className={`flex gap-3 ${isEven ? "lg:justify-end" : ""}`}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-lg hover:shadow-blue-600/20 transition-all">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                      {t.projects.live}
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      {t.projects.source}
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

/* ═══════════════════════════════════════════════
   About — with animated counters
   ═══════════════════════════════════════════════ */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, vis } = useInView(0.3);
  useEffect(() => {
    if (!vis) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / 1500, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [vis, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const techStack = [
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-white" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Node.js", color: "text-emerald-400" },
  { name: "Python", color: "text-yellow-400" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "MongoDB", color: "text-green-400" },
];

function About() {
  const { t } = useI18n();
  const { ref, vis } = useInView();

  return (
    <section id="about" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3 uppercase tracking-wider">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <p className="text-zinc-400 leading-relaxed mb-4 text-[15px]">{t.about.desc}</p>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[15px]">{t.about.desc2}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.about.stats.map((stat, i) => {
                const num = parseInt(stat.number);
                const suffix = stat.number.replace(/\d+/, "");
                return (
                  <div key={i} className="text-center p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                      <AnimatedNumber value={num} suffix={suffix} />
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-5">{t.about.techTitle}</h3>
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-all group">
                  <div className={`w-1.5 h-1.5 rounded-full ${tech.color.replace("text-", "bg-")} group-hover:scale-150 transition-transform`} />
                  <span className={`text-sm ${tech.color}`}>{tech.name}</span>
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
   Contact — with validation + success state
   ═══════════════════════════════════════════════ */
function Contact() {
  const { t } = useI18n();
  const { ref, vis } = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = t.contact.errors.name;
    if (!email.trim()) errs.email = t.contact.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.contact.errors.emailInvalid;
    if (!message.trim()) errs.message = t.contact.errors.message;
    else if (message.trim().length < 10) errs.message = t.contact.errors.messageTooShort;
    return errs;
  }, [name, email, message, t]);

  const clearError = (field: string) => setErrors(p => { const n = { ...p }; delete n[field]; return n; });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSending(true);
      setTimeout(() => { setSending(false); setSubmitted(true); }, 1500);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-28 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-emerald-400"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">{t.contact.success}</h2>
          <p className="text-zinc-400 mb-8">{t.contact.successDesc}</p>
          <button onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); }}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors">{t.contact.another}</button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className={`max-w-2xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium mb-3 uppercase tracking-wider">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-zinc-500">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{t.contact.name}</label>
              <input type="text" value={name}
                onChange={(e) => { setName(e.target.value); clearError("name"); }}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/60 border text-white placeholder-zinc-600 focus:outline-none transition-all ${errors.name ? "border-red-500/70 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"}`}
                placeholder={t.contact.name} />
              {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{t.contact.email}</label>
              <input type="email" value={email}
                onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/60 border text-white placeholder-zinc-600 focus:outline-none transition-all ${errors.email ? "border-red-500/70 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"}`}
                placeholder={t.contact.email} />
              {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">{t.contact.message}</label>
            <textarea value={message} rows={5}
              onChange={(e) => { setMessage(e.target.value); clearError("message"); }}
              className={`w-full px-4 py-3 rounded-xl bg-zinc-900/60 border text-white placeholder-zinc-600 focus:outline-none transition-all resize-none ${errors.message ? "border-red-500/70 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"}`}
              placeholder={t.contact.message} />
            <div className="flex justify-between mt-1.5">
              {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
              <span className="text-xs text-zinc-600">{message.length}</span>
            </div>
          </div>
          <button type="submit" disabled={sending}
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-600/15 hover:shadow-blue-600/25 disabled:opacity-70 disabled:cursor-not-allowed">
            {sending ? t.contact.sending : t.contact.send}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-zinc-600 text-sm mb-4">{t.contact.or}</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:stevenliang026@gmail.com" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
            </a>
            <a href="https://github.com/stevenliang026-lab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════ */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="py-8 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{"<SL />"}</a>
        <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} Steven Liang. {t.footer.rights}.</p>
        <p className="text-xs text-zinc-700">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
