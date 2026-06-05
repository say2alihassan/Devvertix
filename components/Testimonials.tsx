"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "Devvertix delivered our AI reporting agent in 8 weeks — on time, on budget, and it actually works in production. They flagged edge cases we hadn't even thought of. Our analysts reclaimed 40 hours a week from day one.",
    name: "Michael Torres",
    title: "CTO, FinTech Startup",
    country: "🇺🇸",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    quote:
      "We'd tried two other agencies before Devvertix. Night and day difference. They pushed back on bad ideas, asked the right questions, and shipped working software every sprint. The RAG system has deflected 65% of our support tickets.",
    name: "Sarah Whitfield",
    title: "Head of Product, SaaS Enterprise",
    country: "🇬🇧",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    quote:
      "Our patient portal launched in 9 weeks with a 4.9-star rating on the App Store. Devvertix handled HIPAA compliance, EHR integration, and the store submission — we just focused on our users. Would work with them again without hesitation.",
    name: "Dr. Aisha Rahman",
    title: "Founder, HealthTech Scaleup",
    country: "🇦🇪",
    accent: "from-emerald-500/20 to-transparent",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative border-t border-border">
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
            Client feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
          >
            What founders say about{" "}
            <span className="text-gradient">working with us</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-7 flex flex-col hover:border-border-strong hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
              />
              <div className="relative flex flex-col h-full">
                <Quote className="w-7 h-7 text-violet-400/60 mb-4 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-base">
                    {t.country}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
