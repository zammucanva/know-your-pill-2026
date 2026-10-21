import { calibrationPulseHeightUnits, calibrationPulseWidthUnits, svgUnitsToMm, voltageMvToSvgUnits } from '../engine/calibration';
import { beatIntervalMs, generateLeadSamples, qrsEventTimesMs, R_PEAK_PHASE } from '../engine/signal';
import type { ExerciseDefinition, ExerciseTolerance } from './definitions';
import { exerciseReadingSchema, type ExerciseReading } from './readings';

export type ExerciseCheck = { id: string; passed: boolean; message: string };
export type ExerciseEvaluation = { passed: boolean; checks: ExerciseCheck[] };
export type BeatMatch = { beatIndex: number; eventTimeMs: number; errorMs: number };

/** Finds the signal model's nearest R-wave event, so targets follow the preset instead of being hardcoded. */
export function nearestBeat(preset: ExerciseReading['preset'], timeMs: number): BeatMatch {
  if (!Number.isFinite(timeMs) || timeMs < 0) throw new RangeError('Marker time must be finite and non-negative');
  const rr = beatIntervalMs(preset);
  const events = qrsEventTimesMs(preset, Math.max(0, timeMs - rr), timeMs + rr);
  let best = events[0];
  for (const event of events) if (Math.abs(event - timeMs) < Math.abs(best - timeMs)) best = event;
  return { beatIndex: Math.round((best - R_PEAK_PHASE * rr) / rr), eventTimeMs: best, errorMs: timeMs - best };
}

const fmt = (value: number) => `${Math.abs(value).toFixed(0)} ms`;
const check = (id: string, passed: boolean, message: string): ExerciseCheck => ({ id, passed, message });
const finish = (checks: ExerciseCheck[]): ExerciseEvaluation => ({ passed: checks.length > 0 && checks.every(item => item.passed), checks });

function rrChecks(reading: ExerciseReading, tolerance: ExerciseTolerance, label: string): ExerciseCheck[] {
  const start = nearestBeat(reading.preset, reading.startMs);
  const end = nearestBeat(reading.preset, reading.endMs);
  const startOk = Math.abs(start.errorMs) <= tolerance.timeMs;
  const endOk = Math.abs(end.errorMs) <= tolerance.timeMs;
  const consecutive = end.beatIndex === start.beatIndex + 1;
  return [
    check(`${label}-start`, startOk, startOk
      ? `${label}: Start is within ${tolerance.timeMs} ms of an R peak (off by ${fmt(start.errorMs)}).`
      : `${label}: Start is ${fmt(start.errorMs)} from the nearest R peak; the tolerance is ${tolerance.timeMs} ms.`),
    check(`${label}-end`, endOk, endOk
      ? `${label}: End is within ${tolerance.timeMs} ms of an R peak (off by ${fmt(end.errorMs)}).`
      : `${label}: End is ${fmt(end.errorMs)} from the nearest R peak; the tolerance is ${tolerance.timeMs} ms.`),
    check(`${label}-consecutive`, consecutive, consecutive
      ? `${label}: the markers are on consecutive R peaks.`
      : `${label}: Start and End must be on consecutive R peaks (found beats ${start.beatIndex} and ${end.beatIndex}).`),
  ];
}

/** Largest absolute deflection of a lead over one full cycle, from the deterministic signal. */
function peakDeflection(preset: ExerciseReading['preset'], lead: ExerciseReading['lead']): { mv: number; timeMs: number } {
  const rr = beatIntervalMs(preset);
  const samples = generateLeadSamples(preset, lead, rr, 2 * rr);
  let best = samples[0];
  for (const sample of samples) if (Math.abs(sample.voltageMv) > Math.abs(best.voltageMv)) best = sample;
  return { mv: Math.abs(best.voltageMv), timeMs: best.timeMs };
}

function parseReadings(readings: unknown[], required: number): { parsed: ExerciseReading[]; failure?: ExerciseCheck } {
  const parsed: ExerciseReading[] = [];
  for (const candidate of readings) {
    const result = exerciseReadingSchema.safeParse(candidate);
    if (!result.success) return { parsed: [], failure: check('valid-readings', false, 'A recorded reading is invalid. Reset the exercise and record again.') };
    parsed.push(result.data);
  }
  if (parsed.length < required) {
    return { parsed, failure: check('enough-readings', false, `Record ${required === 1 ? 'a reading' : `${required} readings`} first (${parsed.length} recorded).`) };
  }
  return { parsed };
}

const samePreset = (a: ExerciseReading, b: ExerciseReading) =>
  check('same-preset', a.preset === b.preset, a.preset === b.preset ? 'Both readings use the same rhythm.' : 'Both readings must use the same rhythm preset.');

function durationInvariance(a: ExerciseReading, b: ExerciseReading, tolerance: ExerciseTolerance, setting: string): ExerciseCheck {
  const difference = Math.abs((a.endMs - a.startMs) - (b.endMs - b.startMs));
  const ok = difference <= tolerance.invarianceMs;
  return check('duration-invariant', ok, ok
    ? `The measured interval is unchanged between ${setting} settings (difference ${difference.toFixed(0)} ms).`
    : `The two intervals differ by ${difference.toFixed(0)} ms; ${setting} should not change a time measurement (allowed ${tolerance.invarianceMs} ms).`);
}

/**
 * Evaluates recorded readings against the signal model. This is an educational placement check only:
 * it does not detect, label or interpret anything clinically.
 */
export function evaluateExercise(definition: ExerciseDefinition, readings: unknown[], toleranceOverride?: Partial<ExerciseTolerance>): ExerciseEvaluation {
  const tolerance: ExerciseTolerance = { ...definition.tolerance, ...toleranceOverride };
  const { parsed, failure } = parseReadings(readings, definition.requiredReadings);
  if (failure) return finish([failure]);
  const [first, second] = parsed;
  const checks: ExerciseCheck[] = [];

  switch (definition.kind) {
    case 'rr-interval': {
      checks.push(...rrChecks(first, tolerance, 'Reading'));
      if (checks.every(item => item.passed)) {
        const intervalMs = first.endMs - first.startMs;
        checks.push(check('interval', true, `Your interval is ${intervalMs.toFixed(0)} ms (${(60000 / intervalMs).toFixed(0)} beats per minute); the model's beat interval is ${beatIntervalMs(first.preset)} ms.`));
      }
      break;
    }
    case 'gain-invariance': {
      checks.push(samePreset(first, second));
      checks.push(check('different-gain', first.gain !== second.gain, first.gain !== second.gain ? `Gains differ: ${first.gain} and ${second.gain} mm/mV.` : 'Change the Gain control between the two readings.'));
      checks.push(...rrChecks(first, tolerance, 'Reading 1'), ...rrChecks(second, tolerance, 'Reading 2'));
      checks.push(durationInvariance(first, second, tolerance, 'gain'));
      const peak = peakDeflection(first.preset, first.lead);
      const heightMm = (reading: ExerciseReading) => svgUnitsToMm(voltageMvToSvgUnits(peak.mv, reading.gain));
      const scales = peak.mv > 0 && first.gain !== second.gain;
      checks.push(check('amplitude-scales', scales, peak.mv > 0
        ? `Lead ${first.lead}'s largest deflection (${peak.mv.toFixed(2)} mV) is drawn ${heightMm(first).toFixed(1)} mm tall at ${first.gain} mm/mV and ${heightMm(second).toFixed(1)} mm at ${second.gain} mm/mV, at the same cycle time (${peak.timeMs.toFixed(0)} ms).`
        : `Lead ${first.lead} has no deflection to compare; choose another lead.`));
      break;
    }
    case 'cross-lead-beat': {
      checks.push(samePreset(first, second));
      checks.push(check('different-lead', first.lead !== second.lead, first.lead !== second.lead ? `Leads differ: ${first.lead} and ${second.lead}.` : 'Choose a different lead for the second reading.'));
      const a = nearestBeat(first.preset, first.startMs);
      const b = nearestBeat(second.preset, second.startMs);
      for (const [reading, beat] of [[first, a], [second, b]] as const) {
        const ok = Math.abs(beat.errorMs) <= tolerance.timeMs;
        checks.push(check(`start-${reading.lead}`, ok, ok
          ? `Lead ${reading.lead}: Start is within ${tolerance.timeMs} ms of the QRS event (off by ${fmt(beat.errorMs)}).`
          : `Lead ${reading.lead}: Start is ${fmt(beat.errorMs)} from the nearest QRS event; the tolerance is ${tolerance.timeMs} ms.`));
      }
      checks.push(check('same-beat', a.beatIndex === b.beatIndex, a.beatIndex === b.beatIndex
        ? `Both points belong to the same beat (event at ${a.eventTimeMs.toFixed(0)} ms).`
        : 'The two points belong to different beats. Use the same beat in both leads.'));
      break;
    }
    case 'paper-speed-grid': {
      checks.push(samePreset(first, second));
      checks.push(check('different-speed', first.paperSpeed !== second.paperSpeed, first.paperSpeed !== second.paperSpeed ? `Paper speeds differ: ${first.paperSpeed} and ${second.paperSpeed} mm/s.` : 'Change the Paper speed control between the two readings.'));
      checks.push(...rrChecks(first, tolerance, 'Reading 1'), ...rrChecks(second, tolerance, 'Reading 2'));
      checks.push(durationInvariance(first, second, tolerance, 'paper-speed'));
      [first, second].forEach((reading, index) => {
        const expected = beatIntervalMs(reading.preset) / 1000 * reading.paperSpeed;
        const ok = reading.answerMm !== undefined && Math.abs(reading.answerMm - expected) <= tolerance.widthMm;
        checks.push(check(`width-${index + 1}`, ok, reading.answerMm === undefined
          ? `Reading ${index + 1}: enter the interval width in millimetres.`
          : ok
            ? `Reading ${index + 1}: ${reading.answerMm} mm is correct for ${reading.paperSpeed} mm/s (expected ${expected.toFixed(1)} mm).`
            : `Reading ${index + 1}: expected about ${expected.toFixed(1)} mm at ${reading.paperSpeed} mm/s (${beatIntervalMs(reading.preset)} ms × ${reading.paperSpeed} mm/s), not ${reading.answerMm} mm.`));
      });
      break;
    }
    case 'grid-calibration': {
      const changed = first.gain !== second.gain || first.paperSpeed !== second.paperSpeed;
      checks.push(check('settings-changed', changed, changed
        ? `Settings differ: ${first.gain} and ${second.gain} mm/mV, ${first.paperSpeed} and ${second.paperSpeed} mm/s.`
        : 'Change the Gain or the Paper speed between the two readings so the pulse changes size.'));
      [first, second].forEach((reading, index) => {
        // Expected values come from the same functions that draw the calibration pulse.
        const expectedHeight = svgUnitsToMm(calibrationPulseHeightUnits(reading.gain));
        const expectedWidth = svgUnitsToMm(calibrationPulseWidthUnits(reading.paperSpeed));
        const heightOk = reading.answerMm !== undefined && Math.abs(reading.answerMm - expectedHeight) <= tolerance.widthMm;
        const widthOk = reading.answerMm2 !== undefined && Math.abs(reading.answerMm2 - expectedWidth) <= tolerance.widthMm;
        checks.push(check(`pulse-height-${index + 1}`, heightOk, reading.answerMm === undefined
          ? `Reading ${index + 1}: enter the pulse height in millimetres.`
          : heightOk
            ? `Reading ${index + 1}: a height of ${reading.answerMm} mm is correct for ${reading.gain} mm/mV.`
            : `Reading ${index + 1}: the pulse is 1 mV tall, so at ${reading.gain} mm/mV it is ${expectedHeight.toFixed(1)} mm, not ${reading.answerMm} mm.`));
        checks.push(check(`pulse-width-${index + 1}`, widthOk, reading.answerMm2 === undefined
          ? `Reading ${index + 1}: enter the pulse width in millimetres.`
          : widthOk
            ? `Reading ${index + 1}: a width of ${reading.answerMm2} mm is correct for ${reading.paperSpeed} mm/s.`
            : `Reading ${index + 1}: the pulse is 200 ms wide, so at ${reading.paperSpeed} mm/s it is ${expectedWidth.toFixed(1)} mm, not ${reading.answerMm2} mm.`));
      });
      break;
    }
  }
  return finish(checks);
}
