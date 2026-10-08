/**
 * Attribute templates: one subject drug, one documented relationship.
 *
 *   forward  "Which side effect does DRUG document?"   answer = attribute
 *   inverse  "Which medication documents EFFECT?"      answer = drug
 *
 * Both are generated from configuration so wording and rules sit in one
 * auditable table. Every distractor is drawn from other drugs' real facts
 * and verified NOT documented for the subject (closed world: a question
 * says "documented", never "true in general").
 */

import { pickDistractors } from "../distractors";
import { TEMPLATE_VERSION } from "../version";
import {
  documentedFor,
  documentsSimilar,
  drugEntities,
  drugSlug,
  groupOf,
  objectsFromDrugs,
  slotId,
  tierDrugs,
} from "./helpers";
import type { BuildResult, Slot, QuestionTemplate, TemplateContext } from "./types";
import type { Fact, QuestionKind, RelationId, TemplateFamily } from "../types";

interface ForwardConfig {
  id: string;
  family: TemplateFamily;
  kind: QuestionKind;
  relation: RelationId;
  /** Which facts may become the question (and the distractor pool). */
  accept?: (fact: Fact) => boolean;
  stems: (drugName: string) => string[];
}

interface InverseConfig {
  id: string;
  family: TemplateFamily;
  kind: QuestionKind;
  relation: RelationId;
  accept?: (fact: Fact) => boolean;
  stems: (objectLabel: string) => string[];
}

const COUNT = 3;

function forwardTemplate(cfg: ForwardConfig): QuestionTemplate {
  const group = groupOf(cfg.relation);
  return {
    id: cfg.id,
    version: TEMPLATE_VERSION,
    family: cfg.family,
    kind: cfg.kind,
    depth: 1,
    scopeKind: "drug",
    enumerate(ctx: TemplateContext): Slot[] {
      const slots: Slot[] = [];
      for (const d of ctx.scopeDrugs) {
        for (const f of ctx.store.factsOf(cfg.relation, `drug:${d.slug}`)) {
          if (cfg.accept && !cfg.accept(f)) continue;
          slots.push({
            slotId: slotId(cfg.id, f.id),
            payload: [f.id],
            concept: {
              family: cfg.family,
              relations: [cfg.relation],
              subjectIds: [f.subject.id],
              answerIds: [f.object.id],
              polarity: "positive",
              frame: "forward",
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

      const documented = documentedFor(ctx.store, fact.subject.id, group);
      const picked = pickDistractors({
        tiers: tierDrugs(ctx, node).map((t) =>
          objectsFromDrugs(ctx.store, cfg.relation, t, cfg.accept)
        ),
        excludeIds: new Set(documented.map((f) => f.object.id)),
        guardLabels: documented.map((f) => f.object.label),
        count: COUNT,
        rng,
      });
      if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

      const link = (objectId: string) => [
        { relations: group, subjectId: fact.subject.id, objectId },
      ];
      return {
        ok: true,
        candidate: {
          stems: cfg.stems(node.name),
          options: [
            { text: fact.object.label, entityId: fact.object.id, correct: true, links: link(fact.object.id) },
            ...picked.map((e) => ({
              text: e.label,
              entityId: e.id,
              correct: false,
              links: link(e.id),
            })),
          ],
          explanation: fact.explanation,
          facts: [fact],
        },
      };
    },
  };
}

function inverseTemplate(cfg: InverseConfig): QuestionTemplate {
  const group = groupOf(cfg.relation);
  return {
    id: cfg.id,
    version: TEMPLATE_VERSION,
    family: cfg.family,
    kind: cfg.kind,
    depth: 1,
    scopeKind: "drug",
    enumerate(ctx: TemplateContext): Slot[] {
      const slots: Slot[] = [];
      for (const d of ctx.scopeDrugs) {
        for (const f of ctx.store.factsOf(cfg.relation, `drug:${d.slug}`)) {
          if (cfg.accept && !cfg.accept(f)) continue;
          slots.push({
            slotId: slotId(cfg.id, f.id),
            payload: [f.id],
            concept: {
              family: cfg.family,
              relations: [cfg.relation],
              subjectIds: [f.object.id],
              answerIds: [f.subject.id],
              polarity: "positive",
              frame: "inverse",
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

      // A candidate drug must neither document the asked attribute nor
      // document a near-synonym of it.
      const safe = (slug: string) =>
        !ctx.store.holds(cfg.relation, `drug:${slug}`, fact.object.id) &&
        !group.some((r) => ctx.store.holds(r, `drug:${slug}`, fact.object.id)) &&
        !documentsSimilar(ctx.store, `drug:${slug}`, group, fact.object.label);

      const picked = pickDistractors({
        tiers: tierDrugs(ctx, node).map((t) => drugEntities(ctx.store, t)),
        excludeIds: new Set([fact.subject.id]),
        guardLabels: [],
        count: COUNT,
        rng,
        accept: (e) => safe(drugSlug(e.id)),
      });
      if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

      const link = (drugId: string) => [
        { relations: group, subjectId: drugId, objectId: fact.object.id },
      ];
      return {
        ok: true,
        candidate: {
          stems: cfg.stems(fact.object.label),
          options: [
            { text: node.name, entityId: fact.subject.id, correct: true, links: link(fact.subject.id) },
            ...picked.map((e) => ({
              text: e.label,
              entityId: e.id,
              correct: false,
              links: link(e.id),
            })),
          ],
          explanation: fact.explanation,
          facts: [fact],
        },
      };
    },
  };
}

const status = (s: string) => (f: Fact) => f.attrs?.status === s;
const primaryRank = (f: Fact) => f.attrs?.rank === "0";

export const FORWARD_TEMPLATES: QuestionTemplate[] = [
  forwardTemplate({
    id: "fwd-class",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "belongsToClass",
    stems: (n) => [
      `Which medication class does ${n} belong to?`,
      `${n} is classified as which type of medication?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-neurotransmitter",
    family: "MECHANISM",
    kind: "conceptual",
    relation: "modulatesNeurotransmitter",
    accept: primaryRank,
    stems: (n) => [
      `Which neurotransmitter system does ${n} primarily modulate?`,
      `The primary neurotransmitter system modulated by ${n} is which of the following?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-brain-region",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "actsOnBrainRegion",
    stems: (n) => [
      `Which brain region is documented as a site of action of ${n}?`,
      `According to its KYP monograph, ${n} acts on which of the following brain regions?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-indication-fda",
    family: "INDICATION",
    kind: "standard",
    relation: "indicatedFor",
    accept: status("fda-approved"),
    stems: (n) => [
      `${n} is FDA-approved for which of the following?`,
      `Which of the following is a documented FDA-approved indication of ${n}?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-indication-offlabel",
    family: "INDICATION",
    kind: "standard",
    relation: "indicatedFor",
    accept: status("off-label"),
    stems: (n) => [`Which of the following is a documented off-label use of ${n}?`],
  }),
  forwardTemplate({
    id: "fwd-common-effect",
    family: "ADVERSE_EFFECT",
    kind: "standard",
    relation: "hasCommonAdverseEffect",
    stems: (n) => [
      `Which of the following is a documented common side effect of ${n}?`,
      `According to its KYP monograph, which of these is a common side effect of ${n}?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-serious-effect",
    family: "ADVERSE_EFFECT",
    kind: "standard",
    relation: "hasSeriousAdverseEffect",
    stems: (n) => [
      `Which of the following is a documented serious side effect of ${n}?`,
      `According to its KYP monograph, which of these is a serious side effect of ${n}?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-monitoring",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "requiresMonitoring",
    stems: (n) => [
      `Which parameter is part of the documented monitoring plan for ${n}?`,
      `According to its KYP monograph, ${n} requires monitoring of which of the following?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-contraindication",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "contraindicatedIn",
    stems: (n) => [`Which of the following is a documented contraindication for ${n}?`],
  }),
  forwardTemplate({
    id: "fwd-interaction",
    family: "ASSOCIATION",
    kind: "conceptual",
    relation: "interactsWith",
    stems: (n) => [
      `Which of the following is documented to interact with ${n}?`,
      `According to its KYP monograph, ${n} has a documented interaction with which of the following?`,
    ],
  }),
  forwardTemplate({
    id: "fwd-half-life",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "hasHalfLife",
    stems: (n) => [`What is the documented half-life of ${n}?`],
  }),
  forwardTemplate({
    id: "fwd-metabolite",
    family: "DIRECT_RECALL",
    kind: "standard",
    relation: "hasActiveMetabolite",
    stems: (n) => [`Which active metabolite is documented for ${n}?`],
  }),
  forwardTemplate({
    id: "fwd-boxed-warning",
    family: "ADVERSE_EFFECT",
    kind: "standard",
    relation: "hasBoxedWarning",
    stems: (n) => [`Which safety issue carries a documented boxed warning for ${n}?`],
  }),
  forwardTemplate({
    id: "fwd-net-effect",
    family: "MECHANISM",
    kind: "conceptual",
    relation: "hasNetEffect",
    stems: (n) => [`Which documented net effect follows from ${n}'s mechanism?`],
  }),
  forwardTemplate({
    id: "fwd-primary-target",
    family: "MECHANISM",
    kind: "conceptual",
    relation: "hasPrimaryTarget",
    stems: (n) => [`Which of the following is documented as the primary molecular target of ${n}?`],
  }),
];

export const INVERSE_TEMPLATES: QuestionTemplate[] = [
  inverseTemplate({
    id: "inv-common-effect",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "hasCommonAdverseEffect",
    stems: (l) => [
      `Which of the following medications is documented to list "${l}" as a common side effect?`,
    ],
  }),
  inverseTemplate({
    id: "inv-serious-effect",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "hasSeriousAdverseEffect",
    stems: (l) => [
      `Which of the following medications is documented to list "${l}" as a serious side effect?`,
    ],
  }),
  inverseTemplate({
    id: "inv-indication-fda",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "indicatedFor",
    accept: status("fda-approved"),
    stems: (l) => [`Which of the following medications is documented as FDA-approved for ${l}?`],
  }),
  inverseTemplate({
    id: "inv-contraindication",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "contraindicatedIn",
    stems: (l) => [
      `Which of the following medications has "${l}" documented as a contraindication?`,
    ],
  }),
  inverseTemplate({
    id: "inv-interaction",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "interactsWith",
    stems: (l) => [`Which of the following medications is documented to interact with ${l}?`],
  }),
  inverseTemplate({
    id: "inv-monitoring",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "requiresMonitoring",
    stems: (l) => [
      `Which of the following medications has "${l}" in its documented monitoring plan?`,
    ],
  }),
  inverseTemplate({
    id: "inv-boxed-warning",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "hasBoxedWarning",
    stems: (l) => [
      `Which of the following medications carries a documented boxed warning for "${l}"?`,
    ],
  }),
  inverseTemplate({
    id: "inv-metabolite",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "hasActiveMetabolite",
    stems: (l) => [
      `Which of the following medications is documented to have ${l} as an active metabolite?`,
    ],
  }),
  inverseTemplate({
    id: "inv-brain-region",
    family: "IDENTIFICATION",
    kind: "standard",
    relation: "actsOnBrainRegion",
    stems: (l) => [`Which of the following medications is documented to act on the ${l}?`],
  }),
  inverseTemplate({
    id: "inv-neurotransmitter",
    family: "IDENTIFICATION",
    kind: "conceptual",
    relation: "modulatesNeurotransmitter",
    accept: primaryRank,
    stems: (l) => [`Which of the following medications primarily modulates the ${l} system?`],
  }),
];
