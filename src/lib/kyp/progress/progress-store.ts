/**
 * KYP local learning progress — the single persistence layer for the
 * static-hosted product (GitHub Pages).
 *
 * ─── Why this exists ──────────────────────────────────────────────────
 * The production backend (/api/progress) is not available on static
 * export, so visited courses, section progress, current position and
 * quiz scores were session-only. This module provides the same
 * learning-state semantics entirely client-side, keyed under ONE
 * versioned localStorage namespace:
 *
 *     kyp:progress:v1
 *
 * ─── Design rules ─────────────────────────────────────────────────────
 *   - Learning-state ONLY. No PII, no credentials, no clinical data.
 *   - SSR-safe: every access is guarded by typeof window + try/catch.
 *   - Hydration-safe: the server snapshot is always `null`; React
 *     components must render nothing until mounted (see
 *     use-local-progress.ts).
 *   - Versioned + validated: corrupt or future-version payloads are
 *     discarded gracefully, never crash the page.
 *   - Server-sync ready: the plain-object shape is deliberately close
 *     to what a future /api/progress sync endpoint could accept
 *     (slug-keyed course records with timestamps and counts).
 *
 * ─── Completion rule (documented) ─────────────────────────────────────
 * A course is complete when every section of the course outline
 * (the union of the drug page's 26 nav sections / lessonGroups) has
 * been completed. A section is completed when the learner has
 * genuinely read it (dwell-based tracking, see SectionReadTracker)
 * or explicitly ticked it in the section navigator. Opening a page
 * never marks anything complete.
 */

/* ============================================================
   Types
   ============================================================ */

/** Quiz record for a single course (from in-course micro-quizzes). */
export interface CourseQuizStats {
  /** Total answers given (re-answers count as new attempts). */
  attempts: number;
  /** Latest answer per in-course quiz question id. */
  answers: Record<string, boolean>;
  /** Best full-coverage correct-rate as 0–100 — set only once
   *  every rendered in-course question has been answered. */
  bestScore: number | null;
  /** Last time a micro-quiz was answered inside this course. */
  lastAttemptAt: number | null;
}

/** Per-course learning state (medication course pages /drugs/[slug]). */
export interface CourseProgress {
  /** Course slug, e.g. "bupropion". */
  slug: string;
  /** Course title captured on first visit, e.g. "Bupropion". */
  title: string;
  /** Section IDs completed (in outline order where possible). */
  completedSections: string[];
  /** Section ID the learner last reached. */
  currentSectionId: string | null;
  /** Label of that section, e.g. "Side Effects". */
  currentSectionLabel: string | null;
  /** Epoch ms of the first visit. */
  firstVisitedAt: number;
  /** Epoch ms of the most recent visit. */
  lastVisitedAt: number;
  /** Total page visits. */
  visitCount: number;
  /** In-course quiz stats. */
  quiz: CourseQuizStats;
  /** Epoch ms when the course became complete (null until then). */
  completedAt: number | null;
}

/** Practice hub (/quiz) run history — aggregate across all runs. */
export interface PracticeStats {
  /** Completed practice runs. */
  attempts: number;
  /** Latest run score as 0–100 percentage. */
  latestScore: number | null;
  /** Best run score as 0–100 percentage. */
  bestScore: number | null;
  /** Epoch ms of the last completed run. */
  lastAttemptAt: number | null;
  /** Questions in the last completed run. */
  lastRunQuestions: number | null;
}

/** A single recent-activity entry (kept small, capped). */
export interface ActivityEntry {
  /** Epoch ms. */
  at: number;
  /** What happened, e.g. "completed-section". */
  kind: "visited-course" | "completed-section" | "quiz";
  /** Course slug the event belongs to. */
  slug: string;
}

/** Root shape stored under kyp:progress:v1. */
export interface KypProgressData {
  version: 1;
  /** Courses by slug. */
  courses: Record<string, CourseProgress>;
  /** Most recently visited medication course slug. */
  lastVisitedSlug: string | null;
  /** Epoch ms of the most recent course visit. */
  lastVisitedAt: number | null;
  /** Recent learning activity (newest first, capped). */
  recentActivity: ActivityEntry[];
  /** Practice hub (/quiz) aggregate stats. */
  practice: PracticeStats;
}

/* ============================================================
   Storage plumbing (SSR-safe, failure-safe)
   ============================================================ */

const STORAGE_KEY = "kyp:progress:v1";
/** Legacy zustand key from the old manual-completion store. */
const LEGACY_KEY = "kyp-section-completion";
/** Cap recent activity so the payload stays small. */
const ACTIVITY_CAP = 30;

function emptyProgress(): KypProgressData {
  return {
    version: 1,
    courses: {},
    lastVisitedSlug: null,
    lastVisitedAt: null,
    recentActivity: [],
    practice: {
      attempts: 0,
      latestScore: null,
      bestScore: null,
      lastAttemptAt: null,
      lastRunQuestions: null,
    },
  };
}

function emptyQuizStats(): CourseQuizStats {
  return { attempts: 0, answers: {}, bestScore: null, lastAttemptAt: null };
}

/** Can we use localStorage at all? (SSR, private mode, disabled storage.) */
function storageAvailable(): boolean {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const probe = "__kyp_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

/**
 * Coerce an unknown parsed payload into KypProgressData.
 * Anything missing/wrong-typed falls back to a safe default — a
 * corrupt or hand-edited payload must never break the page.
 */
function coerceProgress(raw: unknown): KypProgressData {
  const data = emptyProgress();
  if (!raw || typeof raw !== "object") return data;
  const r = raw as Record<string, unknown>;

  // courses
  if (r.courses && typeof r.courses === "object") {
    for (const [slug, course] of Object.entries(r.courses as Record<string, unknown>)) {
      if (!course || typeof course !== "object") continue;
      const c = course as Record<string, unknown>;
      const quiz = (c.quiz && typeof c.quiz === "object" ? c.quiz : {}) as Record<string, unknown>;
      data.courses[slug] = {
        slug: String(c.slug ?? slug),
        title: String(c.title ?? slug),
        completedSections: Array.isArray(c.completedSections)
          ? c.completedSections.filter((s): s is string => typeof s === "string")
          : [],
        currentSectionId: typeof c.currentSectionId === "string" ? c.currentSectionId : null,
        currentSectionLabel:
          typeof c.currentSectionLabel === "string" ? c.currentSectionLabel : null,
        firstVisitedAt: typeof c.firstVisitedAt === "number" ? c.firstVisitedAt : Date.now(),
        lastVisitedAt: typeof c.lastVisitedAt === "number" ? c.lastVisitedAt : Date.now(),
        visitCount: typeof c.visitCount === "number" ? c.visitCount : 1,
        quiz: {
          attempts: typeof quiz.attempts === "number" ? quiz.attempts : 0,
          answers:
            quiz.answers && typeof quiz.answers === "object"
              ? Object.fromEntries(
                  Object.entries(quiz.answers as Record<string, unknown>).filter(
                    (entry): entry is [string, boolean] => typeof entry[1] === "boolean"
                  )
                )
              : {},
          bestScore: typeof quiz.bestScore === "number" ? quiz.bestScore : null,
          lastAttemptAt: typeof quiz.lastAttemptAt === "number" ? quiz.lastAttemptAt : null,
        },
        completedAt: typeof c.completedAt === "number" ? c.completedAt : null,
      };
    }
  }

  // top-level scalars
  data.lastVisitedSlug = typeof r.lastVisitedSlug === "string" ? r.lastVisitedSlug : null;
  data.lastVisitedAt = typeof r.lastVisitedAt === "number" ? r.lastVisitedAt : null;

  // recent activity
  if (Array.isArray(r.recentActivity)) {
    data.recentActivity = (r.recentActivity as unknown[])
      .filter(
        (a): a is ActivityEntry =>
          Boolean(a) &&
          typeof a === "object" &&
          typeof (a as ActivityEntry).at === "number" &&
          typeof (a as ActivityEntry).slug === "string"
      )
      .slice(0, ACTIVITY_CAP);
  }

  // practice stats
  if (r.practice && typeof r.practice === "object") {
    const p = r.practice as Record<string, unknown>;
    data.practice = {
      attempts: typeof p.attempts === "number" ? p.attempts : 0,
      latestScore: typeof p.latestScore === "number" ? p.latestScore : null,
      bestScore: typeof p.bestScore === "number" ? p.bestScore : null,
      lastAttemptAt: typeof p.lastAttemptAt === "number" ? p.lastAttemptAt : null,
      lastRunQuestions:
        typeof p.lastRunQuestions === "number" ? p.lastRunQuestions : null,
    };
  }

  return data;
}

/* ============================================================
   In-memory cache + subscription (useSyncExternalStore-friendly)
   ============================================================ */

let cache: KypProgressData | null = null;
const listeners = new Set<() => void>();

/** Has the store been initialised in this browser context? */
let initialised = false;

function readFromStorage(): KypProgressData | null {
  if (!storageAvailable()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    return coerceProgress(JSON.parse(raw));
  } catch {
    return null;
  }
}

function writeToStorage(data: KypProgressData): void {
  if (!storageAvailable()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Quota exceeded / private mode — progress stays in memory for
    // this session only. Silent by design: learning UI must never
    // surface storage errors to the learner.
  }
}

/**
 * One-time migration from the legacy manual-completion key
 * (kyp-section-completion, zustand persist) into kyp:progress:v1.
 * Preserves the user's manually ticked sections, then removes the
 * old key so there is exactly one progress namespace.
 */
function migrateLegacy(): void {
  if (!storageAvailable()) return;
  try {
    const legacyRaw = window.localStorage.getItem(LEGACY_KEY);
    if (!legacyRaw) return;
    const parsed = JSON.parse(legacyRaw) as {
      state?: { completed?: Record<string, string[]> };
    };
    const completed = parsed?.state?.completed;
    if (!completed || typeof completed !== "object") return;

    const data = cache ?? emptyProgress();
    let changed = false;
    for (const [slug, sections] of Object.entries(completed)) {
      if (!Array.isArray(sections)) continue;
      const existing = data.courses[slug];
      if (existing) {
        for (const s of sections) {
          if (!existing.completedSections.includes(s)) {
            existing.completedSections.push(s);
            changed = true;
          }
        }
      } else {
        const now = Date.now();
        data.courses[slug] = {
          slug,
          title: slug,
          completedSections: [...sections],
          currentSectionId: null,
          currentSectionLabel: null,
          firstVisitedAt: now,
          lastVisitedAt: now,
          visitCount: 0,
          quiz: emptyQuizStats(),
          completedAt: null,
        };
        changed = true;
      }
    }
    // The migrated state becomes the store state, whether or not
    // there was an existing kyp:progress:v1 payload to merge into.
    cache = data;
    writeToStorage(data);
    window.localStorage.removeItem(LEGACY_KEY);
  } catch {
    // Legacy payload unreadable — leave it alone, carry on.
  }
}

/**
 * Initialise the store (idempotent). Called lazily by every public
 * reader. Safe to call during any client-side lifecycle phase; never
 * during SSR (guarded by storageAvailable).
 */
function ensureInitialised(): KypProgressData | null {
  if (!initialised) {
    initialised = true;
    cache = readFromStorage();
    // Migration runs even when the new key does not exist yet —
    // that is exactly the fresh-upgrade case.
    migrateLegacy();
  }
  return cache;
}

function notify(): void {
  for (const listener of listeners) listener();
}

/** Mutate the cached data, persist, and notify subscribers. */
function update(mutator: (data: KypProgressData) => void): KypProgressData {
  let data = ensureInitialised();
  if (!data) {
    // Storage unavailable — degrade to a memory-only store so the
    // UI still works within this render/session.
    data = emptyProgress();
    cache = data;
  }
  mutator(data);
  writeToStorage(data);
  // Fresh top-level identity on every change — useSyncExternalStore
  // compares snapshots with Object.is, so an in-place mutation would
  // be invisible to subscribers (the pill would never re-render).
  cache = { ...data };
  notify();
  return cache;
}

function pushActivity(data: KypProgressData, entry: ActivityEntry): void {
  data.recentActivity.unshift(entry);
  if (data.recentActivity.length > ACTIVITY_CAP) {
    data.recentActivity.length = ACTIVITY_CAP;
  }
}

function getOrCreateCourse(data: KypProgressData, slug: string, title: string): CourseProgress {
  let course = data.courses[slug];
  if (!course) {
    const now = Date.now();
    course = {
      slug,
      title,
      completedSections: [],
      currentSectionId: null,
      currentSectionLabel: null,
      firstVisitedAt: now,
      lastVisitedAt: now,
      visitCount: 0,
      quiz: emptyQuizStats(),
      completedAt: null,
    };
    data.courses[slug] = course;
  }
  return course;
}

/* ============================================================
   Public API
   ============================================================ */

/** Snapshot for useSyncExternalStore (client). Null until mounted. */
export function getSnapshot(): KypProgressData | null {
  return ensureInitialised();
}

/** Server snapshot — always null (no localStorage during SSR). */
export function getServerSnapshot(): KypProgressData | null {
  return null;
}

/** Subscribe to store changes. Returns an unsubscribe function. */
export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Full progress data (already coerced + migrated). */
export function getProgress(): KypProgressData {
  return ensureInitialised() ?? emptyProgress();
}

/** One course's progress, or null if never visited. */
export function getCourseProgress(slug: string): CourseProgress | null {
  return getProgress().courses[slug] ?? null;
}

/**
 * Record a visit to a course page (called once per page mount).
 * Updates last-visited pointers, visit count and recent activity —
 * it never touches section completion.
 */
export function recordCourseVisit(slug: string, title: string): void {
  update((data) => {
    const now = Date.now();
    const course = getOrCreateCourse(data, slug, title);
    course.title = title; // keep titles fresh
    course.visitCount += 1;
    course.lastVisitedAt = now;
    data.lastVisitedSlug = slug;
    data.lastVisitedAt = now;
    pushActivity(data, { at: now, kind: "visited-course", slug });
  });
}

/** Mark a section as completed (idempotent). */
export function markSectionComplete(slug: string, sectionId: string): void {
  update((data) => {
    const course = getOrCreateCourse(data, slug, slug);
    if (!course.completedSections.includes(sectionId)) {
      course.completedSections.push(sectionId);
      pushActivity(data, { at: Date.now(), kind: "completed-section", slug });
    }
  });
}

/** Manually un-complete a section (the navigator's un-toggle). */
export function unmarkSectionComplete(slug: string, sectionId: string): void {
  update((data) => {
    const course = data.courses[slug];
    if (!course) return;
    course.completedSections = course.completedSections.filter((s) => s !== sectionId);
    // Un-completing revokes a previously earned completion stamp.
    if (course.completedAt) course.completedAt = null;
  });
}

/**
 * Persist the learner's current position in a course.
 */
export function setCurrentSection(
  slug: string,
  sectionId: string,
  sectionLabel: string
): void {
  update((data) => {
    const course = getOrCreateCourse(data, slug, slug);
    if (course.currentSectionId === sectionId) return;
    course.currentSectionId = sectionId;
    course.currentSectionLabel = sectionLabel;
    course.lastVisitedAt = Date.now();
    data.lastVisitedSlug = slug;
    data.lastVisitedAt = course.lastVisitedAt;
  });
}

/**
 * Record one answered in-course micro-quiz question and refresh the
 * course's best score. The best score only counts once EVERY
 * rendered in-course question has been answered (a full pass) —
 * partial passes never inflate it.
 */
export function recordMicroQuizAnswer(
  slug: string,
  quizId: string,
  correct: boolean,
  renderedQuizCount: number
): void {
  update((data) => {
    const course = getOrCreateCourse(data, slug, slug);
    course.quiz.attempts += 1;
    course.quiz.answers[quizId] = correct;
    course.quiz.lastAttemptAt = Date.now();
    const answered = Object.keys(course.quiz.answers).length;
    if (renderedQuizCount > 0 && answered >= renderedQuizCount) {
      const correctCount = Object.values(course.quiz.answers).filter(Boolean).length;
      const score = Math.round((correctCount / renderedQuizCount) * 100);
      if (course.quiz.bestScore === null || score > course.quiz.bestScore) {
        course.quiz.bestScore = score;
      }
    }
    pushActivity(data, { at: Date.now(), kind: "quiz", slug });
  });
}

/**
 * Record a completed practice-hub run (/quiz).
 * Score is the percentage 0–100.
 */
export function recordPracticeAttempt(correct: number, totalQuestions: number): void {
  update((data) => {
    data.practice.attempts += 1;
    data.practice.latestScore =
      totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : null;
    if (
      data.practice.latestScore !== null &&
      (data.practice.bestScore === null || data.practice.latestScore > data.practice.bestScore)
    ) {
      data.practice.bestScore = data.practice.latestScore;
    }
    data.practice.lastAttemptAt = Date.now();
    data.practice.lastRunQuestions = totalQuestions;
  });
}

/**
 * Mark a course complete (idempotent) once the caller has verified
 * its outline is satisfied. Kept explicit so completion can never be
 * triggered by page-load side effects.
 */
export function markCourseComplete(slug: string): void {
  update((data) => {
    const course = getOrCreateCourse(data, slug, slug);
    if (!course.completedAt) course.completedAt = Date.now();
  });
}

/**
 * Evaluate a course's completion against its outline and sync the
 * completion stamp. Called by the UI after any section-completion
 * change (dwell tracking or manual toggle) — the store itself never
 * knows page structure, so completion can never be set by accident.
 *
 * Returns true if the course is complete after the sync.
 */
export function syncCourseCompletion(slug: string, outlineIds: string[]): boolean {
  const course = getCourseProgress(slug);
  if (!course) return false;
  const complete =
    outlineIds.length > 0 &&
    outlineIds.every((id) => course.completedSections.includes(id));
  if (complete && !course.completedAt) {
    update((data) => {
      const c = data.courses[slug];
      if (c && !c.completedAt) c.completedAt = Date.now();
    });
  } else if (!complete && course.completedAt) {
    update((data) => {
      const c = data.courses[slug];
      if (c) c.completedAt = null;
    });
  }
  return complete;
}

/** The most recently visited course, or null. */
export function getLastVisitedCourse(): CourseProgress | null {
  const data = getProgress();
  if (!data.lastVisitedSlug) return null;
  return data.courses[data.lastVisitedSlug] ?? null;
}

/** Recent courses, newest first, optionally capped. */
export function getRecentCourses(limit = 5): CourseProgress[] {
  return Object.values(getProgress().courses)
    .sort((a, b) => b.lastVisitedAt - a.lastVisitedAt)
    .slice(0, limit);
}

/** Course completion percentage given the outline section count. */
export function coursePercentComplete(course: CourseProgress, totalSections: number): number {
  if (totalSections <= 0) return 0;
  return Math.min(100, Math.round((course.completedSections.length / totalSections) * 100));
}

/** Clear ALL local progress (the explicit reset affordance). */
export function clearProgress(): void {
  update((data) => {
    data.courses = {};
    data.lastVisitedSlug = null;
    data.lastVisitedAt = null;
    data.recentActivity = [];
    data.practice = {
      attempts: 0,
      latestScore: null,
      bestScore: null,
      lastAttemptAt: null,
      lastRunQuestions: null,
    };
  });
}

/** Clear one course's progress. */
export function clearCourseProgress(slug: string): void {
  update((data) => {
    delete data.courses[slug];
    if (data.lastVisitedSlug === slug) {
      const remaining = Object.values(data.courses).sort(
        (a, b) => b.lastVisitedAt - a.lastVisitedAt
      )[0];
      data.lastVisitedSlug = remaining?.slug ?? null;
      data.lastVisitedAt = remaining?.lastVisitedAt ?? null;
    }
  });
}

/** Exposed for tests. */
export const PROGRESS_STORAGE_KEY = STORAGE_KEY;
export const LEGACY_STORAGE_KEY = LEGACY_KEY;

/**
 * Test-only: drop the in-memory cache so the next read goes back to
 * localStorage — simulates a fresh page load / browser restart.
 * Never call this from product code.
 */
export function __resetForTests(): void {
  initialised = false;
  cache = null;
}
