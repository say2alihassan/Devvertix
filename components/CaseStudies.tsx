"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingUp, BarChart3, Users } from "lucide-react";

const caseStudies = [
  {
    client: "FinTech Startup",
    title: "Automated Financial Reporting Agent",
    description:
      "A multi-agent system that connects to 6 data sources, generates formatted reports on schedule, and flags anomalies — autonomously. Replaced 40 hours of manual analyst work every week.",
    metrics: [
      { label: "Hours saved / wk", value: "40hrs", icon: Clock },
      { label: "Report accuracy", value: "99.9%", icon: BarChart3 },
    ],
    tags: ["AI Agents", "FinTech", "Automation"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    client: "SaaS Enterprise",
    title: "RAG-Powered Support System",
    description:
      "Retrieval pipeline over 10,000+ internal docs. Agents get instant, accurate answers. Common tickets are deflected automatically. Humans stay in the loop for complex cases.",
    metrics: [
      { label: "Ticket deflection", value: "65%", icon: TrendingUp },
      { label: "First response", value: "<2s", icon: Clock },
    ],
    tags: ["RAG", "Support", "NLP"],
    accent: "from-blue-500/30 to-cyan-500/10",
  },
  {
    client: "HealthTech Scaleup",
    title: "Patient Portal (iOS & Android)",
    description:
      "HIPAA-ready cross-platform app for real-time patient monitoring and encrypted doctor communication. Built on React Native, integrated with existing EHR systems.",
    metrics: [
      { label: "User growth", value: "3x", icon: Users },
      { label: "App Store rating", value: "4.9★", icon: BarChart3 },
    ],
    tags: ["Mobile", "Healthcare", "React Native"],
    accent: "from-emerald-500/30 to-teal-500/10",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
            >
              Selected engagements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-4"
            >
              Outcomes we've <span className="text-gradient">delivered</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-muted-foreground text-lg"
            >
              Three of our recent builds — across AI agents, knowledge systems,
              and mobile. Full case studies available under NDA.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative rounded-2xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden hover:border-border-strong transition-all hover:-translate-y-0.5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
              />

              <div className="relative p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {study.client}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5 mt-auto">
                  {study.metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-xl border border-border bg-surface-elevated/60 p-3"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                          <Icon className="w-3 h-3" />
                          {m.label}
                        </div>
                        <div className="text-xl font-semibold">{m.value}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-1 rounded-md border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
