/**
 * Syllabus: Subject -> Chapter -> Topic -> Subtopic, derived from the
 * placement KYP already records for every drug (its learningPath).
 *
 * No second taxonomy is created. Only nodes that actually contain drugs
 * exist, so the pickers can never offer an empty branch.
 */

import { normalizeText } from "./normalize";
import type { DrugNode, FactStore } from "./facts";
import type { Scope } from "./types";

export type SyllabusLevel = "subject" | "chapter" | "topic" | "subtopic";

export interface SyllabusNode {
  level: SyllabusLevel;
  label: string;
  /** Drug slug, for subtopic nodes. */
  slug?: string;
  drugCount: number;
  children: SyllabusNode[];
}

export function buildSyllabus(store: FactStore): SyllabusNode[] {
  const subjects = new Map<string, SyllabusNode>();
  for (const node of store.drugs.values()) {
    const { subject, chapter, topic } = node.placement;
    if (!subject || !chapter) continue;
    const s = child(subjects, "subject", subject);
    s.drugCount++;
    const c = child(indexOf(s), "chapter", chapter, s);
    c.drugCount++;
    const t = child(indexOf(c), "topic", topic, c);
    t.drugCount++;
    t.children.push({
      level: "subtopic",
      label: node.name,
      slug: node.slug,
      drugCount: 1,
      children: [],
    });
  }
  return [...subjects.values()];
}

const indexCache = new WeakMap<SyllabusNode, Map<string, SyllabusNode>>();

function indexOf(parent: SyllabusNode): Map<string, SyllabusNode> {
  let index = indexCache.get(parent);
  if (!index) {
    index = new Map(parent.children.map((c) => [normalizeText(c.label), c]));
    indexCache.set(parent, index);
  }
  return index;
}

function child(
  index: Map<string, SyllabusNode>,
  level: SyllabusLevel,
  label: string,
  parent?: SyllabusNode
): SyllabusNode {
  const key = normalizeText(label);
  let node = index.get(key);
  if (!node) {
    node = { level, label, drugCount: 0, children: [] };
    index.set(key, node);
    parent?.children.push(node);
  }
  return node;
}

/** Drugs inside a scope. An empty scope means every drug. */
export function drugsInScope(store: FactStore, scope: Scope): DrugNode[] {
  const subject = scope.subject ? normalizeText(scope.subject) : null;
  const chapter = scope.chapter ? normalizeText(scope.chapter) : null;
  const topic = scope.topic ? normalizeText(scope.topic) : null;
  const out: DrugNode[] = [];
  for (const node of store.drugs.values()) {
    const p = node.placement;
    if (subject && normalizeText(p.subject) !== subject) continue;
    if (chapter && normalizeText(p.chapter) !== chapter) continue;
    if (topic && normalizeText(p.topic) !== topic) continue;
    if (scope.subtopic && node.slug !== scope.subtopic) continue;
    out.push(node);
  }
  return out;
}

/** True when a scope names something that exists in the syllabus. */
export function isKnownScope(store: FactStore, scope: Scope): boolean {
  return drugsInScope(store, scope).length > 0;
}
