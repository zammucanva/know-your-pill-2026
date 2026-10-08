/**
 * Brain-atlas, pathway and gene templates (scopeKind "global").
 *
 * These ask about neuroscience entities that are not tied to one drug, so
 * they are only active when the requested scope is broad (no chapter,
 * topic or drug narrowing). Their source pools are small, so they exhaust
 * quickly; the engine reports that honestly rather than padding.
 */

import { pickDistractors } from "../distractors";
import { TEMPLATE_VERSION } from "../version";
import { slotId } from "./helpers";
import type { BuildResult, Slot, QuestionTemplate, TemplateContext } from "./types";
import type {
  ClaimLink,
  EntityRef,
  Fact,
  QuestionKind,
  RelationId,
  TemplateFamily,
} from "../types";

const COUNT = 3;
const link = (
  relations: RelationId[],
  subjectId: string,
  objectId: string
): ClaimLink => ({ relations, subjectId, objectId });

interface Cfg {
  id: string;
  family: TemplateFamily;
  kind: QuestionKind;
  depth: 1 | 2 | 3;
}

function mk(
  cfg: Cfg,
  enumerate: (ctx: TemplateContext) => Slot[],
  build: QuestionTemplate["build"]
): QuestionTemplate {
  return { ...cfg, version: TEMPLATE_VERSION, scopeKind: "global", enumerate, build };
}

/** Slots over every fact of a relation, answer = `answer(f)`, subject = `subject(f)`. */
function perFact(
  cfg: Cfg,
  relation: RelationId,
  frame: string,
  subject: (f: Fact) => string,
  answer: (f: Fact) => string
) {
  return (ctx: TemplateContext): Slot[] =>
    ctx.includeGlobal
      ? ctx.store.byRelation(relation).map((f) => ({
          slotId: slotId(cfg.id, f.id),
          payload: [f.id],
          concept: {
            family: cfg.family,
            relations: [relation],
            subjectIds: [subject(f)],
            answerIds: [answer(f)],
            polarity: "positive" as const,
            frame,
          },
        }))
      : [];
}

/** Distinct object entities of a relation, as a candidate pool. */
function objectsOf(ctx: TemplateContext, relation: RelationId): EntityRef[] {
  const seen = new Set<string>();
  return ctx.store.byRelation(relation).flatMap((f) =>
    seen.has(f.object.id) ? [] : (seen.add(f.object.id), [f.object])
  );
}

function subjectsOf(ctx: TemplateContext, relation: RelationId): EntityRef[] {
  const seen = new Set<string>();
  return ctx.store.byRelation(relation).flatMap((f) =>
    seen.has(f.subject.id) ? [] : (seen.add(f.subject.id), [f.subject])
  );
}

/* ── region <-> function / disorder ─────────────────────────── */

const REGION_FN: Cfg = { id: "brain-region-of-function", family: "DIRECT_RECALL", kind: "standard", depth: 1 };
export const BRAIN_REGION_OF_FUNCTION = mk(
  REGION_FN,
  perFact(REGION_FN, "hasBrainFunction", "inverse", (f) => f.object.id, (f) => f.subject.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    // a region is a valid distractor only if it does not document the function
    const picked = pickDistractors({
      tiers: [
        subjectsOf(ctx, "hasBrainFunction").filter(
          (r) => !ctx.store.holds("hasBrainFunction", r.id, fact.object.id)
        ),
      ],
      excludeIds: new Set([fact.subject.id]),
      guardLabels: [],
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (regionId: string) => [link(["hasBrainFunction"], regionId, fact.object.id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which brain region is documented to be involved in ${fact.object.label.toLowerCase()}?`],
        options: [
          { text: fact.subject.label, entityId: fact.subject.id, correct: true, links: l(fact.subject.id) },
          ...picked.map((r) => ({ text: r.label, entityId: r.id, correct: false, links: l(r.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

const FN_OF_REGION: Cfg = { id: "brain-function-of-region", family: "DIRECT_RECALL", kind: "standard", depth: 1 };
export const BRAIN_FUNCTION_OF_REGION = mk(
  FN_OF_REGION,
  perFact(FN_OF_REGION, "hasBrainFunction", "forward", (f) => f.subject.id, (f) => f.object.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const own = ctx.store.factsOf("hasBrainFunction", fact.subject.id);
    const picked = pickDistractors({
      tiers: [objectsOf(ctx, "hasBrainFunction")],
      excludeIds: new Set(own.map((f) => f.object.id)),
      guardLabels: own.map((f) => f.object.label),
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (fnId: string) => [link(["hasBrainFunction"], fact.subject.id, fnId)];
    return {
      ok: true,
      candidate: {
        stems: [`Which of the following is a documented function of the ${fact.subject.label}?`],
        options: [
          { text: fact.object.label, entityId: fact.object.id, correct: true, links: l(fact.object.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

const REGION_DIS: Cfg = { id: "brain-region-of-disorder", family: "DIRECT_RECALL", kind: "standard", depth: 1 };
export const BRAIN_REGION_OF_DISORDER = mk(
  REGION_DIS,
  perFact(REGION_DIS, "associatedWithDisorder", "inverse", (f) => f.object.id, (f) => f.subject.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const picked = pickDistractors({
      tiers: [
        subjectsOf(ctx, "associatedWithDisorder").filter(
          (r) => !ctx.store.holds("associatedWithDisorder", r.id, fact.object.id)
        ),
      ],
      excludeIds: new Set([fact.subject.id]),
      guardLabels: [],
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (regionId: string) => [link(["associatedWithDisorder"], regionId, fact.object.id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which brain region is documented to be associated with ${fact.object.label.toLowerCase()}?`],
        options: [
          { text: fact.subject.label, entityId: fact.subject.id, correct: true, links: l(fact.subject.id) },
          ...picked.map((r) => ({ text: r.label, entityId: r.id, correct: false, links: l(r.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

const DIS_OF_REGION: Cfg = { id: "brain-disorder-of-region", family: "DIRECT_RECALL", kind: "standard", depth: 1 };
export const BRAIN_DISORDER_OF_REGION = mk(
  DIS_OF_REGION,
  perFact(DIS_OF_REGION, "associatedWithDisorder", "forward", (f) => f.subject.id, (f) => f.object.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const own = ctx.store.factsOf("associatedWithDisorder", fact.subject.id);
    const picked = pickDistractors({
      tiers: [objectsOf(ctx, "associatedWithDisorder")],
      excludeIds: new Set(own.map((f) => f.object.id)),
      guardLabels: own.map((f) => f.object.label),
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (id: string) => [link(["associatedWithDisorder"], fact.subject.id, id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which of the following disorders is documented as associated with the ${fact.subject.label}?`],
        options: [
          { text: fact.object.label, entityId: fact.object.id, correct: true, links: l(fact.object.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

/* ── pathways ───────────────────────────────────────────────── */

const PATH_ENDS: Cfg = { id: "path-endpoints", family: "SEQUENCE_PATHWAY", kind: "conceptual", depth: 2 };
export const PATHWAY_ENDPOINTS = mk(
  PATH_ENDS,
  (ctx) =>
    ctx.includeGlobal
      ? ctx.store.byRelation("originatesIn").map((o) => {
          const t = ctx.store.factsOf("terminatesIn", o.subject.id)[0];
          return {
            slotId: slotId(PATH_ENDS.id, o.subject.id),
            payload: [o.id, t?.id ?? ""],
            concept: {
              family: PATH_ENDS.family,
              relations: ["originatesIn", "terminatesIn"] as RelationId[],
              subjectIds: [o.object.id, t?.object.id ?? ""],
              answerIds: [o.subject.id],
              polarity: "positive" as const,
              frame: "endpoints",
            },
          };
        }).filter((s) => s.payload[1])
      : [],
  (ctx, slot, rng): BuildResult => {
    const origin = ctx.store.byId.get(slot.payload[0]);
    const term = ctx.store.byId.get(slot.payload[1]);
    if (!origin || !term) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const links = (pathwayId: string): ClaimLink[] => [
      link(["originatesIn"], pathwayId, origin.object.id),
      link(["terminatesIn"], pathwayId, term.object.id),
    ];
    // partial matches (shared origin or terminus) make the best distractors
    const others = subjectsOf(ctx, "originatesIn").filter((p) => p.id !== origin.subject.id);
    const partial = others.filter(
      (p) =>
        ctx.store.holds("originatesIn", p.id, origin.object.id) ||
        ctx.store.holds("terminatesIn", p.id, term.object.id)
    );
    const rest = others.filter((p) => !partial.includes(p));
    const picked = pickDistractors({
      tiers: [partial, rest],
      excludeIds: new Set([origin.subject.id]),
      guardLabels: [],
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    return {
      ok: true,
      candidate: {
        stems: [
          `Which pathway is documented to run from ${origin.object.label} to ${term.object.label}?`,
        ],
        options: [
          { text: origin.subject.label, entityId: origin.subject.id, correct: true, links: links(origin.subject.id) },
          ...picked.map((p) => ({ text: p.label, entityId: p.id, correct: false, links: links(p.id) })),
        ],
        explanation: origin.explanation,
        facts: [origin, term],
      },
    };
  }
);

function terminalTemplate(id: string, relation: "originatesIn" | "terminatesIn", verb: string) {
  const cfg: Cfg = { id, family: "SEQUENCE_PATHWAY", kind: "conceptual", depth: 1 };
  return mk(
    cfg,
    perFact(cfg, relation, "forward", (f) => f.subject.id, (f) => f.object.id),
    (ctx, slot, rng): BuildResult => {
      const fact = ctx.store.byId.get(slot.payload[0]);
      if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
      const both = [
        ...ctx.store.factsOf("originatesIn", fact.subject.id),
        ...ctx.store.factsOf("terminatesIn", fact.subject.id),
      ];
      const picked = pickDistractors({
        tiers: [[...objectsOf(ctx, "originatesIn"), ...objectsOf(ctx, "terminatesIn")]],
        excludeIds: new Set(both.map((f) => f.object.id)),
        guardLabels: both.map((f) => f.object.label),
        count: COUNT,
        rng,
      });
      if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
      const l = (id2: string) => [link([relation], fact.subject.id, id2)];
      return {
        ok: true,
        candidate: {
          stems: [`Where does the ${fact.subject.label} ${verb}?`],
          options: [
            { text: fact.object.label, entityId: fact.object.id, correct: true, links: l(fact.object.id) },
            ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
          ],
          explanation: fact.explanation,
          facts: [fact],
        },
      };
    }
  );
}

export const PATHWAY_TERMINUS = terminalTemplate("path-terminus", "terminatesIn", "terminate");
export const PATHWAY_ORIGIN = terminalTemplate("path-origin", "originatesIn", "originate");

const PATH_NT: Cfg = { id: "path-neurotransmitter", family: "SEQUENCE_PATHWAY", kind: "conceptual", depth: 1 };
export const PATHWAY_NEUROTRANSMITTER = mk(
  PATH_NT,
  perFact(PATH_NT, "usesNeurotransmitter", "forward", (f) => f.subject.id, (f) => f.object.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const own = ctx.store.factsOf("usesNeurotransmitter", fact.subject.id);
    const pool = [
      ...objectsOf(ctx, "modulatesNeurotransmitter"),
      ...objectsOf(ctx, "usesNeurotransmitter"),
    ];
    const picked = pickDistractors({
      tiers: [pool],
      excludeIds: new Set(own.map((f) => f.object.id)),
      guardLabels: own.map((f) => f.object.label),
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (id: string) => [link(["usesNeurotransmitter"], fact.subject.id, id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which neurotransmitter is used by the ${fact.subject.label}?`],
        options: [
          { text: fact.object.label, entityId: fact.object.id, correct: true, links: l(fact.object.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

/* ── genes ──────────────────────────────────────────────────── */

const GENE_OF: Cfg = { id: "gene-of-target", family: "DIRECT_RECALL", kind: "standard", depth: 1 };
export const GENE_OF_TARGET = mk(
  GENE_OF,
  perFact(GENE_OF, "encodedByGene", "forward", (f) => f.subject.id, (f) => f.object.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const picked = pickDistractors({
      tiers: [objectsOf(ctx, "encodedByGene")],
      excludeIds: new Set([fact.object.id]),
      guardLabels: [],
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (id: string) => [link(["encodedByGene"], fact.subject.id, id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which gene encodes the ${fact.subject.label}?`],
        options: [
          { text: fact.object.label, entityId: fact.object.id, correct: true, links: l(fact.object.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

const TARGET_OF: Cfg = { id: "target-of-gene", family: "IDENTIFICATION", kind: "standard", depth: 1 };
export const TARGET_OF_GENE = mk(
  TARGET_OF,
  perFact(TARGET_OF, "encodedByGene", "inverse", (f) => f.object.id, (f) => f.subject.id),
  (ctx, slot, rng): BuildResult => {
    const fact = ctx.store.byId.get(slot.payload[0]);
    if (!fact) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const picked = pickDistractors({
      tiers: [subjectsOf(ctx, "encodedByGene")],
      excludeIds: new Set([fact.subject.id]),
      guardLabels: [],
      count: COUNT,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const l = (targetId: string) => [link(["encodedByGene"], targetId, fact.object.id)];
    return {
      ok: true,
      candidate: {
        stems: [`Which of the following is encoded by the ${fact.object.label} gene?`],
        options: [
          { text: fact.subject.label, entityId: fact.subject.id, correct: true, links: l(fact.subject.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: l(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  }
);

export const BRAIN_TEMPLATES: QuestionTemplate[] = [
  BRAIN_REGION_OF_FUNCTION,
  BRAIN_FUNCTION_OF_REGION,
  BRAIN_REGION_OF_DISORDER,
  BRAIN_DISORDER_OF_REGION,
  PATHWAY_ENDPOINTS,
  PATHWAY_TERMINUS,
  PATHWAY_ORIGIN,
  PATHWAY_NEUROTRANSMITTER,
  GENE_OF_TARGET,
  TARGET_OF_GENE,
];
