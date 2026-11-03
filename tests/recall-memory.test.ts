import { beforeEach, describe, expect, test } from "bun:test";
import { recallForgetAll, recallKey, recallRemember, recallRestore, recallSelect, recallStart, recallSubmit, type RecallQuestionLite } from "@/lib/kyp/modes/interactions";

const qs: RecallQuestionLite[] = [0, 1, 2].map(() => ({ options: ["a", "b", "c", "d"], correctIndex: 1 }));

describe("a drill survives switching modes within a page load, and nothing else", () => {
  beforeEach(() => recallForgetAll());
  test("nothing remembered means a fresh start is used", () => {
    expect(recallRestore(recallKey(["q1", "q2", "q3"]), 3)).toBeNull();
  });
  test("answers given before leaving come back, with the round", () => {
    const key = recallKey(["q1", "q2", "q3"]);
    let s = recallStart(3);
    s = recallSubmit(recallSelect(s, 2, qs));
    recallRemember(key, s, "retry");
    const back = recallRestore(key, 3)!;
    expect(back.round).toBe("retry");
    expect(back.state.chosen[0]).toBe(2);
    expect(back.state.submitted[0]).toBe(true);
  });
  test("a locked answer stays locked after the return", () => {
    const key = recallKey(["q1", "q2", "q3"]);
    const s = recallSubmit(recallSelect(recallStart(3), 2, qs));
    recallRemember(key, s, "all");
    const back = recallRestore(key, 3)!.state;
    expect(recallSelect(back, 1, qs)).toBe(back); // unchanged object: cannot change a submitted answer
  });
  test("a remembered session that no longer fits the question list is ignored, never applied", () => {
    const key = recallKey(["q1", "q2", "q3"]);
    recallRemember(key, recallStart(3), "all");
    expect(recallRestore(key, 2)).toBeNull();
    recallRemember(key, { queue: [0, 7], pos: 0, chosen: {}, submitted: {}, phase: "question" }, "all");
    expect(recallRestore(key, 3)).toBeNull();
  });
  test("different question lists never share a session", () => {
    recallRemember(recallKey(["a1", "a2"]), recallStart(2), "all");
    expect(recallRestore(recallKey(["b1", "b2"]), 2)).toBeNull();
  });
});
