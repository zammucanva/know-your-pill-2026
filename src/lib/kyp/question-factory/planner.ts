/**
 * Planner: decides WHICH slot to try next.
 *
 * Question-space exploration, in order:
 *   source facts -> enumerated slots (concepts) -> fingerprint dedupe ->
 *   unseen before seen -> balanced across families -> next slot
 *
 * Properties:
 *   - Deterministic for a given (request, seed, history): ordering uses
 *     seeded shuffles and a smooth weighted round-robin, never chance.
 *   - Unused concepts are always taken before reused ones.
 *   - Families are balanced by configurable weights. A family with no
 *     source data contributes nothing and its share is redistributed to
 *     the families that can supply questions; quality is never lowered to
 *     fill a quota.
 */

import { createRng, seedFromString } from "@/lib/kyp/custom-test/rng";
import { semanticFingerprint } from "./fingerprint";
import { depthToDifficulty } from "./generate";
import type { QuestionTemplate, Slot, TemplateContext } from "./templates/types";
import type { Difficulty, DifficultySelection, KindSelection, TemplateFamily } from "./types";

/** "Mixed" splits questions across four buckets (configurable). */
export const MIXED_BUCKETS: Record<string, { weight: number; families: TemplateFamily[] }> = {
  directClassification: {
    weight: 25,
    families: ["DIRECT_RECALL", "CLASSIFICATION", "INDICATION", "ADVERSE_EFFECT", "IDENTIFICATION"],
  },
  mechanismRelationship: {
    weight: 25,
    families: ["MECHANISM", "RELATIONSHIP", "ASSOCIATION", "SEQUENCE_PATHWAY"],
  },
  conceptualComparison: {
    weight: 25,
    families: ["COMPARISON", "EXCEPTION", "MATCHING", "MULTI_FACT", "CONCEPT_APPLICATION"],
  },
  clinical: { weight: 25, families: ["CLINICAL_STYLE"] },
};

export interface PlannerInput {
  ctx: TemplateContext;
  templates: QuestionTemplate[];
  kind: KindSelection;
  difficulty: DifficultySelection;
  seed: number;
  /** Concept fingerprints that may never be asked (accepted in this job,
   *  or seen when never-repeat is on). */
  blocked: (fingerprint: string) => boolean;
  /** Concepts the learner has seen; asked last, and only when allowed. */
  seen: (fingerprint: string) => boolean;
  /** When false, seen concepts are dropped instead of reused last. */
  allowSeenReuse: boolean;
}

export interface PlannedSlot {
  template: QuestionTemplate;
  slot: Slot;
  fingerprint: string;
}

export interface Plan {
  next(): PlannedSlot | null;
  remaining(): number;
  /** Distinct concepts available per template after dedupe and filtering. */
  perTemplate: Record<string, number>;
  /** Distinct concepts available per family. */
  perFamily: Record<string, number>;
  /** Concepts the learner has not yet seen. */
  unseen: number;
  /** All distinct meaningful concepts for this selection. */
  total: number;
}

function templateAllowed(t: QuestionTemplate, kind: KindSelection, difficulty: DifficultySelection): boolean {
  if (kind !== "mixed" && t.kind !== kind) return false;
  if (difficulty !== "mixed" && depthToDifficulty(t.depth) !== difficulty) return false;
  return true;
}

/** How "Mixed" difficulty is split across tiers (configurable). A tier
 *  with no source data contributes nothing and its share is redistributed. */
export const DIFFICULTY_MIX: Record<Difficulty, number> = { easy: 40, moderate: 40, hard: 20 };

/**
 * Build a plan. For a single difficulty this is one balanced plan; for
 * "mixed" it interleaves one balanced plan per tier by DIFFICULTY_MIX, so a
 * mixed quiz really contains easy, moderate and hard questions.
 */
export function buildPlan(input: PlannerInput): Plan {
  if (input.difficulty !== "mixed") return buildTierPlan(input);

  const tiers = (Object.keys(DIFFICULTY_MIX) as Difficulty[])
    .map((tier) => ({
      tier,
      weight: DIFFICULTY_MIX[tier],
      plan: buildTierPlan({ ...input, difficulty: tier, seed: input.seed + tier.length }),
    }))
    .filter((t) => t.plan.remaining() > 0);

  const credit = new Map<Difficulty, number>(tiers.map((t) => [t.tier, 0]));
  const sum = (active: typeof tiers) => active.reduce((n, t) => n + t.weight, 0);

  const merge = (pick: (p: Plan) => Record<string, number>) => {
    const out: Record<string, number> = {};
    for (const t of tiers) for (const [k, v] of Object.entries(pick(t.plan))) out[k] = (out[k] ?? 0) + v;
    return out;
  };

  return {
    next(): PlannedSlot | null {
      const active = tiers.filter((t) => t.plan.remaining() > 0);
      if (active.length === 0) return null;
      let best = active[0];
      let bestCredit = -Infinity;
      for (const t of active) {
        const c = (credit.get(t.tier) ?? 0) + t.weight;
        credit.set(t.tier, c);
        if (c > bestCredit) {
          bestCredit = c;
          best = t;
        }
      }
      credit.set(best.tier, (credit.get(best.tier) ?? 0) - sum(active));
      return best.plan.next();
    },
    remaining: () => tiers.reduce((n, t) => n + t.plan.remaining(), 0),
    perTemplate: merge((p) => p.perTemplate),
    perFamily: merge((p) => p.perFamily),
    unseen: tiers.reduce((n, t) => n + t.plan.unseen, 0),
    total: tiers.reduce((n, t) => n + t.plan.total, 0),
  };
}

function buildTierPlan(input: PlannerInput): Plan {
  const { ctx, kind, difficulty, seed } = input;
  const templates = input.templates.filter(
    (t) => templateAllowed(t, kind, difficulty) && (t.scopeKind === "drug" || ctx.includeGlobal)
  );

  /* 1. enumerate, fingerprint, dedupe across templates, split seen/unseen */
  const claimed = new Set<string>();
  const queues = new Map<string, PlannedSlot[]>();
  const perTemplate: Record<string, number> = {};
  const perFamily: Record<string, number> = {};
  let unseenTotal = 0;
  let total = 0;

  for (const template of templates) {
    const unseen: PlannedSlot[] = [];
    const seenSlots: PlannedSlot[] = [];
    for (const slot of template.enumerate(ctx)) {
      const fingerprint = semanticFingerprint(slot.concept);
      if (claimed.has(fingerprint)) continue; // same concept already planned
      claimed.add(fingerprint);
      if (input.blocked(fingerprint)) continue;
      const planned = { template, slot, fingerprint };
      if (input.seen(fingerprint)) {
        total++;
        perTemplate[template.id] = (perTemplate[template.id] ?? 0) + 1;
        perFamily[template.family] = (perFamily[template.family] ?? 0) + 1;
        if (input.allowSeenReuse) seenSlots.push(planned);
      } else {
        total++;
        unseenTotal++;
        perTemplate[template.id] = (perTemplate[template.id] ?? 0) + 1;
        perFamily[template.family] = (perFamily[template.family] ?? 0) + 1;
        unseen.push(planned);
      }
    }
    const rng = createRng(seedFromString(`${seed}|plan|${template.id}`));
    rng.shuffle(unseen);
    rng.shuffle(seenSlots);
    const queue = [...unseen, ...seenSlots];
    if (queue.length > 0) queues.set(template.id, queue);
  }

  /* 2. family weights (only families that can actually supply questions) */
  const activeByFamily = new Map<TemplateFamily, QuestionTemplate[]>();
  for (const t of templates) {
    if (!queues.has(t.id)) continue;
    const list = activeByFamily.get(t.family) ?? [];
    list.push(t);
    activeByFamily.set(t.family, list);
  }

  const weights = new Map<TemplateFamily, number>();
  if (kind === "mixed") {
    const activeBuckets = Object.values(MIXED_BUCKETS).filter((b) =>
      b.families.some((f) => activeByFamily.has(f))
    );
    for (const bucket of activeBuckets) {
      const active = bucket.families.filter((f) => activeByFamily.has(f));
      for (const f of active) weights.set(f, bucket.weight / active.length);
    }
  } else {
    for (const f of activeByFamily.keys()) weights.set(f, 1);
  }

  /* 3. smooth weighted round-robin over families, round-robin in family */
  const credit = new Map<TemplateFamily, number>([...weights.keys()].map((f) => [f, 0]));
  const rotation = new Map<TemplateFamily, number>();
  const cursor = new Map<string, number>(); // queue read position per template

  const familyHasSlots = (f: TemplateFamily) =>
    (activeByFamily.get(f) ?? []).some((t) => (cursor.get(t.id) ?? 0) < (queues.get(t.id)?.length ?? 0));

  let remaining = [...queues.values()].reduce((n, q) => n + q.length, 0);

  const next = (): PlannedSlot | null => {
    const families = [...weights.keys()].filter(familyHasSlots);
    if (families.length === 0) return null;
    const sum = families.reduce((n, f) => n + (weights.get(f) ?? 0), 0);
    let best: TemplateFamily = families[0];
    let bestCredit = -Infinity;
    for (const f of families) {
      const c = (credit.get(f) ?? 0) + (weights.get(f) ?? 0);
      credit.set(f, c);
      if (c > bestCredit) {
        bestCredit = c;
        best = f;
      }
    }
    credit.set(best, (credit.get(best) ?? 0) - sum);

    const members = (activeByFamily.get(best) ?? []).filter(
      (t) => (cursor.get(t.id) ?? 0) < (queues.get(t.id)?.length ?? 0)
    );
    const turn = rotation.get(best) ?? 0;
    const template = members[turn % members.length];
    rotation.set(best, turn + 1);
    const at = cursor.get(template.id) ?? 0;
    cursor.set(template.id, at + 1);
    remaining--;
    return queues.get(template.id)![at];
  };

  return {
    next,
    remaining: () => remaining,
    perTemplate,
    perFamily,
    unseen: unseenTotal,
    total,
  };
}
