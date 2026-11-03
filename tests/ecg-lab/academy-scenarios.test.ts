import { describe, expect, it } from 'bun:test';
import { getMonitorScenario, monitorScenarios } from '@/components/ecg-lab/monitor/scenario';
import { evaluateAnswer, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { academyProgressSchema, applyMonitorScenario, dashboardStats, emptyAcademyProgress, totalXp, XP_RULES } from '@/components/ecg-lab/academy/progress';

const NOW = '2026-10-21T10:00:00.000Z';
const scenario = getMonitorScenario('scenario.monitored-fast-heartbeat.01')!;
const assessed = getRhythmCase(scenario.phases.find(phase => phase.id === scenario.assessedPhaseId)!.rhythmCaseId)!;
const right = () => evaluateAnswer(assessed, assessed.categoryId);
const wrong = () => evaluateAnswer(assessed, 'sinus-tachycardia');

describe('monitored scenario awards', () => {
  it('credits completion, the rhythm, the alarm and the underlying rhythm case once', () => {
    const result = applyMonitorScenario(emptyAcademyProgress(), scenario, { rhythm: right(), alarmCorrect: true }, NOW);
    const expected = XP_RULES.monitoredScenarioCompleted + XP_RULES.monitoredScenarioCorrectRhythm + XP_RULES.monitoredScenarioCorrectAlarm + XP_RULES.firstCorrectRhythm;
    expect(result.xpGained).toBe(expected);
    expect(totalXp(result.progress)).toBe(expected);
    expect(result.progress.scenarios[scenario.id]).toBe(scenario.version);
    expect(result.progress.cases[assessed.id]).toMatchObject({ attempts: 1, correct: 1, everCorrect: true });
    expect(result.achievements).toEqual(expect.arrayContaining(['first-monitored-scenario', 'first-correct-rhythm']));
    expect(dashboardStats(result.progress)).toMatchObject({ monitoredScenariosCompleted: 1, monitoredScenariosAvailable: monitorScenarios.length });
  });

  it('is idempotent: completing the same scenario again pays nothing', () => {
    const first = applyMonitorScenario(emptyAcademyProgress(), scenario, { rhythm: right(), alarmCorrect: true }, NOW);
    const again = applyMonitorScenario(first.progress, scenario, { rhythm: right(), alarmCorrect: true }, '2026-10-21T11:00:00.000Z');
    expect(again).toMatchObject({ xpGained: 0, alreadyApplied: true });
    expect(again.progress).toBe(first.progress);
  });

  it('pays only the completion reward when both answers are wrong, and records the miss', () => {
    const result = applyMonitorScenario(emptyAcademyProgress(), scenario, { rhythm: wrong(), alarmCorrect: false }, NOW);
    expect(result.xpGained).toBe(XP_RULES.monitoredScenarioCompleted);
    expect(result.progress.cases[assessed.id]).toMatchObject({ correct: 0, missedBefore: true });
  });

  it('refuses an evaluation that is not for the assessed phase rhythm', () => {
    const other = getRhythmCase('rhythm.nsr.01')!;
    const result = applyMonitorScenario(emptyAcademyProgress(), scenario, { rhythm: evaluateAnswer(other, other.categoryId), alarmCorrect: true }, NOW);
    expect(result).toMatchObject({ xpGained: 0, alreadyApplied: false });
    expect(result.progress.scenarios).toEqual({});
  });

  it('credits a decision scenario for the decision and the bedside check, never for a rhythm', () => {
    const decision = getMonitorScenario('scenario.pulse-oximeter-signal.01')!;
    const full = applyMonitorScenario(emptyAcademyProgress(), decision, { decisionCorrect: true, actionTaken: true, alarmCorrect: true }, NOW);
    expect(full.xpGained).toBe(XP_RULES.monitoredScenarioCompleted + XP_RULES.monitoredScenarioCorrectDecision + XP_RULES.monitoredScenarioActionTaken + XP_RULES.monitoredScenarioCorrectAlarm);
    expect(full.progress.cases).toEqual({});
    const bare = applyMonitorScenario(emptyAcademyProgress(), decision, { decisionCorrect: false, actionTaken: false, alarmCorrect: false }, NOW);
    expect(bare.xpGained).toBe(XP_RULES.monitoredScenarioCompleted);
    expect(applyMonitorScenario(emptyAcademyProgress(), decision, { alarmCorrect: true }, NOW)).toMatchObject({ xpGained: 0, alreadyApplied: false });
  });

  it('loads stored progress saved before scenarios existed', () => {
    const legacy = { ...emptyAcademyProgress() } as Record<string, unknown>;
    delete legacy.scenarios;
    const parsed = academyProgressSchema.safeParse(legacy);
    expect(parsed.success).toBe(true);
    expect(parsed.success && parsed.data.scenarios).toEqual({});
  });
});
