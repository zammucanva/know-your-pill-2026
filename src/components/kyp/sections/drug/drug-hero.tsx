import * as React from "react";
import { Pill, AlertTriangle, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Badge } from "@/components/kyp/ui/badge";
import { drugClasses } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugHero — the canonical hero for every drug page.
 *
 * Server Component — no client interactivity needed.
 * Renders: brand mark, drug class badge, generic + brand names,
 * tagline, summary, key meta (last reviewed, drug class).
 */
interface DrugHeroProps {
  drug: Drug;
}

export function DrugHero({ drug }: DrugHeroProps) {
  const drugClass = drugClasses[drug.drugClass];

  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl kyp-drift" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-neural/20 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />

      <Container className="relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <li>
              <a href="/" className="hover:text-brand">Home</a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/#library" className="hover:text-brand">Medications</a>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-foreground">{drug.genericName}</li>
          </ol>
        </nav>

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
