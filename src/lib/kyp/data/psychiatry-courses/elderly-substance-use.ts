import type { PsychiatryCourse } from "./types";

/**
 * SUBSTANCE USE IN THE ELDERLY — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age, with the
 * general substance-use science cross-referenced to the B-group
 * courses).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/elderly-substance-use.md — untouched
 * foundation), re-researched against the lineages the note
 * itself cites (the O'Connell-Lawlor old-age chapter synthesis,
 * Atkinson's risk-factor framework, the Ewing CAGE lineage,
 * the Moore/NIAAA one-drink guidance, the lorazepam-safety
 * withdrawal review, the emergency-department thiamine review,
 * the Garbutt relapse-agent lineage, the Oslin late-life
 * treatment-outcome work, the Irish community benzodiazepine
 * study) with per-claim provenance.
 *
 * Drug routes: none — the elderly-specific pharmacotherapy tiers
 * (naltrexone and acamprosate relapse prevention, the
 * benzodiazepine withdrawal ladder with lorazepam and
 * chlordiazepoxide, the CIWA-protocol agents, thiamine) have no
 * KYP drug lessons; each is taught here in full and recorded in
 * contentGaps, the route never invented.
 */
export const elderlySubstanceUseCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "elderly-substance-use",
  title: "Substance Use in the Elderly — The Silent Epidemic",
  shortName: "Elderly Substance Use",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Substance Use in the Elderly — The Silent Epidemic"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Alcohol and medication problems do not disappear with age; they go quiet — the same dose does more harm at eighty than at forty, the presentations hide behind falls and confusion, everyone asks the questions less, and the treatment works as well as or better than in the young.",

  summary:
    "This is the silent epidemic, and the silence is manufactured four times over — by the patient who will not volunteer, the clinician who will not ask, the family that cannot perceive, and the society whose ageism dresses the drinking up as 'one of his few pleasures'. The territory divides three ways: alcohol use disorders (the best-studied tier), medication use disorders (the most geriatric-specific — older people take roughly three times the medications of the general population, and benzodiazepines lead the risk), and illicit substances and nicotine (smaller today, growing tomorrow). Two governing problems organise everything. The THRESHOLD problem: pharmacokinetic ageing — the rising fat-to-lean ratio shrinking alcohol's volume of distribution, the falling metabolic efficiency and physiological reserve — plus comorbidity and interacting prescriptions means elderly people develop problems at intakes that would be unremarkable at forty; population 'safe limits' (21/14 units weekly) are inappropriately high for older people, and the NIAAA ceiling is one drink per day. The diagnostic criteria themselves arrive wearing disguises: tolerance and withdrawal are masked by medical conditions, craving is less clear-cut, and the social consequences largely evaporate — no job to lose, no licence, a family reluctant to label grandpa. The INVISIBILITY problem completes the trap: the geriatric presentation is atypical and masked — falls, confusion, self-neglect, 'dementia progressing', depression, insomnia — rather than drunk-and-disorderly, so the disorder presents through its complications and the diagnosis arrives last. Against both problems stands the chapter's best-kept secret: older people do at least as well in treatment as younger people, and the late-onset group (one in three, triggered by bereavement, isolation, retirement or new illness, running on neuroticism and depression rather than the antisocial pattern of the early-onset) often has the best prognosis of all when the trigger is addressed. The prevalence climbs the setting ladder as the questions thin out — community 2–4%, emergency departments 14%, nursing homes 18%, psychiatric inpatients 23% — and the medication arithmetic is its own epidemic: older people are about 13% of the population using more than 30% of prescriptions and 35% of over-the-counter drugs; an Irish community study found 17% of older people prescribed benzodiazepines (women twice men, 52% on long-acting agents, 18% on a second psychotropic). The management is fully learnable: ask always (CAGE the minimum screen, the biophysical markers read with their geriatric false-positive honesty), withdraw with lorazepam (the safest benzodiazepine — ageing and liver disease barely affect its metabolism) dosed by CIWA-Ar with thiamine on board, prevent relapse with naltrexone or acamprosate (disulfiram best avoided), prefer same-age treatment settings, and run the medication-use disorder work through the one instrument that exposes everything at once — the bring-all-medicines-in-their-containers review, which in India is the tablet-bag review and belongs in every cognitive and falls complaint in the geriatric OPD. The Indian tier sharpens every point: families shield ('he only drinks at functions'), doctors skip the question ('what use at this age'), ageist benevolence calls the drinking understandable, decades of easily renewed hypnotic prescriptions make benzodiazepine dependence one of India's commonest geriatric addiction problems — and the family that conceals the drinking can also deliver the treatment.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain the silent epidemic framing: why lower doses cause the harm, why presentations hide behind falls and confusion, and why every layer — patient, clinician, family, society — asks the questions less.",
    "Define the threshold problem (pharmacokinetic ageing, comorbidity, interactions, criteria in disguise) and the invisibility problem, and justify the one-drink-per-day geriatric ceiling against population limits.",
    "Distinguish early-onset from late-onset alcohol use disorder (one-third begin in later life) by trigger, personality and prognosis.",
    "Recite the setting ladder (community 2–4% to psychiatric inpatient 23%) and the medication-use-disorder arithmetic (13% of the population, >30% of prescriptions, 35% of OTC).",
    "Screen with the right package: CAGE as the minimum, AUDIT named, biophysical markers read with their geriatric false-positive problem.",
    "Manage withdrawal in the elderly — lorazepam logic, CIWA-Ar-guided dosing, thiamine with the oral-equals-parenteral evidence — and choose relapse prevention (naltrexone and acamprosate suitable; disulfiram best avoided).",
    "Diagnose medication use disorders with the container audit (the tablet-bag review) and run deliberate, one-drug-at-a-time tapers.",
    "Apply the Indian realities: the benzodiazepine inheritance, the family as treatment ally, falls-plus-confusion screening before the CT, and the primary-care-first delivery of a young-adult-oriented de-addiction network.",
  ],
  quickFacts: [
    { label: "The two problems", value: "Threshold + invisibility", detail: "Pharmacokinetic ageing, comorbidity and interactions put the harm threshold below population 'safe limits' (21/14 units — inappropriately high here; NIAAA says one drink per day); and patient, clinician, family and society jointly produce the not-asking" },
    { label: "The one-third rule", value: "Late-onset is common", detail: "One-third of elderly alcohol use disorders begin for the first time in later life — bereavement, isolation, retirement, new illness the triggers; neuroticism and depression the personality, not the antisocial pattern of the early-onset group" },
    { label: "The setting ladder", value: "2–4% → 23%", detail: "Community 2–4% (men 4–6 times women; looser criteria lift men to 16%), emergency departments 14%, nursing homes 18%, psychiatric inpatients 23% — the questions thinning as the prevalence climbs" },
    { label: "The geriatric ceiling", value: "One drink per day", detail: "The higher fat-to-lean ratio dilutes alcohol's volume of distribution and metabolic efficiency and reserve fall in parallel — the same grams produce a higher blood concentration at eighty than at forty; the NIAAA cap is pharmacokinetics, not puritanism" },
    { label: "The core medication problem", value: "Benzodiazepines", detail: "The most prescribed psychotropes in old age, with long-acting agents overprescribed and a female excess — the Irish community study: 17% of older people prescribed them, 52% on long-acting agents, 18% on a second psychotropic" },
    { label: "The withdrawal trio", value: "Lorazepam, CIWA-Ar, thiamine", detail: "Lorazepam the safest benzodiazepine (age and liver disease barely affect its metabolism; IM absorption predictable); dosing guided by CIWA-Ar (mild <10, moderate 10–20, severe >20); thiamine with oral administration as effective as parenteral in the emergency setting" },
    { label: "The relapse rule", value: "Naltrexone and acamprosate yes; disulfiram no", detail: "Of the FDA-approved agents, disulfiram is best avoided in older people (limited efficacy, worse side-effect profile) — the two better-tolerated agents carry the tier" },
    { label: "The best-kept secret", value: "At least as well as the young", detail: "Older people do at least as well in treatment as younger people, modulated by support systems and age-tailored services; they respond better in same-age settings than mixed-age ones" },
  ],
  knowledgeGraph: [
    { label: "Alcohol Use Disorders — The Disease of More", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The general AUD science this course stands on: the dependence criteria, the full withdrawal ladder, the relapse-prevention pharmacology — with the geriatric adjustments taught here" },
    { label: "Benzodiazepine Misuse — The Borrowed Calm", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The general benzodiazepine dependence account — tolerance, the taper discipline — whose geriatric chapter (the most prescribed psychotropes, the long-acting excess, the falls) is this course" },
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The reward-circuit science underneath every late-onset use: the borrowed calm and the grief-drinking still travel the mesolimbic road" },
    { label: "Delirium in the Elderly — The Quiet Emergency", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The masked presentation's other half — withdrawal and sedative toxicity presenting as the fluctuating confusion that is never 'just old age'" },
    { label: "Mild Cognitive Impairment — The Crossroads", type: "condition", href: "/psychiatry/mci/", note: "The memory complaint where the tablet-bag review belongs before the scan — medication toxicity amplifying, sometimes causing, the cognitive picture" },
    { label: "Amnesic Syndromes — The Punched-Out Memory Hole", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The Wernicke–Korsakoff account and the B1-before-carbohydrate discipline that governs every elderly withdrawal" },
    { label: "Mood Disorders in the Elderly — The Pseudodementia Trap", type: "condition", href: "/psychiatry/elderly-mood/", note: "The resistant-depression disguise — grief-triggered late-onset drinking presenting as depression not responding to two antidepressants" },
    { label: "GABA", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The receptor the benzodiazepines borrow — and the ageing brain's heightened sensitivity to it, the tolerance architecture and the withdrawal storm's engine" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The sedatives' first address — executive function, the word-mixing after dinner, the disinhibition or apathy read as 'ageing'" },
    { label: "Cerebellar vermis", type: "brain-region", href: "#brain", note: "The balance machinery that alcohol shrinks and benzodiazepines stagger — the falls that present the whole epidemic" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two mechanism stories make the epidemic silent. The pharmacology of being old: ageing redistributes the body — the fat-to-lean ratio rises, so water-soluble alcohol and the sedatives find a smaller ocean, and the same grams produce a higher blood concentration in an eighty-year-old than a forty-year-old; hepatic blood flow and metabolic efficiency fall in parallel, clearance slows, physiological reserve thins. Layer on comorbid illness and interacting prescriptions and the geriatric liver–brain axis behaves like a person drinking more than the bottle says. The pharmacodynamic arm runs the same direction: the ageing brain's receptor sensitivity to sedatives rises, so less drug does more work — which is why the harm threshold sits below every population 'safe limit' and why the NIAAA ceiling for older people is one drink per day. The criteria in disguise: the dependence criteria were written for working-age adults, and in the elderly their measurable signature fades — craving and compulsion less clear-cut, tolerance and withdrawal masked by medical conditions, and the social consequences (financial, occupational, family, legal) largely evaporate: no job to lose, no licence to revoke, a family reluctant to label grandpa. The disorder does not weaken with age; its measuring instruments do — which is why screening must replace criteria-waiting. The under-recognition loop closes the trap: the atypical presentation (falls, confusion, self-neglect) goes to the physician, not the psychiatrist; the physician asks less because 'what use at this age'; the family colludes because the drinking looks understandable; the patient cannot recall or will not volunteer. The epidemic stays silent by structure, not by accident — and the counterweight that redeems it: the treatment-response machinery is untouched by any of this, older people doing at least as well as the young once someone finally asks.",
    steps: [
      "The body-water contract: the fat-to-lean ratio rises with age, shrinking the volume of distribution for alcohol and the sedatives — the same grams of ethanol produce a higher blood concentration in an eighty-year-old than a forty-year-old.",
      "The clearance falls in parallel: hepatic blood flow, metabolic efficiency and physiological reserve all decline — slower metabolism, longer exposure, cumulative effect at unchanged intake.",
      "The comorbidity multiplier: chronic illness and interacting prescriptions amplify every effect — the geriatric liver–brain axis behaving like a person drinking more than the bottle says.",
      "The pharmacodynamic arm: the ageing brain's receptor sensitivity to sedatives rises — less drug, more confusion, more falls; the harm threshold drops below every population 'safe limit'.",
      "The criteria in disguise: tolerance and withdrawal masked by medical conditions, craving less clear-cut, and the social consequences of dependence largely evaporate (no job, no licence, a family reluctant to label grandpa) — the measurable signature of the disorder fades while the disorder does not.",
      "The under-recognition loop: atypical presentation + criteria in disguise + four layers of not-asking (patient, clinician, family, society) — the diagnosis arriving last, after the complications.",
      "The counterweight: treatment response is preserved and perhaps better — the threshold problem is pharmacological, not moral, and it answers to adjusted pharmacology, not to therapeutic pessimism.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the sedatives' first address)", role: "Executive function, judgement and inhibition — the functions ageing taxes first and sedatives tax again; the word-mixing after dinner, the evening confusion, the disinhibition or apathy the family reads as 'just ageing'.", grade: "supported" },
    { id: "cerebellar-vermis", name: "Cerebellar vermis (the falls factory)", role: "The balance machinery that alcohol degenerates and benzodiazepines stagger — the falls and fractures that carry the whole epidemic into the emergency department.", grade: "established" },
    { id: "hippocampus", name: "Hippocampus (the memory filing room)", role: "Benzodiazepine anterograde amnesia and alcohol's effects landing on an ageing filing system — the 'dementia progressing' disguise that the container audit and the abstinence trial unmask.", grade: "established" },
    { id: "mammillary-bodies", name: "Mammillary bodies and diencephalon", role: "The thiamine-famine target behind the Wernicke–Korsakoff risk of every elderly withdrawal — the reason thiamine accompanies every lorazepam dose (full account in the Amnesic Syndromes course).", grade: "established" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The receptor the benzodiazepines borrow — the ageing brain's heightened sensitivity, the tolerance architecture of long-term prescribing, and the withdrawal storm's engine when the tablets stop.", grade: "established", drugConnection: "No KYP benzodiazepine lesson exists — the class pharmacology is taught in the Benzodiazepine Misuse course and the geriatric withdrawal logic here; the route is never invented." },
    { name: "Glutamate", symbol: "Glu", role: "The upregulated excitatory system that storms when the alcohol or the sedative is withdrawn — the confusion and seizure risk that make unsupervised abrupt stops dangerous in the elderly.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The mesolimbic reward that late-onset drinking still recruits — the grief-drinking and the boredom-drinking travel the same road as the young addict's (the general account in the Substance Use Overview course).", grade: "supported" },
    { name: "Acetylcholine", symbol: "ACh", role: "The anticholinergic burden of the over-the-counter sleep aids and the antihistamines in the polypharmacy bag — the confusion amplifier stacked on top of everything else.", grade: "supported" },
  ],
  pathways: [
    {
      id: "threshold-pathway",
      name: "The threshold pathway (pharmacokinetics to harm at 'safe' intake)",
      steps: [
        { label: "The body redistributes", detail: "Rising fat-to-lean ratio shrinks the volume of distribution — the same dose, a higher blood level" },
        { label: "The clearance and reserve fall", detail: "Hepatic blood flow, metabolic efficiency, physiological reserve — slower and longer exposure" },
        { label: "Comorbidity and interactions multiply", detail: "Chronic illness plus interacting prescriptions — the geriatric liver–brain axis reading like heavier drinking than the bottle says" },
        { label: "Harm arrives below the population limit", detail: "Problems at intakes unremarkable at forty — population 'safe limits' (21/14 units weekly) set too high; the NIAAA ceiling one drink per day" },
      ],
      clinicalManifestation: "The eighty-year-old with falls and morning confusion at a drinking level her own doctor calls 'moderate' — the threshold problem in one patient.",
      grade: "established",
    },
    {
      id: "invisibility-pathway",
      name: "The invisibility pathway (masked presentation to missed diagnosis)",
      steps: [
        { label: "The presentation is atypical", detail: "Falls, confusion, self-neglect, 'dementia progressing', depression, insomnia — never drunk-and-disorderly" },
        { label: "The criteria arrive in disguise", detail: "Tolerance and withdrawal masked by medical conditions; the social consequences evaporate — no job, no licence, family collusion" },
        { label: "Every layer asks less", detail: "The patient cannot recall or will not volunteer; the clinician skips the question; the family shields; ageism calls the drinking 'understandable'" },
        { label: "The complications get treated, the cause does not", detail: "The fracture plastered, the confusion labelled, the antidepressant changed — the setting ladder climbing to 23% where the questions finally get asked" },
      ],
      clinicalManifestation: "The silent epidemic's engine room: the disorder presenting through its complications while four layers of not-asking keep the diagnosis off the list.",
      grade: "supported",
    },
    {
      id: "late-onset-pathway",
      name: "The late-onset pathway (loss to disorder to best-prognosis group)",
      steps: [
        { label: "The trigger lands", detail: "Bereavement, social isolation, adjustment to retirement, new physical or psychiatric illness — the classic geriatric precipitants" },
        { label: "The self-medication begins", detail: "Drinking to sleep, to grieve, to fill the evenings — neuroticism and depression the soil, not the antisocial pattern of the early-onset group" },
        { label: "The one-third rule", detail: "One-third of elderly alcohol use disorders begin in later life — a sizeable group with a shorter history and a treatable trigger" },
        { label: "The trigger addressed", detail: "Grief-focused and alcohol-focused work together, the isolation treated as vigorously as the drinking — the late-onset group often with the best prognosis of all" },
      ],
      clinicalManifestation: "The widow whose 'resistant depression' is a half-bottle of whisky nightly since the funeral — the classic vignette, and the treatment-responsive one.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "trigger-window", time: "The trigger window", title: "Bereavement, retirement, illness", description: "The late-onset route opens — loss, isolation and new illness initiating drinking (or renewed hypnotic use) in someone with no history of disorder; the secondary-prevention window that most clinicians never open.", phase: "onset" },
    { id: "quiet-years", time: "The quiet years", title: "Same dose, rising blood level", description: "Intake stable while the body ages underneath it — the fat-to-lean shift, the slowing metabolism, the accumulating prescriptions: the harm threshold falling toward the unchanged habit.", phase: "onset" },
    { id: "masked-presentation", time: "The presenting months", title: "Falls, confusion, 'dementia progressing'", description: "The atypical geriatric face: night falls, evening word-mixing, self-neglect, a depression not responding to two antidepressants — the somatic front door that reaches the physician, not the addiction service.", phase: "peak" },
    { id: "withdrawal-window", time: "Days 1–10 of stopping", title: "The withdrawal window", description: "Lorazepam in low measured doses, CIWA-Ar guiding every step (mild <10, moderate 10–20, severe >20), thiamine from hour one — oversedation, confusion and falls the geriatric risks that demand objective dosing rather than fixed schedules.", phase: "duration" },
    { id: "recovery-arc", time: "Weeks to 3 months", title: "The response that surprises everyone", description: "Abstinence holding, the antidepressant finally working, the falls gone, the taper of the old hypnotic running separately at 10% per fortnight — older people doing at least as well as the young, in same-age settings, with the family as ally.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Alcohol use disorders: community prevalence 2–4% of older people (men 4–6 times women); looser 'excessive consumption' criteria raise men to 16%. Clinical settings climb the ladder — emergency departments 14%, nursing homes 18%, psychiatric inpatients 23%. True consumption probably declines with age (premature death of heavy drinkers, reduced reserve, cohort and network effects), but the ageing of populations makes the absolute numbers grow — the silent epidemic warning. Medication use disorders: older people are about 13% of the US population using more than 30% of prescription and 35% of over-the-counter drugs — roughly three times the general rate; the Irish community study found 17% of older people prescribed benzodiazepines (women twice men, 52% of users on long-acting agents, 18% on a second psychotropic).",
    indianPrevalence: "The epidemiology is thinner and the picture is distinct: Indian elderly populations carry rising alcohol exposure documented in national surveys as a male-dominated pattern persisting into older age, an enormous iatrogenic benzodiazepine exposure (sleeping tablets are among the most self-purchased and over-prescribed drugs in Indian pharmacies), and a near-total absence of elderly-specific services — the silent epidemic concept applies with full force.",
    lifetimeRisk: "Medication use disorder risk is the highest of any age — the polypharmacy arithmetic (three times the medication exposure of the general population) doing the work that peer pressure does in the young.",
    genderRatio: "Alcohol use disorders: men 4–6 times women in the community. Medication use disorders: a female excess — benzodiazepines prescribed to women twice as often; the gender patterns of Atkinson's exposure-increasing tier (men alcohol and illicit drugs, women sedative-hypnotics and anxiolytics).",
    ageOfOnset: "One-third of elderly alcohol use disorders are late-onset — the first problems arriving in later life, triggered by bereavement, isolation, retirement or new illness rather than a lifetime of drinking.",
    indianNotes: "The absence of elderly-specific de-addiction services and the young-adult orientation of the existing network mean the geriatric OPD and the family physician are the entire detection system — the ask-always discipline and the tablet-bag review are not optional refinements but the only instruments that exist.",
  },
  etiology: [
    { category: "biological", factor: "The genetic contribution", details: "A genetic contribution to both early- and late-onset alcohol use disorders, overlapping with risk for antisocial personality, drug problems, anxiety and mood disorders; illness functioning as both cause and consequence of the drinking." },
    { category: "biological", factor: "Atkinson's three-tier risk table", details: "Predisposing (family history, previous abuse, cohort consumption patterns, personality traits); exposure-increasing (gender patterns — men alcohol and illicit drugs, women sedative-hypnotics and anxiolytics; chronic illness with pain, insomnia or anxiety; long-term prescribing; caregiver overuse of PRN medication in institutions; life stress, loss, isolation; negative affects; family collusion; discretionary time and money); effect-amplifying (age-associated drug sensitivity; chronic illness; alcohol–drug and drug–drug interactions)." },
    { category: "social", factor: "The social rerouting of old age", details: "Bereavement; cohort effects; culture, ethnicity and religion; divorced, single or widowed status (a two-way relationship with marital problems); retirement and social-network changes — the same transitions that open the late-onset route." },
    { category: "psychological", factor: "The two personalities", details: "Early-onset: antisocial personality, hyperactivity, impulsivity, a stronger family history and a more severe course. Late-onset: neuroticism and depression — drinking to self-medicate, or becoming depressed from the drinking." },
    { category: "psychological", factor: "The MUD-specific profile", details: "Female gender, lower education, separated or divorced status, older age, personality disorder, depression and anxiety, chronic pain, insomnia, and long-term prescribing — the risk table of the medication tier, in which the prescriber is a risk factor." },
  ],
  symptomClusters: [
    {
      category: "1. The masked alcohol face (how it actually presents)",
      symptoms: ["Falls — the presenting complaint that carries the epidemic to the emergency department", "Confusion and delirium — the withdrawal or the intoxication reading as 'dementia has worsened'", "Self-neglect — the stopped walks, the unpaid bills, the unwashed patient", "'Dementia progressing' — the cognitive decline that is alcohol or benzodiazepines in disguise", "Depression — including the resistant depression that has not met a drinking history", "Insomnia — the complaint that renews the hypnotic prescriptions for decades"],
    },
    {
      category: "2. The alcohol morbidity map (the full toll)",
      symptoms: ["Gastrointestinal: fatty liver → hepatitis → cirrhosis → malignancy; gastritis, ulcers, bleeding, varices, pancreatitis", "Malignancies: mouth, pharynx, larynx, oesophagus, liver, colorectal, pancreas", "Cardiovascular: ischaemic heart disease, hypertension, arrhythmias, heart failure, cardiomyopathy", "Haematological: macrocytosis (both direct and B12/folate-mediated), anaemia", "Musculoskeletal: falls and fractures, reduced bone density, myopathy", "Metabolic: hypoglycaemia, hyperuricaemia, lipids, unstable diabetes", "Neuropsychiatric: cognitive impairment and dementia, frontal impairment, Wernicke–Korsakoff syndrome, cerebellar degeneration, central pontine myelinosis, Marchiafava–Bignami, depression, psychosis, withdrawal — harder to treat when old, with a raised suicide risk", "Socio-demographic and other: male, divorced/widowed/single, isolation, both ends of the socio-economic spectrum; alcohol–drug interactions, aspiration pneumonia, accidents — with the J-shaped honesty that light-to-moderate drinking may protect against dementia while disorders raise dementia risk"],
    },
    {
      category: "3. The medication face (the most geriatric-specific tier)",
      symptoms: ["Benzodiazepines: oversedation, confusion, delirium, incontinence, falls — the sleeping tablet begun for grief or pain decades earlier and renewed at every counter", "Opioid analgesics: pain-driven use drifting into disorder — monitor the dose, taper deliberately", "Over-the-counter drugs and interactions: the polypharmacy multiplication — the antihistamine sleep aid nobody counts as a medicine", "In the cognitively impaired: disturbed behaviour may be the presenting feature of medication toxicity, not a symptom of the dementia"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The geriatric alcohol assessment",
      code: "Screen first — the criteria arrive in disguise",
      criteria: [
        "A thorough interview on quantity, frequency, beverage and context — taken sensitively and non-judgementally; patients disengage when threatened.",
        "Mental state examination, physical examination, and collateral history with consent — the dependence features explored if indicated.",
        "Screening: CAGE (the most widely studied and best recognised screen in older people — the recommended minimum instrument), AUDIT, and biophysical measures (MCV, liver function, carbohydrate-deficient transferrin) — the last less reliable in the elderly because comorbidity produces false positives, but useful adjunctively and for monitoring treatment.",
        "Investigations as directed by clinical status: urea and electrolytes, FBC, LFTs, B12 and folate; brain CT/MRI; GI imaging and endoscopy; ECG and beyond as indicated.",
        "The differential discipline: every late-onset atypical presentation (new falls, new confusion, new self-neglect) in an older person earns a substance screen — and, conversely, apparent 'dementia progression' may be alcohol or benzodiazepines in disguise.",
      ],
      duration: "The screen precedes the criteria — in the elderly the measurable signature of dependence fades (masked tolerance, evaporating social consequences), so waiting for the full criteria set means waiting until the complications have arrived.",
      indianNote: "One respectful question about quantity-frequency-context plus a CAGE takes under a minute — the ask-always discipline of the geriatric OPD, where nobody else in the system is asking.",
    },
    {
      system: "The medication use disorder assessment",
      code: "The container audit",
      criteria: [
        "List all medications with their indications — the written map of what is actually being taken and why.",
        "Ask the patient to bring all medications in their containers — the instruction that yields the adherence picture simultaneously (the strips count the truth).",
        "Record adverse effects against each — the confusion, the falls, the daytime sedation mapped to their pharmacological suspects.",
        "Screen for the at-risk patterns: long-term benzodiazepines, escalating analgesics, PRN overuse, alcohol on top.",
      ],
      duration: "One consultation with the bag on the table replaces weeks of prescription-tray archaeology — and re-exposure of the same audit at every review.",
      indianNote: "The tablet-bag review is the Indian clinical instrument: the family brings the bag, the containers tell the story of four prescribers and eleven years of renewal, and the strips reveal the adherence no history can.",
    },
  ],
  severityScales: [
    {
      name: "CIWA-Ar",
      fullName: "Clinical Institute Withdrawal Assessment for Alcohol, revised",
      measures: "Alcohol withdrawal severity — the objective scale that guides symptom-triggered dosing in the elderly, where fixed schedules risk the oversedation, confusion and falls that are themselves the geriatric withdrawal hazards.",
      ranges: [
        { min: 0, max: 9, severity: "Mild (<10)", action: "Hold the scheduled dose, supportive care and re-scoring — the objective number, not habit, deciding every dose" },
        { min: 10, max: 20, severity: "Moderate (10–20)", action: "Medicated withdrawal with careful titration — low measured lorazepam doses, the sedation watched at every step" },
        { min: 21, max: 67, severity: "Severe (>20)", action: "Higher-dose treatment in a monitored setting — inpatient where complicated, the oversedation-confusion-falls triad the standing risk" },
      ],
      indianNote: "Implementable on any ward with a nursing chart — the discipline that makes geriatric home withdrawal possible with family supervision.",
    },
    {
      name: "CAGE",
      fullName: "CAGE questionnaire (Ewing)",
      measures: "The four-question alcohol screen — the most widely studied and best recognised instrument in older people; sensitivities vary by population and the chapter recommends at least this one.",
      ranges: [],
    },
    {
      name: "AUDIT",
      fullName: "Alcohol Use Disorders Identification Test",
      measures: "The broader consumption-and-problems instrument, with the biophysical adjuncts (MCV, liver function, carbohydrate-deficient transferrin) read with the geriatric caveat: comorbidity produces false positives, so they serve adjunctively and for treatment monitoring rather than as screening verdicts.",
      ranges: [],
    },
  ],
  differentialDiagnosis: [
    { condition: "Delirium from other causes (infection, metabolic, other drugs)", distinguishingFeatures: "The fluctuating confusion of withdrawal or sedative toxicity mimics every geriatric delirium source — and travels with them.", keyDifferentiator: "New confusion is never just old age: screen for substances (alcohol, sedatives, anticholinergics) alongside infection, metabolic and drug causes before accepting any label — the falls-plus-confusion rule that precedes the CT." },
    { condition: "Progressive dementia", distinguishingFeatures: "The 'dementia progressing' presentation — alcohol and benzodiazepines both imitating and accelerating cognitive decline.", keyDifferentiator: "The trial that separates: abstinence and the medication taper, with cognition re-tested weeks later (the container audit plus the withdrawal discipline) — improvement unmasks the disguise." },
    { condition: "Depression, including treatment-resistant depression", distinguishingFeatures: "Grief-triggered late-onset drinking presents as the depression that two antidepressants have failed — the drinking history nobody took.", keyDifferentiator: "The drinking and tablet history in every resistant case; the antidepressant that works once the alcohol is stopped (the three-month outcome that settles it)." },
    { condition: "The prescribing drivers — insomnia, chronic pain, anxiety", distinguishingFeatures: "The original indications that sustain the benzodiazepine and opioid use; treating them is treating the dependence.", keyDifferentiator: "The distinction between the driver (the untreated insomnia or pain) and the disorder (the tolerance, escalation and harm) — the taper that succeeds only when the driver is replaced with treatment." },
    { condition: "Falls from structural causes (syncope, orthostatic hypotension, cerebellar, visual)", distinguishingFeatures: "The masked presentation's great referent — every fall workup that never asked about tablets.", keyDifferentiator: "The sedative load audited at every fall: the benzodiazepine, the opioid, the OTC antihistamine — the medication list before the tilt table." },
    { condition: "'Just old age' (the diagnostic default)", distinguishingFeatures: "The ageism differential — the label that absorbs the falls, the confusion and the self-neglect without investigation.", keyDifferentiator: "The counter-rule: late-onset atypical presentation in an older person EARNS a substance screen — age is a reason to ask more, not less." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Withdrawal, the geriatric adjustments", description: "Benzodiazepine-assisted withdrawal carries elevated risks of oversedation, confusion and falls in the elderly, and no elderly-specific guidelines exist. Lorazepam is the safest choice (age and liver disease barely affect its metabolism; IM absorption predictable), though clinical experience with chlordiazepoxide is broader — choose by patient characteristics (previous treatments, hepatic status) and guide dosing with an objective withdrawal measure: CIWA-Ar, mild <10, moderate 10–20, severe >20. Thiamine to prevent Wernicke–Korsakoff: oral administration is as effective as parenteral in the emergency-department setting — individualise by general health, oral tolerance and compliance.", whenToUse: "Any dependent older drinker stopping — supervised home withdrawal where the picture is uncomplicated and the family can hold it; inpatient where complicated.", indianContext: "Lorazepam availability is good; chlordiazepoxide remains the familiar agent; CIWA-Ar-guided dosing is implementable on any ward with a nursing chart; thiamine is cheap — the B1-before-carbohydrate discipline from the amnesic-syndromes course applies to every elderly withdrawal." },
    { category: "pharmacotherapy", name: "Relapse prevention: naltrexone and acamprosate", description: "Of the FDA-approved agents (disulfiram, acamprosate, naltrexone), disulfiram is best avoided in older people (limited efficacy, a worse side-effect profile); naltrexone and acamprosate are the suitable pair — no KYP drug lessons exist for either; both are taught here and the route is never invented.", whenToUse: "From the first stabilised contact, alongside the psychosocial architecture.", indianContext: "Both available in India at moderate cost (approx 2026) — the barrier being the young-adult orientation of the de-addiction network rather than the pharmacy." },
    { category: "lifestyle", name: "The three prevention layers", description: "Primary: population measures (access, advertising, education) — currently aimed at the young, wrongly — plus individual education for older people, especially given the one-third who begin in later life. Secondary: target at-risk drinkers facing the classic geriatric precipitants — bereavement, social isolation, adjustment to retirement, new physical or psychiatric illness. Tertiary: treatment of established disorders.", whenToUse: "The layers run at every contact — the retirement-club talk is secondary prevention waiting to happen.", indianContext: "The joint family can deliver the secondary-prevention package: structured company, meals, activity scheduling around the drinking hour, and a shared relapse plan." },
    { category: "psychotherapy", name: "Same-age settings and the psychosocial tier", description: "Address the contributing circumstances (finances, housing); the psychotherapy evidence in older people is thin, but they respond better in same-age settings; support groups including AA have their place. Grief-focused and alcohol-focused work run together in the late-onset group.", whenToUse: "From the first stabilised contact — the setting chosen as deliberately as the drug.", indianContext: "The Indian version of same-age social settings: the temple group, the morning-walk circle, the family's activity scheduling around the drinking hour." },
    { category: "pharmacotherapy", name: "Medication use disorders: the deliberate taper", description: "Taper sedatives and analgesics with deliberate, monitored plans — one drug at a time (the staged 10%-per-fortnight discipline); correct iatrogenic over- and under-prescribing; in institutional settings, discipline the PRN culture and the caregiver overuse; treat the insomnia, pain and anxiety that drove the prescriptions in the first place.", whenToUse: "Every long-term benzodiazepine, every escalating analgesic — the taper planned with the family holding the strips.", indianContext: "Decades of easily renewed prescriptions and pharmacy self-purchase make the taper a family project: the daughter holding the strips, the fortnightly decrement, the replacement sleep strategies." },
    { category: "lifestyle", name: "The medicine review as standing order", description: "The container audit institutionalised: the list-all-medications-with-indications rule plus the bring-all-medications-in-their-containers instruction at every geriatric contact — yielding the adherence picture simultaneously, exposing duplication, OTC use and the at-risk patterns in one act.", whenToUse: "Every cognitive or falls complaint, every 'not responding' presentation — and routinely at review.", indianContext: "The tablet-bag review with the family's help: the instrument that found 14 medications from four prescribers in one bag, and the one that will find them in your OPD." },
  ],
  safety: {
    redFlags: [
      "New confusion in an older drinker or long-term benzodiazepine user — withdrawal or toxicity: both emergencies, and neither is 'just old age'",
      "Withdrawal seizures or delirium tremens risk — the oversedation-confusion-falls triad makes objective-scale dosing (CIWA-Ar) mandatory, inpatient where complicated; never an abrupt unsupervised stop",
      "The Wernicke window — thiamine before or with any glucose load in the malnourished older drinker: the B1-before-carbohydrate rule that protects the mammillary bodies in every elderly withdrawal",
      "Falls with fracture risk — the masked presentation's endpoint: the sedative load audited at every fall before the next one happens",
      "Escalating analgesics with alcohol on top — the respiratory-depression interaction stack of the polypharmacy bag",
      "Self-neglect with malnutrition — aspiration pneumonia and the refeeding window: calories low, thiamine and electrolytes first",
    ],
    urgentGuidance:
      "The order of operations: (1) new falls or confusion — screen for substances BEFORE ordering the CT: bloods (MCV, LFTs, B12, folate) and a collateral drinking history redirect management more often than imaging; (2) the withdrawal managed with low measured lorazepam dosed by CIWA-Ar, thiamine on board, supervised at home only where the family can hold an uncomplicated picture; (3) sedatives never stopped abruptly without cover — the taper planned, one drug at a time; (4) the hypoglycaemic or malnourished drinker gets thiamine with any glucose; (5) the container audit run the same day the confusion declared — the bag tells the truth the history cannot; (6) the family contracted as allies, not bystanders — the concealment that hid the disorder becomes the supervision that treats it.",
  },
  drugLinks: [],
  contentGaps: [
    "Naltrexone and acamprosate — the geriatric-suitable relapse-prevention tier — have no KYP drug lessons; both are taught here in full, the route never invented.",
    "The benzodiazepine class itself (lorazepam, chlordiazepoxide, the taper pharmacology) has no KYP drug lessons; the geriatric withdrawal logic is taught here and the general dependence science referenced to the Benzodiazepine Misuse course.",
    "The CIWA-protocol agents (the symptom-triggered withdrawal regimen) have no KYP lesson; the scale is named and its thresholds taught here.",
    "Thiamine — the vitamin that guards every elderly withdrawal — has no KYP drug lesson; the B1-before-carbohydrate discipline is taught here and in the Amnesic Syndromes course.",
  ],
  patientGuide: {
    whatIsIt:
      "Alcohol and medicine problems do not go away with age — they go quiet. In older people the same amount of drink or the same sleeping tablet does more harm than it did at forty, because the body carries less water, clears medicines more slowly, and runs alongside other illnesses and other tablets. So problems begin at amounts that look 'safe', and they show up not as drunkenness but as falls, confusion, memory slips that look like dementia, low mood that will not lift, and self-neglect. The commonest medicine problem is the sleeping tablet taken for years — often started for grief or pain decades ago and simply renewed. The good news, and the most important fact on this page: older people recover at least as well as younger people once the problem is found and treated.",
    whatCausesIt:
      "Three things together. The ageing body: less body water and more fat mean the same dose reaches a higher level in the blood, and the liver and kidneys clear it more slowly. Life events: bereavement, loneliness, retirement, new illness and new pain — one in three older people with a drinking problem developed it for the first time in later life, usually after one of these. The prescribing system: years of renewals, several doctors each adding a tablet, pharmacy counters that sell sleeping tablets easily, and nobody ever looking at the whole bag at once.",
    symptoms:
      "Falls, especially at night. Confusion, especially in the evening — or a 'dementia' that seems to be progressing. Words mixed up after dinner. Stopped walks and dropped activities. Low mood that has not responded to antidepressants. Poor sleep that keeps the sleeping tablet renewed. In the bag: medicines from several doctors, a tablet started years ago 'for nerves', pain tablets creeping up, an over-the-counter sleep aid nobody counts. Warning signs needing urgent care: a confusion episode with shaking or sweating (withdrawal), a fall with injury, drowsiness deepening on new tablets.",
    treatment:
      "Treatment has a shape. First, someone asks — one respectful question about how much and how often, plus a short four-question screen (CAGE), takes under a minute and is recommended at every visit where the question matters. Second, if alcohol is the problem, a safe withdrawal — usually at home with the family supervising, using small measured doses of a benzodiazepine called lorazepam (the safest one for older people), guided by a nurse-scored chart (CIWA-Ar), with thiamine (vitamin B1) always on board. Third, staying stopped — medicines called naltrexone or acamprosate can help (another one, disulfiram, is best avoided at this age), and older people do better in groups and clinics with people their own age. Fourth, the medicines problem: bring ALL medicines in their containers to the doctor — the bag itself is the test — and any tablet that has outlived its purpose is tapered slowly, one at a time (about 10% every fortnight), never stopped suddenly.",
    selfHelp: [
      "Bring the bag — every container, every over-the-counter tablet, at every review: the strips count the truth the memory cannot.",
      "The one-drink honesty: at this age the safe ceiling is one drink per day — not puritanism, just the way the body now handles it.",
      "Never stop a sleeping tablet or a pain tablet suddenly — the confusion and shaking of an abrupt stop are dangerous; ask for a taper plan.",
      "Rebuild the day: the morning-walk group, the temple, the satsang, the scheduled visits — the same-age company that treats the loneliness that drove the drinking.",
      "The family's role: the relative who hides the drinking can deliver the treatment — supervised withdrawal, medication counting, activity around the drinking hour.",
      "Name the anniversaries and the loneliness that come with them — the high-risk windows for late-onset drinking, worth planning for like weather.",
    ],
    whenToSeekHelp: [
      "A confusion episode with shaking, sweating or vomiting — withdrawal; needs medical care the same day, not a waited-out weekend",
      "A fall with any injury — and ask that the tablet bag be reviewed before the next one",
      "Drowsiness deepening on any new medicine — the interaction stack needs reviewing now",
      "The sleeping tablet that has run for years and is now causing falls or memory trouble — a taper plan, not a sudden stop",
      "Any new falls, new confusion or new self-neglect in an older person deserves a substance screen — ask the doctor to ask",
      "The caregiver's own exhaustion — the family carrying the confusion and the falls needs support of their own",
    ],
    indianResources: [
      "The district de-addiction centre and the DMHP psychiatric tier — the withdrawal and relapse-prevention channel, asking specifically about elderly-appropriate care",
      "Tele-MANAS 14416 (24×7, free) — for the family's distress, the relapse crises and the caregiver's own exhaustion",
      "Thiamine and the basic bloods through Jan Aushadhi and every primary-health channel — inexpensive and universally available (approx 2026)",
      "The tablet-bag review — ask the treating team to make it the standing rule at every visit; the family brings the bag, the doctor brings the plan",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific elderly-substance pathway exists; practice follows the general de-addiction structures (the district centres, the DMHP psychiatric tier, the NIMHANS treatment lineage) with the geriatric adjustments from the international chapter — lower thresholds, CAGE-first screening, lorazepam-preferred withdrawal — applied in primary care, because the de-addiction network is young-adult-oriented and elderly-specific programmes barely exist.",
    systemContext: "The patient meets the system in the geriatric OPD or the family physician's room, brought by a son or a daughter with 'weakness', 'memory loss' or 'dementia has worsened' — the somatic front door. The underdiagnosis table applies with Indian intensifiers: families shield ('he only drinks at functions'), doctors skip the question ('what use at this age'), and ageist benevolence calls the drinking 'understandable'. One respectful question about quantity-frequency-context plus a CAGE takes under a minute — the ask-always discipline that carries the whole detection system.",
    programmeContext: "The de-addiction-centre network is young-adult-oriented and elderly-specific programmes barely exist — reinforcing the primary-care-first approach. Lorazepam availability is good; chlordiazepoxide remains the familiar agent; CIWA-Ar-guided dosing is implementable on any ward with a nursing chart; thiamine is cheap; naltrexone and acamprosate are available at moderate cost.",
    costConsiderations: "CAGE costs nothing and the bloods (MCV, LFTs, B12, folate) are inexpensive; naltrexone and acamprosate are available in India at moderate cost (approx 2026); the de-addiction tier is free to a few thousand rupees — the expensive items are the imaging ordered before the drinking history and the follow-up structure nobody funds; the scarcest resource is the geriatric-specific service that does not yet exist.",
    culturalConsiderations: "The benzodiazepine inheritance: decades of easily renewed prescriptions and pharmacy self-purchase make long-term hypnotic use one of India's commonest geriatric addiction problems — the 'sleeping tablet' dependence begun for grief or pain decades earlier and renewed at every counter, with the special Indian-family irony that the tablets are often bought by the family itself. The joint family that conceals the drinking can also deliver the secondary-prevention package: structured company, meals, activity scheduling around the drinking hour, and a shared relapse plan — the Indian version of same-age social settings. Falls + confusion = screen for substances before ordering the CT: the masked presentations arrive at Indian emergency departments nightly as 'weakness' and 'dementia has worsened', and bloods plus a collateral drinking history redirect management more often than imaging.",
    patientCounselling: [
      "The ask-always script: 'At this age the same drink does more — so I ask everyone your age the same three questions; it takes one minute and it is not an accusation.'",
      "The one-drink script: 'The safe ceiling at your age is one drink per day — your body has less water and slower chemistry than it did at forty; this is arithmetic, not preaching.'",
      "The tablet-bag script: 'Bring every container next time — all of them, including what you buy without a prescription; the bag tells me in one look what no list can.'",
      "The taper script: 'We stop one medicine at a time, about a tenth every fortnight, with your daughter holding the strips — sudden stopping is the dangerous way.'",
      "The withdrawal script: 'The shaking and confusion of stopping are treatable — small measured doses, a nurse-scored chart, the vitamin always on board, usually at home with the family watching.'",
      "The prognosis script: 'You will do at least as well as a younger person at this — the evidence is clear, and your family watching with us is the part they cannot copy in the young.'",
    ],
  },
  decisionPath: {
    title: "The older patient who might be using",
    nodes: [
      {
        id: "start",
        question: "An older person in front of you — new falls, new confusion, memory complaints, a 'not responding' depression, or a routine review. What is the first move?",
        branches: [
          { label: "New falls and/or confusion now", next: "falls-confusion-path" },
          { label: "A memory complaint (the family says dementia)", next: "memory-path" },
          { label: "Depression not responding to treatment", next: "mood-path" },
          { label: "Routine geriatric review, nothing acute", next: "routine-path" },
        ],
      },
      {
        id: "falls-confusion-path",
        question: "Falls + confusion = screen for substances before ordering the CT.",
        branches: [
          { label: "Alcohol found (collateral + CAGE + bloods)", next: "withdrawal-path" },
          { label: "Sedative or analgesic toxicity found", next: "toxicity-path" },
          { label: "Screen negative", next: "dementia-path" },
        ],
      },
      {
        id: "withdrawal-path",
        question: "The geriatric withdrawal: lorazepam logic, the objective scale, the vitamin.",
        recommendation: "Lorazepam in low measured doses (the safest benzodiazepine — ageing and liver disease barely affect its metabolism; chlordiazepoxide where experience favours it), dosing guided by CIWA-Ar (mild <10, moderate 10–20, severe >20), thiamine from hour one (oral as effective as parenteral in the emergency setting); supervised at home only where the family can hold an uncomplicated picture; oversedation, confusion and falls watched at every step.",
      },
      {
        id: "toxicity-path",
        question: "The medication toxicity picture: the bag explains the presentation.",
        recommendation: "The tablet-bag review with the family's help — all containers, all indications, the at-risk patterns flagged (long-term benzodiazepines, escalating analgesics, PRN overuse, alcohol on top); the offending agent held or tapered, the driver (insomnia, pain, anxiety) treated in its place; in the cognitively impaired, remember that disturbed behaviour may be the presenting feature of the toxicity.",
      },
      {
        id: "memory-path",
        question: "'Dementia has worsened' or a new memory complaint: the bag before the scan.",
        branches: [
          { label: "Long-term benzodiazepine in the bag", next: "benzo-taper-path" },
          { label: "Escalating opioid-plus-paracetamol", next: "opioid-path" },
          { label: "Bag clean, drinking history negative", next: "dementia-path" },
        ],
      },
      {
        id: "benzo-taper-path",
        question: "The deliberate taper: one drug at a time.",
        recommendation: "A staged taper of the long-acting agent — about 10% per fortnight, with a family member holding the strips; prescribers consolidated to one; the OTC sedative stopped; the driving of it all (the insomnia, the grief, the pain) treated in its own right; cognition re-tested at eight weeks — the improvement that unlabels the 'dementia'.",
      },
      {
        id: "opioid-path",
        question: "The pain-driven drift: the analgesic escalation.",
        recommendation: "The switch to scheduled paracetamol with a proper pain review (the pain treated as the primary disease), the opioid tapered deliberately with monitoring, the alcohol-on-top interaction audited — pain-driven use drifting into disorder is the geriatric opioid story, and the pain service is the treatment.",
      },
      {
        id: "dementia-path",
        question: "The screen clears: proceed without prejudice.",
        recommendation: "The full medical or cognitive workup proceeds on its own merits (the Delirium in the Elderly and Mild Cognitive Impairment courses' territory) — with the substance screen on record, the container audit repeated at every review (bags change and prescribers multiply), and the late-onset risk windows flagged in the notes; a negative screen today is not a negative screen forever.",
      },
      {
        id: "mood-path",
        question: "The resistant depression: the drinking history nobody took.",
        branches: [
          { label: "Drinking found (often post-bereavement)", next: "aud-manage-path" },
          { label: "Sleeping tablet renewing for years", next: "benzo-taper-path" },
          { label: "Both negative", next: "depression-path" },
        ],
      },
      {
        id: "aud-manage-path",
        question: "Late-onset alcohol use disorder: the trigger and the drinking treated together.",
        recommendation: "Grief-focused and alcohol-focused work together; supervised home withdrawal with low CIWA-guided lorazepam and thiamine; the old hypnotic tapered separately and later; naltrexone or acamprosate for relapse prevention (disulfiram best avoided); same-age social reconnection — the temple group, the morning-walk circle; the son or daughter as medication supervisor; at three months the usual prize: abstinent, the antidepressant finally working, no falls.",
      },
      {
        id: "depression-path",
        question: "The depression is the depression.",
        recommendation: "The mood disorder treated on its own merits — with the substance screen on record, the container audit at every review, and the anniversary windows (the first bereavement season, the retirement) flagged as late-onset risk windows in the notes.",
      },
      {
        id: "routine-path",
        question: "Nothing acute: the ask-always minute.",
        recommendation: "One respectful question about quantity-frequency-context plus a CAGE — under a minute, every geriatric contact; the tablet-bag instruction given for the next visit; the one-third rule remembered (the widow at her sixth month and the retiree at his first festival are the secondary-prevention windows); the prognosis script held ready — older people do at least as well as the young once someone asks.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Not asking at all — the invisibility problem's service arm",
      why: "'What use at this age' and 'he only drinks at functions' between them keep the prevalence at 2–4% in the community while it runs at 23% among psychiatric inpatients — the questions thinning exactly where the disorder concentrates.",
      correction: "The ask-always minute: one respectful quantity-frequency-context question plus a CAGE at every geriatric contact — the recommended minimum screen, costing nothing and finding the epidemic where it lives.",
    },
    {
      mistake: "Applying population 'safe limits' to older people",
      why: "The 21/14 weekly units were calibrated on younger bodies; the higher fat-to-lean ratio, the slower metabolism and the interacting prescriptions mean harm arrives below those numbers in the elderly.",
      correction: "The geriatric ceiling taught and quoted: one drink per day (the NIAAA position) — and the pharmacokinetic arithmetic that justifies it explained to the family in one sentence, not as moralising.",
    },
    {
      mistake: "Treating the confusion as 'dementia progressing' and missing the withdrawal or the toxicity",
      why: "The masked presentations read as degeneration — the falls and evening confusion absorbed into an existing label while the cause (alcohol, a benzodiazepine, an OTC antihistamine) keeps working.",
      correction: "The rule that redirects: every new fall, new confusion or new self-neglect EARNS a substance screen before the label settles — bloods and a collateral history before the CT; apparent dementia progression may be alcohol or benzodiazepines in disguise.",
    },
    {
      mistake: "Stopping the sleeping tablet abruptly (or tapering everything at once)",
      why: "The abrupt stop risks the confusion-and-seizure withdrawal in a brain with little reserve; the simultaneous taper of several agents makes attribution of every symptom impossible and the family's supervision chaotic.",
      correction: "One drug at a time, about 10% per fortnight, deliberately and monitored — with the driver (the insomnia, the pain, the anxiety) treated in its place so the taper is not a bare withdrawal of comfort.",
    },
    {
      mistake: "Prescribing disulfiram in older people",
      why: "The limited efficacy and the worse side-effect profile that made it 'best avoided' in this population — the reaction teaching and the daily-tablet discipline demanding exactly the reliability that age and comorbidity have reduced.",
      correction: "Naltrexone or acamprosate — the suitable pair for relapse prevention in older people, with the psychosocial architecture (same-age settings, the family contract) carrying what the tablet cannot.",
    },
    {
      mistake: "Accepting 'she only takes her tablets as prescribed' as reassurance",
      why: "Medication use disorder in the elderly is mostly prescribed: years of renewals, several prescribers, interactions, and effects (confusion, falls) at 'correct' doses — the prescription is the risk factor, not the deviation from it.",
      correction: "The container audit: bring all medications in their containers, list them with indications, record adverse effects, screen the at-risk patterns — the instruction that yields the adherence picture simultaneously and finds the 14-medicine bag before the scan does.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The threshold principle: pharmacokinetics (higher fat-to-lean ratio, reduced metabolic efficiency, reduced reserve) + comorbidity + interactions → problems at lower intake; the NIAAA one-drink-per-day ceiling; population limits inappropriately high.",
        "Early-onset versus late-onset alcohol use disorder: one-third of elderly AUDs begin in later life; antisocial traits and stronger family history versus neuroticism, depression, bereavement and isolation.",
        "Why CAGE is the recommended minimum screen and why the biophysical markers (MCV, LFTs, carbohydrate-deficient transferrin) mislead in the elderly — comorbidity false positives.",
        "The underdiagnosis table by actor: patient (won't volunteer, can't recall, atypical features), service (don't ask, don't refer, wrong tools, therapeutic pessimism), family and society (don't perceive, ageism makes it 'understandable', less noisy).",
        "The withdrawal pharmacology: lorazepam safest (metabolism unaffected by age or liver; predictable IM absorption), CIWA-Ar thresholds (<10 / 10–20 / >20), oral thiamine as effective as parenteral in the emergency setting.",
      ],
      practical: [
        "Take a non-judgemental quantity-frequency-context drinking history from an older patient — demonstrating that patients disengage when threatened and engage when asked respectfully.",
        "Run the container audit: instruct the patient to bring all medications in their containers, list with indications, and demonstrate what the strips reveal about adherence, duplication and over-the-counter accumulation.",
      ],
      longAnswer: [
        "A 74-year-old widow, six months bereaved, referred with falls, evening confusion and 'depression not responding to two antidepressants': discuss the assessment (including the screen-first logic) and the management (including the withdrawal adjustments).",
        "Substance use in the elderly: the threshold and invisibility problems, the setting ladder, and why older people do at least as well in treatment.",
      ],
    },
    neetPg: {
      highYield: [
        "THE SETTING LADDER: community 2–4% (men 4–6× women; 16% of men on looser criteria) → emergency 14% → nursing home 18% → psychiatric inpatient 23%.",
        "THE ONE-THIRD RULE: one-third of elderly alcohol use disorders are late-onset — bereavement, isolation, retirement, new illness the triggers; neuroticism-depression the pattern; the classic vignette setup.",
        "THE THRESHOLD: higher fat-to-lean ratio (reduced volume of distribution → higher blood level per gram), reduced metabolic efficiency and reserve, comorbidity and interactions — NIAAA caps older drinking at ONE DRINK PER DAY; population limits inappropriately high.",
        "THE MUD NUMBERS: older people ~13% of the population using >30% of prescriptions and 35% of OTC drugs (~3× the general rate); the Irish study — 17% prescribed benzodiazepines, women 2× men, 52% on long-acting agents, 18% on a second psychotropic.",
        "THE WITHDRAWAL ANSWER: LORAZEPAM — metabolism barely affected by age or liver disease, predictable IM absorption (chlordiazepoxide the broader-experience alternative); CIWA-Ar thresholds <10 / 10–20 / >20; oral thiamine = parenteral in the emergency setting.",
        "THE RELAPSE RULE: naltrexone and acamprosate suitable; DISULFIRAM best avoided in older people (limited efficacy, worse side-effect profile).",
        "THE SCREEN: CAGE the recommended minimum (most widely studied in older people); biophysical markers false-positive in the comorbid elderly — adjunct and monitoring use.",
        "THE SETTING EFFECT: older people respond better in same-age treatment settings.",
        "THE PROGNOSIS: older people do at least as well in treatment as younger people — the best-kept secret, and the answer to the 'is it worth it at 78' question.",
        "THE INDIAN CORNER: the tablet-bag review before the dementia workup; falls + confusion = screen before the CT; the benzodiazepine inheritance; CIWA-guided home withdrawal with family supervision.",
      ],
      pyqConcepts: [
        "The bereavement-triggered late-onset vignette — the one-third figure embedded in a story (the widow, the whisky, the resistant depression).",
        "The nursing-home prevalence question (18%) and the psychiatric inpatient figure (23%) — the setting ladder as a numbers round.",
        "The lorazepam-versus-diazepam withdrawal question — the metabolism-unaffected-by-age logic as the discriminating fact.",
        "The disulfiram contraindication in the elderly — the single-best-answer favourite.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 74-year-old widow, six months after her husband's death, is referred for 'depression not responding to two antidepressants': morning walks stopped, falls at night, and her son has noticed she 'mixes up her words after dinner'; the collateral (with consent) revealing a half-bottle of whisky nightly since the bereavement and a sleeping tablet continued unchanged; examination showing a mild morning withdrawal tremor, macrocytosis and a raised GGT — the reasoning chain: late-onset alcohol use disorder (the one-third rule) with benzodiazepine co-use presenting as resistant depression and falls; the management chain: grief-focused and alcohol-focused work together, supervised home withdrawal with low CIWA-Ar-guided lorazepam and thiamine, the old hypnotic tapered separately and later, the son as medication supervisor, same-age social reconnection — and the three-month outcome (abstinent, antidepressant working, no falls) as the therapeutic-optimism lesson.",
        "An 81-year-old man attends with his daughter for 'memory loss' carrying a bag of 14 medications from four prescribers — two benzodiazepines (one long-acting, prescribed 11 years ago 'for nerves after bypass'), an opioid-plus-paracetamol combination escalating since knee pain, and an over-the-counter antihistamine sleep aid; cognitive testing borderline and worse in the evening — the reasoning chain: medication use disorder and toxicity amplifying (possibly causing) the cognitive complaints rather than a dementia diagnosis; the management chain: prescribers consolidated to one, the long-acting benzodiazepine staged-tapered at 10% per fortnight with the daughter holding the strips, the opioid switched to scheduled paracetamol with pain review, the OTC sedative stopped, cognition re-tested at eight weeks and improved by one education-equivalent — the container-audit lesson: geriatric 'memory loss' is a medication review before it is a scan.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "One-third of elderly alcohol use disorders are late-onset.",
        "Setting ladder: community 2–4% → ED 14% → nursing home 18% → psychiatric inpatient 23%.",
        "Lorazepam is the safest benzodiazepine for elderly alcohol withdrawal (metabolism unaffected by age/liver).",
        "Naltrexone and acamprosate suitable; disulfiram best avoided in older people.",
        "CAGE: the recommended minimum screening instrument in older people.",
        "Oral thiamine is as effective as parenteral in the emergency-department setting.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The ask-always discipline is the whole detection system in India — the geriatric OPD question plus a CAGE taking under a minute, against a de-addiction network that is young-adult-oriented and elderly-specific services that barely exist.",
        "The container audit's triple yield: the medication list verified, the adherence picture exposed, and the duplication/OTC/misuse revealed — one instruction doing the work of three investigations.",
        "The separate-taper rule: the alcohol withdrawal first with lorazepam, the old hypnotic tapered later and separately — attribution preserved, confusion avoided, the family able to supervise each step.",
        "Same-age settings are a prescribing decision, not a preference — the evidence that older people respond better with their own age group shapes the referral and the family-organised alternative (the temple group, the morning-walk circle).",
        "The therapeutic-optimism evidence (Oslin lineage: older people do at least as well, often better) belongs in the first consultation — the 'he's 78, is treatment worth it' question is answered with data, not reassurance.",
        "The secondary-prevention windows are calendrical: bereavement, retirement, the first new illness, the first festival alone — the note that flags them is the intervention that costs nothing.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The widow who 'took to her bed'",
      presentation: "Two failed antidepressants, falls at night, and whisky after dinner — the bereavement that answered 'depression' while the real history sat in the bottle.",
      initialPresentation: "A 74-year-old widow was referred for 'depression not responding to two antidepressants' six months after her husband's death. She had stopped going to her morning walks, was falling at night, and her son had noticed she 'mixed up her words after dinner'. The referral letter mentioned none of the falls' pattern — the evening timing and the night-time clustering were first drawn out by asking when, not where.",
      history: "A social drinker before the bereavement; a half-bottle of whisky nightly since the funeral (collateral history, taken with consent — the son's account doubling the patient's own minimised version); a 'sleeping tablet' continued unchanged from the years before; no prior psychiatric history before the loss; the two antidepressants both adequate trials, both 'failing'.",
      examination: "Mild withdrawal tremor in the morning; macrocytosis on the blood film; a raised GGT; the evening word-finding difficulty resolving into a pattern — confusion, not aphasia; no focal neurology; the CAGE positive on three of four.",
      diagnosis: "Late-onset alcohol use disorder (bereavement-triggered — the one-third rule in person) with benzodiazepine co-use, presenting as treatment-resistant depression and falls.",
      management: "Grief-focused and alcohol-focused work together; supervised home withdrawal with low, CIWA-Ar-guided lorazepam and thiamine; the old hypnotic tapered separately and later; the son recruited as medication supervisor; same-age social reconnection through the temple and the morning-walk group.",
      outcome: "At three months: abstinent, the antidepressant finally working, and no falls — the triple response that retroactively confirms the formulation and the therapeutic-optimism literature in one patient.",
      teachingPoints: [
        "Late-onset alcohol use disorder follows loss — the one-third rule, and the reason 'resistant depression' in the elderly deserves a drinking history before a third antidepressant.",
        "The masked presentation: falls and evening confusion carrying what would be drunk-and-disorderly in a younger patient.",
        "The separate-taper discipline: alcohol withdrawal managed first with lorazepam and thiamine, the old hypnotic reduced later — one drug at a time so every symptom is attributable.",
        "The family's conversion: the son who concealed nothing to the prescriber (he had never been asked) becomes the medication supervisor and the early-warning system.",
      ],
    },
    {
      title: "The medicine bag",
      presentation: "Fourteen medications from four prescribers in one bag — the 'memory loss' that improved one education-equivalent when the bag was emptied.",
      initialPresentation: "An 81-year-old man attended with his daughter for 'memory loss', bringing — at the doctor's instruction — a bag containing 14 medications from four prescribers: two benzodiazepines (one long-acting, prescribed 11 years earlier 'for nerves after bypass'), an opioid-plus-paracetamol combination escalating since knee pain began, and an over-the-counter antihistamine sleep aid. Cognitive testing was borderline, and worse in the evening.",
      history: "The long-acting benzodiazepine renewed for eleven years without review; the analgesic combination escalating over the period of the knee pain; the OTC sleep aid self-purchased and uncounted as a medicine; no alcohol history of note; the daughter's account of the memory complaints tracking the analgesic escalation rather than any steady decline.",
      examination: "Borderline cognitive testing, worse in the evening (the fluctuation that argues against a degenerative picture); mild unsteadiness on the turns; daytime drowsiness; no focal neurology; the bag itself the most informative examination finding of the consultation.",
      diagnosis: "Medication use disorder and toxicity amplifying — possibly causing — the cognitive complaints: not yet a dementia diagnosis.",
      management: "Consolidation of prescribers to one; a staged taper of the long-acting benzodiazepine at 10% per fortnight with the daughter holding the strips; the opioid switched to scheduled paracetamol with a pain review; the OTC sedative stopped; cognition re-tested at eight weeks.",
      outcome: "Cognition improved by one education-equivalent at the eight-week re-test — the label that was being written ('dementia') rewritten as iatrogenic toxicity, and the family holding a one-prescriber, fourteen-to-fewer tablet future.",
      teachingPoints: [
        "The bring-all-medications-in-containers rule exposes adherence, duplication and misuse in one act — the bag is the instrument, and it costs nothing.",
        "Geriatric 'memory loss' is a medication review before it is a scan — the toxicity that amplifies (and sometimes causes) the cognitive picture.",
        "Taper one drug at a time — the staged 10%-per-fortnight benzodiazepine reduction with a family member holding the strips is the safest architecture in this population.",
        "The evening-worse fluctuation on cognitive testing argues against a degenerative label — the tempo of the complaint is a diagnostic instrument in itself.",
      ],
    },
  ],
  clinicalPearls: [
    "The silent epidemic in one line: lower doses cause the harm, falls and confusion carry the presentation, and everyone — patient, clinician, family, society — asks the questions less.",
    "The threshold problem is pharmacokinetics, not morality: higher fat-to-lean ratio, slower metabolism, thinner reserve — the same grams are a bigger dose at eighty; one drink per day is the ceiling.",
    "The setting ladder is the exam's favourite ladder: community 2–4% → emergency 14% → nursing home 18% → psychiatric inpatient 23%.",
    "One in three elderly alcohol use disorders is late-onset — bereavement, isolation, retirement or new illness the trigger, and the group with the best prognosis when the trigger is treated.",
    "The criteria arrive in disguise: tolerance and withdrawal masked by medical conditions, and the social consequences evaporate — no job, no licence, no label for grandpa.",
    "The container audit is the geriatric assessment's highest-yield instruction: the medication list, the adherence picture and the misuse pattern from one bag on the table.",
    "Lorazepam is the withdrawal benzodiazepine of the elderly — metabolism barely touched by age or liver disease, IM absorption predictable — with CIWA-Ar (mild <10, moderate 10–20, severe >20) deciding every dose.",
    "Thiamine accompanies every elderly withdrawal — and in the emergency setting, oral administration is as effective as parenteral.",
    "Naltrexone and acamprosate for relapse prevention; disulfiram best avoided in older people — limited efficacy, a worse side-effect profile.",
    "Same-age settings treat better: the temple group and the morning-walk circle are not soft options but the evidence-based psychosocial tier's Indian delivery.",
    "Older people do at least as well in treatment as younger people — the best-kept secret of the whole chapter, and the answer to every 'what use at this age'.",
    "Falls + confusion = screen for substances before ordering the CT — the Indian emergency department's nightly redirect.",
  ],
  highYieldSummary: [
    "Definition: substance use in the elderly is the silent epidemic — alcohol use disorders (best-studied), medication use disorders (most geriatric-specific: ~13% of the population using >30% of prescriptions and 35% of OTC drugs, benzodiazepines leading) and illicit-drug/nicotine problems (smaller today, growing tomorrow) presenting at lower doses, through masked faces, under four layers of not-asking.",
    "Epidemiology: the setting ladder — community 2–4% (men 4–6× women; 16% of men on looser criteria), emergency 14%, nursing home 18%, psychiatric inpatient 23%; true consumption declines with age while ageing populations grow the absolute numbers; the Irish benzodiazepine study — 17% of older people prescribed, women 2× men, 52% long-acting, 18% on a second psychotropic; India — male-dominated drinking persisting into older age, enormous iatrogenic benzodiazepine exposure, near-total absence of elderly-specific services.",
    "Mechanism: the threshold problem (fat-to-lean redistribution shrinking the volume of distribution, falling metabolic efficiency and reserve, comorbidity and interactions — harm below population limits; NIAAA one drink per day) and the criteria-in-disguise (masked tolerance and withdrawal, evaporating social consequences) — with the under-recognition loop (patient, clinician, family, society each contributing reasons not to ask) keeping the epidemic silent.",
    "Clinical: the masked alcohol face (falls, confusion, self-neglect, 'dementia progressing', depression, insomnia — never drunk-and-disorderly) over the full morbidity map (GI, malignancies, cardiovascular, haematological, musculoskeletal, metabolic, neuropsychiatric including Wernicke–Korsakoff and the raised suicide risk); the medication face (benzodiazepine oversedation-confusion-incontinence-falls; pain-driven opioid drift; OTC and polypharmacy multiplication; disturbed behaviour as the presenting feature of toxicity in the cognitively impaired); the J-shaped honesty on light drinking and dementia.",
    "Diagnosis: the screen-first logic — the non-judgemental quantity-frequency-context interview, collateral with consent, CAGE as the recommended minimum, AUDIT named, biophysical markers (MCV, LFTs, CDT) read with the comorbidity false-positive caveat; the container audit for the medication tier (all containers, indications, adverse effects, the at-risk patterns); the differential discipline — every late-onset atypical presentation earns a substance screen, and apparent dementia progression may be alcohol or benzodiazepines in disguise.",
    "Management: withdrawal with lorazepam (safest — metabolism unaffected by age/liver, predictable IM absorption) dosed by CIWA-Ar (<10 / 10–20 / >20) with thiamine (oral as effective as parenteral in the emergency setting); relapse prevention with naltrexone or acamprosate (disulfiram best avoided); psychosocial treatment in same-age settings; the medication tier's deliberate one-drug-at-a-time tapers with the drivers (insomnia, pain, anxiety) treated; the three prevention layers aimed where they are currently not (secondary prevention at bereavement, isolation, retirement, new illness).",
    "Prognosis and the Indian tier: older people do at least as well in treatment as younger people — the late-onset one-third often best of all when the trigger is addressed; in India the ask-always minute, the tablet-bag review, the family as treatment ally, falls-plus-confusion screening before the CT, and the primary-care-first reality of a young-adult-oriented de-addiction network carry the whole response.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "esu-quiz-1",
      question: "The primary reason population 'safe drinking' limits are inappropriately high for older people is:",
      options: ["Older people hide their drinking better", "Pharmacokinetic changes (higher fat-to-lean ratio, reduced metabolic efficiency), comorbidity and drug interactions make the same intake more toxic", "The limits were designed only for women", "Older livers metabolise alcohol faster"],
      correctIndex: 1,
      explanation: "The threshold problem: distribution, metabolism and reserve all shift with age, so harm arrives at lower intake — one drink per day is the appropriate geriatric ceiling.",
      afterSectionId: "mechanism",
    },
    {
      id: "esu-quiz-2",
      question: "Approximately what proportion of older people with alcohol use disorders develop them for the first time in later life?",
      options: ["1 in 100", "1 in 10", "1 in 3", "All of them"],
      correctIndex: 2,
      explanation: "One-third are late-onset — typically bereavement- or illness-triggered, with neuroticism and depression rather than the antisocial pattern of early-onset disorder.",
      afterSectionId: "symptoms",
    },
    {
      id: "esu-quiz-3",
      question: "In a nursing-home population, the expected prevalence of alcohol use disorders is approximately:",
      options: ["1%", "5%", "18%", "50%"],
      correctIndex: 2,
      explanation: "The setting ladder: community 2–4%, emergency departments 14%, nursing homes 18%, psychiatric inpatients 23%.",
      afterSectionId: "diagnosis",
    },
    {
      id: "esu-quiz-4",
      question: "The benzodiazepine identified as the safest choice for alcohol withdrawal in older people — because ageing and liver disease barely affect its metabolism — is:",
      options: ["Diazepam", "Lorazepam", "Nitrazepam", "Chlordiazepoxide"],
      correctIndex: 1,
      explanation: "Lorazepam's metabolism is unaffected by age and hepatic impairment and its IM absorption is predictable; chlordiazepoxide retains the broader clinical experience.",
      afterSectionId: "management",
    },
    {
      id: "esu-quiz-5",
      question: "Which relapse-prevention medication is best avoided in older people?",
      options: ["Naltrexone", "Acamprosate", "Disulfiram", "Thiamine"],
      correctIndex: 2,
      explanation: "Disulfiram's limited efficacy and more severe side-effect profile make it unsuitable; naltrexone and acamprosate are the suggested agents.",
      afterSectionId: "management",
    },
    {
      id: "esu-quiz-6",
      question: "The instruction 'bring all your medications in their containers' to an older patient serves, in one act, to:",
      options: ["Test memory only", "Verify the medication list, reveal adherence levels, and expose duplication, OTC use and potential misuse", "Satisfy pharmacy regulations", "Assess grip strength"],
      correctIndex: 1,
      explanation: "The container audit is the core medication-use-disorder assessment — the tablet-bag review listing prescriptions with indications while reading the reality of compliance and accumulation.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Give three reasons each — patient, health-service, and family/society — why elderly alcohol use disorders are missed.", answer: "PATIENT: will not volunteer (shame, minimisation); cannot recall (the memory and the years both); presents atypically (falls and confusion rather than drunkenness — the features that would trigger the question are absent). HEALTH SERVICE: clinicians do not ask ('what use at this age'); do not refer (the presentation goes to physicians, not addiction services); use the wrong tools (criteria built on tolerance, withdrawal and social consequences that are masked or evaporated in the elderly) — with therapeutic pessimism underneath. FAMILY/SOCIETY: do not perceive the problem (the drinking looks like grieving or habit); ageism makes it 'understandable' — one of his few pleasures; the consequences are less noisy (no job to lose, no licence, no drunk-and-disorderly) — so nobody's alarm is ever tripped. The setting ladder is the summation: 2–4% in the community where nobody asks, 23% among psychiatric inpatients where everybody finally has.", topic: "Foundations" },
    { question: "What fraction of elderly alcohol use disorders are late-onset, and how do the early- and late-onset personalities differ?", answer: "ONE-THIRD — the first problems arriving in later life. EARLY-ONSET: the continuation of a working-years disorder — antisocial personality traits, hyperactivity, impulsivity, a stronger family history, a more severe course with more entrenched consequences. LATE-ONSET: a new disorder on a clean history — triggered by bereavement, social isolation, adjustment to retirement, new physical or psychiatric illness; running on neuroticism and depression (drinking to self-medicate, or becoming depressed from the drinking); associated with loss rather than deviance. THE PROGNOSTIC POINT: the late-onset group often has the best prognosis of all when the trigger is addressed — grief work, reconnection and treatment of the illness being the same act as the alcohol treatment. The vignette setup the exams love: the widow, the sixth month, the whisky, the 'resistant depression'.", topic: "Clinical practice" },
    { question: "Explain the pharmacokinetic arithmetic behind lower safe-drinking thresholds in older people.", answer: "THE BODY-WATER CONTRACT: ageing raises the fat-to-lean ratio — the volume of distribution for alcohol (a water-distributed, fat-soluble molecule) shrinks, so the same grams of ethanol produce a higher blood concentration in an eighty-year-old than a forty-year-old. THE CLEARANCE ARM: hepatic blood flow and metabolic efficiency fall in parallel — slower metabolism, longer exposure at the same intake; physiological reserve thins beneath both. THE MULTIPLIERS: comorbid illness and interacting prescriptions amplify each effect — the geriatric liver–brain axis behaving like a person drinking more than the bottle says. THE CONSEQUENCE: harm arrives below the population 'safe limits' (21/14 units weekly — inappropriately high here), and the NIAAA ceiling for older people is ONE DRINK PER DAY — a pharmacokinetic cap, not a moral one. The same arithmetic governs the benzodiazepines: the long-acting agents accumulate on the same shrunken volume and slower clearance — which is why they are over-represented among the harmful.", topic: "Mechanism" },
    { question: "Recite the setting ladder for elderly alcohol use disorder prevalence, with the gender and criteria riders.", answer: "COMMUNITY: 2–4% of older people (men 4–6 times women); with looser 'excessive consumption' criteria, men rise to 16%. EMERGENCY DEPARTMENTS: 14%. NURSING HOMES: 18%. PSYCHIATRIC INPATIENTS: 23%. THE TWO RIDERS: true consumption probably declines with age (the premature death of heavy drinkers, reduced reserve, cohort and network effects) — but the ageing of populations grows the absolute numbers regardless: the silent epidemic warning. And the ladder's meaning: prevalence climbs exactly where the asking concentrates — the community's not-asking keeps the figure at 2–4% while the psychiatric ward's structured assessment finds 23%; the screening behaviour of the setting, not the ageing of the patients, produces most of the climb.", topic: "Epidemiology" },
    { question: "Why is CAGE the recommended minimum screen, and why do the biophysical markers mislead in the elderly?", answer: "CAGE: the most widely studied and best recognised self-report screen in older people — quick (four questions, under a minute attached to a respectful quantity-frequency-context question) and usable by any clinician in any setting; sensitivities vary by population, which is why the chapter recommends AT LEAST this instrument (AUDIT the broader alternative). BIOPHYSICAL (MCV, liver function, carbohydrate-deficient transferrin): less reliable in the elderly because comorbidity produces false positives — the macrocytosis of B12/folate deficiency, the liver enzymes of non-alcoholic fatty disease and cardiac congestion all mimicking the drinking signature — so they serve adjunctively and for monitoring treatment rather than as screening verdicts. THE CLINICAL SHAPE: the screen (asking) replaces the criteria (waiting) — because in the elderly the measurable signature of dependence fades while the disorder does not.", topic: "Diagnosis" },
    { question: "The elderly alcohol withdrawal package: which benzodiazepine and why; which scale guides dosing; which vitamin, by which route, on what evidence?", answer: "THE BENZODIAZEPINE: LORAZEPAM — the safest choice in the elderly because ageing and liver disease barely affect its metabolism (no active metabolites accumulating on the shrunken volume) and its IM absorption is predictable; chlordiazepoxide retains the broader clinical experience — the choice made by patient characteristics (previous treatments, hepatic status), never by habit alone. THE SCALE: CIWA-Ar — objective, symptom-triggered dosing against the geriatric hazards of oversedation, confusion and falls; the thresholds: mild <10, moderate 10–20, severe >20; implementable on any ward with a nursing chart. THE VITAMIN: THIAMINE, to prevent Wernicke–Korsakoff — with the emergency-department evidence that ORAL administration is as effective as parenteral (no elderly-specific guidance: individualise by general health, oral tolerance and compliance), and the B1-before-carbohydrate discipline from the amnesic-syndromes course applying to every elderly withdrawal. No elderly-specific withdrawal guidelines exist — the adjustments are reasoned from the pharmacology, which is exactly why the reasoning must be learned rather than the recipe.", topic: "Management" },
    { question: "Which relapse-prevention drugs suit the elderly, which is best avoided, and what non-drug tier carries the rest?", answer: "SUITABLE: NALTREXONE and ACAMPROSATE — the two of the FDA-approved agents (disulfiram, acamprosate, naltrexone) that fit the older population: no CNS-toxicity profile of concern in the aged brain, no reaction-teaching burden. AVOIDED: DISULFIRAM — limited efficacy and a worse side-effect profile in older people (and, as the wider tradition adds, a daily-reaction contract that demands the memory and reliability age has taken). THE NON-DRUG TIER: address the contributing circumstances (finances, housing); the psychotherapy evidence in older people is thin, but they respond better in SAME-AGE SETTINGS; support groups including AA have their place; and the late-onset one-third need the trigger treated — grief work and reconnection being the alcohol treatment. THE PROGNOSIS UNDERNEATH: older people do at least as well in treatment as younger people — modulated by support systems and the availability of age-tailored services — which is why the disulfiram avoidance and the same-age preference are optimisations of an already-good engine, not compensations for a poor one.", topic: "Pharmacology" },
    { question: "State the medication-use-disorder assessment rule about containers, list what else it measures, and recite Atkinson's three risk-factor groupings with one example each.", answer: "THE RULE: ask the patient to bring ALL medications in their containers — and list them with their indications. WHAT ELSE IT MEASURES: the adherence picture simultaneously (the strips count the truth the history cannot); duplication and accumulation (the 14-medications-from-four-prescribers bag); OTC use nobody counts; and the at-risk patterns when read against the indications — long-term benzodiazepines, escalating analgesics, PRN overuse, alcohol on top; with adverse effects recorded against each suspect. ATKINSON'S THREE GROUPINGS: PREDISPOSING — family history, previous abuse, cohort consumption patterns, personality traits (the vulnerability that was always there); EXPOSURE-INCREASING — gender patterns (men alcohol and illicit drugs; women sedative-hypnotics and anxiolytics), chronic illness with pain, insomnia or anxiety, long-term prescribing, caregiver overuse of PRN medication in institutions, life stress/loss/isolation, negative affects, family collusion, discretionary time and money (what starts or sustains the use); EFFECT-AMPLIFYING — age-associated drug sensitivity, chronic illness, alcohol–drug and drug–drug interactions (what converts a given exposure into more harm) — the same dose, the older body, the bigger effect.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Isn't drinking a bit at his age just one of his few pleasures?", answer: "The risk-benefit genuinely changes with age: light drinking may even carry some protection — but the harm threshold falls (less body water, slower metabolism, interactions, frailty), so the dose that was a pleasure at fifty is a hazard at seventy-five. One-drink-a-day guidance is not puritanism; it is pharmacokinetics." },
    { question: "She only takes her tablets as prescribed — how can that be a disorder?", answer: "Medication use disorder in the elderly is mostly prescribed: years of renewals, several prescribers, interactions, and effects (confusion, falls) at 'correct' doses. The problem is usually the accumulation and the fit, not the disobedience. The bag review — every container on the table — settles it in one look." },
    { question: "He is 78 — is treatment even worth it?", answer: "Yes, and the evidence is unusually clear: older people do at least as well in treatment as younger people, and the late-onset group (one in three) often has the best prognosis of all when the trigger — grief, isolation, illness — is addressed. The age is an argument for treatment, not against it." },
    { question: "Grandmother has taken a sleeping tablet every night for years and seems fine.", answer: "Long-term benzodiazepines raise falls, confusion and dependence in the elderly — especially the long-acting kinds, and 'seems fine' is exactly how the falls present before they happen. A slow, supervised taper with replacement sleep strategies is safer than another decade of the same." },
    { question: "Could her confusion just be old age?", answer: "New confusion is never just old age. Screen for substances — alcohol, sedatives, anticholinergics — alongside the infection, metabolic and drug causes, before accepting any dementia label; apparent 'dementia progression' may be alcohol or benzodiazepines in disguise." },
    { question: "What happens if he gets the withdrawal shakes when he stops?", answer: "Withdrawal is treatable, and older people can go through it safely: low, measured doses of the right benzodiazepine (lorazepam — the one whose metabolism age does not touch), guided by a severity scale (CIWA-Ar), with thiamine on board — usually at home with the family supervising, in hospital where the picture is complicated. What is never safe is stopping abruptly and alone." },
    { question: "Which medicines in her bag are the usual suspects?", answer: "The benzodiazepines (sleeping and calming tablets, especially long-acting ones), the opioid-containing pain combinations that creep upward, and the over-the-counter sleep aids nobody counts as medicine. Any tablet causing drowsiness, unsteadiness or confusion in an older person belongs on the suspect list until the review clears it." },
    { question: "Where can we get help in India?", answer: "Start where you already are: the family physician or the geriatric OPD — one minute of asking and a four-question screen (CAGE) is the whole entry gate. The district de-addiction centre and the DMHP psychiatric tier handle withdrawal and relapse prevention; naltrexone and acamprosate are available at moderate cost; thiamine is cheap everywhere. Tele-MANAS 14416 is free, 24×7, for the family's own distress — and the tablet-bag review is the instrument you bring to every single appointment." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Moore AA et al. / NIAAA-lineage guidance — the one-drink-a-day recommendation for older people" },
      { source: "FDA-approved relapse-prevention agents (disulfiram, acamprosate, naltrexone) with the geriatric suitability framing per the chapter's cited reviews" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.2 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Atkinson RM — Substance abuse in the elderly, in Psychiatry in the Elderly (3rd edn): the predisposing / exposure-increasing / effect-amplifying risk framework (2002)" },
    ],
    trials: [
      { source: "Oslin DW et al. — treatment outcomes in late-life alcohol use disorders (older people do as well or better)" },
      { source: "The Irish community benzodiazepine study cited by the chapter — 17% prescribing prevalence, the long-acting excess, the second-psychotropic finding" },
    ],
    reviews: [
      { source: "Ewing JA (1984) — the CAGE questionnaire; and the systematic review of self-report screens in older people cited alongside it" },
      { source: "Leri F et al. and the lorazepam review cited by the chapter — lorazepam as the safest withdrawal benzodiazepine in the elderly" },
      { source: "The emergency-department thiamine review cited by the chapter — oral administration as effective as parenteral" },
      { source: "Garbutt JC et al. — the relapse-agent evidence lineage for acamprosate, naltrexone and disulfiram" },
      { source: "Rigler S — alcohol and medication interactions in older adults (the effect-amplifying tier)" },
      { source: "Schonfeld L, Dupree L — the same-age treatment-settings evidence" },
    ],
    patientResources: [
      { source: "The tablet-bag review — the one-instrument assessment every Indian family can run at every appointment" },
      { source: "The district de-addiction centre, the DMHP psychiatric tier and Tele-MANAS 14416 — the withdrawal, relapse-prevention and family-support channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: why the same drink does more at eighty, the tablet-bag rule, the falls-and-confusion warning signs, and why treatment works at least as well.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The threshold and invisibility problems, the setting ladder, the one-third rule, the withdrawal trio, the container audit.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything — the ask-always craft, the separate-taper discipline, the same-age evidence, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The silent epidemic, the threshold and invisibility problems, the setting ladder.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the two problems and the ladder's five numbers cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The pharmacology of being old, the criteria in disguise, the late-onset route.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the same grams are a bigger dose at eighty — and why nobody notices." },
    { number: 3, title: "Clinical Practice", description: "The masked faces, the screen-first diagnosis, the withdrawal trio, the container audit.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the ask-always minute, the CAGE and the tablet-bag review, and prescribe the lorazepam–CIWA–thiamine package." },
    { number: 4, title: "Indian Context", description: "The benzodiazepine inheritance, the family as ally, the screening-before-CT rule.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the one-minute screen and the tablet-bag instruction in a real geriatric OPD." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the widow vignette and the medicine-bag vignette cold, with the numbers attached." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.2 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Atkinson RM — Substance abuse in the elderly, in Psychiatry in the Elderly (3rd edn): the predisposing / exposure-increasing / effect-amplifying risk-factor framework reproduced in the chapter", sourceType: "textbook", year: "2002", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Ewing JA — the CAGE questionnaire (1984), with the systematic review of self-report screens in older people cited by the chapter as its reference 24", sourceType: "primary", year: "1984", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Moore AA et al. / NIAAA-lineage guidance — the one-drink-a-day recommendation for older people", sourceType: "guideline", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Leri F et al. and the review cited by the chapter as its reference 27 — lorazepam as the safest withdrawal benzodiazepine in the elderly", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S6", source: "The emergency-department thiamine review cited by the chapter as its reference 28 — oral administration as effective as parenteral", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Garbutt JC et al. / the FDA-approved relapse agents (disulfiram, acamprosate, naltrexone), with the geriatric suitability per the chapter's reference 30", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Oslin DW et al. — treatment outcomes in late-life alcohol use disorders (older people do as well or better)", sourceType: "primary", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S9", source: "The Irish community benzodiazepine study cited by the chapter as its reference 41 — 17% of older people prescribed, the female excess, the long-acting over-representation, the second-psychotropic finding", sourceType: "primary", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Rigler S — alcohol and medication interactions in older adults, as cited by the chapter", sourceType: "review", year: "as cited", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Schonfeld L, Dupree L — the same-age treatment-settings evidence, as cited by the chapter", sourceType: "primary", year: "as cited", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The threshold problem: pharmacokinetic ageing (the higher fat-to-lean ratio reducing alcohol's volume of distribution, falling metabolic efficiency and reserve), comorbidity and interactions produce problems at intakes unremarkable at forty — population 'safe limits' (21/14 units weekly) are inappropriately high for older people, and the NIAAA ceiling is one drink per day.", grade: "established", sources: ["S1", "S4"] },
    { text: "The setting ladder: community prevalence of elderly alcohol use disorders 2–4% (men 4–6 times women; 16% of men on looser excessive-consumption criteria), emergency departments 14%, nursing homes 18%, psychiatric inpatients 23% — with true consumption probably declining with age while ageing populations grow the absolute numbers (the silent epidemic warning).", grade: "established", sources: ["S1"] },
    { text: "One-third of elderly alcohol use disorders are late-onset — first problems in later life, triggered by bereavement, social isolation, adjustment to retirement or new illness, with neuroticism and depression rather than the antisocial pattern, stronger family history and more severe course of the early-onset group.", grade: "established", sources: ["S1", "S8"] },
    { text: "Older people do at least as well in treatment as younger people — modulated by individual factors, support systems and the availability of age-tailored services; the late-onset group often has the best prognosis when the trigger is addressed.", grade: "established", sources: ["S8"] },
    { text: "The medication-use-disorder arithmetic: older people are about 13% of the population using more than 30% of prescription and 35% of over-the-counter drugs (roughly three times the general rate); the Irish community study found 17% of older people prescribed benzodiazepines (women twice men, 52% of users on long-acting agents, 18% on a second psychotropic).", grade: "established", sources: ["S1", "S9"] },
    { text: "The geriatric withdrawal package: benzodiazepine-assisted withdrawal carries elevated risks of oversedation, confusion and falls, with no elderly-specific guidelines — lorazepam is the safest choice (ageing and liver disease barely affect its metabolism; IM absorption predictable), chlordiazepoxide retains broader experience; dosing guided by CIWA-Ar (mild <10, moderate 10–20, severe >20); thiamine to prevent Wernicke–Korsakoff, with oral administration as effective as parenteral in the emergency-department setting.", grade: "established", sources: ["S1", "S5", "S6"] },
    { text: "Relapse prevention in older people: of the FDA-approved agents, naltrexone and acamprosate are suitable and disulfiram is best avoided (limited efficacy, a worse side-effect profile).", grade: "established", sources: ["S7"] },
    { text: "Screening: CAGE is the most widely studied and best recognised screen in older people and the recommended minimum instrument; AUDIT the broader alternative; the biophysical measures (MCV, liver function, carbohydrate-deficient transferrin) are less reliable in the elderly because comorbidity produces false positives — useful adjunctively and for monitoring treatment.", grade: "established", sources: ["S1", "S3"] },
    { text: "Atkinson's risk-factor framework: predisposing (family history, previous abuse, cohort patterns, personality traits); exposure-increasing (gender patterns — men alcohol and illicit drugs, women sedative-hypnotics and anxiolytics; chronic illness with pain, insomnia or anxiety; long-term prescribing; caregiver overuse of PRN medication in institutions; life stress, loss, isolation; negative affects; family collusion; discretionary time and money); effect-amplifying (age-associated drug sensitivity; chronic illness; alcohol–drug and drug–drug interactions).", grade: "established", sources: ["S2", "S10"] },
    { text: "Psychosocial treatment: the psychotherapy evidence in older people is thin, but they respond better in same-age settings; support groups including AA have their place; contributing circumstances (finances, housing) addressed; grief-focused and alcohol-focused work run together in the late-onset group.", grade: "supported", sources: ["S1", "S11"] },
    { text: "The Indian tier: alcohol exposure documented in national surveys as a male-dominated pattern persisting into older age; an enormous iatrogenic benzodiazepine exposure (sleeping tablets among the most self-purchased and over-prescribed drugs in Indian pharmacies); a near-total absence of elderly-specific services; the costs (approx 2026) — CAGE free, bloods inexpensive, naltrexone and acamprosate at moderate cost.", grade: "supported", sources: ["S1"] },
  ],
};
