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

/* ------------------------------------------------------------------
   NEET PG question session: one question at a time, answers lock on
   submit, a results summary, and a retry of the questions missed.
   Pure state transitions; the questions and keys are authored elsewhere
   and are only ever READ here.
------------------------------------------------------------------- */
export interface RecallQuestionLite {
  options: readonly string[];
  correctIndex: number;
}
export interface RecallState {
  /** Indices (into the question list) in the order they are asked this round. */
  queue: number[];
  /** Position within the queue. */
  pos: number;
  /** question index -> chosen option (set on selection, final once submitted). */
  chosen: Record<number, number>;
  submitted: Record<number, boolean>;
  phase: "question" | "summary";
}

export function recallStart(total: number, only?: readonly number[]): RecallState {
  const queue = only ? [...only] : Array.from({ length: total }, (_, i) => i);
  return { queue, pos: 0, chosen: {}, submitted: {}, phase: queue.length ? "question" : "summary" };
}
export const recallCurrent = (s: RecallState): number | null => (s.phase === "question" ? (s.queue[s.pos] ?? null) : null);

export function recallSelect(s: RecallState, option: number, questions: readonly RecallQuestionLite[]): RecallState {
  const q = recallCurrent(s);
  if (q === null || s.submitted[q]) return s; // locked once submitted
  if (!Number.isInteger(option) || option < 0 || option >= questions[q].options.length) return s;
  return { ...s, chosen: { ...s.chosen, [q]: option } };
}
export function recallSubmit(s: RecallState): RecallState {
  const q = recallCurrent(s);
  if (q === null || s.submitted[q] || s.chosen[q] === undefined) return s; // an answer is required to submit
  return { ...s, submitted: { ...s.submitted, [q]: true } };
}
export function recallNext(s: RecallState): RecallState {
  const q = recallCurrent(s);
  if (q === null || !s.submitted[q]) return s; // cannot skip past an unsubmitted question
  return s.pos + 1 >= s.queue.length ? { ...s, phase: "summary" } : { ...s, pos: s.pos + 1 };
}
export function recallScore(s: RecallState, questions: readonly RecallQuestionLite[]) {
  const asked = Object.keys(s.submitted).map(Number).filter((i) => s.submitted[i]);
  const correct = asked.filter((i) => s.chosen[i] === questions[i].correctIndex);
  const missed = s.queue.filter((i) => s.submitted[i] && s.chosen[i] !== questions[i].correctIndex);
  return { asked: asked.length, correct: correct.length, missed };
}
export function recallRetryMissed(s: RecallState, questions: readonly RecallQuestionLite[]): RecallState {
  const { missed } = recallScore(s, questions);
  return missed.length ? recallStart(questions.length, missed) : s;
}
export function recallProgress(s: RecallState) {
  return { position: Math.min(s.pos + 1, s.queue.length), total: s.queue.length, answered: s.queue.filter((i) => s.submitted[i]).length };
}

/** Step back to look at an earlier question. Submitted answers stay locked: this never reopens one. */
export function recallPrev(s: RecallState): RecallState {
  if (s.phase !== "question" || s.pos === 0) return s;
  return { ...s, pos: s.pos - 1 };
}
/** Finish early. Only submitted answers count; unanswered questions are reported as not attempted. */
export function recallEnd(s: RecallState): RecallState {
  return s.phase === "question" ? { ...s, phase: "summary" } : s;
}
/** Leave an early summary and carry on at the first question not yet submitted. Answers already given are kept. */
export function recallResume(s: RecallState): RecallState {
  const next = s.queue.findIndex((i) => !s.submitted[i]);
  return next === -1 ? s : { ...s, phase: "question", pos: next };
}
export const recallUnanswered = (s: RecallState): number => s.queue.filter((i) => !s.submitted[i]).length;
