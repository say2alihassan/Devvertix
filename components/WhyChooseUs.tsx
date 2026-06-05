"use client";

import { motion } from "framer-motion";
import { Shield, Zap, DollarSign, Gauge, Clock, Lock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Production-ready, not prototype-ready",
    description:
      "We design for the last mile: observability, fallbacks, evals, security. What works in a demo rarely survives 10,000 real users. We've been there. We build for both.",
  },
  {
    icon: Gauge,
    title: "Scalability built in from day one",
    description:
      "We've delivered 50+ products, including apps at 1M+ downloads. Architecture decisions compound — the wrong call in week 2 costs you in week 20. We make them carefully and explain every trade-off.",
  },
  {
    icon: Zap,
    title: "Startup pace, studio quality",
    description:
      "Working software in Week 4. Weekly demos. No black-box delivery — you always know where your project stands.",
  },
  {
    icon: DollarSign,
    title: "Cost-tuned AI infrastructure",
    description:
      "Token budgets, caching, model routing. We optimize your inference bill so AI doesn't eat your margins. We've cut client AI costs by 60%+ without touching product quality.",
  },
  {
    icon: Clock,
    title: "US-timezone aligned",
    description:
      "Async-first workflow means you get updates every morning your time. Our team overlaps US Eastern and Pacific hours. Your Slack doesn't go quiet at 5pm.",
  },
  {
    icon: Lock,
    title: "NDA & IP protection",
    description:
      "We sign NDAs before the first call — not after. All source code, models, and data are yours. No lock-in. No licensing fees. No strings.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Headline + visual */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
            >
              Why Devvertix
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-5"
            >
              Built by people who've{" "}
              <span className="text-gradient">actually shipped</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              We've delivered 50+ products across FinTech, Mobility, Q-commerce, and AI.
              Real users, real scale, real edge cases — and we're still here after launch.
            </motion.p>

            {/* Proof card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border glass p-6"
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    1M+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    downloads
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    11+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    shipped apps
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    9+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    industries
                  </div>
                </div>
              </div>
              <div className="h-px bg-border my-5" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Turn ideas into shipped, scalable products — from MVP to
                million-download scale."
              </p>
            </motion.div>
          </div>

          {/* Right: Reasons */}
          <div className="lg:col-span-3 space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  style={{ willChange: "transform" }}
                  className="rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-6 md:p-7 flex gap-5 hover:border-border-strong transition-colors"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-border bg-surface-elevated flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
