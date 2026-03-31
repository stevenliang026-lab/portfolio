"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "zh" | "en";

const translations = {
  zh: {
    nav: {
      services: "服务",
      projects: "作品",
      about: "关于",
      contact: "联系",
    },
    hero: {
      greeting: "你好，我是",
      name: "Steven Liang",
      title: "全栈开发者",
      subtitle: "我帮助企业和个人将想法变成高质量的数字产品。专注于网站开发、小程序、自动化解决方案。",
      cta: "查看作品",
      contact: "联系我",
    },
    services: {
      title: "我的服务",
      subtitle: "提供全方位的技术解决方案，助力您的业务增长",
      items: [
        {
          title: "网站开发",
          desc: "响应式企业官网、落地页、电商网站。使用现代技术栈，确保高性能和良好的SEO。",
          icon: "globe",
        },
        {
          title: "小程序开发",
          desc: "微信小程序、支付宝小程序开发。从需求分析到上线，提供完整的开发服务。",
          icon: "mobile",
        },
        {
          title: "自动化脚本",
          desc: "数据采集、Excel自动处理、API对接、工作流自动化。帮您节省时间，提升效率。",
          icon: "zap",
        },
        {
          title: "AI应用开发",
          desc: "基于大语言模型的智能应用开发。聊天机器人、内容生成工具、数据分析助手。",
          icon: "brain",
        },
      ],
    },
    projects: {
      title: "精选作品",
      subtitle: "以下是我近期完成的部分项目",
      items: [
        {
          title: "TechWave 企业官网",
          desc: "为AI科技公司打造的交互式官网。滚动动画、计数器动画、定价月/年切换、FAQ手风琴、表单验证、评价轮播——完整的SaaS落地页。",
          tags: ["Next.js", "动画", "交互设计"],
          url: "https://techwave-pi.vercel.app",
          github: "https://github.com/stevenliang026-lab/techwave",
        },
        {
          title: "InsightBoard 数据面板",
          desc: "5页面管理后台：概览/分析/订单/客户/设置。支持时间范围筛选、表头排序、搜索过滤、分页、订单详情面板，所有数据联动计算。",
          tags: ["React", "Recharts", "数据可视化"],
          url: "https://dashboard-sand-pi-34.vercel.app",
          github: "https://github.com/stevenliang026-lab/dashboard",
        },
        {
          title: "DataForge 数据转换工具",
          desc: "支持JSON/CSV/TSV/YAML/XML五种格式互转。拖拽上传、格式自动检测、语法高亮、行号显示、表格预览、键盘快捷键。",
          tags: ["TypeScript", "工具", "数据处理"],
          url: "https://dataforge-silk.vercel.app",
          github: "https://github.com/stevenliang026-lab/dataforge",
        },
      ],
      viewMore: "查看详情",
    },
    about: {
      title: "关于我",
      desc: "我是一名全栈开发者，擅长使用现代技术栈快速交付高质量的项目。我相信技术应该为业务服务，每一行代码都应该创造价值。",
      desc2: "拥有丰富的项目经验，从企业官网到复杂的Web应用，从自动化脚本到AI驱动的智能工具，我都能提供专业的解决方案。",
      stats: [
        { number: "50+", label: "完成项目" },
        { number: "30+", label: "满意客户" },
        { number: "3+", label: "年经验" },
        { number: "100%", label: "交付率" },
      ],
      techTitle: "技术栈",
    },
    contact: {
      title: "开始合作",
      subtitle: "有项目想法？告诉我您的需求，我会在24小时内回复您。",
      name: "您的姓名",
      email: "邮箱地址",
      message: "项目描述",
      send: "发送消息",
      or: "或者直接联系我",
    },
    footer: {
      rights: "保留所有权利",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Steven Liang",
      title: "Full-Stack Developer",
      subtitle:
        "I help businesses and individuals turn ideas into high-quality digital products. Specializing in web development, mini-programs, and automation solutions.",
      cta: "View Work",
      contact: "Contact Me",
    },
    services: {
      title: "My Services",
      subtitle: "Comprehensive tech solutions to grow your business",
      items: [
        {
          title: "Web Development",
          desc: "Responsive websites, landing pages, and e-commerce. Built with modern tech for high performance and great SEO.",
          icon: "globe",
        },
        {
          title: "Mini Programs",
          desc: "WeChat & Alipay mini-program development. Full service from requirements to launch.",
          icon: "mobile",
        },
        {
          title: "Automation",
          desc: "Data scraping, Excel processing, API integration, workflow automation. Save time and boost efficiency.",
          icon: "zap",
        },
        {
          title: "AI Applications",
          desc: "LLM-powered intelligent apps. Chatbots, content generators, and data analysis assistants.",
          icon: "brain",
        },
      ],
    },
    projects: {
      title: "Featured Work",
      subtitle: "A selection of my recent projects",
      items: [
        {
          title: "TechWave Corporate Site",
          desc: "Interactive SaaS landing page with scroll animations, animated counters, monthly/annual pricing toggle, FAQ accordion, form validation, and testimonial carousel.",
          tags: ["Next.js", "Animation", "Interactive"],
          url: "https://techwave-pi.vercel.app",
          github: "https://github.com/stevenliang026-lab/techwave",
        },
        {
          title: "InsightBoard Dashboard",
          desc: "5-page admin panel: Overview/Analytics/Orders/Customers/Settings. Time range filtering, column sorting, search, pagination, order detail panel — all data dynamically computed.",
          tags: ["React", "Recharts", "Data Viz"],
          url: "https://dashboard-sand-pi-34.vercel.app",
          github: "https://github.com/stevenliang026-lab/dashboard",
        },
        {
          title: "DataForge Converter",
          desc: "Universal data converter for JSON/CSV/TSV/YAML/XML. Drag-drop upload, auto-detection, syntax highlighting, line numbers, table preview, and keyboard shortcuts.",
          tags: ["TypeScript", "Tool", "Data"],
          url: "https://dataforge-silk.vercel.app",
          github: "https://github.com/stevenliang026-lab/dataforge",
        },
      ],
      viewMore: "View Details",
    },
    about: {
      title: "About Me",
      desc: "I'm a full-stack developer skilled in modern tech stacks for rapid, high-quality delivery. I believe technology should serve business — every line of code should create value.",
      desc2: "With extensive project experience spanning corporate websites, complex web apps, automation scripts, and AI-driven tools, I deliver professional solutions for every need.",
      stats: [
        { number: "50+", label: "Projects Done" },
        { number: "30+", label: "Happy Clients" },
        { number: "3+", label: "Years Exp." },
        { number: "100%", label: "Delivery Rate" },
      ],
      techTitle: "Tech Stack",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project idea? Tell me your requirements and I'll respond within 24 hours.",
      name: "Your Name",
      email: "Email Address",
      message: "Project Description",
      send: "Send Message",
      or: "Or reach me directly",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};

type Translations = typeof translations.zh;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
