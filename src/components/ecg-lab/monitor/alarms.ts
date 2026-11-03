import type { AlarmLimits, CriticalLimits } from './scenario';
import type { ScenarioTimeline } from './timeline';
import { readingsAt, type MonitorReadings } from './vitals';

/**
 * Educational alarm model. Conditions come from the current readings and the scenario's configured
 * limits; the state machine records onset, acknowledgement and clearing. Silencing only stops the
 * sound for a while: it never clears an alarm, which clears only when its condition does.
 */
/** 'info' is shown on screen but never sounds; the others sound with distinct burst patterns. */
export type AlarmPriority = 'high' | 'medium' | 'low' | 'info';
export type AlarmKind = 'physiological' | 'technical';

export type AlarmCondition = {
  id: AlarmId;
  kind: AlarmKind;
  priority: AlarmPriority;
  /** Short monitor-style text, also used as the accessible description. */
  message: string;
};

export const alarmIds = ['hr-critical-high', 'hr-critical-low', 'spo2-critical-low', 'hr-high', 'hr-low', 'spo2-low', 'rr-high', 'rr-low', 'sys-high', 'sys-low', 'ecg-lead-off', 'spo2-sensor-off', 'spo2-poor-signal'] as const;
export type AlarmId = (typeof alarmIds)[number];

export const alarmLabels: Record<AlarmId, string> = {
  'hr-critical-high': 'Heart rate above the critical limit',
  'hr-critical-low': 'Heart rate below the critical limit',
  'spo2-critical-low': 'SpO₂ below the critical limit',
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

const priorityRank: Record<AlarmPriority, number> = { high: 3, medium: 2, low: 1, info: 0 };

/**
 * Conditions active for these readings. In this simulation limit violations are medium priority,
 * crossing a scenario's optional critical limit is high priority (and replaces the ordinary alarm
 * for that value), and equipment problems are low priority. Real monitors and local policies
 * assign priorities differently.
 */
export function evaluateAlarmConditions(readings: MonitorReadings, limits: AlarmLimits, critical?: CriticalLimits): AlarmCondition[] {
  const out: AlarmCondition[] = [];
  const physiological = (id: AlarmId, value: number, unit: string, limit: number, direction: '>' | '<', priority: AlarmPriority = 'medium') =>
    out.push({ id, kind: 'physiological', priority, message: `${alarmLabels[id]}: ${value} ${unit} (${priority === 'high' ? 'critical' : 'limit'} ${direction === '>' ? 'high' : 'low'} ${limit})` });

  const hr = readings.heartRate.value;
  if (hr !== null) {
    if (critical && hr > critical.heartRateHigh) physiological('hr-critical-high', hr, '/min', critical.heartRateHigh, '>', 'high');
    else if (critical && hr < critical.heartRateLow) physiological('hr-critical-low', hr, '/min', critical.heartRateLow, '<', 'high');
    else if (hr > limits.heartRate.high) physiological('hr-high', hr, '/min', limits.heartRate.high, '>');
    else if (hr < limits.heartRate.low) physiological('hr-low', hr, '/min', limits.heartRate.low, '<');
  }
  const spo2 = readings.spo2.value;
  if (spo2 !== null && readings.spo2.status === 'ok') {
    if (critical && spo2 < critical.spo2Low) physiological('spo2-critical-low', spo2, '%', critical.spo2Low, '<', 'high');
    else if (spo2 < limits.spo2.low) physiological('spo2-low', spo2, '%', limits.spo2.low, '<');
  }
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
  if (state.silencedUntilMs !== null && nowMs < state.silencedUntilMs) return null;
  // Active alarms are sorted by priority, so the first one that sounds is the most urgent.
  return state.active.find(alarm => alarm.priority !== 'info') ?? null;
}

/**
 * Alarm state reached by playing the timeline from 0 to `untilMs` in fixed steps, with no
 * acknowledgements. Used to restore a saved run: onsets and clears land within one step of where
 * live playback (one evaluation per animation frame) puts them.
 */
export function alarmStateAt(timeline: ScenarioTimeline, untilMs: number, stepMs = 16): AlarmState {
  let state = initialAlarmState();
  const { alarmLimits, criticalLimits } = timeline.scenario;
  for (let time = 0; time <= untilMs; time += stepMs) state = updateAlarms(state, evaluateAlarmConditions(readingsAt(timeline, time), alarmLimits, criticalLimits), time);
  return updateAlarms(state, evaluateAlarmConditions(readingsAt(timeline, untilMs), alarmLimits, criticalLimits), untilMs);
}
