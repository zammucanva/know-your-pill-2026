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

import {
  nextIntervalDays,
  RETENTION_RESET_DAYS,
} from "@/lib/kyp/retention/schedule";

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

/** Custom Test (/quiz/custom) history — a SEPARATE namespace from
 *  practice-hub stats by design: course progress, Study Mode, /quiz runs
 *  and Custom Test runs must never contaminate each other. The Reset
 *  affordance in the test runner only resets the CURRENT attempt (React
 *  state) — it never touches any persisted stats. */
export interface CustomTestStats {
  /** Completed custom test runs. */
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

/* ============================================================
   Mistake Book (NOW-N1) — cross-test questions to revisit
   ------------------------------------------------------------
   A persistent, namespaced record of every question the learner
   answered incorrectly across /quiz (Quick MCQs) and /quiz/custom
   (Custom Test) sessions — independent of any single test's
   Review Incorrect screen. One entry per question identity;
   re-misses update the entry, a later correct answer resolves it.

   Framing rule: this is a "questions to revisit" list. It stores
   NO scores, NO streaks, NO shaming language — just the question,
   what was chosen, and where it is taught.
   ============================================================ */

/** Attribution for the page/section a mistake is taught on. */
export interface MistakeSource {
  /** e.g. "Bupropion" — the page the question came from. */
  sourceName: string;
  /** Drug or disease slug. */
  sourceSlug: string;
  /** Drug-page question vs disease-page question. */
  sourceType: "drug" | "disease";
  /** Class label for filtering — drugClassLabel, or "Diseases". */
  sourceClass: string;
  /** e.g. "Side Effects" — the section the fact lives in. */
  sectionLabel: string;
  /** Anchored deep link to the teaching section (N6). */
  sectionHref: string;
}

/** Input recorded at the moment a question is answered incorrectly. */
export interface MistakeRecordInput {
  /** Question identity — the engine's dedup key (`slug|fact|template|variant`
   *  or `slug|mcq:id`), so the SAME question resolves across surfaces. */
  identity: string;
  question: string;
  /** Options in canonical (pre-shuffle) order. */
  options: string[];
  correctIndex: number;
  explanation: string;
  source: MistakeSource;
  /** "authored" or the template id — aggregation dimension. */
  templateId: string;
  /** The option text the learner actually chose (text, not index —
   *  indices shift between shuffled attempts). */
  chosenOption: string;
}

/** One persisted entry in the Mistake Book. */
export interface MistakeEntry extends MistakeRecordInput {
  /** Times answered incorrectly (any surface). */
  wrongCount: number;
  firstWrongAt: number;
  lastWrongAt: number;
}

/** Saved Custom Test configuration (NOW-N4). */
export interface TestPreset {
  /** Stable id (generated at save time). */
  id: string;
  /** User-chosen name. */
  name: string;
  /** Selected medication slugs. */
  drugSlugs: string[];
  /** Requested question count (clamped to availability at launch). */
  count: number;
  /** Timed mode on/off (NOW-N3). */
  timed: boolean;
  /** Allotted minutes when timed. */
  minutes: number | null;
  createdAt: number;
  /** Epoch ms of the last one-tap launch (null until first launch). */
  lastLaunchedAt: number | null;
}

/* ============================================================
   Answer log (NEXT-N9 / X2 / X5) — per-topic accuracy input
   ------------------------------------------------------------
   One small event per answered question, aggregated per topic
   (a topic = one medication or disease page). This is the ONLY
   source of per-topic accuracy: it records correct answers too,
   which the Mistake Book (wrong-only, by design) never does.
   ============================================================ */

/** One answered question, recorded at the moment a run completes. */
export interface AnswerEventInput {
  /** Question identity — the engine's dedup key. */
  identity: string;
  /** Topic slug — the drug or disease page the question belongs to. */
  topicSlug: string;
  /** Topic display name (drug generic name or disease name). */
  topicName: string;
  /** Class label — the aggregation dimension ("SSRI" / "Diseases"). */
  topicClass: string;
  correct: boolean;
}

/** Aggregated per-topic stats (keyed by topic slug in the store). */
export interface TopicStats {
  /** Total answers ever recorded for this topic. */
  answered: number;
  /** Total correct answers ever recorded. */
  correct: number;
  /** Epoch ms of the most recent answer (0 until answered). */
  lastSeenAt: number;
  /** Recent answers, oldest → newest, capped — feeds trends and
   *  recency-weighted selection without keeping an unbounded log. */
  recent: Array<{ at: number; correct: boolean; identity: string }>;
}

/** One completed run summary (quiz / custom test / review session). */
export interface RunRecord {
  /** Epoch ms when the run finished. */
  at: number;
  /** Which surface the run happened on. */
  surface: "quiz" | "custom" | "review";
  /** How the run was configured. */
  mode: "normal" | "timed" | "exam" | "retest" | "review";
  correct: number;
  total: number;
  /** Wall-clock duration when known (null for /quiz quick runs). */
  durationMs: number | null;
}

/* ============================================================
   Retention Engine state (NEXT-X1) — per-item memory
   ------------------------------------------------------------
   Items are created when a question is answered INCORRECTLY (fed
   from the same stream as the Mistake Book) and updated on every
   later practice event: correct → interval advances, wrong →
   resets. The due-today queue is every item whose dueAt has
   passed. Interval scheduling only — no decay modelling (per the
   commissioning spec).
   ============================================================ */

/** One item's memory state, keyed by question identity. */
export interface RetentionItem {
  identity: string;
  /** Topic slug for grouping the due queue. */
  topicSlug: string;
  /** Epoch ms when this question is due for review. */
  dueAt: number;
  /** Current interval in days. */
  intervalDays: number;
  /** Consecutive correct answers since the last miss. */
  streak: number;
  updatedAt: number;
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
  /** Custom Test (/quiz/custom) aggregate stats — isolated namespace. */
  customTest: CustomTestStats;
  /** Mistake Book — questions to revisit, by identity (isolated
   *  namespace; never merged into course or run stats). */
  mistakeBook: Record<string, MistakeEntry>;
  /** Saved Custom Test presets (NOW-N4), newest first, capped. */
  testPresets: TestPreset[];
  /** Answer log per topic slug (NEXT-N9/X2/X5) — capped recents. */
  answers: Record<string, TopicStats & { topicName: string; topicClass: string }>;
  /** Completed run summaries (NEXT-X5), newest first, capped. */
  runs: RunRecord[];
  /** Retention Engine memory state (NEXT-X1), by identity, capped. */
  retention: Record<string, RetentionItem>;
  /** ISO date (YYYY-MM-DD) the daily plan was dismissed on (X8). */
  planDismissedOn: string | null;
}

/* ============================================================
   Storage plumbing (SSR-safe, failure-safe)
   ============================================================ */

const STORAGE_KEY = "kyp:progress:v1";
/** Legacy zustand key from the old manual-completion store. */
const LEGACY_KEY = "kyp-section-completion";
/** Cap recent activity so the payload stays small. */
const ACTIVITY_CAP = 30;
/** Cap the Mistake Book so localStorage stays small and the list
 *  stays reviewable — the stalest revisits drop off first. */
export const MISTAKE_CAP = 150;
/** Cap saved test presets — chips stay scannable on mobile. */
export const PRESET_CAP = 12;
/** Recent answers kept per topic (trend window for X2/X5). */
export const TOPIC_RECENT_CAP = 40;
/** Completed run summaries kept (duration/score trends for X5). */
export const RUN_CAP = 30;
/** Retention items kept — least recently updated drop off first. */
export const RETENTION_CAP = 400;

function emptyCustomTestStats(): CustomTestStats {
  return {
    attempts: 0,
    latestScore: null,
    bestScore: null,
    lastAttemptAt: null,
    lastRunQuestions: null,
  };
}

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
    customTest: emptyCustomTestStats(),
    mistakeBook: {},
    testPresets: [],
    answers: {},
    runs: [],
    retention: {},
    planDismissedOn: null,
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

/** Coerce one unknown value into a valid MistakeEntry, or null. */
function coerceMistakeEntry(raw: unknown): MistakeEntry | null {
  if (!raw || typeof raw !== "object") return null;
  const e = raw as Record<string, unknown>;
  const source = (e.source && typeof e.source === "object" ? e.source : {}) as Record<string, unknown>;
  const options = Array.isArray(e.options)
    ? e.options.filter((o): o is string => typeof o === "string")
    : [];
  const correctIndex = typeof e.correctIndex === "number" ? e.correctIndex : -1;
  if (
    typeof e.identity !== "string" ||
    typeof e.question !== "string" ||
    options.length < 2 ||
    correctIndex < 0 ||
    correctIndex >= options.length ||
    typeof e.chosenOption !== "string"
  ) {
    return null;
  }
  return {
    identity: e.identity,
    question: e.question,
    options,
    correctIndex,
    explanation: typeof e.explanation === "string" ? e.explanation : "",
    source: {
      sourceName: typeof source.sourceName === "string" ? source.sourceName : "",
      sourceSlug: typeof source.sourceSlug === "string" ? source.sourceSlug : "",
      sourceType: source.sourceType === "disease" ? "disease" : "drug",
      sourceClass: typeof source.sourceClass === "string" ? source.sourceClass : "",
      sectionLabel: typeof source.sectionLabel === "string" ? source.sectionLabel : "",
      sectionHref: typeof source.sectionHref === "string" ? source.sectionHref : "",
    },
    templateId: typeof e.templateId === "string" ? e.templateId : "authored",
    chosenOption: e.chosenOption,
    wrongCount: typeof e.wrongCount === "number" ? Math.max(1, e.wrongCount) : 1,
    firstWrongAt: typeof e.firstWrongAt === "number" ? e.firstWrongAt : Date.now(),
    lastWrongAt: typeof e.lastWrongAt === "number" ? e.lastWrongAt : Date.now(),
  };
}

/** Coerce saved test presets (NOW-N4) — invalid entries are dropped. */
function coerceTestPresets(raw: unknown): TestPreset[] {
  if (!Array.isArray(raw)) return [];
  const out: TestPreset[] = [];
  for (const p of raw) {
    if (!p || typeof p !== "object") continue;
    const t = p as Record<string, unknown>;
    const slugs = Array.isArray(t.drugSlugs)
      ? t.drugSlugs.filter((s): s is string => typeof s === "string")
      : [];
    if (
      typeof t.id !== "string" ||
      typeof t.name !== "string" ||
      slugs.length === 0 ||
      typeof t.count !== "number"
    ) {
      continue;
    }
    out.push({
      id: t.id,
      name: t.name,
      drugSlugs: slugs,
      count: Math.max(1, Math.round(t.count)),
      timed: t.timed === true,
      minutes: typeof t.minutes === "number" ? t.minutes : null,
      createdAt: typeof t.createdAt === "number" ? t.createdAt : Date.now(),
      lastLaunchedAt: typeof t.lastLaunchedAt === "number" ? t.lastLaunchedAt : null,
    });
  }
  return out.slice(0, PRESET_CAP);
}

/** Coerce one topic's aggregated stats (NEXT-N9/X2/X5). */
function coerceTopicStats(raw: unknown): TopicStats & { topicName: string; topicClass: string } | null {
  if (!raw || typeof raw !== "object") return null;
  const t = raw as Record<string, unknown>;
  const recent = Array.isArray(t.recent)
    ? (t.recent as unknown[])
        .filter(
          (r): r is { at: number; correct: boolean; identity: string } =>
            Boolean(r) &&
            typeof r === "object" &&
            typeof (r as { at?: unknown }).at === "number" &&
            typeof (r as { correct?: unknown }).correct === "boolean" &&
            typeof (r as { identity?: unknown }).identity === "string"
        )
        .slice(-TOPIC_RECENT_CAP)
    : [];
  return {
    answered: typeof t.answered === "number" ? Math.max(0, Math.round(t.answered)) : 0,
    correct: typeof t.correct === "number" ? Math.max(0, Math.round(t.correct)) : 0,
    lastSeenAt: typeof t.lastSeenAt === "number" ? t.lastSeenAt : 0,
    recent,
    topicName: typeof t.topicName === "string" ? t.topicName : "",
    topicClass: typeof t.topicClass === "string" ? t.topicClass : "",
  };
}

/** Coerce run summaries (NEXT-X5) — invalid entries are dropped. */
function coerceRuns(raw: unknown): RunRecord[] {
  if (!Array.isArray(raw)) return [];
  const out: RunRecord[] = [];
  for (const r of raw) {
    if (!r || typeof r !== "object") continue;
    const t = r as Record<string, unknown>;
    const surface = t.surface === "quiz" || t.surface === "custom" || t.surface === "review" ? t.surface : "quiz";
    const mode =
      t.mode === "timed" || t.mode === "exam" || t.mode === "retest" || t.mode === "review" || t.mode === "normal"
        ? t.mode
        : "normal";
    if (typeof t.at !== "number" || typeof t.correct !== "number" || typeof t.total !== "number") continue;
    out.push({
      at: t.at,
      surface,
      mode,
      correct: Math.max(0, Math.round(t.correct)),
      total: Math.max(0, Math.round(t.total)),
      durationMs: typeof t.durationMs === "number" ? t.durationMs : null,
    });
  }
  return out.slice(0, RUN_CAP);
}

/** Coerce retention items (NEXT-X1) — invalid entries are dropped. */
function coerceRetention(raw: unknown): Record<string, RetentionItem> {
  const out: Record<string, RetentionItem> = {};
  if (!raw || typeof raw !== "object") return out;
  for (const [identity, item] of Object.entries(raw as Record<string, unknown>)) {
    if (!item || typeof item !== "object") continue;
    const t = item as Record<string, unknown>;
    if (typeof t.identity !== "string" || t.identity !== identity) continue;
    if (typeof t.topicSlug !== "string") continue;
    out[identity] = {
      identity,
      topicSlug: t.topicSlug,
      dueAt: typeof t.dueAt === "number" ? t.dueAt : Date.now(),
      intervalDays: typeof t.intervalDays === "number" ? Math.max(1, t.intervalDays) : 1,
      streak: typeof t.streak === "number" ? Math.max(0, Math.round(t.streak)) : 0,
      updatedAt: typeof t.updatedAt === "number" ? t.updatedAt : Date.now(),
    };
  }
  return out;
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

  // custom test stats (absent in older payloads → defaults)
  if (r.customTest && typeof r.customTest === "object") {
    const c = r.customTest as Record<string, unknown>;
    data.customTest = {
      attempts: typeof c.attempts === "number" ? c.attempts : 0,
      latestScore: typeof c.latestScore === "number" ? c.latestScore : null,
      bestScore: typeof c.bestScore === "number" ? c.bestScore : null,
      lastAttemptAt: typeof c.lastAttemptAt === "number" ? c.lastAttemptAt : null,
      lastRunQuestions:
        typeof c.lastRunQuestions === "number" ? c.lastRunQuestions : null,
    };
  }

  // mistake book (absent in older payloads → empty book)
  if (r.mistakeBook && typeof r.mistakeBook === "object") {
    for (const [identity, entry] of Object.entries(
      r.mistakeBook as Record<string, unknown>
    )) {
      const coerced = coerceMistakeEntry(entry);
      if (coerced) data.mistakeBook[identity] = coerced;
    }
  }

  // saved test presets (absent in older payloads → none)
  data.testPresets = coerceTestPresets(r.testPresets);

  // answer log per topic (absent in older payloads → empty)
  if (r.answers && typeof r.answers === "object") {
    for (const [slug, stats] of Object.entries(r.answers as Record<string, unknown>)) {
      const coerced = coerceTopicStats(stats);
      if (coerced && coerced.topicClass) data.answers[slug] = coerced;
    }
  }

  // run summaries (absent in older payloads → none)
  data.runs = coerceRuns(r.runs);

  // retention items (absent in older payloads → none)
  data.retention = coerceRetention(r.retention);

  // daily-plan dismissal (absent → null)
  data.planDismissedOn = typeof r.planDismissedOn === "string" ? r.planDismissedOn : null;

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
    for (const [slug, sections] of Object.entries(completed)) {
      if (!Array.isArray(sections)) continue;
      const existing = data.courses[slug];
      if (existing) {
        for (const s of sections) {
          if (!existing.completedSections.includes(s)) {
            existing.completedSections.push(s);
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
 * Record a COMPLETED Custom Test run (/quiz/custom) into its isolated
 * namespace. Only completed runs are recorded — resetting the current
 * attempt never writes anything here.
 */
export function recordCustomTestAttempt(correct: number, totalQuestions: number): void {
  update((data) => {
    data.customTest.attempts += 1;
    data.customTest.latestScore =
      totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : null;
    if (
      data.customTest.latestScore !== null &&
      (data.customTest.bestScore === null || data.customTest.latestScore > data.customTest.bestScore)
    ) {
      data.customTest.bestScore = data.customTest.latestScore;
    }
    data.customTest.lastAttemptAt = Date.now();
    data.customTest.lastRunQuestions = totalQuestions;
  });
}

/* ============================================================
   Mistake Book API (NOW-N1)
   ============================================================ */

/**
 * Record incorrect answers (batch) from any completed practice or
 * Custom Test run. One entry per identity: a re-miss increments
 * wrongCount and refreshes the chosen option; the book never stores
 * scores or judgments. When the book exceeds MISTAKE_CAP, the
 * stalest revisits (oldest lastWrongAt) drop off first.
 */
export function recordMistakes(inputs: MistakeRecordInput[]): void {
  if (inputs.length === 0) return;
  update((data) => {
    const now = Date.now();
    for (const input of inputs) {
      const existing = data.mistakeBook[input.identity];
      if (existing) {
        existing.wrongCount += 1;
        existing.lastWrongAt = now;
        existing.chosenOption = input.chosenOption;
        existing.source = input.source; // keep attribution fresh
      } else {
        data.mistakeBook[input.identity] = {
          ...input,
          wrongCount: 1,
          firstWrongAt: now,
          lastWrongAt: now,
        };
      }
    }
    const ids = Object.keys(data.mistakeBook);
    if (ids.length > MISTAKE_CAP) {
      ids.sort(
        (a, b) => data.mistakeBook[a].lastWrongAt - data.mistakeBook[b].lastWrongAt
      );
      for (const id of ids.slice(0, ids.length - MISTAKE_CAP)) {
        delete data.mistakeBook[id];
      }
    }
  });
}

/**
 * Resolve questions answered correctly — the self-healing loop. A
 * question that was in the book and is later answered correctly (in
 * a normal run or a retest) leaves the book: it is no longer "to
 * revisit". Identities that were never in the book are a no-op.
 */
export function resolveMistakes(identities: string[]): void {
  if (identities.length === 0) return;
  update((data) => {
    for (const identity of identities) {
      delete data.mistakeBook[identity];
    }
  });
}

/** Manually clear one entry (the list view's per-question action). */
export function clearMistake(identity: string): void {
  update((data) => {
    delete data.mistakeBook[identity];
  });
}

/** Manually clear the whole book (behind a two-step confirm in the UI). */
export function clearAllMistakes(): void {
  update((data) => {
    data.mistakeBook = {};
  });
}

/** All entries, newest revisit first. */
export function getMistakeBookEntries(): MistakeEntry[] {
  return Object.values(getProgress().mistakeBook).sort(
    (a, b) => b.lastWrongAt - a.lastWrongAt
  );
}

/** Aggregation for filters and honest counts (no scoring). */
export interface MistakeBookStats {
  total: number;
  /** Count per class label (e.g. "SSRI": 4), largest first. */
  byClass: Array<{ sourceClass: string; count: number }>;
  /** Count per source page name, largest first. */
  bySource: Array<{ sourceName: string; count: number }>;
}

export function getMistakeBookStats(): MistakeBookStats {
  const entries = Object.values(getProgress().mistakeBook);
  const byClass = new Map<string, number>();
  const bySource = new Map<string, number>();
  for (const entry of entries) {
    byClass.set(
      entry.source.sourceClass,
      (byClass.get(entry.source.sourceClass) ?? 0) + 1
    );
    bySource.set(
      entry.source.sourceName,
      (bySource.get(entry.source.sourceName) ?? 0) + 1
    );
  }
  const toSorted = (m: Map<string, number>) =>
    [...m.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  return {
    total: entries.length,
    byClass: toSorted(byClass).map((c) => ({ sourceClass: c.label, count: c.count })),
    bySource: toSorted(bySource).map((s) => ({ sourceName: s.label, count: s.count })),
  };
}

/* ============================================================
   Saved Test Presets API (NOW-N4)
   ============================================================ */

/** All saved presets, newest first. */
export function getTestPresets(): TestPreset[] {
  return [...getProgress().testPresets].sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * Save a preset (name + configuration). Newest first, capped at
 * PRESET_CAP — the oldest preset drops off when the cap is hit.
 * Returns the saved preset.
 */
export function saveTestPreset(input: {
  name: string;
  drugSlugs: string[];
  count: number;
  timed: boolean;
  minutes: number | null;
}): TestPreset {
  const preset: TestPreset = {
    id: `preset-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    name: input.name.trim().slice(0, 40) || "My test",
    drugSlugs: [...new Set(input.drugSlugs)],
    count: Math.max(1, Math.round(input.count)),
    timed: input.timed,
    minutes: input.timed ? (typeof input.minutes === "number" ? Math.max(1, Math.round(input.minutes)) : null) : null,
    createdAt: Date.now(),
    lastLaunchedAt: null,
  };
  update((data) => {
    data.testPresets = [preset, ...data.testPresets].slice(0, PRESET_CAP);
  });
  return preset;
}

/** Delete one preset by id. */
export function deleteTestPreset(id: string): void {
  update((data) => {
    data.testPresets = data.testPresets.filter((p) => p.id !== id);
  });
}

/** Record a one-tap launch (keeps lastLaunchedAt honest). */
export function recordPresetLaunch(id: string): void {
  update((data) => {
    const preset = data.testPresets.find((p) => p.id === id);
    if (preset) preset.lastLaunchedAt = Date.now();
  });
}

/* ============================================================
   Answer Log API (NEXT-N9 / X2 / X5) + Retention updates (X1)
   ============================================================ */

/**
 * Record a batch of answered questions from a completed run — the
 * single tap that feeds per-topic accuracy AND the Retention Engine:
 *
 *   - topics: answered/correct counters + the capped recent window
 *   - retention: a WRONG answer (re)schedules the question for
 *     review tomorrow; a CORRECT answer advances an existing item's
 *     interval up the fixed ladder (first-time-correct questions are
 *     never scheduled — there is no evidence of weakness).
 */
export function recordAnswerEvents(events: AnswerEventInput[]): void {
  if (events.length === 0) return;
  update((data) => {
    const now = Date.now();
    for (const e of events) {
      if (!e.identity || !e.topicSlug) continue;
      const topic = data.answers[e.topicSlug] ?? {
        answered: 0,
        correct: 0,
        lastSeenAt: 0,
        recent: [],
        topicName: e.topicName || e.topicSlug,
        topicClass: e.topicClass || "Medications",
      };
      topic.answered += 1;
      if (e.correct) topic.correct += 1;
      topic.lastSeenAt = now;
      topic.topicName = e.topicName || topic.topicName;
      topic.topicClass = e.topicClass || topic.topicClass;
      topic.recent.push({ at: now, correct: e.correct, identity: e.identity });
      if (topic.recent.length > TOPIC_RECENT_CAP) {
        topic.recent.splice(0, topic.recent.length - TOPIC_RECENT_CAP);
      }
      data.answers[e.topicSlug] = topic;

      // Retention Engine update (X1) — fed from the same events.
      const item = data.retention[e.identity];
      if (!e.correct) {
        data.retention[e.identity] = {
          identity: e.identity,
          topicSlug: e.topicSlug,
          intervalDays: RETENTION_RESET_DAYS,
          dueAt: now + RETENTION_RESET_DAYS * 86_400_000,
          streak: 0,
          updatedAt: now,
        };
      } else if (item) {
        const intervalDays = nextIntervalDays(item.intervalDays);
        item.intervalDays = intervalDays;
        item.streak += 1;
        item.dueAt = now + intervalDays * 86_400_000;
        item.updatedAt = now;
      }
    }

    // Retention cap — least recently updated items drop off first.
    const ids = Object.keys(data.retention);
    if (ids.length > RETENTION_CAP) {
      ids.sort((a, b) => data.retention[a].updatedAt - data.retention[b].updatedAt);
      for (const id of ids.slice(0, ids.length - RETENTION_CAP)) {
        delete data.retention[id];
      }
    }
  });
}

/**
 * Record one completed run summary (score + duration trends, X5).
 * Runs are append-only and capped — the oldest drop off first.
 */
export function recordRunSummary(run: Omit<RunRecord, "at">): void {
  update((data) => {
    data.runs.unshift({ ...run, at: Date.now() });
    if (data.runs.length > RUN_CAP) {
      data.runs.length = RUN_CAP;
    }
  });
}

/* ============================================================
   Retention Engine API (NEXT-X1) — due queue + export
   ============================================================ */

/** One due-review row for the review queue UI. */
export interface RetentionDueEntry {
  identity: string;
  topicSlug: string;
  dueAt: number;
  intervalDays: number;
  streak: number;
  overdueDays: number;
}

/**
 * The due-today queue: every retention item whose dueAt has passed,
 * most overdue first. `limit` caps a single review session.
 */
export function getRetentionDueQueue(now = Date.now(), limit = 20): RetentionDueEntry[] {
  const data = getProgress();
  return Object.values(data.retention)
    .filter((item) => item.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt)
    .slice(0, limit)
    .map((item) => ({
      identity: item.identity,
      topicSlug: item.topicSlug,
      dueAt: item.dueAt,
      intervalDays: item.intervalDays,
      streak: item.streak,
      overdueDays: Math.max(0, Math.floor((now - item.dueAt) / 86_400_000)),
    }));
}

/** Count of items due right now (cheap version of the queue). */
export function getRetentionDueCount(now = Date.now()): number {
  const data = getProgress();
  let count = 0;
  for (const item of Object.values(data.retention)) {
    if (item.dueAt <= now) count += 1;
  }
  return count;
}

/**
 * The clean export shape for future sync — a plain, versioned,
 * JSON-serialisable snapshot of the Retention Engine state. No PII,
 * no credentials — question identities and schedule fields only.
 */
export function getRetentionExport(): {
  kind: "kyp:retention:v1";
  exportedAt: number;
  items: RetentionItem[];
} {
  const data = getProgress();
  return {
    kind: "kyp:retention:v1",
    exportedAt: Date.now(),
    items: Object.values(data.retention).sort((a, b) => a.dueAt - b.dueAt),
  };
}

/** Manually remove one item from the review schedule (list action). */
export function clearRetentionItem(identity: string): void {
  update((data) => {
    delete data.retention[identity];
  });
}

/* ============================================================
   Daily Plan dismissal (NEXT-X8)
   ============================================================ */

/** Dismiss the daily plan for the rest of today (local date). */
export function dismissDailyPlan(): void {
  update((data) => {
    data.planDismissedOn = new Date().toISOString().slice(0, 10);
  });
}

/** Whether the daily plan is dismissed for today. */
export function isDailyPlanDismissed(): boolean {
  const data = getProgress();
  return data.planDismissedOn === new Date().toISOString().slice(0, 10);
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
    data.customTest = emptyCustomTestStats();
    data.mistakeBook = {};
    data.testPresets = [];
    data.answers = {};
    data.runs = [];
    data.retention = {};
    data.planDismissedOn = null;
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
