import { describe, expect, it } from 'bun:test';
import type { RhythmSchedule } from '@/components/ecg-lab/engine/rhythm-signal';
import { patientCases } from '@/components/ecg-lab/patients/cases';
import { buildCase, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { analyseRhythm, STRIP_DURATION_MS } from '@/components/ecg-lab/rhythm/rhythms';
import { alarmStateAt } from '@/components/ecg-lab/monitor/alarms';
import { getMonitorScenario, monitorScenarios, type MonitorScenario } from '@/components/ecg-lab/monitor/scenario';
import { buildScenarioTimeline, eventsBetween, PLETH_PULSE_DELAY_MS, type ScenarioTimeline } from '@/components/ecg-lab/monitor/timeline';
import { readingsAt } from '@/components/ecg-lab/monitor/vitals';

const linked = monitorScenarios.filter(item => item.patientCaseId);
const scenarioFor = (patientId: string) => linked.find(item => item.patientCaseId === patientId)!;

/** Re-bases a window of the composite schedule to 0-6 s so the strip analysis can read it. */
function stripAt(timeline: ScenarioTimeline, startMs: number, period: { fromMs: number; toMs: number }): RhythmSchedule {
  const shift = (range?: { fromMs?: number; toMs?: number }) => ({
    ...(range?.fromMs !== undefined ? { fromMs: range.fromMs - startMs } : {}),
    ...(range?.toMs !== undefined ? { toMs: range.toMs - startMs } : {}),
  });
  const { schedule } = timeline;
  const activeIn = (range?: { fromMs?: number; toMs?: number }) => range && (range.fromMs === undefined || range.fromMs < startMs + STRIP_DURATION_MS) && (range.toMs === undefined || range.toMs > startMs);
  return {
    // Only events around the window, as a recorded strip contains (the analysis reads every event it is given).
    // Only this period's rhythm: analyseRhythm reads every event it is given, including other runs'.
    events: schedule.events.filter(event => event.timeMs >= period.fromMs && event.timeMs < period.toMs)
      .map(event => ({ ...event, timeMs: event.timeMs - startMs })),
    ...(activeIn(schedule.fibrillation) ? { fibrillation: { ...schedule.fibrillation!, ...shift(schedule.fibrillation) } } : {}),
    ...(activeIn(schedule.flutter) ? { flutter: { ...schedule.flutter!, ...shift(schedule.flutter) } } : {}),
  };
}

describe('Virtual Patient cases on the monitor', () => {
  it('puts every existing patient case on the monitor exactly once, as draft and unreviewed', () => {
    expect(linked.map(item => item.patientCaseId).sort()).toEqual(patientCases.map(item => item.id).sort());
    for (const scenario of linked) {
      const patient = patientCases.find(item => item.id === scenario.patientCaseId)!;
      expect(scenario.publicationStatus).toBe('draft');
      expect(scenario.reviewStatus).toBe('unreviewed');
      expect(scenario.title).toBe(`On the monitor: ${patient.title}`);
      expect(scenario.presentation.startsWith(patient.presentation)).toBe(true);
      expect(scenario.symptoms).toEqual(patient.symptoms);
      expect(scenario.learningObjectives.slice(0, patient.learningObjectives.length)).toEqual(patient.learningObjectives.slice(0, 3));
    }
  });

  it('starts every channel at the values written in the patient case observations', () => {
    for (const scenario of linked) {
      const patient = patientCases.find(item => item.id === scenario.patientCaseId)!;
      const phase = scenario.phases[0];
      const observed = Object.fromEntries(patient.observations.map(item => [item.label, item.value]));
      expect(observed['Blood pressure'], scenario.id).toBe(`${phase.nibp!.systolic}/${phase.nibp!.diastolic} mmHg`);
      expect(observed['Oxygen saturation'], scenario.id).toBe(`${phase.spo2!.percent}% on room air`);
      expect(observed['Respiratory rate'], scenario.id).toBe(`${phase.respiratoryRatePerMin} per minute`);
      if (observed.Temperature === undefined) expect(phase.temperatureC, scenario.id).toBeNull();
      else expect(observed.Temperature, scenario.id).toBe(`${phase.temperatureC!.toFixed(1)} °C`);
      // The assessed rhythm is the patient case's own rhythm unless the scenario explicitly changes it.
      expect(scenario.phases.some(item => item.rhythmCaseId === patient.rhythmCaseId), scenario.id).toBe(true);
    }
  });

  it.each(linked.map(item => [item.id, item] as const))('%s: any strip recorded inside the assessed period matches the rhythm it is scored against', (_id, scenario: MonitorScenario) => {
    const timeline = buildScenarioTimeline(scenario);
    const assessed = scenario.phases.find(phase => phase.id === scenario.assessedPhaseId)!;
    const endMs = scenario.phases.find(phase => phase.startMs > assessed.startMs)?.startMs ?? scenario.durationMs;
    const { category } = buildCase(getRhythmCase(assessed.rhythmCaseId)!);
    // The first period keeps its lead-in history; a later one starts at its boundary.
    const period = { fromMs: assessed.startMs === 0 ? -Infinity : assessed.startMs, toMs: endMs === scenario.durationMs ? Infinity : endMs };
    // Strips start a beat after the boundary so the first complex in view belongs to the new rhythm.
    for (let start = assessed.startMs + 1_500; start + STRIP_DURATION_MS <= endMs; start += 2_000) {
      const analysis = analyseRhythm(stripAt(timeline, start, period));
      expect([analysis.regularity, analysis.qrs, analysis.pRelation], `${scenario.id} at ${start} ms`).toEqual([category.expected.regularity, category.expected.qrs, category.expected.pRelation]);
    }
  });
});

describe('case-specific monitor rules', () => {
  it('lead off: no detectable ECG beats or heart rate while the electrode is loose; reattaching restores them', () => {
    const scenario = scenarioFor('patient.awareness-after-exercise.01');
    const off = scenario.phases[1].startMs;
    const base = buildScenarioTimeline(scenario);
    expect(eventsBetween(base.ecgDetectedQrsTimesMs, off, scenario.durationMs)).toEqual([]);
    expect(eventsBetween(base.qrsTimesMs, off, scenario.durationMs).length).toBeGreaterThan(50);
    expect(readingsAt(base, off + 5_000).heartRate).toEqual({ value: null, status: 'lead-off' });
    expect(alarmStateAt(base, off + 5_000).active.map(alarm => alarm.id)).toEqual(['ecg-lead-off']);
    // The pulse oximeter is a separate sensor and keeps counting.
    expect(readingsAt(base, off + 5_000).pulseRate.value).toBe(72);

    const fixed = buildScenarioTimeline(scenario, [{ actionId: 'reattach-electrode', atMs: off + 4_000 }]);
    expect(fixed.qrsTimesMs).toEqual(base.qrsTimesMs);
    expect(eventsBetween(fixed.ecgDetectedQrsTimesMs, off, off + 7_000)).toEqual([]);
    expect(eventsBetween(fixed.ecgDetectedQrsTimesMs, off + 7_000, scenario.durationMs).length).toBeGreaterThan(50);
    expect(readingsAt(fixed, off + 12_000).heartRate).toEqual({ value: 72, status: 'ok' });
    expect(alarmStateAt(fixed, off + 12_000).active).toEqual([]);
  });

  it('pulse deficit: only beats after a short R–R interval lose their pleth pulse, so PR reads below HR', () => {
    for (const patientId of ['patient.irregular-heartbeat.01', 'patient.skipped-beats.01']) {
      const scenario = scenarioFor(patientId);
      const timeline = buildScenarioTimeline(scenario);
      const threshold = scenario.phases[0].spo2!.pulseDeficitBelowRrMs!;
      const key = (time: number) => Math.round(time * 1_000);
      const pulses = new Set(timeline.plethPulseTimesMs.map(time => key(time - PLETH_PULSE_DELAY_MS)));
      timeline.qrsTimesMs.forEach((time, index) => {
        if (index === 0) return;
        const shortInterval = time - timeline.qrsTimesMs[index - 1] < threshold;
        expect(pulses.has(key(time)), `${patientId} beat at ${time}`).toBe(!shortInterval);
      });
      expect(timeline.plethPulseTimesMs.length, patientId).toBeLessThan(timeline.qrsTimesMs.length);
      const lower = [20_000, 40_000, 60_000, 80_000].filter(time => {
        const reading = readingsAt(timeline, time);
        return reading.pulseRate.value !== null && reading.heartRate.value !== null && reading.pulseRate.value < reading.heartRate.value;
      });
      expect(lower.length, patientId).toBeGreaterThan(0);
    }
  });

  it('recurring early beats: every 6-second window of the skipped-beats scenario contains a wide premature beat', () => {
    const scenario = scenarioFor('patient.skipped-beats.01');
    const { schedule } = buildScenarioTimeline(scenario);
    const wide = schedule.events.filter(event => event.kind === 'qrs' && event.wide).map(event => event.timeMs);
    expect(wide.length).toBeGreaterThanOrEqual(12);
    for (let start = 0; start + STRIP_DURATION_MS <= scenario.durationMs; start += 500) {
      expect(wide.some(time => time >= start && time < start + STRIP_DURATION_MS), `window at ${start}`).toBe(true);
    }
  });

  it('fast rhythm stopping: the high-rate alarm is raised early and clears after the rhythm settles', () => {
    const scenario = scenarioFor('patient.sudden-fast-heartbeat.01');
    const timeline = buildScenarioTimeline(scenario);
    expect(alarmStateAt(timeline, 10_000).active.map(alarm => alarm.id)).toEqual(['hr-high']);
    const later = alarmStateAt(timeline, 55_000);
    expect(later.active).toEqual([]);
    expect(later.log.filter(entry => entry.id === 'hr-high').map(entry => entry.event)).toEqual(['onset', 'cleared']);
    expect(readingsAt(timeline, 55_000).heartRate.value).toBe(getRhythmCase('rhythm.nsr.02')!.rateBpm);
  });

  it('quiet monitor: the first-degree block case raises no alarm at all and has no temperature channel', () => {
    const scenario = scenarioFor('patient.routine-ecg-before-sport.01');
    const timeline = buildScenarioTimeline(scenario);
    expect(alarmStateAt(timeline, scenario.durationMs).log).toEqual([]);
    expect(readingsAt(timeline, 30_000).temperatureC).toEqual({ value: null, status: 'absent' });
  });

  it('rising rate with fever: temperature is its own channel and the rate crosses the limit only after 00:45', () => {
    const scenario = scenarioFor('patient.unwell-with-fast-pulse.01');
    const timeline = buildScenarioTimeline(scenario);
    expect(readingsAt(timeline, 30_000).temperatureC.value).toBe(38.6);
    expect(alarmStateAt(timeline, 44_000).active).toEqual([]);
    const onset = alarmStateAt(timeline, 60_000).log.find(entry => entry.id === 'hr-high' && entry.event === 'onset')!;
    expect(onset.atMs).toBeGreaterThan(45_000);
    expect(onset.atMs).toBeLessThan(48_000);
  });

  it('the decision and original scenarios are untouched by the new cases', () => {
    expect(getMonitorScenario('scenario.monitored-fast-heartbeat.01')!.patientCaseId).toBeUndefined();
    expect(getMonitorScenario('scenario.pulse-oximeter-signal.01')!.assessment.kind).toBe('decision');
  });
});
