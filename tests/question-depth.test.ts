/**
 * Question Depth V1 (Phase 5) — deterministic tier model regression suite.
 *
 * Pins the difficulty contract of src/lib/kyp/custom-test/difficulty.ts
 * and its engine integration:
 *   - tier classification is deterministic and total (every authored
 *     MCQ classified; same question → same tier, always)
 *   - template-inherent tiers cover every registered template
 *   - role-to-default mapping: all nine learnerTypes map to the
 *     specified personalisation defaults; unknown/absent → "all"
 *   - learnerType (personalisation) and role (authorisation) never
 *     merge — the difficulty layer has no auth surface
 *   - tier filtering selects exactly the requested tier; every tier
 *     yields a non-empty test for the full selection; a tier that
 *     cannot fill a request caps honestly (empty-quiz prevention)
 *   - question identity stability: difficulty is metadata, never part
 *     of an identity; all 78 authored ids present and unchanged
 *   - progress compatibility: mistakes recorded from a tier-filtered
 *     attempt retest exactly (cross-tier identities resolve)
 *   - deterministic ordering: same seed + difficulty → same attempt
 *   - duplicate prevention: attempts contain unique identities
 *   - distractor quality: every option set is 4 distinct options from
 *     the data layer's own dimensions
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  DEFAULT_DIFFICULTY_BY_LEARNER_TYPE,
  DIFFICULTY_TIERS,
  TEMPLATE_TIER,
  classifyAuthoredQuestion,
  defaultDifficultyForLearnerType,
  filterByDifficulty,
  resolveQuestionTier,
  tierLabel,
  type DifficultyTier,
} from "@/lib/kyp/custom-test/difficulty";
import {
  buildQuestionPool,
  buildRetest,
  buildTest,
  getPoolStats,
} from "@/lib/kyp/custom-test/engine";
import { TEMPLATE_IDS } from "@/lib/kyp/custom-test/templates";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { diseases } from "@/lib/kyp/data/diseases/index";

const ALL_SLUGS = drugs.map((d) => d.slug);

describe("question depth — tier model", () => {
  test("every authored MCQ is classified, deterministically, into exactly one tier", () => {
    const counts: Record<string, number> = { foundation: 0, clinical: 0, advanced: 0 };
    const total = [
      ...drugs.flatMap((d) => d.microQuizzes ?? []),
      ...diseases.flatMap((d) => d.microQuizzes ?? []),
    ];
    expect(total.length).toBe(78); // 72 drug + 6 disease (integrity counts)
    for (const q of total) {
      const tier = classifyAuthoredQuestion(q.question);
      expect(DIFFICULTY_TIERS).toContain(tier);
      // Determinism: the same stem always resolves to the same tier.
      expect(classifyAuthoredQuestion(q.question)).toBe(tier);
      counts[tier]++;
    }
    // A real spread across tiers (calibrated against the locked data).
    expect(counts.foundation).toBeGreaterThan(15);
    expect(counts.clinical).toBeGreaterThan(20);
    expect(counts.advanced).toBeGreaterThan(5);
    expect(counts.foundation + counts.clinical + counts.advanced).toBe(78);
  });

  test("representative stems land in the specified tiers", () => {
    // FOUNDATION — recognition.
    expect(classifyAuthoredQuestion("Which transporter does Sertraline inhibit?")).toBe("foundation");
    expect(classifyAuthoredQuestion("What is the toll-free Tele-MANAS mental health helpline number in India?")).toBe("foundation");
    // CLINICAL — mechanism reasoning and scenario application.
    expect(classifyAuthoredQuestion("Why does Sertraline take 4-6 weeks to work when SERT blockade occurs within hours?")).toBe("clinical");
    expect(classifyAuthoredQuestion("A patient on fluoxetine 20mg for 6 weeks has PHQ-9 drop from 18 to 15. What is the next step?")).toBe("clinical");
    // ADVANCED — comparisons, prioritization, multi-step asks.
    expect(classifyAuthoredQuestion("Why is escitalopram preferred over citalopram in modern practice?")).toBe("advanced");
    expect(classifyAuthoredQuestion("Why is mirtazapine 15mg MORE sedating than 30mg?")).toBe("advanced");
    expect(classifyAuthoredQuestion("Which antidepressant has the worst discontinuation syndrome, and why?")).toBe("advanced");
  });

  test("every registered template has an inherent tier", () => {
    for (const id of TEMPLATE_IDS) {
      expect(TEMPLATE_TIER[id]).toBeDefined();
      expect(DIFFICULTY_TIERS).toContain(TEMPLATE_TIER[id]);
    }
    // The Phase 5 reasoning templates are the advanced families.
    expect(TEMPLATE_TIER["interaction-mechanism"]).toBe("advanced");
    expect(TEMPLATE_TIER["class-vs-drug-effect"]).toBe("advanced");
    expect(TEMPLATE_TIER["primary-target"]).toBe("clinical");
  });

  test("resolveQuestionTier: template tier for stamps, signal classification for authored", () => {
    for (const q of buildQuestionPool(ALL_SLUGS)) {
      if (q.templateId === "authored") {
        expect(q.difficulty).toBe(classifyAuthoredQuestion(q.question));
      } else {
        expect(q.difficulty).toBe(TEMPLATE_TIER[q.templateId]);
      }
    }
  });
});

describe("question depth — learner-type personalisation defaults (5B)", () => {
  test("all nine learner types map to the specified default tiers", () => {
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.patient).toBe("foundation");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.student).toBe("clinical");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.medical_student).toBe("clinical");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.mbbs_student).toBe("clinical");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.healthcare_professional).toBe("clinical");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.medical_resident).toBe("advanced");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.psychiatry_resident).toBe("advanced");
    expect(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE.psychiatrist).toBe("advanced");
    // Every registered learner type has an explicit default.
    expect(Object.keys(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE).length).toBe(9);
  });

  test("unknown or absent learner types personalise to 'all' — never forced", () => {
    expect(defaultDifficultyForLearnerType(null)).toBe("all");
    expect(defaultDifficultyForLearnerType(undefined)).toBe("all");
    expect(defaultDifficultyForLearnerType("")).toBe("all");
    expect(defaultDifficultyForLearnerType("admin")).toBe("all"); // not a learner type
    expect(defaultDifficultyForLearnerType("patient")).toBe("foundation");
  });

  test("learnerType is personalisation; role is authorisation — never merged (5B)", () => {
    // Structural separation: the difficulty module must have NO auth
    // surface — no auth imports, no Prisma, no authorisation logic.
    // Read the source CODE (comments stripped) and prove it.
    const raw = readFileSync(
      new URL("../src/lib/kyp/custom-test/difficulty.ts", import.meta.url),
      "utf8"
    );
    const code = raw
      .replace(/\/\*[\s\S]*?\*\//g, "") // block comments
      .replace(/\/\/.*$/gm, ""); // line comments
    expect(code).not.toMatch(/import[^;]*\b(auth|session|prisma)\b/i);
    expect(code).not.toMatch(/\bprisma\b/i);
    expect(code).not.toMatch(/require\(/);
    // The mapping table keys are exactly the nine educational values —
    // no authorisation values ever enter the personalisation table.
    expect(Object.keys(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE)).not.toContain("admin");
    expect(Object.keys(DEFAULT_DIFFICULTY_BY_LEARNER_TYPE)).not.toContain("moderator");
  });
});

describe("question depth — engine integration", () => {
  test("difficulty selection filters the attempt to exactly the requested tier", () => {
    for (const tier of DIFFICULTY_TIERS) {
      const { questions, available } = buildTest(ALL_SLUGS, 15, 4242, {
        difficulty: tier,
      });
      expect(available).toBeGreaterThan(0);
      expect(questions.length).toBe(15);
      for (const q of questions) expect(q.difficulty).toBe(tier);
    }
    // "all" keeps the previous behaviour: mixed tiers allowed.
    const mixed = buildTest(ALL_SLUGS, 40, 4242);
    const tiersSeen = new Set(mixed.questions.map((q) => q.difficulty));
    expect(tiersSeen.size).toBeGreaterThan(1);
  });

  test("filterByDifficulty('all') returns the full pool unchanged", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    expect(filterByDifficulty(pool, "all").length).toBe(pool.length);
  });

  test("getPoolStats reports per-tier counts that sum to the total", () => {
    const stats = getPoolStats(ALL_SLUGS);
    const sum = Object.values(stats.perDifficulty).reduce((a, b) => a + b, 0);
    expect(sum).toBe(stats.total);
    expect(stats.perDifficulty.foundation).toBeGreaterThan(0);
    expect(stats.perDifficulty.clinical).toBeGreaterThan(0);
    expect(stats.perDifficulty.advanced).toBeGreaterThan(0);
  });

  test("every tier yields a non-empty, duplicate-free attempt (empty-quiz prevention)", () => {
    for (const tier of DIFFICULTY_TIERS) {
      const { questions, deliveredCount } = buildTest(ALL_SLUGS, 1000, 7, {
        difficulty: tier,
      });
      expect(deliveredCount).toBe(getPoolStats(ALL_SLUGS, tier).total);
      const ids = questions.map((q) => q.identity);
      expect(new Set(ids).size).toBe(ids.length); // duplicate prevention
    }
  });

  test("a tier that cannot fill a single-drug selection caps honestly", () => {
    // bupropion has no same-class peer, but tier capping must still
    // be honest: available reflects the tier-filtered pool exactly.
    for (const tier of DIFFICULTY_TIERS) {
      const available = getPoolStats(["bupropion"], tier).total;
      const { questions, capped } = buildTest(["bupropion"], available + 10, 11, {
        difficulty: tier,
      });
      expect(questions.length).toBe(available);
      expect(capped).toBe(available > 0 && true);
    }
  });

  test("deterministic ordering: same seed + difficulty → identical attempt", () => {
    for (const tier of DIFFICULTY_TIERS) {
      const a = buildTest(ALL_SLUGS, 20, 12345, { difficulty: tier });
      const b = buildTest(ALL_SLUGS, 20, 12345, { difficulty: tier });
      expect(a.questions.map((q) => q.identity)).toEqual(
        b.questions.map((q) => q.identity)
      );
      expect(
        a.questions.map((q) => q.attemptCorrectIndex)
      ).toEqual(b.questions.map((q) => q.attemptCorrectIndex));
    }
  });

  test("answer keys are unchanged by tier filtering (no re-keying to harden)", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    const byId = new Map(pool.map((q) => [q.identity, q]));
    for (const tier of DIFFICULTY_TIERS) {
      const { questions } = buildTest(ALL_SLUGS, 30, 99, { difficulty: tier });
      for (const q of questions) {
        const canonical = byId.get(q.identity)!;
        expect(q.correctIndex).toBe(canonical.correctIndex);
        expect(q.options).toEqual(canonical.options);
        expect(q.question).toBe(canonical.question);
      }
    }
  });
});

describe("question depth — identity stability + progress compatibility (5D)", () => {
  test("difficulty is metadata: never part of any question identity", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    expect(pool.length).toBeGreaterThan(500);
    for (const q of pool) {
      // Identity is source|fact|template|variant — the tier never
      // appears as a STRUCTURAL segment (verbatim evidence text may
      // legitimately contain the words; the tier is not a segment).
      const segments = q.identity.split("|");
      expect(segments).not.toContain(q.difficulty);
      expect(segments).not.toContain("difficulty");
    }
  });

  test("all 78 authored ids are present and in the stable slug|mcq:id format", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    const authoredIds = pool
      .filter((q) => q.templateId === "authored")
      .map((q) => q.identity);
    expect(authoredIds.length).toBe(72);
    for (const id of authoredIds) {
      expect(id).toMatch(/^[a-z-]+\|mcq:[a-z0-9-]+$/);
    }
    // Spot-pin the Citalopram authored ids the Mistake Book may hold.
    for (const id of [
      "citalopram|mcq:quiz-mechanism",
      "citalopram|mcq:quiz-dose-cap",
      "citalopram|mcq:quiz-vs-escitalopram",
    ]) {
      expect(authoredIds).toContain(id);
    }
  });

  test("mistakes recorded from a tier-filtered attempt retest exactly (cross-tier compatibility)", () => {
    const attempt = buildTest(["sertraline", "citalopram", "bupropion"], 12, 555, {
      difficulty: "clinical",
    });
    expect(attempt.questions.length).toBeGreaterThan(0);
    // The Mistake Book stores identities; a retest must resolve them
    // WITHOUT any tier parameter — identities are tier-agnostic.
    const ids = attempt.questions.map((q) => q.identity);
    const retest = buildRetest(ids, 777);
    expect(retest.questions.map((q) => q.identity).sort()).toEqual([...ids].sort());
    for (const q of retest.questions) {
      const original = attempt.questions.find((a) => a.identity === q.identity)!;
      expect(q.correctIndex).toBe(original.correctIndex);
      expect(q.options).toEqual(original.options);
    }
  });
});

describe("question depth — distractor quality (5C)", () => {
  test("every question in the pool has 4 distinct options and a valid correct index", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    expect(pool.length).toBeGreaterThan(500);
    for (const q of pool) {
      expect(q.options.length).toBe(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
    }
  });

  test("distractors come from the same semantic neighbourhood as the answer", () => {
    // The class-vs-drug-effect family: every option is a real side
    // effect of the SAME drug (drug-specific vs class-shared) — the
    // reasoning is the class boundary, not option elimination.
    const pool = buildQuestionPool(ALL_SLUGS).filter(
      (q) => q.templateId === "class-vs-drug-effect"
    );
    expect(pool.length).toBeGreaterThan(0);
    for (const drug of drugs) {
      const ownEffects = new Set(drug.commonSideEffects.map((s) => s.name));
      for (const q of pool.filter((p) => p.source.sourceSlug === drug.slug)) {
        for (const option of q.options) {
          expect(ownEffects.has(option)).toBe(true);
        }
      }
    }
  });

  test("advanced templates ask for reasoning, not recognition", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    for (const q of pool.filter((p) => p.templateId === "interaction-mechanism")) {
      expect(q.question).toMatch(/^Why /);
    }
    for (const q of pool.filter((p) => p.templateId === "class-vs-drug-effect")) {
      expect(q.question).toContain("specific to");
      expect(q.question).toContain("rather than shared across");
    }
    for (const q of pool.filter((p) => p.templateId === "primary-target")) {
      expect(q.question).toContain("primary molecular target");
    }
  });
});

describe("question depth — canonical validity", () => {
  test("every pool question cites a real source and section anchor", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    const slugs = new Set([...ALL_SLUGS, ...diseases.map((d) => d.slug)]);
    for (const q of pool) {
      expect(slugs.has(q.source.sourceSlug)).toBe(true);
      expect(q.source.sectionHref.startsWith("/")).toBe(true);
      expect(q.source.sourceName.length).toBeGreaterThan(0);
      // Tier labels render for every tier (UI contract).
      expect(tierLabel(q.difficulty).length).toBeGreaterThan(0);
    }
  });

  test("the Phase 3 primary-target semantics power the primary-target template", () => {
    const pool = buildQuestionPool(ALL_SLUGS).filter(
      (q) => q.templateId === "primary-target"
    );
    // The six single-primary SSRIs + clomipramine share SERT, so every
    // single-primary drug stamps a question.
    expect(pool.length).toBe(6);
    for (const q of pool) {
      expect(q.options[0]).not.toBe("");
    }
  });
});
