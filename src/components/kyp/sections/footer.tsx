"use client";


import Link from "next/link";
import { imgPath } from "@/lib/kyp/image-path";
import { Github, Mail } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Reveal } from "@/components/kyp/ui/reveal";

const footerLinks = [
  {
    title: "Medications",
    links: [
      { label: "Sertraline", href: "/drugs/sertraline" },
      { label: "Fluoxetine", href: "/drugs/fluoxetine" },
      { label: "Escitalopram", href: "/drugs/escitalopram" },
      { label: "Bupropion", href: "/drugs/bupropion" },
    ],
  },
  {
    title: "Substance Use",
    links: [
      { label: "Alcohol", href: "/substances/alcohol" },
      { label: "Opioids", href: "/substances/opioids" },
      { label: "Cannabis", href: "/substances/cannabis" },
    ],
  },
  {
    title: "Clinical",
    links: [
      { label: "Major Depressive Disorder", href: "/diseases/major-depressive-disorder" },
      { label: "Emergency Help", href: "#emergency" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Medications", href: "#library" },
      { label: "Substance Use", href: "#substances" },
      { label: "NeuroArcade", href: "#neuroarcade" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Emergency", href: "#emergency" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto relative overflow-hidden border-t border-border/30">
      {/* Very subtle end-of-page organic shape */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-[30%] h-[40vh] w-[80vh] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195), transparent 70%)" }}
        />
      </div>

      <Container className="relative py-20">
        <Reveal>
          {/* Large KYP typography */}
          <div className="mb-16">
            <p className="font-serif text-5xl sm:text-7xl font-bold text-muted-foreground/10 tracking-tight leading-none">
              Know Your Pill
            </p>
          </div>

          {/* Links — minimal, single row */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-12">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h3 className="text-overline text-muted-foreground mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="text-body-sm text-foreground/60 transition-colors hover:text-brand"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-body-sm text-foreground/60 transition-colors hover:text-brand"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom — minimal */}
          <div className="flex flex-col gap-6 border-t border-border/20 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={imgPath("/logo-navy-128.png")}
                    alt="Know Your Pill logo"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/zammucanva/know-your-pill-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-brand"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:zammucanva@gmail.com"
                    aria-label="Email contact"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-brand"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-caption text-muted-foreground">
                © 2026 Know Your Pill · Zamaan Ali Shamji
              </p>
            </div>

            {/* Disclaimer — inline, not boxed */}
            <p className="text-caption text-muted-foreground/60 leading-relaxed max-w-3xl">
              <strong className="text-muted-foreground">Disclaimer:</strong> This website is for educational support only. It does not replace a doctor, pharmacist, emergency service, or local medical guideline. Always consult a qualified healthcare professional before making decisions about medication or substance use.
            </p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
