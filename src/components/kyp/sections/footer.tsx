"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";

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
      { label: "Categories", href: "#categories" },
      { label: "Medication Library", href: "#library" },
      { label: "Substance Use", href: "#substances" },
      { label: "NeuroArcade", href: "#neuroarcade" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Emergency", href: "#emergency" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-card/40">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.5fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/logo-navy-128.png"
                  alt="Know Your Pill logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </span>
              <div className="flex flex-col leading-none">
                <strong className="font-serif text-base font-semibold">Know Your Pill</strong>
                <small className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Medication Education · Visual
                </small>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-body-sm text-muted-foreground leading-relaxed">
              A medication reference that explains how drugs work in the brain, what side effects
              to watch for, and when to seek help. Written for patients, caregivers, and medical
              students. Not a substitute for professional medical advice.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://github.com/zammucanva/know-your-pill-2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:zammucanva@gmail.com"
                aria-label="Email contact"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h3 className="text-overline text-muted-foreground">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="text-body-sm text-foreground/80 transition-colors hover:text-brand"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-body-sm text-foreground/80 transition-colors hover:text-brand"
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
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-border/70 bg-muted/30 p-4">
          <p className="text-caption text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> This website is for
            educational support only. It does not replace a doctor, pharmacist, emergency service,
            or local medical guideline. Always consult a qualified healthcare professional before
            making decisions about medication or substance use.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center">
          <p className="text-caption text-muted-foreground">
            © 2026 Know Your Pill · Designed &amp; built by Zamaan Ali Shamji
          </p>
          <p className="text-caption text-muted-foreground">
            Built with Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
      </Container>
    </footer>
  );
}
