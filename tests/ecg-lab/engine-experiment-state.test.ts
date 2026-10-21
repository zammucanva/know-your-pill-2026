import { describe, expect, it } from 'bun:test';
import { createExperimentState, EXPERIMENT_STATE_VERSION, parseExperimentState } from '@/components/ecg-lab/engine/experiment-state';

const snapshot = {
  snapshotId: 'experiment-1',
  name: 'My calibrated run',
  theme: 'light' as const,
  machine: { lead: 'V3' as const, paperSpeed: 25 as const, gain: 20 as const, showGrid: true, preset: 'sinus' as const },
  view: 'single' as const,
  playback: { elapsedMs: 1_200, wasPlaying: false },
  measurements: [{ id: 'rr-1', name: 'R–R interval', kind: 'RR' as const, startMs: 400, endMs: 1_200 }],
  selectedMeasurementId: 'rr-1',
  annotations: [{ id: 'note-1', source: 'learner' as const, kind: 'learner-note' as const, label: 'Learner landmark', startMs: 400, endMs: 1_200 }],
  selectedAnnotationId: 'note-1',
  authoredRegionReferences: [],
};

describe('versioned experiment state', () => {
  it('creates a serializable, validated snapshot with only supported learning state', () => {
    const state = createExperimentState(snapshot, '2026-10-20T00:00:00.000Z');

    expect(state.version).toBe(EXPERIMENT_STATE_VERSION);
    expect(parseExperimentState(JSON.parse(JSON.stringify(state)))).toEqual(state);
    expect(JSON.stringify(state)).not.toContain('patient');
  });

  it('rejects stale, malformed and contradictory state without changing the active simulator', () => {
    const state = createExperimentState(snapshot, '2026-10-20T00:00:00.000Z');
    expect(parseExperimentState({ ...state, version: 2 })).toBeNull();
    expect(parseExperimentState({ ...state, selectedMeasurementId: 'missing' })).toBeNull();
    expect(parseExperimentState({ ...state, annotations: [{ ...snapshot.annotations[0], endMs: 20, startMs: 40 }] })).toBeNull();
    expect(parseExperimentState('{not json}')).toBeNull();
  });

  it('stores authored regions as exact references only and does not accept duplicate IDs', () => {
    const state = createExperimentState(snapshot, '2026-10-20T00:00:00.000Z');
    expect(parseExperimentState({
      ...state,
      authoredRegionReferences: [{ id: 'authored-1', contentId: 'learn.example', contentVersion: '0.1.0' }],
    })?.authoredRegionReferences[0]).toEqual({ id: 'authored-1', contentId: 'learn.example', contentVersion: '0.1.0' });
    expect(parseExperimentState({ ...state, annotations: [{ id: 'authored-1', source: 'authored', kind: 'authored-region' } ] })).toBeNull();
    expect(parseExperimentState({ ...state, authoredRegionReferences: [{ id: 'authored-1', contentId: 'learn.example', contentVersion: '0.1.0' }, { id: 'authored-1', contentId: 'learn.example', contentVersion: '0.1.0' }] })).toBeNull();
    expect(parseExperimentState({ ...state, measurements: [state.measurements[0], { ...state.measurements[0] }] })).toBeNull();
  });
});
