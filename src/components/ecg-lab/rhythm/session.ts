import { evaluateAnswer, getRhythmCase, rhythmCases, type AnswerEvaluation, type RhythmCase } from './cases';
import { seededRandom, type RhythmCategoryId } from './rhythms';

/**
 * Challenge session engine: pure, immutable and clock-free. The caller supplies elapsed time to
 * `tickSession`, so tests and the UI share one set of rules. Scoring is accuracy only; elapsed time
 * never changes points. The timer can only end a timed session.
 */
export type SessionMode = 'learn' | 'practice' | 'timed';
export type Difficulty = 1 | 2 | 3;

export type SessionConfig = {
  mode: SessionMode;
  /** Restrict to these categories, or null for all. */
  categoryIds: RhythmCategoryId[] | null;
  difficulties: Difficulty[] | null;
  /** Restrict to specific case ids (used to review missed strips). */
  caseIds?: string[] | null;
  questionCount: number;
  /** Total countdown for a timed session in seconds; ignored for other modes. */
  durationSec: number | null;
  seed: number;
};

export type SessionAnswer = {
  caseId: string;
  /** Latest evaluation shown to the learner (after a retry it reflects the retry). */
  evaluation: AnswerEvaluation;
  /** The first attempt: the only one that scores or earns rewards. */
  firstEvaluation: AnswerEvaluation;
  attempts: number;
};

export type SessionStatus = 'in-progress' | 'paused' | 'complete' | 'expired';

export type SessionState = {
  id: string;
  config: SessionConfig;
  caseIds: string[];
  index: number;
  answers: (SessionAnswer | null)[];
  hintsUsed: number[];
  status: SessionStatus;
  remainingMs: number | null;
  retrying: boolean;
  score: number;
  streak: number;
  bestStreak: number;
};

export const MAX_QUESTIONS = 20;
export const MIN_TIMED_SECONDS = 30;
export const MAX_TIMED_SECONDS = 1800;
export const MAX_TICK_MS = 1000;
export const MAX_HINTS = 3;
/** A session earns completion rewards only when at least this many questions were answered. */
export const MIN_ANSWERED_FOR_REWARDS = 5;

export type CreateResult = { ok: true; state: SessionState } | { ok: false; error: string };

export function eligibleCases(config: Pick<SessionConfig, 'categoryIds' | 'difficulties' | 'caseIds'>): RhythmCase[] {
  return rhythmCases.filter(item =>
    (config.caseIds == null || config.caseIds.includes(item.id)) &&
    (config.categoryIds === null || config.categoryIds.includes(item.categoryId)) &&
    (config.difficulties === null || config.difficulties.includes(item.difficulty)));
}

export function createSession(config: SessionConfig): CreateResult {
  if (!Number.isInteger(config.questionCount) || config.questionCount < 1 || config.questionCount > MAX_QUESTIONS) {
    return { ok: false, error: `Choose between 1 and ${MAX_QUESTIONS} questions.` };
  }
  if (!Number.isInteger(config.seed)) return { ok: false, error: 'The session seed must be an integer.' };
  if (config.mode === 'timed' && (config.durationSec === null || !Number.isFinite(config.durationSec) || config.durationSec < MIN_TIMED_SECONDS || config.durationSec > MAX_TIMED_SECONDS)) {
    return { ok: false, error: `A timed session needs a duration between ${MIN_TIMED_SECONDS} and ${MAX_TIMED_SECONDS} seconds.` };
  }
  const pool = eligibleCases(config);
  if (pool.length === 0) return { ok: false, error: 'No cases match these filters.' };
  const random = seededRandom(config.seed);
  const shuffled = [...pool];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
  }
  const chosen = shuffled.slice(0, Math.min(config.questionCount, shuffled.length));
  return {
    ok: true,
    state: {
      id: `session-${config.mode}-${config.seed}-${chosen.length}`,
      config,
      caseIds: chosen.map(item => item.id),
      index: 0,
      answers: chosen.map(() => null),
      hintsUsed: chosen.map(() => 0),
      status: 'in-progress',
      remainingMs: config.mode === 'timed' ? (config.durationSec as number) * 1000 : null,
      retrying: false,
      score: 0,
      streak: 0,
      bestStreak: 0,
    },
  };
}

export const currentCase = (state: SessionState): RhythmCase | undefined => getRhythmCase(state.caseIds[state.index]);
export const isCurrentAnswered = (state: SessionState) => state.answers[state.index] !== null && !state.retrying;

function replaceAt<T>(items: T[], index: number, value: T): T[] {
  const copy = [...items];
  copy[index] = value;
  return copy;
}

/** Records an answer. A second submission for the same question is ignored unless a retry was requested. */
export function submitAnswer(state: SessionState, answerId: string, rateBpm?: number): SessionState {
  if (state.status !== 'in-progress') return state;
  const definition = currentCase(state);
  if (!definition) return state;
  const existing = state.answers[state.index];
  if (existing && !state.retrying) return state;

  const evaluation = evaluateAnswer(definition, answerId, rateBpm);
  if (existing) {
    const answer: SessionAnswer = { ...existing, evaluation, attempts: existing.attempts + 1 };
    return { ...state, answers: replaceAt(state.answers, state.index, answer), retrying: false };
  }
  const streak = evaluation.rhythmCorrect ? state.streak + 1 : 0;
  const answer: SessionAnswer = { caseId: definition.id, evaluation, firstEvaluation: evaluation, attempts: 1 };
  return {
    ...state,
    answers: replaceAt(state.answers, state.index, answer),
    score: state.score + evaluation.points,
    streak,
    bestStreak: Math.max(state.bestStreak, streak),
  };
}

/** Reveals the next hint. Hints are for untimed modes and only before the question is answered. */
export function revealHint(state: SessionState): SessionState {
  if (state.status !== 'in-progress' || state.config.mode === 'timed' || state.answers[state.index] !== null) return state;
  if (state.hintsUsed[state.index] >= MAX_HINTS) return state;
  return { ...state, hintsUsed: replaceAt(state.hintsUsed, state.index, state.hintsUsed[state.index] + 1) };
}

/** Learn mode only: after a wrong first answer the learner may try the same strip again, unscored. */
export function retryQuestion(state: SessionState): SessionState {
  const answer = state.answers[state.index];
  if (state.status !== 'in-progress' || state.config.mode !== 'learn' || !answer || state.retrying) return state;
  if (answer.evaluation.rhythmCorrect) return state;
  return { ...state, retrying: true };
}

export function nextQuestion(state: SessionState): SessionState {
  if (state.status !== 'in-progress' || !isCurrentAnswered(state)) return state;
  if (state.index >= state.caseIds.length - 1) return { ...state, status: 'complete' };
  return { ...state, index: state.index + 1 };
}

/** Advances the countdown by an externally measured amount; unusable or oversized deltas are clamped. */
export function tickSession(state: SessionState, deltaMs: number): SessionState {
  if (state.config.mode !== 'timed' || state.status !== 'in-progress' || state.remainingMs === null) return state;
  const safeDelta = Number.isFinite(deltaMs) && deltaMs > 0 ? Math.min(deltaMs, MAX_TICK_MS) : 0;
  const remainingMs = Math.max(0, state.remainingMs - safeDelta);
  return remainingMs === 0 ? { ...state, remainingMs, status: 'expired' } : { ...state, remainingMs };
}

export function pauseSession(state: SessionState): SessionState {
  return state.config.mode === 'timed' && state.status === 'in-progress' ? { ...state, status: 'paused' } : state;
}

export function resumeSession(state: SessionState): SessionState {
  return state.status === 'paused' ? { ...state, status: 'in-progress' } : state;
}

export type SessionSummary = {
  total: number;
  answered: number;
  rhythmCorrect: number;
  rateAnswered: number;
  rateCorrect: number;
  score: number;
  accuracyPercent: number;
  bestStreak: number;
  ended: boolean;
  /** True when the session ended and enough questions were answered to earn completion rewards. */
  rewardEligible: boolean;
  missed: { caseId: string; categoryId: RhythmCategoryId; answerId: string }[];
};

/** Summary based on first attempts only, so retries cannot inflate results. */
export function summarise(state: SessionState): SessionSummary {
  const answers = state.answers.filter((answer): answer is SessionAnswer => answer !== null);
  const rhythmCorrect = answers.filter(answer => answer.firstEvaluation.rhythmCorrect).length;
  const rateAnswered = answers.filter(answer => answer.firstEvaluation.rateStatus === 'correct' || answer.firstEvaluation.rateStatus === 'incorrect').length;
  const rateCorrect = answers.filter(answer => answer.firstEvaluation.rateStatus === 'correct').length;
  const ended = state.status === 'complete' || state.status === 'expired';
  return {
    total: state.caseIds.length,
    answered: answers.length,
    rhythmCorrect,
    rateAnswered,
    rateCorrect,
    score: state.score,
    accuracyPercent: answers.length === 0 ? 0 : Math.round((rhythmCorrect / answers.length) * 100),
    bestStreak: state.bestStreak,
    ended,
    rewardEligible: ended && answers.length >= Math.min(MIN_ANSWERED_FOR_REWARDS, state.caseIds.length),
    missed: answers.filter(answer => !answer.firstEvaluation.rhythmCorrect).map(answer => ({
      caseId: answer.caseId,
      categoryId: getRhythmCase(answer.caseId)?.categoryId as RhythmCategoryId,
      answerId: answer.firstEvaluation.answerId,
    })),
  };
}
