"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Work", href: "#case-studies" },
  { name: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-6xl",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-4 md:px-6 h-14 rounded-2xl transition-all duration-300",
          isScrolled
            ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "bg-transparent border border-transparent",
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="Devvertix Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Devvertix
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-surface-elevated"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://calendly.com/ali-hassan-sulehree/consultants"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-lg h-9 px-4 text-sm font-medium text-white bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] hover:brightness-110 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] transition-all"
          >
            Get Started
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface-elevated p-3 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="p-1 pt-2">
                <a
                  href="https://calendly.com/ali-hassan-sulehree/consultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl h-11 px-5 text-sm font-medium text-white bg-[linear-gradient(135deg,#8B5CF6_0%,#3B82F6_100%)] shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
