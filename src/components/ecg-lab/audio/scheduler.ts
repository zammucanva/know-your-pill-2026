import type { ClockSnapshot } from '../engine/clock';
import { eventsBetween } from '../monitor/timeline';
import type { AlarmPriority } from '../monitor/alarms';

/**
 * Pure audio planning. It converts clock snapshots plus the simulation's own event times into tones
 * scheduled a short way ahead on the audio clock. It never invents beat timing: every tone is an
 * event time from the same list that draws the waveform. Web Audio is not touched here, so the
 * timing rules are unit-testable.
 */
export type PlannedTone = { kind: 'beat'; simTimeMs: number; atAudioS: number; frequencyHz: number };
export type PlannedAlarm = { priority: AlarmPriority; atAudioS: number };
export type SchedulerActions = { cancelPending: boolean; tones: PlannedTone[]; alarm: PlannedAlarm | null };

export type SchedulerInput = {
  snapshot: ClockSnapshot;
  /** Audio clock now, in seconds (AudioContext.currentTime). */
  audioNowS: number;
  /** Sorted event times in simulated milliseconds (QRS or pleth pulse peaks). */
  eventTimesMs: readonly number[];
  /** Tone pitch for an event, or null to stay silent for it (for example no SpO2 value yet). */
  frequencyAt: (simTimeMs: number) => number | null;
  /** The alarm that should sound now, already filtered for acknowledgement. */
  alarm: { id: string; priority: AlarmPriority } | null;
  /**
   * Delay between scheduling a sound and hearing it, as reported by the browser. Tones start this
   * much earlier so they are heard when the beat reaches the trace head. Defaults to 0.
   */
  outputLatencyS?: number;
  /** End of the simulated timeline: nothing is scheduled for events after it. */
  endMs?: number;
};

/** How far ahead tones are committed to the audio clock. Short, so pause and seek stay responsive. */
export const LOOKAHEAD_MS = 150;
/** A forward jump larger than this between snapshots is treated as a seek, not as playback. */
export const MAX_CONTINUOUS_STEP_MS = 400;
/** A tone more than this late is dropped instead of being played out of time. */
export const LATE_TOLERANCE_S = 0.02;
/**
 * If the gap between the audio clock and simulated time moves by more than this between updates
 * (a discarded frame stall, a throttled tab), committed tones are cancelled and re-anchored.
 */
export const DRIFT_TOLERANCE_S = 0.03;
/** Output latency above this is treated as this; very large reported values are not trusted. */
export const MAX_LATENCY_COMPENSATION_S = 0.3;
/** Repeat interval of each alarm burst, in simulated time. Simulation settings, not a standard. */
export const ALARM_REPEAT_MS: Record<AlarmPriority, number> = { high: 5_000, medium: 8_000, low: 16_000 };

const none = (): SchedulerActions => ({ cancelPending: false, tones: [], alarm: null });

export class ToneScheduler {
  private scheduledUntilMs: number | null = null;
  private lastElapsedMs: number | null = null;
  private nextAlarmMs: number | null = null;
  private alarmKey: string | null = null;
  private lastOffsetS: number | null = null;
  private reanchors = 0;

  /** Forget everything scheduled (scenario reset or audio re-enabled). */
  reset(): void {
    this.scheduledUntilMs = null;
    this.lastElapsedMs = null;
    this.nextAlarmMs = null;
    this.alarmKey = null;
    this.lastOffsetS = null;
  }

  /** How many times drift between the two clocks forced a re-anchor; for diagnostics and tests. */
  reanchorCount(): number { return this.reanchors; }

  private dropCommitted(actions: SchedulerActions): void {
    if (this.scheduledUntilMs !== null) actions.cancelPending = true;
    this.scheduledUntilMs = null;
    this.nextAlarmMs = null;
    this.alarmKey = null;
  }

  update(input: SchedulerInput): SchedulerActions {
    const { snapshot, audioNowS } = input;
    const now = snapshot.elapsedMs;
    const actions = none();

    if (!snapshot.isPlaying || snapshot.isSuspended) {
      this.dropCommitted(actions);
      this.lastElapsedMs = now;
      this.lastOffsetS = null;
      return actions;
    }

    const last = this.lastElapsedMs;
    const offsetS = audioNowS - now / 1000;
    if (last !== null && (now < last || now - last > MAX_CONTINUOUS_STEP_MS)) {
      // Seek, reset or a long jump: drop what was committed for the old position.
      this.dropCommitted(actions);
    } else if (this.lastOffsetS !== null && Math.abs(offsetS - this.lastOffsetS) > DRIFT_TOLERANCE_S) {
      // The two clocks stopped moving together (for example a discarded frame stall): re-anchor.
      this.dropCommitted(actions);
      this.reanchors += 1;
    }
    const establishing = this.lastOffsetS === null;
    this.lastElapsedMs = now;
    this.lastOffsetS = offsetS;
    if (establishing) {
      // First update after a start, resume or seek: the simulated clock does not advance on its
      // first animation frame while the audio clock does, so the mapping between them is only
      // trusted from the next update. Nothing is lost: scheduling resumes from this time.
      this.scheduledUntilMs = now;
      return actions;
    }

    const latencyS = Math.min(MAX_LATENCY_COMPENSATION_S, Math.max(0, input.outputLatencyS ?? 0));
    const from = this.scheduledUntilMs ?? now;
    // Look further ahead by the latency so compensated tones are still committed in time.
    const to = Math.min(now + LOOKAHEAD_MS + latencyS * 1000, input.endMs ?? Number.POSITIVE_INFINITY);
    for (const simTimeMs of eventsBetween(input.eventTimesMs, from, to)) {
      const atAudioS = audioNowS + (simTimeMs - now) / 1000 - latencyS;
      if (atAudioS < audioNowS - LATE_TOLERANCE_S) continue;
      const frequencyHz = input.frequencyAt(simTimeMs);
      if (frequencyHz === null) continue;
      actions.tones.push({ kind: 'beat', simTimeMs, atAudioS: Math.max(atAudioS, audioNowS), frequencyHz });
    }
    this.scheduledUntilMs = to;

    const key = input.alarm ? `${input.alarm.id}:${input.alarm.priority}` : null;
    if (key === null) {
      this.nextAlarmMs = null;
      this.alarmKey = null;
    } else {
      if (key !== this.alarmKey || this.nextAlarmMs === null) this.nextAlarmMs = now;
      this.alarmKey = key;
      if (this.nextAlarmMs <= to) {
        actions.alarm = { priority: input.alarm!.priority, atAudioS: audioNowS + Math.max(0, (this.nextAlarmMs - now) / 1000 - latencyS) };
        this.nextAlarmMs += ALARM_REPEAT_MS[input.alarm!.priority];
      }
    }
    return actions;
  }
}

/** Fixed educational heartbeat tone. */
export const BEAT_TONE_HZ = 880;

/**
 * Optional variable pitch for pulse-oximetry tones: one semitone lower per SpO2 point below 100.
 * Many oximeters lower the pitch as saturation falls, but the exact mapping differs between devices;
 * this mapping is a simulation setting only.
 */
export function spo2PitchHz(spo2Percent: number, topHz = 880): number {
  const clamped = Math.max(50, Math.min(100, spo2Percent));
  return topHz * 2 ** (-(100 - clamped) / 12);
}

export type AlarmPulse = { offsetS: number; durationS: number; frequencyHz: number };

/**
 * Burst shapes for each priority. The idea that higher priority means more pulses per burst is
 * informed by common monitor practice; these exact timings and pitches are this simulator's own
 * and are not claimed to comply with any device standard.
 */
export function alarmBurst(priority: AlarmPriority): AlarmPulse[] {
  const pulse = (offsetS: number, frequencyHz: number): AlarmPulse => ({ offsetS, durationS: 0.15, frequencyHz });
  if (priority === 'high') return [0, 0.25, 0.5, 1.0, 1.25, 2.0, 2.25, 2.5, 3.0, 3.25].map((offset, index) => pulse(offset, index % 2 ? 990 : 784));
  if (priority === 'medium') return [pulse(0, 660), pulse(0.25, 660), pulse(0.5, 660)];
  return [pulse(0, 523), pulse(0.3, 523)];
}
