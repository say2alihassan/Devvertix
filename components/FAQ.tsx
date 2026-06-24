"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What mobile app development services does Devvertix offer?",
    a: "Devvertix builds cross-platform iOS and Android apps using React Native and Flutter, and native apps using Swift (iOS) and Kotlin (Android). We handle everything from UI/UX design to App Store and Google Play submission — end to end.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "A mobile app MVP takes 6 weeks with Devvertix. A full production app with AI features — including backend, admin panel, and store submission — takes 9 weeks. We deliver working software every sprint, not at the end.",
  },
  {
    q: "How much does mobile app development cost?",
    a: "A mobile MVP starts from $8,000 (6 weeks). A full AI-native mobile app starts from $20,000 (9 weeks). All packages include NDA on Day 1, weekly demos, full source code ownership, and post-launch support.",
  },
  {
    q: "Do you build apps for both iOS and Android?",
    a: "Yes. We build cross-platform apps with React Native and Flutter that run on both iOS (App Store) and Android (Google Play) from a single codebase — and native apps when performance or platform-specific features demand it.",
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes. We manage the full submission process — app configuration, screenshots, metadata, review guidelines compliance, and resubmissions if rejected. You focus on your users; we handle the stores.",
  },
  {
    q: "Can you add AI features to a mobile app?",
    a: "Yes — this is one of our core offerings. We integrate LLMs (OpenAI, Anthropic Claude), build on-device AI, create AI chatbots, and design RAG pipelines that work inside mobile apps. We've shipped multiple AI-native mobile products.",
  },
  {
    q: "Do you work with US-based startups?",
    a: "Yes. Most of our clients are founders in the US, UK, and UAE. We operate async-first with US-timezone overlap, provide weekly demos, and sign NDAs before the first call.",
  },
  {
    q: "What is the difference between React Native and Flutter?",
    a: "React Native uses JavaScript and integrates well with existing React/web codebases. Flutter uses Dart and often delivers smoother animations and better native feel. We build with both and recommend based on your team's background and project needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
          >
            <Sparkles className="w-3 h-3" />
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]"
          >
            Mobile app development{" "}
            <span className="text-gradient">questions answered</span>.
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={cn(
                "rounded-2xl border bg-surface/60 backdrop-blur-sm overflow-hidden transition-colors",
                open === i ? "border-border-strong" : "border-border"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
