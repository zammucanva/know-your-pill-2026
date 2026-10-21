import { describe, expect, it } from 'bun:test';
import { applyPatientCase, applySession, emptyAcademyProgress, recordExerciseCompleted, type AcademyProgress } from '@/components/ecg-lab/academy/progress';
import { createExperimentState, type ExperimentState } from '@/components/ecg-lab/engine/experiment-state';
import { exerciseRegistry } from '@/components/ecg-lab/exercises/definitions';
import { emptyExerciseProgress, recordCheckResult, recordReading, retryExercise, type ExerciseProgress } from '@/components/ecg-lab/exercises/progress';
import type { ExerciseReading } from '@/components/ecg-lab/exercises/readings';
import { patientCases } from '@/components/ecg-lab/patients/cases';
import { evaluateAnswer, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { createSession, currentCase, nextQuestion, submitAnswer, type SessionState } from '@/components/ecg-lab/rhythm/session';
import { buildHomeSummary, latestExperiment } from '@/components/ecg-lab/home/summary';

const NOW = '2026-10-21T10:00:00.000Z';
const [first, second, third] = exerciseRegistry;
const reading: ExerciseReading = { lead: 'II', paperSpeed: 25, gain: 10, preset: 'sinus', startMs: 240, endMs: 1040 };

function experiment(id: string, name: string, savedAt: string, elapsedMs = 800): ExperimentState {
  return createExperimentState({
    snapshotId: id,
    name,
    theme: 'light',
    machine: { lead: 'V3', paperSpeed: 25, gain: 20, showGrid: true, preset: 'sinus' },
    view: 'single',
    playback: { elapsedMs, wasPlaying: false },
    measurements: [],
    selectedMeasurementId: null,
    annotations: [],
    selectedAnnotationId: null,
    authoredRegionReferences: [],
  }, savedAt);
}

function finishedSession(seed: number, answer: (state: SessionState) => string): SessionState {
  const created = createSession({ mode: 'practice', categoryIds: ['nsr', 'svt'], difficulties: null, questionCount: 4, durationSec: null, seed });
  if (!created.ok) throw new Error(created.error);
  let state = created.state;
  while (state.status === 'in-progress') state = nextQuestion(submitAnswer(state, answer(state)));
  return state;
}

const base = (overrides: { academy?: AcademyProgress; exerciseProgress?: ExerciseProgress; savedExperiments?: ExperimentState[] } = {}) =>
  buildHomeSummary({ academy: emptyAcademyProgress(), exerciseProgress: emptyExerciseProgress(), savedExperiments: [], ...overrides });

describe('Home summary with no saved state', () => {
  it('is empty, invents nothing, and points at the first exercise', () => {
    const summary = base();
    expect(summary.isEmpty).toBe(true);
    expect(summary.continueLearning).toMatchObject({ kind: 'start-exercise', exerciseId: first.id, title: first.title });
    expect(summary.exercises.every(item => item.state === 'not-started' && item.readings === 0 && item.attempts === 0)).toBe(true);
    expect(summary.exercises).toHaveLength(exerciseRegistry.length);
    expect(summary.experiment).toBeNull();
    expect(summary.challenge).toEqual({ missedCount: 0, attempts: 0, accuracyPercent: null, timedBestScore: 0 });
    expect(summary.patients).toMatchObject({ completed: 0, total: patientCases.length, next: { id: patientCases[0].id, title: patientCases[0].title } });
    expect(summary.progress).toMatchObject({ level: 1, xp: 0, exercisesCompleted: 0, caseStudiesCompleted: 0, rhythmAccuracyPercent: null, recent: [] });
  });
});

describe('Continue learning', () => {
  it('continues an exercise that has readings but is not passed, using the first one in registry order', () => {
    let progress = recordReading(emptyExerciseProgress(), second, reading);
    progress = recordReading(progress, third, reading);
    const summary = base({ exerciseProgress: progress });
    expect(summary.continueLearning).toMatchObject({ kind: 'continue-exercise', exerciseId: second.id });
    expect(summary.continueLearning.detail).toBe(`1 of ${second.requiredReadings} ${second.requiredReadings === 1 ? 'reading' : 'readings'} recorded, 0 attempts so far.`);
    expect(summary.exercises.find(item => item.id === second.id)).toMatchObject({ state: 'in-progress', readings: 1 });
    expect(summary.isEmpty).toBe(false);
  });

  it('counts a failed attempt as in progress even after the readings were cleared', () => {
    let progress = recordCheckResult(recordReading(emptyExerciseProgress(), first, reading), first, false);
    progress = retryExercise(progress, first);
    const summary = base({ exerciseProgress: progress });
    expect(summary.exercises[0]).toMatchObject({ state: 'in-progress', readings: 0, attempts: 1 });
    expect(summary.continueLearning).toMatchObject({ kind: 'continue-exercise', exerciseId: first.id });
    expect(summary.continueLearning.detail).toContain('1 attempt so far');
  });

  it('moves on to the next unstarted exercise once earlier ones are completed', () => {
    const progress = recordCheckResult(recordReading(emptyExerciseProgress(), first, reading), first, true);
    const summary = base({ exerciseProgress: progress });
    expect(summary.exercises[0].state).toBe('completed');
    expect(summary.continueLearning).toMatchObject({ kind: 'start-exercise', exerciseId: second.id });
    expect(summary.continueLearning.detail).toBe('The next guided exercise you have not started.');
    expect(summary.progress.exercisesCompleted).toBe(1);
  });

  it('says everything is done only when every exercise is completed, and never claims it with none available', () => {
    let progress = emptyExerciseProgress();
    for (const definition of exerciseRegistry) progress = recordCheckResult(recordReading(progress, definition, reading), definition, true);
    expect(base({ exerciseProgress: progress }).continueLearning.kind).toBe('all-exercises-done');
    expect(buildHomeSummary({ academy: emptyAcademyProgress(), exerciseProgress: emptyExerciseProgress(), savedExperiments: [], exercises: [] }).continueLearning).toMatchObject({ kind: 'none-available' });
  });

  it('treats progress recorded against an older exercise version as not started', () => {
    const progress: ExerciseProgress = { version: 1, exercises: { [first.id]: { definitionVersion: '0.0.1', attempts: 3, passed: true, readings: [reading] } } };
    const summary = base({ exerciseProgress: progress });
    expect(summary.exercises[0]).toMatchObject({ state: 'not-started', attempts: 0 });
    expect(summary.isEmpty).toBe(true);
  });
});

describe('Resume experiment', () => {
  it('offers the most recently saved experiment with its real settings', () => {
    const older = experiment('experiment-a', 'Older', '2026-10-19T09:00:00.000Z');
    const newer = experiment('experiment-b', 'Newer', '2026-10-20T09:30:00.000Z', 2400);
    expect(latestExperiment([older, newer])?.snapshotId).toBe('experiment-b');
    expect(latestExperiment([])).toBeNull();
    const summary = base({ savedExperiments: [older, newer] });
    expect(summary.experiment).toEqual({ snapshotId: 'experiment-b', name: 'Newer', savedOn: '2026-10-20', settings: 'V3 · 25 mm/s · 20 mm/mV · 2400 ms' });
    expect(summary.isEmpty).toBe(false);
  });

  it('does not reorder or modify the stored list', () => {
    const list = [experiment('experiment-a', 'A', '2026-10-19T09:00:00.000Z'), experiment('experiment-b', 'B', '2026-10-20T09:00:00.000Z')];
    const copy = structuredClone(list);
    base({ savedExperiments: list });
    expect(list).toEqual(copy);
  });
});

describe('Challenge, case studies and progress come only from recorded events', () => {
  it('reports missed strips, accuracy and the timed best from the Academy', () => {
    const missed = applySession(emptyAcademyProgress(), finishedSession(5, () => 'vt'), NOW).progress;
    const summary = base({ academy: missed });
    expect(summary.challenge.missedCount).toBeGreaterThan(0);
    expect(summary.challenge).toMatchObject({ accuracyPercent: 0, attempts: 4, timedBestScore: 0 });
    expect(summary.isEmpty).toBe(false);

    const corrected = applySession(missed, finishedSession(6, state => currentCase(state)!.categoryId), NOW).progress;
    expect(base({ academy: corrected }).challenge.missedCount).toBeLessThan(summary.challenge.missedCount);
  });

  it('counts only case studies completed at the current version and points at the next one', () => {
    const patient = patientCases[0];
    const rhythm = getRhythmCase(patient.rhythmCaseId)!;
    const done = applyPatientCase(emptyAcademyProgress(), patient, evaluateAnswer(rhythm, rhythm.categoryId, 72), NOW).progress;
    const summary = base({ academy: done });
    expect(summary.patients).toMatchObject({ completed: 1, total: patientCases.length, next: { id: patientCases[1].id } });
    expect(summary.progress).toMatchObject({ caseStudiesCompleted: 1, caseStudiesTotal: patientCases.length });
    const stale: AcademyProgress = { ...done, patients: { [patient.id]: '0.0.1' } };
    expect(base({ academy: stale }).patients).toMatchObject({ completed: 0, next: { id: patient.id } });
  });

  it('shows XP, level and the three most recent awards exactly as recorded', () => {
    let academy = recordExerciseCompleted(emptyAcademyProgress(), first.id, first.version, first.title, '2026-10-21T10:00:00.000Z').progress;
    academy = applySession(academy, finishedSession(8, state => currentCase(state)!.categoryId), '2026-10-21T11:00:00.000Z').progress;
    const summary = base({ academy });
    expect(summary.progress.xp).toBeGreaterThan(25);
    expect(summary.progress.recent.length).toBeLessThanOrEqual(3);
    expect(summary.progress.recent[0].xp).toBeGreaterThan(0);
    expect(summary.progress.rhythmAccuracyPercent).toBe(100);
  });
});

describe('what counts as activity', () => {
  it('is no longer empty after any single kind of real activity', () => {
    expect(base({ academy: recordExerciseCompleted(emptyAcademyProgress(), first.id, first.version, first.title, NOW).progress }).isEmpty).toBe(false);
    expect(base({ exerciseProgress: recordReading(emptyExerciseProgress(), first, reading) }).isEmpty).toBe(false);
    expect(base({ savedExperiments: [experiment('experiment-a', 'A', NOW)] }).isEmpty).toBe(false);
  });
});
