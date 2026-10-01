"use client";

import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Info,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { drugTaxonomyClasses } from "@/lib/kyp/data/drug-taxonomy";
import type { Drug } from "@/lib/kyp/data/types";
import {
  checkInteractions,
  SEVERITY_LABEL,
  severityRank,
  type InteractionSeverity,
  type PairFinding,
} from "@/lib/kyp/interactions/engine";

/**
 * /interactions — the Interaction Checker (Phase 4, prescription help).
 *
 * Pick 2–6 medications and see every interaction the library's own
 * drug profiles list BETWEEN them — pairwise, both directions,
 * verbatim.
 *
 * Data rules (non-negotiable, same as /compare):
 *   - every finding is a VERBATIM entry from one of the selected
 *     drug's own `interactions[]` arrays — severity, mechanism and
 *     action are copied as written, never merged or re-graded;
 *   - matching is by identity only (generic name, brand names,
 *     pharmacological class) with word boundaries, so "diazepam"
 *     never matches "clonazepam";
 *   - pairs with NOTHING listed degrade honestly to "nothing in our
 *     library" — never to "safe to combine";
 *   - this is an educational reference, NOT a complete interaction
 *     database — the disclaimer says so, prominently.
 */

const MIN_SELECTION = 2;
const MAX_SELECTION = 6;

const SEVERITY_STYLE: Record<InteractionSeverity, string> = {
  contraindicated:
    "border-emergency/40 bg-emergency/10 text-emergency",
  major: "border-warning/40 bg-warning/10 text-warning",
  moderate: "border-brand/40 bg-brand-soft/30 text-brand",
  minor: "border-border bg-muted/40 text-muted-foreground",
};

const SEVERITY_ROW: Record<InteractionSeverity, string> = {
  contraindicated: "border-l-emergency",
  major: "border-l-warning",
  moderate: "border-l-brand",
  minor: "border-l-border",
};

const SEVERITY_WORD: Record<InteractionSeverity, string> = {
  contraindicated: "contraindicated combinations",
  major: "major interactions",
  moderate: "moderate interactions",
  minor: "minor interactions",
};

function SeverityBadge({ severity }: { severity: InteractionSeverity }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide",
        SEVERITY_STYLE[severity]
      )}
    >
      {severity === "contraindicated" || severity === "major" ? (
        <AlertTriangle className="h-3 w-3" aria-hidden />
      ) : (
        <Info className="h-3 w-3" aria-hidden />
      )}
      {SEVERITY_LABEL[severity]}
    </span>
  );
}

/** One verbatim finding, shown under its pair heading. */
function FindingCard({ finding }: { finding: PairFinding }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/50 border-l-2 bg-background/60 p-4",
        SEVERITY_ROW[finding.severity]
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <SeverityBadge severity={finding.severity} />
        <span className="text-xs text-muted-foreground">
          Listed as: <span className="font-medium text-foreground/80">{finding.listedAs}</span>
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        <span className="font-semibold text-foreground">Why: </span>
        {finding.mechanism}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">
        <span className="font-semibold text-foreground">What to do: </span>
        {finding.action}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        Verbatim from{" "}
        <Link
          href={`/drugs/${finding.sourceSlug}`}
          className="font-medium text-brand hover:underline"
        >
          {finding.sourceName}&apos;s profile
        </Link>
        {finding.matchedVia === "drug-class" && (
          <span className="text-muted-foreground/70">
            {" "}
            · matched by drug class
          </span>
        )}
        {finding.matchedVia === "brand-name" && (
          <span className="text-muted-foreground/70">
            {" "}
            · matched by brand name
          </span>
        )}
      </p>
    </div>
  );
}

export default function InteractionsPage() {
  const [selected, setSelected] = React.useState<string[]>([]);

  // ?drug={slug} deep link (learning chain: a medication page's
  // interactions section links here with that drug preselected — the
  // user then picks the second medication). Validated against the
  // canonical registry; unknown slugs are ignored. Read once on mount
  // from window.location — no useSearchParams, so no Suspense boundary
  // is required for static export.
  React.useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("drug");
    if (param && drugs.some((d) => d.slug === param)) {
      setSelected((prev) => (prev.includes(param) ? prev : [...prev, param]));
    }
  }, []);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_SELECTION) return prev;
      return [...prev, slug];
    });
  };

  const clearAll = () => setSelected([]);

  const selectedDrugs = React.useMemo(
    () =>
      selected
        .map((slug) => drugs.find((d) => d.slug === slug))
        .filter((d): d is Drug => Boolean(d)),
    [selected]
  );

  const enough = selectedDrugs.length >= MIN_SELECTION;

  const result = React.useMemo(
    () => (enough ? checkInteractions(selectedDrugs) : null),
    [enough, selectedDrugs]
  );

  const counts = React.useMemo(() => {
    const c: Record<InteractionSeverity, number> = {
      contraindicated: 0,
      major: 0,
      moderate: 0,
      minor: 0,
    };
    for (const f of result?.findings ?? []) c[f.severity] += 1;
    return c;
  }, [result]);

  const totalPairs = result
    ? result.pairs.length + result.unmatchedPairs.length
    : 0;

  /** Findings grouped per pair, worst pair first — findings are already sorted. */
  const grouped = React.useMemo(() => {
    if (!result) return [];
    const groups: {
      key: string;
      aName: string;
      bName: string;
      aSlug: string;
      bSlug: string;
      findings: PairFinding[];
    }[] = [];
    const index = new Map<string, number>();
    for (const f of result.findings) {
      const key = `${f.aSlug}::${f.bSlug}`;
      let i = index.get(key);
      if (i === undefined) {
        groups.push({
          key,
          aName: f.aName,
          bName: f.bName,
          aSlug: f.aSlug,
          bSlug: f.bSlug,
          findings: [],
        });
        i = groups.length - 1;
        index.set(key, i);
      }
      groups[i].findings.push(f);
    }
    return groups;
  }, [result]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Link href="/drugs" className="hover:text-brand">
                  Medication Library
                </Link>
                <span aria-hidden>›</span>
                <span className="font-medium text-foreground">Interaction Checker</span>
              </nav>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Check interactions
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Pick two to six medications and see every interaction their
                own pages list between them — what it does, why it happens,
                and what to do about it. Every entry is copied verbatim from
                the medication pages; nothing is invented.
              </p>
            </Reveal>

            {/* The safety frame — before anything else */}
            <Reveal delay={0.03}>
              <div className="mt-8 max-w-3xl rounded-xl border border-emergency/30 bg-emergency/5 p-4">
                <p className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/85">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-emergency" aria-hidden />
                  <span>
                    <span className="font-semibold text-emergency">
                      This checker is an educational reference, not a
                      complete interaction database.
                    </span>{" "}
                    It surfaces only what the selected medications&apos; own
                    reviewed pages say about each other. Never start, stop or
                    change a combination because of what you read here —
                    confirm with your doctor or pharmacist. If someone is
                    unwell right now, seek emergency care first.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* Selection */}
            <Reveal delay={0.05}>
              <div className="mt-10">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-overline text-muted-foreground">
                    Choose {MIN_SELECTION}–{MAX_SELECTION} medications
                  </p>
                  {selected.length > 0 && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-xs font-medium text-muted-foreground hover:text-brand"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                {drugTaxonomyClasses.map((cls) => (
                  <div key={cls.id} className="mb-5">
                    <p className="mb-2 text-xs font-semibold text-muted-foreground/70">
                      {cls.fullName}
                    </p>
                    <div
                      className="flex flex-wrap gap-2"
                      role="group"
                      aria-label={`Select from ${cls.label}`}
                    >
                      {cls.medications.map((med) => {
                        const isSelected = selected.includes(med.slug);
                        const disabled =
                          !isSelected && selected.length >= MAX_SELECTION;
                        return (
                          <button
                            key={med.slug}
                            type="button"
                            onClick={() => toggle(med.slug)}
                            aria-pressed={isSelected}
                            disabled={disabled}
                            className={cn(
                              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors kyp-focus-ring",
                              isSelected
                                ? "border-brand bg-brand-soft/50 text-brand"
                                : disabled
                                  ? "cursor-not-allowed border-border/40 text-muted-foreground/30"
                                  : "border-border bg-background text-muted-foreground hover:border-brand/30 hover:text-foreground"
                            )}
                          >
                            {med.genericName}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  {selected.length === 0
                    ? `Select at least ${MIN_SELECTION} medications to check.`
                    : selected.length === 1
                      ? "One more to go — pick at least two."
                      : `${selected.length} selected${selected.length < MAX_SELECTION ? " — you can add more" : " — that's the maximum"}.`}
                </p>
              </div>
            </Reveal>

            {/* The check */}
            {result && enough && (
              <Reveal delay={0.08}>
                <div className="mt-12" aria-live="polite">
                  <p className="text-overline text-muted-foreground mb-4">
                    Results — {totalPairs} pair{totalPairs === 1 ? "" : "s"} checked
                  </p>

                  {/* Summary banner */}
                  <div
                    className={cn(
                      "mb-8 max-w-3xl rounded-xl border p-5",
                      counts.contraindicated > 0
                        ? "border-emergency/40 bg-emergency/5"
                        : counts.major > 0
                          ? "border-warning/40 bg-warning/5"
                          : "border-border/60 bg-muted/30"
                    )}
                  >
                    {result.findings.length === 0 ? (
                      <p className="text-sm leading-relaxed text-foreground/90">
                        Nothing listed between these medications in our
                        library. That is not the same as &ldquo;safe to
                        combine&rdquo; — it means our pages carry no entry for
                        these exact pairs. Confirm with your doctor or
                        pharmacist.
                      </p>
                    ) : (
                      <p className="text-sm leading-relaxed text-foreground/90">
                        <span className="font-semibold">
                          {result.findings.length} interaction
                          {result.findings.length === 1 ? "" : "s"} listed
                          between these medications:
                        </span>{" "}
                        {(
                          ["contraindicated", "major", "moderate", "minor"] as InteractionSeverity[]
                        )
                          .filter((s) => counts[s] > 0)
                          .map((s) => `${counts[s]} ${SEVERITY_WORD[s]}`)
                          .join(" · ")}
                        .
                        {counts.contraindicated > 0 && (
                          <span className="mt-2 block font-medium text-emergency">
                            At least one combination is listed as
                            contraindicated — these medications must not be
                            taken together without specialist advice.
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Pair groups, worst first */}
                  {grouped.length > 0 && (
                    <div className="space-y-6">
                      {grouped.map((g) => (
                        <div
                          key={g.key}
                          className="rounded-xl border border-border/60 p-5"
                        >
                          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <h2 className="font-serif text-lg font-semibold text-foreground">
                              <Link
                                href={`/drugs/${g.aSlug}`}
                                className="hover:text-brand"
                              >
                                {g.aName}
                              </Link>
                              <span className="mx-2 text-muted-foreground/60" aria-hidden>
                                ×
                              </span>
                              <Link
                                href={`/drugs/${g.bSlug}`}
                                className="hover:text-brand"
                              >
                                {g.bName}
                              </Link>
                            </h2>
                            <SeverityBadge
                              severity={
                                g.findings.reduce(
                                  (worst, f) =>
                                    severityRank(f.severity) > severityRank(worst)
                                      ? f.severity
                                      : worst,
                                  "minor" as InteractionSeverity
                                )
                              }
                            />
                          </div>
                          <div className="space-y-3">
                            {g.findings.map((f, i) => (
                              <FindingCard key={`${f.sourceSlug}-${i}`} finding={f} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Honest gaps */}
                  {result.unmatchedPairs.length > 0 && (
                    <div className="mt-8 max-w-3xl rounded-xl border border-border/50 bg-muted/20 p-5">
                      <p className="flex items-center gap-2 text-overline text-muted-foreground mb-3">
                        <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                        Nothing listed between these pairs
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.unmatchedPairs.map((u) => (
                          <span
                            key={`${u.aSlug}-${u.bSlug}`}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {u.aName} × {u.bName}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
                        Our pages carry no interaction entry for these exact
                        pairs. &ldquo;Not listed&rdquo; is not
                        &ldquo;safe&rdquo; — a pharmacist or doctor checks
                        against complete databases we do not replace.
                      </p>
                    </div>
                  )}

                  <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                    Every finding is copied verbatim from the selected
                    medications&apos; reviewed pages — severities are never
                    re-graded, mechanisms never rewritten. Matching is by
                    generic name, brand name or drug class.
                  </p>

                  {/* Cross-link to compare */}
                  <p className="mt-4 text-xs text-muted-foreground">
                    Want mechanisms and side-effect profiles side by side
                    instead?{" "}
                    <Link href="/compare" className="font-medium text-brand hover:underline">
                      Compare medications
                      <ArrowRight className="ml-1 inline h-3 w-3" aria-hidden />
                    </Link>
                  </p>
                </div>
              </Reveal>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
