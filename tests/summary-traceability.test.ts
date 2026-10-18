import { describe, expect, test } from "bun:test";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { PLAIN_SENTENCES, plainSummaryFor } from "@/lib/kyp/evidence/plain-summaries";

const sentencesOf = (p: string) => p.replace(/\s+/g, " ").split(/(?<=[.!?:])\s+/);

describe("every 'In short' sentence is traceable to words in the claim's own stored passage", () => {
  const withSummary = CLAIM_RECORDS.map((c) => ({ c, s: plainSummaryFor(c) })).filter((x) => x.s);
  test("summaries exist and every sentence id resolves to the bank", () => {
    expect(withSummary.length).toBeGreaterThan(200);
    for (const { s } of withSummary) for (const id of s!.ids) expect(PLAIN_SENTENCES.some((b) => b.id === id)).toBe(true);
  });
  test("each summary sentence has a source sentence in the passage matched by its support pattern, and the guards hold for the passage", () => {
    for (const { c, s } of withSummary) {
      const parts = sentencesOf(c.passage);
      for (const id of s!.ids) {
        const bank = PLAIN_SENTENCES.find((b) => b.id === id)!;
        // The bank's rule: every pattern holds for the passage; the positive (non-guard) patterns must each land on a real source sentence.
        expect(bank.support.every((re) => re.test(c.passage))).toBe(true);
        const positive = bank.support.filter((re) => !re.source.startsWith("^(?!"));
        const ok = positive.length > 0 && positive.every((re) => parts.some((p) => re.test(p)));
        if (!ok) throw new Error(`${c.id}: summary sentence "${id}" has no source sentence matched by its support pattern`);
      }
    }
  });
  test("a summary is only attached to a claim from a source (never to the MedlinePlus exact quote or an unverified claim)", () => {
    for (const { c } of withSummary) expect(c.verification).toBe("passage-found-in-source");
  });
});
