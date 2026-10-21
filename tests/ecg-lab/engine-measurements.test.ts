import { describe, expect, it } from 'bun:test';
import { createMeasurement, locateMeasurementMarker, measurementTimeAtPreviewX } from '@/components/ecg-lab/engine/measurements';

describe('rolling measurement markers', () => {
  const widthUnits = 800;
  const elapsedMs = 10_000;

  it('classifies points immediately before, at, and after both inclusive viewport boundaries', () => {
    expect(locateMeasurementMarker(1_999.99, elapsedMs, widthUnits, 25).visibility).toBe('before');
    expect(locateMeasurementMarker(2_000, elapsedMs, widthUnits, 25)).toMatchObject({ visibility: 'visible', xUnits: 0 });
    expect(locateMeasurementMarker(elapsedMs, elapsedMs, widthUnits, 25)).toMatchObject({ visibility: 'visible', xUnits: widthUnits });
    expect(locateMeasurementMarker(10_000.01, elapsedMs, widthUnits, 25).visibility).toBe('after');
  });

  it('maps preview coordinates to absolute timestamps using the display scale and calibration', () => {
    for (const cssScale of [0.4, 0.8, 1.25]) {
      const widthPixels = widthUnits * cssScale;
      expect(measurementTimeAtPreviewX(0, widthPixels, elapsedMs, widthUnits, 25)).toBeCloseTo(2_000, 8);
      expect(measurementTimeAtPreviewX(widthPixels / 2, widthPixels, elapsedMs, widthUnits, 25)).toBeCloseTo(6_000, 8);
      expect(measurementTimeAtPreviewX(widthPixels, widthPixels, elapsedMs, widthUnits, 25)).toBeCloseTo(elapsedMs, 8);
    }
  });

  it('does not allow clicking the negative-time warm-up to move a marker to a different point', () => {
    expect(measurementTimeAtPreviewX(0, 640, 0, widthUnits, 25)).toBeNull();
    expect(measurementTimeAtPreviewX(640, 640, 0, widthUnits, 25)).toBe(0);
    expect(measurementTimeAtPreviewX(-20, 640, 10_000, widthUnits, 25)).toBeCloseTo(2_000, 8);
  });

  it('keeps the timestamp pair and interval duration independent of viewport position and paper speed', () => {
    const startMs = 8_640;
    const endMs = 9_120;
    const expected = createMeasurement('RR', startMs, endMs);
    expect(expected).toMatchObject({ startMs, endMs, durationMs: 480, heartRateBpm: 125 });
    for (const speed of [12.5, 25, 50] as const) {
      const start = locateMeasurementMarker(startMs, elapsedMs, widthUnits, speed);
      const end = locateMeasurementMarker(endMs, elapsedMs, widthUnits, speed);
      expect(createMeasurement('RR', start.timeMs, end.timeMs)).toEqual(expected);
    }
  });

  it('rejects non-finite timestamps and degenerate viewport dimensions', () => {
    expect(() => locateMeasurementMarker(Number.NaN, elapsedMs, widthUnits, 25)).toThrow(RangeError);
    expect(() => locateMeasurementMarker(0, elapsedMs, 0, 25)).toThrow(RangeError);
    expect(() => measurementTimeAtPreviewX(1, 0, elapsedMs, widthUnits, 25)).toThrow(RangeError);
  });
});
