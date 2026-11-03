import type { QrsEvent, RhythmEvent, RhythmSchedule } from '../engine/rhythm-signal';
import { buildCase, getRhythmCase } from '../rhythm/cases';
import { buildRhythmSchedule } from '../rhythm/rhythms';
import { monitorScenarioSchema, type MonitorScenario, type ScenarioPhase } from './scenario';

/**
 * One scenario timeline: every phase's beat schedule joined on a single simulated clock, plus the
 * event lists the monitor, the audio and the vital-sign channels read. Nothing here is estimated
 * from the rendered picture; the beat times come from the same schedule that draws the ECG.
 */
/** A channel segment: one authored phase, or part of one after a learner action changed a channel. */
export type PhaseSpan = { phase: ScenarioPhase; index: number; startMs: number; endMs: number; pulsatile: boolean };

export type ScenarioTimeline = {
  scenario: MonitorScenario;
  /** Composite ECG schedule for the whole scenario; drawn with the existing rhythm generator. */
  schedule: RhythmSchedule;
  phases: PhaseSpan[];
  /** Sorted R-peak times (ms) of the simulated heart, whether or not the ECG leads are attached. */
  qrsTimesMs: number[];
  /** R peaks the monitor can detect: only while the ECG leads are connected. The QRS tone reads this. */
  ecgDetectedQrsTimesMs: number[];
  /**
   * Sorted pulse-oximetry pulse peaks (ms). A simulated mechanical pulse follows each ventricular
   * beat after a fixed transit delay, only while the SpO2 sensor is on and the rhythm is pulsatile.
   */
  plethPulseTimesMs: number[];
  /** The learner actions this timeline was built with. */
  actions: TakenAction[];
};

/** Fixed delay from R peak to the simulated finger pulse peak. A teaching constant, not a measurement. */
export const PLETH_PULSE_DELAY_MS = 280;
/** Margin built on each side of a phase so waves near its edges are complete. */
const PHASE_MARGIN_MS = 2_500;
/** The first beat of a new phase never falls closer than this to the previous beat. */
const MIN_COUPLING_MS = 300;
/** Longest P-to-QRS gap in the rhythm library (Mobitz I), used to keep a new phase's leading P wave. */
const MAX_PR_MS = 400;

const isQrs = (event: RhythmEvent): event is QrsEvent => event.kind === 'qrs';

export function phaseSpans(scenario: MonitorScenario): PhaseSpan[] {
  return scenario.phases.map((phase, index) => {
    const rhythm = getRhythmCase(phase.rhythmCaseId);
    if (!rhythm) throw new Error(`Unknown rhythm case ${phase.rhythmCaseId}`);
    const endMs = scenario.phases[index + 1]?.startMs ?? scenario.durationMs;
    // VF in this library has no discrete QRS complexes and therefore produces no simulated pulse.
    const pulsatile = buildCase(rhythm).analysis.qrs !== 'none';
    return { phase, index, startMs: phase.startMs, endMs, pulsatile };
  });
}

export function phaseAt(timeline: Pick<ScenarioTimeline, 'phases'>, timeMs: number): PhaseSpan {
  const { phases } = timeline;
  for (let index = phases.length - 1; index >= 0; index -= 1) if (timeMs >= phases[index].startMs) return phases[index];
  return phases[0];
}

function shiftSchedule(schedule: RhythmSchedule, shiftMs: number): RhythmSchedule {
  return {
    events: schedule.events.map(event => ({ ...event, timeMs: event.timeMs + shiftMs })),
    ...(schedule.flutter ? { flutter: { ...schedule.flutter, offsetMs: (schedule.flutter.offsetMs ?? 0) - shiftMs } } : {}),
    ...(schedule.fibrillation ? { fibrillation: { ...schedule.fibrillation } } : {}),
    ...(schedule.chaos ? { chaos: { ...schedule.chaos } } : {}),
  };
}

/** A learner action taken at a simulated time. The timeline is a pure function of these. */
export type TakenAction = { actionId: string; atMs: number };

/**
 * Applies learner actions to the channel segments. Each effect starts `delayMs` after the action
 * and lasts for the rest of the run; it changes equipment channels only, never the rhythm.
 */
export function applyActions(scenario: MonitorScenario, spans: PhaseSpan[], taken: readonly TakenAction[]): PhaseSpan[] {
  const seen = new Set<string>();
  const effects = taken.map(item => {
    const action = scenario.actions.find(candidate => candidate.id === item.actionId);
    if (!action) throw new RangeError(`Unknown scenario action ${item.actionId}`);
    if (seen.has(item.actionId)) throw new RangeError(`Action ${item.actionId} was taken more than once`);
    if (!Number.isFinite(item.atMs) || item.atMs < 0 || item.atMs > scenario.durationMs) throw new RangeError('Action time must be inside the scenario');
    seen.add(item.actionId);
    return { fromMs: Math.min(scenario.durationMs, item.atMs + action.delayMs), effect: action.effect };
  }).sort((first, second) => first.fromMs - second.fromMs);

  let result = spans;
  for (const { fromMs, effect } of effects) {
    const override = (phase: ScenarioPhase): ScenarioPhase => ({
      ...phase,
      ...(effect.spo2 !== undefined ? { spo2: effect.spo2 } : {}),
      ...(effect.ecg !== undefined ? { ecg: effect.ecg } : {}),
    });
    result = result.flatMap(span => {
      if (span.endMs <= fromMs) return [span];
      if (span.startMs >= fromMs) return [{ ...span, phase: override(span.phase) }];
      return [{ ...span, endMs: fromMs }, { ...span, startMs: fromMs, phase: override(span.phase) }];
    });
  }
  return result.map((span, index) => ({ ...span, index }));
}

type RhythmRun = { rhythmCaseId: string; startMs: number; endMs: number; last: boolean };

/** Consecutive segments with the same rhythm case continue one beat schedule. */
function rhythmRuns(spans: readonly PhaseSpan[]): RhythmRun[] {
  const runs: RhythmRun[] = [];
  for (const span of spans) {
    const previous = runs[runs.length - 1];
    if (previous && previous.rhythmCaseId === span.phase.rhythmCaseId) previous.endMs = span.endMs;
    else runs.push({ rhythmCaseId: span.phase.rhythmCaseId, startMs: span.startMs, endMs: span.endMs, last: false });
  }
  if (runs.length > 0) runs[runs.length - 1].last = true;
  return runs;
}

/**
 * Builds and validates the whole scenario timeline for a given action log. Throws on an invalid
 * scenario or action log. The same inputs always give the same timeline.
 */
export function buildScenarioTimeline(input: MonitorScenario, taken: readonly TakenAction[] = []): ScenarioTimeline {
  const scenario = monitorScenarioSchema.parse(input);
  const spans = applyActions(scenario, phaseSpans(scenario), taken);
  const events: RhythmEvent[] = [];
  const composite: RhythmSchedule = { events };
  let lastQrsMs: number | null = null;

  for (const run of rhythmRuns(spans)) {
    const rhythm = getRhythmCase(run.rhythmCaseId)!;
    const rrMs = 60_000 / rhythm.rateBpm;
    let schedule = buildRhythmSchedule(rhythm.categoryId, { rateBpm: rhythm.rateBpm, seed: rhythm.seed }, {
      startMs: run.startMs - PHASE_MARGIN_MS,
      endMs: run.endMs + PHASE_MARGIN_MS,
    });
    // The first run keeps its lead-in history; a later run starts at its aligned first beat.
    let firstBeatMs = run.startMs - PHASE_MARGIN_MS;
    if (lastQrsMs !== null) {
      // Align the new rhythm so its first beat after the boundary keeps a plausible coupling interval.
      const firstQrs = schedule.events.filter(isQrs).map(event => event.timeMs).filter(time => time >= run.startMs).sort((x, y) => x - y)[0];
      const desired = Math.max(run.startMs, lastQrsMs + Math.max(MIN_COUPLING_MS, Math.min(rrMs, 1_000)));
      if (firstQrs !== undefined) schedule = shiftSchedule(schedule, desired - firstQrs);
      firstBeatMs = desired;
    }
    // Atrial events may precede the first beat by up to a long PR interval, never before the last beat.
    const atrialLowerBound: number = lastQrsMs === null ? firstBeatMs : Math.max(lastQrsMs + 150, firstBeatMs - MAX_PR_MS);
    const upperBound = run.last ? run.endMs + PHASE_MARGIN_MS : run.endMs;
    const kept: RhythmEvent[] = schedule.events
      .filter(event => event.timeMs < upperBound && (isQrs(event) ? event.timeMs >= firstBeatMs : event.timeMs >= atrialLowerBound))
      .sort((x, y) => x.timeMs - y.timeMs);
    // A run that ends mid-cycle must not leave a P wave or pacing spike without its QRS.
    const lastQrsIndex = kept.map(isQrs).lastIndexOf(true);
    const trimmed = run.last || lastQrsIndex < 0 ? kept : kept.slice(0, lastQrsIndex + 1);
    events.push(...trimmed);
    const range = { fromMs: run.startMs, toMs: run.last ? undefined : run.endMs };
    for (const key of ['flutter', 'fibrillation', 'chaos'] as const) {
      const part = schedule[key];
      if (!part) continue;
      if (composite[key]) throw new Error(`Only one rhythm run per scenario can use continuous ${key} activity.`);
      Object.assign(composite, { [key]: { ...part, ...range } });
    }
    const qrsInRun: number[] = trimmed.filter(isQrs).map(event => event.timeMs);
    if (qrsInRun.length > 0) lastQrsMs = qrsInRun[qrsInRun.length - 1];
  }

  events.sort((x, y) => x.timeMs - y.timeMs);
  const qrsTimesMs = events.filter(isQrs).map(event => event.timeMs);
  const plethPulseTimesMs = qrsTimesMs
    .map((time, index) => ({ beat: time, previous: qrsTimesMs[index - 1], pulse: time + PLETH_PULSE_DELAY_MS }))
    .filter(({ beat, previous }) => {
      const span = phaseAt({ phases: spans }, beat);
      const spo2 = span.phase.spo2;
      if (!span.pulsatile || spo2 === null || spo2.quality === 'off') return false;
      return spo2.pulseDeficitBelowRrMs === undefined || previous === undefined || beat - previous >= spo2.pulseDeficitBelowRrMs;
    })
    .map(({ pulse }) => pulse);
  const ecgDetectedQrsTimesMs = qrsTimesMs.filter(time => phaseAt({ phases: spans }, time).phase.ecg === 'connected');
  return { scenario, schedule: composite, phases: spans, qrsTimesMs, ecgDetectedQrsTimesMs, plethPulseTimesMs, actions: [...taken] };
}

/** Index of the first value strictly greater than `timeMs` in a sorted list. */
export function upperBound(sorted: readonly number[], timeMs: number): number {
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const middle = (low + high) >>> 1;
    if (sorted[middle] <= timeMs) low = middle + 1;
    else high = middle;
  }
  return low;
}

/** Event times in the half-open interval (fromMs, toMs]. Used by the audio scheduler. */
export function eventsBetween(sorted: readonly number[], fromMs: number, toMs: number): number[] {
  if (!(toMs > fromMs)) return [];
  return sorted.slice(upperBound(sorted, fromMs), upperBound(sorted, toMs));
}
