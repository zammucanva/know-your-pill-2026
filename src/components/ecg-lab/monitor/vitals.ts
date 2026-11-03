import { phaseAt, PLETH_PULSE_DELAY_MS, upperBound, type PhaseSpan, type ScenarioTimeline } from './timeline';

/**
 * Monitor readings at one simulated time. Every number names the channel it comes from and has its
 * own validity rule; none is copied from another channel. Pure functions of the timeline and the
 * time, so pause, seek and replay give the same readings.
 */
export type ChannelStatus = 'ok' | 'poor' | 'searching' | 'off' | 'lead-off' | 'absent' | 'pending';

export type NumericReading = { value: number | null; status: ChannelStatus };
export type NibpReading = {
  status: 'ok' | 'pending' | 'absent';
  systolic: number | null;
  diastolic: number | null;
  /** Calculated as diastolic + (systolic - diastolic) / 3. The simulated cuff does not measure it. */
  meanCalculated: number | null;
  measuredAtMs: number | null;
};

export type MonitorReadings = {
  timeMs: number;
  phaseId: string;
  /** From R-R intervals of the ECG channel. */
  heartRate: NumericReading;
  /** From the pulse-oximetry channel. */
  spo2: NumericReading;
  /** From pulse-oximetry pulse intervals, independently of the ECG. */
  pulseRate: NumericReading;
  respiratoryRate: NumericReading;
  nibp: NibpReading;
  temperatureC: NumericReading;
};

/** Beats averaged for a displayed rate, and how long without a beat before the rate is withdrawn. */
export const RATE_AVERAGE_INTERVALS = 4;
export const RATE_TIMEOUT_MS = 5_000;
/** The simulated SpO2 display moves toward a new value by one percentage point per this many ms. */
export const SPO2_MS_PER_POINT = 2_000;
/** First automatic cuff measurement after the scenario starts. */
export const NIBP_FIRST_MS = 5_000;

/**
 * Average rate from the last few intervals in a sorted event list, or null when it cannot be
 * counted (fewer than RATE_AVERAGE_INTERVALS intervals since monitoring started). Only events since monitoring started count: lead-in history drawn before time 0 is not
 * something the monitor could have measured.
 */
export function rateFromEvents(sortedTimesMs: readonly number[], timeMs: number, monitoringStartMs = 0): number | null {
  const end = upperBound(sortedTimesMs, timeMs);
  const firstCounted = upperBound(sortedTimesMs, monitoringStartMs - 1e-9);
  // No number until a full averaging window has been counted: one short first interval (for
  // example in an irregular rhythm) must not produce a spurious reading or alarm.
  if (end - firstCounted < RATE_AVERAGE_INTERVALS + 1) return null;
  const last = sortedTimesMs[end - 1];
  if (timeMs - last > RATE_TIMEOUT_MS) return null;
  const start = Math.max(firstCounted, end - 1 - RATE_AVERAGE_INTERVALS);
  const span = last - sortedTimesMs[start];
  const intervals = end - 1 - start;
  if (intervals < 1 || span <= 0) return null;
  return Math.round((60_000 * intervals) / span);
}

/**
 * Displayed SpO2 with a simple averaging lag: between two segments with a good signal the number
 * moves toward the new value one point at a time instead of jumping. A poor-signal value (artefact)
 * and the first good value after it are shown directly. Null while no pulsatile signal is available.
 */
export function displayedSpo2(phases: readonly PhaseSpan[], timeMs: number): number | null {
  let value: number | null = null;
  let previousQuality: string | null = null;
  for (const span of phases) {
    if (span.startMs > timeMs) break;
    const target = span.phase.spo2 && span.phase.spo2.quality !== 'off' && span.pulsatile ? span.phase.spo2.percent : null;
    const quality = span.phase.spo2?.quality ?? null;
    const lagged = quality === 'good' && previousQuality === 'good';
    previousQuality = target === null ? null : quality;
    if (target === null || value === null || !lagged) { value = target; continue; }
    // `value` is what was displayed when the previous phase ended.
    const steps = Math.floor((Math.min(timeMs, span.endMs) - span.startMs) / SPO2_MS_PER_POINT);
    value = value < target ? Math.min(target, value + steps) : Math.max(target, value - steps);
  }
  return value;
}

export function nibpMeasurementTime(intervalMs: number, timeMs: number): number | null {
  if (timeMs < NIBP_FIRST_MS) return null;
  return NIBP_FIRST_MS + Math.floor((timeMs - NIBP_FIRST_MS) / intervalMs) * intervalMs;
}

export function readingsAt(timeline: ScenarioTimeline, timeMs: number): MonitorReadings {
  const span = phaseAt(timeline, timeMs);
  const { phase } = span;

  const heartRate: NumericReading = phase.ecg === 'lead-off'
    ? { value: null, status: 'lead-off' }
    : (() => { const value = rateFromEvents(timeline.ecgDetectedQrsTimesMs, timeMs); return { value, status: value === null ? 'searching' : 'ok' }; })();

  let spo2: NumericReading;
  let pulseRate: NumericReading;
  if (!phase.spo2) {
    spo2 = { value: null, status: 'absent' };
    pulseRate = { value: null, status: 'absent' };
  } else if (phase.spo2.quality === 'off') {
    spo2 = { value: null, status: 'off' };
    pulseRate = { value: null, status: 'off' };
  } else {
    const rate = rateFromEvents(timeline.plethPulseTimesMs, timeMs);
    const value = rate === null ? null : displayedSpo2(timeline.phases, timeMs);
    const status: ChannelStatus = rate === null ? 'searching' : phase.spo2.quality === 'poor' ? 'poor' : 'ok';
    spo2 = { value, status };
    pulseRate = { value: rate, status };
  }

  const respiratoryRate: NumericReading = phase.respiratoryRatePerMin === null
    ? { value: null, status: 'absent' }
    : { value: phase.respiratoryRatePerMin, status: 'ok' };

  const measuredAtMs = nibpMeasurementTime(timeline.scenario.nibpIntervalMs, timeMs);
  let nibp: NibpReading;
  if (measuredAtMs === null) nibp = { status: 'pending', systolic: null, diastolic: null, meanCalculated: null, measuredAtMs: null };
  else {
    const cuff = phaseAt(timeline, measuredAtMs).phase.nibp;
    nibp = cuff
      ? { status: 'ok', systolic: cuff.systolic, diastolic: cuff.diastolic, meanCalculated: Math.round(cuff.diastolic + (cuff.systolic - cuff.diastolic) / 3), measuredAtMs }
      : { status: 'absent', systolic: null, diastolic: null, meanCalculated: null, measuredAtMs };
  }

  const temperatureC: NumericReading = phase.temperatureC === null ? { value: null, status: 'absent' } : { value: phase.temperatureC, status: 'ok' };
  return { timeMs, phaseId: phase.id, heartRate, spo2, pulseRate, respiratoryRate, nibp, temperatureC };
}

export type WaveSample = { timeMs: number; value: number };

function hashNoise(index: number, seed: number): number {
  let value = (seed ^ Math.imul(index, 0x9e3779b1)) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x85ebca6b) >>> 0;
  value = Math.imul(value ^ (value >>> 13), 0xc2b2ae35) >>> 0;
  return ((value ^ (value >>> 16)) >>> 0) / 0xffffffff - 0.5;
}

/** Simplified pulse shape around a peak: quick upstroke, slower fall, small dicrotic bump. */
function pulseShape(deltaMs: number): number {
  if (deltaMs < 0) return Math.exp(-(deltaMs * deltaMs) / (2 * 70 * 70));
  return Math.exp(-deltaMs / 260) + 0.18 * Math.exp(-((deltaMs - 300) ** 2) / (2 * 45 * 45));
}

export const WAVE_SAMPLE_RATE_HZ = 100;

/** Relative pulse size from the perfusion setting of the phase in which the beat occurred. */
function pulseAmplitude(timeline: ScenarioTimeline, pulseTimeMs: number): number {
  const spo2 = phaseAt(timeline, pulseTimeMs - PLETH_PULSE_DELAY_MS).phase.spo2;
  return spo2?.perfusion === 'low' ? 0.45 : 1;
}

/**
 * Plethysmograph samples (arbitrary units, about 0-1) on [startMs, endMs]. Null when the sensor is
 * absent or off at that time. Poor signal quality adds deterministic artefact.
 */
export function plethWindow(timeline: ScenarioTimeline, startMs: number, endMs: number): (WaveSample | null)[] {
  const out: (WaveSample | null)[] = [];
  const first = Math.ceil(startMs * WAVE_SAMPLE_RATE_HZ / 1000);
  const last = Math.floor(endMs * WAVE_SAMPLE_RATE_HZ / 1000);
  const pulses = timeline.plethPulseTimesMs;
  for (let index = first; index <= last; index += 1) {
    const timeMs = index * 1000 / WAVE_SAMPLE_RATE_HZ;
    const { phase } = phaseAt(timeline, timeMs);
    if (!phase.spo2 || phase.spo2.quality === 'off') { out.push(null); continue; }
    // The envelope of overlapping pulses, not their sum: at fast rates the trace gets smaller
    // pulses that do not return to baseline, instead of being clipped flat. Each pulse keeps the
    // perfusion of the beat that produced it, so a phase change never cuts a pulse in half.
    let value = 0;
    for (let pulse = Math.max(0, upperBound(pulses, timeMs - 1200) - 1); pulse < pulses.length && pulses[pulse] < timeMs + 400; pulse += 1) {
      value = Math.max(value, pulseShape(timeMs - pulses[pulse]) * pulseAmplitude(timeline, pulses[pulse]));
    }
    if (phase.spo2.quality === 'poor') value += hashNoise(index, 17) * 0.6;
    out.push({ timeMs, value });
  }
  return out;
}

/** Simulated respiration trace from the configured rate; phase continuous across rate changes. */
export function respirationWindow(timeline: ScenarioTimeline, startMs: number, endMs: number): (WaveSample | null)[] {
  const out: (WaveSample | null)[] = [];
  const first = Math.ceil(startMs * WAVE_SAMPLE_RATE_HZ / 1000);
  const last = Math.floor(endMs * WAVE_SAMPLE_RATE_HZ / 1000);
  for (let index = first; index <= last; index += 1) {
    const timeMs = index * 1000 / WAVE_SAMPLE_RATE_HZ;
    const span = phaseAt(timeline, timeMs);
    if (span.phase.respiratoryRatePerMin === null || timeMs < 0) { out.push(timeMs < 0 ? { timeMs, value: 0 } : null); continue; }
    let cycles = 0;
    for (const other of timeline.phases) {
      if (other.startMs >= timeMs) break;
      const until = Math.min(timeMs, other.endMs);
      cycles += ((other.phase.respiratoryRatePerMin ?? 0) / 60_000) * (until - other.startMs);
    }
    out.push({ timeMs, value: Math.sin(2 * Math.PI * cycles) });
  }
  return out;
}
