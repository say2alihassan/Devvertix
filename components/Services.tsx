"use client";

import { motion } from "framer-motion";
import {
  Database,
  Bot,
  Smartphone,
  Rocket,
  MessageSquare,
  Cpu,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  badge?: string;
  icon: React.ElementType;
  span: string;
  featured?: boolean;
  accent?: string;
};

const services: Service[] = [
  {
    title: "AI-Native SaaS",
    description:
      "End-to-end product development — from architecture to paying users. We've delivered 50+ production AI products — from MVP to 1M+ downloads. Not demos. Not prototypes. Products that scale.",
    badge: "Our core offering",
    icon: Rocket,
    span: "md:col-span-2 md:row-span-2",
    featured: true,
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Production retrieval pipelines over your private data. Hybrid search, reranking, evaluation harnesses. Your team gets accurate answers in seconds — not hours of searching.",
    icon: Database,
    span: "md:col-span-2",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    title: "Autonomous Agents",
    description:
      "Multi-step agents that plan, use tools, and recover from failure. We build agents that replace hours of manual work — not toy chatbots that impress in demos and break in production.",
    icon: Bot,
    span: "md:col-span-1",
    accent: "from-emerald-500/15 to-transparent",
  },
  {
    title: "AI Chatbots",
    description:
      "On-brand conversational assistants grounded in your data. Trained on your docs, your tone, your workflows — not a generic GPT wrapper.",
    icon: MessageSquare,
    span: "md:col-span-1",
    accent: "from-amber-500/15 to-transparent",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Custom mobile app development using React Native, Flutter, Swift & Kotlin. 50+ apps live on the App Store and Google Play. We manage design, development, and store submissions — start to finish.",
    badge: "React Native · Flutter · Swift · Kotlin",
    icon: Smartphone,
    span: "md:col-span-2",
    accent: "from-rose-500/15 to-transparent",
  },
  {
    title: "Workflow Automation",
    badge: "n8n · Make · Zapier",
    description:
      "Connect your entire stack and eliminate manual work. We build custom automation pipelines using n8n, Make, and Zapier — integrated into your existing tools. Most clients reclaim 20–40 hours per week from day one.",
    icon: Cpu,
    span: "md:col-span-2",
    accent: "from-cyan-500/15 to-transparent",
  },
  {
    title: "SaaS MVP",
    badge: "6-week delivery",
    description:
      "From validated idea to live product in 6 weeks. Full-stack web app — auth, billing, dashboard, AI features included. Built to start charging users on day one or raise your next round.",
    icon: LayoutDashboard,
    span: "md:col-span-2",
    accent: "from-indigo-500/15 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
          >
            <Sparkles className="w-3 h-3" />
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
          >
            Mobile app development &{" "}
            <span className="text-gradient">AI services</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            A senior team covering strategy, design, AI engineering, mobile,
            and automation — so you don't need to hire five people.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                style={{ willChange: "transform" }}
              className={cn(
                  "group relative rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-8 overflow-hidden hover:border-border-strong transition-all",
                  service.span
                )}
              >
                {/* Accent glow */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity bg-gradient-to-br pointer-events-none",
                    service.accent
                  )}
                />

                <div className="relative flex flex-col h-full">
                  <div className="w-11 h-11 rounded-xl border border-border bg-surface-elevated flex items-center justify-center mb-5 group-hover:border-border-strong transition-colors">
                    <Icon
                      className="w-5 h-5 text-foreground"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3
                    className={cn(
                      "font-semibold tracking-tight mb-2",
                      service.featured
                        ? "text-2xl md:text-3xl"
                        : "text-lg md:text-xl"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-muted-foreground leading-relaxed",
                      service.featured ? "text-base" : "text-sm"
                    )}
                  >
                    {service.description}
                  </p>

                  {service.badge && (
                    <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-foreground font-medium">
                      <span>{service.badge}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
