/**
 * Question generation: one slot in, one question out.
 *
 * Deterministic by construction. Everything random flows from a single
 * per-question seed derived from (job seed, slot id), so the same
 * generator version, template, slot and seed always rebuild the exact
 * same question, and a different job seed explores different valid
 * wording, distractor sets and option orders.
 *
 * Option placement is BALANCED, not merely shuffled: the correct answer
 * goes to whichever position has been used least so far in the job (ties
 * broken by the seeded rng), keeping A/B/C/D close to 25% each.
 */

import { createRng, seedFromString } from "@/lib/kyp/custom-test/rng";
import { semanticFingerprint, structureFingerprint } from "./fingerprint";
import { GENERATOR_VERSION } from "./version";
import type { FactStore } from "./facts";
import type { QuestionTemplate, Slot, TemplateContext } from "./templates/types";
import type {
  ClaimLink,
  Difficulty,
  GeneratedQuestion,
  OptionClaim,
  RejectReason,
  SourceRef,
} from "./types";

export const OPTION_COUNT = 4;

export function depthToDifficulty(depth: 1 | 2 | 3): Difficulty {
  return depth === 1 ? "easy" : depth === 2 ? "moderate" : "hard";
}

/** The seed that fully determines one question. */
export function questionSeed(jobSeed: number, slotId: string): number {
  return seedFromString(`${jobSeed}|${slotId}`);
}

export interface GenerateInput {
  template: QuestionTemplate;
  slot: Slot;
  ctx: TemplateContext;
  jobSeed: number;
  batchId: string;
  /** How often each position (0..3) has held the correct answer so far. */
  positionCounts: number[];
  /** ISO timestamp provider (injected so tests are deterministic). */
  now: () => string;
}

export type GenerateResult =
  | { ok: true; question: GeneratedQuestion }
  | { ok: false; reason: RejectReason };

/** Position with the fewest correct answers; ties broken by the rng. */
export function leastUsedPosition(counts: number[], pick: (n: number) => number): number {
  const min = Math.min(...counts);
  const ties = counts.map((c, i) => (c === min ? i : -1)).filter((i) => i >= 0);
  return ties[pick(ties.length)];
}

function dedupeSources(sources: SourceRef[]): SourceRef[] {
  const seen = new Set<string>();
  return sources.filter((s) => {
    const key = `${s.slug ?? ""}|${s.sectionLabel}|${s.sectionHref ?? ""}|${s.name}`;
    return seen.has(key) ? false : (seen.add(key), true);
  });
}

export function generateQuestion(input: GenerateInput): GenerateResult {
  const { template, slot, ctx, jobSeed, batchId, positionCounts, now } = input;
  const seed = questionSeed(jobSeed, slot.slotId);
  const rng = createRng(seed);

  const built = template.build(ctx, slot, rng);
  if (!built.ok) return built;
  const { candidate } = built;

  const correct = candidate.options.filter((o) => o.correct);
  const wrong = candidate.options.filter((o) => !o.correct);
  if (correct.length !== 1 || wrong.length !== OPTION_COUNT - 1) {
    return { ok: false, reason: "VALIDATION_FAILED" };
  }

  // seeded wording and balanced option order
  const stem = candidate.stems[rng.int(candidate.stems.length)];
  const correctPosition = leastUsedPosition(positionCounts, (n) => rng.int(n));
  const shuffledWrong = rng.shuffle([...wrong]);
  const ordered = [...shuffledWrong];
  ordered.splice(correctPosition, 0, correct[0]);

  const positive = slot.concept.polarity === "positive";
  const claims: OptionClaim[] = ordered.map((o, optionIndex) => ({
    optionIndex,
    links: o.links as ClaimLink[],
    expected: o.correct ? positive : !positive,
  }));

  const fingerprint = semanticFingerprint(slot.concept);
  const optionKeys = ordered.map((o) => o.entityId ?? o.text);

  const dominant = candidate.facts[0];
  const node = dominant ? ctx.store.drugs.get(dominant.subject.id.replace(/^drug:/, "")) : undefined;

  return {
    ok: true,
    question: {
      id: `qf-${fingerprint}-${seed.toString(36)}`,
      sourceType: "GENERATED",
      status: "GENERATED",
      stem,
      options: ordered.map((o) => ({ text: o.text, entityId: o.entityId })),
      correctIndex: correctPosition,
      explanation: candidate.explanation,
      family: template.family,
      kind: template.kind,
      difficulty: depthToDifficulty(template.depth),
      polarity: slot.concept.polarity,
      depth: template.depth,
      fingerprint,
      structureFingerprint: structureFingerprint(fingerprint, optionKeys),
      claims,
      provenance: {
        batchId,
        seed,
        batchSeed: jobSeed,
        generatorVersion: GENERATOR_VERSION,
        templateId: template.id,
        templateVersion: template.version,
        factIds: candidate.facts.map((f) => f.id),
        sources: dedupeSources(candidate.facts.map((f) => f.source)),
        createdAt: now(),
      },
      placement: node ? node.placement : null,
      unreviewed: true,
    },
  };
}

/** Convenience for tests and the planner: contexts need a store. */
export function contextFor(
  store: FactStore,
  scopeDrugs: TemplateContext["scopeDrugs"],
  includeGlobal: boolean
): TemplateContext {
  return {
    store,
    scopeDrugs,
    scopeSlugs: new Set(scopeDrugs.map((d) => d.slug)),
    allDrugs: [...store.drugs.values()],
    includeGlobal,
  };
}
