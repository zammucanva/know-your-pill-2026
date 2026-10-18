import { describe, expect, test } from "bun:test";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { splitList } from "@/lib/kyp/evidence/list-text";

/**
 * Semantic guards for the bullet presentation. A list is shown only when every item can stand on its own and the
 * condition that governs the list is unchanged. These are the real sentences that broke an earlier version of the
 * splitter; each must stay a sentence.
 */
const MUST_STAY_SENTENCES = [
  // one item whose parts share a head ("swelling of the lips, face, throat or tongue")
  "Do not take it if you are allergic to amisulpride or anything else in the tablet. Signs of an allergic reaction can include a rash, difficulty swallowing or breathing, or swelling of the lips, face, throat or tongue.",
  "Signs of a serious allergic reaction include difficulty breathing, itching, swelling of the face, tongue or throat, and feeling lightheaded. Seek immediate emergency assistance if you get any of these.",
  // a qualifier, not an item
  "Stop taking it and see your doctor or go to a hospital immediately if you have movements you cannot control, mainly of the tongue, mouth, jaw, arms and legs (uncommon).",
  // a verb shared across the series
  "Contact a doctor or go to a hospital immediately if you get an unexplained high temperature, stiff muscles, clouded consciousness, muscle pain, sweating, a fast heartbeat, fast breathing, or feel confused, drowsy or agitated.",
  "Some people treated with zopiclone have mental health problems such as irrational thoughts (delusions), seeing or hearing things that are not there (hallucinations), feeling confused or disorientated (delirium), or feeling angry, irritable, restless or depressed.",
  // "a combination of" governs the whole series
  "Signs may include a combination of confusion, restlessness, hallucinations, coma, a fast heartbeat, raised body temperature, sweating, flushing and tremor.",
  // a clause that is not one of the examples
  "Stopping suddenly, unless your doctor tells you to, may cause withdrawal effects such as feeling sick, vomiting, sweating, difficulty sleeping, extreme restlessness, muscle stiffness or abnormal movements, or your original condition may come back.",
  // relative clause and frequency word continuing the previous item
  "Other side effects you may get: drowsiness, increased sweating, skin rashes, tremor (shaking), changes in sexual function, low blood pressure, which may cause dizziness or fainting.",
  "Nervous system effects listed: drowsiness (16%), dizziness (8%), tremor (3%) and, rarely, numbness, tingling, overactivity, restlessness (akathisia), seizures.",
  // examples belong to the first item
  "Stop lithium and contact your healthcare provider if you have signs of lithium toxicity such as diarrhea, vomiting, tremor, lack of muscle coordination, drowsiness, abnormal heart rhythm or muscular weakness.",
];

describe("bullets never change which words belong together", () => {
  test("sentences whose commas sit inside one item, or whose later parts depend on an earlier one, are not split", () => {
    for (const t of MUST_STAY_SENTENCES) expect(splitList(t)).toBeNull();
  });
  test("an abbreviation's full stop does not end a list or a sentence (St. John's Wort stays whole)", () => {
    const l = splitList("Taking these with Edronax could increase the risk of serotonin syndrome, such as lithium, triptans, tramadol, buspirone, tryptophan and St. John's Wort. Ask your doctor.")!;
    expect(l.items.at(-1)).toBe("tryptophan and St. John's Wort");
    expect(l.outro).toBe("Ask your doctor.");
  });
  test("across every restated statement: no item is a continuation, a dangling conjunction or a bare body-part fragment after a governing head", () => {
    const BAD_START = /^(?:which|that|who|whom|whose|where|when|while|but|so|plus|because|although|rarely|occasionally|also|mainly|especially|particularly)\b/i;
    for (const c of CLAIM_RECORDS.filter((x) => x.wordingKind === "paraphrase")) {
      const l = splitList(c.patientWording);
      if (!l) continue;
      for (const item of l.items) {
        expect(BAD_START.test(item)).toBe(false);
        expect(/\b(?:and|or|but)$/i.test(item)).toBe(false);
        expect(item.includes("\u0001")).toBe(false);
      }
      // the words are unchanged and in the same order
      const flat = (t: string) => t.toLowerCase().replace(/[;:.,\s]+/g, " ").replace(/\b(?:or|and)\b/g, "").replace(/\s+/g, " ").trim();
      expect(flat([l.intro, ...l.items, l.outro].join(" "))).toBe(flat(c.patientWording));
    }
  });
  test("a list under a condition (do not take / must not / if you) never ends in 'and', which would read as all-of-these", () => {
    for (const c of CLAIM_RECORDS.filter((x) => x.wordingKind === "paraphrase" && x.category !== "side-effects")) {
      const l = splitList(c.patientWording);
      if (!l || !/\b(?:do not|must not|should not|if you|not be used)\b/i.test(l.intro)) continue;
      const body = c.patientWording.slice(l.intro.length);
      const lastConnector = /[,;]\s+(and|or)\s+[^,;]*$/i.exec(body.replace(/\.[^.]*$/, ""));
      expect(lastConnector?.[1]?.toLowerCase() ?? "or").toBe("or");
    }
  });
  test("every list keeps the claim's wording kind, source passage and review state", () => {
    for (const c of CLAIM_RECORDS.filter((x) => x.wordingKind === "paraphrase" && splitList(x.patientWording))) {
      expect(c.verification).toBe("passage-found-in-source");
      expect(c.review).toBe("not-reviewed");
      expect(c.passage.length).toBeGreaterThan(10);
    }
  });
});
