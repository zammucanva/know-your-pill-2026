"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { medicationClasses, categories } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative overflow-hidden bg-muted/10">
      <Container>
        {/* Editorial heading */}
        <Reveal>
          <div className="mb-20">
            <p className="text-overline text-brand mb-4">Medication Library</p>
            <h2
              className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[1.05] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Twelve psychiatric medications, structured the same way
            </h2>
            <p className="mt-5 text-body text-muted-foreground max-w-2xl leading-relaxed">
              Each drug page covers mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, patient education, and a real clinical case.
            </p>
          </div>
        </Reveal>

        {/* Featured: Psychiatric Medications — massive block */}
        <Reveal delay={0.08}>
          <Link
            href={medicationClasses[0].href}
            className="group block mb-16"
          >
            <div className="flex items-end justify-between gap-6 border-b border-border/30 pb-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground/40 mb-2">01 — Primary</p>
                <h3
                  className="font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                >
                  {medicationClasses[0].title}
                </h3>
                <p className="mt-3 text-body-sm text-muted-foreground max-w-xl leading-relaxed">
                  {medicationClasses[0].description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {medicationClasses[0].chips.map((chip) => (
                    <span key={chip} className="text-xs text-foreground/40 font-medium">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground/30 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
            </div>
          </Link>
        </Reveal>

        {/* Secondary categories — text entries, no cards */}
        <div className="space-y-0">
          {medicationClasses.slice(1).map((med, i) => (
            <Reveal key={med.id} delay={0.12 + i * 0.06}>
              <Link
                href={med.href}
                className="group flex items-center gap-6 py-5 border-b border-border/15 last:border-0 transition-all duration-300"
              >
                <span className="font-mono text-xs text-muted-foreground/30 w-8">
                  {med.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-serif text-lg font-semibold text-foreground">
                      {med.title}
                    </h4>
                    {med.comingSoon && (
                      <span className="text-[0.6rem] uppercase tracking-wide text-muted-foreground/50">Soon</span>
                    )}
                  </div>
                  <p className="mt-0.5 text-body-sm text-muted-foreground/70">
                    {med.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Clinical subcategories */}
        <Reveal delay={0.24}>
          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-overline text-muted-foreground mb-4">
              Browse psychiatric medications by clinical area
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href="#library"
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground/50 transition-colors hover:text-brand"
                >
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30 group-hover:bg-brand" />
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
