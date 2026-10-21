import { describe, expect, it } from 'bun:test';
import {
  appendManualMeasurementSet,
  removeManualMeasurementSet,
  summarizeManualMeasurementSet,
  updateManualMeasurementSet,
  type ManualMeasurementSet,
} from '@/components/ecg-lab/engine/measurement-sets';

const rr: ManualMeasurementSet = { id: 'rr-1', name: 'R–R interval', kind: 'RR', startMs: 1_000, endMs: 1_800 };
const qrs: ManualMeasurementSet = { id: 'qrs-1', name: 'QRS sample', kind: 'QRS', startMs: 1_200, endMs: 1_280 };

describe('manual measurement sets', () => {
  it('appends a separately owned set and rejects duplicate or empty IDs', () => {
    const source = [rr];
    const result = appendManualMeasurementSet(source, qrs);

    expect(result).toEqual([rr, qrs]);
    expect(result).not.toBe(source);
    expect(result[1]).not.toBe(qrs);
    expect(source).toEqual([rr]);
    expect(() => appendManualMeasurementSet(source, rr)).toThrow(RangeError);
    expect(() => appendManualMeasurementSet(source, { ...qrs, id: ' ' })).toThrow(RangeError);
  });

  it('updates only the requested set without mutating the original records', () => {
    const source = [rr, qrs];
    const updated = updateManualMeasurementSet(source, 'qrs-1', { name: 'Selected QRS', endMs: 1_290 });

    expect(updated).toEqual([rr, { ...qrs, name: 'Selected QRS', endMs: 1_290 }]);
    expect(updated).not.toBe(source);
    expect(updated[0]).toBe(rr);
    expect(updated[1]).not.toBe(qrs);
    expect(qrs.endMs).toBe(1_280);
    expect(updateManualMeasurementSet(source, 'missing', { name: 'Unused' })).toBe(source);
  });

  it('deletes one set without changing the remaining order or source array', () => {
    const source = [rr, qrs, { ...rr, id: 'rr-2', name: 'Second R–R' }];
    expect(removeManualMeasurementSet(source, 'qrs-1')).toEqual([source[0], source[2]]);
    expect(source).toHaveLength(3);
    expect(removeManualMeasurementSet(source, 'missing')).toEqual(source);
  });

  it('calculates duration and R–R rate from absolute timestamps with explicit units', () => {
    expect(summarizeManualMeasurementSet(rr)).toEqual({
      kind: 'RR', startMs: 1_000, endMs: 1_800, durationMs: 800, heartRateBpm: 75,
    });
    expect(summarizeManualMeasurementSet(qrs)).toEqual({
      kind: 'QRS', startMs: 1_200, endMs: 1_280, durationMs: 80,
    });
  });
});
