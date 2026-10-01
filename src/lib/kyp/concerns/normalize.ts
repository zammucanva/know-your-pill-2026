import type { Drug } from "../data/types";
import type {
  ConcernCell,
  ConcernDefinition,
  ConcernId,
  EffectFrequency,
  EffectSeverity,
  ConcernMatchedEntry,
} from "./types";
import { CONCERN_DEFINITIONS, PRESCRIBER_NOTE_PLACEHOLDERS, getConcernDefinition } from "./definitions";

/* ============================================================
   Concern normalization — the deterministic adapter (Phase 5)
   ------------------------------------------------------------
   (drug, concern) → ConcernCell — pure functions, no UI, no
   invented values. Three adapters, one per ConcernKind:

     effect        scan the drug's DOCUMENTED adverse-effect entries
                   (common + serious lists) for entries whose NAME
                   matches the concern's patterns; order matches
                   deterministically (frequency → severity → name);
                   headline = the documented frequency band of the
                   highest-frequency match, prettified only.

     monitoring    copy the drug's monitoring parameters verbatim;
                   headline = the count.

     interactions  copy the drug's interaction entries verbatim;
                   headline = tallies by documented severity.

   Prescriber's Guide one-liners (weightGain / sedation) are shown
   verbatim when informative; the three placeholder strings that
   carry no drug-specific data are filtered deterministically.

   When nothing matches: available = false → the UI renders
   "Data not available".
   ============================================================ */

/** Prettified label for a canonical frequency band (band itself stays verbatim). */
export const FREQUENCY_LABEL: Record<EffectFrequency, string> = {
  "very-common": "Very common",
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  unknown: "Unknown frequency",
};

/** Prettified label for a canonical severity band. */
export const SEVERITY_LABEL: Record<EffectSeverity, string> = {
  mild: "Mild",
  moderate: "Moderate",
  severe: "Severe",
  "life-threatening": "Life-threatening",
};

/** Deterministic rank: higher number = more frequent / more severe. */
const FREQUENCY_RANK: Record<EffectFrequency, number> = {
  "very-common": 4,
  common: 3,
  uncommon: 2,
  rare: 1,
  unknown: 0,
};

const SEVERITY_RANK: Record<EffectSeverity, number> = {
  mild: 1,
  moderate: 2,
  severe: 3,
  "life-threatening": 4,
};

/** The Prescriber's Guide one-liner is data only when it is not a placeholder. */
function informativePrescriberNote(
  drug: Drug,
  field: "weightGain" | "sedation"
): string | undefined {
  const note = drug.prescriberGuide?.[field];
  if (!note) return undefined;
  return PRESCRIBER_NOTE_PLACEHOLDERS.includes(note) ? undefined : note;
}

/** Collect the medication's documented entries that match a concern, deterministically ordered. */
function matchEffectEntries(drug: Drug, def: ConcernDefinition): ConcernMatchedEntry[] {
  const patterns = def.patterns ?? [];
  const matches: ConcernMatchedEntry[] = [];
  const scan = (list: "common" | "serious") => {
    const source = list === "common" ? drug.commonSideEffects : drug.seriousSideEffects;
    for (const entry of source) {
      if (patterns.some((rx) => rx.test(entry.name))) {
        matches.push({
          name: entry.name,
          frequency: entry.frequency,
          severity: entry.severity,
          list,
          description: entry.description,
        });
      }
    }
  };
  scan("common");
  scan("serious");
  // Deterministic order: most frequent first, then most severe, then
  // common-list before serious-list, then alphabetical name.
  matches.sort((a, b) => {
    const f = FREQUENCY_RANK[b.frequency] - FREQUENCY_RANK[a.frequency];
    if (f !== 0) return f;
    const s = SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
    if (s !== 0) return s;
    if (a.list !== b.list) return a.list === "common" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  return matches;
}

function effectCell(drug: Drug, def: ConcernDefinition): ConcernCell {
  const entries = matchEffectEntries(drug, def);
  const prescriberNote = def.prescriberNoteField
    ? informativePrescriberNote(drug, def.prescriberNoteField)
    : undefined;
  const available = entries.length > 0 || prescriberNote !== undefined;

  let headline: string;
  if (entries.length > 0) {
    headline = FREQUENCY_LABEL[entries[0].frequency];
  } else if (prescriberNote !== undefined) {
    headline = "Prescriber's Guide note";
  } else {
    headline = "Data not available";
  }

  return {
    concernId: def.id,
    slug: drug.slug,
    available,
    headline,
    entries,
    ...(prescriberNote !== undefined ? { prescriberNote } : {}),
    basis: def.basis,
  };
}

function monitoringCell(drug: Drug, def: ConcernDefinition): ConcernCell {
  const items = drug.monitoring.map((m) => ({
    parameter: m.parameter,
    frequency: m.frequency,
    rationale: m.rationale,
  }));
  return {
    concernId: def.id,
    slug: drug.slug,
    available: items.length > 0,
    headline:
      items.length > 0
        ? `${items.length} parameter${items.length === 1 ? "" : "s"}`
        : "Data not available",
    entries: [],
    ...(items.length > 0 ? { monitoringItems: items } : {}),
    basis: def.basis,
  };
}

function interactionsCell(drug: Drug, def: ConcernDefinition): ConcernCell {
  const items = drug.interactions.map((i) => ({
    drug: i.drug,
    severity: i.severity,
    action: i.action,
  }));
  const tally = (severity: string): number =>
    items.filter((i) => i.severity === severity).length;
  const parts: string[] = [];
  const contraindicated = tally("contraindicated");
  const major = tally("major");
  const moderate = tally("moderate");
  const minor = tally("minor");
  if (contraindicated > 0) parts.push(`${contraindicated} contraindicated`);
  if (major > 0) parts.push(`${major} major`);
  if (moderate > 0) parts.push(`${moderate} moderate`);
  if (minor > 0) parts.push(`${minor} minor`);
  const headline =
    items.length === 0
      ? "Data not available"
      : parts.length > 0
        ? parts.join(" · ")
        : `${items.length} listed`;
  return {
    concernId: def.id,
    slug: drug.slug,
    available: items.length > 0,
    headline,
    entries: [],
    ...(items.length > 0 ? { interactionItems: items } : {}),
    basis: def.basis,
  };
}

/**
 * Normalize one (medication × concern) pair into a display cell.
 * Pure, deterministic, and total — unknown concerns throw (they are a
 * programming error, not a data state).
 */
export function normalizeConcernCell(drug: Drug, concernId: ConcernId): ConcernCell {
  const def = getConcernDefinition(concernId);
  switch (def.kind) {
    case "effect":
      return effectCell(drug, def);
    case "monitoring":
      return monitoringCell(drug, def);
    case "interactions":
      return interactionsCell(drug, def);
  }
}

/**
 * Coverage: how many of the given medications carry ANY canonical
 * basis for the concern. Used for the deterministic default concern
 * selection (top effect concerns by coverage) — never for ranking
 * medications.
 */
export function concernCoverage(medications: Drug[], concernId: ConcernId): number {
  return medications.reduce(
    (n, drug) => n + (normalizeConcernCell(drug, concernId).available ? 1 : 0),
    0
  );
}

/**
 * The deterministic default concern set for a class: the top effect
 * concerns by coverage among the class members (ties broken by the
 * curated definition order). Monitoring/interaction concerns are
 * opt-in only. Capped at 4 for a readable first matrix.
 */
export function defaultConcernsFor(medications: Drug[], cap = 4): ConcernId[] {
  const coverage = new Map<ConcernId, number>();
  for (const def of CONCERN_DEFINITIONS) {
    if (def.kind !== "effect") continue;
    coverage.set(def.id, concernCoverage(medications, def.id));
  }
  return [...coverage.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, cap)
    .map(([id]) => id)
    .sort((a, b) => CONCERN_DEFINITIONS.findIndex((d) => d.id === a) - CONCERN_DEFINITIONS.findIndex((d) => d.id === b));
}
