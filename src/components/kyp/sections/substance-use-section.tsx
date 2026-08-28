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
    <Section id="substances" className="bg-muted/15 relative overflow-hidden">
      {/* Subtle organic shape — cooler, calmer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-[10%] top-[20%] h-[40vh] w-[40vh] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.16 280), transparent 70%)" }}
        />
      </div>

      <Container className="relative">
        {/* Editorial heading */}
        <Reveal>
          <div className="mb-12">
            <p className="text-overline text-neural mb-3">Substance Use Education</p>
            <h2 className="font-serif text-h1 font-semibold tracking-tight text-foreground max-w-3xl">
              How psychoactive substances alter the brain
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-2xl leading-relaxed">
              Each module covers receptor pharmacology, intoxication features, withdrawal timelines, complications, and emergency guidance. Three modules are fully built; the rest are being migrated.
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 overflow-x-auto kyp-scroll pb-2 mb-8">
            {drugClassFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
                  active === f.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Editorial substance index — not cards */}
        <div className="divide-y divide-border/20">
          {filtered.map((sub, i) => {
            const dc = drugClasses[sub.drugClass];
            return (
              <Reveal key={sub.id} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={sub.href}
                  className="group flex items-start gap-4 sm:gap-6 py-6 transition-all duration-300"
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-muted-foreground/40 tabular-nums hidden sm:block w-6 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Molecule image — small, editorial */}
                  {sub.artwork && (
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sub.artwork}
                        alt={sub.artworkAlt ?? `${sub.name} molecule`}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                        {sub.name}
                      </h3>
                      <span className={cn("text-[0.65rem] uppercase tracking-wide", dc?.accentClass)}>
                        {dc?.name}
                      </span>
                    </div>
                    <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed max-w-xl">
                      {sub.description}
                    </p>
                    <p className="mt-1.5 text-[0.65rem] text-muted-foreground/50 font-medium">
                      {sub.neurotransmitter}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1 mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Development note */}
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
