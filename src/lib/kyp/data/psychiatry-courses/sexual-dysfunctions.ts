import type { PsychiatryCourse } from "./types";

/**
 * SEXUAL DYSFUNCTIONS — THE ACCELERATOR AND THE BRAKES — canonical
 * Psychiatry course (migration batch 4, Group I — sexuality & gender).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/sexual-dysfunctions.md — untouched foundation),
 * re-researched against current guidance (DSM-5's FSIAD and GPPPD
 * merges, the ISSM ~1-minute PE criterion, flibanserin/bremelanotide
 * approvals, Bancroft's Dual Control Model, Basson's receptive-desire
 * model, WPATH-class standards adjacency) with per-claim provenance.
 *
 * Drug routes: bupropion (the sexuality-sparing switch) and the SSRI
 * tier (sertraline, paroxetine, fluoxetine — the PE-exploitation and
 * the switch-from tiers) link to existing KYP drug lessons; sildenafil
 * and the PDE-5 class, dapoxetine and flibanserin have no KYP lessons
 * yet, recorded in contentGaps (never invented).
 */
export const sexualDysfunctionsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "sexual-dysfunctions",
  title: "Sexual Dysfunctions",
  shortName: "Sexual Dysfunctions",
  kind: "disorder",
  category: "Sexual Dysfunction",
  groupLetter: "I",
  groupName: "Sexuality & gender",
  learningPath: ["Psychiatry", "Sexuality & Gender", "Sexual Dysfunctions"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Accelerator and brakes, three assessment windows, and the couple as the unit of treatment",
  summary:
    "Sexual dysfunctions are persistent, distressing problems in desire, arousal, orgasm or pain. Assessment works through the situation, the person and health-and-medication effects, and management treats the couple rather than the individual alone.",
  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe the sexual response chain (DEOR) and explain why desire in women is often receptive rather than spontaneous (Basson's model).",
    "State the Dual Control Model and what high versus low inhibition propensity predicts clinically.",
    "Distinguish a sexual PROBLEM (common, often transient) from a DYSFUNCTION (persistent, distressing), quoting the NATSAL duration pair.",
    "List the main presentations in men (erectile difficulty, low desire, premature and delayed ejaculation) and in women (low desire/arousal overlap, orgasm difficulty, dyspareunia and vaginismus, PGAD).",
    "Work the three windows: current situation, individual vulnerability, health-and-medication — and reproduce the aetiology answer from them rather than memorising lists.",
    "Name the drug classes that impair sexual function (SSRIs, antipsychotics, beta-blockers, clonidine) and the two antidepressants that spare it (bupropion, nefazodone).",
    "Explain why nitrate use absolutely contraindicates PDE-5 inhibitors — the cGMP cascade in one breath.",
    "Structure sex therapy (the three-part behavioural programme, ~12 sessions over 4–5 months) and combine it rationally with pharmacotherapy — combined treatment beats medical alone.",
    "Manage confidentiality and cultural-value negotiation in the Indian clinic: the separate-notes discipline, the permission-giving tone, the non-imposition rule.",
  ],
  quickFacts: [
    { label: "The distinction", value: "Problem vs dysfunction", detail: "≥1 problem in the past year: ~53.8% of women, ~34.8% of men (≥1 month); the persistent tier: 15.6% and 6.2% (≥6 months) — 'common problem, uncommon dysfunction' (NATSAL/Mercer)" },
    { label: "The model", value: "Accelerator + brakes", detail: "The Dual Control Model (Bancroft): excitation plus inhibition, both running in the brain; inhibition propensity measurable, partly heritable in men; heavy brakes = the desire that evaporates when anything is wrong" },
    { label: "The women's-desire pearl", value: "Receptive desire", detail: "Desire frequently follows arousal rather than preceding it (Basson) — triggered by intimacy, arriving mid-response; why the male-template categories failed and DSM-5 merged them (FSIAD)" },
    { label: "The iatrogenic tier", value: "SSRIs first", detail: "Serotonergic inhibition of orgasm/ejaculation in both sexes — the most predictable drug effect in the field, silently driving non-adherence, and exploited as PE treatment" },
    { label: "The endocrine causes", value: "Prolactin + testosterone", detail: "Hyperprolactinaemia (pituitary adenoma; also antipsychotic-driven) and hypogonadism — the treatable, checkable causes of low desire; the assays not to miss" },
    { label: "The erection chemistry", value: "NO → cGMP", detail: "Arousal releases nitric oxide; cGMP relaxes cavernosal smooth muscle; PDE-5 destroys cGMP — the inhibitors let the signal last; ~75% effectiveness; NITRATES = the absolute contraindication (shared cGMP cascade → catastrophic hypotension)" },
    { label: "The programme", value: "3 parts, 12 sessions", detail: "Non-genital touch → genital touch (intercourse banned) → gradual penetration — each part surfaces its own material (relationship, then intrapersonal, then performance anxiety); weekly, ~4–5 months, a set number of sessions" },
    { label: "The age facts", value: "5% → 25%", detail: "Complete erectile failure 5% at 40 → 25% at 70 (MMAS); absent desire 2% (45–59) → 18.2% (75+); PE does NOT increase with age — the classic trap" },
    { label: "The Indian doors", value: "Dhat + infertility clinic", detail: "Consummation failure and vaginismus via gynaecology and infertility clinics; PE via urology and the unlicensed 'sex clinic' sector; SSRI-induced dysfunction via psychiatry as the hidden non-adherence driver; semen-loss anxiety (dhat) the culturally salient presentation" },
  ],
  knowledgeGraph: [
    { label: "Paraphilic Disorders", type: "condition", href: "/psychiatry/paraphilias/", note: "The harm-boundary chapter of atypical arousal — a different question from function; the consent line separates them" },
    { label: "Gender Identity in Adults", type: "condition", href: "/psychiatry/gender-identity-adults/", note: "Identity and function are orthogonal axes — the dysphoria course carries its own assessment tier" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Depression damps the excitation system itself (impaired nocturnal tumescence); a paradoxical minority report increased interest when low" },
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Anxiety as the heaviest brake — loss of interest in GAD, aversion in panic, PE notably common in social phobia" },
    { label: "Bupropion", type: "drug", href: "/drugs/bupropion/", note: "The sexuality-sparing antidepressant — the switch-to tier when SSRIs silence the response" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier's orgasm-delay exploitation in PE — the same effect that causes the dysfunction" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The accelerator's currency — and prolactin's opposite: the treatable endocrine tier of low desire" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the physiology. The accelerator and the brakes: the Dual Control Model pictures sexual response as an accelerator (excitation) plus brakes (inhibition), both running in the brain — 'normal' braking is adaptive (it shuts sexuality down when sex is unwise); people differ in brake-sensitivity from birth onwards (men's inhibition propensity shows heritability); heavy brakes produce the person whose desire evaporates the moment anything is wrong, light brakes the risk-taker — and anxiety, resentment, lack of privacy and performance fear all present clinically as 'brakes on', which is why they look like dysfunction and respond to context work. The plumbing story: the flaccid penis is kept flaccid by sympathetic (noradrenergic) tone squeezing its small vessels; arousal releases nitric oxide and VIP, relaxing cavernosal smooth muscle through the second messenger cGMP; blood fills the chambers against the non-stretchable tunica albuginea, veins are squeezed shut, the organ becomes rigid — and PDE-5 is the enzyme that destroys cGMP, so the inhibitors let the signal last, restoring the RESPONSE to stimulation (they do not create arousal; desire must still be present). The same nitrate-and-cGMP chemistry is why a PDE-5 inhibitor in a man on nitrates precipitates catastrophic hypotension — the absolute contraindication. The desire story is not the same story in women: desire and erectile responsiveness travel together in men, but in women the mapping is looser — desire is frequently receptive (triggered by intimacy, arriving after arousal begins — Basson's circular model), vaginal lubrication can occur as a reflex response to stimuli a woman does not subjectively find appealing, dryness does not necessarily mean absence of arousal, and the clitoris (the glans-shaft-crura-bulbs triplanar complex) engorges without true rigidity — the honest scepticism that led DSM-5 to merge the female categories rather than copy the male template. The drug effects tie the system together: SSRIs inhibit orgasm and ejaculation in both sexes (the primary effect appears to be on orgasm triggering), antipsychotics add dopamine blockade and prolactin elevation on top, and the two antidepressants that spare the system — bupropion and nefazodone — mark the switch-tier of the iatrogenic management.",
    steps: [
      "The chain: desire → arousal → orgasm → resolution (DEOR) — any link can fail in either sex.",
      "The accelerator-plus-brakes architecture: excitation and inhibition both running; inhibition propensity differs from birth (heritable in men) and heavy brakes masquerade as low desire.",
      "The erection cascade: NO release → cGMP → cavernosal smooth-muscle relaxation → rigidity against the tunica; PDE-5 destroys cGMP, so inhibition of PDE-5 prolongs the response to stimulation.",
      "The nitrate danger: nitrates also feed the cGMP cascade — the combination drops blood pressure catastrophically; the absolute contraindication.",
      "The female difference: receptive desire (Basson), reflex lubrication without subjective arousal, the clitoral complex's engorgement-without-rigidity — the template that broke the old categories.",
      "The iatrogenic layer: SSRIs on orgasm triggering (both sexes — the effect exploited in PE), antipsychotics on dopamine-and-prolactin, beta-blockers and clonidine on erection.",
      "The treatment logic: treat the couple; the behavioural programme's banned-intercourse structure removes the performance pressure while surfacing the material; drugs assist an existing response rather than creating one.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus (medial preoptic / paraventricular)", role: "The integrative hub of the excitation tier — where hormonal, tactile and cognitive inputs converge on the response cascade.", grade: "supported" },
    { id: "amygdala", name: "Amygdala–limbic system", role: "The brakes' emotional gate: threat, anxiety and resentment processed here shut the response down — the model's inhibition tier rendered anatomically.", grade: "supported" },
    { id: "frontal", name: "Prefrontal cortex", role: "The top-down modulation tier: attention, context-appraisal and the inhibition propensity the SIS/SES scales measure.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Nitric oxide / cGMP", symbol: "NO", role: "The erection's second-messenger cascade: NO → cGMP → smooth-muscle relaxation; the chemistry the PDE-5 inhibitors protect and the nitrates amplify to danger.", grade: "established" },
    { name: "Serotonin", symbol: "5-HT", role: "The orgasm-and-ejaculation brake: serotonergic activity inhibits triggering in both sexes — the SSRI effect exploited as PE treatment and suffered as dysfunction.", grade: "established", drugConnection: "See the sertraline and paroxetine lessons for the SSRI tier; fluoxetine's long half-life; the switch to bupropion's dopaminergic-and-noradrenergic profile." },
    { name: "Dopamine", symbol: "DA", role: "The accelerator's currency — desire and reward signalling; its suppression (antipsychotics) and prolactin's opposition form the treatable endocrine tier.", grade: "supported" },
  ],
  pathways: [
    {
      id: "sd-erection",
      name: "The erection cascade (why a tablet can fix it)",
      steps: [
        { label: "Sympathetic tone keeps the penis flaccid", detail: "Noradrenergic squeeze on the small vessels — the default state" },
        { label: "Arousal releases NO and VIP", detail: "Parasympathetic activation under erotic stimulation" },
        { label: "cGMP relaxes cavernosal smooth muscle", detail: "Blood fills the chambers against the non-stretchable tunica albuginea; veins squeeze shut — rigidity" },
        { label: "PDE-5 destroys cGMP", detail: "The off-switch the inhibitors block: the response to stimulation lasts longer" },
        { label: "The nitrate interaction", detail: "Nitrates feed the same cascade — the combination = catastrophic hypotension, the absolute contraindication" },
      ],
      clinicalManifestation: "Erectile difficulty responding to PDE-5 inhibition in ~75%; the nitrate question asked before every prescription.",
      grade: "established",
    },
    {
      id: "sd-brakes",
      name: "The brakes that masquerade as low desire",
      steps: [
        { label: "The context turns negative", detail: "Resentment, anxiety, no privacy, performance fear — processed as threat" },
        { label: "The inhibition system engages", detail: "The adaptive brake applied (the model's 'normal' function)" },
        { label: "The response shuts down", detail: "Presenting as absent desire or arousal failure — the system intact, the context wrong" },
        { label: "The treatment answers on both axes", detail: "Context-and-couple work for the brake; the medical workup for the rare organic engine" },
      ],
      clinicalManifestation: "'She has no interest' — the marriage problem presenting through sex; the two-window check before any prescription.",
      grade: "supported",
    },
    {
      id: "sd-ssri-effect",
      name: "The SSRI orgasm brake (and its exploitation)",
      steps: [
        { label: "Serotonergic activity rises", detail: "5-HT at the orgasm-triggering tier — the most predictable drug effect in the field" },
        { label: "Orgasm and ejaculation delay or vanish", detail: "Both sexes; the anorgasmia patients rarely volunteer" },
        { label: "The clinical double-face", detail: "The side effect exploited as PE treatment (daily dosing; on-demand dapoxetine built for it)" },
        { label: "The management ladder", detail: "Wait for tolerance → dose-reduce → switch (bupropion, nefazodone) → the antidote strategies — never silent stopping" },
      ],
      clinicalManifestation: "The panic-disorder patient 'wanting a stronger tablet' whose marriage stopped; the hidden non-adherence driver.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "sd-onset", time: "Any age, by door", title: "The presentation arrives through its door", description: "Men: erectile difficulty rising with age (5% complete failure at 40 → 25% at 70), PE steady across ages, delayed ejaculation often iatrogenic. Women: desire-and-arousal overlap presentations, orgasm difficulty, the pain-penetration tier, PGAD.", phase: "onset" },
    { id: "sd-iatrogenic", time: "Weeks after a prescription", title: "The iatrogenic window", description: "SSRI-and-antipsychotic effects emerge within weeks of starting or dose-escalating — the tier nobody volunteers and everybody silently stops medication over; ask explicitly, always.", phase: "peak" },
    { id: "sd-chronicity", time: "Months to years", title: "The concealment economy", description: "The untreated persistent tier: the affair considered, the marriage attributed, the unlicensed 'sex clinic' underground economy (unregulated injections, tonics) consuming the untreated Indian rupee.", phase: "duration" },
    { id: "sd-treatment", time: "~12 sessions over 4–5 months", title: "The programme season", description: "The three-part behavioural programme with intercourse banned; drugs added within the therapy where indicated, then tapered as the relationship recovers — combined treatment beats medical alone.", phase: "recovery" },
    { id: "sd-arc", time: "Months to years", title: "The honest arc", description: "With treatment, most couples achieve function and comfort — the consummation-failure tier within months, the erectile tier at three-quarters response; the honest expectations: the drug assists, the relationship work cures, maintenance tapers.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Rates depend on definitions — the lesson the two national surveys teach: the US Laumann survey reported 'sexual dysfunction' in 43% of women and 31% of men (problems of several months in the past year), while the British NATSAL with explicit durations found 53.8% of women and 34.8% men with at least one problem lasting ≥1 month, but only 15.6% and 6.2% lasting ≥6 months. In men, complete erectile failure rises 5% (age 40) → 25% (age 70); absent desire 2% (45–59) → 18.2% (75+); PE does NOT increase with age. In women, interest declines with age but older women are less likely to consider it a problem; partner availability shapes women's sexuality more than men's.",
    indianPrevalence: "No comparable national probability survey exists — the honest statement; clinic-based experience says the same problems arrive through different doors: consummation failure and vaginismus via gynaecologists and infertility clinics rather than psychiatry; erectile difficulty via urologists and the unlicensed 'sex clinic' sector (notorious for exploitation); desire problems after childbirth or during depression arriving disguised as 'weakness' or marital conflict; semen-loss anxiety ('dhat') and nightfall worries as culturally salient presentations. The practical epidemiology the psychiatrist needs: SSRI- and antipsychotic-induced sexual dysfunction is likely the most common IATROGENIC sexual dysfunction in Indian OPDs — and a leading hidden cause of self-stopping medication.",
    lifetimeRisk: "Transient problems near-universal; the persistent minority carries the clinical load — most treatable, with combined psychological-and-medical care.",
    genderRatio: "Women report more problems in every survey (the 1-month tier ~54% vs ~35%) — with distress predicted by mental health and relationship quality rather than physical response markers.",
    ageOfOnset: "All ages by cause: the performance-anxiety and PE tier in young men; the erectile tier rising with age and vascular risk; the menopausal and postpartum tiers in women.",
    indianNotes: "The asking-discipline: one respectful, routine sexual question in every relevant consultation opens more detection than any instrument — patients almost never volunteer sexual complaints, and the unasked side effect becomes the silently stopped prescription.",
  },
  etiology: [
    { category: "psychological", factor: "Window 1 — the current situation", details: "Relationship problems (especially resentment and insecurity — 'letting go' needs safety); poor communication; misunderstandings and lack of information; unsuitable circumstances (fatigue, no privacy, work pressure); pregnancy-or-STI concerns; low self-esteem and body image." },
    { category: "psychological", factor: "Window 2 — individual vulnerability", details: "Long-standing negative attitudes to sex from childhood; the need for self-control and difficulty letting go; sexual-abuse history (relevance established, mechanisms unclear — screen sensitively, don't assume); measurable sexual-inhibition propensity (roughly normally distributed, partly heritable in men; 'arousal contingency' in women — arousal that collapses when circumstances are not just-right or attention drifts)." },
    { category: "biological", factor: "Window 3 — health and medication (the medical core)", details: "Depression (damped excitation — impaired nocturnal tumescence; a paradoxical minority report increased interest when low: 23.3% of depressed vs 6.9% of non-depressed men, 8.8% vs 1.7% women); anxiety disorders (GAD interest-loss, panic aversion, PE common in social phobia); schizophrenia; neural damage (neuropathy, MS, cord injury, prostatectomy, hysterectomy); vascular disease; endocrine (low testosterone, menopausal oestrogen lack, hyperprolactinaemia — the pituitary adenoma tier); hepatic and renal disease; diabetes (the multi-channel model: small-vessel + autonomic + hypogonadism; ED more in Type 1 than Type 2)." },
    { category: "pharmacological", factor: "The drug classes (memorise the set)", details: "SSRIs (orgasm/ejaculation inhibition — the most predictable effect); tricyclics; antipsychotics (~60% of men, 30–90% of women affected); beta-blockers such as propranolol; clonidine (erectile problems ~25%); guanethidine; steroidal contraceptives (reduce free testosterone — interest reduced only in a minority); the two spares: bupropion and nefazodone." },
    { category: "social", factor: "Indian delivery architecture", details: "The thin-privacy joint-family household; the arranged-marriage negotiation tier where consummment failure hides behind infertility work-ups; the 'sex clinic' underground preying on the unasked question; the dhat-semen-anxiety economy of tonics and quackery." },
  ],
  symptomClusters: [
    {
      category: "1. In men",
      symptoms: ["Erectile difficulty (getting or keeping; occasional-to-complete; the partner's reaction often determines the disability)", "Low desire (usually linked to fewer spontaneous erections; tangled with the erectile tier and the which-came-first question)", "Premature ejaculation (cannot delay as desired; primary-lifelong vs secondary-acquired; secondary confounded by erectile difficulty — the man who takes longer to erect reaches threshold earlier; severe: emission precedes entry)", "Delayed or absent ejaculation (often iatrogenic-SSRI; may be partner-only or masturbation-only)", "Pain: testicular ache after unrelieved arousal; urethral pain at ejaculation (both uncommon)"],
    },
    {
      category: "2. In women",
      symptoms: ["Low desire / arousal problems (the most common presentation; the categories overlap heavily)", "Orgasm difficulty (often situational — masturbation yes, partner no; ~10–15% never experience orgasm in a lifetime; confirm adequate arousal before calling it an orgasm problem)", "Dyspareunia and vaginismus (the DSM-5 merge into genito-pelvic pain/penetration disorder; vulvar vestibulitis as the touch-pain tier)", "Persistent genital arousal disorder (PGAD): vasocongestion persisting hours-to-days, only briefly relieved by orgasm, intrusive and unwanted, no desire — no male equivalent (the longer refractory period explains why)", "Sexual aversion (extreme avoidance of all contact; infrequent, both sexes)"],
    },
    {
      category: "3. The iatrogenic signature",
      symptoms: ["SSRI: orgasm delayed or absent with desire and erections preserved — the classic pattern", "Antipsychotic: desire-down plus mechanical difficulties on top (prolactin and dopamine tiers)", "Beta-blocker/clonidine: the erectile tier", "The behaviour that reveals it: the silently stopped prescription, the 'medicine is not suiting me' vagueness, the panic-disorder patient whose marriage quietly ended"],
    },
    {
      category: "4. The Indian presenting doors",
      symptoms: ["The infertility-clinic couple with never-consummated marriage", "The urology-and-'sex-clinic' circuit for PE and 'weakness'", "The 'dhat' presentation: semen-loss anxiety, nightfall worries, fatigue attributions", "The postpartum-or-depression desire loss disguised as marital conflict", "The psychiatrist's own OPD: the unasked SSRI side effect"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Sexual dysfunctions (various; 302.70–302.76 / F52.x)",
      criteria: [
        "The modern architecture (post-Oxford updates DSM-5 made from exactly this chapter's critique): female desire and arousal merged into female sexual interest/arousal disorder (FSIAD); dyspareunia and vaginismus merged into genito-pelvic pain/penetration disorder (GPPPD); premature ejaculation defined around ejaculation within about 1 minute of penetration (the ISSM criterion).",
        "The shared gates: persistent (typically ~6 months) marked difficulty or disruption; clinically significant distress; not better explained by another condition, substance or high-stress context.",
        "The problem-vs-dysfunction discipline: duration (persistent, not a bad month) plus context (an understandable or adaptive response to circumstances is NOT a malfunction — the Dual Control Model's adaptive inhibition).",
      ],
      duration: "~6 months of persistence with marked distress (the DSM-5 duration specification).",
      indianNote: "The interview craft: see both partners wherever possible — conjoint first, then each separately; cover the problem, each partner's interest-and-response, sexual history, relationship, contraceptive-and-reproductive history, alcohol and drugs, mental state; assess motivation (couple therapy fails when one attends under protest); end the first interview with a preliminary formulation. The two questions that separate the tiers: is desire present (if yes, the wiring usually is)? Are morning erections normal (if yes, the vasculature is)?",
    },
    {
      system: "ICD-11",
      code: "Conditions related to sexual health (F52-lineage, HA20-block)",
      criteria: [
        "The ICD-11 frame houses these in the sexual-health conditions block — the de-pathologising architecture this field pioneered.",
        "The same presentation set: desire-arousal, orgasm, pain-penetration, and the male-specific tiers.",
      ],
      duration: "Persistence over months.",
      indianNote: "Instruments named-not-reproduced: the IIEF (erectile function) and its short form; the FSFI for women; the SIS/SES scales (the Dual Control Model's measurement); the EDE not applicable here — used in the eating-disorder tier.",
    },
  ],
  severityScales: [
    {
      name: "IIEF-5",
      fullName: "International Index of Erectile Function — 5-item version",
      measures: "The erectile-tier severity instrument (named, not reproduced) — the urology-tier standard that maps mild-to-severe erectile difficulty.",
      ranges: [
        { min: 22, max: 25, severity: "No erectile difficulty", action: "The distress tier asks the context questions; the three-window assessment still runs" },
        { min: 17, max: 21, severity: "Mild", action: "The PDE-5-tier conversation plus the couple-and-context work; the medical workup (glucose, lipids, testosterone, prolactin)" },
        { min: 12, max: 16, severity: "Mild-to-moderate", action: "Full assessment: vascular-and-endocrine workup, the sex-therapy-first sequencing where window-1/2 factors dominate" },
        { min: 8, max: 11, severity: "Moderate", action: "Combined treatment architecture — therapy plus pharmacotherapy beats medical alone" },
        { min: 1, max: 7, severity: "Severe", action: "The specialist urology tier (including the injection-and-device options) alongside the couple work" },
      ],
      indianNote: "The nitrate question precedes every PDE-5 prescription at ANY severity — the absolute contraindication the chemist's counter must not be the first line asking it.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The normal bad month (problem, not dysfunction)", distinguishingFeatures: "Transient, situational, stress-linked.", keyDifferentiator: "The duration gate (~6 months) and the context test — an understandable response to circumstances is adaptive inhibition, not disorder." },
    { condition: "Depression's interest loss", distinguishingFeatures: "Mood leads; anhedonia across domains.", keyDifferentiator: "The desire follows the mood — treat the depression and re-assess; the morning-erection and nocturnal-tumescence markers stay intact in pure situational loss." },
    { condition: "The iatrogenic tier", distinguishingFeatures: "Onset tracks the prescription or dose change.", keyDifferentiator: "The SSRI pattern (desire-and-erections preserved, orgasm delayed) and the antipsychotic pattern (desire down) — the medication timeline is the diagnosis." },
    { condition: "Hyperprolactinaemia / hypogonadism", distinguishingFeatures: "Low desire with galactorrhoea, headache (mass effect) or hypogonadal signs.", keyDifferentiator: "The assays: prolactin and testosterone — the treatable endocrine tier; the pituitary adenoma not to miss." },
    { condition: "Pelvic-and-local pathology (vestibulitis, endometriosis, Peyronie's)", distinguishingFeatures: "Pain-led, mechanically consistent.", keyDifferentiator: "The gynaecology-and-urology examination the pain-penetration tier always earns." },
    { condition: "The paraphilic question", distinguishingFeatures: "Function intact with the preferred stimuli.", keyDifferentiator: "The arousal template, not the machinery — a different chapter's question (see the Paraphilic Disorders course)." },
    { condition: "PGAD vs hypersexuality", distinguishingFeatures: "Genital arousal without desire (intrusive, unwanted) vs desire-driven behaviour.", keyDifferentiator: "PGAD's signature: vasocongestion unrelieved except briefly by orgasm, no wanting attached; the distress is the unwantedness." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "Sex therapy — the three-part behavioural programme (~12 sessions, 4–5 months)",
      description: "Part 1: non-genital touch with intercourse banned — surfaces relationship material (distrust, resentment, the stereotyped assumptions). Part 2: genital-plus-non-genital touch, intercourse still banned — surfaces the intrapersonal material (old attitudes, abuse sequelae). Part 3: gradual approach to penetration — surfaces performance anxiety and pain-fear. Weekly initially with a SET number of sessions agreed at the outset; the goals are comfort, trust and intimacy, not direct symptom reversal — with the specific-technique exceptions of PE and vaginismus where behavioural method cures directly.",
      whenToUse: "The first-line architecture — and the diagnostic sequencing law: if window-1/2 factors are evident, do NOT start drugs; the programme's first two stages are themselves the assessment.",
      indianContext: "Cultural negotiation, not imposition: much of sex therapy 'gives permission' for interaction patterns drawn from Western middle-class values; with Indian couples (arranged or love marriages, joint-family thin-privacy, religious frames) the discipline is to surface and negotiate differing values, never impose the therapist's.",
    },
    {
      category: "pharmacotherapy",
      name: "Pharmacological treatment — men",
      description: "PDE-5 inhibitors first-line for erectile difficulty: sildenafil 25–100 mg ~1 hour before (hours of effect), tadalafil ≥30 min (up to 24–36 h), vardenafil 5–20 mg; ~75% effectiveness; dose-related headache-flushing-dyspepsia; ABSOLUTE contraindication: nitrates. The honest expectations: only 16% of identified men maintain long-term use (dropout reflects information-poverty, side-effect fear and partner concerns — tell couples the drug ASSISTS response, it does not cure; the problem usually returns when it stops). PE: SSRIs exploit the orgasm-delay (continued dosing; benefit may lag week one; avoid abrupt withdrawal); the on-demand short-acting dapoxetine (post-Oxford) built specifically for PE. Delayed ejaculation: NO accepted pharmacological treatment — the sobering exam fact. Low desire: treat the treatable — testosterone for confirmed hypogonadism (transdermal steadier than injections); dopamine agonists for hyperprolactinaemia.",
      whenToUse: "After physical examination and baseline tests; within the therapy programme where possible.",
      indianContext: "Sildenafil generic-and-inexpensive (rupee-range per tablet); tadalafil similarly; the 'sex-clinic' underground (unregulated injections, tonics, hormonal cocktails) is the dangerous default the formal system's silence feeds — every honest consultation closes that market one patient at a time.",
    },
    {
      category: "pharmacotherapy",
      name: "Pharmacological treatment — women (the honest limitation)",
      description: "Genuinely limited: testosterone shows the best evidence in ovariectomized women (supraphysiological levels on treatment, unknown long-term risks, regulatory reluctance for intact ovaries); PDE-5 inhibitors unsuccessful overall (subgroups may benefit); apomorphine, phentolamine, bupropion exploratory; the post-Oxford approvals flibanserin (2015) and bremelanotide (2019) for premenopausal low desire carry modest effect sizes. The realistic core of women's treatment: the couple-psychosexual approach plus treating depression and reviewing medication.",
      whenToUse: "Where chosen after honest effect-size counselling; never as the sole plan.",
      indianContext: "The counselling discipline: most Indian women presenting with desire complaints are served by the context-and-relationship work plus the depression tier — the pharmacological ceiling is honest everywhere, and more so where monitoring capacity is thin.",
    },
    {
      category: "psychotherapy",
      name: "The iatrogenic management ladder (the psychiatrist's daily version)",
      description: "For SSRI-induced dysfunction: wait (tolerance possible) → dose-reduce → switch (bupropion, nefazodone — the sparing pair) → schedule-and-holiday strategies with careful risk-benefit → the antidote strategies used in practice. For antipsychotic-induced: check prolactin (the dopamine-blockade tier), consider prolactin-sparing options, and NEVER let the patient silently stop the antipsychotic.",
      whenToUse: "Every psychiatric review where an SSRI or antipsychotic is prescribed — the asking-discipline IS the intervention.",
      indianContext: "The Indian rule written hard: ask about it explicitly — patients almost never volunteer sexual side effects, and silent non-adherence is the price of not asking; the 'medicine is not suiting me' vagueness gets the direct question.",
    },
    {
      category: "lifestyle",
      name: "Combining the two (the evidence tier)",
      description: "Studies combining psychotherapy-or-counselling with sildenafil, intracavernosal injections or vacuum devices consistently beat medical treatment alone. The algorithm: sex therapy first (diagnostic-plus-therapeutic), add medication where indicated WITHIN the continuing programme, then attempt gradual withdrawal or intermittent use as the relationship improves.",
      whenToUse: "The default architecture for the persistent tier.",
      indianContext: "The psychiatrist comfortable asking sexual questions, working psychotherapeutically with couples and knowing CBT can deliver the programme — with the prescribing advantage; formal sex therapists are scarce; referral to urology/gynaecology for physical disease or the few experienced therapists otherwise.",
    },
  ],
  safety: {
    redFlags: [
      "Nitrate co-use (absolute PDE-5 contraindication) — ischaemic heart disease patients sourcing sildenafil without the question asked",
      "The pituitary mass tier: headache-and-visual-field signs with hyperprolactinaemic low desire — the adenoma not to miss",
      "Sudden erectile loss in a young man — the early-vascular-warning reading (the penile artery as the canary)",
      "Vomiting-or-fainting with a new PDE-5 prescription — the interaction tier, same-day review",
      "The unlicensed 'sex clinic' route: unregulated injections, hormonal cocktails, exploitation — ask where treatment has come from",
      "The silently stopped antidepressant-or-antipsychotic — the hidden non-adherence the unasked question produces",
    ],
    urgentGuidance:
      "The safety architecture: (1) the nitrate question before every PDE-5 prescription — and the chemist-counter reality means asking the patient directly too (the angina patient self-sourcing sildenafil is the classic interaction death); (2) the endocrine red flags (headache, visual-field change, galactorrhoea) earn the prolactin-and-imaging pathway; (3) the STI-and-pregnancy conversation the dysfunction work-up includes; (4) the confidentiality architecture: private moment for the sexual history, explicit agreement on what goes in notes and referral letters, sexual-detail notes kept out of the general file relatives may handle — the Indian file that many hands carry.",
  },
  drugLinks: [
    { name: "Bupropion", slug: "bupropion", role: "The sexuality-sparing switch", rationale: "The dopaminergic-and-noradrenergic profile without serotonergic inhibition — the switch-to tier when SSRIs silence orgasm; also the ADHD-comorbid option (see its lesson)." },
    { name: "Sertraline", slug: "sertraline", role: "The PE-exploitation tier", rationale: "The orgasm-delay effect dosed daily for premature ejaculation — the same mechanism that causes the dysfunction, prescribed on purpose." },
    { name: "Paroxetine", slug: "paroxetine", role: "The PE-exploitation tier (strongest delay)", rationale: "The SSRI with the most-marked delay effect used for PE — and the cautionary short-half-life discontinuation story of its own lesson." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "The SSRI tier with the longest half-life", rationale: "The same orgasm-inhibition class-effect; its long half-life smooths the dose-and-holiday strategies; the switch question answered by bupropion." },
  ],
  contentGaps: [
    "Sildenafil and the PDE-5 class — the erectile first-line — have no KYP drug lessons yet (the most-wanted gap for this course; the nitrate contraindication is taught here pending that lesson).",
    "Dapoxetine — the on-demand short-acting SSRI built for PE — has no KYP drug lesson.",
    "Flibanserin and bremelanotide — the premenopausal-deside approvals — have no KYP drug lessons (the honest modest-effect-size tier).",
    "Testosterone replacement therapy — the confirmed-hypogonadism tier — has no KYP lesson; the assay-and-refer discipline is taught here.",
  ],
  patientGuide: {
    whatIsIt:
      "A persistent, distressing problem in the sexual response chain — desire, arousal, orgasm or comfort — in men or women. It is very common: more than half of women and a third of men have at least one problem in a given year, and most are brief. The clinical tier — the problems lasting six months or more that genuinely trouble you — is treatable, with a combination of couple-focused therapy, honest medical checks and, for some problems, effective medicines.",
    whatCausesIt:
      "Three windows: the situation (stress, resentment, no privacy, performance worry — the 'brakes' of the sexual system, which is designed to shut down when things are wrong); the person (long-held attitudes, difficulty letting go, past experiences); and the body (diabetes, hormones, blood vessels, and medicines — antidepressants and blood-pressure tablets are the most common culprits doctors forget to ask about). Which window dominates decides what treatment fixes it.",
    symptoms:
      "In men: difficulty getting or keeping an erection; low interest; ejaculation that comes too soon, too late or not at all. In women: low desire that overlaps with arousal difficulty; orgasm difficulty (often only in some situations); pain on penetration or a tightening that blocks it; rarely, persistent unwanted genital arousal. The medicine-pattern to know: antidepressants of the SSRI type typically delay or block orgasm while leaving desire and erections intact — tell your doctor; there are switch options.",
    treatment:
      "The evidence is clear that treating the COUPLE and the context beats tablets alone. The structured programme (about 12 sessions over 4–5 months) rebuilds comfort in stages with intercourse initially off the table — removing the performance pressure that maintains the problem. Medicines have a real place: the PDE-5 tablets work for about three-quarters of men with erectile difficulty (never with nitrate heart medicines); one SSRI-type medicine helps premature ejaculation; hormone treatment helps the confirmed-hormone tier. For women's desire problems the couple-and-mood work remains the core — the honest position, with modest-effect medicines available in some markets.",
    selfHelp: [
      "Ask the question you are not being asked: sexual side effects of any new medicine belong in every review — your doctor can switch, dose-adjust or time doses around them.",
      "Retire the performance frame: the programme's structure (touch first, intercourse later, on the therapist's schedule) is the principle you can begin at home.",
      "Check the basics that mimic dysfunction: sleep, alcohol, the relationship's unfinished arguments, the blood-pressure tablet.",
      "The two self-tests that guide the doctor: morning erections (present = the plumbing usually is) and situational pattern (works alone, not together = the context tier).",
      "Avoid the 'sex clinic' underground — unregulated injections and hormonal cocktails are the expensive-and-dangerous default; the formal system will not shock you if you ask plainly.",
    ],
    whenToSeekHelp: [
      "A problem persisting roughly six months with real distress — the dysfunction tier that deserves assessment",
      "Erection loss in a man with heart risk factors — the penile artery can be the heart's early-warning system",
      "Any sexual side effect after starting a psychiatric or blood-pressure medicine — same-week review; do not silently stop",
      "Pain on penetration that is new, worsening or bleeding — the gynaecological examination tier",
      "Desire loss with headaches, visual change or milk discharge — the prolactin-and-pituitary check",
    ],
    indianResources: [
      "Psychiatry OPDs and tele-consult tiers (Tele-MANAS 14416 for the mood-and-anxiety tiers that ride with sexual problems)",
      "Government and metro hospital urology/gynaecology for the physical tiers",
      "The treating psychiatrist as the sex-therapy-capable clinician — comfortable asking, prescribing and referring",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific sexual-medicine guideline exists; management follows the international evidence architecture (the Masters-and-Johnson behavioural canon, Bancroft's model, WPATH-class standards for the adjacent gender tier, the ISSM PE criterion) with Indian adaptation craft: the permission-giving consultation, the confidentiality architecture, the value-negotiation discipline.",
    systemContext: "The Indian presenting doors differ from the textbook: consummation failure and vaginismus arrive via gynaecology and infertility clinics; premature ejaculation via urology, the unlicensed 'sex clinic' sector and over-the-counter pharmacy requests; desire problems via marital discord, 'weakness' and postpartum complaints; drug-induced dysfunction via psychiatry; dhat syndrome — semen-loss anxiety with fatigue and mood attributions — as the culturally salient idiomatic presentation documented across Indian literature. The asking-discipline is the detection system: one respectful, routine sexual question in every relevant consultation opens the door wider than any poster.",
    programmeContext: "Formal sex therapists are scarce; the psychiatrist who is comfortable asking, works psychotherapeutically with couples and knows CBT can deliver the programme — with the prescribing advantage; urology/gynaecology referral for physical disease; the tele-consult tier extends the permission-giving consultation; the unlicensed 'sex clinic' underground (unregulated injections, tonics, hormonal cocktails) is the expensive-and-dangerous default the formal system's silence feeds.",
    costConsiderations: "Sildenafil generic-and-inexpensive (rupee-range per tablet, brand-dependent); tadalafil similarly; testosterone-and-prolactin assays available in most cities; the SSRI-tier switches at standard psychiatric costs; the behavioural programme costs sessions not medicines (CBT-metro ₹600–1,500); the 'sex-clinic' underground's true cost measured in injections-and-exploitation (approx 2026).",
    culturalConsiderations: "Language and permission: patients respond to plain, matter-of-fact vocabulary and permission-giving ('many couples face this; it is common and treatable') far better than anatomical lectures; withhold the smile, the embarrassment and the moral commentary — the consultation's tone is the intervention. Confidentiality carries extra weight: couples may not have discussed sex with each other, let alone a doctor; families accompany patients and ask questions — the private moment for the sexual history, the explicit agreement on what enters notes and referral letters, the sexual-detail notes kept out of the general file. Cultural negotiation not imposition: surface and negotiate differing values with Indian couples (arranged-or-love marriages, joint-family thin-privacy, religious frameworks); never impose the therapist's.",
    patientCounselling: [
      "The one-question discipline for every relevant consultation: 'many couples face difficulties in their intimate life at some point — is anything troubling you?' — asked plainly, without the smile or the apology.",
      "The dhat-frame conversation: semen-loss anxiety addressed with physiology (the production-and-reabsorption facts), the anxiety-tier treatment, and the quack-tonic economy named and retired.",
      "The SSRI conversation at every initiation: 'this medicine commonly delays or blocks orgasm — if that happens, tell me; we have switches' — the price of not saying it is the silently stopped prescription.",
      "The nitrate teaching for every man asking about 'the tablet': the angina patient self-sourcing sildenafil from the chemist is the interaction death the formal question prevents.",
      "The infertility-clinic bridge: the never-consummated marriage hiding behind fertility work-ups — one private question to each partner converts the referral; the graduated programme plus CBT resolves most within months.",
      "The separate-notes architecture: sexual-detail notes out of the general file relatives may handle — agreed explicitly with the patient before anything is written.",
    ],
  },
  decisionPath: {
    title: "The sexual-problem assessment",
    nodes: [
      {
        id: "start",
        question: "A patient (or couple) presents with a sexual problem — or one is found behind a referral, a stopped medicine, or an infertility work-up. What is the tier?",
        branches: [
          { label: "Persistent (~6 months) + distressing", next: "windows" },
          { label: "Transient, situational, stress-linked", next: "problem-tier" },
          { label: "Onset tracks a medicine", next: "iatrogenic" },
          { label: "Never-consummated marriage at the fertility clinic", next: "consummation" },
        ],
      },
      {
        id: "windows",
        question: "THE THREE WINDOWS: Window 1 — the situation (resentment, no privacy, performance fear)? Window 2 — the person (old attitudes, letting-go difficulty, trauma history)? Window 3 — the body (diabetes, vascular, endocrine, prolactin, medicines)?",
        branches: [
          { label: "Windows 1-2 dominate", next: "therapy-first" },
          { label: "Window 3 signals (or unknown)", next: "workup" },
        ],
      },
      {
        id: "therapy-first",
        question: "Context-and-person factors evident.",
        recommendation: "Do NOT start drugs. The three-part behavioural programme (non-genital touch → genital touch, intercourse banned → gradual penetration; ~12 sessions over 4–5 months) — simultaneously diagnostic and therapeutic, surfacing the resentment, the old attitudes and the performance anxiety in sequence; re-appraise after 3–4 sessions and decide on adding a drug; the conjoint-then-separate interview architecture; motivation assessed (one partner under protest = the failure predictor).",
      },
      {
        id: "workup",
        question: "The medical tier.",
        recommendation: "Physical examination, glucose (diabetes), testosterone and prolactin (low desire — the treatable causes: hypogonadism, the pituitary adenoma), lipids and vascular assessment for erectile difficulty; the baseline before any pharmacology; then PDE-5 initiation within the couple programme where indicated (the nitrate question first, always), or the endocrine referral the assays dictate.",
      },
      {
        id: "iatrogenic",
        question: "The medicine timeline maps the problem.",
        recommendation: "The ladder: wait-for-tolerance → dose-reduce → switch (bupropion, nefazodone — the sparing pair) → schedule-and-holiday strategies → the antidote strategies; for antipsychotics, check prolactin and consider prolactin-sparing options — and NEVER let the patient silently stop; the sexual question asked at every psychiatric review IS the non-adherence prevention.",
      },
      {
        id: "consummation",
        question: "The genito-pelvic pain/penetration presentation.",
        recommendation: "Gynaecological examination to exclude vestibulitis and local pathology; the graduated programme (non-genital → genital → gradual insertion with her controlling pace) plus CBT for catastrophised pain; the ban on scheduled performance attempts at home; his situational erectile difficulty (normal morning erections prove the vasculature) resolves with the pressure removed — the couple, not the woman, is the unit of treatment.",
      },
      {
        id: "problem-tier",
        question: "Transient, situational.",
        recommendation: "Reassurance with the honest epidemiology (a bad month is not a dysfunction; the problem tier is near-universal), the context addressed, the basics checked (sleep, alcohol, the blood-pressure tablet), review if persistence crosses the ~6-month gate.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing a PDE-5 inhibitor without the nitrate question",
      why: "The shared cGMP cascade means the combination produces catastrophic hypotension — the absolute contraindication the chemist-counter self-sourcing bypasses.",
      correction: "The nitrate question before every prescription at every severity — asked of the patient directly too, because the angina patient buying sildenafil over the counter is the classic interaction death.",
    },
    {
      mistake: "Treating the person when the problem is the couple's (or the marriage's)",
      why: "The wife's low desire in a resentful marriage is adaptive inhibition — a functioning system in a failing context; the tablet has nothing to fix.",
      correction: "The three-window assessment, the conjoint interview, and the couple-as-unit law the treatment evidence rests on.",
    },
    {
      mistake: "Missing the SSRI side effect nobody volunteered",
      why: "Patients almost never volunteer sexual side effects — the unasked question becomes the silently stopped prescription and the 'medicine stopped suiting me' relapse.",
      correction: "Ask at every initiation and every review: the one-sentence warning at prescribing ('this commonly delays orgasm — tell me if it happens; we have switches') is the adherence intervention.",
    },
    {
      mistake: "Copying the male template onto women's presentations",
      why: "Desire in women is often receptive (after arousal, from intimacy — Basson); reflex lubrication does not mean subjective arousal; the old categories failed on exactly this.",
      correction: "The circular model in the assessment; DSM-5's merges (FSIAD, GPPPD) followed the evidence; the distress question (predicted by mood-and-relationship, not by physical response markers) guides the treatment.",
    },
    {
      mistake: "Diagnosing PE without the erectile screen",
      why: "Secondary PE is confounded by erectile difficulty — the man slower to erect reaches ejaculation threshold earlier in the arc.",
      correction: "The morning-erection and situational questions first; treat the erectile tier and the PE may resolve with it.",
    },
    {
      mistake: "Promising the tablet as the cure",
      why: "Only ~16% of identified men maintain long-term PDE-5 use — dropout is information-poverty, side-effect fear and partner concerns; the drug assists a response, it does not create one.",
      correction: "The expectation-setting conversation at prescription: assists-not-cures, works-with-desire, returns-when-stopped — and the couple work that makes stopping possible.",
    },
    {
      mistake: "The moral-commentary consultation",
      why: "The embarrassed or judgemental clinician closes the door the patient barely opened — and the 'sex clinic' underground waits outside.",
      correction: "The tone is the intervention: plain vocabulary, permission-giving, the matter-of-fact question; the separate-notes architecture for the confidentiality the Indian file demands.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The sexual response chain and where each presentation fails.",
        "The Dual Control Model and its clinical predictions.",
        "Drugs causing sexual dysfunction; the sparing pair.",
        "PDE-5 inhibitors: mechanism, efficacy, the nitrate contraindication.",
      ],
      practical: [
        "Take a sexual history with the three-window structure and the normalised questions.",
        "Counsel a couple starting the behavioural programme — the banned-intercourse logic explained.",
      ],
      longAnswer: [
        "A 31-year-old on sertraline whose marriage has stopped: assessment and management.",
        "Sexual dysfunctions: classification, aetiology (three windows), principles of management.",
      ],
    },
    neetPg: {
      highYield: [
        "The duration pair (the exam favourite): ≥1-month problems ~54% women / ~35% men; ≥6-month 15.6% / 6.2% — 'common problem, uncommon dysfunction' (NATSAL/Mercer; vs Laumann's 43%/31% without durations).",
        "Age facts: complete ED 5% at 40 → 25% at 70; absent desire 2% → 18.2%; PE does NOT increase with age (the classic trap).",
        "SSRIs inhibit orgasm/ejaculation in BOTH sexes (5-HT1A-tier effect) — exploited as PE treatment; bupropion and nefazodone the sparing pair.",
        "Antipsychotics: ~60% of men, 30–90% of women affected — prolactin and dopamine mechanisms.",
        "PDE-5 essentials: NO → cGMP cascade; ~75% efficacy; sildenafil ~1 h / tadalafil 24–36 h; NITRATES absolute; only 16% maintain long-term use.",
        "Delayed ejaculation has NO accepted pharmacological treatment — the sobering one-liner.",
        "DSM-5's merges: FSIAD (desire-arousal) and GPPPD (dyspareunia-vaginismus); PE ≈ 1 minute (ISSM).",
        "Hyperprolactinaemia = the treatable endocrine cause of low desire (the adenoma tier); check prolactin and testosterone.",
        "PGAD: genital arousal without desire, no male equivalent (the refractory period explains why).",
        "The three-part behavioural programme: non-genital → genital (intercourse banned) → gradual penetration; ~12 sessions; each part surfaces its own material.",
      ],
      pyqConcepts: [
        "Bancroft's Dual Control Model and the SIS/SES measurement lineage.",
        "Basson's receptive-desire model — the circular alternative to the linear chain.",
        "The Masters-and-Johnson behavioural canon as sex therapy's foundation.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 31-year-old teacher on sertraline for panic disorder returns 'for a stronger tablet'; the referral is the husband's, for 'no interest': the separate interviews revealing the SSRI-anorgasmia the marriage attributed to love's death — the effect explained to both (the diagnosis repairs the attribution), the dose-reduced where panic control allows, the bupropion-switch considered, the four sex-therapy sessions rebuilding non-genital intimacy first.",
        "A 26-year-old woman and 29-year-old man, ten months married, referred from an infertility clinic for 'no children': the private history revealing never-achieved intercourse, her burning pain and closing-up, his situational erectile difficulty with normal morning erections — GPPPD with layered performance anxiety; the gynaecological exclusion, the graduated programme with her controlling pace, the CBT for catastrophised pain, the ban on scheduled performance attempts.",
        "The young man with sudden erectile loss and morning erections intact: the performance-anxiety formulation, the two self-tests guiding the tier, the context work before any prescription.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The NATSAL duration numbers separating problem from dysfunction.",
        "SSRI orgasm-delay in both sexes; bupropion the sparing switch.",
        "PDE-5 mechanism and the nitrate contraindication.",
        "The three-part behavioural programme's structure.",
        "Dhat syndrome — the Indian idiomatic presentation.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The asking-discipline is the single highest-yield intervention in Indian sexual medicine: the unasked side effect becomes the silently stopped prescription; the unasked consummation question becomes years of infertility work-ups.",
        "The conjoint-then-separate interview architecture — the private histories each partner never told the other surface in the separate sessions, and the conjoint formulation delivers them safely back.",
        "The 'sex clinic' underground is a harm-reduction reality: ask where treatment has come from (the unregulated injections, the hormonal cocktails) before adding anything to the list.",
        "The paradoxical depression finding (23.3% of depressed men report increased interest) — the sex-as-mood-regulator tier that drives risk-taking; worth knowing when the 'increased libido' on a down mood is itself a symptom.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The SSRIs saved her mood and emptied her marriage",
      presentation: "31-year-old teacher on sertraline for panic disorder, returning 'for a stronger tablet' — the referral actually her husband's, via the local doctor, for 'no interest'.",
      initialPresentation: "A 31-year-old teacher on sertraline for panic disorder presented requesting 'a stronger tablet'. The referral was in fact her husband's, transmitted through the local doctor: 'no interest in the marriage'. Separate interviews revealed: panic fully controlled; almost no sexual interest since the dose escalation a year ago; orgasm now rare; she had told no one; and their physical relationship had quietly stopped months earlier. The husband, seen alone, believed she 'no longer loved him' and was considering an affair.",
      history: "Panic disorder two years, well controlled on the current dose for twelve months; no medical illness; the marriage otherwise affectionate and cooperative.",
      examination: "No physical findings; the panic review unremarkable; mental state: embarrassed, relieved once asked directly; no depressive disorder beyond the situational strain.",
      diagnosis: "SSRI-induced sexual dysfunction (desire-and-orgasm tier) with secondary marital attribution crisis; panic disorder in remission.",
      management: "The SSRI-sexual effect explained openly to BOTH (the diagnosis alone repairs the marriage attribution — 'she does not love me' becomes 'the medicine silences a system that loves you fine'); the sertraline dose-reduced where panic control allowed; the bupropion-switch considered against the panic history; the couple booked for four sex-therapy sessions re-establishing non-genital intimacy first; review at six weeks.",
      outcome: "The programme restored the physical relationship across two months; the dose reduction held with panic control; the marriage attribution crisis resolved with the explanation.",
      teachingPoints: [
        "Sexual side effects are invisible unless asked — the patient asked for 'a stronger tablet', never naming the side effect.",
        "The couple heard 'she does not love me' until the physiology was named — never let the drug take the blame for the marriage, nor the marriage for the drug.",
        "The switch-and-dose tier decisions follow the primary disorder's control, not the side effect alone.",
      ],
    },
    {
      title: "Consummation failure at the infertility clinic",
      presentation: "26-year-old woman and 29-year-old man, ten months married, referred from an infertility clinic for 'no children' — the private history: intercourse has never been achieved.",
      initialPresentation: "A 26-year-old woman and 29-year-old man, married ten months, were referred from an infertility clinic for 'no children'. The private history revealed intercourse had never been achieved: she experienced burning pain and 'closing up' at any attempt; examination showed marked pelvic-floor guarding with an intact hymenal ring; he had developed erectile difficulty that was clearly situational (normal morning erections, no difficulty with self-stimulation). The fertility work-up had, unsurprisingly, found nothing.",
      history: "Arranged marriage; both previously healthy; no medical or psychiatric history; the couple had never discussed the difficulty with each other beyond logistics.",
      examination: "Her examination: marked pelvic-floor guarding, intact hymenal ring, no congenital abnormality; his: normal; the morning-erection history localised his difficulty as situational from the first question.",
      diagnosis: "Genito-pelvic pain/penetration disorder (formerly vaginismus/dyspareunia) with his secondary situational erectile difficulty.",
      management: "Gynaecological examination to exclude vestibulitis and local pathology; the graduated programme — non-genital touch, then genital touch, then gradual insertion with her controlling pace — combined with CBT for catastrophised pain and a ban on 'scheduled performance attempts' at home; the conjoint sessions carrying the formulation to both partners.",
      outcome: "Intercourse achieved within four months of treatment; the programme continued to the comfort-and-intimacy tier; fertility discussions deferred to the couple's own timeline.",
      teachingPoints: [
        "Normal morning erections prove the vasculature — his problem was situational pressure, and it resolved when the pressure architecture did.",
        "The couple, not the woman, is the unit of treatment.",
        "In Indian practice this presentation hides behind infertility referrals and gynaecological repeats — one private question to each partner converts the work-up.",
      ],
    },
  ],
  clinicalPearls: [
    "Problem vs dysfunction: the duration gate (~6 months) plus the context test — adaptive inhibition is a working system in a hard situation, not disorder.",
    "The Dual Control Model: accelerator plus brakes; heavy brakes masquerade as low desire; anxiety, resentment and no privacy present as 'brakes on'.",
    "Basson: desire in women is often receptive — arriving after arousal, triggered by intimacy; the male-template categories broke on this.",
    "SSRIs: orgasm-delay in both sexes, the most predictable drug effect in the field — exploited for PE, switched to bupropion for the dysfunction.",
    "PDE-5: ~75% effective, assists-not-cures; NITRATES the absolute contraindication; 16% long-term maintenance tells the expectation story.",
    "Prolactin and testosterone: the treatable endocrine tier of low desire — the assays not to miss (the pituitary adenoma hides there).",
    "Delayed ejaculation has no accepted pharmacological treatment — the honest one-liner.",
    "The three-part programme: non-genital → genital (intercourse banned) → gradual penetration; each part surfaces its own material.",
    "Combined treatment beats medical alone — therapy first, drugs added within it, taper as the relationship recovers.",
    "Dhat: the Indian idiomatic presentation of semen-loss anxiety — physiology, anxiety treatment, and the quack-tonic economy retired by name.",
  ],
  highYieldSummary: [
    "Sexual dysfunctions = persistent (~6 months), distressing difficulties in the response chain; transient problems near-universal (1-month tier ~54% women / ~35% men; 6-month tier 15.6% / 6.2%).",
    "The three windows organise aetiology: the situation (resentment, privacy, performance), the person (attitudes, letting-go, inhibition propensity — heritable in men), the body (diabetes, vascular, endocrine, prolactin, medicines).",
    "Drug causes to recite: SSRIs (orgasm, both sexes), antipsychotics (60% men / 30–90% women), beta-blockers, clonidine, guanethidine, contraceptives (minority); spares: bupropion, nefazodone.",
    "Men: ED (5%→25% with age; PDE-5 ~75%; nitrates absolute), PE (~1-minute ISSM criterion; SSRI-exploitation and dapoxetine; NOT age-increasing), delayed ejaculation (no accepted pharmacotherapy).",
    "Women: FSIAD (the desire-arousal merge), GPPPD (the pain-penetration merge; the graduated programme), orgasm difficulty (situational-first; 10–15% lifetime-absent), PGAD (arousal without desire; no male equivalent).",
    "The iatrogenic ladder: wait → dose-reduce → switch (bupropion/nefazodone) → schedule → antidote; antipsychotics: prolactin-check and prolactin-sparing options; never the silent stop.",
    "Sex therapy: three parts, ~12 sessions over 4–5 months, intercourse banned through parts 1–2, goals of comfort-trust-intimacy rather than symptom-reversal (PE and vaginismus the technique-exception).",
    "The Indian tier: the asking-discipline (the detection system), the separate-notes confidentiality architecture, the infertility-clinic consummation bridge, the 'sex-clinic' underground harm-reduction question, dhat's idiomatic presentation.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "sd-quiz-1",
      question: "A 29-year-old man on paroxetine reports gradual inability to reach orgasm over two months with preserved desire and erections. The mechanism:",
      options: ["Testosterone suppression by the SSRI", "Serotonergic inhibition of orgasm triggering", "Vascular impairment from panic-related hypertension", "Prolactin elevation from the SSRI"],
      correctIndex: 1,
      explanation: "SSRIs predictably inhibit orgasm and ejaculation in both sexes — the effect exploited to treat premature ejaculation.",
      afterSectionId: "mechanism",
    },
    {
      id: "sd-quiz-2",
      question: "Which prevalence statement reflects the NATSAL (Mercer) duration findings?",
      options: ["About 55% of women and 35% of men report a problem lasting at least 1 month in the past year; 6-month problems fall to ~15.6% and ~6.2%", "Sexual dysfunction is rare, affecting under 5% of both sexes", "1-month and 6-month problems have near-identical prevalence", "Men report more persistent problems than women"],
      correctIndex: 0,
      explanation: "Transient problems are extremely common; the clinically meaningful dysfunction population is the persistent minority.",
      afterSectionId: "diagnosis",
    },
    {
      id: "sd-quiz-3",
      question: "A 55-year-old man with angina on isosorbide mononitrate asks for sildenafil. The correct response:",
      options: ["Prescribe sildenafil 100 mg with nitrate instructions", "Refuse PDE-5 inhibitors: nitrate co-use is an absolute contraindication", "Substitute yohimbine at full dose", "Advise intracavernosal papaverine as equally safe with nitrates"],
      correctIndex: 1,
      explanation: "PDE-5 inhibition plus nitrates produces dangerous hypotension through the shared cGMP pathway — the combination is absolutely contraindicated.",
      afterSectionId: "management",
    },
    {
      id: "sd-quiz-4",
      question: "During the three-part behavioural programme, long-standing negative sexual attitudes and trauma sequelae most characteristically surface during:",
      options: ["Part 1: non-genital touching", "Part 2: combined genital and non-genital touching with intercourse banned", "Part 3: gradual approach to penetration", "The termination sessions only"],
      correctIndex: 1,
      explanation: "Part 1 surfaces relationship material; Part 2 the intrapersonal; Part 3 the performance anxiety and pain-fear — the sequence is the assessment.",
      afterSectionId: "management",
    },
    {
      id: "sd-quiz-5",
      question: "In women, distress about sexuality is best predicted by:",
      options: ["Vaginal lubrication speed", "Frequency of orgasm", "Mental health and the quality of the emotional relationship with the partner", "Serum testosterone level"],
      correctIndex: 2,
      explanation: "Bancroft's survey: physical response markers were poor predictors of women's sexual distress; mood and emotional-relationship quality dominated.",
      afterSectionId: "symptoms",
    },
    {
      id: "sd-quiz-6",
      question: "Which cause of low sexual desire in a man is both clearly treatable and specifically endocrine?",
      options: ["Resentment in the marriage", "Hyperprolactinaemia from a pituitary adenoma", "SSRI-induced dopamine blockade", "Performance anxiety"],
      correctIndex: 1,
      explanation: "Prolactin-secreting adenomas cause loss of interest and erectile difficulty and respond to dopamine agonists — prolactin is the assay not to miss.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Sketch the DEOR chain and the Dual Control Model; predict what high and low inhibition propensity each produce.", answer: "Desire → arousal → orgasm → resolution, any link failing in either sex. The Dual Control Model adds an accelerator (excitation) plus brakes (inhibition), both constitutional: high inhibition propensity produces the person whose desire evaporates the moment anything is wrong (and erectile problems in men, 'arousal contingency' in women — arousal collapsing when circumstances are not just-right); low inhibition produces sexual risk-taking; the propensity is measurable (SIS/SES) and partly heritable in men.", topic: "Concepts" },
    { question: "Quote the two NATSAL duration numbers that separate 'problem' from 'dysfunction'.", answer: "At least one problem lasting ≥1 month in the past year: 53.8% of women, 34.8% of men; lasting ≥6 months: 15.6% and 6.2% — the persistence gate that converts a near-universal experience into the clinical minority (with distress the second gate, predicted in women by mood-and-relationship quality rather than physical response).", topic: "Epidemiology" },
    { question: "Which two windows bar starting drugs first, and what does the first stage of sex therapy diagnose?", answer: "Window 1 (the current situation: resentment, insecurity, no privacy, performance fear) and Window 2 (the person: old attitudes, letting-go difficulty, trauma history, high inhibition propensity) — when either dominates, drugs are not the entry; the programme's first two stages (non-genital, then genital touch with intercourse banned) are themselves diagnostic, surfacing the relationship material, then the intrapersonal, while removing the performance pressure; re-appraise after 3–4 sessions before adding pharmacology.", topic: "Management" },
    { question: "List five medications that impair sexual function and two antidepressants that spare it.", answer: "Impair: SSRIs (orgasm/ejaculation, both sexes — the most predictable), antipsychotics (~60% of men, 30–90% of women via dopamine-and-prolactin), beta-blockers such as propranolol (erection), clonidine (~25% erectile), guanethidine; also tricyclics and (in a minority) steroidal contraceptives. Spare: bupropion and nefazodone — the switch tier.", topic: "Pharmacology" },
    { question: "Why is nitrate use an absolute contraindication to PDE-5 inhibitors? Which second messenger is involved?", answer: "The erection runs on the NO → cGMP cascade (cGMP relaxes cavernosal smooth muscle); PDE-5 destroys cGMP so its inhibitors prolong the signal — and nitrates feed the SAME cascade (nitrate → NO → cGMP), so the combination amplifies vasodilation systemically and can precipitate catastrophic hypotension; cGMP is the shared second messenger, and the interaction is the field's one absolute contraindication.", topic: "Pharmacology" },
    { question: "Name the treatable causes of low desire that must be excluded before calling it psychological.", answer: "Depression (the excitation system damped — treat and re-assess); hyperprolactinaemia (the pituitary adenoma tier, also antipsychotic-driven — dopamine agonists cure it); hypogonadism (testosterone replacement, transdermal steadier); the medication list itself (SSRIs, antipsychotics, beta-blockers, clonidine — switch or adjust); diabetes and vascular disease for the erectile tier; oestrogen lack at menopause for the lubrication tier.", topic: "Diagnosis" },
    { question: "What are the three parts of the behavioural programme, and which issue class surfaces in each?", answer: "Part 1 — non-genital touch (intercourse and genital stimulation banned): surfaces the RELATIONSHIP material (distrust, resentment, the stereotyped assumptions). Part 2 — genital-plus-non-genital touch, intercourse still banned: surfaces the INTRAPERSONAL material (long-held negative attitudes, abuse sequelae). Part 3 — gradual approach to penetration: surfaces performance anxiety and pain-fear. ~12 sessions over 4–5 months, a set number agreed at the outset, goals of comfort-trust-intimacy rather than direct symptom reversal (PE and vaginismus the technique-exceptions).", topic: "Management" },
    { question: "The Indian doors: name four and the detection question each should carry.", answer: "(1) The infertility clinic: 'has intercourse ever been achieved?' — the consummation bridge; (2) urology and the chemist counter: 'where is the treatment from, and is any heart medicine on the list?' — the nitrate question reaching the self-sourcing tier; (3) the psychiatrist's own OPD: 'is the medicine affecting you intimately?' — asked at every SSRI-or-antipsychotic review (the silent non-adherence driver); (4) the general-and-gynaecology tier: the one normalised question — 'many couples face difficulties; is anything troubling you?' — plus the dhat presentation met with physiology, not tonics.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "How common is this, doctor — are we the only ones?", answer: "Very common. More than half of women and a third of men report at least one problem in the past year; most are brief. Persistent, distressing problems — the ones worth treating — affect roughly 15% of women and 6% of men. You are not the only ones by a very long way." },
    { question: "Is my problem physical or psychological?", answer: "Usually the question is wrong; it is both, interacting. The better questions: is desire present (if yes, the wiring usually is)? Are morning erections normal (if yes, the vasculature is)? Is it situational (with one partner or circumstance but not others)? What else is happening in the body, the relationship, and the medicine cabinet?" },
    { question: "Will a tablet fix it?", answer: "For erectile difficulty, the PDE-5 tablets work in about three-quarters of men — but they assist an existing response; desire and the relationship remain yours to repair. For desire and orgasm problems in women there is still no reliable tablet. Tablets work best COMBINED with therapy, and evidence shows the drug can later be tapered." },
    { question: "Is it my hormones?", answer: "Sometimes: checking testosterone and prolactin is worthwhile for low desire, and diabetes for erectile difficulty. But most low desire is not hormonal, and hormonal treatment in women remains uncertain territory." },
    { question: "My antidepressant caused this. Should I stop it?", answer: "No — not without a plan. Options include dose adjustment, switching to bupropion or another sexuality-sparing drug, or treating the couple problem the side effect created. Silently stopping is how relapse happens." },
    { question: "We have never been able to have intercourse since marriage. Is there hope?", answer: "Yes: this pattern (pain/tightening plus his situational erection difficulty) responds well to a graded programme plus pain-focused CBT; most couples achieve intercourse within months of proper treatment." },
    { question: "Is asking about sex awkward for you, doctor?", answer: "It is a medical question like any other. The consultation's matter-of-factness is itself part of the treatment." },
    { question: "Can this be discussed without my family knowing?", answer: "Yes. What goes in the notes, and what is written back to any referring doctor, will be agreed with you first — and each partner controls what is shared in joint sessions." },
    { question: "Does masturbation count as cheating or harm?", answer: "Masturbation is a normal behaviour and a diagnostic clue (orgasm with masturbation but not with a partner points to situational, not bodily, causes). Moral frameworks belong to the couple to negotiate; the clinic's job is accurate information without judgement." },
    { question: "The 'sex clinic' near the bus stand promised injections. Should we?", answer: "The unlicensed sector runs on unregulated injections, tonics and hormonal cocktails — expensive, dangerous, and preying on exactly the embarrassment that keeps people from asking a real doctor. Your problem is common, medical and treatable in the formal system; the underground's business model is your never learning that." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — the sexual-dysfunction chapter (the FSIAD and GPPPD merges; the ~6-month duration specification) (2022)" },
      { source: "ICD-11 (WHO) — conditions related to sexual health (the de-pathologising placement)" },
      { source: "ISSM — the premature-ejaculation ~1-minute criterion and the definitional guidelines" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.1 + 4.11.2 — source chapters mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — the sexual-dysfunctions chapter (2022)" },
    ],
    trials: [
      { source: "Masters W H & Johnson V E — Human Sexual Inadequacy (the behavioural programme's origin)" },
      { source: "The PDE-5 inhibitor trial programme (sildenafil, tadalafil, vardenafil) — the ~75% efficacy and the nitrate-interaction data" },
      { source: "The dapoxetine PE programme — the on-demand SSRI built for premature ejaculation" },
      { source: "Flibanserin (2015) and bremelanotide (2019) approval programmes — the premenopausal-desire tier with modest effect sizes" },
    ],
    reviews: [
      { source: "Bancroft J — the Dual Control Model (central inhibition of sexual response); Janssen E et al. — the SIS/SES measurement" },
      { source: "Basson R — the female sexual response model (receptive desire)" },
      { source: "Laumann E O et al. — the US prevalence survey (43%/31%); Mercer C H et al. — the NATSAL duration-corrected figures" },
      { source: "Feldman H A et al. — the Massachusetts Male Aging Study (the ED age gradient)" },
      { source: "Bancroft J, Loftus J & Long J S — distress about sex (the mood-and-relationship predictors)" },
      { source: "Rosen R C & McKenna K E — PDE-5 and sexual response; Althof S — combined treatment evidence; Heiman J R & Meston C M — the empirically-validated-treatment audit" },
      { source: "Indian tier — dhat-syndrome literature and clinic-series reports; the 'sex-clinic' underground-economy documentation; Tele-MANAS 14416" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416) for the mood-and-anxiety tiers that ride with sexual problems" },
      { source: "The asking-discipline — the one normalised question per consultation this course hands to every door" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the brakes-not-broken explanation, the couple treatment, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The chain, the model, the three windows, the drug effects and the programme.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "41 min",
      description: "Everything — the couple-interview craft, the iatrogenic ladder, the Indian doors, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The chain, the model, the problem-vs-dysfunction gate, the Indian doors.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the Dual Control Model, the NATSAL duration pair, and the two self-test questions cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The brakes architecture, the erection cascade, the female difference, the drug effects.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the cGMP cascade with the nitrate danger and the SSRI orgasm effect in one breath each." },
    { number: 3, title: "Clinical Practice", description: "The three-window assessment, the workup, the programme and the pharmacology tiers.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the conjoint-then-separate interview and write the combined-treatment plan." },
    { number: 4, title: "Indian Context", description: "The doors, the asking-discipline, the confidentiality architecture, the dhat frame.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can ask the one question at each door and keep the sexual detail out of the general file." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the NATSAL pair and the nitrate question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR (APA) — the sexual-dysfunctions chapter (FSIAD, GPPPD, the duration specification)", sourceType: "classification", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 (WHO) — conditions related to sexual health (the de-pathologising placement)", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.11.1 + 4.11.2 — source chapters mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Bancroft J — the Dual Control Model; Janssen E et al. — the SIS/SES measurement lineage", sourceType: "primary", year: "1999–2002", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Basson R — the female sexual response model (receptive desire)", sourceType: "primary", year: "2000", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Masters W H & Johnson V E — Human Sexual Inadequacy (the behavioural programme's origin)", sourceType: "primary", year: "1970", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Laumann E O et al. — the US prevalence survey; Mercer C H et al. — the NATSAL duration-corrected figures", sourceType: "primary", year: "1999 / 2003", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Feldman H A et al. — the Massachusetts Male Aging Study (the ED age gradient)", sourceType: "primary", year: "1994", dateReviewed: "2026-09-28" },
    { id: "S9", source: "The PDE-5 inhibitor trial programme — efficacy, dosing and the nitrate-interaction data; the dapoxetine PE programme; the flibanserin/bremelanotide approvals", sourceType: "trial", year: "1998 onward", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Bancroft J, Loftus J & Long J S — distress about sex (the predictors); Althof S — the combined-treatment evidence; Heiman & Meston — the treatment audit", sourceType: "review", year: "1997–2006", dateReviewed: "2026-09-28" },
    { id: "S11", source: "ISSM — the premature-ejaculation definitional guidance (the ~1-minute criterion)", sourceType: "guideline", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Indian tier — dhat-syndrome literature and clinic-series reports; the 'sex-clinic' underground-economy documentation; Tele-MANAS 14416", sourceType: "review", year: "1970s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Problem-vs-dysfunction durations (NATSAL/Mercer): ≥1-month problems 53.8% women / 34.8% men; ≥6-month 15.6% / 6.2% — versus Laumann's definition-free 43%/31%: transient problems near-universal, the persistent tier the clinical minority.", grade: "established", sources: ["S7"] },
    { text: "The Dual Control Model: sexual response as excitation plus inhibition; inhibition propensity measurable (SIS/SES) and partly heritable in men; high inhibition relates to erectile problems in men and to women's problems including arousal contingency.", grade: "established", sources: ["S4"] },
    { text: "Receptive desire in women (Basson): desire frequently triggered by intimacy and arriving after arousal begins; DSM-5's FSIAD and GPPPD merges follow the female-template critique.", grade: "established", sources: ["S5", "S1"] },
    { text: "SSRIs inhibit orgasm and ejaculation in both sexes — the primary effect on orgasm triggering; the effect exploited as PE treatment, with dapoxetine developed on-demand for it.", grade: "established", sources: ["S9", "S3"] },
    { text: "Antipsychotics produce sexual side effects in roughly 60% of men and 30–90% of women (dopamine blockade plus prolactin elevation); beta-blockers and clonidine produce erectile problems; bupropion and nefazodone relatively spare the response.", grade: "established", sources: ["S3", "S10"] },
    { text: "PDE-5 inhibitors: ~75% effectiveness for erectile difficulty; sildenafil ~1 hour before with hours of effect, tadalafil up to 24–36 hours; nitrates the absolute contraindication through the shared cGMP cascade; only ~16% of identified men maintain long-term use.", grade: "established", sources: ["S9"] },
    { text: "Complete erectile failure 5% at 40 rising to 25% at 70 (MMAS); absent desire 2% (45–59) → 18.2% (75+); premature ejaculation does NOT increase with age.", grade: "established", sources: ["S8", "S7"] },
    { text: "In women, sexual distress is predicted by mental health and emotional-relationship quality, not by physical-response markers.", grade: "established", sources: ["S10"] },
    { text: "Combined psychological-and-medical treatment consistently beats medical treatment alone — the therapy-first, add-within, taper-later algorithm.", grade: "established", sources: ["S10", "S6"] },
    { text: "Delayed ejaculation has no accepted pharmacological treatment — the honest negative tier.", grade: "established", sources: ["S3", "S9"] },
    { text: "Hyperprolactinaemia (pituitary adenoma; antipsychotic-driven) and hypogonadism are the treatable endocrine causes of low desire — the prolactin-and-testosterone assays not to miss.", grade: "established", sources: ["S3"] },
    { text: "The Indian tier: the differing presenting doors (infertility-clinic consummation, urology-and-'sex-clinic' PE, psychiatric iatrogenic, dhat presentations) and the asking-discipline as the detection system — clinic-series and review evidence, no national probability survey (the honest statement).", grade: "supported", sources: ["S12", "S3"] },
  ],
};
