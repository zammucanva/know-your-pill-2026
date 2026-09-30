import type { PsychiatryCourse } from "./types";

/**
 * NEUROIMAGING — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/neuroimaging.md — untouched
 * foundation), source_map lineage: NOTP 2e (2009)
 * chs 2.3.6 + 2.3.7 + 2.3.8 (Parts 1-2, the chapter runs
 * across the part boundary — combined) — original rewrite of
 * PET/SPET radiotracers and psychiatric findings, structural
 * MRI methodology, and Bullmore & Suckling's fMRI synthesis —
 * re-researched against the lineages the note itself cites
 * (Roy & Sherrington's neurovascular coupling, Farde's D2-
 * occupancy thresholds, Frith and Fletcher's paced-verbal-
 * fluency studies, Weinberger's hypofrontality and Wisconsin-
 * card-sort tradition and the Weinberger-Berman cortical-
 * inefficiency framework, Shenton's temporal-lobe and
 * hippocampal meta-analytic tradition, Johnstone's 1976 CT
 * ventricular-enlargement discovery, Ogawa and Kwong's BOLD
 * discovery papers, the Tamminga-line connectivity literature)
 * with per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no medication any role
 * (the D2-occupancy thresholds are imaging-derived
 * pharmacology about antipsychotics, and no antipsychotic
 * exists among KYP's 12 drug lessons; the antidepressant
 * drug-occupancy line is named only through ligands, never
 * through a drug KYP teaches); drugLinks is empty by design
 * and the boundaries are recorded in contentGaps, never
 * invented.
 */
export const neuroimagingCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "neuroimaging",
  title: "Brain Imaging in Psychiatry",
  shortName: "Neuroimaging",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Brain Imaging in Psychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "PET, SPET and MRI windows on the living brain — what scans show and what they cost",

  summary:
    "Psychiatric neuroimaging runs on PET, SPET and MRI — three windows on receptors, blood flow, metabolism and anatomy. This course teaches the physics, the replicated findings, and the honest limits: group-level differences, never diagnostic tests.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe PET and SPET methodology end to end: cyclotron isotope production with the half-lives, radiotracer injection at pharmacologically inert microgram doses, annihilation-coincidence detection, and quantitative modelling into receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism.",
    "Explain the division of labour: PET as the research standard (tracer diversity and quantitation, with the hot-cell radiochemistry burden) and SPET as the clinical-deployment option (simplicity and cost), with millimetre-level resolution and SPET somewhat coarser.",
    "Name the psychiatric radiotracers and their logic: the dopamine D2/D3 ligands ([11C]raclopride, [11C]FLB 457, IBZM, epidepride) and the antipsychotic-occupancy thresholds (about 65% for effect, about 80% for extrapyramidal symptoms); the 5-HT1A, 5-HT2A and transporter ligands.",
    "Summarise the schizophrenia PET findings: hypofrontality's presence in about 50% of resting-state studies and its modifiers (task nature and demands, patient performance, negative symptoms); the cortical-inefficiency counter-model; poverty of speech reducing left-DLPFC flow irrespective of diagnosis.",
    "Outline MRI physics — T1 and T2 relaxation, the spin-echo sequence, gradient spatial encoding — and state why the visible grey-matter, white-matter and CSF contrast at millimetre resolution is the outstanding MRI advantage, repeatable across an illness course without radiation.",
    "State the replicated structural findings in schizophrenia (lateral ventricular enlargement, temporal-lobe and hippocampal volume reduction) with their interpretation debates — static neurodevelopmental lesions versus progressive tissue loss, and the medication and sampling confounds.",
    "Walk the BOLD chain from stimulus to signal — neurovascular coupling, the 3-8 second delay, the deoxyhaemoglobin dilution, the signal changes of 3% or less — and list the artefacts with their regions: movement, susceptibility (inferior temporal, orbitofrontal), the speaking confound.",
    "Apply the interpretation disciplines — sampling (hospital versus population), the confound of performance-matching, the state-trait distinction — and state fMRI's honest clinical position: research tool, not yet test, with the hemispheric-dominance exception.",
  ],
  quickFacts: [
    { label: "The detection", value: "Annihilation coincidence", detail: "PET's emitted positrons annihilate with electrons, producing two 180-degree-opposed gamma rays detected by coincidence-linked crystal pairs — localisation to the inter-detector volume is the physical basis of three-dimensional quantitative imaging" },
    { label: "The isotope clock", value: "2.03 min to 6.02 h", detail: "PET's cyclotron trio: 15O (2.03 min), 11C (20.4 min), 18F (109.8 min); SPET's longer-lived pair: 99mTc (6.02 h) and 123I (13.2 h) — microgram masses with no pharmacological effect" },
    { label: "The prescribing rule", value: "65 / 80", detail: "Striatal D2 occupancy of about 65% for antipsychotic effect, with extrapyramidal symptoms emerging beyond about 80% — the imaging-pharmacology bridge that explains dose-response ceilings (risperidone beyond ~6 mg adds side effects, not benefit)" },
    { label: "The hypofrontality figure", value: "~50% of resting studies", detail: "Found in about half of resting-state studies and more often in activation paradigms; most pronounced with negative symptoms; poverty of speech reduces left-DLPFC flow irrespective of diagnosis — symptoms, not diagnoses, drive blood flow" },
    { label: "The structural findings", value: "Ventricles and hippocampus", detail: "Lateral ventricular enlargement — among the most replicated findings in biological psychiatry, the CT-era discovery of 1976 confirmed and quantified by MRI; hippocampal atrophy macroscopically visible in about one-third of patients, associated with the memory impairments" },
    { label: "The MRI advantage", value: "Grey-white-CSF contrast", detail: "T1/T2 relaxation and the spin-echo sequence deliver tissue contrast at ~0.5-2 mm voxel resolution at 1.5T — the anatomical examination without radiation, repeatable across an illness course" },
    { label: "The BOLD numbers", value: "3-8 s delay, ≤3% signal", detail: "Neural activity raises local blood flow 3-8 seconds after stimulus onset without commensurate oxygen uptake, diluting paramagnetic deoxyhaemoglobin and prolonging T2* — an indirect, delayed, small index of activation" },
    { label: "The blind spot", value: "Orbitofrontal and inferior temporal", detail: "The susceptibility artefact (signal loss near bone and sinuses) blinds fMRI precisely to the frontal-temporal territories psychiatry most wants — compounded by speaking (sinus deformation mimicking activation); images are not acquired during articulation" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The findings' home territory — hypofrontality, ventricular enlargement, hippocampal volume loss, the excessive amphetamine-challenge dopamine release" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The serotonergic imaging findings — reduced 5-HT1A availability in depression and anxiety; the transporter ligands in the depression and treatment studies" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The dementia workup — structural imaging's lesion-exclusion read and atrophy mapping; the diagnostic integration lives in the dementia courses" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The subcortical and white-matter hyperintensity findings of late-life depression — the vascular-depression connections the note explicitly routes here" },
    { label: "Neuroendocrinology in Psychiatry", type: "condition", href: "/psychiatry/neuroendocrinology/", note: "The hippocampal-volume literature's HPA-cortisol link — the imaging finding the neuroendocrinology note explains (in-batch course)" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The scan-or-not decision belongs to the assessment — the clinical question stated before any modality is chosen (in-batch course)" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The D2/D3 receptor imaging — raclopride, FLB 457, IBZM, epidepride — and the occupancy thresholds that became prescribing logic" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "WAY 100635 for 5-HT1A, altanserin and setoperone for 5-HT2A, DASB for the transporter — the receptor systems made visible" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "Hypofrontality's address — and the cortical-inefficiency reversal when performance is matched; the left DLPFC of poverty of speech" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The volume-loss finding (visible in about one-third) and the memory impairments it travels with; the HPA-cortisol link in the affective disorders" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Psychiatric neuroimaging runs on three engines, each converting a physical signal into a physiological claim. The molecular engine (PET and SPET): a cyclotron makes the positron emitters 15O (half-life 2.03 min), 11C (20.4 min) and 18F (109.8 min) — SPET works with the longer-lived 99mTc (6.02 h) and 123I (13.2 h) — which radiochemistry incorporates into biological molecules at microgram masses with no pharmacological effect. Injected, the PET tracer's positrons annihilate with electrons, producing two 180-degree-opposed gamma rays that coincidence-linked crystal pairs detect, localising radiation to the inter-detector volume; quantitative modelling of the time-activity data then yields receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism. The anatomical engine (structural MRI): protons in a strong static field, excited by radiofrequency pulses at the Larmor frequency, relax through tissue-environment-dependent T1 (spin-lattice, longitudinal recovery) and T2 (spin-spin, transverse dephasing) processes; the spin-echo sequence (90-degree pulse, dephasing, 180-degree rephasing pulse, the echo at TE) and the slice-selective, frequency- and phase-encoding gradients build grey-matter, white-matter and CSF contrast at ~0.5-2 mm voxel resolution at 1.5T — anatomy without radiation, repeatable across an illness course. The activation engine (fMRI): neural activity is followed within about 100 ms by neurovascular coupling (Roy and Sherrington's 1894 insight; the mechanisms complex and not fully defined), local blood flow rising 3-8 seconds after stimulus onset without commensurate oxygen uptake; the oxygenated-to-deoxygenated haemoglobin ratio rises, diluting deoxyhaemoglobin's paramagnetic effect and prolonging T2* — the measurable BOLD signal, changes of 3% or less, read through gradient-echo and echo-planar sequences (whole-brain multislice in 2 seconds or less) and the general-linear-model machinery of the statistical map. Each engine carries its known vices: SPET's coarser resolution, MRI's ferromagnetic and claustrophobia limits, fMRI's movement sensitivity (submillimetre motion causes significant artefact) and its susceptibility blind spots over inferior temporal and orbitofrontal cortex — the sinus-proximity problem that blinds the method precisely to psychiatry's favourite regions.",
    steps: [
      "The isotope supply: the cyclotron's positron emitters — 15O (2.03 min), 11C (20.4 min), 18F (109.8 min) — incorporated into biological molecules at microgram masses with no pharmacological effect; SPET's longer-lived 99mTc (6.02 h) and 123I (13.2 h) trading quantitation for reach.",
      "The detection: the emitted positron annihilates with an electron, producing two 180-degree-opposed gamma rays detected by coincidence-linked crystal pairs — localisation to the inter-detector volume, the physical basis of three-dimensional quantitative imaging over minutes to hours.",
      "The quantification: time-activity data modelled into receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism — PET the research standard (tracer diversity, quantitation, the hot-cell radiochemistry burden), SPET the clinical-deployment option (simplicity, cost); resolution millimetre-level with SPET somewhat coarser.",
      "The anatomical engine: protons in the strong static field excited at the Larmor frequency, relaxing through tissue-environment-dependent T1 (spin-lattice) and T2 (spin-spin) processes — the spin-echo sequence and the gradient encoding delivering grey-white-CSF contrast at ~0.5-2 mm voxels at 1.5T, without radiation.",
      "The activation engine: stimulus, neural activity within ~100 ms, neurovascular coupling (Roy and Sherrington), local blood flow increasing 3-8 seconds after stimulus onset without commensurate oxygen uptake, deoxyhaemoglobin's paramagnetic effect diluted, T2* prolonged — the BOLD signal, changes of 3% or less.",
      "The fast sequences and designs: gradient-echo (faster than spin-echo, the flip-angle tuning) and echo-planar imaging (rapid gradient blipping, up to 128 echoes per excitation, whole-brain multislice in 2 seconds or less — rapidly-switched gradient coils, slew rates, shielding, eddy-current management); block and event-related designs analysed through the statistical parametric-mapping tradition.",
      "The vices and their remedies: movement (inevitable; submillimetre motion causes significant artefact — anxiety reduction, clear task instruction, comfort, button-press rather than speech responses); susceptibility (inferior temporal and orbitofrontal signal loss near bone and sinuses, compounded by the speaking confound — images never acquired during articulation); the usual MRI contraindications (ferromagnetic implants, claustrophobia).",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "dlpfc", name: "Dorsolateral prefrontal cortex (hypofrontality's address)", role: "The region hypofrontality names — reduced resting flow and metabolism in about half of studies and more often in activation; the left DLPFC flow reduction of poverty of speech across diagnoses; and, under performance matching, the site of the cortical-inefficiency reversal (enhanced frontal activation for the same performance).", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus and temporal lobe (the memory structure)", role: "Temporal-lobe volume reduction and hippocampal volume decrease — macroscopically visible in about one-third of patients with schizophrenia and associated with the memory impairments; in the affective disorders, the hippocampal-volume literature carrying the HPA-cortisol link.", grade: "established" },
    { id: "lateral-ventricles", name: "Lateral ventricles (the CT-era discovery)", role: "Ventricular enlargement — from the 1976 CT discovery to one of the most replicated findings in biological psychiatry; group-level and non-diagnostic, and the finding most worth quoting in a schizophrenia workup while remembering its statistical nature.", grade: "established" },
    { id: "orbitofrontal", name: "Orbitofrontal and inferior temporal cortex (the blind spot)", role: "The regions the susceptibility artefact blinds fMRI to — signal loss near bone and sinuses over precisely the frontal-temporal territories psychiatry most wants; the speaking confound compounds it (sinus deformation mimicking activation), which is why the emotional-anatomy literature must be read with regional caution.", grade: "established" },
    { id: "thalamus", name: "Thalamus and cerebellar vermis (the distributed change)", role: "The morphometric findings beyond the temporal lobe — thalamic and cerebellar vermis abnormalities in schizophrenia, part of the structural pattern that is distributed rather than focal.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The system PET made prescribable: D2/D3 receptor imaging with [11C]raclopride and [11C]FLB 457 (SPET's IBZM and epidepride), the antipsychotic-occupancy thresholds (~65% for effect, ~80% for extrapyramidal symptoms), the dopamine-synthesis-capacity ligands, the D1 ligands, and the amphetamine-challenge paradigms showing schizophrenia's excessive release.", grade: "established" },
    { name: "Serotonin", symbol: "5-HT", role: "The receptor systems made visible: [11C]WAY 100635 for 5-HT1A (reduced availability in depression and anxiety); [11C]NMSP, [18F]altanserin and [18F]setoperone for 5-HT2A; the transporter ligands ([11C]DASB and successors) in the depression and treatment studies.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The benzodiazepine-receptor ligands — the note names them as part of the psychiatric radiotracer armoury without reporting findings; taught here as the existent-but-young imaging line, never as an established result.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "tracer-pathway",
      name: "The molecular pathway (ligand to receptor to number)",
      steps: [
        { label: "Cyclotron isotope production", detail: "15O (2.03 min), 11C (20.4 min), 18F (109.8 min) for PET; 99mTc (6.02 h) and 123I (13.2 h) for SPET" },
        { label: "Radiotracer synthesis", detail: "Isotopes incorporated into biological molecules in hot cells — injected at microgram masses with no pharmacological effect" },
        { label: "Annihilation and coincidence detection", detail: "Each emitted positron annihilates with an electron, producing two 180-degree-opposed gamma rays; coincidence-linked crystal pairs localise the source to the inter-detector volume" },
        { label: "Quantitative modelling", detail: "The time-activity data modelled into receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism" },
        { label: "Clinical interpretation", detail: "The findings read with the interpretation disciplines — group level, confound-audited, state-versus-trait separated" },
      ],
      clinicalManifestation: "The D2-occupancy thresholds — about 65% striatal occupancy for antipsychotic effect and about 80% for extrapyramidal symptoms — the imaging-pharmacology bridge that explains dose-response ceilings in daily prescribing.",
      grade: "established",
    },
    {
      id: "bold-pathway",
      name: "The BOLD pathway (stimulus to signal)",
      steps: [
        { label: "Stimulus and neural activity", detail: "Neural activity within about 100 ms of the stimulus" },
        { label: "Neurovascular coupling", detail: "Roy and Sherrington's 1894 insight — the mechanisms complex and not fully defined even now" },
        { label: "Blood flow rises without oxygen uptake", detail: "Local blood flow increases 3-8 seconds after stimulus onset without commensurate oxygen extraction" },
        { label: "Deoxyhaemoglobin diluted", detail: "The oxygenated-to-deoxygenated haemoglobin ratio rises; the paramagnetic effect weakens" },
        { label: "T2* prolongation and the BOLD signal", detail: "The measurable signal change — 3% or less — acquired by gradient-echo and echo-planar sequences (whole-brain multislice in 2 seconds or less)" },
        { label: "The statistical map", detail: "Block and event-related designs analysed through the general-linear-model and multiple-comparisons machinery — the activation map, read with its artefact caveats" },
      ],
      clinicalManifestation: "The activation map — an indirect, delayed, small (under 3%) index of neural activity; blood, not thoughts — and the reason fMRI can be repeated safely but read only cautiously.",
      grade: "established",
    },
    {
      id: "clinical-scan-pathway",
      name: "The clinical scan pathway (question to modality to report)",
      steps: [
        { label: "The clinical question", detail: "Exclude a structural cause — tumour, infarct, hydrocephalus, the dementias, the leukoariosis of vascular depression" },
        { label: "Modality choice", detail: "Structural MRI the clinical workhorse; CT where MRI is unavailable (adequate for haemorrhage, large lesions, gross atrophy); the temporal-lobe protocol where epilepsy is the question; PET/SPET and fMRI research instruments" },
        { label: "Acquisition", detail: "T1/T2-weighted spin-echo sequences; voxel resolution ~0.5-2 mm at 1.5T; the MRI contraindications screened" },
        { label: "The finding read with discipline", detail: "Sampling (hospital versus population), performance-matching, the state-trait distinction, the medication confound — the apparatus that decides what a finding may claim" },
        { label: "The report", detail: "Group-level context, not individual diagnosis — the scan neither confirms nor excludes the psychiatric condition; a lesion found changes everything, a normal scan documents the exclusion" },
      ],
      clinicalManifestation: "The rational request — the Indian 'MRI brain, ?organicity' answered by a lesion-exclusion read, and the family's request for 'the scan that shows schizophrenia' honestly declined.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "roy-sherrington", time: "1890-1894", title: "The neurovascular-coupling insight", description: "Roy and Sherrington's founding observation — neural activity increases local blood flow — the physiological chain under every BOLD image, its mechanisms still complex and not fully defined a century later.", phase: "onset" },
    { id: "ct-discovery", time: "1976", title: "The CT ventricular discovery", description: "Johnstone and colleagues' original CT finding of lateral ventricular enlargement in schizophrenia — the imaging finding that opened biological psychiatry's living window and remains among its most replicated.", phase: "onset" },
    { id: "pet-pharmacology-era", time: "1980s-1990s", title: "The PET pharmacology era", description: "Farde and colleagues' D2-occupancy studies establishing the ~65%-for-effect and ~80%-for-EPS thresholds; Weinberger's early hypofrontality observations and the Wisconsin-card-sort activation tradition — the cyclotron-and-ligand research standard.", phase: "peak" },
    { id: "bold-discovery", time: "1990-1992", title: "The BOLD discovery", description: "Ogawa's and Kwong's papers — deoxyhaemoglobin's paramagnetism as the contrast agent — with echo-planar imaging delivering whole-brain multislice in 2 seconds or less: fMRI born radiation-free and repeatable.", phase: "peak" },
    { id: "morphometric-consolidation", time: "1990s-2000s", title: "The honest-reading consolidation", description: "Shenton's temporal-lobe and hippocampal meta-analytic tradition; Frith's and Fletcher's paced-verbal-fluency studies exposing hypofrontality's complexities; Weinberger and Berman's cortical-inefficiency and distributed-network frameworks — the field learning to read its own images.", phase: "duration" },
    { id: "connectivity-present", time: "Post-2009", title: "The connectivity present", description: "The connectivity and network analyses maturing after the Oxford chapters (Tamminga and successors — flagged in the note as later developments); fMRI's clinical role still limited to specialised applications such as hemispheric dominance before neurosurgery.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the imaging discipline) ---- */
  epidemiology: {
    globalPrevalence: "Structural, not numerical — this lineage surveys no populations, and the honest epidemiology is the findings' own prevalence as the note states it: hypofrontality present in about 50% of resting-state studies and more often in activation paradigms; hippocampal atrophy macroscopically visible in about one-third of patients with schizophrenia; ventricular enlargement among the most replicated findings in biological psychiatry — all group-level statistical differences, not diagnostic markers.",
    indianPrevalence: "The availability tier is the Indian epidemiology: CT everywhere, MRI in most districts, fMRI in the few research centres (the NIMHANS and metro-academic tradition), PET in psychiatry metro-research only — its oncology deployments paying the cyclotron bills. No Indian survey numbers exist in this lineage; none are invented.",
    lifetimeRisk: "Not applicable as a risk — the subject is a technology and its findings, and the honest lifetime statement is that a normal individual scan neither confirms nor excludes any psychiatric diagnosis at present resolution.",
    genderRatio: "The note's lineage reports no sex breakdown of the imaging findings — recorded as absent rather than assumed.",
    indianNotes: "Costs (approx 2026): CT head inexpensive everywhere; MRI brain in the few-thousands of rupees in public institutions (higher private); PET-CT where available is oncology-priced, out of psychiatric reach for most. The admission queues (months long in places) make the Indian first-episode window wide — the neurodevelopmental-versus-progressive questions testable on Indian cohorts, as the Indian research tradition has begun.",
  },
  etiology: [
    { category: "biological", factor: "The neurodevelopmental-versus-progressive question", details: "Imaging's structural findings are distributed rather than focal; the first-episode studies show many changes already present at presentation, while the longitudinal studies show some progression — static neurodevelopmental lesions versus progressive tissue loss, the debate the serial, radiation-free MRI examination was built to inform." },
    { category: "biological", factor: "The dopamine mechanism", details: "The amphetamine-challenge paradigms showing schizophrenia's excessive dopamine release; the D2-occupancy logic linking receptor engagement to both therapeutic effect (~65%) and extrapyramidal symptoms (~80%) — the disease mechanism the molecular window actually demonstrated." },
    { category: "biological", factor: "The affective-disorder mechanisms", details: "The hippocampal-volume literature (the HPA-cortisol link of the neuroendocrinology note) and the subcortical and white-matter hyperintensity findings of late-life depression (the vascular-depression connections of the elderly-mood note) — imaging's contribution to the mechanisms of mood disorder." },
    { category: "biological", factor: "The iatrogenic signal (the medication confound)", details: "Caudate enlargement with typical antipsychotics — a structural change caused by treatment, the confound every longitudinal imaging study must model before claiming illness progression; in India, treatment histories longer than illness recognition make it the default confound." },
    { category: "environmental", factor: "The sampling confound", details: "Hospital versus population samples — Indian tertiary samples being extreme examples of severity-filtered selection — plus the substance-misuse confounds; what a study appears to demonstrate depends on who was scanned, not only on what the scanner saw." },
  ],
  symptomClusters: [
    {
      category: "1. The structural findings (the anatomy window)",
      symptoms: ["Lateral ventricular enlargement — among the most replicated findings in biological psychiatry, the CT-era discovery confirmed and quantified by MRI", "Temporal-lobe volume reduction and hippocampal volume decrease — macroscopically visible in about one-third of patients, associated with the memory impairments", "Thalamic and cerebellar vermis abnormalities — the structural change distributed rather than focal", "In the affective disorders: hippocampal-volume reduction and the subcortical and white-matter hyperintensities of late-life depression"],
    },
    {
      category: "2. The functional findings (the activation window)",
      symptoms: ["Hypofrontality — about 50% of resting-state studies, more in activation paradigms; negative symptoms showing the strongest associations (the 30-patient resting-flow study's factor-analytic support)", "Poverty of speech reducing left-DLPFC flow irrespective of diagnosis — depression or schizophrenia, symptoms, not diagnoses, drive blood flow", "Cortical inefficiency — enhanced frontal activation when patients and controls perform at similar levels, the reformulation of hypofrontality as inefficient signal processing", "Excessive dopamine release on amphetamine challenge in schizophrenia"],
    },
    {
      category: "3. The receptor findings (the molecular window)",
      symptoms: ["Striatal D2 occupancy — about 65% for antipsychotic effect, extrapyramidal symptoms emerging beyond about 80% (the D2/D3 ligands: raclopride, FLB 457; IBZM, epidepride)", "Reduced 5-HT1A availability in depression and anxiety ([11C]WAY 100635)", "5-HT2A imaging ([11C]NMSP, [18F]altanserin, [18F]setoperone) and transporter imaging ([11C]DASB and successors) in the depression and treatment studies; the benzodiazepine-receptor ligands"],
    },
    {
      category: "4. The artefact-and-confound signals (what masquerades as finding)",
      symptoms: ["Submillimetre movement causing significant artefact — the restless patient's scan, and the remedies: anxiety reduction, clear task instruction, comfort, button-press rather than speech responses", "Susceptibility signal loss over inferior temporal and orbitofrontal regions near bone and sinuses — the blind spot over psychiatry's emotional anatomy", "Speaking during acquisition — sinus deformation mimicking activation; images should not be acquired during articulation", "The confounds that fake disease progression: hospital samples (severity-filtered), caudate enlargement on typical antipsychotics, substance misuse in the scanned cohort"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The modality-choice apparatus",
      code: "When each scan is indicated",
      criteria: [
        "Structural MRI is the clinical workhorse: the exclude-a-structural-cause question — tumour, infarct, hydrocephalus, the dementias, the leukoariosis of vascular depression — the standard clinical use of imaging in the psychiatric workup.",
        "CT is adequate for haemorrhage, large lesions and gross atrophy — the district tier's instrument where MRI is unavailable or delayed.",
        "The temporal-lobe protocol MRI where the epilepsy-psychiatry interface is the question (mesial temporal sclerosis).",
        "PET and SPET in psychiatry are research instruments — receptor numbers, blood flow and metabolism quantified in studies; the D2-occupancy logic established, but clinical monitoring uses clinical observation, not scanners.",
        "fMRI's clinical role remains limited to specialised applications such as hemispheric dominance assessment before neurosurgery — psychiatric fMRI is research, not yet test.",
      ],
      duration: "The scan-or-not decision belongs to the initial assessment — the clinical question stated on the request before any modality is chosen.",
      indianNote: "The Indian 'MRI brain, ?organicity' referral is the appropriate clinical deployment of a research-heavy technology; the two-tier reality (CT everywhere, MRI in most districts, research fMRI in the few centres) makes modality choice an availability decision as much as a clinical one.",
    },
    {
      system: "The honest-interpretation apparatus",
      code: "What a finding may claim",
      criteria: [
        "The group-level discipline: ventricular enlargement and hippocampal volume loss replicate across studies as group-level statistical differences — many patients have normal scans, and the individual scan neither confirms nor excludes the diagnosis.",
        "The sampling audit: hospital versus population samples — the severity filter that makes tertiary findings look universal, Indian tertiary samples being extreme examples.",
        "The performance-matching audit: tasks slowed so patients can match controls may hide the dysfunction expressed at normal demands (the pacing dilemma) — and matched performance may reverse the finding (cortical inefficiency).",
        "The state-trait distinction: symptoms, not diagnoses, drive blood flow — poverty of speech reduces left-DLPFC flow in depression and schizophrenia alike.",
        "The confound audit: medication (caudate enlargement with typical antipsychotics), substance misuse, and the manual-versus-automated measurement question.",
      ],
      duration: "Applied at the reading of every psychiatric imaging study and every report — the discipline is the finding's licence.",
      indianNote: "The interpretation disciplines India needs most: the hospital-sample bias and the medication confound (treatment histories longer than illness recognition) — the honest reading of any Indian imaging study.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Structural lesion masquerading as psychiatric presentation", distinguishingFeatures: "Tumour, infarct, hydrocephalus — the atypical features (focal signs, abnormal course, headache, seizure, atypical age) that raise the exclude-organic question and earn the scan.", keyDifferentiator: "The structural MRI read — the one psychiatric imaging indication that is pure differential diagnosis; a lesion found changes everything, a normal scan documents the exclusion, and neither makes the psychiatric diagnosis." },
    { condition: "Vascular depression (the leukoariosis question)", distinguishingFeatures: "Late-life depression with the subcortical and white-matter hyperintensity findings on MRI — the vascular-depression connections of the elderly-mood note.", keyDifferentiator: "The scan finding integrated with the vascular risk picture — imaging supporting a mechanism, never making the diagnosis on its own." },
    { condition: "A dementia workup (the atrophy read)", distinguishingFeatures: "Cognitive decline in the elder — the structural scan excluding reversible structural causes and mapping atrophy; mesial temporal sclerosis where the epilepsy-psychiatry interface coexists.", keyDifferentiator: "The temporal-lobe protocol and the lesion-exclusion read — the diagnostic integration lives in the dementia and cognitive-assessment courses; the scan is one instrument among them." },
    { condition: "Group difference versus diagnostic test (the over-read)", distinguishingFeatures: "The family's or the clinician's request for 'the scan that shows schizophrenia' — ventricles, hippocampus or hypofrontality offered as individual diagnosis.", keyDifferentiator: "The group-level discipline: the findings replicate across studies, not individuals — many patients have normal scans, and 'involved' is a fairer word than 'diseased' at present resolution." },
    { condition: "Hypofrontality versus cortical inefficiency (the same data, two readings)", distinguishingFeatures: "Reduced frontal activation in patients failing the task versus enhanced activation when performance is matched — the finding's direction depends on the design and the cohort.", keyDifferentiator: "The performance-matching audit: who succeeded at what — the single-scan interpretation inoculation the hypofrontality story exists to teach." },
  ],
  management: [
    { category: "service-design", name: "The scan decision (rational requesting)", description: "The imaging cascade in psychiatric workup: structural MRI to exclude lesions (tumours, hydrocephalus, the dementias) is the standard clinical use; functional imaging in psychiatry is research. The distinction keeps requesting habits rational: the clinical question stated on every request, the modality matched to it, and the finding read as context rather than verdict.", whenToUse: "Every psychiatric presentation that raises the exclude-organic question — atypical features, focal signs, abnormal course, late-life onset — and no others.", indianContext: "The Indian 'MRI brain, ?organicity' referral is this discipline in daily action: the lesion-exclusion function, delivered through the availability tier (CT at the district station, MRI where reachable)." },
    { category: "service-design", name: "The D2-occupancy teaching without the scanner", description: "The imaging-pharmacology bridge carried into prescribing: about 65% striatal D2 occupancy for antipsychotic effect, extrapyramidal symptoms emerging beyond about 80% — the explanation of dose-response ceilings (why risperidone beyond ~6 mg adds side effects, not benefit) and the scientific core of the high-dose-antipsychotic critique. Clinical monitoring uses clinical observation, not scanners — the imaging lessons travel without the machine.", whenToUse: "Every antipsychotic dose decision — the ceiling logic applied wherever the scanner is absent, which is most of the world.", indianContext: "The 65/80 thresholds translate into prescribing rules deliverable in any Indian OPD — dose ceilings respected, high-dose prescriptions challenged on imaging-derived pharmacology, not fashion." },
    { category: "service-design", name: "Reading the report (the group-level discipline)", description: "The report read with the honest-interpretation apparatus: the sampling audit, the performance-matching audit, the state-trait distinction, the medication and substance confounds, manual versus automated measurement. A finding is licensed context, not a diagnosis; a normal scan documents an exclusion, not a clean bill.", whenToUse: "The reading of every psychiatric imaging report and every imaging study.", indianContext: "Indian tertiary reports and studies read with the two disciplines India needs most: the hospital-sample bias (severity-filtered selection) and the medication confound (treatment histories longer than illness recognition)." },
    { category: "psychotherapy", name: "Counselling the family about the scan request", description: "The plain-language conversation: on average the scans show enlarged ventricles and reduced temporal and hippocampal volumes in schizophrenia — findings that replicate across studies but are group-level statistical differences, not diagnostic markers; many patients have normal scans, and the individual scan neither confirms nor excludes. The scan ordered to exclude a structural cause is explained as exactly that; the family's request for 'the scan that shows the illness' answered honestly.", whenToUse: "Whenever a family asks for a scan the clinical picture does not indicate, and after every scan that returns normal.", indianContext: "The Indian family's scan request is common and reasonable in a culture that trusts imaging — the honest minute spent explaining group-level findings preserves both the trust and the rational-request discipline." },
    { category: "service-design", name: "The India deployment (the availability tiers)", description: "The practical tier: CT everywhere (adequate for haemorrhage, large lesions, gross atrophy); MRI in most district hospitals, with the temporal-lobe protocol for the epilepsy-psychiatry interface; research fMRI in the few centres (the NIMHANS and metro-academic tradition); PET in psychiatry metro-research, its oncology deployments paying the cyclotron bills. The lesion-exclusion scan is the clinical workhorse of the tier.", whenToUse: "The modality-choice decision at every Indian psychiatric referral.", indianContext: "Costs approx 2026: CT head inexpensive everywhere; MRI brain in the few-thousands of rupees in public institutions (higher private); PET-CT oncology-priced and out of psychiatric reach for most — the tier, not the guideline, often deciding." },
    { category: "service-design", name: "MRI safety and the movement discipline", description: "The usual MRI contraindications screened before every scan (ferromagnetic implants, claustrophobia); for the restless or anxious patient, the note's remedies: anxiety reduction, clear task instruction, comfort, and button-press rather than speech responses; images never acquired during articulation (the speaking confound). The radiation ledger for PET and SPET — repeat functional scanning a research-committee decision, never a clinical habit.", whenToUse: "Every scan booking and every functional-imaging protocol.", indianContext: "The district CT and MRI lists run long — the movement discipline delivered in the waiting time (explanation, reassurance, the plan shared), because a degraded study wastes the slot as surely as a cancelled one." },
  ],
  safety: {
    redFlags: [
      "Ferromagnetic implants — pacemakers, aneurysm clips, retained metal: the absolute MRI contraindication screened before every scan",
      "Claustrophobia unmanaged — the scan abandoned mid-acquisition, the artefact-limited study worse than none",
      "The restless or psychotic patient: submillimetre movement causes significant artefact — the remedies planned (anxiety reduction, clear instruction, comfort, button-press rather than speech responses) before the slot is booked",
      "Radiation exposure from PET and SPET radiotracers — the research-ethics accounting that makes repeat functional scanning a committee decision, never a clinical habit",
      "Speech during fMRI acquisition — sinus deformation mimicking activation; images should not be acquired during articulation",
    ],
    urgentGuidance:
      "The order of operations: (1) the MRI safety screen before every scan — ferromagnetic implants and claustrophobia asked directly; (2) the movement plan for the anxious or psychotic patient — comfort, instruction, button-press responses, the imaging team informed; (3) never during articulation — the speaking confound voids the orbitofrontal read; (4) the radiation ledger for PET and SPET — repeat exposure justified at research-committee level only; (5) the finding read with the interpretation disciplines — a movement- or susceptibility-degraded study reported as such, not salvaged into a finding.",
  },
  drugLinks: [],
  contentGaps: [
    "No antipsychotic exists among KYP's 12 drug lessons, so the D2-occupancy story's prescribing home (the 65/80 thresholds and the dose-ceiling critique) is taught here in full — the drug routes belong to the disease courses and are never invented.",
    "The antidepressant drug-occupancy line (the transporter-ligand treatment studies the note names through [11C]DASB and successors) assigns no individual drug a role in the note; the KYP antidepressant lessons exist but no route is implied from this content — taught here as the research lineage only.",
    "The dedicated radiotracer-pharmacology lesson (occupancy-guided dosing, the ligand table beyond the note's six) has no KYP lesson; the thresholds are taught here as imaging-derived pharmacology.",
    "The epilepsy-psychiatry interface (mesial temporal sclerosis, the temporal-lobe protocol) has no KYP lesson of its own; the India lens teaches the referral logic here.",
    "The post-Oxford connectivity and network literature (Tamminga and successors) is flagged in the note as later developments — no KYP lesson exists and none is implied; MRI physics and neuroradiological lesion-exclusion reading likewise have no dedicated lessons, the working disciplines taught here at clinical depth only.",
  ],
  patientGuide: {
    whatIsIt:
      "Brain imaging in psychiatry means three kinds of picture. The MRI scan uses a strong magnet and radio waves to show the brain's structure in fine detail — no radiation, and safe to repeat. The PET or SPET scan injects a tiny, weakly radioactive tracer (a mass of micrograms, with no drug effect) that shows where receptors, blood flow or sugar use sit — mostly a research tool. The fMRI scan is an MRI that shows which parts work harder during a task, again without radiation. In day-to-day psychiatry these scans are ordered mainly to rule out a physical cause — a tumour, pressure from fluid, damage from strokes — not to diagnose a mental illness, which is done by clinical assessment.",
    whatCausesIt:
      "A scan is ordered, not suffered. The usual reasons: a first episode of illness with unusual features (weakness, headache, fits, an odd age or course), confusion or new symptoms in later life, or a question about memory. The psychiatrist is checking that nothing physical is hiding behind the psychiatric picture — a rare but important catch, and the reason the scan is worth the wait even when it usually comes back normal.",
    symptoms:
      "The scan itself has no symptoms to watch for. What matters around it: telling the team about any metal in the body (pacemaker, clips, implants, shrapnel) before an MRI; claustrophobia mentioned beforehand so the team can plan; and the need to lie still — even small movements blur the pictures.",
    treatment:
      "The scan is a test, not a treatment. A normal scan is a useful answer — it means no structural cause was found, and the treatment plan continues on clinical grounds. It does not mean the illness is not real: the differences imaging research shows in psychiatric illness are group-level statistics, not things an individual scan can confirm or deny. If something structural is found, the treatment shifts to that cause — and the scan has earned its keep.",
    selfHelp: [
      "Declare all metal before the MRI — pacemaker, clips, implants, fragments from old injuries; the team asks, but the memory is yours.",
      "Say if you are claustrophobic — planning (an open discussion, sometimes mild sedation arranged by the team) beats an abandoned scan.",
      "Lie as still as you can — even tiny movements blur the images and can waste the scan.",
      "Ask what question the scan is answering — 'what are we looking for?' is the patient's right and the clinician's discipline.",
      "A normal report is an answer, not a dismissal — bring the worry that remains to the next appointment rather than to another scan.",
    ],
    whenToSeekHelp: [
      "A first episode of psychiatric illness with neurological features — weakness, numbness, seizures, incontinence, or a headache that is new or worsening",
      "New psychiatric symptoms starting late in life, or confusion with a rapid course — the exclude-organic question",
      "Memory decline that is changing daily function — the workup that imaging joins",
      "Any scan report mentioning a mass, bleed or pressure — the treating team the same day",
      "Distress about scan findings or costs that is itself affecting sleep or mood — the psychiatric team can help with that too",
    ],
    indianResources: [
      "The district hospital or DMHP psychiatric OPD — the scan decision and the referral made where the costs stay in the few-thousands of rupees (public institutions, approx 2026)",
      "The radiology department of the nearest government medical college — MRI at public rates when the district machine has a waiting list",
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages) — for distress around the illness or the workup, and guidance on where to go",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific psychiatric-imaging guideline exists in this lineage; practice follows the Oxford chapters' modality-choice discipline — structural MRI for lesion exclusion, functional imaging as research — with the D2-occupancy thresholds (about 65% for effect, 80% for extrapyramidal symptoms) travelling as prescribing rules without the scanner.",
    systemContext: "The Indian psychiatric referral 'MRI brain, ?organicity' serves the lesion-exclusion function — tumour, infarct, hydrocephalus, the leukoariosis of vascular depression — the appropriate clinical deployment of a research-heavy technology. The two-tier reality: district psychiatry works with CT (adequate for haemorrhage, large lesions, gross atrophy); MRI with the temporal-lobe protocol (mesial temporal sclerosis, the epilepsy-psychiatry interface) in district hospitals; research fMRI in the few centres — the NIMHANS and metro-academic tradition.",
    programmeContext: "PET in psychiatry is metro-research — its oncology deployments paying the cyclotron bills; no district psychiatric service runs a research scanner, and none needs to. The clinical workhorse is the structural read; the research instruments belong to the academic centres whose first-episode Indian studies the admission queues (months long in places) make possible — the wide Indian first-episode window the neurodevelopmental-versus-progressive questions need.",
    costConsiderations: "Approx 2026: CT head inexpensive everywhere; MRI brain in the few-thousands of rupees in public institutions (higher private); PET-CT where available is oncology-priced, out of psychiatric reach for most. The D2-occupancy teaching costs nothing — the 65/80 thresholds translate into prescribing rules deliverable in any Indian OPD, imaging's clinical lessons travelling without the machine.",
    culturalConsiderations: "The first-episode window: Indian admission queues make the window between illness onset and first scan wide — the neurodevelopmental-versus-progressive questions testable on Indian cohorts, as the Indian research tradition has begun. The interpretation disciplines India needs most: the hospital-sample bias (Indian tertiary samples being extreme examples of severity-filtered selection) and the medication confound (treatment histories longer than illness recognition) — the honest reading of any Indian imaging study. The family's trust in imaging is an asset to work with, not against: the scan-expectation conversation held honestly keeps the trust and the rational-request discipline intact.",
    patientCounselling: [
      "The scan-expectation script: 'The scan checks that nothing physical is hiding behind the illness — a tumour, pressure, damage. It does not show the illness itself; that is what the clinical assessment does.'",
      "The normal-report script: 'A normal scan is good news and an answer — it means no structural cause. It does not mean the illness is not real; the differences research shows are group statistics, not individual tests.'",
      "The cost script: 'CT where it answers the question is the wiser spend; the MRI in the public institution is in the few-thousands; the PET belongs to research and cancer care — psychiatry does not need it here.'",
      "The stillness script: 'Even small movements blur the pictures — we will explain everything first, keep you comfortable, and you press buttons rather than speak.'",
      "The no-scan script: 'Your illness has a typical picture and the examination is clean — a scan would not change the plan, and that is why we are not ordering one. It is a decision, not an oversight.'",
      "The dose script: 'Beyond a certain dose the medicine adds side effects, not benefit — the limit was worked out by brain imaging of the receptors, and it holds even without a scan.'",
    ],
  },
  decisionPath: {
    title: "The scan-or-not decision in the psychiatric presentation",
    nodes: [
      {
        id: "start",
        question: "A psychiatric presentation — and the scan question (the clinician's or the family's). What does the picture show?",
        branches: [
          { label: "Atypical features — focal signs, abnormal course, new headache, seizure, atypical age", next: "structural-gate" },
          { label: "Late-life new depression or cognitive decline", next: "late-life-gate" },
          { label: "Typical presentation, no neurological signs", next: "no-scan-path" },
          { label: "The family demands 'the scan that shows the diagnosis'", next: "demand-path" },
        ],
      },
      {
        id: "structural-gate",
        question: "The exclude-structural-cause question — the lesion-exclusion indication, structural imaging's standard clinical use.",
        branches: [
          { label: "MRI reachable within the clinical window", next: "mri-path" },
          { label: "CT available today, MRI delayed beyond the window", next: "ct-path" },
        ],
      },
      {
        id: "ct-path",
        question: "The district tier's instrument.",
        recommendation: "CT now — adequate for haemorrhage, large lesions and gross atrophy; the finer MRI read booked in parallel if the CT is uninformative and the question stands. The two-tier reality makes availability part of the clinical decision, honestly recorded as such.",
      },
      {
        id: "mri-path",
        question: "The clinical workhorse.",
        recommendation: "Structural MRI with the clinical question written on the request; the temporal-lobe protocol added where the epilepsy-psychiatry interface is the question (mesial temporal sclerosis). The safety screen first (ferromagnetic implants, claustrophobia); the finding read as lesion exclusion — a lesion found changes everything, a normal scan documents the exclusion, and neither makes the psychiatric diagnosis.",
      },
      {
        id: "late-life-gate",
        question: "Late-life onset — the vascular and degenerative differentials.",
        branches: [
          { label: "Depression with vascular risk — the leukoariosis question", next: "vascular-path" },
          { label: "Cognitive decline — the dementia workup", next: "dementia-path" },
        ],
      },
      {
        id: "vascular-path",
        question: "The white-matter hyperintensity read.",
        recommendation: "Structural MRI read for the subcortical and white-matter hyperintensity findings — integrated with the vascular risk picture as the vascular-depression connections (the elderly-mood course's territory), the scan supporting a mechanism rather than making the diagnosis; the treatment plan follows the clinical integration, not the pixel count.",
      },
      {
        id: "dementia-path",
        question: "The dementia workup.",
        recommendation: "Structural MRI excluding reversible structural causes (tumour, hydrocephalus) and mapping atrophy — the lesion-exclusion function extended; the memory findings integrated with the cognitive assessment (its own course); the group-level atrophy read kept non-diagnostic — the hippocampal volume literature is context, not a meter.",
      },
      {
        id: "no-scan-path",
        question: "Typical presentation, no neurological signs.",
        recommendation: "No routine imaging: the diagnosis is clinical, and the group-level findings carry no individual weight — the rational-request discipline that keeps requesting habits honest. The scan reserved for the atypical; the family's request answered with the scan-expectation script rather than an unused machine's output.",
      },
      {
        id: "demand-path",
        question: "The family's demand for 'the scan that shows schizophrenia'.",
        recommendation: "The honest refusal, kindly delivered: the scans show real, replicable group differences — ventricles, hippocampus, activation — strong evidence of brain involvement; but many patients have normal scans, the individual scan neither confirms nor excludes, and 'involved' is a fairer word than 'diseased' at present resolution. The clinical assessment makes the diagnosis; the family's trust kept by the honesty, not spent on the scan.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Ordering a scan to confirm or exclude a psychiatric diagnosis",
      why: "The findings that replicate — ventricular enlargement, hippocampal volume loss, hypofrontality — are group-level statistical differences; many patients have normal scans, and the individual scan carries no diagnostic weight in either direction.",
      correction: "The scan decision runs on the exclude-structural-cause question alone: atypical features, focal signs, abnormal course, late-life onset — and the report read as context, never verdict.",
    },
    {
      mistake: "Reading hypofrontality as a fixed disease sign",
      why: "The finding appears in about half of resting-state studies and more often in activation; task nature and demands, patient performance and symptom profile moderate it — negative symptoms show the strongest associations — and matched performance can reverse it entirely (the cortical-inefficiency reformulation).",
      correction: "The moderating variables asked of every study and every claim: what task, whose performance, which symptoms — with the pacing dilemma (slowing tasks to match performance may hide the dysfunction expressed at normal demands) held in view.",
    },
    {
      mistake: "Reading inferior temporal and orbitofrontal 'findings' without the artefact audit",
      why: "The susceptibility artefact loses signal near bone and sinuses over precisely the frontal-temporal territories psychiatry most wants; movement of submillimetre scale causes significant artefact; and speaking during acquisition mimics activation through sinus deformation.",
      correction: "The regional caution made routine: emotional-anatomy fMRI read with the blind spots named; button-press rather than speech responses; images never acquired during articulation; degraded studies reported as such, not salvaged.",
    },
    {
      mistake: "Forgetting the confounds — medication, samples, substances",
      why: "Caudate enlargement with typical antipsychotics masquerades as illness progression; hospital samples are severity-filtered (Indian tertiary samples extreme examples); substance misuse rides silently in the scanned cohort — a 'progressive' finding that is any of the three.",
      correction: "The confound audit on every longitudinal claim: what treatment, which sample, what substances — with the state-trait distinction (symptoms, not diagnoses, drive blood flow) applied before any mechanism is credited.",
    },
    {
      mistake: "Pushing antipsychotic dose past the occupancy ceiling",
      why: "Beyond about 65% striatal D2 occupancy the gains stop and beyond about 80% the extrapyramidal symptoms arrive — the imaging-pharmacology bridge the dose-response curve enforces regardless of the prescriber's optimism (risperidone beyond ~6 mg adds side effects, not benefit).",
      correction: "The ceiling logic applied at every review: within the therapeutic window the effect is earned; beyond it only the side effects compound — and clinical observation, not a scanner, is the monitoring instrument.",
    },
    {
      mistake: "Treating fMRI as a test — or the BOLD signal as thoughts",
      why: "The BOLD signal is blood, not thoughts: an indirect index delayed 3-8 seconds after the neural activity, 3% or less in size, vulnerable to movement, susceptibility and the speaking confound; fMRI's clinical role remains limited to specialised applications such as hemispheric dominance before surgery.",
      correction: "The honest position held in every referral conversation: psychiatric fMRI is research — powerful, repeatable (no radiation), and not yet a test; the activation map read as a statistical map, never as a diagnostic printout.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The PET detection principle: positron annihilation producing two 180-degree-opposed gamma rays detected by coincidence-linked crystal pairs — localisation to the inter-detector volume, the physical basis of three-dimensional quantitative imaging.",
        "The isotope tables: PET's cyclotron trio (15O 2.03 min, 11C 20.4 min, 18F 109.8 min) against SPET's longer-lived pair (99mTc 6.02 h, 123I 13.2 h) — and the division of labour: PET the research standard (tracer diversity, quantitation, the hot-cell burden), SPET the clinical-deployment option (simplicity, cost).",
        "The D2-occupancy thresholds: about 65% striatal occupancy for antipsychotic effect, about 80% for extrapyramidal symptoms — and the prescribing implication (dose-response ceilings; risperidone beyond ~6 mg).",
        "T1 and T2 relaxation, the spin-echo sequence, and why the grey-white-CSF contrast at ~0.5-2 mm (1.5T) is the outstanding MRI advantage — the anatomical examination without radiation, repeatable across an illness course.",
        "The BOLD chain from stimulus to signal — the 3-8 second delay, the deoxyhaemoglobin dilution, the signal changes of 3% or less — and fMRI's honest clinical position with the hemispheric-dominance exception.",
      ],
      practical: [
        "Demonstrate a scan request: the clinical question stated, the modality chosen with its indication, and the returning report read aloud with the group-level discipline.",
        "Counsel a family asking for 'the scan that shows schizophrenia' — the plain-language group-level explanation delivered honestly and respectfully.",
      ],
      longAnswer: [
        "Neuroimaging in psychiatry: PET, SPET, structural MRI and fMRI — the methodology, the replicated findings in schizophrenia, and the honest limits of psychiatric imaging.",
        "The D2-receptor occupancy story: from [11C]raclopride to dose-response ceilings — imaging-derived pharmacology in daily antipsychotic prescribing.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DETECTION PRINCIPLE: PET = positron annihilation producing two 180-degree-opposed gamma rays, detected by coincidence-linked crystal pairs; localisation to the inter-detector volume — the physical basis of 3D quantitative imaging.",
        "THE ISOTOPE PAIRS: PET 15O (2.03 min), 11C (20.4 min), 18F (109.8 min) — cyclotron-made; SPET 99mTc (6.02 h) and 123I (13.2 h) — longer-lived; microgram doses, no pharmacological effect.",
        "THE 65/80 RULE: striatal D2 occupancy ~65% for antipsychotic effect, ~80% for EPS — the imaging-pharmacology bridge explaining why risperidone beyond ~6 mg adds side effects, not benefit.",
        "THE HYPOFRONTALITY STORY: ~50% of resting-state studies, more in activation; strongest with negative symptoms; poverty of speech reduces left-DLPFC flow irrespective of diagnosis; the pacing dilemma; the cortical-inefficiency reversal (hyperfrontality when performance is matched).",
        "THE SEROTONIN LIGANDS: 5-HT1A — [11C]WAY 100635 (reduced availability in depression and anxiety); 5-HT2A — [11C]NMSP, [18F]altanserin, [18F]setoperone; transporter — [11C]DASB and successors.",
        "THE MOST REPLICATED STRUCTURAL FINDINGS: lateral ventricular enlargement (the 1976 CT discovery) and temporal-lobe/hippocampal volume reduction (visible in about one-third) — group-level, non-diagnostic.",
        "THE MRI PHYSICS: T1 (spin-lattice, longitudinal) and T2 (spin-spin, transverse) relaxation; the spin-echo sequence (90-degree pulse, dephasing, 180-degree rephasing, the echo at TE); voxel resolution ~0.5-2 mm at 1.5T.",
        "THE BOLD CHAIN: stimulus, neural activity (~100 ms), blood flow up at 3-8 s WITHOUT proportional oxygen extraction, deoxyhaemoglobin diluted, T2* prolonged, signal change ≤3% — blood, not thoughts.",
        "THE ARTEFACT RULES: movement (submillimetre suffices — button-press, not speech); susceptibility (inferior temporal and orbitofrontal — the sinus-proximity blind spot over psychiatry's favourite regions); never image during articulation.",
        "THE CLINICAL POSITION: fMRI's clinical role limited to specialised applications (hemispheric dominance before surgery); psychiatric fMRI is research, not yet test; structural MRI is the lesion-exclusion workhorse (tumour, hydrocephalus, the dementias).",
        "THE DOPAMINE PARADIGMS: amphetamine-challenge studies showing schizophrenia's excessive release; the dopamine-synthesis-capacity ligands; the D1 ligands — the dopamine-system imaging beyond occupancy; caudate enlargement with typical antipsychotics as the medication confound.",
      ],
      pyqConcepts: [
        "The D2-occupancy thresholds — the single most examined line (65% effect, 80% EPS, the risperidone ~6 mg ceiling).",
        "The BOLD principle — the recurring one-liner (blood flow rises without proportional oxygen extraction, diluting paramagnetic deoxyhaemoglobin).",
        "Ventricular enlargement as the most replicated structural finding — the CT-era discovery question (Johnstone 1976).",
        "PET versus SPET — why the research standard versus the clinical-deployment option.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old man presents to the district OPD with a three-week first episode of paranoid delusions and auditory hallucinations; the notes add six weeks of early-morning headache, one witnessed seizure, and a mild left plantar extensor response — the reasoning tested: the atypical features earn the exclude-structural-cause scan (structural MRI where reachable, CT today if the window is tight), the family's request for 'the scan that shows schizophrenia' answered with the group-level honesty (ventricles and hippocampus as group statistics, neither confirming nor excluding), and the lesion found on imaging shifting the entire plan to the neurosurgical pathway — the imaging cascade doing exactly the one clinical job it holds: exclusion, not diagnosis.",
        "A 68-year-old woman is brought with three months of declining memory, slowed thinking and a first-ever depressive episode; the examination is notable for recall failures and a hesitant gait, and the family asks for 'the dementia scan' — the reasoning tested: the late-life gate opens the structural MRI (the lesion-exclusion read: tumour, hydrocephalus), the white-matter hyperintensities found are integrated as the vascular-depression connection (a mechanism supported, not a diagnosis made), the medial temporal atrophy is read as group-level context alongside the cognitive assessment rather than as a meter, and the plan holds the psychiatric treatment, the vascular risk management and the honest family conversation — the scan one instrument in the workup, never its verdict.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PET detection: annihilation produces two 180-degree-opposed gamma rays, detected in coincidence.",
        "D2 occupancy: about 65% for antipsychotic effect, about 80% for extrapyramidal symptoms.",
        "The most replicated structural finding in schizophrenia: lateral ventricular enlargement.",
        "BOLD = deoxyhaemoglobin dilution producing T2* prolongation; signal 3% or less, delay 3-8 seconds.",
        "The susceptibility artefact blinds fMRI to inferior temporal and orbitofrontal regions.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The D2 teaching travels without the scanner: the 65/80 thresholds and the risperidone ~6 mg ceiling are imaging-derived pharmacology you can apply in any OPD — clinical observation, not a camera, is the monitoring instrument.",
        "The hypofrontality story is the single-scan inoculation: symptoms and tasks, not diagnoses, determine activation; performance-matching changes findings; the same data read two ways (hypofrontality versus cortical inefficiency) — teach it as the reason no activation scan diagnoses anything.",
        "The India tier is the honest layer: CT everywhere, MRI in most districts, research fMRI in the few centres, PET metro-research — and the Indian imaging study read with the two disciplines India needs most: the severity-filtered hospital sample and the treatment history longer than the illness recognition.",
        "The movement-and-speech protocol is scan-craft: anxiety reduction, clear instruction, comfort, button-press rather than speech responses — and never during articulation; a degraded study reported as such earns more trust than a salvaged finding.",
        "The radiation ethics of PET and SPET: repeat functional scanning is a research-committee decision, never a clinical habit — the reason fMRI's radiation-free repeatability matters, and the reason the scan-happy service needs the audit.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The first-episode scan that earned its keep",
      presentation: "Three weeks of delusions, six weeks of headaches and one seizure — the atypical features that turned a routine first episode into the imaging cascade's one clinical job.",
      initialPresentation: "A 24-year-old man was brought to the district psychiatric OPD by his father after three weeks of insidious paranoid delusions (poisoning by the neighbours) and muttering to himself. The father added, only when asked directly, six weeks of early-morning headaches with vomiting, one witnessed generalised seizure the previous fortnight, and a progressive social withdrawal older than the psychosis.",
      history: "No prior psychiatric contact; no substance use; no family history. The OPD register carried the family's first request — 'MRI brain, ?organicity' — before the examination was recorded, and the counter-request from the relatives: 'the scan that shows his schizophrenia'.",
      examination: "Mental state: systematised persecutory delusions, second-person auditory hallucinations, intact orientation. Neurological: mild left plantar extensor response, no papilloedema on fundoscopy; the seizures and the early-morning headache with vomiting noted as the atypical features that earn imaging.",
      diagnosis: "First-episode psychosis with structural-cause markers — the exclude-organic indication met (new headache, seizure, focal sign, atypical course); the psychiatric diagnosis deferred to the post-scan picture.",
      management: "Structural MRI arranged as the lesion-exclusion scan with the clinical question stated on the request (new seizure, headache, focal sign); the family counselled with the group-level honesty — the ventricle and hippocampus findings are group statistics that neither confirm nor exclude schizophrenia — while the scan's actual job was named plainly. The MRI demonstrated a space-occupying frontal lesion; the neurosurgical referral made the same day, the antipsychotic held pending the operative plan.",
      outcome: "The lesion resected; the psychosis reviewed at follow-up with the organic contribution treated — the psychiatric plan rebuilt on the post-operative picture. The father's summary, recorded in the notes: 'the scan was not for the madness — it was for what was hiding behind it'.",
      teachingPoints: [
        "The scan's one clinical job: lesion exclusion — the atypical features (new headache, seizure, focal sign, atypical course) are the indication; the typical first episode needs none.",
        "The family's dual request handled honestly: the 'MRI brain, ?organicity' honoured because the clinical question existed; the 'scan that shows schizophrenia' declined with the group-level explanation — both answers preserving the alliance.",
        "The imaging cascade discipline: structural imaging the workhorse, functional imaging the research instrument — the distinction that keeps the request rational and the finding readable.",
        "The psychiatric diagnosis deferred, not deleted: the post-organic picture reassessed on its own merits — the scan changes the plan, never replaces the assessment.",
      ],
    },
    {
      title: "The dementia workup and the honest atrophy read",
      presentation: "A 68-year-old with fading memory, a first depression and a family asking for the scan that would 'settle it' — the workup that used the scan as one instrument among several, and read it honestly.",
      initialPresentation: "A 68-year-old woman was brought by her son with three months of progressive forgetfulness (missed medications, repeated questions), a first-ever depressive episode with lost interest and appetite, and a hesitant, slow gait the family attributed to 'old age'. The son's opening request: 'doctor, at least do the brain scan and settle it'.",
      history: "Hypertension for fifteen years, irregularly treated; type 2 diabetes for eight; no prior psychiatric history; the father had died of a stroke. No acute events; the cognitive decline gradual, the depression synchronous with it — the late-life presentation the exclude-organic question exists for.",
      examination: "Mental state: low mood with biological features; recall failures on bedside testing (three-word recall lost after a delay); orientation to time impaired at the margins. Neurological: hesitant gait, brisk reflexes symmetrically; no focal deficit; fundi normal. The clinical picture: cognitive decline with late-life depression and vascular risk.",
      diagnosis: "Late-life cognitive decline with depression — the differential spanning the degenerative and the vascular-depression pictures; the scan requested as the lesion-exclusion and mechanism-mapping instrument, the diagnostic integration deferred to the full workup.",
      management: "Structural MRI with the clinical question stated: exclude tumour and hydrocephalus, characterise the atrophy and the white matter. The scan: no mass, no hydrocephalus; medial temporal atrophy reported, and confluent white-matter hyperintensities. The reading delivered with the honest-interpretation apparatus: the medial temporal atrophy integrated with the cognitive assessment as group-level context (the hippocampal literature is context, not a meter); the white-matter changes integrated with the vascular risk picture as the vascular-depression connection (the elderly-mood course's territory); the depression treated psychiatrically and the vascular risk managed medically; the family counselled with the normal-and-abnormal-report scripts — what the scan showed, what it supported, and what it could not settle.",
      outcome: "The depressive episode treated with full resolution of the mood symptoms and partial improvement in the cognitive picture at six months; the vascular risk management continued with the physician; the family's understanding reframed from 'the scan settles it' to 'the scan helped rule things out and point the way' — the diagnostic integration continuing through serial cognitive assessments rather than serial scans.",
      teachingPoints: [
        "The late-life gate: new psychiatric symptoms in the elder earn the structural scan — the lesion-exclusion function (tumour, hydrocephalus) plus the mechanism mapping (atrophy, white matter).",
        "The honest atrophy read: medial temporal atrophy is group-level context integrated with the cognitive assessment — never an individual meter; the hippocampal volume literature supports, it does not diagnose.",
        "The vascular-depression connection: white-matter hyperintensities integrated with the vascular risk picture — imaging supporting a mechanism (the elderly-mood course's treatment territory), the diagnosis remaining clinical.",
        "The family's 'settle it' request answered with the scan-expectation discipline: what the scan shows, what it supports, what it cannot decide — the trust kept by the honesty, and the follow-up carried by clinical assessment rather than repeat scanning.",
      ],
    },
  ],
  clinicalPearls: [
    "The 65/80 rule: striatal D2 occupancy of about 65% for antipsychotic effect, extrapyramidal symptoms emerging beyond about 80% — the imaging-pharmacology bridge explaining dose-response ceilings (risperidone beyond ~6 mg adds side effects, not benefit).",
    "PET versus SPET: tracer diversity and quantitation make PET the research standard (the hot-cell radiochemistry burden the price); simplicity and cost make SPET the clinical-deployment option — millimetre resolution, SPET somewhat coarser.",
    "Hypofrontality is found in about 50% of resting-state studies and more in activation paradigms — negative symptoms showing the strongest associations; the finding's inconsistency is itself the teaching.",
    "Cortical inefficiency: when patients and controls perform at similar levels, patients show enhanced frontal activation — the same data read two ways, the single-scan interpretation inoculation.",
    "Poverty of speech reduces left-DLPFC flow irrespective of diagnosis — depression or schizophrenia: symptoms, not diagnoses, drive blood flow.",
    "Ventricular enlargement is among the most replicated findings in biological psychiatry; hippocampal atrophy is macroscopically visible in about one-third of patients and travels with the memory impairments — both group-level, non-diagnostic.",
    "MRI's advantage is the visible grey-matter, white-matter and CSF contrast at ~0.5-2 mm (1.5T) — anatomy without radiation, repeatable across an illness course.",
    "The BOLD chain: neural activity, neurovascular coupling, blood flow up at 3-8 seconds without commensurate oxygen uptake, deoxyhaemoglobin diluted, T2* prolonged — a signal of 3% or less; blood, not thoughts.",
    "The susceptibility artefact blinds fMRI to inferior temporal and orbitofrontal cortex — the sinus-proximity problem over precisely psychiatry's favourite regions, compounded by the speaking confound.",
    "fMRI's clinical role remains limited to specialised applications such as hemispheric dominance assessment before neurosurgery — psychiatric fMRI is research, not yet test.",
    "The imaging cascade: structural MRI to exclude lesions (tumours, hydrocephalus, the dementias) is the standard clinical use; functional imaging in psychiatry is research — the distinction keeps requesting habits rational.",
    "The India tier: CT everywhere, MRI in most districts, research fMRI in the few centres, PET metro-research with oncology paying the cyclotron bills — and the 65/80 teaching delivered without the scanner, in any OPD.",
  ],
  highYieldSummary: [
    "The field in one frame: psychiatric neuroimaging runs on three technologies — PET and SPET (radiotracer imaging of receptors, blood flow and metabolism), structural MRI (anatomy at millimetre resolution, radiation-free) and functional MRI (blood-oxygenation imaging of activation, radiation-free and repeatable) — and its psychiatric record is a mix of real findings (ventricular enlargement, hippocampal volume loss, hypofrontality with its complexities, receptor alterations) and methodological honesty (artefacts, patient samples, the localisation traps). The three engines share one discipline: every finding is a group-level statistical claim whose clinical weight depends on the sampling, the task and the confound audit — the apparatus this course teaches as the interpretation criteria.",
    "The molecular window (PET/SPET): cyclotron-produced positron emitters (15O 2.03 min, 11C 20.4 min, 18F 109.8 min; SPET's 99mTc 6.02 h and 123I 13.2 h) are incorporated into biological molecules at microgram masses with no pharmacological effect; annihilation produces two 180-degree-opposed gamma rays that coincidence-linked crystal pairs detect, localising radiation to the inter-detector volume; quantitative modelling of the time-activity data yields receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism. The dopamine system is the flagship: the D2/D3 ligands ([11C]raclopride, [11C]FLB 457; SPET's IBZM and epidepride) established the antipsychotic-occupancy logic — about 65% striatal D2 occupancy for antipsychotic effect, extrapyramidal symptoms emerging beyond about 80% — the thresholds that explain dose-response ceilings and anchor the high-dose-antipsychotic critique; the amphetamine-challenge paradigms demonstrated schizophrenia's excessive dopamine release.",
    "The schizophrenia functional findings: hypofrontality — the field's founding observation — present in about 50% of resting-state studies and more often in activation paradigms, with task nature and demands, patient performance and symptom profile as the moderating variables and negative symptoms showing the strongest associations (the 30-patient resting-flow study's factor-analytic support). Poverty of speech reduces left-DLPFC flow irrespective of diagnosis — depression or schizophrenia: symptoms, not diagnoses, drive blood flow. The pacing dilemma: slowing tasks so patients can match controls may hide the dysfunction expressed at normal demands. And the cortical-inefficiency reformulation: when patients and controls perform at similar levels, patients show enhanced frontal activation — inefficient signal processing, the same data read two ways. The serotonin system completes the molecular story: [11C]WAY 100635 for 5-HT1A (reduced availability in depression and anxiety); [11C]NMSP, [18F]altanserin and [18F]setoperone for 5-HT2A; the transporter ligands ([11C]DASB and successors) for the depression and treatment studies; the benzodiazepine-receptor ligands the young line.",
    "The anatomy window (structural MRI): protons in a strong static field, excited at the Larmor frequency, relax through tissue-environment-dependent T1 (spin-lattice) and T2 (spin-spin) processes; the spin-echo sequence (90-degree pulse, dephasing, 180-degree rephasing, the echo at TE) and the slice-selective, frequency- and phase-encoding gradients deliver the grey-white-CSF contrast at ~0.5-2 mm voxel resolution at 1.5T — the outstanding advantage: the anatomical examination without radiation, repeatable across an illness course. The replicated morphometric findings in schizophrenia: lateral ventricular enlargement (the CT-era discovery, among the most replicated findings in biological psychiatry); temporal-lobe volume reduction and hippocampal volume decrease (visible in about one-third, associated with the memory impairments); thalamic and cerebellar vermis abnormalities — the pattern distributed rather than focal, the debate static neurodevelopmental lesions versus progressive tissue loss (first-episode studies showing many changes already present, longitudinal studies some progression). The interpretation disciplines: hospital-sample bias, medication effects (the caudate enlargement with typical antipsychotics), substance-misuse confounds, manual versus automated measurement. In the affective disorders: the hippocampal-volume literature (the HPA-cortisol link) and the subcortical and white-matter hyperintensity findings of late-life depression (the vascular-depression connections).",
    "The activation window (fMRI): the BOLD chain — neural activity within ~100 ms of the stimulus, neurovascular coupling (Roy and Sherrington's 1894 insight; mechanisms complex and not fully defined), local blood flow increasing 3-8 seconds after stimulus onset without commensurate oxygen uptake, the oxygenated-to-deoxygenated haemoglobin ratio rising, deoxyhaemoglobin's paramagnetic effect diluted, T2* prolonged — the measurable signal, changes of 3% or less. The sequences: gradient-echo (faster than spin-echo, the flip-angle tuning) and echo-planar imaging (rapid gradient blipping, up to 128 echoes per excitation, whole-brain multislice in 2 seconds or less — rapidly-switched gradient coils, slew rates, shielding, eddy-current management). The artefacts: movement (inevitable; submillimetre motion causes significant artefact — anxiety reduction, clear task instruction, comfort, button-press rather than speech responses); susceptibility (signal loss near bone and sinuses over inferior temporal and orbitofrontal regions — precisely the frontal-temporal territories psychiatry most wants, compounded by speaking: sinus deformation mimicking activation, images never acquired during articulation); the usual MRI contraindications (ferromagnetic implants, claustrophobia). The designs and analysis: block and event-related; the statistical parametric-mapping tradition (the general-linear-model and multiple-comparisons machinery). The repetition advantage: no radiation, so a single subject can be examined on many occasions and patients studied ethically and serially.",
    "The clinical layer: the D2-occupancy thresholds are prescribing logic — 65% for effect, 80% for EPS, the explanation of dose-response ceilings and the science behind dose-limiting practice; the hypofrontality lesson inoculates against single-scan interpretation (symptoms and tasks, not diagnoses, determine activation; performance-matching changes findings; the cortical-inefficiency reversal shows the same data read two ways); ventricular enlargement and hippocampal volume loss are the findings most worth quoting in schizophrenia workups while remembering their group-level, non-diagnostic nature; the BOLD delay and the susceptibility blind spots explain both fMRI's power (safe repetition) and its limits (orbitofrontal silence — the emotional-anatomy literature read with regional caution); and the imaging cascade in the psychiatric workup — structural MRI to exclude lesions (tumours, hydrocephalus, the dementias), functional imaging as research — keeps requesting habits rational. fMRI's honest clinical position: limited to specialised applications such as hemispheric dominance assessment before neurosurgery; psychiatric fMRI remains a research tool, not yet a test.",
    "The India layer: the 'MRI brain, ?organicity' referral serves the lesion-exclusion function — the appropriate clinical deployment of a research-heavy technology. The two-tier reality: district psychiatry works with CT (adequate for haemorrhage, large lesions, gross atrophy); MRI with the temporal-lobe protocol (mesial temporal sclerosis, the epilepsy-psychiatry interface) in district hospitals; research fMRI in the few centres (the NIMHANS and metro-academic tradition); PET in psychiatry metro-research, its oncology deployments paying the cyclotron bills. Costs (approx 2026): CT head inexpensive everywhere; MRI brain in the few-thousands of rupees in public institutions (higher private); PET-CT oncology-priced, out of psychiatric reach for most. The D2-occupancy teaching travels without the scanner — the 65/80 thresholds as prescribing rules deliverable in any Indian OPD. The first-episode window is wide (admission queues months long in places), making the neurodevelopmental-versus-progressive questions testable on Indian cohorts. And the interpretation disciplines India needs most: the hospital-sample bias (Indian tertiary samples as extreme examples of severity-filtered selection) and the medication confound (treatment histories longer than illness recognition) — the honest reading of any Indian imaging study.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ni-quiz-1",
      question: "The detection principle of PET is:",
      options: ["Magnetic relaxation of protons", "Positron annihilation producing two 180-degree-opposed gamma rays, detected by coincidence-linked crystal pairs", "Reflection of ultrasound pulses", "Attenuation of X-rays through tissue"],
      correctIndex: 1,
      explanation: "The coincidence geometry localises the source to the inter-detector volume — the physical basis of PET's three-dimensional quantitative imaging.",
      afterSectionId: "mechanism",
    },
    {
      id: "ni-quiz-2",
      question: "The antipsychotic-occupancy thresholds established by D2-receptor imaging are approximately:",
      options: ["30% for effect and 50% for side effects", "65% occupancy for antipsychotic effect, about 80% for extrapyramidal symptoms", "90% and 95%", "No thresholds exist"],
      correctIndex: 1,
      explanation: "The imaging-pharmacology bridge: explaining dose-response ceilings — adding dose beyond the therapeutic window adds only extrapyramidal symptoms (risperidone beyond ~6 mg adds side effects, not benefit).",
      afterSectionId: "symptoms",
    },
    {
      id: "ni-quiz-3",
      question: "Hypofrontality in schizophrenia has been found in approximately what proportion of resting-state studies, and is most associated with which clinical picture?",
      options: ["100%; positive symptoms", "About 50% of resting studies (more in activation paradigms); most pronounced with negative symptoms", "10%; mania", "Never found in any study"],
      correctIndex: 1,
      explanation: "The finding's inconsistency is itself the teaching: task, performance and symptoms moderate it, with negative-symptom and poverty-of-speech associations the strongest.",
      afterSectionId: "brain",
    },
    {
      id: "ni-quiz-4",
      question: "The fMRI scan is actually measuring:",
      options: ["Neural impulses directly", "Blood, not thoughts: local blood flow rising more than oxygen uptake, diluting paramagnetic deoxyhaemoglobin and prolonging T2*", "The temperature of active neurons", "The electrical field of the cortex"],
      correctIndex: 1,
      explanation: "An indirect, delayed (3-8 seconds), small (3% or less) index of activation — the honest description of every BOLD map.",
      afterSectionId: "management",
    },
    {
      id: "ni-quiz-5",
      question: "The susceptibility artefact in fMRI disproportionately affects:",
      options: ["The motor cortex", "Inferior temporal and orbitofrontal regions near bone and sinuses", "The occipital pole only", "The deep white matter"],
      correctIndex: 1,
      explanation: "The ironic blind spot: the emotional and social brain regions being hardest to image — the speaking confound compounds it (sinus deformation mimicking activation).",
      afterSectionId: "differential",
    },
    {
      id: "ni-quiz-6",
      question: "Among the most replicated structural MRI findings in schizophrenia are:",
      options: ["Cortical dysplasia and arachnoid cysts", "Lateral ventricular enlargement and temporal-lobe/hippocampal volume reduction", "Pituitary adenomas", "Normal scans only"],
      correctIndex: 1,
      explanation: "From the CT-era ventricular discovery through the MRI-era hippocampal literature — group-level, replicated, non-diagnostic: the honest status of psychiatric structural neuroimaging.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the PET isotope trio with half-lives, the SPET pair, and the coincidence-detection principle.", answer: "THE PET TRIO (cyclotron-produced): 15O, half-life 2.03 minutes; 11C, 20.4 minutes; 18F, 109.8 minutes. THE SPET PAIR (longer-lived): 99mTc, 6.02 hours; 123I, 13.2 hours. THE PRINCIPLE: the emitted positron annihilates with an electron, producing TWO GAMMA RAYS at 180 degrees to each other, detected by coincidence-linked crystal pairs — the coincidence requirement localises the source to the inter-detector volume, the physical basis of three-dimensional quantitative imaging over minutes to hours. The doses are microgram masses with no pharmacological effect.", topic: "PET/SPET methodology" },
    { question: "Why PET for research and SPET for clinical deployment?", answer: "PET: the TRACER DIVERSITY (the cyclotron's short-lived isotopes can be built into many biological molecules) and the QUANTITATION (the modelling of time-activity data into receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism) make it the research standard — the price being the hot-cell radiochemistry burden the short half-lives impose. SPET: SIMPLICITY AND COST (the longer-lived isotopes, no cyclotron chemistry chain) make it the clinical-deployment option — the price being somewhat coarser resolution and less rigorous quantitation. Both are millimetre-level; the division of labour, not the physics alone, decides which machine serves which purpose.", topic: "The division of labour" },
    { question: "State the D2-occupancy thresholds and their prescribing implication.", answer: "THE THRESHOLDS: striatal D2 receptor occupancy of about 65% for antipsychotic effect, with extrapyramidal symptoms emerging beyond about 80% — established with the D2/D3 ligands ([11C]raclopride, [11C]FLB 457; the SPET tracers IBZM and epidepride). THE PRESCRIBING IMPLICATION: the thresholds explain dose-response ceilings — beyond the therapeutic window, added dose adds side effects, not benefit (why risperidone beyond ~6 mg adds extrapyramidal symptoms, not effect) — the scientific core of the high-dose-antipsychotic critique, and imaging-derived pharmacology applicable in any OPD without a scanner. Clinical monitoring uses clinical observation; the scanner taught the rule.", topic: "Occupancy pharmacology" },
    { question: "Tell the hypofrontality story: the ~50% finding, the negative-symptom association, the poverty-of-speech cross-diagnosis finding, the pacing dilemma, and the cortical-inefficiency reversal.", answer: "THE FINDING: hypofrontality — reduced frontal flow/metabolism in schizophrenia — present in about 50% of resting-state studies and more often in activation paradigms. THE MODERATORS: task nature and demands, patient performance, and symptom profile — NEGATIVE SYMPTOMS showing the strongest associations (the large 30-patient resting-flow study's factor-analytic support). POVERTY OF SPEECH: reduces left-DLPFC flow irrespective of diagnosis — depression or schizophrenia, symptoms, not diagnoses, drive blood flow. THE PACING DILEMMA: slowing tasks so patients can match controls' performance may hide the dysfunction expressed at normal demands. THE CORTICAL-INEFFICIENCY REVERSAL: when patients and controls perform at similar levels, patients show ENHANCED frontal activation — inefficient signal processing; the same data read two ways, and the single-scan interpretation inoculation.", topic: "Hypofrontality" },
    { question: "Name the three serotonin imaging lines and their disorder findings.", answer: "THE 5-HT1A LINE: [11C]WAY 100635 — the reduced-availability findings in depression and anxiety. THE 5-HT2A LINE: [11C]NMSP, [18F]altanserin and [18F]setoperone. THE TRANSPORTER LINE: [11C]DASB and successors — the depression and treatment studies (the drug-occupancy work). The benzodiazepine-receptor ligands complete the receptor-imaging armoury as the young line the note names without findings.", topic: "Serotonergic imaging" },
    { question: "Explain T1/T2 relaxation and the spin-echo sequence, and why MRI's tissue contrast is its advantage.", answer: "RELAXATION: after radiofrequency excitation at the Larmor frequency, protons recover through T1 (spin-lattice, LONGITUDINAL recovery) and dephase through T2 (spin-spin, TRANSVERSE dephasing) — both tissue-environment-dependent, which is the source of contrast. THE SPIN-ECHO SEQUENCE: a 90-degree pulse, a dephasing interval, then a 180-degree rephasing pulse producing the echo at TE — with slice-selective, frequency- and phase-encoding gradients building the multislice image at ~0.5-2 mm voxel resolution at 1.5T. THE ADVANTAGE: the visible grey-matter, white-matter and CSF contrast — the anatomical examination without radiation, repeatable across an illness course — the property that made MRI the morphometric workhorse of biological psychiatry.", topic: "MRI physics" },
    { question: "State the replicated structural schizophrenia findings with their interpretive debates.", answer: "THE FINDINGS: lateral VENTRICULAR ENLARGEMENT — among the most replicated findings in biological psychiatry, the CT-era discovery (1976) confirmed and quantified by MRI; TEMPORAL-LOBE VOLUME REDUCTION and HIPPOCAMPAL VOLUME DECREASE — macroscopically visible in about one-third of patients, associated with the memory impairments; thalamic and cerebellar vermis abnormalities — the pattern distributed rather than focal. THE DEBATES: static NEURODEVELOPMENTAL lesions versus PROGRESSIVE tissue loss — the first-episode studies showing many changes already present, the longitudinal studies showing some progression. THE INTERPRETATION DISCIPLINES: hospital-sample bias; the medication effect (caudate enlargement with typical antipsychotics); substance-misuse confounds; manual versus automated measurement.", topic: "Structural findings" },
    { question: "Walk the BOLD chain from stimulus to signal (with the delay and the amplitude), the susceptibility blind spots, the speaking confound, and fMRI's clinical position.", answer: "THE CHAIN: stimulus, neural activity within ~100 ms, neurovascular coupling (Roy and Sherrington), local blood flow increasing 3-8 SECONDS after stimulus onset without commensurate oxygen uptake, the oxygenated-to-deoxygenated haemoglobin ratio rising, deoxyhaemoglobin's paramagnetic effect diluted, T2* prolonged — the measurable BOLD signal, changes of 3% OR LESS. THE BLIND SPOTS: susceptibility artefact (signal loss near bone and sinuses) over inferior temporal and orbitofrontal regions — precisely the frontal-temporal territories psychiatry most wants; THE SPEAKING CONFOUND: articulation deforms the sinuses and mimics activation — images are never acquired during speech (button-press responses instead), and even submillimetre movement causes significant artefact. THE CLINICAL POSITION: fMRI's clinical role remains limited to specialised applications such as hemispheric dominance assessment before neurosurgery — psychiatric fMRI is research, not yet test.", topic: "fMRI" },
  ],
  faqs: [
    { question: "What does a brain scan show in schizophrenia?", answer: "On average: enlarged ventricles and reduced temporal and hippocampal volumes — findings that replicate across studies but are group-level statistical differences, not diagnostic markers. Many patients have normal scans, and the individual scan neither confirms nor excludes the diagnosis." },
    { question: "Why did they scan before treatment?", answer: "To exclude a structural cause — tumour, lesion, hydrocephalus — the standard clinical use of structural imaging in the psychiatric workup. Functional imaging's psychiatric role remains research; the treatment itself never waits on a scan the clinical picture does not indicate." },
    { question: "Can imaging measure antipsychotic effect?", answer: "Yes — in research: D2-receptor occupancy studies showed about 65% occupancy separating effective from ineffective doses, and about 80% marking the extrapyramidal threshold — the science behind dose ceilings. Clinical monitoring uses clinical observation, not scanners." },
    { question: "What is the fMRI scan actually measuring?", answer: "Blood, not thoughts: neural activity increases local blood flow more than oxygen use, changing the magnetic properties of blood (the BOLD signal) — an indirect, delayed (seconds), small (under 3%) index of activation, read through the statistics of the activation map." },
    { question: "Why can't fMRI see the orbitofrontal cortex well?", answer: "The susceptibility artefact: air-bone boundaries near the sinuses distort the magnetic field in exactly the inferior-frontal and temporal regions — an ironic blind spot over psychiatry's emotional anatomy, compounded by the speaking confound (articulation deforms the sinuses and mimics activation)." },
    { question: "Is fMRI ready for diagnosis?", answer: "Not yet: its clinical role is specialised (language dominance mapping before surgery); psychiatric fMRI remains a research tool — the honest position of the field, and the reason no referral should promise what the map cannot deliver." },
    { question: "Do the scans prove psychiatry is brain disease?", answer: "They show real, replicable group differences — ventricular, hippocampal, activation — strong evidence of brain involvement. They do not yet individualise diagnosis, and 'involved' is a fairer word than 'diseased' at present resolution." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford chs 2.3.6-2.3.8 — the modality-choice and interpretation disciplines (structural imaging's lesion-exclusion role as the standard clinical use; functional imaging as research) (paraphrased from the source chapters)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, chs 2.3.6-2.3.8 (Parts 1-2, the chapter runs across the part boundary - combined) — source chapters mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Farde L et al. — the D2-occupancy and antipsychotic-threshold studies (the PET-pharmacology bridge)" },
      { source: "Johnstone EC et al. (1976) — the original CT ventricular-enlargement discovery" },
      { source: "Ogawa S et al. and Kwong K et al. (1990-92) — the BOLD discovery papers" },
      { source: "Frith CD et al. and Fletcher P et al. — the paced-verbal-fluency activation studies and the hypofrontality complexities" },
    ],
    reviews: [
      { source: "Bullmore E & Suckling J — the Oxford ch 2.3.8 fMRI synthesis" },
      { source: "Shenton ME et al. — the temporal-lobe and hippocampal MRI meta-analytic tradition" },
      { source: "Weinberger DR et al. — the early hypofrontality observations and the Wisconsin-card-sort activation tradition; Weinberger D & Berman K — the cortical-inefficiency and distributed-network frameworks" },
      { source: "Roy CS & Sherrington CS (1890-1894) — the neurovascular-coupling founding observation" },
      { source: "Tamminga C et al. and the post-Oxford connectivity literature — flagged as later developments" },
      { source: "The Indian tier — the NIMHANS and metro-academic fMRI tradition, the district CT/MRI availability tiers, PET's oncology deployments; cost realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The scan-expectation script — the one-minute plain-language explanation of what a brain scan can and cannot show, handed to every clinician" },
      { source: "The scan-request discipline — the three questions (clinical question, modality, what will change) before any imaging order" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what a brain scan is, why psychiatrists order one, what a normal report means, what to ask.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The three engines — PET/SPET, structural MRI, fMRI — with the replicated findings and the interpretation disciplines.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything — the occupancy-prescribing craft, the honest-read disciplines, the India tier, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three windows — PET/SPET, structural MRI, fMRI — and the honest record they have produced.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can name the three technologies with what each measures, and state the group-level verdict on psychiatric imaging." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The physics and physiology engines: annihilation coincidence, T1/T2 relaxation, the BOLD chain — with the artefacts.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the BOLD chain from stimulus to signal and recite the isotope half-lives with the occupancy thresholds." },
    { number: 3, title: "Clinical Practice", description: "The findings as clinical data: what scans show, when each is indicated, what a report may claim.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the scan-or-not decision and read any psychiatric imaging report with the group-level discipline." },
    { number: 4, title: "Indian Context", description: "The availability tier, the costs, the first-episode window, the interpretation disciplines India needs most.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the scan-expectation and cost scripts, and deploy the 65/80 teaching without a scanner." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the detection-principle and occupancy questions cold, with the numbers." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, chs 2.3.6-2.3.8 (Parts 1-2, the chapter runs across the part boundary - combined) — source chapters mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Bullmore E & Suckling J — the Oxford ch 2.3.8 fMRI synthesis (the BOLD methodology, sequences, artefacts and the honest clinical position)", sourceType: "review", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Roy CS & Sherrington CS — the neurovascular-coupling founding observation (neural activity increasing local blood flow)", sourceType: "primary", year: "1890-1894", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Farde L et al. — the D2-occupancy and antipsychotic-threshold studies (the PET-pharmacology bridge: ~65% for effect, ~80% for EPS)", sourceType: "primary", year: "1980s-1990s", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Frith CD et al. and Fletcher P et al. — the paced-verbal-fluency activation studies and the hypofrontality complexities (the pacing dilemma; poverty of speech and left-DLPFC flow)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Weinberger DR et al. — the early hypofrontality observations and the Wisconsin-card-sort activation tradition; Weinberger D & Berman K — the cortical-inefficiency and distributed-network frameworks", sourceType: "primary", year: "1980s-1990s", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Shenton ME et al. — the temporal-lobe and hippocampal MRI meta-analytic tradition", sourceType: "meta-analysis", year: "1990s-2000s", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Johnstone EC et al. — the original CT ventricular-enlargement discovery in schizophrenia", sourceType: "primary", year: "1976", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Ogawa S et al. and Kwong K et al. — the BOLD discovery papers (deoxyhaemoglobin's paramagnetism as the contrast agent)", sourceType: "primary", year: "1990-1992", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Tamminga C et al. and the post-Oxford connectivity literature — flagged in the note as later developments", sourceType: "review", year: "post-2009", dateReviewed: "2026-09-30" },
    { id: "S11", source: "The Oxford ch 2.3.6 radiotracer table — the PET/SPET ligand inventory and the serotonergic imaging lines, as synthesised in the source chapter", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S12", source: "The Indian tier — the NIMHANS and metro-academic fMRI tradition, the district CT/MRI availability tiers, PET's oncology deployments and the first-episode window; cost realities (approx 2026)", sourceType: "review", year: "2010s-2020s", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "PET methodology: cyclotron-produced positron emitters (15O half-life 2.03 min, 11C 20.4 min, 18F 109.8 min) incorporated into biological molecules at microgram masses with no pharmacological effect; SPET's longer-lived isotopes (99mTc 6.02 h, 123I 13.2 h); annihilation producing two 180-degree-opposed gamma rays detected by coincidence-linked crystal pairs, localising radiation to the inter-detector volume; quantitative modelling of time-activity data into receptor numbers, regional cerebral blood flow, and glucose and oxygen metabolism; PET the research standard (tracer diversity, quantitation, hot-cell radiochemistry burden), SPET the clinical-deployment option (simplicity, cost), resolution millimetre-level with SPET somewhat coarser.", grade: "established", sources: ["S1", "S11"] },
    { text: "The D2-occupancy thresholds: striatal D2 receptor occupancy of about 65% for antipsychotic effect, with extrapyramidal symptoms emerging beyond about 80% — established with the D2/D3 ligands ([11C]raclopride, [11C]FLB 457; the SPET tracers IBZM and epidepride) — explaining dose-response ceilings (risperidone beyond ~6 mg adds side effects, not benefit); clinical monitoring uses clinical observation, not scanners.", grade: "established", sources: ["S4", "S1"] },
    { text: "Hypofrontality in schizophrenia: present in about 50% of resting-state studies and more often in activation paradigms; the moderating variables being task nature and demands, patient performance and symptom profile, with negative symptoms showing the strongest associations (the large 30-patient resting-flow study's factor-analytic support); poverty of speech reducing left-DLPFC flow irrespective of diagnosis (depression or schizophrenia — symptoms, not diagnoses, drive blood flow); the pacing dilemma (slowing tasks to match performance may hide the dysfunction expressed at normal demands); the cortical-inefficiency reformulation (enhanced frontal activation when patients and controls perform at similar levels).", grade: "supported", sources: ["S6", "S5", "S1"] },
    { text: "The serotonergic imaging lines: [11C]WAY 100635 for 5-HT1A with the reduced-availability findings in depression and anxiety; [11C]NMSP, [18F]altanserin and [18F]setoperone for 5-HT2A; the transporter ligands ([11C]DASB and successors) for the depression and treatment studies; the benzodiazepine-receptor ligands; and the amphetamine-challenge dopamine-release paradigms showing schizophrenia's excessive release, with the dopamine-synthesis-capacity and D1 ligands completing the dopamine-system imaging.", grade: "supported", sources: ["S1", "S11"] },
    { text: "Structural MRI physics: protons in a strong static field excited by radiofrequency pulses at the Larmor frequency; T1 (spin-lattice, longitudinal recovery) and T2 (spin-spin, transverse dephasing) relaxation, tissue-environment-dependent; the spin-echo sequence (90-degree pulse, dephasing, 180-degree rephasing pulse, the echo at TE); slice-selective, frequency- and phase-encoding gradients; multislice acquisition with voxel resolution ~0.5-2 mm at 1.5T — the visible grey-matter, white-matter and CSF contrast, the anatomical examination without radiation, repeatable across an illness course.", grade: "established", sources: ["S1"] },
    { text: "The replicated morphometric findings in schizophrenia: lateral ventricular enlargement (among the most replicated findings in biological psychiatry, the CT-era discovery confirmed and quantified by MRI); temporal-lobe volume reduction and hippocampal volume decrease (macroscopically visible in about one-third of patients, associated with the memory impairments); thalamic and cerebellar vermis abnormalities — the structural changes distributed rather than focal, with the first-episode studies showing many changes already present and the longitudinal studies some progression (the neurodevelopmental-versus-progressive debate).", grade: "established", sources: ["S8", "S7", "S1"] },
    { text: "The interpretation disciplines for structural findings: hospital-sample bias; the medication effects (caudate enlargement with typical antipsychotics); substance-misuse confounds; manual-versus-automated measurement — and in the affective disorders, the hippocampal-volume literature (the HPA-cortisol link) and the subcortical and white-matter hyperintensity findings of late-life depression (the vascular-depression connections).", grade: "established", sources: ["S1", "S7"] },
    { text: "The BOLD fMRI chain: neural activity within ~100 ms of the stimulus, neurovascular coupling (Roy and Sherrington's 1894 insight; mechanisms complex and not fully defined), local blood flow increasing 3-8 seconds after stimulus onset without commensurate oxygen uptake, the oxygenated-to-deoxygenated haemoglobin ratio rising, deoxyhaemoglobin's paramagnetic effect diluted, T2* prolonged — the measurable BOLD signal with changes of 3% or less; acquired by gradient-echo and echo-planar sequences (rapid gradient blipping, up to 128 echoes per excitation, whole-brain multislice in 2 seconds or less) and analysed through block and event-related designs with the statistical parametric-mapping tradition.", grade: "established", sources: ["S2", "S9", "S3"] },
    { text: "The fMRI artefacts: movement (inevitable; submillimetre motion causes significant artefact — anxiety reduction, clear task instruction, comfort, button-press rather than speech responses; cardiorespiratory pulsation aliasing); susceptibility (signal loss near bone and sinuses over inferior temporal and orbitofrontal regions — precisely the frontal-temporal territories psychiatry most wants, compounded by speaking: sinus deformation mimicking activation, images not acquired during articulation); the usual MRI contraindications (ferromagnetic implants, claustrophobia).", grade: "established", sources: ["S2"] },
    { text: "fMRI's clinical position: the clinical role remains limited to specialised applications such as hemispheric dominance assessment before neurosurgery; the psychiatric applications are research (cognitive-activation studies across disorders; the connectivity and network analyses maturing post-Oxford), not yet diagnostic tests — with the repetition advantage (no radiation, so a single subject can be examined on many occasions and patients studied ethically and serially).", grade: "established", sources: ["S2", "S10"] },
    { text: "The imaging cascade in the psychiatric workup: structural MRI to exclude lesions (tumours, hydrocephalus, the dementias) as the standard clinical use; functional imaging as research — the distinction that keeps requesting habits rational; and the honest verdict that the findings (ventricular, hippocampal, activation) are strong evidence of brain involvement without yet individualising diagnosis.", grade: "established", sources: ["S1", "S2"] },
    { text: "The Indian tier: the 'MRI brain, ?organicity' referral serving the lesion-exclusion function; district CT (adequate for haemorrhage, large lesions, gross atrophy), MRI with the temporal-lobe protocol (mesial temporal sclerosis, the epilepsy-psychiatry interface) in district hospitals, research fMRI in the few centres (the NIMHANS and metro-academic tradition), PET metro-research with oncology paying the cyclotron bills; costs approx 2026 (CT inexpensive everywhere, MRI in the few-thousands of rupees in public institutions, PET-CT oncology-priced); the wide Indian first-episode window (admission queues months long); the interpretation disciplines India needs most (hospital-sample bias, the medication confound) — practice-pattern description from Indian clinical literature, context honestly labelled.", grade: "supported", sources: ["S12"] },
  ],
};
