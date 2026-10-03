import type { PsychiatryCourse } from "./types";

/**
 * COUPLES THERAPY — THE DECENTRED DIALOGUE — canonical Psychiatry
 * course (migration batch 8, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/couples-therapy.md — untouched foundation),
 * re-researched against the lineages the note itself cites (the
 * Crowe/Ridley Maudsley behavioural-systems tradition, the four
 * schools from Dicks's Tavistock psychodynamics through Stuart and
 * Liberman's operant analysis to Minuchin's structure and Selvini
 * Palazzoli's paradox, the Leff London depression intervention
 * trial, the Baucom empirically-supported-treatments review, and
 * the transcultural counselling line of d'Ardenne & Mahtani with
 * Ahmed & Bhugra and Bhui) with per-claim provenance.
 *
 * Drug routes: none — couple therapy owns no pharmacotherapy of its
 * own; the antidepressant comparator arm of the London depression
 * trial belongs to the Depressive Disorders course's drug lessons
 * (drugLinks empty, no route invented), and the absent technique
 * lessons are recorded in contentGaps.
 */
export const couplesTherapyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "couples-therapy",
  title: "Couples Therapy",
  shortName: "Couple Therapy",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Couples Therapy"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The decentred dialogue: the relationship is the patient, not the individuals in it",

  summary:
    "Couple therapy treats the relationship as the patient, drawing on psychodynamic, behavioural, cognitive and systemic schools. Main indications are relationship distress, depression in partnered patients, morbid jealousy and psychosexual problems, with acute psychosis and active addiction as contraindications.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe the social context of the couple clinic: falling marriage rates, divorce reaching 40% of UK marriages by 1996, cohabiting and same-sex partnerships, multicultural variation including arranged-marriage preferences in families from the Indian subcontinent, and its clinical implications.",
    "Distinguish couple counselling (improved adjustment to the situation as it is) from couple therapy (radical change in the couple's functioning), and name the four schools with one core concept each.",
    "Explain psychodynamic couple therapy: internal blueprints, projections, shared fantasies and defences, and carry Wile's critiques of the approach honestly.",
    "Apply the behavioural model: reinforcement analysis, reciprocity negotiation (complaints → requests → linked tasks) and communication training with its specific faults and remedies.",
    "Outline cognitive (Beck) and rational-emotive (Ellis) couple work, and use the systems concepts: enmeshment, boundaries, circular causality, genograms, sculpting, family myths, paradoxical injunctions.",
    "Deploy the ALI hierarchy: matching the couple's symptoms, rigidity and individual focus to the seven levels, preferring the behavioural end whenever possible, and conduct the session craft: decentring and the ending message with its split-team variant.",
    "State the indications (relationship problems, sexual dysfunction, depression, morbid jealousy), the contraindications (acute psychosis, active addiction, unavailability), the Leff trial evidence for depression, the honest evidence verdict, and the training pathway.",
    "Handle the Indian realities: the joint family as the invisible third partner, the arranged-marriage presentation, cultural non-attendance read clinically, and the decentring-as-cultural-intervention argument.",
  ],
  quickFacts: [
    { label: "The unit of treatment", value: "The relationship is the patient", detail: "Couple therapy treats the interaction, not the individuals in it. The organising decision from which every technique follows; counselling improves adjustment to the situation as it is, therapy aims at radical change in the couple's functioning" },
    { label: "The four schools", value: "Psychodynamic · behavioural · cognitive · systemic", detail: "Blueprints and projections (Dicks, the Tavistock tradition); reinforcement and coercion (Stuart and Liberman, 1969); automatic negative thoughts and demands (Beck, Ellis); enmeshment and circular causality (Minuchin, Haley, Selvini Palazzoli)" },
    { label: "The trial-proven core", value: "Behavioural marital therapy", detail: "Reciprocity negotiation (complaints → requests → mutually agreed, linked, everyday tasks) plus communication training (direct speech about feelings, plans and perceptions, with feedback of what was heard); many controlled trials: the evidence anchor of the field" },
    { label: "The clinical algorithm", value: "The ALI hierarchy — seven levels", detail: "Alternative Levels of Intervention: reciprocity negotiation → communication training → inducing arguments → timetables and tasks → paradox → adjusting to the symptoms → ceasing treatment; the climb driven by symptoms, rigidity of the system and individual focus" },
    { label: "The signature craft", value: "Decentring", detail: "Minuchin's move: the partners talk directly to each other while the therapist becomes theatrical producer rather than diplomat, exposing the couple's typical pattern, preventing side-taking, rehearsing the negotiation they continue at home" },
    { label: "The format", value: "5–10 hour-long sessions over 3–6 months", detail: "Short-term behavioural-systems work, developed with one-way screen and live supervision but fully deliverable in any ordinary consulting room; every session ends with the message: positive framing, level-matched content, written copy" },
    { label: "The psychiatric indication", value: "Depression in partnered patients", detail: "The Leff London depression intervention trial: couple therapy effective and acceptable for depressed patients living with a partner, compared with antidepressants; the most under-used indication in ordinary practice" },
    { label: "The contraindications", value: "Acute psychosis · active addiction", detail: "The emotionally unavailable partner cannot do interactional work: defer until stabilisation, then couple-level work with limited aims; partner availability and willingness is the first selection gate" },
  ],
  knowledgeGraph: [
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The systems school's full account: the larger unit to convene when the couple is a subsystem of the joint household" },
    { label: "Group Therapy", type: "condition", href: "/psychiatry/group-therapy/", note: "The other multi-person format, where the group, not the couple, is the treatment unit" },
    { label: "Dynamic Psychotherapy", type: "condition", href: "/psychiatry/dynamic-psychotherapy/", note: "The psychodynamic school's one-person counterpart: blueprints, projections and defences in individual form" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The Leff trial's home territory: the antidepressant comparator arm and the depression indication" },
    { label: "Sexual Dysfunctions", type: "condition", href: "/psychiatry/sexual-dysfunctions/", note: "The psychosexual adjunct tier: behavioural-systems couple therapy works alongside it, with individual therapy added where childhood abuse survives in one partner" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "McFarlane's finding: the most useful psychological interventions involve the nearest relative" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The post-crisis couple work: stabilise the addiction first, then conjoint sessions with limited aims" },
    { label: "Indigenous & Folk Healing", type: "condition", href: "/psychiatry/indigenous-healing/", note: "The cultural lens the transcultural counselling lineage (d'Ardenne & Mahtani, Ahmed & Bhugra, Bhui) shares with this course's India tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Couple therapy's mechanism tier is the mechanism OF CHANGE: four competing explanations of what goes wrong between partners, each carrying its own repair. The psychodynamic model (Dicks and the Tavistock tradition): each partner carries an internal blueprint of self and other, formed by early attachments, shaping partner choice and the couple's response to stress; projections attribute split-off disowned characteristics (hostility, sadism) to the partner, and the relationship accumulates shared fantasies and defences. The behavioural model (Stuart and Liberman; 1969): no internal mechanisms assumed; couples in difficulty exchange low positive reinforcement or use punishment and negative reinforcement to coerce, corrected through reciprocity negotiation and communication training, the trial-proven core. The cognitive model (Beck's Love Is Never Enough, Ellis's rational-emotive work): the disturbed couple's communication shows the depressed patient's cognitive faults (misunderstandings, generalisations, untested assumptions, automatic negative thoughts) re-engineered by challenging assumptions, relaxing absolute rules and refocusing on positives ('intolerable' → 'difficult to accept', demands → desires). The systems model (Minuchin, Haley, Selvini Palazzoli): the couple as a system; enmeshment and negotiated compromise boundaries, circular causality with no single villain, genograms and sculpting, paradoxical injunctions. The Maudsley hybrid (Crowe and Ridley, 1980s) runs behavioural marital therapy plus the systems dimension along the ALI hierarchy. The honest neuroscience note this course carries: the couple therapist's map is interactional, not anatomical. The biology that matters clinically belongs to the comorbid conditions (depression's chemistry in the Leff comparator arm, jealousy's arousal, the prefrontal disruption that makes acute psychosis a contraindication) and is taught in their own courses; the entries below are the meeting points, graded accordingly.",
    steps: [
      "The psychodynamic engine: internal blueprints (early attachments) shape partner choice and the couple's response to stress; projections export disowned hostility; shared fantasies and defences accumulate: therapy resurfaces and rewrites the inflexible old patterns, aided by transference interpretations involving both partners.",
      "The behavioural engine: low positive reinforcement and mutual coercion; the operant ledger of the distressed couple; reciprocity negotiation and communication training re-install the exchange (the trial-proven core).",
      "The cognitive engine: automatic negative thoughts, untested assumptions and absolute demands; Beck challenges assumptions and refocuses on positives, Ellis re-engineers the language ('intolerable' → 'difficult to accept', demands → desires) breaking the repetitive cycles in which each partner attributes negative motive and assumes nothing can change.",
      "The systemic engine: circular causality. A's actions caused by B's and B's by A's, no single villain; therapy targets the pattern, not a partner; enmeshment rebalanced with negotiated compromise boundaries; paradoxical injunctions prescribed at altitude ('continue as you are; it may be protecting you from worse').",
      "The ALI escalation logic: the three couple characteristics (symptoms, rigidity of the system, individual rather than interactional focus) drive the climb from reciprocity negotiation through communication training, induced arguments, tasks and timetables, to paradox and symptom-adjustment; prefer the behavioural end whenever possible, moving up or down responsively.",
      "The decentred session and its message: the therapist becomes theatrical producer rather than diplomat; the couple's typical pattern observed live, side-taking prevented, the home negotiation rehearsed in the room; the ending message then converts each session into between-session homework with a written copy.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala-quarrel", name: "Amygdala (the quarrel's alarm)", role: "The threat-detection hub a hostile exchange lights: the reason shouted content cannot be heard; the decentred session works by cooling the arena rather than arguing with the alarm.", grade: "proposed" },
    { id: "prefrontal-availability", name: "Prefrontal cortex (the availability tier)", role: "The executive network that acute psychosis and active addiction disrupt: the biology beneath the contraindication: the emotionally unavailable partner cannot do interactional work.", grade: "supported" },
    { id: "acc-conflict", name: "Anterior cingulate cortex (the conflict monitor)", role: "The conflict-monitoring hub the induced argument deliberately engages: the controlled in-session crisis, observed from the outside rather than enacted in the kitchen.", grade: "proposed" },
    { id: "stress-axis-couple", name: "HPA axis (the relationship's stress thermostat)", role: "The stress machinery that marital distress and depression share: the reason the Leff trial could treat the illness by treating the relationship.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The depression indication's chemistry: the SSRI tier formed the London trial's comparator arm; the drug-route honesty tier (the antidepressant lessons belong to the Depressive Disorders course; this course owns the dialogue).", grade: "supported", drugConnection: "The Leff trial's comparator arm: taught as comparison; drugLinks stays empty because couple therapy prescribes conversation, not medication." },
    { name: "Dopamine", symbol: "DA", role: "The reward-learning substrate of the behavioural model's exchange: the pleasure ledger the reciprocity negotiation rebuilds (the positive reinforcement the distressed couple stopped paying each other).", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NA", role: "The arousal tier of the escalating quarrel: the fight-flight activation that communication training's calm feedback loop is built to interrupt.", grade: "proposed" },
    { name: "Oxytocin", symbol: "OT", role: "The affiliation chemistry pair bonding runs on: named here for honesty as the field's early frontier, not a treatment lever this course claims.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "coercion-spiral",
      name: "The coercion spiral (the behavioural model's route to distress)",
      steps: [
        { label: "The positives stop", detail: "Low positive reinforcement: the couple stops paying pleasant consequences into the exchange" },
        { label: "Coercion replaces exchange", detail: "Punishment and negative reinforcement: the withdrawal that follows complaint, the complaint that follows withdrawal" },
        { label: "The negative exchange locks in", detail: "Each partner's coercive move proving the other's worst attribution: the repetitive cycle in which nothing seems able to change" },
        { label: "Repair: reciprocity negotiation + communication training", detail: "Complaints → requests → mutually agreed, linked, everyday tasks; direct speech about feelings and plans with feedback of what was heard" },
      ],
      clinicalManifestation: "The couple who 'only talk when there is something to fight about'. The presentation the trial-proven core treats.",
      grade: "established",
    },
    {
      id: "circular-causality-loop",
      name: "The circular causality loop (the systems model)",
      steps: [
        { label: "A's move", detail: "The withdrawal after the criticism, or the pursuit after the withdrawal" },
        { label: "B's response", detail: "The pursuit that triggers the withdrawal, or the criticism that answers it" },
        { label: "The pattern feeds itself", detail: "No first cause and no single villain: A's actions caused by B's and B's by A's" },
        { label: "Therapy targets the pattern", detail: "Decentring exposes the loop in the room; negotiated compromise boundaries and, at altitude, paradox loosen it" },
      ],
      clinicalManifestation: "The distance conflict (one partner wanting closer than the other) treated by rebalancing the pattern, not by judging either partner.",
      grade: "supported",
    },
    {
      id: "ali-escalation-pathway",
      name: "The ALI escalation pathway (matching the couple to the level)",
      steps: [
        { label: "The three characteristics graded", detail: "Symptomatology, rigidity of the system, individual rather than interactional focus" },
        { label: "The level matched", detail: "Flexible, motivated couples at reciprocity negotiation and communication training; rigid, symptomatic, individually-focused couples at induced arguments, tasks and timetables, paradox" },
        { label: "The behavioural end preferred", detail: "Collaboration with the couple's own goals beats the therapist's managerial role: climb only as the rigidity demands" },
        { label: "Responsive movement", detail: "Flexibility gained → step down; rigidity or non-response → step up; paradox and symptom-adjustment reserved for couples who reject the interactional focus" },
      ],
      clinicalManifestation: "The rigid, symptomatic, individually-focused couple who flounder in negotiation and finish at paradox: the difference between floundering and finishing.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "behavioural-turn", time: "1969", title: "The behavioural turn", description: "Stuart and Liberman import the operant analysis into the marital clinic: distressed couples exchange low positive reinforcement or coerce; reciprocity negotiation and communication training born, the field's eventual evidence anchor.", phase: "onset" },
    { id: "systems-wave", time: "1974–1978", title: "The systems wave", description: "Minuchin's structure and decentring; Selvini Palazzoli's paradox and counter-paradox: the couple as a system with circular causality, treated with genograms, sculpting and paradoxical injunctions.", phase: "onset" },
    { id: "maudsley-hybrid", time: "1980s", title: "The Maudsley hybrid", description: "Crowe and Ridley build behavioural-systems couple therapy: behavioural marital therapy plus the systems dimension, organised along the ALI hierarchy; developed with a one-way screen and live supervision, born in psychiatry for couples carrying psychiatric problems.", phase: "peak" },
    { id: "cognitive-couple", time: "1988–1989", title: "The cognitive couple and the comparative trials", description: "Beck's Love Is Never Enough brings the automatic-thought analysis to the couple; Snyder and Wills compare behavioural with insight-oriented marital therapy: the schools put to the test.", phase: "peak" },
    { id: "evidence-lands", time: "1998–2000", title: "The evidence audit and the psychiatric indication", description: "Baucom's empirically-supported review consolidates the behavioural core's proof; the Leff London depression intervention trial shows couple therapy effective and acceptable for depressed patients living with a partner; Crowe and Ridley's second edition consolidates the method.", phase: "peak" },
    { id: "dissemination-era", time: "2000s onward", title: "The dissemination era", description: "The self-help version with homework exercises and explanations; the ordinary-consulting-room delivery without the screen; and the Indian reality: scarce formal services making the psychiatrist's repertoire-negotiation skill the practical toolset.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The demand-side sociology the source chapter opens with: a marriage institution in crisis; falling marriage rates, divorce reaching 40% of UK marriages by 1996, cohabiting and same-sex partnerships (the latter needing to be STRONGER than average to survive homophobia), and multicultural realities including explicitly noted arranged-marriage preferences in families from the Indian subcontinent. The clinical translation: the couple as a treatment unit is a mainstream psychiatric resource, not a boutique one, and the couple clinic's population keeps diversifying as the institution does.",
    indianPrevalence: "Divorce in India remains lower-frequency than the Western figures but on a rising trajectory, with mediation-shaped breakups increasingly needed; formal couple-therapy services are scarce (Relate-equivalents barely exist). The practical Indian toolset is the psychiatrist's own repertoire-negotiation skill plus the chapter's self-help package with its homework exercises and explanations.",
    lifetimeRisk: "Where the relationship exacerbates illness (the depression and anxiety the Leff indication names) the untreated course couples the two: the illness feeding the distress and the distress feeding the illness.",
    genderRatio: "Both partners carry the pattern: the behavioural model's coercion ledger and the systems model's circular loop are symmetrical by design; 'whose fault' is the question every school except the psychodynamic declines to answer.",
    ageOfOnset: "No age of onset, but the presentation clusters are life-stage shaped: early-marriage conflict and consummation problems, childrearing-years argument patterns, midlife desire disparity, later-life health-and-care negotiations.",
    indianNotes: "The joint family as the invisible third partner in most conjugal therapy; the arranged-marriage couple presenting with desire disparity, consummation failure and in-law conflict; and couples addressing each other through intermediaries: decentring's perfect travelling companion.",
  },
  etiology: [
    { category: "psychological", factor: "Internal blueprints and projections (the psychodynamic model)", details: "Blueprints of self and other formed by early attachments, shaping partner choice and the couple's response to stress; projections attributing split-off disowned characteristics (hostility, sadism) to the partner; shared fantasies and defences accumulating, with emotional health defined as the capacity to hold internal conflict and external stress (fear with trust, pain with pleasure)." },
    { category: "social", factor: "The reinforcement exchange (the behavioural model)", details: "Low positive reinforcement, or mutual coercion through punishment and negative reinforcement: an interactional, learnable deficit, hence correctable by reciprocity negotiation and communication training: the field's trial-proven formulation." },
    { category: "psychological", factor: "Automatic negative thoughts and absolute demands (the cognitive model)", details: "Misunderstandings, generalisations and untested assumptions; the repetitive cognitive-behavioural cycles in which each partner attributes negative motive and assumes nothing can change: 'intolerable' → 'difficult to accept', demands → desires." },
    { category: "social", factor: "Enmeshment and circular causality (the systems model)", details: "Excessive involvement in the other's private business; the distance conflict (one wanting closer than the other); A's actions caused by B's and B's by A's: the pattern, not a partner, as the patient; transgenerational influences mapped in genograms, and the family myths that carry them." },
    { category: "environmental", factor: "The institution's sociology and the cultural frame", details: "Falling marriage rates, divorce reaching 40% of UK marriages by 1996, cohabiting and same-sex partnerships needing to be stronger than average to survive homophobia; multicultural variation including arranged-marriage preferences in families from the Indian subcontinent, sometimes with the insistence that the couple live with the husband's parents: the context every formulation reads." },
  ],
  symptomClusters: [
    {
      category: "1. The distressed-couple presentation (what walks into the room)",
      symptoms: ["Arguments and tensions: the unresolved rows replaying on a loop", "The monologuing spokesperson with the silent partner (the voice accepted as the couple's)", "Intractable arguments that go nowhere, to be put 'on ice' while everyday business is negotiated", "Intellectual-only communication: the committee couple suppressing feeling; the imbalance of one-open-one-logical partner", "The distance conflict, one partner wanting closer than the other", "Empathy imbalances and side-taking pressure on the therapist"],
    },
    {
      category: "2. The individual-illness disguise (the referral that is not what it says)",
      symptoms: ["The individual patient spending the therapy hour complaining about the absent partner: a couple-therapy referral in individual-therapy disguise", "Depression and anxiety where the relationship exacerbates them (the Leff indication)", "Health deterioration in one partner following the other's individual therapy: the signal that the treatment unit was the couple all along", "Sexual dysfunction and desire disparity: relationship problems with mechanical components and vice versa"],
    },
    {
      category: "3. The comorbid and complicated tier",
      symptoms: ["Morbid jealousy: the non-jealous partner involved too; conjoint sessions nearly always useful (De Silva)", "Post-crisis addictions and psychosis, once stabilised: couple-level work with limited aims", "Childhood abuse surviving in one partner: individual therapy added alongside the conjoint work", "The acutely psychotic or actively addicted partner: emotionally unavailable; the standing contraindication until stabilised"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The couple assessment (the first session)",
      code: "Assessment and treatment in one",
      criteria: [
        "Stay in control: the session has a manager, and it is the therapist, not the loudest partner.",
        "Build rapport with BOTH partners without favouring either: the relationship's side is the only side.",
        "Maintain momentum and the interactional focus throughout.",
        "Maximise the couple's experience of changed interaction: decentring as the signature move from the first minutes.",
        "Grade the couple on the three characteristics (symptomatology, rigidity of the system, individual focus) to set the ALI level.",
        "End with the message: next appointment, positive sympathetic framing for both, level-matched content, and where possible a written copy.",
      ],
      duration: "The first session is itself the beginning of treatment: assessment and treatment in one, per the Maudsley format.",
      indianNote: "In the joint-family consulting room, the invisible third partner (the mother-in-law, the household) is part of the assessment whether present or not. The couple's 'distance problem' is usually negotiated across three households.",
    },
    {
      system: "The selection gates",
      code: "Indications and contraindications",
      criteria: [
        "INDICATED: relationship arguments and tensions; the complaining-about-the-partner individual patient; health deterioration after the partner's individual therapy; sexual dysfunction (desire disparity, sexual phobia, with individual therapy added where childhood abuse survives in one partner); depression and anxiety the relationship exacerbates; morbid jealousy; post-crisis addictions and psychosis once stabilised; schizophrenia's psychological care (the nearest relative involved, McFarlane).",
        "CONTRAINDICATED or less amenable: the acutely psychotic patient; the actively addicted patient (both emotionally unavailable, revisit after stabilisation); phobias and PTSD unconnected to the home.",
        "Partner availability and willingness: the first gate; cultural non-attendance reasons usually respected (the Indian subcontinent named explicitly in the source chapter), with judicious pressure only where the non-attendance IS the clinical problem.",
        "The continuing-relationship question asked directly when it is the real agenda: mediation for better breakups (domicile, children) as the growing cousin; pre-relationship problems may fit individual therapy better, though one or two couple sessions still map the impact on the partner.",
      ],
      duration: "Selection is a standing re-assessment: the deferred couple (acute psychosis, active addiction) returns when stabilised, with limited aims.",
      indianNote: "The chapter names the Indian subcontinent explicitly: arranged-marriage preferences, sometimes with the couple living with the husband's parents: respected as cultural reality while read clinically.",
    },
  ],
  severityScales: [
    {
      name: "The ALI ladder",
      fullName: "Alternative Levels of Intervention",
      measures: "Which intervention level the couple's symptomatology, rigidity of the system and individual focus demand: the Maudsley method's clinical algorithm.",
      ranges: [],
      indianNote: "Ordered, not scored: prefer the behavioural end whenever possible; climb on rigidity or non-response; step down when flexibility returns.",
    },
    {
      name: "The selection screen",
      fullName: "Indication and contraindication gates",
      measures: "Partner availability and willingness; psychiatric stability; the continuing-relationship question.",
      ranges: [],
      indianNote: "Cultural non-attendance reasons are respected while remaining part of the formulation. The gate the source chapter teaches with the Indian subcontinent named.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Couple counselling", distinguishingFeatures: "Aims at improved adjustment to the situation as it is: support, advice, tiding over.", keyDifferentiator: "Depth of intended change: therapy aims at radical change in the couple's functioning; the borders blur in practice, but the formulation and the techniques mark the divide." },
    { condition: "Individual therapy for one or both partners", distinguishingFeatures: "The pre-relationship problem: a lifelong pattern predating this partner.", keyDifferentiator: "Where the complaint is truly individual, individual therapy fits better, but one or two couple sessions still map the impact on the partner." },
    { condition: "Mediation (the better-breakup cousin)", distinguishingFeatures: "The couple has decided to separate; the work is domicile, children, terms.", keyDifferentiator: "Mediation negotiates the ending; couple therapy treats the continuing relationship: a growing cousin of the field, not a subset of it." },
    { condition: "Family therapy", distinguishingFeatures: "The symptomatic system includes parents, in-laws, children: the identified patient is a household member.", keyDifferentiator: "The unit of treatment: where the joint family's power centre (often the mother-in-law) drives the pattern, the larger system is the room to convene." },
    { condition: "Psychosexual therapy alone", distinguishingFeatures: "The mechanical component dominates: desire disparity, consummation failure, sexual phobia.", keyDifferentiator: "Couple therapy works as an adjunct to psychosexual therapy, with individual therapy added where childhood abuse survives in one partner: the Maudsley hybrid suits the combined presentation." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Behavioural couple therapy (the trial-proven core)",
      description: "The operant analysis corrected: reciprocity negotiation (complaints → requests → mutually agreed tasks, linked and reciprocal, everyday and practical) plus communication training (direct, unambiguous speech about feelings, plans and perceptions, with feedback of what was heard). Many controlled trials: proven efficacy (Baucom's empirically-supported review; Snyder and Wills's behavioural-vs-insight comparative trial; Crowe's own conjoint-therapy outcome study; Emmelkamp's comparative evaluation; Johnson and Greenberg's experiential-vs-problem-solving comparison).",
      whenToUse: "ALI levels 1–2: flexible, motivated, interactionally-focused couples, and the base layer for everyone else.",
      indianContext: "The everyday-practical exchange (house-and-children business) travels perfectly to the Indian household: the negotiated task list the in-laws can live with.",
    },
    {
      category: "psychotherapy",
      name: "Cognitive and rational-emotive couple work",
      description: "Beck's Love Is Never Enough: challenge assumptions, relax absolute rules, refocus on positives. Ellis's re-engineering: 'intolerable' → 'difficult to accept', demands → desires, and the analysis of the repetitive cognitive-behavioural cycles in which each partner attributes negative motive and assumes nothing can change.",
      whenToUse: "Where automatic negative thoughts and absolute demands dominate the couple's communication.",
      indianContext: "The demand/desire distinction is a gentle, culturally acceptable reframe: the 'must' softened to 'would like' in languages that respect both.",
    },
    {
      category: "psychotherapy",
      name: "Psychodynamic couple therapy",
      description: "Internal blueprints, projections and shared defences worked through transference interpretations involving both partners; one therapist or two co-therapists, whose own interactions sometimes carry the couple's projections: understood in joint supervision. Four premises: emotional health as the capacity to hold internal conflict and external stress; significant relationships resurrect and can change inflexible old patterns; unconscious processes must be understood; change takes time. Wile's critiques taught honestly: the unflattering picture (dependence, narcissism, sadism, exploitation) saps motivation, and hypothetical constructs are treated as though observed; controlled-trial evidence scarce, gains undramatic.",
      whenToUse: "Where early-attachment patterns and projective cycles dominate the formulation; short-term forms only, per the evidence.",
      indianContext: "The blueprint concept explains the arranged-marriage couple's mismatched maps without blaming either household.",
    },
    {
      category: "psychotherapy",
      name: "Systems techniques (the high-altitude tier)",
      description: "Enmeshment addressed with negotiated compromise boundaries; genograms mapping transgenerational influences; sculpting (wordless positioning of relationships); family myths named. The active methods: creating conflict in-session, homework tasks, and paradoxical injunctions; 'continue as you are; it may be protecting you from worse'.",
      whenToUse: "ALI levels 3–7: rigid, symptomatic, individually-focused couples who reject the interactional focus.",
      indianContext: "The genogram is the joint family's natural document: three generations of alliance and obligation on one page.",
    },
    {
      category: "psychotherapy",
      name: "Behavioural-systems couple therapy (the Maudsley hybrid)",
      description: "The chapter's own method (Crowe and Ridley, 1980s): behavioural marital therapy plus the systems dimension, run as a menu, not a fixed course; negotiation, communication and structural moves early in the session; tasks, timetables and paradox in the end-of-session message. Short-term: 5–10 hour-long sessions over 3–6 months; developed with one-way screen and live supervision, fully deliverable in any ordinary consulting room. Born in psychiatry: it suits couples where one or both partners carry psychiatric problems alongside relationship difficulty, and works as an adjunct to psychosexual therapy. A self-help version with homework exercises and explanations now exists.",
      whenToUse: "The default architecture of this course: the ALI hierarchy decides the level, the session craft delivers it.",
      indianContext: "The scarce-services Indian answer: the psychiatrist's repertoire-negotiation skill plus the self-help package; no special room, no screen, no separate service required.",
    },
  ],
  safety: {
    redFlags: [
      "The acutely psychotic partner: couple therapy deferred until stabilisation: the emotionally unavailable partner cannot do interactional work (the contraindication that protects everyone).",
      "The actively addicted partner: treat the addiction first; revisit couple-level work with limited aims after stabilisation.",
      "Morbid jealousy with any risk to the partner: conjoint sessions nearly always useful (De Silva), but the risk assessed before the couple is put in one room.",
      "Health deterioration in one partner after the other's individual therapy: the signal that the treatment unit was the couple all along, and the antidepressant answer alone will keep failing.",
      "Phobias and PTSD unconnected to the home: the mis-referral: couple therapy will not treat them, and will waste the window that the right treatment needed.",
      "One partner's non-attendance treated as mere logistics, where the non-attendance IS the clinical problem, a careful push is clinical work; cultural reasons are respected while read clinically.",
    ],
    urgentGuidance:
      "The order of operations when the couple arrives in crisis: (1) stabilise the individual emergency first (the acute psychosis, the active addiction, the intoxication) the conjoint room waits; (2) once stabilised, offer couple-level work with limited aims (McFarlane: schizophrenia's most useful psychological interventions involve the nearest relative); (3) morbid jealousy: risk assessed before conjoint sessions, then the couple format; nearly always useful; (4) depression in the partnered patient: the couple referral made alongside the individual treatment, on the Leff trial's effective-and-acceptable verdict; medication and couple therapy as alternatives and partners, not rivals; (5) cultural non-attendance respected but read clinically: judicious pressure only where the non-attendance is itself the problem; (6) the continuing-relationship question asked directly when it is the real agenda: mediation for the better breakup, couple therapy for the continuing relationship.",
  },
  drugLinks: [],
  contentGaps: [
    "Couple therapy owns no pharmacotherapy: the antidepressant comparator arm of the Leff London trial belongs to the Depressive Disorders course's drug lessons (sertraline, fluoxetine, mirtazapine and the rest); taught here as comparison, route never invented.",
    "Behavioural marital therapy, the ALI hierarchy and the ending-message craft have no dedicated KYP technique lessons. This course is their home.",
    "The psychosexual adjunct tier's technique detail lives in the Sexual Dysfunctions course: the couple-level integration taught here, the route referenced rather than duplicated.",
    "Marriage and relationship mediation (the better-breakup cousin: domicile, children, terms) has no KYP lesson; the concept and its indications taught here.",
  ],
  patientGuide: {
    whatIsIt:
      "Couple therapy is a treatment for the relationship itself. Instead of seeing each partner separately, the therapist sees the two of you together, because the problem you are describing lives between you, not inside one of you. The sessions are short and practical (usually five to ten hour-long meetings over three to six months), and they focus on what actually happens when the two of you talk. The therapist is not a referee deciding who is right: the skill is getting you talking directly to each other (a technique called decentring) so the patterns causing the trouble can be seen and changed.",
    whatCausesIt:
      "Nothing is 'wrong' with either of you the way an illness is wrong. Distressed couples usually stop doing positive things for each other and start trying to change each other by pressure (nagging, silence, withdrawal) a trap both partners fall into and neither one started. Some couples also carry patterns from earlier in life (what each of you learned love 'should' look like), or absolute rules ('he must want the same things I want'). And some troubles live in the wider system: the household, the in-laws, the expectations the marriage was arranged inside.",
    symptoms:
      "Couples come with arguments that never resolve; one partner doing all the talking; a distance problem (one wanting closer than the other); a sex life that has become a source of hurt rather than closeness; or one partner's depression or jealousy that the relationship is feeding. The warning signs that the couple format needs rethinking for now: one partner actively drinking or using drugs, or acutely unwell with psychosis; the work waits until that partner is stable, and then returns with smaller aims.",
    treatment:
      "The evidence-backed core is behavioural: turning complaints into requests and agreeing small, linked, practical tasks (reciprocity negotiation), plus training in direct speaking and really hearing (communication training). Where the couple is more stuck, the therapist works at higher levels of the method's ladder: tasks and timetables between sessions, and sometimes carefully paradoxical suggestions. Every session ends with a message: something positive about you both, the plan for the weeks between, and where possible a written copy to take home. Where depression is part of the picture, couple therapy has been shown to work as a treatment in its own right: a London trial found it effective and acceptable for depressed patients living with a partner.",
    selfHelp: [
      "Talk to each other, not through intermediaries: parents, in-laws, or the children; the direct conversation IS the treatment.",
      "Turn complaints into requests ('you never…' → 'would you…') and agree small linked tasks, one each, everyday, practical.",
      "Keep the message from the session where you will both see it: the written copy is the between-session therapist.",
      "Expect five to ten sessions over three to six months: brief, focused work, not open-ended.",
      "Notice the pattern, not the villain: what he does that triggers what you do that triggers what he does.",
      "If drinking, drugs or an acute illness is in the picture, stabilise that first. The couple work will still be there.",
      "The stay-or-leave question is legitimate to bring into the sessions, deciding together is also couple work.",
    ],
    whenToSeekHelp: [
      "Depression in one partner that the relationship seems to feed. Ask about couple therapy alongside the medication conversation",
      "Jealousy that is damaging the household: the non-jealous partner belongs in the room too",
      "A sex problem that has become a relationship problem, or a relationship problem that has become a sex problem",
      "One partner's health worsening while the other is in individual therapy: the unit of treatment may need to change",
      "Any risk of violence or severe distress: safety comes before any therapy format",
    ],
    indianResources: [
      "Psychiatry OPDs and the district mental health programme: the realistic access point for couple-informed psychiatric care",
      "Tele-MANAS 14416 (24×7, free), for acute distress in either partner while the couple work is arranged",
      "The self-help version with homework exercises and explanations: the scarce-services answer the source chapter itself provides",
      "The treating team's written ending-message template: ask for it; it is the household's instrument",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific couple-therapy pathway exists; practice follows the behavioural-systems lineage (Crowe and Ridley's Maudsley manual, the Baucom empirically-supported review, the Leff trial for the depression indication) delivered within general psychiatry and the DMHP structures, with the transcultural counselling line (d'Ardenne and Mahtani, Ahmed and Bhugra, Bhui) as the cultural-competence frame.",
    systemContext: "The couple usually reaches psychiatry through an individual door: the depressed spouse, the jealous husband, the consummation failure brought by the bride's mother. The couple format is the psychiatrist's own skill to offer: no special room, no one-way screen, no Relate-equivalent service required; the ordinary consulting room and the ALI menu suffice. Formal couple-therapy services are scarce; the self-help package and the repertoire-negotiation skill are the practical Indian toolset.",
    programmeContext: "No national couple-therapy programme exists; Tele-MANAS 14416 carries acute distress in either partner; the DMHP psychiatric tier is the realistic referral spine; sexual-dysfunction services at major centres handle the psychosexual adjunct tier; the rest is the treating psychiatrist's craft.",
    costConsiderations: "The therapy costs clinician time, not technology: 5–10 hour-long sessions over 3–6 months, deliverable in any OPD. The scarce commodity is the trained therapist, not the treatment; hence the chapter's self-help version (homework exercises and explanations) as the scale answer, and the written ending-message as the cheapest effective instrument in the field.",
    culturalConsiderations: "The source chapter names the Indian subcontinent explicitly: families preferring arranged marriages, sometimes insisting the couple live with the husband's parents. The Indian extensions this course teaches: the joint family as the invisible third partner in most conjugal therapy (the mother-in-law often the system's power centre; the couple's 'distance problem' usually negotiated across three households); the arranged-marriage couple presenting with desire disparity, consummation failure and in-law conflict: exactly the psychosexual-plus-systems hybrid the Maudsley method addresses; and divorce's lower frequency but rising trajectory, with mediation-shaped breakups increasingly needed. Cultural non-attendance reasons are respected while remaining part of the formulation. And decentring travels perfectly: in a culture where couples address each other through intermediaries, teaching direct partner-to-partner speech IS the intervention.",
    patientCounselling: [
      "The unit-of-treatment script: 'The problem you describe lives between you, so the treatment happens between you: the two of you in the room, talking to each other, with me coaching the conversation rather than judging the persons.'",
      "The expectations script: 'Five to ten sessions over three to six months, each ending with a written message; the homework between sessions is where the change actually happens.'",
      "The in-laws script: 'Your households are part of the picture whether they attend or not. We will sometimes ask them in for a session, and we will always plan around them.'",
      "The arranged-marriage script: 'The marriage's origins are not the problem's cause, but the expectations each family installed in it are part of what we will negotiate.'",
      "The depression script: 'Where the marriage feeds the illness, treating the marriage treats the illness. The London trial's finding; medication and couple therapy are alternatives and partners, not rivals.'",
    ],
  },
  decisionPath: {
    title: "The couple at the door: format, indication and level",
    nodes: [
      {
        id: "start",
        question: "A couple (or one partner) arrives with relationship distress. First: whose problem is the room for, and is the couple format the right one?",
        branches: [
          { label: "Both partners willing: the distress is the relationship itself", next: "ali-start" },
          { label: "A psychiatric rider (depression, psychosexual, jealousy, psychosis)", next: "rider-gate" },
          { label: "One partner refusing or unavailable", next: "refusal-gate" },
          { label: "The stay-or-leave question dominates", next: "mediation-path" },
        ],
      },
      {
        id: "ali-start",
        question: "Both partners engaged. Grade the couple on the three ALI characteristics: symptomatology, rigidity of the system, individual rather than interactional focus.",
        branches: [
          { label: "Flexible, motivated, interactionally focused", next: "behavioural-level" },
          { label: "Some rigidity, symptomatic", next: "mid-level" },
          { label: "Rigid, symptomatic, individually focused", next: "systemic-level" },
        ],
      },
      {
        id: "behavioural-level",
        question: "ALI levels 1–2: the behavioural end (preferred whenever possible).",
        recommendation: "Reciprocity negotiation: complaints → requests → mutually agreed tasks, linked and reciprocal, everyday and practical. Communication training: direct speech about feelings, plans and perceptions, with feedback of what was heard. The ending message with a written copy each session; decentring throughout: the therapist as theatrical producer, never diplomat.",
      },
      {
        id: "mid-level",
        question: "ALI levels 3–4: the middle of the ladder.",
        recommendation: "Induce the useful argument in-session (the controlled mini-crisis, observed); tasks and timetables between sessions; the monologuing spokesperson interrupted by inviting the non-verbal partner to comment; everyday house-and-children business negotiated while the intractable argument sits 'on ice'.",
      },
      {
        id: "systemic-level",
        question: "ALI levels 5–7: the high-altitude tools.",
        recommendation: "Paradox ('continue as you are; it may be protecting you from worse'), adjusting to the symptoms, or ceasing treatment and offering other therapies; the split-team message (one part of the team favouring the task, the other 'preferring to prescribe the symptom') injecting the ambivalence the couple must resolve. Step down the moment flexibility returns.",
      },
      {
        id: "rider-gate",
        question: "The psychiatric rider check: what rides with the relationship distress?",
        branches: [
          { label: "Depression where the relationship exacerbates it", next: "leff-path" },
          { label: "Sexual dysfunction or desire disparity", next: "psychosexual-path" },
          { label: "Morbid jealousy", next: "jealousy-path" },
          { label: "Acutely psychotic or actively addicted partner", next: "defer-path" },
        ],
      },
      {
        id: "leff-path",
        question: "The depression indication: the Leff logic.",
        recommendation: "Couple therapy effective and acceptable for depressed patients living with a partner (the London trial, compared with antidepressants): the referral made alongside the individual treatment, the relationship treated as the maintenance factor, not sequenced indefinitely behind it.",
      },
      {
        id: "psychosexual-path",
        question: "The psychosexual indication.",
        recommendation: "Behavioural-systems couple therapy as the adjunct to psychosexual therapy (the Sexual Dysfunctions course's tier); individual therapy added where childhood abuse survives in one partner; desire disparity and sexual phobia treated in the context that maintains the symptom.",
      },
      {
        id: "jealousy-path",
        question: "The jealousy indication.",
        recommendation: "Risk assessed before the couple shares a room; then conjoint sessions: nearly always useful (De Silva): the non-jealous partner belongs in the treatment, because jealousy involves the couple's system, not one person's chemistry.",
      },
      {
        id: "defer-path",
        question: "The contraindication gate.",
        recommendation: "Acute psychosis or active addiction: the emotionally unavailable partner cannot do interactional work; stabilise first, then couple-level work with limited aims. In schizophrenia, remember McFarlane: the most useful psychological interventions involve the nearest relative.",
      },
      {
        id: "refusal-gate",
        question: "One partner refusing or unavailable.",
        recommendation: "Cultural non-attendance reasons usually respected (the source chapter names the Indian subcontinent explicitly); judicious pressure only where the non-attendance IS the clinical problem; individual work with the attending partner meanwhile, and the refusing partner sometimes re-engaged by the changed interaction the attending partner brings home.",
      },
      {
        id: "mediation-path",
        question: "The continuing-relationship question is the real agenda.",
        recommendation: "Mediation for the better breakup (domicile, children, terms) as the growing cousin of couple therapy; one or two couple sessions still valuable to map the separation's impact; pre-relationship problems fit individual therapy better, though a couple session or two still maps the partner's position.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Taking sides: the diplomat error",
      why: "The therapist drawn into arbitrating becomes the third combatant: the side-taken partner vindicated, the other confirmed in resentment, the interaction never observed.",
      correction: "Decentring: route questions through the couple ('Could you ask your partner what she thinks about your coolness?'): the skilful art of validating one partner without antagonising the other is learned, not innate.",
    },
    {
      mistake: "Empathic listening as the default habit",
      why: "The individual therapist's good reflex slows couple work: one-to-one empathy in a three-person room recruits the heard partner and loses the other.",
      correction: "Decentre instead: the couple's dialogue, not the therapist's understanding, is the instrument; empathy-without-side-taking replaces empathy-with.",
    },
    {
      mistake: "Working at the wrong ALI level",
      why: "The flexible couple given paradox is over-engineered and patronised; the rigid, symptomatic, individually-focused couple given negotiation flounders and drops out: the mis-match mistake in both directions.",
      correction: "Grade the three characteristics (symptomatology, rigidity, individual focus) and match the level; prefer the behavioural end whenever possible; move up on rigidity or non-response, down when flexibility returns.",
    },
    {
      mistake: "Accepting the monologuing spokesperson as the couple",
      why: "The articulate partner's account becomes the case: the silent partner's experience and the interaction itself (the actual patient) never enter the record.",
      correction: "Invite the non-verbal partner to comment: the circular-questioning cousin that provokes the useful mini-crisis; the imbalance of the one-open-one-logical couple named and worked with.",
    },
    {
      mistake: "Ending sessions without the message",
      why: "The fifty minutes evaporate: no positive framing means the couple leaves demoralised; no level-matched content means nothing happens between sessions: the interval where the therapy actually lives.",
      correction: "The structured ending every time: next appointment, positive sympathetic framing for both, the level-matched plan (negotiated tasks or timetable or, at altitude, the paradoxical injunction or split-team message), closing positive reiteration, and where possible a written copy.",
    },
    {
      mistake: "Contraindication blindness: working with the acutely psychotic or actively addicted partner",
      why: "The emotionally unavailable partner cannot do interactional work: the sessions become case management wearing a couple-therapy costume, and the untreated emergency behind the refusal to engage goes unaddressed.",
      correction: "Defer: stabilise the psychosis or the addiction first, then offer couple-level work with limited aims. The timing decision is the clinical skill, not a defeat.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The four schools with one core concept each: psychodynamic (internal blueprints, projections. Dicks, the Tavistock tradition); behavioural (low positive reinforcement, mutual coercion. Stuart and Liberman, 1969); cognitive (automatic negative thoughts, demands. Beck's Love Is Never Enough, Ellis); systemic (enmeshment, circular causality. Minuchin, Selvini Palazzoli).",
        "Couple counselling vs couple therapy: improved adjustment to the situation as it is vs radical change in the couple's functioning; the borders blur, the formulation and techniques differ.",
        "The ALI hierarchy recited: reciprocity negotiation → communication training → inducing arguments → timetables and tasks → paradox → adjusting to the symptoms → ceasing treatment; the three couple characteristics that drive the climb (symptomatology, rigidity of the system, individual focus).",
        "Decentring defined (Minuchin): the partners directed to talk to each other while the therapist becomes theatrical producer rather than diplomat, exposing the typical pattern, preventing side-taking, rehearsing the home negotiation.",
        "Indications and contraindications with the trial evidence: the Leff London trial for depression; morbid jealousy (De Silva); the McFarlane nearest-relative finding; acute psychosis and active addiction as the contraindications.",
      ],
      practical: [
        "Demonstrate the first-session structure: rapport with both partners without favouring, the interactional focus, momentum, and one decentred exchange ('Could you ask your partner what she thinks about your coolness?').",
        "Construct an ending message for a given couple: the positive framing, the level-matched content (task, timetable or split-team message as indicated), the closing positive reiteration, the written copy.",
      ],
      longAnswer: [
        "A couple presents with two years of unresolved arguments: describe the schools of couple therapy, the assessment, and a treatment plan along the ALI hierarchy.",
        "Couple therapy in psychiatry: indications, contraindications, evidence (including the Leff depression trial), and the training pathway.",
      ],
    },
    neetPg: {
      highYield: [
        "THE FOUR SCHOOLS: psychodynamic (blueprints/projections); behavioural (reinforcement/coercion); cognitive (automatic negative thoughts. Beck's Love Is Never Enough, Ellis's 'intolerable' → 'difficult to accept', demands → desires); systemic (enmeshment/circular causality).",
        "THE TRIAL-PROVEN CORE: behavioural couple therapy; reciprocity negotiation + communication training; many controlled trials, proven efficacy (Baucom's review; Snyder and Wills's behavioural-vs-insight comparison).",
        "THE ALI HIERARCHY: seven levels; reciprocity negotiation, communication training, inducing arguments, timetables and tasks, paradox, adjusting to the symptoms, ceasing treatment.",
        "THE THREE COUPLE CHARACTERISTICS driving the climb: symptomatology, rigidity of the system, individual rather than interactional focus; 'the more symptomatic, rigid and individually-focused the couple, the higher the therapist climbs'.",
        "DECENTRING (Minuchin): the partners talk to each other; the therapist becomes theatrical producer rather than diplomat: exposes the pattern, prevents side-taking, rehearses the home negotiation.",
        "THE ENDING MESSAGE: positive sympathetic framing ('we think you have what is basically a good relationship'), level-matched content (negotiated plans or task/timetable/paradox), closing positive reiteration, written copy; people remember positive statements and link them to the tasks.",
        "THE SPLIT-TEAM MESSAGE: one part of the team favours the task, the other 'prefers to prescribe the symptom'; ambivalence injected for the couple to resolve.",
        "THE FORMAT: short-term; 5–10 hour-long sessions over 3–6 months; developed with one-way screen and live supervision, deliverable in any ordinary consulting room.",
        "THE LEFF TRIAL (London depression intervention trial, 2000): couple therapy effective and acceptable for depressed patients living with a partner, compared with antidepressants.",
        "CONTRAINDICATIONS: acute psychosis and active addiction; the emotionally unavailable partner (revisit after stabilisation); phobias and PTSD unconnected to the home are less amenable.",
        "MORBID JEALOUSY: conjoint sessions nearly always useful (De Silva); SCHIZOPHRENIA: the most useful psychological interventions involve the nearest relative (McFarlane).",
        "EVIDENCE HONESTY: behavioural components proven, systemic components less so, the behavioural-systems combination 'likely to be effective' but untried as a package; a self-help version with homework exercises now exists.",
      ],
      pyqConcepts: [
        "Decentring: the one-word concept question that separates the couple-therapy-literate from the rest.",
        "The ALI escalation driver (the three couple characteristics): the ready-made MCQ stem.",
        "The Leff trial's finding: the psychiatry-exam marriage of psychotherapy and depression.",
        "The behavioural analysis of the distressed couple (low positive reinforcement, mutual coercion): the behavioural school's one-liner.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old married teacher in Coimbatore with eighteen months of depression and two adequate-but-relapsing antidepressant courses, whose individual therapy hours have come to be spent entirely on her husband: his criticism, his withdrawal after every argument: the couple referral made on the Leff logic, eight behavioural-systems sessions over five months (reciprocity negotiation, communication training, decentring, the written ending message each time), the depression remitting as the exchange changed; the relationship treated as the maintenance factor, the complaining-about-the-partner patient recognised as the couple referral in disguise.",
        "A rigid, symptomatic, individually-focused couple (the wife's 'depression' the presentation, both partners talking AT the therapist, the negotiation homework undone twice: the ALI climb) an induced argument in-session (the useful mini-crisis), timetables for the household business, the split-team message; flexibility returning at level 4, the step down to communication training, the exam's point that rigidity, not the diagnosis, is the treatment-planning variable.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Couple therapy treats the relationship as the patient.",
        "The behavioural model of the distressed couple: low positive reinforcement and mutual coercion.",
        "Decentring: the therapist as theatrical producer, not diplomat.",
        "Contraindications: acute psychosis and active addiction; defer until stabilisation.",
        "Couple therapy treats depression in partnered patients (the Leff trial).",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The complaining-about-the-partner patient is a couple-therapy referral wearing an individual-therapy disguise, recognising it saves years of one-sided history-taking.",
        "Health deterioration in one partner after the other's individual therapy is the couple-level signal: the treatment unit needs changing, not the antidepressant.",
        "The monologuing spokesperson: invite the non-verbal partner to comment; the circular-questioning cousin that provokes the useful mini-crisis.",
        "Empathic listening, the individual therapist's good habit, SLOWS couple work: decentre instead; validating one partner without antagonising the other is learned, not innate.",
        "In the Indian joint-family room the decentring move doubles as cultural work: teaching direct partner-to-partner speech where the culture routes speech through intermediaries IS the intervention.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The depression the marriage was feeding",
      presentation: "Eighteen months of depression, two antidepressant courses, and a therapy hour spent complaining about him: the referral that had been a couple referral all along.",
      initialPresentation:
        "A 34-year-old teacher in Coimbatore presented with eighteen months of depressive illness (low mood, early-morning waking, fatigue and crying spells) that two adequate antidepressant courses had only partially relieved, each response relapsing. Her individual therapist observed that the sessions had come to be spent almost entirely on her husband: his criticism, his withdrawal after every argument, his absence from her treatment. Her psychiatrist, hearing the pattern, invited the husband to the next appointment.",
      history:
        "Married nine years, one child; the criticism-withdrawal pattern predating the depression by several years and deepening with it; no substance use, no psychotic features, no depressive episodes before the marriage; the husband, invited directly, willing to attend: the selection gates (availability, willingness, psychiatric stability) all open.",
      examination:
        "Mood low with reactivity preserved; no psychotic features; no suicidality at the time of the couple referral. The joint session's observation was itself the diagnostic finding: the criticism-withdrawal cycle enacted within ten minutes of the opening; the interaction, not either individual, carrying the illness's maintenance.",
      diagnosis:
        "Depressive disorder in a partnered patient, with the relationship participating in maintaining the illness: the Leff indication.",
      management:
        "Couple therapy alongside the medication review: eight behavioural-systems sessions over five months. Reciprocity negotiation: her complaints converted to requests, his tasks linked and reciprocal, the everyday house-and-child business negotiated first (the intractable argument put 'on ice'); communication training with feedback of what was heard; the decentred session format throughout; the written ending message after every session.",
      outcome:
        "The depression remitted over the five months of couple work, consistent with the London trial's effective-and-acceptable verdict; the medication was tapered at review a year later, the couple retaining the negotiated-task habit through one later period of stress: the illness and the relationship treated as the intertwined system they were.",
      teachingPoints: [
        "The Leff logic: couple therapy effective and acceptable for depressed patients living with a partner; the psychiatric indication most under-used in ordinary practice.",
        "The complaining-about-the-partner patient: the couple referral in individual-therapy disguise, recognisable from the history's own geometry.",
        "Medication and couple therapy as alternatives and partners, not rivals: the trial's comparator design is the clinical message.",
        "The format is brief and focused: the change happens between the sessions, in the linked tasks the written message carries home.",
      ],
    },
    {
      title: "The three-household distance problem",
      presentation: "An arranged marriage, a consummation the joint household audits, and a 'distance problem' negotiated across three households: the invisible third partner finally acknowledged.",
      initialPresentation:
        "A 27-year-old engineer and his 25-year-old wife of fourteen months were brought to a Coimbatore psychiatry OPD by her mother for 'they are not close'. The marriage had been arranged at the families' initiation; the couple lived with his parents; consummation had not occurred; the wife described the household's surveillance of the marriage's progress, the husband described being 'managed by everyone'. The referral letter asked for 'marriage counselling'.",
      history:
        "Arranged marriage; both partners articulate and motivated, describing desire disparity rather than absence of affection; the husband's mother the household's organising figure: the system's power centre; the couple addressing each other through intermediaries (her mother, his mother) rather than directly; no depression, no psychosis, no substance use in either partner.",
      examination:
        "Both partners forthcoming, but only to the therapist: every question routed through the clinician, each partner talking about the other to a third party, the couple's direct speech absent even when invited; the distance conflict (he wanting less scrutiny, she wanting more closeness) clearly symmetrical rather than one-sided.",
      diagnosis:
        "Desire disparity with consummation failure in an arranged marriage, maintained by the joint-family system: the psychosexual-plus-systems hybrid the Maudsley method addresses.",
      management:
        "Behavioural-systems couple therapy with the psychosexual adjunct tier referenced (the Sexual Dysfunctions course's account): the ALI ladder climbed from the individually-focused starting point (both partners talking to the therapist, not each other); decentring from the first session: the direct partner-to-partner speech taught as the intervention itself; a couple-only timetable negotiated with the household; the written ending message each session; the in-laws invited in for one session.",
      outcome:
        "Seven sessions over five months: the direct partner-to-partner speech established first (the decentred move working as cultural intervention), the couple-only timetable renegotiated with the household second, the consummation problem referred into the psychosexual adjunct tier as the exchange between the partners themselves improved; the India-lens thesis in one case: teaching direct speech where the culture routes it through intermediaries IS the treatment.",
      teachingPoints: [
        "The arranged-marriage couple presenting with desire disparity, consummation failure and in-law conflict: exactly the psychosexual-plus-systems hybrid the Maudsley method was built for.",
        "The joint family is the invisible third partner: the mother-in-law often the system's power centre; the 'distance problem' is usually negotiated across three households.",
        "Decentring travels perfectly: in a culture of intermediaries, teaching direct partner-to-partner speech IS the intervention.",
        "Cultural realities (arranged marriage, the husband's parents' household) are respected while read clinically. The formulation includes them; the therapy works around and occasionally with them.",
      ],
    },
  ],
  clinicalPearls: [
    "The relationship is the patient: couple therapy treats the interaction, not the individuals in it; every technique follows from that one decision.",
    "The four schools in one breath: blueprints and projections; reinforcement and coercion; automatic negative thoughts and demands; enmeshment and circular causality.",
    "The behavioural core is the field's evidence anchor: reciprocity negotiation plus communication training, many controlled trials, proven efficacy.",
    "The ALI hierarchy: prefer the behavioural end whenever possible; collaboration with the couple's own goals beats the therapist's managerial role; climb only on symptoms, rigidity or individual focus.",
    "Decentring (Minuchin): the therapist becomes theatrical producer rather than diplomat. The move that exposes the pattern, prevents side-taking and rehearses the home negotiation.",
    "The ending message converts fifty minutes into three months of homework: positive framing, level-matched content, split-team variant, written copy; people remember positive statements and link them to the tasks.",
    "The format: 5–10 hour-long sessions over 3–6 months; short-term work, deliverable in any ordinary consulting room.",
    "The Leff London trial: couple therapy effective and acceptable for depressed patients living with a partner, compared with antidepressants; the most under-used psychiatric indication.",
    "The complaining-about-the-partner patient is a couple-therapy referral wearing an individual-therapy disguise, recognising it saves years of one-sided history-taking.",
    "Morbid jealousy involves the non-jealous partner too: conjoint sessions are almost always worth having (De Silva).",
    "Acute psychosis and active addiction are the contraindications: the emotionally unavailable partner; defer until stabilisation, then limited aims.",
    "Schizophrenia's most useful psychological interventions involve the nearest relative (McFarlane): the family as therapeutic resource, not bystander.",
    "The evidence verdict, honestly: behavioural components proven, systemic components less so, the combination 'likely to be effective' but untried as a package.",
  ],
  highYieldSummary: [
    "Definition: couple therapy treats the relationship as the patient. The interaction, not the individuals, is the target. Counselling improves adjustment to the situation as it is; therapy aims at radical change in the couple's functioning. The context: falling marriage rates, divorce reaching 40% of UK marriages by 1996, cohabiting and same-sex partnerships (stronger than average to survive homophobia), multicultural realities including arranged-marriage preferences in families from the Indian subcontinent.",
    "The four schools: psychodynamic (Dicks, the Tavistock tradition, internal blueprints, projections, shared fantasies and defences; four premises; transference interpretations involving both partners; Wile's critiques: unflattering picture, hypothetical constructs treated as observed, scarce trials); behavioural (Stuart and Liberman, 1969, low positive reinforcement and mutual coercion; reciprocity negotiation and communication training; the trial-proven core); cognitive/rational-emotive (Beck's Love Is Never Enough, Ellis, automatic negative thoughts, absolute demands re-engineered); systemic (Minuchin, Haley, Selvini Palazzoli, enmeshment, circular causality, genograms, sculpting, paradoxical injunctions).",
    "The eclectic hybrids: Segraves (psychodynamic understanding + behavioural skills); Weeks's intersystem model (individual + interactional + intergenerational, with decentring and paradox); Spinks and Birchler's behavioural-systems; Berg-Cross's everything-including-theology canvas. The chapter's own method: behavioural-systems couple therapy (Crowe and Ridley, Maudsley, 1980s); behavioural marital therapy plus the systems dimension, a menu not a fixed course, born in psychiatry for couples carrying psychiatric problems, an adjunct to psychosexual therapy.",
    "The ALI hierarchy (Alternative Levels of Intervention): reciprocity negotiation → communication training → inducing arguments → timetables and tasks → paradox → adjusting to the symptoms → ceasing treatment. The climb is driven by three couple characteristics: symptomatology, rigidity of the system, and individual rather than interactional focus. Prefer the behavioural end whenever possible; step up on rigidity or non-response; step down when flexibility returns.",
    "The session craft: the first session is assessment and treatment in one; stay in control, build rapport with both partners without favouring either, maintain momentum and the interactional focus, maximise the couple's experience of changed interaction. The signature move is DECENTRING (Minuchin): the partners talk directly to each other while the therapist becomes theatrical producer rather than diplomat, routing pull-questions through the couple, handling the monologuing spokesperson (invite the non-verbal partner), intractable arguments ('on ice' while everyday business is negotiated), intellectual-only communication and one-open-one-logical imbalances. The ending message: next appointment, positive sympathetic framing for both, level-matched content (negotiated plans at the behavioural level; task, timetable or paradoxical injunction at the systemic level), the split-team variant (one part of the team favouring the task, the other 'preferring to prescribe the symptom'), closing positive reiteration, written copy. The therapy overall: 5–10 hour-long sessions over 3–6 months.",
    "Indications: relationship arguments and tensions; the complaining-about-the-partner individual patient; health deterioration in one partner following the other's individual therapy; sexual dysfunction (desire disparity, sexual phobia, individual therapy added where childhood abuse survives in one partner); depression and anxiety the relationship exacerbates (the Leff London trial: couple therapy effective and acceptable for depressed patients living with a partner); morbid jealousy (conjoint sessions nearly always useful. De Silva); post-crisis addictions and psychosis once stabilised (limited aims); schizophrenia's psychological care involving the nearest relative (McFarlane). Contraindications: acute psychosis and active addiction; the emotionally unavailable partner (defer, revisit after stabilisation); phobias and PTSD unconnected to the home are less amenable. Selection gates: partner availability and willingness (cultural non-attendance usually respected, judicious pressure where non-attendance IS the problem); the continuing-relationship question (mediation for better breakups (domicile, children) as the growing cousin); pre-relationship problems (individual therapy, with one or two couple sessions to map the partner's position).",
    "Evidence and training: behavioural couple therapy, many controlled trials, proven efficacy (Baucom's review; Snyder and Wills's behavioural-vs-insight comparison; Crowe's own conjoint-therapy outcome study; Emmelkamp's comparative evaluation; Johnson and Greenberg's experiential-vs-problem-solving comparison); psychodynamic couple therapies seldom trialled, gains undramatic; the behavioural-systems package: components proven, the package itself untried; 'a combination of two probably effective treatment approaches, and therefore likely to be effective'; a self-help version with homework exercises now exists. Training: seminars (couple and family dynamics, human development phases, life events, sexual function, physical illness impacts), role play (each trainee playing husband, wife, therapist and observer in turn), observation and supervised practice (live observation → co-therapist → sole therapist behind the screen, with trainer assessment and remediation).",
    "The India tier: the joint family as the invisible third partner (the mother-in-law often the system's power centre; the 'distance problem' negotiated across three households); the arranged-marriage couple presenting with desire disparity, consummation failure and in-law conflict: the psychosexual-plus-systems hybrid the Maudsley method addresses; divorce lower-frequency but rising, with mediation-shaped breakups increasingly needed; formal services scarce (Relate-equivalents barely exist): the self-help package and the psychiatrist's repertoire-negotiation skill the practical toolset; and decentring's perfect cultural fit: where couples address each other through intermediaries, teaching direct partner-to-partner speech IS the intervention.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ct-quiz-1",
      question: "In the ALI (Alternative Levels of Intervention) hierarchy, the escalation from reciprocity negotiation toward paradox and symptom-adjustment is driven by:",
      options: ["The therapist's theoretical preference", "Increasing couple symptomatology, rigidity of the system, and individual rather than interactional focus", "The number of children", "Insurance limits"],
      correctIndex: 1,
      explanation: "The three couple characteristics govern the climb — more symptoms, more rigidity and more individual focus push the therapist toward the systemic, therapist-ingenious levels.",
      afterSectionId: "management",
    },
    {
      id: "ct-quiz-2",
      question: "'Decentring' in couple therapy refers to:",
      options: ["The therapist leaving the room", "Directing the partners to talk to each other rather than to the therapist — the therapist becoming theatrical producer rather than diplomat", "Removing the couple from their home", "Hypnosis"],
      correctIndex: 1,
      explanation: "Minuchin's technique: it exposes the couple's typical interaction, prevents side-taking, and rehearses the negotiation they must continue at home.",
      afterSectionId: "mechanism",
    },
    {
      id: "ct-quiz-3",
      question: "The behavioural analysis of a distressed couple proposes that the partners:",
      options: ["Have unresolved oedipal conflicts", "Exchange low levels of positive reinforcement or use punishment and negative reinforcement to coerce each other", "Are genetically incompatible", "Lack serotonin"],
      correctIndex: 1,
      explanation: "Stuart and Liberman's operant formulation — corrected through reciprocity negotiation and communication training, the trial-proven core of the field.",
      afterSectionId: "symptoms",
    },
    {
      id: "ct-quiz-4",
      question: "The Leff et al. (2000) London depression intervention trial found:",
      options: ["Couple therapy ineffective for depression", "Couple therapy an effective and acceptable treatment for depressed patients living with a partner, compared with antidepressants", "Antidepressants superior on all measures", "Neither treatment worked"],
      correctIndex: 1,
      explanation: "The psychiatric indication: couple therapy treats depression where the relationship participates in maintaining it.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ct-quiz-5",
      question: "Which couple is LEAST suitable for immediate couple therapy?",
      options: ["A couple with desire disparity and relationship conflict", "A couple where one partner has morbid jealousy", "A couple in which one partner is acutely psychotic", "A couple where one partner has depression and low self-esteem"],
      correctIndex: 2,
      explanation: "Acute psychosis (like active addiction) renders a partner emotionally unavailable — defer until stabilisation, then offer couple-level work with limited aims.",
      afterSectionId: "differential",
    },
    {
      id: "ct-quiz-6",
      question: "The honest evidence verdict on behavioural-systems couple therapy as a package:",
      options: ["Multiple RCTs demonstrate package-level superiority", "Its two component approaches have proven efficacy (behavioural strongly; systemic less so), but the combination itself has not been trialled", "No component has evidence", "Only pharmacotherapy works"],
      correctIndex: 1,
      explanation: "'A combination of two probably effective treatment approaches, and therefore likely to be effective' — the calibrated claim, taught as the model of evidence honesty.",
      afterSectionId: "high-yield",
    },
  ],
  activeRecallQuestions: [
    { question: "Name the four schools of couple therapy with one core concept each.", answer: "PSYCHODYNAMIC (Dicks, the Tavistock tradition; Daniell; Clulow): internal blueprints of self and other formed by early attachments shape partner choice; projections attribute disowned hostility to the partner; shared fantasies and defences accumulate. BEHAVIOURAL (Stuart, Liberman; 1969): distressed couples exchange low positive reinforcement or coerce through punishment and negative reinforcement; corrected by reciprocity negotiation and communication training. COGNITIVE/RATIONAL-EMOTIVE (Beck, Ellis): automatic negative thoughts, misunderstandings, untested assumptions and absolute demands; 'intolerable' → 'difficult to accept', demands → desires. SYSTEMIC (Minuchin, Haley, Selvini Palazzoli): the couple as a system; enmeshment, circular causality (A's actions caused by B's and B's by A's), genograms, sculpting, family myths, paradoxical injunctions. The exam one-liners: blueprints/projections; reinforcement/coercion; automatic thoughts/demands; enmeshment/circular causality.", topic: "The schools" },
    { question: "Recite the seven ALI levels and the three couple characteristics that drive the climb.", answer: "THE SEVEN LEVELS: (1) reciprocity negotiation; (2) communication training; (3) inducing arguments; (4) timetables and tasks; (5) paradox; (6) adjusting to the symptoms; (7) ceasing treatment or other therapies. THE THREE CHARACTERISTICS: symptomatology, rigidity of the system, and individual rather than interactional focus; the more symptomatic, rigid and individually-focused the couple, the higher (more systemic, more therapist-ingenious, less reliant on the couple's stated goals) the therapist climbs. THE DIRECTION RULE: prefer the behavioural end whenever possible (collaboration with the couple's own goals beats the therapist's managerial role); move up on rigidity or non-response, down when flexibility returns: paradox and symptom-adjustment reserved for couples who reject the interactional focus altogether.", topic: "Treatment planning" },
    { question: "What is decentring, what does it protect against, and how do you route three therapist-pull situations through it?", answer: "DEFINITION (Minuchin): the partners are directed to talk directly to each other while the therapist becomes theatrical producer rather than diplomat, observing the couple's typical pattern, avoiding side-taking, rehearsing the negotiation they must continue at home. IT PROTECTS AGAINST: the therapist becoming the third combatant (side-taking), the couple's interaction never being observed (the actual patient), and the home dialogue remaining unrehearsed. THE THREE ROUTES: (1) the pull to answer a question addressed to you; 'Could you ask your partner what she thinks about your coolness?'; (2) the monologuing spokesperson: invite the non-verbal partner to comment (the circular-questioning cousin, provoking the useful mini-crisis); (3) the pull to empathise one-to-one: replace empathic listening (the individual therapist's reflex that slows couple work) with empathy-without-side-taking: validating one partner without antagonising the other, a learned skill.", topic: "Session craft" },
    { question: "Describe the structure of the ending message (three parts) and the split-team variant.", answer: "THE STRUCTURE: (1) the next appointment plus positive sympathetic framing for both partners; keep them on-side ('we think you have what is basically a good relationship, and you are both working hard'); (2) the level-matched content: negotiated plans at the behavioural level, or a task, timetable or paradoxical injunction at the systemic level; (3) the closing positive reiteration: people remember positive statements and link them to the tasks. THE SPLIT-TEAM VARIANT: one part of the team favours the task, the other 'prefers to prescribe the symptom'; ambivalence injected into the message that the couple must resolve for themselves (the systemic level's high-altitude instrument). THE PRACTICAL ADDITION: a written copy wherever possible; the message is the between-session therapist, the carrier of the homework that makes 5–10 sessions over 3–6 months enough.", topic: "Session craft" },
    { question: "Give the indications and the contraindications for couple therapy, with the trial evidence for depression.", answer: "INDICATED: relationship arguments and tensions; the individual patient who spends the therapy hour complaining about the absent partner; health deterioration in one partner following the other's individual therapy; sexual dysfunction: desire disparity, sexual phobia (individual therapy added where childhood abuse survives in one partner); depression and anxiety where the relationship exacerbates them; morbid jealousy (conjoint sessions nearly always useful, per De Silva); post-crisis addictions and psychosis once stabilised, with limited aims; schizophrenia: the most useful psychological interventions involve the nearest relative (McFarlane). CONTRAINDICATED/LESS AMENABLE: acute psychosis and active addiction (the emotionally unavailable partner, revisit after stabilisation); phobias and PTSD unconnected to the home. THE TRIAL EVIDENCE: the Leff, Vearnalls, Brewin et al. (2000) London depression intervention trial: couple therapy effective and acceptable for depressed patients living with a partner, compared with antidepressants: the psychiatric indication, often alongside and sometimes instead of medication.", topic: "Indications" },
    { question: "What can honestly be claimed about behavioural-systems couple therapy's evidence?", answer: "THE COMPONENT VERDICTS: behavioural couple therapy has many controlled trials and proven efficacy (Baucom's empirically-supported review; Snyder and Wills's behavioural-vs-insight comparative trial; Crowe's own conjoint-therapy outcome study; Emmelkamp's comparative evaluation; Johnson and Greenberg's experiential-vs-problem-solving comparison); the systemic components are promising but less tested; the psychodynamic couple therapies are seldom trialled (short-term forms only), with undramatic gains and uncertain value (Wile's critiques standing). THE PACKAGE VERDICT: the behavioural-systems combination has never been trialled AS a package; the chapter's calibrated claim: 'a combination of two probably effective treatment approaches, and therefore likely to be effective'. THE PRACTICAL RIDER: a self-help version with homework exercises and explanations now exists, and the honest claim is the examinable one: components proven, package untried.", topic: "Evidence" },
    { question: "Describe the training pathway for couple therapy: the four forms and the sequence.", answer: "THE FOUR FORMS: (1) seminars; couple and family dynamics, human development phases, life events, sexual function, the impacts of physical illness; (2) role play: each trainee playing husband, wife, therapist and observer in turn, building empathy and technique (especially for communication training); (3) observation: live observation of experienced work (the one-way screen tradition); (4) supervised practice: the graded sequence: live observation → co-therapist → sole therapist behind the screen, with trainer assessment and remediation. THE SEQUENCE IN ONE LINE: seminar → role play → observation → co-therapist → solo. The point for the exam: the method was developed with a one-way screen and live supervision, but is fully deliverable in any ordinary consulting room. The training pathway is craft apprenticeship, not just theory.", topic: "Training" },
    { question: "How does couple counselling differ from couple therapy, and why does decentring travel so well to Indian practice?", answer: "COUNSELLING VS THERAPY: counselling improves adjustment to the situation as it is; support, advice, tiding over; therapy aims at radical change in the couple's functioning. The borders blur in practice; what matters is the formulation and the techniques, which overlap across the divide. THE INDIA LENS: the joint family is the invisible third partner in most conjugal therapy; the mother-in-law often the system's power centre, the couple's 'distance problem' usually negotiated across three households; the arranged-marriage couple presents with desire disparity, consummation failure and in-law conflict (the psychosexual-plus-systems hybrid the Maudsley method addresses); divorce is lower-frequency but rising, with mediation-shaped breakups increasingly needed; and formal services are scarce (Relate-equivalents barely exist). The self-help package and the psychiatrist's repertoire-negotiation skill are the practical toolset. THE DECENTRING ARGUMENT: in a culture where couples address each other through intermediaries, teaching direct partner-to-partner speech IS the intervention; the technique and the cultural work collapse into one another.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Is this counselling or therapy?", answer: "Counselling improves adjustment to the situation as it is; therapy aims at radical change in the couple's functioning. In practice the borders blur: what matters is the formulation and the techniques, which overlap across the divide." },
    { question: "Whose side are you on?", answer: "The relationship's. The decentred therapist observes the pattern rather than judging the persons, and the skill of validating one partner without antagonising the other is learned, not innate." },
    { question: "My husband refuses to come.", answer: "Sometimes the work waits; sometimes non-attendance IS the clinical problem worth a careful push; and cultural reasons for non-attendance are respected while remaining part of the formulation. What is not recommended is giving up on the couple format without asking which of the three it is." },
    { question: "Can couple therapy treat my depression?", answer: "Yes, where the relationship feeds the illness: the London trial found couple therapy effective and acceptable for depressed patients living with a partner; often alongside, and sometimes instead of, medication." },
    { question: "How long does it take?", answer: "The behavioural-systems format is brief: five to ten hour-long sessions over three to six months, each ending with a message that converts the interval into homework." },
    { question: "Does it work?", answer: "The behavioural core is proven in controlled trials; the systemic additions are promising but less tested; the combined package inherits its parents' efficacy without yet having its own trial: an honest verdict, and the reason the formulation matters more than the brand." },
    { question: "We live with my parents: will they be involved?", answer: "Your households are part of the picture whether they attend or not: the joint family is the invisible third partner in most conjugal work. Sometimes they are invited in for a session; always the plans are negotiated around them." },
    { question: "Our marriage was arranged: is that the problem?", answer: "The marriage's origins are not the problem's cause. The expectations each family installed in it (and the household the couple lives inside) are part of what gets negotiated; the arranged-marriage presentation (desire disparity, consummation difficulty, in-law conflict) is one the method was built to handle." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Crowe M & Ridley J — Therapy with Couples: a behavioural-systems approach (2nd edn, 2000): the Maudsley practice framework this course teaches" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Stuart R B — Helping Couples Change (1980): behavioural marital therapy's origin; with Jacobson & Margolin — Marital Therapy: strategies based on social learning (1979), the behavioural canon" },
      { source: "Beck A — Love Is Never Enough (1988): cognitive couple therapy" },
      { source: "Minuchin S — Families and Family Therapy (1974): decentring and structure" },
      { source: "Selvini Palazzoli M et al. — Paradox and Counter-paradox (1978)" },
      { source: "Wile D B — Couples Therapy: a non-traditional approach (1993): the psychodynamic critique" },
    ],
    trials: [
      { source: "Leff J, Vearnalls S, Brewin C R et al. — the London depression intervention trial: couple therapy vs antidepressants for depression in partnered patients (Br J Psychiatry, 2000, 177, 95–100)" },
      { source: "Snyder D K & Wills R M — behavioural vs insight-oriented marital therapy (J Consult Clin Psychol, 1989, 57, 39–46); with the comparative-trial lineage: Crowe's conjoint-therapy outcome study, Emmelkamp's comparative evaluation, Johnson & Greenberg's experiential-vs-problem-solving comparison" },
    ],
    reviews: [
      { source: "Baucom D H, Shoham V, Mueser K T et al. — empirically supported couple and family interventions (J Consult Clin Psychol, 1998, 66, 53–88)" },
      { source: "De Silva P — jealousy in couple relationships (Behav Res Ther, 1997, 35, 937–85)" },
      { source: "McFarlane W — psychoeducational multi-family groups in psychosis (2000): the nearest-relative evidence" },
      { source: "d'Ardenne P & Mahtani A — Transcultural Counselling in Action (1989); with Ahmed & Bhugra (2007) and Bhui (1998) on culture and psychosexual care" },
    ],
    patientResources: [
      { source: "The self-help version of behavioural-systems couple therapy — homework exercises and explanations, the scarce-services answer" },
      { source: "The written ending-message template — the household's between-session instrument (ask the treating team)" },
      { source: "Tele-MANAS 14416 (24×7, free) — acute distress in either partner while the couple work is arranged" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the relationship as the patient, the brief practical format, decentring explained, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The four schools, the ALI hierarchy, decentring, the indications and contraindications with the Leff trial.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything: the session craft in full, the ALI matching discipline, the India lens, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The relationship as the patient, the four schools, the sociology that fills the room.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can name the four schools with one core concept each and recite the ALI ladder cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The four change-models, the coercion spiral, circular causality, the ALI escalation logic.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain what each school says goes wrong between partners and how the ALI level is chosen." },
    { number: 3, title: "Clinical Practice", description: "The first session, decentring, the ending message, the selection gates, the schools as treatments.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the first session structure and construct a level-matched ending message." },
    { number: 4, title: "Indian Context", description: "The joint family's invisible third partner, the arranged-marriage presentation, decentring as cultural work.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the unit-of-treatment script and the three-household formulation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the schools essay and the ALI/Leff MCQ stems cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.7 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Crowe M & Ridley J — Therapy with Couples: a behavioural-systems approach (2nd edn): the Maudsley method's own manual (the ALI hierarchy, the session craft, the ending message)", sourceType: "textbook", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S3", source: "The behavioural marital therapy canon — Stuart R B, Helping Couples Change; Jacobson N S & Margolin G, Marital Therapy: strategies based on social learning", sourceType: "textbook", year: "1979–1980", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Beck A — Love Is Never Enough: cognitive couple therapy (with the rational-emotive line of Ellis)", sourceType: "textbook", year: "1988", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Minuchin S — Families and Family Therapy: decentring, structure, boundaries", sourceType: "primary", year: "1974", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Selvini Palazzoli M et al. — Paradox and Counter-paradox: the Milan systems line", sourceType: "primary", year: "1978", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Leff J, Vearnalls S, Brewin C R et al. — the London depression intervention trial: couple therapy vs antidepressants for depression in patients living with a partner (Br J Psychiatry, 177, 95–100)", sourceType: "trial", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Baucom D H, Shoham V, Mueser K T et al. — empirically supported couple and family interventions (J Consult Clin Psychol, 66, 53–88)", sourceType: "review", year: "1998", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Snyder D K & Wills R M — behavioural vs insight-oriented marital therapy (J Consult Clin Psychol, 57, 39–46); the comparative-trial lineage (Crowe's own conjoint-therapy outcome study, Emmelkamp's comparative evaluation, Johnson & Greenberg's comparison)", sourceType: "trial", year: "1989", dateReviewed: "2026-09-29" },
    { id: "S10", source: "De Silva P — jealousy in couple relationships (Behav Res Ther, 35, 937–85): the conjoint-sessions evidence", sourceType: "primary", year: "1997", dateReviewed: "2026-09-29" },
    { id: "S11", source: "McFarlane W — psychoeducational multi-family groups in psychosis: the nearest-relative evidence", sourceType: "primary", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Wile D B — Couples Therapy: a non-traditional approach: the psychodynamic school's critique", sourceType: "textbook", year: "1993", dateReviewed: "2026-09-29" },
    { id: "S13", source: "d'Ardenne P & Mahtani A — Transcultural Counselling in Action; with Ahmed & Bhugra (2007) and Bhui (1998) on culture, the Indian subcontinent and psychosexual care", sourceType: "primary", year: "1989 (lineage onward)", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The four schools of couple therapy with their core concepts: psychodynamic (internal blueprints, projections, shared fantasies. Dicks and the Tavistock tradition); behavioural (low positive reinforcement and mutual coercion. Stuart and Liberman, 1969); cognitive/rational-emotive (automatic negative thoughts, absolute demands. Beck, Ellis); systemic (enmeshment, circular causality, genograms, sculpting, paradox. Minuchin, Haley, Selvini Palazzoli).", grade: "established", sources: ["S1", "S2", "S4", "S5", "S6"] },
    { text: "Psychodynamic couple therapy's premises and its honest critique: emotional health as the capacity to hold internal conflict and external stress (fear with trust, pain with pleasure); significant relationships resurrect and can change inflexible old patterns; unconscious processes understood; change takes time, against Wile's critiques (the unflattering picture saps motivation; hypothetical constructs treated as observed; scarce controlled-trial evidence, undramatic gains).", grade: "supported", sources: ["S1", "S12"] },
    { text: "The behavioural formulation and its repair: distressed couples exchange low positive reinforcement or use punishment and negative reinforcement to coerce; reciprocity negotiation (complaints → requests → mutually agreed, linked, everyday tasks) plus communication training (direct speech with feedback of what was heard), many controlled trials, proven efficacy: the evidence anchor of the field.", grade: "established", sources: ["S1", "S3", "S8", "S9"] },
    { text: "The cognitive and rational-emotive approaches: the disturbed couple's communication shows the depressed patient's cognitive faults (misunderstandings, generalisations, untested assumptions, automatic negative thoughts); Beck challenges assumptions, relaxes absolute rules and refocuses on positives; Ellis re-engineers language: 'intolerable' → 'difficult to accept', demands → desires.", grade: "supported", sources: ["S1", "S4"] },
    { text: "The systems model: enmeshment (excessive involvement in the other's private business) with the distance conflict treated by negotiated compromise boundaries; circular causality. A's actions caused by B's and B's by A's, no single villain; the techniques of genograms, sculpting and family myths; the active methods of in-session conflict creation, homework tasks and paradoxical injunctions.", grade: "supported", sources: ["S1", "S5", "S6"] },
    { text: "The ALI hierarchy (Alternative Levels of Intervention): the seven levels from reciprocity negotiation through communication training, inducing arguments, timetables and tasks, and paradox to adjusting to the symptoms and ceasing treatment; matched to the three couple characteristics: symptomatology, rigidity of the system, and individual rather than interactional focus; the behavioural end preferred whenever possible, with responsive movement up and down.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The session craft: the first session as assessment and treatment in one (stay in control; rapport with both partners without favouring either; momentum and the interactional focus; maximised experience of changed interaction); DECENTRING (Minuchin): the partners directed to talk to each other while the therapist becomes theatrical producer rather than diplomat; the obstacles and remedies (the monologuing spokesperson, arguments put 'on ice', intellectual-only communication, empathy-without-side-taking).", grade: "supported", sources: ["S1", "S2", "S5"] },
    { text: "The ending message and the format: next appointment; positive sympathetic framing for both partners; level-matched content (negotiated plans, or task/timetable/paradoxical injunction); the split-team variant (one part of the team favouring the task, the other 'preferring to prescribe the symptom'); closing positive reiteration; written copy, within the short-term format of 5–10 hour-long sessions over 3–6 months, deliverable in any ordinary consulting room.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The depression indication: the Leff London depression intervention trial; couple therapy effective and acceptable for depressed patients living with a partner, compared with antidepressants; medication and couple therapy as alternatives and partners, not rivals.", grade: "established", sources: ["S1", "S7"] },
    { text: "The indications and contraindications: indicated for relationship arguments and tensions; the complaining-about-the-partner individual patient; health deterioration after the partner's individual therapy; sexual dysfunction (with individual therapy added where childhood abuse survives in one partner); depression and anxiety the relationship exacerbates; morbid jealousy (conjoint sessions nearly always useful, per De Silva); post-crisis addictions and psychosis once stabilised (limited aims); schizophrenia's psychological care involving the nearest relative (McFarlane). Contraindicated or less amenable: acute psychosis and active addiction (the emotionally unavailable partner, revisit after stabilisation); phobias and PTSD unconnected to the home; partner unavailability (cultural non-attendance usually respected, judicious pressure where non-attendance IS the problem).", grade: "supported", sources: ["S1", "S10", "S11", "S13"] },
    { text: "The evidence verdict, honestly: behavioural components proven (Baucom's review; the Snyder-Wills comparative trial and the lineage of Crowe's own outcome study, Emmelkamp's evaluation and Johnson & Greenberg's comparison); psychodynamic forms seldom trialled with undramatic gains; the behavioural-systems package itself untried: 'a combination of two probably effective treatment approaches, and therefore likely to be effective'; a self-help version with homework exercises and explanations now exists.", grade: "established", sources: ["S1", "S8", "S9"] },
    { text: "The training pathway: seminars (couple and family dynamics, human development phases, life events, sexual function, physical illness impacts); role play with each trainee playing husband, wife, therapist and observer in turn; observation and supervised practice in sequence (live observation → co-therapist → sole therapist behind the screen, with trainer assessment and remediation).", grade: "supported", sources: ["S1", "S2"] },
    { text: "The cultural and Indian tier: arranged-marriage preferences in families from the Indian subcontinent named explicitly, sometimes with the couple living with the husband's parents; cultural non-attendance respected while read clinically; the joint family as the invisible third partner (the mother-in-law often the system's power centre; the 'distance problem' negotiated across three households); the arranged-marriage presentation of desire disparity, consummation failure and in-law conflict; divorce lower-frequency but rising with mediation-shaped breakups needed; formal services scarce: the self-help package and repertoire-negotiation skill as the toolset; decentring travelling perfectly (teaching direct partner-to-partner speech IS the intervention).", grade: "supported", sources: ["S1", "S13"] },
  ],
};
