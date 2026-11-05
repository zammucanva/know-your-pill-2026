import { z } from 'zod';
import type { ProgressStorage } from '../learn/progress';
import type { ExerciseDefinition } from './definitions';
import { exerciseReadingSchema, type ExerciseReading } from './readings';

/**
 * Learner-owned exercise progress. It is stored apart from authored exercise definitions and from
 * experiment snapshots, and is always validated as untrusted input on load.
 */
export const EXERCISE_PROGRESS_STORAGE_KEY = 'ecg-lab-exercise-progress-v1';
export const EXERCISE_PROGRESS_VERSION = 1 as const;
export const MAX_TRACKED_EXERCISES = 50;
export const MAX_SERIALIZED_PROGRESS_CHARS = 100_000;

const exerciseEntrySchema = z.strictObject({
  definitionVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
  attempts: z.number().int().min(0).max(10_000),
  passed: z.boolean(),
  readings: z.array(exerciseReadingSchema).max(2),
});

export const exerciseProgressSchema = z.strictObject({
  version: z.literal(EXERCISE_PROGRESS_VERSION),
  exercises: z.record(z.string().regex(/^[a-z][a-z0-9-]{2,60}$/), exerciseEntrySchema),
}).refine(progress => Object.keys(progress.exercises).length <= MAX_TRACKED_EXERCISES, { message: 'Too many tracked exercises.' });

export type ExerciseProgress = z.infer<typeof exerciseProgressSchema>;
export type ExerciseEntry = z.infer<typeof exerciseEntrySchema>;

export type ExerciseProgressLoad = { progress: ExerciseProgress; notice?: string };

export const emptyExerciseProgress = (): ExerciseProgress => ({ version: EXERCISE_PROGRESS_VERSION, exercises: {} });

/** Returns safe defaults and a notice (never throws) for blocked, oversized, corrupt or incompatible storage. */
export function readExerciseProgress(storage: ProgressStorage, key = EXERCISE_PROGRESS_STORAGE_KEY): ExerciseProgressLoad {
  let serialized: string | null;
  try {
    serialized = storage.getItem(key);
  } catch {
    return { progress: emptyExerciseProgress(), notice: 'Browser storage is unavailable, so exercise progress will not be kept.' };
  }
  if (serialized === null) return { progress: emptyExerciseProgress() };
  if (serialized.length <= MAX_SERIALIZED_PROGRESS_CHARS) {
    try {
      const parsed = exerciseProgressSchema.safeParse(JSON.parse(serialized));
      if (parsed.success) return { progress: parsed.data };
    } catch {
      // Falls through to the discard path below.
    }
  }
  try {
    storage.removeItem(key);
  } catch {
    // Read-only storage still yields a usable in-memory state.
  }
  return { progress: emptyExerciseProgress(), notice: 'Saved exercise progress was unreadable or from an incompatible version and was discarded.' };
}

export function writeExerciseProgress(storage: ProgressStorage, progress: ExerciseProgress, key = EXERCISE_PROGRESS_STORAGE_KEY): boolean {
  const parsed = exerciseProgressSchema.safeParse(progress);
  if (!parsed.success) return false;
  try {
    const serialized = JSON.stringify(parsed.data);
    if (serialized.length > MAX_SERIALIZED_PROGRESS_CHARS) return false;
    storage.setItem(key, serialized);
    return true;
  } catch {
    return false;
  }
}

const freshEntry = (definition: ExerciseDefinition): ExerciseEntry => ({ definitionVersion: definition.version, attempts: 0, passed: false, readings: [] });

/** An entry recorded against another definition version is stale and is treated as not started. */
export function entryFor(progress: ExerciseProgress, definition: ExerciseDefinition): ExerciseEntry {
  const entry = progress.exercises[definition.id];
  return entry && entry.definitionVersion === definition.version ? entry : freshEntry(definition);
}

function withEntry(progress: ExerciseProgress, definition: ExerciseDefinition, entry: ExerciseEntry): ExerciseProgress {
  return { ...progress, exercises: { ...progress.exercises, [definition.id]: entry } };
}

/** Records a reading; once an exercise has its required readings, a further reading replaces the oldest. */
export function recordReading(progress: ExerciseProgress, definition: ExerciseDefinition, reading: ExerciseReading): ExerciseProgress {
  const validReading = exerciseReadingSchema.parse(reading);
  const entry = entryFor(progress, definition);
  const readings = [...entry.readings, validReading].slice(-definition.requiredReadings);
  return withEntry(progress, definition, { ...entry, readings, passed: false });
}

export function recordCheckResult(progress: ExerciseProgress, definition: ExerciseDefinition, passed: boolean): ExerciseProgress {
  const entry = entryFor(progress, definition);
  return withEntry(progress, definition, { ...entry, attempts: Math.min(10_000, entry.attempts + 1), passed: entry.passed || passed });
}

/** Retry clears readings so the learner can try again; attempts and an earlier pass are kept. */
export function retryExercise(progress: ExerciseProgress, definition: ExerciseDefinition): ExerciseProgress {
  return withEntry(progress, definition, { ...entryFor(progress, definition), readings: [] });
}

/** Reset removes every trace of the learner's work on this exercise. */
export function resetExercise(progress: ExerciseProgress, definition: ExerciseDefinition): ExerciseProgress {
  const { [definition.id]: _removed, ...rest } = progress.exercises;
  void _removed;
  return { ...progress, exercises: rest };
}
