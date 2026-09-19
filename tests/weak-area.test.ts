/**
 * Weak-Area Test Suite — the NEXT-X2 contract.
 *
 * Unit tests for the pure selection layer
 * (src/lib/kyp/custom-test/weak-area.ts) plus source-level pins of
 * the builder integration. No server needed.
 *
 * Coverage map:
 *   1-2   minimum-volume threshold: thin classes are never flagged
 *   3     the accuracy threshold: solid classes are not weak
 *   4     ranking is weakest-first
 *   5     the reason is plain language assembled from real numbers
 *   6     due reviews and Mistake Book entries feed the weighting
 *   7     the union of drug slugs drives the drill
 *   8     Diseases never produce drug slugs (excluded from selection)
 *   9-10  builder integration pins: card + one-tap ?weak= entry
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

import {
  __resetForTests,
  recordAnswerEvents,
  recordMistakes,
  getProgress,
  type AnswerEventInput,
  type MistakeRecordInput,
} from "@/lib/kyp/progress/progress-store";
import {
  selectWeakTopics,
  weakAreaDrugSlugs,
  WEAK_ACCURACY_THRESHOLD,
} from "@/lib/kyp/custom-test/weak-area";
import { MIN_TOPIC_SAMPLE } from "@/lib/kyp/analytics/topic-stats";

const DAY = 86_400_000;

function answer(
  slug: string,
  identity: string,
  correct: boolean,
  topicClass: string
): AnswerEventInput {
  return { identity, topicSlug: slug, topicName: slug, topicClass, correct };
}

/** Record n answers for a class at the given accuracy. */
function seedClass(
  slugs: string[],
  topicClass: string,
  total: number,
  correctCount: number
): void {
  const events: AnswerEventInput[] = [];
  let correctLeft = correctCount;
  for (let i = 0; i < total; i++) {
    const correct = correctLeft > 0;
    if (correct) correctLeft -= 1;
    events.push(
      answer(slugs[i % slugs.length], `${topicClass.toLowerCase()}-${i}`, correct, topicClass)
    );
  }
  recordAnswerEvents(events);
}

describe("weak-area — selection", () => {
  beforeEach(() => {
    storage.clear();
    dropWindow();
    installWindow();
    __resetForTests();
  });

  test("1. a class below the minimum volume is never flagged", () => {
    seedClass(["sertraline"], "SSRI", MIN_TOPIC_SAMPLE - 1, 0); // 7 answers, all wrong
    const selection = selectWeakTopics(getProgress());
    expect(selection.topics).toEqual([]);
    expect(selection.enoughData).toBe(false);
  });

  test("2. at the minimum volume a genuinely weak class is flagged", () => {
    seedClass(["sertraline", "fluoxetine"], "SSRI", MIN_TOPIC_SAMPLE, 2); // 25%
    const selection = selectWeakTopics(getProgress());
    expect(selection.topics.length).toBe(1);
    expect(selection.topics[0].classLabel).toBe("SSRI");
    expect(selection.topics[0].answered).toBe(MIN_TOPIC_SAMPLE);
    expect(selection.enoughData).toBe(true);
  });

  test("3. solid classes are not weak", () => {
    seedClass(["sertraline", "fluoxetine"], "SSRI", MIN_TOPIC_SAMPLE, 8); // 100%
    const selection = selectWeakTopics(getProgress());
    expect(selection.topics).toEqual([]);
    // The boundary itself is excluded (>= threshold is not weak).
    seedClass(["bupropion"], "NDRI", 20, (20 * WEAK_ACCURACY_THRESHOLD) / 100);
    const boundary = selectWeakTopics(getProgress());
    expect(boundary.topics.find((t) => t.classLabel === "NDRI")).toBeUndefined();
  });

  test("4. ranking is weakest-first", () => {
    seedClass(["venlafaxine", "duloxetine"], "SNRI", 12, 2); // ~17%
    seedClass(["bupropion"], "NDRI", 12, 6); // 50%
    const selection = selectWeakTopics(getProgress());
    expect(selection.topics.map((t) => t.classLabel)).toEqual(["SNRI", "NDRI"]);
  });

  test("5. the reason is plain language assembled from real numbers", () => {
    seedClass(["sertraline"], "SSRI", 10, 3); // 30%
    const selection = selectWeakTopics(getProgress());
    const reason = selection.topics[0].reason;
    // Exactly the commissioning shape: numbers + class, no jargon.
    expect(reason).toContain("30% over the last 10 answers");
    expect(reason).toMatch(/%|due|revisit/);
    // No shaming language anywhere.
    expect(reason).not.toMatch(/bad|fail|poor|terrible/i);
  });

  test("6. due reviews and open mistakes feed the reason", () => {
    seedClass(["sertraline"], "SSRI", 10, 3);
    // One still-open mistake in the SSRI class.
    recordMistakes([
      {
        identity: "sertraline-x|1",
        question: "q",
        options: ["a", "b"],
        correctIndex: 0,
        explanation: "e",
        source: {
          sourceName: "Sertraline",
          sourceSlug: "sertraline",
          sourceType: "drug",
          sourceClass: "SSRI",
          sectionLabel: "Side effects",
          sectionHref: "/drugs/sertraline#side-effects",
        },
        templateId: "authored",
        chosenOption: "b",
      } satisfies MistakeRecordInput,
    ]);
    // Force every scheduled item to be due now (7 misses → 7 items).
    const data = getProgress();
    const items = Object.values(data.retention);
    expect(items.length).toBe(7); // 10 answers, 3 correct → 7 misses
    const now = items[0].dueAt + DAY; // after the scheduled date
    const selection = selectWeakTopics(getProgress(), now);
    expect(selection.topics[0].dueCount).toBe(7);
    expect(selection.topics[0].mistakeCount).toBe(1);
    expect(selection.topics[0].reason).toContain("7 due in SSRI");
    expect(selection.topics[0].reason).toContain("1 to revisit");
  });

  test("7. the drill draws from the union of the weak classes' drugs", () => {
    seedClass(["venlafaxine", "duloxetine"], "SNRI", 12, 2);
    seedClass(["bupropion"], "NDRI", 12, 6);
    const slugs = weakAreaDrugSlugs(selectWeakTopics(getProgress()));
    expect(slugs.sort()).toEqual(["bupropion", "duloxetine", "venlafaxine"]);
  });

  test("8. Diseases are excluded — no drug slugs exist for them", () => {
    seedClass(["mdd"], "Diseases", 10, 1); // 10%, very weak
    const selection = selectWeakTopics(getProgress());
    expect(selection.topics.find((t) => t.classLabel === "Diseases")).toBeUndefined();
  });
});

describe("weak-area — builder integration pins", () => {
  const read = (rel: string): string =>
    readFileSync(join(process.cwd(), rel), "utf8");

  test("9. the builder offers the Weak-Area Test with honest empty states", () => {
    const src = read("src/app/quiz/custom/page.tsx");
    expect(src).toContain("selectWeakTopics");
    expect(src).toContain("Weak-Area Test");
    expect(src).toContain("Drill my weak areas");
    expect(src).toContain("Not enough practice history yet");
    expect(src).toContain("No weak classes right now");
    // The reasons banner carries the explanation into the test.
    expect(src).toContain("Weak-Area Test — drawn from your practice history");
  });

  test("10. one-tap ?weak= entry exists for the Daily Plan and chips", () => {
    const src = read("src/app/quiz/custom/page.tsx");
    expect(src).toContain('get("weak")');
  });

  test("11. the selection module itself is threshold-guarded and pure", () => {
    expect(existsSync(join(process.cwd(), "src/lib/kyp/custom-test/weak-area.ts"))).toBe(true);
    const src = read("src/lib/kyp/custom-test/weak-area.ts");
    expect(src).toContain("MIN_TOPIC_SAMPLE");
    expect(src).toContain("WEAK_ACCURACY_THRESHOLD");
    // No scheduling side effects inside the pure module.
    expect(src).not.toContain("recordAnswerEvents");
    expect(src).not.toContain("update(");
  });
});
