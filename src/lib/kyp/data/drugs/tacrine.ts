import type { Drug } from "../types";

/**
 * Tacrine — drug page data, generated from Stahl's Prescriber's Guide (1st ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005), tacrine monograph (book p. 439)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information for Cognex (tacrine) — historical label, discontinued
 *   - Cochrane Review: Tacrine for Alzheimer's disease (2000)
 *
 * Part of the KYP registry completion — tacrine (with pemoline) is one of the two
 * 1st-edition-only monographs added so the registry covers BOTH the 1st-edition
 * (2005) and 6th-edition (2017) Stahl drug lists in full. Tacrine was the first
 * cholinesterase inhibitor approved for Alzheimer disease; hepatotoxicity and
 * four-times-daily dosing made it second-line and ultimately obsolete — the
 * proof-of-concept agent its successors outlived.
 * Last reviewed: 2026-10-01
 */
export const tacrine: Drug = {
  /* ---- Identity ---- */
  slug: "tacrine",
  genericName: "Tacrine",
  brandNames: ["Cognex (discontinued)"],
  drugClass: "cholinesterase-inhibitor",
  drugClassLabel: "AChE Inhibitor",
  drugClassFullName: "Acetylcholinesterase Inhibitor (Central, Reversible — also inhibits BuChE)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "Cognitive Enhancers", "Cholinesterase Inhibitors", "Tacrine"],
  /* ---- Hero / summary ---- */
  tagline: "The first Alzheimer's cholinesterase inhibitor — the hepatotoxic proof of concept its successors outlived.",
  summary: "Tacrine is a centrally-active, reversible cholinesterase inhibitor (blocking both acetylcholinesterase and butyrylcholinesterase) that compensates in part for the degenerating cholinergic neurons of Alzheimer disease — the first drug approved for the condition. Hepatotoxicity in up to a third of patients and four-times-daily dosing made it a second-line agent that has since disappeared from practice: donepezil, rivastigmine, and galantamine delivered the same cholinergic strategy with better livers and kinder schedules. Tacrine remains the exam-grade lesson in cholinergic pharmacology, CYP1A2 interactions, and transaminase monitoring.",
  estimatedReadTime: "16 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of tacrine — reversible inhibition of centrally-active acetylcholinesterase (and butyrylcholinesterase), making more acetylcholine available to compensate for degenerating cholinergic neurons.",
    "List the uses of tacrine and its place in the cholinesterase inhibitor sequence: the first approved agent, relegated to second-line by hepatotoxicity and QID dosing.",
    "Predict the cholinergic side-effect profile (nausea, vomiting, weight loss) and the hepatic transaminase elevation that defined the drug.",
    "Construct the dosing and monitoring plan: 40 mg/day in 4 divided doses with 4-week titration steps to a maximum of 160 mg/day, plus serum transaminase surveillance.",
    "Explain the CYP1A2 interaction web — theophylline, fluvoxamine, cimetidine, smoking — and why tacrine is not rationally combined with another cholinesterase inhibitor.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Tacrine reversibly inhibits centrally-active acetylcholinesterase (AChE), making more acetylcholine available; the increased acetylcholine compensates in part for degenerating cholinergic neurons in neocortex that regulate memory. It also inhibits butyrylcholinesterase (BuChE) and may release growth factors or interfere with amyloid deposition.",
    molecularTarget: "Centrally-active acetylcholinesterase (reversible inhibition) + butyrylcholinesterase; may release growth factors or interfere with amyloid deposition",
    effect: "Improved memory and behavioural symptoms in Alzheimer disease — compensation for cholinergic deficit, not reversal of degeneration.",
    steps: [
      "Tacrine reversibly inhibits centrally-active acetylcholinesterase, making more acetylcholine available in the synapse.",
      "Increased acetylcholine compensates in part for the degenerating cholinergic neurons in neocortex that regulate memory.",
      "Butyrylcholinesterase inhibition adds to the effect; tacrine may also release growth factors or interfere with amyloid deposition.",
      "Peripheral cholinesterase inhibition at the same time produces the gastrointestinal side-effect profile.",
    ],
    pharmacokinetics: "Orally administered in four divided doses; short plasma half-life of only a few hours. Metabolised principally by CYP450 1A2 (and an inhibitor of it). — see mechanism and prescriber sections.",
    halfLife: "Approximately 2-4 hours.",
    metabolism: "Hepatic — principally by CYP450 1A2 (also a CYP1A2 inhibitor).",
    excretion: "Hepatic metabolism dominates; smokers have lower plasma levels (CYP1A2 induction).",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "ach",
        label: "Acetylcholine",
        sublabel: "Cholinergic neurotransmitter",
        variant: "input",
      },
      {
        id: "ache",
        label: "Acetylcholinesterase",
        sublabel: "Enzyme that degrades ACh",
        variant: "target",
      },
      {
        id: "drug",
        label: "Tacrine",
        sublabel: "Reversible AChE inhibitor",
        variant: "process",
      },
      {
        id: "synapse",
        label: "More ACh in synapse",
        sublabel: "Degenerating neurons compensated",
        variant: "output",
      },
      {
        id: "effect",
        label: "Memory & behaviour improve",
        sublabel: "Slowed symptomatic decline",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "ach",
        to: "ache",
        label: "normally degraded by",
      },
      {
        from: "drug",
        to: "ache",
        label: "reversibly inhibits",
        type: "inhibit",
      },
      {
        from: "ache",
        to: "synapse",
        label: "less degradation",
      },
      {
        from: "synapse",
        to: "effect",
        label: "cholinergic boost",
      },
    ],
    caption: "The cholinergic hypothesis of Alzheimer disease in one diagram: if the neurons that make acetylcholine are dying, keep what little acetylcholine remains alive at the synapse. Tacrine proved the strategy works — and its successors made it tolerable.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Acetylcholine"],
  receptors: ["Acetylcholinesterase (reversible inhibitor)", "Butyrylcholinesterase (inhibitor)"],
  brainRegionIds: ["hippocampus", "prefrontal-cortex"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Alzheimer disease",
      status: "fda-approved",
      description: "The first approved treatment — may improve symptoms and slow progression of disease, but does not reverse the degenerative process.",
    },
    {
      name: "Memory disorders in other conditions",
      status: "off-label",
      description: "Cholinergic enhancement beyond Alzheimer disease.",
    },
    {
      name: "Dementia (behavioural and cognitive symptoms)",
      status: "off-label",
      description: "Treats behavioural and psychological symptoms of dementia (apathy, disinhibition, delusions, anxiety, cooperation, pacing) as well as cognitive symptoms.",
    },
  ],
  contraindications: [
    {
      name: "Prior tacrine treatment stopped for treatment-associated jaundice, serum bilirubin > 3 mg/dL, or hypersensitivity with ALT/SGPT elevation",
      severity: "absolute",
      rationale: "The documented re-exposure prohibition (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Proven allergy to tacrine",
      severity: "absolute",
      rationale: "Standard hypersensitivity contraindication.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Nausea, vomiting, diarrhoea, appetite loss, dyspepsia",
      frequency: "common",
      severity: "moderate",
      description: "Peripheral cholinesterase inhibition — the signature cholinergic GI profile; increased gastric acid secretion adds dyspepsia.",
      management: "Take with meals (reduces GI effects, though food lowers plasma concentrations); slower titration; dose reduction.",
    },
    {
      name: "Weight loss",
      frequency: "common",
      severity: "moderate",
      description: "Consequence of GI cholinergic effects — though some patients experience none.",
      management: "Monitor weight; dietary counselling.",
    },
    {
      name: "Myalgia, rhinitis, rash",
      frequency: "common",
      severity: "mild",
      description: "Other documented effects.",
      management: "Symptomatic; reassurance.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Elevated hepatic transaminases and liver toxicity",
      frequency: "common",
      severity: "severe",
      description: "Hepatotoxicity in up to a third of patients — the defining toxicity that made tacrine second-line. ALT rules: 3-5x ULN reduce dose by 40 mg/day; > 5x ULN discontinue.",
      management: "Serum transaminase monitoring; dose reduction or discontinuation per protocol; rechallenge only after ALT normalises.",
    },
    {
      name: "Seizures (rare)",
      frequency: "rare",
      severity: "severe",
      description: "Documented with cholinesterase inhibitors.",
      management: "Discontinue; avoid in seizure-prone patients.",
    },
    {
      name: "Bradycardia / heart block",
      frequency: "rare",
      severity: "severe",
      description: "Cholinergic slowing of conduction — may occur with or without cardiac impairment; combined with beta blockers the risk rises.",
      management: "Pulse checks; ECG in conduction disease; avoid with bradycardic agents.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Serum hepatic transaminase levels (ALT/SGPT)",
      frequency: "During dose titration and periodically",
      rationale: "Hepatotoxicity in up to a third of patients — the ALT algorithm: 3-5x ULN reduce dose by 40 mg/day and re-advance after normalisation; > 5x ULN discontinue (rechallenge possible after ALT returns to normal).",
    },
    {
      parameter: "Gastrointestinal tolerance, weight, and gastric acid symptoms",
      frequency: "Every review",
      rationale: "Cholinergic GI effects drive both adherence and weight loss; increased gastric acid secretion may raise ulcer risk.",
    },
    {
      parameter: "Pulse and cardiac conduction",
      frequency: "Every review",
      rationale: "Cholinergic bradycardia — heart block may occur with or without pre-existing cardiac impairment.",
    },
  ],
  interactions: [
    {
      drug: "Theophylline and other CYP1A2 substrates",
      severity: "major",
      mechanism: "Tacrine is metabolised principally by CYP450 1A2 AND inhibits it — it may increase plasma levels of CYP1A2-metabolised drugs (e.g. theophylline) and require dose adjustment.",
      action: "Monitor levels; adjust theophylline dose.",
    },
    {
      drug: "Fluvoxamine and other CYP1A2 inhibitors; cimetidine",
      severity: "major",
      mechanism: "CYP1A2 inhibitors raise tacrine plasma levels.",
      action: "Avoid or reduce tacrine dose; anticipate cholinergic excess.",
    },
    {
      drug: "Beta blockers",
      severity: "moderate",
      mechanism: "Bradycardia may occur when combined.",
      action: "Monitor pulse; avoid in conduction disease.",
    },
    {
      drug: "Anticholinergic agents",
      severity: "moderate",
      mechanism: "Pharmacodynamic opposition — the combination may decrease the efficacy of both agents.",
      action: "Avoid co-prescription; review anticholinergic burden in dementia patients.",
    },
    {
      drug: "Cholinomimetics (e.g. bethanechol)",
      severity: "moderate",
      mechanism: "Synergistic cholinergic effect.",
      action: "Avoid.",
    },
    {
      drug: "Another cholinesterase inhibitor",
      severity: "contraindicated",
      mechanism: "Not rational to combine — duplicated mechanism without added benefit.",
      action: "Never combine; switch rather than add.",
    },
    {
      drug: "Levodopa",
      severity: "moderate",
      mechanism: "Tacrine may reduce the efficacy of levodopa in Parkinson's disease.",
      action: "Monitor; adjust anti-parkinsonian therapy.",
    },
    {
      drug: "Anesthetic agents",
      severity: "moderate",
      mechanism: "Tacrine may increase the effects of anaesthetics.",
      action: "Discontinue prior to surgery.",
    },
    {
      drug: "Tobacco smoking",
      severity: "moderate",
      mechanism: "Smokers have lower tacrine plasma concentrations than nonsmokers due to CYP1A2 induction.",
      action: "Ask about smoking status at initiation and at every smoking-status change.",
    },
  ],
  pregnancy: {
    summary: "Risk Category C (no controlled studies in animals or humans) — not recommended for use in pregnant women or in women of childbearing potential.",
    lactation: "Unknown whether tacrine is secreted in breast milk, but all psychotropics are assumed to be; recommended either to discontinue the drug or to bottle feed — tacrine is not recommended for use in nursing women.",
  },
  renalAdjustment: "No dose adjustment required in renal impairment.",
  hepaticAdjustment: "Use with caution — the potential for liver toxicity defines tacrine; prior jaundice or bilirubin elevation on tacrine prohibits reuse.",
  /* ---- Education ---- */
  patientExplanation: "Tacrine was the first medicine approved for Alzheimer's disease. It works by raising the level of a brain chemical called acetylcholine, which helps memory — the brain cells that make it are slowly lost in Alzheimer's, so keeping more of it working at the junctions between cells helps for a while. It does not cure or stop the disease. Its two great problems are that it must be taken four times a day and that it can raise liver enzymes in a third of patients, requiring regular blood tests. Newer medicines of the same family (donepezil, rivastigmine, galantamine) have replaced it — taken once a day or by patch, and far kinder to the liver.",
  patientEducationPoints: [
    "Take in four divided doses, with meals if stomach upset occurs (though food lowers absorption somewhat).",
    "Benefit may take up to 6 weeks to appear — and months for any stabilisation of the disease course.",
    "Report dark urine, yellowing of the eyes, or persistent nausea and vomiting immediately — blood tests watch the liver.",
    "Do not stop suddenly — stopping may cause a notable deterioration in memory and behaviour that may not be restored on restarting.",
    "Tell every doctor you see — especially before surgery (tacrine increases anaesthetic effects) and before starting theophylline, cimetidine, or fluvoxamine.",
  ],
  clinicalPearls: [
    "The prototype that proved the strategy: tacrine was the first cholinesterase inhibitor for Alzheimer disease — hepatotoxicity in up to a third of patients and four-times-daily dosing made it second-line, and its successors outlived it.",
    "The ALT algorithm: 3-5x ULN reduce the daily dose by 40 mg and re-advance after normalisation; > 5x ULN discontinue — rechallenge may occur after ALT returns to normal (40 mg four times daily for 6 weeks before titration).",
    "The CYP1A2 hub: tacrine is metabolised by AND inhibits CYP1A2 — theophylline levels rise, fluvoxamine and cimetidine raise tacrine, and smokers run lower levels (enzyme induction).",
    "The discontinuation trap: stopping tacrine can cause notable deterioration in memory and behaviour that may NOT be restored when the drug is restarted or another cholinesterase inhibitor is begun.",
    "The depression masquerade: the first symptoms of Alzheimer disease are often mood changes — antidepressant failure with apathy in the elderly may mean early Alzheimer disease, where a cholinesterase inhibitor may be helpful.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of tacrine: reversible inhibition of centrally-active acetylcholinesterase — more acetylcholine available to compensate for degenerating cholinergic neurons; also inhibits butyrylcholinesterase.",
        "Uses of tacrine: Alzheimer disease (first approved agent); memory disorders in other conditions; dementia.",
        "Why is tacrine second-line? Hepatotoxicity in up to a third of patients plus four-times-daily dosing.",
      ],
      practical: [
        "Outline the tacrine dosing schedule: 40 mg/day in 4 divided doses, 4-week titration steps, maximum 160 mg/day.",
        "Explain the transaminase monitoring algorithm to a caregiver (3-5x ULN reduce; > 5x ULN stop).",
      ],
      longAnswer: [
        "Tacrine: mechanism, indications, adverse effects, contraindications, and dosing — structured answer framework.",
        "Compare the cholinesterase inhibitors in Alzheimer disease: tacrine, donepezil, rivastigmine, galantamine.",
      ],
    },
    neetPg: {
      highYield: [
        "Identity: tacrine = the first cholinesterase inhibitor approved for Alzheimer disease — reversible AChE (+BuChE) inhibitor.",
        "Dosing: 40 mg/day in 4 divided doses; increase at 4-week intervals if tolerable; maximum 160 mg/day.",
        "Hepatotoxicity in up to a third of patients — ALT algorithm (3-5x ULN reduce 40 mg/day; > 5x ULN stop; rechallenge at 40 mg QID x 6 weeks after normalisation).",
        "CYP1A2 dual role: metabolised by AND inhibits 1A2 — theophylline up, fluvoxamine/cimetidine raise tacrine, smoking lowers it.",
        "Not rational to combine with another cholinesterase inhibitor.",
        "Short half-life (a few hours) — the QID schedule.",
      ],
      pyqConcepts: [
        "Mechanism/target of tacrine",
        "Key adverse effect: elevated hepatic transaminases / liver toxicity",
        "CYP450 1A2 interactions of tacrine",
        "Cholinergic GI side-effect profile",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient on tacrine develops ALT 6x the upper limit of normal — next best step? (Discontinue; rechallenge only after normalisation.)",
        "An elderly patient on theophylline starts tacrine — what must you anticipate? (Raised theophylline levels — dose adjustment.)",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary use: Alzheimer disease — the first approved cholinesterase inhibitor.",
        "Most important adverse effect: elevated hepatic transaminases (up to a third of patients).",
        "Dosing architecture: four times daily — short half-life of only a few hours.",
        "Key interactions: CYP1A2 (theophylline, fluvoxamine, cimetidine, smoking) and beta blockers (bradycardia).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The early-treatment logic: cholinesterase inhibitors like tacrine depend upon the presence of intact targets for acetylcholine for maximum effectiveness — they may be most effective in the early stages of Alzheimer disease.",
        "The sex and hormone nuance: plasma concentrations of tacrine are higher in women than in men; some data suggest hormone replacement therapy in women with Alzheimer disease can enhance tacrine's effects — and perimenopausal hormonal changes can mimic dementia symptoms without being dementia.",
        "The behavioural bonus: tacrine treats behavioural and psychological symptoms of dementia as well as cognitive symptoms — especially apathy, disinhibition, delusions, anxiety, cooperation, and pacing.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Identity: tacrine = the first Alzheimer's cholinesterase inhibitor — reversible AChE (+ BuChE) inhibitor, short half-life, QID dosing.",
    "Indications: Alzheimer disease (first approved), memory disorders in other conditions, dementia.",
    "Dosing: 40 mg/day in 4 divided doses; 4-week titration intervals; maximum 160 mg/day.",
    "Hepatotoxicity in up to a third of patients — transaminase monitoring with the 3-5x / > 5x ULN algorithm.",
    "CYP1A2 hub: metabolised by and inhibits 1A2 — theophylline, fluvoxamine, cimetidine, smoking interactions.",
    "Never combine with another cholinesterase inhibitor; bradycardia with beta blockers.",
    "Stopping can cause irreversible-appearing deterioration — taper large doses.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "First presentation — mild Alzheimer disease in the Cognex era",
      presentation: "A 72-year-old woman with gradual memory decline is started on tacrine.",
      history: "A 72-year-old woman presents with 18 months of progressive forgetfulness, repetitive questions, and growing apathy; her daughter reports she has stopped cooking meals she once managed. Medical history: hypertension on a beta blocker; no psychiatric history. Baseline cognitive testing and imaging support a diagnosis of mild Alzheimer disease. Donepezil is not yet available in her region; tacrine is chosen.",
      examination: "Mental status examination shows impaired recent memory, reduced spontaneity, and apathy without focal neurology. Baseline ALT is normal; pulse 68/min regular.",
      diagnosis: "Mild Alzheimer disease. Differentials — depression masquerading as dementia, other dementia syndromes — are considered and excluded.",
      rationale: "Tacrine compensates in part for the degenerating cholinergic neurons that regulate memory: it may improve symptoms and slow progression, though it does not reverse the degenerative process. Early treatment exploits the presence of intact cholinergic targets.",
      management: "Started at 40 mg/day in 4 divided doses with meals; maintained 4 weeks; if tolerable, increased to 80 mg/day in 4 divided doses, with further 4-weekly titration toward 120-160 mg/day (maximum 160 mg/day). Serum transaminases monitored during titration; pulse checked at every review (beta blocker co-prescription); follow-up at 6 weeks to assess memory and behaviour.",
      outcome: "At 6-week review, caregivers report modest improvement in engagement and reduced pacing. Transaminases remain normal through titration to 120 mg/day. The teaching point for the modern sequence: the same patient today receives donepezil 5-10 mg once nightly — equal cholinergic strategy, one-fourth the doses, none of the third-of-patients liver risk.",
      teachingPoints: [
        "The 4-week clock: every titration step waits 4 weeks for tolerability — rushing produces GI failure, not faster benefit.",
        "The beta-blocker flag: tacrine plus beta blocker invites bradycardia — pulse at every review.",
        "Antidepressant failure with apathy in the elderly raises the question of early Alzheimer disease — the depression masquerade.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Tacrine vs the modern cholinesterase inhibitors — orientation table",
      primaryDrug: "Tacrine",
      rows: [
        {
          attribute: "Enzyme target",
          primaryValue: "Reversible AChE inhibition + butyrylcholinesterase inhibition",
          comparisons: [
            {
              drug: "Donepezil",
              value: "Selective, reversible AChE inhibition",
            },
            {
              drug: "Rivastigmine",
              value: "Dual AChE + BuChE inhibition (like tacrine), with a patch option",
            },
            {
              drug: "Galantamine",
              value: "Reversible AChE inhibition + nicotinic allosteric modulation",
            },
          ],
        },
        {
          attribute: "Dosing frequency",
          primaryValue: "Four times daily — short half-life of only a few hours",
          comparisons: [
            {
              drug: "Donepezil",
              value: "Once daily",
            },
            {
              drug: "Rivastigmine",
              value: "Twice daily (capsules) or once daily (patch)",
            },
            {
              drug: "Galantamine",
              value: "Once daily (ER) or twice daily (IR)",
            },
          ],
        },
        {
          attribute: "Hepatic risk",
          primaryValue: "Transaminase elevation in up to a third of patients — monitoring mandatory",
          comparisons: [
            {
              drug: "Donepezil",
              value: "No routine LFT monitoring required",
            },
            {
              drug: "Rivastigmine",
              value: "No routine LFT monitoring required",
            },
            {
              drug: "Galantamine",
              value: "No routine LFT monitoring required",
            },
          ],
        },
        {
          attribute: "Metabolism / interactions",
          primaryValue: "CYP1A2 substrate AND inhibitor — theophylline, fluvoxamine, cimetidine, smoking",
          comparisons: [
            {
              drug: "Donepezil",
              value: "CYP2D6 / 3A4 — modest interaction burden",
            },
            {
              drug: "Rivastigmine",
              value: "Not hepatically metabolised — few interactions",
            },
            {
              drug: "Galantamine",
              value: "CYP2D6 / 3A4",
            },
          ],
        },
        {
          attribute: "Current status",
          primaryValue: "Discontinued — the proof-of-concept agent its successors outlived",
          comparisons: [
            {
              drug: "Donepezil",
              value: "First-line, all stages, once daily",
            },
            {
              drug: "Rivastigmine",
              value: "First-line; DLB/PDD approvals; patch option",
            },
            {
              drug: "Galantamine",
              value: "First-line alternative",
            },
          ],
        },
      ],
      takeaway: "Tacrine proved that cholinesterase inhibition works in Alzheimer disease — then donepezil, rivastigmine, and galantamine kept the mechanism and discarded the QID schedule and the liver risk. Tacrine remains the pharmacology lesson; the successors are the prescribing reality.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Tacrine reaches peak exposure within hours of each of its four daily doses and begins inhibiting acetylcholinesterase — the short half-life (only a few hours) is why dosing is four times daily.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Weeks 1–4",
      title: "Tolerance phase — the GI barrier",
      description: "Nausea, vomiting, appetite loss, and dyspepsia are the first experience for many patients — each dose step is held 4 weeks precisely to let tolerance develop. Taking with meals reduces GI effects (at the cost of lower plasma concentrations).",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 4–6",
      title: "Cognitive signal emerges",
      description: "May take up to 6 weeks before any improvement in baseline memory or behaviour is evident — and months before any stabilisation in the degenerative course. Transaminases are watched through every titration step.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Months 1–6",
      title: "Plateau of benefit",
      description: "Symptomatic improvement or stabilisation — the drug may lose effectiveness in slowing the degenerative course after 6 months, though it can remain effective in some patients for several years.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Maintenance and beyond",
      title: "Continuation — and the stopping trap",
      description: "Continue while benefit persists. Discontinuation may lead to notable deterioration in memory and behaviour which may not be restored when the drug is restarted or another cholinesterase inhibitor is initiated — large doses may need tapering.",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does tacrine take to work?",
      answer: "It may take up to 6 weeks before any improvement in memory or behaviour is evident, and months before any stabilisation in the degenerative course is apparent. Do not stop early because you don't see immediate effects — but tell the doctor about nausea, which limits the dose more than anything else.",
    },
    {
      question: "What are the most common side effects of tacrine?",
      answer: "The most frequently reported effects are nausea, diarrhoea, vomiting, appetite loss, increased gastric acid secretion, dyspepsia, weight loss, myalgia, rhinitis, and rash. The most important monitored effect is raised liver enzymes — which is why blood tests are part of treatment.",
    },
    {
      question: "Can tacrine be stopped suddenly?",
      answer: "Discuss any change with the doctor first. Large doses may need tapering, and stopping can lead to a notable deterioration in memory and behaviour that may not be restored when the drug (or another cholinesterase inhibitor) is restarted.",
    },
    {
      question: "Why does tacrine need liver blood tests?",
      answer: "Because liver enzyme elevation occurs in up to a third of patients. The rules: if ALT is 3-5 times the upper limit of normal, the dose is reduced by 40 mg/day and increased again once ALT normalises; if ALT is greater than 5 times the upper limit, tacrine is stopped — it may be restarted only after ALT returns to normal.",
    },
    {
      question: "Is tacrine habit-forming?",
      answer: "No — tacrine has no abuse or dependence potential. It is a symptomatic treatment for a neurodegenerative disease, not a drug of misuse.",
    },
    {
      question: "Is tacrine still available?",
      answer: "No — tacrine has been discontinued. It was the first cholinesterase inhibitor approved for Alzheimer disease (1993), but four-times-daily dosing and hepatotoxicity in up to a third of patients led to its replacement by donepezil, rivastigmine, and galantamine. It survives in exams as the prototype of its class.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "APA Practice Guideline for the Treatment of Patients with Alzheimer's Disease and Other Dementias",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "1st ed. (2005), tacrine monograph, p. 439",
      },
      {
        source: "Katzung Basic & Clinical Pharmacology",
        section: "16th ed. — drugs for neurodegenerative disease",
      },
      {
        source: "KD Tripathi Essentials of Medical Pharmacology",
        section: "8th ed. — drugs for neurodegenerative disease",
      },
    ],
    trials: [
      {
        source: "FDA Prescribing Information for Cognex (tacrine) — historical label",
      },
    ],
    reviews: [
      {
        source: "Oizilbash N, Birks J, Lopez-Arrieta J, et al. Tacrine for Alzheimer's disease. Cochrane Database Syst Rev. 2000;(3):CD000202.",
      },
      {
        source: "Bentue-Ferrer D, Tribut O, Polard E, Allain H. Clinically significant drug interactions with cholinesterase inhibitors: a guide for neurologists. CNS Drugs. 2003;17:947-63.",
      },
    ],
    patientResources: [
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
      {
        source: "Alzheimer's Association — Medications for Memory Loss",
        url: "https://www.alz.org/alzheimers-dementia/treatments/medications-for-memory",
      },
    ],
  },
  relatedDrugs: [
    {
      name: "Donepezil",
      slug: "donepezil",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Rivastigmine",
      slug: "rivastigmine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Galantamine",
      slug: "galantamine",
      drugClass: "AChE Inhibitor",
      relationship: "Same class (AChE Inhibitor)",
    },
    {
      name: "Memantine",
      slug: "memantine",
      drugClass: "NMDA Antagonist",
      relationship: "Same family (Cognitive Enhancers)",
    },
  ],
  relatedConditions: [
    {
      name: "Alzheimer disease",
      relationship: "primary",
    },
    {
      name: "Memory disorders in other conditions",
      relationship: "off-label",
    },
    {
      name: "Dementia (behavioural and cognitive symptoms)",
      relationship: "off-label",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Tacrine",
      type: "drug",
      href: "/drugs/tacrine",
      note: "The drug you're reading about",
    },
    {
      label: "Tacrine",
      type: "class",
      href: "#mechanism",
      note: "Acetylcholinesterase Inhibitor (Central, Reversible — also inhibits BuChE)",
    },
    {
      label: "Acetylcholine",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Acetylcholinesterase (reversible inhibitor)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Alzheimer disease",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Elevated hepatic transaminases and liver toxicity",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Nausea, vomiting, diarrhoea, appetite loss, dyspepsia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect cluster",
    },
    {
      label: "Bradycardia / heart block",
      type: "side-effect",
      href: "#side-effects",
      note: "Cholinergic cardiac effect",
    },
    {
      label: "Patient Guide — Tacrine",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The first Alzheimer's cholinesterase inhibitor — the hepatotoxic proof of concept its successors outlived.",
    summary: "Tacrine was the first medicine approved for Alzheimer's disease. It belongs to the cholinesterase inhibitor family and works by raising a memory chemical (acetylcholine) in the brain. It has been discontinued and replaced by newer, safer medicines of the same family.",
    mechanism: "Tacrine was the first medicine approved for Alzheimer's disease. It stops the breakdown of a brain chemical called acetylcholine, which supports memory — in Alzheimer's the brain cells that make this chemical slowly die, so keeping more of it working helps memory and behaviour for a while. It does not cure or stop the disease. Because the body clears each dose within a few hours, it had to be taken four times a day, and because it raised liver enzymes in many patients, regular blood tests were part of treatment. Newer medicines of the same family (donepezil, rivastigmine, galantamine) have now replaced it.",
    sideEffects: "The most common side effects are: nausea, vomiting, diarrhoea, appetite loss, dyspepsia, weight loss, myalgia, rhinitis, and rash. These are cholinergic effects — they follow from the medicine's action, not from allergy. The most important monitored effect is raised liver enzymes, which occur in up to a third of patients and need blood tests. Contact your doctor urgently if you notice yellowing of the eyes, dark urine, or persistent vomiting.",
    monitoring: "While taking tacrine, doctors checked liver blood tests (transaminases) regularly, watched weight and stomach tolerance, and checked the pulse at every visit. Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you previously had to stop tacrine because of jaundice, high bilirubin, or a reaction with raised liver enzymes, or you are allergic to it. Always share your full medical history and medicine list with your doctor.",
    interactions: "Tacrine interacts with several common medicines and situations: theophylline (asthma), fluvoxamine, cimetidine, beta blockers (slow pulse), anticholinergic medicines, and smoking (smokers need higher awareness). It should not be combined with another cholinesterase inhibitor, and it is stopped before surgery. Tell every doctor and pharmacist everything you take.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule H",
    brands: [
      {
        name: "Cognex (discontinued — never marketed in India)",
        manufacturer: "Pfizer / Parke-Davis (historical)",
        strengths: "10 / 20 / 30 / 40 mg capsules",
      },
    ],
    typicalDoses: "40 mg/day in 4 divided doses, titrated at 4-week intervals to 120-160 mg/day (maximum 160 mg/day) — historical dosing only.",
    prescribingScenarios: [
      "Educational and examination context only — Indian dementia practice uses donepezil (widely available, low cost), rivastigmine, galantamine, and memantine; tacrine was never marketed in India.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: false,
      urban: false,
      rural: false,
    },
    costCategory: "high",
    costNote: "Not marketed — historical/import-only context. Cost varies by manufacturer and region.",
    monitoring: "Historical: serum transaminases during titration and periodically; pulse at every review.",
    patientCounselling: [
      "Historical drug — counselling points preserved for exams: four daily doses with meals.",
      "Report jaundice, dark urine, or persistent vomiting immediately.",
      "Never combine with another cholinesterase inhibitor.",
    ],
  },
  sectionDifficulty: {
    mechanism: "mbbs",
    timeline: "mbbs",
    "clinical-uses": "mbbs",
    "side-effects": "mbbs",
    monitoring: "mbbs",
    faq: "mbbs",
    "neural-pathways": "pg",
    "prescriber-guide": "pg",
    interactions: "pg",
    "clinical-case": "pg",
    "learning-module": "pg",
    "high-yield-summary": "pg",
    contraindications: "mbbs",
    "patient-education": "mbbs",
    "indian-clinical": "pg",
    "decision-path": "resident",
    references: "resident",
  },
  janAushadhi: {
    available: false,
  },
  /* ---- Final Architecture Pass ---- */
  highYieldLevel: "moderate",
  drugFamilyNav: {
    familyName: "Cholinesterase Inhibitors",
    members: [
      {
        name: "Tacrine",
        slug: "tacrine",
        relationship: "This guide",
        distinguishing: "The hepatotoxic QID prototype — the first Alzheimer's ChEI",
      },
      {
        name: "Donepezil",
        slug: "donepezil",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The once-daily AChE inhibitor — Alzheimer's first-line",
      },
      {
        name: "Galantamine",
        slug: "galantamine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The nicotinic-modulating AChE inhibitor",
      },
      {
        name: "Rivastigmine",
        slug: "rivastigmine",
        relationship: "Same class (AChE Inhibitor)",
        distinguishing: "The dual-inhibitor with the patch — and the DLB/PDD approval",
      },
    ],
  },
  learningTimeBreakdown: {
    read: "12 min",
    study: "18 min",
    revision: "5 min",
  },
  /* ---- Educational UX Layer ---- */
  microQuizzes: [
    {
      id: "quiz-mechanism",
      question: "How does tacrine work in Alzheimer disease?",
      options: [
        "Reversibly inhibits centrally-active acetylcholinesterase, making more acetylcholine available to compensate for degenerating cholinergic neurons",
        "Blocks NMDA receptors to reduce glutamate excitotoxicity",
        "Inhibits acetylcholine release to calm cholinergic overactivity",
        "Enhances amyloid deposition to slow plaque turnover",
      ],
      correctIndex: 0,
      explanation: "Tacrine reversibly inhibits centrally-active acetylcholinesterase (and butyrylcholinesterase), making more acetylcholine available — compensation in part for the degenerating cholinergic neurons in neocortex that regulate memory. It may also release growth factors or interfere with amyloid deposition.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which toxicity relegated tacrine to second-line status in Alzheimer disease?",
      options: [
        "Elevated hepatic transaminases — in up to a third of patients",
        "Nausea and vomiting in every patient",
        "Agranulocytosis",
        "Tardive dyskinesia",
      ],
      correctIndex: 0,
      explanation: "Hepatotoxicity in up to a third of patients — plus four-times-daily dosing — made tacrine a second-line treatment for Alzheimer disease. The GI cholinergic effects are common but manageable with titration; agranulocytosis and tardive dyskinesia are not tacrine toxicities.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the tacrine dosing architecture for Alzheimer disease?",
      options: [
        "40 mg/day in 4 divided doses, increased at 4-week intervals if tolerable, to a maximum of 160 mg/day",
        "5 mg once daily at bedtime, increased to 10 mg after a month, no maximum",
        "10 mg twice daily fixed dose with no titration",
        "A weekly patch changed every 7 days",
      ],
      correctIndex: 0,
      explanation: "Initial 40 mg/day in 4 divided doses, maintained 4 weeks; if tolerable, increased to 80 mg/day in 4 divided doses with additional titration at 4-week intervals — maximum 160 mg/day. The once-daily option describes donepezil; the patch describes rivastigmine.",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of tacrine in two sentences.",
      answer: "Tacrine reversibly inhibits centrally-active acetylcholinesterase, making more acetylcholine available; the increased acetylcholine compensates in part for degenerating cholinergic neurons in neocortex that regulate memory. It also inhibits butyrylcholinesterase and may release growth factors or interfere with amyloid deposition.",
      topic: "Mechanism",
    },
    {
      question: "List the key uses of tacrine and its historical position in the class.",
      answer: "Alzheimer disease (the first approved cholinesterase inhibitor), memory disorders in other conditions, and dementia. It is now discontinued — hepatotoxicity in up to a third of patients and QID dosing made it second-line and then obsolete.",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of tacrine and how it was managed.",
      answer: "Elevated hepatic transaminases: serum transaminase levels are monitored — if ALT is 3-5 times the upper limit of normal the dose is reduced by 40 mg/day and increased again once ALT normalises; if ALT exceeds 5 times the upper limit, tacrine is discontinued (rechallenge may occur after ALT returns to normal, starting 40 mg four times daily for 6 weeks).",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on tacrine require?",
      answer: "Serum hepatic transaminase levels during titration and periodically; gastrointestinal tolerance and weight at every review; and pulse/cardiac conduction checks — bradycardia or heart block may occur with or without cardiac impairment.",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about tacrine that separates safe prescribers from unsafe ones.",
      answer: "The CYP1A2 hub: tacrine is metabolised principally by CYP450 1A2 and inhibits it — it raises theophylline levels, is raised by fluvoxamine and cimetidine, and runs lower in smokers; combined with beta blockers it causes bradycardia. Never combine it with another cholinesterase inhibitor.",
      topic: "Clinical Pearls",
    },
  ],
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "6 min",
      description: "Plain language. What you need to know to take your medicine safely.",
      visibleSections: ["top", "quick-facts", "patient-education", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "20 min",
      description: "Foundations, mechanism, clinical uses, side effects, and MBBS exam content.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "interactions",
        "patient-education",
        "learning-module",
        "high-yield-summary",
        "faq",
      ],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full clinical detail with exam-specific content, comparisons, and the Stahl prescriber layer.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "neural-pathways",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
        "indian-clinical",
        "decision-path",
        "common-mistakes",
        "learning-module",
        "clinical-case",
        "drug-navigation",
        "high-yield-summary",
        "faq",
        "active-recall",
      ],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — advanced reasoning, full prescriber guide, evidence, and references.",
      visibleSections: [
        "top",
        "quick-facts",
        "learning-objectives",
        "knowledge-graph",
        "mechanism",
        "brain-regions",
        "neurotransmitters",
        "neural-pathways",
        "timeline",
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
        "indian-clinical",
        "decision-path",
        "common-mistakes",
        "learning-module",
        "clinical-case",
        "drug-navigation",
        "high-yield-summary",
        "faq",
        "active-recall",
        "references",
      ],
    },
  ],
  lessonGroups: [
    {
      number: 1,
      title: "Foundations",
      description: "What is this drug? Why does it matter?",
      sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
      checkpoint: "You now know what Tacrine is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Tacrine works — from cholinesterase inhibition to its clinical effect timeline.",
    },
    {
      number: 3,
      title: "Clinical Practice",
      description: "When do you use it? What goes wrong?",
      sectionIds: [
        "clinical-uses",
        "side-effects",
        "monitoring",
        "contraindications",
        "prescriber-guide",
        "evidence-practice",
        "interactions",
        "patient-education",
      ],
      checkpoint: "You can describe how tacrine was prescribed safely — indications, cholinergic side effects, the transaminase algorithm, and the interaction web are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian context (never marketed; donepezil dominates) and the current dementia pharmacotherapy alternatives.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Tacrine with the modern cholinesterase inhibitors.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Tacrine.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005)",
    onsetTimeline: [
      "May take up to 6 weeks before any improvement in baseline memory or behaviour is evident.",
      "May take months before any stabilisation in the degenerative course is evident.",
    ],
    ifItWorks: [
      "May improve symptoms and slow progression of disease — but does not reverse the degenerative process.",
      "Continue while benefit persists; the drug can be effective in some patients for several years.",
    ],
    ifItDoesNotWork: [
      "Consider adjusting dose, switching to a different cholinesterase inhibitor, or adding an appropriate augmenting agent.",
      "Reconsider the diagnosis and rule out other conditions — such as depression or a dementia other than Alzheimer disease.",
    ],
    augmentationCombos: [
      "Atypical antipsychotics to reduce behavioural disturbances.",
      "Antidepressants if concomitant depression, apathy, or lack of interest.",
      "Memantine for moderate to severe Alzheimer disease.",
      "Divalproex, carbamazepine, or oxcarbazepine for behavioural disturbances.",
    ],
    testsBeforeStarting: [
      "Serum hepatic transaminase levels should be monitored — baseline before starting.",
    ],
    sideEffectLogic: [
      "Peripheral inhibition of acetylcholinesterase and butyrylcholinesterase causes the gastrointestinal side effects.",
      "Central inhibition of acetylcholinesterase may contribute to nausea, vomiting, weight loss, and sleep disturbances.",
    ],
    sideEffectManagement: [
      "Wait — tolerance to the GI effects often develops.",
      "Use slower dose titration.",
      "Consider lowering the dose, switching to a different agent, or adding an appropriate augmenting agent.",
    ],
    sideEffectRescue: [
      "Many side effects cannot be improved with an augmenting agent — dose reduction or switching is the resort.",
    ],
    weightGain: "Reported but not expected — some patients may experience weight loss.",
    sedation: "Reported but not expected.",
    dosing: [
      {
        indication: "Alzheimer disease",
        starting: "40 mg/day in 4 divided doses",
        titration: "Maintain 4 weeks; if tolerable, increase to 80 mg/day in 4 divided doses; additional titration at 4-week intervals if tolerable. If ALT is 3-5x upper limit of normal, decrease by 40 mg/day and increase after ALT normalises.",
        target: "120-160 mg/day in 4 divided doses",
        max: "160 mg/day",
      },
    ],
    dosageForms: [
      "Capsule 10 mg",
      "Capsule 20 mg",
      "Capsule 30 mg",
      "Capsule 40 mg",
    ],
    dosingTips: [
      "Dose titration may need to be slowed to reduce adverse effects — and should never be accelerated beyond the recommended regimen.",
      "Taking tacrine with meals may reduce gastrointestinal effects; however, food decreases plasma concentrations of tacrine.",
      "Four-times-daily dosing is pharmacokinetics in action — the short half-life leaves no alternative.",
    ],
    overdose: [
      "Can be lethal: nausea, vomiting, excess salivation, sweating, hypotension, bradycardia, collapse, convulsions, muscle weakness — weakness of respiratory muscles can lead to death.",
      "A cholinergic crisis picture — manage supportively with atropine consideration and respiratory support.",
    ],
    longTermUse: "The drug may lose effectiveness in slowing the degenerative course of Alzheimer disease after 6 months — but can be effective in some patients for several years.",
    habitForming: "No.",
    howToStop: [
      "May need to taper large doses.",
      "Discontinuation may lead to notable deterioration in memory and behaviour which may not be restored when the drug is restarted or another cholinesterase inhibitor is initiated.",
    ],
    pharmacokinetics: [
      "Half-life: Approximately 2-4 hours (short — a few hours).",
      "Metabolism: Principally by CYP450 1A2.",
      "Also a CYP450 1A2 inhibitor.",
    ],
    doNotUse: [
      "If previous treatment with tacrine was discontinued because of treatment-associated jaundice, serum bilirubin > 3 mg/dL, or hypersensitivity associated with ALT/SGPT elevation.",
      "If there is a proven allergy to tacrine.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "No dose adjustment.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Use with caution — potential for liver toxicity.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Should be used with caution — bradycardia or heart block may occur in patients with or without cardiac impairment.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Some patients may tolerate lower doses better.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Safety and efficacy have not been established.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Risk Category C — not recommended for use in pregnant women or in women of childbearing potential.",
          "Unknown if secreted in breast milk — recommended either to discontinue the drug or to bottle feed; not recommended for use in nursing women.",
        ],
      },
    ],
    potentialAdvantages: [
      "For some patients who fail to respond to several other cholinesterase inhibitors.",
    ],
    potentialDisadvantages: [
      "Hepatotoxicity — transaminase elevation in up to a third of patients.",
      "Patients with gastrointestinal problems tolerate it poorly.",
      "Patients who have difficulty taking medication several times a day — the four-times-daily burden.",
    ],
    primaryTargetSymptoms: [
      "Memory loss in Alzheimer disease",
      "Behavioural symptoms in Alzheimer disease",
      "Memory loss in other dementias",
    ],
    pearls: [
      "Hepatotoxicity in up to a third of patients and four-times-daily dosing make tacrine a second-line treatment for Alzheimer disease — the prototype agent that proved cholinesterase inhibition works.",
      "The rechallenge protocol: patients who discontinue tacrine because of ALT/SGPT elevation may be rechallenged at an initial dose of 40 mg four times per day maintained for 6 weeks before titration.",
      "Treats behavioural and psychological symptoms of dementia as well as cognitive symptoms — especially apathy, disinhibition, delusions, anxiety, cooperation, and pacing.",
      "Plasma concentrations of tacrine are higher in women than in men — and some data suggest hormone replacement therapy in women with Alzheimer disease can enhance tacrine's effects.",
      "The depression masquerade: the first symptoms of Alzheimer disease are generally mood changes — Alzheimer disease may initially be diagnosed as depression; if antidepressants fail to improve apathy and depressed mood in the elderly, early Alzheimer disease is a consideration and a cholinesterase inhibitor may be helpful.",
      "Cholinesterase inhibitors like tacrine depend upon the presence of intact targets for acetylcholine for maximum effectiveness — they may be most effective in the early stages of Alzheimer disease.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-10-01",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005) — facts paraphrased, not reproduced.",
    "Tacrine is discontinued — retained for educational completeness; verify against current national guidance before any clinical application.",
  ],
};
