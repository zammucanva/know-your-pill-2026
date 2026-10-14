import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, claimsFor, evidenceViews, type ClaimRecord } from "@/lib/kyp/evidence";
import { PLAIN_SENTENCES, plainSummaryFor } from "@/lib/kyp/evidence/plain-summaries";
import { splitList } from "@/lib/kyp/evidence/list-text";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};
const guideQuotes = CLAIM_RECORDS.filter((c) => c.wordingKind === "exact-quote" && /:mg\d+$/.test(c.id));
const fake = (passage: string, over: Partial<ClaimRecord> = {}): ClaimRecord => ({ ...guideQuotes[0], id: "x:precaution:mg1", wordingKind: "exact-quote", passage, patientWording: passage, ...over });

describe("plain-language 'In short' summaries over quoted Medication Guide text", () => {
  test("the sentence bank carries no numbers, no medicine names and no review claim, and every sentence needs support", () => {
    expect(new Set(PLAIN_SENTENCES.map((s) => s.id)).size).toBe(PLAIN_SENTENCES.length);
    const names = drugs.map((d) => d.genericName.toLowerCase()).filter((n) => n.length >= 5);
    for (const s of PLAIN_SENTENCES) {
      expect(s.support.length).toBeGreaterThan(0);
      expect(s.text).not.toMatch(/\d/);
      expect(s.text).not.toMatch(/\b(approved|reviewed|validated|safe for everyone)\b/i);
      for (const n of names) expect(s.text.toLowerCase()).not.toContain(n);
    }
  });

  test("a sentence is used only when ALL of its support is in the quoted text", () => {
    const withBoth = fake("Taking benzodiazepines with opioid medicines, alcohol, or other CNS depressants can cause severe drowsiness, breathing problems, coma and death.");
    expect(plainSummaryFor(withBoth)?.ids).toContain("opioid-sedation");
    const noDeath = fake("Taking it with opioid medicines and alcohol can cause severe drowsiness and breathing problems.");
    expect(plainSummaryFor(noDeath)).toBeNull();
    const nothing = fake("Store at room temperature.");
    expect(plainSummaryFor(nothing)).toBeNull();
    // "allergic reaction" mentioned only in passing is not enough to claim the text lists its signs
    expect(plainSummaryFor(fake("Tell your healthcare provider if you have had an allergic reaction to any medicine. Call your healthcare provider if you are unsure.", { id: "x:precaution:mg2" }))?.ids ?? []).not.toContain("allergic-reaction");
    expect(plainSummaryFor(fake("Do not stop taking it suddenly."))?.ids ?? []).not.toContain("do-not-stop"); // no 'talk to your provider' in the text
    expect(plainSummaryFor(fake("Do not stop taking it without first talking to your healthcare provider."))?.ids).toContain("do-not-stop");
  });

  test("only quoted Medication Guide sections get a summary: never a restated claim, never a UK leaflet", () => {
    for (const c of CLAIM_RECORDS.filter((x) => !guideQuotes.includes(x))) expect(plainSummaryFor(c)).toBeNull();
    expect(plainSummaryFor(fake("Take it exactly as your healthcare provider tells you.", { wordingKind: "paraphrase" }))).toBeNull();
    expect(plainSummaryFor(fake("Take it exactly as your healthcare provider tells you.", { id: "moclobemide:how-to-take:pil1" }))).toBeNull();
  });

  test("across the stored guides, most sections get a summary and every sentence is backed by its own quote", () => {
    let n = 0;
    for (const c of guideQuotes) {
      const s = plainSummaryFor(c);
      if (!s) continue;
      n++;
      for (const id of s.ids) for (const re of PLAIN_SENTENCES.find((x) => x.id === id)!.support) expect(re.test(c.passage)).toBe(true);
      expect(s.sentences.length).toBeGreaterThan(0);
      expect(s.sentences.length).toBeLessThanOrEqual(6);
    }
    expect(n).toBeGreaterThan(200);
    expect(n).toBeLessThan(guideQuotes.length + 1);
  });

  describe("a summary line never says more, or less, than the sentence it stands for (audit regressions)", () => {
    const ids = (t: string) => plainSummaryFor(fake(t))?.ids ?? [];
    test("alcohol: qualified advice is not flattened into 'do not drink alcohol'", () => {
      expect(ids("Do not drink alcohol while taking quetiapine tablets.")).toContain("alcohol");
      expect(ids("Do not drink a lot of alcohol while taking CONTRAVE.")).not.toContain("alcohol");
      expect(ids("Do not drink alcohol close to the time you take your ADDYI dose.")).not.toContain("alcohol");
      const until = "Do not drink alcohol or take other medicines that make you sleepy or dizzy while taking clonazepam tablets until you talk to your healthcare provider.";
      expect(ids(until)).toContain("alcohol-until-talk");
      expect(ids(until)).not.toContain("alcohol");
    });
    test("swallow whole: not when the label also allows splitting the tablet", () => {
      expect(ids("Swallow FETZIMA capsules whole.")).toContain("swallow-whole");
      expect(ids("Trazodone tablets should be swallowed whole or broken in half along the score line.")).not.toContain("swallow-whole");
    });
    test("keep safe: 'away from children' only when the label says it", () => {
      expect(ids("Keep XANAX in a safe place to prevent misuse and abuse.")).toEqual(["keep-safe-misuse"]);
      expect(ids("Keep it in a safe place and away from children.")).toContain("keep-safe-children");
    });
    test("overdose help needs the overdose and the help in the same sentence", () => {
      expect(ids("There is a risk of overdose and coma. Call your healthcare provider if you feel unwell. Go to the hospital emergency room.")).not.toContain("overdose-get-help");
      expect(ids("If you take too much, call your healthcare provider or go to the nearest hospital emergency room right away.")).toContain("overdose-get-help");
    });
    test("withdrawal: the 'stopping suddenly' part must be in the text; a duration condition blocks the line", () => {
      expect(ids("It can cause physical dependence and withdrawal reactions, which can be life-threatening.")).not.toContain("physical-dependence-withdrawal");
      expect(ids("It can cause physical dependence and withdrawal reactions. Stopping suddenly or lowering the dose too quickly can cause withdrawal reactions that can be life-threatening.")).toContain("physical-dependence-withdrawal");
      expect(ids("It can cause physical dependence and withdrawal reactions, especially if you take it for several weeks. Stopping suddenly can cause withdrawal reactions that can be life-threatening.")).not.toContain("physical-dependence-withdrawal");
    });
    test("allergic reaction: 'such as your liver' is not a list of signs", () => {
      expect(ids("It may cause a serious allergic reaction that may affect parts of your body such as your liver. Call your healthcare provider right away.")).not.toContain("allergic-reaction");
      expect(ids("Call your healthcare provider right away if you have signs of a serious allergic reaction: swelling of the face.")).toContain("allergic-reaction");
    });
    test("timing and numbers in the source are kept or the line is dropped", () => {
      const early = ids("Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment or when the dose is changed.");
      expect(early).toEqual(["antidepressant-suicidality-early-or-dose"]);
      expect(ids("Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment.")).toEqual(["antidepressant-suicidality-early"]);
      expect(ids("Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults.")).toEqual(["antidepressant-suicidality"]);
      expect(ids("Like other antiepileptic drugs, it may cause suicidal thoughts or actions in a very small number of people, about 1 in 500.")).not.toContain("antiepileptic-suicidality");
      expect(ids("Do not drive or operate machinery until at least 6 hours after you take it and until you know how it affects you.")).not.toContain("driving");
      expect(ids("Do not drive or operate machinery until you know how it affects you.")).toContain("driving");
      // a phone number is not a clinical number
      expect(ids("If you take too much, call your healthcare provider or Poison Control Center at 1-800-222-1222 or go to the nearest hospital emergency room right away.")).toContain("overdose-get-help");
    });
  });

  test("the page shows the summary first, says it is unreviewed, and keeps the label's own words one click away", () => {
    const h = html("alprazolam");
    expect(h).toContain("data-plain-summary");
    expect(h).toContain("In short");
    expect(h).toContain("It is shorter than the label and is not clinically reviewed.");
    expect(h).toContain("Read the label&#x27;s own words");
    expect(h).toContain("data-label-text");
    // the exact quotation is still in the page, unchanged
    const q = claimsFor("alprazolam").find((c) => /:mg\d+$/.test(c.id) && c.category === "how-to-take")!;
    expect(h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ")).toContain(q.patientWording.split("\n")[0].replace(/\s+/g, " ").slice(0, 40));
    // a hand-restated medicine has no summary box
    expect(html("tranylcypromine")).not.toContain("data-plain-summary");
  });
});

describe("long lists in restated statements are shown as lists without changing a word", () => {
  const words = (t: string) => t.toLowerCase().replace(/[;:.,]/g, " ").split(/\s+/).filter((w) => w && w !== "or" && w !== "and");
  test("splitList keeps every word and only splits real 'intro: a; b; c.' lists", () => {
    const l = splitList("Do not take it if you: are allergic to X; have glaucoma; or have kidney disease. Ask your doctor if unsure.")!;
    expect(l.intro).toBe("Do not take it if you:");
    expect(l.items).toEqual(["are allergic to X", "have glaucoma", "have kidney disease"]);
    expect(l.outro).toBe("Ask your doctor if unsure.");
    expect(splitList("Take it with food. It may cause nausea; headache.")).toBeNull();
    expect(splitList("Short: a; b.")).toBeNull();
    for (const c of CLAIM_RECORDS.filter((x) => x.wordingKind === "paraphrase")) {
      const parts = splitList(c.patientWording);
      if (parts) expect(words([parts.intro, ...parts.items, parts.outro].join(" "))).toEqual(words(c.patientWording));
    }
  });
  test("the page shows the long contraindication list as a list", () => {
    const h = html("doxepin");
    expect(h).toContain("data-statement-list");
    expect(CLAIM_RECORDS.filter((c) => c.wordingKind === "paraphrase" && splitList(c.patientWording)).length).toBeGreaterThan(40);
  });
});
