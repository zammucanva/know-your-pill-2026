/**
 * QUESTION FACTORY: jobs.
 *
 * Batching, stop conditions, cancellation, resumability, "generate more",
 * never-repeat, question-space estimation, request limits, history storage
 * and the review workflow. All offline, on synthetic fixtures.
 */

import { describe, expect, test } from "bun:test";
import { FactoryRunner, type FactoryJob, type FactoryServices } from "@/lib/kyp/question-factory/batch";
import { MemoryHistory, StoredHistory, HISTORY_CAP, HISTORY_STORAGE_KEY, type StorageLike } from "@/lib/kyp/question-factory/history";
import { toPoolQuestion, toTestQuestion, isFactoryIdentity } from "@/lib/kyp/question-factory/integration";
import { EXAM_PRESETS, MAX_PER_REQUEST, validateRequest } from "@/lib/kyp/question-factory/request";
import { InvalidTransitionError, canTransition, isPlayable, markReviewed, selectPlayable, transition } from "@/lib/kyp/question-factory/review";
import { contextFor } from "@/lib/kyp/question-factory/generate";
import { estimateSpace } from "@/lib/kyp/question-factory/space";
import { drugsInScope } from "@/lib/kyp/question-factory/syllabus";
import { TEMPLATES } from "@/lib/kyp/question-factory/templates";
import type { QuestionTemplate } from "@/lib/kyp/question-factory/templates";
import type { FactoryRequest, GeneratedQuestion, QuestionStatus } from "@/lib/kyp/question-factory/types";
import { fixtureStore } from "./helpers/qf-fixtures";

const store = fixtureStore();
const services = (extra: Partial<FactoryServices> = {}): FactoryServices => ({
  store,
  now: () => "2026-01-01T00:00:00.000Z",
  clock: () => 0,
  ...extra,
});

const request = (over: Partial<FactoryRequest> = {}): FactoryRequest & { seed: number } => ({
  scope: {},
  count: 40,
  difficulty: "mixed",
  kind: "mixed",
  neverRepeat: true,
  seed: 4738291,
  ...over,
});

function run(req = request(), svc = services(), batchSize = 10): FactoryJob {
  return FactoryRunner.start(req, svc).runToCompletion(batchSize);
}

describe("batching", () => {
  test("1. a request is satisfied in several controlled batches, never one giant pass", () => {
    const job = run(request({ count: 40 }), services(), 10);
    expect(job.status).toBe("COMPLETED");
    expect(job.completionReason).toBe("REQUEST_SATISFIED");
    expect(job.questions).toHaveLength(40);
    expect(job.batches.length).toBeGreaterThanOrEqual(4);
    for (const b of job.batches) expect(b.accepted).toBeLessThanOrEqual(10);
    expect(job.batches.reduce((n, b) => n + b.accepted, 0)).toBe(40);
  });

  test("2. counts are consistent: generated >= validated >= accepted, remaining reaches zero", () => {
    const { counts } = run();
    expect(counts.generated).toBeGreaterThanOrEqual(counts.validated);
    expect(counts.validated).toBeGreaterThanOrEqual(counts.accepted);
    expect(counts.accepted).toBe(40);
    expect(counts.remaining).toBe(0);
  });

  test("3. every batch carries a complete audit record", () => {
    const job = run();
    for (const b of job.batches) {
      expect(b.batchId).toContain(job.id);
      expect(b.generatorVersion).toBe("1.0.0");
      expect(b.seed).toBe(4738291);
      expect(b.attempted).toBeGreaterThanOrEqual(b.accepted);
      expect(typeof b.durationMs).toBe("number");
      expect(Object.values(b.templatesUsed).reduce((a, c) => a + c, 0)).toBe(b.accepted);
    }
  });

  test("4. accepted questions are published, unique and attributed to a batch", () => {
    const job = run();
    const batchIds = new Set(job.batches.map((b) => b.batchId));
    expect(new Set(job.questions.map((q) => q.fingerprint)).size).toBe(job.questions.length);
    for (const q of job.questions) {
      expect(q.status).toBe("PUBLISHED");
      expect(q.sourceType).toBe("GENERATED");
      expect(batchIds.has(q.provenance.batchId)).toBe(true);
    }
  });

  test("5. a job is reproducible: same request, seed and data give the same questions in the same order", () => {
    const a = run();
    const b = run();
    expect(a.questions.map((q) => q.id)).toEqual(b.questions.map((q) => q.id));
  });

  test("6. a different seed explores a different selection", () => {
    const a = run(request({ seed: 1 }));
    const b = run(request({ seed: 2 }));
    expect(a.questions.map((q) => q.fingerprint)).not.toEqual(b.questions.map((q) => q.fingerprint));
  });

  test("7. correct-answer positions are balanced within a job", () => {
    const job = run(request({ count: 80 }));
    const counts = [0, 0, 0, 0];
    for (const q of job.questions) counts[q.correctIndex]++;
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });
});

describe("stop conditions", () => {
  test("8. asking for more than the space holds ends honestly as QUESTION_SPACE_EXHAUSTED", () => {
    const job = run(request({ count: MAX_PER_REQUEST, scope: { chapter: "Antipsychotics" } }));
    expect(job.status).toBe("EXHAUSTED");
    expect(job.completionReason).toBe("QUESTION_SPACE_EXHAUSTED");
    expect(job.counts.accepted).toBeLessThan(MAX_PER_REQUEST);
    expect(job.counts.accepted).toBeGreaterThan(0);
    expect(job.counts.remaining).toBe(MAX_PER_REQUEST - job.counts.accepted);
  });

  test("9. a selection with no source data reports SOURCE_INSUFFICIENT and invents nothing", () => {
    // a drug with no authored teaching case cannot supply a clinical question
    const job = run(request({ scope: { subtopic: "brolamine" }, kind: "clinical", count: 10 }));
    expect(job.status).toBe("INSUFFICIENT");
    expect(job.completionReason).toBe("SOURCE_INSUFFICIENT");
    expect(job.questions).toHaveLength(0);
  });

  test("10. quality is never lowered to hit a number: a failing template ends the job", () => {
    const failing: QuestionTemplate = {
      id: "always-fails",
      version: "1",
      family: "DIRECT_RECALL",
      kind: "standard",
      depth: 1,
      scopeKind: "drug",
      enumerate: (ctx) =>
        Array.from({ length: 600 }, (_, i) => ({
          slotId: `always-fails|${i}`,
          payload: [String(i)],
          concept: {
            family: "DIRECT_RECALL" as const,
            relations: ["belongsToClass" as const],
            subjectIds: [`s${i}`],
            answerIds: [`a${i}`],
            polarity: "positive" as const,
            frame: "x",
          },
        })).slice(0, ctx.allDrugs.length ? 600 : 0),
      build: () => ({ ok: false, reason: "NOT_ENOUGH_DISTRACTORS" }),
    };
    const job = run(request({ count: 20 }), services({ templates: [failing] }));
    expect(job.counts.accepted).toBe(0);
    expect(["INSUFFICIENT", "EXHAUSTED"]).toContain(job.status);
  });

  test("11. an unexpected error stops the job, keeps valid questions and records the cause", () => {
    const real = TEMPLATES.find((t) => t.id === "fwd-class")!;
    let calls = 0;
    const flaky: QuestionTemplate = {
      ...real,
      id: "flaky",
      build(ctx, slot, rng) {
        if (++calls > 8) throw new Error("boom");
        return real.build(ctx, slot, rng);
      },
    };
    const job = run(request({ count: 30, kind: "standard" }), services({ templates: [flaky] }), 4);
    expect(job.status).toBe("ERROR");
    expect(job.completionReason).toBe("ERROR");
    expect(job.errorMessage).toBe("boom");
    expect(job.questions.length).toBeGreaterThan(0);
  });
});

describe("cancellation", () => {
  test("12. cancelling stops generation and keeps the valid questions already made", () => {
    const runner = FactoryRunner.start(request({ count: 60 }), services());
    runner.runBatch(10);
    runner.runBatch(10);
    const made = runner.job.questions.length;
    expect(made).toBe(20);
    runner.cancel();
    expect(runner.job.status).toBe("CANCELLED");
    expect(runner.job.completionReason).toBe("CANCELLED");
    expect(runner.runBatch(10)).toBeNull();
    expect(runner.job.questions).toHaveLength(made);
    expect(runner.job.questions.every((q) => q.status === "PUBLISHED")).toBe(true);
  });

  test("13. cancelling a finished job changes nothing", () => {
    const runner = FactoryRunner.start(request({ count: 10 }), services());
    runner.runToCompletion(10);
    runner.cancel();
    expect(runner.job.status).toBe("COMPLETED");
  });
});

describe("resumability", () => {
  test("14. a stored job resumes without regenerating accepted questions", () => {
    const runner = FactoryRunner.start(request({ count: 40 }), services());
    runner.runBatch(10);
    runner.runBatch(10);
    runner.cancel(); // the tab "closed" here
    const stored = JSON.parse(JSON.stringify(runner.job)) as FactoryJob; // persisted and reloaded

    const resumed = FactoryRunner.resume(stored, services());
    expect(resumed.job.questions).toHaveLength(20);
    const finished = resumed.runToCompletion(10);

    expect(finished.status).toBe("COMPLETED");
    expect(finished.questions).toHaveLength(40);
    // the first 20 are exactly the ones accepted before, byte for byte
    expect(finished.questions.slice(0, 20)).toEqual(stored.questions);
    // and nothing was generated twice
    expect(new Set(finished.questions.map((q) => q.fingerprint)).size).toBe(40);
  });

  test("15. a job serialises to plain JSON and back without loss", () => {
    const job = run();
    expect(JSON.parse(JSON.stringify(job))).toEqual(job);
  });

  test("16. 'Generate more' extends a finished job and keeps everything unique", () => {
    const runner = FactoryRunner.start(request({ count: 20 }), services());
    runner.runToCompletion(10);
    expect(runner.job.questions).toHaveLength(20);
    runner.extend(20);
    expect(runner.job.status).toBe("RUNNING");
    expect(runner.job.counts.requested).toBe(40);
    runner.runToCompletion(10);
    expect(runner.job.questions).toHaveLength(40);
    expect(new Set(runner.job.questions.map((q) => q.fingerprint)).size).toBe(40);
  });

  test("17. extending an exhausted job cannot conjure questions that do not exist", () => {
    const runner = FactoryRunner.start(request({ count: MAX_PER_REQUEST, scope: { chapter: "Antipsychotics" } }), services());
    runner.runToCompletion(50);
    const before = runner.job.questions.length;
    expect(runner.job.status).toBe("EXHAUSTED");
    runner.extend(100);
    expect(runner.job.status).toBe("EXHAUSTED");
    expect(runner.runBatch(10)).toBeNull();
    expect(runner.job.questions).toHaveLength(before);
  });
});

describe("never repeat", () => {
  const scope = { chapter: "Antipsychotics" };

  test("18. questions seen before are excluded across jobs and sessions", () => {
    const history = new MemoryHistory();
    const first = run(request({ scope, count: 25 }), services({ history }));
    history.add(first.questions.map((q) => q.fingerprint));

    const second = run(request({ scope, count: 25, seed: 99 }), services({ history }));
    const seenBefore = new Set(first.questions.map((q) => q.fingerprint));
    for (const q of second.questions) expect(seenBefore.has(q.fingerprint)).toBe(false);
  });

  test("19. with never-repeat on, a fully seen topic cannot produce more questions", () => {
    const history = new MemoryHistory();
    const all = run(request({ scope, count: MAX_PER_REQUEST }), services({ history }));
    history.add(all.questions.map((q) => q.fingerprint));
    const again = run(request({ scope, count: 20, seed: 5 }), services({ history }));
    expect(again.counts.accepted).toBe(0);
    expect(["INSUFFICIENT", "EXHAUSTED"]).toContain(again.status);
  });

  test("20. with never-repeat off, unseen questions come first and reuse only follows", () => {
    const history = new MemoryHistory();
    const all = run(request({ scope, count: MAX_PER_REQUEST, neverRepeat: false }), services({ history }));
    const total = all.questions.length;
    const half = all.questions.slice(0, Math.floor(total / 2));
    history.add(half.map((q) => q.fingerprint));
    const seen = new Set(half.map((q) => q.fingerprint));

    const unseenCount = total - half.length;
    const next = run(request({ scope, count: total, neverRepeat: false, seed: 7 }), services({ history }));
    expect(next.questions.length).toBeGreaterThan(unseenCount); // reuse happens once unseen runs out
    const firstChunk = next.questions.slice(0, unseenCount);
    expect(firstChunk.filter((q) => seen.has(q.fingerprint))).toHaveLength(0);
  });

  test("21. history only affects the job when never-repeat is on", () => {
    const history = new MemoryHistory();
    const first = run(request({ scope, count: 30 }), services({ history }));
    history.add(first.questions.map((q) => q.fingerprint));
    const relaxed = run(request({ scope, count: 30, neverRepeat: false, seed: 4738291 }), services({ history }));
    expect(relaxed.counts.accepted).toBe(30);
  });
});

describe("question space", () => {
  const ctx = contextFor(store, drugsInScope(store, {}), true);

  test("22. the estimate counts distinct concepts and splits seen from unseen", () => {
    const history = new MemoryHistory();
    const empty = estimateSpace(ctx, "mixed", "mixed", history);
    expect(empty.total).toBeGreaterThan(100);
    expect(empty.seen).toBe(0);
    expect(empty.remaining).toBe(empty.total);

    const job = run(request({ count: 30 }), services({ history }));
    history.add(job.questions.map((q) => q.fingerprint));
    const after = estimateSpace(ctx, "mixed", "mixed", history);
    expect(after.total).toBe(empty.total);
    expect(after.seen).toBe(30);
    expect(after.remaining).toBe(empty.total - 30);
  });

  test("23. it never claims infinity: it states what the number is and is not", () => {
    const e = estimateSpace(ctx, "mixed", "mixed", null);
    expect(Number.isFinite(e.total)).toBe(true);
    expect(e.note).toMatch(/estimate/i);
    expect(e.note).toMatch(/not a promise/i);
  });

  test("24. re-worded versions of a concept are not counted as new questions", () => {
    const e = estimateSpace(ctx, "mixed", "mixed", null);
    const slotsTotal = TEMPLATES.reduce((n, t) => n + t.enumerate(ctx).length, 0);
    expect(e.total).toBeLessThanOrEqual(slotsTotal);
  });

  test("25. narrowing the selection narrows the space", () => {
    const wide = estimateSpace(ctx, "mixed", "mixed", null).total;
    const narrow = estimateSpace(
      contextFor(store, drugsInScope(store, { chapter: "Antipsychotics" }), false),
      "mixed",
      "mixed",
      null
    ).total;
    expect(narrow).toBeLessThan(wide);
  });
});

describe("request validation", () => {
  const ok = { scope: {}, count: 10 };

  test("26. a minimal request is accepted and gets safe defaults and a seed", () => {
    const r = validateRequest(ok, store, () => 1234);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.request.difficulty).toBe("mixed");
      expect(r.request.kind).toBe("mixed");
      expect(r.request.neverRepeat).toBe(false);
      expect(r.request.seed).toBe(1234);
    }
  });

  test("27. quantities are bounded per request, but 'generate more' is not capped overall", () => {
    expect(validateRequest({ ...ok, count: 0 }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, count: -4 }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, count: 2.5 }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, count: "10" }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, count: MAX_PER_REQUEST }, store).ok).toBe(true);
    const tooMany = validateRequest({ ...ok, count: MAX_PER_REQUEST + 1 }, store);
    expect(tooMany.ok).toBe(false);
    if (!tooMany.ok) expect(tooMany.errors.join(" ")).toContain("Generate more");
  });

  test("28. unknown options, oversized fields and unknown syllabus nodes are rejected", () => {
    expect(validateRequest({ ...ok, difficulty: "impossible" }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, kind: "oral" }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, neverRepeat: "yes" }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, preset: "invented-exam" }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, seed: -1 }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, scope: { chapter: "x".repeat(500) } }, store).ok).toBe(false);
    expect(validateRequest({ ...ok, scope: { chapter: "No Such Chapter" } }, store).ok).toBe(false);
    expect(validateRequest(null, store).ok).toBe(false);
    expect(validateRequest("nope", store).ok).toBe(false);
  });

  test("29. the preset registry holds configuration only and invents no exam rules", () => {
    expect(EXAM_PRESETS.map((p) => p.id)).toEqual(["none"]);
    for (const p of EXAM_PRESETS) {
      expect(Object.keys(p).sort()).toEqual(expect.arrayContaining(["description", "id", "label"]));
    }
  });
});

describe("history storage", () => {
  function fakeStorage(): StorageLike & { data: Map<string, string> } {
    const data = new Map<string, string>();
    return {
      data,
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => void data.set(k, v),
      removeItem: (k) => void data.delete(k),
    };
  }

  test("30. fingerprints persist across instances (new sessions)", () => {
    const storage = fakeStorage();
    const a = new StoredHistory(storage);
    expect(a.add(["f1", "f2", "f3"])).toBe(3);
    const b = new StoredHistory(storage);
    expect(b.has("f2")).toBe(true);
    expect(b.size()).toBe(3);
  });

  test("31. adding a known fingerprint again changes nothing", () => {
    const h = new MemoryHistory(["a"]);
    expect(h.add(["a", "b"])).toBe(1);
    expect(h.size()).toBe(2);
  });

  test("32. corrupt, foreign or outdated storage is treated as empty, never a crash", () => {
    for (const raw of ["{not json", JSON.stringify({ v: 999, fp: "a,b" }), JSON.stringify({ v: 1, fp: 5 }), "null"]) {
      const storage = fakeStorage();
      storage.setItem(HISTORY_STORAGE_KEY, raw);
      expect(new StoredHistory(storage).size()).toBe(0);
    }
  });

  test("33. blocked or full storage degrades to in-memory history", () => {
    const broken: StorageLike = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("quota");
      },
      removeItem: () => {
        throw new Error("blocked");
      },
    };
    const h = new StoredHistory(broken);
    expect(h.add(["x"])).toBe(1);
    expect(h.has("x")).toBe(true);
    expect(() => h.clear()).not.toThrow();
  });

  test("34. history is never silently truncated: at the cap it stops recording and says so", () => {
    const h = new MemoryHistory([], 3);
    h.add(["a", "b", "c", "d"]);
    expect(h.size()).toBe(3);
    expect(h.isFull()).toBe(true);
    expect(h.has("d")).toBe(false);
    expect(HISTORY_CAP).toBeGreaterThan(50_000);
  });

  test("35. clearing history removes the stored key", () => {
    const storage = fakeStorage();
    const h = new StoredHistory(storage);
    h.add(["a"]);
    expect(storage.data.has(HISTORY_STORAGE_KEY)).toBe(true);
    h.clear();
    expect(storage.data.has(HISTORY_STORAGE_KEY)).toBe(false);
    expect(h.size()).toBe(0);
  });
});

describe("review workflow", () => {
  const sample = run(request({ count: 5 })).questions[0];
  const at = (status: QuestionStatus): GeneratedQuestion => ({ ...sample, status });

  test("36. the lifecycle follows GENERATED, VALIDATED, PUBLISHED, ARCHIVED", () => {
    expect(canTransition("GENERATED", "VALIDATED")).toBe(true);
    expect(canTransition("VALIDATED", "PUBLISHED")).toBe(true);
    expect(canTransition("PUBLISHED", "ARCHIVED")).toBe(true);
    expect(canTransition("GENERATED", "PUBLISHED")).toBe(false); // publication is a separate step
    expect(canTransition("ARCHIVED", "PUBLISHED")).toBe(false);
  });

  test("37. a question can be rejected from any live status, and reinstated", () => {
    for (const s of ["GENERATED", "VALIDATED", "PUBLISHED"] as QuestionStatus[]) {
      expect(canTransition(s, "REJECTED")).toBe(true);
    }
    expect(canTransition("REJECTED", "VALIDATED")).toBe(true);
  });

  test("38. an illegal move throws and leaves the question unchanged", () => {
    const q = at("GENERATED");
    expect(() => transition(q, "PUBLISHED")).toThrow(InvalidTransitionError);
    expect(q.status).toBe("GENERATED");
    expect(transition(at("VALIDATED"), "PUBLISHED").status).toBe("PUBLISHED");
  });

  test("39. only PUBLISHED questions are playable: rejected ones never reach a quiz", () => {
    const all = (["GENERATED", "VALIDATED", "PUBLISHED", "REJECTED", "ARCHIVED"] as QuestionStatus[]).map(at);
    expect(all.filter(isPlayable).map((q) => q.status)).toEqual(["PUBLISHED"]);
    expect(selectPlayable(all)).toHaveLength(1);
    const rejected = transition(at("PUBLISHED"), "REJECTED");
    expect(isPlayable(rejected)).toBe(false);
  });

  test("40. human review clears the 'unreviewed' flag without changing the question", () => {
    expect(sample.unreviewed).toBe(true);
    const reviewed = markReviewed(sample);
    expect(reviewed.unreviewed).toBe(false);
    expect(reviewed.stem).toBe(sample.stem);
  });
});

describe("quiz integration shape", () => {
  const q = run(request({ count: 12 })).questions[0];

  test("41. a generated question maps onto the existing quiz question shape", () => {
    const t = toTestQuestion(q);
    expect(t.question).toBe(q.stem);
    expect(t.options).toEqual(q.options.map((o) => o.text));
    expect(t.attemptOptions).toEqual(t.options);
    expect(t.attemptCorrectIndex).toBe(q.correctIndex);
    expect(t.correctIndex).toBe(q.correctIndex);
    expect(t.explanation).toBe(q.explanation);
    expect(t.attemptOptions[t.attemptCorrectIndex]).toBe(q.options[q.correctIndex].text);
  });

  test("42. identities are namespaced so a generated question never collides with an authored one", () => {
    const pool = toPoolQuestion(q);
    expect(isFactoryIdentity(pool.identity)).toBe(true);
    expect(pool.identity).toBe(`qf|${q.fingerprint}`);
    expect(isFactoryIdentity("sertraline|mcq:abc")).toBe(false);
    expect(pool.templateId.startsWith("qf:")).toBe(true);
  });

  test("43. difficulty maps onto the existing three reasoning tiers", () => {
    const tiers = new Set(
      run(request({ count: 80 })).questions.map((x) => `${x.difficulty}>${toPoolQuestion(x).difficulty}`)
    );
    for (const pair of tiers) {
      expect(["easy>foundation", "moderate>clinical", "hard>advanced"]).toContain(pair);
    }
  });

  test("44. a source reference is always present so review links never dead-end", () => {
    const pool = toPoolQuestion(q);
    expect(pool.source.sourceName.length).toBeGreaterThan(0);
    expect(pool.source.sectionHref.startsWith("/")).toBe(true);
  });
});
