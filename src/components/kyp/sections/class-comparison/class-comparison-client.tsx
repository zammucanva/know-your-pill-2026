"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, BookOpen, Info, Layers, Scale, ShieldAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/kyp/ui/badge";
import { Reveal } from "@/components/kyp/ui/reveal";
import { ConcernMatrix } from "./concern-matrix";
import {
  CONCERN_DEFINITIONS,
  buildComparisonMatrix,
  comparisonClasses,
  defaultConcernsFor,
  getComparisonClass,
  matrixToCards,
  sanitizeConcernIds,
} from "@/lib/kyp/concerns";
import type { ConcernId } from "@/lib/kyp/concerns";

/* ============================================================
   ClassComparisonClient — the interactive Choose-by-Concern body.
   ------------------------------------------------------------
   Flow: class selector → concern selector → matrix → sources →
   cross-links. State lives in the URL (?class=&concerns=) so any
   comparison is deep-linkable; the URL is a pure function of the
   selection and the selection a pure function of the URL.

   This is an EDUCATIONAL comparison: it shows how medications in
   a class DIFFER across documented concerns. It is not a
   prescribing algorithm, and it never ranks or recommends.
   ============================================================ */

const MAX_CONCERNS = 6;

function ClassComparisonBody() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ---- selection state, derived from the URL -------------------------
  const rawClass = searchParams.get("class") ?? "";
  const hasConcernsParam = searchParams.has("concerns");
  const cls = rawClass ? getComparisonClass(rawClass) : undefined;
  const classExists = rawClass !== "" && cls !== undefined;

  // Selected concerns, derived from the URL on every render (cheap,
  // pure, and intentionally not memoized — the React Compiler owns
  // memoization here).
  //   No concerns param yet → this class's deterministic defaults.
  //   Param present → the explicit selection (unknown ids dropped,
  //   order normalized), even when it is empty (show the prompt state).
  const concerns: ConcernId[] = (() => {
    if (!rawClass) return [];
    const classGroup = getComparisonClass(rawClass);
    if (!classGroup) return [];
    if (!hasConcernsParam) return defaultConcernsFor(classGroup.medications);
    return sanitizeConcernIds(
      (searchParams.get("concerns") ?? "").split(",").filter(Boolean)
    );
  })();

  const push = (nextClass: string, nextConcerns: ConcernId[]) => {
    const params = new URLSearchParams();
    if (nextClass) params.set("class", nextClass);
    params.set("concerns", nextConcerns.join(","));
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const selectClass = (id: string) => {
    if (id === rawClass) return;
    // switching class resets concerns to that class's defaults
    const next = getComparisonClass(id);
    push(id, next ? defaultConcernsFor(next.medications) : []);
  };

  const toggleConcern = (id: ConcernId) => {
    const has = concerns.includes(id);
    if (!has && concerns.length >= MAX_CONCERNS) return; // capped (button disabled)
    const next = has ? concerns.filter((c) => c !== id) : [...concerns, id];
    push(rawClass, next);
  };

  // ---- the matrix ----------------------------------------------------
  const rows = cls && concerns.length > 0 ? buildComparisonMatrix(cls, concerns) : [];
  const cards = matrixToCards(rows); // responsive data transformation (mobile)
  const selectedConcerns = CONCERN_DEFINITIONS.filter((c) => concerns.includes(c.id));
  const isSingleDrugClass = cls !== undefined && cls.medications.length === 1;

  return (
    <>
      {/* ================= STEP 1 — CLASS SELECTOR ================= */}
      <Reveal>
        <div className="mt-12">
          <p className="text-overline text-muted-foreground mb-3">
            Step 1 — choose a medication class
          </p>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Choose a medication class"
          >
            {comparisonClasses.map((c) => {
              const isSelected = c.id === rawClass;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectClass(c.id)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors kyp-focus-ring",
                    isSelected
                      ? "border-brand bg-brand-soft/50 text-brand"
                      : "border-border bg-background text-muted-foreground hover:border-brand/30 hover:text-foreground"
                  )}
                >
                  {c.label}
                  <span
                    className={cn(
                      "ml-1.5 tabular-nums",
                      isSelected ? "text-brand/70" : "text-muted-foreground/50"
                    )}
                  >
                    {c.medications.length}
                  </span>
                </button>
              );
            })}
          </div>
          {rawClass !== "" && !classExists && (
            <p className="mt-3 text-xs text-warning" role="alert">
              Unknown class &ldquo;{rawClass}&rdquo; — pick one from the list above.
            </p>
          )}
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground/60">
            {comparisonClasses.length} classes, derived live from the medication
            registry — counts are current members. Classes with a single
            medication show that medication&apos;s profile instead of a
            comparison.
          </p>
        </div>
      </Reveal>

      {/* ================= STEP 2 — CONCERN SELECTOR ================= */}
      {classExists && cls && (
        <Reveal delay={0.05}>
          <div className="mt-10">
            <p className="text-overline text-muted-foreground mb-3">
              Step 2 — choose one or more concerns ({concerns.length}/{MAX_CONCERNS})
            </p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Choose comparison concerns"
            >
              {CONCERN_DEFINITIONS.map((concern) => {
                const isSelected = concerns.includes(concern.id);
                const disabled =
                  !isSelected && concerns.length >= MAX_CONCERNS;
                return (
                  <button
                    key={concern.id}
                    type="button"
                    aria-pressed={isSelected}
                    disabled={disabled}
                    onClick={() => toggleConcern(concern.id)}
                    title={concern.question}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors kyp-focus-ring",
                      isSelected
                        ? "border-neural bg-neural-soft/50 text-neural"
                        : disabled
                          ? "cursor-not-allowed border-border/40 text-muted-foreground/30"
                          : "border-border bg-background text-muted-foreground hover:border-neural/30 hover:text-foreground"
                    )}
                  >
                    {concern.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground/60">
              {selectedConcerns.length > 0
                ? selectedConcerns.map((c) => c.blurb).join(" · ")
                : "Select at least one concern to build the matrix."}
            </p>
          </div>
        </Reveal>
      )}

      {/* ================= STEP 3 — THE MATRIX ================= */}
      {classExists && cls && (
        <Reveal delay={0.08}>
          <div className="mt-10" id="matrix">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-overline text-muted-foreground">Step 3 — how they differ</p>
                <h2
                  className="mt-1 font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.35rem, 3vw, 1.9rem)" }}
                >
                  {cls.fullName}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                {cls.medications.length}{" "}
                {cls.medications.length === 1 ? "medication" : "medications"} ·{" "}
                {concerns.length} {concerns.length === 1 ? "concern" : "concerns"}
              </p>
            </div>

            {cls.subgroups.length > 1 && (
              <p className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                <Layers className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden />
                Mechanism subgroups inside this class:
                {cls.subgroups.map((s) => (
                  <Badge key={s.label} variant="outline" size="sm">
                    {s.label} ({s.count})
                  </Badge>
                ))}
              </p>
            )}

            {isSingleDrugClass && (
              <div className="mb-5 rounded-xl border border-warning/30 bg-warning-soft/20 p-4">
                <p className="text-sm leading-relaxed text-foreground/90">
                  This class has <strong>one medication</strong> in the library —{" "}
                  {cls.medications[0].genericName}. A comparison needs at least two
                  medications, so below is its concern profile on its own. Every
                  other class with 2+ medications shows a true comparison.
                </p>
              </div>
            )}

            {concerns.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border/60 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Select at least one concern above to build the comparison matrix.
                </p>
              </div>
            ) : (
              <ConcernMatrix
                rows={rows}
                cards={cards}
                concerns={selectedConcerns}
                classLabel={cls.label}
              />
            )}

            {/* ===== Source & context ===== */}
            <div className="mt-10 max-w-3xl rounded-xl border border-border/60 bg-muted/10 p-5">
              <p className="flex items-center gap-2 text-overline text-brand mb-3">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                Where these values come from
              </p>
              <ul className="space-y-2.5">
                {selectedConcerns.map((concern) => (
                  <li key={concern.id} className="text-xs leading-relaxed text-foreground/80">
                    <span className="font-semibold">{concern.label}:</span>{" "}
                    {concern.basis}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Sources are the medications&apos; own reviewed pages — including the
                Stahl&apos;s Essential Psychopharmacology: The Prescriber&apos;s
                Guide layer (6th ed. 2017 for the 131 Stahl&apos;s medications,
                1st ed. 2005 for the original twelve) where present. Frequency
                bands and severity labels are the documented values, verbatim;
                concern matching is by documented effect names only. Cells with no
                matching entry show &ldquo;Data not available&rdquo; — absence of
                documentation is never read as absence of effect.
              </p>
            </div>

            {/* ===== Cross-links ===== */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Scale className="h-4 w-4" aria-hidden />
                Compare 2–3 specific medications
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                href="/interactions"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <ShieldAlert className="h-4 w-4" aria-hidden />
                Check specific interaction pairs
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      )}

      {/* ===== Empty state guidance ===== */}
      {!classExists && (
        <Reveal delay={0.05}>
          <div className="mt-10 rounded-xl border border-dashed border-border/60 p-8">
            <p className="flex items-center gap-2 text-overline text-muted-foreground mb-2">
              <Info className="h-3.5 w-3.5" aria-hidden />
              How this works
            </p>
            <ol className="ml-4 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Pick a class — say, Atypical Antipsychotics (19 medications).</li>
              <li>
                Pick the concerns that matter for your question — weight and
                metabolic impact, sedation, prolactin, EPS…
              </li>
              <li>
                Read the matrix: each cell is that medication&apos;s own
                documented adverse-effect entries for the concern, with frequency
                bands verbatim from its profile. Expand any row for the full
                verbatim entries and Prescriber&apos;s Guide notes.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
              The matrix shows <strong>how medications differ</strong> — never
              which is &ldquo;best&rdquo;. Every value traces back to a
              medication page; nothing is scored, ranked or invented.
            </p>
          </div>
        </Reveal>
      )}
    </>
  );
}

export function ClassComparisonClient() {
  return (
    <React.Suspense fallback={null}>
      <ClassComparisonBody />
    </React.Suspense>
  );
}
