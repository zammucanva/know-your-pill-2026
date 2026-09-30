import type { PsychiatryCourse } from "./types";

/**
 * ALZHEIMER'S DISEASE & DEMENTIA — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/alzheimers-dementia.md — untouched foundation),
 * re-researched against current guidance (DSM-5 major neurocognitive
 * disorder logic, the Lancet Commission life-course prevention framing,
 * the 10/66 India prevalence work, the Dementia India Report 2020,
 * the cholinesterase-inhibitor and memantine evidence tiers) with
 * per-claim provenance.
 *
 * Drug routes: donepezil, rivastigmine, galantamine, memantine and the
 * anti-amyloid antibodies have no KYP drug lessons — the full
 * symptomatic pharmacology is taught here and recorded in contentGaps,
 * never invented. No antidepressant earns a primary route for the core
 * syndrome; comorbid depression is taught in management.
 */
export const alzheimersDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "alzheimers-dementia",
  title: "Alzheimer's Disease & Dementia",
  shortName: "Alzheimer's dementia",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Alzheimer's Disease & Dementia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The gradual erasure — six in ten dementias, incurable but very much treatable",
  summary:
    "Alzheimer's disease is the commonest dementia: progressive loss of memory, thinking and daily function over years. New anti-amyloid antibodies can modestly slow decline in selected early disease without curing it; management rests on realistic drug expectations, behavioural discipline and family support.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define dementia in one sentence and distinguish it from normal ageing, mild cognitive impairment, delirium and depression.",
    "Describe the natural course of Alzheimer's disease across early, middle and late stages — and the predictable symptom sequence.",
    "Explain amyloid and tau in plain words, and why 'plaques and tangles' do not tell the whole story.",
    "List the risk factors, separating the non-modifiable (age, APOE ε4, family history, Down syndrome) from the modifiable life-course tier.",
    "Assemble a practical diagnostic work-up: collateral history, cognitive testing, bloods, imaging — and know what biomarkers add.",
    "Use the antidementia drug groups with realistic expectations, doses and monitoring.",
    "Manage the behavioural and psychological symptoms of dementia (BPSD) without defaulting to sedation.",
    "Advise an Indian family on caregiver support, legal and financial planning, and available services.",
  ],
  quickFacts: [
    { label: "The share", value: "6 in 10 dementias", detail: "Alzheimer's is 50–70% of all dementia; vascular second; DLB and FTD follow — 'mixed dementia' is the rule in old brains, not the exception" },
    { label: "The prevalence rule", value: "Doubles every 5–6 years after 65", detail: "About 5–8% at 65+, well above 20% after 85; WHO frames ~55–57 million people worldwide, projected to roughly triple by 2050" },
    { label: "The first room to burn", value: "Hippocampus (the memory gate)", detail: "The spread follows connected networks like a slow forest fire: memory, then language, then visuospatial, then frontal judgement, finally motor and swallowing — the symptoms arrive in predictable sequence" },
    { label: "The silent decades", value: "Amyloid visible 10–20 years before symptoms", detail: "The brain's reserve compensates for years; dementia begins when reserve runs out — why education and bilingualism delay symptoms though not the disease" },
    { label: "The chemistry that fades", value: "Nucleus basalis of Meynert → cortical acetylcholine", detail: "These cells die early — exactly what cholinesterase inhibitors act on: squeeze the remaining supply harder, months of function, not a reversal" },
    { label: "The modifiable share", value: "~40–45% of risk theoretically modifiable", detail: "The Lancet Commission life-course view: midlife hypertension, diabetes, obesity, smoking; hearing loss, isolation, depression, inactivity later — population odds, not personal guarantees" },
    { label: "The genetic tier", value: "APOE ε4: 2–3× (one copy), ~10–15× (two)", detail: "Many carriers never develop dementia; rare APP/PSEN1/PSEN2 families (under 1%) cause the 40s–50s autosomal-dominant form; Down syndrome carries near-universal pathology by the 40s" },
    { label: "The India numbers", value: "~8.8 million over 60 (Dementia India Report 2020)", detail: "10/66 studies found Indian prevalence comparable to high-income countries — demolishing the 'families immunise' belief; treatment gap quoted in the 90% range" },
  ],
  knowledgeGraph: [
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The acute impostor and the frequent overlay — sudden worsening on a dementing brain is delirium until proven otherwise" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The visual-hallucination-and-parkinsonism sibling in the differential" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The behaviour-or-language-first, memory-preserved, under-65 contrast" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The subcortical-to-cortical cousin; the antipsychotic-sensitivity territory" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Pseudodementia — the treatable mimic: treat mood and re-test in 2–3 months" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The learning-and-attention chemistry lost early — the therapeutic target" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The memory gate — the first region to shrink in typical Alzheimer's" },
    { label: "Nucleus basalis of Meynert", type: "brain-region", href: "#brain", note: "The cholinergic supply to the cortex — dies early; the drugs squeeze what remains" },
    { label: "Amitriptyline", type: "drug", href: "/drugs/amitriptyline/", note: "The anticholinergic caution: prescribing it to someone on donepezil directly opposes the remaining chemistry" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry Alzheimer's. The fire that starts in the memory room: two abnormal proteins build up — amyloid-β clumping between cells into sticky plaques, and tau twisting inside neurons into tangles that strangle their transport systems. The process starts silently in the hippocampus, the brain's memory gate, and spreads along connected networks like a slow forest fire: first memory, then language, then visuospatial function, then the frontal lobes holding judgement and behaviour, finally the motor and swallowing centres — the order of spread is why the symptoms arrive in such a predictable sequence. The chemical that fades: a small cluster of cells deep in the base of the brain (the nucleus basalis of Meynert) supplies acetylcholine to the cortex, the chemical of learning and attention; these cells die early in Alzheimer's, and the memory medicines do not douse the fire — they squeeze the remaining acetylcholine harder (cholinesterase inhibitors stop its breakdown): a genuine but modest gain, months of preserved function, not a reversal. The brain fighting back, and losing slowly: the brain's immune cells (microglia) clear amyloid for years — there is a long silent stage (amyloid visible on scans 10–20 years before symptoms) while the system compensates. Dementia begins when reserve runs out: the brain has been shrinking quietly, and the moment it can no longer compensate, decline becomes visible and steadily progressive — which is also why intellectual reserve (education, bilingualism, complex work) delays the symptoms though not the underlying disease.",
    steps: [
      "Amyloid-β accumulates between cells into sticky plaques — silently, 10–20 years before the first symptom.",
      "Tau twists inside neurons into tangles that strangle transport — and tracks better than amyloid with how severe the disease is.",
      "The fire starts in the hippocampus (the memory gate) and spreads along connected networks: memory → language → visuospatial → frontal judgement → motor and swallowing.",
      "The nucleus basalis of Meynert's cholinergic projection to cortex dies early — the chemical of learning and attention fades.",
      "Microglia clear amyloid for years; the long silent stage is active compensation, not absent disease.",
      "Dementia declares when reserve runs out: the shrinking brain can no longer compensate — visible, steadily progressive decline begins.",
      "The therapies mirror the chemistry: cholinesterase inhibition squeezes the remaining acetylcholine (months of function); memantine protects neurons from glutamate over-stimulation; anti-amyloid antibodies attempt the fire itself (early, costly, risky).",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "hippocampus", name: "Hippocampus (the memory gate)", role: "The first region to shrink in typical Alzheimer's — why recent memory goes first while old memories stay vivid.", grade: "established" },
    { id: "nucleus-basalis", name: "Nucleus basalis of Meynert", role: "The cholinergic supply line to cortex — dies early; the direct target of cholinesterase inhibitors.", grade: "established" },
    { id: "temporo-parietal", name: "Temporo-parietal cortex", role: "Language and visuospatial networks — the second and third rooms to burn: word-finding failure, getting lost on familiar routes.", grade: "established" },
    { id: "frontal-lobes", name: "Frontal lobes", role: "Judgement, behaviour, self-monitoring — late involvement explains both the middle-stage BPSD and anosognosia ('not knowing one is ill').", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The chemistry of learning and attention — lost early via nucleus basalis degeneration; the target of the first-line drug tier.", grade: "established", drugConnection: "Why anticholinergic drugs (bladder drugs, first-generation antihistamines, tricyclics like amitriptyline) directly oppose what little remains — the avoid-list of every prescription." },
    { name: "Glutamate", symbol: "Glu", role: "The excitatory workhorse — excessive stimulation damages compromised neurons; memantine's modulatory target in moderate-severe disease.", grade: "supported", drugConnection: "Memantine (NMDA antagonism) protects neurons from glutamate over-stimulation — the second-line add-on tier." },
    { name: "Serotonin", symbol: "5-HT", role: "Secondarily disturbed — contributes to the apathy, sleep disruption and depression comorbidity of the middle stage.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "spread-pathway",
      name: "The slow forest fire (network spread)",
      steps: [
        { label: "Hippocampus first", detail: "The memory gate shrinks — recent events vanish while old memories stay vivid; the same question ten times a day" },
        { label: "Language networks next", detail: "Names of people and things slip; speech becomes vague ('that thing for that')" },
        { label: "Visuospatial cortex follows", detail: "The familiar route becomes strange; found near the market unable to explain the way home" },
        { label: "Frontal lobes late", detail: "Judgement, money handling and behaviour fail — the scams, the accusations, the BPSD" },
        { label: "Motor and swallowing centres last", detail: "Bed-bound, feeding failure, aspiration pneumonia and sepsis close the final chapter — 8–12 years typical from diagnosis" },
      ],
      clinicalManifestation: "The predictable symptom sequence of the retired headmistress: repeating questions → lost near the market → accounts to the son → full care.",
      grade: "established",
    },
    {
      id: "reserve-pathway",
      name: "The reserve exhaustion (why symptoms start when they do)",
      steps: [
        { label: "The silent decades", detail: "Amyloid visible on scans 10–20 years before symptoms; microglia clearing it for years" },
        { label: "Compensation holds", detail: "Education, bilingualism, complex work build reserve — the pathology advances while function holds" },
        { label: "Reserve runs out", detail: "The shrinking brain can no longer compensate — decline becomes visible and steadily progressive" },
        { label: "The intervention window was earlier", detail: "MCI (10–15% yearly conversion) is where prevention advice is most worth giving — the stage this course's quickFacts arm" },
      ],
      clinicalManifestation: "The 71-year-old who 'suddenly' began failing — twenty years of quiet pathology crossing the reserve threshold.",
      grade: "supported",
    },
    {
      id: "cholinergic-pathway",
      name: "The chemical squeeze (what the drugs actually do)",
      steps: [
        { label: "The supply dies", detail: "Nucleus basalis cholinergic neurons degenerate — cortical acetylcholine fades" },
        { label: "The drugs squeeze harder", detail: "Cholinesterase inhibitors stop the breakdown of what remains — donepezil 5→10 mg, rivastigmine, galantamine" },
        { label: "A modest, real gain", detail: "Months of stabilised cognition and function; a meaningful minority clearly improve in daily activity" },
        { label: "Never a reversal", detail: "The disease continues underneath — the honest framing every family deserves at the first prescription" },
      ],
      clinicalManifestation: "The donepezil-plus-routine package that held the headmistress at personal care for 18 months while the illness continued.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "silent-stage", time: "10–20 years", title: "The silent accumulation", description: "Amyloid plaques accumulate between cells while microglia clear them; the person functions normally — the intervention window the life-course prevention list targets.", phase: "onset" },
    { id: "mci-stage", time: "1–5 years", title: "The slipping foothold (MCI)", description: "Complaints with test deficits but independence preserved; roughly 10–15% convert to dementia each year — the stage where prevention advice is most worth giving.", phase: "onset" },
    { id: "early-stage", time: "Years 1–3", title: "The covered-up early stage", description: "Repeating questions, odd misplacements, vague speech, money errors, defensive jokes; insight patchy and bravely denied — the family usually notices first while the person hides mistakes.", phase: "peak" },
    { id: "middle-stage", time: "Years 3–8", title: "The reorganised household", description: "Disorientation, wandering, apraxia, suspicion and misidentification, BPSD, incontinence; the family reorganises around the illness — accounts move, routines fix, ID cards appear.", phase: "duration" },
    { id: "late-stage", time: "Final 1–3 years", title: "The quiet ending", description: "Speech reduces to phrases then muteness; full care, feeding and turning; swallowing fails — aspiration pneumonia and sepsis close the chapter; 8–12 years the typical span from diagnosis, with wide variation.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "WHO frames ~55–57 million people living with dementia worldwide, projected to roughly triple by 2050. Prevalence roughly DOUBLES every 5–6 years after age 65: about 5–8% at 65+, well above 20% after 85. Alzheimer's is 50–70% of all dementia; vascular second; DLB and FTD follow. More women than men live with dementia, largely because women live longer. Dementia is now among the leading causes of disability and dependence in older people, and one of the costliest chronic conditions for families and health systems.",
    indianPrevalence: "The Dementia India Report 2020 (ARDSI) estimated about 8.8 million Indians above 60 with dementia, projected to rise steeply by 2050 as life expectancy grows (the older 2010 report estimated ~3.7 million; methods differ). The landmark 10/66 Dementia Research Group studies in rural Tamil Nadu and Kerala found prevalence in elderly Indians COMPARABLE TO, and at some sites higher than, high-income countries — demolishing the old belief that Indian families somehow 'immunise' against dementia. The National Mental Health Survey of India 2015–16 found geriatric mental morbidity high and treatment nearly absent; the treatment gap is commonly quoted in the 90% range in community terms. Care is overwhelmingly home-based: fewer than a fraction of a percent access day-care or residential services; the median primary carer is a daughter or daughter-in-law, often with no respite.",
    lifetimeRisk: "One first-degree relative with late-onset disease roughly doubles risk; APOE ε4 raises it 2–3× (one copy) or ~10–15× (two), though many carriers never develop dementia; the rare autosomal-dominant families (APP, PSEN1, PSEN2 — under 1%) cause onset in the 40s–50s.",
    genderRatio: "More women than men affected, largely because women live longer; some evidence also suggests their risk per year lived post-menopause is somewhat higher.",
    ageOfOnset: "Rare before 60 unless genetic (autosomal-dominant families, Down syndrome's extra APP dose producing near-universal pathology by the 40s); the classic terrain is 65+ with the doubling rule.",
    indianNotes: "Rapidly rising diabetes and hypertension, widespread uncorrected hearing loss, rising air pollution, and mass rural-to-urban migration leaving elders isolated all push the future caseload up. Conversely: physical work, lifelong social engagement, and cognitive reserve from literacy appear protective in Indian cohort data.",
  },
  etiology: [
    { category: "genetic", factor: "The inherited tiers", details: "APOE ε4 — the common risk variant for late-onset disease (roughly 2–3× with one copy, ~10–15× with two; many carriers never develop dementia); rare autosomal-dominant families with APP, PSEN1, PSEN2 mutations cause onset in the 40s–50s (under 1% of all Alzheimer's); Down syndrome's extra chromosome 21 APP gene dose produces near-universal Alzheimer's pathology by the fourth decade — plan for it." },
    { category: "biological", factor: "Age and the non-modifiable base", details: "Age is the strongest risk by far; family history (one first-degree relative with late-onset disease roughly doubles risk); female longevity (with a possible per-year post-menopausal excess); head injury with loss of consciousness raises later risk — relevant to contact sports and road-traffic injury in India." },
    { category: "biological", factor: "The modifiable life-course tier", details: "Midlife hypertension, diabetes, obesity, smoking, excessive alcohol; later-life physical inactivity, social isolation, depression, untreated hearing loss, air pollution, and low early-life education — the Lancet Commission synthesis suggests a large minority of dementia risk (potentially ~40–45%) is theoretically modifiable; the honest caveat: reducing these risks shifts population odds, not personal guarantees." },
    { category: "social", factor: "The Indian risk landscape", details: "Rising diabetes and hypertension prevalence; uncorrected hearing loss at population scale; air pollution; rural-to-urban migration of the young leaving elders isolated — against which Indian cohort data shows physical work, lifelong social engagement and literacy-derived cognitive reserve as protective." },
    { category: "psychological", factor: "The treatable amplifiers", details: "Depression (both a mimic — pseudodementia — and a probable risk amplifier), social isolation, sleep disruption; each is screenable and modifiable in the MCI window where prevention advice is most worth giving." },
  ],
  symptomClusters: [
    {
      category: "1. Early stage (the family notices; the patient covers up)",
      symptoms: ["Repeating questions; conversations loop — recent events forgotten while old memories stay vivid", "Misplacing objects in odd places (keys in the fridge); losing the way on familiar routes", "Word-finding trouble: names slip; speech becomes vague ('that thing for that')", "Poor handling of money: paying twice, falling for scams, difficulty with change", "Personality subtleties: less initiative, irritability when challenged, defensive jokes to hide slips", "Insight patchy and often bravely denied — the person hides mistakes before anyone else sees them"],
    },
    {
      category: "2. Middle stage",
      symptoms: ["Disorientation to time then place; mixing day and night; wandering and getting lost in one's own lane", "Apraxia: cannot sequence dressing, cooking, shaving, using a phone; asks for objects that are in hand", "Suspicion and misidentification: accuses family of stealing, does not recognise a mirror image, asks for dead relatives", "BPSD: agitation, restlessness, repetitive calling out, sleep reversal, hoarding, aggression during personal care", "Incontinence appears; personal hygiene needs prompting then doing-for"],
    },
    {
      category: "3. Late stage",
      symptoms: ["Speech reduces to phrases, then words, then muteness", "Recognises few; needs full feeding, toileting and turning; eventually bed-bound", "Swallowing fails; aspiration pneumonia and sepsis close the final chapter", "8–12 years the typical span from diagnosis, with wide variation"],
    },
    {
      category: "4. The cross-cutting signs to name",
      symptoms: ["Anosognosia — 'not knowing one is ill' — common and NOT stubbornness; damaged self-monitoring circuits cannot see the deficit", "BPSD as communication: behaviour is the language of physical discomfort (pain, impaction, urine, hunger, environment, sleep)", "Sudden worsening is NOT the dementia — it is delirium on the dementia until proven otherwise"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 logic (paraphrased)",
      code: "Major neurocognitive disorder (dementia)",
      criteria: [
        "A noticeable decline from the person's OWN baseline in one or more thinking domains — memory, language, executive function, attention, visuospatial or social cognition — confirmed by testing AND by daily-life loss of independence.",
        "Not occurring only in delirium.",
        "Not better explained by another brain disease or substance.",
        "Probable Alzheimer's disease: insidious onset, gradual progression, the lost domains following the typical Alzheimer's pattern, and no other explanation found — ICD-11 carries the same architecture under its own code structure.",
      ],
      duration: "Months to years — the pace itself separates it from delirium (hours-days) and depression (weeks-months).",
      indianNote: "The path to diagnosis is typically 2–3 years long in India — families normalise the early stage as 'old age' until wandering or accusations force a consultation.",
    },
    {
      system: "The work-up (mostly clinical)",
      code: "History, testing, bloods, imaging",
      criteria: [
        "Collateral history is the spine of the diagnosis: onset, pace, what was lost first, driving, money, medicines, alcohol, hearing and vision, mood, sleep — always interview the family separately.",
        "Bedside cognitive testing: informant questionnaires (IQCODE-style) plus brief tests — MMSE or MoCA (named; items not reproduced; MoCA more sensitive for early disease; Hindi and other Indian-language adaptations exist and should be used for non-English speakers).",
        "Functional yardstick: what can he still do without help — the hinge that 'major' vs 'mild' turns on.",
        "Bloods to exclude the treatable mimics, in EVERY new case: thyroid function, vitamin B12 (folate), complete blood count, sugar, kidney and liver function, calcium; VDRL and HIV where risk-appropriate — cheap in India and catches the reversible impostors.",
        "Imaging: structural CT/MRI to exclude tumour, subdural, hydrocephalus and vascular burden, and to view hippocampal volume; a NORMAL-looking brain does not exclude Alzheimer's — early scans often look near-normal.",
        "Biomarkers (tertiary centres): CSF amyloid/tau ratios, amyloid or tau PET — mainly for younger or atypical cases, increasingly to qualify for anti-amyloid antibodies; expensive, debated, essentially unavailable in routine Indian public care.",
        "The stage-language to know: MCI / mild neurocognitive disorder = complaints with test deficits BUT independence preserved; roughly 10–15% convert yearly — the prevention-advice stage.",
      ],
      duration: "The work-up is a clinic-day affair (collateral + testing + bloods) with imaging where indicated — the diagnosis is clinical, not a scan result.",
      indianNote: "Push for the minimum everywhere: thyroid, B12, sugar and a documented cognitive score — cheap and decisive; those who cannot pay often get a label without even the basic bloods, and that is the correctable error.",
    },
  ],
  severityScales: [
    {
      name: "The functional staging ladder",
      fullName: "Early–middle–late clinical staging of Alzheimer's disease",
      measures: "The lived course — what is lost, what remains, what the family must now carry.",
      ranges: [
        { min: 0, max: 0, severity: "Early (independence with slips)", action: "Repeating questions, odd misplacements, money errors; still manages the day with cover-ups — diagnose here (collateral + testing + mimic bloods), start planning while insight allows" },
        { min: 1, max: 1, severity: "Middle (the reorganised household)", action: "Disorientation, wandering, apraxia, suspicion, BPSD, incontinence — the BPSD-trigger checklist rules behaviour; safety review (gas, stove, wandering, money); carer roster formalised" },
        { min: 2, max: 2, severity: "Late (full care)", action: "Mutism, bed-boundness, swallowing failure — comfort-focused care, honest feeding conversations BEFORE the crisis, ethical tapering of the drug tier when it has clearly stopped helping" },
      ],
      indianNote: "The Indian stage-marks are practical: the accounts moving to the son, the ID card with address, the temple-park walking group, the daughter-in-law's roster — each stage has its family engineering.",
    },
    {
      name: "The MCI hinge",
      fullName: "Mild cognitive impairment vs dementia",
      measures: "Independence — the single variable that separates 'worried and slipping' from 'the disease'.",
      ranges: [
        { min: 0, max: 0, severity: "Normal ageing", action: "Slower recall but independent function; recognises 'I forgot where I parked' vs dementia's 'I forgot I parked' — reassure, no disease label, life-course prevention advice still worth giving" },
        { min: 1, max: 1, severity: "MCI", action: "Complaints + objective deficits + independence preserved; ~10–15% yearly conversion — the prevention-advice stage, the window this course's modifiable-risk tier targets" },
        { min: 2, max: 2, severity: "Dementia (major NCD)", action: "Tested deficits + loss of independence in daily life — the full diagnostic, planning and treatment architecture of this course" },
      ],
      indianNote: "The MCI conversation is the Indian clinic's highest-leverage moment: the family that hears 'slipping but not the disease yet' will accept the walking, hearing, sugar and blood-pressure advice that shifts the odds.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Depression ('pseudodementia')", distinguishingFeatures: "Onset in weeks; 'I don't know' answers and poor effort on testing but intact when coaxed; often says memory is terrible; appetite, sleep and mood change together.", keyDifferentiator: "Treat depression and RE-TEST in 2–3 months — pseudodementia may be the first face of a real dementia, and only the retest tells." },
    { condition: "Delirium", distinguishingFeatures: "Sudden, fluctuating, inattention, illness or drug trigger — the dementia patient who 'changed overnight' with snakes seen and son unrecognised.", keyDifferentiator: "Any sudden change on a dementing brain is delirium until proven otherwise: urine test and sodium first (the two classic Indian reversible triggers)." },
    { condition: "Normal ageing", distinguishingFeatures: "Slower recall but functions independently; recognises the lapse ('I forgot where I parked') rather than the event ('I forgot I parked').", keyDifferentiator: "Ageing never takes away independence — the functional yardstick, not the memory complaint, separates them." },
    { condition: "Vascular dementia", distinguishingFeatures: "Stepwise course, hypertension and stroke history, early gait disturbance and slowing; the subcortical, apathetic-front.", keyDifferentiator: "The pace (stepwise vs insidious) plus the vascular burden on imaging — and 'mixed dementia' is the rule in old brains, so treat the vascular risk either way." },
    { condition: "Hypothyroidism / B12 deficiency", distinguishingFeatures: "Slow thinking with the systemic picture, recent onset — the vegetarian elderly Indian's mandatory B12 screen.", keyDifferentiator: "Test and treat: cheap, decisive and fully reversible if caught — the bloods that belong in every single new case." },
    { condition: "Normal-pressure hydrocephalus", distinguishingFeatures: "The triad: gait disorder FIRST, then urinary incontinence, then cognition — magnetic gait on the way to the scanner.", keyDifferentiator: "MRI and a neurosurgical opinion — the potentially surgical dementia that must not be missed." },
    { condition: "Frontotemporal dementia", distinguishingFeatures: "Behaviour or language first, memory preserved, onset under 65 — the disinhibited or aphasic presentation that families read as 'personality change' or 'madness'.", keyDifferentiator: "What is lost FIRST: FTD takes conduct and speech while the hippocampal memory gate holds; Alzheimer's takes memory while conduct holds longer." },
  ],
  management: [
    { category: "lifestyle", name: "The first-month family foundation", description: "Name the illness honestly; correct the 'just old age' and 'madness' beliefs. Register the illness, not just the medicine: a written plan, a named carer roster, a safety review (gas, stove, wandering, money), and legal steps WHILE INSIGHT ALLOWS. Write down the cognitive reserve advice: daily walking, music, prayer, social contact, fixed routines — the life the person still has slows the slide.", whenToUse: "Every newly diagnosed family, in the same month as the diagnosis — the plan is the treatment.", indianContext: "The Indian family IS the treatment team: the daughter-in-law at 24×7 — every prescription includes a carer check-in because the caregiver's health is the patient's health." },
    { category: "pharmacotherapy", name: "Acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine)", description: "Donepezil start 5 mg at night, may rise to 10 mg after 4–6 weeks; rivastigmine oral or patch; galantamine. Use in mild–moderate disease. Expected effect: a modest stabilisation — months of retained function; a meaningful minority show clear improvement in daily activity. Not a cure; the disease continues underneath. Reassess cognition, function and behaviour every 3–6 months; when the drug has clearly stopped helping in late-stage disease, tapering is ethical and honest.", whenToUse: "Mild–moderate Alzheimer's disease, once the diagnosis is established and the family holds realistic expectations.", indianContext: "Generic donepezil 5–10 mg and memantine are inexpensive: donepezil roughly ₹150–400/month, memantine similar (approx 2026, varies by brand/state/scheme); the rivastigmine patch is far costlier and rarely needed first." },
    { category: "pharmacotherapy", name: "Memantine (NMDA antagonism)", description: "Start 5 mg, titrate to 20 mg/day; add or switch in moderate–severe disease; helps cognition a little and agitation in some; well tolerated in elderly kidneys — the glutamate over-stimulation protector.", whenToUse: "Moderate–severe disease, or when cholinesterase inhibitors are not tolerated.", indianContext: "Inexpensive generic availability keeps it accessible; where cost blocks even the drug tier, prioritise the free things — routines, walking, hearing and vision treated, pain and constipation treated: these often help behaviour more than tablets." },
    { category: "psychotherapy", name: "BPSD: treat the trigger, not just the symptom", description: "Work the mnemonic backwards: Pain, Faecal impaction, Urinary infection, Hunger/thirst, Environment (noise, dark, new room), Sleep — in dementia, behaviour IS the language of physical discomfort. Non-drug first: same carer, same routine, bright days and dark nights, music, walks, one instruction at a time, do WITH not TO; redirect rather than argue. If a drug is truly needed: smallest dose, fixed review date — short-term low-dose quetiapine or risperidone has the best pragmatic evidence, only if danger or distress outweighs the risks (mortality and stroke signal); SSRIs if depression drives the picture.", whenToUse: "Every behaviour change, before any prescription — the checklist IS the first prescription.", indianContext: "The Indian household's routines (fixed meal and prayer times, familiar music, the same carer) are the BPSD architecture — formalise them rather than replacing them with sedation." },
    { category: "lifestyle", name: "The comorbidity discipline (the diseases that travel with it)", description: "Keep treating blood pressure, diabetes, lipids, hearing, vision, dental, feet, and constipation — vascular risk control protects the brain from a SECOND illness, and 'mixed dementia' is the rule in old brains, not the exception.", whenToUse: "Every review visit — the vascular tier is brain medicine.", indianContext: "The tonic-refusal script: nearly every Indian family asks for a 'brain tonic' or 'memory injection' — say clearly that none of the marketed tonics, high-dose multivitamin combos or ginkgo products has convincing evidence; that saves money and keeps trust in the medicines that do work." },
  ],
  safety: {
    redFlags: [
      "Sudden worsening in a known dementia — delirium until proven otherwise: check urine and sodium first (the two classic Indian reversible triggers)",
      "New wandering or getting lost — the ID card with address and phone number becomes a safety-critical intervention, not an afterthought",
      "Accusations, misidentification and aggression during care — the BPSD trigger checklist before ANY prescription (pain, impaction, urine, hunger, environment, sleep)",
      "Long-term antipsychotic prescriptions for BPSD — the mortality and stroke signal; smallest dose, fixed review date, and a documented stop attempt",
      "The anticholinergic opposition: bladder drugs, first-generation antihistamines or tricyclics prescribed to someone on donepezil — directly opposing the remaining chemistry",
      "Falling for financial scams and money errors — the joint-mandate and legal tier while insight allows, before the crisis rather than during it",
    ],
    urgentGuidance:
      "The order of operations: (1) any SUDDEN change = delirium work-up (urine, sodium, infection, drugs) before blaming the dementia; (2) any behaviour change = the trigger checklist before any prescription; (3) wandering risk = ID card, door alarms, the family roster — same week as the risk appears; (4) driving and stove safety reviewed with the family by name; (5) the carer check-in at every visit — carer breakdown is the commonest reason families hospitalise a stable patient; (6) legal planning (joint mandates, nominees, advance directives under the Mental Healthcare Act 2017) while insight allows — nomination and access problems, not medicine, are the commonest late-stage crises.",
  },
  drugLinks: [
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      role: "The anticholinergic caution — the drug that opposes the treatment",
      rationale: "The classic exam-and-clinic trap: prescribing an anticholinergic tricyclic (for sleep, for pain, for bladder symptoms) to someone on a cholinesterase inhibitor directly opposes what little acetylcholine remains. The KYP lesson shows the full anticholinergic receptor profile behind the warning — the avoid-list every dementia prescription carries.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "Linked as a CAUTION, not a treatment: in established Alzheimer's the anticholinergic burden accelerates decline and worsens cognition — the drug belongs on the stop-list.",
    },
  ],
  contentGaps: [
    "Donepezil, rivastigmine and galantamine — the cholinesterase-inhibitor tier that IS the symptomatic pharmacology — have no KYP drug lessons; their doses and monitoring are taught here, the routes never invented.",
    "Memantine (the NMDA-antagonist add-on for moderate–severe disease) has no KYP lesson.",
    "The anti-amyloid antibodies (lecanemab and relatives) — modest trial slowing with brain swelling/bleed risk, costly, beyond routine practice almost everywhere — have no KYP lessons; know their existence for exams, not your clinic.",
    "Low-dose quetiapine and risperidone for BPSD (the short-term, smallest-dose, fixed-review-date tier) have no KYP lessons.",
  ],
  patientGuide: {
    whatIsIt:
      "Dementia is a progressive loss of thinking and daily function big enough to change a person's life — not the ordinary forgetting of keys, but the point where a person cannot manage the day they used to manage: the accounts go wrong, the familiar route becomes strange, the same question returns ten times a day, and it gets slowly worse over months and years. Alzheimer's disease is its commonest cause (about 6 in 10 cases): a disease of the brain's cells and connections — not 'just old age', and never a punishment or a curse.",
    whatCausesIt:
      "Two abnormal proteins build up in the brain over many years: amyloid clumping between cells, and tau twisting inside them. The process starts quietly in the memory centre (the hippocampus) and spreads slowly like a forest fire — first memory, then language, then finding-the-way skills, then judgement, finally movement and swallowing. Age is the biggest risk; family history matters but is not destiny; and a large share of risk is shaped by health across life — blood pressure, sugar, hearing, smoking, activity, and staying socially connected.",
    symptoms:
      "Early: repeating questions, misplacing objects in odd places, losing the way on familiar routes, word-finding trouble, money errors, and subtly reduced initiative — often with the person covering up mistakes. Middle: mixing day and night, wandering, difficulty sequencing dressing and cooking, suspicion (accusing family of stealing, not recognising a mirror), restlessness and sleep reversal, incontinence. Late: speech fading to words then silence, needing full help with feeding and toileting, and finally swallowing failure. Important: any SUDDEN change is not the dementia — it is usually a treatable delirium on top of it.",
    treatment:
      "There is no cure yet — and there is a great deal that medicine and family can still do. Medicines (donepezil and its relatives, later memantine) hold function steadier for months; they do not reverse the disease. The real package: fixed daily routines, walking, music, prayer and social contact; treating hearing, vision, pain and constipation; the behavioural checklist (pain, bladder, bowels, hunger, environment, sleep) before any sedative; and careful planning — money, safety, and future wishes — while insight remains. The family is the treatment team, and the carer's health is part of the patient's health.",
    selfHelp: [
      "Fix the routine and protect it: same wake, meal, walk and sleep times every day — the familiar structure IS medicine to the dementing brain.",
      "Bright days, boring dark nights: daylight and activity by day prevent the night-wandering and sleep reversal.",
      "ID card with address and phone number from the day wandering first appears — sewn into the kurta pocket if needed.",
      "One instruction at a time, do WITH not TO, redirect rather than argue — arguing with the misbelief deepens the distress.",
      "Run the behaviour checklist before calling the doctor for 'agitation': pain, bowels, urine, hunger, noise or darkness, sleep.",
      "Register the finances while insight allows: joint mandates, nominee updates, a written family agreement.",
      "The carer's own health check: the daughter-in-law at 24×7 needs a roster, a respite hour and a screen for her own depression — her breakdown hospitalises the patient.",
      "Refuse the 'brain tonics' kindly but clearly: no marketed tonic, megadose vitamin combo or ginkgo product has convincing evidence — the walking, the routine and the treated hearing do more.",
    ],
    whenToSeekHelp: [
      "Any SUDDEN change in a person known to have dementia — confusion, seeing things, not recognising family: same-day review (usually a urine infection or salt upset, both treatable)",
      "First signs of the pattern: repeating questions, getting lost on familiar routes, money errors — the diagnosis belongs in the early stage, not after the first crisis",
      "Behaviour changes that overwhelm the family — the trigger checklist plus a carer check-in, together",
      "The carer's own exhaustion, insomnia or depression — as urgent as the patient's symptoms",
      "Before any surgery, hospitalisation or long journey: plan the delirium-prevention bundle (glasses, hearing aid, family attendant, day-night structure)",
    ],
    indianResources: [
      "ARDSI (Alzheimer's and Related Disorders Society of India) — day-care and family support chapters in some cities; point families to the nearest one",
      "The National Programme for Health Care of the Elderly (NPCHCE) — the government mandate tier",
      "Tele-MANAS 14416 (24×7, free) — for the carer's distress and the family's routing questions",
      "The MBBS family physician — usually the first and only doctor: capable of the clinical diagnosis (collateral history + brief test + basic bloods), starting treatment and carrying the family",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "Indian Psychiatric Society guidance and WHO dementia knowledge frameworks guide practice; the Dementia India Report (ARDSI) drives the national policy conversation; the National Programme for Health Care of the Elderly (NPCHCE) carries the government mandate.",
    systemContext: "Patients present first to a family physician or a neurologist, then often a psychiatrist for the behaviour — or a faith healer first. The path to diagnosis is typically 2–3 years long: families normalise the early stage as 'old age' until wandering or accusations force a consultation. Private practice reality: those who can pay get MRI and a neuropsychology battery; those who cannot often get a label without even the basic bloods — push for the minimum (thyroid, B12, sugar, a documented cognitive score: cheap and decisive).",
    programmeContext: "Care is overwhelmingly home-based: fewer than a fraction of a percent of affected persons access day-care or residential services; the median primary carer is a daughter or daughter-in-law, often with no training, no respite and rising depression. ARDSI runs day-care and family support chapters in some cities. The treatment gap is quoted in the 90% range in community terms — the diagnosis, not the medicine, is the scarce commodity.",
    costConsiderations: "Generic donepezil 5–10 mg roughly ₹150–400/month; memantine similar (approx 2026, varies by brand/state/scheme); rivastigmine patch far costlier and rarely needed first. Where cost blocks even this, prioritise the free things: routines, walking, treating hearing and vision, treating pain and constipation — these often help behaviour more than tablets. The tonic market is the drain to refuse: none of the marketed brain tonics, megadose vitamin combos or ginkgo products has convincing evidence — that saves the family money and keeps trust in what works.",
    culturalConsiderations: "The family IS the treatment team — the 24×7 daughter-in-law with no training, no respite and rising depression; every prescription should include a carer check-in because the caregiver's health is the patient's health. The belief tier to correct: 'just old age' (delays the diagnosis 2–3 years), 'madness' (the faith-healer first), and the hidden-diagnosis habit (concealing the diagnosis takes away her right to arrange her own life while she still can — advise openness in the mild stage). End-stage tube feeding is frequently chosen out of guilt or pressure: counsel honestly that hand-feeding with careful positioning carries comparable comfort and dignity in advanced dementia.",
    patientCounselling: [
      "The diagnosis-delivery script: name the illness honestly, correct 'just old age' and 'madness', and register the illness not just the medicine — a written plan, a carer roster, a safety review, legal steps while insight allows.",
      "The realistic-medicine script for the first prescription: 'This holds function steadier for months; it is not a cure; the routine, walks and your care do at least as much' — the honest framing that keeps trust.",
      "The tonic-refusal script: 'None of the marketed tonics, high-dose vitamins or ginkgo has convincing evidence — spend that money on the hearing aid and the day routine instead.'",
      "The sudden-change script: 'The day he changes overnight — confused, seeing things, not recognising you — that is usually a urine infection or salt upset ON TOP of the dementia; same-day doctor, not the psychiatric label.'",
      "The legal-planning window: joint bank mandates, nominee updates, a written family agreement, and Mental Healthcare Act 2017 supported decision-making and advance directives — WHILE insight allows; nomination and access problems, not medicine, are the commonest late-stage crises.",
      "The carer check-in as prescription: her sleep, her back pain, her depression screen, her respite hour — carer breakdown is the commonest reason families finally hospitalise a stable patient.",
      "The feeding conversation BEFORE the crisis: hand-feeding slowly with positioning and smaller boluses is often as safe and more dignified than tube feeding in advanced dementia — discuss it early, not during the emergency.",
    ],
  },
  decisionPath: {
    title: "The failing memory consultation",
    nodes: [
      {
        id: "start",
        question: "A family brings an older relative for 'memory problems'. First: is this a disease at all?",
        branches: [
          { label: "Independent life maintained; recognises the slips", next: "ageing-mci-path" },
          { label: "Cannot manage the day they used to manage; months-years decline", next: "dementia-gate" },
          { label: "Sudden change over hours-days, fluctuating", next: "delirium-gate" },
          { label: "Weeks of low mood, 'I don't know' answers", next: "depression-gate" },
        ],
      },
      {
        id: "delirium-gate",
        question: "Sudden change on any background = delirium until proven otherwise.",
        recommendation: "The full delirium work-up (see the Delirium course): urine and sodium first (the two classic Indian reversible triggers), drug chart, infection screen — treat the cause; the dementia, if present, re-baselines after.",
      },
      {
        id: "depression-gate",
        question: "Pseudodementia: treat the mood, then re-test.",
        recommendation: "Weeks-onset, poor effort on testing but intact when coaxed, 'my memory is terrible' volunteered: treat the depression (SSRI plus structured activity) and RE-TEST in 2–3 months — pseudodementia may be the first face of a real dementia; only the retest tells.",
      },
      {
        id: "ageing-mci-path",
        question: "Independent with slips: normal ageing or MCI?",
        branches: [
          { label: "Slower recall only; recognises 'I forgot where I parked'", next: "normal-ageing" },
          { label: "Objective deficits on testing, independence preserved", next: "mci-path" },
        ],
      },
      {
        id: "normal-ageing",
        question: "Reassure — and still give the prevention advice.",
        recommendation: "No disease label; the life-course list still worth giving (walking, blood pressure and sugar control, hearing treated, social contact, no smoking) — population odds, honestly framed, not personal guarantees.",
      },
      {
        id: "mci-path",
        question: "MCI: the prevention-advice stage.",
        recommendation: "Complaints + deficits + independence preserved; ~10–15% yearly conversion — the window where prevention advice is most worth giving; arrange follow-up testing yearly and treat the vascular and hearing tier aggressively.",
      },
      {
        id: "dementia-gate",
        question: "The syndrome is dementia. What kind — and is anything treatable hiding?",
        branches: [
          { label: "Insidious, memory-first, gradual — the typical Alzheimer's pattern", next: "alzheimers-path" },
          { label: "Stepwise, vascular burden, gait early", next: "vascular-path" },
          { label: "Fluctuating, visual hallucinations, parkinsonism", next: "dlb-path" },
          { label: "Behaviour or language first, under 65, memory intact", next: "ftd-path" },
        ],
      },
      {
        id: "alzheimers-path",
        question: "Run the mandatory work-up before declaring it.",
        recommendation: "Collateral history (interview family separately), MMSE/MoCA in the right language, the bloods in EVERY case (thyroid, B12, counts, sugar, renal-hepatic, calcium; VDRL/HIV where appropriate), structural CT/MRI (excludes tumour, subdural, hydrocephalus; hippocampal view) — a normal-looking scan does NOT exclude Alzheimer's; biomarkers only for young or atypical cases.",
      },
      {
        id: "vascular-path",
        question: "Vascular (and mixed) — the second illness to prevent.",
        recommendation: "Stepwise course with hypertension/strokes and early gait: treat the vascular risk as brain medicine (BP, diabetes, lipids, smoking) — 'mixed dementia' is the rule in old brains, so the same tier runs alongside any Alzheimer's management.",
      },
      {
        id: "dlb-path",
        question: "Lewy body suspicion changes the prescription chart.",
        recommendation: "Fluctuations, formed visual hallucinations, parkinsonism, REM-sleep behaviour disorder: see the DLB course — quetiapine-only caution on antipsychotics (severe sensitivity), cholinesterase inhibitors often especially effective.",
      },
      {
        id: "ftd-path",
        question: "Frontotemporal: the under-65 personality or language change.",
        recommendation: "Behaviour or language first with memory preserved: see the FTD course — the family's 'he has changed as a person' frame needs the correct name, the carer burden is earlier and heavier, and the mimic tier (late-onset psychiatric illness) must be worked through.",
      },
      {
        id: "treatment-gate",
        question: "The syndrome is established Alzheimer's disease. The package:",
        branches: [
          { label: "Mild–moderate stage", next: "drug-start" },
          { label: "Moderate–severe stage", next: "memantine-tier" },
          { label: "Behavioural crisis (BPSD)", next: "bpsd-path" },
        ],
      },
      {
        id: "drug-start",
        question: "Cholinesterase inhibitor with the honest framing.",
        recommendation: "Donepezil 5 mg at night (rise to 10 mg after 4–6 weeks), rivastigmine or galantamine as alternatives — a modest stabilisation, months of function, never a reversal; reassess cognition, function and behaviour every 3–6 months; START the non-drug package in the same month (routine, walking, safety review, legal planning, carer check-in).",
      },
      {
        id: "memantine-tier",
        question: "Add or switch in moderate–severe disease.",
        recommendation: "Memantine 5 mg titrated to 20 mg/day: cognition a little, agitation in some, well tolerated in elderly kidneys; when the drug has clearly stopped helping in late-stage disease, tapering is ethical and honest — comfort over chemistry at the end.",
      },
      {
        id: "bpsd-path",
        question: "BEHAVIOUR IS THE LANGUAGE OF PHYSICAL DISCOMFORT — the checklist before the prescription.",
        recommendation: "Pain, Faecal impaction, Urinary infection, Hunger/thirst, Environment (noise, dark, new room), Sleep — worked in order. Then the non-drug tier: same carer, same routine, bright days, dark nights, music, walks, one instruction at a time, redirect rather than argue. Only if danger or distress outweighs risks: smallest dose, fixed review date, short-term low-dose quetiapine or risperidone (the mortality and stroke signal respected); SSRIs if depression drives the picture.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing 'dementia' during a delirium (or missing delirium on a dementia)",
      why: "The sudden change gets absorbed into the dementia label — the urine infection or sodium upset goes untreated while the family is told 'the disease has advanced'.",
      correction: "The pace rule, always: sudden + fluctuating = delirium on the dementing brain until proven otherwise; urine test and sodium first, then the full cause-hunt.",
    },
    {
      mistake: "Accepting 'just old age' (or 'madness') as the explanation for 2–3 years",
      why: "The Indian path to diagnosis averages 2–3 years because families normalise the early stage — the planning window (legal, financial, safety) closes while everyone waits.",
      correction: "Any functional decline — accounts wrong, routes lost, questions repeating — earns the collateral history and the work-up, whatever the age; ageing never takes away independence.",
    },
    {
      mistake: "Prescribing anticholinergic drugs to someone on donepezil",
      why: "Bladder drugs, first-generation antihistamines and tricyclics directly oppose what little acetylcholine the cholinesterase inhibitor is preserving — the chemicals working against each other.",
      correction: "The avoid-list on every prescription: anticholinergic burden reviewed at every visit (sleep syrups and 'tonics' included — many are anticholinergic).",
    },
    {
      mistake: "Long-term antipsychotics for BPSD by default",
      why: "The mortality and stroke signal in demented elders is real; the prescription written for a crisis becomes a permanent habit no one reviews.",
      correction: "The trigger checklist first (pain, impaction, urine, hunger, environment, sleep); non-drug second; drugs only when danger or distress outweighs risks — smallest dose, FIXED review date, and a documented stop attempt.",
    },
    {
      mistake: "Forgetting B12 in the elderly vegetarian",
      why: "The deficiency is common in Indian vegetarian diets, cheap to detect, fully reversible if caught — and it sits in the mandatory bloods that get skipped when the label is applied without the work-up.",
      correction: "The bloods in EVERY new case: thyroid, B12, counts, sugar, renal-hepatic, calcium — the panel is inexpensive in India and catches the impostors.",
    },
    {
      mistake: "Reading the normal MRI as 'no Alzheimer's'",
      why: "Early scans often look near-normal — the excluded-structure scan (tumour, subdural, hydrocephalus) is not a positivity test for the disease.",
      correction: "Dementia is a clinical diagnosis: collateral history + objective impairment + functional loss + exclusion of mimics; imaging excludes, the pattern declares.",
    },
    {
      mistake: "Hiding the diagnosis from the patient",
      why: "Concealment takes away her right to arrange her own life — money, property, care wishes — during the window when she still can.",
      correction: "Name the illness honestly in the mild stage, correct the beliefs, and move the legal tier (joint mandates, nominees, advance directives) while insight allows.",
    },
    {
      mistake: "Ignoring the carer until she breaks",
      why: "The daughter-in-law at 24×7 with no training or respite collects depression, back pain and isolation — and carer breakdown is the commonest reason families hospitalise a stable patient.",
      correction: "The carer check-in belongs in every prescription: her sleep, her mood, her roster, her respite hour, the nearest ARDSI chapter if one exists.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define dementia (major neurocognitive disorder) and distinguish it from MCI, delirium and depression — independence is the hinge for MCI; pace and attention for delirium; effort-pattern for depression.",
        "The typical Alzheimer's symptom sequence and its pathological basis — hippocampus first, network spread, why old memories outlast new.",
        "Nucleus basalis of Meynert and the cholinergic hypothesis; why cholinesterase inhibitors are symptomatic, not curative.",
        "The bloods in every new dementia work-up and what each excludes.",
        "APOE ε4 genetics: risk multipliers, the rare autosomal-dominant families, the Down syndrome plan.",
      ],
      practical: [
        "Take a collateral dementia history from a family member (onset, pace, first losses, driving, money, medicines) and present the syndrome-level diagnosis with the work-up plan.",
        "Demonstrate the functional yardstick questioning ('what can he still do without help?') and stage a case from it.",
      ],
      longAnswer: [
        "A 71-year-old with 2 years of progressive memory decline and getting lost: differential diagnosis and management (the evergreen essay — the mimic table IS the answer skeleton).",
        "Behavioural and psychological symptoms of dementia: assessment and the non-pharmacological-first management.",
      ],
    },
    neetPg: {
      highYield: [
        "Alzheimer's = 50–70% of all dementia; prevalence DOUBLES every 5–6 years after 65 (5–8% at 65+, >20% after 85).",
        "Earliest pathological change: hippocampal atrophy (medial temporal) — and amyloid visible on scans 10–20 YEARS before symptoms.",
        "Tau tangles correlate better with severity than amyloid plaques — the correlation the examiners love.",
        "Nucleus basalis of Meynert → cortical acetylcholine loss → the cholinergic deficit the drugs target.",
        "APOE ε4: 2–3× (one copy), ~10–15× (two); APP/PSEN1/PSEN2 = autosomal-dominant, onset 40s–50s, under 1%; Down syndrome (extra APP) → near-universal pathology by 40s.",
        "Donepezil/rivastigmine/galantamine = cholinesterase inhibitors (mild–moderate); memantine = NMDA antagonist (moderate–severe); lecanemab = anti-amyloid antibody (modest slowing, brain swelling/bleed risk — know it exists).",
        "Pseudodementia: weeks-onset, 'don't know' answers, poor effort, often says memory terrible — treat and RE-TEST.",
        "Sudden worsening in dementia = delirium (urine and sodium the classic triggers in India).",
        "Anosognosia = damaged self-monitoring, not stubbornness.",
        "BPSD triggers mnemonic: Pain, Faecal impaction, Urinary infection, Hunger, Environment, Sleep — behaviour is the language of discomfort.",
        "Antipsychotics in dementia carry mortality and stroke warnings — smallest dose, fixed review, documented stop attempts.",
        "Lancet Commission: ~40–45% of dementia risk theoretically modifiable (population odds, not personal guarantees) — midlife BP/diabetes/obesity/smoking; later-life hearing loss, isolation, depression, inactivity.",
      ],
      pyqConcepts: [
        "Cortical (amnestic-aphasic-apraxic: Alzheimer's, FTD) vs subcortical (slow-apathetic-depressed-front: vascular, parkinsonian) dementia.",
        "Normal-pressure hydrocephalus: gait FIRST, then incontinence, then cognition — the surgical dementia.",
        "DEMENTIAS mnemonic for the reversible screen (Drugs, Emotional, Metabolic, Eyes/ears, Tumour, Infection, Anaemia...).",
        "Why a normal MRI does not exclude early Alzheimer's.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 71-year-old retired headmistress: two years of repeating questions, household accounts drifting wrong, found twice near the market unable to explain the way home; she jokes 'at my age anyone forgets'; MMSE pattern typical, bloods normal, MRI with early hippocampal atrophy — started on donepezil plus the family package (fixed routine, temple-park walking group, ID card): at 18 months personal care maintained and accounts moved to the son, the household reorganised around the illness without crisis.",
        "A 68-year-old widower treated six months for 'depression' (poor appetite, withdrawal, sitting all day): testing revealed he had stopped TRYING but errors appeared when attention was coaxed; collateral history revealed two years of getting lost while driving; SSRI plus structured activity brightened mood but memory continued to slide — Alzheimer's, mild stage. Six months later the son called: 'he has gone mad overnight, he sees snakes and does not know me': urine infection and mild hyponatraemia — delirium on the dementia; both treated, baseline returned in five days.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The commonest cause of dementia worldwide: Alzheimer's disease (50–70%).",
        "The neurotransmitter deficit: acetylcholine (nucleus basalis of Meynert).",
        "Donepezil mechanism: inhibits the enzyme that breaks down acetylcholine; memantine: NMDA antagonism.",
        "B12 in the elderly vegetarian — the mandatory reversible-cause screen.",
        "Sudden change in dementia = look for delirium's causes, not disease progression.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The prescription that matters most is the plan: carer roster, safety review, legal tier while insight allows, and the carer check-in — the daughter-in-law IS the treatment team and her health is the patient's health.",
        "BPSD is communication: before any sedative, work pain, impaction, urine, hunger, environment and sleep — the checklist IS the prescription; the antipsychotic mortality signal makes each prescription a dated decision.",
        "The honest-medicine conversation done once, early: 'these tablets hold function for months, they do not cure; the routine, the walks and your care do at least as much' — trust built at prescription one survives the whole illness.",
        "The taper is therapy: when swallowing fails and muteness arrives, stopping the drug tier is not giving up — it is honest care; have the feeding conversation BEFORE the crisis, not during it.",
        "The biomarker honesty: CSF ratios and amyloid PET are for young or atypical cases and antibody qualification in India — the clinical route (collateral + pattern + mimic exclusion) is reliable enough for management, and the tonic market is the drain to refuse on the family's behalf.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The teacher who stopped marking homework",
      presentation: "Two years of repeating questions and drifting accounts — then twice found near the market, unable to explain the way home.",
      initialPresentation: "A 71-year-old retired headmistress was brought by her son to a private neurology clinic for 'memory problems'. Over two years the household accounts had drifted wrong, questions repeated in loops, and — the consultation precipitant — she had been found twice near the local market unable to explain how to reach home. She joked that at her age anyone forgets. Her son had noticed the covering-up: mistakes hidden before anyone else saw them.",
      history: "Insidious onset over 2 years; first losses = recent memory (questions repeated, conversations looping) then way-finding; money errors (paying twice, difficulty with change); word-finding slips ('that thing for that'); no mood syndrome preceding; independent in personal care until recent months; hypertension on treatment; no alcohol; hearing and vision corrected with aids present but inconsistently used.",
      examination: "MMSE pattern showing early Alzheimer's-typical deficits (recent-memory and orientation items predominantly; MoCA more sensitive if used); no focal neurological signs; functional yardstick: managing personal care but no longer the accounts; thyroid, B12 and sugar normal; MRI showed early hippocampal atrophy.",
      diagnosis: "Alzheimer's disease, mild (major neurocognitive disorder, probable Alzheimer's pattern: insidious onset, gradual progression, typical domain spread, mimics excluded).",
      management: "Donepezil 5 mg at night (planned rise to 10 mg after 4–6 weeks) with the honest framing ('holds function steadier for months, not a cure'); the family package started the same month: fixed daily routine, a walking group at the temple park, ID card with address and phone sewn into the bag, accounts moved to the son with a joint mandate, carer roster named (daughter-in-law plus son alternating nights), safety review of gas and stove.",
      outcome: "At 18 months: personal care maintained, the household reorganised around the illness without crisis; the illness continued underneath — the family knew and had planned for exactly that.",
      teachingPoints: [
        "Family-recognised functional decline beats clinic testing — the collateral history is the spine of the diagnosis.",
        "Basic bloods in every case: thyroid, B12, sugar — cheap, decisive, and the correction of the Indian 'label without work-up' habit.",
        "Donepezil plus routine plus safety planning is the realistic package — the months of function are real, and so is the planning.",
      ],
    },
    {
      title: "'Depression' that was Alzheimer's, and Alzheimer's that became delirium",
      presentation: "Six months of a 'depression' label — until the retest; then a night of snakes and an unrecognised son.",
      initialPresentation: "A 68-year-old widower was reviewed in a psychiatry OPD after six months of treatment for 'depression': poor appetite, withdrawal, sitting all day. On re-testing he had stopped TRYING — errors appeared when attention was coaxed — and the collateral history (taken separately from his son) revealed two years of getting lost while driving. An SSRI plus structured activity brightened mood, but memory continued to slide across follow-up testing.",
      history: "Widowed, living with son's family; 'depression' diagnosed at a private clinic without cognitive testing; no prior psychiatric history; gradual functional decline dominated by memory and way-finding; treated with an SSRI for 6 months with partial mood response but progressive memory decline documented by the family's diary.",
      examination: "Testing after mood treatment: persistent recent-memory and orientation deficits with effort now present — the retest pattern; bloods (thyroid, B12, sugar) normal; MRI: mild generalized atrophy with medial temporal prominence; functional yardstick: needing reminders for medicines and finances.",
      diagnosis: "Alzheimer's disease, mild stage (pseudodementia unmasked by the treat-and-retest method) — followed six months later by delirium superimposed on the dementia.",
      management: "The retest after mood treatment established the dementia diagnosis; donepezil started with the family package. Six months later, the crisis call — 'he has gone mad overnight, he sees snakes and does not know me' — triggered the delirium protocol instead of a psychiatric escalation: urine test (infection) and sodium (mild hyponatraemia) found and treated.",
      outcome: "Both the infection and the sodium corrected; he returned to his dementia baseline in five days. The family left with the sudden-change script: 'any overnight change means a physical problem — same-day doctor, urine and salts first'.",
      teachingPoints: [
        "Pseudodementia may be the first face of a real dementia: treat the mood and RE-TEST in 2–3 months — only the retest tells.",
        "Any sudden change in a dementia patient is delirium until proven otherwise — the two classic Indian reversible triggers are urinary infection and sodium disturbance.",
        "The collateral history taken separately from the family is what unmasks the covered-up decline in every 'depression' that keeps sliding.",
      ],
    },
  ],
  clinicalPearls: [
    "Dementia is a clinical diagnosis: collateral history + objective impairment + loss of function + exclusion of the reversible mimics — the sentence to rehearse.",
    "Alzheimer's = 50–70% of dementia; prevalence doubles every 5–6 years after 65 — and 'mixed dementia' is the rule in old brains, not the exception.",
    "The spread is the signature: hippocampus first (memory), then language, then visuospatial, then frontal (judgement, behaviour), finally motor and swallowing — 8–12 years typical from diagnosis.",
    "Tau tangles track severity better than amyloid plaques; amyloid is visible on scans 10–20 years before symptoms — the long silent stage of active compensation.",
    "Nucleus basalis of Meynert → cortical acetylcholine: the chemistry the first-line drugs squeeze — months of function, never a reversal.",
    "Donepezil 5→10 mg at night (mild–moderate); memantine 5→20 mg (moderate–severe); reassess every 3–6 months; tapering in the late stage is ethical and honest.",
    "Avoid: anticholinergics (they directly oppose the remaining acetylcholine) and long-term antipsychotics for BPSD (mortality and stroke signal).",
    "BPSD is the language of physical discomfort: Pain, Faecal impaction, Urinary infection, Hunger, Environment, Sleep — the checklist before the prescription.",
    "Pseudodementia: treat depression and re-test in 2–3 months — the retest method, not the label.",
    "Sudden worsening = delirium on the dementia until proven otherwise; urine and sodium are the two classic Indian reversible triggers.",
    "Anosognosia is damaged self-monitoring, not stubbornness — 'he is just being stubborn' is the harmful frame.",
    "The bloods in EVERY new case: thyroid, B12, counts, sugar, renal-hepatic, calcium — the vegetarian elderly Indian's B12 is mandatory.",
    "A normal MRI does NOT rule out Alzheimer's; imaging excludes (tumour, subdural, hydrocephalus) and views the hippocampus — it does not declare.",
    "The Indian tier: ~8.8 million over 60 (2020 report), 90% treatment gap, the daughter-in-law at 24×7 — the carer check-in belongs in every prescription, and the tonics deserve a clear no.",
  ],
  highYieldSummary: [
    "Definition and diagnosis: major neurocognitive disorder = decline from OWN baseline in one or more domains (memory, language, executive, attention, visuospatial, social cognition) confirmed by testing AND by loss of daily-life independence — not in delirium, not better explained otherwise; probable Alzheimer's = insidious, gradual, typical pattern, nothing else found; MCI = deficits with independence preserved (~10–15% yearly conversion — the prevention-advice stage).",
    "Epidemiology: WHO ~55–57 million worldwide (tripling by 2050); doubles every 5–6 years after 65 (5–8% at 65+, >20% after 85); Alzheimer's 50–70% of cases; India: ~8.8 million over 60 (Dementia India Report 2020), 10/66 studies showing prevalence comparable to high-income countries, treatment gap ~90%, home-based care with the daughter-in-law as median carer.",
    "Mechanism: amyloid-β plaques (extracellular, silent 10–20 years pre-symptom) + tau tangles (intracellular, track severity) starting in the hippocampus and spreading along networks (memory → language → visuospatial → frontal → motor/swallowing); nucleus basalis cholinergic loss (the drug target); microglial clearance and reserve exhaustion (why education/bilingualism delay symptoms, not disease).",
    "Risk: non-modifiable (age, family history doubling risk, APOE ε4 2–3×/10–15×, APP/PSEN1/PSEN2 families under 1%, Down syndrome by 40s); modifiable life-course tier (~40–45% theoretically: midlife hypertension, diabetes, obesity, smoking, alcohol; later-life inactivity, isolation, depression, hearing loss, air pollution, low education) — population odds, honestly caveated.",
    "Work-up: collateral history (interview family separately — the spine), MMSE/MoCA in the right language (named; MoCA more sensitive early), functional yardstick, bloods in every case (thyroid, B12, counts, sugar, renal-hepatic, calcium ± VDRL/HIV), structural CT/MRI (exclude tumour/subdural/hydrocephalus, hippocampal view, normal scan ≠ exclusion), biomarkers only for young/atypical or antibody qualification.",
    "Differential: depression (weeks, 'don't know', poor effort — treat and retest), delirium (sudden, fluctuating — the urine-and-sodium rule), normal ageing (independence intact), vascular (stepwise, gait early), hypothyroidism/B12 (the bloods catch them), NPH (gait-first triad — surgical), FTD (behaviour/language first, under 65, memory preserved).",
    "Management: the first-month family foundation (name the illness, written plan, safety review, legal tier while insight allows, cognitive-reserve advice); cholinesterase inhibitors (donepezil 5→10 mg; rivastigmine, galantamine) for mild–moderate — months of function, not cure; memantine 5→20 mg for moderate–severe; reassess every 3–6 months, ethical taper at the end; avoid anticholinergics and long-term antipsychotics.",
    "BPSD discipline: the trigger checklist (Pain, Faecal impaction, Urinary infection, Hunger/thirst, Environment, Sleep) → non-drug tier (same carer, same routine, bright days, dark nights, music, walks, one instruction, redirect don't argue) → drugs only when danger or distress outweighs risks (smallest dose, fixed review, low-dose quetiapine/risperidone short-term; SSRIs if depression drives).",
    "Comorbidity and prevention: keep treating BP, diabetes, lipids, hearing, vision, dental, feet, constipation — vascular risk control protects the brain from the second illness; the anti-amyloid antibodies (lecanemab tier) exist but are costly, risky and beyond routine care — know for exams, not the clinic.",
    "The Indian tier: 2–3-year diagnostic delay (the 'old age' normalisation), label-without-bloods in low-cost settings, the 24×7 daughter-in-law (carer check-in every visit), ARDSI chapters where they exist, the Mental Healthcare Act 2017 planning window, hand-feeding over tubes at the end (discuss BEFORE the crisis), and the tonic-refusal script that saves money and keeps trust.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "alzheimers-quiz-1",
      question: "The neurotransmitter deficit most closely linked to Alzheimer's symptoms is:",
      options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
      correctIndex: 2,
      explanation: "Cortical acetylcholine is lost early (nucleus basalis of Meynert) — exactly what cholinesterase inhibitors act on.",
      afterSectionId: "mechanism",
    },
    {
      id: "alzheimers-quiz-2",
      question: "A family reports 2 years of gradual memory decline and getting lost; bloods and MRI are normal. The most likely diagnosis is:",
      options: ["Delirium", "Depressive pseudodementia", "Mild cognitive impairment progressing to Alzheimer's dementia", "Normal ageing"],
      correctIndex: 2,
      explanation: "Two years of progressive functional decline with normal mimic-screening is the classic presentation; normal ageing never takes away independence.",
      afterSectionId: "diagnosis",
    },
    {
      id: "alzheimers-quiz-3",
      question: "Donepezil works by:",
      options: ["Blocking NMDA receptors", "Inhibiting the enzyme that breaks down acetylcholine", "Dissolving amyloid plaques", "Replacing lost dopamine"],
      correctIndex: 1,
      explanation: "Cholinesterase inhibition preserves the remaining acetylcholine; memantine is the NMDA antagonist — keep the two mechanisms straight.",
      afterSectionId: "management",
    },
    {
      id: "alzheimers-quiz-4",
      question: "From the life-course view, the strongest modifiable protective tier for late-life dementia is:",
      options: ["Ginkgo supplements", "Regular physical activity and vascular risk control", "Daily vitamin megadoses", "Avoiding all medicines"],
      correctIndex: 1,
      explanation: "Exercise and vascular risk control carry consistent evidence; tonics and megadose vitamins do not — the script to give every Indian family.",
      afterSectionId: "management",
    },
    {
      id: "alzheimers-quiz-5",
      question: "A dementia patient becomes acutely confused at night, worse over hours, with fluctuating attention. The first diagnostic thought is:",
      options: ["The dementia has advanced", "Delirium: search for the cause", "Schizophrenia onset", "Start an antipsychotic immediately"],
      correctIndex: 1,
      explanation: "Sudden-onset fluctuation is delirium until proven otherwise — urine and sodium are the two classic Indian reversible triggers.",
      afterSectionId: "differential",
    },
    {
      id: "alzheimers-quiz-6",
      question: "In an elderly vegetarian with slow cognitive decline, one mandatory test is:",
      options: ["Serum vitamin B12", "Serum copper", "Genetic testing for APOE", "Lumbar puncture"],
      correctIndex: 0,
      explanation: "B12 deficiency is common in Indian vegetarian diets, cheap to detect, and fully reversible if caught — the mandatory exclusion.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Define dementia in one sentence, without using 'memory loss' as the whole definition.", answer: "A progressive decline from the person's own baseline in one or more cognitive domains (memory, language, executive function, attention, visuospatial or social cognition), confirmed by objective testing AND expressed as loss of independence in daily life — not occurring only in delirium and not better explained by another brain disease or substance. The independence clause is the hinge that separates it from MCI and from normal ageing.", topic: "Diagnosis" },
    { question: "Say the sequence of Alzheimer's symptom spread and link it to the hippocampus-first pathology.", answer: "The pathology starts silently in the hippocampus (the memory gate) and spreads along connected networks like a slow forest fire: first MEMORY (repeating questions, recent events lost while old memories stay vivid), then LANGUAGE (names slip, speech vague), then VISUOSPATIAL function (familiar routes become strange, getting lost near the market), then the FRONTAL lobes (judgement, money, behaviour — the scams, the accusations, the BPSD), finally the MOTOR and swallowing centres (bed-boundness, aspiration). The order of spread is why the symptoms arrive in such a predictable sequence — and why the collateral history's 'what was lost first' names the syndrome.", topic: "Mechanism" },
    { question: "Which blood tests go into every new dementia work-up, and what does each exclude?", answer: "Thyroid function (hypothyroid slow-thinking mimic), vitamin B12 with folate (the vegetarian elderly Indian's reversible myelopathy-dementia tier — mandatory), complete blood count (anaemia), blood sugar (uncontrolled diabetes's cognitive fog), kidney and liver function (uraemic and hepatic encephalopathy tiers), calcium (metabolic mimic); VDRL and HIV where risk-appropriate (the infection tier). The panel is cheap in India, catches the reversible impostors, and its omission — the 'label without bloods' habit of low-cost settings — is the correctable error this course exists to fix.", topic: "Diagnosis" },
    { question: "What exactly do cholinesterase inhibitors offer a family, in honest, plain words?", answer: "Donepezil, rivastigmine and galantamine stop the breakdown of the acetylcholine the dying nucleus basalis still supplies — squeezing the remaining chemistry harder. The honest offering: a modest stabilisation of cognition and function, MONTHS of retained abilities (a meaningful minority improve clearly in daily activity), never a reversal — the disease continues underneath. Reassess every 3–6 months; when the drug has clearly stopped helping in late-stage disease (swallow failure, muteness), tapering is ethical and honest. And the free things — routines, walking, treated hearing and vision, treated pain and constipation — often do at least as much.", topic: "Pharmacology" },
    { question: "A dementia patient becomes agitated every evening. Walk through your checklist BEFORE reaching for a prescription.", answer: "The trigger checklist in order: PAIN (analgesia review — the forgotten hurt), FAECAL IMPACTION (when did he last open the bowels), URINARY INFECTION (dipstick and the clinical picture — plus retention: has he passed urine), HUNGER/THIRST (meal timing, swallowing difficulty), ENVIRONMENT (noise, darkness, the new room, the missing glasses and hearing aid), SLEEP (daytime napping in chairs, day-night reversal). Then the non-drug tier: same carer, same routine, bright days and boring dark nights, music, the evening walk, one instruction at a time, redirect rather than argue. Only if danger or distress still outweighs risks: the smallest dose with a FIXED review date — short-term low-dose quetiapine or risperidone (the mortality and stroke signal respected), SSRIs if depression drives the picture.", topic: "Management" },
    { question: "Name the legal and planning steps to advise while insight remains.", answer: "Joint bank mandates and a trusted-mandate arrangement; nominee updates across accounts, pensions and property records; a written family agreement on care roles and finances; the safety review (gas, stove, driving, wandering, ID card with address and phone); and — under the Mental Healthcare Act 2017 — discussion of future supported decision-making and advance directives. The timing is the point: nomination and access problems, not medicine, are the commonest late-stage crises; the window closes with the insight.", topic: "Indian practice" },
    { question: "What is anosognosia, and why is the 'he is just being stubborn' framing harmful?", answer: "Anosognosia is the neurological 'not knowing one is ill' — the damaged self-monitoring circuits literally cannot see the deficit; it is common in Alzheimer's and is not denial, not stubbornness, not manipulation. The framing is harmful in three ways: it assigns blame where there is injury (the family fights the person instead of the disease); it delays diagnosis and planning (he 'refuses' help so no one arranges it); and it licenses coercion where cueing and accommodation belong. The correction: families who understand the machinery of the missing insight reorganise around the person instead of against him.", topic: "Clinical practice" },
    { question: "Give the Indian caregiver and service tier for a family you are discharging today.", answer: "(1) The carer check-in written into the prescription: the 24×7 daughter-in-law's sleep, back pain, mood and respite hour — carer breakdown is the commonest reason families hospitalise a stable patient; (2) the nearest ARDSI chapter for day-care and family support where one exists; (3) the MBBS family physician as the carrying doctor (diagnosis made, donepezil started, triggers managed); (4) the tonic-refusal script that saves money and keeps trust; (5) the feeding conversation held BEFORE the crisis (hand-feeding with positioning over tubes in advanced dementia); (6) the Mental Healthcare Act 2017 planning window while insight allows; (7) Tele-MANAS 14416 for the carer's own distress.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is this just old age?", answer: "No. Age is the biggest risk factor, but the disease is not a normal part of ageing — plenty of 90-year-olds think clearly. Dementia is a specific illness of brain cells and connections, and it deserves diagnosis like any illness." },
    { question: "Am I going to get it because my father has it?", answer: "For the common late-onset form, family history only roughly doubles the odds — and much of a person's risk can be reduced by exercise, blood pressure and sugar control, not smoking, treating hearing loss and staying socially connected. Only the rare early-onset familial form (under 1% of cases) is inherited in a clear-cut pattern, and genetic counselling can be offered there." },
    { question: "There is a memory medicine — will it cure him?", answer: "No, and it is kinder to say so clearly. It can hold function steadier for months and help some people manage daily activities longer. The disease continues underneath. The routine, the walks and your care do at least as much as the tablet." },
    { question: "He accuses me of stealing his money. Does he hate me?", answer: "This is the illness, not your relationship. Damage in the memory and monitoring areas fills the gaps with fear, and the person nearest at hand gets blamed. A calm 'let us look together', locked cupboards and shared ledgers reduce these episodes — and your patience is the treatment." },
    { question: "Should we hide the diagnosis from her?", answer: "As far as possible, no. In the mild stage she can still plan: money, property, and her wishes for later care. Concealing the diagnosis takes away her right to arrange her own life while she still can." },
    { question: "He wants to wander at night and we cannot sleep.", answer: "First check the reversible drivers — pain, a full bladder, constipation, infection, and any new medicines. Then make days active and bright and nights boring and dark; keep a night lamp and a floor mattress to prevent falls; and an ID card or tag with a phone number is essential from the first wandering episode." },
    { question: "Is there any test that proves it is Alzheimer's?", answer: "Clinically: the pattern of decline plus exclusion of the mimics. CSF and PET tests and new blood markers exist, but in Indian practice they are used mainly for young or unusual cases — the clinical route plus the basic tests is reliable enough for management." },
    { question: "Till what stage should we give the medicines?", answer: "While they still help — measured by stability in daily function — and a reasonable time beyond. When the illness is very advanced and swallowing is failing, stopping them is not giving up; it is honest care." },
    { question: "Is it better to tube-feed him when he stops eating?", answer: "Hand-feeding slowly, with positioning and smaller boluses, is often as safe and more dignified; feeding tubes in advanced dementia do not clearly prevent aspiration or prolong comfort. Discuss this before the crisis, not during it." },
    { question: "We are a small family and both of us work. What can we do?", answer: "Build the roster now: neighbours, day-care where available (ARDSI chapters in some cities), a paid attendant for the heaviest hours, and a doctor-visit schedule. Accept help — carer breakdown is the commonest reason families finally hospitalise a stable patient." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased major/mild neurocognitive disorder logic" },
      { source: "WHO — Global status report on the public health response to dementia (2021)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.2 (Alzheimer's disease) + 4.1.13 (treatment and care of dementia) — source chapters mapped; content rewritten and updated beyond them (2009)" },
    ],
    trials: [
      { source: "Cochrane and systematic reviews of cholinesterase inhibitors and memantine in Alzheimer's disease (multiple updates)" },
      { source: "Anti-amyloid antibody trials (lecanemab and related) — modest slowing, safety trade-offs; not routine care" },
      { source: "Prince M et al. — carer intervention trials in low- and middle-income countries, including the India caregiver-training site" },
    ],
    reviews: [
      { source: "Lancet Commission on Dementia Prevention (2020, updated 2024) — the modifiable-risk, life-course framing (~40–45% central, carefully caveated)" },
      { source: "Non-pharmacological interventions for BPSD — systematic reviews supporting trigger-first, drug-second strategy" },
      { source: "Antipsychotic use in dementia: mortality and stroke warning data (regulatory and Cochrane syntheses)" },
      { source: "10/66 Dementia Research Group — prevalence studies in rural India (Tamil Nadu, Kerala; the cross-country programme)" },
      { source: "Dementia India Report 2010 and 2020 (ARDSI) — Indian prevalence, caregiving and treatment-gap estimates" },
      { source: "National Mental Health Survey of India 2015–16 (NIMHANS) — geriatric mental morbidity and the treatment gap" },
    ],
    patientResources: [
      { source: "ARDSI (Alzheimer's and Related Disorders Society of India) — day-care and family support chapters" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for carer distress and family routing" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: what dementia is and is not, the honest medicine talk, the behaviour checklist, the carer's own care.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "30 min",
      description: "The syndrome definition, the mimic table, the work-up minimum and the drug tiers with doses.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "40 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "48 min",
      description: "Everything — the biomarker honesty, the BPSD prescription discipline, the carer architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the doubling rule, the risk tiers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define dementia without resting on 'memory loss' and separate it from ageing, MCI, delirium and depression." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The slow forest fire, the fading chemistry, the reserve exhaustion.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why symptoms follow the hippocampus-first spread and why the drugs squeeze rather than cure." },
    { number: 3, title: "Clinical Practice", description: "The staging, the work-up, the mimic table, the honest pharmacology.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the work-up, write the drug tiers with doses, and deliver the honest-medicine script." },
    { number: 4, title: "Indian Context", description: "The 90% treatment gap, the daughter-in-law tier, the legal window, the tonic refusal.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can build the family package and put the carer check-in in every prescription." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the pseudodementia and BPSD essays cold and recite the doubling rule and bloods list." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.2 (Alzheimer's disease) + 4.1.13 (treatment and care of dementia) — source chapters mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased major/mild neurocognitive disorder architecture", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "WHO — Global status report on the public health response to dementia (prevalence framing: ~55–57 million, tripling projection)", sourceType: "who", year: "2021", dateReviewed: "2026-09-28" },
    { id: "S4", source: "10/66 Dementia Research Group — prevalence studies in rural India (Tamil Nadu, Kerala): Indian prevalence comparable to or above high-income countries", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Dementia India Report 2010 and 2020 (ARDSI) — Indian prevalence (~8.8 million over 60 in 2020) and caregiving estimates", sourceType: "review", year: "2010 / 2020", dateReviewed: "2026-09-28" },
    { id: "S6", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — geriatric mental morbidity and the treatment gap", sourceType: "government", year: "2015–16", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Cochrane and systematic reviews of cholinesterase inhibitors and memantine in Alzheimer's disease (multiple updates)", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Lancet Commission on Dementia Prevention (2020, updated 2024) — the modifiable-risk, life-course framing (~40–45% central estimate, carefully caveated)", sourceType: "review", year: "2020 / 2024", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Non-pharmacological BPSD intervention reviews + antipsychotic-in-dementia mortality and stroke warning data (regulatory and Cochrane syntheses)", sourceType: "systematic-review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Anti-amyloid antibody trials (lecanemab and related) — modest slowing, brain swelling/bleed risk; not routine care", sourceType: "trial", year: "2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Syndrome definition: major neurocognitive disorder = decline from own baseline across one or more cognitive domains, confirmed by testing and by loss of daily-life independence — with MCI as the preserved-independence precursor converting at roughly 10–15% per year.", grade: "established", sources: ["S2"] },
    { text: "Epidemiology: prevalence roughly doubles every 5–6 years after 65 (5–8% at 65+, above 20% after 85); Alzheimer's is 50–70% of all dementia; WHO frames ~55–57 million people worldwide with a tripling projection by 2050; India: ~8.8 million over 60 (Dementia India Report 2020) with a treatment gap quoted in the 90% range.", grade: "established", sources: ["S2", "S3", "S5", "S6"] },
    { text: "Indian prevalence reality: 10/66 studies in rural Tamil Nadu and Kerala found dementia prevalence in elderly Indians comparable to, and at some sites higher than, high-income countries — demolishing the belief that Indian families are somehow protected.", grade: "established", sources: ["S4"] },
    { text: "Pathology and spread: amyloid-β plaques accumulate silently (visible on scans 10–20 years before symptoms); intracellular tau tangles track severity better; the hippocampus shrinks first and the network spread (memory → language → visuospatial → frontal → motor/swallowing) explains the predictable symptom sequence; nucleus basalis of Meynert cholinergic loss is the symptomatic drug target.", grade: "established", sources: ["S1", "S7"] },
    { text: "Genetics: APOE ε4 raises late-onset risk roughly 2–3× (one copy) and ~10–15× (two copies) though many carriers never develop dementia; rare APP/PSEN1/PSEN2 autosomal-dominant families (under 1%) cause 40s–50s onset; Down syndrome's extra APP gene dose produces near-universal pathology by the fourth decade.", grade: "established", sources: ["S1", "S2"] },
    { text: "Modifiable risk (life-course view): a large minority of dementia risk — potentially ~40–45% in the Lancet Commission synthesis — is theoretically modifiable (midlife hypertension, diabetes, obesity, smoking, excess alcohol; later-life inactivity, isolation, depression, untreated hearing loss, air pollution, low education); population odds, not personal guarantees.", grade: "supported", sources: ["S8"] },
    { text: "Diagnosis is clinical: collateral history (family interviewed separately) is the spine; MMSE/MoCA named (MoCA more sensitive for early disease; Indian-language adaptations exist); bloods in every new case (thyroid, B12, counts, sugar, renal-hepatic, calcium ± VDRL/HIV); structural imaging excludes tumour/subdural/hydrocephalus and views hippocampal volume — a normal-looking scan does NOT exclude Alzheimer's; CSF/PET biomarkers reserved for young or atypical cases.", grade: "established", sources: ["S1", "S2"] },
    { text: "Symptomatic pharmacology: cholinesterase inhibitors (donepezil 5→10 mg; rivastigmine; galantamine) in mild–moderate disease give modest stabilisation — months of retained function, never reversal; memantine (5→20 mg) added or switched in moderate–severe disease; reassessment every 3–6 months with ethical taper when benefit is gone.", grade: "established", sources: ["S7"] },
    { text: "BPSD management: the trigger-first discipline (pain, faecal impaction, urinary infection, hunger, environment, sleep) with non-drug measures before any prescription; antipsychotics carry mortality and stroke warnings — smallest dose, fixed review date, short-term only where danger or distress outweighs risks.", grade: "established", sources: ["S9"] },
    { text: "Anti-amyloid antibodies (lecanemab and relatives): modest slowing of decline in trials with brain swelling/bleed risk — costly and beyond routine practice almost everywhere; an exam-awareness tier, not a clinic tier.", grade: "supported", sources: ["S10"] },
    { text: "Comorbidity discipline: vascular risk control (blood pressure, diabetes, lipids) protects the dementing brain from a second illness — 'mixed dementia' is the rule in old brains; anticholinergic drugs directly oppose the remaining cholinergic function and belong on every avoid-list.", grade: "established", sources: ["S1", "S7"] },
    { text: "The Indian care architecture: home-based care overwhelmingly (under a fraction of a percent accessing day-care or residential services); the median primary carer a daughter or daughter-in-law without respite; carer intervention trials (Prince et al., the India site) support caregiver training as effective; ARDSI chapters and NPCHCE form the service tier; the Mental Healthcare Act 2017 provides the supported-decision-making and advance-directive planning window.", grade: "supported", sources: ["S5", "S6"] },
  ],
};
