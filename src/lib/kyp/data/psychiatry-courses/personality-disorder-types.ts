import type { PsychiatryCourse } from "./types";

/**
 * SPECIFIC PERSONALITY DISORDER TYPES — CLUSTER A, B, C AND THE
 * BORDERLINES BETWEEN THEM — canonical Psychiatry course (migration
 * batch 5, Group J — personality disorders, part 2 of 3).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/personality-disorder-types.md — untouched
 * foundation), re-researched against current guidance (DSM-IV/ICD-10
 * criteria logic paraphrased never reproduced, the ch 4.12.5
 * gene-trait literature with honest effect sizes, Kernberg's
 * borderline organisation, Zanarini's course data, NMHS/NIMHANS
 * Indian framing) with per-claim provenance.
 *
 * Drug routes: fluoxetine (the SSRI with the best impulsive-
 * aggression signal in borderline-type presentations) — the rest of
 * the pharmacology (topiramate, aripiprazole, lithium, the benzo
 * contraindication) has no KYP drug lessons and is recorded in
 * contentGaps, never invented.
 */
export const personalityDisorderTypesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "personality-disorder-types",
  title: "Specific Personality Disorder Types",
  shortName: "PD Types",
  kind: "disorder",
  category: "Personality Disorder",
  groupLetter: "J",
  groupName: "Personality disorders",
  learningPath: ["Psychiatry", "Personality Disorders", "Specific Personality Disorder Types"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Ten styles of being, cluster by cluster, each with its own texture and treatment gesture",
  summary:
    "Specific personality disorder types are enduring, inflexible patterns grouped into clusters A, B and C. Each type carries its own differential, course and management gesture, and borderline presentations demand active suicide-risk assessment.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe each of the ten DSM/ICD personality disorder types in plain clinical language: picture, prevalence, one aetiological lead, course, treatment gesture.",
    "Work the classic discrimination pairs: borderline vs bipolar II; avoidant vs schizoid vs social phobia; dependent vs borderline abandonment reactions; narcissistic vs histrionic; obsessive-compulsive personality vs OCD; antisocial vs borderline antisociality.",
    "Recognise the borderline-specific safety number (8–10% suicide mortality) and its assessment implications.",
    "Summarise the gene-trait findings with honest effect sizes: D4DR and novelty-seeking, 5-HTT short variant and neuroticism, MAO-A × childhood abuse and aggression, V1a/oxytocin and affiliation.",
    "Explain 'borderline personality organisation' (Kernberg) and how it differs from the DSM borderline category.",
    "Identify which types improve with age (borderline, histrionic, avoidant) and which decompensate in middle life (narcissistic, anankastic).",
    "Name the antisocial PD gates (age ≥18, conduct disorder before 15) and the one drug class contraindicated in it, and why.",
    "Apply the cultural-relativity duty in the Indian clinic: deference and devotion are normative; disorder is the marked, impairing deviation.",
  ],
  quickFacts: [
    { label: "Cluster A", value: "Odd/eccentric", detail: "Paranoid (~1–2%, reads hidden insults into neutral remarks, bears grudges); schizoid (~0.8–1%, detachment WITHOUT desire for closeness); schizotypal (~0.5–3%, odd beliefs and perceptual distortions, 14.6% of schizophrenia relatives)" },
    { label: "Cluster B", value: "Dramatic/erratic", detail: "Antisocial (47% of prisoners, conduct before 15 + age ≥18 gates); borderline (8–10% suicide mortality, diagnosis rare after 40); histrionic (2–3%, EQUAL sex rates); narcissistic (~0.5%, grandiosity the discriminator, decompensates at middle age)" },
    { label: "Cluster C", value: "Anxious/fearful", detail: "Avoidant (<1% community but up to 10% clinical. WANTS closeness, fears criticism); dependent (~0.7–0.9%, fears loss of care, hunts the next carer); anankastic (~1% community, up to 10% of psychiatric patients, ego-syntonic perfectionism)" },
    { label: "The bipolar fork", value: "Minutes vs weeks", detail: "Borderline mood flips run minutes-to-hours, dysphoria-to-anger, triggered by rejection; bipolar runs days-to-weeks with true elation and decreased sleep need: the Indian OPD's highest-value discrimination" },
    { label: "The ego line", value: "Syntonic vs dystonic", detail: "The anankastic ENDORSES the standards (ego-syntonic); the OCD patient FIGHTS the obsessions (ego-dystonic): the classic separator between personality and illness" },
    { label: "The genetics honesty", value: "Polygenic, modest", detail: "D4DR ≈ 10% of novelty-seeking's genetic variance (replications mixed); 5-HTT short ≈ 3–4% of neuroticism's total variance; MAO-A × abuse is the gene-environment interaction model; no genetic personality test exists" },
    { label: "The suicide number", value: "8–10%", detail: "Borderline PD lifetime suicide mortality: every gesture taken seriously; and the diagnosis becomes rare after 40 (neural and social maturation)" },
    { label: "The age rules", value: "Who improves, who breaks", detail: "Antisocial, borderline, histrionic, avoidant improve with age; narcissistic and anankastic decompensate in middle/late life (depression, hypochondriasis) as supplies dry up and control is lost" },
  ],
  knowledgeGraph: [
    { label: "Personality Disorders", type: "condition", href: "/psychiatry/personality-disorders-overview/", note: "The definition, clusters and epidemiology this types course assumes" },
    { label: "Treating Personality Disorders", type: "condition", href: "/psychiatry/personality-disorder-treatment/", note: "The per-type gestures become full programmes here. DBT, MBT, the honest drug audit" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The great mimic: sustained episodes with true elation vs the borderline's minutes-to-hours reactive dysphoria" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The ego-dystonic illness next door to the ego-syntonic anankastic personality" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "The avoidant continuum: arguably the same condition, impairment greater and onset earlier in the personality form" },
    { label: "Schizoaffective & Schizotypal Disorders", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "The Cluster A border with the psychosis spectrum: ideas of reference that never reach delusional conviction" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Low CSF 5-HIAA with impulsive aggression: the serotonergic brake the Cluster B engine lacks" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The types course's neuroscience is the biology of styles: four teaching stories that carry the examinable mechanisms. Splitting: the infant's world arrives unblended (wholly good breast, wholly bad breast) and maturity blends them into 'frustrating but lovable person'; in borderline organisation the blending never stabilises, so the beloved therapist of Tuesday is the persecutor of Friday and the self-image splits with it. Kernberg's triad (identity diffusion + primitive defences + INTACT reality testing) defines a level of psychological architecture, not a category: the problem is not losing touch with reality but filing people and self in all-or-nothing folders. The control story (anankastic): the person lacks an internal sense of security and manufactures it by making the external world totally predictable; rules, lists, punctuality, hoarded objects against catastrophe; emotion is distrusted (especially anger); the strategy runs a career until the unpredictable happens (illness, promotion, a free weekend) and the machinery jams into doubt, indecision and depression. The reward/brakes story (Cluster B's common engine): approach drives run hot (novelty-seeking (dopaminergic), attention and admiration (the narcissistic and histrionic currencies), intense attachment (borderline)) while the serotonergic brakes on impulse are weak (low CSF 5-HIAA in impulsive-aggressive patients); each type aims the same engine differently: at risk and stimulation (antisocial), at intimate others (borderline), at audiences (histrionic), at self-esteem maintenance (narcissistic). The biology tier underneath: amygdala sensitisation plus insufficient cingulate/prefrontal regulation is the current synthesis of borderline affective instability, and high basal cortisol with blunted challenge response marks the impulsive-suicidal tier. A stress system that has lost adaptive range.",
    steps: [
      "Splitting never stabilises in borderline organisation: all-or-nothing files for self and others; the Tuesday therapist becomes Friday's persecutor (Kernberg: identity diffusion + primitive defences + intact reality testing).",
      "The anankastic control engine: internal insecurity managed by external predictability; rules, lists, hoards; emotion (especially anger) distrusted as the threat.",
      "The Cluster B reward/brakes engine: hot approach drives (dopaminergic novelty-seeking, admiration-seeking, intense attachment) on weak serotonergic brakes (low CSF 5-HIAA).",
      "The same engine aimed four ways: risk and stimulation (antisocial), intimate others (borderline), audiences (histrionic), self-esteem maintenance (narcissistic).",
      "The borderline synthesis: amygdala sensitisation with insufficient cingulate/prefrontal regulation; affective instability as circuit architecture.",
      "The stress tier: high basal cortisol with blunted challenge response in impulsive-suicidal patients; lost adaptive range.",
      "The genetics with honest effect sizes: polygenic, each gene modest (D4DR ~10% of novelty-seeking's genetic variance, mixed replications; 5-HTT short 3–4% of neuroticism; MAO-A × abuse the interaction model).",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala-bpd", name: "Amygdala (sensitised)", role: "Borderline affective instability's alarm tier: sensitised threat-reactivity that fires at interpersonal rejection; the circuit the therapies' regulation skills train down.", grade: "supported" },
    { id: "cingulate-pfc", name: "Anterior cingulate / prefrontal regulation", role: "The insufficient brake tier: under-recruited regulatory control over the sensitised amygdala; the current synthesis of BPD affective instability.", grade: "supported" },
    { id: "frontal-aspd", name: "Frontal inhibition systems", role: "The antisocial tier's deficits: frontal inhibition failure plus childhood hyperactivity predicting adult antisociality; the brakes that never installed.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The impulse brake: low CSF 5-HIAA associates with impulsive aggression in borderline and antisocial tiers; 5-HT1B knockout mice attack faster: the serotonergic under-functioning the SSRI tier targets.", grade: "supported", drugConnection: "Fluoxetine's impulsive-aggression signal (see the fluoxetine lesson) is the clinical echo: the only drug route this course links." },
    { name: "Dopamine", symbol: "DA", role: "The novelty-seeking dial: D4DR long-repeat allele reported at ~10% of the trait's genetic variance with mixed replications; the approach drive Cluster B runs hot on.", grade: "proposed" },
    { name: "Oxytocin & vasopressin", symbol: "OT/AVP", role: "The affiliation systems: prairie-vole V1a-receptor transfer between species shows how strongly single social-behaviour circuits are tuned; the attachment machinery the borderline engine runs intense and the schizoid runs quiet.", grade: "supported" },
    { name: "MAO-A", symbol: "MAO-A", role: "The aggression enzyme: the Dutch null-mutation family (males with severe aggression across generations); knockout mice aggressive; the low-activity promoter variant × childhood abuse interaction is the model gene-environment finding.", grade: "established" },
  ],
  pathways: [
    {
      id: "bpd-splitting",
      name: "The splitting pathway (borderline)",
      steps: [
        { label: "Unblended early representations", detail: "The infant's world: wholly good, wholly bad; the files that maturity is supposed to blend" },
        { label: "The blending never stabilises", detail: "In borderline organisation, people and self stay filed in all-or-nothing folders" },
        { label: "Idealisation flips to devaluation", detail: "The beloved of Tuesday becomes the persecutor of Friday: therapist included (the live transference demonstration)" },
        { label: "Reality testing stays INTACT", detail: "The Kernberg line: not psychosis; people organised in all-or-nothing files, with the self-image splitting alongside" },
      ],
      clinicalManifestation: "The stormy-then-ruptured relationships, the contradictory self-reports, the clinician experienced as saviour then villain within one week.",
      grade: "supported",
    },
    {
      id: "aspd-gene-environment",
      name: "The MAO-A × abuse pathway (antisocial)",
      steps: [
        { label: "The low-activity MAO-A promoter variant", detail: "A common genetic variant, silent alone: the Dutch null family shows the extreme end" },
        { label: "Childhood abuse delivers the environment", detail: "Only abused children carrying the low-activity variant show elevated later antisocial and violent behaviour" },
        { label: "Serotonergic and frontal brakes fail to install", detail: "Low CSF 5-HIAA with aggression; frontal inhibition deficits; childhood hyperactivity predicting adult antisociality" },
        { label: "Neither gene nor environment alone", detail: "The model lesson of personality genetics: the risk emerges from their interaction; polygenic, modest, real" },
      ],
      clinicalManifestation: "The conduct-disorder boy with the abusive household who becomes the dissocial adult: the trajectory the interaction finding explains.",
      grade: "established",
    },
    {
      id: "anankastic-control",
      name: "The control pathway (anankastic)",
      steps: [
        { label: "Internal security is missing", detail: "The engine's lack: no felt sense of safety inside" },
        { label: "External predictability manufactures it", detail: "Rules, lists, punctuality, hierarchy, hoarded objects against catastrophe: the machinery of substitute security" },
        { label: "Novelty and emotion read as threat", detail: "Spontaneity endangers the system; anger especially is distrusted and converted (indirect aggression: the small tip, the withheld favour)" },
        { label: "The unpredictable jams the machinery", detail: "Illness, promotion, retirement, a free weekend: the decompensation into doubt, indecision, late-onset depression" },
      ],
      clinicalManifestation: "The perfect clerk who cannot retire: the 58-year-old bypassed for promotion who cannot sleep, checks doors five times, and becomes 'impossible; everything must be his way'.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "cluster-a-course", time: "Lifelong", title: "Cluster A: stable oddness", description: "Paranoid suspiciousness and schizoid detachment run stable from youth; schizotypal carries childhood solitariness and academic underachievement, transient psychotic minutes-to-hours under stress, and in some progression toward brief psychotic or schizophreniform illness (the premorbid-state tier).", phase: "duration" },
    { id: "cluster-b-peak", time: "Teens–30s", title: "Cluster B: the hot decades", description: "The dramatic cluster peaks in early adulthood: antisocial behaviour most pronounced then declining with age (maturation trading aggression for depression/hypochondriasis in some); borderline at maximum severity through the 20s with suicidality, self-harm and crisis cycles.", phase: "peak" },
    { id: "cluster-b-decline", time: "30s–40s", title: "The borderline burn-down", description: "The diagnosis becomes rare after 40: maturation of neural structures and defences plus social learning; Zanarini's cohorts show 88% 10-year remission (the treatment course's number); histrionic 'infantilism' similarly matures.", phase: "recovery" },
    { id: "cluster-c-persist", time: "Lifelong", title: "Cluster C: the quiet constants", description: "Avoidant softens in older age (worst in adolescence when relationships become demanding); dependent runs stable inside protective relationships, catastrophic between them; anankastic persists: doing well in detail-and-order jobs, vulnerable to unexpected change.", phase: "duration" },
    { id: "late-decompensation", time: "Middle life", title: "The narcissistic and anankastic break", description: "Narcissistic supplies (admiration, looks, status) dry up: depression or defensive hypomania breaks through, with hypochondriasis and anxiety as complications; anankastic machinery meets retirement and illness: the classic late-onset depression of the type.", phase: "peak" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Paranoid ~1–2% (more often diagnosed in men, rarely presents voluntarily); schizoid ~0.8–1% (rarely diagnosed in psychiatric settings); schizotypal ~0.5–3% with 14.6% in schizophrenia relatives vs ~2% controls; antisocial ~1.5% median (3% in men-driven figures), male:female 2:1–7:1, urban, younger, lower socio-economic, 47% of prisoners; borderline 1.5–5% community and 10–15% of outpatients, commoner in women in clinical series, onset 18–35; histrionic 2–3% community and 10–15% clinical; narcissistic ~0.5% community and 1–3% clinical, commoner in males, not a formal ICD-10 category; avoidant <1% community but up to 10% clinical; dependent ~0.7–0.9% (structured interviews show no real sex difference, passivity is culture-relative); anankastic ~1% community and up to 10% of psychiatric patients, commoner in men.",
    indianPrevalence: "All figures are Western survey data. Indian settings add strong cultural caution: dependency, obedience and orderliness can be normative, so a disorder is diagnosed only where traits are markedly beyond the culture's average. The Indian clinical reality: Cluster B dominates admissions (self-harm and family-crisis doors); the bipolar-borderline conflation is the highest-value OPD discrimination (young women with rapid reactive mood shifts and self-harm over-diagnosed as 'rapid-cycling bipolar' and over-treated with mood stabilisers); dissocial presentations hide inside substance-use files; Cluster C surfaces in matrimonial, occupational and somatic clinics.",
    lifetimeRisk: "Course rules: antisocial, borderline, histrionic and avoidant improve with age; narcissistic and anankastic decompensate in middle/late life; borderline's 8–10% suicide mortality is the number that never relaxes; schizotypal in some progresses toward psychosis-spectrum illness.",
    genderRatio: "Antisocial the most male-skewed (2:1–7:1); borderline commoner in women clinically; narcissistic commoner in males; histrionic diagnosed more in women (possibly cultural bias in expressiveness, community data shows equal rates); dependent shows no real sex difference on structured interview.",
    ageOfOnset: "All patterns begin by adolescence/early adulthood by definition; antisocial requires conduct evidence before 15 and age ≥18 for the diagnosis; borderline typically declares itself 18–35; schizoid apparent from early childhood.",
    indianNotes: "The cultural-relativity duty is the Indian clinic's daily discipline: deference to elders, joint-family decision-making and religious observance read as 'dependent' or 'anankastic' to a checklist; the Oxford rule (marked deviation beyond the culture's average) protects normal patterns; conversely, do not let cultural cover hide genuine, distressing disorder.",
  },
  etiology: [
    { category: "biological", factor: "Polygenic trait architecture (the honest tier)", details: "D4DR long-repeat allele: ~10% of novelty-seeking's genetic variance, replications inconsistent; 5-HTT short variant: 3–4% of neuroticism's total variance (7–9% of genetic); roughly 10–15 genes of similar weight might underlie neuroticism's heritability; the lesson: no gene test for personality exists." },
    { category: "biological", factor: "MAO-A × childhood abuse", details: "The gene-environment interaction: only abused children carrying the low-activity promoter variant show elevated later antisocial and violent behaviour; the Dutch null-mutation family and knockout mice bracket the finding." },
    { category: "biological", factor: "Affiliation biology", details: "Oxytocin, opioid, prolactin and vasopressin systems mediate attachment; prairie-vole V1a-receptor gene transfer moves monogamous bonding patterns between species; socially deprived monkeys differ from mother-reared in nearly every adult social measure: deprivation in the first 6–9 months persists for life; poor or distorted affiliative behaviour is the single most predictive marker of personality disorder diagnosis." },
    { category: "biological", factor: "Borderline neurocircuitry", details: "Amygdala sensitisation with insufficient cingulate/prefrontal regulation; high basal cortisol with blunted challenge response in the impulsive-suicidal tier; family mood-disorder loading (not schizophrenia) in borderline pedigrees." },
    { category: "psychological", factor: "Developmental trauma loading", details: "Childhood sexual and physical abuse and neglect strongly over-represented in borderline histories; attachment failures in early development; harsh criticism and impossible expectations feed narcissistic and anankastic patterns; contradictory parenting feeds passive-aggression." },
    { category: "social", factor: "The antisocial developmental stack", details: "Parental deprivation, inconsistent care, family violence and severe physical abuse as predictors; childhood hyperactivity predicting adult antisociality; social disintegration producing EPISODIC antisocial behaviour (normal adaptation to abnormal environment), but the early-onset pervasive pattern cannot be reduced to social determinants." },
  ],
  symptomClusters: [
    {
      category: "1. Cluster A: the odd/eccentric signature",
      symptoms: ["Paranoid: reads hidden demeaning meanings into neutral remarks; doubts friends' loyalty; bears grudges persistently; pathologically jealous; reluctant to confide ('information will be used against me'): quick, rigid anger when threats are perceived; brief quasi-psychotic episodes under stress; the 'fanatic' subtype adds crusading grievance", "Schizoid: chooses solitary activities; pleasure in few activities; lacks close friends; indifferent to praise or criticism; emotionally cold and detached; little interest in sex or intimacy; silently attached to a few family members", "Schizotypal: ideas of reference (never reaching delusional conviction); odd beliefs and magical thinking (sixth sense, telepathy, rituals to ward off harm); unusual perceptual experiences (shadows becoming figures); odd, digressive, vague speech; inappropriate or constricted affect; social anxiety that does NOT diminish with familiarity (paranoid-based, unlike avoidant)"],
    },
    {
      category: "2. Cluster B: the dramatic/erratic signature",
      symptoms: ["Antisocial: disregard for others' rights without remorse; deceitfulness, manipulativeness, glib charm; recklessness unaffected by punishment; incapacity for guilt; conduct disorder before 15 + age ≥18; suicide threats common; HIV risk through substance use and promiscuity", "Borderline: frantic efforts to avoid abandonment; idealisation-devaluation; identity diffusion with chronic emptiness ('I don't know who I am'); impulsive self-aggression; dysphoric irritated mood mixing depression, anger, loneliness; transient stress-related paranoid ideas or dissociative-like episodes (minutes-hours, following affective shifts); rejection sensitivity", "Histrionic: uncomfortable when not the centre of attention; rapidly shifting shallow emotions; impressionistic speech lacking detail; self-dramatisation; suggestibility; relationships considered more intimate than they are; sexualisation of non-sexual relationships", "Narcissistic: grandiose self-importance; need for admiration; lack of empathy; entitlement; exploitation; envy and haughty arrogance: the 'hungry, inferior real self' behind the compensatory grandiose self; vengeful rage when the mirror fails"],
    },
    {
      category: "3. Cluster C: the anxious/fearful signature",
      symptoms: ["Avoidant: avoids interpersonal contact for fear of criticism; unwilling to get involved unless certain of being liked; restrained in intimacy (fear of shame/ridicule); self-viewed as inept and inferior; open IN INTERVIEW once rapport is established (the paradox: easier to talk to a doctor than to a party)", "Dependent: everyday decisions need excessive advice; cannot initiate projects alone; volunteers for unpleasant tasks to secure nurturance; helpless when alone; urgently seeks a new relationship when one ends; tolerates abuse rather than lose the attachment", "Anankastic: orderliness, rules, lists, schedules; perfectionism that INTERFERES with task completion; work to the exclusion of leisure; cannot discard worthless objects; cannot delegate ('no one does it as well as I'); indecisive without structured guidelines; constricted affect (labels feelings, cannot display them); indirect aggression (the small tip, the withheld favour)"],
    },
    {
      category: "4. The beyond-the-ten tier",
      symptoms: ["Passive-aggressive (negativistic): removed from DSM-IV main text (Appendix B, never in ICD); procrastination, stubborn resistance, 'forgotten' obligations, sullen argumentativeness, feeling misunderstood and unappreciated, caustic complaints, martyrdom", "Self-defeating (masochistic): also provisionally dropped; persistently seeking humiliation and failure, choosing abusive partners, undermining achievements, responding to success with depression", "Depressive and cyclothymic temperament tiers and the organic boundary live in their own chapters (the overview's differential)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-IV/ICD-10 logic (paraphrased)",
      code: "The ten types (the gating architecture)",
      criteria: [
        "Antisocial PD's two gates: evidence of conduct disorder before age 15, and age ≥18 for the diagnosis; ICD's 'dissocial' adds low frustration tolerance and inability to profit from punishment.",
        "Borderline: affective instability + impulsivity + unstable self-identity; the triad the discrimination table runs on; Stern (1938) coined the term for the neurosis-psychosis border; DSM-III separated it from schizotypal.",
        "Schizotypal: cognitive-perceptual distortions PLUS eccentricity, and the cultural caution (essential in India): mind-reading, evil eye, shamanic and possession beliefs normal in a subculture must NOT be labelled schizotypal.",
        "Narcissistic: grandiosity, admiration-need, empathy-lack, not a formal ICD-10 category (sits under 'other specific PDs').",
        "The general rule (the overview's definition) applies to every type: ≥2 of four domains, pervasive, early, stable, impairing; type assignment adds the specific content.",
      ],
      duration: "Lifelong patterns with the documented course rules (improve vs decompensate); borderline's diagnosis becomes rare after 40.",
      indianNote: "Indian records run ICD: EUPD (impulsive/borderline subtypes), dissocial, anankastic, anxious. The two exam-drill lines: schizoid diagnoses exploded ~800% between DSM editions (criteria change, not prevalence); histrionic's equal sex rates contradict the stereotype the name carries.",
    },
    {
      system: "Kernberg (the organisation tier)",
      code: "Borderline personality organisation",
      criteria: [
        "Identity diffusion: contradictory self-representations, chronic emptiness, the unblended inner files.",
        "Primitive defences: splitting, projective identification, primitive idealisation/devaluation.",
        "INTACT reality testing: the line that separates organisation from psychosis, and makes it BROADER than the DSM borderline category (it can underlie narcissistic, histrionic and antisocial severe forms too).",
        "Malignant narcissism (the extreme end): narcissistic PD + antisocial behaviour + ego-syntonic sadism + paranoid orientation.",
      ],
      duration: "A level of psychological architecture, stable until worked with: the tier the transference-focused therapy (the treatment course) targets.",
      indianNote: "The concept travels to Indian exams as 'borderline personality organization vs borderline personality disorder': the viva distinction between Kernberg's architectural level and the DSM category.",
    },
  ],
  severityScales: [
    {
      name: "The discrimination table",
      fullName: "The pairwise differentiators that decide prescriptions and referrals",
      measures: "Not a scored instrument but the clinic's real staging tool: the pairs below are where misdiagnosis costs treatment years.",
      ranges: [
        { min: 0, max: 0, severity: "Borderline vs bipolar II", action: "Bipolar: sadness/apathy alternating with euphoria, episodes, decreased sleep need. BPD: minutes-to-hours reactivity, dysphoria + anger, triggered by interpersonal rejection, no true elation" },
        { min: 1, max: 1, severity: "Borderline vs schizotypal", action: "BPD: brief, dissociative-like, follow affective shifts. Schizotypal: persistent odd beliefs/perceptions, odd speech" },
        { min: 2, max: 2, severity: "Borderline vs antisocial", action: "Borderline: affects, self-harm, capacity for (chaotic) intimacy, some remorse. Antisocial: calculated exploitation, no remorse, no genuine attachment" },
        { min: 3, max: 3, severity: "Avoidant vs schizoid", action: "Both isolated: avoidant WANTS closeness, hurts without it, fears criticism; schizoid indifferent, no desire" },
        { min: 4, max: 4, severity: "Dependent vs borderline (both fear abandonment)", action: "Dependent: submissive, appeasing, hunts the next carer. Borderline: rage, emptiness, demanding" },
        { min: 5, max: 5, severity: "Narcissistic vs borderline", action: "Grandiosity, better impulse control, fewer suicide attempts: the best single discriminator" },
        { min: 6, max: 6, severity: "Anankastic vs OCD", action: "Ego-syntonic order/control (endorsed) vs ego-dystonic obsessions-compulsions (fought against), and most OCD patients do NOT have the personality, nor vice versa" },
        { min: 7, max: 7, severity: "Paranoid vs delusional disorder", action: "Suspicious interpretations never reach fixed delusional conviction" },
      ],
      indianNote: "The bipolar-borderline row is the highest-value discrimination in the Indian OPD. Apply it before the third mood-stabiliser escalation, with the relative-informant history as the evidence base.",
    },
    {
      name: "Course-outcome staging",
      fullName: "The age-trajectory map of the ten types",
      measures: "The prognosis axis examiners reward: which types burn down, which break late, which never relax.",
      ranges: [
        { min: 0, max: 0, severity: "Improve with age", action: "Antisocial (most pronounced early, declining); borderline (rare after 40, 88% 10-year remission); histrionic ('maturation of infantilism'); avoidant (softens in older age)" },
        { min: 1, max: 1, severity: "Decompensate late", action: "Narcissistic (middle-age depression or defensive hypomania as supplies dry up; hypochondriasis and anxiety complications); anankastic (late-onset depression when control is lost, the classic)" },
        { min: 2, max: 2, severity: "Run stable", action: "Paranoid and schizoid (the long constants); schizotypal (with the psychosis-progression tier in some); dependent (catastrophic only at attachment loss)" },
        { min: 3, max: 3, severity: "The mortality tier", action: "Borderline: 8–10% die by suicide; every gesture taken seriously; antisocial: HIV risk through substance use and promiscuity" },
      ],
      indianNote: "The Indian family's question 'will she get better with age?' has an evidence-based answer for the borderline tier (yes, mostly): hope with numbers, the treatment course's founding data.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Bipolar II disorder", distinguishingFeatures: "Sustained episodes (days-weeks) with true elation or hypomania and decreased sleep need.", keyDifferentiator: "Borderline reactivity runs minutes-to-hours, dysphoria-to-anger, triggered by rejection, and can coexist with bipolar, which is why longitudinal history beats any single visit." },
    { condition: "Delusional disorder (vs paranoid PD)", distinguishingFeatures: "Fixed delusional conviction with systematisation.", keyDifferentiator: "The paranoid personality's interpretations never reach fixed delusional conviction: the line the Cluster A differential holds." },
    { condition: "Schizophrenia (vs schizoid/schizotypal)", distinguishingFeatures: "Frank psychosis, functional collapse, negative symptoms.", keyDifferentiator: "Schizoid has better occupational functioning and no psychosis; schizotypal's oddness never crosses into sustained delusion, though some progress (the premorbid-state tier)." },
    { condition: "Autism-spectrum conditions (vs schizoid)", distinguishingFeatures: "Early social-communication differences with restricted interests, developmental history.", keyDifferentiator: "Schizoid personality: normal early development with a chosen, stable adult detachment; autism: neurodevelopmental from the first years." },
    { condition: "OCD (vs anankastic PD)", distinguishingFeatures: "Ego-dystonic obsessions and compulsions, resisted by the patient.", keyDifferentiator: "The anankastic ENDORSES the standards, and most OCD patients do not have the personality, nor vice versa (the developmental link is controversial)." },
    { condition: "Social phobia (vs avoidant PD)", distinguishingFeatures: "Circumscribed performance and social fears.", keyDifferentiator: "Arguably the same condition as avoidant PD: impairment greater and onset earlier in the personality form; the avoidant fears criticism globally, the schizoid does not want contact at all." },
    { condition: "Dissocial PD (vs episodic antisocial behaviour)", distinguishingFeatures: "Situational criminality in abnormal environments.", keyDifferentiator: "Social disintegration produces episodic antisocial behaviour (a normal adaptation to an abnormal environment); the early-onset pervasive pattern with conduct history before 15 is the disorder." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "One gesture per type (the full programmes live in the treatment course)",
      description: "Paranoid: acceptance is the bottleneck; gain confidence, never confront the suspicion system directly; low-dose antipsychotics only for quasi-psychotic stress episodes. Schizoid: rarely seek help; respect the chosen distance while enlarging functioning; social skills training. Schizotypal: low-dose antipsychotics for cognitive-perceptual symptoms; antidepressants for depressive presentations; long patience. Antisocial: treat comorbidity; SSRIs/lithium/anticonvulsants for aggression (modest); therapeutic communities offer the best evidence; forensic coordination. Borderline: psychotherapy core (DBT for suicidality/impulsivity; structured dynamic therapy; supportive + psychoeducation for fragile patients). Histrionic: limit-setting without rewarding dependency. Narcissistic: supportive phase first, interpretations delayed until secure attachment. Avoidant: combined medication with assertiveness training, cognitive restructuring, exposure-like social practice. Dependent: therapy that deliberately avoids recreating the dependency. Anankastic: cognitive therapy of perfectionism; watch for late-onset depression.",
      whenToUse: "Type assignment determines the gesture at diagnosis; escalation to full programmes follows the treatment course's evidence.",
      indianContext: "The Indian OPD's realistic tier: the gesture plus the organised plan (named clinician, crisis card, scheduled follow-up). DBT-informed groups where reachable; the family recruited as the therapeutic instrument rather than excluded as the suspect.",
    },
    {
      category: "pharmacotherapy",
      name: "Symptom-targeted pharmacology (the pointer tier)",
      description: "No drug treats a personality type. The symptom-tier gestures: SSRIs for impulsive aggression (fluoxetine's signal); low-dose antipsychotics for cognitive-perceptual symptoms (schizotypal, paranoid stress episodes); mood-stabiliser/anticonvulsant tier for aggression (modest); the honest audit and the 4–8-week time-limited trial discipline live in the treatment course.",
      whenToUse: "Symptoms, not types; time-limited, one at a time, with written review-or-stop dates.",
      indianContext: "The Indian prescribing-culture check: benzodiazepines are CONTRAINDICATED in antisocial PD (behavioural disinhibition, the exam-ready caution) and every prescription needs the misuse question asked in a system where pharmacy dispensing runs without prescriptions.",
    },
    {
      category: "lifestyle",
      name: "The safety and course package",
      description: "The 8–10% borderline suicide mortality means every gesture taken seriously and every review re-screened; the antisocial HIV-risk tier (substance use, promiscuity) earns the harm-reduction conversation; the late-decompensation types (narcissistic, anankastic) earn scheduled mid-life reviews for the depression that arrives with lost control and dried-up supplies.",
      whenToUse: "Continuous: the course rules built into every follow-up plan.",
      indianContext: "The marriage-market and employment stakes make disclosure management an Indian clinical skill in its own right: the destigmatising working explanation the overview course delivers.",
    },
  ],
  safety: {
    redFlags: [
      "Self-harm escalation or any suicidal gesture in borderline presentations: 8–10% lifetime mortality, no gesture dismissed as 'manipulative'",
      "Antisocial PD with substance use: the HIV-risk tier (promiscuity, injection) and the violence trajectory",
      "Brief quasi-psychotic episodes under stress in paranoid and schizotypal presentations: re-evaluate, do not re-label as schizophrenia from a single episode",
      "The abusive-partner tolerance of the dependent tier: the safety question asked directly, repeatedly, and without the family present",
      "Middle-age decompensation in narcissistic and anankastic presentations: depression and suicidality arriving as supplies dry and control is lost",
    ],
    urgentGuidance:
      "The order of operations: (1) treat the presenting emergency fully (the overdose, the violence, the depressive episode); (2) run the discrimination table before diagnostic escalation, especially the bipolar-borderline fork before the third mood stabiliser; (3) the borderline safety architecture: crisis card, named clinician, scheduled (not crisis-driven) follow-up, every gesture taken seriously; (4) the dependent-tier abuse screen conducted one-to-one; (5) mid-life decompensation reviews for the late-breaking types; (6) forensic coordination where risk lives in the dissocial tier: the DSPD logic's clinical echo.",
  },
  drugLinks: [
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The impulsive-aggression tier's best signal (borderline-type presentations)",
      rationale: "Fluoxetine outperformed placebo for aggression and impulsivity in borderline trials (fluvoxamine helped mood only): the SSRI tier the serotonergic-brake biology predicts; the treatment course carries the full audit and the time-limited-trial discipline.",
      evidenceLevel: "systematic-review",
      clinicalDisclaimer: "No drug is licensed for personality disorder; the SSRI gesture is symptom-targeted and time-limited (4–8-week reviewed trials), never a treatment of the personality.",
    },
  ],
  contentGaps: [
    "Topiramate (the best anti-aggression signal in the audit), aripiprazole (one encouraging 15 mg trial), olanzapine, lithium, carbamazepine and the MAOI phenelzine have no KYP drug lessons. The treatment course carries their evidence; recorded here, never invented.",
    "Benzodiazepines: the antisocial-PD contraindication (behavioural disinhibition); have no KYP lesson; the caution is taught in the treatment course.",
    "Low-dose antipsychotics for schizotypal cognitive-perceptual symptoms: no KYP antipsychotic lesson yet (the schizophrenia course records the same gap).",
  ],
  patientGuide: {
    whatIsIt:
      "There are ten long-recognised personality-disorder patterns, grouped in three families: the odd/eccentric family (deep suspicion, chosen solitude, unusual beliefs); the dramatic/erratic family (impulsive disregard for others, stormy emotions and relationships, attention-seeking theatre, grandiosity); and the anxious/fearful family (fear of criticism and rejection, need to be cared for, perfectionist control). A personality disorder is diagnosed when a pattern like one of these has been present since youth, shows up across most areas of life, and causes real distress or impairment. It is not a character flaw. The patterns have genetic and developmental roots, and every one of them has a treatment gesture that helps.",
    whatCausesIt:
      "A mix of inherited temperament and early experience. Genes contribute modestly across many players (no single 'personality gene' exists. The science is honest about this). Early adversity matters powerfully in the dramatic family: abuse and neglect raise borderline risk. Attachment experiences shape the anxious family. The famous research finding: risk emerges from gene-AND-environment interaction; abused children carrying one particular gene variant had higher rates of adult antisocial behaviour, while neither the gene nor the abuse alone predicted it.",
    symptoms:
      "Each pattern has its own signature: reading insults into neutral remarks and never confiding (suspicious); preferring solitude with no desire for closeness (detached); odd beliefs and experiences that stop short of delusion (eccentric); lifelong rule-breaking without remorse since the teens (dissocial); minutes-to-hours emotional storms with self-harm and frantic fear of abandonment (borderline); needing to be the centre of every room (histrionic); grandiosity with a hunger for admiration (narcissistic); avoiding people because criticism feels unbearable despite craving connection (avoidant); being unable to decide or act without someone taking charge (dependent); perfectionism and control that prevent finishing anything and squeeze out joy (anankastic).",
    treatment:
      "Each type has a treatment gesture: building trust before anything else (suspicious), respecting chosen distance while expanding function (detached), patience plus low-dose medication for distressing unusual experiences (eccentric), structured programmes with therapy at the core (dramatic family), and combination approaches of therapy plus confidence-building (anxious family). Medicines treat states within the disorder (the depressive episodes, the rage spikes, the impulsive urges) in short, reviewed courses; no tablet rewrites a personality. The companion course on treatment carries the full evidence.",
    selfHelp: [
      "Track the pattern across situations and years: the map the therapy will use, written by the person who knows it best.",
      "One trusted relative's account ('always been like this since school') is diagnostic material: bring them, and give written consent for the clinician to listen.",
      "For the dramatic family: a written crisis plan (whom to call, which strategies first) genuinely reduces emergencies. Ask for it by name.",
      "For the anxious family: small, scheduled social exposures built with the therapist, not heroic leaps.",
      "Expect the age-trajectory to work for you where it applies: several patterns soften with time and treatment.",
      "If substances are in the picture, say so plainly: the combination changes both the risk and the plan.",
    ],
    whenToSeekHelp: [
      "Any self-harm, overdose or suicidal thought: same-day help (Tele-MANAS 14416, free, 24×7, multiple Indian languages)",
      "Relationships or work destroying themselves in the same pattern again. The signal that assessment is due",
      "Middle-age low mood with lost control or status in a long-perfectionist or grandiose pattern: the classic late-decompensation window",
      "The family at exhaustion: carer support is treatment territory too",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "General psychiatry OPDs: the organised plan (named clinician, scheduled follow-up, crisis card) is the realistic Indian tier and it works",
      "DBT-informed groups at NIMHANS and a few major centres",
      "Medical-college psychiatry departments for crisis-structured referral",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline; management follows the international evidence (the treatment course's programmes) with ICD terminology on Indian case notes: EUPD (impulsive/borderline), dissocial, anankastic, anxious. Indian exams follow ICD phrasing. The translation drill is mandatory local knowledge.",
    systemContext: "The Indian OPD's signature distortions: the bipolar-borderline conflation (young women with rapid reactive mood shifts and self-harm over-diagnosed as 'rapid-cycling bipolar' and over-treated with mood stabilisers, the highest-value discrimination in Indian practice); dissocial presentations read as pure substance use; Cluster C surfacing through matrimonial, occupational and somatic doors; Cluster B dominating admissions through self-harm and family crisis.",
    programmeContext: "Dedicated PD programmes are scarce. NIMHANS and a few centres run DBT-informed therapy; the realistic pathway is structured general-psychiatry care with clear crisis plans, planned follow-up and family psychoeducation. Tele-MANAS 14416 carries the crisis-call tier.",
    costConsiderations: "The type-specific gestures are mostly psychological and behavioural (trust-building, limit-setting, assertiveness work, cognitive restructuring of perfectionism): the low-cost tier Indian OPDs can deliver with training; where medication is symptom-targeted, generic SSRIs are inexpensive; the anti-aggression tier (topiramate and peers) is affordable but needs the supervised, time-limited discipline the treatment course teaches.",
    culturalConsiderations: "Cultural relativity is a diagnostic duty: deference to elders, joint-family decision-making, arranged-marriage adjustments and religious observance can look 'dependent' or 'anankastic' to a checklist; diagnose only the marked deviation beyond the culture's average, and never let cultural cover hide genuine disorder. Schizotypal's cultural caution is the sharpest: mind-reading, evil eye, shamanic and possession beliefs normal in a subculture must NOT be labelled; the Indian clinic's most-tested cultural rule. The marriage-alliance economy makes label-management an explicit clinical skill.",
    patientCounselling: [
      "The bipolar-vs-borderline explanation families actually need: 'her moods change within hours when she feels rejected. That pattern has a different name and a different treatment from bipolar disorder, and the family history interview settles it'.",
      "The age-trajectory conversation: several patterns genuinely soften with time and treatment; hope with numbers for families exhausted by the dramatic cluster.",
      "The cultural-average script for worried joint families: 'deference and devotion are our normal; what we treat is the pattern that damages: markedly, everywhere, since youth'.",
      "The schizotypal cultural caution taught forward: the distinguishing question is not whether a belief is unusual, but whether it is shared by the person's community and whether it impairs.",
      "The disclosure-management conversation before the marriage-market tier: what goes in the file, what the family hears, and how the working explanation keeps both honest.",
    ],
  },
  decisionPath: {
    title: "Typing the pattern",
    nodes: [
      {
        id: "start",
        question: "A longitudinal pattern is established (the overview's gate passed). Which family does the texture belong to?",
        branches: [
          { label: "Odd/eccentric texture (suspicion, solitude, unusual beliefs)", next: "cluster-a" },
          { label: "Dramatic/erratic texture (impulsivity, storms, theatre, grandiosity)", next: "cluster-b" },
          { label: "Anxious/fearful texture (avoidance, dependency, control)", next: "cluster-c" },
        ],
      },
      {
        id: "cluster-a",
        question: "Cluster A: which oddness?",
        branches: [
          { label: "Suspicion and grudge-keeping, never delusional conviction", next: "paranoid-path" },
          { label: "Detachment with NO desire for closeness", next: "schizoid-path" },
          { label: "Eccentricity + odd beliefs/perceptions; cultural check first", next: "schizotypal-path" },
        ],
      },
      {
        id: "cluster-b",
        question: "Cluster B: run the bipolar fork FIRST if mood swings dominate.",
        branches: [
          { label: "Minutes-to-hours reactive dysphoria + self-harm + identity chaos", next: "borderline-path" },
          { label: "Conduct before 15 + age ≥18 + calculated exploitation without remorse", next: "antisocial-path" },
          { label: "Theatre, attention-need, shallow rapid emotions", next: "histrionic-path" },
          { label: "Grandiosity + admiration-need + empathy-lack", next: "narcissistic-path" },
        ],
      },
      {
        id: "cluster-c",
        question: "Cluster C: which fear?",
        branches: [
          { label: "Fears criticism; WANTS closeness; open once rapport forms", next: "avoidant-path" },
          { label: "Fears loss of care; submissive; hunts the next carer", next: "dependent-path" },
          { label: "Controls the outer world to manage an insecure inner one; endorses the standards", next: "anankastic-path" },
        ],
      },
      {
        id: "borderline-path",
        question: "Borderline organisation confirmed (identity diffusion, splitting, intact reality testing).",
        recommendation: "The safety architecture first (crisis card, named clinician, 8–10% mortality respected); psychotherapy as the core with DBT-informed skills where reachable; symptom-targeted, time-limited pharmacology (the SSRI-impulsivity tier, the treatment course's audit); treat comorbid depression and substance use as they arrive; the age-trajectory quoted as hope with numbers.",
      },
      {
        id: "antisocial-path",
        question: "Dissocial PD confirmed.",
        recommendation: "Treat comorbidity aggressively (substance use above all); forensic coordination where risk lives; therapeutic-community referral where reachable; the aggression tier modest (SSRIs/lithium/anticonvulsants); BENZODIAZEPINES CONTRAINDICATED (behavioural disinhibition); plan for the age-decline (maturation trades aggression for depression, the mid-life review tier).",
      },
      {
        id: "paranoid-path",
        question: "Paranoid PD confirmed.",
        recommendation: "Acceptance is the bottleneck: confidence-building, never direct confrontation of the suspicion system; psychoeducation for the family (do not escalate perceived threats); low-dose antipsychotics only for quasi-psychotic stress episodes; long-term consistent care with one named clinician.",
      },
      {
        id: "schizoid-path",
        question: "Schizoid PD confirmed.",
        recommendation: "Rarely seek help; respect the chosen distance while enlarging functioning; social skills training where wanted; low-dose antipsychotics occasionally useful; no forced engagement: the goal is function, not sociability.",
      },
      {
        id: "schizotypal-path",
        question: "Schizotypal PD confirmed, after the cultural check.",
        recommendation: "Cultural rule applied first (shared subcultural beliefs are not disorder); low-dose antipsychotics for ideas of reference and perceptual symptoms; antidepressants for depressive presentations; long, patient confidence-building in psychotherapy; watch the transient-psychosis tier under stress without relabelling as schizophrenia.",
      },
      {
        id: "histrionic-path",
        question: "Histrionic PD confirmed.",
        recommendation: "Limit-setting without rewarding the demanding dependency; treat depressive and anxiety symptoms; guard against medication misuse (the somatic preoccupation tier); the maturation trajectory quoted; crisis support for the suicide-attempt tier the course carries.",
      },
      {
        id: "narcissistic-path",
        question: "Narcissistic PD confirmed.",
        recommendation: "Supportive phase first: interpretations delayed until a confident attachment forms; manage countertransference deliberately (devaluation, demands); treat the middle-age depressions when supplies dry up; watch for the malignant-narcissism extreme (antisocial behaviour + ego-syntonic sadism + paranoid orientation).",
      },
      {
        id: "avoidant-path",
        question: "Avoidant (anxious) PD confirmed.",
        recommendation: "Combined medication (anxiolytic/antidepressant/beta-blocker tiers) with assertiveness training, cognitive restructuring of self-and-other distortions, graded exposure-like social practice; address the dependency needs underneath; the softens-with-age trajectory quoted as hope.",
      },
      {
        id: "dependent-path",
        question: "Dependent PD confirmed.",
        recommendation: "Therapy that deliberately AVOIDS recreating the dependency (the therapist must not become the next person they cannot leave); autonomy-building and decision-making practice; drugs only for the depression and anxiety of losses; the abuse-tolerance screen conducted one-to-one and repeatedly.",
      },
      {
        id: "anankastic-path",
        question: "Anankastic PD confirmed.",
        recommendation: "Cognitive therapy of perfectionism, rigidity and failure-intolerance as the mainstay; benzodiazepines for doubt-and-scruple tension when needed; the LATE-ONSET DEPRESSION watch scheduled into every mid-life review (control-loss is the trigger, retirement, illness, promotion); treat the episode first, the style patiently.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing bipolar disorder in every young woman with rapid mood shifts and self-harm",
      why: "The Indian OPD's commonest consequential error: borderline reactivity misread as rapid cycling sends the patient into escalating mood-stabiliser polypharmacy that keeps failing.",
      correction: "The fork question: do the moods run minutes-to-hours (dysphoria-to-anger, rejection-triggered) or days-to-weeks (with true elation and decreased sleep need)? Then the relative-informant history settles the rest.",
    },
    {
      mistake: "Labelling subcultural beliefs as schizotypal",
      why: "Mind-reading, evil eye, possession and shamanic beliefs are normal in many Indian communities: the checklist applied without cultural calibration manufactures false diagnoses.",
      correction: "The two questions: is the belief shared by the person's community, and does it impair? Shared-and-non-impairing is culture; odd-plus-impairing-plus-detached earns the assessment.",
    },
    {
      mistake: "Prescribing benzodiazepines for agitation in dissocial personality disorder",
      why: "Behavioural disinhibition: the classic exam-ready caution and a real-ward danger.",
      correction: "The aggression tier runs SSRIs/lithium/anticonvulsants (modest, supervised); environmental structure and forensic coordination carry the risk; benzos exit the plan.",
    },
    {
      mistake: "Confusing anankastic personality with OCD (or treating one as the other)",
      why: "The anankastic ENDORSES the standards (ego-syntonic) and most OCD patients lack the personality: the treatment architectures differ.",
      correction: "The one-line discriminator: does the person fight their symptoms (OCD) or defend them (the personality)? Serotonergic doses and therapy framing follow the answer.",
    },
    {
      mistake: "Dismissing self-harm as 'manipulative' in borderline presentations",
      why: "The 8–10% lifetime suicide mortality does not distinguish 'manipulative' from serious gestures. The dismissal is the risk factor.",
      correction: "Every gesture taken seriously; the crisis card and scheduled follow-up replace the dismissive-escalation cycle; the suicide screen at every contact.",
    },
    {
      mistake: "Reading the schizoid as suffering loneliness, or forcing engagement",
      why: "The schizoid does not want closeness; the avoidant does, confusing the two produces forced-socialisation plans that harm one and miss the other.",
      correction: "The wants-closeness question separates them; the schizoid's treatment enlarges functioning within the chosen distance, not sociability by decree.",
    },
    {
      mistake: "Forgetting the late-decompensation types at mid-life review",
      why: "Narcissistic and anankastic patterns break DOWN in middle/late life (depression, hypochondriasis): the 'strong' patient and the 'perfect' patient both go unwarned.",
      correction: "Schedule the mid-life reviews: control-loss (retirement, illness, bypass) for the anankastic; supplies-drying (status, looks, admiration) for the narcissistic: depression screened at each.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The ten types with one clinical sentence each; the three clusters with nicknames.",
        "Borderline PD: the triad, the suicide figure, the bipolar discrimination.",
        "Avoidant vs schizoid vs social phobia: the wants-closeness fork.",
        "Anankastic vs OCD: ego-syntonicity.",
        "The antisocial gates (conduct before 15, age ≥18) and the benzo contraindication.",
      ],
      practical: [
        "Present a typed personality case with the discrimination table applied: the bipolar fork demonstrated explicitly.",
        "Demonstrate the cultural-relativity rule in the Indian case discussion (schizotypal caution especially).",
      ],
      longAnswer: [
        "Borderline personality disorder: clinical features, course and management; the evergreen.",
        "Classify personality disorders with one distinguishing feature and one treatment gesture per type.",
      ],
    },
    neetPg: {
      highYield: [
        "Cluster mnemonics: A weird (paranoid-schizoid-schizotypal); B wild (antisocial-borderline-histrionic-narcissistic); C worried (avoidant-dependent-obsessive-compulsive).",
        "Antisocial PD: age ≥18 + conduct disorder before 15; ICD's 'dissocial' adds low frustration tolerance and inability to profit from punishment; benzos contraindicated.",
        "The 8–10% borderline suicide figure: quote it, and the 'every gesture seriously' rule; diagnosis rare after 40.",
        "Kernberg triad: identity diffusion + primitive defences (splitting, projective identification) + intact reality testing = borderline ORGANISATION, broader than the DSM category.",
        "Genetics one-liners: D4DR-novelty-seeking (~10% genetic variance, weak replications); 5-HTT short-neuroticism (3–4% variance); MAO-A × abuse (the gene-environment interaction); V1a receptor (prairie-vole monogamy transfer); low CSF 5-HIAA (impulsive aggression).",
        "Course rules: antisocial declines with age; borderline/histrionic/avoidant improve; narcissistic and anankastic decompensate mid-late life.",
        "Grandiosity = the narcissistic-borderline discriminator; wants-closeness = the avoidant-schizoid discriminator; ego-syntonicity = the anankastic-OCD discriminator.",
        "Schizotypal: 14.6% in schizophrenia relatives; social anxiety that does NOT diminish with familiarity (paranoid-based).",
        "Dependent vs borderline abandonment: appeasing-hunting vs rage-emptiness-demanding.",
        "Histrionic: equal sex rates in community data; the stereotype-killer; Akhtar's healthier-hysterical vs sicker-histrionic distinction.",
      ],
      pyqConcepts: [
        "The bipolar-borderline discrimination as the short-note favourite (and the Indian exam corner: EUPD subtypes, impulsive and borderline).",
        "Malignant narcissism: narcissistic PD + antisocial behaviour + ego-syntonic sadism + paranoid orientation.",
        "Passive-aggressive and self-defeating personalities: the provisionally dropped tier (Appendix B; never in ICD).",
        "Schneider's ten psychopathic personalities as the historical root of the modern types.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 22-year-old student in her third psychiatric consultation with cut wrists since 16, three overdoses, a best friend 'perfect' until last month then 'evil', an engagement broken and re-broken twice, chronic emptiness, two hours of paranoid feelings after her boyfriend ignored her messages, and previous files saying 'bipolar affective disorder' on valproate with no sustained elevation ever documented: the re-formulation to EUPD (borderline type), the valproate reassessment, the crisis card and scheduled follow-up architecture, DBT-informed referral with family psychoeducation.",
        "A 58-year-old bank officer referred for 'depression' after being bypassed for promotion: cannot sleep, checks doors five times nightly, 20 years of bank statements he cannot discard, instruction lists no subordinate could follow, affection expressed as correction, and no true obsessions or compulsions because he ENDORSES his standards: anankastic PD with late-onset depression triggered by loss of control, treated episode-first with the perfectionism work and the structured-retirement plan following.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Cluster membership and nicknames; the ICD translation terms.",
        "Borderline: the triad and the suicide figure; the bipolar fork.",
        "Avoidant vs schizoid; anankastic vs OCD.",
        "Antisocial gates and the benzo contraindication.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The discrimination table is the daily instrument: borderline-vs-bipolar before every mood-stabiliser escalation; paranoid-vs-delusional before every antipsychotic commitment.",
        "Kernberg's organisation tier explains why the same patient carries 'narcissistic' and 'borderline' descriptors across files: the architecture level underlies several categories.",
        "The countertransference map is type-specific and predictable: the borderline's idealise-then-devalue, the narcissist's devaluation-of-the-therapist, the anankastic's data-gathering delay; anticipate it, supervise it, use it.",
        "The genetics honesty protects your teaching: effect sizes are modest, interactions are the story, and no genetic test exists; the exam answer and the clinic truth align.",
        "The Indian cultural-relativity duty runs BOTH directions at every Cluster C interview: normalise the normative, diagnose the impairing, and document the reasoning either way.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The Friday therapist and Monday's villain",
      presentation: "A notebook full of symptoms, three files of failed prescriptions, and a diagnosis that keeps changing with the doctor.",
      initialPresentation: "A 22-year-old student presented in her third psychiatric consultation carrying a notebook documenting her own course: cut wrists since age 16, three overdoses, a best friend 'perfect' until last month then abruptly 'evil', an engagement broken and re-broken twice, chronic emptiness ('I don't know who I am'), and two hours of paranoid feelings after her boyfriend ignored her messages at a party. Previous files read 'bipolar affective disorder' with two valproate prescriptions; no history of sustained elevation, decreased sleep need, or goal-directed hyperactivity existed anywhere in the record.",
      history: "Onset of self-harm at 16 after a family rupture; relationships following the idealise-then-devalue arc including two treating doctors; the emptiness described as 'intolerable, like being no one'; brief stress-linked paranoid episodes resolving within hours; no substance dependence; family informant (mother) confirms the pattern 'since school, everywhere, always the same shape'.",
      examination: "Warm, quick to trust within minutes; detailed and organised (the notebook); then, at the session's end, furious that it finished 'like everyone leaves': the idealise-devalue axis demonstrated live in one interview; no psychotic features between stress episodes; suicide screen positive for passive ideation with one prior gesture requiring medical attention.",
      diagnosis: "Emotionally unstable (borderline) personality disorder with comorbid depressive episodes: mislabelled as bipolar spectrum across two prior files.",
      management: "Re-formulation with the bipolar fork explicitly documented (minutes-to-hours reactive dysphoria, no true elation); valproate reassessed against the actual symptom record and tapered with a plan; the safety architecture: written crisis card (Tele-MANAS 14416 + clinic numbers), scheduled fortnightly brief appointments, suicide screen at every contact; referral into the hospital's DBT-informed group; family psychoeducation for the parents including the natural-course data (88% 10-year remission) and the 8–10% mortality treated with respect, not dread.",
      outcome: "Six months: attendance at 10 of 12 scheduled reviews; one overdose-level gesture managed through the crisis card as designed (helpline, same-week review, no admission); the mother reporting 'the first steady season in six years'; the file's diagnosis formally revised; the DBT skills vocabulary entering the family's daily language ('she uses her distress-tolerance words now').",
      teachingPoints: [
        "Idealisation-devaluation includes the treating clinician: the transference is the diagnosis demonstrated live, and the supervision topic.",
        "The 8–10% suicide mortality makes every gesture serious; the crisis card converts emergencies into same-week reviews.",
        "Structured, predictable care is itself an intervention, before any therapy brand shows an effect.",
      ],
    },
    {
      title: "The perfect clerk who could not retire",
      presentation: "Thirty years of perfect files, and then a promotion he did not get, and the machinery that ran his life seized.",
      initialPresentation: "A 58-year-old bank officer was referred for 'depression' after being bypassed for promotion; his wife reported he could not sleep, checked the doors five times nightly, and had become 'impossible; everything must be his way'. Systematic history documented the lifelong pattern: weekends worked, holidays unused in decades, subordinates given instruction lists no one could follow, 20 years of bank statements he could not discard, moralistic disapproval of colleagues' shortcuts, decisions deferred until 'all the data was in', and affection expressed as correction.",
      history: "No true obsessions or compulsions at any point: he ENDORSED his standards as correct and necessary; no mood episodes before the current one; the depression's onset tracks precisely the promotion decision and the approaching retirement date (the two control-loss events); family informant confirms the pattern since early working life, rewarded by the system ('most reliable officer in the branch').",
      examination: "Neat, punctual to the minute, pedantic circumstantial history (the monologue finished before questions answered); constricted affect with emotions labelled not shown ('I am moderately concerned'); no psychotic features; depressive features: insomnia, loss of interest in the work that defined him, hopelessness about retirement, no suicidal ideation on direct question (re-screen scheduled).",
      diagnosis: "Anankastic (obsessive-compulsive) personality disorder with late-onset depression triggered by loss of control.",
      management: "The depressive episode treated first (antidepressant with the anankastic's data-needs met: clear rationale, written timeline, scheduled review); cognitive work on perfectionism and catastrophe-anticipation; explicit planning of a STRUCTURED retirement (roles, routines, a defined daily architecture, unstructured time is the threat); the wife counselled on the pattern ('the correction was never criticism of you'); the mid-life review schedule set with the depression screen.",
      outcome: "Four months: sleep restored, the depressive episode resolved; the retirement architecture accepted with a part-time audit role and a fixed daily schedule; door-checking faded to once nightly; the couple's own line at review: 'the house runs on his timetable again, and now it is a timetable we agreed on'.",
      teachingPoints: [
        "The anankastic's decompensation arrives with unpredictable change: promotion, retirement, illness: the mid-life review tier scheduled in advance.",
        "Ego-syntonicity separates him from the OCD patient: he endorses the standards; treat the episode first, the style patiently.",
        "Structured time is the treatment, not the concession: the retirement plan is therapy.",
      ],
    },
  ],
  clinicalPearls: [
    "Ten types, three clusters: A odd (paranoid, schizoid, schizotypal); B dramatic (antisocial, borderline, histrionic, narcissistic); C anxious (avoidant, dependent, anankastic).",
    "The bipolar fork: minutes-to-hours reactive dysphoria (borderline) vs days-to-weeks with true elation and decreased sleep need (bipolar); the Indian OPD's highest-value discrimination.",
    "Antisocial PD: conduct before 15 + age ≥18; benzos contraindicated (disinhibition); 47% of prisoners; declines with age.",
    "Borderline: the triad (affective instability + impulsivity + identity diffusion); 8–10% suicide mortality; rare after 40; DBT the suicidality answer.",
    "Kernberg: identity diffusion + primitive defences + intact reality testing = borderline organisation (broader than the DSM category); malignant narcissism is the extreme end.",
    "Avoidant vs schizoid: wants closeness and fears criticism vs indifferent to it; the wants-closeness fork.",
    "Anankastic vs OCD: ego-syntonic endorsement vs ego-dystonic resistance, and most OCD patients do not have the personality, nor vice versa.",
    "Genetics honesty: D4DR ~10% (mixed replications); 5-HTT short 3–4%; MAO-A × abuse the interaction model; no genetic personality test exists.",
    "Course rules: antisocial/borderline/histrionic/avoidant improve with age; narcissistic and anankastic decompensate mid-late (depression, hypochondriasis).",
    "Histrionic: equal sex rates in community data; the stereotype-killer examiners love.",
  ],
  highYieldSummary: [
    "Cluster A (odd): paranoid (suspicion without delusional conviction, grudge-keeping, rarely self-presents); schizoid (detachment without desire for closeness, better occupational function than schizophrenia); schizotypal (odd beliefs + perceptual distortions + social anxiety that does not abate with familiarity; 14.6% of schizophrenia relatives; cultural check mandatory).",
    "Cluster B (dramatic): antisocial (conduct <15 + age ≥18; no remorse; 47% of prisoners; HIV-risk tier; declines with age; benzos contraindicated); borderline (the triad + frantic abandonment avoidance + transient stress-linked paranoia; 8–10% suicide mortality; rare after 40; 88% 10-year remission); histrionic (attention-need, shallow rapid emotions, impressionistic speech; equal sex rates); narcissistic (grandiosity the discriminator; not formal ICD-10; mid-life decompensation as supplies dry).",
    "Cluster C (anxious): avoidant (wants closeness, fears criticism; open in interview once rapport forms; up to 10% of clinical samples); dependent (fears loss of care; submissive and appeasing at abandonment: contrast borderline's rage; tolerates abuse; no real sex difference on structured interview); anankastic (ego-syntonic perfectionism that interferes with completion; hoarding; cannot delegate; indirect aggression; late-onset depression with control-loss).",
    "The discrimination table: bipolar vs borderline (duration + elation + trigger); avoidant vs schizoid (desire); dependent vs borderline at abandonment (appeasement vs rage); narcissistic vs histrionic (admiration-for-superiority vs attention-with-empathy); narcissistic vs borderline (grandiosity, impulse control, fewer attempts); anankastic vs OCD (syntonic vs dystonic); paranoid vs delusional disorder (interpretation vs conviction); schizotypal vs autism (odd beliefs vs developmental language dominance).",
    "Genetics with honest effect sizes: D4DR long-repeat ≈ 10% of novelty-seeking's genetic variance (replications inconsistent); 5-HTT short variant ≈ 3–4% of neuroticism's total variance; MAO-A low-activity × childhood abuse → adult antisocial behaviour (the interaction model, neither alone); V1a prairie-vole transfer (affiliation circuitry); low CSF 5-HIAA with impulsive aggression; socially deprived monkeys: first 6–9 months' deprivation persists for life.",
    "Neurocircuitry: amygdala sensitisation + insufficient cingulate/prefrontal regulation (borderline affective instability); high basal cortisol, blunted challenge response (the impulsive-suicidal tier); frontal inhibition deficits + childhood hyperactivity (the antisocial predictor tier).",
    "Per-type treatment gestures: paranoid (trust before all); schizoid (function within chosen distance); schizotypal (low-dose antipsychotic for cognitive-perceptual symptoms); antisocial (comorbidity, therapeutic communities, forensic coordination, no benzos); borderline (psychotherapy core. DBT; symptom-targeted time-limited drugs); histrionic (limit-setting); narcissistic (supportive first, interpretations delayed); avoidant (medication + assertiveness + restructuring); dependent (therapy that avoids recreating the dependency); anankastic (cognitive work on perfectionism; late-depression watch).",
    "Indian tier: the bipolar-borderline conflation as the highest-value OPD correction; the schizotypal cultural caution (shared subcultural beliefs are not disorder); EUPD terminology on the case notes; Cluster B admissions through self-harm and family crisis; the marriage-market disclosure skill; NIMHANS-tier DBT-informed groups scarce.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pd-types-quiz-1",
      question: "A 23-year-old woman has hours-long mood shifts from rage to emptiness triggered by her partner's unavailability, three wrist-cutting episodes, idealisation-then-devaluation relationships, and no sustained elation or decreased sleep need. The most likely diagnosis:",
      options: ["Bipolar II disorder", "Emotionally unstable (borderline) personality disorder", "Histrionic personality disorder", "Intermittent explosive disorder"],
      correctIndex: 1,
      explanation: "Interpersonally triggered, rapid, dysphoric reactivity plus identity disturbance, self-harm and idealisation-devaluation defines the borderline picture; bipolar requires sustained episodes with true elation.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pd-types-quiz-2",
      question: "The single feature that best separates avoidant from schizoid personality disorder:",
      options: ["Avoidants dress oddly", "Avoidants desire relationships and suffer from their absence", "Schizoids have perceptual distortions", "Avoidants have eccentric speech"],
      correctIndex: 1,
      explanation: "The avoidant isolates to protect a wanted connection; the schizoid is indifferent to it. Perceptual oddness belongs to schizotypal, not either.",
      afterSectionId: "differential",
    },
    {
      id: "pd-types-quiz-3",
      question: "The MAO-A finding most cited in personality-disorder aetiology:",
      options: ["The low-activity variant alone predicts adult violence", "Childhood abuse alone predicts adult violence", "Abused children carrying the low-activity variant show elevated later antisocial behaviour — a gene-environment interaction", "MAO-A genotype fully determines aggressive temperament"],
      correctIndex: 2,
      explanation: "Neither gene nor environment alone: the risk emerges from their interaction — the model lesson of personality genetics.",
      afterSectionId: "mechanism",
    },
    {
      id: "pd-types-quiz-4",
      question: "A 26-year-old man with dissocial personality disorder becomes agitated during detoxification. The specifically contraindicated drug class:",
      options: ["SSRIs", "Benzodiazepines", "Antipsychotics", "Anticonvulsants"],
      correctIndex: 1,
      explanation: "Benzodiazepines can cause behavioural disinhibition in antisocial personality disorder — the classic exam-ready caution.",
      afterSectionId: "management",
    },
    {
      id: "pd-types-quiz-5",
      question: "The best single clinical discriminator between narcissistic and borderline personality disorder:",
      options: ["Suicide attempts", "Grandiosity", "Gender distribution", "Impulsivity"],
      correctIndex: 1,
      explanation: "Grandiosity distinguishes narcissism; borderline additionally shows more suicide attempts, poorer impulse control and greater fragmentation risk.",
      afterSectionId: "differential",
    },
    {
      id: "pd-types-quiz-6",
      question: "An obsessive-compulsive personality disorder patient differs from an obsessive-compulsive disorder patient chiefly because the personality-disorder patient:",
      options: ["Has true obsessions and compulsions", "Endorses their standards and habits as correct (ego-syntonic)", "Responds completely to SSRIs", "Experiences symptoms only in adolescence"],
      correctIndex: 1,
      explanation: "Ego-syntonicity is the classic separator: the anankastic WANTS order and control; the OCD patient fights their symptoms.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "List the three clusters with all members from memory, then translate each into ICD-10 terms.", answer: "Cluster A: paranoid (paranoid), schizoid (schizoid), schizotypal (placed in the schizophrenia group F2). Cluster B: antisocial (dissocial), borderline (emotionally unstable PD, borderline subtype (with impulsive as the other subtype), histrionic (histrionic), narcissistic (under 'other specific PDs') not a formal ICD-10 category). Cluster C: avoidant (anxious), dependent (dependent), obsessive-compulsive (anankastic).", topic: "Classification" },
    { question: "For borderline PD: which three features define it, which number makes it dangerous, and which diagnosis must be excluded first?", answer: "Triad: affective instability (minutes-to-hours dysphoric reactivity), impulsivity (self-harm, spending, substances), unstable self-identity (identity diffusion with chronic emptiness). The number: 8–10% lifetime suicide mortality; every gesture taken seriously. The exclusion: bipolar II; bipolar moods run days-to-weeks with true elation and decreased sleep need, cycling semi-independently of relationships; borderline reactivity is interpersonal-triggered dysphoria-to-anger. Also exclude schizotypal (persistent vs brief psychotic-like features) and intermittent explosive disorder (lacks identity disturbance and affective instability).", topic: "Diagnosis" },
    { question: "Give the four sentences that separate avoidant PD from schizoid, dependent, paranoid and social phobia.", answer: "Vs schizoid: the avoidant WANTS closeness and suffers without it; the schizoid is indifferent. Vs dependent: the avoidant fears criticism and rejection; the dependent fears loss of care, and seeks it. Vs paranoid: the avoidant fears being found inadequate; the paranoid fears malicious intent. Vs social phobia: arguably the same condition, with the personality form showing earlier onset and greater impairment; the avoidant's social anxiety also does not diminish with familiarity when paranoid-based.", topic: "Differential" },
    { question: "Why is grandiosity the narcissistic-borderline discriminator? Name two more discriminators.", answer: "Grandiosity is the narcissist's core compensatory structure (the 'hungry, inferior real self' behind the grandiose self) and is absent in borderline. Two more: better impulse control (fewer impulsive self-harm acts) and fewer suicide attempts in narcissistic PD, plus better social adjustment and lower fragmentation risk, with the caveat that malignant narcissism (narcissism + antisocial behaviour + ego-syntonic sadism + paranoid orientation) occupies the extreme, more borderline-like end.", topic: "Differential" },
    { question: "Ego-syntonic vs ego-dystonic: which personality disorder lives next door to which illness in this distinction?", answer: "The anankastic personality is ego-SYNTONIC: order, control and perfectionism are endorsed as correct; the person defends them. OCD is ego-DYSTONIC: obsessions and compulsions are fought against, resisted, experienced as alien. The developmental relationship between the two is controversial, most OCD patients do NOT have the personality, and vice versa; the distinction decides treatment architecture (acceptance-and-change work for the personality; exposure-and-response-prevention for the illness).", topic: "Differential" },
    { question: "Recite the MAO-A × abuse finding and its honest effect-size lesson.", answer: "In a Dutch family, a null mutation abolishing MAO-A produced males with severe aggression across generations; MAO-A knockout mice are aggressive; and the pivotal human finding: a common low-activity MAO-A promoter variant interacts with childhood abuse, such that only abused children carrying the low-activity variant showed elevated later antisocial and violent behaviour. The lesson: risk emerges from gene-AND-environment interaction, effects are modest and polygenic across the personality domain (D4DR ~10% of novelty-seeking's genetic variance with mixed replications; 5-HTT short ~3–4% of neuroticism's variance): no genetic personality test exists.", topic: "Mechanism" },
    { question: "Which types improve with age and which decompensate in middle/late life?", answer: "Improve: antisocial (most pronounced early, declining through adulthood, maturation may trade aggression for depression/hypochondriasis), borderline (rare after 40; 88% 10-year remission), histrionic ('maturation of infantilism'), avoidant (softens in older age, worst in adolescence). Decompensate: narcissistic (middle-age depression or defensive hypomania as admiration-looks-status supplies dry up; hypochondriasis and anxiety complications) and anankastic (late-onset depression with control-loss: retirement, illness, the promotion that arrives or does not).", topic: "Course" },
    { question: "Which drug class is contraindicated in antisocial PD, and why? What is the one drug route this course links?", answer: "Benzodiazepines: behavioural disinhibition, the classic caution (relevant during detoxification agitation). The linked route: fluoxetine; the SSRI with the best impulsive-aggression signal in borderline-type presentations (superior to placebo for aggression and impulsivity; fluvoxamine helped mood only): symptom-targeted and time-limited, never a treatment of the personality; the full audit (topiramate the best anti-aggression signal, aripiprazole's one good trial, the negative tiers) lives in the treatment course.", topic: "Management" },
  ],
  faqs: [
    { question: "Is 'borderline' a slur?", answer: "No: it began as a location; the border between neurosis and psychosis (Stern, 1938), and is now a defined, treatable condition. If the word feels loaded in your setting, ICD-10's 'emotionally unstable personality disorder' is the same construct. Indian records often use it." },
    { question: "Does she have bipolar or borderline?", answer: "The practical test: bipolar moods last days-to-weeks with true elation and sleep changes, cycling semi-independently of relationships; borderline moods flip within hours, from dysphoria to rage to emptiness, usually after rejection or abandonment fears. Both can coexist, which is why longitudinal history (and the family's account) matters more than any single visit." },
    { question: "My brother has always been like this. Can people really change?", answer: "Yes, gradually and with the right structure: borderline symptoms decline substantially with age and treatment; even antisocial behaviour typically burns down after early adulthood. 'Personality' is not carved in stone. The follow-up studies are clearer on this than the textbooks imply." },
    { question: "Is schizoid the same as autism?", answer: "No. Both can be solitary, but schizoid personality involves normal early development with a chosen, stable detachment in adulthood; autism is a neurodevelopmental condition with early social-communication differences and restricted interests." },
    { question: "Will an SSRI fix my personality?", answer: "No drug rewrites a personality style. Medication treats STATES within the disorder (the depressive episodes, the rage spikes, the impulsive urges) and makes psychotherapy workable. Expect symptom relief, not a new character." },
    { question: "Is narcissism treatable?", answer: "Harder than most, because the person rarely experiences their grandiosity as a problem until middle age, when admiration, looks and status supplies dry up and depression or hypomania breaks through. That crisis is often the treatable entry point, and therapy works when it comes." },
    { question: "Why does the doctor keep asking about my childhood?", answer: "Because the risk architecture is built early: abuse and neglect raise borderline risk; harsh criticism and impossible expectations feed narcissistic and anankastic patterns; contradictory parenting feeds passive-aggression. The history explains the pattern; the treatment still happens now." },
    { question: "Is being orderly and careful a disorder?", answer: "Only when it costs more than it buys: perfectionism that prevents finishing, control that prevents living, hoarding that fills the house, morals that forbid rest. Culture defines the average; disorder is the marked, impairing deviation, and in India, deference and discipline are the average, not the disease." },
    { question: "He cannot make a single decision without asking someone. Is that not just our family culture?", answer: "Joint-family consultation is normative in India. The question is whether the pattern causes distress or impairment, and whether it survives outside the protective structure. A dependent pattern that functions inside a supportive family and collapses at any separation, tolerating abuse rather than risk loss of care, is beyond the cultural average. That distinction is exactly what the assessment is for." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-IV/DSM-5-TR (APA) — the ten-type architecture, criteria logic paraphrased (1994/2013/2022)" },
      { source: "ICD-10 (WHO) — dissocial, EUPD, anankastic, anxious terminology; schizotypal's F2 placement (1992)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.3 + 4.12.5 — source chapters mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — personality disorders (2022)" },
    ],
    trials: [
      { source: "Benjamin J et al. and Ebstein RP et al. (1996) — D4DR and novelty-seeking (the independent first reports)" },
      { source: "Lesch K-P et al. (1996) — the 5-HTT short variant and neuroticism/anxiety/harm-avoidance" },
      { source: "Brunner HG et al. (1993) — the Dutch MAO-A null-mutation family; the Caspi-type longitudinal cohort — MAO-A promoter variant × childhood abuse" },
    ],
    reviews: [
      { source: "Kernberg OF — borderline personality organization and malignant narcissism; Stern A (1938) — the term's origin" },
      { source: "Linehan M — DBT for BPD; Zanarini MC et al. — borderline course and suicide figures" },
      { source: "Insel TR & Young LJ — prairie-vole V1a receptor and pair-bonding; Kraemer GW — social deprivation in monkeys" },
      { source: "Akhtar S — the hysterical vs histrionic distinction; Cloninger CR et al. — the temperament model" },
      { source: "Indian tier — NMHS 2015–16 framing; Indian clinical-series experience (the bipolar-borderline conflation, the cultural-relativity duty); NIMHANS DBT-informed programmes; Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "The discrimination-table handout — the one-page family version of the bipolar fork and the wants-closeness question" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the ten patterns, what causes them, what helps.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The types cluster by cluster, the discrimination table, the genetics.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything: the per-type craft, the countertransference map, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The ten types, the three clusters, the discrimination pairs.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the cluster table and work any row of the discrimination table cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Splitting, the control engine, the reward/brakes story, the honest genetics.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why Cluster B runs hot drives on weak brakes, and why no genetic personality test exists." },
    { number: 3, title: "Clinical Practice", description: "The type-by-type pictures, the criteria logic, the differentials, the treatment gestures.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can type a pattern, run the bipolar fork first, and name each type's treatment gesture." },
    { number: 4, title: "Indian Context", description: "The conflation, the cultural duty, the disclosure skill, the typing decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can correct the bipolar-borderline mislabel and apply the cultural-average rule both directions." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the borderline essay and the genetics one-liners cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.12.3 + 4.12.5 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-IV / DSM-5-TR (APA) — the ten-type architecture; criteria logic paraphrased, never reproduced", sourceType: "classification", year: "1994/2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "ICD-10 (WHO) — dissocial, emotionally unstable PD, anankastic, anxious terminology; schizotypal in F2", sourceType: "classification", year: "1992", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Kernberg OF — borderline personality organization, splitting, identity diffusion, primitive defences; malignant narcissism; Stern A (1938) the term's origin", sourceType: "review", year: "1967–1990s", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Benjamin J et al. and Ebstein RP et al. (1996) — D4DR long-repeat and novelty-seeking; Lesch K-P et al. (1996) — 5-HTT short variant and neuroticism", sourceType: "primary", year: "1996", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Brunner HG et al. (1993) — the Dutch MAO-A null-mutation family; the Caspi-type cohort — MAO-A promoter variant × childhood abuse interaction", sourceType: "primary", year: "1993/2002", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Insel TR & Young LJ — prairie-vole V1a receptor and pair-bonding; Kraemer GW — social deprivation in monkeys (first 6–9 months persisting)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Zanarini MC et al. — borderline course and suicide figures (8–10%; the 10-year remission architecture)", sourceType: "primary", year: "2003–2008", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Linehan M — DBT for BPD (the suicidality/impulsivity treatment reference); Akhtar S — hysterical vs histrionic; Cloninger CR — the temperament model", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Fazel S & Danesh J (2002) — antisocial PD in 47% of prisoners; the prison epidemiology tier", sourceType: "meta-analysis", year: "2002", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Baron M et al.; Asarnow RF et al. — schizotypal aggregation in schizophrenia families (14.6% vs 2.1%)", sourceType: "primary", year: "1980s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Nestadt G et al. (ECA Baltimore) — histrionic 2.1%, equal sex rates; the per-type epidemiology synthesised in the Oxford chapters", sourceType: "primary", year: "1990–1991", dateReviewed: "2026-09-28" },
    { id: "S13", source: "Indian tier — Indian clinical-series experience (the bipolar-borderline conflation; cultural-relativity practice); NMHS 2015–16 framing; NIMHANS DBT-informed programmes; Tele-MANAS 14416", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The ten-type architecture in three clusters with the ICD-10 translation (dissocial, EUPD impulsive/borderline, anankastic, anxious; schizotypal in F2; narcissistic under 'other specific').", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "Per-type epidemiology anchors: paranoid ~1–2%; schizoid ~0.8–1%; schizotypal 0.5–3% with 14.6% in schizophrenia relatives; antisocial ~1.5% median, 2:1–7:1 male, 47% of prisoners; borderline 1.5–5% community and 10–15% outpatients; histrionic 2–3% with equal sex rates; narcissistic ~0.5%; avoidant up to 10% clinical; dependent ~0.7–0.9%; anankastic up to 10% of psychiatric patients.", grade: "established", sources: ["S1", "S10", "S11", "S12"] },
    { text: "Kernberg's borderline personality organisation: identity diffusion + primitive defences (splitting, projective identification) + intact reality testing; a broader architecture level than the DSM category; malignant narcissism as the extreme end (narcissism + antisocial behaviour + ego-syntonic sadism + paranoid orientation).", grade: "established", sources: ["S4"] },
    { text: "The gene-trait findings with honest effect sizes: D4DR long-repeat ~10% of novelty-seeking's genetic variance with inconsistent replications; 5-HTT short variant 3–4% of neuroticism's total variance; personality is polygenic: no genetic personality test exists.", grade: "established", sources: ["S5"] },
    { text: "The MAO-A × childhood abuse interaction: only abused children carrying the low-activity promoter variant show elevated later antisocial and violent behaviour; the model gene-environment finding.", grade: "established", sources: ["S6"] },
    { text: "Affiliation biology: oxytocin/vasopressin/opioid systems mediate attachment; the prairie-vole V1a-receptor transfer demonstrates single-circuit genetic tuning; monkey social deprivation in the first 6–9 months persists into adulthood; poor or distorted affiliative behaviour is the single most predictive marker of personality-disorder diagnosis.", grade: "established", sources: ["S7"] },
    { text: "Borderline neurocircuitry: amygdala sensitisation with insufficient cingulate/prefrontal regulation; the current synthesis of affective instability; high basal cortisol with blunted challenge response in the impulsive-suicidal tier.", grade: "supported", sources: ["S1"] },
    { text: "Borderline suicide mortality 8–10%: every gesture taken seriously; the diagnosis becomes rare after 40 (maturation of neural structures and defences plus social learning); 88% 10-year remission.", grade: "established", sources: ["S8"] },
    { text: "Course rules: antisocial behaviour most pronounced in early adulthood, declining with age (some trading aggression for depression/hypochondriasis); histrionic and avoidant improve with age; narcissistic and anankastic decompensate in middle/late life.", grade: "established", sources: ["S1", "S8"] },
    { text: "The antisocial gates: conduct disorder evidence before 15 with diagnosis at age ≥18 (DSM); ICD's dissocial adds low frustration tolerance and inability to profit from punishment; benzodiazepines contraindicated (behavioural disinhibition).", grade: "established", sources: ["S2", "S3", "S1"] },
    { text: "The anankastic-OCD boundary: ego-syntonic endorsement vs ego-dystonic resistance; the developmental relationship controversial, most OCD patients do not have the personality and vice versa; late-onset depression is the anankastic classic complication.", grade: "established", sources: ["S1", "S2"] },
    { text: "The discrimination pairs that decide prescriptions: borderline vs bipolar II (duration, elation, trigger); avoidant vs schizoid (desire for closeness); dependent vs borderline at abandonment (appeasement vs rage); narcissistic vs borderline (grandiosity, impulse control, attempts); paranoid vs delusional disorder (interpretation vs fixed conviction); schizotypal vs autism (belief-dominated vs developmental language dominance).", grade: "established", sources: ["S1", "S4", "S9"] },
    { text: "The Indian tier: the bipolar-borderline conflation as the highest-value OPD discrimination; cultural relativity as diagnostic duty (deference, joint-family patterns, religious observance normative, diagnose only marked deviation); EUPD terminology on case notes; NIMHANS-tier DBT-informed groups scarce.", grade: "supported", sources: ["S13"] },
  ],
};
