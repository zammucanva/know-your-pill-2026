/**
 * Daily Plan Test Suite — the NEXT-X8 contract.
 *
 * Unit tests for the pure heuristic (src/lib/kyp/study/daily-plan.ts)
 * plus source-level pins of the component. No server needed.
 *
 * Coverage map:
 *   1-4   fixed, explainable ordering: reviews → weak drill →
 *         continue/start, whatever exists
 *   5     every step carries a plain factual detail line
 *   6-7   fully dismissible for the rest of the day (store round-trip)
 *   8     never nagging: no streaks, no guilt language
 *   9     the Study hub mounts the plan above Study Next
 */

import { beforeEach, describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
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
  dismissDailyPlan,
  isDailyPlanDismissed,
  type AnswerEventInput,
  type MistakeRecordInput,
} from "@/lib/kyp/progress/progress-store";
import { buildDailyPlan } from "@/lib/kyp/study/daily-plan";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const DAY = 86_400_000;

function seedWeakSsri(): void {
  const events: AnswerEventInput[] = [];
  for (let i = 0; i < 10; i++) {
    events.push({
      identity: `s|${i}`,
      topicSlug: "sertraline",
      topicName: "Sertraline",
      topicClass: "SSRI",
      correct: i < 3, // 30%
    });
  }
  recordAnswerEvents(events);
}

function seedVisit(): void {
  // A raw course-progress shape via the store's own writer.
  recordMistakes([
    {
      identity: "seed|visit",
      question: "q",
      options: ["a", "b"],
      correctIndex: 0,
      explanation: "e",
      source: {
        sourceName: "X",
        sourceSlug: "x",
        sourceType: "drug",
        sourceClass: "SSRI",
        sectionLabel: "S",
        sectionHref: "/drugs/x#s",
      },
      templateId: "authored",
      chosenOption: "b",
    } satisfies MistakeRecordInput,
  ]);
}

describe("daily plan — the pure heuristic", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("1. empty state: the plan still suggests starting something new", () => {
    const plan = buildDailyPlan(getProgress());
    expect(plan.length).toBe(1);
    expect(plan[0].id).toBe("start");
    expect(plan[0].href).toBe("/study#medications");
  });

  test("2. due reviews come FIRST — the fixed ordering", () => {
    seedWeakSsri(); // creates 7 retention items (due tomorrow)
    seedVisit();
    const now = Date.now() + 2 * DAY; // everything is due by now
    const plan = buildDailyPlan(getProgress(), now);
    expect(plan[0].id).toBe("reviews");
    expect(plan[0].title).toContain("7 due");
    expect(plan[0].href).toBe("/study/review");
  });

  test("3. the weak-area drill is step 2 when weakness exists", () => {
    seedWeakSsri();
    const plan = buildDailyPlan(getProgress());
    expect(plan.some((s) => s.id === "weak-drill")).toBe(true);
    const drill = plan.find((s) => s.id === "weak-drill")!;
    expect(drill.title).toContain("SSRI");
    expect(drill.href).toBe("/quiz/custom?weak=1");
    expect(drill.detail).toContain("30%");
  });

  test("4. reviews → drill → continue is the full fixed order", () => {
    seedWeakSsri();
    seedVisit();
    const plan = buildDailyPlan(getProgress(), Date.now() + 2 * DAY);
    expect(plan.map((s) => s.id)).toEqual(["reviews", "weak-drill", "start"]);
    // The plan never exceeds the three fixed steps.
    expect(plan.length).toBeLessThanOrEqual(3);
  });

  test("5. every step carries a plain factual detail line", () => {
    const plan = buildDailyPlan(getProgress(), Date.now() + 2 * DAY);
    for (const step of plan) {
      expect(step.detail.length).toBeGreaterThan(10);
    }
  });
});

describe("daily plan — dismissal + component pins", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("6. dismissal hides the plan for the rest of the day only", () => {
    expect(isDailyPlanDismissed()).toBe(false);
    dismissDailyPlan();
    expect(isDailyPlanDismissed()).toBe(true);
    // A fresh load the same day: still dismissed.
    __resetForTests();
    expect(isDailyPlanDismissed()).toBe(true);
  });

  test("7. the component renders nothing once dismissed today", () => {
    const src = read("src/components/kyp/sections/study/daily-plan.tsx");
    expect(src).toContain("isDailyPlanDismissed");
    expect(src).toContain("dismissDailyPlan");
    expect(src).toContain("if (!data || dismissed) return null;");
  });

  test("8. never nagging — no streaks, no guilt language anywhere", () => {
    // Targeted at actual nag/guilt patterns (streak counts, missed-day
    // calls, pressure) — NOT the factual "questions you missed before"
    // phrasing shared with the review surfaces, nor the doc comments
    // that describe this very rule.
    const guilt = /day streak|streak of \d|you missed \d|don'?t forget|shame|guilt|lazy|behind schedule|keep it up|don'?t break/i;
    for (const file of [
      "src/lib/kyp/study/daily-plan.ts",
      "src/components/kyp/sections/study/daily-plan.tsx",
    ]) {
      const src = read(file);
      expect(src).not.toMatch(guilt);
    }
  });

  test("9. the Study hub mounts the plan above Study Next", () => {
    const src = read("src/app/study/page.tsx");
    expect(src).toContain("<DailyPlan />");
    expect(src.indexOf("<DailyPlan />")).toBeLessThan(src.indexOf("<StudyNextPanel />"));
    // The dismissal copy explains itself and stays gentle.
    const comp = read("src/components/kyp/sections/study/daily-plan.tsx");
    expect(comp).toContain("Hide it for today whenever you like.");
    expect(comp).toContain("A fixed order");
  });
});
