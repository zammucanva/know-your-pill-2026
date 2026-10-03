import type { PsychiatryCourse } from "./types";

/**
 * REFUGEES & MENTAL HEALTH — canonical Psychiatry concept course
 * (migration batch 16, Group R — social psychiatry & services).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/refugee-mental-health.md — untouched
 * foundation), whose own source_map: NOTP 2e (2009) ch 7.10.1
 * (Part 8) — Mollica, Culhane & Hovelson's original rewrite (the
 * 1951 Convention definition and Article 33 non-refoulement; the
 * 1967 Protocol; the eight-category trauma taxonomy with the
 * potency ranking and the dose-effect relationship; the
 * host-agent-environment outcomes model; the concentration-camp
 * survivor lineage (Eitinger, Thygesan); the Bosnian and
 * Cambodian persistence findings; the primary-care setting with
 * the Hopkins Symptom Checklist and the Harvard Trauma
 * Questionnaire; the function-focused treatment and the
 * disability-as-gold-standard conclusion), re-researched against
 * the lineages the note itself cites (Kinzie's and Mollica's
 * Cambodian PTSD diagnoses; the Vietnamese ex-detainee
 * head-injury studies; Westermeyer's Hmong substance findings;
 * the WHO cross-cultural depression study; Silove's adaptation
 * frameworks; De Jong's mass-violence public-health lineage)
 * with per-claim provenance.
 *
 * Neuroscience honesty: the note grounds no brain region and no
 * neurotransmitter — its only neurobiological content is the
 * Vietnamese ex-detainee findings (head-injury count inversely
 * related to executive function; PTSD risk raised; cortical
 * thinning), which belong to the head-injury layer and its TBI
 * course, not to a regional teaching here — so brainRegions and
 * neurotransmitters are empty by design and the gap is recorded
 * in contentGaps, never papered over with decorative
 * neuroscience.
 *
 * Drug routes: the note assigns no medication any named role in
 * refugee care — the depression and PTSD pharmacology lives in
 * those courses, and torture treatment itself carries the note's
 * verdict ('no treatment consensus after 25 years') — so
 * drugLinks is empty by design and the discipline is recorded in
 * contentGaps, never invented.
 */
export const refugeeMentalHealthCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "refugee-mental-health",
  title: "Refugees & Mental Health",
  shortName: "Refugee Health",
  kind: "concept",
  category: "Social Psychiatry & Services",
  groupLetter: "R",
  groupName: "Social psychiatry & services",
  learningPath: ["Psychiatry", "Social Psychiatry & Services", "Refugees & Mental Health"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Trauma, displacement and the long recovery: law, burden, screening and care.",

  summary:
    "Refugees carry an eight-category trauma burden that produces persistent PTSD, depression and disability, and they present (somatically, late) through primary care. This course covers the law, the numbers, the outcomes model, the screening instruments and function-focused care.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote the 1951 Convention definition of the refugee (a well-founded fear of persecution for race, religion, nationality, social group or political opinion, outside the country of nationality, unable or unwilling to return) and state Article 33's non-refoulement principle with its exact protection formula.",
    "Recite the numbers exactly as the chapter reports them: 2.5 million UNHCR-protected in 1970 rising to 8.4 million by 2006; 23.7 million internally displaced with similar characteristics and no international-law protection; more than 10,000 people per day becoming refugees or IDPs over the preceding decade; over 80% of casualties in recent African, Asian and European conflicts being non-combatants.",
    "Recite the eight trauma-event categories with the potency ranking (brain injury, sexual violence, torture and bodily injury, coercion and confinement the most pathogenic) and the dose-effect relationship between cumulative trauma and psychiatric symptoms.",
    "Explain the outcomes model (the host-agent-environment epidemiological triad producing medical illness, psychiatric disorder and disability) with the persistence findings (45% of Bosnian PTSD/depression cases meeting criteria 3 years later; Cambodian refugees 20 years after resettlement; the 95% somatic presentation of depressed Vietnamese refugees; the 5-10-year substance delay; the head-injury findings).",
    "Give the four reasons refugee mental-health services belong in primary care, and name the two culturally adapted screening instruments (the Hopkins Symptom Checklist; the Harvard Trauma Questionnaire) with what each covers.",
    "Apply the cross-cultural diagnostic logic: PTSD and major depression validated across refugee populations, no culture-specific mass-violence syndrome yet defined, and the A-B-C scenario framework guiding the diagnostic approach between psychiatric overreach and humanitarian hostility.",
    "Outline the treatment principles: trauma-focused therapies culturally adapted, depression treatment with somatic-presentation vigilance, substance vigilance across the delayed window, the head-injury assessment, psychosocial rehabilitation, and state the disability-as-gold-standard conclusion.",
    "Apply the Indian layer: the Tibetan, Sri Lankan Tamil, Afghan, Rohingya and internal-displacement contexts; the district-hospital and camp-clinic screening pathway; and the task-shifting and counsellor model as the Indian scale answer.",
  ],
  quickFacts: [
    { label: "The definition", value: "Well-founded fear + outside + unable to return", detail: "The 1951 Convention Article 1: persecution for race, religion, nationality, social group or political opinion; outside the country of nationality; unable or unwilling to return: the refugee thereby distinct from the economic migrant and the traditional immigrant" },
    { label: "The protection cornerstone", value: "Non-refoulement", detail: "Article 33: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened', with the UNHCR's dual mandate (against violence and involuntary repatriation; against material deprivation)" },
    { label: "The numbers", value: "2.5 million to 8.4 million", detail: "UNHCR-protected refugees 1970 to 2006; a further 23.7 million internally displaced (similar characteristics, no international-law protection); more than 10,000 people per day becoming refugees or IDPs over the preceding decade" },
    { label: "The civilian burden", value: "Over 80% non-combatants", detail: "The casualties of recent African, Asian and European conflicts: the resettlement in Canada, the US, Europe and Australia bringing the mental-health issues to the Western clinic" },
    { label: "The eight categories", value: "Deprivation to brain injury", detail: "Material deprivation; war-like conditions; bodily injury; forced confinement and coercion; forced to harm others; disappearance, death or injury of loved ones; witnessing violence; brain injury: each conflict with its characteristic profile" },
    { label: "The risk arithmetic", value: "Potency + dose-effect", detail: "Brain injury, sexual violence, torture and bodily injury, coercion and confinement carry the greatest psychiatric-harm potential; cumulative trauma predicts cumulative symptoms: the personal-dimension caveat: a murdered child's meaning undefined by categories" },
    { label: "The persistence", value: "Decades, not months", detail: "45% of Bosnian PTSD/depression cases still meeting criteria 3 years later; Cambodian refugees affected 20 years after resettlement; 95% of depressed Vietnamese refugees presenting physical complaints; substance disorders emerging 5-10 years post-settlement (Hmong opium)" },
    { label: "The service answer", value: "Primary care + two instruments", detail: "The four-reason rationale (no self-referral; the stigma asymmetry; the healer pathway; the comorbidity) with the culturally adapted Hopkins Symptom Checklist and the Harvard Trauma Questionnaire, and disability the emerging gold-standard outcome" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The validated diagnosis and the trauma-focused therapies' evidence: this course's clinical neighbour carrying the treatment detail this layer does not duplicate" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The comorbid diagnosis behind the somatic front door: the depression protocol lives there, never duplicated here" },
    { label: "Traumatic Brain Injury Neuropsychiatry", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The head-injury layer's home: the ex-detainee findings' injury workup and the neurobehavioural sequelae of torture-related head trauma" },
    { label: "Transcultural Psychiatry & Stigma", type: "condition", href: "/psychiatry/transcultural-stigma/", note: "The somatic front door's own discipline and the stigma asymmetry behind the primary-care setting's second reason" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "Chronic insomnia among the prevalent disorders of the resettled, and the head-injury layer's sleep disturbance" },
    { label: "Indigenous & Folk Healing", type: "condition", href: "/psychiatry/indigenous-healing/", note: "The healer pathway: the third primary-care reason; the shrine-temple circuit met with collaboration-not-competition" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "The function-restoration logic behind the disability gold standard: the life-recovered measures" },
    { label: "Psychiatry in Primary Care", type: "condition", href: "/psychiatry/primary-care-psychiatry/", note: "The setting's own lesson: the four-reason rationale's home tier (in-batch sibling)" },
    { label: "Community Mental Health Services", type: "condition", href: "/psychiatry/mh-services/", note: "The embedded-programme principle: mental-health programmes inside existing healthcare facilities succeed (in-batch sibling)" },
    { label: "The Voluntary Sector", type: "condition", href: "/psychiatry/voluntary-sector/", note: "The NGO camp-clinic tier: the Indian lens's health-programme layer (in-batch sibling)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Refugee mental health runs on an engine with five linked chambers, and the chapter teaches them in order. The legal chamber establishes who the patient is: the 1951 Convention's definition (a well-founded fear of persecution for race, religion, nationality, social group or political opinion, outside the country of nationality, unable or unwilling to return) with Article 33's non-refoulement (no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened') as the protection cornerstone; the refugee is thereby not the economic migrant and not the traditional immigrant, and the distinction is clinical, not merely administrative, because protection status shapes disclosure, entitlement and the return-fear that maintains symptoms. The exposure chamber does the pathogenic work: eight trauma-event categories; material deprivation, war-like conditions, bodily injury, forced confinement and coercion, forced to harm others, disappearance, death or injury of loved ones, witnessing violence, brain injury: each conflict with its characteristic profile; the potency hierarchy (brain injury, sexual violence, torture and bodily injury, coercion and confinement carrying the greatest psychiatric-harm potential); and the dose-effect relationship: cumulative trauma predicting cumulative symptoms, with the personal-dimension caveat that a murdered child's meaning is undefined by any category. The outcomes chamber converts exposure into the three domains through the epidemiological triad (host (the refugee's personal and environmental characteristics), agent (the traumatic events), environment (the camp, the resettlement context)) producing medical illness (starvation, landmine injuries, the gender-violence sequelae of the Balkans, pregnancy, complicated self-administered abortions, sexually transmitted disease; the resettlement risks of obesity, diabetes and heart disease), psychiatric disorder (PTSD and major depression, culturally validated, comorbid) and disability: the neglected outcome, functional impairment possibly extremely high. The persistence chamber explains the chronology: 45% of Bosnian PTSD/depression cases meeting criteria three years later; Cambodian refugees still affected twenty years after resettlement; depression presenting physically in 95% of Vietnamese refugees; substance disorders delayed 5-10 years post-settlement; and the head-injury layer (head trauma among the commonest torture forms, the ex-detainee findings of executive-function loss and cortical thinning) long-lasting and previously overlooked. The service chamber closes the loop: primary care, for the four field-tested reasons, carrying the culturally adapted screen (the Hopkins checklist, the Harvard Trauma Questionnaire) and the function-focused treatment, with chronic severe disability the emerging gold standard that joins the psychiatric and the humanitarian rehabilitation goals at functional recovery.",
    steps: [
      "The legal frame: the Convention definition and Article 33's non-refoulement establish who the patient is; the protection status a clinical variable, shaping disclosure, entitlement and the return-fear that maintains symptoms; the refugee is not the economic migrant.",
      "The exposure engine: the eight trauma categories, each conflict with its characteristic profile; the potency hierarchy (brain injury, sexual violence, torture and bodily injury, coercion and confinement the most pathogenic); the dose-effect relationship: cumulative trauma predicting cumulative symptoms, with the personal-dimension caveat.",
      "The outcomes model: the epidemiological triad (host (personal and environmental characteristics), agent (the traumatic events), environment (the camp, the resettlement context)) interacting to produce the three outcome domains: medical illness, psychiatric disorder and disability.",
      "The three domains in the flesh: the medical layer (starvation, landmine injuries, the gender-violence sequelae; the resettlement risks), the psychiatric layer (PTSD and major depression validated across populations, comorbidity the rule) and the disability layer (the neglected outcome, functional impairment possibly extremely high, exacerbated by comorbidity).",
      "The persistence layer: 45% of Bosnian PTSD/depression cases meeting criteria 3 years later; Cambodian refugees 20 years after resettlement; the 95% somatic presentation of depressed Vietnamese refugees; substance disorders delayed 5-10 years post-settlement; head injury's long-lasting, previously overlooked effects.",
      "The service engine: primary care for the four reasons (no self-referral to psychiatry; the stigma asymmetry; the healer pathway; the comorbidity): the field-tested principle that mental-health programmes inside existing healthcare facilities succeed; the culturally adapted screen covering the trauma history, the psychiatric symptoms and the functional status.",
      "The recovery trajectory: trauma-focused and functional interventions with disability (chronic severe functional impairment) as the emerging gold-standard outcome driving both psychiatric and humanitarian rehabilitation, the public-health and protection goals meeting at functional recovery.",
    ],
    grade: "supported",
  },
  brainRegions: [],
  neurotransmitters: [],
  pathways: [
    {
      id: "persecution-to-care-pathway",
      name: "The persecution-to-care pathway (flight to function)",
      steps: [
        { label: "Persecution", detail: "Well-founded fear for race, religion, nationality, social group or political opinion: the Convention's five grounds" },
        { label: "Flight and displacement", detail: "Outside the country of nationality; the camp or the resettlement context: over 10,000 people per day becoming refugees or IDPs" },
        { label: "The trauma burden accumulates", detail: "The eight categories tallied, the potency weighted (brain injury, sexual violence, torture and bodily injury, coercion and confinement highest), the dose-effect arithmetic running" },
        { label: "The triad's outcomes", detail: "Host-agent-environment interaction producing medical illness, psychiatric disorder and disability: comorbidity the rule, function the neglected measure" },
        { label: "Primary-care contact", detail: "The somatic front door: physical complaints first, the screen (Hopkins checklist, Harvard Trauma Questionnaire) making the diagnosis" },
        { label: "Function-focused care", detail: "Trauma-focused therapies, depression treatment, substance vigilance, the head-injury workup: recovery measured in work, school and roles" },
      ],
      clinicalManifestation: "The refugee patient in the general clinic: body complaints, late presentation, psychiatric disorder behind the soma, and functional loss the treatable target.",
      grade: "supported",
    },
    {
      id: "non-refoulement-pathway",
      name: "The protection chain (non-refoulement to safety)",
      steps: [
        { label: "The well-founded fear established", detail: "The Convention definition applied: persecution grounds, outside the country, unable or unwilling to return" },
        { label: "The status and the cornerstone", detail: "Article 33: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'" },
        { label: "The dual mandate operates", detail: "The UNHCR's protection against violence and involuntary repatriation, and against material deprivation" },
        { label: "The frame extended", detail: "The Declaration of Human Rights and the Convention against Torture completing the protection architecture" },
        { label: "Resettlement", detail: "Canada, the US, Europe and Australia: the caseload arriving in every Western clinic" },
      ],
      clinicalManifestation: "The protection status as clinical variable: disclosure, entitlement and the return-fear that maintains symptoms; safety the precondition of treatment.",
      grade: "supported",
    },
    {
      id: "dose-effect-pathway",
      name: "The dose-effect pathway (cumulative trauma to cumulative symptoms)",
      steps: [
        { label: "The events tallied by category", detail: "The eight-category enquiry: each conflict with its characteristic profile the clinician must know" },
        { label: "The potency weighting applied", detail: "Brain injury, sexual violence, torture and bodily injury, coercion and confinement carrying the greatest psychiatric-harm potential" },
        { label: "The cumulative burden", detail: "Dose-effect: cumulative trauma predicting cumulative symptoms; the risk logic of the whole field" },
        { label: "The outcomes compound", detail: "PTSD and depression comorbid, the medical layer riding along, disability exacerbated by comorbidity" },
        { label: "The personal dimension", detail: "A murdered child's meaning undefined by categories: the taxonomy's honest limit, the meaning asked separately" },
      ],
      clinicalManifestation: "The high-burden survivor whose risk assessment is the trauma history itself: the structured eight-category enquiry as the clinical instrument.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "convention", time: "1951", title: "The Convention", description: "Article 1's definition: well-founded fear of persecution for race, religion, nationality, social group or political opinion; outside the country of nationality; unable or unwilling to return, and Article 33's non-refoulement: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'.", phase: "onset" },
    { id: "protocol", time: "1967", title: "The Protocol joins the frame", description: "The 1967 Protocol completes the legal pair the chapter teaches; the UNHCR's dual protection mandate (against violence and involuntary repatriation; against material deprivation) operates under it, with the Declaration of Human Rights and the Convention against Torture extending the protection architecture.", phase: "onset" },
    { id: "camp-survivors", time: "The post-war decades", title: "The camp-survivor literature", description: "Eitinger's concentration-camp studies establish the dual traumatisation: somatic trauma (head injury, hunger, infections) producing a psycho-organic syndrome; psychological trauma producing depression, with Thygesan's Danish confirmation: the baseline for Cambodia, Bosnia and the modern conflicts.", phase: "onset" },
    { id: "cambodian-era", time: "After the Cambodian conflict", title: "PTSD validated across cultures", description: "The Cambodian diagnoses (Kinzie; Mollica) make PTSD's cultural validity 'almost certain', with the culture-specific-symptom complement; the large-scale epidemiology confirming major depression and PTSD across Bosnian, Cambodian and Bhutanese populations follows.", phase: "peak" },
    { id: "bosnian-studies", time: "1999-2004", title: "The Bosnian longitudinal studies", description: "Mollica's Bosnian cohort: 45% of PTSD/depression cases still meeting criteria three years later; the Harvard Trauma Questionnaire developed as the field's trauma-event-and-symptoms instrument; the Vietnamese ex-detainee head-injury findings emerging alongside.", phase: "peak" },
    { id: "modern-scale", time: "2006", title: "8.4 million: the modern scale", description: "UNHCR-protected refugees risen from 2.5 million (1970) to 8.4 million, with 23.7 million internally displaced without international protection and more than 10,000 people per day becoming refugees or IDPs over the preceding decade: over 80% of casualties in recent African, Asian and European conflicts being non-combatants.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the apparatus as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The chapter's own arithmetic: 2.5 million UNHCR-protected refugees in 1970 rising to 8.4 million by 2006; a further 23.7 million internally displaced persons (similar characteristics, no international-law protection) and more than 10,000 people per day becoming refugees or IDPs over the preceding decade. The civilian burden: over 80% of casualties in recent African, Asian and European conflicts being non-combatants. The clinical caseload findings: 45% of Bosnian refugees with PTSD or depression still meeting criteria three years later; Cambodian refugees showing the same disorders twenty years after resettlement; 95% of depressed Vietnamese refugees presenting with physical complaints; substance-use disorders emerging 5-10 years post-settlement (the Hmong opium findings, varying by population); torture prevalence either rising or better-reported, with no treatment consensus after 25 years.",
    indianPrevalence: "India's refugee and displacement populations per the note: the Tibetan settlements (the longest-standing, with the depression-ageing findings now emerging), the Sri Lankan Tamil camps (the conflict-PTSD caseload), the Afghan and Rohingya urban refugees (the resource-scarce presentations), and the internal-displacement contexts; conflict and disaster displacements, the IDP majority without refugee-law protection; each population with its own trauma-event profile for the eight-category enquiry.",
    lifetimeRisk: "Structural, not actuarial: the dose-effect relationship makes cumulative trauma the predictor of cumulative symptoms; the conditional burden concentrated in the high-potency events (brain injury, sexual violence, torture and bodily injury, coercion and confinement) and rising with the count.",
    genderRatio: "The note carries no gender ratio for the psychiatric disorders; its gender content is the medical layer's: the Balkans' gender-violence sequelae (pregnancy, complicated self-administered abortions, sexually transmitted disease), with sexual violence among the highest-potency trauma events.",
    ageOfOnset: "Exposure determines the course, not age; the two age notes the lineage carries are the Bosnian elderly disability findings (functional impairment possibly extremely high) and the emerging depression-ageing findings in the Tibetan settlements.",
    indianNotes: "Costs (approx 2026): the camp-clinic screen (the Hopkins/HTQ delivered by the trained health worker) the cheapest effective layer; the referral tier the district psychiatry with the Tele-MANAS backstop; specialised trauma therapy scarce: task-shifting and the counsellor model the Indian scale answer.",
  },
  etiology: [
    { category: "social", factor: "The eight-category trauma exposure", details: "Material deprivation; war-like conditions; bodily injury; forced confinement and coercion; forced to harm others; disappearance, death or injury of loved ones; witnessing violence; brain injury: each conflict with its characteristic profile the clinician must know before the history makes sense." },
    { category: "psychological", factor: "The potency hierarchy", details: "Brain injury, sexual violence, torture and bodily injury, coercion and confinement carrying the greatest psychiatric-harm potential: the events that concentrate the risk and demand the direct enquiry." },
    { category: "social", factor: "The dose-effect relationship", details: "Cumulative trauma predicting cumulative symptoms: the risk arithmetic of the whole field; with the personal-dimension caveat: a murdered child's meaning undefined by categories; the tally never replaces the meaning." },
    { category: "environmental", factor: "The environment layer of the triad", details: "The camp and the resettlement context: the epidemiological triad's third arm: material deprivation, the healthcare-access barriers, and the resettlement risks (obesity, diabetes, heart disease) that follow safety." },
    { category: "biological", factor: "The head-injury layer", details: "Head trauma among the commonest torture forms; seizures, headaches, aggression, irritability, sleep disturbance; the Vietnamese ex-detainee findings: head-injury number inversely related to executive function, PTSD risk raised, cortical thinning: long-lasting and previously overlooked." },
  ],
  symptomClusters: [
    {
      category: "1. The PTSD-depression presentations",
      symptoms: ["The re-experiencing, avoidance and arousal clusters of PTSD: culturally validated across refugee populations, with the culture-specific-symptom complement alongside", "Major depression comorbid rather than alternative: the comorbidity the rule, both disorders treated", "Complex grief after the disappearance, death or injury of loved ones; chronic insomnia among the prevalent disorders of the resettled"],
    },
    {
      category: "2. The somatic front door",
      symptoms: ["Physical complaints dominating the presentation: 95% of depressed Vietnamese refugees presented physically", "The screen, not the presenting complaint, making the diagnosis: the Hopkins checklist behind every refugee's body story", "The Indian idiom: 'gas-burning-weakness' meeting the 95% finding; the depression screen behind every refugee's physical complaints"],
    },
    {
      category: "3. The head-injury presentations",
      symptoms: ["Seizures, headaches, aggression, irritability and sleep disturbance after torture-related or conflict head trauma", "The cognitive changes (executive-function difficulties per the ex-detainee findings) misread as character or as PTSD alone", "The injury layer long-lasting and previously overlooked: PTSD risk raised, cortical thinning reported"],
    },
    {
      category: "4. The disability pattern",
      symptoms: ["Functional impairment possibly extremely high: the Bosnian elderly findings; the neglected outcome domain", "The employment, education and social-role losses: the measurable life not lived; disability exacerbated by comorbidity", "The majority experience in some societies: disability the socio-economic implication, not the individual exception"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The refugee assessment",
      code: "The three-part screen",
      criteria: [
        "The trauma history: the eight categories enquired in order; material deprivation, war-like conditions, bodily injury, forced confinement and coercion, forced to harm others, disappearance, death or injury of loved ones, witnessing violence, brain injury: the events listable (the Harvard Trauma Questionnaire's structure).",
        "The psychiatric screen: the culturally adapted Hopkins Symptom Checklist for the anxiety-depression layer, the Harvard Trauma Questionnaire for the trauma-related symptoms; instruments proven effective and acceptable across refugee settings (the Indochinese patients providing symptoms with little distress).",
        "The functional status: work, school and social roles; the outcomes model's third domain and the treatment's gold-standard measure.",
        "The screen delivered whatever the presenting complaint: the somatic front door (95% of depressed Vietnamese refugees presenting physically) makes the instrument, not the complaint, the diagnostic route.",
      ],
      duration: "One structured encounter in primary care: the camp clinic, the district OPD or the resettlement practice.",
      indianNote: "The Hopkins-25's Tamil and other Indian-language adaptations exist; the HTQ's cross-cultural use is established: the trained health worker in the camp clinic delivers the screen at the cheapest effective layer of the Indian system.",
    },
    {
      system: "The scenario-based diagnostic framework",
      code: "The A-B-C presentations",
      criteria: [
        "(A) The Western-diagnosable pattern: the standard PTSD and major depression criteria met; the validated diagnoses applied directly.",
        "(B) The mixed pattern: the Western criteria met with culture-specific elements alongside; the validity findings' everyday case.",
        "(C) The culture-bound presentation: the distress speaking a local idiom without the standard cluster; the clinical determination that guides how the diagnostic approach proceeds.",
        "The middle path held throughout: neither the psychiatric overreach (labelling normal distress disordered) nor the humanitarian hostility (denying the seriously ill access to treatment).",
      ],
      duration: "Applied at the formulation, revisited as the presentation clarifies across contacts.",
      indianNote: "The Indian camp and district clinics meet the full A-B-C range: the 'gas-burning-weakness' idiom the C-presentation's daily face, the screen the instrument that finds the disorder behind it.",
    },
    {
      system: "The cross-cultural diagnostic logic",
      code: "The validity verdict",
      criteria: [
        "PTSD and major depression: tested and validated across refugee populations; the cultural validity of PTSD 'almost certain' since the Cambodian diagnoses, with the culture-specific-symptom complement.",
        "The WHO depression study's principle honoured: cross-cultural symptoms present but not necessarily the most-endorsed; the same caution possibly applying to PTSD.",
        "No culture-specific mass-violence syndrome yet defined: the culture-bound territory left open rather than invented.",
      ],
      duration: "The standing verdict behind every refugee formulation.",
      indianNote: "The Indian clinician applies the validated criteria through the local-language instruments: the culture-specific symptoms recorded alongside, never instead.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The economic migrant (not a refugee)", distinguishingFeatures: "Migration driven by economic motive without persecution; return possible without threat to life or freedom.", keyDifferentiator: "The Convention's definitional discipline: well-founded fear of persecution (race, religion, nationality, social group, political opinion), outside the country of nationality, unable or unwilling to return; non-refoulement and the UNHCR mandate following from it; the distinction is clinical because protection status shapes disclosure, entitlement and the return-fear that maintains symptoms." },
    { condition: "Normal distress versus psychiatric disorder", distinguishingFeatures: "The historical reservations: symptoms read as normal responses to abnormal events; the anthropological scepticism toward Western categories.", keyDifferentiator: "The validated-criteria resolution: standardised PTSD and major depression criteria tested across refugee settings; the middle path between the psychiatric overreach and the humanitarian hostility; the scenario framework's clinical determination decides." },
    { condition: "The head-injury picture mistaken for PTSD alone", distinguishingFeatures: "Aggression, irritability, sleep disturbance and cognitive change after torture-related head trauma: presentations that satisfy arousal-cluster criteria while carrying an injury substrate.", keyDifferentiator: "The injury workup: head trauma among the commonest torture forms; the ex-detainee findings (head-injury number inversely related to executive function; PTSD risk raised; cortical thinning) make the assessment mandatory, both diagnoses stand, both are treated." },
    { condition: "Somatic disease versus somatised depression", distinguishingFeatures: "Physical complaints dominating every consultation (the 95% pattern) with normal investigations and the missed mood disorder behind the body.", keyDifferentiator: "The screen, not the presenting complaint: the Hopkins checklist behind every refugee's physical presentation, while the medical layer is treated in parallel (the comorbidity principle: the disease burden and the resettlement risks belong to the same consultation)." },
    { condition: "The culture-bound presentation (scenario C)", distinguishingFeatures: "The distress speaking a local idiom (possession, nerves, the burning-weakness patterns) without the standard cluster architecture.", keyDifferentiator: "The scenario framework's determination: the culture-bound presentation examined through its own logic with the screen alongside; no culture-specific mass-violence syndrome yet defined, so the validated diagnoses are applied carefully, never forcibly." },
  ],
  management: [
    {
      category: "service-design",
      name: "Primary care as the setting — the four-reason rationale",
      description: "Refugee mental-health services belong in primary care because: (1) refugees seldom self-refer to psychiatry; (2) psychiatry carries a stigma that primary care does not; (3) refugees seek the local doctor and the indigenous healer for emotional suffering; (4) comorbidity dominates: the medical and psychiatric layers demanding the general setting. The field-tested principle: mental-health programmes inside existing healthcare facilities succeed where freestanding clinics fail.",
      whenToUse: "The design of every refugee mental-health service, and the referral discipline of every clinician who meets refugee patients.",
      indianContext: "The district hospital, the camp clinic and the NGO health programme: the four-setting rationale describes Indian help-seeking exactly; refugee mental health reaches the Indian system through these, not through psychiatry departments.",
    },
    {
      category: "service-design",
      name: "The screening apparatus — Hopkins and HTQ in primary care",
      description: "Culturally adapted instruments proven effective and acceptable: the Hopkins Symptom Checklist adaptations for the anxiety-depression layer (the Indochinese patients providing symptoms with little distress); the Harvard Trauma Questionnaire for the trauma events and symptoms, both listable. The assessment covers the trauma history (the eight categories), the psychiatric screen and the functional status: delivered whatever the presenting complaint, because the somatic front door (95% physical presentations) hides the diagnosis from the complaint-led consultation.",
      whenToUse: "Every refugee contact in primary care: the camp clinic, the district OPD, the resettlement practice; repeated at follow-up for the delayed disorders.",
      indianContext: "The Hopkins-25's Tamil and other Indian-language adaptations exist: the district-implementable layer, delivered by the trained health worker at the cheapest effective tier.",
    },
    {
      category: "psychotherapy",
      name: "Trauma-focused therapies, culturally adapted",
      description: "The PTSD evidence applied through cultural adaptation: the trauma-focused therapies carrying the treatment's active weight in the refugee population as in the single-event population, with the adaptation discipline the transcultural layer supplies (the instruments' own cross-cultural logic extended to the therapy).",
      whenToUse: "PTSD of any chronicity: the persistence findings (45% at three years; twenty-year caseloads) making 'too late' an unavailable concept.",
      indianContext: "Specialised trauma therapy is scarce in the Indian system: the task-shifting and counsellor model the scale answer, the referral tier (district psychiatry, Tele-MANAS backstop) carrying the complicated cases.",
    },
    {
      category: "psychotherapy",
      name: "Depression treatment through the somatic front door",
      description: "The depression comorbidity treated with the somatic-presentation vigilance: the explanation delivered through the body's own language ('the weakness and the pain are the body carrying a treatable illness of the mood'), the pharmacological programme belonging to the depressive-disorders course's own protocol, the follow-up measured in function.",
      whenToUse: "Every positive Hopkins screen, and every refugee physical presentation with normal investigations, where the screen is the next instrument.",
      indianContext: "The 'gas-burning-weakness' idiom met, never corrected: the depression screen behind every refugee's physical complaints, the chapter's own instruction for the Indian clinician.",
    },
    {
      category: "service-design",
      name: "Substance vigilance — the delayed window",
      description: "Substance-use disorders emerging 5-10 years post-settlement (the Hmong opium findings, varying by population): the initial assessment clean proves nothing about year six; the longitudinal follow-up carries the duty, the substance history revisited at every review.",
      whenToUse: "The follow-up architecture of every resettled refugee patient: the window known in advance, the questions asked on schedule.",
      indianContext: "The camp and urban-refugee settings where the years accumulate quietly: the counsellor's periodic substance questions cheaper than the missed dependence.",
    },
    {
      category: "service-design",
      name: "The head-injury assessment and management",
      description: "Torture implies head trauma until examined otherwise: the commonest torture forms include the blows to the head, and the presentations (seizures, headaches, aggression, irritability, sleep disturbance, the executive-function changes) earn the injury workup, not only the PTSD label. The ex-detainee findings (head-injury number inversely related to executive function; cortical thinning) make the assessment mandatory; the injury workup runs alongside the trauma treatment, both treated.",
      whenToUse: "Every torture survivor and every conflict survivor with head trauma in the history: the eighth category of the enquiry triggering the referral.",
      indianContext: "The Tamil-conflict ex-detainee and other populations: the aggression-irritability-cognitive presentations earning the district-hospital injury workup through the camp-clinic referral; the TBI neuropsychiatry course carrying the protocol.",
    },
    {
      category: "psychotherapy",
      name: "Function-focused rehabilitation — disability as the gold standard",
      description: "The psychosocial rehabilitation with the family-and-community programmes: the function-restoration logic (work, school, roles, social reintegration) as the outcome that matters, because disability is the neglected domain (functional impairment possibly extremely high; the Bosnian elderly findings) and the emerging gold standard: chronic severe functional disability driving the future of both psychiatric and humanitarian rehabilitation, the public-health and protection goals meeting at functional recovery.",
      whenToUse: "Every treatment plan: the functional status asked at every visit, the goals set with the family, the camp programme asked about the life regained.",
      indianContext: "The camp-services evaluation (the livelihood programmes, the education access) as rehabilitation-in-disguise: the Indian measure of the life recovered, per the chapter's gold standard.",
    },
  ],
  safety: {
    redFlags: [
      "Torture disclosed or suspected: head trauma among the commonest torture forms: the injury workup alongside the PTSD assessment, and the protection documentation that follows the disclosure",
      "Non-refoulement under threat: repatriation pressure while the life-or-freedom threat persists: the protection cornerstone is a clinical variable, not only a legal one",
      "The high-potency events disclosed: sexual violence, brain injury, torture and bodily injury, forced confinement: the cumulative-vigilance duty the dose-effect finding imposes",
      "The gender-violence medical emergencies (pregnancy, complicated self-administered abortions, sexually transmitted disease (the Balkans' sequelae)) the medical layer never suspended while the psychiatric work proceeds",
      "Starvation, landmine injuries and the untreated disease burden of the camp environment: the comorbidity principle making the general medical assessment part of the psychiatric one",
      "The delayed substance window: disorders emerging 5-10 years post-settlement (the Hmong opium findings), undetected where the follow-up closes early",
    ],
    urgentGuidance:
      "The order of operations: (1) the medical emergencies first; starvation, landmine injuries, the gender-violence sequelae (pregnancy, complicated self-administered abortions, sexually transmitted disease) treated before or alongside the psychiatric work; (2) the protection question asked where return pressure is in the room: non-refoulement (no return to territories where life or freedom would be threatened) escalated through the legal and protection channels, the disclosure documented; (3) the torture survivor examined for head injury: seizures, headaches, aggression, irritability, sleep disturbance and cognitive change earning the injury workup, not only the PTSD label; (4) the screen delivered whatever the presenting complaint: the somatic front door makes the Hopkins checklist and the HTQ the instruments of every refugee contact; (5) the longitudinal follow-up booked: the substance window (5-10 years) and the persistence findings (45% at three years; twenty-year caseloads) make the single assessment the beginning, never the end.",
  },
  drugLinks: [],
  contentGaps: [
    "No medication role: the note names no drug; the depression and PTSD pharmacology belongs to those courses and is never invented here; torture treatment itself carries the note's verdict ('no treatment consensus after 25 years'), so drugLinks is empty by design.",
    "No neuroscience grounding: brainRegions and neurotransmitters are empty by design. The note's only neurobiological content is the Vietnamese ex-detainee findings (executive function inversely related to head-injury count; PTSD risk raised; cortical thinning), which ground no regional teaching here; the head-injury neuroscience belongs to the TBI neuropsychiatry course.",
    "The torture-specific treatment literature (25 years without consensus) has no KYP lesson: the recognition, the head-injury workup and the function-focused care are taught here as the working layer.",
    "The humanitarian-protection operations tier (asylum procedure, UNHCR registration, camp administration) has no KYP lesson. The legal frame is taught here as clinical context only, never as legal advice.",
    "The refugee substance-use tier (the delayed 5-10-year onset findings, the Hmong opium literature) is taught here as vigilance: the substance courses carry their own treatment, and no refugee-specific substance lesson exists.",
    "The in-batch service siblings (primary-care-psychiatry, mh-services, voluntary-sector) are referenced as this course's setting, programme and NGO tiers: their own lessons carry the generic detail, this course the refugee-specific layer.",
  ],
  patientGuide: {
    whatIsIt:
      "A refugee is someone who had to leave their country because of a well-founded fear of being persecuted (for their race, religion, nationality, social group or political opinion) and who cannot or dare not go back; international law protects them from being returned to danger (the non-refoulement principle). The mental-health picture that can follow: sleep-disturbing memories, fear, low mood and a body that carries the distress as pain, weakness and 'gas'; often for years, sometimes for decades. It is not weakness, and it is not rare: these are the known effects of the kinds of events refugees have survived.",
    whatCausesIt:
      "The events themselves, tallied honestly: deprivation, war conditions, injury, imprisonment and coercion, being forced to harm others, the disappearance or death of loved ones, witnessing violence, and blows to the head. Two rules matter: some events (brain injury, sexual violence, torture and beatings, confinement) carry the greatest harm potential; and the more events a person has survived, the greater the burden: the dose-effect. Safety alone does not undo the dose: many remain unwell for years, which is why treatment exists.",
    symptoms:
      "Memories and dreams that return uninvited; avoiding anything that recalls the events; being constantly on guard, jumpy or irritable; low mood, tearfulness and loss of interest; tiredness, pain, 'gas' and weakness (the body's complaints often come first, in one study 95 in 100 depressed refugees complained of the body, not the mind); headaches, temper changes and sleep problems after head injuries; and gradually losing one's work, studies and family role.",
    treatment:
      "Care through the general clinic, not only the psychiatry department: this is where refugees are known to seek help and where the stigma is smaller. Two short questionnaires (the Hopkins checklist and the Harvard Trauma Questionnaire, adapted into local languages) find what the body's complaints hide; talking therapies that work on the trauma exist in culturally adapted form; depression has its treatment; the years after resettlement are watched for alcohol and drug problems that can appear 5-10 years on; head injuries get their own assessment; and recovery is measured in what you get back: work, school, your role in the family.",
    selfHelp: [
      "Let the clinic ask the questionnaire questions. They are asked of everyone who has been through what you have, and they find what the body's complaints hide.",
      "Tell the doctor about every blow to the head, especially under detention or torture: the headaches, temper and sleep changes that follow need their own assessment.",
      "Keep every appointment even when the complaints feel physical. The treatment works through the body's story, not against it.",
      "Name the losses that can be rebuilt (work, school, the family role) and treat them as the treatment's real targets.",
      "Watch the years, not just the weeks: if alcohol or other substances start becoming necessary, bring it to the clinic early. This is a known, treatable pattern.",
      "Keep the healer visits and the clinic visits both: two doors open protects better than one.",
    ],
    whenToSeekHelp: [
      "Nightmares, avoidance and jumpiness still running your life months or years after reaching safety: the persistence is expected, and it is treatable at any stage",
      "Body pain, weakness or 'gas' with normal test results: ask for the mental-health screen rather than another scan",
      "Headaches, temper outbursts, aggression or sleep problems after head injuries: the injury needs its own assessment",
      "Alcohol or opium becoming daily: the delayed pattern is known and treatable, without shame",
      "Losing work, studies or the family role to the symptoms: function is the outcome the treatment targets",
      "Any threat of being returned to danger: tell the treating team; the protection question is part of the care",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24x7, free, multiple Indian languages), for distress, family crises and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP: the referral tier, no psychiatric self-referral needed",
      "The camp clinic and NGO health programme: the screening layer closest to the settlement (the Hopkins-25 exists in Tamil and other Indian languages)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific refugee mental-health guideline exists; practice follows the Oxford chapter's primary-care-screening logic mapped onto the Indian district system: the DMHP district tier, the camp clinics and the NGO health programmes as the delivery layer, with the note's own caution that the internal-displacement majority lives without refugee-law protection.",
    systemContext: "Refugee mental health reaches the Indian system through district hospitals, camp clinics and NGO health programmes, not psychiatry departments; the chapter's four-setting rationale (no self-referral; the stigma asymmetry; the healer pathway; the comorbidity) describes Indian help-seeking exactly. The populations: the Tibetan settlements (the longest-standing, the depression-ageing findings now emerging), the Sri Lankan Tamil camps (the conflict-PTSD caseload), the Afghan and Rohingya urban refugees (the resource-scarce presentations), and the internal-displacement contexts (conflict and disaster).",
    programmeContext: "The screening instruments as the district-implementable layer: the Hopkins-25's Tamil and other Indian-language adaptations exist; the HTQ's cross-cultural use is established: the trained health worker delivering the screen in the camp clinic at the cheapest effective tier. The camp-services evaluation (the livelihood programmes, the education access) is rehabilitation-in-disguise, per the chapter's gold standard; the healer pathway (the shrine-temple circuit serving displaced populations) is met with the indigenous-healing note's collaboration-not-competition discipline.",
    costConsiderations: "Costs (approx 2026): the camp-clinic screen (the Hopkins/HTQ, the trained health worker) is the cheapest effective layer; the referral tier is the district psychiatry with the Tele-MANAS backstop; specialised trauma therapy is scarce, task-shifting and the counsellor model are the Indian scale answer, the honest economics of the whole tier.",
    culturalConsiderations: "The somatic presentation is the Indian clinician's daily material: the 'gas-burning-weakness' idiom meeting the 95%-physical-presentation finding; the depression screen behind every refugee's physical complaints, the chapter's own instruction. The head-injury layer: torture and conflict head trauma (the ex-detainee findings) in the Tamil-conflict and other populations; the aggression-irritability-cognitive presentations earning the injury workup, not just the PTSD label. The disability focus: the camp populations' functional impairment (the employment, education and social-role losses) as the measurable outcome.",
    patientCounselling: [
      "The screening script: 'Your body's complaints may be carrying the mind's suffering; these questions are asked of everyone who has been through what you have, and they find what the scans cannot.'",
      "The trauma-history script: 'I ask everyone about the events on this list; deprivation, danger, injury, imprisonment, losses, what you saw, blows to the head. It tells me what your mind and body have carried, and what to watch for.'",
      "The persistence script: 'Time and safety alone do not reliably heal this, many are still unwell years later; the treatment works, and starting late is still starting.'",
      "The head-injury script: 'The headaches, the temper, the sleep changes after the blows to the head need their own assessment, not just the stress label.'",
      "The substance script: 'Trouble with alcohol or opium can appear years after reaching safety. It is a known pattern, we watch for it together, and there is no shame in it.'",
      "The function script: 'We measure recovery in what you get back (your work, the children's school, your role in the family) not only in symptoms.'",
      "The healer script: 'The temple visits and this treatment can both continue, both doors open; if the suffering grows, come to us first.'",
    ],
  },
  decisionPath: {
    title: "The refugee patient's screening-and-care flow",
    nodes: [
      {
        id: "start",
        question: "A refugee patient presents in primary care: the camp clinic, the district OPD, the resettlement practice. What does the first contact show?",
        branches: [
          { label: "Physical complaints dominate (the somatic front door)", next: "somatic-gate" },
          { label: "Trauma history volunteered or elicited", next: "trauma-gate" },
          { label: "Protection concern (return threat, torture disclosure)", next: "protection-gate" },
        ],
      },
      {
        id: "somatic-gate",
        question: "The body carries it: 95% of depressed Vietnamese refugees presented physically. What does the three-part screen show?",
        branches: [
          { label: "Hopkins/HTQ screen positive (depression and/or PTSD)", next: "treat-path" },
          { label: "Screen negative; medical illness found", next: "medical-path" },
        ],
      },
      {
        id: "trauma-gate",
        question: "The eight-category enquiry begins. What is the burden?",
        branches: [
          { label: "High-potency events (torture, sexual violence, head injury, confinement)", next: "high-burden-path" },
          { label: "Lower-potency burden; function intact", next: "watch-path" },
        ],
      },
      {
        id: "high-burden-path",
        question: "The dose-effect arithmetic: cumulative trauma predicts cumulative symptoms. The head-injury question: blows to the head, detention beatings, unconsciousness?",
        branches: [
          { label: "Head injury among the events", next: "head-injury-path" },
          { label: "No head injury", next: "psychiatric-path" },
        ],
      },
      {
        id: "protection-gate",
        question: "The protection question: return threat, torture disclosure, the non-refoulement risk?",
        branches: [
          { label: "Return to threatened territories being pressed (non-refoulement)", next: "protection-path" },
          { label: "Torture disclosed", next: "torture-path" },
        ],
      },
      { id: "treat-path", question: "The positive screen acted on.", recommendation: "The scenario framework guides the formulation: (A) the Western-diagnosable pattern, (B) the mixed pattern with culture-specific elements, (C) the culture-bound presentation, the middle path held throughout; trauma-focused therapy culturally adapted; depression treatment through the somatic complaints (the pharmacology lives in the depressive-disorders course); the functional goals set with the family; the follow-up booked for the delayed disorders." },
      { id: "medical-path", question: "The screen negative, the body positive.", recommendation: "The medical layer treated in parallel: the comorbidity principle: the disease burden (starvation, injuries, the gender-violence sequelae) and the resettlement risks (obesity, diabetes, heart disease) both belong to the refugee's care; the psychiatric screen repeated at the follow-up: the somatic front door opens more than once." },
      { id: "watch-path", question: "Lower-potency burden, function intact.", recommendation: "The screen recorded, the function documented, the follow-up scheduled: the cumulative-exposure patient needs the cumulative vigilance; the trauma history is the risk assessment, and the substance window (5-10 years) is explained at the outset." },
      { id: "head-injury-path", question: "The torture or conflict survivor with head trauma.", recommendation: "The injury workup alongside the PTSD assessment: seizures, headaches, aggression, irritability, sleep disturbance and the executive-function changes (the ex-detainee findings, head-injury number inversely related to executive function; cortical thinning) earn the district referral; the TBI neuropsychiatry course carries the injury protocol; the trauma treatment proceeds in parallel, both diagnoses stand, both are treated." },
      { id: "psychiatric-path", question: "High burden without head injury.", recommendation: "Trauma-focused, culturally adapted therapy for PTSD; depression treatment with the somatic-presentation vigilance; the functional status measured at every visit; the substance-delay window explained; the family-and-community programmes engaged: the camp-services and livelihood tier as rehabilitation-in-disguise." },
      { id: "protection-path", question: "Non-refoulement under threat.", recommendation: "The protection cornerstone: no return to territories where life or freedom would be threatened; the escalation through the legal and protection channels; the clinical duty: the disclosure documented, the distress treated, the return-fear addressed as the maintaining variable it is; protection is treatment's precondition." },
      { id: "torture-path", question: "The torture survivor.", recommendation: "Head trauma among the commonest torture forms: the injury workup, not just the PTSD label; the HTQ's event-and-symptom structure for the history; the honest counsel that torture treatment carries no consensus after 25 years. The specialised referral where it exists, and the function-focused care regardless: the life-recovered measures as the gold standard." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Assuming time and safety heal: the 'they will get over it' error",
      why: "The persistence findings contradict it: 45% of Bosnian refugees with PTSD or depression still met criteria three years later, and Cambodian refugees showed the same disorders twenty years after resettlement; the untreated morbidity accumulates for decades.",
      correction: "Persistence treated as the baseline: the screen offered at every refugee contact regardless of time elapsed, and the treatment begun at whatever stage the patient arrives; decades-old cases still respond.",
    },
    {
      mistake: "Taking the presenting complaint at face value: the somatic front door missed",
      why: "95% of depressed Vietnamese refugees presented with physical complaints; the complaint-led consultation finds the body and misses the disorder, and the refugee returns to the healer who at least names something.",
      correction: "The screen, not the presenting complaint: the Hopkins checklist and the HTQ behind every refugee's physical presentation, with the medical layer treated in parallel rather than used as the exit.",
    },
    {
      mistake: "Referring refugees to the psychiatry department and waiting",
      why: "Refugees seldom self-refer to psychiatry; psychiatry carries the stigma primary care does not; the actual pathway runs through the local doctor and the indigenous healer; and the medical-psychiatric comorbidity demands the general setting: the freestanding clinic waits for patients who never arrive.",
      correction: "The programme embedded in primary care: the field-tested principle that mental-health programmes inside existing healthcare facilities succeed; the psychiatric tier as the referral, never the front door.",
    },
    {
      mistake: "Stopping at the PTSD label in the torture survivor",
      why: "Head trauma is among the commonest torture forms, and the aggression, irritability, sleep disturbance and cognitive changes carry an injury substrate: the ex-detainee findings (executive function inversely related to head-injury count; cortical thinning) make the pure-stress reading a clinical error.",
      correction: "The head-injury workup mandatory: the injury assessed, not assumed, both diagnoses stand, both are treated, and the injury protocol belongs to the TBI neuropsychiatry course.",
    },
    {
      mistake: "Treating the symptoms and ignoring the function",
      why: "Disability is the neglected outcome: functional impairment possibly extremely high (the Bosnian elderly findings), exacerbated by comorbidity, the majority experience in some societies. A symptom-score recovery that leaves the patient housebound is no recovery.",
      correction: "The disability gold standard: the functional status asked at every visit, the goals set with the family (work, school, roles), the camp programme asked about the life regained; the measure that joins psychiatric and humanitarian rehabilitation.",
    },
    {
      mistake: "Closing the follow-up before the substance window opens",
      why: "Substance-use disorders emerge 5-10 years post-settlement (the Hmong opium findings, varying by population): the initial assessment clean proves nothing about year six, and the caseload arrives after the programme has packed up.",
      correction: "The longitudinal duty: the follow-up architecture designed for the decade, the substance history revisited on schedule at every review, the patient warned of the window in advance.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define the refugee per the 1951 Convention (the five persecution grounds, outside the country of nationality, unable or unwilling to return) and state the non-refoulement principle (Article 33) with its protection formula.",
        "Recite the eight trauma-event categories with the potency ranking and the dose-effect relationship.",
        "The outcomes model: the host-agent-environment epidemiological triad and the three outcome domains; medical illness, psychiatric disorder, disability.",
        "The four reasons refugee mental-health services belong in primary care, and the two culturally adapted screening instruments.",
        "The persistence findings: the Bosnian 45%-at-3-years figure, the Cambodian 20-year caseloads, the 95% somatic presentation, and the 5-10-year substance delay.",
      ],
      practical: [
        "Demonstrate the three-part refugee screen on a simulated camp-clinic patient: the trauma history (the eight categories), the Hopkins/HTQ psychiatric screen, and the functional status, and present the formulation through the A-B-C scenario framework.",
        "Take the history of a refugee presenting with physical complaints: show the somatic-to-screen bridge and present the comorbidity-based plan (the medical and psychiatric layers together).",
      ],
      longAnswer: [
        "Refugees and mental health: the definitions and the law, the trauma taxonomy, the outcomes model, and the principles of assessment and treatment in primary care.",
        "The function-focused model of refugee mental-health care: the four-reason primary-care rationale, the screening apparatus (Hopkins checklist, Harvard Trauma Questionnaire), and disability as the gold-standard outcome.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DEFINITION: well-founded fear of persecution (race, religion, nationality, social group, political opinion) + outside the country of nationality + unable or unwilling to return; NON-REFOULEMENT (Article 33): no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'; the protection cornerstone.",
        "THE NUMBERS: 2.5 million UNHCR-protected (1970) to 8.4 million (2006); 23.7 million internally displaced (similar characteristics, no international-law protection); more than 10,000 people per day becoming refugees or IDPs over the preceding decade.",
        "THE CIVILIAN BURDEN: over 80% of casualties in recent African, Asian and European conflicts being non-combatants.",
        "THE EIGHT CATEGORIES: material deprivation; war-like conditions; bodily injury; forced confinement and coercion; forced to harm others; disappearance, death or injury of loved ones; witnessing violence; brain injury.",
        "THE POTENCY HIERARCHY: brain injury, sexual violence, torture and bodily injury, coercion and confinement; the greatest psychiatric-harm potential; with the DOSE-EFFECT relationship: cumulative trauma predicting cumulative symptoms.",
        "THE TRIAD AND THE THREE DOMAINS: host (personal and environmental characteristics) (agent (the traumatic events)) environment (the camp, the resettlement context) producing medical illness, psychiatric disorder and disability.",
        "THE PERSISTENCE FINDINGS: 45% of Bosnian PTSD/depression cases meeting criteria 3 years later; Cambodian refugees 20 years after resettlement; 95% of depressed Vietnamese refugees presenting physical complaints; substance disorders 5-10 years post-settlement (Hmong opium).",
        "THE HEAD-INJURY LAYER: head trauma among the commonest torture forms; seizures, headaches, aggression, irritability, sleep disturbance; the ex-detainee findings: head-injury number inversely related to executive function, PTSD risk raised, cortical thinning.",
        "THE SETTING AND THE INSTRUMENTS: primary care for the four reasons (no self-referral; the stigma asymmetry; the healer pathway; the comorbidity); the culturally adapted Hopkins Symptom Checklist and the Harvard Trauma Questionnaire.",
        "THE VALIDITY VERDICT: PTSD and major depression tested and validated across refugee populations; no culture-specific mass-violence syndrome yet defined; the A-B-C scenario framework: the middle path between overreach and hostility.",
        "THE GOLD STANDARD: chronic severe functional disability driving both psychiatric and humanitarian rehabilitation; the life-recovered measures (work, school, roles).",
      ],
      pyqConcepts: [
        "Non-refoulement: the single most examined line of this territory (the MCQ the note itself writes).",
        "The eight-category taxonomy: the 'all EXCEPT' question format the note's self-test demonstrates.",
        "The potency hierarchy with the dose-effect arithmetic: the risk question that recurs.",
        "The 95% somatic-presentation figure: the clinical-vignette hook behind the refugee patient with body complaints.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 54-year-old Vietnamese refugee, twenty years resettled, attends the community clinic with two years of body pain, weakness and sleeplessness; three specialist consultations and normal investigations; the husband answering for her: the somatic front door recognised (the 95% finding, the screen, not the complaint, makes the diagnosis); the three-part screen delivered in her language (the Hopkins checklist's Indochinese adaptation); the PTSD-depression comorbidity formulated through the scenario framework (pattern A with the culture-specific complement); the trauma-focused therapy culturally adapted, the depression treated, the functional goals set; the teaching: persistence is the baseline; twenty years is not 'too late', it is the typical late presentation.",
        "A 47-year-old Sri Lankan Tamil man in a camp clinic, referred by the camp teacher for escalating aggression and irritability; chronic headaches and broken sleep; detained during the conflict with beatings to the head and brief unconsciousness: the eight-category enquiry tallies the high-potency burden (forced confinement, torture, the disappearance of a brother, head injury); the head-injury workup triggered alongside the PTSD assessment: the ex-detainee findings make the injury question mandatory, not optional; the district referral for the injury protocol, the trauma treatment in Tamil, the family psychoeducation distinguishing symptom-and-injury from character; the teaching: torture implies head trauma until examined otherwise, and both diagnoses are treated.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Non-refoulement: no refugee expelled or returned to territories where life or freedom would be threatened (Article 33).",
        "The eight trauma categories: recite the set (deprivation to brain injury).",
        "Highest psychiatric potency: brain injury, sexual violence, torture and bodily injury, coercion and confinement.",
        "95% of depressed Vietnamese refugees presented with physical complaints: the somatic front door.",
        "Primary care the setting (the four reasons); the Hopkins checklist and the Harvard Trauma Questionnaire the instruments.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The trauma history IS the risk assessment: the eight categories with the dose-effect arithmetic; the cumulative-exposure patient needs the cumulative vigilance, and the tally never replaces the meaning (a murdered child is not a category).",
        "The torture survivor's head-injury duty: the aggression and irritability that look like PTSD have an injury substrate; the ex-detainee findings (executive function inversely related to head-injury count; cortical thinning) make the workup mandatory and the label insufficient.",
        "The longitudinal duty: the substance window opens 5-10 years post-settlement; the camp programme that closes at year two misses the caseload it was built for; design the follow-up for the decade.",
        "The screening instruments are themselves therapeutic: symptoms finally named, the story finally listable. The moment of recognition is the beginning of treatment, which is why the screen is delivered at first contact, not after the investigations conclude.",
        "The disability gold standard in practice: the camp programme asked about the life regained (work, school, roles) never only the symptoms reduced; the measure that aligns psychiatric and humanitarian rehabilitation, and the honest answer to 'what should we actually measure'.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "Twenty years of body pain",
      presentation: "The symptoms were all physical; the war was twenty years gone.",
      initialPresentation: "A 54-year-old Vietnamese refugee, twenty years resettled, attending the community primary-care clinic with two years of body pain, 'gas', weakness and sleeplessness. Three specialist consultations, two endoscopies and an abdominal ultrasound all normal; the husband answering for her at each visit. The GP's screen (the Hopkins checklist's Indochinese adaptation, delivered by the bilingual health worker) was strongly positive for depression, and the Harvard Trauma Questionnaire elicited the trauma history the specialists never asked for.",
      history: "The flight decades earlier: the boat, the camp, the material deprivation; a brother disappeared and never found; violence witnessed and never discussed. No psychiatric contact ever: the general clinic attended for physical complaints only, always with the husband interpreting. No head injuries. No substance use. The market stall she ran for years closed two winters ago; the grandchildren's school run taken over by a daughter.",
      examination: "Depressed mood and biological symptoms elicited only after the somatic-to-sleep bridge; the intrusion and avoidance clusters present on direct questioning; the functional decline documented (the stall, the school run); no psychotic features; no head-injury signs.",
      diagnosis: "Major depression with comorbid PTSD, somatic presentation, twenty years post-resettlement: the persistent, late-arriving caseload the chapter's findings predict.",
      management: "The screen fed back in her own language with the somatic explanation ('the weakness and the pain are the body carrying a treatable illness of the mood'); the scenario framework applied: pattern A, the Western-diagnosable presentation with the culture-specific complement; trauma-focused therapy culturally adapted through the community programme; the depression treatment per the depressive-disorders course's own protocol (no pharmacology duplicated here); the functional goals set with the family: the stall, the school run; the husband engaged in the family session rather than left as the interpreter of record.",
      outcome: "Gradual: the somatic complaints receding as the mood lifted over the following months; the stall reopened at half-days by month four; the screen scores falling; the memory work proceeding at her pace. The long recovery acknowledged as real work, twenty years after the flight.",
      teachingPoints: [
        "The somatic front door: 95% of depressed Vietnamese refugees presented physically; the screen, not the presenting complaint, made the diagnosis.",
        "The persistence findings in the flesh: twenty years after resettlement, the disorders still present, still treatable; 'too late' is not a clinical category here.",
        "Primary care the setting: the general clinic was where she already was; the psychiatric referral was never needed for the diagnosis to be made.",
        "The functional goals (the stall, the school run) as the family-visible recovery: the disability gold standard in miniature.",
      ],
    },
    {
      title: "The headaches behind the temper",
      presentation: "The camp called it temper; the head injuries told the rest.",
      initialPresentation: "A 47-year-old Sri Lankan Tamil man in a camp clinic, referred by the camp teacher after escalating aggression: he had struck a neighbour's son over a boundary dispute, uncharacteristic for a man known as quiet. Chronic headaches, broken sleep, irritability reported by the wife for two years. Detained during the conflict years earlier: beatings to the head, two episodes of witnessed unconsciousness, forced confessions under coercion; a brother disappeared in the final months.",
      history: "The eight-category enquiry in Tamil: war-like conditions; forced confinement and coercion (the detention); bodily injury and torture (the beatings); brain injury (the head trauma with unconsciousness); disappearance of a loved one; witnessing violence; material deprivation in the camp years. No substance use. The family had attributed the temper to 'the stress': the camp's shared explanation for everything.",
      examination: "Headaches, irritability, aggression and sleep disturbance: the head-injury tetrad; the PTSD cluster positive on the Harvard Trauma Questionnaire (Tamil); cognitive screening showing executive-function difficulties consistent with the ex-detainee findings; no seizure history elicited, the neurological referral booked regardless; the dose-effect arithmetic visible: high-potency burden, cumulative count.",
      diagnosis: "PTSD with the head-injury layer: torture-related head trauma carrying an injury substrate beneath the aggression, irritability and cognitive change; comorbid depressive features.",
      management: "The district-hospital referral for the injury workup (the TBI neuropsychiatry course's protocol, imaging and the seizure assessment); the trauma-focused treatment in Tamil through the counsellor; the family psychoeducation distinguishing symptom-and-injury from character ('the temper has causes we can treat'); the function focus: the camp livelihood programme engaged as rehabilitation-in-disguise; the protection context respected: no return pressure while the threat persists; non-refoulement the silent precondition of the whole plan.",
      outcome: "The injury workup managed jointly with the district physicians; the irritability partially settled with the combined programme over the following months; the wife's understanding changing the household's handling of the headaches; the livelihood role regained in steps: the camp-services evaluation recording the function, not only the symptoms.",
      teachingPoints: [
        "Torture implies head trauma until examined otherwise, among the commonest torture forms, and the injury workup is mandatory, not optional.",
        "The ex-detainee findings applied: head-injury number inversely related to executive function, PTSD risk raised, both diagnoses stand, both are treated.",
        "The dose-effect in the flesh: the high-potency tally (confinement, torture, head injury, the disappeared brother) predicted the burden before any questionnaire was scored.",
        "The Indian pathway working as designed: the camp teacher's referral, the camp clinic's screen, the district tier's injury protocol; the function measured at the end.",
      ],
    },
  ],
  clinicalPearls: [
    "Non-refoulement: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'. Article 33, the protection cornerstone of the whole frame.",
    "The refugee is not the economic migrant: persecution (race, religion, nationality, social group, political opinion) + outside the country + unable or unwilling to return; the distinction clinical, not merely legal.",
    "Over 80% of casualties in recent African, Asian and European conflicts: non-combatants; the civilian burden the resettlement clinics inherit.",
    "The eight categories with the potency ranking: brain injury, sexual violence, torture and bodily injury, coercion and confinement the most pathogenic, and the dose-effect: cumulative trauma predicting cumulative symptoms.",
    "45% of Bosnian PTSD/depression cases still met criteria three years later; Cambodian refugees 20 years after resettlement: persistence is the baseline, not the exception.",
    "95% of depressed Vietnamese refugees presented with physical complaints: the screen, not the presenting complaint, makes the diagnosis.",
    "Substance disorders arrive 5-10 years post-settlement (the Hmong opium findings, varying by population): the follow-up duty measured in years.",
    "Torture implies head trauma until examined otherwise: the aggression, irritability and cognitive changes need the injury workup, not just the PTSD label.",
    "The four reasons for primary care: refugees seldom self-refer to psychiatry; the stigma asymmetry; the healer pathway; the comorbidity, and the field-tested principle: programmes inside existing healthcare facilities succeed.",
    "PTSD and major depression: culturally validated across refugee populations; no culture-specific mass-violence syndrome yet defined; the A-B-C scenario framework the middle path.",
    "Disability is the neglected outcome and the emerging gold standard: chronic severe functional impairment driving rehabilitation measured in work, school and roles; the life recovered.",
    "The camp-survivor lineage: Eitinger's dual traumatisation; somatic trauma (head injury, hunger, infections) to a psycho-organic syndrome; psychological trauma to depression: the field's foundation.",
  ],
  highYieldSummary: [
    "THE LAW: the 1951 Convention (Article 1) defines the refugee; well-founded fear of persecution for race, religion, nationality, social group or political opinion; outside the country of nationality; unable or unwilling to return, and Article 33 establishes NON-REFOULEMENT: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'; the 1967 Protocol completes the pair; the UNHCR holds the dual mandate (against violence and involuntary repatriation; against material deprivation); the Declaration of Human Rights and the Convention against Torture extend the frame; and the definitional discipline separates the refugee from the economic migrant and the traditional immigrant. THE NUMBERS: 2.5 million UNHCR-protected in 1970 to 8.4 million by 2006; 23.7 million internally displaced with similar characteristics and no international-law protection; more than 10,000 people per day becoming refugees or IDPs over the preceding decade; over 80% of casualties in recent African, Asian and European conflicts non-combatants: the resettlement in Canada, the US, Europe and Australia bringing the caseload to every Western clinic.",
    "THE TRAUMA TAXONOMY: the camp-survivor lineage first. Eitinger's dual traumatisation (somatic trauma: head injury, hunger, infections, producing a psycho-organic syndrome; psychological trauma producing depression) with Thygesan's Danish confirmation: the baseline for Cambodia, Bosnia and the modern conflicts. THE EIGHT CATEGORIES: (1) material deprivation; (2) war-like conditions; (3) bodily injury; (4) forced confinement and coercion; (5) forced to harm others; (6) disappearance, death or injury of loved ones; (7) witnessing violence; (8) brain injury: each conflict with its characteristic profile the clinician must know. THE POTENCY HIERARCHY: brain injury, sexual violence, torture and bodily injury, coercion and confinement carrying the greatest psychiatric-harm potential; THE DOSE-EFFECT: cumulative trauma predicting cumulative symptoms, with the personal-dimension caveat (a murdered child's meaning undefined by categories); torture prevalence either rising or better-reported, no treatment consensus after 25 years.",
    "THE OUTCOMES MODEL: the epidemiological triad (host (the refugee's personal and environmental characteristics), agent (the traumatic events), environment (the camp, the resettlement context)) producing the THREE DOMAINS: medical illness (starvation, landmine injuries, the Balkans' gender-violence sequelae, pregnancy, complicated self-administered abortions, sexually transmitted disease; the resettlement risks of obesity, diabetes and heart disease; the access barriers; the self-care programmes' positive impact), psychiatric disorder (PTSD 'almost certainly' culturally valid since the Cambodian diagnoses with the culture-specific complement; the Bosnian, Cambodian and Bhutanese confirmations; comorbidity the rule; complex grief and chronic insomnia prevalent), and DISABILITY: the neglected outcome: functional impairment possibly extremely high (the Bosnian elderly findings), exacerbated by comorbidity, the majority experience in some societies. THE PERSISTENCE: 45% of Bosnian PTSD/depression cases meeting criteria 3 years later; Cambodian refugees 20 years after resettlement; 95% of depressed Vietnamese refugees presenting physical complaints; substance disorders 5-10 years post-settlement (Hmong opium, varying by population); PTSD refugees reporting increased traumatic events over baseline. THE HEAD-INJURY LAYER: head trauma among the commonest torture forms; seizures, headaches, aggression, irritability, sleep disturbance; the Vietnamese ex-detainee findings: head-injury number inversely related to executive function, PTSD risk raised, cortical thinning: long-lasting and previously overlooked.",
    "THE ASSESSMENT: primary care, for the four reasons; (1) refugees seldom self-refer to psychiatry; (2) psychiatry carries stigma that primary care does not; (3) refugees seek the local doctor and the indigenous healer for emotional suffering; (4) comorbidity dominates, with the field-tested principle: mental-health programmes inside existing healthcare facilities succeed. THE CROSS-CULTURAL LOGIC: standardised criteria for PTSD and major depression tested and validated across refugee settings (the WHO depression study's principle: cross-cultural symptoms present but not necessarily the most-endorsed, the same possibly applying to PTSD); NO culture-specific mass-violence syndrome yet defined; THE SCENARIO FRAMEWORK: (A) the Western-diagnosable pattern; (B) the mixed pattern with culture-specific elements; (C) the culture-bound presentation: the clinical determination guiding the diagnostic approach, the middle path between the psychiatric overreach (labelling normal distress disordered) and the humanitarian hostility (denying the seriously ill access to treatment). THE SCREEN: the culturally adapted Hopkins Symptom Checklist (the Indochinese patients providing symptoms with little distress) and the Harvard Trauma Questionnaire (trauma events and symptoms listable); the assessment covering the trauma history (the eight categories), the psychiatric screen and the functional status.",
    "THE TREATMENT: trauma-focused therapies culturally adapted; the depression treatment with the somatic-presentation vigilance; the substance vigilance (the delayed 5-10-year onset); the head-injury assessment and management; the psychosocial rehabilitation with the family-and-community programmes, and THE GOLD STANDARD: chronic severe disability driving the future of both psychiatric and humanitarian rehabilitation, the public-health and protection goals meeting at functional recovery; the camp programme asked about the life regained (work, school, roles) not only the symptoms reduced.",
    "THE INDIAN LAYER: the populations; the Tibetan settlements (the longest-standing; the depression-ageing findings now emerging), the Sri Lankan Tamil camps (the conflict-PTSD caseload), the Afghan and Rohingya urban refugees (the resource-scarce presentations), the internal-displacement contexts (conflict and disaster; the IDP majority without refugee-law protection), each with its trauma-event profile for the eight-category enquiry. The pathway: district hospitals, camp clinics and NGO health programmes, not psychiatry departments; the four-setting rationale describing Indian help-seeking exactly; the Hopkins-25's Tamil and other Indian-language adaptations and the HTQ's cross-cultural use as the district-implementable layer. The disciplines: the 'gas-burning-weakness' idiom meeting the 95% finding (the depression screen behind every refugee's physical complaints); the torture and conflict head trauma earning the injury workup; the camp-services evaluation (the livelihood programmes, the education access) as rehabilitation-in-disguise; the healer pathway met with collaboration-not-competition. The costs (approx 2026): the camp-clinic screen the cheapest effective layer; the district psychiatry and the Tele-MANAS backstop the referral tier; specialised trauma therapy scarce: task-shifting and the counsellor model the Indian scale answer.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "rmh-quiz-1",
      question: "The principle of non-refoulement holds that:",
      options: ["Refugees must be granted citizenship", "No refugee shall be expelled or returned to territories where life or freedom would be threatened", "All migrants receive asylum", "Camps are permanent"],
      correctIndex: 1,
      explanation: "The 1951 Convention's Article 33 — the protection cornerstone distinguishing the refugee from the economic migrant and grounding the international duty.",
      afterSectionId: "mechanism",
    },
    {
      id: "rmh-quiz-2",
      question: "The eight categories of refugee trauma include all EXCEPT:",
      options: ["Material deprivation and war-like conditions", "Forced confinement and coercion; forced to harm others", "Brain injury", "Financial success and career advancement"],
      correctIndex: 3,
      explanation: "The eight-category taxonomy (with the disappearance of loved ones and witnessed violence completing the set) — the clinician's structured trauma enquiry.",
      afterSectionId: "symptoms",
    },
    {
      id: "rmh-quiz-3",
      question: "A refugee attends with aches, weakness and fatigue; the investigations are normal. The finding that dictates the next step:",
      options: ["Order more imaging of every system", "95% of depressed Vietnamese refugees presented with physical complaints — the screen, not the presenting complaint, makes the diagnosis", "Reassure and discharge — normal tests mean no illness", "Refer to the psychiatry department and await self-presentation"],
      correctIndex: 1,
      explanation: "The somatic presentation finding: refugee distress arrives somatised, and the screening instrument (Hopkins checklist, HTQ) converts the physical visit into the psychiatric diagnosis.",
      afterSectionId: "diagnosis",
    },
    {
      id: "rmh-quiz-4",
      question: "A torture survivor presents with aggression, irritability, sleep disturbance and cognitive change. Alongside the PTSD assessment, the mandatory step is:",
      options: ["Nothing further — the PTSD label explains all four symptoms", "The head-injury workup — head trauma is among the commonest torture forms, and the ex-detainee findings make the injury assessment mandatory", "Immediate antipsychotic treatment", "Closure of the case as a personality problem"],
      correctIndex: 1,
      explanation: "The head-injury layer: head-injury number inversely related to executive function, PTSD risk raised, cortical thinning — long-lasting and previously overlooked; both diagnoses stand, both are treated.",
      afterSectionId: "differential",
    },
    {
      id: "rmh-quiz-5",
      question: "The proper setting for refugee mental-health services is primary care because:",
      options: ["Refugees prefer hospitals", "Refugees seldom self-refer to psychiatry; psychiatry is stigmatised where primary care is not; refugees already seek local doctors and traditional healers; and comorbidity dominates", "Psychiatrists refuse to treat refugees", "There is no reason"],
      correctIndex: 1,
      explanation: "The four-reason rationale — with the field-tested principle that programmes embedded in existing health facilities succeed where freestanding clinics fail.",
      afterSectionId: "management",
    },
    {
      id: "rmh-quiz-6",
      question: "The chapter's proposed gold standard for driving future refugee rehabilitation — and the measure the Indian camp-services evaluation embodies — is:",
      options: ["Symptom counts alone", "Chronic and severe functional disability, the life-recovered measures (work, school, roles)", "Camp population totals", "Cost analysis"],
      correctIndex: 1,
      explanation: "The disability focus: where the public-health objectives and the humanitarian protection goals meet — rehabilitation measured in the life regained, not only the symptoms reduced.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Quote the Convention definition's five persecution grounds and the non-refoulement principle.", answer: "THE DEFINITION (1951 Convention, Article 1): a refugee is a person outside their country of nationality who is unable or unwilling to return because of a well-founded fear of persecution for RACE, RELIGION, NATIONALITY, MEMBERSHIP OF A PARTICULAR SOCIAL GROUP, or POLITICAL OPINION. NON-REFOULEMENT (Article 33): no refugee shall be expelled or returned 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'; the protection cornerstone, with the UNHCR holding the dual mandate (against violence and involuntary repatriation; against material deprivation) and the Declaration of Human Rights and the Convention against Torture extending the frame. The definitional discipline: the refugee is NOT the economic migrant and NOT the traditional immigrant, and the distinction is clinical because protection status shapes disclosure, entitlement and the return-fear that maintains symptoms.", topic: "The law" },
    { question: "Recite the numbers: the 1970 and 2006 figures, the IDP figure, the per-day figure, and the 80% finding.", answer: "THE SCALE: 2.5 million refugees protected by UNHCR in 1970, rising to 8.4 MILLION BY 2006; a further 23.7 MILLION internally displaced persons (similar in characteristics to refugees but without international-law protection) and MORE THAN 10,000 PEOPLE PER DAY becoming refugees or IDPs over the preceding decade. THE CIVILIAN BURDEN: over 80% of casualties in recent African, Asian and European conflicts being non-combatants. THE CLINICAL CONSEQUENCE: the resettlement in Canada, the US, Europe and Australia bringing the mental-health issues to the Western clinic; the refugee patient is not rare anymore.", topic: "The numbers" },
    { question: "Recite the eight trauma categories with the potency ranking and the dose-effect principle.", answer: "THE EIGHT CATEGORIES: (1) material deprivation; (2) war-like conditions; (3) bodily injury; (4) forced confinement and coercion; (5) forced to harm others; (6) disappearance, death or injury of loved ones; (7) witnessing violence; (8) brain injury: each conflict with its characteristic profile the clinician must know. THE POTENCY RANKING: BRAIN INJURY, SEXUAL VIOLENCE, TORTURE AND BODILY INJURY, COERCION AND CONFINEMENT carrying the greatest psychiatric-harm potential. THE DOSE-EFFECT: cumulative trauma predicting cumulative symptoms (the risk arithmetic of the whole field) with the personal-dimension caveat: a murdered child's meaning is undefined by categories, so the tally never replaces the meaning.", topic: "The trauma taxonomy" },
    { question: "Explain the outcomes model: the epidemiological triad and the three outcome domains.", answer: "THE TRIAD (the mass-violence public-health lineage): HOST; the refugee's personal and environmental characteristics; AGENT: the traumatic events themselves; ENVIRONMENT: the camp, the resettlement context. THE THREE DOMAINS the interaction produces: (1) MEDICAL ILLNESS; starvation, landmine injuries, the gender-violence sequelae of the Balkans (pregnancy, complicated self-administered abortions, sexually transmitted disease), the resettlement risks (obesity, diabetes, heart disease), the healthcare-access barriers, with the self-care programmes' positive impact; (2) PSYCHIATRIC DISORDER. PTSD and major depression, culturally validated, comorbid; (3) DISABILITY: the neglected outcome: functional impairment possibly extremely high (the Bosnian elderly findings), exacerbated by comorbidity, the majority experience in some societies, and the gold-standard conclusion: chronic severe disability driving the future of psychiatric-humanitarian rehabilitation.", topic: "The outcomes model" },
    { question: "State the psychiatric findings: the persistence figures, the somatic presentation, the substance delay, and the head-injury findings.", answer: "THE PERSISTENCE: 45% of Bosnian refugees with PTSD or depression still meeting criteria THREE YEARS LATER; Cambodian refugees showing the same disorders TWENTY YEARS AFTER RESETTLEMENT. THE SOMATIC PRESENTATION: 95% of depressed Vietnamese refugees presenting with PHYSICAL COMPLAINTS; the screen, not the presenting complaint, makes the diagnosis. THE SUBSTANCE DELAY: substance-use disorders emerging 5-10 YEARS POST-SETTLEMENT (the Hmong opium findings, varying by population). THE HEAD-INJURY FINDINGS: head trauma among the commonest torture forms; seizures, headaches, aggression, irritability, sleep disturbance; the Vietnamese ex-detainee studies (head-injury number INVERSELY RELATED TO EXECUTIVE FUNCTION, PTSD risk raised, CORTICAL THINNING) long-lasting and previously overlooked. Plus: complex grief and chronic insomnia prevalent, and PTSD refugees reporting increased traumatic events over baseline.", topic: "The findings" },
    { question: "Give the four reasons for the primary-care setting and the two screening instruments.", answer: "THE FOUR REASONS: (1) refugees seldom self-refer to psychiatry; (2) psychiatry carries a stigma that primary care does not; (3) refugees seek the local doctor and the indigenous healer for emotional suffering: the pathway already runs through general care; (4) comorbidity dominates: the medical and psychiatric layers demanding the general setting. THE FIELD-TESTED PRINCIPLE: mental-health programmes inside existing healthcare facilities succeed. THE TWO INSTRUMENTS: the culturally adapted HOPKINS SYMPTOM CHECKLIST (the Indochinese patients providing symptoms with little distress, the anxiety-depression layer) and the HARVARD TRAUMA QUESTIONNAIRE (trauma events and symptoms listable), with the assessment covering the trauma history (the eight categories), the psychiatric screen, and the functional status.", topic: "The assessment" },
    { question: "Describe the cross-cultural diagnostic logic: the validity findings, the no-syndrome-yet position, and the scenario framework.", answer: "THE VALIDITY FINDINGS: standardised criteria for PTSD and major depression have been tested and validated across refugee populations; the cultural validity of PTSD 'almost certain' since the Cambodian diagnoses, with the culture-specific-symptom complement alongside; the WHO depression study's principle honoured: cross-cultural symptoms present but not necessarily the most-endorsed, the same possibly applying to PTSD. THE NO-SYNDROME-YET POSITION: no culture-specific mass-violence syndrome has been defined; the territory left open rather than invented. THE SCENARIO FRAMEWORK: whether the patient presents with (A) the Western-diagnosable pattern; (B) the mixed pattern with culture-specific elements; or (C) the culture-bound presentation: the clinical determination guiding the diagnostic approach, the middle path between the psychiatric overreach (labelling normal distress disordered) and the humanitarian hostility (denying the seriously ill access to treatment).", topic: "The diagnostic logic" },
    { question: "Outline the treatment principles and the disability-focus conclusion.", answer: "THE PRINCIPLES: the trauma-focused therapies (culturally adapted); the depression treatment with the somatic-presentation vigilance; the substance vigilance across the delayed 5-10-year window; the head-injury assessment and management (the injury workup alongside the PTSD treatment); the psychosocial rehabilitation (the function-restoration logic) with the family-and-community programmes; and the primary-care base for all of it: the embedded programme that succeeds. THE DISABILITY-FOCUS CONCLUSION: the emerging gold standard is CHRONIC SEVERE DISABILITY. The measure that drives both psychiatric and humanitarian rehabilitation, the public-health and protection goals meeting at FUNCTIONAL RECOVERY; the camp programme asked about the life regained (work, school, roles), not only the symptoms reduced.", topic: "The treatment" },
  ],
  faqs: [
    { question: "Who counts as a refugee?", answer: "The Convention's legal definition: someone outside their country, unable or unwilling to return because of a well-founded fear of persecution for their race, religion, nationality, social group or political opinion; protected by non-refoulement (no return to danger) and distinct from the economic migrant, whose migration is driven by need, not fear." },
    { question: "Do refugees just get over it with time and safety?", answer: "Not reliably: 45% of Bosnian refugees with PTSD or depression still met criteria three years later, and Cambodian refugees showed the same disorders twenty years after resettlement. The effects are persistent, the untreated morbidity accumulates, and treatment works at any stage, however long it has been." },
    { question: "Why does the doctor keep asking about the past?", answer: "Because the trauma history is the risk assessment: the events fall into eight categories with a dose-effect relationship; the more cumulative events, especially torture, sexual violence, head injury and confinement, the greater the psychiatric burden to anticipate and screen for." },
    { question: "The patient only complains of body pain, where is the PTSD?", answer: "Behind the body: 95% of depressed Vietnamese refugees presented with physical complaints. Refugee distress arrives somatised, and the screen (not the presenting complaint) makes the diagnosis; the physical complaints are the door, not the destination." },
    { question: "Is PTSD a valid diagnosis in other cultures?", answer: "Validated: PTSD and major depression have been successfully applied across refugee populations from many regions, with culture-specific symptoms existing alongside, and no separate culture-bound mass-violence syndrome has been defined. The caution: cross-cultural symptoms are present but not necessarily the most-endorsed." },
    { question: "Why see refugees in the general clinic?", answer: "Because they do not self-refer to psychiatry; psychiatry carries a stigma the general clinic does not; they already see local doctors and traditional healers; and their medical-psychiatric comorbidity demands the general setting: the field-tested principle that programmes embedded in primary care succeed." },
    { question: "When does the trauma assessment become treatment?", answer: "At the moment of recognition: the screening instruments are themselves therapeutic (symptoms finally named, the story finally listable) with the trauma-focused therapies, the depression treatment and the functional rehabilitation following the primary-care base." },
    { question: "What should we actually measure?", answer: "Beyond symptoms: function. The emerging gold standard is chronic severe disability, driving both psychiatric and humanitarian rehabilitation. The camp programme asked about the life regained (work, school, roles), not only the symptoms reduced." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The 1951 Convention Relating to the Status of Refugees and the 1967 Protocol — Articles 1 and 33: the definition and the non-refoulement principle (the legal frame)" },
      { source: "The Universal Declaration of Human Rights and the Convention against Torture — the extended protection architecture behind the clinical frame" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 7.10.1 (Mollica, Culhane & Hovelson) — the source chapter mapped; content rewritten (2009)" },
      { source: "Eitinger L — the concentration-camp survivor studies: the dual traumatisation; with Thygesan P — the Danish confirmation" },
    ],
    trials: [
      { source: "Kinzie JD et al. and Mollica RF et al. — the original Cambodian PTSD diagnoses (the cultural-validity foundation)" },
      { source: "Mollica RF et al. (1999-2004) — the Bosnian longitudinal studies (the 3-year persistence) and the Harvard Trauma Questionnaire development" },
      { source: "Mollica RF et al. — the Vietnamese ex-political-detainee head-injury findings (executive function, PTSD risk, cortical thinning)" },
    ],
    reviews: [
      { source: "Shrestha NM et al. and the Bhutanese refugee studies — the depression-PTSD confirmations (as cited)" },
      { source: "Westermeyer J — the Hmong opium and refugee substance findings (the delayed-onset window)" },
      { source: "WHO — the cross-cultural depression study: the symptom-endorsement principle" },
      { source: "Silove D — the refugee mental-health adaptation frameworks; with De Jong J (ed.) — the mass-violence public-health frameworks (the epidemiological-triad lineage)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, 24x7, in multiple Indian languages, for distress and pathway guidance" },
      { source: "The trauma-history script — the eight-category enquiry this course hands to every clinician meeting a refugee patient" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: who counts as a refugee, why the body complains first, why the general clinic, what recovery measures.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The law, the numbers, the eight categories, the outcomes model, the primary-care screen.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything: the screening craft, the head-injury duty, the protection layer, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the numbers, the eight-category taxonomy.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can quote the Convention definition and non-refoulement, recite the numbers, and list the eight categories with the potency ranking." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The refugee mental-health engine: the legal frame, the dose-effect, the outcomes model, the recovery trajectory.", sectionIds: ["mechanism", "pathways", "timeline"], checkpoint: "You can walk the persecution-to-care pathway and explain the triad's three outcome domains with the persistence findings." },
    { number: 3, title: "Clinical Practice", description: "The three-part screen, the A-B-C framework, the primary-care-based treatment.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three-part screen (trauma history, Hopkins/HTQ, function) and state the four primary-care reasons cold." },
    { number: 4, title: "Indian Context", description: "The Tibetan-Tamil-Afghan-Rohingya layer, the camp-clinic pathway, the decision path.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the screening script and the function script, and route the torture survivor to the head-injury workup." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the non-refoulement question and the eight-categories EXCEPT question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 7.10.1 (Mollica, Culhane & Hovelson) — the source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "The 1951 Convention Relating to the Status of Refugees and the 1967 Protocol — Articles 1 and 33: the definition and the non-refoulement principle; with the Universal Declaration of Human Rights and the Convention against Torture extending the protection frame", sourceType: "guideline", year: "1951 / 1967", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Eitinger L — the concentration-camp survivor studies: the somatic-and-psychological dual traumatisation; with Thygesan P — the Danish confirmation", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Kinzie JD et al. and Mollica RF et al. — the original Cambodian PTSD diagnoses (the cultural-validity foundation)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Mollica RF et al. (1999-2004) — the Bosnian longitudinal studies (the 3-year persistence) and the Harvard Trauma Questionnaire development", sourceType: "primary", year: "1999-2004", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Mollica RF et al. — the Vietnamese ex-political-detainee head-injury findings: executive function inversely related to head-injury count; PTSD risk raised; cortical thinning", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Shrestha NM et al. and the Bhutanese refugee studies — the depression-PTSD confirmations (as cited in the note)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Westermeyer J — the Hmong opium and refugee substance findings: the delayed 5-10-year post-settlement onset", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S9", source: "WHO — the cross-cultural depression study: the symptom-endorsement principle (cross-cultural symptoms present but not necessarily the most-endorsed)", sourceType: "who", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Silove D — the refugee mental-health adaptation frameworks (the post-Oxford companion tradition)", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S11", source: "De Jong J (ed.) — the mass-violence public-health frameworks (the epidemiological-triad lineage)", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S12", source: "The Indian context sources flagged in the note — the Tibetan, Tamil and Rohingya mental-health studies; the IDP literature; with the DMHP district tier, Tele-MANAS and the task-shifting practice pattern (approx 2026): context honestly labelled", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The legal frame: the 1951 Convention Article 1 definition; well-founded fear of persecution for race, religion, nationality, social group or political opinion; outside the country of nationality; unable or unwilling to return, and Article 33 non-refoulement: no expulsion or return 'in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened'; the 1967 Protocol completing the pair; the UNHCR's dual mandate (against violence and involuntary repatriation; against material deprivation); the refugee distinct from the economic migrant and the traditional immigrant.", grade: "established", sources: ["S2", "S1"] },
    { text: "The numbers: 2.5 million UNHCR-protected refugees in 1970 rising to 8.4 million by 2006; 23.7 million internally displaced persons with similar characteristics and no international-law protection; more than 10,000 people per day becoming refugees or IDPs over the preceding decade; the resettlement in Canada, the US, Europe and Australia bringing the caseload to the Western clinic.", grade: "supported", sources: ["S1"] },
    { text: "The civilian burden: over 80% of casualties in recent African, Asian and European conflicts being non-combatants (the modern finding built on the camp-survivor lineage (Eitinger's dual traumatisation: somatic trauma) head injury, hunger, infections, producing a psycho-organic syndrome; psychological trauma producing depression; Thygesan's Danish confirmation).", grade: "supported", sources: ["S1", "S3"] },
    { text: "The eight-category trauma taxonomy: material deprivation; war-like conditions; bodily injury; forced confinement and coercion; forced to harm others; disappearance, death or injury of loved ones; witnessing violence; brain injury: each conflict with its characteristic profile; the potency hierarchy (brain injury, sexual violence, torture and bodily injury, coercion and confinement the most pathogenic); the dose-effect relationship (cumulative trauma predicting cumulative symptoms), with the personal-dimension caveat that a murdered child's meaning is undefined by categories.", grade: "established", sources: ["S1"] },
    { text: "The outcomes model: the host-agent-environment epidemiological triad producing medical illness (starvation, landmine injuries, the gender-violence sequelae of the Balkans, pregnancy, complicated self-administered abortions, sexually transmitted disease; the resettlement risks of obesity, diabetes and heart disease; the self-care programmes' positive impact), psychiatric disorder (PTSD and major depression, comorbid) and disability (the neglected outcome: functional impairment possibly extremely high, the Bosnian elderly findings; exacerbated by comorbidity).", grade: "supported", sources: ["S1", "S11"] },
    { text: "The persistence findings: 45% of Bosnian refugees with PTSD or depression still meeting criteria three years later; Cambodian refugees showing the same disorders twenty years after resettlement; PTSD refugees reporting increased traumatic events over baseline; complex grief and chronic insomnia prevalent among the resettled.", grade: "established", sources: ["S5", "S1"] },
    { text: "The somatic presentation: 95% of depressed Vietnamese refugees presenting with physical complaints; the somatic front door that makes the screening instrument, not the presenting complaint, the diagnostic route in refugee primary care.", grade: "established", sources: ["S1"] },
    { text: "The substance-delay finding: substance-use disorders emerging 5-10 years post-settlement, varying by population (the Hmong opium findings); the longitudinal follow-up duty of every resettled-refugee programme.", grade: "established", sources: ["S8", "S1"] },
    { text: "The head-injury layer: head trauma among the commonest torture forms; seizures, headaches, aggression, irritability and sleep disturbance; the Vietnamese ex-detainee findings (head-injury number inversely related to executive function, PTSD risk raised, cortical thinning) long-lasting and previously overlooked.", grade: "supported", sources: ["S6", "S1"] },
    { text: "The service model: primary care as the setting for the four reasons (refugees seldom self-refer to psychiatry; the stigma asymmetry; the healer-and-local-doctor pathway; the comorbidity), with the field-tested principle that mental-health programmes inside existing healthcare facilities succeed; the screening instruments: the culturally adapted Hopkins Symptom Checklist (the Indochinese patients providing symptoms with little distress) and the Harvard Trauma Questionnaire (trauma events and symptoms listable), the assessment covering trauma history, psychiatric screen and functional status.", grade: "established", sources: ["S1", "S5"] },
    { text: "The cross-cultural diagnostic logic: standardised PTSD and major depression criteria tested and validated across refugee populations; the cultural validity of PTSD 'almost certain' since the Cambodian diagnoses, with the culture-specific-symptom complement; the WHO depression study's principle (cross-cultural symptoms present but not necessarily the most-endorsed, the same possibly applying to PTSD); no culture-specific mass-violence syndrome yet defined; the A-B-C scenario framework guiding the diagnostic approach between the psychiatric overreach and the humanitarian hostility.", grade: "established", sources: ["S1", "S9", "S4"] },
    { text: "The Bhutanese and wider confirmations: the large-scale epidemiology confirming major depression and PTSD across Bosnian, Cambodian and Bhutanese refugee populations, with comorbidity the rule.", grade: "supported", sources: ["S7", "S1"] },
    { text: "The treatment and the gold standard: trauma-focused therapies culturally adapted; depression treatment with somatic-presentation vigilance; substance vigilance across the delayed window; the head-injury assessment; psychosocial rehabilitation with family-and-community programmes, and the emerging conclusion that chronic severe functional disability is the gold standard driving both psychiatric and humanitarian rehabilitation, the public-health and protection goals meeting at functional recovery. The Indian layer: the Tibetan, Sri Lankan Tamil, Afghan and Rohingya populations; the district-hospital, camp-clinic and NGO-programme pathway; the Hopkins-25's Tamil and other Indian-language adaptations; the task-shifting scale answer (approx 2026): practice-pattern description, context honestly labelled.", grade: "supported", sources: ["S1", "S10", "S12"] },
  ],
};
