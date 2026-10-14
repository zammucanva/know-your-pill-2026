import type { ClaimCategory, ClaimRecord } from "./types";
import { batch2, type Make } from "./claims-batch2";
import { batch3 } from "./claims-batch3";

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
  // second batch: medicines whose US label has no patient-directed Medication Guide (see claims-batch2.ts)
  risperidone: "e90c886c-132a-4df6-8604-cfe5ffa49d5b",
  haloperidol: "31e33656-2f53-49e6-9816-261ea2e6961a",
  chlorpromazine: "2bd42d3a-bf89-4d74-a252-9b914106a570",
  buspirone: "55810b17-4796-49d0-90e4-8e075d62eda4",
  propranolol: "0d74bb04-8227-4afa-b523-ce1556150e07",
  clonidine: "88a8db46-0fc9-48cd-b7cc-ac9c9cdea100",
  hydroxyzine: "9ef6a4b7-362d-61b4-e053-2995a90a0ebb",
  trihexyphenidyl: "a44d7803-164d-4a67-9356-581c45de8596",
  benztropine: "c19664aa-a797-4192-b5f3-e906a7cac048",
  disulfiram: "b90f8ff4-4fb3-46ab-8149-cb55f24a4044",
  prazosin: "d01b8927-a422-43b3-89de-088506fdee3c",
  fluphenazine: "5b443b30-5682-4cf3-9ed0-716efddbc865",
  trifluoperazine: "f742a579-411a-4140-91c4-edc735d638fa",
  chlordiazepoxide: "511264f5-024b-350a-e063-6394a90a51e9",
  flumazenil: "56452ba8-521d-1f84-e063-6294a90af6fc",
  loxapine: "3e412c36-66b0-444b-833b-cea79976844e",
  perphenazine: "5fbfe9da-26e8-4705-98f3-42acd3d7b439",
  thioridazine: "52fea941-0b47-41c1-b00d-f88150e8ab93",
  thiothixene: "81c40311-7dc4-4332-8920-a39a8466aea6",
  pimozide: "70b079e2-a1f7-4a93-8685-d60a4d7c1280",
  molindone: "1275e92f-9573-4d0c-8e77-1c9ac47696d2",
  asenapine: "f5cd9abb-40e3-4cb5-a1b2-40cdba8a1c7e",
  iloperidone: "33f60b40-3fca-11de-8f56-0002a5d5c51b",
  pimavanserin: "1e6bea44-57d6-4bac-9328-46e1ee59f83b",
  paliperidone: "bbbaa057-f587-4eb9-a0d2-463dbcd57661",
  naltrexone: "06ff2d5a-e62b-4fa4-bbdb-01938535bc65",
  acamprosate: "06b63fc8-572e-4b3d-8150-73b7854a9238",
  guanfacine: "73d50917-c807-4213-8efe-aea209845936",
  galantamine: "10497273-d907-0514-e063-6294a90a1362",
  rivastigmine: "c246a0e5-1e77-41ee-a7b3-384f21f2f2e0",
  tasimelteon: "46b09064-a675-92d5-24a7-dac0410f77ae",
  triiodothyronine: "548d684a-86f5-4e57-9844-d8cf0a84e068",
  diphenhydramine: "147adc14-ca7c-45f5-9925-ea569edbfe96",
  "l-methylfolate": "76386336-417d-4f90-8171-1f745198ded2",
  ketamine: "14e8f864-8b8a-4e7e-8439-e510d3107063",
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

const CONTRA = "34070-3";
const ADVERSE = "34084-4";
const PI_LIM = ["US prescribing information, which is written for clinicians: this restates it in plain words.", "US label only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."];
const LIST_LIM = [...PI_LIM, "The label's list includes reactions reported with similar medicines, not all with this one, and gives no frequencies."];

const piClaim: Make = (slug, category, loinc, passage, wording, limitations = PI_LIM, replacesRule) => claim(slug, category, loinc, passage, wording, { limitations, replacesRule });

/** Plain-language statements drawn from the stored US prescribing information of the antidepressants that have no patient-directed guide. */
function PI_CLAIMS(): ClaimRecord[] {
  const c = (slug: string, cat: ClaimCategory, loinc: string, passage: string, wording: string, limitations: string[] = PI_LIM) => claim(slug, cat, loinc, passage, wording, { limitations });
  return [
    /* ---- isocarboxazid (Marplan) ---- */
    c("isocarboxazid", "contraindication", CONTRA, "Marplan should not be administered to any patient with a confirmed or suspected cerebrovascular defect or to any patient with cardiovascular disease or hypertension.", "Marplan should not be given to anyone with a confirmed or suspected cerebrovascular defect (a problem with the blood vessels of the brain), with cardiovascular disease, or with high blood pressure (hypertension)."),
    c("isocarboxazid", "contraindication", CONTRA, "Marplan should not be used in the presence of pheochromocytoma, as such tumors secrete pressor substances whose metabolism may be inhibited by Marplan.", "Marplan should not be used if you have a pheochromocytoma, a tumour that releases substances that raise blood pressure, because Marplan may block the body from breaking those substances down."),
    c("isocarboxazid", "contraindication", CONTRA, "Marplan should not be used in patients with a history of liver disease, or in those with abnormal liver function tests.", "Marplan should not be used if you have a history of liver disease or abnormal liver function tests."),
    c("isocarboxazid", "contraindication", CONTRA, "Marplan should not be used in patients with severe impairment of renal function.", "Marplan should not be used if your kidney function is severely impaired."),
    c("isocarboxazid", "contraindication", CONTRA, "Marplan should not be used in patients with known hypersensitivity to isocarboxazid.", "Marplan should not be used if you are known to be allergic (hypersensitive) to isocarboxazid."),
    c("isocarboxazid", "interactions", CONTRA, "Marplan (isocarboxazid) should not be administered in combination with any of the following: MAO inhibitors or dibenzazepine derivatives; sympathomimetics (including amphetamines); some central nervous system depressants (including narcotics and alcohol); antihypertensive, diuretic, antihistaminic, sedative or anesthetic drugs, buproprion HCL, buspirone HCL, dextromethorphan, cheese or other foods with a high tyramine content; or excessive quantities of caffeine.", "Marplan should not be combined with: other MAO inhibitors or dibenzazepine-type medicines (a group that includes tricyclic antidepressants); sympathomimetics (including amphetamines); some medicines that slow the brain, including narcotics and alcohol; blood pressure, water (diuretic), allergy (antihistamine), sedative or anaesthetic medicines; bupropion; buspirone; dextromethorphan; cheese or other foods high in tyramine; or large amounts of caffeine."),
    c("isocarboxazid", "interactions", CONTRA, "Marplan should not be administered together with, or in close proximity to, other MAO inhibitors or dibenzazepine-related entities. Hypertensive crises, severe convulsive seizures, coma, or circulatory collapse may occur in patients receiving such combinations.", "Marplan should not be taken together with, or close in time to, other MAO inhibitors or dibenzazepine-type medicines. Hypertensive crises (very high blood pressure), severe convulsive seizures, coma or circulatory collapse may occur with such combinations."),
    c("isocarboxazid", "how-to-take", DOSE, "For maximum therapeutic effect, the dosage of Marplan must be individually adjusted on the basis of careful observation of the patient.", "Your dose of Marplan is adjusted for you, based on careful observation of how you respond."),
    c("isocarboxazid", "how-to-take", DOSE, "After maximum clinical response is achieved, an attempt should be made to reduce the dosage slowly over a period of several weeks without jeopardizing the therapeutic response.", "Once you have had your best response, your prescriber should try to reduce the dose slowly over several weeks without losing the benefit."),
    c("isocarboxazid", "side-effects", ADVERSE, "The commonly observed adverse event that occurred in Marplan patients with an incidence of 5% or greater and at least twice the incidence in placebo patients were nausea, dry mouth, and dizziness", "In short trials, the side effects seen in 5% or more of people taking Marplan, and at least twice as often as with a dummy tablet (placebo), were nausea, dry mouth and dizziness.", ["US prescribing information, which is written for clinicians: this restates it in plain words.", "Figures come from a small set of short US trials and cannot predict how common a side effect is for any one person.", "US label only: Indian approval, strengths and warnings may differ."]),
    c("isocarboxazid", "side-effects", ADVERSE, "The most common reasons for discontinuation were dizziness, orthostatic hypotension, syncope, and dry mouth.", "In those trials, the most common reasons people stopped treatment were dizziness, low blood pressure on standing (orthostatic hypotension), fainting (syncope) and dry mouth."),

    /* ---- phenelzine (Nardil) ---- */
    c("phenelzine", "contraindication", CONTRA, "NARDIL should not be used in patients who are hypersensitive to the drug or its ingredients, with pheochromocytoma, congestive heart failure, severe renal impairment or renal disease, a history of liver disease, or abnormal liver function tests.", "Nardil should not be used if you are hypersensitive (allergic) to it or its ingredients, or if you have a pheochromocytoma, congestive heart failure, severe kidney impairment or kidney disease, a history of liver disease, or abnormal liver function tests."),
    c("phenelzine", "interactions", CONTRA, "Therefore, patients being treated with NARDIL should not take sympathomimetic drugs (including amphetamines, cocaine, methylphenidate, dopamine, epinephrine, and norepinephrine) or related compounds (including methyldopa, L-dopa, L-tryptophan, L-tyrosine, and phenylalanine).", "People taking Nardil should not take sympathomimetic drugs (including amphetamines, cocaine, methylphenidate, dopamine, epinephrine and norepinephrine) or related compounds (including methyldopa, L-dopa, L-tryptophan, L-tyrosine and phenylalanine). The label explains that this combination may cause hypertensive crises (very high blood pressure)."),
    c("phenelzine", "interactions", CONTRA, "NARDIL should not be used in combination with dextromethorphan or with CNS depressants such as alcohol and certain narcotics.", "Nardil should not be used with dextromethorphan, or with medicines that slow the brain (CNS depressants) such as alcohol and certain narcotics."),
    c("phenelzine", "interactions", CONTRA, "There have been reports of serious reactions (including hyperthermia, rigidity, myoclonic movements and death) when serotoninergic drugs (e.g., dexfenfluramine, fluoxetine, fluvoxamine, paroxetine, sertraline, citalopram, venlafaxine) have been combined with an MAO inhibitor. Therefore, the concomitant use of NARDIL with serotoninergic agents is contraindicated", "Serious reactions, including high body temperature, stiff muscles, muscle jerks and death, have been reported when serotonin-acting medicines (such as fluoxetine, fluvoxamine, paroxetine, sertraline, citalopram and venlafaxine) were combined with an MAO inhibitor. Nardil must not be used with such medicines."),
    c("phenelzine", "interactions", CONTRA, "At least 14 days should elapse between the discontinuation of NARDIL and the institution of another antidepressant or buspirone HCl, or the discontinuation of another MAO inhibitor and the institution of NARDIL.", "At least 14 days should pass between stopping Nardil and starting another antidepressant or buspirone, or between stopping another MAO inhibitor and starting Nardil."),
    c("phenelzine", "precaution", CONTRA, "Hypertensive crises during NARDIL therapy may also be caused by the ingestion of foods with a high concentration of tyramine or dopamine. Therefore, patients being treated with NARDIL should avoid high protein food that has undergone protein breakdown by aging, fermentation, pickling, smoking, or bacterial contamination. Patients should also avoid cheeses (especially aged varieties), pickled herring, beer, wine, liver, yeast extract (including brewer's yeast in large quantities), dry sausage (including Genoa salami, hard salami, pepperoni, and Lebanon bologna), pods of broad beans (fava beans), and yogurt. Excessive amounts of caffeine and chocolate may also cause hypertensive reactions.", "Foods high in tyramine or dopamine can cause a hypertensive crisis (very high blood pressure) during Nardil treatment. Avoid high-protein foods that have been aged, fermented, pickled, smoked or bacterially contaminated. Also avoid cheeses (especially aged ones), pickled herring, beer, wine, liver, yeast extract (including brewer's yeast in large quantities), dry sausage (such as salami and pepperoni), pods of broad beans (fava beans), and yogurt. Large amounts of caffeine and chocolate may also cause high blood pressure."),
    c("phenelzine", "side-effects", ADVERSE, "When they occur, such effects tend to be mild or moderate in severity (see below), often subside as treatment continues, and can be minimized by adjusting dosage", "The label says that when side effects occur they tend to be mild or moderate, often ease as treatment continues, and can be reduced by adjusting the dose."),
    c("phenelzine", "side-effects", ADVERSE, "Dizziness, headache, drowsiness, sleep disturbances (including insomnia and hypersomnia), fatigue, weakness, tremors, twitching, myoclonic movements, hyperreflexia.", "Common side effects listed for the nervous system: dizziness, headache, drowsiness, sleep disturbances (insomnia or sleeping too much), tiredness, weakness, tremors, twitching, muscle jerks and overactive reflexes."),
    c("phenelzine", "side-effects", ADVERSE, "Constipation, dry mouth, gastrointestinal disturbances, elevated serum transaminases (without accompanying signs and symptoms).", "Common side effects listed for the stomach and bowel: constipation, dry mouth, stomach and bowel upsets, and raised liver enzymes in blood tests (without symptoms)."),
    c("phenelzine", "side-effects", ADVERSE, "Postural hypotension, edema.", "Common side effects listed for the heart and circulation: low blood pressure on standing (postural hypotension) and swelling (edema). Weight gain and sexual disturbances are also listed as common."),
    c("phenelzine", "side-effects", ADVERSE, "Sexual disturbances, eg, anorgasmia and ejaculatory disturbances and impotence.", "Common sexual side effects listed: difficulty reaching orgasm (anorgasmia), ejaculation problems and impotence."),
    c("phenelzine", "side-effects", ADVERSE, "To date, fatal progressive necrotizing hepatocellular damage has been reported in very few patients. Reversible jaundice.", "Among the less frequently reported severe side effects, serious progressive liver damage that proved fatal has been reported in very few patients, and reversible jaundice (yellowing of the skin and eyes) has also been reported."),
    c("phenelzine", "stopping", ADVERSE, "Withdrawal may be associated with nausea, vomiting, and malaise. An uncommon withdrawal syndrome following abrupt withdrawal of NARDIL has been infrequently reported. Signs and symptoms of this syndrome generally commence 24 to 72 hours after drug discontinuation and may range from vivid nightmares with agitation to frank psychosis and convulsions.", "Stopping may cause nausea, vomiting and malaise (feeling unwell). A less common withdrawal syndrome after stopping suddenly has been reported, with signs that generally begin 24 to 72 hours later and range from vivid nightmares with agitation to psychosis and convulsions."),
    c("phenelzine", "how-to-take", DOSE, "After maximum benefit from NARDIL is achieved, dosage should be reduced slowly over several weeks.", "Once you have had the maximum benefit, the dose should be reduced slowly over several weeks."),

    /* ---- imipramine ---- */
    c("imipramine", "interactions", CONTRA, "The concomitant use of monoamine oxidase inhibiting compounds is contraindicated. Hyperpyretic crises or severe convulsive seizures may occur in patients receiving such combinations. The potentiation of adverse effects can be serious, or even fatal.", "Imipramine must not be used together with monoamine oxidase inhibitors (MAOIs, another group of antidepressants). Hyperpyretic crises (a very high fever) or severe convulsive seizures may occur with such combinations, and the effects can be serious or even fatal."),
    c("imipramine", "interactions", CONTRA, "When it is desired to substitute imipramine hydrochloride tablets, in patients receiving a monoamine oxidase inhibitor, as long an interval should elapse as the clinical situation will allow, with a minimum of 14 days.", "When imipramine is to replace an MAOI, as long a gap as the clinical situation allows should be left, with a minimum of 14 days."),
    c("imipramine", "contraindication", CONTRA, "The drug is contraindicated during the acute recovery period after a myocardial infarction. Patients with a known hypersensitivity to this compound should not be given the drug.", "Imipramine must not be used during the acute recovery period after a heart attack (myocardial infarction), or by people known to be hypersensitive (allergic) to it."),
    c("imipramine", "how-to-take", DOSE, "Dosage should be initiated at a low level and increased gradually, noting carefully the clinical response and any evidence of intolerance.", "Your prescriber should start you on a low dose and increase it gradually, watching your response and any sign that you are not tolerating it."),
    c("imipramine", "how-to-take", DOSE, "Lower dosages are recommended for elderly patients and adolescents.", "Lower doses are recommended for elderly patients and adolescents."),
    c("imipramine", "side-effects", ADVERSE, "Anticholinergic: Dry mouth, and, rarely, associated sublingual adenitis; blurred vision, disturbances of accommodation, mydriasis; constipation, paralytic ileus; urinary retention, delayed micturition, dilation of the urinary tract.", "Listed effects on the mouth, eyes, bowel and bladder: dry mouth (and, rarely, swelling of the glands under the tongue); blurred vision, trouble focusing and widened pupils; constipation or a blocked bowel (paralytic ileus); difficulty passing urine (urinary retention or delayed urination) and widening of the urinary tract.", LIST_LIM),
    c("imipramine", "side-effects", ADVERSE, "Cardiovascular: Orthostatic hypotension, hypertension, tachycardia, palpitation, myocardial infarction, arrhythmias, heart block, ECG changes, precipitation of congestive heart failure, stroke.", "Listed effects on the heart and blood pressure: low blood pressure on standing (orthostatic hypotension), high blood pressure, fast heartbeat, palpitations, heart attack, irregular heartbeat, heart block, ECG changes, congestive heart failure being brought on, and stroke.", LIST_LIM),
    c("imipramine", "side-effects", ADVERSE, "Other: Jaundice (simulating obstructive); altered liver function; weight gain or loss; perspiration; flushing; urinary frequency; drowsiness, dizziness, weakness and fatigue; headache; parotid swelling; alopecia; proneness to falling, hyponatremia.", "Other listed effects: jaundice (yellowing of the skin and eyes), changes in liver function, weight gain or loss, sweating, flushing, passing urine often, drowsiness, dizziness, weakness and tiredness, headache, swelling of the parotid (salivary) gland, hair loss, proneness to falling and low blood sodium (hyponatremia).", LIST_LIM),
    c("imipramine", "stopping", ADVERSE, "Though not indicative of addiction, abrupt cessation of treatment after prolonged therapy may produce nausea, headache, and malaise.", "Stopping suddenly after long treatment may cause nausea, headache and malaise (feeling unwell). The label says this does not mean addiction."),

    /* ---- amoxapine ---- */
    c("amoxapine", "interactions", CONTRA, "It should not be given concomitantly with monoamine oxidase inhibitors. Hyperpyretic crises, severe convulsions, and deaths have occurred in patients receiving tricyclic antidepressants and monoamine oxidase inhibitors simultaneously. When it is desired to replace a monoamine oxidase inhibitor with amoxapine, a minimum of 14 days should be allowed to elapse after the former is discontinued.", "Amoxapine should not be given together with monoamine oxidase inhibitors (MAOIs). Hyperpyretic crises (very high fever), severe convulsions and deaths have occurred in people taking tricyclic antidepressants and MAOIs at the same time. When an MAOI is to be replaced by amoxapine, at least 14 days should pass after the MAOI is stopped."),
    c("amoxapine", "contraindication", CONTRA, "Amoxapine is contraindicated in patients who have shown prior hypersensitivity to dibenzoxazepine compounds.", "Amoxapine must not be used by people who have shown hypersensitivity (allergy) to dibenzoxazepine compounds."),
    c("amoxapine", "contraindication", CONTRA, "The drug is not recommended for use during the acute recovery phase following myocardial infarction.", "It is not recommended during the acute recovery phase after a heart attack (myocardial infarction)."),
    c("amoxapine", "how-to-take", DOSE, "Effective dosage of amoxapine may vary from one patient to another.", "The dose that works can differ from one person to another."),
    c("amoxapine", "how-to-take", DOSE, "Amoxapine may be given in a single daily dose, not to exceed 300 mg, preferably at bedtime. If the total daily dosage exceeds 300 mg, it should be given in divided doses.", "Amoxapine may be taken as a single daily dose, preferably at bedtime, if the total is not more than 300 mg. A total above 300 mg a day should be divided into several doses. Your own dose is set by your prescriber.", ["US prescribing information, which is written for clinicians: this restates it in plain words.", "Do not use this figure to change your own dose.", "US label only: Indian approval, strengths and warnings may differ."]),
    c("amoxapine", "how-to-take", DOSE, "In general, lower dosages are recommended for these patients.", "For elderly patients, lower doses are generally recommended."),
    c("amoxapine", "side-effects", ADVERSE, "The most frequent types of adverse reactions occurring with amoxapine in controlled clinical trials were sedative and anticholinergic: these included drowsiness (14%), dry mouth (14%), constipation (12%), and blurred vision (7%).", "In controlled US trials, the most frequent side effects were sedative (calming) and drying effects: drowsiness (14%), dry mouth (14%), constipation (12%) and blurred vision (7%).", ["US prescribing information, which is written for clinicians: this restates it in plain words.", "Figures come from US trials and cannot predict how common a side effect is for any one person.", "US label only: Indian approval, strengths and warnings may differ."]),
    c("amoxapine", "side-effects", ADVERSE, "Other: dizziness, headache, fatigue, weakness, excessive appetite, increased perspiration.", "Less frequently reported: dizziness, headache, tiredness, weakness, excessive appetite and increased sweating.", LIST_LIM),

    /* ---- desipramine (Norpramin) ---- */
    c("desipramine", "contraindication", CONTRA, "NORPRAMIN is contraindicated in the acute recovery period following myocardial infarction.  It should not be used in those who have shown prior hypersensitivity to the drug.", "Norpramin must not be used in the acute recovery period after a heart attack (myocardial infarction), or by people who have shown hypersensitivity (allergy) to it."),
    c("desipramine", "how-to-take", DOSE, "Not recommended for use in children", "It is not recommended for use in children."),
    c("desipramine", "how-to-take", DOSE, "Lower dosages are recommended for elderly patients and adolescents.", "Lower doses are recommended for elderly patients and adolescents."),
    c("desipramine", "how-to-take", DOSE, "Dosage should be initiated at a low level and increased according to clinical response and any evidence of intolerance.", "Your prescriber should start you on a low dose and increase it according to your response and any sign that you are not tolerating it."),
    c("desipramine", "monitoring", DOSE, "Clinical symptoms of intolerance, especially drowsiness, dizziness, and postural hypotension, should also alert the physician to the need for reduction in dosage.", "Symptoms of intolerance, especially drowsiness, dizziness and low blood pressure on standing (postural hypotension), are signs that the dose may need to be reduced. Tell your prescriber if you notice them."),
    c("desipramine", "side-effects", ADVERSE, "Anticholinergic:  Dry mouth, and rarely associated sublingual adenitis; blurred vision, disturbance of accommodation, mydriasis, increased intraocular pressure; constipation, paralytic ileus; urinary retention, delayed micturition, dilation of urinary tract", "Listed effects on the mouth, eyes, bowel and bladder: dry mouth (and, rarely, swelling of the glands under the tongue); blurred vision, trouble focusing, widened pupils and raised pressure in the eye; constipation or a blocked bowel (paralytic ileus); difficulty passing urine and widening of the urinary tract.", LIST_LIM),
    c("desipramine", "side-effects", ADVERSE, "Allergic:  Skin rash, petechiae, urticaria, itching, photosensitization (avoid excessive exposure to sunlight), edema (of face and tongue or general), drug fever, cross-sensitivity with other tricyclic drugs", "Listed allergic-type effects: skin rash, tiny red or purple spots (petechiae), hives (urticaria), itching, sensitivity to sunlight (avoid excessive exposure to sunlight), swelling of the face and tongue or of the body, drug fever, and cross-sensitivity with other tricyclic drugs.", LIST_LIM),
    c("desipramine", "stopping", ADVERSE, "Though not indicative of addiction, abrupt cessation of treatment after prolonged therapy may produce nausea, headache, and malaise.", "Stopping suddenly after long treatment may cause nausea, headache and malaise (feeling unwell). The label says this does not mean addiction."),

    /* ---- nortriptyline ---- */
    c("nortriptyline", "contraindication", CONTRA, "Nortriptyline hydrochloride is contraindicated during the acute recovery period after myocardial infarction.", "Nortriptyline must not be used during the acute recovery period after a heart attack (myocardial infarction)."),
    c("nortriptyline", "how-to-take", DOSE, "Nortriptyline hydrochloride is not recommended for children.", "Nortriptyline is not recommended for children."),
    c("nortriptyline", "how-to-take", DOSE, "Lower than usual dosages are recommended for elderly patients and adolescents.", "Lower than usual doses are recommended for elderly patients and adolescents."),
    c("nortriptyline", "how-to-take", DOSE, "The physician should initiate dosage at a low level and increase it gradually, noting carefully the clinical response and any evidence of intolerance.", "Your prescriber should start you on a low dose and increase it gradually, watching your response and any sign that you are not tolerating it."),
    c("nortriptyline", "how-to-take", DOSE, "If a patient develops minor side effects, the dosage should be reduced. The drug should be discontinued promptly if adverse effects of a serious nature or allergic manifestations occur.", "If you get minor side effects, the dose should be reduced. The medicine should be stopped promptly if serious side effects or allergic reactions occur, so tell your prescriber straight away."),
    c("nortriptyline", "monitoring", DOSE, "When doses above 100 mg daily are administered, plasma levels of nortriptyline should be monitored", "When doses above 100 mg a day are used, the level of nortriptyline in the blood should be monitored."),
    c("nortriptyline", "side-effects", ADVERSE, "Anticholinergic - Dry mouth and, rarely, associated sublingual adenitis, blurred vision, disturbance of accommodation, mydriasis; constipation, paralytic ileus; urinary retention, delayed micturition, dilation of the urinary tract.", "Listed effects on the mouth, eyes, bowel and bladder: dry mouth (and, rarely, swelling of the glands under the tongue), blurred vision, trouble focusing and widened pupils; constipation or a blocked bowel (paralytic ileus); difficulty passing urine and widening of the urinary tract.", LIST_LIM),
    c("nortriptyline", "side-effects", ADVERSE, "Allergic - Skin rash, petechiae, urticaria, itching, photosensitization (avoid excessive exposure to sunlight); edema (general or of face and tongue), drug fever, cross-sensitivity with other tricyclic drugs.", "Listed allergic-type effects: skin rash, tiny red or purple spots (petechiae), hives (urticaria), itching, sensitivity to sunlight (avoid excessive exposure to sunlight), swelling of the face and tongue or of the body, drug fever, and cross-sensitivity with other tricyclic drugs.", LIST_LIM),
    c("nortriptyline", "stopping", ADVERSE, "Though these are not indicative of addiction, abrupt cessation of treatment after prolonged therapy may produce nausea, headache, and malaise.", "Stopping suddenly after long treatment may cause nausea, headache and malaise (feeling unwell). The label says this does not mean addiction."),

    /* ---- protriptyline ---- */
    c("protriptyline", "interactions", CONTRA, "It should not be given concomitantly with a monoamine oxidase inhibiting compound. Hyperpyretic crises, severe convulsions, and deaths have occurred in patients receiving tricyclic antidepressant and monoamine oxidase inhibiting drugs simultaneously. When it is desired to substitute protriptyline for a monoamine oxidase inhibitor, a minimum of 14 days should be allowed to elapse after the latter is discontinued.", "Protriptyline should not be given together with a monoamine oxidase inhibitor (MAOI). Hyperpyretic crises (very high fever), severe convulsions and deaths have occurred in people taking tricyclic antidepressants and MAOIs at the same time. When an MAOI is to be replaced by protriptyline, at least 14 days should pass after the MAOI is stopped."),
    c("protriptyline", "interactions", CONTRA, "Protriptyline is contraindicated in patients taking cisapride because of the possibility of adverse cardiac interactions including prolongation of the QT interval, cardiac arrhythmias and conduction system disturbances.", "Protriptyline must not be used in people taking cisapride, because of possible harmful effects on the heart, including a longer QT interval, irregular heartbeats and heart conduction problems."),
    c("protriptyline", "contraindication", CONTRA, "This drug should not be used during the acute recovery phase following myocardial infarction.", "It should not be used during the acute recovery phase after a heart attack (myocardial infarction)."),
    c("protriptyline", "contraindication", CONTRA, "Protriptyline hydrochloride tablets are contraindicated in patients who have shown prior hypersensitivity to it.", "It must not be used by people who have shown hypersensitivity (allergy) to protriptyline."),
    c("protriptyline", "how-to-take", DOSE, "Dosage should be initiated at a low level and increased gradually, noting carefully the clinical response and any evidence of intolerance.", "Your prescriber should start you on a low dose and increase it gradually, watching your response and any sign that you are not tolerating it."),
    c("protriptyline", "how-to-take", DOSE, "Minor adverse reactions require reduction in dosage. Major adverse reactions or evidence of hypersensitivity require prompt discontinuation of the drug.", "Minor side effects call for a lower dose. Major side effects or signs of an allergic (hypersensitivity) reaction call for the medicine to be stopped promptly, so tell your prescriber straight away."),
    c("protriptyline", "how-to-take", DOSE, "In general, lower dosages are recommended for these patients.", "For adolescents and elderly patients, lower doses are generally recommended."),
    c("protriptyline", "side-effects", ADVERSE, "Protriptyline is more likely to aggravate agitation and anxiety and produce cardiovascular reactions such as tachycardia and hypotension.", "Compared with similar medicines, protriptyline is more likely to make agitation and anxiety worse and to cause heart and blood pressure effects such as a fast heartbeat (tachycardia) and low blood pressure (hypotension)."),
    c("protriptyline", "side-effects", ADVERSE, "Anticholinergic Paralytic ileus; hyperpyrexia; urinary retention, delayed micturition, dilatation of the urinary tract; constipation; blurred vision, disturbance of accommodation, increased intraocular pressure, mydriasis; dry mouth and rarely associated sublingual adenitis.", "Listed effects on the bowel, bladder, eyes and mouth: a blocked bowel (paralytic ileus); very high fever (hyperpyrexia); difficulty passing urine and widening of the urinary tract; constipation; blurred vision, trouble focusing, raised pressure in the eye and widened pupils; dry mouth (and, rarely, swelling of the glands under the tongue).", LIST_LIM),

    /* ---- trimipramine ---- */
    c("trimipramine", "interactions", CONTRA, "The use of MAOIs intended to treat psychiatric disorders with trimipramine capsules or within 14 days of stopping treatment with trimipramine capsules is contraindicated because of an increased risk of serotonin syndrome. The use of trimipramine capsules within 14 days of stopping an MAOI intended to treat psychiatric disorders is also contraindicated", "Do not use an MAOI (a group of antidepressants) with trimipramine, or within 14 days of stopping trimipramine, because of an increased risk of serotonin syndrome. Trimipramine must also not be used within 14 days of stopping an MAOI."),
    c("trimipramine", "interactions", CONTRA, "Starting trimipramine capsules in a patient who is being treated with MAOIs such as linezolid or intravenous methylene blue is also contraindicated because of an increased risk of serotonin syndrome", "Starting trimipramine in someone being treated with an MAOI such as linezolid or intravenous methylene blue is also not allowed, because of an increased risk of serotonin syndrome."),
    c("trimipramine", "contraindication", CONTRA, "The drug is contraindicated during the acute recovery period after a myocardial infarction.", "It must not be used during the acute recovery period after a heart attack (myocardial infarction)."),
    c("trimipramine", "how-to-take", DOSE, "Dosage should be initiated at a low level and increased gradually, noting carefully the clinical response and any evidence of intolerance.", "Your prescriber should start you on a low dose and increase it gradually, watching your response and any sign that you are not tolerating it."),
    c("trimipramine", "how-to-take", DOSE, "Lower dosages are recommended for elderly patients and adolescents.", "Lower doses are recommended for elderly patients and adolescents."),
    c("trimipramine", "how-to-take", DOSE, "Increasing the dose will not shorten this period but rather increase the incidence of adverse reactions.", "Taking a higher dose will not shorten the wait for a response; it only makes side effects more likely.", ["The label says this about most antidepressants as a class, in the sentence about the lag before a response.", ...PI_LIM]),
    c("trimipramine", "urgent-help", ADVERSE, "Leukocyte and differential counts should be performed in any patient who develops fever and sore throat during therapy; the drug should be discontinued if there is evidence of pathological neutrophil depression.", "If you get a fever and sore throat during treatment, tell your prescriber. A blood test of your white cells should be done. The medicine should be stopped if the test shows a harmful fall in a type of white cell (neutrophils)."),
    c("trimipramine", "side-effects", ADVERSE, "Anticholinergic Dry mouth and, rarely, associated sublingual adenitis; blurred vision, disturbances of accommodation, mydriasis, constipation, paralytic ileus; urinary retention, delayed micturition, dilation of the urinary tract.", "Listed effects on the mouth, eyes, bowel and bladder: dry mouth (and, rarely, swelling of the glands under the tongue); blurred vision, trouble focusing and widened pupils; constipation or a blocked bowel (paralytic ileus); difficulty passing urine and widening of the urinary tract.", LIST_LIM),
    c("trimipramine", "stopping", ADVERSE, "Though not indicative of addiction, abrupt cessation of treatment after prolonged therapy may produce nausea, headache, and malaise.", "Stopping suddenly after long treatment may cause nausea, headache and malaise (feeling unwell). The label says this does not mean addiction."),
  ];
}

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

  /* ---------------- second pass: parts the first batch left empty, from the same stored Medication Guides ---------------- */
  // tranylcypromine (Parnate)
  claim("tranylcypromine", "what-it-is", GUIDE, "PARNATE belongs to a class of medicines called monoamine oxidase inhibitors (MAOIs).", "Parnate (tranylcypromine) belongs to a group of antidepressants called monoamine oxidase inhibitors (MAOIs)."),
  claim("tranylcypromine", "precaution", GUIDE, "It is not known if PARNATE is safe and effective for use in children.", "It is not known whether Parnate is safe and effective for children."),
  claim("tranylcypromine", "contraindication", GUIDE, "Do not take PARNATE if you: take certain medicines, including: antidepressants, such as: other monoamine oxidase inhibitors (MAOIs) selective serotonin reuptake inhibitors (SSRIs) and serotonin and norepinephrine reuptake inhibitors (SNRIs) tricyclic antidepressants other antidepressants, such as amoxapine, bupropion, maprotiline, nefazodone, trazodone, vilazodone, vortioxetine", "Do not take Parnate if you take other MAOIs, SSRIs or SNRIs, tricyclic antidepressants, or other antidepressants such as amoxapine, bupropion, maprotiline, nefazodone, trazodone, vilazodone or vortioxetine."),
  claim("tranylcypromine", "contraindication", GUIDE, "amphetamines and methylphenidates medicines that can raise blood pressure (sympathomimetic medicine), such as pseudoephedrine, phenylephrine and ephedrine. These medicines are in some cold, hay fever or weight-loss medicines. sympathomimetic herbal medicines or dietary supplements antihistamines (allergy medicines) triptans buspirone carbamazepine dextromethorphan dopamine hydroxytryptophan and tryptophan levodopa and methyldopa meperidine rasagline resperine s-adenosyl-L-methionine (SAM-e) tapentadol tetrabenazine", "The guide also says not to take Parnate with: amphetamines and methylphenidates; medicines that can raise blood pressure, such as pseudoephedrine, phenylephrine and ephedrine (found in some cold, hay fever or weight-loss medicines); herbal medicines or supplements of that kind; antihistamines (allergy medicines); triptans; buspirone; carbamazepine; dextromethorphan; dopamine; hydroxytryptophan and tryptophan; levodopa and methyldopa; meperidine; rasagline; resperine; SAM-e; tapentadol; tetrabenazine. Ask your healthcare provider or pharmacist if you are not sure whether you take any of these."),
  claim("tranylcypromine", "contraindication", GUIDE, "have a tumor on your adrenal gland called a pheochromocytoma or a type of tumor called a paraganglioma.", "Do not take Parnate if you have a tumour on your adrenal gland called a pheochromocytoma, or a type of tumour called a paraganglioma."),
  claim("tranylcypromine", "precaution", GUIDE, "Before taking PARNATE, tell your healthcare provider about all your medical conditions, including if you: have high or low blood pressure have heart problems have cerebrovascular problems or have had a stroke have headaches have, or have a family history of, bipolar disorder, mania, or hypomania plan to have surgery have liver or thyroid problems have or have had seizures or convulsions have diabetes", "Before taking Parnate, tell your healthcare provider if you have: high or low blood pressure; heart problems; cerebrovascular problems or have had a stroke; headaches; bipolar disorder, mania or hypomania (or a family history of them); liver or thyroid problems; seizures (now or in the past); or diabetes. Also tell them if you plan to have surgery."),
  claim("tranylcypromine", "precaution", GUIDE, "are pregnant or plan to become pregnant. PARNATE may harm your unborn baby. are breastfeeding or plan to breastfeed. PARNATE passes into your breast milk. Do not breastfeed during treatment with PARNATE.", "Tell your healthcare provider if you are pregnant or plan to become pregnant: Parnate may harm your unborn baby. It passes into breast milk, so do not breastfeed during treatment."),
  claim("tranylcypromine", "interactions", GUIDE, "Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins, and herbal supplements. PARNATE and some other medicines may affect each other causing serious side effects.", "Tell your healthcare provider about every medicine you take, including prescription and over-the-counter medicines, vitamins and herbal supplements. Parnate and some other medicines may affect each other and cause serious side effects."),
  claim("tranylcypromine", "interactions", GUIDE, "Some medicines need to be stopped for a period of time before you can start taking PARNATE and for a period of time after you stop taking PARNATE.", "Some medicines need to be stopped for a period of time before you start Parnate, and for a period of time after you stop it. The guide does not give the periods in this section."),
  claim("tranylcypromine", "how-to-take", GUIDE, "Take PARNATE exactly as your healthcare provider tells you to take it. Your healthcare provider may need to change your dose of PARNATE until it is the right dose for you.", "Take Parnate exactly as your healthcare provider tells you. Your provider may need to change your dose until it is right for you."),
  claim("tranylcypromine", "monitoring", GUIDE, "Tell your healthcare provider if you think your condition has gotten worse during treatment with PARNATE.", "Tell your healthcare provider if you think your condition has got worse during treatment."),
  claim("tranylcypromine", "precaution", GUIDE, "Do not drive, operate heavy machinery, or do other dangerous activities until you know how PARNATE affects you.", "Do not drive, use heavy machinery or do other dangerous activities until you know how Parnate affects you."),
  claim("tranylcypromine", "side-effects", GUIDE, "Serotonin Syndrome. A potentially life-threatening problem called serotonin syndrome can happen when you take PARNATE with certain other medicines.", "A potentially life-threatening problem called serotonin syndrome can happen when you take Parnate with certain other medicines."),
  claim("tranylcypromine", "side-effects", GUIDE, "agitation, confusion | seeing or hearing things that are not real (hallucinations) | coma | rapid pulse | changes in blood pressure | dizziness | sweating | flushing | high body temperature (hyperthermia) | fever | seizures", "Symptoms of serotonin syndrome may include agitation, confusion, seeing or hearing things that are not real (hallucinations), coma, rapid pulse, changes in blood pressure, dizziness, sweating, flushing, high body temperature (hyperthermia), fever and seizures. The guide's list continues beyond what is shown here.", { limitations: ["US Medication Guide only: Indian approval, strengths and warnings may differ.", "Only the first part of the symptom list is stored here.", "General information, not advice for any one person."] }),

  // doxepin capsules
  claim("doxepin", "precaution", GUIDE, "It is not known if doxepin hydrochloride capsules are safe and effective for use in children.", "It is not known whether doxepin capsules are safe and effective for children."),
  claim("doxepin", "contraindication", GUIDE, "Do not take doxepin hydrochloride capsules if you: are allergic to doxepin, or any of the ingredients in doxepin hydrochloride capsules. See the end of this Medication Guide for a complete list of ingredients in doxepin hydrochloride capsules have glaucoma have or have had trouble urinating are taking, or have stopped taking within the last 14 days, a medicine called a Monoamine Oxidase Inhibitor (MAOI), including the antibiotic linezolid or intravenous methylene blue", "Do not take doxepin capsules if you: are allergic to doxepin or any ingredient in them; have glaucoma; have or have had trouble urinating; or are taking (or stopped within the last 14 days) a medicine called a monoamine oxidase inhibitor (MAOI), including the antibiotic linezolid or intravenous methylene blue."),
  claim("doxepin", "interactions", GUIDE, "Do not start taking an MAOI for at least 14 days after you stop treatment with doxepin hydrochloride capsules", "Do not start an MAOI for at least 14 days after you stop doxepin capsules."),
  claim("doxepin", "precaution", GUIDE, "have, or have a family history of bipolar disorder, mania, or hypomania have or had depression, suicidal thoughts or behavior have kidney or liver problems have or had seizures or convulsions", "Before taking doxepin capsules, tell your healthcare provider if you: have (or have a family history of) bipolar disorder, mania or hypomania; have or had depression, suicidal thoughts or behaviour; have kidney or liver problems; or have or had seizures or convulsions."),
  claim("doxepin", "precaution", GUIDE, "Taking doxepin hydrochloride capsules during your third trimester of pregnancy may harm your unborn baby. Tell your health care provider if you become pregnant or think you may be pregnant during treatment with doxepin hydrochloride capsules.", "Taking doxepin capsules in the third trimester of pregnancy may harm your unborn baby. Tell your healthcare provider if you become pregnant or think you may be pregnant during treatment."),
  claim("doxepin", "precaution", GUIDE, "Doxepin hydrochloride can pass into your breast milk and harm your baby. Do not breastfeed during treatment with doxepin hydrochloride capsules.", "Doxepin can pass into breast milk and harm your baby. Do not breastfeed during treatment."),
  claim("doxepin", "interactions", GUIDE, "Especially tell your health care provider if you take: medicines used to treat mood, anxiety, psychotic, or thought disorders, including selective serotonin reuptake inhibitors (SSRIs) and serotonin norepinephrine reuptake inhibitors (SNRIs) medicines to treat migraine headaches known as triptans other tricyclic antidepressants tetracyclic antidepressants opioids lithium tryptophan buspirone St. John’s Wort carbamazepine cimetidine tolazamide medicines that can cause drowsiness", "Especially tell your healthcare provider if you take: medicines for mood, anxiety, psychotic or thought disorders (including SSRIs and SNRIs); triptans (for migraine); other tricyclic antidepressants; tetracyclic antidepressants; opioids; lithium; tryptophan; buspirone; St. John’s Wort; carbamazepine; cimetidine; tolazamide; or medicines that can cause drowsiness."),
  claim("doxepin", "interactions", GUIDE, "Do not start or stop any other medicines during treatment with doxepin hydrochloride capsules without first talking to your healthcare provider.", "Do not start or stop any other medicine during treatment without first talking to your healthcare provider."),
  claim("doxepin", "how-to-take", GUIDE, "Take doxepin hydrochloride capsules exactly as your health care provider tells you to take them. Do not change your dose or stop taking doxepin hydrochloride capsules without first talking to your healthcare provider. Your health care provider may need to change the dose of doxepin hydrochloride capsules until it is the right dose for you.", "Take doxepin capsules exactly as your healthcare provider tells you. Do not change your dose or stop taking them without first talking to your provider. Your provider may need to change the dose until it is right for you."),
  claim("doxepin", "how-to-take", GUIDE, "If you miss a dose of doxepin hydrochloride capsules, take the missed dose as soon as you remember. If it is almost time for the next dose, do not take the missed dose and take your next dose at the regular time. Do not take two doses of doxepin hydrochloride capsules at the same time.", "If you miss a dose, take it as soon as you remember. If it is almost time for the next dose, skip the missed dose and take your next dose at the regular time. Do not take two doses at the same time."),
  claim("doxepin", "urgent-help", GUIDE, "If you take too many doxepin hydrochloride capsules, call your healthcare provider or Poison Help Line at 1-800-222-1222 or go to the nearest hospital emergency room right away.", "If you take too many capsules, call your healthcare provider or go to the nearest hospital emergency room right away.", { limitations: ["US Medication Guide only: Indian approval, strengths and warnings may differ.", "The guide names a US poison helpline number, which does not apply in India, so it is left out of the plain wording.", "General information, not advice for any one person."] }),
  claim("doxepin", "precaution", GUIDE, "Do not drive a car or another motor vehicle, operate heavy machinery, or do dangerous activities while taking doxepin hydrochloride capsules. Doxepin hydrochloride capsules can cause sleepiness or may affect your ability to make decisions, think clearly, or react quickly.", "Do not drive, use heavy machinery or do dangerous activities while taking doxepin capsules. They can cause sleepiness or affect your ability to make decisions, think clearly or react quickly."),
  claim("doxepin", "precaution", GUIDE, "Do not drink alcohol during treatment with doxepin hydrochloride capsules. Drinking alcohol during treatment with doxepin hydrochloride capsules can increase your risk of having serious side effects.", "Do not drink alcohol during treatment. Alcohol can increase your risk of serious side effects."),
  claim("doxepin", "side-effects", GUIDE, "Serotonin syndrome. Taking doxepin hydrochloride capsules can cause a potentially life-threatening problem called serotonin syndrome. The risk of developing serotonin syndrome is increased when doxepin hydrochloride capsules are taken with certain other medicines.", "Doxepin capsules can cause a potentially life-threatening problem called serotonin syndrome. The risk is higher when they are taken with certain other medicines."),
  claim("doxepin", "urgent-help", GUIDE, "Stop taking doxepin hydrochloride capsules and call your healthcare provider or go to the nearest hospital emergency room right away if you have any of the following signs and symptoms of serotonin syndrome:", "Stop taking doxepin capsules and call your healthcare provider, or go to the nearest hospital emergency room right away, if you have signs of serotonin syndrome. The guide lists them as agitation, confusion, fast heartbeat, dizziness, flushing, shaking (tremors), stiff muscles or muscle twitching, seizures, hallucinations, coma, changes in blood pressure, sweating, high body temperature, loss of coordination, and nausea, vomiting or diarrhea."),
  claim("doxepin", "side-effects", GUIDE, "Eye problems (angle-closure glaucoma). Doxepin hydrochloride capsules may cause a type of eye problem called angle-closure glaucoma in people with certain eye problems.", "Doxepin capsules may cause a type of eye problem called angle-closure glaucoma in people who already have certain eye problems."),

  // selegiline (Emsam skin patch, a US label for depression: not a description of selegiline tablets)
  claim("selegiline", "used-for", GUIDE, "EMSAM is a prescription medicine used to treat a certain type of depression called Major Depressive Disorder (MDD).", "Emsam, the skin patch described here, is a prescription medicine used to treat a type of depression called major depressive disorder.", { limitations: ["US label for the EMSAM skin patch. Selegiline is also made in other forms, such as tablets or capsules, for other uses; this source does not describe them.", "US Medication Guide only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."] }),
  claim("selegiline", "contraindication", GUIDE, "Do not use EMSAM if you: take certain medicines including: selective serotonin reuptake inhibitors (SSRIs) such as fluoxetine, sertraline, or paroxetine serotonin and norepinephrine reuptake inhibitors (SNRI) such as venlafaxine or duloxetine clomipramine or imipramine (tricyclic antidepressants) meperidine, tramadol, methadone, pentazocine, propoxyphene (opioid medicines) dextromethorphan carbamazepine are less than 12 years of age have a tumor on your adrenal gland called a pheochromocytoma", "Do not use Emsam if you take: SSRIs such as fluoxetine, sertraline or paroxetine; SNRIs such as venlafaxine or duloxetine; clomipramine or imipramine (tricyclic antidepressants); the opioids meperidine, tramadol, methadone, pentazocine or propoxyphene; dextromethorphan; or carbamazepine. Also do not use it if you are less than 12 years of age or have a tumour on your adrenal gland called a pheochromocytoma.", { limitations: ["US label for the EMSAM skin patch only: it does not describe selegiline tablets or capsules.", "US Medication Guide only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."] }),
  claim("selegiline", "precaution", GUIDE, "Before you use EMSAM, tell your healthcare provider about all of your medical conditions, including if you: have high blood pressure have mania or bipolar disorder (manic depression) have or had seizures or convulsions drink alcohol have any other medical conditions are pregnant or plan to become pregnant. EMSAM may harm your unborn baby. are breastfeeding or plan to breastfeed. It is not known if EMSAM passes into your breast milk. Do not breastfeed during treatment with EMSAM and for 5 days after the final dose.", "Before using Emsam, tell your healthcare provider if you have high blood pressure, mania or bipolar disorder, have or had seizures, drink alcohol, or have any other medical condition. Tell them if you are pregnant or plan to be: Emsam may harm your unborn baby. Do not breastfeed during treatment and for 5 days after the final dose.", { limitations: ["US label for the EMSAM skin patch only: it does not describe selegiline tablets or capsules.", "US Medication Guide only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."] }),
  claim("selegiline", "interactions", GUIDE, "Especially tell your healthcare provider if you take: other medicines to treat depression (antidepressants) including other MAOI medicines decongestant medicines to treat cold or cough symptoms over-the-counter diet pills or herbal weight-loss products any herbal or dietary supplement that contains tyramine medicines called stimulants or uppers (amphetamines) buspirone, an anxiety medicine Some of these medicines need to be stopped for up to 5 weeks before you can start using EMSAM and for 2 weeks after you stop using EMSAM.", "Especially tell your healthcare provider if you take other antidepressants (including other MAOIs), decongestants for cold or cough, over-the-counter diet pills or herbal weight-loss products, herbal or dietary supplements that contain tyramine, stimulants (amphetamines) or buspirone. Some of these need to be stopped for up to 5 weeks before you start Emsam and for 2 weeks after you stop it.", { limitations: ["US label for the EMSAM skin patch only: it does not describe selegiline tablets or capsules.", "US Medication Guide only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."] }),
  ...PI_CLAIMS(),
  ...batch2(piClaim),
  ...batch3(piClaim),
  claim("selegiline", "how-to-take", GUIDE, "Use EMSAM exactly as your healthcare provider tells you to use it. Use only 1 patch at a time. Apply your patch right after you open the sealed pouch. Change your patch 1 time each day at the same time each day. Choose a time of day that works best for you. Your healthcare provider may need to change your dose of EMSAM until it is the right dose for you.", "Use Emsam exactly as your healthcare provider tells you. Use only 1 patch at a time. Apply the patch right after you open the sealed pouch. Change the patch once a day, at the same time each day. Your provider may need to change your dose until it is right for you.", { limitations: ["These directions are for the EMSAM skin patch only. They do not apply to selegiline tablets or capsules.", "US Medication Guide only: Indian approval, strengths and warnings may differ.", "General information, not advice for any one person."] }),
];
