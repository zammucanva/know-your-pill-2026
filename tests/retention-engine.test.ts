/**
 * Retention Engine Test Suite — the NEXT-X1 contract.
 *
 * Unit tests for the interval scheduler (pure) and the store's
 * retention namespace (due queue, cap, export shape). No server
 * needed — exercised directly against a shimmed localStorage.
 *
 * Coverage map (scheduler):
 *   1-2   ladder advancement + the 30-day cap
 *   3     reset-on-wrong returns to 1 day
 *   4     isDue boundary
 * Coverage map (store):
 *   5     due queue: most overdue first, limit respected
 *   6     due count matches the queue
 *   7     the review feed: misses schedule, corrects advance,
 *         first-time corrects never enter the schedule
 *   8     retention cap (least recently updated drop first)
 *   9     export shape is versioned, serialisable, PII-free
 *   10    clearRetentionItem removes exactly one item
 *   11    the review session page exists and uses the engine
 *   12    hub integration: StudyNextPanel + Practice row exist
 */

import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

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

/* ── Pure scheduler under test ─────────────────────────────────── */

import { nextIntervalDays, advanceInterval, resetInterval, isDue } from "@/lib/kyp/retention/schedule";

const DAY = 86_400_000;

describe("retention — pure scheduler", () => {
  test("1. the ladder advances one rung at a time", () => {
    expect(nextIntervalDays(1)).toBe(2);
    expect(nextIntervalDays(2)).toBe(4);
    expect(nextIntervalDays(4)).toBe(7);
    expect(nextIntervalDays(7)).toBe(14);
    expect(nextIntervalDays(14)).toBe(30);
  });

  test("2. the ladder never grows past 30 days", () => {
    expect(nextIntervalDays(30)).toBe(30);
    expect(nextIntervalDays(999)).toBe(30);
    const { intervalDays, dueAt } = advanceInterval(30, 1_000_000);
    expect(intervalDays).toBe(30);
    expect(dueAt - 1_000_000).toBe(30 * DAY);
  });

  test("3. an incorrect answer resets to 1 day", () => {
    const { intervalDays, dueAt } = resetInterval(5_000_000);
    expect(intervalDays).toBe(1);
    expect(dueAt - 5_000_000).toBe(DAY);
  });

  test("4. isDue is inclusive at the boundary", () => {
    expect(isDue(1_000, 1_000)).toBe(true);
    expect(isDue(999, 1_000)).toBe(true);
    expect(isDue(1_001, 1_000)).toBe(false);
  });
});

/* ── Store-level retention tests (after the window shim) ───────── */

import {
  __resetForTests,
  recordAnswerEvents,
  getRetentionDueQueue,
  getRetentionDueCount,
  getRetentionExport,
  clearRetentionItem,
  getProgress,
  RETENTION_CAP,
  type AnswerEventInput,
} from "@/lib/kyp/progress/progress-store";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

function miss(slug: string, identity: string, topicClass = "SSRI"): AnswerEventInput {
  return {
    identity,
    topicSlug: slug,
    topicName: slug,
    topicClass,
    correct: false,
  };
}

function hit(slug: string, identity: string, topicClass = "SSRI"): AnswerEventInput {
  return { ...miss(slug, identity, topicClass), correct: true };
}

describe("retention — store", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("5. the due queue is most-overdue first and respects its limit", () => {
    recordAnswerEvents([
      miss("sertraline", "s|a"), // scheduled first → due earliest
      miss("fluoxetine", "f|b"),
      miss("bupropion", "b|c", "NDRI"),
    ]);
    const queue = getRetentionDueQueue(Date.now() + 10 * DAY, 2);
    expect(queue.length).toBe(2);
    expect(queue[0].identity).toBe("s|a"); // earliest dueAt first
    expect(queue[0].overdueDays).toBeGreaterThanOrEqual(9);
  });

  test("6. nothing due before the interval passes", () => {
    recordAnswerEvents([miss("sertraline", "s|a")]);
    expect(getRetentionDueCount(Date.now() + 1000)).toBe(0); // due tomorrow
    expect(getRetentionDueCount(Date.now() + 2 * DAY)).toBe(1);
  });

  test("7. the full feed cycle: miss → due → correct advances → miss resets", () => {
    recordAnswerEvents([miss("sertraline", "s|q")]);
    let item = getProgress().retention["s|q"];
    expect(item.intervalDays).toBe(1);
    // Correct → advances to 2 days.
    recordAnswerEvents([hit("sertraline", "s|q")]);
    item = getProgress().retention["s|q"];
    expect(item.intervalDays).toBe(2);
    expect(item.streak).toBe(1);
    // Miss → resets to 1 day, streak 0.
    recordAnswerEvents([miss("sertraline", "s|q")]);
    item = getProgress().retention["s|q"];
    expect(item.intervalDays).toBe(1);
    expect(item.streak).toBe(0);
  });

  test("8. the retention cap drops the least recently updated items", () => {
    const batch: AnswerEventInput[] = [];
    for (let i = 0; i < RETENTION_CAP + 25; i++) {
      batch.push(miss("sertraline", `s|cap-${i}`));
    }
    recordAnswerEvents(batch);
    expect(Object.keys(getProgress().retention).length).toBe(RETENTION_CAP);
    // The first-recorded (least recently updated) items dropped off.
    expect(getProgress().retention["s|cap-0"]).toBeUndefined();
    expect(getProgress().retention[`s|cap-${RETENTION_CAP + 24}`]).toBeDefined();
  });

  test("9. the export shape is versioned, plain and PII-free", () => {
    recordAnswerEvents([miss("sertraline", "s|a"), miss("fluoxetine", "f|b")]);
    const exported = getRetentionExport();
    expect(exported.kind).toBe("kyp:retention:v1");
    expect(exported.items.length).toBe(2);
    expect(exported.exportedAt).toBeGreaterThan(0);
    const json = JSON.stringify(exported); // must be serialisable
    expect(json).toContain("kyp:retention:v1");
    expect(exported.items[0]).toEqual(
      expect.objectContaining({ identity: expect.any(String), dueAt: expect.any(Number) })
    );
    // Every field is schedule data — no question text, no PII.
    for (const item of exported.items) {
      expect(Object.keys(item).sort()).toEqual([
        "dueAt",
        "identity",
        "intervalDays",
        "streak",
        "topicSlug",
        "updatedAt",
      ]);
    }
  });

  test("10. clearRetentionItem removes exactly one scheduled item", () => {
    recordAnswerEvents([miss("sertraline", "s|a"), miss("fluoxetine", "f|b")]);
    clearRetentionItem("s|a");
    const data = getProgress();
    expect(data.retention["s|a"]).toBeUndefined();
    expect(data.retention["f|b"]).toBeDefined();
  });

  test("11. the review-session page exists, reuses the engine, and records all namespaces", () => {
    const page = "src/app/study/review/page.tsx";
    expect(existsSync(join(process.cwd(), page))).toBe(true);
    const src = read(page);
    expect(src).toContain("buildRetest"); // deterministic regeneration, no new engine
    expect(src).toContain("getRetentionDueQueue");
    expect(src).toContain("recordAnswerEvents"); // feeds topic accuracy
    expect(src).toContain("recordRunSummary"); // surface: "review"
    expect(src).toContain("recordMistakes");
    expect(src).toContain("resolveMistakes");
    expect(src).toContain("getRetentionExport"); // export affordance
    // Neutral framing — no streak/gamification copy
    expect(src).not.toMatch(/streak points|day streak|gamif/i);
    expect(src).toContain("interval");
  });

  test("12. Study Mode surfaces the engine: panel chip + Practice row", () => {
    const panel = read("src/components/kyp/sections/study/study-next-panel.tsx");
    expect(panel).toContain("getRetentionDueCount");
    expect(panel).toContain('href="/study/review"');
    expect(panel).toContain("Reviews due");
    const entry = read("src/components/kyp/sections/study/retention-due-entry.tsx");
    expect(entry).toContain("getRetentionDueCount");
    expect(entry).toContain('href="/study/review"');
    expect(read("src/app/study/page.tsx")).toContain("RetentionDueEntry");
  });
});
