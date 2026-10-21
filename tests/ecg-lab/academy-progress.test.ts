import { describe, expect, it } from 'bun:test';
import type { ProgressStorage } from '@/components/ecg-lab/learn/progress';
import { rhythmCases } from '@/components/ecg-lab/rhythm/cases';
import { createSession, currentCase, nextQuestion, submitAnswer, tickSession, type SessionConfig, type SessionState } from '@/components/ecg-lab/rhythm/session';
import {
  ACADEMY_STORAGE_KEY, achievementDefinitions, applySession, awardAchievements, dashboardStats, emptyAcademyProgress, levelForXp,
  MAX_SERIALIZED_ACADEMY_CHARS, readAcademyProgress, recordExerciseCompleted, totalXp, writeAcademyProgress, XP_RULES, xpForLevel,
  type AcademyProgress,
} from '@/components/ecg-lab/academy/progress';

const NOW = '2026-10-21T10:00:00.000Z';
const baseConfig: SessionConfig = { mode: 'practice', categoryIds: ['nsr', 'svt'], difficulties: null, questionCount: 5, durationSec: null, seed: 1 };

/** Plays a session to the end, answering every question with `choose`. */
function finished(overrides: Partial<SessionConfig> = {}, choose: (state: SessionState) => string = state => currentCase(state)!.categoryId): SessionState {
  const result = createSession({ ...baseConfig, ...overrides });
  if (!result.ok) throw new Error(result.error);
  let state = result.state;
  while (state.status === 'in-progress') state = nextQuestion(submitAnswer(state, choose(state)));
  return state;
}

function memoryStorage(initial: string | null = null): ProgressStorage & { value: string | null; failWrite: boolean } {
  return {
    value: initial,
    failWrite: false,
    getItem() { return this.value; },
    setItem(_key, value) { if (this.failWrite) throw new Error('full'); this.value = value; },
    removeItem() { this.value = null; },
  };
}

describe('XP rules', () => {
  it('awards first-time correct rhythms plus session completion, and nothing for an untouched profile', () => {
    expect(totalXp(emptyAcademyProgress())).toBe(0);
    const state = finished({ seed: 2 });
    const result = applySession(emptyAcademyProgress(), state, NOW);
    const expected = state.answers.length * XP_RULES.firstCorrectRhythm + XP_RULES.sessionCompleted;
    expect(result.xpGained).toBe(expected);
    expect(totalXp(result.progress)).toBe(expected);
    expect(result.alreadyApplied).toBe(false);
  });

  it('is idempotent: applying the same session twice pays once', () => {
    const state = finished({ seed: 3 });
    const first = applySession(emptyAcademyProgress(), state, NOW);
    const second = applySession(first.progress, state, '2026-10-21T11:00:00.000Z');
    expect(second.alreadyApplied).toBe(true);
    expect(second.xpGained).toBe(0);
    expect(second.progress).toBe(first.progress);
  });

  it('caps repeat practice per case, so grinding the same strips cannot farm XP', () => {
    let progress = emptyAcademyProgress();
    for (let seed = 10; seed < 30; seed += 1) {
      progress = applySession(progress, finished({ seed, categoryIds: ['svt'], questionCount: 5 }), NOW).progress;
    }
    const caseCount = rhythmCases.filter(item => item.categoryId === 'svt').length;
    const caseXp = Object.entries(progress.awards).filter(([key]) => !key.startsWith('session')).reduce((sum, [, award]) => sum + award.xp, 0);
    expect(caseXp).toBe(caseCount * (XP_RULES.firstCorrectRhythm + XP_RULES.maxRepeatAwardsPerCase * XP_RULES.repeatCorrectRhythm));
    expect(Object.values(progress.cases).every(stats => stats.repeatAwards === XP_RULES.maxRepeatAwardsPerCase)).toBe(true);
  });

  it('pays no completion reward for a session that was never ended or answered too few questions', () => {
    const open = createSession({ ...baseConfig, seed: 4 });
    if (!open.ok) throw new Error(open.error);
    expect(applySession(emptyAcademyProgress(), open.state, NOW).xpGained).toBe(0);

    const timed = createSession({ ...baseConfig, mode: 'timed', durationSec: 30, seed: 5, categoryIds: null, questionCount: 10 });
    if (!timed.ok) throw new Error(timed.error);
    let state = nextQuestion(submitAnswer(timed.state, currentCase(timed.state)!.categoryId));
    for (let index = 0; index < 40; index += 1) state = tickSession(state, 1000);
    const result = applySession(emptyAcademyProgress(), state, NOW);
    expect(Object.keys(result.progress.awards).some(key => key.startsWith('session:'))).toBe(false);
    expect(result.xpGained).toBe(XP_RULES.firstCorrectRhythm);
    expect(applySession(result.progress, state, NOW).alreadyApplied).toBe(true);
  });

  it('rewards correcting a previously missed strip once, using first attempts only', () => {
    const wrong = finished({ seed: 6, categoryIds: ['nsr'], questionCount: 2 }, () => 'vt');
    let progress = applySession(emptyAcademyProgress(), wrong, NOW).progress;
    expect(Object.values(progress.cases).every(stats => stats.missedBefore && !stats.everCorrect)).toBe(true);
    expect(Object.keys(progress.awards).filter(key => key.startsWith('rhythm-first'))).toHaveLength(0);

    const right = finished({ seed: 7, categoryIds: ['nsr'], questionCount: 2 });
    const result = applySession(progress, right, NOW);
    progress = result.progress;
    expect(Object.keys(progress.awards).filter(key => key.startsWith('corrected:'))).toHaveLength(2);
    expect(result.achievements).toContain('corrected-after-review');
    expect(awardAchievements(progress, NOW).awarded).toEqual([]);
  });

  it('computes levels from a documented curve', () => {
    expect([0, 49, 50, 199, 200, -10].map(levelForXp)).toEqual([1, 1, 2, 2, 3, 1]);
    expect(xpForLevel(3)).toBe(200);
  });
});

describe('exercises and achievements', () => {
  it('awards an exercise once per version and unlocks the first-exercise achievement once', () => {
    const first = recordExerciseCompleted(emptyAcademyProgress(), 'rr-interval-measurement', '0.1.0', 'Measure an R–R interval', NOW);
    expect(first).toMatchObject({ xpGained: XP_RULES.exerciseCompleted, alreadyApplied: false });
    expect(first.achievements).toEqual(['first-exercise']);
    expect(recordExerciseCompleted(first.progress, 'rr-interval-measurement', '0.1.0', 'Measure an R–R interval', NOW)).toMatchObject({ xpGained: 0, alreadyApplied: true });
    const newer = recordExerciseCompleted(first.progress, 'rr-interval-measurement', '0.2.0', 'Measure an R–R interval', NOW);
    expect(newer.xpGained).toBe(XP_RULES.exerciseCompleted);
    expect(newer.achievements).toEqual([]);
  });

  it('unlocks rhythm achievements only from real events', () => {
    expect(awardAchievements(emptyAcademyProgress(), NOW).awarded).toEqual([]);
    const result = applySession(emptyAcademyProgress(), finished({ seed: 8, categoryIds: ['svt'], questionCount: 2 }), NOW);
    expect(result.achievements).toEqual(expect.arrayContaining(['first-correct-rhythm', 'category-complete.svt']));
    expect(result.achievements).not.toContain('ten-cases');
    expect(achievementDefinitions.some(definition => definition.id === 'category-complete.svt')).toBe(true);
  });

  it('awards ten-cases once ten distinct cases have been identified correctly', () => {
    let progress = emptyAcademyProgress();
    for (let seed = 100; seed < 130 && Object.values(progress.cases).filter(stats => stats.everCorrect).length < 10; seed += 1) {
      progress = applySession(progress, finished({ seed, categoryIds: null, questionCount: 10 }), NOW).progress;
    }
    expect(progress.achievements['ten-cases']).toBeDefined();
  });
});

describe('personal bests and dashboard', () => {
  it('records timed bests only for completed timed sessions and never lowers them', () => {
    const timed = { mode: 'timed' as const, durationSec: 60, categoryIds: null, questionCount: 5 };
    let progress = applySession(emptyAcademyProgress(), finished({ ...timed, seed: 20 }), NOW).progress;
    const best = progress.bests.timedScore;
    expect(best).toBeGreaterThan(0);
    progress = applySession(progress, finished({ ...timed, seed: 21 }, () => 'vt'), NOW).progress;
    expect(progress.bests.timedScore).toBe(best);
    expect(applySession(emptyAcademyProgress(), finished({ seed: 22 }), NOW).progress.bests.timedScore).toBe(0);
  });

  it('shows an honest empty state and derives every figure from recorded events', () => {
    expect(dashboardStats(emptyAcademyProgress())).toMatchObject({ isEmpty: true, xp: 0, level: 1, rhythmAccuracyPercent: null, rateAccuracyPercent: null, exercisesCompleted: 0, strongest: [], toPractice: [], recent: [] });
    const first = applySession(emptyAcademyProgress(), finished({ seed: 30, categoryIds: ['nsr'], questionCount: 2 }), NOW).progress;
    const mixed = applySession(first, finished({ seed: 31, categoryIds: ['svt'], questionCount: 2 }, () => 'nsr'), NOW).progress;
    const stats = dashboardStats(mixed);
    expect(stats.isEmpty).toBe(false);
    expect(stats.rhythmAttempts).toBe(4);
    expect(stats.rhythmAccuracyPercent).toBe(50);
    expect(stats.strongest.map(item => item.categoryId)).toEqual(['nsr']);
    expect(stats.toPractice.map(item => item.categoryId)).toEqual(['svt']);
    expect(stats.recent.length).toBeGreaterThan(0);
  });
});

describe('persistence', () => {
  it('round-trips validated progress', () => {
    const storage = memoryStorage();
    const progress = applySession(emptyAcademyProgress(), finished({ seed: 40 }), NOW).progress;
    expect(writeAcademyProgress(storage, progress)).toBe(true);
    expect(readAcademyProgress(storage).progress).toEqual(progress);
    expect(ACADEMY_STORAGE_KEY).toContain('academy');
  });

  it('resets safely on corrupt, unsupported-version, extra-field, invalid or oversized data', () => {
    const valid = applySession(emptyAcademyProgress(), finished({ seed: 41 }), NOW).progress;
    const invalidCase = { version: '0.1.0', attempts: -1, correct: 0, rateAttempts: 0, rateCorrect: 0, everCorrect: false, missedBefore: false, repeatAwards: 0 };
    const inputs = [
      '{bad',
      JSON.stringify({ ...valid, version: 2 }),
      JSON.stringify({ ...valid, extra: 1 }),
      JSON.stringify({ ...valid, cases: { 'rhythm.nsr.01': invalidCase } }),
      JSON.stringify({ ...valid, awards: { 'exercise:x@0.1.0': { xp: 999_999, label: 'x', at: NOW } } }),
      'x'.repeat(MAX_SERIALIZED_ACADEMY_CHARS + 1),
    ];
    for (const serialized of inputs) {
      const storage = memoryStorage(serialized);
      const loaded = readAcademyProgress(storage);
      expect(loaded.progress).toEqual(emptyAcademyProgress());
      expect(loaded.notice).toMatch(/reset/);
      expect(storage.value).toBeNull();
    }
  });

  it('survives blocked and failing storage without throwing', () => {
    const blocked: ProgressStorage = { getItem: () => { throw new Error('blocked'); }, setItem: () => undefined, removeItem: () => undefined };
    expect(readAcademyProgress(blocked).notice).toMatch(/unavailable/);
    const storage = memoryStorage();
    storage.failWrite = true;
    expect(writeAcademyProgress(storage, emptyAcademyProgress())).toBe(false);
    expect(writeAcademyProgress(memoryStorage(), { ...emptyAcademyProgress(), version: 2 as unknown as 1 })).toBe(false);
  });

  it('only records stats for catalogued authored cases', () => {
    const progress = applySession(emptyAcademyProgress(), finished({ seed: 42, categoryIds: null, questionCount: 10 }), NOW).progress;
    const ids = new Set(rhythmCases.map(item => item.id));
    expect(Object.keys(progress.cases).every(id => ids.has(id))).toBe(true);
  });
});

export type { AcademyProgress };
