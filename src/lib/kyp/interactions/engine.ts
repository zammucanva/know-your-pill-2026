/**
 * Interaction-matching engine for the KYP Interaction Checker (/interactions).
 *
 * Purpose
 *   Given a user's selection of 2–6 medications from the library, surface
 *   every interaction that the library's own drug profiles list BETWEEN the
 *   selected drugs — pairwise, both directions, verbatim.
 *
 * Data rules (non-negotiable, same as the whole product):
 *   - every finding is a VERBATIM entry from one of the selected drug's own
 *     `interactions[]` arrays — severity, mechanism and action are copied
 *     as written, never merged, re-graded or rewritten;
 *   - matching is by identity only — generic name, brand names, or the
 *     drug's pharmacological class — using word-boundary matching so
 *     "diazepam" never matches "clonazepam";
 *   - pairs with NO listed interaction degrade honestly: they are reported
 *     as "nothing listed in our library", never as "safe to combine";
 *   - this is an educational reference built from the site's medication
 *     pages, NOT a complete interaction database.
 */

import type { Drug, DrugClassId, DrugInteraction } from "@/lib/kyp/data/types";

export type InteractionSeverity = DrugInteraction["severity"];

/** How a drug was recognised inside a listed interaction entry. */
export type MatchedVia = "generic-name" | "brand-name" | "drug-class";

/** One verbatim interaction entry, matched between two selected drugs. */
export interface PairFinding {
  /** Slug of drug A (alphabetically first of the pair). */
  aSlug: string;
  /** Slug of drug B. */
  bSlug: string;
  /** Display name of drug A. */
  aName: string;
  /** Display name of drug B. */
  bName: string;
  /** Verbatim severity from the source entry. */
  severity: InteractionSeverity;
  /** Verbatim label of the interacting drug/class from the source entry. */
  listedAs: string;
  /** Verbatim mechanism from the source entry. */
  mechanism: string;
  /** Verbatim action from the source entry. */
  action: string;
  /** Slug of the drug whose own profile lists this entry. */
  sourceSlug: string;
  /** Display name of the source drug. */
  sourceName: string;
  /** Which identity of the target drug matched. */
  matchedVia: MatchedVia;
}

/** Summary of one checked pair. */
export interface CheckedPair {
  aSlug: string;
  bSlug: string;
  aName: string;
  bName: string;
  /** Worst (most severe) finding for the pair, or null when nothing is listed. */
  worstSeverity: InteractionSeverity | null;
  /** Number of verbatim findings for this pair. */
  findingCount: number;
}

export interface InteractionCheckResult {
  /** All findings across all pairs, sorted most-severe first. */
  findings: PairFinding[];
  /** One summary per unordered pair with findings, sorted worst-severity first. */
  pairs: CheckedPair[];
  /** Pairs where the library lists nothing — reported honestly, never as "safe". */
  unmatchedPairs: CheckedPair[];
}

/* ------------------------------------------------------------------ */
/* Severity ordering                                                    */
/* ------------------------------------------------------------------ */

const SEVERITY_RANK: Record<InteractionSeverity, number> = {
  contraindicated: 3,
  major: 2,
  moderate: 1,
  minor: 0,
};

/** Higher = more severe. Exposed for UI sorting and tests. */
export function severityRank(severity: InteractionSeverity): number {
  return SEVERITY_RANK[severity] ?? -1;
}

const SEVERITY_ORDER: InteractionSeverity[] = [
  "contraindicated",
  "major",
  "moderate",
  "minor",
];

/* ------------------------------------------------------------------ */
/* Class synonyms — tight, clinical, per DrugClassId                    */
/*                                                                      */
/* Deliberately conservative: broad umbrella words like                */
/* "antidepressant" or "sedative" are NEVER class tokens, because the   */
/* data rules forbid synthesizing matches the profiles don't state.     */
/* ------------------------------------------------------------------ */

const CLASS_SYNONYMS: Partial<Record<DrugClassId, string[]>> = {
  ssri: ["ssri", "selective serotonin reuptake inhibitor"],
  snri: ["snri", "serotonin-norepinephrine reuptake inhibitor", "serotonin and norepinephrine reuptake inhibitor"],
  tca: ["tca", "tricyclic", "tricyclic antidepressant"],
  maoi: ["maoi", "monoamine oxidase inhibitor"],
  "atypical-antipsychotic": [
    "atypical antipsychotic",
    "second-generation antipsychotic",
    "antipsychotic",
    "neuroleptic",
  ],
  "typical-antipsychotic": [
    "typical antipsychotic",
    "first-generation antipsychotic",
    "antipsychotic",
    "neuroleptic",
  ],
  "mood-stabiliser": ["mood stabiliser", "mood stabilizer"],
  benzodiazepine: ["benzodiazepine", "benzo", "cns depressant"],
  "non-benzodiazepine-hypnotic": ["z-drug", "non-benzodiazepine hypnotic", "cns depressant"],
  "atypical-antidepressant": ["atypical antidepressant"],
  nri: ["nri", "norepinephrine reuptake inhibitor", "noradrenaline reuptake inhibitor"],
  "melatonergic-agonist": ["melatonin agonist", "melatonergic"],
  "thyroid-agent": ["thyroid hormone", "triiodothyronine"],
  "nmda-antagonist": ["nmda antagonist", "nmda receptor antagonist", "glutamate modulator"],
  anticonvulsant: ["anticonvulsant", "antiepileptic", "anti-seizure"],
  azapirone: ["azapirone"],
  antihistamine: ["antihistamine", "cns depressant"],
  "beta-blocker": ["beta-blocker", "beta blocker"],
  "alpha-blocker": ["alpha-blocker", "alpha blocker"],
  "alpha2-agonist": ["alpha-2 agonist", "alpha2 agonist", "central alpha-2 agonist"],
  "wake-promoting-agent": ["wake-promoting agent", "eugeroic"],
  "cholinesterase-inhibitor": ["cholinesterase inhibitor", "acetylcholinesterase inhibitor"],
  stimulant: ["stimulant", "psychostimulant"],
  anticholinergic: ["anticholinergic"],
  "orexin-antagonist": ["orexin antagonist", "dual orexin receptor antagonist"],
  depressant: ["cns depressant", "depressant"],
};

/* ------------------------------------------------------------------ */
/* Text normalisation & word-boundary matching                          */
/* ------------------------------------------------------------------ */

/** Lowercase, unify dashes, collapse whitespace. */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build a word-boundary pattern for a token, tolerant of:
 *   - optional trailing plural ("ssri" → "ssris", "benzo" → "benzos")
 *   - hyphen vs space ("beta-blocker" matches "beta blockers")
 */
function tokenPattern(token: string): RegExp {
  const flexible = escapeRegExp(normalize(token))
    .replace(/[-\s]+/g, "[-\\s]?"); // hyphen or space, optional
  return new RegExp(`\\b${flexible}(?:es|s)?\\b`, "i");
}

/** Does `token` appear in `text` as a whole word (plural-tolerant)? */
function tokenAppears(token: string, text: string): boolean {
  return tokenPattern(token).test(text);
}

/* ------------------------------------------------------------------ */
/* Identity resolution                                                  */
/* ------------------------------------------------------------------ */

export interface IdentityToken {
  token: string;
  via: MatchedVia;
}

/**
 * Every token by which `drug` can be recognised inside another drug's
 * interaction entry: its generic name, its brand names, and the synonyms
 * of its pharmacological class.
 */
export function identityTokens(drug: Drug): IdentityToken[] {
  const tokens: IdentityToken[] = [];

  // Strip parenthetical qualifiers from the generic name so
  // "Methylphenidate (d,l)" is recognisable as plain "methylphenidate"
  // in another profile's entries.
  const generic = normalize(drug.genericName)
    .replace(/\s*\(.*?\)\s*/g, " ")
    .trim();
  if (generic) tokens.push({ token: generic, via: "generic-name" });

  for (const brand of drug.brandNames ?? []) {
    const b = normalize(brand);
    if (b && b !== generic) tokens.push({ token: b, via: "brand-name" });
  }

  for (const synonym of CLASS_SYNONYMS[drug.drugClass] ?? []) {
    const s = normalize(synonym);
    if (s && !tokens.some((t) => t.token === s)) {
      tokens.push({ token: s, via: "drug-class" });
    }
  }

  return tokens;
}

/**
 * Does `entryLabel` (the `drug:` field of an interaction entry) refer to
 * `target`? Returns how it matched, or null.
 *
 * Self-reference guard: when a CLASS token matches but the label also
 * names the source drug itself (e.g. an entry phrased "fluvoxamine, the
 * most inhibitory SSRI, ..."), the entry is about the source drug, not
 * about the target — skip it. Direct generic/brand matches of the target
 * are always real: the label names the target drug explicitly.
 */
function matchEntry(
  entryLabel: string,
  source: Drug,
  target: Drug
): MatchedVia | null {
  const label = normalize(entryLabel);
  const sourceGeneric = normalize(source.genericName);

  for (const { token, via } of identityTokens(target)) {
    if (!tokenAppears(token, label)) continue;
    if (via === "drug-class" && sourceGeneric && tokenAppears(sourceGeneric, label)) {
      // Entry names the source drug itself — it is not about the target.
      continue;
    }
    return via;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Pairwise check                                                       */
/* ------------------------------------------------------------------ */

/** All findings between `source` and `target`, from source's own profile. */
function findDirectional(source: Drug, target: Drug): PairFinding[] {
  const findings: PairFinding[] = [];
  const aSlug = [source.slug, target.slug].sort()[0];
  const bSlug = [source.slug, target.slug].sort()[1];
  const aName = aSlug === source.slug ? source.genericName : target.genericName;
  const bName = aSlug === source.slug ? target.genericName : source.genericName;

  for (const entry of source.interactions ?? []) {
    const via = matchEntry(entry.drug, source, target);
    if (!via) continue;
    findings.push({
      aSlug,
      bSlug,
      aName,
      bName,
      severity: entry.severity,
      listedAs: entry.drug,
      mechanism: entry.mechanism,
      action: entry.action,
      sourceSlug: source.slug,
      sourceName: source.genericName,
      matchedVia: via,
    });
  }
  return findings;
}

/**
 * Check every unordered pair in `selected` (both directions) and return
 * all verbatim findings, worst-severity-first, plus an honest list of
 * pairs the library says nothing about.
 *
 * Duplicates: if both drugs list the same interaction, BOTH verbatim
 * entries are kept (they are complementary, written from each side) —
 * sorted adjacent to each other by severity.
 */
export function checkInteractions(selected: Drug[]): InteractionCheckResult {
  const findings: PairFinding[] = [];

  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      findings.push(...findDirectional(selected[i], selected[j]));
      findings.push(...findDirectional(selected[j], selected[i]));
    }
  }

  findings.sort(
    (x, y) =>
      severityRank(y.severity) - severityRank(x.severity) ||
      x.aName.localeCompare(y.aName) ||
      x.bName.localeCompare(y.bName)
  );

  const pairMap = new Map<string, CheckedPair>();
  for (const f of findings) {
    const key = `${f.aSlug}::${f.bSlug}`;
    const existing = pairMap.get(key);
    if (existing) {
      existing.findingCount += 1;
      if (severityRank(f.severity) > severityRank(existing.worstSeverity!)) {
        existing.worstSeverity = f.severity;
      }
    } else {
      pairMap.set(key, {
        aSlug: f.aSlug,
        bSlug: f.bSlug,
        aName: f.aName,
        bName: f.bName,
        worstSeverity: f.severity,
        findingCount: 1,
      });
    }
  }

  const pairs = [...pairMap.values()].sort(
    (x, y) =>
      severityRank(y.worstSeverity!) - severityRank(x.worstSeverity!) ||
      x.aName.localeCompare(y.aName)
  );

  // Pairs with nothing listed — enumerate honestly.
  const unmatchedPairs: CheckedPair[] = [];
  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      const a = selected[i];
      const b = selected[j];
      const [aSlug, bSlug] = [a.slug, b.slug].sort();
      if (pairMap.has(`${aSlug}::${bSlug}`)) continue;
      unmatchedPairs.push({
        aSlug,
        bSlug,
        aName: aSlug === a.slug ? a.genericName : b.genericName,
        bName: aSlug === a.slug ? b.genericName : a.genericName,
        worstSeverity: null,
        findingCount: 0,
      });
    }
  }
  unmatchedPairs.sort((x, y) => x.aName.localeCompare(y.aName));

  return { findings, pairs, unmatchedPairs };
}

/** Human label for a severity, for UI badges and test assertions. */
export const SEVERITY_LABEL: Record<InteractionSeverity, string> = {
  contraindicated: "Contraindicated",
  major: "Major",
  moderate: "Moderate",
  minor: "Minor",
};

export { SEVERITY_ORDER };
