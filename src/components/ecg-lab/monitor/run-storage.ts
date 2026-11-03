import { z } from 'zod';
import type { ProgressStorage } from '../learn/progress';
import type { MonitorScenario } from './scenario';
import { buildScenarioTimeline, type TakenAction } from './timeline';

/**
 * Unfinished monitored-scenario runs, so a learner can resume where they paused. A run is fully
 * described by its simulated time and the actions taken, because the timeline is a pure function
 * of those. Answers, alarm acknowledgements and sound settings are not stored. Learner-owned data,
 * validated on every read; anything unreadable is discarded rather than repaired.
 */
export const SCENARIO_RUNS_STORAGE_KEY = 'ecg-lab-scenario-runs-v1';
const MAX_SERIALIZED_CHARS = 50_000;

const runSchema = z.strictObject({
  scenarioVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
  elapsedMs: z.number().min(0).max(600_000),
  taken: z.array(z.strictObject({ actionId: z.string().regex(/^[a-z][a-z0-9-]{1,40}$/), atMs: z.number().min(0).max(600_000) })).max(4),
  recordedEndMs: z.number().min(0).max(600_000).nullable(),
  savedAt: z.iso.datetime({ offset: true }),
});
export type ScenarioRun = z.infer<typeof runSchema>;

const runsSchema = z.strictObject({
  version: z.literal(1),
  runs: z.record(z.string().regex(/^scenario\.[a-z0-9-]+\.\d{2}$/), runSchema),
});
export type ScenarioRuns = z.infer<typeof runsSchema>;

export const emptyScenarioRuns = (): ScenarioRuns => ({ version: 1, runs: {} });

export function readScenarioRuns(storage: ProgressStorage | null, key = SCENARIO_RUNS_STORAGE_KEY): ScenarioRuns {
  if (!storage) return emptyScenarioRuns();
  let serialized: string | null;
  try { serialized = storage.getItem(key); } catch { return emptyScenarioRuns(); }
  if (serialized === null) return emptyScenarioRuns();
  if (serialized.length <= MAX_SERIALIZED_CHARS) {
    try {
      const parsed = runsSchema.safeParse(JSON.parse(serialized));
      if (parsed.success) return parsed.data;
    } catch { /* falls through to discard */ }
  }
  try { storage.removeItem(key); } catch { /* read-only storage is not an app error */ }
  return emptyScenarioRuns();
}

function write(storage: ProgressStorage | null, runs: ScenarioRuns, key: string): boolean {
  if (!storage) return false;
  try { storage.setItem(key, JSON.stringify(runs)); return true; } catch { return false; }
}

export function saveScenarioRun(storage: ProgressStorage | null, scenario: MonitorScenario, run: Omit<ScenarioRun, 'scenarioVersion'>, key = SCENARIO_RUNS_STORAGE_KEY): boolean {
  const entry = runSchema.safeParse({ ...run, scenarioVersion: scenario.version });
  if (!entry.success) return false;
  const current = readScenarioRuns(storage, key);
  return write(storage, { ...current, runs: { ...current.runs, [scenario.id]: entry.data } }, key);
}

export function clearScenarioRun(storage: ProgressStorage | null, scenarioId: string, key = SCENARIO_RUNS_STORAGE_KEY): boolean {
  const current = readScenarioRuns(storage, key);
  if (!current.runs[scenarioId]) return true;
  const runs = { ...current.runs };
  delete runs[scenarioId];
  return write(storage, { ...current, runs }, key);
}

/**
 * A stored run that can be resumed for this scenario: same version, inside its duration, and an
 * action log the timeline accepts. Anything else is treated as no run.
 */
export function resumableRun(runs: ScenarioRuns, scenario: MonitorScenario): ScenarioRun | null {
  const run = runs.runs[scenario.id];
  if (!run || run.scenarioVersion !== scenario.version || run.elapsedMs <= 0 || run.elapsedMs >= scenario.durationMs) return null;
  if (run.taken.some(item => item.atMs > run.elapsedMs) || (run.recordedEndMs !== null && run.recordedEndMs > run.elapsedMs)) return null;
  try { buildScenarioTimeline(scenario, run.taken as TakenAction[]); } catch { return null; }
  return run;
}

export function browserStorageOrNull(): ProgressStorage | null {
  try { return typeof window === 'undefined' ? null : window.localStorage; } catch { return null; }
}
