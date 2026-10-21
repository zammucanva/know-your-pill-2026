import { createMeasurement, type Measurement, type MeasurementKind } from './measurements';

export type ManualMeasurementSet = {
  id: string;
  name: string;
  kind: MeasurementKind;
  startMs: number;
  endMs: number;
};

export type ManualMeasurementSetUpdate = Partial<Pick<ManualMeasurementSet, 'name' | 'kind' | 'startMs' | 'endMs'>>;

/** Adds a measurement set without mutating the caller's collection. IDs are unique within the active workspace. */
export function appendManualMeasurementSet(sets: ManualMeasurementSet[], next: ManualMeasurementSet): ManualMeasurementSet[] {
  if (!next.id.trim() || sets.some(set => set.id === next.id)) {
    throw new RangeError('A manual measurement set requires a unique, non-empty ID');
  }
  return [...sets, { ...next }];
}

/** Updates one set immutably; a missing ID leaves the original array untouched. */
export function updateManualMeasurementSet(sets: ManualMeasurementSet[], id: string, update: ManualMeasurementSetUpdate): ManualMeasurementSet[] {
  const index = sets.findIndex(set => set.id === id);
  if (index < 0) return sets;
  const result = [...sets];
  result[index] = { ...sets[index], ...update };
  return result;
}

/** Removes only the requested set and preserves the relative order of the others. */
export function removeManualMeasurementSet(sets: ManualMeasurementSet[], id: string): ManualMeasurementSet[] {
  return sets.filter(set => set.id !== id);
}

/** Uses the shared absolute-time measurement calculation; display settings are not inputs. */
export function summarizeManualMeasurementSet(set: ManualMeasurementSet): Measurement {
  return createMeasurement(set.kind, set.startMs, set.endMs);
}
