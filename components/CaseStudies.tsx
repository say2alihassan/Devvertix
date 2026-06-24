"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingUp, BarChart3, Users } from "lucide-react";

const caseStudies = [
  {
    client: "Tabbio — GCC, UAE",
    title: "AI Career Platform — iOS, Android & Web",
    description:
      "Built a full AI-powered career platform for the GCC market. Tabbio creates SmartCV profiles via conversation, auto-tailors CVs per job, and applies on behalf of users — in English and Arabic. Live on iOS, Android, and web.",
    metrics: [
      { label: "Active users", value: "18K+", icon: Users },
      { label: "Markets served", value: "6 GCC", icon: TrendingUp },
    ],
    tags: ["Mobile App", "AI", "iOS & Android", "SaaS", "UAE"],
    accent: "from-amber-500/30 to-yellow-500/10",
    url: "https://www.tabbio.com",
    appStore: "https://apps.apple.com/us/app/tabbio-cv-maker-job-search/id6755083658",
    playStore: "https://play.google.com/store/apps/details?id=com.tabbio.app",
  },
  {
    client: "EDT Tyres — North London, UK",
    title: "Web App + AI Booking & Lead Automation",
    description:
      "Built a full web app with AI-powered booking system and lead automation for a North London tyre shop. Enquiries are handled automatically — no VA needed. The owner focuses on the workshop; the system handles the rest.",
    metrics: [
      { label: "Lead growth", value: "2x", icon: TrendingUp },
      { label: "VA cost saved", value: "£0/mo", icon: BarChart3 },
    ],
    tags: ["Web App", "AI Automation", "Booking System", "UK"],
    accent: "from-rose-500/30 to-orange-500/10",
    url: "https://edttyres.co.uk",
  },
  {
    client: "FinTech Startup — USA",
    title: "Automated Financial Reporting Agent",
    description:
      "A multi-agent system that connects to 6 data sources, generates formatted reports on schedule, and flags anomalies — autonomously. Replaced 40 hours of manual analyst work every week.",
    metrics: [
      { label: "Hours saved / wk", value: "40hrs", icon: Clock },
      { label: "Report accuracy", value: "99.9%", icon: BarChart3 },
    ],
    tags: ["AI Agents", "FinTech", "Automation"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
    url: null,
  },
  {
    client: "SaaS Enterprise — UK",
    title: "RAG-Powered Support System",
    description:
      "Retrieval pipeline over 10,000+ internal docs. Agents get instant, accurate answers. Common tickets are deflected automatically. Humans stay in the loop for complex cases.",
    metrics: [
      { label: "Ticket deflection", value: "65%", icon: TrendingUp },
      { label: "First response", value: "<2s", icon: Clock },
    ],
    tags: ["RAG", "Support", "NLP"],
    accent: "from-blue-500/30 to-cyan-500/10",
    url: null,
  },
  {
    client: "HealthTech Scaleup — UAE",
    title: "Patient Portal (iOS & Android)",
    description:
      "HIPAA-ready cross-platform app for real-time patient monitoring and encrypted doctor communication. Built on React Native, integrated with existing EHR systems.",
    metrics: [
      { label: "User growth", value: "3x", icon: Users },
      { label: "App Store rating", value: "4.9★", icon: BarChart3 },
    ],
    tags: ["Mobile", "Healthcare", "React Native"],
    accent: "from-emerald-500/30 to-teal-500/10",
    url: null,
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
              Five of our recent builds — AI platforms, web apps, automation, knowledge systems,
              and mobile. Full case studies available under NDA.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  {study.url ? (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30" />
                  )}
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

                <div className="mt-4 flex flex-col gap-1.5">
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                    >
                      View live site
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {"appStore" in study && study.appStore && (
                    <a
                      href={study.appStore as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                    >
                      App Store
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {"playStore" in study && study.playStore && (
                    <a
                      href={study.playStore as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                    >
                      Google Play
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
