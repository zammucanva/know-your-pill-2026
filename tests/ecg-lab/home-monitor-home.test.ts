import { describe, expect, it } from 'bun:test';
import { applyMonitorScenario, applyPatientCase, emptyAcademyProgress, type AcademyProgress } from '@/components/ecg-lab/academy/progress';
import { emptyExerciseProgress } from '@/components/ecg-lab/exercises/progress';
import { clearScenarioRun, emptyScenarioRuns, readScenarioRuns, resumableRun, saveScenarioRun, SCENARIO_RUNS_STORAGE_KEY, type ScenarioRuns } from '@/components/ecg-lab/monitor/run-storage';
import { getMonitorScenario, monitorScenarios, type MonitorScenario } from '@/components/ecg-lab/monitor/scenario';
import { patientCases } from '@/components/ecg-lab/patients/cases';
import { evaluateAnswer, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { buildHomeSummary, recommendScenario } from '@/components/ecg-lab/home/summary';

const NOW = '2026-11-02T10:00:00.000Z';
const fast = getMonitorScenario('scenario.monitored-fast-heartbeat.01')!;
const signal = getMonitorScenario('scenario.pulse-oximeter-signal.01')!;

function memoryStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => { data.set(key, value); },
    removeItem: (key: string) => { data.delete(key); },
    data,
  };
}

const runs = (entries: Record<string, ScenarioRuns['runs'][string]>): ScenarioRuns => ({ version: 1, runs: entries });
const run = (scenario: MonitorScenario, elapsedMs: number, savedAt = NOW, taken: { actionId: string; atMs: number }[] = []) =>
  ({ scenarioVersion: scenario.version, elapsedMs, taken, recordedEndMs: null, savedAt });

function completeScenario(progress: AcademyProgress, scenario: MonitorScenario): AcademyProgress {
  if (scenario.assessment.kind === 'decision') return applyMonitorScenario(progress, scenario, { decisionCorrect: true, actionTaken: true, alarmCorrect: true }, NOW).progress;
  const rhythm = getRhythmCase(scenario.phases.find(phase => phase.id === scenario.assessedPhaseId)!.rhythmCaseId)!;
  return applyMonitorScenario(progress, scenario, { rhythm: evaluateAnswer(rhythm, rhythm.categoryId), alarmCorrect: true }, NOW).progress;
}

describe('saved scenario runs', () => {
  it('round-trips a run, keyed by scenario, and clears it', () => {
    const storage = memoryStorage();
    expect(saveScenarioRun(storage, signal, { elapsedMs: 36_000, taken: [{ actionId: 'reposition-sensor', atMs: 35_000 }], recordedEndMs: null, savedAt: NOW })).toBe(true);
    const read = readScenarioRuns(storage);
    expect(read.runs[signal.id]).toMatchObject({ scenarioVersion: signal.version, elapsedMs: 36_000 });
    expect(resumableRun(read, signal)).not.toBeNull();
    clearScenarioRun(storage, signal.id);
    expect(readScenarioRuns(storage)).toEqual(emptyScenarioRuns());
  });

  it('discards unreadable or oversized stored data instead of repairing it', () => {
    const corrupt = memoryStorage({ [SCENARIO_RUNS_STORAGE_KEY]: '{"version":1,"runs":{"scenario.x.01":{"elapsedMs":"lots"}}}' });
    expect(readScenarioRuns(corrupt)).toEqual(emptyScenarioRuns());
    expect(corrupt.data.has(SCENARIO_RUNS_STORAGE_KEY)).toBe(false);
    const huge = memoryStorage({ [SCENARIO_RUNS_STORAGE_KEY]: 'x'.repeat(60_000) });
    expect(readScenarioRuns(huge)).toEqual(emptyScenarioRuns());
    expect(readScenarioRuns(null)).toEqual(emptyScenarioRuns());
    const throwing = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => undefined };
    expect(readScenarioRuns(throwing)).toEqual(emptyScenarioRuns());
    expect(saveScenarioRun(throwing, signal, { elapsedMs: 1_000, taken: [], recordedEndMs: null, savedAt: NOW })).toBe(false);
  });

  it('does not resume a run from another version, outside the duration, or with an invalid action log', () => {
    expect(resumableRun(runs({ [signal.id]: { ...run(signal, 30_000), scenarioVersion: '9.9.9' } }), signal)).toBeNull();
    expect(resumableRun(runs({ [signal.id]: run(signal, signal.durationMs) }), signal)).toBeNull();
    expect(resumableRun(runs({ [signal.id]: run(signal, 0) }), signal)).toBeNull();
    expect(resumableRun(runs({ [signal.id]: run(signal, 30_000, NOW, [{ actionId: 'made-up', atMs: 10_000 }]) }), signal)).toBeNull();
    expect(resumableRun(runs({ [signal.id]: run(signal, 30_000, NOW, [{ actionId: 'reposition-sensor', atMs: 40_000 }]) }), signal)).toBeNull();
  });
});

describe('monitored scenario recommendations', () => {
  it('recommends resuming the most recently paused run first', () => {
    const recommendation = recommendScenario(emptyAcademyProgress(), runs({
      [fast.id]: run(fast, 20_000, '2026-11-02T09:00:00.000Z'),
      [signal.id]: run(signal, 36_000, '2026-11-02T09:30:00.000Z'),
    }), monitorScenarios);
    expect(recommendation).toMatchObject({ scenarioId: signal.id, reason: 'resume', resume: true, earnsXp: true });
    expect(recommendation?.detail).toBe('You paused this scenario at 00:36.');
  });

  it('suggests the monitored version of a completed case study when one exists', () => {
    const linked = monitorScenarios.find(item => item.patientCaseId);
    if (!linked) return; // covered once patient cases are monitored (see the patient scenario tests)
    const patient = patientCases.find(item => item.id === linked.patientCaseId)!;
    const rhythm = getRhythmCase(patient.rhythmCaseId)!;
    const progress = applyPatientCase(emptyAcademyProgress(), patient, evaluateAnswer(rhythm, rhythm.categoryId), NOW).progress;
    expect(recommendScenario(progress, emptyScenarioRuns(), monitorScenarios)).toMatchObject({ scenarioId: linked.id, reason: 'follows-case-study' });
  });

  it('prefers a scenario that practises a rhythm with an unresolved miss', () => {
    const svt = getRhythmCase('rhythm.svt.01')!;
    const missed = applyPatientCase(emptyAcademyProgress(), patientCases.find(item => item.rhythmCaseId === svt.id)!, evaluateAnswer(svt, 'nsr'), NOW).progress;
    const withoutLinked = monitorScenarios.filter(item => !item.patientCaseId);
    expect(recommendScenario(missed, emptyScenarioRuns(), withoutLinked)).toMatchObject({ scenarioId: fast.id, reason: 'missed-rhythm', earnsXp: true });
  });

  it('falls back to the next uncompleted scenario, then to a no-XP replay for a still-missed rhythm, then to nothing', () => {
    const only = [fast, signal];
    expect(recommendScenario(emptyAcademyProgress(), emptyScenarioRuns(), only)).toMatchObject({ scenarioId: fast.id, reason: 'next' });
    let progress = completeScenario(emptyAcademyProgress(), fast);
    expect(recommendScenario(progress, emptyScenarioRuns(), only)).toMatchObject({ scenarioId: signal.id, reason: 'next' });
    progress = completeScenario(progress, signal);
    expect(recommendScenario(progress, emptyScenarioRuns(), only)).toBeNull();
    // A miss recorded elsewhere on the same rhythm makes a completed scenario worth replaying, with no XP.
    const svt2 = getRhythmCase('rhythm.svt.02')!;
    const missedElsewhere = { ...progress, cases: { ...progress.cases, [svt2.id]: { version: svt2.version, attempts: 1, correct: 0, rateAttempts: 0, rateCorrect: 0, everCorrect: false, missedBefore: true, repeatAwards: 0 } } };
    expect(recommendScenario(missedElsewhere, emptyScenarioRuns(), only)).toMatchObject({ scenarioId: fast.id, reason: 'replay-missed-rhythm', earnsXp: false });
  });

  it('never recommends resuming a scenario that is already completed', () => {
    const progress = completeScenario(emptyAcademyProgress(), signal);
    expect(recommendScenario(progress, runs({ [signal.id]: run(signal, 36_000) }), [signal])).toBeNull();
  });
});

describe('Home summary for monitored scenarios', () => {
  it('reports real completion and paused state, and counts a paused run as activity', () => {
    const progress = completeScenario(emptyAcademyProgress(), fast);
    const summary = buildHomeSummary({ academy: progress, exerciseProgress: emptyExerciseProgress(), savedExperiments: [], scenarioRuns: runs({ [signal.id]: run(signal, 36_000) }), scenarios: [fast, signal] });
    expect(summary.monitor.completed).toBe(1);
    expect(summary.monitor.total).toBe(2);
    expect(summary.monitor.scenarios.map(item => [item.id, item.state, item.pausedAtMs])).toEqual([[fast.id, 'completed', null], [signal.id, 'in-progress', 36_000]]);
    expect(summary.monitor.recommended).toMatchObject({ scenarioId: signal.id, reason: 'resume' });

    const fresh = buildHomeSummary({ academy: emptyAcademyProgress(), exerciseProgress: emptyExerciseProgress(), savedExperiments: [], scenarioRuns: runs({ [signal.id]: run(signal, 36_000) }), scenarios: [fast, signal] });
    expect(fresh.isEmpty).toBe(false);
    expect(buildHomeSummary({ academy: emptyAcademyProgress(), exerciseProgress: emptyExerciseProgress(), savedExperiments: [] }).isEmpty).toBe(true);
  });
});
