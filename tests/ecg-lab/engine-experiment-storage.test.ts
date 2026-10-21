import { describe, expect, it } from 'bun:test';
import {
  deleteExperiment,
  EXPERIMENT_STORAGE_KEY,
  MAX_SAVED_EXPERIMENTS,
  MAX_SERIALIZED_EXPERIMENTS_BYTES,
  readSavedExperiments,
  saveExperiment,
  uniqueExperimentName,
  type ExperimentStorage,
} from '@/components/ecg-lab/engine/experiment-storage';
import { createExperimentState } from '@/components/ecg-lab/engine/experiment-state';

function memoryStorage(initial: string | null = null): ExperimentStorage & { value: string | null; failWrite: boolean } {
  return {
    value: initial,
    failWrite: false,
    getItem: () => initial === null ? null : initial,
    setItem(_key, value) {
      if (this.failWrite) throw new Error('full');
      this.value = value;
      initial = value;
    },
    removeItem: () => { initial = null; },
  };
}

function example(id = 'example-1', name = 'Example experiment') {
  return createExperimentState({
    snapshotId: id,
    name,
    theme: 'light',
    machine: { lead: 'V3', paperSpeed: 25, gain: 20, showGrid: true, preset: 'sinus' },
    view: 'single',
    playback: { elapsedMs: 800, wasPlaying: true },
    measurements: [{ id: 'rr', name: 'R–R', kind: 'RR', startMs: 0, endMs: 800 }],
    selectedMeasurementId: 'rr',
    annotations: [{ id: 'note', source: 'learner', kind: 'learner-note', label: 'Learner note', startMs: 0, endMs: 800 }],
    selectedAnnotationId: 'note',
    authoredRegionReferences: [],
  }, '2026-10-20T00:00:00.000Z');
}

describe('local experiment storage', () => {
  it('saves, reloads and deletes a validated experiment without a network dependency', () => {
    const storage = memoryStorage();
    const state = example();
    expect(saveExperiment(storage, state).success).toBe(true);
    expect(storage.value).toContain(EXPERIMENT_STORAGE_KEY.includes('experiments') ? 'example-1' : '');
    expect(readSavedExperiments(storage).snapshots).toEqual([state]);
    expect(deleteExperiment(storage, state.snapshotId).snapshots).toEqual([]);
  });

  it('isolates corrupt entries and reports malformed or unavailable storage', () => {
    const corrupt = JSON.stringify({ version: 1, snapshots: [example(), { invalid: true }] });
    const storage = memoryStorage(corrupt);
    const read = readSavedExperiments(storage);
    expect(read.success).toBe(true);
    expect(read.snapshots).toHaveLength(1);
    expect(read.discardedCount).toBe(1);

    const malformed = memoryStorage('{not json}');
    expect(readSavedExperiments(malformed).success).toBe(false);
    const unwritable = memoryStorage();
    unwritable.failWrite = true;
    expect(saveExperiment(unwritable, example()).success).toBe(false);
  });

  it('does not overwrite snapshot IDs and makes duplicate display names clear', () => {
    const storage = memoryStorage();
    const first = example();
    expect(saveExperiment(storage, first).success).toBe(true);
    expect(saveExperiment(storage, first).success).toBe(false);
    expect(uniqueExperimentName([first], 'Example experiment')).toBe('Example experiment (2)');
  });
});

describe('local experiment storage failure policy', () => {
  it('reports blocked reads, oversized records and exhausted save limits without losing stored work', () => {
    const blocked: ExperimentStorage = { getItem: () => { throw new Error('blocked'); }, setItem: () => undefined, removeItem: () => undefined };
    expect(readSavedExperiments(blocked)).toMatchObject({ success: false, snapshots: [] });
    expect(saveExperiment(blocked, example()).success).toBe(false);
    expect(readSavedExperiments(memoryStorage('x'.repeat(MAX_SERIALIZED_EXPERIMENTS_BYTES + 1))).success).toBe(false);

    const storage = memoryStorage();
    for (let index = 0; index < MAX_SAVED_EXPERIMENTS; index += 1) {
      expect(saveExperiment(storage, example('example-' + index, 'Experiment ' + index)).success).toBe(true);
    }
    const before = storage.value;
    const overflow = saveExperiment(storage, example('example-over', 'Overflow'));
    expect(overflow.success).toBe(false);
    expect(storage.value).toBe(before);
  });

  it('keeps the stored list unchanged when a write fails and when deleting a missing snapshot', () => {
    const storage = memoryStorage();
    expect(saveExperiment(storage, example('a', 'A')).success).toBe(true);
    const before = storage.value;
    storage.failWrite = true;
    const failed = saveExperiment(storage, example('b', 'B'));
    expect(failed.success).toBe(false);
    expect(failed.message).toMatch(/not saved/i);
    expect(deleteExperiment(storage, 'a').success).toBe(false);
    storage.failWrite = false;
    expect(storage.value).toBe(before);
    expect(deleteExperiment(storage, 'missing').success).toBe(false);
    expect(readSavedExperiments(storage).snapshots.map(item => item.snapshotId)).toEqual(['a']);
  });

  it('rejects an invalid snapshot before touching storage and survives a reload of the same bytes', () => {
    const storage = memoryStorage();
    const invalid = { ...example(), playback: { elapsedMs: -1, wasPlaying: false } };
    expect(saveExperiment(storage, invalid).success).toBe(false);
    expect(storage.value).toBeNull();
    saveExperiment(storage, example('keep', 'Keep'));
    const reloaded = memoryStorage(storage.value);
    expect(readSavedExperiments(reloaded).snapshots).toEqual(readSavedExperiments(storage).snapshots);
  });
});