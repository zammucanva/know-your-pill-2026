import { z } from 'zod';
import { experimentStateSchema, parseExperimentState, type ExperimentState } from './experiment-state';

export const EXPERIMENT_STORAGE_KEY = 'ecg-lab-experiments-v1';
export const MAX_SAVED_EXPERIMENTS = 20;
export const MAX_SERIALIZED_EXPERIMENTS_BYTES = 200_000;

export interface ExperimentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export type ExperimentStorageResult = {
  success: boolean;
  snapshots: ExperimentState[];
  message?: string;
  discardedCount: number;
};

const envelopeSchema = z.strictObject({
  version: z.literal(1),
  snapshots: z.array(z.unknown()).max(MAX_SAVED_EXPERIMENTS),
});

function writeSnapshots(storage: ExperimentStorage, snapshots: ExperimentState[], key: string): ExperimentStorageResult {
  const serialized = JSON.stringify({ version: 1, snapshots });
  if (serialized.length > MAX_SERIALIZED_EXPERIMENTS_BYTES) {
    return { success: false, snapshots, discardedCount: 0, message: 'Saved experiments exceed this browser storage limit.' };
  }
  try {
    storage.setItem(key, serialized);
    return { success: true, snapshots, discardedCount: 0 };
  } catch {
    return { success: false, snapshots, discardedCount: 0, message: 'Browser storage is unavailable or full. Your current experiment was not saved.' };
  }
}

/** Reads valid snapshots independently so one corrupt record does not hide valid local work. */
export function readSavedExperiments(storage: ExperimentStorage, key = EXPERIMENT_STORAGE_KEY): ExperimentStorageResult {
  let serialized: string | null;
  try {
    serialized = storage.getItem(key);
  } catch {
    return { success: false, snapshots: [], discardedCount: 0, message: 'Browser storage is unavailable.' };
  }
  if (serialized === null) return { success: true, snapshots: [], discardedCount: 0 };
  if (serialized.length > MAX_SERIALIZED_EXPERIMENTS_BYTES) {
    return { success: false, snapshots: [], discardedCount: 0, message: 'Saved experiments exceed the supported storage size.' };
  }
  try {
    const envelope = envelopeSchema.safeParse(JSON.parse(serialized));
    if (!envelope.success) throw new Error('Malformed saved experiment envelope');
    const snapshots = envelope.data.snapshots.map(parseExperimentState);
    const valid = snapshots.filter((snapshot): snapshot is ExperimentState => snapshot !== null);
    return {
      success: true,
      snapshots: valid,
      discardedCount: snapshots.length - valid.length,
      message: valid.length === snapshots.length ? undefined : 'Some invalid saved experiments were ignored.',
    };
  } catch {
    return { success: false, snapshots: [], discardedCount: 0, message: 'Saved experiments could not be read safely.' };
  }
}

export function uniqueExperimentName(existing: ExperimentState[], proposed: string): string {
  const base = proposed.trim().slice(0, 80) || 'Untitled experiment';
  const lower = new Set(existing.map(snapshot => snapshot.name.toLocaleLowerCase()));
  if (!lower.has(base.toLocaleLowerCase())) return base;
  for (let number = 2; number <= MAX_SAVED_EXPERIMENTS + 1; number += 1) {
    const suffix = ` (${number})`;
    const candidate = `${base.slice(0, 80 - suffix.length)}${suffix}`;
    if (!lower.has(candidate.toLocaleLowerCase())) return candidate;
  }
  return `${base.slice(0, 70)} ${Date.now()}`;
}

export function saveExperiment(storage: ExperimentStorage, snapshot: ExperimentState, key = EXPERIMENT_STORAGE_KEY): ExperimentStorageResult {
  if (!experimentStateSchema.safeParse(snapshot).success) {
    return { success: false, snapshots: [], discardedCount: 0, message: 'The current experiment is invalid and was not saved.' };
  }
  const current = readSavedExperiments(storage, key);
  if (!current.success) return current;
  if (current.snapshots.some(item => item.snapshotId === snapshot.snapshotId)) {
    return { success: false, snapshots: current.snapshots, discardedCount: current.discardedCount, message: 'This experiment snapshot already exists.' };
  }
  if (current.snapshots.length >= MAX_SAVED_EXPERIMENTS) {
    return { success: false, snapshots: current.snapshots, discardedCount: current.discardedCount, message: `Save limit reached (${MAX_SAVED_EXPERIMENTS} experiments). Delete one before saving another.` };
  }
  return writeSnapshots(storage, [...current.snapshots, snapshot], key);
}

export function deleteExperiment(storage: ExperimentStorage, snapshotId: string, key = EXPERIMENT_STORAGE_KEY): ExperimentStorageResult {
  const current = readSavedExperiments(storage, key);
  if (!current.success) return current;
  if (!current.snapshots.some(snapshot => snapshot.snapshotId === snapshotId)) {
    return { success: false, snapshots: current.snapshots, discardedCount: current.discardedCount, message: 'That saved experiment is no longer available.' };
  }
  return writeSnapshots(storage, current.snapshots.filter(snapshot => snapshot.snapshotId !== snapshotId), key);
}

export function createLocalExperimentStorage(): ExperimentStorage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}
