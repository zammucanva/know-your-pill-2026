import { dashboardStats, type AcademyProgress } from '../academy/progress';
import type { ExperimentState } from '../engine/experiment-state';
import { exerciseRegistry, type ExerciseDefinition } from '../exercises/definitions';
import { entryFor, type ExerciseProgress } from '../exercises/progress';
import { monitorScenarios, type MonitorScenario } from '../monitor/scenario';
import { emptyScenarioRuns, resumableRun, type ScenarioRuns } from '../monitor/run-storage';
import { patientCases, type PatientCase } from '../patients/cases';
import { getRhythmCase, rhythmCases } from '../rhythm/cases';

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

export type ScenarioState = 'completed' | 'in-progress' | 'not-started';

export type ScenarioSummary = { id: string; title: string; state: ScenarioState; pausedAtMs: number | null; linkedPatientTitle: string | null };

/** Why a scenario is recommended; each reason is a fact read from stored state. */
export type ScenarioReason = 'resume' | 'follows-case-study' | 'missed-rhythm' | 'next' | 'replay-missed-rhythm';

export type ScenarioRecommendation = { scenarioId: string; title: string; reason: ScenarioReason; detail: string; resume: boolean; earnsXp: boolean };

export type ExperimentSummary = { snapshotId: string; name: string; savedOn: string; settings: string };

export type HomeSummary = {
  /** True when there is no recorded learner activity of any kind. */
  isEmpty: boolean;
  continueLearning: ContinueStep;
  exercises: ExerciseSummary[];
  experiment: ExperimentSummary | null;
  challenge: { missedCount: number; attempts: number; accuracyPercent: number | null; timedBestScore: number };
  patients: { completed: number; total: number; next: { id: string; title: string } | null };
  monitor: { completed: number; total: number; scenarios: ScenarioSummary[]; recommended: ScenarioRecommendation | null };
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
  /** Unfinished monitored-scenario runs from browser storage. */
  scenarioRuns?: ScenarioRuns;
  scenarios?: readonly MonitorScenario[];
};

const describeSettings = (snapshot: ExperimentState) =>
  `${snapshot.machine.lead} · ${snapshot.machine.paperSpeed} mm/s · ${snapshot.machine.gain} mm/mV · ${snapshot.playback.elapsedMs.toFixed(0)} ms`;

const formatTime = (ms: number) => {
  const total = Math.floor(ms / 1000);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
};

/** Rhythm category ids with a recorded, still unresolved miss. */
function unresolvedMissedCategories(academy: AcademyProgress): Set<string> {
  const out = new Set<string>();
  for (const [id, stats] of Object.entries(academy.cases)) {
    const definition = rhythmCases.find(item => item.id === id);
    if (definition && stats.missedBefore && !stats.everCorrect) out.add(definition.categoryId);
  }
  return out;
}

/** The rhythm categories a scenario's rhythm question practises (none for decision scenarios). */
function assessedCategory(scenario: MonitorScenario): string | null {
  if (scenario.assessment.kind !== 'rhythm') return null;
  const phase = scenario.phases.find(item => item.id === scenario.assessedPhaseId);
  return phase ? getRhythmCase(phase.rhythmCaseId)?.categoryId ?? null : null;
}

/**
 * Picks one monitored scenario to suggest, in a fixed order of reasons, each read from stored state:
 * a paused run, the monitored version of a completed case study, a rhythm with unresolved misses,
 * the next uncompleted scenario, and finally a replay (no XP) for a still-missed rhythm.
 */
export function recommendScenario(academy: AcademyProgress, runs: ScenarioRuns, scenarios: readonly MonitorScenario[], patients: readonly PatientCase[] = patientCases): ScenarioRecommendation | null {
  const done = (scenario: MonitorScenario) => academy.scenarios[scenario.id] === scenario.version;
  const make = (scenario: MonitorScenario, reason: ScenarioReason, detail: string, resume = false): ScenarioRecommendation =>
    ({ scenarioId: scenario.id, title: scenario.title, reason, detail, resume, earnsXp: !done(scenario) });

  const paused = scenarios
    .map(scenario => ({ scenario, run: done(scenario) ? null : resumableRun(runs, scenario) }))
    .filter((item): item is { scenario: MonitorScenario; run: NonNullable<typeof item.run> } => item.run !== null)
    .sort((a, b) => b.run.savedAt.localeCompare(a.run.savedAt))[0];
  if (paused) return make(paused.scenario, 'resume', `You paused this scenario at ${formatTime(paused.run.elapsedMs)}.`, true);

  const open = scenarios.filter(scenario => !done(scenario));
  const followsCase = open.find(scenario => {
    const patient = scenario.patientCaseId ? patients.find(item => item.id === scenario.patientCaseId) : undefined;
    return patient && academy.patients[patient.id] === patient.version;
  });
  if (followsCase) return make(followsCase, 'follows-case-study', 'You completed this patient\'s case study; this is the same fictional patient on a bedside monitor.');

  const missed = unresolvedMissedCategories(academy);
  const practisesMiss = open.find(scenario => { const category = assessedCategory(scenario); return category !== null && missed.has(category); });
  if (practisesMiss) return make(practisesMiss, 'missed-rhythm', 'It practises a rhythm you have missed before and not yet identified correctly.');

  if (open[0]) return make(open[0], 'next', 'The next monitored scenario you have not completed.');

  const replay = scenarios.find(scenario => { const category = assessedCategory(scenario); return category !== null && missed.has(category); });
  if (replay) return make(replay, 'replay-missed-rhythm', 'Already completed, so no further XP. It practises a rhythm you have missed before.');
  return null;
}

/** Most recently saved first. Dates are compared as ISO strings, which sort chronologically. */
export function latestExperiment(snapshots: readonly ExperimentState[]): ExperimentState | null {
  return [...snapshots].sort((a, b) => b.savedAt.localeCompare(a.savedAt))[0] ?? null;
}

export function buildHomeSummary({ academy, exerciseProgress, savedExperiments, exercises = exerciseRegistry, patients = patientCases, scenarioRuns = emptyScenarioRuns(), scenarios = monitorScenarios }: HomeInputs): HomeSummary {
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

  const scenarioSummaries: ScenarioSummary[] = scenarios.map(scenario => {
    const completed = academy.scenarios[scenario.id] === scenario.version;
    const run = completed ? null : resumableRun(scenarioRuns, scenario);
    const linked = scenario.patientCaseId ? patients.find(item => item.id === scenario.patientCaseId) : undefined;
    return { id: scenario.id, title: scenario.title, state: completed ? 'completed' : run ? 'in-progress' : 'not-started', pausedAtMs: run?.elapsedMs ?? null, linkedPatientTitle: linked?.title ?? null };
  });

  const hasExerciseActivity = exerciseSummaries.some(item => item.state !== 'not-started') || scenarioSummaries.some(item => item.state === 'in-progress');
  const isEmpty = stats.isEmpty && !hasExerciseActivity && savedExperiments.length === 0;

  return {
    isEmpty,
    continueLearning,
    exercises: exerciseSummaries,
    experiment: latest ? { snapshotId: latest.snapshotId, name: latest.name, savedOn: latest.savedAt.slice(0, 10), settings: describeSettings(latest) } : null,
    challenge: { missedCount, attempts: stats.rhythmAttempts, accuracyPercent: stats.rhythmAccuracyPercent, timedBestScore: academy.bests.timedScore },
    patients: { completed: completedPatients.length, total: patients.length, next: nextPatient ? { id: nextPatient.id, title: nextPatient.title } : null },
    monitor: {
      completed: scenarioSummaries.filter(item => item.state === 'completed').length,
      total: scenarios.length,
      scenarios: scenarioSummaries,
      recommended: recommendScenario(academy, scenarioRuns, scenarios, patients),
    },
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
