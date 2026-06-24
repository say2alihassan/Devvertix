"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const metrics = [
  { value: "50+", label: "Products Delivered" },
  { value: "1M+", label: "End Users" },
  { value: "9+", label: "Industries Served" },
  { value: "US/EU/MENA", label: "Clients Worldwide" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full glass text-xs font-medium text-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">
              Accepting new projects for Q3 2026
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-foreground mb-6 leading-[1.02]"
        >
          Mobile App & AI Products
          <br />
          <span className="text-gradient">users actually love.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Devvertix is a <span className="text-foreground">mobile app development company</span> and product studio for founders building{" "}
          <span className="text-foreground">iOS & Android apps</span> and{" "}
          <span className="text-foreground">AI-native SaaS</span>. 50+ products delivered to 1M+ users
          across the US, UK, and UAE — we ship yours next.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13, ease: "easeOut" }}
          className="text-sm text-muted-foreground mb-8"
        >
          Async-first · US-timezone friendly · NDA on day one
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-xl h-12 px-7 text-base font-medium text-white bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] hover:brightness-110 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.8)] transition-all"
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center rounded-xl h-12 px-7 text-base font-medium border border-border bg-surface/60 backdrop-blur-md text-foreground hover:bg-surface-elevated hover:border-border-strong transition-all"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            See Our Work
          </a>
        </motion.div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl glass overflow-hidden"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="px-4 py-5 md:py-6 bg-surface/40 backdrop-blur-sm text-left md:text-center"
            >
              <div className="flex items-center justify-start md:justify-center gap-2">
                {i === 0 && (
                  <Zap className="w-4 h-4 text-violet-400" strokeWidth={2} />
                )}
                <span className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                  {m.value}
                </span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
