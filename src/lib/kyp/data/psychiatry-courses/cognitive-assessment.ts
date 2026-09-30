import type { PsychiatryCourse } from "./types";

/**
 * COGNITIVE ASSESSMENT — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/cognitive-assessment.md — untouched
 * foundation), source_map lineage: NOTP 2e (2009) ch 1.8.3
 * (Part 1) — Powell's original rewrite: test theory, the
 * Wechsler scales, and the memory, attention and executive
 * batteries with their reliability tables described, not
 * reproduced — re-researched against the lineages the note
 * itself cites (Kline's psychometrics, the Folstein MMSE, the
 * Wechsler scale tradition and its manuals, Raven's Matrices,
 * Robertson's TEA, the Rey-Osterrieth family, Warrington's
 * RMT, the Goodglass-Kaplan and Kertesz aphasia batteries,
 * Baddeley's Rivermead, Wilson's AMI, the Lezak-Strauss-
 * Mitrushina reference tier, Shallice and Burgess's
 * dysexecutive framework, Gronwall's PASAT and Coughlan and
 * Hollows's AMIPB) with per-claim provenance.
 *
 * Drug routes: NONE — the note assigns no medication any role
 * in psychometrics; drugLinks is empty by design and the
 * cognitive-enhancer routes belong to the dementia courses,
 * never invented here. The empty neurotransmitters array is
 * equally deliberate: the note grounds no chemical content —
 * the neuroscience taught here is circuit-level (the
 * dysexecutive, frontal), never fabricated.
 */
export const cognitiveAssessmentCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "cognitive-assessment",
  title: "Cognitive Assessment",
  shortName: "Cognition",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Cognitive Assessment"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Psychometrics of mind measurement — intelligence, memory and neuropsychological testing",

  summary:
    "Cognitive assessment is measurement, and every measurement carries error. This course teaches the true-score equation, the reliability-validity discipline, the difference-score traps, and the domain batteries — from Wechsler IQ to memory, attention and executive testing.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the measurement axiom and the classical equation (x = t + e) with the SEM-reliability relationship, and explain why even diagnosis is a form of measurement.",
    "Distinguish the five types of reliability (scorer, test-retest with the 0.8 threshold, parallel-form, split-half, internal consistency with the 0.7 floor) and the seven types of validity (face, content, concurrent, predictive, construct, factorial, incremental).",
    "Use the scales of measurement (nominal, ordinal, interval) and the statistics each permits, and explain why the chapter's tests aspire to interval level.",
    "Convert scores to z-scores, percentiles and IQ equivalents, and use the category bands (deficient below the 2.5th percentile; borderline 2.5–10th; low average 10–25th; average 25–75th; superior above the 90th).",
    "Apply the difference-score discipline: a reliable difference (about 9 VIQ-PIQ points on the WAIS-III) is not an abnormal difference (about 22 points in adults, 26 in children), and the subtest abnormality threshold (11–12 points).",
    "Use the MMSE as a screen only — the 24-or-less rule with its education caveat — and describe the Wechsler architecture (ages, subtests, index scores, FSIQ reliability and SEM).",
    "Name the domain batteries and individual tests: speed (PASAT, Map Search, digit cancellation); attention (the Test of Everyday Attention); memory (WMS-III, CMS, Rivermead, Rey AVLT, Rey-Osterrieth, RMT, AMI); language (BDAE, WAB, Boston and Graded Naming, Token, WORD); executive function (the dysexecutive syndrome).",
    "Read a test manual with the 13-point checklist; name the common test problems; state the non-English-testing caveat and the ecological-validity question.",
  ],
  quickFacts: [
    { label: "The axiom", value: "Assessment is measurement", detail: "The evaluation of the individual in numerical or categorical terms under statistical and psychometric principles — and even diagnosis is a form of measurement, carrying reliability and validity like any test" },
    { label: "The equation", value: "x = t + e", detail: "The observed score is the true score plus error — the most basic equation in psychometrics; the SEM (SD√(1 − reliability)) is the scatter of observed scores around the true score, and perfect reliability drives it to zero" },
    { label: "The floors", value: "0.8 and 0.7", detail: "Test-retest reliability below 0.8 is dubious; internal consistency (α) below 0.7 is not acceptable; scorer agreement should be near perfect — the thresholds that make the SEM interpretable" },
    { label: "The bands", value: "IQ mean 100, SD 15", detail: "Below the 2.5th percentile deficient (IQ 70); 2.5–10th borderline (75–80); 10–25th low average (85–90); 25–75th average (90–110); 75–90th high average (115–120); above the 90th superior" },
    { label: "The 9/22 rule", value: "Reliable is not abnormal", detail: "A VIQ-PIQ difference of about 9 points is reliable (reproducible at the 95% level) — yet 18% of adults differ by 10 or more; abnormality (under 5% of the population) needs about 22 points in adults, 26 in children, and 11–12 points of subtest scatter" },
    { label: "The screen", value: "MMSE 24 or less", detail: "Raises the possibility of dementia in older persons with nine or more years of education (24 is about the 10th percentile at 65+) — a screen only: neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone" },
    { label: "The stability paradox", value: "FSIQ reliability ~0.98", detail: "SEM about 2.5 — all scores carry ±5 points — and the IQ is therefore insensitive to anything except gross brain damage; subtest analysis under the difference-score discipline does the sensitive work" },
    { label: "The retest trap", value: "Practice effects to 15 points", detail: "WMS-III index reliabilities run 0.60–0.87 with practice effects up to 15 points across 5 weeks and SEM 3.88–7.40 — true scores at best ±8 points; retest gains can be learning, not recovery" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia — The Gradual Erasure", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The disease the MMSE screens for — the 24-or-less rule and the full assessment that must follow the positive screen" },
    { label: "Mild Cognitive Impairment", type: "condition", href: "/psychiatry/mci/", note: "The boundary state where the difference-score discipline and the change-over-time assessment earn their keep" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The acute cognitive disorder — the same brief repeatable screens gauge change where the picture fluctuates from hour to hour" },
    { label: "Memory Rehabilitation", type: "condition", href: "/psychiatry/memory-rehabilitation/", note: "The intervention tier the memory batteries inform — assessment and rehabilitation of the same registration-storage-retrieval processes" },
    { label: "Traumatic Brain Injury Neuropsychiatry — The Invisible Triad", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The concussion-sensitive speed battery (PASAT and kin) and the head-injury validity of the Test of Everyday Attention" },
    { label: "Child Neuropsychiatry", type: "condition", href: "/psychiatry/child-neuropsychiatry/", note: "The child instruments — WISC-IV 6.0–16.11, WPPSI below it, the Children's Memory Scale 5–16" },
    { label: "Intellectual Disability — Supports, Not Just Scores", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The IQ category bands' clinical home — deficient below the 2.5nd percentile, borderline above it, and the assessment that must never be a single score" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The parent discipline — history, examination and the cognitive assessment inside the full psychiatric work-up" },
    { label: "Personality Assessment", type: "condition", href: "/psychiatry/personality-assessment/", note: "The sibling psychometric course — the same reliability-validity discipline applied to personality measurement" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The supervisory system's seat — the dysexecutive syndrome most frequently frontal, never exclusively" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Cognitive assessment runs on one engine: the conversion of an observed number into a true-score statement with known error, against norms, under thresholds. The axiom first — assessment, testing and measurement are the evaluation of the individual in numerical or categorical terms under statistical and psychometric principles, and even diagnosis is a form of measurement that should carry reliability and validity like any test. Classical test theory supplies the core: every test aims at a real quantity (the true score t); the obtained score is the observed score x; every test carries error e; hence x = t + e — the most basic equation in psychometrics. Repeated testing would scatter observed scores around the true score with a standard deviation, the standard error of measurement, and SEM = SD√(1 − r): a good test drives the SEM toward zero, and perfect reliability gives SEM zero. Reliability comes in five types with their floors (scorer near-perfect; test-retest at 0.8; parallel-form; split-half; internal consistency at 0.7) and validity in seven (face, content, concurrent, predictive, construct, factorial, incremental) — with the threat examples that keep them honest: the numeracy test so stressful the scores track anxiety, the social-comprehension test so culturally biased the scores track ethnicity. The scales of measurement (nominal, ordinal, interval) fix the permitted statistics; the standard-score logic (z = (x − m)/SD, percentiles, the IQ mapping at mean 100 SD 15) converts raw performance into position against norms, with the category bands from deficient to superior. And the discipline that guards the whole machine is the difference-score doctrine: reliability of a difference (about 9 VIQ-PIQ points on the WAIS-III — reproducible) is a different question from abnormality of a difference (about 22 points in adults — found in fewer than 5% of the population), and the failure to distinguish them generates, in the Oxford chapter's words, all manner of erroneous conclusions.",
    steps: [
      "The axiom: assessment is measurement — the evaluation of the individual in numerical or categorical terms under statistical and psychometric principles; even diagnosis is a form of measurement and should carry reliability and validity like any test.",
      "Classical test theory: the true score t (the real quantity the test aims at), the observed score x, the error e — the basic equation x = t + e, with the statistical aim of driving the error term toward zero.",
      "The precision engine: the standard error of measurement, SEM = SD√(1 − r) where r is the test-retest reliability — repeated testing scatters observed scores around the true score with this SD; perfect reliability gives SEM zero.",
      "The quality gates: five reliability types (scorer, test-retest with the 0.8 floor, parallel-form, split-half, internal consistency with the 0.7 floor) and seven validity types (face, content, concurrent, predictive, construct, factorial, incremental).",
      "Standardisation: the scales of measurement (nominal, ordinal, interval) fix the permitted statistics; z = (x − mean)/SD converts to percentiles and IQ equivalents (mean 100, SD 15) with the category bands from deficient to superior.",
      "The difference-score discipline: reliable (about 9 VIQ-PIQ points, reproducible at the 95% level) versus abnormal (about 22 points in adults, 26 in children — fewer than 5% of the population; subtest scatter 11–12 points) — two independent questions, endlessly confused.",
      "The test-user's duties: the manual's disclosure checklist (development history to ceiling and floor effects), the common test problems, and the local caveat — ask local psychologists what they use.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal", name: "Prefrontal cortex (the supervisory seat)", role: "The supervisory system exerting executive control of attention — its damage the most frequent cause of the dysexecutive syndrome (changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance); the frontal-lobe syndrome is a dysexecutive syndrome, but other lesion patterns also produce it.", grade: "established" },
    { id: "medial-temporal", name: "Medial temporal lobes (the memory substrate)", role: "The registration-storage-retrieval complex the memory batteries assay — verbal and spatial, short-term and long-term — the WMS-III's auditory and visual immediate, delayed and recognition indices testing the systems whose failure presents as the memory complaint.", grade: "supported" },
    { id: "perisylvian", name: "Perisylvian language network (the aphasia territory)", role: "The auditory-comprehension and oral-expression circuitry the language batteries map — the BDAE and WAB in full, the Boston and Graded Naming and Token screeners in brief — and the confound that forces the non-verbal battery wherever it fails or the language is not the patient's own.", grade: "supported" },
    { id: "distributed-speed", name: "Distributed speed networks (the concussion meter)", role: "The processing-speed substrate the timed batteries tap — choice-reaction tasks, Map Search, coding, the PASAT — sensitive to even mild concussion, and on the AMIPB's timed cancellations separable into motor from mental slowing.", grade: "proposed" },
  ],
  neurotransmitters: [],
  pathways: [
    {
      id: "measurement-pathway",
      name: "The measurement pathway (observed score to interpreted score)",
      steps: [
        { label: "The test administered under standard conditions", detail: "The administration standard and scoring criteria exactly as the manual prescribes — the first condition of measurement" },
        { label: "The observed score x", detail: "The number on the page — the true score t plus the error e, never the truth alone" },
        { label: "The error discipline applied", detail: "SEM = SD√(1 − r): reliability fixes the precision; a good test drives the SEM toward zero" },
        { label: "Standardisation against norms", detail: "z = (x − m)/SD converts to percentiles (the 50th being the mean) and IQ equivalents (mean 100, SD 15)" },
        { label: "The category band, quoted with its error", detail: "Deficient to superior by percentile; the score stated with its band (all Wechsler scores ±5 points), never as an oracle" },
      ],
      clinicalManifestation: "The report that states IQ 92 with all scores carrying about ±5 points of measurement error — measurement returned where an oracle-reading would have been.",
      grade: "established",
    },
    {
      id: "interpretation-pathway",
      name: "The interpretation pathway (referral question to profile)",
      steps: [
        { label: "The referral question", detail: "What must this assessment decide — dementia possibility, a domain deficit, change over time, the language-education context?" },
        { label: "Test selection by domain and age", detail: "Wechsler scales for ability (WAIS-III-UK 16–89, WISC-IV 6.0–16.11, WPPSI), WMS-III or CMS by age for memory, the TEA for attention, the speed battery, language and executive instruments" },
        { label: "Domain and index scores generated", detail: "Index scores mean 100 SD 15, subtests mean 10 SD 3 — each with its reliability and SEM from the manual" },
        { label: "The difference-score discipline applied", detail: "Reliable versus abnormal: about 9 versus about 22 VIQ-PIQ points in adults; subtest scatter 11–12 points" },
        { label: "The profile interpreted against the clinical picture", detail: "IQ's insensitivity respected — the sensitive information in the subtests, the domains and the differences, read with the history and the informant account" },
      ],
      clinicalManifestation: "The 16-point verbal-performance gap correctly reported as reliable but statistically common — instead of the false neuropsychiatry of the abnormal reading.",
      grade: "established",
    },
    {
      id: "screening-pathway",
      name: "The screening-to-battery pathway (the MMSE gate)",
      steps: [
        { label: "The clinical concern", detail: "An older person with cognitive complaints — or the need to track change over time" },
        { label: "The screen administered", detail: "MMSE: orientation, naming, language, memory, basic non-verbal skills — brief, repeatable, with good middle-age-and-elderly norms" },
        { label: "The education caveat applied", detail: "A score of 24 or less raises the possibility of dementia in older persons with nine or more years of education (24 about the 10th percentile at 65+)" },
        { label: "The screen's limit stated", detail: "Neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone" },
        { label: "The full assessment follows", detail: "Domain batteries against norms, interpreted with the clinical picture — the screen gating the battery, never replacing it" },
      ],
      clinicalManifestation: "The MMSE of 19 that triggers a full assessment rather than a diagnosis — the screen kept in its place.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "test-theory-era", time: "The foundations", title: "Classical test theory", description: "The discipline before the tests: the true score, the observed score, the error, the basic equation x = t + e; the reliability-validity tables; the scales of measurement — the psychometric-theory lineage (Kline) behind the Oxford chapter's treatment.", phase: "onset" },
    { id: "wechsler-era", time: "The scale tradition", title: "The Wechsler architecture", description: "The scales that carry detailed ability assessment — WAIS-III-UK 16–89, WISC-IV-UK 6.0–16.11, WPPSI below — with the subtest-index architecture, full-scale IQ reliability about 0.98, SEM about 2.5, and the reliable-versus-abnormal difference thresholds; the Progressive Matrices as the non-verbal alternative.", phase: "peak" },
    { id: "mmse-era", time: "The screening instruments", title: "Folstein's Mini-Mental State Examination", description: "The brief, repeatable screen: orientation, naming, language, memory, basic non-verbal skills; good middle-age-and-elderly norms; the 24-or-less rule with its education caveat — and the standing rule that neither presence nor nature of impairment is diagnosed on it alone.", phase: "peak" },
    { id: "classics-era", time: "The individual classics", title: "Rey, Osterrieth and Warrington", description: "The time-limited workhorses: the Rey Auditory-Verbal Learning Test (verbal learning, well researched), the Rey-Osterrieth Complex Figure (visual memory), the Recognition Memory Test (forced-choice words and faces), the Autobiographical Memory Interview (remote personal memory); the aphasia batteries (Goodglass and Kaplan's BDAE, Kertesz's WAB) and their brief screeners.", phase: "duration" },
    { id: "ecological-era", time: "The ecological turn", title: "Rivermead and the Test of Everyday Attention", description: "Instruments designed to reflect real-life tasks: the Rivermead Behavioural Memory Test (with its child version), the TEA's eight subtests with reliabilities over 0.83 and validity demonstrated by sensitivity to head injury and stroke; Gronwall's PASAT and Coughlan and Hollows's AMIPB for speed.", phase: "duration" },
    { id: "present-discipline", time: "Now", title: "The test-user's duties", description: "The present discipline: read the manual (the 13-item disclosure checklist), know the common test problems (small samples, unstable factor structures, no criterion groups, vague scoring, absent difference-score data), and ask local psychologists what they use — the Indian instruction.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the measurement discipline as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The note's lineage records no survey numbers — the honest epidemiology is structural. Cognitive assessment is deployed wherever thinking is in question: the dementia assessments of old age, the follow-up of head injury, the developmental questions of childhood, the profile work of every brain-behaviour interface. Its true population is every number psychiatry produces — rating scales, screening tools and diagnoses alike — because even diagnosis is a form of measurement and should carry reliability and validity like any test.",
    indianPrevalence: "The Indian deployment reality: imported test kits and their licences concentrate in major private centres; the MMSE, the Rey figures and the verbal-learning lists are free; the scarce resource is trained neuropsychologists — so district practice relies on the screening-plus-informant discipline with referral for the battery, and the NIMHANS neuropsychological adaptations are the referral-tier instruments that should be preferred to imported norms.",
    lifetimeRisk: "Not applicable as a risk — this course's population is every patient in whose care a number is produced; the question is never whether to measure, but whether the measurement carries its error honestly.",
    genderRatio: "Not recorded by the note's lineage — the psychometric discipline is sex-neutral; only the norms, never the thresholds, vary.",
    ageOfOnset: "Not applicable — the batteries span the ages: WPPSI and WISC-IV below 16.11, WAIS-III-UK 16–89, WMS-III 16–89, the Children's Memory Scale 5–16, and the MMSE with good middle-age-and-elderly norms.",
    indianNotes: "The education gradient is the Indian variable: MMSE and similar instruments carry education gradients far steeper in India's literacy distribution — literacy-adjusted norms (developed by Indian centres) and education-stratified interpretation are mandatory, exactly the reliability-threat logic the chapter teaches: the test measuring education rather than cognition.",
  },
  etiology: [
    { category: "biological", factor: "Random measurement error (the e in x = t + e)", details: "Every observed score scatters around the true score on retesting with a standard deviation — the SEM; SEM = SD√(1 − r), so a test-retest reliability below 0.8 or an α below 0.7 leaves the error band too wide for clinical work; the full-scale IQ's ~0.98 reliability gives SEM ~2.5 — all scores ±5 points." },
    { category: "psychological", factor: "Practice effects and state variables", details: "Memory batteries show practice effects of up to 15 points across 5 weeks (WMS-III) and 10–15 points over 2 months (CMS) — retest gains can be learning, not recovery. The validity threats of the same family: a numeracy test so stressful the scores track anxiety; a social-comprehension test so culturally biased the scores track ethnicity." },
    { category: "social", factor: "Education and culture as the confound", details: "The MMSE's 24-or-less rule holds only for nine-or-more years of education — an illiterate 70-year-old failing the orientation-reading items is not demented by that failure; the gradient is far steeper in India's literacy distribution; second-language assessment measures language, not cognition." },
    { category: "environmental", factor: "Poor instruments", details: "The common test problems: small standardisation samples; unknown or unstable factor structures; poor theoretical adequacy; no criterion groups; vague scoring; absent difference-score data — the onus of gauging strengths and limitations on the user, through the manual's disclosure checklist." },
    { category: "psychological", factor: "The interpreter's error", details: "The difference-score trap: a reliable difference (about 9 VIQ-PIQ points, reproducible at the 95% level) is not an abnormal one (about 22 points in adults — fewer than 5% of the population); confusing the two generates all manner of erroneous conclusions — the false neuropsychiatry the chapter warns against." },
  ],
  symptomClusters: [
    {
      category: "1. The domain deficits the batteries assay",
      symptoms: [
        "Processing speed slowed — sensitive to even mild concussion; choice-reaction tasks, Map Search, coding, the PASAT's paced additions",
        "Attention failing — focusing resources, focusing on the right aspect, sustaining, ignoring distraction, dividing attention",
        "Memory failing — registration, storage and retrieval across verbal and spatial modalities and short-term, long-term and learning periods",
        "Language failing — word-finding, auditory comprehension, written understanding and writing",
        "Executive failing — changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance: the dysexecutive syndrome",
      ],
    },
    {
      category: "2. The profile signals on testing",
      symptoms: [
        "Verbal-performance IQ discrepancies — reliable from about 9 points, abnormal from about 22 in adults (26 in children)",
        "Subtest scatter — a range of 11–12 points before abnormality is declared (under 5% of people scatter that far)",
        "Memory-versus-IQ and index-versus-index differences — each judged by its own reliability and abnormality data",
        "Reading-versus-IQ differences — the WORD reading and spelling ages whose abnormal discrepancy from IQ identifies dyslexia",
      ],
    },
    {
      category: "3. The misreading signals (the report's warning signs)",
      symptoms: [
        "A single score quoted without its error band — the oracle-reading",
        "A screen score reported as a diagnosis — the MMSE read beyond its education-conditional 24-or-less screen-positive",
        "A change score reported without the retest discipline — practice effects of 10–15 points unacknowledged",
        "A reliable difference reported as brain damage — the 9/22 confusion generating false neuropsychiatry",
      ],
    },
    {
      category: "4. The context signals (the Indian clinic)",
      symptoms: [
        "The illiterate elder failing the orientation-reading items — education measured, not cognition",
        "Cognition assessed in the patient's second language — language, not cognition",
        "Reports built on imported Western norms without literacy adjustment",
        "No neuropsychologist in the district — the screening-plus-informant discipline carrying the load, referral for the battery",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The reliability standard",
      code: "Five types, two floors",
      criteria: [
        "Scorer (rater) reliability: two judges agree — should be near perfect.",
        "Test-retest reliability: the same result on separated occasions, as a correlation — below 0.8 is dubious.",
        "Parallel-form reliability: equivalent versions of the test agree.",
        "Split-half reliability: odd versus even items correlate, with the Kuder-Richardson mean of all splits.",
        "Internal consistency: item-to-item correlation — α not below 0.7.",
      ],
      duration: "Established once per instrument in its manual — and re-checked by the user every time the test is chosen.",
      indianNote: "The floors travel unchanged across languages; the instrument itself often does not — the local adaptation's reliability coefficients are the ones that apply.",
    },
    {
      system: "The validity standard",
      code: "Seven types",
      criteria: [
        "Face validity: seems sensible — non-statistical, but without it patients see no point.",
        "Content validity: covers all aspects — expert judgement.",
        "Concurrent validity: discriminates criterion groups; correlates with kindred tests.",
        "Predictive validity: forecasts future criteria (child IQ to adult occupation) — concurrent and predictive jointly criterion-related.",
        "Construct validity: measures the hypothetical construct — convergent and divergent correlations.",
        "Factorial validity: stable subfactors.",
        "Incremental validity: improves actual decision-making — do neuropsychological results improve brain-injury detection?",
      ],
      duration: "Re-established for every new use, population and language — validity is a property of the interpretation, not only of the instrument.",
      indianNote: "The threat examples carry the Indian teaching directly: the culturally biased test whose scores track ethnicity is the education-gradient problem the India lens makes central.",
    },
    {
      system: "The manual's disclosure standard",
      code: "What a good manual contains — the 13-point checklist",
      criteria: [
        "Development history; the construct and purpose.",
        "The standardisation sample; criterion-group data; age-range data.",
        "The administration standard and the scoring criteria.",
        "Means and SDs; reliability coefficients and how obtained; validity measures; the SEM.",
        "The reliability AND abnormality of difference scores; subtest scatter data.",
        "Criterion-group scores; unsuitable groups; the ceiling and floor effects.",
      ],
      duration: "Read before the first administration — the checklist is the test-user's due diligence.",
      indianNote: "In India the unsuitable-groups line does the decisive work: manuals standardised on Western samples name no Indian literacy band — the local psychologist's validated adaptation is the instrument that answers the checklist.",
    },
  ],
  severityScales: [
    {
      name: "MMSE",
      fullName: "Mini-Mental State Examination (Folstein et al.)",
      measures: "Orientation, naming, language, memory and basic non-verbal skills — brief and repeatable over time to gauge change, with good middle-age-and-elderly norms.",
      ranges: [
        { min: 0, max: 24, severity: "Screen-positive (with nine or more years of education)", action: "Raises the possibility of dementia in older persons — 24 is about the 10th percentile at 65+; a screen only: neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone" },
        { min: 25, max: 30, severity: "Screen-negative", action: "Does not exclude impairment where clinical concern persists — the full assessment and the clinical picture decide" },
      ],
      indianNote: "The education caveat is the Indian instruction's core: literacy-adjusted norms (developed by Indian centres) and education-stratified interpretation are mandatory — an illiterate elder failing the orientation-reading items is not demented by that failure.",
    },
    {
      name: "The IQ category bands",
      fullName: "Wechsler deviation IQ mapping (mean 100, SD 15)",
      measures: "General ability position against age norms, by percentile band — the interpretation frame for every index and IQ score the Wechsler scales produce.",
      ranges: [
        { min: 0, max: 2.5, severity: "Deficient", action: "Below the 2.5th percentile — IQ about 70" },
        { min: 2.5, max: 10, severity: "Borderline", action: "2.5–10th percentile — IQ about 75–80" },
        { min: 10, max: 25, severity: "Low average", action: "10–25th percentile — IQ about 85–90" },
        { min: 25, max: 75, severity: "Average", action: "25–75th percentile — IQ about 90–110" },
        { min: 75, max: 90, severity: "High average", action: "75–90th percentile — IQ about 115–120" },
        { min: 90, max: 100, severity: "Superior", action: "Above the 90th percentile" },
      ],
      indianNote: "The bands assume the norms fit the person — in India the education and language context decides whether they do; quote the band with its ±5-point error, never as an oracle.",
    },
  ],
  differentialDiagnosis: [
    { condition: "A reliable difference vs an abnormal difference", distinguishingFeatures: "About 9 VIQ-PIQ points on the WAIS-III is statistically reliable — reproducible at the 95% level — yet 18% of adults differ by 10 or more points; abnormality (fewer than 5% of the population) requires about 22 points in adults and 26 in children; VCI-PRI: reliable about 11, abnormal about 26; subtest scatter abnormal from 11–12 points.", keyDifferentiator: "Reliability is a property of the measurement; abnormality is a property of the population — the two questions are independent, and failure to distinguish between them leads to all manner of erroneous conclusions." },
    { condition: "A positive screen vs a diagnosis", distinguishingFeatures: "An MMSE of 24 or less (nine or more years of education; about the 10th percentile at 65+) raises the possibility of dementia; the instrument is brief, repeatable over time to gauge change, with good middle-age-and-elderly norms.", keyDifferentiator: "Neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone — the full assessment and the clinical picture decide." },
    { condition: "True change vs practice effect", distinguishingFeatures: "Memory-battery gains on retesting — up to 15 points across 5 weeks (WMS-III, index reliabilities 0.60–0.87, SEM 3.88–7.40, true scores at best ±8 points) and 10–15 points over 2 months (CMS, reliabilities 0.76–0.91).", keyDifferentiator: "Change-claims need the manual's retest discipline behind them: the gain must exceed what retesting alone produces before recovery is declared." },
    { condition: "Domain deficit vs language-education confound", distinguishingFeatures: "Verbal subtests (vocabulary, similarities, information, comprehension) are education- and language-loaded; second-language testing assesses language, not cognition; the WORD reading and spelling ages identify dyslexia by the IQ-versus-reading difference-score abnormality.", keyDifferentiator: "Where language disorder or non-English testing confounds, the non-verbal battery carries the assessment — Progressive Matrices for non-verbal inductive reasoning, the performance subtests and the language-reduced Rey-Osterrieth." },
    { condition: "A normal full-scale IQ vs an intact brain", distinguishingFeatures: "Full-scale IQ is very stable (reliability about 0.98, SEM about 2.5 — all scores ±5 points) and therefore insensitive to anything except gross brain damage.", keyDifferentiator: "A normal FSIQ excludes only gross damage; the sensitive information lives in the subtests, the domains and the differences — subtest analysis under the difference-score discipline does the sensitive work." },
  ],
  management: [
    { category: "service-design", name: "Anchor the referral question first", description: "Test selection follows the question: dementia possibility (screen, then battery), a domain deficit (the domain instruments), change over time (the repeatable instruments with retest data), the language-education context (the non-verbal battery). The question, not the available test, drives the selection.", whenToUse: "Before any instrument is chosen — the referral question is the assessment's first instrument.", indianContext: "In district practice the question is usually dementia possibility or change: the screening-plus-informant discipline carries it, with referral for the battery where the neuropsychologist exists." },
    { category: "service-design", name: "Screen with the MMSE — inside its limits", description: "Brief and repeatable over time to gauge change; orientation, naming, language, memory, basic non-verbal skills; good middle-age-and-elderly norms; a score of 24 or less raises the possibility of dementia in older persons with nine or more years of education (24 about the 10th percentile at 65+) — a screen only: neither the presence nor the nature of impairment can be diagnosed on it alone.", whenToUse: "Every first-pass cognitive concern in older persons — and every serial change assessment.", indianContext: "The education caveat is the Indian core: literacy-adjusted norms and education-stratified interpretation are mandatory — an illiterate elder failing the reading-writing items is not demented by that failure." },
    { category: "service-design", name: "Deploy the battery by domain and age", description: "General ability: WAIS-III-UK 16–89, WISC-IV-UK 6.0–16.11, WPPSI below — subtests, index scores (verbal comprehension, perceptual organisation/reasoning, working memory/freedom from distractibility, processing speed; mean 100 SD 15; subtest mean 10 SD 3). Speed: choice-reaction tasks, Map Search and Telephone Search, coding, the PASAT (2.4-second pacing), digit cancellation, the AMIPB timed cancellations disentangling motor from mental slowing. Attention: the TEA (eight subtests, reliabilities over 0.83). Memory: WMS-III 16–89, CMS 5–16, the Rivermead (with child version) for everyday relevance; the individual classics — Rey AVLT, Rey-Osterrieth, RMT, AMI. Language: the BDAE and WAB in full; Boston and Graded Naming, Token, WORD in brief. Executive: the dysexecutive profile — cognitive estimates, fluency, planning/search tasks (the Tower of London and Wisconsin family), behavioural measures.", whenToUse: "Whenever the screen or the referral question demands domain-level answers.", indianContext: "Ask local psychologists what they use: the NIMHANS adaptations exist and should be preferred to imported norms; the Rey-Osterrieth and the performance subtests carry the assessment where language confounds." },
    { category: "service-design", name: "Interpret under the difference-score discipline", description: "Every comparison checked against the reliability and abnormality data: VIQ-PIQ reliable about 9, abnormal about 22 (adults) and 26 (children); VCI-PRI reliable about 11, abnormal about 26; subtest scatter 11–12 points; every score quoted with its SEM (full-scale IQ ±5 points; WMS-III indices at best ±8); IQ's insensitivity respected — subtest analysis does the sensitive work.", whenToUse: "At the interpretation of every profile — the discipline that converts oracle-readings into measurements.", indianContext: "Indian trainees over-read single low scores; the 9/22 and 11–12 rules, the SEM band and the practice-effect warnings are the corrective." },
    { category: "service-design", name: "Assess change with the retest discipline", description: "Practice effects up to 15 points across 5 weeks on the WMS-III and 10–15 points over 2 months on the CMS; retest gains must exceed the manual's retest data before recovery is claimed; the SEM sets the change that measurement alone can explain.", whenToUse: "Every serial assessment — treatment response, recovery, decline.", indianContext: "The retest discipline matters most where follow-up batteries are rare — the manual's retest intervals respected and the gains interpreted against them, never as naked improvement." },
    { category: "psychotherapy", name: "Feed the result back honestly", description: "The feedback session delivers the score with its band (IQ 92 — all scores carry about ±5 points of measurement error), the band in plain language (average), and the profile's meaning against the referral question; the screen's limit restated; the next step named.", whenToUse: "Every assessment ends in a feedback conversation — the number means nothing until it is explained.", indianContext: "The Indian family script: what the number means, what it does not mean, and what the next assessment step is — the oracle-reading replaced by the measurement and its plan." },
  ],
  safety: {
    redFlags: [
      "A dementia diagnosis issued on an MMSE score alone — the commonest misreading of the commonest test; neither presence nor nature can be diagnosed on the screen",
      "A reliable VIQ-PIQ difference reported as brain damage — the false neuropsychiatry the 9/22 discipline exists to prevent",
      "A retest gain of 10–15 points on a memory battery reported as recovery without the practice-effect discipline",
      "A single low score oracle-read — no SEM band, no profile context, no referral question",
      "Cognition assessed in the patient's second language or on unadapted instruments — education and language measured, not cognition",
    ],
    urgentGuidance:
      "The interpretive order of operations: (1) put the screen back in its place — an MMSE score raises or lowers a possibility, it never diagnoses; (2) quote every score with its SEM band before anything else is said about it; (3) apply the difference-score thresholds — reliable (about 9 points) is not abnormal (about 22 in adults, 26 in children; subtest scatter 11–12 points); (4) check change against the manual's retest data — practice effects of 10–15 points on memory batteries are learning until proven otherwise; (5) verify the instrument fits the person — age range, language, education, the unsuitable-groups list; where it does not, ask local psychologists what they use and refer.",
  },
  drugLinks: [],
  contentGaps: [
    "No medication has any role in the note's psychometrics — drugLinks is empty by design; the cognitive-enhancer routes belong to the dementia courses (alzheimers-dementia, dementia-management), taught there, never invented here.",
    "The individual instruments this course teaches (MMSE, WAIS-III-UK, WISC-IV-UK, WPPSI, WMS-III, CMS, Rivermead, TEA, Rey AVLT, Rey-Osterrieth, RMT, AMI, BDAE, WAB, Progressive Matrices, PASAT, WORD) have no KYP lessons of their own — all are taught inside this course; no routes are implied.",
    "The NIMHANS Indian neuropsychological adaptations the India lens names have no KYP lesson — the ask-local-psychologists discipline is taught here instead.",
    "The neurotransmitters tier is deliberately empty: the note grounds no neurotransmitter content in cognitive-assessment theory — the neuroscience taught here is circuit-level (the dysexecutive, frontal), never chemical, and nothing is fabricated to fill the section.",
    "The dyslexia-identification logic (the WORD IQ-versus-reading difference-score abnormality) is taught at difference-score level here; the fuller specific-learning-disorder account belongs to the developmental-disorders territory — referenced, not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "Cognitive assessment is the set of tests doctors use to measure how the mind is working — memory, thinking speed, attention, language, planning and judgement. It ranges from a short bedside screen (the best known is the Mini-Mental State Examination, about ten minutes) to a full assessment by a psychologist using instruments such as the Wechsler scales. Every score is a measurement with a small margin of error, like a blood pressure reading — which is why doctors quote bands and ranges, not single verdicts.",
    whatCausesIt:
      "This is a procedure, not an illness. It is asked for when memory or thinking is in question: forgetfulness in old age, after a head injury, in illnesses that affect the brain, when a treatment's effect on thinking needs tracking, or when learning difficulties are suspected. A low score can reflect genuine difficulty, poor sleep or anxiety on the day, the test's own error margin, or — especially in India — a mismatch between the test's schooling and language assumptions and the person being tested.",
    symptoms:
      "The experiences that usually prompt testing: forgetting recent events, asking the same questions repeatedly, losing words mid-sentence, thinking slowing down, trouble following conversations, getting lost in familiar places, difficulties at work after an injury, or family noticing changes. None of these alone means dementia — which is exactly why the tests exist.",
    treatment:
      "There is no treatment here — there is a process. A screen first: brief, repeatable, never a diagnosis on its own. If indicated, a full assessment: tests chosen to match the question and the age, given under standard conditions, scored against norms. The results come back as a profile, not a single number, and are explained with their error margins. Where a disorder is found, its treatment belongs to that disorder's care; the assessment's job is to measure honestly so the right treatment follows.",
    selfHelp: [
      "Come rested, with glasses and hearing aids, and with the medicines list — tiredness and uncorrected senses cost points the brain did not lose.",
      "Tell the assessor your years of schooling and your strongest language — the norms depend on both, and testing in a second language measures the language, not the mind.",
      "Do not practise or 'prepare' for the tests — practice effects inflate later comparisons and can hide real change.",
      "Ask what the number means and what its margin is — a score is a band, not an oracle.",
      "Ask for the findings in writing, and for the next step — a screen result is a gate, not a verdict.",
      "Bring a family member who knows the day-to-day — the informant's account is part of the assessment, especially where schooling and language complicate the scores.",
    ],
    whenToSeekHelp: [
      "Sudden confusion or a sudden drop in memory — urgent assessment; do not wait for a scheduled test",
      "Memory or thinking changes interfering with money, medicines, routes or work — assessment, not reassurance",
      "A head injury with lingering slowness or poor concentration — the speed and attention tests exist for exactly this",
      "A report that diagnoses on a screen score alone, or reads a single number without explanation — a second opinion is reasonable",
      "Worsening of memory after any new medicine — the medication review is part of the cognitive picture",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — for guidance on where cognitive assessment is available",
      "The district hospital psychiatry OPD under the DMHP — the screening tier and the referral route for the full battery",
      "The treating team's feedback session — ask for the scores with their bands and the plan, in your own language",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs cognitive test use; practice follows the psychometric principles themselves — reliability, validity, norms, the difference-score discipline — with literacy-adjusted norms developed by Indian centres and the NIMHANS neuropsychological adaptations as the local instruments; the Oxford chapter's own instruction, ask local psychologists what they use, is the Indian rule.",
    systemContext: "The district reality: trained neuropsychologists are the scarce resource; district practice relies on the screening-plus-informant discipline — the MMSE plus the family's account of money-handling, route-finding and recipe-keeping — with referral for the battery where one exists; the imported kits and licences concentrate in major private centres.",
    programmeContext: "The DMHP district tier carries the screening and the informant work; the NIMHANS adaptations are the referral-tier instruments; the MMSE, the Rey figures and the verbal-learning lists are free — the costly layer is the imported kit and the licence, and above all the trained person to give and read the tests.",
    costConsiderations: "Approx 2026: the imported test kits and their licences are the costly layer (major private centres only); the MMSE, the Rey figures and the verbal-learning lists are free; the scarce resource is trained neuropsychologists — which is why the screening-plus-informant discipline with referral for the battery carries district practice.",
    culturalConsiderations: "The education problem is Indian psychometrics' central issue: the MMSE and similar instruments carry education gradients far steeper in India's literacy distribution — an illiterate 70-year-old failing the orientation-reading items is not demented by that failure, and literacy-adjusted norms with education-stratified interpretation are mandatory (the reliability-threat logic taught in the abstract: the test measuring education rather than cognition). The bilingual testing problem: assessing cognition in the patient's second language measures language, not cognition — the Rey-Osterrieth and the performance subtests carry the assessment, with the Progressive Matrices as the non-verbal anchor. The ecological-validity question: Indian functional demands differ — a Rivermead-style everyday-memory logic adapted to the household's real tasks (money-handling, route-finding, recipe-keeping) is the practical family-report supplement to batteries.",
    patientCounselling: [
      "The number script: 'Your score is 92 — that is the average band; every score carries about five points of measurement error either way, so we read bands, not oracles.'",
      "The screen script: 'The bedside test told us the question is worth asking — it cannot tell us the answer; the full assessment will.'",
      "The language script: 'We will test you where language does not get in the way — the figures and the patterns carry the assessment, and your own language carries the history.'",
      "The change script: 'Improvement on retesting can be practice, not recovery — the gain must be bigger than what retaking the test alone produces before we call it recovery.'",
      "The referral script: 'The district centre can do the screen and the history; the full battery needs the specialist — here is where, and when.'",
      "The family script: 'Your account of the money, the routes and the recipes is measurement too — often the most honest measurement we have.'",
    ],
  },
  decisionPath: {
    title: "The referral-question-gated testing flow",
    nodes: [
      {
        id: "start",
        question: "A cognitive assessment is requested. First: what is the referral question — and can this patient be tested validly?",
        branches: [
          { label: "An older person — is dementia a possibility?", next: "mmse-gate" },
          { label: "A domain deficit question — memory, speed, attention, language, executive", next: "domain-gate" },
          { label: "Change over time — treatment response, recovery, decline", next: "retest-path" },
          { label: "Language disorder or non-English testing confounds the verbal battery", next: "nonverbal-path" },
        ],
      },
      {
        id: "mmse-gate",
        question: "The Mini-Mental State Examination — administered with the education caveat in view.",
        branches: [
          { label: "24 or less, nine or more years of education", next: "mmse-positive-path" },
          { label: "Above 24, clinical concern persists", next: "domain-gate" },
        ],
      },
      {
        id: "mmse-positive-path",
        question: "The screen-positive result — what it does and does not establish.",
        recommendation: "The possibility of dementia is raised (24 is about the 10th percentile at 65+) — and nothing more: neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone. Proceed to full cognitive assessment integrated with the clinical picture; the screen's repeatability keeps it useful for gauging change over time.",
      },
      {
        id: "domain-gate",
        question: "The battery selected by domain — which domain carries the referral question?",
        branches: [
          { label: "General ability and intelligence", next: "ability-path" },
          { label: "Memory", next: "memory-path" },
          { label: "Speed and attention — including suspected mild concussion", next: "speed-path" },
          { label: "Language or executive function", next: "language-exec-path" },
        ],
      },
      {
        id: "ability-path",
        question: "General ability: the Wechsler architecture, matched to age.",
        recommendation: "WAIS-III-UK 16–89, WISC-IV-UK 6.0–16.11, WPPSI below — verbal subtests (vocabulary, similarities, digit span, arithmetic, information, comprehension, letter-number sequencing), performance subtests (picture completion, block design, coding, matrix reasoning, symbol search), index scores (verbal comprehension, perceptual organisation/reasoning, working memory/freedom from distractibility, processing speed). Full-scale IQ reliability about 0.98, SEM about 2.5 — all scores ±5 points — and the interpretive rule: IQ is very stable and therefore insensitive to anything except gross brain damage; subtest analysis under the difference-score discipline does the sensitive work.",
      },
      {
        id: "memory-path",
        question: "Memory: the batteries with their honest reliabilities.",
        recommendation: "WMS-III (16–89): index reliabilities 0.60–0.87 — rather low — with practice effects up to 15 points across 5 weeks and SEM 3.88–7.40 (true scores at best ±8 points). Children's Memory Scale (5–16): reliabilities 0.76–0.91, practice effect 10–15 points over 2 months. The Rivermead Behavioural Memory Test (with child version) where everyday relevance leads. Under time pressure, the individual classics: Rey Auditory-Verbal Learning Test, Rey-Osterrieth Complex Figure, Recognition Memory Test, Autobiographical Memory Interview — always against appropriate norms.",
      },
      {
        id: "speed-path",
        question: "Speed and attention: the concussion-sensitive battery.",
        recommendation: "Choice-reaction-type tasks, Map Search and Telephone Search (visual targets under time pressure), digit-symbol/coding, the PASAT (each new digit added to the previous, the classic 2.4-second pacing), digit-cancellation tasks, and the AMIPB's timed cancellations disentangling motor from mental slowing. Attention proper: the Test of Everyday Attention — eight subtests, test-retest reliabilities over 0.83 for Map and Telephone Search, validity demonstrated by sensitivity to head injury and stroke.",
      },
      {
        id: "language-exec-path",
        question: "Language and executive function: the full batteries and the brief screeners.",
        recommendation: "Language: the Boston Diagnostic Aphasia Examination and the closely related Western Aphasia Battery in full (long to administer); the brief screeners — Boston Naming and Graded Naming (word-finding), Token Test (verbal comprehension), the Wechsler Objective Reading Dimensions (reading and spelling ages, with the IQ-versus-reading difference-score abnormality for dyslexia identification). Executive: the dysexecutive syndrome profile — cognitive estimates, fluency, planning/search tasks such as the Tower of London and Wisconsin family, and behavioural measures.",
      },
      {
        id: "retest-path",
        question: "Change over time: the retest discipline before any claim.",
        recommendation: "Practice effects: up to 15 points across 5 weeks on the WMS-III, 10–15 points over 2 months on the CMS — gains can be learning, not recovery; the SEM sets what measurement alone explains. Change-claims need the manual's retest data behind them, and the interval respected; the improvement must exceed the retest effect before recovery is declared.",
      },
      {
        id: "nonverbal-path",
        question: "Language disorder or non-English testing: the non-verbal battery carries the assessment.",
        recommendation: "The Progressive Matrices (non-verbal inductive reasoning) as the anchor; the performance subtests and the language-reduced Rey-Osterrieth for visual memory. The chapter's own instruction applied: ask local psychologists what they use — in India, the validated translations, literacy-adjusted norms and the NIMHANS adaptations preferred to imported norms; the referral letter states the education and language history so the receiving psychologist can choose.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Calling a reliable difference abnormal",
      why: "A VIQ-PIQ difference of about 9 points is statistically reproducible at the 95% level — yet 18% of adults differ by 10 or more points; abnormality requires about 22 points in adults (26 in children). Reading the reliable-but-common gap as brain damage generates false neuropsychiatry — the chapter's all manner of erroneous conclusions.",
      correction: "The two questions asked separately every time: is the difference reliable (the manual's reliability data), and is it abnormal (the manual's difference-distribution data — fewer than 5% of the population)? Only both together carry pathology.",
    },
    {
      mistake: "Diagnosing dementia on the MMSE alone",
      why: "The MMSE is brief, repeatable and normed for middle and old age — but a score of 24 or less (nine or more years of education) raises a possibility, nothing more; neither the presence nor the nature of cognitive impairment can be diagnosed on it — the commonest misreading of the commonest test.",
      correction: "The screen gates the full assessment and the clinical picture; the score documented as a screen result with the education caveat, the next step named, and serial scores read as change under the retest discipline.",
    },
    {
      mistake: "Reading a retest gain as recovery",
      why: "Memory batteries show practice effects of 10–15 points on retesting (WMS-III up to 15 across 5 weeks; CMS 10–15 over 2 months) — the gain can be learning of the test, not healing of the brain; with index reliabilities of 0.60–0.87 some differences are noise.",
      correction: "Change-claims carry the manual's retest data: the gain must exceed the practice effect and the SEM before it means anything; the interval respected, the same instrument used.",
    },
    {
      mistake: "Taking the full-scale IQ as sensitive",
      why: "The FSIQ's reliability of about 0.98 and SEM of about 2.5 make it the most stable number in the profile — and therefore insensitive to anything except gross brain damage; a normal FSIQ reassures about almost nothing.",
      correction: "The sensitive information lives in the subtests, the domains and the differences: subtest analysis under the difference-score discipline, interpreted against the referral question and the clinical picture.",
    },
    {
      mistake: "Quoting scores without their error bands",
      why: "The oracle-reading: a single number stated as the person's ability, when every observed score is a true score plus error — full-scale IQ ±5 points, WMS-III indices at best ±8 — and the band can straddle categories.",
      correction: "Every score quoted with its SEM-derived band and its percentile category; the band explained in plain language at feedback — measurement, not verdict.",
    },
    {
      mistake: "Testing a non-English-speaking or unschooled patient on unadapted instruments",
      why: "The verbal subtests measure vocabulary, information and comprehension — all language- and education-loaded; second-language testing measures language, not cognition, and the illiterate elder fails orientation-reading items by schooling, not dementia — the test measuring education rather than cognition.",
      correction: "The non-verbal battery carries the assessment (Progressive Matrices, performance subtests, the Rey-Osterrieth); literacy-adjusted norms and education-stratified interpretation applied; the local psychologists asked what they use — the NIMHANS adaptations where available.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State the basic psychometric equation and the SEM-reliability relationship — and which reliability value drives the SEM to zero.",
        "The five reliability types with their thresholds (test-retest 0.8; internal consistency 0.7) and the seven validity types from face to incremental — with one threat example.",
        "The three scales of measurement and the statistics each permits — and why the chapter's tests aspire to interval level.",
        "The MMSE: its contents, the 24-or-less rule with the education caveat, and what it can never do.",
        "The difference-score discipline: reliable versus abnormal VIQ-PIQ differences in adults and children, and the subtest scatter threshold.",
      ],
      practical: [
        "Administer and score a bedside cognitive screen, then interpret the score honestly: the education caveat applied, the screen's limits stated, the next step named.",
        "Interpret a given Wechsler profile: quote the scores with their error bands, apply the reliable-versus-abnormal thresholds to the verbal-performance difference, and state what the full-scale IQ can and cannot exclude.",
      ],
      longAnswer: [
        "Cognitive assessment: the psychometric principles — classical test theory, reliability, validity, standardisation — and their application to intelligence and memory testing.",
        "The interpretation of cognitive test results: the difference-score discipline, the common errors of over-reading, and the retest problem — with the instruments as examples.",
      ],
    },
    neetPg: {
      highYield: [
        "THE EQUATION: x = t + e — the observed score is the true score plus error; SEM = SD√(1 − r); perfect reliability (+1) gives SEM zero; even diagnosis is a form of measurement.",
        "THE FLOORS: test-retest below 0.8 dubious; internal consistency (α) below 0.7 not acceptable; scorer/rater agreement should be near perfect.",
        "THE SEVEN VALIDITIES: face (non-statistical, but without it patients see no point), content, concurrent, predictive (concurrent and predictive jointly criterion-related), construct (convergent and divergent), factorial, incremental (does it improve actual decision-making).",
        "THE SCALES: nominal (group-splitting, chi-square associations), ordinal (non-parametric statistics), interval (parametric — height, speed); the chapter's tests aspire to interval.",
        "THE BANDS: IQ mean 100 SD 15 — deficient below the 2.5th percentile (IQ 70); borderline 2.5–10th (75–80); low average 10–25th (85–90); average 25–75th (90–110); high average 75–90th (115–120); superior above the 90th.",
        "THE DIFFERENCE-SCORE NUMBERS: VIQ-PIQ reliable about 9 points (95% level); 18% of adults differ by 10 or more; abnormal about 22 in adults, 26 in children (under 5% prevalence); subtest scatter 11–12 points; VCI-PRI reliable about 11, abnormal about 26.",
        "THE MMSE RULE: 24 or less raises the possibility of dementia in older persons with nine or more years of education (24 about the 10th percentile at 65+) — a screen only: neither presence nor nature diagnosable on it alone.",
        "THE WECHSLER ARCHITECTURE: WAIS-III-UK 16–89; WISC-IV-UK 6.0–16.11; WPPSI; index scores mean 100 SD 15, subtests mean 10 SD 3; FSIQ reliability about 0.98, SEM about 2.5 (all scores ±5 points); IQ too stable to be sensitive — subtest analysis does the sensitive work.",
        "THE MEMORY BATTERIES: WMS-III index reliabilities 0.60–0.87 (rather low), practice effects up to 15 points across 5 weeks, SEM 3.88–7.40 (true scores at best ±8); CMS 5–16, reliabilities 0.76–0.91, practice effect 10–15 points over 2 months.",
        "SPEED AND ATTENTION: the PASAT (paced auditory serial addition, the 2.4-second pacing, a working-memory-plus-speed load); the TEA — eight subtests, reliabilities over 0.83, validity by sensitivity to head injury and stroke.",
        "DYSEXECUTIVE SYNDROME: changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance — most frequently frontal-lobe damage but also other lesion patterns; the frontal-lobe syndrome is a dysexecutive syndrome.",
      ],
      pyqConcepts: [
        "Reliable versus abnormal differences — the 9-point versus 22-point distinction: the single most examined line in this territory.",
        "The MMSE education caveat and the screen-versus-diagnosis boundary.",
        "Practice effects — the retest-improvement question (10–15 points on memory batteries is learning, not recovery).",
        "Full-scale IQ's insensitivity — the stability paradox (reliability about 0.98 excludes only gross damage).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 30-year-old software engineer, three months after a mild concussion, arrives with a private report citing VIQ 96, PIQ 112 — a 16-point discrepancy 'indicative of left-hemisphere injury' — and persistent complaints of mental slowness and poor concentration: the reasoning that follows re-reads the difference against the WAIS-III thresholds (reliable from about 9 points, abnormal only from about 22 — 18% of adults differ by 10 or more), deploys the concussion-sensitive battery instead (PASAT, coding, the TEA's Map and Telephone Search), finds genuine processing-speed reduction where the hemisphere-specific claim fails, and feeds the result back with the thresholds drawn on paper — the false-neuropsychiatry diagnosis never entering the record, and serial speed scores read with practice-effect caution.",
        "A 70-year-old woman who never attended school is brought to the district OPD with six months of 'memory loss' and an MMSE of 19 — the duty note reading 'dementia': the reasoning that follows refuses the label at the first step — the 24-or-less rule is built for nine-or-more years of education and a zero-education score is uninterpretable against it; the informant's everyday-memory picture (money-handling, route-finding, recipe-keeping) and the language-reduced non-verbal assessment carry the clinical judgment; literacy-adjusted norms and the NIMHANS-adapted battery with the education history stated in the referral complete the work — the teaching: the screen diagnoses nothing in either direction, and in India the education confound is the first differential of every low score.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "x = t + e — the observed score is the true score plus error; SEM = SD√(1 − r).",
        "MMSE: 24 or less (nine or more years of education) raises the possibility of dementia — a screen, never a diagnosis.",
        "Reliable VIQ-PIQ difference about 9 points; abnormal about 22 in adults (26 in children); 18% of adults differ by 10 or more.",
        "Memory-battery retest gains of 10–15 points can be practice effects, not recovery.",
        "The dysexecutive syndrome: volition, planning, purposive action, performance efficacy — frontal most often, but not only frontal.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Quote every score with its error band — the SEM discipline (full-scale IQ ±5 points; WMS-III indices at best ±8) converts test reports from oracle-readings into measurements, and the family hears the band as honesty, not hedging.",
        "Read the manual before the instrument: the 13-item disclosure checklist from development history to ceiling and floor effects is the test-user's due diligence — and the unsuitable-groups line is where an Indian literacy band should appear and usually does not.",
        "The ask-local-psychologists caveat is the Indian workflow, not a footnote: NIMHANS adaptations and literacy-adjusted norms preferred over imported norms; the non-verbal battery (Matrices, block design, Rey-Osterrieth) wherever language confounds.",
        "Change claims carry the retest burden: WMS-III practice effects up to 15 points across 5 weeks with index reliabilities of 0.60–0.87 mean some gains are learning and some differences are noise — the manual's retest data decide, never the raw arithmetic.",
        "The ecological-validity question earns its place at the bedside: a Rivermead-style everyday-memory logic adapted to the household's real tasks — money-handling, route-finding, recipe-keeping — is the family-report supplement the district clinic actually has.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 16-point gap that was not brain damage",
      presentation: "A concussion, a private report citing a 16-point verbal-performance gap as left-hemisphere injury, and the difference-score discipline that took the diagnosis back.",
      initialPresentation: "A 30-year-old software engineer was referred to the neuropsychiatry clinic three months after a mild concussion, carrying a report from a private centre that cited VIQ 96, PIQ 112 — a 16-point discrepancy 'indicative of left-hemisphere injury' — and requested definitive management. His complaints were mental slowness and poor concentration at work; the headache had settled.",
      history: "No prior psychiatric or neurological history; a road-traffic mild concussion with a day of symptoms and no imaging abnormality. Since then: mental slowing, difficulty following meetings, fatigue by mid-afternoon. The family had obtained the private report seeking documentation for an insurance claim; no full cognitive assessment had been done.",
      examination: "Mental state normal between the subjective complaints; no focal deficits. The referral scores re-read against the WAIS-III-UK difference data: the 16-point VIQ-PIC gap exceeds the reliable threshold (about 9 points) but falls far short of the abnormal threshold (about 22 points) — 18% of adults differ by 10 or more points. Fresh domain testing: PASAT and digit-symbol/coding slow for his estimated band; the TEA's Map Search low average — findings consistent with genuine processing-speed reduction after mild concussion rather than any hemisphere-specific injury.",
      diagnosis: "Post-concussion cognitive slowing, with a misread test report: the verbal-performance difference reliable but statistically common — no evidence of focal injury on the difference data; genuine slowing confined to the concussion-sensitive speed and attention domain.",
      management: "The report re-interpreted for the patient and the family in plain figures — the 9-point and 22-point thresholds drawn on paper, the 18% population figure stated; the speed and attention findings acknowledged as real and expected to recover; a graded return-to-work plan with the employer; no brain-damage label issued; the insurance question answered with the corrected interpretation and the serial-testing plan.",
      outcome: "Speed and attention scores recovered toward his band over the following four months on serial testing read with practice-effect caution; the work accommodations tapered; the anxiety about left-hemisphere damage settled once the arithmetic was explained — and the false-neuropsychiatry diagnosis never entered his record.",
      teachingPoints: [
        "Reliable is not abnormal: about 9 points is reproducible, about 22 (adults) is abnormal — the 16-point gap was reliable and ordinary; 18% of adults differ by 10 or more points.",
        "Full-scale IQ and its differences were never the instruments for this question: processing speed is the concussion-sensitive domain, and the PASAT, coding and the TEA are the tests that track it.",
        "Feedback with the thresholds drawn on paper converts an adversarial report into a measurement — and keeps the false diagnosis out of the record.",
        "Serial assessment read with practice-effect caution: recovery of speed is real only when the gain exceeds what retesting alone produces.",
      ],
    },
    {
      title: "The MMSE of 19 in a mother who never went to school",
      presentation: "An illiterate 70-year-old failing the reading items, a score of 19, and the education caveat that stood between her and a dementia label.",
      initialPresentation: "A 70-year-old woman from a village was brought to the district OPD by her son with six months of 'memory loss'. She had never attended school. The MMSE administered in the OPD scored 19; the duty note read 'dementia — MMSE 19/30'.",
      history: "No schooling (zero years); she manages the kitchen, and the son took over the household money after one episode of confusion during a febrile illness, since resolved. No psychiatric history. The 'memory loss' reports were chiefly the family noticing repeated questions about a visiting relative — the concern beginning after their first move to the city.",
      examination: "Orientation to time partially lost (day of the month); three-item recall 2 of 3; naming intact; she could not attempt the reading sentence, the writing sentence or the pentagon copy — the schooling-dependent items. The informant picture: she still cooks the family's meals, keeps her way around the village, recognises everyone and manages small change — the Rivermead-style household logic (money-handling, route-finding, recipe-keeping) intact on history. Non-verbal reasoning on a Matrices-type task: low average for her estimated band, not deficient.",
      diagnosis: "No diagnosis on the screen: an MMSE of 19 in a woman with zero years of education cannot be read against the 24-or-less rule built for nine or more years — the education confound dominates the score, and the informant and non-verbal picture argues against significant dementia.",
      management: "The screen's limit stated in the record with the education caveat documented; literacy-adjusted norms applied where the local instrument allows; the informant-based everyday-memory picture recorded as the functional measure; the language-reduced Rey-Osterrieth-type figure task used for the visual memory question; referral to the nearest neuropsychologist for the adapted battery (the NIMHANS line) with the education and language history stated in the referral letter; the family counselled on what the number does and does not mean.",
      outcome: "The adapted-battery assessment read against literacy-stratified norms showed no dementia-level impairment; at six months the household picture was unchanged; the dementia label never entered her record — the education caveat did its work.",
      teachingPoints: [
        "The MMSE rule is education-conditional: 24 or less raises the possibility of dementia in older persons with NINE OR MORE years of education — a zero-education score of 19 is uninterpretable against it.",
        "The screen diagnoses nothing in either direction: neither the presence nor the nature of impairment can be diagnosed on the MMSE alone.",
        "The informant's everyday-memory picture — money, routes, recipes — is the ecological-validity supplement the district clinic actually has.",
        "Ask local psychologists what they use: the NIMHANS adaptations with literacy-adjusted norms exist; imported norms on an illiterate elder measure schooling, not cognition.",
      ],
    },
  ],
  clinicalPearls: [
    "The axiom: assessment is measurement — even diagnosis is a form of measurement and should carry reliability and validity like any test.",
    "x = t + e — the most basic equation in psychometrics; every number on the page is an observed score with error in it.",
    "SEM = SD√(1 − r): perfect reliability (+1) gives SEM zero; test-retest below 0.8 is dubious and α below 0.7 is not acceptable.",
    "The 9/22 rule: about 9 VIQ-PIQ points is reliable (reproducible at the 95% level); about 22 in adults and 26 in children is abnormal — 18% of adults differ by 10 or more points.",
    "Subtest scatter needs a range of 11–12 points before it is abnormal — under 5% of people scatter that far.",
    "MMSE 24 or less (nine or more years of education; about the 10th percentile at 65+) raises the possibility of dementia — and diagnoses nothing.",
    "Full-scale IQ: reliability about 0.98, SEM about 2.5 — all scores ±5 points — and too stable to be sensitive: it excludes only gross brain damage; the subtests do the sensitive work.",
    "WMS-III index reliabilities run 0.60–0.87 with practice effects up to 15 points across 5 weeks — true scores at best ±8 points; over-reading change is built into the battery.",
    "A 12-point verbal-performance gap is reliable and perfectly normal — treating it as brain damage generates false neuropsychiatry.",
    "The dysexecutive syndrome — volition, planning, purposive action, performance efficacy — is most frequently frontal but not only frontal.",
    "Processing speed is the concussion-sensitive domain: the PASAT (each digit added to the previous, 2.4-second pacing), coding and Map Search.",
    "Read the manual — the 13-item checklist from development history to ceiling and floor effects — and ask local psychologists what they use.",
  ],
  highYieldSummary: [
    "The axiom and the equation: assessment, testing and measurement are the evaluation of the individual in numerical or categorical terms under statistical and psychometric principles — even diagnosis is a form of measurement, carrying reliability and validity like any test. Classical test theory: the true score t (the real quantity the test aims at), the observed score x, the error e — x = t + e, the most basic equation in psychometrics; repeated testing scatters observed scores around the true score with the standard error of measurement, SEM = SD√(1 − r), so a good test drives the SEM toward zero and perfect reliability gives SEM zero. Reliability in five types: scorer/rater (near perfect), test-retest (below 0.8 dubious), parallel-form, split-half (odd versus even items, the Kuder-Richardson mean of all splits), internal consistency (α not below 0.7). Validity in seven: face (seems sensible, non-statistical, but without it patients see no point), content (covers all aspects, expert judgement), concurrent (discriminates criterion groups; kindred tests), predictive (future criteria — child IQ to adult occupation; the two jointly criterion-related), construct (the hypothetical construct, convergent and divergent correlations), factorial (stable subfactors), incremental (improves actual decision-making — do neuropsychological results improve brain-injury detection?). The threat examples: a numeracy test so stressful the scores track anxiety; a social-comprehension test so culturally biased the scores track ethnicity.",
    "Scales and standard scores: nominal scales (labels for categories — marital status; group-splitting, chi-square associations), ordinal (rank order without magnitude assumptions — non-parametric statistics), interval (fixed units — height, speed; parametric statistics): the chapter's tests aspire to interval level. Central tendency gives the first normality hint; the standard deviation converts to precision: z = (x − m)/SD, z to a percentile, the 50th percentile the mean. The IQ mapping (mean 100, SD 15) with the category bands: below the 2.5th percentile deficient (IQ 70); 2.5–10th borderline (75–80); 10–25th low average (85–90); 25–75th average (90–110); 75–90th high average (115–120); above the 90th superior. Percentile logic also separates groups: a token-test score at the 5th percentile for normals and the 63rd for dysphasics belongs to the dysphasic distribution.",
    "The difference-score discipline — the clinical trap: practice compares the patient with herself (verbal versus spatial IQ; memory quotient versus IQ), and difference scores carry two independent concepts: reliability of the difference (unlikely to be chance; reproducible on retesting — on the WAIS-III about 9 points between verbal and performance IQ at the 95% level) and abnormality of the difference (the percentage of the general population with a difference this size or greater — 18% of adults differ by 10 or more VIQ-PIQ points; abnormality requires about 22 points in adults, 26 in children, i.e. under 5% prevalence). Failure to distinguish between these leads to all manner of erroneous conclusions. Subtest scatter: a range of about 11–12 points to be abnormal. The manual duty: a good manual discloses development history, construct and purpose, the standardisation sample, criterion-group data, age-range data, administration standard, scoring criteria, means and SDs, reliability coefficients and how obtained, validity measures, the SEM, the reliability AND abnormality of difference scores, subtest scatter data, criterion-group scores, unsuitable groups, and the ceiling and floor effects.",
    "General ability: the MMSE as screening — brief, repeatable over time to gauge change; orientation, naming, language, memory, basic non-verbal skills; good middle-age-and-elderly norms; a score of 24 or less raises the possibility of dementia in older persons with nine or more years of education (24 about the 10th percentile at 65+), but only a screen: neither presence nor nature of cognitive impairment can be diagnosed on it alone. The Wechsler scales carry the detailed assessment — WAIS-III-UK 16–89, WISC-IV-UK 6.0–16.11, WPPSI — with verbal subtests (vocabulary, similarities, digit span, arithmetic, information, comprehension, letter-number sequencing), performance subtests (picture completion, block design, digit symbol/coding, matrix reasoning, symbol search and the rest), index scores (verbal comprehension, perceptual organisation/reasoning, working memory/freedom from distractibility, processing speed), mean 100 SD 15, subtest mean 10 SD 3. Full-scale IQ reliability about 0.98, SEM about 2.5 — all scores ±5 points; reliable VIQ-PIQ difference about 9, abnormal about 22; VCI-PRI reliable about 11, abnormal about 26. The interpretive rule: IQ is very stable and therefore insensitive to anything except gross brain damage — subtest analysis under the difference-score discipline does the sensitive work. Where language disorder or non-English testing confounds: the Progressive Matrices, non-verbal inductive reasoning.",
    "Speed, attention and memory: reasoning is speed as well as accuracy — sensitive to even mild concussion; the depressed-speed battery runs choice-reaction-type tasks, Map Search and Telephone Search (visual targets under time pressure), digit-symbol/coding, the PASAT (paced auditory serial addition, each new digit added to the previous — a working-memory-plus-speed load with the classic 2.4-second pacing), digit-cancellation tasks, and the AMIPB's timed cancellations disentangling motor from mental slowing. Attention: focusing resources, the right aspect, sustaining, ignoring distraction, dividing — the speed tests are attention tests by nature; digit span tests attention; the Test of Everyday Attention (eight subtests; test-retest reliabilities over 0.83 for Map and Telephone Search; validity demonstrated by sensitivity to head injury and stroke). Memory: a complex of processes (registration, storage, retrieval) across modalities (verbal, spatial) and periods (short-term, long-term, learning) requiring battery assessment — the WMS-III (16–89; subtests from information/orientation to spatial span and digit span; indices auditory and visual immediate and delayed, recognition, general and working memory; index reliabilities 0.60–0.87, rather low, with practice effects up to 15 points across 5 weeks and SEM 3.88–7.40 — true scores at best ±8 points) and the Children's Memory Scale (5–16; reliabilities 0.76–0.91; practice effect 10–15 points over 2 months). The ecological alternative: the Rivermead Behavioural Memory Test (with child version), designed to reflect real-life memory tasks. The individual classics for time-limited practice: the Rey Auditory-Verbal Learning Test (verbal learning, well researched), the Rey-Osterrieth Complex Figure (visual memory), the Recognition Memory Test (forced-choice words and faces), the Autobiographical Memory Interview (remote personal memory).",
    "Language, executive function and the user's duties: the full batteries — the Boston Diagnostic Aphasia Examination and the closely related Western Aphasia Battery (auditory comprehension, oral expression, written understanding, writing) — long to administer, hence the brief screeners: the Boston Naming and Graded Naming Tests (word-finding), the Token Test (verbal comprehension), and the Wechsler Objective Reading Dimensions (reading and spelling ages, with the IQ-versus-reading difference-score abnormality for dyslexia identification). Executive function: a supervisory system exerting executive control of attention, whose deficit produces the dysexecutive syndrome — changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance — most frequently from frontal-lobe damage (the frontal-lobe syndrome is a dysexecutive syndrome) but also from other lesion patterns; the sensitive tests: cognitive estimates, fluency, planning/search tasks such as the Tower of London and the Wisconsin family, and behavioural measures. The test-user's duties: the sources (Lezak's Neuropsychological Assessment, Strauss's Compendium, Mitrushina's normative-data handbook), the common problems (small standardisation samples; unknown or unstable factor structures; poor theoretical adequacy; no criterion groups; vague scoring; absent difference-score data) — the onus on the user — and the local caveat: this account is of English-language tests; readers elsewhere should note the principles and ask local psychologists what tests they use.",
    "The clinical deployment and the Indian layer: every psychiatric number is a measurement with error — the discipline applies to rating scales, screening tools and diagnoses, not only to IQ; the difference-score trap is a daily clinical error; the MMSE boundary is the commonest misreading of the commonest test; change-over-time needs practice-effect discipline; and a normal full-scale IQ excludes only gross damage. In India: the education problem is the central issue — MMSE-type instruments carry education gradients far steeper in India's literacy distribution, an illiterate 70-year-old failing the orientation-reading items is not demented by that failure, and literacy-adjusted norms (developed by Indian centres) with education-stratified interpretation are mandatory. The bilingual testing problem: assessing in the second language measures language, not cognition — the Rey-Osterrieth and performance subtests carry the assessment, the Matrices anchor it, and the NIMHANS adaptations are preferred to imported norms. The teaching gift: Indian trainees over-read single low scores — the 9/22 and 11–12 rules, the ±5-point SEM and the practice-effect warnings convert reports from oracle-readings into measurements. The ecological-validity question: a Rivermead-style everyday-memory logic adapted to the household's real tasks (money-handling, route-finding, recipe-keeping) is the practical family-report supplement. Costs (approx 2026): imported kits and licences the costly layer (major private centres only); the MMSE, Rey figures and verbal-learning lists free; the scarce resource trained neuropsychologists — district practice runs on the screening-plus-informant discipline with referral for the battery.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ca-quiz-1",
      question: "In classical test theory, the relationship between the observed score (x), the true score (t) and the error (e) is:",
      options: ["x = t + e", "x = t − e", "t = x + e", "e = x + t"],
      correctIndex: 0,
      explanation: "The observed score is the true score plus error; psychometrics drives the error term (the SEM) toward zero through reliability — SEM = SD√(1 − r), with perfect reliability giving SEM zero.",
      afterSectionId: "mechanism",
    },
    {
      id: "ca-quiz-2",
      question: "Which cognitive domain is characteristically sensitive to even mild concussion?",
      options: ["Crystallised vocabulary", "Processing speed", "Remote autobiographical memory", "Reading comprehension"],
      correctIndex: 1,
      explanation: "Reasoning is speed as well as accuracy — the choice-reaction tasks, coding, Map Search and the PASAT (2.4-second pacing) form the depressed-speed battery that tracks concussion.",
      afterSectionId: "symptoms",
    },
    {
      id: "ca-quiz-3",
      question: "On the Wechsler mapping, a score at the 10th–25th percentile falls in the band:",
      options: ["Borderline (2.5–10th percentile)", "Low average (10–25th percentile)", "Average (25–75th percentile)", "High average (75–90th percentile)"],
      correctIndex: 1,
      explanation: "The bands: deficient below the 2.5th; borderline 2.5–10th; low average 10–25th; average 25–75th; high average 75–90th; superior above the 90th.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ca-quiz-4",
      question: "A WAIS-III verbal-performance IQ difference of 12 points in an adult is:",
      options: ["Statistically reliable but not abnormal — 18% of adults differ by 10 or more points", "Diagnostic of brain damage", "Statistically unreliable", "Impossible without malingering"],
      correctIndex: 0,
      explanation: "Reliable from about 9 points; abnormality requires about 22 points in adults (26 in children) — confusing the two generates all manner of erroneous conclusions.",
      afterSectionId: "differential",
    },
    {
      id: "ca-quiz-5",
      question: "An MMSE score of 24 or less in an older person with nine or more years of education:",
      options: ["Diagnoses Alzheimer's disease", "Raises the possibility of dementia — a screen only, never diagnostic alone", "Is within the normal range", "Diagnoses depression"],
      correctIndex: 1,
      explanation: "About the 10th percentile at 65+; neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone — the full assessment and the clinical picture decide.",
      afterSectionId: "management",
    },
    {
      id: "ca-quiz-6",
      question: "A patient speaks none of the languages the available tests were standardised in. The correct approach is:",
      options: ["Test anyway — the norms are universal", "Rely on the verbal battery with an interpreter", "The non-verbal battery (Progressive Matrices, performance subtests, figure tasks) carries the assessment, with locally validated instruments preferred", "Cognitive assessment is impossible without fluency"],
      correctIndex: 2,
      explanation: "Second-language testing measures language, not cognition — the chapter's own instruction is to ask local psychologists what they use; in India the NIMHANS adaptations with literacy-adjusted norms are the referral instruments.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Write the basic psychometric equation and the SEM-reliability relationship. What reliability value makes the SEM zero?", answer: "x = t + e: the observed score x is the true score t plus the error e — the most basic equation in psychometrics, tests aiming to measure a real quantity (the true score) with every administration carrying error. Repeated testing would scatter observed scores around the true score with a standard deviation: the standard error of measurement, SEM = SD√(1 − r), where r is the test-retest reliability. A good test drives the SEM toward zero; PERFECT RELIABILITY (+1) gives SEM zero. The clinical translation: every score is a band, not a point — the full-scale IQ's ~0.98 reliability leaves all scores ±5 points.", topic: "Test theory" },
    { question: "Name the five reliability types and the seven validity types, with the two rule-of-thumb floors.", answer: "RELIABILITY: scorer/rater (two judges agree — should be near perfect); test-retest (same result on separated occasions, as a correlation — below 0.8 dubious); parallel-form (equivalent versions agree); split-half (odd versus even items, with the Kuder-Richardson mean of all splits); internal consistency (item-to-item correlation, α not below 0.7). VALIDITY: face (seems sensible — non-statistical, but without it patients see no point); content (covers all aspects — expert judgement); concurrent (discriminates criterion groups; correlates with kindred tests); predictive (forecasts future criteria — child IQ to adult occupation; concurrent and predictive jointly criterion-related); construct (measures the hypothetical construct — convergent and divergent correlations); factorial (stable subfactors); incremental (improves actual decision-making — do neuropsychological results improve brain-injury detection?).", topic: "Reliability and validity" },
    { question: "The three scales of measurement — and the statistics each permits.", answer: "NOMINAL: labels for categories (marital status) — group-splitting and chi-square associations. ORDINAL: rank order without magnitude assumptions — non-parametric statistics. INTERVAL: fixed units (height, speed) — parametric statistics. The chapter's tests aspire to interval level — the claim that makes means, SDs, z-scores and the whole standard-score apparatus legitimate.", topic: "Scales" },
    { question: "Walk the z-to-percentile-to-IQ table: which percentile bands are deficient, borderline, low average, average, high average and superior?", answer: "z = (x − m)/SD converts the observed score to a percentile (the 50th percentile being the mean); the IQ mapping runs mean 100, SD 15. THE BANDS: below the 2.5th percentile DEFICIENT (IQ 70); 2.5–10th BORDERLINE (IQ 75–80); 10–25th LOW AVERAGE (85–90); 25–75th AVERAGE (90–110); 75–90th HIGH AVERAGE (115–120); above the 90th SUPERIOR. Percentile logic also allocates between groups: a token-test score at the 5th percentile for normals and the 63rd for dysphasics belongs to the dysphasic distribution.", topic: "Standard scores" },
    { question: "State the difference-score rule with numbers.", answer: "Two independent concepts: RELIABILITY of a difference (unlikely to be chance; reproducible on retesting — on the WAIS-III about 9 points between verbal and performance IQ at the 95% level) versus ABNORMALITY (the percentage of the general population with a difference this size or greater — 18% of adults differ by 10 or more VIQ-PIQ points; abnormality requires about 22 points in adults, 26 in children, i.e. under 5% prevalence). VCI-PRI: reliable about 11, abnormal about 26. Subtest scatter: a range of about 11–12 points to be abnormal. Failure to distinguish reliable from abnormal leads to all manner of erroneous conclusions.", topic: "Difference scores" },
    { question: "State the MMSE rule with the education caveat — and what the MMSE can never do.", answer: "A score of 24 or less raises the possibility of dementia in older persons with NINE OR MORE YEARS OF EDUCATION (24 is about the 10th percentile at 65+). The instrument: brief, repeatable over time to gauge change; orientation, naming, language, memory, basic non-verbal skills; good middle-age-and-elderly norms. THE LIMIT: only a screen — neither the presence nor the nature of cognitive impairment can be diagnosed on the MMSE alone; the full assessment and the clinical picture decide. In India the caveat hardens into a rule: an illiterate 70-year-old failing the orientation-reading items is not demented by that failure — literacy-adjusted norms and education-stratified interpretation are mandatory.", topic: "Screening" },
    { question: "Describe the Wechsler architecture: ages, the subtest families, the index scores, and the FSIQ reliability and SEM.", answer: "AGES: WAIS-III-UK 16–89; WISC-IV-UK 6.0–16.11; WPPSI below. VERBAL SUBTESTS: vocabulary, similarities, digit span, arithmetic, information, comprehension, letter-number sequencing. PERFORMANCE SUBTESTS: picture completion, block design, digit symbol/coding, matrix reasoning, symbol search and the rest. INDEX SCORES: verbal comprehension, perceptual organisation/reasoning, working memory/freedom from distractibility, processing speed — mean 100, SD 15 (subtests mean 10, SD 3). FSIQ reliability about 0.98, SEM about 2.5 — all scores ±5 points — and therefore insensitive to anything except gross brain damage: subtest analysis under the difference-score discipline does the sensitive work.", topic: "Wechsler scales" },
    { question: "Name two memory batteries with their reliability figures and practice effects, four individual memory tests, and define the dysexecutive syndrome.", answer: "BATTERIES: the Wechsler Memory Scale-III (16–89; index reliabilities 0.60–0.87 — rather low; practice effects up to 15 points across 5 weeks; SEM 3.88–7.40, so true scores at best ±8 points) and the Children's Memory Scale (5–16; reliabilities 0.76–0.91; practice effect 10–15 points over 2 months); the Rivermead Behavioural Memory Test (with child version) is the ecological alternative designed to reflect real-life memory tasks. INDIVIDUAL TESTS: the Rey Auditory-Verbal Learning Test (verbal learning, well researched), the Rey-Osterrieth Complex Figure (visual memory), the Recognition Memory Test (forced-choice words and faces), the Autobiographical Memory Interview (remote personal memory). DYSEXECUTIVE SYNDROME: changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance — most frequently from frontal-lobe damage (the frontal-lobe syndrome is a dysexecutive syndrome) but also from other lesion patterns.", topic: "Batteries" },
  ],
  faqs: [
    { question: "The report says his IQ is 92 — is that normal?", answer: "Yes, the average band (25–75th percentile, IQ about 90–110). But the fuller truth: the score carries about ±5 points of measurement error, and a normal full-scale IQ excludes only gross brain damage — the subtests, the domains and the differences carry the clinical information." },
    { question: "Her verbal IQ is 15 points below her performance IQ — surely that is brain damage?", answer: "No: that difference is statistically reliable but found in nearly a fifth of adults (18% differ by 10 or more points). Abnormality — fewer than 5% of the population — needs about 22 points (26 in children). Confusing a reliable difference with an abnormal one is the classic error this discipline exists to prevent." },
    { question: "Mother scored 22 on the MMSE — does she have dementia?", answer: "It raises the possibility (with her education level considered — the 24-or-less rule is built for nine or more years of schooling), but the MMSE is a screen: neither the presence nor the nature of impairment can be diagnosed from it. A full assessment and the clinical picture decide." },
    { question: "Her memory test improved by 12 points after treatment — is that recovery?", answer: "Possibly — but memory batteries show practice effects of 10–15 points on retesting (up to 15 points across 5 weeks on the WMS-III), and some index reliabilities are modest. Change-claims need the manual's retest discipline behind them before recovery is declared." },
    { question: "Which memory test should we use?", answer: "The battery for the question — WMS-III or the Children's Memory Scale by age; the Rivermead where everyday relevance matters — or, under time pressure, the individual classics: the Rey Auditory-Verbal Learning Test for verbal learning, the Rey-Osterrieth Complex Figure for visual memory, always against appropriate norms." },
    { question: "Can we test a patient who does not speak the test's language fluently?", answer: "Only with caution and adaptation: language confounds every verbal test. The non-verbal battery — Progressive Matrices, block design, the figure tasks — carries the assessment, and local psychologists' validated translations and norms are the right tools; in India the NIMHANS adaptations exist and are preferred to imported norms." },
    { question: "What makes a test 'good'?", answer: "Reliability at its floors (test-retest at 0.8, internal consistency at 0.7, scorer agreement near perfect) and validity of the right kind for the purpose — plus a manual that discloses its standardisation sample, its reliabilities and how obtained, its validity measures, its SEM, its difference-score data, its unsuitable groups and its ceiling and floor effects. If the manual does not say, the user must find out before the test touches the patient." },
    { question: "What is the dysexecutive syndrome?", answer: "The deficit of the supervisory system that exerts executive control of attention: changes in volition, poor planning, disruption of purposive action and reduced efficacy of performance. It most frequently follows frontal-lobe damage — the frontal-lobe syndrome is a dysexecutive syndrome — but it can also arise from other lesion patterns, which is why the testing is broader than the anatomy." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford ch 1.8.3 test-user discipline — the manual checklist and the difference-score thresholds (paraphrased from the source chapter)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.8.3 (Powell) — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Kline P — the psychometric-theory reference behind the chapter's reliability and validity treatment" },
      { source: "Wechsler D — the scale tradition itself" },
      { source: "Lezak M, Howieson D & Loring D — Neuropsychological Assessment; Strauss E et al. — the Compendium; Mitrushina M — the normative-data handbook (the test-user's reference sources)" },
    ],
    trials: [
      { source: "Folstein M F et al. — the Mini-Mental State Examination" },
      { source: "Rey A and Osterrieth P — the Auditory-Verbal Learning Test and the Complex Figure" },
      { source: "Warrington E — the Recognition Memory Test" },
      { source: "Robertson I et al. — the Test of Everyday Attention" },
      { source: "Gronwall D — the PASAT tradition; Coughlan A & Hollows S — the Adult Memory and Information Processing Battery" },
    ],
    reviews: [
      { source: "The Psychological Corporation — the WAIS-III, WISC-IV, WPPSI, WMS-III and WORD manuals (the difference-score and SEM sources)" },
      { source: "Raven J C — the Progressive Matrices" },
      { source: "Goodglass H & Kaplan E — the Boston Diagnostic Aphasia Examination; Kertesz A — the Western Aphasia Battery" },
      { source: "Baddeley A et al. — the Rivermead Behavioural Memory Test (with the child version)" },
      { source: "Wilson B et al. — the Autobiographical Memory Interview (as cited)" },
      { source: "Shallice T & Burgess P — the dysexecutive-syndrome framework (as cited)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for guidance on where cognitive assessment is available" },
      { source: "The score-with-its-band script — the one-minute feedback instrument this course hands to every clinician" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what cognitive testing is, what the numbers mean, how to prepare, what to ask.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The psychometric spine — equation, reliability, validity, standard scores — with the domain batteries.",
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
      description: "Everything — the referral-question craft, the retest discipline, the manual checklist, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The measurement axiom, classical test theory, the scales and the standard-score logic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state x = t + e with the SEM relationship and recite the reliability and validity types with their floors." },
    { number: 2, title: "Mechanism & Neuroscience", description: "How a number becomes an interpretation: standardisation, norms, difference scores, and the domain batteries.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk a score from observed to interpreted — and name the threshold that guards each step." },
    { number: 3, title: "Clinical Practice", description: "The instruments by domain, the difference-score discipline, screens versus batteries, the retest problem.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can apply the 9/22 rule, the MMSE education caveat and the practice-effect discipline to a live report." },
    { number: 4, title: "Indian Context", description: "Education gradients, the bilingual problem, NIMHANS adaptations, the district testing reality.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deploy cognitive testing in an Indian clinic without measuring schooling and calling it cognition." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the difference-score question and the MMSE question cold, with the numbers." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.8.3 — Powell's cognitive-assessment synthesis (Part 1); source chapter mapped, content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Kline P — the psychometric-theory reference behind the chapter's reliability-validity treatment (the classical test-theory lineage)", sourceType: "textbook", year: "1980s–1990s", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Folstein M F et al. — the Mini-Mental State Examination: the screen, its contents and the education-conditional 24-or-less rule", sourceType: "primary", year: "1975", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Wechsler D and The Psychological Corporation — the scale tradition and the WAIS-III, WISC-IV, WPPSI, WMS-III and WORD manuals (the reliability, SEM and difference-score sources)", sourceType: "primary", year: "1939 onward", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Raven J C — the Progressive Matrices: non-verbal inductive reasoning where language or culture confounds", sourceType: "primary", year: "1938", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Robertson I et al. — the Test of Everyday Attention (eight subtests, reliabilities over 0.83, head-injury and stroke validity); Gronwall D — the PASAT tradition; Coughlan A & Hollows S — the AMIPB timed cancellations", sourceType: "primary", year: "1974 onward", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Rey A and Osterrieth P — the Auditory-Verbal Learning Test and the Complex Figure (the individual memory classics)", sourceType: "primary", year: "1941 / 1944", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Warrington E — the Recognition Memory Test (forced-choice words and faces)", sourceType: "primary", year: "1984", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Goodglass H & Kaplan E — the Boston Diagnostic Aphasia Examination; Kertesz A — the Western Aphasia Battery (with their brief screeners)", sourceType: "primary", year: "1972 / 1982", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Baddeley A et al. — the Rivermead Behavioural Memory Test (with the child version); Wilson B et al. — the Autobiographical Memory Interview (as cited in the Oxford chapter)", sourceType: "primary", year: "1985 onward", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Lezak M, Howieson D & Loring D — Neuropsychological Assessment; Strauss E et al. — the Compendium; Mitrushina M — the normative-data handbook (the test-user's reference sources and the common-test-problems tier)", sourceType: "textbook", year: "1976 onward", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Shallice T & Burgess P — the dysexecutive-syndrome framework and the supervisory-system construct (as cited in the Oxford chapter)", sourceType: "primary", year: "1991", dateReviewed: "2026-09-30" },
    { id: "S13", source: "The Indian tier — the NIMHANS neuropsychological adaptations, literacy-adjusted norms developed by Indian centres, the bilingual-assessment practice pattern, the district screening-plus-informant discipline; cost realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The axiom: assessment, testing and measurement are the evaluation of the individual in numerical or categorical terms under statistical and psychometric principles — and even diagnosis is a form of measurement, carrying reliability and validity like any test.", grade: "established", sources: ["S1"] },
    { text: "Classical test theory: the true score t, the observed score x and the error e give the basic equation x = t + e; repeated testing scatters observed scores around the true score with the standard error of measurement, SEM = SD√(1 − r) — a good test drives the SEM toward zero, and perfect reliability gives SEM zero.", grade: "established", sources: ["S1", "S2"] },
    { text: "The reliability floors and the validity types: test-retest reliability below 0.8 is dubious and internal consistency (α) below 0.7 not acceptable, with scorer agreement near perfect; the seven validity types — face, content, concurrent, predictive, construct (convergent and divergent), factorial and incremental — with the threat examples of the anxiety-tracking numeracy test and the ethnicity-tracking social-comprehension test.", grade: "established", sources: ["S1", "S2"] },
    { text: "The scales and the standard-score logic: nominal (group-splitting, chi-square), ordinal (non-parametric) and interval (parametric) scales with their permitted statistics, the chapter's tests aspiring to interval level; z = (x − m)/SD converting to percentiles (the 50th being the mean) and to IQ equivalents (mean 100, SD 15) with the category bands — deficient below the 2.5th percentile (IQ 70), borderline 2.5–10th (75–80), low average 10–25th (85–90), average 25–75th (90–110), high average 75–90th (115–120), superior above the 90th.", grade: "established", sources: ["S1"] },
    { text: "The difference-score discipline: a reliable difference (about 9 VIQ-PIQ points on the WAIS-III, reproducible at the 95% level) is not an abnormal difference (about 22 points in adults and 26 in children — fewer than 5% of the population; 18% of adults differ by 10 or more points); VCI-PRI reliable about 11, abnormal about 26; subtest scatter abnormal from a range of 11–12 points; failure to distinguish the two leads to all manner of erroneous conclusions.", grade: "established", sources: ["S1", "S4"] },
    { text: "The MMSE as screening: a score of 24 or less raises the possibility of dementia in older persons with nine or more years of education (24 about the 10th percentile at 65+); the instrument is brief, repeatable over time to gauge change, with good middle-age-and-elderly norms — but neither the presence nor the nature of cognitive impairment can be diagnosed on it alone.", grade: "established", sources: ["S1", "S3"] },
    { text: "The Wechsler architecture: WAIS-III-UK 16–89, WISC-IV-UK 6.0–16.11 and WPPSI, with verbal subtests (vocabulary, similarities, digit span, arithmetic, information, comprehension, letter-number sequencing), performance subtests (picture completion, block design, digit symbol/coding, matrix reasoning, symbol search and the rest), index scores (verbal comprehension, perceptual organisation/reasoning, working memory/freedom from distractibility, processing speed; mean 100 SD 15, subtests mean 10 SD 3); full-scale IQ reliability about 0.98, SEM about 2.5 (all scores ±5 points) — and therefore insensitive to anything except gross brain damage, subtest analysis under the difference-score discipline doing the sensitive work.", grade: "established", sources: ["S1", "S4"] },
    { text: "The memory batteries and their honest figures: the WMS-III (16–89) with index reliabilities 0.60–0.87 — rather low — practice effects up to 15 points across 5 weeks and SEM 3.88–7.40 (true scores at best ±8 points); the Children's Memory Scale (5–16) with reliabilities 0.76–0.91 and a practice effect of 10–15 points over 2 months; the Rivermead Behavioural Memory Test (with child version) designed to reflect real-life memory tasks; the individual classics — Rey Auditory-Verbal Learning Test, Rey-Osterrieth Complex Figure, Recognition Memory Test, Autobiographical Memory Interview.", grade: "established", sources: ["S1", "S4", "S7", "S8", "S10"] },
    { text: "Speed and attention: reasoning is speed as well as accuracy — sensitive to even mild concussion; the depressed-speed battery runs choice-reaction-type tasks, Map Search and Telephone Search, digit-symbol/coding, the PASAT (paced auditory serial addition, each new digit added to the previous, the classic 2.4-second pacing), digit-cancellation tasks and the AMIPB's timed cancellations disentangling motor from mental slowing; the Test of Everyday Attention has eight subtests with test-retest reliabilities over 0.83 for Map and Telephone Search, its validity demonstrated by sensitivity to head injury and stroke.", grade: "established", sources: ["S1", "S6"] },
    { text: "Language and executive function: the Boston Diagnostic Aphasia Examination and the closely related Western Aphasia Battery (auditory comprehension, oral expression, written understanding, writing) with their brief screeners — Boston Naming, Graded Naming, Token Test, and the Wechsler Objective Reading Dimensions (reading and spelling ages, the IQ-versus-reading difference-score abnormality for dyslexia identification); the executive construct is a supervisory system exerting executive control of attention whose deficit produces the dysexecutive syndrome — changes in volition, poor planning, disruption of purposive action, reduced efficacy of performance — most frequently from frontal-lobe damage (the frontal-lobe syndrome is a dysexecutive syndrome) but also from other lesion patterns, tested by cognitive estimates, fluency, planning/search tasks such as the Tower of London and Wisconsin family, and behavioural measures.", grade: "established", sources: ["S1", "S9", "S12"] },
    { text: "The test-user's duties: the sources (Lezak, Strauss, Mitrushina); the common test problems — small standardisation samples, unknown or unstable factor structures, poor theoretical adequacy, no criterion groups, vague scoring, absent difference-score data — with the onus on the user; the manual's disclosure checklist from development history and construct through reliability coefficients and the SEM to difference-score data, subtest scatter, unsuitable groups and the ceiling and floor effects; and the local caveat — this account is of English-language tests, and readers elsewhere should note the principles but ask local psychologists what they use.", grade: "established", sources: ["S1", "S11"] },
    { text: "The Indian layer: the education problem as Indian psychometrics' central issue — education gradients far steeper in India's literacy distribution, an illiterate 70-year-old failing the orientation-reading items not demented by that failure, literacy-adjusted norms (developed by Indian centres) and education-stratified interpretation mandatory; the bilingual testing problem — second-language assessment measuring language, not cognition, with the Rey-Osterrieth and performance subtests carrying the assessment and the Progressive Matrices as the non-verbal anchor; the NIMHANS adaptations preferred to imported norms; the ecological-validity logic adapted to the household's real tasks (money-handling, route-finding, recipe-keeping); costs approx 2026 — imported kits and licences the costly layer (major private centres only), the MMSE and Rey material free, trained neuropsychologists the scarce resource. Practice-pattern description from Indian clinical literature, context honestly labelled.", grade: "supported", sources: ["S1", "S5", "S13"] },
  ],
};
