import type { PsychiatryCourse } from "./types";

/**
 * GENDER IDENTITY IN ADULTS — INCONGRUENCE, DYSPHORIA & AFFIRMATIVE
 * CARE — canonical Psychiatry course (migration batch 4, Group I —
 * sexuality & gender).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/gender-identity-adults.md — untouched
 * foundation), re-researched against current guidance (ICD-11's
 * sexual-health reclassification, WPATH SOC-8, the Endocrine
 * Society hormone guideline, the Ryan family-acceptance cohorts,
 * Meyer's minority-stress model, the Indian legal architecture:
 * NALSA 2014, the Transgender Persons Act 2019 + Rules 2020, the
 * Census 2011 count with its undercount caveat) with per-claim
 * provenance.
 *
 * Drug routes: sertraline and escitalopram (the comorbid
 * depression-and-anxiety tier that minority stress produces) link
 * to existing KYP drug lessons; the pathway medicines themselves —
 * oestrogen-plus-anti-androgen and testosterone regimens — are
 * endocrine (not psychiatric) content and have no KYP drug
 * lessons, recorded in contentGaps (never invented).
 */
export const genderIdentityAdultsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "gender-identity-adults",
  title: "Gender Identity in Adults — Incongruence, Dysphoria & Affirmative Care",
  shortName: "Gender Identity",
  kind: "disorder",
  category: "Gender-Affirmative Care",
  groupLetter: "I",
  groupName: "Sexuality & gender",
  learningPath: ["Psychiatry", "Sexuality & Gender", "Gender Identity in Adults"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "The persistent mismatch between experienced gender and sex assigned at birth is, in the modern international frame, a variation of human gendering located in sexual health rather than a mental illness — while the clinical work it brings is the dysphoria, the minority stress that rides with it, and the affirmative pathway walked with person-and-family.",
  summary:
    "The modern position rests on a settled distinction: gender incongruence itself is NOT a disorder — ICD-11 moved it OUT of the mental-disorder chapters into sexual and reproductive health in 2019 (a decision decades in the making, and the single most important classification fact for this topic) — while the associated dysphoria (the distress of living in a body-and-role that fights the self) and the comorbidities (depression-and-anxiety driven overwhelmingly by stigma-and-minority stress, not by the incongruence) are the clinical tier that needs care. DSM-5's retained 'gender dysphoria' category runs in parallel as an access-to-care frame, not a pathology endorsement. The biology, told honestly: prenatal-hormone windows and brain-sexual-differentiation architecture contribute (the CAH-and-intersex natural experiments, the twin concordance, the small-sample hypothalamic studies) — biology biases, it does not script; and the corrections to teach are as firm: parenting styles, 'dominant-mother' folklore, trauma-causation and adult social contagion are all unsupported. The treatment insight that organises everything: dysphoria responds to ALIGNMENT (social-and-bodily transition toward the experienced gender) and comorbidity responds to ACCEPTANCE (family-and-social) — the two axes, with family acceptance the single strongest predictor of a trans person's mental health in the outcome literature. The affirmative pathway runs on tiered, consented rungs: social transition (the reversible tier — name, pronouns, dress, role, documents), hormone therapy (the partly-irreversible tier — oestrogen-plus-anti-androgen for trans women with the VTE-and-smoking-absolute watch; testosterone for trans men with the haematocrit-and-lipids watch; the endocrine co-management discipline), and surgery (the irreversible tier — chest masculinisation the most-sought-and-highest-satisfaction procedure; the genital tier scarce-and-staged) — each with its informed-consent architecture, and the fertility-preservation counselling BEFORE hormones as the miss-it-and-regret-it discipline (the gamete-banking offer, and the decline, both recorded). The Indian patient arrives in two worlds at once: the ancient one (the hijra-and-kinnar communities with gharana structures, guru lineages, and the subcontinent's historically-legible trans life) and the new one (urban trans men and women in professions and student cohorts — trans men especially a post-2010s emergence with no traditional community, often the most isolated tier) — both meeting a clinical system barely trained and legally instructed to be neither, inside a pioneering rights architecture (NALSA 2014's self-identification needing neither surgery nor hormones; the Transgender Persons Act 2019's district-magistrate certificate machinery) that exists on paper far ahead of its delivery on the ground — the de-facto national hormone route being unsupervised pharmacy access, which makes harm-minimisation monitoring the clinic's highest-yield offering. The differentiations that matter: transvestic arousal (arousal versus identity), body dysmorphic disorder (defect-beliefs versus coherent gendered distress), trauma-driven identity states, and the rare delusional gender belief in psychosis. And the care-courtesy tier every Indian hospital can run tomorrow: the chosen name in the file, the consented ward placement, the dignity disciplines — the intervention that no prescription replaces.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the ICD-11 reclassification and its logic (incongruence as a sexual-health condition, not a mental disorder; dysphoria as the clinical-need tier), and what DSM-5's retained category is FOR.",
    "Outline the biology honestly: the prenatal-hormone-and-genetic contribution evidence, the 'not caused by parenting-or-trauma' corrections, and the limits of all aetiological claims.",
    "Distinguish gender incongruence from its four confusions: transvestic arousal, body dysmorphic disorder, trauma-related identity distress, and the rare delusional gender-identity belief.",
    "Run the biopsychosocial assessment: the gender history-and-persistence, the dysphoria map (body, social, role), the mental-state-and-comorbidity screen with the minority-stress interpretation, the support map.",
    "Describe the affirmative-care pathway per WPATH-class standards: social transition, hormone therapy in outline, the surgical tiers, and the fertility-preservation discipline BEFORE hormones.",
    "Prescribe the monitoring discipline: VTE-and-lipids on oestrogen (smoking cessation absolute), haematocrit-and-cardiovascular on testosterone, bone health, and the screening continuity the organs mandate regardless of identity.",
    "Walk the Indian pathway: NALSA self-identification, the Act 2019 certificate (district-magistrate architecture), welfare boards, the hijra-community context, and the healthcare-courtesy standards.",
    "Counsel families through the arc: grief-to-acceptance, the protective fact of family acceptance (the outcome literature's strongest single factor), and the pronoun-and-name discipline.",
  ],
  quickFacts: [
    { label: "The classification fact", value: "ICD-11: not a disorder", detail: "Gender incongruence moved to the sexual-health chapter in 2019 — de-pathologised identity, retained clinical pathway; DSM-5's 'gender dysphoria' runs parallel as the access-to-care frame" },
    { label: "The two axes", value: "Alignment + acceptance", detail: "Dysphoria responds to ALIGNMENT (transition toward the experienced gender); comorbidity responds to ACCEPTANCE (family-and-social) — the treatment architecture the outcome literature validates" },
    { label: "The strongest predictor", value: "Family acceptance", detail: "The single strongest predictor of a trans person's mental health in the cohort literature — the family session's evidence-based place at the centre of care" },
    { label: "The comorbidity architecture", value: "Minority stress", detail: "The elevated depression-anxiety-suicidality track stigma-and-rejection exposure, falling toward population rates in accepting environments — not the incongruence itself" },
    { label: "The confirmation marker", value: "Puberty catastrophe", detail: "The distress at secondary-sex development is the strongest single confirming marker; the adult presentation of a childhood-persistent incongruence is medicine's most stable tier in this field" },
    { label: "The fertility rule", value: "Bank BEFORE hormones", detail: "Oestrogen-and-testosterone impair the gamete pool within months, some effects permanent — the offer-and-the-decline both recorded; the discipline most often missed in Indian pharmacy-route care" },
    { label: "The monitoring pair", value: "VTE / haematocrit", detail: "Trans women: oestrogen's clot risk with the smoking-absolute; trans men: testosterone's polycythaemia watch — plus lipids, glucose, bone, and the cervical-and-breast screening continuity identity does not retire" },
    { label: "The Indian law", value: "NALSA self-ID", detail: "Self-identification is the constitutional right (2014) — neither surgery nor hormones required for recognition; the Act 2019 certificate machinery (district magistrate, screening committee) overlays it" },
    { label: "The Indian numbers", value: "~4.88 lakh (2011)", detail: "The census count, self-declared, everyone's-undercount; the two-world reality: hijra-and-kinnar communities (gharana structures, guru lineages) and the post-NALSA urban cohort (trans men especially isolated with no traditional community)" },
  ],
  knowledgeGraph: [
    { label: "Sexual Dysfunctions", type: "condition", href: "/psychiatry/sexual-dysfunctions/", note: "The function chapter of sexuality — orthogonal to identity; the two courses separate the questions cleanly" },
    { label: "Paraphilic Disorders", type: "condition", href: "/psychiatry/paraphilias/", note: "The hygiene cross-link: transvestic arousal is arousal, transgender identity is identity — the distinction both courses carry" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The minority-stress tier — depression tracking rejection exposure, lifting in accepting environments; treated in its own right" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The mandatory screen at every presentation — the young-adult tiers' hard numbers" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The legal-principles note adjacent to NALSA and the Act 2019's rights architecture" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The comorbid depression-and-anxiety tier written with the minority-stress frame explicit" },
    { label: "Transcultural Psychiatry & Stigma", type: "condition", href: "/psychiatry/transcultural-stigma/", note: "The stigma-science foundation of the minority-stress model" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two stories carry the science. The body-map set early: the body's sex and the brain's gender-map both differentiate in prenatal windows, under hormonal-and-genetic influence, in separate episodes — which means they can, rarely, diverge; the person who emerges experiences their body-and-expected-role as a persistent mismatch: not a belief to be argued (arguing has never moved it; the decades of failed reorientation attempts are this field's shared graveyard with the conversion-era), but a property of the self, like handedness — discovered rather than decided. The evidence-tier honesty: the windows are mapped (the strongest natural experiments, 46,XY intersex-and-CAH cohorts, show prenatal-androgen exposure shifting some-but-not-all of later gender identity — biology biases, does not script), the twin concordance sits above chance without reaching determinism, the gene-association findings remain unfinalised, and the small-sample hypothalamic-and-white-matter studies corroborate without deciding; the clinical response does not wait on the neuroscience's final draft. The distress that needs the clinic: the incongruence itself became non-pathological in the classifications; what brings the person to a clinician is the load on top — the daily distress of the mirror-and-the-clothes (body dysphoria), the name-and-the-toilet-and-the-form's-checkbox (social dysphoria), and the accumulated corrosion of stigma, family grief-rituals, street harassment, employment refusals, the forced-performative self. The minority-stress model explains the comorbidity architecture: the elevated depression-anxiety-and-suicidality track the rejection-exposure, not the incongruence — they fall toward population rates in accepting environments and after affirmative care, which is why family acceptance is the outcome literature's single strongest predictor, and why the treatment insight organises into two axes: the dysphoria responds to ALIGNMENT (social-and-bodily transition toward the experienced gender) and the comorbidity responds to ACCEPTANCE (family-and-social) — the pair the affirmative pathway delivers and the outcome cohorts have repeatedly validated.",
    steps: [
      "The prenatal windows: body-sex and brain-gender-map differentiate separately under hormonal-and-genetic influence — the rare divergence produces the persistent experienced mismatch.",
      "The template-like stability: not a belief to be argued (the reorientation graveyard), a property of the self — discovered rather than decided; the CAH-and-intersex natural experiments show biology biasing without scripting.",
      "The dysphoria layer: the body-and-role distress (the mirror, the clothes, the name, the checkbox) — the clinical-need tier the classifications retained.",
      "The minority-stress layer: stigma-and-rejection-and-concealment produce the depression-anxiety-and-suicidality — tracking exposure, not incongruence.",
      "The two-axes insight: dysphoria responds to ALIGNMENT; comorbidity responds to ACCEPTANCE — the treatment architecture.",
      "The family-acceptance fact: the single strongest predictor in the outcome cohorts — the family session's evidence-based centrality.",
      "The pathway rungs: social transition (reversible) → hormones (partly irreversible, monitoring discipline) → surgery (irreversible, readiness-assessed) — each consented, each tiered.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "sdn", name: "Hypothalamic nuclei (the sexual-differentiation tier)", role: "The Zhou-Kruijver-Swaab lineage: identity-relevant hypothalamic architecture in trans adults aligning with experienced gender in small-sample postmortem-and-imaging studies — corroboration, not proof; honestly framed.", grade: "supported" },
    { id: "white-matter", name: "White-matter tracts (the connectivity tier)", role: "The diffusion-imaging studies reporting intermediate-and-experienced-gender-aligned patterns — the unfinished, convergent tier of the biological evidence.", grade: "proposed" },
    { id: "cortex", name: "Body-ownership cortical networks", role: "The body-map distress tier: the felt-sense architecture whose mismatch with the body's sex produces dysphoria's signature — the research-level framing, taught with its limits.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Oestrogen", symbol: "E2", role: "The feminising pathway's medicine and the brain's own sexual-differentiation signal — the VTE-risk-and-monitoring discipline attached to its exogenous use.", grade: "established", drugConnection: "No KYP drug lesson (endocrine, not psychiatric content); the monitoring discipline is taught here." },
    { name: "Testosterone", symbol: "T", role: "The masculinising pathway's medicine — the haematocrit-and-cardiovascular watch; the prenatal-androgen window's story its clinical echo.", grade: "established", drugConnection: "No KYP drug lesson (endocrine content); the monitoring tables are taught here." },
    { name: "Serotonin", symbol: "5-HT", role: "The comorbid depression-anxiety tier's treatment currency — the minority-stress load's pharmacological address.", grade: "established", drugConnection: "Sertraline and the SSRI tier for the comorbidities written with the minority-stress frame (see the sertraline lesson)." },
  ],
  pathways: [
    {
      id: "gi-prenatal",
      name: "The body-map set early",
      steps: [
        { label: "Two differentiation windows", detail: "Body-sex and brain-gender-map develop separately under hormonal-and-genetic influence" },
        { label: "The rare divergence", detail: "The experienced gender persists against the assigned sex — discovered, not decided (the handedness analogy)" },
        { label: "The natural experiments", detail: "46,XY intersex-and-CAH cohorts: prenatal androgen shifts some-but-not-all of later identity — biology biases, does not script" },
        { label: "The unfinished tier", detail: "Twin concordance above chance; hypothalamic-and-white-matter studies corroborating without deciding — the clinical response does not wait on the final draft" },
      ],
      clinicalManifestation: "The childhood-persistent, puberty-catastrophe-marked presentation — the assessment's confirming architecture.",
      grade: "supported",
    },
    {
      id: "gi-minority-stress",
      name: "The minority-stress cascade",
      steps: [
        { label: "The exposure layer", detail: "Stigma, rejection, concealment, harassment, employment-and-document exclusion" },
        { label: "The comorbidity layer", detail: "Depression, anxiety, suicidality tracking the exposure — NOT the incongruence itself" },
        { label: "The moderation finding", detail: "Rates fall toward population in accepting environments and after affirmative care — the model's signature" },
        { label: "The clinical lever", detail: "ACCEPTANCE is the public-health intervention — the family session's evidence-based place at the centre" },
      ],
      clinicalManifestation: "The presenting comorbidity the system must read with the minority-stress frame written into the notes.",
      grade: "established",
    },
    {
      id: "gi-two-axes",
      name: "The two treatment axes",
      steps: [
        { label: "The dysphoria axis", detail: "Responds to ALIGNMENT: social transition's reversible rungs, the bodily rungs consented-and-monitored" },
        { label: "The comorbidity axis", detail: "Responds to ACCEPTANCE: family-and-social — the strongest single predictor of outcome" },
        { label: "The pathway discipline", detail: "Tiered rungs, each with informed consent, each reversible-where-possible first" },
        { label: "The monitoring discipline", detail: "VTE-and-smoking-absolute on oestrogen; haematocrit-and-lipids on testosterone; bone-and-screening continuity regardless of identity" },
      ],
      clinicalManifestation: "The improved-dysphoria-and-lifting-morbidity arc the outcome cohorts validate.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "gi-childhood", time: "Childhood recollections", title: "The early knowledge", description: "The persistent childhood pattern the adult history reliably recovers — the vocabulary arrives late to an old reality; the concealment years were the absence of words, not the absence of the self.", phase: "onset" },
    { id: "gi-puberty", time: "Puberty", title: "The catastrophe marker", description: "The secondary-sex development distress — the strongest single confirming marker; the body's betrayal memo that turns knowing into urgency.", phase: "onset" },
    { id: "gi-emergence", time: "Young adulthood (typical)", title: "The disclosure-and-negotiation season", description: "The coming-out arc: family grief-and-bargaining cycles, the community-or-isolation fork (the hijra gharana or the urban cohort's solitude), the documents-and-workplace negotiation.", phase: "peak" },
    { id: "gi-pathway", time: "Months to years", title: "The pathway-walk season", description: "The tiered rungs: social transition, the fertility conversation BEFORE hormones, the monitored hormone therapy, the certificate machinery, the surgery referrals with readiness assessment — each consented, each deliberate.", phase: "recovery" },
    { id: "gi-arc", time: "Long-term", title: "The lived life", description: "The maintenance discipline (lifelong hormones with monitoring), the screening continuity, the family arc at wherever it lands, the community-and-workplace integration — the outcome literature's honest long arc with its era-and-loss-to-follow-up limits.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Estimates vary by definition-and-door: diagnoses in health registers run 0.002–0.014% (the old clinic-counted tier); self-identified transgender identity in surveys runs 0.1–1.1% (the broader modern tier), with young-adult cohorts reporting higher (the definitional-and-cohort explanations doing most of that work); sex-ratio patterns at clinic doors historically skewed trans-women:trans-men while survey-and-young cohorts flatten toward parity (an access-and-era artefact, honestly taught); comorbidity substantially elevated in stigma-exposed cohorts, dropping toward population rates in accepting environments and after affirmative care — the minority-stress architecture's signature finding.",
    indianPrevalence: "The 2011 census counted ~4.88 lakh transgender persons (self-declared; everyone treats this as an undercount — the deeper tiers of closeted-and-undisclosed trans lives unreached by any instrument). The Indian face is dual: the hijra-and-kinnar communities (concentrated, gharana-structured, with begging-and-blessing-and-sex-work economies in many regions — the poverty-and-HIV realities dominating their healthcare contact) and the post-NALSA urban cohort (students-and-professionals; trans men especially a post-2010s emergence with no traditional community to slot into, often the most isolated tier). State-wise leadership: Tamil Nadu's pioneering welfare architecture (the 2006-onward cell-and-board lineage prefiguring NALSA), Kerala's 2015 policy, the Act-2019 national certificate machinery; clinical delivery remains metro-and-thin (a handful of hospital-based gender clinics, government-surgery tiers in single-digit-centre counts, private-pharmacy hormones accessed without supervision as the de-facto national route).",
    lifetimeRisk: "The persistent course: adult incongruence is typically childhood-persistent and stable — the late-emerging-and-fluctuating presentations deserve the fuller differential before the pathway begins.",
    genderRatio: "Clinic doors historically trans-women-skewed; survey-and-young cohorts toward parity — the access-and-era artefact honestly taught.",
    ageOfOnset: "The identity is childhood-persistent by the adult presentation; the emergence-and-disclosure arc lands in young adulthood typically.",
    indianNotes: "The census undercount caveat taught with the number; the two-world epidemiology (hijra communities and the urban cohort) as the clinical map; the trans men's isolation as the tier clinicians are newly meeting.",
  },
  etiology: [
    { category: "biological", factor: "Prenatal-hormone windows (the honest partial story)", details: "The sexual differentiation of the brain under prenatal-androgen-and-genetic influence; the identity-relevant hypothalamic-and-white-matter findings in trans adults (small-sampled, corroborative, not decisive); the strongest natural experiments (46,XY intersex-and-CAH cohorts) showing prenatal-androgen exposure shifting some-but-not-all of later identity — biology biases, does not script." },
    { category: "biological", factor: "The genetic tier", details: "Twin concordance above chance without determinism; gene-association findings unfinalised — honestly graded and unfinished." },
    { category: "psychological", factor: "What is NOT supported (the corrections to teach)", details: "Parenting styles; 'absent-father-dominant-mother' folklore; trauma-induced identity (the post-trauma presentations are different things — see differentials); social contagion as an adult explanation (the adolescent-cohort debate a separate literature; adult persistence-and-recollection stable)." },
    { category: "psychological", factor: "Minority stress as the risk architecture", details: "The comorbidity's cause is the stigma-and-rejection-and-concealment load, not the incongruence — the clinical lever this hands the clinician: acceptance is the public-health intervention." },
    { category: "social", factor: "The poor-outcome risk architecture", details: "Family rejection, forced-marriage architecture, workplace-and-document exclusion, homelessness (the hijra-community entry pathway of many rejected adolescents), conversion-practices exposure (the banned-and-harmful tier)." },
    { category: "social", factor: "Indian context", details: "The two-world epidemiology (community-and-urban cohorts); the poverty-and-HIV concentration in hijra populations; the trans men's no-community isolation; the de-facto unsupervised pharmacy hormone route as the system's most common pathway." },
  ],
  symptomClusters: [
    {
      category: "1. The core experience (in the patient's grammar)",
      symptoms: ["'My body betrays the memo' — chest-and-genital discomfort (the binding, the packing, the mirror-avoidance, the shower-rush)", "The name-and-pronoun flinch; the form's checkbox distress (social dysphoria)", "The role-trapped distress (the sari-and-the-family-function; the shirt-and-the-girls'-hostel)", "The future-bleakness when the imagined adult-self seems impossible — the despair tier the suicide screen addresses"],
    },
    {
      category: "2. The comorbid load (the presenting complaints)",
      symptoms: ["Depression-and-anxiety — the minority-stress tier: elevations tracking rejection exposure, lifting in accepting environments", "Self-harm-and-suicidality (the young-adult tiers' hard numbers — screening mandatory at every presentation)", "Substance use in the marginalised cohorts; eating disorders (the body-shaping conjunction: restriction to stop menstruation, chest-minimisation in trans men)", "The trauma-load of the harassed-and-assaulted (the assault rates the community reports)"],
    },
    {
      category: "3. The Indian two-world texture",
      symptoms: ["The hijra-community patient: HIV-and-STI care needs, violence history, the guru-gharana economy's pressures, the occupational risks — meeting an insensitive system", "The urban-cohort patient: the isolation tier (no community, family negotiation, documents, careers) with better material resources but heavier concealment collateral", "The de-facto pharmacy-route patient: unsupervised hormones, unmonitored bloods, the harm-minimisation gap the clinic can close"],
    },
    {
      category: "4. The assessment's four differentiations (the confusions)",
      symptoms: ["Transvestic arousal: the dressing is the arousal, identity comfortable between episodes — arousal is not identity", "Body dysmorphic disorder: defect-beliefs with mirror-rituals and reassurance-seeking — dysphoria is coherent-and-gendered, not delusional-flavoured", "Trauma-driven identity distress: post-trauma instability without the persistent pre-trauma thread", "The delusional gender-identity belief (psychosis): certainty-with-bizarre-elaboration within a psychotic fabric — responds to antipsychotic treatment of the episode; gender identity does not"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICD-11",
      code: "Gender incongruence (HA60/HA61 — conditions related to sexual health)",
      criteria: [
        "The 2019 architecture: a marked-and-persistent incongruence between experienced gender and assigned sex, housed in the sexual-health chapter — a variation, NOT a mental disorder; the dysphoria-and-needs tier as the clinical interface.",
        "The de-pathologising logic: the incongruence itself causes no inherent impairment; the distress and the social exclusion are the clinical and public-health business.",
      ],
      duration: "The persistence discipline: the adult presentation of a childhood-persistent incongruence is the stable tier; late-emerging-and-fluctuating presentations deserve fuller differential-and-psychological exploration first.",
      indianNote: "The assessment is NOT diagnosis-of-a-disorder — it is the confirmation of persistence, the dysphoria map, the exclusion of the four confusions, and the readiness-assessment for the pathway rungs; the puberty-catastrophe marker is the strongest single confirming element in the gender history.",
    },
    {
      system: "DSM-5-TR",
      code: "Gender dysphoria (302.85 / F64.0 — the retained access category)",
      criteria: [
        "A marked incongruence between experienced-and-assigned gender, ≥6 months, with the distress-and-impairment language retained — the category's purpose is access-to-care framing (insurance, services, pathway eligibility), not pathology endorsement.",
        "The specifier architecture (post-transition for those living in the affirmed gender) acknowledges the pathway's tiers.",
      ],
      duration: "≥ 6 months of the marked incongruence.",
      indianNote: "The exam-and-viva reality: gender-identity questions still arrive wrapped in old classifications — the candidate who carries the ICD-11 reclassification, NALSA's self-ID architecture and the fertility discipline stands out precisely because most teaching material has not caught up.",
    },
  ],
  severityScales: [
    {
      name: "The dysphoria map (the clinical instrument)",
      fullName: "Structured body-social-role dysphoria mapping",
      measures: "The assessment's working instrument: which body features distress how intensely (the map that directs the pathway rungs); the social tier (name, documents, toilets, family); the role-and-future tier — severity is the load, tracked over the pathway's course.",
      ranges: [
        { min: 0, max: 0, severity: "Not mapped", action: "The first assessment maps it — the dysphoria map directs everything downstream" },
        { min: 1, max: 1, severity: "Social-tier dominant", action: "The reversible rungs first: name-and-pronouns, dress-and-role, voice work, the documents pathway; the family-work parallel" },
        { min: 2, max: 2, severity: "Body-tier distress", action: "The hormone conversation (with the fertility-preservation offer BEFORE), the monitoring architecture, the endocrine co-management" },
        { min: 3, max: 3, severity: "Severe-and-persistent dysphoria", action: "The full pathway including the surgical referrals with readiness assessment; the comorbid-and-suicide screen at every step" },
      ],
      indianNote: "Instruments named-not-reproduced where relevant (the Utrecht Gender Dysphoria Scale as the research-tier tool); the clinical map above is the working instrument the pathway runs on.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Transvestic arousal (cross-dressing fetishism)", distinguishingFeatures: "Arousal from the dressing itself; identity comfortable between episodes.", keyDifferentiator: "Arousal is not identity — the cross-dressing excitement versus the persistent self-knowledge line." },
    { condition: "Body dysmorphic disorder", distinguishingFeatures: "Focused 'defect'-beliefs with mirror-rituals and distortion.", keyDifferentiator: "The dysphoria is coherent-and-gendered (a body whose sexed features distress), not defect-delusional; reassurance-seeking loops belong to BDD." },
    { condition: "Trauma-driven identity distress", distinguishingFeatures: "Post-trauma identity instability-and-reconfiguration.", keyDifferentiator: "The gender element is not the persistent pre-trauma thread — the recollection history settles it." },
    { condition: "Delusional gender-identity belief (psychosis)", distinguishingFeatures: "Certainty-with-bizarre-elaboration within the psychotic fabric; other delusions present.", keyDifferentiator: "Responds to the episode's antipsychotic treatment — gender identity does not; the machinery of psychosis separates them." },
    { condition: "Gender-nonconforming expression (butch-femme, cross-gender profession)", distinguishingFeatures: "Expression-and-orientation variance without body-role distress.", keyDifferentiator: "No dysphoria — the clothes and the roles without the body-and-self mismatch." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The affirmative pathway (WPATH-class architecture) — social transition",
      description: "The reversible rung: name-and-pronouns, dress-and-role, voice work (the voice-therapy tier), documents (the Indian pathway below) — with the family-supported episode as the strong predictor it is; the social-transition first-episode before any bodily rung where the presentation allows.",
      whenToUse: "The pathway's first rung; reversible, informative, and itself therapeutically active (the social-dysphoria tier responds).",
      indianContext: "The documents walk: NALSA's self-ID right, the Act-2019 certificate application (the district magistrate, the screening-committee layer, the TG-mark documents) — walked with the patient as the consultation's practical craft.",
    },
    {
      category: "pharmacotherapy",
      name: "Hormone therapy (the partly-irreversible rung) — the monitoring discipline",
      description: "Trans women: oestrogen (oral/patch/injectable) plus an anti-androgen (the cyproterone-and-spironolactone tiers), watching VTE risk, lipids, liver, prolactin — with SMOKING CESSATION absolute. Trans men: testosterone (injectable/gel), watching haematocrit (polycythaemia), lipids, glucose-and-BP. Both: bone health on the monitoring schedule, the endocrine-comanagement discipline throughout, and THE FERTILITY DISCIPLINE BEFORE the first tablet (the gamete-banking offer — and the decline, both documented).",
      whenToUse: "After the assessment confirmation, the fertility conversation and the informed consent — each rung consented, each deliberate.",
      indianContext: "The de-facto national route is pharmacy-self-access, unsupervised — the harm-minimisation discipline (the monitoring offered even when the patient declines the slower official pathway: the VTE-and-haematocrit-and-lipid checks, the smoking-cessation absolute) saves more lives than the insistence-on-permission the system cannot enforce; costs approx 2026: oestrogen-plus-anti-androgen ₹200–800 monthly; testosterone ₹300–1,200; the monitoring bloods ₹500–2,000 per cycle.",
    },
    {
      category: "lifestyle",
      name: "The surgical tier (the irreversible rung) and the fertility discipline",
      description: "Chest masculinisation for trans men (the most-sought-and-highest-satisfaction procedure; Indian access metro-private ₹80,000–2,50,000, the rare government tier); the genital tier (vaginoplasty, metoidioplasty/phalloplasty: scarce-centre, high-cost, staged-reconstruction realities); the assessment discipline (stable-in-role, realistic-expectations, mental-health stability — the WPATH-class readiness frame, not gatekeeping-for-gatekeeping). THE FERTILITY DISCIPLINE: gamete preservation counselled-and-offered BEFORE hormones (the ART-banking tier; many decline for cost-or-family-secrecy reasons — the record must show it was offered).",
      whenToUse: "The referral tier after the stable-in-role period; the fertility conversation before ANY hormone initiation.",
      indianContext: "Gamete banking ₹10,000–30,000 per cycle (approx 2026) — the honest conversation about cost-and-family-secrecy the decline usually runs on, documented either way.",
    },
    {
      category: "psychotherapy",
      name: "Mental-health care throughout + the family work",
      description: "The depression-anxiety treatment (the SSRI tier, CBT) with the minority-stress frame written openly into the plan — the case-notes documenting the stigma-exposures serving both treatment and legal-and-welfare advocacy; the family work (the acceptance arc: grief-to-alignment, the pronoun-discipline coaching, the forced-marriage de-escalation); the coming-out-and-workplace navigation; the peer-and-community linkage.",
      whenToUse: "Continuous — the comorbidity axis of the two-axes architecture.",
      indianContext: "The family session is the highest-yield hour in Indian practice: one session converting 'she is possessed / it is our fault / find a cure' into the grief-to-acceptance arc changes the patient's trajectory more than any prescription; the priest-and-ritual conversations handled with the grief-respected-but-evidence-named discipline.",
    },
    {
      category: "lifestyle",
      name: "The care-courtesy standards (the clinical tier every hospital can run tomorrow)",
      description: "The chosen name-and-pronouns in records-and-address; the ward-placement conversation (the person-consented placement, not the default-gender assignment); the toilet-and-examination dignity; the HIV-and-STI care without moralising; the staff-education tier the community organisations offer in partnership.",
      whenToUse: "Every contact — the intervention that no prescription replaces, and the retention-in-care outcome's engine.",
      indianContext: "The institutional-memory reality: the community carries the misgendering-and-refusals history (the men's-ward placement, the deadnaming, the refused-toilet access) — the courtesy tier's delivery is the trust-metric the peer-referrals track.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation or self-harm — the young-adult tiers' hard numbers; the screen mandatory at every presentation, with the minority-stress interpretation written into the notes",
      "The unsupervised-hormone tier: pharmacy-route patients unmonitored — the VTE-and-haematocrit-and-lipid harm-minimisation gap the clinic must close",
      "The post-disclosure family storm: the forced-marriage architecture, the homelessness risk (the hijra-community entry pathway of rejected adolescents)",
      "Assault-and-violence aftermath — the presentation the safety architecture applies to with the minority-stress lens",
      "Conversion-practices exposure (the banned-and-harmful tier) — asked about, named, and the legal position stated",
      "The post-operative crisis window — the readiness-assessment's purpose and the support architecture around the surgical rung",
    ],
    urgentGuidance:
      "The order of operations at the presentation: (1) the suicide-and-safety screen (ideation, plan, means — the full architecture, Tele-MANAS 14416 as the crisis tier); (2) the medical screen for the pharmacy-route patient (the unmonitored-hormone audit: VTE risk factors, haematocrit, lipids, liver — the harm-minimisation entry); (3) the safety-and-housing assessment where the family storm or violence is live (the community-organisation linkage, the shelter tier); (4) then the pathway work itself — the assessment confirmation, the dysphoria map, the two-axes plan with the family session booked.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "The comorbid depression-and-anxiety tier", rationale: "The minority-stress load's pharmacological address — written with the frame explicit; the SSRI of choice in most adult contexts (see its lesson)." },
    { name: "Escitalopram", slug: "escitalopram", role: "The comorbid anxiety tier (fewest interactions)", rationale: "The clean-interaction option for the polypharmacy-prone pathway patient; QTc watch per its lesson." },
  ],
  contentGaps: [
    "The pathway medicines themselves — oestrogen-plus-anti-androgen and testosterone regimens — are endocrine content with no KYP drug lessons (the monitoring discipline is taught here; a future endocrine lesson tier would complete the map).",
    "Cyproterone acetate's separate psychiatry-adjacent story (the meningioma signal in long use) has no KYP lesson; taught here as a monitoring line.",
    "The surgical-referral and gamete-banking pathway guides exist here as clinical content, not as standalone KYP lessons.",
  ],
  patientGuide: {
    whatIsIt:
      "A persistent mismatch between your experienced gender and the sex assigned at birth — a variation of human gendering, not a mental illness (the international classifications moved it out of the mental-disorder chapters in 2019). What needs care is the distress of the mismatch (the dysphoria) and the weight the world adds (stigma's depression-and-anxiety) — both genuinely treatable: the dysphoria by aligning your life-and-body with who you are, the distress by the acceptance around you (your family's acceptance is the single strongest medicine in the outcome literature).",
    whatCausesIt:
      "The best current science: the body's sex and the brain's gender-map both develop before birth, in separate windows, under hormone-and-gene influence — and they can, rarely, diverge. Nothing you did, nothing your parents did, no trauma and no trend caused it; those theories failed their evidence tests and have been retired. The distress that comes with it is caused mostly by the environment's reaction, which is why acceptance works as medicine.",
    symptoms:
      "The discomfort with the sexed body-and-expected-role (the chest-and-genital distress, the mirror, the clothes, the name-and-pronoun flinch, the form's checkbox); the depression, anxiety and (too often) suicidal thoughts that stigma-and-rejection add; in India, the two worlds: the hijra-and-kinnar communities or the urban cohort's more isolated path.",
    treatment:
      "A tiered pathway at your pace: the social rungs first (name, pronouns, dress, documents — all reversible); the fertility conversation BEFORE any medicine (freezing gametes, with the offer-and-decline recorded); hormone therapy with proper monitoring (blood clots-and-smoking the watch for oestrogen; blood-count-and-lipids for testosterone — lifelong, like thyroid medicine); the surgical tier for those who choose it, after readiness assessment. Alongside: the depression-and-anxiety treatment, and the family work — the sessions that convert grief to acceptance are the highest-yield hours in this field.",
    selfHelp: [
      "Find your people: community (the gharana, the urban-cohort networks, the online tiers) is the protective factor the outcome literature keeps finding.",
      "Before self-sourcing hormones, ask a clinic for monitoring — even the unofficial route deserves the official bloods; smoking-and-oestrogen is the one absolute to respect.",
      "The documents walk is worth it: the NALSA self-ID right and the certificate machinery — a clinician or community organisation who has walked it before makes it navigable.",
      "Give the family the arc: their grief is real, their 'cures' are not — the family session with a clinician who knows the evidence converts most families over months.",
      "The name discipline: practice introducing yours; the pronoun work is theirs to learn, not yours to stop needing.",
      "Crisis numbers in the phone: Tele-MANAS 14416 (free, 24×7, multiple Indian languages).",
    ],
    whenToSeekHelp: [
      "Any thoughts of ending your life or harming yourself — same-day help (Tele-MANAS 14416 or the nearest emergency service)",
      "Hormones sourced without monitoring — the bloods this month, not eventually",
      "The family disclosure or its aftermath turning dangerous (forced marriage, eviction, violence)",
      "Post-assault care — the medical-and-legal architecture with a dignity-capable provider",
      "The pathway decisions themselves — each rung deserves its consented conversation",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — the crisis tier",
      "Hospital-based gender clinics and the endocrine pathway (metro tiers); the harm-minimisation monitoring offered wherever you source hormones",
      "The community organisations — the hijra-and-kinnar gharana structures and the urban-cohort networks; the peer-support and accompaniment tier for the documents walk",
      "The District Magistrate's certificate pathway (the Act 2019 machinery) and the state welfare boards",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific clinical guideline exists; management follows the international architecture (WPATH SOC-8 2022, the Endocrine Society hormone guideline 2017) with the Indian legal interface carried as core clinical literacy: NALSA v. Union of India (2014) — self-identification as the constitutional right requiring neither surgery nor hormones; the Transgender Persons (Protection of Rights) Act 2019 + Rules 2020 — the certificate machinery (district magistrate, screening committee, the separate post-surgery certificate tier); the welfare boards; the Madras HC conversion-therapy ban lineage for the corrections to teach.",
    systemContext: "The four Indian clinical meeting-points: (1) the young-adult self-referral (the metro-and-tele cohort: certificate questions, hormones questions, family-disclosure coaching — the pathway-walk as the consultation's core craft); (2) the family's arrival (the parents-who-grieved-and-now-negotiate — the family-work tier where the outcome literature's strongest lever lives; one session converting 'she is possessed / it is our fault / find a cure' into the grief-to-acceptance arc changes the trajectory more than any prescription); (3) the hijra-community patient (the historically-served tier arriving for HIV-and-general care: the courtesy-standards discipline, the guru-structure respected as community-not-pathology, the violence-and-occupational realities addressed without moralising); (4) the crisis presentations (the post-disclosure family storm, the assault aftermath, the suicidal young person in the refused-and-humiliated tier).",
    programmeContext: "Clinical delivery metro-and-thin: a handful of hospital-based gender clinics and endocrine pathways, government-surgery tiers in single-digit-centre counts, private-pharmacy unsupervised hormones as the de-facto national route — which makes the harm-minimisation monitoring the clinic's highest-yield offering (the bloods offered even to the patient who declines the official pathway); the community organisations as the accompaniment tier (the documents walk, the peer support, the staff-sensitisation partnership); the state-tier leadership (Tamil Nadu's welfare-board lineage, Kerala's 2015 policy) as the policy proof it can be done.",
    costConsiderations: "Oestrogen-plus-anti-androgen ₹200–800 monthly; testosterone injections ₹300–1,200 monthly; the monitoring bloods ₹500–2,000 per cycle; gamete banking ₹10,000–30,000 per cycle; chest masculinisation metro-private ₹80,000–2,50,000 (the rare government tier scarce); the certificate machinery at administrative cost (approx 2026).",
    culturalConsiderations: "The two-world respect: the hijra-and-kinnar communities' historical legitimacy (gharana structures, guru lineages, the blessing-and-performance traditions) engaged as community, never framed as pathology; the urban cohort's isolation (trans men especially — no traditional community, the concealment's collateral) met with the peer-linkage tier. The family-arc craft: the grief respected (the imagined future's death is a real grief), the 'cures' named as evidence-ruins, the forced-marriage de-escalation, the priest-and-ritual conversations handled with the grief-honoured-and-evidence-named discipline. The exam-and-viva teaching hygiene: the ICD-11 reclassification, NALSA's self-ID, and the fertility discipline as the three facts that set the current candidate apart.",
    patientCounselling: [
      "The first-session sentences that carry the two axes: 'the dysphoria responds to alignment; the distress responds to acceptance — we work both, together' — the architecture the pathway runs on.",
      "The fertility script BEFORE any hormone: 'some effects on the gamete pool come within months and are permanent; the banking offer is on the table today, and whatever you decide, the record shows we had this conversation.'",
      "The monitoring conversation for the pharmacy-route patient: 'wherever you source them, the bloods happen here — the clot-risk-and-smoking conversation for oestrogen, the blood-count for testosterone' — harm-minimisation without permission-gates.",
      "The family-session arc: the grief named, the blame retired, the pronoun-practice scheduled, the 'no cure-conversation ever again' boundary set with kindness.",
      "The documents-walk coaching: the DM application, the screening committee, the TG-mark documents, the post-surgery certificate tier — walked as practical craft, with the community-organisation accompaniment where wanted.",
      "The courtesy-standards conversation with one's own institution: the chosen-name-in-file, the consented ward placement, the dignity disciplines — the change any hospital can run tomorrow.",
    ],
  },
  decisionPath: {
    title: "The gender-incongruence assessment",
    nodes: [
      {
        id: "start",
        question: "A patient presents — self-referring with the pathway's questions, or family-escorted, or in crisis. What is the tier?",
        branches: [
          { label: "Pathway questions (hormones, documents, surgery)", next: "assessment" },
          { label: "The family's arrival ('find a cure')", next: "family-work" },
          { label: "Crisis (suicidality, post-disclosure storm, violence)", next: "crisis-first" },
          { label: "Pharmacy-route hormones, unmonitored", next: "harm-reduction" },
        ],
      },
      {
        id: "assessment",
        question: "The biopsychosocial confirmation: the gender history (childhood persistence, the puberty-catastrophe marker), the dysphoria map (body-social-role), the comorbidity-and-suicide screen, the four differentiations, the support map. Persistent-and-stable?",
        branches: [
          { label: "Persistent, confusions excluded", next: "pathway" },
          { label: "Late-emerging-or-fluctuating picture", next: "fuller-differential" },
        ],
      },
      {
        id: "pathway",
        question: "The affirmative pathway, tiered.",
        recommendation: "The two-axes architecture: the social rungs first (name, pronouns, dress, role, documents — reversible, therapeutically active); the fertility conversation BEFORE any hormone; hormone therapy with the monitoring discipline (VTE-and-smoking-absolute on oestrogen; haematocrit on testosterone) and endocrine co-management; the surgical referrals after the stable-in-role period with readiness assessment; the family work in parallel (the strongest predictor's lever); the courtesy standards at every contact.",
      },
      {
        id: "family-work",
        question: "The family's arrival.",
        recommendation: "The family session as the highest-yield hour: the grief named and respected, the blame retired with the evidence, the 'cures' named as the banned-and-failed tier they are, the acceptance arc begun (the outcome literature's strongest predictor), the pronoun-discipline coaching, the forced-marriage de-escalation — the patient invited to decide what the family hears and when.",
      },
      {
        id: "crisis-first",
        question: "Suicidality, the family storm, or violence's aftermath.",
        recommendation: "The safety architecture first: the suicide screen with the full protocol (Tele-MANAS 14416 as the crisis tier), the housing-and-safety assessment where the storm is live (the community-organisation linkage, the shelter tier), the post-assault medical-and-legal pathway with dignity-capable providers; the pathway work resumes when the acute tier is held.",
      },
      {
        id: "harm-reduction",
        question: "The unsupervised-hormone patient.",
        recommendation: "The monitoring offered without permission-lectures: the VTE-risk-and-smoking conversation, the haematocrit, the lipids, the liver, the bone schedule — the harm-minimisation discipline that saves more lives than the insistence-on-permission the system cannot enforce; the fertility conversation still attempted (late is late, but the record and the offer matter); the official pathway's door left open.",
      },
      {
        id: "fuller-differential",
        question: "The late-emerging-or-fluctuating presentation.",
        recommendation: "The fuller differential-and-psychological exploration BEFORE the pathway begins: the four confusions re-examined (the trauma-driven states especially), the comorbidity treated in its own right, the pace slowed with the patient's agreement — the persistence discipline protecting both the patient and the pathway's integrity.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading 'gender identity disorder' as the current ICD term",
      why: "The outdated frame: ICD-11 moved gender incongruence to the sexual-health chapter in 2019 — de-pathologised identity, retained clinical pathway.",
      correction: "The current terms: gender incongruence (ICD-11, sexual health); gender dysphoria (DSM-5's retained access category) — the distinction every current exam and clinic runs on.",
    },
    {
      mistake: "Believing hormones are a prerequisite for legal recognition in India",
      why: "The inversion of NALSA's architecture: self-identification is the constitutional right — neither surgery nor hormones required.",
      correction: "NALSA 2014's self-ID principle with the Act-2019 certificate machinery overlaid: recognition is administrative, not medical.",
    },
    {
      mistake: "Reading the comorbidity as proof of the mental illness",
      why: "The minority-stress architecture inverted: the depression-anxiety-and-suicidality track rejection exposure, not the incongruence.",
      correction: "The rates fall toward population in accepting environments and after affirmative care — the evidence the family work and the courtesy standards run on.",
    },
    {
      mistake: "Believing conversion therapy has some evidence base",
      why: "The banned-and-harmful tier: no re-orientation intervention ever worked; the Madras HC directions prohibit the practice.",
      correction: "Nothing has ever re-oriented a gender identity; alignment-and-acceptance are the two evidence-backed axes.",
    },
    {
      mistake: "Starting hormones without the fertility conversation",
      why: "The miss-it-and-regret-it discipline: gamete effects come within months, some permanent — the Indian pharmacy route's most common irreversible casualty.",
      correction: "The banking offer BEFORE the first tablet, the decline documented, the record showing the conversation happened.",
    },
    {
      mistake: "Assuming all trans persons want surgery",
      why: "The pathway is chosen-and-tiered: many stop at social transition or hormones; the 'full transition' default misreads autonomy.",
      correction: "The dysphoria map directs the rungs — each consented, each optional; the readiness frame serves the patient's choices, never a template.",
    },
    {
      mistake: "Confusing transvestic arousal with transgender identity",
      why: "The arousal-versus-identity conflation the old teaching carried.",
      correction: "Arousal is not identity: the dressing-excitement with inter-episode comfort versus the persistent self-knowledge — the line both this course and the Paraphilic Disorders course draw cleanly.",
    },
    {
      mistake: "The default-gender ward placement and the deadnamed file",
      why: "The institutional harm the community remembers: the men's-ward placement, the old name in the records — the refusals that drive patients from ALL healthcare, HIV care included.",
      correction: "The courtesy standards: the chosen name in the file, the consented placement, the dignity disciplines — the intervention no prescription replaces, deliverable by any hospital tomorrow.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The ICD-11 reclassification and DSM-5's retained-category logic.",
        "The four differentiations with their one-line separating rules.",
        "The two treatment axes and the family-acceptance fact.",
        "The hormone monitoring tables: oestrogen's watch-set, testosterone's watch-set.",
      ],
      practical: [
        "Take the gender history: the persistence arc, the puberty marker, the dysphoria map.",
        "Counsel a family in the first session: the grief-to-acceptance frame.",
      ],
      longAnswer: [
        "A 26-year-old assigned-female seeks hormones: your assessment-and-counselling architecture.",
        "Gender incongruence: the classification change, the clinical pathway and the Indian legal frame.",
      ],
    },
    neetPg: {
      highYield: [
        "ICD-11 (2019): gender incongruence moved to sexual health — a variation, not a mental disorder; DSM-5's 'gender dysphoria' retained as the access frame.",
        "The two axes: dysphoria responds to ALIGNMENT; comorbidity responds to ACCEPTANCE — family acceptance the single strongest outcome predictor.",
        "The comorbidity architecture: minority-stress model (Meyer) — elevations tracking rejection exposure, falling toward population in accepting environments.",
        "The fertility rule: gamete preservation counselled BEFORE hormones (months-scale, some-permanent effects); the offer-and-decline documented.",
        "The monitoring pair: oestrogen-VTE-and-smoking-absolute; testosterone-haematocrit — plus lipids, glucose, bone, and the cervical-and-breast screening continuity.",
        "The four differentiations: transvestic arousal, BDD, trauma-states, the delusional belief (psychosis — responds to antipsychotics; identity does not).",
        "The Indian legal tier: NALSA 2014 self-ID (no surgery, no hormones); the Act-2019 certificate machinery (district magistrate); the conversion-therapy ban lineage.",
        "The epidemiology: census ~4.88 lakh (undercount); register 0.002–0.014% vs survey 0.1–1.1% (the definition-and-door tiers).",
        "The corrections to carry: not caused by parenting, trauma or adult social contagion.",
      ],
      pyqConcepts: [
        "The Zhou-Kruijver-Swaab hypothalamic lineage — honestly framed (small-sampled, corroborative).",
        "The CAH-and-intersex natural experiments — biology biases, does not script.",
        "The Ryan family-acceptance cohorts — the strongest-single-predictor evidence.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-year-old Coimbatore software professional, assigned-female, self-identifying as a man since adolescence (the binding-through-college arc, the family's grief-and-bargaining cycle): the assessment confirmation, the fertility offer (declined with cost-and-secrecy reasoning, documented), the testosterone initiation with monitoring (haematocrit at 3-and-6 months, the cervical-screening continuity), the DM-certificate walk, the surgery-referral timing, the family session (the father's grief work; the mother's pronoun practice; the 'no cure-conversation ever again' boundary).",
        "A 34-year-old hijra-community woman referred from an ART centre for depression screening: the misgendering-and-refusals history, the guru-gharana's support-and-pressures, the SSRI-plus-CBT plan with the minority-stress frame explicit, the courtesy-standards negotiated with the hospital administration, the community-organisation partnership.",
        "The 20-year-old trans man on pharmacy-sourced testosterone, unmonitored: the harm-minimisation entry (the bloods without the permission-lecture), the smoking-and-VTE conversation where oestrogen is involved, the official pathway's door left open.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The ICD-11 reclassification (the exam's settled fact).",
        "NALSA's self-ID architecture.",
        "The fertility-before-hormones discipline.",
        "The monitoring pair (VTE / haematocrit).",
        "The four differentiations.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The monitoring-first approach to the pharmacy-route patient converts the system's most common pathway (unsupervised hormones) from a blind spot into the engagement's entry point — no permission-lectures, just the bloods.",
        "The family session's framing discipline: 'the grief is real; the cure is not' — the sentence that honours the parents while ending the conversion search.",
        "The case-notes documenting stigma exposures serve double duty: treatment formulation AND legal-and-welfare advocacy — the minority-stress frame written openly is a clinical act.",
        "The courtesy standards are the retention intervention: the community's institutional memory (the deadnamed file, the men's-ward placement) is why the missing-from-care tier is missing — and why the peer-referrals after one dignity-capable encounter are the trust-metric that matters.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The pathway walk",
      presentation: "26-year-old software professional, Coimbatore, assigned-female, self-identifying as a man since adolescence — arriving with the three questions: hormones, chest surgery, documents.",
      initialPresentation: "A 26-year-old software professional presented with three questions: hormones, chest surgery and documents. Assigned female at birth, he had identified as a man since adolescence — the binding-through-college arc, the post-NALSA online community, two years of disclosure-negotiations with a family that had moved through grief and bargaining to a wary truce. The assessment confirmed the childhood-persistent pattern (the recollections, the puberty catastrophe — the strongest single marker), mapped a moderate social-and-body dysphoria, screened the comorbidity (moderate anxiety, no current suicidality), and excluded the four confusions on the history alone.",
      history: "No medical illness; the family's arc documented (the possessed-frame year, the priest consultations, the slow truce); workplace supportive in principle; documents still in the assigned name.",
      examination: "Alert, articulate, well-researched (the community forums' literacy); the anxiety tier mapped to the documents-and-family strain; no psychotic features; the physical exam deferred to the pathway's endocrine tier.",
      diagnosis: "Gender incongruence (ICD-11 frame), childhood-persistent, with moderate social-and-body dysphoria and secondary anxiety.",
      management: "The two-axes plan: the fertility-preservation offer first (declined with cost-and-secrecy reasoning — documented); testosterone initiation with the monitoring discipline (haematocrit at 3-and-6 months, the lipids-glucose cycle, the cervical-and-breast screening continuity conversation); the DM-certificate walk (the application, the screening-committee reality, the TG-mark documents); the chest-surgery referral timed to the stable-in-role year; the family sessions (the father's grief work; the mother's pronoun practice; the 'no cure-conversation ever again' boundary set with kindness).",
      outcome: "Eighteen months: the name-change documents half-complete, the chest surgery booked, the family arc at cautious acceptance, the anxiety tier halved.",
      teachingPoints: [
        "The pathway-walk IS the treatment — the practical craft (documents, referrals, monitoring) delivered with the two-axes frame.",
        "The fertility discipline and its documentation: the offer made, the decline recorded, the record protected.",
        "The family session as the highest-yield hour — the arc from 'find a cure' to cautious acceptance.",
      ],
    },
    {
      title: "The courtesy tier",
      presentation: "34-year-old hijra-community woman referred from an ART centre for depression screening — the consultation-history of misgendering-and-refusals riding with her.",
      initialPresentation: "A 34-year-old hijra-community woman was referred from an ART centre for depression screening. The consultation's history was the system's own: the men's-ward placement at her last admission, the deadnaming in the file, the refused-toilet access — the institutional memory the community carries and the reason her sisters do not come. The lived realities were present too: the guru-gharana's support-and-pressures, the occupational risks, a violence history. The depression itself was moderate, coherent, and legible in the minority-stress frame: the load of the refusals, the street harassment, the healthcare encounters that cost more than they gave.",
      history: "HIV-positive, ART-adherent (the one system that had treated her with consistency); the community's economy and structure respected as community, not pathology; no prior psychiatric contact.",
      examination: "The PHQ-tier screen positive at the moderate band; the suicide screen negative; the mental state: guarded with the system, open within minutes of the chosen name being used.",
      diagnosis: "Moderate depressive disorder in the minority-stress frame; HIV in care.",
      management: "The SSRI-plus-CBT plan written with the minority-stress frame explicit (the case-notes documenting the stigma exposures — serving the treatment and any future welfare advocacy); the hospital's courtesy standards negotiated with the administration (the chosen-name-in-file, the ward-placement policy, the staff-sensitisation session the community organisation offered); the HIV care's continuity protected as the system's one working trust.",
      outcome: "Six months: the depression in remission, the retention in care (the outcome the courtesy tier exists for), and the peer-referral of two community sisters to the same clinic — the trust-metric.",
      teachingPoints: [
        "The comorbidity's cause-and-treatment architecture: the minority-stress frame written openly is a clinical act.",
        "The courtesy standards are clinical care — the intervention no prescription replaces.",
        "The community-organisation partnership is the Indian system's reachable reform.",
      ],
    },
  ],
  clinicalPearls: [
    "ICD-11 (2019): incongruence is a sexual-health variation, not a mental disorder; DSM-5's dysphoria category is the access frame.",
    "The two axes: dysphoria responds to ALIGNMENT; comorbidity responds to ACCEPTANCE — family acceptance the single strongest predictor.",
    "The comorbidity is minority stress: elevations tracking rejection exposure, falling toward population in accepting environments.",
    "The puberty-catastrophe marker and the persistence discipline anchor the assessment.",
    "The fertility conversation before the first tablet — the offer and the decline both recorded.",
    "Oestrogen: VTE-and-smoking-absolute; testosterone: haematocrit — plus the screening continuity identity does not retire.",
    "NALSA self-ID: recognition requires neither surgery nor hormones; the Act-2019 certificate is administrative machinery.",
    "The four differentiations: transvestic arousal, BDD, trauma-states, the delusional belief.",
    "The courtesy standards — the chosen name, the consented placement, the dignity disciplines — are the retention-in-care engine any hospital can run tomorrow.",
  ],
  highYieldSummary: [
    "Gender incongruence (ICD-11, sexual health — HA60/61) = the marked-and-persistent experienced-versus-assigned mismatch, de-pathologised; DSM-5's gender dysphoria (302.85/F64.0, ≥6 months) retained as the access-to-care frame.",
    "Biology honestly: prenatal-hormone windows, twin concordance, the intersex-and-CAH natural experiments — biases, does not script; parenting, trauma and adult contagion causations unsupported.",
    "The comorbidity architecture: minority stress — depression-anxiety-suicidality tracking rejection exposure, falling toward population in accepting environments; family acceptance the strongest single predictor.",
    "The assessment: the gender history (persistence, the puberty marker), the dysphoria map (body-social-role), the comorbidity-and-suicide screen (mandatory), the four differentiations, the support map.",
    "The pathway: social transition (reversible) → hormone therapy (partly irreversible; fertility BEFORE; monitoring: VTE-smoking-oestrogen / haematocrit-testosterone; endocrine co-management) → surgery (irreversible; readiness-assessed; chest masculinisation the highest-satisfaction procedure).",
    "Mental-health care throughout: the comorbidities treated in their own right with the minority-stress frame explicit; the family work central; the community linkage protective.",
    "The Indian tier: NALSA 2014 self-ID; the Act-2019 certificate (DM machinery, post-surgery tier); the census undercount (~4.88 lakh); the two-world epidemiology (hijra communities and the urban cohort); the de-facto pharmacy route met with harm-minimisation monitoring.",
    "The courtesy standards: the chosen name, the consented placement, the dignity disciplines — deliverable by any hospital tomorrow, and the intervention no prescription replaces.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "gi-quiz-1",
      question: "The ICD-11 reclassification of gender incongruence:",
      options: ["Kept it among the paraphilias", "Moved it to the sexual-health chapter (a variation, not a mental disorder) with the dysphoria-and-needs tier as the clinical interface", "Deleted it from all classifications", "Made it a personality disorder"],
      correctIndex: 1,
      explanation: "The 2019 architecture: de-pathologised identity, retained clinical pathway; DSM-5's dysphoria category runs parallel as an access frame.",
      afterSectionId: "diagnosis",
    },
    {
      id: "gi-quiz-2",
      question: "The comorbidity architecture in gender-incongruent adults, correctly stated:",
      options: ["Depression proves the incongruence is itself a mental illness", "The elevated depression-anxiety-and-suicidality track minority-stress exposure, falling toward population rates in accepting environments — family acceptance the strongest single predictor", "Comorbidity is minimal in all settings", "The incongruence causes psychosis"],
      correctIndex: 1,
      explanation: "The minority-stress model's signature — and the family session's evidence-based place at the centre of treatment.",
      afterSectionId: "mechanism",
    },
    {
      id: "gi-quiz-3",
      question: "Before initiating hormones, the discipline most often missed in Indian practice:",
      options: ["EEG", "Fertility-preservation counselling-and-offering: gamete banking before the first tablet, with the offer-and-decline documented", "Personality testing", "MRI"],
      correctIndex: 1,
      explanation: "The months-window-and-permanence of hormonal gamete effects; the record's duty to show the conversation happened.",
      afterSectionId: "management",
    },
    {
      id: "gi-quiz-4",
      question: "Trans men on testosterone, the monitoring watch-set:",
      options: ["Only weight", "Haematocrit (polycythaemia), lipids, glucose-and-BP, plus the cervical-and-breast screening continuity the organs mandate", "Only liver profile", "Nothing"],
      correctIndex: 1,
      explanation: "The testosterone tier's discipline — and the screening-continuity principle: identity does not retire organs.",
      afterSectionId: "management",
    },
    {
      id: "gi-quiz-5",
      question: "The Indian legal architecture, correctly stated:",
      options: ["Surgery is required for gender recognition", "NALSA 2014 established self-identification as the right (no surgery, no hormones); the Act 2019 overlays the district-magistrate certificate machinery, with a separate post-surgery certificate tier", "Recognition requires a psychiatric diagnosis only", "Recognition requires family consent"],
      correctIndex: 1,
      explanation: "The self-ID principle-and-its administrative overlay — the exam's and the clinic's core legal literacy.",
      afterSectionId: "indian-practice",
    },
    {
      id: "gi-quiz-6",
      question: "A psychotic patient declares, with delusional certainty-and-elaboration, being 'the other gender trapped by enemies'. Among the four differentiations, this is:",
      options: ["Gender incongruence", "A delusional belief within psychosis: treated with the episode's antipsychotic architecture; gender identity itself does not yield to antipsychotics", "Transvestic arousal", "Body dysmorphic disorder"],
      correctIndex: 1,
      explanation: "The rare-but-exam-favoured differential: the delusion's machinery (certainty, elaboration, the accompanying psychotic fabric) separates it from the persistent, non-delusional incongruence.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "State the ICD-11 reclassification and DSM-5's retained-category logic in three sentences.", answer: "ICD-11 (2019) moved gender incongruence out of the mental-disorder chapters into conditions related to sexual health — a variation of human gendering, not an illness. The clinical interface it retains: the dysphoria (the distress of the mismatch) and the needs tier (the pathway). DSM-5 keeps 'gender dysphoria' in parallel as an access-to-care frame — the category that unlocks services and insurance — with the post-transition specifier acknowledging the pathway's tiers.", topic: "Concepts" },
    { question: "The four differentiations and their one-line separating rules.", answer: "Transvestic arousal: the dressing is the arousal, identity comfortable between episodes — arousal is not identity. Body dysmorphic disorder: defect-beliefs with mirror-rituals and reassurance loops — the dysphoria is coherent-and-gendered, not defect-delusional. Trauma-driven identity distress: post-trauma instability without the persistent pre-trauma gender thread. The delusional gender-identity belief: certainty-with-bizarre-elaboration within a psychotic fabric — it responds to the episode's antipsychotic treatment; gender identity does not.", topic: "Diagnosis" },
    { question: "The two treatment axes and the single strongest outcome predictor.", answer: "The dysphoria responds to ALIGNMENT — social-and-bodily transition toward the experienced gender (the tiered pathway: social rungs reversible first, hormones monitored, surgery readiness-assessed). The comorbidity responds to ACCEPTANCE — family-and-social; the minority-stress comorbidity falls toward population rates in accepting environments. The single strongest predictor in the outcome cohorts: FAMILY ACCEPTANCE — the fact that puts the family session at the treatment's centre.", topic: "Management" },
    { question: "The hormone monitoring tables: oestrogen's watch-set, testosterone's watch-set, and the shared disciplines.", answer: "Oestrogen (trans women): VTE risk, lipids, liver, prolactin — with smoking cessation ABSOLUTE. Testosterone (trans men): haematocrit (polycythaemia), lipids, glucose-and-BP. Shared: bone health on schedule, the endocrine co-management discipline, the fertility conversation before the first tablet, and the screening continuity the organs mandate regardless of identity — cervical and breast screening for trans men, the prostate conversation for trans women.", topic: "Pharmacology" },
    { question: "The fertility-preservation rule: when, why, and what the record must show.", answer: "WHEN: before ANY hormone initiation. WHY: oestrogen-and-testosterone impair the gamete pool within months, some effects permanent — the miss-it-and-regret-it tier, and the Indian pharmacy route's most common irreversible casualty. THE RECORD: the offer made, the counselling documented, and the decline (which most patients make, for cost-or-family-secrecy reasons) equally documented — the record's duty is to show the conversation happened.", topic: "Management" },
    { question: "Walk the Indian certificate pathway: NALSA's principle, the Act-2019 machinery, the post-surgery tier.", answer: "NALSA v. Union of India (2014): self-identification as the constitutional right — recognition requires NEITHER surgery NOR hormones (the judgement's explicit architecture). The Transgender Persons Act 2019 + Rules 2020 overlays the machinery: application to the District Magistrate, a screening-committee layer, the certificate-of-identity (the TG-mark's documents) — with a separate-and-later certificate tier for gender-male-or-female change post-surgery; the welfare boards and the anti-discrimination clauses complete the frame.", topic: "Indian practice" },
    { question: "The courtesy-standards list your own hospital could adopt tomorrow.", answer: "The chosen name-and-pronouns in records-and-address (retiring the deadname from the file's working surface); the ward-placement conversation with the person's consent (never the default-gender assignment); the toilet-and-examination dignity; the HIV-and-STI care without moralising; the staff-education session the community organisations offer in partnership — the five changes any hospital can run tomorrow, and the retention-in-care engine the trust-metric of peer-referrals tracks.", topic: "Indian practice" },
    { question: "The corrections to carry: name the unsupported causations and the evidence position on each.", answer: "Parenting styles and the 'absent-father-dominant-mother' folklore: unsupported — no family-causation evidence survives. Trauma-induced identity: unsupported — the post-trauma presentations are different entities (the differentiations table); the recollection history settles it. Adult social contagion: unsupported as an adult explanation — the adolescent-cohort debate is a separate literature; adult persistence-and-recollection is stable. What the evidence DOES support: the prenatal-windows biology that biases without scripting — and the minority-stress architecture for the comorbidity.", topic: "Concepts" },
  ],
  faqs: [
    { question: "Doctor, is my child mentally ill? Is this a disease?", answer: "No: the international classifications removed it from the mental illnesses in 2019; it is a variation of human gendering. The illness-loads we treat are the distress and the depression that stigma-and-rejection add on top — and family acceptance is the single strongest medicine for that tier." },
    { question: "Can this be cured — counselling, medicines, marriage?", answer: "Nothing has ever re-oriented a gender identity; the decades of attempts are psychiatry's failed-and-regretted history, and conversion practices are banned-and-harmful. What treatment does is align the life-and-body with the self, and support the person-and-family through the arc." },
    { question: "Are hormones lifelong? Are they dangerous?", answer: "Mostly lifelong, yes (the maintenance-dose logic — the thyroid-and-diabetes analogy helps). Dangerous only when unsupervised: the clot-risk-and-smoking-absolute on oestrogen, the blood-count watch on testosterone. Supervised, the risks are managed; unsupervised (the pharmacy route most of India actually runs), they are gambles — which is why the monitoring exists even for the self-started." },
    { question: "What about children, grandchildren? My son wants to freeze...?", answer: "The fertility question must be settled BEFORE hormones (the gamete-banking offer), because some of the effects on the gamete pool come within months and are permanent: the offer-and-the-decline, both recorded." },
    { question: "The surgery — is it necessary for the certificate? For the law?", answer: "No on both: NALSA's self-identification right requires neither surgery nor hormones, and the Act-2019 certificate is its own administrative tier. Surgery is a personal medical choice on the pathway, assessed for readiness, never a legal requirement." },
    { question: "Which toilet? Which ward?", answer: "The person's-consented placement, the chosen name in the file, the dignity disciplines — the hospital's courtesy standards. The refusal-and-humiliation tier is exactly what drives the community away from all healthcare, including the HIV care that keeps them alive." },
    { question: "Our family priest says a ritual can fix this...", answer: "The family's grief deserves respect; the ritual's claims do not — the evidence-graveyard is full. The family-session's real work is the arc from 'fix the child' to 'fix the environment', and every family that makes that arc reports the same surprise: the depression they feared was their child's lifts with their acceptance." },
    { question: "Is my son following internet fashion? He was quiet about this for years.", answer: "Adult incongruence is typically childhood-persistent, remembered from before the internet-and-the-words; the vocabulary arrives late to an old reality. The years of quiet were the concealment, not the absence." },
    { question: "He is already taking hormones from a pharmacy. What should we do?", answer: "Do not confiscate — accompany: find a clinic that offers the monitoring without the permission-lecture (the bloods, the clot-risk conversation, the smoking-absolute), keep the official pathway's door open, and bank the fertility conversation's urgency. The harm-minimisation approach keeps him in care; the confrontation loses him from it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO ICD-11 — gender incongruence in the sexual-health chapter (the reclassification architecture) (2019/2022)" },
      { source: "Coleman E et al. — WPATH Standards of Care 8 (2022): the affirmative-pathway standards" },
      { source: "Hembree W et al. — Endocrine Society clinical practice guideline on hormone therapy (2017)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.4 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — the gender-dysphoria chapter (2022)" },
    ],
    trials: [
      { source: "Dhejne C et al. — the long-term outcome-and-mortality cohorts after transition (honestly read for era-and-loss-to-follow-up limits)" },
      { source: "Asscheman H et al. — the oestrogen-VTE cohort studies; the testosterone-haematocrit literature (the monitoring discipline's evidence)" },
    ],
    reviews: [
      { source: "Zhou J, Kruijver F, Swaab D et al. — the hypothalamic-nuclei studies (the neurodifferentiation line, honestly framed); the twin-and-genetic tiers" },
      { source: "Ryan C et al. — the family-acceptance cohort studies (the strongest-single-predictor evidence)" },
      { source: "Meyer I — the minority-stress model; Hendricks M & Testa R — the transgender application" },
      { source: "Winter S et al. — the transgender-epidemiology-in-non-Western-settings line; Kalra G — the Indian psychiatry review tier" },
      { source: "The Indian legal tier — NALSA v. Union of India (2014); the Transgender Persons Act 2019 + Rules 2020; Tamil Nadu's welfare-board lineage and Kerala's 2015 policy; Census 2011's count (with the undercount caveat)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416) — the crisis tier" },
      { source: "The community organisations — the accompaniment tier for the documents walk and the peer support" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the variation-not-illness frame, the two treatment axes, the Indian pathway.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The reclassification, the assessment, the differentiations and the pathway tiers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian legal layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — the pathway-walk craft, the harm-minimisation discipline, the courtesy standards, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The reclassification, the two axes, the Indian numbers and legal frame.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the ICD-11 move, the two axes and the family-acceptance fact cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The body-map set early, the minority-stress cascade, the honest evidence tiers.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why biology biases without scripting, and why the comorbidity tracks the stigma." },
    { number: 3, title: "Clinical Practice", description: "The assessment, the differentiations, the pathway tiers with the monitoring and fertility disciplines.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the dysphoria map, sequence the fertility conversation first, and write the monitoring plan." },
    { number: 4, title: "Indian Context", description: "The four meeting-points, the certificate machinery, the harm-minimisation discipline, the courtesy standards.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can walk the documents path with a patient and run the courtesy-standards conversation with your own institution." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the reclassification, NALSA and fertility questions cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "WHO ICD-11 — gender incongruence in the sexual-health chapter (the reclassification architecture)", sourceType: "classification", edition: "ICD-11 MMS", year: "2019/2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S2", source: "APA DSM-5/5-TR — the retained gender-dysphoria category and its access rationale", sourceType: "classification", year: "2013/2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.4 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Coleman E et al. — WPATH Standards of Care 8 (the affirmative-pathway standards)", sourceType: "guideline", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Hembree W et al. — Endocrine Society clinical practice guideline on hormone therapy", sourceType: "guideline", year: "2017", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Zhou J, Kruijver F, Swaab D et al. — the hypothalamic-nuclei studies; the twin-and-genetic concordance tiers", sourceType: "primary", year: "1995 onward", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Ryan C et al. — the family-acceptance cohort studies (the strongest-single-predictor evidence)", sourceType: "primary", year: "2009 onward", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Meyer I — the minority-stress model; Hendricks M & Testa R — the transgender application", sourceType: "review", year: "2003 onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Asscheman H et al. — the oestrogen-VTE cohorts; the testosterone-haematocrit literature; Dhejne C et al. — the long-term outcome cohorts (honestly read)", sourceType: "primary", year: "1989–2011", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Winter S et al. — the non-Western epidemiology line; Kalra G — the Indian psychiatry review tier; the Census-2011 transgender count documentation", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "The Indian legal tier — NALSA v. Union of India (2014); the Transgender Persons Act 2019 + Rules 2020; Tamil Nadu's welfare-board lineage; Kerala's 2015 policy; the Madras HC conversion-therapy directions", sourceType: "government", year: "2014 onward", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "ICD-11 moved gender incongruence to conditions related to sexual health in 2019 — a variation of human gendering, not a mental disorder; DSM-5's 'gender dysphoria' runs in parallel as an access-to-care frame.", grade: "established", sources: ["S1", "S2"] },
    { text: "The comorbidity architecture: depression-anxiety-and-suicidality elevated in stigma-exposed cohorts, tracking minority-stress exposure (not the incongruence), falling toward population rates in accepting environments and after affirmative care.", grade: "established", sources: ["S8", "S7"] },
    { text: "Family acceptance is the single strongest predictor of a trans person's mental health in the outcome cohorts — the family session's evidence-based centrality.", grade: "established", sources: ["S7"] },
    { text: "The prenatal-hormone contribution: the intersex-and-CAH natural experiments show prenatal-androgen exposure shifting some-but-not-all of later gender identity; twin concordance above chance; hypothalamic-and-white-matter findings corroborative — biology biases, does not script.", grade: "supported", sources: ["S6"] },
    { text: "No re-orientation intervention has ever worked; parenting, trauma and adult-contagion causations are unsupported — the conversion-therapy bans ride the same evidence base.", grade: "established", sources: ["S4", "S11"] },
    { text: "The hormone monitoring discipline: oestrogen's VTE risk with the smoking-absolute; testosterone's haematocrit watch; lipids, glucose, bone and the organ-mandated screening continuity regardless of identity.", grade: "established", sources: ["S5", "S9"] },
    { text: "The fertility rule: hormonal effects on the gamete pool arrive within months, some permanent — gamete preservation offered before initiation, the offer-and-decline documented.", grade: "established", sources: ["S4", "S5"] },
    { text: "The Indian legal architecture: NALSA 2014's self-identification right requiring neither surgery nor hormones; the Act-2019 district-magistrate certificate machinery with the separate post-surgery tier.", grade: "established", sources: ["S11"] },
    { text: "The Indian epidemiology: the census ~4.88 lakh self-declared count (the undercount caveat); register-vs-survey prevalence tiers globally (0.002–0.014% vs 0.1–1.1%); the two-world clinical reality and the de-facto pharmacy hormone route.", grade: "supported", sources: ["S10", "S11"] },
    { text: "The long-term outcome cohorts after transition: improved-dysphoria-and-function arcs, honestly read for their era-and-loss-to-follow-up limits — the treatment-evidence tier the pathway stands on.", grade: "supported", sources: ["S9"] },
  ],
};
