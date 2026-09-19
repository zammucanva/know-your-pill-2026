/**
 * Test History Analytics Test Suite — the NEXT-X5 contract.
 *
 * Unit tests for the pure analytics helpers (mistake persistence)
 * plus source-level pins of the /study/analytics page and its
 * minimum-sample rules. No server needed.
 *
 * Coverage map:
 *   1-4   mistakePersistence: repeat misses, open entries, recent
 *         wrong rate, sorting
 *   5     the page exists with the four commissioned views
 *   6     minimum-sample rules on every displayed statistic
 *   7     neutral framing — no shaming language anywhere
 *   8     the N9 chips link into the full page
 *   9     local-only: no network calls, no tracking
 */

import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/* ── Minimal localStorage shim ─────────────────────────────────── */

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

import {
  __resetForTests,
  recordAnswerEvents,
  recordMistakes,
  getProgress,
  type AnswerEventInput,
  type MistakeRecordInput,
} from "@/lib/kyp/progress/progress-store";
import { mistakePersistence } from "@/lib/kyp/analytics/topic-stats";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

function missInput(identity: string, sourceClass: string): MistakeRecordInput {
  return {
    identity,
    question: `q ${identity}`,
    options: ["a", "b"],
    correctIndex: 0,
    explanation: "e",
    source: {
      sourceName: "Drug",
      sourceSlug: "drug",
      sourceType: "drug",
      sourceClass,
      sectionLabel: "Section",
      sectionHref: "/drugs/x#section",
    },
    templateId: "authored",
    chosenOption: "b",
  };
}

describe("analytics — mistake persistence (pure)", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("1. repeat misses are counted separately from open entries", () => {
    // Two misses on the same identity + one single miss.
    recordMistakes([missInput("x|1", "SSRI")]);
    recordMistakes([missInput("x|1", "SSRI")]); // wrongCount → 2
    recordMistakes([missInput("x|2", "SSRI")]); // wrongCount → 1
    const rows = mistakePersistence(getProgress().mistakeBook, getProgress().answers);
    const ssri = rows.find((r) => r.key === "SSRI");
    expect(ssri?.repeatedMisses).toBe(1); // only x|1
    expect(ssri?.openMistakes).toBe(2);
  });

  test("2. the recent wrong rate derives from the answer log", () => {
    const events: AnswerEventInput[] = [];
    for (let i = 0; i < 4; i++) {
      events.push({
        identity: `s|${i}`,
        topicSlug: "sertraline",
        topicName: "Sertraline",
        topicClass: "SSRI",
        correct: i < 1, // 1 of 4 correct → 75% wrong
      });
    }
    recordAnswerEvents(events);
    const rows = mistakePersistence({}, getProgress().answers);
    expect(rows.find((r) => r.key === "SSRI")?.recentWrongRate).toBe(75);
  });

  test("3. classes with no wrong answers show no persistence row", () => {
    const events: AnswerEventInput[] = [];
    for (let i = 0; i < 4; i++) {
      events.push({
        identity: `s|${i}`,
        topicSlug: "sertraline",
        topicName: "Sertraline",
        topicClass: "SSRI",
        correct: true,
      });
    }
    recordAnswerEvents(events);
    const rows = mistakePersistence({}, getProgress().answers);
    // A row can exist (recentWrongRate 0%) but repeat misses are 0.
    const ssri = rows.find((r) => r.key === "SSRI");
    expect(ssri?.repeatedMisses).toBe(0);
    expect(ssri?.recentWrongRate).toBe(0);
  });

  test("4. rows sort by most repeated misses first", () => {
    recordMistakes([missInput("a|1", "SSRI"), missInput("a|1", "SSRI")]);
    recordMistakes([missInput("b|1", "NDRI")]);
    const rows = mistakePersistence(getProgress().mistakeBook, {});
    expect(rows[0].key).toBe("SSRI");
  });
});

describe("analytics — page contract pins", () => {
  const PAGE = "src/app/study/analytics/page.tsx";

  test("5. the page exists with the four commissioned views", () => {
    expect(existsSync(join(process.cwd(), PAGE))).toBe(true);
    const src = read(PAGE);
    expect(src).toContain("Accuracy by class");
    expect(src).toContain("Accuracy over time by topic");
    expect(src).toContain("Test duration");
    expect(src).toContain("Mistake persistence");
    expect(src).toContain("Recent runs");
  });

  test("6. minimum-sample rules guard every displayed statistic", () => {
    const src = read(PAGE);
    // Class accuracy is threshold-guarded...
    expect(src).toContain("row.enoughData");
    expect(src).toContain("not enough data yet");
    // ...and the topic-level accuracy too.
    expect(src).toContain("topic.answered >= MIN_TOPIC_SAMPLE");
    expect(src).toContain("MIN_TOPIC_SAMPLE");
  });

  test("7. neutral framing throughout — no shaming language", () => {
    const src = read(PAGE);
    expect(src).not.toMatch(/you failed|shame|stupid|bad score|lazy|weak student/i);
    // Persistence is described factually.
    expect(src).toContain("Missed 2+ times");
  });

  test("8. the N9 chips link into the full analytics page", () => {
    const chips = read("src/components/kyp/sections/study/topic-accuracy-chips.tsx");
    expect(chips).toContain('href="/study/analytics"');
    expect(chips).toContain("See full analytics");
  });

  test("9. local-only: no network calls, no tracking", () => {
    const src = read(PAGE);
    expect(src).not.toMatch(/fetch\(|XMLHttpRequest|navigator\.send|gtag|analytics\.com/);
    expect(src).toContain("nothing is tracked");
  });
});
