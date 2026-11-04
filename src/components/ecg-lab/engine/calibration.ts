import type { Gain, PaperSpeed } from './types';

/** SVG user units per logical ECG paper millimetre. This is not a CSS-pixel size. */
export const SVG_UNITS_PER_MM = 4;
/** Browser preview scale only. It does not claim CSS pixels are physical millimetres. */
export const PREVIEW_CSS_PIXELS_PER_SVG_UNIT = 0.8;

export const timeToMm = (seconds: number, speed: PaperSpeed) => seconds * speed;
export const voltageToMm = (mv: number, gain: Gain) => mv * gain;
export const mmToTimeMs = (mm: number, speed: PaperSpeed) => (mm / speed) * 1000;
export const mmToVoltageMv = (mm: number, gain: Gain) => mm / gain;
export const svgUnitsToMm = (units: number) => units / SVG_UNITS_PER_MM;
export const timeMsToSvgUnits = (timeMs: number, speed: PaperSpeed) => timeToMm(timeMs / 1000, speed) * SVG_UNITS_PER_MM;
export const svgUnitsToTimeMs = (units: number, speed: PaperSpeed) => mmToTimeMs(svgUnitsToMm(units), speed);
export const voltageMvToSvgUnits = (mv: number, gain: Gain) => voltageToMm(mv, gain) * SVG_UNITS_PER_MM;
export const svgUnitsToVoltageMv = (units: number, gain: Gain) => mmToVoltageMv(svgUnitsToMm(units), gain);
/** The simulator's calibration pulse: 1 mV tall and this many milliseconds wide. */
export const CALIBRATION_PULSE_AMPLITUDE_MV = 1;
export const CALIBRATION_PULSE_DURATION_MS = 200;
export const calibrationPulseHeightUnits = (gain: Gain, amplitudeMv = CALIBRATION_PULSE_AMPLITUDE_MV) => voltageMvToSvgUnits(amplitudeMv, gain);
export const calibrationPulseWidthUnits = (speed: PaperSpeed, durationMs = CALIBRATION_PULSE_DURATION_MS) => timeMsToSvgUnits(durationMs, speed);

/** Keeps the full recording visible while preserving a 250 mm minimum paper width. */
export const recordingViewWidthUnits = (durationMs: number, speed: PaperSpeed, minimumWidthMm = 250) =>
  Math.max(timeToMm(durationMs / 1000, speed), minimumWidthMm) * SVG_UNITS_PER_MM;

/** Common vertical viewport for single- and multi-lead traces, with a paper-margin guard. */
export const traceViewHeightUnits = (maxAbsVoltageMv: number, gain: Gain, marginMm = 4, minimumHeightMm = 32) =>
  Math.max(minimumHeightMm, 2 * (Math.abs(maxAbsVoltageMv) * gain + marginMm)) * SVG_UNITS_PER_MM;

const previewPixelsToSvgUnits = (distancePx: number, cssPixelsPerSvgUnit: number) => {
  if (!Number.isFinite(cssPixelsPerSvgUnit) || cssPixelsPerSvgUnit <= 0) {
    throw new RangeError('Preview scale must be a positive finite value');
  }
  return distancePx / cssPixelsPerSvgUnit;
};
/** Converts a screen-space preview distance back to time without assuming physical CSS pixels. */
export const previewPixelsToTimeMs = (distancePx: number, speed: PaperSpeed, cssPixelsPerSvgUnit: number) =>
  svgUnitsToTimeMs(previewPixelsToSvgUnits(distancePx, cssPixelsPerSvgUnit), speed);
/** Converts a screen-space preview distance back to voltage for calibrated vertical calipers. */
export const previewPixelsToVoltageMv = (distancePx: number, gain: Gain, cssPixelsPerSvgUnit: number) =>
  svgUnitsToVoltageMv(previewPixelsToSvgUnits(distancePx, cssPixelsPerSvgUnit), gain);

export const heartRateFromRrMs = (rrMs: number) => rrMs > 0 ? 60000 / rrMs : 0;
export const qtcBazettMs = (qtMs: number, rrMs: number) => rrMs > 0 ? qtMs / Math.sqrt(rrMs / 1000) : 0;
