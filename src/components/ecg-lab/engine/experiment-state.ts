import { z } from 'zod';
import type { LearnerAnnotation } from './annotations';
import type { ManualMeasurementSet } from './measurement-sets';

export const EXPERIMENT_STATE_VERSION = 1 as const;

const measurementKindSchema = z.enum(['RR', 'PR', 'QRS', 'QT']);
const paperSpeedSchema = z.union([z.literal(12.5), z.literal(25), z.literal(50)]);
const gainSchema = z.union([z.literal(5), z.literal(10), z.literal(20)]);
const leadSchema = z.enum(['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6']);
const presetSchema = z.enum(['sinus', 'brady', 'tachy', 'afib']);
const nonEmpty = z.string().trim().min(1).max(180);
const snapshotIdSchema = z.string().trim().min(1).max(100).regex(/^[a-z0-9]+(?:[-.][a-z0-9]+)*$/);
const snapshotNameSchema = z.string().trim().min(1).max(80);
const timeSchema = z.number().finite().min(0).max(86_400_000);

const measurementSetSchema = z.strictObject({
  id: nonEmpty,
  name: z.string().max(180),
  kind: measurementKindSchema,
  startMs: timeSchema,
  endMs: timeSchema,
});

const learnerAnnotationSchema = z.strictObject({
  id: nonEmpty,
  source: z.literal('learner'),
  kind: z.literal('learner-note'),
  label: nonEmpty,
  startMs: timeSchema,
  endMs: timeSchema,
});

const authoredRegionReferenceSchema = z.strictObject({
  id: nonEmpty,
  contentId: nonEmpty,
  contentVersion: z.string().regex(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/),
});

export const experimentStateSchema = z.strictObject({
  version: z.literal(EXPERIMENT_STATE_VERSION),
  snapshotId: snapshotIdSchema,
  name: snapshotNameSchema,
  savedAt: z.iso.datetime({ offset: true }),
  theme: z.enum(['light', 'dark']),
  machine: z.strictObject({
    lead: leadSchema,
    paperSpeed: paperSpeedSchema,
    gain: gainSchema,
    showGrid: z.boolean(),
    preset: presetSchema,
  }),
  view: z.enum(['single', 'multi']),
  playback: z.strictObject({ elapsedMs: timeSchema, wasPlaying: z.boolean() }),
  measurements: z.array(measurementSetSchema).max(50),
  selectedMeasurementId: z.string().nullable(),
  annotations: z.array(learnerAnnotationSchema).max(100),
  selectedAnnotationId: z.string().nullable(),
  /** References only: snapshots can never replace authored educational content. */
  authoredRegionReferences: z.array(authoredRegionReferenceSchema).max(50),
}).superRefine((state, context) => {
  const assertUnique = (records: { id: string }[], path: 'measurements' | 'annotations' | 'authoredRegionReferences') => {
    const ids = records.map(record => record.id);
    if (new Set(ids).size !== ids.length) {
      context.addIssue({ code: 'custom', path: [path], message: `${path} IDs must be unique.` });
    }
  };
  assertUnique(state.measurements, 'measurements');
  assertUnique(state.annotations, 'annotations');
  assertUnique(state.authoredRegionReferences, 'authoredRegionReferences');
  state.measurements.forEach((set, index) => {
    if (set.endMs < set.startMs) context.addIssue({ code: 'custom', path: ['measurements', index], message: 'A measurement end must be at or after its start.' });
  });
  state.annotations.forEach((annotation, index) => {
    if (annotation.endMs < annotation.startMs) context.addIssue({ code: 'custom', path: ['annotations', index], message: 'An annotation end must be at or after its start.' });
  });
  if (state.selectedMeasurementId && !state.measurements.some(set => set.id === state.selectedMeasurementId)) {
    context.addIssue({ code: 'custom', path: ['selectedMeasurementId'], message: 'The selected measurement must be present.' });
  }
  if (state.selectedAnnotationId && !state.annotations.some(annotation => annotation.id === state.selectedAnnotationId)) {
    context.addIssue({ code: 'custom', path: ['selectedAnnotationId'], message: 'The selected annotation must be present.' });
  }
});

export type ExperimentState = z.infer<typeof experimentStateSchema>;

export type ExperimentSnapshotInput = Omit<ExperimentState, 'version' | 'savedAt' | 'measurements' | 'annotations'> & {
  measurements: ManualMeasurementSet[];
  annotations: LearnerAnnotation[];
};

/** Creates a validated, serializable experiment boundary without reading or writing browser storage. */
export function createExperimentState(input: ExperimentSnapshotInput, savedAt = new Date().toISOString()): ExperimentState {
  return experimentStateSchema.parse({ ...input, version: EXPERIMENT_STATE_VERSION, savedAt });
}

/** Invalid or outdated serialized state has no authority over the active simulator. */
export function parseExperimentState(input: unknown): ExperimentState | null {
  const result = experimentStateSchema.safeParse(input);
  return result.success ? result.data : null;
}
