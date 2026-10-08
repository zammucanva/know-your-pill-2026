import { describe, expect, test } from "bun:test";
import { buildRetest, setExternalQuestionResolver } from "@/lib/kyp/custom-test/engine";
import type { TestQuestion } from "@/lib/kyp/custom-test/types";
import { FACTORY_QUIZ_KEY, markQuizSeen, stageFactoryQuiz, takeFactoryQuiz } from "@/lib/kyp/question-factory/handoff";
import { MemoryHistory, StoredHistory, type StorageLike } from "@/lib/kyp/question-factory/history";
import { rememberPlayed, resolveFactoryQuestion, PLAYED_CAP } from "@/lib/kyp/question-factory/played-store";

function memoryStorage(): StorageLike & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return {
    data,
    getItem: (k) => data.get(k) ?? null,
    setItem: (k, v) => void data.set(k, v),
    removeItem: (k) => void data.delete(k),
  };
}

function question(id: string): TestQuestion {
  const options = ["A", "B", "C", "D"];
  return {
    identity: `qf|${id}`,
    question: `Stem ${id}?`,
    options,
    correctIndex: 2,
    explanation: "why",
    evidence: "why",
    source: { sourceName: "Drug", sourceSlug: "drug", sectionLabel: "Overview", sectionHref: "/medicine", sourceClass: "x" },
    templateId: "qf:test",
    difficulty: "foundation",
    attemptOptions: options,
    attemptCorrectIndex: 2,
  } as TestQuestion;
}

describe("factory handoff", () => {
  test("staged quiz is consumed exactly once", () => {
    const s = memoryStorage();
    expect(stageFactoryQuiz([question("a"), question("b")], "Label", s)).toBe(true);
    const first = takeFactoryQuiz(s);
    expect(first?.questions.map((q) => q.identity)).toEqual(["qf|a", "qf|b"]);
    expect(first?.label).toBe("Label");
    expect(takeFactoryQuiz(s)).toBeNull();
  });

  test("malformed or empty payloads are ignored", () => {
    const s = memoryStorage();
    expect(stageFactoryQuiz([], "x", s)).toBe(false);
    s.setItem(FACTORY_QUIZ_KEY, "not json");
    expect(takeFactoryQuiz(s)).toBeNull();
    s.setItem(FACTORY_QUIZ_KEY, JSON.stringify({ questions: [{ question: "q", attemptOptions: ["a"], attemptCorrectIndex: 0, identity: "x" }] }));
    expect(takeFactoryQuiz(s)).toBeNull();
  });

  test("no storage means no handoff, not a crash", () => {
    expect(stageFactoryQuiz([question("a")], "x", null)).toBe(false);
    expect(takeFactoryQuiz(null)).toBeNull();
  });

  test("markQuizSeen feeds never-repeat history", () => {
    const s = memoryStorage();
    const history = new StoredHistory(s);
    expect(markQuizSeen(["f1", "f2"], history)).toBe(2);
    expect(markQuizSeen(["f2"], history)).toBe(0);
    expect(new StoredHistory(s).has("f1")).toBe(true);
    expect(new MemoryHistory().has("f1")).toBe(false);
  });
});

describe("played store and retest resolver", () => {
  test("remembers factory questions only and resolves by identity", () => {
    const s = memoryStorage();
    const authored = { ...question("x"), identity: "drug|mcq:1" };
    rememberPlayed([question("a"), authored], s);
    expect(resolveFactoryQuestion("qf|a", s)?.question).toBe("Stem a?");
    expect(resolveFactoryQuestion("drug|mcq:1", s)).toBeNull();
    expect(resolveFactoryQuestion("qf|missing", s)).toBeNull();
  });

  test("is bounded", () => {
    const s = memoryStorage();
    const many = Array.from({ length: PLAYED_CAP + 25 }, (_, i) => question(`q${i}`));
    rememberPlayed(many, s);
    expect(resolveFactoryQuestion("qf|q0", s)).toBeNull();
    expect(resolveFactoryQuestion(`qf|q${PLAYED_CAP + 24}`, s)).not.toBeNull();
  });

  test("buildRetest brings factory questions back through the resolver and never invents", () => {
    const s = memoryStorage();
    rememberPlayed([question("a")], s);
    setExternalQuestionResolver((id) => resolveFactoryQuestion(id, s));
    try {
      const built = buildRetest(["qf|a", "qf|gone"], 7);
      expect(built.questions.map((q) => q.identity)).toEqual(["qf|a"]);
      expect(built.capped).toBe(true);
      const q = built.questions[0];
      expect(q.attemptOptions[q.attemptCorrectIndex]).toBe("C");
    } finally {
      setExternalQuestionResolver(null);
    }
  });

  test("without a resolver factory identities are simply unavailable", () => {
    setExternalQuestionResolver(null);
    expect(buildRetest(["qf|a"], 7).questions).toHaveLength(0);
  });
});

describe("umbrella terms", () => {
  test("a generic grouping is never offered beside one of its members", async () => {
    const { isTooSimilar } = await import("@/lib/kyp/question-factory/distractors");
    const { contentTokens, normalizeText } = await import("@/lib/kyp/question-factory/normalize");
    const guard = (label: string) => [{ norm: normalizeText(label), tokens: contentTokens(label) }];
    expect(isTooSimilar("Serotonin", guard("Central monoaminergic systems"), 0.5)).toBe(true);
    expect(isTooSimilar("Central monoaminergic systems", guard("Dopamine"), 0.5)).toBe(true);
    expect(isTooSimilar("Glutamate", guard("Central monoaminergic systems"), 0.5)).toBe(false);
    expect(isTooSimilar("Dopamine", guard("Serotonin"), 0.5)).toBe(false);
  });
});
