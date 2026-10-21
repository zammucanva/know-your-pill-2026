import { z } from 'zod';

const timeSchema = z.number().finite().min(0).max(86_400_000);

/** A learner-recorded observation: the display settings and marker times at the moment of recording. */
export const exerciseReadingSchema = z.strictObject({
  lead: z.enum(['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6']),
  paperSpeed: z.union([z.literal(12.5), z.literal(25), z.literal(50)]),
  gain: z.union([z.literal(5), z.literal(10), z.literal(20)]),
  preset: z.enum(['sinus', 'brady', 'tachy', 'afib']),
  startMs: timeSchema,
  endMs: timeSchema,
  /** Learner-reported width of the marked interval, only used by the paper-speed exercise. */
  answerMm: z.number().finite().min(0).max(10_000).optional(),
  /** Second learner-reported length in millimetres (the calibration-pulse width in the grid exercise). */
  answerMm2: z.number().finite().min(0).max(10_000).optional(),
}).refine(reading => reading.endMs >= reading.startMs, { message: 'A reading end must be at or after its start.', path: ['endMs'] });

export type ExerciseReading = z.infer<typeof exerciseReadingSchema>;
