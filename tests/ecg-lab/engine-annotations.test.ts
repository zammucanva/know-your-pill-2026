import { describe, expect, it } from 'bun:test';
import {
  appendEcgAnnotation,
  removeEcgAnnotation,
  updateLearnerAnnotation,
  validateEcgAnnotation,
  type AuthoredRegionAnnotation,
  type LearnerAnnotation,
} from '@/components/ecg-lab/engine/annotations';

const learner: LearnerAnnotation = { id: 'note-1', source: 'learner', kind: 'learner-note', label: 'Manual landmark', startMs: 120, endMs: 280 };
const authored: AuthoredRegionAnnotation = {
  id: 'region-1', source: 'authored', kind: 'authored-region', semantic: 'orientation',
  contentId: 'learn.paper-speed-and-gain', contentVersion: '0.4.0', label: 'Example interval', startMs: 0, endMs: 800,
};

describe('ECG timeline annotations', () => {
  it('keeps learner and authored provenance distinct while accepting complete records', () => {
    expect(validateEcgAnnotation(learner)).toEqual(learner);
    expect(validateEcgAnnotation(authored)).toEqual(authored);
    expect(() => validateEcgAnnotation({ ...authored, contentVersion: ' ' })).toThrow(RangeError);
    expect(() => validateEcgAnnotation({ ...learner, startMs: 281 })).toThrow(RangeError);
  });

  it('adds, updates and removes learner notes immutably without altering authored regions', () => {
    const source = [learner, authored];
    const added = appendEcgAnnotation(source, { ...learner, id: 'note-2', label: 'Second note' });
    const updated = updateLearnerAnnotation(added, 'note-1', { label: 'Selected landmark', endMs: 300 });

    expect(updated[0]).toEqual({ ...learner, label: 'Selected landmark', endMs: 300 });
    expect(updated[1]).toBe(authored);
    expect(updateLearnerAnnotation(source, authored.id, { label: 'Not permitted' })).toBe(source);
    expect(removeEcgAnnotation(updated, 'note-2').map(annotation => annotation.id)).toEqual(['note-1', 'region-1']);
    expect(source).toEqual([learner, authored]);
    expect(() => appendEcgAnnotation(source, learner)).toThrow(RangeError);
  });
});
