/**
 * Pure state transitions for the mode-specific interactions, kept out of the
 * component so they can be unit-tested without a DOM.
 */

/** NEET PG MCQ drill: commit to one option, then the explanation unlocks. */
export interface McqState {
  chosen: number | null;
}
export const initialMcq: McqState = { chosen: null };
export function chooseMcq(state: McqState, index: number, optionCount: number): McqState {
  if (state.chosen !== null) return state; // answers are final once committed
  if (!Number.isInteger(index) || index < 0 || index >= optionCount) return state;
  return { chosen: index };
}
export function isCorrect(state: McqState, correctIndex: number): boolean | null {
  return state.chosen === null ? null : state.chosen === correctIndex;
}

/** Resident case reasoner: the case unfolds one stage at a time. */
export const CASE_STAGES = ["presentation", "history", "examination", "diagnosis", "rationale", "management"] as const;
export type CaseStage = (typeof CASE_STAGES)[number];
/** Stages after this index are hidden until the learner reveals them. */
export function nextCaseStage(revealed: number): number {
  return Math.min(revealed + 1, CASE_STAGES.length);
}
/** The learner must reveal the diagnosis stage deliberately; presenting + history + exam are the data. */
export const FIRST_REASONING_STAGE = CASE_STAGES.indexOf("diagnosis");

/** MBBS mechanism stepper. */
export function clampStep(step: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(step, total - 1));
}

/** Resident decision path: follow a branch; unknown targets stay put. */
export function followBranch(
  nodes: readonly { id: string; branches: readonly { label: string; next: string }[] }[],
  currentId: string,
  label: string
): string {
  const node = nodes.find((n) => n.id === currentId);
  const branch = node?.branches.find((b) => b.label === label);
  return branch && nodes.some((n) => n.id === branch.next) ? branch.next : currentId;
}

/** Resident interactions filter: narrow by severity and/or drug-name text. Pure and order-preserving. */
export function filterInteractions<T extends { severity: string; drug: { text: string } }>(
  items: readonly T[],
  severities: ReadonlySet<string>,
  query: string
): T[] {
  const q = query.trim().toLowerCase();
  return items.filter((i) => (severities.size === 0 || severities.has(i.severity)) && (!q || i.drug.text.toLowerCase().includes(q)));
}
