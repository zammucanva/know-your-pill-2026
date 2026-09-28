import type { PsychiatryCourse } from "./types";

/**
 * PERSONALITY DISORDERS — THE CONCEPT, THE CLUSTERS, THE NUMBERS —
 * canonical Psychiatry course (migration batch 5, Group J —
 * personality disorders, part 1 of 3).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/personality-disorders-overview.md — untouched
 * foundation), re-researched against current guidance (DSM-5-TR and
 * ICD-11 dimensional-reform lineage, the twelve-survey epidemiology,
 * Zanarini's remission cohorts, Tyrer's stigma critique, NMHS/NIMHANS
 * Indian framing) with per-claim provenance.
 *
 * Drug routes: NONE — no drug treats a personality disorder as such;
 * the honest pharmacology lives in the treatment course
 * (personality-disorder-treatment) and is recorded as a content
 * pointer, never invented here.
 */
export const personalityDisordersOverviewCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "personality-disorders-overview",
  title: "Personality Disorders — The Concept, the Clusters, the Numbers",
  shortName: "PD Overview",
  kind: "disorder",
  category: "Personality Disorder",
  groupLetter: "J",
  groupName: "Personality disorders",
  learningPath: ["Psychiatry", "Personality Disorders", "Overview & Classification"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Deeply ingrained, inflexible patterns of perceiving, feeling and relating that begin early, persist across situations and cause distress or impairment — the diagnoses psychiatry spent two centuries arguing were 'bad character', and now treats with organised, evidence-backed programmes.",
  summary:
    "Personality disorder is the diagnosis that asks the oldest question in psychiatry — bad or mad? — and this course answers it with the field's modern verdict: a real, treatable clinical domain. The definition is architectural, not symptomatic: an enduring pattern of inner experience and behaviour deviating markedly from cultural expectations, visible in at least two of four domains (cognition, affectivity, interpersonal functioning, impulse control), inflexible and pervasive, beginning by adolescence or early adulthood, stable over time, and causing distress or impairment — to the person, or to the people around them. Because the pattern feels like 'who I am' (ego-syntonic), patients present with consequences (crises, relationship breakdown, depression, self-harm), never with the pattern itself; because the same person looks normal at work and disordered at home, assessment needs multiple informants and settings. The classification is a live battlefield: the categorical system (ten named types in three clusters — odd/eccentric, dramatic/erratic, anxious/fearful) coexists uneasily with dimensional evidence that disordered personalities are extremes of normal trait variation, and both DSM-5 Section III and ICD-11 have now moved to dimensional hybrids. The epidemiology is the course's quiet bombshell: roughly a tenth of the community, up to half of psychiatric outpatients, and majorities of prisoners carry a personality disorder — which changes the prognosis of every other mental disorder the patient carries. The Indian reality: EUPD terminology on the case notes, borderline presentations relabelled as 'rapid-cycling bipolar', and the accompanying relative in every OPD queue as the most under-used assessment instrument in the country.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define personality (temperament + character) and personality disorder in DSM/ICD logic, in your own words — four domains, three duration/pervasiveness requirements.",
    "Trace the historical line from Pinel's manie sans délire and Prichard's moral insanity to Cleckley's mask of sanity — and state why the 'bad or mad' question still shapes forensic psychiatry.",
    "List the three DSM clusters with their members and nicknames (odd, dramatic, anxious), and map ICD-10 terminology onto them: anankastic, dissocial, anxious, emotionally unstable.",
    "Quote the prevalence cascade: ~10–13% community, ~50% of psychiatric patients, 57% of substance services, antisocial PD in 47% of prisoners.",
    "Explain the categorical-vs-dimensional debate with evidence on each side, and the pragmatic synthesis: categories decide who gets care, dimensions describe what will help.",
    "Describe the stability paradox (follow-up remission findings vs the 'enduring' definition) and its implication for when to assess personality.",
    "Explain the diathesis-stress view of personality disorder as vulnerability factor rather than episode.",
    "Recognise why personality status must be assessed in every major psychiatric presentation — and how to use the Indian OPD's accompanying relatives as informants.",
  ],
  quickFacts: [
    { label: "The definition", value: "4 domains, ≥2 involved", detail: "Cognition, affectivity, interpersonal functioning, impulse control — plus inflexible, pervasive, early-onset, stable, distress/impairment; the whole definition fits in one breath and examiners ask for every clause" },
    { label: "The clusters", value: "A odd · B dramatic · C anxious", detail: "A 'Mad' (paranoid, schizoid, schizotypal); B 'Bad' (antisocial, borderline, histrionic, narcissistic); C 'Sad' (avoidant, dependent, obsessive-compulsive) — remember the nicknames in quotes: the data contradicts several of them" },
    { label: "The community figure", value: "~10–13%", detail: "Twelve major surveys converge; the commonest specific type is obsessive-compulsive PD (2%) — and histrionic PD shows identical rates in men and women, contradicting its stereotype" },
    { label: "The setting gradient", value: "Clinics ~50% · prisons 47% ASPD", detail: "Half of psychiatric outpatients carry a PD (57% in substance services); a 13,844-prisoner meta-analysis found antisocial PD in 47% — the epidemiology that powers both forensic services and stigma" },
    { label: "Ego-syntonicity", value: "The presentation trap", detail: "The pattern feels like 'who I am', not an illness — patients present with consequences (crises, depression, self-harm, family breakdown), never with the pattern itself" },
    { label: "The stability paradox", value: "Less enduring than defined", detail: "Significant proportions no longer meet criteria at retest — some measured features are state-like (mood-driven); the definition says years, follow-up says 'reassess after recovery'" },
    { label: "The reform movement", value: "DSM-5 III + ICD-11 dimensional", detail: "ICD-11 abolished named categories for a severity axis + five trait domains (negative affectivity, detachment, dissociality, disinhibition, anankastia); DSM-5 keeps clusters in Section II, the alternative model in Section III" },
    { label: "The Indian trap", value: "Relabelling", detail: "Borderline presentations become 'rapid-cycling bipolar' or 'treatment-resistant depression'; dissocial becomes 'pure substance use'; the mislabel sends the patient down a pharmacological cul-de-sac" },
  ],
  knowledgeGraph: [
    { label: "Specific Personality Disorder Types", type: "condition", href: "/psychiatry/personality-disorder-types/", note: "The ten types cluster by cluster — the clinical texture this overview's architecture organises" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "The 88% remission data, the seven shared features of effective therapies, and the honest drug audit" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The differential the Indian OPD gets wrong most — mood episodes vs minutes-to-hours reactivity" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The most common co-passenger — PD status predicts its course and treatment response" },
    { label: "Schizoaffective & Schizotypal Disorders", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "The Cluster A border with the psychosis spectrum — ICD-10 places schizotypal in the schizophrenia group" },
    { label: "Impulse Control Disorders", type: "condition", href: "/psychiatry/impulse-control-disorders/", note: "The impulsivity borderland — serotonergic brakes shared with Cluster B engines" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Personality disorder is not a lesion but a configuration — the mechanism tier therefore explains how enduring styles are BUILT and how they destabilise other illnesses. The construction story: innate temperament (about 40% of normal trait variation is heritable) develops through experience into a trait hierarchy; at the extremes, configurations act as diatheses — vulnerabilities that convert environmental stress into overt disorder rather than episodes of illness themselves. The biological anchors are dimensional: Eysenck's arousal systems and Cloninger's monoamine-linked temperament dimensions (novelty-seeking, harm-avoidance, reward-dependence) root the traits in measurable systems, and the same four-ish factors (Livesley's emotional dysregulation, dissocial behaviour, inhibitedness, compulsivity — or the classic 'four As': asthenic, antisocial, asocial, anankastic) emerge in clinical and normal samples alike, the strongest single argument that disordered personalities differ quantitatively, not categorically. The stress-physiology tier is borderline-specific and teachable: impulsive-suicidal borderline patients show high basal cortisol with blunted response to new stress — a chronically stressed system that has lost adaptive range, the human mirror of low-rank baboons in Sapolsky's studies. The diathesis story explains the course findings: early onset, setting-dependent expression and ego-syntonic acceptance all fit a vulnerability architecture better than an episode model — and the follow-up finding that many stop meeting criteria over years fits too, because a diathesis under one environment can remit under another. The organic boundary completes the tier: brain injury, chronic pain and catastrophic events can ALTER personality (organic personality change, classified separately) — the same clinical respect, a different mechanism.",
    steps: [
      "Innate temperament (about 40% heritable) provides the raw trait dials; infant temperament tracks into adult adjustment (the New York Longitudinal Study; Kagan's high-reactive infants become subdued, anxious adolescents).",
      "Experience writes the character layer — learned habits, the modifiable part — on top of temperament.",
      "At the extremes of the trait distribution, configurations act as diatheses: vulnerabilities converting stress into disorder, not episodic illness themselves.",
      "The neurobiological anchors are dimensional (Eysenck's arousal systems; Cloninger's monoamine-linked temperament) — and the same four-ish factors emerge in clinical and normal samples.",
      "Stress physiology consolidates the risk tier: high basal cortisol with blunted challenge response in impulsive-suicidal borderline patients — a system that has lost adaptive range.",
      "Early adversity and trauma load the Cluster B and C configurations (elaborated in the types course).",
      "The environment operates on the diathesis across the whole arc — which is why configurations remit, migrate and re-emerge, and why the organic personality-change boundary is drawn separately.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "trait-arousal-systems", name: "Ascending arousal systems", role: "The dimensional tier's anchor: Eysenck's trait theory roots extraversion and neuroticism in arousal regulation — the machinery whose extreme settings the trait dials represent.", grade: "proposed" },
    { id: "hpa-axis", name: "HPA axis (the stress thermostat)", role: "The borderline stress-physiology tier: high basal cortisol with blunted challenge response — the chronically-stressed-system signature that has lost adaptive range.", grade: "supported" },
    { id: "monoamine-temperament", name: "Monoamine temperament systems", role: "Cloninger's mapping: novelty-seeking (dopaminergic), harm-avoidance (serotonergic), reward-dependence (noradrenergic) — the trait dials' chemistry, elaborated in the types course.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The anxiety/harm-avoidance dial and the impulsive-aggression link (low CSF 5-HIAA) — the system the types and treatment courses develop.", grade: "supported", drugConnection: "The SSRI-impulsivity evidence (see the fluoxetine lesson and the treatment course) is the clinical echo." },
    { name: "Dopamine", symbol: "DA", role: "The novelty-seeking dial of the temperament model — the approach-drive tier the Cluster B engine runs hot on.", grade: "proposed" },
    { name: "Oxytocin & vasopressin", symbol: "OT/AVP", role: "The affiliation systems — attachment and bonding machinery whose variation underwrites the interpersonal trait tier (the prairie-vole story in the types course).", grade: "proposed" },
  ],
  pathways: [
    {
      id: "pd-diathesis",
      name: "The diathesis cascade",
      steps: [
        { label: "Temperament loads the dials", detail: "Heritable trait variation (about 40%) sets the starting positions" },
        { label: "Experience writes character", detail: "Early adversity, attachment and culture tune the hierarchy — the modifiable layer" },
        { label: "The extreme configuration becomes a diathesis", detail: "A vulnerability that converts environmental stress into disorder — not an episode, a way of being" },
        { label: "Stress expresses it", detail: "Job loss, rejection, family rupture — the precipitants that reveal the pattern's inflexibility" },
      ],
      clinicalManifestation: "The early-onset, all-situations pattern that presents through its consequences — crises, relationship breakdown, comorbid episodes — never as 'my personality is disordered'.",
      grade: "supported",
    },
    {
      id: "pd-comorbidity-engine",
      name: "The comorbidity engine",
      steps: [
        { label: "The trait configuration meets an Axis-I trigger", detail: "Depressive episodes, anxiety states, substance use — the stresses the diathesis amplifies" },
        { label: "The disorder expresses through the personality", detail: "The borderline's depression arrives with rage and self-harm; the anankastic's arrives with doubt and work-paralysis" },
        { label: "The personality changes the treatment course", detail: "Slower response, higher relapse, more crises — the prognostic fact every plan must price in" },
        { label: "Effective Axis-I treatment can dissolve apparent personality pathology", detail: "The state contamination lesson: re-assess personality after recovery, not only during illness" },
      ],
      clinicalManifestation: "'Treatment-resistant depression' that was PD-with-depression all along — the relabelling the Indian OPD performs daily.",
      grade: "supported",
    },
    {
      id: "pd-dimensional-architecture",
      name: "Why the classification went dimensional",
      steps: [
        { label: "The same factors emerge everywhere", detail: "Four-ish dimensions in clinical AND normal samples — people with PDs differ quantitatively" },
        { label: "But surprises cut the other way", detail: "Abnormal traits appear LESS heritable than normal ones; PD prevalence exceeds what extreme normal traits alone predict" },
        { label: "The pragmatic synthesis", detail: "Categories decide who gets care (thresholds, services, forensics); dimensions describe what the person is like and what will help" },
        { label: "The reform movements landed", detail: "ICD-11: severity axis + five trait domains; DSM-5 Section III: impairment level + trait facets — the direction the Oxford chapters predicted" },
      ],
      clinicalManifestation: "The hybrid a clinician actually uses: 'moderate personality disorder with dominant dissociality and disinhibition' — severity for services, traits for the plan.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "pd-history", time: "1809–1941", title: "From manie sans délire to the mask of sanity", description: "Pinel describes judgement-intact madness (the man in the well); Prichard names 'moral insanity'; Morel adds degeneration; Cleckley argues the psychopath's maladaptation hides behind a 'mask of sanity' — the lineage of every modern concept.", phase: "onset" },
    { id: "pd-schneider", time: "1950–1971", title: "The two shelves", description: "Schneider splits pathology into brain-disease psychoses (top shelf) and 'variations of the psychic way of being' (bottom) — neurobiology ignores the bottom shelf, psychoanalysis inherits it, and the dualism the Oxford chapters later declare dead ('two aspects of every disorder, not two kinds') is born.", phase: "onset" },
    { id: "pd-dsm-iii", time: "1980–1994", title: "The categorical era", description: "DSM-III creates Axis II so personality is never forgotten; DSM-III-R changes 100+ criteria (schizoid diagnoses rose ~800% — definitions, not epidemics); DSM-IV turns conservative, demotes sadistic/self-defeating/passive-aggressive, adds PD-NOS.", phase: "peak" },
    { id: "pd-remission-era", time: "2006 onward", title: "The prognosis reversal", description: "Zanarini's McLean cohorts and the CLPS deliver the stability paradox — 88% of borderline patients remit over 10 years — and the 'lifelong, intractable' assumption collapses into organised-treatment optimism (the treatment course's foundation).", phase: "recovery" },
    { id: "pd-reform", time: "2013–2022", title: "The dimensional landing", description: "DSM-5's Section III alternative model and ICD-11's severity-plus-trait-domains system make the dimensional reform official — exactly the direction the Oxford epidemiology predicted from the stability findings.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Twelve major surveys (US, UK, Germany, Norway; ~6,800 subjects) converge on any-PD community prevalence of 10–13% (13.4% in the Norwegian national register; 14.3% including mixed/NOS in a US sample). Specific-type medians: obsessive-compulsive highest at 2.0%, then histrionic 1.8%, passive-aggressive 1.7%, paranoid 1.6%, borderline 1.6%, antisocial 1.5%, avoidant 1.3%, schizoid 0.8%, dependent 0.9%, narcissistic 0.2%, schizotypal 0.7%. Setting gradient: about half of psychiatric patients (51% 'any' sample; 57% substance services; 49% affective; 40% anxiety); primary care 5–8% rising to ~24% when systematically assessed; prisons 78% male remand, 64% male sentenced, 50% female (UK), with antisocial PD in 47% of a 13,844-prisoner meta-analysis.",
    indianPrevalence: "No comparable national community surveys exist — the honest statement. Indian clinical experience: personality disorder diagnoses are UNDER-RECORDED relative to true presence; borderline presentations get relabelled as 'bipolar' or 'depression with anger issues' (the consequential diagnostic drift); Cluster B dominates admissions through self-harm and family crisis; Cluster C surfaces in matrimonial, occupational and somatic clinics; dissocial PD surfaces in forensic settings. NMHS 2015–16 provides the mental-health framing, not PD-specific epidemiology.",
    lifetimeRisk: "The stability paradox governs: significant proportions stop meeting criteria over 6-month to multi-year retest — 'stable' describes years, not a life sentence; with organised treatment the remission curves steepen (the treatment course's 88% figure).",
    genderRatio: "Antisocial PD substantially commoner in men (2:1 to 7:1), younger adults, urban and lower socio-economic tiers; borderline peaks at ages 19–34 and declines with age, commoner in women in clinical series; histrionic shows IDENTICAL rates in men and women (Nestadt's ECA data) — the stereotype's direct contradiction.",
    ageOfOnset: "By adolescence or early adulthood by definition; schizoid apparent from early childhood; Cluster B presentations dominate the 18–35 clinical tier; the diagnosis becomes rarer as first presentation after 40.",
    indianNotes: "The epidemiology's practical message travels intact: assess personality specifically in every major psychiatric presentation because it predicts course and treatment outcome — and in Indian OPDs the accompanying relative is the informant instrument (the PAS logic) that makes the longitudinal assessment possible in one sitting.",
  },
  etiology: [
    { category: "biological", factor: "Heritability of trait variation", details: "About 40% of normal personality variation is genetic (openness most, conscientiousness least); abnormal trait dimensions show heritable components too (Livesley's four-factor structure shows genetic structure)." },
    { category: "biological", factor: "Temperament foundations", details: "Infant temperament tracks into adult adjustment (New York Longitudinal Study); Kagan's highly reactive infants become subdued, anxious adolescents — the early-life signature of the trait dials." },
    { category: "biological", factor: "Stress physiology", details: "Borderline patients with impulsive suicidal behaviour: high basal cortisol with blunted response to new stress — a chronically stressed system that has lost adaptive range." },
    { category: "psychological", factor: "The character layer", details: "Learned habits shaped by experience — the modifiable part of personality, and the tier every effective psychotherapy targets." },
    { category: "social", factor: "Early adversity", details: "Childhood trauma and adversity contribute to Cluster B and C configurations (the types course carries the full gene-environment tier, including MAO-A × abuse)." },
    { category: "social", factor: "The diathesis-stress frame", details: "Broad innate temperament develops into a trait hierarchy whose extremes act as diatheses — vulnerabilities converting environmental stress into overt disorder; early onset, setting-dependence and ego-syntonicity all fit." },
    { category: "biological", factor: "Organic change (the boundary)", details: "Brain injury, chronic pain ('algogenic psychosyndrome') and catastrophic events can alter personality — organic personality change, classified separately from the developmental disorders, managed with the same respect." },
  ],
  symptomClusters: [
    {
      category: "1. The definition's four domains (where the pattern lives)",
      symptoms: ["Cognition — how the world is interpreted (the paranoid's hidden insults, the borderline's all-or-nothing files)", "Affectivity — range, intensity, lability and appropriateness of emotion (the dramatic tier's currency)", "Interpersonal functioning — the relationship engine (idealise-devalue, dependency, exploitation, withdrawal)", "Impulse control — the brake tier (self-harm, spending, substance misuse, the antisocial signature) — at least TWO domains must be involved for any PD diagnosis"],
    },
    {
      category: "2. The ego-syntonic presentation (why nobody self-refers)",
      symptoms: ["The pattern feels like 'who I am', not an illness that happened — patients present with consequences, never the pattern", "Crises, relationship breakdown, depression, self-harm, family exhaustion — the doors the personality arrives through", "The family's phrasing: 'he has always been like this' — the longitudinal evidence arrives by relative, not by complaint", "The 'difficult patient' label in any chart is a diagnostic prompt, not a disposition (Tyrer's 'delusional attitude' of doctors is the historical shadow)"],
    },
    {
      category: "3. The setting-dependence (why one interview misses it)",
      symptoms: ["The same person normal at work and disordered at home, or vice versa — context gates the expression", "Assessment needs multiple informants and settings; the PAS uses informants deliberately", "Never diagnose from behaviour during a single episode; never during an acute illness state if avoidable — state effects contaminate trait measurement", "Primary-care PD rates rise several-fold when assessed independent of the presenting complaint — partly through state effects the unstructured clinic misses"],
    },
    {
      category: "4. The comorbidity signature (what travels with it)",
      symptoms: ["Substance use disorders (57% of those patients carry a PD — bidirectional risk)", "Affective and anxiety disorders (49% and 40% respectively) — slower response, higher relapse when PD co-travels", "Eating disorders: restricting anorexia with Cluster C pathology; bulimia with borderline-type pathology", "HIV-positive status with high PD rates — the risk-behaviour tier every screen owes"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 (Section II)",
      code: "General personality disorder (the gating definition)",
      criteria: [
        "An enduring pattern of inner experience and behaviour deviating markedly from cultural expectations, manifest in at least two of: cognition, affectivity, interpersonal functioning, impulse control.",
        "Inflexible and pervasive across a broad range of personal and social situations.",
        "Onset by adolescence or early adulthood; stable over time.",
        "Significant distress or impairment — to the person, or (the awkward, honest clause) to the people around them.",
        "Not better explained by another mental disorder, substance, or medical condition — and never diagnosable from a single episode's behaviour.",
      ],
      duration: "Enduring by definition — but the stability paradox holds: follow-up studies show significant proportions no longer meet criteria at retest, and today's 'trait' may partly be this month's depression talking.",
      indianNote: "The Indian interview runs on the relative-informant: 'How has he been with people since youth? Before the marriage? At his last job?' The longitudinal pattern emerges faster from collateral than from the patient. Cultural caution works both directions: deference, joint-family decision-making and arranged-marriage adjustment are normative — diagnose only what is markedly beyond the culture's average, and never let cultural cover hide genuine, distressing disorder.",
    },
    {
      system: "ICD-11 (the reform)",
      code: "Personality disorder, severity + trait domains (6D10+)",
      criteria: [
        "Severity graded: personality difficulty → mild → moderate → severe — the axis that decides service allocation.",
        "Trait domains qualified: negative affectivity, detachment, dissociality, disinhibition, anankastia — the dimensional description that decides what will help.",
        "The named categories are GONE (borderline survives only as a 'borderline pattern' qualifier) — the system the Oxford stability findings predicted.",
        "DSM-5's parallel move: Section III's alternative model (impairment level + pathological trait facets) — the two systems land on the same hybrid.",
      ],
      duration: "Same endurance logic, explicit remission framing.",
      indianNote: "Indian case notes historically run ICD-10: 'dissocial', 'emotionally unstable personality disorder (EUPD)' with impulsive and borderline subtypes — the translation table examiners expect. ICD-11's arrival in Indian teaching hospitals makes the severity-plus-domains language the new exam currency.",
    },
  ],
  severityScales: [
    {
      name: "ICD-11 severity axis",
      fullName: "Personality disorder severity grading (ICD-11 6D10 scheme)",
      measures: "The modern system's staging instrument: severity decides who needs which service tier, independent of the trait-domain description that guides the therapy.",
      ranges: [
        { min: 0, max: 0, severity: "Personality difficulty", action: "Sub-threshold pattern; watchful framing inside the treatment of the presenting illness — no PD service required" },
        { min: 1, max: 1, severity: "Mild personality disorder", action: "General psychiatry with structured follow-up; psychotherapy by availability; the organised-plan tier" },
        { min: 2, max: 2, severity: "Moderate personality disorder", action: "The borderline-type default: structured psychotherapy programme, crisis plan, time-limited symptom-targeted pharmacology" },
        { min: 3, max: 3, severity: "Severe personality disorder", action: "Specialist team territory: dedicated programme, inpatient crisis access, forensic coordination where risk lives in the disorder" },
      ],
      indianNote: "The pragmatic tier-mapping for a system with scarce dedicated services: mild → the named-consultant organised plan; moderate → add DBT-informed group where reachable (NIMHANS and a few centres); severe → medical-college referral with crisis-card architecture.",
    },
    {
      name: "The instrument tier (named, not reproduced)",
      fullName: "IPDE, PDQ-4, MCMI-III, PAS, SWAP — the assessment armoury",
      measures: "Semi-structured interviews (IPDE — ICD and DSM, ~537 items, very long; DIPD; SIDP), self-report screens (PDQ-4, 99 items; MCMI-III, 175 items, widely used), dimensional measures (DAPP-BQ, SNAP, NEO PI-R), informant-based (PAS) and clinician-prototype (SWAP) methods.",
      ranges: [
        { min: 0, max: 0, severity: "The categorical verdict", action: "Agreement between instruments on categorical diagnoses is at best modest; most patients land in the 'NOS remainder bin'; dimensional scores are MORE reliable than categories — the chapter's honest verdict" },
        { min: 1, max: 1, severity: "The dimensional description", action: "DAPP-BQ/SNAP/NEO profiles describe what the person is like and what will help — the tier the reform movements formalised" },
        { min: 2, max: 2, severity: "The informant layer", action: "PAS logic: informants (the Indian OPD's accompanying relative) supply the longitudinal evidence the patient cannot — 'how has he been across his whole life?'" },
        { min: 3, max: 3, severity: "The prototype layer", action: "SWAP Q-sorts by a clinician who knows the patient — the craft tier beyond the checklist" },
      ],
      indianNote: "Instruments are research-and-registration tier in India; the clinical workhorse is the longitudinal multi-source history — structured interview discipline applied to the OPD's relative-informant reality.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Axis-I episode (depressive, manic, psychotic)", distinguishingFeatures: "Episodic, dated, contrasting with the premorbid self.", keyDifferentiator: "The longitudinal question: was the person 'like this' before the episode, across situations, since youth? Never type a PD during an acute illness state." },
    { condition: "Organic personality change", distinguishingFeatures: "Post-injury, post-stroke, chronic-pain ('algogenic psychosyndrome'), dementing.", keyDifferentiator: "The CHANGE point: a documented premorbid personality that shifted — classified separately, treated with the same structure." },
    { condition: "Bipolar spectrum (the Indian relabelling)", distinguishingFeatures: "Sustained episodes with true elation, decreased sleep need, goal-directed hyperactivity.", keyDifferentiator: "Borderline reactivity runs minutes-to-hours, dysphoria-to-anger, triggered by interpersonal rejection — the treatment course's first discrimination drill." },
    { condition: "Substance use disorder", distinguishingFeatures: "The pharmacology's own personality signature.", keyDifferentiator: "What was the person like sober, before, since youth? — dissocial PD plus substance use is BOTH, each changing the other's prognosis." },
    { condition: "Culturally normative patterns", distinguishingFeatures: "Deference, joint-family decision-making, arranged-marriage adjustment, religious observance.", keyDifferentiator: "Diagnose only deviation markedly beyond the culture's average — the Oxford rule that protects Indian families from pathologised normalcy, and the clinic from cultural cover hiding genuine disorder." },
    { condition: "Intellectual disability / autism-spectrum trait tiers", distinguishingFeatures: "Developmental social-communication differences.", keyDifferentiator: "The trajectory and the content: lifelong developmental difference vs an acquired, reactive interpersonal style; the types course's schizoid-vs-autism line is the exam echo." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Stigma removal — the first treatment target",
      description: "The diagnosis historically implied 'intractable', and the implication withheld care: Tyrer called doctors' attitude toward these patients a 'delusional attitude'. The modern evidence (88% borderline remission over 10 years; organised programmes outperforming routine care — the treatment course's core) makes destigmatised, structured treatment the first prescription.",
      whenToUse: "At the moment of diagnosis — the formulation delivered as 'a long-standing pattern of reacting that can be treated and managed', not a character verdict.",
      indianContext: "The marriage-alliance and employment consequences of the label make the Indian delivery doubly careful: diagnostic honesty in the file, destigmatising explanation to the family, and the working phrase 'a pattern of reacting, treatable over time'.",
    },
    {
      category: "psychotherapy",
      name: "Treat the presenting illness first — but differently",
      description: "Because PD status predicts the treatment response and course of every Axis-I disorder it travels with, the adjustment is to expectations, intensity and planning — not to the diagnosis. Slower response, higher relapse, more crises: priced into the plan from day one.",
      whenToUse: "Every comorbid presentation — the epidemiology's practical message (up to half of the co-passengers carry the same complication).",
      indianContext: "The Indian OPD version: the relative-informant history taken BEFORE the third antidepressant escalation; 'antidepressant failures' in this context usually mean the wrong primary diagnosis.",
    },
    {
      category: "pharmacotherapy",
      name: "The spectrum principle (the pointer tier)",
      description: "Configurations lying on spectra of major disorders may respond to corresponding treatments: avoidant-type patterns to anxiolytic-treated anxiety; borderline-type to mood-stabilising/antidepressant strategies; schizotypal to antipsychotics; impulse-control failure to serotonergic drugs. The honest evidence audit and the prescribing discipline (no licensed drug; 4–8-week time-limited trials; polypharmacy increases risk with no benefit) live in the treatment course.",
      whenToUse: "Symptom-targeted, time-limited, one-drug-at-a-time — never 'a drug for the personality'.",
      indianContext: "The Indian prescribing-culture check the treatment course delivers: polypharmacy as the default crisis response is the documented error pattern the organised plan replaces.",
    },
    {
      category: "lifestyle",
      name: "Re-assess after recovery (the state-contamination rule)",
      description: "Effective treatment of a comorbid Axis-I disorder can dissolve apparent personality pathology — one reason personality should be re-assessed after recovery, not only during illness. The stability paradox is assessment wisdom, not licence to dismiss.",
      whenToUse: "At every post-recovery review; the diagnostic gate for the longitudinal formulation.",
      indianContext: "The follow-up culture of Indian psychiatry (families return; records persist) makes the re-assessment window genuinely available — the discipline is the scheduling.",
    },
  ],
  safety: {
    redFlags: [
      "Self-harm and overdoses in the context of interpersonal crisis — the Cluster B emergency pattern that needs a crisis plan, not just empathy",
      "The 8–10% lifetime suicide mortality of borderline PD — every gesture taken seriously, every review re-screened",
      "Comorbid substance use amplifying both risk and the diagnostic confusion",
      "Domestic and occupational conflict escalating toward forensic thresholds — the dissocial tier's risk function linkage (the DSPD logic: severe disorder, significant risk, risk functionally linked)",
      "The exhausted family — carer burden is a treatable territory in its own right (the Family Connections evidence in the treatment course)",
    ],
    urgentGuidance:
      "The order of operations: (1) treat the presenting emergency (the overdose, the crisis, the depressive episode) with full protocol; (2) take the longitudinal history from relatives before diagnostic escalation — the relabelling trap strikes exactly here; (3) build the crisis card (whom to call, which strategies first) and the named-clinician structure that the treatment course's evidence supports; (4) screen suicide risk at every contact — the mortality is real; (5) never deliver the diagnosis as a verdict: the destigmatising formulation IS the first intervention.",
  },
  drugLinks: [],
  contentGaps: [
    "No drug is licensed for personality disorder as such — the honest pharmacology (SSRI-impulsivity, topiramate-anger, aripiprazole's one good trial) lives in the treatment course; topiramate, aripiprazole, olanzapine and lithium have no KYP drug lessons yet (recorded, never invented).",
    "The ICD-11 severity-and-trait-domain system has no dedicated KYP lesson on its coding architecture — this course carries the conceptual tier only.",
    "Dedicated PD service design (the three models, the consistency-constancy-crisis principles) is taught in the treatment course; no separate service-design lesson exists.",
  ],
  patientGuide: {
    whatIsIt:
      "A personality disorder is a long-standing, inflexible way of experiencing and relating — to people, emotions, decisions and impulses — that began early, shows up across most areas of life, and causes real distress or impairment: to the person, or to the family around them. It is NOT bad character, NOT a choice, and NOT untreatable — it is a recognised mental disorder with biological underpinnings, treatable with structured, consistent care. Because the pattern feels like 'who I am' rather than an illness, people usually arrive at the clinic through its consequences — repeated crises, relationship breakdown, depression, self-harm — rather than through the pattern itself.",
    whatCausesIt:
      "A combination: about 40% of trait variation is genetic (the temperament you arrived with), early experiences write the character layer on top, and at the extremes of the trait dials these configurations act as vulnerabilities — ways of being that turn ordinary stress into disorder. Early adversity raises the risk for the dramatic and anxious clusters; a stressed physiology runs underneath the impulsive tier. Nothing about it is anyone's 'fault' — and nothing about it is fixed: follow-up studies show a substantial proportion of people stop meeting criteria within years, especially with treatment.",
    symptoms:
      "The pattern shows in at least two of four territories: how the world is interpreted (suspiciousness, all-or-nothing views of people), how emotion works (intensity, lability, flatness), how relationships run (idealise-then-devalue, dependency, withdrawal, exploitation) and how impulses are handled (self-harm, spending, substances). The family's key observation — 'he/she has always been like this, since youth, everywhere' — is the diagnostic spine. Look for the doors it arrives through: repeated crises, stormy relationships, depression that responds slowly, self-harm, exhaustion at home or at work.",
    treatment:
      "The treatment that works is organised, structured, consistent care built around psychotherapy — delivered as a programme (a named clinician, planned follow-up, a written crisis plan), with medication playing a small, honest, symptom-targeted role in short trials. Modern follow-up data overturned the old 'lifelong' assumption: the majority of people with the borderline pattern recover over years. The treatment course in this series carries the full detail — the therapies with trial evidence, the honest drug audit, and the service design that is itself part of the treatment.",
    selfHelp: [
      "Bring one trusted family member to appointments — their 'how has he/she been across the whole life?' history is genuinely diagnostic material.",
      "Ask for the plan in writing: who is the named clinician, what happens in a crisis, which strategies first — structure itself treats.",
      "Track the pattern, not just the moods: situations that repeat, reactions that cost — the map the therapy will use.",
      "Expect improvement on a months-to-years arc, not weeks — and know the follow-up research says improvement continues even after formal treatment ends.",
      "If substances are involved, say so plainly — the combination changes both prognoses and both treatments.",
      "The family's exhaustion is treatable territory: ask about family psychoeducation — supporting the family IS treating the patient.",
    ],
    whenToSeekHelp: [
      "Repeated self-harm, overdoses, or suicidal thoughts — same-day help (Tele-MANAS 14416, free, 24×7, multiple Indian languages)",
      "Relationship or job patterns destroying the same life-area again and again — the longitudinal signal",
      "Depression or anxiety that keeps 'failing' treatment — the hidden-PD question worth asking directly",
      "Family exhaustion at breaking point — the carer tier's entry point",
      "Any crisis with violence or forensic contact — the tier where structured care and the system's risk machinery must meet",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "General psychiatry OPDs with the organised-plan structure — the realistic Indian tier, and it works (the treatment course's evidence)",
      "DBT-informed groups at NIMHANS and a few major centres — the specialist tier where reachable",
      "Medical-college psychiatry departments for crisis-structured referral",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific personality-disorder guideline exists; Indian psychiatry officially runs ICD terminology — historically ICD-10's 'dissocial', 'emotionally unstable personality disorder (EUPD, impulsive/borderline subtypes)', 'anankastic', 'anxious' — with ICD-11's severity-plus-trait-domains system the new teaching-hospital currency. Management follows the international evidence architecture (the treatment course) with Indian adaptation craft: family-intensive delivery, the relative-informant assessment, structured general-psychiatry follow-up.",
    systemContext: "The Indian presenting drama runs through relabelling: borderline presentations become 'rapid-cycling bipolar' or 'treatment-resistant depression' on the file; dissocial becomes 'pure substance use'; Cluster C surfaces in matrimonial, occupational and somatic clinics. Cluster B dominates admissions through self-harm and family crisis; each mislabel sends the patient down a pharmacological cul-de-sac — polypharmacy escalating crisis by crisis (the treatment course's revolving-door case). The OPD's accompanying relative is the systematic instrument the system has not noticed it has.",
    programmeContext: "Dedicated PD programmes are rare — NIMHANS and a few centres run DBT-informed groups; most patients are managed by general psychiatrists in mixed OPDs, which is workable because the core management is structured, consistent, long-horizon care, not exotic technology. Tele-MANAS 14416 provides the crisis-call tier. The NMHS 2015–16 supplies the mental-health framing, not PD-specific epidemiology (no national community data exists — the honest statement).",
    costConsiderations: "Management is primarily psychological and behavioural; generic SSRIs are inexpensive where symptom-targeted trials are indicated (the treatment course's honest tier). The real economic burden sits in repeated crises — emergency visits, admissions, self-harm episodes — that a structured management plan (crisis card, named clinician, planned follow-up) demonstrably reduces; the highest-yield Indian upgrade costs nothing but discipline.",
    culturalConsiderations: "Cultural relativity is a diagnostic duty: deference to elders, joint-family decision-making, arranged-marriage adjustment and religious observance can look 'dependent' or 'anankastic' to a checklist — the Oxford rule (diagnose only the marked deviation beyond the culture's average) protects normal Indian patterns while blocking cultural cover for genuine disorder. The marriage-alliance economy makes the diagnostic label a life-altering disclosure: the ethical practice is honesty in the file with a destigmatising working explanation to the family ('a pattern of reacting, treatable over time' — never 'a character defect').",
    patientCounselling: [
      "The relabelling check delivered at the third failed antidepressant: 'has anyone drawn the whole-life pattern, from your family, since youth?' — the question that catches the mislabel.",
      "The relative as informant: their 'always been like this' history is not gossip; it is the longitudinal evidence the diagnosis runs on.",
      "The destigmatising formulation verbatim: 'a long-standing pattern of reacting that can be treated and managed' — the sentence that keeps the family engaged and the marriage-market consequences contained.",
      "The cultural-average rule for families worried by the label: deference and devotion are normative; disorder is the marked, impairing, distressing deviation — and both truths are respected in the same consultation.",
      "The exhaustion briefing: family burden is measurable and treatable — psychoeducation improves outcomes for the patient AND the household.",
    ],
  },
  decisionPath: {
    title: "The personality-disorder assessment",
    nodes: [
      {
        id: "start",
        question: "A patient presents — through crisis, depression, self-harm or family exhaustion — and the pattern-of-a-life question has been raised. What is the evidence base?",
        branches: [
          { label: "Consequences only (this episode's behaviour)", next: "longitudinal-gate" },
          { label: "Multi-source pattern since youth, across situations", next: "acute-state-gate" },
          { label: "Documented premorbid personality that CHANGED", next: "organic-path" },
        ],
      },
      {
        id: "longitudinal-gate",
        question: "The behaviour is new, episodic or situation-locked — a single interview's evidence.",
        branches: [
          { label: "Acute illness state present (depression, psychosis, mania)", next: "defer-typing" },
          { label: "Substance-driven or situational only", next: "treat-driver" },
        ],
      },
      {
        id: "acute-state-gate",
        question: "The longitudinal pattern is documented. Is the current state contaminating the trait measurement?",
        branches: [
          { label: "Yes — acute episode dominates", next: "defer-typing" },
          { label: "No — euthymic/stable window", next: "formulate" },
        ],
      },
      {
        id: "defer-typing",
        question: "Defer definitive typing.",
        recommendation: "Treat the presenting illness with full protocol; take the relative-informant history now (the Indian OPD's instrument); schedule the personality assessment for the recovered window; record 'personality assessment deferred — state contamination' so the question survives the episode.",
      },
      {
        id: "formulate",
        question: "Formulate — not just label.",
        recommendation: "Record the personality formulation: which traits, how severe (ICD-11 axis), what functioning level, what risk pattern, and what it predicts for treating the presenting illness. Screen the comorbidity set (substance, affective, anxiety, eating). Deliver the destigmatising diagnosis; build the crisis card and named-clinician structure; route to the treatment course's programme architecture.",
      },
      {
        id: "organic-path",
        question: "Personality CHANGE, not developmental pattern.",
        recommendation: "Organic personality change (post-injury, post-stroke, chronic pain, dementing): separate classification, same clinical respect — treat the driver where treatable, apply the same structured-management principles, and coordinate with neurology/medicine as the primary tier.",
      },
      {
        id: "treat-driver",
        question: "Substance- or situation-locked behaviour.",
        recommendation: "Treat the driver (the substance programme, the situation); re-assess personality sober and settled — dissocial PD plus substance use is both, each changing the other's prognosis, and the longitudinal history is the fork that separates them.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing a personality disorder from a single episode's behaviour",
      why: "Behaviour has many causes; state effects (mood, intoxication, crisis) contaminate trait measurement — the definition demands pervasiveness, early onset and stability.",
      correction: "The longitudinal gate: multi-source history, informant interview, records; defer typing during acute states and re-assess in the recovered window.",
    },
    {
      mistake: "Relabelling borderline presentations as 'rapid-cycling bipolar' or 'treatment-resistant depression'",
      why: "The commonest real-world Indian error: reactive, minutes-to-hours mood shifts with self-harm get a mood-disorder file, and the pharmacological escalation that follows keeps failing.",
      correction: "The discrimination drill (the types course's table): bipolar runs sustained episodes with true elation and decreased sleep need; borderline reactivity runs dysphoria-to-anger within a day, triggered by rejection — and the relative's history settles it.",
    },
    {
      mistake: "Treating the comorbid disorder as if the personality were irrelevant",
      why: "PD status predicts slower response, higher relapse and more crises in every Axis-I disorder it travels with — the plan that ignores it is priced wrong.",
      correction: "Adjust expectations, intensity and follow-up structure at diagnosis; the formulation (traits, severity, risk, prognosis-impact) goes in the file beside the episode treatment.",
    },
    {
      mistake: "Delivering the diagnosis as a character verdict — or withholding it to 'protect' the family",
      why: "The historical 'intractable' implication withheld care (Tyrer's 'delusional attitude'); the marriage-market secrecy tier breeds its own damage.",
      correction: "Diagnostic honesty in the file with the destigmatising formulation to the family: 'a long-standing pattern of reacting, treatable over time' — and the natural-course data quoted as hope with numbers.",
    },
    {
      mistake: "Pathologising culturally normative Indian patterns (or hiding behind them)",
      why: "Checklist criteria applied without cultural calibration brand normal deference, joint-family dependency and devotion as 'disorder'; the opposite error lets genuine distress hide behind cultural cover.",
      correction: "The Oxford rule runs both directions: diagnose only the marked deviation beyond the culture's average — impairment and distress decide, not the pattern's existence.",
    },
    {
      mistake: "Forgetting the stability paradox cuts both ways",
      why: "The 'enduring by definition' reading ignores that follow-up finds remission — and the 'it will fade' reading ignores that today's state contaminates the measurement.",
      correction: "Assess after recovery, re-assess over time; treat remission findings as the prognostic fuel for organised treatment, never as licence to dismiss.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define personality disorder: four domains, three duration/pervasiveness requirements.",
        "The three clusters with members and nicknames; the ICD-10 translation table.",
        "Community, clinic, primary-care and prison prevalence figures.",
        "Ego-syntonicity, the stability paradox and the diathesis-stress view.",
        "Why personality is assessed in every major psychiatric presentation.",
      ],
      practical: [
        "Take a longitudinal personality history using the accompanying relative as informant — and present the formulation, not just a label.",
        "Demonstrate the cultural-average rule in the Indian case discussion: what is normative, what is disorder.",
      ],
      longAnswer: [
        "Personality disorders: definition, classification and epidemiology.",
        "A 24-year-old with three 'failed' antidepressant courses and an overdose after a family quarrel: the diagnostic approach that does not stop at the mood label.",
      ],
    },
    neetPg: {
      highYield: [
        "The definition's quartet: ≥2 of four domains (cognition, affectivity, interpersonal, impulse control) + inflexible + pervasive + early-onset + stable + distress/impairment.",
        "Clusters: A odd (paranoid, schizoid, schizotypal); B dramatic (antisocial, borderline, histrionic, narcissistic); C anxious (avoidant, dependent, obsessive-compulsive).",
        "ICD-10 translation drill: anankastic = OCPD; dissocial = antisocial; anxious = avoidant; EUPD impulsive/borderline = borderline; schizotypal NOT a PD in ICD-10 (schizophrenia group F2).",
        "Numbers: community ~10–13%; OCPD the commonest type (2%); psychiatric samples ~50%; substance services 57%; ASPD in prisoners 47%.",
        "Sex/age: ASPD male-skewed 2:1–7:1; borderline peaks 19–34, declines with age; histrionic EQUAL sex rates (the stereotype-killer).",
        "Ego-syntonic vs ego-dystonic: the presentation and the OCD-boundary line.",
        "DSM-5 Section III alternative model + ICD-11 severity + five trait domains (negative affectivity, detachment, dissociality, disinhibition, anankastia).",
        "Schizotypal in 14.6% of relatives of schizophrenia probands vs 2.1% controls — the F2 placement's reason.",
        "Tyrer's 'delusional attitude' of doctors; Schneider's two shelves; DSPD's three requirements (severe disorder, significant risk, risk functionally linked).",
        "The stability paradox as the reconciliation question between definition and follow-up data.",
      ],
      pyqConcepts: [
        "The categorical-vs-dimensional debate as the classification short-note: Livesley's four factors, the heritability surprise, the pragmatic synthesis.",
        "The Pinel–Prichard–Cleckley lineage and the 'bad or mad' question as forensic psychiatry's inheritance.",
        "Schizoid diagnoses rising ~800% between DSM editions — criteria change, not prevalence (the trap answer).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old woman with her third 'depression' in two years, an overdose after a quarrel with her father, cut wrists since 17, stormy friendships, idealise-then-devalue patterns with two treating doctors, and a file that says 'bipolar affective disorder, rapid cycling' with no sustained elevation ever documented: the re-formulation to EUPD/borderline PD with comorbid depressive episodes, the relative-informant history as the decisive evidence, and the plan-shift from mood-stabiliser escalation to the structured programme (crisis card, scheduled follow-up, DBT-informed referral, targeted treatment of each episode).",
        "A 38-year-old referred 'for management of temper' after a fourth job loss, labelled 'nothing psychiatric, just a difficult personality' — until systematic history reveals lifelong suspiciousness, grudge-keeping, refusal to confide and a decade's marital deterioration: paranoid personality disorder unmasked behind the 'difficult' label, with psychoeducation for the wife, employer mediation and long-term consistent care as the management.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The definition's four domains and requirements.",
        "Cluster membership and nicknames; the ICD-10 translation table.",
        "Prevalence quartet: community, clinics, primary care, prisons.",
        "Ego-syntonicity; the single-episode diagnosis prohibition.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The instrument honesty: categorical agreement between IPDE-class instruments is modest, most patients land in the NOS remainder bin, and dimensional scores are more reliable — the craft is the longitudinal multi-source formulation, not the checklist score.",
        "The DSM-edition trap: each version is a new instrument; diagnoses are not interchangeable across editions without data (the 800% schizoid jump is definitions, not epidemiology).",
        "The ICD-11 arrival means Indian case notes will migrate to severity-plus-domain language — 'moderate personality disorder with dominant dissociality and disinhibition' — learn to speak both systems now.",
        "The informants are already in the room: the Indian OPD's accompanying relative converts the PAS logic from research instrument to free daily practice.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The relabelled borderline",
      presentation: "Her third 'depression' in two years, and this time an overdose after a quarrel with her father — the chart still says 'rapid-cycling bipolar'.",
      initialPresentation: "A 24-year-old woman presented to the OPD after an overdose following a family quarrel, her third depressive-labelled episode in two years, each previously treated with a different antidepressant. Chart review documented cut wrists since age 17, stormy friendships, an idealise-then-devalue pattern involving two treating doctors, chronic emptiness, and brief stress-related paranoid ideas that always resolved. No history of sustained elevation, decreased need for sleep, or goal-directed hyperactivity was ever recorded.",
      history: "Board-exam-era onset of self-harm at 17; repeated ruptured friendships and two broken engagements; family reports lifelong interpersonal turbulence 'since school days' — the relative-informant history the previous files never took; no substance dependence; prior prescriptions: two antidepressants and valproate, all 'failed'.",
      examination: "Mental state: distressed, ashamed, clinging then hostile within a single interview — the live demonstration of the idealise-devalue axis; no psychotic features between stress episodes; suicide risk screen positive for ideation, plan uncertain; the three borderline anchors elicited (frantic abandonment avoidance, identity diffusion, transient stress-linked paranoia).",
      diagnosis: "Emotionally unstable (borderline) personality disorder with recurrent depressive episodes — the epidemiology's most common clinical combination, mislabelled as bipolar spectrum on the file.",
      management: "Re-formulation and diagnosis delivery as the destigmatising first act; valproate reassessed against the actual symptom record (no episodes qualifying); the structured long-term programme: written crisis card (Tele-MANAS 14416 + clinic numbers), scheduled fortnightly brief appointments replacing crisis-driven attendance, family psychoeducation session with the natural-course data (88% 10-year remission) quoted verbatim; referral to the hospital's DBT-informed skills group; targeted treatment of each depressive episode as it arrives, priced for slower response.",
      outcome: "Twelve months: four scheduled brief admissions-averting reviews, one depressive episode treated early and briefly, the crisis card used twice as designed (helpline, not emergency department); family reports the first 'steady season' in five years; the bipolar label formally revised in the record.",
      teachingPoints: [
        "The overdose-after-quarrel pattern plus lifelong interpersonal instability distinguishes PD-with-depression from mood disorder — the relative's history is the decisive evidence.",
        "'Antidepressant failures' in this context usually mean the wrong primary diagnosis — the relabelling trap's pharmacological shadow.",
        "Structured, predictable care is itself an intervention: the crisis card and scheduled appointments do measurable work before any therapy brand begins.",
      ],
    },
    {
      title: "The man nobody could treat",
      presentation: "Four jobs lost to temper, a referral letter that says 'nothing psychiatric, just a difficult personality' — and a diagnosable, workable condition hiding behind the label.",
      initialPresentation: "A 38-year-old man was referred to psychiatry 'for management of temper' after his fourth job loss; the referral letter noted 'nothing psychiatric, just a difficult personality'. The resident initially agreed — until systematic history from the wife revealed lifelong suspiciousness (reading insults into neutral remarks), persistent grudge-keeping (formal complaints filed against two employers), refusal to confide in anyone ('information is used against you'), and a decade of deteriorating marital life.",
      history: "Wife's informant account: the pattern is 'since we married, and his mother says since school' — the longitudinal gate satisfied; employer records document the grudge-keeping; no mood episodes, no substance dependence, no psychotic episodes; one prior GP consultation 'for stress' a decade ago, no follow-through.",
      examination: "Alert, oriented, formally cooperative but guarded; interprets two neutral interview questions as 'checking up on me for them'; no delusional conviction reached (the paranoid-personality line: interpretations, never fixed delusions); affect constricted; no insight into the pattern's role in the job losses.",
      diagnosis: "Paranoid personality disorder — Cluster A, arriving disguised as a workplace and marital complaint.",
      management: "The 'difficult patient' label reframed as a diagnostic prompt; psychoeducation for the wife focused on not escalating perceived threats (the counterattack cycle); employer mediation attempted through the current workplace's HR tier; low-dose targeted pharmacotherapy explicitly reserved for comorbid states only (none currently active); long-term consistent care with one named clinician — the acceptance bottleneck treated as the primary engagement task, never forced.",
      outcome: "Six months: still employed in the new job (mediation structured the exit-and-entry); marital sessions reduced the escalation cycle; the patient attended three of four scheduled reviews — the 'no wish to be cured' prediction softened by consistency rather than confrontation.",
      teachingPoints: [
        "'Difficult' is a diagnostic prompt, not a disposition — Cluster A disorders arrive disguised as workplace and marital complaints.",
        "The paranoid personality's beliefs never reach fixed delusional conviction — the delusional-disorder line the differential holds.",
        "The stigma chapter's warning (diagnosis implying intractability leading to no care) is exactly what happened here for years — the label concealed a workable condition.",
      ],
    },
  ],
  clinicalPearls: [
    "Four domains (cognition, affectivity, interpersonal, impulse control), at least two involved — plus inflexible, pervasive, early, stable, impairing: the whole definition in one breath.",
    "Clusters: A 'mad' odd, B 'bad' dramatic, C 'sad' anxious — remember the nicknames in quotes, because the data contradicts several stereotypes (histrionic: equal sex rates).",
    "ICD-10 translation drill: anankastic, dissocial, anxious, EUPD — and schizotypal is NOT a PD in ICD-10 (schizophrenia group F2, because 14.6% of schizophrenia relatives carry the pattern).",
    "Prevalence quartet for every answer: community 10–13%, clinics ~50%, substance services 57%, prisoners 47% antisocial PD.",
    "Ego-syntonicity explains the presentation: nobody self-refers for 'my personality' — they arrive through crises, depression, self-harm and family exhaustion.",
    "The stability paradox: definitions say enduring, follow-up says substantial remission — reconcile by assessing after recovery and treating with organised hope (the 88% figure lives in the treatment course).",
    "Never diagnose a personality disorder from a single episode — state effects contaminate trait measurement.",
    "The Indian OPD's free instrument: the accompanying relative — 'how has he been since youth, before the marriage, at the last job?'",
    "Tyrer's phrase for the historical therapeutic nihilism: a 'delusional attitude' of doctors toward these patients.",
  ],
  highYieldSummary: [
    "Definition: enduring pattern, deviates markedly from cultural expectations, ≥2 of four domains (cognition, affectivity, interpersonal, impulse control), inflexible, pervasive, early-onset, stable, distress/impairment — never diagnosed from a single episode or an acute state.",
    "Clusters: A odd/eccentric (paranoid, schizoid, schizotypal); B dramatic/erratic (antisocial, borderline, histrionic, narcissistic); C anxious/fearful (avoidant, dependent, obsessive-compulsive) — with ICD-10 translation: anankastic, dissocial, anxious, EUPD; schizotypal sits in F2.",
    "Epidemiology: community 10–13% (OCPD commonest type at 2%); psychiatric samples ~50% (substance 57%); primary care 5–8% rising to 24% systematically assessed; prisons 78/64/50% any-PD and 47% antisocial; borderline peaks 19–34, histrionic equal sexes.",
    "History: Pinel's manie sans délire → Prichard's moral insanity → Cleckley's mask of sanity; Schneider's two shelves (the dead dualism); DSPD's three requirements (severe disorder, significant risk, functional linkage).",
    "Categorical vs dimensional: same four-ish factors in clinical and normal samples (Livesley; the 'four As') BUT abnormal traits less heritable than normal and prevalence exceeding trait-extremes alone — pragmatic synthesis: categories for care allocation, dimensions for description; ICD-11 (severity + five trait domains) and DSM-5 Section III made it official.",
    "Mechanism tier: temperament (~40% heritable) + character; extremes as diatheses converting stress into disorder; borderline stress physiology (high basal cortisol, blunted challenge response); organic personality change drawn separately.",
    "Assessment craft: longitudinal, multi-source, informant-based (the PAS logic — the Indian relative); instruments named (IPDE, PDQ-4, MCMI-III, SWAP, DAPP-BQ) with the honest verdict (categorical agreement modest, dimensional superior); re-assess after recovery.",
    "Management pointers: stigma removal first (Tyrer's 'delusional attitude' critique); treat the presenting illness but differently; the spectrum principle; the Indian tier: EUPD terminology, the relabelling trap, cultural-average rule, the organised plan as the deliverable core.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pd-overview-quiz-1",
      question: "A personality disorder pattern must be manifest in at least TWO of which four domains?",
      options: ["Hallucinations, delusions, cognition, insight", "Cognition, affectivity, interpersonal functioning, impulse control", "Memory, attention, language, visuospatial function", "Sleep, appetite, libido, energy"],
      correctIndex: 1,
      explanation: "The four domains anchor the definition; add inflexibility, pervasiveness, early onset, stability and distress/impairment.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pd-overview-quiz-2",
      question: "ICD-10's term for what DSM calls obsessive-compulsive personality disorder:",
      options: ["Anankastic personality disorder", "Dissocial personality disorder", "Anxious personality disorder", "Emotionally unstable personality disorder"],
      correctIndex: 0,
      explanation: "ICD-10 uses 'anankastic' to avoid implying an inevitable link with obsessive-compulsive disorder; dissocial = antisocial, anxious = avoidant.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pd-overview-quiz-3",
      question: "The community prevalence of any personality disorder across the twelve major surveys:",
      options: ["About 1%", "About 10–13%", "About 25%", "About 40%"],
      correctIndex: 1,
      explanation: "Rising to ~50% of psychiatric patients and 47% antisocial PD in prisoners — the setting gradient is the core epidemiological finding.",
      afterSectionId: "symptoms",
    },
    {
      id: "pd-overview-quiz-4",
      question: "Follow-up studies most directly challenge which element of the classical definition?",
      options: ["The distress/impairment requirement", "The assumption of endurance — significant proportions no longer meet criteria at retest", "The four-domain structure", "The early-onset requirement"],
      correctIndex: 1,
      explanation: "The stability paradox: state components and genuine remission make PDs less permanent than definitions claim — assessment wisdom, not licence to dismiss.",
      afterSectionId: "mechanism",
    },
    {
      id: "pd-overview-quiz-5",
      question: "Schizotypal personality disorder is placed outside the personality-disorders chapter in ICD-10 because:",
      options: ["It responds only to psychotherapy", "Genetic and clinical continuity with the schizophrenia spectrum (14.6% of probands' relatives vs 2.1% of controls)", "It was discovered after ICD-10 was finalised", "It occurs only in children"],
      correctIndex: 1,
      explanation: "ICD-10 classifies it with schizophrenia, schizotypal and delusional disorders to reflect that genetic and clinical relationship.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pd-overview-quiz-6",
      question: "The Indian OPD's most under-used personality assessment instrument is:",
      options: ["The MCMI-III", "The IPDE", "The accompanying relative (informant-based history)", "The PDQ-4"],
      correctIndex: 2,
      explanation: "The PAS logic runs free in Indian clinics: 'how has he been since youth, before the marriage, at the last job?' — collateral outperforms the checklist in one sitting.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Define personality disorder in one sentence using the four domains and three duration/pervasiveness requirements.", answer: "An enduring pattern of inner experience and behaviour deviating markedly from cultural expectations, manifest in at least two of four domains (cognition, affectivity, interpersonal functioning, impulse control), that is inflexible and pervasive across situations, begins by adolescence or early adulthood, is stable over time, and causes significant distress or impairment — to the person or to the people around them.", topic: "Diagnosis" },
    { question: "Reproduce the cluster table with all members, nicknames and ICD-10 translations.", answer: "Cluster A 'odd/eccentric' (Mad): paranoid, schizoid, schizotypal — ICD-10 paranoid, schizoid, with schizotypal placed in the schizophrenia group (F2). Cluster B 'dramatic/erratic' (Bad): antisocial, borderline, histrionic, narcissistic — dissocial; emotionally unstable PD (impulsive + borderline types); histrionic; narcissistic under 'other specific'. Cluster C 'anxious/fearful' (Sad): avoidant, dependent, obsessive-compulsive — anxious [avoidant]; dependent; anankastic.", topic: "Classification" },
    { question: "Quote four prevalence numbers and the sex/age patterns they travel with.", answer: "Community 10–13% (OCPD the commonest type at 2%); psychiatric samples ~50% overall with substance services at 57%; primary care 5–8% rising to ~24% systematically assessed; prisoners 78% male remand / 64% sentenced / 50% female, with antisocial PD in 47% of a 13,844-prisoner meta-analysis. Patterns: antisocial PD male-skewed 2:1 to 7:1, younger, urban, lower socio-economic; borderline peaks 19–34 and declines with age; histrionic shows identical rates in men and women.", topic: "Epidemiology" },
    { question: "Summarise the categorical-vs-dimensional argument with one piece of evidence for each side, and state the pragmatic synthesis.", answer: "For dimensional: the same four-ish factors (Livesley's emotional dysregulation, dissocial behaviour, inhibitedness, compulsivity — or the 'four As') emerge in clinical AND normal samples, so people with PDs differ quantitatively. For categorical: abnormal traits appear LESS heritable than normal ones, and PD prevalence exceeds what extreme normal traits alone would predict. Synthesis: use categories to decide who gets care (thresholds, services, forensics) and dimensions to describe what the person is like and what will help — the architecture ICD-11 (severity + five trait domains) and DSM-5 Section III formalised.", topic: "Classification" },
    { question: "Explain the stability paradox and its implication for when to assess personality.", answer: "Follow-up research shows PDs are less enduring than the definitions claim — significant proportions no longer meet criteria at 6-month to multi-year retest, because some measured features are state-like (fluctuating with mood and circumstances) and genuine remission occurs. Implications: never diagnose during an acute illness state (state contamination of trait measurement); re-assess after recovery, not only during illness; treat the remission data as fuel for organised treatment, never as licence to dismiss the diagnosis.", topic: "Diagnosis" },
    { question: "State the diathesis-stress model and why the chapter prefers 'diatheses' for these conditions.", answer: "Broad innate temperament develops into a trait hierarchy whose extremes act as diatheses — vulnerabilities that convert environmental stress into overt disorder rather than being episodes of illness themselves. The fit: early onset, setting-dependent expression, and ego-syntonic acceptance all support viewing PDs as diatheses as much as disorders — which also explains why configurations remit under one environment and re-emerge under another, and why treating comorbid states can dissolve apparent personality pathology.", topic: "Mechanism" },
    { question: "Trace the historical chain Pinel → Prichard → Cleckley and state the modern 'bad or mad' echo.", answer: "Pinel (1809) described manie sans délire — judgement intact, no delusions, yet behaviour characteristic of mental illness (the man in the well); Prichard later named such states 'moral insanity'; Morel added degeneration theory; Cleckley (1941) argued the psychopath's profound social maladaptation hides behind a 'mask of sanity'. The modern echo: forensic psychiatry's 'bad or mad' question, institutionalised in the UK's Dangerous and Severe Personality Disorder programme's three requirements — severe disorder, significant risk, and risk functionally linked to the disorder.", topic: "History" },
    { question: "Write the Indian assessment protocol using the accompanying relative, in four questions.", answer: "(1) 'How has he been with people since youth?' — the lifelong interpersonal pattern; (2) 'Before the marriage — what was he like at school, with friends?' — the pre-alliance baseline; (3) 'At his last job, what happened, in his colleagues' telling?' — cross-situational pervasiveness; (4) 'When the marriage or family trouble peaked, what did he DO?' — the stress-expression tier. Collateral from the relative outperforms the checklist in one sitting; record it as informant history, not gossip.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is a personality disorder a mental illness or just a bad character?", answer: "It is a recognised mental disorder: early-onset, stable patterns of experiencing and relating that cause real suffering and dysfunction, with biological underpinnings and treatability. The 'bad character' reading is two centuries old and demonstrably leads to withholding effective care — Tyrer called that attitude of doctors a 'delusional attitude', and the modern remission data proved it wrong." },
    { question: "If it is stable by definition, can it change?", answer: "Yes — and this is one of the field's big recent findings: a substantial proportion of people stop meeting criteria over years, especially with treatment; some measured features fluctuate with mood and circumstances. 'Stable' describes years, not a life sentence, and organised treatment steepens the improvement curve." },
    { question: "Does it run in families?", answer: "Partly: about 40% of normal trait variation is genetic, and configurations run in families — though environment and early adversity shape the pattern too. One specific family signal: schizophrenia in a relative raises schizotypal-pattern risk (14.6% of probands' relatives vs 2.1% of controls), which is why ICD-10 places schizotypal with the schizophrenia spectrum." },
    { question: "Why did my doctor refuse to diagnose my personality during my depression?", answer: "Standard practice, not evasion: acute illness distorts trait assessment — the same behaviour can flow from the episode, the personality, or both. The reliable window is after recovery, with collateral history. Expect the question 'how have you been across your whole life?', not only 'how are you this month?'" },
    { question: "Is 'borderline' the same as 'emotionally unstable'?", answer: "In ICD usage, emotionally unstable personality disorder comes in impulsive and borderline subtypes — so 'borderline' is a subtype label there, a full category in DSM. Indian records often use the ICD term; know both, and know they describe the same construct." },
    { question: "Does having a personality disorder ruin treatment of my depression?", answer: "It changes it: outcomes are slower and relapse risk higher — which is why we plan for it rather than despair of it. Up to half of your fellow patients carry the same complication, and structured, consistent treatment demonstrably works for the combination." },
    { question: "Can a brain injury cause this?", answer: "It can cause personality CHANGE (classified as organic personality change, separate from the developmental personality disorders) — but it is managed with the same respect and structure. The distinction matters for cause, treatment target and prognosis: a documented premorbid personality that shifted is a different file from a lifelong pattern." },
    { question: "Is it common in prisons?", answer: "Yes: majorities of prisoners meet criteria in some studies — antisocial PD in 47% of a 13,844-prisoner meta-analysis. That fact powers forensic services AND fuels stigma; both should be remembered: it plans services without licensing neglect." },
    { question: "We are a joint family — the doctors keep dismissing things as 'just our culture'. Where is the line?", answer: "The line is functional: deference, joint decisions, arranged-marriage adjustment and devotion are normative Indian patterns, not disorder — disorder is the marked deviation beyond the culture's average that brings distress or impairment. The rule protects both directions: no pathologising normal family life, and no hiding genuine, distressing patterns behind cultural cover." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "ICD-11 (WHO) — personality disorder severity and trait-domain architecture (the dimensional reform) (2019/2022)" },
      { source: "DSM-5 / DSM-5-TR (APA) — Section II cluster system and Section III alternative model (2013/2022)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.1 + 4.12.2 + 4.12.4 — source chapters mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — personality disorders (2022)" },
    ],
    trials: [
      { source: "Torgersen S et al. — Norwegian national register community survey (13.4%)" },
      { source: "Zimmerman M & Coryell W — 14.3% community prevalence including mixed/NOS; Samuels J et al. — 9.0% IPDE re-interview series" },
      { source: "Nestadt G et al. — histrionic PD 2.1%, equal sex rates (ECA Baltimore); Swartz M et al. — borderline 1.8%, age 19–34 peak (ECA North Carolina)" },
    ],
    reviews: [
      { source: "Guzzetta F & de Girolamo G — the Oxford epidemiology chapter synthesising 61 clinical studies (the prevalence architecture)" },
      { source: "Livesley WJ et al. (1998) — the four-factor phenotypic and genetic structure of trait dimensions (Arch Gen Psychiatry)" },
      { source: "Fazel S & Danesh J (2002) — antisocial PD in 47% of 13,844 prisoners (the prison meta-analysis)" },
      { source: "Zanarini MC et al. (2006) — the 10-year borderline course (remission findings); Skodol AE et al. — CLPS 4-year remission" },
      { source: "Schneider K — Die psychopathischen Persönlichkeiten / Klinische Psychopathologie (the ten-type framework and the two-shelves dualism); Cleckley H — The Mask of Sanity; Tyrer P, Casey P & Ferguson B (1991) — the 'delusional attitude' critique (Br J Psychiatry)" },
      { source: "Indian tier — NMHS 2015–16 framing; NIMHANS-centre DBT-informed programme reports; Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The accompanying-relative informant protocol — the four questions this course hands to every Indian OPD" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: what the diagnosis means, why it is treatable, and the Indian help map.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The definition, the clusters, the numbers and the assessment craft.",
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
      estimatedTime: "42 min",
      description: "Everything — the classification debate, the instrument honesty, the formulation craft, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the history, the clusters and the prevalence cascade.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the definition cold, recite the cluster table with ICD translations, and quote the prevalence quartet." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Temperament plus character, the diathesis cascade, the dimensional architecture.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why configurations act as diatheses and why the classification went dimensional." },
    { number: 3, title: "Clinical Practice", description: "The assessment craft, the instruments, the differentials and the formulation.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the longitudinal gate, use the relative-informant, and write a formulation instead of a label." },
    { number: 4, title: "Indian Context", description: "The relabelling trap, the cultural-average rule, the disclosure ethics, the organised plan.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can spot the relabelling pattern, engage the family as instrument, and deliver the destigmatising formulation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the definition-and-clusters and the stability-paradox questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.1 + 4.12.2 + 4.12.4 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) — Section II cluster architecture and Section III alternative model", sourceType: "classification", year: "2013/2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "ICD-10 (WHO) — personality disorder definition and terminology; ICD-11 (WHO) — severity and trait-domain system", sourceType: "classification", year: "1992 / 2019-2022", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Torgersen S et al. — Norwegian national register survey (13.4% community prevalence)", sourceType: "primary", year: "2001 onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Zimmerman M & Coryell W; Samuels J et al. — US community prevalence series (14.3% incl. NOS; 9.0% IPDE)", sourceType: "primary", year: "1988–2002", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Nestadt G et al. (ECA Baltimore, histrionic 2.1% equal sexes); Swartz M et al. (ECA North Carolina, borderline 1.8%, 19–34 peak)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Fazel S & Danesh J — antisocial PD in 47% of 13,844 prisoners (meta-analysis); UK prison personality-disorder studies", sourceType: "meta-analysis", year: "2002", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Livesley WJ et al. (1998) — the four-factor phenotypic and genetic structure of trait dimensions (Arch Gen Psychiatry)", sourceType: "primary", year: "1998", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Zanarini MC et al. (2006) — the 10-year borderline course (remission findings); Skodol AE et al. — CLPS 4-year remission rates", sourceType: "primary", year: "2003–2006", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Schneider K — the ten-type framework and the two-shelves dualism; Cleckley H — The Mask of Sanity; Pinel/Prichard historical lineage as synthesised in the Oxford chapters", sourceType: "textbook", year: "1809–1971 (classics)", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Tyrer P, Casey P & Ferguson B (1991) — 'Personality disorder in perspective', the 'delusional attitude' critique (Br J Psychiatry 159:463–71)", sourceType: "primary", year: "1991", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Baron M et al.; Asarnow RF et al. — schizotypal PD aggregation in schizophrenia families (14.6% vs 2.1%)", sourceType: "primary", year: "1980s", dateReviewed: "2026-09-28" },
    { id: "S13", source: "Indian tier — NMHS 2015–16 mental-health framing; NIMHANS-centre DBT-informed programme reports; Tele-MANAS 14416; Indian clinical-practice experience (relabelling pattern, informant use)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The definition: enduring pattern, marked deviation from cultural expectations, ≥2 of four domains (cognition, affectivity, interpersonal, impulse control), inflexible, pervasive, early-onset, stable, distress/impairment — with the never-from-a-single-episode assessment rule.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The cluster architecture (A odd: paranoid, schizoid, schizotypal; B dramatic: antisocial, borderline, histrionic, narcissistic; C anxious: avoidant, dependent, obsessive-compulsive) and the ICD-10 translation table (anankastic, dissocial, anxious, EUPD; schizotypal in F2).", grade: "established", sources: ["S2", "S3"] },
    { text: "Community prevalence of any personality disorder ~10–13% across twelve major surveys; obsessive-compulsive PD the commonest specific type (2.0% median).", grade: "established", sources: ["S4", "S5", "S1"] },
    { text: "The setting gradient: ~50% of psychiatric patients (57% substance services); primary care 5–8% rising to ~24% systematically assessed; prisons 78% male remand / 64% sentenced / 50% female, antisocial PD 47% of prisoners.", grade: "established", sources: ["S1", "S7"] },
    { text: "Sex and age patterns: antisocial PD male-skewed (2:1–7:1), younger, urban, lower socio-economic; borderline peaks 19–34 and declines with age; histrionic identical rates in men and women.", grade: "established", sources: ["S6", "S1"] },
    { text: "Schizotypal PD aggregates in schizophrenia families (14.6% of probands' relatives vs 2.1% controls) — the genetic rationale for ICD-10's F2 placement.", grade: "established", sources: ["S12", "S3"] },
    { text: "The dimensional case: the same four-ish factors emerge in clinical and normal samples (Livesley's emotional dysregulation, dissocial behaviour, inhibitedness, compulsivity) — people with PDs differ quantitatively; the reform movements (DSM-5 Section III, ICD-11 severity + five trait domains) formalised the hybrid.", grade: "established", sources: ["S8", "S2", "S3"] },
    { text: "The stability paradox: significant proportions no longer meet criteria at 6-month to multi-year retest — state contamination plus genuine remission; the Zanarini/CLPS remission architecture.", grade: "established", sources: ["S9", "S1"] },
    { text: "The diathesis-stress frame: broad innate temperament (~40% heritable) develops into trait hierarchies whose extremes act as vulnerabilities converting stress into disorder — the preferred view over the episode model.", grade: "supported", sources: ["S1", "S8"] },
    { text: "Stress physiology: borderline patients with impulsive suicidal behaviour show high basal cortisol with blunted challenge response — a chronically stressed system that has lost adaptive range.", grade: "supported", sources: ["S1"] },
    { text: "Tyrer's critique: doctors' historical attitude toward personality-disordered patients functioned as a 'delusional attitude', withholding effective care; the stigma tier is the first treatment target.", grade: "established", sources: ["S11"] },
    { text: "Assessment instrument honesty: categorical agreement between semi-structured interviews is at best modest, most patients land in the NOS remainder bin, and dimensional scores are more reliable than categories; informant-based methods (PAS) and clinician prototypes (SWAP) extend the armoury.", grade: "established", sources: ["S1"] },
    { text: "The Indian tier: EUPD terminology on case notes; borderline presentations relabelled as 'rapid-cycling bipolar'/'treatment-resistant depression'; the accompanying relative as the systematic informant instrument; cultural-average rule and marriage-market disclosure ethics; NIMHANS-tier DBT-informed programmes scarce; no national PD epidemiology (the honest statement).", grade: "supported", sources: ["S13"] },
  ],
};
