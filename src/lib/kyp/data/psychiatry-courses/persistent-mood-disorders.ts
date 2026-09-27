import type { PsychiatryCourse } from "./types";

/**
 * DYSTHYMIA, CYCLOTHYMIA & HYPERTHYMIA — canonical Psychiatry course
 * (migration batch 1, Group D).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/persistent-mood-disorders.md — untouched
 * foundation), re-researched against current guidance (DSM-5-TR
 * persistent depressive disorder, Keller-era combination evidence,
 * CBASP literature, Akiskal's soft bipolar spectrum, NMHS India)
 * with per-claim provenance.
 *
 * Antidepressant drug lessons exist and are linked — persistent
 * depressive disorder is an SSRI-treated condition. Mood-stabiliser
 * routes (lamotrigine, quetiapine) are recorded in contentGaps.
 */
export const persistentMoodDisordersCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "persistent-mood-disorders",
  title: "Dysthymia, Cyclothymia & Hyperthymia",
  shortName: "Persistent Mood",
  kind: "disorder",
  category: "Mood Disorder",
  groupLetter: "D",
  groupName: "Mood disorders",
  learningPath: ["Psychiatry", "Mood Disorders", "Dysthymia, Cyclothymia & Hyperthymia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-27",

  tagline:
    "The mood disorders that live below the episode threshold — a depression too mild to hospitalise and too long to ignore, a metronome that never reaches the diagnostic bar, and the sunny temperament that shades bipolar disorder's family tree.",
  summary:
    "Persistent depressive disorder (dysthymia) is a sub-syndromal depression running most days for two years or more — until patient and family mistake it for personality; its treatment is the clearest combination-evidence story in the mood-disorder literature. Double depression is the major episode landing on that chronic floor — and the 'return to baseline' that families celebrate is the residual illness. Cyclothymia is the two-year below-threshold oscillation with the bipolar pedigree and the antidepressant caution; hyperthymia is the temperament, not illness, that most often argues against a pure-unipolar read of a depression. This course covers the duration-first diagnostic craft, the two clocks that separate cyclothymia from borderline reactivity, and the Indian reality of the twenty-year 'tension' patient.",
  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define persistent depressive disorder in clinical logic: sub-syndromal depressive symptoms, most days, ≥ 2 years (1 in children/adolescents), with early-onset and double-depression sub-forms.",
    "Recognise double depression — the major episode landing on the dysthymic base — and its two-contract treatment sequence.",
    "Define cyclothymia: ≥ 2 years of hypomanic-spectrum and depressive-spectrum oscillations below full-episode thresholds, with the family-history logic that ties it to bipolar disorder.",
    "Distinguish cyclothymic instability from borderline personality's reactivity using the two clocks: days-to-weeks without trigger vs hours with trigger.",
    "Describe hyperthymic temperament and know why it is context, not illness — until the spectrum declares itself.",
    "Deliver the evidence-based treatment of chronic depression: the SSRI-plus-CBASP/CBT combination logic with longer horizons (8–12 week drug trials, years-long maintenance).",
    "Manage cyclothymia: rhythm-stabilising psychoeducation, mood-charting, the antidepressant caution, and the yearly amplitude review.",
    "Work the Indian realities: the personality-mistake, the somatic 'tension' presentation, the marriage-disclosure context, and the lifelong-treatment conversation with a twenty-five-year-old.",
  ],
  quickFacts: [
    { label: "PDD duration gate", value: "≥ 2 years", detail: "Depressed mood most of the day, more days than not, + ≥ 2 low-grade symptoms; 1 year in youths" },
    { label: "PDD prevalence", value: "1.5–6%", detail: "Lifetime, depending on instrument and threshold; early-onset form dominates; women over-represented" },
    { label: "Double depression", value: "Episode on the floor", detail: "A substantial share of dysthymic patients experience ≥ 1 superimposed major episode — the classic first presentation of the chronic condition" },
    { label: "Cyclothymia", value: "≥ 2 years below bar", detail: "Day-to-week oscillations never meeting full hypomanic or major-depressive criteria; ~0.4–1% prevalence" },
    { label: "Cyclothymia conversion", value: "15–50%", detail: "Of clinic samples convert to diagnosable bipolar I/II across long follow-ups — the diagnosis is always provisional" },
    { label: "Hyperthymia", value: "Temperament, not illness", detail: "Lifelong cheerful energy, 4–5-hour sleep sufficiency, confidence verging on arrogance — over-represented in bipolar relatives" },
    { label: "The combination finding", value: "Keller, NEJM 2000", detail: "Medication + CBASP outperformed either alone in chronic depression — the clearest combination-evidence population in the field" },
  ],
  knowledgeGraph: [
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The episodic full-syndrome pole — the always-ON contrast" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The full-syndrome pole of the oscillating spectrum" },
    { label: "Schizotypal & Schizoaffective", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "Personality-spectrum vs mood-spectrum 'temperament' framings — keep the axes straight" },
    { label: "Suicide & Self-harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Chronic passive-ideation risk in dysthymia is real and under-asked" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The SSRI target for the chronic depressive floor" },
    { label: "Suprachiasmatic nucleus", type: "brain-region", href: "/psychiatry/neurotransmitters/", note: "The circadian metronome of cyclothymia" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "First-line SSRI for the chronic floor" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The fewest-interactions SSRI option" },
    { label: "Bupropion", type: "drug", href: "/drugs/bupropion/", note: "Rotation tier for anhedonic/fatigue-dominant pictures" },
    { label: "Mirtazapine", type: "drug", href: "/drugs/mirtazapine/", note: "Rotation tier where sleep and appetite are hit" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Where episodic depression is a storm, dysthymia is a climate: the mood thermostat set at overcast for years. Because it predates the patient's adult self-knowledge, it fuses with identity — the man who says 'I am a gloomy person' the way another says 'I am dark-skinned' — and nobody treats traits. The therapeutic insight of the last two decades: the low-set thermostat is, in a majority of cases, treatable. Cyclothymia is the metronome below the bar, sharing the genetics of the full instrument; hyperthymia is the family tree's sunny edge.",
    steps: [
      "The thermostat set low: sub-syndromal low mood, poor appetite/energy, low self-esteem running as a years-long climate rather than an episode — with mild-moderate monoamine and stress-axis tone changes (honestly less studied than the episodic disorders).",
      "Identity fusion: the illness predates adult self-knowledge, so it is experienced as personality; 'I have always been this way' is the camouflage that keeps it untreated.",
      "Double depression: the chronic floor lowers the threshold for full episodes; the episode resolves, the patient 'returns to baseline' — and the baseline is the residual illness driving relapse risk.",
      "The metronome below the bar: cyclothymic oscillation shares circadian-reward genetics with bipolar disorder — week-bright stretches and week-flat greys at two-thirds amplitude.",
      "The antidepressant vulnerability: SSRIs given on the depressive weeks can switch or accelerate the rhythm — the misdiagnosis trap that converts a soft condition into a hard one.",
      "The sunny edge: hyperthymic temperament is the spectrum's family borderland — genetic context, not pathology, until a depression lands on it (when it argues for bipolar-floor vigilance) or a descendant escalates.",
    ],
    grade: "proposed",
  },
  brainRegions: [
    { id: "pfc", name: "Prefrontal Cortex", role: "Executive tone — the grey film over concentration, decision-making and self-appraisal in the dysthymic climate.", grade: "proposed" },
    { id: "scn", name: "Suprachiasmatic Nucleus (circadian pacemaker)", role: "The metronome of cyclothymic oscillation — the same clock fragility as bipolar disorder at lower amplitude.", grade: "proposed" },
    { id: "vstriatum", name: "Ventral Striatum", role: "Reward responsivity — blunted in the dysthymic flatness, brightened in the cyclothymic up-swings.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The SSRI target for the chronic floor — adequate dose, 8–12 week trials, years-long horizons.", grade: "supported", drugConnection: "Sertraline, escitalopram lessons cover the pharmacology." },
    { name: "Dopamine", symbol: "DA", role: "Anhedonia and drive currency — bupropion's NDRI mechanism is the rotation tier for fatigue-dominant pictures.", grade: "supported", drugConnection: "Bupropion lesson covers the mechanism." },
  ],
  pathways: [
    {
      id: "pdd-double-depression",
      name: "The double-depression loop",
      steps: [
        { label: "Chronic dysthymic floor", detail: "Years of sub-syndromal low mood — identity-fused, untreated" },
        { label: "Major episode lands", detail: "The 'breakdown' that finally crosses the treatment threshold" },
        { label: "Episode treated, resolves", detail: "The family celebrates the return to baseline" },
        { label: "Baseline = residual illness", detail: "The chronic floor remains, driving relapse risk" },
        { label: "Second contract", detail: "Treat the floor deliberately: combination therapy, years-long horizon" },
      ],
      clinicalManifestation: "Recurrent major episodes on a chronic base — and the two-contract sequence that breaks the loop.",
      grade: "supported",
    },
    {
      id: "cyc-metronome",
      name: "The metronome below the bar",
      steps: [
        { label: "Weeks of bright, driven energy", detail: "Sleep-lightened productivity that nearly annoys — below hypomania" },
        { label: "Weeks of flat grey", detail: "Self-doubting heaviness — below major depression" },
        { label: "Untriggered oscillation", detail: "No interpersonal cause; the clock is days-to-weeks" },
        { label: "Antidepressant trap", detail: "SSRIs on the low weeks can switch or accelerate the rhythm" },
        { label: "Yearly amplitude review", detail: "The diagnosis is provisional; the amplitude can grow" },
      ],
      clinicalManifestation: "Cyclothymia — the soft-bipolar rhythm with the bipolar family tree.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "pdd-early", time: "Childhood/adolescence (typical)", title: "The climate sets", description: "Early-onset form dominates: adversity, loss, chronic criticism and parental depression shape a selfhood built around low mood — 'I have always been this way'.", phase: "onset" },
    { id: "pdd-decades", time: "Years–decades", title: "Camouflage decades", description: "Functioning maintained at cost; happiness absent by so long it stops being missed; the family reads temperament, not illness.", phase: "duration" },
    { id: "pdd-episode", time: "Whenever it lands", title: "Double depression", description: "A major episode finally crosses the treatment threshold — the 'breakdown' that brings the twenty grey years beneath it to light.", phase: "peak" },
    { id: "pdd-contract2", time: "After episode remission", title: "The second contract", description: "The deliberate, contractual treatment of the chronic floor: combination therapy with a years-long horizon — 'he is back to his old self' is the moment the real treatment begins.", phase: "recovery" },
    { id: "pdd-course", time: "Long term", title: "The lifted fog", description: "In a majority the chronic floor is treatable — lift the fog for the first time in adulthood and the person discovers the self they never met.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Persistent depressive disorder: 1.5–6% lifetime depending on instrument and threshold; early-onset dominates. Cyclothymia: ~0.4–1%, with the soft-spectrum reality several-fold larger.",
    indianPrevalence: "NMHS 2015–16 counted the broad depression tier (~2.7% depressive disorders, treatment gap ~85%) without separating the chronic sub-syndromal tier — in clinic experience it is large and the least-referred of all: the twenty-year 'tension' patient who has never been treated.",
    lifetimeRisk: "Double depression: a substantial share of dysthymic patients experience at least one superimposed major episode across follow-up years. Cyclothymia: 15–50% of clinic samples convert to bipolar I/II across long follow-ups.",
    genderRatio: "Women over-represented in PDD; comorbidity the rule (anxiety, substance use, personality disorders, medical burden).",
    ageOfOnset: "PDD median onset earlier than major depression — childhood, adolescence or early adulthood; cyclothymia recognised in early adulthood after a long misdiagnosis history.",
    indianNotes: "The grandmother whose aches and sighs have been her identity since her arranged-marriage decades; the college student whose 'days of low' everyone normalises; the young woman labelled 'difficult and moody' across a decade of marriage-friction while the family tree's bipolar uncle goes unmentioned.",
  },
  etiology: [
    { category: "genetic", factor: "Family loading with mood disorders", details: "Unipolar loading for dysthymia; bipolar-spectrum loading for cyclothymia and hyperthymia — the affective-temperament architecture (negative-affectivity soil vs oscillating sensitivity)." },
    { category: "biological", factor: "Mild monoamine and stress-axis tone changes", details: "Less studied than the episodic disorders — say so honestly; screen once for the medical riders (hypothyroidism, anaemia, chronic disease)." },
    { category: "psychological", factor: "Developmental adversity and rumination loops", details: "Childhood adversity, loss, neglect, chronic criticism and parental depression build the early-onset selfhood; learned-helplessness and rumination maintain it; the interpersonal style chronic low mood itself trains (withdrawal → rejection-confirming loops)." },
    { category: "social", factor: "Chronic stress and entrapment", details: "Poverty, unhappy marriage, occupational dead-end — the entrapment literature's specific link to low-grade persistent depression; loneliness and caregiver chronicity." },
    { category: "environmental", factor: "Substance contribution", details: "Long low-grade alcohol or cannabis use contributes to chronic dysthymia — a bidirectional loop." },
    { category: "environmental", factor: "Indian context specifics", details: "The arranged-marriage-entrapment pattern for women; the unemployment-and-failed-expectations tier of young men; the family's 'personality, not illness' absorption that delays treatment a decade." },
  ],
  symptomClusters: [
    {
      category: "Persistent depressive disorder (dysthymia)",
      symptoms: ["Depressed mood most of the day, more days than not, ≥ 2 years (1 in youths)", "≥ 2 of: appetite change, sleep change, fatigue, low self-esteem, poor concentration/decisions, hopelessness", "Characteristically ABSENT vs major depression: profound anhedonia, psychomotor shutdown, worthlessness-delusion territory, active suicidality (though passive death-wishes and chronic risk are real)", "The personality-seeming presentation: perfectionistic-but-gloomy accountant, quietly irritable mother, over-committed-but-joyless volunteer"],
    },
    {
      category: "Double depression",
      symptoms: ["The dysthymic base crowned by a full major episode", "The classic FIRST presentation of the chronic condition — the breakdown that brings twenty grey years to light", "After episode resolution, 'return to baseline' = return to the residual illness"],
    },
    {
      category: "Cyclothymia",
      symptoms: ["Weeks of bright, driven, sleep-lightened productivity-that-nearly-annoys (below hypomania)", "Weeks of flat, self-doubting, heavy grey (below major depression)", "Untriggered oscillation; ego-syntonic until consequences accumulate ('my nature is up-and-down')", "≥ 2 years without full syndromes; periods of wellness interspersed"],
    },
    {
      category: "Hyperthymia (temperament)",
      symptoms: ["Lifelong cheerful energy; wakes rested on 4–5 hours", "Confidence verging on arrogance; risk-taking in business and romance", "Warmth and charisma; starts-and-leaves ventures", "Never seeks treatment — the consult happens when depression lands on it or the family brings the young person 'for anger and overspending'"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Persistent depressive disorder (F34.1)",
      criteria: [
        "Depressed mood for most of the day, more days than not, ≥ 2 years (≥ 1 year in children/adolescents).",
        "≥ 2 of: poor/appetite change, insomnia/hypersomnia, low energy, low self-esteem, poor concentration/difficult decisions, hopelessness.",
        "Never without symptoms for more than 2 months during the 2 years.",
        "No full-syndrome major episode during the first 2 years (thereafter = 'with intermittent/persistent major episodes' — double depression).",
        "Never a manic/hypomanic/mixed episode; not better explained by a psychotic, substance or medical cause.",
      ],
      duration: "≥ 2 years (1 in youths), continuous.",
      indianNote: "All three diagnoses in this course are LONGITUDINAL — made by the timeline, not the cross-section. The drawn line from school age to now is the diagnostic instrument.",
    },
    {
      system: "DSM-5-TR / ICD-11",
      code: "Cyclothymic disorder (F34.0)",
      criteria: [
        "≥ 2 years (1 in youths) of numerous hypomanic-spectrum and depressive-spectrum periods that never meet full episode criteria.",
        "Never symptom-free for more than 2 months.",
        "No full major depressive, manic or hypomanic episode ever (if it occurs, re-diagnose bipolar I/II).",
        "Not better explained by another disorder, substance or medical cause.",
      ],
      duration: "≥ 2 years, continuous oscillation below the bar.",
      indianNote: "The two clocks separate it from borderline reactivity: days-to-weeks of UNTRIGGERED oscillation vs HOURS of interpersonally-triggered reactivity.",
    },
  ],
  severityScales: [
    { name: "PHQ-9", fullName: "Patient Health Questionnaire-9", measures: "The cross-sectional depression severity — but PDD is diagnosed by duration; the scale documents, it does not decide.", ranges: [], indianNote: "The two-question screen plus 'how long — years or months?' is the primary-care rescue pair." },
    { name: "Mood life-chart", fullName: "Mood line across the lifetime (drawn with the family)", measures: "The diagnostic instrument for all three: the always-on floor, the below-bar oscillation, the hyperthymic baseline.", ranges: [] },
    { name: "Prospective mood chart", fullName: "6–12 weeks of daily mood + sleep lines", measures: "Settles the oscillation question better than any interview — the two lines reveal the coupling.", ranges: [] },
  ],
  differentialDiagnosis: [
    { condition: "Major depressive disorder", distinguishingFeatures: "Full episodes with well intervals vs the always-on low-grade floor — and the double-depression combination needing BOTH labels treated.", keyDifferentiator: "The timeline: episodic mountains vs the continuous overcast climate." },
    { condition: "Borderline/emotional-instability personality", distinguishingFeatures: "Reactivity in HOURS with interpersonal triggers, chronic emptiness, identity diffusion.", keyDifferentiator: "The two clocks (comorbidity exists; the clocks still differ)." },
    { condition: "Bipolar II", distinguishingFeatures: "Full hypomanic episodes (≥ 4 days, syndrome complete) and full major episodes — above cyclothymia's bar.", keyDifferentiator: "Amplitude, not presence, of the swings." },
    { condition: "ADHD (young-adult confusion)", distinguishingFeatures: "Attention pattern since childhood regardless of mood phase; no week-to-week amplitude; the family history differs.", keyDifferentiator: "The mood-coupling of the attention symptoms." },
    { condition: "Substance-induced chronic low", distinguishingFeatures: "The alcohol/cannabis timeline maps the low periods; the abstinence trial clarifies.", keyDifferentiator: "The temporal lock to use." },
    { condition: "Medical (hypothyroid, anaemia, post-viral)", distinguishingFeatures: "The once-screen; the response to correction.", keyDifferentiator: "TSH, CBC once at baseline — then the longitudinal picture decides." },
    { condition: "Personality (schizoid, avoidant)", distinguishingFeatures: "Detachment or shyness without the depressed MOOD tone; the energy and appetite-sleep signature of dysthymia absent.", keyDifferentiator: "The vegetative signature." },
  ],
  management: [
    {
      category: "pharmacotherapy",
      name: "SSRI for the chronic floor",
      description: "First-line: sertraline/escitalopram at standard doses — but the dosing laws apply with chronicity: adequate dose, longer trials (chronic depression judges a drug at 8–12 weeks, not 4), and maintenance for YEARS because the illness is years. Mirtazapine and bupropion as the rotation tier.",
      whenToUse: "Every persistent-depressive-disorder patient, ideally from the start in combination with psychotherapy.",
      indianContext: "SSRI generic ₹40–200/month (approx 2026) — the cheapest long-horizon prescription in psychiatry.",
    },
    {
      category: "psychotherapy",
      name: "CBASP — the therapy built for chronic depression",
      description: "Cognitive Behavioural Analysis System of Psychotherapy: situational analysis, the interpersonal discipline of the Kiesler circle, and the healer-disclosure elements CBASP uniquely permits — designed for the patient whose interpersonal patterns were learned in the very years the illness was setting. Classic CBT and behavioural activation as the accessible substitutes; IPT for the interpersonal scar tier.",
      whenToUse: "First-line alongside medication — the Keller-era finding: combination clearly outperforms either alone in chronic depression.",
      indianContext: "Private CBASP scarce-and-metro (₹600–1,500/session); classic CBT through DMHP/NGO tier free-to-₹300; the referral honesty this entails is part of the prescription.",
    },
    {
      category: "psychotherapy",
      name: "The double-depression sequence",
      description: "Treat the major episode first (its speed, depth and suicide-risk urgency), then deliberately, contractually treat the chronic floor — the second conversation the family must be prepared for: 'he is back to his old self' is the moment the real treatment of the actual illness begins.",
      whenToUse: "Every double-depression presentation.",
    },
    {
      category: "lifestyle",
      name: "Rhythm and movement",
      description: "Exercise (genuine effect sizes in chronic mild depression), sleep regularity, alcohol retrenchment — the foundation both poles of treatment stand on.",
      whenToUse: "Everyone, always.",
      indianContext: "Walking is free and evidenced; frame it as prescription, not advice.",
    },
    {
      category: "pharmacotherapy",
      name: "Cyclothymia: the mood-stabiliser tier (when consequences accumulate)",
      description: "Rhythm-first psychoeducation: the daily chart (mood + sleep lines), sleep-protection rules, caffeine/substance hygiene, early-warning signature. Antidepressants are NOT first-line here — if used reluctantly for depressive stretches, the switch-and-acceleration watch applies; chart-documented worsening = stop. When consequences accumulate (relationships, spending, escalations): low-dose quetiapine or lamotrigine; lithium reserved for the converted-and-family-loaded.",
      whenToUse: "Cyclothymia with accumulating consequences or the yearly-amplitude-growth pattern.",
      indianContext: "The yearly re-evaluation contract: 'any week you did not need sleep? any episode you now call too high?' — two questions, once a year.",
    },
  ],
  safety: {
    redFlags: [
      "Chronic passive death-wishes — real and under-asked; ask directly",
      "Double depression — the major episode's acute suicide risk on top of years of entrapment",
      "Cyclothymic amplitude growth — any sleepless-euphoric stretch crossing the bar (conversion)",
      "Escalating SSRI activation in a cyclothymic patient — stop the drug, re-chart",
      "Entrapment with domestic violence (the arranged-marriage pattern) — safety planning, 181, PWDVA",
    ],
    urgentGuidance:
      "Any active suicidal ideation, plan or means: treat as the emergency it is (see the Suicide & Self-harm course). New full-syndrome episodes (mania or major depression) in a cyclothymic patient: re-diagnose and escalate the treatment tier — the diagnosis is always provisional.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI (chronic floor)", rationale: "The standard first choice for the persistent-depressive floor: adequate dose, judged at 8–12 weeks, maintained for years — the illness's clock is the treatment's clock.", evidenceLevel: "systematic-review", clinicalDisclaimer: "For persistent depressive disorder; in cyclothymia SSRIs are NOT first-line — see the antidepressant caution." },
    { name: "Escitalopram", slug: "escitalopram", role: "First-line SSRI (chronic floor)", rationale: "Fewest interactions — practical on polypharmacy and in younger patients.", evidenceLevel: "systematic-review", clinicalDisclaimer: "Same duration laws: 8–12 week trials, years-long maintenance." },
    { name: "Bupropion", slug: "bupropion", role: "Rotation tier", rationale: "For anhedonia/fatigue-dominant chronic pictures and SSRI non-responders; no sexual dysfunction.", evidenceLevel: "textbook", clinicalDisclaimer: "Contraindicated in seizures and eating disorders." },
    { name: "Mirtazapine", slug: "mirtazapine", role: "Rotation tier", rationale: "Wins where insomnia and appetite loss ride the chronic floor.", evidenceLevel: "textbook", clinicalDisclaimer: "Sedation and weight gain — counsel at initiation." },
  ],
  contentGaps: [
    "Lamotrigine and low-dose quetiapine — the cyclothymia consequence-tier medicines — have no KYP drug lessons yet.",
    "Lithium — reserved for converted cyclothymia with family loading — has no KYP drug lesson yet.",
    "CBASP as a psychotherapy modality has no dedicated KYP lesson yet.",
  ],
  patientGuide: {
    whatIsIt:
      "A long-standing, low-grade depression that has run for years — not the breakdown kind, but the always-there kind: a grey film over everything, tiredness no vacation fixes, poor appetite, low self-confidence. Because it started early, it feels like your personality. It is not: it is a treatable condition wearing your personality's clothes.",
    whatCausesIt:
      "A combination of family mood-loading, early adversity or chronic stress, and the biology of low-grade mood regulation. In cyclothymia, the same family history that carries bipolar disorder expresses as a milder up-down rhythm; in hyperthymia, it is just the sunny temperament itself — not an illness.",
    symptoms:
      "For the low-grade form: most days of low mood for two years or more with poor sleep or oversleeping, tiredness, low confidence, poor concentration and a feeling that things will not get better. For cyclothymia: weeks of bright driven energy alternating with weeks of flat grey — never as severe as full mania or full depression.",
    treatment:
      "The one condition where the evidence is clearest that medicine AND therapy together beat either alone. The medicine lifts the fog (judged at 8–12 weeks, continued for years); the therapy (CBASP or CBT) builds the skills the grey years never taught. For cyclothymia: rhythm protection, charting and yearly review — antidepressants used cautiously, if at all.",
    selfHelp: [
      "Draw the timeline with your doctor — seeing twenty grey years on one page has motivational force no adjective matches.",
      "Exercise genuinely works for the chronic low grade — walk like it is a prescription.",
      "Protect sleep regularity; the mood follows the clock.",
      "Keep the yearly review appointment even when well — the amplitude can grow silently.",
    ],
    whenToSeekHelp: [
      "The low mood has been present most days for two years or more — that itself is the criterion",
      "Any new full episode — a real breakdown on top of the grey is double depression, and both layers need treatment",
      "Passive death-wishes — mention them; they are symptoms, not secrets",
      "In cyclothymia: any week where sleep was not needed and energy soared — the amplitude question",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD / DMHP counselling — free-to-₹300 tier",
      "iCall and city services for long-horizon counselling",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows the combination-evidence literature with Indian access adaptations documented in IPS practice norms.",
    systemContext: "The Indian dysthymic patient arrives in three costumes: the somatic ('weakness since years, gas, no taste for food'), the personality-endorsement ('my family says I was always the dull one'), and the double-depression doorway (the breakdown that finally crosses someone's threshold).",
    programmeContext: "NMHS 2015–16's broad depression tier (~2.7%, ~85% treatment gap) hides the chronic sub-syndromal tier entirely — it lives in the somatic-and-'tension' primary-care sea, which is exactly where the two-question screen and the 'how long — years or months?' question do their rescue work.",
    costConsiderations: "SSRI generic ₹40–200/month; counselling through DMHP/NGO free-to-₹300; private CBT/CBASP scarce-and-metro at ₹600–1,500 per session (approx 2026) — the referral honesty this entails is part of good practice.",
    culturalConsiderations: "The arranged-marriage-entrapment pattern for women is a specific chronic-entrapment risk; the unemployment-and-failed-expectations tier of young men is its male counterpart. Marriage-and-disclosure contexts recur in this tier — the chronicity itself is the concealment driver.",
    patientCounselling: [
      "The trait-vs-state conversation in the family's language: 'you have carried this since school; that is a medical condition wearing your personality's clothes' — the single intervention that starts everything.",
      "The timeline-drawing on paper: the visual of twenty grey years has diagnostic and motivational force no adjective matches.",
      "The long-horizon contract Indian OPD rhythms make hard: the 12-weekly-review card and the one relative trained as the rater make it possible.",
      "For cyclothymia families: ask specifically about the best week of their lives — poverty of collateral history means families remember only the breakdowns, never the quiet highs.",
      "For the hyperthymic husband's family: 'his four-sleep-hour brilliance is a family-tree fact, not an illness — and not a guarantee either'; the pedigree awareness turns the family into the early-warning system.",
    ],
  },
  decisionPath: {
    title: "The 'low mood since years' gate",
    nodes: [
      {
        id: "start",
        question: "A patient reports low mood — the question is the clock: months or years?",
        branches: [
          { label: "≥ 2 years, most days, sub-syndromal", next: "pdd" },
          { label: "≥ 2 years of below-bar ups AND downs", next: "cyclothymia" },
          { label: "Episodes with well intervals", next: "episodic" },
        ],
      },
      {
        id: "pdd",
        question: "Persistent depressive disorder. Is a full major episode present now or in the past 2 years?",
        branches: [
          { label: "Yes", next: "double" },
          { label: "No", next: "pdd-plan" },
        ],
      },
      { id: "double", question: "Double depression.", recommendation: "Treat the episode first (speed, depth, suicide-risk urgency — see the Depressive Disorders course), then contract the chronic-floor treatment deliberately: combination SSRI + CBASP/CBT with a years-long horizon. The 'return to baseline' is the residual illness." },
      { id: "pdd-plan", question: "Persistent depressive disorder, no current episode.", recommendation: "Combination from the start: SSRI (judged at 8–12 weeks, maintained for years) + CBASP/CBT + exercise; once-only medical screen (TSH, CBC); the timeline-drawing conversation; the 12-weekly-review card." },
      { id: "cyclothymia", question: "Cyclothymia — the below-bar oscillation. Any full episode ever (mania, hypomania ≥ 4 days complete, or major depression)?", branches: [{ label: "Yes — re-diagnose bipolar I/II", next: "bipolar" }, { label: "No", next: "cyc-plan" }] },
      { id: "cyc-plan", question: "Cyclothymia confirmed.", recommendation: "Rhythm-first: daily mood+sleep chart, sleep protection, substance hygiene; antidepressants NOT first-line (switch watch if used at all); low-dose quetiapine/lamotrigine only when consequences accumulate; the yearly amplitude-review contract with the two questions." },
      { id: "bipolar", question: "Full episodes present.", recommendation: "Move to the Bipolar Disorders course treatment architecture — the spectrum has declared itself." },
      { id: "episodic", question: "Episodic architecture with well intervals.", recommendation: "Follow the Depressive Disorders (or Bipolar Disorders) course logic — but screen every non-responder for the hidden chronic floor and the hidden hypomania." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "'Dysthymia needs full-syndrome depression for 2 years'",
      why: "It is SUB-syndromal by definition — the confusion withers the diagnosis and hides the most treatable chronic condition.",
      correction: "Two or more low-grade symptoms, most days, ≥ 2 years, with the full syndrome absent — that IS the definition.",
    },
    {
      mistake: "'Cyclothymia has full hypomanic episodes'",
      why: "Below the bar IS the definition; a complete 4-day hypomanic syndrome upgrades the diagnosis to bipolar II.",
      correction: "Keep the amplitude question in every yearly review: any complete episode ever → re-diagnose and escalate.",
    },
    {
      mistake: "Discharging the double-depression patient when the episode resolves",
      why: "The 'return to baseline' is the residual illness — relapse into the next episode is a matter of time on an untreated floor.",
      correction: "The second contract: continue treatment and ADD the chronic-floor tier (combination psychotherapy, years-long horizon) — say it explicitly to the family at the celebration moment.",
    },
    {
      mistake: "Escalating SSRIs through a cyclothymic patient's alternating weeks",
      why: "The SSRI history is often the diagnostic clue wearing the chart's clothing — switches and acceleration are the soft spectrum declaring itself.",
      correction: "Chart-documented worsening on SSRIs = stop; move to rhythm-stabilising management with the yearly amplitude review.",
    },
    {
      mistake: "Judging the chronic-depression drug trial at 4 weeks",
      why: "Chronic depression responds slower; abandoning an adequate drug at 4 weeks reads as 'treatment-resistant' when it is simply early.",
      correction: "Adequate dose judged at 8–12 weeks; then rotate (mirtazapine, bupropion) — and combine with psychotherapy from the start.",
    },
    {
      mistake: "'Borderline and cyclothymia are distinguished by severity'",
      why: "They are distinguished by the CLOCK and the TRIGGER — severity language muddles two different conditions (which can also co-exist).",
      correction: "Hours with interpersonal triggers (borderline reactivity) vs days-to-weeks untriggered (cyclothymic oscillation) — teach the two clocks.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define persistent depressive disorder (duration + symptom count) and distinguish it from major depression.",
        "What is double depression and what does its treatment demand?",
        "CBASP — the therapy designed for chronic depression; the Keller combination finding.",
        "Cyclothymia vs bipolar II vs borderline reactivity — the two clocks.",
      ],
      practical: [
        "Draw the mood life-chart with a 'low mood since years' patient and present the formulation.",
        "Counsel the double-depression family on why treatment continues after the episode resolves.",
      ],
      longAnswer: [
        "Persistent depressive disorder: diagnosis, evidence-based management, the combination finding.",
        "The soft bipolar spectrum: cyclothymia and hyperthymic temperament — recognition and disposition.",
      ],
    },
    neetPg: {
      highYield: [
        "PDD = 2 years (1 in youth) + ≥ 2 sub-syndromal symptoms; never symptom-free > 2 months.",
        "Double depression = major-on-dysthymic; treat BOTH layers.",
        "CBASP = the chronic-depression-specific therapy — the examiner's favourite.",
        "The Keller combination finding (NEJM 2000): medication + psychotherapy clearly outperform either alone in chronic depression.",
        "Cyclothymia = 2 years below-threshold oscillation, no full episodes; conversion 15–50% of clinic samples.",
        "Hyperthymia's family-tree significance; the antidepressant caution when depression lands on it.",
        "The two clocks: days-weeks untriggered (cyclothymia) vs hours triggered (borderline).",
        "Chronic depression judges a drug at 8–12 weeks, not 4.",
      ],
      pyqConcepts: [
        "'A 40-year-old with low mood since years — your diagnostic ladder' — the viva favourite (duration-first, timeline, double-depression check, once-screen, combination contract).",
        "'Moody young woman with a bipolar uncle' — the cyclothymia two-clocks answer with the antidepressant caution.",
        "One-liners to bank: 'always ON' = dysthymia's burden logic; 'the metronome below the bar' = cyclothymia; 'the sunny edge of the family tree' = hyperthymia; 'return to baseline-that-was-never-healthy' = double-depression relapse.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "The 43-year-old teacher whose 'breakdown' remitted on sertraline — the next correct step (the second contract).",
        "The 22-year-old with three years of week-long bright/flat alternation and two SSRI trials, one with a first sleepless-euphoric stretch — the diagnosis and the disposition.",
        "The failed-antidepressants 'recurrent depression' with oversleeping and heaviness — what the screening finds and what the first prescription change is.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PDD duration: ≥ 2 years (1 in youth); sub-syndromal by definition.",
        "Double depression: episode + floor, both treated.",
        "Combination treatment beats monotherapy in chronic depression.",
        "Cyclothymia: ≥ 2 years below-threshold oscillation without full episodes.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The Keller line: nefazodone-plus-CBASP in chronic depression (NEJM 2000) — response rates near 85% for the combination vs ~55% either alone; the modern replication tier with SSRIs sustains the architecture even though the original agent changed.",
        "Judd's sub-syndromal literature: the below-threshold states carry more cumulative life-years-lost than the episodic disorders — the 'always ON' burden logic.",
        "Akiskal's soft-spectrum canon: hyperthymic and cyclothymic temperaments as the family-genetic borderland of bipolar disorder — and the antidepressant-caution's quiet cousin in apparently-unipolar depression.",
        "The identity-fusion insight drives engagement: no one treats traits; reframing 'I am a gloomy person' as 'you carry a treatable condition wearing your personality's clothes' is the intervention that starts everything.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The grey years under the breakdown",
      presentation: "41-year-old Ludhiana schoolteacher — three-month major episode (weight loss, 4 a.m. waking, 'my class is better without me'), treated with sertraline to full dose, episode remitted by month four.",
      history: "The family's gratitude and the discharge request. The timeline-drawing conversation: the 20-year line since her B.Ed. years — poor appetite 'always', the two-good-weeks-a-month pattern, the early parental-criticism-and-loss history, an untreated mother with the same grey decades.",
      examination: "Post-episode: sub-syndromal low mood, low self-esteem, poor concentration — the chronic floor now visible because the mountain above it has gone.",
      diagnosis: "Persistent depressive disorder with intermittent major episodes (double depression).",
      management: "The second treatment contract: CBASP-architecture sessions through the school counsellor; sertraline continued at full dose; the 2-year horizon explained explicitly; once-only TSH/CBC screen.",
      outcome: "At 9-month follow-up: 'I did not know this was not my personality. I thought everyone carried this weight.'",
      teachingPoints: [
        "The episode resolved is the first half only; the timeline makes the chronic diagnosis.",
        "The combination treatment is the evidence-answer this population specifically owns.",
        "The celebration moment is exactly when the second contract must be offered.",
      ],
    },
    {
      title: "The metronome under the 'moodiness'",
      presentation: "22-year-old engineering student, Hyderabad — brought for 'anger and inconsistency': three years of week-long bright stretches (late-night projects, sudden social whirl, the batch's 'genius week') alternating with week-long flat grey (missed labs, unanswered messages, self-doubt).",
      history: "Label history: 'moody', 'lazy in phases', two SSRI trials — the second accompanied by his first-ever sleepless-euphoric four days. Pedigree: a paternal uncle 'who needed lithium' and a father the family calls a 'workaholic-morning-person' (the hyperthymic tell).",
      examination: "Two clocks conversation + six weeks of prospective daily mood/sleep charting: untriggered day-to-week oscillations, amplitude below-but-approaching the bar; no full syndromes.",
      diagnosis: "Cyclothymic disorder with an antidepressant-triggered switch history; hyperthymic father.",
      management: "Psychoeducation-and-charting, rhythm protection, antidepressant discontinuation, low-dose quetiapine through the consequence-accumulating months, and the yearly amplitude-review contract.",
      outcome: "At eighteen months: oscillation persisting below bar, no conversion, one early-warning catch by the trained father.",
      teachingPoints: [
        "The two clocks separate cyclothymia from the personality label.",
        "The SSRI history is the diagnostic clue wearing the chart's clothing.",
        "The family — hyperthymic father included — becomes the monitoring instrument.",
      ],
    },
  ],
  clinicalPearls: [
    "All three diagnoses are made by the TIMELINE, not the cross-section — draw the line from school age to now.",
    "'Always ON': dysthymia loses more life-years than episodic depression precisely because nobody treats it.",
    "Double depression: the 'return to baseline' is the residual illness — the second contract is the treatment.",
    "Combination evidence is clearest here: medicine + CBASP/CBT from the start.",
    "Chronic depression judges a drug at 8–12 weeks; maintenance runs for years — the treatment's clock matches the disease's.",
    "Cyclothymia: chart, protect rhythm, be careful with SSRIs, review amplitude yearly — the diagnosis is always provisional.",
    "The two clocks: days-to-weeks untriggered vs hours triggered.",
    "Hyperthymia: no treatment for the temperament; treat its two contexts — depression landing on it, and the family's pedigree awareness.",
  ],
  highYieldSummary: [
    "PDD: sub-syndromal, most days, ≥ 2 years (1 in youth) — with double depression as the classic presentation.",
    "Keller (NEJM 2000): combination treatment clearly outperforms either alone in chronic depression; CBASP is the purpose-built therapy.",
    "Dosing laws: adequate dose, 8–12 week trials, years-long maintenance.",
    "Cyclothymia: ≥ 2 years of below-bar oscillation without full episodes; conversion 15–50% of clinic samples; antidepressant caution.",
    "Hyperthymia: temperament not illness; the soft-spectrum clue in a 'unipolar' depression with a hyperthymic baseline.",
    "The two clocks separate cyclothymic from borderline instability.",
    "India: the twenty-year 'tension' patient; the somatic costume; the personality-endorsement costume; the two-question screen rescue.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pmd-quiz-1",
      question: "A 43-year-old teacher: poor appetite, low self-esteem and low-grade low mood 'since my college years, more days than not'; functioning maintained; no major episode until the current three-month full-syndrome picture. The complete diagnosis:",
      options: ["Major depressive disorder, recurrent", "Persistent depressive disorder with intermittent major episodes (double depression); treat BOTH", "Bipolar II depression", "Adjustment disorder"],
      correctIndex: 1,
      explanation: "The chronic floor plus the superimposed episode; the two-label treatment sequence is the case's whole teaching.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pmd-quiz-2",
      question: "Which therapeutic finding is most specific to THIS population:",
      options: ["Antidepressants outperform psychotherapy", "Combined pharmacotherapy-plus-psychotherapy (the CBASP-era architecture) clearly outperforms either alone in chronic depression", "ECT is first-line", "Placebo outperforms both"],
      correctIndex: 1,
      explanation: "Chronic depression is the clearest combination-evidence population in the mood-disorder literature — the exam's and the clinic's favourite fact.",
      afterSectionId: "management",
    },
    {
      id: "pmd-quiz-3",
      question: "The mood pattern: 3 years of untriggered week-long bright stretches alternating with week-long flat greys, below full syndromes, in a man whose uncle takes lithium. The diagnosis and its disposition:",
      options: ["Borderline personality: DBT referral", "Cyclothymia: psychoeducation, charting, antidepressant-caution, yearly amplitude-review", "Bipolar II: lithium immediately", "Normal temperament, no follow-up"],
      correctIndex: 1,
      explanation: "Below the bar with the pedigree and the clock; the provisional-diagnosis discipline with the re-evaluation contract is the correct conservatism.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pmd-quiz-4",
      question: "Distinguishing cyclothymic instability from borderline emotional instability, the single best discriminator:",
      options: ["Age of onset", "The clock-and-trigger structure: days-to-weeks of untriggered oscillation vs hours of interpersonally triggered reactivity", "Gender", "Response to SSRIs"],
      correctIndex: 1,
      explanation: "The two clocks — the swing's timing and its cause — separate the metronome from the reactive storm.",
      afterSectionId: "differential",
    },
    {
      id: "pmd-quiz-5",
      question: "The hyperthymic-tempered patient presenting with a first depressive episode. The practical prescribing implication:",
      options: ["Any SSRI is fully safe", "Carry the soft-spectrum caution: a hyperthymic baseline raises the odds of a bipolar floor under the depression; watch for activation/switch", "ECT first-line", "Antidepressants are contraindicated absolutely"],
      correctIndex: 1,
      explanation: "The temperament is the pedigree's proxy; it shifts the vigilance, not automatically the drug class.",
      afterSectionId: "management",
    },
    {
      id: "pmd-quiz-6",
      question: "The double-depression patient's major episode has fully remitted on sertraline. The next correct step:",
      options: ["Taper the SSRI — he is back to baseline", "Continue treatment and ADD the chronic-floor tier (psychotherapy for chronic depression, the long-horizon contract)", "Switch to an antipsychotic", "Discharge to primary care without follow-up"],
      correctIndex: 1,
      explanation: "The return to the never-healthy baseline is the relapse's countdown; the second contract treats the actual disease the first presentation hid.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Define dysthymia's duration-and-symptom logic; which features are characteristically ABSENT relative to major depression?", answer: "≥ 2 years of most-days sub-syndromal low mood + ≥ 2 low-grade symptoms (appetite, sleep, energy, self-esteem, concentration, hopelessness). Characteristically absent: profound anhedonia, psychomotor shutdown, worthlessness-delusion territory, active suicidality (passive death-wishes remain real).", topic: "Diagnosis" },
    { question: "Draw the double-depression timeline and state the two-contract treatment sequence it demands.", answer: "Flat grey line (dysthymic floor) from school age → a mountain (major episode) at presentation → episode treated → line returns to the SAME low level. Contract 1: treat the episode (speed, depth, suicide-risk urgency). Contract 2: treat the floor — combination therapy, years-long horizon — offered at the celebration moment.", topic: "Management" },
    { question: "The two clocks: cyclothymic vs borderline instability — give the separating sentence you would teach a junior.", answer: "'Does the mood swing in DAYS-TO-WEEKS without a cause, or in HOURS after a quarrel?' The first is the cyclothymic metronome (with a family history worth mapping); the second belongs to the borderline conversation. Many women carry the first label wrongly for a decade.", topic: "Differential" },
    { question: "Why is cyclothymia's diagnosis 'always provisional'? State the conversion-range finding and the re-evaluation contract.", answer: "Because the amplitude can grow: 15–50% of clinic samples convert to diagnosable bipolar I/II across long follow-ups. The contract: yearly review with two questions — 'any week you did not need sleep? any episode you now call too high?' — plus charting and the trained family.", topic: "Course" },
    { question: "The Keller-era combination finding: state it and name the therapy designed specifically for chronic depression.", answer: "Medication + psychotherapy clearly outperforms either alone in chronic depression (Keller et al., NEJM 2000, ~85% response for the combination vs ~55% either alone; replicated with SSRIs since). The purpose-built therapy is CBASP — Cognitive Behavioural Analysis System of Psychotherapy.", topic: "Evidence" },
    { question: "Give the antidepressant-caution logic for both cyclothymia and hyperthymia-landing-depression.", answer: "Cyclothymia: SSRIs on the low weeks can switch or accelerate the rhythm — not first-line; if used reluctantly, the switch watch applies and chart-documented worsening means stop. Hyperthymia-landing-depression: the temperament argues for a bipolar floor under the depression — carry the activation/switch vigilance, not an automatic drug change.", topic: "Management" },
    { question: "The hyperthymic temperament's four traits and the two clinical contexts where it matters.", answer: "Traits: lifelong cheerful energy; 4–5-hour sleep sufficiency; confidence verging on arrogance with risk-taking; warmth and charisma with starts-and-leaves ventures. Contexts: (1) depression landing on it (bipolar-floor caution); (2) family psychoeducation — the pedigree awareness that turns the family into the early-warning system.", topic: "Foundations" },
  ],
  faqs: [
    { question: "Doctor, this is my personality — how can a tablet change who I am?", answer: "We are not changing who you are; we are checking whether a treatable condition has been wearing your personality's clothes for twenty years. In a majority of cases like yours, lifting the grey changes the weather, not the person — and most patients say they finally meet the person they might always have been." },
    { question: "But I function — I run the house, I go to work. Depressed people cannot.", answer: "Depressive EPISODES stop function; the chronic low-grade kind runs alongside it at a cost you have stopped noticing — the joylessness, the tiredness, the two good weeks a month. Functioning is not the test; the weather inside is." },
    { question: "I have been like this since school — is it not too late to treat?", answer: "Duration does not immunise; the chronic form is very treatable, slightly slower to respond (we judge the medicine at 8–12 weeks), and the treatment runs longer because the illness runs longer — months to years, not weeks." },
    { question: "My wife is moody — is she not just difficult?", answer: "The question that separates: do the swings come in WEEKS without a cause, or in HOURS after a quarrel? The first is a soft bipolar-spectrum rhythm (with a family history worth mapping); the second belongs to a different conversation. Many women carry the first label wrongly for a decade." },
    { question: "The breakdown got treated and he is back to normal — why continue medicine?", answer: "His normal was the illness's resting level; the episode was its mountain. Treat the mountain and keep the valley, and the next mountain is on the way — the chronic floor is the actual disease we are now treating." },
    { question: "Will she become full bipolar one day, doctor?", answer: "In a minority, yes — a minority the yearly review catches early (any sleepless-euphoric stretch is the flag); the charting and the trained family are exactly what convert 'one day' into 'caught in week one'." },
    { question: "Is hyperthymia — my husband's four-sleep-hour brilliance — an illness?", answer: "No: a temperament, and a family-tree fact. It needs no treatment until it needs context — a depression landing on it, or a descendant's escalation — and then it is the diagnostic clue we are glad to have." },
    { question: "Can therapy alone not fix the chronic kind? I dislike tablets.", answer: "Honestly, this is the one condition where the two together clearly beat either alone — the therapy builds the skills the grey years never taught, and the medicine clears the fog those skills must work in. Refusing half the treatment is choosing half the result." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR — Persistent depressive disorder and cyclothymic disorder chapters (paraphrased; criteria not reproduced) (2022)" },
      { source: "ICD-11 — Persistent mood disorders grouping (2022 release)", url: "https://icd.who.int/" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.5.9 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — persistent mood disorders (2022)" },
    ],
    trials: [
      { source: "Keller MB, McCullough JP et al. — chronic-depression combination-treatment trial (NEJM, 2000)" },
      { source: "Klein DN, Shankman SA, Rose S — dysthymia follow-up course studies (stability, double-depression rates, recovery trajectories)" },
    ],
    reviews: [
      { source: "McCullough JP — the CBASP manual literature (the therapy designed for chronic depression)" },
      { source: "Akiskal HS — the soft bipolar spectrum: cyclothymia, hyperthymic temperament, family-genetic tier (the conceptual canon)" },
      { source: "Judd LL — sub-syndromal-symptom burden studies (the 'always ON' cost evidence)" },
      { source: "Furukawa T et al. — dysthymia-treatment meta-analytic tier (combination-plus-chronicity findings)" },
      { source: "Weissman MM, Klerman G — the IPT lineage, chronic and dysthymic-spectrum applications" },
      { source: "Piccinelli M, Wilkinson G — dysthymia prevalence and burden synthesis (WHO primary-care tier)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "NMHS India 2015–16 — the common-mental-disorder frame the sub-syndromal tier hides inside" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the below-the-threshold mood disorders, treatment basics, Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "Definitions, mechanism stories, clinical picture, diagnosis and management at UG depth.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with differentials, exam lens, cases and India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "36 min",
      description: "Everything — full evidence grading, decision path, cases, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The below-threshold three: the climate, the metronome, the temperament.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define all three conditions by duration-and-amplitude logic and state the Keller finding and conversion range." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The low-set thermostat, the identity-fusion trap, the family echo.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why chronic low mood fuses with identity and what that does to help-seeking — and why the amplitude can grow." },
    { number: 3, title: "Clinical Practice", description: "Timeline-first diagnosis, the two-contract sequence, the combination evidence.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can draw the life-chart, sequence the double-depression contracts, judge a drug at 8–12 weeks, and apply the cyclothymia antidepressant caution." },
    { number: 4, title: "Indian Context", description: "The three costumes, the entrapment patterns, the marriage-disclosure tier.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the trait-vs-state conversation in the family's language and run the two-question screen rescue in primary care." },
    { number: 5, title: "Exam Revision", description: "Exam lens, cases, drug navigation and high-yield.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the duration-gate and combination-evidence questions cold, and you know which drug lessons exist and which are missing." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — Persistent depressive disorder + cyclothymic disorder chapters (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-27" },
    { id: "S2", source: "New Oxford Textbook of Psychiatry 2e, ch 4.5.9 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-27" },
    { id: "S3", source: "Keller MB, McCullough JP et al. — chronic-depression combination-treatment trial (NEJM)", sourceType: "trial", year: "2000", locator: "https://doi.org/10.1056/NEJM200005183422001", dateReviewed: "2026-09-27" },
    { id: "S4", source: "McCullough JP — CBASP manual literature (the therapy designed for chronic depression)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S5", source: "Klein DN, Shankman SA, Rose S — dysthymia follow-up course studies", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S6", source: "Akiskal HS — the soft bipolar spectrum: cyclothymia, hyperthymic temperament, family-genetic tier", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-27" },
    { id: "S7", source: "Judd LL — sub-syndromal-symptom burden studies (the 'always ON' cost evidence)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-27" },
    { id: "S8", source: "Alpert J, Fava M — antidepressant findings in apparent-unipolar bipolar-spectrum populations", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S9", source: "Furukawa T et al. — dysthymia-treatment meta-analytic tier", sourceType: "meta-analysis", year: "2000s", dateReviewed: "2026-09-27" },
    { id: "S10", source: "Piccinelli M, Wilkinson G — dysthymia prevalence and burden synthesis (WHO primary-care tier)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-27" },
    { id: "S11", source: "Weissman MM, Klerman G — the IPT lineage; chronic and dysthymic-spectrum applications", sourceType: "review", year: "classic series", dateReviewed: "2026-09-27" },
    { id: "S12", source: "National Mental Health Survey of India 2015–16 (Gururaj G et al., NIMHANS) — common-mental-disorder frame (~2.7% depressive disorders, ~85% treatment gap)", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-27" },
    { id: "S13", source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — persistent mood disorders", sourceType: "textbook", year: "2022", dateReviewed: "2026-09-27" },
  ],
  evidenceMap: [
    { text: "Persistent depressive disorder lifetime prevalence 1.5–6% depending on instrument; early-onset form dominates; women over-represented.", grade: "supported", sources: ["S10", "S13"] },
    { text: "A substantial share of dysthymic patients experience at least one superimposed major episode across follow-up — double depression.", grade: "established", sources: ["S5"] },
    { text: "Combination pharmacotherapy-plus-psychotherapy clearly outperforms either alone in chronic depression (Keller NEJM 2000; replicated tier with SSRIs).", grade: "established", sources: ["S3", "S9"] },
    { text: "CBASP is the psychotherapy purpose-built for chronic depression's interpersonal psychology.", grade: "established", sources: ["S4"] },
    { text: "Chronic depression judges an antidepressant at 8–12 weeks; maintenance runs for years — the treatment's clock matches the disease's.", grade: "supported", sources: ["S3", "S13"] },
    { text: "Cyclothymia affects ~0.4–1%; 15–50% of clinic samples convert to diagnosable bipolar I/II across long follow-ups.", grade: "supported", sources: ["S6", "S13"] },
    { text: "Cyclothymic and hyperthymic temperaments aggregate in bipolar families — the soft-spectrum family-genetic borderland.", grade: "established", sources: ["S6"] },
    { text: "SSRIs in below-threshold bipolar-spectrum patients can induce switching or acceleration — the antidepressant caution.", grade: "supported", sources: ["S8", "S6"] },
    { text: "Hyperthymic baseline in a 'unipolar' depression raises the odds of a bipolar floor — vigilance, not automatic drug-class change.", grade: "supported", sources: ["S6", "S8"] },
    { text: "Sub-syndromal chronic states carry more cumulative life-years-lost than the episodic disorders — the 'always ON' burden logic.", grade: "supported", sources: ["S7"] },
    { text: "The two clocks (days-to-weeks untriggered vs hours interpersonally triggered) separate cyclothymic from borderline instability clinically; comorbidity exists and the clocks still differ.", grade: "supported", sources: ["S6", "S13"] },
    { text: "Indian chronic low-grade mood disorders hide inside the somatic-and-'tension' primary-care sea; the two-question screen plus the duration question is the rescue instrument.", grade: "supported", sources: ["S12"], note: "Clinical-practice inference layered on NMHS broad-tier data — no Indian sub-syndromal survey tier exists." },
    { text: "Untreated chronic floor after double-depression episode remission drives relapse — the 'return to baseline-that-was-never-healthy' mechanism.", grade: "established", sources: ["S5", "S7"] },
  ],
};
