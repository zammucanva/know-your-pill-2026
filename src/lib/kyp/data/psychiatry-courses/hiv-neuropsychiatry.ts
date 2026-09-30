import type { PsychiatryCourse } from "./types";

/**
 * HIV-ASSOCIATED NEUROCOGNITIVE DISORDER — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/hiv-neuropsychiatry.md — untouched foundation),
 * re-researched against current guidance (the Navia original
 * description, the WHO 1990 and AAN 1991 criteria logic, the
 * Sacktor multicentre HAART-era incidence data, the Dore survival
 * cohort, the modern three-tier HAND nosology) with per-claim
 * provenance.
 *
 * Drug routes: sertraline and escitalopram (the better-tolerated
 * SSRI tier for the depression differential and comorbidity) have
 * KYP lessons and are linked; the antiretroviral regimens,
 * methylphenidate (Schedule X in India) and the antipsychotic tier
 * have no KYP lessons and are recorded in contentGaps, never
 * invented.
 */
export const hivNeuropsychiatryCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "hiv-neuropsychiatry",
  title: "HIV-Associated Neurocognitive Disorder",
  shortName: "HAND",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "HIV-Associated Neurocognitive Disorder"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "33 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The treatable edge of the dementias: antiretroviral therapy can halt or partly reverse it",

  summary:
    "HIV-associated neurocognitive disorder is a subcortical dementia of young adults: mental slowing, apathy and motor signs with consciousness preserved. Any young adult with cognitive decline and motor slowing needs an HIV test, because antiretroviral therapy changes the trajectory.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe how HIV enters and damages the brain (the Trojan-horse route) without inventing mechanisms.",
    "Recognise the early triad (cognitive slowing, apathy, motor slowing) that distinguishes HAND from cortical dementias.",
    "State the WHO and AAN diagnostic logic in plain words, and the modern three-tier HAND spectrum.",
    "List the differential that matters most: depression, toxoplasmosis, primary CNS lymphoma, cryptococcal meningitis, CNS tuberculosis, CMV, neurosyphilis.",
    "Explain why patients with AIDS are exquisitely sensitive to antipsychotic side effects, and name the classic herbal interaction.",
    "Use methylphenidate (5–20 mg/day) for apathy and slowing where appropriate.",
    "Manage the adherence problem when memory itself is failing: supervised dosing, pill organisers, the family tablet monitor.",
    "Place the disorder in Indian practice: NACO ART centres, free treatment, stigma, and who actually makes the diagnosis.",
  ],
  quickFacts: [
    { label: "The signature", value: "Subcortical speed, not cortical storage", detail: "Mental slowing, apathy and motor signs first; naming and vocabulary preserved even late; consciousness preserved — against Alzheimer's amnestic-first and delirium's clouding" },
    { label: "The route in", value: "The Trojan horse", detail: "HIV hides inside infected macrophages that carry it across the blood-brain barrier; the virus infects glia and sets up a smouldering infection in the frontal lobes, white matter and basal ganglia" },
    { label: "The damage", value: "Innocent bystanders die", detail: "Not the virus eating neurons but activated macrophages/microglia pumping out neurotoxins — neurons injured and dying by apoptosis: an inflammatory bystander disease" },
    { label: "The HAART numbers", value: "21.1 → 10.5 per 1,000 person-years", detail: "Incidence halved after combination therapy (1990-92 vs 1996-98, the multicentre cohort); survival after dementia diagnosis stretched from ~5 months to ~38.5 months" },
    { label: "The modern shape", value: "Three-tier HAND", detail: "Asymptomatic neurocognitive impairment / mild neurocognitive disorder / HIV-associated dementia — the milder tiers now commonest because people survive longer with the virus in the brain" },
    { label: "The vicious cycle", value: "Impaired cognition undermines adherence", detail: "The illness damages the very system needed to treat it — missed doses, missed appointments, resistance, then deeper impairment; breaking this cycle is the psychiatrist's core contribution" },
    { label: "The drug traps", value: "Typical antipsychotics + St John's Wort", detail: "EPS and neuroleptic malignant syndrome risk is high in AIDS; the herbal antidepressant induces protease-inhibitor metabolism and drops levels to treatment-failure range" },
    { label: "The Indian tier", value: "Free ART, late diagnosis, Schedule X", detail: "NACO centres provide free antiretrovirals and counselling; most patients present late through district hospitals; methylphenidate is Schedule X — tightly controlled, scarce outside major centres" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The cortical contrast — amnestic-first with naming lost, against the subcortical speed-and-drive of HAND" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The consciousness differential — preserved in HAND, clouded and fluctuating in delirium" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The other subcortical-speed dementia — the strategic thalamic infarct as the sudden-onset contrast" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The mimic and the co-traveller — the pseudodementia warning signs separate them, and both can coexist in one HIV-positive patient" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The other bradyphrenia-apathy dementia — the drug-tightrope cousin (its D2-blocker catastrophe mirroring HAND's NMS sensitivity)" },
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The thalamic filing circuit both diseases strike — HAND's subtle recall slips against the Korsakoff punched-out hole" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The sleep-tier differential in the HIV patient — and the sedative restraint both populations demand" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The basal-ganglia chemistry behind the motor slowing — and the EPS-prone system the typical antipsychotics destabilise" },
    { label: "Basal ganglia", type: "brain-region", href: "#brain", note: "The deep motor stations the infection targets early — the legs' clue before the memory's" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The manager offices of speed and drive — the apathy and slowing signature's seat" },
    { label: "White matter", type: "brain-region", href: "#brain", note: "The long-distance cabling the smouldering infection under-perfuses and inflames" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier for the depression differential and comorbidity — better tolerated than tricyclics in this population" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same tier (diarrhoea-troubled patients excepted)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry HAND. The Trojan horse: HIV cannot simply walk into the brain — it hides inside macrophages it has infected, and these cells carry it across the blood-brain barrier; once inside, the virus infects glial cells and sets up a long, smouldering infection in precisely the regions that serve speed and drive: the frontal lobes, the white matter, and the basal ganglia. The innocent bystanders die: it is not the virus eating neurons directly that does most of the damage — the infected and activated macrophages and microglia pump out neurotoxins, and neurons are injured and die by apoptosis; in this sense HAND is an inflammatory bystander disease of the brain, the immune battle killing the tissue it is trying to protect (the viral envelope protein gp120 adding direct toxicity). The thermostat story: before 1996 the brain infection burned unchecked — people deteriorated in months; antiretroviral therapy does not always cross into the brain well, but it lowers the systemic fire enough to halve the incidence and stretch the course; because people now live decades with the virus in the brain, the MILDER tiers of impairment are the commonest form, and survival after a dementia diagnosis rose from about 5 months to about 38.5 months in the cohort data — the treatable edge, and the reason the psychiatrist's adherence work is disease modification, not symptom care.",
    steps: [
      "The Trojan horse: HIV crosses the blood-brain barrier hidden inside infected macrophages — then infects glia and smoulders in the frontal lobes, white matter and basal ganglia.",
      "The innocent bystanders die: activated macrophages and microglia pump out neurotoxins; neurons are injured and die by apoptosis — the immune battle killing the tissue it protects; gp120 adding direct toxicity.",
      "The vulnerable geography: frontal-subcortical circuits (speed, drive, initiation) and the basal ganglia (motor) — which is why the legs and the motivation slow down before the memory does, and why naming and vocabulary hold.",
      "The thermostat: ART lowers the systemic fire — incidence halved (21.1 → 10.5 per 1,000 person-years), survival after dementia diagnosis stretched from ~5 to ~38.5 months.",
      "The modern spectrum: longer survival with virus in the brain means milder impairment is now the commonest form — the three-tier HAND (asymptomatic / mild / dementia).",
      "The vicious cycle: cognitive impairment undermines adherence; interrupted ART deepens immunosuppression and the brain infection — the cycle the psychiatrist is positioned to break.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "basal-ganglia", name: "Basal ganglia (the deep motor stations)", role: "Heavily involved at post-mortem — the motor slowing, hyperreflexia and ataxia-on-rapid-turns that present alongside the cognitive picture; the legs' clue.", grade: "established" },
    { id: "frontal-lobes", name: "Frontal lobes (the manager offices)", role: "Speed, drive and initiation falter here — the apathy and slowing cluster; the subcortical-frontal signature that mimics and hides behind depression.", grade: "established" },
    { id: "white-matter", name: "Subcortical white matter", role: "The periventricular and centrum-semiovale T2 hyperintensities on MRI — the long-distance cabling under inflammatory siege; slowed processing speed's substrate.", grade: "established" },
    { id: "thalamus", name: "Thalamus (the relay and gate)", role: "Involved in the diencephalic circuitry of memory-filing — the subtle recall failures after five-minute delays; the strategic target HIV shares with the thiamine and vascular doors.", grade: "supported" },
    { id: "cortex", name: "Cortex (relatively spared)", role: "The cortical flagship signs — aphasia, agnosia, apraxia — are unusual precisely because the disease is subcortical-first; their presence pushes the workup toward opportunistic mimics.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The basal-ganglia chemistry of the motor slowing — and the destabilised system behind the extraordinary EPS and neuroleptic-malignant-sensitivity to typical antipsychotics in AIDS.", grade: "established", drugConnection: "The typical-antipsychotic prohibition logic: dopaminergic blockade in the AIDS brain produces EPS and NMS at doses the general population tolerates." },
    { name: "Serotonin", symbol: "5-HT", role: "The depression comorbidity's chemistry — the treatable rider that mimics the disease; SSRI-responsive, with the diarrhoea caveat noted.", grade: "established", drugConnection: "Sertraline and escitalopram — the better-tolerated SSRI pair for the depression differential; the tricyclics less well tolerated." },
    { name: "Glutamate", symbol: "Glu", role: "The excitotoxic arm of the bystander damage — quinolinic acid and the neurotoxin tier the activated microglia release; the apoptotic cascade's engine.", grade: "supported" },
    { name: "Acetylcholine", symbol: "ACh", role: "NOT the emptied tank of Alzheimer's — the cholinesterase-inhibitor tier has only anecdotal support here, which is itself a teaching point against reflex prescribing.", grade: "supported" },
  ],
  pathways: [
    {
      id: "trojan-horse-pathway",
      name: "The Trojan horse to the smouldering brain",
      steps: [
        { label: "HIV hides in the macrophage", detail: "The infected immune cell carries the virus across the blood-brain barrier — the horse through the gate" },
        { label: "The glial infection establishes", detail: "The virus infects glia; a long, smouldering infection in frontal-subcortical territory begins" },
        { label: "The immune battle escalates", detail: "Activated macrophages and microglia pump out neurotoxins (the quinolinic-acid tier); gp120 adds direct toxicity" },
        { label: "The bystanders die by apoptosis", detail: "Neurons injured and killed by the inflammation around them — the tissue the battle was protecting" },
      ],
      clinicalManifestation: "The 34-year-old migrant worker whose walking grew careful and whose calls home stopped — the speed-and-drive failure the family called 'dullness'.",
      grade: "established",
    },
    {
      id: "thermostat-pathway",
      name: "The thermostat (why ART changed everything)",
      steps: [
        { label: "Before 1996: the unchecked burn", detail: "The brain infection ran free — deterioration in months; one of the commonest dementias of young adults" },
        { label: "ART lowers the systemic fire", detail: "Not always crossing into the brain well — but lowering the viral load enough to halve incidence and stretch the course" },
        { label: "The survivors' new shape", detail: "Milder impairment becomes the commonest form (the three-tier HAND); the severe encephalopathy largely disappears from post-mortem tables" },
        { label: "The adherence hinge", detail: "Everything now depends on the tablets being taken — and the tablets are taken by the very system the disease injures: the vicious cycle the psychiatrist breaks" },
      ],
      clinicalManifestation: "The re-linked ART patient whose psychomotor speed partially recovered over months — the treatable edge personified in a clinic-called outcome.",
      grade: "established",
    },
    {
      id: "mimic-pathway",
      name: "The opportunistic mimic screen (the fever-and-focal gate)",
      steps: [
        { label: "The stable subcortical baseline", detail: "Months-speed decline, apathy, leg signs, consciousness preserved — the HAND signature" },
        { label: "The red-flag gate", detail: "Fever, focal weakness, headache or meningism arrive — the script must change: this is not 'the dementia worsening'" },
        { label: "The scan and the tap", detail: "Ring-enhancing lesions → toxoplasmosis; contrast-enhancing mass → lymphoma; India ink/antigen → cryptococcus; CSF-directed TB, CMV, syphilis" },
        { label: "The psychiatrist's contribution", detail: "Refusing to medicalise a new focal neurological picture as 'progression' — the discipline that routes the patient to the right treatment" },
      ],
      clinicalManifestation: "The 28-year-old whose two weeks of forgetfulness plus left-arm weakness and evening fevers turned out to be cerebral toxoplasmosis — treated as infection, not as dementia.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "early-entry", time: "Early infection", title: "The virus enters the brain", description: "The Trojan-horse crossing happens early — years before any symptom; the smouldering glial infection established in frontal-subcortical territory while the patient feels well.", phase: "onset" },
    { id: "untreated-era", time: "Advanced untreated disease", title: "The months-speed decline", description: "In untreated advanced immunosuppression: mental slowing, forgetfulness, apathy and leg clumsiness worsening over months — the classic AIDS dementia complex of the pre-HAART era.", phase: "onset" },
    { id: "art-era", time: "On effective ART", title: "The stretched course", description: "Incidence halved, survival after diagnosis ~5 → ~38.5 months; milder tiers now the commonest form — people living years to decades with the virus in the brain.", phase: "peak" },
    { id: "modern-management", time: "The maintenance years", title: "The adherence decade", description: "The cognitive-motor-behavioural picture stabilises or partially improves on suppressed viral loads; the psychiatrist's work — adherence architecture, mood treatment, safety — becomes the long game.", phase: "duration" },
    { id: "late-stage", time: "When ART fails or is interrupted", title: "The old picture returns", description: "Psychomotor retardation deepening to mutism, paraparesis and bed-boundness with incontinence, myoclonus and seizures — the untreated end-stage, now largely preventable.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Before combination therapy, HIV-associated dementia was among the commonest dementias of young adults. The multicentre cohort incidence: about 21 per 1,000 person-years (1990–92) falling to about 10.5 per 1,000 person-years (1996–98) after HAART — the risk halved. Post-mortem data then showed severe HIV encephalopathy largely disappearing while mild-to-moderate encephalopathy became more common (longer survival with virus in the brain); a further rise was suggested around 2003 as treatment failure accumulated in some cohorts. Survival after dementia diagnosis rose from about 5 months (1993–95) to about 38.5 months (1996–2000).",
    indianPrevalence: "India holds one of the world's largest populations living with HIV (NACO estimates, adult prevalence roughly 0.2%), concentrated in high-risk groups and certain districts. The mental-health consequence is under-measured, but the practical points stand: most people with HIV in India are diagnosed late, present to general hospitals and district ART centres rather than psychiatry, and HAND is usually detected — if at all — by physicians and ART-centre counsellors rather than psychiatrists.",
    lifetimeRisk: "Predictors of faster progression: low CD4 count, high viral load, untreated or failing ART, intravenous drug use, older age; the treated-and-suppressed population's risk is a small fraction of the untreated's.",
    genderRatio: "No specific HAND sex differential described; the epidemic's demographics dominate — in India, the perinatal and vertical-transmission survivors reaching adulthood add a second, younger cohort.",
    ageOfOnset: "Young adults — the population-defining contrast with the degenerative dementias; any subcortical-speed cognitive decline in a young adult earns the HIV test.",
    indianNotes: "The under-diagnosis loop: stigmatised patients rarely volunteer the diagnosis; the young 'slowing + imbalance + apathy' presentation gets missed as depression — the MBBS rule (HIV test in any young subcortical dementia workup) is the countermeasure.",
  },
  etiology: [
    { category: "biological", factor: "The viral engine", details: "Active HIV infection of the CNS; viral load in blood and CSF; advanced immunosuppression with low CD4 counts predicting faster progression; the inflammatory bystander damage (macrophage/microglial neurotoxins, apoptosis) with gp120 direct toxicity." },
    { category: "biological", factor: "The vulnerable geography", details: "Frontal lobes, subcortical white matter and basal ganglia — post-mortem and MRI findings matching the speed-and-drive-first clinical picture; cortex relatively spared (aphasia/agnosia/apraxia unusual)." },
    { category: "biological", factor: "The modern modifiers", details: "Untreated or failing ART (resistance, poor penetration debates); secondary infections and metabolic disturbances aggravating the picture; longer survival shifting the spectrum toward milder tiers." },
    { category: "social", factor: "The behavioural-social amplifier", details: "Intravenous drug use predicting faster progression; the stigma-driven adherence interruptions (disclosure fears, employment loss, marriage concerns) feeding directly into dementia risk." },
    { category: "environmental", factor: "The herbal self-medication channel", details: "Indian patients commonly use herbal and Ayurvedic preparations — the St John's Wort/indinavir interaction is the textbook example of enzyme induction dropping antiretroviral levels into the failure range; every herbal product must be asked about by name." },
    { category: "psychological", factor: "The depression overlap", details: "Depression mimics, masks and co-travels with HAND — each worsening the other's fog; the untreated depression both manufactures cognitive complaints and destroys the motivation the adherence architecture needs." },
  ],
  symptomClusters: [
    {
      category: "1. Cognitive (the slowing cluster)",
      symptoms: ["Forgetfulness and loss of concentration — appointments missed, lists needed for ordinary duties", "Mental slowing: extra time to organise thoughts and finish daily tasks; losing track of conversations or one's own train of thought", "Mental status testing near-normal early — only slowed verbal/motor responses and difficulty recalling objects after five minutes or more", "Worst domains on formal testing: fine motor control (finger tapping, grooved pegboard), rapid sequential problem-solving (trail-making, digit symbol), visuospatial problem-solving, verbal fluency (spontaneity), visual memory", "Naming and vocabulary largely preserved even in advanced disease — the subcortical signature against Alzheimer's"],
    },
    {
      category: "2. Behavioural (the apathy cluster)",
      symptoms: ["Reduced spontaneity and blunted emotional responsiveness; social withdrawal", "Indifference to personal and professional responsibilities; falling work output", "Fatigue, malaise, loss of sexual drive", "Depression, irritability, emotional lability, agitation and psychotic symptoms can also occur — the comorbidity that demands its own treatment"],
    },
    {
      category: "3. Motor (the legs cluster)",
      symptoms: ["Loss of balance and coordination, clumsiness, leg weakness — dropping things, tripping more, walking carefully", "Postural tremor, brisk lower-limb reflexes (hyperreflexia)", "Ataxia visible only on rapid turns or tandem gait; slowed rapid alternating movements", "Frontal release signs (snout, palmar grasp), dysarthria, interrupted smooth pursuit or slowed saccades", "Late: severe psychomotor retardation, monotonous slowed speech to mutism, paraparesis leaving the person bed-bound, incontinence, myoclonus and seizures; consciousness usually preserved except for hypersomnolence"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "WHO 1990 logic (paraphrased)",
      code: "ICD-10 dementia + HIV modifications",
      criteria: [
        "The ICD-10 research criteria for dementia are met, with HIV-specific modifications:",
        "(a) memory decline may not be severe enough to impair daily activities early;",
        "(b) motor decline is part of the syndrome, verified clinically/neuropsychologically;",
        "(c) symptoms last at least one month;",
        "(d) the cortical flagship signs — aphasia, agnosia, apraxia — are unusual.",
        "Plus: laboratory evidence of systemic HIV infection, AND no evidence of another aetiology on history, examination, CSF and CT/MRI (excluding active CNS opportunistic processes).",
      ],
      duration: "At least one month — the HIV-specific duration gate.",
      indianNote: "The 'no other aetiology' leg is the Indian examination's centre of gravity: CNS tuberculosis belongs early in the differential given the prevalence; CSF and imaging are not optional.",
    },
    {
      system: "AAN 1991 logic (paraphrased)",
      code: "The two-domain rule",
      criteria: [
        "Laboratory evidence of HIV infection, plus acquired abnormality in at least TWO cognitive abilities (attention, processing speed, abstraction/reasoning, visuospatial skill, memory/learning, speech/language) for at least one month,",
        "plus at least ONE of: motor abnormality, or decline in motivation/emotional control/social behaviour;",
        "no clouding of consciousness while establishing the deficit (the delirium exclusion);",
        "no other aetiology found. Both systems grade severity (mild/moderate/severe) by impairment in daily activities.",
      ],
      duration: "At least one month of the cognitive-motor-behavioural decline.",
      indianNote: "The modern umbrella (know it as an update): HAND three tiers — asymptomatic neurocognitive impairment, mild neurocognitive disorder, HIV-associated dementia — replacing the older minor cognitive/motor disorder nomenclature.",
    },
    {
      system: "The differential work-up",
      code: "The three legs and the mimic table",
      criteria: [
        "The three legs: evidence of HIV; the cognitive-motor-behavioural decline; and EXCLUSION of other causes — CSF and CT/MRI are the minimum exclusion set, not optional.",
        "Imaging: cerebral atrophy with widened sulci; MRI adds T2 hyperintensities in periventricular white matter and centrum semiovale without mass effect — while performing differential work (ring-enhancing → toxoplasmosis; contrast-enhancing mass → lymphoma).",
        "CSF: raised total protein, raised IgG fraction/index, possible mononuclear pleocytosis; HIV RNA by PCR; the decisive differential tests — India ink/ cryptococcal antigen/ fungal culture for cryptococcus; CSF-directed identification of CNS tuberculosis, CMV encephalitis and neurosyphilis.",
        "The depression separation (pseudodementia warning signs): intratest variability; mood-congruent complaint-performance mismatch; 'I don't know' answers that turn correct with gentle urging — remembering both can coexist in one patient.",
        "Delirium exclusion: fluctuating consciousness points elsewhere; HAND preserves consciousness (hypersomnolence excepted).",
      ],
      duration: "The workup runs alongside treatment, never before it: suspected Wernicke-type emergencies in the malnourished get thiamine first; suspected infection gets its therapy while the dementia assessment continues.",
      indianNote: "The psychiatric referral 'dementia vs psychosis' in a young adult: the preserved personality and immediate memory with pure new-learning-plus-slowing failure gives the direction in three minutes — and the HIV test belongs in the same consultation.",
    },
  ],
  severityScales: [
    {
      name: "The modern HAND spectrum",
      fullName: "Three-tier HIV-associated neurocognitive disorder",
      measures: "Where on the spectrum the person stands — impairment against function, per neuropsychological testing.",
      ranges: [
        { min: 0, max: 0, severity: "Asymptomatic neurocognitive impairment", action: "Testing impairment ≥1 SD below norms in at least two domains with preserved daily function: ART adherence reinforced (the disease-modifying move), the vascular-metabolic health tier, monitoring — the tier the modern era made commonest" },
        { min: 1, max: 1, severity: "Mild neurocognitive disorder", action: "Impairment with mild interference in daily function: the adherence architecture built (supervised dosing, pill organisers, the family tablet monitor), the mood and sleep riders treated, functional scaffolding installed early" },
        { min: 2, max: 2, severity: "HIV-associated dementia", action: "Marked impairment with impaired daily function: the full programme — optimised ART with the treating physician, the opportunistic screen, structured routines, orienting interactions, personal-financial monitoring, family psychoeducation, the pharmacological tightrope walked with extra caution" },
      ],
      indianNote: "The ART-centre physician or counsellor often holds the earliest observations — the psychiatrist's role is the depression-vs-dementia separation, the behavioural-mood management, and the adherence support.",
    },
    {
      name: "The antipsychotic tightrope",
      fullName: "Behavioural pharmacology staging in AIDS",
      measures: "How much pharmacological risk the fragile system can carry — and in what order.",
      ranges: [
        { min: 0, max: 0, severity: "Structure-first territory", action: "Structured daily schedule, familiar environments, titrated external stimuli, frequent orienting interactions with significant others — the environmental tier before any psychotropic" },
        { min: 1, max: 1, severity: "SSRI-tier needs", action: "Depression treated actively: SSRIs preferred over tricyclics (better tolerated, diarrhoea-troubled patients excepted); the interaction question asked of every herbal self-medication by name" },
        { min: 2, max: 2, severity: "Psychosis or dangerous dyscontrol", action: "Start low, go slow, review early: atypicals cautiously (preliminary evidence of better tolerance even after typical-antipsychotic failure); typicals carry high EPS and neuroleptic-malignant-syndrome risk in AIDS — haloperidol in Indian emergencies deserves extra justification and the shortest possible course; new fever with stiffness reported urgently" },
      ],
      indianNote: "The behavioural-disturbance service question: poor impulse control and sexual acting-out can pose risk to other patients and staff — explicit safety planning belongs in the chart, not in the corridor.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Depressive pseudodementia", distinguishingFeatures: "Intratest variability (failing easy items then answering harder ones); complaint-performance mismatch (complaining loudly, performing near-perfectly); 'I don't know' answers turning correct with gentle urging.", keyDifferentiator: "The direction of the mismatch: depression over-complains and under-performs variably; HAND under-complains and performs consistently badly — and both can coexist." },
    { condition: "Cerebral toxoplasmosis", distinguishingFeatures: "Ring-enhancing lesions on CT/MRI, focal signs, fever — the opportunistic mimic that must not be read as progression.", keyDifferentiator: "Fever plus focal deficit forces the scan; the ring-enhancement pattern routes to anti-toxoplasma therapy, not psychotropics." },
    { condition: "Primary CNS lymphoma", distinguishingFeatures: "Contrast-enhancing mass lesion that may resemble toxoplasmosis on imaging — trial of anti-toxoplasma therapy or biopsy settles it.", keyDifferentiator: "The mass-versus-ring reading plus the clinical course; the oncology pathway, not the dementia pathway." },
    { condition: "Cryptococcal meningitis", distinguishingFeatures: "Headache, meningism, raised CSF pressure — the subacute- headache presentation in advanced immunosuppression.", keyDifferentiator: "India ink stain, cryptococcal antigen and fungal culture on CSF; the tap that must not be deferred." },
    { condition: "CNS tuberculosis / neurosyphilis / CMV encephalitis", distinguishingFeatures: "The Indian prevalence tier: CNS tuberculosis belongs EARLY in any focal or meningeal HIV picture; CSF and serology direct.", keyDifferentiator: "The epidemiology dictates the differential's order — TB first in India, syphilis and CMV in the same workup breath." },
    { condition: "Delirium", distinguishingFeatures: "Fluctuating consciousness with clouding — versus HAND's preserved consciousness (hypersomnolence excepted).", keyDifferentiator: "The attention-and-consciousness examination; the fluctuation pattern over hours." },
    { condition: "Substance-related cognitive impairment", distinguishingFeatures: "History-directed — and the comorbidity that predicts faster progression itself (intravenous drug use).", keyDifferentiator: "The use history taken privately; the dual-diagnosis programme joined, not judged." },
  ],
  management: [
    { category: "pharmacotherapy", name: "Treat the driver: antiretroviral therapy", description: "ART reduced dementia incidence and improved psychomotor speed in cohort studies; the regimen is started and optimised with the treating physician and monitored constantly — the optimal regimen for the dementia itself has not been established (the CNS-penetration debate remains honestly open). Reinforce, never duplicate or alter, the ART prescription.", whenToUse: "Always — the disease-modifying backbone; the psychiatrist's contribution is the adherence architecture around it.", indianContext: "ART is free through NACO-programme centres; the psychiatrist coordinates with the ART-centre physician and counsellor — re-linkage (the phone call to the counsellor) is a clinical act of disease modification, not administration." },
    { category: "pharmacotherapy", name: "Apathy and slowing: the stimulant tier", description: "Methylphenidate 5–20 mg/day is useful for apathy and cognitive slowing with relatively mild side effects; cholinesterase inhibitors such as donepezil have only anecdotal support here, unlike Alzheimer's disease — a teaching point against reflex prescribing.", whenToUse: "Where apathy and psychomotor slowing impair function after the ART programme and the mood riders are addressed.", indianContext: "Methylphenidate is a Schedule X drug in India — prescription and dispensing tightly controlled, affecting availability outside major centres; where it is unreachable, the behavioural activation tier and the structured-day discipline carry the load." },
    { category: "pharmacotherapy", name: "Depression and the interaction vigilance", description: "Tricyclics and SSRIs work about as well as in HIV-negative patients; SSRIs appear better tolerated except in patients troubled by diarrhoea. The classic caution: psychotropics and antiretrovirals can interact — St John's Wort induces protease-inhibitor (indinavir) metabolism and drops levels to treatment-failure range; ask every patient about herbal and Ayurvedic self-medication by name.", whenToUse: "The depression diagnosed (or the pseudodementia direction resolved) — treated actively as its own disease, not watched politely.", indianContext: "The herbal question is an Indian clinical habit to build: list everything the patient takes, and let the ART physician check the combination before continuing." },
    { category: "lifestyle", name: "The structured environment and the adherence architecture", description: "Maintain a structured daily schedule; titrate external stimuli; restrict to familiar environments; provide frequent orienting interactions with significant others; monitor personal and financial affairs EARLY, while the person can still participate. The adherence architecture: supervised daily dosing tied to a fixed routine (meals, prayer time), pill organisers, a designated family 'tablet monitor' — the illness damages the very system needed to treat it, so the system moves outside the patient. Family psychoeducation is essential.", whenToUse: "From diagnosis — the environment and the family ARE the treatment's delivery system.", indianContext: "The wife's presence at the OPD is the single strongest prognostic asset available — the family-as-therapist teaching delivered once, in one session, in words the household keeps." },
  ],
  safety: {
    redFlags: [
      "New fever with muscle stiffness in any AIDS patient on an antipsychotic — neuroleptic malignant syndrome until proven otherwise: stop the drug, treat as a medical emergency",
      "Focal neurological signs or fever in a stable HAND patient — the opportunistic-mimic gate: image and tap before touching the psychotropics or the dementia label",
      "New headache with meningism in advanced immunosuppression — cryptococcal meningitis: the CSF that must not be deferred",
      "Adherence collapse (missed appointments, unfilled prescriptions, the stopped ART) — each interruption is brain risk compounding; re-linkage the same week",
      "The undisclosed herbal self-medication discovered late — enzyme-induction treatment failure riding on an unasked question",
      "Behavioural disturbance with risk to other patients or staff (poor impulse control, sexual acting-out) — explicit safety planning belongs in the chart",
    ],
    urgentGuidance:
      "The order of operations: (1) any fever, focal sign or meningism exits the dementia script first — opportunistic workup (imaging + CSF) with the treating team; (2) any new antipsychotic in an AIDS patient starts low, goes slow, with early review and the NMS teaching handed to the family (new fever plus stiffness = emergency); (3) the herbal list taken by name and checked with the ART physician; (4) the adherence architecture audited at every contact (who owns the tablets, what anchors the dosing, what happens when the family is away); (5) personal and financial monitoring begun EARLY, while the person can still participate; (6) the stigma work treated as clinical intervention — disclosure counselling and the employment-marriage conversations that protect adherence.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier for the depression differential and comorbidity",
      rationale: "Depression mimics, masks and co-travels with HAND; SSRIs work about as well as in HIV-negative patients and appear better tolerated than tricyclics (the diarrhoea-troubled excepted — the gut decides the molecule). Treating the depression lifts the fog the dementia is blamed for and restores the motivation the adherence architecture needs.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted comorbidity care alongside the disease-modifying ART programme; interaction vigilance maintained with the treating physician.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the better-tolerated tier",
      rationale: "The second member of the SSRI pair chosen on gut tolerability and comorbidity — the same tier logic with the interaction question asked of every co-prescription and herbal self-medication.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same tier and framing as sertraline: comorbidity care within the ART-centre partnership.",
    },
  ],
  contentGaps: [
    "The antiretroviral regimens (the disease-modifying tier itself) have no KYP drug lessons — the adherence architecture and the ART-centre partnership are taught here; the regimen belongs to the treating physician.",
    "Methylphenidate (the apathy-and-slowing stimulant, 5–20 mg/day) has no KYP lesson and is Schedule X in India — tightly controlled, scarce outside major centres.",
    "The antipsychotic tier for behavioural dyscontrol has no KYP lessons — the tightrope logic (atypicals cautiously, typicals with high EPS/NMS risk) is taught in this course.",
    "The opportunistic-mimic pharmacology (anti-toxoplasma therapy, antifungals, anti-tubercular treatment) has no KYP lessons — the recognition-and-routing discipline is the psychiatrist's contribution.",
    "Donepezil and the cholinesterase tier (anecdotal support only here, unlike Alzheimer's) are documented as a teaching contrast, not a route.",
  ],
  patientGuide: {
    whatIsIt:
      "This is a thinking-and-movement problem caused by the HIV virus itself reaching the brain. It slows the mind and the legs before it touches the memory's core: answers come late, initiative fades, walking grows careful — while conversation, old knowledge and recognition of everyone stay. It is one of the few dementias whose cause can be treated: the antiretroviral medicines, taken steadily, can slow, halt or partly reverse it. The treatment's hardest part is not the medicine — it is keeping the routine going when the illness makes routines hard, which is why the family's role is part of the treatment.",
    whatCausesIt:
      "HIV hides inside immune cells and crosses into the brain, where it sets up a long, quiet infection in the regions that serve speed and drive. Most of the damage is not the virus directly but the immune battle around it — the inflammation injures the very tissue it defends. Keeping the virus suppressed with the ART tablets keeps that battle small, which is why the tablets are the treatment even though they are not 'brain tablets'.",
    symptoms:
      "Thinking: forgetfulness, poor concentration, slowed thinking, losing track of conversations. Drive: less spontaneity, blunted feelings, withdrawal from work and people, fatigue. Body: clumsiness, leg weakness, careful walking, unsteadiness on quick turns. Later, if untreated: very slowed speech and movement, incontinence, being bed-bound. Important: fever, one-sided weakness, severe headache or a stiff neck are NOT this illness worsening — they are warnings of other brain infections that need same-day hospital care.",
    treatment:
      "The heart of the treatment is the ART programme, taken steadily and never interrupted — the doctor's job is optimising it, the family's job is the routine that protects it (fixed dosing times tied to meals or prayer, a pill organiser, one named person as the tablet monitor). Depression is treated actively when present — it mimics and worsens everything. For apathy and slowing, a stimulant medicine helps some people (a tightly controlled medicine in India, available through major centres). Behavioural problems are managed with structure first, medicines cautiously — the older sedatives carry particular dangers in this illness and new fever with stiffness on any new tablet is an emergency.",
    selfHelp: [
      "The tablet anchor: dosing tied to a fixed daily event (the meal, the prayer) with the organiser filled weekly by the named tablet monitor — the routine IS the medicine's guardian.",
      "The structured day: same schedule, familiar places, calm stimulation — the brain works better when the day is predictable.",
      "The orienting interactions: frequent, brief, warm contact with familiar people — the social environment as ongoing treatment.",
      "The herbal rule: nothing enters the pillbox without the ART doctor's check — some herbal medicines powerfully lower the antiretroviral levels (the St John's Wort example is the textbook case).",
      "The fever-and-stiffness rule: any new tablet followed by fever and muscle stiffness = stop and seek emergency care the same day.",
      "The financial safety net organised early — banking, nominations and property decisions made while participation is still possible.",
      "The one-written-instruction rule: each consultation ends with one written instruction, not five spoken ones.",
    ],
    whenToSeekHelp: [
      "Fever, one-sided weakness, severe headache or stiff neck — same-day hospital (other brain infections, not 'the dementia worsening')",
      "New fever with muscle stiffness after starting any sedative medicine — emergency (neuroleptic malignant syndrome)",
      "Missed ART doses becoming a pattern, or the routine breaking down — the re-linkage call that week",
      "The family caregiver's own exhaustion or the household's crisis — the support that protects the patient's treatment",
      "Any planning question (work, marriage, disclosure) that is delaying care — the counselling conversation is clinical, not a courtesy",
    ],
    indianResources: [
      "The district ART centre (NACO programme) — free antiretrovirals, counselling, the treating partnership; re-linkage starts with a phone call to the counsellor",
      "Tele-MANAS 14416 (24×7, free) — for the caregiver's distress and the family's routing questions",
      "The ART-centre physician as the coordinator of every herbal, psychiatric and medical question — one team, one list",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific HAND pathway exists; practice follows the WHO/AAN diagnostic logic inside the modern three-tier HAND scheme, with NACO programme structures (free ART, district centres, counsellors) as the delivery spine and the treating-physician partnership as the pharmacological rule.",
    systemContext: "Government ART centres (under NACO) provide free antiretrovirals and counselling; district hospitals manage complications; psychiatry is consulted late — usually for 'behavioural' problems, depression, or when the family reports 'he has become dull'. The diagnosis is usually made by the ART-centre physician or a neurologist; the psychiatrist's role is the depression-vs-dementia separation, behavioural and mood management, and adherence support.",
    programmeContext: "Stigma is a treatment issue: disclosure fears, employment loss and marriage concerns delay presentation and interrupt ART — both feeding directly into dementia risk. Counselling around disclosure is a clinical intervention here, not a courtesy. Out-of-pocket costs arise for imaging, CSF procedures and private consultation (widely variable, approx 2026); methylphenidate is Schedule X — availability concentrated in major centres.",
    costConsiderations: "ART is free in the programme; the psychiatric tier (SSRI generics) is inexpensive; the expensive items are the investigations and the private-sector detours; the scarcest resource is the follow-up structure — which is why the family-as-monitor architecture is the Indian answer, delivered free in one session.",
    culturalConsiderations: "The herbal question is the Indian-specific interaction channel: St John's Wort dropping indinavir levels is the textbook example, and the Ayurvedic self-medication habit makes the by-name enquiry a standard consultation move. The disclosure problem travels through marriage and employment anxieties — the counselling that addresses them IS adherence protection. The Indian exam vignette (hyperemesis, malnutrition, TB as the thiamine routes) shares with this disease the lesson that the young subcortical presentation is under-referred: any young adult with 'slowing + imbalance + apathy' earns the HIV test, because the diagnosis is treatable and stigmatised patients rarely volunteer it.",
    patientCounselling: [
      "The one-line philosophy: 'The tablets are the brain's treatment — not despite being HIV medicines but because of it; the routine that protects the tablets protects the mind.'",
      "The dullness script: 'The slowness and the flatness are the brain illness of the virus itself, not a character change and not laziness — and the treatment can partly reverse them.'",
      "The fever rule script: 'Fever, one-sided weakness, severe headache or stiff neck are not this illness worsening — they are warnings of other infections that need the hospital the same day.'",
      "The herbal rule script: 'Nothing enters the pillbox without the ART doctor's check — some herbal medicines make the HIV tablets fail by flushing them out.'",
      "The adherence script, to the family: 'He cannot be the memory system for his own treatment — that job moves to the routine and to you; the filled organiser, the fixed time, the weekly check.'",
      "The disclosure counselling frame: 'Who needs to know, what they need to know, and what protection the knowing buys' — the marriage-employment anxieties addressed as clinical adherence work, not moral advice.",
    ],
  },
  decisionPath: {
    title: "The young adult whose speed and drive are failing",
    nodes: [
      {
        id: "start",
        question: "A young adult presents with cognitive slowing, apathy or motor signs. First: the tempo and the consciousness.",
        branches: [
          { label: "Months-speed decline, consciousness preserved", next: "subcortical-gate" },
          { label: "Fluctuating, hours-days, clouded", next: "delirium-path" },
          { label: "Weeks-onset with mood change first", next: "depression-path" },
          { label: "Fever or focal signs present", next: "opportunistic-path" },
        ],
      },
      {
        id: "subcortical-gate",
        question: "The subcortical signature: slowed processing, apathy, motor signs — naming and vocabulary preserved.",
        branches: [
          { label: "HIV status known positive / risk factors present", next: "hand-workup" },
          { label: "Status unknown or unasked", next: "test-gate" },
          { label: "Known HIV, well-suppressed on ART", next: "milder-tier-path" },
        ],
      },
      {
        id: "test-gate",
        question: "The unasked diagnosis: the HIV test belongs in any young subcortical dementia workup.",
        recommendation: "Offer the test with counselling as part of the standard workup (with the thyroid, B12, syphilis tier) — the diagnosis is treatable and stigmatised patients rarely volunteer it; the pre-test conversation is a clinical skill, not a formality.",
      },
      {
        id: "opportunistic-path",
        question: "Fever or focal signs: the script changes — this is not 'the dementia worsening'.",
        recommendation: "Same-day imaging and CSF with the treating team: ring-enhancing → toxoplasmosis; contrast-enhancing mass → lymphoma; meningism with raised pressure → cryptococcus; in India, CNS tuberculosis early in the differential alongside CMV and neurosyphilis. The psychiatrist's contribution: refusing to medicalise a new focal picture as progression.",
      },
      {
        id: "delirium-path",
        question: "Clouded and fluctuating: the delirium rules run first.",
        recommendation: "The delirium cascade (urine, salts, infection, the chart) with the HIV-specific additions — opportunistic infection at the top of the list in advanced immunosuppression; treat the cause, then reassess the baseline.",
      },
      {
        id: "depression-path",
        question: "The pseudodementia warning signs: variability, complaint-performance mismatch, 'I don't know' turning correct with urging.",
        recommendation: "Treat the depression actively (SSRI tier, better tolerated than tricyclics) and re-test in weeks — remembering both diseases can coexist in one patient: the improvement that leaves a residual subcortical pattern is the two-disease answer.",
      },
      {
        id: "hand-workup",
        question: "The three diagnostic legs: HIV evidence, the cognitive-motor-behavioural decline, the exclusion.",
        recommendation: "Collateral and neuropsychological profile (the subcortical signature: fine motor, processing speed, fluency worst; naming/vocabulary preserved); imaging (atrophy, white-matter T2 change, the mimic screen); CSF (protein, IgG, the decisive cryptococcus/TB/syphilis tests); CD4 and viral load with the ART physician; the WHO/AAN logic recited in plain words (≥2 cognitive domains ≥1 month + motor or behavioural change, consciousness preserved, no other cause).",
      },
      {
        id: "milder-tier-path",
        question: "Well-suppressed on ART: the modern milder tiers.",
        recommendation: "The three-tier HAND assignment; the vascular-metabolic health tier (the suppressed-virus brain still ages); the milder-impairment realities explained; the adherence architecture maintained — interruption is the deepest risk remaining.",
      },
      {
        id: "management-gate",
        question: "HAND confirmed. The programme:",
        branches: [
          { label: "The ART backbone (always)", next: "art-path" },
          { label: "Apathy and slowing impairing function", next: "stimulant-path" },
          { label: "Depression present", next: "ssri-path" },
          { label: "Psychosis or dangerous dyscontrol", next: "tightrope-path" },
          { label: "Adherence and family structure", next: "adherence-path" },
        ],
      },
      {
        id: "art-path",
        question: "The disease-modifying backbone.",
        recommendation: "Optimised with the treating physician, monitored constantly, never duplicated or altered by the psychiatrist; the CNS-penetration debate left honestly open; the re-linkage call made the same week the patient disappears from the programme.",
      },
      {
        id: "stimulant-path",
        question: "The stimulant tier for apathy and slowing.",
        recommendation: "Methylphenidate 5–20 mg/day where available — Schedule X in India (major-centre availability, tight control); where unreachable, the behavioural activation tier, the structured day and the family's engagement carry the load; cholinesterase inhibitors explicitly NOT the reflex (anecdotal support only here).",
      },
      {
        id: "ssri-path",
        question: "The depression treated as its own disease.",
        recommendation: "SSRIs preferred over tricyclics (better tolerated; the diarrhoea-troubled patient deciding the molecule); the herbal interaction question asked by name (St John's Wort–indinavir the textbook case); the improvement that lifts the fog and protects adherence.",
      },
      {
        id: "tightrope-path",
        question: "Psychosis or dangerous dyscontrol: the pharmacological tightrope.",
        recommendation: "Structure and environmental management first; then start low, go slow, review early — atypicals cautiously tolerated (preliminary evidence even after typical-antipsychotic failure); typicals carrying high EPS/NMS risk in AIDS; haloperidol in Indian emergencies deserving extra justification and the shortest course; new fever with stiffness = stop and emergency care; safety planning for staff and other patients written explicitly.",
      },
      {
        id: "adherence-path",
        question: "The architecture that makes everything else work.",
        recommendation: "Supervised daily dosing tied to fixed routines (meals, prayer); pill organisers; the named family tablet monitor; personal and financial affairs monitored EARLY while participation is possible; family psychoeducation in one session; the disclosure counselling that protects the whole edifice; the structured day and the orienting interactions as standing treatment.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing depression and stopping the workup in a young adult with subcortical slowing",
      why: "The early apathy-and-slowing cluster looks like 'not coping' — and the stigmatised diagnosis is never volunteered; the workup that never includes the HIV test misses a treatable dementia at its most treatable point.",
      correction: "The standing rule: any young adult with cognitive decline plus motor slowing earns the HIV test as part of the workup — offered with counselling, never assumed away.",
    },
    {
      mistake: "Reading a new focal neurological picture as 'the dementia progressing'",
      why: "The opportunistic mimics (toxoplasmosis, lymphoma, cryptococcus, CNS tuberculosis) present on the same stage — and each is treatable when recognised; medicalising them as progression closes the door on exactly the treatments that work.",
      correction: "The fever-and-focal gate: fever, focal deficit or meningism exits the dementia script first — imaging and CSF with the treating team before any psychotropic or label changes.",
    },
    {
      mistake: "Prescribing a typical antipsychoid at standard doses for agitation in AIDS",
      why: "The AIDS brain is exquisitely sensitive — extrapyramidal effects and neuroleptic malignant syndrome arrive at doses the general population tolerates; the stiff-fevered casualty return is the error's price.",
      correction: "The tightrope: structure first, then start low, go slow, review early; atypicals cautiously preferred; haloperidol reserved for emergencies with the shortest course and explicit justification; the family taught the fever-plus-stiffness emergency rule.",
    },
    {
      mistake: "Forgetting to ask about herbal and Ayurvedic self-medication by name",
      why: "The St John's Wort–indinavir interaction drops protease-inhibitor levels into the failure range — an adherence problem wearing a traditional-medicine disguise; the unasked question becomes the treatment failure.",
      correction: "The by-name herbal list at every consultation, checked with the ART physician: 'list everything he takes — the tablets, the tonics, the herbal powders — and let the ART doctor check the combination before continuing.'",
    },
    {
      mistake: "Treating confabulation-adjacent inconsistencies or under-complaint as malingering",
      why: "The HAND patient under-complains and performs consistently badly — the opposite of depression's loud complaint; misreading the direction either misses the dementia or insults the depression.",
      correction: "The three pseudodementia warning signs applied with direction: variability + complaint-performance mismatch + 'I don't know'-turning-correct = depression; understated complaint with consistent impairment = the organic picture — and both can coexist, so treat the depression and re-test.",
    },
    {
      mistake: "Leaving adherence to the patient whose memory is the disease's target",
      why: "The illness damages the very system needed to treat it — self-managed dosing fails silently, resistance accumulates, and the deeper impairment then destroys what remained.",
      correction: "The architecture moves the memory outside the patient: fixed anchors (meals, prayer), the weekly-filled organiser, the named family monitor — and the re-linkage call the week the routine breaks.",
    },
    {
      mistake: "Reaching for donepezil because 'it is a dementia'",
      why: "The cholinesterase logic of Alzheimer's does not transfer — only anecdotal support exists here, and the reflex prescription adds side effects to a fragile system for no established gain.",
      correction: "The honest tier taught instead: methylphenidate for apathy and slowing (where the Schedule X reality permits), the treated riders (mood, sleep, pain), and the ART backbone doing the disease modification.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The Trojan-horse route: HIV hidden in infected macrophages crossing the blood-brain barrier — the two cell types named (macrophages, microglia).",
        "The early triad: cognitive slowing, apathy, motor slowing — with naming and vocabulary preserved against the cortical dementias.",
        "The WHO modifications to ICD-10 dementia: memory may not hit daily function; motor decline counts; 1-month minimum; aphasia/agnosia/apraxia unusual.",
        "The three diagnostic legs: HIV evidence + the decline + exclusion of other causes (CSF and imaging are the minimum exclusion set).",
        "The drug cautions: typical antipsychotics → EPS/NMS in AIDS; St John's Wort → protease-inhibitor failure; SSRIs over TCAs (diarrhoea caveat); methylphenidate 5–20 mg/day for apathy.",
      ],
      practical: [
        "Demonstrate the pseudodementia examination: intratest variability, complaint-performance mismatch, the 'I don't know'-with-urging manoeuvre — and state its direction (depression over-complains; HAND under-complains).",
        "Take the adherence history with the family: who owns the tablets, what anchors the dosing, what happens when the routine breaks — the three questions that predict the next six months.",
      ],
      longAnswer: [
        "A 32-year-old with advanced HIV develops forgetfulness, mental slowing, apathy and leg clumsiness over two months: differential diagnosis and management (the evergreen HAND essay — the triad, the mimic table, the three legs, the tightrope).",
        "Neuropsychiatric manifestations of HIV infection: the spectrum, the treatment-era changes, and the psychiatric roles.",
      ],
    },
    neetPg: {
      highYield: [
        "THE PROFILE: subcortical speed-and-drive (slowed processing, apathy, motor signs) with NAMING AND VOCABULARY PRESERVED even late; consciousness preserved — against Alzheimer's cortical forgetfulness and delirium's clouding.",
        "THE MECHANISM: infected macrophages cross the BBB (Trojan horse); activated microglia/macrophages release neurotoxins; neurons die by APOPTOSIS (bystander damage); gp120 direct toxicity; frontal-subcortical-white-matter-basal-ganglia geography.",
        "THE NUMBERS: incidence 21.1 → 10.5 per 1,000 person-years (pre- vs post-HAART, the multicentre cohort); survival after dementia diagnosis ~5 → ~38.5 months.",
        "THE NAMING TIMELINE: AIDS dementia complex (Navia, 1986) → WHO HIV-associated dementia + minor cognitive/motor disorder (1990) → AAN nomenclature (1991) → modern three-tier HAND (asymptomatic ANI / mild MND / dementia HAD).",
        "THE FOUR WHO MODIFICATIONS: memory may not impair daily function; motor decline is part of the syndrome; ≥1 month duration; cortical signs (aphasia/agnosia/apraxia) unusual.",
        "THE AAN RULE: ≥2 cognitive domains impaired ≥1 month + motor OR behavioural change; no clouding of consciousness; no other cause — CSF and CT/MRI as the minimum exclusion set.",
        "THE WORST DOMAINS: fine motor (finger tapping, grooved pegboard), rapid sequential problem-solving (trail-making, digit symbol), visuospatial, verbal fluency, visual memory — naming and vocabulary preserved.",
        "THE MIMICS: toxoplasmosis (ring-enhancing, focal, fever), primary CNS lymphoma (contrast-enhancing mass), cryptococcal meningitis (headache, meningism, raised pressure, India ink/antigen), CNS tuberculosis (the Indian early differential), CMV, neurosyphilis.",
        "THE DRUG TRAPS: typical antipsychotics → EPS + NMS in AIDS (start low, go slow with atypicals); St John's Wort → indinavir/protease-inhibitor failure (enzyme induction); SSRIs over TCAs (diarrhoea caveat); methylphenidate 5–20 mg/day for apathy; donepezil anecdotal-only here.",
        "THE VICIOUS CYCLE: cognitive impairment undermines adherence → interrupted ART → deeper immunosuppression and brain infection → deeper impairment; the adherence architecture breaks the cycle.",
        "PSEUDODEMENTIA SIGNS: intratest variability; complaint-performance mismatch; 'I don't know' turning correct with urging — with the caveat that both coexist in one HIV-positive patient.",
      ],
      pyqConcepts: [
        "The numbers to quote: 21.1 → 10.5 and 5 → 38.5 — the two HAART-era statistics examiners reward.",
        "CNS tuberculosis early in the Indian differential — the epidemiology ordering the mimic table.",
        "Methylphenidate as Schedule X in India — the availability nuance in Indian answers.",
        "The HIV test in any young subcortical dementia — the screening-policy answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old migrant worker, HIV-positive two years, lost to ART follow-up after four months ('no time, no bus money, people talk'), brought by his wife for 'he has become dull': stopped calling home, forgets conversations, walks carefully at night, reprimanded at work — with postural tremor, brisk knee reflexes, slowed alternating movements, 5-minute recall difficulty and complaints that UNDERSTATE the deficits: the re-linkage (the phone call to the counsellor), the opportunistic screen, the structured home routine and the family session that relabels 'dullness' as the brain illness of the virus — the missed window reopened.",
        "A 28-year-old on ART six years presents with two weeks of forgetfulness plus mild left-arm weakness and evening fevers, MRI showing ring-enhancing lesions: the psychiatric question ('is the dementia worsening?') refused — cerebral toxoplasmosis treated as infection, with the Indian rider that CNS tuberculosis belongs in the same differential and the psychiatrist's contribution being the refusal to medicalise a new focal picture as progression.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "HAND = subcortical dementia of young adults: slowing + apathy + motor signs, naming/vocabulary preserved.",
        "Mechanism: macrophage Trojan horse; microglial neurotoxins; neuronal apoptosis (bystander).",
        "HAART halved the incidence; survival after diagnosis 5 → 38.5 months.",
        "Typical antipsychotics: EPS/NMS risk high in AIDS; atypicals cautious.",
        "St John's Wort + indinavir = treatment failure (enzyme induction).",
        "Methylphenidate 5–20 mg/day: apathy and cognitive slowing.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The re-linkage phone call to the ART counsellor is disease modification in a single clinical act — the highest-value minute the psychiatrist owns in this disease.",
        "The direction of the complaint-performance mismatch is the bedside jewel: depression complains loudly and performs variably; HAND under-complains and performs consistently badly — the family's account often holds the truth the patient's politeness hides.",
        "The herbal question asked by name is the Indian interaction vigilance: St John's Wort is the textbook case, and the Ayurvedic habit makes the unasked question the commonest silent cause of treatment failure.",
        "The behavioural-disturbance service question (risk to other patients and staff) needs explicit safety planning in the chart — the corridor conversation is where it currently lives, and that is where it fails.",
        "Terminal-stage placement is blocked by the lack of community options in India (hospice capacity thin, family carers carrying the load) — the early, honest planning conversation with the family IS the service, and the psychiatrist who has it early is the one who is not having it as a crisis.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The dullness that was a treatable dementia",
      presentation: "A 34-year-old migrant worker brought by his wife for 'he has become dull' — the missed window of a treatable dementia hiding behind stigma and a stopped bus route.",
      initialPresentation: "A 34-year-old migrant worker, diagnosed HIV-positive two years earlier at a district ART centre, was brought to psychiatry OPD by his wife. He had stopped attending the ART centre after four months ('no time, no bus money, people talk'). For three months he had stopped calling home, forgotten conversations, walked carefully at night, and been reprimanded at work for slow output. His wife believed he was 'in depression'; the examination and history said otherwise.",
      history: "HIV diagnosed two years ago; ART taken for four months then abandoned (cost of travel, stigma, no symptoms); no opportunistic infections diagnosed; the wife the sole informant and the household's sole earner alongside him; no prior psychiatric history; the 'dullness' gradual over months, not weeks.",
      examination: "Postural tremor; brisk knee reflexes; slowed rapid alternating finger movements; mini-mental testing showing slowed responses with 5-minute recall difficulty; the pseudodementia signs actively looked for and ABSENT — his complaints understated his deficits, the opposite pattern to depression's loud complaint.",
      diagnosis: "HIV-associated neurocognitive disorder (mild-to-moderate tier) on lapsed ART — the vicious cycle of impairment-destroying-adherence in motion.",
      management: "Re-linkage to the ART centre (the psychiatrist phoning the counsellor directly); workup for opportunistic infection (MRI + CSF); structured daily routine and orientation at home; a family session explaining that the 'dullness' is a brain illness of the HIV itself, not a character change; the adherence architecture built — dosing tied to the evening meal, the wife as the named tablet monitor.",
      outcome: "Psychomotor speed partially recovered over months of resumed ART; the work reprimands ceased as output steadied; the wife's monitoring held the routine through one bus-fare crisis and one disclosure scare — the missed window reopened by one phone call and one family session.",
      teachingPoints: [
        "Re-engagement with ART is the disease-modifying move — the phone call to the counsellor is the treatment.",
        "Cognitive impairment and poor adherence form a vicious cycle — each deepens the other until the architecture moves the memory outside the patient.",
        "The wife's presence at the OPD was the single strongest prognostic asset available — the family as the treatment's delivery system.",
        "The under-complaining patient is the diagnostic jewel: HAND understates while depression overstates — the direction of the mismatch is the bedside separation.",
      ],
    },
    {
      title: "The night-fever trap",
      presentation: "Two weeks of forgetfulness with left-arm weakness and evening fevers — the question 'is the dementia worsening?' that was the wrong question.",
      initialPresentation: "A 28-year-old man on ART for six years presented with two weeks of progressive forgetfulness and mild left-arm weakness; his mother reported evening fevers through the same fortnight. The referral asked whether 'the HIV dementia was worsening' — a question that would have routed him deeper into psychotropic management.",
      history: "HIV for eight years, ART-maintained with recent adherence wobble (the mother unsure of the last filled prescription); no prior cognitive diagnosis; the fevers low-grade, evenings, with night sweats; no headache reported but the examination prompted the question again.",
      examination: "Mild left pronator drift with reduced left grip; fundi normal; no meningism; temperature 37.9°C at evening review; cognitive screening showing new slowing against his prior baseline; the focal sign the gate that changed everything.",
      diagnosis: "Cerebral toxoplasmosis — ring-enhancing lesions on MRI — the opportunistic mimic impersonating dementia progression.",
      management: "Anti-toxoplasma therapy started by the treating team rather than any change to psychotropics; ART adherence rebuilt with the named family monitor; the CD4 reassessment that followed; the CNS tuberculosis consideration held in the Indian differential during the response monitoring.",
      outcome: "The weakness and fevers resolved over the treatment course; the forgetfulness partially recovered with the treated infection and the resumed suppression; the family left with the fever-and-focal rule — warnings that mean hospital, not 'the dementia worsening'.",
      teachingPoints: [
        "Focal signs and fever should pull the clinician out of the dementia script — the mimic gate comes before the label.",
        "In India, CNS tuberculosis belongs in the same differential — the epidemiology orders the workup.",
        "The psychiatrist's contribution was refusing to medicalise a new focal neurological picture as progression — the discipline that routed the patient to the right treatment.",
        "The ring-enhancing lesion is the scan's sentence; the anti-toxoplasma response is the confirmation in districts where biopsy is a journey.",
      ],
    },
  ],
  clinicalPearls: [
    "Any young adult with cognitive decline plus motor slowing earns an HIV test as part of the workup — the diagnosis is treatable and stigmatised patients rarely volunteer it.",
    "Subcortical speed, not cortical storage: slowing, apathy and legs before memory's core, with naming and vocabulary preserved even late.",
    "The Trojan horse: HIV enters the brain hidden in infected macrophages; the damage is bystander inflammation (microglial neurotoxins, apoptosis), not the virus eating neurons.",
    "The HAART numbers: incidence 21.1 → 10.5 per 1,000 person-years; survival after dementia diagnosis ~5 → ~38.5 months.",
    "The naming timeline for vivas: AIDS dementia complex (1986) → WHO (1990) → AAN (1991) → three-tier HAND.",
    "The pseudodementia direction: depression over-complains and performs variably; HAND under-complains and performs consistently badly — and both coexist often enough to treat the depression and re-test.",
    "The mimic gate: fever, focal signs or meningism exit the dementia script first — toxoplasmosis, lymphoma, cryptococcus, CNS tuberculosis (early in India), CMV, neurosyphilis.",
    "The drug traps: typical antipsychotics → EPS/NMS in AIDS; St John's Wort → protease-inhibitor failure; SSRIs over TCAs (the diarrhoea caveat); methylphenidate 5–20 mg/day for apathy.",
    "Donepezil has only anecdotal support here — the cholinesterase reflex does not transfer from Alzheimer's.",
    "The vicious cycle: impairment destroys adherence; broken adherence deepens the brain disease — the architecture (anchors, organisers, the named monitor) is the treatment's guardian.",
    "The herbal list taken by name at every Indian consultation — the unasked question is the commonest silent cause of treatment failure.",
    "The re-linkage phone call is disease modification in a single clinical act — the highest-value minute in this disease.",
  ],
  highYieldSummary: [
    "Definition: HIV-associated neurocognitive disorder = the HIV-driven subcortical cognitive-motor-behavioural syndrome — three modern tiers (asymptomatic impairment / mild disorder / dementia) — with the WHO 1990 and AAN 1991 logic surviving inside the scheme: HIV evidence + ≥2 cognitive domains impaired ≥1 month + motor or behavioural change, consciousness preserved, other causes excluded (CSF + imaging the minimum exclusion set).",
    "Mechanism: the Trojan-horse entry (infected macrophages across the BBB); the glial infection smouldering in frontal-subcortical-white-matter-basal-ganglia territory; bystander inflammatory damage (microglial neurotoxins, apoptosis, gp120 direct toxicity); the ART thermostat lowering the systemic fire (incidence halved, survival stretched from ~5 to ~38.5 months after dementia diagnosis).",
    "Clinical: the slowing cluster (forgetfulness, concentration loss, slowed processing, near-normal early testing with slowed responses and 5-minute recall slips); the apathy cluster (reduced spontaneity, blunted responsiveness, withdrawal, fatigue, falling output — with depression, irritability and psychotic symptoms as the comorbid riders); the legs cluster (balance and coordination loss, clumsiness, hyperreflexia, ataxia on rapid turns, frontal release signs, dysarthria, saccadic slowing); late untreated: psychomotor retardation to mutism, paraparesis, incontinence, myoclonus, seizures — consciousness preserved throughout (hypersomnolence excepted).",
    "Neuropsychological signature: fine motor, rapid sequential problem-solving, visuospatial, verbal fluency and visual memory worst; naming and vocabulary preserved — the subcortical pattern separating it from Alzheimer's at the bedside.",
    "Diagnosis: the three legs (HIV evidence, the decline, exclusion); imaging (atrophy, white-matter T2 change — plus the mimic screen: ring-enhancing → toxo, contrast-mass → lymphoma); CSF (protein, IgG, the cryptococcus/TB/syphilis tests); the pseudodementia direction (depression over-complains variably, HAND under-complains consistently); the delirium exclusion (clouding).",
    "Management: (1) the ART backbone — optimised with the treating physician, the psychiatrist reinforcing never duplicating; (2) the riders treated — depression with the SSRI tier (better tolerated than TCAs, diarrhoea deciding the molecule), apathy and slowing with methylphenidate 5–20 mg/day (Schedule X in India); (3) the tightrope — structure first, atypicals cautiously (start low, go slow, review early), typicals carrying the EPS/NMS danger, haloperidol emergencies shortest-course; the herbal interaction vigilance (St John's Wort–indinavir); (4) the adherence architecture — anchors, organisers, the named family monitor, early personal-financial monitoring, family psychoeducation; (5) the opportunistic mimics treated as their own emergencies.",
    "The Indian tier: free NACO ART centres and counsellors as the delivery spine; late diagnosis and district-hospital presentations; stigma interrupting adherence (disclosure counselling as clinical intervention); the Ayurvedic self-medication channel making the by-name herbal list a standard move; methylphenidate Schedule X (major-centre availability); CNS tuberculosis early in the mimic differential; the terminal-stage family-carer reality with thin hospice capacity.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "hand-quiz-1",
      question: "A 32-year-old with advanced HIV has 2 months of forgetfulness, mental slowing, apathy and leg clumsiness; consciousness preserved, brisk reflexes. The pattern is:",
      options: ["Cortical: early aphasia, agnosia, apraxia", "Subcortical: slowed processing, apathy, motor slowing, naming preserved", "Amnestic-only: isolated recall deficit", "Fluctuating attention with night-time hallucinations"],
      correctIndex: 1,
      explanation: "The disorder is a subcortical dementia of speed and drive; naming/vocabulary are preserved even late and consciousness is intact — the answer that excludes the cortical and delirium patterns.",
      afterSectionId: "diagnosis",
    },
    {
      id: "hand-quiz-2",
      question: "During testing of an HIV-positive patient reporting severe memory difficulty, she fails easy items but answers harder ones correctly, and 'I don't know' answers turn correct with urging. The most likely explanation:",
      options: ["HIV-associated dementia", "Depressive pseudodementia (coexistence still to assess)", "Cerebral toxoplasmosis", "Malingering by definition"],
      correctIndex: 1,
      explanation: "The three classic pseudodementia signs; the caveat: depression and HAND can coexist — verify improvement after treating the depression.",
      afterSectionId: "differential",
    },
    {
      id: "hand-quiz-3",
      question: "The investigation pair specifically required by the diagnostic criteria to exclude opportunistic processes before diagnosing HAND:",
      options: ["EEG and EMG", "CSF analysis and CT or MRI", "Nerve conduction and audiometry", "Serial mini-mental examinations only"],
      correctIndex: 1,
      explanation: "Both WHO and AAN logic require exclusion of other aetiology; the chapter names CSF plus CT/MRI as the minimum exclusion set.",
      afterSectionId: "diagnosis",
    },
    {
      id: "hand-quiz-4",
      question: "An AIDS patient develops new fever and pronounced muscle stiffness two days after a typical antipsychotic was started. The immediate concern:",
      options: ["Simple akathisia; reassure and continue", "Neuroleptic malignant syndrome: stop the drug, medical emergency", "HIV dementia progression", "Serotonin syndrome from an SSRI"],
      correctIndex: 1,
      explanation: "AIDS patients carry high EPS and NMS risk on typical antipsychotics — the stop-and-treat-emergency teaching.",
      afterSectionId: "management",
    },
    {
      id: "hand-quiz-5",
      question: "A patient on a protease inhibitor self-medicates with a herbal antidepressant. The classic interaction:",
      options: ["St John's Wort induces protease-inhibitor metabolism causing treatment failure", "Ginkgo raises protease-inhibitor levels to toxicity", "Garlic potentiates all antiretrovirals equally", "No documented herbal interactions exist"],
      correctIndex: 0,
      explanation: "The documented example is St John's Wort (indinavir) lowering levels into the failure range — enzyme induction.",
      afterSectionId: "management",
    },
    {
      id: "hand-quiz-6",
      question: "Which is correct about methylphenidate in HAND?",
      options: ["First-line for the dementia, replacing ART", "5–20 mg/day is useful for apathy and cognitive slowing with relatively mild side effects", "Contraindicated with all antiretrovirals", "Evidence equals donepezil's in Alzheimer's"],
      correctIndex: 1,
      explanation: "Methylphenidate addresses apathy and psychomotor slowing; cholinesterase inhibitors have only anecdotal support here — and it is Schedule X in India.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Draw the Trojan-horse route from blood to brain, and name the two cell types involved.", answer: "HIV cannot freely cross the blood-brain barrier — it hides inside macrophages it has infected, and these cells carry it across (the horse through the gate). Once inside, the virus primarily infects glial cells (microglia and astrocytes) establishing the smouldering CNS infection. The damage that follows is mostly bystander: the infected and ACTIVATED macrophages and microglia release neurotoxins (the quinolinic-acid tier), and neurons are injured and die by APOPTOSIS — the immune battle killing the tissue it defends, with the viral envelope protein gp120 adding direct toxicity. Geography: frontal lobes, subcortical white matter, basal ganglia — which is why speed, drive and the legs fail before memory's core does.", topic: "Mechanism" },
    { question: "List the early triad of HIV-associated dementia with one patient-example each.", answer: "COGNITIVE (the slowing cluster): the worker reprimanded for slow output — appointments missed, lists needed, conversations lost mid-thread, with only slowed responses and 5-minute recall slips on early testing. BEHAVIOURAL (the apathy cluster): the husband who stopped calling home — reduced spontaneity, blunted responsiveness, social withdrawal, indifference to responsibilities, fatigue and lost drive. MOTOR (the legs cluster): the man who walks carefully at night — balance and coordination loss, clumsiness, leg weakness, dropping things, tripping; on examination postural tremor, brisk lower-limb reflexes, ataxia on rapid turns, slowed alternating movements and frontal release signs. The triad's diagnostic power: young adult + months-speed + consciousness preserved + naming/vocabulary intact — the subcortical signature against the cortical dementias.", topic: "Diagnosis" },
    { question: "Name the three pseudodementia warning signs, and state why 'I don't know, then correct when urged' points to depression.", answer: "(1) INTRATEST VARIABILITY: failing easy items then answering harder ones correctly — genuine impairment is consistent; effort is not. (2) COMPLAINT-PERFORMANCE MISMATCH: complaining loudly of severe memory difficulty while performing near-perfectly — the organic patient understates. (3) THE 'I DON'T KNOW' PHENOMENON: giving-up answers that turn CORRECT with gentle urging — the depressive patient has the memory but not the will to deploy it; the amnesic patient never had the trace to recover. The direction is the bedside jewel: depression over-complains and under-performs variably; HAND under-complains and performs consistently badly. The caveat that saves the diagnosis: both coexist in one HIV-positive patient often enough that the rule is TREAT the depression and RE-TEST — the residual subcortical pattern after the mood lifts is the two-disease answer.", topic: "Clinical practice" },
    { question: "Which cognitive domains are worst in HAND, and which two are preserved? What does that pattern say about cortical vs subcortical involvement?", answer: "WORST: fine motor control (finger tapping, grooved pegboard), rapid sequential problem-solving (trail-making, digit symbol), visuospatial problem-solving (block design), verbal fluency (spontaneity), and visual memory — the processing-speed and frontally-mediated tier. PRESERVED: naming and vocabulary — the overlearned, crystallised language functions that even advanced disease spares. The reading: the damaged territory is the frontal-subcortical-white-matter-basal ganglia circuitry (speed, drive, integration), NOT the temporoparietal cortical storage-and-language machinery — which is why the cortical flagship signs (aphasia, agnosia, apraxia) are unusual and their presence pushes the workup toward the opportunistic mimics instead. One bedside corollary: a memory-weighted screen under-sells this disease exactly as it under-sells the vascular and Parkinson's dementias.", topic: "Diagnosis" },
    { question: "Quote the two numbers that show HAART's effect, and the one-sentence mechanism of why milder impairment became commonest.", answer: "INCIDENCE: about 21.1 per 1,000 person-years (1990–92) falling to about 10.5 per 1,000 person-years (1996–98) after combination therapy — the multicentre cohort's halving of risk. SURVIVAL: after a dementia diagnosis, from about 5 months (1993–95) to about 38.5 months (1996–2000). The one-sentence mechanism: ART does not always cross into the brain well but lowers the systemic fire enough to transform a months-speed fatal decline into a long survival WITH virus in the brain — so people now live years to decades with low-grade infection, which is precisely why the milder tiers (asymptomatic impairment and mild disorder) became the commonest forms while the severe encephalopathy largely disappeared from the post-mortem tables. (The Indian suffix: a 2003-era rise in some cohorts as treatment failure accumulated — the adherence lesson wearing a statistic.)", topic: "Epidemiology" },
    { question: "Recite the antipsychotic and the herbal-interaction cautions for AIDS patients.", answer: "ANTIPSYCHOTIC: AIDS patients given TYPICAL antipsychotics are particularly prone to extrapyramidal side effects and NEUROLEPTIC MALIGNANT SYNDROME (fever + rigidity + autonomic instability — stop the drug, emergency care); preliminary evidence suggests some ATYPICALS are tolerated even by patients who had to stop standard neuroleptics — so: start low, go slow, review early; structure and environment before any psychotropic; haloperidol in Indian emergencies deserves extra justification and the shortest possible course. HERBAL: St John's Wort (the herbal antidepressant patients self-prescribe) potently INDUCES the metabolism of protease inhibitors — indinavir is the documented case, levels dropping into the treatment-failure range — so every herbal and Ayurvedic self-medication must be asked about BY NAME and checked with the ART physician; the unasked question is the commonest silent cause of treatment failure.", topic: "Pharmacology" },
    { question: "What must CSF and imaging exclude before the HAND diagnosis can stand, and which mimic leads the Indian differential?", answer: "CSF: cryptococcal meningitis (India ink stain, cryptococcal antigen, fungal culture — the headache/meningism/raised-pressure presentation), CNS tuberculosis (the Indian early differential given the prevalence — CSF-directed testing), CMV encephalitis, and neurosyphilis; the supporting CSF signatures of HAND itself (raised protein, raised IgG fraction/index, possible mononuclear pleocytosis, HIV RNA by PCR) are nonspecific and never diagnostic alone. IMAGING: active opportunistic processes — ring-enhancing lesions (cerebral toxoplasmosis), contrast-enhancing mass lesions (primary CNS lymphoma — trial of anti-toxoplasma therapy or biopsy when the scan cannot decide), and the herpetic/temporal changes of HSV encephalitis where fever and confusion out of proportion demand the CSF virology. The logic both systems share: the diagnosis requires HIV evidence + the decline + NO OTHER CAUSE — CSF and CT/MRI are the minimum exclusion set, not optional confirmations; the fever-and-focal gate routes every new focal picture through them before any 'progression' language enters the chart.", topic: "Diagnosis" },
  ],
  faqs: [
    { question: "Is my memory loss because of the virus, or because I am depressed?", answer: "It can be either, and often both. The interview and testing patterns differ: depression complains loudly and performs variably; this illness under-complains and performs consistently badly. Both deserve treatment, and the answer usually clarifies within weeks of treating the depression and the HIV." },
    { question: "Can this get better?", answer: "With antiretroviral therapy many patients stabilise or improve partly, especially the psychomotor speed. Full reversal of established dementia is uncommon. The earlier treatment starts, the better the outcome." },
    { question: "Is it contagious to care for him?", answer: "No. HIV is transmitted through blood and sexual contact, not touching, feeding or sharing a room. Families should be told this explicitly, because fear-driven distance worsens care." },
    { question: "He refuses to take the ART tablets, he forgets as well.", answer: "This is a recognised bind: the illness damages the very system needed to treat it. Practical answers: supervised daily dosing tied to a fixed routine (meals, prayer time), pill organisers, a designated family 'tablet monitor', and counselling at the ART centre rather than scolding." },
    { question: "The doctor gave risperidone for his aggression, is that safe?", answer: "It can be used with caution in low doses and with early review. In advanced AIDS, the older typical antipsychotics carry high risks of stiffness and neuroleptic malignant syndrome; atypicals are generally better tolerated. Report new fever with stiffness urgently." },
    { question: "Can he take Ayurvedic medicines alongside ART?", answer: "Some herbal products powerfully alter antiretroviral levels; St John's Wort is the documented example with indinavir. The safe rule: list everything he takes, and let the ART physician check the combination before continuing." },
    { question: "Will he end up bed-bound?", answer: "The untreated disease could progress there — paraplegia, incontinence, mutism. On effective ART, many patients never approach that stage, and those who do progress usually do so slowly, over years." },
    { question: "Who will look after him at the end?", answer: "This deserves early, honest planning: identify the main carer, brief the family doctor, arrange respite, and consider community or hospice options. In India the realistic answer is usually the family, with programme support — so supporting the family is part of treating the patient." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "World Health Organization (1990) — Report of the Second Consultation on the Neuropsychiatric Aspects of HIV-1 Infection: the 1990 criteria and terminology (paraphrased)" },
      { source: "American Academy of Neurology AIDS Task Force (1991) — nomenclature and research case definitions (paraphrased)" },
      { source: "Antinori A et al. (2007) — the updated research nosology for HIV-associated neurocognitive disorders (the modern three-tier HAND)" },
      { source: "NACO (National AIDS Control Organisation) — annual HIV estimates and ART programme guidance, India context" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.9 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Sacktor N et al. (2001) — the multicentre cohort incidence changes 1990–1998 (21.1 → 10.5 per 1,000 person-years)" },
      { source: "Dore GJ et al. (2003) — survival following AIDS dementia complex in the HAART era (5 → 38.5 months)" },
      { source: "Sacktor NC et al. (1999) — combination antiretroviral therapy improves psychomotor speed" },
    ],
    reviews: [
      { source: "Navia BA, Jordan BD, Price RW (1986) — the AIDS dementia complex: the original description" },
      { source: "Kaul M, Garden GA, Lipton SA (2001) — pathways to neuronal injury and apoptosis in HIV-associated dementia" },
      { source: "Neuenburg JK et al. (2002) — HIV-related neuropathology in the HAART era (the rising milder-encephalopathy prevalence)" },
      { source: "Piscitelli SC et al. (2000) — indinavir concentrations and St John's Wort: the classic interaction" },
      { source: "Maj M, Starace F, Sartorius N (1993) — mental disorders in HIV-1 infection and AIDS" },
      { source: "Bouwman FH et al. (1998) — variable progression of HIV-associated dementia (predictors)" },
    ],
    patientResources: [
      { source: "The adherence architecture (anchors, organisers, the named family monitor) — the instrument this course hands to every Indian HAND family" },
      { source: "The district ART centre and its counsellor — the re-linkage partnership; Tele-MANAS 14416 for caregiver support" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the tablets as the brain's treatment, the routine that protects them, the fever-and-stiffness warnings.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The Trojan horse, the triad, the WHO/AAN logic, the mimic table, the drug cautions.",
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
      description: "Everything — the re-linkage craft, the tightrope pharmacology, the adherence architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The subcortical signature, the HAART numbers, the modern spectrum.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the triad, the preserved domains and both HAART statistics cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The Trojan horse, the bystander death, the thermostat.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the route and explain why the milder tiers became commonest." },
    { number: 3, title: "Clinical Practice", description: "The three legs, the mimic gate, the tightrope, the architecture.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the pseudodementia direction check, the mimic gate and the five-part programme." },
    { number: 4, title: "Indian Context", description: "The ART-centre partnership, the stigma work, the herbal question.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the re-linkage act and the adherence-architecture family session." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the HAND essay cold and recite the naming timeline without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.9 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Navia BA, Jordan BD, Price RW (1986) — the AIDS dementia complex: the original clinical description", sourceType: "primary", year: "1986", dateReviewed: "2026-09-29" },
    { id: "S3", source: "World Health Organization (1990) — Second Consultation on the Neuropsychiatric Aspects of HIV-1 Infection: criteria and terminology (paraphrased)", sourceType: "guideline", year: "1990", dateReviewed: "2026-09-29" },
    { id: "S4", source: "American Academy of Neurology AIDS Task Force (1991) — nomenclature and research case definitions (paraphrased)", sourceType: "guideline", year: "1991", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Antinori A et al. (2007) — updated research nosology for HIV-associated neurocognitive disorders (the three-tier HAND)", sourceType: "classification", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Sacktor N et al. (2001) — multicentre cohort incidence changes 1990–1998 (21.1 → 10.5 per 1,000 person-years)", sourceType: "primary", year: "2001", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Dore GJ et al. (2003) — survival following AIDS dementia complex in the HAART era (5 → 38.5 months)", sourceType: "primary", year: "2003", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Kaul M, Garden GA, Lipton SA (2001) — pathways to neuronal injury and apoptosis (the bystander mechanism); Neuenburg JK et al. (2002) — HAART-era neuropathology shift", sourceType: "review", year: "2001–2002", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Piscitelli SC et al. (2000) — indinavir concentrations and St John's Wort (the classic enzyme-induction interaction)", sourceType: "primary", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Sacktor NC et al. (1999) — combination ART improves psychomotor speed; Bouwman FH et al. (1998) — progression predictors (IVDU, low CD4)", sourceType: "trial", year: "1998–1999", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Maj M, Starace F, Sartorius N (1993) — mental disorders in HIV-1 infection and AIDS (the psychiatric-roles framing)", sourceType: "review", year: "1993", dateReviewed: "2026-09-29" },
    { id: "S12", source: "NACO annual HIV estimates and ART programme guidance — India context (prevalence ~0.2%, free ART, district centres, counsellor structure)", sourceType: "government", year: "2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The subcortical clinical signature: cognitive slowing, apathy and motor slowing over months in young adults, with naming and vocabulary preserved even in advanced disease and consciousness preserved (hypersomnolence excepted) — against the cortical dementias and delirium; worst formal-test domains: fine motor, rapid sequential problem-solving, visuospatial, verbal fluency, visual memory.", grade: "established", sources: ["S1", "S2"] },
    { text: "The mechanism: HIV crosses the blood-brain barrier inside infected macrophages (the Trojan horse), infects glia, and the damage is predominantly bystander — activated macrophages/microglia releasing neurotoxins with neuronal apoptosis, plus gp120 direct toxicity; the vulnerable geography is frontal-subcortical white matter and basal ganglia.", grade: "established", sources: ["S8"] },
    { text: "The HAART-era numbers: incidence about 21.1 per 1,000 person-years (1990–92) falling to about 10.5 (1996–98) — risk halved; survival after dementia diagnosis rising from about 5 months (1993–95) to about 38.5 months (1996–2000); combination ART improving psychomotor speed in cohorts; longer survival shifting the burden to the milder tiers while the optimal CNS regimen remains unestablished.", grade: "established", sources: ["S6", "S7", "S10"] },
    { text: "The diagnostic logic (WHO 1990 / AAN 1991, paraphrased): ICD-10 dementia with HIV modifications (memory may not impair daily function; motor decline counts; ≥1 month; cortical signs unusual) and the AAN two-domain rule (≥2 cognitive abilities ≥1 month + motor or behavioural change; no clouded consciousness; no other cause) — CSF analysis and CT/MRI as the minimum exclusion set; the modern three-tier HAND as the update.", grade: "established", sources: ["S3", "S4", "S5"] },
    { text: "The pseudodementia separation: intratest variability, complaint-performance mismatch, and 'I don't know' answers turning correct with gentle urging point to depression — with the explicit caveat that both coexist in one HIV-positive patient, so the rule is treat the depression and re-verify.", grade: "established", sources: ["S1", "S11"] },
    { text: "The opportunistic-mimic discipline: fever, focal signs or meningism must exit the dementia script first — ring-enhancing lesions (toxoplasmosis), contrast-enhancing masses (primary CNS lymphoma), headache with raised pressure (cryptococcal meningitis, India ink/antigen on CSF), with CNS tuberculosis early in the Indian differential alongside CMV and neurosyphilis.", grade: "established", sources: ["S1", "S5"] },
    { text: "The pharmacological cautions: AIDS patients on typical antipsychotics are particularly prone to extrapyramidal effects and neuroleptic malignant syndrome (stop-drug emergency); some atypicals tolerated even after typical-antipsychotic failure — start low, go slow, review early; SSRIs preferred over tricyclics (better tolerated, diarrhoea-troubled patients excepted); methylphenidate 5–20 mg/day useful for apathy and cognitive slowing; cholinesterase inhibitors anecdotal-only here.", grade: "established", sources: ["S1", "S11"] },
    { text: "The classic herbal interaction: St John's Wort induces protease-inhibitor (indinavir) metabolism, dropping levels into the treatment-failure range — the documented example mandating the by-name herbal enquiry in every consultation.", grade: "established", sources: ["S9"] },
    { text: "The vicious cycle and its management: cognitive impairment undermines ART adherence, and interrupted ART deepens the brain disease — the countermeasures are the adherence architecture (routine-anchored supervised dosing, organisers, the named family monitor), early personal-financial monitoring, structured environments and orienting interactions; the re-linkage to the ART centre is disease modification.", grade: "established", sources: ["S1", "S11"] },
    { text: "The progression predictors: low CD4 counts, high viral load, untreated or failing therapy, intravenous drug use, older age — the treated-and-suppressed population carrying a small fraction of the untreated risk.", grade: "established", sources: ["S10"] },
    { text: "The Indian tier: NACO free-ART centres and counsellors as the spine; late diagnosis through district hospitals; stigma-driven adherence interruptions (disclosure, employment, marriage concerns) as direct dementia risks with counselling as clinical intervention; the Ayurvedic self-medication habit making the by-name herbal list standard; methylphenidate as Schedule X (major-centre availability); CNS tuberculosis early in the differential; thin hospice capacity leaving family carers the terminal tier.", grade: "supported", sources: ["S12"] },
  ],
};
