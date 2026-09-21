"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Columns3, Info } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { drugs } from "@/lib/kyp/data";
import { drugTaxonomyClasses } from "@/lib/kyp/data/drug-taxonomy";
import type { Drug } from "@/lib/kyp/data/types";

/**
 * /compare — side-by-side medication comparison (NEXT-X3).
 *
 * Pick 2–3 medications and see them across mechanism, side-effect
 * profile (with frequency bands), interactions, monitoring and
 * clinical use — ending in a "when to choose which" takeaway.
 *
 * Data rules (non-negotiable, same as the whole product):
 *   - every cell is a VERBATIM value from the selected drug's own
 *     data (mechanism, side effects with frequency bands,
 *     interactions, monitoring, indications) or from the existing
 *     comparison-table schema on its page;
 *   - no synthesized comparison claims — if a combination has no
 *     comparison table, the takeaway degrades to an honest "not in
 *     the library yet" note instead of invented guidance;
 *   - missing cells show "Data not available" rather than a guess.
 */

const MIN_SELECTION = 2;
const MAX_SELECTION = 3;

type Frequency = "very-common" | "common" | "uncommon" | "rare" | "unknown";

const FREQUENCY_LABEL: Record<Frequency, string> = {
  "very-common": "Very common",
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  unknown: "Unknown frequency",
};

/** Prettified frequency band for display (band itself stays verbatim). */
function band(frequency: string): string {
  return FREQUENCY_LABEL[frequency as Frequency] ?? "Unknown frequency";
}

/** One comparison dimension row. */
interface CompareRow {
  /** Row label. */
  attribute: string;
  /** One cell per selected drug, in selection order. */
  cells: string[];
}

function buildRows(selected: Drug[]): CompareRow[] {
  const rows: CompareRow[] = [];
  const push = (attribute: string, cells: string[]) => {
    rows.push({ attribute, cells });
  };
  const list = (drug: Drug, key: "commonSideEffects" | "seriousSideEffects", n: number, withBand: boolean) =>
    drug[key].slice(0, n).map((s) => (withBand ? `${s.name} (${band(s.frequency)})` : s.name)).join(" · ") || "Data not available";

  push("Class", selected.map((d) => d.drugClassFullName || "Data not available"));
  push("Primary target", selected.map((d) => d.mechanism.molecularTarget || "Data not available"));
  push("Net effect", selected.map((d) => d.mechanism.effect || "Data not available"));
  push("Half-life", selected.map((d) => d.mechanism.halfLife || "Data not available"));
  push(
    "Common side effects (with frequency bands)",
    selected.map((d) => list(d, "commonSideEffects", 4, true))
  );
  push(
    "Serious side effects",
    selected.map((d) => list(d, "seriousSideEffects", 3, false))
  );
  push(
    "Key interactions",
    selected.map(
      (d) =>
        d.interactions.slice(0, 3).map((i) => `${i.drug} (${i.severity})`).join(" · ") ||
        "Data not available"
    )
  );
  push(
    "Monitoring",
    selected.map(
      (d) => d.monitoring.slice(0, 3).map((m) => m.parameter).join(" · ") || "Data not available"
    )
  );
  push(
    "FDA-approved uses",
    selected.map(
      (d) =>
        d.indications.filter((i) => i.status === "fda-approved").slice(0, 5).map((i) => i.name).join(" · ") ||
        "Data not available"
    )
  );
  push(
    "When NOT to use",
    selected.map(
      (d) =>
        (d.whenNotToUse ?? []).slice(0, 3).map((w) => w.scenario).join(" · ") ||
        "Data not available"
    )
  );
  return rows;
}

/**
 * Rows from the existing comparison-table schema: any table on a
 * selected drug's page that involves at least two of the selected
 * drugs. Values are verbatim; attributes already covered above are
 * not duplicated.
 */
function buildTableRows(selected: Drug[]): CompareRow[] {
  if (selected.length < MIN_SELECTION) return [];
  const names = new Set(selected.map((d) => d.genericName));
  const covered = new Set(buildRows(selected).map((r) => r.attribute.toLowerCase()));
  const byName = new Map(selected.map((d) => [d.genericName, d]));
  const rows: CompareRow[] = [];
  const seenAttributes = new Set<string>();

  for (const drug of selected) {
    for (const table of drug.comparisonTables ?? []) {
      const involvesPrimary = names.has(table.primaryDrug);
      const row = table.rows[0];
      if (!involvesPrimary || !row) continue;
      const involved = row.comparisons.filter((c) => names.has(c.drug));
      if (involved.length < 1) continue; // nobody else from the selection
      for (const r of table.rows) {
        const attr = r.attribute.toLowerCase();
        if (covered.has(attr) || seenAttributes.has(attr)) continue;
        seenAttributes.add(attr);
        rows.push({
          attribute: r.attribute,
          cells: selected.map((d) => {
            if (d.genericName === table.primaryDrug) return r.primaryValue;
            const match = r.comparisons.find((c) => c.drug === d.genericName);
            return match?.value ?? "Data not available";
          }),
        });
      }
    }
  }
  // Only keep rows where at least one selected drug actually has a value
  // from this table set — pure dedupe, no synthesis.
  return rows.filter((r) => r.cells.some((c) => c !== "Data not available"));
}

/**
 * The "when to choose which" takeaway — verbatim from a matching
 * comparison table, or an honest degradation when the library has no
 * guidance for this combination.
 */
function findTakeaway(selected: Drug[]): { text: string; source: string } | null {
  const names = new Set(selected.map((d) => d.genericName));
  for (const drug of selected) {
    for (const table of drug.comparisonTables ?? []) {
      if (!names.has(table.primaryDrug)) continue;
      const row = table.rows[0];
      if (!row) continue;
      const others = row.comparisons.filter((c) => names.has(c.drug));
      if (others.length >= 1 && table.takeaway) {
        return { text: table.takeaway, source: `${table.primaryDrug}'s comparison guide` };
      }
    }
  }
  return null;
}

export default function ComparePage() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_SELECTION) return prev; // max 3 — swap nothing silently
      return [...prev, slug];
    });
  };

  const selectedDrugs = selected
    .map((slug) => drugs.find((d) => d.slug === slug))
    .filter((d): d is Drug => Boolean(d));

  const enough = selectedDrugs.length >= MIN_SELECTION;
  const rows = enough ? buildRows(selectedDrugs) : [];
  const tableRows = enough ? buildTableRows(selectedDrugs) : [];
  const takeaway = enough ? findTakeaway(selectedDrugs) : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/study" className="hover:text-brand">Study Mode</Link>
                <span aria-hidden>›</span>
                <span className="font-medium text-foreground">Compare</span>
              </nav>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Compare medications
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Pick two or three medications and see them side by side —
                mechanism, side-effect profile, interactions, monitoring and
                clinical use — ending in a choosing takeaway. Every value is
                taken verbatim from the medication pages; nothing is invented.
              </p>
            </Reveal>

            {/* Selection */}
            <Reveal delay={0.05}>
              <div className="mt-10">
                <p className="text-overline text-muted-foreground mb-3">
                  Choose {MIN_SELECTION}–{MAX_SELECTION} medications
                </p>
                {drugTaxonomyClasses.map((cls) => (
                  <div key={cls.id} className="mb-5">
                    <p className="mb-2 text-xs font-semibold text-muted-foreground/70">
                      {cls.fullName}
                    </p>
                    <div className="flex flex-wrap gap-2" role="group" aria-label={`Select from ${cls.label}`}>
                      {cls.medications.map((med) => {
                        const isSelected = selected.includes(med.slug);
                        const disabled = !isSelected && selected.length >= MAX_SELECTION;
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
                    ? `Select ${MIN_SELECTION} or ${MAX_SELECTION} medications to compare.`
                    : selected.length === 1
                      ? "One more to go — pick at least two."
                      : `${selected.length} selected${selected.length < MAX_SELECTION ? " — you can add one more" : ""}.`}
                </p>
              </div>
            </Reveal>

            {/* The comparison */}
            {enough && (
              <Reveal delay={0.08}>
                <div className="mt-12">
                  <p className="text-overline text-muted-foreground mb-4">
                    Side by side
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-border/60">
                    <table className="w-full min-w-[640px] border-collapse text-sm">
                      <caption className="sr-only">
                        Comparison of {selectedDrugs.map((d) => d.genericName).join(", ")} — values verbatim from their medication pages.
                      </caption>
                      <thead>
                        <tr className="border-b border-border/60 bg-muted/40">
                          <th scope="col" className="sticky left-0 z-10 bg-muted/40 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            &nbsp;
                          </th>
                          {selectedDrugs.map((d) => (
                            <th key={d.slug} scope="col" className="px-4 py-3 text-left">
                              <Link
                                href={`/drugs/${d.slug}`}
                                className="font-serif text-base font-semibold text-foreground hover:text-brand"
                              >
                                {d.genericName}
                              </Link>
                              <span className="ml-2 text-xs font-normal text-muted-foreground">
                                {d.drugClassLabel}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr key={row.attribute} className="border-b border-border/30 align-top last:border-0">
                            <th scope="row" className="sticky left-0 z-10 bg-background px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                              {row.attribute}
                            </th>
                            {row.cells.map((cell, i) => (
                              <td
                                key={i}
                                className={cn(
                                  "px-4 py-3 leading-relaxed [overflow-wrap:anywhere]",
                                  cell === "Data not available" && "text-muted-foreground/50 italic"
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                        {tableRows.map((row) => (
                          <tr key={`t-${row.attribute}`} className="border-b border-border/30 bg-muted/10 align-top last:border-0">
                            <th scope="row" className="sticky left-0 z-10 bg-muted/10 px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                              {row.attribute}
                              <span className="mt-0.5 block text-[0.6rem] font-normal text-muted-foreground/60">
                                from comparison tables
                              </span>
                            </th>
                            {row.cells.map((cell, i) => (
                              <td
                                key={i}
                                className={cn(
                                  "px-4 py-3 leading-relaxed [overflow-wrap:anywhere]",
                                  cell === "Data not available" && "text-muted-foreground/50 italic"
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* The takeaway — verbatim from the comparison-table
                      schema, or an honest degradation. */}
                  <div className="mt-8 max-w-3xl rounded-xl border border-brand/40 bg-brand-soft/20 p-5">
                    <p className="flex items-center gap-2 text-overline text-brand mb-3">
                      <Columns3 className="h-3.5 w-3.5" aria-hidden />
                      When to choose which
                    </p>
                    {takeaway ? (
                      <>
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {takeaway.text}
                        </p>
                        <p className="mt-3 text-xs text-muted-foreground/70">
                          Verbatim from {takeaway.source} — the library&apos;s own
                          choosing guidance for this combination.
                        </p>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        No choosing guide exists in the library for this exact
                        combination yet — the rows above are each
                        medication&apos;s own page data. The
                        &ldquo;When NOT to use&rdquo; row carries each
                        medication&apos;s own avoidance notes verbatim.
                      </p>
                    )}
                  </div>

                  <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                    Every cell is copied verbatim from the selected medications&apos;
                    reviewed content — values are never merged, averaged or
                    inferred. Empty cells mean the library does not carry that
                    datum for that medication.
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
