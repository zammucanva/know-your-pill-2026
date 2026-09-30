import type { PsychiatryCourse } from "./types";

/**
 * PARAPHILIC DISORDERS — ATTRACTION TEMPLATES & HARM BOUNDARIES —
 * canonical Psychiatry course (migration batch 4, Group I —
 * sexuality & gender).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/paraphilias.md — untouched foundation),
 * re-researched against current guidance (DSM-5's interest-vs-
 * disorder gate architecture, ICD-11's parallel framing, Seto's
 * orientation-vs-situational offending research, the Static-99
 * actuarial lineage, Beier's German Prevention Project, the Indian
 * legal frame: POCSO 2012 s.19/21, BNS 2023, Navtej 2018, NALSA
 * 2014) with per-claim provenance.
 *
 * Drug routes: sertraline and fluoxetine (the SSRI compulsivity
 * tier) link to existing KYP drug lessons; cyproterone acetate,
 * medroxyprogesterone and the GnRH-agonist anti-androgen tier
 * have no KYP drug lessons yet, recorded in contentGaps (never
 * invented).
 */
export const paraphiliasCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "paraphilias",
  title: "Paraphilic Disorders",
  shortName: "Paraphilic Disorders",
  kind: "disorder",
  category: "Paraphilic Disorder",
  groupLetter: "I",
  groupName: "Sexuality & gender",
  learningPath: ["Psychiatry", "Sexuality & Gender", "Paraphilic Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Attraction templates that become disorders only at the harm-or-distress threshold",
  summary:
    "An atypical arousal pattern becomes a paraphilic disorder only at the threshold of harm, risk of harm or marked distress. Treatment manages behaviour and risk, not the attraction itself.",
  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the interest-vs-disorder distinction and its two thresholds (harm/risk-of-harm including non-consent; marked personal distress), and apply it to classify presentations.",
    "Explain the conceptual history: homosexuality's declassification, and why consensual adult kink sits outside the disorders while non-consent sits inside.",
    "Name the DSM-5 disorder set paraphrased (voyeuristic, exhibitionistic, frotteuristic, sexual masochism, sexual sadism, pedophilic, fetishistic, transvestic) with each one's harm-or-distress gate explicit.",
    "Describe the aetiological models honestly: preference-development (conditioning, courtship-map distortion), the neuro-and-developmental riders, and the internet-era escalation economy.",
    "Run the two presentation pathways: the help-seeking ego-dystonic patient (the engagement tier) and the forensic referral (risk assessment, the tools' names, the court-report craft).",
    "Deliver the treatment architecture: relapse-prevention CBT, self-regulation skills, SSRIs for compulsivity, the anti-androgen tiers with the informed-consent-and-ethics discipline, and supervision partnership.",
    "Master the Indian legal interface: POCSO (mandatory reporting, s.19/21), BNS 2023's sexual-offence architecture, Navtej 2018, and the medico-legal duties of the treating psychiatrist.",
    "Handle the ethical frame: non-judgmental-and-firm, confidentiality-and-its-legal-limits, and the treating-clinician-vs-forensic-evaluator role separation.",
  ],
  quickFacts: [
    { label: "The gates", value: "Interest vs disorder", detail: "Atypical arousal = an INTEREST; + harm-or-risk (non-consent included) or marked distress = the DISORDER — the DSM-5 architecture; ICD-11 runs the parallel framing" },
    { label: "The declassification lineage", value: "1973 → Navtej 2018", detail: "Homosexuality left the classifications in 1973/1992 and India's law followed in Navtej Johar (2018): consensual same-sex conduct is neither crime nor disorder — the perennial exam trap" },
    { label: "The forensic reality", value: "Majority situational", detail: "Most child sexual abuse is committed by situational offenders (acquaintance/family, adult-attracted) without a pedophilic template — protection engineering runs on safeguarding design, not stranger-panic" },
    { label: "The honesty", value: "No re-orientation", detail: "A century of failed attempts retired the conversion promise; treatment moves behaviour-and-risk, drive-and-compulsion — hundreds live unacted-on lives with treatment-and-structure" },
    { label: "The escalation economy", value: "Arousal as the drug", detail: "Exposure → reinforcement → content-seeking → algorithmic deepening → community normalisation → compulsive cycles — the addiction grammar; the tier that brings the non-offender to the clinic" },
    { label: "The risk model", value: "Two clocks", detail: "The compulsion clock (stress, isolation, disinhibition) and the opportunity clock (access, family design, digital, supervision) — single-clock management relapses on the other's schedule" },
    { label: "The pharmacology", value: "SSRIs then anti-androgens", detail: "SSRIs at standard-and-higher doses for the compulsivity tier; cyproterone/GnRH agonists for the severe-and-forensic tier — ALWAYS with informed consent, monitoring, and the punitive 'chemical castration' frame rejected" },
    { label: "The Indian legal tier", value: "POCSO s.19/21", detail: "Mandatory reporting of child sexual abuse (with the s.21 penalty clause for non-reporting) binds the professional; BNS 2023 carries the offence codes; the limits-talk stated at intake, in words the patient understands" },
    { label: "The engagement treasure", value: "The Prevention Project tier", detail: "Germany's Kein Täter werden proved the non-offending help-seeker pathway works; India's absence of the tier makes the treating OPD the de-facto incarnation — the prevention tier this course exists for" },
  ],
  knowledgeGraph: [
    { label: "Sexual Dysfunctions", type: "condition", href: "/psychiatry/sexual-dysfunctions/", note: "The function chapter of sexuality — a different question from attraction templates; the consent line separates the territories" },
    { label: "Gender Identity in Adults", type: "condition", href: "/psychiatry/gender-identity-adults/", note: "Identity is not arousal: transvestic disorder's dressing-arousal is entirely distinct from transgender identity — the hygiene point both courses carry" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The compulsivity cousin the SSRI tier borrows from — and the intrusive-thought differential (unwanted thoughts without attraction)" },
    { label: "Impulse Control Disorders", type: "condition", href: "/psychiatry/impulse-control-disorders/", note: "The urge-surfing and self-regulation architecture the management tier imports" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The legal-principles note — the forensic corridor's framework (POCSO, BNS and the medico-legal duties in practice)" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI compulsivity tier — standard and elevated dosing" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The reward-and-drive currency the escalation economy runs on; the anti-androgen tier's target sits upstream" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the mind's architecture. The template that sets: sexual attraction is a template assembled through development the way attraction to anything assembles — chance pairings, sensitive periods, and reinforcement carve the pattern that later runs automatically and, the hard truth, largely unmodifiable thereafter. What treatment CAN move is the template's BEHAVIOURAL expression: the compulsive frequency, the disinhibited acting, the escalation ladder, the offence-context decisions — the clinical architecture that follows from this honesty is risk-and-self-regulation management, not re-orientation promises (the conversion era's grave has been well dug, and the Madras High Court's ban rides the same evidence-ruins). The escalation economy: the modern paraphilic career often runs through an escalation pipeline — exposure, private reinforcement, content-seeking, algorithmic deepening, community normalisation, compulsive cycles — the loop being the addiction grammar (craving-tolerance-relapse) running on arousal-as-the-drug, which is why the treatment menu imports the substance-use architecture wholesale: relapse prevention, trigger-mapping, the medication tiers' compulsivity logic. This is the tier that brings the non-offending help-seeker to the clinic: the escalation itself has become unbearable, and the person is asking for the brakes before the first harm. The two clocks of harm: the forensic tier runs a compulsion clock (the internal drive-cycle, escalating in stress, isolation and disinhibition windows) and an opportunity clock (access to victims, family design, occupation, digital access, supervision structure); treatment-and-risk-management must work both — the compulsive side with the CBT-and-medication tiers, the opportunity side with the supervision-and-environment architecture (the POCSO-era's family-safety planning, the occupation-boundary engineering) — because one clock alone relapses on the other's schedule, the eternal lesson of forensic practice. The neuro-and-developmental riders (the forensic-relevant minority): temporal-lobe epilepsy-and-tumour presentations of acquired patterns, TBI's disinhibition, intellectual disability's opportunistic tier (management, not template), and ASD's social-blindness differential (the misread adolescent) — the acquired-and-odd picture earning the scan-and-EEG workup in the changed-pattern adult.",
    steps: [
      "The template assembles: chance pairings, sensitive periods, reinforcement — the attraction pattern sets early (typically adolescent onset) and runs automatically thereafter.",
      "The honesty: the template itself is largely unmodifiable; the behavioural expression — frequency, escalation, acting, offence-context — is the treatable field.",
      "The escalation economy runs the addiction grammar on arousal-as-the-drug: exposure → reinforcement → algorithmic deepening → community normalisation → compulsive cycles.",
      "The help-seeker arrives at the unbearable-escalation point — the prevention tier's door: the brakes requested before the first harm.",
      "The two clocks: the compulsion clock (drive-cycle, stress-and-disinhibition windows) and the opportunity clock (access, family design, digital, supervision).",
      "The forensic-relevant minority: acquired patterns (epilepsy, tumour, TBI) earn the workup; ID and ASD present management-and-differential duties, not template explanations.",
      "The management works both clocks: CBT-and-medication for the compulsion; supervision-and-environment engineering for the opportunity — the discipline that prevents the other-clock relapse.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "temporal", name: "Temporal lobe (amygdala–hypothalamic axis)", role: "The acquired-pattern tier: temporal-lobe epilepsy and tumours occasionally produce paraphilic-pattern change in previously unremarkable adults — the changed-pattern case earns the scan.", grade: "supported" },
    { id: "ofc", name: "Orbitofrontal cortex", role: "The inhibition-and-context tier: frontal injury and disinhibition release acting on impulses the intact system would have regulated.", grade: "supported" },
    { id: "reward", name: "Mesolimbic reward circuitry", role: "The escalation economy's engine: arousal-as-the-drug runs the same craving-consolidation loop the substance architecture describes.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The drive-and-reward currency of the compulsive cycle — the escalation loop's consolidation tier.", grade: "supported", drugConnection: "The anti-androgen tier acts upstream of the drive architecture; SSRIs (see sertraline and fluoxetine lessons) thin the compulsivity tier." },
    { name: "Serotonin", symbol: "5-HT", role: "The impulse-and-compulsion moderator — the SSRI tier's rationale at standard-and-elevated doses.", grade: "supported" },
    { name: "Testosterone", symbol: "T", role: "The drive-amplitude substrate the anti-androgen tier (cyproterone, GnRH agonists) damps — the brakes, never the values.", grade: "established" },
  ],
  pathways: [
    {
      id: "paraphilia-template",
      name: "The template that sets",
      steps: [
        { label: "Chance pairing in a sensitive period", detail: "Early arousal-and-environment associations imprinting (the conditioning model, partial and honest)" },
        { label: "The courtship-map distortion", detail: "One stage of the find-approach-touch-consummation sequence captured and hypertrophied — voyeurism as the find-stage; frotteurism as touch-without-approach" },
        { label: "The pattern consolidates", detail: "Runs automatically, typically from adolescence, largely unmodifiable thereafter — the honesty the conversion era proved by failure" },
        { label: "The treatable field is behavioural", detail: "Frequency, escalation, disinhibition, offence-context decisions — the risk-and-self-regulation architecture's targets" },
      ],
      clinicalManifestation: "The fixed pattern behind the presentation; the management honesty that follows from it.",
      grade: "proposed",
    },
    {
      id: "paraphilia-escalation",
      name: "The escalation economy",
      steps: [
        { label: "Exposure and private reinforcement", detail: "The first pairings consolidate in isolation" },
        { label: "Content-seeking and algorithmic deepening", detail: "The compulsive-pornography escalation literature's tier; the platforms' recommendation engines as amplifier" },
        { label: "Community normalisation", detail: "Offending networks' skills-sharing and world-view reinforcement" },
        { label: "The compulsive cycle", detail: "Craving-tolerance-relapse running on arousal-as-the-drug — the addiction grammar imported into the treatment menu" },
      ],
      clinicalManifestation: "The unbearable escalation that brings the non-offender to the clinic — the prevention tier's presentation.",
      grade: "supported",
    },
    {
      id: "paraphilia-two-clocks",
      name: "The two clocks of harm",
      steps: [
        { label: "The compulsion clock", detail: "The internal drive-cycle — escalating in stress, isolation, disinhibition windows" },
        { label: "The opportunity clock", detail: "Access to victims: family design, occupation, digital access, supervision structure" },
        { label: "Single-clock failure", detail: "Compulsion-only treatment relapses on opportunity's schedule; opportunity-only supervision relapses on compulsion's — the eternal forensic lesson" },
        { label: "Both-clock management", detail: "CBT-and-medication for the drive; supervision-and-environment engineering for the access — the POCSO-era family-safety planning tier" },
      ],
      clinicalManifestation: "The relapse pattern that reads as 'treatment failure' until the second clock is mapped and worked.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "paraphilia-onset", time: "Adolescence (typical)", title: "The template's age-old signature", description: "Attraction patterns set early — the ego-dystonic adult's history reliably reaches back to adolescent (or earlier) onset, before the internet, before the vocabulary.", phase: "onset" },
    { id: "paraphilia-escalation", time: "Years", title: "The escalation economy season", description: "Private reinforcement, content-seeking spirals, community normalisation for some — the compulsive cycles deepening through the internet era's amplifier.", phase: "peak" },
    { id: "paraphilia-presentation", time: "Two doors", title: "The help-seeker or the court", description: "The ego-dystonic non-offender (tormented, secret-keeping, suicidal at times, asking for control) or the forensic referral (caught, charged, the evaluation mandate) — the same condition, opposite doors.", phase: "peak" },
    { id: "paraphilia-management", time: "Months to years", title: "The both-clocks season", description: "The engagement architecture (limits-talk, non-judgment, the SSRI tier, CBT's relapse-prevention modules, the supervision partner) or the forensic corridor (actuarial-plus-clinical evaluation, the court's disposition, the post-conviction treatment linkage).", phase: "recovery" },
    { id: "paraphilia-arc", time: "Long-term", title: "The managed life", description: "The realistic outcome: the template private-and-unacted-on, the behaviour managed, the risk supervised — hundreds live exactly that life with treatment-and-structure; the honest frame the engagement tier offers.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Population-survey estimates of atypical arousal interests run in low single-digit percentage bands, male-predominant across the board (with the masochism tier's female representation higher in survey work). DISORDER prevalence is essentially forensic-anchored: exhibitionism and voyeurism constitute large fractions of detected-and-prosecuted sexual offending (the 'hands-off' offence tier); pedophilic-disorder presentations concentrate in child-sexual-abuse justice samples — with the honest distinction that a minority share of CSA offenders have a primary pedophilic orientation (the majority of acts are situational, committed by acquaintance-or-family offenders with adult-attracting orientation); sexual sadism disorder in its severe tier marks the high-risk forensic corridors.",
    indianPrevalence: "No paraphilia-tier surveys exist — the honest statement; the Indian reality is defined by the offence-and-reporting architecture: NCRB's crime records show the sexual-offence volumes (with child-sexual-offence cases under POCSO rising through the 2010s-20s — the reporting rise that legislation-and-awareness produce); the forensic-referred tier reaches the central-and-state forensic units, mental-health-authority evaluations, and prison-and-probation corridors; and the help-seeking tier — the non-offending distressed individual — is an Indian near-silence: the stigma-and-secrecy dome, the absence of any public narrative of 'attraction toward children you never chose' as a treatable medical engagement, and the fear that clinic-contact equals police-contact. The clinical gap, plainly: tens of millions of internet-escalation-exposed young men, a rising-detected CSA judicial caseload, and virtually no engagement pathway for the non-offender — the tier where psychiatry could actually prevent the first offence.",
    lifetimeRisk: "The managed life is the realistic outcome: with treatment-and-structure, the template stays private-and-unacted-on — the outcome the Prevention Project evidence and the forensic-treatment literature both support.",
    genderRatio: "Male-predominant across the interest tiers (the masochism tier's survey representation the partial exception).",
    ageOfOnset: "Adolescence — the template's age-old signature; the adult-onset, changed-pattern presentation earns the acquired-tier workup.",
    indianNotes: "The protection-engineering implication of the situational-majority finding: the acquaintance-and-family offender dominance in Indian CSA data means safeguarding runs on family-and-institution design (the child-access audit, the two-adult rules, the supervision culture) — NOT the stranger-danger framing that misdirects it.",
  },
  etiology: [
    { category: "psychological", factor: "Preference-development models (partial, honest)", details: "Arousal-template formation through chance conditioning (early arousal-and-environment pairings), courtship-stage distortion (the normal find-approach-touch-consummation map with one stage captured-and-hypertrophied), and developmental-temperament interactions — aetiology remains multi-factor-and-underdetermined, honestly stated." },
    { category: "biological", factor: "The neuro-and-developmental riders (the forensic-relevant minority)", details: "Temporal-lobe epilepsy-and-tumour presentations (the acquired-pattern case literature), TBI (disinhibition-plus-frontal injury), intellectual disability (opportunistic-and-education-gap offending — a management tier, not a template tier), ASD's social-blindness-mistaken-for-intrusion (the differential duty), and the rare endocrine hypersexual syndromes." },
    { category: "social", factor: "The internet-escalation economy", details: "Algorithmic-content spirals, community normalisation-and-skills-sharing in offending networks, and the accessibility-of-minor-adjacent-content — the modern amplifier that has raised the escalation-and-compulsivity base rate." },
    { category: "psychological", factor: "Comorbid engines", details: "Hypersexuality-and-compulsivity, mood-and-impulse disorders, substance disinhibition (the offence-at-the-drink tier of forensic histories), antisocial-personality co-architecture in the predatory tier." },
    { category: "social", factor: "Forensic risk factors (the actuarial tier)", details: "Prior-offence history, victim-choice pattern, escalation-over-time, supervision-and-structure absence, substance access, and the antisocial-plus-deviance combination the risk instruments weight." },
    { category: "social", factor: "Indian context", details: "The silence architecture (no engagement tier, hence first-offence prevention happens nowhere); the joint family's unsupervised-child-access patterns (the acquaintance-offender dominance); the post-Navtej teaching-hygiene need (orientation-vs-disorder discipline)." },
  ],
  symptomClusters: [
    {
      category: "1. The eight members, each with its gate (paraphrased)",
      symptoms: ["Voyeuristic disorder: arousal from watching unsuspecting persons — DISORDER when acted on (the unsuspecting person IS the victim)", "Exhibitionistic disorder: arousal from exposing to unsuspecting persons — the classic first-offence corridor; repetitive-and-escalating", "Frotteuristic disorder: arousal from touching-and-rubbing against non-consenting persons — the crowded-transport tier", "Sexual masochism disorder: arousal from suffering-and-humiliation — DISORDER only at the distress-or-severe-injury tier (the consenting-adult tier is NOT disorder; the asphyxia practices' death-risk is the flag)", "Sexual sadism disorder: arousal from inflicting suffering — DISORDER when acted on non-consenting persons or escalating to severe harm", "Pedophilic disorder: sustained primary-or-substantial attraction toward PREPUBESCENT children — the gate includes any acted-upon behaviour (per the DSM architecture)", "Fetishistic disorder: arousal from non-living objects — disorder at the distress-or-impairment tier", "Transvestic disorder: distress-tied cross-dressing arousal — entirely distinct from transgender identity (the hygiene point)"],
    },
    {
      category: "2. The two presentation faces",
      symptoms: ["The ego-dystonic help-seeker: tormented, secret-keeping, no offence history, asking for control — presenting with depression, anxiety, or a confession after years", "The forensic presentation: court-referred, caught — the evaluation-and-risk-assessment mandate", "The same condition, opposite doors — and the engagement ethics of the first door is the Indian tier's missing piece"],
    },
    {
      category: "3. The escalation signature (the internet-era presentation)",
      symptoms: ["Escalating content-seeking cycles with compulsive frequency", "The distress-and-suicidality tier ('either this ends or I end')", "The secrecy architecture maintained for years — the confession as the first clinical act"],
    },
    {
      category: "4. The forensic co-architecture (the evaluation tier's screen)",
      symptoms: ["Substance disinhibition riding the offence timeline", "Antisocial-plus-deviance combination (the risk instruments' weight)", "The opportunity-structure findings: access patterns, occupation, digital footprints, supervision absence"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Paraphilic disorders (302.x / F65.x)",
      criteria: [
        "The gate architecture: a paraphilic INTEREST (atypical arousal pattern) becomes a paraphilic DISORDER when it involves harm-or-risk-of-harm to others or self (non-consent included), OR causes marked personal distress or interpersonal difficulty.",
        "The duration discipline: sustained patterns over approximately six months (the DSM architecture paraphrased).",
        "The member set with gates: voyeuristic, exhibitionistic, frotteuristic (the non-consent trio); sexual masochism and sadism (the consent-and-severity gates); pedophilic (the prepubescent-attraction plus acted-upon gate); fetishistic and transvestic (the distress-and-impairment gates).",
      ],
      duration: "~6 months of sustained pattern (paraphrased).",
      indianNote: "The engagement-first discipline for the help-seeker tier: the explicit non-panic-and-non-police promise the clinical frame CAN honestly make — stated at the start, in words the patient understands — with the POCSO line equally explicit: the moment child-abuse-or-intent enters the disclosure, mandatory reporting overrides (the engagement's honest limits are part of the engagement). The attraction history taken without leading: onset, specificity, the escalation ledger, the boundary history.",
    },
    {
      system: "ICD-11",
      code: "Paraphilic disorders (6D30-6D3Z)",
      criteria: [
        "The disorder-class running parallel to DSM-5: the arousal-pattern plus the harm-or-distress threshold.",
        "The distinction architecture: consensual adult variance outside the disorders; the coercion-and-child tiers inside.",
      ],
      duration: "Sustained patterns.",
      indianNote: "The forensic tier's instruments named-not-reproduced: the Static-99/R actuarial lineage for recidivism risk in convicted offenders; the psychopathy-screen tier for co-architecture — used by trained forensic evaluators, reported with confidence-intervals-and-limits, never as prophecy. Phallometric assessment named honestly: the arousal-measurement methodology of some forensic-research contexts — not clinical routine in India, its availability-and-ethics both noted.",
    },
  ],
  severityScales: [
    {
      name: "Static-99R",
      fullName: "The actuarial recidivism-risk instrument (named, not reproduced)",
      measures: "The convicted-adult-male recidivism-risk estimate the forensic corridor uses — scored by trained evaluators, reported with intervals and limits.",
      ranges: [
        { min: -3, max: 1, severity: "Low", action: "Community management tiers; the supervision-and-structure design" },
        { min: 2, max: 3, severity: "Low-moderate", action: "Structured supervision plus the treatment programme" },
        { min: 4, max: 5, severity: "Moderate-high", action: "Intensive supervision; the both-clocks architecture mandatory" },
        { min: 6, max: 13, severity: "High", action: "The specialist forensic tier; the disposition-and-monitoring architecture the court's disposal logic turns on" },
      ],
      indianNote: "Named for the discipline it represents: probabilities-with-intervals, never prophecy; the treating clinician does NOT score their own patient for court (the role-separation law); the instrument never substitutes for the clinical formulation.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Consensual adult variance (incl. homosexuality, consenting BDSM)", distinguishingFeatures: "Consent and adulthood present.", keyDifferentiator: "Not disorder, not the chapter's business — the hygiene point every classification and Navtej both settle." },
    { condition: "Mania / hypersexual syndromes", distinguishingFeatures: "Period-bound global elevation.", keyDifferentiator: "The attraction template itself un-atypical; the hypersexuality rides the episode." },
    { condition: "Intoxicated-and-opportunistic offending", distinguishingFeatures: "The offence timeline maps the substance.", keyDifferentiator: "No sustained atypical template — disinhibition without deviance; the different prognosis and treatment the distinction carries." },
    { condition: "Acquired frontal-and-temporal syndromes (epilepsy, tumour, TBI)", distinguishingFeatures: "Pattern change in adulthood-and-illness.", keyDifferentiator: "The acquired-onset story earns the scan-and-EEG tier — the treatable-cause hunt." },
    { condition: "ASD social-blindness (the misread adolescent)", distinguishingFeatures: "Social-rule miscalibration without arousal-template deviance.", keyDifferentiator: "The engagement-and-education pathway, not the forensic one — the misdiagnosis's cost paid by the adolescent." },
    { condition: "Intellectual disability opportunistic behaviour", distinguishingFeatures: "Education-and-supervision gaps.", keyDifferentiator: "The template typically un-deviant — the management tier is structure-and-education, not the paraphilic package." },
    { condition: "OCD sexual intrusive thoughts", distinguishingFeatures: "Unwanted, ego-dystonic, no arousal attached.", keyDifferentiator: "The obsession's terror versus the attraction's presence — the feared-content question separates them (the OCD course carries the differential from its side)." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Relapse-prevention CBT (the forensic-tier backbone)",
      description: "The offence-and-near-miss chain-mapping; the trigger-and-fantasy management skills; the lapse-vs-relapse discipline; the empathy-and-victim-impact modules; the lifestyle-and-structure stabilisation (the compulsion-clock work).",
      whenToUse: "Both tiers — the engagement patient's core treatment and the forensic corridor's mandated programme.",
      indianContext: "The self-regulation imports: the behavioural-log, the stimulation-diet restructuring, the urge-surfing borrowed from the impulse-disorders architecture — the Indian OPD can deliver the package with trained counsellors where forensic psychologists are scarce.",
    },
    {
      category: "pharmacotherapy",
      name: "Pharmacology — the honest tiers",
      description: "SSRIs at standard-and-elevated doses for the compulsivity-and-drive tier (the best-tolerated first pharmacological rung); the anti-androgen tiers — cyproterone acetate, medroxyprogesterone, and the GnRH-agonist (leuprolide-tier) protocols — for the high-risk forensic-and-severe-compulsion tier, ALWAYS with full informed consent (bone-density, metabolic, fertility-and-libido effects, monitored), the medicine framed as drive-amplitude reduction (the brakes, not the values), and the absolute ethical line: no Indian mandatory-chemical-treatment architecture exists; the consent-discipline is the guard-rail; the 'chemical castration' language rejected.",
      whenToUse: "SSRIs first-line pharmacological; anti-androgens reserved for the severe-and-forensic tier — never routine, never punitive.",
      indianContext: "SSRI tier ₹40–200 monthly; cyproterone sourced ₹300–1,200 monthly where clinically indicated; the monitoring bloods at district-lab costs; forensic evaluations through court-and-government channels (approx 2026).",
    },
    {
      category: "lifestyle",
      name: "The supervision-and-environment architecture (the opportunity-clock work)",
      description: "The family-safety planning of the POCSO era (the child-access engineering inside joint families, the unsupervised-access audit); the occupation-and-volunteer boundary engineering; the digital tier (content-blocking, device architecture, the monitoring tier); the probation-and-prison partnership in the forensic corridor.",
      whenToUse: "Every case where access structures exist — the both-clocks law makes it non-optional.",
      indianContext: "The Indian family-safety conversation: the child-access audit inside the joint family is the protection engineering the acquaintance-offender dominance dictates — done with dignity (structure, not accusation), because the design protects children from everyone, not the suspected from the family.",
    },
    {
      category: "psychotherapy",
      name: "The engagement tier (the prevention treasure)",
      description: "The German-and-Canadian Prevention Project architecture ('Kein Täter werden' — 'Don't become a perpetrator'): the public, confidential engagement pathway that invites the tempted BEFORE the first offence — the evidence that the non-offending help-seeker tier exists, reaches services when invited, and responds to treatment-and-structure.",
      whenToUse: "The Indian absence of this tier makes the treating psychiatrist's OPD the de-facto incarnation — the limits-talk, the non-judgment, the architecture offered before the first harm.",
      indianContext: "The confidentiality-and-POCSO limits talk stated FIRST, in words the patient understands: what stays in the room, and the disclosure-line where the duty overrides; the suicide-risk screen the acute presentation often carries; the supervision-partner recruitment (the trusted-relative tier) as the Indian adaptation.",
    },
  ],
  safety: {
    redFlags: [
      "Disclosure of child sexual abuse, or a real intent to act — the POCSO s.19/21 mandatory-reporting duty engages (the professional's own penalty clause, s.21)",
      "Suicidal ideation in the ego-dystonic presentation — the 'either this ends or I end' tier; acute risk, treated as acute risk",
      "Escalation signals: the content-and-behaviour ladder climbing, the escalation ledger's frequency rising",
      "The asphyxia practices tier in masochism — the death-risk the distress-gate hides",
      "Access-structure changes: new child-contact occupations, family arrangements, the digital-access tier",
      "Substance disinhibition riding the offence timeline — the drink-tier of forensic histories",
    ],
    urgentGuidance:
      "The order of operations at the presentation: (1) the limits-talk stated first — confidentiality-and-its-POCSO-line in words the patient understands, before the disclosure, not after; (2) the suicide screen (the ego-dystonic tier's acute risk — treated with the full architecture); (3) the child-safety assessment: any disclosure of abuse or real intent triggers the reporting duty AND the immediate protection engineering (the child-access audit, the family-safety planning); (4) then the treatment season: the engagement architecture, the SSRI tier, the CBT programme, the supervision partner — and in the forensic corridor, the role-separation discipline (the treating clinician does not write their own patient's court risk-report).",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "The SSRI compulsivity tier", rationale: "Standard-and-elevated dosing for the compulsive-escalation presentation — the best-tolerated first pharmacological rung (see its lesson for dosing and monitoring)." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "The SSRI compulsivity tier (the long half-life)", rationale: "The elevated-dose compulsivity option; its long half-life smooths adherence in the secrecy-prone presentation." },
  ],
  contentGaps: [
    "Cyproterone acetate, medroxyprogesterone and the GnRH-agonist (leuprolide) anti-androgen tier — the severe-and-forensic pharmacology — have no KYP drug lessons yet (the consent-and-monitoring architecture is taught here pending those lessons).",
    "The forensic-instrument modules (Static-99R interpretation, court-report craft) exist here as clinical guidance, not as standalone KYP lessons.",
    "The Prevention-Project engagement-pathway design (the Indian public-health recommendation) has no KYP lesson; the architecture lives in this course's content.",
  ],
  patientGuide: {
    whatIsIt:
      "An atypical pattern of sexual attraction — toward non-consent, children, objects, or suffering-and-humiliation — that you did not choose and cannot simply switch off. It becomes a clinical disorder only when it involves harm or risk of harm (including any acting without consent), or when it causes you marked distress. The attraction itself is not a crime, not a moral verdict, and not a choice; what you DO with it is where medicine, ethics and the law all operate — and all three can be on your side when you come before the harm.",
    whatCausesIt:
      "Attraction templates assemble through development — early pairings, sensitive periods, reinforcement — and then run largely unchanged; the internet era's escalation economy (algorithmic content, isolation, compulsive cycles) can deepen their grip. None of this means you decided it, and none of it excuses harm; it means the treatment target is the behaviour, the compulsive cycles and the risk architecture — not some promised re-orientation that a century of failed attempts has retired.",
    symptoms:
      "The sustained atypical attraction with its escalation cycles — content-seeking spirals, secrecy, the shame-and-depression load, sometimes suicidal despair; or, at the harm boundary, acting on non-consent (the legal-and-clinical emergency tier). The distress presentation (tormented, never acted, asking for control) IS the medical presentation this guide is written for.",
    treatment:
      "A package, honestly described: structured talking therapy (the relapse-prevention programme — mapping triggers, managing urges, building the life structure that starves the cycles); an antidepressant of the SSRI type at standard-to-higher doses to thin the compulsive drive; for the highest-risk tier, medicines that reduce the drive itself (with full information about effects and monitoring, and only with your consent — never as punishment); and the supervision partnership — a trusted person in your structure who knows, so that the architecture holds you when the urge clock and the opportunity clock align. Hundreds of people live unacted-on lives with exactly this treatment-and-structure.",
    selfHelp: [
      "Come before the harm — the help exists, and the door does not require a police conversation that your terror imagines (up to the line the law draws, which your clinician will state plainly at the start).",
      "The behavioural log: track the cycles (when, where, what triggers) — the map every later skill builds on.",
      "The stimulation-diet: restructure the content-and-context environment the escalation economy feeds on; the blocking-and-device architecture is treatment, not censorship.",
      "The urge-surfing discipline: urges peak and fall like waves — the skill is riding them out, not arguing with them.",
      "Recruit the supervision partner: one trusted person who knows the structure (not necessarily the details) — the Indian adaptation of the fellowship the mutual-help tier provides elsewhere.",
      "The emergency plan: the crisis contact, the 48-hour rule, the 'when the clocks align' drill written in advance.",
    ],
    whenToSeekHelp: [
      "Any sustained atypical attraction causing distress — before any harm, ideally; the prevention tier is the treatment's highest-yield door",
      "Escalating compulsive cycles you cannot manage alone",
      "Any thoughts of ending your life — same-day help (Tele-MANAS 14416, free, 24×7)",
      "Any approach to the harm boundary — the urgent-contact conversation your clinician and you should have written down in advance",
    ],
    indianResources: [
      "Psychiatry OPDs and the tele-consult tier (Tele-MANAS 14416 for the acute-distress and suicidal-ideation tier)",
      "The treating psychiatrist as the engagement tier's de-facto incarnation — the limits-talk and the architecture offered without the police conversation your fear predicts",
      "The child-safeguarding architecture (school-and-institution two-adult rules, access design) — the protection engineering that works for everyone",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific paraphilic-disorders guideline exists; management follows the international evidence architecture (the DSM-5/ICD-11 gates, the relapse-prevention CBT literature, the anti-androgen ethics frame) with the Indian legal interface carried explicitly: POCSO Act 2012 (s.19/21 mandatory reporting with the s.21 penalty), BNS 2023's sexual-offence codes, Navtej Johar (2018), NALSA (2014) and the Transgender Persons Act (2019) for the adjacent-identity hygiene, and the Madras High Court's conversion-therapy ban lineage.",
    systemContext: "The three Indian corridors: (1) the forensic corridor — court-and-jail referrals (responsibility-and-risk evaluation in charged sexual offenders), dominated by the acquaintance-and-family offender patterns of Indian CSA data — hence protection engineering is family-design, not stranger-terror; (2) the medico-legal duty corridor — the CSA-disclosure moment inside a consultation (the reporting duty, the medical-examination protocol, the child-friendly statement architecture); (3) the silence corridor — the non-offending distressed individual with nowhere to go: the de-facto answer today is a psychiatrist willing to hold the non-judgmental frame, the SSRIs-and-CBT architecture, and the supervision-partnership design; the systematic answer is the engagement-project tier India has not yet built.",
    costConsiderations: "SSRI tier ₹40–200 monthly (the best-value pharmacology in the field); cyproterone sourced ₹300–1,200 monthly where clinically indicated, with the monitoring bloods at district-lab costs; CBT tiers at metro ₹600–1,500/session with the counsellor-delivered versions at district rates; forensic evaluations through court-and-government channels at public-cost tiers (approx 2026).",
    programmeContext: "Forensic-evaluation capacity concentrates in the central-and-state forensic institutes and prison corridors; the private-and-district tier's engagement is near-zero (the stigma-plus-ignorance architecture); the treating psychiatrist's OPD is the engagement tier's only current incarnation; costs approx 2026: SSRI tier ₹40–200 monthly; cyproterone sourced ₹300–1,200 monthly where clinically indicated; the forensic evaluations through court-and-government channels.",
    culturalConsiderations: "The teaching hygiene Indian education still needs: homosexuality is neither crime (Navtej 2018) nor disorder (the classifications removed it decades ago); transgender identity is not a paraphilia (the cross-dressing-arousal versus identity distinction); the conversion-therapy prohibition (the Madras HC directions) stands on the same evidence-ruins this course's re-orientation honesty describes. The joint family's child-access patterns: the acquaintance-offender dominance means the protection conversation is family-design — the child-access audit and the two-adult rules done with dignity, protecting children from everyone rather than the suspected from the family.",
    patientCounselling: [
      "The limits-talk script, stated first and verbatim: 'what you feel stays in this room; my duty of reporting begins at a disclosure of abuse of a child, or a real intent to act — that is the law's line, and knowing it precisely is your safety and ours.'",
      "The reframe the engagement tier opens with: 'the attraction you never chose; the behaviour is the treatable field' — the monster-frame belongs to harm, and you have harmed no one.",
      "The supervision-partner recruitment conversation (the trusted-cousin tier): informed with consent, in a structured session — the Indian adaptation of the fellowship architecture.",
      "The family-safety conversation where access structures exist: the child-access audit and the safeguarding design, done with dignity and framed as protecting everyone.",
      "The safeguarding-engineering answer for institutions: structure, not soul-detection — the two-adult rules, the access-and-supervision design, the offence-history verification; the evidence's answer to 'should we hire him'.",
      "The post-Navtej correction, delivered where the old teaching lingers: orientation is not disorder; the classifications and the courts have both settled it.",
    ],
  },
  decisionPath: {
    title: "The atypical-attraction assessment",
    nodes: [
      {
        id: "start",
        question: "A patient presents — self-referred in distress, or court-referred after charges, or disclosed in another consultation. What is the tier?",
        branches: [
          { label: "Ego-dystonic attraction, no offences, help-seeking", next: "engagement" },
          { label: "Court/police referral for evaluation", next: "forensic" },
          { label: "Disclosure of abuse or real intent", next: "mandatory-report" },
          { label: "Consensual adult variance (patient or family worried)", next: "hygiene" },
        ],
      },
      {
        id: "engagement",
        question: "THE LIMITS-TALK FIRST, then the suicide screen: the POCSO line stated in words the patient understands; the 'either this ends or I end' tier assessed.",
        branches: [
          { label: "Suicidal ideation present", next: "acute-risk" },
          { label: "No acute risk", next: "treatment-package" },
        ],
      },
      {
        id: "treatment-package",
        question: "The engagement tier.",
        recommendation: "The architecture: the SSRI tier (standard-and-elevated dosing) for the compulsivity; the relapse-prevention CBT programme (chain-mapping, trigger-and-fantasy management, lapse-vs-relapse discipline); the self-regulation imports (behavioural log, stimulation-diet, urge-surfing); the supervision-partner recruitment with consent; the both-clocks engineering (the access audit, the occupation boundaries, the digital architecture); the follow-up contracted with the crisis plan written.",
      },
      {
        id: "forensic",
        question: "The evaluator's hat.",
        recommendation: "The role-separation law first (the treater does not write their own patient's risk report); the structured assessment: the actuarial instrument with its limits (probabilities-with-intervals, never prophecy), the attraction history, the antisocial-plus-deviance distinction, the situational-vs-template question the court's disposal logic turns on; the fixed-and-honest report; the treatment-after-conviction linkage (the prison-or-probation corridor, the supervision design on release).",
      },
      {
        id: "mandatory-report",
        question: "The duty engages.",
        recommendation: "The POCSO s.19/21 reporting duty (the professional's own s.21 penalty for non-reporting); the child-protection steps simultaneous, not sequential: the medical-examination protocol, the child-friendly statement architecture, the family-safety engineering; the patient told plainly (the limits-talk's promised honesty); the treatment relationship preserved where it can be — the duty is to the child, and the door stays open for the patient's treatment thereafter.",
      },
      {
        id: "acute-risk",
        question: "Suicidal ideation in the tormented non-offender.",
        recommendation: "The full suicide-safety architecture (see the Suicide & Self-Harm course): the risk assessment, the means discussion, the crisis contacts (Tele-MANAS 14416), the follow-up contracted — then the treatment package above; the despair is treatable and the prevention tier's whole point is that this patient never becomes the other statistic.",
      },
      {
        id: "hygiene",
        question: "Consensual adult variance, wrongly feared or pathologised.",
        recommendation: "The classification-and-law answer: neither disorder nor crime — Navtej 2018 and the declassification decades; the counselling that addresses the family's or the patient's mislearning; the conversion-therapy ban stated where it is being sought (the Madras HC lineage; the evidence-ruins beneath it); no treatment offered because none is indicated.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading 'homosexuality is a paraphilic disorder' as true",
      why: "The perennial exam trap and the clinic's recurring mislabel — the classifications removed it in 1973/1992 and Navtej removed the criminality in 2018.",
      correction: "Consensual adult variance sits outside the disorders entirely; the chapter's business is harm boundaries, not orientations.",
    },
    {
      mistake: "Believing 'frotteurism is consensual-touch-seeking'",
      why: "The inversion of the arousal's structure: the non-consent IS the arousal — the unsuspecting person is the victim, not the missed consent.",
      correction: "The non-consent trio (voyeurism, exhibitionism, frotteurism) centres victims by definition — the forensic duty, not the engagement tier.",
    },
    {
      mistake: "Prescribing anti-androgens as the first-line for all paraphilic disorders",
      why: "The tier-order error: SSRIs-and-CBT first; the anti-androgen tier is reserved for the severe-compulsion-and-high-risk cases, with consent-and-monitoring architecture.",
      correction: "The ladder: CBT-plus-SSRI first; anti-androgens reserved — always with full informed consent, never routine, never punitive.",
    },
    {
      mistake: "Treating 'voyeurism and exhibitionism' as victimless",
      why: "The unsuspecting person is the victim — the harm-gate's whole architecture.",
      correction: "The acted-on criterion makes them disorders with victims; the forensic corridor, not the privacy argument.",
    },
    {
      mistake: "Reading the risk instruments as individual prophecy",
      why: "The actuarial tier yields probabilities-with-intervals for groups, never certainties about a person.",
      correction: "The report's honest-limits language: the instrument informs, the clinical formulation carries, the supervision-and-structure design protects.",
    },
    {
      mistake: "Conflating the pedophilic template with child sexual abuse itself",
      why: "The majority of CSA is situational (acquaintance/family offenders with adult-attracting orientation) — the conflation misdirects protection toward stranger-panic.",
      correction: "The situational-vs-template distinction: safeguarding engineering (family-and-institution design) protects children from everyone — the template tier is the clinical-and-forensic minority that treatment engages.",
    },
    {
      mistake: "The treating clinician writing their own patient's court risk report",
      why: "The role-separation law: advocacy and objectivity cannot share one signature — the treater's report is advocacy, the court needs the evaluator's objectivity.",
      correction: "Different hats on different relationships: the treater treats, the evaluator evaluates — and the patient gets both honestly.",
    },
    {
      mistake: "Missing the limits-talk at the first session",
      why: "The engagement built on an unstated line collapses at the first disclosure — the patient's trust and the child's protection both pay.",
      correction: "The confidentiality-and-POCSO limits stated first, in words the patient understands: the engagement's honest limits ARE part of the engagement.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Paraphilic interest versus disorder — the gates and the work each gate does.",
        "The eight DSM-5 members with their harm-or-distress gates.",
        "The two-clocks risk model; the situational-versus-template distinction in CSA.",
        "The treatment architecture: CBT, SSRIs, the anti-androgen consent-ethics.",
      ],
      practical: [
        "The first-session architecture for the non-offending help-seeker: the limits-talk, the suicide screen, the engagement.",
        "The POCSO reporting steps when a child discloses abuse in consultation.",
      ],
      longAnswer: [
        "A 26-year-old confesses sustained attraction to children, no offences, suicidal: your first-session architecture and management.",
        "Paraphilic disorders: classification logic, forensic duties and treatment evidence.",
      ],
    },
    neetPg: {
      highYield: [
        "The gates: interest + (harm/risk-of-harm incl. non-consent OR marked distress) = disorder; consensual adult variance excluded by architecture.",
        "Homosexuality: neither crime (Navtej 2018) nor disorder (declassification 1973/1992) — the perennial trap.",
        "The eight members with gates: voyeuristic, exhibitionistic, frotteuristic (non-consent); masochism, sadism (consent-severity); pedophilic (prepubescent + acted-upon); fetishistic, transvestic (distress-impairment).",
        "The majority-situational finding in CSA — protection engineering is family-and-institution design, not stranger-panic.",
        "The tier order: SSRIs-and-CBT first; anti-androgens (cyproterone, medroxyprogesterone, GnRH agonists) reserved for severe-and-forensic, with consent-and-monitoring.",
        "POCSO s.19/21 mandatory reporting (the s.21 penalty clause binds the professional); BNS 2023 offence codes.",
        "The role-separation law: treating clinician versus forensic evaluator.",
        "The two-clocks model: compulsion and opportunity — single-clock management relapses on the other's schedule.",
        "Transvestic disorder ≠ transgender identity — the arousal-versus-identity line.",
      ],
      pyqConcepts: [
        "Seto's orientation-versus-situational-offending research programme as the forensic logic's foundation.",
        "Beier's Prevention Project ('Kein Täter werden') as the engagement-tier evidence.",
        "The Static-99 actuarial lineage — named, limited, never prophecy.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-year-old Pune engineer, self-referred after internet searching: sustained attraction toward prepubescent boys since his own adolescence, never acted on, escalating compulsive content-cycles through the pandemic's isolation, worsening depression and suicidal ideation — the limits-talk first, the panic-and-shame contained, the depression treated (SSRI at therapeutic-then-elevated dose), the self-regulation architecture built, the cousin as supervision-partner recruited with consent, the follow-up contracted; two years: no offence, cycles-and-ideation down, one lapse-and-disclosure episode handled without rupture.",
        "A 34-year-old charged under POCSO for repeated offences against a neighbourhood child, referred for forensic evaluation: the evaluator's hat (not the treater's), the actuarial-plus-clinical structure, the situational-versus-template question the disposal logic turns on, the fixed-and-honest report with the treatment-recommendation tier.",
        "A child discloses abuse inside a paediatric consultation: the POCSO reporting steps, the medical-examination protocol, the child-friendly statement architecture — the duty-and-craft sequence.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The interest-versus-disorder gates.",
        "Homosexuality's declassification and Navtej.",
        "POCSO mandatory reporting.",
        "The SSRI-then-anti-androgen tier order with the consent discipline.",
        "The majority-situational CSA finding.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The limits-talk IS the engagement's foundation — the patient who knows exactly where the reporting line sits can finally say the rest; the one who discovers it by surprise never returns.",
        "The supervision-partner recruitment is the Indian adaptation of a missing institutional tier: the trusted cousin, informed with consent in a structured session, carries more protective weight than any weekly appointment.",
        "The situational-versus-template distinction changes the courtroom's disposal logic and the protection engineering alike — the conflation is the field's most expensive error.",
        "The anti-androgen conversation framed as brakes-not-punishment converts the compliance problem into an alliance — the 'chemical castration' frame loses patients; the informed-consent architecture keeps them.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The man who came before the harm",
      presentation: "26-year-old engineer, Pune — self-referred by internet search: a sustained attraction toward prepubescent boys since his own adolescence, never acted upon, with escalating compulsive cycles and worsening suicidal ideation.",
      initialPresentation: "A 26-year-old engineer presented privately after months of internet searching; he disclosed a sustained attraction toward prepubescent boys dating from his own adolescence, never acted upon, no offences, no near-misses. The pandemic's isolation had escalated the compulsive content-cycles; his depression had deepened in parallel, arriving at the formulation 'either I end me or this ends me'. No one had ever been told anything. The engagement began with the limits-talk stated in plain words — what stays in the room, and the POCSO line where the duty overrides — which he later described as the first hour the terror had a shape.",
      history: "No offences, no criminal contact, no substance misuse; premorbid perfectionism and social anxiety; the escalation ledger documented carefully without leading.",
      examination: "Alert, deeply ashamed, exhausted; the suicide ideation explored fully (passive-with-plan-fragments, no means accessed); no psychotic features; the comorbid depression mapped.",
      diagnosis: "Ego-dystonic sexual attraction toward children (prepubescent), with compulsive escalation cycles and moderate depressive disorder with suicidal ideation — the engagement tier, no disorder-with-victims.",
      management: "The limits-talk first; the suicide-risk monitoring the ideation mandated; the SSRI at therapeutic-then-elevated dose (the compulsivity tier and the depression together); the self-regulation architecture (the behavioural log, the stimulation-diet restructuring, the trigger-map, the urge-surfing imports); the supervision-partner recruited (a trusted cousin, informed with the patient's consent in a structured session); the follow-up contracted with the crisis plan written.",
      outcome: "Two years: no offence, the cycles and the ideation both down, one lapse-and-disclosure episode handled without rupture — the architecture held.",
      teachingPoints: [
        "This door EXISTS and is the prevention tier — the patient who comes before the harm is the whole point of the engagement architecture.",
        "The limits-talk-first discipline: the engagement's honest limits are part of the engagement.",
        "The cousin-as-supervision-partner is the Indian adaptation of the missing institutional tier.",
      ],
    },
    {
      title: "The court's question",
      presentation: "34-year-old charged under POCSO for repeated offences against a neighbourhood child, referred for forensic evaluation of responsibility and risk.",
      initialPresentation: "A 34-year-old man charged under POCSO for repeated sexual offences against a neighbourhood child was referred by the court for psychiatric evaluation. The referral questions were the standard pair: responsibility-and-capacity at the time of the acts, and the risk architecture the disposal logic would turn on. The evaluation discipline began with the role-separation law — the evaluator's hat, not a treater's advocacy — and the structured assessment followed: the attraction history (the onset, the specificity, the escalation), the offence chain reconstruction, the antisocial-versus-deviance architecture distinguished, and the situational-versus-template question placed squarely before the court.",
      history: "Married, employed; the offence pattern investigated through records and victim-statements; the substance timeline mapped; no prior psychiatric contact.",
      examination: "The structured risk assessment with the actuarial instrument scored and its limits stated; the psychopathy-screen tier for co-architecture; the malingering-aware presentation discipline the forensic context demands.",
      diagnosis: "The evaluation's findings: the responsibility-capacity question answered per the mental-state evidence; the attraction architecture mapped; the situational-versus-template determination delivered with its disposal implications.",
      management: "The fixed-and-honest report: the capacity finding, the risk estimate with its confidence-intervals-and-limits (never prophecy), and the treatment-recommendation tier — the relapse-prevention-and-medication-and-supervision architecture as the disposition's clinical input; the treatment-after-conviction linkage (the prison-or-probation corridor, the supervision design on release).",
      outcome: "The disposition followed the treatment-recommendation tier; the supervision design structured the release; the clinical input stayed clinical — firm on harm, honest about limits, no minimisation, no prophecy.",
      teachingPoints: [
        "The situational-versus-template distinction the court's disposal logic turns on — the majority-situational finding of CSA epidemiology applied where it counts.",
        "The report's honest-limits language: probabilities-with-intervals, the formulation carrying, the instrument informing.",
        "The role-separation law in practice: the evaluator's hat, and the treater's different relationship preserved for whoever treats after.",
      ],
    },
  ],
  clinicalPearls: [
    "Interest + harm-or-distress = disorder; consensual adult variance outside — the gate architecture that does three jobs (de-pathologising, engagement, forensic duty).",
    "Homosexuality: neither crime (Navtej 2018) nor disorder (1973/1992) — the perennial trap.",
    "The majority of child sexual abuse is situational, not pedophilic-template — safeguarding engineering, not stranger-panic.",
    "The two clocks: compulsion and opportunity — single-clock management relapses on the other's schedule.",
    "No re-orientation ever worked — behaviour-and-risk is the treatable field.",
    "SSRIs first pharmacological rung; anti-androgens reserved-and-consented — the brakes, never the values; 'chemical castration' rejected.",
    "POCSO s.19/21: the mandatory-reporting duty with the professional's own penalty clause — the limits-talk stated first, in words the patient understands.",
    "The treating clinician does not write their own patient's court risk-report — the role-separation law.",
    "The non-offending help-seeker is the prevention tier — the door Germany built and India's OPDs de-facto hold.",
  ],
  highYieldSummary: [
    "Paraphilic disorders = atypical arousal patterns + the harm-or-distress threshold (harm/risk including non-consent, or marked personal distress) — DSM-5's gate architecture, ICD-11 parallel; ~6-month duration discipline.",
    "The member set with gates: voyeuristic-exhibitionistic-frotteuristic (the non-consent trio, victims by definition); masochism-sadism (consent-and-severity); pedophilic (prepubescent attraction + acted-upon); fetishistic-transvestic (distress-impairment; transvestic ≠ transgender identity).",
    "Aetiology honestly: preference-development (conditioning, courtship-map distortion — partial, underdetermined), the neuro-and-developmental riders (the acquired-tier workup), the internet-escalation economy (the addiction grammar on arousal-as-the-drug).",
    "The two-clocks risk model: compulsion (drive-cycle, stress-disinhibition windows) and opportunity (access, family design, digital, supervision) — both must be worked.",
    "Epidemiology: interests in low single-digit bands, male-predominant; disorder prevalence forensic-anchored; the majority-situational CSA finding redirects protection to family-and-institution design.",
    "Treatment: relapse-prevention CBT (the backbone) + self-regulation skills + SSRIs (the compulsivity tier) + the consented anti-androgen brakes for the severe-and-forensic tier + the supervision-and-environment architecture — management, not re-orientation, is the realistic outcome.",
    "The Indian legal interface: POCSO 2012 s.19/21 mandatory reporting (s.21 penalty binds the professional), BNS 2023 offence codes, Navtej 2018, the conversion-therapy ban lineage.",
    "The engagement tier: the non-offending help-seeker pathway (the German Prevention Project evidence) — the prevention treasure; India's absence of the tier makes the treating OPD the de-facto incarnation.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "paraphilia-quiz-1",
      question: "The element that converts a paraphilic INTEREST into a paraphilic DISORDER:",
      options: ["Atypicality alone", "The gates: harm-or-risk-of-harm to others-or-self (including non-consence), OR marked personal distress", "Internet usage", "Gender of the person"],
      correctIndex: 1,
      explanation: "The gate architecture: atypicality alone (consensual adult variance) is explicitly NOT disorder.",
      afterSectionId: "diagnosis",
    },
    {
      id: "paraphilia-quiz-2",
      question: "A patient discloses sustained attraction to children, no offences ever, escalating compulsive cycles, suicidal ideation. The first-session architecture's correct order:",
      options: ["Police before everything", "State the confidentiality-and-POCSO limits plainly → engage non-judgmentally → treat the suicide risk (it is acute) → SSRI-and-CBT-and-supervision design", "Refuse to treat, 'not our field'", "Re-orientation counselling immediately"],
      correctIndex: 1,
      explanation: "The limits-talk-first, the engagement-and-acute-risk discipline, and the realistic management architecture; this patient IS the prevention tier.",
      afterSectionId: "management",
    },
    {
      id: "paraphilia-quiz-3",
      question: "The majority of child sexual abuse is committed by:",
      options: ["Stranger predators with pedophilic disorder", "Situational offenders (acquaintances and family members without a primary pedophilic template)", "Women", "People with schizophrenia"],
      correctIndex: 1,
      explanation: "The epidemiological finding that redirects protection engineering toward family-and-institution safeguarding design.",
      afterSectionId: "epidemiology",
    },
    {
      id: "paraphilia-quiz-4",
      question: "The anti-androgen tier's ethical architecture requires:",
      options: ["Court mandate before every prescription", "Full informed consent with effects-and-monitoring explained; reserved for the severe-compulsion-and-high-risk tier; the punitive frame rejected — no forced-treatment architecture exists in Indian law", "Family consent only", "Lifetime administration without monitoring"],
      correctIndex: 1,
      explanation: "The consent-discipline, the reserved-tier logic, and the medication-as-brakes stance.",
      afterSectionId: "management",
    },
    {
      id: "paraphilia-quiz-5",
      question: "The treating psychiatrist's forensic line, correctly stated:",
      options: ["The treating clinician should write the court's risk-report on their own patient, for efficiency", "Role separation: the treating clinician and the forensic evaluator are different hats on different relationships — advocacy and objectivity cannot share one signature", "Treatment notes are subpoena-proof", "POCSO reporting applies only to government doctors"],
      correctIndex: 1,
      explanation: "The role-separation law — the ethics spine of the forensic corridor; POCSO's reporting duty, meanwhile, binds every professional it names.",
      afterSectionId: "common-mistakes",
    },
    {
      id: "paraphilia-quiz-6",
      question: "Consensual same-sex conduct between adults, in the modern Indian-and-classification frame:",
      options: ["A paraphilic disorder under ICD-11", "A crime under BNS 2023", "Neither crime nor disorder: Navtej 2018 removed the criminality; the classifications removed the pathology decades earlier", "A condition requiring conversion therapy"],
      correctIndex: 2,
      explanation: "The hygiene point every Indian exam and clinic still needs — and the conversion-therapy prohibition rides the same evidence-ruins.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "State the interest-vs-disorder gates and the work each gate does.", answer: "A paraphilic interest becomes a disorder at: (1) harm-or-risk-of-harm to others or self — non-consent included — which keeps the forensic duty centred where victims exist; or (2) marked personal distress — which keeps psychiatry's help available to the tormented non-offender (the engagement tier). Together they de-pathologise consensual adult variance (the private-and-consensual tier is nobody's clinical business), and they are what homosexuality's declassification and Navtej both stand on.", topic: "Concepts" },
    { question: "The eight DSM-5 members, each with its harm-or-distress gate explicit.", answer: "Voyeuristic (acted on an unsuspecting person — the watching IS the victim), exhibitionistic (exposure to unsuspecting persons), frotteuristic (touching/rubbing against non-consenting persons) — the non-consent trio; sexual masochism (disorder only at distress-or-severe-injury — consenting adults are NOT disordered; the asphyxia death-risk the flag); sexual sadism (acted on non-consenting persons or escalating severe harm); pedophilic (sustained primary-or-substantial attraction to PREPUBESCENT children, the gate including acted-upon behaviour); fetishistic (non-living objects, the distress-or-impairment tier); transvestic (distress-tied cross-dressing arousal — entirely distinct from transgender identity).", topic: "Diagnosis" },
    { question: "The two clocks of forensic risk — and why single-clock management relapses.", answer: "The compulsion clock: the internal drive-cycle that escalates in stress, isolation and disinhibition windows. The opportunity clock: the access architecture — victims, family design, occupation, digital access, supervision structure. Compulsion-only treatment (CBT, medication) leaves the opportunity clock running — the treated drive meets an untouched access structure and relapses on ITS schedule; opportunity-only supervision leaves the drive escalating beneath — it relapses on the compulsion's. The management law: both clocks, always — the medication-and-CBT tier AND the supervision-and-environment engineering.", topic: "Management" },
    { question: "Say the confidentiality-and-POCSO limits talk as you would in the first session.", answer: "'What you feel stays in this room. My duty of reporting begins at a disclosure of abuse of a child, or a real intent to act — that is the law's line (POCSO), and knowing it precisely is your safety and ours.' Stated first, in plain words, before the disclosure — the engagement built on an unstated line collapses at the first crossing; the patient who knows exactly where the line sits can finally say the rest.", topic: "Indian practice" },
    { question: "The anti-androgen tier's consent-and-monitoring architecture — and the frame rejected.", answer: "Full informed consent with the effects explained (bone-density, metabolic, fertility-and-libido), the monitoring scheduled, the medicine framed as drive-amplitude reduction — the brakes, not the values; reserved for the severe-compulsion-and-high-risk forensic tier, never routine; the absolute line: no Indian mandatory-chemical-treatment architecture exists, the consent-discipline is the guard-rail, and the 'chemical castration' punitive frame is rejected — it adds nothing clinical and loses patients.", topic: "Pharmacology" },
    { question: "The situational-vs-template distinction in child sexual abuse — state the majority finding and its protection implication.", answer: "A minority share of CSA offenders have a primary pedophilic orientation; the majority of acts are committed by situational offenders — acquaintances and family members with adult-attracting orientation, in opportunistic, regressive or disinhibited contexts. The implication: protection engineering runs on family-and-institution design (the child-access audit, the two-adult rules, the supervision culture) — protecting children from everyone — not on the stranger-danger frame that misdirects it; and the template tier is the clinical-and-forensic minority that treatment engages.", topic: "Epidemiology" },
    { question: "The role-separation law: state it and the reason beneath it.", answer: "The treating clinician and the forensic evaluator are different hats on different relationships: the treater is the patient's advocate, the court needs the evaluator's objectivity — the two cannot share one signature. The treater writing their own patient's court risk-report converts advocacy into testimony and contaminates both relationships; the separation preserves the treatment's honesty AND the court's.", topic: "Ethics" },
    { question: "Name the Indian legal interface's four anchors and what each does.", answer: "(1) POCSO 2012 s.19/21 — the mandatory reporting of child sexual abuse, with the s.21 penalty clause binding the professional who fails to report; (2) BNS 2023 — the sexual-offence codes the charges run under; (3) Navtej Johar 2018 — consensual same-sex conduct decriminalised, completing the classification's de-pathologising; (4) the conversion-therapy ban lineage (Madras HC 2021 onward) — standing on the same evidence-ruins as the re-orientation honesty, with NALSA 2014 and the Transgender Persons Act 2019 carrying the adjacent-identity hygiene.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Doctor, is being attracted to children a disease — am I a monster?", answer: "It is an attraction template you did not choose, present since your teens; the monster-frame belongs to harm, and you have harmed no one. What is treatable is everything the template does next — the compulsive cycles, the escalation, the behaviour-and-risk management — and that treatment begins today, in this room, without the police conversation your terror imagines, up to the line the law draws (which I will state plainly before you say anything more)." },
    { question: "If I tell you what I feel, will you report me?", answer: "Here is the exact line, stated first: what you FEEL stays in this room; the duty of reporting begins at a disclosure of abuse of a child, or a real intent to act. That is the law's line (POCSO), and knowing it precisely is your safety — and ours." },
    { question: "Can the attraction itself be changed — cured?", answer: "Honestly: a century of re-orientation attempts failed and were abandoned, and the courts have banned what remains of that industry. What changes reliably is behaviour-and-risk, drive-amplitude-and-compulsion. The realistic-and-sufficient goal: a life where the template stays private-and-unacted-on — hundreds of people live exactly that, with treatment-and-structure." },
    { question: "My husband wants things I find degrading. Is that a disorder?", answer: "Between consenting adults, variation is not psychiatry's business; it becomes clinical when it crosses consent (yours counts — coercion is not consent) or causes distress-and-injury. The conversation about consent-and-negotiation is the treatment, and it is ours to have — not the internet's." },
    { question: "Is homosexuality a paraphilia? A court said something once...", answer: "No: psychiatry removed it from the disorders decades ago, and the Supreme Court removed it from crime in 2018 (Navtej). Attraction to consenting adults of the same sex is neither illness nor offence; this chapter deals with harm boundaries, not orientations." },
    { question: "He exposed himself to my daughter on the street. What should we do?", answer: "Report it — the police-and-POCSO-or-BNS pathway the act demands; the behaviour is an offence with victims, and the forensic-and-treatment architecture that follows conviction is the public's protection. Psychiatry's role is real but downstream of the report you make today." },
    { question: "The court wants 'chemical castration' injections. What are my rights?", answer: "No Indian court mandates forced treatment; the medication tier — when clinically indicated for severe-compulsion-and-risk — runs on your informed consent, with the effects-and-monitoring explained: the brakes' power without the punitive frame's dignity-loss, and refusal-and-alternatives genuinely discussed." },
    { question: "Someone with these feelings wants to work in our school. What do we do?", answer: "The protection runs on structure, not on detecting souls: the child-safeguarding architecture — the two-adult rules, the access-and-supervision design, the offence-history verification — protects children in every institution from everyone. That engineering, not the blacklist-and-witch-hunt reflex, is the evidence's answer." },
    { question: "My son says he is attracted to children and wants help before he ever does anything. Does such help exist?", answer: "Yes — and his asking before any harm is the single most protective act in this entire field. The help: a psychiatrist who will not panic, the talking-therapy programme that builds the brakes, the medicine that thins the compulsive drive, and the supervision structure that holds the long arc. Germany built this pathway as a public programme; in India, the willing psychiatrist's OPD is that door — walk through it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 (APA) — the paraphilic-disorders chapter (the interest-disorder gates architecture) (2013/2022)" },
      { source: "ICD-11 (WHO) — the paraphilic-disorders class (the disorder-vs-arousal-pattern framing)" },
      { source: "The Indian legal tier — POCSO Act 2012 (s.19/21); BNS 2023; Navtej Singh Johar v. Union of India (2018); NALSA (2014); the Transgender Persons Act 2019; the Madras HC conversion-therapy directions" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.3 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — the paraphilic-disorders chapter (2022)" },
    ],
    trials: [
      { source: "Briken P, Hill A, Berner W — the pharmacological-treatment reviews (the SSRI-and-anti-androgen tiers with the ethics framing)" },
      { source: "Bradford J — the anti-androgen-treatment era's clinical-and-ethics literature (the consent-architecture source)" },
    ],
    reviews: [
      { source: "Seto M — Pedophilia and Sexual Offending against Children (the orientation-vs-situational research programme this course's forensic logic stands on)" },
      { source: "Marshall W, Laws D, Barbaree H — the relapse-prevention-and-treatment-era literature of sexual offending" },
      { source: "Hanson R K & Thornton D — the Static-99 actuarial lineage (named-and-limited)" },
      { source: "Krueger R & Kaplan M — the DSM-5 paraphilic-disorders review literature; Abel G, Becker J et al. — the classic deviant-arousal studies" },
      { source: "Beier K, Amelung T et al. — the German Prevention Project 'Kein Täter werden' (the engagement-tier's founding evidence)" },
      { source: "Indian tier — NCRB crime records; the MWCD/UNICEF CSA prevalence studies (the acquaintance-offender dominance findings); Kalra G and the Indian psychiatry review literature" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416) for the acute-distress tier" },
      { source: "The child-safeguarding architecture — the two-adult rules and access design every institution can adopt" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the attraction you never chose, the behaviour that is treatable, the door that opens before the harm.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The gates, the members, the two clocks and the treatment tiers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, Indian legal layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything — the engagement craft, the forensic-corridor discipline, the legal interface, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The gates, the members, the declassification lineage, the Indian legal frame.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the interest-vs-disorder gates and the eight members with their gates cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The template that sets, the escalation economy, the two clocks.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why management, not re-orientation, is the realistic outcome — and why both clocks must be worked." },
    { number: 3, title: "Clinical Practice", description: "The two presentation pathways, the assessment discipline, the treatment tiers with their ethics.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the first session with the limits-talk first, and place the anti-androgen tier in its consent architecture." },
    { number: 4, title: "Indian Context", description: "The three corridors, the POCSO duty, the safeguarding engineering, the engagement tier India lacks.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can walk the legal interface and hold the non-judgmental frame at the same time." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the perennial traps (homosexuality, anti-androgen first-line, victimless claims) cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5 (APA) — the paraphilic-disorders chapter (the interest-disorder gates architecture)", sourceType: "classification", year: "2013 (5-TR 2022)", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 (WHO) — the paraphilic-disorders class (the disorder-vs-arousal-pattern framing)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.3 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Seto M — Pedophilia and Sexual Offending against Children (the orientation-vs-situational research programme)", sourceType: "review", year: "2008 onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Marshall W, Laws D, Barbaree H — the relapse-prevention-and-treatment-era literature of sexual offending", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Hanson R K & Thornton D — the Static-99 actuarial lineage (the risk-instrument tier, named-and-limited)", sourceType: "primary", year: "1999 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Briken P, Hill A, Berner W — the pharmacological-treatment reviews; Bradford J — the anti-androgen ethics literature", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Krueger R & Kaplan M — the DSM-5 paraphilic-disorders reviews; Abel G, Becker J et al. — the classic deviant-arousal-and-offence-pattern studies", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Beier K, Amelung T et al. — the German Prevention Project 'Kein Täter werden' (the engagement tier's founding evidence)", sourceType: "primary", year: "2009 onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "The Indian legal tier — POCSO Act 2012 (s.19/21); BNS 2023; Navtej Singh Johar (2018); NALSA (2014); the Transgender Persons Act 2019; the Madras HC conversion-therapy directions", sourceType: "government", year: "2012 onward", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Indian tier — NCRB crime records; the MWCD/UNICEF CSA prevalence studies (the acquaintance-offender dominance); Kalra G and the Indian review literature", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The gate architecture: a paraphilic interest becomes a disorder at harm-or-risk-of-harm (non-consent included) or marked distress; consensual adult variance explicitly outside the disorders — the declassification lineage (homosexuality removed 1973/1992; Navtej 2018 in India).", grade: "established", sources: ["S1", "S2", "S10"] },
    { text: "The majority-situational finding: a minority share of child-sexual-abuse offenders have a primary pedophilic orientation — most acts are committed by situational acquaintance-or-family offenders; protection engineering therefore runs on family-and-institution safeguarding design.", grade: "established", sources: ["S4", "S11"] },
    { text: "No re-orientation intervention has ever reliably changed a sexual attraction pattern; treatment reliably moves behaviour, compulsion and risk — the management-not-cure honesty (and the conversion-therapy ban's evidence base).", grade: "established", sources: ["S5", "S10"] },
    { text: "The two-clocks model (compulsion and opportunity) with the single-clock relapse lesson — the working architecture forensic practice runs on.", grade: "supported", sources: ["S5", "S6"] },
    { text: "The German Prevention Project evidence: the non-offending help-seeker tier exists, reaches services when invited, and responds to treatment-and-structure — the engagement pathway's founding demonstration.", grade: "established", sources: ["S9"] },
    { text: "SSRIs at standard-and-elevated doses for the compulsivity tier; the anti-androgen tiers (cyproterone, medroxyprogesterone, GnRH agonists) for the severe-and-forensic tier with full informed consent and monitoring — no forced-treatment architecture in Indian law; the 'chemical castration' punitive frame rejected.", grade: "established", sources: ["S7"] },
    { text: "The Static-99R actuarial lineage provides group-level recidivism-risk estimates with intervals — never individual prophecy; the role-separation law (treater versus evaluator) is the corridor's ethics spine.", grade: "established", sources: ["S6"] },
    { text: "The internet-escalation economy — algorithmic content spirals, community normalisation and the compulsive-cycle base rate — is the modern amplifier the treatment menu's addiction-grammar imports answer (relapse prevention, trigger mapping, the compulsivity pharmacology).", grade: "supported", sources: ["S8", "S5"] },
    { text: "The acquired-pattern minority (temporal-lobe epilepsy and tumours, TBI) earns the scan-and-EEG workup in the changed-pattern adult; ASD's social-blindness and ID's opportunistic tier are management-and-differential duties, not template explanations.", grade: "supported", sources: ["S3", "S8"] },
    { text: "The Indian tier: rising-detected POCSO caseloads (the reporting rise), the internet-escalation exposure of tens of millions, and the near-absent engagement pathway for non-offending help-seekers — the treating OPD as the de-facto Prevention Project.", grade: "supported", sources: ["S11", "S10"] },
  ],
};
