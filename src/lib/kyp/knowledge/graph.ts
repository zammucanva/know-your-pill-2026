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
  /** Slug key — e.g. "major-depressive-disorder". */
  key: string;
  /** Display name as written in the drug data. */
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

function slugifyConditionName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[’'()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface ConditionAccumulator {
  key: string;
  name: string;
  hasDiseasePage: boolean;
  icd10?: string;
}

/**
 * Conditions registry — derived from every drug's `relatedConditions` and
 * `indications`, plus the diseases registry (which owns the dedicated
 * /diseases/ pages and, where present in the data, the ICD reference).
 */
function buildConditions(): Map<string, KnowledgeCondition> {
  const acc = new Map<string, ConditionAccumulator>();

  // Diseases first — they own pages and ICD references (extracted from
  // the structured `diagnosticCriteria` entries where the data carries one).
  for (const disease of diseases) {
    const icdEntry = disease.diagnosticCriteria.find(
      (c) => c.system === "ICD-10" && typeof c.code === "string"
    );
    acc.set(disease.slug, {
      key: disease.slug,
      name: disease.name,
      hasDiseasePage: true,
      icd10: icdEntry?.code,
    });
  }

  // Relationship-declared conditions (richest source: primary/alternative/…).
  for (const drug of drugs) {
    for (const rel of drug.relatedConditions) {
      const key = slugifyConditionName(rel.name);
      if (!key) continue;
      const existing = acc.get(key);
      if (existing) {
        if (existing.name.length < rel.name.length && !existing.hasDiseasePage) {
          // Keep the more explicit spelling, never a disease-page title.
          existing.name = rel.name;
        }
      } else {
        acc.set(key, {
          key,
          name: rel.name,
          hasDiseasePage: false,
          icd10: undefined,
        });
      }
    }
  }

  // Indication names — union in (status handled per-drug in the edges).
  for (const drug of drugs) {
    for (const ind of drug.indications) {
      const key = slugifyConditionName(ind.name);
      if (!key || acc.has(key)) continue;
      acc.set(key, {
        key,
        name: ind.name,
        hasDiseasePage: false,
        icd10: undefined,
      });
    }
  }

  const out = new Map<string, KnowledgeCondition>();
  for (const value of acc.values()) {
    out.set(value.key, {
      key: value.key,
      name: value.name,
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
  class: { label: string };
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

/** Best single target for a string — the head (pre-parenthesis) region. */
function resolveTarget(text: string): KnowledgeTarget | null {
  const head = text.slice(0, Math.max(text.indexOf("("), 0) || text.length);
  const inHead = resolveTargetsIn(head);
  if (inHead.length > 0) return inHead[0].target;
  return resolveTargetsIn(text)[0]?.target ?? null;
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
 * Ordering is documented in entities/mechanism-actions.ts — notably
 * "negligible" must outrank "transporter/inhibitor" patterns.
 */
function deriveActions(evidence: string[], kind: TargetKind): string[] {
  const joined = evidence.join(" ").toLowerCase();
  const has = (needle: string) => joined.includes(needle);
  const actions: string[] = [];

  if (has("negligible")) actions.push("negligible-affinity");
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
  const unresolvedTargetTexts: string[] = [];

  const addTargetEvidence = (text: string, fromPrimary: boolean, targets: KnowledgeTarget[]) => {
    if (targets.length === 0) {
      if (!unresolvedTargetTexts.includes(text)) unresolvedTargetTexts.push(text);
      return;
    }
    for (const target of targets) {
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

  // Derive actions per edge from its evidence.
  for (const edge of edges.values()) {
    const target = knowledgeGraph.targets.get(edge.targetId);
    edge.actions = deriveActions(edge.evidence, target?.kind ?? "receptor");
  }

  // Stable order: transporters first (registry order), then receptors,
  // then enzymes/channels — mirrors the registry declaration order.
  const targetOrder = new Map(knowledgeTargets.map((t, i) => [t.id, i]));
  const targetEdges = [...edges.values()].sort(
    (a, b) => targetOrder.get(a.targetId)! - targetOrder.get(b.targetId)!
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
    const key = slugifyConditionName(name);
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
    class: { label: drug.drugClassLabel },
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
