/**
 * Clinical-style template.
 *
 * The stem is an authored KYP teaching case, quoted verbatim. Nothing
 * about the patient (age, sex, duration, findings) is ever invented: if a
 * drug has no authored case, it produces no clinical question.
 *
 * The answer is the case's documented diagnosis (its verbatim leading
 * name); distractors are diagnoses documented for OTHER drugs' cases that
 * do not resemble it. A program cannot fully rule out that a different
 * documented diagnosis could also fit a given vignette, so every question
 * from this template is flagged for human review (see `unreviewed`).
 */

import { pickDistractors } from "../distractors";
import { TEMPLATE_VERSION } from "../version";
import { drugSlug, objectsFromDrugs, slotId, tierDrugs } from "./helpers";
import type { BuildResult, QuestionTemplate } from "./types";

export const CLINICAL_DIAGNOSIS: QuestionTemplate = {
  id: "clin-diagnosis",
  version: TEMPLATE_VERSION,
  family: "CLINICAL_STYLE",
  kind: "clinical",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    return ctx.scopeDrugs.flatMap((d) =>
      ctx.store.factsOf("hasTeachingCase", `drug:${d.slug}`).map((f) => ({
        slotId: slotId("clin-diagnosis", f.id),
        payload: [f.id],
        concept: {
          family: "CLINICAL_STYLE" as const,
          relations: ["hasTeachingCase" as const],
          subjectIds: [f.subject.id],
          answerIds: [f.object.id],
          polarity: "positive" as const,
          frame: "case-diagnosis",
        },
      }))
    );
  },
  build(ctx, slot, rng): BuildResult {
    const fact = ctx.store.byId.get(slot.payload[0]);
    const node = fact && ctx.store.drugs.get(drugSlug(fact.subject.id));
    const presentation = fact?.attrs?.presentation?.trim();
    if (!fact || !node || !presentation) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };

    const own = ctx.store.factsOf("hasTeachingCase", fact.subject.id);
    const picked = pickDistractors({
      tiers: tierDrugs(ctx, node).map((t) =>
        objectsFromDrugs(ctx.store, "hasTeachingCase", t)
      ),
      excludeIds: new Set(own.map((f) => f.object.id)),
      guardLabels: own.map((f) => f.object.label),
      count: 3,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

    const link = (dxId: string) => [
      { relations: ["hasTeachingCase" as const], subjectId: fact.subject.id, objectId: dxId },
    ];
    return {
      ok: true,
      candidate: {
        stems: [`${presentation} Which of the following is the most likely diagnosis?`],
        options: [
          { text: fact.object.label, entityId: fact.object.id, correct: true, links: link(fact.object.id) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: link(e.id) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  },
};

export const CLINICAL_TEMPLATES: QuestionTemplate[] = [CLINICAL_DIAGNOSIS];
