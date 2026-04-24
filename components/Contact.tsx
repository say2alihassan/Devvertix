"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: pitch */}
          <div className="lg:col-span-2 lg:pr-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
            >
              Let's talk
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-5"
            >
              Start a <span className="text-gradient">project</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Tell us what you're building. We reply within 24 hours — usually
              with a short plan and questions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="mailto:hello@devvertix.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-xl hover:border-border-strong transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-border bg-surface-elevated flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Email us</div>
                  <div className="text-xs text-muted-foreground">
                    hello@devvertix.com
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-xl hover:border-border-strong transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-border bg-surface-elevated flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Book a call</div>
                  <div className="text-xs text-muted-foreground">
                    30-min intro — free
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 relative"
          >
            <div className="rounded-2xl border border-border glass p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold">Project brief</span>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" placeholder="Jane Cooper" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Input id="budget" placeholder="$20k – $50k" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What are you building?</Label>
                  <Textarea
                    id="message"
                    placeholder="A short description of the product, users, timeline, and any constraints…"
                    className="min-h-[140px]"
                  />
                </div>

                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full group"
                  type="submit"
                >
                  Send project brief
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Everything you send is confidential. NDA available on request.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
