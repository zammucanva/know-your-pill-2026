import { z } from 'zod';

/**
 * Authored guided-exercise definitions. These are read-only teaching scaffolds, separate from
 * learner-owned progress, measurements and annotations. Release 1 can only be `draft`/`unreviewed`:
 * no exercise has source, educational or medical review, and none is published to the Learn catalog.
 */
export const exerciseKinds = ['rr-interval', 'gain-invariance', 'cross-lead-beat', 'paper-speed-grid', 'grid-calibration'] as const;
export type ExerciseKind = (typeof exerciseKinds)[number];

export const exerciseToleranceSchema = z.strictObject({
  /** Maximum distance between a placed marker and the signal model's event time. */
  timeMs: z.number().finite().positive().max(200),
  /** Maximum difference between two readings of the same interval taken under different display settings. */
  invarianceMs: z.number().finite().positive().max(200),
  /** Maximum error in a learner-reported interval width on the logical paper. */
  widthMm: z.number().finite().positive().max(10),
});
export type ExerciseTolerance = z.infer<typeof exerciseToleranceSchema>;

export const exerciseDefinitionSchema = z.strictObject({
  id: z.string().regex(/^[a-z][a-z0-9-]{2,60}$/),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  kind: z.enum(exerciseKinds),
  publicationStatus: z.literal('draft'),
  reviewStatus: z.literal('unreviewed'),
  title: z.string().min(3).max(120),
  objective: z.string().min(10).max(400),
  principle: z.string().min(10).max(700),
  /** Optional progressive hints, written about this simulator only. */
  hints: z.array(z.string().min(5).max(300)).max(3),
  steps: z.array(z.strictObject({ id: z.string().regex(/^[a-z][a-z0-9-]{1,40}$/), instruction: z.string().min(5).max(400) })).min(1).max(6),
  requiredReadings: z.union([z.literal(1), z.literal(2)]),
  tolerance: exerciseToleranceSchema,
}).superRefine((definition, context) => {
  if (new Set(definition.steps.map(step => step.id)).size !== definition.steps.length) {
    context.addIssue({ code: 'custom', path: ['steps'], message: 'Step IDs must be unique.' });
  }
});
export type ExerciseDefinition = z.infer<typeof exerciseDefinitionSchema>;

const DEFAULT_TOLERANCE: ExerciseTolerance = { timeMs: 40, invarianceMs: 8, widthMm: 1 };

const rawDefinitions: unknown[] = [
  {
    id: 'rr-interval-measurement',
    version: '0.1.0',
    kind: 'rr-interval',
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
    title: 'Measure an R–R interval',
    objective: 'Place Start and End on two consecutive R-wave peaks of the synthetic trace and read the beat-to-beat interval.',
    principle: 'An interval is the difference between two absolute times. The R–R interval is the time from one R peak to the next consecutive R peak; heart rate in beats per minute is 60 000 ms divided by that interval.',
    hints: [
      'In most leads the R wave is the tallest, sharpest peak. Pick one and then the very next one.',
      'Pause playback first so the trace stands still, then fine-tune with the numeric fields.',
      'Start and End must sit on neighbouring peaks, not two peaks apart.',
    ],
    steps: [
      { id: 'select-rr', instruction: 'Select a measurement set (use the R–R interval set) and choose Start.' },
      { id: 'place-markers', instruction: 'Pause playback, then click the peak of one R wave for Start and the peak of the next R wave for End.' },
      { id: 'record-check', instruction: 'Choose Record reading, then Check answer.' },
    ],
    requiredReadings: 1,
    tolerance: DEFAULT_TOLERANCE,
  },
  {
    id: 'gain-measurement-invariance',
    version: '0.1.0',
    kind: 'gain-invariance',
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
    title: 'Gain changes height, not timing',
    objective: 'Measure the same R–R interval at two gain settings and compare how the display and the measurement respond.',
    principle: 'Gain scales voltage to vertical paper distance (millimetres per millivolt). It does not move events in time, so a time interval measured from the same beats is unchanged when gain changes while the drawn amplitude scales in proportion.',
    hints: [
      'Change only the Gain control and watch the height of the trace, not where the beats sit in time.',
      'Keep Start and End exactly the same between the two readings.',
      'A taller trace on screen does not mean a longer interval.',
    ],
    steps: [
      { id: 'first-gain', instruction: 'Pause, mark two consecutive R peaks, and record a reading at the current gain.' },
      { id: 'change-gain', instruction: 'Change the Gain control to a different value. Keep the same Start and End times.' },
      { id: 'second-gain', instruction: 'Record a second reading, then choose Check answer.' },
    ],
    requiredReadings: 2,
    tolerance: DEFAULT_TOLERANCE,
  },
  {
    id: 'cross-lead-beat-matching',
    version: '0.1.0',
    kind: 'cross-lead-beat',
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
    title: 'Find the same beat in two leads',
    objective: 'Locate the QRS event of the same beat in two different leads and compare the absolute times.',
    principle: 'All leads in this simulator share one timeline. A single beat happens at one absolute time even though its drawn shape differs between leads, so matching the same beat means matching times, not shapes.',
    hints: [
      'In this simulator every lead shares one timeline, so the same beat sits at the same time in each lead.',
      'In some leads the QRS complex points downward; look for the sharpest deflection either way.',
      'Compare the time of the beat in each lead, not the shape.',
    ],
    steps: [
      { id: 'first-lead', instruction: 'Pause, choose a lead, place Start on the centre of a QRS complex, and record a reading.' },
      { id: 'second-lead', instruction: 'Choose a different lead and place Start on the QRS complex of the same beat. Record a second reading.' },
      { id: 'check', instruction: 'Choose Check answer.' },
    ],
    requiredReadings: 2,
    tolerance: DEFAULT_TOLERANCE,
  },
  {
    id: 'paper-speed-and-grid',
    version: '0.1.0',
    kind: 'paper-speed-grid',
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
    title: 'One interval, two paper speeds',
    objective: 'Measure the same R–R interval at two paper speeds and work out how wide it appears on the logical paper each time.',
    principle: 'Paper speed converts time to horizontal distance: millimetres equal seconds multiplied by millimetres per second. Doubling the speed doubles the width of the same interval on paper but leaves its duration unchanged.',
    hints: [
      'In this simulator, width in millimetres = interval in seconds × paper speed in millimetres per second.',
      'Convert the interval from milliseconds to seconds first.',
      'A faster paper speed stretches the same interval wider without changing its duration.',
    ],
    steps: [
      { id: 'first-speed', instruction: 'Pause, mark two consecutive R peaks, enter the interval width in millimetres for the current paper speed, and record a reading.' },
      { id: 'change-speed', instruction: 'Change the Paper speed control to a different value, keeping the same Start and End times.' },
      { id: 'second-speed', instruction: 'Enter the new width in millimetres, record the second reading, then choose Check answer.' },
    ],
    requiredReadings: 2,
    tolerance: DEFAULT_TOLERANCE,
  },
  {
    id: 'grid-and-calibration',
    version: '0.1.0',
    kind: 'grid-calibration',
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
    title: 'Read the calibration pulse',
    objective: 'Use the calibration pulse to work out how tall 1 mV and how wide 200 ms are on the simulator grid at two different settings.',
    principle: 'In this simulator the calibration pulse is 1 mV tall and 200 ms wide. Its height in grid millimetres equals the gain setting and its width equals 0.2 s multiplied by the paper speed setting, so changing either control resizes the pulse on the grid.',
    hints: [
      'The calibration pulse card at the top of the simulator shows the pulse for the current settings.',
      'In this simulator the pulse is 1 mV tall, so its height in millimetres equals the gain setting.',
      'In this simulator the pulse lasts 200 ms (0.2 s), so its width in millimetres is 0.2 times the paper speed setting.',
    ],
    steps: [
      { id: 'first-setting', instruction: 'Look at the calibration pulse for the current Gain and Paper speed, enter its height and width in grid millimetres, and record a reading.' },
      { id: 'change-setting', instruction: 'Change the Gain or the Paper speed so the pulse changes size.' },
      { id: 'second-setting', instruction: 'Enter the new height and width, record the second reading, then choose Check answer.' },
    ],
    requiredReadings: 2,
    tolerance: DEFAULT_TOLERANCE,
  },
];

export const exerciseRegistry: readonly ExerciseDefinition[] = Object.freeze(
  rawDefinitions.map(definition => exerciseDefinitionSchema.parse(definition)),
);

if (new Set(exerciseRegistry.map(definition => definition.id)).size !== exerciseRegistry.length) {
  throw new Error('Exercise IDs must be unique');
}

export const getExercise = (id: string): ExerciseDefinition | undefined => exerciseRegistry.find(definition => definition.id === id);
