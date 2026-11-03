import type { AlarmLimits } from './scenario';
import type { ScenarioTimeline } from './timeline';
import { readingsAt, type MonitorReadings } from './vitals';

/**
 * Educational alarm model. Conditions come from the current readings and the scenario's configured
 * limits; the state machine records onset, acknowledgement and clearing. Silencing only stops the
 * sound for a while: it never clears an alarm, which clears only when its condition does.
 */
export type AlarmPriority = 'high' | 'medium' | 'low';
export type AlarmKind = 'physiological' | 'technical';

export type AlarmCondition = {
  id: AlarmId;
  kind: AlarmKind;
  priority: AlarmPriority;
  /** Short monitor-style text, also used as the accessible description. */
  message: string;
};

export const alarmIds = ['hr-high', 'hr-low', 'spo2-low', 'rr-high', 'rr-low', 'sys-high', 'sys-low', 'ecg-lead-off', 'spo2-sensor-off', 'spo2-poor-signal'] as const;
export type AlarmId = (typeof alarmIds)[number];

export const alarmLabels: Record<AlarmId, string> = {
  'hr-high': 'Heart rate above the high limit',
  'hr-low': 'Heart rate below the low limit',
  'spo2-low': 'SpO₂ below the low limit',
  'rr-high': 'Respiratory rate above the high limit',
  'rr-low': 'Respiratory rate below the low limit',
  'sys-high': 'Systolic pressure above the high limit',
  'sys-low': 'Systolic pressure below the low limit',
  'ecg-lead-off': 'ECG lead off',
  'spo2-sensor-off': 'SpO₂ sensor off',
  'spo2-poor-signal': 'SpO₂ poor signal',
};

const priorityRank: Record<AlarmPriority, number> = { high: 3, medium: 2, low: 1 };

/**
 * Conditions active for these readings. In this simulation limit violations are medium priority
 * and equipment problems are low priority; real monitors and local policies assign priorities
 * differently.
 */
export function evaluateAlarmConditions(readings: MonitorReadings, limits: AlarmLimits): AlarmCondition[] {
  const out: AlarmCondition[] = [];
  const physiological = (id: AlarmId, value: number, unit: string, limit: number, direction: '>' | '<') =>
    out.push({ id, kind: 'physiological', priority: 'medium', message: `${alarmLabels[id]}: ${value} ${unit} (limit ${direction === '>' ? 'high' : 'low'} ${limit})` });

  const hr = readings.heartRate.value;
  if (hr !== null) {
    if (hr > limits.heartRate.high) physiological('hr-high', hr, '/min', limits.heartRate.high, '>');
    else if (hr < limits.heartRate.low) physiological('hr-low', hr, '/min', limits.heartRate.low, '<');
  }
  const spo2 = readings.spo2.value;
  if (spo2 !== null && readings.spo2.status === 'ok' && spo2 < limits.spo2.low) physiological('spo2-low', spo2, '%', limits.spo2.low, '<');
  const rr = readings.respiratoryRate.value;
  if (rr !== null) {
    if (rr > limits.respiratoryRate.high) physiological('rr-high', rr, '/min', limits.respiratoryRate.high, '>');
    else if (rr < limits.respiratoryRate.low) physiological('rr-low', rr, '/min', limits.respiratoryRate.low, '<');
  }
  const sys = readings.nibp.systolic;
  if (sys !== null) {
    if (sys > limits.systolic.high) physiological('sys-high', sys, 'mmHg', limits.systolic.high, '>');
    else if (sys < limits.systolic.low) physiological('sys-low', sys, 'mmHg', limits.systolic.low, '<');
  }
  if (readings.heartRate.status === 'lead-off') out.push({ id: 'ecg-lead-off', kind: 'technical', priority: 'low', message: alarmLabels['ecg-lead-off'] });
  if (readings.spo2.status === 'off') out.push({ id: 'spo2-sensor-off', kind: 'technical', priority: 'low', message: alarmLabels['spo2-sensor-off'] });
  if (readings.spo2.status === 'poor') out.push({ id: 'spo2-poor-signal', kind: 'technical', priority: 'low', message: alarmLabels['spo2-poor-signal'] });
  return out;
}

export type ActiveAlarm = AlarmCondition & { onsetMs: number };
export type AlarmLogEntry = { id: AlarmId; event: 'onset' | 'cleared' | 'acknowledged'; atMs: number; message: string };
export type AlarmState = {
  active: ActiveAlarm[];
  /** Audio for currently active alarms is silenced until this simulated time. */
  silencedUntilMs: number | null;
  log: AlarmLogEntry[];
};

/** Simulated time an acknowledgement silences alarm audio for. A simulation setting. */
export const ALARM_SILENCE_MS = 60_000;
export const MAX_ALARM_LOG = 200;

export const initialAlarmState = (): AlarmState => ({ active: [], silencedUntilMs: null, log: [] });

/** Applies the conditions present at `nowMs`. Pure: the same inputs always give the same state. */
export function updateAlarms(state: AlarmState, conditions: readonly AlarmCondition[], nowMs: number): AlarmState {
  const present = new Map(conditions.map(condition => [condition.id, condition]));
  const log = [...state.log];
  const kept: ActiveAlarm[] = [];
  for (const alarm of state.active) {
    const still = present.get(alarm.id);
    if (still) kept.push({ ...alarm, message: still.message, priority: still.priority });
    else log.push({ id: alarm.id, event: 'cleared', atMs: nowMs, message: alarm.message });
  }
  for (const condition of conditions) {
    if (state.active.some(alarm => alarm.id === condition.id)) continue;
    kept.push({ ...condition, onsetMs: nowMs });
    log.push({ id: condition.id, event: 'onset', atMs: nowMs, message: condition.message });
  }
  const changed = kept.length !== state.active.length || log.length !== state.log.length || kept.some((alarm, index) => alarm.message !== state.active[index]?.message);
  if (!changed) return state;
  kept.sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority] || a.onsetMs - b.onsetMs);
  return { active: kept, silencedUntilMs: kept.length === 0 ? null : state.silencedUntilMs, log: log.slice(-MAX_ALARM_LOG) };
}

/** Learner acknowledges the active alarms: audio pauses; the alarms stay visible and active. */
export function acknowledgeAlarms(state: AlarmState, nowMs: number, silenceMs = ALARM_SILENCE_MS): AlarmState {
  if (state.active.length === 0) return state;
  const log = [...state.log, ...state.active.map(alarm => ({ id: alarm.id, event: 'acknowledged' as const, atMs: nowMs, message: alarm.message }))];
  return { ...state, silencedUntilMs: nowMs + silenceMs, log: log.slice(-MAX_ALARM_LOG) };
}

/** The alarm whose sound should play now, or null when none is active or audio is silenced. */
export function audibleAlarm(state: AlarmState, nowMs: number): ActiveAlarm | null {
  if (state.active.length === 0) return null;
  if (state.silencedUntilMs !== null && nowMs < state.silencedUntilMs) return null;
  return state.active[0];
}

/**
 * Alarm state reached by playing the timeline from 0 to `untilMs` in fixed steps, with no
 * acknowledgements. Used to restore a saved run: onsets and clears land within one step of where
 * live playback (one evaluation per animation frame) puts them.
 */
export function alarmStateAt(timeline: ScenarioTimeline, untilMs: number, stepMs = 16): AlarmState {
  let state = initialAlarmState();
  for (let time = 0; time <= untilMs; time += stepMs) state = updateAlarms(state, evaluateAlarmConditions(readingsAt(timeline, time), timeline.scenario.alarmLimits), time);
  return updateAlarms(state, evaluateAlarmConditions(readingsAt(timeline, untilMs), timeline.scenario.alarmLimits), untilMs);
}
