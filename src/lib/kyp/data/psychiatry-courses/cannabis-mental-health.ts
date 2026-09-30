import type { PsychiatryCourse } from "./types";

/**
 * CANNABIS & MENTAL HEALTH — canonical Psychiatry course (batch 8,
 * Group B — substance use disorders). KYP-written learning content
 * built ON the canonical note (download/kyp-notes/
 * cannabis-mental-health.md — untouched foundation), re-researched
 * against the UNODC World Drug Report lineage, the Di Forti potency
 * evidence, the Moore Lancet-era meta-analysis, the Volkow/NIDA
 * adolescent-brain literature, the Allsop withdrawal
 * characterisation, the Zammit relapse data, the EMCDDA
 * synthetic-cannabinoid tier and the AIIMS 2019 national survey.
 *
 * Drug routes: honest absence — no approved pharmacotherapy exists
 * for cannabis use disorder; drugLinks is deliberately empty. The
 * modest/negative trial signals (N-acetylcysteine, gabapentin-type,
 * cannabinoid-adjacent) are taught here by name and recorded in
 * contentGaps; the SSRI-for-comorbid-anxiety rider is taught inside
 * the case, not drug-linked, keeping the no-pharmacotherapy
 * teaching clean.
 */
export const cannabisMentalHealthCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "cannabis-mental-health",
  title: "Cannabis & Mental Health",
  shortName: "Cannabis",
  kind: "disorder",
  category: "Substance Use Disorder",
  groupLetter: "B",
  groupName: "Substance use disorders",
  learningPath: ["Psychiatry", "Substance Use Disorders", "Cannabis & Mental Health"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Occasional adult use is low-risk — daily, high-potency, adolescent-onset use is not",

  summary:
    "Cannabis is the most-used illicit drug and India's most-normalised one, with risks that depend on dose, potency and age of onset. Daily high-potency use from adolescence raises psychosis and dependence risk, and no approved pharmacotherapy exists.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Give the balanced risk picture — occasional adult traditional-potency use versus frequent adolescent high-potency use — without propaganda or minimisation, and explain why the distinction protects the clinical alliance.",
    "Describe cannabis intoxication, its pleasant and its ugly faces (panic, depersonalisation, paranoid thoughts, the white-out faint), and the driving-impairment point that outlasts the subjective 'fine'.",
    "Diagnose cannabis withdrawal and reframe the 'lazy adolescent' presentation — the commonest Indian cannabis misdiagnosis.",
    "Explain the cannabis–psychosis relationship as a dose-response, gene×environment interaction, and answer the 'did cannabis cause the schizophrenia?' question honestly.",
    "Recognise the two under-recognised classics: cannabinoid hyperemesis syndrome (the hot-shower pearl) and the amotivational grey zone.",
    "Recognise synthetic cannabinoid toxicity as the emergency door — full CB1 agonists, dose-unpredictable sachets, poison-team follow-up.",
    "Build the treatment plan: the two-sided script, motivational interviewing, contingency structures, the family contract, structured reduction and comorbidity treatment — with the honest no-pharmacotherapy table.",
    "Counsel the schizophrenia family ('he smokes a little, is it okay?') with the relapse-doubling data, and address Indian realities: the NDPS frame, bhang normalisation, the school edibles/vape layer, and the camp-versus-family-programme argument.",
  ],
  quickFacts: [
    { label: "The two-sided truth", value: "Low risk ≠ no risk; high risk ≠ inevitable", detail: "Occasional adult use of traditional-potency cannabis is genuinely low-risk — the honest concession that keeps the alliance; modern high-potency, daily, adolescent-onset use multiplies psychosis, dependence and academic-collapse risk — no propaganda, no denial" },
    { label: "The global scale", value: "220 million past-year users", detail: "The most-used illicit substance on earth — roughly 4% of the global adult population; India's most-normalised illegal drug, sitting somewhere between religion, recreation and denial" },
    { label: "The dependence arithmetic", value: "1 in 10 overall; 1 in 6 adolescent onset", detail: "Roughly one in ten users develop dependence overall, closer to one in six starting in adolescence — the tolerance-withdrawal-failed-stops triad that satisfies the addiction definition" },
    { label: "The India number", value: "3% past-year adult use", detail: "Ganja/charas use beyond legal bhang at about 3% of adults — with the burden concentrated in urban young men and street youth, the group where dependence lives" },
    { label: "The volume knob", value: "CB1 and anandamide", detail: "The brain's own fine-tuner of mood, memory, appetite and reward, speaking in short-range whispers (anandamide-type molecules); THC shouts through the same channel, and the system turns itself down — tolerance while using, withdrawal on stopping" },
    { label: "The unfinished building", value: "Prefrontal construction until ~25", detail: "Judgement, planning and motivation still under construction, the endocannabinoid wiring part of the build — daily THC during these years double-locks the scaffolding, and the addiction machinery, still wet cement, sets around the drug" },
    { label: "The psychosis interface", value: "Doubles relapse in schizophrenia", detail: "Comorbid use in established schizophrenia roughly doubles relapse rates, worsens positive symptoms and undermines adherence — the single most actionable fact for psychosis families" },
    { label: "The hot-shower pearl", value: "Hyperemesis", detail: "The daily long-term user with years of 'recurrent gastritis' — cyclical vomiting classically relieved by hot showers; cessation the only real cure; the casualty classic nobody asks about" },
    { label: "The emergency door", value: "Synthetic cannabinoids", detail: "Street 'spice'-type sachets: full CB1 agonists with unpredictable doses — severe agitation, seizures, psychosis, hyperthermia, arrhythmias; a genuinely toxic tier the plant never contained; poison-team follow-up" },
  ],
  knowledgeGraph: [
    { label: "Substance Use", type: "condition", href: "/psychiatry/substance-use-overview/", note: "The framework this course is the two-sided member of — the reward capture cannabis genuinely produces (1 in 10) against the propaganda that inflated it" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The illness cannabis can precipitate earlier and colder in vulnerable brains, and whose relapse rates the ongoing use roughly doubles — the antipsychotic logic the psychosis door borrows" },
    { label: "Acute & Transient Psychotic Disorders", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "The toxic-versus-primary distinction the 4–6 week abstinence re-assessment rule polices" },
    { label: "Stimulant Use Disorders", type: "condition", href: "/psychiatry/stimulant-use-disorders/", note: "The sister psychotomimetic course — the shared 4–6 week re-assessment rule and the stimulant-versus-cannabis psychosis contrasts" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "The comorbidity the joint was quieting — treating the rider is relapse prevention (the case's CBT-plus-SSRI tier)" },
    { label: "Cannabis", type: "condition", href: "/substances/cannabis", note: "The substance page — the plant whose potency arithmetic this whole course teaches" },
    { label: "Anandamide", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The brain's own bliss-whisper the THC shout drowns — the volume-knob story's native molecule" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The salience machinery the high-potency door switches on — meaning made too bright, coincidences made messages" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The unfinished building — judgement, planning and motivation under construction until roughly 25" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The memory-filing floor CB1 fine-tunes — the immediate-memory clouding of the high and the working-memory thinning of heavy use" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the two-sided truth, plus one emergency divergence. The volume knob and the filament: the CB1 receptor is the brain's own fine-tuner of mood, memory, appetite and reward, speaking through its own cannabis-like molecules (anandamide-type endocannabinoids) as short-range retrograde whispers. THC is a partial agonist that shouts through the same channel — relaxation, time-warping, hunger, and at dose, anxiety and psychotomimetic effects. The system adapts by turning down its own production and sensitivity, so without the drug the whispering system is quiet: flat mood, irritability, poor sleep, lost appetite, craving — that is cannabis withdrawal, real, physical and week-limited. The unfinished building: the prefrontal cortex (judgement, planning, motivation) is under construction until roughly 25, and its endocannabinoid wiring is part of that construction; daily THC during the building years is like double-locking the scaffolding — learning, motivation and emotional regulation take the hit, and the addiction machinery, still wet cement, sets around the drug (hence 1 in 6 versus 1 in 10). The psychotic diathesis door: in brains carrying vulnerability (family history, early subtle signs), high-potency THC does not merely relax — it can switch on the dopamine salience machinery: meaning becomes too bright, coincidences become messages, perception loosens. For most it passes with the high; for the vulnerable, with dose and repetition, it can precipitate the illness years earlier and colder. The divergence: synthetic cannabinoid street products are full CB1 agonists sprayed into dose-unpredictable sachets — a genuinely toxic tier (severe agitation, seizures, psychosis, hyperthermia, hypertension, arrhythmias) that plant cannabis never reaches.",
    steps: [
      "The whisper and the shout: anandamide-type endocannabinoids are the brain's own short-range retrograde messengers at CB1, fine-tuning mood, memory, appetite and reward; THC, a partial CB1 agonist, shouts through the same channel — relaxation, time distortion, appetite, and at dose, anxiety and psychotomimetic effects.",
      "The volume knob turns down: chronic CB1 stimulation makes the system downregulate its own production and receptor sensitivity — tolerance while using (more drug for the same effect).",
      "The whisper system goes quiet without the drug: flat mood, irritability, poor sleep, lost appetite, craving, headaches — cannabis withdrawal, real and physical, starting day 1–3, peaking day 2–6, easing over 1–3 weeks.",
      "The unfinished building: prefrontal maturation runs until roughly 25 with endocannabinoid wiring part of the construction; daily THC during the building years hits learning, motivation and emotional regulation while the addiction machinery, still wet cement, sets around the drug — the adolescent 1-in-6 dependence arithmetic.",
      "The psychotic diathesis door: in vulnerable brains high-potency THC switches on the dopamine salience machinery — meaning too bright, coincidences becoming messages, perception loosening; transient for most, persistent and illness-precipitating in the heavy, vulnerable, early-onset user (the gene×environment multiplication, family history the usable screening variable).",
      "The synthetic divergence: street 'spice'-type products are full CB1 agonists in dose-unpredictable sachets — severe agitation, seizures, psychosis and cardiac events: the emergency tier, poison-team follow-up, not 'cannabis care'.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the unfinished building)", role: "Judgement, planning and motivation under construction until roughly 25, its endocannabinoid wiring part of the build — daily THC during these years double-locks the scaffolding; the amotivational grey zone's address.", grade: "established" },
    { id: "hippocampus", name: "Hippocampus (the memory-filing floor)", role: "CB1-dense memory machinery — the immediate-memory and attention clouding during effect, and the attention/working-memory thinning of heavy use that largely recovers over weeks-months of abstinence (slower and less complete after adolescent onset).", grade: "established" },
    { id: "nucleus-accumbens", name: "Nucleus accumbens (the reward machinery's capture point)", role: "The mesolimbic territory the chronic exposure gradually claims — the dependence machinery that sets around the drug in the still-wet adolescent cement (1 in 6).", grade: "supported" },
    { id: "hypothalamus", name: "Hypothalamus (the appetite dial)", role: "The appetite-stimulation address of CB1 signalling — the munchies of intoxication and, in mirror image, the appetite loss with weight drop of withdrawal.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the panic dial)", role: "The anxiety face of the dose-dependent ugly side — panic attacks and paranoid thoughts in the anxious or novice user, and the amygdala-driven wariness of the withdrawal week.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Anandamide", symbol: "AEA", role: "The brain's own bliss-whisper — the endocannabinoid (its name from the Sanskrit for bliss) whose short-range retrograde signalling at CB1 the THC shout drowns; the volume-knob story's native molecule.", grade: "established" },
    { name: "2-AG (2-arachidonoylglycerol)", symbol: "2-AG", role: "The endocannabinoid system's second, quantitatively dominant voice — the same retrograde brake THC usurps; the co-messenger whose downregulation shares the withdrawal story.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The salience machinery the high-potency door switches on in vulnerable brains — meaning too bright, perception loosened; the shared final pathway with the schizophrenia note's story.", grade: "established", drugConnection: "The antipsychotic tier that treats cannabis-associated psychosis has no KYP drug lessons — the logic taught in the Schizophrenia course and this course's psychosis door." },
    { name: "GABA", symbol: "GABA", role: "CB1 sits on the presynaptic terminals of GABA neurons; THC's net disinhibitory effect on the reward and salience circuitry rides partly through this brake.", grade: "supported" },
    { name: "Glutamate", symbol: "Glu", role: "The other arm of the retrograde brake — the excitation-inhibition balance the endocannabinoid system fine-tunes and the chronic exposure disturbs; the cognitive clouding's chemistry.", grade: "supported" },
  ],
  pathways: [
    {
      id: "volume-knob-pathway",
      name: "The volume knob (chronic CB1 stimulation to the week of 'attitude')",
      steps: [
        { label: "The whisper system", detail: "Anandamide-type endocannabinoids fine-tune mood, memory, appetite and reward as short-range retrograde whispers at CB1" },
        { label: "The shout", detail: "THC, a partial CB1 agonist, floods the same channel daily — relaxation, time-warping, hunger; tolerance building as the effect demands more drug" },
        { label: "The adaptation", detail: "The system turns down its own production and receptor sensitivity — the volume knob defending itself against the permanent shout" },
        { label: "The silence without the drug", detail: "Stopped use leaves the whisper system quiet: flat mood, irritability, poor sleep, lost appetite, craving — cannabis withdrawal, week-limited and real" },
      ],
      clinicalManifestation: "The 17-year-old, three weeks after his vape pens were confiscated, 'having attitude' — the household reading a neurological week as a character flaw.",
      grade: "established",
    },
    {
      id: "unfinished-building-pathway",
      name: "The unfinished building (daily THC on the pre-25 prefrontal cortex)",
      steps: [
        { label: "The construction site", detail: "The prefrontal cortex builds judgement, planning and motivation until roughly 25 — the endocannabinoid wiring part of the construction" },
        { label: "The scaffolding double-locked", detail: "Daily THC during the building years — learning, motivation and emotional regulation take the hit" },
        { label: "The wet cement sets around the drug", detail: "The addiction machinery forms with the drug inside it — 1 in 6 adolescent-onset users dependent versus 1 in 10 overall" },
        { label: "The grey zone", detail: "Apathy, lost initiative, blunted ambition, academic and vocational slide — the amotivational presentation of heavy chronic young use" },
      ],
      clinicalManifestation: "The bright 15-year-old who at 18 cannot start anything — the marks sliding, the tuition fees wasted, the bedroom curtains drawn at noon.",
      grade: "supported",
    },
    {
      id: "diathesis-pathway",
      name: "The psychotic diathesis door (high-potency THC in the vulnerable brain)",
      steps: [
        { label: "The loaded background", detail: "Family history of psychosis or early subtle signs — the gene×environment multiplication the AKT1/COMT-type literature maps" },
        { label: "The door opens", detail: "High-potency THC switches on the dopamine salience machinery — meaning too bright, coincidences becoming messages, perception loosening" },
        { label: "The transient face", detail: "For most, it passes with the high — the toxic psychosis that clears with the drug" },
        { label: "The persistent face", detail: "With dose and repetition in the vulnerable: cannabis-associated persistent psychosis — the illness precipitated years earlier and colder; in established schizophrenia, use roughly doubles relapse" },
      ],
      clinicalManifestation: "The 19-year-old engineering student, daily high-potency user since 16, reading 'signals' into classmates' messages and hearing 2 a.m. voices.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "withdrawal-onset", time: "Day 1–3 after stopping", title: "The syndrome starts", description: "Irritability, anxiety, craving and headaches arrive as the turned-down CB1 system stays quiet — the volume knob's silence beginning its week; the family already reading it as attitude.", phase: "onset" },
    { id: "withdrawal-peak", time: "Day 2–6", title: "The peak: the strange-dream week", description: "Insomnia with strange vivid dreams, appetite loss with weight drop, craving at its loudest — the week the household punishes as laziness and the clinician names as withdrawal; brief symptomatic cover where misery demands.", phase: "peak" },
    { id: "withdrawal-ease", time: "Easing over 1–3 weeks", title: "The dated end", description: "Sleep reorganises and the appetite's return by week 3 is the signpost — the dated end scripted in advance so the alliance survives the week; the contingency contract carrying the future.", phase: "recovery" },
    { id: "cognition-thaw", time: "Weeks to months of abstinence", title: "The cognition thaw", description: "Attention and working-memory thinning recover over weeks-months of abstinence — adolescent-onset recovery slower and less complete, the unfinished building's lingering scaffold.", phase: "recovery" },
    { id: "psychosis-window", time: "The 4–6 week re-assessment", title: "The label parked, the danger treated", description: "Where the psychosis picture is ambiguous, the re-diagnosis at 4–6 weeks of monitored abstinence — symptoms resolving with the drug point to the toxic door; persisting symptoms to the first-episode pathway.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Around 220 million past-year users — the most-used illicit substance on earth, roughly 4% of the global adult population. About 1 in 10 users develop dependence overall, rising to about 1 in 6 with adolescent onset. High-potency markets (skunk-type products) have shifted the risk curve: in those markets, daily high-potency users show the strongest psychosis associations.",
    indianPrevalence: "About 3% of adults used cannabis in the past year (ganja/charas beyond legal bhang), with higher rates among urban young men and street youth — the group where the dependence burden concentrates. The cultural layering matters: bhang (legal, festival-normalised) builds permissive attitudes; charas and ganja carry religious-mystical narratives; vapes, edibles and semi-commercial oils reach school and college populations who would never touch a chillum; synthetic cannabinoid street products have appeared in urban seizure data and casualty presentations — the emergency tier.",
    lifetimeRisk: "Roughly 1 in 10 users develop dependence overall; 1 in 6 with adolescent onset — tolerance, withdrawal (irritability, insomnia, appetite loss, craving) and failed attempts to stop satisfying the definition.",
    genderRatio: "Male-predominant use in every survey lineage; the Indian burden concentrates in urban young men and street youth.",
    ageOfOnset: "Onset concentrated in adolescence and the early twenties — precisely the age band that defines the risk arithmetic (the pre-25 brain, the 1-in-6 dependence rate, the psychosis multiplier).",
    indianNotes: "The two survey truths the clinician holds together: the population number is modest (3% past-year), but the clinical load arrives young, male, urban and high-potency — the school-college vape and edible layer that never touches the chillum and therefore never enters the ceremony-language history.",
  },
  etiology: [
    { category: "biological", factor: "The pharmacological multipliers", details: "Potency (THC content — modern bred products many times the village varieties), route (smoking/vaping onset speed), frequency (daily versus occasional), and the CBD content — the antipsychotic-adjacent buffer largely bred out of high-THC products." },
    { category: "biological", factor: "The developmental window", details: "Age of onset: the pre-25 brain is still building its prefrontal control and endocannabinoid maturation; an early start multiplies every risk — the unfinished building." },
    { category: "genetic", factor: "The loaded background", details: "Family history of psychosis (the interaction multiplicative); the AKT1/COMT-type gene-interaction literature exists — the clinical translation being that family history is the usable screening variable." },
    { category: "psychological", factor: "The relief-seeking loop", details: "Self-medication for social anxiety, insomnia, ADHD-type restlessness and trauma — the 'quiet-the-mind' answer that must be tested, not assumed: treating the rider is relapse prevention when the hypothesis is true." },
    { category: "social", factor: "The normalisation structures", details: "Peer normalisation; availability; the 'harmless herb' myth absorbed from adult culture; the edibles/vape tier's marketed invisibility; the studying-from-home era's unstructured days and the evening friend-circle triggers." },
  ],
  symptomClusters: [
    {
      category: "1. Intoxication — the pleasant and the ugly",
      symptoms: ["Pleasant: relaxation, laughter, sensory enhancement, time distortion, appetite", "Ugly (dose, inexperience, anxiety-prone): panic attacks, depersonalisation/derealisation ('I am outside my body'), paranoid thoughts, nausea/vomiting, tachycardia", "The 'white-out' faint of novice orthostatic drops — the party or hostel collapse that terrifies but passes", "Cognitive: immediate memory and attention clouded during effect", "Driving impaired for hours beyond the subjective 'fine' — the road-safety point made once and clearly"],
    },
    {
      category: "2. Withdrawal — the week mistaken for attitude",
      symptoms: ["Irritability (the household's word: 'attitude')", "Anxiety", "Insomnia with strange vivid dreams", "Appetite loss with weight drop", "Craving", "Headaches", "Timeline: starting day 1–3, peaking around day 2–6, easing over 1–3 weeks — the IAAC mnemonic (Irritability, Anxiety, Appetite loss, Craving, plus the sleep disturbance)"],
    },
    {
      category: "3. The grey zone — the amotivational presentation",
      symptoms: ["Apathy and lost initiative", "Blunted ambition", "Academic and vocational slide — the marks, the attendance, the abandoned applications", "The 'amotivational' presentation of heavy chronic adolescent use — a functional signature, not a moral one"],
    },
    {
      category: "4. The chronic body",
      symptoms: ["Chronic bronchitis (the smoking route)", "Cannabinoid hyperemesis syndrome: the paradoxical cyclical vomiting of daily long-term users, classically relieved by hot showers — the exam pearl, frequently missed in casualty as 'gastritis' for years", "Cognition: attention and working-memory thinning during heavy use, largely recovering over weeks-months of abstinence (adolescent-onset recovery slower and less complete)"],
    },
    {
      category: "5. The psychosis interface",
      symptoms: ["Transient toxic psychosis at high dose — clears with the drug", "Cannabis-associated persistent psychosis in heavy vulnerable users", "In established schizophrenia: use roughly doubles relapse rates, worsens positive symptoms, and undermines medication adherence"],
    },
    {
      category: "6. The synthetic door — the emergency tier",
      symptoms: ["Severe agitation out of all proportion to 'cannabis'", "Seizures", "Psychosis, often dense", "Hyperthermia and hypertension", "Arrhythmias and cardiac events — full CB1 agonism, dose-unpredictable sachets: worse than anything the plant produces"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 (paraphrased)",
      code: "The severity-graded single-disorder logic + the withdrawal codification",
      criteria: [
        "The severity-graded single-disorder logic applied to cannabis — with frequency, age-of-onset and potency recorded as the risk modifiers that drive every counselling decision.",
        "The DSM-5 cannabis withdrawal codification (paraphrased): heavy prolonged use stopped, then a week-scale syndrome of irritability/anger, anxiety, sleep difficulty with strange vivid dreams, appetite loss, and physical symptoms (headaches among them) — the IAAC mnemonic's content, producing clinically significant distress.",
        "The quantified history: grams/₹ per week, the product and its potency (vape oil, ganja, charas, edibles), age at first use, days per month, the longest break and why it ended, and the academic/work function trajectory.",
      ],
      duration: "Withdrawal: day 1–3 onset, day 2–6 peak, easing over 1–3 weeks; the disorder itself: the chronic course the severity grading tracks.",
      indianNote: "The withdrawal diagnosis made in the 'laziness/attitude' presentation of stopped-using adolescents: irritability + insomnia + appetite loss + craving in the first weeks of abstinence = withdrawal, not character — the single highest-yield reframe in Indian adolescent psychiatry.",
    },
    {
      system: "The screens and rule-outs",
      code: "Two-directional screening + the three classics",
      criteria: [
        "Screen every young psychosis patient for cannabis use, with family collateral — and screen every heavy user's family history of psychosis: the two-directional rule, cheap and counselling-changing on both sides.",
        "Hyperemesis rule-out: the daily long-term user with recurrent 'gastritis' — ask the hot-shower question; cannabinoid hyperemesis syndrome, cessation the only cure.",
        "Panic rule-out: first panic attacks in the hours after use = cannabis panic until proven otherwise (the timeline tells); primary panic disorder declares itself independent of use.",
        "Synthetic product history in severe or odd toxicity — asked in street-drug language ('sachets? spice-type? what was it sold as?'), not brand or ceremony language.",
      ],
      duration: "The re-assessment discipline: where the psychosis picture is ambiguous, re-diagnose at 4–6 weeks of abstinence — the same rule as the stimulant note.",
      indianNote: "The school-college layer is invisible to ceremony-language histories — 'gummies? oils? pens?' is the dialect that finds it.",
    },
  ],
  severityScales: [
    {
      name: "Pot-Pot-Freq-FHx",
      fullName: "The four-multiplier risk ladder",
      measures: "Where a given user sits between the genuinely low-risk occasional-adult pattern and the full-multiplication high-risk profile.",
      ranges: [
        { min: 0, max: 0, severity: "Occasional adult, traditional potency", action: "The genuinely low-risk tier — the honest concession that keeps the alliance; counselling framed on keeping the pattern occasional, adult and low-potency, with the driving-impairment point made once and clearly" },
        { min: 1, max: 2, severity: "One to two multipliers present", action: "The two-sided script delivered early and honestly; the quantified history taken; the rider the use is quieting looked for and treated" },
        { min: 3, max: 4, severity: "The full multiplication: potency, early start, frequency, family history", action: "The high-risk arithmetic named plainly — psychosis risk doubling-to-quadrupling, dependence at the 1-in-6 rate, academic collapse; the structured family programme begun, the contingency contract written" },
      ],
      indianNote: "The multipliers are the answer to 'even sadhus use it': dose, age, potency and family history — not the sadhu.",
    },
    {
      name: "The withdrawal-week map",
      fullName: "Cannabis withdrawal timeline staging",
      measures: "Where the stopped-using patient stands in the week-limited course families mistake for attitude.",
      ranges: [
        { min: 0, max: 0, severity: "Day 1–3: onset", action: "Irritability, anxiety, craving, headaches arriving as the turned-down CB1 system stays quiet — the family warned in advance that week one looks like attitude" },
        { min: 1, max: 1, severity: "Day 2–6: peak", action: "Insomnia with strange vivid dreams, appetite loss with weight drop, craving loudest — supportive framing, sleep hygiene, exercise, brief symptomatic cover where misery demands" },
        { min: 2, max: 2, severity: "Weeks 1–3: easing", action: "The dated end held in view — the appetite's return by week 3 the signpost; the contingency contract and the family programme carrying the future" },
      ],
      indianNote: "The dated end scripted at the first consultation: the family told the week's shape in advance punishes the brain less and supports the plan more.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Cannabis withdrawal versus 'laziness'/attitude (and primary depression)", distinguishingFeatures: "The stopped-using adolescent with irritability, insomnia, appetite loss and craving in the first weeks of abstinence — a week-limited neurological syndrome with a dated end, against a character judgement or a mood disorder needing different treatment.", keyDifferentiator: "The timeline (days-to-weeks after stopping daily use) plus the symptom set (IAAC + strange dreams); depression lacks the dated end and the dream signature." },
    { condition: "Cannabis panic versus primary panic disorder", distinguishingFeatures: "Panic attacks, depersonalisation and paranoid thoughts during effect — the ugly face of intoxication in the anxious or novice user.", keyDifferentiator: "The timeline tells: first panic attacks in the hours after use are cannabis panic until proven; primary panic disorder declares itself independent of use." },
    { condition: "Cannabinoid hyperemesis versus 'recurrent gastritis'", distinguishingFeatures: "The daily long-term user's years of cyclical vomiting — classically relieved by hot showers, the paradoxical compulsive behaviour that is the diagnostic clue.", keyDifferentiator: "The hot-shower question ('do long showers relieve it?') — a positive answer closes the diagnosis; cessation is the only cure; the gastritis label often holds for years." },
    { condition: "Schizophrenia versus cannabis-associated psychosis", distinguishingFeatures: "Referential thinking, voices and withdrawal in a daily high-potency young user — toxic, vulnerability-driven, or the illness's first episode.", keyDifferentiator: "The 4–6 week rule: re-diagnose after 4–6 weeks of monitored abstinence — resolution points to the toxic door; persistence to the first-episode pathway; the label is never fixed at first contact on an actively using brain." },
    { condition: "The amotivational grey zone versus depression, hypothyroidism and the underachieving 'personality'", distinguishingFeatures: "Apathy, lost initiative, academic slide in the heavy young user — a functional signature of chronic use rather than a mood state.", keyDifferentiator: "The quantified use history plus the abstinence trial; the grey zone thins over weeks-months of abstinence (slower after adolescent onset) while depression responds to its own treatment." },
    { condition: "Synthetic cannabinoid toxicity versus 'strong cannabis'", distinguishingFeatures: "Severe agitation, seizures, dense psychosis, hyperthermia, hypertension, arrhythmias — toxicity out of all proportion to any plant history.", keyDifferentiator: "Full CB1 agonists in dose-unpredictable sachets — the severity pattern itself is the clue; street-drug-language history ('what was it sold as?') and poison-team follow-up." },
  ],
  management: [
    { category: "psychotherapy", name: "The two-sided counselling script — used early, used honestly", description: "'Most people who use occasionally as adults are okay — that is the truth, and pretending otherwise would cost me your trust. But you are not most people: starting early, using daily, high-potency products and our family history together change the arithmetic. The brain still being built, the withdrawal that will be mistaken for attitude, and the risk of switching on something that may not switch off — these are the facts we act on.' The script concedes the low-risk truth to buy the alliance, then names the multipliers.", whenToUse: "At the first consultation, before any plan — and again whenever the family arrives with 'even sadhus use it'.", indianContext: "The single most transferable skill in Indian adolescent substance work: the alternative to both the moral lecture (loses the boy) and the permissive shrug (loses the diagnosis)." },
    { category: "psychotherapy", name: "Motivational interviewing + contingency structures", description: "Motivational interviewing opens the door — the adolescent was sent, not referred, and confrontation loses him; contingency structures carry the evidence: verified abstinence linked to real privileges (phone, bike, allowance, college-attendance documentation) — structure, not bribery, and never surveillance dressed as care.", whenToUse: "From the first engagement for every adolescent and young adult user where change is being built.", indianContext: "The privileges are the household's existing currency — the phone and the bike are the levers the Indian family already owns; the clinician's job is to have them spent deliberately." },
    { category: "lifestyle", name: "Structured reduction for the dependent user", description: "For the user who cannot go straight to zero: a dated reduction calendar; trigger-mapping (the evening friend-circle, the hostel room, the exam panic); alternative evening architecture (gym, sport — the natural anandamide route); the family contract as in the other substance notes.", whenToUse: "Dependence established and abstinence-at-once unrealistic — the reduction calendar reviewed at every visit.", indianContext: "The evening is the Indian relapse unit — the friend-circle and the unstructured hostel room mapped explicitly, the gym or the cricket slot booked into the same hours." },
    { category: "pharmacotherapy", name: "The honest table: no approved pharmacotherapy", description: "No approved pharmacotherapy exists for cannabis use disorder — the honest table, not hidden: trials of N-acetylcysteine, gabapentin-type agents and cannabinoid-adjacent strategies show modest or negative signals; the treatment is behavioural and structural. Brief symptomatic cover where withdrawal misery demands; nothing replaces the contract.", whenToUse: "The absence stated at every plan-setting consultation — families ask for 'medicines for addiction', and the honest answer is the alliance's foundation.", indianContext: "The absence is also the cost answer: the treatment's currency is structure and follow-up, not pharmacy." },
    { category: "psychotherapy", name: "Comorbidity treatment as relapse prevention", description: "Treat the riders the self-medication was quieting — social anxiety, ADHD-type restlessness, trauma, insomnia; treating them is relapse prevention when the 'quiet-the-mind' hypothesis tests true (the hypothesis is tested, never assumed).", whenToUse: "At the 'what does it do for you?' answer — the racing-thoughts reply names the treatment.", indianContext: "The CBT-plus-SSRI tier for comorbid social anxiety in the case is the worked example: the SSRI is the rider's treatment, never the cannabis treatment — the drug tier of this course stays deliberately empty." },
    { category: "lifestyle", name: "Cannabis withdrawal management", description: "Supportive framing with the dated end (~1–3 weeks) scripted in advance; sleep hygiene; exercise; brief symptomatic cover where misery demands — and the family warned before it happens that week one looks like attitude: it is the brain, not the boy.", whenToUse: "Every stopped-using daily user — the week named, the household prepared, the contingency contract beginning as the symptoms peak.", indianContext: "The dated-withdrawal psychoeducation calendar (irritability week 1, strange dreams week 2, the appetite's return by week 3) is the Indian family's most useful single document." },
    { category: "lifestyle", name: "Hyperemesis and the synthetic door", description: "Cannabinoid hyperemesis: the under-recognised casualty presentation — cessation is the only real treatment (hot showers and capsaicin topical are the classic clues and temporising measures); look for it in the 'recurrent gastritis' of daily users. Synthetic cannabinoid toxicity: supportive emergency care, benzodiazepines for agitation and seizures, cardiac monitoring, cooling — then abstinence-focused follow-up through the poison team; these products are not 'cannabis care'.", whenToUse: "Hyperemesis: every daily long-term user with cyclical vomiting; synthetic toxicity: every odd or severe intoxication in a young user.", indianContext: "Both are casualty diagnoses in India — the hyperemesis 'gastritis' held for years, the synthetic sachet misread as 'strong weed' until the seizure or the arrhythmia." },
    { category: "psychotherapy", name: "The psychosis situations", description: "Psychosis presentations: abstinence-first alongside psychiatric care; antipsychotic treatment per the schizophrenia note's logic; re-diagnose at 4–6 weeks of abstinence where the picture is ambiguous (the same rule as the stimulant note). In established schizophrenia: the family message with numbers — use roughly doubles relapse, and the 'just a little' exemption does not survive the data; motivational work (not confrontation) plus structured alternatives, the use treated as part of the psychosis treatment plan and documented at every visit.", whenToUse: "Every young first-episode presentation with use; every schizophrenia review where use continues.", indianContext: "The two-directional rule operationalised: the young psychosis referral carries the cannabis screen, the heavy young user carries the family-history question." },
  ],
  safety: {
    redFlags: [
      "Severe agitation, seizures, chest symptoms or collapse after street 'spice'-type sachets — synthetic cannabinoid poisoning: hospital now, poison-team follow-up",
      "High-dose toxic psychosis — perception loosened, meaning too bright: quiet supervision and emergency assessment; it clears with the drug, but the danger is assessed before any label",
      "Recurrent morning vomiting in a daily long-term user, relieved by hot showers — cannabinoid hyperemesis: cessation the only cure; dehydration and electrolytes treated now",
      "The novice 'white-out' faint — the orthostatic collapse of early use: usually passes, but the injury risk is real and the first-aid reflexes matter",
      "First-episode psychosis in a daily high-potency young user — the 4–6 week abstinence re-assessment rule; the danger treated now, the label parked",
      "Established schizophrenia with ongoing use — roughly doubles relapse and undermines adherence: the use is part of the psychosis treatment plan, documented at every visit",
    ],
    urgentGuidance:
      "The order of operations: (1) the synthetic door first — severe agitation, seizures, hyperthermia or cardiac events after street sachets get emergency care (benzodiazepines for agitation and seizures, cardiac monitoring, cooling) and poison-team follow-up; (2) any first-episode psychosis gets the danger assessed and treated now, with the cannabis screen and family collateral — the schizophrenia label waits for the 4–6 week abstinence re-assessment where the picture is ambiguous; (3) the hyperemesis casualty — the hot-shower question asked, dehydration and electrolytes corrected, and cessation taught as the only cure; (4) the withdrawal week supported (dated end, sleep hygiene, exercise, brief symptomatic cover where misery demands) with the family warned in advance that week one looks like attitude; (5) the two-directional screen run at every relevant consultation — every young psychosis patient for use, every heavy young user for family history; (6) the two-sided script delivered early and honestly — the treatment's engine, not its decoration.",
  },
  drugLinks: [],
  contentGaps: [
    "N-acetylcysteine — the most-trialled pharmacotherapy candidate for cannabis use disorder, its signals modest or negative — has no KYP drug lesson; taught here by name inside the honest table, the route never invented.",
    "The gabapentin-type agent tier (trial signals modest or negative) has no KYP drug lessons; recorded here as part of the honest no-pharmacotherapy table.",
    "The cannabinoid-adjacent strategies tier the honest table names has no KYP drug lessons and no approved indication for cannabis use disorder; documented so no KYP route implies otherwise.",
    "The benzodiazepine emergency tier (agitation and seizure control in synthetic-cannabinoid toxicity; brief symptomatic cover in severe withdrawal misery) has no KYP drug lessons; the algorithms are taught here, the routes never invented.",
    "The SSRI-for-comorbid-anxiety rider (sertraline and cousins, which do have KYP lessons) is deliberately not drug-linked: this course's drug tier stays empty to keep the no-approved-pharmacotherapy teaching clean — the rider is taught inside the case and the management section, with its KYP lessons reachable through the anxiety courses.",
  ],
  patientGuide: {
    whatIsIt:
      "Cannabis (marijuana, ganja, charas, weed) is the world's most-used illegal drug and India's most-normalised one. The honest truth has two sides, and your doctor will tell you both. On one side: most people who use occasionally, starting as adults, with the traditional weaker preparations, are not harmed — the old propaganda about inevitable madness was never true. On the other side: today's products are many times stronger than the village variety, and early, daily, high-potency use in a still-developing brain (up to about 25) genuinely raises the risks of dependence (about 1 in 10 users overall, closer to 1 in 6 who start young), of psychosis in vulnerable people, and of the quiet academic and motivation collapse families call 'laziness'. Cannabis also has a real withdrawal syndrome — yes, really — that starts within days of stopping and eases over one to three weeks.",
    whatCausesIt:
      "The brain has its own cannabis-like calming-and-fine-tuning system (its star molecule is called anandamide, from the Sanskrit word for bliss). THC, the active part of cannabis, shouts through the same channel that this system whispers through. With daily use the brain defends itself by turning its own volume down — so more drug is needed (tolerance), and when the drug stops, the whisper system stays quiet for a week or two: irritability, poor sleep with strange vivid dreams, lost appetite and craving. That is withdrawal — the brain readjusting, with a dated end. The teenage brain adds its own vulnerability: the judgement-and-motivation department is still under construction until about 25, and daily THC during the construction years hits learning, drive and emotional balance — while the habit machinery itself sets around the drug.",
    symptoms:
      "During use — the pleasant face: relaxation, laughter, sharper senses, time slowing, hunger. The ugly face (especially with strong products, inexperience or anxiety): panic attacks, feeling outside your body, suspicious thoughts, nausea, a racing heart, and the brief faint of first-time users. Memory and attention stay cloudy for hours — driving is impaired long after you feel 'fine'. After stopping daily use: the withdrawal week — irritability, insomnia with strange dreams, eating little, craving, headaches. With heavy long-term use: the grey zone of lost drive and slipping academics; chronic bronchitis from smoking; and, in daily long-term users, the paradox of cannabinoid hyperemesis — repeated vomiting spells famously relieved by hot showers. Warnings needing hospital now: severe agitation, fits, chest symptoms or collapse after any street 'spice'-type sachet (those are poisons, not cannabis).",
    treatment:
      "There is no approved medicine for cannabis dependence — that is the honest answer, not a failure of effort. What works: counselling that opens the door without confrontation (motivational interviewing); a written contingency contract where verified staying-off is linked to real privileges (the phone, the bike, the allowance, the college attendance); a dated reduction calendar for those who cannot stop at once; and treatment of the problem the joint was quieting — anxiety, restlessness, insomnia, past trauma — because treating that is relapse prevention. Withdrawal needs support, not punishment: it has a dated end (one to three weeks). Hyperemesis is cured only by stopping. A psychosis that arrived with use is treated with abstinence plus proper psychiatric care, and re-assessed at four to six weeks before any long-term label.",
    selfHelp: [
      "The dated-end calendar on the wall: irritability week one, strange dreams week two, the appetite's return by week three — the family that knows the week's shape punishes the brain less.",
      "The contingency contract written and signed: verified abstinence linked to the phone, the bike, the allowance, the attendance — structure, not surveillance.",
      "The evening rebuilt: the gym, the sport, the cricket slot booked into the hours the friend-circle used to own.",
      "The product-language question asked at home and at college: 'gummies? oils? pens?' — the layer that never touches a chillum.",
      "The family-history question answered honestly before any first dose: psychosis in the bloodline is the one answer that changes the plan.",
      "The one-line philosophy: no propaganda, no denial — dose, age, potency and family history decide the risk.",
    ],
    whenToSeekHelp: [
      "Severe agitation, a fit, chest symptoms or collapse after any street sachet — hospital the same hour (synthetic cannabinoids are poison, not cannabis)",
      "Repeated morning vomiting relieved by hot showers in a daily user — hyperemesis: stopping is the cure; dehydration needs treatment now",
      "Beliefs that feel too real — messages in messages, voices — starting after heavy use: psychiatric assessment now, not after exams",
      "The withdrawal week becoming unbearable — support and brief symptomatic cover exist; punishing it as 'attitude' breaks the alliance at the moment it is needed",
      "Any thought of self-harm — immediate help (Tele-MANAS 14416, 24×7, free)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — the family distress and follow-up channel the exam corner itself names",
      "The district hospital / DMHP psychiatric OPD — where the structured family programme (the effective unit) runs",
      "The written family-contract and dated-withdrawal calendar — ask the treating team for the paper versions at the next visit",
      "The casualty for the two emergencies this course names: synthetic-sachet toxicity and hyperemesis dehydration",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific cannabis-use pathway exists; practice follows the DSM-5/ICD-11 severity-graded single-disorder logic with the withdrawal codification, delivered through the structured family programme this course teaches. The legal frame is the NDPS Act: ganja and charas are governed schedules, bhang holds an anomalous quasi-legal traditional status, and low-quantity personal-use provisions are distinct from trafficking penalties — counselled accurately, never threatened mythologically.",
    systemContext: "The four doors of the Indian cannabis consultation: (1) the adolescent dragged in for 'laziness and attitude' after a hostel confiscation — the withdrawal door and the commonest presentation; (2) the young first-episode psychosis referral — the screen and the 4–6 week rule; (3) the established schizophrenia family asking 'he smokes a little, is it okay?' — the relapse door; (4) the casualty odd-toxicity — the synthetic door. The histories arrive in family translations ('weakness', 'not studying', 'friends spoiled him') and in ceremony language that the school-college vape and edible layer never uses — which is why the product-language screen exists.",
    programmeContext: "The DMHP psychiatric tier and Tele-MANAS 14416 carry the follow-up; the district de-addiction infrastructure was built around alcohol and opioid withdrawal and is mostly irrelevant for primary cannabis dependence — there is no dangerous withdrawal to detoxify from. The effective unit is the structured family programme: the contingency contract, the dated reduction calendar, the family sessions that replace surveillance with structure.",
    costConsiderations: "The wasted money is the camp: Indian 'de-addiction camps' are mostly irrelevant for primary cannabis dependence, and families pay for exactly the detoxification tier the diagnosis does not need. The effective treatment — family sessions, the contract, the follow-up — is consultation-priced; the pharmacy is nearly irrelevant (there is nothing to prescribe); the scarcest resource is the follow-up structure the family must become.",
    culturalConsiderations: "The normalisation wall is three layers deep: bhang's legal, festival-normalised status ('it is tradition, it is even in the scriptures'); the charas/ganja religious-mystical narratives ('even sadhus use it'); and the modern layer — vapes, edibles and semi-commercial oils reaching school and college populations who would never touch a chillum. The answer to all three is the two-sided script: dose, age, potency and family history, not the sadhu. The clinician who concedes the low-risk truth of the grandfather's occasional bhang before naming the arithmetic of a 16-year-old's daily vape oil keeps the family that the moral lecture loses.",
    patientCounselling: [
      "The two-sided script: 'Most people who use occasionally as adults are okay — that is the truth. But your son is not most people: starting early, using daily, high-potency products and the family history together change the arithmetic. The brain still being built, the withdrawal that will be mistaken for attitude, and the risk of switching on something that may not switch off — these are the facts we act on.'",
      "The withdrawal script: 'What you are seeing in these weeks is not attitude — it is the brain's own system readjusting, and it has a dated end: the worst is days two to six, and it eases over one to three weeks. The appetite returns by about week three.'",
      "The sadhu script: 'The sadhu's occasional bhang and a sixteen-year-old's daily vape oil are not the same medicine — the dose, the age and the potency decide, not the tradition.'",
      "The schizophrenia-family script: 'In established schizophrenia, ongoing use roughly doubles relapse rates and undermines the medicines — so the use is not a lifestyle footnote; it is part of the psychosis treatment plan, and we will treat it with motivation and structure, not lectures.'",
      "The product-language script: 'I will ask in product language — gummies? oils? pens? — because that is how the school and college layer meets it; the chillum question finds the wrong generation.'",
      "The NDPS script: 'The law separates small personal-use quantities from trafficking — that is the accurate version, and it is the one we counsel with; mythological threats lose the family that accurate information keeps.'",
      "The hyperemesis script: 'The years of \"gastritis\" in the daily user are often cannabinoid hyperemesis — the hot-shower relief is the clue, and stopping the drug is the only real cure.'",
    ],
  },
  decisionPath: {
    title: "The four doors of the cannabis consultation",
    nodes: [
      {
        id: "start",
        question: "A patient (or a family) arrives where cannabis may be the diagnosis, the amplifier, or the emergency. First: which door did they come through?",
        branches: [
          { label: "The adolescent with 'laziness and attitude' (recently caught or stopped)", next: "withdrawal-door" },
          { label: "The young person with new psychotic symptoms", next: "psychosis-door" },
          { label: "The established schizophrenia patient who 'smokes a little'", next: "relapse-door" },
          { label: "The casualty odd-toxicity: agitation, seizures, cardiac events", next: "synthetic-door" },
        ],
      },
      {
        id: "withdrawal-door",
        question: "The withdrawal door: has the daily use actually stopped — and when?",
        branches: [
          { label: "Stopped days-to-weeks ago: irritable, sleepless, eating little, craving", next: "withdrawal-confirm" },
          { label: "Still using daily: apathy, academic slide, blunted ambition", next: "grey-gate" },
        ],
      },
      {
        id: "withdrawal-confirm",
        question: "Cannabis withdrawal in the stopped-using adolescent.",
        recommendation: "Name the syndrome out loud — a neurological week with a dated end (starts day 1–3, peaks day 2–6, eases over 1–3 weeks), not a character flaw; warn the family in advance that week one looks like attitude — it is the brain, not the boy; supportive framing, sleep hygiene, exercise, brief symptomatic cover where misery demands; the dated-withdrawal calendar handed over (irritability week 1, strange dreams week 2, the appetite's return by week 3) — then the two-directional gate and the treatment core.",
      },
      {
        id: "grey-gate",
        question: "The amotivational grey zone: the heavy young user still using.",
        branches: [
          { label: "Engaged after the two-sided script — plan the future", next: "treatment-core" },
          { label: "Ambivalent, sent rather than referred — leaving today", next: "screening-gate" },
        ],
      },
      {
        id: "psychosis-door",
        question: "The psychosis door: young, symptomatic, recent use — the picture and the multipliers.",
        branches: [
          { label: "Daily high-potency use, early onset, or a family history of psychosis", next: "vulnerable-path" },
          { label: "Ambiguous: primary illness versus toxic", next: "reassess-path" },
        ],
      },
      {
        id: "vulnerable-path",
        question: "The loaded brain symptomatic: the vulnerability × dose × age multiplication.",
        recommendation: "Treat the danger now: monitored abstinence alongside psychiatric care; low-dose antipsychotic for the active symptoms per the schizophrenia logic; psychoeducation with the two-directional family-history data (the family's minimisation — 'only smoking, he's young' — is the treatment target of the first three sessions); the 4–6 week re-assessment scheduled from day one; the written prevention contract before any taper is discussed.",
      },
      {
        id: "reassess-path",
        question: "The ambiguous picture on an actively using brain.",
        recommendation: "The 4–6 week rule: re-diagnose at 4–6 weeks of monitored abstinence — symptoms resolving with the drug point to the toxic door and the prevention contract; persisting symptoms point to the first-episode pathway. Never diagnose schizophrenia at first contact on an actively using brain.",
      },
      {
        id: "relapse-door",
        question: "The relapse door: established schizophrenia, ongoing use, the family asking 'he smokes a little, is it okay?'",
        recommendation: "The numbers without moralising: ongoing use roughly doubles relapse rates, worsens positive symptoms and undermines medication adherence — the 'just a little' exemption does not survive the data; motivational work (not confrontation) plus structured alternatives; the use documented as part of the psychosis treatment plan at every visit — and staying off it roughly halves the relapse risk, the sentence the family can carry.",
      },
      {
        id: "synthetic-door",
        question: "The synthetic door: severity out of proportion to any 'cannabis' history.",
        recommendation: "Emergency care: benzodiazepines for agitation and seizures, cardiac monitoring for the arrhythmias, cooling for hyperthermia, supportive management — then abstinence-focused follow-up through the poison team; these sachets are full CB1 agonists with unpredictable doses — not 'cannabis care', and the street-language history ('what was it sold as?') taken before the labels settle.",
      },
      {
        id: "screening-gate",
        question: "Whichever door: the two-directional screening gate before anyone leaves.",
        branches: [
          { label: "Use established — the plan needed", next: "treatment-core" },
          { label: "Family history positive in a heavy young user — raise the vigilance", next: "psychosis-door" },
        ],
      },
      {
        id: "treatment-core",
        question: "The treatment core — what actually carries the evidence.",
        recommendation: "Motivational interviewing opens the door (the adolescent was sent, not referred — confrontation loses him); contingency structures carry the evidence (verified abstinence linked to privileges: phone, bike, allowance, college-attendance documentation); the family contract replaces surveillance with structure; structured reduction for the dependent user who cannot go straight to zero (dated calendar, trigger-mapping, the rebuilt evening); the riders treated as relapse prevention (social anxiety, ADHD-type restlessness, trauma, insomnia — the 'what does it do for you?' answer tested, not assumed); and NO approved pharmacotherapy — the honest table (N-acetylcysteine, gabapentin-type, cannabinoid-adjacent: modest or negative signals) taught, not hidden.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading cannabis withdrawal as 'laziness' or 'attitude'",
      why: "The stopped-using adolescent's irritability, insomnia, appetite loss and craving are a week-limited neurological syndrome — punishing them as character breaks the alliance at the exact moment it is needed, and the family's contempt becomes the boy's shame.",
      correction: "Name the syndrome, script its dated end (day 1–3 onset, day 2–6 peak, easing over 1–3 weeks), hand over the dated calendar, and warn the family before the week arrives — it is the brain, not the boy.",
    },
    {
      mistake: "Diagnosing schizophrenia at first contact in an actively using brain",
      why: "The daily high-potency user's referential thinking and voices may be toxic, vulnerability-driven, or a true first episode — the label fixed at first contact is wrong often enough to be an exam trap and a life trap.",
      correction: "Treat the danger now, park the label, and re-diagnose at 4–6 weeks of monitored abstinence — resolution points to the toxic door and the prevention contract; persistence to the first-episode pathway.",
    },
    {
      mistake: "Treating cannabinoid hyperemesis as 'gastritis' for years",
      why: "The daily long-term user's cyclical vomiting gets endoscopies, diets and years of the wrong label — while the hot-shower clue sits unasked in the history and the only cure (cessation) is never named.",
      correction: "Ask the hot-shower question in every recurrent vomiting case with a daily use history; cessation is the only real treatment, with hot showers and capsaicin topical the temporising clues.",
    },
    {
      mistake: "Answering 'it's natural' with either propaganda or dismissal",
      why: "The moral lecture ('it is a dangerous drug, full stop') loses the family that arrived trusting the tradition; the permissive shrug loses the diagnosis the multipliers demand — both fail the two-sided truth.",
      correction: "The two-sided script: concede the genuinely low risk of occasional adult traditional use, then name the multipliers — dose, age, potency, family history. The sadhu's occasional bhang and a 16-year-old's daily vape oil are not the same medicine.",
    },
    {
      mistake: "Confronting instead of motivational-interviewing the adolescent",
      why: "The adolescent was sent, not referred — confrontation closes the only door that was open, and the 'attitude' framing becomes self-fulfilling.",
      correction: "Motivational interviewing opens the door; contingency structures carry the change (verified abstinence linked to real privileges); the family sessions replace surveillance with structure.",
    },
    {
      mistake: "Sending primary cannabis dependence to a de-addiction camp",
      why: "The camps sell the detoxification tier cannabis does not need — there is no dangerous withdrawal — and the family pays money for the wrong unit while the real treatment (the structured family programme) never starts.",
      correction: "The effective unit is the structured family programme: the contingency contract, the dated reduction calendar, the family sessions — OPD-delivered, consultation-priced, follow-up-owned.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The THC/CBD ratio story: THC the partial CB1 agonist producing euphoria, time distortion and, at dose, anxiety and psychotomimetic effects; CBD the antipsychotic-adjacent buffer that modern breeding stripped out — why the same plant name now covers a steeper risk than it did a generation ago.",
        "The anandamide volume-knob account: endocannabinoids as short-range retrograde whispers at CB1; THC as the shout; the adaptation (downregulated production and sensitivity) producing tolerance — and withdrawal on stopping: irritability, anxiety, insomnia with strange dreams, appetite loss, craving, headaches; day 1–3 onset, day 2–6 peak, easing over 1–3 weeks.",
        "The gene×environment answer: the AKT1/COMT-type interaction literature exists; the clinical translation is family history as the usable screening variable — the two-directional rule.",
        "Cannabinoid hyperemesis: the population (daily long-term users), the clue (hot showers), the treatment (cessation — the only cure).",
        "The four doors of the cannabis consultation, one line each: withdrawal misdiagnosed as attitude; the young psychosis presentation with the 4–6 week rule; the schizophrenia patient whose use doubles relapse; the synthetic-cannabinoid casualty.",
      ],
      practical: [
        "Take the quantified cannabis history: grams/₹ per week, the product and potency (vape oil, ganja, charas, edibles), age at first use, days per month, the longest break and why it ended, and the academic/work trajectory.",
        "Screen in product language, not ceremony language — 'gummies? oils? pens?' — the school-college layer that never touches the chillum; and demonstrate the two-directional screen (the young psychosis patient for use; the heavy young user for family history).",
      ],
      longAnswer: [
        "Cannabis and psychosis: the evidence, the mechanisms and the counselling (the evergreen essay — the dose-response gene×environment interaction, the doubling-to-quadrupling range in heavy vulnerable users, the 4–6 week re-assessment rule, the relapse-doubling data in established schizophrenia).",
        "A 17-year-old brought for 'laziness and attitude' three weeks after stopping daily cannabis: assessment and management (the withdrawal door, the two-sided script, the treatment core, the family programme).",
      ],
    },
    neetPg: {
      highYield: [
        "220 MILLION: the most-used illicit substance — roughly 4% of the global adult population.",
        "1 IN 10 / 1 IN 6: dependence overall versus adolescent onset — the number that reframes 'harmless'.",
        "INDIA 3%: past-year adult use (ganja/charas beyond legal bhang); the burden in urban young men and street youth.",
        "WITHDRAWAL IS REAL: the exam's favourite misdiagnosis — irritability, anxiety, insomnia with strange dreams, appetite loss, craving, headaches; day 1–3 onset, day 2–6 peak, easing over 1–3 weeks; DSM-5-codified.",
        "IAAC: Irritability, Anxiety, Appetite loss, Craving (+ sleep disturbance) — the withdrawal mnemonic.",
        "PSYCHOSIS RISK: doubling-to-quadrupling in heavy, early, high-potency users — Pot-Pot-Freq-FHx (potency, early start, frequency, family history) the multiplier mnemonic.",
        "RELAPSE DOUBLING: comorbid use in established schizophrenia roughly doubles relapse and undermines adherence — the most actionable fact for psychosis families.",
        "HYPEREMESIS: daily user + cyclical vomiting + hot showers; cessation the only cure; the 'gastritis' label often held for years.",
        "SYNTHETIC CANNABINOIDS: full CB1 agonists, dose-unpredictable sachets — agitation, seizures, psychosis, hyperthermia, arrhythmias; poison-team follow-up.",
        "THE 4–6 WEEK RULE: re-diagnose ambiguous psychosis after 4–6 weeks of monitored abstinence (shared with the stimulant note).",
        "NO APPROVED PHARMACOTHERAPY: motivational interviewing + contingency structures + comorbidity treatment carry the evidence.",
        "THE ADOLESCENT BRAIN: prefrontal construction until roughly 25 — the unfinished building; dependence machinery sets in wet cement.",
      ],
      pyqConcepts: [
        "The hyperemesis MCQ (daily user, cyclical vomiting, hot showers, cessation) — recurring across every tier.",
        "The withdrawal-versus-attitude vignette — the adolescent who 'became lazy after stopping'.",
        "The relapse-doubling stem — the schizophrenia patient who 'smokes a little'.",
        "The two-sided risk sentence — the discussion question that surfaces in every legalisation-era debate.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 17-year-old hostel student, brought for 'laziness and attitude' three weeks after vape pens were confiscated: irritable, sleeping badly, eating little, refusing to study; two years of daily use surfacing only in the private collateral. The recognition that changes the household: cannabis withdrawal — a neurological week with a dated end (irritability week 1, strange dreams week 2, the appetite's return by week 3), not a character flaw; the contingency contract (phone and bike linked to verified abstinence and morning attendance), the evening gym substitution, the family sessions replacing surveillance with structure — and the 'what does it do for you?' answer (quieting racing thoughts) naming the real treatment: comorbid social anxiety under CBT-based work and an SSRI. Six months: attending college, off daily use, one lapse mapped to the old friend-circle and survived.",
        "A 24-year-old daily smoker of eight years' standing, in casualty for the fourth time this year with intractable morning vomiting — 'gastritis' on three previous discharge summaries, this time dehydrated; the detail the sister volunteers: he spends the spells standing under hot water for hours because it is the only thing that helps. Cannabinoid hyperemesis syndrome: the hot-shower pearl, the daily long-term user population, cessation as the only real cure — the rehydration and electrolytes treated now, the capsaicin-topical clue remembered, and the gastroenterology label retired; the teaching that the diagnosis hides in a question nobody asked for years.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Hot showers + daily long-term user + cyclical vomiting = cannabinoid hyperemesis; stopping is the cure.",
        "Cannabis withdrawal is real and week-limited — not 'attitude'.",
        "No approved pharmacotherapy for cannabis use disorder — behavioural and structural treatment only.",
        "1 in 10 overall, 1 in 6 adolescent onset — the dependence rates.",
        "Synthetic cannabinoids: full CB1 agonists — the genuinely toxic tier.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The two-sided script is the alliance's engine: concede the low-risk truth of occasional adult use before naming the multipliers — propaganda loses the patient, denial loses the diagnosis, and both fail the family.",
        "Contingency management is evidence, not bribery: verified abstinence linked to real privileges (phone, bike, allowance, attendance) — the family taught to run it as structure, never as surveillance.",
        "The camp argument: there is no dangerous cannabis withdrawal to detoxify from — the structured family programme is the unit, and the camp is the wasted money; say this to families plainly.",
        "The two-directional screening rule run at every relevant consultation: every young psychosis patient screened for use with family collateral; every heavy-use adolescent screened for psychosis family history — family history is the usable clinical translation of the gene×environment literature.",
        "NDPS counsel delivered accurately: low-quantity personal-use provisions are distinct from trafficking penalties — mythological threats lose the family that accurate information keeps, and the bhang anomaly is taught, not smuggled around.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 'lazy' boy who was withdrawing",
      presentation: "Vape pens confiscated, three weeks of 'attitude' — and the diagnosis that changed the household was a neurological week, not a character flaw.",
      initialPresentation: "A 17-year-old hostel student was brought to the OPD by his parents for 'laziness and attitude' three weeks after hostel authorities confiscated his vape pens: he was irritable, sleeping badly, eating little and refusing to study, having vaped daily for two years — a quantity the parents had never been asked and could not estimate.",
      history: "Two years of daily vape-oil use, beginning at 15 in the hostel's evening circle; no prior psychiatric contact; the 'racing thoughts' he said the vaping quieted; academic decline through the year; the family's first account — 'only a little, occasionally' — doubling when the hostel warden's letter was read aloud; no psychotic symptoms, no known medical illness.",
      examination: "Irritable but orientated; no perceptual abnormalities; sleep fragmented, appetite visibly reduced; physical examination unremarkable, weight a few kilograms down from the term's start; no intoxication signs at presentation.",
      diagnosis: "Cannabis withdrawal syndrome in a stopped-using daily adolescent — the 'laziness and attitude' presentation — with comorbid social anxiety driving the self-medication.",
      management: "Dated-withdrawal psychoeducation (irritability week 1, strange dreams week 2, the appetite's return by week 3); contingency contract — phone and bike privileges linked to verified abstinence and morning college attendance; evening gym substitution for the friend-circle hours; family sessions replacing surveillance with structure; the 'racing thoughts' hypothesis tested and the comorbid social anxiety treated with CBT-based work plus an SSRI.",
      outcome: "Six months: attending college, off daily use, one lapse mapped to the old friend-circle and survived — the lapse analysed without punishment, the contract holding through it.",
      teachingPoints: [
        "Withdrawal misdiagnosed as attitude is the commonest Indian cannabis presentation — naming it is the alliance's foundation.",
        "The 'what does it do for you?' answer (quieting thoughts) named the real treatment: the comorbidity tier is relapse prevention.",
        "Contingency and structure outperformed confrontation — the adolescent was sent, not referred, and motivational work was the only door.",
        "The dated end scripted in advance: the family that knows the week's shape punishes the brain less and supports the plan more.",
      ],
    },
    {
      title: "The joint before the voices",
      presentation: "Three weeks of sliding studies, classmates 'signalling' through messages, and 2 a.m. voices — daily high-potency use since 16, in a boy whose maternal uncle has schizophrenia.",
      initialPresentation: "A 19-year-old engineering student presented with three weeks of declining academic performance and social withdrawal, followed by referential thinking — classmates 'signalling' through messages — and voices at 2 a.m.; the cannabis screen was positive and the family minimised from the first sentence: 'only smoking, he's young'.",
      history: "Daily high-potency cannabis since 16 (vape oils and skunk-type products through the college circuit); maternal uncle with schizophrenia; no previous psychotic episodes; no medical history; the family's minimisation sustained by the 'young and experimental' frame — the first three sessions' real target.",
      examination: "Referential thinking elicited on mental state; auditory hallucinations (early-morning voices); consciousness clear, orientation intact; vitals stable; no synthetic-product history on street-language inquiry; no formal thought disorder beyond the referential frame.",
      diagnosis: "Cannabis-associated psychosis in a vulnerable user — the vulnerability × dose × age multiplication, on a loaded family background.",
      management: "Monitored abstinence; low-dose antipsychotic for the active symptoms; psychoeducation with the two-directional family-history data; contingency-anchored follow-up; the 6-week re-assessment rule scheduled from day one.",
      outcome: "Symptoms resolved fully over six weeks; the antipsychotic was tapered off at 6 months with an explicit written prevention contract — the family-history data, the abstinence architecture and the early-warning signs written before the taper, not after. Daily use was the trigger his family history had loaded.",
      teachingPoints: [
        "The vulnerability × dose × age multiplication: family history, daily high-potency exposure and adolescent onset together — the gene×environment interaction made clinical.",
        "Transient cannabis-associated psychosis resolves with abstinence — but the resolution demands the prevention contract, or the next episode finishes the introduction.",
        "The family's minimisation ('only smoking, he's young') is the treatment target of the first three sessions — the two-sided script is its antidote.",
        "The 4–6 week rule applied: the label parked while the danger was treated — the full resolution confirming the toxic door rather than the first-episode pathway.",
      ],
    },
  ],
  clinicalPearls: [
    "Honesty is the treatment's engine in this diagnosis: no propaganda, no denial — dose, age, potency and family history decide the risk.",
    "Around 220 million past-year users — the most-used illicit substance on earth (~4% of the global adult population), and India's most-normalised one.",
    "Roughly 1 in 10 users develop dependence; 1 in 6 starting in adolescence — the number that reframes 'harmless'.",
    "Cannabis withdrawal is real and week-limited: irritability, insomnia with strange dreams, appetite loss, craving, headaches — starting day 1–3, peaking day 2–6, easing over 1–3 weeks.",
    "The commonest Indian cannabis misdiagnosis: withdrawal read as 'laziness' or 'attitude' in the stopped-using adolescent — it is the brain, not the boy.",
    "The prefrontal cortex is under construction until roughly 25 — the unfinished building; daily THC during the building years hits learning, motivation and emotional regulation while the addiction machinery sets around the drug.",
    "Pot-Pot-Freq-FHx: potency, early start, frequency, family history — the four multipliers that turn the low-risk truth into the high-risk arithmetic.",
    "In established schizophrenia, ongoing use roughly doubles relapse rates and undermines adherence — the single most actionable fact for psychosis families.",
    "Daily long-term user + cyclical vomiting + hot showers = cannabinoid hyperemesis; cessation is the only cure; the 'gastritis' label often holds for years.",
    "Synthetic cannabinoid sachets are full CB1 agonists with unpredictable doses — severe agitation, seizures, psychosis, cardiac events: poison-team follow-up, not 'cannabis care'.",
    "No approved pharmacotherapy exists for cannabis use disorder — motivational interviewing, contingency structures and comorbidity treatment carry the evidence.",
    "Ask in product language — 'gummies? oils? pens?' — not ceremony language: the school-college layer never touches the chillum.",
    "The 4–6 week rule: re-diagnose ambiguous psychosis after 4–6 weeks of monitored abstinence — never label schizophrenia at first contact on an actively using brain.",
  ],
  highYieldSummary: [
    "Definition: cannabis use disorder and its mental-health interface — the two-sided truth in one frame: occasional adult traditional-potency use is genuinely low-risk for psychosis and dependence, while modern high-potency, daily, adolescent-onset use multiplies the risks of psychosis (doubling-to-quadrupling in the vulnerable heavy user), dependence (1 in 10 overall, 1 in 6 adolescent onset), academic collapse and the amotivational grey zone — with a real withdrawal syndrome (day 1–3 onset, day 2–6 peak, easing over 1–3 weeks), a hyperemesis syndrome hiding in 'gastritis', a psychosis interface that doubles relapse in established schizophrenia, and a synthetic-cannabinoid emergency tier.",
    "Epidemiology: around 220 million past-year users (~4% of the world's adults, the most-used illicit substance); India about 3% past-year adult use (ganja/charas beyond legal bhang) with the burden concentrated in urban young men and street youth; high-potency markets showing the strongest daily-use psychosis associations; synthetic products in urban seizure data and casualty presentations.",
    "Mechanism: the volume knob (anandamide-type endocannabinoids whispering at CB1; THC the partial-agonist shout; the adaptation — downregulated production and sensitivity — producing tolerance and, on stopping, withdrawal); the unfinished building (prefrontal construction until ~25, endocannabinoid wiring part of the build — learning, motivation and emotional regulation hit, the addiction machinery setting in wet cement); the psychotic diathesis door (high-potency THC switching on the dopamine salience machinery in vulnerable brains — dose-response, gene×environment, family history the usable screening variable); the synthetic divergence (full CB1 agonists, dose-unpredictable sachets — a toxic tier the plant never contained).",
    "Clinical: intoxication's pleasant face (relaxation, laughter, sensory enhancement, time distortion, appetite) and ugly face (panic, depersonalisation/derealisation, paranoid thoughts, nausea, tachycardia, the novice white-out faint) with driving impaired for hours; withdrawal (IAAC + strange dreams, the dated end); the amotivational grey zone (apathy, lost initiative, academic-vocational slide); the chronic body (bronchitis, cognition thinning that largely recovers over weeks-months, hyperemesis); the psychosis interface (transient toxic psychosis clearing with the drug; persistent psychosis in heavy vulnerable users; doubled relapse in established schizophrenia); synthetic toxicity (agitation, seizures, psychosis, hyperthermia, arrhythmias).",
    "Diagnosis: the severity-graded single-disorder logic with frequency, age-of-onset and potency recorded as risk modifiers; the quantified history (grams/₹ per week, product and potency, age at first use, days per month, the longest break and why it ended, the function trajectory); the two-directional screening rule (every young psychosis patient screened for use with collateral; every heavy young user screened for family history); the withdrawal diagnosis in the 'laziness/attitude' presentation; the hyperemesis hot-shower clue; the panic timeline (first attacks in the hours after use); the synthetic street-language history; and the 4–6 week abstinence re-assessment before any schizophrenia label.",
    "Management: the two-sided counselling script used early and honestly (the alliance's engine); motivational interviewing opening the door the confrontation would slam; contingency structures carrying the evidence (verified abstinence linked to phone, bike, allowance, attendance); structured reduction for the dependent (dated calendar, trigger-mapping, the rebuilt evening, the family contract); NO approved pharmacotherapy — the honest table (N-acetylcysteine, gabapentin-type, cannabinoid-adjacent: modest or negative) taught, not hidden; comorbidity treatment as relapse prevention; withdrawal supported with its dated end; hyperemesis cured only by cessation; psychosis treated abstinence-first with the schizophrenia logic and the 4–6 week rule; the schizophrenia family given the numbers without moralising — the use documented in the psychosis plan at every visit; synthetic toxicity through emergency care and the poison team.",
    "The Indian tier: bhang's legal-festival normalisation and the sadhu argument met with the multipliers, not the mythology; charas/ganja religious-mystical narratives; the school-college vape and edible layer found only in product language ('gummies? oils? pens?'); the NDPS personal-use provisions counselled accurately rather than mythologically; the rehab-camp shortcut mostly irrelevant (no dangerous withdrawal) with the structured family programme as the effective unit; Tele-MANAS 14416 and the DMHP tier carrying the follow-up; and the one-line philosophy the whole course rehearses — honesty is the treatment's engine.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cmh-quiz-1",
      question: "The strongest risk-multiplier profile for cannabis-associated psychosis:",
      options: ["Occasional adult use of traditional preparations", "Daily high-potency use begun in adolescence with a family history of psychosis", "Weekend social use after age 30", "CBD-dominant products used occasionally"],
      correctIndex: 1,
      explanation: "Potency × early onset × frequency × family history — the multiplication (Pot-Pot-Freq-FHx) that drives the preventable cases.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cmh-quiz-2",
      question: "An adolescent stops daily cannabis and for two weeks is irritable, sleepless with strange dreams, eats little and craves. The diagnosis:",
      options: ["Primary depression", "Cannabis withdrawal syndrome", "Personality disorder", "Schizophrenia prodrome"],
      correctIndex: 1,
      explanation: "Real, week-limited (day 1–3 onset, day 2–6 peak, easing over 1–3 weeks) and the commonest Indian misdiagnosis ('attitude') — name it to keep the alliance.",
      afterSectionId: "symptoms",
    },
    {
      id: "cmh-quiz-3",
      question: "A daily long-term user has years of recurrent morning vomiting relieved by hot showers. The diagnosis and the treatment:",
      options: ["Migraine — triptans", "Cannabinoid hyperemesis syndrome — cessation is the definitive treatment", "Peptic ulcer — proton pump inhibitors long-term", "Bulimia — psychotherapy for the eating disorder"],
      correctIndex: 1,
      explanation: "The hot-shower pearl; cessation the only cure; the 'gastritis' label often held for years.",
      afterSectionId: "differential",
    },
    {
      id: "cmh-quiz-4",
      question: "In a patient with established schizophrenia, ongoing cannabis use:",
      options: ["Is neutral for outcome", "Roughly doubles relapse risk, worsens positive symptoms and undermines adherence", "Reliably improves negative symptoms", "Should be ignored as a lifestyle matter"],
      correctIndex: 1,
      explanation: "The most actionable fact for psychosis families — the use is treated as part of the psychosis plan, documented at every visit.",
      afterSectionId: "management",
    },
    {
      id: "cmh-quiz-5",
      question: "The treatment evidence for cannabis use disorder chiefly involves:",
      options: ["An approved maintenance agonist", "Motivational interviewing, contingency structures and comorbidity treatment", "Methadone-type substitution", "Long-term benzodiazepines"],
      correctIndex: 1,
      explanation: "No approved pharmacotherapy exists; behavioural and structural evidence carries the field — the honest table taught, not hidden.",
      afterSectionId: "management",
    },
    {
      id: "cmh-quiz-6",
      question: "Synthetic cannabinoid street products are more dangerous than plant cannabis because:",
      options: ["They contain nicotine", "They are full CB1 agonists with unpredictable doses — severe agitation, seizures, psychosis, cardiac toxicity", "They are always contaminated with opioids", "They are injected rather than smoked"],
      correctIndex: 1,
      explanation: "The receptor pharmacology and the sachet-dose chaos create a genuinely toxic tier the plant never reaches — poison-team follow-up, not 'cannabis care'.",
      afterSectionId: "timeline",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the two-sided risk sentence — balanced, quotable, one line.", answer: "Occasional adult use of traditional-potency cannabis is genuinely low-risk for psychosis and dependence — and modern high-potency, daily, adolescent-onset use genuinely multiplies the risks of psychosis, dependence, academic collapse and the amotivational grey zone: no propaganda, no denial; dose, age, potency and family history decide the risk. The clinical reason the sentence must be two-sided: the inflated version (all cannabis, all users, all disaster) destroys the trust the adolescent and family need before anything clinical can happen; the minimised version ('it is natural, the sadhus use it') withholds the multipliers that make the 16-year-old's daily vape oil a different exposure entirely from the grandfather's festival bhang.", topic: "Foundations" },
    { question: "Cannabis withdrawal: four symptoms, the timeline, and the Indian misdiagnosis it hides inside.", answer: "SYMPTOMS (IAAC + sleep): Irritability (the household's word: 'attitude'), Anxiety, Appetite loss with weight drop, Craving — plus insomnia with strange vivid dreams, and headaches. TIMELINE: starting day 1–3 after stopping, peaking around day 2–6, easing over 1–3 weeks — the dated end; the appetite's return by week 3 the signpost. THE MISDIAGNOSIS: the stopped-using adolescent read as lazy, insolent or 'having attitude' — the commonest Indian cannabis presentation, punished as character exactly when the alliance is needed; the correction is naming the syndrome, scripting the dated end in advance, and warning the family that week one looks like attitude: it is the brain, not the boy.", topic: "Clinical practice" },
    { question: "A mother asks: 'Did cannabis cause my son's schizophrenia?' — three sentences she can repeat.", answer: "(1) 'It contributed, not single-handedly: he had a loaded family background, and daily high-potency use from an early age pulled the trigger years earlier than the illness might otherwise have arrived.' (2) 'Whether it was inevitable without the drug is unknowable; that the risk was multiplied is clear.' (3) 'The useful fact now: staying off it roughly halves his relapse risk.' The honesty serves better than blame or absolution — the gene×environment interaction (family history the usable screening variable, the AKT1/COMT-type literature the mechanism) taught as multiplication, not causation; and the forward-looking sentence (the relapse halving) is the one that changes behaviour at the next family function.", topic: "Clinical practice" },
    { question: "Cannabinoid hyperemesis syndrome: the population, the clue, the treatment.", answer: "POPULATION: the daily long-term user — years of use, typically presenting to casualty repeatedly. CLUE: cyclical vomiting classically relieved by hot showers (the compulsive hot-water behaviour is the diagnostic pearl; capsaicin topical the cousin clue) — in any 'recurrent gastritis' of a daily user, the hot-shower question closes the diagnosis. TREATMENT: cessation is the only real cure — the hot showers and capsaicin are temporising clues and measures, not treatments; supportive care for the dehydration and electrolytes during the spell; and the gastroenterology label retired, because the classic error is the 'gastritis' diagnosis held for years while the cure (stopping) is never named.", topic: "Clinical practice" },
    { question: "Why is the adolescent brain the special vulnerability — one metaphor, one number?", answer: "METAPHOR: the unfinished building — the prefrontal cortex (judgement, planning, motivation) is under construction until roughly 25, and its endocannabinoid wiring is part of that construction; daily THC during the building years is like double-locking the scaffolding: learning, motivation and emotional regulation take the hit, while the addiction machinery, still wet cement, sets around the drug. NUMBER: 1 in 6 — the dependence rate with adolescent onset, against 1 in 10 overall; adolescent-onset cognitive recovery is also slower and less complete. The clinical translation: the same drug is a different exposure at 15 than at 35, which is why age-of-onset is a risk modifier recorded in every quantified history.", topic: "Mechanism" },
    { question: "State the two-directional screening rule and why it is cheap.", answer: "THE RULE: screen every young first-episode psychosis patient for cannabis use, with family collateral — and screen every heavy-use adolescent for a family history of psychosis. WHY CHEAP: two questions, asked in the consultations that are already happening, with no test and no cost — and it changes both directions' counselling: the psychosis family hears the contribution-and-prevention frame (the relapse-halving sentence), and the using family hears the multiplier arithmetic early enough for the prevention contract. The rule is the clinical translation of the gene×environment literature (AKT1/COMT-type interaction studies) — family history being the usable screening variable the genetics cannot yet replace.", topic: "Diagnosis" },
    { question: "What carries the treatment evidence in cannabis use disorder — and what does not?", answer: "CARRIES: motivational interviewing (the adolescent was sent, not referred — the door-opener confrontation would slam); contingency structures (verified abstinence linked to real privileges: phone, bike, allowance, college-attendance documentation — the evidence core); the family contract (structure replacing surveillance); structured reduction for the dependent user who cannot go straight to zero (dated calendar, trigger-mapping, the rebuilt evening); and comorbidity treatment as relapse prevention (social anxiety, ADHD-type restlessness, trauma, insomnia — the 'what does it do for you?' answer tested, not assumed). DOES NOT: pharmacotherapy — NO approved agent exists; N-acetylcysteine, gabapentin-type agents and cannabinoid-adjacent strategies show modest or negative signals; the honest table is taught to the family, not hidden behind vague prescribing — and the SSRI in the case treats the comorbid anxiety, never the cannabis use itself.", topic: "Management" },
    { question: "Say the relapse-doubling message for a schizophrenia family — without moralising.", answer: "'Ongoing cannabis use in established schizophrenia roughly doubles relapse rates, worsens positive symptoms and undermines the medicines — so the use is not a lifestyle footnote; it is part of the psychosis treatment plan, and we will treat it with motivational work and structured alternatives, documented at every visit.' The craft points: the numbers delivered once and plainly (the 'just a little' exemption does not survive the data); the tone motivational, never confrontational (the lecture loses the patient the plan needs); the use written into the psychosis plan so every review addresses it as clinical work; and the forward sentence appended — staying off it roughly halves the relapse risk — because the family carries the message to the patient between visits.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Isn't cannabis natural and harmless — even our sadhus use it?", answer: "Occasional adult use of traditional-potency cannabis is genuinely low-risk — your doctor will not pretend otherwise, because pretending destroys trust. But today's products are many times stronger than the village variety, and early, daily use in a still-developing brain is a different exposure entirely. The sadhu's occasional bhang and a sixteen-year-old's daily vape oil are not the same medicine." },
    { question: "Can you really be addicted to weed? I thought it wasn't addictive.", answer: "Yes — roughly 1 in 10 users develop dependence overall, and closer to 1 in 6 who start in adolescence: tolerance (needing more for the same effect), withdrawal (irritability, insomnia with strange dreams, appetite loss, craving) and failed attempts to stop. That is the addiction definition, met." },
    { question: "My son became lazy and difficult after he stopped. Isn't that just attitude?", answer: "That pattern — irritable, sleepless, eating little in the first weeks after stopping daily use — is cannabis withdrawal: a brain readjustment with a dated end (worst days two to six, easing over one to three weeks, appetite returning by about week three). Punishing it as attitude breaks the alliance at the exact moment it is needed." },
    { question: "Did cannabis cause my brother's schizophrenia?", answer: "It contributed, and honesty serves better than either blame or absolution: he had a loaded family background, and daily high-potency use from an early age pulled the trigger years earlier. Was it inevitable without the drug? Unknowable. Was the risk multiplied? Clearly. The useful sentence now: staying off it roughly halves his relapse risk." },
    { question: "He says it calms his racing thoughts. Should we let him continue?", answer: "Test the hypothesis rather than assume it: if an anxiety or attention problem genuinely drives the use, treating it properly — therapy, the right medicines, structure — removes the need the joint was filling, and unlike the joint, the treatment does not carry the psychosis multiplier. The 'what does it do for you?' answer names the real treatment." },
    { question: "He only eats edibles, never smokes. Is that safer?", answer: "Edibles remove the lung damage and delay the effect — and the delay is its own danger: people re-dose before the first dose lands, and the 'overdose' is a panic-and-vomiting night. The dependence and psychosis arithmetic are unchanged." },
    { question: "Is CBD oil the same thing?", answer: "CBD is the second, non-intoxicating cannabinoid — a different substance with its own regulatory grey areas. The problem of this course is THC: the more modern breeding raised THC and stripped CBD, the steeper the psychosis association grew. CBD is antipsychotic-adjacent, the balance factor that was bred out." },
    { question: "What are the emergency signs to watch for?", answer: "Severe agitation, seizures, chest symptoms or collapse after any street 'spice'-type sachet — those are synthetic cannabinoids, poison rather than cannabis, and need hospital now. Repeated morning vomiting relieved by hot showers in a daily user is cannabinoid hyperemesis — stopping is the cure. New beliefs that feel too real, or voices, after heavy use need psychiatric assessment now, not after the exams." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the cannabis-withdrawal codification and cannabis use disorder framing (paraphrased), with the ICD-11 harmonic per the note's source map" },
      { source: "NDPS Act — the Indian legal frame for ganja/charas, bhang's anomalous traditional status and the low-quantity personal-use provisions distinct from trafficking penalties" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.7 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The contingency-management and adolescent cannabis-treatment trial literature — the behavioural-evidence core this course's treatment section stands on" },
    ],
    reviews: [
      { source: "UNODC World Drug Report lineage — the ~220-million-user global frame and the most-used-illicit-substance ranking" },
      { source: "Di Forti M et al. — the high-potency daily-cannabis psychosis association (the potency variable the risk curve turned on)" },
      { source: "Moore THM et al. — the Lancet-era meta-analysis of cannabis and psychosis risk (the doubling-to-quadrupling range in heavy users)" },
      { source: "Volkow ND et al. / NIDA lineage reviews — the dependence rates (1-in-10 overall; 1-in-6 adolescent onset) and the adolescent-brain vulnerability literature" },
      { source: "Allsop DJ et al. — the cannabis withdrawal syndrome characterisation; Zammit S et al. — the cannabis and schizophrenia outcome/relapse literature (the comorbid-use relapse doubling)" },
      { source: "Bonnet U et al. and the hyperemesis literature — cannabinoid hyperemesis syndrome, the hot-shower pearl and cessation treatment" },
      { source: "EMCDDA-lineage synthetic cannabinoid toxicity reviews — the full-agonist emergency tier" },
      { source: "Ambekar A, Rao R et al. (AIIMS) — Magnitude of Substance Use in India 2019: the ~3% past-year cannabis prevalence and the pattern data" },
    ],
    patientResources: [
      { source: "The two-sided counselling script and the dated-withdrawal calendar — the two instruments this course hands to every Indian cannabis family" },
      { source: "Tele-MANAS 14416 and the DMHP psychiatric tier — the structured family programme and follow-up channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the two-sided truth, the withdrawal week with its dated end, the hot-shower clue, the emergency signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The volume-knob mechanism, the unfinished building, the withdrawal timeline, the hyperemesis pearl, the 4–6 week rule.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — the four doors, the contingency craft, the NDPS counsel, the honest pharmacotherapy table, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two-sided truth, the numbers, the four doors.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the two-sided risk sentence and the four multipliers cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The volume knob, the unfinished building, the diathesis door.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why tolerance and withdrawal are the same adaptation, and why the pre-25 brain is the special vulnerability." },
    { number: 3, title: "Clinical Practice", description: "Intoxication's two faces, the withdrawal week, the grey zone, hyperemesis, the psychosis interface, the treatment core.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the quantified history, the two-directional screen and the two-sided script cold." },
    { number: 4, title: "Indian Context", description: "The normalisation wall, the product-language screen, the NDPS frame, the camp-versus-family-programme argument.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can triage the four doors and answer the sadhu question with the multipliers, not the mythology." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the withdrawal-versus-attitude and hyperemesis stems cold and recite the relapse-doubling message without moralising." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.2.3.7 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "UNODC World Drug Report lineage — the ~220-million past-year user global figure, ~4% of the adult population, the most-used illicit substance", sourceType: "who", year: "2020s editions", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Di Forti M et al. — the high-potency daily-cannabis psychosis association (the potency variable; the skunk-type market evidence)", sourceType: "primary", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Moore THM et al. — the Lancet-era meta-analysis of cannabis and psychosis risk (the doubling-to-quadrupling range in heavy users)", sourceType: "meta-analysis", year: "2007 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Volkow ND et al. / NIDA lineage reviews — the dependence rates (1-in-10 overall; 1-in-6 adolescent onset) and the adolescent-brain vulnerability literature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Allsop DJ et al. — the cannabis withdrawal syndrome characterisation (the symptom set and the week-scale course)", sourceType: "primary", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Zammit S et al. — the cannabis and schizophrenia outcome/relapse literature (the comorbid-use relapse doubling, adherence and positive-symptom effects)", sourceType: "primary", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "DSM-5 / DSM-5-TR (APA) — the cannabis-withdrawal codification and the severity-graded cannabis use disorder framing (paraphrased), with the ICD-11 harmonic per the source map", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Bonnet U et al. and the hyperemesis literature — cannabinoid hyperemesis syndrome, the hot-shower pearl and cessation as the treatment", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "EMCDDA-lineage synthetic cannabinoid toxicity reviews — the full-CB1-agonist, dose-unpredictable emergency tier", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Ambekar A, Rao R et al. (AIIMS) — Magnitude of Substance Use in India 2019: the ~3% past-year cannabis prevalence, the urban young men and street youth concentration, the pattern data", sourceType: "government", year: "2019", dateReviewed: "2026-09-29" },
    { id: "S12", source: "The contingency-management and adolescent cannabis-treatment trial literature — the behavioural-evidence core (motivational interviewing, contingency structures, comorbidity treatment)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S13", source: "NDPS Act and its amendment lineage — the Indian legal frame for ganja/charas, bhang's anomalous traditional status, and the low-quantity personal-use provisions distinct from trafficking penalties", sourceType: "government", year: "1985 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The two-sided risk frame: occasional adult traditional-potency use is genuinely low-risk for psychotic illness and dependence, while regular high-potency use (especially daily, begun in the teens) measurably doubles-to-quadruples psychosis risk in vulnerable people and produces a real dependence syndrome — no propaganda, no denial; the inflated version destroys clinical trust, the minimised version withholds the multipliers.", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "Global epidemiology: around 220 million past-year users (the most-used illicit substance, roughly 4% of the global adult population); dependence in about 1 in 10 users overall and 1 in 6 with adolescent onset; high-potency markets showing the strongest daily-use psychosis associations.", grade: "established", sources: ["S2", "S5", "S3"] },
    { text: "Indian epidemiology: about 3% of adults used cannabis in the past year (ganja/charas beyond legal bhang), with higher rates among urban young men and street youth — the dependence burden concentrating there; the cultural layering (bhang legal-festival normalisation, charas/ganja religious-mystical narratives, vapes/edibles/oils reaching school and college populations) and synthetic products in urban seizure data and casualty presentations.", grade: "supported", sources: ["S11", "S1"] },
    { text: "The CB1/anandamide volume-knob mechanism: endocannabinoids (anandamide-type) as short-range retrograde whispers fine-tuning mood, memory, appetite and reward; THC a partial CB1 agonist shouting through the channel; chronic stimulation downregulating the system's own production and sensitivity — tolerance while using, and on cessation a real withdrawal syndrome. The adolescent unfinished building: prefrontal construction until roughly 25 with endocannabinoid wiring part of the build — daily THC hitting learning, motivation and emotional regulation while the addiction machinery sets around the drug.", grade: "established", sources: ["S1", "S5", "S6"] },
    { text: "The cannabis–psychosis relationship as dose-response, gene×environment interaction: high-potency THC switching on the dopamine salience machinery in vulnerable brains (meaning too bright, coincidences as messages, perception loosened); transient toxic psychosis clearing with the drug; persistent psychosis in heavy vulnerable users; the AKT1/COMT-type interaction literature existing with family history as the usable clinical screening variable; frequent high-potency use accounting for a meaningful minority of preventable psychotic cases.", grade: "established", sources: ["S3", "S4", "S1"] },
    { text: "Cannabis withdrawal syndrome: irritability, anxiety, insomnia with strange vivid dreams, appetite loss with weight drop, craving and headaches — starting day 1–3, peaking day 2–6, easing over 1–3 weeks; DSM-5-codified; the commonest Indian misdiagnosis being 'laziness'/'attitude' in the stopped-using adolescent.", grade: "established", sources: ["S6", "S8"] },
    { text: "Cannabinoid hyperemesis syndrome: the paradoxical cyclical vomiting of daily long-term users, classically relieved by hot showers (capsaicin topical the cousin clue); cessation the only real treatment; the classic error being the 'gastritis' label held for years in casualty presentations.", grade: "supported", sources: ["S9"] },
    { text: "In established schizophrenia, ongoing cannabis use roughly doubles relapse rates, worsens positive symptoms and undermines medication adherence — the single most actionable fact for psychosis families; the treatment being motivational work (not confrontation) with structured alternatives, the use documented as part of the psychosis treatment plan at every visit.", grade: "established", sources: ["S7"] },
    { text: "Synthetic cannabinoid toxicity: full CB1 agonists in dose-unpredictable sachets — severe agitation, seizures, psychosis, hyperthermia, hypertension and arrhythmias, worse than anything the plant produces; management by supportive emergency care, benzodiazepines for agitation and seizures, cardiac monitoring and cooling, followed by abstinence-focused poison-team follow-up.", grade: "established", sources: ["S10"] },
    { text: "The treatment core: no approved pharmacotherapy exists for cannabis use disorder — trials of N-acetylcysteine, gabapentin-type agents and cannabinoid-adjacent strategies show modest or negative signals; the evidence carried by motivational interviewing, contingency structures (verified abstinence linked to privileges), the family contract, structured reduction and comorbidity treatment as relapse prevention.", grade: "established", sources: ["S12", "S8"] },
    { text: "The diagnostic discipline: the quantified history (grams/₹ per week, potency, age at first use, days per month, longest break and why it ended, the function trajectory); the two-directional screening rule (every young psychosis patient screened for use with family collateral; every heavy-use adolescent screened for psychosis family history); and the 4–6 week abstinence re-assessment before any schizophrenia label in ambiguous pictures.", grade: "established", sources: ["S1", "S8", "S7"] },
    { text: "The Indian practice layer: the NDPS frame counselled accurately (low-quantity personal-use provisions distinct from trafficking penalties; bhang's anomalous quasi-legal status); the product-language screen ('gummies? oils? pens?') finding the school-college layer that ceremony-language histories miss; the rehab-camp shortcut mostly irrelevant for primary cannabis dependence (no dangerous withdrawal) with the structured family programme as the effective unit; Tele-MANAS linkage for families.", grade: "supported", sources: ["S11", "S13"] },
  ],
};
