import type { Drug } from "../types";

/**
 * Pemoline — drug page data, generated from Stahl's Prescriber's Guide (1st ed.).
 *
 * Sources consulted (facts paraphrased, not reproduced):
 *   - Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005), pemoline monograph (book p. 357)
 *   - Katzung Basic & Clinical Pharmacology, 16th edition
 *   - FDA Prescribing Information for Cylert (pemoline) — historical label, US market withdrawal 2005
 *   - AACAP Practice Parameter for the Use of Stimulant Medications (2002)
 *
 * Part of the KYP registry completion — pemoline (with tacrine) is one of the two
 * 1st-edition-only monographs added so the registry covers BOTH the 1st-edition
 * (2005) and 6th-edition (2017) Stahl drug lists in full. Pemoline was withdrawn
 * from major markets for hepatotoxicity; content is retained for educational and
 * examination completeness.
 * Last reviewed: 2026-10-01
 */
export const pemoline: Drug = {
  /* ---- Identity ---- */
  slug: "pemoline",
  genericName: "Pemoline",
  brandNames: ["Cylert (withdrawn)"],
  drugClass: "stimulant",
  drugClassLabel: "Stimulant",
  drugClassFullName: "CNS Stimulant (Dopaminergic, Mechanism Uncertain)",
  /* ---- Learning path (breadcrumb) ---- */
  learningPath: ["Psychiatry", "ADHD Medications", "Stimulants", "Pemoline"],
  /* ---- Hero / summary ---- */
  tagline: "The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet.",
  summary: "Pemoline is a CNS stimulant structurally unrelated to amphetamine and methylphenidate that theoretically enhances dopaminergic neurotransmission by an unknown mechanism. It was reserved for ADHD patients who fail to respond to other treatments — never first-line, because of hepatotoxicity: drug-induced liver failure made pemoline the textbook example of a stimulant retired by its own liver. Its legacy is the every-2-weeks ALT (SGPT) monitoring ritual and the written informed consent that surrounded its use — pharmacovigilance history every prescriber should know.",
  estimatedReadTime: "16 min read",
  yieldRating: "medium",
  primaryAudience: "medical",
  /* ---- Learning objectives ---- */
  learningObjectives: [
    "Explain the mechanism of action of pemoline — a dopaminergic stimulant whose exact molecular target remains unknown, structurally unrelated to amphetamines and methylphenidate.",
    "List the FDA-approved use of pemoline and explain why it was never a first-line ADHD agent.",
    "Predict the side-effect profile of pemoline from its pharmacology — and explain why its hepatic toxicity ended its market life.",
    "Construct the monitoring plan for a patient on pemoline: baseline and every-2-week serum ALT (SGPT), plus height and weight in children.",
    "Compare pemoline with the standard stimulants (methylphenidate, amphetamines) and explain its one-time clinical niche.",
  ],
  /* ---- Mechanism ---- */
  mechanism: {
    summary: "Pemoline theoretically enhances dopaminergic neurotransmission by an unknown mechanism — it is structurally unrelated to amphetamine or methylphenidate, and its exact molecular target has never been established.",
    molecularTarget: "Dopaminergic neurotransmission (enhanced — exact mechanism unknown; structurally unrelated to amphetamines and methylphenidate)",
    effect: "Improved concentration, attention span, and reduced motor hyperactivity and impulsiveness in ADHD.",
    steps: [
      "Pemoline theoretically enhances dopaminergic neurotransmission by an unknown mechanism — it is not a reuptake blocker like methylphenidate and not a releasing agent like amphetamine.",
      "Enhanced central dopaminergic tone in prefrontal attention circuits improves concentration, attention span, and impulse control in ADHD.",
      "The same excessive dopamine actions presumably explain the CNS side effects (insomnia, irritability, tic exacerbation), while the hepatic toxicity mechanism remains unknown.",
    ],
    pharmacokinetics: "Orally administered; relatively long half-life (~12 hours) with sustained duration of clinical activity, allowing once-daily morning dosing. Metabolised by the liver, excreted primarily by the kidneys. — see mechanism and prescriber sections.",
    halfLife: "Approximately 12 hours.",
    metabolism: "Hepatic.",
    excretion: "Renal (primary).",
  },
  /* ---- Mechanism visual flow ---- */
  mechanismFlow: {
    nodes: [
      {
        id: "da",
        label: "Dopamine",
        sublabel: "Catecholamine neurotransmitter",
        variant: "input",
      },
      {
        id: "signal",
        label: "Dopaminergic signalling",
        sublabel: "Prefrontal attention circuits",
        variant: "target",
      },
      {
        id: "drug",
        label: "Pemoline",
        sublabel: "Mechanism unknown — not a reuptake blocker or releaser",
        variant: "process",
      },
      {
        id: "enhance",
        label: "Enhanced DA tone",
        sublabel: "Attention and impulse control improve",
        variant: "output",
      },
      {
        id: "effect",
        label: "ADHD symptom control",
        sublabel: "Concentration, attention span, hyperactivity, impulsiveness",
        variant: "output",
      },
    ],
    edges: [
      {
        from: "da",
        to: "signal",
        label: "signalling",
      },
      {
        from: "drug",
        to: "signal",
        label: "enhances (unknown mechanism)",
        type: "stimulate",
      },
      {
        from: "signal",
        to: "enhance",
        label: "boosts",
      },
      {
        from: "enhance",
        to: "effect",
        label: "translates to clinic",
      },
    ],
    caption: "Pemoline is the stimulant whose mechanism medicine could never name — pharmacologically active like other CNS stimulants but structurally unrelated to both amphetamine and methylphenidate, with minimal sympathomimetic effects. Its clinical fate was decided not by dopamine but by the liver.",
  },
  /* ---- Neuroscience mapping ---- */
  neurotransmitters: ["Dopamine"],
  receptors: ["Dopaminergic signalling (exact target unknown)"],
  brainRegionIds: ["prefrontal-cortex", "nucleus-accumbens"],
  pathwayIds: [],
  /* ---- Clinical ---- */
  indications: [
    {
      name: "Attention deficit hyperactivity disorder (ADHD)",
      status: "fda-approved",
      description: "FDA-approved for ADHD in patients who fail to respond to other treatments — a second-line/third-line niche that reflected its hepatotoxicity, never first-line use.",
    },
  ],
  contraindications: [
    {
      name: "Hepatic impairment",
      severity: "absolute",
      rationale: "The do-not-use that defines the drug — pemoline's liver toxicity forbids any pre-existing hepatic disease (see Prescriber's Guide: Do Not Use).",
    },
    {
      name: "Extreme anxiety or agitation",
      severity: "absolute",
      rationale: "Stimulant activation compounds these states.",
    },
    {
      name: "Tourette's syndrome",
      severity: "absolute",
      rationale: "Stimulants may worsen motor and phonic tics.",
    },
    {
      name: "Proven allergy to pemoline",
      severity: "absolute",
      rationale: "Standard hypersensitivity contraindication.",
    },
  ],
  blackBoxWarnings: [],
  /* ---- Side effects ---- */
  commonSideEffects: [
    {
      name: "Insomnia",
      frequency: "common",
      severity: "moderate",
      description: "The classic stimulant effect — often occurs before therapeutic action begins.",
      management: "Administer in the morning; short-term hypnotic if needed.",
    },
    {
      name: "Headache, irritability, drowsiness, dizziness",
      frequency: "common",
      severity: "mild",
      description: "CNS effects presumably due to excessive dopamine actions.",
      management: "Wait; adjust dose.",
    },
    {
      name: "Exacerbation of tics",
      frequency: "uncommon",
      severity: "moderate",
      description: "Dopaminergic stimulation worsens motor and phonic tics.",
      management: "Reduce dose or discontinue.",
    },
    {
      name: "Anorexia and weight loss",
      frequency: "common",
      severity: "moderate",
      description: "Appetite suppression; weight is generally regained within 3-6 months.",
      management: "Monitor weight; dietary counselling.",
    },
    {
      name: "Rash",
      frequency: "uncommon",
      severity: "mild",
      description: "Documented dermatological effect.",
      management: "Monitor; discontinue if persistent.",
    },
  ],
  seriousSideEffects: [
    {
      name: "Liver failure, hepatitis, jaundice",
      frequency: "rare",
      severity: "life-threatening",
      description: "The effect that ended pemoline's market life — no way exists to predict who will develop liver failure.",
      management: "Serum ALT every 2 weeks; discontinue immediately if ALT > 2x upper limit of normal or any signs of hepatic dysfunction appear.",
    },
    {
      name: "Psychotic episodes",
      frequency: "rare",
      severity: "severe",
      description: "Excessive dopaminergic stimulation.",
      management: "Discontinue; antipsychotic if required.",
    },
    {
      name: "Seizures",
      frequency: "rare",
      severity: "severe",
      description: "May lower the seizure threshold.",
      management: "Discontinue; avoid in seizure disorders.",
    },
    {
      name: "Aplastic anaemia (isolated reports)",
      frequency: "rare",
      severity: "severe",
      description: "Rare haematological toxicity.",
      management: "Full blood count if clinically indicated.",
    },
    {
      name: "Activation of mania or suicidal ideation (theoretical)",
      frequency: "rare",
      severity: "severe",
      description: "Stimulant activation could represent induction of a mixed dysphoric bipolar state.",
      management: "Add a mood stabiliser and/or discontinue pemoline.",
    },
  ],
  /* ---- Safety / monitoring ---- */
  monitoring: [
    {
      parameter: "Serum ALT (SGPT)",
      frequency: "Baseline and every 2 weeks for the duration of treatment",
      rationale: "The pemoline ritual — discontinue if ALT rises above twice the upper limit of normal. Monitoring is a necessary component of pemoline therapy, even though it is not clear that testing predicts liver failure; early detection plus immediate withdrawal of the suspect drug enhances the likelihood of recovery.",
    },
    {
      parameter: "Height and weight (children)",
      frequency: "Periodically during long-term treatment",
      rationale: "Pemoline may be associated with growth suppression (controversial) — children who are not growing or gaining weight should stop treatment, at least temporarily.",
    },
    {
      parameter: "Need for continued treatment",
      frequency: "Every review",
      rationale: "Periodic attempts to determine whether behavioural symptoms return off treatment — stop intermittently if treatment is no longer necessary.",
    },
  ],
  interactions: [
    {
      drug: "Concomitant medications in general",
      severity: "major",
      mechanism: "Drug interactions involving pemoline have not been evaluated in humans; due to the risk of hepatic toxicity, concomitant therapy should generally be avoided whenever possible.",
      action: "Minimise co-medication; review the full drug list before starting.",
    },
    {
      drug: "Other CNS stimulants",
      severity: "moderate",
      mechanism: "Combinations with pemoline have not been systematically studied — best left to the expert.",
      action: "Do not combine; prefer sequential monotherapy.",
    },
  ],
  pregnancy: {
    summary: "Risk Category B (animal studies show no adverse effects; no controlled studies in humans). For ADHD patients, pemoline should generally be discontinued before anticipated pregnancies — use in women of childbearing potential requires weighing maternal benefit against fetal risk.",
    lactation: "Unknown whether pemoline is secreted in human breast milk, but all psychotropics are assumed to be — recommended either to discontinue the drug or to bottle feed.",
  },
  renalAdjustment: "Caution — pemoline is excreted primarily by the kidneys; significant renal impairment warrants dose review.",
  hepaticAdjustment: "Contraindicated — hepatic impairment is a do-not-use condition, and only patients with normal baseline liver function tests should initiate pemoline.",
  /* ---- Education ---- */
  patientExplanation: "Pemoline is a stimulant medicine that was used for ADHD when other ADHD medicines had not worked. It is different chemically from the usual stimulants (methylphenidate, amphetamine). Its great problem is that it can seriously harm the liver in a small number of people — nobody can predict who. That is why it was never a first-choice medicine, why a written consent form was needed before starting it, and why blood tests to check the liver (ALT/SGPT) were required every two weeks for as long as it was taken. It has now been withdrawn from the market in most countries because of this liver risk, but it remains an important lesson in medical history and exams.",
  patientEducationPoints: [
    "Take once daily in the morning — this helps prevent insomnia.",
    "Never combine with other medicines without review — interactions have not been systematically studied.",
    "Report any yellowing of the eyes, dark urine, unusual tiredness, or loss of appetite immediately — these can be signs of liver injury.",
    "Blood tests to check the liver are needed every two weeks while this medicine is taken.",
    "Benefit should be clear within 3 weeks of reaching the right dose — if not, the medicine is stopped.",
  ],
  clinicalPearls: [
    "The last-resort stimulant: pemoline was never first-line because of hepatotoxicity — only for ADHD patients who respond to it and not to other ADHD treatments.",
    "The every-2-weeks ALT ritual: serum SGPT at baseline and every 2 weeks for the entire treatment — discontinue if ALT exceeds twice the upper limit of normal; liver function monitoring is a necessary component of pemoline therapy.",
    "The consent paradox: written informed consent was required before starting pemoline — a rarity in psychopharmacology that signalled the drug's risk profile.",
    "The gentle stimulant: minimal sympathomimetic effects despite stimulant activity — less likely than other stimulants to raise blood pressure, with a more gradual onset of action.",
    "The once-daily trick: a ~12-hour half-life with sustained activity means morning-only dosing and no sustained-release formulations needed.",
  ],
  examLens: {
    mbbs: {
      viva: [
        "Mechanism of pemoline: theoretically enhances dopaminergic neurotransmission by an unknown mechanism — structurally unrelated to amphetamine and methylphenidate.",
        "Use of pemoline: ADHD in patients who fail to respond to other treatments — never first-line.",
        "Monitoring of pemoline: serum ALT (SGPT) at baseline and every 2 weeks; discontinue if ALT > 2x upper limit of normal.",
      ],
      practical: [
        "Outline the monitoring plan for a child on pemoline: ALT every 2 weeks plus height and weight periodically.",
        "Counsel a parent about why pemoline is a last-resort option and what the consent form means.",
      ],
      longAnswer: [
        "Pemoline: mechanism, indication, adverse effects (especially hepatotoxicity), monitoring, and why it was withdrawn — structured answer framework.",
        "Compare the CNS stimulants used in ADHD: methylphenidate, amphetamines, and pemoline — mechanisms, schedules, and toxicities.",
      ],
    },
    neetPg: {
      highYield: [
        "Identity: pemoline = the hepatotoxic stimulant, structurally unrelated to amphetamine and methylphenidate.",
        "Indication: ADHD only after other treatments fail — never first-line.",
        "Monitoring: serum ALT (SGPT) every 2 weeks for the duration of treatment; stop if > 2x ULN.",
        "Schedule IV with low abuse potential — less dependence than amphetamine or methylphenidate.",
        "Dosing: start 37.5 mg each morning; increase 18.75 mg/week; usual range 56.25-75 mg/day; maximum 112.5 mg/day.",
        "Withdrawn from major markets for liver failure — a classic pharmacovigilance one-liner.",
      ],
      pyqConcepts: [
        "Mechanism/target of pemoline (unknown, dopaminergic)",
        "Key adverse effect: hepatotoxicity (liver failure, hepatitis, jaundice)",
        "Dosing and monitoring of pemoline",
        "Stimulant scheduling and abuse potential comparison",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A child on pemoline develops ALT twice the upper limit of normal — next best step? (Discontinue immediately.)",
        "An ADHD patient with a history of hepatitis asks about stimulant options — why is pemoline contraindicated and what are the alternatives?",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Primary use: ADHD after failure of other treatments (FDA-approved).",
        "Most dangerous adverse effect: liver failure — ALT monitoring every 2 weeks.",
        "Key contraindications: hepatic impairment, extreme anxiety or agitation, Tourette's syndrome.",
        "Half-life approximately 12 hours — once-daily morning dosing.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The monitoring paradox: it is not clear that baseline and periodic liver testing predicts active liver failure — but early detection with immediate withdrawal of the suspect drug enhances the likelihood of recovery, which is why monitoring was nevertheless mandated.",
        "The rechallenge protocol: if pemoline is discontinued and restarted, liver testing must be done prior to reinitiating and then every 2 weeks again.",
        "The overdose antidote note: chlorpromazine or atypical antipsychotics may treat the stimulant effects of pemoline overdose.",
      ],
    },
  },
  memoryTricks: [],
  highYieldSummary: [
    "Identity: pemoline = the hepatotoxic last-resort stimulant — mechanism unknown (dopaminergic), structurally unrelated to amphetamine and methylphenidate.",
    "Indication: ADHD only after other treatments fail — never first-line.",
    "Dosing: 37.5 mg each morning; +18.75 mg/week; usual 56.25-75 mg/day; maximum 112.5 mg/day.",
    "Half-life ~12 hours — once-daily morning dosing, no sustained-release forms needed.",
    "Monitoring: serum ALT (SGPT) at baseline and every 2 weeks; discontinue if > 2x upper limit of normal.",
    "Schedule IV, low abuse potential — less dependence than amphetamine or methylphenidate.",
    "Withdrawn from major markets for liver failure — the pharmacovigilance classic.",
  ],
  /* ---- Clinical cases ---- */
  clinicalCases: [
    {
      title: "The stimulant sequence — refractory childhood ADHD",
      presentation: "A 10-year-old boy with ADHD who has failed two first-line stimulants is considered for pemoline.",
      history: "A 10-year-old boy with ADHD has tried optimal trials of methylphenidate and then d-amphetamine — each with partial response and intolerable adverse effects (appetite loss, emotional lability). His school performance continues to deteriorate. No medical history of note; specifically no liver disease, no tic disorder, no seizure disorder. His parents ask what options remain.",
      examination: "Mental status examination is consistent with ADHD (inattentive, hyperactive, impulsive); physical examination and baseline investigations — including normal liver function tests — are unremarkable.",
      diagnosis: "ADHD, treatment-refractory to first-line stimulants. Pemoline was historically the next consideration in this sequence.",
      rationale: "Pemoline was appropriate only after failure of other ADHD treatments: its hepatotoxicity meant it was never first-line. Normal baseline liver function tests were a prerequisite, written informed consent was required, and the every-2-week ALT (SGPT) monitoring plan defined the safety architecture of treatment.",
      management: "Started at 37.5 mg each morning, increased by 18.75 mg each week toward 56.25-75 mg/day (maximum 112.5 mg/day). Serum ALT at baseline and every 2 weeks; height and weight monitored periodically; response assessed 3 weeks after dose titration — no response means discontinue and try another agent.",
      outcome: "At 3-week review, modest improvement in attention and classroom behaviour with tolerable insomnia (managed by strict morning dosing). ALT remains normal at each 2-week check. In current practice, pemoline's market withdrawal redirects this sequence to atomoxetine, lisdexamfetamine, or non-pharmacological intensification — but the case teaches the monitoring discipline that defined this drug.",
      teachingPoints: [
        "Pemoline is a last-resort stimulant — the sequence matters: first-line stimulants first, pemoline only after they fail.",
        "The safety architecture IS the drug: written consent, normal baseline LFTs, and ALT every 2 weeks.",
        "No response 3 weeks after dose titration means stop — not increase further.",
      ],
    },
  ],
  /* ---- Comparison tables ---- */
  comparisonTables: [
    {
      title: "Pemoline vs the standard stimulants — orientation table",
      primaryDrug: "Pemoline",
      rows: [
        {
          attribute: "Mechanism",
          primaryValue: "Theoretically dopaminergic — exact mechanism unknown; structurally unrelated to amphetamine and methylphenidate",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "Dopamine-norepinephrine reuptake inhibitor",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Dopamine-norepinephrine releasing agent (VMAT2)",
            },
          ],
        },
        {
          attribute: "Dosing frequency",
          primaryValue: "Once daily in the morning (~12-hour half-life, sustained activity)",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "Immediate-release multiple times daily; long-acting formulations once daily",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Immediate-release 2-3 times daily; Spansule once daily",
            },
          ],
        },
        {
          attribute: "Defining toxicity",
          primaryValue: "Hepatotoxicity — liver failure, hepatitis, jaundice (the market-withdrawal reason)",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "No routine liver monitoring required",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Cardiovascular stimulation, abuse potential higher",
            },
          ],
        },
        {
          attribute: "Abuse potential",
          primaryValue: "Schedule IV — low; tolerance and psychological dependence rare",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "Schedule II (US) / Schedule X (India)",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "Schedule II (US) / Schedule X (India) — higher abuse potential",
            },
          ],
        },
        {
          attribute: "Clinical role",
          primaryValue: "Historical last-resort for ADHD after other treatments fail — withdrawn from major markets",
          comparisons: [
            {
              drug: "Methylphenidate (d,l)",
              value: "The default first-line stimulant — decades of ADHD evidence",
            },
            {
              drug: "Dextroamphetamine (d-Amphetamine)",
              value: "First-line alternative stimulant",
            },
          ],
        },
      ],
      takeaway: "Pemoline's once-daily convenience, low abuse potential, and blood-pressure neutrality could not compensate for its liver risk — the standard stimulants dominate every treatment sequence, and pemoline remains the cautionary tale.",
    },
  ],
  /* ---- Timeline ---- */
  timeline: [
    {
      id: "t1",
      time: "Hours",
      title: "Drug reaches the brain",
      description: "Pemoline reaches peak exposure and begins acting — but first-dose effects may not occur, as is common with stimulants. The long half-life (~12 hours) sustains activity across the day from a single morning dose.",
      phase: "onset",
    },
    {
      id: "t2",
      time: "Days 1–7",
      title: "Early adaptation",
      description: "Insomnia often occurs before any therapeutic action — morning dosing is the countermeasure. Headache, irritability, dizziness, and appetite loss may appear early.",
      phase: "onset",
    },
    {
      id: "t3",
      time: "Weeks 1–3 after dose titration",
      title: "Therapeutic effect builds",
      description: "Substantial clinical benefit should occur within 3 weeks of completing dose titration. No response by then means withdraw treatment and try another agent — the drug does not reward patience.",
      phase: "peak",
    },
    {
      id: "t4",
      time: "Weeks 4–12",
      title: "Full response and monitoring phase",
      description: "Continue at the effective dose with ALT (SGPT) checks every 2 weeks and periodic height/weight in children. Periodic treatment interruptions help determine whether symptoms return or treatment is still necessary.",
      phase: "peak",
    },
    {
      id: "t5",
      time: "Maintenance",
      title: "Continuation — as long as improvement persists",
      description: "Treatment continues indefinitely while benefit persists; treatment begun in childhood may need to continue into adolescence and adulthood if continued benefit is documented. Long-term stimulant use may be associated with growth suppression in children (controversial).",
      phase: "duration",
    },
  ],
  /* ---- FAQ ---- */
  faqs: [
    {
      question: "How long does pemoline take to work?",
      answer: "First-dose effects may not occur, as is common with stimulants. Substantial clinical benefits should occur within 3 weeks of dose titration — if not, the drug is discontinued and another agent tried. Insomnia often appears before the therapeutic action does.",
    },
    {
      question: "What are the most common side effects of pemoline?",
      answer: "The most frequently reported effects are insomnia, headache, irritability, drowsiness, dizziness, exacerbation of tics, anorexia and weight loss, and rash. The most important effect is rare but serious: liver injury — which is why blood tests every two weeks were mandatory.",
    },
    {
      question: "Can pemoline be stopped suddenly?",
      answer: "Yes in most cases — taper is generally unnecessary and not recommended when discontinuing for hepatic toxicity, and discontinuation symptoms are uncommon. Always discuss the plan with your doctor first.",
    },
    {
      question: "Why did pemoline need blood tests every two weeks?",
      answer: "Because it can cause liver failure in a small number of patients and there is no way to predict who is at risk. Serum ALT (SGPT) was checked at baseline and every two weeks; if ALT rose above twice the upper limit of normal, the drug was stopped immediately. Early detection and immediate withdrawal improve the chance of recovery.",
    },
    {
      question: "Is pemoline habit-forming?",
      answer: "Less than the classic stimulants — it was a Schedule IV drug with low abuse potential, and psychological dependence was rare. Nevertheless it was only ever taken exactly as prescribed.",
    },
    {
      question: "Is pemoline still available?",
      answer: "No — pemoline was withdrawn from the United States and most major markets (2005-2006) because of rare but life-threatening liver failure. It survives in textbooks and exams as the hepatotoxic stimulant and the case study in mandatory liver-function monitoring.",
    },
  ],
  /* ---- References & related ---- */
  references: {
    guidelines: [
      {
        source: "AACAP Practice Parameter for the Use of Stimulant Medications in the Treatment of Children, Adolescents, and Adults (2002)",
      },
    ],
    textbooks: [
      {
        source: "Stahl's Essential Psychopharmacology: The Prescriber's Guide",
        section: "1st ed. (2005), pemoline monograph, p. 357",
      },
      {
        source: "Katzung Basic & Clinical Pharmacology",
        section: "16th ed. — CNS stimulants and drugs for ADHD",
      },
      {
        source: "KD Tripathi Essentials of Medical Pharmacology",
        section: "8th ed. — drugs acting on CNS",
      },
    ],
    trials: [
      {
        source: "FDA Prescribing Information for Cylert (pemoline) — historical label",
      },
    ],
    reviews: [
      {
        source: "Shevell M, Schreiber R. Pemoline-associated hepatic failure: a critical analysis of the literature. Pediatr Neurol. 1997;16:14-6.",
      },
      {
        source: "Cyr M, Brown CS. Current drug therapy recommendations for the treatment of attention deficit hyperactivity disorder. Drugs. 1998;56:215-23.",
      },
    ],
    patientResources: [
      {
        source: "FDA Medication Guide archive — stimulant medications",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/medication-guides",
      },
      {
        source: "NIMH — Mental Health Medications",
        url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
      },
    ],
  },
  relatedDrugs: [
    {
      name: "Methylphenidate (d,l)",
      slug: "methylphenidate",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Lisdexamfetamine",
      slug: "lisdexamfetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dextroamphetamine (d-Amphetamine)",
      slug: "dexamphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Amphetamine (d,l)",
      slug: "amphetamine",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
    {
      name: "Dexmethylphenidate",
      slug: "dexmethylphenidate",
      drugClass: "Stimulant",
      relationship: "Same class (Stimulant)",
    },
  ],
  relatedConditions: [
    {
      name: "Attention deficit hyperactivity disorder (ADHD)",
      relationship: "primary",
    },
  ],
  /* ---- Knowledge graph ---- */
  knowledgeGraph: [
    {
      label: "Pemoline",
      type: "drug",
      href: "/drugs/pemoline",
      note: "The drug you're reading about",
    },
    {
      label: "Pemoline",
      type: "class",
      href: "#mechanism",
      note: "CNS Stimulant (Dopaminergic, Mechanism Uncertain)",
    },
    {
      label: "Dopamine",
      type: "neurotransmitter",
      href: "#neurotransmitters",
      note: "Key neurotransmitter involved",
    },
    {
      label: "Dopaminergic signalling (exact target unknown)",
      type: "neurotransmitter",
      href: "#mechanism",
      note: "Primary molecular target",
    },
    {
      label: "Attention deficit hyperactivity disorder (ADHD)",
      type: "condition",
      href: "#clinical-uses",
      note: "Key indication",
    },
    {
      label: "Liver failure, hepatitis, jaundice",
      type: "side-effect",
      href: "#side-effects",
      note: "Important safety issue",
    },
    {
      label: "Insomnia",
      type: "side-effect",
      href: "#side-effects",
      note: "Most common side effect",
    },
    {
      label: "Anorexia and weight loss",
      type: "side-effect",
      href: "#side-effects",
      note: "Common nutritional effect",
    },
    {
      label: "Patient Guide — Pemoline",
      type: "patient-guide",
      href: "#patient-education",
      note: "What to expect on this medicine",
    },
  ],
  /* ---- Patient mode ---- */
  patientMode: {
    tagline: "The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet.",
    summary: "Pemoline is a stimulant medicine that was used for ADHD when other ADHD medicines had not worked. It has been withdrawn from most markets because it can seriously harm the liver in rare cases — it remains important in medical history and exams.",
    mechanism: "Pemoline is a stimulant that doctors believe works on a brain chemical called dopamine, but its exact mechanism was never discovered — it is chemically different from the usual stimulants (methylphenidate, amphetamine). It was only ever used when the standard ADHD medicines had already been tried and had not worked, because of its risk of harming the liver. While taking it, patients needed a blood test to check the liver every two weeks, and it was taken once every morning to avoid sleep problems.",
    sideEffects: "The most common side effects are: insomnia, headache, irritability, drowsiness, dizziness, exacerbation of tics, anorexia and weight loss, and rash. These usually appear early and many settle with time. The most important effect is uncommon but serious: liver injury (liver failure, hepatitis, jaundice). Contact your doctor urgently if you notice yellowing of the eyes or skin, dark urine, or unusual tiredness. Tell your doctor about any effect that persists or worries you — there is almost always a solution.",
    monitoring: "While taking pemoline, doctors checked a liver blood test (ALT, also called SGPT) at the start and every two weeks, plus height and weight in children. Keep every appointment — these checks are how the treatment stays safe.",
    contraindications: "Do not take this medicine if: you have any liver problem, extreme anxiety or agitation, or Tourette's syndrome. Always share your full medical history and medicine list with your doctor.",
    interactions: "Drug interactions involving pemoline have not been systematically studied — tell your doctor and pharmacist about everything you take before starting, and keep other medicines to a minimum while on it.",
  },
  /* ---- India-first extensions ---- */
  indianPractice: {
    prescriptionStatus: "Schedule X",
    brands: [
      {
        name: "Cylert (withdrawn — never marketed in India)",
        manufacturer: "Abbott (historical)",
        strengths: "18.75 / 37.5 / 75 mg tablets",
      },
    ],
    typicalDoses: "37.5 mg each morning, increased by 18.75 mg weekly; usual range 56.25-75 mg/day (maximum 112.5 mg/day) — historical dosing only.",
    prescribingScenarios: [
      "Educational and examination context only — Indian practice uses methylphenidate (Schedule X), lisdexamfetamine (import), or atomoxetine for ADHD; pemoline is a withdrawn drug with no current Indian availability.",
    ],
    availability: {
      governmentHospitals: false,
      privatePharmacies: false,
      urban: false,
      rural: false,
    },
    costCategory: "moderate",
    costNote: "Not marketed — historical/import-only context. Cost varies by manufacturer and region.",
    monitoring: "Historical: serum ALT (SGPT) at baseline and every 2 weeks; height and weight in children.",
    patientCounselling: [
      "Historical drug — counselling points preserved for exams: written informed consent before starting.",
      "Report jaundice, dark urine, anorexia, or malaise immediately.",
      "Once-daily morning dosing to avoid insomnia.",
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
    familyName: "Stimulants",
    members: [
      {
        name: "Pemoline",
        slug: "pemoline",
        relationship: "This guide",
        distinguishing: "The hepatotoxic last-resort — withdrawn from major markets",
      },
      {
        name: "Methylphenidate (d,l)",
        slug: "methylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The default stimulant — 60 years of ADHD first-line",
      },
      {
        name: "Lisdexamfetamine",
        slug: "lisdexamfetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The misuse-resistant long-acting prodrug stimulant",
      },
      {
        name: "Dextroamphetamine (d-Amphetamine)",
        slug: "dexamphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The pure d-isomer — stronger central, softer peripheral",
      },
      {
        name: "Amphetamine (d,l)",
        slug: "amphetamine",
        relationship: "Same class (Stimulant)",
        distinguishing: "The Adderall mixture — d for focus, l for wake",
      },
      {
        name: "Dexmethylphenidate",
        slug: "dexmethylphenidate",
        relationship: "Same class (Stimulant)",
        distinguishing: "The active isomer — methylphenidate distilled",
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
      question: "How is pemoline's mechanism best described?",
      options: [
        "Theoretically enhances dopaminergic neurotransmission by an unknown mechanism — structurally unrelated to amphetamine and methylphenidate",
        "Dopamine-norepinephrine reuptake inhibitor like methylphenidate",
        "VMAT2 dopamine releasing agent like amphetamine",
        "Selective norepinephrine reuptake inhibitor like atomoxetine",
      ],
      correctIndex: 0,
      explanation: "Pemoline is the stimulant whose exact molecular target was never established — it is structurally unrelated to both amphetamine and methylphenidate, with only a theoretical dopaminergic enhancement to explain its clinical activity.",
      afterSectionId: "mechanism",
    },
    {
      id: "quiz-side-effects",
      question: "Which effect ended pemoline's market life?",
      options: [
        "Liver failure, hepatitis, jaundice",
        "Aplastic anaemia (isolated reports)",
        "Psychotic episodes",
        "Seizures",
      ],
      correctIndex: 0,
      explanation: "Rare but unpredictable liver failure — not the rarer psychotic episodes, seizures, or aplastic anaemia reports — is the toxicity that led to pemoline's withdrawal from major markets and its every-2-week ALT monitoring ritual.",
      afterSectionId: "side-effects",
    },
    {
      id: "quiz-dosing",
      question: "What is the pemoline dosing and monitoring architecture for ADHD?",
      options: [
        "Start 37.5 mg each morning, increase 18.75 mg weekly (max 112.5 mg/day), with serum ALT every 2 weeks",
        "Start 10 mg twice daily, increase weekly (max 60 mg/day), with blood pressure checks only",
        "Start 56.25 mg at bedtime, increase monthly (max 150 mg/day), with no routine monitoring",
        "Single fixed dose of 75 mg every morning with no titration",
      ],
      correctIndex: 0,
      explanation: "Initial 37.5 mg/day in the morning; increase by 18.75 mg each week; usual range 56.25-75 mg/day; maximum 112.5 mg/day — with serum ALT (SGPT) at baseline and every 2 weeks for the duration of treatment. The once-daily morning schedule exploits the ~12-hour half-life and avoids insomnia.",
      afterSectionId: "prescriber-guide",
    },
  ],
  activeRecallQuestions: [
    {
      question: "State the mechanism of action of pemoline in two sentences.",
      answer: "Pemoline theoretically enhances dopaminergic neurotransmission by an unknown mechanism — it is structurally unrelated to amphetamine and methylphenidate. Its CNS side effects are presumably due to excessive dopamine actions, while the mechanism of its hepatic toxicity is unknown.",
      topic: "Mechanism",
    },
    {
      question: "What was pemoline's clinical niche, and why was it never first-line?",
      answer: "ADHD in patients who fail to respond to other treatments — never first-line because hepatotoxicity (liver failure, hepatitis, jaundice) was unpredictable and life-threatening; written informed consent was required before starting.",
      topic: "Indications",
    },
    {
      question: "Name the most clinically important safety issue of pemoline and how it was managed.",
      answer: "Liver failure: no way exists to predict who will develop it, so only patients without liver disease and with normal baseline liver function tests could start pemoline. Management: serum ALT (SGPT) at baseline and every 2 weeks — discontinue if ALT rises above twice the upper limit of normal or if clinical signs of liver dysfunction appear.",
      topic: "Safety",
    },
    {
      question: "What monitoring does a patient on pemoline require?",
      answer: "Serum ALT (SGPT) at baseline and every 2 weeks for the duration of treatment; height and weight periodically in children (growth suppression concern); and review of the continued need for treatment at every visit.",
      topic: "Monitoring",
    },
    {
      question: "Share one clinical pearl about pemoline that separates safe prescribers from unsafe ones.",
      answer: "The every-2-weeks ALT ritual: serum SGPT at baseline and every 2 weeks for the entire treatment — discontinue if ALT exceeds twice the upper limit of normal; liver function monitoring is a necessary component of pemoline therapy.",
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
      checkpoint: "You now know what Pemoline is, what it treats, and how it connects to the broader neuroscience.",
    },
    {
      number: 2,
      title: "Mechanism & Neuroscience",
      description: "How does it work? Where does it act?",
      sectionIds: ["mechanism", "brain-regions", "neurotransmitters", "neural-pathways", "timeline"],
      checkpoint: "You understand how Pemoline works — from its uncertain dopaminergic target to its clinical effect timeline.",
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
      checkpoint: "You can describe how pemoline was prescribed safely — indications, side effects, contraindications, and the ALT monitoring ritual are mapped.",
    },
    {
      number: 4,
      title: "Indian Context",
      description: "How is it used in Indian practice?",
      sectionIds: ["indian-clinical", "decision-path", "common-mistakes"],
      checkpoint: "You know the Indian regulatory status (Schedule X history, not marketed) and the current ADHD alternatives.",
    },
    {
      number: 5,
      title: "Exam Revision",
      description: "High-yield facts, cases, and comparisons.",
      sectionIds: ["learning-module", "clinical-case", "drug-navigation", "high-yield-summary"],
      checkpoint: "You've reviewed the exam content, worked a case, and compared Pemoline with the standard stimulants.",
    },
    {
      number: 6,
      title: "Active Recall",
      description: "Can you answer without looking?",
      sectionIds: ["active-recall", "faq", "references"],
      checkpoint: "If you answered the recall questions unaided, you have exam-level mastery of Pemoline.",
    },
  ],
  /* ---- Prescriber's Guide (Stahl layer) ---- */
  prescriberGuide: {
    sourceEdition: "Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005)",
    onsetTimeline: [
      "First-dose effects may not occur, as is common with other stimulants.",
      "Insomnia often occurs prior to the onset of therapeutic actions.",
      "Substantial clinical benefits should occur within 3 weeks of dosage titration, or the patient should be withdrawn from treatment.",
    ],
    ifItWorks: [
      "Monitor the need for continued treatment and monitor liver function throughout.",
      "The goal of treatment of ADHD is reduction of symptoms of inattentiveness, motor hyperactivity, and/or impulsiveness that disrupt social, school, and/or occupational functioning.",
      "Continue treatment until all symptoms are under control or improvement is stable, then continue treatment indefinitely as long as improvement persists.",
      "Treatment begun in childhood may need to be continued into adolescence and adulthood if continued benefit is documented.",
    ],
    ifItDoesNotWork: [
      "If no response is seen 3 weeks after dose titration, discontinue use and try another agent.",
      "Best to attempt another monotherapy before considering augmentation.",
    ],
    augmentationCombos: [
      "Drug combinations with pemoline have not been systematically studied — augmentation is best left to the expert if used at all.",
    ],
    testsBeforeStarting: [
      "There is no way to predict who is likely to develop liver failure — only patients without liver disease and with normal baseline liver function tests should initiate pemoline therapy.",
      "Serum ALT (SGPT) at baseline and every 2 weeks thereafter.",
      "In children, monitor height and weight.",
    ],
    sideEffectLogic: [
      "Unknown mechanism overall — CNS side effects are presumably due to excessive dopamine actions, and the mechanism of hepatic toxicity is unknown.",
    ],
    sideEffectManagement: [
      "Wait — most side effects appear to be dose-dependent.",
      "Adjust the dose.",
      "If side effects persist, discontinue use.",
      "If signs of hepatic failure develop, discontinue use immediately.",
    ],
    sideEffectRescue: [
      "Short-term use of hypnotics for insomnia.",
      "Dose reduction or switching to another agent — most side effects cannot be improved with an augmenting agent.",
    ],
    weightGain: "Reported but not expected — some patients may experience weight loss, which is generally regained in 3-6 months.",
    sedation: "Occurs in a significant minority — activation may also occur.",
    dosing: [
      {
        indication: "ADHD (patients who fail other treatments)",
        starting: "37.5 mg/day in the morning",
        titration: "Increase by 18.75 mg each week",
        target: "56.25-75 mg/day",
        max: "112.5 mg/day",
      },
    ],
    dosageForms: [
      "Tablet 18.75 mg (scored)",
      "Tablet 37.5 mg (scored)",
      "Tablet 37.5 mg (scored chewable)",
      "Tablet 75 mg",
    ],
    dosingTips: [
      "Administer in the morning to avoid insomnia.",
      "Relatively long half-life (~12 hours) and sustained duration of clinical activity — once daily in the morning, with no sustained-release formulations needed.",
      "May wish to stop treatment intermittently to determine if behavioural symptoms return or treatment is no longer necessary.",
      "Written informed consent is required before initiating treatment (consent form in the manufacturer's package insert).",
    ],
    overdose: [
      "Overdose picture: vomiting, agitation, tremor, hyperreflexia, twitching, convulsion, coma, euphoria, confusion, hallucination, sweating, headache, hyperpyrexia, tachycardia, hypertension, mydriasis.",
      "Chlorpromazine or atypical antipsychotics may treat the stimulant effects of pemoline overdose.",
    ],
    longTermUse: "Dependence and abuse are less likely than with amphetamine or methylphenidate; long-term stimulant use may be associated with growth suppression in children (controversial). Must monitor serum ALT (SGPT) every 2 weeks for the duration of treatment; discontinue if ALT increases to a clinically significant level, if any increase above 2 times the upper limit of normal occurs, or if clinical signs suggest liver failure. If therapy is discontinued and restarted, test the liver prior to reinitiating and then every 2 weeks.",
    habitForming: "Low abuse potential — Schedule IV. Some patients may develop tolerance, but abuse and psychological dependence are rare.",
    howToStop: [
      "Taper generally unnecessary and not recommended when discontinuing for hepatic toxicity.",
      "Discontinuation symptoms are uncommon.",
    ],
    pharmacokinetics: [
      "Half-life: Approximately 12 hours.",
      "Metabolism: Hepatic.",
      "Excretion: Primarily renal.",
    ],
    doNotUse: [
      "If the patient has hepatic impairment.",
      "If the patient has extreme anxiety or agitation.",
      "If the patient has Tourette's syndrome.",
      "If there is a proven allergy to pemoline.",
    ],
    specialPopulations: [
      {
        population: "Renal impairment",
        guidance: [
          "Use with caution — pemoline is excreted primarily by the kidneys.",
        ],
      },
      {
        population: "Hepatic impairment",
        guidance: [
          "Contraindicated.",
        ],
      },
      {
        population: "Cardiac impairment",
        guidance: [
          "Use with caution — though less likely than other stimulants to raise blood pressure, with minimal sympathomimetic effects.",
        ],
      },
      {
        population: "Elderly",
        guidance: [
          "Use with caution — elderly patients are more likely to have hepatic impairment; not extensively studied.",
        ],
      },
      {
        population: "Children and adolescents",
        guidance: [
          "Safety and efficacy not established under age 6; use in children should be reserved for the expert.",
          "May worsen behavioural disturbance and thought disorder in psychotic children.",
          "May affect predicted height and weight with long-term use (controversial) — monitor both during treatment.",
        ],
      },
      {
        population: "Pregnancy and breastfeeding",
        guidance: [
          "Risk Category B — animal studies show no adverse effects, no controlled studies in humans.",
          "For ADHD patients, pemoline should generally be discontinued before anticipated pregnancies.",
          "Unknown if secreted in breast milk — recommended either to discontinue the drug or to bottle feed.",
        ],
      },
    ],
    potentialAdvantages: [
      "Once-daily morning dosing through a ~12-hour half-life — no sustained-release formulation needed.",
      "Minimal sympathomimetic effects — less likely than other stimulants to raise blood pressure.",
      "Low abuse potential (Schedule IV) — less dependence liability than amphetamine or methylphenidate.",
      "For the rare ADHD patient who responds to this agent and not to other ADHD treatments.",
    ],
    potentialDisadvantages: [
      "Hepatotoxicity — liver failure, hepatitis, jaundice; unpredictable and the reason pemoline is not used first-line.",
      "Requires written informed consent and liver function testing every 2 weeks for the duration of treatment.",
      "Growth suppression concern in children (controversial).",
      "Withdrawn from major markets — availability is historical.",
    ],
    primaryTargetSymptoms: [
      "Concentration and attention span",
      "Motor hyperactivity",
      "Impulsiveness",
    ],
    pearls: [
      "The last-resort stimulant: not used first-line because of the risk of hepatotoxicity — only for ADHD patients who respond to this agent and not to other treatments of ADHD, and rarely if ever appropriate for off-label uses.",
      "The every-2-weeks ALT ritual: serum SGPT at baseline and every 2 weeks for the entire treatment — discontinue if ALT exceeds twice the upper limit of normal; liver function monitoring is a necessary component of pemoline therapy.",
      "Written informed consent from the patient is required before initiating treatment with pemoline — a rarity among psychotropics that marks the drug's risk profile.",
      "Minimal sympathomimetic effects despite pharmacologic activity similar to other CNS stimulants — less likely than other stimulants to raise blood pressure, with a more gradual onset of action.",
      "Insomnia often occurs prior to the onset of therapeutic actions — morning dosing is the countermeasure.",
      "It is not clear that liver function testing is predictive of active liver failure — but early detection of drug-induced hepatic injury with immediate withdrawal of the suspect drug enhances the likelihood of recovery, which is why monitoring was mandated.",
    ],
  },
  /* ---- Metadata ---- */
  lastReviewed: "2026-10-01",
  reviewers: [
    "Content reviewed against Stahl's Essential Psychopharmacology: The Prescriber's Guide, 1st ed. (2005) — facts paraphrased, not reproduced.",
    "Pemoline is withdrawn from major markets (hepatotoxicity) — retained for educational completeness; verify against current national guidance before any clinical application.",
  ],
};
