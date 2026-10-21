import type { Lead, LeadSignals, RhythmPreset, Sample, Signal } from './types';

const LEADS: Lead[] = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
export const allLeads = (): Lead[] => [...LEADS];
export type Morphology = { p: number; q: number; r: number; s: number; t: number; st: number };
/** Per-lead wave scale factors shared by the preset generator and the beat-schedule rhythm generator. */
export const morphology: Record<Lead, Morphology> = {
  I: { p: 1, q: 1, r: 0.8, s: 0.8, t: 0.9, st: 0 }, II: { p: 1.1, q: 1, r: 1, s: 1, t: 1, st: 0 },
  V1: { p: 0.7, q: 0.7, r: 0.35, s: 1.55, t: -0.55, st: 0 }, V2: { p: 0.8, q: 0.8, r: 0.65, s: 1.25, t: 0.1, st: 0 },
  V3: { p: 0.9, q: 0.9, r: 0.95, s: 0.85, t: 0.55, st: 0 }, V4: { p: 1, q: 1, r: 1.15, s: 0.55, t: 0.8, st: 0 },
  V5: { p: 1, q: 1, r: 1.2, s: 0.35, t: 0.9, st: 0 }, V6: { p: 1, q: 1, r: 1.1, s: 0.3, t: 0.85, st: 0 },
  III: { p: 0, q: 0, r: 0, s: 0, t: 0, st: 0 }, aVR: { p: 0, q: 0, r: 0, s: 0, t: 0, st: 0 }, aVL: { p: 0, q: 0, r: 0, s: 0, t: 0, st: 0 }, aVF: { p: 0, q: 0, r: 0, s: 0, t: 0, st: 0 },
};
const rrFor = (preset: RhythmPreset) => preset === 'brady' ? 1200 : preset === 'tachy' ? 600 : 800;
/** Cardiac-cycle phase of the synthetic R-wave maximum. Event timing for exercises derives from this same constant. */
export const R_PEAK_PHASE = 0.30;
/** The synthetic beat-to-beat interval for a preset, in milliseconds. */
export const beatIntervalMs = rrFor;

/** Absolute times of the R-wave events produced by the signal model in [startMs, endMs]. Shared by every lead. */
export function qrsEventTimesMs(preset: RhythmPreset, startMs: number, endMs: number): number[] {
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) throw new RangeError('Event window must use finite, ordered time bounds');
  const rr = rrFor(preset);
  const first = Math.max(0, Math.ceil((startMs - R_PEAK_PHASE * rr) / rr));
  const times: number[] = [];
  for (let beat = first; beat * rr + R_PEAK_PHASE * rr <= endMs; beat += 1) times.push(beat * rr + R_PEAK_PHASE * rr);
  return times;
}

/** Stateless noise keeps an absolute sample identical across rolling-window renders. */
function noiseAt(sampleIndex: number, seed: number, preset: RhythmPreset): number {
  if (preset !== 'afib') return 0;
  let value = (seed ^ Math.imul(sampleIndex, 0x9e3779b1)) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x85ebca6b) >>> 0;
  value = Math.imul(value ^ (value >>> 13), 0xc2b2ae35) >>> 0;
  value = (value ^ (value >>> 16)) >>> 0;
  return (value / 0xffffffff - 0.5) * 0.08;
}

function sampleAt(preset: RhythmPreset, profile: Morphology, sampleIndex: number, seed: number, sampleRateHz: number): Sample {
    const timeMs = sampleIndex * 1000 / sampleRateHz;
    const rr = rrFor(preset);
    const phase = (((timeMs % rr) + rr) % rr) / rr;
    const p = 0.12 * profile.p * Math.exp(-((phase - 0.18) ** 2) / 0.0018);
    const q = -0.12 * profile.q * Math.exp(-((phase - 0.285) ** 2) / 0.00018);
    const r = profile.r * Math.exp(-((phase - R_PEAK_PHASE) ** 2) / 0.00012);
    const s = -0.22 * profile.s * Math.exp(-((phase - 0.325) ** 2) / 0.0002);
    const st = profile.st * (phase > 0.34 && phase < 0.44 ? 1 : 0);
    const t = 0.30 * profile.t * Math.exp(-((phase - 0.55) ** 2) / 0.012);
    return { timeMs, voltageMv: p + q + r + s + st + t + noiseAt(sampleIndex, seed, preset) };
}

function eventSamples(preset: RhythmPreset, profile: Morphology, startIndex: number, count: number, seed: number, sampleRateHz: number): Sample[] {
  return Array.from({ length: count }, (_, offset) => sampleAt(preset, profile, startIndex + offset, seed, sampleRateHz));
}
export function limbLeads(i: Sample[], ii: Sample[]): Pick<LeadSignals, 'III' | 'aVR' | 'aVL' | 'aVF'> {
  if (i.length !== ii.length) throw new Error('Limb leads must have equal sample lengths');
  if (i.some((sample, index) => sample.timeMs !== ii[index].timeMs)) throw new Error('Limb leads must share identical sample timestamps');
  return { III: i.map((s, n) => ({ timeMs: s.timeMs, voltageMv: ii[n].voltageMv - s.voltageMv })), aVR: i.map((s, n) => ({ timeMs: s.timeMs, voltageMv: -(s.voltageMv + ii[n].voltageMv) / 2 })), aVL: i.map((s, n) => ({ timeMs: s.timeMs, voltageMv: s.voltageMv - ii[n].voltageMv / 2 })), aVF: i.map((s, n) => ({ timeMs: s.timeMs, voltageMv: ii[n].voltageMv - s.voltageMv / 2 })) };
}

function assertSampleRate(sampleRateHz: number): void {
  if (!Number.isFinite(sampleRateHz) || sampleRateHz <= 0) throw new RangeError('Sample rate must be a positive finite number');
}

function createSignalsForRange(preset: RhythmPreset, startIndex: number, count: number, seed: number, sampleRateHz: number): LeadSignals {
  const i = eventSamples(preset, morphology.I, startIndex, count, seed, sampleRateHz);
  const ii = eventSamples(preset, morphology.II, startIndex, count, seed, sampleRateHz);
  const derived = limbLeads(i, ii);
  const result: Partial<LeadSignals> = { I: i, II: ii, ...derived };
  for (const lead of ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'] as Lead[]) result[lead] = eventSamples(preset, morphology[lead], startIndex, count, seed, sampleRateHz);
  return result as LeadSignals;
}

/**
 * Builds a bounded rolling window from absolute simulation time. Negative time is
 * valid and is used only as past history at the right-edge startup; no future
 * samples are generated. Each lead uses the same sample indices and event clock.
 */
export function generateLeadWindow(preset: RhythmPreset, startMs: number, endMs: number, seed = 7, sampleRateHz = 250): LeadSignals {
  assertSampleRate(sampleRateHz);
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) {
    throw new RangeError('Signal window must use finite, ordered time bounds');
  }
  const startIndex = Math.ceil(startMs * sampleRateHz / 1000 - 1e-9);
  const endIndex = Math.floor(endMs * sampleRateHz / 1000 + 1e-9);
  const count = Math.max(0, endIndex - startIndex + 1);
  return createSignalsForRange(preset, startIndex, count, seed, sampleRateHz);
}

/** Generate just the requested lead for a single-lead viewport. Limb derivations still use I and II. */
export function generateLeadSamples(preset: RhythmPreset, lead: Lead, startMs: number, endMs: number, seed = 7, sampleRateHz = 250): Sample[] {
  assertSampleRate(sampleRateHz);
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) {
    throw new RangeError('Signal window must use finite, ordered time bounds');
  }
  const startIndex = Math.ceil(startMs * sampleRateHz / 1000 - 1e-9);
  const endIndex = Math.floor(endMs * sampleRateHz / 1000 + 1e-9);
  const count = Math.max(0, endIndex - startIndex + 1);
  if (lead === 'I' || lead === 'II' || lead.startsWith('V')) {
    return eventSamples(preset, morphology[lead], startIndex, count, seed, sampleRateHz);
  }
  const limb = limbLeads(
    eventSamples(preset, morphology.I, startIndex, count, seed, sampleRateHz),
    eventSamples(preset, morphology.II, startIndex, count, seed, sampleRateHz),
  );
  return limb[lead as keyof typeof limb];
}

export function generateLeadSignals(preset: RhythmPreset, seed = 7, durationMs = 10000, sampleRateHz = 250): LeadSignals {
  assertSampleRate(sampleRateHz);
  if (!Number.isFinite(durationMs) || durationMs < 0) throw new RangeError('Recording duration must be finite and non-negative');
  const count = Math.ceil(durationMs * sampleRateHz / 1000);
  return createSignalsForRange(preset, 0, count, seed, sampleRateHz);
}
export function generateSignal(preset: RhythmPreset, lead: Lead, seed = 7): Signal {
  const all = generateLeadSignals(preset, seed); return { lead, samples: all[lead].map(sample => ({ ...sample })), sampleRateHz: 250, durationMs: 10000, provenance: 'synthetic', preset };
}
export function baseLeadSignal(preset: RhythmPreset, seed = 7, durationMs = 10000, sampleRateHz = 250): Sample[] { return generateLeadSignals(preset, seed, durationMs, sampleRateHz).II; }
export function deriveLeads(base: Sample[], lead: Lead): Sample[] { const scale: Record<Lead, number> = { I: 0.8, II: 1, III: 0.2, aVR: -0.9, aVL: 0.3, aVF: 0.7, V1: -0.45, V2: 0.05, V3: 0.45, V4: 0.75, V5: 0.9, V6: 0.85 }; return base.map(sample => ({ ...sample, voltageMv: sample.voltageMv * scale[lead] })); }
