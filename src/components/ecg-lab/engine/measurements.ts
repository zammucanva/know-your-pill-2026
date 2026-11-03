import { heartRateFromRrMs, mmToTimeMs, mmToVoltageMv, previewPixelsToTimeMs, svgUnitsToTimeMs, timeMsToSvgUnits } from './calibration';
import type { Gain, PaperSpeed } from './types';

export type MeasurementKind = 'RR' | 'PR' | 'QRS' | 'QT';
export type Measurement = { kind: MeasurementKind; startMs: number; endMs: number; durationMs: number; heartRateBpm?: number };
export type MeasurementMarkerVisibility = 'before' | 'visible' | 'after';
export type MeasurementMarkerPosition = { timeMs: number; xUnits: number; visibility: MeasurementMarkerVisibility };

export const measureTime = (startMs: number, endMs: number): number => Math.abs(endMs - startMs);
export const measureVoltage = (startMm: number, endMm: number, gain: Gain): number => Math.abs(mmToVoltageMv(endMm - startMm, gain));
export const createMeasurement = (kind: MeasurementKind, startMs: number, endMs: number): Measurement => {
  const durationMs = measureTime(startMs, endMs);
  return kind === 'RR' ? { kind, startMs, endMs, durationMs, heartRateBpm: heartRateFromRrMs(durationMs) } : { kind, startMs, endMs, durationMs };
};
export const screenMmToTimeMs = (distanceMm: number, speed: PaperSpeed): number => mmToTimeMs(distanceMm, speed);

/** Maps an absolute simulated timestamp into the current calibrated rolling paper window. */
export function locateMeasurementMarker(timeMs: number, elapsedMs: number, viewportWidthUnits: number, speed: PaperSpeed): MeasurementMarkerPosition {
  if (![timeMs, elapsedMs, viewportWidthUnits].every(Number.isFinite) || viewportWidthUnits <= 0) {
    throw new RangeError('Measurement marker time and viewport must be finite, with positive width');
  }
  const visibleStartMs = elapsedMs - svgUnitsToTimeMs(viewportWidthUnits, speed);
  const visibility: MeasurementMarkerVisibility = timeMs < visibleStartMs
    ? 'before'
    : timeMs > elapsedMs ? 'after' : 'visible';
  return {
    timeMs,
    xUnits: viewportWidthUnits + timeMsToSvgUnits(timeMs - elapsedMs, speed),
    visibility,
  };
}

/**
 * Converts a browser-preview x coordinate to an absolute timestamp through the shared calibration model.
 * Returns null for the negative-time warm-up region before the simulation's reset origin.
 */
export function measurementTimeAtPreviewX(xPixels: number, viewportWidthPixels: number, elapsedMs: number, viewportWidthUnits: number, speed: PaperSpeed): number | null {
  if (![xPixels, viewportWidthPixels, elapsedMs, viewportWidthUnits].every(Number.isFinite) || viewportWidthPixels <= 0 || viewportWidthUnits <= 0) {
    throw new RangeError('Preview coordinates and viewport must be finite, with positive dimensions');
  }
  const boundedXPixels = Math.min(viewportWidthPixels, Math.max(0, xPixels));
  const previewScale = viewportWidthPixels / viewportWidthUnits;
  const candidateMs = elapsedMs + previewPixelsToTimeMs(boundedXPixels - viewportWidthPixels, speed, previewScale);
  if (candidateMs < 0) return null;
  const visibleStartMs = elapsedMs - svgUnitsToTimeMs(viewportWidthUnits, speed);
  return Math.min(elapsedMs, Math.max(visibleStartMs, candidateMs));
}
