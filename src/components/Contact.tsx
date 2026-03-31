"use client";

import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-zinc-500">{t.contact.subtitle}</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{t.contact.name}</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder={t.contact.name}
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{t.contact.email}</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder={t.contact.email}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-2">{t.contact.message}</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder={t.contact.message}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors"
          >
            {t.contact.send}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-zinc-600 text-sm mb-4">{t.contact.or}</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:stevenliang026@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </a>
            <a href="https://github.com/StevenLiang026" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
