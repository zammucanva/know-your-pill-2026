/**
 * Topic Accuracy Test Suite — the NEXT-N9 / X2 / X5 store contract.
 *
 * Unit tests for the answer-log namespace inside kyp:progress:v1
 * (src/lib/kyp/progress/progress-store.ts) plus the pure aggregation
 * layer (src/lib/kyp/analytics/topic-stats.ts). No server needed —
 * exercised directly against a shimmed localStorage.
 *
 * Coverage map:
 *   1-2   recordAnswerEvents → per-topic counters + recents
 *   3-4   per-class rollup (multiple pages of one class merge)
 *   5     minimum-sample rule: no accuracy before MIN_TOPIC_SAMPLE
 *   6-7   retention integration: misses schedule, corrects advance
 *   8-9   run summaries recorded once per completed run, capped
 *   10    persistence across a simulated reload
 *   11    corrupt payload tolerated (bad entries dropped)
 *   12    namespaces isolated (clearProgress resets; quiz history
 *         never touches course/practice/customTest stats)
 *   13    recent-window accuracy (recency view for X2)
 */

import { beforeEach, describe, expect, test } from "bun:test";
import type { AnswerEventInput } from "@/lib/kyp/progress/progress-store";

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

import { __resetForTests, PROGRESS_STORAGE_KEY, recordAnswerEvents, recordRunSummary, getProgress, clearProgress, getRetentionDueCount } from "@/lib/kyp/progress/progress-store";
import {
  rollupByClass,
  recentAccuracy,
  MIN_TOPIC_SAMPLE,
  RECENT_WINDOW,
} from "@/lib/kyp/analytics/topic-stats";

const DAY = 86_400_000;

function event(
  slug: string,
  identity: string,
  correct: boolean,
  topicClass = "SSRI",
  topicName = "Test Drug"
): AnswerEventInput {
  return {
    identity,
    topicSlug: slug,
    topicName,
    topicClass,
    correct,
  };
}

describe("topic accuracy — answer log", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("1. recordAnswerEvents aggregates per-topic counters", () => {
    recordAnswerEvents([
      event("sertraline", "sertraline|mcq:q1", true),
      event("sertraline", "sertraline|mcq:q2", false),
      event("sertraline", "sertraline|mcq:q3", true),
    ]);
    const topic = getProgress().answers["sertraline"];
    expect(topic).toBeDefined();
    expect(topic.answered).toBe(3);
    expect(topic.correct).toBe(2);
    expect(topic.recent.length).toBe(3);
    expect(topic.topicClass).toBe("SSRI");
  });

  test("2. the recent window is capped and keeps the newest events", () => {
    const events: AnswerEventInput[] = [];
    for (let i = 0; i < 50; i++) {
      events.push(event("sertraline", `sertraline|mcq:q${i}`, i % 2 === 0));
    }
    recordAnswerEvents(events);
    const topic = getProgress().answers["sertraline"];
    expect(topic.recent.length).toBe(40); // TOPIC_RECENT_CAP
    expect(topic.recent[0].identity).toBe("sertraline|mcq:q10"); // oldest 10 dropped
    expect(topic.recent[39].identity).toBe("sertraline|mcq:q49");
    expect(topic.answered).toBe(50); // lifetime counter is NOT capped
  });

  test("3. per-class rollup merges every page of the same class", () => {
    recordAnswerEvents([
      event("sertraline", "s|1", true),
      event("sertraline", "s|2", true),
      event("fluoxetine", "f|1", false),
      event("bupropion", "b|1", true, "NDRI"),
      event("mdd", "m|1", false, "Diseases", "Depression"),
    ]);
    const rows = rollupByClass(getProgress().answers);
    const ssri = rows.find((r) => r.key === "SSRI");
    expect(ssri?.answered).toBe(3);
    expect(ssri?.correct).toBe(2);
    expect(ssri?.slugs.sort()).toEqual(["fluoxetine", "sertraline"]);
    const ndri = rows.find((r) => r.key === "NDRI");
    expect(ndri?.answered).toBe(1);
    expect(rows.some((r) => r.key === "Diseases")).toBe(true);
  });

  test("4. accuracy rounds to a whole percentage", () => {
    const events: AnswerEventInput[] = [];
    for (let i = 0; i < 10; i++) {
      events.push(event("sertraline", `s|${i}`, i < 6)); // 6/10
    }
    recordAnswerEvents(events);
    const rows = rollupByClass(getProgress().answers);
    expect(rows.find((r) => r.key === "SSRI")?.accuracy).toBe(60);
  });

  test("5. below the minimum sample no accuracy is offered (N9 rule)", () => {
    const events: AnswerEventInput[] = [];
    for (let i = 0; i < MIN_TOPIC_SAMPLE - 1; i++) {
      events.push(event("sertraline", `s|${i}`, true));
    }
    recordAnswerEvents(events);
    const rows = rollupByClass(getProgress().answers);
    const row = rows.find((r) => r.key === "SSRI");
    expect(row?.enoughData).toBe(false);
    // One more answer crosses the threshold.
    recordAnswerEvents([event("sertraline", "s|more", true)]);
    const rows2 = rollupByClass(getProgress().answers);
    expect(rows2.find((r) => r.key === "SSRI")?.enoughData).toBe(true);
  });

  test("6. a miss schedules a retention review; a first-time correct does not", () => {
    recordAnswerEvents([event("sertraline", "s|miss", false)]);
    const item = getProgress().retention["s|miss"];
    expect(item).toBeDefined();
    expect(item.intervalDays).toBe(1);
    expect(item.dueAt).toBeGreaterThan(Date.now());
    recordAnswerEvents([event("sertraline", "s|fresh-correct", true)]);
    expect(getProgress().retention["s|fresh-correct"]).toBeUndefined();
  });

  test("7. a correct answer advances an existing item up the ladder", () => {
    recordAnswerEvents([event("sertraline", "s|q", false)]);
    const beforeDueAt = getProgress().retention["s|q"].dueAt;
    recordAnswerEvents([event("sertraline", "s|q", true)]);
    const after = getProgress().retention["s|q"];
    expect(after.intervalDays).toBe(2); // 1 → 2
    expect(after.streak).toBe(1);
    expect(after.dueAt).toBeGreaterThan(beforeDueAt);
    // A later miss resets it back to 1 day, streak 0.
    recordAnswerEvents([event("sertraline", "s|q", false)]);
    const reset = getProgress().retention["s|q"];
    expect(reset.intervalDays).toBe(1);
    expect(reset.streak).toBe(0);
    expect(reset.dueAt - Date.now()).toBeLessThanOrEqual(DAY);
  });

  test("8. run summaries record once per completed run, newest first", () => {
    recordRunSummary({ surface: "quiz", mode: "normal", correct: 8, total: 10, durationMs: null });
    recordRunSummary({ surface: "custom", mode: "timed", correct: 5, total: 10, durationMs: 120_000 });
    const runs = getProgress().runs;
    expect(runs.length).toBe(2);
    expect(runs[0].surface).toBe("custom"); // newest first
    expect(runs[0].mode).toBe("timed");
    expect(runs[1].correct).toBe(8);
  });

  test("9. run summaries are capped at 30", () => {
    for (let i = 0; i < 35; i++) {
      recordRunSummary({ surface: "quiz", mode: "normal", correct: 1, total: 1, durationMs: null });
    }
    expect(getProgress().runs.length).toBe(30);
  });

  test("10. everything persists across a simulated reload", () => {
    recordAnswerEvents([
      event("sertraline", "s|1", true),
      event("fluoxetine", "f|1", false),
    ]);
    recordRunSummary({ surface: "custom", mode: "normal", correct: 1, total: 2, durationMs: 90_000 });
    __resetForTests(); // simulates a fresh page load
    const data = getProgress();
    expect(data.answers["sertraline"].answered).toBe(1);
    expect(data.answers["fluoxetine"].correct).toBe(0);
    expect(data.retention["f|1"].intervalDays).toBe(1);
    expect(data.runs.length).toBe(1);
  });

  test("11. a corrupt payload degrades to safe defaults, never crashes", () => {
    storage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        answers: {
          sertraline: { answered: "lots", correct: null, recent: "no" },
          "not-an-object": 42,
        },
        runs: [{ at: "yesterday" }, 7, null],
        retention: { "x|1": { identity: "different", topicSlug: "x" } },
        planDismissedOn: 99,
      })
    );
    const data = getProgress();
    expect(Object.keys(data.answers)).toEqual([]);
    expect(data.runs).toEqual([]);
    expect(data.retention["x|1"]).toBeUndefined();
    expect(data.planDismissedOn).toBeNull();
  });

  test("12. the answer log is isolated from the other namespaces", () => {
    recordAnswerEvents([event("sertraline", "s|1", false)]);
    recordRunSummary({ surface: "quiz", mode: "normal", correct: 0, total: 1, durationMs: null });
    const before = getProgress();
    expect(before.practice.attempts).toBe(0); // the raw store call alone
    expect(before.courses["sertraline"]).toBeUndefined();
    clearProgress();
    const after = getProgress();
    expect(after.answers).toEqual({});
    expect(after.runs).toEqual([]);
    expect(after.retention).toEqual({});
    expect(getRetentionDueCount()).toBe(0);
  });

  test("13. recent-window accuracy (the X2 recency view)", () => {
    const events: AnswerEventInput[] = [];
    // 8 old answers: all correct
    for (let i = 0; i < 8; i++) events.push(event("sertraline", `s|old${i}`, true));
    // 2 recent answers: both wrong
    events.push(event("sertraline", "s|new1", false));
    events.push(event("sertraline", "s|new2", false));
    recordAnswerEvents(events);
    const topic = getProgress().answers["sertraline"];
    const recent = recentAccuracy(topic, RECENT_WINDOW);
    expect(recent?.answered).toBe(10);
    expect(recent?.accuracy).toBe(80); // 8 of 10
    expect(recentAccuracy({ answered: 0, correct: 0, lastSeenAt: 0, recent: [] })).toBeNull();
  });
});
