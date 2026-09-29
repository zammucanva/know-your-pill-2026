import type { PsychiatryCourse } from "./types";

/**
 * CHILD ASSESSMENT & EPIDEMIOLOGY — canonical Psychiatry course
 * (migration batch 12, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-assessment-epidemiology.md —
 * untouched foundation), re-researched against the note's cited
 * evidence lineage: the Costello & Angold epidemiology chapter
 * and the Bostic & Martin assessment chapter, the UK ONS survey
 * (Meltzer), the NCS-R onset cascade (Kessler), the MECA
 * impairment data (Shaffer), the informant-dynamics literature
 * (Ferdinand) and the medical-yield figure (Challman) — with
 * per-claim provenance.
 *
 * Drug routes: the note assigns no psychotropic drug a clinical
 * role — drugLinks is honestly empty; the disorder programmes'
 * pharmacotherapy lives in the Group L sibling courses and is
 * recorded in contentGaps, never invented here.
 */
export const childAssessmentEpidemiologyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-assessment-epidemiology",
  title: "Child Assessment & Epidemiology — The Prevalence Movers",
  shortName: "Child assessment",
  kind: "concept",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Assessment & Epidemiology — The Prevalence Movers"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "One child in ten carries a psychiatric disorder, half of lifetime mental illness has begun by age twelve — and finding it is a systems interview: the child, the parents, the school and the family context each holding a different piece of the same picture.",

  summary:
    "This is the course for the two questions every clinician meets first: how common is this, and how do I find it? The epidemiology half delivers the burden argument — of the 46.4% of adults reporting a lifetime disorder in the National Comorbidity Survey Replication, HALF reported onset by age 12 and three-quarters by age 24, and the forgetting of early episodes makes true childhood onset probably commoner still; child psychiatry is not a small subspecialty at the margin of adult psychiatry, it is where most psychiatric illness begins. The UK national survey (Office for National Statistics; 10,438 children aged 5–15 across England, Scotland and Wales; parent and child interviewed with the DAWBA, a lay interview reviewed by clinicians for best-estimate diagnosis) put overall prevalence at 9.5% — conduct disorders 5.3% the largest group, anxiety 3.8%, hyperkinetic disorders 1.4%, depression 0.9% — and the course teaches why that number moves: four design choices (time frame, informants, age-sex structure, impairment criteria), not four different realities, separate surveys reporting anything from 3.2% to 39.5% for the same anxiety construct in the MECA data. The assessment half teaches the craft the arithmetic forces: adults initiate referrals for their own reasons (the referral question — who wants what changed, and why? — is itself diagnostic data); children rarely volunteer the wish to change; parents and children agree on only 13.5% of cases, making multi-informant assessment a mathematical necessity rather than a preference; DSM criteria were written on adults and must be developmentally translated (irritability for sadness, somatic complaints for verbalised anxiety); and the seven-stream developmental history — regulation, psychomotor, cognitive, interpersonal, emotional, moral, trauma — reads the child's biography. The investigations chapter is a lesson in restraint: laboratory results change the working diagnosis in about 1% of children, with yield under 5% without supportive physical findings — order tests to answer questions the history raises, never as a routine sweep. The India layer is honest: no national DAWBA-style survey exists, the existing Indian studies are mostly school-based and instrument-varying (demonstrating exactly the traps taught here), so the ~10% international anchor is applied with local humility — while the Indian gatekeeper map (parents, teachers, paediatricians, grandparents, tuition teachers, sometimes faith healers, often with the request 'make him study') becomes the first assessment task, the joint family becomes informant richness the Western assessor struggles to assemble, and lead, thyroid and iron studies are never skipped in suggestive presentations. No drug is assigned a clinical role by this note — the disorder programmes' pharmacotherapy lives in the Group L sibling courses, recorded in contentGaps, never fabricated here.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote the UK national survey figures — overall 9.5%, the diagnostic ordering, the age and sex splits, the three-year incidence and persistence — and the adult-onset cascade (half by 12, three-quarters by 24).",
    "Explain the four study-design factors that move prevalence estimates: time frame, informants, age-sex structure and impairment criteria, with the anxiety 39.5%-to-3.2% example as the star.",
    "Describe what makes child assessment structurally different: who initiates the referral, the child's motivation, multiple informants, adult-written criteria.",
    "Structure the clinical interview: reason for referral, problem history with its function, comorbidity, substance use, past treatment, the seven-stream developmental history, family and medical history, strengths, and the media diet.",
    "Conduct a developmentally adjusted child mental state examination, and structure the interview by age — parent and child together first, the adolescent alone at length.",
    "List the laboratory tests worth considering by presentation, and quote the honest yield figures (~1% change the working diagnosis).",
    "Define developmental epidemiology and its five growth directions — and read any new survey, Indian or international, with the four-factor lens before believing its headline.",
  ],
  quickFacts: [
    { label: "The headline", value: "About one child in ten", detail: "9.5% of 5–15-year-olds in the UK national survey (10,438 children, DAWBA) — the number child guidance infrastructure, school counselling and DMHP child components are sized against" },
    { label: "The onset cascade", value: "Half by 12, three-quarters by 24", detail: "Of the 46.4% of adults reporting a lifetime disorder in the NCS-R, half dated onset to age 12 or earlier — and forgetting of early episodes makes true childhood onset probably commoner still" },
    { label: "The ordering", value: "Conduct > anxiety > hyperkinetic > depression", detail: "Conduct disorders 5.3% (the largest group), anxiety 3.8%, hyperkinetic disorders 1.4%, depression 0.9% — genuinely rare in both sexes and all ages of childhood" },
    { label: "The star lesson", value: "39.5% to 3.2%", detail: "Applying both impairment measures at their most stringent to the MECA anxiety data collapsed the rate twelvefold — symptoms without impairment are not disorders; the clearest lesson in psychiatric gatekeeping" },
    { label: "The informant arithmetic", value: "13.5% agreed by both", detail: "Of children diagnosed by child interview, only 26% also carried one by parent interview (22% the reverse); just 13.5% of cases were reported by both informants — hence the any-informant counting rule" },
    { label: "The recall window", value: "~3 months", detail: "Recall reliability collapses beyond roughly three months; in comparisons of child depression studies the time frame explained more variance than taxonomy, instrument or cohort" },
    { label: "The lab honesty", value: "~1% change the diagnosis", detail: "Laboratory results change the working diagnosis in about 1% of children; yield is under 5% without supportive physical findings — history-driven testing, never the routine sweep" },
    { label: "The history spine", value: "Seven streams", detail: "Regulation (sleep/eating/toileting), psychomotor, cognitive, interpersonal, emotional development and temperament, moral development, trauma — the biography that separates developmental from reactive problems" },
    { label: "The Indian front door", value: "'Make him study'", detail: "Grandparents, tuition teachers, family physicians and sometimes faith healers join parents, teachers and paediatricians as the gatekeepers — mapping who initiated the referral and what they expect is the first Indian assessment task" },
  ],
  knowledgeGraph: [
    { label: "Child Neuropsychiatry — Behavioural Phenotypes", type: "condition", href: "/psychiatry/child-neuropsychiatry/", note: "The behavioural-phenotype tier the seven-stream history feeds into — where the cognitive stream's findings meet their syndromes" },
    { label: "Developmental Disorders — The Learning Channels", type: "condition", href: "/psychiatry/developmental-disorders/", note: "The developmental endpoint of the streams discipline — the global-versus-specific question the cognitive stream asks" },
    { label: "Autism Spectrum Disorder — The Prediction Engine", type: "condition", href: "/psychiatry/autism/", note: "The interpersonal stream's depth — the shared-activities and relationship stability questions that screen the spectrum" },
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The hyperkinetic 1.4% of the survey arithmetic — and the informant the young child cannot be (his own hyperactivity rater)" },
    { label: "Conduct Disorders — The Empathy Specifier", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The largest diagnostic group at 5.3% — the problem-history function questions (secondary gains, cross-setting pervasiveness) in their full clinical programme" },
    { label: "Child Anxiety — The School-Refusal Engines", type: "condition", href: "/psychiatry/child-anxiety/", note: "The second-largest group at 3.8% — the impairment gate's proving ground (39.5% of symptoms, 3.2% of disorder)" },
    { label: "Intellectual Disability — Supports, Not Just Scores", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The chromosomal-testing indication of the laboratory tier — the cognitive stream's global end" },
    { label: "Juvenile Offending — The Risk-Overlap Principle", type: "condition", href: "/psychiatry/juvenile-offending/", note: "The conduct continuum's deep end — where the assessment discipline meets the youth justice sieve" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The maturing reward-and-motor systems behind the hyperkinetic stream — taught as framing, the note's claims are behavioural" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The control machinery maturing last — the developmental calibration every MSE category and adult-written criterion is judged against" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "This concept course has a mechanism of measurement rather than of molecules — and it is worth learning as such. The counting story: a prevalence figure is not a fact about children but a fact about a ruler applied to children, and four design choices set that ruler's length. The time frame ('now' against 'past 3, 6 or 12 months' against 'ever') moves the count because memory is an expiry-dated instrument — recall reliability collapses after roughly three months, and in comparisons of child depression studies the time frame explained more variance than taxonomy, instrument or cohort. The informant structure moves it because parents and children see different halves of one child — agreement is statistically significant but clinically modest, with just 13.5% of cases reported by both — so whether a study counts a symptom when ANY informant reports it, or only when both do, changes everything. The age-sex structure moves it because the disorders themselves wax and wane across development (enuresis, ADHD and separation anxiety fading; substance misuse and depression rising; the trough around 11–14). And the impairment gate moves it most dramatically of all: symptoms without dysfunction are not disorders, and applying both impairment measures at their most stringent took MECA anxiety from 39.5% to 3.2%. The finding story beneath: the assessment is the instrument that survives these traps — the referral question as diagnostic data, the multi-informant discipline the arithmetic forces, the seven-stream developmental history as the child's biography, the mental state examination recalibrated to age, and the laboratory held at its honest ~1%. The developmental-epidemiology frame (Kellam's term) points the whole apparatus forward: from counting cases to tracing how risk exposure and vulnerability change across the life course.",
    steps: [
      "The burden is real and front-loaded: half of lifetime psychiatric disorder has begun by age 12 and three-quarters by age 24 (NCS-R) — child psychiatry is where most psychiatric illness begins, and forgetting of early episodes makes childhood onset probably commoner still.",
      "The count is a function of the ruler: four design choices — time frame, informants, age-sex structure, impairment criteria — move prevalence between studies; they are four different rulers, not four different realities.",
      "The time-frame mover: recall reliability collapses beyond ~3 months; trustworthy estimates use 3-month windows; in child-depression comparisons the time frame explained more variance than taxonomy, instrument or cohort.",
      "The informant mover: of children diagnosed by child interview only 26% also carried a diagnosis by parent interview (22% the reverse); just 13.5% of cases reported by both — the any-informant counting rule (count a symptom if ANY informant reports it) is how research instruments and clinical teams both survive this.",
      "The impairment mover: applying both impairment measures at their most stringent collapsed MECA anxiety prevalence from 39.5% to 3.2% — symptoms without dysfunction are not disorders; the questionnaire's caseness is a screening finding, never a diagnosis.",
      "The biography mover: development leaves a trace readable as history — the seven streams (regulation, psychomotor, cognitive, interpersonal, emotional, moral, trauma) whose pattern separates developmental from reactive problems, with sudden loss of established regulation skills flagging an emotional event.",
      "The laboratory mover: results change the working diagnosis in ~1% of children, yield under 5% without supportive physical findings — the investigation is a consultant asked specific questions by the history, never a routine sweep.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the machinery that matures last)", role: "The developmental calibration behind every MSE category — judgement, insight and attention are assessed against a control system still under construction; the honest anatomy beneath the DSM-translation problem (criteria written on adults, applied to a brain that is not one). Taught as framing: the note's claims are behavioural.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the perceived-threat reader)", role: "The trauma stream's 'events perceived as traumatic' given their biology — perception, not documentation, is the clinical variable; the threat reader shaped by the household events the history must date. Framing, not the note's claim.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the stress-sensitive recorder)", role: "The PTSD layer the MSE's hallucination ladder invokes (auditory hallucinations suggesting psychosis > PTSD > organic) — memory machinery shaped by early stress; findings in children more mixed than the adult literature.", grade: "proposed" },
    { id: "language-networks", name: "Perisylvian language networks", role: "The cognitive stream's speech-reading-writing progression — and the reason assessment in the mother tongue is not courtesy but validity: the language-switching child judged in the school's tongue.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The maturing reward-and-motor systems behind the hyperkinetic stream (1.4% of the survey) — taught as framing for the age-structure mover, the note's claims being behavioural.", grade: "supported", drugConnection: "The stimulant tier belongs to the ADHD sibling course — no KYP child-psychiatry drug lessons; the route never invented here." },
    { name: "Serotonin", symbol: "5-HT", role: "The chemistry of the anxiety-to-depression developmental rise — the age-sex mover's substrate, girls overtaking in adolescent depression; an honest frame, not the note's claim.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NA", role: "The arousal-attention system behind the hyperkinetic stream's second arm — the systems whose maturation the informant question probes (young children cannot rate their own hyperactivity).", grade: "proposed" },
    { name: "Glutamate", symbol: "Glu", role: "The synaptic-pruning machinery of cortical maturation — the plasticity window that lets gene-environment questions be asked at specific developmental stages (genetic epidemiology's second revolution).", grade: "supported" },
  ],
  pathways: [
    {
      id: "prevalence-movers-pathway",
      name: "The prevalence movers (design choice to apparent prevalence)",
      steps: [
        { label: "The survey chooses a time frame", detail: "'Now', 'past 3/6/12 months' or 'ever' — recall reliability collapsing beyond ~3 months; the 3-month window the trustworthy one" },
        { label: "The survey chooses its informants", detail: "Parent, child or both — with only 13.5% of cases reported by both, the counting rule (any-informant vs both-informant) moves the total more than the disorder does" },
        { label: "The age-sex structure weighs in", detail: "The U-shape of any-disorder prevalence (trough around 11–14) as enuresis/ADHD/separation anxiety fade before substance misuse/depression rise" },
        { label: "The impairment gate applies", detail: "MECA anxiety: 39.5% by criteria alone, 3.2% with both impairment measures at their most stringent — the twelvefold collapse" },
        { label: "The clinician reads the ruler before the number", detail: "Four design factors, not four different realities — the survey's headline interrogated before it is believed" },
      ],
      clinicalManifestation: "The school questionnaire that flags 40% of a class 'anxious' while proper criteria bring the true figure to ~3% — the clinic that learns to ask which number it is holding.",
      grade: "established",
    },
    {
      id: "multi-informant-pathway",
      name: "The multi-informant convergence (referral to formulation)",
      steps: [
        { label: "Adults initiate with agendas", detail: "The referral question mapped — who wants what changed, and why; school wanting discipline, parents wanting services, the child wanting the label gone" },
        { label: "The child is interviewed developmentally", detail: "Parent and child together first (transitional objects easing separation), the adolescent then alone at length after objectives are clarified together" },
        { label: "Each informant's blind spot is known", detail: "Parents miss drug use; young children cannot rate their own hyperactivity; teachers miss depression — the disagreement is information, not noise" },
        { label: "The any-informant rule counts", detail: "A symptom counted if ANY informant reports it — the arithmetic of the 13.5% overlap forcing the discipline" },
        { label: "Impairment and cross-setting pattern decide", detail: "Single-domain against pervasive impairment; the de-parentalised cross-setting picture; the formulation shared collaboratively at the close" },
      ],
      clinicalManifestation: "The teacher's letter that finds the depression the parents' 'he's fine at home' never would — and the adolescent-alone interview that finds what both concealed.",
      grade: "established",
    },
    {
      id: "seven-streams-pathway",
      name: "The seven streams (biography to formulation)",
      steps: [
        { label: "Regulation read first", detail: "Sleep, eating, toileting — sudden loss of established skills flagging an emotional event; hunger and obesity both raising psychopathology risk" },
        { label: "The channels traced in order", detail: "Psychomotor (gross against fine), cognitive (speech-reading-writing-maths, global against specific), interpersonal (stability, friends, shared activities), emotional (mood recognition, self-soothing, past suicidality, fears), moral (conscience lax or harsh, mistakes acknowledged)" },
        { label: "Trauma asked gently — both kinds", detail: "Actual events AND events perceived as traumatic; the disclosure story (who was told, how the adults reacted) part of the clinical picture" },
        { label: "Harmful behaviour layered on", detail: "Head-banging read for sensory disturbance, death talk as suicidality, cruelty as a monitoring need" },
        { label: "The pattern separates", detail: "Streams failing together from early life = developmental; streams failing together from a dateable point = reactive — the formulation the biography delivers" },
      ],
      clinicalManifestation: "The 'stubborn' seven-year-old whose daytime wetting, dated by the regulation stream to a household event nobody had named — reactive, not developmental, and treatable by naming it.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "cascade-onset", time: "By age 12", title: "Half of lifetime disorder has begun", description: "Of the 46.4% of adults reporting a lifetime disorder in the NCS-R, half dated onset to age 12 or earlier — and forgetting of early episodes makes the true childhood share probably larger.", phase: "onset" },
    { id: "survey-band", time: "Ages 5–15", title: "The UK survey band: 9.5%", description: "10,438 children across England, Scotland and Wales, parent and child interviewed with the DAWBA — 11.2% of 11–15-year-olds against 8.2% of 5–10s; boys 11.4% against girls 7.6%.", phase: "onset" },
    { id: "u-trough", time: "Ages 11–14", title: "The U-shape trough", description: "Enuresis, ADHD and separation anxiety fading while substance misuse and depression have not yet risen — any-disorder prevalence dips; boys dominant in the developmental disorders, girls about to overtake in depression.", phase: "duration" },
    { id: "cascade-peak", time: "By age 24", title: "Three-quarters begun", description: "The adult-onset cascade completes — the epidemiological justification for child psychiatry's existence in one figure, and the reason adult services inherit what child services missed.", phase: "peak" },
    { id: "recall-window", time: "The ~3-month window", title: "The recall horizon", description: "Recall reliability collapses beyond roughly three months — the time frame a study chooses moves its prevalence more than taxonomy, instrument or cohort did in the child-depression comparisons.", phase: "duration" },
    { id: "three-year-course", time: "Three years on", title: "7% new, 43% persisting", description: "Of previously unaffected children, 7% developed a disorder over three years; persistence ran far higher for behavioural disorders (43%) than emotional disorders (~one in four) — the follow-up arithmetic.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The UK national survey (Office for National Statistics; 10,438 children aged 5–15 across England, Scotland and Wales; parent and child interviewed with the DAWBA, a lay interview reviewed by clinicians for best-estimate diagnosis): 9.5% had a psychiatric disorder — 11.2% of 11–15-year-olds against 8.2% of 5–10-year-olds; boys 11.4% against girls 7.6%. The breakdown: conduct disorders 5.3% (the largest group), anxiety 3.8%, hyperkinetic disorders 1.4%, depression 0.9% (rare in both sexes and all ages). Over three years, 7% of previously unaffected children developed a disorder; persistence far higher for behavioural disorders (43%) than emotional disorders (~one in four). A Brazilian study using the same interview with DSM-IV criteria found 12.7% with the same internal ordering; other world studies often report around 20% at the high end — the spread itself the teaching point, explained by the four design factors rather than by four different childhoods. The adult-onset cascade (NCS-R): of the 46.4% reporting a lifetime disorder, half reported onset by age 12 and three-quarters by age 24, with forgetting of early episodes making true childhood onset probably commoner still.",
    indianPrevalence: "No national DAWBA-style survey exists for India; the existing Indian studies are mostly school-based, instrument-varying and demonstrate exactly the methodological traps this course teaches — time-frame and informant differences moving their totals. The honest position: apply the ~10% international anchor with local humility, and teach the four design factors so Indian surveys are read critically. The planning arithmetic stands regardless: every district school of 1,000 children contains roughly 100 children with diagnosable disorder — the child guidance infrastructure, school counselling and DMHP child components are sized against numbers like these.",
    lifetimeRisk: "Half of lifetime psychiatric disorder has begun by age 12 and three-quarters by age 24 (NCS-R) — the lifetime risk is front-loaded into childhood and adolescence; of children unaffected at survey, 7% developed a disorder within three years.",
    genderRatio: "Boys 11.4% against girls 7.6% overall (UK survey); boys dominate the developmental disorders, enuresis, ADHD and later drug abuse; girls overtake in adolescent depression — the sex ratio inverts with the age-sex mover.",
    ageOfOnset: "Prevalence of any disorder traces a U-shape across development: enuresis, ADHD and separation anxiety fade with age while substance misuse and depression rise, creating a trough around 11–14; the 11–15 band (11.2%) sits above the 5–10 band (8.2%).",
    indianNotes: "The Indian gatekeeper map (parents, teachers, paediatricians — and distinctively grandparents, tuition teachers, family physicians, sometimes faith healers) determines who reaches care and with what request; the joint family supplies multiple adult observers (informant richness to be used deliberately, in separate turns if needed); language switching between home and school can masquerade as, or mask, developmental language disorder; and the counting discipline underwrites the NFHS-based and school-based cohorts, Anganwadi surveillance and the RPwD Act's educational entitlements.",
  },
  etiology: [
    { category: "methodological", factor: "The time-frame mover", details: "'Now', 'past 3/6/12 months' or 'ever' changes counts because recall reliability collapses after ~3 months — use 3-month windows for trustworthy estimates; in comparisons of child depression studies, the time frame explained more variance than taxonomy, instrument or cohort." },
    { category: "methodological", factor: "The informant mover", details: "Children and parents disagree massively: of children with a diagnosis by child interview only 26% also had one by parent interview (22% the reverse); just 13.5% of cases were reported by both, though the agreement is statistically significant. Parents miss drug use; young children cannot rate their own hyperactivity; teachers miss depression — the clinical and instrument rule is to count a symptom if ANY informant reports it." },
    { category: "methodological", factor: "The age-sex mover", details: "Prevalence of any disorder traces a U-shape — enuresis, ADHD and separation anxiety fading with age while substance misuse and depression rise, creating a trough around 11–14; boys dominate developmental disorders, enuresis, ADHD and later drug abuse; girls overtake in adolescent depression. A survey's age-sex structure therefore moves its headline." },
    { category: "methodological", factor: "The impairment mover (the gate)", details: "Applying dysfunction criteria cuts the count dramatically: anxiety diagnosis rates fell from 39.5% (criteria only) to 3.2% (criteria plus both impairment measures at their most stringent) in the MECA data — symptoms without impairment are not disorders, and questionnaire cut-offs define caseness arbitrarily (symptom counts alone can label 40% of children anxious; proper criteria bring that to ~3%)." },
    { category: "biological", factor: "The front-loaded burden", details: "Half of lifetime psychiatric disorder begins by age 12 and three-quarters by age 24 (NCS-R, of the 46.4% reporting a lifetime disorder), with forgetting of early episodes making true childhood onset probably commoner still — the biological-developmental fact that makes the assessment craft consequential." },
  ],
  symptomClusters: [
    {
      category: "1. The referral system (what presents first)",
      symptoms: ["Adults initiate the evaluation with their own motivations — sometimes seeking to alter the child to fit the adult's expectations or teaching style; the referral question ('who wants what changed, and why?') is itself clinical data", "Expectations collide: the school wants parental discipline changed, the parents want school services — both must be reconciled, not adjudicated", "Children rarely volunteer the wish to change; problems are attributed to others — ask what the child wishes were different", "Young children distrust unfamiliar adults; adolescents see the clinician as another adult with judgements — alliances needed with child, parents and outside parties simultaneously, a breach in any one impeding treatment"],
    },
    {
      category: "2. The informant disagreement (the presenting arithmetic)",
      symptoms: ["Parent and child accounts that match on only 13.5% of cases — the disagreement is information, not noise", "Parents miss drug use; the adolescent-alone interview with the 'what does it relieve?' question finds it", "Young children cannot rate their own hyperactivity — the teacher's cross-setting report carries what the child cannot", "Teachers miss depression — the mood picture at school arrives by letter, not by observation, unless asked for"],
    },
    {
      category: "3. The criteria-translation problem (what the note calls adult-defined criteria)",
      symptoms: ["DSM criteria were written on adults — developmental differences in symptom expression must be translated", "Irritability standing where sadness would stand in the adult", "Somatic complaints standing where verbalised anxiety would stand in the adult", "Single-domain against pervasive impairment — the pervasiveness check that separates the school problem from the child disorder"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The convergence logic",
      code: "Any-informant rule + impairment gate",
      criteria: [
        "A symptom is counted if ANY informant reports it — the parent, the child, the teacher; the 13.5% both-informant overlap makes single-source assessment statistically indefensible.",
        "Diagnosis requires symptoms PLUS impairment PLUS clinical judgement — questionnaire cut-offs define caseness arbitrarily; symptom counts alone can label 40% of children anxious where proper criteria bring the figure to ~3%.",
        "The impairment is assessed across settings — single-domain impairment (reading trouble at school with everything else intact) and pervasive impairment point to different formulations and different services.",
        "The developmental translation is explicit: irritability for sadness, somatic complaints for verbalised anxiety, magical thinking and night fears judged age-appropriate before being counted pathological.",
        "Adult-written criteria are applied to the child's developmental stage, never the calendar's year alone — the MSE categories (orientation, judgement, insight) calibrated to age.",
      ],
      duration: "The convergence is built across sittings: the joint meeting, the adolescent-alone interview, the teacher's report — not a single consultation's snapshot.",
      indianNote: "The joint family is the informants' gift: multiple adult observers available deliberately, in separate turns if needed — the cross-setting picture Western assessors struggle to assemble is native to Indian practice.",
    },
    {
      system: "The full paediatric psychiatric history",
      code: "The structured interview, in order",
      criteria: [
        "Reason for referral: who initiated it, their motivations, the changes each party seeks; the colliding expectations mapped and reconciled.",
        "History of the problem: evolution, context, frequency and intensity trajectory — and the FUNCTION of problem behaviours including secondary gains (the tantrums that abolish chores).",
        "Past problems and comorbidity (paediatric bipolar commonly preceded by ADHD); substance use (self-medication common — ask what the substances relieve); previous treatments (what was tolerated, what worked).",
        "Developmental history, seven streams: regulation (sleep/eating/toileting — sudden loss of skills flags emotional events; hunger and obesity both raise psychopathology risk); psychomotor (gross against fine motor, sports as a window); cognitive (speech, reading, writing, maths — global against specific); interpersonal (relationship stability, number of friends, shared activities); emotional development and temperament (mood recognition, self-soothing, past suicidality, fears); moral development (conscience too lax or too harsh; mistakes acknowledged); trauma (actual events AND events perceived as traumatic; the disclosure story — who was told, how the adults reacted). Plus harmful behaviour toward self or others (head-banging read for sensory disturbance; death talk as suicidality; cruelty as a monitoring need).",
        "Family history (few disorders purely genetic — address parental fear about siblings; divorce and separation effects surfacing years later; adoption handled tactfully) and medical history (pregnancy, birth, hospitalisations; emergency visits illuminating fears and parental protectiveness; allergies and medication responses — including naturopathic and homeopathic agents, an Indian-consultation essential).",
        "Strengths and weaknesses (interests and talents as connection points for therapy) and the media diet (what media, how much, what consequences, who sets limits).",
      ],
      duration: "A structured hour-plus, staged: the joint meeting first, the child's interview, the parent's own interview (open-ended narrative before narrow fills), the school's input sought.",
      indianNote: "The referral often arrives as 'make him study' — the gatekeeper's request (grandparent, tuition teacher, family physician, sometimes a faith healer) decoded before the child is examined.",
    },
  ],
  severityScales: [
    {
      name: "DAWBA",
      fullName: "Development and Well-Being Assessment",
      measures: "The UK survey's instrument — a lay interview with parents and children, reviewed by clinicians for best-estimate diagnosis; the machinery behind the 9.5% figure and its siblings.",
      ranges: [],
      indianNote: "No national DAWBA-style survey exists for India — the instrument is named here, its items never reproduced; the Indian reading is the four-factor lens applied to school-based studies.",
    },
    {
      name: "NIMH DISC 2.3 (MECA)",
      fullName: "Diagnostic Interview Schedule for Children, the MECA study version",
      measures: "The structured interview of the MECA study — the source of the impairment-criteria demonstration (39.5% by criteria alone, 3.2% with both impairment measures at their most stringent).",
      ranges: [],
      indianNote: "Named for its evidence role, its items not reproduced; the teaching point is the impairment gate it demonstrated, transferable to any instrument an Indian study chooses.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Questionnaire-positive 'caseness' (the screening artefact)", distinguishingFeatures: "The school or clinic questionnaire flags the child; the count exceeds any plausible disorder burden — 40% 'anxious' where proper criteria support ~3%.", keyDifferentiator: "The impairment gate and clinical judgement: diagnosis requires symptoms plus dysfunction plus clinical assessment; the questionnaire's cut-off is a sampling decision, not a diagnosis." },
    { condition: "The adult's expectation (the referral-driven pseudo-disorder)", distinguishingFeatures: "The child 'fails' an adult's agenda — teaching style, discipline preference, the 'make him study' request; symptoms cluster around the demanded function.", keyDifferentiator: "The referral question asked first: who wants what changed, and why — unmasking the adjustment disorder in the parent, the school's discipline problem, or the genuine child disorder faster than any rating scale." },
    { condition: "Single-informant artefact vs cross-setting disorder", distinguishingFeatures: "The 'disorder' appears in one account only — the parents' or the teacher's — against the 13.5% both-informant overlap.", keyDifferentiator: "The any-informant rule for symptoms, the cross-setting check for impairment: pervasiveness separates the situational problem from the disorder, and de-parentalises the formulation." },
    { condition: "Developmental vs reactive problems", distinguishingFeatures: "Streams failing from early life (developmental) against streams failing from a dateable point (reactive) — the seven-stream pattern.", keyDifferentiator: "The regulation stream's dating: sudden loss of established sleep/eating/toileting skills flags an emotional event; always-established difficulties point to the developmental programme." },
    { condition: "Substance-mediated presentation (self-medication)", distinguishingFeatures: "The adolescent's 'attitude' or decline that tracks acquisition and relief-seeking — what the substances relieve is the diagnosis hiding underneath.", keyDifferentiator: "The adolescent-alone interview with the function question — parents miss drug use by default; the substance history is asked of the young person directly, and self-medication treated as a clue, not the story." },
    { condition: "Age-appropriate phenomena misread as pathology", distinguishingFeatures: "Magical thinking, night fears, separation anxiety at the developmental norm — the adult-criteria translation error in reverse.", keyDifferentiator: "The developmental calibration of the MSE: time sense develops with age, giggling about a sibling's illness is data not callousness, and obsessions (ego-dystonic) read differently from delusions (ego-syntonic)." },
  ],
  management: [
    { category: "psychotherapy", name: "The multi-informant interview architecture", description: "See parent and child together first (transitional objects easing separation; the child's beliefs about what the adults want revealing perspective-taking); clarify objectives briefly together with the adolescent, then meet the adolescent alone at length, leading with interests, strengths and music to reduce resistance; give the parent interview its own craft — open-ended narrative before narrow fills, cross-setting patterns sought, good intentions gone awry acknowledged (a harsh response usually masking fear about the child's future). The teacher's report sought as the third source.", whenToUse: "Every child psychiatric assessment — the structure is the diagnostic instrument, not a preliminary to it.", indianContext: "The joint family's multiple adult observers used deliberately, in separate turns if needed — the grandmother and the tuition teacher hold the cross-setting history the referral letter only hints at." },
    { category: "psychotherapy", name: "The seven-stream developmental history", description: "Regulation, psychomotor, cognitive, interpersonal, emotional development and temperament, moral development, trauma — each stream with its pearls (sports as the psychomotor window; past suicidality inside the emotional stream; conscience lax or harsh inside the moral stream; the disclosure story inside the trauma stream), plus harmful behaviour toward self or others.", whenToUse: "Every assessment — the streams' pattern separates developmental from reactive problems and sizes the intervention.", indianContext: "Taken in the mother tongue wherever possible; pregnancy, birth, hospitalisations and emergency visits illuminate fears and parental protectiveness; allergies and medication responses asked INCLUDING naturopathic and homeopathic agents — the Indian-consultation essential." },
    { category: "psychotherapy", name: "The developmentally calibrated child MSE", description: "The adult categories recalibrated: appearance (self-care as an index of parental attentiveness too), manner of relating to clinician and parents (separation ease, guardedness, eagerness to please), activity level, speech (fluency, prosody), current affect and persisting mood judged against age expectations, coping and affect regulation, orientation (time sense develops with age), attention and cognition, memory, intelligence and fund of knowledge calibrated to age, judgement asked after rapport (the envelope-by-the-mailbox questions), insight, and thought process and content — with auditory hallucinations suggesting psychosis > PTSD > organic, obsessions ego-dystonic against delusions ego-syntonic, and magical thinking and night fears often age-appropriate.", whenToUse: "At every assessment; the calibration, not the category list, is the skill.", indianContext: "Language switching between home and school can masquerade as, or mask, developmental language disorder — assess in the mother tongue, and judge the school's account against the tongue it was taken in." },
    { category: "psychotherapy", name: "Confidentiality contracted, conclusion collaborative", description: "Confidentiality made explicit — what will be shared with whom, agreed in advance; the conclusion reached collaboratively, the child's curiosity about what you will say used as the engagement opportunity it is.", whenToUse: "From the first joint meeting onward — the adolescent's fear of the 'skewed' interview is answered by the structure, not by reassurance.", indianContext: "The family council habits of Indian households make the explicit contract MORE necessary, not less — who hears what, in which order, agreed before the split interviews." },
    { category: "investigation", name: "Targeted, history-driven laboratory testing", description: "Few definitive tests exist in child psychiatry: laboratory results change the working diagnosis in ~1% of cases, and yield is under 5% without supportive physical findings. Order by presentation: chromosomal testing (intellectual disability/PDD), Wood's lamp (neurocutaneous), thyroid (mood), monospot, Lyme titre, CBC and chemistry, lead level (a classic, eminently preventable cause), ASO/anti-DNase B titres (OCD/tics with infectious onset), urine drug screen, and CSF, neuroimaging and EEG where the picture demands. Neuropsychological testing clarifies subtle processing difficulties — interpret cautiously with the tester's input; PET, SPECT and fMRI remain research tools in child psychiatry.", whenToUse: "When the history and examination raise a specific question — never as a routine sweep.", indianContext: "Families expect 'tests' — the honest ~1% yield figure supports the targeted approach, but do NOT skip lead, thyroid and iron studies in suggestive presentations: common, cheap and treatable in Indian children." },
    { category: "social", name: "Strengths, interests and the media diet", description: "Interests and talents mapped as connection points for therapy; the media diet audited — what media, how much, what consequences, who sets the limits; the 30-second sleep screen (difficulty getting or staying asleep, daytime sleepiness, abnormal night-time behaviours) run before the full sleep history it can trigger.", whenToUse: "Every assessment — the strengths are the therapy's raw material and the engagement's door.", indianContext: "Cricket, music and tuition schedules are the Indian engagement currency; the phone's late-night use is the media-diet question that most often explains the daytime sleepiness." },
  ],
  safety: {
    redFlags: [
      "Death talk in any stream — past or present suicidality elicited in the emotional-development stream is assessed as risk, never filed as a phase; the adolescent-alone interview asks directly.",
      "Disclosure or strong suspicion of trauma — the disclosure story (who was told, how the adults reacted) recorded; the protection pathway engaged alongside the assessment, and the asking repeated gently across interviews.",
      "Sudden loss of established regulation skills — sleep, eating or toileting previously acquired now lost: an emotional-event flag, dated and hunted, not a regression to work up in isolation.",
      "Cruelty to animals or people — monitoring needs assessed explicitly; the harm trajectory is a safety question before it is a formulation detail.",
      "Self-injury and head-banging — the sensory-disturbance evaluation run alongside the behavioural reading; both answers change the plan.",
      "The adolescent's substance use — asked of the young person alone (parents miss drug use by default), with what the substances relieve treated as the clue to the underlying disorder.",
    ],
    urgentGuidance:
      "The order of operations: (1) suicidality and self-harm assessed directly with the young person alone — death talk is risk language; (2) trauma disclosures handled gently, the disclosure story documented, child protection engaged where abuse is disclosed while the assessment continues; (3) sudden skill loss dated and the event beneath it sought before the regression workup; (4) substance use asked privately, the function question ('what does it relieve?') answered before the confrontation; (5) the questionnaire-positive child NOT treated as an emergency — the impairment gate applied calmly, the family told what the number does and does not mean; (6) the family given the crisis card (Tele-MANAS 14416, 24×7, free) and the next appointment before they leave.",
  },
  drugLinks: [],
  contentGaps: [
    "No psychotropic drug is assigned a clinical role by this note — drugLinks is honestly empty; the disorder programmes' pharmacotherapy tiers (the ADHD medication programme, the child-anxiety and depression tiers) live in the Group L sibling courses and their notes; the route is never invented here.",
    "The structured child diagnostic instruments (the DAWBA, the NIMH DISC of the MECA study) have no KYP lessons — named here, their items never reproduced; the scoring tables are deliberately empty.",
    "The child-sleep note the source references for the full sleep history (behind the 30-second screening questions) is not yet a migrated course — the screen is taught here, the full sleep programme awaited.",
    "Neuropsychological testing — the cautious interpretation with the tester's input the note teaches — has no dedicated KYP lesson; it is referenced here and taught where it is used, in the child neuropsychiatry tier.",
    "The laboratory tier of child assessment (lead level, thyroid, iron studies, ASO/anti-DNase B titres) is clinical biochemistry with no KYP drug route — the ordering discipline is taught in this course; no lesson is implied to exist.",
  ],
  patientGuide: {
    whatIsIt:
      "Roughly one child in ten has a psychiatric disorder at any given time — conduct-type and anxiety problems lead, and depression is genuinely rare before adolescence. Half of all lifetime mental illness has already begun by age twelve, which is why doctors take children's emotional and behavioural problems seriously. Finding the problem in a child is different from finding it in an adult: the child is brought by adults (each with their own reasons), the child rarely asks for change, and the truth is spread across witnesses — the parents see the home, the teachers see the school, and the child sees what nobody else can. So the assessment interviews them all, and a symptom counts if ANY of them reports it.",
    whatCausesIt:
      "No single cause — a child's difficulties arise from a mix of temperament, development, life events and circumstances. Development itself is the child's biography: how sleep, eating and toileting settled; how movement, speech, reading and friendships progressed; how emotions, conscience and the response to frightening events developed. The pattern of these 'streams' tells the doctor whether a problem is built into the child's development or is a reaction to something that happened — the events a child experienced as traumatic count, even when adults did not see them that way.",
    symptoms:
      "What families notice: defiant or aggressive behaviour, worries and fears, trouble with attention and sitting still, sadness or irritability, refusal of school, changes in sleep, eating or wetting. What matters clinically: whether the symptoms stop the child functioning (at school, with friends, at home) — symptoms without impairment are not a disorder, which is why a questionnaire result is never a diagnosis by itself. Warning signs needing prompt attention: talk of death or dying, self-harm, cruelty to animals or people, or a sudden loss of skills the child had already mastered (sleep, eating, toileting).",
    treatment:
      "The treatment IS the assessment, done well: the doctor meets the family together, then the child (including the teenager alone at length), asks the school for its account, and puts the pictures side by side. Confidentiality is agreed in advance — what will be shared with whom. Blood tests and scans are ordered only to answer specific questions raised by the history and examination — they change the diagnosis in about one child in a hundred — though certain common and treatable causes (lead, thyroid, iron in India) are not missed when the picture suggests them. The conclusion is shared collaboratively, and the child's own wish — what they would like to be different — is part of the plan.",
    selfHelp: [
      "Bring the school's account: the teacher sees three hours a day nobody else does, and the teacher's letter often carries the diagnosis.",
      "Ask your child what THEY wish were different — children rarely volunteer it, but the answer steers everything.",
      "Answer the three sleep questions honestly (trouble falling or staying asleep, daytime sleepiness, unusual night-time behaviours) — they cost thirty seconds and open the whole sleep history.",
      "Keep the media diet on the table: what, how much, what it costs in sleep and mood, and who sets the limits.",
      "Tell the doctor about every remedy the child takes — including naturopathic and homeopathic preparations; interactions do not check the label first.",
      "Keep the appointments: the assessment is built across sittings, and the conclusion is only as good as the witnesses who attended.",
    ],
    whenToSeekHelp: [
      "Any talk of death or dying, or self-harm — the same day, not the next clinic day.",
      "A disclosure of a frightening or abusive experience — heard calmly, reported to the doctor, never punished with disbelief.",
      "Sudden loss of skills the child had mastered — new wetting, food refusal, sleep collapse after a household event.",
      "Cruelty to animals or people, or escalating aggression.",
      "A school questionnaire result — bring it to a clinician, but do not treat it as a diagnosis; ask what the impairment shows.",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — the crisis and guidance channel for the family and the young person alike",
      "The district child guidance clinic and the DMHP psychiatric tier — the assessment channel",
      "The school counselling structure and the RPwD Act's educational entitlements — the educational arm of the plan",
      "Anganwadi workers and school counsellors — the closest observers of the young child's development",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific child-assessment pathway or national DAWBA-style survey exists; the counting discipline taught here — the four design factors — is the apparatus for reading India's school-based, instrument-varying studies critically, and the RPwD Act's educational entitlements with the DMHP's child components are the programme spine the numbers justify.",
    systemContext: "The child reaches care through the Indian gatekeeper map: parents, teachers, paediatricians — and distinctively grandparents, tuition teachers, family physicians and sometimes faith healers decide whether and where a child arrives. Mapping who initiated the referral and what they expect (often 'make him study') is the first Indian assessment task; the joint family then supplies multiple adult observers — informant richness to be used deliberately, in separate turns if needed, to build the cross-setting picture Western assessors struggle to assemble.",
    programmeContext: "The DMHP child components, school counselling and child guidance infrastructure are sized against numbers like the ~10% anchor — every district school of 1,000 children contains roughly 100 children with diagnosable disorder; the developmental-epidemiology future (NFHS-based and school-based cohorts, Anganwadi surveillance, the RPwD Act's educational entitlements) depends on the counting discipline this course teaches.",
    costConsiderations: "Families expect 'tests' — the honest ~1% yield figure supports a targeted, history-driven approach that saves the household money without saving the diagnosis; the exceptions are cheap and decisive in India (lead, thyroid and iron studies are common, inexpensive and treatable causes not to be skipped in suggestive presentations). No cost figures are quoted from the source note; none are invented here.",
    culturalConsiderations: "Language is validity, not courtesy: assess in the child's mother tongue wherever possible — language switching between home and school can masquerade as, or mask, a developmental language disorder. The medical history asks for allergies and medication responses INCLUDING naturopathic and homeopathic agents (an Indian-consultation essential); adoption is handled tactfully; divorce and separation effects surface years later; and the 'make him study' request is decoded rather than dismissed — the gatekeeper's agenda is clinical data.",
    patientCounselling: [
      "The reassurance script: 'About one child in ten has a psychiatric disorder at any time — you are not alone, and this is a mapped territory: conduct-type and anxiety problems lead, and depression is genuinely rare before adolescence.'",
      "The teacher script: 'The doctor wants the teacher's account because parents and children agree on only a minority of cases — each witness sees a different half of the child, and the school half completes the picture.'",
      "The questionnaire script: 'A questionnaire result is a screening finding, not a diagnosis — symptom counts alone can label 40% of children anxious; proper criteria with impairment bring that to about 3%.'",
      "The ancient-history script: 'The pregnancy and first-years questions are not nostalgia — development is the child's biography, and the pattern of its streams separates problems built into development from reactions to events.'",
      "The tests script: 'Blood tests change the diagnosis in about one child in a hundred — they are ordered to answer specific questions the history raises; though lead, thyroid and iron are checked when the picture suggests them, because in Indian children they are common, cheap and treatable.'",
      "The trauma script: 'Asking gently about frightening events is necessary — both what happened and what the child experienced as frightening shape behaviour; how the adults reacted when told is part of the clinical picture.'",
    ],
  },
  decisionPath: {
    title: "The child in the consulting room — where the assessment goes",
    nodes: [
      {
        id: "start",
        question: "A child arrives — referred, accompanied, a question in the air. First: who brought this child, and what does each party expect?",
        branches: [
          { label: "School referral, expectations colliding", next: "referral-node" },
          { label: "The adolescent who fears the 'skewed' interview", next: "adolescent-node" },
          { label: "A questionnaire said 'disorder'", next: "impairment-node" },
          { label: "Developmental concern from early years", next: "streams-node" },
        ],
      },
      {
        id: "referral-node",
        question: "The referral question as diagnostic data.",
        recommendation: "Map who initiated the referral, their motivations and the change each party seeks — the school wanting parental discipline changed against the parents wanting school services, both reconciled rather than adjudicated; ask what the child wishes were different, and treat the answer as steering data.",
      },
      {
        id: "adolescent-node",
        question: "'My parents will get to you first and tell you their version.'",
        recommendation: "Clarify objectives briefly with parent and adolescent together, then meet the adolescent alone at length — resistance reduced by leading with interests, strengths and music; confidentiality made explicit (what will be shared with whom, agreed in advance); the substance question asked here, because parents miss drug use by default.",
      },
      {
        id: "impairment-node",
        question: "The questionnaire-positive child — caseness or disorder?",
        recommendation: "Apply the gate: symptoms PLUS impairment PLUS clinical judgement; the any-informant rule for symptoms, the cross-setting check for dysfunction — remembering that symptom counts alone can label 40% of children anxious where proper criteria bring the figure to ~3% (the MECA 39.5%-to-3.2% collapse in its clinical form). The family told what the number does and does not mean.",
      },
      {
        id: "streams-node",
        question: "The developmental concern — which stream pattern?",
        branches: [
          { label: "Sudden loss of established skills", next: "trauma-node" },
          { label: "Difficulties always present, pervasively", next: "multi-informant-node" },
          { label: "A single domain failing alone", next: "domain-node" },
        ],
      },
      {
        id: "trauma-node",
        question: "The dated skill loss — the emotional event beneath.",
        recommendation: "The trauma stream taken gently: actual events AND events perceived as traumatic, the disclosure story (who was told, how the adults reacted) recorded; suicidality and self-harm assessed directly; the protection pathway engaged where abuse emerges — the asking repeated across interviews, not once.",
      },
      {
        id: "multi-informant-node",
        question: "The pervasive picture — the informants assembled.",
        recommendation: "Parent, child and teacher each interviewed (the joint family's observers used deliberately, in separate turns); the any-informant rule applied — count a symptom if ANY informant reports it; the cross-setting pattern de-parentalising the problem; the referral question revisited before the formulation is closed.",
      },
      {
        id: "domain-node",
        question: "The single failing domain.",
        recommendation: "The cognitive stream interrogated (speech, reading, writing, maths — global against specific) with the psychomotor stream alongside; neuropsychological testing where subtle processing difficulties are suspected, interpreted cautiously with the tester's input; the chromosomal-testing question raised where the intellectual disability/PDD picture demands it.",
      },
      {
        id: "investigations-node",
        question: "Do we need tests?",
        recommendation: "History-driven only: laboratory results change the working diagnosis in ~1% of children, yield under 5% without supportive physical findings — chromosomal testing (ID/PDD), Wood's lamp (neurocutaneous), thyroid (mood), lead level (the classic preventable cause), ASO/anti-DNase B titres (OCD/tics with infectious onset), urine drug screen, each answering a question the assessment raised; in suggestive Indian presentations, lead, thyroid and iron are not skipped.",
      },
      {
        id: "synthesis-node",
        question: "Closing the assessment — collaboratively.",
        recommendation: "The conclusion shared with the family and the child together, the child's curiosity about what you will say used as the engagement opportunity; the expectations reconciled into one formulation; the strengths named as therapy's connection points; the media diet and the sleep screen addressed; the follow-up contracted before the family leaves.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Equating the questionnaire positive with the diagnosis",
      why: "Cut-offs define caseness arbitrarily — symptom counts alone can label 40% of children anxious while proper criteria support ~3%; clinics flood and children are medicated for screening artefacts.",
      correction: "The gate applied every time: symptoms plus impairment plus clinical judgement — the MECA 39.5%-to-3.2% collapse taught to every trainee before their first clinic.",
    },
    {
      mistake: "Interviewing only one informant",
      why: "Parents and children agree on only 13.5% of cases; a single-source assessment misses most disorders by arithmetic — parents miss drug use, teachers miss depression, young children cannot rate their own hyperactivity.",
      correction: "The three-source discipline (parent, child, teacher) with the any-informant counting rule — the disagreement treated as information, never as noise to be adjudicated away.",
    },
    {
      mistake: "Asking 'ever' questions and trusting the recall",
      why: "Recall reliability collapses beyond roughly three months — the 'ever' frame inflates counts with faded and misdated episodes; in child-depression comparisons the time frame explained more variance than taxonomy, instrument or cohort.",
      correction: "Three-month windows for trustworthy estimates, with longer frames acknowledged as deliberately inclusive rather than accurate.",
    },
    {
      mistake: "Applying adult DSM criteria without developmental translation",
      why: "The criteria were written on adults — the irritable child is sad, the child with stomachaches is anxious, and magical thinking and night fears are often age-appropriate; untranslated criteria both over- and under-diagnose.",
      correction: "The explicit translation: irritability for sadness, somatic complaints for verbalised anxiety, and every MSE category — orientation, judgement, insight — calibrated to the child's age.",
    },
    {
      mistake: "Ordering the routine laboratory sweep",
      why: "Tests change the working diagnosis in ~1% of children and yield under 5% without supportive physical findings — the sweep costs money and false reassurance while the history goes unread.",
      correction: "History-driven testing, each test answering a question the assessment raised — with lead, thyroid and iron never skipped in the suggestive Indian presentation (common, cheap, treatable).",
    },
    {
      mistake: "Skipping the referral question",
      why: "The adults' motivations are clinical data — treating the adult's expectation as the child's disorder misses the adjustment disorder in the parent, the school's discipline problem, or the genuine disorder entirely.",
      correction: "'Who wants what changed, and why?' asked first and answered in writing — the question that unmaps the agenda before the child is examined.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The UK survey quartet: 9.5% overall (10,438 children, DAWBA); conduct 5.3% > anxiety 3.8% > hyperkinetic 1.4% > depression 0.9%; boys 11.4% against girls 7.6%; 11.2% of 11–15s against 8.2% of 5–10s.",
        "The four prevalence-movers with one example each — time frame (the 3-month recall window), informants (13.5%), age-sex structure (the 11–14 trough), impairment criteria (the 39.5%-to-3.2% MECA collapse as the star).",
        "The informant arithmetic: 26% of child-interview diagnoses also carried by parent interview, 22% the reverse, 13.5% by both — and the any-informant counting rule that follows.",
        "The seven streams of developmental history, in order, one clinical pearl each.",
        "The laboratory honesty: ~1% of results change the working diagnosis; under 5% yield without supportive physical findings; tests ordered to answer the history's questions.",
      ],
      practical: [
        "Demonstrate the child mental state examination on a case summary — the age-calibrated categories, the envelope-by-the-mailbox judgement questions after rapport, the hallucination ladder (psychosis > PTSD > organic).",
        "Take the referral question first ('who wants what changed, and why?') on a school-referred case, and map the colliding expectations before examining the child.",
        "Structure the adolescent interview: objectives clarified briefly together, then the young person alone at length, confidentiality agreed in advance.",
      ],
      longAnswer: [
        "Discuss the epidemiology of psychiatric disorders in children: the national survey figures, the reasons prevalence estimates vary between studies, and the implications for services.",
        "Outline the psychiatric assessment of a school-age child: the interview structure, the developmental history, the mental state examination and the role of investigations.",
      ],
    },
    neetPg: {
      highYield: [
        "THE HEADLINE: 9.5% of 5–15-year-olds (UK ONS survey, 10,438 children, parent and child DAWBA, clinician-reviewed) — 11.2% of 11–15s, 8.2% of 5–10s; boys 11.4%, girls 7.6%.",
        "THE ORDERING: conduct disorders 5.3% (largest) > anxiety 3.8% > hyperkinetic 1.4% > depression 0.9% (rare in both sexes and all ages of childhood).",
        "THE ONSET CASCADE (NCS-R): half of lifetime disorder by age 12, three-quarters by 24 — of the 46.4% reporting a lifetime disorder; forgetting makes childhood onset commoner still.",
        "THE MECA COLLAPSE: anxiety 39.5% (criteria only) to 3.2% (criteria plus both impairment measures at their most stringent) — dysfunction defines disorder; the screening-survey interpretation question.",
        "THE INFORMANT NUMBERS: 26% child-to-parent diagnostic overlap, 22% parent-to-child, 13.5% both — the any-informant rule; parents miss drug use, teachers miss depression, young children cannot rate their own hyperactivity.",
        "THE RECALL WINDOW: ~3 months — beyond it reliability collapses; the time frame explained more variance than taxonomy, instrument or cohort in the child-depression comparisons.",
        "THE COURSE: over three years 7% of previously unaffected children develop a disorder; behavioural disorders persist at 43%, emotional at ~one in four.",
        "THE U-SHAPE: enuresis, ADHD and separation anxiety fade with age, substance misuse and depression rise — the trough around 11–14; boys dominate developmental disorders and later drug abuse, girls overtake in adolescent depression.",
        "SEVEN STREAMS: regulation, psychomotor, cognitive, interpersonal, emotional development and temperament, moral development, trauma — sudden loss of established skills flags an emotional event.",
        "THE MSE LADDER: auditory hallucinations suggest psychosis > PTSD > organic; obsessions ego-dystonic, delusions ego-syntonic; magical thinking and night fears often age-appropriate.",
        "THE LAB TIER: chromosomal (ID/PDD), Wood's lamp (neurocutaneous), thyroid (mood), lead (the classic preventable cause), ASO/anti-DNase B (OCD/tics with infectious onset) — ~1% diagnostic change, <5% yield without findings; PET/SPECT/fMRI research tools.",
        "THE INDIAN CORNER: no national DAWBA-style survey; the ~10% anchor with local humility; gatekeepers include grandparents, tuition teachers and faith healers; the request 'make him study'; lead, thyroid and iron not skipped in suggestive presentations.",
      ],
      pyqConcepts: [
        "The MECA impairment question (39.5% to 3.2%) — the recurring interpretation MCQ on screening versus diagnosis.",
        "The informant-overlap figure (26% or 13.5%) — the one-best-answer on multi-informant necessity.",
        "The half-by-12 age question — the epidemiology viva staple.",
        "The prevalence-ordering MCQ (conduct > anxiety > hyperkinetic > depression).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A school runs a mental-health awareness drive with a translated questionnaire and 40% of a class of nine-year-olds score 'anxious'; parents arrive at the district child guidance clinic in waves demanding treatment. The reasoning: the questionnaire's cut-off defines caseness arbitrarily, not disorder — the impairment gate is applied (symptoms plus dysfunction plus clinical judgement, the MECA 39.5%-to-3.2% logic in clinical form); the any-informant rule assembles the picture (parent, child where age permits, teacher); the seven-stream history dates and separates (a reactive picture tied to a dateable event against a developmental pattern present from early years); the genuine cases are found — the child whose teacher's letter reports crying and withdrawal, the child whose regulation stream failed after a household event — while the screening artefacts are closed with the family script about what the number does and does not mean; no laboratory sweep, with lead, thyroid and iron checked only where the picture suggests them. The lesson: the clinic that survives the questionnaire wave is the one that read the ruler before the number.",
        "A 14-year-old is brought by both parents with a school letter for falling marks and 'attitude'; the school wants discipline changed, the parents want teaching services, and the boy says privately that the parents will 'get to you first and tell you their version'. The reasoning: the referral question mapped first (three agendas, one of them the child's); objectives clarified briefly together, then the adolescent met alone at length — resistance reduced by leading with interests and strengths; confidentiality contracted in advance; the substance question asked privately (parents miss drug use by default) with its function ('what does it relieve?' — self-medication common); the teacher's report sought as the third source (teachers miss depression); the any-informant rule applied and the cross-setting impairment assessed; the formulation closed collaboratively with the boy's own wish — 'make them stop calling me bad' — as part of the plan. The lesson: the assessment structure is the diagnostic instrument, and the informant arithmetic (13.5%) is why.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "9.5% overall prevalence; conduct disorders the largest diagnostic group (5.3%).",
        "Half of lifetime psychiatric disorder begins by age 12.",
        "Impairment distinguishes disorder from symptoms — the 39.5%-to-3.2% lesson.",
        "A symptom counts if ANY informant reports it; parents and children agree on 13.5%.",
        "Laboratory tests change the working diagnosis in ~1% — history-driven ordering.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The referral question is the highest-yield instrument in the room: 'who wants what changed, and why?' unmaps the agenda before the first symptom is counted.",
        "The adolescent-alone interview is non-negotiable — the skew fear is answered by structure (objectives together, then the young person at length), never by reassurance.",
        "The joint family is an assessment asset the Western literature envies: multiple adult observers, used deliberately and in separate turns, build the cross-setting picture single informants cannot.",
        "The disclosure story is clinical data — who the child told and how the adults reacted shapes both the formulation and the prognosis of the trauma layer.",
        "The gatekeeper map (grandparents, tuition teachers, family physicians, sometimes faith healers) is the Indian referral system; the letter that brings the child is read before the child is examined.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The skewed interview",
      presentation: "'You'll hear their version first' — the school-referred adolescent, three adults with three different agendas, and the diagnosis none of them was carrying.",
      initialPresentation:
        "A 14-year-old boy was brought to a district child guidance clinic by both parents, carrying a school letter citing two terms of falling marks, 'attitude' in class and homework refusal. The school wanted the parents to discipline him; the parents wanted the school to change its teaching; the boy, asked what he wished were different, said only that the teachers had decided he was a bad child.",
      history:
        "No prior psychiatric contact. The problem-history timeline dated the decline to the term the class teacher changed. The parents reported a well child at home; the school reported an obstinate one. The adolescent-alone interview, taken at length after objectives were clarified with the family together, disclosed evening despair, crying at night and occasional alcohol 'to switch it off' — the drinking the parents had detected none of, the mood the school had read as attitude. Developmental history across the seven streams: unremarkable, no stream-level red flags. No trauma disclosed at the first interview; the trauma question left open for later sittings.",
      examination:
        "Mental state with the parents present: guarded, monosyllabic, watching the father's face. Alone: full sentences, fluent, ironic; mood low with attenuated affect; fleeting suicidal thoughts, no current intent; insight partial; judgement assessed after rapport was established, with the envelope-by-the-mailbox-style questions; no psychotic phenomena; night sleep delayed behind a late-night phone habit.",
      diagnosis:
        "An emotional disorder in adolescence (depressive band) presenting through conduct-type complaints — reached only by the multi-informant rule: the teacher's letter and the adolescent-alone interview together, either alone insufficient.",
      management:
        "Objectives clarified briefly with family and adolescent together, then the adolescent met alone at length; confidentiality made explicit — what would be shared with whom, agreed in advance. The referral question mapped and the three agendas convened toward one formulation. The alcohol handled as self-medication of the mood picture, not as the primary disorder. Strengths (cricket, film music) engaged as the therapy's connection points; the media diet audited with the phone's late-night hours against the sleep screen; no laboratory sweep — nothing in the history or examination demanded a test.",
      outcome:
        "The family accepted the shared formulation at the joint closing meeting, and the school's letter was answered with the clinic's own. The mood picture was monitored into the following term; the self-medication declined as the mood work proceeded — the boy's own request, 'make them stop calling me bad', becoming the agenda of the therapy.",
      teachingPoints: [
        "The referral question is diagnostic: three parties, three agendas — one of them the child's.",
        "Parents miss drug use; teachers miss depression — the any-informant rule and the adolescent-alone interview are what found this.",
        "Children rarely volunteer the wish to change — ask what the child wishes were different and use the answer.",
        "Substance use in the young is self-medication until proven otherwise: ask what it relieves.",
      ],
    },
    {
      title: "The wet bed and the seven streams",
      presentation: "The tuition teacher's letter said 'stubborn and stopped studying' — the seven-stream history found the night the skills were lost.",
      initialPresentation:
        "A 7-year-old boy was brought to the clinic by his grandparents (his parents worked in another district), carrying a tuition teacher's note describing two months of 'stubbornness', crying at tuition, refusal to sit for homework and new daytime wetting. The grandmother's request, in her own words, was 'make him study'.",
      history:
        "Toileting had been established for three years before the wetting began; the regulation stream dated the change precisely — eight weeks earlier, with sleep onset delayed and appetite fallen from the same week. The trauma stream, taken gently, surfaced the household event of that month: the grandfather's sudden illness and hospital admission, after which the boy had been sent to stay with an aunt. No abuse disclosed; the disclosure story recorded — he had told a cousin, and the adults had told him 'big boys don't cry'. The other streams unremarkable; medical history notable for one emergency admission (a febrile convulsion at three) after which the family still 'wrapped him warm'; a homeopathic 'memory tonic' volunteered only when the naturopathic-agents question was asked.",
      examination:
        "A small boy with a toy bus held throughout — the transitional object easing the separation from the grandparents. Related to the examiner warily, then warmly; speech age-appropriate; mood watchful with brief flooding when the hospital was mentioned, settling with coaxing; no self-soothing strategies beyond the bus; night fears present and age-appropriate; no psychotic phenomena.",
      diagnosis:
        "A reactive emotional disorder — an adjustment-type picture in the anxious band of childhood, triggered by the household event and carried as regression (skill loss) rather than words; the streams' pattern separating reactive from developmental.",
      management:
        "The event named and discussed with the child at his developmental level; the grandparents counselled that the 'stubbornness' was the event speaking, and 'big boys don't cry' retired. No laboratory sweep — the honest ~1% yield explained to a family that had expected 'tests', with nothing in the history or examination demanding one. Bedtime routine rebuilt, the media diet audited, a note exchanged with the tuition teacher, and follow-up contracted.",
      outcome:
        "Toileting was regained within weeks of the event being spoken about at home; sleep and appetite followed. The tuition teacher's next note reported the boy 'sitting again'. The grandparents' request updated itself at review — from 'make him study' to 'tell us what to do when he cries'.",
      teachingPoints: [
        "Sudden loss of established regulation skills is an emotional-event flag — the stream history dates the event even when nobody has named it.",
        "The trauma stream includes events perceived as traumatic and the disclosure story — who was told, and how the adults reacted.",
        "Grandparents and tuition teachers are Indian gatekeepers; the letter that brings the child is clinical data.",
        "The laboratory discipline is honest in both directions: no routine sweep — and no suggestive common cause skipped.",
      ],
    },
  ],
  clinicalPearls: [
    "One child in ten: 9.5% in the UK national survey — every district school of 1,000 children holds roughly 100 diagnosable children; the number funds the services.",
    "Half of lifetime psychiatric disorder has begun by age 12, three-quarters by 24 — and forgetting of early episodes makes childhood onset probably commoner still.",
    "Conduct leads childhood: 5.3% > anxiety 3.8% > hyperkinetic 1.4% > depression 0.9% — depression genuinely rare before adolescence.",
    "Behavioural disorders persist at 43% over three years while emotional disorders run about one in four — the follow-up arithmetic.",
    "Four design choices move prevalence — time frame, informants, age-sex structure, impairment criteria: four different rulers, not four different realities.",
    "The 39.5%-to-3.2% collapse: applying both impairment measures at their most stringent is the clearest lesson in psychiatric gatekeeping.",
    "Parents and children agree on only 13.5% of cases — multi-informant assessment is forced by mathematics; count a symptom if ANY informant reports it.",
    "Trust recall only ~3 months back — in child-depression comparisons the time frame explained more variance than taxonomy, instrument or cohort.",
    "'Who wants what changed, and why?' — the referral question unmasks the parent's adjustment disorder, the school's discipline problem or the genuine child disorder faster than any rating scale.",
    "Seven streams — regulation, psychomotor, cognitive, interpersonal, emotional, moral, trauma — the biography that separates developmental from reactive problems.",
    "Sudden loss of established sleep/eating/toileting skills flags an emotional event, not a regression to work up in isolation.",
    "Tests change the working diagnosis in ~1% of children (yield under 5% without physical findings) — order history-driven, but never skip lead, thyroid and iron in the suggestive Indian child.",
    "Assess in the mother tongue: language switching between home and school can masquerade as, or mask, a developmental language disorder.",
  ],
  highYieldSummary: [
    "Definition and burden: about one child in ten has a psychiatric disorder — the UK national survey (10,438 children aged 5–15 across England, Scotland and Wales; parent and child interviewed with the DAWBA, a lay interview reviewed by clinicians for best-estimate diagnosis) found 9.5%, with 11.2% of 11–15-year-olds against 8.2% of 5–10s, and boys 11.4% against girls 7.6%; and of the 46.4% of adults reporting a lifetime disorder in the NCS-R, half dated onset by age 12 and three-quarters by 24, forgetting making true childhood onset commoner still — child psychiatry is where most psychiatric illness begins.",
    "The survey anatomy: conduct disorders 5.3% (the largest group), anxiety 3.8%, hyperkinetic disorders 1.4%, depression 0.9% (rare in both sexes and all ages); over three years 7% of previously unaffected children developed a disorder, with persistence far higher for behavioural disorders (43%) than emotional (~one in four); a Brazilian study with the same interview and DSM-IV found 12.7% with the same internal ordering, and other world studies often report around 20% at the high end — the spread is the lesson.",
    "The four prevalence-movers: (1) time frame — recall reliability collapses beyond ~3 months, and the time frame explained more variance than taxonomy, instrument or cohort in child-depression comparisons; (2) informants — of children diagnosed by child interview only 26% also carried a parent-interview diagnosis (22% the reverse), just 13.5% both, so the counting rule (any-informant) moves totals; parents miss drug use, young children cannot rate their own hyperactivity, teachers miss depression; (3) age-sex structure — the U-shape with its 11–14 trough as enuresis, ADHD and separation anxiety fade before substance misuse and depression rise, boys dominating the developmental disorders and later drug abuse, girls overtaking in adolescent depression; (4) impairment criteria — the MECA anxiety collapse from 39.5% (criteria only) to 3.2% (criteria plus both impairment measures at their most stringent): symptoms without impairment are not disorders.",
    "The assessment's structural differences: adults initiate the evaluation with their own motivations (sometimes to alter the child to fit the adult's expectations or teaching style) — the referral question ('who wants what changed, and why?') is clinical data; children rarely volunteer the wish to change, attributing problems to others; young children distrust unfamiliar adults and adolescents see another judging adult — alliances needed with child, parents and outside parties simultaneously; DSM criteria were written on adults and must be developmentally translated (irritability for sadness, somatic complaints for verbalised anxiety); and multiple informants are mandatory by the 13.5% arithmetic.",
    "The interview content: reason for referral (who initiated, motivations, the changes each party seeks, colliding expectations reconciled); problem history with the FUNCTION of behaviours including secondary gains (tantrums that abolish chores), single-domain against pervasive impairment; past problems and comorbidity (paediatric bipolar commonly preceded by ADHD), substance use (self-medication common — ask what the substances relieve), previous treatments (tolerated, worked); the seven-stream developmental history; family history (few disorders purely genetic — address parental fear about siblings; divorce effects surfacing years later; adoption handled tactfully); medical history (pregnancy, birth, hospitalisations, emergency visits illuminating fears and parental protectiveness, allergies and medication responses including naturopathic and homeopathic agents); strengths as therapy's connection points; and the media diet.",
    "The child MSE and technique: the adult categories recalibrated — appearance (self-care as parental attentiveness too), relating to clinician and parents, activity level, speech, affect and persisting mood against age expectations (giggling about a sibling's illness is data), coping and affect regulation, orientation (time sense develops with age), attention, memory, intelligence calibrated to age, judgement after rapport (the envelope-by-the-mailbox questions), insight, thought process and content (auditory hallucinations suggesting psychosis > PTSD > organic; obsessions ego-dystonic against delusions ego-syntonic; magical thinking and night fears often age-appropriate). Technique: parent and child together first with transitional objects easing separation; the adolescent met alone at length after objectives are clarified together, resistance reduced through interests and strengths; the parent interview's open-ended narrative before narrow fills with cross-setting patterns; confidentiality explicit — what is shared with whom, agreed in advance; the conclusion collaborative.",
    "Investigations: laboratory results change the working diagnosis in ~1% of children and yield under 5% without supportive physical findings — ordered by presentation: chromosomal testing (intellectual disability/PDD), Wood's lamp (neurocutaneous), thyroid (mood), monospot, Lyme titre, CBC and chemistry, lead level (a classic, eminently preventable cause), ASO/anti-DNase B titres (OCD/tics with infectious onset), urine drug screen, and CSF, neuroimaging and EEG where the picture demands; neuropsychological testing clarifying subtle processing difficulties, interpreted cautiously with the tester's input; PET, SPECT and fMRI remaining research tools in child psychiatry.",
    "The India layer: no national DAWBA-style survey exists — mostly school-based, instrument-varying studies demonstrating exactly the traps taught here; the ~10% anchor applied with local humility; the gatekeeper map (parents, teachers, paediatricians, grandparents, tuition teachers, family physicians, sometimes faith healers) and the 'make him study' request as the first assessment task; the joint family as deliberate informant richness; assessment in the mother tongue (language switching masquerading as or masking developmental language disorder); the targeted-testing lesson with lead, thyroid and iron never skipped in suggestive presentations; and the developmental-epidemiology future (NFHS-based and school-based cohorts, Anganwadi surveillance, the RPwD Act's educational entitlements) depending on the counting discipline.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cae-quiz-1",
      question: "In the UK national survey of 5–15-year-olds, which ordering of disorder prevalence is correct?",
      options: ["Depression > anxiety > conduct > hyperkinetic", "Conduct > anxiety > hyperkinetic > depression", "Hyperkinetic > conduct > depression > anxiety", "Anxiety > depression > conduct > hyperkinetic"],
      correctIndex: 1,
      explanation: "Conduct disorders (5.3%) lead, anxiety (3.8%) follows, hyperkinetic (1.4%) and depression (0.9%) comparatively rare in childhood.",
      afterSectionId: "symptoms",
    },
    {
      id: "cae-quiz-2",
      question: "Applying both impairment criteria at their most stringent level to the MECA anxiety data reduced the prevalence from 39.5% to:",
      options: ["20.5%", "13.0%", "3.2%", "9.6%"],
      correctIndex: 2,
      explanation: "Dysfunction criteria, not symptom counts, define disorder — the single most important lesson in interpreting screening surveys.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cae-quiz-3",
      question: "Of children receiving a diagnosis by child interview, approximately what proportion also receives one by parent interview?",
      options: ["Nearly all (~95%)", "About half", "About a quarter (26%)", "None: the interviews are orthogonal"],
      correctIndex: 2,
      explanation: "Parent-child agreement is statistically significant but clinically modest — both informants essential, the any-informant rule prevailing.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cae-quiz-4",
      question: "According to the NCS-R data, by what age has half of lifetime psychiatric disorder begun?",
      options: ["Age 6", "Age 12", "Age 18", "Age 24"],
      correctIndex: 1,
      explanation: "Half by 12, three-quarters by 24 — and forgetting of early episodes makes childhood onset probably commoner still.",
      afterSectionId: "mechanism",
    },
    {
      id: "cae-quiz-5",
      question: "Which statement about laboratory investigation in child psychiatric assessment is accurate?",
      options: ["Comprehensive routine panels are standard practice", "Results change the working diagnosis in about 1% of cases; testing should be history-driven", "PET and SPECT are first-line diagnostic tools", "Yield exceeds 50% even without physical findings"],
      correctIndex: 1,
      explanation: "Few definitive tests exist; the yield without supportive physical findings is under 5% — tests answer questions the clinical assessment raises.",
      afterSectionId: "management",
    },
    {
      id: "cae-quiz-6",
      question: "An adolescent worries that 'my parents will get to you first and tell you their version.' The recommended assessment response is:",
      options: ["Interview only the parents to save time", "Clarify objectives briefly with parent and adolescent together, then meet the adolescent alone at length", "Refuse to see the parents at all", "Let whoever arrives first give the history"],
      correctIndex: 1,
      explanation: "The structure answers the skew fear directly while preserving the multi-informant base the arithmetic demands.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Quote the UK survey quartet: overall prevalence, the largest diagnostic group, the sex ratio, and one persistence figure.", answer: "OVERALL: 9.5% of 5–15-year-olds (10,438 children across England, Scotland and Wales; parent and child interviewed with the DAWBA, a lay interview reviewed by clinicians for best-estimate diagnosis). LARGEST GROUP: conduct disorders at 5.3% — followed by anxiety 3.8%, hyperkinetic 1.4%, depression 0.9%. SEX RATIO: boys 11.4% against girls 7.6% (with the age split alongside: 11.2% of 11–15s, 8.2% of 5–10s). PERSISTENCE: behavioural disorders persist at 43% over three years against roughly one in four for emotional disorders — with 7% of previously unaffected children developing a disorder over the same window. Context figures worth carrying: a Brazilian study with the same interview found 12.7% with the same ordering, other world studies often around 20% at the high end — the spread itself the teaching point.", topic: "Epidemiology" },
    { question: "Recite the four prevalence-movers and give each its one-line example.", answer: "(1) TIME FRAME: 'now' against 'past 3/6/12 months' against 'ever' changes counts because recall reliability collapses beyond ~3 months — use 3-month windows; in comparisons of child depression studies the time frame explained more variance than taxonomy, instrument or cohort. (2) INFORMANTS: parent-child diagnostic overlap is only 26% child-to-parent (22% the reverse) with just 13.5% of cases reported by both — so whether a study counts a symptom when any informant reports it, or only when both do, moves the total. (3) AGE-SEX STRUCTURE: the U-shape — enuresis, ADHD and separation anxiety fading while substance misuse and depression rise, the trough around 11–14; boys dominating the developmental disorders, enuresis, ADHD and later drug abuse; girls overtaking in adolescent depression. (4) IMPAIRMENT CRITERIA: applying both impairment measures at their most stringent took MECA anxiety from 39.5% (criteria only) to 3.2% — symptoms without impairment are not disorders. The synthesis: four design choices, not four different realities.", topic: "Epidemiology" },
    { question: "Why do parents and children agree on only ~13.5% of cases, and what is the practical counting rule?", answer: "THE ARITHMETIC: of children receiving a diagnosis by child interview, only 26% also received one by parent interview, and 22% the reverse — just 13.5% of cases were reported by both informants, though the agreement is statistically significant. THE WHY: each informant sees a different half of the child — the parents miss drug use, young children cannot rate their own hyperactivity, teachers miss depression; the disagreement is structural information about where the disorder lives, not measurement noise. THE RULE: count a symptom if ANY informant reports it — the rule both research instruments and clinical teams run on. THE CONSEQUENCE: single-informant assessment is statistically indefensible (it misses most cases by arithmetic); the multi-informant interview (parent, child, teacher — each alone, then together in the formulation) is the assessment's load-bearing structure, and the Indian joint family's multiple adult observers are an asset to be used deliberately, in separate turns if needed.", topic: "Clinical practice" },
    { question: "List the seven streams of developmental history in order, with one clinical pearl per stream.", answer: "(1) REGULATION (sleep/eating/toileting): sudden loss of established skills flags an emotional event; hunger and obesity BOTH raise psychopathology risk. (2) PSYCHOMOTOR: gross and fine motor may diverge — sports performance as a window. (3) COGNITIVE: speech, reading, writing and maths progression; global against specific difficulties — the learning-channels question. (4) INTERPERSONAL: stability of relationships, number of friends, shared activities. (5) EMOTIONAL DEVELOPMENT AND TEMPERAMENT: mood recognition, self-soothing, past suicidality (asked directly), fears. (6) MORAL DEVELOPMENT: conscience too lax or too harsh; the ability to acknowledge mistakes. (7) TRAUMA: actual events AND events perceived as traumatic, with the disclosure story — who was told, how the adults reacted. Plus the rider: harmful behaviour toward self or others — head-banging read for sensory disturbance, death talk as suicidality, cruelty as a monitoring need. The synthesis: the streams' pattern separates developmental from reactive problems.", topic: "Clinical practice" },
    { question: "What are the five MSE adjustments that most distinguish the child from the adult examination?", answer: "(1) APPEARANCE AND RELATING: self-care read as an index of parental attentiveness too, and the manner of relating to clinician AND parents (separation ease, guardedness, eagerness to please) as data. (2) AFFECT CALIBRATED TO AGE: giggling about a sibling's illness is data, not callousness; the persisting mood judged against developmental expectations. (3) COGNITION AND ORIENTATION CALIBRATED: time sense develops with age; attention, memory and fund of knowledge judged against the child's age — the criterion-translation problem (irritability for sadness, somatic complaints for verbalised anxiety) applied throughout. (4) JUDGEMENT AFTER RAPPORT: the envelope-by-the-mailbox questions asked once the alliance exists — testing judgement before trust manufactures false deficits. (5) THOUGHT CONTENT READ DEVELOPMENTALLY: magical thinking and night fears often age-appropriate; auditory hallucinations suggesting psychosis > PTSD > organic; obsessions ego-dystonic against delusions ego-syntonic — the phenomenological ladder itself unchanged, its calibration entirely developmental.", topic: "Clinical practice" },
    { question: "Give the two honest laboratory yield numbers, and the three tests you must not miss in Indian practice.", answer: "THE TWO NUMBERS: laboratory results change the working diagnosis in about 1% of children, and the yield is under 5% without supportive physical findings — tests are ordered to answer specific questions the history and examination raise, never as a routine sweep (PET, SPECT and fMRI remaining research tools in child psychiatry; neuropsychological testing interpreted cautiously with the tester's input). THE THREE NOT MISSED IN INDIA: lead level (the classic, eminently preventable cause), thyroid function and iron studies — common, inexpensive and treatable in Indian children, so suggestive presentations get them regardless of the low general yield. The full by-presentation list for the exam: chromosomal testing (intellectual disability/PDD), Wood's lamp (neurocutaneous), thyroid (mood), monospot, Lyme titre, CBC and chemistry, lead, ASO/anti-DNase B titres (OCD/tics with infectious onset), urine drug screen, and CSF, neuroimaging and EEG where the picture demands.", topic: "Investigations" },
    { question: "Define developmental epidemiology and name its five growth directions.", answer: "THE DEFINITION (Kellam's term): the movement from counting cases to tracing how risk exposure and vulnerability change across the life course. THE FIVE DIRECTIONS: (1) LONGITUDINAL STUDIES — continuity from temperament to adult disorder. (2) GENETIC EPIDEMIOLOGY — its two revolutions: psychiatric interviews deployed in genetically informative designs, and molecular genetics in epidemiological samples, enabling gene-environment questions at specific developmental stages. (3) LIFE-COURSE EPIDEMIOLOGY — the 'embodiment' of social conditions into biology, and the health-inequalities work that reshapes policy. (4) INTERGENERATIONAL EPIDEMIOLOGY — risk and resilience transmitted across generations, not merely measured within one. (5) PREVENTION SCIENCE — the counting discipline turned forward into intervention design. THE INDIAN HORIZON: NFHS-based and school-based cohorts, Anganwadi surveillance and the RPwD Act's educational entitlements all depend on this counting discipline.", topic: "Concepts" },
    { question: "Why is the referral question — 'who wants what changed, and why?' — a diagnostic instrument rather than a formality?", answer: "BECAUSE THE ADULTS INITIATE: adults bring children for their own motivations, sometimes seeking to alter the child to fit the adult's expectations or teaching style — the referral is loaded clinical data, not neutral logistics. WHAT IT UNMASKS: the adjustment disorder in the parent, the school's discipline problem, or the genuine child disorder — faster than any rating scale, because it identifies whose problem the 'problem' is before a single symptom is counted. THE COLLISIONS: expectations routinely conflict — the school wants parental discipline changed while the parents want school services — and the assessment must reconcile rather than adjudicate them. THE CHILD'S OWN WISH: children rarely volunteer the wish to change and attribute problems to others, so the question 'what do YOU wish were different?' is asked explicitly and its answer treated as steering data. THE INDIAN VERSION: the gatekeeper map (parents, teachers, paediatricians, grandparents, tuition teachers, family physicians, sometimes faith healers) with the request often arriving as 'make him study' — mapping who initiated the referral and what they expect is the first Indian assessment task.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Is my child's problem common?", answer: "Roughly one child in ten has a psychiatric disorder at any time; conduct-type and anxiety problems lead, and depression is genuinely rare before adolescence. You are not alone, and this is mapped territory." },
    { question: "Why does the doctor want to meet my child's teacher?", answer: "Because parents and children each see a different half of the picture — they agree on only a minority of cases. The teacher adds the school half, and the three accounts together are what the diagnosis is built on." },
    { question: "The questionnaire said my child has a disorder — is that a diagnosis?", answer: "No. Questionnaire cut-offs define 'caseness' arbitrarily; diagnosis requires symptoms plus impairment plus clinical judgement. Symptom counts alone can label 40% of children anxious; proper criteria bring that figure to about 3%." },
    { question: "Why ask about my pregnancy and my child's first years? That is ancient history.", answer: "Because development is the child's biography: regulation, motor, cognitive, social, emotional and moral streams each leave a trace, and their pattern separates developmental from reactive problems — which changes what helps." },
    { question: "Do we need blood tests and scans?", answer: "Rarely: tests change the diagnosis in about 1% of children. They are ordered to answer specific questions raised by the history and examination — though lead, thyroid and iron are checked when the picture suggests them, because in Indian children they are common and treatable." },
    { question: "Is asking about trauma necessary? Won't it upset things?", answer: "Gently, yes: both documented events and events the child experienced as frightening shape behaviour and relationships. How the child was received when they first told someone is itself part of the clinical picture." },
    { question: "Why does the doctor want to see my teenager alone?", answer: "Because teenagers reasonably fear that the parents will 'skew' the interview first. The structure answers that fear: objectives agreed briefly together, then the young person heard at length, with confidentiality — what will be shared with whom — agreed in advance." },
    { question: "The school sent us — who decided my child needs a psychiatrist?", answer: "In India the gatekeepers are often wider than the parents: teachers, paediatricians, grandparents, tuition teachers, sometimes a faith healer. The doctor maps who asked for the referral and what each party wants changed — that map is part of the assessment itself." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Office for National Statistics (UK) national surveys of child mental health — the survey architecture and its DAWBA method" },
      { source: "The Rights of Persons with Disabilities Act, 2016 (India) — the educational entitlements the counting discipline supports" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.1.2 + 9.1.3 (Part 9) — source chapters mapped; content rewritten and updated beyond them (2009)" },
    ],
    trials: [
      { source: "Meltzer H et al. — the UK ONS national surveys of child mental health (1999/2002 waves; 10,438 children, DAWBA)" },
      { source: "Kessler RC et al. — National Comorbidity Survey Replication: the age-of-onset cascade (half by 12, three-quarters by 24)" },
      { source: "Shaffer D et al. (1996) — the NIMH DISC 2.3 in the MECA study. J Am Acad Child Adolesc Psychiatry, 35, 865–77: the impairment-criteria table" },
    ],
    reviews: [
      { source: "Costello EJ, Angold A — the epidemiology synthesis (prevalence, the four design factors, developmental epidemiology) as set out in the source chapter" },
      { source: "Bostic J, Martin A — the child psychiatric assessment chapter (interview structure, developmental history, MSE, investigations)" },
      { source: "Ford T, Goodman R et al. — DAWBA development and survey applications" },
      { source: "Ferdinand RF et al. (2003) — three-year predictive value of parents', teachers' and clinicians' judgements: the informant dynamics" },
      { source: "Challman TD et al. (2003) — the yield of medical evaluation in PDD. J Autism Dev Disord, 33, 187–92: the ~1% figure" },
      { source: "Kellam S — the origin of the term 'developmental epidemiology' and its growth directions" },
      { source: "Patel V, Flisher AJ et al. (2007) — mental health of young people: a global public-health challenge. Lancet: the framing relevant to India" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 (24×7, free) — the crisis and guidance channel for families and young people" },
      { source: "The district child guidance clinic, the school counselling tier and the DMHP child components — the channels the ~10% arithmetic justifies" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: how common these problems are, why the doctor wants the teacher's and the teenager's own account, why questionnaires are not diagnoses, and why blood tests are rarely needed.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The survey quartet, the four prevalence-movers, the seven streams, the child MSE, the laboratory honesty.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the decision path, the India layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — the multi-informant craft, the seven-stream history, the gatekeeper map, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The 9.5% figure, the onset cascade, the four prevalence-movers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can quote the UK survey quartet and recite the four movers with their examples cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Why the numbers move, why the informants disagree, the developing brain backdrop.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the 39.5%-to-3.2% collapse and the 13.5% arithmetic, and say why each moves a survey's headline." },
    { number: 3, title: "Clinical Practice", description: "The referral question, the seven streams, the child MSE, the honest laboratory.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can structure the full paediatric psychiatric interview and run the age-calibrated MSE without notes." },
    { number: 4, title: "Indian Context", description: "The gatekeeper map, the joint-family informants, the mother-tongue discipline, the test restraint.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can decode a 'make him study' referral and assemble the cross-setting picture from an Indian household." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the child-epidemiology essay cold and interpret any screening-survey MCQ on sight." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.1.2 + 9.1.3 (Part 9) — source chapters mapped (Costello & Angold, epidemiology; Bostic & Martin, assessment); content rewritten and updated beyond them", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Meltzer H et al. — the UK ONS national surveys of child mental health (1999/2002 waves; 10,438 children aged 5–15, parent and child interviewed with the DAWBA)", sourceType: "government", year: "1999–2002", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Kessler RC et al. — the National Comorbidity Survey Replication: the age-of-onset cascade (of the 46.4% reporting a lifetime disorder, half by age 12 and three-quarters by age 24)", sourceType: "primary", year: "2005", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Shaffer D et al. (1996) — the NIMH DISC 2.3 in the MECA study. J Am Acad Child Adolesc Psychiatry, 35, 865–77: the impairment-criteria table (the anxiety 39.5%-to-3.2% demonstration)", sourceType: "primary", year: "1996", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Ford T, Goodman R et al. — the DAWBA's development and its survey applications (the lay-interview-reviewed-by-clinicians architecture)", sourceType: "primary", year: "1997 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Challman TD et al. (2003) — the yield of medical evaluation in PDD. J Autism Dev Disord, 33, 187–92: the ~1% figure for tests changing the working diagnosis", sourceType: "primary", year: "2003", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Ferdinand RF et al. (2003) — the three-year predictive value of parents', teachers' and clinicians' judgements: the informant dynamics behind the multi-informant discipline", sourceType: "primary", year: "2003", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Kellam S — the origin of the term 'developmental epidemiology' and its five growth directions (longitudinal, genetic, life-course, intergenerational, prevention science), as cited in the source chapter", sourceType: "review", year: "1970s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Patel V, Flisher AJ et al. (2007) — mental health of young people: a global public-health challenge. Lancet: the global framing relevant to India", sourceType: "review", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S10", source: "The Indian counting and entitlement infrastructure cited in the note's India lens — NFHS-based and school-based cohorts, Anganwadi surveillance, the DMHP child components and the RPwD Act's educational entitlements (flagged as non-Oxford in the note's evidence list)", sourceType: "government", year: "2016 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "KYP sibling notes cross-referenced by the source note: the child-sleep note (the full sleep history behind the 30-second screen); the Group L clinical siblings (child neuropsychiatry, developmental disorders, autism, ADHD, conduct disorders, child anxiety) holding the disorder programmes this assessment course serves", sourceType: "review", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The UK national survey: 9.5% of 5–15-year-olds had a psychiatric disorder (10,438 children across England, Scotland and Wales; parent and child interviewed with the DAWBA, a lay interview reviewed by clinicians for best-estimate diagnosis); 11.2% of 11–15-year-olds against 8.2% of 5–10-year-olds; boys 11.4% against girls 7.6%; conduct disorders 5.3% (the largest group), anxiety 3.8%, hyperkinetic disorders 1.4%, depression 0.9% (rare in both sexes and all ages).", grade: "established", sources: ["S1", "S2", "S5"] },
    { text: "The age-of-onset cascade: of the 46.4% of adults reporting a lifetime disorder in the NCS-R, half reported onset by age 12 and three-quarters by age 24 — with forgetting of early episodes making true childhood onset probably commoner still.", grade: "established", sources: ["S1", "S3"] },
    { text: "The three-year course and the international frame: 7% of previously unaffected children developed a disorder over three years; persistence far higher for behavioural disorders (43%) than emotional disorders (~one in four); a Brazilian study with the same interview and DSM-IV found 12.7% with the same internal ordering, other world studies often around 20% at the high end.", grade: "established", sources: ["S1", "S2"] },
    { text: "The four prevalence-movers: time frame (recall reliability collapsing beyond ~3 months, the time frame explaining more variance than taxonomy, instrument or cohort in child-depression comparisons); informants (26% child-to-parent and 22% parent-to-child diagnostic overlap, 13.5% both); age-sex structure (the U-shape with its 11–14 trough; boys dominating developmental disorders, enuresis, ADHD and later drug abuse; girls overtaking in adolescent depression); and impairment criteria (the MECA anxiety collapse from 39.5% to 3.2% with both impairment measures at their most stringent) — symptoms without impairment are not disorders.", grade: "established", sources: ["S1", "S4"] },
    { text: "The multi-informant discipline and its arithmetic: parents and children disagree massively (only 13.5% of cases reported by both, though agreement is statistically significant); parents miss drug use; young children cannot rate their own hyperactivity; teachers miss depression — the clinical and instrument rule being to count a symptom if ANY informant reports it.", grade: "established", sources: ["S1", "S7"] },
    { text: "The assessment's structural differences: adults initiate the evaluation with their own motivations (sometimes to alter the child to fit the adult's expectations or teaching style), making the referral question clinical data; children may not want to change and attribute problems to others; alliances with child, parents and outside parties must be built simultaneously; and DSM criteria written on adults must be developmentally translated (irritability for sadness, somatic complaints for verbalised anxiety).", grade: "established", sources: ["S1"] },
    { text: "The seven-stream developmental history — regulation (sudden loss of established sleep/eating/toileting skills flagging emotional events; hunger and obesity both raising psychopathology risk), psychomotor, cognitive, interpersonal, emotional development and temperament, moral development, and trauma (actual events AND events perceived as traumatic, with the disclosure story) — plus family and medical history (including naturopathic and homeopathic agents), strengths as therapy's connection points, and the media diet.", grade: "established", sources: ["S1"] },
    { text: "The child mental state examination and interview technique: the adult categories developmentally recalibrated (judgement asked after rapport; auditory hallucinations suggesting psychosis > PTSD > organic; obsessions ego-dystonic against delusions ego-syntonic; magical thinking and night fears often age-appropriate); parent and child seen together first with transitional objects; the adolescent met alone at length after objectives are clarified together; the parent interview's open-ended narrative before narrow fills; confidentiality explicit; the conclusion collaborative.", grade: "established", sources: ["S1"] },
    { text: "The laboratory honesty: results change the working diagnosis in ~1% of children, with yield under 5% without supportive physical findings — ordered by presentation (chromosomal testing for intellectual disability/PDD, Wood's lamp for neurocutaneous, thyroid for mood, lead level, ASO/anti-DNase B titres for OCD/tics with infectious onset, urine drug screen, and CSF, neuroimaging and EEG where the picture demands); neuropsychological testing interpreted cautiously with the tester's input; PET, SPECT and fMRI remaining research tools.", grade: "established", sources: ["S1", "S6"] },
    { text: "Developmental epidemiology (Kellam's term): the movement from counting cases to tracing how risk exposure and vulnerability change across the life course, with its five growth directions — longitudinal studies, genetic epidemiology (its two revolutions), life-course epidemiology (the 'embodiment' of social conditions into biology), intergenerational epidemiology, and prevention science.", grade: "supported", sources: ["S1", "S8"] },
    { text: "The India lens: no national DAWBA-style survey exists (mostly school-based, instrument-varying studies demonstrating the time-frame and informant traps); the ~10% international anchor applied with local humility, every district school of 1,000 holding roughly 100 diagnosable children; the gatekeeper map (parents, teachers, paediatricians, grandparents, tuition teachers, family physicians, sometimes faith healers) with 'make him study' as the characteristic request; the joint family as deliberate informant richness; assessment in the mother tongue (language switching masquerading as or masking developmental language disorder); lead, thyroid and iron not skipped in suggestive presentations; the NFHS/Anganwadi/RPwD counting future.", grade: "supported", sources: ["S9", "S10"] },
    { text: "The cross-reference discipline: the disorder programmes this assessment serves (the child neuropsychiatry, developmental disorders, autism, ADHD, conduct-disorder and child-anxiety notes) and the child-sleep note behind the 30-second screen are the Group L siblings — taught in their courses, never duplicated or fabricated here; no drug is assigned a clinical role by this note.", grade: "supported", sources: ["S1", "S11"] },
  ],
};
