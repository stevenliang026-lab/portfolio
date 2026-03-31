"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="text-lg font-bold text-white">
          {"<SL />"}
        </a>
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Steven Liang. {t.footer.rights}.
        </p>
      </div>
    </footer>
  );
}
