import { z } from 'zod';
import type { RhythmSchedule } from '../engine/rhythm-signal';
import {
  analyseRhythm,
  buildRhythmSchedule,
  getRhythmCategory,
  rhythmCategories,
  seededRandom,
  type RhythmAnalysis,
  type RhythmCategory,
  type RhythmCategoryId,
} from './rhythms';

/**
 * One validated definition per case. The waveform, answer options, expected rate, hints and
 * explanation are all derived from it. All cases are synthetic, draft and unreviewed.
 */
const categoryIds = rhythmCategories.map(category => category.id) as [RhythmCategoryId, ...RhythmCategoryId[]];
export const UNCERTAIN_ANSWER_ID = 'uncertain' as const;
export type AnswerId = RhythmCategoryId | typeof UNCERTAIN_ANSWER_ID;

export const rhythmCaseSchema = z.strictObject({
  id: z.string().regex(/^rhythm\.[a-z0-9-]+\.\d{2}$/),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  categoryId: z.enum(categoryIds),
  difficulty: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  seed: z.number().int().min(0).max(2_147_483_647),
  rateBpm: z.number().finite().min(20).max(250),
  /** Extra acceptable answers, e.g. an explicit uncertainty answer for an inherently ambiguous strip. */
  acceptableAnswerIds: z.array(z.union([z.enum(categoryIds), z.literal(UNCERTAIN_ANSWER_ID)])).max(3),
  publicationStatus: z.literal('draft'),
  reviewStatus: z.literal('unreviewed'),
});
export type RhythmCase = z.infer<typeof rhythmCaseSchema>;

type CaseRow = [RhythmCategoryId, number, 1 | 2 | 3, number, number, AnswerId[]?];
const rows: CaseRow[] = [
  ['nsr', 1, 1, 72, 11], ['nsr', 2, 1, 88, 12],
  ['sinus-bradycardia', 1, 1, 48, 21], ['sinus-bradycardia', 2, 2, 42, 22],
  ['sinus-tachycardia', 1, 1, 118, 31], ['sinus-tachycardia', 2, 2, 135, 32],
  ['sinus-arrhythmia', 1, 2, 70, 41], ['sinus-arrhythmia', 2, 3, 64, 42],
  ['pac', 1, 2, 76, 51], ['pac', 2, 3, 82, 52],
  ['atrial-fibrillation', 1, 2, 95, 61], ['atrial-fibrillation', 2, 2, 125, 62],
  ['atrial-flutter', 1, 3, 75, 71], ['atrial-flutter', 2, 3, 72, 72],
  ['svt', 1, 2, 170, 81], ['svt', 2, 2, 190, 82],
  ['first-degree-avb', 1, 2, 68, 91], ['first-degree-avb', 2, 2, 74, 92],
  ['mobitz-1', 1, 3, 90, 101], ['mobitz-1', 2, 3, 84, 102],
  ['mobitz-2', 1, 3, 90, 111], ['mobitz-2', 2, 3, 100, 112],
  ['avb-2to1', 1, 3, 44, 121, [UNCERTAIN_ANSWER_ID]], ['avb-2to1', 2, 3, 40, 122, [UNCERTAIN_ANSWER_ID]],
  ['third-degree-avb', 1, 3, 36, 131], ['third-degree-avb', 2, 3, 32, 132],
  ['pvc', 1, 2, 74, 141], ['pvc', 2, 2, 80, 142],
  ['idioventricular', 1, 3, 36, 151], ['idioventricular', 2, 3, 42, 152],
  ['vt', 1, 2, 180, 161], ['vt', 2, 2, 200, 162],
  ['vf', 1, 1, 60, 171], ['vf', 2, 1, 60, 172],
  ['paced', 1, 2, 70, 181], ['paced', 2, 2, 78, 182],
];

export const rhythmCases: readonly RhythmCase[] = Object.freeze(rows.map(([categoryId, n, difficulty, rateBpm, seed, extra]) =>
  rhythmCaseSchema.parse({
    id: `rhythm.${categoryId}.${String(n).padStart(2, '0')}`,
    version: '0.1.0',
    categoryId,
    difficulty,
    seed,
    rateBpm,
    acceptableAnswerIds: extra ?? [],
    publicationStatus: 'draft',
    reviewStatus: 'unreviewed',
  })));

if (new Set(rhythmCases.map(item => item.id)).size !== rhythmCases.length) throw new Error('Rhythm case IDs must be unique');

export const getRhythmCase = (id: string): RhythmCase | undefined => rhythmCases.find(item => item.id === id);

export type BuiltCase = { definition: RhythmCase; category: RhythmCategory; schedule: RhythmSchedule; analysis: RhythmAnalysis };
const built = new Map<string, BuiltCase>();

/** The single path from a case definition to its waveform and facts, shared by every view. */
export function buildCase(definition: RhythmCase): BuiltCase {
  const key = `${definition.id}@${definition.version}`;
  const cached = built.get(key);
  if (cached) return cached;
  const parsed = rhythmCaseSchema.parse(definition);
  const category = getRhythmCategory(parsed.categoryId);
  if (!category) throw new Error(`Unknown rhythm category ${parsed.categoryId}`);
  const schedule = buildRhythmSchedule(parsed.categoryId, { rateBpm: parsed.rateBpm, seed: parsed.seed });
  const result = { definition: parsed, category, schedule, analysis: analyseRhythm(schedule) };
  built.set(key, result);
  return result;
}

export type RateExpectation =
  | { applicable: false; reason: string }
  | { applicable: true; bpm: number; lowBpm: number; highBpm: number; method: 'r-r-interval' | 'six-second-count'; irregular: boolean };

/** Expected ventricular rate and acceptance range, taken from the displayed signal. */
export function expectedRate(definition: RhythmCase, toleranceOverrideBpm?: number): RateExpectation {
  const { analysis } = buildCase(definition);
  if (!Number.isFinite(analysis.ventricularRateBpm)) return { applicable: false, reason: 'There are no discrete QRS complexes, so a ventricular rate cannot be measured.' };
  const irregular = analysis.regularity === 'irregular';
  const bpm = Math.round(analysis.ventricularRateBpm);
  const tolerance = toleranceOverrideBpm ?? (irregular ? Math.max(15, 0.2 * bpm) : Math.max(10, 0.1 * bpm));
  return { applicable: true, bpm, lowBpm: Math.max(0, bpm - tolerance), highBpm: bpm + tolerance, method: irregular ? 'six-second-count' : 'r-r-interval', irregular };
}

export type AnswerOption = { id: AnswerId; label: string };

/** Correct answer, three plausible alternatives, and an explicit uncertainty option; order is seeded. */
export function answerOptions(definition: RhythmCase): AnswerOption[] {
  const { category } = buildCase(definition);
  const random = seededRandom(definition.seed + 7919);
  const shuffle = <T,>(items: T[]): T[] => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  };
  const ids: AnswerId[] = shuffle([category.id, ...shuffle([...category.similarTo]).slice(0, 3)]);
  const options: AnswerOption[] = ids.map(id => ({ id, label: getRhythmCategory(id)?.label ?? id }));
  options.push({ id: UNCERTAIN_ANSWER_ID, label: 'Cannot be determined from this strip' });
  return options;
}

export const isAcceptableAnswer = (definition: RhythmCase, answerId: string) =>
  answerId === definition.categoryId || (definition.acceptableAnswerIds as string[]).includes(answerId);

const regularityText = (value: RhythmAnalysis['regularity']) => (value === 'regular' ? 'regular' : 'irregular');
const pText: Record<RhythmCategory['expected']['pRelation'], string> = {
  'one-per-qrs': 'one P wave before each QRS complex',
  'more-p-than-qrs': 'more P waves than QRS complexes',
  'some-qrs-without-p': 'some QRS complexes without a preceding P wave',
  absent: 'no visible P waves',
  fibrillatory: 'no organised P waves, only a fine fibrillatory baseline',
  'flutter-waves': 'a sawtooth baseline of flutter waves instead of discrete P waves',
};
const qrsText = { narrow: 'narrow QRS complexes', wide: 'wide QRS complexes', none: 'no discrete QRS complexes' } as const;

/** Why a wrong option does not fit: the characteristics on which it differs from this strip. */
export function distractorRationale(definition: RhythmCase, optionId: AnswerId): string {
  if (optionId === UNCERTAIN_ANSWER_ID) {
    return isAcceptableAnswer(definition, UNCERTAIN_ANSWER_ID)
      ? 'For this strip, saying the rhythm type cannot be determined is an accepted answer.'
      : 'This strip shows enough features to reach a rhythm category, so declaring it undeterminable is not the best answer here.';
  }
  const option = getRhythmCategory(optionId);
  if (!option) return '';
  const { analysis } = buildCase(definition);
  const differences: string[] = [];
  if (option.expected.regularity !== analysis.regularity) differences.push(`${option.label} is ${regularityText(option.expected.regularity)}, but this strip is ${regularityText(analysis.regularity)}`);
  if (option.expected.qrs !== analysis.qrs) differences.push(`${option.label} has ${qrsText[option.expected.qrs]}, but this strip has ${qrsText[analysis.qrs]}`);
  if (option.expected.pRelation !== analysis.pRelation) differences.push(`${option.label} shows ${pText[option.expected.pRelation]}, but this strip shows ${pText[analysis.pRelation]}`);
  if (differences.length > 0) return `${differences.join('; ')}.`;
  return `${option.label} shares the broad features of this strip; look at the finer pattern described in the explanation.`;
}

/** Progressive hints that describe the strip without naming the answer. */
export function hintsFor(definition: RhythmCase): string[] {
  const { analysis } = buildCase(definition);
  return [
    `Look at the spacing of the QRS complexes: the R–R intervals in this strip are ${regularityText(analysis.regularity)}.`,
    `Look for P waves: this strip shows ${pText[analysis.pRelation]}.`,
    `Look at the QRS shape: this strip has ${qrsText[analysis.qrs]}.`,
  ];
}

export type RateStatus = 'not-applicable' | 'not-answered' | 'invalid' | 'correct' | 'incorrect';
export type AnswerEvaluation = {
  caseId: string;
  caseVersion: string;
  answerId: string;
  rhythmCorrect: boolean;
  rateStatus: RateStatus;
  rateAnswerBpm?: number;
  points: number;
  rhythmPoints: number;
  ratePoints: number;
  feedback: string;
  explanation: string;
  rateFeedback: string;
};

export const RHYTHM_POINTS_PER_DIFFICULTY = 10;
export const RATE_POINTS = 5;
export const MAX_ANSWERABLE_RATE_BPM = 400;

/** Explanation assembled from the category text plus facts measured on this exact strip. */
export function explanationFor(definition: RhythmCase): string {
  const { category, analysis } = buildCase(definition);
  const rate = expectedRate(definition);
  const rateSentence = rate.applicable
    ? ` In this strip the ventricular rate is about ${rate.bpm} per minute${rate.irregular ? ' (six-second count × 10; an irregular rhythm changes from beat to beat, so this is an estimate)' : ' (from the R–R interval)'}.`
    : '';
  return `${category.explanation} This strip has ${regularityText(analysis.regularity)} R–R intervals, ${qrsText[analysis.qrs]} and ${pText[analysis.pRelation]}.${rateSentence}`;
}

/** Scores one answer. Accuracy only: elapsed time never changes the score. */
export function evaluateAnswer(definition: RhythmCase, answerId: string, rateAnswer?: number): AnswerEvaluation {
  const built = buildCase(definition);
  const rhythmCorrect = isAcceptableAnswer(definition, answerId);
  const rate = expectedRate(definition);
  let rateStatus: RateStatus = 'not-applicable';
  let rateFeedback = rate.applicable ? '' : rate.reason;
  if (rate.applicable) {
    if (rateAnswer === undefined) {
      rateStatus = 'not-answered';
      rateFeedback = `Expected about ${rate.bpm} per minute (accepted range ${Math.round(rate.lowBpm)}–${Math.round(rate.highBpm)}).`;
    } else if (!Number.isFinite(rateAnswer) || rateAnswer <= 0 || rateAnswer > MAX_ANSWERABLE_RATE_BPM) {
      rateStatus = 'invalid';
      rateFeedback = 'The rate entered is not a usable number of beats per minute.';
    } else {
      rateStatus = rateAnswer >= rate.lowBpm && rateAnswer <= rate.highBpm ? 'correct' : 'incorrect';
      rateFeedback = rateStatus === 'correct'
        ? `Within range: ${rateAnswer} per minute (expected about ${rate.bpm}, accepted ${Math.round(rate.lowBpm)}–${Math.round(rate.highBpm)}).`
        : `Outside range: ${rateAnswer} per minute; expected about ${rate.bpm} (accepted ${Math.round(rate.lowBpm)}–${Math.round(rate.highBpm)}).`;
    }
  }
  const rhythmPoints = rhythmCorrect ? RHYTHM_POINTS_PER_DIFFICULTY * definition.difficulty : 0;
  const ratePoints = rateStatus === 'correct' ? RATE_POINTS : 0;
  const chosen = answerId === UNCERTAIN_ANSWER_ID ? undefined : getRhythmCategory(answerId);
  const feedback = rhythmCorrect
    ? answerId === UNCERTAIN_ANSWER_ID ? 'Accepted: this strip does not allow the rhythm type to be determined.' : `Correct: ${built.category.label}.`
    : `Not quite. The best answer is ${built.category.label}. ${distractorRationale(definition, (chosen?.id ?? UNCERTAIN_ANSWER_ID) as AnswerId)}`;
  return {
    caseId: definition.id,
    caseVersion: definition.version,
    answerId,
    rhythmCorrect,
    rateStatus,
    ...(rateAnswer !== undefined && Number.isFinite(rateAnswer) ? { rateAnswerBpm: rateAnswer } : {}),
    points: rhythmPoints + ratePoints,
    rhythmPoints,
    ratePoints,
    feedback,
    explanation: explanationFor(definition),
    rateFeedback,
  };
}
