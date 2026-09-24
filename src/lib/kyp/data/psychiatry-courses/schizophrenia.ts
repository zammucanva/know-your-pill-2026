import type { PsychiatryCourse } from "./types";

/**
 * SCHIZOPHRENIA — canonical Psychiatry course (pilot 2: complex disorder).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/schizophrenia.md — untouched foundation),
 * re-researched against current guidance (WHO, ICD-11 6A20, DSM-5-TR,
 * APA 2020 3rd ed., NICE CG178, NMHS India) with per-claim provenance.
 *
 * KYP currently has NO antipsychotic drug lessons — every medication
 * route that does not exist is recorded in contentGaps (never invented).
 */
export const schizophreniaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "schizophrenia",
  title: "Schizophrenia",
  kind: "disorder",
  category: "Psychotic Disorder",
  groupLetter: "C",
  groupName: "Schizophrenia spectrum",
  learningPath: ["Psychiatry", "Psychosis", "Schizophrenia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-25",

  tagline:
    "A disorder of salience, cognition and self — understandable neurobiologically, manageable clinically, and still one of medicine's great unfinished stories.",
  summary:
    "Schizophrenia affects roughly 1 in 300 people worldwide (about 24–27 million; WHO). It presents with positive symptoms (delusions, hallucinations, disorganisation), negative symptoms (avolition, flat affect, withdrawal) and cognitive impairment — three domains with different neurobiology and different treatments. This course builds the complete picture in six lessons: the syndrome, the neuroscience (dopamine version III, circuits, neuroprogression), diagnosis and its differentials, evidence-based management, the Indian reality (treatment gap ~75%, DUP, family burden), exam preparation, and active recall that makes it stick.",
  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define schizophrenia by its three-symptom-domain structure (positive, negative, cognitive) and the ≥ 6-month DSM-5-TR / 1-month ICD-11 duration requirements.",
    "Quote current epidemiology with sources: ~1 in 300 worldwide point prevalence, 1:1 sex ratio with later-onset/worse-prognosis in males, peak onset late teens to late twenties.",
    "Explain the neurodevelopmental model: genetic loading + early brain development disruption + adolescent synaptic pruning gone awry → first-episode psychosis in the vulnerable window.",
    "Grade the dopamine hypothesis honestly: striatal hyperdopaminergia in psychosis is well supported; cortical hypodopaminergia for negative/cognitive symptoms is supported but less directly measured; glutamate/inflammation layers remain proposed.",
    "Apply diagnostic criteria, differentiate the full psychotic spectrum (brief psychosis, schizophreniform, schizoaffective, delusional disorder, drug-induced, affective psychosis), and use duration as the differentiating spine.",
    "Construct evidence-based management: antipsychotics for positive symptoms, psychosocial interventions and cognitive strategies for negative/cognitive domains, clozapine for treatment resistance, long-acting injectables for adherence.",
    "Recognise the physical-health gap (15–20-year mortality excess; metabolic syndrome) and the monitoring obligations it creates.",
    "Navigate the Indian reality: NMHS psychosis prevalence ~1.4% with a ~75% treatment gap, long duration of untreated psychosis, family-centred care, and DMHP services.",
  ],
  quickFacts: [
    { label: "Global prevalence", value: "≈ 1 in 300", detail: "Point prevalence 0.29% (~24–27 million people); 1 in 206 adults (WHO)" },
    { label: "Sex ratio", value: "≈ 1 : 1", detail: "Equal prevalence; men: earlier onset, more negative symptoms, worse average prognosis" },
    { label: "Peak onset", value: "15–30 yrs", detail: "Late teens to late twenties — the synaptic-pruning window; women show a second perimenopausal peak" },
    { label: "Duration (DSM-5-TR)", value: "≥ 6 months", detail: "Of disturbance, with ≥ 1 month of active-phase symptoms; ICD-11: ≥ 1 month of characteristic symptoms" },
    { label: "Core triad", value: "Positive + Negative + Cognitive", detail: "Three domains, three different neurobiologies, three different treatment responses" },
    { label: "First-line treatment", value: "Antipsychotics", detail: "D2 blockade for positive symptoms (APA 2020; NICE CG178) — no KYP drug lesson yet: recorded as a content gap" },
    { label: "Treatment resistance", value: "Clozapine", detail: "After ≥ 2 adequate antipsychotic trials — the only agent with superiority evidence for resistant illness" },
    { label: "Mortality gap", value: "10–20 yrs", detail: "Excess deaths, mostly cardiometabolic — screening and metabolic monitoring are standard care, not extras" },
    { label: "India treatment gap", value: "≈ 75%", detail: "Psychosis prevalence ~1.4% (NMHS 2015–16); three of four affected people receive no care" },
  ],
  knowledgeGraph: [
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Striatal excess → psychosis; cortical deficit → negative/cognitive" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "NMDA hypofunction model — PCP/ketamine evidence" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "5-HT2A — why clozapine differs" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Working memory + negative symptoms" },
    { label: "Basal Ganglia", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Striatal dopamine — the psychosis engine" },
    { label: "Hippocampus", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "Hyperactivity upstream of dopamine; volume reduction" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Affective psychosis differential" },
    { label: "Delusional Disorder", type: "condition", href: "/psychiatry/delusional-disorder/", note: "Non-bizarre delusions without decline" },
    { label: "Schizoaffective & Schizotypal", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "The spectrum middle" },
    { label: "Acute Transient Psychosis", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "Brief psychosis — the Indian-relevant boundary" },
    { label: "Cannabis & Mental Health", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "High-potency use roughly doubles early-onset psychosis risk" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Post-psychotic depression is common and treatable" },
    { label: "Suicide & Self-harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "~5% lifetime; highest risk in early illness" },
    { label: "Psychiatric Assessment", type: "patient-guide", href: "/psychiatry/psychiatric-assessment/", note: "MSE and history structure" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Schizophrenia is the disorder where psychiatry's best-graded neuroscience lives. The neurodevelopmental model explains why: genetic risk (polygenic, ~80% heritability) plus early-development insults set a vulnerable circuit substrate, and adolescent synaptic pruning — especially prefrontal — tips it into psychosis in the late-teens/twenties window. The dopamine hypothesis (version III) links the risk factors to the final common pathway: striatal dopamine synthesis and release are elevated in psychotic patients, and every effective antipsychotic blocks D2 receptors. But that is one domain only: negative and cognitive symptoms map onto cortical dopamine deficits and glutamate/NMDA hypofunction — which is why D2 blockade alone cannot fix them, and why the field's newest targets live elsewhere.",
    grade: "supported",
    steps: [
      "Genetic architecture: highly polygenic (~80% heritability, hundreds of risk loci; 22q11.2 deletion the strongest known copy-number risk ~25-fold); no single causal gene.",
      "Neurodevelopmental trajectory: early gestational insults (maternal infection, hypoxia), subtle childhood motor/cognitive soft signs, then adolescent synaptic pruning reducing prefrontal connectivity below a functional threshold.",
      "Dopamine final pathway: imaging shows elevated presynaptic dopamine synthesis/release in the associative striatum of psychotic patients — the best-supported single finding in live patients.",
      "Aberrant salience (the psychology of the chemistry): dysregulated dopamine assigns significance to irrelevant stimuli — delusions form as explanations for the aberrant signal; hallucinations as percepts that gain inappropriate weight.",
      "Cortical under-dopamination: prefrontal D1 signalling is relatively reduced — mapped onto negative symptoms, working-memory deficits, and the limited reach of D2-blocking drugs.",
      "Glutamate layer: NMDA-receptor hypofunction (PCP/ketamine models) reproduces ALL three symptom domains — the most active current drug-target frontier (glycine-site, AMPA potentiation).",
      "Neuroprogression and inflammation: duration of untreated psychosis correlates with worse outcome (NIMHANS prospective data); inflammatory markers elevated in a subset — active-clinical-problem, not just hypothesis.",
      "Circuit-level account: hippocampal hyperactivity drives striatal dopamine (a glutamate-GABA-dopamine cascade); default-mode/salience network dysconnectivity underlies self-disorder and thought-insertion phenomenology.",
    ],
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal Cortex", role: "Working memory, executive function, top-down control. Dorsolateral PFC dysfunction → cognitive symptoms; the target of cognitive-remediation and the unmet need of current drugs.", grade: "supported" },
    { id: "basal-ganglia", name: "Striatum (Basal Ganglia)", role: "The associative striatum is where elevated presynaptic dopamine synthesis is demonstrated in psychosis — and where D2-blocking antipsychotics act. Also the EPS side-effect substrate (nigrostriatal D2 blockade).", grade: "established" },
    { id: "hippocampus", name: "Hippocampus", role: "CA1 hyperactivity is a proposed driver of the dopamine dysregulation (upstream node); volume reduction and poorer pattern-separation relate to cognitive symptoms and illness progression.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "Threat-salience misassignment contributes to paranoid ideation; hyperresponsivity to neutral stimuli in first-episode patients.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "THE psychosis neurotransmitter — but in two directions: striatal excess (positive symptoms) and cortical relative deficiency (negative/cognitive). Version III of the hypothesis integrates both.", grade: "established", drugConnection: "All antipsychotics block D2 (content gap: no KYP lesson yet)" },
    { name: "Glutamate", symbol: "Glu", role: "NMDA hypofunction reproduces positive, negative AND cognitive domains — the reason glutamate is the field's leading next-generation target.", grade: "supported", drugConnection: "See the Neurotransmitters concept course" },
    { name: "Serotonin", symbol: "5-HT", role: "5-HT2A antagonism distinguishes clozapine and second-generation agents — relevant to EPS profiles and clozapine's uniqueness.", grade: "supported", drugConnection: "See the Neurotransmitters concept course" },
    { name: "GABA", symbol: "GABA", role: "Interneuron deficits (parvalbumin-positive) disconnect the hippocampal-prefrontal cascade — a circuit-level piece of the same story.", grade: "supported" },
  ],
  pathways: [
    {
      id: "dopamine-v3",
      name: "The dopamine hypothesis, version III",
      steps: [
        { label: "Risk factors", detail: "Genes + obstetric + developmental + stress + cannabis" },
        { label: "Presynaptic striatal change", detail: "↑ dopamine synthesis/release capacity (imaging-demonstrated)" },
        { label: "Aberrant salience", detail: "Irrelevant stimuli assigned significance" },
        { label: "Symptom formation", detail: "Delusions as explanations; hallucinations as weighted percepts" },
        { label: "Drug action", detail: "D2 blockade dampens the signal — treats positive symptoms only" },
      ],
      clinicalManifestation: "Explains why antipsychotics treat positive symptoms while negative/cognitive symptoms persist, and why presynaptic capacity predicts treatment response.",
      grade: "supported",
    },
    {
      id: "neurodevelopment",
      name: "The neurodevelopmental pathway",
      steps: [
        { label: "Genetic loading", detail: "Polygenic risk; ~80% heritability" },
        { label: "Early disruption", detail: "Gestational infection/hypoxia; 22q11.2 and other CNVs" },
        { label: "Pruning deviation", detail: "Adolescent synaptic pruning exceeds the functional threshold" },
        { label: "First episode", detail: "Psychosis emerges typically between 15–30 years" },
        { label: "Course", detail: "DUP + relapses shape outcome — early treatment matters" },
      ],
      clinicalManifestation: "Explains the age-of-onset pattern, premorbid soft signs, and why prevention/reduction of DUP is a clinical target in itself.",
      grade: "supported",
    },
    {
      id: "nmda-model",
      name: "The glutamate/NMDA model",
      steps: [
        { label: "NMDA hypofunction", detail: "On interneurons (PV+) first — circuit disconnection" },
        { label: "Cortical dysconnection", detail: "Prefrontal-hippocampal miscommunication" },
        { label: "Striatal dopamine rise", detail: "The downstream convergence with version III" },
        { label: "All three domains", detail: "Positive + negative + cognitive — the PCP/ketamine signature" },
        { label: "Next-generation targets", detail: "Glycine-site agonists, AMPAkines — under development" },
      ],
      clinicalManifestation: "Explains the symptom domains that D2 blockade fails to reach — and why new drugs are aimed at glutamate.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "sz-prodrome", time: "Years before", title: "Premorbid + prodromal phase", description: "Subtle motor/cognitive soft signs in childhood; prodrome of declining function, social withdrawal and attenuated symptoms (unusual perceptions, ideas of reference).", phase: "onset" },
    { id: "sz-onset", time: "Age 15–30", title: "First episode", description: "Threshold psychosis — hallucinations, delusions, disorganisation. Duration of untreated psychosis (DUP) starts here and strongly predicts outcome.", phase: "peak" },
    { id: "sz-treatment", time: "Weeks 1–6", title: "Antipsychotic response", description: "Positive symptoms respond over weeks (not hours); agitation/sleep normalise first; full stabilisation often 6–12 weeks.", phase: "recovery" },
    { id: "sz-critical", time: "First 2–5 yrs", title: "The critical period", description: "Highest suicide risk and most relapse-driven deterioration occur here — the window where intensive intervention (medication adherence + psychosocial) changes the trajectory.", phase: "peak" },
    { id: "sz-stabilisation", time: "Years 2–10", title: "Stabilisation", description: "Positive symptoms soften in most patients; negative/cognitive burden becomes the main determinant of function; relapse prevention is the clinical anchor.", phase: "recovery" },
    { id: "sz-long", time: "Long term", title: "Long-term course", description: "Roughly a third achieve substantial recovery, a third improve with persisting disability, a third remain severely affected — the honest spread every medical student should be able to state (courtesy of long-term cohort studies).", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence:
      "Point prevalence ~0.29% — about 1 in 300 people, rising to ~1 in 206 adults (WHO fact sheet; ~24–27 million people). Lifetime morbid risk ~0.7% (APA 2020).",
    indianPrevalence:
      "NMHS 2015–16: current psychotic-spectrum prevalence ~1.4% (non-affective psychosis ~0.4–0.5% in community samples); treatment gap ~75% for psychosis.",
    genderRatio: "≈ 1:1 lifetime; men have earlier onset (18–25), more negative symptoms and poorer average prognosis; women show a second peak around menopause.",
    ageOfOnset: "Peak 15–30 years; rarely before 15 or after 45 (late-onset paranoid presentations exist and carry a better prognosis).",
    indianNotes:
      "Indian cohort work (NIMHANS) shows longer DUP in community samples and that longer DUP predicts poorer 1-year symptomatic and functional outcome — the clinical argument for early-recognition programmes.",
  },
  etiology: [
    { category: "genetic", factor: "Polygenic risk", details: "Heritability ~80% — among the highest in psychiatry; risk rises with affected relatives (1st-degree ~10-fold), but most patients have no affected parent." },
    { category: "genetic", factor: "Copy-number variants", details: "22q11.2 deletion (~25-fold risk; also velocardiofacial syndrome phenotype); rare disruptive CNVs contribute in a subset." },
    { category: "biological", factor: "Obstetric complications", details: "Hypoxia-associated birth complications modestly raise risk — one thread of the neurodevelopmental story." },
    { category: "biological", factor: "Maternal infection/inflammation", details: "Epidemiological association with maternal influenza during gestation — supports the early-disruption model." },
    { category: "biological", factor: "Cannabis", details: "High-potency, frequent adolescent use roughly doubles psychosis risk; earlier onset; largest effect in vulnerable individuals (gene × environment)." },
    { category: "biological", factor: "Migration and urbanicity", details: "Robust epidemiological associations (2× risk with urban birth/upbringing; higher rates in some migrant groups) — social-signal or selection effects debated." },
    { category: "psychological", factor: "Trauma and childhood adversity", details: "Elevated risk with childhood abuse/neglect; content of psychoses often echoes trauma — relevance to formulation and therapy." },
    { category: "social", factor: "Stress and expressed emotion", details: "High expressed emotion in households predicts relapse (~2× in classic meta-analyses) — the evidence base for family interventions." },
  ],
  symptomClusters: [
    { category: "Positive", symptoms: ["Delusions (persecutory, referential, control/insertion)", "Hallucinations (auditory > others; running commentary, third-person discussion)", "Disorganised speech (derailment, tangentiality)", "Disorganised/catatonic behaviour"] },
    { category: "Negative", symptoms: ["Avolition and asociality", "Blunted affect (reduced expression)", "Alogia (poverty of speech)", "Anhedonia", "Primary vs secondary (drug EPS, depression, institutionalisation) — always distinguish"] },
    { category: "Cognitive", symptoms: ["Working-memory and attention deficits", "Executive dysfunction", "Processing-speed reduction", "Often present BEFORE first psychosis; the strongest functional-outcome predictor"] },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "295.90 / F20.9",
      criteria: [
        "A. ≥ 2 symptoms (≥ 1 from delusions/hallucinations/disorganised speech), each present a significant portion of the time over 1 month",
        "B. Level of function decline in work/self-care/relationships (or failure to achieve expected level in the young)",
        "C. Continuous signs of disturbance ≥ 6 months (prodrome/residual included; active phase ≥ 1 month within it)",
        "D. Schizoaffective and mood-disorder exclusions",
        "E. Not attributable to substance or medical condition",
      ],
      duration: "≥ 6 months total; ≥ 1 month active phase",
      indianNote: "Acute and transient psychotic disorders (ATPD) are relatively more diagnosed in India — brief florid psychoses with abrupt onset and full recovery; do not over-label them schizophrenia.",
    },
    {
      system: "ICD-11",
      code: "6A20",
      criteria: [
        "≥ 1 month of characteristic psychotic symptoms (delusions, hallucinations, disorganisation, negative symptoms of sufficient intensity)",
        "Not better accounted for by affective, organic or substance-related disorders",
        "Specifiers: first episode vs multiple episodes; current symptomatic state (acute / partial remission / full remission); positive/negative/cognitive/depressive/motor-symptom qualifiers",
      ],
      duration: "≥ 1 month (characteristic symptoms)",
    },
  ],
  severityScales: [
    {
      name: "PANSS",
      fullName: "Positive and Negative Syndrome Scale",
      measures: "30-item clinician-rated scale with Positive, Negative and General subscales — the standard outcome measure in antipsychotic trials.",
      ranges: [
        { min: 58, max: 75, severity: "Mild", action: "Outpatient management; focus on function" },
        { min: 76, max: 95, severity: "Moderate", action: "Active symptom management; review medication adherence" },
        { min: 96, max: 210, severity: "Severe", action: "Urgent review; assess safety and admission need" },
      ],
      indianNote: "Research/tertiary tool more than district practice — practical Indian settings rely on function + relapse signs.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Brief psychotic disorder", distinguishingFeatures: "Full symptom resolution < 1 month with return to baseline function; abrupt onset often after stressor", keyDifferentiator: "Duration — the single most exam-tested differentiator in the whole spectrum" },
    { condition: "Schizophreniform disorder", distinguishingFeatures: "Meets schizophrenia symptom criteria but total duration 1–6 months", keyDifferentiator: "The 1–6 month window (DSM); ~two-thirds progress to schizophrenia" },
    { condition: "Schizoaffective disorder", distinguishingFeatures: "Uninterrupted illness with a major mood episode concurrent with active-phase psychosis PLUS ≥ 2 weeks of delusions/hallucinations without mood symptoms", keyDifferentiator: "The 2-week psychosis-only rule — the clincher criterion" },
    { condition: "Delusional disorder", distinguishingFeatures: "Non-bizarre, fixed delusions WITHOUT hallucinations, disorganisation or functional decline", keyDifferentiator: "Preserved function + non-bizarre content (often presenting to police/lawyers, not doctors)" },
    { condition: "Bipolar mania with psychosis", distinguishingFeatures: "Grandiose/expansive mood-coherent psychosis, episodic course, inter-episode recovery; family history of mood disorder", keyDifferentiator: "Mood-congruent, episodic, and the psychosis does not persist in its absence" },
    { condition: "Substance-induced psychosis", distinguishingFeatures: "Cannabis (high-potency), stimulants, hallucinogens; onset tightly tracks use; often prominent visual phenomena", keyDifferentiator: "Timeline + toxicology; NOTE: a substantial minority of cannabis psychoses later re-present as schizophrenia" },
    { condition: "Autoimmune encephalitis (anti-NMDA-R)", distinguishingFeatures: "Subacute psychosis + seizures + dysautonomia + orofacial dyskinesias; young women", keyDifferentiator: "The movement-dysautonomia cluster + CSF antibodies — a 2020s exam favourite; treatable" },
    { condition: "Temporal-lobe epilepsy / postictal psychosis", distinguishingFeatures: "Epileptic aura, automatisms, postictal confusion; EEG relationship", keyDifferentiator: "Event-like episodes with EEG correspondence" },
  ],
  management: [
    { category: "pharmacotherapy", name: "Antipsychotics (D2 blockade)", description: "Effective for positive symptoms across first- and second-generation classes; choice driven by side-effect profile, cost and route — APA 2020 recommends avoiding combinations and not using two antipsychotics routinely.", whenToUse: "First-episode psychosis onward — start after adequate assessment, at moderate doses, with informed consent.", indianContext: "Low-cost generic tablets widely available; KYP drug lessons pending (recorded as content gap)." },
    { category: "pharmacotherapy", name: "Long-acting injectables (LAIs)", description: "Biweekly-to-half-yearly depot antipsychotics; equal efficacy to or better than oral in real-world adherence.", whenToUse: "Preference, adherence difficulty, or relapse pattern with oral therapy — offered early in many services, not just as 'last resort'.", indianContext: "Haloperidol and risperidone depots in Indian formularies; district-hospital deliverable." },
    { category: "pharmacotherapy", name: "Clozapine", description: "The ONLY agent with demonstrated superiority for treatment-resistant schizophrenia (after ≥ 2 adequate trials); also reduces suicidality (InterSePT); requires ANC monitoring for agranulocytosis.", whenToUse: "Treatment resistance — the most under-used evidence-based treatment in the illness.", indianContext: "Available at tertiary centres; weekly-then-monthly ANC; the classic trade-off is monitoring logistics vs unique efficacy." },
    { category: "psychotherapy", name: "CBT for psychosis", description: "Reduces distress and symptom severity as an ADJUNCT to medication, including in resistant symptoms.", whenToUse: "Persistent distressing symptoms; psychoeducation and relapse-prevention structure.", indianContext: "Trained-psychologist delivered at tertiary level; scalable brief formats under evaluation." },
    { category: "psychotherapy", name: "Family intervention", description: "Reduces relapse (~20% absolute in meta-analyses) by lowering expressed emotion and building problem-solving — the best-evidenced psychosocial treatment in the illness.", whenToUse: "Offer to ALL families with contact, especially in the critical period.", indianContext: "Natural fit for Indian multi-generational households; the NIMHANS family-intervention legacy." },
    { category: "psychotherapy", name: "Cognitive remediation + social skills", description: "Structured cognitive training improves processing speed and functioning modestly; supported employment (IPS) outperforms train-and-place vocational models.", whenToUse: "Cognitive/functional deficits in stabilised illness.", indianContext: "Largely tertiary-centre; cognitive-adaptation training being evaluated in Indian samples." },
    { category: "lifestyle", name: "Cardiometabolic protection", description: "Metabolic syndrome screening (weight/glucose/lipids at baseline, 12 weeks, then annually), exercise and diet counselling, smoking cessation — treating the 10–20-year mortality gap is core psychiatry, not general-medicine courtesy.", whenToUse: "From the FIRST antipsychotic prescription.", indianContext: "Diabetes prevalence + antipsychotic weight gain converge; screen with waist circumference when labs are delayed." },
  ],
  safety: {
    redFlags: [
      "Command hallucinations ordering harm to self or others",
      "Ideas/delusions of control with violence content",
      "Agranulocytosis on clozapine (ANC < 1500) — a haematological emergency pathway",
      "Neuroleptic malignant syndrome: rigidity + hyperthermia + autonomic instability + elevated CK",
      "First-episode disorganisation with refusal of food/fluids",
      "Post-psychotic depression with suicidal ideation (the highest-risk window for suicide is early illness)",
      "Catatonia (excited or stuporous) — lorazepam challenge + ECT pathway",
    ],
    urgentGuidance:
      "Acute psychotic emergencies balance safety, consent and the MHCA 2017 framework (supported admission only with the statutory safeguards; emergency treatment under the narrow exceptions). Neutropenia protocols for clozapine are non-negotiable. Suicide risk in schizophrenia is highest in the early years — depression, insight-related hopelessness and hospitalisation transitions are the risk periods to ask about directly.",
  },
  drugLinks: [],
  contentGaps: [
    "Antipsychotics (risperidone, olanzapine, aripiprazole, haloperidol, quetiapine, clozapine) — no KYP drug lessons exist yet; requested as the highest-priority next drug-course batch for the schizophrenia journey",
    "Mood stabilisers (lithium, valproate) — requested for the schizoaffective/bipolar boundary courses",
    "Benzodiazepines (lorazepam) — requested for the catatonia pathway",
  ],
  patientGuide: {
    whatIsIt:
      "Schizophrenia is a treatable medical condition of the brain that affects thinking, perception and motivation. It does NOT mean 'split personality', and it does not mean a life without recovery — with early treatment and support, most people stabilise and many work, study and have families.",
    whatCausesIt:
      "A combination of inherited sensitivity and early brain-development factors, sometimes with stress or substances (especially strong cannabis in the teens) acting as triggers. Nobody's family 'caused' it, and nobody chose it.",
    symptoms:
      "Hearing voices or holding beliefs others don't share; confused thinking; losing drive and interest; withdrawing from people. Symptoms usually build over months before they become clear.",
    treatment:
      "Medicines called antipsychotics calm the voices and beliefs over weeks. They work best combined with family support, routine, and help with work or study. Long-acting injections exist if daily tablets are hard. Missing medicine is the commonest cause of relapse — if side effects bother the patient, the answer is telling the doctor, not stopping.",
    selfHelp: [
      "Take medicine at the same anchor time daily (meal or bedtime)",
      "Learn personal early-warning signs (sleep loss, social withdrawal, unease around others) and have a written plan for whom to call",
      "Keep stimulants and strong cannabis away — they reliably worsen psychosis",
      "Physical health: weight, sugar and cholesterol checks matter because antipsychotics can change them",
      "Stay connected to one supportive person or group; isolation feeds the illness",
    ],
    whenToSeekHelp: [
      "Voices or beliefs becoming louder, more frequent or frightening",
      "Sleep slipping, withdrawal increasing, work or studies dropping",
      "Thoughts of self-harm — early illness is the highest-risk period; seek help the same day (Tele-MANAS 14416)",
      "Fever/sore throat on clozapine — check blood count urgently",
    ],
    indianResources: [
      "Tele-MANAS 14416 — free, confidential, 24×7, Indian languages",
      "District hospital DMHP psychiatric OPD — sustained follow-up near home",
      "Family psychoeducation groups at medical-college psychiatry departments (NIMHANS-model family intervention)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines:
      "Indian Psychiatric Society clinical practice guidance for schizophrenia (CPG series, Indian Journal of Psychiatry) — Indian-adapted: early recognition of first-episode psychosis, antipsychotic selection with cost/access realism, LAI use early where adherence is doubtful, family psychoeducation as standard, and clozapine for resistance with practical ANC monitoring schedules.",
    systemContext:
      "Psychosis prevalence ~1.4% with a ~75% treatment gap (NMHS 2015–16). First contact is often a faith healer or general OPD — a substantial DUP by the time of psychiatric referral (NIMHANS prospective data: longer DUP predicts poorer 1-year outcome). DMHP psychiatrists cover most districts; tertiary medical colleges handle clozapine, treatment resistance and research cohorts.",
    programmeContext:
      "NMHP/DMHP infrastructure since 1982; Tele-MANAS 14416 for counselling and routing; MHCA 2017 defines supported admission standards, decriminalised suicide attempt, and requires rights-based care — practically: families need guidance that admission requires the statutory process, and ECT-with-consent remains an evidence-based option.",
    costConsiderations:
      "Generic antipsychotics are among the cheapest psychiatric medicines; the real costs are sustained follow-up, family time lost from work, and clozapine monitoring. Haloperidol remains the most cost-effective option where ECG/monitoring constraints exist, but second-generation choices reduce EPS burden — a cost-tolerability balancing act unique to resource-constrained practice.",
    culturalConsiderations:
      "Acute and transient psychotic presentations (brief florid psychoses with full recovery) are relatively over-represented in Indian settings — resist over-labelling them schizophrenia. Family is the primary care system: psychoeducation converts them from bystanders to co-therapists (high expressed emotion predicts relapse; intervention works). Stigma and marriage-related concealment delay care; faith-healer contact is common — engage, never ridicule, and screen for harm during those contacts.",
    patientCounselling: [
      "Explain the illness as a brain-circuit condition that medicines stabilise — the word 'schizophrenia' needs unpacking from movie myths ('split personality' is NOT this illness).",
      "Medicine timing anchored to daily routine; missing doses is the relapse highway.",
      "Name the metabolic side-effect plan at the START: weight, sugar, lipids, exercise.",
      "Teach two personal early-warning signs and the number to call (including Tele-MANAS 14416).",
      "Clozapine patients: fever/sore throat = same-day blood count.",
      "Address cannabis directly: strong preparations reliably worsen outcomes.",
    ],
  },
  decisionPath: {
    title: "Evaluating a first psychotic presentation (educational)",
    startNodeId: "p1",
    nodes: [
      { id: "p1", question: "Psychotic symptoms present (delusions, hallucinations, disorganisation)?", branches: [ { label: "Yes", next: "p2" }, { label: "Attenuated / prodromal", next: "p8" } ] },
      { id: "p2", question: "Immediate risk or medical instability? (harm command hallucinations, catatonia, NMS suspicion, refusing food/fluids, first presentation over 45 yrs with neurological signs)", branches: [ { label: "YES", next: "p3" }, { label: "No", next: "p4" } ] },
      { id: "p3", question: "Emergency pathway", recommendation: "Safety first: reduce stimulation, do not argue with delusions, urgent psychiatric assessment; medical screen (infection, toxins, autoimmune — anti-NMDA-R encephalitis is the treatable miss); catatonia → lorazepam challenge; NMS → stop antipsychotic, cooling, ICU liaison.", reasoning: "First-episode presentations carry the highest medical-mimic yield and the highest suicide-risk window — the emergency screen is diagnostic, not just safety theatre." },
      { id: "p4", question: "Substances / medical cause excluded? (cannabis, stimulants; thyroid, autoimmune, temporal-lobe epilepsy)", branches: [ { label: "Substance-induced established", next: "p9" }, { label: "Primary psychosis", next: "p5" } ] },
      { id: "p5", question: "Mood syndrome primary and episodic with inter-episode recovery?", branches: [ { label: "Yes — mood-congruent psychosis", next: "p10" }, { label: "No — schizophrenia-spectrum", next: "p6" } ] },
      { id: "p6", question: "Duration of continuous psychotic symptoms?", branches: [ { label: "< 1 month", next: "p11" }, { label: "1–6 months", next: "p12" }, { label: "≥ 6 months (or ICD-11 ≥ 1 month with decline)", next: "p7" } ] },
      { id: "p7", question: "Schizophrenia — management spine", recommendation: "Single antipsychotic at moderate dose (APA 2020: no routine combinations) + family intervention + metabolic baseline + psychoeducation; LAI consideration early; psychosocial rehabilitation. After ≥ 2 adequate trials without response → clozapine with ANC programme. Assess and document suicide risk.", reasoning: "The evidence-based spine; the commonest execution error is stopping at the prescription — the psychosocial package is where functional outcomes live." },
      { id: "p8", question: "Attenuated symptoms / prodrome", recommendation: "Engage, psychoeducation, monitor (structured follow-up), treat comorbid depression/substances; do NOT prescribe antipsychotics for the prodrome in routine care.", reasoning: "Clinical-high-risk conversion is ~15–30% over 2–3 years; watchful engagement beats pre-emptive drug exposure in standard practice." },
      { id: "p9", question: "Substance-induced psychosis", recommendation: "Supported abstinence + short-term antipsychotic if symptoms distress; monitor beyond detox — a minority re-present as primary schizophrenia; treat the substance use disorder.", reasoning: "Cannabis psychosis in particular is a risk state, not just a self-limiting toxicity." },
      { id: "p10", question: "Affective psychosis", recommendation: "Treat the mood disorder (mood stabiliser/antipsychotic per polarity; see Bipolar Disorders lesson); ECT for severe/mixed/rapid presentations.", reasoning: "Mood-congruent episodic psychosis with recovery between episodes distinguishes affective illness; antipsychotic-only treatment of bipolar psychosis misses the maintenance strategy." },
      { id: "p11", question: "< 1 month of symptoms", recommendation: "Brief psychotic disorder (often stress-related; ATPD pattern common in India): antipsychotic for the episode, taper after full recovery, maintain monitoring; family psychoeducation.", reasoning: "Brief psychoses with full return to function exist and over-labelling them schizophrenia is a real harm — but they need follow-up because a proportion evolve." },
      { id: "p12", question: "1–6 months", recommendation: "Schizophreniform diagnosis; continue treatment and re-evaluate at 6 months — roughly two-thirds convert to schizophrenia; keep the same intensity of care meanwhile.", reasoning: "A provisional category that guides vigilance rather than prognostic certainty." },
    ],
  },
  commonMistakes: [
    { mistake: "Labelling every brief Indian florid psychosis 'schizophrenia'", why: "Acute transient psychoses with full recovery are over-represented in India; the label carries stigma and unnecessary long-term medication.", correction: "Apply the duration spine strictly (< 1 month resolves → brief psychotic disorder; re-evaluate)." },
    { mistake: "Treating only the positive symptoms", why: "Negative and cognitive symptoms drive long-term function; D2 blockade barely touches them.", correction: "Prescribe the psychosocial package (family intervention, cognitive/functional work) with the same seriousness as the drug." },
    { mistake: "Combining two antipsychotics after partial response", why: "APA 2020 explicitly recommends against routine polypharmacy; side effects add, benefit rarely does.", correction: "Optimise one agent (dose/duration), check adherence, then clozapine if two adequate trials fail." },
    { mistake: "Delaying clozapine for years", why: "Clozapine is the only agent with superiority evidence in resistance — delay forfeits the best window for recovery.", correction: "After ≥ 2 adequate trials (dose, duration, adherence verified), start clozapine with the ANC programme." },
    { mistake: "Ignoring the metabolic screen", why: "10–20-year mortality gap is driven by cardiometabolic disease; weight gain starts with the first prescription.", correction: "Baseline weight/glucose/lipids; recheck at 12 weeks then annually; treat smoking actively." },
    { mistake: "Arguing with delusions to 'correct' them", why: "Confrontation raises distress and damages alliance without changing the belief.", correction: "Empathise with the feeling, gently reality-test, and channel the alliance toward treatment." },
    { mistake: "Equating 'no voices' with recovery", why: "Remission criteria include function, not just symptoms; residual negative symptoms are invisible on a symptom checklist.", correction: "Track functional milestones (work, study, relationships) as first-class outcome measures." },
    { mistake: "Forgetting the suicide question in early schizophrenia", why: "Risk is highest in the first years, especially with insight-related hopelessness and post-discharge transitions.", correction: "Ask about depression and suicidal ideation directly at every early-course review." },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Positive vs negative vs cognitive symptoms with two examples each.",
        "DSM-5-TR duration rules (1 month active phase, 6 months total) and the spectrum differentials.",
        "First-line antipsychotic choice and monitoring obligations.",
        "Indications and monitoring for clozapine.",
        "Neuroleptic malignant syndrome recognition and first step (stop the drug).",
      ],
      practical: [
        "Take a history from a relative of a first-episode patient and present the formulation.",
        "Mental status examination of a psychotic patient — report hallucination/delusion findings precisely.",
        "Counsel a family on diagnosis, medication duration and relapse-warning signs.",
      ],
      longAnswer: [
        "Aetiology, clinical features and management of schizophrenia.",
        "Differential diagnosis of first-episode psychosis.",
        "Antipsychotic side effects and their management (EPS, metabolic, NMS).",
      ],
    },
    neetPg: {
      highYield: [
        "Durations: brief < 1 month; schizophreniform 1–6; schizophrenia ≥ 6 months (DSM); ICD-11 ≥ 1 month.",
        "Schizoaffective rule: ≥ 2 weeks psychosis WITHOUT mood symptoms during an uninterrupted illness.",
        "Delusional disorder: non-bizarre delusions, no hallucinations/decline.",
        "Kraepelinian legacy: 'dementia praecox'; Bleuler's 4 A's; Schneiderian first-rank symptoms (running commentary, third-person voices, thought insertion/withdrawal/broadcast, made acts).",
        "Clozapine: resistance after 2 trials; agranulocytosis (ANC monitoring); also reduces suicidality.",
        "NMS: rigidity + hyperthermia + CK + autonomic instability → stop drug, cooling, dantrolene/lorazepam.",
        "Dopamine hypothesis version III: striatal excess (positive) vs cortical deficit (negative/cognitive).",
        "Best prognostic factors: acute onset, later age, obvious trigger, no negative symptoms, good premorbid function, family history of MOOD (not psychosis).",
      ],
      pyqConcepts: [
        "First-rank symptom identification vignettes (which symptom is Schneiderian first-rank?).",
        "Duration-based classification matching across the whole psychotic spectrum.",
        "Antipsychotic side-effect matching (acute dystonia → diphenhydramine/benztropine; akathisia → propranolol; tardive dyskinesia → valbenazine/withdrawal).",
        "Anti-NMDA-R encephalitis as the psychiatric-to-neurological transfer question.",
        "Pregnancy/teratogenicity and epilepsy comparisons of antipsychotics and mood stabilisers (cross-topic).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A treatment-adherent patient with two failed antipsychotic trials and persistent hallucinations — the clozapine decision (plus ANC logistics).",
        "A young woman with psychosis, orofacial dyskinesias and autonomic instability — anti-NMDA-R encephalitis before psychiatric hospitalisation.",
        "A stabilised patient gaining 8 kg on olanzapine — switching strategy vs metformin-first approaches.",
        "An Indian family wanting to stop medicines after recovery — relapse-risk counselling with numbers.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PANSS purpose; BPRS naming.",
        "Highest heritability among major psychiatric disorders (~80%).",
        "22q11.2 deletion association.",
        "Expressed emotion and relapse; family intervention evidence.",
        "Tele-MANAS 14416 and the ~75% Indian psychosis treatment gap (NMHS).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Clozapine candidacy is a diagnosis of exclusion you should have excluded months earlier — audit your resistant caseload for it.",
        "Smoking status is a clozapine-dosing variable (CYP1A2): every admission/discharge and every cessation attempt is a re-titration decision.",
        "Function, not hallucinations, is the outcome that changes lives — write vocational goals into the plan.",
        "The metabolic screen is part of the psychiatric prescription; if you prescribe the antipsychotic, you own the weight/glucose/lipid plan.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The engineering student who stopped attending",
      presentation: "A 21-year-old engineering student brought by his father: 8 months of academic decline, staying in his room, 'the hostel mates are broadcasting my thoughts'.",
      history: "Gradual social withdrawal over a year; for 8 months, third-person auditory hallucinations (two voices discussing him), delusions of reference and thought broadcast; no mood episodes; sleep-wake reversal; cannabis discontinued 2 years ago; no medical issues. Function: failed two semesters.",
      examination: "Poorly groomed; abstract answers; auditory hallucinations acknowledged; delusional conviction intact; blunted affect; no insight; no cognitive disorganisation severe enough to prevent structured interview.",
      diagnosis: "Schizophrenia, first episode (DSM-5-TR: > 6 months of disturbance with active-phase symptoms; PANSS-equivalent moderate-severe). Differential: substance-induced excluded (2-year abstinence), mood psychosis excluded (no episodes), brief psychosis excluded (duration).",
      management: "Risperidone at moderate dose with informed consent; baseline weight/glucose/lipids; family psychoeducation sessions; structured return-to-study planning; monthly follow-up; suicide-risk assessment documented.",
      outcome: "Hallucination intensity reduced over 4 weeks; thought-broadcast belief weakened by week 10; enrolled in supplementary exams with accommodations; family implemented early-warning plan; 12-month maintenance with LAI discussion at month 6 (adherence wobble at exams).",
      teachingPoints: [
        "The 8-month duration seals schizophrenia vs schizophreniform/brief.",
        "Function decline (two failed semesters) is criterion B — and the rehabilitation target.",
        "Family psychoeducation is co-prescribed with the antipsychotic, not referred as an afterthought.",
      ],
    },
    {
      title: "Ten years, three relapses, one missed drug",
      presentation: "A 34-year-old man with a 10-year schizophrenia history, three relapses after stopping medicines, now with persistent voices despite two antipsychotic trials at adequate doses.",
      history: "Each relapse followed self-discontinuation within months of stabilisation; current episode: persistent auditory hallucinations despite 6 weeks of risperidone 4 mg and 8 weeks of olanzadone 15 mg (adherence verified by tablet counts); negative symptoms mild; no depressive syndrome.",
      examination: "Hallucinatory behaviour (whispering responses); partial delusional conviction; mild akathisia; physical: BMI 27, fasting glucose 104 mg/dL.",
      diagnosis: "Treatment-resistant schizophrenia (two adequate antipsychotic trials without sufficient response).",
      management: "Clozapine initiation with structured ANC monitoring (baseline, weekly × 18 weeks, then monthly); smoking status documented (affects levels); metabolic plan (metformin discussion, diet, exercise); gradual cross-taper of olanzapine.",
      outcome: "By week 12 on clozapine 300 mg: voices reduced to brief weekly episodes; participated in vocational training; ANC stable; weight plan in progress with metformin and dietician input.",
      teachingPoints: [
        "Treatment resistance is defined by TWO adequate trials — and its best response is clozapine, not a third conventional trial or polypharmacy.",
        "Smoking changes clozapine levels (CYP1A2) — the exam detail with real-world consequence.",
        "Metabolic care travels WITH the clozapine prescription from day one.",
      ],
    },
  ],
  clinicalPearls: [
    "Duration is the diagnostic spine of the psychotic spectrum — memorise the three thresholds (1 month / 6 months DSM; 1 month ICD-11).",
    "Two weeks of psychosis without mood symptoms = schizoaffective territory.",
    "The best predictor of function is negative/cognitive symptoms, not positive ones — and the best treatment for those is psychosocial.",
    "After two adequate antipsychotic trials, the next prescription is clozapine — the most evidence-based and most under-used decision in the illness.",
    "The mortality gap is cardiometabolic: every antipsychotic prescription includes a weight/glucose/lipid plan.",
    "In Indian first-contact practice, a brief florid psychosis that fully recovers is NOT schizophrenia — but deserves follow-up to be sure.",
    "Suicide risk peaks in the early years; ask directly, especially at hospital transitions.",
  ],
  highYieldSummary: [
    "Schizophrenia = positive + negative + cognitive domains; ≥ 6 months (DSM-5-TR) / ≥ 1 month (ICD-11); onset 15–30; 1:1 sex with worse male prognosis.",
    "Epidemiology: ~1 in 300 point prevalence; ~0.7% lifetime risk; heritability ~80% (highest in psychiatry).",
    "Neuroscience spine: neurodevelopmental trajectory + striatal dopamine excess (imaging-supported) + cortical dopamine deficit + NMDA-hypofunction layer — graded established/supported/proposed.",
    "Differential spine: duration (brief/schizophreniform/schizophrenia) + schizoaffective 2-week rule + delusional disorder (non-bizarre, preserved function) + affective psychosis + substances + anti-NMDA-R.",
    "Management spine: single antipsychotic, moderate dose, no routine polypharmacy; LAI early; family intervention for ALL; metabolic screening from prescription one; clozapine after 2 adequate trials; CBT as adjunct.",
    "India layer: NMHS psychosis ~1.4% with ~75% gap; DUP predicts outcome (NIMHANS); acute transient psychoses over-represented; family-centred care model; DMHP + Tele-MANAS 14416; MHCA 2017 safeguards.",
    "Safety: NMS (stop drug), clozapine ANC pathway, command hallucinations, early-illness suicide risk, catatonia (lorazepam → ECT).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    { id: "sz-mq1", question: "A patient has had delusions and hallucinations continuously for 5 months with functional decline and no mood syndrome. DSM-5-TR diagnosis:", options: ["Brief psychotic disorder", "Schizophreniform disorder", "Schizophrenia", "Schizoaffective disorder"], correctIndex: 1, explanation: "1–6 months of illness meeting symptom criteria = schizophreniform; ≥ 6 months converts to schizophrenia. (ICD-11 would already code schizophrenia at ≥ 1 month with decline.)", afterSectionId: "diagnosis" },
    { id: "sz-mq2", question: "The best-supported in-vivo neurochemical finding in acute psychosis is:", options: ["Cortical serotonin excess", "Elevated presynaptic striatal dopamine synthesis/release", "Global GABA deficiency", "Reduced hippocampal acetylcholine"], correctIndex: 1, explanation: "Imaging studies consistently show elevated presynaptic dopamine function in the associative striatum — the basis of dopamine hypothesis version III.", afterSectionId: "mechanism" },
    { id: "sz-mq3", question: "After two adequate antipsychotic trials without response, the next step is:", options: ["Combine two antipsychotics", "Clozapine with ANC monitoring", "Longer trial of the same drug", "Refer for psychosurgery"], correctIndex: 1, explanation: "Clozapine is the only agent with superiority evidence in treatment resistance; routine polypharmacy is discouraged (APA 2020).", afterSectionId: "management" },
    { id: "sz-mq4", question: "A patient on clozapine develops fever and sore throat. The immediate action is:", options: ["Start empirical antibiotics and continue", "Stop clozapine pending urgent ANC", "Reassure — it is a common viral syndrome", "Switch to olanzapine the same day"], correctIndex: 1, explanation: "Fever/sore throat on clozapine = presumed neutropenia until excluded: hold the drug and get an urgent absolute neutrophil count (protocol thresholds: ANC < 1500).", afterSectionId: "common-mistakes" },
  ],
  activeRecallQuestions: [
    { question: "Reproduce the DSM-5-TR duration structure for the psychotic spectrum.", answer: "Brief psychotic disorder: full remission < 1 month. Schizophreniform: 1–6 months of schizophrenia-level symptoms. Schizophrenia: ≥ 6 months of disturbance including ≥ 1 month active phase. Schizoaffective: ≥ 2 weeks of psychosis without mood symptoms within an uninterrupted illness with a major mood episode.", topic: "Diagnosis" },
    { question: "State the dopamine hypothesis version III in two sentences, including both directions.", answer: "Multiple genetic and environmental risks converge on elevated presynaptic dopamine synthesis/release capacity in the associative striatum, generating aberrant salience that presents as positive symptoms — while prefrontal dopamine signalling is relatively deficient, contributing to negative and cognitive symptoms that D2 blockade does not fix.", topic: "Mechanism" },
    { question: "Why do antipsychotics fail negative and cognitive symptoms, and what actually helps there?", answer: "Because D2 blockade targets only the striatal hyperdopaminergia of positive symptoms; negative/cognitive symptoms reflect cortical dopamine deficit, glutamate/NMDA dysconnection and neurodevelopmental circuit changes. Help comes from family intervention, cognitive remediation, social/functional programmes and treatment of secondary causes (depression, EPS, institutionalisation).", topic: "Mechanism" },
    { question: "Give the anti-NMDA-R encephalitis clue-cluster.", answer: "Young patient, subacute psychosis with rapid cognitive decline, seizures, orofacial/limb dyskinesias, autonomic instability (tachycardia, temperature instability), often ovarian teratoma in young women. CSF antibodies confirm; immunotherapy works — the treatable psychosis mimic.", topic: "Differential" },
    { question: "List the clozapine package.", answer: "Indications: treatment resistance (≥ 2 adequate trials), suicidality in schizophrenia. Superiority: the only drug with resistance evidence; reduces suicide risk (InterSePT). Monitoring: ANC baseline then weekly × 18 weeks, monthly thereafter (stop thresholds per protocol). Interactions: smoking (CYP1A2) changes levels; fluvoxamine raises them sharply. Side effects: agranulocytosis, myocarditis (early), metabolic syndrome, sialorrhoea, seizures (dose-related).", topic: "Management" },
    { question: "What are NMS and its first two actions?", answer: "Neuroleptic malignant syndrome: rigidity + hyperthermia + autonomic instability + raised CK + altered consciousness, over hours-days. Actions: (1) stop the antipsychotic immediately, (2) cooling + supportive/ICU care (± bromocriptine/dantrolene). Reintroduction requires ≥ 2 weeks and a different, lower-potency agent with consent.", topic: "Safety" },
    { question: "What are the two best-evidenced psychosocial treatments and their indications?", answer: "Family intervention (reduces relapse ~20% in absolute terms by working with expressed emotion — offer to all families with contact, especially early illness) and supported employment/IPS (competitive employment outcomes superior to train-and-place). Cognitive remediation adds modest functional benefit.", topic: "Management" },
    { question: "India: name the NMHS psychosis numbers, the DUP lesson and one clinical over-labelling risk.", answer: "NMHS 2015–16: psychotic-spectrum prevalence ~1.4%, treatment gap ~75%. NIMHANS prospective data: longer duration of untreated psychosis predicts poorer 1-year symptomatic/functional outcome — the argument for early-recognition pathways. Over-labelling risk: acute transient psychoses (brief florid, stress-linked, full recovery) miscalled schizophrenia.", topic: "Indian Practice" },
  ],
  faqs: [
    { question: "Does schizophrenia mean split personality?", answer: "No — that is a movie myth. Schizophrenia is a disorder of perception (hallucinations), belief (delusions), organisation of thought, motivation and cognition. Split/dissociated identity is an entirely different condition." },
    { question: "Is it caused by bad parenting or family?", answer: "No. The biology is genetic sensitivity plus early brain-development factors. Families do not cause schizophrenia — and family involvement demonstrably improves outcomes (structured psychoeducation reduces relapse)." },
    { question: "Can people with schizophrenia recover and work?", answer: "Yes. With early, sustained treatment most people stabilise, and many work, study and have families. The honest distribution: about a third achieve substantial recovery, a third improve with ongoing support needs, a third have persisting significant disability — and modern early-intervention care aims to shift those numbers upward." },
    { question: "How long will the medicine be needed?", answer: "After a first episode, guidelines suggest continued treatment for at least 1–2 years while function rebuilds; after multiple relapses, long-term treatment is standard. Every decision to change this is made with the treating clinician — never alone, because silent relapse is the rule." },
    { question: "Are antipsychotic injections only for 'bad' patients?", answer: "No. Long-acting injections simply make adherence easier (once every two weeks to six months) and are offered early in many services — including to high-functioning patients who prefer not to think about tablets daily." },
    { question: "What are the warning signs of relapse?", answer: "Personal patterns vary; the common ones are sleep disruption, social withdrawal, unease around others, and declining work or studies. Families who know the personal pattern and have a written plan (whom to call, Tele-MANAS 14416) catch episodes early — and early episodes respond faster." },
    { question: "Does cannabis cause psychosis?", answer: "High-potency, frequent use, especially in the teens, roughly doubles the risk of early-onset psychosis in vulnerable people — and reliably worsens the course of existing schizophrenia. In a person with schizophrenia, strong cannabis is one of the clearest modifiable relapse factors." },
    { question: "Why does the doctor keep weighing me and checking sugar?", answer: "Antipsychotics can raise weight, blood sugar and cholesterol, and people with schizophrenia already face a 10–20-year mortality gap from heart and metabolic disease. The metabolic checks are as much a part of treatment as the prescription itself." },
    { question: "How is this tested in NEET-PG?", answer: "Duration-based classification matching, first-rank symptom vignettes, antipsychotic side-effect matching (dystonia/akathisia/tardive dyskinesia/NMS), clozapine indications and ANC, prognostic-factor lists, and dopamine-hypothesis mechanism questions are the recurring patterns." },
  ],
  references: {
    guidelines: [
      { source: "APA — The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd edition (Keepers GA et al.) (2020)", url: "https://doi.org/10.1176/appi.books.9780890424841" },
      { source: "NICE CG178 — Psychosis and schizophrenia in adults: prevention and management (2014 (with updates))", url: "https://www.nice.org.uk/guidance/cg178" },
      { source: "WHO — Schizophrenia fact sheet (2025 (reviewed 2026-09))", url: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia" },
      { source: "Indian Psychiatric Society — Clinical practice guidelines: schizophrenia (CPG series, Indian J Psychiatry) (as published)", url: "https://indianpsychiatricsociety.org/" },
    ],
    textbooks: [
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — Schizophrenia spectrum (2022)" },
      { source: "Stahl's Essential Psychopharmacology, 5th ed. — Antipsychotics (2021)" },
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th ed. — Antipsychotics (2019)" },
    ],
    trials: [
      { source: "Kane JM et al. — Clozapine for the treatment-resistant schizophrenia (the defining trial) (1988)" },
      { source: "InterSePT — Clozapine vs olanzapine for suicidality in schizophrenia (2003)" },
      { source: "RAISE-ETP — Recovery After an Initial Schizophrenia Episode (coordinated specialty care) (2015)" },
    ],
    reviews: [
      { source: "Howes OD, Kapur S — The dopamine hypothesis of schizophrenia: version III. Schizophr Bull (2009)", url: "https://doi.org/10.1093/schbul/sbn006" },
      { source: "Howes OD, Nour MM — Dopamine and the aberrant salience hypothesis of schizophrenia. World Psychiatry (2016)" },
      { source: "Laruelle M et al. / CNTRD meta-analyses — Imaging dopamine synthesis capacity in psychosis" },
      { source: "Kapur S — Psychosis as a state of aberrant salience. Am J Psychiatry (2003)" },
    ],
    patientResources: [
      { source: "Tele-MANAS national tele-mental-health helpline (14416), MoHFW India (2024–25)", url: "https://telemanas.mohfw.gov.in" },
      { source: "NIMHANS family psychoeducation materials (via DMHP district services)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language: what schizophrenia is, treatment basics, warning signs and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "Foundations, neuroscience, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "40 min",
      description: "Full course with spectrum differentials, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "50 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The syndrome, the numbers, and the spectrum map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the three-domain syndrome, quote global/Indian epidemiology with sources, and place schizophrenia within the psychotic spectrum." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Neurodevelopment, dopamine version III, glutamate layer — graded honestly.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can trace risk factors to striatal dopamine to aberrant salience to symptoms, explain why D2 blockade is insufficient, and grade each model's evidence." },
    { number: 3, title: "Clinical Practice", description: "Recognise, differentiate, treat, monitor.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can apply duration-based diagnosis, build the differential (including anti-NMDA-R), construct the management spine with metabolic care, and counsel a family." },
    { number: 4, title: "Indian Context", description: "Treatment gap, DUP, family-centred care, medicolegal frame.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You know the NMHS/DUP numbers, the acute-transient-psychosis boundary, the family-intervention evidence and the MHCA 2017 safeguards." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer duration-matching, first-rank-symptom, side-effect and clozapine questions, and you know where the antipsychotic drug lessons are still missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "WHO — Schizophrenia fact sheet (1 in 300; 1 in 206 adults; ~24–27 million)", sourceType: "who", year: "2025 (reviewed 2026-09)", locator: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia", dateReviewed: "2026-09-25" },
    { id: "S2", source: "ICD-11 — Schizophrenia (6A20)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-25" },
    { id: "S3", source: "DSM-5-TR — Schizophrenia spectrum criteria", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S4", source: "APA Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd ed. (Keepers GA et al., Am J Psychiatry 177(9))", sourceType: "guideline", year: "2020", locator: "https://doi.org/10.1176/appi.books.9780890424841", dateReviewed: "2026-09-25" },
    { id: "S5", source: "NICE CG178 — Psychosis and schizophrenia in adults", sourceType: "guideline", year: "2014 (updated)", locator: "https://www.nice.org.uk/guidance/cg178", dateReviewed: "2026-09-25" },
    { id: "S6", source: "Howes OD, Kapur S — Dopamine hypothesis version III, Schizophr Bull", sourceType: "review", year: "2009", locator: "https://doi.org/10.1093/schbul/sbn006", dateReviewed: "2026-09-25" },
    { id: "S7", source: "Kapur S — Psychosis as a state of aberrant salience, Am J Psychiatry", sourceType: "primary", year: "2003", dateReviewed: "2026-09-25" },
    { id: "S8", source: "Howes OD, Nour MM — Dopamine and aberrant salience, World Psychiatry", sourceType: "review", year: "2016", dateReviewed: "2026-09-25" },
    { id: "S9", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — psychosis prevalence ~1.4%; treatment gap", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-25" },
    { id: "S10", source: "Thirthalli J et al. — Prospective study of duration of untreated psychosis and outcome (NIMHANS)", sourceType: "primary", year: "2011", dateReviewed: "2026-09-25" },
    { id: "S11", source: "Kane JM et al. — Clozapine for treatment-resistant schizophrenia, Arch Gen Psychiatry", sourceType: "trial", year: "1988", dateReviewed: "2026-09-25" },
    { id: "S12", source: "InterSePT — Clozapine and suicidality in schizophrenia", sourceType: "trial", year: "2003", dateReviewed: "2026-09-25" },
    { id: "S13", source: "Mental Healthcare Act, Government of India", sourceType: "government", year: "2017", dateReviewed: "2026-09-25" },
    { id: "S14", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed.", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S15", source: "Stahl's Essential Psychopharmacology, 5th ed.", sourceType: "textbook", year: "2021", dateReviewed: "2026-09-25" },
    { id: "S16", source: "Di Forti M et al. — High-potency cannabis and psychosis (GPAP and related studies)", sourceType: "primary", year: "2015 onward", dateReviewed: "2026-09-25" },
    { id: "S17", source: "Hjorthøj C et al. — Years of potential life lost / mortality gap in schizophrenia (systematic review)", sourceType: "systematic-review", year: "2017", dateReviewed: "2026-09-25" },
    { id: "S18", source: "NICE / APA — Family intervention relapse-prevention evidence (meta-analytic)", sourceType: "guideline", year: "2014/2020", dateReviewed: "2026-09-25" },
  ],
  evidenceMap: [
    { text: "Schizophrenia point prevalence ≈ 1 in 300 (0.29%), about 1 in 206 adults; lifetime risk ~0.7%.", grade: "established", sources: ["S1", "S4"] },
    { text: "Indian psychotic-spectrum prevalence ~1.4% with ~75% treatment gap (NMHS 2015–16).", grade: "established", sources: ["S9"] },
    { text: "Duration of untreated psychosis predicts poorer symptomatic and functional outcome (Indian prospective data).", grade: "supported", sources: ["S10"] },
    { text: "Elevated presynaptic striatal dopamine synthesis/release in psychotic patients — the best-replicated in-vivo finding.", grade: "established", sources: ["S6", "S8"] },
    { text: "Aberrant salience as the psychological readout of dopaminergic dysregulation.", grade: "supported", sources: ["S7", "S8"] },
    { text: "Cortical (prefrontal) dopamine deficit underlying negative/cognitive symptoms.", grade: "supported", sources: ["S6"], note: "Direct measurement harder than striatal side; convergent evidence." },
    { text: "NMDA/glutamate hypofunction reproducing all three symptom domains.", grade: "proposed", sources: ["S6", "S14"], note: "Strong pharmacological models; clinical translation under development." },
    { text: "Antipsychotics (D2 blockade) are effective for positive symptoms; routine combination therapy is not recommended (APA 2020).", grade: "established", sources: ["S4", "S5"] },
    { text: "Clozapine is uniquely effective after ≥ 2 adequate failed antipsychotic trials and reduces suicidality in schizophrenia.", grade: "established", sources: ["S11", "S12", "S4"] },
    { text: "Family intervention reduces relapse; offered to all families with contact (NICE CG178; APA 2020).", grade: "established", sources: ["S5", "S4", "S18"] },
    { text: "People with schizophrenia die 10–20 years earlier, predominantly from cardiometabolic disease — metabolic monitoring is standard care.", grade: "established", sources: ["S17", "S4"] },
    { text: "High-potency, frequent adolescent cannabis use roughly doubles early-onset psychosis risk.", grade: "supported", sources: ["S16"], note: "Effect concentrated in vulnerable individuals; population-attributable fraction modest but clinically decisive." },
    { text: "MHCA 2017: rights-based care, supported admission standards, decriminalised suicide attempt.", grade: "established", sources: ["S13"] },
    { text: "Acute and transient psychotic disorders with full recovery are relatively over-represented in Indian settings — resist over-labelling schizophrenia.", grade: "supported", sources: ["S9", "S14"], note: "Cross-cultural nosology literature + NMHS field patterns." },
  ],
};
