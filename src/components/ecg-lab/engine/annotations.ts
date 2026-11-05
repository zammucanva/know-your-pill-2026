/**
 * Timeline annotations are intentionally separate from waveform samples and manual measurements.
 * Learner notes are private workspace state; authored regions require a content identity and version
 * so they cannot be mistaken for an unreviewed clinical interpretation.
 */
export type LearnerAnnotation = {
  id: string;
  source: 'learner';
  kind: 'learner-note';
  label: string;
  startMs: number;
  endMs: number;
};

export type AuthoredRegionAnnotation = {
  id: string;
  source: 'authored';
  kind: 'authored-region';
  semantic: 'orientation' | 'measurement-instruction' | 'waveform-anatomy';
  contentId: string;
  contentVersion: string;
  label: string;
  startMs: number;
  endMs: number;
};

export type EcgAnnotation = LearnerAnnotation | AuthoredRegionAnnotation;
export type LearnerAnnotationUpdate = Partial<Pick<LearnerAnnotation, 'label' | 'startMs' | 'endMs'>>;

function assertAnnotation(annotation: EcgAnnotation): void {
  if (!annotation.id.trim() || !annotation.label.trim()) {
    throw new RangeError('An annotation requires a non-empty ID and label');
  }
  if (!Number.isFinite(annotation.startMs) || !Number.isFinite(annotation.endMs) || annotation.startMs < 0 || annotation.endMs < annotation.startMs) {
    throw new RangeError('An annotation requires a finite, non-negative time range with start at or before end');
  }
  if (annotation.source === 'authored' && (!annotation.contentId.trim() || !annotation.contentVersion.trim())) {
    throw new RangeError('An authored region requires the exact content ID and version that supplied it');
  }
}

/** Validates an annotation at the domain boundary before it is rendered or persisted. */
export function validateEcgAnnotation(annotation: EcgAnnotation): EcgAnnotation {
  assertAnnotation(annotation);
  return { ...annotation };
}

/** Adds an immutable annotation. IDs are unique within an experiment workspace. */
export function appendEcgAnnotation(annotations: EcgAnnotation[], next: EcgAnnotation): EcgAnnotation[] {
  assertAnnotation(next);
  if (annotations.some(annotation => annotation.id === next.id)) {
    throw new RangeError('An annotation ID must be unique within the workspace');
  }
  return [...annotations, { ...next }];
}

/** Learner edits cannot alter provenance or turn a note into an authored teaching region. */
export function updateLearnerAnnotation(annotations: EcgAnnotation[], id: string, update: LearnerAnnotationUpdate): EcgAnnotation[] {
  const index = annotations.findIndex(annotation => annotation.id === id);
  if (index < 0 || annotations[index].source !== 'learner') return annotations;
  const next: LearnerAnnotation = { ...annotations[index], ...update };
  assertAnnotation(next);
  const result = [...annotations];
  result[index] = next;
  return result;
}

/** Deletes one annotation without changing the caller's collection or the remaining order. */
export function removeEcgAnnotation(annotations: EcgAnnotation[], id: string): EcgAnnotation[] {
  return annotations.filter(annotation => annotation.id !== id);
}
