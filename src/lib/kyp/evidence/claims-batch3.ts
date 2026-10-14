import type { Make } from "./claims-batch2";

/**
 * Third batch of source-backed statements, for medicines found late: each rests on one short exact passage of
 * the stored US label and restates it in plain language. No dose, number, warning or condition is added.
 * US labels only. None is an Indian label. None has been reviewed.
 */
const IND = "34067-9";
const DOSE = "34068-7";
const CONTRA = "34070-3";
const PHARM = "34090-1";
const ADVERSE = "34084-4";
const INTER = "34073-7";
const PREC = "42232-9";

const MEDICAL_FOOD = [
  "US label for a product sold in the United States as a medical food dispensed by prescription, not as a drug. The label is from 2015.",
  "US label only: Indian status, strengths and warnings may differ. This is not an Indian label.",
  "General information, not advice for any one person.",
];
const NOT_A_FULL_CHECK = [...MEDICAL_FOOD, "The label lists some medicines that can lower folate. It is not a complete interaction check, and a medicine missing from the list is not shown to be free of interactions."];

export function batch3(c: Make) {
  return [
    /* ---- L-methylfolate calcium tablets (a medical food) ---- */
    c("l-methylfolate", "what-it-is", PHARM, "L-METHYLFOLATE CALCIUM Tablets is a medical food, which consists of a proprietary biologically active folate, derived from food sources.", "The label calls this product a medical food. It is a biologically active form of folate, made from food sources.", MEDICAL_FOOD),
    c("l-methylfolate", "used-for", IND, "L-METHYLFOLATE CALCIUM Tablets is indicated for the distinct nutritional requirements of individuals who have suboptimal L-METHYLFOLATE CALCIUM Tablets levels in the cerebrospinal fluid, plasma, and/or red blood cells and have major depressive disorder (MDD) with particular emphasis as adjunctive support for individuals who are on an antidepressant", "The label says it is meant for the nutritional needs of people who have major depressive disorder (MDD) and low levels of this folate in the fluid around the brain and spinal cord (cerebrospinal fluid), in blood plasma or in red blood cells. It stresses use as extra support for people who also take an antidepressant.", MEDICAL_FOOD),
    c("l-methylfolate", "used-for", IND, "L-METHYLFOLATE CALCIUM Tablets is indicated for the distinct nutritional requirements of individuals who have or are at risk for hyperhomocysteinemia and have schizophrenia who present with negative symptoms and/or cognitive impairment, with particular emphasis as an adjunctive support for individuals who have stabilized on antipsychotics", "The label also says it is meant for the nutritional needs of people with schizophrenia who have, or are at risk of, hyperhomocysteinemia (a high level of homocysteine in the blood) and who have negative symptoms and/or problems with thinking. It stresses use as extra support for people whose condition has stabilised on antipsychotics.", MEDICAL_FOOD),
    c("l-methylfolate", "contraindication", CONTRA, "L-METHYLFOLATE CALCIUM Tablets is contraindicated in patients with known hypersensitivity to any of the components contained in this product.", "Do not take it if you are known to be allergic (hypersensitive) to any of the ingredients in it.", MEDICAL_FOOD),
    c("l-methylfolate", "how-to-take", DOSE, "The usual adult dose is 7.5mg to 15mg given daily with or without food or as directed under medical supervision.", "The label gives a usual adult dose of 7.5 mg to 15 mg a day, with or without food, or as directed under medical supervision. Your own dose is set by your prescriber.", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "L-METHYLFOLATE CALCIUM Tablets is a medical food1 for use under medical supervision and direction.", "It is meant to be used under medical supervision and direction.", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "Folic acid, when administered in daily doses above 0.1mg, may obscure the detection of B12 deficiency", "Folic acid at daily doses above 0.1 mg can hide the detection of vitamin B12 deficiency.", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "L-METHYLFOLATE CALCIUM Tablets may be less likely than folic acid to mask vitamin B12 deficiency", "The label says this product may be less likely than folic acid to hide a vitamin B12 deficiency.", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "Folate therapy alone is inadequate for the treatment of a B12 deficiency.", "Folate alone is not enough to treat a vitamin B12 deficiency.", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "Caution is recommended in patients with a history of bipolar illness. Patients with depressive symptoms should be adequately screened to determine if they are at risk for bipolar disorder since mood elevation in this population is possible.", "The label recommends caution if you have a history of bipolar illness. People with depressive symptoms should be checked for risk of bipolar disorder first, because their mood may rise too far (mood elevation).", MEDICAL_FOOD),
    c("l-methylfolate", "precaution", PREC, "L-METHYLFOLATE CALCIUM Tablets is not an antidepressant", "The label says it is not an antidepressant.", MEDICAL_FOOD),
    c("l-methylfolate", "interactions", INTER, "Before using this product, tell your doctor or pharmacist of all the products you use. Keep a list of all your medications with you, and share the list with your doctor and pharmacist.", "Before using it, tell your doctor or pharmacist about all the products you use. Keep a list of all your medicines with you and share it with them.", NOT_A_FULL_CHECK),
    c("l-methylfolate", "interactions", INTER, "The AED class including, but not limited to, phenytoin, carbamazepine, primidone, valproic acid, phenobarbital and lamotrigine have been shown to impair folate absorption and increase the metabolism of circulating folate.", "Medicines for seizures (antiepileptic drugs), including phenytoin, carbamazepine, primidone, valproic acid, phenobarbital and lamotrigine, have been shown to reduce how well the body absorbs folate and to increase how fast it uses up the folate in the blood.", NOT_A_FULL_CHECK),
    c("l-methylfolate", "interactions", INTER, "Fluoxetine exerts a noncompetitive inhibition of the 5-methyltetrahydrofolate active transport in the intestine.", "Fluoxetine has been found to block, in a noncompetitive way, the active transport of 5-methyltetrahydrofolate (the active form of folate) in the intestine, which is how the gut takes it in.", NOT_A_FULL_CHECK),
    c("l-methylfolate", "interactions", INTER, "DHFIs block the conversion of folic acid to its active forms, and lower plasma and red blood cell folate levels. DHFIs include aminopterin, methotrexate, pyrimethamine, triamterene, and trimethoprim.", "Dihydrofolate reductase inhibitors (DHFIs) block the conversion of folic acid to its active forms and lower folate levels in plasma and red blood cells. They include aminopterin, methotrexate, pyrimethamine, triamterene and trimethoprim.", NOT_A_FULL_CHECK),
    c("l-methylfolate", "interactions", INTER, "No decrease in effectiveness of drugs has been reported with the use of L-METHYLFOLATE CALCIUM Tablets.", "The label says no decrease in the effectiveness of other medicines has been reported with this product. That is a statement about reports, not a promise that none can happen.", NOT_A_FULL_CHECK),
    c("l-methylfolate", "side-effects", ADVERSE, "Allergic reactions have been reported following the use of oral L-METHYLFOLATE CALCIUM Tablets.", "Allergic reactions have been reported after taking it. The label gives no other side effects.", MEDICAL_FOOD),
  ];
}
