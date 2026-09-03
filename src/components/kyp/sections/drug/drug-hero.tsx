import * as React from "react";
import { Pill, AlertTriangle, Clock, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Badge } from "@/components/kyp/ui/badge";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { drugClasses } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugHero — the canonical hero for every drug page.
 *
 * Server Component — no client interactivity needed.
 * Renders: learning path breadcrumb, drug class badge, generic + brand names,
 * tagline, summary, read time + yield badges, clinical identity card.
 */
interface DrugHeroProps {
  drug: Drug;
}

export function DrugHero({ drug }: DrugHeroProps) {
  const drugClass = drugClasses[drug.drugClass];

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* Ambient decoration — subtle, not dominant */}
<Container className="relative">
        {/* Learning path breadcrumb */}
        <div className="mb-4">
          <LearningPath path={drug.learningPath} />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Main copy */}
          <div>
            {/* Drug class + meta — single line, low emphasis */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="brand" size="sm">
                <Pill className="h-2.5 w-2.5" />
                {drug.drugClassLabel}
              </Badge>
              <span className="text-muted-foreground/70">{drug.drugClassFullName}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {drug.estimatedReadTime}
              </span>
              {drug.yieldRating === "high" && (
                <span className="inline-flex items-center gap-1 text-neural">
                  <Star className="h-2.5 w-2.5 fill-current" />
                  High yield
                </span>
              )}
            </div>

            {/* H1 — dominates the hero */}
            <h1 className="mt-3 text-display text-foreground leading-[1.05]">{drug.genericName}</h1>

            {/* Brand names — low emphasis, single line */}
            {drug.brandNames.length > 0 && (
              <p className="mt-1 text-sm text-muted-foreground">
                {drug.brandNames.join(" · ")}
              </p>
            )}

            {/* Tagline — the hook, medium weight */}
            <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">
              {drug.tagline}
            </p>

            {/* Summary — smaller, supporting context */}
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              {drug.summary}
            </p>

            {/* Black box warning — compact, urgent */}
            {drug.blackBoxWarnings.length > 0 && (
              <a
                href="#contraindications"
                className="mt-5 flex items-start gap-2.5 rounded-lg border border-emergency/30 bg-emergency-soft/30 p-3 transition-colors hover:border-emergency/50 hover:bg-emergency-soft/50"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
                <div>
                  <p className="text-body-sm font-semibold text-foreground">
                    Black Box Warning
                  </p>
                  <p className="mt-0.5 text-caption text-muted-foreground">
                    {drug.blackBoxWarnings[0].title} — tap to read full warning.
                  </p>
                </div>
              </a>
            )}
          </div>

          {/* Side card — clinical identity, grouped for scannability */}
          <aside className="rounded-xl border border-border/70 bg-card p-4 shadow-[var(--shadow-card)]">
            {/* Identity */}
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Identity</p>
              <dl className="mt-2 space-y-1.5 text-xs">
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground">Generic</dt>
                  <dd className="font-medium text-foreground">{drug.genericName}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-right font-medium text-foreground">{drug.brandNames.join(", ")}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground">Class</dt>
                  <dd className={cn("font-medium", drugClass?.accentClass ?? "text-brand")}>
                    {drug.drugClassLabel}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="my-3 h-px bg-border/50" />

            {/* Pharmacology */}
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Pharmacology</p>
              <dl className="mt-2 space-y-2 text-xs">
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground shrink-0">Target</dt>
                  <dd className="text-right font-medium text-foreground">{drug.mechanism.molecularTarget}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground shrink-0">Half-life</dt>
                  <dd className="text-right font-medium text-foreground">{drug.mechanism.halfLife}</dd>
                </div>
                {/* Metabolism is often a long paragraph — stack label above value */}
                <div>
                  <dt className="text-muted-foreground">Metabolism</dt>
                  <dd className="mt-1 font-medium text-foreground leading-relaxed text-left">
                    {drug.mechanism.metabolism}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="my-3 h-px bg-border/50" />

            {/* Clinical */}
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Clinical</p>
              <dl className="mt-2 space-y-1.5 text-xs">
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    FDA indications
                  </dt>
                  <dd className="font-medium text-foreground">
                    {drug.indications.filter((i) => i.status === "fda-approved").length}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Last reviewed
                  </dt>
                  <dd className="font-medium text-foreground">
                    {new Date(drug.lastReviewed).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
