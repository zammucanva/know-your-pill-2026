export type Lead = 'I' | 'II' | 'III' | 'aVR' | 'aVL' | 'aVF' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';
export type PaperSpeed = 12.5 | 25 | 50;
export type Gain = 5 | 10 | 20;
export type RhythmPreset = 'sinus' | 'brady' | 'tachy' | 'afib';
export type Sample = { timeMs: number; voltageMv: number };
export type Signal = { lead: Lead; samples: Sample[]; sampleRateHz: number; durationMs: number; provenance: 'synthetic'; preset: RhythmPreset };
export type MachineConfig = { lead: Lead; paperSpeed: PaperSpeed; gain: Gain; showGrid: boolean; preset: RhythmPreset };
export type LeadSignals = Record<Lead, Sample[]>;

