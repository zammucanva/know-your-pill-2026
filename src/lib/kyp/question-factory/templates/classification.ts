/**
 * Classification templates: questions over the drug-class graph.
 *
 *   cls-member     which of these belongs to CLASS?              (CLASSIFICATION)
 *   cls-exception  which of these does NOT belong to CLASS?      (EXCEPTION)
 *   cls-same       which belongs to the same class as DRUG?      (COMPARISON)
 *   cls-pairing    which drug/class pairing is correct?          (MATCHING)
 *
 * Class membership is exact (every drug has exactly one class), so the
 * correct option and every distractor are verifiable against the graph.
 */

import { pickDistractors } from "../distractors";
import { TEMPLATE_VERSION } from "../version";
import { drugEntities, drugSlug, slotId, tierDrugs } from "./helpers";
import type { BuildResult, QuestionTemplate, Slot, TemplateContext } from "./types";
import type { EntityRef } from "../types";
import type { DrugNode } from "../facts";

const REL = ["belongsToClass"] as const;

const classLink = (drugId: string, classId: string) => [
  { relations: [...REL], subjectId: drugId, objectId: classId },
];

function classFact(ctx: TemplateContext, slug: string) {
  return ctx.store.factsOf("belongsToClass", `drug:${slug}`)[0];
}

/* ── cls-member ─────────────────────────────────────────────── */

export const CLASS_MEMBER: QuestionTemplate = {
  id: "cls-member",
  version: TEMPLATE_VERSION,
  family: "CLASSIFICATION",
  kind: "standard",
  depth: 1,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    for (const d of ctx.scopeDrugs) {
      const f = classFact(ctx, d.slug);
      if (!f) continue;
      slots.push({
        slotId: slotId("cls-member", f.id),
        payload: [f.id],
        concept: {
          family: "CLASSIFICATION",
          relations: [...REL],
          subjectIds: [f.object.id],
          answerIds: [f.subject.id],
          polarity: "positive",
          frame: "member-of-class",
        },
      });
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const fact = ctx.store.byId.get(slot.payload[0]);
    const node = fact && ctx.store.drugs.get(drugSlug(fact.subject.id));
    if (!fact || !node) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const classId = fact.object.id;
    const safe = (d: DrugNode) => !ctx.store.holds("belongsToClass", `drug:${d.slug}`, classId);
    const picked = pickDistractors({
      tiers: tierDrugs(ctx, node).map((t) => drugEntities(ctx.store, t.filter(safe))),
      excludeIds: new Set([fact.subject.id]),
      guardLabels: [],
      count: 3,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    return {
      ok: true,
      candidate: {
        stems: [
          `Which of the following medications belongs to the ${fact.object.label} class?`,
          `Which of the following is classified in the ${fact.object.label} class?`,
        ],
        options: [
          { text: node.name, entityId: fact.subject.id, correct: true, links: classLink(fact.subject.id, classId) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: classLink(e.id, classId) })),
        ],
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  },
};

/* ── cls-exception ──────────────────────────────────────────── */

export const CLASS_EXCEPTION: QuestionTemplate = {
  id: "cls-exception",
  version: TEMPLATE_VERSION,
  family: "EXCEPTION",
  kind: "conceptual",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    const classes = new Map<string, DrugNode>();
    for (const d of ctx.scopeDrugs) if (!classes.has(d.classId)) classes.set(d.classId, d);
    for (const [classId, example] of classes) {
      const members = ctx.allDrugs.filter((d) => d.classId === classId);
      if (members.length < 3) continue; // need three genuine members as distractors
      const chapters = new Set(members.map((m) => m.placement.chapter));
      for (const other of ctx.allDrugs) {
        if (other.classId === classId || !chapters.has(other.placement.chapter)) continue;
        slots.push({
          slotId: slotId("cls-exception", classId, other.slug),
          payload: [classId, other.slug, example.slug],
          concept: {
            family: "EXCEPTION",
            relations: [...REL],
            subjectIds: [classId],
            answerIds: [`drug:${other.slug}`],
            polarity: "negative",
            frame: "not-member",
          },
        });
      }
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const [classId, otherSlug, exampleSlug] = slot.payload;
    const other = ctx.store.drugs.get(otherSlug);
    const example = ctx.store.drugs.get(exampleSlug);
    if (!other || !example) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const members = ctx.allDrugs.filter((d) => d.classId === classId);
    if (members.length < 3) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const chosen = rng.shuffle([...members]).slice(0, 3);
    const classEntity = ctx.store.factsOf("belongsToClass", `drug:${example.slug}`)[0].object;
    const otherFact = classFact(ctx, other.slug);
    return {
      ok: true,
      candidate: {
        stems: [
          `Which of the following medications does NOT belong to the ${classEntity.label} class?`,
          `All of the following belong to the ${classEntity.label} class EXCEPT which medication?`,
        ],
        options: [
          { text: other.name, entityId: `drug:${other.slug}`, correct: true, links: classLink(`drug:${other.slug}`, classId) },
          ...chosen.map((m) => ({
            text: m.name,
            entityId: `drug:${m.slug}`,
            correct: false,
            links: classLink(`drug:${m.slug}`, classId),
          })),
        ],
        explanation: `${otherFact.explanation} The other options are ${classEntity.label} medications.`,
        facts: [otherFact, ...chosen.map((m) => classFact(ctx, m.slug))],
      },
    };
  },
};

/* ── cls-same ───────────────────────────────────────────────── */

export const CLASS_SAME: QuestionTemplate = {
  id: "cls-same",
  version: TEMPLATE_VERSION,
  family: "COMPARISON",
  kind: "conceptual",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    const inScope = ctx.scopeSlugs;
    const byClass = new Map<string, DrugNode[]>();
    for (const d of ctx.allDrugs) {
      const list = byClass.get(d.classId) ?? [];
      list.push(d);
      byClass.set(d.classId, list);
    }
    for (const members of byClass.values()) {
      if (members.length < 2) continue;
      const sorted = [...members].sort((a, b) => a.slug.localeCompare(b.slug));
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i];
          const b = sorted[j];
          if (!inScope.has(a.slug) && !inScope.has(b.slug)) continue;
          // ask about the in-scope drug (the smaller slug when both are)
          const [asked, answer] = inScope.has(a.slug) ? [a, b] : [b, a];
          slots.push({
            slotId: slotId("cls-same", asked.slug, answer.slug),
            payload: [asked.slug, answer.slug],
            concept: {
              family: "COMPARISON",
              relations: [...REL],
              subjectIds: [`drug:${asked.slug}`],
              answerIds: [`drug:${answer.slug}`],
              polarity: "positive",
              frame: "same-class",
            },
          });
        }
      }
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const [askedSlug, answerSlug] = slot.payload;
    const asked = ctx.store.drugs.get(askedSlug);
    const answer = ctx.store.drugs.get(answerSlug);
    if (!asked || !answer) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };
    const safe = (d: DrugNode) => d.classId !== asked.classId;
    const picked = pickDistractors({
      tiers: tierDrugs(ctx, asked).map((t) => drugEntities(ctx.store, t.filter(safe))),
      excludeIds: new Set([`drug:${answer.slug}`]),
      guardLabels: [],
      count: 3,
      rng,
    });
    if (!picked) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
    const askedFact = classFact(ctx, asked.slug);
    const answerFact = classFact(ctx, answer.slug);
    // The option is TRUE when it shares the asked drug's class.
    const link = (drugId: string) => [
      ...classLink(drugId, askedFact.object.id),
    ];
    return {
      ok: true,
      candidate: {
        stems: [
          `Which of the following medications belongs to the same class as ${asked.name}?`,
          `${asked.name} and which other medication belong to the same class?`,
        ],
        options: [
          { text: answer.name, entityId: `drug:${answer.slug}`, correct: true, links: link(`drug:${answer.slug}`) },
          ...picked.map((e) => ({ text: e.label, entityId: e.id, correct: false, links: link(e.id) })),
        ],
        explanation: `${askedFact.explanation} ${answerFact.explanation}`,
        facts: [askedFact, answerFact],
      },
    };
  },
};

/* ── cls-pairing ────────────────────────────────────────────── */

export const CLASS_PAIRING: QuestionTemplate = {
  id: "cls-pairing",
  version: TEMPLATE_VERSION,
  family: "MATCHING",
  kind: "conceptual",
  depth: 2,
  scopeKind: "drug",
  enumerate(ctx) {
    const slots: Slot[] = [];
    for (const d of ctx.scopeDrugs) {
      const f = classFact(ctx, d.slug);
      if (!f) continue;
      slots.push({
        slotId: slotId("cls-pairing", f.id),
        payload: [f.id],
        concept: {
          family: "MATCHING",
          relations: [...REL],
          subjectIds: [f.subject.id],
          answerIds: [`pair:${f.subject.id}|${f.object.id}`],
          polarity: "positive",
          frame: "pairing",
        },
      });
    }
    return slots;
  },
  build(ctx, slot, rng): BuildResult {
    const fact = ctx.store.byId.get(slot.payload[0]);
    const node = fact && ctx.store.drugs.get(drugSlug(fact.subject.id));
    if (!fact || !node) return { ok: false, reason: "INSUFFICIENT_SOURCE_DATA" };

    const tiers = tierDrugs(ctx, node);
    // Pair three other drugs (closest first) with a class they do NOT have.
    const others: DrugNode[] = [];
    const seenNames = new Set([node.name]);
    for (const tier of tiers) {
      for (const d of rng.shuffle([...tier])) {
        if (others.length >= 3) break;
        if (seenNames.has(d.name)) continue;
        seenNames.add(d.name);
        others.push(d);
      }
      if (others.length >= 3) break;
    }
    if (others.length < 3) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };

    const classPool = new Map<string, EntityRef>();
    for (const d of [node, ...others, ...tiers[0], ...tiers[1]]) {
      const cf = classFact(ctx, d.slug);
      if (cf) classPool.set(cf.object.id, cf.object);
    }
    const pairs: Array<{ text: string; id: string; correct: boolean; drugId: string; classId: string }> = [
      {
        text: `${node.name}: ${fact.object.label}`,
        id: `pair:${fact.subject.id}|${fact.object.id}`,
        correct: true,
        drugId: fact.subject.id,
        classId: fact.object.id,
      },
    ];
    for (const d of others) {
      const wrong = rng
        .shuffle([...classPool.values()])
        .find((c) => !ctx.store.holds("belongsToClass", `drug:${d.slug}`, c.id));
      if (!wrong) return { ok: false, reason: "NOT_ENOUGH_DISTRACTORS" };
      pairs.push({
        text: `${d.name}: ${wrong.label}`,
        id: `pair:drug:${d.slug}|${wrong.id}`,
        correct: false,
        drugId: `drug:${d.slug}`,
        classId: wrong.id,
      });
    }
    return {
      ok: true,
      candidate: {
        stems: [
          "Which of the following medication and class pairings is correct?",
          "Which of the following pairs a medication with its correct class?",
        ],
        options: pairs.map((p) => ({
          text: p.text,
          entityId: p.id,
          correct: p.correct,
          links: classLink(p.drugId, p.classId),
        })),
        explanation: fact.explanation,
        facts: [fact],
      },
    };
  },
};

export const CLASSIFICATION_TEMPLATES: QuestionTemplate[] = [
  CLASS_MEMBER,
  CLASS_EXCEPTION,
  CLASS_SAME,
  CLASS_PAIRING,
];
