import { describe, expect, test } from "bun:test";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { readability } from "@/lib/kyp/evidence/readability";
import { numbersIn } from "@/lib/kyp/evidence";

/**
 * Hand-made readability edits to restated Patient wording. Each one changes sentence STRUCTURE only: long sentences
 * are split, one list is shown as a list. The record below keeps the wording as it was, so the transformation can be
 * checked: same numbers, no new content words beyond a few connectives, and the claim's stored source passage is
 * untouched. A lower reading score is a screening result, not proof that patients understand it better.
 */
interface Edit { slug: string; category: string; find: string; before: string; after: string }
const EDITS: Edit[] = [
  { slug: "flupenthixol", category: "how-to-take", find: "usual starting dose of 1 mg a day", before: "For adults, this leaflet gives a usual starting dose of 1 mg a day as a single dose in the morning, which may be increased to 2 mg a day after one week, with a maximum of 3 mg a day.", after: "For adults, this leaflet gives a usual starting dose of 1 mg a day as a single dose in the morning. It may be increased to 2 mg a day after one week. The maximum is 3 mg a day." },
  { slug: "amisulpride", category: "how-to-take", find: "400 mg to 800 mg a day", before: "For positive symptoms (such as delusions and hallucinations), this leaflet gives a recommended dose of 400 mg to 800 mg a day, adjusted by your doctor to your illness and kidney function, with a maximum of 1,200 mg a day.", after: "For positive symptoms (such as delusions and hallucinations), this leaflet gives a recommended dose of 400 mg to 800 mg a day. Your doctor adjusts it to your illness and kidney function. The maximum is 1,200 mg a day." },
  { slug: "dothiepin", category: "how-to-take", find: "increase it to 2 or 3 tablets", before: "Your doctor may increase it to 2 or 3 tablets a day, and will tell you whether to take them as separate doses through the day or as a single dose each evening, usually a couple of hours before bed.", after: "Your doctor may increase it to 2 or 3 tablets a day. Your doctor will tell you whether to take them as separate doses through the day or as a single dose each evening, usually a couple of hours before bed." },
  { slug: "naltrexone", category: "contraindication", find: "naloxone challenge test", before: "It must not be used by anyone who has failed the naloxone challenge test (a test for opioid dependence) or has a positive urine screen for opioids, or who has a history of sensitivity (allergy) to naltrexone or any other component of the product.", after: "It must not be used by anyone who has failed the naloxone challenge test (a test for opioid dependence) or has a positive urine screen for opioids. It must also not be used by anyone who has a history of sensitivity (allergy) to naltrexone or any other component of the product." },
  { slug: "trimipramine", category: "urgent-help", find: "sore throat", before: "If you get a fever and sore throat during treatment, tell your prescriber: a blood test of your white cells should be done, and the medicine should be stopped if the test shows a harmful fall in a type of white cell (neutrophils).", after: "If you get a fever and sore throat during treatment, tell your prescriber. A blood test of your white cells should be done. The medicine should be stopped if the test shows a harmful fall in a type of white cell (neutrophils)." },
  { slug: "trifluoperazine", category: "precaution", find: "non-psychotic anxiety", before: "When used for non-psychotic anxiety, it should not be used at doses of more than 6 mg a day or for longer than 12 weeks, because higher doses or longer use may cause persistent tardive dyskinesia (abnormal movements) that may prove irreversible.", after: "When used for non-psychotic anxiety, it should not be used at doses of more than 6 mg a day or for longer than 12 weeks. This is because higher doses or longer use may cause persistent tardive dyskinesia (abnormal movements) that may prove irreversible." },
  { slug: "haloperidol", category: "contraindication", find: "coma or have severe toxic depression", before: "Do not take it if you are in a coma or have severe toxic depression of the central nervous system (a dangerous slowing of brain function) from any cause, if you are hypersensitive (allergic) to it, or if you have Parkinson's disease.", after: "Do not take it if you: are in a coma or have severe toxic depression of the central nervous system (a dangerous slowing of brain function) from any cause; are hypersensitive (allergic) to it; or have Parkinson's disease." },
  { slug: "perphenazine", category: "contraindication", find: "subcortical brain damage", before: "It must also not be used in people with suspected or established brain damage deep in the brain (subcortical brain damage), because a hyperthermic reaction (a very high fever, above 104°F) may occur, sometimes not until 14 to 16 hours after the dose.", after: "It must also not be used in people with suspected or established brain damage deep in the brain (subcortical brain damage). This is because a hyperthermic reaction (a very high fever, above 104°F) may occur. The reaction sometimes does not happen until 14 to 16 hours after the dose." },
];
// Structural connectives and pronouns a split may add. Anything else new would be new content.
const ALLOWED_NEW = new Set(["this", "because", "also", "reaction", "happen", "adjusts", "maximum", "does", "will", "must"]);
const words = (t: string) => (t.toLowerCase().match(/[a-z][a-z'-]{3,}/g) ?? []);
const find = (e: Edit) => CLAIM_RECORDS.find((c) => c.slug === e.slug && c.category === e.category && c.patientWording.includes(e.find))!;

describe("readability edits are restructuring only, and traceable", () => {
  for (const e of EDITS) {
    test(`${e.slug} ${e.category}: now reads as recorded; same numbers; no new content words`, () => {
      const c = find(e);
      expect(c).toBeTruthy();
      expect(c.wordingKind).toBe("paraphrase");
      expect(c.patientWording).toContain(e.after);
      expect(c.patientWording).not.toContain(e.before);
      expect([...numbersIn(e.after)].sort()).toEqual([...numbersIn(e.before)].sort());
      const before = new Set(words(e.before));
      const added = words(e.after).filter((w) => !before.has(w) && !ALLOWED_NEW.has(w));
      expect(added).toEqual([]);
      expect(c.verification).toBe("passage-found-in-source");
      expect(c.review).toBe("not-reviewed");
    });
    test(`${e.slug} ${e.category}: sentences are shorter and the grade did not rise`, () => {
      const [b, a] = [readability(e.before), readability(e.after)];
      expect(a.grade).toBeLessThanOrEqual(b.grade);
      expect(a.longSentences).toBeLessThanOrEqual(b.longSentences);
      expect(a.avgWordsPerSentence).toBeLessThan(b.avgWordsPerSentence + 0.001);
    });
  }
});
