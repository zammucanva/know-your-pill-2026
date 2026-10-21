import { describe, expect, it } from 'bun:test';
import { calibrationPulseHeightUnits, calibrationPulseWidthUnits, mmToTimeMs, svgUnitsToMm, svgUnitsToTimeMs, timeMsToSvgUnits, timeToMm, voltageMvToSvgUnits } from '@/components/ecg-lab/engine/calibration';
import { beatIntervalMs, generateLeadSamples, qrsEventTimesMs } from '@/components/ecg-lab/engine/signal';
import type { RhythmPreset } from '@/components/ecg-lab/engine/types';
import { publishedLearnLessons } from '@/components/ecg-lab/content/learn/registry';
import type { ProgressStorage } from '@/components/ecg-lab/learn/progress';
import { exerciseDefinitionSchema, exerciseRegistry, getExercise, type ExerciseDefinition } from '@/components/ecg-lab/exercises/definitions';
import { evaluateExercise, nearestBeat } from '@/components/ecg-lab/exercises/evaluate';
import {
  EXERCISE_PROGRESS_STORAGE_KEY,
  emptyExerciseProgress,
  entryFor,
  MAX_SERIALIZED_PROGRESS_CHARS,
  readExerciseProgress,
  recordCheckResult,
  recordReading,
  resetExercise,
  retryExercise,
  writeExerciseProgress,
} from '@/components/ecg-lab/exercises/progress';
import type { ExerciseReading } from '@/components/ecg-lab/exercises/readings';

const exercise = (id: string): ExerciseDefinition => {
  const found = getExercise(id);
  if (!found) throw new Error(`Missing exercise ${id}`);
  return found;
};
const rrExercise = exercise('rr-interval-measurement');
const gainExercise = exercise('gain-measurement-invariance');
const leadExercise = exercise('cross-lead-beat-matching');
const speedExercise = exercise('paper-speed-and-grid');

function reading(overrides: Partial<ExerciseReading> = {}): ExerciseReading {
  const [r0, r1] = qrsEventTimesMs('sinus', 0, 2000);
  return { lead: 'II', paperSpeed: 25, gain: 10, preset: 'sinus', startMs: r0, endMs: r1, ...overrides };
}

function memoryStorage(initial: string | null = null): ProgressStorage & { value: string | null; failWrite: boolean } {
  return {
    value: initial,
    failWrite: false,
    getItem() { return this.value; },
    setItem(_key, value) { if (this.failWrite) throw new Error('full'); this.value = value; },
    removeItem() { this.value = null; },
  };
}

describe('exercise registry', () => {
  it('contains the five exercises, all draft and unreviewed, each with progressive hints, and publishes nothing', () => {
    expect(exerciseRegistry.map(item => item.kind).sort()).toEqual(['cross-lead-beat', 'gain-invariance', 'grid-calibration', 'paper-speed-grid', 'rr-interval']);
    expect(exerciseRegistry.every(item => item.hints.length === 3)).toBe(true);
    expect(exerciseRegistry.every(item => item.publicationStatus === 'draft' && item.reviewStatus === 'unreviewed')).toBe(true);
    expect(new Set(exerciseRegistry.map(item => item.id)).size).toBe(exerciseRegistry.length);
    expect(Object.isFrozen(exerciseRegistry)).toBe(true);
    expect(publishedLearnLessons).toHaveLength(0);
  });

  it('refuses a published, reviewed, duplicate-step or out-of-range definition', () => {
    const base = { ...rrExercise };
    expect(exerciseDefinitionSchema.safeParse({ ...base, publicationStatus: 'published' }).success).toBe(false);
    expect(exerciseDefinitionSchema.safeParse({ ...base, reviewStatus: 'reviewed' }).success).toBe(false);
    expect(exerciseDefinitionSchema.safeParse({ ...base, steps: [base.steps[0], base.steps[0]] }).success).toBe(false);
    expect(exerciseDefinitionSchema.safeParse({ ...base, tolerance: { ...base.tolerance, timeMs: 0 } }).success).toBe(false);
    expect(exerciseDefinitionSchema.safeParse({ ...base, version: 'one' }).success).toBe(false);
    expect(exerciseDefinitionSchema.safeParse({ ...base, extra: true }).success).toBe(false);
  });
});

describe('signal-derived event timing', () => {
  it.each<[RhythmPreset, number, number]>([['sinus', 240, 1040], ['brady', 360, 1560], ['tachy', 180, 780], ['afib', 240, 1040]])(
    'places %s R events at %i ms and %i ms from the model, not from a constant',
    (preset, first, second) => {
      expect(qrsEventTimesMs(preset, 0, 2000).slice(0, 2)).toEqual([first, second]);
      expect(second - first).toBe(beatIntervalMs(preset));
    },
  );

  it('matches the largest lead-II sample of each generated beat', () => {
    for (const preset of ['sinus', 'brady', 'tachy'] as RhythmPreset[]) {
      const rr = beatIntervalMs(preset);
      for (const event of qrsEventTimesMs(preset, 0, 3 * rr)) {
        const samples = generateLeadSamples(preset, 'II', event - 60, event + 60);
        const peak = samples.reduce((best, sample) => sample.voltageMv > best.voltageMv ? sample : best);
        expect(Math.abs(peak.timeMs - event)).toBeLessThanOrEqual(4);
      }
    }
  });

  it('respects window bounds and rejects invalid windows', () => {
    expect(qrsEventTimesMs('sinus', 241, 1039)).toEqual([]);
    expect(qrsEventTimesMs('sinus', 240, 240)).toEqual([240]);
    expect(qrsEventTimesMs('sinus', -5000, 300)).toEqual([240]);
    expect(() => qrsEventTimesMs('sinus', 10, 5)).toThrow(RangeError);
    expect(() => qrsEventTimesMs('sinus', Number.NaN, 5)).toThrow(RangeError);
  });

  it('finds the nearest beat and signed error, and rejects invalid marker times', () => {
    expect(nearestBeat('sinus', 250)).toEqual({ beatIndex: 0, eventTimeMs: 240, errorMs: 10 });
    expect(nearestBeat('sinus', 1000)).toEqual({ beatIndex: 1, eventTimeMs: 1040, errorMs: -40 });
    expect(nearestBeat('brady', 0).eventTimeMs).toBe(360);
    expect(() => nearestBeat('sinus', -1)).toThrow(RangeError);
    expect(() => nearestBeat('sinus', Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});

describe('coordinate-to-time conversion used by exercises', () => {
  it('round-trips time through logical paper distance for every speed', () => {
    for (const speed of [12.5, 25, 50] as const) {
      expect(svgUnitsToTimeMs(timeMsToSvgUnits(800, speed), speed)).toBeCloseTo(800, 9);
      expect(mmToTimeMs(timeToMm(0.8, speed), speed)).toBeCloseTo(800, 9);
    }
    expect(timeToMm(0.8, 25)).toBe(20);
    expect(timeToMm(0.8, 50)).toBe(40);
  });
});

describe('R–R interval exercise', () => {
  it('passes for markers on consecutive R peaks', () => {
    const result = evaluateExercise(rrExercise, [reading()]);
    expect(result.passed).toBe(true);
    expect(result.checks.at(-1)?.message).toContain('75 beats per minute');
  });

  it('applies the documented tolerance at its boundary', () => {
    expect(evaluateExercise(rrExercise, [reading({ startMs: 240 + 40, endMs: 1040 - 40 })]).passed).toBe(true);
    const outside = evaluateExercise(rrExercise, [reading({ startMs: 240 + 41 })]);
    expect(outside.passed).toBe(false);
    expect(outside.checks.find(item => item.id === 'Reading-start')?.message).toContain('41 ms');
  });

  it('honours a configured tolerance', () => {
    const wide = reading({ startMs: 240 + 80 });
    expect(evaluateExercise(rrExercise, [wide]).passed).toBe(false);
    expect(evaluateExercise(rrExercise, [wide], { timeMs: 100 }).passed).toBe(true);
    expect(evaluateExercise(rrExercise, [reading({ startMs: 245 })], { timeMs: 4 }).passed).toBe(false);
  });

  it('rejects non-consecutive peaks, the untouched example points and reversed order', () => {
    const [r0, , r2] = qrsEventTimesMs('sinus', 0, 3000);
    expect(evaluateExercise(rrExercise, [reading({ startMs: r0, endMs: r2 })]).checks.find(item => item.id === 'Reading-consecutive')?.passed).toBe(false);
    expect(evaluateExercise(rrExercise, [reading({ startMs: 0, endMs: 800 })]).passed).toBe(false);
    expect(evaluateExercise(rrExercise, [{ ...reading(), startMs: 1040, endMs: 240 }]).checks[0].id).toBe('valid-readings');
  });

  it.each<RhythmPreset>(['brady', 'tachy'])('moves its targets with the %s preset', preset => {
    const [a, b] = qrsEventTimesMs(preset, 0, 4000);
    expect(evaluateExercise(rrExercise, [reading({ preset, startMs: a, endMs: b })]).passed).toBe(true);
    const [s0, s1] = qrsEventTimesMs('sinus', 0, 4000);
    expect(evaluateExercise(rrExercise, [reading({ preset, startMs: s0, endMs: s1 })]).passed).toBe(false);
  });
});

describe('gain and measurement invariance exercise', () => {
  it('passes when the same interval is measured at two gains and reports scaled amplitude', () => {
    const result = evaluateExercise(gainExercise, [reading({ gain: 5 }), reading({ gain: 20 })]);
    expect(result.passed).toBe(true);
    expect(result.checks.find(item => item.id === 'amplitude-scales')?.message).toMatch(/mm tall at 5 mm\/mV and .* mm at 20 mm\/mV/);
  });

  it('keeps timing identical while drawn amplitude scales exactly with gain', () => {
    const samples = generateLeadSamples('sinus', 'II', 0, 2000);
    for (const gain of [5, 10, 20] as const) {
      const scaled = samples.map(sample => voltageMvToSvgUnits(sample.voltageMv, gain));
      scaled.forEach((units, index) => expect(units).toBeCloseTo(voltageMvToSvgUnits(samples[index].voltageMv, 5) * (gain / 5), 9));
    }
    expect(generateLeadSamples('sinus', 'II', 0, 2000).map(sample => sample.timeMs)).toEqual(samples.map(sample => sample.timeMs));
  });

  it('fails without a gain change, with changed timing, mixed rhythms or wrong peaks', () => {
    expect(evaluateExercise(gainExercise, [reading({ gain: 10 }), reading({ gain: 10 })]).checks.find(item => item.id === 'different-gain')?.passed).toBe(false);
    expect(evaluateExercise(gainExercise, [reading({ gain: 5 }), reading({ gain: 20, endMs: 1040 - 30 })]).checks.find(item => item.id === 'duration-invariant')?.passed).toBe(false);
    expect(evaluateExercise(gainExercise, [reading({ gain: 5 }), reading({ gain: 20, preset: 'tachy' })]).passed).toBe(false);
    expect(evaluateExercise(gainExercise, [reading({ gain: 5, startMs: 0, endMs: 800 }), reading({ gain: 20, startMs: 0, endMs: 800 })]).passed).toBe(false);
    expect(evaluateExercise(gainExercise, [reading({ gain: 5 })]).checks[0].id).toBe('enough-readings');
  });
});

describe('cross-lead beat matching exercise', () => {
  it('passes for the same beat in leads with different shapes, without requiring equal waveforms', () => {
    const result = evaluateExercise(leadExercise, [reading({ lead: 'II', startMs: 240 }), reading({ lead: 'V1', startMs: 240 + 25 })]);
    expect(result.passed).toBe(true);
    const ii = generateLeadSamples('sinus', 'II', 200, 300).map(sample => sample.voltageMv);
    const v1 = generateLeadSamples('sinus', 'V1', 200, 300).map(sample => sample.voltageMv);
    expect(v1).not.toEqual(ii);
  });

  it('fails for different beats, the same lead, or a marker far from the QRS', () => {
    expect(evaluateExercise(leadExercise, [reading({ lead: 'II', startMs: 240 }), reading({ lead: 'V1', startMs: 1040 })]).checks.find(item => item.id === 'same-beat')?.passed).toBe(false);
    expect(evaluateExercise(leadExercise, [reading({ lead: 'II', startMs: 240 }), reading({ lead: 'II', startMs: 240 })]).checks.find(item => item.id === 'different-lead')?.passed).toBe(false);
    expect(evaluateExercise(leadExercise, [reading({ lead: 'II', startMs: 240 }), reading({ lead: 'V3', startMs: 240 + 150 })]).passed).toBe(false);
  });

  it('uses the preset event time rather than a fixed target', () => {
    const [event] = qrsEventTimesMs('brady', 0, 2000);
    expect(evaluateExercise(leadExercise, [reading({ preset: 'brady', lead: 'I', startMs: event }), reading({ preset: 'brady', lead: 'V2', startMs: event + 10 })]).passed).toBe(true);
    expect(evaluateExercise(leadExercise, [reading({ preset: 'brady', lead: 'I', startMs: 240 }), reading({ preset: 'brady', lead: 'V2', startMs: 240 })]).passed).toBe(false);
  });
});

describe('paper speed and grid exercise', () => {
  const at25 = reading({ paperSpeed: 25, answerMm: 20 });
  const at50 = reading({ paperSpeed: 50, answerMm: 40 });

  it('passes when widths follow millimetres = seconds × speed and duration is unchanged', () => {
    expect(evaluateExercise(speedExercise, [at25, at50]).passed).toBe(true);
    expect(evaluateExercise(speedExercise, [reading({ paperSpeed: 12.5, answerMm: 10.5 }), at25]).passed).toBe(true);
  });

  it('fails for a wrong width, missing width, same speed or changed interval', () => {
    expect(evaluateExercise(speedExercise, [at25, { ...at50, answerMm: 20 }]).checks.find(item => item.id === 'width-2')?.passed).toBe(false);
    expect(evaluateExercise(speedExercise, [at25, { ...at50, answerMm: undefined }]).checks.find(item => item.id === 'width-2')?.message).toContain('enter the interval width');
    expect(evaluateExercise(speedExercise, [at25, { ...at25 }]).checks.find(item => item.id === 'different-speed')?.passed).toBe(false);
    expect(evaluateExercise(speedExercise, [at25, { ...at50, endMs: 1040 - 40 }]).checks.find(item => item.id === 'duration-invariant')?.passed).toBe(false);
  });

  it('accepts widths inside and not outside the configurable width tolerance', () => {
    expect(evaluateExercise(speedExercise, [{ ...at25, answerMm: 20.9 }, at50]).passed).toBe(true);
    expect(evaluateExercise(speedExercise, [{ ...at25, answerMm: 21.1 }, at50]).passed).toBe(false);
    expect(evaluateExercise(speedExercise, [{ ...at25, answerMm: 21.1 }, at50], { widthMm: 2 }).passed).toBe(true);
  });
});

describe('invalid evaluation input', () => {
  it('fails safely for malformed readings without throwing', () => {
    for (const bad of [null, 'text', {}, { ...reading(), startMs: Number.NaN }, { ...reading(), gain: 7 }, { ...reading(), lead: 'V9' }, { ...reading(), startMs: -1 }]) {
      const result = evaluateExercise(rrExercise, [bad]);
      expect(result.passed).toBe(false);
      expect(result.checks[0].id).toBe('valid-readings');
    }
    expect(evaluateExercise(rrExercise, []).checks[0].id).toBe('enough-readings');
  });
});

describe('exercise progress persistence', () => {
  it('records readings, caps them at the required count and clears a pass when a reading changes', () => {
    let progress = recordReading(emptyExerciseProgress(), gainExercise, reading({ gain: 5 }));
    progress = recordReading(progress, gainExercise, reading({ gain: 10 }));
    progress = recordCheckResult(progress, gainExercise, true);
    expect(entryFor(progress, gainExercise)).toMatchObject({ attempts: 1, passed: true });
    progress = recordReading(progress, gainExercise, reading({ gain: 20 }));
    const entry = entryFor(progress, gainExercise);
    expect(entry.readings.map(item => item.gain)).toEqual([10, 20]);
    expect(entry.passed).toBe(false);
    expect(() => recordReading(progress, gainExercise, { ...reading(), startMs: Number.NaN })).toThrow();
  });

  it('retry keeps attempts and clears readings, and reset removes all learner work', () => {
    let progress = recordReading(emptyExerciseProgress(), rrExercise, reading());
    progress = recordCheckResult(progress, rrExercise, false);
    progress = retryExercise(progress, rrExercise);
    expect(entryFor(progress, rrExercise)).toMatchObject({ attempts: 1, readings: [] });
    progress = recordReading(progress, rrExercise, reading());
    progress = recordCheckResult(progress, rrExercise, true);
    progress = retryExercise(progress, rrExercise);
    expect(entryFor(progress, rrExercise)).toMatchObject({ attempts: 2, passed: true });
    progress = resetExercise(progress, rrExercise);
    expect(progress.exercises[rrExercise.id]).toBeUndefined();
    expect(entryFor(progress, rrExercise)).toMatchObject({ attempts: 0, passed: false, readings: [] });
  });

  it('round-trips through storage and treats a changed definition version as not started', () => {
    const storage = memoryStorage();
    const progress = recordCheckResult(recordReading(emptyExerciseProgress(), rrExercise, reading()), rrExercise, true);
    expect(writeExerciseProgress(storage, progress)).toBe(true);
    const loaded = readExerciseProgress(storage);
    expect(loaded.progress).toEqual(progress);
    expect(loaded.notice).toBeUndefined();
    const newer: ExerciseDefinition = { ...rrExercise, version: '0.2.0' };
    expect(entryFor(loaded.progress, newer)).toMatchObject({ definitionVersion: '0.2.0', attempts: 0, passed: false, readings: [] });
  });

  it('discards corrupt, incompatible, oversized or structurally invalid records with a notice', () => {
    const cases = [
      '{not json',
      JSON.stringify({ version: 2, exercises: {} }),
      JSON.stringify({ version: 1, exercises: { 'rr-interval-measurement': { definitionVersion: '0.1.0', attempts: -1, passed: false, readings: [] } } }),
      JSON.stringify({ version: 1, exercises: { 'BAD ID': { definitionVersion: '0.1.0', attempts: 0, passed: false, readings: [] } } }),
      JSON.stringify({ version: 1, exercises: { 'rr-interval-measurement': { definitionVersion: '0.1.0', attempts: 0, passed: false, readings: [{ ...reading(), startMs: 99_999_999_999 }] } } }),
      JSON.stringify({ version: 1, exercises: {}, extra: 'x' }),
      'x'.repeat(MAX_SERIALIZED_PROGRESS_CHARS + 1),
    ];
    for (const serialized of cases) {
      const storage = memoryStorage(serialized);
      const loaded = readExerciseProgress(storage);
      expect(loaded.progress).toEqual(emptyExerciseProgress());
      expect(loaded.notice).toMatch(/discarded/);
      expect(storage.value).toBeNull();
    }
  });

  it('handles blocked reads and failed writes without throwing', () => {
    const blocked: ProgressStorage = { getItem: () => { throw new Error('blocked'); }, setItem: () => undefined, removeItem: () => undefined };
    expect(readExerciseProgress(blocked)).toMatchObject({ progress: emptyExerciseProgress(), notice: expect.stringMatching(/unavailable/) });
    const storage = memoryStorage();
    storage.failWrite = true;
    expect(writeExerciseProgress(storage, emptyExerciseProgress())).toBe(false);
    expect(storage.value).toBeNull();
    expect(writeExerciseProgress(memoryStorage(), { version: 1, exercises: { 'BAD ID': { definitionVersion: '0.1.0', attempts: 0, passed: false, readings: [] } } })).toBe(false);
    expect(EXERCISE_PROGRESS_STORAGE_KEY).toContain('exercise-progress');
  });
});

describe('grid and calibration exercise', () => {
  const gridExercise = exercise('grid-and-calibration');
  const at = (gain: 5 | 10 | 20, paperSpeed: 12.5 | 25 | 50, answerMm: number | undefined, answerMm2: number | undefined) =>
    reading({ gain, paperSpeed, answerMm, answerMm2 });

  it('expects the pulse size from the same calibration functions that draw it', () => {
    // 1 mV tall = gain mm; 200 ms wide = 0.2 s x speed mm.
    expect(evaluateExercise(gridExercise, [at(10, 25, 10, 5), at(20, 50, 20, 10)]).passed).toBe(true);
    expect(evaluateExercise(gridExercise, [at(5, 12.5, 5, 2.5), at(10, 25, 10, 5)]).passed).toBe(true);
  });

  it('applies the width tolerance and reports the expected value when wrong', () => {
    expect(evaluateExercise(gridExercise, [at(10, 25, 10.9, 5.9), at(20, 50, 20, 10)]).passed).toBe(true);
    const wrong = evaluateExercise(gridExercise, [at(10, 25, 12, 5), at(20, 50, 20, 10)]);
    expect(wrong.passed).toBe(false);
    expect(wrong.checks.find(item => item.id === 'pulse-height-1')?.message).toContain('10.0 mm');
    expect(evaluateExercise(gridExercise, [at(10, 25, 12, 5), at(20, 50, 20, 10)], { widthMm: 3 }).passed).toBe(true);
  });

  it('needs the settings to change and both lengths to be entered', () => {
    expect(evaluateExercise(gridExercise, [at(10, 25, 10, 5), at(10, 25, 10, 5)]).checks.find(item => item.id === 'settings-changed')?.passed).toBe(false);
    const missing = evaluateExercise(gridExercise, [at(10, 25, undefined, 5), at(20, 50, 20, undefined)]);
    expect(missing.passed).toBe(false);
    expect(missing.checks.find(item => item.id === 'pulse-height-1')?.message).toContain('enter the pulse height');
    expect(missing.checks.find(item => item.id === 'pulse-width-2')?.message).toContain('enter the pulse width');
  });

  it('matches what the calibration pulse draws at every supported setting', () => {
    for (const gain of [5, 10, 20] as const) {
      for (const speed of [12.5, 25, 50] as const) {
        const heightMm = svgUnitsToMm(calibrationPulseHeightUnits(gain));
        const widthMm = svgUnitsToMm(calibrationPulseWidthUnits(speed));
        expect(heightMm).toBeCloseTo(gain, 9);
        expect(widthMm).toBeCloseTo(0.2 * speed, 9);
        expect(evaluateExercise(gridExercise, [at(gain, speed, heightMm, widthMm), at(gain === 5 ? 10 : 5, speed, gain === 5 ? 10 : 5, widthMm)]).passed).toBe(true);
      }
    }
  });
});
