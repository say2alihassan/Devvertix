"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  timeline: string;
  tag: string;
  description: string;
  includes: string[];
  cta: string;
  popular?: boolean;
  accent?: string;
};

const tiers: Tier[] = [
  {
    name: "Automation Sprint",
    price: "From $3,500",
    timeline: "2–3 weeks",
    tag: "Quick win",
    description:
      "One or two automation pipelines built and live. n8n, Make, or Zapier — connected to your existing stack. Most clients reclaim 20+ hours per week.",
    includes: [
      "Workflow audit",
      "1–2 automation pipelines",
      "API integrations",
      "Documentation + handover",
      "2 weeks post-delivery support",
    ],
    cta: "Get started",
    accent: "from-cyan-500/10 to-transparent",
  },
  {
    name: "MVP Launch",
    price: "From $8,000",
    timeline: "6 weeks",
    tag: "Fast track",
    description:
      "One core user flow, shipped. Mobile app or web app with a basic AI feature, ready for real users on day one.",
    includes: [
      "Core feature set (1 main user flow)",
      "Mobile (React Native) or web (Next.js)",
      "Auth, database, basic admin panel",
      "Basic AI integration",
      "App Store / Play Store submission",
      "30-day post-launch support",
    ],
    cta: "Get started",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    name: "AI Product Build",
    price: "From $20,000",
    timeline: "9 weeks",
    tag: "Most popular",
    description:
      "Full AI-native SaaS or mobile app — production-ready, not prototype-ready. Built to scale from day one.",
    includes: [
      "Full AI-native SaaS or mobile app",
      "Custom AI agents or RAG system",
      "Scalable cloud infrastructure (AWS)",
      "Monitoring, observability, eval harnesses",
      "Full QA + performance testing",
      "App Store / Play Store submission",
      "60-day post-launch support",
    ],
    cta: "Get started",
    popular: true,
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    name: "Studio Retainer",
    price: "From $8,000/mo",
    timeline: "3-month minimum",
    tag: "Enterprise",
    description:
      "A dedicated senior product team — without the hiring overhead. Strategy, design, engineering, and delivery on tap.",
    includes: [
      "Dedicated team (2–4 senior engineers)",
      "Unlimited sprints within scope",
      "Weekly strategy calls + demos",
      "Priority 4hr response SLA",
      "Quarterly roadmap planning",
    ],
    cta: "Let's talk",
    accent: "from-emerald-500/10 to-transparent",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative border-t border-border">
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
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
          >
            Simple,{" "}
            <span className="text-gradient">transparent</span> pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Every project starts with a free 30-min strategy call.
            No retainers until you're ready to commit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={cn(
                "group relative rounded-2xl border bg-surface/60 backdrop-blur-sm p-6 overflow-hidden flex flex-col hover:-translate-y-0.5 transition-all",
                tier.popular
                  ? "border-violet-500/40 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]"
                  : "border-border hover:border-border-strong"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity",
                  tier.accent
                )}
              />

              <div className="relative flex flex-col h-full">
                {tier.popular && (
                  <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-[10px] font-semibold text-violet-300 uppercase tracking-wider mb-3">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
                    </span>
                    {tier.tag}
                  </div>
                )}
                {!tier.popular && (
                  <div className="inline-flex self-start px-2.5 py-1 rounded-full border border-border text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {tier.tag}
                  </div>
                )}

                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  {tier.name}
                </h3>
                <div className="text-2xl font-semibold mb-1">{tier.price}</div>
                <div className="text-xs text-muted-foreground mb-4">
                  {tier.timeline}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className={cn(
                      "group/btn inline-flex w-full items-center justify-center rounded-xl h-11 px-5 text-sm font-medium transition-all",
                      tier.popular
                        ? "text-white bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] hover:brightness-110 shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]"
                        : "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated hover:border-border-strong"
                    )}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All projects include: NDA on Day 1 · Weekly demos · Full source code ownership · No lock-in, ever.
        </motion.p>
      </div>
    </section>
  );
}
