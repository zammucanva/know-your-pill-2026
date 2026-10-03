import type { PsychiatryCourse } from "./types";

/**
 * DEMENTIA IN PARKINSON'S DISEASE — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/parkinsons-dementia.md — untouched foundation),
 * re-researched against current guidance (the Emre rivastigmine PDD
 * trial, the Aarsland incidence meta-analyses, the Weintraub
 * impulse-control-disorder literature, movement-disorder psychosis
 * guidance) with per-claim provenance.
 *
 * Drug routes: sertraline and escitalopram (the minimal-anticholinergic
 * SSRI tier for PDD depression) have KYP lessons and are linked; the
 * rivastigmine/cognition tier, the quetiapine/clozapine psychosis
 * ladder, levodopa and the anti-parkinson stack have no KYP lessons
 * and are recorded in contentGaps, never invented.
 */
export const parkinsonsDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "parkinsons-dementia",
  title: "Dementia in Parkinson's Disease",
  shortName: "PDD",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Dementia in Parkinson's Disease"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "33 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "A thinking decline on top of the movement disorder, where antipsychotics risk catastrophe",
  summary:
    "Dementia developing more than a year after Parkinson's motor symptoms is labelled PDD, distinct from dementia with Lewy bodies. Cholinesterase inhibitors help cognition and hallucinations, while drug-list review comes before new prescriptions.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the one-year rule and its diagnostic role (the PDD vs DLB hinge).",
    "Give the cumulative dementia risk figures for Parkinson's disease.",
    "Draw the same-protein family tree: DLB, PDD, and their distinction.",
    "Describe the PDD cognitive profile (executive/visuospatial first) versus Alzheimer's.",
    "Recognise drug-induced psychosis and impulse-control disorders from Parkinson's medicines.",
    "Manage psychosis in PDD: the levodopa-sparing ladder, rivastigmine, and the quetiapine/clozapine decision.",
    "Counsel Indian families on falls, swallowing, hallucination myths and driving.",
  ],
  quickFacts: [
    { label: "The twin rule", value: "Motor-first by >1 year = PDD", detail: "Dementia before/within one year of parkinsonism = DLB; the convention is really about which door the same protein entered through" },
    { label: "The cumulative risk", value: "25–40% point prevalence, majority long-horizon", detail: "The longer patients live with Parkinson's, the higher the proportion climbs: median interval from motor onset to dementia ≈ 10 years" },
    { label: "The profile", value: "Subcortical: planning, speed, visual", detail: "Executive failure and visuospatial blur with memory storage relatively held (recall improves with cueing): the pattern memory-weighted screens under-sell" },
    { label: "The chemistry", value: "Acetylcholine emptier than in Alzheimer's", detail: "Nucleus basalis cholinergic loss even deeper: attention flickers, visuospatial blurs, hallucinations surface; rivastigmine pushes back on all three at once" },
    { label: "The see-saw", value: "Dopamine vs acetylcholine", detail: "Old antipsychotics block dopamine (movement collapses); anti-Parkinson drugs raise it (psychosis blooms): great PDD care walks the tightrope" },
    { label: "The manufactured symptoms", value: "Agonists, amantadine, anticholinergics", detail: "The Parkinson's pharmacopeia itself manufactures hallucinations, impulse-control disorders and cognitive fog, always audit the list before blaming the disease" },
    { label: "The Indian stack", value: "Three doctors, one pillbox", detail: "The neurologist, the physician and the local practitioner each adding tablets: the single commonest reversible 'dementia-worsener' in Indian follow-up" },
    { label: "The two enders", value: "Falls and dysphagia", detail: "The two events that most often end independent living in PDD. Each fall risks the hip fracture that ends walking forever" },
  ],
  knowledgeGraph: [
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The twin across the one-year rule: same protein, other door; the safety rules shared verbatim" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The amnestic-first contrast and the mixed-pathology reality of old brains" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The sudden-worsening impostor on any dementing brain, and the anticholinergic overlap" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The other profile memory screens under-sell: the frontal-executive cousin" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "RBD as the shared early marker across the synucleinopathies" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The depression-apathy-comorbidity tier; apathy is flat, depression is painful" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The emptied fuel tank: the one lever that pushes back on attention, visuospatial and hallucinations together" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The movement chemistry whose augmentation blooms psychosis, and whose blockade is catastrophe" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The manager offices where planning and set-shifting fail: the subcortical-frontal signature" },
    { label: "Substantia nigra", type: "brain-region", href: "#brain", note: "Where the process started, and the wiring the antipsychotics endanger" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The minimal-anticholinergic SSRI tier for PDD depression: tricyclics forbidden" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same carefully-chosen tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry PDD. The protein climbs the brainstem: the same alpha-synuclein process that started in the movement-control stations does not stay there; over years it climbs into the memory gate, the perception centres and the frontal manager offices, the cortex. When the cortical load crosses the individual's reserve threshold, thinking begins to fail; the one-year rule is really a rule about WHICH DOOR the disease entered through: the motor door first (PDD) or the cortical door first (DLB). The emptied fuel tank: acetylcholine, the chemical of attention and learning, is made by a small basal-forebrain nucleus (the nucleus basalis) whose fibres blanket the cortex, and in PDD this system fails even more completely than in Alzheimer's. The practical translation: attention flickers, visuospatial processing blurs, and hallucinations surface, and rivastigmine, which preserves remaining acetylcholine, is the one drug that pushes back on all three at once. The drug tightrope: the Parkinson's brain is chemically balanced like a see-saw, dopamine on one side (movement) and acetylcholine on the other, and every psychiatric drug pushes one side. Old antipsychotics block dopamine: movement collapses. Anti-Parkinson drugs raise dopamine: psychosis blooms. Great PDD care is the art of walking this see-saw: reduce the dopaminergic load first, restore acetylcholine second, and only then, if needed, touch an atypical antipsychotic with extreme caution.",
    steps: [
      "Alpha-synuclein climbs from the brainstem motor stations into limbic and cortical areas: the cortical load crossing the reserve threshold is when thinking fails.",
      "The one-year rule decoded: which door the disease entered through; motor first (PDD) or cortical first (DLB); the same protein, two presentations.",
      "The nucleus basalis cholinergic system fails even more completely than in Alzheimer's: the emptied fuel tank of attention, visuospatial processing and hallucination-gating.",
      "Noradrenergic and serotonergic depletion adds the apathy, depression and sleep problems of the neuropsychiatric tier.",
      "The see-saw: dopamine (movement) against acetylcholine; every psychiatric drug pushes one side; the tightrope is the management.",
      "Drug-list surgery first (the manufactured symptoms recede when the offending drug goes), acetylcholine restored second, the atypical-antipsychotic tier touched only with extreme caution.",
      "Falls and dysphagia end independence through the body's failure (postural instability + visuospatial misjudging), not the mind's alone.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the manager offices)", role: "Planning, set-shifting and dual-tasking fail here. The subcortical-frontal signature; walking-while-talking deterioration is itself a falls risk.", grade: "established" },
    { id: "substantia-nigra", name: "Substantia nigra (the starting station)", role: "Where the alpha-synuclein process began, and the wiring that dopamine-blockers catastrophically worsen (rigidity, swallowing failure).", grade: "established" },
    { id: "nucleus-basalis", name: "Nucleus basalis of Meynert", role: "The cholinergic blanket to cortex: failing even more completely than in Alzheimer's; the therapeutic target.", grade: "established" },
    { id: "parietal-occipital", name: "Parieto-occipital visuospatial networks", role: "The step-misjudging, doorway-threading, parking difficulty: visuospatial failure out of proportion to memory.", grade: "established" },
    { id: "brainstem-limbic", name: "Brainstem-to-limbic spread route", role: "The climbing path, and RBD's origin years before either door declares.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The emptied fuel tank: attention flickers, visuospatial blurs, hallucinations surface; the one lever (rivastigmine) that pushes back on all three at once.", grade: "established", drugConnection: "The anticholinergic Parkinson's drugs (trihexyphenidyl) and bladder anticholinergics drain the same tank: the first drugs to stop." },
    { name: "Dopamine", symbol: "DA", role: "The movement side of the see-saw: its augmentation (agonists, amantadine) blooms psychosis and impulse disorders; its blockade is the catastrophe.", grade: "established", drugConnection: "Levodopa the least psychotogenic backbone; the D2-blockers (haloperidol, risperidone) on the forbidden list." },
    { name: "Noradrenaline", symbol: "NE", role: "Depleted alongside: contributing apathy, fatigue and the attention's fragility.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "Depleted in the neuropsychiatric tier: depression, anxiety, sleep disruption; the SSRI target with anticholinergic load avoided.", grade: "supported" },
  ],
  pathways: [
    {
      id: "brainstem-climb-pathway",
      name: "The protein climbs the brainstem",
      steps: [
        { label: "The motor stations first", detail: "Tremor, stiffness, slowness: the classic Parkinson's presentation" },
        { label: "The limbic spread", detail: "Hallucinations, RBD, depression: the neuropsychiatric middle chapters" },
        { label: "The cortical threshold", detail: "The cortical load crosses the individual's reserve: planning, speed and visuospatial function fail" },
        { label: "The door logic", detail: "Motor-first by more than a year = PDD; cortical-first = DLB: the one-year rule as a statement about entry doors" },
      ],
      clinicalManifestation: "The nine-year Parkinson's patient whose planning failed slowly after the gait did: the median 10-year interval personified.",
      grade: "established",
    },
    {
      id: "see-saw-pathway",
      name: "The see-saw (every drug pushes one side)",
      steps: [
        { label: "The balance", detail: "Dopamine (movement) on one side, acetylcholine (attention, perception) on the other" },
        { label: "Push dopamine up", detail: "Agonists and amantadine: hallucinations bloom, impulse-control disorders surface, sleep attacks arrive" },
        { label: "Push dopamine down", detail: "Old antipsychotics: rigidity and swallowing failure worsen catastrophically; the malignant-type reaction" },
        { label: "The walking art", detail: "Reduce the dopaminergic load first, restore acetylcholine second, touch the atypical tier only with extreme caution" },
      ],
      clinicalManifestation: "The evening visions that followed the new tablet, and the sanity bought by the neurologist's dose reduction.",
      grade: "established",
    },
    {
      id: "ics-pathway",
      name: "The manufactured behaviour (agonist-driven impulse disorders)",
      steps: [
        { label: "The agonist binds", detail: "Pramipexole, ropinirole: the D2/D3 stimulation beyond movement" },
        { label: "The reward circuits tilt", detail: "Pathological gambling, compulsive shopping, binge eating, hypersexuality: the families hide these out of shame" },
        { label: "The visions join", detail: "Evening visual hallucinations as the visible tip of the same chemical push" },
        { label: "The dose reduction", detail: "Psychosis and impulse disorders recede with the agonist pruned: accepting a little more motor stiffness as the price of a sane evening" },
      ],
      clinicalManifestation: "The ₹9-lakh online betting year that the family almost never mentioned, and the UPI locks that were as much treatment as any tablet.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "motor-years", time: "Years 0–8 of Parkinson's", title: "The movement decade", description: "Tremor, stiffness and slowness managed with the dopaminergic stack; RBD and subtle cognitive slowness as the quiet markers of what is climbing.", phase: "onset" },
    { id: "prodrome-marks", time: "Throughout (often early)", title: "The warning markers", description: "Postural-instability-predominant motor picture, early hallucinations, RBD, excessive daytime sleepiness, baseline MCI-type deficits: the risk tier to document.", phase: "onset" },
    { id: "cognitive-decline", time: "Median ≈ 10 years from motor onset", title: "The subcortical slide", description: "Slowing of thought, planning failure, visuospatial blur with memory storage holding longer; the annual cognitive check (clock-drawing, two minutes) that catches it early.", phase: "peak" },
    { id: "neuropsychiatric-era", time: "The following years", title: "Visions, apathy, and the drug tightrope", description: "Hallucinations (drug-augmented more often than acknowledged), impulse-control disorders behind shame, depression and apathy: the drug-list-surgery era.", phase: "duration" },
    { id: "late-stage", time: "Final years", title: "The two enders", description: "Falls (each one risking the hip fracture that ends walking forever) and dysphagia (aspiration) end independent living: the body's failure carrying the mind with it.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Point prevalence of dementia in Parkinson's: roughly 25–40%; cumulative incidence rises with follow-up duration and age, in long-horizon cohorts the majority of long-surviving patients are eventually affected. Strongest risks: older age (and older age at Parkinson's onset), motor severity with postural-instability predominance, early hallucinations, REM sleep behaviour disorder, and baseline cognitive slowness. Median interval from motor onset to dementia ≈ 10 years, with wide spread.",
    indianPrevalence: "Indian Parkinson's clinics report comparable dementia frequency to international series: the gap is in RECOGNITION: cognitive screening is rarely part of routine Parkinson's follow-up in busy government OPDs. Dopamine agonist and amantadine use, and continued anticholinergic (trihexyphenidyl) prescriptions in the elderly, are the commonest Indian sources of 'sudden psychiatric' referrals from Parkinson's clinics. Caregivers are typically spouses in their sixties managing both rigidity and evening hallucinations at home, with no day-care support.",
    lifetimeRisk: "A quarter to a third develop dementia at any point, and the majority of long-surviving patients in long-horizon cohorts; age at onset and motor severity the strongest predictors.",
    genderRatio: "No marked sex preponderance described for the dementia conversion; the Parkinson's population itself ages the risk tier upward.",
    ageOfOnset: "Older age at Parkinson's onset is the strongest single risk: the late-onset motor picture carrying the highest dementia probability.",
    indianNotes: "Pillbox polypharmacy from multiple prescribing doctors (a neurologist, a physician and a local practitioner each adding to the stack) is the single commonest reversible 'dementia-worsener' in Indian Parkinson's follow-up.",
  },
  etiology: [
    { category: "biological", factor: "The spread", details: "Lewy body pathology spreading from brainstem into limbic and cortical areas; co-existing Alzheimer's pathology common in old brains: 'mixed' cases behave more amnestic; deep nucleus-basalis cholinergic loss; noradrenergic and serotonergic depletion adding apathy, depression and sleep problems." },
    { category: "biological", factor: "The risk markers", details: "Postural-instability-gait-predominant motor picture, early autonomic failure, early hallucinations, RBD, excessive daytime sleepiness, baseline MCI-type deficits: the tier to document at every follow-up." },
    { category: "environmental", factor: "Drugs as causes of SYMPTOMS (not the dementia)", details: "Anticholinergics (trihexyphenidyl, benzhexol), dopamine agonists, amantadine, tolterodine-type bladder drugs, sedatives: each can manufacture a psychiatric picture on top of a vulnerable brain; always audit the list before blaming the disease." },
    { category: "social", factor: "The Indian medicine-stack problem", details: "Patients often see a neurologist, a general physician and a local practitioner, each adding tablets: nobody owns the whole list; one clinic habit fixes it: ask the family to bring EVERY tablet and tonic in one bag, and rebuild the chart from the physical evidence." },
    { category: "psychological", factor: "The apathy-depression-comorbidity tier", details: "Apathy commonly misread as laziness or depression (apathy is flat; depression is painful); depression and anxiety genuine comorbidities of the serotonergic depletion: each treated differently, each worsening cognition when unmanaged." },
  ],
  symptomClusters: [
    {
      category: "1. Cognitive, subcortical-flavoured",
      symptoms: ["Slowing of thought (answers delayed, gear-changes laborious); word-finding difficulty on demand", "Executive failure: cannot sequence a medication schedule or handle money change; poor set-shifting and dual-tasking: walking while talking deteriorates, itself a falls risk", "Visuospatial trouble: misjudging steps, difficulty parking or threading the needle of a doorway", "Memory: retrieval slow, but storage holds relatively better than in Alzheimer's; patients often recall with cueing", "Fluctuating attention and daytime sleepiness: common and family-visible"],
    },
    {
      category: "2. Neuropsychiatric",
      symptoms: ["Visual hallucinations: classically well-formed people, animals or 'someone sitting quietly in the corner'; initially benign with insight, later threatening as insight fades: frequently EMERGING or amplifying after dopamine-agonist or amantadine changes", "Delusions of infidelity, theft or persecution: less common than in DLB but corrosive when present", "Depression, anxiety and apathy: apathy flat where depression is painful", "Impulse-control disorders from agonists: pathological gambling, compulsive shopping, binge eating, hypersexuality; families may hide these out of shame; always ask privately and specifically", "Sleep attacks and vivid dreams tracking agonist dose"],
    },
    {
      category: "3. Somatic-mental overlaps (the body's burden on the mind)",
      symptoms: ["Falls (postural instability plus visuospatial failure): the emergency of this disease", "Drooling and swallowing difficulty: the aspiration tier", "Urinary urgency and constipation: impaction and nocturia as top BPSD triggers", "Each of these amplifies BPSD when unmanaged: the body's failure carrying the mind with it"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM/ICD logic (paraphrased)",
      code: "The PDD convention",
      criteria: [
        "A major neurocognitive disorder occurring in the context of ESTABLISHED Parkinson's disease.",
        "By the convention: parkinsonism present MORE than one year before the cognitive decline (the twin of the DLB rule).",
        "The profile typically shows bradyphrenia (slowed thinking), executive and visuospatial deficits, with relatively preserved naming and recall-to-cue.",
        "There is no biomarker: a clinical-plus-course diagnosis: the timeline (motor onset vs cognitive onset) is the backbone.",
      ],
      duration: "The median interval from motor onset to dementia ≈ 10 years: the timeline's typical shape.",
      indianNote: "Dig into old prescriptions to date the levodopa start: the Indian chart rarely documents the motor onset date, but the first prescription does.",
    },
    {
      system: "The practical work-up",
      code: "Timeline, weighted testing, medicine audit",
      criteria: [
        "Collateral history of timeline: motor onset vs cognitive onset; the diagnosis's backbone.",
        "Cognitive testing with executive/visuospatial weighting: clock-drawing, trail-type tasks, fluency under time, dual-task observation; memory-weighted screens under-sell PDD (as they under-sell FTD).",
        "Medicine audit line by line: anticholinergics, bladder drugs, sedatives, agonists, amantadine, which of these is treatable TODAY?",
        "Rule-out bloods as in any dementia (thyroid, B12; the Alzheimer's course's one-time list, one fact, one home).",
        "MRI where affordable: mainly to exclude vascular burden, hydrocephalus or a second process.",
        "The five hidden cognitive-loaders checked: hearing, vision, pain, sleep, constipation.",
      ],
      duration: "A clinic-day diagnosis; the annual two-minute clock-drawing at every Parkinson's follow-up is the screening habit that catches it earliest.",
      indianNote: "The bag habit: ask the family to bring every tablet and tonic in one bag, and rebuild the chart from the physical evidence; the polypharmacy audit that Indian PDD care most needs.",
    },
  ],
  severityScales: [
    {
      name: "The tightrope ladder",
      fullName: "Psychosis-management staging in PDD",
      measures: "How far the see-saw has been pushed, and what the next prescription should be.",
      ranges: [
        { min: 0, max: 0, severity: "Insight-preserving visions", action: "Reassure, do not medicate; even lighting at dusk; 'the visions are chemistry, not ghosts or madness': plus the medicine audit" },
        { min: 1, max: 1, severity: "Drug-augmented psychosis", action: "Drug-list surgery first (agonist pruned, amantadine stopped, anticholinergics tapered): the most reversible intervention; rivastigmine started as the chemistry lever" },
        { min: 2, max: 2, severity: "Dangerous or refractory psychosis", action: "The cautious tier: quetiapine 12.5–25 mg titrated carefully; clozapine the best-evidence tertiary option (blood monitoring, paradoxical tremor benefit); NEVER the D2-blockers" },
      ],
      indianNote: "The Indian sequence in one line: 'In Parkinson's psychosis, first take away what the prescriptions added, then give what the brain lacks.'",
    },
    {
      name: "The independence ladder",
      fullName: "Falls-and-swallow staging",
      measures: "The two enders: what still stands between the patient and dependency.",
      ranges: [
        { min: 0, max: 0, severity: "Walking with supervision", action: "Home falls-audit (rails, night lighting, footwear), physiotherapy balance review, lying-standing BP: each fall risks the hip fracture that ends walking forever" },
        { min: 1, max: 1, severity: "Recurrent falls / early dysphagia", action: "The swallow review (posture, texture, hand-feeding); the gait aids accepted; the house re-engineered around the body that remains" },
        { min: 2, max: 2, severity: "Established dependency", action: "Comfort-focused planning, the caregiver's roster and respite, the aspiration-prevention craft: the Alzheimer's course's late-stage lessons applied" },
      ],
      indianNote: "The spouse in her sixties managing both rigidity and evening hallucinations at home with no day-care support: her endurance IS the service; prescribe her respite in words.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Dementia with Lewy bodies", distinguishingFeatures: "The twin: motor-first by more than a year = PDD; dementia-first/within-one-year = DLB: same protein, two doors, shared safety rules.", keyDifferentiator: "The timeline of dementia against parkinsonism: the one-year rule quoted in every answer involving either." },
    { condition: "Alzheimer's disease", distinguishingFeatures: "Amnestic-first, smooth decline, no parkinsonism beyond drug effects: vs PDD's executive-visuospatial profile with cued recall preserved.", keyDifferentiator: "What fails first: planning and speed in PDD; storage in Alzheimer's, and the cueing test separates them at the bedside." },
    { condition: "Vascular dementia", distinguishingFeatures: "Stepwise course, infarct burden on imaging, executive-first profile, and no response to cholinesterase inhibitors.", keyDifferentiator: "The stair-steps and the scan's infarcts; the vascular risk tier treated either way (mixed disease the rule in old brains)." },
    { condition: "Drug-induced psychosis (not dementia at all)", distinguishingFeatures: "The timeline follows a prescription change; improves with drug-list surgery: the manufactured symptom that mimics the disease's own.", keyDifferentiator: "'When did the visions begin relative to the last medicine change?': the question that routes the whole consultation." },
    { condition: "Depression / apathy masquerading as decline", distinguishingFeatures: "Apathy flat where depression is painful; both treatable; PDD's apathy commonly misread as laziness or depression.", keyDifferentiator: "The mood screen plus the effort-pattern on testing; the SSRI-with-minimal-anticholinergic-load trial (tricyclics forbidden)." },
    { condition: "Delirium on the dementing brain", distinguishingFeatures: "Sudden worsening with infection, impaction or drug change: hides inside the disease's own noise.", keyDifferentiator: "The Delirium-course cascade runs first for any abrupt change: urine, salts, bowels, chart; the two classic reversible Indian triggers." },
  ],
  management: [
    { category: "lifestyle", name: "Drug-list surgery: always the first prescription", description: "Stop anticholinergics (trihexyphenidyl first among equals in elderly Indians); swap bladder anticholinergics for timed toileting or alternatives; review sedatives; prune the dopamine agonist with the neurologist: psychosis and impulse-control disorders often recede with dose reduction, accepting a little more motor stiffness as the price of a sane evening. Keep levodopa as the backbone (least psychotogenic of the anti-Parkinson drugs); timing and smoothness of dose often matter more than quantity.", whenToUse: "Every visit: the bag habit: every tablet and tonic on the table, the chart rebuilt from physical evidence.", indianContext: "Pillbox polypharmacy from three prescribing doctors is the single commonest reversible 'dementia-worsener'. The bag habit fixes it in one clinic act." },
    { category: "pharmacotherapy", name: "Cognition and hallucinations: the acetylcholine lever", description: "Rivastigmine (oral or patch) has trial evidence in PDD for cognition, activities of daily living and psychotic features; donepezil the practical alternative; memantine a modest add-on that helps a subset. Expectation-setting: function steadies, months are bought; the underlying disease still progresses.", whenToUse: "From the PDD diagnosis: the same lever the DLB course teaches, with its best evidence in these two dementias.", indianContext: "Generic rivastigmine capsules affordable (approx ₹200–450/month, 2026); the patch is not. Where even this is hard, the free levers (drug-list surgery, hearing/vision, sleep and constipation management) do most of the day-to-day work." },
    { category: "pharmacotherapy", name: "Psychosis beyond the above: the cautious ladder", description: "If hallucinations are non-frightening and insight persists: reassure, do not medicate; even lighting at dusk; 'the visions are chemistry, not ghosts or madness'. When danger or distress persists after drug-list surgery and rivastigmine: quetiapine 12.5–25 mg titrated cautiously (weak evidence, best availability/risk balance in India); clozapine the best efficacy evidence (including in Parkinson's psychosis specifically, paradoxically IMPROVES tremor) but needs weekly-then-periodic blood counts, tertiary-centre use; pimavanserin the US-approved specific, not marketed in India (know the name for exams). NEVER haloperidol, risperidone or olanzapine as planned therapy: rigidity, swallowing failure, malignant-type reactions; the wallet card rule from the DLB course applies identically.", whenToUse: "Only after the first two steps (surgery + chemistry) have run: the tightrope walked in order.", indianContext: "The consultation's most valuable act is often undoing a prescription: psychiatry is usually consulted AFTER someone has already prescribed risperidone." },
    { category: "lifestyle", name: "The body matters to the mind", description: "Physiotherapy for gait and balance; falls-proof the home; swallow surveillance (video-swallow where available; posture, texture modification, hand-feeding techniques: the Alzheimer's course's late-stage craft applied). Constipation and urinary urgency managed systematically (impaction and nocturia as top BPSD triggers). Depression: SSRIs with minimal anticholinergic load (sertraline, escitalopram); avoid tricyclics entirely in PDD.", whenToUse: "From diagnosis, reviewed at every visit: the somatic tier carries the cognitive load more often than acknowledged.", indianContext: "The home falls-audit and the swallow craft are the Indian family's tier: rails, night lighting, the floor mattress, the texture-modified meals; inexpensive and decisive." },
  ],
  safety: {
    redFlags: [
      "A Parkinson's patient prescribed risperidone or haloperidol anywhere (casualty, nursing home, another clinic): the wallet card and the undoing prescription, same week",
      "New hallucinations after ANY medicine change: the timeline question before the symptom story: the visions may be ours",
      "The first fall: the emergency of this disease: home falls-audit, lying-standing BP, physiotherapy review, each fall risking the hip fracture that ends walking forever",
      "An impulse-control disorder hiding behind 'family dispute': ask privately and specifically: betting, shopping, eating, sex, any of these stronger than before?",
      "Swallowing changes, drooling, weight loss: the aspiration tier: video-swallow and texture modification now",
      "Sudden cognitive worsening: delirium rules (urine, salts, impaction, chart) before blaming the dementia",
    ],
    urgentGuidance:
      "The order of operations: (1) the prescription timeline before the symptom timeline; what changed before the visions began; (2) drug-list surgery (anticholinergics stopped, agonist pruned with the neurologist, amantadine stopped); (3) rivastigmine started as the chemistry lever (cognition, function and psychotic features together); (4) the cautious antipsychotic tier only if danger persists: quetiapine tiny-dose, clozapine tertiary; NEVER the D2-blockers; (5) the falls-and-swallow tier audited at every visit (the two enders of independent living); (6) the family education package: the visions are chemistry, the apathy is not laziness, the betting may be a tablet, and the wallet card travels everywhere.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The minimal-anticholinergic SSRI for PDD depression",
      rationale: "Depression in PDD is treated with SSRIs chosen for the LEAST anticholinergic load. The tricyclics are forbidden entirely in this disease (they drain the emptied cholinergic tank and worsen both cognition and psychosis). The KYP lesson carries the full profile behind the choice.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted comorbidity care: the SSRI treats the depression; the cognition and psychosis follow the rivastigmine-plus-surgery tier taught in this course.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the same carefully-chosen tier",
      rationale: "The second member of the minimal-anticholinergic SSRI pair for PDD depression: chosen on tolerability and comorbidity, with the same see-saw logic applied: nothing that pushes the acetylcholine side down.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same tier and same framing as sertraline: comorbidity care alongside the disease-specific management.",
    },
  ],
  contentGaps: [
    "Rivastigmine and donepezil (the cholinesterase-inhibitor tier with its PDD-specific trial evidence) have no KYP drug lessons; the dosing logic is taught here, the routes never invented.",
    "Levodopa and the anti-Parkinson stack (pramipexole, ropinirole, amantadine, trihexyphenidyl) have no KYP lessons. The drug-list surgery they demand is taught in this course.",
    "Quetiapine, clozapine (the Parkinson's-specific psychosis tier with its paradoxical tremor benefit) and pimavanserin (name-recognition only, not marketed in India) have no KYP lessons.",
    "Memantine (the modest add-on) has no KYP lesson.",
    "The refusal teaching: haloperidol, risperidone and olanzapine are forbidden as planned therapy in PDD; documented as contraindicated territory.",
  ],
  patientGuide: {
    whatIsIt:
      "Many people living with Parkinson's disease slowly develop a thinking-and-perception decline on top of the movement disorder: this is Parkinson's disease dementia. Roughly a quarter to a third of Parkinson's patients develop it, and the longer someone lives with the illness, the higher the chance. Its face is different from Alzheimer's: planning and speed and visual judgement fail first, while memory storage holds up longer. It is not 'the Parkinson's getting worse' in a vague way. It is the same underlying protein process reaching the thinking brain, and there is real help available for it.",
    whatCausesIt:
      "The same protein process (alpha-synuclein, the Lewy body) that causes the movement symptoms slowly climbs from the movement-control centres into the thinking and perception areas of the brain. Adding to the burden: the brain's attention-and-learning chemical (acetylcholine) runs even lower here than in Alzheimer's. And very importantly, some Parkinson's MEDICINES can themselves cause or worsen visions, confusion, and even gambling or shopping compulsions; a careful medicine review is part of the diagnosis, not an afterthought.",
    symptoms:
      "Thinking: slowed answers, difficulty planning (medication schedules, money change), misjudging steps and doorways, walking-while-talking becoming hard, daytime sleepiness. Perception: well-formed visions (people, animals, someone sitting quietly in the corner) often calm at first, sometimes worsening after medicine changes. Behaviour: flat loss of drive (apathy, not laziness), depression, and occasionally hidden compulsions (gambling, shopping, eating, sex) caused by certain medicines. Body: falls, swallowing difficulty, constipation, urinary urgency; each of these amplifying the mental picture when unmanaged.",
    treatment:
      "The plan has a strict order. First: medicine-list surgery, stopping or reducing the tablets that may be manufacturing the visions or the compulsions (this alone often resolves them; a little more stiffness is a fair price for a calm evening). Second: the memory-medicine family (rivastigmine); it specifically helps thinking, attention and even the visions in this disease by restoring the depleted brain chemical. Third: only if danger persists, a carefully chosen sedative in tiny doses; the older antipsychotics (haloperidol, risperidone) are FORBIDDEN in this disease because they can cause severe movement collapse. Alongside: falls-proofing, swallowing care, constipation and bladder management, and treatment of depression with the right SSRI.",
    selfHelp: [
      "Keep the bag habit: bring every tablet, syrup and tonic to each appointment; three doctors' prescriptions live in one pillbox, and the list must be owned by one team.",
      "Ask the timeline question whenever visions change: 'did anything in the medicines change before this started?': the answer often contains the treatment.",
      "Even lighting at dusk and through the evening: shadows feed the visions; a night light prevents both falls and fears.",
      "The falls-audit at home: rails, night lighting, footwear review, the floor mattress where needed; each fall risks the fracture that ends walking.",
      "The swallowing craft when it arrives: smaller boluses, posture, texture-modified meals, unhurried meals; aspiration is the enemy to out-engineer.",
      "Keep the bowels running and the bladder timed: impaction and nocturia are the hidden agitation engines nobody checks.",
      "Ask the private questions honestly at the clinic: betting, shopping, eating, sex; 'any of these stronger than before?': the answer may be a tablet, and hiding it keeps the cause in place.",
      "The wallet card: 'Parkinson's disease dementia; severe sensitivity to antipsychotic drugs. For agitation: contact treating doctor. Avoid haloperidol/risperidone.'",
    ],
    whenToSeekHelp: [
      "New visions or beliefs, especially after any medicine change: the review that week, not the antipsychotic",
      "The first fall or a near-fall pattern: same-week falls-audit and blood-pressure-on-standing check",
      "A new gambling, shopping or sexual compulsion: the private conversation with the doctor (it can be the medicine)",
      "Swallowing difficulty, choking spells, weight loss: the swallow review now",
      "Sudden worsening of confusion: the delirium check (urine, salts, bowels) before blaming the dementia",
      "The spouse-caregiver's own exhaustion: her respite is a prescription, not an indulgence",
    ],
    indianResources: [
      "The neurology-psychiatry co-management pair: the movement disorder and the mind share one disease; ask for both doors in one plan",
      "The bag habit at every clinic: the physical-evidence chart rebuild that Indian polypharmacy needs",
      "Physiotherapy and home-audit guidance through the district hospital: the falls tier is free and decisive",
      "Tele-MANAS 14416 (24×7, free), for the caregiver's distress and the family's routing questions",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific PDD pathway exists; practice follows the international architecture (the DSM/ICD convention, the movement-disorder psychosis guidance, the Emre rivastigmine evidence) with Indian craft: the bag habit, the spiritual-frame consultation skill, and the co-management discipline that one disease demands.",
    systemContext: "Neurology OPDs own the Parkinson's; psychiatry is consulted when 'visions' or 'behaviour' arrive: usually after someone has already prescribed risperidone; the consultation's most valuable act is often undoing a prescription. Indian Parkinson's clinics report comparable dementia frequency to international series: the gap is in recognition: cognitive screening is rarely part of routine follow-up in busy government OPDs (the annual clock-drawing, two minutes, is the fix).",
    programmeContext: "Dopamine agonist and amantadine use, and continued anticholinergic (trihexyphenidyl) prescriptions in the elderly, are the commonest Indian sources of 'sudden psychiatric' referrals from Parkinson's clinics. Caregivers are typically spouses in their sixties managing both rigidity and evening hallucinations at home, with no day-care support: her endurance IS the service; prescribe her respite in words.",
    costConsiderations: "Levodopa and generic rivastigmine/donepezil are cheap; quetiapine is cheap; clozapine is cheap in itself but its monitoring costs the follow-up discipline; the true costs are the caregiver's, and the falls and fractures. Generic rivastigmine approx ₹200–450/month (2026); the patch is not. In government settings where even this is hard, the free levers (drug-list surgery, hearing/vision, sleep and constipation management) do most of the day-to-day work.",
    culturalConsiderations: "The medicine-stack problem is the Indian signature: the neurologist, the physician and the local practitioner each adding tablets, nobody owning the whole list, one clinic habit fixes it (bring every tablet and tonic in one bag). Faith explanations of hallucinations (deceased relatives visiting) are common: respond by joining the family's frame respectfully ('what you saw matters; it is also a signal of brain chemistry, and we can make it calmer') rather than fighting it. The impulse-control disorders hide behind family shame: the private specific questions are the only door in.",
    patientCounselling: [
      "The one-line treatment philosophy to hand every family: 'In Parkinson's psychosis, first take away what the prescriptions added, then give what the brain lacks.'",
      "The visions script: 'The visions are chemistry, not ghosts or madness, and sometimes a tablet is inviting the visitor. When he is calm about them and knows they are visions, no medicine is needed; a medicine review always is.'",
      "The apathy script: 'He has not become lazy. A flat loss of drive is part of the brain disease. Schedules, routine and one-step requests work better than scolding; and it is not depression unless sadness is present.'",
      "The compulsion script, asked privately and specifically: 'Betting, shopping, eating, sex; any of these stronger than before? These can be CAUSED by a Parkinson's medicine and often improve when it is reduced; hiding it keeps the cause in place.'",
      "The spiritual-frame response: 'What you saw matters; it is also a signal of brain chemistry, and we can make it calmer', joining the family's frame respectfully rather than fighting it.",
      "The falls script: 'Falls are the emergency of this disease; the rails, the night lights, the footwear, the blood-pressure-on-standing check: each fall risks the hip fracture that ends walking forever.'",
      "The wallet-card instruction: identical to the DLB rule; 'severe sensitivity to antipsychotic drugs; for agitation contact the treating doctor; avoid haloperidol/risperidone.'",
    ],
  },
  decisionPath: {
    title: "The Parkinson's patient whose mind is changing",
    nodes: [
      {
        id: "start",
        question: "An established Parkinson's patient develops cognitive decline, visions or behaviour change. First: the prescription timeline before the symptom timeline.",
        branches: [
          { label: "Symptoms followed a medicine change", next: "drug-induced-path" },
          { label: "Gradual decline over months-years, motor disease long-established", next: "pdd-gate" },
          { label: "Sudden change over hours-days", next: "delirium-path" },
          { label: "Dementia preceded or matched the motor signs", next: "dlb-path" },
        ],
      },
      {
        id: "drug-induced-path",
        question: "The manufactured symptom: ask 'when did the visions begin relative to the last medicine change?'",
        recommendation: "Drug-list surgery FIRST: stop amantadine; taper trihexyphenidyl (the first among equals in elderly Indians); prune the dopamine agonist with the neurologist (psychosis and impulse disorders recede, a little more stiffness the accepted price); swap bladder anticholinergics for timed toileting; review sedatives: often no antipsychotic is ever needed.",
      },
      {
        id: "delirium-path",
        question: "Sudden change: the delirium rules run on the dementing brain.",
        recommendation: "The Delirium-course cascade: urine, sodium, infection, impaction, the chart; the two classic Indian reversible triggers plus the Parkinson's-specific offenders (the anticholinergic tier); treat the cause, re-baseline, then reassess what remains.",
      },
      {
        id: "pdd-gate",
        question: "The one-year rule: parkinsonism established >1 year before the decline = PDD.",
        branches: [
          { label: "Timeline confirms, profile subcortical (executive/visuospatial first)", next: "pdd-workup" },
          { label: "Amnestic-first, smooth", next: "mixed-alzheimers-path" },
          { label: "Stepwise with infarcts", next: "vascular-path" },
        ],
      },
      {
        id: "pdd-workup",
        question: "The work-up: timeline, weighted testing, the bag.",
        recommendation: "Collateral timeline (dig into old prescriptions to date the levodopa start); clock-drawing, trails, timed fluency, dual-task observation (memory-weighted screens under-sell PDD); the bag habit: every tablet and tonic on the table, the chart rebuilt; the bloods (thyroid, B12); MRI where affordable (exclude vascular burden, hydrocephalus); the five hidden loaders checked: hearing, vision, pain, sleep, constipation.",
      },
      {
        id: "mixed-alzheimers-path",
        question: "Amnestic-first in an old Parkinson's brain: the mixed reality.",
        recommendation: "Co-existing Alzheimer's pathology is common in old brains: 'mixed' cases behave more amnestic; the rivastigmine lever still applies (it serves both chemistries); the planning conversation covers both trajectories.",
      },
      {
        id: "vascular-path",
        question: "Stepwise with infarct burden: the second illness.",
        recommendation: "Vascular risk treated as brain medicine (BP, diabetes, lipids) alongside the PDD management: 'mixed dementia' the rule in old brains, the same tier running for both.",
      },
      {
        id: "dlb-path",
        question: "Dementia before/within one year of motor signs: the twin.",
        recommendation: "Redirect to the DLB course: the same protein, the other door; the safety rules (wallet card, antipsychotic prohibition) apply identically either way.",
      },
      {
        id: "management-gate",
        question: "PDD confirmed. The package, in strict order:",
        branches: [
          { label: "Visions calm, insight preserved", next: "no-treatment-path" },
          { label: "Cognition declining", next: "chemistry-path" },
          { label: "Psychosis dangerous after surgery + chemistry", next: "antipsychotic-path" },
          { label: "Falls / swallowing / caregiver crisis", next: "body-mind-path" },
        ],
      },
      {
        id: "no-treatment-path",
        question: "The first prescription: reassurance and a medicine review.",
        recommendation: "Reassure, do not medicate; even lighting at dusk; the visions-are-chemistry script; the medicine audit completed regardless (the tablet inviting the visitor removed); the family taught the insight-fades-later reality.",
      },
      {
        id: "chemistry-path",
        question: "The acetylcholine lever.",
        recommendation: "Rivastigmine (oral where the patch is unaffordable) titrated with the expectation-setting script: function steadies, months are bought, the disease continues underneath; donepezil the practical alternative; memantine the modest add-on; the free levers (hearing, vision, sleep, bowels) running alongside.",
      },
      {
        id: "antipsychotic-path",
        question: "Only after surgery and chemistry have run: the cautious tier.",
        recommendation: "Quetiapine 12.5–25 mg cautiously titrated: the pragmatic Indian default (weak evidence, best risk-balance); clozapine the best-evidence option (Parkinson's-specific trials, paradoxical tremor benefit) reserved to tertiary centres with the blood-count discipline; pimavanserin a name for exams; NEVER haloperidol, risperidone or olanzapine: the wallet card rule applies identically.",
      },
      {
        id: "body-mind-path",
        question: "The two enders: falls and swallowing.",
        recommendation: "The home falls-audit (rails, night lighting, footwear, floor mattress) with the lying-standing BP and physiotherapy balance review; the swallow surveillance (posture, texture, hand-feeding) as the aspiration defence; constipation and urinary urgency managed systematically; the spouse-caregiver's respite prescribed in words: her endurance IS the service.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing risperidone (or haloperidol) to a Parkinson's patient with hallucinations in casualty",
      why: "The core safety trap of this disease: D2 blockade catastrophically worsens rigidity and swallowing; the movement catastrophe layered onto the psychiatric referral it was meant to settle.",
      correction: "The wallet card and the undoing prescription: when PDD is on the table, the cautious ladder only (quetiapine tiny-dose or clozapine tertiary), and the environment, the familiar face, and the drug-list surgery first.",
    },
    {
      mistake: "Blaming dementia for what a dopamine agonist manufactured",
      why: "The hallucinations, confusions and compulsions that follow agonist or amantadine changes are chemistry we prescribed, escalating the dementia label (or adding an antipsychotic) treats the wrong cause.",
      correction: "The timeline question at every psychiatric presentation: 'when did the symptoms begin relative to the last medicine change?', then drug-list surgery before any new prescription.",
    },
    {
      mistake: "Forgetting the anticholinergic burden (trihexyphenidyl still common in Indian prescriptions)",
      why: "The anticholinergic Parkinson's drugs drain the already-emptiest cholinergic tank: cognition worsens, visions bloom; decades-old prescriptions continue unexamined through three doctors' charts.",
      correction: "The anticholinergic audit at every visit, with trihexyphenidyl first among equals in the elderly, and the bladder-anticholinergic tier swapped for timed toileting.",
    },
    {
      mistake: "Missing the impulse-control disorder behind 'family dispute'",
      why: "The gambling, shopping and sexual compulsions hide behind shame: families present 'confusion' or 'visions' while the betting debts destroy the household; the cause sits unexamined in the agonist prescription.",
      correction: "The private specific questions at every PDD visit: 'betting, shopping, eating, sex; any of these stronger than before?': plus the UPI/wallet locks and debt counselling that are as much treatment as any prescription.",
    },
    {
      mistake: "Treating apathy with antidepressants by reflex",
      why: "Apathy is flat, depression is painful: the SSRI prescribed for laziness-as-depression adds side effects to a drive-loss it cannot reach.",
      correction: "The distinction taught at the bedside: apathy = schedules, routine, one-step requests; depression (sadness present) = the minimal-anticholinergic SSRI tier, tricyclics forbidden.",
    },
    {
      mistake: "Reading the MMSE score as reassurance while the household collapses",
      why: "Memory-weighted screens under-sell PDD exactly as they under-sell FTD: the patient 'passes' while unable to sequence a medication schedule or thread a doorway.",
      correction: "The weighted exam: clock-drawing, trails, timed fluency, dual-task observation; the two-minute annual check at every Parkinson's follow-up that catches the slide early.",
    },
    {
      mistake: "Letting the pillbox belong to nobody",
      why: "The neurologist, the physician and the local practitioner each add tablets; interactions manufacture symptoms; the anticholinergic tier accumulates; and no single doctor owns the list that is causing the picture.",
      correction: "The bag habit: every tablet and tonic on the table at every visit; the chart rebuilt from physical evidence, one team owning one list.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The one-year rule: the PDD vs DLB hinge; quote it in every answer involving either.",
        "The subcortical cognitive profile: bradyphrenia, executive and visuospatial failure, cued recall preserved; versus Alzheimer's amnestic-first.",
        "The see-saw chemistry explanation: dopamine (movement) against acetylcholine (attention/perception); every psychiatric drug pushes one side.",
        "Why clozapine is uniquely suited among antipsychotics in Parkinson's: evidence + actual tremor benefit + negligible D2 blockade.",
        "Rivastigmine's PDD trial evidence: cognition, ADLs and psychiatric features together.",
      ],
      practical: [
        "Demonstrate the two-minute weighted exam (clock-drawing, trails, timed fluency, dual-task) on a Parkinson's follow-up patient.",
        "Run the bag audit: reconstruct a polypharmacy chart from the physical evidence and identify the manufactured-symptom suspects.",
      ],
      longAnswer: [
        "A 70-year-old with 9 years of Parkinson's disease develops visual hallucinations and declining planning ability: assessment and management (the evergreen PDD essay, the timeline, the surgery, the chemistry, the tightrope).",
        "Neuropsychiatric complications of Parkinson's disease and its treatment.",
      ],
    },
    neetPg: {
      highYield: [
        "ONE-YEAR RULE: dementia more than a year into established parkinsonism = PDD; before/within one year = DLB: the arbitrary-but-operational hinge.",
        "Dementia risk in Parkinson's: 25–40% point prevalence; cumulative incidence rising with follow-up and age (majority of long-survivors affected); median motor-onset-to-dementia interval ≈ 10 years.",
        "The PDD profile: BRADYPHRENIA + executive/visuospatial failure, with memory storage relatively preserved (recall improves with cueing); memory-weighted screens under-sell it.",
        "RIVASTIGMINE has PDD trial evidence (cognition, ADLs, psychotic features): the deep cholinergic deficit (nucleus basalis, worse than Alzheimer's) the therapeutic target.",
        "The forbidden list: haloperidol, risperidone, olanzapine. D2 blockade causes severe rigidity worsening, swallowing failure, malignant-type reactions.",
        "The cautious tier: quetiapine (weak evidence, pragmatic default) and clozapine (best evidence + paradoxical tremor benefit; agranulocytosis monitoring, tertiary use); pimavanserin. US-approved, not marketed in India (name-recognition).",
        "Drug-manufactured neuropsychiatry: dopamine agonists (hallucinations, impulse-control disorders, sleep attacks); amantadine (visions, confusion); anticholinergics/trihexyphenidyl (cognitive worsening, first to stop).",
        "Impulse-control disorders: gambling, shopping, binge eating, hypersexuality; associated with dopamine agonists; ask privately and specifically.",
        "RBD as the shared prodromal marker across DLB, PDD and Parkinson's without dementia.",
        "Falls and dysphagia: the two events that most often end independent living; postural instability plus visuospatial failure; aspiration the terminal tier.",
        "Risk markers for dementia conversion: older age at onset, postural-instability-gait-predominant motor picture, early hallucinations, RBD, daytime sleepiness, baseline MCI.",
        "Apathy (flat) vs depression (painful): the distinction the reflex prescription misses; SSRIs with minimal anticholinergic load for depression, tricyclics forbidden.",
      ],
      pyqConcepts: [
        "Walking-while-talking deterioration as a dual-task falls risk: the examination finding that is also a safety sign.",
        "Levodopa as the least psychotogenic backbone: timing and smoothness over quantity.",
        "The drug-bag reconciliation as Indian polypharmacy management: the short-note favourite.",
        "Neurology-psychiatry co-management as the service model one disease demands.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 74-year-old with 9 years of Parkinson's disease referred for 'psychosis': three weeks of seeing a silent crowd at the far end of the room each evening, with the timeline showing amantadine added two months earlier and trihexyphenidyl continued for years; amantadine stopped and the anticholinergic tapered with the neurologist, no antipsychotic given; the crowd thinning over two weeks and vanishing by the fifth; motor function held with small levodopa retiming; rivastigmine started later for declining planning ability: the manufactured symptom cured by subtraction.",
        "A 61-year-old on pramipexole for five years brought for 'confusion': the private truth elicited from his son was ₹9 lakh of online betting losses in a year, with nightly visions of children as the visible tip; agonist reduction (accepting slightly worse gait), rivastigmine initiation, gambler-debt counselling and UPI/wallet locks together restoring household finances and calm evenings: the treatment that included a banker's tool as much as a prescription.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PDD = dementia more than a year after established parkinsonism (the one-year rule).",
        "Rivastigmine: the evidence-backed drug for cognition and psychosis in PDD.",
        "Haloperidol/risperidone forbidden: the movement catastrophe.",
        "Dopamine agonists cause impulse-control disorders and hallucinations.",
        "The subcortical profile: executive/visuospatial first, memory relatively preserved.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The consultation's most valuable act is often undoing a prescription: psychiatry arrives after the risperidone; the wallet card, the surgery and the chemistry lever in that order repair more than any new drug.",
        "The bag habit is the Indian PDD clinic's signature intervention: every tablet and tonic on the table, the chart rebuilt from physical evidence, one team owning the list that three doctors built.",
        "The private questions are the only door into the impulse-control tier: 'betting, shopping, eating, sex; any of these stronger than before?': asked without the family in the room, without judgement, with the UPI-locks-and-counselling package ready.",
        "The spiritual-frame skill: joining the family's interpretation respectfully ('what you saw matters; it is also a signal of brain chemistry') converts an argument into an alliance: the hallucination education that Indian practice actually permits.",
        "The caregiver arithmetic: the spouse in her sixties managing rigidity and evening hallucinations with no day-care tier; her respite, her back pain and her own depression are the service's real infrastructure; prescribe them.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The visions that followed the new tablet",
      presentation: "Three weeks of a silent crowd at the far end of the room, arriving two months after a medicine nobody suspected.",
      initialPresentation: "A 74-year-old with 9 years of Parkinson's disease was referred to psychiatry for 'psychosis': three weeks of seeing a silent crowd at the far end of the room each evening, calm but persistent, with insight preserved. The referral note requested an antipsychotic. The timeline, taken before the symptom story: amantadine had been added two months earlier by the neurologist for wearing-off, and trihexyphenidyl had continued unchanged for years from an old prescription.",
      history: "Motor disease 9 years, levodopa-based, wearing-off managed by the recent amantadine addition; no prior hallucinations; no dementia diagnosed (planning ability quietly declining by the family's account); no mood syndrome; the trihexyphenidyl an inheritance from three doctors' charts.",
      examination: "Well-formed benign visual hallucinations with preserved insight; bradyphrenia and impaired set-shifting on the weighted exam; motor exam unchanged from baseline; the bag on the table containing nine preparations.",
      diagnosis: "Drug-augmented visual hallucinations on early Parkinson's disease dementia: the manufactured layer (amantadine, anticholinergic) on the subcortical decline underneath.",
      management: "Drug-list surgery as the whole first act: amantadine stopped, trihexyphenidyl tapered with the neurologist, no antipsychotic given; the crowd thinned over two weeks and vanished by the fifth; motor function held with small levodopa retiming; rivastigmine started later for the declining planning ability; the wallet card issued.",
      outcome: "The visions resolved by subtraction alone; the family left with the chemistry-not-ghosts script and the bag habit; the cognitive decline followed expectantly on rivastigmine.",
      teachingPoints: [
        "Ask the prescription timeline before the symptom timeline: the manufactured symptom's cause sits in our own orders.",
        "Drug-list surgery replaced an antipsychotic: the most reversible intervention in PDD care.",
        "The 'visions' were chemistry, and the chemistry was ours: the sentence that reframes the whole consultation.",
      ],
    },
    {
      title: "The gambling the family hid",
      presentation: "A 'confusion' referral whose private truth was ₹9 lakh of online betting losses in a year.",
      initialPresentation: "A 61-year-old on pramipexole for five years was brought by his wife for 'confusion'. The private history elicited from his son (alone, without the family's elders) told the real story: ₹9 lakh of online betting losses across the year, escalating nightly 'visions of children' as the visible tip, and a household near financial and marital collapse, with the family having hidden the gambling out of shame until the debts surfaced.",
      history: "Parkinson's disease 7 years, pramipexole-maintained with good motor response; the gambling beginning insidiously two years into agonist therapy and escalating; nightly visual hallucinations for months; no prior gambling history or impulse problems before the illness; the son's disclosure the first honest account any clinician had received.",
      examination: "Mild executive slowing on weighted testing; well-formed benign visual hallucinations reported without distress; motor exam stable; the agonist the clear temporal suspect for both the compulsions and the visions.",
      diagnosis: "Dopamine-agonist-induced impulse-control disorder (pathological gambling) with drug-augmented visual hallucinations, on early Parkinson's disease dementia.",
      management: "Agonist reduction with the neurologist (accepting slightly worse gait as the price); rivastigmine initiation for the cognitive decline and the visions; gambler-debt counselling with the family; UPI and wallet locks installed on every account: the banker's tools as part of the prescription.",
      outcome: "The compulsions receded with the dose reduction and counselling; the visions quietened on rivastigmine; the household finances stabilised under the locks and the repayment plan; calm evenings returned.",
      teachingPoints: [
        "Impulse-control disorders hide behind shame (ask privately and specifically: 'betting, shopping, eating, sex) any of these stronger than before?'",
        "One drug caused both the behaviour and the visions: the agonist as the single root of a two-symptom presentation.",
        "The treatment included a banker's tool as much as a prescription: the UPI locks and debt counselling were as decisive as the dose reduction.",
      ],
    },
  ],
  clinicalPearls: [
    "In Parkinson's psychosis, first take away what the prescriptions added, then give what the brain lacks: the one-line philosophy.",
    "The one-year rule: motor disease established more than a year before the dementia = PDD; dementia first or within a year = DLB: quote it in every answer involving either.",
    "25–40% point prevalence of dementia in Parkinson's, majority of long-survivors affected; median motor-onset-to-dementia interval ≈ 10 years.",
    "The subcortical profile: bradyphrenia, executive and visuospatial failure, cued recall preserved; memory-weighted screens under-sell it exactly as they under-sell FTD.",
    "The see-saw: dopamine (movement) against acetylcholine (attention/perception); every psychiatric drug pushes one side; great PDD care walks the tightrope.",
    "Rivastigmine: the one drug that pushes back on attention, visuospatial function and hallucinations together; trial evidence in PDD for cognition, ADLs and psychotic features.",
    "The forbidden list: haloperidol, risperidone, olanzapine; severe rigidity worsening, swallowing failure, malignant-type reactions; the wallet card rule applies identically to DLB's.",
    "Clozapine uniquely suited among antipsychotics: best evidence, paradoxical tremor benefit, negligible D2 blockade, but blood-monitoring, tertiary-tier.",
    "Drug-manufactured neuropsychiatry: agonists (hallucinations, impulse disorders, sleep attacks), amantadine (visions, confusion), anticholinergics (cognitive worsening, first to stop).",
    "The impulse-control questions, privately and specifically: betting, shopping, eating, sex; any of these stronger than before?",
    "Apathy is flat; depression is painful: the distinction the reflex prescription misses; SSRIs minimal-anticholinergic, tricyclics forbidden.",
    "Walking-while-talking deterioration is a dual-task falls risk. The cognitive finding that is also a safety sign.",
    "Falls and dysphagia are the two enders of independent living. Each fall risks the hip fracture that ends walking forever; aspiration the terminal tier.",
    "RBD the shared early marker across DLB, PDD and Parkinson's without dementia: the same protein's calling card years before either door.",
    "The Indian tier: three doctors' pillboxes owned by nobody (the bag habit the fix); trihexyphenidyl still common in elderly prescriptions; the spiritual frame joined respectfully, not fought; the spouse-caregiver's endurance as the real service.",
  ],
  highYieldSummary: [
    "Definition: Parkinson's disease dementia = a major neurocognitive disorder arising in established Parkinson's disease, with parkinsonism present MORE than one year before the cognitive decline (the DLB twin across the one-year rule); a clinical-plus-course diagnosis with no biomarker.",
    "Epidemiology: 25–40% point prevalence (majority of long-survivors affected in long-horizon cohorts); median interval motor-onset-to-dementia ≈ 10 years; risks: older age at onset, postural-instability-predominant motor picture, early hallucinations, RBD, daytime sleepiness, baseline MCI.",
    "Mechanism: alpha-synuclein climbing from brainstem motor stations to limbic and cortical areas (the door logic of the one-year rule); nucleus-basalis cholinergic loss deeper than Alzheimer's (the emptied fuel tank); noradrenergic-serotonergic depletion (apathy, depression, sleep); the see-saw chemistry as the management's governing image.",
    "Clinical: subcortical profile (bradyphrenia, planning failure, visuospatial blur, cued recall preserved, fluctuating attention, daytime sleepiness); neuropsychiatric tier (benign-then-threatening well-formed visions, frequently drug-augmented; infidelity/persecution delusions; depression, apathy; agonist-driven impulse-control disorders hidden by shame); somatic-mental overlaps (falls, dysphagia, urinary urgency, constipation amplifying BPSD).",
    "Diagnosis: the timeline (motor vs cognitive onset) as the backbone; weighted testing (clock-drawing, trails, timed fluency, dual-task): memory-weighted screens under-sell; the line-by-line medicine audit; the bloods; MRI to exclude second processes; the five hidden loaders (hearing, vision, pain, sleep, constipation).",
    "Management in strict order: (1) drug-list surgery; anticholinergics stopped (trihexyphenidyl first), agonist pruned with the neurologist, amantadine stopped, bladder drugs swapped, sedatives reviewed; levodopa kept as the least-psychotogenic backbone; (2) the acetylcholine lever: rivastigmine (PDD trial evidence: cognition, ADLs, psychotic features), donepezil alternative, memantine add-on; (3) the cautious antipsychotic tier only for persistent danger: quetiapine tiny-dose pragmatic default, clozapine best-evidence tertiary (blood counts; paradoxical tremor benefit), pimavanserin name-only; NEVER the D2-blockers (wallet card rule); plus the body-mind tier (falls-audit, swallow craft, bowel-bladder, depression SSRIs minimal-anticholinergic).",
    "The Indian tier: recognition gap (no routine cognitive screening in busy OPDs, the annual two-minute clock-drawing the fix); the medicine-stack problem (three prescribers, nobody owning the list, the bag habit); agonist/amantadine/anticholinergic referrals as the 'sudden psychiatric' stream; faith-frame consultation skill (join respectfully, then explain the chemistry); spouses in their sixties as the unsupported service tier; the true costs the caregiver's and the fractures'.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pdd-quiz-1",
      question: "Dementia appearing 5 years after parkinsonism is labelled:",
      options: ["DLB", "Parkinson's disease dementia", "Alzheimer's with parkinsonism", "Vascular dementia"],
      correctIndex: 1,
      explanation: "The one-year rule: motor disease established more than a year before dementia = PDD.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pdd-quiz-2",
      question: "The most evidence-backed drug for cognition and psychosis in PDD is:",
      options: ["Haloperidol", "Rivastigmine", "Risperidone", "Amitriptyline"],
      correctIndex: 1,
      explanation: "The deep cholinergic deficit is the therapeutic target; rivastigmine has trial evidence for cognition, function and psychotic features in PDD.",
      afterSectionId: "management",
    },
    {
      id: "pdd-quiz-3",
      question: "A Parkinson's patient develops gambling and evening visual hallucinations. The first suspect is:",
      options: ["Rivastigmine", "A dopamine agonist", "Memantine", "Donepezil"],
      correctIndex: 1,
      explanation: "Agonists (pramipexole, ropinirole) cause impulse-control disorders and psychotic phenomena; dose reduction is the treatment.",
      afterSectionId: "symptoms",
    },
    {
      id: "pdd-quiz-4",
      question: "Which must be on the forbidden list for PDD psychosis?",
      options: ["Quetiapine", "Clozapine", "Haloperidol", "Melatonin"],
      correctIndex: 2,
      explanation: "D2 blockade catastrophically worsens rigidity and swallowing; quetiapine and clozapine are the cautious options.",
      afterSectionId: "management",
    },
    {
      id: "pdd-quiz-5",
      question: "The typical PDD cognitive profile is:",
      options: ["Amnestic-first", "Executive and visuospatial slowing first, memory relatively preserved", "Pure aphasia", "Pure amnesia with fluent speech"],
      correctIndex: 1,
      explanation: "Subcortical-frontal and visuospatial failure dominates; recall improves with cueing, unlike early Alzheimer's.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pdd-quiz-6",
      question: "The cheapest first intervention for new hallucinations in a Parkinson's patient on multiple tablets is:",
      options: ["Add quetiapine", "Stop anticholinergics / prune the dopamine load", "Start an SSRI", "Order a PET scan"],
      correctIndex: 1,
      explanation: "Drug-list surgery treats the commonest reversible cause before any new prescription.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "State the one-year rule and what it separates.", answer: "Parkinsonism established for MORE than one year before the cognitive decline = Parkinson's disease dementia (PDD); dementia arising before or within one year of the motor signs = dementia with Lewy bodies (DLB). The convention separates the two labels of one alpha-synuclein process by which door it entered: the motor door first (PDD, median 10 years to dementia) or the cortical door first (DLB, dementia leading the presentation). Arbitrary but operational, and examiners love it precisely for that; quote it in every answer involving either disease.", topic: "Diagnosis" },
    { question: "Why does rivastigmine help hallucinations AND attention in PDD, one chemical sentence.", answer: "Because PDD empties the acetylcholine tank (nucleus basalis degeneration) even more completely than Alzheimer's does, and rivastigmine preserves the remaining acetylcholine, the one chemical serving attention, visuospatial processing and hallucination-gating at once. The trials showed cognition, activities of daily living and psychotic features improving together: the single lever pushing back on all three. (And the mirror: anticholinergic drugs drain the same tank (trihexyphenidyl, bladder drugs) which is why they are the first to stop.)", topic: "Pharmacology" },
    { question: "Which four drug classes most commonly MANUFACTURE psychiatric symptoms in a Parkinson's patient?", answer: "(1) Anticholinergics: trihexyphenidyl and the bladder-antispasmodic tier: cognitive worsening and visions by draining the emptied cholinergic tank (the first to stop); (2) Dopamine agonists: pramipexole, ropinirole: hallucinations, impulse-control disorders (gambling, shopping, eating, sex), sleep attacks; (3) Amantadine: visions, confusion, agitation, especially in the elderly and renal-impaired; (4) Sedatives: benzodiazepine-tier night prescriptions: balance, memory and confusion overnight. The rule that follows: the prescription timeline before the symptom timeline, always audit the list before blaming the disease.", topic: "Pharmacology" },
    { question: "Your first three prescriptions before reaching for any antipsychotic in PDD psychosis?", answer: "First: DRUG-LIST SURGERY; stop the anticholinergics (trihexyphenidyl first among equals), stop amantadine, prune the dopamine agonist with the neurologist (accepting a little more stiffness as the price of a sane evening), swap bladder drugs for timed toileting, review sedatives. Second: RIVASTIGMINE; the acetylcholine lever with trial evidence for cognition, function AND psychotic features. Third: THE NON-DRUG TIER; reassurance for benign insight-preserving visions, even lighting at dusk, hearing and vision treated, constipation and nocturia managed (the hidden amplifiers). Only when danger or distress persists through all three: the cautious antipsychotic ladder (quetiapine tiny-dose, clozapine tertiary), never the D2-blockers.", topic: "Management" },
    { question: "Name the two antipsychotics with any legitimate role, and the one that must be on the wallet card as forbidden.", answer: "Quetiapine: the pragmatic Indian default at 12.5–25 mg cautiously titrated: weak evidence but the best availability-and-risk balance, touching the motor system least. Clozapine: the best efficacy evidence (including the Parkinson's-specific trials), with the paradoxical tremor benefit and negligible D2 blockade, but requiring the weekly-then-periodic blood counts (agranulocytosis) that make it tertiary-centre-only; watch its sedation and orthostasis. The forbidden name for the wallet card: HALOPERIDOL (with risperidone and olanzapine alongside it in practice). D2 blockade causing severe rigidity worsening, swallowing failure and malignant-type reactions; the card reads like an allergy bracelet and travels everywhere the patient does.", topic: "Pharmacology" },
    { question: "Why does dual-tasking (walking while talking) deterioration matter beyond cognition?", answer: "Because it is a FALLS RISK wearing a cognitive finding's clothes: the frontal-executive failure that makes walking-while-talking deteriorate is the same system whose collapse takes the gait down when the attention divides, and falls are the emergency of this disease, each one risking the hip fracture that ends walking forever. The dual-task observation belongs in the weighted exam (it catches the subcortical profile the MMSE misses) AND in the safety plan (the physiotherapy balance review, the home falls-audit with rails and night lighting, the footwear check, the lying-standing blood pressure). One bedside finding, two clinical registers: cognition and survival.", topic: "Clinical practice" },
    { question: "Give the four questions for impulse-control screening in private.", answer: "Asked without the family in the room, without judgement, specifically: (1) 'Have you been betting or gambling; online, cards, anything?' (2) 'Shopping or spending: more than you mean to, more than before?' (3) 'Eating: bingeing, eating much more than before?' (4) 'Sex: urges much stronger than before?': any 'yes, stronger than before' in a patient on pramipexole or ropinirole is the agonist speaking until proven otherwise. The follow-through: the agonist reduction with the neurologist, the debt-and-lock package (UPI locks, wallet limits, counselling), because hiding it keeps the cause in place, and the family's shame is the symptom's bodyguard.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Is this the same as Alzheimer's?", answer: "No. Both are dementias, but this one runs with the Parkinson's illness, attacks planning, speed and visual processing first, and preserves memory storage longer. The medicines that help are also different." },
    { question: "He sees his late brother sitting by the window every evening. Should we be frightened?", answer: "If he is calm about it and knows it is a vision, no. This is extremely common in this illness and often needs no medicine, but it does need a medicine review, because sometimes a tablet is inviting the visitor." },
    { question: "The doctor stopped one of his Parkinson's tablets and the visions went. Why?", answer: "Because some Parkinson's medicines push the chemistry that produces visions. Reducing them is often the safest psychosis treatment in this disease; a little more stiffness is a fair price for a calm evening." },
    { question: "He has become lazy and refuses to help at home.", answer: "That is probably apathy, not laziness. A flat loss of drive that is part of the brain disease. Schedules, routine and one-step requests work better than scolding; and it is not depression unless sadness is present." },
    { question: "Is there a memory tablet for this?", answer: "Yes: the rivastigmine family, and it specifically helps thinking, attention and even the visions in this disease. It does not stop the underlying illness, but it buys real function." },
    { question: "He fell again last night.", answer: "Falls are the emergency of this disease. Ask for a home falls-audit (rails, night lighting, footwear), a lying-standing blood-pressure check, and a physiotherapy balance review: each fall risks a hip fracture that ends walking forever." },
    { question: "Are we allowed to give sedatives at night so we can sleep?", answer: "Carefully, and only with the treating doctor: sedatives can worsen balance, memory and confusion overnight. Better first moves: daytime activity, evening light-dimming, and treating any night-time pain or full bladder." },
    { question: "Should we hide the betting debts from the doctor?", answer: "Please do not. Compulsive gambling or shopping can be CAUSED by a Parkinson's medicine, and often improves when that medicine is reduced; hiding it keeps the cause in place." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased neurocognitive-disorder logic and the PDD/DLB one-year convention" },
      { source: "Movement Disorder Society / Parkinson Study Group — psychosis management guidance in Parkinson's disease" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.6 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Emre M et al. — the rivastigmine trial in PDD (cognition, ADLs, psychiatric features)" },
      { source: "Clozapine in Parkinson's psychosis — the Parkinson's-specific efficacy trials and monitoring requirements" },
      { source: "Pimavanserin trials (US-approved for Parkinson's psychosis; not marketed in India) — name-recognition only" },
    ],
    reviews: [
      { source: "Aarsland D et al. — dementia incidence and prevalence meta-analyses in Parkinson's disease" },
      { source: "Weintraub D et al. — impulse-control disorders in Parkinson's (the dopamine-agonist association and screening-question concept)" },
      { source: "Postuma RB et al. — REM sleep behaviour disorder as prodromal marker across the synucleinopathies" },
      { source: "Anticholinergic burden and cognition in the elderly — the cumulative-burden literature" },
      { source: "Indian Parkinson's clinic series — neuropsychiatric referral patterns and polypharmacy (2010s–2020s); cost realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The wallet card and the bag habit — the two instruments this course hands to every Indian PDD family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for caregiver distress and family routing" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the visions as chemistry, the medicine review that treats, the falls craft, the private questions.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The one-year rule, the subcortical profile, the see-saw and the forbidden list.",
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
      description: "Everything: the bag habit, the private questions, the co-management craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The one-year rule, the risk figures, the twin's territory.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the one-year rule and the cumulative risk figures cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The climbing protein, the emptied tank, the see-saw.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the see-saw and why every psychiatric drug pushes one side." },
    { number: 3, title: "Clinical Practice", description: "The subcortical profile, the weighted exam, the surgery-first ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the bag audit, the weighted exam and the three-step management order." },
    { number: 4, title: "Indian Context", description: "The medicine stack, the spiritual frame, the spouse-service reality.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the undoing-prescription act and teach the bag habit." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the PDD essay cold and recite the forbidden list without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.6 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased neurocognitive-disorder logic and the PDD/DLB convention", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Emre M et al. — the rivastigmine trial in PDD (cognition, ADLs, psychiatric features)", sourceType: "trial", year: "2004 onward", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Aarsland D et al. — dementia incidence and prevalence meta-analyses in Parkinson's disease (the 25–40% point prevalence; the long-horizon majority finding; the 10-year median interval)", sourceType: "meta-analysis", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Movement Disorder Society / Parkinson Study Group — psychosis management guidance in Parkinson's disease", sourceType: "guideline", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Clozapine in Parkinson's psychosis — the Parkinson's-specific efficacy trials (Pollack/CGS lineage) and monitoring requirements; pimavanserin trials (name-recognition only, not marketed in India)", sourceType: "trial", year: "1990s–2020s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Weintraub D et al. — impulse-control disorders in Parkinson's disease (the dopamine-agonist association; the screening-questions concept)", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Postuma RB et al. — REM sleep behaviour disorder as prodromal marker across the synucleinopathies", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Anticholinergic burden and cognition in the elderly — the cumulative-burden literature (trihexyphenidyl's first-among-equals status)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian Parkinson's clinic series — neuropsychiatric referral patterns, polypharmacy and anticholinergic continuation, caregiver realities (2010s–2020s); drug cost realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The one-year rule: parkinsonism established more than one year before the cognitive decline = PDD (dementia before or within one year = DLB); the operational convention separating the two labels of one alpha-synuclein process; no biomarker exists, the timeline is the diagnosis's backbone.", grade: "established", sources: ["S2"] },
    { text: "Epidemiology: point prevalence of dementia in Parkinson's roughly 25–40%, with cumulative incidence rising so that the majority of long-surviving patients in long-horizon cohorts are affected; median interval from motor onset to dementia ≈ 10 years; strongest risks: older age at onset, postural-instability-gait-predominant motor picture, early hallucinations, RBD, daytime sleepiness, baseline MCI.", grade: "established", sources: ["S4"] },
    { text: "The subcortical cognitive profile: bradyphrenia, executive and visuospatial deficits with relatively preserved naming and recall-to-cue (memory storage holding longer than in Alzheimer's); memory-weighted screens under-sell it; the weighted exam (clock-drawing, trails, timed fluency, dual-task observation) is the detecting instrument.", grade: "established", sources: ["S1", "S4"] },
    { text: "The cholinergic architecture: nucleus basalis degeneration empties the acetylcholine tank even more completely than in Alzheimer's; the basis for rivastigmine's PDD trial evidence (cognition, activities of daily living and psychotic features improving together), with donepezil the practical alternative and memantine a modest add-on.", grade: "established", sources: ["S3"] },
    { text: "The antipsychotic catastrophe: D2 blockade (haloperidol, risperidone, olanzapine) causes severe worsening of rigidity, swallowing failure and malignant-type reactions; the wallet-card rule identical to DLB's; the cautious tier: quetiapine 12.5–25 mg (weak evidence, best availability-risk balance in India) and clozapine (best efficacy including the Parkinson's-specific trials, paradoxical tremor benefit, agranulocytosis monitoring making it tertiary-tier); pimavanserin US-approved but not marketed in India.", grade: "established", sources: ["S5", "S6"] },
    { text: "Drug-manufactured neuropsychiatry: dopamine agonists (pramipexole, ropinirole) associated with hallucinations, impulse-control disorders (pathological gambling, compulsive shopping, binge eating, hypersexuality) and sleep attacks; amantadine with visions, confusion and agitation; anticholinergics (trihexyphenidyl, bladder drugs) with cognitive worsening: the first drugs to stop, with the prescription-timeline question preceding every symptom story.", grade: "established", sources: ["S7", "S9"] },
    { text: "The impulse-control discipline: the disorders hide behind family shame and present as 'family dispute' or 'confusion' (the private specific screening questions ('betting, shopping, eating, sex) any of these stronger than before?') are the only reliable door in; the treatment includes agonist reduction, debt counselling and account locks alongside any pharmacology.", grade: "established", sources: ["S7"] },
    { text: "RBD as the shared prodromal marker across DLB, PDD and Parkinson's without dementia: the synuclein process's years-early calling card (cross-referenced to the DLB and Parasomnias courses).", grade: "established", sources: ["S8"] },
    { text: "The two enders: falls (postural instability plus visuospatial failure, each fall risking the hip fracture that ends walking) and dysphagia (aspiration) end independent living; the somatic-mental overlaps (urinary urgency, constipation, nocturia) amplify BPSD when unmanaged.", grade: "established", sources: ["S1", "S5"] },
    { text: "The Indian tier: comparable dementia frequency to international series but a recognition gap (no routine cognitive screening in busy OPDs, the annual two-minute clock-drawing the fix); the three-prescriber pillbox owned by nobody (the bag habit the reconciliation instrument); continued trihexyphenidyl in the elderly as the commonest anticholinergic continuation; spouses in their sixties as the unsupported service tier; generic rivastigmine affordable (₹200–450/month approx 2026) with the patch not.", grade: "supported", sources: ["S10"] },
    { text: "The depression-apathy distinction: apathy flat where depression is painful, commonly misread as laziness and mistreated with antidepressant reflexes; depression treated with minimal-anticholinergic SSRIs (sertraline, escitalopram) with tricyclics forbidden entirely in PDD.", grade: "established", sources: ["S1", "S9"] },
  ],
};
