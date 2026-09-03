"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Callout } from "@/components/kyp/ui/callout";
import { Reveal } from "@/components/kyp/ui/reveal";
import { substances, drugClassFilters, drugClasses } from "@/lib/kyp/data";
import type { DrugClassId } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

export function SubstanceUseSection() {
  const [active, setActive] = React.useState<DrugClassId | "all">("all");

  const filtered = React.useMemo(() => {
    if (active === "all") return substances;
    return substances.filter((s) => s.drugClass === active);
  }, [active]);

  return (
    <Section id="substances" className="bg-muted/20 relative overflow-hidden">
      {/* Cool organic shape */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
      </div>

      <Container className="relative">
        <Reveal>
          <div className="mb-12">
            <p className="text-overline text-neural mb-4">Substance Use Education</p>
            <h2
              className="font-sans font-semibold tracking-[-0.03em] text-foreground leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              How psychoactive substances alter the brain
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-2xl leading-relaxed">
              Each module covers receptor pharmacology, intoxication features, withdrawal timelines, complications, and emergency guidance. Three modules are fully built; the rest are being migrated.
            </p>
          </div>
        </Reveal>

        {/* Filter — minimal text buttons */}
        <Reveal delay={0.08}>
          <div className="flex items-center gap-4 overflow-x-auto kyp-scroll pb-2 mb-6">
            {drugClassFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  "shrink-0 text-xs font-medium transition-colors pb-1 border-b-2",
                  active === f.id
                    ? "text-foreground border-brand"
                    : "text-muted-foreground/50 border-transparent hover:text-foreground/70"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Editorial substance index — numbered, no cards */}
        <div>
          {filtered.map((sub, i) => {
            const dc = drugClasses[sub.drugClass];
            return (
              <Reveal key={sub.id} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={sub.href}
                  className="group flex items-center gap-4 sm:gap-6 py-5 border-b border-border/15 transition-all duration-300 hover:pl-2"
                >
                  {/* Number */}
                  <span className="font-sans text-2xl sm:text-3xl font-bold text-muted-foreground/15 tabular-nums shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Molecule image — small, floating */}
                  {sub.artwork && (
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sub.artwork}
                        alt={sub.artworkAlt ?? `${sub.name} molecule`}
                        className="h-full w-full object-contain opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <h3 className="font-sans text-lg sm:text-xl font-semibold text-foreground">
                        {sub.name}
                      </h3>
                      <span className={cn("text-[0.6rem] uppercase tracking-wide hidden sm:inline", dc?.accentClass)}>
                        {dc?.name}
                      </span>
                    </div>
                    <p className="mt-0.5 text-body-sm text-muted-foreground/70 leading-relaxed max-w-xl line-clamp-1">
                      {sub.description}
                    </p>
                  </div>

                  {/* Neurotransmitter — micro text */}
                  <span className="text-[0.6rem] text-muted-foreground/40 hidden sm:block shrink-0">
                    {sub.neurotransmitter}
                  </span>

                  {/* Arrow */}
                  <svg
                    className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <Callout variant="info" title="Also in development">
              <p className="text-xs text-muted-foreground">
                ICD-10 clinical pattern pages for acute intoxication and withdrawal states are planned. They will cover diagnosis, symptom timelines, and management across all substance classes.
              </p>
            </Callout>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
