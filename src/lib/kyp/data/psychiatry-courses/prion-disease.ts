import type { PsychiatryCourse } from "./types";

/**
 * PRION DISEASES (CJD AND RELATIVES) — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/prion-disease.md — untouched foundation),
 * re-researched against current guidance (RT-QuIC diagnostics, the
 * MRI-criteria era, the rapid-dementia mimic series, WHO
 * infection-control guidance, Indian referral realities) with
 * per-claim provenance.
 *
 * Drug routes: none — the symptomatic tier (clonazepam, valproate,
 * levetiracetam for myoclonus; morphine-class analgesia for the late
 * phase) and the failed antiprion trial lines have no KYP lessons and
 * are recorded in contentGaps, never invented. A prion course links
 * no drugs because no drug treats it — the honesty IS the teaching.
 */
export const prionDiseaseCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "prion-disease",
  title: "Prion Diseases (CJD)",
  shortName: "Prion disease",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Prion Diseases (CJD)"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The fastest dementia: rare, fatal, and mostly a discipline of excluding treatable mimics",
  summary:
    "Prion diseases are rare, universally fatal illnesses presenting as rapidly progressive dementia, often with psychiatric features. Management is supportive, with the crucial clinical task being exclusion of treatable mimics.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the prion concept in three plain sentences (shape change, template seeding, spongiform damage) and the three transmission routes (sporadic, genetic, acquired).",
    "Recognise the sporadic CJD picture: subacute cognitive collapse over weeks-to-months plus myoclonus plus neurological signs — and its three investigations.",
    "Distinguish variant CJD from sporadic: younger age, psychiatric-first onset, sensory complaints, ataxia before dementia, the pulvinar sign.",
    "Name the rarer phenotypes in one line each: fatal familial insomnia, Gerstmann-Sträussler-Scheinker, and kuru.",
    "Run the mimic work-up of any rapid dementia — the treatable list (autoimmune encephalitides, Hashimoto's, paraneoplastic, neurosyphilis, HIV, metabolic, subdural, NPH) — and the rule: treat the mimic before settling the prion.",
    "Counsel families honestly: trajectory, inheritance testing for blood relatives, infection-control realities, and end-of-life care.",
    "Describe Indian realities: under-recognition, where RT-QuIC and specialist MRI access actually exist, costs, and the referral pathway.",
  ],
  quickFacts: [
    { label: "The tempo signature", value: "Weeks to months", detail: "A dementia that completes its decline between two consecutive OPD visits — the single most differentiating feature among the dementias" },
    { label: "The cause", value: "A shape, not a creature", detail: "An infectious protein with no DNA or RNA: the misfolded form templates normal PrP into its own image — the crystal-seed cascade; no vaccine is possible because the enemy wears the body's own protein" },
    { label: "The three routes", value: "Sporadic ~85% · familial 10–15% · acquired rare", detail: "For sporadic disease the family questions ('was it the mutton, the vaccine?') have the answer no — no behaviour, diet or contact raises the risk" },
    { label: "The incidence", value: "1–1.5 per million per year", detail: "Sporadic CJD occurs worldwide, peaking 60–70; no sex difference, no demonstrated environmental cause" },
    { label: "The MRI ribbon", value: "Cortical ribboning + bright basal ganglia", detail: "The DWI/FLAIR workhorse — in India the single greatest diagnostic weight; ASK FOR DWI BY NAME because routine sequences miss the ribbon" },
    { label: "The modern CSF test", value: "RT-QuIC", detail: "The seeding assay that reproduces the disease's own mechanism in glass — highly specific, the closest thing to a living confirmation; India availability limited to major centres" },
    { label: "The mimic arithmetic", value: "~1 in 5 CJD-suspects is treatable", detail: "Published rapid-dementia series: autoimmune, Hashimoto's, metabolic, infective and other rescues — the exclusion-before-label rule earns its entire cost" },
    { label: "The contagion answer", value: "NOT contagious by ordinary contact", detail: "Touch, plates, rooms, tears, kissing — all safe; special handling only for brain, spinal, CSF and lymphoid tissue during procedures" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The years-scale contrast to the weeks-scale prion tempo — and the mislabel prion cases receive when work-up is skipped" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The fluctuating impostor with a treatable cause — myoclonus in delirium and metabolic states is a hundred-fold commoner than prion disease" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The slower-on-inspection rapid decliner of the mimic table" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The default first label of the prion opening act — grief and depression diagnoses precede the tempo's unmasking" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The young psychiatric-first presentation (variant CJD, anti-NMDA encephalitis) that must earn the medical work-up before the label" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The basal-ganglia territory the avalanche reaches — the movement chaos and rigidity of the classical script" },
    { label: "Cortex", type: "brain-region", href: "#brain", note: "The ribbon-lit terrain of the fastest dementias" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "The sleep-relay hub — the D178N lineage's fatal-insomnia target and the pulvinar sign's postcode" },
    { label: "Cerebellum", type: "brain-region", href: "#brain", note: "The ataxia-first doorway of the GSS and variant scripts" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two short stories carry the prion brain. The shape that recruits: a normal brain protein (the prion protein, sitting on cell membranes, day-job still not fully understood) flips into a wrong shape. The wrong shape is sticky and stable, and it is a TEMPLATE: wherever it meets a normally-shaped prion protein, it presses it into its own image. One becomes two, two become four — the conversion runs exponentially like a crystal seeding a supersaturated solution, the 'ice-nine' analogy. Because the misfolded form resists the enzymes that clear normal proteins, it accumulates; the neurons hosting it sicken and die, leaving spongy holes (spongiform change) and dense scarring (gliosis). No virus, no bacterium, no immune war — a shape, spreading. This is why prions resist standard autoclaving and why no vaccine has ever been possible: there is nothing foreign to teach the immune system to see. Where it lands decides the script: the misfolding avalanche lands differently by region, and the region writes the phenotype. Cortex-heavy spread presents as the fastest dementias; basal ganglia and thalamus add movement chaos and myoclonus; a thalamus-confined familial mutation (the D178N/FFI lineage) attacks the sleep-relay hub first — months of dream-consciousness intruding into waking, autonomic storms, and exhaustion without sleep; cerebellum-first (GSS, some sporadic variants) presents as ataxia years before dementia. The lesson: prion disease is not one disease but a family of scripts, with the same ending.",
    steps: [
      "The normal prion protein (PrP) flips into the sticky, stable misfolded form (PrP-sc).",
      "The misfolded form TEMPLATES: it presses normal PrP into its own image — one becomes two, two become four, the crystal-seed cascade.",
      "The misfolded form resists the clearing enzymes — it accumulates, and the hosting neurons sicken and die.",
      "Spongiform change (holes) plus gliosis (scarring) is the tissue signature; no virus, no immune war — a shape, spreading.",
      "Sterilisation and vaccine logic both fail for the same reason: the enemy wears the body's own protein — nothing foreign for autoclaves to break or the immune system to see.",
      "Where it lands writes the script: cortex (fastest dementias), basal ganglia (movement chaos, myoclonus), thalamus (fatal insomnia), cerebellum (ataxia-first).",
      "The tempo — weeks to months — is the clinical signature of the exponential conversion meeting the brain that cannot clear it.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "cortex", name: "Cerebral cortex", role: "The ribbon-lit terrain of the classic script — the fastest dementias, the cortical blindness and aphasia-as-first-sign variants.", grade: "established" },
    { id: "basal-ganglia", name: "Basal ganglia", role: "Movement chaos, rigidity and the myoclonus amplifier — bright on the DWI workhorse alongside the ribbon.", grade: "established" },
    { id: "thalamus", name: "Thalamus (the sleep relay)", role: "The D178N fatal-insomnia lineage's target — dream-consciousness intruding into waking, autonomic storms; the pulvinar sign's posterior postcode in variant CJD.", grade: "established" },
    { id: "cerebellum", name: "Cerebellum", role: "The ataxia-first doorway — the GSS family script and the variant CJD gait before dementia.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The basal-ganglia territory's chemical — its circuits' involvement writes the rigidity and movement chaos of the classical script.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The inhibitory balance that myoclonus and the startle response lose — the jerks as disinhibition of the motor system.", grade: "proposed" },
    { name: "Acetylcholine", symbol: "ACh", role: "The arousal-attention chemistry swept into the cortical collapse — delirium-tier confusion riding the spongiform spread.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "seeding-pathway",
      name: "The crystal-seed cascade (template conversion)",
      steps: [
        { label: "The flip", detail: "A normal membrane protein (PrP) refolds into the sticky, stable misfolded form (PrP-sc)" },
        { label: "The template", detail: "PrP-sc presses every normal PrP it meets into its own image — exponential conversion, the ice-nine analogy" },
        { label: "The resistance", detail: "Misfolded PrP resists the clearing enzymes — accumulation where clearance fails" },
        { label: "The spongiform ending", detail: "Hosting neurons die leaving holes; gliosis scars the terrain — weeks-to-months of clinical collapse" },
      ],
      clinicalManifestation: "The dementia that declares itself fully between two consecutive OPD visits — the tempo that organises the whole differential.",
      grade: "established",
    },
    {
      id: "phenotype-map-pathway",
      name: "Where it lands decides the script",
      steps: [
        { label: "Cortex-heavy", detail: "The fastest dementias — attention collapse, disorientation, the visual and aphasia variants" },
        { label: "Basal ganglia and thalamus join", detail: "Movement chaos, rigidity, myoclonus; the startle loses its gate" },
        { label: "Thalamus-confined (D178N)", detail: "Fatal insomnia: months of dream-consciousness into waking, autonomic storms, exhaustion without sleep" },
        { label: "Cerebellum-first (GSS, some sporadic)", detail: "Ataxia years before dementia — the slow-end script of the same family" },
      ],
      clinicalManifestation: "One protein process, a family of scripts with the same ending — the phenotype written by geography.",
      grade: "established",
    },
    {
      id: "mimic-rescue-pathway",
      name: "The rescue pathway (why the work-up comes first)",
      steps: [
        { label: "The rapid dementia arrives", detail: "Weeks-to-months cognitive-plus decline — prion suspect by tempo alone" },
        { label: "The mimic screen runs", detail: "MRI + CSF + the antibody/metabolic/infective panel BEFORE any CJD label settles" },
        { label: "One in five is treatable", detail: "Anti-NMDA and Hashimoto's rescues, paraneoplastic and infective catches, metabolic corrections" },
        { label: "The label is earned by exclusion", detail: "Only the work-up-cleared case carries the prion diagnosis — and the rescue rate justifies the entire discipline" },
      ],
      clinicalManifestation: "The 21-year-old 'acute psychosis' whose antibody panel returned anti-NMDA positive and whose teratoma removal returned her degree.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "opening-act", time: "Weeks 1–8", title: "The misdiagnosed opening", description: "Irritability, withdrawal, depression-and-sleep inversion — grief and depression are the default first labels; the psychiatric contacts accumulate before the tempo unmasks itself.", phase: "onset" },
    { id: "declaration", time: "Weeks–months", title: "The tempo declares", description: "Cognitive collapse completes between two consecutive OPD visits; myoclonus startles the family; the gait stiffens — the same-day MRI (DWI asked for by name) plus the mimic screen.", phase: "peak" },
    { id: "confirmation", time: "Weeks (referral tier)", title: "The converging triangle", description: "MRI ribbon and basal-ganglia brightness, EEG periodic complexes, CSF markers or RT-QuIC at the referral centre — with the treatable mimics actively excluded, not assumed away.", phase: "duration" },
    { id: "terminal-phase", time: "Months (median survival under a year)", title: "The honest ending", description: "Mutism, rigidity, swallowing failure, unresponsiveness — home-based care in the Indian calculus, comfort logistics, the morphine conversation held before the suffering forces it.", phase: "duration" },
    { id: "aftermath", time: "After death", title: "The family's questions", description: "The contagion answer (no), the sporadic-form inheritance answer (nothing to test), the sons' own depression screened — the caregiver crash-course this rapid disease forces, delivered with the counselling that outlasts the patient.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Sporadic CJD occurs worldwide at roughly 1–1.5 cases per million per year, peaking between 60 and 70 years of age, with no robust sex difference and no convincingly demonstrated environmental cause. Familial forms cluster by mutation and ancestry (the E200K mutation famous among Libyan Jews and Slovak clusters; D178N for fatal familial insomnia; P102L for GSS). Iatrogenic CJD is a closed historical ledger — cadaveric growth-hormone treatment and dura-mater grafts before the 1990s accounting for most recorded transmissions, a handful from corneal grafts and reused neurosurgical instruments. Variant CJD struck mainly the United Kingdom — about 230 cases in total worldwide from 1996, in people exposed to BSE-contaminated beef in the late 1980s; the epidemic has essentially burned out, with the late lesson that incubation periods can be decades and a few blood-transmission cases in the tail.",
    indianPrevalence: "No systematic national surveillance exists (no Indian CJD registry equivalent to the EU's networks) — figures are estimates built from hospital series: the incidence is almost certainly UNDER-recognised rather than truly lower, since a rapidly declining elder is frequently labelled 'stroke', 'senility', or 'advanced Alzheimer's' and dies without MRI or CSF study. Case reports and series accumulate from the national institutes and medical colleges (NIMHANS, AIIMS, PGI lines); RT-QuIC is available at a small number of centres (approx 2026). The working assumption: it exists in your district, you will meet it rarely — and you will meet its MIMICS far more often, which is the practical epidemiology.",
    lifetimeRisk: "Sporadic disease: no known behavioural, dietary or contact risk — the family's 'was it the mutton / the vaccine?' questions get the answer no. Familial disease: autosomal dominant PRNP mutations with variable penetrance — the genetic counselling tier.",
    genderRatio: "No robust sex difference in sporadic disease.",
    ageOfOnset: "Sporadic CJD peaks 60–70; variant CJD struck the young (median early twenties at the UK peak) — the two scripts' age signatures.",
    indianNotes: "The genuine Indian risks are DIAGNOSTIC: the missing MRI, the unexamined mimic, the label of 'rapid Alzheimer's' given without work-up — the correctable failure this course exists to prevent.",
  },
  etiology: [
    { category: "biological", factor: "Sporadic misfolding (~85%)", details: "A chance misfolding event or a spontaneous somatic PRNP conversion — no behaviour, no diet, no contact is known to raise the risk; the sporadic-form family questions all receive the answer no." },
    { category: "genetic", factor: "Inherited PRNP mutations (~10–15%)", details: "Usually autosomal dominant with variable penetrance: familial CJD, GSS (P102L and neighbours), fatal familial insomnia (D178N with methionine at codon 129, the classic double-mutant logic); the codon-129 M/V polymorphism shapes phenotype in both sporadic and variant disease." },
    { category: "environmental", factor: "Acquired tissue exposure (rare)", details: "Iatrogenic — historical cadaveric growth hormone, dura-mater grafts (the Japan series notable), corneal and instrument-linked transmission; variant CJD via BSE-infected beef exposure (UK-era); kuru via endocannibalism (the fore people of Papua New Guinea, extinct)." },
    { category: "biological", factor: "Age", details: "The sporadic form peaks 60–70; variant struck the young (teens–forties at the UK peak) — the two scripts read differently at the bedside partly because of who is sitting in front of you." },
    { category: "social", factor: "The Indian diagnostic risk (the real exposure)", details: "No identified local risk factor of any kind; the genuine risks here are diagnostic — the missing DWI sequence, the unexamined mimic, the 'rapid Alzheimer's' label without work-up — the tier this course arms the clinician against." },
  ],
  symptomClusters: [
    {
      category: "1. Sporadic CJD — the classic script",
      symptoms: ["Cognitive collapse over weeks to a few months: forgetfulness on Monday, disorientation by the month, mute and bed-bound by the season — the SPEED is the signature", "Myoclonus: sudden lightning jerks of limbs or face, worsened by startle, present in most — at times the family's first alarming sign", "Neurological quicksand under the dementia: cerebellar ataxia, stiff-rigid pyramidal and extrapyramidal signs, visual field distortion and cortical blindness variants, aphasia-as-first-sign variants", "Behavioural and psychiatric shading early: irritability, withdrawal, depression and sleep inversion — the reason psychiatry sees these patients before neurology does", "Terminal phase: mutism, rigidity, swallowing failure, unresponsiveness, death typically within a year of onset (median survival months)"],
    },
    {
      category: "2. Variant CJD — the psychiatric script",
      symptoms: ["YOUNG patients (teens–forties), presenting first with psychiatric symptoms: anxiety, depression, withdrawal, behavioural change — typically months BEFORE any clear neurological sign, generating repeated psychiatric contacts before the diagnosis declares itself", "Prominent painful sensory symptoms: persistent limb and face pain that finds no anatomy", "Then progressive ataxia, dance-like movements (chorea/dystonia), cognitive decline; later the same mutism and myoclonus"],
    },
    {
      category: "3. The rarer phenotypes (one line each)",
      symptoms: ["Fatal familial insomnia: adult-onset untreatable insomnia with dream-filled waking, autonomic storms (sweats, fever, pulse swings), and attention collapse over roughly a year-plus — familial, dominant, the sleep-medicine nightmare", "Gerstmann-Sträussler-Scheinker: ataxia-first family disease running years, dementia late", "Kuru: the historical tremor-and-laughing disease of the fore people, spread by funeral cannibalism, studied by Gajdusek (Nobel 1976) — the proof of human-to-human transmission decades after exposure"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The converging triangle (modern criteria logic)",
      code: "Tempo + investigations + exclusion",
      criteria: [
        "No single bedside feature proves prion disease: the diagnosis is a converging triangle of (1) the TEMPO — genuinely rapid progressive dementia-plus, (2) the investigations, and (3) the exclusion of mimics.",
        "MRI brain (DWI/FLAIR) — the workhorse: bright ribbon-like cortical signal (cortical ribboning) plus basal-ganglia brightness; in variant CJD the pulvinar sign (bright posterior thalamus, the hockey-stick pattern); in India a well-performed MRI carries the single greatest diagnostic weight.",
        "EEG: periodic sharp-wave complexes — the classic exam answer, present in a majority of late sporadic cases but neither early nor specific.",
        "CSF: the older 14-3-3 protein and total-tau markers (sensitive but non-specific — raised in any rapid neuronal death); the modern RT-QuIC (real-time quaking-induced conversion: the patient's CSF seeds a shaking tube of normal prion protein — if it converts, light shows; highly specific, the closest thing to a living confirmation).",
        "Genetic testing (PRNP sequencing) for the familial phenotypes and for counselling blood relatives — the FFI/GSS families in which a positive test rewrites the family's future.",
        "Tonsil biopsy in suspected variant CJD (the misfolded protein appears in lymphoid tissue there, unlike sporadic) — now largely historical as the epidemic ended.",
      ],
      duration: "The work-up is urgent but not rushed: days at the referral centre — the mimic screen deliberately runs alongside.",
      indianNote: "The practical skill to carry: ASK FOR DWI BY NAME — routine sequences miss the ribbon; the district MRI read as 'normal' without DWI is the commonest Indian false-negative.",
    },
    {
      system: "The mimic work-up (runs FIRST)",
      code: "The treatable rapid dementias",
      criteria: [
        "Autoimmune encephalitis (anti-NMDA and cousins): young, seizures/psychosis-first, movement disorder, ovarian teratoma (young women) — steroids, IVIG, plasma exchange, tumour removal; recovery possible.",
        "Hashimoto's encephalopathy: myoclonus + rapid cognitive decline with thyroid antibodies and steroid-responsiveness — dramatic response.",
        "Paraneoplastic limbic encephalitis: subacute amnesia/seizures, known or hidden cancer screen — oncologic plus immunotherapy.",
        "Neurosyphilis / HIV / rare viral encephalitides: risk history, serology, CSF studies — antimicrobial/antiretroviral.",
        "Vascular (multi-infarct, CADASIL): stepwise not smooth, imaging — secondary prevention.",
        "Chronic subdural / NPH: gait-first NPH; head injury history for subdural; imaging — surgical, reversible.",
        "Toxic/metabolic (B12, thyroid, heavy metal, drug): screenable bloodwork — replace or withdraw.",
        "Rapid Alzheimer's / DLB decline: slower on close inspection; parkinsonism for DLB — supportive.",
      ],
      duration: "Same admission as the diagnostic triangle — the governing rule said aloud: a rapid dementia gets MRI + CSF + the mimic screen BEFORE it gets a CJD label.",
      indianNote: "The anti-NMDA and Hashimoto's rescues are the happiest endings this differential owns — and 'psychosis of new onset with any cognitive flag' is a lumbar-puncture-and-antibody situation, not a referral to the temple.",
    },
  ],
  severityScales: [
    {
      name: "The tempo ladder",
      fullName: "The progression-speed grading of the dementias",
      measures: "How fast the decline completes — the single axis that sorts the differential.",
      ranges: [
        { min: 0, max: 0, severity: "Years (Alzheimer's, FTD)", action: "Insidious, stepwise-slow; measured across school years and grandchild visits — the syndrome-first work-up, the planning windows, the chronic-disease package" },
        { min: 1, max: 1, severity: "Months-to-years (vascular, DLB, NPH)", action: "Steps and fluctuations; gait and parkinsonism cues — the mimic screen catches the treatables (NPH surgical, vascular modifiable) alongside" },
        { min: 2, max: 2, severity: "Weeks-to-months (sporadic CJD)", action: "The dementia that declares itself fully between two consecutive OPD visits — same-day DWI-MRI, the mimic screen in parallel, the referral triangle, and the honest family conversation begun at once" },
      ],
      indianNote: "The tempo is the clinical skill the Indian district clinic needs most: it costs nothing to ask 'when exactly was he last himself?' — and the answer sorts the whole differential.",
    },
    {
      name: "The phenotype ladder",
      fullName: "Where it lands decides the script",
      measures: "The regional script the avalanche is running.",
      ranges: [
        { min: 0, max: 0, severity: "Cortex-heavy (classic sCJD)", action: "Fastest dementias, myoclonus, ribbon on DWI; the EEG's periodic complexes late" },
        { min: 1, max: 1, severity: "Basal ganglia / thalamus (movement-plus, D178N FFI)", action: "Movement chaos, the startle-myoclonus; the fatal-insomnia lineage's sleep-relay attack" },
        { min: 2, max: 2, severity: "Cerebellum-first (GSS, variant CJD)", action: "Ataxia years before dementia (GSS) or before it in the young script (variant); the slower ends of the same family" },
      ],
      indianNote: "The family-history question writes the phenotype ladder's legend: a tree of similar deaths or insomnias points at the D178N/GSS lineages — the genetic tier.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Autoimmune encephalitis (anti-NMDA and cousins)", distinguishingFeatures: "Young, seizures and psychosis-first, movement disorder, ovarian teratoma in young women — the antibody panel decides.", keyDifferentiator: "TREATABLE: steroids, IVIG, plasma exchange, tumour removal — recovery possible; the rescue that justifies the whole mimic work-up." },
    { condition: "Hashimoto's encephalopathy", distinguishingFeatures: "Myoclonus + rapid cognitive decline with thyroid antibodies — and the steroid-responsiveness that separates it from everything else in the table.", keyDifferentiator: "Steroids: dramatic response — the fifty-rupee diagnosis that imitates the untreatable one." },
    { condition: "Paraneoplastic limbic encephalitis", distinguishingFeatures: "Subacute amnesia and seizures with a known or hidden cancer — the screen that finds the tumour behind the brain.", keyDifferentiator: "Oncologic plus immunotherapy; the cancer work-up IS the neurological treatment." },
    { condition: "Neurosyphilis / HIV", distinguishingFeatures: "Risk history, serology, CSF studies; HIV's own dementia is slower but the opportunistic mimics are fast.", keyDifferentiator: "Antimicrobial and antiretroviral responses — the infective tier treatable in weeks." },
    { condition: "Chronic subdural / NPH", distinguishingFeatures: "Gait-first NPH; head injury history for subdural — imaging decides both.", keyDifferentiator: "Surgical and reversible — the scans that change lives." },
    { condition: "Rapid Alzheimer's / DLB decline", distinguishingFeatures: "Slower on close inspection; parkinsonism and fluctuations for DLB; the 'rapid' label usually dissolves against a documented timeline.", keyDifferentiator: "The tempo documented properly — the collateral history with dates beats the family's compressed recollection." },
    { condition: "Delirium with myoclonus (metabolic states)", distinguishingFeatures: "Fluctuating attention with a clear metabolic or toxic driver — myoclonus in delirium and metabolic states is a hundred-fold commoner than prion disease.", keyDifferentiator: "The cause found and corrected: the commonest 'CJD' the district hospital actually sees." },
  ],
  management: [
    { category: "lifestyle", name: "Confirm, exclude, then accept: the diagnostic discipline", description: "Confirm what can be confirmed (MRI ± CSF at the referral centre) and close the mimic work-up FIRST — the treatable differential actively eliminated, not assumed away. A rapid dementia gets MRI + CSF + the mimic screen BEFORE it gets a CJD label.", whenToUse: "Every suspected case — the discipline is the management's first act.", indianContext: "The pathway: district MRI (DWI by name) plus mimic screen at the nearest medical college; true suspects travel to the national centres (NIMHANS, AIIMS, PGI tier) where advanced MRI reading and RT-QuIC-class assays live." },
    { category: "pharmacotherapy", name: "Symptom comfort (the whole therapeutic arsenal)", description: "Myoclonus: clonazepam, valproate or levetiracetam. Spasticity: gentle positioning and physiotherapy. Insomnia and agitation: cautious benzodiazepines or carefully chosen sedation (the FFI families' sleep battle). Pain and distress in the late phase: morphine-class analgesia — not controversial, the standard. Nutrition and skin care as swallowing fails: speech-swallow guidance, cup-thick feeds, and ultimately honest family decisions about feeding framed early, without euphemism.", whenToUse: "From diagnosis to the end — comfort IS the treatment plan.", indianContext: "Morphine access and the family doctor's willingness to start it are the district tier's real pharmacology; the home-care arc (hospital bed rented in the hall, the grandmother turned every two hours) is the Indian prion service." },
    { category: "psychotherapy", name: "Family care: the core of the enterprise", description: "Honest trajectory counselling (months, not years); the caregiver crash-course this rapid disease forces; psychological support for relatives. Genetic counselling where a familial form is identified — the at-risk relative's decision about predictive PRNP testing is a full psychiatric consultation in itself; most at present decline testing, an existing family death having taught them more than a genotype could.", whenToUse: "From the day of diagnosis — and for the blood relatives, for years after.", indianContext: "The relatives who ask 'should we all get tested' receive the sporadic-form answer (no, nothing to inherit); the two sons who spent nights on the floor-bed are screened by the family doctor for their own emerging depression." },
    { category: "lifestyle", name: "Infection control: precise, not panicked", description: "The patient is NOT contagious by ordinary contact — touch, sharing rooms, saliva, sexual contact all safe. Special handling applies only to CSF/brain/spinal-cord and lymphoid tissue; neurosurgery and autopsy instruments need prion-specific sterilisation; standard precautions plus tissue-discipline are the whole story.", whenToUse: "Explained to every family at diagnosis — the panic-prevention prescription.", indianContext: "The utensil separation that Indian households sometimes self-impose is the harm to prevent: the clear answer (ordinary living is safe) protects the patient's last months from isolation." },
  ],
  safety: {
    redFlags: [
      "A dementia that declares itself fully between two consecutive OPD visits — the tempo that demands same-day imaging and the mimic screen",
      "Myoclonus plus rapid cognitive fall in anyone over 50 — a same-day DWI-MRI, not a titration of sedatives",
      "Startle-triggered bilateral arm jerks with attention collapse — the classic script declaring after weeks of 'depression' labels",
      "Young patient with new-onset psychosis PLUS any cognitive flag — a lumbar-puncture-and-antibody situation, not a referral to the temple",
      "Persistent limb and face pain finding no anatomy in a young psychiatric-first decliner — the variant script's sensory signature",
      "Familial clustering of similar rapid deaths or of fatal untreatable insomnia — the PRNP counselling tier",
    ],
    urgentGuidance:
      "The order of operations: (1) recognise the tempo — 'when exactly was he last himself?' with dates; (2) same-day DWI-MRI (asked for by name) plus the admission bloods and the mimic screen opened in parallel; (3) the referral-centre triangle — MRI reading, EEG, CSF with RT-QuIC where available; (4) the treatable mimics treated on suspicion (the steroid trial for Hashimoto's, the antibody panel, the cancer screen) BEFORE the prion label settles; (5) the family conference with the honest trajectory (months, not years), the not-contagious answer, and the morphine conversation held before the suffering forces it; (6) the home-care logistics organised while the patient can still be part of the decisions.",
  },
  drugLinks: [],
  contentGaps: [
    "Clonazepam, valproate and levetiracetam (the myoclonus-comfort tier) have no KYP drug lessons — their symptomatic use is taught here, the routes never invented.",
    "Morphine-class analgesia for the late phase — the district tier's real pharmacology — has no KYP lesson.",
    "The failed antiprion trial lines (pentosan, quinacrine, PRN-100/doxycycline) are research history, not prescriptions — recorded so no reader mistakes a trial story for a treatment.",
    "This course deliberately links no drug pages: no drug treats prion disease — the absence IS the clinical teaching.",
  ],
  patientGuide: {
    whatIsIt:
      "Prion disease is a rare, fast-moving brain illness in which one of the brain's own proteins misfolds into a wrong shape — and then, like a crystal seed, converts the surrounding proteins into the same wrong shape. The brain sponges and scars as the process spreads, and the illness declares itself over weeks to months rather than years: memory and attention collapse, jerks appear, movement stiffens. It is always fatal, typically within about a year of the first clear decline, and there is at present no medicine that slows it. What medicine CAN do: confirm the diagnosis properly (because several LOOKALIKE illnesses are fully treatable — that check is done first, every time), keep him comfortable, and stand with the family through the months.",
    whatCausesIt:
      "In about 85% of cases (sporadic CJD) the misfolding is a chance event — no food, habit, contact or behaviour is known to cause or raise the risk; the family's 'was it the mutton, the vaccine?' questions receive the answer no. In 10–15% the disease runs in families through an inherited gene change. Rare acquired forms belong to history and geography: contaminated tissue treatments before the 1990s, the UK-era beef exposure (variant CJD), and the extinct cannibalism-transmitted kuru of Papua New Guinea. It is NOT contagious by ordinary contact — holding hands, sharing plates, kissing, tears: all safe.",
    symptoms:
      "The common form (usually in the sixties): thinking collapses over weeks to a few months — forgetting, disorientation, then mute and bed-bound; sudden lightning jerks of limbs or face (worse with startle); unsteady gait and stiffness; sleep reversal and withdrawal early, which is why depression and grief are the usual first labels. The young form (variant CJD) opens differently: anxiety, depression and personality change for months BEFORE the neurological signs, with persistent painful limbs and face, then stumbling gait, dance-like movements and cognitive decline. Either way, the tempo — weeks, not years — is what separates this from ordinary dementia.",
    treatment:
      "No tablet slows or cures it — anything claimed otherwise is a research story, not a prescription. The treatment plan is: (1) the careful check for the treatable lookalikes first (blood tests, a brain scan, a spinal-fluid test — because about one in five suspected cases turns out to be a treatable mimic); (2) comfort — medicines for the jerks, careful sedation for sleeplessness and agitation, and morphine-class pain relief in the late phase, which is standard, not a last resort; (3) family care — honest timelines, help with home nursing, feeding decisions discussed early without euphemism, and counselling about the children's questions.",
    selfHelp: [
      "Ask for the brain scan to include the special sequence (DWI) by name — routine scans miss the ribbon pattern that lights the diagnosis.",
      "Insist the treatable-lookalike check is completed before accepting this diagnosis — the rescued mimic is worth more than the prion label.",
      "Turn him every two hours, keep the skin clean and dry, and rent the hospital bed early — the home months are won with logistics.",
      "Start the morphine conversation before the suffering forces it — pain relief in this illness is the standard of care, not surrender.",
      "Keep the family's daily life exactly as it is: shared plates, shared beds, shared tears carry no risk — the isolation households sometimes self-impose is the harm to prevent.",
      "Ask the specific questions at the family conference: how long (honestly), what happens next, whom to call at 3 a.m. — the written answers outlast the conversation.",
      "For the sons and daughters who nursed: your own sleep and mood are medical matters now — book your own check-up.",
    ],
    whenToSeekHelp: [
      "Any decline in thinking or behaviour measured in WEEKS rather than years — same-week medical review, not a psychiatric wait-list",
      "New jerks, startle responses or a suddenly stiff, stumbling gait under a rapid cognitive decline",
      "A young person's new anxiety, depression or personality change with ANY cognitive flag or movement sign — the medical work-up before the label",
      "Swallowing difficulty or weight loss in the established illness — the feeding and comfort conversation now",
      "The caregiver's own collapse — insomnia, depression, physical exhaustion — as urgent as the patient's symptoms",
    ],
    indianResources: [
      "The district hospital and medical college — the MRI (DWI named), the admission bloods, the first mimic screen",
      "The national centres (NIMHANS, AIIMS, PGI tier) — advanced MRI reading, RT-QuIC-class assays, genetic counselling",
      "The family doctor as the home-care captain — morphine access, turning schedules, the 3 a.m. number",
      "Tele-MANAS 14416 (24×7, free) — for the relatives' own distress through the months and after",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific prion guideline or surveillance registry exists; practice follows the international diagnostic architecture (the MRI-criteria era, RT-QuIC where reachable, WHO infection-control guidance for instrument and tissue handling) with Indian referral realities: the district-plus-medical-college-plus-national-centre cascade.",
    systemContext: "The practical pathway: a rapidly dementing patient reaches a physician or psychiatrist; the MRI (DWI sequences specifically — ask for them by name, because routine sequences miss the ribbon) plus the mimic screen happens at the nearest medical college; true suspects travel to the national centres (NIMHANS, AIIMS, PGI tier) where advanced MRI reading and RT-QuIC-class assays live. The under-recognition is structural: a rapidly declining elder is frequently labelled 'stroke', 'senility', or 'advanced Alzheimer's' and dies without MRI or CSF study — the incidence is almost certainly under-recognised rather than truly lower.",
    programmeContext: "No national registry equivalent to the EU's networks; case reports and series accumulate from the national institutes and medical colleges. RT-QuIC availability limited to a small number of centres (approx 2026). Certification of death is as organic brain disease; the family's contagion questions deserve the clear answer (no) — and the blood-donation deferral rules in India are variant-era policies (the UK-exposure-era deferrals).",
    costConsiderations: "Approx 2026: MRI brain ₹3,000–8,000 government to ₹8,000–15,000 private; CSF 14-3-3/RT-QuIC, where available, a few thousand rupees and often research-subsidised; EEG ₹1,000–3,000; genetic counselling and PRNP sequencing largely research-tier (₹15,000–40,000 in private laboratories, if sourced). The home-care arc — the rented hospital bed, the morphine the family doctor agreed to start — is the affordability reality; institutional care for a months-long trajectory is pointless in most families' calculus and honest families prefer the home.",
    culturalConsiderations: "The home-care arc is the standard Indian prion service: a hospital bed rented in the hall, the grandmother turned every two hours, the priest called a month before anyone expected — delivered by families, unsupported in most districts, and worth acknowledging in any lecture that calls itself Indian psychiatry. Against the faith-healing reflex in young psychiatric-first presentations (the family arranging the ceremony while the disease advances), the discipline to hold: young rapid cognitive-plus-psychiatric decline is a medical work-up, not a referral to the temple. The utensil-separation the household sometimes self-imposes on hearing 'infectious' is the isolation harm to prevent — ordinary living is safe.",
    patientCounselling: [
      "The contagion script, verbatim and early: 'Ordinary contact — touch, plates, rooms, tears, kissing — transmits nothing. The special precautions belong only to brain and spinal tissues during procedures. Your daily life is safe exactly as it is.'",
      "The diet question answered plainly: 'In the sporadic form, which is most cases: no food, no habit, nothing known. The beef link belongs to a different form from a specific UK-era exposure; Indian beef-eating today carries no identified prion risk.'",
      "The honest trajectory script: 'Most people with the common form are lost within about a year, often less, from the first clear decline. Planning the home care and the goodbyes sooner rather than later is the kindness — and the morphine question can be answered before the suffering forces it.'",
      "The testing question for the children: 'In the sporadic form: no, nothing to inherit. In the rare familial forms: a dedicated genetic-counselling session — a positive test in an adult without symptoms currently offers no prevention, and knowing what would help a relative decide is itself the counselling.'",
      "The treatment honesty: 'No tablet slows it; anything claimed otherwise is a research story, not a prescription. What we can do, and will do, is keep him comfortable, treat the jerks and the distress, and stand with the family.'",
      "The EEG answer for the family that heard the jargon: 'Periodic complexes are strong supporting evidence, not a verdict by itself; the MRI and the special CSF tests carry more weight today, and the treatable lookalikes are checked first.'",
    ],
  },
  decisionPath: {
    title: "The rapidly progressive dementia consultation",
    nodes: [
      {
        id: "start",
        question: "A patient is declining FAST — weeks to a few months, not years. First: anchor the tempo with dates.",
        branches: [
          { label: "'When was he last himself?' — weeks-to-months answer", next: "tempo-gate" },
          { label: "On reflection, the decline is months-to-years", next: "slow-path" },
          { label: "Fluctuating hours-to-days course with acute trigger", next: "delirium-path" },
        ],
      },
      {
        id: "tempo-gate",
        question: "RAPID progressive dementia confirmed with dates. The rule: MRI + CSF + mimic screen BEFORE any CJD label.",
        branches: [
          { label: "Sixties, cognitive collapse + myoclonus + neurological signs", next: "scjd-path" },
          { label: "Young, psychiatric-first + painful limbs + ataxia arriving", next: "vcjd-path" },
          { label: "Young, psychosis-first with any cognitive flag", next: "autoimmune-path" },
          { label: "Myoclonus + thyroid disease or antibodies", next: "hashimoto-path" },
        ],
      },
      {
        id: "autoimmune-path",
        question: "The rescue tier FIRST: anti-NMDA and cousins.",
        recommendation: "Young with new-onset psychosis plus cognitive flag: MRI, CSF with antibody panel, pelvic imaging in young women (the teratoma) — steroids, IVIG, plasma exchange, tumour removal: recovery possible. The rescue that justifies the entire mimic discipline; the CJD label must be EARNED by exclusion.",
      },
      {
        id: "hashimoto-path",
        question: "The fifty-rupee diagnosis imitating the untreatable one.",
        recommendation: "Myoclonus + rapid cognitive decline + thyroid antibodies (or even just the clinical picture): the steroid trial — the dramatic response is the diagnosis; treat before settling anything rarer.",
      },
      {
        id: "scjd-path",
        question: "The classic script: the converging triangle, same-day.",
        recommendation: "DWI-MRI asked for BY NAME (routine sequences miss the ribbon; cortical ribboning + basal-ganglia brightness); EEG (periodic sharp-wave complexes — classic, late, not specific); CSF at the referral tier (14-3-3/tau sensitive-but-nonspecific; RT-QuIC specific where available); the mimic panel run in parallel; PRNP sequencing if the family tree suggests the genetic tier.",
      },
      {
        id: "vcjd-path",
        question: "The psychiatric script in the young.",
        recommendation: "MRI with the pulvinar sign in view (the hockey-stick posterior thalamus); the exposure history (UK-era beef); tonsil biopsy now largely historical; the same mimic exclusion first — anti-NMDA lives at this age too, and the teratoma is removed, not mourned.",
      },
      {
        id: "delirium-path",
        question: "Fluctuating + acute trigger: the delirium work-up runs.",
        recommendation: "The full Delirium-course cascade: urine, sodium, infection, drug chart — myoclonus in delirium and metabolic states is a hundred-fold commoner than prion disease; treat the cause, then re-baseline.",
      },
      {
        id: "slow-path",
        question: "Months-to-years: the standard dementia pathway.",
        recommendation: "The Alzheimer's-course work-up (syndrome-first, bloods, imaging, the variant map) — the tempo alone has reframed the consultation away from the prion tier.",
      },
      {
        id: "confirmed-gate",
        question: "The prion diagnosis is made (work-up closed, mimics excluded). The management cascade:",
        branches: [
          { label: "Symptom comfort needed now", next: "comfort-path" },
          { label: "Family conference: trajectory and questions", next: "family-path" },
          { label: "Familial form identified", next: "genetic-path" },
        ],
      },
      {
        id: "comfort-path",
        question: "Comfort IS the treatment plan.",
        recommendation: "Myoclonus: clonazepam, valproate or levetiracetam; spasticity: positioning and physiotherapy; insomnia and agitation: cautious benzodiazepines (the FFI sleep battle); late-phase pain and distress: morphine-class analgesia — the standard, not the controversy; swallowing: speech-swallow guidance, cup-thick feeds, the honest feeding conversation early.",
      },
      {
        id: "family-path",
        question: "The family conference: honest, specific, written.",
        recommendation: "The trajectory (months, not years); the not-contagious answer with examples (plates, beds, tears); the home-care logistics (the rented bed, the turning schedule, the 3 a.m. number); the morphine conversation before the suffering forces it; the sons' and daughters' own screens booked — the caregiver crash-course this rapid disease forces.",
      },
      {
        id: "genetic-path",
        question: "A familial form: the blood relatives' consultation.",
        recommendation: "Dedicated genetic counselling for PRNP testing — a full psychiatric consultation in itself: the at-risk adult's decision, the penetrance numbers, the reality that a positive test currently offers no prevention; most at present decline testing, an existing family death having taught them more than a genotype could. Never direct-to-test; never the unaffected relative without formal process.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Accepting 'rapid Alzheimer's' as a label without the work-up",
      why: "The commonest Indian failure mode: the rapidly declining elder labelled 'senility' or 'advanced Alzheimer's' who dies without MRI or CSF study — the treatable mimic (one in five) is never found, and the family's questions never answered.",
      correction: "The tempo rule: any dementia measured in weeks gets MRI + CSF + the mimic screen BEFORE any label — 'rapid Alzheimer's' is a work-up instruction, not a diagnosis.",
    },
    {
      mistake: "Reading '14-3-3 positive' as 'CJD confirmed'",
      why: "The older CSF marker is sensitive but non-specific — raised in ANY rapid neuronal death (stroke, encephalitis, the autoimmune mimics): the positive that closes the mimic work-up prematurely.",
      correction: "The modern ladder: DWI-MRI (the workhorse) > RT-QuIC (specific) > 14-3-3/tau (sensitive, non-specific) > EEG (classic, late) — the label earned by exclusion, supported by the specific tier.",
    },
    {
      mistake: "Ordering the MRI without naming the DWI sequence",
      why: "Routine sequences miss the ribbon — the district MRI read as 'normal' without DWI is the commonest Indian false-negative, and the family leaves reassured with a dying patient.",
      correction: "The clinical skill to carry: ASK FOR DWI BY NAME — the request form is part of the diagnostic triangle.",
    },
    {
      mistake: "Treating myoclonus as epilepsy and escalating anticonvulsants",
      why: "The jerks are the disease seen from the muscle side — the startle reflex that lost its gate; the epilepsy ladder treats nothing and sedates a patient who needs what alertness remains.",
      correction: "Myoclonus comfort: clonazepam, valproate or levetiracetam at myoclonus doses; the startle explained to the family ('the door slam sends both arms flying because the gate is gone') rather than feared as seizures.",
    },
    {
      mistake: "Letting the young psychiatric-first case go to the temple instead of the LP",
      why: "Variant CJD presents to psychiatry — but so does anti-NMDA encephalitis, and only one of them is treatable; the faith-healing ceremony consumed the weeks that the antibody panel needed.",
      correction: "The rule with no exceptions: young rapid cognitive-plus-psychiatric decline is a lumbar-puncture-and-antibody situation — the medical work-up BEFORE any psychiatric label settles.",
    },
    {
      mistake: "Allowing the household to self-isolate the patient",
      why: "The word 'infectious' triggers the utensil separation and the separate room — the patient's last months spent in an isolation nobody required, and the family's remorse after.",
      correction: "The contagion script delivered verbatim at diagnosis: ordinary contact transmits nothing; the special handling belongs only to brain, spinal and lymphoid tissue during procedures — daily life is safe exactly as it is.",
    },
    {
      mistake: "Deferring the morphine conversation until the suffering forces it",
      why: "The late-phase pain and distress arrive on their own schedule; the conversation held in crisis is a negotiation, while the one held early is a plan — and the family remembers which one they had.",
      correction: "Morphine-class analgesia in the late phase is the standard of care, not a controversy: raise it at the first family conference, in words, with the trajectory.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The prion concept in three sentences: shape change, template seeding, spongiform damage — without the words virus or infection.",
        "The high-yield triad: rapidly progressive dementia + myoclonus + periodic EEG sharp-wave complexes.",
        "Sporadic vs variant CJD — the perennial short-note table (age, onset, duration, MRI, tonsil biopsy, exposure).",
        "The investigation ladder: DWI/FLAIR MRI > RT-QuIC > 14-3-3/tau > EEG.",
        "Why no vaccine is possible: the enemy wears the body's own protein — nothing foreign for the immune system to see.",
      ],
      practical: [
        "Take the tempo history with dates ('when exactly was he last himself?') and present the rapid-dementia work-up in order.",
        "Counsel a family on the not-contagious reality with examples — plates, beds, tears.",
      ],
      longAnswer: [
        "A 62-year-old with a 3-month decline and jerks: your steps in order (the viva favourite — tempo recognition, DWI-MRI, mimic screen, CSF markers, comfort care and family counselling).",
        "Rapidly progressive dementia: differential diagnosis with emphasis on treatable mimics.",
      ],
    },
    neetPg: {
      highYield: [
        "TEMPO is the signature: sporadic CJD completes its decline over weeks-to-months — a dementia that declares itself between two consecutive OPD visits.",
        "The triad: rapidly progressive dementia + myoclonus + periodic sharp-wave complexes on EEG.",
        "Sporadic ~85%, familial (PRNP) 10–15%, acquired rare (growth hormone, dura grafts, BSE-era beef, kuru).",
        "MRI: cortical ribboning + basal ganglia brightness (DWI/FLAIR); variant CJD = the pulvinar sign (hockey-stick).",
        "RT-QuIC = CSF seeding assay, HIGHLY SPECIFIC (the test that reproduces the disease's mechanism in glass); 14-3-3 and total tau = sensitive but NON-SPECIFIC (any rapid neuronal death).",
        "Variant CJD: young, psychiatric-first onset, painful sensory symptoms, ataxia before dementia, pulvinar sign, tonsil biopsy positive (lymphoid tissue), UK BSE-era beef exposure.",
        "One-liners to bank: FFI = D178N thalamus, insomnia plus autonomic storms; GSS = P102L, ataxia-first, years; kuru = fore tribe, funeral cannibalism, Gajdusek (Nobel 1976); Prusiner = prion protein (Nobel 1997); PrP has NO nucleic acid.",
        "Codon-129 M/V polymorphism shapes phenotype in both sporadic and variant disease.",
        "No treatment exists — pentosan, quinacrine, PRN-100/doxycycline lines all failed or unproven; management = diagnosis, comfort, family.",
        "NOT contagious by ordinary contact — special handling only for brain/spinal/CSF and lymphoid tissue; prion-specific instrument sterilisation for neurosurgery and autopsy.",
        "One in five 'CJD-suspects' in published series proves treatable — the exclusion-before-label rule.",
        "Myoclonus in delirium and metabolic states is a hundred-fold commoner than prion disease — the myoclonus ≠ CJD trap.",
      ],
      pyqConcepts: [
        "The Heidenhain visual variant — cortical blindness as the first sign.",
        "Iatrogenic CJD: the growth-hormone and dura-mater cohorts; the decades-long incubation arithmetic.",
        "Why standard autoclaving fails — the sterilisation question in infection-control vivas.",
        "The anti-NMDA rescue as the system's moral — the mimic that must be excluded first.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 63-year-old retired railway clerk in Nagpur: four weeks of 'he's become silent, sits facing the wall' after his brother's death, treated as bereavement-depression; two weeks later switching on the stove at 3 a.m., misrecognising his wife, and a startle at the door sending both arms flying; profound attention collapse with bilateral myoclonus on tap; DWI-MRI (asked for by name): cortical ribboning and bright basal ganglia; CSF at the referral centre sealing it; counselled on a Thursday, dead at home eleven weeks later — the sporadic-form answer given to the testing question (nothing to inherit), and the two floor-bed sons screened for their own emerging depression.",
        "A 21-year-old engineering student in Ernakulam: six weeks of insomnia, panic-like spells, then disorientation and episodes of 'barking words that aren't hers'; an outside label of acute psychosis and a family arranging a faith-healing ceremony; the admitting team holding the line — young rapid cognitive-plus-psychiatric decline is a medical work-up: MRI near-normal, CSF returning anti-NMDA receptor antibody positive, pelvic imaging finding the ovarian teratoma; steroids, tumour removal, rehabilitation — eight months later she re-enrolled.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The fastest dementia psychiatry meets: sporadic CJD (weeks-to-months tempo).",
        "The triad: rapid dementia + myoclonus + periodic EEG complexes.",
        "Variant CJD: young, psychiatric-first, pulvinar sign, BSE-era beef.",
        "RT-QuIC = the specific CSF seeding assay; 14-3-3 = sensitive, non-specific.",
        "Not contagious by ordinary contact; no vaccine possible; no treatment exists.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The tempo question is the highest-yield sentence in the dementia clinic: 'when exactly was he last himself?' — the dated answer sorts the differential before any test is ordered.",
        "The mimic discipline is the ethics of this diagnosis: the anti-NMDA and Hashimoto's rescues are the happiest endings the differential owns — treat on suspicion, exclude before labelling, and let the one-in-five arithmetic justify every lumbar puncture.",
        "The family conference is the treatment: the trajectory (months, honestly), the contagion answer (no, with examples), the morphine conversation held early, and the sons' and daughters' own screens booked — the caregiver crash-course delivered as medicine.",
        "The infection-control precision protects the patient's last months from the isolation nobody required: ordinary living is safe, and the utensil separation the household self-imposes is the harm to actively prevent.",
        "The genetic tier is a psychiatric consultation in itself: the at-risk relative's decision about predictive PRNP testing, the penetrance numbers, and the respect owed to the families who decline testing because an existing death taught them more than a genotype could.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The decline called depression",
      presentation: "Four weeks of 'he sits facing the wall' after his brother's death — treated as grief, until the stove at 3 a.m. and the startle that sent both arms flying.",
      initialPresentation: "A 63-year-old retired railway clerk in Nagpur was brought by his sons after four weeks of being 'silent, sitting facing the wall' following his brother's death. A clinic had treated it as bereavement-depression. Two weeks later he was found switching on the stove at 3 a.m., misrecognising his wife, and a startle at the door had sent both his arms flying. The sons now reported he had become disoriented within the same month that the 'depression' label was written.",
      history: "Retired clerk, previously independent; onset clearly dated to weeks after the brother's death (the confounding grief); no prior psychiatric history; rapid progression: withdrawal → sleep inversion → disorientation → misrecognition within six weeks; no fevers, no drug changes; family asking 'should we all get tested?'",
      examination: "Profound attention collapse (could not hold the interview's thread); bilateral myoclonus elicited on tap; startle-myoclonus at the door; cerebellar and pyramidal signs appearing; no fever or meningism.",
      diagnosis: "Sporadic Creutzfeldt-Jakob disease — cortical ribboning and bright basal ganglia on DWI-MRI (asked for by name), CSF markers at the referral centre confirming; the mimic screen run clean alongside.",
      management: "The family conference on a Thursday: the honest trajectory, the not-contagious answer with examples, the home-care plan (rented hospital bed, turning schedule, the family doctor's morphine agreement); myoclonus comfort with clonazepam; the sporadic-form answer to the testing question (nothing to inherit); the two floor-bed sons screened for their own emerging depression.",
      outcome: "He died at home eleven weeks later, nursed by the family, without the isolation households sometimes self-impose; the sons' screens caught one emerging depression early and treated it.",
      teachingPoints: [
        "Grief and depression are the default first labels — the TEMPO is the tell; a dementia that completes between two OPD visits is a same-day MRI.",
        "'Ask for DWI' is a clinical skill, not a radiologist's property — routine sequences miss the ribbon.",
        "The family's questions (contagion, testing, duration) deserve specific written answers — they outlast the patient and treat the survivors.",
      ],
    },
    {
      title: "The mimic that got rescued",
      presentation: "A 21-year-old 'acute psychosis' with barked words that weren't hers — and a family arranging the ceremony instead of the lumbar puncture.",
      initialPresentation: "A 21-year-old engineering student in Ernakulam presented via her family after six weeks of insomnia, panic-like spells, then disorientation and episodes where she 'barked words that weren't hers'. An outside clinic had labelled acute psychosis; the family had begun arranging a faith-healing ceremony. The admitting team held the line: young rapid cognitive-plus-psychiatric decline is a medical work-up, not a referral to the temple.",
      history: "Six weeks from insomnia to panic-like spells to disorientation and the barked-word episodes; no prior psychiatric history; no fever documented; no substance use; family initially resistant to hospital admission ('it is a spiritual matter') and persuaded by the tempo.",
      examination: "Disoriented with fluctuating attention; episodic vocal and motor dyscontrol; no focal neurological deficit; the autonomic observations unremarkable; pelvic examination deferred to imaging.",
      diagnosis: "Anti-NMDA receptor antibody encephalitis with ovarian teratoma — the treatable mimic of variant CJD's psychiatric-first script: MRI near-normal, CSF antibody panel positive, pelvic imaging finding the teratoma.",
      management: "Steroids and tumour removal followed by rehabilitation; the psychiatric label formally retired; the family counselled on the illness's immunological nature and the relapse-watch plan.",
      outcome: "Eight months later she re-enrolled in her engineering course — the rescue that justifies the entire mimic discipline of the rapid-dementia work-up.",
      teachingPoints: [
        "This is the illness prion disease masquerades as at this age — and vice versa; the CJD label must be EARNED by exclusion.",
        "'Psychosis of new onset with any cognitive flag' is a lumbar-puncture-and-antibody situation — the discipline that protects the young protects the old.",
        "The same week the family was arranging the ceremony, the antibody panel was drawing — the tempo argument is what persuades; use it.",
      ],
    },
  ],
  clinicalPearls: [
    "Tempo is the signature: a dementia that declares itself fully between two consecutive OPD visits — Alzheimer's measures in years, prion disease between appointments.",
    "The classic triad: rapidly progressive dementia + myoclonus + periodic EEG sharp-wave complexes.",
    "Sporadic ~85% (chance misfolding — no food, habit or contact risk), familial 10–15% (PRNP: E200K, P102L/GSS, D178N/FFI), acquired rare (growth hormone, dura grafts, BSE-era beef, kuru).",
    "A shape, not a creature: no DNA or RNA — the template conversion resists autoclaving and defeats vaccine logic because the enemy wears the body's own protein.",
    "The investigation ladder: DWI/FLAIR MRI (ribbon, basal ganglia; pulvinar in variant) > RT-QuIC (specific — the disease's own mechanism in glass) > 14-3-3/tau (sensitive, non-specific) > EEG (classic, late).",
    "Ask for DWI BY NAME: routine sequences miss the ribbon — the district MRI's commonest false-negative.",
    "Variant CJD = the psychiatric script: young, anxiety/depression/personality change months before neurology, painful sensory symptoms, ataxia before dementia, the pulvinar sign, tonsil biopsy positive.",
    "One in five CJD-suspects in published series is treatable — the anti-NMDA and Hashimoto's rescues justify the entire mimic work-up.",
    "Myoclonus in delirium and metabolic states is a hundred-fold commoner than prion disease — the trap the examiners love.",
    "No disease-modifying treatment exists: pentosan, quinacrine, PRN-100/doxycycline all failed or remain unproven — comfort, counselling and family care are the management.",
    "NOT contagious by ordinary contact: touch, plates, rooms, tears, kissing — special handling only for brain, spinal, CSF and lymphoid tissue during procedures.",
    "FFI = D178N thalamus, untreatable insomnia with dream-filled waking and autonomic storms; GSS = P102L, ataxia-first, years; kuru = the fore tribe's funeral cannibalism, Gajdusek's Nobel.",
    "The Indian tier: under-recognition not low incidence — the 'rapid Alzheimer's' label without work-up is the real risk; RT-QuIC at few centres; the home-care arc as the national prion service.",
  ],
  highYieldSummary: [
    "Definition: prion diseases = a family of fatal neurodegenerative illnesses caused by a misfolded prion protein that templates normal PrP into its own image (no nucleic acid); sporadic CJD ~85%, familial (PRNP) 10–15%, acquired forms rare and historical (iatrogenic tissue, BSE-era beef, kuru).",
    "Epidemiology: 1–1.5 per million per year, peak 60–70; variant CJD's ~230 UK-era cases (young, psychiatric-first); India: no registry, under-recognition the rule — the practical epidemiology is that the MIMICS outnumber the prion cases at every clinic.",
    "Mechanism: shape-that-recruits (template conversion, spongiform change + gliosis, autoclave-and-vaccine-resistant); where-it-lands-writes-the-script (cortex = fastest dementias; basal ganglia = movement chaos; thalamus/FFI = fatal insomnia; cerebellum/GSS = ataxia-first).",
    "Clinical: sporadic script (weeks-to-months cognitive collapse + myoclonus + neurological quicksand + behavioural shading that meets psychiatry first); variant script (young, psychiatric-first with painful sensory symptoms, ataxia before dementia); FFI (insomnia, dream-waking, autonomic storms); GSS (ataxia years before dementia).",
    "Diagnosis: the converging triangle — tempo + investigations (DWI-MRI ribbon/basal ganglia/pulvinar; EEG periodic complexes late; CSF 14-3-3/tau sensitive-but-nonspecific; RT-QuIC specific) + MIMIC EXCLUSION (autoimmune/anti-NMDA, Hashimoto's, paraneoplastic, neurosyphilis/HIV, vascular, subdural/NPH, toxic-metabolic, rapid AD/DLB) — the label is earned by exclusion.",
    "Management: no disease-modifying option exists — the discipline is diagnostic (confirm + exclude, DWI named, referral triangle), the comfort tier (clonazepam/valproate/levetiracetam for myoclonus; cautious sedation; morphine-class analgesia as standard late-phase care), the family enterprise (honest months-not-years trajectory, caregiver crash-course, the not-contagious answer, feeding conversations early), and genetic counselling for the familial forms (predictive PRNP testing as a full consultation; most at-risk adults decline).",
    "Infection control: precise, not panicked — ordinary contact safe; tissue-discipline for brain/spinal/CSF/lymphoid only; prion-specific instrument sterilisation for neurosurgery and autopsy; blood-donation deferrals as variant-era policies.",
    "The Indian tier: the district→medical-college→national-centre cascade (NIMHANS/AIIMS/PGI); RT-QuIC at few centres; MRI ₹3,000–15,000 tier; the home-care arc (rented bed, family turning schedules, the family doctor's morphine) as the standard service delivered unsupported — and the diagnostic risk (the missing DWI, the unexamined mimic, the 'rapid Alzheimer's' label) as the correctable failure.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "prion-quiz-1",
      question: "The single most differentiating clinical feature of sporadic CJD among the dementias is:",
      options: ["Age above 70", "Tempo: a dementia that completes its decline over weeks-to-months", "Early urinary incontinence", "Family history in 85%"],
      correctIndex: 1,
      explanation: "Speed is the signature: Alzheimer's measures in years, prion disease between two appointments.",
      afterSectionId: "symptoms",
    },
    {
      id: "prion-quiz-2",
      question: "A 25-year-old with three months of depression-like withdrawal, limb pains, then stumbling gait and cognitive slips. Before any psychiatric label settles, you must exclude:",
      options: ["Adjustment disorder", "The full rapid-dementia mimic work-up (especially treatable encephalitides and variant CJD)", "Adult ADHD", "Simple schizophrenia"],
      correctIndex: 1,
      explanation: "The script matches variant CJD's opening — but the discipline is the same: MRI plus CSF and the antibody panel, because anti-NMDA lives at this age too.",
      afterSectionId: "differential",
    },
    {
      id: "prion-quiz-3",
      question: "RT-QuIC earns its diagnostic status because it is:",
      options: ["A rapid bedside EEG technique", "A CSF seeding assay — highly specific to prion disease", "A specific MRI sequence", "A gene test for PRNP"],
      correctIndex: 1,
      explanation: "The test that reproduces the disease's own mechanism in glass; specificity is its selling point against the non-specific 14-3-3.",
      afterSectionId: "diagnosis",
    },
    {
      id: "prion-quiz-4",
      question: "Family sharing meals, beds and tears with the patient at home. Your infection-control instruction is:",
      options: ["Isolation room, mask and separate utensils", "Ordinary living is safe; special tissue-handling rules apply only to brain/spinal/CSF contact in procedures", "No kissing, only hand-holding", "The children should be tested monthly for a year"],
      correctIndex: 1,
      explanation: "No social transmission route exists — the panic (and the utensil separation Indian households sometimes self-impose) is the harm to prevent.",
      afterSectionId: "management",
    },
    {
      id: "prion-quiz-5",
      question: "In fatal familial insomnia, the defining early features are:",
      options: ["Seizures and stroke-like episodes", "Untreatable insomnia with dream-like intrusions into waking plus autonomic storms (D178N thalamic lineage)", "Myoclonus followed by blindness", "Personality change and laughter fits"],
      correctIndex: 1,
      explanation: "The sleep-relay hub is the target; laughter belongs to kuru's description, not FFI.",
      afterSectionId: "mechanism",
    },
    {
      id: "prion-quiz-6",
      question: "Among published rapid-progression 'CJD suspect' series, roughly one in five proved to have:",
      options: ["Lewy body dementia", "A treatable mimic — hence the exclusion-before-label rule", "Normal pressure hydrocephalus only", "Epilepsy only"],
      correctIndex: 1,
      explanation: "The moral arithmetic of the whole course: the rescue rate justifies the entire mimic work-up.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Explain the prion mechanism in four sentences without using the words virus or infection — then explain to a family why the patient is not contagious.", answer: "A normal brain protein flips into a wrong shape that is sticky and stable. The wrong shape is a template: it presses normally-shaped prion proteins into its own image, one becoming two, two becoming four — exponentially, like a crystal seeding a supersaturated solution. The misfolded form resists the enzymes that clear normal proteins, so it accumulates; the neurons hosting it die, leaving spongy holes and scarring. That is the whole disease — a shape spreading, no germ anywhere in it. And that is why the family is safe: the process happens inside the patient's own brain; nothing in touch, plates, rooms, tears or kissing can carry it — the special precautions belong only to brain, spinal and related tissue during procedures.", topic: "Mechanism" },
    { question: "State the tempo difference among Alzheimer's, vascular dementia and sporadic CJD — and which pattern sits between two consecutive OPD visits?", answer: "Alzheimer's: insidious years — the decline measured across school terms and grandchild visits, with the family compressing the timeline in retrospect. Vascular dementia: stepwise months-to-years — discrete drops with plateaus between, hypertension and strokes in the history. Sporadic CJD: weeks to a few months — forgetfulness on Monday, disorientation by the month, mute and bed-bound by the season; the dementia that declares itself fully between two consecutive OPD visits. The tempo question ('when exactly was he last himself?', with dates) sorts the differential before any test is ordered — the highest-yield single sentence in the dementia clinic.", topic: "Diagnosis" },
    { question: "Name the three investigations and their signatures (MRI, EEG, RT-QuIC).", answer: "MRI brain (DWI/FLAIR) — the workhorse: bright ribbon-like cortical signal (cortical ribboning) plus basal-ganglia brightness; in variant CJD the pulvinar sign (the bright posterior thalamus, hockey-stick pattern); the greatest single diagnostic weight in India — and DWI must be asked for by name because routine sequences miss the ribbon. EEG — periodic sharp-wave complexes: the classic exam answer, present in a majority of late sporadic cases but neither early nor specific. RT-QuIC (real-time quaking-induced conversion) — the CSF seeding assay: the patient's CSF seeds a shaking tube of normal prion protein, and if it converts, light shows — highly specific, the closest thing to a living confirmation (with 14-3-3 and total tau as the sensitive-but-non-specific older tier, raised in any rapid neuronal death).", topic: "Diagnosis" },
    { question: "List five TREATABLE mimics of rapid dementia, with the one screening action each demands.", answer: "(1) Autoimmune encephalitis (anti-NMDA and cousins) — the CSF antibody panel (plus pelvic imaging for the teratoma in young women); (2) Hashimoto's encephalopathy — thyroid antibodies with the steroid-trial response; (3) Paraneoplastic limbic encephalitis — the cancer screen (CT chest/abdomen, tumour markers); (4) Neurosyphilis and HIV — serology and CSF studies; (5) Chronic subdural and NPH — the imaging that surgery answers (head-injury history; gait-first triad). Honorable mentions the same panel catches: B12, thyroid, heavy metals, drug toxicity — the bloodwork tier. The rule each one writes: treat the mimic before settling the prion.", topic: "Differential" },
    { question: "Give the five phenotypes one line each: sporadic CJD, variant CJD, FFI, GSS, kuru.", answer: "Sporadic CJD — the sixties' weeks-to-months cognitive collapse with myoclonus and the ribbon on MRI; ~85% of prion disease. Variant CJD — the young psychiatric-first script (anxiety, depression, personality change for months), painful sensory symptoms, ataxia before dementia, the pulvinar sign, the UK-era beef exposure; ~230 cases total. FFI (fatal familial insomnia) — the D178N thalamic lineage: untreatable insomnia with dream-filled waking, autonomic storms, attention collapse over a year-plus; familial, dominant. GSS — the P102L family: ataxia-first, running years, dementia late. Kuru — the fore people's tremor-and-laughter disease, spread by funeral cannibalism, extinguished by the 1950s interventions; Gajdusek's Nobel (1976) proving human-to-human transmission decades after exposure.", topic: "Diagnosis" },
    { question: "What do you tell the family about (a) testing the children, (b) sharing utensils, (c) the surgical instruments?", answer: "(a) In the sporadic form — most cases — nothing to inherit: no, the children need no test. In the rare familial forms, the question deserves a dedicated genetic-counselling session: a positive test in an adult without symptoms currently offers no prevention, and most at-risk adults decline — knowing what would help a relative decide is itself the counselling. (b) Ordinary living is safe: shared plates, beds and tears transmit nothing; the utensil separation the household sometimes self-imposes is the isolation harm to prevent. (c) The special rules belong to procedures: neurosurgical and autopsy instruments need prion-specific sterilisation, and brain, spinal, CSF and lymphoid tissue get special handling — that is the whole story of contagion in this disease.", topic: "Indian practice" },
    { question: "Why can there never be a conventional prion vaccine?", answer: "Because a vaccine teaches the immune system to recognise something FOREIGN — a virus's protein coat, a bacterium's sugar — and the prion wears the body's own protein, merely in the wrong shape. There is nothing foreign to show the immune system, no surface it can learn as non-self; the misfolded form's danger lies in conformation, not composition. The same logic explains the sterilisation failure (standard autoclaving cannot 'kill' what was never alive in the germ sense — the shape survives heat) and the absence of any immune war in the tissue: no inflammation beyond gliosis, no antibody response to find. Prusiner's prion concept (Nobel 1997) is exactly this answer written in protein chemistry.", topic: "Mechanism" },
  ],
  faqs: [
    { question: "Can we catch it from him — sharing his plate, holding his hand?", answer: "No. Ordinary contact — touch, plates, rooms, tears, kissing — transmits nothing. The special precautions apply only to brain, spinal and related tissues during procedures. Your family's daily life is safe exactly as it is." },
    { question: "Was it something he ate — the mutton, the fast food?", answer: "In the sporadic form, which is most cases: no food, no habit, nothing known. The beef link belongs to a different form (variant CJD) from a specific UK-era exposure; eating beef in India today carries no identified prion risk." },
    { question: "Is it hereditary? Should our children be tested?", answer: "In the sporadic form: no. In the rare familial forms, the question deserves a dedicated genetic-counselling session — a positive test in an adult without symptoms currently offers no prevention, and helping a relative decide is itself the counselling." },
    { question: "Is there any tablet that slows it?", answer: "Honestly, none exists — anything claimed otherwise is a research story, not a prescription. What we can do, and will do, is keep him comfortable, treat the jerks and the distress, and stand with the family." },
    { question: "The doctor said 'periodic complexes' on the EEG. Is that the diagnosis?", answer: "It is strong supporting evidence, not a verdict by itself — the MRI and the special CSF tests carry more weight today, and the treatable lookalikes are checked first." },
    { question: "Why does he jump when the door slams?", answer: "The startle reflex has lost its gate; the jerks are the same disease seen from the muscle side. We quieten them with medicine, but they are not seizures of the epilepsy kind." },
    { question: "How long do we have, doctor, honestly?", answer: "Most people with the common form are lost within about a year, often less, from the first clear decline. Planning the home care and the goodbyes sooner rather than later is the kindness — and the morphine question can be answered before the suffering forces it." },
    { question: "He died of it. Can the autopsy be done for the family's answers?", answer: "It can, at centres equipped for it, with strict instrument rules — and the funeral rites carry no prion risk at all. For most families, the imaging-and-CSF diagnosis during life has already closed the question." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO infection-control guidance on prion diseases — instrument and tissue handling standards" },
      { source: "Modern CJD diagnostic criteria (the MRI-and-RT-QuIC weighting era; the old EEG-only era closed)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Atarashi R, Sano K, Satoh K — RT-QuIC development and validation for sporadic CJD CSF (2011 onward)" },
      { source: "The antiprion trial ledger — pentosan, quinacrine, PRN-100/doxycycline lines: failed or unproven" },
    ],
    reviews: [
      { source: "Creutzfeldt HG, Jakob A — the original case descriptions (1910s–20s); Prusiner SB — the prion protein hypothesis (1982 onward, Nobel 1997); Gajdusek DC, Zigas V — kuru field studies and transmissibility (Nobel 1976)" },
      { source: "Will RG, Ironside JW et al. — the variant CJD surveillance case definitions (Lancet 1996)" },
      { source: "Zerr I, Kallenberg K et al. — MRI (FLAIR/DWI) and CSF (14-3-3, tau) diagnostic-accuracy studies in the German surveillance network" },
      { source: "Vitali P et al. / Geschwind MD — the imaging phenotypes and the US rapid-dementia mimic series (the one-in-five treatable finding)" },
      { source: "Brown P, Preece M et al. — iatrogenic CJD cohorts and incubation arithmetic; Medori R, Montagna P, Gambetti P et al. — fatal familial insomnia and the D178N/codon-129 haplotype; Mastrianni JA — the genetic prion spectrum (GSS, familial CJD)" },
      { source: "Indian context — NIMHANS and medical-college CJD case-series literature: the recognition-and-availability picture" },
    ],
    patientResources: [
      { source: "The family conference scripts — trajectory, contagion, testing and morphine — the four conversations this course hands to every family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for the relatives' distress through the months and after" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: what is happening, why the family is safe, the honest timeline, the home-care craft.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The prion concept, the classic triad, the investigation ladder and the mimic discipline.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "40 min",
      description: "Everything — the mimic discipline, the family enterprise, the infection-control precision, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The shape that recruits, the three routes, the tempo signature.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the prion concept without the words virus or infection, and explain why no vaccine is possible." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The crystal-seed cascade, the phenotype map, the rescue pathway.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain where-it-lands-decides-the-script and why the tempo is weeks-to-months." },
    { number: 3, title: "Clinical Practice", description: "The classic and variant scripts, the converging triangle, the mimic work-up first.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can order the investigation ladder, name five treatable mimics, and hold the exclusion-before-label rule." },
    { number: 4, title: "Indian Context", description: "The under-recognition tier, the referral cascade, the home-care arc, the contagion script.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can name the DWI sequence on the request form and deliver the not-contagious answer with examples." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 62-year-old-with-jerks viva in order and spot every trap question in the set." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Creutzfeldt HG, Jakob A — the original case descriptions; Prusiner SB — the prion protein hypothesis (Nobel 1997); Gajdusek DC, Zigas V — kuru field studies and transmissibility (Nobel 1976)", sourceType: "primary", year: "1910s–1997", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Will RG, Ironside JW et al. — the variant CJD surveillance case definitions and descriptions (Lancet 1996)", sourceType: "primary", year: "1996", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Zerr I, Kallenberg K et al. — MRI (FLAIR/DWI) and CSF (14-3-3, tau) diagnostic-accuracy studies in the German surveillance network", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Atarashi R, Sano K, Satoh K — RT-QuIC development and validation for sporadic CJD CSF", sourceType: "primary", year: "2011 onward", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Vitali P et al. / Geschwind MD — the imaging phenotypes and the US rapid-dementia mimic series (the one-in-five treatable finding)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Brown P, Preece M et al. — iatrogenic CJD cohorts (growth hormone, dura mater) and incubation arithmetic; Medori R, Montagna P, Gambetti P et al. — fatal familial insomnia and the D178N haplotype; Mastrianni JA — the genetic prion spectrum", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "WHO infection-control guidance on prion diseases — instrument and tissue handling standards", sourceType: "who", year: "1990s onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "The antiprion trial ledger — pentosan, quinacrine, PRN-100/doxycycline lines: failed or unproven", sourceType: "trial", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Indian context — NIMHANS and medical-college CJD case-series literature; the recognition-and-availability picture; referral and cost realities (approx 2026)", sourceType: "review", year: "1990s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Prion concept: a misfolded host protein (no nucleic acid) that templates normal PrP into its own image, causing spongiform change and gliosis — resistant to standard autoclaving, with no conventional vaccine possible (nothing foreign for the immune system to recognise).", grade: "established", sources: ["S2"] },
    { text: "The three routes: sporadic misfolding ~85% (no behavioural, dietary or contact risk — the family's 'was it the mutton/vaccine?' questions answered no), inherited PRNP mutations 10–15% (autosomal dominant with variable penetrance: E200K, P102L/GSS, D178N/FFI; codon-129 M/V shaping phenotype), acquired rare (growth-hormone and dura-mater cohorts, UK-era BSE beef, kuru's funeral cannibalism).", grade: "established", sources: ["S2", "S7"] },
    { text: "Epidemiology: sporadic CJD 1–1.5 per million per year, peak 60–70, no sex difference, no demonstrated environmental cause; variant CJD ~230 cases worldwide from 1996 (young, UK BSE-era exposure; incubation possibly decades with a few blood-transmission cases in the tail).", grade: "established", sources: ["S3", "S7"] },
    { text: "The classic clinical script: rapidly progressive dementia (weeks-to-months — the signature tempo), myoclonus worsened by startle, cerebellar/extrapyramidal/pyramidal signs, visual and aphasic variants, behavioural and psychiatric shading early (why psychiatry sees these patients first); death typically within a year.", grade: "established", sources: ["S1", "S4"] },
    { text: "Variant CJD's script: young patients (teens–forties), psychiatric-first onset (anxiety, depression, withdrawal, personality change months before neurological signs), painful sensory symptoms, then ataxia, chorea/dystonia, cognitive decline — the pulvinar sign on MRI and the positive tonsil biopsy (lymphoid tissue) distinguishing it from sporadic.", grade: "established", sources: ["S3"] },
    { text: "The investigation ladder: DWI/FLAIR MRI (cortical ribboning + basal-ganglia brightness; pulvinar in variant — the workhorse, with the clinical skill of requesting DWI by name) > RT-QuIC (the CSF seeding assay, highly specific — the closest thing to living confirmation) > 14-3-3/total tau (sensitive, non-specific — raised in any rapid neuronal death) > EEG (periodic sharp-wave complexes — classic, late, not specific).", grade: "established", sources: ["S4", "S5"] },
    { text: "The mimic discipline: roughly one in five real-world CJD-suspects proves treatable — autoimmune encephalitides (anti-NMDA and cousins), Hashimoto's, paraneoplastic, neurosyphilis/HIV, vascular, chronic subdural/NPH, toxic-metabolic — the rule: a rapid dementia gets MRI + CSF + the mimic screen BEFORE it gets a CJD label.", grade: "established", sources: ["S6"] },
    { text: "No disease-modifying treatment exists: the antiprion trial lines (pentosan, quinacrine, PRN-100/doxycycline) have failed or remain unproven — management is accurate diagnosis, symptom comfort (myoclonus: clonazepam/valproate/levetiracetam; late-phase morphine-class analgesia as standard), and family care.", grade: "established", sources: ["S9"] },
    { text: "Infection control, precise not panicked: no social transmission route exists (touch, plates, rooms, tears, kissing all safe); special handling applies only to brain, spinal-cord, CSF and lymphoid tissue; prion-specific sterilisation for neurosurgical and autopsy instruments; variant-era blood-donation deferral policies.", grade: "established", sources: ["S8"] },
    { text: "The Indian tier: no national surveillance registry (incidence almost certainly under-recognised — the rapidly declining elder labelled 'stroke', 'senility' or 'advanced Alzheimer's' without MRI or CSF); RT-QuIC limited to few centres; the district→medical-college→national-centre referral cascade; the home-care arc as the standard service; the diagnostic risks (the missing DWI, the unexamined mimic) as the correctable failure.", grade: "supported", sources: ["S10"] },
    { text: "The familial tier's counselling architecture: predictive PRNP testing in an at-risk adult is a full psychiatric consultation (a positive test currently offers no prevention); most at-risk adults at present decline testing — the dedicated session and the family's own arithmetic are the intervention.", grade: "supported", sources: ["S7"] },
  ],
};
