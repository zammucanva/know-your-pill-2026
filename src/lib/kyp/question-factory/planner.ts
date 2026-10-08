/**
 * Planner: decides WHICH slot to try next.
 *
 * Question-space exploration, in order:
 *   source facts -> enumerated slots (concepts) -> fingerprint dedupe ->
 *   UNSEEN concepts first -> balanced across difficulty and family
 *
 * Properties:
 *   - Deterministic for a given (request, seed, history): ordering uses
 *     seeded shuffles and smooth weighted round-robin, never chance.
 *   - GLOBAL unseen-first: every unused concept is offered before ANY
 *     previously seen concept is reused, across all templates and tiers.
 *   - Families are balanced by configurable weights, and "Mixed"
 *     difficulty interleaves tiers by DIFFICULTY_MIX. A family or tier with
 *     no source data contributes nothing and its share is redistributed to
 *     the others; quality is never lowered to fill a quota.
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

/** How "Mixed" difficulty is split across tiers (configurable). */
export const DIFFICULTY_MIX: Record<Difficulty, number> = { easy: 40, moderate: 40, hard: 20 };

export interface PlannerInput {
  ctx: TemplateContext;
  templates: QuestionTemplate[];
  kind: KindSelection;
  difficulty: DifficultySelection;
  seed: number;
  /** Concept fingerprints that may never be asked (accepted in this job,
   *  or seen when never-repeat is on). */
  blocked: (fingerprint: string) => boolean;
  /** Concepts the learner has seen; asked only after every unseen one. */
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

interface Picker {
  next(): PlannedSlot | null;
  remaining(): number;
}

/* ============================================================
   Generic smooth weighted round-robin
   ============================================================ */

/** Interleave pickers by weight; exhausted pickers drop out and their
 *  share is redistributed. Deterministic. */
function weightedPicker(entries: Array<{ weight: number; picker: Picker }>): Picker {
  const credit = entries.map(() => 0);
  return {
    next(): PlannedSlot | null {
      const active = entries.map((e, i) => ({ e, i })).filter(({ e }) => e.picker.remaining() > 0);
      if (active.length === 0) return null;
      const total = active.reduce((n, { e }) => n + e.weight, 0);
      let best = active[0];
      let bestCredit = -Infinity;
      for (const a of active) {
        credit[a.i] += a.e.weight;
        if (credit[a.i] > bestCredit) {
          bestCredit = credit[a.i];
          best = a;
        }
      }
      credit[best.i] -= total;
      return best.e.picker.next();
    },
    remaining: () => entries.reduce((n, e) => n + e.picker.remaining(), 0),
  };
}

/** Round-robin over a list of queues (used inside one family). */
function queuePicker(queues: PlannedSlot[][]): Picker {
  const cursor = queues.map(() => 0);
  let turn = 0;
  let left = queues.reduce((n, q) => n + q.length, 0);
  return {
    next(): PlannedSlot | null {
      if (left === 0) return null;
      for (let tries = 0; tries < queues.length; tries++) {
        const i = (turn + tries) % queues.length;
        if (cursor[i] < queues[i].length) {
          turn = i + 1;
          left--;
          return queues[i][cursor[i]++];
        }
      }
      return null;
    },
    remaining: () => left,
  };
}

/* ============================================================
   One difficulty tier -> two phases (unseen, then seen)
   ============================================================ */

function templateAllowed(t: QuestionTemplate, kind: KindSelection, difficulty: DifficultySelection): boolean {
  if (kind !== "mixed" && t.kind !== kind) return false;
  if (difficulty !== "mixed" && depthToDifficulty(t.depth) !== difficulty) return false;
  return true;
}

interface TierPlan {
  unseen: Picker;
  seen: Picker;
  perTemplate: Record<string, number>;
  perFamily: Record<string, number>;
  unseenTotal: number;
  total: number;
}

/** Balance families inside one phase by weight (queues keyed by template). */
function familyPicker(
  kind: KindSelection,
  byTemplate: Map<QuestionTemplate, PlannedSlot[]>
): Picker {
  const byFamily = new Map<TemplateFamily, PlannedSlot[][]>();
  for (const [template, queue] of byTemplate) {
    if (queue.length === 0) continue;
    const list = byFamily.get(template.family) ?? [];
    list.push(queue);
    byFamily.set(template.family, list);
  }

  const weights = new Map<TemplateFamily, number>();
  if (kind === "mixed") {
    for (const bucket of Object.values(MIXED_BUCKETS)) {
      const active = bucket.families.filter((f) => byFamily.has(f));
      for (const f of active) weights.set(f, bucket.weight / active.length);
    }
  } else {
    for (const f of byFamily.keys()) weights.set(f, 1);
  }

  return weightedPicker(
    [...weights.entries()].map(([family, weight]) => ({
      weight,
      picker: queuePicker(byFamily.get(family) ?? []),
    }))
  );
}

function buildTierPlan(input: PlannerInput): TierPlan {
  const { ctx, kind, difficulty, seed } = input;
  const templates = input.templates.filter(
    (t) => templateAllowed(t, kind, difficulty) && (t.scopeKind === "drug" || ctx.includeGlobal)
  );

  const claimed = new Set<string>();
  const unseenQueues = new Map<QuestionTemplate, PlannedSlot[]>();
  const seenQueues = new Map<QuestionTemplate, PlannedSlot[]>();
  const perTemplate: Record<string, number> = {};
  const perFamily: Record<string, number> = {};
  let unseenTotal = 0;
  let total = 0;

  for (const template of templates) {
    const unseen: PlannedSlot[] = [];
    const seen: PlannedSlot[] = [];
    for (const slot of template.enumerate(ctx)) {
      const fingerprint = semanticFingerprint(slot.concept);
      if (claimed.has(fingerprint)) continue; // same concept already planned
      claimed.add(fingerprint);
      if (input.blocked(fingerprint)) continue;
      total++;
      perTemplate[template.id] = (perTemplate[template.id] ?? 0) + 1;
      perFamily[template.family] = (perFamily[template.family] ?? 0) + 1;
      const planned = { template, slot, fingerprint };
      if (input.seen(fingerprint)) {
        if (input.allowSeenReuse) seen.push(planned);
      } else {
        unseenTotal++;
        unseen.push(planned);
      }
    }
    const rng = createRng(seedFromString(`${seed}|plan|${template.id}`));
    unseenQueues.set(template, rng.shuffle(unseen));
    seenQueues.set(template, rng.shuffle(seen));
  }

  return {
    unseen: familyPicker(kind, unseenQueues),
    seen: familyPicker(kind, seenQueues),
    perTemplate,
    perFamily,
    unseenTotal,
    total,
  };
}

/* ============================================================
   Public plan
   ============================================================ */

/**
 * Build a plan. Every unseen concept (across all tiers and families) is
 * offered before any seen concept is reused. "Mixed" difficulty
 * interleaves tiers by DIFFICULTY_MIX within each phase.
 */
export function buildPlan(input: PlannerInput): Plan {
  const tiers: Array<{ weight: number; plan: TierPlan }> =
    input.difficulty === "mixed"
      ? (Object.keys(DIFFICULTY_MIX) as Difficulty[]).map((tier) => ({
          weight: DIFFICULTY_MIX[tier],
          plan: buildTierPlan({ ...input, difficulty: tier, seed: input.seed + tier.length }),
        }))
      : [{ weight: 1, plan: buildTierPlan(input) }];

  const unseenPhase = weightedPicker(tiers.map((t) => ({ weight: t.weight, picker: t.plan.unseen })));
  const seenPhase = weightedPicker(tiers.map((t) => ({ weight: t.weight, picker: t.plan.seen })));

  const merge = (pick: (p: TierPlan) => Record<string, number>) => {
    const out: Record<string, number> = {};
    for (const t of tiers) for (const [k, v] of Object.entries(pick(t.plan))) out[k] = (out[k] ?? 0) + v;
    return out;
  };

  return {
    next: () => unseenPhase.next() ?? seenPhase.next(),
    remaining: () => unseenPhase.remaining() + seenPhase.remaining(),
    perTemplate: merge((p) => p.perTemplate),
    perFamily: merge((p) => p.perFamily),
    unseen: tiers.reduce((n, t) => n + t.plan.unseenTotal, 0),
    total: tiers.reduce((n, t) => n + t.plan.total, 0),
  };
}
