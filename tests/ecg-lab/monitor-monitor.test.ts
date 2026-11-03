import { describe, expect, it } from 'bun:test';
import { generateRhythmLeadSamples } from '@/components/ecg-lab/engine/rhythm-signal';
import { getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { acknowledgeAlarms, ALARM_SILENCE_MS, audibleAlarm, evaluateAlarmConditions, initialAlarmState, updateAlarms, type AlarmState } from '@/components/ecg-lab/monitor/alarms';
import { getMonitorScenario, monitorScenarios, monitorScenarioSchema, type MonitorScenario } from '@/components/ecg-lab/monitor/scenario';
import { buildScenarioTimeline, eventsBetween, PLETH_PULSE_DELAY_MS } from '@/components/ecg-lab/monitor/timeline';
import { NIBP_FIRST_MS, plethWindow, rateFromEvents, readingsAt, respirationWindow, SPO2_MS_PER_POINT } from '@/components/ecg-lab/monitor/vitals';

const scenario = getMonitorScenario('scenario.monitored-fast-heartbeat.01')!;
const timeline = buildScenarioTimeline(scenario);
const onset = scenario.phases[1].startMs;

function variant(change: (copy: MonitorScenario) => void): MonitorScenario {
  const copy = structuredClone(scenario) as MonitorScenario;
  change(copy);
  return copy;
}

/** Steps the alarm state machine through simulated time the way the monitor does. */
function runAlarms(target: MonitorScenario, untilMs: number, stepMs = 100, start: AlarmState = initialAlarmState(), fromMs = 0) {
  const built = buildScenarioTimeline(target);
  let state = start;
  for (let time = fromMs; time <= untilMs; time += stepMs) state = updateAlarms(state, evaluateAlarmConditions(readingsAt(built, time), target.alarmLimits), time);
  return state;
}

describe('monitored scenario definitions', () => {
  it('are validated, draft and unreviewed', () => {
    expect(monitorScenarios.length).toBeGreaterThanOrEqual(1);
    expect(monitorScenarios.every(item => item.publicationStatus === 'draft' && item.reviewStatus === 'unreviewed')).toBe(true);
    expect(Object.isFrozen(monitorScenarios)).toBe(true);
  });

  it('rejects published status, unknown rhythms, unordered phases and a missing assessed phase', () => {
    expect(monitorScenarioSchema.safeParse({ ...scenario, publicationStatus: 'published' }).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.phases[1].rhythmCaseId = 'rhythm.made-up.01'; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.phases[1].startMs = 0; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.phases[0].startMs = 5; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.assessedPhaseId = 'nowhere'; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.phases[0].nibp = { systolic: 70, diastolic: 90 }; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.phases[0].temperatureC = 36.85; })).success).toBe(false);
    expect(monitorScenarioSchema.safeParse(variant(copy => { copy.bedLabel = 'Ward 4 bed 2'; })).success).toBe(false);
  });
});

describe('scenario timeline', () => {
  it('is deterministic for the same scenario', () => {
    expect(buildScenarioTimeline(scenario)).toEqual(timeline);
  });

  it('keeps each phase at its rhythm case rate and never couples beats closer than 300 ms', () => {
    const baselineRr = 60_000 / getRhythmCase(scenario.phases[0].rhythmCaseId)!.rateBpm;
    const fastRr = 60_000 / getRhythmCase(scenario.phases[1].rhythmCaseId)!.rateBpm;
    const before = timeline.qrsTimesMs.filter(time => time > 1_000 && time < onset);
    const after = timeline.qrsTimesMs.filter(time => time > onset + 2_000 && time < scenario.durationMs);
    before.slice(1).forEach((time, index) => expect(time - before[index]).toBeCloseTo(baselineRr, 6));
    after.slice(1).forEach((time, index) => expect(time - after[index]).toBeCloseTo(fastRr, 6));
    timeline.qrsTimesMs.slice(1).forEach((time, index) => expect(time - timeline.qrsTimesMs[index]).toBeGreaterThanOrEqual(300));
  });

  it('draws a continuous ECG across the rhythm change with finite samples on every lead', () => {
    for (const lead of ['II', 'aVR', 'V1'] as const) {
      const samples = generateRhythmLeadSamples(timeline.schedule, lead, onset - 3_000, onset + 3_000);
      expect(samples.length).toBe(1501);
      expect(samples.every(sample => Number.isFinite(sample.voltageMv))).toBe(true);
    }
  });

  it('places one pleth pulse a fixed delay after each beat while the sensor is on', () => {
    expect(timeline.plethPulseTimesMs).toEqual(timeline.qrsTimesMs.map(time => time + PLETH_PULSE_DELAY_MS));
    const off = buildScenarioTimeline(variant(copy => { copy.phases[1].spo2 = { percent: 97, quality: 'off', perfusion: 'normal' }; }));
    expect(off.plethPulseTimesMs.every(time => time - PLETH_PULSE_DELAY_MS < onset)).toBe(true);
    expect(off.qrsTimesMs).toEqual(timeline.qrsTimesMs);
  });

  it('selects events in a half-open interval for audio scheduling', () => {
    expect(eventsBetween([100, 200, 300], 100, 300)).toEqual([200, 300]);
    expect(eventsBetween([100, 200, 300], 300, 300)).toEqual([]);
    expect(eventsBetween([100, 200, 300], 0, 99)).toEqual([]);
  });
});

describe('vital-sign channels', () => {
  it('derives heart rate from ECG beats and changes it after the rhythm change', () => {
    const baselineRate = getRhythmCase(scenario.phases[0].rhythmCaseId)!.rateBpm;
    const fastRate = getRhythmCase(scenario.phases[1].rhythmCaseId)!.rateBpm;
    expect(readingsAt(timeline, 0).heartRate.value).toBeNull();
    expect(readingsAt(timeline, 30_000).heartRate).toEqual({ value: baselineRate, status: 'ok' });
    expect(readingsAt(timeline, onset + 5_000).heartRate).toEqual({ value: fastRate, status: 'ok' });
  });

  it('computes pulse rate from pleth pulses independently of the ECG', () => {
    expect(readingsAt(timeline, 30_000).pulseRate.value).toBe(readingsAt(timeline, 30_000).heartRate.value);
    const noSensor = buildScenarioTimeline(variant(copy => { copy.phases.forEach(phase => { phase.spo2 = null; }); }));
    const reading = readingsAt(noSensor, 30_000);
    expect(reading.heartRate.status).toBe('ok');
    expect(reading.pulseRate).toEqual({ value: null, status: 'absent' });
    expect(reading.spo2).toEqual({ value: null, status: 'absent' });
  });

  it('moves the displayed SpO2 toward a new value one point at a time', () => {
    const lagged = buildScenarioTimeline(variant(copy => { copy.phases[1].spo2 = { percent: 92, quality: 'good', perfusion: 'normal' }; }));
    expect(readingsAt(lagged, onset - 1).spo2.value).toBe(98);
    expect(readingsAt(lagged, onset + SPO2_MS_PER_POINT * 2).spo2.value).toBe(96);
    expect(readingsAt(lagged, onset + SPO2_MS_PER_POINT * 20).spo2.value).toBe(92);
  });

  it('reports blood pressure only from intermittent cuff measurements, with MAP marked as calculated', () => {
    expect(readingsAt(timeline, NIBP_FIRST_MS - 1).nibp.status).toBe('pending');
    const early = readingsAt(timeline, 36_000).nibp;
    expect(early).toEqual({ status: 'ok', systolic: 122, diastolic: 76, meanCalculated: 91, measuredAtMs: 35_000 });
    // After the rhythm change the cuff has not measured again yet, so the old value stays.
    expect(readingsAt(timeline, onset + 2_000).nibp.systolic).toBe(122);
    expect(readingsAt(timeline, 66_000).nibp).toMatchObject({ systolic: 108, diastolic: 70, measuredAtMs: 65_000 });
  });

  it('withdraws a rate when beats stop arriving instead of showing a stale number', () => {
    expect(rateFromEvents([0, 1000, 2000, 3000, 4000], 4500)).toBe(60);
    expect(rateFromEvents([0, 1000, 2000, 3000, 4000], 10_000)).toBeNull();
    expect(rateFromEvents([1000], 1500)).toBeNull();
  });

  it('shows no rate until a full averaging window has been counted, so a short first interval cannot alarm', () => {
    expect(rateFromEvents([0, 300, 1300, 2300], 2400)).toBeNull();
    expect(rateFromEvents([0, 300, 1300, 2300, 3300], 3400)).toBe(Math.round(60_000 * 4 / 3300));
  });

  it('marks lead-off and poor pleth signal per channel', () => {
    const faulty = buildScenarioTimeline(variant(copy => {
      copy.phases[1].ecg = 'lead-off';
      copy.phases[1].spo2 = { percent: 97, quality: 'poor', perfusion: 'low' };
    }));
    const reading = readingsAt(faulty, onset + 5_000);
    expect(reading.heartRate).toEqual({ value: null, status: 'lead-off' });
    expect(reading.spo2.status).toBe('poor');
    expect(plethWindow(faulty, onset + 1_000, onset + 2_000).every(sample => sample !== null)).toBe(true);
  });

  it('keeps the pleth trace continuous across a perfusion change (no pulse cut in half)', () => {
    const samples = plethWindow(timeline, onset - 2_000, onset + 2_000).map(sample => sample!.value);
    const steps = samples.slice(1).map((value, index) => Math.abs(value - samples[index]));
    // At 100 Hz the steepest part of a simulated upstroke moves well under 0.2 units per sample.
    expect(Math.max(...steps)).toBeLessThan(0.2);
  });

  it('produces bounded pleth and respiration traces, with gaps where the sensor is off', () => {
    const pleth = plethWindow(timeline, 10_000, 16_000);
    expect(pleth.length).toBe(601);
    expect(pleth.every(sample => sample !== null && sample.value >= 0 && sample.value <= 1.3)).toBe(true);
    const resp = respirationWindow(timeline, 10_000, 16_000);
    expect(resp.every(sample => sample !== null && Math.abs(sample.value) <= 1)).toBe(true);
    const off = buildScenarioTimeline(variant(copy => { copy.phases[1].spo2 = { percent: 97, quality: 'off', perfusion: 'normal' }; }));
    expect(plethWindow(off, onset + 1_000, onset + 2_000).every(sample => sample === null)).toBe(true);
  });
});

describe('alarms', () => {
  it('raises the configured high heart-rate alarm after the rhythm change, not before', () => {
    expect(runAlarms(scenario, onset - 100).active).toEqual([]);
    const after = runAlarms(scenario, onset + 5_000);
    expect(after.active.map(alarm => alarm.id)).toContain('hr-high');
    const entry = after.log.find(item => item.id === 'hr-high' && item.event === 'onset')!;
    expect(entry.atMs).toBeGreaterThanOrEqual(onset);
    expect(entry.atMs).toBeLessThan(onset + 3_000);
  });

  it('silences sound on acknowledgement without clearing the alarm, and sounds again after the silence', () => {
    const active = runAlarms(scenario, onset + 5_000);
    expect(audibleAlarm(active, onset + 5_000)?.id).toBe('hr-high');
    const acknowledged = acknowledgeAlarms(active, onset + 5_000);
    expect(acknowledged.active.map(alarm => alarm.id)).toContain('hr-high');
    expect(audibleAlarm(acknowledged, onset + 6_000)).toBeNull();
    expect(audibleAlarm(acknowledged, onset + 5_000 + ALARM_SILENCE_MS)?.id).toBe('hr-high');
    expect(acknowledged.log.some(item => item.event === 'acknowledged' && item.id === 'hr-high')).toBe(true);
  });

  it('clears an alarm only when its condition clears, and logs it', () => {
    const recovering = variant(copy => {
      copy.phases.push({ ...copy.phases[0], id: 'recovered', startMs: 80_000 });
    });
    const state = runAlarms(recovering, 90_000);
    expect(state.active.map(alarm => alarm.id)).not.toContain('hr-high');
    expect(state.log.filter(item => item.id === 'hr-high').map(item => item.event)).toEqual(['onset', 'cleared']);
  });

  it('reports equipment problems as low-priority technical alarms', () => {
    const faulty = buildScenarioTimeline(variant(copy => {
      copy.phases[1].ecg = 'lead-off';
      copy.phases[1].spo2 = { percent: 97, quality: 'off', perfusion: 'normal' };
    }));
    const conditions = evaluateAlarmConditions(readingsAt(faulty, onset + 5_000), scenario.alarmLimits);
    expect(conditions.map(condition => [condition.id, condition.kind, condition.priority])).toEqual([
      ['ecg-lead-off', 'technical', 'low'],
      ['spo2-sensor-off', 'technical', 'low'],
    ]);
  });

  it('returns the same state object when nothing changes', () => {
    const state = runAlarms(scenario, 10_000);
    expect(updateAlarms(state, [], 10_100)).toBe(state);
  });
});

describe('learner actions and channel-only phases', () => {
  const decision = getMonitorScenario('scenario.pulse-oximeter-signal.01')!;
  const problemAt = decision.phases[1].startMs;
  const base = buildScenarioTimeline(decision);

  it('continues one beat schedule across a phase change that only alters equipment channels', () => {
    const rr = 60_000 / getRhythmCase('rhythm.nsr.02')!.rateBpm;
    const beats = base.qrsTimesMs.filter(time => time > 0 && time < decision.durationMs);
    beats.slice(1).forEach((time, index) => expect(time - beats[index]).toBeCloseTo(rr, 6));
  });

  it('shows the artefact as a poor-quality SpO2 number with only a technical alarm, while ECG heart rate is unchanged', () => {
    const before = readingsAt(base, problemAt - 1_000);
    const during = readingsAt(base, problemAt + 5_000);
    expect(before.spo2).toEqual({ value: 98, status: 'ok' });
    expect(during.spo2).toEqual({ value: 84, status: 'poor' });
    expect(during.heartRate.value).toBe(before.heartRate.value);
    const state = runAlarms(decision, problemAt + 5_000);
    expect(state.active.map(alarm => [alarm.id, alarm.kind, alarm.priority])).toEqual([['spo2-poor-signal', 'technical', 'low']]);
  });

  it('applies a bedside action after its delay, restores the signal, clears the alarm and leaves the ECG untouched', () => {
    const takenAt = problemAt + 10_000;
    const fixed = buildScenarioTimeline(decision, [{ actionId: 'reposition-sensor', atMs: takenAt }]);
    const delay = decision.actions[0].delayMs;
    expect(fixed.qrsTimesMs).toEqual(base.qrsTimesMs);
    expect(fixed.schedule).toEqual(base.schedule);
    expect(readingsAt(fixed, takenAt + delay - 1).spo2.status).toBe('poor');
    expect(readingsAt(fixed, takenAt + delay + 1).spo2).toEqual({ value: 98, status: 'ok' });
    expect(readingsAt(fixed, takenAt + delay + 1).phaseId).toBe('hand-movement');
    let state: AlarmState = initialAlarmState();
    for (let time = 0; time <= takenAt + delay + 2_000; time += 100) state = updateAlarms(state, evaluateAlarmConditions(readingsAt(fixed, time), decision.alarmLimits), time);
    expect(state.active).toEqual([]);
    expect(state.log.filter(entry => entry.id === 'spo2-poor-signal').map(entry => entry.event)).toEqual(['onset', 'cleared']);
    expect(buildScenarioTimeline(decision, [{ actionId: 'reposition-sensor', atMs: takenAt }])).toEqual(fixed);
  });

  it('rejects unknown, repeated or out-of-range actions', () => {
    expect(() => buildScenarioTimeline(decision, [{ actionId: 'made-up', atMs: 1_000 }])).toThrow(RangeError);
    expect(() => buildScenarioTimeline(decision, [{ actionId: 'reposition-sensor', atMs: 1_000 }, { actionId: 'reposition-sensor', atMs: 2_000 }])).toThrow(RangeError);
    expect(() => buildScenarioTimeline(decision, [{ actionId: 'reposition-sensor', atMs: decision.durationMs + 1 }])).toThrow(RangeError);
  });

  it('validates decision assessments: one best option and an existing expected action', () => {
    const copy = structuredClone(decision) as MonitorScenario;
    if (copy.assessment.kind !== 'decision') throw new Error('expected a decision scenario');
    copy.assessment.options[1].correct = true;
    expect(monitorScenarioSchema.safeParse(copy).success).toBe(false);
    const missing = structuredClone(decision) as MonitorScenario;
    if (missing.assessment.kind === 'decision') missing.assessment.expectedActionId = 'nowhere';
    expect(monitorScenarioSchema.safeParse(missing).success).toBe(false);
    expect(monitorScenarioSchema.parse({ ...scenario, assessment: undefined, actions: undefined }).assessment).toEqual({ kind: 'rhythm' });
  });
});

describe('restoring a saved run', () => {
  it('recomputes alarm state up to the saved time exactly as live stepping would', async () => {
    const { alarmStateAt } = await import('@/components/ecg-lab/monitor/alarms');
    const restored = alarmStateAt(timeline, onset + 5_000);
    const live = runAlarms(scenario, onset + 5_000, 16);
    expect(restored.active.map(alarm => alarm.id)).toEqual(live.active.map(alarm => alarm.id));
    expect(restored.log.map(entry => [entry.id, entry.event])).toEqual(live.log.map(entry => [entry.id, entry.event]));
    expect(Math.abs(restored.log[0].atMs - live.log[0].atMs)).toBeLessThanOrEqual(16);
  });
});
