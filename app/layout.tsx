import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `Portfolio of ${profile.name}, a freelance web developer building responsive, modern websites and web applications with React, Next.js and Laravel.`,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
