/**
 * Multi-fact templates: the solver must connect several verified facts.
 *
 *   mf-class-effect              class + common side effect              depth 2
 *   mf-class-<A>-<B>             class + attribute A + attribute B       depth 3
 *   mf-pathway-neurotransmitter  pathway -> neurotransmitter <- drug     depth 2
 *
 * Every link in the chain is a stored fact, and every option carries the
 * full conjunction as claims, so the validator can prove the correct
 * option satisfies ALL links and each distractor fails at least one.
 *
 * The depth-3 questions are produced by ONE configurable factory (a class
 * plus two documented attributes), so adding another fact pair is a single
 * configuration entry, not new logic.
 */

import { pickDistractors } from "../distractors";
import { hash53 } from "../normalize";
import { TEMPLATE_VERSION } from "../version";
import { documentsSimilar, drugEntities, drugSlug, groupOf, slotId, tierDrugs } from "./helpers";
import type { BuildResult, QuestionTemplate, Slot } from "./types";
import type { ClaimLink, Fact, RelationId } from "../types";
import type { DrugNode } from "../facts";

const COMMON = groupOf("hasCommonAdverseEffect");
const SERIOUS = groupOf("hasSeriousAdverseEffect");
const MIN_CLASS_SIZE = 4; // a correct member plus three distractor members
const PER_DRUG_COMBOS = 2;

const fdaOnly = (f: Fact) => f.attrs?.status === "fda-approved";

/* ── mf-class-effect ────────────────────────────────────────── */

export const MF_CLASS_EFFECT: QuestionTemplate = {
  id: "mf-class-effect",
  version: TEMPLATE_VERSION,
  family: "MULTI_FACT",
  kind: "conceptual",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    for (const d of ctx.scopeDrugs) {
      const size = ctx.allDrugs.filter((x) => x.classId === d.classId).length;
      if (size < MIN_CLASS_SIZE) continue;
      for (const f of ctx.store.factsOf("hasCommonAdverseEffect", `drug:${d.slug}`)) {
        slots.push({
          slotId: slotId("mf-class-effect", f.id),
          payload: [f.id],
          concept: {
            family: "MULTI_FACT",
            relations: ["belongsToClass", "hasCommonAdverseEffect"],
            subjectIds: [d.classId, f.object.id],
            answerIds: [f.subject.id],
            polarity: "positive",
            frame: "class-effect",
          },
        });
      }
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const fact = ctx.store.byId.get(slot.payload[0]);
    const node = fact && ctx.store.drugs.get(drugSlug(fact.subject.id));
    if (!fact || !node) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const classFact = ctx.store.factsOf("belongsToClass", fact.subject.id)[0];

    const peers = ctx.allDrugs.filter(
      (d) =>
        d.classId === node.classId &&
        d.slug !== node.slug &&
        !COMMON.some((r) => ctx.store.holds(r, `drug:${d.slug}`, fact.object.id)) &&
        !documentsSimilar(ctx.store, `drug:${d.slug}`, COMMON, fact.object.label)
    );
    const picked = pickDistractors({
      tiers: [drugEntities(ctx.store, peers)],
      excludeIds: new Set([fact.subject.id]),
      guardLabels: [],
      count: 3,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

    const links = (drugId: string): ClaimLink[] => [
      { relations: ["belongsToClass"], subjectId: drugId, objectId: node.classId },
      { relations: COMMON, subjectId: drugId, objectId: fact.object.id },
    ];
    return {
      ok: true,
      candidate: {
        stems: [
          `Which medication in the ${node.classLabel} class is documented to list "${fact.object.label}" as a common side effect?`,
        ],
        options: [
          { text: node.name, entityId: fact.subject.id, correct: true, links: links(fact.subject.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: links(e.id) })),
        ],
        explanation: `${classFact.explanation} ${fact.explanation}`,
        facts: [classFact, fact],
      },
    };
  },
};

/* ── class + two attributes (depth 3) ───────────────────────── */

interface Attribute {
  relation: RelationId;
  /** Relations that count as "has this attribute" (e.g. common or serious). */
  group: RelationId[];
  accept?: (f: Fact) => boolean;
  /** How the stem names the attribute, given its label. */
  phrase: (label: string) => string;
}

interface ConjunctionConfig {
  id: string;
  a: Attribute;
  b: Attribute;
}

function classConjunction(cfg: ConjunctionConfig): QuestionTemplate {
  return {
    id: cfg.id,
    version: TEMPLATE_VERSION,
    family: "MULTI_FACT",
    kind: "conceptual",
    depth: 3,
    scopeKind: "drug",
    enumerate(ctx) {
      const slots: Slot[] = [];
      for (const d of ctx.scopeDrugs) {
        const subjectId = `drug:${d.slug}`;
        const size = ctx.allDrugs.filter((x) => x.classId === d.classId).length;
        if (size < MIN_CLASS_SIZE) continue;
        const as = ctx.store.factsOf(cfg.a.relation, subjectId).filter((f) => !cfg.a.accept || cfg.a.accept(f));
        const bs = ctx.store.factsOf(cfg.b.relation, subjectId).filter((f) => !cfg.b.accept || cfg.b.accept(f));
        const combos: Slot[] = [];
        for (const fa of as) {
          for (const fb of bs) {
            combos.push({
              slotId: slotId(cfg.id, fa.id, fb.id),
              payload: [fa.id, fb.id],
              concept: {
                family: "MULTI_FACT",
                relations: ["belongsToClass", cfg.a.relation, cfg.b.relation],
                subjectIds: [d.classId, fa.object.id, fb.object.id],
                answerIds: [subjectId],
                polarity: "positive",
                frame: cfg.id,
              },
            });
          }
        }
        combos.sort((x, y) => hash53(x.slotId) - hash53(y.slotId));
        slots.push(...combos.slice(0, PER_DRUG_COMBOS));
      }
      return slots;
    },
    build(ctx, slot, rng): BuildResult {
      const fa = ctx.store.byId.get(slot.payload[0]);
      const fb = ctx.store.byId.get(slot.payload[1]);
      const node = fa && ctx.store.drugs.get(drugSlug(fa.subject.id));
      if (!fa || !fb || !node) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
      const classFact = ctx.store.factsOf("belongsToClass", fa.subject.id)[0];

      // "has" is deliberately generous (exact OR near-synonym): a member
      // that merely resembles the asked attribute is never a safe distractor
      // for a question that needs it to fail.
      const has = (slug: string, attr: Attribute, fact: Fact) =>
        attr.group.some((r) => ctx.store.holds(r, `drug:${slug}`, fact.object.id)) ||
        documentsSimilar(ctx.store, `drug:${slug}`, attr.group, fact.object.label);

      // members that fail the conjunction: partial matches first (the most
      // instructive wrong answers), then members matching neither
      const peers = ctx.allDrugs.filter((d) => d.classId === node.classId && d.slug !== node.slug);
      const partial: DrugNode[] = [];
      const neither: DrugNode[] = [];
      for (const d of peers) {
        const hasA = has(d.slug, cfg.a, fa);
        const hasB = has(d.slug, cfg.b, fb);
        if (hasA && hasB) continue; // would satisfy the whole conjunction
        (hasA || hasB ? partial : neither).push(d);
      }
      const picked = pickDistractors({
        tiers: [drugEntities(ctx.store, partial), drugEntities(ctx.store, neither)],
        excludeIds: new Set([fa.subject.id]),
        guardLabels: [],
        count: 3,
        rng,
      });
      if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

      const links = (drugId: string): ClaimLink[] => [
        { relations: ["belongsToClass"], subjectId: drugId, objectId: node.classId },
        { relations: cfg.a.group, subjectId: drugId, objectId: fa.object.id },
        { relations: cfg.b.group, subjectId: drugId, objectId: fb.object.id },
      ];
      return {
        ok: true,
        candidate: {
          stems: [
            `Which medication in the ${node.classLabel} class is documented ${cfg.a.phrase(fa.object.label)} and ${cfg.b.phrase(fb.object.label)}?`,
          ],
          options: [
            { text: node.name, entityId: fa.subject.id, correct: true, links: links(fa.subject.id) },
            ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: links(e.id) })),
          ],
          explanation: `${classFact.explanation} ${fa.explanation} ${fb.explanation}`,
          facts: [classFact, fa, fb],
        },
      };
    },
  };
}

const commonEffect: Attribute = {
  relation: "hasCommonAdverseEffect",
  group: COMMON,
  phrase: (l) => `to list "${l}" as a common side effect`,
};
const seriousEffect: Attribute = {
  relation: "hasSeriousAdverseEffect",
  group: SERIOUS,
  phrase: (l) => `to list "${l}" as a serious side effect`,
};
const fdaIndication: Attribute = {
  relation: "indicatedFor",
  group: ["indicatedFor"],
  accept: fdaOnly,
  phrase: (l) => `to be FDA-approved for ${l}`,
};
const monitoring: Attribute = {
  relation: "requiresMonitoring",
  group: ["requiresMonitoring"],
  phrase: (l) => `to require monitoring of ${l}`,
};
const contraindication: Attribute = {
  relation: "contraindicatedIn",
  group: ["contraindicatedIn"],
  phrase: (l) => `to list "${l}" as a contraindication`,
};
const interaction: Attribute = {
  relation: "interactsWith",
  group: ["interactsWith"],
  phrase: (l) => `to interact with ${l}`,
};

export const MF_CLASS_EFFECT_INDICATION = classConjunction({
  id: "mf-class-effect-indication",
  a: commonEffect,
  b: fdaIndication,
});
export const MF_CLASS_SERIOUS_MONITORING = classConjunction({
  id: "mf-class-serious-monitoring",
  a: seriousEffect,
  b: monitoring,
});
export const MF_CLASS_INDICATION_CONTRAINDICATION = classConjunction({
  id: "mf-class-indication-contraindication",
  a: fdaIndication,
  b: contraindication,
});
export const MF_CLASS_INTERACTION_MONITORING = classConjunction({
  id: "mf-class-interaction-monitoring",
  a: interaction,
  b: monitoring,
});

/* ── mf-pathway-neurotransmitter ────────────────────────────── */

export const MF_PATHWAY_NEUROTRANSMITTER: QuestionTemplate = {
  id: "mf-pathway-neurotransmitter",
  version: TEMPLATE_VERSION,
  family: "MULTI_FACT",
  kind: "conceptual",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    const pathwayFacts = ctx.store.byRelation("usesNeurotransmitter");
    for (const d of ctx.scopeDrugs) {
      const subjectId = `drug:${d.slug}`;
      const combos: Slot[] = [];
      for (const pf of pathwayFacts) {
        const drugFact = ctx.store.factsOf("modulatesNeurotransmitter", subjectId).find(
          (f) => f.object.id === pf.object.id
        );
        if (!drugFact) continue;
        combos.push({
          slotId: slotId("mf-pathway-neurotransmitter", pf.id, drugFact.id),
          payload: [pf.id, drugFact.id],
          concept: {
            family: "MULTI_FACT",
            relations: ["usesNeurotransmitter", "modulatesNeurotransmitter"],
            subjectIds: [pf.subject.id, pf.object.id],
            answerIds: [subjectId],
            polarity: "positive",
            frame: "pathway-neurotransmitter",
          },
        });
      }
      combos.sort((a, b) => hash53(a.slotId) - hash53(b.slotId));
      slots.push(...combos.slice(0, PER_DRUG_COMBOS));
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const pathwayFact = ctx.store.byId.get(slot.payload[0]);
    const drugFact = ctx.store.byId.get(slot.payload[1]);
    const node = drugFact && ctx.store.drugs.get(drugSlug(drugFact.subject.id));
    if (!pathwayFact || !drugFact || !node) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const nt = pathwayFact.object;

    const safe = (d: DrugNode) =>
      !ctx.store.holds("modulatesNeurotransmitter", `drug:${d.slug}`, nt.id) &&
      !documentsSimilar(ctx.store, `drug:${d.slug}`, ["modulatesNeurotransmitter"], nt.label);
    const picked = pickDistractors({
      tiers: tierDrugs(ctx, node).map((t) => drugEntities(ctx.store, t)),
      excludeIds: new Set([drugFact.subject.id]),
      guardLabels: [],
      count: 3,
      rng,
      accept: (e) => {
        const d = ctx.store.drugs.get(drugSlug(e.id));
        return !!d && safe(d);
      },
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

    const links = (drugId: string): ClaimLink[] => [
      { relations: ["usesNeurotransmitter"], subjectId: pathwayFact.subject.id, objectId: nt.id },
      { relations: ["modulatesNeurotransmitter"], subjectId: drugId, objectId: nt.id },
    ];
    return {
      ok: true,
      candidate: {
        stems: [
          `Which of the following medications is documented to modulate the neurotransmitter used by the ${pathwayFact.subject.label}?`,
        ],
        options: [
          { text: node.name, entityId: drugFact.subject.id, correct: true, links: links(drugFact.subject.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: links(e.id) })),
        ],
        explanation: `${pathwayFact.explanation} ${drugFact.explanation}`,
        facts: [pathwayFact, drugFact],
      },
    };
  },
};

export const MULTIFACT_TEMPLATES: QuestionTemplate[] = [
  MF_CLASS_EFFECT,
  MF_CLASS_EFFECT_INDICATION,
  MF_CLASS_SERIOUS_MONITORING,
  MF_CLASS_INDICATION_CONTRAINDICATION,
  MF_CLASS_INTERACTION_MONITORING,
  MF_PATHWAY_NEUROTRANSMITTER,
];
