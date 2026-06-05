import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FooterLink = { name: string; href: string; external?: boolean };
type LinkGroup = { title: string; links: FooterLink[] };

const linkGroups: LinkGroup[] = [
  {
    title: "Services",
    links: [
      { name: "AI-Native SaaS", href: "#services" },
      { name: "RAG Systems", href: "#services" },
      { name: "Autonomous Agents", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Workflow Automation", href: "#services" },
      { name: "SaaS MVP", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Process", href: "#process" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Book a call", href: "https://calendly.com/ali-hassan-sulehree/consultants", external: true },
      { name: "hello@devvertix.com", href: "mailto:hello@devvertix.com", external: true },
      { name: "LinkedIn", href: "https://linkedin.com/company/devvertix", external: true },
      { name: "Clutch", href: "https://clutch.co", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A product studio shipping AI-native SaaS and mobile apps —
              built for founders in the US, Europe, and MENA.
            </p>
            <div className="flex gap-2 mt-6">
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-border-strong flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-border-strong flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-border-strong flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Devvertix. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
