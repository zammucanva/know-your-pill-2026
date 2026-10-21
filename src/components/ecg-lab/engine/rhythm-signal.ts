import { limbLeads, morphology } from './signal';
import type { Lead, LeadSignals, Sample } from './types';

/**
 * Beat-schedule synthesizer. It extends the deterministic engine in `signal.ts` for rhythms whose
 * beats are not evenly spaced (irregular, dropped or independent atrial/ventricular activity). It
 * shares that engine's per-lead morphology table, sample timing (`index * 1000 / rate`) and limb-lead
 * equations, and is a pure function of absolute time. The waveforms are simplified templates for
 * teaching: they are not validated physiology.
 */
export type QrsEvent = {
  kind: 'qrs';
  /** Absolute time of the R-wave peak in milliseconds. */
  timeMs: number;
  /** Wide (ventricular-origin style) complex with discordant T wave. */
  wide?: boolean;
  ampScale?: number;
  tScale?: number;
};
export type PWaveEvent = { kind: 'p'; timeMs: number; ampScale?: number };
export type PaceSpikeEvent = { kind: 'pace'; timeMs: number };
export type RhythmEvent = QrsEvent | PWaveEvent | PaceSpikeEvent;

export type RhythmSchedule = {
  events: RhythmEvent[];
  /** Continuous sawtooth atrial activity (flutter waves). */
  flutter?: { periodMs: number; amplitudeMv: number; offsetMs?: number };
  /** Continuous irregular fibrillatory baseline (no organised P waves). */
  fibrillation?: { amplitudeMv: number; seed: number };
  /** Disorganised ventricular activity with no discrete QRS complexes. */
  chaos?: { amplitudeMv: number };
};

const WIDE_STRETCH = 2.6;
/** Waves reach at most this far before/after their event time. */
const REACH_BEFORE_MS = 1000;
const REACH_AFTER_MS = 400;

const gauss = (deltaMs: number, widthMs2: number) => Math.exp(-(deltaMs * deltaMs) / widthMs2);

const sortedCache = new WeakMap<RhythmSchedule, RhythmEvent[]>();

function sortedEvents(schedule: RhythmSchedule): RhythmEvent[] {
  const cached = sortedCache.get(schedule);
  if (cached) return cached;
  for (const event of schedule.events) {
    if (!Number.isFinite(event.timeMs)) throw new RangeError('Rhythm events require finite times');
  }
  const sorted = [...schedule.events].sort((a, b) => a.timeMs - b.timeMs);
  sortedCache.set(schedule, sorted);
  return sorted;
}

function firstIndexAtOrAfter(events: RhythmEvent[], timeMs: number): number {
  let low = 0;
  let high = events.length;
  while (low < high) {
    const middle = (low + high) >>> 1;
    if (events[middle].timeMs < timeMs) low = middle + 1;
    else high = middle;
  }
  return low;
}

function noiseAt(sampleIndex: number, seed: number): number {
  let value = (seed ^ Math.imul(sampleIndex, 0x9e3779b1)) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x85ebca6b) >>> 0;
  value = Math.imul(value ^ (value >>> 13), 0xc2b2ae35) >>> 0;
  value = (value ^ (value >>> 16)) >>> 0;
  return value / 0xffffffff - 0.5;
}

function qrsContribution(event: QrsEvent, deltaMs: number, lead: Lead): number {
  const profile = morphology[lead];
  const scale = event.ampScale ?? 1;
  const tScale = event.tScale ?? 1;
  if (!event.wide) {
    const q = -0.12 * profile.q * gauss(deltaMs + 12, 115.2);
    const r = profile.r * gauss(deltaMs, 76.8);
    const s = -0.22 * profile.s * gauss(deltaMs - 20, 128);
    const t = 0.30 * profile.t * tScale * gauss(deltaMs - 200, 7680);
    return scale * (q + r + s) + t * scale;
  }
  const k = WIDE_STRETCH;
  const main = Math.max(profile.r, 0.6) * 1.1 * gauss(deltaMs, 76.8 * k * k);
  const trailing = -0.3 * Math.max(profile.s, 0.5) * gauss(deltaMs - 20 * k, 128 * k * k);
  const discordantT = -0.25 * Math.max(profile.t, 0.6) * tScale * gauss(deltaMs - 280, 7680 * 1.6);
  return scale * (main + trailing + discordantT);
}

function sampleVoltage(schedule: RhythmSchedule, events: RhythmEvent[], lead: Lead, sampleIndex: number, sampleRateHz: number): Sample {
  const timeMs = sampleIndex * 1000 / sampleRateHz;
  const profile = morphology[lead];
  let voltage = 0;

  for (let index = firstIndexAtOrAfter(events, timeMs - REACH_AFTER_MS); index < events.length; index += 1) {
    const event = events[index];
    if (event.timeMs - timeMs > REACH_BEFORE_MS) break;
    const delta = timeMs - event.timeMs;
    if (event.kind === 'p') voltage += 0.12 * profile.p * (event.ampScale ?? 1) * gauss(delta, 1152);
    else if (event.kind === 'qrs') voltage += qrsContribution(event, delta, lead);
    else voltage += 0.9 * gauss(delta, 6);
  }

  const seconds = timeMs / 1000;
  if (schedule.flutter) {
    const { periodMs, amplitudeMv, offsetMs = 0 } = schedule.flutter;
    const phase = ((((timeMs + offsetMs) % periodMs) + periodMs) % periodMs) / periodMs;
    const saw = phase < 0.85 ? 0.5 - phase / 0.85 : -0.5 + (phase - 0.85) / 0.15;
    voltage += amplitudeMv * profile.p * saw;
  }
  if (schedule.fibrillation) {
    const { amplitudeMv, seed } = schedule.fibrillation;
    const waves = 0.55 * Math.sin(2 * Math.PI * 6.3 * seconds) + 0.35 * Math.sin(2 * Math.PI * 8.9 * seconds + 1.3) + 0.25 * Math.sin(2 * Math.PI * 11.2 * seconds + 2.1);
    voltage += amplitudeMv * profile.p * waves + noiseAt(sampleIndex, seed) * 0.05;
  }
  if (schedule.chaos) {
    const envelope = 0.55 + 0.45 * Math.sin(2 * Math.PI * 0.31 * seconds + 0.4);
    const phase = 2 * Math.PI * 4.6 * seconds + 1.7 * Math.sin(2 * Math.PI * 0.23 * seconds);
    const wave = Math.sin(phase) + 0.5 * Math.sin(2.3 * phase + 0.8);
    voltage += schedule.chaos.amplitudeMv * Math.max(profile.r, 0.5) * envelope * wave;
  }
  return { timeMs, voltageMv: voltage };
}

function assertWindow(startMs: number, endMs: number, sampleRateHz: number): { startIndex: number; count: number } {
  if (!Number.isFinite(sampleRateHz) || sampleRateHz <= 0) throw new RangeError('Sample rate must be a positive finite number');
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) throw new RangeError('Signal window must use finite, ordered time bounds');
  const startIndex = Math.ceil(startMs * sampleRateHz / 1000 - 1e-9);
  const endIndex = Math.floor(endMs * sampleRateHz / 1000 + 1e-9);
  return { startIndex, count: Math.max(0, endIndex - startIndex + 1) };
}

function leadSamples(schedule: RhythmSchedule, lead: 'I' | 'II' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6', startIndex: number, count: number, sampleRateHz: number): Sample[] {
  const events = sortedEvents(schedule);
  return Array.from({ length: count }, (_, offset) => sampleVoltage(schedule, events, lead, startIndex + offset, sampleRateHz));
}

/** All twelve leads for a window, on one shared timeline (limb leads derived from I and II). */
export function generateRhythmWindow(schedule: RhythmSchedule, startMs: number, endMs: number, sampleRateHz = 250): LeadSignals {
  const { startIndex, count } = assertWindow(startMs, endMs, sampleRateHz);
  const i = leadSamples(schedule, 'I', startIndex, count, sampleRateHz);
  const ii = leadSamples(schedule, 'II', startIndex, count, sampleRateHz);
  const result: Partial<LeadSignals> = { I: i, II: ii, ...limbLeads(i, ii) };
  for (const lead of ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'] as const) result[lead] = leadSamples(schedule, lead, startIndex, count, sampleRateHz);
  return result as LeadSignals;
}

/** One lead for a window; limb-derived leads still use I and II so every view agrees. */
export function generateRhythmLeadSamples(schedule: RhythmSchedule, lead: Lead, startMs: number, endMs: number, sampleRateHz = 250): Sample[] {
  const { startIndex, count } = assertWindow(startMs, endMs, sampleRateHz);
  if (lead === 'I' || lead === 'II' || lead.startsWith('V')) return leadSamples(schedule, lead as 'I' | 'II' | 'V1', startIndex, count, sampleRateHz);
  const limb = limbLeads(leadSamples(schedule, 'I', startIndex, count, sampleRateHz), leadSamples(schedule, 'II', startIndex, count, sampleRateHz));
  return limb[lead as keyof typeof limb];
}
