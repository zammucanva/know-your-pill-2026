import type { PsychiatryCourse } from "./types";

/**
 * TREATING PERSONALITY DISORDERS — PSYCHOTHERAPIES, PHARMACOLOGY &
 * SERVICE DESIGN — canonical Psychiatry course (migration batch 5,
 * Group J — personality disorders, part 3 of 3).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/personality-disorder-treatment.md — untouched
 * foundation), re-researched against current guidance (Zanarini's
 * McLean remission cohorts, the CLPS, Linehan's DBT trials, Bateman
 * & Fonagy's MBT programme, Clarkin/Kernberg TFP, Giesen-Buerman
 * SFT comparison, Leichsenring & Leibing's meta-analysis, the APA
 * 2001 guideline critique, Tyrer's nidotherapy, NMHS/NIMHANS Indian
 * framing) with per-claim provenance.
 *
 * Drug routes: fluoxetine (the SSRI impulsive-aggression signal),
 * venlafaxine (the affective-symptom gesture) and amitriptyline
 * (the negative-evidence TCA — linked precisely because it FAILED);
 * topiramate, aripiprazole, olanzapine, lithium, phenelzine and
 * clonazepam have no KYP drug lessons and are recorded in
 * contentGaps, never invented.
 */
export const personalityDisorderTreatmentCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "personality-disorder-treatment",
  title: "Treating Personality Disorders — Psychotherapies, Pharmacology & Service Design",
  shortName: "PD Treatment",
  kind: "concept",
  category: "Personality Disorder",
  groupLetter: "J",
  groupName: "Personality disorders",
  learningPath: ["Psychiatry", "Personality Disorders", "Treatment"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Personality disorders are treatable — but the treatment that works is organised, structured, consistent care built around psychotherapy, with drugs playing a small, honest, symptom-targeted role, and the service design itself acting as part of the therapy.",
  summary:
    "The Oxford treatment chapters open by dismantling therapeutic nihilism with follow-up data: borderline personality disorder, assumed lifelong, shows 88% remission over 10 years, and over 4 years more than half remit. The course then builds the treatment architecture in three tiers. The psychotherapy tier: several programmes with randomised-trial evidence — DBT (Linehan), mentalization-based treatment (Bateman & Fonagy), transference-focused psychotherapy (Kernberg's school), schema-focused therapy (Young), cognitive therapy, brief dynamic therapies, STEPPS and MACT for public-health scale, therapeutic communities and nidotherapy — all sharing seven structural features that may matter more than the brand name: well-structured, collaborative, clearly focused, theoretically coherent, relatively long-term, attachment-promoting, integrated with other services. The pharmacology tier gets a cold, clean-eyed audit: no drug is licensed for personality disorder; SSRIs help impulsive aggression (fluoxetine); topiramate and perhaps lithium reduce anger; aripiprazole has one encouraging trial; antipsychotics are equivocal (olanzapine showed no core-symptom benefit); tricyclics and MAOIs are effectively retired with behaviour-therapy-alone — the three options with negative risk-benefit ratios; and the APA 2001 guideline's 'symptom-domain' prescribing was famously criticised as pseudo-diagnosis ('the tolerability argument applies equally well to placebo, whose tolerability and safety are unparalleled'). The management tier delivers the master concept: an organised plan of care — consistency, constancy, adequate crisis support — improves outcomes irrespective of the specific intervention; and the commonest management error is failing to notice the personality disorder at all. The Indian translation is direct: one named clinician, a written crisis card, scheduled follow-up, 4–8-week time-limited drug trials with written review dates, family psychoeducation — the package costs discipline, not money, and captures most of what the trials actually demonstrate.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote the natural-course data that overturned the 'lifelong' assumption: 88% 10-year BPD remission; >50% over 4 years (CLPS); which symptoms remit fast and which slowly.",
    "List the seven shared features of effective psychotherapies for personality disorder — and explain why structure itself may be the active ingredient.",
    "Describe the main evidence-backed therapies with one-line identities and key trial results: DBT, MBT, TFP, schema-focused therapy, CAT, cognitive therapy, STEPPS, MACT, group therapy, therapeutic communities, nidotherapy.",
    "Explain Type S vs Type R personality disorders (treatment-seeking vs treatment-rejecting) and the service implications of each.",
    "Audit drug treatment honestly by class — and recite the APA 2001 guideline critique as the model of evidence-based scepticism.",
    "State the three treatment options with negative risk-benefit ratios.",
    "Name the three service models, which two are best for risk and outcomes, and the three management principles that override model choice.",
    "Prescribe the Indian practical package: consistency, constancy, crisis access, time-limited drug trials, polypharmacy reversal, family psychoeducation.",
    "Identify the biggest management error (missing the PD behind the Axis-I presentation) and the four settings where to hunt for it.",
  ],
  quickFacts: [
    { label: "The number that ended nihilism", value: "88% / 10 years", detail: "Borderline PD remission over 10 years (Zanarini's McLean Study); CLPS: more than half remit over just 4 years — 'lifelong' is dead, and acute symptoms (self-harm) remit first, temperamental ones (anger, distrust) last" },
    { label: "The seven shared features", value: "The real active ingredient", detail: "Well-structured · collaboration-enhancing · clearly focused · theoretically coherent · relatively long-term · attachment-promoting · integrated with other services — most trials compared structured therapy with ROUTINE care, so the structure may matter more than the brand" },
    { label: "DBT's founding trial", value: "8.5 vs 38.8", detail: "Inpatient DAYS 8.5 vs 38.8, dropout 16.7% vs 50% against treatment-as-usual — the behavioural-and-service outcomes that drove adoption (depression and hopelessness did NOT differ)" },
    { label: "The drug audit", value: "No licensed drug", detail: "Fluoxetine: aggression/impulsivity yes; topiramate: the best anti-aggression signal (needs replication); aripiprazole 15 mg: one good trial; olanzapine: no core benefit; TCAs: no better than placebo; lithium: unsatisfactory evidence — every prescription is time-limited and symptom-targeted" },
    { label: "The negative risk-benefit trio", value: "Retire them", detail: "Behaviour therapy alone · tricyclics · MAOIs — the three options whose risks exceed their benefits in personality disorder" },
    { label: "The placebo quote", value: "The examiners' favourite", detail: "The APA 2001 guideline's symptom-domains ('affective dysregulation', 'impulsive-behavioural dyscontrol', 'cognitive-perceptual') are pseudo-diagnoses created to justify drugs — and the tolerability argument 'applies equally well to placebo, whose tolerability and safety are unparalleled'" },
    { label: "Type S vs Type R", value: "Who seeks, who rejects", detail: "Borderline/avoidant/dependent are treatment-SEEKING; antisocial/schizoid/paranoid are treatment-REJECTING — nidotherapy (environment modification, nidus = nest) was designed for the R group" },
    { label: "The Indian package", value: "Costs discipline, not money", detail: "One named clinician · written crisis card · scheduled (not crisis-driven) follow-up · 4–8-week drug trials with written stop-dates · polypharmacy reversal · family psychoeducation — the package that captures most of what the trials demonstrate" },
  ],
  knowledgeGraph: [
    { label: "Personality Disorders — The Concept", type: "condition", href: "/psychiatry/personality-disorders-overview/", note: "The definition, clusters and epidemiology the treatment architecture serves" },
    { label: "Specific Personality Disorder Types", type: "condition", href: "/psychiatry/personality-disorder-types/", note: "The ten types whose treatment gestures this course expands into programmes" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Treat the wrong one and every trial in this course fails — the discrimination runs before the prescription" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The presenting illness that most often conceals the personality disorder — treated together, priced differently" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The safety architecture the organised plan wraps around every gesture" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "The SSRI with the impulsive-aggression signal — the one clean drug route in this course" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The treatment course's mechanism tier is the mechanism OF THERAPY — the five mechanism models the evidence-backed programmes each address, and why they converge. Emotional dysregulation (Linehan's biosocial model): biologically vulnerable emotion systems meeting invalidating environments; maladaptive behaviours — self-harm, rage — are simultaneously products of dysregulation and attempts to regulate it; DBT trains regulation and distress tolerance directly. Mentalizing failure (Fonagy and Bateman): under stress or attachment threat, the borderline patient loses the capacity to interpret minds — their own and others' — so actions feel inexplicable and malevolent; MBT rebuilds mentalizing. Splitting and object-relations instability (Kernberg): all-or-nothing representations of self and other drive the idealisation-devaluation cycle; TFP works through the transference to integrate them. Early maladaptive schemas (Young): unconditional core beliefs ('I am bad'; 'others will abandon me') formed in childhood and defended desperately when challenged; schema-focused therapy identifies and reworks them with 'limited reparenting'. Self-state switching (the CAT model): partially dissociated self-states, triggered by threat, producing rapid switches between intense emotional and cut-off states, maintained by learned reciprocal-role procedures. Underneath all five sits the serotonergic under-functioning and impulsive-aggression biology — the target of the SSRI tier's modest effects — and the environmental-mismatch model for the treatment-rejecting types, the target of nidotherapy. The chapter's startling honest note explains the convergence: since most trials compared structured therapy with routine care, it is impossible to know whether outcomes come from the orientation or simply from the structure — either way, the treatment package IS the treatment, which is why service organisation is treated as part of the therapy, not its container.",
    steps: [
      "Linehan's biosocial model: vulnerable emotion systems × invalidating environments → dysregulation; self-harm as both product and attempted regulation — DBT's skills directly train the missing regulation.",
      "Fonagy and Bateman's mentalizing model: attachment threat switches mentalizing OFF — actions (own and others') become inexplicable and malevolent — MBT rebuilds the capacity under stress.",
      "Kernberg's object-relations model: splitting drives idealisation-devaluation — TFP uses the live transference to integrate the all-or-nothing representations.",
      "Young's schema model: unconditional core beliefs formed in childhood, defended desperately — schema therapy reworks them with limited reparenting.",
      "The CAT model: threat-triggered switches between dissociated self-states, maintained by reciprocal role procedures — the diagram-and-letters therapy maps and revises them.",
      "The biological tier underneath: serotonergic under-functioning with impulsive aggression — the SSRI tier's modest target; environmental mismatch for the treatment-rejecting types — nidotherapy's target.",
      "The convergence explanation: most trials compared structured therapy with routine care — the structure itself may be the active ingredient, and the service design becomes part of the treatment.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala-therapy", name: "Amygdala (sensitised alarm)", role: "The dysregulation tier's alarm: therapy's regulation skills and the crisis-plan structure are, in effect, an external prefrontal cortex until the patient's own installs.", grade: "supported" },
    { id: "prefrontal-regulation", name: "Cingulate/prefrontal regulation circuitry", role: "The under-recruited brake tier the therapies train up — and the tier the mentalizing model locates the perspective-taking capacity in.", grade: "supported" },
    { id: "hp-axis-remission", name: "HPA axis (the stress thermostat)", role: "The high-basal-cortisol, blunted-challenge system of the impulsive-suicidal tier — the machinery the years-long remission curves presumably re-range.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The impulsive-aggression brake: the SSRI tier's target — fluoxetine's aggression-and-impulsivity signal is the clinical echo (the one clean drug route in this course).", grade: "supported", drugConnection: "Fluoxetine's placebo-controlled aggression signal (see the fluoxetine lesson); fluvoxamine helped mood only — the drug-route honesty tier." },
    { name: "Dopamine", symbol: "DA", role: "The perceptual-symptom tier: the low-dose antipsychotic gestures (haloperidol short-term; aripiprazole's one good trial) act here — modest, time-limited, symptom-targeted.", grade: "proposed" },
    { name: "Glutamate/GABA (topiramate's tier)", symbol: "Glu/GABA", role: "The anti-aggression signal's plausible substrate: topiramate's aggression-and-hostility reduction — the most impressive pharmacological result in the audit, awaiting replication.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "remission-curve",
      name: "The remission curve (what actually happens)",
      steps: [
        { label: "Acute symptoms remit first", detail: "Parasuicide and self-injury — precisely what triggers referral — drop fastest" },
        { label: "Temperamental symptoms lag", detail: "Anger, distrust, abandonment concerns and emotional instability resolve far more slowly" },
        { label: "Function recovers last", detail: "Psychosocial functioning trails symptom remission by years — the plan's expectations priced accordingly" },
        { label: "Improvement continues after therapy ends", detail: "The follow-up finding: therapy accelerates recovery, it does not manufacture it — hope with numbers" },
      ],
      clinicalManifestation: "The patient whose crises stop within a year but whose relationships take five — the prognosis conversation the natural-course data grounds.",
      grade: "established",
    },
    {
      id: "organised-plan",
      name: "The organised plan's mechanism (why structure treats)",
      steps: [
        { label: "Consistency", detail: "Few key workers, good communication — patients detect inconsistency acutely and use it defensively" },
        { label: "Constancy", detail: "Staff changes avoided — therapist changes re-enact loss, the borderline's core wound" },
        { label: "Adequate crisis access", detail: "Brief planned admissions beat both blanket refusal and indefinite stays — the belief that PD patients should be kept out of hospital is opinion, not evidence" },
        { label: "Outcomes improve irrespective of the specific intervention", detail: "The management chapter's master finding — the service design is part of the therapy, not its container" },
      ],
      clinicalManifestation: "The revolving-door patient whose admissions halve under a crisis card and a named clinician — before any new drug or therapy brand enters.",
      grade: "supported",
    },
    {
      id: "type-r-pathway",
      name: "The treatment-rejecting pathway (nidotherapy logic)",
      steps: [
        { label: "Type R identified", detail: "Antisocial, schizoid, paranoid presentations refusing 'any therapy, any tablets: this is who I am'" },
        { label: "The target shifts from person to fit", detail: "Systematic collaborative modification of the ENVIRONMENT (from nidus, nest): boundary identification → full environmental analysis → agreed change → monitoring → target resetting" },
        { label: "Harm drops even when the person does not change", detail: "A better person-environment fit reduces crises — and sometimes opens the door to voluntary care later" },
        { label: "The evidence is early", detail: "Randomised evidence so far: mainly cost savings through reduced hospitalisation — a healthy correction to person-fixated models, honestly flagged as early-stage" },
      ],
      clinicalManifestation: "The dissocial man whose third job loss triggers the family's exasperation — and whose six-month outcome rides on a renegotiated role in the family business and a room of his own.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "treatment-trials-era", time: "1990s", title: "The trial era opens", description: "Linehan's first DBT trial (44 chronically parasuicidal women) establishes that a structured psychotherapy can beat treatment-as-usual on the outcomes that matter: suicide attempts, inpatient days, dropout.", phase: "onset" },
    { id: "treatment-proliferation", time: "1999–2008", title: "The programme proliferation", description: "Bateman & Fonagy's MBT (18-month partial hospitalisation, gains sustained at 5 years); Clarkin/Kernberg's TFP; Young's schema therapy; Davidson's cognitive therapy; MACT and STEPPS for scale; the Cassel step-down programme — the field acquires a genuine therapy armamentarium.", phase: "peak" },
    { id: "treatment-synthesis", time: "2003–2005", title: "The meta-analytic synthesis", description: "Leichsenring & Leibing: psychodynamic therapy effect size 1.46, CBT 1.00 — dynamic gains larger and longer-lasting, both effective; Roth & Fonagy's independent audit concludes only DBT and psychodynamic treatments qualify as evidence-based.", phase: "peak" },
    { id: "treatment-remission", time: "2006–2008", title: "The prognosis reversal lands", description: "Zanarini's McLean cohorts publish the 88% 10-year remission; the CLPS the 4-year half-remission — therapeutic nihilism loses its evidential basis and the long-horizon structured plan becomes the standard of care.", phase: "recovery" },
    { id: "treatment-modern-era", time: "2010s onward", title: "The implementation era", description: "The question shifts from 'does anything work?' to 'how do systems deliver it?': stepped care, crisis cards, time-limited pharmacology discipline, family programmes (Family Connections), tele-supervision — the Indian translation of this course.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The treatment-relevant epidemiology: borderline, anxious/avoidant and dependent PDs are treatment-SEEKING (Type S) — most trials therefore study borderline inpatients; antisocial, schizoid and paranoid PDs are treatment-REJECTING (Type R). Pure disorders are rare (only about 1 in 20 borderline presentations is 'pure' BPD; four or more comorbid disorders are common) — the comorbidity that makes trials uniquely hard. The natural course: 88% of borderline patients remit over 10 years (2-year remission criterion); over 4 years in the CLPS, more than half remitted (12 months at two or fewer criteria); Stone's classic follow-up found 66% recovering well but taking 20 years — four times longer than modern cohorts, raising the possibility that some older treatments actively impeded natural recovery.",
    indianPrevalence: "Dedicated PD treatment programmes are scarce (NIMHANS and a few centres); most Indian patients are managed by general psychiatrists in mixed OPDs. The natural-course data is the single most useful import for Indian practice: it justifies long-horizon, structured follow-up with honest hope, in place of the oscillation between over-treatment (polypharmacy during crises) and abandonment ('nothing can be done').",
    lifetimeRisk: "With organised treatment the remission curves steepen; without it the revolving-door pattern (crisis admissions accumulating drugs) becomes the iatrogenic shadow — the treatment's own failure mode to design against.",
    genderRatio: "The trial populations mirror the clinical tier: borderline-predominant, women-predominant in treatment-seeking samples; the treatment-rejecting tier (dissocial, schizoid, paranoid) barely enters the trial literature at all — an evidence-gap the chapters state plainly.",
    ageOfOnset: "Treatment typically engages in the 20s–30s (the Cluster B crisis years); the borderline burn-down after 40 means long-horizon plans must also plan their own retirement — the maturation transition from intensive to maintenance support.",
    indianNotes: "The Indian service reality: the organised plan (one named clinician, crisis card, scheduled follow-up) is deliverable in every district OPD; DBT-informed groups exist at a few centres; family psychoeducation is the highest-yield low-cost intervention available in a culture of family-carried care (the Family Connections evidence maps directly).",
  },
  etiology: [
    { category: "biological", factor: "Serotonergic under-functioning", details: "Low CSF 5-HIAA with impulsive aggression — the target of the SSRI tier's modest, time-limited effects (fluoxetine's aggression signal)." },
    { category: "biological", factor: "The stress system's lost range", details: "High basal cortisol with blunted challenge response in the impulsive-suicidal tier — the machinery the long-horizon remission curves presumably re-range through structure and skills." },
    { category: "psychological", factor: "Emotional dysregulation (Linehan's biosocial model)", details: "Vulnerable emotion systems × invalidating environments; self-harm as product AND attempted regulation — DBT's skills-training target." },
    { category: "psychological", factor: "Mentalizing failure (Fonagy/Bateman)", details: "Attachment threat switches off the capacity to interpret minds — actions feel inexplicable and malevolent; MBT's target." },
    { category: "psychological", factor: "Splitting and object-relations instability (Kernberg)", details: "All-or-nothing self-and-other representations drive idealisation-devaluation — TFP's transference target." },
    { category: "psychological", factor: "Early maladaptive schemas (Young)", details: "Unconditional core beliefs ('I am bad'; 'others will abandon me') defended desperately — schema therapy's target, with limited reparenting." },
    { category: "social", factor: "Environmental mismatch (the Type R tier)", details: "For treatment-rejecting disorders, the person-environment fit — not the person — is the treatable variable: nidotherapy's systematic environmental modification." },
  ],
  symptomClusters: [
    {
      category: "1. The treatment targets (what the therapies aim at)",
      symptoms: ["Self-harm and parasuicidal behaviour — the acute tier that remits fastest and triggers referral (DBT's founding indication)", "Impulsive aggression and rage spikes — the serotonergic tier's modest target (fluoxetine's signal; topiramate's promise)", "Affective instability — minutes-to-hours reactive dysphoria, the skills-training target", "Identity diffusion and chronic emptiness — the integration therapies' (TFP, schema) long-horizon target", "Interpersonal chaos — the mentalizing and relational targets (MBT, TFP, group programmes)", "Comorbid depression, anxiety, substance use — treated alongside, priced for slower response"],
    },
    {
      category: "2. The dropout signature (the diagnosis's tax on treatment)",
      symptoms: ["Dropout is the personality disorder's signature treatment behaviour — every trial prices it (DBT 16.7% vs 50% TAU; TFP 1-in-5; group therapy's high-dropout tax)", "Missed appointments, therapy-testing behaviours, devaluation of the therapist mid-course — anticipated, supervised, survived", "The engagement phase is itself treatment: collaboration-enhancement is one of the seven shared features for exactly this reason", "Type R presentations never enter: 'no wish to be cured' is the dissocial, schizoid and paranoid baseline the services must design around"],
    },
    {
      category: "3. The iatrogenic tier (treatment's own failure modes)",
      symptoms: ["The revolving-door polypharmacy spiral: each crisis admission adds a drug, none is ever stopped — the audit's documented harm", "Long admissions fostering dependency and regression (the Cassel naturalistic warning) — hence brief, planned, crisis-short admissions", "Therapist changes re-enacting loss — the constancy principle exists because the system's churn is the patient's wound", "Prescribed-drug abuse and non-compliance in the borderline tier — the prescribing discipline's explicit caution"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The trial-logic 'diagnosis' (why PD trials are uniquely hard)",
      code: "The four methodological gates",
      criteria: [
        "Duration: change needs ≥1 year of treatment plus ≥1 year of follow-up — shorter gains may just be the comorbid mood disorder speaking.",
        "Comorbidity: pure disorders are 1-in-20 rare — apparent PD improvement may be Axis-I improvement ('state contamination' of personality measurement).",
        "Adherence: dropout is the diagnosis's signature; Type R groups never enter trials at all.",
        "Outcome measures: reoffending, symptoms and personality status each confound the others; global measures are unstandardised — and a person can 'improve' by finding an environmental niche without changing at all.",
        "Minimum evidential standard: explanatory trial in the pure disorder, then pragmatic trial, randomised, suitable control, judged after at least a year — the ready-made viva answer.",
      ],
      duration: "Years, by design — the field's honest concession to the enterprise's difficulty.",
      indianNote: "The Indian OPD's version of the same logic: the 4–8-week drug trial with a written stop-date, and the 6-month structured-therapy minimum before verdicts — the discipline that keeps the polypharmacy spiral out of the file.",
    },
    {
      system: "Type S vs Type R (the service-design 'diagnosis')",
      code: "The treatment-seeking split",
      criteria: [
        "Type S (treatment-seeking): borderline, anxious/avoidant, dependent — they arrive, they engage (chaotically), they fill the trials and the services.",
        "Type R (treatment-rejecting): antisocial, schizoid, paranoid — they refuse; services must reach them through the environment, the courts, the family, or the niche.",
        "The indication rule: nidotherapy (systematic, collaborative environmental modification — from nidus, nest) was designed for Type R.",
        "The honest boundary: 'he refuses everything' is not the end of medicine — it is the beginning of a different treatment tier.",
      ],
      duration: "Type R engagement, when it comes, arrives late and through side doors (the voluntary OPD visit that follows a fit-change).",
      indianNote: "The Indian joint family is nidotherapy's natural ally: environmental levers (role renegotiation, household structure, work fit) are real, cheap and culturally legitimate — the treatment-rejecting brother's six-month outcome rides on them.",
    },
  ],
  severityScales: [
    {
      name: "The evidence audit table",
      fullName: "Drug-by-class verdicts in one line each (the prescribing tier's staging)",
      measures: "Not a scored instrument but the cold audit that should precede every prescription in this population — each class's verdict stated as one examinable line.",
      ranges: [
        { min: 0, max: 0, severity: "Tricyclics", action: "Amitriptyline no better than placebo in BPD trials — notably unhelpful even for the depressive symptoms (the borderline 'despair' is not depressive anhedonia)" },
        { min: 1, max: 1, severity: "SSRIs", action: "Fluoxetine superior to placebo for aggression and impulsivity (fluvoxamine helped mood only) — the one clean signal" },
        { min: 2, max: 2, severity: "MAOIs", action: "Phenelzine beat haloperidol and placebo for anger and hostility — reserve for exceptional circumstances (retired from routine use)" },
        { min: 3, max: 3, severity: "Antipsychotics", action: "Haloperidol short-term benefit without continuation benefit; olanzapine across three trials showed NO core-symptom benefit (consistent weight gain); aripiprazole 15 mg/day: significant improvement on all measures with self-harm reduction in one volunteer trial, worth replication" },
        { min: 4, max: 4, severity: "Mood stabilisers/anticonvulsants", action: "Topiramate: aggression and hostility reduction (the most impressive result, needs replication); valproate and lamotrigine weaker/self-rated signals; lithium's anti-aggression evidence unsatisfactory" },
        { min: 5, max: 5, severity: "The other clusters", action: "Cluster A: NO trials exist (mistrust is intrinsic to the condition); Cluster C: evidence confounded by neurotic-disorder overlap — the honest blank rows" },
      ],
      indianNote: "Every prescription in the Indian OPD runs this audit first: one drug at a time, symptom-targeted, 4–8 weeks, written review-or-stop date — and the polypharmacy question asked at every visit (the audit's answer to the crisis-accumulation pattern).",
    },
    {
      name: "The service-model tier",
      fullName: "Three models, two management principles sets",
      measures: "The organisational staging that the master finding (the organised plan improves outcomes irrespective of intervention) makes a clinical variable.",
      ranges: [
        { min: 0, max: 0, severity: "Sole practitioner", action: "The lone-consultant model — workable for the stable tier, fragile for the crisis-prone (no cover, no consistency when the single clinician churns)" },
        { min: 1, max: 1, severity: "Divided function", action: "Responsibilities split among trained staff under a shared plan — probably best for risk and outcomes with the specialist team" },
        { min: 2, max: 2, severity: "Specialist team", action: "The dedicated PD service (England was the first country to create them) — best for the severe tier where reachable" },
        { min: 3, max: 3, severity: "The overriding principles", action: "Consistency (few key workers, good communication), constancy (avoid staff changes — therapist changes re-enact loss), adequate crisis inpatient access (brief, planned admissions beat both extremes)" },
      ],
      indianNote: "The Indian mapping: the named-consultant model delivers consistency-and-constancy in every district OPD; the crisis card substitutes for the crisis team where none exists; the medical-college liaison provides the brief-admission tier.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The wrong primary diagnosis (the management error tier)", distinguishingFeatures: "Every treatment in this course failing in sequence.", keyDifferentiator: "The hidden personality disorder behind the 'treatment-resistant depression' — the commonest management error; hunt it in emergency clinics, homeless services, heavy service users and multiple-admission patients." },
    { condition: "Untreated comorbidity (vs apparent non-response)", distinguishingFeatures: "Therapy 'failing' while the substance use runs.", keyDifferentiator: "Treat the comorbidity as its own disease — ASPD WITH depression does better in substance treatment than ASPD alone; the plan prices both." },
    { condition: "The niche improvement (vs true change)", distinguishingFeatures: "Symptom scores falling after a job change, a new relationship, a move.", keyDifferentiator: "A person can 'improve' by finding an environmental niche without changing at all — the trial-logic caveat that nidotherapy legitimises as a treatment rather than dismissing as confound." },
    { condition: "State contamination (vs true remission)", distinguishingFeatures: "Personality 'improving' as the depression lifts.", keyDifferentiator: "Re-assess personality after recovery — the overview's rule; the trial tier's duration requirement (≥1 year) exists for exactly this reason." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The evidence-backed programmes (one-line identities and trial results)",
      description: "DBT (Linehan): weekly individual therapy + group skills training (emotion regulation, distress tolerance, core mindfulness, interpersonal effectiveness) + phone consultation + therapist consultation team; first trial: fewer suicide attempts, inpatient days 8.5 vs 38.8, dropout 16.7% vs 50% — depression/hopelessness did NOT differ; benefits weaker at 1-year follow-up; context matters (not better than a 12-step programme for opioid dependence). MBT (Bateman & Fonagy): 18-month partial hospitalisation vs standard care — significant decreases in suicide attempts, self-harm, admissions, medication and depression; gains sustained at 18-month AND 5-year follow-up; cost-effective, manualised, Dutch replication favourable. TFP (Kernberg): 12-month cohort — fewer suicide attempts, less severe self-injury, fewer hospitalisations, 1-in-5 dropout; head-to-head vs DBT and supportive: no differences on most measures (TFP better on irritability/assault; improved reflective function most); vs schema therapy (88 patients, 3 years): SFT greater and more prolonged improvement and cheaper — largely explained by TFP's early dropouts. Schema-focused therapy (Young): CBT + object relations + gestalt plus limited reparenting, 2–3 sessions/week for 1–2 years — the best-evidence head-to-head winner. CAT: 24 sessions — half of 27 borderline patients no longer met criteria at 6 months. Cognitive therapy (Beck/Davidson): developmental formulation, core beliefs tested — RCT in avoidant PD favoured it over psychodynamic. MACT: 6-session self-harm package — fewer suicide acts, less depression, 46% cheaper; the N=480 replication extended cost savings but not time-to-repeat. STEPPS: 20 weekly 2-hour group sessions plus family/friends, run adjunctively — reduced impulsive and suicidal behaviour, improved depression. Group therapy (Marziali & Monroe-Blum): equivalent outcomes to individual at lower cost — the cost-effective delivery vehicle, with high dropout as the tax. Therapeutic communities (Maxwell Jones's democratic model): the Cassel step-down programme (inpatient then outreach) beat long-term inpatient care and treatment-as-usual across most measures with 5-year persistence; no RCT exists for TCs (too complex to control). Family Connections: 12-week family programme — improved relatives' burden, grief, empowerment and depression.",
      whenToUse: "Type S disorders with treatment reachable; DBT where self-harm and suicidality dominate; MBT/TFP/schema for the organisation tier; STEPPS/MACT at public-health scale; group delivery where cost forces the choice.",
      indianContext: "DBT-informed groups at NIMHANS and a few centres; CAT and schema concepts usable within generic psychotherapy training; individual structured follow-up everywhere else; tele-supervision extends reach; family psychoeducation as the highest-yield low-cost tier in a family-carried care culture.",
    },
    {
      category: "pharmacotherapy",
      name: "The honest pharmacology (the practical prescribing package)",
      description: "Organised plan of care first; consider intermittent low-dose haloperidol or aripiprazole for worsening impulsivity; a time-limited topiramate trial for anger; SSRIs for impulsivity — each as a 4–8-week trial with a clear plan to review or stop; weigh prescribing risk against benefit; polypharmacy increases risk with no evidence of benefit; ensure consent capacity especially for unlicensed use. The negative risk-benefit trio: behaviour therapy alone, tricyclics, MAOIs — retired from routine use. The APA 2001 guideline critique taught as the model: its symptom-domains (SSRIs/venlafaxine for 'affective dysregulation', SSRIs for 'impulsive-behavioural dyscontrol', low-dose neuroleptics for 'cognitive-perceptual symptoms') are pseudo-diagnoses created to justify drugs, the subgrouping has no evidence, and the tolerability argument 'applies equally well to placebo, whose tolerability and safety are unparalleled'. Effect sizes are small; publication bias and advertising-recruited volunteers inflate apparent benefit.",
      whenToUse: "Symptoms, never the personality; one drug at a time; time-limited with written stop-dates; the polypharmacy question at every visit.",
      indianContext: "The Indian prescribing-culture check: polypharmacy as the default crisis response is the documented error pattern — quote the audit verbatim in teaching. Generic SSRIs are inexpensive; topiramate and aripiprazole affordable; the real gains in the trials were reduced admissions, achievable through planned crisis pathways rather than new drugs.",
    },
    {
      category: "lifestyle",
      name: "The service wrap (treatment in its own right)",
      description: "The three models (sole practitioner, divided function, specialist team) with divided-function and specialist-team probably best for risk and outcomes; the principles that override model: consistency (few key workers, good communication — patients detect inconsistency acutely and use it defensively), constancy (avoid staff changes — therapist changes re-enact loss), adequate inpatient access during crises (the belief that PD patients should be kept out of hospital is opinion, not evidence — comorbid patients with hospital-oriented programmes did BETTER; yet long admissions risk regression, hence crisis-short planned admissions). The comorbidity warning as the standing order: hunt for the personality disorder behind every 'treatment-resistant' Axis-I presentation — in emergency psychiatric clinics, homeless-mental-illness services, heavy service users, and patients with multiple admissions.",
      whenToUse: "Continuous — the service IS part of the treatment; every plan-review asks the three questions (who is the named clinician, what happens in crisis, when is the next scheduled review).",
      indianContext: "The Indian package that captures most of the trials' demonstrated value: one named consultant (consistency + constancy in a single person), a written crisis card (Tele-MANAS 14416 + clinic numbers + first-strategies), scheduled fortnightly-to-monthly brief appointments replacing crisis-driven attendance, brief planned admissions where needed, and family psychoeducation — the package costs discipline, not money.",
    },
  ],
  safety: {
    redFlags: [
      "The 8–10% borderline suicide mortality — every gesture taken seriously, every review re-screened, the crisis card kept current",
      "Crisis admissions accumulating drugs instead of plans — the polypharmacy spiral as a safety issue in its own right (risk without benefit)",
      "Prescribed-drug abuse and non-compliance in the borderline tier — the prescribing discipline's explicit watch-point",
      "The exhausted, demoralised family — carer burden as a treatable safety variable (the Family Connections evidence)",
      "Long admissions drifting into dependency and regression — the crisis-short discipline that protects both patient and ward",
      "The treatment-rejecting patient disappearing from all services — Type R as a risk architecture, not just an engagement problem",
    ],
    urgentGuidance:
      "The order of operations in crisis: (1) treat the emergency (the overdose, the self-harm, the violence) with full protocol — never 'she is just personality'; (2) use the crisis card pathway first (helpline, named clinician, next-day review) before the emergency department wherever safe; (3) if admission is needed, brief and planned with a discharge date written at entry; (4) the medication audit at every crisis contact — one drug at a time, nothing accumulated without a named indication; (5) the family briefed as part of the safety architecture, not as visitors; (6) the suicide screen at every contact — the mortality does not relax between crises.",
  },
  drugLinks: [
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The impulsive-aggression signal (the SSRI tier's one clean route)",
      rationale: "Fluoxetine was superior to placebo for aggression and impulsivity in borderline trials (fluvoxamine helped mood only) — the serotonergic-brake biology's clinical echo; prescribed as a 4–8-week time-limited trial with a written review-or-stop plan, never as a treatment of the personality.",
      evidenceLevel: "systematic-review",
      clinicalDisclaimer: "No drug is licensed for personality disorder; the SSRI gesture is symptom-targeted and time-limited; polypharmacy increases risk with no evidence of benefit.",
    },
    {
      name: "Venlafaxine",
      slug: "venlafaxine",
      role: "The affective-symptom gesture tier",
      rationale: "The SNRI appears in the affective-dysregulation prescribing tier (the APA-guideline lineage the audit criticises) and in the cataplexy tier of sleep medicine — included for the comorbid-depression-with-impulsivity tier where an SSRI trial's logic extends; the same time-limited discipline applies.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "The symptom-domain prescribing this belongs to is precisely what the Oxford critique flags as pseudo-diagnosis — prescribe the symptom, time-limited, one at a time, with the honest evidence-tier stated.",
    },
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      role: "The negative-evidence TCA (linked because it FAILED)",
      rationale: "Amitriptyline was no better than placebo in borderline trials — notably unhelpful even for the depressive symptoms (the borderline 'despair' is not depressive anhedonia) — the tricyclic tier's retirement line and the audit's cleanest negative result; taught so the failure is not repeated.",
      evidenceLevel: "systematic-review",
      clinicalDisclaimer: "Tricyclics carry a negative risk-benefit ratio in personality disorder — retired from routine use; this link exists to document the negative evidence, not to endorse prescribing.",
    },
  ],
  contentGaps: [
    "Topiramate (the most impressive anti-aggression result in the audit, needs replication), aripiprazole (one encouraging 15 mg/day trial), olanzapine (three trials, no core-symptom benefit), lithium (unsatisfactory anti-aggression evidence), carbamazepine (impulsivity), clonazepam and the MAOI phenelzine have no KYP drug lessons — their evidence is taught here, the routes never invented.",
    "Dialectical behaviour therapy, mentalization-based treatment, transference-focused psychotherapy and schema-focused therapy have no dedicated KYP technique lessons — this course carries their architecture and evidence.",
    "Nidotherapy and therapeutic-community service models have no dedicated KYP lessons — the concepts and evidence live here.",
  ],
  patientGuide: {
    whatIsIt:
      "The treatment of a personality disorder is a structured, long-term programme — not a tablet and not a quick fix. It has three parts that work together: a talking therapy that matches your pattern (several kinds have strong evidence — your team will choose by what is available and what fits), a small amount of medicine used honestly (short courses aimed at specific symptoms like rage spikes or low mood, always with a review date), and a service structure (one named clinician, planned appointments, a written crisis plan). The single most important fact: this condition was wrongly called untreatable for decades, and the follow-up research has completely overturned that — around 88% of people with the borderline pattern recover over ten years, and most improve far sooner than that.",
    whatCausesIt:
      "The treatment targets what maintains the pattern, not what caused it: the emotional-regulation system that runs hot (skills training addresses it directly), the way relationships and self-image get filed in all-or-nothing terms (the deeper therapies work on this), the beliefs formed early that keep defending themselves, and the environments that fit the pattern badly (which can be changed even when the person does not want to change). Medicines play a small role because no chemical rewrites a personality — they treat the states inside it, briefly and specifically.",
    symptoms:
      "You will know treatment is working by its own landmarks: the crises space out first (self-harm urges drop early — that is what the research shows remits fastest), the rage and distrust take longer (months to years — priced honestly), and the work-and-relationships layer recovers slowest of all. You will know treatment is failing safely if: appointments happen only in crises, the medicine list grows at every emergency, or the clinician keeps changing — each of those is the system's failure mode, and each can be corrected by asking for the plan in writing.",
    treatment:
      "Expect a programme measured in months-to-years, not weeks: an intensive phase first (weekly sessions, possibly a group), then short bursts over a long period, with the improvement continuing even after formal therapy ends. Ask for the crisis card — one page: whom to call, which strategies first, when to go to hospital. Ask for one named clinician. Expect every medicine prescription to come with a stop-date and a review appointment. If a family programme exists, take it: relatives' burden, grief and depression measurably improve, and supporting the family IS treating the patient.",
    selfHelp: [
      "Keep the crisis card where the crisis will find it — the phone's lock screen, not a drawer.",
      "One clinician, one plan: ask directly for named-clinician continuity if the roster keeps rotating.",
      "Track your own landmarks (crises spacing out, rage softening) — the slowest layer is work and relationships, and knowing that prevents despair at month six.",
      "Take the family into the programme: their psychoeducation is the highest-yield low-cost intervention in the Indian system.",
      "If you are on multiple medicines accumulated over years, ask for the consolidation review — one at a time, each with a job you can name.",
      "The skills are like swimming: trained once, they stay — practice between sessions is where DBT's gains actually come from.",
    ],
    whenToSeekHelp: [
      "Any self-harm, overdose or suicidal thought — same-day help (Tele-MANAS 14416, free, 24×7, multiple Indian languages)",
      "Crises arriving faster than the appointments — the signal to ask for the structured (scheduled) follow-up upgrade",
      "The medicine list growing at every emergency — the polypharmacy review is due",
      "The family at exhaustion — the family programme is treatment territory, not a courtesy",
      "The clinician changing again — the constancy conversation is legitimate medical business",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — the crisis card's first number",
      "General psychiatry OPDs with the organised-plan structure — the realistic tier, and the trials say the package works",
      "DBT-informed groups at NIMHANS and a few major centres — the specialist tier where reachable",
      "Family psychoeducation through the treating team — the highest-yield low-cost tier",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific PD-treatment guideline exists; management follows the international evidence architecture (the Oxford-chapter lineage: Linehan, Bateman & Fonagy, Clarkin/Kernberg, Leichsenring's meta-analysis, the APA-2001 critique) with Indian adaptation craft: family-intensive delivery, the crisis-card-and-named-clinician structure, tele-supervision extension.",
    systemContext: "In a system with few PD specialists, the deliverable core is the organised plan: one named clinician, a written crisis card (whom to call, what to try first), scheduled follow-up rather than crisis-driven attendance, and 4–8-week time-limited drug trials with explicit review dates — this package captures most of what the trials actually demonstrate. Indian families often request admission during crises; the evidence supports brief crisis admissions with planned discharge over either blanket refusal ('she is just personality') or indefinite stays (regression and dependency).",
    programmeContext: "What is realistically available: DBT-informed groups at a few centres; individual structured follow-up everywhere else; CAT and schema concepts usable within generic psychotherapy training; nidotherapy travels well to Indian joint-family settings where environmental levers are real and cheap. Tele-MANAS 14416 carries the crisis-call tier. The natural-course data (88% 10-year remission) is the single most useful import: it justifies long-horizon structured follow-up with honest hope.",
    costConsiderations: "Generic SSRIs are inexpensive; topiramate and aripiprazole are affordable in Indian pharmacies; the real economic gains in the trials were reduced admissions — achievable in India through planned crisis pathways rather than new technology. The organised plan itself costs discipline, not money: the crisis card is a sheet of paper, the named clinician is a rostering decision, the scheduled follow-up is a diary. Family psychoeducation is the highest-yield low-cost intervention available.",
    culturalConsiderations: "The Indian prescribing culture check: polypharmacy as the default response to recurrent crises is exactly the pattern the audit condemns (no benefit, added risk, unlicensed use) — the SSRI-impulsivity and topiramate-anger evidence supports one drug at a time, briefly, reviewed. The joint family converts from crisis audience to therapeutic instrument: the Family Connections evidence (burden, grief, empowerment improve) maps onto family-carried care. Nidotherapy's environmental engineering (job changes, hostel options, family renegotiation) is culturally legitimate where individual-focused therapy meets resistance.",
    patientCounselling: [
      "The hope-with-numbers script: '88% of people with this pattern recover over ten years; the crises ease first, the anger takes longer, and the treatment is a programme, not a tablet' — the single most useful consultation in Indian PD care.",
      "The polypharmacy review offered with dignity: 'each tablet must be doing a job we can name; let us test them one at a time' — the exit from the crisis-accumulation spiral.",
      "The crisis card briefing: the household's first-response sheet — whom to call (Tele-MANAS 14416, the clinic), which strategies first, when hospital is actually needed.",
      "The family as instrument: psychoeducation converts the exhausted household into the therapeutic workforce — burden, grief and depression measurably improve.",
      "The admission conversation held before the crisis: brief, planned, discharge-dated — never the indefinite stay, never the blanket refusal.",
    ],
  },
  decisionPath: {
    title: "Building the treatment programme",
    nodes: [
      {
        id: "start",
        question: "The personality disorder is identified and the presenting illness is being treated. What is the treatment's engine?",
        branches: [
          { label: "Type S — treatment-seeking (borderline, avoidant, dependent)", next: "programme-tier" },
          { label: "Type R — treatment-rejecting (antisocial, schizoid, paranoid)", next: "nidotherapy-path" },
          { label: "Uncertain — engagement itself is the question", next: "engagement-tier" },
        ],
      },
      {
        id: "programme-tier",
        question: "Type S: which programme architecture fits?",
        branches: [
          { label: "Self-harm and suicidality dominate", next: "dbt-path" },
          { label: "Relational chaos and mentalizing failure dominate", next: "mbt-path" },
          { label: "Public-health scale / scarce therapists", next: "scale-tier" },
          { label: "Comorbid depression/anxiety driving the presentation", next: "comorbid-path" },
        ],
      },
      {
        id: "dbt-path",
        question: "The DBT architecture.",
        recommendation: "Weekly individual therapy + group skills training (emotion regulation, distress tolerance, core mindfulness, interpersonal effectiveness) + phone consultation + therapist consultation team; the founding-trial numbers quoted (inpatient days 8.5 vs 38.8; dropout 16.7% vs 50%); the honest limits (depression/hopelessness did not differ; benefits weaker at 1-year; context matters); crisis card and scheduled follow-up wrapped around it.",
      },
      {
        id: "mbt-path",
        question: "The mentalization tier.",
        recommendation: "MBT (18-month partial-hospitalisation evidence: suicide attempts, self-harm, admissions, medication and depression all reduced, gains at 5 years) where reachable; TFP for the organisation tier (transference work, 1-in-5 dropout priced); schema-focused therapy (the head-to-head winner vs TFP — greater, more prolonged, cheaper); CAT's 24-session map as the structured brief option.",
      },
      {
        id: "scale-tier",
        question: "The scale tier.",
        recommendation: "STEPPS (20 weekly 2-hour groups, adjunctive to ongoing care, family included) and MACT (6-session self-harm package, 46% cheaper) — the public-health-scale delivery of the shared architecture; group therapy (Marziali/Monroe-Blum: equivalent outcomes at lower cost) with the dropout tax managed by the engagement phase.",
      },
      {
        id: "comorbid-path",
        question: "Comorbidity driving the presentation.",
        recommendation: "Treat-together doctrine: the driver treated as its own disease (SSRI for the depression with the sleep plan riding along; the substance programme engaged in parallel); the personality plan (crisis card, named clinician, scheduled follow-up) wrapped around both; expectations priced for slower response and higher relapse — the prognostic fact the epidemiology delivers.",
      },
      {
        id: "nidotherapy-path",
        question: "Type R: the environment is the treatment.",
        recommendation: "Nidotherapy phases: boundary identification → full environmental analysis → agreed change → monitoring → target resetting; the joint family's levers (role renegotiation, household structure, work fit) as the Indian delivery; harm reduction as the honest goal; the voluntary visit that may follow a fit-change treated as the entry point force never created.",
      },
      {
        id: "engagement-tier",
        question: "Engagement is the question.",
        recommendation: "The seven shared features as the engagement manual: structure, collaboration, focus, coherence, long-term horizon, attachment, integration; the named clinician and the scheduled brief appointments; no confrontation of the pattern before the working alliance exists; dropout anticipated, survived, and treated as data — not discharge.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing a drug for the personality (or escalating polypharmacy at every crisis)",
      why: "No drug is licensed for personality disorder; polypharmacy increases risk with no evidence of benefit; the APA-2001 symptom-domains were pseudo-diagnoses created to justify drugs — the critique the field remembers.",
      correction: "The prescribing package: organised plan first; one symptom-targeted drug at a time; 4–8-week trials with written review-or-stop dates; the polypharmacy question at every visit; the negative risk-benefit trio (behaviour therapy alone, TCAs, MAOIs) retired.",
    },
    {
      mistake: "Declaring treatment failure at week six",
      why: "The trial-logic is explicit: change needs ≥1 year of treatment plus ≥1 year of follow-up; shorter gains may just be the comorbid mood disorder speaking.",
      correction: "Price the arc honestly at the start (the remission curve: crises first, temperamental symptoms last, function slowest); schedule the verdict at the year mark, not the month.",
    },
    {
      mistake: "Admitting indefinitely 'because she keeps coming back'",
      why: "Long admissions foster dependency and regression (the Cassel naturalistic warning) — the treatment's own failure mode.",
      correction: "Brief, planned, crisis-short admissions with the discharge date written at entry; the crisis card and named clinician doing the prevention work between; the belief that PD patients should be kept out of hospital is opinion, not evidence — but so is keeping them in.",
    },
    {
      mistake: "Missing the personality disorder behind the 'treatment-resistant depression'",
      why: "The commonest management error in the field: the PD is never assessed, every escalation fails, and the file grows drugs instead of a plan.",
      correction: "Hunt for it in the four settings: emergency psychiatric clinics, homeless-mental-illness services, heavy service users, multiple-admission patients; the relative-informant history is the OPD's instrument.",
    },
    {
      mistake: "Rotating clinicians and therapists by roster convenience",
      why: "Therapist changes re-enact loss — the borderline's core wound delivered by the system's own churn; patients detect inconsistency acutely and use it defensively.",
      correction: "Consistency and constancy as explicit service principles: few key workers, good communication, changes only with structured handover and transition work.",
    },
    {
      mistake: "Discharging the treatment-rejecting patient as 'not motivated'",
      why: "Type R disorders are not abandonments — the dissocial, schizoid and paranoid tiers simply need a different treatment architecture.",
      correction: "Nidotherapy: systematic, collaborative environmental modification (the joint family's levers); harm reduction as the honest goal; the voluntary visit that follows a fit-change engaged as the opening it is.",
    },
    {
      mistake: "Excluding the family to 'protect the therapy'",
      why: "The Indian family is the treatment's largest unrecruited workforce — and their exhaustion is a treatable outcome variable in its own right.",
      correction: "Family psychoeducation and the Family Connections model (burden, grief, empowerment, depression all improve); the joint family converted from interrogation suspect to therapeutic instrument.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The natural-course numbers (88%/10 years; >50%/4 years) and the fast-vs-slow remission tiers.",
        "The seven shared features of effective psychotherapies for personality disorder.",
        "DBT's structure and its first trial's three findings.",
        "The drug audit, class by class, one line each.",
        "Type S vs Type R; the three service models; consistency-constancy-crisis access.",
      ],
      practical: [
        "Design a management plan for a borderline presentation in an Indian district OPD — the organised plan written out.",
        "Audit a polypharmacy file: which drug does which named job, and which goes first.",
      ],
      longAnswer: [
        "Management of borderline personality disorder: psychotherapies, pharmacology and service design (the evergreen essay).",
        "A 25-year-old with 11 admissions in 3 years on four psychotropics: rebuild the treatment plan.",
      ],
    },
    neetPg: {
      highYield: [
        "The number pair: 88% 10-year remission (BPD) — the statistic that ended therapeutic nihilism; acute symptoms remit first, temperamental ones last.",
        "Seven shared features of effective therapies: structure, collaboration, focus, coherence, long-term, attachment, integration — the perfect list-question answer.",
        "DBT trial numbers: inpatient days 8.5 vs 38.8; dropout 16.7% vs 50% — memorise both; depression and hopelessness did NOT differ.",
        "Drug verdicts in one line each: TCAs no better than placebo; SSRIs: impulsivity/aggression yes (fluoxetine); MAOIs anger only, exceptional; haloperidol short-term only; olanzapine no core benefit; aripiprazole one good trial; topiramate the best anti-aggression signal; lithium unsatisfactory.",
        "The quote examiners love: the APA-2001 domains 'apply equally well to placebo, whose tolerability and safety are unparalleled.'",
        "Type S vs Type R and nidotherapy (nidus = nest) — short-answer gold.",
        "Three service models; divided function/specialist team best; the three principles: consistency, constancy, crisis access.",
        "Negative risk-benefit trio: behaviour therapy alone, tricyclics, MAOIs.",
        "Leichsenring & Leibing meta-analysis: psychodynamic effect size 1.46, CBT 1.00 — dynamic gains larger and longer; both effective.",
        "MBT: 18-month partial hospitalisation, gains at 5-year follow-up; SFT vs TFP (88 patients, 3 years): SFT greater, more prolonged, cheaper (largely explained by TFP's early dropouts).",
      ],
      pyqConcepts: [
        "The trial-logic of personality-disorder research (duration, comorbidity, adherence, outcome measures) as the ready-made viva answer.",
        "The comorbidity warning as the commonest management error — the four settings to hunt the hidden PD.",
        "The Indian exam corner: the EUPD management essay structure = organised plan → psychotherapy (DBT-informed where available) → time-limited targeted pharmacotherapy → family psychoeducation → crisis card; quote the polypharmacy warning.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 25-year-old woman with BPD: 11 admissions in 3 years, currently on four psychotropics (two antidepressants, an antipsychotic, a benzodiazepine) accumulated crisis by crisis — the rebuild: one consultant named as responsible clinician; medications consolidated to a single SSRI trial targeting impulsivity with a written 8-week review-and-stop plan; crisis card with Tele-MANAS and clinic numbers; scheduled fortnightly brief appointments replacing admissions as the default response; family session with the natural-course data quoted verbatim; DBT-informed group referral; the year's outcome: two brief planned admissions, no new prescriptions, the first self-reported stable month.",
        "A 34-year-old man with dissocial personality disorder refusing 'any therapy, any tablets: this is who I am', brought by exasperated parents after a third job loss — the nidotherapy architecture: renegotiating his role in the family business (structured, solitary work with clear targets), moving him out of the joint household's daily friction into a nearby rented room, coaching the parents out of the criticism-escalation cycle; six months later: no incidents, employment sustained, one voluntary visit ('to discuss the sleep problem') — the entry point force never created.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "CBT-I's insomnia cousin aside: here — DBT as the BPD answer; the 88% remission figure.",
        "The seven shared features; the negative risk-benefit trio.",
        "The drug audit's headline lines (fluoxetine yes, TCAs no, topiramate the signal).",
        "Type S vs Type R; nidotherapy; the three service models.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The convergence question every supervisor should pose: since most trials compared structured therapy with routine care, is the active ingredient the orientation or the structure? The honest answer (unknowable from these designs) reframes service design as treatment.",
        "The dropout mathematics: TFP's head-to-head loss to schema therapy is largely explained by its early dropouts — retention engineering (the engagement phase, the crisis card, the named clinician) is therefore not administrative padding but an effect-size variable.",
        "The state-contamination discipline: re-assess personality after Axis-I recovery before writing 'treatment-resistant' — the single sentence that saves years of failed escalation.",
        "The admission-policy tightrope: the evidence supports adequate crisis inpatient access (the anti-exclusion finding) AND brief-planned-discharge discipline (the anti-regression finding) — both findings are real, and the synthesis is the crisis-short admission with the date written at entry.",
        "The countertransference supervision structure is a safety system: the borderline's idealise-then-devalue of the therapist and the narcissist's devaluation arrive on schedule — anticipated, supervised, survived.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The revolving-door polypharmacy",
      presentation: "Eleven admissions in three years, four psychotropics on the chart, and not one of them ever stopped.",
      initialPresentation: "A 25-year-old woman with borderline personality disorder presented for review having accumulated 11 admissions over 3 years, currently on four psychotropics — two antidepressants, an antipsychotic and a benzodiazepine — each added during a crisis admission and none ever discontinued. The pattern was mechanical: every crisis added a drug; every drug added a review never held; the admissions grew more frequent as the file grew thicker.",
      history: "Diagnosis of EUPD at 21 after self-harm escalation; comorbid depressive episodes treated in parallel; no psychotic episodes; substance use intermittent (alcohol at crises); family exhausted and requesting 'permanent admission'; two prior therapists left (one relocated, one 'could not manage her') — the constancy wound delivered twice by the system.",
      examination: "Mental state: dysphoric, guarded about the new appointment ('another doctor who will leave'); self-harm scars of vintages; actively suicidal ideation with one gesture in the last month (the crisis that prompted this review); the medication list recited fluently with doses and dates — the patient as the file's best historian.",
      diagnosis: "Borderline personality disorder with comorbid depressive episodes, iatrogenic polypharmacy, and a crisis-driven service pattern.",
      management: "The rebuild: one consultant named as responsible clinician (consistency and constancy in a single decision); medications consolidated to a single SSRI trial targeting impulsivity with a written 8-week review-and-stop plan (the polypharmacy reversal, explained as an upgrade not a punishment); crisis card with Tele-MANAS 14416 and clinic numbers; scheduled fortnightly brief appointments replacing admissions as the default response; family session explaining the diagnosis as treatable with the natural-course data quoted verbatim (88% remission over 10 years); referral to the hospital's weekly DBT-informed skills group.",
      outcome: "Over the next year: two brief admissions (both under 7 days, planned discharge), no new prescriptions, the first self-reported 'stable month' in three years; the benzodiazepine taper completed without crisis escalation; attendance at 9 of 12 scheduled reviews; the family's request for permanent admission withdrawn after the psychoeducation session.",
      teachingPoints: [
        "The admission-medication spiral is the illness's iatrogenic shadow — the organised plan is the active ingredient that reverses it.",
        "Polypharmacy reversal needs dignity and a written plan: 'each tablet must be doing a job we can name' is the exit script.",
        "Hope with numbers is a clinical tool: the 88% figure, quoted verbatim, changes family behaviour in one session.",
      ],
    },
    {
      title: "The treatment-rejecting brother",
      presentation: "'No therapy, no tablets — this is who I am.' The treatment found him anyway, through the environment.",
      initialPresentation: "A 34-year-old man with dissocial personality disorder was brought by exasperated parents after his third job loss; he refused 'any therapy, any tablets: this is who I am'. The family's presenting complaints were his temper at home, the job losses, and the daily friction of the joint household; his own account was minimal, contemptuous of the process, and explicit in its refusal.",
      history: "Conduct problems from mid-teens; three jobs lost to conflicts with authority (each 'their fault, their system'); no self-harm, no current substances of dependence; one driving-related police case settled; parents' account: 'he was always like this — but it is getting worse as we all get older'; no Axis-I episodes on careful review.",
      examination: "Alert, dismissive, superficially cooperative for the parents' sake; no depressive or psychotic features; explicit and consistent refusal of all treatment offers across two interviews; the engagement finding itself diagnostic — a Type R presentation.",
      diagnosis: "Dissocial personality disorder, treatment-rejecting (Type R).",
      management: "Nidotherapy architecture instead of insistence: renegotiating his role in the family business (structured, solitary work with clear targets that did not require supervision of others); moving him out of the joint household's daily friction into a nearby rented room paid by his earnings; coaching the parents out of the criticism-escalation cycle (the environmental analysis and agreed-change phases); monitoring visits framed as 'family reviews' he was free to skip — and did, twice.",
      outcome: "Six months: no incidents, employment sustained, the parents' burden scores halved on informal review; one voluntary OPD visit ('to discuss the sleep problem') — the first healthcare engagement he had initiated in a decade, treated as the opening it was.",
      teachingPoints: [
        "Treatment-rejecting disorders are not abandonments: environmental engineering is a legitimate, evidence-tinged strategy (nidotherapy, nidus = nest).",
        "The joint family is nidotherapy's natural ally — its environmental levers are real, cheap and culturally legitimate in India.",
        "The voluntary visit that follows a fit-change is the entry point that force never created — engage it as the beginning of Type S care, not the end of the case.",
      ],
    },
  ],
  clinicalPearls: [
    "88% of borderline patients remit over 10 years — the statistic that ended therapeutic nihilism; acute symptoms (self-harm) remit first, temperamental ones (anger, distrust) last, function slowest.",
    "Seven shared features of effective therapies: structure, collaboration, focus, coherence, long-term, attachment, integration — possibly more decisive than the brand.",
    "DBT's founding trial: inpatient days 8.5 vs 38.8, dropout 16.7% vs 50% — and depression/hopelessness did NOT differ.",
    "No drug is licensed for personality disorder; fluoxetine's aggression-impulsivity signal is the one clean route; topiramate the best anti-aggression promise (needs replication); aripiprazole one good trial; olanzapine no core benefit.",
    "The negative risk-benefit trio: behaviour therapy alone, tricyclics, MAOIs — retired.",
    "The APA-2001 critique as the model of scepticism: symptom-domains are pseudo-diagnoses; 'placebo, whose tolerability and safety are unparalleled'.",
    "MBT: 18-month partial hospitalisation with gains at 5 years; SFT beat TFP (greater, more prolonged, cheaper — largely TFP's early dropouts).",
    "Type S (borderline, avoidant, dependent) seeks treatment; Type R (antisocial, schizoid, paranoid) rejects it — nidotherapy was designed for the R group.",
    "Service: divided-function or specialist-team best; consistency, constancy, crisis access override model choice.",
    "The commonest management error: missing the PD behind the Axis-I presentation — hunt it in emergency clinics, homeless services, heavy users, multiple admissions.",
  ],
  highYieldSummary: [
    "Natural course: 88% 10-year borderline remission (Zanarini/McLean); >50% at 4 years (CLPS); Stone's 66% over 20 years (possibly impeded by older treatments); acute symptoms remit first, temperamental last, psychosocial function slowest; improvement continues after therapy ends.",
    "The evidence-backed programmes: DBT (individual + group skills + phone + consultation team; the founding-trial numbers), MBT (18-month partial hospitalisation, 5-year sustained gains, Dutch replication), TFP (transference work; reflective-function gains), schema-focused therapy (the head-to-head winner vs TFP), CAT (24 sessions, half remit at 6 months), cognitive therapy (avoidant RCT winner), STEPPS (20 adjunctive group weeks), MACT (6 sessions, 46% cheaper), group therapy (equivalent at lower cost), therapeutic communities (Cassel step-down evidence, no RCT possible), Family Connections (relatives' burden and depression improve).",
    "Meta-analysis tier: Leichsenring & Leibing — psychodynamic 1.46, CBT 1.00; dynamic gains larger and longer; Roth & Fonagy's audit: only DBT and psychodynamic treatments qualify as evidence-based.",
    "Pharmacology audit: no licensed drug; fluoxetine for aggression/impulsivity (fluvoxamine mood only); topiramate the best anti-aggression signal; aripiprazole 15 mg one encouraging trial; olanzapine no core benefit; haloperidol short-term only; valproate/lamotrigine weak; lithium unsatisfactory; phenelzine anger-only, exceptional use; TCAs no better than placebo; Cluster A no trials, Cluster C confounded; polypharmacy = risk without benefit.",
    "The prescribing discipline: organised plan first; one drug at a time; 4–8-week trials with written review-or-stop; consent capacity for unlicensed use; the APA-2001 symptom-domain critique as the model of evidence-based scepticism.",
    "Service design: three models (sole practitioner, divided function, specialist team) with the latter two probably best for risk and outcomes; principles: consistency (few key workers, communication), constancy (no churn — therapist changes re-enact loss), crisis access (brief planned admissions; exclusion is opinion not evidence; long stays regress).",
    "Type S vs Type R: borderline/avoidant/dependent seek; antisocial/schizoid/paranoid reject; nidotherapy (boundary identification → environmental analysis → agreed change → monitoring → resetting) for the R group — early evidence mainly cost-savings; the Indian joint family as nidotherapy's ally.",
    "The Indian package: named clinician, written crisis card (Tele-MANAS 14416 first), scheduled follow-up, 4–8-week trials, polypharmacy reversal, family psychoeducation, brief planned admissions — costs discipline not money; captures most of what the trials demonstrate.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pd-tx-quiz-1",
      question: "Over 10 years, approximately what proportion of borderline patients achieve 2-year remission?",
      options: ["25%", "50%", "88%", "100%"],
      correctIndex: 2,
      explanation: "The McLean Study data overturned the 'lifelong' assumption — though temperamental symptoms (anger, distrust) lag behind the acute ones (self-harm).",
      afterSectionId: "mechanism",
    },
    {
      id: "pd-tx-quiz-2",
      question: "The set of features shared by ALL psychotherapies found effective for personality disorder:",
      options: ["Brief, focal, manual-light, therapist-neutral", "Well-structured, collaborative, clearly focused, theoretically coherent, relatively long-term, attachment-promoting, integrated with services", "Strictly inpatient, purely behavioural, single-therapist", "Unstructured, patient-led, crisis-driven"],
      correctIndex: 1,
      explanation: "The seven shared features — possibly more decisive than the therapy brand, since most trials compared structured treatment with routine care.",
      afterSectionId: "management",
    },
    {
      id: "pd-tx-quiz-3",
      question: "In the first DBT randomised trial versus treatment-as-usual, DBT patients showed:",
      options: ["More suicide attempts and more inpatient days", "Fewer suicide attempts, fewer inpatient days (8.5 vs 38.8), less dropout (16.7% vs 50%)", "No differences on any behavioural measure", "Improvement in depression and hopelessness only"],
      correctIndex: 1,
      explanation: "The behavioural and service-utilisation outcomes drove DBT's adoption; notably, depression and hopelessness did not differ.",
      afterSectionId: "management",
    },
    {
      id: "pd-tx-quiz-4",
      question: "The Oxford chapters' verdict on the APA 2001 guideline's pharmacotherapy symptom-domains:",
      options: ["Well-validated BPD subtypes", "Proven in large independent trials", "Pseudo-diagnoses created to justify particular drugs — and the tolerability argument applies equally to placebo", "Should be adopted universally"],
      correctIndex: 2,
      explanation: "The critique is a model of evidence-based scepticism: the subgroups were constructed to match available drugs, not observed in nature.",
      afterSectionId: "management",
    },
    {
      id: "pd-tx-quiz-5",
      question: "A patient with dissocial personality disorder refuses all psychotherapy and medication. The strategy developed for precisely this situation:",
      options: ["Force admission to a therapeutic community", "Nidotherapy: systematic collaborative modification of the environment to fit the person", "Long-term benzodiazepines for anger", "Behaviour therapy alone"],
      correctIndex: 1,
      explanation: "Nidotherapy targets person-environment fit for treatment-rejecting (Type R) disorders; benzodiazepines invite disinhibition and behaviour therapy alone carries negative risk-benefit.",
      afterSectionId: "decision-path",
    },
    {
      id: "pd-tx-quiz-6",
      question: "The three management principles for personality-disorder services:",
      options: ["Polypharmacy, long admission, rotating staff", "Consistency, constancy of personnel, adequate crisis inpatient access", "Crisis-only contact, single-drug policy, no family involvement", "Specialist-only care, no crisis beds, annual review"],
      correctIndex: 1,
      explanation: "The organised plan (consistency, constancy, crisis access) improves outcomes irrespective of the specific intervention; the opposites are documented management errors.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the seven shared features of effective personality-disorder therapies.", answer: "(1) Well-structured; (2) devoted effort to enhancing collaboration; (3) a clear focus; (4) theoretical coherence for both therapist and patient; (5) relatively long-term; (6) a powerful attachment relationship between therapist and patient; (7) good integration with other services. The honest note: since most trials compared structured therapy with routine care, it is impossible to know whether outcomes come from the orientation or the structure — either way, the treatment package IS the treatment.", topic: "Psychotherapy" },
    { question: "Quote the natural-course numbers and which symptom classes remit fast vs slowly.", answer: "88% of borderline patients remit over 10 years (2-year remission criterion, McLean/Zanarini); over 4 years in the CLPS, more than half remitted (12 months at two or fewer criteria). Fast: the acute tier — parasuicide, self-injury (precisely what triggers referral). Slow: the temperamental tier — anger, distrust, abandonment concerns, emotional instability. Slowest: psychosocial functioning, which trails symptom remission by years. Stone's classic 66% took 20 years — four times modern cohorts, raising the possibility that older treatments impeded natural recovery.", topic: "Natural course" },
    { question: "Draw the DBT structure (four components) and its first trial's three findings.", answer: "Components: (1) weekly individual psychotherapy (behavioural functional analysis); (2) weekly group psychoeducational skills training — emotion regulation, distress tolerance, core mindfulness, interpersonal effectiveness; (3) telephone consultation; (4) therapist consultation team. First trial (44 chronically parasuicidal women): control patients attempted suicide more, spent more days inpatient (38.8 vs 8.5) and dropped out more (50% vs 16.7%); at 1 year benefits were weaker on follow-up, and depression and hopelessness did not differ.", topic: "Psychotherapy" },
    { question: "Name the MBT, TFP and SFT one-line identities and their key trial results.", answer: "MBT (Bateman & Fonagy): psychodynamic therapy rebuilding mentalizing — 18-month partial-hospitalisation RCT with significant decreases in suicide attempts, self-harm, admissions, medication and depression, sustained at 18-month and 5-year follow-up, cost-effective with a favourable Dutch replication. TFP (Clarkin/Kernberg): here-and-now transference confrontation of defences — 12-month cohort with fewer suicide attempts and hospitalisations but 1-in-5 dropout; head-to-head vs DBT/supportive mostly no differences (better on irritability and assault; most reflective-function gain). SFT (Young/Giesen-Buerman): CBT + object relations + gestalt with limited reparenting — vs TFP (88 patients, 3 years): greater and more prolonged improvement, cheaper, largely explained by TFP's early dropouts.", topic: "Psychotherapy" },
    { question: "Which three treatments have negative risk-benefit ratios, and which guideline was criticised for pseudo-diagnosis?", answer: "The negative trio: behaviour therapy alone, tricyclic antidepressants and MAOIs (phenelzine's anger-only, exceptional-use evidence notwithstanding). The criticised guideline: APA 2001's Practice Guideline for BPD — its symptom-domain prescribing (SSRIs/venlafaxine for 'affective dysregulation', SSRIs for 'impulsive-behavioural dyscontrol', low-dose neuroleptics for 'cognitive-perceptual symptoms') was condemned as pseudo-diagnoses created to justify drugs, with subgroups having no evidence, and the tolerability-and-safety argument 'applying equally well to placebo, whose tolerability and safety are unparalleled'.", topic: "Pharmacology" },
    { question: "Give the drug-by-class verdict table.", answer: "TCAs: amitriptyline no better than placebo (even for the depressive symptoms). SSRIs: fluoxetine superior for aggression and impulsivity; fluvoxamine mood-only. MAOIs: phenelzine beat haloperidol and placebo for anger/hostility — exceptional use. Antipsychotics: haloperidol short-term without continuation benefit; olanzapine no core benefit across three trials (weight gain consistent); aripiprazole 15 mg/day one encouraging volunteer trial with self-harm reduction. Mood stabilisers: topiramate the most impressive aggression/hostility result (needs replication); valproate and lamotrigine weak/self-rated; lithium unsatisfactory. Cluster A: no trials exist; Cluster C: confounded by neurotic-disorder overlap.", topic: "Pharmacology" },
    { question: "What are Type S and Type R disorders, and which therapy was designed for the R group?", answer: "Type S (treatment-seeking): borderline, anxious/avoidant and dependent PDs — they present, engage and fill the trials. Type R (treatment-rejecting): antisocial, schizoid and paranoid PDs — they refuse; most trials study borderline inpatients and pure disorders are 1-in-20 rare. Nidotherapy (from nidus, nest) was designed for Type R: systematic, collaborative modification of the environment to fit the person — boundary identification, full environmental analysis, agreed change, monitoring, target resetting; randomised evidence so far mainly cost-savings through reduced hospitalisation.", topic: "Service design" },
    { question: "State the three service models, the two best for risk, and the three management principles.", answer: "Models: sole practitioner; divided function (responsibilities split among trained staff); specialist team (dedicated PD service — England the first country to create them). Best for risk and outcomes: divided function and specialist-team models. The overriding principles: consistency (few key workers, good communication — patients detect inconsistency acutely and use it defensively), constancy (avoid staff changes — therapist changes re-enact loss), and adequate inpatient access during crises (the keep-them-out belief is opinion, not evidence; yet long admissions risk regression — hence crisis-short planned admissions). Plus the standing order: hunt the hidden PD in emergency clinics, homeless services, heavy users and multiple admissions.", topic: "Service design" },
  ],
  faqs: [
    { question: "Can personality disorder really be treated?", answer: "Yes: follow-up studies show most people with borderline PD stop meeting criteria within years, and structured psychotherapies accelerate that. What treatment cannot promise is a different temperament; the aim is a life that works with the personality you have." },
    { question: "Which therapy is the best?", answer: "Honest answer: no single winner. DBT has the strongest evidence for self-harm; MBT and TFP show sustained dynamic gains; schema therapy beat TFP in one trial; and all effective programmes share the same seven structural features. Choose by availability, fit and the therapist's competence — and organise the care around whichever you choose." },
    { question: "Will medicine fix it?", answer: "Medicines treat states within the disorder — impulsivity (the SSRI tier), anger (topiramate's signal, perhaps lithium), worsening perceptual symptoms (low-dose antipsychotics) — for defined trials of 4–8 weeks. No drug is licensed for personality disorder, and combinations add risk without benefit." },
    { question: "Why did the doctor stop my three tablets?", answer: "Because the evidence says polypharmacy in personality disorder increases risk with no demonstrated benefit. Each drug that stays must be doing a job you can name and review — the consolidation is an upgrade, not a punishment." },
    { question: "How long will treatment take?", answer: "Months-to-years, not weeks — and the follow-up research shows improvement continues even after therapy ends. A realistic arc: an intensive phase first, then short bursts of treatment over a long period." },
    { question: "Should she be admitted when she cuts herself?", answer: "Brief, planned admissions for genuine crisis, yes; long admissions, no — they risk dependency and regression. A crisis card and a named clinician are what prevent the revolving door, not locked doors." },
    { question: "He refuses all treatment. Now what?", answer: "Then change what can be changed: the environment (nidotherapy logic). A better person-environment fit reduces harm even when the person stays the same — and sometimes opens the door to voluntary care later." },
    { question: "Our whole family is exhausted.", answer: "That exhaustion is treatable territory: family programmes demonstrably reduce burden, grief and depression in relatives. Supporting the family IS treating the patient." },
    { question: "The doctor keeps quoting an 88% figure. What is it?", answer: "The ten-year follow-up of patients with borderline personality disorder: 88% no longer met the diagnosis at the decade mark. It is the single most important number in this field — the reason 'nothing can be done' is no longer an honest sentence." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "APA (2001) Practice Guideline for Borderline Personality Disorder — and the Oxford chapters' critique (the pseudo-diagnosis analysis)" },
      { source: "NICE guidance lineage for personality disorder (the structured-treatment and service-design framing) (2009 onward)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.6 + 4.12.7 — source chapters mapped; content rewritten (2009)" },
      { source: "Roth A & Fonagy P (2005) — What Works for Whom? (the independent audit: only DBT and psychodynamic treatments evidence-based)" },
    ],
    trials: [
      { source: "Linehan M et al. — the original DBT randomised trial (44 chronically parasuicidal women)" },
      { source: "Bateman A & Fonagy P — MBT 18-month partial-hospitalisation RCT and 5-year follow-up" },
      { source: "Clarkin J, Kernberg OF et al. — TFP cohort and the TFP/DBT/supportive comparison; Giesen-Buerman trial — schema-focused therapy vs TFP (88 patients, 3 years)" },
      { source: "Zanarini MC et al. (2006) — McLean Study of Adult Development: the 88% 10-year remission; Skodol AE et al. — CLPS 4-year remission" },
    ],
    reviews: [
      { source: "Leichsenring F & Leibing E (2003) — psychodynamic vs CBT meta-analysis (effect sizes 1.46 vs 1.00; Am J Psychiatry 160:1223–32)" },
      { source: "Perry JC et al. (1999) — the first psychotherapy-for-PD meta-analysis; Stone MH (1990) — the 66%/20-year fate of borderline patients" },
      { source: "Tyrer P & Bateman A — nidotherapy concept and trial; Chiesa M et al. — Cassel Hospital step-down programmes (72-month follow-up)" },
      { source: "Davidson K et al. — cognitive therapy RCT in avoidant PD; France/Venning-tier MACT and STEPPS trial programmes; Marziali E & Monroe-Blum H — relationship-management group outcomes" },
      { source: "Indian tier — NMHS 2015–16 framing; NIMHANS DBT-informed programme reports; Tele-MANAS 14416; Indian pharmacy-dispensing and polypharmacy practice (the prescribing-culture check)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The crisis card — the one-page instrument this course hands to every patient and family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the programme that works, the honest role of medicines, the Indian help map.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The remission data, the therapy armamentarium, the drug audit, the service principles.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — the trial-logic craft, the countertransference architecture, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The remission revolution, the therapy armamentarium, the honest audit.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can quote the 88% figure, the seven shared features and the negative risk-benefit trio cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "What the therapies target: dysregulation, mentalizing, splitting, schemas, self-states — and why structure treats.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain each therapy's mechanism model and the convergence argument." },
    { number: 3, title: "Clinical Practice", description: "The programmes with their evidence, the prescribing package, the service wrap.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can write the Indian organised plan and the 4–8-week trial discipline from memory." },
    { number: 4, title: "Indian Context", description: "The costs-discipline package, the family instrument, the admission tightrope, the treatment-rejecting tier.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can rebuild the revolving-door case and deliver the hope-with-numbers script." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the DBT-trial and drug-audit questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.6 + 4.12.7 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Linehan M et al. — the original DBT randomised trial (44 chronically parasuicidal women; 8.5 vs 38.8 inpatient days; 16.7% vs 50% dropout)", sourceType: "trial", year: "1991 onward", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Bateman A & Fonagy P — MBT 18-month partial-hospitalisation RCT, 18-month and 5-year follow-up, Dutch replication", sourceType: "trial", year: "1999–2008", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Clarkin JF, Kernberg OF et al. — TFP cohort and the TFP/DBT/supportive comparison; Giesen-Buerman trial — schema-focused therapy vs TFP (88 patients, 3 years)", sourceType: "trial", year: "2004–2007", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Zanarini MC et al. (2006) — McLean Study of Adult Development (88% 10-year remission); Skodol AE et al. — CLPS 4-year remission; Stone MH (1990) — the 66%/20-year follow-up", sourceType: "primary", year: "1990–2006", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Leichsenring F & Leibing E (2003) — psychodynamic and CBT meta-analysis (Am J Psychiatry 160:1223–32); Perry JC et al. (1999) — the first PD-psychotherapy meta-analysis", sourceType: "meta-analysis", year: "1999/2003", dateReviewed: "2026-09-28" },
    { id: "S7", source: "APA (2001) — Practice Guideline for Borderline Personality Disorder (the symptom-domain architecture and its critique)", sourceType: "guideline", year: "2001", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Tyrer P & Bateman A — nidotherapy concept and trial; Chiesa M et al. — Cassel Hospital step-down vs long-term programmes (72-month follow-up)", sourceType: "review", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Davidson K et al. — cognitive therapy RCT in avoidant PD; MACT and STEPPS trial programmes; Marziali E & Monroe-Blum H — relationship-management group outcomes; Family Connections evaluation", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Fluoxetine/fluvoxamine borderline trials, phenelzine vs haloperidol, olanzapine's three trials, aripiprazole 15 mg trial, topiramate aggression trials — the pharmacological audit synthesised in the Oxford chapters", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Roth A & Fonagy P (2005) — What Works for Whom? (the independent audit: only DBT and psychodynamic treatments evidence-based)", sourceType: "review", year: "2005", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Indian tier — NMHS 2015–16 framing; NIMHANS DBT-informed programmes; Tele-MANAS 14416; Indian polypharmacy and pharmacy-dispensing practice as the prescribing-culture check", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Natural course: 88% of borderline patients remit over 10 years; more than half remit over 4 years (CLPS); acute symptoms (parasuicide, self-injury) remit fastest, temperamental symptoms (anger, distrust) resolve slowly, psychosocial function slowest; Stone's 66% took 20 years.", grade: "established", sources: ["S5"] },
    { text: "The seven shared features of effective therapies (structure, collaboration, focus, coherence, long-term, attachment, service integration) — and the honest convergence note that most trials compared structured therapy with routine care, so the structure may be the active ingredient.", grade: "established", sources: ["S1", "S11"] },
    { text: "DBT's founding trial: fewer suicide attempts, inpatient days 8.5 vs 38.8 and dropout 16.7% vs 50% against treatment-as-usual; depression and hopelessness did not differ; benefits weaker at 1 year; replications context-dependent (not superior to a 12-step programme for opioid dependence; UK TAU equivalence; the Bohus inpatient adaptation reduced self-harm with higher dropout).", grade: "established", sources: ["S2"] },
    { text: "MBT: significant decreases in suicide attempts, self-harm, admissions, medication and depression versus standard care, sustained at 18-month and 5-year follow-up, cost-effective with a favourable independent Dutch replication.", grade: "established", sources: ["S3"] },
    { text: "TFP: fewer suicide attempts and hospitalisations with 1-in-5 dropout; head-to-head vs DBT and supportive therapy mostly equivalent (better irritability/assault; most reflective-function gain); schema-focused therapy vs TFP: greater, more prolonged and cheaper improvement, largely explained by TFP's early dropouts.", grade: "established", sources: ["S4"] },
    { text: "Meta-analytic tier: psychodynamic therapy effect size 1.46, CBT 1.00 — dynamic gains larger and longer-lasting, both effective; the independent audit concluded only DBT and psychodynamic treatments qualify as evidence-based.", grade: "established", sources: ["S6", "S11"] },
    { text: "The pharmacology audit: no drug licensed for personality disorder; fluoxetine superior to placebo for aggression and impulsivity (fluvoxamine mood-only); amitriptyline no better than placebo; phenelzine anger-only (exceptional use); haloperidol short-term only; olanzapine no core-symptom benefit across three trials; aripiprazole 15 mg one encouraging trial; topiramate the best anti-aggression signal (needs replication); lithium unsatisfactory; Cluster A no trials, Cluster C confounded.", grade: "established", sources: ["S10", "S1"] },
    { text: "The APA 2001 guideline critique: its symptom-domains are pseudo-diagnoses created to justify drugs, the subgrouping lacks evidence, and the tolerability argument applies equally well to placebo — the model of evidence-based scepticism; polypharmacy increases risk with no evidence of benefit.", grade: "established", sources: ["S7", "S1"] },
    { text: "The negative risk-benefit trio: behaviour therapy alone, tricyclics and MAOIs — retired from routine use.", grade: "established", sources: ["S1"] },
    { text: "Service design: divided-function and specialist-team models probably best for risk and outcomes; the principles — consistency, constancy, adequate crisis inpatient access (brief planned admissions; exclusion is opinion not evidence; long stays risk regression) — override model choice; the organised plan improves outcomes irrespective of the specific intervention.", grade: "established", sources: ["S1", "S8"] },
    { text: "Type S vs Type R: borderline/avoidant/dependent seek treatment; antisocial/schizoid/paranoid reject it; nidotherapy (systematic collaborative environmental modification) was designed for Type R, with randomised evidence so far mainly cost-savings through reduced hospitalisation.", grade: "supported", sources: ["S8", "S1"] },
    { text: "Public-health-scale tier: MACT (6 sessions, fewer suicide acts, 46% cheaper; the N=480 replication extended cost savings but not time-to-repeat); STEPPS (20 adjunctive group weeks, reduced impulsive/suicidal behaviour); group therapy equivalent to individual at lower cost with high dropout as the tax; therapeutic communities (Cassel step-down beat long-term inpatient care and TAU, gains persisting 5 years; no RCT possible).", grade: "established", sources: ["S9", "S8"] },
    { text: "The Indian translation: the organised plan (named clinician, crisis card, scheduled follow-up, 4–8-week time-limited trials, polypharmacy reversal, family psychoeducation) captures most of the trials' demonstrated value at discipline-cost not money-cost; family programmes map onto family-carried care.", grade: "supported", sources: ["S12", "S1"] },
  ],
};
