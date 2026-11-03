import { z } from 'zod';

export const LEARN_PROGRESS_STORAGE_KEY = 'ecg-lab-learn-progress';
export const LEARN_PROGRESS_VERSION = 1 as const;

const checkAttemptSchema = z.strictObject({
  attempts: z.number().int().min(0).max(10_000),
  lastAnswerCorrect: z.boolean().optional(),
});

const lessonProgressSchema = z.strictObject({
  started: z.boolean(),
  completed: z.boolean(),
  completedSectionIds: z.array(z.string().min(1).max(100)).max(100),
  lastCompletedSectionId: z.string().min(1).max(100).optional(),
  knowledgeChecks: z.record(z.string().min(1).max(100), checkAttemptSchema),
}).superRefine((lesson, context) => {
  if (new Set(lesson.completedSectionIds).size !== lesson.completedSectionIds.length) {
    context.addIssue({ code: 'custom', path: ['completedSectionIds'], message: 'Completed section IDs must be unique.' });
  }
  if (lesson.lastCompletedSectionId && !lesson.completedSectionIds.includes(lesson.lastCompletedSectionId)) {
    context.addIssue({ code: 'custom', path: ['lastCompletedSectionId'], message: 'The last completed section must appear in the completed section list.' });
  }
  if (lesson.completed && !lesson.started) {
    context.addIssue({ code: 'custom', path: ['completed'], message: 'A lesson cannot be completed before it is started.' });
  }
});

export const learnProgressSchema = z.strictObject({
  version: z.literal(LEARN_PROGRESS_VERSION),
  lessons: z.record(z.string().min(1).max(100), lessonProgressSchema),
});

export type LearnProgress = z.infer<typeof learnProgressSchema>;
export type LessonProgress = z.infer<typeof lessonProgressSchema>;

export interface ProgressStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface LearnProgressStore {
  load(): LearnProgress;
  save(progress: LearnProgress): boolean;
  reset(): LearnProgress;
}

export const emptyLearnProgress = (): LearnProgress => ({ version: LEARN_PROGRESS_VERSION, lessons: {} });

export function readLearnProgress(storage: ProgressStorage, key = LEARN_PROGRESS_STORAGE_KEY): LearnProgress {
  let serialized: string | null;
  try {
    serialized = storage.getItem(key);
  } catch {
    return emptyLearnProgress();
  }
  if (serialized === null) return emptyLearnProgress();
  try {
    const parsedJson: unknown = JSON.parse(serialized);
    const parsed = learnProgressSchema.safeParse(parsedJson);
    if (parsed.success) return parsed.data;
  } catch {
    // Corrupt storage is cleared below; the lesson remains available.
  }
  try {
    storage.removeItem(key);
  } catch {
    // Storage may be read-only; the caller still receives an empty in-memory state.
  }
  return emptyLearnProgress();
}

export function writeLearnProgress(storage: ProgressStorage, progress: LearnProgress, key = LEARN_PROGRESS_STORAGE_KEY): boolean {
  const parsed = learnProgressSchema.safeParse(progress);
  if (!parsed.success) return false;
  try {
    storage.setItem(key, JSON.stringify(parsed.data));
    return true;
  } catch {
    return false;
  }
}

export function createLocalProgressStore(): LearnProgressStore {
  const getStorage = (): ProgressStorage | null => {
    try {
      return typeof window === 'undefined' ? null : window.localStorage;
    } catch {
      return null;
    }
  };
  return {
    load: () => {
      const storage = getStorage();
      return storage ? readLearnProgress(storage) : emptyLearnProgress();
    },
    save: progress => {
      const storage = getStorage();
      return storage ? writeLearnProgress(storage, progress) : false;
    },
    reset: () => {
      const storage = getStorage();
      try {
        storage?.removeItem(LEARN_PROGRESS_STORAGE_KEY);
      } catch {
        // Progress is reset in memory even if storage is unavailable.
      }
      return emptyLearnProgress();
    },
  };
}

export const localLearnProgressStore = createLocalProgressStore();

function updateLesson(progress: LearnProgress, lessonId: string, update: (current: LessonProgress) => LessonProgress): LearnProgress {
  const current = progress.lessons[lessonId] ?? {
    started: false,
    completed: false,
    completedSectionIds: [],
    knowledgeChecks: {},
  };
  return {
    ...progress,
    lessons: { ...progress.lessons, [lessonId]: update(current) },
  };
}

export function markLessonStarted(progress: LearnProgress, lessonId: string): LearnProgress {
  return updateLesson(progress, lessonId, current => ({ ...current, started: true }));
}

export function markLessonSectionComplete(progress: LearnProgress, lessonId: string, sectionId: string): LearnProgress {
  return updateLesson(progress, lessonId, current => ({
    ...current,
    started: true,
    completedSectionIds: current.completedSectionIds.includes(sectionId)
      ? current.completedSectionIds
      : [...current.completedSectionIds, sectionId],
    lastCompletedSectionId: sectionId,
  }));
}

export function markLessonComplete(progress: LearnProgress, lessonId: string): LearnProgress {
  return updateLesson(progress, lessonId, current => ({ ...current, started: true, completed: true }));
}

export function recordKnowledgeCheckAttempt(
  progress: LearnProgress,
  lessonId: string,
  questionId: string,
  correct: boolean,
): LearnProgress {
  return updateLesson(progress, lessonId, current => {
    const previous = current.knowledgeChecks[questionId] ?? { attempts: 0 };
    return {
      ...current,
      started: true,
      knowledgeChecks: {
        ...current.knowledgeChecks,
        [questionId]: { attempts: Math.min(10_000, previous.attempts + 1), lastAnswerCorrect: correct },
      },
    };
  });
}
