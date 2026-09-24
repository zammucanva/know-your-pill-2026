import type { PsychiatryCourse } from "./types";

/**
 * NEUROTRANSMITTERS & SIGNALLING — canonical Psychiatry course
 * (pilot 3: concept lesson).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/neurotransmitters.md — untouched foundation).
 *
 * This is the concept-course demonstration: Lesson 3's diagnostic
 * machinery (criteria/severity/differential) is intentionally
 * NOT_APPLICABLE — a science concept teaches "why it matters
 * clinically" instead. Drug Navigation is rich: every major
 * transmitter maps to existing KYP drug lessons.
 */
export const neurotransmittersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "neurotransmitters",
  title: "Neurotransmitters & Signalling",
  kind: "concept",
  category: "Foundations & sciences",
  groupLetter: "Q",
  groupName: "Basic sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Neurotransmitters & Signalling"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-25",

  tagline:
    "The shared language of the brain — and the grammar of every drug you will ever prescribe in psychiatry.",
  summary:
    "Chemical neurotransmission is how brain cells talk: dozens of transmitter families, hundreds of receptor proteins, and cascades that reach the genome. Nearly every drug in psychiatry works by entering this conversation — SSRIs at SERT, bupropion at DAT/NET, benzodiazepines at GABA-A, clozapine at D2 and 5-HT2A, lithium at the inositol cycle. This concept course teaches the system once, so every drug lesson afterwards becomes readable: the life cycle of a transmitter, the two great receptor families, the retrograde messengers, and the cascade that explains why antidepressants take weeks.",
  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define a neurotransmitter by its classical criteria, and explain why the fast/slow transmitter-modulator distinction collapsed.",
    "List the major transmitter classes (amines, amino acids, neuropeptides, purines, trophic factors, cytokines, endocannabinoids, gases) with a psychiatric example of each.",
    "Trace the life cycle of a small-molecule transmitter — synthesis, vesicular storage, release, reception, reuptake, metabolism — and place every major psychiatric drug on that diagram.",
    "Contrast ligand-gated ion channels with G-protein-coupled receptors structurally and functionally, with psychiatric drug examples of each.",
    "Explain retrograde signalling (nitric oxide, endocannabinoids) and why CB1 is a drug target.",
    "Describe second-messenger cascades (cAMP, IP3/DAG, cGMP), their regulation, and the lithium-inositol and GSK3-beta stories.",
    "State the CREB-BDNF-plasticity account of delayed antidepressant action — as a hypothesis, honestly flagged.",
    "Connect the neuroscience to Indian pharmacology heritage: reserpine from Rauwolfia serpentina, and what its history taught neuropsychopharmacology.",
  ],
  quickFacts: [
    { label: "Classical criteria", value: "3", detail: "Localised in neurones → released on depolarisation → acts on receptors of the target cell" },
    { label: "Transmitter families", value: "Dozens", detail: "Amines, amino acids, neuropeptides, purines, trophic factors, cytokines, endocannabinoids, gases (NO, CO)" },
    { label: "5-HT receptor subtypes", value: "14", detail: "13 GPCRs + the 5-HT3 ion channel, across 7 families" },
    { label: "Dopamine receptors", value: "D1–D5", detail: "D1-like (Gs) vs D2-like (Gi) — the antipsychotic target family" },
    { label: "Receptor families", value: "2 (+1)", detail: "Ionotropic (ms) and metabotropic/GPCR (hundreds of ms–s) — plus receptor tyrosine kinases for trophic factors" },
    { label: "G-protein classes", value: "Gs / Gi / Gq / G0", detail: "↑cAMP, ↓cAMP, PLC (IP3+DAG), ion channels" },
    { label: "Endogenous opioid peptides", value: "≥ 18", detail: "From three genes: POMC, proenkephalin, prodynorphin" },
    { label: "India's gift", value: "Reserpine", detail: "From Rauwolfia serpentina (sarpagandha) — the VMAT-blocking, amine-depleting teaching case" },
  ],
  knowledgeGraph: [
    { label: "Sertraline (SSRI)", type: "drug", href: "/drugs/sertraline/", note: "Blocks SERT — serotonin reuptake" },
    { label: "Fluoxetine (SSRI)", type: "drug", href: "/drugs/fluoxetine/", note: "Blocks SERT — longest half-life" },
    { label: "Bupropion (NDRI)", type: "drug", href: "/drugs/bupropion/", note: "Blocks DAT/NET — dopamine + noradrenaline" },
    { label: "Mirtazapine (NaSSA)", type: "drug", href: "/drugs/mirtazapine/", note: "α2 antagonist + 5-HT2/5-HT3 blockade" },
    { label: "Amitriptyline (TCA)", type: "drug", href: "/drugs/amitriptyline/", note: "Blocks SERT/NET + H1/M1/α1 receptors" },
    { label: "Venlafaxine (SNRI)", type: "drug", href: "/drugs/venlafaxine/", note: "SERT + NET (dose-dependent)" },
    { label: "Serotonin", type: "neurotransmitter", href: "#neurotransmitters", note: "14 receptor subtypes; SERT drugs act on it" },
    { label: "Dopamine", type: "neurotransmitter", href: "#neurotransmitters", note: "Mesolimbic/mesocortical/nigrostriatal/tuberoinfundibular" },
    { label: "Noradrenaline", type: "neurotransmitter", href: "#neurotransmitters", note: "α and β receptor families" },
    { label: "GABA", type: "neurotransmitter", href: "#neurotransmitters", note: "GABA-A channel = benzodiazepine site" },
    { label: "Glutamate", type: "neurotransmitter", href: "#neurotransmitters", note: "AMPA/NMDA + mGluR1–8" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "#neurotransmitters", note: "Nicotinic (channel) + muscarinic (GPCR)" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "Dopamine version III + NMDA model" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The CREB-BDNF cascade story" },
    { label: "Prefrontal Cortex", type: "brain-region", href: "#brain", note: "Target of mesocortical dopamine" },
    { label: "Basal Ganglia", type: "brain-region", href: "#brain", note: "Nigrostriatal dopamine — EPS substrate" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience (the whole topic) ---- */
  mechanism: {
    summary:
      "Neurotransmission is a lifecycle, not a switch: transmitters are made, stored in vesicles, released, received, terminated and recycled — and psychiatry's drugs each intervene at a named step. The two receptor families (fast ion channels vs slow GPCRs) explain why the same molecule can act in milliseconds or minutes depending on which receptor it meets, and the second-messenger cascades explain how a synaptic event becomes a gene-expression event — the road that makes antidepressant delay biologically sensible.",
    grade: "established",
    steps: [
      "Synthesis: small-molecule transmitters are made at the nerve terminal by a few enzymatic steps (tyrosine → L-DOPA → dopamine → noradrenaline; tryptophan → 5-HT; glutamate from glutamine; GABA from glutamate via GAD).",
      "Vesicular storage: proton-coupled vesicular transporters concentrate transmitter into synaptic vesicles — VMAT2 for monoamines (the reserpine target), VGLUT for glutamate, VGAT for GABA and glycine.",
      "Release: the action potential arrives, voltage-gated Ca2+ channels open, vesicles fuse — and presynaptic autoreceptors (α2, 5-HT1A/B, D2) provide brake feedback.",
      "Reception: ionotropic receptors (AMPA, NMDA, GABA-A, nicotinic, 5-HT3, P2X) signal in milliseconds; metabotropic GPCRs (Gs/Gi/Gq/G0) signal over hundreds of milliseconds to seconds; trophic factors use receptor tyrosine kinases (TrkB for BDNF) as a third family.",
      "Termination: plasma-membrane reuptake transporters (DAT, NET, SERT; GAT-1/2/3, BGT-1; GLYT1/2; EAAT1–5) pull transmitter back — the single most drugged step in psychiatry — followed by metabolism (MAO, COMT, peptidases).",
      "Retrograde signalling: NO (from NMDA-receptor-driven nitric oxide synthase) and endocannabinoids (anandamide, 2-AG) are made postsynaptically ON DEMAND and diffuse backwards to presynaptic CB1/cGMP targets.",
      "Cascade to genome: GPCR → G-protein → effector → protein kinases → CREB → BDNF and other plasticity genes — the proposed bridge from hours-scale drug chemistry to weeks-scale clinical change.",
    ],
  },
  brainRegions: [
    { id: "raphe-nuclei", name: "Raphe Nuclei", role: "Origin of the entire serotonin system — where SSRIs raise synaptic 5-HT first (and where 5-HT1A autoreceptors impose the weeks-long brake-release delay).", grade: "established" },
    { id: "substantia-nigra", name: "Substantia Nigra / VTA", role: "Dopamine cell bodies giving rise to all four pathways — the starting point of the dopamine story every antipsychotic enters.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal Cortex", role: "Target of mesocortical dopamine and noradrenergic input — executive function, working memory, attention; the cortex-side of most psychiatric drug action.", grade: "established" },
    { id: "nucleus-accumbens", name: "Nucleus Accumbens", role: "Mesolimbic dopamine terminus — reward and salience; where aberrant salience (psychosis) and anhedonia (depression) live circuit-wise.", grade: "established" },
    { id: "basal-ganglia", name: "Basal Ganglia (Striatum)", role: "Nigrostriatal dopamine territory — the movement price of D2 blockade (EPS) and the site of the imaging-supported psychosis finding.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "From the raphe nuclei to everywhere: mood, sleep, appetite, impulsivity, perception. 14 receptor subtypes — 13 GPCRs (5-HT1–7 families) + the 5-HT3 ion channel (the vomiting/nausea receptor ondansetron blocks).", grade: "established", drugConnection: "All six KYP SSRI lessons (Sertraline, Fluoxetine, Escitalopram, Paroxetine, Citalopram, Fluvoxamine)" },
    { name: "Dopamine", symbol: "DA", role: "Four pathways, four clinical stories: mesolimbic (reward/psychosis), mesocortical (cognition/negative symptoms), nigrostriatal (movement/EPS), tuberoinfundibular (prolactin). D1-like (Gs) vs D2-like (Gi) receptor families.", grade: "established", drugConnection: "Bupropion (NDRI) in KYP; antipsychotic lessons pending (content gap)" },
    { name: "Noradrenaline", symbol: "NE", role: "Arousal, attention, energy, stress-response. α1/α2/β receptor families; α2-autoreceptors are the clonidine story and the mirtazapine entry point.", grade: "established", drugConnection: "Venlafaxine/Duloxetine (SNRIs), Bupropion (NDRI), Mirtazapine (α2 antagonist)" },
    { name: "GABA", symbol: "GABA", role: "The brain's main brake. GABA-A (chloride channel — benzodiazepine/barbiturate/ethanol/steroid allosteric sites; α1 sedation vs α2/α3 anxiolysis) and GABA-B (baclofen). Termination via GAT-1 (tiagabine's target).", grade: "established", drugConnection: "Benzodiazepine lesson pending (content gap)" },
    { name: "Glutamate", symbol: "Glu", role: "The brain's main accelerator. AMPA/kainate/NMDA channels (Mg2+ voltage block, glycine co-agonist site) + mGluR1–8; EAAT1–5 clearance; the NMDA-hypofunction model of psychosis and the esketamine story.", grade: "established", drugConnection: "Ketamine/esketamine lesson pending (content gap)" },
    { name: "Acetylcholine", symbol: "ACh", role: "Nicotinic (channel — smoking, attention) and muscarinic (GPCR — the TCA dry-mouth/memory price; the cognitive side of antimuscarinic burden).", grade: "established", drugConnection: "Amitriptyline/Imipramine antimuscarinic effects (see TCA lessons)" },
    { name: "Endogenous opioids", symbol: "β-END / Enk / Dyn", role: "≥ 18 peptides from three genes (POMC → β-endorphin; proenkephalin → met/leu-enkephalin; prodynorphin → dynorphins) — pain, reward, stress buffering.", grade: "established", drugConnection: "Opioid-use-disorder lessons pending (content gap)" },
  ],
  pathways: [
    {
      id: "nt-lifecycle",
      name: "The transmitter life cycle (drug map)",
      steps: [
        { label: "Synthesis (enzymes)", detail: "Tyrosine hydroxylase = rate-limiting" },
        { label: "Vesicular storage (VMAT2)", detail: "RESERPINE blocks here" },
        { label: "Ca2+-triggered release", detail: "Amphetamines reverse DAT/NET" },
        { label: "Reception (ionotropic/GPCR)", detail: "Most drug targets live here" },
        { label: "Reuptake (DAT/NET/SERT)", detail: "SSRIs, SNRIs, bupropion, cocaine" },
        { label: "Metabolism (MAO/COMT)", detail: "MAO inhibitors" },
      ],
      clinicalManifestation: "Place every psychiatric drug on this diagram and mechanism questions answer themselves — the single highest-yield study frame in psychopharmacology.",
      grade: "established",
    },
    {
      id: "nt-delay-cascade",
      name: "Why antidepressants take weeks (the honest cascade)",
      steps: [
        { label: "SERT blockade (hours)", detail: "Synaptic 5-HT rises acutely" },
        { label: "Autoreceptor desensitisation (days–weeks)", detail: "5-HT1A brake releases" },
        { label: "cAMP → PKA → CREB", detail: "Signal reaches the genome" },
        { label: "BDNF transcription", detail: "Trophic support restored" },
        { label: "Synaptic remodelling (weeks)", detail: "The plasticity repair — clinical response" },
      ],
      clinicalManifestation: "The 2–4 week delay is the mechanism working — teach it to protect adherence (see the Depressive Disorders course).",
      grade: "proposed",
    },
    {
      id: "nt-retrograde",
      name: "The backwards synapse",
      steps: [
        { label: "Glutamate → NMDA (postsynaptic)", detail: "Ca2+-calmodulin activates NOS" },
        { label: "NO diffuses backwards", detail: "Not stored, not vesicular — made on demand" },
        { label: "Presynaptic cGMP rise", detail: "Enhanced transmitter release" },
        { label: "Endocannabinoid variant", detail: "2-AG/anandamide → presynaptic CB1 → SUPPRESSED release" },
      ],
      clinicalManifestation: "CB1 is why THC feels physiological (the brain's own system) and why CB1 remains a prime drug-design target.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "nt-1921", time: "1921", title: "Loewi's 'Vagusstoff'", description: "The first transmitter identified (acetylcholine) — the experiment that proved chemical neurotransmission.", phase: "onset" },
    { id: "nt-1950s", time: "1950s", title: "The serendipity decade", description: "Reserpine (from Indian snakeroot) depletes amines → tranquillity then depression; iproniazid inhibits MAO → euphoria; chlorpromazine calms psychosis — the monoamine era begins from clinical accidents.", phase: "onset" },
    { id: "nt-1970s", time: "1970s", title: "Receptors get families", description: "Receptor subtype pharmacology matures — multiple 5-HT receptors, dopamine D1/D2, GABA-A complexity — replacing one-receptor-one-drug thinking.", phase: "peak" },
    { id: "nt-1990s", time: "1990s", title: "Structural biology + transporters", description: "Transporters cloned and crystallised (LeuT-desipramine structure explains how antidepressants block reuptake); retrograde messengers accepted.", phase: "peak" },
    { id: "nt-2000s", time: "2000s", title: "The plasticity turn", description: "CREB-BDNF cascades and neurogenesis enter the mainstream — depression models move from amine levels to trophic/circuit repair.", phase: "recovery" },
    { id: "nt-2019", time: "2019", title: "The glutamate disruption", description: "Esketamine approval breaks the monoamine monopoly on rapid antidepressant action — NMDA receptor pharmacology becomes clinical.", phase: "recovery" },
    { id: "nt-2020s", time: "2020s", title: "Honest recalibration", description: "The serotonin umbrella review (2023) forces textbook-level precision: amine pharmacology explains the drugs, not the whole disease — exactly how KYP grades every claim.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept-appropriate subset) ---- */
  epidemiology: undefined,
  etiology: undefined,
  symptomClusters: undefined,
  diagnosticCriteria: undefined,
  severityScales: undefined,
  differentialDiagnosis: undefined,
  management: [
    { category: "lifestyle", name: "Read every prescription by its receptor", description: "The practical output of this course: SSRI = SERT; bupropion = DAT/NET; mirtazapine = α2 + 5-HT2/3 + H1; TCAs add M1/α1/H1 blockade; benzodiazepines = GABA-A allosteric; clozapine = D2 + 5-HT2A + more; lithium = inositol-cycle/GSK3β.", whenToUse: "Every prescribing and exam situation — mechanism-based reasoning beats recipe-based prescribing." },
    { category: "lifestyle", name: "Predict side effects from receptors", description: "Sedation vs anxiolysis of benzodiazepines map to GABA-A α-subunits; TCA dry mouth/constipation = M1; orthostasis = α1; weight gain = H1 + 5-HT2C; EPS = nigrostriatal D2; sexual dysfunction = serotonergic 5-HT2/5-HT tone.", whenToUse: "Drug selection, counselling, and exam side-effect matching." },
    { category: "psychotherapy", name: "Teach the delay as biology", description: "The cascade logic (amines ↑ in hours; benefit in weeks via plasticity genes) converts patient anxiety about 'the medicine not working' into an adherence-protecting explanation.", whenToUse: "Every antidepressant initiation consult." },
  ],
  safety: undefined,
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "SERT blocker (SSRI)", rationale: "The cleanest SERT-only teaching example — plus σ1 agonism and mild CYP2D6." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "SERT blocker (SSRI)", rationale: "Long half-life via norfluoxetine — PK teaching built on the same SERT site." },
    { name: "Escitalopram", slug: "escitalopram", role: "SERT blocker (SSRI)", rationale: "S-enantiomer allosteric SERT binding — subtype pharmacology in one drug." },
    { name: "Paroxetine", slug: "paroxetine", role: "SERT blocker (SSRI)", rationale: "Adds muscarinic affinity — anticholinergic burden read through receptors." },
    { name: "Citalopram", slug: "citalopram", role: "SERT blocker (SSRI)", rationale: "Racemic parent of escitalopram; hERG dose-dependent QTc — channels beyond synapses." },
    { name: "Fluvoxamine", slug: "fluvoxamine", role: "SERT blocker (SSRI)", rationale: "σ1 agonism + CYP1A2 inhibition — clozapine/caffeine interactions taught through metabolism." },
    { name: "Venlafaxine", slug: "venlafaxine", role: "SERT + NET blocker (SNRI)", rationale: "Dose-dependent NET engagement — transporter affinity hierarchy made visible." },
    { name: "Duloxetine", slug: "duloxetine", role: "SERT + NET blocker (SNRI)", rationale: "Balanced from dose one; pain indications via descending noradrenergic pathways." },
    { name: "Bupropion", slug: "bupropion", role: "DAT/NET blocker (NDRI)", rationale: "The dopamine/noradrenaline lesson — plus nicotinic receptor antagonism." },
    { name: "Mirtazapine", slug: "mirtazapine", role: "α2 antagonist + 5-HT2/3 + H1 (NaSSA)", rationale: "Receptor-antagonist logic — the course's 'receptor pharmacology made clinical' showcase." },
    { name: "Amitriptyline", slug: "amitriptyline", role: "SERT/NET + M1/α1/H1 (TCA)", rationale: "The polypharmacology poster-child — every receptor price visible in one drug." },
    { name: "Clomipramine", slug: "clomipramine", role: "Most serotonergic TCA", rationale: "SERT selectivity inside the TCA class — OCD efficacy read through serotonin." },
  ],
  contentGaps: [
    "Benzodiazepines (diazepam, lorazepam, clonazepam) — no KYP lesson yet; requested for the GABA-A/allosteric pharmacology and clinical anxiety/catatonia routes",
    "Antipsychotics (clozapine above all, for the D2 + 5-HT2A story) — requested as the highest-priority batch",
    "Lithium — requested for the inositol-monophosphatase / GSK3β molecular stories",
    "Esketamine/ketamine — requested for the NMDA/glutamate chapter",
  ],
  patientGuide: {
    whatIsIt:
      "Brain cells talk using chemical messages called neurotransmitters. There are dozens of them, each with its own family of receivers (receptors), and they control mood, sleep, energy, fear, reward and memory.",
    whatCausesIt:
      "This is basic science rather than an illness — but its clinical meaning: many psychiatric medicines work by changing how these messages are sent, received or recycled.",
    symptoms:
      "Not applicable — this is a foundation-science concept (the completion matrix marks diagnostic sections NOT_APPLICABLE).",
    treatment:
      "When a doctor prescribes an antidepressant, it changes messenger chemistry within hours, but the brain's full healing response — rebuilding connections — takes a few weeks. That delay is normal biology, not the medicine failing.",
    selfHelp: [
      "If you take a psychiatric medicine, know which messenger system it touches — your doctor can name it in one sentence",
      "Expect the 2–4 week window for antidepressants; ask before stopping",
      "Side effects often follow the receptors: dry mouth, sleepiness and dizziness each have a receptor story your doctor can explain",
    ],
    whenToSeekHelp: [
      "If a prescribed medicine causes effects you did not expect — a pharmacist or doctor can usually explain which receptor is responsible",
      "Never mix prescription psychiatric medicines with alcohol or recreational drugs without asking — interactions happen at these same receptors and transporters",
    ],
    indianResources: [
      "Tele-MANAS 14416 — medication questions answered in Indian languages, free and confidential",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines:
      "Not applicable in the guideline sense (no disease guideline governs basic signalling science) — but the NMC CBME pharmacology curriculum expects mechanism-of-action answers at this exact level, and Indian postgraduate exams test transporter/receptor pharmacology directly from this frame.",
    systemContext:
      "Indian medical students meet DAT, SERT and GABA-A in second-professional pharmacology before they meet psychiatry — this course supplies the connective tissue between the two, at the depth Indian postgraduate vivas expect.",
    programmeContext:
      "NMHP/Tele-MANAS counselling increasingly involves medication-adherence conversations with patients and families — the 'why does it take weeks?' explanation in this course is the single highest-yield counselling script for that layer.",
    costConsiderations:
      "Mechanism-based prescribing supports cost-effective care in India: understanding that generic sertraline and branded sertraline act at the identical SERT site lets a rational prescriber use inexpensive options confidently, and understanding receptor-driven side effects prevents costly cascades of unnecessary co-prescriptions.",
    culturalConsiderations:
      "India's pharmacological heritage runs through this course: reserpine from Rauwolfia serpentina (sarpagandha) — used for centuries in Indian medicine for psychosis and hypertension — became the world's cleanest demonstration that depleting monoamines changes mental state. The story is taught in Indian classrooms as both heritage and cautionary pharmacology.",
    patientCounselling: [
      "The weeks-delay explanation (cascade, not failure) — the single most adherence-protecting sentence in Indian psychiatric practice.",
      "Receptor-based side-effect reasoning: 'the dry mouth is the medicine's effect on an acetylcholine receiver — it usually settles; tell me if it doesn't.'",
      "Why identical-looking generic and branded tablets work the same: the target is the same molecule.",
    ],
  },
  decisionPath: undefined,
  commonMistakes: [
    { mistake: "Learning drug mechanisms as arbitrary lists", why: "Lists fade; mechanisms generalise — the life-cycle diagram explains whole drug classes at once.", correction: "Place every drug on the synthesis→storage→release→reception→reuptake→metabolism frame; exam questions become pattern-matching." },
    { mistake: "Teaching 'low serotonin causes depression' as settled fact", why: "The 2023 umbrella review found no convincing support for the simple deficiency model; overselling it erodes trust when patients read otherwise.", correction: "Say: amine pharmacology explains how the DRUGS act; the disease is a multi-system plasticity disorder." },
    { mistake: "Confusing ionotropic and metabotropic receptor classes", why: "Speed, structure and drug families all differ — mixing them causes exam errors and prescribing confusion.", correction: "Ionotropic = multi-subunit pore = milliseconds (GABA-A, NMDA, 5-HT3, nicotinic). Metabotropic = 7TM GPCR = seconds + cascades (most amine receptors)." },
    { mistake: "Forgetting transporters are the druggable step", why: "SERT/NET/DAT selectivity determines SSRI vs SNRI vs stimulant profiles — the highest-yield distinction in the class.", correction: "Memorise the transporter hierarchy: SERT < NET < DAT affinity determines the class." },
    { mistake: "Treating receptor subtypes as trivia", why: "α1 sedation vs α2 anxiolysis, 5-HT2A psychosis/antipsychotic logic, GABA-A α-subunit selectivity — subtypes ARE the clinical pharmacology.", correction: "Attach one clinical fact to each subtype as you learn it." },
    { mistake: "Presenting the CREB-BDNF cascade as proven mechanism", why: "It is the leading hypothesis with incomplete links — presenting it as settled overstates the science.", correction: "Teach it flagged: 'proposed, incomplete, driving current research' — exactly how the source textbook frames it." },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  clinicalCases: [
    {
      title: "The interaction that taught a ward CYP1A2",
      presentation: "A 29-year-old man with schizophrenia, stable on clozapine 300 mg, develops nausea, heavy sedation and drooling two weeks after fluvoxamine is added for obsessive-compulsive symptoms.",
      history: "Schizophrenia diagnosed 4 years ago; two prior relapses after stopping medicines. OCD-type intrusive symptoms emerged this year; the visiting psychiatrist added fluvoxamine 100 mg without changing the clozapine. No fever, no sore throat. Non-smoker since admission (was a smoker until 6 months ago).",
      examination: "Sedated but rousable; hypersalivation; mild tachycardia; no rigidity, no fever, no dystonia. Clozapine level (sent later): markedly supratherapeutic. ANC: normal.",
      diagnosis: "Clozapine toxicity due to a pharmacokinetic interaction: fluvoxamine (a potent CYP1A2 inhibitor) sharply raises clozapine levels — the molecular-logic case this course teaches: the same liver enzyme that clears clozapine is the one fluvoxamine occupies.",
      management: "Hold fluvoxamine; reduce clozapine and re-titrate with level monitoring; symptomatic care for hypersalivation; document the interaction in the chart; involve the pharmacist for the discharge medication-counselling script.",
      outcome: "Sedation resolved over 4 days on reduced clozapine; OCD symptoms addressed with CBT-based exposure plus an alternative agent chosen with the interaction table in hand; levels restabilised at the lower dose.",
      teachingPoints: [
        "Transporter and enzyme pharmacology is prescribing pharmacology: fluvoxamine at SERT (clinical effect) AND CYP1A2 (interaction) is one molecule, two stories.",
        "Smoking status changes clozapine levels through the same CYP1A2 route — cessation can raise levels exactly like this case.",
        "Every new prescription on a complex regimen deserves one interaction-table pass: it catches exactly this class of preventable harm.",
      ],
    },
  ],
  examLens: {
    mbbs: {
      viva: [
        "Classical criteria of a neurotransmitter; why the transmitter/modulator split died.",
        "Life cycle of a monoamine with drug placements (VMAT/reserpine; DAT-NET-SERT/antidepressants; MAO/MAOIs).",
        "Ionotropic vs metabotropic receptors with two psychiatric examples each.",
        "G-protein families and their second messengers (Gs/Gi/Gq/G0).",
        "Lithium's two molecular targets and their evidence status.",
      ],
      practical: [
        "Draw and label the transmitter life-cycle diagram with drug targets marked.",
        "Explain the delayed antidepressant action cascade to an examiner.",
        "Map five prescribed psychiatric drugs to their molecular sites in one table.",
      ],
      longAnswer: [
        "Neurotransmitter receptor families and their significance in psychiatry.",
        "Reuptake transporters as drug targets.",
        "Second-messenger systems and the mechanism of delayed antidepressant action.",
      ],
    },
    neetPg: {
      highYield: [
        "5-HT: 14 subtypes (13 GPCR + 5-HT3 channel); 5-HT2A closes K+ channels (LSD story); 5-HT3 = vomiting (ondansetron).",
        "Dopamine: D1-like (Gs) vs D2-like (Gi); four pathways and their clinical failures (EPS, prolactin, negative symptoms).",
        "GABA-A: benzodiazepine site = α+γ interface; α1 sedation, α2/3 anxiolysis, α5 alcohol effects (point-mutated mouse experiments).",
        "NMDA: Mg2+ voltage-dependent block + glycine co-agonist site; PCP/ketamine binding site.",
        "Transporters: SERT/NET/DAT (SSRIs/SNRIs/stimulants); GAT-1 (tiagabine); VMAT (reserpine); EAAT (glial clearance).",
        "G-proteins: Gs↑cAMP, Gi↓cAMP, Gq→PLC→IP3+DAG, G0→channels.",
        "Lithium: inositol monophosphatase inhibition (inositol-depletion hypothesis — unproven) + GSK3β inhibition (valproate too).",
        "Retrograde: NO (NMDA-driven, cGMP) and endocannabinoids (anandamide/2-AG → CB1).",
      ],
      pyqConcepts: [
        "Match-the-drug-to-its-molecular-site questions (reserpine→VMAT, tiagabine→GAT-1, ondansetron→5-HT3, clonidine→α2, fluvoxamine→CYP1A2/SERT).",
        "GABA-A α-subunit function matching (sedation vs anxiolysis vs alcohol).",
        "Second-messenger pathway matching (which G-protein → which messenger).",
        "Antidepressant-delay mechanism ordering questions.",
        "Reserpine's Indian origin + depression as dose-limiting effect.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on an SSRI develops agitation, clonus and hyperthermia after tramadol — serotonin syndrome through the pharmacology this course teaches.",
        "A patient on fluvoxamine needs clozapine dose reduction — CYP1A2 logic meets clinical prescribing.",
        "Esketamine's rapid action vs SSRI delay — transporter blockade vs NMDA modulation as two different entries into the same plasticity pathway.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Neurotransmitter criteria and classes.",
        "Acetylcholine receptor families (nicotinic channel vs muscarinic GPCR).",
        "Receptor desensitisation (GRK/β-arrestin) as tolerance mechanism.",
        "Endocannabinoid retrograde signalling concept.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Before escalating any psychiatric drug, name its molecular site — the site usually predicts the escalation problem.",
        "Transporter selectivity explains class differences; receptor portfolios explain patient differences — read both before switching.",
        "Cascade pharmacology (CREB-BDNF) is why cross-tapering beats abrupt switching, and why withdrawal phenomena follow pattern.",
        "Fluvoxamine-clozapine (CYP1A2) remains the classic teaching interaction of receptor-plus-metabolism reasoning.",
      ],
    },
  },
  clinicalPearls: [
    "One diagram — synthesis → vesicular storage → release → reception → reuptake → metabolism — explains every mechanism question in psychopharmacology.",
    "The fastest way to learn a psychiatric drug is to learn its molecular site; the fastest way to learn side effects is its receptor portfolio.",
    "Same transmitter, different receptor, different drug: serotonin at 5-HT2A (psychotomimetic) vs 5-HT3 (vomiting) vs 5-HT1A (anxiolysis/autoreceptors).",
    "Delay is biology: hours-scale chemistry, weeks-scale gene-expression change — the adherence-protecting fact.",
    "Reserpine taught the field that depleting amines changes mood; the 2023 serotonin review taught it humility — both lessons belong in the same lecture.",
    "Subtype pharmacology is clinical pharmacology: benzodiazepine α-selectivity, antipsychotic D2 occupancy windows, TCA receptor burden.",
  ],
  highYieldSummary: [
    "Neurotransmitter = localised + released on depolarisation + receptor action; the fast/slow split collapsed with the receptor-subtype era.",
    "Life cycle + drug map: VMAT (reserpine) → release (amphetamines) → receptors (most drugs) → DAT/NET/SERT (SSRI/SNRI/NDRI/stimulants) → MAO/COMT (MAOIs).",
    "Two receptor families: ionotropic (ms; GABA-A, NMDA, AMPA, 5-HT3, nicotinic) vs metabotropic GPCR (s; Gs/Gi/Gq/G0) + Trk receptors for trophic factors.",
    "Key receptor facts: 5-HT × 14; DA D1-like/D2-like; GABA-A α-subunit selectivity (α1 sedation/α2,3 anxiolysis); NMDA Mg2+ block + glycine site.",
    "Retrograde messengers: NO (NMDA-driven, cGMP) and endocannabinoids (anandamide → CB1) — signals that travel backwards.",
    "Lithium: inositol monophosphatase (unproven hypothesis) + GSK3β inhibition (drug-design direction).",
    "Antidepressant delay: SERT blockade (hours) → autoreceptor desensitisation → CREB → BDNF → remodelling (weeks) — proposed, honestly flagged.",
    "Reserpine (Rauwolfia serpentina): India's pharmacological gift — VMAT blockade, amine depletion, tranquillity then depression.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    { id: "nt-mq1", question: "Reserpine produces its amine-depleting effect by blocking:", options: ["Dopamine D2 receptors", "The vesicular monoamine transporter (VMAT)", "The serotonin transporter SERT", "Monoamine oxidase"], correctIndex: 1, explanation: "VMAT blockade empties vesicular stores of dopamine, noradrenaline and 5-HT — the tranquillising (and eventually depressogenic) consequence.", afterSectionId: "mechanism" },
    { id: "nt-mq2", question: "Which receptor pair explains why the same transmitter can signal in milliseconds OR seconds?", options: ["Ionotropic vs metabotropic receptors", "Vesicular vs plasma transporters", "Autoreceptors vs heteroreceptors", "Agonists vs antagonists"], correctIndex: 0, explanation: "Ligand-gated ion channels signal in ms; GPCRs signal over hundreds of ms–s via G-proteins and second messengers — the same transmitter can use either.", afterSectionId: "neurotransmitters" },
    { id: "nt-mq3", question: "Gq-protein activation produces:", options: ["Increased cAMP", "Inhibition of adenylate cyclase", "Phospholipase C activation (IP3 + DAG)", "Direct potassium-channel opening"], correctIndex: 2, explanation: "Gs↑adenylate cyclase; Gi↓adenylate cyclase; Gq→PLC→IP3+DAG; G0 couples to ion channels.", afterSectionId: "pathways" },
    { id: "nt-mq4", question: "Point-mutated mouse studies separated diazepam's sedation from its anxiolysis by GABA-A:", options: ["α-subunit composition", "β-subunit phosphorylation", "γ-subunit loss", "chloride gradient reversal"], correctIndex: 0, explanation: "α1-containing receptors carry sedation; α2/α3 carry anxiolysis; α5 relates to alcohol effects — the design brief for selective benzodiazepines.", afterSectionId: "neurotransmitters" },
  ],
  activeRecallQuestions: [
    { question: "Recite the three classical criteria for a neurotransmitter and name two reasons the transmitter/modulator split died.", answer: "Criteria: localised in neurones; released on depolarisation; acts on target-cell receptors. The split died because (1) the same molecule is fast or slow depending on which RECEPTOR it meets, and (2) signals also travel backwards (NO, endocannabinoids) and by volume transmission — not just point-to-point.", topic: "Foundations" },
    { question: "Draw the dopamine life cycle from tyrosine to metabolism, placing VMAT, DAT and MAO on the diagram with their drugs.", answer: "Tyrosine → (tyrosine hydroxylase, rate-limiting) → L-DOPA → dopamine → VMAT2 into vesicles [RESERPINE blocks] → release → receptors + D2 autoreceptors → DAT reuptake [cocaine blocks; amphetamines reverse] → MAO/COMT metabolism [MAOIs block].", topic: "Life Cycle" },
    { question: "Contrast the two great receptor families structurally and functionally, with one psychiatric drug example each.", answer: "Ionotropic: multi-subunit pores (4–5 subunits × 4 transmembrane domains), ms signalling — benzodiazepines at GABA-A. Metabotropic: single 7-transmembrane proteins + heterotrimeric G-proteins (Gs/Gi/Gq/G0), seconds + cascades — antipsychotics at D2 (Gi). Plus the third family: receptor tyrosine kinases (TrkB for BDNF).", topic: "Receptors" },
    { question: "Explain the retrograde synapse with both messengers.", answer: "NO: glutamate → postsynaptic NMDA → Ca2+-calmodulin → NO synthase → NO diffuses back → presynaptic guanylate cyclase → cGMP → enhanced release. Endocannabinoids: made postsynaptically on demand (anandamide, 2-AG) → presynaptic CB1 → SUPPRESSED release — THC mimics this endogenous signal.", topic: "Retrograde Signalling" },
    { question: "Write out the delayed-antidepressant cascade and mark where the delay enters.", answer: "SERT blockade (hours) → synaptic 5-HT ↑ → 5-HT1A autoreceptor desensitisation (days–weeks — THE DELAY) → cAMP/PKA → CREB → BDNF transcription → synaptic remodelling → clinical response (2–4 weeks onset, 6–8 weeks full).", topic: "Cascade" },
    { question: "Give lithium's two molecular targets with their evidence status.", answer: "(1) Inositol-1-monophosphatase inhibition → inositol depletion dampening IP3/DAG signalling — the classic hypothesis, still UNPROVEN (inositol crosses the blood-brain barrier poorly). (2) GSK3β inhibition (shared with valproate) — trophic signalling reach, a focus for lithium-mimetic drug development.", topic: "Second Messengers" },
    { question: "Name three co-localised transmitter pairs and what each teaches pharmacologically.", answer: "GABA/dynorphin in movement pathways; CCK/dopamine in reward (schizophrenia research); glutamate/Substance P in pain; 5-HT/galanin in the raphe (galanin ligands as experimental antidepressants). Lesson: neurons are multilingual — drugs that target one transmitter ride circuits speaking several.", topic: "Peptides" },
    { question: "What is reserpine's double importance in Indian psychiatry teaching?", answer: "Heritage: from Rauwolfia serpentina (sarpagandha), centuries of Indian medicinal use before isolation. Pharmacology: VMAT blockade depleting dopamine/noradrenaline/5-HT is the cleanest single-molecule demonstration that transmitter depletion changes mental state — and its dose-limiting DEPRESSION is why it left psychiatric practice.", topic: "Indian Lens" },
  ],
  faqs: [
    { question: "Is depression just a chemical imbalance?", answer: "No — and this course explains exactly why that slogan fails. Amines are one chapter of a many-chaptered story: signalling reaches genes, trophic factors and circuits, and stress shapes the same machinery. Amine pharmacology explains the drugs we have, not the whole illness." },
    { question: "Why did my antidepressant take three weeks to work if it raises serotonin within hours?", answer: "The fast event is the chemistry; the therapeutic event is downstream — gene programmes (CREB, BDNF), remodelled synapses, possibly new neurons. Cascades take time; the delay is the treatment working, not failing." },
    { question: "How can a gas be a neurotransmitter?", answer: "Nitric oxide isn't stored or vesicle-packed; it's made on demand, diffuses freely (including backwards across the synapse) and is destroyed as fast as it's made. It breaks every classical rule — which is why it took the field years to accept it." },
    { question: "Why doesn't the brain simply make more receptors when a drug blocks them?", answer: "It often does the opposite: GRKs phosphorylate overstimulated receptors and β-arrestins internalise them — desensitisation, tolerance and adaptation. That machinery is itself a drug-design target." },
    { question: "Is cannabis acting on a system the brain already uses?", answer: "Yes: THC mimics anandamide at CB1 receptors — the brain's own retrograde signal. That's why its effects (appetite, analgesia, euphoria) feel physiological rather than foreign, and why CB1 remains a designed-medicine target." },
    { question: "Why do examiners love transporter questions?", answer: "Because transporter selectivity is the cleanest classifier in psychopharmacology: SERT blockade = SSRI; SERT+NET = SNRI; DAT/NET = bupropion (NDRI) and stimulants; VMAT = reserpine; GAT-1 = tiagabine. One frame answers a whole family of questions." },
    { question: "How is this course tested in NEET-PG?", answer: "Drug-to-site matching, G-protein-to-second-messenger matching, GABA-A α-subunit functions, NMDA pharmacology, the antidepressant-delay cascade and the receptor counts (5-HT × 14, DA × 5) are the recurring patterns." },
  ],
  references: {
    guidelines: [],
    textbooks: [
      { source: "Nestler EJ, Hyman SE, Malenka RC — Molecular Neuropharmacology (the companion text this foundation follows) (current edition)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — Neuroscientific foundations chapter (2022)" },
      { source: "KD Tripathi — Essentials of Medical Pharmacology, 8th ed. — General pharmacology + psychopharmacology (2019)" },
      { source: "Stahl's Essential Psychopharmacology, 5th ed. — the receptor/cascade frames (2021)" },
    ],
    trials: [],
    reviews: [
      { source: "Iversen L — Neurotransmitter transporters and their impact on psychopharmacology. Br J Pharmacol 147(S1) (2006)" },
      { source: "Barnes NM, Sharp T — A review of central 5-HT receptors. Neuropharmacology 38 (1999)" },
      { source: "Pittenger C, Duman RS — Stress, depression and neuroplasticity. Neuropsychopharmacology 33 (2008)" },
      { source: "Moncrieff J et al. — Serotonin theory umbrella review (the recalibration reference). Mol Psychiatry (2023)" },
      { source: "Piomelli D — The molecular logic of endocannabinoid signalling. Nat Rev Neurosci 4 (2003)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — medication questions in Indian languages (2024–25)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "4 min",
      description: "Plain language: how brain messaging works and why psychiatric medicines take time.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "Full foundation: life cycle, receptors, cascades, retrograde signalling, exam lens.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Everything with drug-navigation and mistake-prone distinctions emphasised.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "patient-guide", "indian-practice", "common-mistakes", "exam-lens", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Complete depth with receptor pharmacology, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "patient-guide", "indian-practice", "common-mistakes", "exam-lens", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "What neurotransmission is and why every drug lesson depends on it.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the classical criteria, name the transmitter classes, and explain why the fast/slow split collapsed." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The complete system: life cycle, regions, transmitters, pathways, history.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the life-cycle drug map, distinguish receptor families, trace retrograde signalling and the antidepressant-delay cascade." },
    { number: 3, title: "Clinical Practice", description: "Reading prescriptions, side effects and counselling through receptors.", sectionIds: ["management", "patient-guide"], checkpoint: "You can name the molecular site of every major psychiatric drug and use receptor logic to predict side effects — diagnostic sections are NOT_APPLICABLE for this concept (recorded in the completion matrix)." },
    { number: 4, title: "Indian Context", description: "Reserpine heritage, curriculum alignment and cost-rational prescribing.", sectionIds: ["indian-practice", "common-mistakes"], checkpoint: "You know the Rauwolfia story, the counselling script the delay explanation enables, and the classic learning errors." },
    { number: 5, title: "Exam Revision", description: "Exam lens, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "drug-navigation", "high-yield"], checkpoint: "You can answer drug-site matching, G-protein matching and α-subunit questions — and navigate to every relevant KYP drug lesson." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "Iversen L — Neurotransmitter transporters and their impact on psychopharmacology, Br J Pharmacol 147(S1)", sourceType: "review", year: "2006", dateReviewed: "2026-09-25" },
    { id: "S2", source: "Barnes NM, Sharp T — A review of central 5-HT receptors, Neuropharmacology 38", sourceType: "review", year: "1999", dateReviewed: "2026-09-25" },
    { id: "S3", source: "Pittenger C, Duman RS — Stress, depression and neuroplasticity, Neuropsychopharmacology 33", sourceType: "review", year: "2008", dateReviewed: "2026-09-25" },
    { id: "S4", source: "Piomelli D — The molecular logic of endocannabinoid signalling, Nat Rev Neurosci 4", sourceType: "review", year: "2003", dateReviewed: "2026-09-25" },
    { id: "S5", source: "Rudolph U, Möhler H — GABA-A receptor subtype functions (α-subunit selectivity)", sourceType: "review", year: "2006", dateReviewed: "2026-09-25" },
    { id: "S6", source: "Nestler EJ, Hyman SE, Malenka RC — Molecular Neuropharmacology", sourceType: "textbook", year: "current edition", dateReviewed: "2026-09-25" },
    { id: "S7", source: "Moncrieff J et al. — Serotonin theory umbrella review, Mol Psychiatry", sourceType: "systematic-review", year: "2023", locator: "https://doi.org/10.1038/s41380-022-01661-0", dateReviewed: "2026-09-25" },
    { id: "S8", source: "Howes OD, Kapur S — Dopamine hypothesis version III, Schizophr Bull", sourceType: "review", year: "2009", dateReviewed: "2026-09-25" },
    { id: "S9", source: "Gould TD, Manji HK — GSK-3: a putative molecular target for lithium-mimetic drugs", sourceType: "review", year: "2005", dateReviewed: "2026-09-25" },
    { id: "S10", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — foundations chapters", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-25" },
    { id: "S11", source: "Stahl's Essential Psychopharmacology, 5th ed.", sourceType: "textbook", year: "2021", dateReviewed: "2026-09-25" },
  ],
  evidenceMap: [
    { text: "Classical neurotransmitter criteria and the collapse of the fast/slow split with receptor-subtype discovery.", grade: "established", sources: ["S6", "S10"] },
    { text: "Life-cycle placements: reserpine at VMAT; antidepressants at SERT/NET; amphetamines reversing DAT/NET; tiagabine at GAT-1.", grade: "established", sources: ["S1", "S6"] },
    { text: "Ionotropic vs metabotropic receptor structure and kinetics; Trk receptors as the third family.", grade: "established", sources: ["S6", "S10"] },
    { text: "14 5-HT receptor subtypes; 5-HT2A-K+-channel closing as the proposed LSD mechanism.", grade: "established", sources: ["S2"], note: "The LSD mechanism itself is graded proposed within an established receptor pharmacology." },
    { text: "GABA-A α-subunit functions: α1 sedation, α2/α3 anxiolysis, α5 alcohol link (point-mutated mice).", grade: "established", sources: ["S5"] },
    { text: "Retrograde signalling: NO via NMDA→NOS→cGMP; endocannabinoids via postsynaptic synthesis → presynaptic CB1.", grade: "established", sources: ["S4", "S6"] },
    { text: "Lithium targets: inositol monophosphatase (hypothesis, unproven) and GSK3β inhibition (drug-design direction).", grade: "supported", sources: ["S9", "S11"], note: "Inositol-depletion explicitly flagged unproven in the source literature." },
    { text: "CREB-BDNF cascade as the leading account of delayed antidepressant action — proposed, incomplete.", grade: "proposed", sources: ["S3", "S6"] },
    { text: "The simple serotonin-deficiency model of depression is not supported by umbrella-review evidence.", grade: "established", sources: ["S7"] },
    { text: "Reserpine from Rauwolfia serpentina: Indian medicinal heritage; VMAT-blockade tranquillity with dose-limiting depression.", grade: "established", sources: ["S1", "S10", "S11"] },
  ],
};
