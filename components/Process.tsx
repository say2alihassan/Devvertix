"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    description:
      "We map goals, users, and constraints. You leave with a technical brief and clear scope.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture",
    duration: "Week 2",
    description:
      "System design: models, infra, data. We pick the right trade-offs for your use case.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 3–8",
    description:
      "Bi-weekly sprints. Working software in week 4. Code reviews, eval harnesses, CI.",
    icon: Code,
  },
  {
    number: "04",
    title: "Ship",
    duration: "Week 9",
    description:
      "Production launch. Monitoring, observability, runbooks. Store submissions & approval.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Scale",
    duration: "Ongoing",
    description:
      "Iterate on real usage. Performance, cost, quality — continuously tuned.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-y border-border relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
          >
            How we work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
          >
            A process built for{" "}
            <span className="text-gradient">shipping</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground text-lg"
          >
            Most AI projects fail in production, not prototyping. Our process
            is engineered to get you through the last mile.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-border via-border to-transparent md:left-[31px]" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative flex gap-5 md:gap-8 group"
                >
                  {/* Step node */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-xl glass flex items-center justify-center group-hover:border-violet-500/40 transition-colors relative z-10">
                      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 rounded-2xl border border-border bg-surface/50 backdrop-blur-xl p-6 md:p-7 hover:border-border-strong transition-colors">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <span className="ml-auto text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
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
