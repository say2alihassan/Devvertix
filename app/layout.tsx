import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devvertix | AI Agents, Mobile Apps & Automation for US Startups",
  description:
    "Devvertix is a product studio shipping AI-native SaaS, mobile apps, and workflow automation for founders in the US, UK, and UAE. 50+ products delivered, 1M+ users.",
  openGraph: {
    title: "Devvertix | AI & Mobile Product Studio",
    description:
      "Ship AI products users actually love. 50+ products delivered, 1M+ users, clients in the US, UK & UAE.",
    url: "https://www.devvertix.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
