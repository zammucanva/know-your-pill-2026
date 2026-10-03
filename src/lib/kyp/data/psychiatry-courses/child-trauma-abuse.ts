import type { PsychiatryCourse } from "./types";

/**
 * CHILD TRAUMA & ABUSE — canonical Psychiatry course
 * (migration batch 8, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-trauma-abuse.md — untouched foundation),
 * re-researched against current guidance (the CDC-Kaiser ACE
 * pyramid, the Cohen-Mannarino-Deblinger TF-CBT trial programme,
 * the NICHD forensic-interview protocol lineage, the MWCD 2007
 * national study, the WHO sexual-abuse response guidelines and the
 * Indian POCSO 2012 machinery) with per-claim provenance.
 *
 * Drug routes: none linked, honestly. No drug treats the trauma
 * itself — medication is adjunct-only (sleep, the severe-flashback
 * window, comorbid depression; prazosin's nightmare tier is
 * adult-anchored with emerging child data), so drugLinks is empty
 * and the pharmacotherapy position is recorded in contentGaps,
 * never invented.
 */
export const childTraumaAbuseCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-trauma-abuse",
  title: "Child Trauma & Abuse",
  shortName: "Child Trauma & Abuse",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Trauma & Abuse"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The disclosure discipline: believe the child, record verbatim once, protect first",

  summary:
    "Child abuse is common, mostly from persons known to the child, and is disclosed once, quietly, in a fragment. The discipline is to believe, record verbatim once, use one skilled interview and protect the child, with trauma-focused CBT for those who need treatment.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise abuse through its three flag-layers: the injury-story mismatch logic (developmental plausibility, pattern, the offered explanation), the behavioural indicators, and the disclosure pattern itself.",
    "Recite the disclosure-response discipline (the four DON'Ts and the DOs) and explain WHY each rule protects both the child and the legal case.",
    "Apply the Indian legal machinery correctly: POCSO 2012 s.19's mandatory reporting, the CrPC s.164A examination architecture, the Child Welfare Committee and CHILDLINE pathways, and the adolescent-secrecy conflict's honest handling.",
    "Distinguish the child trauma presentations: PTSD-child-edition (regression, play re-enactment, somatic), developmental and complex trauma, and the abuse-mimicking behavioural labels (the mislabelled aggression and school refusal).",
    "Explain the ACE dose-response story and its treatment implication: trauma work as prevention of adult illness.",
    "Deliver TF-CBT's phase logic (safety → processing → integration) with the caregiver-involvement evidence, and know why the narrative is told repeatedly.",
    "Screen the presentations that ride on hidden abuse (the somatic child, the 'hypersexual' child, the runaway girl, the treatment-resistant 'ADHD') and hold the non-offending caregiver's fork as the outcome's hinge.",
  ],
  quickFacts: [
    { label: "The Indian anchors", value: "Two-thirds and 53%", detail: "The MWCD 2007 national study: two of every three children reporting physical abuse (beating by parents and teachers the normative experience), 53% reporting one or more forms of sexual abuse, and known persons dominating, home and school leading the locations; the NCRB's POCSO-era records the case-file mirror" },
    { label: "The recognition spine", value: "STORY, STAGE, SIGNATURE", detail: "The injury must fit the developmental stage, the pattern and the offered explanation: bruising in a non-cruising infant is a flag (the TEN-4-type logic: torso-ears-neck regions in under-4s), patterned injuries (the belt-line, the grab-pattern) and injuries of different healing ages the classics" },
    { label: "The disclosure grammar", value: "Delayed, partial, retracted", detail: "Disclosures delayed by months-to-years in a majority; the test balloon offered to a peer or teacher more often than a parent; retraction the family-pressure signature, not the falsehood signature: detail-drift appears ONLY under repeated bad interviewing" },
    { label: "The response discipline", value: "B-R-O-S", detail: "Believe, Record verbatim once, One skilled interview only, Safety-report: the four DON'Ts (don't interrogate, don't promise secrecy, don't confront arena-style, don't re-ask) behind one mnemonic; the repeated interrogation is the second abuse" },
    { label: "The binding law", value: "POCSO s.19 + CrPC s.164A", detail: "POCSO 2012 makes reporting mandatory for every person with knowledge or reasonable suspicion of a sexual offence against a child: doctors included, the family's wishes notwithstanding; s.164A: the examination by a registered medical practitioner within 24 hours of report, without preconditions; no child refused care or examination for want of an FIR copy" },
    { label: "The treatment", value: "TF-CBT, 12–20 sessions", detail: "Trauma-focused CBT with the non-offending caregiver, the child gold standard: stabilisation/safety-skills → the gradual trauma-narrative (told, drawn, written till it loses charge) → integration (blame-correction, body-safety rules). The phase order is the spine" },
    { label: "The fork", value: "The caregiver's response", detail: "The strongest single moderator of the child's long-run outcome is not the abuse's severity but the non-offending caregiver's belief and support: the believed child processes and recovers; the disbelieved child carries the compound wound (the event plus the betrayal-after)" },
    { label: "The dose meter", value: "The ACE pyramid", detail: "Adverse Childhood Experiences stack in graded dose-response to adult depression, substance use, suicidality and chronic disease: the 4+ tier showing multi-fold elevations; trauma treatment is therefore adult-disease prevention, and the childhood question belongs in EVERY adult psychiatric history" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The adult edition of the post-traumatic structure: the child edition speaks in regression, play re-enactment and somatic complaint instead" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The runaway girl and the conduct-substance channel: the FROM question and the POCSO screen the inverted assessment demands" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The treatment-resistant 'ADHD' that is really the trauma transformation: the timeline check and the ACE screen before the label" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "School refusal and frozen compliance as threat-system presentations: the abuse probe belongs in the engine-list" },
    { label: "Youth Suicide & Self-Harm", type: "condition", href: "/psychiatry/youth-suicide/", note: "The adolescent transformations: self-harm as the regulation engine, substance initiation, the academic collapse" },
    { label: "Recovered & False Memories", type: "condition", href: "/psychiatry/recovered-memories/", note: "The suggestibility science the forensic interface leans on: why leading questions contaminate, and why one skilled interview is the standard" },
    { label: "Child Adversity Contexts", type: "condition", href: "/psychiatry/child-adversity-contexts/", note: "The other adversities of the pyramid's household-dysfunction tier: the wider dose meter this course's abuse layers sit inside" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The smoke-detector the chronic threat environment recalibrates to high gain: the hypervigilant, startle-ready child" },
    { label: "Medial prefrontal cortex", type: "brain-region", href: "#brain", note: "The developing regulation canopy: the prefrontal-limbic balance that threat and deprivation sculpt, and the adult later calls depression or 'personality'" },
    { label: "Noradrenaline", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The alarm chemistry carrying the hyperarousal signature: startle, scan-behaviour, the sleep that will not come" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four mechanism stories carry child trauma. The dose meter: the developing brain calibrates to its environment; chronic threat holds the stress system (the HPA axis and the amygdala circuitry) at high gain, producing the hypervigilant, startle-ready, dysregulated child; chronic deprivation calibrates it the other way, to under-stimulation, the flat, delayed language-and-attachment picture of institutional neglect. Both sculpt the developing prefrontal-limbic balance in ways the adult then calls depression, anxiety, an ADHD-lookalike or 'personality', and the ACE pyramid charts the bill: risk climbing stepwise with each stacked adversity. The calibration is partly reversible: early safety plus therapy re-tunes the system, and the window stays open for years. The fact that turns trauma treatment into adult-disease prevention. The child's filing system: children do not file trauma the adult way; the fragments land in the body (somatisation), in behaviour (re-enactment, the doll-scene repeated), in development (regression, the bed wet again at nine), and in words only if the channel is safe; the child's dissociation is rarely dramatic. It is the frozen watchfulness, the thousand-yard stare in the classroom, filed under 'daydreaming'. The disclosure balloon: a disclosure is typically delayed (months to years, the grooming's secrecy, the family's silence-culture, no safe adult), partial (the fragment offered to see what happens), retracted under family pressure (the recant-siege the strongest retraction force), and it detail-drifts ONLY when interviewed badly and repeatedly; the contamination mechanics (leading questions, adult-supplied details, the tenth interviewer's script) that put ONE skilled interview at the centre of the forensic discipline. The caregiver fork: the best-researched moderator of the long-run outcome is not the abuse's severity but the NON-OFFENDING CAREGIVER'S RESPONSE; the believed-and-supported child processes and recovers; the disbelieved child carries the compound wound, the event plus the betrayal-after.",
    steps: [
      "The dose meter: each stacked adversity elevates adult depression, suicidality, substance use and chronic-disease risk in graded fashion; the 4+ ACE tier running multi-fold; childhood adversity sitting beneath a large share of adult mental illness.",
      "The threat calibration: chronic threat keeps the HPA axis and amygdala circuitry on high gain; the hypervigilant, startle-ready, dysregulated child the classroom then labels badly.",
      "The deprivation calibration: chronic neglect calibrates the system to under-stimulation; the flat, delayed language-and-attachment picture of institutional neglect; indiscriminate friendliness its signature.",
      "The sculpting: the developing prefrontal-limbic balance is shaped by both; the adult presentations (depression, anxiety, the ADHD-lookalike, 'personality') the long-read output of the early calibration.",
      "The filing system: fragments land in the body (the somatic carousel), in behaviour (re-enactment, the aggression spike), in development (regression), and in speech only if the channel is safe; the repetitive play is processing, not pathology.",
      "The balloon's mechanics: delayed, partial, retracted under pressure, and detail-drifting only under repeated bad interviewing; the verbatim-once record and the one skilled forensic interview exist because memory and case contaminate together.",
      "The fork and the reversibility: the non-offending caregiver's response is the outcome's hinge; early safety plus therapy re-tunes the calibration: the window for recalibration stays open for years.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the smoke-detector at high gain)", role: "The threat-evaluation hub the chronic threat environment recalibrates: the hypervigilance, the exaggerated startle, the scan-behaviour of the traumatised child riding its raised setting; the avoidance of persons, places and cues (the uncle's smell, the bathroom) its learned output.", grade: "established" },
    { id: "medial-prefrontal", name: "Medial prefrontal cortex (the regulation canopy)", role: "The developing control circuitry that should quiet the alarm: the prefrontal-limbic balance that chronic threat and chronic deprivation sculpt, and whose long-read output the adult clinic later reads as depression, anxiety, the ADHD-lookalike or 'personality'.", grade: "supported" },
    { id: "hypothalamus", name: "Hypothalamus (the HPA axis's head)", role: "The command station of the hypothalamic-pituitary-adrenal stress axis: the calibration organ: threat holds the axis at high gain (the dysregulated child), deprivation lets it fall quiet (the flat neglect picture); the hormonal environment it sets is the developing brain's operating weather.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Noradrenaline", symbol: "NE", role: "The alarm chemistry: the hyperarousal signature (startle, scan-behaviour, the disrupted sleep) carried on the noradrenergic gain the threat environment raises.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-and-anxiety rider's chemistry: the depression, irritability and dysregulated affect that ride the trauma and respond to treatment; adjunct territory only, never the trauma's cure.", grade: "supported", drugConnection: "The SSRI tier exists as KYP lessons for the comorbid-depression rider: adjunct-only here; no drug treats the trauma itself, so this course links no drug routes." },
    { name: "Cortisol (the HPA axis output)", symbol: "HPA", role: "The stress axis's endocrine messenger, listed here because the HPA calibration IS this course's core mechanism: chronic threat keeps the axis on high gain (the dysregulated child), chronic deprivation under-stimulates it (the flat neglect picture), and the calibration is partly reversible with safety and treatment.", grade: "established" },
  ],
  pathways: [
    {
      id: "calibration-pathway",
      name: "The calibration chain (threat to the dysregulated child)",
      steps: [
        { label: "Chronic threat environment", detail: "The known adult, the grooming, the household violence: the developing brain's weather" },
        { label: "The stress system on high gain", detail: "HPA axis and amygdala circuitry recalibrated: hypervigilance, startle, dysregulation" },
        { label: "The prefrontal-limbic balance sculpted", detail: "Regulation circuitry shaped by the environment it must grow up inside" },
        { label: "The adult presentations", detail: "Depression, anxiety, substance use, suicidality, chronic disease: the ACE pyramid's stepwise output" },
      ],
      clinicalManifestation: "The eight-year-old who flinches at the classroom door, scans the corridor and has been labelled 'hyperactive': the threat-calibrated brain misread as a behaviour disorder.",
      grade: "established",
    },
    {
      id: "filing-pathway",
      name: "The filing system (event to symptom to balloon)",
      steps: [
        { label: "The trauma fragment", detail: "Experienced without the adult's narrative machinery for filing it" },
        { label: "The body takes it first", detail: "Recurrent abdominal pain, vaginal complaints, urinary symptoms, constipation, headaches: the paediatric carousel" },
        { label: "Behaviour and development take the rest", detail: "Play re-enactment, the aggression spike, the regression: the bed wet again; frozen watchfulness as the child's dissociation" },
        { label: "Speech, only if the channel is safe", detail: "The delayed, partial, understated test balloon: 'he does a bad thing'" },
      ],
      clinicalManifestation: "The carousel child: fourteen months of unexplained abdominal pain that was the disclosure the body was making all along.",
      grade: "established",
    },
    {
      id: "fork-pathway",
      name: "The disclosure fork (balloon to outcome)",
      steps: [
        { label: "The balloon is offered", detail: "A fragment, once, quietly, to a teacher or a peer more often than a parent" },
        { label: "Received well", detail: "Believed; recorded verbatim once; one skilled forensic interview; reported; protected: the child's own message: 'I can tell, and the telling is survivable'" },
        { label: "Met with disbelief", detail: "The interrogation, the secrecy promise broken, the family-assembly confrontation: the retraction and the compound wound" },
        { label: "The long-run divergence", detail: "The believed-and-supported child processes and recovers (TF-CBT's phases, the good trajectory); the disbelieved child carries the event plus the betrayal-after into the adult clinic" },
      ],
      clinicalManifestation: "Two nine-year-olds, one disclosure each: the one believed is in remission at a year; the one disbelieved carries the compound wound forward.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "grooming-era", time: "The grooming months (before anything is visible)", title: "Gifts, secrets, boundary-erosion", description: "The known adult builds the secrecy architecture (the desensitising ladder of gifts, secret-testing and escalating access) so that by the time the abuse begins the child is already isolated inside it; the pattern (gifts-secrets-escalation) is the prevention content that actually protects.", phase: "onset" },
    { id: "abuse-era", time: "The abuse months to years", title: "The calibration years", description: "Chronic threat holds the stress system at high gain while the fragments file into body, behaviour and development (the somatic carousel, the regression, the aggression spike, the frozen compliance) and the words wait for a safe channel that may not arrive for years.", phase: "onset" },
    { id: "balloon-moment", time: "The disclosure moment (often months-to-years delayed)", title: "The test balloon", description: "A fragment, offered quietly (often to a teacher or a peer, often triggered by a safety-education class or another child's case, often present-tense and understated ('he does a bad thing')) the child watching the adult's face to see what happens next.", phase: "peak" },
    { id: "response-window", time: "The first 24–72 hours", title: "The response architecture", description: "The verbatim record made once; the POCSO s.19 report; the s.164A examination within 24 hours and without an FIR precondition; CHILDLINE 1098 and the CWC where home is unsafe; the 72–120-hour prophylaxis windows; the single skilled forensic interview arranged: the hours that decide both the case and the child's faith in adults.", phase: "peak" },
    { id: "therapy-months", time: "Months 1–8 of treatment", title: "The TF-CBT arc", description: "12–20 sessions: stabilisation first (psychoeducation, the feelings-vocabulary, safe-people maps, the caregiver's parallel module), then the narrative told-drawn-written-walked-through till it loses charge, then integration (the not-my-fault work, the body-safety rules, the return-to-school plan); somatic symptoms often fading with safety alone, within weeks.", phase: "duration" },
    { id: "testimony-decade", time: "The years after", title: "The two clocks", description: "The trial runs on the system's slow clock (the years-long Indian timeline, the honest counsel: 'the case is the system's job; the healing is ours') while healing runs its own: the believed-and-supported child in remission, the therapy-track protected from the case-track, and the recant-sieges survived by the record's immovability.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Population surveys (the CDC-Kaiser ACE study and its successors) place any-adversity exposure in Western samples at roughly two-thirds; the specific forms: contact sexual abuse in childhood ~8–12% of girls and 3–6% of boys in careful surveys, physical abuse in the high single-digits to teens, neglect the commonest registered form in child-protection systems. The ACE dose-response is the field's anchor: each additional adversity step elevates adult depression, suicidality, substance use and chronic-disease risk in graded fashion, the 4+ tier showing multi-fold elevations. The under-reporting layers: disclosures delayed by years in a majority, retraction under family pressure common, and systems' substantiated cases a small fraction of true prevalence.",
    indianPrevalence: "The MWCD 2007 national study: two-thirds of children reported physical abuse (beating by parents and teachers the normative experience) and 53% reported one or more forms of sexual abuse, with the structural finding that known persons dominate and home and school lead the locations; institutional and workplace settings (child labour) run high. The NCRB's POCSO-era crime records since 2012 (tens of thousands of cases annually against children, with overwhelmingly known-offender proportions) provide the case-file mirror. The detection architecture is thin: school-teachers carry the main observation load, paediatric OPDs carry the somatic load, CHILDLINE (1098) and the Child Welfare Committees are the protection spine, and the stigma-complex (family honour, the 'what will people say' machinery, the marriage-market calculus) drives both under-reporting and the family's pressure to recant.",
    genderRatio: "Contact sexual abuse ~8–12% of girls against 3–6% of boys in careful surveys, but the male survivor carries the double silence (the masculinity norm plus the homosexuality-confusion myths), presenting through the conduct-substance channel and reached only by the direct-gentle alone-interview question.",
    ageOfOnset: "No fixed onset: the vulnerability markers are younger age and disability (children with disabilities abused at several-fold rates; the non-speaking autistic child's protection-planning falling to the clinician), social isolation and prior disclosure punished; adolescence the transformation era (running away, substance initiation, self-harm).",
    indianNotes: "The recurring Indian failure-points are the two sieges (the family's recant-siege and the system's repeat-interview siege) both countered by documentation discipline and the one-skilled-interview standard; the paediatric carousel (three paediatricians and two ultrasounds before anyone builds the alone-interview) the everyday concealment machine.",
  },
  etiology: [
    { category: "social", factor: "The perpetrator profile (the causes OF abuse, never the child's)", details: "Overwhelmingly KNOWN persons: family, neighbours, school and workplace contacts; the stranger myth dies in every dataset. The triad: opportunity + authority + trust-access. Grooming precedes the event in sexual abuse: the desensitising ladder of gifts, secret-testing and boundary-erosion; knowing the pattern helps children and parents see it." },
    { category: "social", factor: "The family risk architecture", details: "Parental substance use, mental illness and domestic violence; social isolation; the harsh-punishment cultural norm (the corporal-punishment tradition as licence); stress overload (poverty, four children, night-shift work, the economics that open the father's window in the carousel case)." },
    { category: "psychological", factor: "The intergenerational transmission, honestly stated", details: "Abused parents show elevated rates of abusing. WITH the counter-fact that must be delivered to every survivor-parent: most abuse survivors never abuse their children; the cycle is probabilistic, not destiny. What raises risk: silence, untreated trauma, shame. What lowers it: being believed, treated, and growing into an adult who has processed the story." },
    { category: "social", factor: "The child-level vulnerability markers (responsibility NEVER here)", details: "Younger age; disability: children with disabilities abused at several-fold rates, the non-speaking child's protection-planning a clinical duty; social isolation; a prior disclosure punished (the balloon flown and shot down once, as in the carousel case's first attempt at age ten)." },
    { category: "environmental", factor: "The system-level layer", details: "Under-supervised institutional settings (hostels, care homes, child labour); weak enforcement of protection law; the family's collusion pressure; the myth-block doing its own damage: children do not fabricate sexual abuse narratives at any meaningful rate (fabrication rare and usually adult-instigated in custody disputes), 'she imagined it from TV' is the defence's sentence, not the evidence's, and abuse requires neither penetration nor physical injury to be a crime or a trauma." },
  ],
  symptomClusters: [
    {
      category: "1. The physical/biological flags (the medical route)",
      symptoms: ["Physical abuse: injuries inconsistent with the offered story OR with the child's developmental stage; bruising in a baby who does not cruise (the non-ambulant infant's any-bruise rule); the TEN-4-type logic's high-suspicion regions (torso, ears, neck) in under-4s", "Patterned injuries: the belt-line, the implement-mark, grab-pattern bruising; immersion and contact-signature burns; fractures at unexpected stages", "Multiple injuries at healing-different ages; the flat-affect child in the emergency room with a serious injury (the pain-indifference of chronicity)", "Sexual abuse: anogenital injuries, pain, itching, bleeding, discharge, STI markers, and the psychosomatic route: recurrent abdominal pain, vaginal complaints in the prepubertal girl, urinary symptoms, constipation, headaches (the carousel children)", "Neglect: failure to thrive, persistent hunger, poor hygiene, untreated medical conditions, dental neglect, and the developmental flattening of emotional neglect (language delay, attachment oddities)", "Fabricated/induced illness (the Munchausen-by-proxy spectrum): the parent manufacturing or inducing symptoms; suspicion arising from the illness-without-pathology plus the parent's hospital-affinity pattern"],
    },
    {
      category: "2. The behavioural/psychological flags",
      symptoms: ["Sudden changes: the aggression spike, the school refusal, the marks collapse, the sleep and eating disruption", "Regression: bed-wetting after dryness, baby-talk, clinging; the developmental rollback of trauma", "Sexualised behaviour beyond developmental expectation: age-inappropriate sexual knowledge and actions (the child who initiates adult-style acts or simulates them in play); a strong flag when persistent, with the cautionary pair (normal developmental curiosity vs the scripted pattern)", "PTSD-child-edition: re-experiencing through play re-enactment and drawing, nightmares, night-terrors; avoidance of persons, places and cues (the uncle's smell, the bathroom); hypervigilance (exaggerated startle, scan-behaviour); the new dissociative flavours: frozen watchfulness, absence-like spells", "Frozen watchfulness and over-compliance: the 'so well-behaved' child of chronic threat, compliance as survival", "The adolescent transformations: running away (FROM, the inverted assessment), substance initiation, self-harm, sudden academic collapse, early or rebellious sexual behaviour", "Emotional neglect: attachment-difficulty, indiscriminate friendliness with strangers (the institutional-neglect signature), flat affect, language and social delay"],
    },
    {
      category: "3. The disclosure pattern itself (the flag most often mishandled)",
      symptoms: ["Delayed: months to years; the grooming's secrecy, the family's silence-culture, no safe adult", "Partial: the test balloon, a fragment offered to see what happens", "Often single-offered, often first-told to a peer or teacher rather than a parent; frequently triggered by a safety-education class or another child's case", "Retracted under family pressure: the recant-siege (reputation, reconciliation-talks, economic fear) the strongest documented retraction force", "The spontaneous disclosure's grammar: often present-tense, often understated ('he does a bad thing'), often vague. The child's vocabulary and fear limits, not deception's marks"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The response architecture",
      code: "The four DON'Ts and the DOs: the discipline of receiving",
      criteria: [
        "DON'T interrogate: the clinical interview is NOT the forensic one; receive the balloon, don't chase the details. The script: 'Thank you for telling me; you did the right thing; this is not your fault; I will need to tell someone whose job is keeping children safe.' Then refer to the ONE skilled forensic interview (the NICHD-protocol lineage: open prompts, no suggestion, no repetition).",
        "DON'T promise secrecy: the promise that cannot be kept destroys the later trust. What CAN be promised: 'I believe you; you are not in trouble; this was not your fault; I will tell only the people whose job it is to help.'",
        "DON'T confront the accused or the family arena-style: safety planning and the legal machinery first; the confrontation-siege produces the retraction.",
        "DON'T re-ask the story at every contact: the verbatim record, made ONCE, is the medico-legal document; every later re-telling contaminates.",
        "DO record verbatim, in quotes, with time and context (and who was present, the child's affect); DO report under POCSO s.19; DO arrange the medical examination where sexual abuse is alleged (the CrPC s.164A architecture: examination by a registered medical practitioner within 24 hours of report, WITHOUT preconditions; no child refused care or examination for want of an FIR copy); DO notify CHILDLINE (1098) / the Child Welfare Committee where the home is the unsafe place; DO begin the mental-health assessment with the NON-offending caregiver included.",
      ],
      duration: "The response architecture runs in hours (the report, the examination, the record): the assessment after safety, the therapy after both.",
      indianNote: "The documentation discipline in one line: notes written as if a judge will read them, because one may. Verbatim quotes, body diagrams, timing, who was present, the child's affect: the record that holds against the bail-period pressure and the recant-siege alike.",
    },
    {
      system: "The mental-health assessment (after safety)",
      code: "The five maps",
      criteria: [
        "The trauma-symptom map: the child-version PTSD structure (re-experiencing through play and drawing, the avoidance of cues, hypervigilance, the dissociative flavours), dissociation, regression, the somatic channel.",
        "The developmental impact audit: language, attachment, school; the calibration's visible output.",
        "The comorbid map: depression, anxiety, the ADHD-lookalike, conduct, self-harm; the riders that brought the child to the clinic in the first place.",
        "The non-offending caregiver's state and capacity: her own fear, economic dependency and abuse history; a treatment target, not a moral test (the outcome fork's hinge).",
        "The child's protective resources: the teacher, the grandmother, the sibling; the safe-adult map the stabilisation phase will build on.",
      ],
      duration: "Assessment is layered across the first sessions: the ACE screen belongs in EVERY child psychiatric assessment regardless of the presenting label.",
      indianNote: "The three Indian moments that decide everything: (1) the alone-interview built for the recurring-somatic child; (2) the report made despite the family's wishes (s.19 binds the clinician, not the family's consent); (3) the non-offending caregiver's parallel track opened at the first contact: the disbelief treated as a state with a substrate (economics, marriage history), not a verdict.",
    },
  ],
  severityScales: [
    {
      name: "The ACE score",
      fullName: "Adverse Childhood Experiences count",
      measures: "Cumulative childhood adversity (abuse, neglect, household dysfunction): the dose meter that predicts the adult bill; the reason the childhood question belongs in every adult psychiatric history.",
      ranges: [
        { min: 0, max: 0, severity: "No reported adversity", action: "The baseline tier: the pyramid's reference level; the screen still documented, because delay and denial are the norm" },
        { min: 1, max: 3, severity: "Graded elevation begins", action: "Each additional adversity step elevating adult depression, suicidality, substance-use and chronic-disease risk: the intervention logic: every adversity removed or treated is adult disease prevented" },
        { min: 4, max: 10, severity: "The 4+ tier", action: "Multi-fold elevations across the adult outcomes: the tier where trauma-focused treatment is not symptom care but disease-prevention arithmetic" },
      ],
      indianNote: "The screen is free, needs no instrument and fits any OPD. The asking ('was there anything in your childhood…') the cheapest high-yield question in adult psychiatry.",
    },
    {
      name: "The TEN-4-type bruising logic",
      fullName: "Bruising-pattern recognition in young children",
      measures: "Which bruises in which children demand an abuse evaluation: the developmental-plausibility spine of physical-abuse recognition.",
      ranges: [],
      indianNote: "The concept, named as a concept: bruising in a non-ambulant infant is rarely accidental; torso, ears and neck bruises in an under-4 are high-suspicion regions; the injury must fit the STORY, the STAGE and the SIGNATURE: the offered explanation audited against developmental plausibility and pattern.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The partial, late or retracted disclosure", distinguishingFeatures: "Treat as credible by default: children do not fabricate sexual abuse narratives at any meaningful rate; fabrication is rare and usually adult-instigated in custody disputes.", keyDifferentiator: "Retraction signals family pressure (the recant-siege), not falsehood: the original verbatim record carries the weight; document the child's first words exactly." },
    { condition: "The recurring-somatic child (unexplained abdominal/vaginal pain)", distinguishingFeatures: "The carousel child: abuse sits in the differential of EVERY unexplained recurrent paediatric complaint; three paediatricians and two ultrasounds is the Indian pattern before anyone builds the alone-interview.", keyDifferentiator: "The privacy-interview and the behaviour-flags audit: the neutral channel first (pain-map, school, sleep, fears), the balloon given its chance." },
    { condition: "The 'hypersexual' child", distinguishingFeatures: "Sexualised behaviour beyond developmental norm is a strong abuse flag. AND a minority of such children have other drivers (exposure to adult content, the developmental disorder's poor boundaries).", keyDifferentiator: "The pattern decides: scripted, persistent, with other flags points to abuse; the assessment and the alone-interview settle it, never the shaming, which adds the second wound." },
    { condition: "The sudden 'ADHD' or aggression", distinguishingFeatures: "The trauma transformation mislabelled: the timeline is the tell: the symptoms began after an event or an era, not from early childhood.", keyDifferentiator: "The timeline check and the ACE screen in every child psychiatric assessment; the treatment-resistant 'ADHD' re-assessed after safety is established." },
    { condition: "School refusal / frozen compliance", distinguishingFeatures: "The threat-system presentations: the 'so well-behaved' child of chronic threat, compliance as survival.", keyDifferentiator: "The abuse probe belongs in the school-refusal engine-list (the Child Anxiety tier's engines extended); the alone-interview and the behaviour-flags audit." },
    { condition: "Bed-wetting regression", distinguishingFeatures: "A common trauma channel, and also common in constipation, UTI and developmental baselines.", keyDifferentiator: "The company it keeps decides: the regression cluster (clinging, baby-talk) plus the behaviour flags points to trauma; the isolated wet bed gets the paediatric review first, and never the punishment, which punishes a symptom of the wound." },
    { condition: "Dissociative spells / absence-like episodes", distinguishingFeatures: "Trauma-dissociation (the frozen watchfulness, the thousand-yard stare filed under 'daydreaming') versus absence epilepsy.", keyDifferentiator: "EEG where the spells are stereotyped; the trauma history and the interview content separate: the child's dissociation is rarely the adult's dramatic presentation." },
    { condition: "The runaway girl", distinguishingFeatures: "Running away FROM what? The inverted assessment the conduct tier demands; a POCSO screen is mandatory in every runaway presentation.", keyDifferentiator: "The alone-interview and the disclosure-grammar awareness; the male survivor's equivalent doorway is the direct-gentle question (the double silence: masculinity norm plus the homosexuality-confusion myths)." },
    { condition: "The non-offending parent's 'impossible accusation'", distinguishingFeatures: "The disbelief fork ('he is a good father, she watches TV serials and gets ideas') with the parent's dependence and marriage history as the belief's substrate.", keyDifferentiator: "The child's original record defends the disclosure; the parent's disbelief is treated as a state, not a verdict. Her own fear, economics and history the treatment targets." },
    { condition: "Corporal-punishment culture versus abuse", distinguishingFeatures: "Legal thresholds differ from cultural norms: the beating-as-discipline tradition is licence, not licence-to-injure.", keyDifferentiator: "The reporting threshold is injury and harm-patterns; the clinic's separate duty is the parenting intervention and the norm-shifting conversation (the conduct tier's behavioural package as abuse-PREVENTION)." },
  ],
  management: [
    { category: "lifestyle", name: "Safety first (the phase-zero)", description: "The contact rules negotiated (the accused's access; separation where the accused is household; the CWC placement where home is unsafe: the relative-kinship-care-first principle); the school-staff supervision plan; the medical needs met (injuries, and where indicated and time-appropriate the STI-prophylaxis/pregnancy-prevention protocols, the 72–120-hour windows, handled by the paediatric/SART-tier team); the information-control plan (who tells the school what, the child's return-to-school plan protecting from the stigma-siege).", whenToUse: "Before any therapy makes sense: safety is the precondition for the file to lose its charge.", indianContext: "The CWC's care-orders where home-protection is needed; CHILDLINE 1098 the referral-and-rescue channel; the kinship-care-first principle keeping the child inside the family's safe half." },
    { category: "lifestyle", name: "The legal-machinery navigation (the systems-work)", description: "The report (POCSO s.19: by phone to the police/SJPU or CHILDLINE; the doctor's protection-and-report duties; the FIR and the s.164A examination architecture); the CWC's care-orders; the court-preparation work later. The child's testimony-support, the special-court provisions used (in-camera proceedings, the statement recorded at home or a safe place where possible, the support-person appointed), and the years-long Indian criminal timeline counselled honestly: 'the case is the system's job; the healing is ours.'", whenToUse: "In parallel with safety from hour one; the therapy-track protected from the case-track throughout.", indianContext: "POCSO special courts (urban-metropolitan and district); the therapist's non-testifying role where the system allows; the hearing-preparation honest, procedural, rehearsed." },
    { category: "psychotherapy", name: "TF-CBT: trauma-focused CBT, child-and-caregiver edition (the first-line)", description: "The phase architecture: stabilisation/safety-skills (psychoeducation, the feelings-vocabulary, relaxation and coping, the caregiver's parallel work) → gradual processing (the trauma-narrative built at the child's pace, told, drawn, written, walked-through repeatedly till it loses charge, WITH the caregiver hearing it in the later phases: the child's recovery-message 'I can tell, and the telling is survivable' plus the caregiver's corrective hearing) → integration/closure (meaning, blame-correction, the not-my-fault work; safety-skills for the future; the return-to-normal-development tasks). 12–20 sessions; the caregiver-module evidence makes it the child gold standard.", whenToUse: "Once safety is established: safety before the narrative before meaning; the sequence is the spine.", indianContext: "The model's adaptation-friendliness in Indian settings (the parent-mediated delivery variants, the NGO-tier training programmes); metro-concentrated private tier approx ₹800–2,500/session (2026) with the NGO tier subsidised; the government psychology-department route for the sustained course." },
    { category: "psychotherapy", name: "The abuse-specific, dissociation and somatic modules", description: "Body-safety skills (the underwear-rule teaching, the no-secrets-with-adults rule, the named trusted-adults); the grooming-deconstruction for older children; the grounding-skills for dissociation; the body-symptom's trauma-linking for the somatic channel; the play-therapy channel for the pre-school band (the re-enactment processed in the child's own filing system).", whenToUse: "Layered into the TF-CBT arc by age and presentation; the play channel the pre-schooler's route.", indianContext: "The body-safety rules are the honest prevention content for the school package. The 'beware strangers' lecture is folklore's comfort; the grooming-pattern teaching is what actually protects." },
    { category: "psychotherapy", name: "The caregiver parallel track (the outcome's hinge)", description: "The non-offending parent's own trauma-response treated (guilt, rage, her own history); the parenting-through-symptoms coaching (the regression handled without punishment, the sexualised behaviour redirected not shamed); the family's recant-pressure countered with the legal-psychosocial briefing (the retraction harms the child and the case); the family's own treatment needs engaged honestly where substance, violence and neglect are braided.", whenToUse: "From the first contact: the strongest single moderator of the child's long-run outcome is this caregiver's belief and support.", indianContext: "The mother's fear and economic dependency mapped as treatment targets; the placement-and-economics plan (the CWC, the kinship option, the employment linkage) that makes her support possible: the fork's practical hinge." },
    { category: "pharmacotherapy", name: "Medication: the adjunct-only position", description: "No drug treats the trauma itself: medication is adjunct-only: sleep, the severe-flashback window, comorbid depression; prazosin's nightmare-tier evidence is adult-anchored with emerging child data. The multi-problem family (substance, violence, neglect-braided): the child-protection liaison continuing through therapy.", whenToUse: "Symptom-targeted, alongside the psychological first-line, never instead of it.", indianContext: "The Indian tier's two sieges countered by documentation discipline and the one-skilled-interview standard: the family's recant-siege and the system's repeat-interview siege, both re-traumatisation, both preventable." },
  ],
  safety: {
    redFlags: [
      "The bruise in the non-cruising infant: any bruise in a non-ambulant baby is an abuse flag; with the TEN-4-type regions (torso, ears, neck in under-4s), patterned injuries and healing-different ages: the injury-story mismatch demanding immediate child-protection action",
      "The 72–120-hour windows: STI prophylaxis and emergency contraception are time-boxed after sexual contact; the clock that must not be spent arguing paperwork; and no child is refused examination or care for want of an FIR copy (the s.164A no-precondition rule)",
      "The home as the unsafe place (the accused in the household): the CWC engaged, the kinship-care-first placement, the accused's access removed; protection precedes therapy",
      "The adolescent begging secrecy with the parent as possible offender: the duty said aloud BEFORE, the disclosure navigated WITH the child; the CWC process substituting for parental notification where the parent is the offender or unsafe",
      "The recant-siege assembling (reputation, reconciliation-talks, economic fear, the aunts' phone campaign): the strongest documented retraction force, and the child isolated inside the family after a retraction is itself a child-protection concern for the CWC's ongoing watch",
      "The corridor interrogation: well-meaning staff re-asking the story at every contact; the repeated unskilled interview contaminating both the child's memory and the legal case; the second abuse, and a systems emergency the designated communicator must stop",
    ],
    urgentGuidance:
      "The order of operations: (1) receive the disclosure with the four sentences; believe, don't interrogate, don't promise secrecy, don't re-ask; (2) record the child's words verbatim, once, with time and context; (3) report under POCSO s.19 (phone the police/SJPU or CHILDLINE 1098): mandatory for every person with knowledge or reasonable suspicion, doctors included, the family's wishes notwithstanding; (4) arrange the s.164A medical examination within 24 hours and without preconditions: the 72–120-hour prophylaxis windows running concurrently; (5) protect: the CWC where home is unsafe, the kinship-first placement, the contact rules; (6) open the non-offending caregiver's parallel track at the first contact; (7) begin TF-CBT once safety holds, and hold the re-traumatisation audit: the repeat-count (who this child must re-tell the story to) as close to one as the law allows.",
  },
  drugLinks: [],
  contentGaps: [
    "No drug treats the trauma itself: medication is adjunct-only (sleep, the severe-flashback window, comorbid depression); the first-line is TF-CBT, taught here; no pharmacological route is invented.",
    "Prazosin (the nightmare tier, adult-anchored evidence with emerging child data) has no KYP drug lesson; the adjunct position is taught here, the route never invented.",
    "The SSRI tier for the comorbid-depression rider exists as KYP lessons, but this course's source assigns it no primary role in child trauma: no link made; the adjunct-only position recorded instead, so no route implies a chemical cure.",
    "TF-CBT and the NICHD-protocol forensic interview have no standalone KYP technique lessons; both disciplines are taught inside this course (the phase architecture and the one-skilled-interview standard).",
    "The STI-prophylaxis and emergency-contraception protocols (the 72–120-hour windows) belong to the paediatric/SART tier: referenced here, never duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "When a child is hurt by the people or the world that was supposed to keep her safe (beaten, sexually used, or left without care) the hurt does not only live in the event. It files itself in the child's body (tummy aches and headaches that keep coming back), in behaviour (bed-wetting that returns, sudden anger, play that repeats the same scene), in feelings (fear, frozen 'good behaviour', nightmares), and only last, if ever, in words. Children rarely tell straight away; when they do tell, they usually tell a little bit first: a test balloon, offered quietly to see what the grown-up does with it. What the grown-up does next matters more than almost anything else in the child's recovery. The child who is believed, protected and given trauma-focused therapy has a genuinely good chance of getting completely better. That is the most hopeful and least-known fact in this whole field.",
    whatCausesIt:
      "Abuse is caused by adults and circumstances, never by the child. The person is almost always KNOWN to the child (a relative, a neighbour, someone around the school or workplace), not a stranger. Before sexual abuse, there is often grooming (gifts, special treatment, secrets, slowly pushed boundaries) that isolates the child inside the secret before anything visible happens. Family stress raises the risk: drinking, violence, mental illness, isolation, harsh beating-as-discipline norms, parents stretched past their limits. Younger children and children with disabilities are more at risk, through no fault of theirs, ever.",
    symptoms:
      "Body signs: bruises that do not fit the story or the child's age (any bruise in a baby too young to crawl is a warning), patterned marks, burns, pain or bleeding or discharge in the private parts, unexplained tummy pain or headaches that keep returning. Behaviour signs: sudden aggression or fear, school refusal, wetting the bed again, baby-talk, clinging, sexualised behaviour beyond the child's age, a child who is 'too well-behaved' and watchful, nightmares and night-terrors, play or drawings repeating the same scene. The telling itself: children usually delay for months or years, tell a small piece first, often to a teacher rather than a parent, and sometimes take it back when family pressure builds. A retraction usually means pressure, not that it was untrue.",
    treatment:
      "The treatment has a strict order. First, SAFETY: the person who hurt the child must be kept away, even if that means the child stays elsewhere (the Child Welfare Committee can arrange kinship care). Second, TELL IT ONCE: the child's words written down exactly, one skilled interview, never repeated questioning by everyone who means well, which harms the child and weakens the case. Third, the medical examination (by law within 24 hours of the report; it does not need a police paper first) and any protective medicines needed within the first few days. Fourth, trauma-focused CBT with the non-offending parent involved: roughly 12–20 sessions that go: feeling safe and learning coping first, then gently telling/drawing/writing the story until it loses its sting, then rebuilding the 'it was not my fault' knowledge and the safety rules for the future. Medicine helps only alongside (for sleep, severe distress or low mood) never as the treatment itself. And the family's own support: the parent who did not harm the child is the single biggest factor in the child's recovery.",
    selfHelp: [
      "The four sentences if a child ever tells you something: 'Thank you for telling me. You did the right thing; this is not your fault; I will need to tell someone whose job is keeping children safe.' Say them calmly, and do not ask further questions.",
      "Never promise to keep it secret: the promise cannot be kept, and breaking it later destroys the trust that made the child speak.",
      "Write down the child's exact words, with the date, time and who was there, once. That record matters more than any later conversation.",
      "Do not question the child repeatedly; one skilled interview protects both the child and the case. Tell everyone else who means well to stop re-asking too.",
      "The wet bed, the baby-talk, the repeated doll-play: these are the wound speaking, not naughtiness; calm, private, no shame; the therapy room is where the processing is structured, home's job is warmth and normalcy.",
      "Support the parent who did not offend: the child's recovery rides on her (or his) belief and support; her fear and dependence are understood and helped, never judged.",
      "Keep the school return low-key: no public sympathy-siege, no interrogation by well-meaning staff, one briefed teacher and a normal routine.",
      "The retraction pressure ('it will ruin the family name; think of her future') is the strongest force on the child: meet it with the written record and one senior family communicator, not the family assembly.",
    ],
    whenToSeekHelp: [
      "A child discloses anything suggesting sexual abuse: the report is mandatory (the doctor or teacher must report under POCSO; the family cannot veto it); call CHILDLINE 1098 any hour for guidance",
      "Injuries that do not fit the story, or any bruise in a baby too young to crawl: medical assessment the same day",
      "Bleeding, pain or discharge after possible sexual contact: the examination the same day (within 24 hours of report; no police paper needed first), because protective medicines work only in the first 72–120 hours",
      "A sudden behaviour change after time with a particular person or place: the alone-conversation with a trusted, calm adult",
      "The family pressing the child to take back the story. Ask the CWC or the social worker for help; a child isolated after a retraction is a child still at risk",
      "The non-offending parent's own collapse: she needs her own care and support to hold the child's recovery",
    ],
    indianResources: [
      "CHILDLINE 1098: the free, 24×7 referral-and-rescue number for any child in danger or any adult unsure what to do",
      "The Child Welfare Committee (CWC) and the District Child Protection Unit (DCPU): the statutory care machinery in every district",
      "Sakhi one-stop centres: the medical examination and counselling bundled under one roof",
      "The government psychology-department route for the sustained therapy course; NGO-tier subsidised trauma therapy (the private metro tier runs approx ₹800–2,500 per session, 2026)",
      "The school's child-protection policy and reporting-pathway poster: ask the principal for the school's version",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific clinical-practice guideline exists for child-trauma treatment; the binding layer is legal and structural: the POCSO Act 2012 (amended); s.19's mandatory reporting binding every person including clinicians, the graded gender-neutral offence structure, the special-court protections: together with the CrPC s.164A examination rules, the JJ Act's care machinery (the Child Welfare Committee, the District Child Protection Unit, the Special Juvenile Police Units), and the WHO clinical guidelines for responding to children and adolescents who have been sexually abused supplying the clinical protocol.",
    systemContext: "The teacher, not the clinic, is the system's front line, in the MWCD 2007 picture home and school dominate the abuse locations, and disclosures land on a teacher more often than on any doctor. The paediatric OPD carries the somatic load: the unexplained recurrent abdominal pain, the vaginal complaint, the constipation; the Indian pattern routes the abuse-child through three paediatricians and two ultrasounds before anyone builds the alone-interview. CHILDLINE (1098) and the Child Welfare Committees are the protection spine; the medical examination and POCSO reporting duties bind every clinician in the country, and the s.19 duty's referral-latitude does not exist here: the Western clinician's discretion to weigh the report has no Indian counterpart.",
    programmeContext: "CHILDLINE 1098: the free 24×7 referral-and-rescue tier; the CWC/DCPU machinery per district; POCSO special courts (urban-metropolitan and district); Sakhi one-stop centres bundling the medical examination with counselling; the school child-protection policy (staff-conduct codes, the reporting-pathway poster) becoming the CBSE-era norm; the NGO tier running case-support and therapy. The highest-yield capacity a clinician can build locally: the two-hour teacher package; the flags, the four DON'Ts and DOs, the 1098 number, and the 'report, don't investigate' line.",
    costConsiderations: "The response itself is nearly free: the POCSO report, the s.164A examination and the CWC machinery cost the family nothing. The treatment is where the money goes: TF-CBT-trained professionals are metro-concentrated (approx ₹800–2,500 per session, 2026) with the NGO tier subsidised; the government psychology-department route is the sustained-course channel. The scarcest commodities are the skilled forensic interview and the therapy slot. The teacher package and the alone-interview protocol are the cheap instruments that carry the interim.",
    culturalConsiderations: "The stigma-complex (family honour, the 'what will people say' machinery, the marriage-market calculus) drives both under-reporting and the pressure to recant: the recant-siege arrives dressed as reconciliation ('it will ruin the family name; she is too young to know what she is saying; think of her future'). The joint family's assembly-justice instinct (the panchayat confrontation) is the retraction factory. The known-offender reality inverts the stranger-danger folklore: the honest prevention content is the grooming-pattern teaching (gifts-secrets-escalation), the body-safety rules and the supervision-architecture of access (the household's one-adult-one-room norms for visitors; the institutional supervision audits). The male survivor carries the double silence (the masculinity norm plus the homosexuality-confusion myths), presenting through the conduct-substance channel and reached only by the direct-gentle alone-interview question. And the adolescent's testimony decade: POCSO trials run years; the child heals on a different clock than the court, so the therapy-track is protected from the case-track (the therapist's non-testifying role where the system allows, the support-person's buffering, the school-life continuity, the hearing-preparation honest and rehearsed).",
    patientCounselling: [
      "The delay script: 'Children disclose when a safe adult and a safe moment finally coincide; the delay is the rule, not a suspicious sign; the question that matters is what happens to the disclosure now, not why it was late.'",
      "The believe-first script: 'Children do not invent sexual detail beyond their developmental knowledge; fabrication is rare and usually adult-scripted in custody disputes; what television gives children is vocabulary, not stories.'",
      "The retraction script: 'A retraction most commonly signals family pressure, not falsehood; the original words, written down once, carry the weight in court and in clinic; and a child isolated after a retraction is a child still at risk.'",
      "The cycle script for survivor-parents: 'Most survivors never abuse anyone; the cycle is probabilistic, not destiny; what raises the risk is silence, untreated trauma and shame, and what lowers it is being believed, treated and heard.'",
      "The confrontation script: 'Not the corridor, not the assembly, not the panchayat; the law. The family's job is the child's safety and support; the confrontation job belongs to the system (the police/SJPU, CHILDLINE, the CWC).'",
      "The two-clocks script: 'The case is the system's job; the healing is ours: therapy, school and safety on one track, the court on another; the court's child-protection provisions (in-camera, recorded statements, support persons) reduce the load, and the hearing-preparation is rehearsed, honest and procedural.'",
    ],
  },
  decisionPath: {
    title: "The child the system might re-traumatise",
    nodes: [
      {
        id: "start",
        question: "A child arrives (or a teacher calls) with a possible abuse flag. Which layer is presenting?",
        branches: [
          { label: "An injury that doesn't fit the story or the stage", next: "injury-path" },
          { label: "The behaviour changed: aggression, regression, sexualised behaviour", next: "behaviour-path" },
          { label: "The child speaks (the test balloon)", next: "balloon-gate" },
          { label: "The recurring-somatic carousel child", next: "somatic-path" },
        ],
      },
      {
        id: "injury-path",
        question: "The physical layer: the injury-story mismatch.",
        recommendation: "The developmental-plausibility audit: the STORY must match the STAGE and the SIGNATURE; any bruise in a non-cruising infant a flag; the TEN-4-type regions (torso, ears, neck) in under-4s; patterned injuries (the belt-line, the grab-pattern), burns with immersion or contact signatures, injuries of different healing ages. Injuries treated; body diagrams and photographs per protocol; the flat-affect child in the emergency room noted as chronicity's sign, and the report made where abuse is suspected or disclosed.",
      },
      {
        id: "behaviour-path",
        question: "The behavioural layer: what changed, and when?",
        branches: [
          { label: "Build the alone-interview", next: "alone-gate" },
          { label: "The 'ADHD' is new and treatment-resistant", next: "timeline-gate" },
          { label: "Running away, self-harm, substance initiation", next: "adolescent-gate" },
        ],
      },
      {
        id: "somatic-path",
        question: "The unexplained recurrent paediatric complaint.",
        recommendation: "The privacy-interview and the behaviour-flags audit: abuse sits in the differential of EVERY unexplained recurrent paediatric complaint. The neutral channel first (the pain-map, school, sleep, fears), the child's words verbatim, no leading questions: the carousel ends the day someone builds the listening room.",
      },
      {
        id: "balloon-gate",
        question: "The child speaks: the fragment, quietly, once.",
        branches: [
          { label: "The four DON'Ts and the DOs", next: "response-path" },
          { label: "The family wants to confront him / call the panchayat", next: "confrontation-trap" },
          { label: "The adolescent begs secrecy", next: "secrecy-conflict" },
        ],
      },
      {
        id: "alone-gate",
        question: "The alone-interview, built properly.",
        recommendation: "The protocol: privacy established, the neutral channel opened first, open prompts only, the child's own pace; the behaviour-flags audit run alongside (regression cluster, sexualised behaviour, frozen watchfulness, the school refusal); the verbatim record made once, and the four sentences ready if the balloon is offered.",
      },
      {
        id: "timeline-gate",
        question: "The trauma transformation mislabelled.",
        recommendation: "The timeline check: when did the symptoms start, and what happened then? The ACE screen in every child psychiatric assessment; the treatment-resistant 'ADHD' re-assessed after safety is established. The threat-calibrated brain treated as what it is, not medicated as what it resembles.",
      },
      {
        id: "adolescent-gate",
        question: "The adolescent transformations.",
        recommendation: "Running away FROM what (the inverted assessment); the self-harm as the regulation engine (the youth-suicide tier); a POCSO screen mandatory in every runaway presentation; the male survivor's double silence met with the direct-gentle question in the alone-interview: the conduct-substance channel is his doorway, not his diagnosis.",
      },
      {
        id: "response-path",
        question: "The discipline of receiving: B-R-O-S.",
        recommendation: "Believe; Record verbatim once (time, context, who was present, the child's affect); One skilled forensic interview only (the NICHD-protocol lineage: open prompts, no suggestion, no repetition); Safety-report. POCSO s.19 by phone to the police/SJPU or CHILDLINE 1098; the s.164A examination within 24 hours, no FIR precondition; the 72–120-hour prophylaxis windows; CHILDLINE/CWC where home is unsafe; the non-offending caregiver included from the first mental-health contact.",
      },
      {
        id: "secrecy-conflict",
        question: "The adolescent who begs: 'don't tell my parents.'",
        recommendation: "The duty said aloud BEFORE, never a silent breach, never a silent compliance: 'I will need to tell someone whose job is keeping children safe; let's decide together who is told, in what order, with what protections.' The CWC process substitutes for parental notification where the parent is the offender or unsafe; the clinician navigates the disclosure WITH the child.",
      },
      {
        id: "confrontation-trap",
        question: "The family-assembly confrontation (the retraction factory).",
        recommendation: "Not the corridor, not the panchayat: the law: POCSO's machinery (the police/SJPU, CHILDLINE, the CWC) is built for exactly this. ONE designated senior family-communicator aligned (the grandmother, the trusted uncle) plus the written record's immovability; the recant-siege met with the record and the CWC's standing watch, and the child isolated inside the family after a retraction flagged as the ongoing protection concern it is.",
      },
      {
        id: "safety-therapy-path",
        question: "Safe, reported, examined: the treatment track.",
        recommendation: "TF-CBT, 12–20 sessions, the phases in order: stabilisation (psychoeducation, feelings-vocabulary, safe-people maps, the caregiver's parallel module) → the gradual trauma-narrative (told, drawn, written, till it loses charge, the caregiver hearing it in the later phases) → integration (the not-my-fault work, the body-safety rules, the return-to-school plan). Medication adjunct-only (sleep, the severe-flashback window, comorbid depression). The re-traumatisation audit held: the repeat-count near one, the teacher-briefing sheet, the media invisible, and the testimony-decade architecture: the therapy-track protected from the case-track, the hearing-preparation rehearsed when the date comes.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "The corridor interrogation (well-meaning staff re-asking the story)",
      why: "Every repeated unskilled re-telling contaminates the child's memory AND the legal case: the tenth interviewer's script overwriting the original words; the system's repeated interrogations are the second abuse.",
      correction: "The one-skilled-interview standard: the verbatim record made once, everyone else supporting without re-asking; the 'who this child must repeat the story to' count held as close to one as the law allows, and the teacher-briefing sheet stopping the well-meaning staff.",
    },
    {
      mistake: "Promising secrecy to protect the child's trust",
      why: "The promise cannot be kept. POCSO s.19 binds the clinician regardless, and its breaking at disclosure-time-plus-one destroys exactly the trust the promise was meant to build.",
      correction: "The honest four sentences: belief, right-thing, not-your-fault, and 'I will tell only the people whose job it is to help'; trust built on the truth the child can survive, not the comfort the adult cannot keep.",
    },
    {
      mistake: "The family-panchayat confrontation before the system",
      why: "The assembly confrontation produces retractions, evidence destruction and sometimes flight: the recant-siege's engine; the joint family's instinct converted into the case's ruin.",
      correction: "The law's machinery engaged first (the police/SJPU, CHILDLINE, the CWC); ONE designated family-communicator; the family's channelled into the child's safety and support, not the accused's trial by assembly.",
    },
    {
      mistake: "Refusing the s.164A examination pending an FIR",
      why: "The precondition myth: the examination delayed or denied for paperwork's absence, the 72–120-hour prophylaxis windows spent while the argument runs.",
      correction: "The architecture applied as written: examination by a registered medical practitioner within 24 hours of the report, WITHOUT preconditions; no child refused care or examination for want of an FIR copy, ever.",
    },
    {
      mistake: "Reading the retraction as proof of falsehood",
      why: "The retraction is the pressure-gauge reading, not the truth-gauge: the recant-siege (reputation, reconciliation-talks, economic fear) the strongest documented force on a child survivor.",
      correction: "The original disclosure's verbatim record usually outweighs the retraction, in court and in clinic; the documentation discipline is the counter, and the post-retraction isolation is itself flagged to the CWC's ongoing watch.",
    },
    {
      mistake: "The recurring-somatic carousel without the alone-interview",
      why: "Fourteen months of unexplained abdominal pain, three ultrasounds and a gastric-tonic era: the body delivering the message nobody built the room to hear; the disclosure delayed by the very system meant to notice.",
      correction: "The protocol institutionalised: the behaviour-flags audit and the one privacy-interview for EVERY unexplained recurrent paediatric complaint; the neutral channel first, the balloon given its chance.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The three flag-layers of recognition with one example each: the physical logic (injury-story mismatch, the TEN-4-type regions), the behavioural indicators (regression, sexualised behaviour, frozen watchfulness), the disclosure pattern itself (delayed-partial-retracted).",
        "The four DON'Ts and the DOs of receiving a disclosure, with the WHY of each: interrogation contaminates, the secrecy promise destroys trust when broken, the arena confrontation produces the retraction, the re-asked story overwrites itself.",
        "B-R-O-S (Believe, Record verbatim once, One interview only, Safety-report) and the STORY-STAGE-SIGNATURE logic of physical-abuse recognition.",
        "POCSO 2012 s.19's position (mandatory reporting by every person with knowledge or reasonable suspicion, doctors included) and the s.164A CrPC architecture (examination within 24 hours of report, no FIR precondition).",
        "TF-CBT's three phases in order (stabilisation/safety-skills, gradual trauma-narrative, integration/meaning) with the caregiver-module evidence and the reason the narrative is told repeatedly (till it loses charge).",
      ],
      practical: [
        "Demonstrate receiving a disclosure: the four sentences delivered calmly, the verbatim record written with time and context, the no-promises discipline held, and the referral to the one skilled forensic interview made.",
        "The alone-interview with the somatic child: the neutral channel opened first (the pain-map, school, sleep, fears), open prompts only, the child's own pace; the protocol that ends the carousel.",
      ],
      longAnswer: [
        "A teacher reports a nine-year-old's disclosure of sexual abuse by a relative: outline your response (the full architecture: the discipline, the law, the safety, the therapy, the fork).",
        "Child abuse: recognition and mandatory reporting (POCSO), with the long-term consequences of childhood trauma (the ACE study) and the management of PTSD in a sexually abused child.",
      ],
    },
    neetPg: {
      highYield: [
        "MWCD 2007: ~2/3 of children reported physical abuse, 53% some form of sexual abuse; known-offender dominance, home and school leading the locations; the NCRB POCSO-era records the case-file mirror.",
        "THE ACE DOSE-RESPONSE: graded elevation of adult depression, suicidality, substance use and chronic disease with each stacked adversity; the 4+ tier multi-fold; childhood adversity beneath a large share of adult mental illness.",
        "GLOBAL SURVEY ANCHORS: any-adversity ~two-thirds of Western samples; contact sexual abuse ~8–12% of girls, 3–6% of boys; neglect the commonest registered form in child-protection systems.",
        "THE DISCLOSURE GRAMMAR: delayed (months-to-years in a majority), partial (the test balloon), retracted under family pressure; detail-drift ONLY under repeated bad interviewing; the original verbatim record's weight.",
        "THE RECOGNITION SPINE: the STORY must match the STAGE and the SIGNATURE; bruising in a non-cruising infant the flag (the TEN-4-type logic: torso-ears-neck in under-4s); patterned injuries; injuries of different healing ages.",
        "THE ONE-INTERVIEW STANDARD: the NICHD-protocol lineage (open prompts, no suggestion, no repetition); the contamination mechanics of repeated unskilled interviews: the second abuse.",
        "POCSO 2012 s.19: MANDATORY reporting by ALL persons (doctors, teachers, counsellors) with knowledge or reasonable suspicion; failure to report is itself an offence; the narrow medical-emergency exception handled honestly.",
        "CRPC s.164A: examination by a registered medical practitioner within 24 hours of report, WITHOUT preconditions; no child refused examination or care for want of an FIR copy.",
        "TF-CBT = the child-trauma first-line: 12–20 sessions, phase order stabilisation → narrative → integration, the caregiver module the gold-standard ingredient.",
        "THE FORK: the non-offending caregiver's belief and support = the strongest single moderator of long-run outcome after sexual abuse.",
        "THE MYTH-BLOCK: children do not fabricate sexual abuse at any meaningful rate (fabrication rare, usually adult-instigated in custody disputes); abuse requires neither penetration nor injury to be a crime or a trauma.",
        "FABRICATED/INDUCED ILLNESS: the illness-without-pathology plus the hospital-affinity parent; the medical-abuse variant.",
        "NEGLECT: the commonest registered form; the poverty-vs-neglect distinction: the destitute family needing welfare (ration linkage, the Anganwadi, the school meal), not criminalisation.",
      ],
      pyqConcepts: [
        "The s.19 mandatory-reporting answer: the Indian clinician's binding duty, the Western clinical-discretion model inapplicable.",
        "The ACE-study essay: the dose-response pyramid and the prevention frame ('trauma work as adult-disease prevention').",
        "The TF-CBT phase order: the sequence question that separates the taught from the memorised.",
        "The strongest-moderator MCQ: the non-offending caregiver's response, not the abuse's severity, duration or the child's age.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A nine-year-old Mysuru schoolgirl stays back after class and tells her teacher that her uncle 'does a bad thing when he brings the textbook money': the teacher (trained in a two-hour package a year before) does not gasp, interrogate or promise secrecy; she delivers the four sentences, informs the principal, and the school calls CHILDLINE 1098 rather than summoning the family assembly. The single forensic interview at the child-friendly studio-tier facility elicits the fuller account (the 38-year-old tuition-boarding co-resident uncle, a grooming arc of gifts and secret-testing, contact abuse); the s.164A examination within the dignity-standards (the female examiner, every step explained, the mother present); the mother (27, widowed, economically dependent on the joint household) received in the parallel track with the CWC engaged; the placement landed on the maternal grandmother's home with the accused removed; the recant-siege (two aunts, one phone campaign) met with the record and the CWC's standing watch; TF-CBT over 16 sessions run in the proper phase order: by session 11 'it's just a story I have now', her words. At one year: full remission, school thriving, the case proceeding on the honest Indian clock, the mother employed in a tailoring unit, and the girl's drawing brought to the last session: a house, a tree, and the word 'safe' under it. The whole trajectory turned on the hour the teacher received the balloon correctly.",
        "An eleven-year-old Meerut girl reaches child psychiatry from paediatrics after fourteen months of 'recurrent abdominal pain with no findings': three ultrasounds, a stool-profile series, two endoscopy referrals declined on cost, antacids, antispasmodics, a 'gastric tonic' era, and a final referral note: 'functional pain? Please evaluate.' The psychiatric alone-interview opens on the neutral channel (the pain-map, school, sleep, fears) and the balloon comes quiet, present-tense, understated: 'the pain comes when Papa comes to my bed at night'; she watches the clinician's face to see what happens. Two years' duration; the mother's night-shift work the father's window; the secret anchored by threats and gifts; and the earlier attempt at age ten: told an aunt, met with 'don't say such things about him': the balloon flown and shot down once. The architecture runs: the s.19 report, the single corroborating forensic interview, the examination per protocol; the mother's disbelief-defence ('he is a good father, she watches TV serials and gets ideas') shifting over two sessions of her own marital-history mapping and the night-shift economics confronted; the placement to the maternal aunt's with contact suspended, and the pain's exit: the somatic symptom faded within six weeks of safety alone, needing no analgesics. At eight months: no pain episodes in six months, sleep normal, the therapy in the integration phase; the pain was a message fourteen months in delivery, and the verbatim record held against the father's later bail-period pressure.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "POCSO 2012 s.19: reporting is mandatory for every person with knowledge or suspicion of a sexual offence against a child; doctors included; failure to report is itself an offence.",
        "CrPC s.164A: examination within 24 hours of report, no FIR precondition; no child refused examination or care for paperwork's absence.",
        "TF-CBT is the first-line for child post-traumatic stress: stabilisation → narrative → integration, with the non-offending caregiver involved.",
        "Any bruise in a non-cruising infant is an abuse flag (the TEN-4-type logic); injuries must fit the STORY, the STAGE and the SIGNATURE.",
        "The believed-and-supported child has a genuinely good long-run trajectory: the non-offending caregiver's response the strongest single moderator.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The two-hour teacher package is the highest-yield capacity you can build in any Indian district: the flags, the four DON'Ts and DOs, the 1098 number, the 'report, don't investigate' line: the difference between the balloon received well and the balloon met with the corridor interrogation.",
        "The paediatric carousel protocol belongs in your institution's standing orders: the behaviour-flags audit and the one privacy-interview for every unexplained recurrent paediatric complaint; the alone-interview is the instrument, not another ultrasound.",
        "The recant-siege is managed by ONE senior family-communicator aligned plus the written record's immovability: the retraction's aftermath (the child isolated inside the family) is itself a child-protection concern for the CWC's ongoing watch.",
        "The male survivor's double silence (the masculinity norm plus the homosexuality-confusion myths) breaks only on the direct-gentle alone-interview question: his presentations run through the conduct-substance channel, and the 'will he become an abuser' fear gets the evidence-answer: most survivors never abuse anyone.",
        "The testimony decade architecture: the therapy-track protected from the case-track (the therapist's non-testifying role where the system allows, the support-person's buffering, the school-life continuity, the hearing-preparation honest and rehearsed); the child heals on a different clock than the court, and your job is keeping the clocks apart.",
        "The childhood question ('was there anything in your childhood…') belongs in EVERY adult psychiatric history: the ACE screen is the cheapest high-yield instrument the adult clinic owns.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The test balloon handled right",
      presentation: "A nine-year-old stayed behind after class to hand her teacher one sentence, and the hour that followed decided the next decade of her life.",
      initialPresentation: "A nine-year-old girl in a Mysuru school remained in the classroom after the others left and told her teacher that her uncle 'does a bad thing when he brings the textbook money'. The teacher had taken a two-hour child-protection package a year earlier; what the school did in the hours that followed (not the classroom moment itself) became the case's turning point.",
      history: "The fuller account emerged only at the single forensic interview: a 38-year-old tuition-boarding uncle (a co-resident relative), a grooming arc of gifts and secret-testing over months, contact abuse. The girl's mother (27, widowed, economically dependent on the joint household) carried the parallel track's hardest facts: her own fear, her dependency, and the two aunts and one phone campaign that would later assemble as the recant-siege.",
      examination: "The s.164A medical examination performed within the protocol's dignity-standards: the female examiner, every step explained to the child, the mother present; no injuries requiring treatment; the prophylaxis protocols reviewed. The mental-health assessment opened with the non-offending caregiver included: the outcome fork's hinge assessed from day one.",
      diagnosis: "Contact child sexual abuse by a known, co-resident grooming adult: the disclosure received, the trauma-symptom map to follow.",
      management: "The school called CHILDLINE 1098 rather than summoning the family assembly; the single forensic interview at the child-friendly studio-tier facility (open prompts, the child's own pace); the CWC engaged, the placement landed on the maternal grandmother's home with the accused removed and cases filed; the mother's brother aligned as the ONE family-communicator; the recant-siege met with the record and the CWC's standing watch. Treatment: TF-CBT over 16 sessions; stabilisation (the feelings-vocabulary, the safe-people map, the mother's parallel module), the trauma-narrative (told-drawn-told; by session 11, 'it's just a story I have now'. Her words), integration (the not-my-fault work, the body-safety rules, the return-to-school with the teacher-briefing sheet and no sympathy-siege).",
      outcome: "At one year: symptoms in full remission, school thriving; the case proceeding on the honest Indian clock; the mother employed in a tailoring unit; and the girl's drawing, brought to the last session: a house, a tree, and the word 'safe' under it.",
      teachingPoints: [
        "The trained teacher received the balloon in the exact four-sentence discipline: the whole case's trajectory turned on that hour.",
        "The single-forensic-interview standard kept both the child and the case clean: the contamination mechanics never given their chance.",
        "The non-offending mother's support (not blame) was the outcome's fork, and the CWC plus the economic plan (the kinship placement, the tailoring unit) is what made the support possible.",
        "The recant-siege was managed by ONE communicator and a written record, not the family's assembly-justice, and the therapy's phase-order (safety before narrative before meaning) was the treatment's spine.",
      ],
    },
    {
      title: "The carousel child with the pain nobody scanned",
      presentation: "Fourteen months of 'recurrent abdominal pain with no findings', three ultrasounds and a gastric-tonic era: the pain was a message that took one privacy-interview to deliver.",
      initialPresentation: "An eleven-year-old girl in Meerut was referred to child psychiatry from paediatrics after fourteen months of unexplained recurrent abdominal pain: three ultrasounds, a stool-profile series, two endoscopy referrals declined on cost, antacids, antispasmodics, a 'gastric tonic' era, ending in a paediatric referral note reading 'functional pain? Please evaluate'.",
      history: "The psychiatric alone-interview (offered as part of the somatic-child protocol) opened on the neutral channel (the pain-map, school, sleep, fears) and then the balloon, quiet, present-tense, understated: 'the pain comes when Papa comes to my bed at night.' She watched the clinician's face to see what would happen. Two years' duration; the mother's night-shift work the father's window; the 'secret' anchored by threats and gifts; and the earlier attempt at age ten: told an aunt, met with 'don't say such things about him': the balloon had been flown and shot down once already.",
      examination: "The response that followed the disclosure: 'You were very brave to say that. It is not your fault. I will need to tell someone whose job is keeping children safe, and I will stay with you while we do.' The corroborating single forensic interview and the medical examination per protocol; the mother's initial disbelief-defence ('he is a good father, she watches TV serials and gets ideas') documented as a state, not a verdict.",
      diagnosis: "Intrafamilial child sexual abuse presenting as fourteen months of unexplained recurrent abdominal pain: the body's filing system carrying the disclosure the words could not.",
      management: "The POCSO s.19 report; the mother's parallel track: the hardest work of this case: her disbelief shifting over two sessions (her own marital-history mapping, the night-shift's economics confronted), the placement to the maternal aunt's with contact suspended; TF-CBT begun with the narrative-work's pace hers; the school-return plan aunt-anchored; the paediatric file closed with the diagnostic honesty it had lacked.",
      outcome: "The pain's exit: the somatic symptom faded within six weeks of safety alone, needing no analgesics; the body's message delivered, its work done. At eight months: no pain episodes in six months, sleep normal, the therapy in the integration phase, and the verbatim record, made once, holding against the father's later bail-period pressure.",
      teachingPoints: [
        "The recurring-somatic child carries the disclosure until someone builds the privacy-interview: the protocol belongs in the differential of EVERY unexplained paediatric complaint.",
        "Her first balloon at age ten was shot down by an adult ('don't say such things about him'). The system's earliest failure was the aunt's dismissal, not the paediatric carousel that followed.",
        "The pain resolved with SAFETY alone, before therapy: the body's filing-system signature; the message's delivery succeeded.",
        "The non-offending mother's disbelief was treated as a state with a substrate (her marriage history, the night-shift economics), not a verdict on the child's truth.",
      ],
    },
  ],
  clinicalPearls: [
    "The child who is believed, protected and treated has a genuinely good long-run trajectory: the field's most hopeful and least-known sentence, and the one to hand every family at the first consultation.",
    "Two of every three Indian children report physical abuse and 53% report some form of sexual abuse (MWCD 2007), and the offender is overwhelmingly KNOWN: the stranger myth dies in every dataset.",
    "The STORY must match the STAGE and the SIGNATURE: developmental plausibility, pattern-plausibility and the offered explanation audited together; any bruise in a non-cruising infant is an abuse flag (the TEN-4-type logic: torso-ears-neck in under-4s).",
    "The disclosure is a test balloon: delayed, partial, often first-told to a teacher or peer, and retraction is the pressure-gauge reading, not the truth-gauge.",
    "B-R-O-S: Believe, Record verbatim once, One skilled interview only, Safety-report; the four DON'Ts (never interrogate, never promise secrecy, never confront arena-style, never re-ask) in one mnemonic.",
    "POCSO 2012 s.19 makes reporting mandatory for every person with knowledge or reasonable suspicion: doctors included, the family's wishes notwithstanding; failure to report is itself an offence.",
    "CrPC s.164A: the examination within 24 hours of report, without preconditions; no child refused examination or care for want of an FIR copy; the 72–120-hour prophylaxis windows running concurrently.",
    "TF-CBT's phase order is the spine: stabilisation before the narrative before meaning; 12–20 sessions, the non-offending caregiver in the room (the module that makes it the child gold standard).",
    "The non-offending caregiver's belief and support is the strongest single moderator of long-run outcome: the clinical weight lands on treating her fear and dependency, not testing her morals.",
    "Abuse sits in the differential of EVERY unexplained recurrent paediatric complaint: the alone-interview is the instrument, not the fourth ultrasound.",
    "The repeated unskilled interview is the second abuse: it contaminates the child's memory and the legal case together. The one-skilled-interview standard protects both.",
    "Most survivors never abuse anyone: the cycle is probabilistic, not destiny; the sentence that protects the survivor-parent and the pregnant survivor alike.",
    "Fabricated/induced illness: the illness-without-pathology plus the hospital-affinity parent; the medical-abuse variant hiding in the paediatric chart.",
  ],
  highYieldSummary: [
    "Definition and frame: child trauma and abuse = the common, under-recognised drivers of a large share of child mental ill-health, recognised through three flag-layers (the injury-story mismatch logic, the behavioural indicators, the disclosure pattern itself) and answered with two unspectacular clinical acts (NOTICE and RESPOND WELL) because the second abuse many children receive is the system's handling: disbelief, repeated interrogation and the family's re-traumatising siege.",
    "Epidemiology: MWCD 2007; two-thirds of Indian children reporting physical abuse, 53% sexual abuse in some form, known persons dominating, home and school leading the locations (the NCRB's POCSO-era records the case-file mirror); Western surveys: any-adversity ~two-thirds, contact sexual abuse ~8–12% of girls and 3–6% of boys, neglect the commonest registered form; the ACE dose-response the anchor finding (graded elevations of adult depression, suicidality, substance use and chronic disease; the 4+ tier multi-fold): childhood adversity beneath a large share of adult mental illness.",
    "Mechanism: the dose meter (chronic threat holding the HPA axis and amygdala circuitry on high gain; deprivation calibrating to under-stimulation; the prefrontal-limbic balance sculpted); the child's filing system (body, behaviour, development, speech-only-if-safe; the repetitive play as processing); the disclosure balloon's mechanics (delayed-partial-retracted; detail-drift only under repeated bad interviewing); the caregiver fork (the non-offending caregiver's response the best-researched moderator), and the reversibility: early safety plus therapy re-tunes the calibration, the window open for years.",
    "Clinical: the physical flags (bruising in the non-cruising infant, the TEN-4-type regions, patterned injuries, healing-different ages, the flat affect with serious injury; the somatic route: recurrent abdominal pain, vaginal complaints, urinary symptoms, constipation; the neglect and fabricated-illness patterns); the behavioural flags (the sudden changes, regression, sexualised behaviour, PTSD-child-edition with play re-enactment, frozen watchfulness, the adolescent transformations); the disclosure grammar (present-tense, understated, vague, vocabulary-and-fear limits, not deception's marks).",
    "Diagnosis and response: the four DON'Ts and the DOs (receive-don't-interrogate; no secrecy promises; no arena confrontation; no re-asking; record verbatim once; report; arrange the s.164A examination; notify CHILDLINE/CWC; assess with the non-offending caregiver); the Indian legal machinery (POCSO 2012, gender-neutral, graded offences, s.19 mandatory reporting, the special-court protections; the JJ Act's CWC/DCPU; the confidentiality conflict navigated WITH the adolescent, the CWC substituting where the parent is the offender); the differentials that mislead (the 'hypersexual' child, the sudden 'ADHD', the school refusal, the runaway girl, the retraction, the corporal-punishment culture).",
    "Management: the frame SAFETY FIRST, TELL IT ONCE, TREAT THE MEMORY, HOLD THE CAREGIVER; (1) the phase-zero safety (contact rules, CWC kinship-first placement, the 72–120-hour prophylaxis windows, the information-control plan); (2) the legal-machinery navigation (the report, the examination, the testimony-decade architecture); (3) TF-CBT 12–20 sessions in the proper phase order with the caregiver parallel track, the abuse-specific modules (body-safety, grooming-deconstruction) and the somatic/dissociative work; (4) the re-traumatisation audit (the repeat-count near one, the teacher-briefing sheet, ONE family-communicator, the media invisible); (5) the neglect-and-chronicity tier (the poverty-vs-neglect welfare distinction, the dyadic work, the parenting programmes as prevention); medication adjunct-only: no drug treats the trauma itself.",
    "The Indian layer and the outcome: the teacher as the system's front line (the two-hour package the highest-yield capacity); the paediatric carousel hiding the disclosure daily; the stigma-complex driving the recant-siege; the male survivor's double silence; the metro-concentrated TF-CBT tier (approx ₹800–2,500/session, 2026) with the NGO and government routes; and the fork that decides everything: the believed-and-supported child processing and recovering (the genuinely good long-run trajectory), the disbelieved child carrying the compound wound (the event plus the betrayal-after) into the adult clinic.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cta-quiz-1",
      question: "A four-month-old baby who cannot yet roll or cruise has a bruise on the torso. The correct reading:",
      options: ["Always normal at this age", "A high-suspicion physical-abuse flag — bruising in non-ambulant infants is rarely accidental", "Commonly from vaccination", "Definitive proof of a bleeding disorder"],
      correctIndex: 1,
      explanation: "The developmental-plausibility logic (the TEN-4-type concept): any bruise in a pre-cruising infant demands an abuse evaluation — the STORY must match the STAGE and the SIGNATURE.",
      afterSectionId: "symptoms",
    },
    {
      id: "cta-quiz-2",
      question: "The disclosure-response discipline includes:",
      options: ["Gently re-asking the account at every visit to keep it fresh", "Receiving the balloon, recording verbatim ONCE, one skilled forensic interview, no promises of secrecy", "Promising secrecy to protect trust, then deciding", "A family-assembly confrontation to test the story"],
      correctIndex: 1,
      explanation: "The four DON'Ts in one option — repetition contaminates the child's memory and the case alike; the secrecy promise cannot be kept; the assembly confrontation produces the retraction.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cta-quiz-3",
      question: "POCSO 2012 s.19 requires the treating doctor who suspects child sexual abuse to:",
      options: ["Report only with parental consent", "Report mandatorily — every person with knowledge or suspicion is bound, failure to report is itself an offence", "Refer only if injuries are found", "Wait for the disclosure to be repeated twice"],
      correctIndex: 1,
      explanation: "The Indian clinician's binding duty: the Western clinical-discretion model does not apply — the family's wishes notwithstanding.",
      afterSectionId: "indian-practice",
    },
    {
      id: "cta-quiz-4",
      question: "The TF-CBT phase order:",
      options: ["Narrative → safety → meaning", "Stabilisation/safety-skills → gradual trauma-narrative → integration/meaning", "Meaning → exposure → medication", "Hypnosis → abreaction → discharge"],
      correctIndex: 1,
      explanation: "The sequence's order is the treatment's spine — safety before the file is played; the narrative told, drawn, written till it loses charge; the meaning work (not-my-fault) last.",
      afterSectionId: "management",
    },
    {
      id: "cta-quiz-5",
      question: "An eleven-year-old with fourteen months of unexplained recurrent abdominal pain and a normal work-up should receive:",
      options: ["A fourth ultrasound", "The privacy-interview and the behaviour-flags audit — abuse sits in the somatic carousel's differential", "Antispasmodic escalation", "Discharge as 'functional'"],
      correctIndex: 1,
      explanation: "The somatic child's protocol: the body keeps delivering the message until someone builds the room where it can be heard.",
      afterSectionId: "differential",
    },
    {
      id: "cta-quiz-6",
      question: "The strongest single moderator of long-term outcome in sexually abused children:",
      options: ["The abuse's duration", "The non-offending caregiver's belief and support", "The child's age at the event", "The legal outcome"],
      correctIndex: 1,
      explanation: "The fork: believed-and-supported children recover; the compound betrayal is the disbelief — which is why the caregiver's parallel track opens at the first contact.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the Indian prevalence anchors and the offender-profile inversion.", answer: "THE ANCHORS: the MWCD 2007 national study; two of every three children (two-thirds) reporting physical abuse, beating by parents and teachers the normative experience; 53% reporting one or more forms of sexual abuse; known persons dominating; home and school leading the locations; institutional and workplace settings (child labour) running high. THE CASE-FILE MIRROR: the NCRB's POCSO-era records since 2012; tens of thousands of cases annually against children, overwhelmingly known offenders. THE INVERSION: the 'beware strangers' lecture is folklore's comfort. The perpetrator profile is the KNOWN, trusted, access-bearing adult (opportunity + authority + trust-access the triad), which is why the honest prevention content is the grooming-pattern teaching (gifts-secrets-escalation), the body-safety rules and the supervision-architecture of access, not the stranger lecture.", topic: "Epidemiology" },
    { question: "Give the disclosure's grammar and the four DON'Ts and DOs of receiving it.", answer: "THE GRAMMAR: delayed (months-to-years in a majority, the grooming's secrecy, the family's silence-culture, no safe adult), partial (the test balloon, a fragment offered to see what happens), often first-told to a peer or teacher, often triggered by a safety-education class or another child's case; retracted under family pressure (the recant-siege the strongest retraction force); detail-drifting ONLY when interviewed badly and repeatedly; the spontaneous version often present-tense, understated and vague ('he does a bad thing'): vocabulary-and-fear limits, not deception's marks. THE DON'Ts: don't interrogate (the clinical interview is not the forensic one); don't promise secrecy (the promise cannot be kept); don't confront the accused or the family arena-style (the confrontation-siege produces the retraction); don't re-ask the story at every contact (every re-telling contaminates). THE DOs: record verbatim, in quotes, with time and context, ONCE; report under POCSO s.19; arrange the s.164A medical examination where sexual abuse is alleged; notify CHILDLINE (1098) / the CWC where home is unsafe; begin the mental-health assessment with the non-offending caregiver included: the mnemonic B-R-O-S: Believe, Record verbatim once, One interview only, Safety-report.", topic: "Clinical practice" },
    { question: "What is the TEN-4-type logic's core, and why is injury-STORY mismatch the spine of physical-abuse recognition?", answer: "THE CORE: bruising in a non-ambulant infant is rarely accidental; the non-cruising baby's any-bruise rule; and in under-4s, the torso-ears-neck regions carry high suspicion (the TEN-4-type concept: T-E-N regions, age under 4). THE SPINE: recognition runs on developmental plausibility (the STAGE, could this child self-inflict this injury in this way?), pattern-plausibility (the SIGNATURE (the belt-line, the implement-mark, the grab-pattern, immersion and contact burns, injuries of different healing ages) and the offered-explanation audit (the STORY) does the account fit the injury's shape and age?). A mismatch at any layer is the flag: the story that changes on retelling, the injury the stage cannot produce, the pattern no accident draws. The corroborating signs: the flat-affect child in the emergency room with a serious injury (the pain-indifference of chronicity), and the multiple-injuries-different-ages chart.", topic: "Diagnosis" },
    { question: "State POCSO s.19's mandatory-reporting position for clinicians, the s.164A examination architecture, and the adolescent-secrecy conflict's honest handling.", answer: "S.19: the Protection of Children from Sexual Offences Act 2012 (amended) makes reporting MANDATORY for every person (doctors, teachers, counsellors included) who has knowledge or reasonable suspicion of a sexual offence against a child (under-18, gender-neutral for victim and perpetrator); failure to report is itself an offence, with the narrow medical-emergency exception handled honestly; the family's wishes do not bind the duty. The Indian clinician has no Western-style referral latitude. S.164A CrPC: the examination by a registered medical practitioner within 24 hours of the report, WITHOUT preconditions; no child refused examination or care for want of an FIR copy; the examination is protective and evidentiary, with the dignity-standards (the explained-every-step discipline, the chaperone, the child's own pace). THE SECRECY CONFLICT: the adolescent survivor who begs 'don't tell my parents'; the duty said aloud BEFORE, never a silent breach and never a silent compliance; the clinician navigates the disclosure WITH the child (who is told, in what order, with what protections), and the CWC process can substitute for parental notification where the parent is the offender or unsafe.", topic: "Indian practice" },
    { question: "Narrate the ACE dose-response story and its prevention implication in three sentences.", answer: "SENTENCE ONE: the Adverse Childhood Experiences study and its successors found that abuse, neglect and household dysfunction accumulate in a graded dose-response relationship with the adult outcomes (depression, suicidality, substance use, heart and metabolic disease) each additional adversity step elevating the risk. SENTENCE TWO: the 4+ ACE tier shows multi-fold elevations, and childhood adversity sits beneath a large share of adult mental illness; the burden the adult clinics inherit one referral at a time. SENTENCE THREE: because the developing brain's calibration to threat and deprivation is partly reversible (early safety plus therapy re-tunes the stress system, the window staying open for years) treating child trauma is not symptom care but adult-disease PREVENTION, and the childhood question belongs in every adult psychiatric history.", topic: "Mechanism" },
    { question: "TF-CBT's three phases in order, with the caregiver-module's evidence position, and why is the narrative told repeatedly?", answer: "THE PHASES: (1) STABILISATION/SAFETY-SKILLS; psychoeducation, the feelings-vocabulary, relaxation and coping, the safe-people map, with the caregiver's parallel work from the start; (2) GRADUAL PROCESSING: the trauma-narrative built at the child's pace: told, drawn, written, walked-through repeatedly till it loses its charge, WITH the caregiver hearing it in the later phases (the child's recovery-message 'I can tell, and the telling is survivable' plus the caregiver's corrective hearing); (3) INTEGRATION/CLOSURE: meaning and blame-correction (the not-my-fault work), the safety-skills for the future, the return-to-normal-development tasks. THE EVIDENCE: 12–20 sessions; the caregiver-module evidence (the Cohen-Mannarino-Deblinger programme) is what makes it the child gold standard, with the model adaptation-friendly in Indian settings (the parent-mediated delivery variants, the NGO-tier training programmes). WHY REPEATED: the child's filing system processes by replaying; the doll-scene, the repeated drawing are the file being played till it loses its charge; the therapy works WITH the filing system (the story told till it is tolerable), never against it: by session 11 of the case arc, 'it's just a story I have now'.", topic: "Management" },
    { question: "Which single factor most predicts the child's long-run outcome after sexual abuse, and what clinical weight lands on it?", answer: "THE FACTOR: the NON-OFFENDING CAREGIVER'S RESPONSE, not the abuse's severity, duration, the child's age at the event, or the legal outcome. The believed-and-supported child processes and recovers; the disbelieved child (or the child whose mother chose the abuser, the stay-with-the-stepfather fork) carries the compound trauma: the event plus the betrayal-after. THE CLINICAL WEIGHT: the mother's own state (fear, economic dependency, her own abuse history) is a TREATMENT TARGET, not a moral test; the disbelief treated as a state with a substrate ('he is a good father, she watches TV serials and gets ideas' shifting over two sessions of marital-history mapping and economics-confronting in the carousel case); the parallel track opens at the FIRST contact; and the placement-and-economics plan (the CWC, the kinship option, the employment linkage) is what makes her support possible: the fork's practical hinge.", topic: "Clinical practice" },
    { question: "The recurring-somatic child protocol: what triggers it, what it contains, what it must never do.", answer: "THE TRIGGER: any unexplained recurrent paediatric complaint (the recurrent abdominal pain, the vaginal complaint in the prepubertal girl, the urinary symptoms, the constipation, the headaches) abuse sits in the differential of every one; the Indian pattern routes the child through three paediatricians and two ultrasounds before anyone builds the room. THE CONTENTS: the behaviour-flags audit (regression cluster, sexualised behaviour, frozen watchfulness, the school refusal, the sudden changes) plus the ONE privacy-interview; the neutral channel opened first (the pain-map, school, sleep, fears), open prompts only, the child's own pace, the four sentences ready if the balloon comes, the verbatim record made once. THE NEVERS: never the leading question, never the interrogation, never the repeated re-asking at every contact, and never the dismissal ('functional pain? Please evaluate') that closes the file without having listened: the pain in the carousel case was a message fourteen months in delivery.", topic: "Diagnosis" },
  ],
  faqs: [
    { question: "Why didn't she tell us earlier. We are her parents?", answer: "The delay is the rule, not a suspicious sign: threats, gifts, the grooming's secrets, shame and the testing. She usually DID tell earlier, in a small way, and the reception taught her to stop: children disclose when a safe adult and a safe moment finally coincide. The question that matters is what happens to the disclosure now, not why it was late." },
    { question: "She is too young to know what she is saying: children imagine these things from television.", answer: "Children do not reliably invent sexual detail beyond their developmental knowledge. That is the core forensic finding of this entire field. Fabrication is rare, usually adult-scripted in custody disputes, and identified by skilled interviewers; what television gives children is vocabulary, not stories. The default that protects children: believe first, verify properly, never dismiss." },
    { question: "She took back the statement later: doesn't that prove it was false?", answer: "Retraction is the family-pressure signature, not the falsehood signature: the recant-siege (reputation, reconciliation-talks, economic fear) is the strongest documented force on a child survivor. The original disclosure's verbatim record usually outweighs the retraction (in court and in clinic) and the child isolated inside the family after a retraction is herself a child-protection concern." },
    { question: "Will he become an abuser himself when he grows up? I have heard the cycle repeats.", answer: "Mostly no: most boys who were abused never abuse anyone. The cycle is probabilistic, not destiny. What raises the risk: silence, untreated trauma and shame. What lowers it: being believed, treated, and growing into an adult who has processed the story. Your fear is understandable; the evidence points to help, not fate." },
    { question: "Should we confront him, or call the family panchayat?", answer: "Not the corridor, not the assembly: the law. Confrontation-sieges produce retractions, evidence destruction and sometimes flight; POCSO's machinery (the police/SJPU, CHILDLINE, the CWC) is built for exactly this. The family's role is the child's safety and support; the confrontation job belongs to the system." },
    { question: "The case will go on for years: won't the trial destroy her all over again?", answer: "The Indian timeline is honestly long, and the child's healing runs on a separate track: therapy, school, safety. The court's child-protection provisions (in-camera proceedings, recorded statements, support persons, special courts) reduce the load, and the hearing-preparation is rehearsed, procedural and honest. Children who are believed and supported navigate the process far better than the folk-tale suggests. What destroys children is the opposite: the silent, unsupported, disbelieved road." },
    { question: "What do we do with the regression. She is wetting the bed at nine years old?", answer: "It is the trauma channel, not naughtiness, and it fades with safety and treatment. Punishment here punishes a symptom of the wound; the handling is calm, private and shame-free, with a paediatric check for the medical overlap (constipation, UTI), and patience: it resolves within months in most treated children." },
    { question: "She keeps playing it out with dolls and drawing the same scene: should we stop her?", answer: "No: that is the child's filing system playing the file till it loses its charge; the processing attempt, not a compulsion to suppress. The therapist works WITH the re-enactment (the story told at the child's pace); home's job is warmth and normalcy, not policing the play." },
    { question: "Her behaviour has become sexualised, showing and touching. I am horrified.", answer: "The sexualised behaviour is a flag and a symptom, not a moral event: it is what the child absorbed, rendered back. The handling is calm redirection, privacy-rules taught without shame, and the therapy's abuse-focused modules, shaming her adds a second wound to the first. And it is a strong abuse flag when persistent and scripted: it belongs in the assessment, not the punishment." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "POCSO Act 2012 (with amendments) — the s.19 mandatory-reporting architecture and the special-court protections" },
      { source: "CrPC s.164A — the medical-examination rules for sexual assault (the 24-hour, no-precondition architecture)" },
      { source: "WHO — clinical guidelines for responding to children and adolescents who have been sexually abused (the examination-and-response protocol)" },
      { source: "Juvenile Justice Act care-side machinery — the CWC, the DCPU and the Special Juvenile Police Units" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, chs 9.3.2–9.3.3 — source chapters mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Cohen JA, Mannarino AP & Deblinger E — the TF-CBT randomised-trial programme (the child-trauma treatment tier's evidence spine, caregiver module included)" },
    ],
    reviews: [
      { source: "Felitti VJ et al. — the ACE Study (the CDC-Kaiser dose-response pyramid, the prevention anchor)" },
      { source: "Saywitz KJ / Lamb ME — the NICHD-protocol lineage (forensic-interview discipline: open prompts, single-interview standards, the contamination mechanics)" },
      { source: "Elliott DM / London K & Bruck M — disclosure patterns and suggestibility science (the balloon's grammar and the contamination evidence)" },
      { source: "Sugar NF et al. / Pierce MC et al. — bruising-pattern recognition in young children (the TEN-4-type logic lineage, named as concept)" },
      { source: "Kendziora KT / O'Donohue W; Yates G & Bass C — fabricated/induced illness (the medical-abuse variant and its modern framing)" },
      { source: "Ministry of Women and Child Development, Government of India — Study on Child Abuse in India (2007); NCRB POCSO-era crime records" },
      { source: "The Indian system layer — CHILDLINE 1098, the CWC/DCPU architecture, Sakhi one-stop centres, the TF-CBT metro tier (approx 2026 practice realities)" },
    ],
    patientResources: [
      { source: "CHILDLINE 1098 — the free 24×7 referral-and-rescue tier, for families and professionals alike" },
      { source: "The two-hour teacher package — the flags, the four DON'Ts and DOs, the 1098 number and the 'report, don't investigate' line" },
      { source: "The four sentences card for any adult a child might choose to tell — the discipline that decides the trajectory" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: what abuse looks like in a child's body and behaviour, the four sentences if a child tells you, and what happens next.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The three flag-layers, the four DON'Ts, B-R-O-S, the POCSO machinery, the TF-CBT phases, the fork.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, both cases and the Indian layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: the disclosure craft, the forensic interface, the legal machinery, the testimony-decade architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three flag-layers, the prevalence anchors, the disclosure grammar.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the three flag-layers, the MWCD anchors and the disclosure's grammar cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The dose meter, the filing system, the balloon's mechanics, the fork.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the child's symptoms look so odd and why the caregiver's response outranks the abuse's severity." },
    { number: 3, title: "Clinical Practice", description: "The recognition logic, the response discipline, the treatment and its order.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can receive a disclosure with the four sentences, run the verbatim-once record and order the response architecture correctly." },
    { number: 4, title: "Indian Context", description: "POCSO, the CWC and CHILDLINE wiring, the carousel, the sieges, the testimony decade.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can state s.19's binding position, run the 164A architecture and manage the recant-siege without the family assembly." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield anchors.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the teacher-disclosure essay cold and recite the TF-CBT phase order and the fork without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.3.2–9.3.3 — source chapters mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Felitti VJ et al. — the ACE Study (CDC-Kaiser): the dose-response pyramid, the graded adult-outcome elevations, the prevention anchor", sourceType: "primary", year: "1998 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Cohen JA, Mannarino AP & Deblinger E — the TF-CBT randomised-trial programme: the child-and-caregiver treatment tier's evidence spine", sourceType: "trial", year: "1996 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Ministry of Women and Child Development, Government of India — Study on Child Abuse in India 2007 (the prevalence anchors: two-thirds physical, 53% sexual, known-offender dominance)", sourceType: "government", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S5", source: "POCSO Act 2012 (with amendments) — s.19 mandatory-reporting architecture, the graded gender-neutral offences, the special-court protections; CrPC s.164A examination rules", sourceType: "government", year: "2012 onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "WHO — clinical guidelines for responding to children and adolescents who have been sexually abused (the examination-and-response protocol)", sourceType: "who", year: "2017", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Sugar NF et al. / Pierce MC et al. — bruising-pattern recognition in young children (the TEN-4-type logic lineage, named as concept)", sourceType: "primary", year: "1999 onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Saywitz KJ / Lamb ME — the NICHD-protocol lineage: forensic-interview discipline (open prompts, single-interview standards, contamination mechanics)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Elliott DM / London K & Bruck M — disclosure patterns and suggestibility science (the balloon's grammar; fabrication rarity; the contamination evidence)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Kendziora KT / O'Donohue W; Yates G & Bass C — fabricated/induced illness (the medical-abuse variant and the modern framing)", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "NCRB — POCSO-era crime records against children (the case-file mirror; known-offender proportions); the JJ Act care-side machinery (CWC/DCPU/SJPU)", sourceType: "government", year: "2012 onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Indian system layer — CHILDLINE 1098, the CWC/DCPU architecture, Sakhi one-stop centres, the TF-CBT metro tier and costs (approx 2026 practice realities)", sourceType: "indian-guideline", year: "2012–2026", dateReviewed: "2026-09-29" },
    { id: "S13", source: "DSM-5 / ICD-11 — the child PTSD and stress-related-disorder framing the note's presentations are updated to", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The Indian prevalence anchors: MWCD 2007; two-thirds of children reporting physical abuse (beating by parents/teachers the normative experience), 53% reporting one or more forms of sexual abuse, known persons dominating, home and school leading the locations; the NCRB's POCSO-era records the case-file mirror (tens of thousands of cases annually, overwhelmingly known offenders).", grade: "established", sources: ["S4", "S11"] },
    { text: "The ACE dose-response: graded elevation of adult depression, suicidality, substance use and chronic disease with each stacked adversity; the 4+ tier multi-fold; childhood adversity beneath a large share of adult mental illness; the calibration partly reversible (early safety plus therapy re-tuning the system, the window open for years).", grade: "established", sources: ["S2", "S1"] },
    { text: "The survey anchors: any-adversity exposure ~two-thirds of Western samples; contact sexual abuse ~8–12% of girls and 3–6% of boys in careful surveys; physical abuse in the high single-digits to teens; neglect the commonest registered form in child-protection systems; disclosures delayed by years in a majority with substantiated cases a small fraction of true prevalence.", grade: "established", sources: ["S2", "S1"] },
    { text: "The disclosure grammar: delayed (grooming secrecy, silence-culture, no safe adult), partial (the test balloon, often first-told to a peer or teacher), retracted under family pressure (the recant-siege the strongest retraction force), detail-drifting ONLY under repeated bad interviewing; fabrication rare and usually adult-instigated in custody disputes; the spontaneous version often present-tense and understated.", grade: "established", sources: ["S9", "S8"] },
    { text: "The injury-recognition logic: the STORY-STAGE-SIGNATURE audit; bruising in non-ambulant infants rarely accidental; the TEN-4-type high-suspicion regions (torso, ears, neck) in under-4s; patterned injuries (the belt-line, grab-pattern), immersion/contact-signature burns, injuries of different healing ages; the flat-affect child with a serious injury.", grade: "established", sources: ["S7", "S1"] },
    { text: "The response discipline: the four DON'Ts (don't interrogate, don't promise secrecy, don't confront arena-style, don't re-ask) and the DOs (verbatim-once record, report, examination, CWC/CHILDLINE notification, the non-offending caregiver included); the one-skilled-forensic-interview standard (the NICHD-protocol lineage: open prompts, no suggestion, no repetition); repeated unskilled interviews contaminating the child's memory and the case together.", grade: "established", sources: ["S8", "S6"] },
    { text: "The Indian legal machinery: POCSO 2012 s.19: mandatory reporting by every person with knowledge or reasonable suspicion (doctors included; failure itself an offence; the narrow medical-emergency exception); the gender-neutral graded-offence structure; the special-court protections (in-camera proceedings, recorded statements, support persons); CrPC s.164A: examination within 24 hours of report, without preconditions.", grade: "established", sources: ["S5", "S11"] },
    { text: "The treatment: TF-CBT the child first-line; 12–20 sessions, the phase order stabilisation/safety-skills → gradual trauma-narrative (told, drawn, written till it loses charge, the caregiver hearing it in the later phases) → integration/meaning; the caregiver-module evidence the gold-standard ingredient; the model adaptation-friendly in Indian settings (parent-mediated delivery variants, NGO-tier training programmes).", grade: "established", sources: ["S3"] },
    { text: "The fork: the non-offending caregiver's belief and support the strongest single moderator of long-run outcome after sexual abuse; the believed child processing and recovering, the disbelieved child carrying the compound wound (the event plus the betrayal-after); the caregiver's own state (fear, economic dependency, her own history) a treatment target, not a moral test.", grade: "established", sources: ["S3", "S1"] },
    { text: "The pharmacotherapy position: medication adjunct-only (sleep, the severe-flashback window, comorbid depression); no drug treats the trauma itself; prazosin's nightmare-tier evidence adult-anchored with emerging child data.", grade: "supported", sources: ["S6", "S3"] },
    { text: "The neurodevelopmental model: chronic threat holding the stress system (HPA axis, amygdala circuitry) on high gain; the hypervigilant, dysregulated child; chronic deprivation calibrating to under-stimulation: the flat, delayed language-and-attachment picture; the prefrontal-limbic balance sculpted in ways the adult presentations then express; the child's filing system (body, behaviour, development, speech-only-if-safe) with the repetitive play as processing.", grade: "supported", sources: ["S1", "S2", "S13"] },
    { text: "The Indian system layer: the teacher as front line (the two-hour package the highest-yield capacity); the paediatric carousel (three paediatricians and two ultrasounds before the alone-interview); CHILDLINE 1098, CWC/DCPU and Sakhi one-stop centres as the spine; the TF-CBT metro tier at approx ₹800–2,500/session (2026) with NGO and government routes; the two sieges (the family's recant-siege, the system's repeat-interview siege) countered by documentation discipline and the one-skilled-interview standard.", grade: "supported", sources: ["S12", "S11"] },
  ],
};
