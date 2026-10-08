/**
 * Shared template helpers: exclusion groups, proximity tiers and
 * source-backed candidate pools.
 */

import { isTooSimilar } from "../distractors";
import { contentTokens, normalizeText } from "../normalize";
import type { DrugNode, FactStore } from "../facts";
import type { EntityRef, Fact, RelationId } from "../types";
import type { Slot, TemplateContext } from "./types";

/**
 * Relations whose members are mutually "the same kind of thing" for the
 * purpose of ruling a distractor out. A common side effect must not be
 * offered as a distractor for a serious one the drug also documents, or
 * the question would have two defensible answers.
 */
const EXCLUSION_GROUPS: Partial<Record<RelationId, RelationId[]>> = {
  hasCommonAdverseEffect: ["hasCommonAdverseEffect", "hasSeriousAdverseEffect"],
  hasSeriousAdverseEffect: ["hasCommonAdverseEffect", "hasSeriousAdverseEffect"],
};

export function groupOf(relation: RelationId): RelationId[] {
  return EXCLUSION_GROUPS[relation] ?? [relation];
}

export function drugSlug(entityId: string): string {
  return entityId.startsWith("drug:") ? entityId.slice(5) : entityId;
}

export function slotId(templateId: string, ...parts: string[]): string {
  return [templateId, ...parts].join("|");
}

/** All facts documented for a subject across a group of relations. */
export function documentedFor(
  store: FactStore,
  subjectId: string,
  relations: RelationId[]
): Fact[] {
  return relations.flatMap((r) => store.factsOf(r, subjectId));
}

/**
 * Other drugs in proximity order: same class, then same chapter, then
 * the rest. Drugs in the first tiers make the most instructive
 * distractors because the learner must actually discriminate.
 */
export function tierDrugs(ctx: TemplateContext, subject: DrugNode): DrugNode[][] {
  const sameClass: DrugNode[] = [];
  const sameChapter: DrugNode[] = [];
  const rest: DrugNode[] = [];
  for (const d of ctx.allDrugs) {
    if (d.slug === subject.slug) continue;
    if (d.classId === subject.classId) sameClass.push(d);
    else if (d.placement.chapter === subject.placement.chapter) sameChapter.push(d);
    else rest.push(d);
  }
  return [sameClass, sameChapter, rest];
}

/** Distinct objects of a relation documented for the given drugs. */
export function objectsFromDrugs(
  store: FactStore,
  relation: RelationId,
  drugs: DrugNode[],
  accept?: (fact: Fact) => boolean
): EntityRef[] {
  const seen = new Set<string>();
  const out: EntityRef[] = [];
  for (const d of drugs) {
    for (const f of store.factsOf(relation, `drug:${d.slug}`)) {
      if (accept && !accept(f)) continue;
      if (seen.has(f.object.id)) continue;
      seen.add(f.object.id);
      out.push(f.object);
    }
  }
  return out;
}

/** Entity refs for a list of drugs. */
export function drugEntities(store: FactStore, drugs: DrugNode[]): EntityRef[] {
  const out: EntityRef[] = [];
  for (const d of drugs) {
    const e = store.entities.get(`drug:${d.slug}`);
    if (e) out.push(e);
  }
  return out;
}

/**
 * True when the drug documents, under any of the relations, an object
 * whose label closely resembles `label`. Used to keep a near-synonym
 * ("Sleep disturbance" vs "Insomnia") from making an inverse question
 * ambiguous.
 */
export function documentsSimilar(
  store: FactStore,
  drugId: string,
  relations: RelationId[],
  label: string,
  threshold = 0.5
): boolean {
  const guard = [{ norm: normalizeText(label), tokens: contentTokens(label) }];
  for (const f of documentedFor(store, drugId, relations)) {
    if (isTooSimilar(f.object.label, guard, threshold)) return true;
  }
  return false;
}

export function drugNode(ctx: TemplateContext, entityId: string): DrugNode | undefined {
  return ctx.store.drugs.get(drugSlug(entityId));
}

/** Deduplicate slots by id, keeping the first. */
export function uniqueSlots(slots: Slot[]): Slot[] {
  const seen = new Set<string>();
  return slots.filter((s) => (seen.has(s.slotId) ? false : (seen.add(s.slotId), true)));
}
