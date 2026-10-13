import type { ClaimCategory, ClaimRecord } from "./types";

/**
 * Patient-facing claims, each tied to one stored excerpt of one retrieved source.
 *
 * Scope of this first batch: the 11 template-only medicines that have a US label on DailyMed, plus nothing
 * else. Every passage below is verbatim from the stored excerpt (tests check this). The patient wording is a
 * plain-language restatement of that passage and nothing more: no dose, schedule, interaction, onset or
 * warning is added from memory. Where a source says nothing, there is no claim, and the gap is reported.
 *
 * All claims are US-label claims. None is an Indian product-label claim. None has been reviewed.
 */

/** DailyMed set id of the label each slug's claims rest on (must exist in data/sources.json). */
export const CLAIM_SOURCE_SETID: Record<string, string> = {
  isocarboxazid: "95fde749-44ad-4668-86c4-0ff17bca0074",
  phenelzine: "513a41d0-37d4-4355-8a6d-a2c643bce6fa",
  selegiline: "b891bd9f-fdb8-4862-89c5-ecdd700398a3",
  tranylcypromine: "b72d8187-dfcc-4ea0-b5e9-c0be95b69a27",
  amoxapine: "a16297df-3158-48db-85e5-5cd506885556",
  desipramine: "70b562ea-9f21-4e4a-b3ed-0590b2892f6a",
  doxepin: "20bfb8af-7933-4e5c-a2b5-010659d9125b",
  imipramine: "490263ce-b4d2-428a-87da-fcd07f85499a",
  nortriptyline: "aee2c1a1-d848-4c3b-8c6d-8a4f6ce94c28",
  protriptyline: "c6c7c39e-e510-4f4a-bf7a-926f0e075d3a",
  trimipramine: "4f31df66-7dc2-1f04-e054-00144ff88e88",
};

const IND = "34067-9";
const DOSE = "34068-7";
const GUIDE = "42231-1";
const PHARM = "34090-1";

const counters = new Map<string, number>();
function claim(
  slug: string,
  category: ClaimCategory,
  loinc: string,
  passage: string,
  patientWording: string,
  o: { kind?: ClaimRecord["wordingKind"]; applicability?: string[]; limitations?: string[]; replacesRule?: string; openQuestions?: string[] } = {}
): ClaimRecord {
  const key = `${slug}:${category}`;
  const n = (counters.get(key) ?? 0) + 1;
  counters.set(key, n);
  return {
    id: `${key}:${n}`,
    slug,
    category,
    patientWording,
    wordingKind: o.kind ?? "paraphrase",
    sourceId: `${slug}:us-product-label:${CLAIM_SOURCE_SETID[slug]}`,
    excerptId: `${slug}:${loinc}`,
    passage,
    applicability: o.applicability ?? ["Adults, as described in the US product label for the named product."],
    limitations: o.limitations ?? ["US label only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."],
    replacesRule: o.replacesRule,
    verification: "passage-found-in-source",
    review: "not-reviewed",
    openQuestions: o.openQuestions ?? ["Compare with the Indian product information for the brand the patient is actually given."],
  };
}

const GUIDE_STOP_1 = "Never stop an antidepressant medicine without first talking to a healthcare provider.";
const GUIDE_STOP_2 = "Stopping an antidepressant medicine suddenly can cause other symptoms.";
const GUIDE_CALL = "Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings.";
const GUIDE_WATCH = "Pay close attention to any changes, especially sudden changes, in mood, behaviors, thoughts, or feelings. This is very important when an antidepressant medicine is started or when the dose is changed.";

const stopping = (slug: string, passage = `${GUIDE_STOP_1} ${GUIDE_STOP_2}`, wording = "Do not stop this antidepressant without first talking to a healthcare provider. Stopping suddenly can cause other symptoms.") =>
  claim(slug, "stopping", GUIDE, passage, wording);
const callRightAway = (slug: string) =>
  claim(slug, "urgent-help", GUIDE, GUIDE_CALL, "Call your healthcare provider right away if you notice new or sudden changes in your mood, behaviour, thoughts or feelings.");
const watch = (slug: string) =>
  claim(slug, "precaution", GUIDE, GUIDE_WATCH, "Pay close attention to any changes in mood, behaviour, thoughts or feelings, especially sudden ones. This matters most when the medicine is started or when the dose is changed.");

export const CLAIM_RECORDS: ClaimRecord[] = [
  /* ---------------- isocarboxazid (Marplan tablets) ---------------- */
  claim("isocarboxazid", "used-for", IND, "Marplan is indicated for the treatment of depression. Because of its potentially serious side effects, Marplan is not an antidepressant of first choice in the treatment of newly diagnosed depressed patients.", "Marplan is a medicine for depression. Because of its potentially serious side effects, it is not usually the first antidepressant chosen for someone newly diagnosed with depression."),
  claim("isocarboxazid", "onset", DOSE, "Beneficial effect may not be seen in some patients for 3 to 6 weeks.", "Some people may not notice a benefit for 3 to 6 weeks.", {
    replacesRule: "onset-works-gradually",
    limitations: ["The label says 'some patients': it is not a promise of timing for any one person.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("isocarboxazid"),
  callRightAway("isocarboxazid"),
  watch("isocarboxazid"),

  /* ---------------- phenelzine (Nardil tablets) ---------------- */
  claim("phenelzine", "used-for", IND, "NARDIL should rarely be the first antidepressant drug used. Rather, it is more suitable for use with patients who have failed to respond to the drugs more commonly used for these conditions.", "Nardil is rarely the first antidepressant tried. It is more suitable for people who have not responded to the antidepressants more commonly used.", {
    openQuestions: ["The label also describes use in 'atypical' depression with mixed anxiety and phobic features; wording for patients not yet drafted.", "Compare with the Indian product information for the brand the patient is actually given."],
  }),
  claim("phenelzine", "onset", DOSE, "Many patients do not show a clinical response until treatment at 60 mg has been continued for at least 4 weeks.", "Many people do not show a response until treatment at 60 mg a day has been continued for at least 4 weeks.", {
    replacesRule: "onset-works-gradually",
    limitations: ["The 60 mg figure is the label's dose for this statement. A prescriber sets each person's dose.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("phenelzine"),
  callRightAway("phenelzine"),
  watch("phenelzine"),

  /* ---------------- selegiline (Emsam transdermal system: the depression product only) ---------------- */
  claim("selegiline", "what-it-is", IND, "EMSAM (selegiline transdermal system) is a monoamine oxidase inhibitor (MAOI) indicated for the treatment of adults with major depressive disorder (MDD)", "Emsam is a skin patch (a 'transdermal system') containing selegiline, a type of antidepressant called a monoamine oxidase inhibitor (MAOI). It is used to treat major depressive disorder in adults.", {
    applicability: ["Adults. The Emsam patch only."],
    limitations: ["Does not describe selegiline tablets or capsules, which are different products (the registry lists their use in Parkinson's disease separately).", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("selegiline", "interactions", GUIDE, "Using EMSAM with certain antidepressants and certain pain, cold and cough symptom medicines may cause a potentially life-threatening problem called serotonin syndrome", "Using Emsam with certain antidepressants and certain pain, cold and cough medicines may cause a potentially life-threatening problem called serotonin syndrome. Ask your pharmacist or prescriber before taking any other medicine.", {
    applicability: ["Emsam patch users."],
    limitations: ["The label does not list every medicine here. Not being named does not make a medicine safe.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("selegiline", "precaution", GUIDE, "Do not eat foods or drink beverages that contain high amounts of tyramine while using EMSAM 9 mg or EMSAM 12 mg or for 2 weeks after you stop using EMSAM 9 mg or EMSAM 12 mg.", "If you use the Emsam 9 mg or 12 mg patch, do not eat foods or drink beverages that contain high amounts of tyramine while using it or for 2 weeks after you stop.", {
    applicability: ["Emsam 9 mg and 12 mg patch strengths only."],
    limitations: ["The label gives different instructions for the 6 mg strength: follow what your prescriber says.", "Tyramine-rich foods are listed in the label's table, not reproduced here: ask your pharmacist for the list.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("selegiline", "precaution", GUIDE, "You should not drink alcohol while using EMSAM.", "Do not drink alcohol while using Emsam."),
  callRightAway("selegiline"),

  /* ---------------- tranylcypromine (Parnate tablets) ---------------- */
  claim("tranylcypromine", "used-for", IND, "PARNATE is indicated for the treatment of major depressive disorder (MDD) in adult patients who have not responded adequately to other antidepressants. PARNATE is not indicated for the initial treatment of MDD due to the potential for serious adverse reactions and drug interactions, and the need for dietary restrictions", "Parnate is used to treat major depressive disorder in adults who have not responded well enough to other antidepressants. It is not meant to be the first treatment, because of the potential for serious side effects and drug interactions, and the need for dietary restrictions."),
  claim("tranylcypromine", "precaution", GUIDE, "Do not eat foods or have drinks that have high amounts of tyramine while taking PARNATE or for 2 weeks after you stop taking PARNATE.", "Do not eat foods or have drinks with high amounts of tyramine while taking Parnate or for 2 weeks after you stop taking it. If you are not sure whether a food or drink contains tyramine, ask your healthcare provider.", {
    limitations: ["The label's table of foods and drinks to avoid is not reproduced here: ask your pharmacist for the list.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("tranylcypromine", "precaution", GUIDE, "Do not drink alcohol while taking PARNATE.", "Do not drink alcohol while taking Parnate."),
  claim("tranylcypromine", "interactions", GUIDE, "Taking PARNATE with certain antidepressants and certain pain, allergy symptom, and cold and cough symptom medicines may cause a potentially life-threatening hypertensive crisis or a problem called serotonin syndrome.", "Taking Parnate with certain antidepressants and certain pain, allergy, cold and cough medicines may cause a potentially life-threatening hypertensive crisis (a sudden, severe rise in blood pressure) or serotonin syndrome. Ask your pharmacist or prescriber before taking any other medicine.", {
    limitations: ["The label does not list every medicine here. Not being named does not make a medicine safe.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("tranylcypromine", "stopping", GUIDE, "Do not stop taking PARNATE without first talking to your healthcare provider. Stopping PARNATE suddenly may cause withdrawal symptoms.", "Do not stop taking Parnate without first talking to your healthcare provider. Stopping suddenly may cause withdrawal symptoms."),
  claim("tranylcypromine", "urgent-help", GUIDE, "If you take too much PARNATE (overdose) call your healthcare provider or poison control, or go to the nearest    hospital emergency room right away.", "If you take too much Parnate (an overdose), call your healthcare provider or go to the nearest hospital emergency room right away.", {
    limitations: ["The US label also names 'poison control', a US service. The Indian equivalent has not been checked.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  callRightAway("tranylcypromine"),

  /* ---------------- amoxapine tablets ---------------- */
  claim("amoxapine", "used-for", IND, "Amoxapine is indicated for the relief of symptoms of depression in patients with neurotic or reactive depressive disorders as well as endogenous and psychotic depressions. It is indicated for depression accompanied by anxiety or agitation.", "Amoxapine is used to relieve the symptoms of depression, including depression that comes with anxiety or agitation."),
  claim("amoxapine", "onset", PHARM, "The initial clinical effect may occur within four to seven days and occurs within two weeks in over 80% of responders.", "The first clinical effect may appear within four to seven days, and within two weeks in over 80% of the people who respond to the medicine.", {
    replacesRule: "onset-works-gradually",
    applicability: ["People who respond to amoxapine (the label's 'responders'). Adults."],
    limitations: ["Describes the INITIAL effect in responders, not the full benefit, and not everyone responds.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("amoxapine"),
  callRightAway("amoxapine"),
  watch("amoxapine"),

  /* ---------------- desipramine (Norpramin tablets) ---------------- */
  claim("desipramine", "used-for", IND, "NORPRAMIN is indicated for the treatment of depression.", "Norpramin is used to treat depression."),
  claim("desipramine", "onset", PHARM, "Earliest therapeutic effects may occasionally be seen in 2 to 5 days, but full treatment benefit usually requires 2 to 3 weeks to obtain.", "The earliest effects may occasionally be seen in 2 to 5 days, but the full benefit usually takes 2 to 3 weeks.", {
    replacesRule: "onset-works-gradually",
    limitations: ["'Usually' and 'occasionally' in the label: not a promise of timing for any one person.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("desipramine", "interactions", GUIDE, "Do not take an MAOI within 2 weeks of stopping NORPRAMIN unless directed to do so by your physician.", "Do not take a medicine from the MAOI group of antidepressants within 2 weeks of stopping Norpramin unless your doctor tells you to. Ask your pharmacist if you are not sure whether a medicine is an MAOI."),
  claim("desipramine", "interactions", GUIDE, "Do not start NORPRAMIN if you stopped taking an MAOI in the last 2 weeks unless directed to do so by your physician.", "Do not start Norpramin if you stopped taking an MAOI in the last 2 weeks, unless your doctor tells you to."),
  stopping("desipramine", `Never stop an antidepressant medicine without first talking to a healthcare provider.Stopping an antidepressant medicine suddenly can cause other symptoms.`),
  callRightAway("desipramine"),
  watch("desipramine"),

  /* ---------------- doxepin capsules (not the low-dose insomnia tablets or the cream) ---------------- */
  claim("doxepin", "used-for", IND, "Doxepin hydrochloride capsules are a tricyclic antidepressant (TCA) indicated for the treatment of major depressive disorder (MDD) in adults (1).", "Doxepin capsules are a tricyclic antidepressant used to treat major depressive disorder in adults.", {
    applicability: ["Adults. Doxepin hydrochloride CAPSULES only."],
    limitations: ["Does not describe the low-dose doxepin tablets for sleep or the doxepin cream, which have separate labels and uses.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("doxepin", "stopping", GUIDE, "Do not change your dose or stop taking doxepin hydrochloride capsules without first talking to your healthcare provider.", "Do not change your dose or stop taking doxepin capsules without first talking to your healthcare provider."),
  claim("doxepin", "precaution", GUIDE, "Pay close attention to any changes, especially sudden changes in mood, behavior, thoughts, or feelings, or if you develop suicidal thoughts or actions.", "Pay close attention to any changes, especially sudden changes, in mood, behaviour, thoughts or feelings, or if you develop suicidal thoughts or actions."),

  /* ---------------- imipramine tablets ---------------- */
  claim("imipramine", "used-for", IND, "Depression - For the relief of symptoms of depression.", "Imipramine is used to relieve the symptoms of depression."),
  claim("imipramine", "used-for", IND, "Childhood Enuresis - May be useful as temporary adjunctive therapy in reducing enuresis in children aged 6 years and older, after possible organic causes have been excluded by appropriate tests.", "Imipramine may also be useful as a temporary add-on treatment to reduce bed-wetting (enuresis) in children aged 6 years and older, after possible physical causes have been ruled out by tests.", {
    applicability: ["Children aged 6 and over, after tests have excluded other causes."],
    limitations: ["Only for use under a doctor's direction; the label calls it temporary and adjunctive.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  claim("imipramine", "onset", IND, "One to three weeks of treatment may be needed before optimal therapeutic effects are evident.", "One to three weeks of treatment may be needed before the best effects are seen.", {
    replacesRule: "onset-works-gradually",
    limitations: ["The label says 'may be needed': it is not a promise of timing for any one person.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("imipramine"),
  callRightAway("imipramine"),
  watch("imipramine"),

  /* ---------------- nortriptyline capsules ---------------- */
  claim("nortriptyline", "used-for", IND, "Nortriptyline hydrochloride is indicated for the relief of symptoms of depression.", "Nortriptyline is used to relieve the symptoms of depression."),
  claim("nortriptyline", "interactions", GUIDE, "Do not take an MAOI within 2 weeks of stopping nortriptyline hydrochloride unless directed to do so by your physician.", "Do not take a medicine from the MAOI group of antidepressants within 2 weeks of stopping nortriptyline unless your doctor tells you to. Ask your pharmacist if you are not sure whether a medicine is an MAOI."),
  claim("nortriptyline", "interactions", GUIDE, "Do not start nortriptyline hydrochloride if you stopped taking an MAOI in the last 2 weeks unless directed to do so by your physician.", "Do not start nortriptyline if you stopped taking an MAOI in the last 2 weeks, unless your doctor tells you to."),
  stopping("nortriptyline", `Never stop an antidepressant medicine without first talking to a healthcare provider.Stopping an antidepressant medicine suddenly can cause other symptoms.`),
  callRightAway("nortriptyline"),
  watch("nortriptyline"),

  /* ---------------- protriptyline tablets ---------------- */
  claim("protriptyline", "used-for", IND, "Protriptyline hydrochloride tablets are indicated for the treatment of symptoms of mental depression in patients who are under close medical supervision.", "Protriptyline is used to treat the symptoms of depression in people who are under close medical supervision."),
  claim("protriptyline", "onset", PHARM, "The initial clinical effect may occur within one week.", "The first clinical effect may appear within one week.", {
    replacesRule: "onset-works-gradually",
    limitations: ["Describes the INITIAL effect only ('may occur'), not the full benefit.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("protriptyline", `${GUIDE_STOP_1} ${GUIDE_STOP_2}`),
  callRightAway("protriptyline"),

  /* ---------------- trimipramine capsules ---------------- */
  claim("trimipramine", "used-for", IND, "Trimipramine capsules are indicated for the relief of symptoms of depression.", "Trimipramine is used to relieve the symptoms of depression."),
  claim("trimipramine", "onset", DOSE, "Most antidepressant drugs have a lag period of ten days to four weeks before a therapeutic response is noted.", "Most antidepressants take between ten days and four weeks before a response is noticed.", {
    replacesRule: "onset-works-gradually",
    applicability: ["Antidepressants in general, as stated in this label. The label does not state this for trimipramine alone."],
    limitations: ["A class-level statement made inside this label, not a figure for trimipramine specifically.", "US label only: Indian approval, strengths and warnings may differ."],
  }),
  stopping("trimipramine"),
  callRightAway("trimipramine"),
  watch("trimipramine"),
];
