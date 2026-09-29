import type { PsychiatryCourse } from "./types";

/**
 * NICOTINE DEPENDENCE — canonical Psychiatry course
 * (migration batch 9, Group B part 2 — substance use disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/nicotine-dependence.md — untouched
 * foundation), re-researched against current guidance (the
 * GATS-India survey lineage, the WHO/FCTC policy frame, the
 * Fiore/USPHS 5-A guideline lineage, the Cochrane
 * pharmacotherapy programme, the EAGLES psychiatric-safety
 * trial, the CYP1A2–clozapine interaction literature, the
 * Heatherton FTND severity line and the Indian
 * oral-submucous-fibrosis burden literature) with per-claim
 * provenance.
 *
 * Drug routes: bupropion — the one cessation medicine with an
 * existing KYP drug lesson — is linked with its
 * seizure-contraindication framing from the note. The rest of
 * the pharmacotherapy tier (NRT patch/gum/lozenge, varenicline,
 * cytisine) has no KYP lessons; each is taught here in full
 * and recorded in contentGaps, the route never invented.
 */
export const nicotineDependenceCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "nicotine-dependence",
  title: "Nicotine Dependence — The Most Quit-Able Addiction",
  shortName: "Nicotine",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Nicotine Dependence — The Most Quit-Able Addiction"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "India's largest single preventable cause of death arrives as a pocket habit — the bidi, the cigarette, the gutka packet, the paan with zarda — and it is also the most quit-able addiction in medicine: two questions, a quit date, and a few weeks of medicines that cost less than the tobacco did.",

  summary:
    "This is the double epidemic. India's tobacco problem is smoked (bidis, cigarettes — bidis dominating the poor and the rural) AND smokeless (gutka, khaini, paan with tobacco, zarda): about 28% of adults use one or the other, the world's largest smokeless-tobacco population, and over 1 million Indians die of it every year — the largest single preventable cause, with the disease map running through the oral cavity (the world's highest oral-cancer burden), the heart, the lungs and worsened tuberculosis outcomes. The mechanism explains both the grip and the treatment's shape. The two-second teacher: nicotine reaches the brain in about ten seconds of a puff — faster than intravenous for practical purposes — and the act-reward lesson repeats 200+ times a day (every tea, every break, every phone call, every stress spike), the densest cue-web of any addiction. The thermostat-in-hours: the receptors adapt fast, so withdrawal — irritability, craving, poor concentration, hunger — arrives within hours of the last dose, which is why the average unaided quit attempt fails within a week while the health benefits stay invisible: an awful incentive structure that pharmacotherapy simply deletes from the equation. The clinical spine is the two-question minute ('Do you use tobacco?' — both forms — and 'How soon after waking?', with first tobacco within 30 minutes of waking marking high dependence) followed by the 5-A structure — Ask, Advise (personal, never generic), Agree a quit date within two weeks, Assist with medicines and a cue-map, Arrange follow-up inside the withdrawal-peak week. Pharmacotherapy doubles or triples the odds: NRT is the backbone (patch for the steady background, gum or lozenge for breakthrough cravings — the combination outperforms single-form, dosed by dependence, Indian generics approx ₹150–500/week, often cheaper than the habit); varenicline is the strongest single agent (partial α4β2 agonist, started a week before the quit date, the EAGLES-era psychiatric safety quoted honestly); bupropion carries the seizure contraindications (epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal); cytisine is the exam name; and e-cigarettes are no prescription in Indian practice — regulated out of sale. The smokeless adaptation is India's main event: the same architecture with the pocket-environment change (water bottle, cardamom or fennel where the packet lived) and the oral examination for submucous fibrosis and leukoplakia in EVERY chewer with ENT referral — the highest-stakes follow-up in Indian medicine. Psychiatry owns two special duties: the co-addiction rule (psychiatric and other-substance patients smoke at 2–3× the general rate, so tobacco is treated in parallel, never sequentially — staged with clinical stability) and the CYP1A2 alert (tobacco smoke induces the enzyme that clears clozapine and olanzapine, so quitting raises levels substantially — sometimes 50%+ — producing sedation and, with clozapine, seizures; medicine levels reviewed in the first weeks). The Indian frame completes the course: the bidi equity problem (the poorest smoke the most harmful product cheapest — cost-comparison counselling is equity work), the paan-culture tobacco-free-home declaration, the COTPA/NTCP/mCessation policy architecture, and the two relapse scripts — the lapse as a mapped event, and the ~4–5 kg average weight gain scripted in advance so the kilo never becomes the excuse.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quantify India's tobacco burden — the double epidemic (smoked bidis/cigarettes + smokeless gutka/khaini/paan-zarda), the over-1-million death attribution, and the oral-cancer signature.",
    "Explain nicotine's dependence profile: the ten-second brain entry, the 200+ daily doses, the hours-scale withdrawal — and why the average unaided quit fails within a week.",
    "Assess dependence in one minute: the two questions (both forms + time-to-first-tobacco), the 30-minute rule, the FTND named.",
    "Run the 5-A structure (Ask–Advise–Agree–Assist–Arrange) in a real OPD consultation, with one Indian detail attached to each step.",
    "Prescribe NRT (patch, gum, lozenge), bupropion and varenicline with mechanisms, cautions and Indian costs; know cytisine and the no-e-cigarette position of Indian practice.",
    "Adapt the same architecture to the smokeless tobacco user — the pocket-environment change and the every-chewer mouth examination with ENT referral.",
    "Integrate tobacco treatment into psychiatric care: the co-addiction rule (2–3× rates, parallel treatment) and the CYP1A2/clozapine alert.",
    "Prevent relapse with the lapse-as-mapped-event frame and the weight script delivered in advance.",
  ],
  quickFacts: [
    { label: "The Indian toll", value: "Over 1 million deaths a year", detail: "Tobacco is India's largest single preventable cause of death — the disease map running through the oral cavity (the world's highest oral-cancer burden), the heart, the lungs and worsened tuberculosis outcomes" },
    { label: "The double epidemic", value: "28% of adults, both forms", detail: "GATS lineage: about 28% of Indian adults use tobacco in some form — roughly a fifth smoking (bidis + cigarettes, bidis dominating the poor and rural) and above a fifth chewing (gutka, khaini, paan-tobacco, zarda): the world's largest smokeless-tobacco population" },
    { label: "The two-second teacher", value: "Ten seconds, 200+ doses a day", detail: "Nicotine reaches the brain about ten seconds after a puff — faster than intravenous for practical purposes — and the act-reward lesson repeats 200+ times daily: the densest cue-web of any addiction, each individual cue weak but the web iron" },
    { label: "The thermostat", value: "Withdrawal within hours", detail: "Irritability, craving, poor concentration and hunger arrive within hours of the last dose — the worst week lands immediately while the benefits stay invisible; the average unaided quit fails within a week" },
    { label: "The severity question", value: "30 minutes", detail: "First tobacco within 30 minutes of waking marks high dependence — the single best severity question, the FTND's most informative item's logic" },
    { label: "The consultation", value: "The 5-As in five minutes", detail: "Ask (both forms, every patient, every contact), Advise (personal, never generic), Agree (a quit date within two weeks), Assist (medicines + cue-map), Arrange (follow-up inside the withdrawal-peak week, then at 4 weeks, then monthly)" },
    { label: "The strongest single agent", value: "Varenicline", detail: "Partial agonist at the α4β2 receptor — craving reduced AND the reward of any lapse blocked; started a week before the quit date; NRT remains the backbone, with patch + gum/lozenge combination outperforming single-form" },
    { label: "The psychiatric trap", value: "CYP1A2", detail: "Tobacco smoke (not nicotine itself) induces the enzyme that clears clozapine and olanzapine — a quitting psychiatric patient can see levels rise substantially (sometimes 50%+): sedation, clozapine seizures; medicine levels reviewed in the first weeks" },
    { label: "The kilo to script", value: "4–5 kg average", detail: "Post-cessation weight gain averages 4–5 kg over months — a strongly health-positive trade, scripted in advance (the 30-minute daily walk, sugar-free substitutes) so the unscripted kilo never becomes the relapse excuse" },
  ],
  knowledgeGraph: [
    { label: "Substance Use — The Reward Hijack", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The shared reward-circuit story and the stimulus-control architecture every substance note runs — at its densest here, because no substance repeats its doses 200+ times a day" },
    { label: "Alcohol Use Disorders — The Disease of More", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The co-addiction rule's commonest partner — the drinking patient who smokes at double-to-triple rates and needs both treated in parallel" },
    { label: "Opioid Use Disorders — The Medicine That Holds the Door", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The parallel-treatment principle in action — tobacco quitting never waits for the opioid recovery to finish" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The 2–3× smoking gradient, the self-medication hypotheses, the 10–20-year mortality gap tobacco leads — and the clozapine patient whose quit changes the prescription" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The co-travelling depression that makes bupropion the elegant double-duty choice — and the post-quit withdrawal dip that mimics a relapse" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The two-second teacher's currency — the ten-second nicotinic-to-dopamine burst that writes 'that puff mattered' 200+ times a day" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Nicotine's own receptor family — the nicotinic acetylcholine receptors, with the α4β2 subtype carrying the dependence and the varenicline partial agonism" },
    { label: "Ventral tegmental area", type: "brain-region", href: "#brain", note: "The dopamine neurons nicotine reaches in about ten seconds — the two-second teacher's pulpit" },
    { label: "Nucleus accumbens", type: "brain-region", href: "#brain", note: "The cue-reward ledger where each of the 200+ daily doses is filed — every tea, every break, every stress spike entered against the next one" },
    { label: "Bupropion", type: "drug", href: "/drugs/bupropion/", note: "The one cessation medicine with an existing KYP drug lesson — the noradrenaline-dopamine option with the seizure contraindications (epilepsy, eating disorders, abrupt sedative withdrawal)" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the whole course. The two-second teacher: nicotine reaches the brain in about ten seconds of a puff — faster than intravenous for practical purposes — and flips the nicotinic receptors to release dopamine; the brain's learning rule is simultaneity (whatever fires with reward becomes wanted), and the smoker's lesson repeats 200+ times a day — every tea, every break, every phone call, every stress spike. No other substance trains so densely: each individual cue is weak, but the web is iron — the densest cue-web of any addiction, which is why cue-mapping is the behavioural spine of every quit plan. The thermostat in hours: the receptors adapt fast (up-regulation), so the brain runs through the day's dose — within hours of the last bidi or chew, withdrawal appears (irritability, craving, restless concentration, hunger). The tragedy of the unaided quitter is an awful incentive structure: the worst week arrives immediately while the health benefits stay invisible — and pharmacotherapy simply deletes it from the equation, NRT's steady nicotine removing the withdrawal while the spike-and-cue loop is unlearned, varenicline's partial agonism calming the craving and blocking any lapse's reward. The medicine interaction nobody expects: tobacco smoke — not nicotine itself — induces the liver enzyme CYP1A2, which clears clozapine, olanzapine and theophylline-type drugs; the psychiatric patient who quits can see levels rise substantially (sometimes 50%+ clinically meaningful rises): sedation, and with clozapine, seizures. The clinical rule: quitting is still right; the medicine levels get reviewed in the first weeks of abstinence — one of the highest-yield safety pearls in psychiatric cessation.",
    steps: [
      "The two-second teacher: arterial brain entry about ten seconds after a puff — faster than intravenous for practical purposes — making the association between act and reward instant.",
      "The 200+ daily repetitions: every tea, every break, every phone call, every stress spike files the same lesson — no other substance conditions so many cues per day; each individual cue is weak, but the web is iron.",
      "The thermostat in hours: receptor adaptation (up-regulation) means the brain runs through the day's dose — withdrawal (irritability, craving, restless concentration, hunger) appears within hours of the last dose.",
      "The incentive trap: the worst week arrives immediately while the health benefits stay invisible — the structure that defeats the unaided quitter, and the structure pharmacotherapy deletes.",
      "The replacement logic: NRT gives steady nicotine without the arterial spike (no spike, no cue-reward pairing — withdrawal removed while the loop is unlearned); varenicline adds partial-agonist craving relief and lapse-reward blockade.",
      "The medicine interaction: tobacco smoke (not nicotine itself) induces CYP1A2, clearing clozapine, olanzapine and theophylline-type drugs — quitting removes the induction and raises the levels substantially (sometimes 50%+): sedation, clozapine seizures, medicine levels reviewed in the first weeks.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "ventral-tegmental-area", name: "Ventral tegmental area (the two-second teacher's pulpit)", role: "The dopamine neurons nicotine reaches in about ten seconds — the fastest reinforcement route of any common addiction, the anatomical reason the act-reward association is instant.", grade: "established" },
    { id: "nucleus-accumbens", name: "Nucleus accumbens (the cue-reward ledger)", role: "Where each of the 200+ daily doses is filed — the accumbal dopamine burst writing 'that puff mattered' against every tea, break, phone call and stress spike in the day.", grade: "established" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the focus illusion's showroom)", role: "The attention and mood relief the smoker genuinely feels short-term (real short-term, borrowed) — and the withdrawal concentration dip and craving-regulation load when the dose stops.", grade: "supported" },
    { id: "amygdala-hippocampus", name: "Amygdala and hippocampus (the cue archive)", role: "The memory machinery that stores the cue-web — the morning tea, the highway paan-stop, the after-meal chew — and replays it as craving waves that weaken over months but never fully vanish for some.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "Nicotine's own receptor family — the nicotinic acetylcholine receptors, with the α4β2 subtype carrying the dependence, the receptor up-regulation of chronic use, and the varenicline partial agonism.", grade: "established", drugConnection: "Varenicline: the partial α4β2 agonist that calms craving and blocks lapse-reward — the strongest single agent; no KYP lesson, taught in full in this course." },
    { name: "Dopamine", symbol: "DA", role: "The reward currency of the two-second teacher — the ten-second nicotinic-to-dopamine burst, filed 200+ times a day into the densest cue-web of any addiction.", grade: "established", drugConnection: "Bupropion's dopaminergic arm (with the noradrenergic one) reduces craving — the KYP bupropion lesson carries the full profile." },
    { name: "Noradrenaline", symbol: "NA", role: "The arousal and attention side of the relief function — the genuine short-term focus the smoker borrows, and the restless concentration of the hours-scale withdrawal.", grade: "supported", drugConnection: "Bupropion's noradrenergic action is the same territory — the option where depression co-travels, after the seizure screen." },
  ],
  pathways: [
    {
      id: "two-second-teacher-pathway",
      name: "The two-second teacher (puff to cue-web)",
      steps: [
        { label: "The puff", detail: "Inhaled nicotine crosses to the arterial side and reaches the brain in about ten seconds — faster than intravenous for practical purposes" },
        { label: "The receptor flip", detail: "Nicotinic acetylcholine receptors (α4β2-centred) fire; the VTA dopamine burst arrives" },
        { label: "The learning rule", detail: "Simultaneity: whatever fires with reward becomes wanted — 'that puff mattered'" },
        { label: "The 200+ repetitions", detail: "Every tea, every break, every phone call, every stress spike — no other substance trains so densely; each cue weak, the web iron" },
      ],
      clinicalManifestation: "The smoker whose whole day is stitched with cues — and the quit attempt that must unlearn a web, not a single habit.",
      grade: "established",
    },
    {
      id: "thermostat-pathway",
      name: "The thermostat in hours (adaptation to withdrawal)",
      steps: [
        { label: "Chronic exposure", detail: "The nicotinic receptors adapt — up-regulation — and the brain runs through the day's dose" },
        { label: "The last dose runs out", detail: "Within hours of the last bidi or chew: irritability, craving, restless concentration, hunger" },
        { label: "The incentive trap", detail: "The worst week arrives immediately while the health benefits stay invisible — the average unaided quit fails within a week" },
        { label: "Pharmacotherapy deletes the trap", detail: "NRT's steady background removes the withdrawal while the behavioural loop is unlearned; varenicline calms craving and blocks any lapse's reward" },
      ],
      clinicalManifestation: "The week-one abandoner everyone knows — and the pharmacotherapy-supported quitter who never meets the trap.",
      grade: "established",
    },
    {
      id: "cyp1a2-pathway",
      name: "The medicine interaction nobody expects (smoke to CYP1A2 to the clozapine level)",
      steps: [
        { label: "The induction", detail: "Tobacco smoke — not nicotine itself — induces the liver enzyme CYP1A2" },
        { label: "The clearance", detail: "CYP1A2 clears clozapine, olanzapine and theophylline-type drugs; the stable dose is calibrated to the smoking" },
        { label: "The quit", detail: "Smoking stops; the induction is lost; the levels rise substantially — sometimes 50%+ clinically meaningful rises" },
        { label: "The arrival", detail: "Sedation, and with clozapine, seizures — the first weeks of an unmonitored psychiatric quit" },
      ],
      clinicalManifestation: "The stable clozapine patient who did the right thing and arrived sedated after a seizure — the quit retained, the medicine re-titrated.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "quit-date", time: "Day 0 — the chosen quit date", title: "The engine off, the plan on", description: "A real date within two weeks, chosen by the patient; varenicline started a week before it, NRT from the day itself; all tobacco removed from the house (including the guest paan box); the morning sequence changed — shower-first reorders the first tobacco of the day; the substitute box packed and the support calls scheduled.", phase: "onset" },
    { id: "withdrawal-onset", time: "Within hours of the last dose", title: "The thermostat gives out", description: "Receptor adaptation means the brain runs through the day's dose: within hours of the last bidi or chew, withdrawal appears — irritability, craving, restless concentration, hunger — the reason the average unaided quit fails within a week, and the reason the first-week plan is pre-built.", phase: "onset" },
    { id: "withdrawal-peak", time: "Days 1–7 — the first week", title: "The withdrawal peak", description: "The hardest week, front-loaded: craving waves at every mapped cue, the concentration dip, the hunger — met by the full architecture: NRT dosed by dependence, the written cue-map, high-density structure, the support calls, and the follow-up visit arranged inside this week, not after it.", phase: "peak" },
    { id: "craving-waves", time: "Weeks 2–12", title: "The weakening waves", description: "The cue-driven craving waves continue for months in weakening intensity — each survived wave weaker than the last; the lapse that happens in this window is a mapped event (which cue won, which spot in the plan adjusts), never a failed identity; the follow-up rhythm monthly.", phase: "duration" },
    { id: "weight-window", time: "Months 1–6", title: "The weight window", description: "The average 4–5 kg gain arrives over months — the trade strongly health-positive, and scripted in advance: the 30-minute daily walk, the sugar-free gum and makhana-type substitutes (not sweets); the unscripted kilo is the commonest preventable relapse.", phase: "duration" },
    { id: "stabilisation", time: "Months 6–12", title: "The stabilising plateau", description: "Weight stabilises by 6–12 months with activity; the craving waves rare, brief and weak; the high-risk days named in advance, with the standing instruction of the named relapse plan — 'call when the craving wins a day'.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Over a billion smokers worldwide; tobacco kills more than 8 million people a year (including second-hand smoke attribution). The WHO-FCTC treaty architecture governs the policy world — taxation, pictorial warnings, plain packaging, cessation support — the population frame inside which every clinical quit sits.",
    indianPrevalence: "The GATS lineage: about 28% of Indian adults use tobacco in some form — roughly a fifth smoking (bidis + cigarettes, bidis dominating the poor and rural) and above a fifth using smokeless forms (gutka, khaini, paan-tobacco, zarda); hundreds of millions of users, with the world's largest smokeless-tobacco population. Deaths: over 1 million Indians a year attributable to tobacco — the largest single preventable cause — with the disease map running through oral cancer (India carries the world's highest oral-cavity cancer burden), heart disease, stroke, COPD and worsened tuberculosis outcomes.",
    lifetimeRisk: "Dependence builds within weeks to months of regular use — faster than most substances; the smoked and smokeless forms carry the same dependence architecture.",
    ageOfOnset: "Onset skews young through the form factors: the bidi and cigarette on-ramps of adolescence, the candy-flavoured new-generation products (vapes, heated tobacco, nicotine pouches) reaching youth, and the smokeless forms entering through household and paan-culture exposure.",
    indianNotes: "The psychiatric comorbidity gradient: persons with schizophrenia, depression and other substance disorders smoke at 2–3× the general rate with heavier consumption and shorter lives — tobacco is a leading cause of the 10–20-year mortality gap in schizophrenia.",
  },
  etiology: [
    { category: "biological", factor: "Pharmacological speed: the two-second teacher", details: "Arterial brain entry within seconds; the association between act and reward is instant and repeated hundreds of times daily — no other substance trains so densely. The receptors adapt fast, so withdrawal arrives within hours and grips the day's rhythm." },
    { category: "environmental", factor: "Form factors: the delivery and the availability", details: "The bidi's high tar and nicotine delivery; the smokeless products' ever-present availability (no smoke breaks needed — the office chew); the new-generation products (vapes, heated tobacco, nicotine pouches) reaching youth with candy-flavoured on-ramps." },
    { category: "psychological", factor: "The relief function and the ritual slots", details: "Relief-function for stress, focus and mood — real short-term, borrowed; the ritual slotting (tea, toilet, travel, after meals — the cue architecture); the weight-control motive, especially in young women." },
    { category: "social", factor: "The modelling and the paan-shop geography", details: "Household and peer modelling; occupational breaks (drivers, factory shifts); paan-shop ubiquity; celebratory and hospitality rituals; the misconceived 'bidis are safer' belief." },
    { category: "psychological", factor: "The psychiatric comorbidity gradient", details: "Self-medication hypotheses (attention, mood, negative-symptom relief in schizophrenia) plus the industry's targeted history — the use treated as part of psychiatric care, not a parallel vice." },
  ],
  symptomClusters: [
    {
      category: "1. Dependence markers (the grip)",
      symptoms: ["The first cigarette or chew within 30 minutes of waking — the single best severity question", "Difficulty not using in restricted settings", "Withdrawal symptoms within hours of the last dose", "Failed quit attempts — the history nobody volunteers unprompted", "Use despite illness: the post-MI patient lighting up outside the CCU; the oral-cancer patient still chewing"],
    },
    {
      category: "2. Withdrawal (hours to weeks)",
      symptoms: ["Irritability and frustration", "Craving — the cue-driven waves that continue for months in weakening intensity", "Poor concentration and restless attention", "Insomnia and dream disturbances", "Increased appetite and weight gain (~4–5 kg average over months — script this in advance)"],
    },
    {
      category: "3. The harm inventory (India-weighted)",
      symptoms: ["Oral submucous fibrosis — the gutka signature: burning mouth, reduced mouth opening, a pre-malignant lesion visible in any OPD", "Leukoplakia and oral cancer — India carries the world's highest oral-cavity cancer burden", "COPD and lung cancer", "Coronary disease, stroke and peripheral vascular disease", "Tuberculosis outcomes worsened", "Pregnancy harms (low birth weight, prematurity); gastric ulcers; diabetes control worsened"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The two-question minute",
      code: "Both forms + the 30-minute rule",
      criteria: [
        "Question one — 'Do you use tobacco?': asked explicitly of BOTH forms, smoked and smokeless; the gutka user answers 'no' to 'do you smoke?' — the undercount that loses the smokeless half of the epidemic.",
        "Question two — 'How soon after waking do you first use tobacco?': within 30 minutes of waking = high dependence — the single best severity question (the FTND's most informative item's logic).",
        "The comorbidity sweep: every psychiatric and substance patient's tobacco status recorded at intake — the co-addiction rule operationalised.",
        "Severity instruments named, not reproduced: the FTND (Fagerström-type) and its smokeless adaptations; exhaled CO monitoring where available.",
      ],
      duration: "One minute of consultation time — the highest-yield minute in Indian medicine.",
      indianNote: "In the Indian OPD the two-question minute also routes the mouth examination: any smokeless answer sends the jaw-opening and burning-mouth screen the same visit.",
    },
    {
      system: "The readiness and quit-history assessment",
      code: "Three postures + the cue-map",
      criteria: [
        "Readiness: the three postures — precontemplation ('no problem'), contemplation ('later, doctor'), action ('I want to') — each routed differently by the 5-A structure.",
        "The quit-history: previous attempts, what broke them (the cue-map in the patient's own words), medicines tried, the weight fear, the household's use environment.",
        "The medical baseline where relevant: the mouth examination for every chewer (submucous fibrosis screening — early referral saves lives), the cough/COPD screen, the cardiovascular risk framing for the Advise step.",
      ],
      duration: "The assessment that fills the remaining four minutes of the five-minute consultation.",
      indianNote: "The household is the treatment environment: who chews at home, the paan-shop on the route, the guest paan box — mapped before the quit date is agreed.",
    },
  ],
  severityScales: [
    {
      name: "FTND",
      fullName: "Fagerström Test for Nicotine Dependence",
      measures: "Dependence severity — the Fagerström-type instrument whose most informative item is the time-to-first-tobacco question.",
      ranges: [],
      indianNote: "In Indian practice the FTND is named and the 30-minute question extracted as the OPD's one-line severity instrument; smokeless adaptations exist for the gutka/khaini population.",
    },
    {
      name: "Exhaled CO monitoring",
      fullName: "Exhaled carbon monoxide monitoring",
      measures: "Recent smoking plus a biochemically verified quit marker, where the device exists.",
      ranges: [],
      indianNote: "Where available — cost keeps it a research and tertiary-tier tool in most Indian settings; the clinical severity instrument remains the two-question minute.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Habitual use without dependence", distinguishingFeatures: "Social-slot use without withdrawal, failed quits or morning-first dosing — the person who skips a week without cost.", keyDifferentiator: "The 30-minute question and the withdrawal history: dependence is the thermostat-in-hours; habit is only the ritual." },
    { condition: "Post-quit withdrawal misread as psychiatric relapse", distinguishingFeatures: "Irritability, poor concentration, insomnia and dream disturbance in the first weeks of a psychiatric patient's quit, presenting as 'instability'.", keyDifferentiator: "The timeline (it started with the quit) and the hunger-craving cluster — with the CYP1A2 level check before blaming either the relapse or the medicine." },
    { condition: "ADHD self-medication", distinguishingFeatures: "The attention-relief function genuinely present — focus better on tobacco, worse in withdrawal.", keyDifferentiator: "Assess after the withdrawal clears (weeks, not days); the relief is real short-term and borrowed — treat both if both exist." },
    { condition: "The dual-form undercount", distinguishingFeatures: "The patient asked 'do you smoke?' answers no — the gutka, khaini or paan-zarda use never surfaces in the history.", keyDifferentiator: "Both forms asked explicitly, and the mouth examination that reveals what the history missed — burning, reduced opening, the fibrotic bands." },
  ],
  management: [
    { category: "psychotherapy", name: "The 5-A consultation (the delivery vehicle)", description: "Ask — every patient, every contact, BOTH forms. Advise — personal, specific, brief: 'your mouth fibrosis, your chest, your heart and this tobacco — quitting is the single best thing for it' (never the generic 'smoking is bad'). Agree — a quit date within 2 weeks, a real date chosen by the patient, plus the household's role: the paan-shop route change and the tobacco-free-home declaration. Assist — medicines plus the behavioural plan. Arrange — follow-up within the first week (the withdrawal peak), again at 4 weeks, then monthly, with the named relapse plan: 'call when the craving wins a day'.", whenToUse: "Every clinical contact, primary care upward — the structure every MBBS graduate can run in five minutes.", indianContext: "The single highest-leverage prescription in Indian medicine: no investigation, no referral, five minutes of structure plus medicines cheaper than the habit." },
    { category: "pharmacotherapy", name: "NRT — the backbone (patch + gum/lozenge)", description: "The patch for the steady background, gum or lozenge for breakthrough cravings and the act-replacement — the combination outperforms single-form NRT. Dosing by dependence (heavier users, bidis included, get the higher patch strength); the 'no smoking while on the patch' teaching; the park-and-chew gum technique (not continuous chewing — the practical failure point); tapered over weeks.", whenToUse: "Every quit attempt facing withdrawal — i.e. nearly all — and for chewers too: gum replaces both the nicotine and the oral act.", indianContext: "Indian generic NRT is affordable — approx ₹150–500/week for gum, similar for patches (2026, variable by brand and supply), often cheaper than the habit it replaces." },
    { category: "pharmacotherapy", name: "Varenicline — the strongest single agent", description: "Partial agonist at the α4β2 nicotinic receptor: craving reduced AND the reward of any lapse blocked. Started a week before the quit date; nausea and insomnia counselled in advance; the psychiatric-history conversation held honestly — the old black-box-era warning softened by subsequent trial evidence in psychiatric populations (the EAGLES era), quoted as it stands with mood monitored anyway.", whenToUse: "Heavier dependence, failed NRT attempts, or patient preference for the strongest single medicine; varenicline + patch combinations are used in resistant cases.", indianContext: "The exam and viva favourite: the partial-agonist logic quoted together with the EAGLES-era safety honesty." },
    { category: "pharmacotherapy", name: "Bupropion — the noradrenaline-dopamine option", description: "The atypical antidepressant with noradrenergic-dopaminergic action that reduces craving and doubles quit odds. Contraindications: seizure risk — epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal — plus caution with hypertension. Useful where depression co-travels.", whenToUse: "The depression co-traveller, or where varenicline and NRT are unsuitable — always after the seizure screen.", indianContext: "The one cessation medicine with an existing KYP drug lesson — linked from this course with its seizure-contraindication framing." },
    { category: "pharmacotherapy", name: "Cytisine — the exam name", description: "The plant-derived varenicline cousin (partial α4β2 agonist), ultra-cheap, long used in Eastern Europe and increasingly studied elsewhere — an exam name and a hopeful Indian generic path.", whenToUse: "Known for the exam; the practical Indian tier remains NRT, varenicline and bupropion.", indianContext: "The ultra-cheap price story is the point: effective cessation pharmacotherapy at generic prices is the Indian opportunity." },
    { category: "psychotherapy", name: "The behavioural architecture (cue-map + the first week)", description: "Cue-mapping: tea, toilet, travel, phone, after-meals, the paan-shop corner, the office break — each gets a written substitute (water bottle, walk loop, gum, breath drill). The first-week plan: tobacco removed from the house (all forms, including the guest paan box), the morning sequence changed (shower-first reorders the first tobacco of the day), a week of high-density structure and support calls.", whenToUse: "Alongside every pharmacological quit — the medicines remove the withdrawal while the cue-web is unlearned.", indianContext: "The stimulus-control architecture of every substance-use course, at its densest here because the cue-count is the densest." },
    { category: "lifestyle", name: "Relapse prevention: the two scripts", description: "The lapse-as-mapped-event frame (which cue won, which spot in the plan adjusts — never a failed identity); the dated-plateau script (craving waves weaken over weeks to months; each survived wave weaker than the last). The weight script IN ADVANCE: ~4–5 kg average over months, the trade strongly health-positive, the 30-minute daily walk, the sugar-free gum and makhana-type substitutes (not sweets).", whenToUse: "From the day the quit date is agreed — both scripts rehearsed before the events they describe.", indianContext: "The unscripted kilo is the commonest preventable Indian relapse — the family hears the number before the scale does." },
    { category: "psychotherapy", name: "The smokeless-tobacco adaptation (India's main event)", description: "Same architecture, different cues: the ever-present packet (the pocket-environment change — water bottle, cardamom or fennel substitute where the packet lived), the after-meal slot, the workplace chew breaks; NRT gum works for chewers too. The oral-examination follow-up for fibrosis and leukoplakia, with ENT/dental referral for any lesion — early oral-cancer catch is the highest-stakes follow-up in Indian medicine.", whenToUse: "Every smokeless user — the world's largest population of them lives in India.", indianContext: "The five-minute mouth examination (burning, reduced opening, patches) is the life-saving clinical skill this course insists on." },
  ],
  safety: {
    redFlags: [
      "A psychiatric patient on clozapine or olanzapine who quits smoking: levels can rise substantially (sometimes 50%+) — sedation, and with clozapine, seizures; medicine levels reviewed in the first weeks, written into the file when the quit date is set",
      "Burning mouth, reduced mouth opening or any oral patch in a chewer: the submucous-fibrosis/leukoplakia screen positive — ENT/dental referral the same month (early oral-cancer catch is the highest-stakes follow-up in Indian medicine)",
      "The post-MI patient lighting up outside the CCU, or the oral-cancer patient still chewing: use despite illness — the dependence marker that is also the admission's greatest teachable moment",
      "New drowsiness or a seizure in any patient who recently quit smoking on clozapine, olanzapine or theophylline-type medicines: the CYP1A2 loss until proven otherwise",
      "Bupropion considered in the wrong patient: epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal — the seizure contraindication set, with hypertension cautioned",
      "Pregnancy with tobacco use: low birth weight and prematurity the stakes — the quit supported without delay",
    ],
    urgentGuidance:
      "The order of operations: (1) every chewer's mouth examined — the burning/reduced-opening/patch screen — with ENT or dental referral for any lesion the same month; (2) every psychiatric quit on clozapine, olanzapine or theophylline-type drugs carries a medicine-level review in the first weeks — say it in the file, not in hindsight; (3) bupropion screened for the seizure set before prescribing (epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal) with blood pressure checked; (4) the cardiovascular event used as the teachable moment — the quit conversation and NRT started before discharge, not after; (5) the withdrawal peak supported inside the first week (the follow-up visit, the support calls, the medicines re-weighted when the plan is overwhelmed); (6) the lapse met with the mapped-event frame and the standing instruction: 'call when the craving wins a day'.",
  },
  drugLinks: [
    {
      name: "Bupropion",
      slug: "bupropion",
      role: "The noradrenaline-dopamine option — where depression co-travels",
      rationale: "The atypical antidepressant with noradrenergic-dopaminergic action that reduces craving and doubles quit odds — the elegant choice when a depressive disorder rides with the dependence. The standing caution is the seizure set: contraindicated with epilepsy, eating disorders and abrupt alcohol or benzodiazepine withdrawal, with blood pressure cautioned. The full KYP drug lesson carries the pharmacology; this course carries the cessation logic.",
      evidenceLevel: "systematic-review",
      clinicalDisclaimer: "Cessation-specific prescribing: screen the seizure contraindications before the first prescription; the disease-modifying treatment remains the quit itself, with the behavioural architecture running underneath.",
    },
  ],
  contentGaps: [
    "Nicotine replacement therapy — the patch, gum and lozenge backbone itself, including the combination evidence that outperforms single-form — has no KYP drug lessons; the dosing-by-dependence, the park-and-chew technique and the taper are taught in full in this course, the route never invented.",
    "Varenicline — the strongest single agent and the exam's mechanism favourite — has no KYP drug lesson; the partial α4β2 agonist pharmacology, the pre-quit-date start and the EAGLES-era safety honesty are taught here.",
    "Cytisine — the plant-derived, ultra-cheap exam name — has no KYP drug lesson; named and taught here.",
    "The e-cigarette route is documented as a refusal, not a gap to fill: not licensed cessation medicines in Indian practice (regulated out of sale, effectiveness debated) — no KYP route exists or is implied.",
  ],
  patientGuide: {
    whatIsIt:
      "Nicotine dependence is the brain having learned, with unusual efficiency, that the next dose matters. Tobacco — smoked (bidis, cigarettes) or chewed (gutka, khaini, paan with tobacco, zarda) — delivers nicotine to the brain in about ten seconds, and the pairing of the act with the small reward repeats 200+ times a day: every tea, every break, every phone call. India carries the world's largest smokeless-tobacco population and loses over 1 million people a year to tobacco — its largest single preventable cause of death. The hopeful side is real: this is the most quit-able addiction in medicine — with proper treatment, behavioural support doubles quit rates and nicotine replacement doubles them again.",
    whatCausesIt:
      "Speed and repetition. No other substance trains the brain so densely: the dose arrives in seconds and repeats hundreds of times daily. Withdrawal begins within hours (irritability, craving, poor concentration, hunger), which is why unaided quitting usually fails within a week — the hardest days arrive first, while the health benefits stay invisible. The form matters: bidis deliver high tar and nicotine despite the smaller stick; smokeless products need no smoke break (the office chew); and the rituals — tea, travel, after meals — each become cues of their own.",
    symptoms:
      "Dependence markers: the first tobacco within 30 minutes of waking; difficulty staying off it where it is restricted; withdrawal within hours; failed quits; use despite illness. Withdrawal itself: irritability, frustration, craving, poor concentration, disturbed sleep with vivid dreams, increased appetite and weight gain (average 4–5 kg over months). The harms, India-weighted: burning mouth and reduced mouth opening (submucous fibrosis — a pre-malignant change visible in any OPD), white patches (leukoplakia), oral cancer; cough and COPD; heart disease and stroke; worsened tuberculosis outcomes; pregnancy harms (low birth weight, prematurity); gastric ulcers and worsened diabetes control.",
    treatment:
      "The five-minute consultation: Ask (both forms), Advise (personally), Agree (a quit date within two weeks, chosen by you), Assist (medicines plus a written cue-map), Arrange (follow-up inside the first week — the hardest week — then at 4 weeks, then monthly). Medicines double or triple the odds: the patch plus gum or lozenge (the combination works better than either alone); varenicline (the strongest single medicine, started a week before the quit date); bupropion (helpful when depression travels along, never with seizure conditions); cytisine (the ultra-cheap plant-derived cousin — an exam name). E-cigarettes are not prescribed in Indian practice. The first-week plan: all tobacco out of the house (including the guest paan box), the morning sequence changed, the substitutes packed.",
    selfHelp: [
      "The cue-map written and carried: every tea, toilet, travel, phone call, after-meal and paan-shop corner gets its named substitute — the water bottle, the walk loop, the gum, the breath drill.",
      "The pocket-environment change for chewers: the packet out; the water bottle, the cardamom or fennel, in.",
      "The morning re-order: shower-first breaks the first-tobacco-of-the-day association.",
      "The tobacco-free-home declaration — the family-level intervention that works with the paan culture rather than against it.",
      "The weight plan started on day one: the 30-minute daily walk, sugar-free gum and makhana-type snacks (not sweets) — the 4–5 kg average scripted in advance so it never becomes the relapse excuse.",
      "The relapse arithmetic: a lapse is a mapped event, not a failed identity — the cue logged, the plan adjusted, the next wave weaker than the last.",
    ],
    whenToSeekHelp: [
      "Burning mouth, reduced mouth opening or any patch — the dental or ENT examination the same month (early referral saves lives)",
      "Chest pain, breathlessness or a cough that changes — the cardiac and respiratory review",
      "A quit on clozapine or olanzapine with new drowsiness or any seizure — the medicine-level review immediately (the CYP1A2 alert)",
      "Withdrawal that overwhelms the plan — the follow-up brought forward and the medicines re-weighted",
      "Pregnancy with tobacco use — the quit supported without delay (low birth weight and prematurity are the stakes)",
    ],
    indianResources: [
      "The National Tobacco Control Programme (NTCP) district cessation cell — the referral address, patchy across districts but the official layer",
      "The mCessation helpline — the phone-based quit support",
      "Every dental and ENT visit as the teachable moment — ask the chewer's mouth question there",
      "The tobacco-free home and function declaration — ask the treating team for the family version",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No dedicated India-specific nicotine-dependence guideline exists; the clinical spine is the 5-A consultation structure (the Fiore/USPHS lineage) delivered inside the COTPA/NTCP policy architecture, with the Cochrane pharmacotherapy programme (NRT, varenicline, bupropion, cytisine, combinations) supplying the medicine tier and the mCessation helpline plus NTCP district cessation cells as the referral layer.",
    systemContext: "The patient meets the system in primary care, the district hospital and — uniquely for the smokeless half — the dental and ENT OPD, where every visit is a cessation teachable moment. The 5-As, NRT prescribing and the first-week phone follow-up are all district-doctor work; the NTCP cells and mCessation are the referral layer; psychiatry owns the co-addiction population and the CYP1A2 interactions.",
    programmeContext: "The policy frame: COTPA (the ban on smoking in public places, pictorial warnings, the advertising ban), state-level gutka bans (patchy, replayed in courts, supply finding its way), GATS surveillance, the National Tobacco Control Programme's district cessation cells (patchy but the referral address), and the mCessation/NRT-scheduling realities.",
    costConsiderations: "Indian generic NRT is affordable — approx ₹150–500/week for gum, similar for patches (2026, variable by brand and supply) — often cheaper than the habit it replaces; the cost-comparison counselling (₹/month of habit against ₹/month of treatment) is a genuine motivator, and the bidi equity problem makes it clinical work: the poorest smoke the most harmful product cheapest.",
    culturalConsiderations: "Paan with tobacco is hospitality in much of India — the 'tobacco-free home and function' declaration is the family-level intervention that works with the culture rather than against it. The 'bidis are safer' misconception persists; the household's use environment (who chews at home, the guest paan box, the paan-shop on the route) is part of the clinical assessment, and the misconceived safety belief is corrected with the same breath as the Advise.",
    patientCounselling: [
      "The one-line philosophy: 'Tobacco treatment is five minutes of structure plus a few weeks of medicines that cost less than the habit — the cheapest life-saving prescription in Indian medicine.'",
      "The personal Advise script: 'Your mouth, your chest, your heart and this tobacco — quitting is the single best thing for it' — the their-body version, never the generic lecture.",
      "The household script: the tobacco-free-home declaration, the guest paan box retired, the paan-shop route changed — the family-level intervention that carries the quit.",
      "The cost-comparison script: the ₹/month of the habit against the ₹/month of the treatment — often the same or less, and for a finite course rather than a lifetime.",
      "The weight script, in advance: 'About 4–5 kg on average over the months, the trade strongly health-positive — we start the walk and the substitutes on day one, and it stabilises within 6–12 months.'",
      "The relapse script: 'A lapse is a mapped event, not a failed identity — call when the craving wins a day, and we adjust the one spot that broke.'",
    ],
  },
  decisionPath: {
    title: "The five-minute consultation that changes Indian health",
    nodes: [
      {
        id: "start",
        question: "Every patient, every contact — the two questions first ('Do you use tobacco — smoke or chew?' and 'How soon after waking?'), then the readiness posture routes the plan.",
        branches: [
          { label: "Precontemplation — 'no problem'", next: "advice-path" },
          { label: "Contemplation — 'later, doctor'", next: "motivation-path" },
          { label: "Action — 'I want to'", next: "dual-form-gate" },
        ],
      },
      {
        id: "advice-path",
        question: "The precontemplator: today is not the quit — today is the seed.",
        recommendation: "Personal Advise delivered once, warmly, without argument ('your mouth, your chest, your heart and this tobacco — quitting is the single best thing for it'); tobacco status recorded; the door left open with the next re-ask named. Precontemplation is a stage, not a verdict — the record is the treatment.",
      },
      {
        id: "motivation-path",
        question: "The contemplator: the scales are moving but the date is not set.",
        recommendation: "The personal Advise plus the cost-comparison counselling (₹/month of habit against ₹/month of treatment — often the same or less); the quit-history taken (what broke the previous attempts — the cue-map); the readiness question asked directly; the re-contact arranged — and if the conversation turns, the quit date agreed within two weeks.",
      },
      {
        id: "dual-form-gate",
        question: "The assessment gate: BOTH forms, always — smoked (bidis, cigarettes) AND smokeless (gutka, khaini, paan-zarda). Which side carries the load?",
        branches: [
          { label: "Smokeless use anywhere in the history", next: "mouth-gate" },
          { label: "Smoked only", next: "severity-gate" },
        ],
      },
      {
        id: "mouth-gate",
        question: "Every chewer's mouth, every time: the oral examination for submucous fibrosis and leukoplakia.",
        branches: [
          { label: "Burning, reduced mouth opening, or any patch", next: "ent-referral-path" },
          { label: "No lesion today", next: "severity-gate" },
        ],
      },
      {
        id: "ent-referral-path",
        question: "The pre-malignant finding: the lesion that makes the Advise personal.",
        recommendation: "ENT/dental referral for any lesion — early oral-cancer catch is the highest-stakes follow-up in Indian medicine. The quit plan proceeds alongside (not instead): the visible lesion converts the abstract advice into the patient's own body's evidence.",
      },
      {
        id: "severity-gate",
        question: "The 30-minute question: how soon after waking does the first tobacco (of either form) arrive?",
        branches: [
          { label: "Within 30 minutes — high dependence", next: "medicine-gate" },
          { label: "After 30 minutes — lighter pattern", next: "medicine-gate" },
        ],
      },
      {
        id: "medicine-gate",
        question: "The medicine choice — guided by the dependence weight, the co-travelling depression, the seizure history and the psychiatric prescription.",
        branches: [
          { label: "The backbone plan (most quitters)", next: "nrt-path" },
          { label: "Heaviest dependence — the strongest single agent", next: "varenicline-path" },
          { label: "Depression co-travels (or the above unsuitable)", next: "bupropion-path" },
          { label: "The psychiatric patient (clozapine/olanzapine or a co-riding addiction)", next: "psychiatric-path" },
        ],
      },
      {
        id: "nrt-path",
        question: "NRT: the backbone that removes the withdrawal while the behavioural loop is unlearned.",
        recommendation: "Patch for the steady background + gum or lozenge for breakthrough cravings — the combination outperforms single-form; the higher patch strength for heavier users (bidis included); the park-and-chew technique taught (the practical failure point); no smoking while on the patch; Indian generics approx ₹150–500/week (2026), often cheaper than the habit. Gum works for chewers too — replacing both the nicotine and the oral act.",
      },
      {
        id: "varenicline-path",
        question: "Varenicline: the strongest single agent.",
        recommendation: "Partial agonist at the α4β2 receptor — craving reduced AND the reward of any lapse blocked; STARTED A WEEK BEFORE the quit date; nausea and insomnia counselled in advance; the psychiatric-history conversation held honestly (the EAGLES-era evidence softening the old black-box-era warning — quoted as it stands, mood monitored anyway).",
      },
      {
        id: "bupropion-path",
        question: "Bupropion: the noradrenaline-dopamine option — after the screen.",
        recommendation: "Useful where depression co-travels, with craving reduced and quit odds doubled; the seizure contraindications cleared FIRST (epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal); hypertension cautioned. The full KYP bupropion lesson is linked from this course.",
      },
      {
        id: "psychiatric-path",
        question: "The psychiatric patient: the co-addiction rule and the enzyme alert together.",
        recommendation: "Treat tobacco in parallel, never sequentially — the 'one thing at a time' folklore loses lives to the decade of tobacco deaths the other recovery preserves; stage with clinical stability (not during an acute psychosis). And the CYP1A2 alert: quitting raises clozapine/olanzapine levels substantially (sometimes 50%+) — sedation, clozapine seizures — so the medicine levels are reviewed in the first weeks, written into the file at the moment the quit date is set.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Advising 'smoking is bad' generically",
      why: "The generic lecture is filtered out as background noise — the advice that changes behaviour is the personal, specific, brief one that names the patient's own mouth, chest or heart.",
      correction: "'Your mouth fibrosis, your chest, your heart and this tobacco — quitting is the single best thing for it' — the their-body version, delivered once and recorded.",
    },
    {
      mistake: "Asking only 'do you smoke?'",
      why: "The question misses the smokeless half of India's double epidemic — the gutka, khaini or paan-zarda user answers 'no' and the consultation's teachable moment is lost.",
      correction: "Ask both forms explicitly — smoke AND chew — and examine every chewer's mouth.",
    },
    {
      mistake: "Dosing NRT too low for the bidi or heavy user",
      why: "Under-dosed NRT reproduces withdrawal; the patient concludes 'the medicines do not work for me' and the quit fails into the folklore.",
      correction: "Dose by dependence — the higher patch strength for heavier users (bidis deliver high tar and nicotine), with patch + gum/lozenge combination for the densest cue-webs.",
    },
    {
      mistake: "The unreviewed clozapine level after a psychiatric quit",
      why: "The quitting patient loses CYP1A2 induction quietly — the level can rise substantially (sometimes 50%+), arriving as sedation or a seizure weeks later, misread as relapse or 'clozapine instability'.",
      correction: "Medicine levels reviewed in the first weeks of abstinence — the rule written into the file at the moment the quit date is set, not discovered in hindsight.",
    },
    {
      mistake: "Treating tobacco as the afterthought in other addiction care ('one thing at a time')",
      why: "The sequential folklore loses lives: psychiatric and other-substance patients smoke at 2–3× the general rate, and tobacco is a leading cause of the early-death gap their recovery should be closing.",
      correction: "Treat in parallel with the same tools, staged with clinical stability — tobacco treatment belongs inside every psychiatric and addiction plan.",
    },
    {
      mistake: "Leaving the weight question unscripted",
      why: "The average 4–5 kg gain arrives as a surprise and becomes the relapse excuse — the unscripted kilo is the commonest preventable relapse.",
      correction: "Script it in advance: the average, the strongly health-positive trade, the 30-minute daily walk and the sugar-free substitutes (gum, makhana — not sweets).",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The 5-As recited with one Indian detail attached to each — the structure every MBBS graduate can run in five minutes.",
        "The two-question minute: both forms asked + the 30-minute rule (first tobacco within 30 minutes of waking = high dependence).",
        "Varenicline's partial-agonist logic at the α4β2 receptor — craving reduced, lapse-reward blocked — and why it starts a week BEFORE the quit date.",
        "Bupropion's mechanism one-liner (noradrenergic-dopaminergic, craving reduced, quit odds doubled) and its seizure contraindication set: epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal.",
        "The CYP1A2 induction story: tobacco smoke (not nicotine itself) induces the enzyme clearing clozapine and olanzapine — the quit that raises the level.",
        "Oral submucous fibrosis: the gutka signature (burning mouth, reduced mouth opening) — the pre-malignant lesion visible in any OPD.",
      ],
      practical: [
        "Take the tobacco history the right way: both forms asked explicitly, the time-to-first-tobacco question, the quit-history and the household's use environment.",
        "Demonstrate the chewer's mouth examination — the burning/reduced-opening screen for submucous fibrosis — and deliver the personal Advise to a chewer.",
      ],
      longAnswer: [
        "A 48-year-old lorry driver with 20 bidis a day for 30 years, khaini 10 times a day, morning cough and reduced mouth opening: assess and manage (the double-epidemic essay — the two-question minute, the 5-As, the pharmacotherapy tier, the oral-lesion follow-up).",
        "Tobacco cessation in psychiatric practice: the co-addiction rule, the varenicline safety evidence, and the clozapine–CYP1A2 interaction.",
      ],
    },
    neetPg: {
      highYield: [
        "THE INDIAN NUMBERS: over 1 million tobacco deaths a year — the largest single preventable cause; GATS ~28% adult use; the world's largest smokeless population; the world's highest oral-cavity cancer burden.",
        "THE CONDITIONING DENSITY: brain entry in about ten seconds; 200+ doses a day — no other substance trains so many cues.",
        "THE SEVERITY QUESTION: time to first tobacco — within 30 minutes of waking = high dependence (the FTND's most informative item's logic).",
        "THE TREATMENT LADDER: behavioural support doubles quit rates; NRT doubles them again — with patch + gum/lozenge combination outperforming single-form; varenicline the strongest single agent.",
        "BUPROPION'S CONTRAINDICATIONS: seizure risk — epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal; hypertension cautioned.",
        "THE CLOZAPINE QUIT TRAP: loss of CYP1A2 induction → levels rise substantially (sometimes 50%+) → sedation, seizures — monitor and adjust in the first weeks.",
        "THE PSYCHIATRIC GRADIENT: 2–3× smoking rates in schizophrenia, depression and other substance disorders; tobacco a leading cause of the 10–20-year mortality gap.",
        "E-CIGARETTES: not prescribed in Indian practice — regulated out of sale; the exam answer is the patch/gum/varenicline package.",
      ],
      pyqConcepts: [
        "The time-to-first-tobacco item — the recurring one-best-answer on severity assessment.",
        "The varenicline partial-agonist mechanism — the mechanism-match question.",
        "The quitting psychiatric patient on clozapine — the interaction stem.",
        "COTPA provisions (public-place smoking ban, pictorial warnings, advertising ban) — the policy question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 54-year-old man, days into his recovery from a myocardial infarction, is found lighting a bidi outside the coronary care unit — the dependence marker (use despite illness) that is also the single greatest teachable moment of his admission: the personal Advise anchored to his heart, the quit date agreed before discharge, the patch started on the ward, the first-week phone follow-up arranged, the household's tobacco-free-home declaration, and the weight script delivered in advance — the five-minute consultation that changes Indian health, run at the exact moment the motivation is highest and the withdrawal fear has not yet arrived.",
        "A 24-year-old design student who smokes to stay thin wants to quit but refuses because 'everyone gains weight' — the weight-control motive (especially in young women) met with the pre-scripted answer: the 4–5 kg average named honestly at the first consultation, the strongly health-positive trade, the 30-minute daily walk and the sugar-free substitutes built into the plan from day one, the NRT plan that removes the withdrawal while the behavioural work runs — and the vape in her bag addressed honestly: no e-cigarettes as prescription in Indian practice, the proven path offered instead.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The 5-As: Ask, Advise, Agree, Assist, Arrange.",
        "Varenicline = the strongest single agent (partial α4β2 agonist).",
        "Bupropion: watch seizures — epilepsy, eating disorders, abrupt sedative withdrawal.",
        "First tobacco within 30 minutes of waking = high dependence.",
        "Average post-cessation weight gain: about 4–5 kg — script it in advance.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The medicine-level review is written into the psychiatric quit plan at the moment the date is set — 'say it in the file, not in hindsight' — the CYP1A2 discipline that separates the wards that never see the quit-induced clozapine seizure from the ones that do.",
        "Treat tobacco in parallel in every other addiction — the 'one thing at a time' folklore loses lives to the decade of tobacco deaths the other recovery preserves.",
        "Quote the EAGLES-era varenicline evidence honestly: the old black-box-era warning softened by the psychiatric-population trial — and monitor mood anyway; both halves of that sentence are the standard of care.",
        "The mouth examination is the chewer's follow-up centrepiece — the five-minute skill that catches oral cancer early; India's highest-stakes follow-up belongs to whoever looks.",
        "The bidi problem is an equity problem: the poorest smoke the most harmful product cheapest — NRT affordability and the cost-comparison counselling are clinical work, not charity.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The driver with two habits and one plan",
      presentation: "Twenty bidis a day for thirty years, khaini ten times a day, and a mouth that burns when he eats — the dual-form Indian habit met by one five-minute plan.",
      initialPresentation: "A 48-year-old long-distance lorry driver attended a district hospital OPD with three months of morning cough plus mouth-burning and reduced mouth opening his wife had noticed; on direct questioning he reported 20 bidis daily for 30 years and khaini kept in the pocket, taken 10 times a day, the first within minutes of waking.",
      history: "Thirty years of bidis at 20 a day; khaini 10 times daily (the first within minutes of waking — high dependence by the 30-minute rule); no previous structured quit attempt; the highway paan-stop circuit the fixed geography of both habits; the wife and the co-driver available as allies; a morning cough attributed to 'dust'; mouth-burning with spicy food and progressively reduced mouth opening.",
      examination: "Oral examination: early submucous fibrosis — burning on examination, reduced interincisal opening, pale fibrotic bands; chest clear apart from the smoker's cough; cardiovascular screen unremarkable; no other stigmata.",
      diagnosis: "Dual-form nicotine dependence (bidi + khaini), high dependence by the time-to-first-tobacco rule, WITH early oral submucous fibrosis — the pre-malignant smokeless signature.",
      management: "The personal Advise (the mouth and the chest — never the generic lecture); ENT referral, which confirmed the pre-malignant stage; quit date agreed in 10 days; patch + gum NRT (combination, dosed for the dependence); the written cue-map — tea, after-meals, the highway paan-stops (the packed substitute box carried, the co-driver enlisted); the pocket-environment change (water bottle, cardamom); the wife's tobacco-free-home declaration; first-week phone calls; the weight script delivered in advance.",
      outcome: "A lapse in week 3 — a breakdown night on a long haul: mapped (which cue, which gap in the plan), survived, the plan adjusted, the quit continued. At 6 months: tobacco-free, mouth-opening improved, cough resolved, weight +4 kg — scripted in advance, accepted.",
      teachingPoints: [
        "Dual-form tobacco is the Indian norm — the assessment asks both forms or misses the patient.",
        "The oral lesion made the Advise personal — the visible pre-malignancy converts abstract advice into the patient's own evidence.",
        "The cheapest treatment (Indian generics) beat the habit's price — the cost-comparison made in the first consultation.",
        "Lapses mapped, not punished — the week-3 breakdown night became data, not a verdict.",
      ],
    },
    {
      title: "The clozapine patient who quit",
      presentation: "He did the right thing and it nearly cost him — the schizophrenia patient whose cigarette quit quietly doubled his clozapine.",
      initialPresentation: "A 32-year-old man with schizophrenia, stable for two years on clozapine 400 mg/day and smoking 20 cigarettes daily, arrived at his routine outpatient review sedated and drowsy after one witnessed generalised seizure at home; his brother reported that he had stopped smoking completely three weeks earlier — after a chest infection, motivated by the brother's support — without informing the treating team.",
      history: "Schizophrenia stable on clozapine 400 mg/day with regular follow-up; 20 cigarettes/day for over a decade; the quit undertaken alone after a chest infection, with the brother's encouragement; no alcohol; no other medicine changes; no fever or illness at review.",
      examination: "Sedated but rousable, oriented after the post-ictal period; no focal neurology; no signs of infection relapse; the chest clear.",
      diagnosis: "Clozapine toxicity from the loss of CYP1A2 induction after smoking cessation — the level roughly doubled; NOT a schizophrenia relapse and NOT clozapine intolerance.",
      management: "The clozapine level checked (roughly doubled from the smoking-era baseline); re-titration of the dose under level monitoring; the prevention framing delivered to patient and family alike — 'the quit was the right call, the medicine needed to learn about it'; the tobacco quit supported with NRT and follow-up; the medicine-level review rule written into the plan for every future dose context.",
      outcome: "Stability restored with the re-titrated dose under level monitoring; the tobacco quit retained; the patient and family counselled on the interaction for life — every future clinician told before the next change.",
      teachingPoints: [
        "The smoking-cessation pharmacokinetic pearl: tobacco smoke induces CYP1A2 — the quit removes the induction and the clozapine level rises substantially.",
        "Medicine-level review belongs in every psychiatric quit plan — written at the moment the date is set, not discovered in hindsight.",
        "Tobacco is a live clinical variable in psychiatric prescribing, not background noise — the quit was right; only the monitoring was missing.",
      ],
    },
  ],
  clinicalPearls: [
    "Tobacco is India's largest single preventable cause of death — over 1 million deaths a year, through the quiet routes of heart, stroke, cancer and lung.",
    "The double epidemic: ask BOTH forms — smoked (bidis, cigarettes) and smokeless (gutka, khaini, paan-zarda) — or lose the smokeless half of the epidemic.",
    "The two-second teacher: brain entry in about ten seconds, 200+ doses a day — the densest cue-web of any addiction; each individual cue weak, the web iron.",
    "The thermostat-in-hours: withdrawal (irritability, craving, poor concentration, hunger) within hours of the last dose — the worst week first, benefits invisible; pharmacotherapy deletes the trap.",
    "The two-question minute: 'Do you use tobacco?' (both forms) and 'How soon after waking?' — within 30 minutes = high dependence, the single best severity question.",
    "The 5-As in five minutes: Ask, Advise, Agree, Assist, Arrange — every patient, every contact, both forms.",
    "Combination NRT (patch + gum/lozenge) outperforms single-form; dose by dependence — the bidi and heavy users get the higher strength.",
    "Varenicline: the strongest single agent — partial α4β2 agonist, craving reduced and lapse-reward blocked, started a week before the quit date.",
    "Bupropion: the seizure set is the prescribing gate — epilepsy, eating disorders, abrupt alcohol or benzodiazepine withdrawal; hypertension cautioned.",
    "The CYP1A2 alert: quitting smoking raises clozapine and olanzapine levels substantially — sedation, clozapine seizures; medicine levels reviewed in the first weeks.",
    "Every chewer's mouth, every time: submucous fibrosis (burning, reduced opening) and leukoplakia — ENT referral for any lesion; the highest-stakes follow-up in Indian medicine.",
    "Script the kilo in advance: 4–5 kg average weight gain, the trade strongly health-positive — the unscripted kilo becomes the relapse excuse.",
    "The co-addiction rule: psychiatric and other-substance patients smoke at 2–3× the general rate — tobacco is treated in parallel, never sequentially.",
  ],
  highYieldSummary: [
    "Definition and framing: nicotine dependence is the tobacco-caused addiction — smoked (bidis, cigarettes) and smokeless (gutka, khaini, paan-zarda) — that is simultaneously India's largest single preventable cause of death (over 1 million deaths a year) and the most quit-able addiction in medicine: behavioural support doubles quit rates, NRT doubles them again, varenicline adds more, and the whole package in Indian generics costs less than the habit itself.",
    "Epidemiology: GATS lineage — about 28% of Indian adults use tobacco in some form (roughly a fifth smoking, above a fifth smokeless; the world's largest smokeless-tobacco population); globally over a billion smokers and more than 8 million deaths a year including second-hand smoke attribution; the psychiatric gradient — 2–3× smoking rates in schizophrenia, depression and other substance disorders, with tobacco a leading cause of the 10–20-year mortality gap.",
    "Mechanism: the two-second teacher (brain entry about ten seconds after the puff; 200+ daily doses — the densest cue-web of any addiction); the thermostat-in-hours (receptor up-regulation, withdrawal within hours, the average unaided quit failing within a week); the CYP1A2 medicine interaction (tobacco smoke inducing the enzyme that clears clozapine, olanzapine and theophylline-type drugs — the quit raising levels substantially, sometimes 50%+).",
    "Clinical picture: dependence markers (first tobacco within 30 minutes of waking, restricted-settings difficulty, failed quits, use despite illness — the post-MI patient outside the CCU); withdrawal (irritability, craving, poor concentration, insomnia-dream disturbances, increased appetite, the 4–5 kg average weight gain); the India-weighted harm inventory (submucous fibrosis visible in any OPD, leukoplakia, the world's highest oral-cavity cancer burden, COPD, coronary disease, stroke, worsened TB outcomes, pregnancy harms).",
    "Diagnosis: the two-question minute (both forms + time-to-first-tobacco), the FTND named with exhaled CO where available; the comorbidity sweep (every psychiatric and substance patient's tobacco status at intake); the readiness postures (precontemplation, contemplation, action) routing the 5-A branches; the quit-history and the household's use environment; the mouth examination for every chewer.",
    "Management: the 5-A structure (Ask — both forms; Advise — personal; Agree — a quit date within 2 weeks; Assist — medicines plus cue-map; Arrange — follow-up inside the withdrawal-peak week, at 4 weeks, then monthly); the pharmacotherapy tier (combination NRT outperforming single-form; varenicline the strongest single agent started a week before; bupropion with the seizure contraindications; cytisine the exam name; no e-cigarettes as prescription in Indian practice); the behavioural architecture (cue-map, first-week plan, stimulus control); the smokeless adaptation (pocket-environment change, the every-chewer mouth examination with ENT referral).",
    "Psychiatric integration: the co-addiction rule (2–3× rates; tobacco treated in parallel, never sequentially; staged with clinical stability — not during an acute psychosis); the CYP1A2 alert (quitting raises clozapine/olanzapine levels substantially — sedation, clozapine seizure risk; medicine levels reviewed in the first weeks, written into the file); the EAGLES-era varenicline safety quoted honestly with mood monitored anyway.",
    "The Indian layer: the COTPA/NTCP/mCessation policy frame; the bidi equity problem (the poorest smoke the most harmful product cheapest — cost-comparison counselling as equity work); the paan-culture tobacco-free-home declaration; the dental-OPD junction; the relapse scripts (the lapse as a mapped event; the dated-plateau weight script — craving waves weakening over weeks, weight stabilising by 6–12 months with activity).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "nd-quiz-1",
      question: "The reason nicotine's dependence-learning is denser than any other substance's:",
      options: ["It has the longest half-life of any addictive drug", "Brain entry takes about ten seconds and the lesson repeats 200+ times a day", "It is the only substance that causes withdrawal", "It acts on opioid receptors directly"],
      correctIndex: 1,
      explanation: "The two-second teacher: the fastest common reinforcement route plus the highest daily repetition — every tea, break and phone call a cue; the web is iron because the repetition is endless.",
      afterSectionId: "mechanism",
    },
    {
      id: "nd-quiz-2",
      question: "The single best severity question for nicotine dependence:",
      options: ["'Do you smoke indoors?'", "'Which brand do you prefer?'", "'How soon after waking do you first use tobacco?'", "'How many friends smoke?'"],
      correctIndex: 2,
      explanation: "First tobacco within 30 minutes of waking = high dependence — the FTND's most informative item's logic, asked of BOTH forms in the two-question minute.",
      afterSectionId: "diagnosis",
    },
    {
      id: "nd-quiz-3",
      question: "The strongest single pharmacotherapy for tobacco cessation:",
      options: ["NRT gum alone", "Varenicline", "Diazepam", "An SSRI"],
      correctIndex: 1,
      explanation: "Partial α4β2 agonism — craving reduced plus the reward of any lapse blocked; NRT remains the backbone, and the patch + gum/lozenge combination outperforms single-form.",
      afterSectionId: "management",
    },
    {
      id: "nd-quiz-4",
      question: "For a gutka user, the specific physical-examination priority is:",
      options: ["Knee reflexes", "Fundoscopy", "Spine mobility", "Oral examination for submucous fibrosis/leukoplakia with ENT referral of lesions"],
      correctIndex: 3,
      explanation: "The visible pre-malignant signs — burning, reduced mouth opening, patches — make early referral life-saving: the chewer's follow-up centrepiece and the highest-stakes follow-up in Indian medicine.",
      afterSectionId: "indian-practice",
    },
    {
      id: "nd-quiz-5",
      question: "A stable clozapine patient stops smoking. The mandatory action is:",
      options: ["Double the clozapine immediately", "Anticipate rising clozapine levels: monitor and adjust in the first weeks", "Ignore — nicotine is irrelevant to clozapine", "Stop clozapine"],
      correctIndex: 1,
      explanation: "Loss of CYP1A2 induction raises the level substantially (sometimes 50%+) — sedation, seizures; the level review written into the file when the quit date is set.",
      afterSectionId: "high-yield",
    },
    {
      id: "nd-quiz-6",
      question: "The average weight gain after cessation, to script in advance:",
      options: ["No gain with willpower", "About 4–5 kg over months — the trade still strongly health-positive", "15–20 kg immediately", "10 kg in the first week"],
      correctIndex: 1,
      explanation: "Pre-scripted counselling (the 30-minute daily walk, the sugar-free substitutes ready) prevents the unscripted kilo from becoming the relapse excuse; weight stabilises by 6–12 months.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite India's tobacco numbers: the two forms' prevalence, the death toll, and the oral-cancer signature.", answer: "GATS lineage: about 28% of Indian adults use tobacco in some form — roughly a fifth smoking (bidis + cigarettes, bidis dominating the poor and rural) and above a fifth using smokeless forms (gutka, khaini, paan-tobacco, zarda): hundreds of millions of users and the world's largest smokeless-tobacco population. Deaths: over 1 million Indians a year attributable to tobacco — the largest single preventable cause — with the disease map running through oral cancer (India carries the world's highest oral-cavity cancer burden), heart disease, stroke, COPD and worsened tuberculosis outcomes. Globally: over a billion smokers and more than 8 million deaths a year including second-hand smoke attribution, governed by the WHO-FCTC architecture.", topic: "Epidemiology" },
    { question: "Why is nicotine's dependence-learning denser than any other substance's — one sentence with a number.", answer: "Because the dose reaches the brain in about ten seconds (faster than intravenous for practical purposes) and the act-reward pairing repeats 200+ times a day — every tea, every break, every phone call, every stress spike — so no other substance conditions so many cues per day, and while each individual cue is weak, the web is iron. The clinical translation: cue-mapping is the behavioural spine of every quit plan, and pharmacotherapy (NRT's steady nicotine without the spike, varenicline's blockade of any lapse-reward) is what makes the web survivable to unlearn.", topic: "Mechanism" },
    { question: "State the two-question minute and the single best severity question, with their interpretation.", answer: "Question one — 'Do you use tobacco?', asked explicitly of BOTH forms (smoke and chew), every patient, every contact; the gutka user answers 'no' to 'do you smoke?'. Question two — 'How soon after waking do you first use tobacco?': within 30 minutes of waking marks HIGH dependence — the single best severity question, the FTND's most informative item's logic. The minute routes the whole consultation: it finds the double epidemic, grades the dependence that sets the NRT dose, and opens the readiness conversation that decides which 5-A branch the visit takes.", topic: "Diagnosis" },
    { question: "Name the 5-As and attach one Indian detail to each.", answer: "ASK — every patient, every contact, both forms (the smokeless half that 'do you smoke?' loses). ADVISE — personal, specific, brief: 'your mouth fibrosis, your chest, your heart and this tobacco — quitting is the single best thing for it', never the generic lecture. AGREE — a quit date within two weeks, a real date chosen by the patient, plus the household's role: the paan-shop route change and the tobacco-free-home declaration. ASSIST — the medicines (NRT patch + gum/lozenge, varenicline, bupropion after the seizure screen) and the written cue-map with the packed substitute box. ARRANGE — follow-up within the first week (the withdrawal peak), again at 4 weeks, then monthly, with the named relapse plan: 'call when the craving wins a day'.", topic: "Management" },
    { question: "NRT, varenicline, bupropion: a mechanism one-liner and one standing caution each.", answer: "NRT: steady nicotine replacement without the arterial spike — withdrawal removed while the cue-reward loop is unlearned; the backbone, with patch + gum/lozenge combination outperforming single-form. CAUTION: under-dosing in the bidi and heavy users (dose by dependence) plus the 'no smoking while on the patch' teaching and the park-and-chew technique. VARENICLINE: partial agonist at the α4β2 nicotinic receptor — craving reduced AND the reward of any lapse blocked; the strongest single agent, started a week before the quit date. CAUTION: the honest psychiatric conversation (the EAGLES-era evidence softening the old black-box-era warning — mood monitored anyway) and the nausea/insomnia counselling. BUPROPION: noradrenergic-dopaminergic antidepressant action reducing craving, quit odds doubled; useful where depression co-travels. CAUTION: the seizure set — contraindicated with epilepsy, eating disorders and abrupt alcohol or benzodiazepine withdrawal, with blood pressure cautioned.", topic: "Pharmacology" },
    { question: "The smokeless-tobacco adaptation: three cue-specific strategies.", answer: "(1) THE POCKET-ENVIRONMENT CHANGE: the ever-present packet is the chewer's equivalent of the smoker's lighter — the water bottle, the cardamom or fennel substitute, carried in the same pocket the packet lived in. (2) THE AFTER-MEAL AND WORKPLACE SLOTS: smokeless needs no smoke break (the office chew), so the cue-map is denser than the smoker's — each slot gets its written substitute and the workplace chew-breaks are restructured. (3) NRT GUM WORKS FOR CHEWERS TOO — replacing both the nicotine and the oral act, the one medicine that treats both halves of the habit at once. Over all three sits the discipline: the oral examination at every follow-up — the submucous fibrosis/leukoplakia screen with ENT/dental referral for any lesion, India's highest-stakes follow-up.", topic: "Indian practice" },
    { question: "The CYP1A2–clozapine interaction: say the rule in two sentences.", answer: "Tobacco smoke — not nicotine itself — induces the liver enzyme CYP1A2, which clears clozapine, olanzapine and theophylline-type drugs; a patient who quits smoking can therefore see levels rise substantially (sometimes 50%+ clinically meaningful rises), arriving as sedation and, with clozapine, seizures. The rule: quitting is still right — the medicine levels are reviewed and adjusted in the first weeks of abstinence, written into the file at the moment the quit date is set, not discovered in hindsight.", topic: "Psychopharmacology" },
    { question: "Rehearse the weight script and the relapse script in family language.", answer: "WEIGHT: 'The average person gains about 4–5 kg over the months after quitting — that is the body recovering, and the trade is strongly health-positive; we start the 30-minute daily walk and the sugar-free substitutes (gum, makhana — not sweets) from day one, and the weight usually stabilises within 6–12 months. This kilo is not the disaster; it is the receipt.' RELAPSE: 'A lapse is a mapped event, not a failed identity — the day it happens, we log which cue won, adjust that one spot in the plan, and continue; the craving waves weaken over the weeks and months, each survived wave weaker than the last. One bad night wastes nothing — the plan is arithmetic, not perfection.'", topic: "Counselling" },
  ],
  faqs: [
    { question: "Are bidis safer than cigarettes?", answer: "No: bidis deliver comparable-or-worse tar and nicotine with worse outcomes in Indian cohorts — the smaller stick is not a smaller risk." },
    { question: "Is gutka or khaini really as bad as smoking?", answer: "For the mouth, it is worse: India's oral-cancer burden is the world's largest, and the mouth-burning and reduced-opening changes are visible years before cancer. For the heart and lungs, smokeless tobacco also raises risks. Different routes, same destination." },
    { question: "Can I just cut down instead of quitting?", answer: "Cutting down helps a little but usually slides back — each remaining dose re-trains the cue-web. The health payoff is steeply at the full quit; the plan's job is making that survivable with medicines." },
    { question: "Isn't the nicotine in the patch the same poison?", answer: "Nicotine is the dependence chemical, but the tar, carbon monoxide and carcinogens are the killers. The patch gives steadier, lower nicotine with none of the smoke — the methadone logic done honestly, for weeks, then tapered." },
    { question: "Will I gain weight?", answer: "On average 4–5 kg over months, and the trade is strongly health-positive. With a 30-minute daily walk and prepared substitutes most of it stabilises — scripted in advance, because the unscripted kilo becomes the relapse excuse." },
    { question: "He has schizophrenia — is quitting too much for him to handle?", answer: "Not only manageable but the single biggest life-extender available to him: tobacco is a leading cause of the early-death gap. The quit is planned around clinical stability, with the same medicines — and his clozapine or olanzapine dose reviewed as the smoking stops." },
    { question: "What about vapes to quit?", answer: "E-cigarettes are not licensed cessation medicines in India — regulated out of sale — and the evidence for quit-effectiveness is genuinely contested. The proven path is the patch/gum/varenicline package, cheaper and legal here." },
    { question: "The craving still comes months later — is something wrong?", answer: "Nothing is wrong: cue-waves weaken over months but never fully vanish for some; each survived wave is weaker than the last. The plan's arithmetic is patience, not perfection." },
    { question: "Can I smoke while wearing the patch?", answer: "The teaching is no smoking while on the patch — it provides the steady background nicotine, and adding smoke on top stacks exposure without benefit. If a lapse happens, the patch stays on and the plan continues: the lapse is mapped, not punished." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Fiore MC et al. — the US Public Health Service 'Treating Tobacco Use and Dependence' guideline lineage (the 5-A structure and the pharmacotherapy combination evidence)" },
      { source: "WHO — the tobacco fact-sheet lineage and the FCTC treaty architecture (taxation, pictorial warnings, plain packaging, cessation support)" },
      { source: "COTPA and the National Tobacco Control Programme documentation, with mCessation — the Indian policy layer" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.8 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Anthenelli RM et al. (EAGLES) — the psychiatric-population varenicline safety trial that recalibrated the warning" },
      { source: "The CYP1A2–clozapine interaction literature (Schrackmann onward) — the quit-induced level rise and the monitoring rule" },
    ],
    reviews: [
      { source: "Cochrane reviews — NRT, varenicline, bupropion, cytisine and combination therapy for smoking cessation" },
      { source: "Benowitz NL — nicotine pharmacology and dependence-science reviews (the seconds-to-brain story)" },
      { source: "Heatherton TF et al. — the FTND and the time-to-first-tobacco severity marker (named, described)" },
      { source: "GATS India (2016–17 and prior rounds) — the ~28% adult prevalence, the forms and the quit-ratio data" },
      { source: "Indian oral-submucous-fibrosis and oral-cancer burden literature — the smokeless-tobacco signature" },
      { source: "Weight-gain-after-cessation meta-analyses — the ~4–5 kg average for the scripted counselling" },
    ],
    patientResources: [
      { source: "The National Tobacco Control Programme district cessation cell and the mCessation helpline — the Indian referral layer" },
      { source: "The tobacco-free home and function declaration — the family-level intervention taught in this course" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the double epidemic, the two questions, the quit plan, the weight and relapse scripts, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The two-question minute, the 5-As, the pharmacotherapy tier with mechanisms and cautions, the mouth examination.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — the CYP1A2 discipline, the smokeless adaptation, the equity layer, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The double epidemic, the two-second teacher, the two-question minute.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite India's tobacco numbers and the reason no other addiction trains so densely." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The two-second teacher, the thermostat in hours, the CYP1A2 interaction.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the unaided quit fails within a week and why the psychiatric quit raises the clozapine." },
    { number: 3, title: "Clinical Practice", description: "The two-question minute, the 5-As, the pharmacotherapy tier, the smokeless adaptation.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the five-minute consultation and prescribe the backbone tier with its cautions." },
    { number: 4, title: "Indian Context", description: "The bidi equity problem, the paan-culture declaration, the policy frame.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the personal Advise, the cost comparison and the chewer's mouth examination." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the cessation essay cold and recite the CYP1A2 rule without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.8 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "GATS India (Global Adult Tobacco Survey, 2016–17 and prior rounds) — the ~28% adult prevalence, the forms and the quit-ratio data", sourceType: "government", year: "2016–17", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO — the tobacco fact-sheet lineage: the global 8-million death attribution and the FCTC architecture", sourceType: "who", year: "2020s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Fiore MC et al. — the US Public Health Service 'Treating Tobacco Use and Dependence' guideline lineage (the 5-A structure and the pharmacotherapy combination evidence)", sourceType: "guideline", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Cochrane reviews — NRT, varenicline, bupropion, cytisine and combination therapy for smoking cessation", sourceType: "systematic-review", year: "updated regularly", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Anthenelli RM et al. (EAGLES trial) — the psychiatric-population varenicline safety evidence that recalibrated the warning", sourceType: "trial", year: "2016", dateReviewed: "2026-09-29" },
    { id: "S7", source: "The CYP1A2–clozapine interaction literature (Schrackmann onward) — the quit-induced level rise and the monitoring rule", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "COTPA and the National Tobacco Control Programme documentation — the Indian policy layer, with mCessation", sourceType: "indian-guideline", year: "2003 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Indian oral-submucous-fibrosis and oral-cancer burden literature — the smokeless-tobacco signature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Benowitz NL — nicotine pharmacology and dependence-science reviews (the seconds-to-brain story)", sourceType: "review", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Heatherton TF et al. — the FTND and the time-to-first-tobacco severity marker (named, described)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Weight-gain-after-cessation meta-analyses — the ~4–5 kg average for the scripted counselling", sourceType: "meta-analysis", year: "2010s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The double epidemic: about 28% of Indian adults use tobacco in some form (GATS lineage) — roughly a fifth smoking (bidis + cigarettes, bidis dominating the poor and rural) and above a fifth using smokeless forms (gutka, khaini, paan-tobacco, zarda); India holds the world's largest smokeless-tobacco population.", grade: "established", sources: ["S2"] },
    { text: "The death attribution: over 1 million Indian deaths a year attributable to tobacco — the largest single preventable cause; globally more than 8 million deaths a year including second-hand smoke attribution, among over a billion smokers, under the WHO-FCTC policy architecture.", grade: "established", sources: ["S2", "S3"] },
    { text: "The two-second teacher: nicotine reaches the brain in about ten seconds of a puff — faster than intravenous for practical purposes — and the act-reward lesson repeats 200+ times a day, conditioning the densest cue-web of any addiction.", grade: "established", sources: ["S1", "S10"] },
    { text: "The thermostat-in-hours: receptor adaptation means withdrawal (irritability, craving, poor concentration, hunger) arrives within hours of the last dose — the reason the average unaided quit attempt fails within a week while the health benefits stay invisible.", grade: "established", sources: ["S1", "S10"] },
    { text: "The two-question minute: 'Do you use tobacco?' (both forms) and 'How soon after waking?' — first tobacco within 30 minutes of waking marks high dependence; the FTND's most informative item's logic; the FTND and its smokeless adaptations named as the severity instruments, with exhaled CO where available.", grade: "established", sources: ["S11", "S4"] },
    { text: "The 5-A structure (Ask–Advise–Agree–Assist–Arrange) as the delivery vehicle of population-level cessation (the Fiore/USPHS lineage): ask every patient every contact both forms; advise personally and specifically; agree a quit date within 2 weeks chosen by the patient; assist with medicines and a behavioural plan; arrange follow-up within the first week, at 4 weeks, then monthly.", grade: "established", sources: ["S4"] },
    { text: "The pharmacotherapy tier doubles or triples quit odds: NRT the backbone with patch + gum/lozenge combination outperforming single-form and dosing by dependence; varenicline the strongest single agent (partial α4β2 agonist — craving reduced, lapse-reward blocked, started a week before the quit date); bupropion reducing craving with its seizure contraindications; cytisine the plant-derived ultra-cheap cousin.", grade: "established", sources: ["S4", "S5"] },
    { text: "The EAGLES-era varenicline safety position: the old black-box-era warning softened by subsequent trial evidence in psychiatric populations — quoted honestly, with mood monitored anyway.", grade: "established", sources: ["S6"] },
    { text: "The CYP1A2 alert: tobacco smoke (not nicotine itself) induces CYP1A2, clearing clozapine, olanzapine and theophylline-type drugs; quitting can raise clozapine/olanzapine levels substantially (sometimes 50%+ clinically meaningful rises) — sedation, seizures (clozapine); medicine levels reviewed in the first weeks of abstinence.", grade: "established", sources: ["S7"] },
    { text: "The co-addiction rule: psychiatric patients and other-substance users smoke at 2–3× the general rate with heavier consumption and shorter lives — tobacco a leading cause of the 10–20-year mortality gap in schizophrenia; tobacco treated in parallel, never sequentially, inside every psychiatric and addiction plan, staged with clinical stability.", grade: "established", sources: ["S1"] },
    { text: "The smokeless signature: oral submucous fibrosis (burning mouth, reduced mouth opening — a pre-malignant lesion visible in any OPD), leukoplakia and oral cancer; India carries the world's highest oral-cavity cancer burden; every chewer's mouth examined with ENT/dental referral for any lesion — the highest-stakes follow-up in Indian medicine.", grade: "established", sources: ["S9"] },
    { text: "The weight script: average post-cessation weight gain ~4–5 kg over months — the trade strongly health-positive; scripted in advance (the 30-minute daily walk, prepared sugar-free substitutes) because the unscripted kilo becomes the relapse excuse; weight stabilises by 6–12 months with activity.", grade: "established", sources: ["S12"] },
    { text: "The Indian policy and cost frame: COTPA (public-place smoking ban, pictorial warnings, advertising ban), state-level gutka bans (patchy), GATS surveillance, the NTCP district cessation cells and mCessation — with generic NRT affordable (approx ₹150–500/week for gum, similar for patches, 2026) and often cheaper than the habit it replaces.", grade: "supported", sources: ["S8", "S2"] },
  ],
};
