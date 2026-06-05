"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Calendar,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and retry.");
      setStatus("error");
    }
  }

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
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-full glass text-muted-foreground mb-5"
            >
              Let's talk
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-5"
            >
              Let's build something worth{" "}
              <span className="text-gradient">shipping</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Tell us what you're building. We reply within 24 hours
              with a short plan and honest questions — not a sales pitch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="mailto:hello@devvertix.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover:border-border-strong transition-colors group"
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
                href="https://calendly.com/ali-hassan-sulehree/consultants"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover:border-border-strong transition-colors group"
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 relative"
          >
            <div className="rounded-2xl border border-border glass p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold">Project brief</span>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Brief received.</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                    Thanks — we'll reply within 24 hours with a short plan and a
                    few clarifying questions.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jane Cooper"
                        required
                        minLength={2}
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        required
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Inc."
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        disabled={status === "submitting"}
                        className="flex h-10 w-full rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/60 disabled:opacity-50 transition-colors"
                      >
                        <option value="">Select budget…</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 – $15,000</option>
                        <option value="15k-30k">$15,000 – $30,000</option>
                        <option value="30k-60k">$30,000 – $60,000</option>
                        <option value="60k+">$60,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What are you building?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="A short description of the product, users, timeline, and any constraints…"
                      className="min-h-[140px]"
                      required
                      minLength={10}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-2 p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-300">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full group"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send project brief
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Everything you share is confidential.
                    NDA available before the first call — just ask.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
