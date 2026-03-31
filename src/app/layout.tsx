import type { Metadata } from "next";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Steven Liang — Full-Stack Developer",
  description: "Full-stack developer specializing in web development, data visualization, automation, and AI applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh" className={`${outfit.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="font-[family-name:var(--font-body)] bg-[#08080a] text-stone-100 antialiased">{children}</body>
    </html>
  );
}
