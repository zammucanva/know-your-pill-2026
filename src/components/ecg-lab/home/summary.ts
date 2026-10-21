import { dashboardStats, type AcademyProgress } from '../academy/progress';
import type { ExperimentState } from '../engine/experiment-state';
import { exerciseRegistry, type ExerciseDefinition } from '../exercises/definitions';
import { entryFor, type ExerciseProgress } from '../exercises/progress';
import { patientCases, type PatientCase } from '../patients/cases';

/**
 * The Home dashboard is derived entirely from stored learner state: Academy progress, guided-exercise
 * progress and saved experiments. Nothing is estimated, defaulted or invented; where there is nothing
 * real to show, the summary says so and the screen shows an honest empty state.
 */
export type ExerciseState = 'completed' | 'in-progress' | 'not-started';

export type ExerciseSummary = {
  id: string;
  title: string;
  state: ExerciseState;
  readings: number;
  requiredReadings: number;
  attempts: number;
};

export type ContinueStep =
  | { kind: 'continue-exercise'; exerciseId: string; title: string; detail: string }
  | { kind: 'start-exercise'; exerciseId: string; title: string; detail: string }
  | { kind: 'all-exercises-done'; detail: string }
  | { kind: 'none-available'; detail: string };

export type ExperimentSummary = { snapshotId: string; name: string; savedOn: string; settings: string };

export type HomeSummary = {
  /** True when there is no recorded learner activity of any kind. */
  isEmpty: boolean;
  continueLearning: ContinueStep;
  exercises: ExerciseSummary[];
  experiment: ExperimentSummary | null;
  challenge: { missedCount: number; attempts: number; accuracyPercent: number | null; timedBestScore: number };
  patients: { completed: number; total: number; next: { id: string; title: string } | null };
  progress: {
    level: number;
    xp: number;
    xpIntoLevel: number;
    xpForNextLevel: number;
    exercisesCompleted: number;
    exercisesTotal: number;
    caseStudiesCompleted: number;
    caseStudiesTotal: number;
    rhythmAccuracyPercent: number | null;
    recent: { label: string; xp: number }[];
  };
};

export type HomeInputs = {
  academy: AcademyProgress;
  exerciseProgress: ExerciseProgress;
  savedExperiments: readonly ExperimentState[];
  /** Injectable for tests; default to the authored registries. */
  exercises?: readonly ExerciseDefinition[];
  patients?: readonly PatientCase[];
};

const describeSettings = (snapshot: ExperimentState) =>
  `${snapshot.machine.lead} · ${snapshot.machine.paperSpeed} mm/s · ${snapshot.machine.gain} mm/mV · ${snapshot.playback.elapsedMs.toFixed(0)} ms`;

/** Most recently saved first. Dates are compared as ISO strings, which sort chronologically. */
export function latestExperiment(snapshots: readonly ExperimentState[]): ExperimentState | null {
  return [...snapshots].sort((a, b) => b.savedAt.localeCompare(a.savedAt))[0] ?? null;
}

export function buildHomeSummary({ academy, exerciseProgress, savedExperiments, exercises = exerciseRegistry, patients = patientCases }: HomeInputs): HomeSummary {
  const stats = dashboardStats(academy);

  const exerciseSummaries: ExerciseSummary[] = exercises.map(definition => {
    const entry = entryFor(exerciseProgress, definition);
    const state: ExerciseState = entry.passed ? 'completed' : entry.readings.length > 0 || entry.attempts > 0 ? 'in-progress' : 'not-started';
    return { id: definition.id, title: definition.title, state, readings: entry.readings.length, requiredReadings: definition.requiredReadings, attempts: entry.attempts };
  });

  const inProgress = exerciseSummaries.find(item => item.state === 'in-progress');
  const notStarted = exerciseSummaries.find(item => item.state === 'not-started');
  const continueLearning: ContinueStep = inProgress
    ? {
        kind: 'continue-exercise',
        exerciseId: inProgress.id,
        title: inProgress.title,
        detail: `${inProgress.readings} of ${inProgress.requiredReadings} ${inProgress.requiredReadings === 1 ? 'reading' : 'readings'} recorded, ${inProgress.attempts} ${inProgress.attempts === 1 ? 'attempt' : 'attempts'} so far.`,
      }
    : notStarted
      ? {
          kind: 'start-exercise',
          exerciseId: notStarted.id,
          title: notStarted.title,
          detail: exerciseSummaries.some(item => item.state === 'completed') ? 'The next guided exercise you have not started.' : 'A short guided exercise is a good first step.',
        }
      : exercises.length === 0
        ? { kind: 'none-available', detail: 'No guided exercises are available.' }
        : { kind: 'all-exercises-done', detail: 'You have completed every guided exercise. Practise rate and rhythm reading in the Rhythm Challenge.' };

  const latest = latestExperiment(savedExperiments);
  const completedPatients = patients.filter(item => academy.patients[item.id] === item.version);
  const nextPatient = patients.find(item => academy.patients[item.id] !== item.version) ?? null;
  const missedCount = Object.values(academy.cases).filter(entry => entry.missedBefore && !entry.everCorrect).length;

  const hasExerciseActivity = exerciseSummaries.some(item => item.state !== 'not-started');
  const isEmpty = stats.isEmpty && !hasExerciseActivity && savedExperiments.length === 0;

  return {
    isEmpty,
    continueLearning,
    exercises: exerciseSummaries,
    experiment: latest ? { snapshotId: latest.snapshotId, name: latest.name, savedOn: latest.savedAt.slice(0, 10), settings: describeSettings(latest) } : null,
    challenge: { missedCount, attempts: stats.rhythmAttempts, accuracyPercent: stats.rhythmAccuracyPercent, timedBestScore: academy.bests.timedScore },
    patients: { completed: completedPatients.length, total: patients.length, next: nextPatient ? { id: nextPatient.id, title: nextPatient.title } : null },
    progress: {
      level: stats.level,
      xp: stats.xp,
      xpIntoLevel: stats.xpIntoLevel,
      xpForNextLevel: stats.xpForNextLevel,
      exercisesCompleted: exerciseSummaries.filter(item => item.state === 'completed').length,
      exercisesTotal: exercises.length,
      caseStudiesCompleted: completedPatients.length,
      caseStudiesTotal: patients.length,
      rhythmAccuracyPercent: stats.rhythmAccuracyPercent,
      recent: stats.recent.slice(0, 3).map(item => ({ label: item.label, xp: item.xp })),
    },
  };
}
