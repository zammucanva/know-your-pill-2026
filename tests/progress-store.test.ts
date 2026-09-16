/**
 * KYP Local Progress Store Test Suite — 22 checks.
 *
 * Unit tests for the static-hosting-safe localStorage learning
 * progress layer (src/lib/kyp/progress/progress-store.ts). No server
 * needed — these exercise the store directly against a shimmed
 * localStorage, including persistence across "page reloads", corrupt
 * payloads, and the one-way migration from the legacy
 * kyp-section-completion key.
 *
 * Coverage map:
 *   1-3   SSR / storage-unavailable safety (no window, no crash)
 *   4-6   course visits (creation, visit count, last-visited pointers)
 *   7-9   section completion (mark, unmark, idempotency)
 *   10-12 current-section persistence + resume data
 *   13-15 completion stamping (all-outline rule)
 *   16-17 quiz records (micro-quiz stats + practice runs)
 *   18-19 persistence across a simulated reload + corrupt payload
 *   20-21 legacy migration (data preserved, old key removed)
 *   22    full clear (the reset affordance)
 */

import { beforeEach, describe, expect, test } from "bun:test";

/* ── Minimal localStorage shim (Bun has no DOM) ─────────────────── */

class MemoryStorage {
  private map = new Map<string, string>();

  get length(): number {
    return this.map.size;
  }
  clear(): void {
    this.map.clear();
  }
  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }
  key(index: number): string | null {
    return Array.from(this.map.keys())[index] ?? null;
  }
  removeItem(key: string): void {
    this.map.delete(key);
  }
  setItem(key: string, value: string): void {
    this.map.set(key, String(value));
  }
}

const storage = new MemoryStorage();

function installWindow(): void {
  (globalThis as Record<string, unknown>).window = { localStorage: storage };
}

function dropWindow(): void {
  delete (globalThis as Record<string, unknown>).window;
}

/* ── Module under test (imported AFTER the window shim) ────────── */

installWindow();
const P = await import("../src/lib/kyp/progress/progress-store");

const {
  PROGRESS_STORAGE_KEY,
  LEGACY_STORAGE_KEY,
  getProgress,
  getCourseProgress,
  recordCourseVisit,
  markSectionComplete,
  unmarkSectionComplete,
  setCurrentSection,
  recordMicroQuizAnswer,
  recordPracticeAttempt,
  syncCourseCompletion,
  getLastVisitedCourse,
  getRecentCourses,
  clearProgress,
  __resetForTests,
} = P;

/** Simulate a full page reload: fresh module cache, same storage. */
function reload(): void {
  __resetForTests();
}

beforeEach(() => {
  storage.clear();
  reload();
});

describe("KYP local progress store", () => {
  /* ── SSR / no-storage safety ────────────────────────────────── */

  test("1. APIs never throw when localStorage is unavailable (SSR)", () => {
    dropWindow();
    try {
      // No window → no snapshot (the hydration contract)
      expect(getSnapshotOrNull()).toBeNull();
      // Every write API degrades to the in-memory fallback, no crash
      recordCourseVisit("bupropion", "Bupropion");
      markSectionComplete("bupropion", "mechanism");
      setCurrentSection("bupropion", "mechanism", "Mechanism");
      // The session-memory store still serves the UI
      expect(getCourseProgress("bupropion")?.completedSections).toEqual([
        "mechanism",
      ]);
      expect(getLastVisitedCourse()?.slug).toBe("bupropion");
    } finally {
      installWindow();
    }
  });

  test("2. getServerSnapshot is always null (hydration contract)", () => {
    expect(P.getServerSnapshot()).toBeNull();
    expect(P.getServerSnapshot()).toBeNull();
  });

  test("3. subscribe fires on writes and unsubscribes cleanly", () => {
    let fired = 0;
    const off = P.subscribe(() => {
      fired += 1;
    });
    recordCourseVisit("sertraline", "Sertraline");
    expect(fired).toBeGreaterThan(0);
    const before = fired;
    off();
    markSectionComplete("sertraline", "mechanism");
    expect(fired).toBe(before);
  });

  /* ── Course visits ──────────────────────────────────────────── */

  test("4. first visit creates the course record", () => {
    recordCourseVisit("bupropion", "Bupropion");
    const course = getCourseProgress("bupropion");
    expect(course).not.toBeNull();
    expect(course?.title).toBe("Bupropion");
    expect(course?.visitCount).toBe(1);
    expect(course?.completedSections).toEqual([]); // never fake completion
    expect(course?.completedAt).toBeNull();
  });

  test("5. repeat visits increment count + update last-visited pointers", () => {
    recordCourseVisit("bupropion", "Bupropion");
    recordCourseVisit("sertraline", "Sertraline");
    recordCourseVisit("bupropion", "Bupropion");
    expect(getCourseProgress("bupropion")?.visitCount).toBe(2);
    expect(getProgress().lastVisitedSlug).toBe("bupropion");
    const last = getLastVisitedCourse();
    expect(last?.slug).toBe("bupropion");
  });

  test("6. getLastVisitedCourse survives a reload (real persistence)", () => {
    recordCourseVisit("fluoxetine", "Fluoxetine");
    reload();
    const last = getLastVisitedCourse();
    expect(last?.slug).toBe("fluoxetine");
    expect(last?.title).toBe("Fluoxetine");
  });

  /* ── Section completion ─────────────────────────────────────── */

  test("7. markSectionComplete is idempotent", () => {
    recordCourseVisit("bupropion", "Bupropion");
    markSectionComplete("bupropion", "top");
    markSectionComplete("bupropion", "top");
    markSectionComplete("bupropion", "top");
    expect(getCourseProgress("bupropion")?.completedSections).toEqual(["top"]);
  });

  test("8. unmarkSectionComplete removes a section and revokes completion", () => {
    recordCourseVisit("bupropion", "Bupropion");
    markSectionComplete("bupropion", "top");
    unmarkSectionComplete("bupropion", "top");
    expect(getCourseProgress("bupropion")?.completedSections).toEqual([]);
  });

  test("9. completed sections persist across a reload", () => {
    recordCourseVisit("bupropion", "Bupropion");
    markSectionComplete("bupropion", "top");
    markSectionComplete("bupropion", "quick-facts");
    markSectionComplete("bupropion", "mechanism");
    reload();
    const course = getCourseProgress("bupropion");
    expect(course?.completedSections.length).toBe(3);
    expect(course?.completedSections).toContain("mechanism");
  });

  /* ── Current section (resume data) ──────────────────────────── */

  test("10. setCurrentSection saves id + label", () => {
    recordCourseVisit("bupropion", "Bupropion");
    setCurrentSection("bupropion", "side-effects", "Side Effects");
    const course = getCourseProgress("bupropion");
    expect(course?.currentSectionId).toBe("side-effects");
    expect(course?.currentSectionLabel).toBe("Side Effects");
  });

  test("11. current section persists across a reload", () => {
    recordCourseVisit("bupropion", "Bupropion");
    setCurrentSection("bupropion", "active-recall", "Active Recall");
    reload();
    const course = getCourseProgress("bupropion");
    expect(course?.currentSectionId).toBe("active-recall");
    expect(course?.currentSectionLabel).toBe("Active Recall");
  });

  test("12. position updates bump lastVisited pointers", () => {
    recordCourseVisit("sertraline", "Sertraline");
    setCurrentSection("sertraline", "monitoring", "Monitoring");
    expect(getProgress().lastVisitedSlug).toBe("sertraline");
  });

  /* ── Completion stamping ────────────────────────────────────── */

  test("13. completion requires EVERY outline section", () => {
    recordCourseVisit("bupropion", "Bupropion");
    const outline = ["top", "quick-facts", "mechanism"];
    markSectionComplete("bupropion", "top");
    markSectionComplete("bupropion", "quick-facts");
    expect(syncCourseCompletion("bupropion", outline)).toBe(false);
    expect(getCourseProgress("bupropion")?.completedAt).toBeNull();
  });

  test("14. full outline stamps completedAt", () => {
    recordCourseVisit("bupropion", "Bupropion");
    const outline = ["top", "quick-facts", "mechanism"];
    for (const id of outline) markSectionComplete("bupropion", id);
    expect(syncCourseCompletion("bupropion", outline)).toBe(true);
    expect(getCourseProgress("bupropion")?.completedAt).not.toBeNull();
  });

  test("15. un-completing a section clears the stamp", () => {
    recordCourseVisit("bupropion", "Bupropion");
    const outline = ["top", "quick-facts"];
    for (const id of outline) markSectionComplete("bupropion", id);
    syncCourseCompletion("bupropion", outline);
    unmarkSectionComplete("bupropion", "quick-facts");
    expect(syncCourseCompletion("bupropion", outline)).toBe(false);
    expect(getCourseProgress("bupropion")?.completedAt).toBeNull();
  });

  /* ── Quiz records ───────────────────────────────────────────── */

  test("16. micro-quiz best score requires a full pass (no inflation)", () => {
    recordCourseVisit("bupropion", "Bupropion");
    // 3 of 4 rendered questions answered correctly — still partial
    recordMicroQuizAnswer("bupropion", "q1", true, 4);
    recordMicroQuizAnswer("bupropion", "q2", false, 4);
    recordMicroQuizAnswer("bupropion", "q3", true, 4);
    let quiz = getCourseProgress("bupropion")?.quiz;
    expect(quiz?.attempts).toBe(3);
    expect(quiz?.bestScore).toBeNull(); // partial pass never scores
    // 4th answer completes the pass: 3/4 correct = 75
    recordMicroQuizAnswer("bupropion", "q4", true, 4);
    quiz = getCourseProgress("bupropion")?.quiz;
    expect(quiz?.bestScore).toBe(75);
    // re-answering q2 correctly on a later visit: full pass 4/4 = 100
    recordMicroQuizAnswer("bupropion", "q2", true, 4);
    quiz = getCourseProgress("bupropion")?.quiz;
    expect(quiz?.attempts).toBe(5);
    expect(quiz?.bestScore).toBe(100);
    expect(quiz?.lastAttemptAt).not.toBeNull();
  });

  test("17. practice runs track attempts/latest/best and persist", () => {
    recordPracticeAttempt(8, 10); // 80%
    recordPracticeAttempt(6, 10); // 60%
    reload();
    const practice = getProgress().practice;
    expect(practice.attempts).toBe(2);
    expect(practice.latestScore).toBe(60);
    expect(practice.bestScore).toBe(80);
    expect(practice.lastRunQuestions).toBe(10);
  });

  /* ── Resilience ──────────────────────────────────────────────── */

  test("18. a corrupt payload degrades to empty, never throws", () => {
    storage.setItem(PROGRESS_STORAGE_KEY, "{not valid json!!!");
    reload();
    expect(getProgress().courses).toEqual({});
    // and the store keeps working afterwards
    recordCourseVisit("bupropion", "Bupropion");
    expect(getCourseProgress("bupropion")?.visitCount).toBe(1);
  });

  test("19. a wrong-shaped payload is coerced to safe defaults", () => {
    storage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({ version: 1, courses: { junk: "not-a-course" }, practice: "junk" })
    );
    reload();
    const data = getProgress();
    expect(data.courses).toEqual({});
    expect(data.practice.attempts).toBe(0);
  });

  /* ── Legacy migration ────────────────────────────────────────── */

  test("20. legacy kyp-section-completion sections migrate in", () => {
    storage.setItem(
      LEGACY_STORAGE_KEY,
      JSON.stringify({
        state: { completed: { bupropion: ["top", "mechanism"] } },
        version: 0,
      })
    );
    reload();
    const course = getCourseProgress("bupropion");
    expect(course?.completedSections).toContain("top");
    expect(course?.completedSections).toContain("mechanism");
    expect(storage.getItem(LEGACY_STORAGE_KEY)).toBeNull(); // old key removed
    // kyp:progress:v1 is now the single namespace
    expect(storage.getItem(PROGRESS_STORAGE_KEY)).not.toBeNull();
  });

  test("21. a corrupt legacy key is ignored safely", () => {
    storage.setItem(LEGACY_STORAGE_KEY, "}}}not-json");
    reload();
    expect(getProgress().courses).toEqual({});
  });

  /* ── Reset ───────────────────────────────────────────────────── */

  test("22. clearProgress wipes everything, including storage", () => {
    recordCourseVisit("bupropion", "Bupropion");
    markSectionComplete("bupropion", "top");
    recordPracticeAttempt(5, 10);
    clearProgress();
    expect(getProgress().courses).toEqual({});
    expect(getProgress().lastVisitedSlug).toBeNull();
    expect(getProgress().practice.attempts).toBe(0);
    expect(getRecentCourses()).toEqual([]);
    reload();
    expect(getProgress().courses).toEqual({}); // storage was wiped too
  });
});

/** Snapshot accessor that tolerates the no-window state. */
function getSnapshotOrNull(): unknown {
  return P.getSnapshot();
}
