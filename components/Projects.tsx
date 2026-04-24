"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Apple, Smartphone, Download, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Platform = "ios" | "android";

type Project = {
  name: string;
  tagline: string;
  description: string;
  platform: Platform;
  url: string;
  category: string;
  highlight?: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Clickypk",
    tagline: "Pakistan's classifieds super-app",
    description:
      "High-traffic marketplace handling millions of listings, chat, and payments at scale.",
    platform: "android",
    url: "https://play.google.com/store/apps/details?id=com.clicky.pk&hl=en",
    category: "Marketplace",
    highlight: "1M+ downloads",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    name: "Krave Mart",
    tagline: "Quick-commerce grocery delivery",
    description:
      "On-demand grocery app with real-time tracking, rider dispatch, and payments.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/krave-mart/id1597746512",
    category: "Q-Commerce",
    highlight: "Funded startup",
    accent: "from-rose-500/30 to-orange-500/10",
  },
  {
    name: "Drive Mate",
    tagline: "Peer-to-peer car sharing",
    description:
      "Rent and share cars with trusted users. Bookings, insurance flows, in-app messaging.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/drive-mate-share-rent-cars/id1534972421",
    category: "Mobility",
    accent: "from-blue-500/30 to-cyan-500/10",
  },
  {
    name: "Carvonix",
    tagline: "Social network for car enthusiasts",
    description:
      "Community app for car lovers to showcase builds, follow creators, and discover events.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/carvonix/id1661267102",
    category: "Social",
    accent: "from-red-500/30 to-pink-500/10",
  },
  {
    name: "Mappy",
    tagline: "Map your memories",
    description:
      "Location-based memory journal. Pin photos, notes, and moments to places you've been.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/mappy-map-your-memories/id6749023763",
    category: "Lifestyle",
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    name: "Cohere",
    tagline: "Mindful productivity",
    description:
      "Focus and meditation companion designed for calm, intentional routines.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/cohere/id6443923498",
    category: "Wellness",
    accent: "from-indigo-500/30 to-purple-500/10",
  },
  {
    name: "Perfect Pay",
    tagline: "Payroll, simplified",
    description:
      "Payroll and payment tracking with automated calculations and secure transactions.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/myperfectpay/id6738841741",
    category: "FinTech",
    accent: "from-amber-500/30 to-yellow-500/10",
  },
  {
    name: "Ask AI",
    tagline: "Conversational AI assistant",
    description:
      "AI chat app for instant answers, writing, and productivity — powered by modern LLMs.",
    platform: "android",
    url: "https://play.google.com/store/apps/details?id=com.askai.app&hl=en",
    category: "AI / GenAI",
    highlight: "AI-powered",
    accent: "from-purple-500/30 to-blue-500/10",
  },
  {
    name: "Tabbio",
    tagline: "CV maker & job search",
    description:
      "AI-assisted CV builder and job discovery with smart templates and auto-tailoring.",
    platform: "ios",
    url: "https://apps.apple.com/br/app/tabbio-cv-maker-job-search/id6755083658",
    category: "Career / AI",
    highlight: "AI-powered",
    accent: "from-sky-500/30 to-indigo-500/10",
  },
  {
    name: "Trick and Treats",
    tagline: "Halloween community app",
    description:
      "Map-based Halloween experience helping families find trick-or-treating hotspots.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/trick-and-treats/id1630161563",
    category: "Community",
    accent: "from-orange-500/30 to-red-500/10",
  },
  {
    name: "Story Formed Life",
    tagline: "Faith & journaling",
    description:
      "Guided journaling and devotional app with structured reflections and content library.",
    platform: "ios",
    url: "https://apps.apple.com/pk/app/story-formed-life/id1513565158",
    category: "Lifestyle",
    accent: "from-teal-500/30 to-emerald-500/10",
  },
];

function PlatformBadge({ platform }: { platform: Platform }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.1em] px-2 py-1 rounded-md border border-border bg-surface/70 text-muted-foreground">
      {platform === "ios" ? (
        <Apple className="w-3 h-3" />
      ) : (
        <Smartphone className="w-3 h-3" />
      )}
      {platform === "ios" ? "iOS" : "Android"}
    </span>
  );
}

export default function Projects() {
  const [filter, setFilter] = React.useState<"all" | Platform>("all");

  const filtered = React.useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.platform === filter),
    [filter]
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
            >
              <Sparkles className="w-3 h-3" />
              Shipped products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
            >
              Apps we've <span className="text-gradient">built & shipped</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-muted-foreground text-lg"
            >
              A selection of live products on the App Store and Google Play —
              spanning marketplaces, FinTech, AI, mobility, and more.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-1.5 p-1 rounded-full border border-border bg-surface/60 backdrop-blur-md"
          >
            {(["all", "ios", "android"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "text-xs font-medium px-3.5 py-1.5 rounded-full transition-all",
                  filter === f
                    ? "bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {f === "all" ? "All" : f === "ios" ? "iOS" : "Android"}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              className="group relative rounded-2xl border border-border bg-surface/60 backdrop-blur-xl overflow-hidden hover:border-border-strong transition-all hover:-translate-y-0.5"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none",
                  project.accent
                )}
              />

              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <PlatformBadge platform={project.platform} />
                    <span className="text-[10px] font-medium uppercase tracking-[0.1em] px-2 py-1 rounded-md border border-border bg-surface/70 text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-foreground/80 font-medium mb-2">
                  {project.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.highlight && (
                  <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-2 text-xs">
                    <Download className="w-3.5 h-3.5 text-violet-400" />
                    <span className="font-semibold text-foreground">
                      {project.highlight}
                    </span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-border glass p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Have a product in mind?
            </h3>
            <p className="text-muted-foreground">
              We turn ideas into shipped, scalable apps — from MVP to
              million-download scale.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-xl text-base font-medium h-12 px-7 bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] text-white hover:brightness-110 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] transition-all whitespace-nowrap"
          >
            Start your project
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
