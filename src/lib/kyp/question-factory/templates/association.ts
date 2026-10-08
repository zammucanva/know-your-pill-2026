/**
 * Association and relationship templates: two drugs linked through a
 * shared documented fact.
 *
 *   assoc-shared-effect   a common side effect both drugs document   (ASSOCIATION)
 *   rel-shared-target     the same documented primary target         (RELATIONSHIP)
 *
 * A very common value (an effect documented by 100 drugs) would otherwise
 * generate thousands of near-identical questions, so each source fact is
 * paired with at most MAX_PARTNERS partner drugs. The partners are chosen
 * by a stable hash, never by chance, so enumeration is deterministic.
 */

import { pickDistractors } from "../distractors";
import { hash53 } from "../normalize";
import { TEMPLATE_VERSION } from "../version";
import {
  documentsSimilar,
  drugEntities,
  drugSlug,
  groupOf,
  slotId,
  tierDrugs,
} from "./helpers";
import type { BuildResult, QuestionTemplate, Slot, TemplateContext } from "./types";
import type { Fact, RelationId, TemplateFamily } from "../types";

const MAX_PARTNERS = 3;

interface SharedConfig {
  id: string;
  family: TemplateFamily;
  relation: RelationId;
  accept?: (fact: Fact) => boolean;
  stems: (drugName: string, objectLabel: string) => string[];
}

function sharedTemplate(cfg: SharedConfig): QuestionTemplate {
  const group = groupOf(cfg.relation);
  return {
    id: cfg.id,
    version: TEMPLATE_VERSION,
    family: cfg.family,
    kind: "conceptual",
    depth: 2,
    scopeKind: "drug",
    enumerate(ctx: TemplateContext): Slot[] {
      const slots: Slot[] = [];
      for (const d of ctx.scopeDrugs) {
        const subjectId = `drug:${d.slug}`;
        for (const f of ctx.store.factsOf(cfg.relation, subjectId)) {
          if (cfg.accept && !cfg.accept(f)) continue;
          const partners = ctx.store
            .factsAbout(cfg.relation, f.object.id)
            .filter((pf) => pf.subject.id !== subjectId)
            // when both drugs are in scope, ask about the smaller slug only
            .filter(
              (pf) =>
                !ctx.scopeSlugs.has(drugSlug(pf.subject.id)) ||
                d.slug < drugSlug(pf.subject.id)
            )
            .sort(
              (a, b) =>
                hash53(`${subjectId}|${f.object.id}|${a.subject.id}`) -
                hash53(`${subjectId}|${f.object.id}|${b.subject.id}`)
            )
            .slice(0, MAX_PARTNERS);
          for (const pf of partners) {
            slots.push({
              slotId: slotId(cfg.id, f.id, pf.id),
              payload: [f.id, pf.id],
              concept: {
                family: cfg.family,
                relations: [cfg.relation],
                subjectIds: [subjectId, f.object.id],
                answerIds: [pf.subject.id],
                polarity: "positive",
                frame: "shared",
              },
            });
          }
        }
      }
      return slots;
    },
    build(ctx, slot, rng): BuildResult {
      const fact = ctx.store.byId.get(slot.payload[0]);
      const partnerFact = ctx.store.byId.get(slot.payload[1]);
      const node = fact && ctx.store.drugs.get(drugSlug(fact.subject.id));
      const partner = partnerFact && ctx.store.drugs.get(drugSlug(partnerFact.subject.id));
      if (!fact || !partnerFact || !node || !partner) {
        return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
      }
      const safe = (slug: string) =>
        !group.some((r) => ctx.store.holds(r, `drug:${slug}`, fact.object.id)) &&
        !documentsSimilar(ctx.store, `drug:${slug}`, group, fact.object.label);
      const picked = pickDistractors({
        tiers: tierDrugs(ctx, node).map((t) => drugEntities(ctx.store, t)),
        excludeIds: new Set([partnerFact.subject.id]),
        guardLabels: [],
        count: 3,
        rng,
        accept: (e) => drugSlug(e.id) !== partner.slug && safe(drugSlug(e.id)),
      });
      if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
      const link = (drugId: string) => [
        { relations: group, subjectId: drugId, objectId: fact.object.id },
      ];
      return {
        ok: true,
        candidate: {
          stems: cfg.stems(node.name, fact.object.label),
          options: [
            { text: partner.name, entityId: partnerFact.subject.id, correct: true, links: link(partnerFact.subject.id) },
            ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: link(e.id) })),
          ],
          explanation: `${fact.explanation} ${partnerFact.explanation}`,
          facts: [fact, partnerFact],
        },
      };
    },
  };
}

export const ASSOCIATION_TEMPLATES: QuestionTemplate[] = [
  sharedTemplate({
    id: "assoc-shared-effect",
    family: "ASSOCIATION",
    relation: "hasCommonAdverseEffect",
    stems: (n, l) => [
      `Both ${n} and which other medication are documented to list "${l}" as a common side effect?`,
      `Which other medication, like ${n}, is documented to list "${l}" as a common side effect?`,
    ],
  }),
  sharedTemplate({
    id: "rel-shared-target",
    family: "RELATIONSHIP",
    relation: "hasPrimaryTarget",
    stems: (n, l) => [
      `${n} is documented to act primarily on ${l}. Which other medication has the same documented primary molecular target?`,
    ],
  }),
];
