import { z } from 'zod';
import { getRhythmCase, type RhythmCase } from '../rhythm/cases';

/**
 * Fictional patient cases. Each one points at an existing rhythm case, so the ECG is the same
 * waveform definition, rate expectation and scoring used by the Rhythm Challenge. No heart rate is
 * stored here: it is taken from the displayed strip after the learner answers. Everything is
 * invented teaching material, draft and unreviewed.
 */
export const patientAgeRanges = ['18–30 years', '31–45 years', '46–60 years', '61–75 years', 'over 75 years'] as const;

const shortText = (min: number, max: number) => z.string().trim().min(min).max(max);

export const patientCaseSchema = z.strictObject({
  id: z.string().regex(/^patient\.[a-z0-9-]+\.\d{2}$/),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  title: shortText(3, 120),
  rhythmCaseId: z.string().regex(/^rhythm\.[a-z0-9-]+\.\d{2}$/),
  ageRange: z.enum(patientAgeRanges),
  presentation: shortText(20, 600),
  symptoms: z.array(shortText(3, 160)).min(1).max(6),
  history: z.array(shortText(3, 160)).max(6),
  /** Simulated observations. Heart rate is deliberately absent; see the module comment. */
  observations: z.array(z.strictObject({ label: shortText(2, 60), value: shortText(1, 60) })).min(2).max(6),
  /** Skills practised; these are not clinical statements. */
  learningObjectives: z.array(shortText(10, 200)).min(1).max(4),
  caveats: z.array(shortText(10, 240)).min(1).max(3),
  /** Escalation guidance must be reviewed before it exists, so release 1 can only hold null. */
  escalation: z.null(),
  publicationStatus: z.literal('draft'),
  reviewStatus: z.literal('unreviewed'),
}).superRefine((value, context) => {
  if (value.observations.some(item => /heart rate|pulse/i.test(item.label))) {
    context.addIssue({ code: 'custom', path: ['observations'], message: 'Heart rate comes from the ECG strip, not from stored observations.' });
  }
});
export type PatientCase = z.infer<typeof patientCaseSchema>;

const base = { version: '0.1.0', escalation: null, publicationStatus: 'draft', reviewStatus: 'unreviewed' } as const;

const rawCases: unknown[] = [
  {
    ...base,
    id: 'patient.awareness-after-exercise.01',
    title: 'Awareness of the heartbeat after exercise',
    rhythmCaseId: 'rhythm.nsr.01',
    ageRange: '18–30 years',
    presentation: 'A fictional patient attends a routine appointment. They describe becoming aware of their heartbeat for a few minutes after climbing stairs. They feel well today.',
    symptoms: ['Awareness of the heartbeat after exertion', 'No chest pain', 'No fainting'],
    history: ['No known heart condition (fictional)', 'Does not smoke (fictional)'],
    observations: [{ label: 'Blood pressure', value: '118/74 mmHg' }, { label: 'Oxygen saturation', value: '99% on room air' }, { label: 'Respiratory rate', value: '14 per minute' }, { label: 'Temperature', value: '36.7 °C' }],
    learningObjectives: ['Estimate the heart rate from a six-second strip.', 'Decide whether the R–R intervals are regular.', 'Check for a P wave before each QRS complex.'],
    caveats: ['A single resting strip cannot show what happens during symptoms.'],
  },
  {
    ...base,
    id: 'patient.irregular-heartbeat.01',
    title: 'An irregular heartbeat for several days',
    rhythmCaseId: 'rhythm.atrial-fibrillation.01',
    ageRange: '61–75 years',
    presentation: 'A fictional patient describes an irregular heartbeat, on and off for several days, with some tiredness. They have not fainted.',
    symptoms: ['Irregular heartbeat', 'Tiredness', 'No fainting'],
    history: ['No previous ECG available (fictional)'],
    observations: [{ label: 'Blood pressure', value: '134/82 mmHg' }, { label: 'Oxygen saturation', value: '97% on room air' }, { label: 'Respiratory rate', value: '16 per minute' }, { label: 'Temperature', value: '36.6 °C' }],
    learningObjectives: ['Estimate the rate of an irregular rhythm by counting QRS complexes in six seconds.', 'Recognise irregular R–R intervals.', 'Look for organised P waves.'],
    caveats: ['For an irregular rhythm the six-second count is only an estimate of the rate.', 'A single strip cannot establish a cause.'],
  },
  {
    ...base,
    id: 'patient.sudden-fast-heartbeat.01',
    title: 'A sudden, fast, regular heartbeat',
    rhythmCaseId: 'rhythm.svt.01',
    ageRange: '31–45 years',
    presentation: 'A fictional patient describes a very fast, regular heartbeat that began while sitting at a desk. They feel lightheaded and anxious.',
    symptoms: ['Fast, regular heartbeat', 'Lightheadedness', 'Anxiety'],
    history: ['No known heart condition (fictional)'],
    observations: [{ label: 'Blood pressure', value: '112/70 mmHg' }, { label: 'Oxygen saturation', value: '98% on room air' }, { label: 'Respiratory rate', value: '18 per minute' }, { label: 'Temperature', value: '36.8 °C' }],
    learningObjectives: ['Count a fast rate from a six-second strip.', 'Decide whether the rhythm is regular.', 'Describe the QRS width and whether P waves are visible.'],
    caveats: ['Very fast rates are hard to count; the R–R interval method can help.', 'A single strip cannot establish a cause.'],
  },
  {
    ...base,
    id: 'patient.routine-ecg-before-sport.01',
    title: 'A routine ECG before joining a sports programme',
    rhythmCaseId: 'rhythm.first-degree-avb.01',
    ageRange: '18–30 years',
    presentation: 'A fictional patient has a routine ECG recorded before joining a new sports programme. They have no symptoms.',
    symptoms: ['No symptoms'],
    history: ['Regular exercise (fictional)'],
    observations: [{ label: 'Blood pressure', value: '116/72 mmHg' }, { label: 'Oxygen saturation', value: '99% on room air' }, { label: 'Respiratory rate', value: '12 per minute' }],
    learningObjectives: ['Check that every P wave is followed by a QRS complex.', 'Compare the gap between P wave and QRS across beats.', 'Estimate the rate.'],
    caveats: ['An incidental finding on one strip needs clinical context; this exercise only practises recognising the pattern.'],
  },
  {
    ...base,
    id: 'patient.skipped-beats.01',
    title: 'Occasional skipped beats',
    rhythmCaseId: 'rhythm.pvc.01',
    ageRange: '46–60 years',
    presentation: 'A fictional patient describes occasional skipped or thumping beats lasting a few seconds, mostly when resting. They have not fainted.',
    symptoms: ['Occasional skipped or thumping beats', 'No fainting'],
    history: ['Drinks several cups of coffee a day (fictional)'],
    observations: [{ label: 'Blood pressure', value: '126/80 mmHg' }, { label: 'Oxygen saturation', value: '98% on room air' }, { label: 'Respiratory rate', value: '15 per minute' }, { label: 'Temperature', value: '36.6 °C' }],
    learningObjectives: ['Find the beat that comes early.', 'Describe its width and whether a P wave precedes it.', 'Notice the pause after it.'],
    caveats: ['A short strip may not capture every symptom.', 'A single strip cannot establish a cause.'],
  },
  {
    ...base,
    id: 'patient.unwell-with-fast-pulse.01',
    title: 'Feeling unwell with a fast heartbeat',
    rhythmCaseId: 'rhythm.sinus-tachycardia.01',
    ageRange: '31–45 years',
    presentation: 'A fictional patient feels hot and tired and has had a fast heartbeat since the morning. They have a raised temperature.',
    symptoms: ['Fast heartbeat', 'Feeling hot and tired'],
    history: ['Symptoms started this morning (fictional)'],
    observations: [{ label: 'Blood pressure', value: '124/76 mmHg' }, { label: 'Oxygen saturation', value: '97% on room air' }, { label: 'Respiratory rate', value: '20 per minute' }, { label: 'Temperature', value: '38.6 °C' }],
    learningObjectives: ['Estimate the rate from the strip.', 'Check that each QRS has a P wave before it.', 'Separate what the strip shows from what it cannot show.'],
    caveats: ['The strip shows the rhythm, not why the rate is fast.'],
  },
];

export const patientCases: readonly PatientCase[] = Object.freeze(rawCases.map(item => patientCaseSchema.parse(item)));

if (new Set(patientCases.map(item => item.id)).size !== patientCases.length) throw new Error('Patient case IDs must be unique');

export type ResolvedPatientCase =
  | { ok: true; patient: PatientCase; rhythm: RhythmCase }
  | { ok: false; reason: string };

/** Loads a patient case and the rhythm case it points at; anything missing or invalid fails safely. */
export function resolvePatientCase(id: string, registry: readonly PatientCase[] = patientCases): ResolvedPatientCase {
  const candidate = registry.find(item => item.id === id);
  if (!candidate) return { ok: false, reason: 'This case is not available.' };
  const parsed = patientCaseSchema.safeParse(candidate);
  if (!parsed.success) return { ok: false, reason: 'This case is not valid and cannot be shown.' };
  const rhythm = getRhythmCase(parsed.data.rhythmCaseId);
  if (!rhythm) return { ok: false, reason: 'The ECG for this case is not available.' };
  return { ok: true, patient: parsed.data, rhythm };
}
