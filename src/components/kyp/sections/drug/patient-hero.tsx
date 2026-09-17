"use client";

import * as React from "react";
import { Pill, AlertTriangle, Clock, ShieldCheck, Star } from "lucide-react";
import { Badge } from "@/components/kyp/ui/badge";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { drugClasses } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";
import { PATIENT_HERO_LABELS } from "@/lib/kyp/patient/labels";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import type { Drug } from "@/lib/kyp/data";

/**
 * Patient-aware hero copy and identity card.
 *
 * In Patient mode these render plain-language content from the
 * PatientGuide layer; in every other mode they render exactly the
 * canonical clinical hero (the same markup DrugHero always used).
 *
 * Client components (they read the guided-learning mode from the
 * persisted store, the same mechanism GuidedLearningVisibility uses).
 */

interface HeroCopyProps {
  drug: Drug;
  guide?: PatientGuide;
}

export function HeroCopy({ drug, guide }: HeroCopyProps) {
  const mode = useGuidedLearning((s) => s.mode);
  const isPatient = mode === "patient" && guide !== undefined;
  const drugClass = drugClasses[drug.drugClass];

  if (!isPatient) {
    // Medical variant — identical to the canonical hero copy.
    return (
      <>
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

        <h1 className="mt-3 text-display text-foreground leading-[1.05]">{drug.genericName}</h1>

        {drug.brandNames.length > 0 && (
          <p className="mt-1 text-sm text-muted-foreground">{drug.brandNames.join(" · ")}</p>
        )}

        <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">{drug.tagline}</p>

        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">{drug.summary}</p>

        {drug.blackBoxWarnings.length > 0 && (
          <a
            href="#contraindications"
            className="mt-5 flex items-start gap-2.5 rounded-lg border border-emergency/30 bg-emergency-soft/30 p-3 transition-colors hover:border-emergency/50 hover:bg-emergency-soft/50"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
            <div>
              <p className="text-body-sm font-semibold text-foreground">Black Box Warning</p>
              <p className="mt-0.5 text-caption text-muted-foreground">
                {drug.blackBoxWarnings[0].title} — tap to read full warning.
              </p>
            </div>
          </a>
        )}
      </>
    );
  }

  // Patient variant — plain language, exam metadata removed, safety kept strong.
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="brand" size="sm">
          <Pill className="h-2.5 w-2.5" />
          {drug.drugClassLabel}
        </Badge>
        <span className="text-muted-foreground/70">{drug.drugClassFullName}</span>
        <span className="text-muted-foreground/40">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {PATIENT_HERO_LABELS.readTime}
        </span>
      </div>

      <h1 className="mt-3 text-display text-foreground leading-[1.05]">{drug.genericName}</h1>

      {drug.brandNames.length > 0 && (
        <p className="mt-1 text-sm text-muted-foreground">{drug.brandNames.join(" · ")}</p>
      )}

      <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">
        {guide!.whatIsThis}
      </p>

      <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
        {drug.patientMode.summary}
      </p>

      {drug.blackBoxWarnings.length > 0 && (
        <a
          href="#patient-education"
          className="mt-5 flex items-start gap-2.5 rounded-lg border border-emergency/30 bg-emergency-soft/30 p-3 transition-colors hover:border-emergency/50 hover:bg-emergency-soft/50"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
          <div>
            <p className="text-body-sm font-semibold text-foreground">Important safety warning</p>
            <p className="mt-0.5 text-caption text-muted-foreground">
              {drug.blackBoxWarnings[0].title} — tap to read the warning in the guide below.
            </p>
          </div>
        </a>
      )}
    </>
  );
}

interface HeroIdentityCardProps {
  drug: Drug;
  guide?: PatientGuide;
}

export function HeroIdentityCard({ drug, guide }: HeroIdentityCardProps) {
  const mode = useGuidedLearning((s) => s.mode);
  const isPatient = mode === "patient" && guide !== undefined;
  const drugClass = drugClasses[drug.drugClass];

  if (!isPatient) {
    // Medical variant — the canonical clinical identity card.
    return (
      <aside className="rounded-xl border border-border/70 bg-card p-4 shadow-[var(--shadow-soft)]">
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
              <dd className={cn("font-medium", drugClass?.accentClass ?? "text-brand")}>{drug.drugClassLabel}</dd>
            </div>
          </dl>
        </div>

        <div className="my-3 h-px bg-border/50" />

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
            <div>
              <dt className="text-muted-foreground">Metabolism</dt>
              <dd className="mt-1 font-medium text-foreground leading-relaxed text-left">
                {drug.mechanism.metabolism}
              </dd>
            </div>
          </dl>
        </div>

        <div className="my-3 h-px bg-border/50" />

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
    );
  }

  // Patient variant — plain-language at-a-glance card.
  const topUses = guide!.usedFor.uses.slice(0, 3).map((u) => u.name);
  return (
    <aside className="rounded-xl border border-border/70 bg-card p-4 shadow-[var(--shadow-soft)]">
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
          {PATIENT_HERO_LABELS.identity}
        </p>
        <dl className="mt-2 space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Generic name</dt>
            <dd className="font-medium text-foreground">{drug.genericName}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">{PATIENT_HERO_LABELS.brands}</dt>
            <dd className="text-right font-medium text-foreground">{drug.brandNames.join(", ")}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Type</dt>
            <dd className="font-medium text-brand-ink">{drug.drugClassLabel}</dd>
          </div>
        </dl>
      </div>

      <div className="my-3 h-px bg-border/50" />

      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
          {PATIENT_HERO_LABELS.whatToExpect}
        </p>
        <dl className="mt-2 space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">{PATIENT_HERO_LABELS.timeToNotice}</dt>
            <dd className="text-right font-medium text-foreground">{guide!.timelineShort}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">{PATIENT_HERO_LABELS.usuallyTaken}</dt>
            <dd className="text-right font-medium text-foreground">{guide!.usuallyTaken}</dd>
          </div>
        </dl>
      </div>

      <div className="my-3 h-px bg-border/50" />

      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
          Used for
        </p>
        <p className="mt-2 text-xs font-medium text-foreground leading-relaxed">{topUses.join(", ")}</p>
      </div>

      <div className="my-3 h-px bg-border/50" />

      <p className="text-xs text-muted-foreground leading-relaxed">
        {PATIENT_HERO_LABELS.plainLanguageNote}{" "}
        <a href="#patient-education" className="text-brand-ink underline underline-offset-2">
          Read the full guide below.
        </a>
      </p>
    </aside>
  );
}
