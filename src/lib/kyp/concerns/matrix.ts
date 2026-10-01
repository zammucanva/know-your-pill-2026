import { drugs } from "../data/drugs/index";
import type { Drug, DrugClassId } from "../data/types";
import type { ComparisonClass, ComparisonRow, ConcernCell, ConcernId } from "./types";
import { CONCERN_ORDER } from "./definitions";
import { normalizeConcernCell } from "./normalize";

/* ============================================================
   Class comparison dataset (Phase 5)
   ------------------------------------------------------------
   DERIVED, NEVER DUPLICATED — the same pattern as
   src/lib/kyp/data/drug-taxonomy.ts:

   - classes are grouped by the EXISTING DrugClassId taxonomy
     (drug.drugClass) — no second class taxonomy is created;
   - members are REFERENCES into the canonical registry
     (./drugs/index.ts), so a registry change re-flows this
     dataset, the class selector and every matrix automatically;
   - display labels are derived: the most frequent drugClassLabel
     and drugClassFullName among members (ties → first occurrence
     in registry order) — deterministic, never hand-written;
   - no hardcoded drug lists anywhere.

   One-drug classes are retained and selectable: the UI shows the
   single medication's concern profile with an honest "a comparison
   needs two medications" note instead of pretending to compare.
   ============================================================ */

/** Group the canonical registry by the existing DrugClassId taxonomy. */
function deriveComparisonClasses(): ComparisonClass[] {
  const byId = new Map<DrugClassId, Drug[]>();
  for (const drug of drugs) {
    const group = byId.get(drug.drugClass);
    if (group) {
      group.push(drug);
    } else {
      byId.set(drug.drugClass, [drug]);
    }
  }

  const classes: ComparisonClass[] = [];
  for (const [id, medications] of byId) {
    classes.push({
      id,
      ...mostFrequentLabelAndFullName(medications),
      subgroups: subgroupsOf(medications),
      medications,
    });
  }

  // Deterministic order: largest class first; ties → id alphabetical.
  classes.sort((a, b) => {
    if (b.medications.length !== a.medications.length) {
      return b.medications.length - a.medications.length;
    }
    return a.id.localeCompare(b.id);
  });
  return classes;
}

/**
 * Most frequent label / full name among members; ties resolved by
 * first occurrence in registry order (which is stable — the registry
 * array order never changes between builds).
 */
function mostFrequentLabelAndFullName(
  medications: Drug[]
): { label: string; fullName: string } {
  const tally = (read: (d: Drug) => string): string => {
    const counts = new Map<string, number>();
    for (const drug of medications) {
      const value = read(drug);
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    let winner: { value: string; count: number; firstSeen: number } | undefined;
    for (const [value, count] of counts) {
      const firstSeen = medications.findIndex((d) => read(d) === value);
      if (
        !winner ||
        count > winner.count ||
        (count === winner.count && firstSeen < winner.firstSeen)
      ) {
        winner = { value, count, firstSeen };
      }
    }
    return winner!.value;
  };
  return {
    label: tally((d) => d.drugClassLabel),
    fullName: tally((d) => d.drugClassFullName),
  };
}

/** Distinct mechanism labels inside the class, count desc then alphabetical. */
function subgroupsOf(medications: Drug[]): { label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const drug of medications) {
    counts.set(drug.drugClassLabel, (counts.get(drug.drugClassLabel) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** All comparison classes, derived from the canonical registry. */
export const comparisonClasses: ComparisonClass[] = deriveComparisonClasses();

/** Look up one comparison class by its existing taxonomy id. */
export function getComparisonClass(id: string): ComparisonClass | undefined {
  return comparisonClasses.find((c) => c.id === id);
}

/** All class ids — for URL validation and the selector. */
export function getComparisonClassIds(): string[] {
  return comparisonClasses.map((c) => c.id);
}

/**
 * Validate + sanitize a raw concerns parameter (e.g. from a URL):
 * unknown ids dropped, duplicates removed, order normalized to the
 * curated definition order. Deterministic for any input.
 */
export function sanitizeConcernIds(raw: string[]): ConcernId[] {
  const valid = new Set<string>(CONCERN_ORDER);
  const seen = new Set<ConcernId>();
  for (const id of raw) {
    if (valid.has(id)) seen.add(id as ConcernId);
  }
  return CONCERN_ORDER.filter((id) => seen.has(id));
}

/**
 * Build the comparison matrix for a class × selected concerns.
 *
 * Rows: every member of the class, registry order (no ranking —
 * the order medications appear in is the registry's own order).
 * Cells: one normalized ConcernCell per selected concern, in the
 * curated concern order (not user click order) so the matrix is
 * stable regardless of how the concerns were selected.
 */
export function buildComparisonMatrix(
  cls: ComparisonClass,
  concernIds: ConcernId[]
): ComparisonRow[] {
  const ordered = sanitizeConcernIds(concernIds);
  return cls.medications.map((drug) => ({
    drug,
    cells: ordered.map((concernId) => normalizeConcernCell(drug, concernId)),
  }));
}

/**
 * Responsive data transformation: the same rows, re-shaped for the
 * mobile stacked-card layout — one card per medication with its
 * concern cells. Pure derivation from the matrix (tested).
 */
export interface ComparisonCard {
  drug: Drug;
  cells: ConcernCell[];
}

export function matrixToCards(rows: ComparisonRow[]): ComparisonCard[] {
  return rows.map((row) => ({ drug: row.drug, cells: row.cells }));
}
