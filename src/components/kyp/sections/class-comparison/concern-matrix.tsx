"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/kyp/ui/badge";
import type {
  ConcernCell,
  ConcernDefinition,
  ComparisonCard,
  ComparisonRow,
} from "@/lib/kyp/concerns";
import { FREQUENCY_LABEL, SEVERITY_LABEL } from "@/lib/kyp/concerns";

/* ============================================================
   ConcernMatrix — the comparison matrix (Phase 5).
   ------------------------------------------------------------
   Desktop (md+): a table with a sticky first column inside a
   contained horizontal-scroll wrapper (never page-wide overflow).
   Mobile: the SAME normalized cells re-shaped into stacked cards
   (matrixToCards data transformation) — no horizontal scrolling.

   Rows are registry order — NO ranking, no "best" markers. Every
   cell renders its documented frequency band; every value expands
   to the verbatim source entries.
   ============================================================ */

const severityBadgeVariant = {
  mild: "outline",
  moderate: "warning",
  severe: "danger",
  "life-threatening": "emergency",
} as const;

const frequencyBadgeVariant = {
  "very-common": "default",
  common: "default",
  uncommon: "outline",
  rare: "outline",
  unknown: "outline",
} as const;

/** A compact concern cell: headline + first entry names. */
function CompactCell({ cell }: { cell: ConcernCell }) {
  if (!cell.available) {
    return (
      <div className="py-2">
        <p className="text-xs italic text-muted-foreground/75">Data not available</p>
        <p className="mt-0.5 hidden text-[0.65rem] leading-snug text-muted-foreground/40 md:block">
          not listed in this profile
        </p>
      </div>
    );
  }
  const names =
    cell.entries.length > 0
      ? cell.entries.slice(0, 2).map((e) => e.name)
      : cell.monitoringItems
        ? cell.monitoringItems.slice(0, 3).map((m) => m.parameter)
        : cell.interactionItems
          ? cell.interactionItems.slice(0, 3).map((i) => i.drug)
          : [];
  return (
    <div className="py-2">
      {cell.entries.length > 0 ? (
        <Badge variant={frequencyBadgeVariant[cell.entries[0].frequency]} size="sm">
          {cell.headline}
        </Badge>
      ) : (
        <Badge variant="outline" size="sm">
          {cell.headline}
        </Badge>
      )}
      {names.length > 0 && (
        <ul className="mt-1.5 space-y-0.5">
          {names.map((n) => (
            <li key={n} className="text-[0.7rem] leading-snug text-foreground/80">
              {n}
            </li>
          ))}
          {cell.entries.length > 2 && (
            <li className="text-[0.7rem] text-muted-foreground/60">
              +{cell.entries.length - 2} more
            </li>
          )}
          {cell.monitoringItems && cell.monitoringItems.length > 3 && (
            <li className="text-[0.7rem] text-muted-foreground/60">
              +{cell.monitoringItems.length - 3} more
            </li>
          )}
          {cell.interactionItems && cell.interactionItems.length > 3 && (
            <li className="text-[0.7rem] text-muted-foreground/60">
              +{cell.interactionItems.length - 3} more
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

/** The expanded per-medication detail: verbatim entries for every selected concern. */
function DetailBlock({
  drug,
  cells,
  concerns,
}: {
  drug: ComparisonCard["drug"];
  cells: ConcernCell[];
  concerns: ConcernDefinition[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {concerns.map((concern) => {
        const cell = cells.find((c) => c.concernId === concern.id);
        if (!cell) return null;
        return (
          <div
            key={concern.id}
            className="rounded-lg border border-border/50 bg-background p-4"
          >
            <p className="text-overline text-muted-foreground">{concern.label}</p>
            {!cell.available && (
              <p className="mt-2 text-xs italic text-muted-foreground/60">
                Data not available — no entry in this medication&apos;s documented
                adverse-effect profile matches this concern. This may reflect
                absence of effect or absence of documented data; see the{" "}
                <Link
                  href={`/drugs/${drug.slug}`}
                  className="font-medium text-brand hover:underline"
                >
                  medication page
                </Link>
                .
              </p>
            )}
            {cell.available && (
              <>
                {cell.entries.length > 0 && (
                  <ul className="mt-2 space-y-2.5">
                    {cell.entries.map((entry) => (
                      <li key={`${entry.list}-${entry.name}`}>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-semibold text-foreground">
                            {entry.name}
                          </span>
                          <Badge variant={frequencyBadgeVariant[entry.frequency]} size="sm">
                            {FREQUENCY_LABEL[entry.frequency]}
                          </Badge>
                          <Badge variant={severityBadgeVariant[entry.severity]} size="sm">
                            {SEVERITY_LABEL[entry.severity]}
                          </Badge>
                          <span className="text-[0.65rem] text-muted-foreground/75">
                            {entry.list === "common" ? "common list" : "serious list"}
                          </span>
                        </div>
                        <p className="mt-1 text-[0.7rem] leading-relaxed text-muted-foreground">
                          {entry.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                {cell.prescriberNote && (
                  <p className="mt-3 rounded-md bg-brand-soft/20 px-3 py-2 text-[0.7rem] leading-relaxed text-foreground/80">
                    <span className="font-semibold">Prescriber&apos;s Guide note:</span>{" "}
                    {cell.prescriberNote}
                  </p>
                )}
                {cell.monitoringItems && cell.monitoringItems.length > 0 && (
                  <ul className="mt-2 space-y-2">
                    {cell.monitoringItems.map((m) => (
                      <li key={m.parameter} className="text-[0.7rem] leading-relaxed">
                        <span className="font-semibold text-foreground">{m.parameter}</span>
                        <span className="text-muted-foreground"> — {m.frequency}</span>
                        <span className="block text-muted-foreground/70">{m.rationale}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {cell.interactionItems && cell.interactionItems.length > 0 && (
                  <ul className="mt-2 space-y-2">
                    {cell.interactionItems.map((i) => (
                      <li key={i.drug} className="text-[0.7rem] leading-relaxed">
                        <span className="font-semibold text-foreground">{i.drug}</span>
                        <span className="text-muted-foreground"> — {i.action}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 text-[0.65rem] leading-snug text-muted-foreground/75">
                  {cell.basis}
                </p>
              </>
            )}
          </div>
        );
      })}
      <p className="text-[0.65rem] leading-snug text-muted-foreground/40 md:col-span-2">
        All values are copied verbatim from {drug.genericName}&apos;s own reviewed
        profile — the common/serious adverse-effect lists, monitoring list,
        interaction list and Prescriber&apos;s Guide layer. Nothing is merged,
        averaged, scored or inferred across medications.
      </p>
    </div>
  );
}

export interface ConcernMatrixProps {
  /** Desktop table rows (registry order). */
  rows: ComparisonRow[];
  /** The same data re-shaped for mobile — matrixToCards(rows). */
  cards: ComparisonCard[];
  concerns: ConcernDefinition[];
  /** The class label, used in the table caption. */
  classLabel: string;
}

export function ConcernMatrix({ cards, concerns, classLabel }: ConcernMatrixProps) {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  return (
    <>
      {/* ===== Desktop table (md+) — contained horizontal scroll ===== */}
      <div className="hidden md:block">
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <caption className="sr-only">
              {classLabel} compared across {concerns.map((c) => c.label).join(", ")} —
              every value verbatim from each medication&apos;s own profile, in
              registry order (no ranking).
            </caption>
            <thead>
              <tr className="border-b border-border/60 bg-muted/40">
                <th
                  scope="col"
                  className="sticky left-0 z-10 min-w-[180px] bg-muted/40 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Medication
                </th>
                {concerns.map((concern) => (
                  <th
                    key={concern.id}
                    scope="col"
                    className="min-w-[150px] px-4 py-3 text-left"
                  >
                    <span className="block text-xs font-semibold text-foreground">
                      {concern.label}
                    </span>
                    <span className="mt-0.5 block max-w-[220px] text-[0.65rem] font-normal leading-snug text-muted-foreground/70">
                      {concern.blurb}
                    </span>
                  </th>
                ))}
                <th scope="col" className="w-10 px-2 py-3">
                  <span className="sr-only">Expand</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => {
                const isOpen = expanded === card.drug.slug;
                return (
                  <React.Fragment key={card.drug.slug}>
                    <tr
                      className={cn(
                        "border-b border-border/30 align-top transition-colors",
                        isOpen ? "bg-brand-soft/10" : "cursor-pointer hover:bg-muted/20"
                      )}
                      onClick={() => !isOpen && setExpanded(card.drug.slug)}
                    >
                      <th scope="row" className="sticky left-0 z-10 bg-background px-4 py-3 text-left">
                        <Link
                          href={`/drugs/${card.drug.slug}`}
                          className="font-serif text-sm font-semibold text-foreground hover:text-brand"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {card.drug.genericName}
                        </Link>
                        <span className="mt-0.5 block text-[0.65rem] text-muted-foreground/60">
                          {card.drug.drugClassLabel}
                          {card.drug.drugClassLabel !== classLabel && " · subgroup"}
                        </span>
                      </th>
                      {card.cells.map((cell) => (
                        <td
                          key={cell.concernId}
                          className="px-4 py-2 align-top [overflow-wrap:anywhere]"
                        >
                          <CompactCell cell={cell} />
                        </td>
                      ))}
                      <td className="px-2 py-3">
                        <button
                          type="button"
                          aria-label={isOpen ? `Collapse ${card.drug.genericName} details` : `Expand ${card.drug.genericName} details`}
                          aria-expanded={isOpen}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpanded(isOpen ? null : card.drug.slug);
                          }}
                          className="rounded-md p-1 text-muted-foreground/50 transition-colors hover:bg-muted/40 hover:text-foreground kyp-focus-ring"
                        >
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4" aria-hidden />
                          ) : (
                            <ChevronRight className="h-4 w-4" aria-hidden />
                          )}
                        </button>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="border-b border-border/30 bg-muted/10">
                        <td colSpan={concerns.length + 2} className="px-4 py-4">
                          <DetailBlock drug={card.drug} cells={card.cells} concerns={concerns} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Mobile: stacked cards — the same normalized cells ===== */}
      <div className="space-y-4 md:hidden">
        {cards.map((card) => {
          const isOpen = expanded === card.drug.slug;
          return (
            <div key={card.drug.slug} className="rounded-xl border border-border/60 bg-card">
              <div className="flex items-start justify-between gap-3 border-b border-border/30 p-4">
                <div className="min-w-0">
                  <Link
                    href={`/drugs/${card.drug.slug}`}
                    className="font-serif text-base font-semibold text-foreground hover:text-brand"
                  >
                    {card.drug.genericName}
                  </Link>
                  <p className="mt-0.5 text-[0.65rem] text-muted-foreground/60">
                    {card.drug.drugClassLabel}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={isOpen ? `Collapse ${card.drug.genericName} details` : `Expand ${card.drug.genericName} details`}
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : card.drug.slug)}
                  className="shrink-0 rounded-md p-1.5 text-muted-foreground/60 transition-colors hover:bg-muted/40 hover:text-foreground kyp-focus-ring"
                >
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  ) : (
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  )}
                </button>
              </div>
              <dl className="divide-y divide-border/20">
                {card.cells.map((cell, i) => (
                  <div key={cell.concernId} className="px-4 py-3">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground/70">
                      {concerns[i]?.label}
                    </dt>
                    <dd className="mt-1">
                      <CompactCell cell={cell} />
                    </dd>
                  </div>
                ))}
              </dl>
              {isOpen && (
                <div className="border-t border-border/30 p-4">
                  <DetailBlock drug={card.drug} cells={card.cells} concerns={concerns} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground/60">
        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        Tap any medication name to open its full guide; tap the chevron to expand
        the verbatim source entries behind every cell. Rows appear in registry
        order — the library deliberately does not rank or recommend.
      </p>
    </>
  );
}
