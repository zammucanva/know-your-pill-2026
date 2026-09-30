import type { PsychiatryCourse } from "./types";

/**
 * HOMICIDE, MASS MURDER & INFANTICIDE — canonical Psychiatry course
 * (migration batch 11, Group O — forensic psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/homicide-infanticide.md — untouched
 * foundation), re-researched against the lineage the note itself
 * cites: the National Confidential Inquiry synthesis and Avoidable
 * Deaths five-year report, the Wallace Australian cohort (the 5x
 * and 99.97% figures), Mullen's autogenic massacre, the Flynn
 * infant-homicide study, the Munro-Rumgay analysis — per-claim
 * provenance throughout.
 *
 * Drug routes: honest absence — the antipsychotic maintenance belongs
 * to the Schizophrenia course, the perinatal tier behind the infanticide
 * provision has no KYP course: drugLinks is empty, absences recorded
 * in contentGaps, routes never invented.
 */
export const homicideInfanticideCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "homicide-infanticide",
  title: "Homicide, Mass Murder & Infanticide",
  shortName: "Homicide & Mental Illness",
  kind: "concept",
  category: "Forensic Psychiatry",
  groupLetter: "O",
  groupName: "Forensic psychiatry",
  learningPath: ["Psychiatry", "Forensic Psychiatry", "Homicide, Mass Murder & Infanticide"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The rare truth — unpredictable, yet largely preventable through better care",

  summary:
    "The National Confidential Inquiry's finding: patient homicides are rare, the victims are family members rather than strangers, and prediction is weak while prevention through care works. The destigmatising arithmetic — almost no one with schizophrenia commits serious violence — belongs in every public statement.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote the general-population figures: 500–600 homicides a year in England and Wales; young male perpetrators and victims; sharp instrument the commonest method; around half of convictions murder, just under half manslaughter; 1 in 25 receives diminished responsibility.",
    "State the mental-illness proportions and hold them together: recent service contact 1 in 10, lifetime 1 in 5; schizophrenia 1 in 20 (international range 7–12.6%); stranger victims fewer than 1 in 6.",
    "Describe the Inquiry's method — the consecutive national case series, the multi-source data, the district-contact search — and why it turned anecdote into epidemiology.",
    "Summarise infant homicide: the first-year risk peak, the 4.5-per-100,000 rate, the 1-in-25 figure, the paternal-versus-maternal split, and neonaticide's dissociating young unmarried mothers.",
    "Distinguish mass, serial and spree murder on the cooling-off criterion, and describe Mullen's autogenic massacre as murder-suicide with media modelling.",
    "Outline female homicide (1 in 10; children and partners the victims; methods; disposals) and elderly homicide (the Darby-and-Joan pattern; 19:1 male ratio; hospital disposal preference).",
    "Explain the risk-assessment reality and act on it: last contact within the week in a third of cases; immediate risk judged low in 88%; predictability 28% versus preventability 65% — and the five protective factors that fill the gap.",
    "Use the balanced-view numbers against stigma: less than 10% of violent crime attributable; 99.97% of people with schizophrenia committing no serious violence in a year.",
  ],
  quickFacts: [
    { label: "The NCI quartet", value: "1 in 10 · 1 in 5 · 1 in 20 · <1 in 6", detail: "Recent service contact 1 in 10 perpetrators (lifetime 1 in 5); schizophrenia 1 in 20 (international range 7–12.6%); victims of the mentally ill perpetrator family members with strangers in fewer than 1 in 6 — the four numbers that defuse the headline" },
    { label: "The volume", value: "500–600 a year", detail: "Homicides in England and Wales annually; perpetrators and victims predominantly young males; sharp instrument the commonest method, shooting under 1 in 10; around half murder, just under half manslaughter" },
    { label: "The verdict", value: "28% predictable, 65% preventable", detail: "The Inquiry's central redirect — prediction fails (88% of final contacts judged low or absent risk) while care-system improvements succeed; the gap filled by compliance, family contact, supervision, communication and training, never by clairvoyance" },
    { label: "The stigma answer", value: "99.97%", detail: "The proportion of people with schizophrenia who commit no serious violent offence in any given year — alongside the less-than-10% attributable fraction of violent crime; the destigmatising arithmetic for every public statement" },
    { label: "The first year of life", value: "4.5 per 100,000 live births", detail: "Infant homicide risk is highest in the first year of life — the highest of any age; 1 in 25 of the Inquiry's 2,665 perpetrators (1996–2001) killed infants: half fathers, around a third mothers" },
    { label: "The neonaticide profile", value: "Young + unmarried + dissociation", detail: "Concealed pregnancy, delivery alone in a dissociated haze, the newborn hidden or discarded — panic and shame rather than depression; its own entity, distinct from postpartum-illness killings of older infants and from paternal violence" },
    { label: "The taxonomy", value: "Mass, spree, serial — the cooling-off criterion", detail: "Mass = one episode, one location; spree = over time, separate locations, NO cooling-off; serial = over time, separate locations, WITH cooling-off periods; mass murderers carry substantial severe (often psychotic) illness, serial killers psychopathy" },
    { label: "The elderly pattern", value: "19:1 and Darby and Joan", detail: "The rarest group (fewer than 1 in 50 perpetrators) and the most male-dominated (over-65 male:female ratio 19:1, the highest of any age); husband kills ill wife then himself, depression with impoverishment delusions; hospital disposal preferred" },
    { label: "The last contact", value: "88%", detail: "A third of patient-homicide perpetrators were seen in the week before the offence — and immediate risk was judged low or absent in 88% of those contacts; the false-positive mathematics that defeats individual prediction" },
  ],
  knowledgeGraph: [
    { label: "Psychiatric Disorder & Offending", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The risk architecture this course's numbers rest on — the comorbidity multiplier ladder (18% to 31% to 43%) and the causes-vs-associations discipline" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The disposal machinery — diminished responsibility, hospital orders, restriction orders — this course quotes as outcomes" },
    { label: "Juvenile Offending", type: "condition", href: "/psychiatry/juvenile-offending/", note: "The young-offender counterpart of the young-male violence concentration this course describes" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The 1-in-20 diagnosis whose rare homicides are family tragedies of unmanaged psychosis — and whose 99.97% annual non-violence rate is the anti-stigma arithmetic" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The murder-suicide variants — the autogenic massacre and the elderly dyadic death — are suicidology before they are criminology" },
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The comorbidity that carries the multiplier — the significant upward trends in drug and alcohol misuse among perpetrators" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The salience engine behind the persecutory and passivity phenomena of the rare psychosis-driven killing" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The planning-and-inhibition seat — where the grievance agenda runs and where psychosis degrades self-monitoring" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat-appraisal hub — the persecutory reading of the world shared by psychotic and grievance-driven violence" },
    { label: "Superior temporal cortex", type: "brain-region", href: "#brain", note: "The voice-and-passivity territory of the first case's night-time disturbance" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two mechanism stories carry this subject, and neither is a circuit diagram — they are the arithmetic and the psychology the evidence actually supports. The rarity-falsifies-prediction story: homicide by patients is vanishingly rare while its risk factors (substance misuse, past violence) are common in the patient population, so any screening instrument built from those factors flags thousands of people for each event — the Inquiry's own final-contact datum makes the point unbearable: a third of cases were seen in the week before the homicide, yet immediate risk was judged low or absent in 88% of those contacts. The false-positive mathematics defeats prediction at the individual level, which is why the Inquiry redirects effort from prediction to prevention: the care-system factors (compliance, supervision, communication) that reduce risk across the whole flagged population. Prediction fails; care succeeds. The murder-suicide story, in two variants: the autogenic mass murderer kills a crowd as the overture to his own death — the massacre as a suicide note written in other people's blood — and Mullen's formulation (a self-generated agenda of grievance and entitlement, built on isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity and persecutory beliefs, ending in intended self-death) explains why negotiation strategies aimed at survival miss the point; media modelling (the lone-warrior self-image, studied knowledge of prior massacres) does part of the work. The elderly spouse killer writes a smaller version: depression's impoverishment delusions conclude that death is mercy for both, and the killing is immediately followed by the suicide — the Darby-and-Joan pattern. Both variants are suicidology before they are criminology: the assessment question is 'who does he intend to die?', not only 'whom does he threaten?'",
    steps: [
      "The base rate: patient homicide is vanishingly rare against a patient population of millions — the event's rarity is the first fact of its science, and the reason the headline inverts the risk table.",
      "The shared risk factors: substance misuse and past violence are common in the patient population — so common that any screening instrument built from them flags thousands for each event.",
      "The false-positive mathematics: a third of perpetrators seen in the week before the offence, yet immediate risk judged low or absent in 88% of those contacts — individual prediction defeated at the bedside, in the data, repeatedly.",
      "The redirect: the Inquiry's verdict — 28% predictable, 65% preventable — moves the effort from prediction to prevention; care-system factors reduce risk across the whole flagged population, which is what screening never could.",
      "The autogenic variant: isolation, bullying, suspiciousness, obsessional traits, grandiosity and persecutory beliefs assemble a self-generated grievance agenda; media modelling supplies the lone-warrior script; the massacre is the overture to intended self-death — negotiation aimed at survival misses the point.",
      "The dyadic variant: depression with impoverishment delusions in an exhausted caregiving husband concludes that death is mercy for both; the killing is immediately followed by the suicide — suicidology before criminology.",
      "The assessment question both variants impose: 'who does he intend to die?' — asked alongside, and before, 'whom does he threaten?'",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the planning-and-inhibition seat)", role: "Where the grievance agenda's rigid, studied preparation runs — the autogenic massacre implicating intact-but-hijacked executive machinery rather than broken impulse control — and where psychosis degrades the self-monitoring that keeps delusion and action apart.", grade: "proposed" },
    { id: "amygdala", name: "Amygdala (the threat-appraisal hub)", role: "The persecutory reading of the world — shared by the psychotic perpetrator's delusions and the autogenic perpetrator's grievance; the threat appraisal that converts isolation into enemy terrain.", grade: "supported" },
    { id: "superior-temporal-cortex", name: "Superior temporal cortex (the voice-and-passivity territory)", role: "The auditory-verbal hallucination and passivity phenomenology of the schizophrenia-perpetrated homicide — the 'something made me do it' of the first case's night-time disturbance.", grade: "supported" },
    { id: "dissociation-circuit", name: "The dissociation circuit (prefrontal-amygdala decoupling)", role: "The neonaticide mother's peritraumatic switch: terror and shame decoupling the experience from conscious registration — the delivery later unreachable to memory, the act 'not planned' in any ordinary sense.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The salience engine of psychosis — aberrant salience assignment loading the persecutory and passivity phenomena that drive the rare family-victim killing during unmanaged relapse.", grade: "established", drugConnection: "The antipsychotic maintenance tier that keeps the 1-in-20 rare — no KYP drug lesson; the Schizophrenia course's territory, referenced here, never duplicated." },
    { name: "Noradrenaline", symbol: "NA", role: "The peritraumatic stress response of the dissociated delivery — the acute alarm chemistry that makes the neonaticide night unreachable to memory, and the acute stress reaction that follows discovery.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The affective chemistry of the two depressive faces — the late-life depression beneath the dyadic death, and the untreated affective disorder in the mothers of later infant homicide.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "false-positive-pathway",
      name: "The false-positive pathway (why prediction fails and what replaces it)",
      steps: [
        { label: "The rare event", detail: "Homicide by a patient: a handful against a national patient population — the base rate that inverts every intuition" },
        { label: "The common risk factors", detail: "Substance misuse and past violence: prevalent in the patient population, weakly specific to the event" },
        { label: "The instrument drowns", detail: "Any screening tool built from those factors flags thousands for each homicide — the flags true, the event almost never" },
        { label: "The final contact", detail: "A third of perpetrators seen in the preceding week; immediate risk judged low or absent in 88% of those contacts" },
        { label: "The redirect", detail: "28% predictable, 65% preventable — effort moved from prediction to the care factors that reduce risk across the whole flagged population" },
      ],
      clinicalManifestation: "The clinician who could not have seen it coming — and was not negligent for failing to — could still have kept the care dense enough to matter: compliance support, family contact, supervision, communication, training.",
      grade: "supported",
    },
    {
      id: "autogenic-pathway",
      name: "The autogenic pathway (grievance to massacre to intended death)",
      steps: [
        { label: "The assembling profile", detail: "Social isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity, persecutory beliefs" },
        { label: "The grievance agenda", detail: "A self-generated mission of grievance and entitlement — the world that wronged him and the score to be settled" },
        { label: "The media modelling", detail: "The lone-warrior self-image; studied knowledge of prior massacres — the script borrowed from the coverage of those who went before" },
        { label: "The massacre as overture", detail: "The killing of the crowd as the opening movement of the perpetrator's own intended death — murder-suicide, the crowd first" },
      ],
      clinicalManifestation: "The accumulating-grievance presentation with leakage — explicit announcements, plans, studied references to prior massacres — read as suicidology before criminology: the question 'who does he intend to die?'.",
      grade: "proposed",
    },
    {
      id: "dyadic-pathway",
      name: "The dyadic pathway (caregiving depression to the double death)",
      steps: [
        { label: "The exhausted caregiver", detail: "The husband of the ill or demented wife — the caregiving role straining quietly beneath the 'close, caring' exterior" },
        { label: "The depressive turn", detail: "Late-life depression with impoverishment and ruin delusions — the conviction that the couple's means and future are destroyed" },
        { label: "The mercy conclusion", detail: "Death perceived as mercy for both — the delusion's arithmetic applied to the wife as much as to himself" },
        { label: "The double death", detail: "The killing immediately followed by the offender's suicide — the dyadic death the geriatric clinic is positioned to intercept" },
      ],
      clinicalManifestation: "The quiet elderly couple found as a double death — and, weeks earlier, the missed consultation where nobody asked the caregiving spouse how HE was.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "disengagement-window", time: "The months before", title: "The disengagement window", description: "The mother dies, the clinic letters stop, the medication runs out — the period in which half of the recent-contact schizophrenia perpetrators sit non-compliant or disengaged; the window that care, not clairvoyance, is positioned to close.", phase: "onset" },
    { id: "final-week", time: "The final week", title: "The contact that read 'no risk'", description: "A third of patient-homicide perpetrators are seen in the week before the offence — and immediate risk is judged low or absent in 88% of those contacts; the false-positive mathematics displayed at the bedside.", phase: "peak" },
    { id: "the-offence", time: "The night", title: "The family victim", description: "The night-time disturbance, the passivity delusions, the brother dead — the typical shape of the rare patient homicide: family members the victims, strangers in fewer than 1 in 6.", phase: "peak" },
    { id: "the-inquiry", time: "The months after", title: "The Inquiry's audit", description: "Every homicide from the Homicide Index, the district questionnaires, the case notes — and the finding that repeats: high proportions of previous violence, worryingly undocumented; only a third with previous detentions.", phase: "duration" },
    { id: "the-verdict", time: "The courtroom", title: "The disposal", description: "Around half of convictions murder, just under half manslaughter; 1 in 25 diminished responsibility overall, one in four among schizophrenia perpetrators — and one-third of them imprisoned: the dispositional scandal.", phase: "duration" },
    { id: "the-remedy", time: "The review", title: "Prevention, not prediction", description: "The enhanced-CPA gap named, the five protective factors listed — compliance, family contact, supervision, communication, training — the 65% that was never about seeing it coming.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "England and Wales: 500–600 homicides a year; perpetrators and victims predominantly young males; sharp instrument the commonest method, shooting under 1 in 10; around half of convictions murder, just under half manslaughter; 1 in 25 receives diminished responsibility. Mental-disorder proportions: 8–70% 'abnormality' rates across jurisdictions on definitional variation (New Zealand 8.7% 'abnormal', Canada 35% mentally unwell); about 1 in 10 perpetrators in recent service contact — usually with the general adult service, not a specialist one, with alcohol/drug, child-adolescent and forensic services carrying the rest — and 1 in 5 lifetime (Australia: 1 in 3 lifetime). Schizophrenia: about 1 in 20 (international range 7–12.6%); victims family members, strangers under a sixth. Infant homicide: about 4.5 per 100,000 live births, constant over time; 1 in 25 of the Inquiry's 2,665 perpetrators (1996–2001) killed infants — half fathers, around a third mothers; a quarter of the perpetrators symptomatic at the time, a third with lifetime disorder. Female perpetrators: 1 in 10 (England and Wales and Finland alike); stranger homicide by women rare. Elderly perpetrators: fewer than 1 in 50; over-65 male:female ratio 19:1, the highest of any age group. Longitudinally, homicide and stranger-homicide both rose 1973–2003 — but neither rose among people with mental illness; the significant changes were upward trends in drug and alcohol misuse (cocaine and crack prominent) and a significant decrease in diminished-responsibility verdicts, with hospital-order rates unchanged.",
    indianPrevalence: "India's NCRB homicide data track a different volume — tens of thousands annually — with sharp instruments similarly dominant; the Indian 'madness-and-murder' media narrative tracks the Western one. No equivalent Confidential Inquiry exists, which makes the prevention-not-prediction lesson the note's most transferable content: the district-level audit as the feasible shadow.",
    lifetimeRisk: "Perpetrator lifetime contact with mental health services 1 in 5 against 1 in 10 recent; Australia 1 in 3 lifetime; the cross-jurisdiction 'abnormality' range 8–70% a definitional artefact rather than a real difference — the figure moves with the definition, not the pathology.",
    genderRatio: "Perpetrators and victims predominantly young males — especially in stranger homicides, where lifetime mental illness, symptoms at the offence and service contact are all LESS likely. Women: 1 in 10 of perpetrators, killing their children and partners, rarely strangers. The over-65 male:female ratio of 19:1 is the highest of any age group.",
    ageOfOnset: "Homicide risk peaks in young adulthood for perpetrators — with the one great exception at the other end of the age axis: the first year of life carries the highest homicide victim risk of any age, about 4.5 per 100,000 live births.",
    indianNotes: "The absence of a national confidential case series is the structural gap; the shadow audit (homicides with any service contact in the preceding year, documented violence histories, last-contact mental state) is the feasible teaching-hospital exercise — and the forensic-infrastructure gap means mentally ill perpetrators sit in prisons without treatment, the one-third-imprisoned figure likely worse in India.",
  },
  etiology: [
    { category: "biological", factor: "The schizophrenia-perpetrated subgroup", details: "A well-documented increased violence risk (UK, New Zealand, Denmark; Wallace: 5× serious offending in male schizophrenia). Of recent-contact perpetrators: one-fifth carry secondary diagnoses (personality disorder, substance dependence); nearly half have histories of violence when psychotic; around a quarter were psychotic at the homicide. Of those never in contact: the vast majority psychotic at the offence. Comorbidity is the multiplier — the ECA/MacArthur ladder: 18% violence in major mental disorder, 31% with comorbid substance use, 43% with personality disorder plus substance use." },
    { category: "biological", factor: "The infant-homicide paths", details: "The mother's mental state (affective disorder, symptoms at the offence, but few under mental health services at the time); mothers killing within a month of birth — the postpartum conditions, the infanticide law's territory; and males with previous violent convictions killing later in infancy — the paternal path." },
    { category: "psychological", factor: "The autogenic massacre profile", details: "Social isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity, persecutory beliefs — a personal grievance agenda culminating in intended death, with media-related modelling (the lone-warrior self-image, studied knowledge of prior massacres) as part of the mechanism." },
    { category: "psychological", factor: "The elderly spouse-killing configuration", details: "Depression with impoverishment and ruin delusions; caregiving roles with the victim's physical or psychiatric disability; the killing typically followed by the offender's suicide — the Darby-and-Joan syndrome." },
    { category: "social", factor: "The substance-and-stranger layer", details: "Stranger homicide is the least mental-disorder-linked pattern: young males, disproportionately substance-involved. Serial homicide: male-dominated, strangulation-personal methods, sexual motivation, unknown female victims — psychopathy rather than severe mental illness, against the mass murderer's substantial severe (often psychotic) illness." },
  ],
  symptomClusters: [
    {
      category: "1. The schizophrenia-perpetrated presentation",
      symptoms: ["Family-member victims — the people closest to the unmanaged psychosis; strangers in fewer than 1 in 6", "Around a quarter psychotic at the time of the offence; of those never in contact, the vast majority psychotic at it", "Half in recent contact — of whom half were non-compliant or disengaged at the offence, and relatively few were receiving psychological interventions", "One in four receives diminished responsibility (against 1 in 25 of all perpetrators); one-third receive prison disposal — the dispositional scandal"],
    },
    {
      category: "2. The infant-homicide spectrum",
      symptoms: ["Neonaticide: concealed pregnancy, delivery in isolation, dissociative symptoms, the newborn hidden or discarded — panic and shame, not depression", "Later infant homicide: fathers with violence histories killing later in infancy; mothers with untreated affective illness — the infanticide-charge population", "Perpetrator psychopathology: a quarter symptomatic at the time; a third with lifetime disorder; few mothers under services at the time"],
    },
    {
      category: "3. The mass-murder prodrome",
      symptoms: ["Accumulating grievance and social isolation — the profile assembling over years, not days", "Planning, preparation and sometimes explicit announcements — the leakage phenomenon the media-modelling discussion implies", "Studied knowledge of prior massacres; the lone-warrior self-image borrowed from the coverage"],
    },
    {
      category: "4. The elderly dyadic death",
      symptoms: ["The 'close, caring' couple — the killing reported as unexpected by everyone who knew them", "Depression and caregiving strain hidden beneath the quiet exterior; the wife ill or demented, the husband exhausted", "Impoverishment and ruin delusions; the killing immediately followed by the offender's suicide; hospital the preferred disposal"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The Inquiry's method",
      code: "The consecutive national case series",
      criteria: [
        "Every homicide from the Home Office Homicide Index — the complete national denominator, not a media-selected sample.",
        "Psychiatric trial reports where available; antecedent offence data assembled case by case.",
        "Questionnaires to the mental health services in each perpetrator's residential AND adjacent districts — the district-contact search that catches the patient who moved.",
        "Clinical detail from the responsible team: diagnosis, contact history, compliance, mental state at the last contact, the care actually delivered.",
      ],
      duration: "A standing national surveillance method (the 1996–2001 sample: 2,665 perpetrators) — the model any local audit imitates.",
      indianNote: "The Indian shadow version is feasible at any teaching hospital: enumerate the district's homicides with any service contact in the preceding year; audit the documented violence histories; reconstruct the last-contact mental state. The systems findings arrive unbidden — undocumented histories, lost follow-up, absent family engagement.",
    },
    {
      system: "What the case notes show",
      code: "The clinical audit trail",
      criteria: [
        "High proportions of previous violence — worryingly undocumented in a number of cases; the public inquiries found the same.",
        "Only a third with previous Mental Health Act detentions; a small group previously on restriction orders for violent offences.",
        "The audit lesson for any service: the violence history that is not written down does not exist for the next clinician.",
        "The balanced-view discipline applied wherever the association is discussed: less than 10% of violent crime attributable to schizophrenia; 99.97% of people with schizophrenia committing no serious violent offence in any given year.",
      ],
      duration: "Retrospective — the audit runs after the event; its value is for the next patient, never the last.",
      indianNote: "The documentation failure is the most transferable finding: an Indian case-note audit needs no new law, no new instrument — a clerk, a template and an afternoon.",
    },
  ],
  severityScales: [
    {
      name: "The multiple-homicide taxonomy",
      fullName: "Mass versus spree versus serial (the cooling-off criterion)",
      measures: "The classification of multiple homicide by episode structure — location, time and the cooling-off period.",
      ranges: [],
      indianNote: "The autogenic-massacre threat is global: Indian school and workplace incidents arrive with the same media-modelling dynamics — the prevention insight (grievance, isolation, leakage) belongs in school counsellor training, not only forensic services.",
    },
    {
      name: "The preventability audit",
      fullName: "The Inquiry's clinician-judgement factor list",
      measures: "Which care-system factors the treating clinicians judged protective — the audit's own scoring of what would have made the difference.",
      ranges: [],
      indianNote: "The five protective factors — compliance, family contact, supervision, communication, training — are the district shadow audit's checklist: each one a staffing and systems question, none a prediction question.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Neonaticide versus postpartum-illness killing versus later paternal infant homicide", distinguishingFeatures: "Neonaticide: the young, usually unmarried mother, dissociating through a concealed solitary delivery, panic and shame driving concealment. Postpartum-illness territory: mothers with affective disorder killing within a month of birth — the infanticide provision's ground. Later infancy: fathers with previous violent convictions.", keyDifferentiator: "The perpetrator's relationship to the delivery and the infant's age — three distinct entities with three distinct prevention architectures, never one syndrome." },
    { condition: "Mass versus spree versus serial murder", distinguishingFeatures: "Mass: a single episode at a single location — firearms typical, substantial severe (often psychotic) illness. Spree: over time across separate locations with NO cooling-off. Serial: over time, separate locations, WITH cooling-off periods — personal methods (strangulation), sexual motivation, unknown female victims, psychopathy rather than severe mental illness.", keyDifferentiator: "The cooling-off criterion — the one structural feature that separates the serial pattern from both others; motivation criteria remain premature." },
    { condition: "The autogenic massacre versus politically motivated violence", distinguishingFeatures: "The autogenic massacre is self-generated: a personal grievance agenda ending in intended self-death, with media modelling contributing — not a cause served by a survivor. Political violence serves an organisation's objective and usually intends the actor's survival or escape.", keyDifferentiator: "The intended death — 'who does he intend to die?' — and the negotiation strategies each implies: hostage-survival frameworks miss the autogenic point entirely." },
    { condition: "The elderly dyadic death versus ordinary conjugal violence or predatory crime", distinguishingFeatures: "The Darby-and-Joan pattern: a close, caregiving couple; the husband depressed with impoverishment delusions; the wife ill or demented; the killing immediately followed by his suicide — mercy framed, not rage framed.", keyDifferentiator: "The depression and the double intent — the dyadic death is suicidology with a victim, found at the geriatric clinic that asks the caregiving spouse how he is." },
    { condition: "Schizophrenia-perpetrated homicide versus substance-driven stranger homicide", distinguishingFeatures: "The schizophrenia-perpetrated killing: family victims, psychosis at the offence in a quarter, half in recent contact with half of those disengaged. The stranger homicide: young males, least mental-disorder-linked, disproportionately substance-involved — lifetime mental illness and service contact LESS likely than in the general run.", keyDifferentiator: "The victim relationship and the contact history — the family-victim pattern is the clinical signature; the stranger pattern is the substance signature." },
    { condition: "The media's 'madman killer' versus the epidemiology", distinguishingFeatures: "The headline implies prevalence; the data show rarity: 1 in 10 recent contact, 1 in 20 schizophrenia, family not stranger victims — and the balanced view: less than 10% of violent crime attributable; 99.97% of people with schizophrenia no serious violence in a year.", keyDifferentiator: "The denominators — the public question is answered with population arithmetic, not anecdotes; the attributable fraction and the annual non-violence rate are the numbers to quote." },
  ],
  management: [
    { category: "lifestyle", name: "Prevention, not prediction (the redirect itself)", description: "The Inquiry's central finding as a management principle: 28% of patient homicides were judged predictable, 65% preventable. The effort moves from forecasting the rare event to densifying the ordinary care — because the false-positive mathematics guarantees that prediction, tried at scale, fails.", whenToUse: "As the standing philosophy of every service that carries psychotic patients — the answer to every 'could we have seen it coming?' inquiry.", indianContext: "The philosophy transfers intact: with no Indian Confidential Inquiry, the district-level shadow audit delivers the same lesson without the national machinery." },
    { category: "lifestyle", name: "Close the enhanced-CPA gap", description: "In the 1999–2003 sample, nearly three-quarters of recent-contact perpetrators were NOT on enhanced Care Programme Approach — including substantial proportions of high-risk patients (schizophrenia, personality disorder, MHA detention history, previous violence); even among those on it, significant numbers were non-compliant or disengaged at the offence. Even recognised risk is not matched with intensive care — the system's central remediable failure.", whenToUse: "Whenever a patient meeting enhanced-contact criteria sits on ordinary follow-up: the gap between recognised risk and delivered intensity is the finding, and the fix.", indianContext: "The Indian equivalent question: which of the district's disengaging high-risk patients actually has a named worker, a family contact, a review date — the audit answers in an afternoon." },
    { category: "lifestyle", name: "The five protective factors", description: "The preventability factor list (built from the clinicians' own judgements, in an analysis where one case in five was judged potentially preventable): homicides more likely preventable with schizophrenia diagnosis, multiple previous admissions and MHA detention; LESS likely — protective — with better patient compliance, closer family contact, closer supervision, improved staff communication and better staff training.", whenToUse: "As the checklist that operationalises the 65%: each factor a system's behaviour, none a prediction.", indianContext: "Compliance support and family contact are the two factors the Indian system can scale fastest — the family is already the delivery channel; it needs to be the information channel too." },
    { category: "lifestyle", name: "For the schizophrenia-perpetrated subgroup specifically", description: "Treat the psychosis; treat the comorbidity — substance misuse above all (the multiplier ladder); maintain contact through the disengagement periods rather than closing the episode; involve the family; and document the violence history. One-third of schizophrenia perpetrators receiving prison disposal remains the dispositional scandal the chapter quietly flags.", whenToUse: "Every relapsing, disengaging, substance-using patient with psychosis — the rare homicide's natural history written in advance.", indianContext: "The prison-disposal gap Indian-style: mentally ill homicide perpetrators in Indian prisons without treatment — the forensic-infrastructure gap the one-third figure likely understates." },
    { category: "lifestyle", name: "For infant-homicide prevention", description: "Perinatal mental health detection — the mothers were not under services at the time; postpartum follow-up beyond the obstetric check; and child-protection awareness of paternal violence histories for the later-infancy killings.", whenToUse: "At every antenatal booking, every postnatal check, every child-protection review.", indianContext: "The postnatal check is obstetric only in much of India — the psychiatric questions (mood, bonding, intrusive thoughts, the family's stress) are nobody's unless someone asks them." },
    { category: "lifestyle", name: "The balanced-view discipline", description: "Present schizophrenia's attributable fraction — less than 10% of violent crime — and the annual non-violence rate — 99.97% — wherever the association is discussed: the chapter's explicit anti-stigma instruction, and the clinician's public duty whenever 'madman kills' headlines dominate the rare-event coverage.", whenToUse: "Every teaching session, every press interaction, every family discussion where the association is raised.", indianContext: "In India's media environment the 99.97% number is the stigma antidote — it belongs in every public statement the profession makes about violence and mental illness." },
  ],
  safety: {
    redFlags: [
      "Leakage: explicit announcements, plans or studied references to prior massacres from an isolated, grievance-accumulating young man — the autogenic pathway's early warning; act on it, never file it",
      "Disengagement after a loss: the patient with schizophrenia who stops attending after a caregiver's death — bereavement is a service-escalation trigger, not an observation",
      "The concealed pregnancy: any young woman presenting with unexplained bleeding or abdominal pain and a denied possible pregnancy — ask directly, and alone",
      "The exhausted caregiving spouse with 'no way out' or 'she would be better off' talk — the dyadic-death prodrome; ask about his own depression, and about any mercy framing, directly",
      "The 'guarded but settled' closure — a contact that documents no risk while the violence history sits unrecorded in a police station file: the 88% lesson in one phrase",
      "Non-compliance plus substances plus psychosis in one patient — the multiplier configuration (18% to 31% to 43%) that concentrates what little risk exists",
    ],
    urgentGuidance:
      "The order of operations: (1) treat every leakage or threat statement as the autogenic pathway's early warning — the assessment question is 'who does he intend to die?', and escalation runs to the forensic and police interface with the school or workplace warned where the threat lives; (2) treat caregiver bereavement in psychosis as an automatic service-escalation event — assertive re-contact, not a letter; (3) ask the concealed-pregnancy question directly and alone whenever the presentation allows it — then engage obstetrics, mental health and social work together; (4) ask the caregiving spouse how HE is — the depression screen and the mercy-framing question at the geriatric clinic that intercepts the dyadic death; (5) document the violence history at every contact — the police complaint that never reaches the notes fails the next clinician; (6) hold the balanced view in public: less than 10% attributable, 99.97% non-violent per year — the numbers that keep the fear from doing the stigma's work.",
  },
  drugLinks: [],
  contentGaps: [
    "No pharmacotherapy owns this topic: the note's management tier is care-system architecture (enhanced CPA, compliance support, family contact, supervision, communication, training) — the treatment taught here is the service, not the tablet.",
    "The antipsychotic maintenance that keeps the rare schizophrenia-perpetrated homicide rarer has no KYP drug lesson (the note names risperidone only incidentally, in its first case) — the psychosis-treatment tier belongs to the Schizophrenia course; taught here as prevention, route never invented.",
    "The perinatal mental-health tier behind the infanticide provision (postpartum psychosis and affective disorder within a month of birth) has no KYP course — the perinatal-detection discipline is taught here.",
    "The acute-stress and depressive-reaction treatment of the neonaticide mother is described by the note without a single drug name — no antidepressant is forced into drugLinks on the note's behalf; the symptomatic tier is referenced, never invented.",
  ],
  patientGuide: {
    whatIsIt:
      "This topic answers a question the news gets wrong in both directions: how often does mental illness actually lead to killing another person? Rarely. In England and Wales, with 500–600 homicides a year, only about 1 in 10 perpetrators had recent contact with mental health services, about 1 in 20 had schizophrenia, and the people most at risk from a mentally ill relative are that relative's own family — not strangers. And in any given year, 99.97% of people with schizophrenia commit no serious violent offence at all. The rare killing that does happen is usually a family tragedy of illness left untreated — someone unwell, off treatment, out of contact — which is why the national study behind these numbers concluded that such deaths are hard to predict but largely preventable (65%) through better care.",
    whatCausesIt:
      "The rare patient homicide is almost never illness alone: it is untreated psychosis plus disengagement plus, very often, alcohol or drugs — the combination multiplies what little risk the illness carries on its own. Two special patterns have their own causes: the mass shooting that ends in the killer's own death is driven by years of isolation, grievance and a borrowed 'warrior' script from the media coverage of earlier massacres; and the very old husband who kills his ill wife and then himself is usually depressed, exhausted from caring for her, and falsely convinced the couple is ruined.",
    symptoms:
      "In a relative with psychosis, the warning signs are about treatment, not personality: stopped medication, missed appointments, worsening fears and beliefs (especially feeling controlled or persecuted), drinking or drug use returning, and — after a death in the family — shutting down. In a lonely young man, warning signs include obsession with past massacres, talk of a mission or a grudge, and hints or statements about a plan — these hints are a real warning sign and must be reported. In an elderly husband caring for a sick wife, watch for depression, hopeless talk about money, or the idea that she would be 'better off'. In a young woman who may be hiding a pregnancy, unexplained pain or bleeding deserves a direct, private question.",
    treatment:
      "The treatment is the care itself, kept dense: regular appointments someone is responsible for keeping; medication with support to stay on it; the family involved as partners, not visitors; the violence history written down so the next professional knows it; and staff who talk to each other. When the worst happens despite everything, the study's lessons are about the system, not about blaming the family or the doctor for not predicting the unpredictable — 88% of final appointments before such deaths showed no sign of immediate risk.",
    selfHelp: [
      "If your relative with psychosis stops attending after a bereavement or a family change, contact the care team that week — loss is a known trigger for relapse, and relapse is the risk.",
      "Keep a written record of any threatening or frightening incidents — dates, what happened, whether police were involved — and bring it to appointments; what is not written down does not exist for the next professional.",
      "Say the worrying things out loud: to the team, to the school counsellor, to the family doctor — hints about a plan or a mission are a warning sign to report, not a confidence to keep.",
      "Ask the caregiving husband how HE is — the exhausted older carer is the person nobody screens, and his depression is the treatable engine of the rare double death.",
      "Carry the honest numbers into every conversation about 'mad killers': about 1 in 20, family members the usual victims, 99.97% no serious violence in a year — the fear spreads faster than the facts only when the facts stay home.",
      "Use the channels: the district mental health programme, the treating team's helpline, Tele-MANAS 14416 — families who stay linked to services are doing the single most protective thing this evidence knows.",
    ],
    whenToSeekHelp: [
      "Any statement about a plan, a massacre, a mission or 'going out in a blaze' from an isolated, aggrieved person — report immediately to police or the care team; this is the pathway's early warning",
      "A relative with psychosis who has stopped medication AND is using alcohol or drugs AND sounds controlled or persecuted — arrange review the same week",
      "An older caregiving husband with hopeless talk, money fears or 'she would be better off' framing — bring him (not only her) to the doctor",
      "A young woman with possible concealed pregnancy and unexplained bleeding — direct, private questioning and medical care now, without interrogation",
      "Your own exhaustion as a family carer — the protective factors run through you; ask for your own support before the system needs to ask for you",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — for families worried about a relative's mental state, their own carer exhaustion, or a crisis of disengagement",
      "The district mental health programme and district hospital psychiatric tier — the follow-up channel for relapse and bereavement escalation",
      "The school counsellor or college welfare office — the layer positioned to catch grievance, isolation and leakage in young people",
      "The general hospital's geriatric or medicine clinic — the detection point for the depressed caregiving spouse",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No Indian counterpart of the National Confidential Inquiry exists; the note's Indian teaching rests on the IPC/BNS infanticide provision paralleling the English one (the mother's postpartum-balance consideration) and on the transferable method — the district-level shadow audit (homicides with any service contact in the preceding year; documented violence histories; last-contact mental state) as the feasible teaching-hospital exercise that delivers the same systems findings: undocumented histories, lost follow-up, absent family engagement.",
    systemContext: "The perinatal services where the postnatal check is obstetric only — the young mother with concealed pregnancy, neonaticide dynamics and postpartum illness under-detected exactly where she does touch the system. The general-hospital geriatric clinic, the detection point for the depressed caregiving spouse with ruin delusions as India's elderly population grows. And the prisons, the de-facto forensic infrastructure — mentally ill homicide perpetrators held without treatment, the one-third-imprisoned figure likely worse in India.",
    programmeContext: "NCRB homicide statistics supply the volume layer — tens of thousands annually, sharp instruments dominant, the 'madness-and-murder' media narrative tracking the Western one. The DMHP psychiatric tier and district hospital psychiatry are the follow-up channel for the disengagement window; the school counsellor workforce is the positioned layer for grievance, isolation and leakage; the teaching hospital is the shadow audit's natural home.",
    costConsiderations: "The note carries no Indian cost data — and the honest position is that the central remedies are not pharmaceutical: the shadow audit is a records exercise (staff time and questionnaires), the five protective factors are staffing, supervision and communication, and the scarce commodities are follow-up structure and family engagement rather than rupees. The real cost question is the forensic-infrastructure gap — prison treatment capacity for the mentally ill perpetrators the courts have nowhere else to send.",
    culturalConsiderations: "The honour dynamics: neonaticide's social determinants are inaccessible sex education and family-reputation terror — the concealment driven by a calculus the family itself enforces. The media environment: 'madman kills' headlines dominating rare-event coverage, against which the 99.97% number is the profession's antidote and duty. The family as the delivery channel — already carrying the care, needing to be contracted as the information channel too; and the Indian school and workplace violence incidents arriving with the same media-modelling dynamics as anywhere else.",
    patientCounselling: [
      "The public-statement script: 'In any year, 99.97% of people with schizophrenia commit no serious violent offence — the fear is real, the danger is not where the fear is looking.'",
      "The family script for the disengaging relative: 'When he stops coming after a loss, that is not his choice to make alone — contact the team that week; bereavement in this illness is an escalation trigger, not an observation.'",
      "The documentation script: 'Write down every frightening incident — date, what happened, whether police were involved; the next clinician can only act on what the notes say.'",
      "The perinatal script: 'The six-week check must ask the mother's mind, not only the uterus — mood, bonding, intrusive thoughts, and the family's stress around the new baby.'",
      "The caregiving-spouse script: 'Ask the husband how HE is — his depression is the treatable engine of the rare double death, and the clinic is the one place it can be caught.'",
      "The prevention script: 'The question is never why nobody predicted it — prediction failed in 88% of final contacts; the question is whether the care was dense enough: appointments, medication, family, notes.'",
    ],
  },
  decisionPath: {
    title: "The rare-event clinic — what to do when the violence question walks in",
    nodes: [
      {
        id: "start",
        question: "A situation where violence by a person with mental illness is in the frame. First: which pattern?",
        branches: [
          { label: "The disengaging psychosis patient", next: "disengage-path" },
          { label: "The grievance-building isolated young man", next: "autogenic-path" },
          { label: "The possible concealed pregnancy", next: "neonatic-path" },
          { label: "The exhausted caregiving spouse", next: "dyadic-path" },
        ],
      },
      {
        id: "disengage-path",
        question: "The patient with schizophrenia who has stopped attending — the disengagement window the Inquiry found half the recent-contact perpetrators sitting in.",
        branches: [
          { label: "A key caregiver recently lost", next: "bereavement-escalation" },
          { label: "Alcohol or drugs alongside", next: "comorbidity-path" },
          { label: "Never engaged — first presentation", next: "first-contact-path" },
        ],
      },
      {
        id: "bereavement-escalation",
        question: "Bereavement in schizophrenia — the care plan's informal supervisor has died.",
        recommendation: "Escalate, don't observe: assertive re-contact (home visit with a purpose, not a form), medication review, the surviving family contracted as the new supervision channel, and the loss documented as the relapse trigger it is. The care plan that died with the mother must be rebuilt with the people who remain.",
      },
      {
        id: "comorbidity-path",
        question: "Psychosis plus substances plus non-compliance — the multiplier configuration.",
        recommendation: "Treat both, and treat the contact as the treatment: the comorbidity ladder (18% to 31% to 43%) names the arithmetic; the response is assertive outreach through the disengagement period, the family involved, the violence history documented — and enhanced-contact criteria applied rather than admired. Prevention here is cheaper than any prediction, and the 65% is built from exactly this.",
      },
      {
        id: "first-contact-path",
        question: "Never engaged with services — first presentation, already ill.",
        recommendation: "Of those never in contact, the vast majority are psychotic at the offence — treat as the emergency it statistically is: first-episode pathways, assertive engagement, the family identified and involved from day one, and the presentation documented so the next professional inherits the history this one is making.",
      },
      {
        id: "autogenic-path",
        question: "The isolated young man accumulating grievance — the autogenic profile assembling.",
        branches: [
          { label: "Explicit announcements, plans, studied references to massacres", next: "urgent-autogenic" },
          { label: "Grievance and isolation without an announced plan", next: "grievance-path" },
        ],
      },
      {
        id: "urgent-autogenic",
        question: "Leakage — the pathway's early warning, out in the open.",
        recommendation: "Act: the autogenic massacre is murder-suicide — the assessment question is 'who does he intend to die?', and negotiation strategies aimed at survival miss the point. Escalate to the forensic and police interface; warn the school or workplace where the threat lives; document everything said, to whom, and when. This is the one place in the subject where the rare event telegraphs itself.",
      },
      {
        id: "grievance-path",
        question: "The profile without the plan — the years the pathway grows in.",
        recommendation: "The prevention insight belongs here, years before any night: treat the suspiciousness and obsessional traits, work the isolation, and put the grievance on the clinical record — with the school counsellor and the family inside the loop. The media-modelling discussion's implication for practice: take references to prior massacres as clinical data, never as conversation.",
      },
      {
        id: "neonatic-path",
        question: "The young woman with a possible concealed pregnancy — unexplained bleeding, denied possibility, shame doing the talking.",
        recommendation: "Ask directly and alone. If pregnancy is confirmed or recent delivery suspected: medical care now, psychiatric assessment of the mental state at and after the delivery (the dissociation, the amnesia, the absence of planning), the infanticide provision's postpartum balance explained to the legal process, treatment of the acute stress and depressive reaction, family work on the honour dynamics, and contraception counselling with follow-up. The institutional question — where could this young woman have asked for help? — is the real prevention.",
      },
      {
        id: "dyadic-path",
        question: "The exhausted caregiving spouse of the ill or demented wife.",
        recommendation: "Ask how HE is: the depression screen, the money worries (impoverishment and ruin delusions sought directly), and the mercy framing asked about plainly — 'have you ever thought you would both be better off if it were over?'. Treat his depression; build the couple's support so death stops looking like care; and record the assessment. The geriatric clinic is the detection point — this death is intercepted at the carer's own consultation.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Asking 'could the doctor have seen it coming?' as the audit's central question",
      why: "A third of patient-homicide perpetrators were seen in the preceding week, and immediate risk was judged low or absent in 88% of those contacts — the false-positive mathematics guarantees that prediction fails; an audit built on prediction produces blame instead of change.",
      correction: "Reframe to the preventable 65%: what would have made the care denser — compliance support, family contact, supervision, communication, training — and whether the enhanced-contact criteria were applied. Care, not clairvoyance.",
    },
    {
      mistake: "Documenting 'guarded but settled' while the violence history sits in a police file",
      why: "The Inquiry found high proportions of previous violence worryingly undocumented — and the violence history that is not written down does not exist for the next clinician; the phrase that closed the episode became the audit's Exhibit A.",
      correction: "Every contact documents the violence question asked and answered — police complaints, family reports, the threats made years ago — the systemic memory is the cheapest safety instrument this subject owns.",
    },
    {
      mistake: "Equating schizophrenia with dangerousness in teaching or public statements",
      why: "The association is real but small — about 1 in 20 perpetrators; less than 10% of violent crime attributable; 99.97% of people with schizophrenia no serious violence in any given year — and the stigma the equation produces harms more patients than the violence ever does.",
      correction: "The balanced-view discipline: present the attributable fraction and the annual non-violence rate wherever the association is discussed — the chapter's explicit instruction, and the profession's public duty.",
    },
    {
      mistake: "Reading neonaticide as postpartum depression",
      why: "The neonaticide mother is typically young, unmarried and dissociating — panic and shame driving concealment — not a depressed married mother of an older infant; conflating the two produces the wrong law, the wrong treatment and the wrong prevention.",
      correction: "Three entities, three responses: neonaticide (the concealed solitary delivery, the dissociation), the postpartum-illness killings within a month of birth (the infanticide provision's territory), and the later-infancy paternal killings (violence histories, child protection).",
    },
    {
      mistake: "Negotiating with the mass killer as if he intends to survive",
      why: "The autogenic massacre is murder-suicide pursuing a personal agenda — the crowd dies first, his own death is the point; hostage-survival frameworks assume an objective his death defeats.",
      correction: "The assessment question is 'who does he intend to die?' — and the operational response runs to prevention years upstream: grievance, isolation and leakage treated as the pathway's visible stages, not as background noise.",
    },
    {
      mistake: "Closing the episode after a 'no risk' contact",
      why: "The last contact before a third of these homicides documented no immediate risk — the episode closed, the follow-up lapsed, the disengagement window opened in the gap the closure created.",
      correction: "The 'no risk' contact escalates instead: the family contracted, the compliance supported, the next review dated — and the bereavement, the loss, the life event that changed the supervision structure recorded as the trigger it was.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The quartet cold: 500–600 homicides a year in England and Wales; recent service contact 1 in 10 (lifetime 1 in 5); schizophrenia 1 in 20 (international range 7–12.6%); stranger victims fewer than 1 in 6.",
        "Mass, spree and serial murder defined by episode structure: mass = one episode, one location; spree = over time, separate locations, no cooling-off; serial = over time, separate locations, with cooling-off periods — motivation criteria premature.",
        "The neonaticide profile: young, usually unmarried mother, dissociation through a concealed solitary delivery — distinct from postpartum-illness killings of older infants and from paternal later-infancy violence.",
        "The elderly pattern: Darby and Joan — the husband kills his ill wife then himself; depression with impoverishment delusions; 19:1 male ratio (the highest of any age group); hospital disposal preferred.",
        "The Inquiry verdict explained with its arithmetic: 28% predictable, 65% preventable — a third seen in the final week, 88% of those contacts judged low or absent risk.",
      ],
      practical: [
        "The case-note audit exercise: retrieve a discharged patient's notes and find the violence history — reproduce the Inquiry's finding (high proportions of previous violence, worryingly undocumented) at your own desk.",
        "The collateral interview: asking the family of the disengaging patient about the last weeks — who left, who died, who watched — the history the patient cannot give and the notes never held.",
      ],
      longAnswer: [
        "Homicide and mental illness: the epidemiology, the National Confidential Inquiry's findings and the prevention-not-prediction verdict — the evergreen forensic essay.",
        "Infanticide and neonaticide: the law's postpartum balance, the clinical profiles, and the prevention architecture.",
      ],
    },
    neetPg: {
      highYield: [
        "THE QUARTET: 500–600/year; recent contact 1 in 10 (lifetime 1 in 5; Australia 1 in 3 lifetime); schizophrenia 1 in 20 (range 7–12.6%); stranger victims fewer than 1 in 6.",
        "DIMINISHED RESPONSIBILITY: 1 in 25 of all perpetrators; one in four among schizophrenia perpetrators; verdicts declining significantly over time with hospital-order rates unchanged.",
        "INFANT HOMICIDE: the first year of life the highest-risk age; about 4.5 per 100,000 live births; 1 in 25 of the Inquiry's 2,665 perpetrators (1996–2001); fathers half, mothers a third; neonaticide = young + unmarried + dissociation.",
        "THE TAXONOMY: mass (single episode, single location) vs spree (separate locations, no cooling-off) vs serial (separate locations, cooling-off periods); mass murderers carry substantial severe (often psychotic) illness, serial killers psychopathy with personal methods (strangulation) and sexual motivation.",
        "FEMALE PERPETRATORS: 1 in 10; children in a quarter, partners in over a third; suffocation and poisoning overrepresented; community and hospital disposals; stranger homicide by women rare.",
        "ELDERLY PERPETRATORS: fewer than 1 in 50; over-65 male:female ratio 19:1 (the highest of any age group); Darby-and-Joan pattern — depression + impoverishment delusions, killing followed by suicide, hospital disposal preferred.",
        "THE PREVENTION PAIR: 28% predictable, 65% preventable; the five protective factors — better compliance, closer family contact, closer supervision, improved staff communication, better staff training.",
        "THE BALANCED VIEW: less than 10% of violent crime attributable to schizophrenia; 99.97% no serious violence per year; 5× serious offending in male schizophrenia (Wallace); the comorbidity ladder 18% to 31% to 43%.",
        "THE LONGITUDINAL TWIST: homicide and stranger-homicide both rose 1973–2003 — neither rose among people with mental illness; drug and alcohol misuse rose (cocaine/crack prominent); diminished-responsibility verdicts fell.",
      ],
      pyqConcepts: [
        "The 1-in-20 schizophrenia figure with its 7–12.6% international range — the recurring denominator question.",
        "The cooling-off criterion as the mass/serial discriminator — the definitional MCQ.",
        "Family members, not strangers, as the typical victims — the victim-relationship question with its anti-stigma corollary.",
        "Mullen's autogenic massacre — the concept question where 'murder-suicide pursuing a personal agenda' is the answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 29-year-old man with schizophrenia — three admissions in two years, last discharge six months earlier on risperidone — stops attending after his mother's death; a community nurse's home visit finds him 'guarded but settled' and closes the episode; six weeks later he kills his brother in a night-time disturbance driven by passivity delusions, and the audit finds a police complaint from the previous year that never reached the notes. The reasoning: the family victim (the typical pattern); the disengagement window (half of recent-contact perpetrators non-compliant); the 88% lesson (the last contact documented no risk); the documentation failure (the systemic memory); and the enhanced-contact criteria met and not applied — with the management answer built from the five protective factors, not from any prediction instrument.",
        "An 18-year-old unmarried student delivers alone in her hostel bathroom at night in a dissociated haze, conceals the newborn, and presents the next morning with bleeding; the infant is found dead. The reasoning: concealed pregnancy throughout, labour pains misattributed, amnesia for parts of the delivery, no planning of the killing, overwhelming shame and fear of expulsion from education and family honour — the neonaticide formulation (its own entity: dissociation, panic, shame — not depression), the legal interface (the infanticide provision's postpartum balance), and the prevention answer located years upstream: the school, the hostel, the postnatal check that asks the mind and not only the uterus.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Schizophrenia in about 1 in 20 perpetrators; recent service contact 1 in 10.",
        "Victims of the mentally ill perpetrator: family members — strangers in fewer than 1 in 6.",
        "Neonaticide: young, unmarried, dissociation at the time.",
        "28% predictable, 65% preventable — prevention, not prediction.",
        "99.97% — the annual serious-violence non-rate in schizophrenia.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The documentation audit is the cheapest intervention this subject owns — the violence history not written down does not exist for the next clinician; make 'asked and recorded' the audit standard at every contact.",
        "The enhanced-CPA gap is the central remediable failure: three-quarters of recent-contact perpetrators were not on enhanced care — even recognised risk unmatched with intensive care is the finding your service can fix without predicting anything.",
        "Bereavement in schizophrenia is a service-escalation trigger — the care plan that dies with its informal supervisor must be rebuilt with the survivors, proactively, the week the loss is known.",
        "The balanced-view discipline delivered wherever the association is discussed — less than 10% attributable, 99.97% non-violent per year — is clinical work, not public relations: it protects the therapeutic alliance of every patient the headline frightens.",
        "The district shadow audit — enumerate the local homicides with any service contact in the preceding year, audit the documented violence histories, reconstruct the last-contact mental state — is the feasible teaching-hospital exercise that delivers the national inquiry's systems findings at Indian scale.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The week before",
      presentation: "Three admissions in two years, a mother's death, a home visit that read 'guarded but settled' — and six weeks later, a brother dead in a night-time disturbance driven by passivity delusions.",
      initialPresentation: "A 29-year-old man with schizophrenia, followed by a district community mental health team after three admissions in two years and a discharge six months earlier on risperidone, stopped attending clinic after his mother died. A community nurse's home visit documented him 'guarded but settled' with no immediate risk, and the episode was closed. Six weeks later, during a night-time disturbance driven by passivity delusions, he killed his brother — the family member he lived with.",
      history: "Schizophrenia with three admissions in two years; risperidone maintenance until the mother's death; non-compliant and disengaged through the bereavement period — the mother having been the de facto supervisor of the medication and the appointments. A police complaint from the previous year (a disturbance at home) existed in the police records and never entered the psychiatric notes. No substance misuse documented; no psychological interventions had been in place.",
      examination: "At the final home visit: guarded but settled, no immediate risk documented — the contact that joins the 88%. At forensic assessment after the offence: psychotic, with passivity delusions describing the night — the sense that his actions were not his own. The audit afterwards: the violence history (the police complaint) absent from every set of notes it should have been in; the enhanced-contact criteria met on every criterion the Inquiry lists (schizophrenia, previous admissions, previous violence, the lost caregiver) and not applied.",
      diagnosis: "A patient homicide in the typical pattern: schizophrenia relapsed through caregiver bereavement, non-compliance and disengagement; a family victim; the system failures being the closed 'no-risk' episode, the undocumented violence history, and the unapplied enhanced-contact criteria.",
      management: "The Inquiry-style response: forensic psychiatric assessment of the mental state at the offence; treatment of the psychosis re-established in custody with the antipsychotic tier resumed; the surviving family engaged as partners in the serious-incident review rather than spectators to it; the documentation failure converted into the service's audit standard; and the systems remedy written from the five protective factors — compliance support, family contact, supervision, communication, training — none of which required a prediction.",
      outcome: "The audit, more than the courtroom, carried the teaching: the care plan had died with the mother; the bereavement had been recorded as an observation where it should have triggered an escalation; the undocumented police complaint had failed the next clinician; and the enhanced-contact criteria had been met and not applied. His psychosis was treated with the family involved in the review; the brother's death remained the statistic this course exists to make rarer — preventable by care that was available all along, and cheaper than any prediction.",
      teachingPoints: [
        "Family members, not strangers, are the typical victims — the people closest to the unmanaged psychosis bear its risk.",
        "The disengagement window IS the risk window — half of recent-contact perpetrators were non-compliant or disengaged at the offence.",
        "Documentation is the systemic memory: the violence history not written down does not exist for the next clinician.",
        "Bereavement in schizophrenia is a service-escalation trigger, not an observation — the informal supervisor's death rebuilds the whole care plan.",
        "Prevention (compliance support, family linkage, supervision) was available, and cheaper than any prediction — the 65% in one case.",
      ],
    },
    {
      title: "The young mother who hid everything",
      presentation: "An 18-year-old unmarried student delivers alone in her hostel bathroom at night, in a dissociated haze, conceals the newborn — and walks into the casualty the next morning with unexplained bleeding.",
      initialPresentation: "An 18-year-old unmarried college student, resident in a hostel, delivered alone in the hostel bathroom at night while in a dissociated haze, concealed the newborn, and presented the next morning with bleeding. The infant was found dead. Assessment established: pregnancy concealed throughout, labour pains misattributed, amnesia for parts of the delivery, no planning of the killing, and overwhelming shame and fear of expulsion from education and family honour.",
      history: "No documented psychiatric history before the night; the pregnancy concealed from family, hostel and peers alike — with no channel through which the question could have been asked or answered. The social background doing the aetiological work: inaccessible sex education, family-reputation terror, and an institutional environment (hostel, college) with no pastoral route for a pregnant student.",
      examination: "Perinatal findings confirming a recent delivery; the mental state after discovery: an acute stress reaction with dissociative recall gaps for parts of the delivery itself; no evidence of planning; the shame and the fear of expulsion the dominant affect — panic and shame rather than depression, the neonaticide signature.",
      diagnosis: "Neonaticide — the classic young-unmarried-mother-with-dissociation profile, against a background of concealed pregnancy, inaccessible sex education and family-reputation terror; distinct from postpartum-illness killings of older infants and from later paternal infant homicide.",
      management: "Forensic psychiatric assessment of the mental state at the offence (the dissociation, the amnesia, the absence of planning); the legal interface on the infanticide provision (the mother's postpartum balance); treatment of the acute stress and depressive reaction; family work on the honour dynamics rather than around them; contraceptive counselling with follow-up — and the institutional question asked of the hostel and the college: where could this young woman have asked for help?",
      outcome: "The formulation stood and guided everything that followed: dissociation at the time, no planning, the social determinants doing the aetiological work — the death decided years before the night, in the silence around adolescent sexuality. The mental health follow-up continued alongside the legal process, the family work addressed the reputation terror the next daughter would otherwise inherit, and the hostel and college reviewed the pastoral channels — the prevention this case teaches located upstream of the bathroom door, in the school's and the health system's job description.",
      teachingPoints: [
        "Dissociation at the time is the neonaticide signature — panic and shame, not depression; ask about the delivery itself, not only the aftermath.",
        "The profile's social determinants (inaccessible sex education, family-reputation terror) are the treatable pathology — the concealment was a calculus the family and institutions enforced.",
        "Prevention is the school's and the health system's job, years before the night — the perinatal detection the note places at the centre of infant-homicide prevention.",
        "Neonaticide is its own entity — distinct from postpartum-illness killings within a month of birth and from paternal violence later in infancy; the distinction changes the law, the treatment and the prevention.",
      ],
    },
  ],
  clinicalPearls: [
    "The quartet: 500–600 a year; recent contact 1 in 10; schizophrenia 1 in 20; stranger victims fewer than 1 in 6 — the four numbers that defuse the headline.",
    "The typical homicide is a young man with a knife and alcohol, not a patient — the mentally ill killer is the rare variant, and his victims are mostly his own family.",
    "28% predictable, 65% preventable — the Inquiry's verdict: better care, not better clairvoyance.",
    "A third of perpetrators were seen in the week before the offence, with immediate risk judged low or absent in 88% of those contacts — prediction defeated at the bedside, in the data.",
    "99.97% of people with schizophrenia commit no serious violent offence in any given year; less than 10% of violent crime is attributable — the destigmatising arithmetic for every public statement.",
    "The first year of life carries the highest homicide risk of any age — about 4.5 per 100,000 live births; 1 in 25 of the Inquiry's 2,665 perpetrators killed infants, half of them fathers.",
    "Neonaticide = young + unmarried + dissociation: concealed pregnancy, solitary delivery, the newborn hidden — distinct from postpartum-illness killings and from paternal later-infancy violence.",
    "Mass = one episode, one location; spree = separate locations without cooling-off; serial = separate locations with cooling-off periods — the cooling-off criterion is the discriminator; motivation criteria are premature.",
    "The autogenic massacre is murder-suicide pursuing a personal agenda, with media modelling in the mechanism — the crowd dies first; ask 'who does he intend to die?'.",
    "Female perpetrators are 1 in 10 — children in a quarter, partners in over a third; suffocation and poisoning overrepresented; hospital and community rather than prison.",
    "Elderly homicide is the rarest (fewer than 1 in 50), the most male (19:1) and the most psychiatrically legible: depression with impoverishment delusions, the killing followed by the suicide, hospital disposal preferred.",
    "The violence history not written down does not exist for the next clinician — the audit lesson that transfers to every service on earth.",
    "Homicide and stranger-homicide both rose 1973–2003 — neither rose among people with mental illness; the drug-and-alcohol rise is the real longitudinal change.",
  ],
  highYieldSummary: [
    "The framing: homicide by people with mental illness is the rarest outcome in psychiatry wearing the loudest headlines — 500–600 homicides a year in England and Wales, about 1 in 10 perpetrators with recent service contact (1 in 5 lifetime; Australia 1 in 3), 1 in 20 with schizophrenia (international range 7–12.6%), and family members, not strangers, the victims (strangers fewer than 1 in 6). The National Confidential Inquiry — the consecutive national case series built on the Home Office Homicide Index, trial reports, antecedent data and the district-contact search — turned anecdote into epidemiology and delivered the verdict that reorganises the subject: 28% predictable, 65% preventable.",
    "The general-population pattern: perpetrators and victims predominantly young males; sharp instrument the commonest method (shooting under 1 in 10); around half of convictions murder, just under half manslaughter; 1 in 25 diminished responsibility. The longitudinal finding that answers the deinstitutionalisation question: homicide and stranger-homicide both rose 1973–2003, but neither rose among people with mental illness — the significant changes being upward trends in drug and alcohol misuse (cocaine and crack prominent) and a significant fall in diminished-responsibility verdicts, with hospital-order rates unchanged.",
    "The mechanism, story one — rarity falsifies prediction: patient homicide is vanishingly rare while its risk factors (substance misuse, past violence) are common in the patient population, so any screening instrument flags thousands per event; a third of perpetrators were seen in the final week with 88% of those contacts judged low or absent risk; prediction fails, care succeeds. Story two — murder-suicide in two variants: the autogenic massacre (isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity, persecutory beliefs, a grievance agenda ending in intended self-death, media modelling) and the elderly dyadic death (depression's impoverishment delusions concluding death is mercy for both) — both suicidology before criminology; the question is 'who does he intend to die?'.",
    "The clinical pictures: the schizophrenia-perpetrated homicide (family victims, a quarter psychotic at the offence, half in recent contact of whom half disengaged, one in four receiving diminished responsibility, one-third imprisoned — the dispositional scandal); the infant-homicide spectrum (neonaticide's dissociating young unmarried mothers; the affective-illness mothers within a month of birth; the violent fathers of later infancy); the mass-murder prodrome (accumulating grievance, isolation, planning, leakage); and the elderly dyadic death reported as 'unexpected' in a close, caring couple.",
    "The comorbidity multiplier: the ECA/MacArthur ladder — 18% violence in major mental disorder, 31% with comorbid substance use, 43% with personality disorder plus substance use; of recent-contact perpetrators one-fifth carry secondary diagnoses and nearly half have histories of violence when psychotic; of those never in contact, the vast majority are psychotic at the offence. The lesson: treat the psychosis AND the comorbidity, and hold the contact through the disengagement.",
    "The management tier is the service, not the tablet: the enhanced-CPA scandal (nearly three-quarters of recent-contact perpetrators NOT on enhanced Care Programme Approach in 1999–2003, including high-risk patients — even recognised risk unmatched with intensive care, the central remediable failure); the five protective factors (better patient compliance, closer family contact, closer supervision, improved staff communication, better staff training); the documentation discipline (the violence history not written down does not exist for the next clinician); the infant-homicide prevention tier (perinatal detection, postpartum follow-up, child-protection awareness of paternal violence histories).",
    "The balanced view and the India layer: less than 10% of violent crime attributable to schizophrenia, 99.97% committing no serious violence in any given year — the anti-stigma arithmetic for every public statement, and India's stigma antidote in a 'madman kills' media environment. India's NCRB volumes run to tens of thousands with the same sharp-instrument dominance; no Confidential Inquiry exists — the district-level shadow audit (service contact in the preceding year, documented violence histories, last-contact mental state) is the feasible transfer; the IPC/BNS infanticide provision parallels the English one while the postnatal check remains obstetric only; and the prison-treatment gap carries the dispositional scandal at likely-worse Indian scale.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "hi-quiz-1",
      question: "Of people convicted of homicide in England and Wales, approximately what proportion had been in recent contact with mental health services?",
      options: ["Half", "1 in 10", "1 in 3", "Nearly all"],
      correctIndex: 1,
      explanation: "Around 1 in 10 recent contact (1 in 5 lifetime) — and the responsible service is usually general adult psychiatry, not a specialist one.",
      afterSectionId: "quick-facts",
    },
    {
      id: "hi-quiz-2",
      question: "In the Inquiry's data, victims of homicide by people with schizophrenia were:",
      options: ["Usually strangers", "Most commonly family members, with strangers in fewer than one in six cases", "Always health staff", "Equally distributed across relationships"],
      correctIndex: 1,
      explanation: "The family bears the risk of unmanaged psychosis — the anti-stigma corollary and the home-treatment implication in one finding.",
      afterSectionId: "symptoms",
    },
    {
      id: "hi-quiz-3",
      question: "Mullen's 'autogenic massacre' is best understood as:",
      options: ["Politically motivated terrorism", "Essentially a murder-suicide in pursuit of a highly personal agenda, with media modelling contributing", "A psychotic relapse in every case", "Gang violence"],
      correctIndex: 1,
      explanation: "Self-generated, grievance-driven, isolated and entitled perpetrators intending their own death — with lone-warrior self-images modelled on prior massacres.",
      afterSectionId: "mechanism",
    },
    {
      id: "hi-quiz-4",
      question: "Perpetrators of neonaticide in the Inquiry data were characteristically:",
      options: ["Older married mothers with postpartum depression", "Young, unmarried mothers experiencing dissociation at the time", "Fathers with violence histories", "Psychotic patients"],
      correctIndex: 1,
      explanation: "Neonaticide is its own entity — concealed pregnancy, solitary dissociated delivery, panic and shame — distinct from later infant homicide and postpartum-illness killings.",
      afterSectionId: "timeline",
    },
    {
      id: "hi-quiz-5",
      question: "The National Confidential Inquiry's finding on prediction versus prevention of patient homicides was:",
      options: ["Most were predictable but not preventable", "28% predictable, 65% preventable — preventability conferred by improved mental health care", "All were both predictable and preventable", "None were either"],
      correctIndex: 1,
      explanation: "The central redirect: prediction fails (88% of final contacts judged low or absent risk); care-system improvements succeed — the enhanced-CPA findings operationalise it.",
      afterSectionId: "management",
    },
    {
      id: "hi-quiz-6",
      question: "Among elderly (65+) homicide perpetrators in England and Wales, the male:female ratio and the commonest clinical pattern are:",
      options: ["1:1; psychotic robbery", "19:1 (the highest of any age group); husband kills ill wife then himself, with depression and impoverishment delusions", "1:4; female poisoning sprees", "Equal ratios; drug-related shootings"],
      correctIndex: 1,
      explanation: "The rarest homicide group, the most male-dominated, and the most psychiatrically legible — suicide and mercy framed by depression; hospital disposal preferred.",
      afterSectionId: "high-yield",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the quartet — the four numbers that frame homicide and mental illness — and name the method that produced them.", answer: "THE QUARTET: (1) 500–600 homicides a year in England and Wales; (2) recent mental-health service contact in about 1 in 10 perpetrators (lifetime contact 1 in 5; Australia 1 in 3 lifetime); (3) schizophrenia in about 1 in 20 perpetrators (international range 7–12.6%); (4) stranger victims in fewer than 1 in 6 — family members the typical victims. THE METHOD: the National Confidential Inquiry — the consecutive national case series: every homicide from the Home Office Homicide Index, psychiatric trial reports where available, antecedent offence data, questionnaires to the mental health services in each perpetrator's residential AND adjacent districts (the district-contact search), and clinical detail from the responsible team. The method matters because it is why the numbers can be believed against the anecdotes — and why the verdict (28% predictable, 65% preventable) carries the weight it does.", topic: "Epidemiology" },
    { question: "What proportion of perpetrators receives diminished responsibility, how does the schizophrenia subgroup differ, and what happened to the verdict over time?", answer: "OVERALL: 1 in 25 receives diminished responsibility (the Section 2 provision) — against around half of convictions being murder and just under half manslaughter. THE SCHIZOPHRENIA SUBGROUP: one in four receives it — five times the general rate, the court's recognition of the psychotic engine. OVER TIME: a significant DECREASE in diminished-responsibility verdicts across the Inquiry years, with hospital-order rates unchanged — while drug and alcohol misuse among perpetrators rose significantly (cocaine and crack prominent). The teaching: the longitudinal story people expect (more mentally ill killers, more hospital orders) is not the one the data tell — homicide and stranger-homicide both rose 1973–2003, but neither rose among people with mental illness; the substance rise is the real change.", topic: "Law and epidemiology" },
    { question: "Give the infant-homicide numbers and the neonaticide profile, and separate the three entities on the spectrum.", answer: "THE NUMBERS: the first year of life carries the highest homicide risk of any age — about 4.5 per 100,000 live births, constant over time; 1 in 25 of the Inquiry's 2,665 perpetrators (1996–2001) killed infants; half were fathers, around a third mothers; a quarter of the perpetrators were symptomatic at the time, a third had lifetime disorder. THE THREE ENTITIES: (1) NEONATICIDE — the killing at or around birth: the young, usually unmarried mother, dissociating through a concealed solitary delivery, panic and shame driving concealment, the newborn hidden or discarded — its own entity, not depression; (2) the POSTPARTUM-ILLNESS KILLINGS — mothers with affective disorder killing within a month of birth, the infanticide provision's territory (the law's postpartum balance); (3) LATER-INFANT HOMICIDE — males with previous violent convictions killing later in infancy. Three entities, three laws, three prevention architectures: sex education and pastoral channels; perinatal mental health detection; and child-protection awareness of paternal violence histories.", topic: "Infant homicide" },
    { question: "Define mass, serial and spree murder, contrast the mass and serial perpetrators, and state Mullen's autogenic formulation.", answer: "THE DEFINITIONS (episode structure, not motivation — motivation criteria are premature): MASS = a single episode at a single location; SPREE = over time across separate locations with NO cooling-off period; SERIAL = over time, separate locations, WITH cooling-off periods between offences. THE CONTRAST: mass murderers use firearms and carry substantial severe (often psychotic) illness; serial killers use personal methods (strangulation), are driven by sexual motivation, target unknown female victims, and carry psychopathy rather than severe mental illness. THE AUTOGENIC FORMULATION (Mullen): the mass killing generated from the perpetrator's own grievance-world — social isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity and persecutory beliefs assembling a self-generated agenda of grievance and entitlement that culminates in intended self-death — essentially a murder-suicide in which the crowd dies first, with media modelling (the lone-warrior self-image, studied knowledge of prior massacres) as part of the mechanism. The operational consequence: negotiation strategies aimed at survival miss the point; the assessment question is 'who does he intend to die?'.", topic: "Multiple homicide" },
    { question: "Describe the female and the elderly homicide patterns — proportions, victims, methods and disposals.", answer: "FEMALE: 1 in 10 of perpetrators (England and Wales and Finland alike); the victims are their own — children in a quarter of cases, partners in over a third; suffocation and poisoning overrepresented among methods; disposals favour community and hospital over prison; stranger homicide by women is rare. ELDERLY: the rarest group — fewer than 1 in 50 perpetrators — and the most male-dominated: the over-65 male:female ratio is 19:1, the highest of any age group. The pattern is Darby and Joan: the husband kills his ill or demented wife and then himself — depression with impoverishment and ruin delusions, the caregiving role strained by the wife's physical or psychiatric disability, death perceived as mercy for both. Hospital disposal is preferred — the courts reading the illness the clinicians missed. The detection point is the geriatric clinic asking the caregiving spouse how HE is.", topic: "Special populations" },
    { question: "State the last-contact data and the predictable/preventable pair, and list the five protective factors with the enhanced-CPA finding.", answer: "THE LAST-CONTACT DATA: a third of patient-homicide perpetrators were seen in the week before the offence, and immediate risk was judged low or absent in 88% of those contacts — the false-positive mathematics displayed at the bedside: rare event, common risk factors, thousands flagged per event, prediction defeated. THE PAIR: 28% of patient homicides were judged predictable, 65% preventable — the Inquiry's redirect from prediction to prevention, preventability conferred by improved mental health care. THE FIVE PROTECTIVE FACTORS (the preventability list — more likely preventable with schizophrenia diagnosis, multiple previous admissions and MHA detention; LESS likely, i.e. protective, with): better patient compliance, closer family contact, closer supervision, improved staff communication, better staff training. THE ENHANCED-CPA FINDING: in the 1999–2003 sample nearly three-quarters of recent-contact perpetrators were NOT on enhanced Care Programme Approach — including substantial proportions of high-risk patients — and even those on it included significant numbers non-compliant or disengaged at the offence: even recognised risk unmatched with intensive care, the system's central remediable failure.", topic: "Prevention" },
    { question: "Give the balanced-view numbers and explain why the discipline exists.", answer: "THE NUMBERS: less than 10% of violent crime is attributable to schizophrenia; 99.97% of people with schizophrenia commit no serious violent offence in any given year — against the 5× increased serious-offending rate in male schizophrenia (Wallace) and the 1-in-20 share of perpetrators. WHY THE DISCIPLINE EXISTS: the association is real but small, and the fear it produces is large — the chapter's explicit instruction is to present the attributable fraction and the annual non-violence rate wherever the association is discussed, because the stigma harms more patients than the violence ever does, and because the families of the unmanaged-psychosis patients (the actual at-risk group) are driven away from services by the fear the headline manufactures. The Indian application: in a media environment where 'madman kills' headlines dominate the rare-event coverage, the 99.97% belongs in every public statement the profession makes.", topic: "Stigma and public education" },
    { question: "Design the Indian district-level shadow audit the note proposes, and state what it is expected to find.", answer: "THE DESIGN: at a teaching hospital or district programme, enumerate the district's homicides over a defined period and identify those with ANY mental health service contact in the preceding year (the district-contact search the Inquiry itself uses, extended to adjacent districts); for each, audit the documented violence history (police complaints, family reports, threats — present in the notes or not), reconstruct the last-contact mental state and risk documentation, and record the care delivered against the patient's risk profile (enhanced-contact criteria met or not). THE EXPECTED FINDINGS (the note's own predictions, already delivered wherever the exercise has run): undocumented violence histories, lost follow-up through the disengagement windows, absent family engagement — the same systems findings the national inquiry found, at district scale and without new money. THE TEACHING VALUE: the exercise converts the prevention-not-prediction lesson from an English statistic into a local audit standard — the 65% made operational, one case-note at a time.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Are most murderers mentally ill?", answer: "No. Around 1 in 10 had recent mental health service contact, and 1 in 20 carried a schizophrenia diagnosis; the typical homicide is a young man with a knife and alcohol, not a patient. The mentally ill killer is the rare variant — and most of his victims are his own family, not strangers." },
    { question: "Could the doctor have seen it coming?", answer: "Mostly not: a third of patient-homicide perpetrators were seen within the preceding week, and risk was judged low or absent in 88% of those contacts — the rare outcome cannot be predicted from risk factors common in the whole patient population. But 65% were judged preventable: better follow-up, medication support, family contact and communication. Care, not clairvoyance." },
    { question: "What is an autogenic massacre?", answer: "A mass killing generated from the perpetrator's own grievance-world — isolated, bullied, entitled, persecutory — intended to end in his own death: a murder-suicide in which the crowd dies first. Media modelling (knowing the previous massacres) is part of the mechanism; negotiation strategies aimed at survival miss the point." },
    { question: "Why do mothers kill newborns?", answer: "Neonaticide is its own phenomenon: a young, usually unmarried mother, often dissociating through a concealed solitary delivery, with panic and shame — not depression — driving concealment or death. It is distinct from postpartum-illness killings of older infants, and from paternal violence later in infancy." },
    { question: "Why does an old man kill his wife and himself?", answer: "Typically depression with delusions of ruin, in an exhausted caregiving husband whose wife is ill or demented — death perceived as mercy for both, the killing immediately followed by his suicide. The detection point is the geriatric clinic asking the caregiving spouse how he is." },
    { question: "Isn't schizophrenia dangerous?", answer: "The balanced figures: less than 10% of violent crime is attributable to schizophrenia, and in any year 99.97% of people with schizophrenia commit no serious violent offence — while untreated psychosis, disengagement and comorbid substances carry what risk exists. The association is real but small; the fear is neither." },
    { question: "Did closing the old asylums cause more homicides?", answer: "The data say no: homicide and stranger-homicide both rose in England and Wales between 1973 and 2003, but neither rose among people with mental illness — and there was no consistent change in mental-illness indicators at the offence across the Inquiry years. The significant changes were rising drug and alcohol misuse among perpetrators and falling diminished-responsibility verdicts, with hospital-order rates unchanged." },
    { question: "What is India's law on infanticide?", answer: "India's IPC/BNS provision parallels the English one: the mother's postpartum mental state is weighed in the balance the infanticide provision constructs. The clinical reality the law serves — young mothers, concealed pregnancies, neonaticide and postpartum illness — is under-detected in Indian perinatal services, where the postnatal check is obstetric only." },
    { question: "What should a family do when a relative with psychosis stops attending?", answer: "Treat it as the risk window it is: contact the care team that week, especially if a caregiver has died — bereavement in schizophrenia is an escalation trigger, not an observation. Keep every appointment someone is responsible for, keep the medication supported, keep the family's observations (including any frightening incidents) written down and shared. The five protective factors — compliance, family contact, supervision, communication, training — are all family-adjacent work." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "National Confidential Inquiry into Suicide and Homicide by People with Mental Illness — Avoidable deaths: the five-year report (the consecutive case-series framework this course re-teaches)" },
      { source: "Munro E & Rumgay J — Role of risk assessment in reducing homicides by people with mental illness, Br J Psychiatry (the prevention-not-prediction analysis)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 11.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Flynn S, Shaw J & Abel K — the infant-homicide cross-sectional study (the first-year risk peak and the parental split)" },
      { source: "Wallace C, Mullen P, Burgess P et al. — serious criminal offending and mental disorder (the 5× and 99.97% figures)" },
      { source: "Kraemer GW, Lord WD & Heilbrun K — comparing single and serial homicide offenses (the nested case-control)" },
      { source: "Simpson AIF et al. — homicide and mental illness in New Zealand, 1970–2000 (the 8.7% 'abnormal' figure)" },
    ],
    reviews: [
      { source: "Taylor PJ & Gunn J — homicides by people with mental illness: myth and reality (the anti-myth epidemiology)" },
      { source: "Mullen P — the autogenic (self-generated) massacre; Cantor CH, Mullen PE & Alpers PA — mass homicide and the media-modelling hypothesis" },
      { source: "Shaw J, Hunt IM, Flynn S et al. — the role of alcohol and drugs in homicides in England and Wales (the longitudinal substance trends)" },
      { source: "Knight B — geriatric homicides: the Darby and Joan syndrome; Malphurs JE, Eisdorfer C & Cohen D — homicide-suicide vs suicide in older married men" },
      { source: "Cote G & Hodgins S; Eronen M, Hakola P & Tiihonen J — the cross-jurisdiction prevalence series (Canada, Finland; the 8–70% definitional range)" },
    ],
    patientResources: [
      { source: "The 99.97% anti-stigma arithmetic — the number this course asks every clinician to carry into public statements" },
      { source: "Tele-MANAS 14416 and the district mental health programme — the Indian contact channels for families worried about a disengaging relative" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the rare truth about mental illness and killing, the warning signs that do matter, and what families can do.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The quartet, the special populations, the definitions (mass/serial/spree, neonaticide, Darby and Joan), the Inquiry's verdict.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything — the audit method, the decision tree, the Indian shadow audit, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The quartet, the Inquiry's method, the special populations at a glance.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the NCI quartet and the 99.97% counterweight cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Why prediction fails and prevention works; the murder-suicide psychology in two variants.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why 88% of final contacts read low-risk, and what the 65% actually asks a service to do." },
    { number: 3, title: "Clinical Practice", description: "The clinical pictures, the audit method, the care-system management tier.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the case-note violence-history audit and name the five protective factors." },
    { number: 4, title: "Indian Context", description: "The NCRB volume layer, the district shadow audit, the perinatal and geriatric detection points.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can design the district-level audit and deliver the 99.97% line in an Indian public statement." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the homicide-and-mental-illness essay cold — quartet, subgroups, verdict." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 11.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "National Confidential Inquiry into Suicide and Homicide by People with Mental Illness — Avoidable deaths: the five-year report (Appleby L, Shaw J, Kapur N et al.); the Swinson-Shaw chapter synthesis of the consecutive case series", sourceType: "government", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Shaw J, Hunt IM, Flynn S et al. — the role of alcohol and drugs in homicides in England and Wales (the longitudinal substance-misuse trends, cocaine/crack prominence)", sourceType: "primary", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Flynn S, Shaw J & Abel K — the infant-homicide cross-sectional study (the first-year risk peak, the 4.5-per-100,000 rate, the parental split)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Simpson AIF et al. — homicide and mental illness in New Zealand, 1970–2000 (the 8.7% 'abnormal' figure and the definitional range)", sourceType: "primary", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Cote G & Hodgins S (the Canadian prevalence) and Eronen M, Hakola P & Tiihonen J — mental disorders and homicidal behaviour in Finland (the female 1-in-10 parallel; the 8–70% cross-jurisdiction range)", sourceType: "primary", year: "1992–1996", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Wallace C, Mullen P, Burgess P et al. — serious criminal offending and mental disorder (the 5× serious-offending figure in male schizophrenia and the 99.97% annual non-violence rate)", sourceType: "primary", year: "1998", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Mullen P — the autogenic (self-generated) massacre; with Cantor CH, Mullen PE & Alpers PA — mass homicide and the media-modelling hypothesis", sourceType: "review", year: "2000–2004", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Kraemer GW, Lord WD & Heilbrun K — comparing single and serial homicide offenses (the nested case-control: methods and psychopathology contrast)", sourceType: "primary", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Knight B — geriatric homicides: the Darby and Joan syndrome; with Malphurs JE, Eisdorfer C & Cohen D — homicide-suicide vs suicide in older married men", sourceType: "review", year: "1983–2001", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Munro E & Rumgay J — the role of risk assessment in reducing homicides by people with mental illness (the false-positive mathematics; the 28%-predictable / 65%-preventable verdict)", sourceType: "primary", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Taylor PJ & Gunn J — homicides by people with mental illness: myth and reality (the anti-myth epidemiology; the balanced-view discipline)", sourceType: "review", year: "1999", dateReviewed: "2026-09-29" },
    { id: "S13", source: "National Crime Records Bureau (NCRB) homicide statistics and the Indian forensic-service realities (the volume layer; the prison-treatment gap; the district shadow-audit framing)", sourceType: "government", year: "current series", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The quartet: 500–600 homicides a year in England and Wales; recent mental-health service contact about 1 in 10 perpetrators (lifetime 1 in 5; Australia 1 in 3); schizophrenia about 1 in 20 (international range 7–12.6%); victims family members with strangers fewer than 1 in 6.", grade: "established", sources: ["S1", "S2", "S5"] },
    { text: "The general-population pattern: perpetrators and victims predominantly young males; sharp instrument the commonest method with shooting under 1 in 10; around half of convictions murder and just under half manslaughter; 1 in 25 receives diminished responsibility (Section 2).", grade: "established", sources: ["S1", "S2"] },
    { text: "The longitudinal finding: homicide and stranger-homicide both rose 1973–2003 but neither rose among people with mental illness, with no consistent change in mental-illness indicators at the offence; significant upward trends in drug and alcohol misuse (cocaine/crack prominent) and a significant decrease in diminished-responsibility verdicts, hospital-order rates unchanged.", grade: "established", sources: ["S2", "S3"] },
    { text: "The cross-jurisdiction definitional variation: 8–70% 'abnormality' rates (New Zealand 8.7% 'abnormal', Canada 35% mentally unwell) — the figure moving with the definition rather than the pathology.", grade: "established", sources: ["S5", "S6"] },
    { text: "Infant homicide: the first year of life carries the highest homicide risk of any age (about 4.5 per 100,000 live births, constant over time); 1 in 25 of the Inquiry's 2,665 perpetrators (1996–2001) killed infants — half fathers, around a third mothers; a quarter of perpetrators symptomatic at the time, a third with lifetime disorder. Neonaticide: the young, usually unmarried mother dissociating through a concealed solitary delivery — panic and shame rather than depression.", grade: "established", sources: ["S1", "S4"] },
    { text: "The multiple-homicide taxonomy: mass (single episode, single location) versus spree (separate locations, no cooling-off) versus serial (separate locations, cooling-off periods); mass murderers carrying substantial severe (often psychotic) illness against the serial offender's psychopathy, personal methods (strangulation), sexual motivation and unknown female victims.", grade: "established", sources: ["S1", "S9"] },
    { text: "The autogenic massacre (Mullen): a mass killing generated from the perpetrator's own grievance-world — isolation, childhood bullying, suspiciousness, obsessional traits, grandiosity, persecutory beliefs — intended to end in his own death, with media-related modelling (the lone-warrior self-image, studied knowledge of prior massacres) as part of the mechanism.", grade: "proposed", sources: ["S8"] },
    { text: "The female pattern: 1 in 10 of perpetrators (England and Wales and Finland alike); children in a quarter of cases, partners in over a third; suffocation and poisoning overrepresented; community and hospital disposals; stranger homicide by women rare.", grade: "established", sources: ["S1", "S6"] },
    { text: "The elderly pattern: fewer than 1 in 50 perpetrators; over-65 male:female ratio 19:1 (the highest of any age group); the Darby-and-Joan syndrome — husband kills ill wife then himself, depression with impoverishment delusions in an exhausted caregiving spouse; hospital disposal preferred.", grade: "established", sources: ["S1", "S10"] },
    { text: "The prediction-prevention verdict: a third of patient-homicide perpetrators seen in the preceding week with immediate risk judged low or absent in 88% of those contacts; 28% of patient homicides judged predictable, 65% preventable — preventability conferred by improved mental health care; the preventability factor list built from clinician judgements (one case in five judged potentially preventable in that analysis).", grade: "established", sources: ["S2", "S11"] },
    { text: "The enhanced-CPA finding: in the 1999–2003 sample nearly three-quarters of recent-contact perpetrators were NOT on enhanced Care Programme Approach — including substantial proportions of high-risk patients — with significant numbers non-compliant or disengaged at the offence; the five protective factors: better patient compliance, closer family contact, closer supervision, improved staff communication, better staff training.", grade: "established", sources: ["S2"] },
    { text: "The balanced view: less than 10% of violent crime attributable to schizophrenia; 99.97% of people with schizophrenia commit no serious violent offence in any given year (against 5× serious offending in male schizophrenia); the comorbidity ladder 18% (major mental disorder) to 31% (with substance use) to 43% (personality disorder plus substance use); one-third of schizophrenia perpetrators imprisoned — the dispositional scandal.", grade: "established", sources: ["S1", "S7", "S12"] },
    { text: "The India layer: NCRB volumes of tens of thousands of homicides annually with sharp instruments dominant and 'madness-and-murder' media narratives tracking Western ones; no Indian Confidential Inquiry — the district-level shadow audit as the feasible transfer; the IPC/BNS infanticide provision paralleling the English postpartum balance with the postnatal check obstetric only; the prison-treatment gap likely worse than the one-third-imprisoned figure.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
