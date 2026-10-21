import { describe, expect, it } from 'bun:test';
import { patientCases } from '@/components/ecg-lab/patients/cases';
import { evaluateAnswer, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { createSession, currentCase, nextQuestion, submitAnswer } from '@/components/ecg-lab/rhythm/session';
import {
  academyProgressSchema, applyPatientCase, applySession, dashboardStats, emptyAcademyProgress, readAcademyProgress, totalXp, XP_RULES,
} from '@/components/ecg-lab/academy/progress';

const NOW = '2026-10-21T10:00:00.000Z';
const patient = patientCases[0];
const rhythm = getRhythmCase(patient.rhythmCaseId)!;
const right = () => evaluateAnswer(rhythm, rhythm.categoryId, 75);
const wrong = () => evaluateAnswer(rhythm, rhythm.categoryId === 'vt' ? 'nsr' : 'vt', 20);

describe('case study awards', () => {
  it('credits completion, a correct rhythm, and the underlying rhythm case once', () => {
    const evaluation = evaluateAnswer(rhythm, rhythm.categoryId, 75);
    const result = applyPatientCase(emptyAcademyProgress(), patient, evaluation, NOW);
    const expected = XP_RULES.caseStudyCompleted + XP_RULES.caseStudyCorrectRhythm + XP_RULES.firstCorrectRhythm + (evaluation.rateStatus === 'correct' ? XP_RULES.firstCorrectRate : 0);
    expect(result.xpGained).toBe(expected);
    expect(totalXp(result.progress)).toBe(expected);
    expect(result.progress.patients[patient.id]).toBe(patient.version);
    expect(result.progress.cases[rhythm.id]).toMatchObject({ attempts: 1, correct: 1, everCorrect: true });
    expect(result.achievements).toEqual(expect.arrayContaining(['first-case-study', 'first-correct-rhythm']));
  });

  it('is idempotent: finishing the same case again pays nothing', () => {
    const first = applyPatientCase(emptyAcademyProgress(), patient, right(), NOW);
    const again = applyPatientCase(first.progress, patient, right(), '2026-10-21T11:00:00.000Z');
    expect(again).toMatchObject({ xpGained: 0, alreadyApplied: true });
    expect(again.progress).toBe(first.progress);
  });

  it('pays only the completion reward for a wrong rhythm, and records the miss for later correction', () => {
    const result = applyPatientCase(emptyAcademyProgress(), patient, wrong(), NOW);
    expect(result.xpGained).toBe(XP_RULES.caseStudyCompleted);
    expect(result.progress.cases[rhythm.id]).toMatchObject({ attempts: 1, correct: 0, missedBefore: true, everCorrect: false });
    expect(Object.keys(result.progress.awards).some(key => key.startsWith('patient-correct:'))).toBe(false);

    const session = createSession({ mode: 'practice', categoryIds: [rhythm.categoryId], difficulties: null, caseIds: [rhythm.id], questionCount: 1, durationSec: null, seed: 3 });
    if (!session.ok) throw new Error(session.error);
    let state = session.state;
    expect(currentCase(state)!.id).toBe(rhythm.id);
    state = nextQuestion(submitAnswer(state, rhythm.categoryId));
    const later = applySession(result.progress, state, NOW);
    expect(Object.keys(later.progress.awards).some(key => key.startsWith('corrected:'))).toBe(true);
    expect(later.achievements).toContain('corrected-after-review');
  });

  it('credits an in-range rate estimate independently of the rhythm answer', () => {
    const rateOnly = evaluateAnswer(rhythm, rhythm.categoryId === 'vt' ? 'nsr' : 'vt', 75);
    expect(rateOnly.rhythmCorrect).toBe(false);
    expect(applyPatientCase(emptyAcademyProgress(), patient, rateOnly, NOW).xpGained).toBe(XP_RULES.caseStudyCompleted + XP_RULES.firstCorrectRate);
  });

  it('ignores an evaluation that belongs to a different case or version', () => {
    const other = getRhythmCase(patientCases[1].rhythmCaseId)!;
    const mismatched = evaluateAnswer(other, other.categoryId, 100);
    expect(applyPatientCase(emptyAcademyProgress(), patient, mismatched, NOW)).toMatchObject({ xpGained: 0, alreadyApplied: false });
    const stale = { ...right(), caseVersion: '9.9.9' };
    expect(applyPatientCase(emptyAcademyProgress(), patient, stale, NOW).xpGained).toBe(0);
  });

  it('unlocks "every case study" only after all available cases are done', () => {
    let progress = emptyAcademyProgress();
    let last = applyPatientCase(progress, patientCases[0], evaluateAnswer(getRhythmCase(patientCases[0].rhythmCaseId)!, 'nsr'), NOW);
    progress = last.progress;
    for (const item of patientCases.slice(1)) {
      const definition = getRhythmCase(item.rhythmCaseId)!;
      last = applyPatientCase(progress, item, evaluateAnswer(definition, definition.categoryId), NOW);
      progress = last.progress;
    }
    expect(last.achievements).toContain('all-case-studies');
    expect(progress.achievements['all-case-studies']).toBeDefined();
    const stats = dashboardStats(progress);
    expect(stats.caseStudiesCompleted).toBe(patientCases.length);
    expect(stats.caseStudiesAvailable).toBe(patientCases.length);
  });
});

describe('compatibility of stored progress', () => {
  it('still loads earlier version-1 records that have no case-study field', () => {
    const { patients, ...withoutPatients } = emptyAcademyProgress();
    void patients;
    const parsed = academyProgressSchema.safeParse(withoutPatients);
    expect(parsed.success).toBe(true);
    if (parsed.success) expect(parsed.data.patients).toEqual({});
    const storage = { value: JSON.stringify(withoutPatients), getItem() { return this.value; }, setItem() {}, removeItem() {} };
    expect(readAcademyProgress(storage).notice).toBeUndefined();
  });

  it('rejects malformed case-study records', () => {
    const base = emptyAcademyProgress();
    expect(academyProgressSchema.safeParse({ ...base, patients: { 'patient.x.01': 'one' } }).success).toBe(false);
    expect(academyProgressSchema.safeParse({ ...base, patients: { 'bad id': '0.1.0' } }).success).toBe(false);
  });
});
