import { describe, expect, it } from 'bun:test';
import { getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import {
  createSession, currentCase, MAX_HINTS, nextQuestion, pauseSession, resumeSession, retryQuestion, revealHint,
  submitAnswer, summarise, tickSession, type SessionConfig, type SessionState,
} from '@/components/ecg-lab/rhythm/session';

const base: SessionConfig = { mode: 'practice', categoryIds: null, difficulties: null, questionCount: 6, durationSec: null, seed: 5 };
const make = (overrides: Partial<SessionConfig> = {}): SessionState => {
  const result = createSession({ ...base, ...overrides });
  if (!result.ok) throw new Error(result.error);
  return result.state;
};
const correctAnswer = (state: SessionState) => currentCase(state)!.categoryId;
const wrongAnswer = (state: SessionState) => (correctAnswer(state) === 'nsr' ? 'vt' : 'nsr');

describe('session creation', () => {
  it('selects a deterministic, unique, filtered question set', () => {
    const a = make();
    expect(make().caseIds).toEqual(a.caseIds);
    expect(new Set(a.caseIds).size).toBe(a.caseIds.length);
    expect(a.caseIds).toHaveLength(6);
    expect(make({ seed: 6 }).caseIds).not.toEqual(a.caseIds);
    const filtered = make({ categoryIds: ['vt', 'svt'], questionCount: 20 });
    expect(filtered.caseIds).toHaveLength(4);
    expect(filtered.caseIds.every(id => ['vt', 'svt'].includes(getRhythmCase(id)!.categoryId))).toBe(true);
    expect(make({ difficulties: [1], questionCount: 20 }).caseIds.every(id => getRhythmCase(id)!.difficulty === 1)).toBe(true);
  });

  it('rejects invalid configuration with a reason', () => {
    for (const config of [{ questionCount: 0 }, { questionCount: 21 }, { questionCount: 2.5 }, { seed: 1.5 }, { categoryIds: [] }, { mode: 'timed' as const, durationSec: null }, { mode: 'timed' as const, durationSec: 5 }, { mode: 'timed' as const, durationSec: 99999 }]) {
      const result = createSession({ ...base, ...config });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.error.length).toBeGreaterThan(5);
    }
  });
});

describe('answering', () => {
  it('scores a correct answer once, ignores duplicate submissions and rapid double clicks', () => {
    let state = make();
    const answer = correctAnswer(state);
    state = submitAnswer(state, answer);
    const once = state.score;
    expect(once).toBeGreaterThan(0);
    expect(submitAnswer(state, answer)).toBe(state);
    expect(submitAnswer(submitAnswer(state, answer), answer).score).toBe(once);
    expect(state.streak).toBe(1);
  });

  it('tracks streaks and resets them on a miss', () => {
    let state = make({ questionCount: 4 });
    state = nextQuestion(submitAnswer(state, correctAnswer(state)));
    state = nextQuestion(submitAnswer(state, correctAnswer(state)));
    expect(state.bestStreak).toBe(2);
    state = submitAnswer(state, wrongAnswer(state));
    expect(state.streak).toBe(0);
    expect(state.bestStreak).toBe(2);
  });

  it('cannot advance before answering, and completes after the last answer', () => {
    let state = make({ questionCount: 2 });
    expect(nextQuestion(state)).toBe(state);
    state = nextQuestion(submitAnswer(state, correctAnswer(state)));
    expect(state.index).toBe(1);
    state = submitAnswer(state, correctAnswer(state));
    expect(state.status).toBe('in-progress');
    state = nextQuestion(state);
    expect(state.status).toBe('complete');
    expect(submitAnswer(state, 'nsr')).toBe(state);
  });

  it('scores rate answers and records the uncertainty answer without special treatment', () => {
    let state = make({ categoryIds: ['nsr'], questionCount: 1 });
    state = submitAnswer(state, 'nsr', 75);
    expect(state.answers[0]!.evaluation.rateStatus).toBe('correct');
    const unsure = submitAnswer(make({ categoryIds: ['nsr'], questionCount: 1 }), 'uncertain');
    expect(unsure.answers[0]!.evaluation.rhythmCorrect).toBe(false);
    expect(unsure.score).toBe(0);
  });
});

describe('hints and retry', () => {
  it('reveals up to three hints before answering in untimed modes only', () => {
    let state = make();
    for (let index = 0; index < 5; index += 1) state = revealHint(state);
    expect(state.hintsUsed[0]).toBe(MAX_HINTS);
    expect(revealHint(make({ mode: 'timed', durationSec: 60 }))).toEqual(make({ mode: 'timed', durationSec: 60 }));
    const answered = submitAnswer(make(), 'nsr');
    expect(revealHint(answered)).toBe(answered);
  });

  it('allows an unscored retry in learn mode only, and summaries use the first attempt', () => {
    let state = make({ mode: 'learn', questionCount: 3 });
    state = submitAnswer(state, wrongAnswer(state));
    const scoreAfterMiss = state.score;
    state = retryQuestion(state);
    expect(state.retrying).toBe(true);
    expect(nextQuestion(state)).toBe(state);
    state = submitAnswer(state, correctAnswer(state));
    expect(state.score).toBe(scoreAfterMiss);
    expect(state.answers[0]).toMatchObject({ attempts: 2 });
    expect(state.answers[0]!.evaluation.rhythmCorrect).toBe(true);
    expect(summarise(state)).toMatchObject({ rhythmCorrect: 0, answered: 1 });
    expect(summarise(state).missed).toHaveLength(1);
    expect(retryQuestion(state)).toBe(state);

    let practice = make({ mode: 'practice' });
    practice = submitAnswer(practice, wrongAnswer(practice));
    expect(retryQuestion(practice)).toBe(practice);
  });
});

describe('timed sessions', () => {
  const timed = () => make({ mode: 'timed', durationSec: 30, questionCount: 5 });

  it('counts down only while in progress, clamps odd deltas and expires at zero', () => {
    let state = timed();
    expect(state.remainingMs).toBe(30_000);
    state = tickSession(state, 400);
    expect(state.remainingMs).toBe(29_600);
    for (const bad of [-50, Number.NaN, Number.POSITIVE_INFINITY, 0]) expect(tickSession(state, bad).remainingMs).toBe(29_600);
    expect(tickSession(state, 99_999).remainingMs).toBe(28_600);
    for (let index = 0; index < 40; index += 1) state = tickSession(state, 1000);
    expect(state).toMatchObject({ remainingMs: 0, status: 'expired' });
    expect(tickSession(state, 1000)).toBe(state);
    expect(submitAnswer(state, 'nsr')).toBe(state);
  });

  it('pauses and resumes without losing or gaining time', () => {
    let state = tickSession(timed(), 1000);
    state = pauseSession(state);
    expect(state.status).toBe('paused');
    expect(tickSession(state, 1000).remainingMs).toBe(29_000);
    expect(submitAnswer(state, 'nsr')).toBe(state);
    state = resumeSession(state);
    expect(state.status).toBe('in-progress');
    expect(tickSession(state, 1000).remainingMs).toBe(28_000);
    expect(pauseSession(make())).toEqual(make());
  });

  it('is not affected by speed: identical answers score identically however long they take', () => {
    const a = submitAnswer(tickSession(timed(), 1000), correctAnswer(timed()));
    const b = submitAnswer(timed(), correctAnswer(timed()));
    expect(a.score).toBe(b.score);
  });

  it('ends with a partial summary and reward eligibility depends on how many were answered', () => {
    let state = timed();
    for (let index = 0; index < 2; index += 1) state = nextQuestion(submitAnswer(state, correctAnswer(state)));
    for (let index = 0; index < 40; index += 1) state = tickSession(state, 1000);
    const summary = summarise(state);
    expect(summary).toMatchObject({ answered: 2, total: 5, ended: true, rewardEligible: false });

    let enough = timed();
    for (let index = 0; index < 5; index += 1) enough = nextQuestion(submitAnswer(enough, correctAnswer(enough)));
    expect(summarise(enough)).toMatchObject({ answered: 5, ended: true, rewardEligible: true, accuracyPercent: 100 });
  });

  it('a short session can still be reward-eligible when every available question was answered', () => {
    let state = make({ categoryIds: ['vf'], questionCount: 5 });
    expect(state.caseIds).toHaveLength(2);
    for (let index = 0; index < 2; index += 1) state = nextQuestion(submitAnswer(state, correctAnswer(state)));
    expect(summarise(state).rewardEligible).toBe(true);
  });
});