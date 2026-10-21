import { z } from 'zod';
import { patientCases, type PatientCase } from '../patients/cases';
import { getRhythmCase, rhythmCases, type AnswerEvaluation, type RhythmCase } from '../rhythm/cases';
import { rhythmCategories } from '../rhythm/rhythms';
import { summarise, type SessionState } from '../rhythm/session';
import type { ProgressStorage } from '../learn/progress';

/**
 * Academy: the single place where XP, levels, achievements, mastery and personal bests are decided.
 * It is learner-owned data, stored apart from authored content and from saved experiments, and is
 * always validated as untrusted input. Every award has a unique key, so repeating an action can never
 * pay twice. Speed is never a scoring input.
 */
export const ACADEMY_STORAGE_KEY = 'ecg-lab-academy-v1';
export const ACADEMY_VERSION = 1 as const;
export const MAX_SERIALIZED_ACADEMY_CHARS = 250_000;

/** Documented XP rules. */
export const XP_RULES = {
  exerciseCompleted: 25,
  firstCorrectRhythm: 10,
  firstCorrectRate: 5,
  repeatCorrectRhythm: 1,
  maxRepeatAwardsPerCase: 3,
  correctedAfterMiss: 5,
  sessionCompleted: 15,
  caseStudyCompleted: 15,
  caseStudyCorrectRhythm: 10,
} as const;

const isoDate = z.iso.datetime({ offset: true });
const caseStatsSchema = z.strictObject({
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  attempts: z.number().int().min(0).max(100_000),
  correct: z.number().int().min(0).max(100_000),
  rateAttempts: z.number().int().min(0).max(100_000),
  rateCorrect: z.number().int().min(0).max(100_000),
  everCorrect: z.boolean(),
  missedBefore: z.boolean(),
  repeatAwards: z.number().int().min(0).max(100),
});

export const academyProgressSchema = z.strictObject({
  version: z.literal(ACADEMY_VERSION),
  awards: z.record(z.string().min(1).max(160), z.strictObject({ xp: z.number().int().min(0).max(1000), label: z.string().min(1).max(200), at: isoDate })),
  cases: z.record(z.string().regex(/^rhythm\.[a-z0-9-]+\.\d{2}$/), caseStatsSchema),
  exercises: z.record(z.string().regex(/^[a-z][a-z0-9-]{2,60}$/), z.string().regex(/^\d+\.\d+\.\d+$/)),
  /** Completed fictional case studies. Optional in stored data so earlier version-1 records still load. */
  patients: z.record(z.string().regex(/^patient\.[a-z0-9-]+\.\d{2}$/), z.string().regex(/^\d+\.\d+\.\d+$/)).default({}),
  achievements: z.record(z.string().min(1).max(100), z.strictObject({ at: isoDate })),
  bests: z.strictObject({
    timedScore: z.number().int().min(0).max(1_000_000),
    timedAccuracyPercent: z.number().int().min(0).max(100),
    bestStreak: z.number().int().min(0).max(1000),
    sessionsCompleted: z.number().int().min(0).max(1_000_000),
  }),
  recent: z.array(z.strictObject({ label: z.string().min(1).max(200), xp: z.number().int().min(0).max(1000), at: isoDate })).max(30),
}).refine(progress => Object.keys(progress.awards).length <= 5000, { message: 'Too many awards.' });

export type AcademyProgress = z.infer<typeof academyProgressSchema>;
export type CaseStats = z.infer<typeof caseStatsSchema>;

export const emptyAcademyProgress = (): AcademyProgress => ({
  version: ACADEMY_VERSION,
  awards: {},
  cases: {},
  exercises: {},
  patients: {},
  achievements: {},
  bests: { timedScore: 0, timedAccuracyPercent: 0, bestStreak: 0, sessionsCompleted: 0 },
  recent: [],
});

export type AcademyLoad = { progress: AcademyProgress; notice?: string };

export function readAcademyProgress(storage: ProgressStorage, key = ACADEMY_STORAGE_KEY): AcademyLoad {
  let serialized: string | null;
  try {
    serialized = storage.getItem(key);
  } catch {
    return { progress: emptyAcademyProgress(), notice: 'Browser storage is unavailable, so Academy progress will not be kept.' };
  }
  if (serialized === null) return { progress: emptyAcademyProgress() };
  if (serialized.length <= MAX_SERIALIZED_ACADEMY_CHARS) {
    try {
      const parsed = academyProgressSchema.safeParse(JSON.parse(serialized));
      if (parsed.success) return { progress: parsed.data };
    } catch {
      // Falls through to the discard path.
    }
  }
  try { storage.removeItem(key); } catch { /* read-only storage still yields a usable in-memory state */ }
  return { progress: emptyAcademyProgress(), notice: 'Saved Academy progress was unreadable or from an unsupported version and was reset.' };
}

export function writeAcademyProgress(storage: ProgressStorage, progress: AcademyProgress, key = ACADEMY_STORAGE_KEY): boolean {
  const parsed = academyProgressSchema.safeParse(progress);
  if (!parsed.success) return false;
  try {
    const serialized = JSON.stringify(parsed.data);
    if (serialized.length > MAX_SERIALIZED_ACADEMY_CHARS) return false;
    storage.setItem(key, serialized);
    return true;
  } catch {
    return false;
  }
}

/** Level n needs 50 * (n - 1)^2 XP in total. */
export const xpForLevel = (level: number) => 50 * (level - 1) ** 2;
export const levelForXp = (xp: number) => Math.floor(Math.sqrt(Math.max(0, xp) / 50)) + 1;
export const totalXp = (progress: AcademyProgress) => Object.values(progress.awards).reduce((sum, award) => sum + award.xp, 0);

export type AchievementDefinition = { id: string; title: string; description: string };

export const achievementDefinitions: readonly AchievementDefinition[] = Object.freeze([
  { id: 'first-exercise', title: 'First exercise', description: 'Complete a guided exercise.' },
  { id: 'first-correct-rhythm', title: 'First rhythm identified', description: 'Identify a rhythm correctly on your first try.' },
  { id: 'ten-cases', title: 'Ten cases', description: 'Correctly identify ten different rhythm cases.' },
  { id: 'accurate-heart-rate', title: 'Rate estimator', description: 'Give five heart-rate estimates inside the accepted range.' },
  { id: 'corrected-after-review', title: 'Learning from mistakes', description: 'Correctly identify a strip you previously missed.' },
  { id: 'first-case-study', title: 'First case study', description: 'Complete a fictional patient case.' },
  { id: 'all-case-studies', title: 'Every case study', description: 'Complete every available fictional patient case.' },
  ...rhythmCategories.map(category => ({ id: `category-complete.${category.id}`, title: `${category.label}: complete`, description: `Correctly identify every ${category.label} case.` })),
]);

function recordAward(progress: AcademyProgress, key: string, xp: number, label: string, now: string): AcademyProgress {
  if (progress.awards[key] || !Number.isInteger(xp) || xp < 0) return progress;
  return {
    ...progress,
    awards: { ...progress.awards, [key]: { xp, label, at: now } },
    recent: xp > 0 ? [{ label, xp, at: now }, ...progress.recent].slice(0, 30) : progress.recent,
  };
}

/** Awards any achievement whose condition is now met. Each is granted once and carries no XP. */
export function awardAchievements(progress: AcademyProgress, now: string): { progress: AcademyProgress; awarded: string[] } {
  const stats = Object.values(progress.cases);
  const correctCases = Object.entries(progress.cases).filter(([, value]) => value.everCorrect).map(([id]) => id);
  const met: Record<string, boolean> = {
    'first-exercise': Object.keys(progress.exercises).length >= 1,
    'first-correct-rhythm': correctCases.length >= 1,
    'ten-cases': correctCases.length >= 10,
    'accurate-heart-rate': stats.reduce((sum, value) => sum + value.rateCorrect, 0) >= 5,
    'corrected-after-review': Object.keys(progress.awards).some(key => key.startsWith('corrected:')),
    'first-case-study': Object.keys(progress.patients).length >= 1,
    'all-case-studies': patientCases.length > 0 && patientCases.every(item => progress.patients[item.id] === item.version),
  };
  for (const category of rhythmCategories) {
    const ids = rhythmCases.filter(item => item.categoryId === category.id).map(item => item.id);
    met[`category-complete.${category.id}`] = ids.length > 0 && ids.every(id => progress.cases[id]?.everCorrect);
  }
  const awarded = Object.entries(met).filter(([id, ok]) => ok && !progress.achievements[id]).map(([id]) => id);
  if (awarded.length === 0) return { progress, awarded };
  const achievements = { ...progress.achievements };
  for (const id of awarded) achievements[id] = { at: now };
  return { progress: { ...progress, achievements }, awarded };
}

export type ApplyResult = { progress: AcademyProgress; xpGained: number; achievements: string[]; alreadyApplied: boolean };

/** Records a completed guided exercise. Awarded once per exercise id and definition version. */
export function recordExerciseCompleted(progress: AcademyProgress, exerciseId: string, version: string, title: string, now: string): ApplyResult {
  const key = `exercise:${exerciseId}@${version}`;
  if (progress.awards[key]) return { progress, xpGained: 0, achievements: [], alreadyApplied: true };
  let next: AcademyProgress = { ...progress, exercises: { ...progress.exercises, [exerciseId]: version } };
  next = recordAward(next, key, XP_RULES.exerciseCompleted, `Completed exercise: ${title}`, now);
  const unlocked = awardAchievements(next, now);
  return { progress: unlocked.progress, xpGained: XP_RULES.exerciseCompleted, achievements: unlocked.awarded, alreadyApplied: false };
}

const blankStats = (version: string): CaseStats => ({ version, attempts: 0, correct: 0, rateAttempts: 0, rateCorrect: 0, everCorrect: false, missedBefore: false, repeatAwards: 0 });

/**
 * Credits one first attempt on a rhythm case. The Rhythm Challenge and the fictional patient cases
 * both go through here, so a case is scored and rewarded the same way wherever it appears.
 */
function recordRhythmAttempt(progress: AcademyProgress, definition: RhythmCase, first: AnswerEvaluation, now: string): AcademyProgress {
  const existing = progress.cases[definition.id];
  const stats: CaseStats = existing?.version === definition.version ? { ...existing } : blankStats(definition.version);
  const wasMissedBefore = stats.missedBefore;
  stats.attempts += 1;
  if (first.rateStatus === 'correct' || first.rateStatus === 'incorrect') stats.rateAttempts += 1;
  if (first.rateStatus === 'correct') stats.rateCorrect += 1;

  let next = progress;
  const tag = `${definition.id}@${definition.version}`;
  const categoryLabel = rhythmCategories.find(category => category.id === definition.categoryId)?.label ?? definition.categoryId;
  if (first.rhythmCorrect) {
    stats.correct += 1;
    if (!stats.everCorrect) {
      stats.everCorrect = true;
      next = recordAward(next, `rhythm-first:${tag}`, XP_RULES.firstCorrectRhythm, `First correct: ${categoryLabel}`, now);
      if (wasMissedBefore) next = recordAward(next, `corrected:${tag}`, XP_RULES.correctedAfterMiss, 'Corrected a previously missed strip', now);
    } else if (stats.repeatAwards < XP_RULES.maxRepeatAwardsPerCase) {
      stats.repeatAwards += 1;
      next = recordAward(next, `rhythm-repeat:${tag}:${stats.repeatAwards}`, XP_RULES.repeatCorrectRhythm, `Practised: ${categoryLabel}`, now);
    }
  } else {
    stats.missedBefore = true;
  }
  if (first.rateStatus === 'correct') next = recordAward(next, `rate-first:${tag}`, XP_RULES.firstCorrectRate, `Rate estimate: ${categoryLabel}`, now);
  return { ...next, cases: { ...next.cases, [definition.id]: stats } };
}

/**
 * Records a completed fictional patient case. Awarded once per case id and version. The rhythm
 * answer is credited through the same path as a challenge question; completion earns a flat reward
 * so reading the debrief matters more than being right first time, plus a bonus for a correct rhythm.
 */
export function applyPatientCase(progress: AcademyProgress, patient: PatientCase, evaluation: AnswerEvaluation, now: string): ApplyResult {
  const rhythm = getRhythmCase(patient.rhythmCaseId);
  const key = `patient:${patient.id}@${patient.version}`;
  if (progress.awards[key] || progress.patients[patient.id] === patient.version) return { progress, xpGained: 0, achievements: [], alreadyApplied: true };
  if (!rhythm || evaluation.caseId !== rhythm.id || evaluation.caseVersion !== rhythm.version) return { progress, xpGained: 0, achievements: [], alreadyApplied: false };

  const xpBefore = totalXp(progress);
  let next = recordRhythmAttempt(progress, rhythm, evaluation, now);
  next = { ...next, patients: { ...next.patients, [patient.id]: patient.version } };
  next = recordAward(next, key, XP_RULES.caseStudyCompleted, `Completed case study: ${patient.title}`, now);
  if (evaluation.rhythmCorrect) next = recordAward(next, `patient-correct:${patient.id}@${patient.version}`, XP_RULES.caseStudyCorrectRhythm, `Rhythm identified in case study: ${patient.title}`, now);
  const unlocked = awardAchievements(next, now);
  return { progress: unlocked.progress, xpGained: totalXp(unlocked.progress) - xpBefore, achievements: unlocked.awarded, alreadyApplied: false };
}

/**
 * Applies a finished session. Only first attempts count. The session id makes the whole operation
 * idempotent, so a double click or a re-render cannot award twice. Sessions that were never ended
 * or that had no answers earn nothing.
 */
export function applySession(progress: AcademyProgress, state: SessionState, now: string): ApplyResult {
  const summary = summarise(state);
  const sessionKey = `session:${state.id}`;
  if (progress.awards[sessionKey] || progress.awards[`session-applied:${state.id}`]) return { progress, xpGained: 0, achievements: [], alreadyApplied: true };
  if (!summary.ended || summary.answered === 0) return { progress, xpGained: 0, achievements: [], alreadyApplied: false };

  let next = progress;
  const xpBefore = totalXp(progress);
  for (const answer of state.answers) {
    if (!answer) continue;
    const definition = getRhythmCase(answer.caseId);
    if (!definition) continue;
    next = recordRhythmAttempt(next, definition, answer.firstEvaluation, now);
  }

  if (summary.rewardEligible) next = recordAward(next, sessionKey, XP_RULES.sessionCompleted, `Completed a ${state.config.mode} session`, now);
  else next = { ...next, awards: { ...next.awards, [`session-applied:${state.id}`]: { xp: 0, label: 'Session recorded without completion reward', at: now } } };

  const bests = { ...next.bests, bestStreak: Math.max(next.bests.bestStreak, summary.bestStreak), sessionsCompleted: next.bests.sessionsCompleted + (summary.rewardEligible ? 1 : 0) };
  if (state.config.mode === 'timed' && summary.rewardEligible && summary.score > bests.timedScore) {
    bests.timedScore = summary.score;
    bests.timedAccuracyPercent = summary.accuracyPercent;
  }
  next = { ...next, bests };
  const unlocked = awardAchievements(next, now);
  return { progress: unlocked.progress, xpGained: totalXp(unlocked.progress) - xpBefore, achievements: unlocked.awarded, alreadyApplied: false };
}

export type CategoryMastery = { categoryId: string; label: string; attempts: number; correct: number; accuracyPercent: number | null };

/** Dashboard facts derived strictly from recorded events; nothing is invented or estimated. */
export function dashboardStats(progress: AcademyProgress) {
  const xp = totalXp(progress);
  const level = levelForXp(xp);
  const values = Object.values(progress.cases);
  const attempts = values.reduce((sum, value) => sum + value.attempts, 0);
  const correct = values.reduce((sum, value) => sum + value.correct, 0);
  const rateAttempts = values.reduce((sum, value) => sum + value.rateAttempts, 0);
  const rateCorrect = values.reduce((sum, value) => sum + value.rateCorrect, 0);
  const categories: CategoryMastery[] = rhythmCategories.map(category => {
    const stats = rhythmCases.filter(item => item.categoryId === category.id).map(item => progress.cases[item.id]).filter((value): value is CaseStats => Boolean(value));
    const categoryAttempts = stats.reduce((sum, value) => sum + value.attempts, 0);
    const categoryCorrect = stats.reduce((sum, value) => sum + value.correct, 0);
    return { categoryId: category.id, label: category.label, attempts: categoryAttempts, correct: categoryCorrect, accuracyPercent: categoryAttempts === 0 ? null : Math.round((categoryCorrect / categoryAttempts) * 100) };
  });
  const attempted = categories.filter(category => category.attempts > 0);
  return {
    xp,
    level,
    xpIntoLevel: xp - xpForLevel(level),
    xpForNextLevel: xpForLevel(level + 1) - xpForLevel(level),
    exercisesCompleted: Object.keys(progress.exercises).length,
    caseStudiesCompleted: Object.keys(progress.patients).length,
    caseStudiesAvailable: patientCases.length,
    rhythmAttempts: attempts,
    rhythmAccuracyPercent: attempts === 0 ? null : Math.round((correct / attempts) * 100),
    rateAttempts,
    rateAccuracyPercent: rateAttempts === 0 ? null : Math.round((rateCorrect / rateAttempts) * 100),
    strongest: [...attempted].sort((a, b) => (b.accuracyPercent ?? 0) - (a.accuracyPercent ?? 0) || b.attempts - a.attempts).slice(0, 3).filter(category => (category.accuracyPercent ?? 0) >= 50),
    toPractice: [...attempted].sort((a, b) => (a.accuracyPercent ?? 0) - (b.accuracyPercent ?? 0)).slice(0, 3).filter(category => (category.accuracyPercent ?? 100) < 100),
    achievementsEarned: achievementDefinitions.filter(definition => progress.achievements[definition.id]),
    achievementsLocked: achievementDefinitions.filter(definition => !progress.achievements[definition.id]),
    bests: progress.bests,
    recent: progress.recent,
    isEmpty: Object.keys(progress.awards).length === 0 && attempts === 0,
  };
}
