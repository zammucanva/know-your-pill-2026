/**
 * KYP Knowledge Graph — the canonical, evidence-preserving relationship layer.
 *
 * ─── What this module is ────────────────────────────────────────────────
 * A DERIVED graph over the locked medical data layer
 * (src/lib/kyp/data — content-locked, never modified here). It normalises
 * the free-text pharmacology that already exists in each drug's
 * `mechanism.molecularTarget` / `receptors[]` / `neurotransmitters[]` /
 * `indications` / side-effect / monitoring / registry fields into typed,
 * linkable entities and evidence-backed edges.
 *
 * ─── Design rules (non-negotiable) ─────────────────────────────────────
 *   1. DERIVED, NEVER DUPLICATED — no medical fact is restated here; every
 *      edge carries the exact source string it was derived from, verbatim,
 *      as its `evidence`. If the data layer changes, the graph re-flows.
 *   2. NO INVENTED RELATIONSHIPS — a drug only links to an entity when the
 *      drug's own data names it. The cranial-nerve registry is deliberately
 *      identity-only (zero drug links) because the current content carries
 *      no drug→cranial-nerve relationship.
 *   3. GRACEFUL DANGLING — strings that do not resolve to a registry entity
 *      are never dropped; they surface in `unresolvedTargetTexts` /
 *      `unresolvedNeurotransmitterTexts` so the UI can render them as
 *      plain, unlinked chips. Unknown input can never crash a drug page.
 *   4. DETERMINISTIC — pure functions of the data layer; module-load
 *      derivation order is stable, so tests and static export agree.
 */

import { drugs } from "../data/drugs/index";
import { diseases } from "../data/diseases/index";
import { brainRegions, pathways } from "../data/brain";
import { drugClasses } from "../data/classes";
import type {
  Drug,
  BrainRegion,
  Pathway,
} from "../data/types";
import { mechanismActions } from "./entities/mechanism-actions";
import type { MechanismAction } from "./entities/mechanism-actions";

/* ============================================================
   Entity types
   ============================================================ */

export type TargetKind =
  | "transporter"
  | "receptor"
  | "enzyme"
  | "ion-channel";

export interface KnowledgeTarget {
  /** Stable id — e.g. "sert", "5ht2c". */
  id: string;
  /** Short chip label — e.g. "SERT", "5-HT2C". */
  name: string;
  /** Longer name for titles/tooltips — e.g. "Serotonin transporter". */
  fullName: string;
  kind: TargetKind;
  /** Gene symbol where the data layer states one — e.g. "SLC6A4". */
  geneSymbol?: string;
  /**
   * Lower-case substrings that identify this entity inside the drug data's
   * free text. Longest match wins, so "5-ht3a" outranks "5-ht3".
   */
  match: string[];
}

export interface KnowledgeNeurotransmitter {
  id: string;
  /** Chip label — e.g. "Serotonin". */
  name: string;
  /** Abbreviation badge — e.g. "5-HT". */
  abbreviation: string;
  match: string[];
}

export interface KnowledgeCondition {
  /** Slug key of the qualifier-free base — e.g. "major-depressive-disorder". */
  key: string;
  /**
   * Canonical display name shared by every drug page that names this
   * condition — see `resolveConditionDisplayName`. Qualifier-free plain
   * spelling preferred; SHORTEST qualified spelling as fallback; disease
   * page titles are never overwritten.
   */
  name: string;
  /** True when KYP has a dedicated /diseases/ page for it. */
  hasDiseasePage: boolean;
  /** ICD-10 reference where the canonical data layer carries one. */
  icd10?: string;
}

export interface CranialNerveNode {
  id: string;
  name: string;
  roman: string;
  kind: "sensory" | "motor" | "both";
  /**
   * Drugs linked to this nerve — ALWAYS EMPTY by design: the current
   * content layer authorises no drug→cranial-nerve relationship. The
   * field exists so the audit can verify the invariant (expect 0 links).
   */
  drugSlugs: string[];
}

/* ============================================================
   Registries (identity layer)
   ============================================================ */

/**
 * Canonical molecular-target registry. Every entry corresponds to a target
 * that the 12-drug registry names in its `receptors` /
 * `mechanism.molecularTarget` strings — nothing speculative is added.
 */
export const knowledgeTargets: KnowledgeTarget[] = [
  // ── Monoamine transporters ──
  {
    id: "sert",
    name: "SERT",
    fullName: "Serotonin transporter",
    kind: "transporter",
    geneSymbol: "SLC6A4",
    match: ["sert", "serotonin transporter", "slc6a4"],
  },
  {
    id: "net",
    name: "NET",
    fullName: "Norepinephrine transporter",
    kind: "transporter",
    geneSymbol: "SLC6A2",
    match: ["norepinephrine transporter", "noradrenaline transporter", "slc6a2"],
  },
  {
    id: "dat",
    name: "DAT",
    fullName: "Dopamine transporter",
    kind: "transporter",
    geneSymbol: "SLC6A3",
    match: ["dopamine transporter", "slc6a3"],
  },

  // ── Serotonin receptors ──
  { id: "5ht1a", name: "5-HT1A", fullName: "5-HT1A receptor", kind: "receptor", match: ["5-ht1a"] },
  { id: "5ht2a", name: "5-HT2A", fullName: "5-HT2A receptor", kind: "receptor", match: ["5-ht2a"] },
  { id: "5ht2c", name: "5-HT2C", fullName: "5-HT2C receptor", kind: "receptor", match: ["5-ht2c"] },
  { id: "5ht3", name: "5-HT3", fullName: "5-HT3 receptor", kind: "receptor", match: ["5-ht3"] },
  { id: "5ht3a", name: "5-HT3A", fullName: "5-HT3A receptor subunit", kind: "receptor", match: ["5-ht3a"] },
  { id: "5ht7", name: "5-HT7", fullName: "5-HT7 receptor", kind: "receptor", match: ["5-ht7"] },

  // ── Adrenergic / cholinergic / histaminergic ──
  { id: "alpha1-adrenergic", name: "α1-adrenergic", fullName: "α1-adrenergic receptor", kind: "receptor", match: ["α1-adrenergic", "α1 adrenergic", "α1,"] },
  { id: "alpha2-adrenergic", name: "α2-adrenergic", fullName: "α2-adrenergic receptor", kind: "receptor", match: ["α2-adrenergic", "α2 adrenergic", "α2 "] },
  { id: "m1-muscarinic", name: "Muscarinic M1", fullName: "M1 muscarinic acetylcholine receptor", kind: "receptor", match: ["muscarinic m1", "m1 muscarinic", "m1 receptor", "muscarinic ("] },
  { id: "h1-histamine", name: "H1 histamine", fullName: "H1 histamine receptor", kind: "receptor", match: ["h1 histamine", "histamine (", "h1 receptor"] },
  { id: "alpha3beta4-nachr", name: "α3β4 nAChR", fullName: "α3β4 nicotinic acetylcholine receptor", kind: "receptor", match: ["α3β4"] },
  { id: "alpha4beta2-nachr", name: "α4β2 nAChR", fullName: "α4β2 nicotinic acetylcholine receptor", kind: "receptor", match: ["α4β2"] },

  // ── Other ──
  { id: "sigma-1", name: "σ1", fullName: "Sigma-1 (σ1) receptor", kind: "receptor", match: ["σ1", "sigma-1"] },
  { id: "herg", name: "hERG / KCNH2", fullName: "hERG (KCNH2) potassium channel", kind: "ion-channel", geneSymbol: "KCNH2", match: ["herg", "kcnh2"] },
  { id: "cardiac-na-channel", name: "Cardiac Na⁺ channel", fullName: "Cardiac fast voltage-gated sodium channel", kind: "ion-channel", match: ["cardiac fast na+ channel", "cardiac voltage-gated na+"] },
  { id: "nos", name: "NOS", fullName: "Nitric oxide synthase", kind: "enzyme", match: ["nitric oxide synthase"] },
];

/**
 * Canonical neurotransmitter registry — chip label + abbreviation badge,
 * resolved from each drug's `neurotransmitters[]` strings.
 */
export const knowledgeNeurotransmitters: KnowledgeNeurotransmitter[] = [
  { id: "serotonin", name: "Serotonin", abbreviation: "5-HT", match: ["serotonin"] },
  { id: "norepinephrine", name: "Norepinephrine", abbreviation: "NE", match: ["norepinephrine", "noradrenaline"] },
  { id: "dopamine", name: "Dopamine", abbreviation: "DA", match: ["dopamine"] },
  { id: "acetylcholine", name: "Acetylcholine", abbreviation: "Ach", match: ["acetylcholine"] },
  { id: "histamine", name: "Histamine", abbreviation: "HA", match: ["histamine"] },
  { id: "gaba", name: "GABA", abbreviation: "GABA", match: ["gaba"] },
  { id: "glutamate", name: "Glutamate", abbreviation: "Glu", match: ["glutamate"] },
];

/**
 * Cranial nerves — IDENTITY-ONLY by design. Standard neuroanatomy is
 * retained as registry entities, but NO drug link is created because the
 * locked content layer asserts no drug→cranial-nerve relationship. The
 * audit suite pins this invariant (`drugSlugs.length === 0` for all).
 */
export const cranialNerves: CranialNerveNode[] = [
  { id: "cn-i", name: "Olfactory nerve", roman: "I", kind: "sensory", drugSlugs: [] },
  { id: "cn-ii", name: "Optic nerve", roman: "II", kind: "sensory", drugSlugs: [] },
  { id: "cn-iii", name: "Oculomotor nerve", roman: "III", kind: "motor", drugSlugs: [] },
  { id: "cn-iv", name: "Trochlear nerve", roman: "IV", kind: "motor", drugSlugs: [] },
  { id: "cn-v", name: "Trigeminal nerve", roman: "V", kind: "both", drugSlugs: [] },
  { id: "cn-vi", name: "Abducens nerve", roman: "VI", kind: "motor", drugSlugs: [] },
  { id: "cn-vii", name: "Facial nerve", roman: "VII", kind: "both", drugSlugs: [] },
  { id: "cn-viii", name: "Vestibulocochlear nerve", roman: "VIII", kind: "sensory", drugSlugs: [] },
  { id: "cn-ix", name: "Glossopharyngeal nerve", roman: "IX", kind: "both", drugSlugs: [] },
  { id: "cn-x", name: "Vagus nerve", roman: "X", kind: "both", drugSlugs: [] },
  { id: "cn-xi", name: "Accessory nerve", roman: "XI", kind: "motor", drugSlugs: [] },
  { id: "cn-xii", name: "Hypoglossal nerve", roman: "XII", kind: "motor", drugSlugs: [] },
];

/* ============================================================
   Derived maps
   ============================================================ */

/**
 * Strips drug-specific qualifiers from a condition name so that spelling
 * variants of the SAME clinical entity share one registry key.
 *
 *   "Obsessive-Compulsive Disorder (OCD) — adults" → "Obsessive-Compulsive Disorder"
 *   "Major Depressive Disorder (MDD)"              → "Major Depressive Disorder"
 *   "Insomnia (low-dose 7.5–15 mg at night)"      → "Insomnia"
 *
 * Parenthetical and em-dash-suffix qualifiers describe the DRUG-SIDE
 * relationship — age groups, "off-label", combination regimens, dose
 * framing — never the clinical condition itself, so they must not fragment
 * condition identity. They stay in the locked data layer, where each
 * drug's own sections (e.g. Clinical Uses) continue to render them.
 */
function stripConditionQualifiers(name: string): string {
  return name
    .replace(/\([^)]*\)/g, " ")
    .replace(/\s+—\s+.*$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function slugifyConditionName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[’'()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Registry key for a condition name — the identity contract of the
 * conditions layer: qualifier-stripped base, slugified, with a standalone-
 * entity reconciliation (see `standaloneConditionKeys`). Exported so the
 * test suite can recompute the variant groupings and pin the wiring.
 */
export function conditionKeyFromName(name: string): string {
  const strippedKey = slugifyConditionName(stripConditionQualifiers(name));
  if (!strippedKey) return "";
  const fullKey = slugifyConditionName(name);
  // "Migraine (prophylaxis)" carries a qualifier that another source spells
  // as part of its standalone base name ("Migraine prophylaxis") — when that
  // standalone entity exists in its own right, key to IT rather than to the
  // bare base, so the pair stays one chip (the pre-fix behaviour). Pure
  // drug-side qualifiers ("(OCD)", "(paediatric, ≥8 yrs)") have no standalone
  // claimant and keep merging into the plain entity.
  if (fullKey && fullKey !== strippedKey && standaloneConditionKeys.has(fullKey)) {
    return fullKey;
  }
  return strippedKey;
}

/** True when the name carries no drug-specific qualifier. */
export function isPlainConditionName(name: string): boolean {
  return stripConditionQualifiers(name) === name.trim();
}

/**
 * Keys of every PLAIN condition name in the whole data layer (diseases,
 * relatedConditions, indications) — the "standalone entities" a qualified
 * spelling may be restating. Computed once, before the registries derive.
 */
const standaloneConditionKeys = new Set(
  [
    ...diseases.map((disease) => disease.name),
    ...drugs.flatMap((drug) => drug.relatedConditions.map((rel) => rel.name)),
    ...drugs.flatMap((drug) => drug.indications.map((ind) => ind.name)),
  ]
    .filter(isPlainConditionName)
    .map(slugifyConditionName)
    .filter(Boolean)
);

/**
 * Canonical display-name selection for a merged condition.
 *
 * One registry entry is shared by the chips on EVERY drug page that names
 * the condition, so the display name must be a property of the WHOLE variant
 * multiset — never of whichever source happened to be processed first or
 * spelled things out most verbosely:
 *
 *   1. Prefer a qualifier-free plain name ("Obsessive-Compulsive Disorder")
 *      so drug-specific qualifiers — age groups, "off-label", combination
 *      regimens — never leak onto unrelated drug pages that never declared
 *      them (e.g. fluvoxamine's "paediatric, ≥8 yrs" must not become
 *      sertraline's or paroxetine's OCD label).
 *   2. Fall back to the SHORTEST qualified spelling only when no plain
 *      variant exists anywhere in the key's sources — the least-qualified
 *      form minimises collateral if it ever does cross pages.
 *
 * Determinism: the result depends only on the variant MULTISET. Ties are
 * broken by source count, then length, then lexicographic order, so neither
 * registry iteration order nor which drug is processed first can change the
 * outcome.
 */
export function resolveConditionDisplayName(variants: readonly string[]): string {
  const counts = new Map<string, number>();
  for (const variant of variants) {
    counts.set(variant, (counts.get(variant) ?? 0) + 1);
  }
  const unique = [...counts.keys()];
  if (unique.length === 0) return "";

  const plain = unique.filter(isPlainConditionName);
  if (plain.length > 0) {
    plain.sort((a, b) =>
      (counts.get(b)! - counts.get(a)!) ||
      (a.length - b.length) ||
      (a < b ? -1 : a > b ? 1 : 0)
    );
    return plain[0];
  }

  unique.sort((a, b) =>
    (a.length - b.length) ||
    (a < b ? -1 : a > b ? 1 : 0)
  );
  return unique[0];
}

interface ConditionAccumulator {
  key: string;
  /** Disease-page title — set once by the diseases registry, never replaced. */
  name: string;
  hasDiseasePage: boolean;
  icd10?: string;
  /** Every source spelling seen for this key, with multiplicity. */
  variants: Map<string, number>;
}

/**
 * Conditions registry — derived from every drug's `relatedConditions` and
 * `indications`, plus the diseases registry (which owns the dedicated
 * /diseases/ pages and, where present in the data, the ICD reference).
 */
function buildConditions(): Map<string, KnowledgeCondition> {
  const acc = new Map<string, ConditionAccumulator>();

  const record = (key: string, variant: string): ConditionAccumulator => {
    let entry = acc.get(key);
    if (!entry) {
      entry = {
        key,
        name: variant,
        hasDiseasePage: false,
        icd10: undefined,
        variants: new Map(),
      };
      acc.set(key, entry);
    }
    entry.variants.set(variant, (entry.variants.get(variant) ?? 0) + 1);
    return entry;
  };

  // Diseases first — they own pages and ICD references (extracted from
  // the structured `diagnosticCriteria` entries where the data carries one).
  for (const disease of diseases) {
    const icdEntry = disease.diagnosticCriteria.find(
      (c) => c.system === "ICD-10" && typeof c.code === "string"
    );
    const entry = record(disease.slug, disease.name);
    entry.name = disease.name;
    entry.hasDiseasePage = true;
    entry.icd10 = icdEntry?.code;
  }

  // Relationship-declared conditions (richest source: primary/alternative/…).
  for (const drug of drugs) {
    for (const rel of drug.relatedConditions) {
      const key = conditionKeyFromName(rel.name);
      if (!key) continue;
      record(key, rel.name);
    }
  }

  // Indication names — union in (status handled per-drug in the edges).
  for (const drug of drugs) {
    for (const ind of drug.indications) {
      const key = conditionKeyFromName(ind.name);
      if (!key) continue;
      record(key, ind.name);
    }
  }

  // Resolve canonical display names from the collected variant multisets.
  // Disease-page titles are NEVER overwritten — the resolver applies only
  // to non-page entries.
  const out = new Map<string, KnowledgeCondition>();
  for (const value of acc.values()) {
    const variants: string[] = [];
    for (const [name, count] of value.variants) {
      for (let i = 0; i < count; i++) variants.push(name);
    }
    out.set(value.key, {
      key: value.key,
      name: value.hasDiseasePage
        ? value.name
        : resolveConditionDisplayName(variants),
      hasDiseasePage: value.hasDiseasePage,
      icd10: value.icd10,
    });
  }
  return out;
}

/** The canonical knowledge graph — entities keyed by id. */
export const knowledgeGraph = {
  conditions: buildConditions(),
  cranialNerves: new Map(cranialNerves.map((n) => [n.id, n])),
  targets: new Map(knowledgeTargets.map((t) => [t.id, t])),
  neurotransmitters: new Map(knowledgeNeurotransmitters.map((n) => [n.id, n])),
  brainRegions: new Map(brainRegions.map((r) => [r.id, r])),
  pathways: new Map(pathways.map((p) => [p.id, p])),
} as const;

/* ============================================================
   Chain types (per drug)
   ============================================================ */

/** A drug → molecular-target edge with preserved evidence. */
export interface TargetEdge {
  targetId: string;
  /** Derived action ids (see entities/mechanism-actions.ts). */
  actions: string[];
  /** True when the drug's primary `molecularTarget` field names this target. */
  fromPrimaryTargetField: boolean;
  /** The exact source strings this edge was derived from — verbatim. */
  evidence: string[];
}

/**
 * An edge whose only action is negligible-affinity — the drug does not
 * act on that target (bupropion's SERT); it is graph data, not a
 * primary-target candidate.
 *
 * Single canonical definition (imported by the chain view builder — never
 * duplicated there).
 */
export function isNegligibleAffinity(edge: TargetEdge): boolean {
  return edge.actions.length === 1 && edge.actions[0] === "negligible-affinity";
}

/* ============================================================
   Primary-target semantics (Knowledge Chain integrity)
   ============================================================ */

/** How the single primary target (or its absence) was established. */
export type PrimaryTargetBasis =
  /** The data itself tags exactly one target as THE primary ("— PRIMARY target"). */
  | "explicit-primary-statement"
  /** Exactly one primary-field target survives the data's own qualifier language. */
  | "undisputed-primary"
  /**
   * The canonical data names several co-equal (or zero) primary-field
   * targets and singles none of them out — no single primary target
   * exists, and none may be inferred. Consumers must render the
   * explicit missing-primary state, never a promoted additional target.
   */
  | "no-single-primary";

/**
 * Semantic resolution of a drug's PRIMARY molecular target.
 *
 * THE CONTRACT (Knowledge Chain integrity):
 *   primaryTargetId is a single id or null — NEVER an array, never
 *   inferred from array position, render order, or availability.
 *
 * DERIVATION (pure, deterministic, order-independent):
 *   1. Candidates are the targets the drug's own primary field
 *      (`mechanism.molecularTarget`) names, minus negligible-affinity
 *      edges (filtered by the caller before the ids are passed in).
 *   2. The data layer ranks its own relationships in prose, with a
 *      qualifier vocabulary it uses consistently across all 12 drugs:
 *        - LIST qualifiers ("off-target", "weak", …) demote the targets
 *          named AFTER them in the same clause ("plus off-target α1, H1,
 *          M1 receptors", "weak DAT … at high doses").
 *        - TAG qualifiers ("— secondary") demote the target named just
 *          BEFORE them in the same clause.
 *        - The TAG promoter ("— PRIMARY target") explicitly singles out
 *          THE primary target (clomipramine's SERT).
 *   3. Exactly one surviving candidate  → primary (undisputed).
 *      Exactly one explicitly promoted    → primary (explicit statement).
 *      Anything else                     → null (no-single-primary).
 *
 * The qualifier corpus is `mechanism.molecularTarget` +
 * `mechanism.effect` — the two fields that describe the drug→target
 * relationship itself. Summary sentences, mechanism steps, and
 * pharmacokinetic fields are deliberately excluded: they contextualise
 * ("CYP2D6 (primary)", "a secondary-amine metabolite") without
 * ranking the drug's molecular-target relationships, and including
 * them would misbind qualifiers.
 */
export interface PrimaryTargetResolution {
  /** The single primary target's registry id, or null — never inferred. */
  primaryTargetId: string | null;
  basis: PrimaryTargetBasis;
  /** Primary-field candidates that survived the qualifier language. */
  primaryFieldCandidateIds: string[];
  /** Primary-field targets the data's own qualifiers demoted. */
  demotedPrimaryFieldTargetIds: string[];
  /** Targets the data itself explicitly tags as THE primary target. */
  explicitPrimaryTargetIds: string[];
}

/**
 * LIST qualifiers — demote targets named AFTER the qualifier inside the
 * same clause. Every pattern below occurs verbatim in the locked data
 * layer's molecularTarget / effect fields (audited across all 12 drugs).
 */
const LIST_DEMOTER_PATTERNS: RegExp[] = [
  /\boff-target\b/,
  /\bweak\b/,
  /\bnegligible\b/,
  /\bno clinically meaningful\b/,
  /\bessentially inactive\b/,
];

/** TAG qualifiers — demote the target named just BEFORE them. */
const TAG_DEMOTER_PATTERNS: RegExp[] = [/\bsecondary\b/];

/**
 * TAG promoter — the data's explicit "— PRIMARY target" statement
 * (clomipramine). Matched as the full phrase so unrelated uses of the
 * word "primary" (e.g. "primary pharmacological action" in the steps)
 * can never fire it.
 */
const TAG_PROMOTER_PATTERNS: RegExp[] = [/\bprimary target\b/];

/**
 * Split a canonical mechanism text into qualifier clauses — sentences
 * and semicolon-separated segments. Em-dashes are deliberately NOT
 * separators: the data binds qualifiers through them ("NET (…) —
 * secondary"), so splitting there would detach a qualifier from its
 * target.
 */
function splitQualifierClauses(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|;\s*/)
    .map((clause) => clause.trim())
    .filter(Boolean);
}

interface ClauseQualifierAnalysis {
  demoted: Set<string>;
  explicitPrimary: Set<string>;
}

/**
 * Apply the qualifier vocabulary to one clause. Pure text analysis —
 * `resolveTargetsIn` supplies the registry targets with positions.
 */
function analyseClause(clause: string): ClauseQualifierAnalysis {
  const lower = clause.toLowerCase();
  const analysis: ClauseQualifierAnalysis = {
    demoted: new Set(),
    explicitPrimary: new Set(),
  };

  // LIST demoters: every target named after the qualifier, in this clause.
  for (const pattern of LIST_DEMOTER_PATTERNS) {
    for (const match of lower.matchAll(pattern.global ? pattern : new RegExp(pattern.source, pattern.flags + "g"))) {
      const tail = clause.slice(match.index! + match[0].length);
      for (const m of resolveTargetsIn(tail)) analysis.demoted.add(m.target.id);
    }
  }

  // TAG demoters ("— secondary"): the target named nearest before.
  for (const pattern of TAG_DEMOTER_PATTERNS) {
    for (const match of lower.matchAll(new RegExp(pattern.source, pattern.flags + "g"))) {
      const head = clause.slice(0, match.index!);
      const before = resolveTargetsIn(head);
      const nearest = before[before.length - 1];
      if (nearest) analysis.demoted.add(nearest.target.id);
    }
  }

  // TAG promoter ("— PRIMARY target"): the target named nearest before.
  for (const pattern of TAG_PROMOTER_PATTERNS) {
    for (const match of lower.matchAll(new RegExp(pattern.source, pattern.flags + "g"))) {
      const head = clause.slice(0, match.index!);
      const before = resolveTargetsIn(head);
      const nearest = before[before.length - 1];
      if (nearest) analysis.explicitPrimary.add(nearest.target.id);
    }
  }

  return analysis;
}

/**
 * Resolve THE primary molecular target from the drug's own canonical
 * mechanism texts — the atomic, purely functional core of the
 * Knowledge Chain's primary-target contract.
 *
 * `primaryFieldTargetIds` must be the ids of the drug's
 * non-negligible, primary-field (`fromPrimaryTargetField`) target
 * edges — the chain builder supplies them; synthetic tests may supply
 * any list. The function reads ONLY the two texts plus that list, so
 * the resolution is structurally independent of receptor-array order
 * (the array-order-independence guarantee is testable by construction).
 */
export function resolvePrimaryTargetFromTexts(
  molecularTargetText: string,
  effectText: string,
  primaryFieldTargetIds: readonly string[]
): PrimaryTargetResolution {
  const demoted = new Set<string>();
  const explicitPrimary = new Set<string>();
  for (const clause of [
    ...splitQualifierClauses(molecularTargetText),
    ...splitQualifierClauses(effectText),
  ]) {
    const analysis = analyseClause(clause);
    for (const id of analysis.demoted) demoted.add(id);
    for (const id of analysis.explicitPrimary) explicitPrimary.add(id);
  }

  const candidateIds = primaryFieldTargetIds.filter((id) => !demoted.has(id));
  const demotedFieldIds = primaryFieldTargetIds.filter((id) => demoted.has(id));

  // 1. Explicit "— PRIMARY target" statement — only when it unambiguously
  //    singles out one surviving candidate. Conflicting or demoted
  //    promotions are ignored (fall through to the undisputed rule).
  const promotedCandidates = candidateIds.filter((id) => explicitPrimary.has(id));
  if (promotedCandidates.length === 1 && candidateIds.length === 1) {
    return {
      primaryTargetId: promotedCandidates[0],
      basis: "explicit-primary-statement",
      primaryFieldCandidateIds: candidateIds,
      demotedPrimaryFieldTargetIds: demotedFieldIds,
      explicitPrimaryTargetIds: [...explicitPrimary],
    };
  }

  // 2. Exactly one surviving candidate → THE primary target.
  if (candidateIds.length === 1) {
    return {
      primaryTargetId: candidateIds[0],
      basis: "undisputed-primary",
      primaryFieldCandidateIds: candidateIds,
      demotedPrimaryFieldTargetIds: demotedFieldIds,
      explicitPrimaryTargetIds: [...explicitPrimary],
    };
  }

  // 3. Several co-equal candidates (or none) → NO single primary target.
  //    Never infer, never substitute an additional target.
  return {
    primaryTargetId: null,
    basis: "no-single-primary",
    primaryFieldCandidateIds: candidateIds,
    demotedPrimaryFieldTargetIds: demotedFieldIds,
    explicitPrimaryTargetIds: [...explicitPrimary],
  };
}

/**
 * Resolve a drug's primary target against its real chain edges —
 * convenience wrapper over `resolvePrimaryTargetFromTexts` for callers
 * that already hold the `Drug` record (tests use it to prove
 * receptor-array-order independence on cloned, shuffled data).
 */
export function resolvePrimaryTarget(
  drug: Drug,
  primaryFieldTargetIds: readonly string[]
): PrimaryTargetResolution {
  return resolvePrimaryTargetFromTexts(
    drug.mechanism.molecularTarget,
    drug.mechanism.effect,
    primaryFieldTargetIds
  );
}

/** A drug → clinical-condition edge. */
export interface ConditionEdge {
  conditionKey: string;
  /** Where this edge came from, e.g. "related:primary", "indication:fda-approved". */
  sources: string[];
}

/** A drug → side-effect edge. */
export interface SideEffectEdge {
  /** Registry id when the entry references the global side-effect library. */
  sideEffectId: string | null;
  name: string;
  tier: "common" | "serious";
  frequency: string;
}

/** Drug-level slice of the chain (sciences the rows render from). */
export interface DrugKnowledgeChainDrug {
  targetEdges: TargetEdge[];
  /**
   * The drug's single primary molecular target — semantic resolution
   * (see PrimaryTargetResolution). `primaryTargetId` is an id or null,
   * NEVER an array: exactly one primary target or an explicit
   * no-single-primary state.
   */
  primaryTarget: PrimaryTargetResolution;
  conditionEdges: ConditionEdge[];
  sideEffectEdges: SideEffectEdge[];
  monitoring: { parameter: string; frequency: string; rationale: string }[];
  mechanism: {
    /** Derived action ids across all target edges (deduped, registry order). */
    actions: string[];
    /** The drug's own `mechanism.molecularTarget` string — verbatim. */
    primaryTargetText: string;
  };
  /** Free-text receptor strings that matched no registry target. */
  unresolvedTargetTexts: string[];
  /** Free-text neurotransmitter strings that matched no registry entity. */
  unresolvedNeurotransmitterTexts: string[];
}

export interface KnowledgeChainBrainRegion {
  entity: BrainRegion;
}

export interface KnowledgeChainPathway {
  entity: Pathway;
}

/** The full knowledge chain for one drug. */
export interface DrugKnowledgeChain {
  slug: string;
  genericName: string;
  drug: DrugKnowledgeChainDrug;
  class: {
    label: string;
    /** Registry full name, e.g. "Norepinephrine-Dopamine Reuptake Inhibitor". */
    fullName: string;
  };
  /**
   * The drug's own `drugClass` (substance-class registry id) resolved
   * against the canonical classes registry — present only for drugs the
   * registry covers (e.g. bupropion → Stimulant). Null when the id has
   * no registry entry (SSRIs etc. are medication classes, not substance
   * classes) — never fabricated.
   */
  substanceClass: {
    id: string;
    name: string;
    description: string;
  } | null;
  targets: { id: string; name: string; kind: TargetKind; drugCount: number }[];
  neurotransmitters: { id: string; name: string; abbreviation: string }[];
  brainRegions: KnowledgeChainBrainRegion[];
  pathways: KnowledgeChainPathway[];
}

/* ============================================================
   Resolution helpers
   ============================================================ */

/** A resolved target occurrence inside a free-text string. */
interface TargetMatch {
  target: KnowledgeTarget;
  /** Index of the first matching pattern inside the (lower-cased) text. */
  index: number;
  /** Length of the winning pattern. */
  length: number;
}

/**
 * Resolve ALL registry targets named in a text region. Winning rule per
 * target: earliest match index, then longest pattern. A single target only
 * ever appears once (its best hit).
 */
function resolveTargetsIn(text: string): TargetMatch[] {
  const lower = text.toLowerCase();
  const best = new Map<string, TargetMatch>();
  for (const target of knowledgeTargets) {
    let hit: TargetMatch | null = null;
    for (const pattern of target.match) {
      const index = lower.indexOf(pattern);
      if (index === -1) continue;
      if (
        !hit ||
        index < hit.index ||
        (index === hit.index && pattern.length > hit.length)
      ) {
        hit = { target, index, length: pattern.length };
      }
    }
    if (hit) best.set(target.id, hit);
  }
  // Subsumed-prefix rule: two targets starting at the SAME index are the
  // same entity spelled specifically ("5-HT3A" vs "5-HT3") — keep only
  // the longer, more specific match so a subunit never double-links.
  const kept = [...best.values()].sort(
    (a, b) => a.index - b.index || b.length - a.length
  );
  const out: TargetMatch[] = [];
  for (const match of kept) {
    const prev = out[out.length - 1];
    if (prev && prev.index === match.index) continue;
    out.push(match);
  }
  return out;
}

function resolveNeurotransmitter(text: string): KnowledgeNeurotransmitter | null {
  const lower = text.toLowerCase();
  for (const nt of knowledgeNeurotransmitters) {
    if (nt.match.some((p) => lower.includes(p))) return nt;
  }
  return null;
}

/**
 * Derive the action ids a drug exerts on a target FROM THE EVIDENCE TEXT.
 *
 * Two-tier rule (see entities/mechanism-actions.ts for the vocabulary):
 *   1. PRIMARY evidence (the drug's molecular-target field or the
 *      target's own receptor string) stating "negligible" qualifies the
 *      relationship exclusively — the edge is negligible-affinity, full
 *      stop. Bupropion's SERT entry is the canonical case.
 *   2. Otherwise actions derive from ALL evidence (primary +
 *      corroborating summary sentences). Corroborating sentences can
 *      ADD actions (sertraline's "selectively blocks" earns its SERT
 *      edge reuptake-inhibition) but can never trigger the negligible
 *      override — "…with negligible effect on serotonin" in a sentence
 *      that also names NET must not flip NET.
 */
function deriveActions(evidence: string[], primaryEvidence: string[], kind: TargetKind): string[] {
  const primary = primaryEvidence.join(" ").toLowerCase();
  if (primary.includes("negligible")) {
    return ["negligible-affinity"];
  }
  const joined = evidence.join(" ").toLowerCase();
  const has = (needle: string) => joined.includes(needle);
  const actions: string[] = [];

  if (has("antagonist") || has("antagonism") || has("antagonis")) {
    actions.push("receptor-antagonism");
  }
  if (/\bagonist\b/.test(joined) && !has("antagonist")) {
    actions.push("receptor-agonism");
  }
  if (
    kind === "transporter" &&
    (has("blockade") || has("inhibitor") || has("inhibition") || has("reuptake") || has("binding site") || has("block"))
  ) {
    actions.push("reuptake-inhibition");
  }
  if (has("desensitise") || has("desensitiz")) {
    actions.push("autoreceptor-desensitisation");
  }
  if (kind === "enzyme" && (has("inhibitor") || has("inhibition"))) {
    actions.push("enzyme-inhibition");
  }
  if (kind === "ion-channel" && (has("blocker") || has("blockade") || has("channel"))) {
    actions.push("ion-channel-blockade");
  }

  // Keep only registry-known ids, in registry order (stable rendering).
  const order = new Map(mechanismActions.map((a, i) => [a.id, i]));
  return actions
    .filter((id) => order.has(id))
    .sort((a, b) => order.get(a)! - order.get(b)!);
}

/** Count how many drugs link each registry target (for drugCount meta). */
function buildTargetDrugCounts(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const drug of drugs) {
    const ids = new Set<string>();
    for (const m of resolveTargetsIn(drug.mechanism.molecularTarget)) {
      ids.add(m.target.id);
    }
    for (const receptorText of drug.receptors) {
      const head = receptorText.slice(
        0,
        Math.max(receptorText.indexOf("("), 0) || receptorText.length
      );
      const headMatches = resolveTargetsIn(head);
      const targets = headMatches.length > 0 ? headMatches : resolveTargetsIn(receptorText).slice(0, 1);
      for (const m of targets) ids.add(m.target.id);
    }
    for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}

const targetDrugCounts = buildTargetDrugCounts();

/* ============================================================
   The chain builder
   ============================================================ */

/**
 * Build the evidence-backed knowledge chain for a drug slug.
 * Returns null for an unknown slug (the caller renders nothing —
 * dangling-reference handling).
 */
export function getDrugKnowledgeChain(slug: string): DrugKnowledgeChain | null {
  const drug: Drug | undefined = drugs.find((d) => d.slug === slug);
  if (!drug) return null;

  /* ── Target edges (receptors + primary molecularTarget, merged) ── */
  const edges = new Map<string, TargetEdge>();
  // Edge-creating evidence per target — the strings whose head names the
  // target (primary molecular-target field + the target's own receptor
  // strings). Corroborating summary sentences land only in edge.evidence.
  const primaryEvidence = new Map<string, string[]>();
  const unresolvedTargetTexts: string[] = [];

  const addTargetEvidence = (text: string, fromPrimary: boolean, targets: KnowledgeTarget[]) => {
    if (targets.length === 0) {
      if (!unresolvedTargetTexts.includes(text)) unresolvedTargetTexts.push(text);
      return;
    }
    for (const target of targets) {
      const list = primaryEvidence.get(target.id);
      if (list) {
        if (!list.includes(text)) list.push(text);
      } else {
        primaryEvidence.set(target.id, [text]);
      }
      const existing = edges.get(target.id);
      if (existing) {
        if (!existing.evidence.includes(text)) existing.evidence.push(text);
        existing.fromPrimaryTargetField ||= fromPrimary;
      } else {
        edges.set(target.id, {
          targetId: target.id,
          actions: [],
          fromPrimaryTargetField: fromPrimary,
          evidence: [text],
        });
      }
    }
  };

  // The primary molecularTarget string often names several targets
  // ("SERT … and NET …") — every registry target named in it links.
  addTargetEvidence(
    drug.mechanism.molecularTarget,
    true,
    resolveTargetsIn(drug.mechanism.molecularTarget).map((m) => m.target)
  );
  // Each receptor string is its own evidence row. Only the head region
  // (before the first parenthetical) may create edges, so explanatory
  // mentions inside parens ("shunts signalling to 5-HT1A") never fabricate
  // a relationship — while compound heads ("5-HT2A / 5-HT2C") link both.
  for (const receptorText of drug.receptors) {
    const head = receptorText.slice(
      0,
      Math.max(receptorText.indexOf("("), 0) || receptorText.length
    );
    const headMatches = resolveTargetsIn(head);
    const targets = headMatches.length > 0 ? headMatches.map((m) => m.target) : resolveTargetsIn(receptorText).slice(0, 1).map((m) => m.target);
    addTargetEvidence(receptorText, false, targets);
  }

  // Mechanism-summary corroboration: a sentence in `mechanism.summary`
  // that names an ALREADY-LINKED target contributes extra action
  // evidence (e.g. sertraline's receptors string says only "SERT
  // (serotonin transporter)" — its summary's "selectively blocks" is what
  // earns the reuptake-inhibition action). Sentences never create edges
  // on their own, so negated mentions ("negligible … SERT") can only
  // qualify a relationship the data already asserts.
  const summarySentences = drug.mechanism.summary
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0);
  for (const sentence of summarySentences) {
    for (const match of resolveTargetsIn(sentence)) {
      const existing = edges.get(match.target.id);
      if (existing && !existing.evidence.includes(sentence)) {
        existing.evidence.push(sentence);
      }
    }
  }

  // Derive actions per edge from its evidence (two-tier negligible rule
  // — see deriveActions).
  for (const edge of edges.values()) {
    const target = knowledgeGraph.targets.get(edge.targetId);
    edge.actions = deriveActions(
      edge.evidence,
      primaryEvidence.get(edge.targetId) ?? [],
      target?.kind ?? "receptor"
    );
  }

  // Stable order: transporters first (registry order), then receptors,
  // then enzymes/channels — mirrors the registry declaration order.
  const targetOrder = new Map(knowledgeTargets.map((t, i) => [t.id, i]));
  const targetEdges = [...edges.values()].sort(
    (a, b) => targetOrder.get(a.targetId)! - targetOrder.get(b.targetId)!
  );

  /* ── Primary-target semantic resolution (see resolvePrimaryTargetFromTexts) ── */
  const primaryFieldTargetIds = targetEdges
    .filter((edge) => edge.fromPrimaryTargetField && !isNegligibleAffinity(edge))
    .map((edge) => edge.targetId);
  const primaryTarget = resolvePrimaryTargetFromTexts(
    drug.mechanism.molecularTarget,
    drug.mechanism.effect,
    primaryFieldTargetIds
  );

  /* ── Neurotransmitters ── */
  const nts: { id: string; name: string; abbreviation: string }[] = [];
  const unresolvedNeurotransmitterTexts: string[] = [];
  const seenNt = new Set<string>();
  for (const text of drug.neurotransmitters) {
    const nt = resolveNeurotransmitter(text);
    if (nt) {
      if (!seenNt.has(nt.id)) {
        seenNt.add(nt.id);
        nts.push({ id: nt.id, name: nt.name, abbreviation: nt.abbreviation });
      }
    } else if (!unresolvedNeurotransmitterTexts.includes(text)) {
      unresolvedNeurotransmitterTexts.push(text);
    }
  }

  /* ── Condition edges (relatedConditions first, indications union in) ── */
  const conditionEdges: ConditionEdge[] = [];
  const conditionIndex = new Map<string, ConditionEdge>();
  const addCondition = (name: string, source: string) => {
    const key = conditionKeyFromName(name);
    if (!key) return;
    const existing = conditionIndex.get(key);
    if (existing) {
      if (!existing.sources.includes(source)) existing.sources.push(source);
    } else {
      const edge: ConditionEdge = { conditionKey: key, sources: [source] };
      conditionIndex.set(key, edge);
      conditionEdges.push(edge);
    }
  };
  for (const rel of drug.relatedConditions) {
    addCondition(rel.name, `related:${rel.relationship}`);
  }
  for (const ind of drug.indications) {
    addCondition(ind.name, `indication:${ind.status}`);
  }

  /* ── Side-effect edges (common tier first, serious after) ── */
  const sideEffectEdges: SideEffectEdge[] = [
    ...drug.commonSideEffects.map((s) => ({
      sideEffectId: s.sideEffectId ?? null,
      name: s.name,
      tier: "common" as const,
      frequency: s.frequency,
    })),
    ...drug.seriousSideEffects.map((s) => ({
      sideEffectId: s.sideEffectId ?? null,
      name: s.name,
      tier: "serious" as const,
      frequency: s.frequency,
    })),
  ];

  /* ── Mechanism-level actions (union of edge actions, registry order) ── */
  const actionSet = new Set<string>();
  for (const edge of targetEdges) {
    for (const a of edge.actions) actionSet.add(a);
  }
  const mechanismActionsIds = mechanismActions
    .filter((a: MechanismAction) => actionSet.has(a.id))
    .map((a: MechanismAction) => a.id);

  /* ── Resolved registry entities ── */
  const targets = targetEdges
    .map((edge) => {
      const target = knowledgeGraph.targets.get(edge.targetId);
      if (!target) return null;
      return {
        id: target.id,
        name: target.name,
        kind: target.kind,
        drugCount: targetDrugCounts.get(target.id) ?? 1,
      };
    })
    .filter((t): t is NonNullable<typeof t> => t !== null);

  const brainRegionEntities = drug.brainRegionIds
    .map((id) => knowledgeGraph.brainRegions.get(id))
    .filter((r): r is BrainRegion => Boolean(r))
    .map((entity) => ({ entity }));

  const pathwayEntities = drug.pathwayIds
    .map((id) => knowledgeGraph.pathways.get(id))
    .filter((p): p is Pathway => Boolean(p))
    .map((entity) => ({ entity }));

  return {
    slug: drug.slug,
    genericName: drug.genericName,
    drug: {
      targetEdges,
      primaryTarget,
      conditionEdges,
      sideEffectEdges,
      monitoring: drug.monitoring.map((m) => ({
        parameter: m.parameter,
        frequency: m.frequency,
        rationale: m.rationale,
      })),
      mechanism: {
        actions: mechanismActionsIds,
        primaryTargetText: drug.mechanism.molecularTarget,
      },
      unresolvedTargetTexts,
      unresolvedNeurotransmitterTexts,
    },
    class: {
      label: drug.drugClassLabel,
      fullName: drug.drugClassFullName,
    },
    substanceClass: (() => {
      const registry = drugClasses[drug.drugClass];
      if (!registry) return null;
      return {
        id: registry.id,
        name: registry.name,
        description: registry.description,
      };
    })(),
    targets,
    neurotransmitters: nts,
    brainRegions: brainRegionEntities,
    pathways: pathwayEntities,
  };
}

/** All drug slugs that have a knowledge chain (all registry drugs do). */
export function getKnowledgeChainSlugs(): string[] {
  return drugs.map((d) => d.slug);
}
