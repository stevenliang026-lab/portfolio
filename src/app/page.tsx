"use client";

import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
