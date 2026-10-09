"use client";

import Link from "next/link";
import { ArrowRight, Brain, ListChecks } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { psychiatryStats, psychiatryDomains } from "@/lib/kyp/data/psychiatry-search-records.generated";

/**
 * PsychiatrySection — the homepage's entry point into the KYP Psychiatry
 * curriculum (109 lessons, 18 domains, 719 questions).
 *
 * Counts and domains come from the generated psychiatryStats /
 * psychiatryDomains exports (regenerated with the corpus by
 * scripts/generate-psychiatry-search-records.ts) — never hardcoded.
 * Domain chips deep-link to the library's chapter anchors.
 */
export function PsychiatrySection() {
  return (
    <Section id="psychiatry" className="relative overflow-hidden border-t border-border/30">
      {/* Ambient decoration — consistent with the drug hero */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-neural/10 blur-3xl kyp-drift"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="mb-14">
            <p className="text-overline text-brand mb-4">KYP Psychiatry</p>
            <h2
              className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[1.05] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              The complete psychiatry curriculum:{" "}
              {psychiatryStats.lessons} lessons, taught like medicine
            </h2>
            <p className="mt-5 max-w-2xl text-body text-muted-foreground leading-relaxed">
              Every topic is a six-lesson course: foundations, mechanism and
              neuroscience, clinical practice, the Indian context, exam
              revision and active recall, with {psychiatryStats.questions}{" "}
              authored self-test questions across{" "}
              {psychiatryStats.domains} clinical domains.
            </p>
          </div>
        </Reveal>

        {/* Domain map — deep links into the library chapters */}
        <Reveal delay={0.08}>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border/40 pt-6 sm:grid-cols-3 lg:grid-cols-4 xl:pl-2">
            {psychiatryDomains.map((d) => (
              <li key={d.letter}>
                <Link
                  href={`/psychiatry/library#group-${d.letter}`}
                  className="group flex items-baseline gap-2 rounded-md py-1.5 transition-colors hover:bg-muted/40"
                >
                  <span className="w-4 shrink-0 font-mono text-xs text-muted-foreground/50">
                    {d.letter}.
                  </span>
                  <span className="min-w-0 flex-1 truncate text-body-sm text-foreground/80 transition-colors group-hover:text-brand">
                    {d.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/psychiatry"
              className="group inline-flex items-center gap-2 rounded-lg kyp-glass bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
            >
              <Brain className="h-4 w-4" aria-hidden />
              Open KYP Psychiatry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/psychiatry/self-test"
              className="group inline-flex items-center gap-2 rounded-lg kyp-glass kyp-glass-refract border border-border bg-card/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              <ListChecks className="h-4 w-4" aria-hidden />
              Take a self-test
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
