"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { medicationClasses, categories } from "@/lib/kyp/data";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative overflow-hidden">
      <Container>
        {/* Editorial section heading */}
        <Reveal>
          <div className="mb-16">
            <p className="text-overline text-brand mb-3">Medication Library</p>
            <h2 className="font-serif text-h1 font-semibold tracking-tight text-foreground max-w-3xl">
              Twelve psychiatric medications, structured the same way
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-2xl leading-relaxed">
              Each drug page covers mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, patient education, and a real clinical case.
            </p>
          </div>
        </Reveal>

        {/* Editorial index — not cards */}
        <div className="divide-y divide-border/30">
          {medicationClasses.map((med, i) => {
            const Icon = med.icon;
            return (
              <Reveal key={med.id} delay={i * 0.06}>
                <Link
                  href={med.href}
                  className="group flex items-center gap-6 py-8 transition-all duration-300 hover:px-4"
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-muted-foreground/50 tabular-nums hidden sm:block w-8">
                    {med.number}
                  </span>

                  {/* Icon */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft/30 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        {med.title}
                      </h3>
                      {med.featured && (
                        <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-brand bg-brand-soft/40 px-2 py-0.5 rounded-full">
                          Live
                        </span>
                      )}
                      {med.comingSoon && (
                        <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-full">
                          Soon
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-body-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {med.description}
                    </p>
                    {/* Chips */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {med.chips.map((chip) => (
                        <span
                          key={chip}
                          className="text-[0.65rem] text-muted-foreground/60 font-medium"
                        >
                          {chip}{med.chips.indexOf(chip) < med.chips.length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground/30 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Clinical subcategories */}
        <Reveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-overline text-muted-foreground mb-4">
              Browse psychiatric medications by clinical area
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href="#library"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/30 px-4 py-2 text-sm font-medium text-foreground/60 transition-all duration-200 hover:border-brand/40 hover:bg-transparent hover:text-brand"
                >
                  <cat.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand" />
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
