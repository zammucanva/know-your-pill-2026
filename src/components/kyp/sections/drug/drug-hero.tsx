import * as React from "react";
import { Pill, AlertTriangle, Clock, ShieldCheck, Star, Zap } from "lucide-react";
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
 * Renders: learning path breadcrumb, brand mark, drug class badge,
 * generic + brand names, tagline, summary, read time + difficulty +
 * yield badges, key meta (last reviewed, drug class).
 */
interface DrugHeroProps {
  drug: Drug;
}

const yieldBadgeVariant = {
  low: { variant: "outline" as const, label: "Low Yield" },
  medium: { variant: "warning" as const, label: "Medium Yield" },
  high: { variant: "neural" as const, label: "★ High Yield" },
};

export function DrugHero({ drug }: DrugHeroProps) {
  const drugClass = drugClasses[drug.drugClass];
  const ybv = yieldBadgeVariant[drug.yieldRating];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl kyp-drift" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-neural/20 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />

      <Container className="relative">
        {/* Learning path breadcrumb (NEW) */}
        <div className="mb-6">
          <LearningPath path={drug.learningPath} />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Main copy */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" size="md">
                <Pill className="h-3 w-3" />
                {drug.drugClassLabel}
              </Badge>
              <span className="text-caption text-muted-foreground">
                {drug.drugClassFullName}
              </span>
            </div>

            {/* Read time + difficulty + yield badges (NEW) */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <Clock className="h-3 w-3" />
                {drug.estimatedReadTime}
              </span>
              <Badge variant={ybv.variant} size="sm">
                {drug.yieldRating === "high" && <Star className="h-2.5 w-2.5" />}
                {ybv.label}
              </Badge>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <Zap className="h-3 w-3" />
                {drug.primaryAudience === "patient" ? "Patient level" :
                 drug.primaryAudience === "medical" ? "MBBS / NEET-PG" :
                 drug.primaryAudience === "resident" ? "Resident level" :
                 "Clinician level"}
              </span>
            </div>

            <h1 className="mt-4 text-display text-foreground">{drug.genericName}</h1>

            {/* Brand names */}
            {drug.brandNames.length > 0 && (
              <p className="mt-2 text-body-lg text-muted-foreground">
                Sold under the brand name{drug.brandNames.length > 1 ? "s" : ""}{" "}
                <strong className="text-foreground">{drug.brandNames.join(", ")}</strong>
              </p>
            )}

            <p className="mt-5 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
              {drug.tagline}
            </p>

            {/* Summary */}
            <p className="mt-4 max-w-2xl text-body text-muted-foreground leading-relaxed">
              {drug.summary}
            </p>

            {/* Black box warning callout */}
            {drug.blackBoxWarnings.length > 0 && (
              <a
                href="#contraindications"
                className="mt-6 flex items-start gap-3 rounded-xl border border-emergency/30 bg-emergency-soft/40 p-4 transition-colors hover:border-emergency/50 hover:bg-emergency-soft/60"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-emergency" />
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

          {/* Side card — quick identity */}
          <aside className="rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)]">
            <h2 className="text-overline text-muted-foreground">At a glance</h2>
            <dl className="mt-3 space-y-3 text-body-sm">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted-foreground">Generic name</dt>
                <dd className="font-medium text-foreground">{drug.genericName}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted-foreground">Drug class</dt>
                <dd>
                  <span className={cn("font-medium", drugClass?.accentClass ?? "text-brand")}>
                    {drug.drugClassLabel}
                  </span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted-foreground">Molecular target</dt>
                <dd className="text-right font-medium text-foreground">
                  {drug.mechanism.molecularTarget}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted-foreground">Half-life</dt>
                <dd className="font-medium text-foreground">{drug.mechanism.halfLife}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
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
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  FDA indications
                </dt>
                <dd className="font-medium text-foreground">
                  {drug.indications.filter((i) => i.status === "fda-approved").length}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
