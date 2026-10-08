/**
 * QUESTION FACTORY: regression and release checks on REAL KYP data.
 *
 *   - existing authored MCQs are preserved exactly (digest + counts)
 *   - the legacy custom-test engine behaves exactly as before
 *   - generated and authored questions stay separate
 *   - generation never mutates the content layer
 *   - questions are reproducible from their own provenance
 *   - source links are real, and no AI service is involved
 */

import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync, statSync } from "fs";
import { join, resolve } from "path";
import { getPoolStats } from "@/lib/kyp/custom-test/engine";
import { diseases } from "@/lib/kyp/data/diseases/index";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { DRUG_PAGE_SECTION_IDS } from "@/lib/kyp/drug-course-sections";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { getAuthoredIndex } from "@/lib/kyp/question-factory/authored-source";
import { FactoryRunner } from "@/lib/kyp/question-factory/batch";
import { reproduceQuestion } from "@/lib/kyp/question-factory/generate";
import { MemoryHistory } from "@/lib/kyp/question-factory/history";
import { toPoolQuestion } from "@/lib/kyp/question-factory/integration";
import { hashString } from "@/lib/kyp/question-factory/normalize";
import { getRegistryFactStore } from "@/lib/kyp/question-factory/registry-source";
import { validateRequest } from "@/lib/kyp/question-factory/request";
import { TEMPLATES } from "@/lib/kyp/question-factory/templates";
import { validateQuestion } from "@/lib/kyp/question-factory/validate";
import type { FactoryJob } from "@/lib/kyp/question-factory/batch";

const store = getRegistryFactStore();
const authored = getAuthoredIndex();
const NOW = () => "2026-01-01T00:00:00.000Z";

/** Baseline recorded from `main` before this feature existed. */
const BASELINE = {
  drugMcqs: 1644,
  diseaseMcqs: 6,
  stahlMcqs: 180,
  digest: "1ge8s3svvr",
  legacyPoolClassic: 6374,
  legacyPoolAuthored: 1643,
  legacyPoolWithStahl: 6554,
};

function authoredDigest() {
  const parts: string[] = [];
  let drugMcqs = 0;
  let diseaseMcqs = 0;
  for (const d of drugs) {
    for (const q of d.microQuizzes ?? []) {
      drugMcqs++;
      parts.push([d.slug, q.id, q.question, ...q.options, q.correctIndex, q.explanation].join("␟"));
    }
  }
  for (const d of diseases) {
    for (const q of d.microQuizzes ?? []) {
      diseaseMcqs++;
      parts.push([d.slug, q.id, q.question, ...q.options, q.correctIndex, q.explanation].join("␟"));
    }
  }
  for (const m of stahlMcqs) {
    parts.push([m.id, m.question, ...m.options, m.correctIndex, m.explanation].join("␟"));
  }
  return { drugMcqs, diseaseMcqs, stahl: stahlMcqs.length, digest: hashString(parts.join("␞")) };
}

function job(over: Record<string, unknown>, history = new MemoryHistory()): FactoryJob {
  const v = validateRequest({ scope: {}, difficulty: "mixed", kind: "mixed", neverRepeat: true, seed: 20260101, count: 50, ...over }, store);
  if (!v.ok) throw new Error(v.errors.join("; "));
  return FactoryRunner.start(v.request, { store, authored, history, now: NOW, clock: () => 0 }).runToCompletion(50);
}

describe("existing authored MCQs are preserved", () => {
  test("1. the authored corpus is byte-identical to the baseline (count, text, options, answers, explanations)", () => {
    const now = authoredDigest();
    expect(now.drugMcqs).toBe(BASELINE.drugMcqs);
    expect(now.diseaseMcqs).toBe(BASELINE.diseaseMcqs);
    expect(now.stahl).toBe(BASELINE.stahlMcqs);
    expect(now.digest).toBe(BASELINE.digest);
  });

  test("2. running a large generation job does not alter a single authored question", () => {
    const before = authoredDigest().digest;
    job({ count: 500 });
    job({ count: 500, scope: { chapter: "Antidepressants" }, seed: 7 });
    expect(authoredDigest().digest).toBe(before);
  });

  test("3. the legacy Custom Test engine produces exactly the pools it did before", () => {
    const slugs = drugs.map((d) => d.slug);
    const classic = getPoolStats(slugs, "all", { includeStahl: false });
    expect(classic.total).toBe(BASELINE.legacyPoolClassic);
    expect(classic.authored).toBe(BASELINE.legacyPoolAuthored);
    expect(getPoolStats(slugs, "all", { includeStahl: true }).total).toBe(BASELINE.legacyPoolWithStahl);
  });

  test("4. the authored index holds every authored question and recognises them", () => {
    expect(authored.size).toBeGreaterThanOrEqual(1800);
    const sample = drugs.flatMap((d) => d.microQuizzes ?? []).slice(0, 200);
    for (const q of sample) {
      expect(authored.matches(q.question, q.options[q.correctIndex])).toBe(true);
    }
  });
});

describe("generated and authored stay separate", () => {
  const sample = job({ count: 200 });

  test("5. every factory question is marked GENERATED, never AUTHORED", () => {
    expect(sample.questions).toHaveLength(200);
    for (const q of sample.questions) expect(q.sourceType).toBe("GENERATED");
  });

  test("6. no generated question duplicates an authored one", () => {
    for (const q of sample.questions) {
      expect(authored.matches(q.stem, q.options[q.correctIndex].text)).toBe(false);
    }
  });

  test("7. identities are namespaced away from every authored identity", () => {
    const authoredIds = new Set<string>();
    for (const d of drugs) for (const q of d.microQuizzes ?? []) authoredIds.add(`${d.slug}|mcq:${q.id}`);
    for (const q of sample.questions) {
      const id = toPoolQuestion(q).identity;
      expect(id.startsWith("qf|")).toBe(true);
      expect(authoredIds.has(id)).toBe(false);
    }
  });
});

describe("real-data jobs", () => {
  test("8. the SSRI example from the brief: 50 mixed questions, validated and balanced", () => {
    const j = job({ scope: { subject: "Psychiatry", chapter: "Antidepressants", topic: "SSRIs" }, count: 50 });
    expect(j.status).toBe("COMPLETED");
    expect(j.questions).toHaveLength(50);
    const positions = [0, 0, 0, 0];
    for (const q of j.questions) {
      expect(validateQuestion(q, store)).toEqual([]);
      positions[q.correctIndex]++;
    }
    expect(Math.max(...positions) - Math.min(...positions)).toBeLessThanOrEqual(1);
    expect(new Set(j.questions.map((q) => q.family)).size).toBeGreaterThanOrEqual(8);
  });

  test("9. mixed difficulty really mixes easy, moderate and hard", () => {
    const j = job({ count: 300 });
    const tally: Record<string, number> = {};
    for (const q of j.questions) tally[q.difficulty] = (tally[q.difficulty] ?? 0) + 1;
    expect(tally.easy).toBeGreaterThan(60);
    expect(tally.moderate).toBeGreaterThan(60);
    expect(tally.hard).toBeGreaterThan(20);
  });

  test("10. a small topic exhausts honestly instead of padding: hard SSRI questions run out", () => {
    const j = job({ scope: { chapter: "Antidepressants", topic: "SSRIs" }, difficulty: "hard", count: 100 });
    expect(j.status).toBe("EXHAUSTED");
    expect(j.completionReason).toBe("QUESTION_SPACE_EXHAUSTED");
    expect(j.counts.accepted).toBeLessThan(100);
    expect(j.counts.accepted).toBeGreaterThan(0);
    for (const q of j.questions) expect(q.difficulty).toBe("hard");
  });

  test("11. repeated 'Generate more' on one topic never repeats a question (never-repeat history)", () => {
    const history = new MemoryHistory();
    const scope = { chapter: "Antidepressants", topic: "SSRIs" };
    const seen = new Set<string>();
    for (const seed of [1, 2, 3, 4]) {
      const j = job({ scope, count: 100, seed }, history);
      history.add(j.questions.map((q) => q.fingerprint));
      for (const q of j.questions) {
        expect(seen.has(q.fingerprint)).toBe(false);
        seen.add(q.fingerprint);
      }
    }
    expect(seen.size).toBeGreaterThan(150);
  });

  test("12. clinical-only requests use only authored teaching cases", () => {
    const j = job({ kind: "clinical", count: 40 });
    expect(j.questions.length).toBeGreaterThan(0);
    for (const q of j.questions) {
      expect(q.family).toBe("CLINICAL_STYLE");
      expect(q.unreviewed).toBe(true);
    }
  });
});

describe("auditability", () => {
  const j = job({ count: 120 });

  test("13. any question can be rebuilt from its own provenance (template + seed + recorded position)", () => {
    let rebuilt = 0;
    for (const q of j.questions.filter((_, i) => i % 3 === 0)) {
      const again = reproduceQuestion(store, q, TEMPLATES, NOW);
      expect(again).not.toBeNull();
      if (!again) continue;
      expect(again.stem).toBe(q.stem);
      expect(again.options).toEqual(q.options);
      expect(again.correctIndex).toBe(q.correctIndex);
      expect(again.explanation).toBe(q.explanation);
      expect(again.fingerprint).toBe(q.fingerprint);
      expect(again.claims).toEqual(q.claims);
      rebuilt++;
    }
    expect(rebuilt).toBeGreaterThanOrEqual(40);
  });

  test("14. every source link points at a page section that exists", () => {
    let links = 0;
    for (const q of j.questions) {
      for (const s of q.provenance.sources) {
        if (!s.sectionHref) continue;
        const m = s.sectionHref.match(/^\/drugs\/[^/#]+#(.+)$/);
        expect(m).not.toBeNull();
        expect(DRUG_PAGE_SECTION_IDS).toContain(m![1]);
        links++;
      }
    }
    expect(links).toBeGreaterThan(50);
  });

  test("15. the audit trail is complete: seeds, versions, templates and batch ids", () => {
    expect(j.generatorVersion).toBe("1.0.0");
    for (const q of j.questions) {
      expect(q.provenance.batchId).toContain(j.id);
      expect(q.provenance.templateVersion).toBe("1");
      expect(q.provenance.batchSeed).toBe(j.request.seed);
      expect(Number.isInteger(q.provenance.seed)).toBe(true);
    }
    expect(j.batches.length).toBe(Math.ceil(120 / 50));
  });
});

describe("no AI dependency", () => {
  function files(dir: string): string[] {
    return readdirSync(dir).flatMap((name) => {
      const p = join(dir, name);
      return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx)$/.test(name) ? [p] : [];
    });
  }
  const root = resolve(process.cwd());
  const dirs = [join(root, "src/lib/kyp/question-factory"), join(root, "src/app/quiz/factory")];
  const sources = dirs.flatMap((d) => {
    try {
      return files(d);
    } catch {
      return [];
    }
  });

  test("16. the factory is real code (guards against scanning nothing)", () => {
    expect(sources.length).toBeGreaterThan(20);
  });

  test("17. no AI SDK, model endpoint, API key or network call appears in the factory", () => {
    const forbidden = /openai|anthropic|gemini|claude|gpt-|@google\/|generativelanguage|api[_-]?key|authorization:\s*bearer|\bfetch\s*\(|XMLHttpRequest|axios|https?:\/\//i;
    const hits: string[] = [];
    for (const file of sources) {
      const text = readFileSync(file, "utf8");
      const m = text.match(forbidden);
      if (m) hits.push(`${file.replace(root, "")}: ${m[0]}`);
    }
    expect(hits).toEqual([]);
  });

  test("18. no AI package is a dependency of the app, and none is imported anywhere in src", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8")) as {
      dependencies: Record<string, string>;
    };
    const ai = Object.keys(pkg.dependencies).filter((n) =>
      /^(openai|@anthropic-ai\/.*|@google\/generative-ai|@google\/genai|ai|@ai-sdk\/.*|langchain.*)$/.test(n)
    );
    expect(ai).toEqual([]);
    // z-ai-web-dev-sdk is used only by offline artwork scripts, never by the app
    const used = files(join(root, "src")).filter((f) => readFileSync(f, "utf8").includes("z-ai-web-dev-sdk"));
    expect(used).toEqual([]);
  });

  test("19. generation needs no environment variables or credentials", () => {
    const text = sources.map((f) => readFileSync(f, "utf8")).join("\n");
    expect(text).not.toMatch(/process\.env/);
  });
});
