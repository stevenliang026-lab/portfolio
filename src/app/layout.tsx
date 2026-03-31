import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Liang | Full-Stack Developer",
  description:
    "Full-stack developer specializing in web development, mini-programs, automation, and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${inter.className} scroll-smooth`}>
      <body className="bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
