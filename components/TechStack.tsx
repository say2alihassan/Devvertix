"use client";

import { motion } from "framer-motion";

const technologies = [
  "OpenAI",
  "Anthropic",
  "Next.js",
  "React",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Node.js",
  "Python",
  "LangChain",
  "Supabase",
  "Pinecone",
  "Firebase",
  "AWS",
  "Docker",
];

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-16 border-y border-border relative bg-background/50">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] text-center"
        >
          The stack powering 1M+ downloads
        </motion.p>
      </div>

      <div className="relative overflow-hidden mask-fade-lr">
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              <span>{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
