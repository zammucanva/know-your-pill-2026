import type { PsychiatryCourse } from "./types";

/**
 * MENTAL HEALTH LAW — canonical Psychiatry concept course
 * (migration batch 11, Group O — forensic psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/mental-health-law.md — untouched
 * foundation, itself built on New Oxford Textbook of Psychiatry
 * 2e ch 11.1), re-researched against the lineages the note
 * itself cites — Grisso and Appelbaum's four abilities, the
 * Mental Capacity Act 2005 architecture, the McNaghten and
 * Homicide Act criminal doors, Bolam, the Hill–Palmer–Clunis–
 * Osman duty lineages, the MHA 2017 India lens — with
 * per-claim provenance. A CONCEPT course: the three questions
 * (can she decide, can she be blamed, who must answer), each
 * answered functionally, case-by-case, never by status.
 *
 * Drug routes: NONE — a legal-concept course; the note assigns
 * no medication a clinical role. drugLinks is deliberately
 * empty and the honesty recorded in contentGaps, never invented.
 */
export const mentalHealthLawCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "mental-health-law",
  title: "Mental Health Law",
  shortName: "MH Law",
  kind: "concept",
  category: "Forensic Psychiatry",
  groupLetter: "O",
  groupName: "Forensic psychiatry",
  learningPath: ["Psychiatry", "Forensic Psychiatry", "Mental Health Law"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "resident",

  tagline:
    "Capacity, liability and duty: answered functionally, case by case, never by status",

  summary:
    "This course covers the three questions of mental health law: capacity to decide, criminal liability and negligence. Each is answered functionally and case by case, through the Mental Capacity Act framework and India’s Mental Healthcare Act 2017.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the three questions of mental health law (capacity, criminal liability, negligence and the duties of authorities) and explain why the modern answer to each is functional, individual and case-by-case rather than status-based.",
    "Contrast status law with the functional approach, with a historical example of each: the mature minor (Gillick, 1985) against the Sexual Offences Act 1956 'defective' whose consent was void however competent she might actually be.",
    "Apply the four abilities (Grisso and Appelbaum) (understanding, appreciation, reasoning, expressing a choice) and their decision-specific calibration from Banks v Goodfellow, and defend the unwise-outcome rule.",
    "Summarise the MCA 2005 architecture: the best-interests checklist, advance statements, deputies versus court decisions, independent advocates, and challengeability as the human-rights safeguard.",
    "Distinguish best interests from substituted judgement, and state when each governs.",
    "Explain how mental disorder affects criminal liability through the four doors: the mental element, the insanity defence (McNaghten), diminished responsibility (the Homicide Act formulation and its trier of fact), and intoxication's specific-intent/basic-intent distinction.",
    "State the negligence skeleton (duty, breach, causation, damage) with the Caparo triad and the Bolam test including its logical-analysis exception; describe the compensable psychiatric-injury rules (primary and secondary victims, the impact rule, shockingness, creeping trauma).",
    "Apply the objective standard of care to the mentally disordered defendant (Nettleship; Mansfield v Weetabix at the edges) and discuss the authorities' liability for patients' violence (Hill, Palmer, Clunis, Osman).",
    "Map the Indian counterpart: the MHA 2017 principles (the note's India lens, flagged as non-Oxford context); onto the same three questions.",
  ],
  quickFacts: [
    { label: "The three questions", value: "Capacity, liability, duty", detail: "Can she decide for herself; can she be held responsible; who must answer when things go wrong, one course, three doors, and every door answered case-by-case, never by category" },
    { label: "The functional rule", value: "This decision, at this time", detail: "Competence relates to the particular decision, at the particular time it must be made: the single most examinable concept in the field; the presence of mental disorder is not incapacity" },
    { label: "The four abilities", value: "Understand, retain, weigh, communicate", detail: "Grisso and Appelbaum's quartet: understanding the information, appreciating its application to one's own situation, reasoning with (weighing) it, and expressing (communicating) a choice; the bedside gloss keeps the exam's wording, the formal names keep the framework" },
    { label: "The unwise-outcome rule", value: "Eccentricity is not incapacity", detail: "An unwise outcome is not proof of an unacceptable process: the eccentric testator may lawfully disinherit dependants; questionable results and defective reasoning are different things" },
    { label: "The four doors of liability", value: "Mens rea, insanity, diminished responsibility, intoxication", detail: "Mental disorder enters criminal law by negating the mental element (a complete defence), the McNaghten insanity defence, the Homicide Act partial defence converting murder to manslaughter, or intoxication: specific intent only" },
    { label: "The diminished-responsibility prize", value: "Murder to manslaughter", detail: "Abnormality of mind substantially impairing mental responsibility: decided by the trier of fact on expert-informed evidence; born to avoid the death penalty, now accommodating impulse-resistance arguments that McNaghten excludes" },
    { label: "The negligence quartet", value: "Duty, breach, causation, damage", detail: "The Caparo triad for duty; Bolam's responsible body for breach, unless the practice fails logical analysis; the psychiatric-injury rules hedging damage (primary and secondary victims, the impact rule)" },
    { label: "The duty lineages", value: "Hill, Palmer, Clunis, Osman", detail: "No general duty to protect everyone from everyone (Hill); no duty to unidentified future victims (Palmer); a duty owed to the patient himself, failed systemically (Clunis); blanket immunities pressed by the Convention (Osman)" },
    { label: "The Indian answer", value: "MHA 2017", detail: "Presumed capacity, advance directives and nominated representatives, admission safeguards, the chaining and unmodified-ECT prohibitions, and s.115's decriminalisation of attempted suicide: the same three questions in India's rights-based idiom" },
  ],
  knowledgeGraph: [
    { label: "Psychiatric Disorder & Offending", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The offender-formulation account this course's liability doors open onto: risk read clinically, never morally" },
    { label: "Homicide, Mass Murder & Infanticide", type: "condition", href: "/psychiatry/homicide-infanticide/", note: "Diminished responsibility's home ground: the abnormality-of-mind formulation in its natural habitat, plus the infanticide provisions this note flags onward" },
    { label: "Juvenile Offending", type: "condition", href: "/psychiatry/juvenile-offending/", note: "Where the criminal-responsibility age line meets developmental immaturity: the capacity question's youngest edge" },
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The functional test's most frequent examination hall: supported decision-making before any incapacity declaration" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The Clunis-type scenario's illness: the discharge, the relapse, the care programme the law will audit" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "The fluctuating state that makes any single capacity assessment unrepresentative. Treat first, assess at the best hour" },
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The retain-and-weigh abilities' anatomy: the recording failure that decides the capacity verdict" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "s.115's territory: attempted suicide decriminalised as care's business, not punishment's" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The psychosis substrate: the unwellness at discharge that turns the Clunis question from hypothetical to courtroom" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The weighing machinery the reasoning ability runs on: the frontal dementias eroding judgement while the memory score holds" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism of mental health law is doctrinal, not cellular, but it has an engine, and the engine is the shift from status to function. Status law answered capacity and responsibility by category: minors could not consent, the 'defective' under the Sexual Offences Act 1956 could not consent to sexual activity however competent she might actually be (with the absurd corollary that marriage, competence-assessed at the ceremony, was lawful while the same woman's consent to sexual activity was void). Modern law abolishes categorical exclusion and substitutes the functional test: competence related to the particular decision, at the particular time it must be made, operationalised by the four abilities of Grisso and Appelbaum; understanding, appreciation, reasoning and expressing a choice. For the incapacitous, the MCA 2005 supplies the best-interests checklist with its safeguards architecture: some decisions excluded as too personal (marriage, consent to sex), independent advocates, the Court of Protection's preference for court decisions over deputy appointment, and the design's central point, no initial judicial trigger but universal challengeability. Criminal responsibility receives mental disorder through four doors (the mental element, insanity, diminished responsibility, intoxication) each narrower than clinicians assume (most offending by people with mental disorder involves neither defence, disorder and full responsibility usually coexisting). Negligence runs the duty-breach-causation-damage skeleton with Bolam's professional standard, the psychiatric-injury rules for damage, and the objective reasonable-person standard applied even to the mentally disordered defendant, because tort compensates victims rather than blames wrongdoers. And the authorities' liability attaches to identifiable relationships and abandoned systemic duties, never to a general duty to protect everyone from everyone.",
    steps: [
      "The status era: capacity by category (minority, 'defective' status under the Sexual Offences Act 1956, marital status) with its absurdities (marriage lawful while the same woman's consent to sexual activity was legally void, disabling even legitimate protective sex education).",
      "The functional revolution: competence related to the particular decision, at the particular time it must be made; the presence of mental disorder is not incapacity, and Gillick (1985) recognised the mature minor's decision-making.",
      "The four abilities operationalise the test: understanding the relevant information, appreciating its application to one's own situation, reasoning with (weighing) it, and expressing (communicating) a choice, with the unwise-outcome rule protecting eccentric process.",
      "The decision-specific calibration: Banks v Goodfellow (1870) demanded understanding of the business, recollection of the property, knowledge of the natural beneficiaries and the manner of distribution; appreciation and reasoning at a will-writer's level, not a lawyer's.",
      "The MCA architecture for the incapacitous: the best-interests checklist, substituted judgement where wishes are known, deputies versus court decisions, independent advocates, and universal challengeability instead of an initial judicial trigger.",
      "The four doors of criminal liability: negated mens rea (a complete defence), McNaghten insanity (defect of reason from disease of the mind, no irresistible impulse), diminished responsibility (abnormality of mind substantially impairing responsibility; murder to manslaughter; the trier of fact decides), and intoxication (specific intent only: the recklessness of getting drunk supplies the guilt for basic-intent crimes).",
      "The duty architecture: the negligence skeleton with Bolam and its logical-analysis exception; the objective standard even for the mentally disordered defendant; and liability attaching to identifiable relationships and abandoned statutory duties: systems, not clairvoyance.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the weighing machinery)", role: "The reasoning-and-weighing ability runs on the frontal executive machinery: the frontal dementias eroding judgement and appreciation while the memory score still holds, the unwise-will consultation's usual neurology.", grade: "established" },
    { id: "hippocampal-diencephalic-circuit", name: "Hippocampal-diencephalic circuit (the retaining machinery)", role: "Holding the relevant information across the decision: the amnesic recording failure that removes the material the four abilities need; Banks v Goodfellow's recollection-of-the-property demand made neural (full anatomy in the Amnesic Syndromes course).", grade: "established" },
    { id: "language-networks", name: "Dominant-hemisphere language networks (the communicating machinery)", role: "Expressing a choice requires the language machinery: the aphasic patient whose intact capacity needs a different channel (writing, gesture), teaching the law's lesson: test the ability, not the channel.", grade: "supported" },
    { id: "attention-systems", name: "Ascending attention systems (the state gate)", role: "Delirium's fluctuation riding on arousal and attention instability: the acute state that makes any single capacity assessment unrepresentative; the treat-then-reassess rule's machinery (full account in the Delirium course).", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The psychosis substrate: the mesolimbic dysregulation whose relapse after a bare discharge generates the Clunis-type question; the unwellness that turns the duty lineages from doctrine into a courtroom.", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The intoxication door's chemistry: alcohol's GABA-mimetic disinhibition the reason the law polices drunkenness through the specific-intent/basic-intent distinction rather than excusing it.", grade: "established" },
    { name: "Acetylcholine", symbol: "ACh", role: "The cholinergic decline of the dementias that erodes the four abilities together: the capacity assessments this course's readers will run most often arrive on its back (the full account in the Alzheimer's and Amnesic courses).", grade: "established" },
  ],
  pathways: [
    {
      id: "capacity-pathway",
      name: "The capacity pathway (contested decision to lawful decision)",
      steps: [
        { label: "The decision arises", detail: "A refusal, a will, a discharge against advice, one specific decision, at one specific time" },
        { label: "Status excluded", detail: "The diagnosis is not the answer: dementia, schizophrenia, intellectual disability. None is incapacity by itself" },
        { label: "The four abilities tested", detail: "Understanding, appreciation, reasoning, expressing a choice, at the level this decision demands (wills at Banks v Goodfellow's will-writer level)" },
        { label: "Unwise but process-sound", detail: "An unwise outcome is not proof of an unacceptable process: capacity holds, the reasoning documented" },
        { label: "Incapacity declared only on defective process", detail: "Not understanding, not appreciating, unable to weigh, unable to express, then known wishes first, then the best-interests checklist, always challengeable" },
      ],
      clinicalManifestation: "The 84-year-old with mild dementia whose disinheriting will is sound law, because he understands, recollects, appreciates and reasons at a will-writer's level.",
      grade: "established",
    },
    {
      id: "liability-pathway",
      name: "The liability pathway (the offence through the four doors)",
      steps: [
        { label: "The offence and its mental element", detail: "Intention, recklessness, knowledge or belief: mental disorder may show the defendant lacked it: a complete defence" },
        { label: "The insanity door", detail: "McNaghten (1843): defect of reason from disease of the mind, not knowing the nature and quality of the act or that it was wrong; rarely used, famously unable to accommodate irresistible impulse" },
        { label: "The diminished-responsibility door", detail: "Abnormality of mind (arrested or retarded development, inherent causes, disease or injury) substantially impairing mental responsibility: murder to manslaughter, the trier of fact deciding on expert-informed evidence" },
        { label: "The intoxication door", detail: "Drink or drugs negating intent succeeds only for crimes of specific intent (murder, theft, burglary); for basic-intent crimes (manslaughter, rape, unlawful wounding) the recklessness of voluntary intoxication supplies the guilt" },
      ],
      clinicalManifestation: "The psychotic defendant who knew the act's nature but not that it was wrong, and the expert report that describes the reasoning rather than announcing the verdict.",
      grade: "established",
    },
    {
      id: "duty-pathway",
      name: "The duty pathway (harm to the courtroom)",
      steps: [
        { label: "Harm occurs", detail: "A victim, a claim, a family asking who must answer" },
        { label: "Duty?", detail: "The Caparo triad (foreseeability, proximity, just-and-reasonable); no general duty to protect everyone from everyone (Hill); no duty to unidentified future victims (Palmer); a duty owed to the patient himself (Clunis)" },
        { label: "Breach?", detail: "Bolam's responsible body of medical opinion, unless the practice fails logical analysis; for authorities, the systemic failure to follow the care programme" },
        { label: "Causation and damage", detail: "Including the 'would have consented anyway' defence; for psychiatric injury alone: primary versus secondary victims, the impact rule, the shocking event, recognised psychiatric injury only" },
      ],
      clinicalManifestation: "The discharged patient who harms a stranger two months later, and the audit that asks what was written, communicated and followed, never how well anyone predicted.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "status-era", time: "1843–1956", title: "The status era's long reign", description: "The McNaghten rules (1843) opening the insanity door for the diseased mind while status law still silenced minors, 'defectives' and the married, and Banks v Goodfellow (1870) already insisting the testator's mind be tested on the will itself: the functional seed inside the status world.", phase: "onset" },
    { id: "statutes-collide", time: "1956–1957", title: "The statutes collide", description: "The Sexual Offences Act 1956 voiding the 'defective's' consent however competent she might be; the Homicide Act 1957 s.2 creating diminished responsibility to spare the death penalty, one statute entrenching status, the other individualising culpability, in the same decade.", phase: "onset" },
    { id: "gillick", time: "1985", title: "Gillick and the mature minor", description: "The mature minor's decision-making recognised: the status rule (minors cannot consent) yielding to the functional question: is this minor, for this decision, sufficiently understanding?", phase: "peak" },
    { id: "mca-2005", time: "2005", title: "The Mental Capacity Act", description: "The functional approach codified: the best-interests checklist, advance statements, deputies, independent advocates, and the design's central wager: no initial judicial trigger, universal challengeability.", phase: "peak" },
    { id: "duty-decades", time: "The duty decades", title: "Hill to Clunis to Osman", description: "The courts refusing a general duty to protect everyone from everyone (Hill), refusing it to unidentified future victims of identified patients (Palmer), locating liability in the duty owed to the patient and the abandoned care programme (Clunis), with the European Convention pressing against blanket immunities (Osman, Article 6).", phase: "duration" },
    { id: "mha-2017", time: "2017", title: "India's rights-based turn", description: "The Mental Healthcare Act replacing the Mental Health Act 1987 with presumed capacity, advance directives, nominated representatives, admission safeguards, the chaining and unmodified-ECT prohibitions, and s.115's decriminalisation of attempted suicide: the same three questions, India's own idiom.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  symptomClusters: [
    {
      category: "1. The contested decision (the capacity question's presentations)",
      symptoms: [
        "The refusal that alarms the team (treatment, placement, discharge against advice) each demanding the four abilities tested for that decision, at that time",
        "The unwise transaction: the new will, the sale, the gift; the eccentric outcome that provokes the family's lawyer rather than the doctor",
        "The fluctuating competence of the acute states: the delirious or psychotic patient whose capacity changes with the hour; the assessment valid only for the moment it was made",
        "The unsupported decision: the deaf, the aphasic, the intellectual-disability patient whose ability is intact but whose channel is blocked; supported decision-making before any declaration of incapacity",
      ],
    },
    {
      category: "2. The courtroom interface (the liability question's presentations)",
      symptoms: [
        "The offender whose mental state at the time of the offence must be reconstructed: records, informants, interviews, the expert working backwards from the act",
        "The degree-of-impairment opinion: legally demanded, epistemologically fragile; the report describing its reasoning, not just its conclusion",
        "Fitness to plead and the infanticide provisions: flagged by the note for the offending chapters, named here as their territory",
        "The full-responsibility default, most offending by people with mental disorder involves neither defence; disorder and responsibility usually coexist",
      ],
    },
    {
      category: "3. The harm and the aftermath (the duty question's presentations)",
      symptoms: [
        "The victim's claim: primary and secondary victims, the shocking event, the recognised psychiatric injury; grief and distress alone not compensable",
        "The authority's file: the care programme that was written, communicated and followed, or was not (the Clunis audit)",
        "The family's question: 'who is responsible?': answered by identifiable relationships and statutory duties, never by clairvoyance",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The capacity assessment",
      code: "This decision, at this time",
      criteria: [
        "The four abilities tested for THIS decision: understanding the relevant information; appreciating its application to one's own situation; reasoning with it (weighing); expressing a choice (communicating): the bedside gloss understand, retain, weigh and communicate keeping the exam's wording.",
        "The decision-specific calibration: Banks v Goodfellow (1870) for wills (understanding of the business, recollection of the property, knowledge of the natural beneficiaries, the manner of distribution) appreciation and reasoning at a will-writer's level, not a lawyer's.",
        "The unwise-outcome rule: an unwise outcome is not proof of an unacceptable process; the eccentric testator may lawfully disinherit dependants.",
        "The documentation: the process as well as the outcome recorded; what she understood, appreciated, weighed and expressed, not merely the conclusion that she 'has' or 'lacks' capacity.",
      ],
      duration: "The assessment answers only the question asked: valid for this decision, at this time; reassessed whenever the state, the treatment or the stakes change.",
      indianNote: "The Indian idiom asks the same functional question through the MHA 2017's presumed capacity. The diagnosis is never the answer; the documented four-abilities process is.",
    },
    {
      system: "The four doors (mental disorder's entry into criminal liability)",
      code: "Mens rea → insanity → diminished responsibility → intoxication",
      criteria: [
        "First door: the mental element: most serious crimes require intention, recklessness, knowledge or belief; mental disorder may show the defendant lacked it: a complete defence.",
        "Second door: insanity (McNaghten rules, 1843): defect of reason from disease of the mind, with not knowing the nature and quality of the act or that it was wrong; rarely used, and famously unable to accommodate irresistible impulse.",
        "Third door (diminished responsibility (Homicide Act): abnormality of mind) whether arising from a condition of arrested or retarded development of mind, any inherent causes, or induced by disease or injury, as substantially impaired mental responsibility for the acts or omissions; a partial defence converting murder to manslaughter; the impairment decided by the trier of fact, steered by expert evidence (including degree-of-impairment opinions that arguably exceed clinical expertise).",
        "Fourth door: intoxication: where drink or drugs negate intent, the defence succeeds only for crimes of specific intent (murder, theft, burglary) and fails for basic-intent crimes (manslaughter, rape, unlawful wounding); the recklessness of voluntary intoxication itself supplying the mental guilt.",
      ],
      duration: "The mental state at the time of the offence: reconstructed from records, informants and interviews; not the clinic-state at assessment.",
      indianNote: "The Indian interface runs through the BNS unsoundness-of-mind provisions and diminished-responsibility analogues: the note's flag, not Oxford's chapter.",
    },
    {
      system: "The negligence skeleton",
      code: "Duty → breach → causation → damage",
      criteria: [
        "Duty: foreseeability + proximity + just-and-reasonable (the Caparo triad); for authorities: no general duty to individual victims to catch a specific criminal (Hill), no duty to unidentified future victims of identified patients (Palmer), but a duty owed to the patient himself (Clunis).",
        "Breach: the objective reasonable standard, for doctors, the Bolam responsible-body-of-medical-opinion test, unless the practice fails logical analysis; with drug-risk information, the courts moving toward a stricter informed-consent standard.",
        "Causation: including the 'would have consented anyway' defence.",
        "Damage: physical injury plus psychiatric injury uncontroversial; psychiatric injury alone hedged: primary victims (physically injured or within foreseeable range) versus secondary victims (close proximity, close tie of love and affection, or rescuers); the impact rule (unaided senses, sudden, shocking to a person of ordinary fortitude); recognised psychiatric injury only: ordinary grief, fear and distress not compensable, acute stress reaction compensable (modestly).",
      ],
      duration: "The claim's clock runs from the harm, but the courtroom's verdict lands on the record that existed before it.",
      indianNote: "Indian negligence retains Bolam as the touchstone with Supreme Court refinements; the English psychiatric-injury rules resonate in motor-accident and compensation jurisprudence without exact parallel.",
    },
  ],
  severityScales: [
    {
      name: "The four-abilities assessment",
      fullName: "Grisso–Appelbaum functional capacity framework",
      measures: "The bedside quartet (understand, retain, weigh and communicate) tested for this decision, at this time; qualitative, never scored.",
      ranges: [],
      indianNote: "No cut-offs exist and none are invented. The framework is a structured judgement documented in prose, the way courts and the MHA 2017's review machinery read it.",
    },
    {
      name: "The best-interests checklist",
      fullName: "MCA 2005 statutory checklist (paraphrased principles)",
      measures: "The decision process for the person who lacks capacity: the elements the decision-maker must be able to show were considered.",
      ranges: [],
      indianNote: "The same logic travels: the MHA 2017's advance directives and nominated representatives carry the person's wishes into the decision; the substituted-judgement tier before best interests is reached for.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Incapacity versus the unwise decision", distinguishingFeatures: "The eccentric, risky or offensive outcome with the process intact: understanding, appreciation, reasoning and expression all demonstrable.", keyDifferentiator: "The law separates outcome from process: people are entitled to unwise decisions made by acceptable reasoning; only the defective process establishes incapacity." },
    { condition: "Incapacity versus the acute confusional state", distinguishingFeatures: "Fluctuating attention, day-night reversal, the positive confusion screen: the assessment made in the storm is not the person's capacity.", keyDifferentiator: "Treat the acute state first and reassess at the best hour; no permanent declaration inside the fluctuation." },
    { condition: "Incapacity versus the unsupported decision", distinguishingFeatures: "The blocked channel (deafness, aphasia, unfamiliar language, unadjusted intellectual disability) with the ability itself intact.", keyDifferentiator: "Supported decision-making first: wait, explain differently, involve the familiar person; the channel fixed before the verdict declared." },
    { condition: "Mental disorder versus legal insanity", distinguishingFeatures: "The clinical diagnosis, however severe, beside the McNaghten test: defect of reason from disease of the mind, not knowing the act's nature and quality or its wrongness.", keyDifferentiator: "Most offending by people with mental disorder involves neither defence; the diagnosis is not the verdict, and disorder often coexists with full responsibility." },
    { condition: "Bad outcome versus negligent care", distinguishingFeatures: "The tragic result beside the responsible body's practice and the care programme's operation.", keyDifferentiator: "Bolam breach and the abandoned plan, not the failure to predict; courts examine the system's operation, not the clinician's clairvoyance." },
    { condition: "Grief versus compensable psychiatric injury", distinguishingFeatures: "Ordinary grief, fear and distress after bereavement or witnessing harm: painful, real, and outside the tort.", keyDifferentiator: "Recognised psychiatric injury only: the impact rule and shockingness deciding the secondary victim's claim (Sion against Tredget)." },
  ],
  management: [
    { category: "assessment", name: "Assess capacity functionally, never by status", description: "Never 'she has dementia, so she cannot', always 'for this decision, at this time, she understands, appreciates, reasons and expresses, or does not'. The four abilities, the decision-specific calibration, the process documented alongside the outcome.", whenToUse: "Every contested decision: refusals, wills, discharges, consents; reassessed whenever the state or the stakes change.", indianContext: "The MHA 2017's presumed capacity makes the same demand in India's idiom: the diagnosis never settles the question; the documented process does." },
    { category: "documentation", name: "Document the best-interests process", description: "When capacity is absent: wishes and beliefs canvassed, participation encouraged, family and carers consulted, the narrowest effective option chosen; the checklist walked, not assumed; no determination merely by age, appearance or behaviour-prompting assumptions.", whenToUse: "From the moment incapacity for a decision is established, and reviewed as capacity fluctuates or returns.", indianContext: "The written record is the cheapest forensic protection in Indian practice: the contemporaneous note the only time machine a courtroom has." },
    { category: "assessment", name: "Prefer supported decision-making", description: "Capacity may fluctuate: wait, explain differently, involve the familiar person; the supported decision that rescues the ability before any substitute decision is reached for.", whenToUse: "The borderline and the blocked-channel assessments: the deaf, the aphasic, the unfamiliar-language, the intellectual-disability patient.", indianContext: "The nominated representative's lawful role in India: support first, substitution only where support fails." },
    { category: "documentation", name: "In reports: the reasoning, not just the conclusion", description: "Describe the four abilities as demonstrated or absent; distinguish clinical opinion from legal verdicts: impaired responsibility is for the trier of fact; the degree-of-impairment opinion offered with its epistemology stated.", whenToUse: "Every expert report: capacity, criminal responsibility, negligence, risk.", indianContext: "The Indian courtroom reads the reasoning the same way: the reconstructed mental state with its sources named; records, informants, interviews." },
    { category: "clinical-governance", name: "In treatment refusals: capacity, statutory provisions, advance statement, in that order", description: "Check capacity first; then the statutory treatment provisions (the section-63-type treatment powers, and in India the MHA 2017's treatment frameworks); then the advance statement: the anorexic refusing food treated under the Act where the refusal is part of the disorder, the competent refusal respected (the Bland-era line, Bouvia's respect).", whenToUse: "Every refusal of food or life-sustaining treatment: the order itself the protection against both the unlawful override and the unlawful neglect.", indianContext: "The MHA 2017's advance directives and nominated representatives enter the sequence at the third step: the patient's written wishes standing in the room." },
    { category: "clinical-governance", name: "In risk work: the care programme is the legal protection", description: "Hill and Clunis teach that systems, not predictions, are what courts judge: the written, communicated, followed care plan; relapse-prevention planning, the appointed carer contact, medication supervision arrangements, the crisis card.", whenToUse: "Every discharge of a patient with a history of violence or significant risk, before the patient leaves the building.", indianContext: "The Indian district hospital's bare discharge (diagnosis and prescription, no plan) is exactly the failure the Clunis logic audits: the written plan the practical shield and the genuine protection." },
  ],
  safety: {
    redFlags: [
      "The refusal of food or life-sustaining treatment in the eating-disorder emergency: capacity, then the statutory treatment provisions, then the advance statement, in that order; never an assumption in either direction",
      "The discharge with a diagnosis, a prescription and no plan: the Clunis window: relapse-prevention planning, the appointed carer contact, medication supervision arrangements and the crisis card written before the patient leaves",
      "Capacity assessed inside the storm: the delirious or psychotic fluctuation that makes the single assessment unrepresentative: treat the state first, assess at the best hour",
      "The suspected coercion or undue influence: a legal, not medical, question: witnessed assessment, contemporaneous documentation, and referral back to the solicitor",
      "The patient who attempts suicide and faces prosecution: s.115's logic (MHA 2017): care, not punishment; the protection-versus-punishment theme in one line",
      "The identified potential victim. Palmer's specificity: risk to an identifiable person changes the duty question; the care plan must carry it, communicated to those who need to know",
    ],
    urgentGuidance:
      "The order of operations when a contested decision cannot wait: (1) treat the acute state that makes assessment unreliable (the delirium, the psychosis, the metabolic storm) capacity is reassessed at the best hour, not declared in the worst; (2) test the four abilities for THIS decision and document the process alongside the outcome; (3) if capacity is absent: known wishes first (advance statements, past and present wishes, beliefs and values), then the best-interests checklist with the family and carers consulted and participation encouraged; (4) the refusal of food or life-sustaining treatment: capacity, statutory treatment provisions, advance statement, in that order; (5) no discharge of a violence-history patient without the written, communicated, followed plan (the Clunis discipline); (6) the contemporaneous record made as events unfold: the documentation that is both the practical shield and the genuine protection.",
  },
  drugLinks: [],
  contentGaps: [
    "No KYP drug lesson is linked. This is a legal-concept course and the note assigns no medication a clinical role; the medication-supervision arrangements of the Clunis-type care plan are taught here as systems and documentation disciplines, never as a pharmacology route; route never invented.",
    "The Mental Healthcare Act 2017 has no standalone KYP statute course. Its principles are taught here as the note's India lens (flagged as non-Oxford context), not duplicated.",
    "Fitness to plead and the infanticide provisions are pointed to, not taught: the note itself assigns them to the offending chapters (the Psychiatry & Offending and Homicide courses, this migration's forensic siblings).",
    "No risk-assessment instrument content: the note's lesson is that courts judge care-programme substance, not prediction scores; no structured instruments are taught and no numbers invented here.",
  ],
  patientGuide: {
    whatIsIt:
      "Mental health law is the set of rules that answers three questions about every person with a mental illness. First: can she decide for herself? The law's answer is that a diagnosis never decides by itself. The question is whether she can understand, retain, weigh and communicate the particular decision in front of her, at the time it must be made. Someone with dementia may be perfectly able to make a will and, the same week, unable to manage her medicines: the law looks at each decision separately, and it protects even unwise choices made with sound reasoning. Second: can she be held responsible for what she did? Mental illness can sometimes remove the blame the law requires (or reduce murder to manslaughter when responsibility was substantially impaired) but most offending by people with mental illness involves neither; illness and full responsibility usually live together. Third: who must answer when things go wrong? Doctors and hospitals are judged on whether they followed a responsible standard and a proper care plan, never on whether they could predict the future.",
    whatCausesIt:
      "These questions arise because illnesses of the mind can affect the abilities decisions need (understanding information, appreciating it for oneself, weighing it up, expressing a choice) and because society has historically answered with categories (minors, the 'feeble-minded', the married) that silenced people wholesale. Modern law replaced the categories with the individual test, and India's Mental Healthcare Act 2017 went further: it presumes capacity, lets people record advance directives about their future care, and appoints a nominated representative to support (not replace) their decisions.",
    symptoms:
      "The questions come up at recognisable moments: when someone refuses treatment the family believes is essential; when a new will disinherits a child and the family asks whether the illness explains it; when confusion comes and goes with a fever or an infection and nobody knows which answer is the real one; when someone with a serious illness is arrested and the court asks what their mind was doing at the time; and after violence, when the family of the person hurt asks who is responsible for a discharge that had no plan.",
    treatment:
      "The lawful practice is a discipline, not a drug. Assess the specific decision, never the label. Where capacity fails, ask first what she would have chosen (her written wishes, her values, her past statements), and only then what is in her best interests, with her participating as far as possible, her family consulted, and the least restrictive option chosen. In India, record an advance directive and appoint a nominated representative while well; at discharge, insist on a written care plan: the follow-up date, the carer contact, the medication supervision, the crisis card. After a suicide attempt, the law's answer is care, not prosecution.",
    selfHelp: [
      "Write the wishes down early: an advance directive (MHA 2017) recording treatment preferences while the person is well; the strongest voice in later decisions.",
      "Nominate a representative early and formally: the person trusted to support decisions, not to take them over.",
      "Ask for the discharge plan in writing: the follow-up date, the medicines plan, the person to call in crisis; a discharge with a prescription alone is the failure the courts audit.",
      "Keep the contemporaneous diary: what was understood, decided and refused, dated on the day: the family's record becomes the courtroom's evidence.",
      "Ask for the capacity assessment to be repeated at the best hour of the day when confusion fluctuates: an assessment in the storm is not the person's answer.",
      "Use the unwise-decision right kindly: the right to make choices others question is the protection that will be needed most one day.",
    ],
    whenToSeekHelp: [
      "A refusal of food or of life-sustaining treatment: same-week psychiatric review: the capacity question, the treatment law and the written wishes must be checked in order",
      "Rapidly changing confusion with a fever or infection: the capacity answer is suspended until the acute state is treated",
      "A discharge with no follow-up plan for someone with a violence history or a severe relapse pattern. Ask for the written plan before leaving",
      "Any suspicion that a will, sale or gift was coerced: a witnessed assessment and a solicitor's referral (a legal question, not a medical verdict)",
      "A suicide attempt in the family: medical care first; prosecution is not the system's answer (s.115, MHA 2017)",
      "The family member carrying all of this: the caregiver's own exhaustion is a clinical problem with its own help line",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free): the national tele-mental-health line for families, crises and the caregiver's own exhaustion",
      "The district hospital psychiatry OPD and the District Mental Health Programme: the admission review and aftercare tier the MHA 2017 machinery runs on",
      "The advance-directive and nominated-representative registration route: ask the treating team for the current procedure and the forms",
      "The written care-plan and crisis-card templates: ask at the treating centre; the family's copy is the protection",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "The Mental Healthcare Act 2017 (MHA 2017): the rights-based replacement of the Mental Health Act 1987: presumed capacity, advance directives and nominated representatives (India's statutory versions of the substituted-judgement logic), independent admission reviews, the prohibitions on chaining and unmodified ECT, and s.115's decriminalisation of attempted suicide. Around it: guardianship under the National Trust Act (intellectual and developmental disabilities), the RPwD Act's consent-and-restraint jurisprudence, and the BNS unsoundness-of-mind provisions with their diminished-responsibility analogues; functional in aspiration, patchy in application. Flagged honestly as the note's India lens: local counterpart, not Oxford chapter content.",
    systemContext: "The Indian district hospital: the patient discharged with a diagnosis and a prescription and no plan (this course's second case); the psychiatry OPD, the DMHP tier, the medical officer holding the admission paperwork and the review the 2017 Act demands. The Erwadi-chaining legacy that made the Act's humane provisions necessary still shapes what families expect the law to be for, which is why the rights-based machinery is taught as practice, not decoration.",
    programmeContext: "The District Mental Health Programme as the delivery spine; the 2017 Act's procedural safeguards operating inside it: the independent admission reviews, the advance-directive registration machinery, the nominated representative; the National Trust and RPwD guardianship routes for intellectual disability; the BNS's unsoundness-of-mind interface for the criminal door.",
    costConsiderations: "The protections this course teaches cost nothing to write: the documented capacity assessment, the best-interests process, the written care plan, the crisis card; documentation is the cheap medicine of forensic psychiatry. The note gives no cost figures and none are invented here; the expensive failures are the undocumented ones (the uncommunicated plan, the undischarged statutory duty) which no budget line repairs after the fact.",
    culturalConsiderations: "The joint family as the decision-making unit, meeting the Act's individual-rights machinery: the nominated representative the law's recognition of the family role families already play; the guardianship culture and its risk of substituting convenience for support; the marriage-and-property anxieties around capacity (the unwise will's Indian audience, and the coercion fears that rightly accompany it); Erwadi's chains as the national memory that made rights-based law necessary; and the s.115 shift: attempted suicide met with care where it was once met with prosecution.",
    patientCounselling: [
      "The capacity script: 'The diagnosis does not decide, for this decision, today, we test what she can understand, hold in mind, weigh and say; the answer is written down, and it can change with her condition.'",
      "The unwise-decision script: 'The law protects her right to make choices we might question. What it does not protect is a broken reasoning process; our job is to test the process, not to grade the choice.'",
      "The best-interests script: 'Where she cannot decide, we ask first what she would have chosen (her written wishes, her values) and only then weigh what is best, with her participating as far as she can and the family consulted.'",
      "The advance-directive script: 'While she is well, write the treatment wishes down and nominate a representative; the strongest voice in the room on the day she cannot speak.'",
      "The care-plan script: 'The discharge never happens without the written plan; the follow-up date, the carer contact, the medicines supervision, the crisis card; that plan is both the treatment and the legal protection.'",
      "The s.115 script: 'A suicide attempt brings care, not prosecution. The law's own words; the family's energy goes to the treatment, not the defence.'",
    ],
  },
  decisionPath: {
    title: "The contested decision: the lawful sequence",
    nodes: [
      {
        id: "start",
        question: "A decision is contested: the patient's choice alarms the team or the family. First: the state she is in.",
        branches: [
          { label: "Fluctuating, confused, acutely unwell", next: "delirium-storm" },
          { label: "The psychiatric disorder is active but not acute", next: "active-disorder" },
          { label: "A refusal of food or life-sustaining treatment", next: "refusal-emergency" },
          { label: "Stable; the decision itself is what is contested", next: "capacity-gate" },
        ],
      },
      {
        id: "delirium-storm",
        question: "The acute state that makes any single assessment unrepresentative.",
        recommendation: "Treat the acute state first: the capacity question is reassessed at the best hour, not declared in the worst; no permanent determination inside the fluctuation; the treatable causes (the Delirium course's full account) hunted with the same energy as the answer.",
      },
      {
        id: "active-disorder",
        question: "The disorder is active (psychosis, depression, the unwell brain) but the decision cannot simply wait for recovery.",
        recommendation: "Prefer supported decision-making: wait where possible, explain differently, involve the familiar person; the four abilities tested through the support, not around it; the disorder's effect on THIS decision documented specifically, never assumed from the diagnosis.",
      },
      {
        id: "refusal-emergency",
        question: "The anorexic refusing food; the refusal of life-sustaining treatment.",
        recommendation: "The sequence in order: capacity first (the four abilities, this decision); then the statutory treatment provisions (the section-63-type powers in England; the MHA 2017 treatment frameworks in India: treatment under the Act where the refusal is part of the disorder); then the advance statement: the competent refusal respected (the Bland-era line, Bouvia's respect), the incompetent one treated lawfully.",
      },
      {
        id: "capacity-gate",
        question: "Run the four abilities for THIS decision, at THIS time: understand, retain, weigh, communicate.",
        branches: [
          { label: "All four demonstrated (however unwise the outcome)", next: "capable-unwise" },
          { label: "One or more abilities defective", next: "incapacity-gate" },
          { label: "Borderline, fluctuating, or the channel blocked", next: "support-gate" },
        ],
      },
      {
        id: "capable-unwise",
        question: "The eccentric, risky or offensive outcome with the process intact.",
        recommendation: "Capacity holds: an unwise outcome is not proof of an unacceptable process; the reasoning documented (what she understood, appreciated, weighed and expressed), the decision hers; the coercion question referred to the solicitor where raised (a legal, not medical, question).",
      },
      {
        id: "support-gate",
        question: "The abilities cannot be tested, or the answer changes by the hour.",
        branches: [
          { label: "Support arranged, re-test", next: "capacity-gate" },
          { label: "Support exhausted; the decision cannot wait", next: "incapacity-gate" },
        ],
      },
      {
        id: "incapacity-gate",
        question: "Capacity absent for this decision. What is known about her wishes?",
        branches: [
          { label: "Known: advance statement, past wishes, beliefs and values", next: "substituted-path" },
          { label: "Nothing known", next: "best-interests-path" },
        ],
      },
      {
        id: "substituted-path",
        question: "Substituted judgement: what this person would have chosen.",
        recommendation: "The known wishes govern: the advance statement, the written preferences, the beliefs and values canvassed from those who knew her; what the person wanted IS in her best interests; the reasoning documented as the person's, not the team's.",
      },
      {
        id: "best-interests-path",
        question: "Best interests through the checklist.",
        recommendation: "Not determined merely by age, appearance or behaviour-prompting assumptions; regaining capacity considered; participation permitted and encouraged; life-sustaining decisions untainted by a desire to bring about death; the past and present wishes, beliefs and values weighed; the views of anyone named, carers, attorneys and court-appointed deputies taken: the narrowest effective option chosen, the decision challengeable.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "'She has dementia, so she cannot consent'",
      why: "Status thinking: the exact error the functional revolution abolished; the presence of mental disorder is not incapacity, and the woman who lacks capacity for complex finances may retain it fully for choosing her carer or accepting a blood test.",
      correction: "The functional test: for this decision, at this time, the four abilities, never the diagnosis as the answer.",
    },
    {
      mistake: "'The decision is foolish: that proves incapacity'",
      why: "The law separates outcome from process: people are entitled to unwise decisions made by acceptable reasoning; grading the choice is not testing the ability.",
      correction: "Only a defective process (not understanding, not appreciating, unable to weigh, unable to express) establishes incapacity: the eccentric testator's will stands on its reasoning.",
    },
    {
      mistake: "Treating capacity as global and permanent",
      why: "Competence is decision-specific and time-specific: it fluctuates with the acute states and varies with the stakes; a single verdict made once is the error in both directions.",
      correction: "Each contested decision assessed afresh; reassessment whenever the state, the treatment or the stakes change.",
    },
    {
      mistake: "Declaring incapacity inside the acute storm",
      why: "The delirious or floridly psychotic patient's performance in the worst hour is not her capacity. The assessment is unrepresentative by construction.",
      correction: "Treat first, reassess at the best hour; supported decision-making before any declaration.",
    },
    {
      mistake: "Answering 'who is responsible?' with either 'no one could predict' or 'the doctor should have known'",
      why: "Both miss the courts' actual question: not clairvoyance but the identifiable duty and the system's operation; the care programme written, communicated and followed, or abandoned.",
      correction: "Hill, Palmer and Clunis frame it: no general duty to everyone, no duty to unidentified victims, but a duty owed to the patient himself; the written plan both the shield and the protection.",
    },
    {
      mistake: "Writing the conclusion without the reasoning in expert reports",
      why: "The trier of fact decides impairment; the degree-of-impairment opinion is legally demanded but epistemologically fragile: a bare conclusion hides both facts.",
      correction: "Describe the reasoning: the four abilities as demonstrated or absent, the reconstructed mental state with its sources named, the clinical opinion distinguished from the legal verdict.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Status versus functional approaches to capacity, one historical example each: the mature minor (Gillick, 1985) against the Sexual Offences Act 1956 'defective', whose consent was void however competent she might actually be.",
        "The four abilities (Grisso and Appelbaum) and their decision-specific nature. Banks v Goodfellow for wills: the business, the property, the beneficiaries, the manner of distribution, at a will-writer's level.",
        "The unwise-outcome rule: an unwise outcome is not proof of an unacceptable process.",
        "The best-interests checklist: no assumption-based determinations; regaining capacity; participation; life-sustaining neutrality; wishes, beliefs and values; consultation of named persons, carers, attorneys, deputies.",
        "The four doors of criminal liability, with the diminished-responsibility formulation and its trier of fact.",
        "Bolam with the logical-analysis exception, and why the objective standard applies even to the mentally disordered defendant (Nettleship).",
      ],
      practical: [
        "Demonstrate a capacity assessment for a contested decision: the four abilities tested and documented with the process, not just the outcome.",
        "Take the reconstructed forensic history (records, informants, interviews) and present a mental state at the time of the offence with its epistemology stated.",
      ],
      longAnswer: [
        "An 84-year-old man with mild dementia proposes a new will disinheriting his son: discuss the assessment of testamentary capacity and its legal framework (the evergreen essay, the functional test, Banks v Goodfellow, the unwise-outcome rule, undue influence as a legal question).",
        "Mental disorder and criminal responsibility: the four doors, the McNaghten rules, diminished responsibility, and the intoxication distinction.",
        "Negligence in psychiatric practice: duty, breach (Bolam), causation and the rules of compensable psychiatric injury.",
      ],
    },
    neetPg: {
      highYield: [
        "THE FUNCTIONAL QUARTET: this decision, at this time, four abilities (understanding, appreciation, reasoning, expressing a choice (the bedside gloss: understand, retain, weigh, communicate)) the single most examinable concept.",
        "THE BEST-INTERESTS CHECKLIST (MCA s.4, paraphrased): no age/appearance/behaviour assumptions; regaining capacity; participation; life-sustaining neutrality; past and present wishes, beliefs and values; named persons, carers, attorneys and court-appointed deputies consulted.",
        "THE FOUR DOORS: mental element (complete defence if absent); insanity (McNaghten 1843, defect of reason from disease of the mind, nature and quality or wrongness; no irresistible impulse); diminished responsibility (abnormality of mind substantially impairing mental responsibility; murder to manslaughter; the trier of fact); intoxication (specific intent only).",
        "THE INTENT LISTS: specific intent; murder, theft, burglary (intoxication may negate); basic intent: manslaughter, rape, unlawful wounding (the recklessness of getting drunk supplies the guilt).",
        "NEGLIGENCE: the Caparo triad (foreseeability, proximity, just-and-reasonable); Bolam (the responsible body of medical opinion) with the logical-analysis exception; the 'would have consented anyway' causation defence.",
        "PSYCHIATRIC INJURY: primary victims (physically injured or within foreseeable range) versus secondary victims (proximity, close tie of love and affection, rescuers); the impact rule (unaided senses, sudden, shocking to a person of ordinary fortitude); recognised psychiatric injury only: grief and distress not compensable; acute stress reaction compensable (modestly); creeping trauma (the growth-hormone/CJD claims) decided on foreseeability and proximity where the claimant group is small and identifiable.",
        "SION VERSUS TREDGET: the father's slow 14-day watch failed; the chaotic delivery's sudden shock succeeded: shockingness is the differentiator.",
        "THE OBJECTIVE STANDARD: Nettleship v Weston (the learner must drive like the competent driver); Mansfield v Weetabix at the edges (no liability where the defendant could not reasonably have known of his condition; carers who do know may assume the risk); tort compensates victims rather than blames wrongdoers.",
        "THE DUTY LINEAGES: Hill (no general duty to individual victims to catch a specific criminal); Palmer v Tees (no duty to unidentified future victims, the palpable test failing on specificity); Clunis (the duty owed to the patient himself, failed systemically, the care programme); Osman (blanket immunity violates Article 6).",
        "THE INDIAN CORNER (flagged as local law): MHA 2017; presumed capacity, advance directives, nominated representative, s.115 suicide decriminalisation, ECT safeguards; functional capacity principles; BNS unsoundness-of-mind provisions.",
      ],
      pyqConcepts: [
        "The decision-specific functional test: the recurring stem in every capacity MCQ.",
        "The diminished-responsibility formulation: the short-answer magnet; the trier of fact as the twist.",
        "Sion versus Tredget: the shockingness contrast as the single-best-answer discriminator.",
        "Clunis: liability through the duty owed to the patient, not to the world.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "An 84-year-old man with mild dementia and a difficult family proposes a new will leaving the bulk of his estate to his caretaker nephew and disinheriting his son; the family's lawyer requests a capacity assessment expecting the dementia to settle it: he recites the property accurately, knows his son exists and what disinheritance means, appreciates the consequences for the relationship, and reasons; 'my son visited twice in ten years; he has cared for me daily for four years': polarised, perhaps, but reasoning nevertheless. The answer: testamentary capacity present at Banks v Goodfellow's will-writer level; the unwise outcome is not the unacceptable process; the witnessed assessment and contemporaneous documentation made; the undue-influence question referred back to the solicitor as the legal question it is.",
        "A man with schizophrenia is discharged from an Indian district hospital with a diagnosis, a prescription and no follow-up plan; two months later, off medication and unwell, he pushes a stranger on a platform, and the victim's family demands to know who is responsible while the hospital answers that 'psychiatrists cannot predict': the lawful-practice audit the case forces; was there a statutory duty to the patient (the Indian discharge and aftercare norms)? was a care plan made, communicated and followed (the Clunis logic)? was the risk to identifiable persons ever flagged (the Palmer specificity)? And the clinical corrective: relapse-prevention planning, an appointed carer contact, medication supervision arrangements and a crisis card, the systemic protections the law ultimately judges.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Capacity is decision-specific and time-specific: a diagnosis alone never decides it.",
        "Unwise decisions made by acceptable reasoning are lawful capacity.",
        "Diminished responsibility converts murder to manslaughter; the trier of fact decides the impairment.",
        "Intoxication is a defence only for crimes of specific intent (murder, theft, burglary).",
        "Bolam: the responsible body of medical opinion; subject to logical analysis.",
        "Nettleship v Weston: the objective standard applies even to the mentally disordered defendant.",
        "MHA 2017 s.115: attempted suicide decriminalised in India; care, not prosecution.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The capacity report that survives cross-examination documents the process, not just the outcome: what she understood, appreciated, weighed and expressed, in her words where possible.",
        "The degree-of-impairment opinion is legally demanded and epistemologically fragile: state both facts in the report: the opinion given with its reasoning, the verdict reserved for the trier of fact.",
        "The MCA's design insight is the exam's essay insight: no initial judicial trigger, universal challengeability, most decisions properly made by carers, rights protected by access to court rather than routing every decision through it.",
        "The care programme is both the clinical and the legal protection. Hill and Clunis teach that courts judge systems, not predictions; the written, communicated, followed plan is the practice.",
        "The identified victim changes everything (Palmer): risk to an identifiable person converts a general anxiety into a specific duty; the care plan must carry it, and the people who need to know must know.",
        "In the treatment-refusal emergency the order itself is the protection: capacity, statutory treatment provisions, advance statement, in that order, documented at each step.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The unwise will",
      presentation: "The family's lawyer sends an 84-year-old's new will for 'the dementia to settle', and finds a man who knows exactly what he is doing.",
      initialPresentation: "An 84-year-old man with mild dementia and a difficult family was referred by the family's solicitor for a capacity assessment after proposing a new will that leaves the bulk of his estate to his caretaker nephew and disinherits his son; the lawyer's referral letter expected the dementia diagnosis to settle the question on its own.",
      history: "Mild dementia diagnosed in the prior years, stable on cognitive testing between visits; a difficult family with long-standing estrangement; the nephew's four years of daily care of the household and the person against the son's two visits in ten years: the patient's own account, volunteered with dates and without prompting; no acute illness, no medication change, no fluctuation.",
      examination: "The four abilities tested at Banks v Goodfellow's will-writer level: he understands he is making a will and what he owns, reciting the property accurately; he knows his son exists and understands what disinheritance means; he appreciates the consequences for the relationship ('he will be hurt, and he will contest this'); and he reasons: 'my son visited twice in ten years; Ravi has cared for me daily for four years': polarised, perhaps, but reasoning nevertheless. The cognitive screen confirms mild dementia; the abilities for THIS decision are intact.",
      diagnosis: "Testamentary capacity present: the mild dementia does not decide; the decision-specific functional test does. The same man might fail a complex financial decision and pass this will.",
      management: "A witnessed assessment with contemporaneous documentation of the process and the outcome: the reasoning quoted, not summarised; a separate check for undue influence explicitly referred back to the solicitor as the legal, not medical, question it is.",
      outcome: "The will stands on its process; the safeguarding note records the four abilities as demonstrated and the reasoning verbatim, so that any later challenge meets the contemporaneous record rather than reconstruction.",
      teachingPoints: [
        "Capacity is decision-specific: this man might fail a treatment decision and pass a will. The test is always this decision, at this time.",
        "The four abilities are calibrated to the decision's demand. Banks v Goodfellow's will-writer level, not a lawyer's.",
        "The unwise outcome is not the unacceptable process: eccentricity is not incapacity, and the disinheritance is lawful reasoning.",
        "Undue influence is a legal question: referred to the solicitor, never adjudicated in the clinic.",
        "The contemporaneous record is the protection: witnessed, dated, quoting the reasoning.",
      ],
    },
    {
      title: "The discharged patient and the stranger",
      presentation: "Two months after a discharge with nothing but a diagnosis and a prescription, a stranger is pushed on a platform, and the question is not whether psychiatrists can predict.",
      initialPresentation: "A man with schizophrenia was discharged from an Indian district hospital with a diagnosis, a prescription and no follow-up plan; two months later, off medication and unwell, he pushed a stranger on a railway platform, and the victim's family demanded to know who was responsible while the hospital's defence was that 'psychiatrists cannot predict'.",
      history: "Schizophrenia with prior relapses on medication cessation; the index admission stabilised and ended with the bare discharge: a diagnosis, a prescription, no follow-up plan, no carer identified, no crisis arrangements; the medication stopped within weeks (no supervision arrangement existed), the unwellness accumulating over the two months to the platform.",
      examination: "The examination the case forces is the lawful-practice audit rather than the mental state: was there a statutory duty to the patient (the Indian discharge and aftercare norms)? was a care plan made, communicated and followed (the Clunis logic)? was the risk to identifiable persons ever flagged (the Palmer specificity)? Each answer lying in the record, not in anyone's foresight.",
      diagnosis: "The question is not prediction but the duty owed, to the patient himself and through him to those his relapse endangered; the courts' location of liability in identifiable relationships and systemic statutory duties.",
      management: "The clinical corrective written after the fact and owed before it: relapse-prevention planning, an appointed carer contact, medication supervision arrangements and a crisis card; plus the written, communicated care programme that carries them; the Clunis discipline applied in the Indian district hospital.",
      outcome: "The case teaches what the courts examine: the system's operation, not the clinician's clairvoyance; the documented, followed plan is simultaneously the practical shield and the genuine protection.",
      teachingPoints: [
        "Courts examine the system's operation: the care programme written, communicated, followed; never the prediction.",
        "Hill and Clunis frame the duty question: no general duty to everyone, but a duty owed to the patient himself, failed systemically.",
        "Palmer's specificity: the identified victim changes the question; risk to identifiable persons belongs in the plan.",
        "Documentation is the practical shield, and the genuine protection: the contemporaneous record is the only time machine a courtroom has.",
      ],
    },
  ],
  clinicalPearls: [
    "Three questions, one principle: can she decide (capacity), can she be held responsible (criminal liability), who must answer when things go wrong (negligence and the duties of authorities); each answered functionally, individually, case-by-case.",
    "The presence of mental disorder is not incapacity: the functional revolution replaced the status categories (minority, the 1956 'defective', marital status) with this decision, at this time.",
    "The four abilities: understand, retain, weigh and communicate; formally, understanding, appreciation, reasoning and expressing a choice (Grisso and Appelbaum).",
    "An unwise outcome is not proof of an unacceptable process: the eccentric testator may lawfully disinherit dependants.",
    "Banks v Goodfellow calibrates the test to the decision: wills demand the business, the property, the beneficiaries and the manner of distribution, at a will-writer's level, not a lawyer's.",
    "Where wishes are known, they govern: what the person wanted IS in her best interests; substituted judgement first, best interests where nothing is known.",
    "The MCA's design wager: no initial judicial trigger, but universal challengeability; carers decide properly, courts police the exceptions.",
    "Mental disorder enters criminal law through four doors: the mental element, McNaghten insanity, diminished responsibility, intoxication, and most offending by people with mental disorder uses none of them.",
    "Diminished responsibility converts murder to manslaughter; the impairment is decided by the trier of fact, on expert-informed evidence: the degree-of-impairment opinion legally demanded and epistemologically fragile.",
    "Intoxication excuses only specific intent (murder, theft, burglary), for the basic-intent crimes (manslaughter, rape, unlawful wounding), the recklessness of getting drunk supplies the guilt.",
    "Bolam sets the professional standard (the responsible body of medical opinion) unless the practice fails logical analysis; with drug-risk information the courts drift stricter.",
    "Nettleship: the learner must drive like the competent driver; tort compensates victims rather than blames wrongdoers, so the objective standard holds even for the mentally disordered defendant.",
    "Hill, Palmer, Clunis, Osman: no general duty to protect everyone from everyone; liability lives in identifiable relationships and abandoned care programmes: systems, not clairvoyance.",
  ],
  highYieldSummary: [
    "The frame: mental health law answers three questions (capacity (can this person decide for herself), criminal liability (can she be held responsible), and negligence/duty (who must answer when things go wrong)) and the modern answer to all three is functional, individual and case-by-case, never status-based; protection and rights are not opponents, and good law protects the vulnerable by respecting their personhood.",
    "Capacity: the status-to-function shift; minors could not consent until Gillick (1985) recognised the mature minor; the Sexual Offences Act 1956 'defective' could not consent however competent she might actually be, with the marriage-lawful-but-consent-void absurdity. The functional test: competence relates to the particular decision, at the particular time it must be made, through the four abilities of Grisso and Appelbaum (understanding, appreciation, reasoning, expressing a choice (the bedside gloss: understand, retain, weigh, communicate)) calibrated to the decision (Banks v Goodfellow's will-writer level) and protected by the unwise-outcome rule.",
    "The MCA 2005 architecture: the best-interests checklist (no determination merely by age, appearance or behaviour-prompting assumptions; regaining capacity considered; participation encouraged; life-sustaining decisions untainted by a desire to bring about death; past and present wishes, beliefs and values weighed; named persons, carers, attorneys and deputies consulted); the too-personal exclusions (marriage, consent to sex); independent mental capacity advocates where carers' views are unavailable; the Court of Protection's preference for court decisions over deputies; and the central design: no initial judicial trigger, universal challengeability. Substituted judgement where wishes are known (the old 'responsible medical opinion' version of best interests rightly criticised for professionalising a whole person's interests; the judicial refinements: only one option truly best, and social, welfare and emotional factors counted, not merely medical ones).",
    "Criminal liability: the four doors: (1) the mental element, a complete defence if disorder shows it absent; (2) insanity (McNaghten 1843: defect of reason from disease of the mind, not knowing the nature and quality of the act or that it was wrong, rarely used, unable to accommodate irresistible impulse); (3) diminished responsibility (abnormality of mind (arrested or retarded development, inherent causes, disease or injury) substantially impairing mental responsibility; murder to manslaughter; the trier of fact deciding impairment; originally an anti-death-penalty provision; now reaching impulse-resistance arguments McNaghten excludes); (4) intoxication: specific intent only (murder, theft, burglary), the basic-intent crimes keeping the guilt because the recklessness of voluntary intoxication supplies it.",
    "Negligence and psychiatric injury: the skeleton (duty, breach, causation, damage) with the Caparo triad; Bolam's responsible-body standard and the logical-analysis exception; the stricter drift on drug-risk information; causation's 'would have consented anyway' defence. Psychiatric injury alone: primary victims (physically injured or within foreseeable physical-injury range) versus secondary victims (close proximity, close tie of love and affection, or rescuers); the impact rule (the event striking the unaided senses, sudden, shocking to a person of ordinary fortitude); Sion (the slow 14-day watch failed) versus Tredget (the chaotic delivery succeeded); ordinary grief and distress not compensable, recognised psychiatric injury only, acute stress reaction compensable (modestly); creeping trauma (the growth-hormone/CJD claims) decided on foreseeability and proximity where the claimant group is small and identifiable: the floodgates and fraud fears unsupported by empirical evidence.",
    "The objective standard and the duties of authorities: Nettleship v Weston (the learner held to the competent driver, a duty tailored to the actor 'has no place in the law of tort'); Mansfield v Weetabix at the edges (no liability where the defendant could not reasonably have known of his condition; carers who do know of instability may assume its risk); Hill (no general police duty to individual victims to catch a specific criminal); Palmer v Tees (no duty to unidentified future victims of identified patients, the palpable test failing on specificity); Clunis v Camden and Islington (the duty owed to the patient himself to provide care and aftercare, the victim's claim proceeding through the patient's person, the case turning on systemic failure to follow the care programme); Osman (the European Court: blanket immunity violates Article 6).",
    "The Indian lens (the note's flag, not Oxford's chapter): the MHA 2017; presumed capacity, advance directives and nominated representatives (the statutory substituted-judgement logic), independent admission reviews, the prohibitions on chaining and unmodified ECT, and s.115's decriminalisation of attempted suicide; guardianship through the National Trust Act and the RPwD Act; Bolam retained in Indian negligence with Supreme Court refinements; the BNS unsoundness-of-mind interface and the Erwadi-chaining legacy. The practical translation for Indian clinicians: the functional capacity question, the documented best-interests process, the advance-directive and nominated-representative machinery, and the Clunis-style discipline of written, followed care plans. Indian law's answers to the same three questions.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "mhl-quiz-1",
      question: "The functional approach to capacity holds that competence:",
      options: ["Depends on diagnostic status", "Is global and stable across decisions", "Relates to the particular decision to be made, at the particular time it must be made", "Ends with any psychiatric diagnosis"],
      correctIndex: 2,
      explanation: "Decision-specific and time-specific testing — the revolution that replaced status categories like minority or 'defective' status.",
      afterSectionId: "mechanism",
    },
    {
      id: "mhl-quiz-2",
      question: "The four abilities identified by Grisso and Appelbaum:",
      options: ["Understanding, appreciation, reasoning, expressing a choice", "Reading, writing, arithmetic, orientation", "Memory, attention, language, visuospatial skill", "Obedience, docility, gratitude, insight"],
      correctIndex: 0,
      explanation: "Understanding the information, appreciating its personal application, reasoning with it, and communicating a stable choice — the core of treatment-consent capacity, glossed at the bedside as understand, retain, weigh, communicate.",
      afterSectionId: "diagnosis",
    },
    {
      id: "mhl-quiz-3",
      question: "Under the MCA 2005 best-interests approach, the decision-maker must NOT:",
      options: ["Encourage the person's participation", "Consider past and present wishes and beliefs", "Determine the matter merely on the basis of age, appearance, or behaviour-prompting assumptions", "Consult carers and attorneys"],
      correctIndex: 2,
      explanation: "The statutory checklist explicitly forbids assumption-based determinations while mandating the participatory and consultative steps.",
      afterSectionId: "diagnosis",
    },
    {
      id: "mhl-quiz-4",
      question: "Diminished responsibility as a partial defence to murder requires:",
      options: ["Any intoxication", "An abnormality of mind (arrested or retarded development, inherent causes, disease or injury) substantially impairing mental responsibility", "A diagnosis of depression", "The victim's consent"],
      correctIndex: 1,
      explanation: "The Homicide Act formulation — decided by the trier of fact on expert-informed evidence; it converts murder to manslaughter and accommodates impulse-resistance arguments that McNaghten excludes.",
      afterSectionId: "diagnosis",
    },
    {
      id: "mhl-quiz-5",
      question: "A secondary victim's claim for psychiatric injury (a parent who witnessed her child's accident) requires, in addition to proximity and a close tie of love and affection:",
      options: ["Nothing further", "A sudden event shocking to a person of normal fortitude, impacting the unaided senses, causing a recognised psychiatric injury", "Physical injury to the claimant", "A prior psychiatric history"],
      correctIndex: 1,
      explanation: "The impact rule and the recognised-injury requirement — Sion (the slow 14-day watch, failed) versus Tredget (the sudden chaos, succeeded).",
      afterSectionId: "differential",
    },
    {
      id: "mhl-quiz-6",
      question: "In Clunis v Camden and Islington, the health authority's liability exposure arose from:",
      options: ["A general duty to protect all citizens from all patients", "Failure in the duty owed to the patient himself — systemic failure to provide the arranged care and aftercare, through which the victim's claim proceeded", "The psychiatrist's poor documentation of a prediction", "Predicting violence insufficiently accurately"],
      correctIndex: 1,
      explanation: "The courts locate liability in identifiable relationships and abandoned statutory duties — care programmes, not clairvoyance.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Contrast status-based with functional approaches to capacity, with one historical example of each.", answer: "STATUS: capacity by category; minors could not consent (until Gillick v West Norfolk, 1985, recognised the mature minor's decision-making); the 'defective' under the Sexual Offences Act 1956 could not consent to sexual activity however competent she might actually be, with the absurd corollary that marriage (competence-assessed at the ceremony) was lawful while the same woman's consent to sexual activity was legally void, disabling even legitimate protective sex education. FUNCTIONAL: competence relates to the particular decision, at the particular time it must be made; the four abilities tested on this decision, now; the presence of mental disorder is not incapacity. The modern synthesis is codified in the Mental Capacity Act 2005; the Indian counterpart in the MHA 2017's presumed capacity. The deep teaching: the shift is from what she IS (a category) to what she CAN DO (an ability, tested).", topic: "Capacity" },
    { question: "Recite the four abilities and explain the decision-specific rule with the wills case.", answer: "THE FOUR ABILITIES (Grisso and Appelbaum): understanding the relevant information; appreciating its application to one's own situation; reasoning with it (weighing); and expressing (communicating) a choice: the bedside gloss running understand, retain, weigh, communicate, retention entering through the appreciating-reasoning route (the material must be held to be used). THE DECISION-SPECIFIC RULE: the abilities demanded vary with the decision. Banks v Goodfellow (1870), the classic wills case, demanded understanding of the business, recollection of the property, knowledge of the natural beneficiaries and the manner of distribution: appreciation and reasoning at a will-writer's level, not a lawyer's. THE PROTECTION: an unwise outcome is not proof of an unacceptable process; the eccentric testator may lawfully disinherit dependants; questionable results are not incapacity.", topic: "Capacity" },
    { question: "Walk the best-interests checklist (MCA s.4, paraphrased) and state when substituted judgement governs instead.", answer: "THE CHECKLIST: do not determine merely by age, appearance, or behaviour-prompting assumptions; consider whether capacity may be regained (and time the decision accordingly); permit and encourage participation; for life-sustaining decisions, no determination tainted by a desire to bring about death; weigh the person's past and present wishes, beliefs and values; and take into account the views of anyone named by the person, carers, attorneys and court-appointed deputies. THE TWO PHILOSOPHIES: paternalistic best interests versus substituted judgement (what this person would have chosen); the modern synthesis holding that what the person wanted IS in her best interests. SUBSTITUTED JUDGEMENT GOVERNS where the wishes are known (past and present wishes, written statements, beliefs and values); best interests is the only available approach where nothing is known. The old 'responsible medical opinion' version (whatever a doctor would approve) was rightly criticised for professionalising a whole person's interests; the judicial refinements: where several acceptable options exist, only one is truly in her best interests, and the calculation includes social, welfare and emotional factors, not merely medical ones.", topic: "Capacity" },
    { question: "Name the four doors through which mental disorder enters criminal liability, and give the diminished-responsibility formulation.", answer: "DOOR ONE: the mental element (mens rea): most serious crimes require intention, recklessness, knowledge or belief; mental disorder may show the defendant lacked it: a complete defence. DOOR TWO: insanity (the McNaghten rules, 1843): defect of reason from disease of the mind, with not knowing the nature and quality of the act or that it was wrong; rarely used, and famously unable to accommodate irresistible impulse. DOOR THREE: diminished responsibility (Homicide Act): 'abnormality of mind (whether arising from a condition of arrested or retarded development of mind or any inherent causes or induced by disease or injury) as substantially impaired his mental responsibility for his acts and omissions in doing or being a party to the killing'; a partial defence converting murder to manslaughter; the impairment decided by the trier of fact, steered by expert evidence (including degree-of-impairment opinions that arguably exceed clinical expertise); its original rationale was avoiding the death penalty, and its current reach includes arguments of incapacity to resist impulse, which McNaghten excludes. DOOR FOUR (intoxication: succeeds only for crimes of specific intent (murder, theft, burglary) and fails for basic-intent crimes (manslaughter, rape, unlawful wounding)) the recklessness of voluntary intoxication itself supplying the mental guilt.", topic: "Criminal liability" },
    { question: "Specific versus basic intent: what can intoxication excuse, and what can it not?", answer: "SPECIFIC-INTENT CRIMES (murder, theft, burglary, wounding with intent): where drink or drugs negate the intent, the defence succeeds, with the fallback that acquittal of the specific-intent offence may still leave conviction of a lesser basic-intent offence. BASIC-INTENT CRIMES (manslaughter, rape, unlawful wounding): the defence fails; the recklessness of becoming voluntarily intoxicated itself supplies the mental element ('the manner of its becoming' is the guilt). The clinical corollary for the expert witness: the drunken offender's mental state is reconstructed at the time of the offence, and the legal question is the intent's existence, not the drunkenness's severity. Related interfaces the note flags onward: fitness to plead and the infanticide provisions for postpartum mothers; the offending chapters' territory.", topic: "Criminal liability" },
    { question: "State the negligence skeleton with Bolam and its exception, and the compensable psychiatric-injury rules.", answer: "SKELETON: duty of care (foreseeability + proximity + just-and-reasonable, per Caparo), breach of the objective reasonable standard, for doctors, the Bolam v Friern Hospital Management Committee (1957) responsible-body-of-medical-opinion test, UNLESS the practice fails logical analysis; causation (including the 'would have consented anyway' defence); and tangible damage, with drug-risk information moving the courts toward a stricter informed-consent standard. PSYCHIATRIC INJURY: physical injury plus psychiatric injury is uncontroversial; psychiatric injury alone is hedged by floodgates and fraud fears the chapter criticises as empirically unsupported. PRIMARY victims: the physically injured, or those within foreseeable physical-injury range. SECONDARY victims: those with close physical proximity to the trauma, a close tie of love and affection, or rescuers; plus the impact rule: the event must strike the unaided senses, be sudden, and shock a person of ordinary fortitude; ordinary grief, fear and distress are not compensable, only recognised psychiatric injury. Sion v Hampstead (the father's slow 14-day watch, not shocking) failed; Tredget v Bexley (the chaotic delivery, sudden, shocking) succeeded; US and Singaporean courts have rejected the shocking-event requirement; creeping trauma (the growth-hormone/CJD contamination claims) is decided on foreseeability and proximity where the claimant group is small and identifiable; acute stress reaction, as a recognised condition, should be compensable (modestly).", topic: "Negligence" },
    { question: "Why are mentally disordered defendants held to the objective reasonable-person standard, and where do the edges flicker?", answer: "THE RULE: the mentally disordered defendant is held to the objective reasonable-person standard. Nettleship v Weston: the learner driver must drive like a competent driver; a duty tailored to the actor 'has no place in the law of tort', because tort compensates victims rather than blames wrongdoers. THE EDGES: Mansfield v Weetabix; no liability where the defendant could not reasonably have known of his condition (the unsuspected hypoglycaemic driver); and carers and professionals who DO know of an instability may sometimes be held to have assumed its risk. The psychiatric teaching: the standard's objectivity is the system's honesty (compensation is not blame) but the assumption edges (what the defendant or the carer could reasonably know) are where the mental disorder re-enters the law through a side door.", topic: "Negligence" },
    { question: "Walk the Hill–Palmer–Clunis–Osman sequence: what duty exists, to whom?", answer: "HILL v CHIEF CONSTABLE OF WEST YORKSHIRE (the Yorkshire Ripper investigation): the police owe no general duty to individual victims to catch a specific criminal; the general duty to protect everyone from everyone does not exist. PALMER v TEES: a discharged patient killed a child known to be in a relationship with him; no duty to UNIDENTIFIED future victims of identified patients; the 'palpable' test failed on specificity. CLUNIS v CAMDEN AND ISLINGTON: a discharged patient stabbed a stranger at a station; the authority owed THE PATIENT HIMSELF a duty to provide care and aftercare under the Mental Health Act, and could be liable to the victim through the patient's person; the case turned on systemic failure to follow the care programme. OSMAN v UNITED KINGDOM: the European Court held that blanket immunity violates Article 6; the Convention pressing against the immunities. THE TEACHING: liability attaches to identifiable relationships and systemic statutory duties, not to a general duty to protect everyone from everyone; courts judge systems (the care programme's substance), not predictions; the European Convention increasingly presses against blanket immunities. The Indian translation: the written, followed, communicated care plan; the MHA 2017 era's answer to the same question.", topic: "The duty lineages" },
  ],
  faqs: [
    { question: "She has dementia: doesn't that mean she can't consent?", answer: "No: capacity is decision-specific and time-specific. She may lack capacity for complex financial decisions while fully retaining it for choosing her carer or accepting a blood test. Assess the four abilities for THIS decision, each time it matters: the diagnosis never settles the question on its own." },
    { question: "His choice is foolish: surely that proves incapacity?", answer: "The law separates outcome from process: people are entitled to unwise decisions made by acceptable reasoning. Only a defective process (not understanding, not appreciating, unable to weigh, unable to express) establishes incapacity." },
    { question: "Who decides for someone who cannot?", answer: "First, what she would have chosen: her wishes, values and written statements (substituted judgement, the known wishes governing). Failing that, best interests through the statutory checklist: participation encouraged, family and carers consulted, the narrowest effective option chosen, and every decision challengeable." },
    { question: "Does mental illness excuse crime?", answer: "It can, through four doors: negating the mental element (a complete defence), the insanity defence (rarely), or diminished responsibility reducing murder to manslaughter where responsibility was substantially impaired. But most offending by people with mental disorder involves neither defence, and disorder often coexists with full responsibility." },
    { question: "Can drunkenness be a defence?", answer: "Only narrowly: so drunk that the specific intent (for murder, theft, burglary) could not be formed, and then the basic-intent alternative remains. For most crimes the recklessness of getting drunk supplies the guilt." },
    { question: "Can we be sued when a patient harms someone?", answer: "Not for failing to predict: possibly for failing to care. Identifiable patients, specific victims and abandoned care plans are where liability lives; the written, followed, communicated plan is both medicine and law." },
    { question: "Can a person with mental illness make a valid will?", answer: "Yes, when the four abilities hold at the will's own level. Banks v Goodfellow sets the testator's bar: understanding the business, recollecting the property, knowing the natural beneficiaries and the manner of distribution; reasoning at a will-writer's level, not a lawyer's. Mild dementia does not disqualify; coercion (undue influence) is the separate legal question referred to the solicitor." },
    { question: "What are advance directives and nominated representatives under India's 2017 Act?", answer: "The MHA 2017's statutory versions of the substituted-judgement logic: the advance directive records a person's treatment preferences while she has capacity, and the nominated representative supports her decisions when illness makes communicating harder; support, not replacement. Both are made while well, registered per the Act's procedure, and honoured in the treatment-refusal sequence after capacity and the statutory treatment provisions have been checked." },
    { question: "Is attempted suicide a crime in India?", answer: "No: the MHA 2017's s.115 decriminalised attempted suicide, mirroring the protection-versus-punishment theme: the person who attempts suicide is to be presumed to be under severe stress and treated, not prosecuted. The family's energy goes to the care, not the court case." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Mental Capacity Act 2005 (England and Wales) — ss 2–4 (the functional test and the best-interests checklist), 27, 30–34, 35–41, 50; the Court of Protection architecture (paraphrased principles)" },
      { source: "Mental Healthcare Act 2017 (India) — presumed capacity, advance directives, nominated representatives, admission safeguards, s.115 (the India lens, flagged as non-Oxford context)" },
      { source: "McNaughten Rules (1843) and Homicide Act 1957, s.2 — the insanity defence and diminished responsibility (as discussed in the source chapter)" },
      { source: "Council of Europe Recommendation 99(4) — the principles on substitute decision-making" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 11.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [],
    reviews: [
      { source: "Grisso T & Appelbaum PS — the four-ability framework for treatment-consent capacity" },
      { source: "Banks v Goodfellow (1870) — the wills-capacity classic; Gillick v West Norfolk and Wisbech AHA (1985) — the mature minor" },
      { source: "Bolam v Friern Hospital Management Committee (1957) — the professional standard; Caparo Industries PLC v Dickman — the duty-of-care triad" },
      { source: "Nettleship v Weston and Mansfield v Weetabix — the objective standard and its edges" },
      { source: "Alcock v Chief Constable of South Yorkshire; White v Chief Constable of South Yorkshire; Page v Smith; Sion v Hampstead; Tredget v Bexley — the psychiatric-injury line" },
      { source: "Hill v Chief Constable of West Yorkshire; Osman v United Kingdom; Palmer v Tees; Clunis v Camden and Islington — the authorities'-duty line" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — the national tele-mental-health line for families, crises and caregivers" },
      { source: "The advance-directive and nominated-representative route under the MHA 2017 — ask the treating team for the current procedure" },
      { source: "The written care-plan and crisis-card templates — the two documents this course asks every Indian family to hold" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: who decides, who answers, and the documents that protect; the unwise-decision right, the advance directive, the written plan.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The three questions, the four abilities, the status-to-function history, the four doors, Bolam and the duty lineages.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "32 min",
      description: "Full course with the decision path, Indian layer and both cases: the case-name anchors and the formulations.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything: the expert-witness craft, the Clunis discipline, the MHA 2017 machinery, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three questions, the functional rule, the case-name map.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the three questions and why every answer is functional, never status-based." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The status-to-function engine, the four abilities' machinery, the doctrinal pathways and the timeline.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the four abilities with their neural machinery and trace the status-to-function history." },
    { number: 3, title: "Clinical Practice", description: "The capacity assessment, the four doors, the negligence skeleton, and practising lawfully.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run a four-abilities assessment, walk the best-interests checklist, and answer 'who is responsible?' the way the courts do." },
    { number: 4, title: "Indian Context", description: "The MHA 2017 machinery, the Erwadi legacy, the lawful-sequence decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the advance-directive script and the care-plan script, and refuse both status shortcuts." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can recite the formulations (four abilities, best-interests checklist, diminished responsibility) and name the duty lineages cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 11.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Grisso T & Appelbaum PS — the four-ability framework for treatment consent capacity (understanding, appreciation, reasoning, expressing a choice)", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Banks v Goodfellow (1870) — the wills-capacity classic (the business, the property, the beneficiaries, the manner of distribution)", sourceType: "primary", year: "1870", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Gillick v West Norfolk and Wisbech AHA (1985) — the mature minor's decision-making recognised", sourceType: "primary", year: "1985", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Mental Capacity Act 2005 (England and Wales) — ss 2–4, 27, 30–34, 35–41, 50; the best-interests checklist and the Court of Protection architecture (paraphrased principles)", sourceType: "government", year: "2005", dateReviewed: "2026-09-29" },
    { id: "S6", source: "McNaughten Rules (1843) — the insanity defence: defect of reason from disease of the mind, nature and quality, wrongness; no irresistible impulse", sourceType: "primary", year: "1843", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Homicide Act 1957, s.2 — diminished responsibility: abnormality of mind substantially impairing mental responsibility, decided by the trier of fact (as discussed in the source chapter)", sourceType: "government", year: "1957", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Bolam v Friern Hospital Management Committee (1957) — the responsible-body professional standard, subject to logical analysis", sourceType: "primary", year: "1957", dateReviewed: "2026-09-29" },
    { id: "S9", source: "The psychiatric-injury line: Alcock v Chief Constable of South Yorkshire; White v Chief Constable of South Yorkshire; Page v Smith; Sion v Hampstead; Tredget v Bexley — primary/secondary victims, the impact rule, shockingness, creeping trauma", sourceType: "primary", year: "1990s line", dateReviewed: "2026-09-29" },
    { id: "S10", source: "The authorities'-duty line: Hill v Chief Constable of West Yorkshire; Osman v United Kingdom; Palmer v Tees; Clunis v Camden and Islington — immunity, specificity, the duty owed to the patient, Article 6", sourceType: "primary", year: "1980s–1990s line", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Caparo Industries PLC v Dickman — the duty-of-care triad (foreseeability, proximity, just-and-reasonable); Nettleship v Weston and Mansfield v Weetabix — the objective standard and its edges", sourceType: "primary", year: "20th-century line", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Council of Europe Recommendation 99(4) — the principles on substitute decision-making", sourceType: "guideline", year: "1999", dateReviewed: "2026-09-29" },
    { id: "S13", source: "Mental Healthcare Act 2017 (India) — the Indian counterpart cited in the India lens (non-Oxford source, flagged): presumed capacity, advance directives, nominated representatives, s.115, ECT safeguards", sourceType: "indian-guideline", year: "2017", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Mental health law answers three questions: capacity (can this person decide for herself), criminal liability (can she be held responsible), and negligence/the duties of authorities (who must answer when things go wrong), and the modern answer to all three is functional, individual and case-by-case, never status-based: protection and rights are not opponents.", grade: "established", sources: ["S1"] },
    { text: "The status-to-function history: minors could not consent until Gillick (1985) recognised the mature minor; the Sexual Offences Act 1956 'defective' could not consent to sexual activity however competent she might actually be: the corollary being that marriage (competence-assessed at the ceremony) was lawful while the same woman's consent to sexual activity was legally void, disabling even legitimate protective sex education.", grade: "established", sources: ["S1", "S4"] },
    { text: "The functional test: competence relates to the particular decision, at the particular time it must be made, through the four abilities of Grisso and Appelbaum (understanding, appreciation, reasoning, expressing a choice, the bedside gloss understand, retain, weigh and communicate); Banks v Goodfellow calibrates wills at a will-writer's level; and an unwise outcome is not proof of an unacceptable process.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The MCA 2005 architecture: the best-interests checklist (no assumption-based determinations; regaining capacity; participation; life-sustaining neutrality; wishes, beliefs and values; consultation of named persons, carers, attorneys and deputies); decisions too personal for substitution (marriage, consent to sex); independent mental capacity advocates where carers' views are unavailable; the Court of Protection preferring court decisions over deputy appointment; and no initial judicial trigger with universal challengeability as the human-rights safeguard.", grade: "established", sources: ["S1", "S5"] },
    { text: "Substituted judgement versus best interests: where the person's wishes are known (past and present wishes, written statements, beliefs and values), they govern; what the person wanted IS in her best interests; the old 'responsible medical opinion' version was rightly criticised for professionalising a whole person's interests, the judicial development requiring that where several acceptable options exist only one is truly in her best interests, and that social, welfare and emotional factors count alongside the medical.", grade: "established", sources: ["S1", "S5", "S12"] },
    { text: "The four doors of criminal liability: the mental element (a complete defence if disorder shows it absent); the McNaghten insanity rules (defect of reason from disease of the mind, not knowing the act's nature and quality or its wrongness; rarely used; unable to accommodate irresistible impulse); diminished responsibility (abnormality of mind (arrested or retarded development, inherent causes, disease or injury) substantially impairing mental responsibility; murder to manslaughter; the trier of fact deciding impairment on expert-informed evidence including degree-of-impairment opinions that arguably exceed clinical expertise; originally an anti-death-penalty provision now reaching impulse-resistance arguments); and intoxication (specific intent only (murder, theft, burglary) with the recklessness of voluntary intoxication supplying the guilt for basic-intent crimes: manslaughter, rape, unlawful wounding).", grade: "established", sources: ["S1", "S6", "S7"] },
    { text: "The negligence skeleton: duty (the Caparo triad, foreseeability, proximity, just-and-reasonable), breach (the Bolam responsible-body standard, unless the practice fails logical analysis; drug-risk information moving toward a stricter informed-consent standard), causation (including the 'would have consented anyway' defence), and damage.", grade: "established", sources: ["S1", "S8", "S11"] },
    { text: "The psychiatric-injury rules: primary victims (physically injured or within foreseeable physical-injury range) versus secondary victims (close physical proximity, close tie of love and affection, or rescuers); the impact rule (the event striking the unaided senses, sudden, shocking to a person of ordinary fortitude); ordinary grief, fear and distress not compensable: recognised psychiatric injury only, acute stress reaction compensable (modestly); Sion (the slow 14-day watch) versus Tredget (the sudden chaos); creeping trauma (the growth-hormone/CJD claims) decided on foreseeability and proximity where the claimant group is small and identifiable; and the floodgates/fraud fears unsupported by empirical evidence.", grade: "established", sources: ["S1", "S9"] },
    { text: "The objective standard for the mentally disordered defendant: Nettleship v Weston (the learner driver held to the competent driver, a duty tailored to the actor has no place in the law of tort, which compensates victims rather than blaming wrongdoers), with Mansfield v Weetabix at the edges (no liability where the defendant could not reasonably have known of his condition; carers and professionals who do know of instability may sometimes assume its risk).", grade: "established", sources: ["S1", "S11"] },
    { text: "The authorities' duties for patients' violence: Hill (no general police duty to individual victims to catch a specific criminal); Palmer v Tees (no duty to unidentified future victims of identified patients, the palpable test failing on specificity); Clunis v Camden and Islington (the duty owed to the patient himself to provide care and aftercare, the victim's claim proceeding through the patient's person, the case turning on systemic failure to follow the care programme); and Osman (blanket immunity violates Article 6): liability attaching to identifiable relationships and systemic statutory duties, never to a general duty to protect everyone from everyone.", grade: "established", sources: ["S1", "S10"] },
    { text: "The India lens (the note's flag, non-Oxford context): the MHA 2017 replaced the Mental Health Act 1987 with a rights-based instrument; presumed capacity, advance directives and nominated representatives (the statutory substituted-judgement logic), independent admission reviews, the prohibitions on chaining and unmodified ECT, and s.115's decriminalisation of attempted suicide; guardianship through the National Trust Act and the RPwD Act; Bolam retained in Indian negligence with Supreme Court refinements; the BNS unsoundness-of-mind interface and the Erwadi-chaining legacy.", grade: "established", sources: ["S13"] },
    { text: "The treatment-refusal frontier: capacity checked first, then the statutory treatment provisions (the section-63-type powers; the anorexic refusing food treated under the Act where the refusal is part of the disorder), then the advance statement, with Bland-era precedent respecting competent refusals (Bouvia's respect) framing the consent boundary.", grade: "established", sources: ["S1", "S5"] },
  ],
};
