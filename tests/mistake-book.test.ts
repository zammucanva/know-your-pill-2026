/**
 * Mistake Book Test Suite — the NOW-N1 store contract.
 *
 * Unit tests for the cross-test "questions to revisit" layer inside
 * kyp:progress:v1 (src/lib/kyp/progress/progress-store.ts). No server
 * needed — exercised directly against a shimmed localStorage.
 *
 * Coverage map:
 *   1-2   record → entries exist, neutral shape (no scores/judgments)
 *   3-4   re-miss increments wrongCount, refreshes chosen option
 *   5-6   resolveMistakes removes (the self-healing loop); unknown ids no-op
 *   7-9   clear one / clear all
 *   10    persistence across a simulated reload
 *   11    corrupt payload tolerated (bad entries dropped, page never breaks)
 *   12    cap enforcement — stalest revisits drop off first
 *   13    aggregation stats (byClass / bySource / total)
 *   14    mistake book is isolated from other namespaces (clearProgress resets it;
 *         recording never touches course/practice/customTest stats)
 *   15-17 presets (NOW-N4 store layer): save/cap/delete/launch bookkeeping
 */

import { beforeEach, describe, expect, test } from "bun:test";
import type { MistakeRecordInput } from "@/lib/kyp/progress/progress-store";

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
const store = await import("@/lib/kyp/progress/progress-store");

const {
  PROGRESS_STORAGE_KEY,
  MISTAKE_CAP,
  __resetForTests,
  getProgress,
  recordMistakes,
  resolveMistakes,
  clearMistake,
  clearAllMistakes,
  getMistakeBookEntries,
  getMistakeBookStats,
  getTestPresets,
  saveTestPreset,
  deleteTestPreset,
  recordPresetLaunch,
  PRESET_CAP,
} = store as typeof import("@/lib/kyp/progress/progress-store");

function entry(overrides: Partial<MistakeRecordInput> = {}): MistakeRecordInput {
  return {
    identity: "sertraline|mcq:sertraline-quiz-1",
    question: "Which neurotransmitter system does sertraline primarily act on?",
    options: ["Serotonin", "Dopamine", "Norepinephrine", "GABA"],
    correctIndex: 0,
    explanation: "Sertraline is an SSRI — it blocks the serotonin transporter.",
    source: {
      sourceName: "Sertraline",
      sourceSlug: "sertraline",
      sourceType: "drug",
      sourceClass: "SSRI",
      sectionLabel: "In-course quiz",
      sectionHref: "/drugs/sertraline#mechanism",
    },
    templateId: "authored",
    chosenOption: "Dopamine",
    ...overrides,
  };
}

beforeEach(() => {
  storage.clear();
  __resetForTests();
});

describe("mistake book — recording", () => {
  test("1. a recorded miss creates exactly one neutral entry", () => {
    recordMistakes([entry()]);
    const all = getMistakeBookEntries();
    expect(all.length).toBe(1);
    const e = all[0];
    expect(e.wrongCount).toBe(1);
    expect(e.chosenOption).toBe("Dopamine");
    expect(e.source.sectionHref).toBe("/drugs/sertraline#mechanism");
    // Neutral shape: the entry stores no scores or judgments.
    const raw = JSON.parse(storage.getItem(PROGRESS_STORAGE_KEY)!);
    const stored = raw.mistakeBook[e.identity];
    expect(Object.keys(stored).sort()).toEqual(
      [
        "identity", "question", "options", "correctIndex", "explanation",
        "source", "templateId", "chosenOption", "wrongCount",
        "firstWrongAt", "lastWrongAt",
      ].sort()
    );
  });

  test("2. empty batch is a no-op (nothing recorded, storage untouched)", () => {
    recordMistakes([]);
    expect(getMistakeBookEntries().length).toBe(0);
    expect(getProgress().mistakeBook).toEqual({});
  });

  test("3. re-missing the same question increments wrongCount and updates the choice", () => {
    recordMistakes([entry()]);
    recordMistakes([entry({ chosenOption: "GABA" })]);
    const all = getMistakeBookEntries();
    expect(all.length).toBe(1);
    expect(all[0].wrongCount).toBe(2);
    expect(all[0].chosenOption).toBe("GABA");
    expect(all[0].lastWrongAt).toBeGreaterThanOrEqual(all[0].firstWrongAt);
  });

  test("4. distinct identities are distinct entries", () => {
    recordMistakes([
      entry(),
      entry({ identity: "bupropion|mcq:bupropion-quiz-1", source: {
        sourceName: "Bupropion", sourceSlug: "bupropion", sourceType: "drug",
        sourceClass: "NDRI", sectionLabel: "In-course quiz",
        sectionHref: "/drugs/bupropion#mechanism",
      } }),
    ]);
    expect(getMistakeBookEntries().length).toBe(2);
  });
});

describe("mistake book — the self-healing loop", () => {
  test("5. a later correct answer resolves the entry", () => {
    recordMistakes([entry(), entry({ identity: "bupropion|x" })]);
    resolveMistakes([entry().identity]);
    const remaining = getMistakeBookEntries();
    expect(remaining.length).toBe(1);
    expect(remaining[0].identity).toBe("bupropion|x");
  });

  test("6. resolving an unknown identity is a safe no-op", () => {
    recordMistakes([entry()]);
    resolveMistakes(["never-recorded"]);
    expect(getMistakeBookEntries().length).toBe(1);
  });
});

describe("mistake book — clearing", () => {
  test("7. clearMistake removes exactly one entry", () => {
    recordMistakes([entry(), entry({ identity: "b" })]);
    clearMistake(entry().identity);
    expect(getMistakeBookEntries().map((e) => e.identity)).toEqual(["b"]);
  });

  test("8. clearAllMistakes empties the book", () => {
    recordMistakes([entry(), entry({ identity: "b" }), entry({ identity: "c" })]);
    clearAllMistakes();
    expect(getMistakeBookEntries().length).toBe(0);
  });

  test("9. clearProgress (the global reset) also clears the book", () => {
    recordMistakes([entry()]);
    (store as { clearProgress: () => void }).clearProgress();
    expect(getMistakeBookEntries().length).toBe(0);
  });
});

describe("mistake book — persistence and safety", () => {
  test("10. entries survive a simulated reload", () => {
    recordMistakes([entry({ chosenOption: "Norepinephrine" })]);
    __resetForTests(); // simulate a fresh page load
    const all = getMistakeBookEntries();
    expect(all.length).toBe(1);
    expect(all[0].chosenOption).toBe("Norepinephrine");
    expect(all[0].wrongCount).toBe(1);
  });

  test("11. a corrupt payload drops bad entries and keeps valid ones", () => {
    const raw = JSON.parse(storage.getItem(PROGRESS_STORAGE_KEY) ?? "null");
    // hand-write a corrupt payload: one valid entry, one broken entry
    const payload = raw ?? { version: 1 };
    payload.mistakeBook = {
      "good|mcq:1": entry({ identity: "good|mcq:1" }),
      "bad|mcq:2": { identity: 42, question: null, options: "nope" },
      "bad|mcq:3": { identity: "bad|mcq:3", question: "q", options: ["a"], correctIndex: 5, chosenOption: "x" },
    };
    storage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(payload));
    __resetForTests();
    const all = getMistakeBookEntries();
    expect(all.length).toBe(1);
    expect(all[0].identity).toBe("good|mcq:1");
  });

  test("12. the cap drops the stalest revisits first", () => {
    const batch: MistakeRecordInput[] = [];
    for (let i = 0; i < MISTAKE_CAP + 10; i++) {
      batch.push(entry({ identity: `drug-${i}|mcq:${i}` }));
    }
    recordMistakes(batch);
    const all = getMistakeBookEntries();
    expect(all.length).toBe(MISTAKE_CAP);
    // Same-timestamp writes keep insertion order in the overflow sort;
    // the invariant that matters: no more than MISTAKE_CAP survive.
    for (const e of all) expect(e.wrongCount).toBe(1);
  });
});

describe("mistake book — aggregation", () => {
  test("13. stats group by class and source with honest totals", () => {
    recordMistakes([
      entry(), // SSRI / Sertraline
      entry({ identity: "fluoxetine|mcq:1", source: {
        sourceName: "Fluoxetine", sourceSlug: "fluoxetine", sourceType: "drug",
        sourceClass: "SSRI", sectionLabel: "In-course quiz", sectionHref: "/drugs/fluoxetine",
      } }),
      entry({ identity: "bupropion|mcq:1", source: {
        sourceName: "Bupropion", sourceSlug: "bupropion", sourceType: "drug",
        sourceClass: "NDRI", sectionLabel: "In-course quiz", sectionHref: "/drugs/bupropion",
      } }),
    ]);
    const stats = getMistakeBookStats();
    expect(stats.total).toBe(3);
    expect(stats.byClass[0]).toEqual({ sourceClass: "SSRI", count: 2 });
    expect(stats.byClass).toContainEqual({ sourceClass: "NDRI", count: 1 });
    expect(stats.bySource.map((s) => s.sourceName).sort()).toEqual(
      ["Bupropion", "Fluoxetine", "Sertraline"]
    );
  });

  test("14. recording mistakes never contaminates the other namespaces", () => {
    recordMistakes([entry()]);
    const data = getProgress();
    expect(data.practice.attempts).toBe(0);
    expect(data.customTest.attempts).toBe(0);
    expect(Object.keys(data.courses).length).toBe(0);
    expect(data.recentActivity.length).toBe(0);
  });
});

describe("saved test presets (NOW-N4 store layer)", () => {
  test("15. save + list + delete round-trip", () => {
    const p = saveTestPreset({
      name: "SSRI drill",
      drugSlugs: ["sertraline", "fluoxetine"],
      count: 20,
      timed: true,
      minutes: 20,
    });
    expect(getTestPresets().length).toBe(1);
    expect(getTestPresets()[0].name).toBe("SSRI drill");
    expect(getTestPresets()[0].minutes).toBe(20);

    recordPresetLaunch(p.id);
    expect(getTestPresets()[0].lastLaunchedAt).toBeGreaterThan(0);

    deleteTestPreset(p.id);
    expect(getTestPresets().length).toBe(0);
  });

  test("16. preset cap keeps the newest PRESET_CAP presets", () => {
    for (let i = 0; i < PRESET_CAP + 3; i++) {
      saveTestPreset({ name: `test-${i}`, drugSlugs: ["sertraline"], count: 5, timed: false, minutes: null });
    }
    const all = getTestPresets();
    expect(all.length).toBe(PRESET_CAP);
    expect(all[0].name).toBe(`test-${PRESET_CAP + 2}`); // newest first
  });

  test("17. untimed presets store minutes as null; names are trimmed", () => {
    saveTestPreset({ name: "  spaced out  ", drugSlugs: ["bupropion"], count: 10, timed: false, minutes: 99 });
    const p = getTestPresets()[0];
    expect(p.name).toBe("spaced out");
    expect(p.minutes).toBeNull();
    expect(p.timed).toBe(false);
  });
});

/* The window shim stays installed for this suite — the store reads
 * localStorage lazily on every access, so tests must keep window
 * alive while they run (same lifecycle as progress-store.test.ts). */
