import type { PsychiatryCourse } from "./types";

/**
 * DELIRIUM IN THE ELDERLY — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/elderly-delirium.md — untouched foundation),
 * re-researched against the chapter's own lineages (the Inouye
 * risk-factor and prevention-trial tradition, the subsyndromal and
 * outcome literatures, the BGS hospital guideline) with per-claim
 * provenance. The general delirium architecture lives in the
 * Delirium — Acute Brain Failure course; this course teaches the
 * old-age specifics — the vulnerability × insult arithmetic and
 * the quiet hypoactive face it produces.
 *
 * Drug routes: the geriatric behavioural tier (haloperidol 0.5–2 mg
 * and the benzodiazepine alternative for neuroleptic intolerance)
 * and the chapter's flagged cholinesterase-inhibitor prevention
 * direction have no KYP drug lessons; they are taught here,
 * recorded in contentGaps, and never invented. drugLinks is empty
 * by design.
 */
export const elderlyDeliriumCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "elderly-delirium",
  title: "Delirium in the Elderly",
  shortName: "Elderly Delirium",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Delirium in the Elderly"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The quiet emergency: drowsiness the ward calls dementia while the treatable causes wait",

  summary:
    "In the elderly, delirium is usually hypoactive and quiet, misread as dementia or normal ageing, yet the quieter patient is often the sicker one. Prevention bundles and prompt treatment of reversible causes are the core management.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Explain the vulnerability × insult model and why delirium's face changes with age — the young brain's massive insult against the old brain's whisper.",
    "Recognise the hypoactive-dominant picture — reduced conscious level, poor attention and contact, incoherent speech, underactivity — and the attenuated, purposeless overactivity when hyperactivity appears.",
    "State the four essential diagnostic features shared by ICD-10 and DSM-IV, the subsyndromal continuum, and why reversibility is the best but most awkward discriminator.",
    "Work the differential trio — dementia (rapid decline from baseline), depression (affective-predominant, worse in the mornings), mania (the exhausted, dehydrated 'manic delirium') — plus the rare mimics (Charles Bonnet syndrome, catatonia, neuroleptic malignant syndrome).",
    "Quote the epidemiology and the risk-factor pairs: 14% community prevalence at 85+, inpatient prevalence 10–30% and incidence 4–53%, the hip-fracture excess, and the multiplicative patient × hospital factors including BUN/creatinine ≥18.",
    "Manage the four steps with geriatric dosing — haloperidol 0.5–2 mg, prescriptions for up to 24 hours, taper over 3–5 days — and deploy the prevention bundle (prescribing discipline, ward environment, surgical routines).",
    "Handle the Indian ward: the mislabel cascade, the family as the single most valuable diagnostic instrument, the free polypharmacy audit, and the single screening question that replaces the risk calculator.",
  ],
  quickFacts: [
    { label: "The model", value: "Vulnerability × insult", detail: "Individual vulnerability (brain disease, sensory impairment, frailty) interacting with external insults (illness, drugs, environment) — both sides accumulating with age, hence the geriatric predominance; the interaction multiplicative, not additive" },
    { label: "The face", value: "Hypoactive predominance", detail: "Reduced conscious level, poor attention and contact, incoherent speech, psychomotor underactivity — the form most elderly delirium takes; overactivity when present is purposeless (pulling at bedclothes); violence uncommon" },
    { label: "The paradox", value: "The quieter, the sicker", detail: "Hypoactive patients fare worse than hyperactive ones — partly the missed diagnosis with causes untreated, partly the graver (metabolic) aetiologies that produce quiet pictures in the first place" },
    { label: "The numbers", value: "14% at 85+", detail: "Community prevalence in those aged 85 and over; inpatient prevalence 10–30% and incidence 4–53%; a consistent hip-fracture excess; one-third of episodes prolonged or recurrent" },
    { label: "The ratio", value: "BUN/creatinine ≥18", detail: "Dehydration and pre-renal azotaemia joining visual impairment, illness severity and cognitive impairment as the patient-side risk factors — check it before assuming dementia progression" },
    { label: "The dose", value: "Haloperidol 0.5–2 mg", detail: "Orally (or IM if necessary), repeated until controlled; prescriptions for up to 24 hours to force review; taper over 3–5 days once the delirium resolves" },
    { label: "The prevention", value: "The bundle beats any tablet", detail: "Multi-component interventions — prescribing discipline, ward environment and routines, surgical routines — reduce inpatient incidence cost-effectively; cholinesterase-inhibitor prevention remains a flagged research direction" },
    { label: "The Indian question", value: "Is this how he usually is?", detail: "The single screening question to the family — with 'when did the change start?' — that replaces any risk calculator on a busy ward and stops the mislabel cascade at the door" },
  ],
  knowledgeGraph: [
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The general architecture — the acute attention failure, the fluctuating syndrome; THIS course adds the old-age arithmetic: the vulnerability × insult equation and the quiet face it produces" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The main differential AND the main risk factor — the already cholinergic-depleted brain that the urinary infection, the catheter and the anticholinergic prescription fell" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The depression differential — affective-predominant, worse in the mornings against delirium's evenings; and the elderly depressed patient who is delirium-prone besides" },
    { label: "Substance Use in the Elderly", type: "condition", href: "/psychiatry/elderly-substance-use/", note: "Alcohol withdrawal and the sedative load in the old — the toxicity/withdrawal arm of the hyperactive rule of thumb" },
    { label: "Late-Life Psychosis", type: "condition", href: "/psychiatry/late-life-psychosis/", note: "The paranoid states that rarely mimic delirium but leave the patient delirium-prone — self-neglect, neuroleptics and anticholinergics stacking the see-saw" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The aged brain's thinnest reserve — the cholinergic hypothesis of delirium, and the anticholinergic burden that tips it" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The hyperactive arm — dopamine agonists among the deliriogenic drugs, and the haloperidol brake dosed 0.5–2 mg" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "Attention's conductor — the first casualty when the see-saw tips, in the quiet face and the noisy face alike" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "With the ascending reticular activating system, the arousal gate — the reduced conscious level that is the hypoactive signature" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two stories carry the old-age chapter. First, the see-saw tips on its own: the general model (the full account in the Delirium — Acute Brain Failure course) describes attention systems failing acutely; the geriatric chapter adds the arithmetic — vulnerability on one side, insult on the other. A young brain needs a massive insult to derail, and then derails dramatically; the aged brain — cholinergic deficit, cerebrovascular burden, sensory deprivation, an already-dementing reserve — may derail at a whisper: the same urinary infection that inconveniences a 40-year-old fells an 85-year-old, and removing a catheter can be as therapeutic as any prescription. The risk factors are multiplicative rather than additive: each additional hospital insult — a restraint, a catheter, one more drug — multiplies the vulnerable patient's odds, which is precisely why the prevention bundle targets the hospital's own contributions. Second, the quiet dominance: the florid stereotype — agitation, hallucinations, pulled-out lines — comes from centuries of observing younger patients; in the elderly the same failure presents as withdrawal — reduced conscious level, poor attention, poor contact, incoherent speech, reduced psychomotor activity, unawareness of surroundings — and the paradox follows: the quiet form is the sicker one, unrecognised, its causes untreated, and often metabolic in origin, itself the graver derangement. The cholinergic thread ties the stories together: the aged and especially the Alzheimer's brain runs on the thinnest acetylcholine reserve, which is why cumulative anticholinergic burden across individually 'therapeutic' prescriptions tips it — and why the cholinesterase-inhibitor prevention idea remains the chapter's flagged research direction rather than routine practice.",
    steps: [
      "The see-saw arithmetic: vulnerability (brain disease, sensory impairment, frailty) on one side, insult (illness, drugs, environment) on the other — both accumulating with age, their interaction multiplicative rather than additive.",
      "The young-old difference: a major insult needed to derail a young brain, and the picture then dramatic; a urinary infection, a catheter or a room change sufficing in the vulnerable old — with a reduced conscious level rather than agitation as the presentation.",
      "The quiet dominance: the same attention-system failure presenting as withdrawal — reduced conscious level, poor attention and contact, incoherent speech, underactivity, unawareness of surroundings, poor memory.",
      "The attenuated hyperactivity: overactivity, when it appears, is purposeless — pulling at bedclothes, calling out — with violence uncommon and the elderly patient injuring themselves more than others.",
      "The cholinergic thread: the aged and Alzheimer's brain's thin acetylcholine reserve; cumulative anticholinergic burden across routine prescriptions (digoxin, prednisolone, cimetidine, ampicillin, warfarin — and above all the tricyclics, thioridazine, benzhexol) crossing the threshold.",
      "The environment alone can suffice: in a minority of vulnerable patients, sensory deprivation and psychological stress (the stress response via the HPA axis) produce delirium with neither drug nor infection to blame — the ward itself the insult.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (attention's conductor)", role: "The attentional control the syndrome first dissolves — poor attention, disorganised thinking and incoherent speech whatever the motor face, quiet or noisy.", grade: "established" },
    { id: "thalamus-aras", name: "Thalamus and the ascending reticular activating system (the arousal gate)", role: "Conscious level's gatekeeper — the reduced conscious level that defines the hypoactive face; the deep arousal machinery whose quiet failure reads as 'drowsy' rather than 'confused'.", grade: "supported" },
    { id: "basal-forebrain", name: "Basal forebrain cholinergic projection system", role: "The aged brain's thinnest battery — the cholinergic deficit that anticholinergic burden deepens and that Alzheimer's disease has already depleted; the rationale behind the cholinesterase-inhibitor prevention hypothesis.", grade: "proposed" },
    { id: "posterior-cortices", name: "Posterior association cortices (orientation's map room)", role: "Disorientation, poor memory and misreading of the environment when attention fails — with the generalised EEG slowing of delirium the electrophysiological signature the inconclusive case can borrow.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The deficit hypothesis: age and Alzheimer's thin the cholinergic reserve, anticholinergic drugs deepen it — the most vulnerable patients tipped by the individually 'therapeutic' prescription, and the cholinesterase-inhibitor prevention idea the flagged research direction.", grade: "supported", drugConnection: "The cholinesterase-inhibitor prevention tier has no KYP drug lesson — taught as a direction, never invented as a route." },
    { name: "Dopamine", symbol: "DA", role: "The hyperactive arm: dopamine agonists among the deliriogenic drugs on the insult list; the haloperidol brake applied at geriatric dose.", grade: "supported", drugConnection: "Haloperidol has no KYP drug lesson; the 0.5–2 mg geriatric rules are taught in this course's management tier." },
    { name: "GABA", symbol: "GABA", role: "The sedative-hypnotic axis: benzodiazepines both the alternative when neuroleptics are not tolerated and — with alcohol withdrawal — a precipitant; the same receptor family on both sides of the insult list.", grade: "supported" },
    { name: "Noradrenaline", symbol: "NE", role: "The arousal-stress axis: the HPA-axis stress response the chapter indicts in the minority of patients whom environment and psychology alone derail.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "seesaw-pathway",
      name: "The see-saw tips (vulnerability × insult to the quiet derailing)",
      steps: [
        { label: "The reserves run down", detail: "Brain disease, sensory impairment and frailty accumulating across the decades — the vulnerability side of the equation" },
        { label: "The insult lands", detail: "Urinary infection, dehydration, a new drug, a catheter, a room change — the smaller the reserve, the smaller the insult needed" },
        { label: "The interaction multiplies", detail: "Not additive arithmetic: each added hospital insult multiplies the vulnerable patient's odds — the finding that makes the prevention bundle rational" },
        { label: "Attention and arousal fail", detail: "The prefrontal-thalamic systems dissolve — conscious level and attention falling together" },
        { label: "The face declares itself", detail: "Hypoactive when the causes are metabolic; hyperactive with infection or toxicity/withdrawal — the rule of thumb" },
      ],
      clinicalManifestation: "The 84-year-old with mild Alzheimer's who goes quiet over two days on a catheter and a dry tongue — the 'sudden dementia' that is neither sudden nor dementia.",
      grade: "established",
    },
    {
      id: "anticholinergic-pathway",
      name: "The anticholinergic accumulation (routine prescriptions to quiet confusion)",
      steps: [
        { label: "Polypharmacy in the old", detail: "More than three medications already a listed risk factor; the drug chart the commonest precipitant nobody audits" },
        { label: "The burden accumulates", detail: "Tricyclics, thioridazine, benzhexol worst; digoxin, prednisolone, cimetidine, ampicillin, warfarin carrying small loads that sum" },
        { label: "The cholinergic reserve crosses threshold", detail: "Age changes distribution, metabolism and excretion unpredictably — toxicity at 'therapeutic' doses; the Alzheimer's brain already depleted" },
        { label: "Attention and conscious level fall", detail: "The quiet face again — drowsiness, poor contact, incoherence, underactivity" },
      ],
      clinicalManifestation: "The 'dementia has become very advanced' presentation after a routine prescription change — the drug chart, not the disease, doing the advancing.",
      grade: "established",
    },
    {
      id: "prevention-pathway",
      name: "The bundle in reverse (risk-factor targeting to incidence reduction)",
      steps: [
        { label: "The at-risk elder identified on admission", detail: "Visual impairment, illness severity, cognitive impairment, BUN/creatinine ≥18 — the patient-side list" },
        { label: "The hospital's contributions dismantled", detail: "Drug chart audited and minimum count enforced; restraints, catheters and iatrogenic events counted and reversed; sensory correction and orientation supplied" },
        { label: "The see-saw never tips", detail: "Mobility maintained, food and fluid ensured, sleep protected without hypnotics, good perioperative care for the surgical" },
        { label: "Incidence falls, cost-effectively", detail: "The multi-component trial evidence: bundles targeting poor clinical practice reduce inpatient delirium incidence at no premium" },
      ],
      clinicalManifestation: "The hip-fracture ward that stopped manufacturing its own delirium — spectacles fetched, opiates rationalised, bowels opened, the daughter present evenings.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "vulnerable-baseline", time: "The decades before", title: "The reserves run down", description: "Brain disease, sensory impairment and frailty accumulate silently — dementia the single strongest vulnerability; the see-saw's patient side loading year by year.", phase: "onset" },
    { id: "insult-arrival", time: "Hours to days", title: "The insult lands", description: "A urinary infection, a hot-season under-drinking, a new prescription, a catheter, a room change, constipation — an insult the same brain would have shrugged off at forty.", phase: "onset" },
    { id: "quiet-episode", time: "Hours to days", title: "The quiet derailing", description: "Reduced conscious level, poor attention, incoherent speech, underactivity — read as 'weakness', 'age' or 'dementia worsening'; the paradox at work: the quieter, the sicker.", phase: "peak" },
    { id: "recognition-or-miss", time: "Days 1–3", title: "The label question", description: "The screening question asked or not asked: 'Is this how he usually is? When did the change start?' — the difference between the cause hunt that treats and the label that closes the file.", phase: "peak" },
    { id: "prolonged-third", time: "Weeks", title: "The prolonged third", description: "One-third of episodes prolonged or recurrent — recovery in the old measured in weeks rather than days; the pressure sores, the immobility, the decline compounding while the causes are treated.", phase: "duration" },
    { id: "aftermath", time: "Months onward", title: "The aftermath", description: "Return towards baseline with rehabilitation and family support — or the persistent cognitive decline an episode can herald: delirium as the marker of a brain that has crossed into dementia's territory.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Community prevalence rises with age to 14% in those aged 85 and over. On medical and surgical wards: prevalence 10–30% and incidence 4–53% (methodological and population variation), with similar rates in acute psychogeriatric admissions, consistently higher rates in hip-fracture patients, and nursing-home residents comparably affected. One-third of patients have prolonged or recurrent episodes. The outcome literature adds the geriatric gravity: increased mortality, longer stays, functional decline and nursing-home discharge — and persistent cognitive decline afterwards, with delirium episodes marking the start of decline that can run on to dementia.",
    indianPrevalence: "India's geriatric burden is rising with the demographic transition — and the diagnosis is rarest exactly where the patients are commonest: the busy Indian medical ward, where fluctuating drowsiness in an old person is routinely attributed to 'weakness', 'age' or pre-existing dementia. The Indian-specific task is procedural, not technological: the screening habit and the family's account of the baseline.",
    lifetimeRisk: "Dementia is both the main differential and the main risk factor; an episode can herald persistent cognitive decline; one-third of episodes are prolonged or recurrent.",
    ageOfOnset: "A disease of accumulated age: rates rising through the later decades to the 14% community prevalence at 85+, with the inpatient and hip-fracture peaks wherever vulnerable brains meet hospital insults.",
    indianNotes: "The mislabel cascade — 'senile', 'weak', 'dementia ho gaya' — ends the diagnostic search on first contact; the countermeasure is the single screening question delivered before any label settles.",
  },
  etiology: [
    { category: "biological", factor: "The vulnerability × insult model", details: "Predisposing (patient-related): visual impairment, severity of illness, cognitive impairment (dementia above all), and a blood urea nitrogen/creatinine ratio of 18 or more. Precipitating (hospital- and treatment-related): use of restraints, malnutrition, more than three medications, bladder catheterisation, and the number of iatrogenic events. The factors are multiplicative — each added insult multiplying the vulnerable patient's odds." },
    { category: "biological", factor: "The aetiological checklist", details: "Drugs (psychotropics, hypnotics, anticonvulsants, anticholinergics, dopamine agonists, analgesics, anaesthetics, alcohol withdrawal); infection (urinary tract, pneumonia, septicaemia, pressure sores, endocarditis, wound infection); metabolic and endocrine (electrolytes, diabetes, thyroid, renal and hepatic failure, hypothermia, malnutrition); cardiovascular (cardiac failure, myocardial infarction, vascular disease, anaemia/polycythaemia); respiratory (pulmonary embolism, pneumothorax, effusion); intracranial (trauma, subdural haematoma, stroke, tumour, epilepsy); gastrointestinal (perforation, pancreatitis, cholecystitis, haemorrhage — and constipation, the underrated ward classic)." },
    { category: "biological", factor: "The anticholinergic burden", details: "Age changes distribution, metabolism and excretion unpredictably — toxicity arriving at 'therapeutic' doses. The worst offenders: tricyclics, thioridazine, benzhexol. The cumulative surprise: many routine elderly prescriptions carry anticholinergic activity (digoxin, prednisolone, cimetidine, ampicillin, warfarin) — individually small, cumulatively significant on polypharmacy. Alzheimer's patients are especially vulnerable, their cholinergic function already impaired." },
    { category: "psychological", factor: "The environment alone can suffice", details: "In a minority of vulnerable patients, purely environmental and psychological insults — sensory deprivation; the stress response via the HPA axis — produce delirium with neither drug nor infection to blame: the ward itself the insult, and the reason the prevention bundle has an environmental arm." },
    { category: "social", factor: "The hospital as pathogen", details: "The precipitating factors are mostly iatrogenic or institutional — restraints, catheters, drug counts above three, iatrogenic events, night noise, lost spectacles, immobilisation: the manufacturing conditions the prevention bundle exists to dismantle, and the reason a room change can be as pathogenic as a prescription." },
  ],
  symptomClusters: [
    {
      category: "1. The hypoactive face (the common presentation)",
      symptoms: [
        "Reduced conscious level — drowsiness the presenting complaint, from clouding to near-unresponsiveness",
        "Poor attention and poor contact — the conversation that will not hold; the examination that cannot be completed",
        "Incoherent speech; psychomotor slowing",
        "Unawareness of surroundings; disorientation; poor memory",
        "Underactivity — the stillness the ward reads as 'calm', 'settled' or 'cooperative'",
      ],
    },
    {
      category: "2. The attenuated hyperactive face",
      symptoms: [
        "Overactivity that is purposeless — pulling at bedclothes, picking, calling out",
        "Attempting to climb off the bed; nocturnal predominance with diurnal drowsiness",
        "Hallucinations and agitation present but dampened relative to the young stereotype",
        "Violence uncommon — the elderly patient injuring themselves more than others",
      ],
    },
    {
      category: "3. The complications layer (step 3's targets)",
      symptoms: [
        "Falls in the hyperactive; pressure sores in the hypoactive",
        "Urinary incontinence — and the catheter that follows it, itself a listed precipitant",
        "Sleep disturbance — and the hypnotic prescription that follows that",
        "Malnutrition, dehydration and immobilisation — each both consequence and renewed precipitant",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The four essentials (ICD-10 and DSM-IV convergence)",
      code: "Four features, none specific",
      criteria: [
        "Disturbance of consciousness — reduced clarity and awareness, from drowsiness to unresponsiveness",
        "Disturbance of cognition — attention, memory, orientation, language",
        "Rapid onset and fluctuating course — the tempo the informant history establishes ('good hours and bad hours')",
        "Evidence of an external cause — the insult side of the equation",
      ],
      duration: "Rapid — hours to days from whatever baseline; the fluctuation the family describes better than any chart.",
      indianNote: "The four essentials are necessary but the Indian ward's failure is earlier: the picture never reaches the criteria conversation because 'weakness' and 'age' close it at the door. The screening question comes first.",
    },
    {
      system: "The two-stage diagnostic work",
      code: "Diagnose the delirium, then hunt the causes — plural",
      criteria: [
        "Consider delirium whenever cognitive decline is RAPID from whatever baseline, or any recognised sign is present",
        "The informant history (relatives or ward staff) is essential for onset and course — in Indian practice the accompanying family member is the single most valuable diagnostic instrument",
        "Screening: the MMSE is not diagnostic but flags sudden decline; better the Delirium Rating Scale, the Confusion Assessment Method and the Delirium Symptom Interview",
        "Screen proactively on the risk factors: visual impairment, illness severity, cognitive impairment, BUN/creatinine ≥18; restraints, malnutrition, more than three medications, catheterisation, iatrogenic events",
        "The working rule: when in doubt, investigate and manage as delirium until the situation is clear — and the EEG helps where the picture stays inconclusive",
      ],
      duration: "Ongoing — the cause hunt continues until every treatable factor is addressed; the aetiology is multifactorial by nature.",
      indianNote: "The two questions that replace the risk calculator on a busy ward: 'Is this how he usually is? When did the change start?'",
    },
  ],
  severityScales: [
    {
      name: "CAM",
      fullName: "Confusion Assessment Method",
      measures: "The bedside operationalisation — the screening instrument the chapter prefers to the MMSE for the delirium question itself.",
      ranges: [],
      indianNote: "Administered as much to the nurse's and the family's observations as to the patient — the fluctuation across shifts is the very thing it detects.",
    },
    {
      name: "The motoric-face ladder",
      fullName: "Hypoactive–mixed–hyperactive staging",
      measures: "Which face the episode wears — and therefore which complications to anticipate and which rule-of-thumb aetiologies head the hunt.",
      ranges: [
        { min: 0, max: 0, severity: "Hypoactive (the common elderly face)", action: "Metabolic causes head the hunt; pressure sores, feeding and hydration the dangers; the family's baseline account and the drug-chart audit the first moves" },
        { min: 1, max: 1, severity: "Mixed", action: "Nocturnal overactivity on diurnal drowsiness — the postoperative classic; the precipitating audit (drugs, sensory, bowels) runs alongside the cause hunt" },
        { min: 2, max: 2, severity: "Hyperactive (attenuated)", action: "Infection or toxicity/withdrawal first on the list; falls and pulled lines the dangers; haloperidol 0.5–2 mg if behaviour endangers, while the causes are treated" },
      ],
      indianNote: "The rule of thumb the ladder carries: hyperactive suggests infection or toxicity/withdrawal; hypoactive suggests metabolic causes.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Dementia (the main differential and the main comorbidity)", distinguishingFeatures: "Recent onset and rapid decline from baseline = delirium until proved otherwise. Delirium can be prolonged in the elderly — failure to recover quickly after treating the cause does NOT by itself mean dementia.", keyDifferentiator: "The premorbid history resolves the question: the trajectory (tempo, fluctuation), not the severity, is the discriminator." },
    { condition: "Depression", distinguishingFeatures: "In severe depression the cognitive impairment is mild relative to the affective disturbance; in delirium, the reverse. Diurnal variation: depression worse in the mornings, delirium worse in the evenings.", keyDifferentiator: "The affect-cognition balance plus the morning/evening discriminator — remembering that the elderly depressed patient is delirium-prone besides (self-neglect; anticholinergic tricyclics), and that bereavement can precipitate both." },
    { condition: "Mania", distinguishingFeatures: "Rarer than delirium in old age and often mistaken for it; late-life first presentations usually ride on organic brain disease; the elderly manic patient is often exhausted and dehydrated — 'manic delirium' is a common presentation.", keyDifferentiator: "The physical state (exhaustion, dehydration) and the organic scaffold beneath: treat the medical layer first; the mood treatment follows." },
    { condition: "Paranoid states and schizophrenia", distinguishingFeatures: "Rarely confuse the picture — though these patients are delirium-prone: self-neglect, neuroleptics and anticholinergics stacking their see-saw.", keyDifferentiator: "The tempo again: the paranoid state's years against delirium's hours-to-days." },
    { condition: "The rare mimics", distinguishingFeatures: "Amnesic syndromes, epilepsia partialis continua, twilight states, Charles Bonnet syndrome, neuroleptic malignant syndrome, catatonia — and anxiety, which unless severe is unlikely to mimic.", keyDifferentiator: "The EEG where the picture is inconclusive — the generalised slowing the delirium signature against every mimic on the list." },
    { condition: "Subsyndromal delirium", distinguishingFeatures: "The partial and transitory disturbances common in the elderly, on a continuum with the full syndrome, sharing the same risk factors and the same increased mortality.", keyDifferentiator: "Partial does not mean benign — the classification misses it; the clinician must not. Treat partial pictures with full seriousness." },
  ],
  management: [
    { category: "lifestyle", name: "Step 1 — find and treat every cause", description: "Identify and treat ALL contributory factors — multifactorial by nature: stop the anticholinergic, treat the infection, correct the metabolic derangement, clear the constipation, remove the catheter. The single-cause assumption is the commonest management error in this disease.", whenToUse: "Always, first, and continuously — the hunt renews whenever the picture fails to improve.", indianContext: "The Indian audit, in order of yield: the drug chart (the anticholinergic accumulation), the urine (infection plus the catheter question), the bowels (the underrated constipation), the hydration (the hot-season BUN/creatinine), and the clinic interventions the family finally mentions when asked directly." },
    { category: "lifestyle", name: "Step 2a — the environment before the prescription", description: "Non-pharmacological first: reduce the confusing, frightening, disorienting hospital environment — good lighting, low noise, a visible clock, personal possessions, familiar individuals; introduce and explain any invasive intervention simply, slowly, clearly and repeatedly; holding the patient's hand while talking focuses attention and reassures.", whenToUse: "From the first hour — before any drug is considered.", indianContext: "The Indian attendant by right is the therapy's delivery arm — the familiar face, the feeding, the orientation; the realistic ward fixes: spectacles on, day-night light rhythm, the quietest corner, the clock the family brings from home." },
    { category: "pharmacotherapy", name: "Step 2b — haloperidol, geriatric rules", description: "Start lower than the young adult: haloperidol 0.5–2 mg orally (or IM if necessary), repeated until controlled; prescriptions for short periods only (up to 24 hours) to force review; once the delirium resolves, taper over 3–5 days; where neuroleptics are not tolerated, use a benzodiazepine (diazepam, lorazepam, alprazolam).", whenToUse: "Only when behaviour endangers the patient or distresses beyond the environmental measures — the last and lightest touch.", indianContext: "Haloperidol is among the cheapest drugs in India (approx 2026) — the temptation is overuse; the up-to-24-hour prescription discipline is the safeguard, and the drug is never the treatment of the causes." },
    { category: "lifestyle", name: "Step 3 — the complications prevented", description: "Falls in the hyperactive and pressure sores in the hypoactive; anticipate urinary incontinence, sleep disturbance, malnutrition and immobilisation — each anticipated complication cheaper than each treated one.", whenToUse: "Throughout — the quiet patient needs the pressure-area, feeding and hydration vigilance the noisy chart receives automatically.", indianContext: "The hypoactive patient on a short-staffed ward receives the least attention and accrues the most complications — the formalised attendant role covers the gap the staffing leaves." },
    { category: "lifestyle", name: "Step 4 — rehabilitation and family support", description: "Return the patient to premorbid functioning: assess ADLs regularly and encourage independence; involve the family — they carry the aftercare; teach that delirium is often recurrent and teach the early signs; the episode is a useful marker of vulnerability and of the need for more intensive community aftercare.", whenToUse: "From recovery's first days — the discharge teaching IS the follow-up plan.", indianContext: "The Indian family already attends; formalise the role — orientation, feeding, mobility, early-warning recognition on discharge — rather than tolerating bystanders who could be the care team." },
    { category: "lifestyle", name: "Prevention — the multi-component bundle", description: "The evidence-based optimism: multi-component interventions targeting poor clinical practice reduce incidence cost-effectively. Three areas: prescribing discipline (avoid deliriogenic drugs especially in Alzheimer's patients; regular drug-chart review; minimum drug count; non-pharmacological sleep promotion instead of hypnotics); ward environment and routines (minimise disorientation, sensory impairment and sleep deprivation; mobility; adequate food and fluid; staff training in recognising and managing delirium); surgical routines (good pre-, peri- and postoperative care, infection control, blood pressure, oxygenation). The cholinergic hypothesis of delirium makes cholinesterase inhibitors a plausible future preventive option — a research direction the chapter flags, not routine practice.", whenToUse: "Before the episode — the bundle deployed on admission for every at-risk elder, and on the surgical list before the knife.", indianContext: "The bundle costs discipline, not money: fix the spectacles and hearing aids, ensure the familiar attendant, keep the day-night light rhythm, mobilise early, treat the constipation, audit the drug chart." },
  ],
  safety: {
    redFlags: [
      "The quiet paradox: hypoactive delirium is the more dangerous kind — missed daily, its causes untreated, its outcomes worse; quiet is not calm",
      "Rapid cognitive decline from any baseline is delirium until proved otherwise — the working rule that overrides every prior label, including dementia",
      "Dehydration with BUN/creatinine ≥18 — the hot-season and gastroenteritis precipitant that kills quietly; check it before assuming dementia progression",
      "New drowsiness with fever — urinary infection, pneumonia or septicaemia until cleared; the quiet chest and the quiet bladder are the elderly ward's hidden sepsis",
      "Agitation that endangers (pulling lines, climbing from bed) — treat the causes while keeping the patient safe; haloperidol at 0.5–2 mg geriatric dosing, never adult loading",
      "Failure to recover within days of cause-treatment — expected in one-third (prolonged or recurrent episodes); re-hunt the causes and reassess by recovery-speed, not the calendar, before accepting a dementia label",
    ],
    urgentGuidance:
      "The order of operations: (1) recognise — the screening question to the family ('Is this how he usually is? When did the change start?') before any label settles; (2) the cause hunt in parallel with stabilisation — drugs, infection, metabolic derangement, dehydration (BUN/creatinine ≥18), bowels, catheter; (3) the environment corrected in the same hour — light, noise, clock, spectacles, the familiar face; (4) haloperidol 0.5–2 mg only if behaviour endangers, prescribed for up to 24 hours, tapered over 3–5 days once resolved; (5) the complications anticipated — pressure areas and feeding for the quiet, falls for the restless; (6) the family taught the recurrence risk and the early signs before discharge — the teaching IS the follow-up plan.",
  },
  drugLinks: [],
  contentGaps: [
    "Haloperidol — the geriatric behavioural tier (0.5–2 mg, up-to-24-hour prescriptions, 3–5-day taper) — has no KYP drug lesson; the dosing rules are taught in this course, the route never invented.",
    "The benzodiazepine alternative for neuroleptic intolerance (diazepam, lorazepam, alprazolam) has no KYP drug lesson — the misuse perspective lives in the Benzodiazepine Misuse course; the acute-delirium use is taught here.",
    "The cholinesterase-inhibitor prevention direction the chapter flags as a research avenue has no KYP drug lessons — taught as a direction, not a route.",
    "The deliriogenic-drug audit itself (the cumulative anticholinergic burden, dopamine agonists, the hypnotic load) has no dedicated KYP pharmacology lessons — the audit discipline is the teaching, since the role here is avoidance, not prescription.",
  ],
  patientGuide: {
    whatIsIt:
      "Delirium is a sudden disturbance of the brain's clarity — thinking, attention and awareness — caused by a physical illness, a medicine, or the hospital environment. In old age it usually arrives quietly: drowsiness, poor attention, muddled speech and stillness, rather than the shouting and seeing-things people expect. That quiet version is the commonest form in the elderly — and the most dangerous, because it is missed and its causes go untreated. It is a medical emergency with a hopeful side: the causes (infection, dehydration, medicines, constipation, a urinary catheter) are usually treatable, and most patients improve when they are — though recovery in the old can take weeks rather than days.",
    whatCausesIt:
      "Two things add up, like a see-saw. On one side, the brain's reserves — previous memory trouble, poor sight or hearing, frailty, age itself. On the other, the insults — infections, dehydration, medicines (especially those with 'drying' effects on the brain's chemistry), constipation, a catheter, an unfamiliar noisy ward, lost spectacles, sleepless nights. Young brains shrug off what old brains derail on: the same urine infection that inconveniences a 40-year-old can fell an 85-year-old. The more run-down the reserves, the smaller the insult needed.",
    symptoms:
      "Drowsiness and reduced awareness; poor attention — the conversation will not hold; muddled or incoherent speech; not knowing where they are or the time of day; underactivity by day, sometimes restlessness, calling out and pulling at the bedclothes at night; good hours and bad hours — the fluctuation families describe best. Warnings needing same-day care: new drowsiness with fever; not passing urine, or vomiting and diarrhoea with growing drowsiness; a fall or a blow to the head; refusing food and fluids; confusion suddenly much worse.",
    treatment:
      "Mostly not tablets. First, find and treat every cause — the drug chart reviewed, the infection treated, the dehydration corrected, the bowels cleared, the catheter questioned. Second, calm the surroundings — good light by day and dark by night, a visible clock, the familiar face, the spectacles on, any procedure explained slowly and simply; holding the patient's hand while talking is genuine treatment. A small dose of haloperidol (0.5–2 mg) only if behaviour endangers the patient, prescribed for short periods and tapered over 3–5 days once the delirium settles. Third, prevent the complications — bedsores for the quiet patient, falls for the restless one. Fourth, rebuild independence and teach the family the early signs — because delirium can come back.",
    selfHelp: [
      "The familiar attendant: your presence is treatment — orientation, feeding, walking, and the early-warning recognition nobody else can supply.",
      "Sensory correction: spectacles on and hearing aids in — the see-saw's cheapest stabiliser.",
      "The day-night rhythm: light by day, dark and quiet by night, the clock and calendar visible from the bed.",
      "Food, fluids and the bowels: dehydration and constipation are everyday precipitants on Indian wards — track them daily.",
      "The medicine bag to every appointment: the whole list, including the 'cold' combinations and the clinic prescriptions, for the drug-chart audit.",
      "The early-warning list on the wall at home: new drowsiness, poor attention, night-time confusion — come early next time.",
    ],
    whenToSeekHelp: [
      "New drowsiness with fever — the same day: urine infection, pneumonia or septicaemia until cleared",
      "Not passing urine, or vomiting and diarrhoea with growing drowsiness — the dehydration emergency",
      "A fall or any blow to the head, however minor it looked",
      "Refusing food and fluids, or confusion suddenly much worse",
      "After discharge, any early sign returning — one-third of episodes are prolonged or repeated; early treatment the second time is the protection",
    ],
    indianResources: [
      "The ward attendant's role formalised with the treating team — orientation, feeding, mobility and early-warning recognition on discharge",
      "The drug chart audited at every review — bring the whole medicine bag, including over-the-counter combinations",
      "Tele-MANAS 14416 (24×7, free) — for the family's distress and the caregiver's exhaustion",
      "The discharge teaching — the early-warning signs and the recurrence risk — asked for in writing before leaving: the teaching IS the follow-up plan",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific elderly-delirium pathway exists; practice follows the international lineages the note cites — the Inouye risk-factor and prevention-trial tradition and the British Geriatrics Society (2006) guidelines for prevention, diagnosis and management of delirium in older people in hospital — with the screening habit and the family's baseline account as the Indian adaptation.",
    systemContext: "The quiet-ward problem: crowded Indian medical wards with noise, night lights, unfamiliar attendants and absent clocks manufacture exactly the sensory-environmental insults the chapter indicts. The patient arrives brought by family — the sons, the spouse — with 'weakness', 'not eating', 'dementia ho gaya'; the accompanying relative is the single most valuable diagnostic instrument on the ward, and the first thing the history takes.",
    programmeContext: "Geriatric services remain thin; the district hospital and the DMHP psychiatric tier are the referral channels. The realistic prevention bundle is ward-level, not programme-level: fix spectacles and hearing aids, ensure the familiar attendant, keep the day-night light rhythm, mobilise early, treat constipation, audit the drug chart.",
    costConsiderations: "Haloperidol is among the cheapest drugs in India (approx 2026); the prevention bundle costs discipline, not money; the expensive outcomes are exactly the ones the bundle prevents — ICU stays, prolonged admissions, nursing-home discharge.",
    culturalConsiderations: "The mislabel cascade — 'senile', 'weak', 'dementia ho gaya' — each label ending the diagnostic search on first contact; the countermeasure is the single screening question: 'Is this how he usually is? When did the change start?' The family already attends in-hospital by right; formalising the attendant's role (orientation, feeding, mobility, early-warning recognition on discharge) converts a bystander into the care team. Hot-season under-drinking and gastroenteritis make BUN/creatinine ≥18 an everyday number — check it before assuming dementia progression. And Indian elderly prescriptions accumulate anticholinergics: tricyclics, bladder antispasmodics, first-generation antihistamines in 'cold' combinations, benzhexol — the cumulative-burden lesson applies verbatim, and the polypharmacy audit is free and high-yield.",
    patientCounselling: [
      "The quiet script: 'Quiet is not calm — the still patient is the sicker one tonight; we treat quietness with the same urgency as shouting.'",
      "The label script: 'A rapid change from his usual self is delirium until proved otherwise — often reversible once we treat the causes, even when recovery takes weeks rather than days.'",
      "The medicine script: 'Bring every medicine he takes — including the cold combinations and the clinic tablets — the drug list is often part of the illness.'",
      "The attendant script: 'Your presence is treatment: the familiar face, the feeding, the glasses on, the walked corridor — the ward cannot prescribe what you provide.'",
      "The recurrence script: 'One-third of patients have prolonged or repeated episodes — learn the early signs (new drowsiness, poor attention, night-time confusion) and come early next time.'",
      "The discharge script: 'The confusion settling does not end the vulnerability — the aftercare plan, not the discharge date, is what protects him.'",
    ],
  },
  decisionPath: {
    title: "The old person who changed",
    nodes: [
      {
        id: "start",
        question: "An elderly patient has changed — drowsy, muddled, or newly restless. Before anything else, the family is asked the one question that replaces the risk calculator: 'Is this how he usually is? When did the change start?'",
        branches: [
          { label: "Changed over hours to days — quiet, drowsy, still", next: "hypoactive-path" },
          { label: "Changed over hours to days — restless, pulling at things", next: "hyperactive-path" },
          { label: "Affective picture dominates — weeks of low mood", next: "depression-path" },
          { label: "Declined steadily over months to years", next: "dementia-path" },
        ],
      },
      {
        id: "hypoactive-path",
        question: "The quiet face — the commonest elderly presentation, and the paradox.",
        recommendation: "Full urgency, not reassurance: hypoactive delirium is the sicker form — missed daily, its causes untreated. Metabolic derangements head the hunt (electrolytes, glucose, renal and hepatic failure, hypothermia, malnutrition, dehydration with BUN/creatinine ≥18). Pressure areas, feeding and hydration get the vigilance the noisy chart receives automatically; the informant history anchors the baseline; the screening instruments (Confusion Assessment Method, Delirium Rating Scale) deployed; then the full cause hunt.",
      },
      {
        id: "hyperactive-path",
        question: "The attenuated noisy face — overactivity that is purposeless.",
        recommendation: "Safety alongside the hunt: pulling at bedclothes, calling out, climbing from bed — violence uncommon, the patient endangering themselves more than others. Infection or toxicity/withdrawal first on the aetiological list (the rule of thumb); haloperidol 0.5–2 mg only if behaviour endangers, while the causes are treated in parallel; falls anticipated.",
      },
      {
        id: "depression-path",
        question: "The mood mimic — the second label after dementia.",
        recommendation: "The affect-cognition balance: severe depression's cognitive impairment is mild relative to the affective disturbance; delirium the reverse. The diurnal variation: depression worse in the mornings, delirium worse in the evenings. But the elderly depressed patient is delirium-prone (self-neglect; anticholinergic tricyclics) and bereavement can precipitate both — when in doubt, investigate and manage as delirium until the situation is clear.",
      },
      {
        id: "dementia-path",
        question: "The main differential and the main comorbidity.",
        recommendation: "Recent onset and rapid decline from baseline = delirium until proved otherwise; the premorbid history resolves the question. Delirium can be prolonged in the old — failure to recover quickly after treating the cause does not by itself mean dementia: treat everything treatable, reassess by recovery-speed, then re-examine the baseline.",
      },
      {
        id: "confirm-delirium",
        question: "Delirium confirmed (or cannot be excluded). The two-stage work: now hunt the causes — usually plural.",
        branches: [
          { label: "Fever, urine, chest, wounds — the infection line", next: "infection-line" },
          { label: "New or changed prescriptions — the drug line", next: "drug-line" },
          { label: "Electrolytes, glucose, hydration, bowels — the metabolic line", next: "metabolic-line" },
          { label: "No cause found — the ward itself", next: "ward-line" },
          { label: "Behaviour endangers — the haloperidol question", next: "behaviour-path" },
          { label: "Not yet delirious but high-risk — prevention", next: "prevention-path" },
        ],
      },
      {
        id: "infection-line",
        question: "The infection sweep.",
        recommendation: "Urinary tract (and the catheter questioned), pneumonia, septicaemia, pressure sores, endocarditis, wound infection — cultures before antibiotics where the picture allows; the quiet chest and the quiet bladder are the elderly ward's hidden sepsis.",
      },
      {
        id: "drug-line",
        question: "The anticholinergic audit.",
        recommendation: "Tricyclics, thioridazine and benzhexol the worst offenders; digoxin, prednisolone, cimetidine, ampicillin and warfarin the routine carriers — individually small, cumulatively significant on polypharmacy; Alzheimer's patients especially vulnerable. Also on the list: psychotropics, hypnotics, anticonvulsants, dopamine agonists, analgesics, anaesthetics, alcohol withdrawal. The drug-chart review is a treatment.",
      },
      {
        id: "metabolic-line",
        question: "The metabolic and bowel sweep.",
        recommendation: "Electrolytes, glucose and diabetes control, thyroid, renal and hepatic failure, hypothermia, malnutrition — and the two Indian ward regulars: dehydration with BUN/creatinine ≥18 (hot-season under-drinking, gastroenteritis) and constipation, the underrated precipitant; the catheter questioned on every round.",
      },
      {
        id: "ward-line",
        question: "Neither drug nor infection found — the environment as insult.",
        recommendation: "Sensory deprivation and psychological stress suffice in a minority of the vulnerable — noise, night lights, absent clocks, lost spectacles, immobilisation, restraints, iatrogenic events. The environment corrected in the same hour: light, clock, spectacles, the familiar attendant — and the EEG where the picture stays inconclusive.",
      },
      {
        id: "behaviour-path",
        question: "Behaviour endangers or distresses beyond the environment's reach — the haloperidol question.",
        recommendation: "Geriatric rules only: haloperidol 0.5–2 mg orally (or IM if necessary), repeated until controlled; prescriptions for up to 24 hours to force review; taper over 3–5 days once the delirium resolves; where neuroleptics are not tolerated, a benzodiazepine (diazepam, lorazepam, alprazolam). The drug is never the treatment of the causes — step 1 runs underneath.",
      },
      {
        id: "prevention-path",
        question: "Before the episode — the bundle for every at-risk elder.",
        recommendation: "The three areas: prescribing discipline (deliriogenic drugs avoided especially in Alzheimer's patients; regular drug-chart review; minimum drug count; non-pharmacological sleep promotion instead of hypnotics); ward environment and routines (disorientation, sensory impairment and sleep deprivation minimised; mobility; food and fluid; staff training); surgical routines (pre-, peri- and postoperative care, infection control, blood pressure, oxygenation). Cost-effective — and in India it costs discipline, not money.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Calling the quiet patient 'calm' or 'settled'",
      why: "Hypoactive delirium is the commonest elderly form and the paradoxically worst — missed, its causes untreated, its metabolic aetiologies graver; the stillness reads as cooperation while the dehydration and the infection run on.",
      correction: "Quiet is not calm: the hypoactive patient gets the same urgency plus the pressure-area, feeding and hydration vigilance the noisy chart receives automatically.",
    },
    {
      mistake: "Accepting the family's label — 'dementia ho gaya', 'senile', 'weak'",
      why: "Each label ends the diagnostic search on first contact; the causes sit unlooked-for while the 'dementia' is managed into the discharge summary.",
      correction: "The screening question before any label: 'Is this how he usually is? When did the change start?' — a rapid change from baseline is delirium until proved otherwise.",
    },
    {
      mistake: "Treating the agitation before the causes",
      why: "The antipsychotic as first move leaves the delirium's engine running — the sedated patient is not the treated patient.",
      correction: "Causes first, environment second, haloperidol 0.5–2 mg last and lightest — only when behaviour endangers.",
    },
    {
      mistake: "Prescribing haloperidol on a standing, open-ended chart",
      why: "The geriatric rules exist to force review; standing prescriptions outlive the episode, accumulate, and add the very drug class that causes the next one.",
      correction: "Prescriptions for up to 24 hours only; taper over 3–5 days once the delirium resolves; the benzodiazepine alternative reserved for neuroleptic intolerance.",
    },
    {
      mistake: "Missing the cumulative anticholinergic burden",
      why: "Each drug is individually 'therapeutic' — digoxin, prednisolone, cimetidine, ampicillin, warfarin carry small anticholinergic loads that sum on polypharmacy, and the Alzheimer's brain is already cholinergic-depleted.",
      correction: "The drug-chart review as a treatment: count the total burden, not the individual doses; stop the worst offenders (tricyclics, thioridazine, benzhexol) first.",
    },
    {
      mistake: "Declaring dementia when the confusion hasn't cleared in a week",
      why: "One-third of elderly episodes are prolonged or recurrent, and recovery in the old takes weeks — the calendar misdiagnoses.",
      correction: "Treat everything treatable, reassess by recovery-speed rather than by days, and only then re-examine the baseline; the premorbid history, not the week's count, resolves the question.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The vulnerability × insult model — why delirium is primarily a geriatric disease: both sides of the equation accumulate with age.",
        "The hypoactive face and its paradox: reduced conscious level, poor attention and contact, incoherent speech, underactivity — and the quieter, the sicker.",
        "The four essential features shared by ICD-10 and DSM-IV — and why none of them discriminates delirium from dementia.",
        "The depression-delirium discriminator: affect-cognition balance, and depression worse in the mornings against delirium's evenings.",
        "The geriatric haloperidol rules: 0.5–2 mg, prescriptions for up to 24 hours, taper over 3–5 days.",
      ],
      practical: [
        "Demonstrate the informant history: 'Is this how he usually is? When did the change start?' — and the baseline timeline it produces.",
        "Run the bedside prevention audit on a confused elderly inpatient: spectacles, hearing aids, clock, catheter, drug chart, bowels, light.",
      ],
      longAnswer: [
        "Delirium in the elderly: why it is missed, how its presentation differs from the young, and the principles of management.",
        "'A rapid change from baseline in an elderly patient is delirium until proved otherwise': discuss the differentials (dementia, depression, mania) and the evidence base for prevention.",
      ],
    },
    neetPg: {
      highYield: [
        "THE MODEL: vulnerability × insult — both accumulate with age, the interaction multiplicative; a urinary infection, a catheter or a room change sufficing in the vulnerable brain.",
        "THE FACE: hypoactive predominance — drowsiness, poor attention and contact, incoherent speech, underactivity; overactivity purposeless (pulling at bedclothes); violence uncommon.",
        "THE PARADOX: the quieter, the sicker — missed diagnosis, untreated causes, and the graver (metabolic) aetiologies that produce quiet pictures.",
        "THE NUMBERS: 14% community prevalence at 85+; inpatient prevalence 10–30%, incidence 4–53%; the consistent hip-fracture excess; one-third prolonged or recurrent.",
        "THE RISK PAIRS: patient (visual impairment, illness severity, cognitive impairment, BUN/creatinine ≥18) × hospital (restraints, malnutrition, more than three medications, catheterisation, iatrogenic events) — multiplicative.",
        "THE ANTICHOLINERGIC BURDEN: tricyclics, thioridazine, benzhexol worst; digoxin, prednisolone, cimetidine, ampicillin, warfarin carrying routine loads; Alzheimer's patients the most vulnerable.",
        "THE DIFFERENTIAL TRIO: dementia (rapid decline from baseline; premorbid history resolves), depression (affective > cognitive; worse in the mornings), mania (exhausted, dehydrated 'manic delirium' on organic brain disease).",
        "THE RULE OF THUMB: hyperactive suggests infection or toxicity/withdrawal; hypoactive suggests metabolic causes.",
        "THE MANAGEMENT: four steps; haloperidol 0.5–2 mg, up-to-24-hour prescriptions, 3–5-day taper; benzodiazepines where neuroleptics are not tolerated.",
        "THE PREVENTION BUNDLE: prescribing discipline, ward environment, surgical routines — cost-effective, multi-component, no prophylactic tablet.",
        "THE SUBSYNDROMAL CONTINUUM: partial and transitory pictures share the risk factors and the increased mortality of the full syndrome — treat with full seriousness.",
        "THE RARE MIMICS: Charles Bonnet syndrome, catatonia, neuroleptic malignant syndrome, epilepsia partialis continua, twilight states — EEG where the picture is inconclusive.",
      ],
      pyqConcepts: [
        "The BUN/creatinine 18 threshold — the number every exam tier returns to.",
        "The hypoactive-hyperactive outcome paradox — the single most-tested elderly-delirium concept.",
        "The multiplicative risk-factor interaction — why prevention targets the hospital's own contributions.",
        "The morning/evening discriminator between depression and delirium.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "An 84-year-old man with mild Alzheimer's disease is brought by his sons with the message that 'his dementia has become very advanced': two days of increasing drowsiness and unresponsiveness at home, reduced conscious level, poor attention, disorientation beyond his baseline, dry mucous membranes, urine not passed properly — and, elicited finally from the family, an indwelling catheter placed at a clinic two weeks earlier; the BUN/creatinine ratio is 26. The informant history: managing conversations and self-care until last week. The reasoning chain: rapid decline from baseline = delirium until proved otherwise; the hypoactive face = the commoner, sicker form with metabolic causes first on the list; the formulation — hypoactive delirium on the arithmetic of Alzheimer's vulnerability × dehydration + urinary infection + catheter. The management: fluids, infection treatment, catheter out with a voiding programme, the quiet well-lit side of the ward with his wife attending, haloperidol 0.5 mg at night for one dose only (he settles without it), graded mobilisation — and he returns near baseline in five days, the family taught the early-warning signs and the one-third recurrence risk. The lessons: the vulnerability-insult arithmetic in action; hypoactive patients are sicker, not safer; the discharge teaching IS the follow-up plan.",
        "A 78-year-old woman, three days after hip-fracture repair, is pulling at her bedclothes at night, calling out and trying to climb off the bed; by day she is drowsy and eats little. The drug chart shows three new postoperative medications and nocturnal opiates; her spectacles were left at home; she has not opened her bowels for three days; the infection screen is clear. The reasoning chain: hip-fracture patients are the highest-risk delirium group; the precipitants here are ALL modifiable and none is an infection — the polypharmacy, the opiate load, the sensory deprivation, the constipation. The management runs the four steps: opiate rationalisation and laxatives, spectacles fetched by the family, night-light and clock, the daughter present in the evenings, and a single low-dose haloperidol 0.5 mg reserved only for nocturnal agitation that endangers her — pharmacology the last and lightest touch. The lessons: the postoperative elder is the prevention bundle's exact target; the drug chart and the bedside, not the blood cultures, held the diagnosis this time.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Rapid onset and fluctuation in an elderly patient = delirium until proved otherwise.",
        "Hypoactive is the commonest elderly form — and carries the worse outcome.",
        "BUN/creatinine ratio of 18 or more = the patient-side risk factor.",
        "Haloperidol 0.5–2 mg; prescriptions for up to 24 hours; taper over 3–5 days.",
        "Prevention is the multi-component care bundle — cost-effective, no prophylactic tablet.",
        "Depression worse in the mornings; delirium worse in the evenings.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The attendant at the bedside is a diagnostic and therapeutic instrument — formalise the role (orientation, feeding, mobility, early-warning recognition) instead of tolerating a bystander the ward could be employing.",
        "The up-to-24-hour prescription is a system design, not a dose choice — it forces the review the quiet patient will never prompt.",
        "Removing the catheter can be as therapeutic as any prescription — the vulnerability arithmetic acting in your favour for once.",
        "The drug-chart review IS a treatment: cumulative anticholinergic burden across individually 'therapeutic' prescriptions, with the Alzheimer's brain the most sensitive balance on the ward.",
        "Subsyndromal pictures carry the risk factors and the mortality of the full syndrome — partial does not mean benign, and the classification's silence is not the clinician's excuse.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The night the grandfather went quiet",
      presentation: "An 84-year-old with mild Alzheimer's goes quiet over two days, and the family arrives with the verdict already written — 'his dementia has become very advanced'; the dry tongue, the unpassed urine and a ratio of 26 say otherwise.",
      initialPresentation: "An 84-year-old man with mild Alzheimer's disease was brought to the district hospital by his sons after two days of increasing drowsiness and unresponsiveness at home. The family's opening message was that the dementia had 'become very advanced'. He had not been passing urine properly; an indwelling catheter had been placed at a private clinic two weeks earlier; until last week, by the sons' account, he had been managing conversations and his own self-care.",
      history: "Mild Alzheimer's disease under follow-up; no prior episode of confusion this rapid; no fever reported; the clinic catheter insertion two weeks ago the only recent intervention; the informant history establishing the baseline — conversational and self-caring until seven days ago.",
      examination: "Reduced conscious level; poor attention with poor contact; disorientation beyond his known baseline; incoherent speech when roused; dry mucous membranes; the catheter in situ; BUN/creatinine ratio 26.",
      diagnosis: "Hypoactive delirium — the arithmetic of Alzheimer's vulnerability × dehydration + urinary infection + the catheter — presenting as 'sudden dementia'.",
      management: "Fluids and dehydration correction; urinary infection treated; catheter removed with a voiding programme; the quiet, well-lit side of the ward with his wife attending; haloperidol 0.5 mg at night written for one dose only — he settles without it; graded mobilisation begun.",
      outcome: "Near-baseline function returned in five days — conversational, self-caring, oriented to his usual level; the family taught the early-warning signs (new drowsiness, poor attention, night-time confusion) and the one-third recurrence risk before discharge.",
      teachingPoints: [
        "Rapid decline from baseline is delirium until proved otherwise — the 'sudden dementia' is the missed emergency wearing the family's label.",
        "The vulnerability-insult arithmetic in action: Alzheimer's reserve × dehydration × infection × catheter — four factors, none individually sufficient, together decisive.",
        "Hypoactive patients are sicker, not safer — the quiet face carries the worse outcome and receives the least attention.",
        "The discharge teaching IS the follow-up plan: the recurrence risk and the early signs taught to the family who will see the next episode first.",
      ],
    },
    {
      title: "The patient who got busier after surgery",
      presentation: "Three nights after a hip-fracture repair she is pulling at the bedclothes and trying to climb out of bed — and every one of her precipitants was written on the drug chart and the bedside, none of them in the blood cultures.",
      initialPresentation: "A 78-year-old woman, three days after hip-fracture repair, developed night-time restlessness: pulling at her bedclothes, calling out and attempting to climb off the bed; by day she was drowsy and ate little. The notes showed three new postoperative drugs on the chart, opiates at night, no spectacles on the ward (left at home), and constipation for three days.",
      history: "Hip-fracture repair three days earlier; no preoperative cognitive impairment; no fever; the daughter's account of a woman conversational and oriented before surgery, drowsy by day and restless only by night since.",
      examination: "Drowsy but arousable by day; purposeless overactivity at night — pulling at bedclothes, calling out, climbing attempts; surgical site clean; no focal neurology; the drug chart and the absent spectacles the most eloquent findings.",
      diagnosis: "Postoperative delirium in the highest-risk group — mixed hypoactive-hyperactive, on four modifiable precipitants (polypharmacy, nocturnal opiates, sensory deprivation, constipation), none of them an infection.",
      management: "The four steps: opiate rationalisation and laxatives; spectacles fetched by the family; infection screen clear; night-light and clock at the bedside; the daughter present in the evenings; a single low-dose haloperidol 0.5 mg held in reserve — only if nocturnal agitation endangers her.",
      outcome: "The nocturnal pulling settles over the following nights as the opiates are rationalised and the bowels open; the reserved haloperidol is never given — the precipitants, not the pharmacy, had been the delirium.",
      teachingPoints: [
        "Hip-fracture patients are the highest-risk delirium group — the population the prevention bundle was built for.",
        "The precipitating factors here were ALL modifiable and none was an infection: the drug chart, the opiate, the lost spectacles, the constipation.",
        "Pharmacology is the last and lightest touch of the management — the environment and the drug chart did the work.",
        "The day-night pattern (drowsy by day, restless by night) is the postoperative delirium signature the night staff are first to see.",
      ],
    },
  ],
  clinicalPearls: [
    "Delirium = vulnerability × insult — both sides accumulate with age; hence the geriatric predominance and the whisper-insult threshold.",
    "Most elderly delirium is hypoactive — and the quieter, the sicker: missed diagnosis, untreated causes, graver (metabolic) aetiologies.",
    "Rapid decline from baseline = delirium until proved otherwise; the premorbid history, not the severity, resolves the dementia question.",
    "Depression is worse in the mornings; delirium is worse in the evenings — the cheapest discriminator on any ward.",
    "In severe depression the affective disturbance outweighs the cognitive; in delirium the reverse — the affect-cognition balance rule.",
    "'Manic delirium' in the old: the exhausted, dehydrated first presentation riding on organic brain disease — treat the medical layer first.",
    "BUN/creatinine ≥18 — the dehydration number that belongs on every elderly confusion screen, and an everyday hot-season Indian figure.",
    "The risk factors are multiplicative: visual impairment, illness severity and cognitive impairment on one side; restraints, malnutrition, more than three medications, catheterisation and iatrogenic events on the other.",
    "Hyperactive suggests infection or toxicity/withdrawal; hypoactive suggests metabolic causes — the aetiological rule of thumb.",
    "Haloperidol 0.5–2 mg, prescriptions for up to 24 hours, taper over 3–5 days — the geriatric behavioural rules, with benzodiazepines only where neuroleptics are not tolerated.",
    "The prevention bundle — prescribing discipline, ward environment, surgical routines — reduces incidence cost-effectively: the care bundle, not a tablet.",
    "One-third of episodes are prolonged or recurrent, and an episode can herald persistent cognitive decline — the discharge teaching is the follow-up plan.",
    "Subsyndromal delirium shares the risk factors and the mortality of the full syndrome — partial is not benign.",
  ],
  highYieldSummary: [
    "Definition and model: delirium in the elderly = the interaction between individual vulnerability (brain disease, sensory impairment, frailty) and external insults (illness, drugs, environment) — both accumulating with age, the interaction multiplicative. The young brain needs a major insult and derails dramatically; the vulnerable old brain is felled by a urinary infection, a catheter or a room change, and presents with a REDUCED conscious level. The general architecture of the syndrome (the acute attention failure, the fluctuating course) is the Delirium — Acute Brain Failure course's ground; this course's ground is the old-age arithmetic and the quiet face it produces.",
    "Epidemiology: community prevalence 14% in those aged 85 and over; inpatient prevalence 10–30% and incidence 4–53%; consistently higher in hip-fracture patients; nursing-home residents comparably affected; one-third of episodes prolonged or recurrent. Outcomes: increased mortality, longer stays, functional decline, nursing-home discharge — and persistent cognitive decline afterwards, delirium marking the start of the decline that runs on to dementia.",
    "Mechanism: the see-saw arithmetic (reserves × insults, multiplicative); the quiet dominance (the same attention-system failure presenting as withdrawal — reduced conscious level, poor attention and contact, incoherent speech, underactivity); the cholinergic thread (the aged and Alzheimer's brain's thin acetylcholine reserve — the anticholinergic burden's target and the cholinesterase-inhibitor hypothesis); and the environment alone sufficing in a minority (sensory deprivation, the HPA-axis stress response).",
    "Clinical features and classification honesty: hypoactive predominance with attenuated, purposeless hyperactivity (pulling at bedclothes; violence uncommon; self-injury the risk). ICD-10 and DSM-IV share four essentials — disturbance of consciousness, disturbance of cognition, rapid onset and fluctuating course, evidence of an external cause — none specific versus dementia, and the criteria predict outcome poorly. Reversibility is the most discriminating feature and the most awkward criterion (outcome unknown at the outset). Subsyndromal delirium — partial, transitory, on a continuum, sharing the risk factors and the increased mortality — is missed by the classifications and must not be missed by the clinician.",
    "Differentials: dementia (rapid decline from baseline; delirium can be prolonged; the premorbid history resolves); depression (affect-predominant, worse in the mornings against delirium's evenings; the elderly depressed delirium-prone; bereavement precipitating both); mania (rarer, often the first presentation on organic brain disease; the exhausted, dehydrated 'manic delirium'); the rare mimics (amnesic syndromes, epilepsia partialis continua, twilight states, Charles Bonnet syndrome, neuroleptic malignant syndrome, catatonia) — with the EEG where the picture stays inconclusive. The working rule: when in doubt, investigate and manage as delirium until the situation is clear.",
    "Diagnosis: two stages — diagnose the delirium, then find the causes, usually plural (the aetiological checklist: drugs, infection, metabolic/endocrine, cardiovascular, respiratory, intracranial, gastrointestinal including constipation). The informant history is essential; the MMSE flags sudden decline but is not diagnostic; the Delirium Rating Scale, the Confusion Assessment Method and the Delirium Symptom Interview are the proper screeners; screening is proactive on the risk-factor pairs — visual impairment, illness severity, cognitive impairment, BUN/creatinine ≥18; restraints, malnutrition, more than three medications, catheterisation, iatrogenic events.",
    "Management: (1) address every underlying cause — stop the anticholinergic, treat the infection, correct the metabolic derangement, clear the constipation, remove the catheter; (2) behavioural control with the environment first (light, low noise, clock, possessions, familiar people; procedures explained simply, slowly, clearly, repeatedly; holding the hand) and haloperidol 0.5–2 mg only when needed — prescriptions for up to 24 hours to force review, taper over 3–5 days once resolved, benzodiazepines (diazepam, lorazepam, alprazolam) where neuroleptics are not tolerated; (3) prevent the complications — falls for the hyperactive, pressure sores for the hypoactive, with incontinence, sleep, nutrition and mobilisation anticipated; (4) rehabilitate and support the family — ADLs, independence, recurrence teaching, community aftercare.",
    "Prevention and the Indian tier: the multi-component bundle (prescribing discipline, ward environment and routines, surgical routines) reduces incidence cost-effectively — the chapter's hopeful counterweight, with cholinesterase-inhibitor prevention a flagged research direction. In India: the quiet-ward problem (noise, night lights, absent clocks manufacturing the sensory insults); the mislabel cascade ('senile', 'weak', 'dementia ho gaya') ended by the single screening question — 'Is this how he usually is? When did the change start?'; the family member as the single most valuable diagnostic instrument and the formalised attendant role; the free polypharmacy audit (tricyclics, bladder antispasmodics, first-generation antihistamines in cold combinations, benzhexol); BUN/creatinine ≥18 in hot-season dehydration; and the bundle that costs discipline, not money.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ed-quiz-1",
      question: "The reason delirium is primarily a disease of old age:",
      options: ["Doctors simply look for it more diligently in the old", "Both individual vulnerability and external insults accumulate with age, and their interaction produces delirium", "Young brains are structurally immune to confusion", "It is genetically determined and late-expressing"],
      correctIndex: 1,
      explanation: "The vulnerability × insult model: rates of brain disease, sensory impairment, physical illness and deliriogenic medication all rise with age — the interaction, not any single factor, is the disease.",
      afterSectionId: "mechanism",
    },
    {
      id: "ed-quiz-2",
      question: "An 86-year-old on a medical ward has become drowsy, inattentive and quietly muddled over two days. The correct reading:",
      options: ["This is the commonest form of elderly delirium — and the more dangerous kind", "Normal ageing; no action needed", "Inevitably dementia; plan discharge", "A benign sleep state; observe only"],
      correctIndex: 0,
      explanation: "Hypoactive predominance and its paradox — quiet is not calm; the quiet patient is the sicker one, missed daily with causes untreated.",
      afterSectionId: "symptoms",
    },
    {
      id: "ed-quiz-3",
      question: "The BUN/creatinine ratio cited as a delirium risk factor in elderly medical patients:",
      options: ["5 or more", "10 or more", "18 or more", "40 or more"],
      correctIndex: 2,
      explanation: "Dehydration and pre-renal azotaemia join visual impairment, illness severity and cognitive impairment on the patient-side list — an everyday hot-season Indian number.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ed-quiz-4",
      question: "The appropriate haloperidol regime for behavioural control of delirium in the elderly:",
      options: ["10 mg daily in divided doses", "0.5–2 mg orally (IM if necessary), repeated until controlled; prescriptions for up to 24 hours to force review", "50 mg depot injection", "Full adult loading doses, halved on day 3"],
      correctIndex: 1,
      explanation: "Start low, prescribe short, taper over 3–5 days once resolved; benzodiazepines where neuroleptics are not tolerated — and the causes treated underneath always.",
      afterSectionId: "management",
    },
    {
      id: "ed-quiz-5",
      question: "The intervention with evidence of cost-effectively reducing delirium incidence in elderly inpatients:",
      options: ["Routine night sedation", "Multi-component interventions — prescribing discipline, ward environment, surgical routines", "Prophylactic antipsychotics for every admission", "Mandatory bed rest and quiet rooms"],
      correctIndex: 1,
      explanation: "The prevention bundle: drug-chart discipline, orientation, sensory correction, mobility, nutrition, hydration and good perioperative care — the care bundle, not a tablet.",
      afterSectionId: "indian-practice",
    },
    {
      id: "ed-quiz-6",
      question: "The morning/evening discriminator between depression and delirium:",
      options: ["Depression is worse in the evenings; delirium in the mornings", "Depression is worse in the mornings; delirium in the evenings", "Both are worse at midday", "Neither shows diurnal variation"],
      correctIndex: 1,
      explanation: "Add the affect-cognition balance: severe depression's cognitive impairment is mild relative to the affective disturbance; in delirium the reverse.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the vulnerability-insult model and explain why young and old delirium look different.", answer: "THE MODEL: delirium results from the interaction between individual vulnerability (brain disease, sensory impairment, frailty) and external insults (illness, drugs, environment) — and both sides of the equation accumulate with age, which is why delirium is primarily a geriatric disease. THE YOUNG BRAIN: a major insult is needed to derail it — and the resulting disturbance is dramatic: agitation, hallucinations, the florid stereotype built on centuries of observing younger patients. THE OLD BRAIN: cholinergic deficit, cerebrovascular burden and sensory deprivation having already loaded the see-saw, a whisper suffices — a urinary infection, a catheter, a room change — and the presentation is a REDUCED conscious level: drowsiness, poor attention, incoherent speech, underactivity. The interaction is multiplicative, not additive: each added hospital insult multiplies the vulnerable patient's odds — the finding that makes the prevention bundle rational and the single cause-hunt mandatory.", topic: "Mechanism" },
    { question: "What proportion of elderly delirium is hypoactive, and why do hypoactive patients fare worse?", answer: "MOST OF IT: the hypoactive form — reduced conscious level, poor attention and contact, incoherent speech, psychomotor underactivity, unawareness of surroundings — is the predominant elderly presentation; hyperactivity exists but is attenuated to purposeless behaviour such as pulling at bedclothes, with violence uncommon. THE PARADOX (the quieter, the sicker) has three engines: (1) RECOGNITION FAILURE — the quiet patient is mislabelled as calm, depressed or dementing, so the diagnosis and the screeners (Confusion Assessment Method and the rest) are never applied; (2) UNTREATED CAUSES — what is never diagnosed is never treated: the dehydration, the infection, the drug burden run on; (3) THE AETIOLOGY ITSELF — the rule of thumb: hypoactive pictures suggest metabolic causes, which are intrinsically graver derangements. The clinical corollary: quiet is not calm — the still patient gets the same urgency plus the pressure-area and feeding vigilance the noisy chart receives automatically.", topic: "Clinical practice" },
    { question: "State the four essential diagnostic features shared by ICD-10 and DSM-IV, and the subsyndromal caveat.", answer: "THE FOUR ESSENTIALS: (1) disturbance of consciousness; (2) disturbance of cognition; (3) rapid onset and fluctuating course; (4) evidence of an external cause. THE HONESTY: none of these features is specific to delirium versus dementia, and the current criteria predict outcome poorly — the classifications converge on the features and still miss the disease. REVERSIBILITY: the most discriminating feature of delirium from dementia — and the most problematic as a criterion, because the outcome is unknown at the outset (you cannot wait for recovery to make the diagnosis that triggers the treatment). Hence the working rule: when in doubt, investigate and manage as delirium until the situation is clear. THE SUBSYNDROMAL CAVEAT: partial and transitory disturbances are common in the elderly, lie on a continuum with the full syndrome, and share the same risk factors and the same increased mortality — treat partial pictures with full seriousness.", topic: "Diagnosis" },
    { question: "Give the morning/evening discriminator between depression and delirium, and the affect-cognition balance rule — and explain why bereavement can muddy both.", answer: "THE DISCRIMINATOR: depression is worse in the mornings; delirium is worse in the evenings — the diurnal variation read off the observation chart or the family's account. THE BALANCE RULE: in severe depression, the cognitive impairment is mild relative to the affective disturbance; in delirium, the reverse — the cognitive clouding dominates while the mood change is secondary. THE MUDDINESS: elderly depressed patients are delirium-prone in their own right (self-neglect, dehydration, the anticholinergic load of tricyclics prescribed for the very depression) — so the two conditions compound rather than alternate; and bereavement can precipitate both (the depressive episode and, in the frail griever, a delirium on broken sleep and missed meals). The practical conclusion: the discriminators are taught for the exam, but the ward's rule is the working rule — when in doubt, investigate and manage as delirium until the situation is clear.", topic: "Diagnosis" },
    { question: "List the patient-related and hospital-related risk factors (with the BUN/creatinine threshold), and explain what 'multiplicative' means for ward practice.", answer: "PATIENT-RELATED (the vulnerability side): visual impairment, severity of illness, cognitive impairment (dementia above all), and a BUN/creatinine ratio ≥18 — the dehydration/pre-renal azotaemia marker. HOSPITAL-RELATED (the insult side): use of restraints, malnutrition, more than three medications, bladder catheterisation, and the number of iatrogenic events. MULTIPLICATIVE means the factors do not add — they multiply: a vulnerable patient's odds rise steeply with each added hospital insult, so a single reversible ward factor (the catheter, the night opiate, the missing spectacles) can be decisive in the patient who was never going to survive two. The ward translation: the screening habit attaches to the patient-side list (whom to watch), and the prevention bundle attaches to the hospital-side list (what to remove) — you cannot change the dementia or the eyesight, but you can almost always change the catheter, the drug count and the clock.", topic: "Epidemiology" },
    { question: "Name three 'routine' elderly drugs with anticholinergic activity beyond the classic offenders, and explain why Alzheimer's patients are especially vulnerable.", answer: "THE ROUTINE CARRIERS (each individually small, cumulatively significant on polypharmacy): digoxin, prednisolone, cimetidine, ampicillin and warfarin — none thought of as psychotropics, all carrying anticholinergic activity in the aged body. THE CLASSIC OFFENDERS for contrast: the tricyclics, thioridazine and benzhexol — the worst of the list. THE PHARMACOLOGICAL REASON AGE MATTERS: distribution, metabolism and excretion change unpredictably, so toxicity arrives at 'therapeutic' doses. THE ALZHEIMER'S REASON: the cholinergic hypothesis of delirium — the Alzheimer's brain is already cholinergic-depleted, so its reserve is the thinnest on the ward and the same cumulative burden that a normal aged brain tolerates tips it — which is why the prevention bundle's prescribing discipline is addressed 'especially in Alzheimer's patients', and why the drug-chart review is a treatment, not a clerical task.", topic: "Pharmacology" },
    { question: "Quote the geriatric haloperidol rules: starting dose, prescription duration, taper, and the alternative when neuroleptics are not tolerated.", answer: "THE DOSE: haloperidol 0.5–2 mg orally (or IM if necessary), repeated until controlled — start lower than the young adult, always. THE PRESCRIPTION DURATION: short periods only, up to 24 hours — the written limit exists to force review, a system design rather than a dose choice: the quiet patient never prompts the reassessment, so the chart must. THE TAPER: once the delirium resolves, taper over 3–5 days — no abrupt stops, no standing prescriptions. THE ALTERNATIVE: where neuroleptics are not tolerated, a benzodiazepine — diazepam, lorazepam or alprazolam. THE PLACE: pharmacology is the last and lightest touch of the four-step management — step 1 (every cause treated) runs underneath every dose, and the environment (step 2a) precedes the prescription every time.", topic: "Pharmacology" },
    { question: "What are the three prevention-bundle areas, and what single Indian screening question replaces the risk calculator?", answer: "THE THREE AREAS: (1) PRESCRIBING DISCIPLINE — avoid deliriogenic drugs especially in Alzheimer's patients; regular drug-chart review; a minimum drug count; non-pharmacological sleep promotion instead of hypnotics. (2) WARD ENVIRONMENT AND ROUTINES — minimise disorientation, sensory impairment and sleep deprivation; maintain mobility; ensure adequate food and fluid; train staff in recognising and managing delirium. (3) SURGICAL ROUTINES — good pre-, peri- and postoperative care, infection control, blood pressure and oxygenation. THE EVIDENCE: multi-component interventions targeting poor clinical practice reduce inpatient incidence cost-effectively — the hopeful counterweight to the disease's gravity, and the reason no prophylactic tablet is on the list (cholinesterase-inhibitor prevention remains a flagged research direction). THE INDIAN QUESTION — asked to the family before any label settles: 'Is this how he usually is? When did the change start?' — the single question that stops the mislabel cascade ('senile', 'weak', 'dementia ho gaya') and opens the cause hunt, which is the entire diagnosis in a busy ward.", topic: "Management" },
  ],
  faqs: [
    { question: "Grandfather has become suddenly very demented — is this the end?", answer: "Not yet, and not necessarily: a rapid change from his usual self is delirium until proved otherwise — often reversible once its causes (infection, dehydration, drugs, constipation) are treated, even though recovery in the elderly can take weeks rather than days." },
    { question: "He is just lying quietly — at least he isn't agitated?", answer: "Quiet delirium is the MORE dangerous kind: it is missed, its causes go untreated, and it carries worse outcomes than the noisy form. Quiet is not calm — the stillness deserves the same urgency as the shouting." },
    { question: "The confusion hasn't cleared after a week, so it's dementia?", answer: "Not necessarily: elderly delirium can be prolonged — one-third of episodes are prolonged or recurrent. Treat everything treatable, reassess at recovery-speed rather than by the calendar, and only then re-examine the baseline." },
    { question: "Could his medicines be doing this?", answer: "Very commonly, yes: anticholinergic effects accumulate across ordinary-seeming prescriptions — and Alzheimer's patients are the most sensitive of all. The drug-chart review is a treatment, not a formality: bring every medicine, including the 'cold' combinations." },
    { question: "Was it the hospital that made him confused?", answer: "Partly, often: catheters, restraints, noise, lost spectacles, sleepless nights and immobility are proven precipitants — which is exactly why the prevention bundle targets them, and why your family member's presence, his glasses and his walking are therapy." },
    { question: "Will it come back?", answer: "One-third of patients have prolonged or recurrent episodes, and an episode can herald lasting vulnerability. Learn the early signs — new drowsiness, poor attention, night-time confusion — and seek care early next time." },
    { question: "Are there medicines to prevent it?", answer: "The proven prevention is the care bundle, not a tablet: disciplined prescribing, an orienting environment, mobility, food and fluid. The cholinesterase-inhibitor idea remains a research direction, not routine practice — nobody should be sold a prevention pill." },
    { question: "Should someone stay with him at night?", answer: "Where the ward allows it, yes — the familiar face is therapeutic: orientation, reassurance at the confused wakings, the early-warning recognition nobody else can supply. Ask the treating team how to make the attendant's presence work with the ward's routines rather than against them." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "British Geriatrics Society (2006) — guidelines for the prevention, diagnosis and management of delirium in older people in hospital" },
      { source: "ICD-10 and DSM-IV delirium criteria — the four essential features both systems share (the convergence this course teaches; the note's classification evidence base)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Inouye S.K. et al. — the multicomponent intervention to prevent delirium in hospitalised older patients (the prevention-bundle evidence the chapter cites; cost-effective incidence reduction)" },
    ],
    reviews: [
      { source: "Inouye S.K. et al. (1993) Ann Intern Med 119:474–81 — the predictive model for delirium in hospitalised elderly medical patients (the risk-factor list)" },
      { source: "Inouye S.K., Charpentier P.A. (1996) — precipitating factors for delirium in hospitalised elderly persons: the multiplicative interaction" },
      { source: "Inouye S.K. et al. (1990) Ann Intern Med 113:941–8 — clarifying confusion: the Confusion Assessment Method" },
      { source: "Levkoff S.E. et al. (1996) Am J Geriatr Psychiatry 4:320–9 — subsyndromal delirium (the continuum and its mortality)" },
      { source: "Treloar A.J., Macdonald A.J.D. (1997) Int J Geriatr Psychiatry 12:609–18 — outcome of delirium: reversibility as the discriminator" },
      { source: "Liptzin B. et al. (1991) Am J Psychiatry 148:451–7 — the empirical study of diagnostic criteria (the ICD/DSM discordance)" },
      { source: "Bowler C. et al. (1994) Age Ageing 23:307–11 — detection of psychiatric disorders in elderly medical inpatients (the missed-diagnosis evidence)" },
      { source: "Folstein M.F. et al. (1975) — the Mini-Mental State Examination (the screening role, not the diagnosis); Trzepacz P.T. et al. (1988) — the Delirium Rating Scale" },
    ],
    patientResources: [
      { source: "The single screening question — 'Is this how he usually is? When did the change start?' — the instrument this course hands to every Indian ward family" },
      { source: "The prevention bundle checklist for families: spectacles and hearing aids on, familiar attendant, day-night light rhythm, walked corridor, opened bowels, audited drug chart" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: why quiet confusion is an emergency, the causes that treat, and what the family's presence does.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The vulnerability × insult model, the hypoactive face, the differential trio, the four-step management with the haloperidol rules.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both clinical cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything — the screening-question craft, the drug-chart audit, the bundle deployment, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The vulnerability × insult arithmetic, the quiet face, the numbers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the model sentence and the hypoactive paradox cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The see-saw, the quiet dominance, the cholinergic thread.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the same infection fells the 85-year-old and spares the 40-year-old." },
    { number: 3, title: "Clinical Practice", description: "The two-stage work-up, the differential trio, the four-step management.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the screening question, the BUN/creatinine and the haloperidol rules without notes." },
    { number: 4, title: "Indian Context", description: "The quiet-ward problem, the family instrument, the free audits.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the single screening question and formalise the attendant's role." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the elderly-delirium essay cold and recite the risk-factor pairs." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Inouye S.K. et al. (1993) Ann Intern Med 119:474–81 — the predictive model for delirium in hospitalised elderly medical patients (the risk-factor list)", sourceType: "primary", year: "1993", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Inouye S.K., Charpentier P.A. (1996) — precipitating factors for delirium in hospitalised elderly persons: the multiplicative interaction", sourceType: "primary", year: "1996", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Inouye S.K. et al. (1990) Ann Intern Med 113:941–8 — clarifying confusion: the Confusion Assessment Method", sourceType: "primary", year: "1990", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Levkoff S.E. et al. (1996) Am J Geriatr Psychiatry 4:320–9 — subsyndromal delirium (the continuum, its risk factors and mortality)", sourceType: "primary", year: "1996", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Treloar A.J., Macdonald A.J.D. (1997) Int J Geriatr Psychiatry 12:609–18 — outcome of delirium: reversibility as the discriminating feature", sourceType: "primary", year: "1997", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Liptzin B. et al. (1991) Am J Psychiatry 148:451–7 — the empirical study of diagnostic criteria for delirium (the ICD/DSM discordance)", sourceType: "primary", year: "1991", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Bowler C. et al. (1994) Age Ageing 23:307–11 — detection of psychiatric disorders in elderly medical inpatients (the missed-diagnosis evidence)", sourceType: "primary", year: "1994", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Inouye S.K. et al. — the multicomponent intervention to prevent delirium in hospitalised older patients (the prevention-trial evidence cited in the chapter)", sourceType: "trial", year: "1999", dateReviewed: "2026-09-29" },
    { id: "S10", source: "British Geriatrics Society — guidelines for the prevention, diagnosis and management of delirium in older people in hospital", sourceType: "guideline", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Folstein M.F. et al. — the Mini-Mental State Examination: the screening role in the elderly (flagging sudden decline, not diagnosing)", sourceType: "primary", year: "1975", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Trzepacz P.T. et al. — a symptom rating scale for delirium (the Delirium Rating Scale)", sourceType: "primary", year: "1988", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The model: delirium results from the interaction between individual vulnerability (brain disease, sensory impairment, frailty) and external insults (illness, drugs, environment) — both accumulating with age, hence the geriatric predominance; a urinary infection, a catheter or a room change sufficing in the vulnerable old brain that would need a major insult when young.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "Hypoactive predominance: most elderly delirium presents as reduced conscious level, poor attention and contact, incoherent speech and underactivity; overactivity is purposeless (pulling at bedclothes), violence uncommon, self-injury the risk. The paradox: hypoactive patients are sicker — missed diagnoses with untreated causes, and metabolic aetiologies that are themselves graver (the rule of thumb: hyperactive suggests infection or toxicity/withdrawal, hypoactive suggests metabolic causes).", grade: "established", sources: ["S1", "S8"] },
    { text: "Epidemiology: community prevalence rising to 14% in those aged 85 and over; inpatient prevalence 10–30% and incidence 4–53%; consistently higher rates in hip-fracture patients; nursing-home residents comparably affected; one-third of episodes prolonged or recurrent.", grade: "established", sources: ["S1"] },
    { text: "Outcomes: increased mortality, longer hospital stays, functional decline and nursing-home discharge; persistent cognitive decline after an episode, with delirium episodes marking the start of the decline that can run on to dementia.", grade: "established", sources: ["S1", "S6"] },
    { text: "The risk-factor pairs and their multiplicative interaction: patient-side (visual impairment, illness severity, cognitive impairment, BUN/creatinine ratio ≥18) × hospital-side (restraints, malnutrition, more than three medications, bladder catheterisation, iatrogenic events).", grade: "established", sources: ["S2", "S3"] },
    { text: "The anticholinergic burden: age changes distribution, metabolism and excretion unpredictably (toxicity at 'therapeutic' doses); tricyclics, thioridazine and benzhexol the worst offenders; digoxin, prednisolone, cimetidine, ampicillin and warfarin carrying routine loads that sum on polypharmacy; Alzheimer's patients especially vulnerable through already impaired cholinergic function.", grade: "established", sources: ["S1"] },
    { text: "Classification honesty: ICD-10 and DSM-IV share four essentials (disturbance of consciousness, disturbance of cognition, rapid onset and fluctuating course, evidence of an external cause), none specific to delirium versus dementia, with poor outcome prediction; reversibility the most discriminating feature and the most awkward criterion; subsyndromal delirium a real continuum sharing the risk factors and the increased mortality of the full syndrome.", grade: "established", sources: ["S7", "S5", "S1"] },
    { text: "The differentials: dementia (rapid decline from baseline; delirium can be prolonged — failure to recover quickly does not by itself mean dementia; the premorbid history resolves it); depression (affective-predominant, worse in the mornings against delirium's evenings); mania (rarer, often first presentation on organic brain disease, the exhausted-dehydrated 'manic delirium'); the rare mimics (Charles Bonnet syndrome, catatonia, neuroleptic malignant syndrome, epilepsia partialis continua) — EEG where the picture is inconclusive; the working rule: manage as delirium until clear.", grade: "established", sources: ["S1", "S6"] },
    { text: "Management: the four steps — (1) identify and treat ALL causes; (2) behavioural control with the environment first and haloperidol 0.5–2 mg orally (or IM), repeated until controlled, prescriptions for up to 24 hours to force review, taper over 3–5 days once resolved, benzodiazepines (diazepam, lorazepam, alprazolam) where neuroleptics are not tolerated; (3) complications prevented (falls and pressure sores); (4) rehabilitation and family support with recurrence teaching.", grade: "established", sources: ["S1", "S10"] },
    { text: "Prevention: multi-component interventions targeting poor clinical practice reduce inpatient incidence cost-effectively — prescribing discipline, ward environment and routines, surgical routines; the cholinergic hypothesis makes cholinesterase inhibitors a plausible future preventive option, a research direction the chapter flags (not routine practice).", grade: "established", sources: ["S9", "S10", "S1"] },
    { text: "Screening and instruments: consider delirium whenever cognitive decline is rapid from whatever baseline; the informant history essential; MMSE not diagnostic but a flag for sudden decline; the Delirium Rating Scale, the Confusion Assessment Method and the Delirium Symptom Interview the proper screeners, applied proactively on the risk factors.", grade: "established", sources: ["S4", "S11", "S12", "S1"] },
    { text: "The Indian tier: the quiet-ward problem (crowded wards manufacturing the sensory-environmental insults); the mislabel cascade ended by the single screening question ('Is this how he usually is? When did the change start?'); the family member as the single most valuable diagnostic instrument and the formalised attendant role; the free polypharmacy audit; BUN/creatinine ≥18 in hot-season dehydration; haloperidol among the cheapest drugs in India and the prevention bundle costing discipline, not money (approx 2026).", grade: "supported", sources: ["S1"], note: "KYP Indian-practice layer from the note's section 10; the note cites no separate Indian-source lineage — the screening habit and family-instrument framing are the note's own." },
  ],
};
