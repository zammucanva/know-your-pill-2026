import type { PsychiatryCourse } from "./types";

/**
 * GROUP THERAPY — YALOM'S CURATIVE FACTORS — canonical Psychiatry
 * course (migration batch 14, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/group-therapy.md — untouched foundation),
 * re-researched against the lineages the note itself cites
 * (Yalom's therapeutic-factor synthesis, paraphrased never quoted;
 * Tuckman's stage sequence; Budman & Gurman's short-term
 * adaptations; the Cuijpers and McDermut meta-analyses; Project
 * MATCH and the Kelly AA-mechanisms programme; the Patel/SCARF and
 * Vellore community group-care trials; Kudumbashree and NMHS/DMHP
 * documentation) with per-claim provenance.
 *
 * Drug routes: none — the note assigns no psychotropic a clinical
 * role in the circle itself; the addiction pharmacotherapy it
 * names in passing (buprenorphine maintenance for the stabilised
 * member) belongs to the addiction courses. drugLinks is empty by
 * design and the honest absences are recorded in contentGaps,
 * never invented.
 */
export const groupTherapyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "group-therapy",
  title: "Group Therapy",
  shortName: "Group therapy",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Group Therapy"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Yalom's curative factors, the group's predictable weather, and the craft of the circle",

  summary:
    "Group therapy multiplies a scarce clinical workforce: one trained conductor, six to ten patients, and the members' work on one another as the treatment. The course covers Yalom's curative factors, group development, selection, formats and the evidence position.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "List Yalom's curative factors in your own words, with an Indian clinical example for the five that carry the most weight — universality, hope, altruism, the corrective family recapitulation and cohesiveness.",
    "Trace a group's development through forming, storming, norming and the working phase — and predict the crises: the silent second session, the third-to-fifth-session drop-out wave, the member who monopolises.",
    "Run the selection assessment: who thrives in a mixed group, who needs preparation or combined individual work, and who stays out — each exclusion with its one-sentence reason.",
    "Distinguish the formats by engine and membership: interactive psychodynamic groups, psychoeducational and skills groups (CBT-in-groups, social-skills, relapse-prevention), inpatient and day-hospital circles, closed versus rolling membership, and the AA/NA/Al-Anon fellowships.",
    "Apply the craft architecture: size six to ten, 60–90-minute sessions, the circle with no head of table, ground rules, co-therapy, and combined individual-plus-group treatment.",
    "State the honest evidence position: strong in substance use and as a platform for CBT protocols, broadly comparable to individual therapy where properly delivered — and the cost-logic that makes the group the rational default wherever clinicians are scarce.",
    "Map the Indian landscape: AA/NA and Al-Anon, de-addiction centre group programmes, the Kudumbashree-lineage self-help group movement, tele-groups after the pandemic, and the collectivism-versus-privacy disclosure seam.",
    "Recognise and manage the two classic injuries: the vulnerable member overwhelmed by a strong-affect session, and the monopoliser's capture of the circle's airtime and hope.",
  ],
  quickFacts: [
    { label: "The machine", value: "One conductor, six to ten patients", detail: "Below five the circle is fragile, above twelve it fragments — the size law; one honest hour multiplying a scarce clinical workforce as no other psychological treatment can" },
    { label: "The engine", value: "The members, not the conductor", detail: "Universality, hope, altruism, the interpersonal mirror, rehearsal, cohesion — mechanisms no one-to-one room can manufacture: they need other patients, not a professional whose staying is part of the job description" },
    { label: "The weather", value: "Forming → storming → norming → working", detail: "Tuckman's forming–storming–norming–performing sequence in its clinical rendering, with adjourning (termination) as the final curriculum; the group has a life of its own and its storms are predictable" },
    { label: "The drop-out wave", value: "Third-to-fifth session", detail: "A group phenomenon, not a personal one; predicted aloud it loses half its power; the conductor phones the missing members — cohesion is what surviving a predicted storm together builds" },
    { label: "The preparation dividend", value: "Two sessions halve early attrition", detail: "What the group is, the confidentiality contract with its honest limits, the expectation of speech (one honest sentence survives), the storm predicted in advance, and a first task — the cheapest intervention in the whole enterprise" },
    { label: "The craft numbers", value: "60–90 minutes, weekly", detail: "The longer hour at the longer interval teaches pacing; ground rules spoken aloud at the start and reopened when the storm arrives; a co-therapist where possible — one holding the content, one holding the process" },
    { label: "The workhorse", value: "Psychoeducation, 6–12 sessions", detail: "Fixed curriculum, measured language, handouts — the format carrying most of the world's (and India's district) workload, not the 'eight strangers discussing childhoods' caricature" },
    { label: "The India fact", value: "The country already runs on groups", detail: "De-addiction milieus built on morning sharing and relapse-prevention circles, AA in India since the 1980s, NA grown with the opioid wave, Kudumbashree's lakhs of circles — enormous group experience, largely undocumented as group therapy" },
  ],
  knowledgeGraph: [
    { label: "Therapeutic Communities", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "The residential extreme of the same architecture — the whole day as the group, the milieu as the treatment" },
    { label: "Dynamic Psychotherapy", type: "condition", href: "/psychiatry/dynamic-psychotherapy/", note: "The here-and-now engine's theoretical parent — insight, the working alliance and the conductor's deliberate restraint" },
    { label: "Family Therapy", type: "condition", href: "/psychiatry/family-therapy/", note: "The family-as-group twin — circular causality, the family-plus-patient psychoeducation tier, the mixed-family format" },
    { label: "Psychiatric Rehabilitation", type: "condition", href: "/psychiatry/psychiatric-rehabilitation/", note: "Where cohesion and role practice become rehabilitation's vehicle — day programmes, livelihood groups, aftercare" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The strongest group-evidence base — relapse-prevention and aftercare groups, and the AA referral discipline carried like a drug dose" },
    { label: "Opioid Use Disorders", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The NA twin and the stabilised member — motivated remission on maintenance as a group-selection category" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "Psychoeducation and relapse-prevention groups as the aftercare spine — supportive formats for the stabilised member, not insight-oriented ones" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "The circle as the practice ladder — the rehearsal at social speed that the individual hour cannot stage" },
    { label: "Medial prefrontal cortex", type: "brain-region", href: "#brain", note: "The mentalizing hub the circle exercises — perspective-taking as the mirror's substrate" },
    { label: "Oxytocin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The affiliation chemistry plausibly beneath cohesiveness — the biology of belonging read honestly" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Why do other patients heal people? Because the group manufactures experiences the one-to-one room cannot: a stranger saying the secret aloud (universality dissolving shame), recovery walking through the door every week (hope as observable fact), the depressed member needed by somebody (usefulness restoring what depression corrodes), honest feedback from people with nothing to lose by giving it (the interpersonal mirror), behavioural rehearsal at social speed, and a belonging that holds the difficult sessions. Yalom's synthesis names these the curative factors; the note paraphrases them into working clinical language rather than quoting them, and so does this course. The conductor's craft is aiming the circle's attention at the factor a given member needs most this month — hope for the hopeless, usefulness for the worthless, a mirror for the unaware — and reading member behaviour as a sample of outside life: the monopoliser running his marital habit, the silent member running hers. Group development supplies the second mechanism: predictable weather (forming, storming, norming, working, termination) that the skilled conductor predicts aloud, because a predicted storm loses half its destructive power and surviving it together is what builds the cohesion that carries the work.",
    steps: [
      "Universality dissolves shame: the secret thought said aloud by a stranger — 'I too hide bottles' — unlocks disclosure the individual hour cannot force; for stigma-heavy Indian presentations (addiction, infertility-linked depression, HIV, self-harm) this factor alone justifies the format.",
      "Hope becomes observable: the member sober these two years persuades better than any leaflet — recovery witnessed weekly rather than promised from a prescription pad.",
      "Altruism restores usefulness: depression corrodes the sense of being valuable, and the group is the only therapy that prescribes being needed — talking a newer member through a third day of craving repairs the helper from the inside.",
      "The group as mirror: members discover the impression they actually make on others ('when you talk over me, I stop listening') — feedback no paid therapist is positioned to give without cost to the frame; the drop-out pattern and the circle's warming and freezing are themselves diagnostic data.",
      "Rehearsal at social speed: saying the difficult sentence to a real face, receiving feedback, saying no — the practice the individual hour can describe but never stage; the circle is the gymnasium for social anxiety, assertiveness deficits and post-psychosis social re-entry.",
      "The corrective family recapitulation: a family that argues without expelling, depends without being exploited, and can be re-entered after absence — the controlled re-run for patients whose original family was the wound.",
      "Cohesiveness as active ingredient: for lonely, migrated, widowed and estranged patients the belonging itself is the medicine — and the working culture's norms ('what is said here stays here') are its dose schedule.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "mpfc-mentalizing", name: "Medial prefrontal cortex (the mentalizing hub)", role: "Perspective-taking and self-and-other modelling — the machinery the circle exercises every time a member reads a face and risks being read; the interpersonal mirror's substrate.", grade: "supported" },
    { id: "acc-belonging", name: "Anterior cingulate cortex (the belonging monitor)", role: "The distress of exclusion and the relief of acceptance — social pain's overlap with physical pain; a plausible reading of why isolation compounds illness and cohesiveness treats.", grade: "proposed" },
    { id: "amygdala-exposure", name: "Amygdala–prefrontal exposure circuit", role: "The fear-learning the rehearsal group retrains: live social exposure held inside safety — the same extinction logic that underlies exposure treatment of social anxiety.", grade: "supported" },
    { id: "striatum-mutual-reward", name: "Ventral striatum (the mutual-reward dial)", role: "Social reward and affiliation's reinforcement signals — a plausible substrate of mutual aid's pull and of the meeting-attendance effect in the fellowships.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Oxytocin", symbol: "OT", role: "Affiliation and trust — the bonding chemistry plausibly beneath cohesiveness; the biological reading of 'the belonging itself is the medicine'.", grade: "proposed" },
    { name: "Endogenous opioids", symbol: "EO", role: "Social comfort and social pain's chemistry — separation distress and contact relief; the system through which the circle's steady presence may steady its members.", grade: "proposed" },
    { name: "Dopamine", symbol: "DA", role: "Social reward — being useful, being received well, being missed when absent; the reinforcement that makes mutual-aid attendance self-sustaining.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The social-confidence tier: rank, belonging and mood intertwined — the shared substrate of the depression the group treats and the comorbidity the individual tier medicates.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "disclosure-mirror-loop",
      name: "The disclosure–feedback loop (universality to interpersonal learning)",
      steps: [
        { label: "The secret said aloud", detail: "One member's disclosure meets another's 'I thought I was the only one' — shame dissolves at circle speed" },
        { label: "Disclosure deepens", detail: "The corrected discovery: people who know your worst do not leave the room" },
        { label: "The mirror answers", detail: "Members' honest feedback lands — how you land on people, data no paid courtesy supplies" },
        { label: "New learning tested in situ", detail: "The re-learned pattern practised inside the circle's safety at social speed" },
      ],
      clinicalManifestation: "The stigma-heavy presentation — addiction, self-harm, infertility-linked depression, HIV — that engages through the circle after years of individual silence.",
      grade: "supported",
    },
    {
      id: "storm-to-cohesion-pathway",
      name: "The developmental pathway (storm to norms to working phase)",
      steps: [
        { label: "Forming", detail: "Formal, polite, conductor-dependent sessions — everybody on best behaviour" },
        { label: "Storming", detail: "The challenge: who talks too much, who decides the rules, the competence attack — and the drop-out wave around the third-to-fifth session" },
        { label: "Norming", detail: "The survived storm produces the working culture — confidentiality, feelings named, ask before advising" },
        { label: "Working and termination", detail: "The conductor falls deliberately silent; the members run the therapy on each other; the goodbye becomes the final curriculum" },
      ],
      clinicalManifestation: "The fourth-session crisis that dissolves groups conducted blindly and matures groups conducted knowingly.",
      grade: "supported",
    },
    {
      id: "altruism-mood-pathway",
      name: "The usefulness pathway (altruism to the depressed self)",
      steps: [
        { label: "The opportunity arrives", detail: "A newer member's crisis lands inside the circle — a craving day three, a sleepless week" },
        { label: "The conductor aims the circle", detail: "The depressed member is invited to share what she knows — the factor she needs most this month" },
        { label: "Being needed counters worthlessness", detail: "The helper experiences herself as valuable — the specific corrosion of depression repaired from the inside" },
        { label: "The role consolidates", detail: "Usefulness practised across sessions becomes an identity, not an event — the group's unique prescription" },
      ],
      clinicalManifestation: "The chronically depressed member whose turning-point was not insight but usefulness — being the one who talked a younger member through the third day.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "forming-phase", time: "Sessions 1–2", title: "Forming: the polite circle", description: "Formal, dependent, everybody on best behaviour; the conductor's authority at its height — the silent second session expected as a stage-sign, not treated as an emergency.", phase: "onset" },
    { id: "storming-phase", time: "Sessions 3–5", title: "Storming: the challenge and the drop-out wave", description: "Who talks too much, who decides the rules, the direct or indirect attack on the conductor's competence — and members leaving; predicted aloud, the wave loses half its power.", phase: "peak" },
    { id: "norming-phase", time: "After the storm", title: "Norming: the working culture forms", description: "What is said here stays here; feelings are named; members ask before advising — the norms the survivors build become the group's constitution.", phase: "duration" },
    { id: "working-phase", time: "The middle months", title: "Working: the conductor falls silent", description: "Long deliberate silences from the chair — the members running the therapy on each other; interpersonal learning at full depth, the conductor guarding structure only.", phase: "duration" },
    { id: "termination-phase", time: "The final arc", title: "Termination: the goodbye curriculum", description: "Saying goodbye, reviewing gains, watching separation get survived — the ending treated as the material itself, never as mere administration.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The relevant epidemiology of a treatment is its evidence and its reach. Group-format psychotherapies for depression and anxiety deliver broadly comparable outcomes to the same content delivered individually where delivery quality and dose are comparable (the Cuijpers meta-analytic line; the founding McDermut depression meta-analysis; the Hope–Heimberg CBT-in-groups social-anxiety trials) — the group is a delivery engine, not a weaker medicine. The strongest signal sits in substance use: aftercare and relapse-prevention group formats, and Alcoholics Anonymous linkage added to outpatient treatment measurably improving drinking outcomes — the fellowship being the largest group-therapy network on earth.",
    indianPrevalence: "India already runs on groups, largely unadvertised: almost every de-addiction centre's core programme is a group — morning sharing, relapse-prevention, activity and yoga circles wrapped in a community milieu; rehabilitation homes and therapeutic communities are group architectures whatever their letterhead; district de-addiction units run psychoeducation and relapse-prevention groups as the spine of aftercare. AA has met in India since the 1980s (a meeting list now running to hundreds), NA grew with the opioid wave, Al-Anon and Alateen carry the families. The self-help group movement — Kudumbashree the flagship with lakhs of circles — delivers the curative factor set at population scale, and the Vellore/SCARF/Goa community-care lines show lay-facilitated group and peer formats reaching outcomes clinicians alone cannot at that scale. Against a treatment gap measured in tens of millions (the NMHS 2015–16 frame), the arithmetic — one therapist, eight patients, one hour — is not a charming alternative but the rational default wherever the clinical indications fit.",
    indianNotes: "The experience is enormous and largely undocumented as 'group therapy' — the label is the missing item, not the practice. The binding constraint is trained conductors: psychiatric social workers, clinical psychologists and psychiatric nurses carry the load, and short training in group psychoeducation (weeks, not years) is among the highest-yield investments a district programme can make.",
  },
  etiology: [
    { category: "biological", factor: "The social brain's group-shaped machinery", details: "Humans are the ultrasocial species: belonging is a need, not a nicety — exclusion registering as distress and acceptance as settling; the honest biological frame for why cohesiveness treats and isolation compounds." },
    { category: "psychological", factor: "The disclosure–feedback loop", details: "Universality dissolves shame; the corrected discovery (people who know your worst stay in the room) unlocks deeper disclosure; members' honest feedback supplies the interpersonal learning the paid frame cannot." },
    { category: "psychological", factor: "The corrective family recapitulation", details: "The circle re-runs the family — arguing without expelling, depending without exploiting, re-entering after absence — the controlled second chance for patients whose first family was the wound." },
    { category: "psychological", factor: "Usefulness as an antidepressant route", details: "Altruism restores the sense of being valuable, which depression specifically corrodes — the group is the only therapy that prescribes being needed as a treatment." },
    { category: "social", factor: "The isolation amplifier", details: "Loneliness, migration, widowhood and estrangement compound almost every chronic psychiatric difficulty — cohesiveness and mutual aid treat the amplifier alongside the disorder." },
    { category: "social", factor: "The scarcity arithmetic", details: "One therapist, eight patients, one hour — the delivery logic that makes group treatment the rational default in any system with a treatment gap measured in tens of millions; the constraint is trained conductors, never the concept." },
  ],
  symptomClusters: [
    {
      category: "1. The curative factors at work (the member-level signatures)",
      symptoms: ["Universality — the drop of shame when the secret thought is said aloud by a stranger ('I thought I was the only one')", "Hope — the member two years sober as walking evidence; recovery observed rather than promised", "Altruism — the depressed member talking a newer one through a third day of craving; the helper healed by being needed", "The interpersonal mirror — 'when you talk over me, I stop listening': feedback no paid courtesy supplies", "Rehearsal and imitative behaviour — quiet members borrowing the scripts of fluent ones; a vocabulary of coping circulating by imitation", "Cohesiveness — the belonging that carries the difficult sessions; the first speech contract most members have ever signed"],
    },
    {
      category: "2. The group's developmental weather (the group-level phenomena)",
      symptoms: ["First sessions formal, polite, conductor-dependent — the silent second session a stage-sign", "Storming: challenge to rules and competence, the drop-out wave around the third-to-fifth session, the monopoliser's capture of airtime", "Norming: the working culture — what is said here stays here; feelings named; ask before advising", "Working phase: the conductor's deliberate long silences; members running the therapy on each other", "Termination: goodbye said, gains reviewed, separation survived — the ending as curriculum"],
    },
    {
      category: "3. The failure signatures (when the group goes wrong)",
      symptoms: ["The stalled-dependence group: conducted too authoritatively, never storms, never works — frozen at forming", "The grievance club: conducted too loosely, frays into unstructured complaint — storms without norms", "The drop-out cascade: unprepared entry, unpredicted wave, no phone calls — the circle collapsing by session five", "The silenced member: the monopoliser unmanaged, the quiet drifting toward the door with their hope taking everyone else's with them", "The vulnerable member overwhelmed: a strong-affect session without containment, no individual check-in afterwards"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The selection assessment",
      code: "Who thrives, who prepares, who stays out",
      criteria: [
        "WHO THRIVES: chronic but stable difficulties with an interpersonal component — dysthymia with loneliness, social anxiety, avoidant and dependent personality patterns, substance dependence in motivated remission, chronic grief where isolation compounds the loss; patients who want people's company more than they fear it, whose problem is visible to others in the room.",
        "WHO NEEDS PREPARATION OR COMBINED WORK: acute severe depression (start individual, bring to group as strength returns); marked social anxiety (graduated exposure to the circle itself); psychosis — supportive or psychoeducational groups, never insight-oriented ones, and only when stabilised.",
        "WHO STAYS OUT OF MIXED GROUPS: the actively suicidal or acutely self-harming (the group cannot hold the responsibility, and secrecy rules break down); acute paranoia (the circle reads as an audience of observers); severe unmanaged trauma with flooding episodes; brain injury or cognitive impairment beyond the group's pace; antisocial motivation (the group becomes an audience to con and vulnerable members get injured); active unstable substance use; the family-escorted patient attending under orders with no wish of their own.",
        "PREPARATION, TWO SESSIONS' WORTH: what the group is; the confidentiality contract with its honest limits; the expectation of speaking (not oratory — a sentence survives); the drop-out wave predicted in advance; a first task ('tell the circle one thing nobody in your house knows about your illness').",
      ],
      duration: "Two preparation sessions before entry — preparation halves early attrition and is the cheapest intervention in the whole enterprise.",
      indianNote: "The psychoeducation group is the easier first exposure in the disclosure-shy Indian context ('we are here to learn about the illness' sits easier than 'we are here to tell our truths'); mixed-family or segregated-gender circles are legitimately chosen where disclosure comfort demands.",
    },
    {
      system: "The format selection",
      code: "Choosing the right machine for the job",
      criteria: [
        "The interactive (interpersonal/process) group: slow-open membership, weekly for months to years, running on the here-and-now engine — the machine for interpersonal learning and the corrective recapitulation.",
        "The psychoeducation/skills group: fixed curriculum of 6–12 sessions (schizophrenia relapse-prevention, bipolar family-plus-patient education, CBT-in-groups, insomnia CBT-I, anger management, DBT skills classes) — structure plus practice homework; the group's warmth a bonus on a didactic chassis.",
        "Relapse-prevention and aftercare groups in addiction: rolling membership, check-in format, drug-testing and honesty norms, run inside de-addiction centres — the format Indian addiction treatment is effectively built on.",
        "Supportive groups for chronic illness and caregivers: maintenance rather than change — cohesion as the medicine.",
        "Inpatient and day-hospital groups: short-cycle circles orienting to the ward and to hope — the riverbed rather than the vessel: the group endures while its members flow through it.",
        "The self-help fellowships (AA/NA/Al-Anon): no professional conductor, no fee, spiritually framed steps — the professional's duty is the local meeting list and a referral made with the seriousness of a prescription, while respecting the fellowship's non-professional sovereignty.",
      ],
      duration: "Interactive groups: months to years, slow-open. Psychoeducation: 6–12 closed sessions. Aftercare: rolling. Inpatient: short-cycle, the riverbed persists.",
      indianNote: "The viva architecture: a district with one clinical psychologist for two million people justifies a psychoeducation-plus-relapse-prevention design with trained ASHA-linked facilitators — not eight strangers discussing childhoods.",
    },
  ],
  severityScales: [
    {
      name: "The conductor's selection screen",
      fullName: "Who thrives / who prepares / who stays out",
      measures: "The three-list clinical hygiene that prevents the drop-out cascade and the vulnerable-member injury — qualitative judgement, never scored.",
      ranges: [],
      indianNote: "No cut-offs exist and none are invented — the screen is a structured reading of motivation, stability and interpersonal appetite, documented in the referral note.",
    },
    {
      name: "The group-development staging",
      fullName: "Forming–storming–norming–working–termination arc",
      measures: "Where the circle stands and what weather to predict next — the staging that tells the conductor when to structure and when to fall silent.",
      ranges: [],
      indianNote: "The arc is a calendar as much as a stage map: the drop-out wave arrives at the third-to-fifth session with such reliability that the preparation script names it before it happens.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The interactive process group versus the psychoeducation group", distinguishingFeatures: "Engine: here-and-now member-to-member work versus a structured curriculum with group support; membership: slow-open for months to years versus fixed 6–12 sessions; indication: interpersonal learning versus first exposure, inpatient work and relapse prevention.", keyDifferentiator: "'We are here to tell our truths' versus 'we are here to learn about the illness' — the nakedness gradient that decides which circle a disclosure-shy patient enters first." },
    { condition: "The therapy group versus the milieu's activity group", distinguishingFeatures: "A conducted therapy group with a contract, selection and a here-and-now or curriculum engine versus the de-addiction centre's morning sharing, yoga and activity circles wrapped in community life.", keyDifferentiator: "Purpose and contract, not chairs-in-a-circle: the therapy group is selected, prepared and conducted; the milieu is the environment both live in — India's centres run both under one roof." },
    { condition: "The professional group versus the self-help fellowship", distinguishingFeatures: "Trained conductor, clinical contract, referral documentation versus AA/NA's no fee, no appointment, no record and spiritually framed steps.", keyDifferentiator: "Sovereignty: the professional refers into the fellowship with the seriousness of a prescription and does not colonise it — the meeting is not the clinic's annex." },
    { condition: "Supportive versus insight-oriented groups", distinguishingFeatures: "Maintenance and cohesion for the chronically ill and the stabilised psychosis spectrum versus here-and-now confrontation of the interpersonal pattern.", keyDifferentiator: "The stabilised psychotic patient belongs in the supportive or psychoeducational circle, not the insight-oriented one — the exam's favourite distinction and the ward's commonest error." },
    { condition: "Group versus individual therapy (the false rivalry)", distinguishingFeatures: "Comparable outcomes where delivery is comparable — but only the circle manufactures universality, the mirror, rehearsal and usefulness; only the individual hour holds the private material safely.", keyDifferentiator: "Not rivals but complements with different engines: the decision runs on cost, reach and the interpersonal-learning indications — combined treatment being the classical, not the compromised, answer." },
    { condition: "The tele-group versus the in-person circle", distinguishingFeatures: "Reach against presence: the telephone or video circle gives up the chai and the eye but reaches the caregiver who cannot travel; technique shifts — smaller size (4–6), stricter rounds, proactive individual follow-up.", keyDifferentiator: "The medium is a clinical variable to be managed, not a downgrade to be apologised for — the silent member is the tele-conductor's specific duty." },
  ],
  management: [
    { category: "psychotherapy", name: "The interactive (interpersonal/process) group", description: "Slow-open membership, weekly, months to years, on the here-and-now engine: the circle with no head of table; ground rules declared at the outset and reopened when the storm arrives; the conductor aiming the group's attention at the factor a given member needs most this month — hope for the hopeless, usefulness for the worthless, a mirror for the unaware.", whenToUse: "Stable interpersonal difficulties: dysthymia with loneliness, avoidant and dependent patterns, chronic grief with isolation, motivated remission from substance dependence.", indianContext: "Private metro practice offers process and CBT-skills groups at roughly ₹300–800 per session (approx 2026); the district tier more often runs the psychoeducation chassis — the format choice is a resource decision as much as a clinical one." },
    { category: "psychotherapy", name: "Psychoeducational and skills groups (the workhorse)", description: "Fixed curriculum, 6–12 sessions, measured language, handouts — schizophrenia relapse-prevention, bipolar family-plus-patient education, CBT-in-groups, social-skills rehearsal, insomnia CBT-I, anger management, DBT skills classes; the group's warmth is a bonus on a didactic chassis, and the members' practice with each other is the engine individual CBT cannot add.", whenToUse: "The easier first exposure where disclosure is feared; inpatient engagement and discharge bridging; aftercare of every chronic condition.", indianContext: "The workhorse of Indian district programmes, inpatient units and the NIMHANS/CIP/district de-addiction aftercare spine; short facilitator training measured in weeks makes it the highest-yield district investment." },
    { category: "psychotherapy", name: "Combined individual-plus-group treatment", description: "Far from being cheating, this was the classical indication: the individual session holds the private material while the group does the interpersonal work — each room doing what it is shaped for.", whenToUse: "Wherever private material (trauma, suicidality's residue, specific shames) and interpersonal learning both demand work — and for the patient who needs a bridge into the circle.", indianContext: "The natural architecture of Indian practice already: the OPD relationship carrying the private tier, the de-addiction or caregiver circle carrying the interpersonal one." },
    { category: "psychotherapy", name: "Self-help fellowship referral (AA/NA/Al-Anon)", description: "No professional conductor, no fee, no appointment, no record; spiritually framed steps; the largest group-therapy network on earth and in India. The referral discipline: know the nearest meeting, carry its card like a drug dose, and brief the patient on exactly what to expect — the 'just listen' instruction; you will not be asked to speak. Adding AA attendance to outpatient treatment measurably improves drinking outcomes; in India it is often the only free aftercare that exists.", whenToUse: "Substance-use aftercare of every tier; the families through Al-Anon and Alateen; the waiting list's most honest holding action.", indianContext: "AA in India since the 1980s with a meeting list running to hundreds; NA grown with the opioid wave — the professional's duty is the referral's seriousness, while respecting the fellowship's non-professional sovereignty." },
    { category: "psychotherapy", name: "Tele-groups (the circle by telephone and video)", description: "Caregiver circles and relapse-prevention check-ins run by telephone or video since the pandemic — the circle gives up the chai and the eye and buys reach with them: a Kasaragod caregiver can sit in a circle facilitated from Bengaluru with nothing but a ₹1,000 phone. The honest technique: smaller size (4–6), stricter rounds, and proactive individual follow-up for the silent member.", whenToUse: "Distance, caregiver immobility, the therapy desert outside metros, and continuity through disruption.", indianContext: "Tele-MANAS-style services and NGO platforms now run these circles; the technology is the cheap part — the trained conductor remains the constraint." },
    { category: "psychotherapy", name: "The conductor's craft architecture", description: "Size six to ten (below five is fragile, above twelve fragments); 60–90 minutes — the longer hour at the longer interval teaching pacing; the circle with no head of table; ground rules declared at the outset and reopened at the storm; a co-therapist where possible (one holding content, one holding process, trainees learning in the second chair); documentation and ethics travelling with the format — confidentiality contracted with every new member, inter-member contact addressed openly rather than banned, and trainee-observer consent as real as it would be in theatre.", whenToUse: "Every group, every week — the craft is the treatment's frame, and the frame is what makes the factors safe to work.", indianContext: "The craft is teachable in weeks for the psychoeducation tier — the district's scarce psychologist supervising ASHA-linked facilitators rather than conducting every circle personally." },
  ],
  safety: {
    redFlags: [
      "Active suicidal intent or acute self-harm in a group candidate — the group cannot hold the responsibility and secrecy rules break down; individual care carries it, the circle is deferred",
      "Acute paranoia — the circle reads as an audience of observers; exclusion from the insight group, with the stabilised patient still served by psychoeducational formats",
      "The vulnerable member overwhelmed after a strong-affect session — containment rules held through the hour and an individual check-in afterwards, always",
      "Severe unmanaged trauma with flooding episodes — the circle's shared affect can flood; stabilisation precedes membership",
      "Antisocial motivation or active unstable substance use in a mixed group — the group becomes an audience to con, and vulnerable members get injured",
      "Inter-member contact outside sessions turning coercive or exploitative — it will happen; the professional stance is to address it openly in the circle, never to ban reality into silence",
    ],
    urgentGuidance:
      "The order of operations: (1) risk is excluded from the circle and held individually — no active suicidality, acute self-harm or acute paranoia inside a mixed group, ever; (2) the containment rules (rounds, timing, the confidentiality contract) are the circle's crash cart and are never suspended for a dramatic session; (3) every strong-affect session is followed by an individual check-in with the members most exposed; (4) the monopoliser is met early, kindly and structurally — rounds, timing, 'let me pause you there and bring in the others' — protecting everyone including him; (5) the drop-out wave is phoned, not mourned: the missing member is called the same week; (6) the documentation travels with the format — confidentiality contracted with every new member, inter-member contact addressed openly, and teaching-group consent for trainee observers taken as seriously as in an operating theatre.",
  },
  drugLinks: [],
  contentGaps: [
    "The addiction pharmacotherapy the note names in passing — buprenorphine maintenance for the stabilised opioid-dependent member, and the medication side of aftercare — has no KYP drug lessons in this course's scope; the pharmacology belongs to the Opioid and Alcohol Use Disorders courses and is referenced, never invented, here.",
    "Twelve-step facilitation as a formal clinical intervention (the Kelly mechanisms research, the meeting-attendance literature) has no dedicated KYP lesson — the referral discipline and the 'just listen' briefing are taught here.",
    "The DBT skills-class format appears here as a format only — its skills curriculum belongs to the Treating Personality Disorders course (no dedicated group-skills lesson exists).",
    "The conductor-training tier (short group-psychotherapy facilitation training for district workers and ASHA-linked facilitators) has no KYP lesson — the training argument is documented in the Indian Context lesson, not routable.",
  ],
  patientGuide: {
    whatIsIt:
      "Group therapy is a circle of six to ten patients meeting regularly with a trained therapist (the conductor), where the treatment is only partly what the professional says — most of it is what the members do to and for each other. Hearing someone else say your secret thought out loud takes the shame out of it; watching a member who has been well for two years makes recovery something you can see rather than something you are promised; being the one who helps a newer member gives back the feeling of being useful that depression takes away; and discovering that people who know your worst still stay in the room is an experience no one-to-one session can copy. For most stable difficulties the outcomes are comparable to individual therapy — and you keep the circle.",
    whatCausesIt:
      "Nothing is wrong with you for being here — the question is why a group helps. Because some medicines only come from other patients: the relief of 'I thought I was the only one', the honest feedback of people with nothing to lose by giving it, the practice of saying difficult sentences to real faces, and the belonging itself, which for lonely, widowed or far-from-home patients is not a comfort but a treatment. A professional's staying is part of the job; the circle's staying is voluntary — and their staying anyway is the corrective experience the consulting room cannot manufacture.",
    symptoms:
      "What you will notice: the first sessions feel formal and polite, with everyone on best behaviour. Around the third-to-fifth session, the group often gets bumpy — a few people drop out and the rest grumble about the conductor. This is normal, it is predicted, and it passes; your therapist will name it and phone anyone who misses. After the bump, the working culture settles: what is said in the circle stays there, feelings are named, members ask before advising. Then the group starts doing its real work — you may notice the therapist going quiet for long stretches because the members are carrying it. The end of the group is itself a piece of treatment: saying goodbye, reviewing what changed, and finding out that separation can be survived.",
    treatment:
      "Expect weekly sessions of 60–90 minutes in a circle of six to ten (smaller, 4–6, on telephone or video groups). Nobody will make you perform — one honest sentence is enough, and a circle that makes room for its quiet members is a circle working as designed. You will be offered two preparation sessions first: what the group is, the confidentiality rule and its honest limits, what to expect when it gets bumpy, and a small first task. Some people also keep an individual session alongside the group — that is not cheating, it is the classical arrangement: the private material in one room, the interpersonal work in the other. If alcohol or drugs are the problem, the free fellowships (AA, NA; Al-Anon for families) may be offered alongside — no fee, no appointment, no record, and you will not be asked to speak at your first meeting: just listen.",
    selfHelp: [
      "The one-sentence rule: you do not need oratory — a sentence survives, and the circle grows around it.",
      "Expect the bumpy session-three-to-five and decide now to attend through it — the members who stay are the ones who build the group.",
      "If you miss a session, expect a phone call — it is not checking up, it is the treatment; answer it.",
      "Use the confidentiality rule both ways: what you hear in the circle stays there too — it is the first contract about your own speech most members have ever signed.",
      "Take the meeting card as seriously as a prescription if AA or NA is suggested — know the nearest meeting before you need it.",
      "Judge any group by its conductor, its facilitators and its drop-out behaviour, not by its fee — the free circles outperform their cost spectacularly.",
    ],
    whenToSeekHelp: [
      "Feeling overwhelmed or flooded after a strong session — tell the conductor the same day; the individual check-in is part of the design",
      "The urge to drop out at week three-to-five — phone before deciding; the wave is the stage, not the verdict",
      "Any new suicidal thought, self-harm urge or crisis — the group cannot hold this responsibility: contact your treating clinician or Tele-MANAS 14416 (24×7, free) the same day",
      "Any contact between members outside sessions that feels coercive, exploitative or frightening — bring it into the circle or to the conductor directly; it is handled openly, never banned into silence",
      "A co-member in acute distress disclosed in the circle — the conductor carries it from there; you are a member, not the on-call clinician",
    ],
    indianResources: [
      "The district de-addiction centre and DMHP psychiatric tier — psychoeducation and relapse-prevention groups as the aftercare spine",
      "AA, NA and Al-Anon meeting lists — ask for the nearest meeting and the card; no fee, no appointment, no record",
      "Tele-MANAS 14416 (24×7, free) — the national tele-mental-health service, now also running and signposting tele-group support",
      "The SHG movement — Kudumbashree-family circles, disability and caregiver groups (bipolar and schizophrenia family networks, Alzheimer's and cancer caregiver circles) — ask the treating team what exists locally",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific group-psychotherapy guideline exists; the discipline runs on the international canon as absorbed into Indian postgraduate teaching — Yalom's factors the perennial five-mark favourite, the stages of group development, the selection and contraindication lists, the supportive-versus-insight-oriented distinction — with the Indian Psychiatric Society and journal literature on de-addiction milieus (the Chatterji line) and the NIMHANS centre programme descriptions as the India-specific tier, grey literature honestly labelled.",
    systemContext: "The unadvertised truth is that India already runs on groups: almost every de-addiction centre's core programme is a group — morning sharing, relapse-prevention, yoga and activity circles wrapped in a community milieu; the rehabilitation homes and therapeutic communities are group-treatment architectures even when nobody uses the term; district de-addiction units and the NIMHANS/CIP tradition run psychoeducation and relapse-prevention groups as the spine of aftercare. Psychiatric social workers, clinical psychologists and psychiatric nurses carry the conductor load — enormous group experience, largely undocumented as 'group therapy'.",
    programmeContext: "Tele-MANAS-style services and NGO platforms now run telephone and video circles — caregiver circles, relapse-prevention check-ins; training lay facilitators to run group psychoeducation takes weeks, not years, and is among the best-value investments any district programme can make; the district with one clinical psychologist for two million people justifies a psychoeducation-plus-relapse-prevention architecture with trained ASHA-linked facilitators rather than eight strangers discussing childhoods.",
    costConsiderations: "NGO and government group programmes run free to nominal (₹0–100 per session where charged at all); private metro practice offers CBT-skills and process groups at roughly ₹300–800 per session (approx 2026), with therapy-desert realities outside the metros unchanged. The binding constraint is trained conductors, never rooms — the circle needs chairs, a door and discipline; the fellowship and SHG tiers cost the system nothing at all.",
    culturalConsiderations: "Indian selves are collectively woven, yet personal suffering is often private property — 'what will people think of our family' and the marriage-alliance fear govern disclosure. Two adaptations carry the load: the psychoeducation group as the easier first exposure ('we are all here to learn about the illness' sits easier than 'we are here to tell our truths'), and mixed-family or segregated-gender circles legitimately chosen where disclosure comfort demands. The confidentiality rule — what is said in the circle stays there — is the first contract about their own speech most members have ever signed. The SHG movement (Kudumbashree the flagship, with lakhs of groups) delivers the curative factor set at population scale — universality, cohesion, mutual aid, micro-finance as empowerment; the Vellore/SCARF/Goa community-care lines show lay-facilitated group and peer formats reaching outcomes clinicians alone cannot at that scale; the professional's humble role is catalytic — help start, supervise quality, then step back.",
    patientCounselling: [
      "The preparation script: 'The circle is six to ten people meeting weekly; nobody will make you perform — one honest sentence is enough, and the circle that looks after its quiet members is the circle doing its job.'",
      "The storm script: 'Around session three-to-five a few people usually drop out and the group grumbles — it happens to nearly every group; we will name it together, and I will phone anyone who misses.'",
      "The fellowship briefing: 'You will not be asked to speak at your first AA meeting — just listen; there is no fee, no appointment and no record; take the meeting list and card as seriously as a prescription.'",
      "The confidentiality script: 'What is said in the circle stays in the circle, with its honest limits — and contact between members outside sessions is spoken about here openly, never banned into silence.'",
      "The free-group question: 'Judge the group by its conductors, its facilitators and its drop-out behaviour, not by its fee — the fellowships and SHG circles outperform their cost spectacularly.'",
      "The unmotivated-family script: 'A patient under escort arrives with a closed face and is usually gone by week three, taking the circle's hope with him — win the motivation first, prepare second, and let a psychoeducation group be the gentlest entry.'",
    ],
  },
  decisionPath: {
    title: "The circle decision — which group, for whom, and when",
    nodes: [
      {
        id: "start",
        question: "A patient (or a district plan) in front of you: who needs the circle, and which circle?",
        branches: [
          { label: "Stable interpersonal difficulty, motivated", next: "selection-gate" },
          { label: "Acute, unstable, or on the exclusion list", next: "deferral-path" },
          { label: "Addiction aftercare or mutual aid", next: "fellowship-path" },
          { label: "Remote reach, or a housebound caregiver", next: "tele-path" },
        ],
      },
      {
        id: "selection-gate",
        question: "The selection assessment passes: dysthymia with loneliness, social anxiety, avoidant or dependent patterns, motivated remission, chronic grief with isolation. The disclosure question:",
        branches: [
          { label: "Disclosure feared — the nakedness gradient", next: "psychoeducation-entry" },
          { label: "Ready for the here-and-now work", next: "preparation-gate" },
          { label: "Private material alongside the interpersonal need", next: "combined-path" },
        ],
      },
      {
        id: "psychoeducation-entry",
        question: "The gentler first machine.",
        recommendation: "A fixed-curriculum psychoeducation or skills group — 6–12 sessions, measured language, handouts; 'we are here to learn about the illness' as the gentler contract; mixed-family or segregated-gender circles where disclosure comfort demands; graduation to the insight group considered at closure, not at entry.",
      },
      {
        id: "preparation-gate",
        question: "Before any entry: the two preparation sessions.",
        branches: [
          { label: "Prepared — entering the insight circle", next: "insight-group-path" },
          { label: "Private material surfaced during preparation", next: "combined-path" },
        ],
      },
      {
        id: "insight-group-path",
        question: "The interactive process group — the here-and-now engine.",
        recommendation: "A slow-open circle of six to ten, weekly for months, no head of table, ground rules declared at the outset and reopened when the storm arrives; entry only after the two-session preparation — then the conductor aims the circle's attention at the factor each member needs most.",
      },
      {
        id: "combined-path",
        question: "The classical arrangement, not the compromise.",
        recommendation: "Combined individual-plus-group treatment: the individual hour holds the private material — trauma, suicidality's residue, the specific shames — while the group does the interpersonal work; each room doing what it is shaped for, the referring clinician holding both frames.",
      },
      {
        id: "fellowship-path",
        question: "The aftercare referral with prescription seriousness.",
        recommendation: "Know the nearest AA/NA meeting, carry its card like a drug dose, and brief the patient exactly: 'just listen' — you will not be asked to speak; no fee, no appointment, no record. The de-addiction centre's rolling relapse-prevention group runs alongside; the fellowship's non-professional sovereignty respected throughout — and adding AA attendance to outpatient treatment measurably improves drinking outcomes.",
      },
      {
        id: "tele-path",
        question: "The circle by telephone or video.",
        recommendation: "A tele-group with the honest technique: smaller size (4–6), stricter rounds, proactive individual follow-up for the silent member — the Kasaragod caregiver seated in a circle facilitated from Bengaluru with nothing but a ₹1,000 phone; the chai and the eye traded for reach, and the trade managed rather than mourned.",
      },
      {
        id: "deferral-path",
        question: "Who waits, and who stays out of the mixed circle.",
        branches: [
          { label: "Acute severe depression", next: "stabilise-first" },
          { label: "Paranoia, active self-harm, unstable use, antisocial motivation", next: "stay-out-list" },
          { label: "Psychosis, stabilised", next: "supportive-format" },
        ],
      },
      {
        id: "stabilise-first",
        question: "The acute tier.",
        recommendation: "Start individual, bring to group as strength returns — the circle as the recovery's second room, not the crisis's holding bay; re-assess selection when the storm has passed.",
      },
      {
        id: "stay-out-list",
        question: "The exclusion list, each with its one-sentence reason.",
        recommendation: "The actively suicidal or acutely self-harming (the group cannot hold the responsibility; secrecy rules break down); acute paranoia (the circle reads as an audience); severe unmanaged trauma with flooding; cognitive impairment beyond the group's pace; antisocial motivation (the group becomes an audience to con); active unstable substance use; the family-escorted patient with no wish of their own — motivate first, prepare second, psychoeducation as the gentlest entry.",
      },
      {
        id: "supportive-format",
        question: "The stabilised psychotic patient.",
        recommendation: "Supportive or psychoeducational groups, never insight-oriented ones, and only when stabilised — the exam's favourite distinction and the ward's commonest error; the family-plus-patient education tier carries the household alongside.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Sending the escorted, unmotivated patient into the group",
      why: "The family-escorted patient attends under orders with no wish of their own — and listens with a closed face, drops out by week three, and takes the other members' hope out of the room with him.",
      correction: "Motivate first, prepare second, and use a psychoeducation group as the gentlest entry; the circle is an invitation-based treatment, never an escort-based one.",
    },
    {
      mistake: "Placing patients in a group without preparation sessions",
      why: "Unprepared entry produces the drop-out cascade: the storm arrives unpredicted, the silence reads as rejection, and the wave becomes a rout by session five.",
      correction: "Two preparation sessions — the contract, the expectation of one honest sentence, the predicted storm, the first task — halve early attrition; it is the cheapest intervention in the whole enterprise.",
    },
    {
      mistake: "Reading the drop-out wave as failure (and refilling or dissolving)",
      why: "Treating the third-to-fifth-session departures and the competence challenge as the group's death converts a developmental stage into an iatrogenic one — recruiting replacements teaches the survivors that members are interchangeable.",
      correction: "Name storming for what it is, with its predicted wave: said aloud to the circle, telephoned to the absentees, and run as stage-work rather than treated as a verdict — the surviving group writes its own norms.",
    },
    {
      mistake: "Mismanaging the monopoliser — indulgence, character confrontation or expulsion",
      why: "Indulgence silences the quiet into dropping out; confrontation shames material that is actually the member's outside-life habit running in the room; expulsion removes the treatable pattern and frightens the circle.",
      correction: "The early, kind, structural intervention: rounds, timing, 'let me pause you there and bring in the others' — then the pattern named gently inside the group's safety, where it can be re-learned at social speed.",
    },
    {
      mistake: "Prescribing the wrong machine — the insight group for everyone",
      why: "The 'eight strangers discussing childhoods' caricature fits one format only; the stabilised psychotic patient, the first-exposure patient and the district aftercare caseload all need different engines.",
      correction: "Match the format: psychoeducation (6–12 sessions) as the easier first exposure and the district workhorse; supportive groups for chronic illness and stabilised psychosis; the fellowship for substance-use aftercare; the insight group for the selected, prepared few.",
    },
    {
      mistake: "The casual AA referral ('just attend a meeting somewhere')",
      why: "A referral made without the meeting list, the briefing or the seriousness of a prescription wastes the largest free aftercare network on earth — the patient arrives unbriefed, is ambushed by expectations of speaking, and never returns.",
      correction: "Know the nearest meeting, carry its card like a drug dose, and brief exactly what to expect: the 'just listen' instruction, no fee, no appointment, no record — the referral made with prescription-level seriousness while respecting the fellowship's non-professional sovereignty.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Yalom's curative factors — the five-mark favourite: universality, instillation of hope, imparting of information, altruism, the corrective family recapitulation, socialising technique and imitative behaviour, interpersonal learning (the group as mirror), catharsis with containment, cohesiveness, existential factors — each with a one-line clinical example.",
        "The stages of group development: forming, storming, norming, working, termination — with the drop-out wave located at the third-to-fifth session and the conductor's response to each stage.",
        "The selection and contraindication lists: who thrives, who needs preparation or combined work, who stays out — each exclusion with its one-sentence reason (paranoia: the circle reads as an audience).",
        "The formats distinguished: interactive/process (here-and-now, slow-open) versus psychoeducation (6–12 sessions, fixed curriculum) versus supportive versus the self-help fellowships — engine, membership, indication.",
        "The craft numbers: six to ten members (below five fragile, above twelve fragments); 60–90 minutes weekly; ground rules at the start and at the storm; co-therapy's content-process split.",
      ],
      practical: [
        "Take a group-selection history: motivation, stability, interpersonal appetite, the exclusion screen — and demonstrate the two-session preparation contract.",
        "Demonstrate the monopoliser intervention in a role-play: rounds, timing, the pause-and-include move, then the pattern named gently as outside-life habit.",
      ],
      longAnswer: [
        "Group therapy in adult psychiatry: principles, curative factors, indications and contraindications, and its place in the Indian delivery system.",
        "The district viva: one clinical psychologist for two million people — justify a group-therapy plan (the psychoeducation-plus-relapse-prevention architecture with trained ASHA-linked facilitators, not eight strangers discussing childhoods).",
      ],
    },
    neetPg: {
      highYield: [
        "THE FACTOR LIST: universality (shame dissolved), hope (recovery observed), information (practical wisdom), altruism (usefulness restored — the depressed helper), the corrective family recapitulation (argues without expelling), socialising technique/imitation, the interpersonal mirror, catharsis with containment, cohesiveness (belonging as active ingredient), existential factors ('why me' maturing into 'what now').",
        "THE DEVELOPMENT SEQUENCE: forming–storming–norming–performing (Tuckman, 1965; adjourning added later) — with the clinical rendering: the drop-out wave at sessions 3–5, predicted aloud it loses half its power.",
        "THE CONTRAINDICATION CLASSIC: active paranoia — the circle experienced as an observing audience; the stabilised psychotic patient belongs in supportive or psychoeducational groups, never insight-oriented ones.",
        "THE SIZE LAW: six to ten members; below five fragile, above twelve fragments; 60–90 minutes; the circle with no head of table.",
        "THE FORMAT ENGINES: interactive (here-and-now, slow-open, months to years) versus psychoeducation (6–12 sessions, fixed curriculum — the district and inpatient workhorse) versus aftercare (rolling membership, check-ins) versus the fellowship (no fee, no professional, twelve steps).",
        "THE EVIDENCE POSITION: group-format CBT roughly comparable to individual where delivery is comparable (the meta-analytic line); strongest in substance use — AA linkage added to outpatient treatment measurably improving drinking outcomes.",
        "COMBINED TREATMENT: individual-plus-group was the classical indication — the private material in one room, the interpersonal work in the other; not a compromise.",
        "THE TWO INJURIES: the overwhelmed vulnerable member (containment plus individual check-in afterwards) and the monopoliser's capture of airtime and hope (early, kind, structural intervention).",
      ],
      pyqConcepts: [
        "Yalom's factors — the evergreen five-marker; altruism as the answer to 'the factor most restored when a depressed member helps a newer one'.",
        "Tuckman's stages and the storming session — the clinical scenario of the competence-challenged conductor.",
        "The monopoliser's management — rounds and time-structuring as the structurally correct first move.",
        "The AA/NA distinguishing features — no fee, no appointment, no record; the referral with prescription-level seriousness.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A slow-open outpatient group at its fourth session: three of eight members have stopped attending and the survivors open the hour by questioning the conductor's competence; one remaining member has spoken uninterrupted in every session and the two quietest are drifting toward the door. The recognition: storming with its predicted drop-out wave, complicated by unmanaged monopolisation — the response: name the storm aloud, phone the three absentees the same week, introduce rounds and timing ('let me pause you there and bring in the others'), revisit the ground rules, and treat the challenge as stage-work rather than failure; the groups conducted too authoritatively stall in dependence, those conducted too loosely fray into a grievance club.",
        "A 52-year-old mother in Kasaragod, three hours from the district hospital's caregiver programme, whose son's schizophrenia relapses twice a year: she joins an NGO caregiver circle facilitated from Bengaluru by telephone, on a ₹1,000 smartphone, and says nothing beyond her name for two sessions. The management: the tele-group's honest technique — smaller size (4–6), stricter rounds, and proactive individual follow-up after each session for the silent member; the circle gives up the chai and the eye and buys reach with them, and by the sixth session she is speaking in the round unprompted — later walking a newer mother through her son's third day of refusing tablets (altruism arriving by telephone).",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Group size: six to ten — below five fragile, above twelve fragments.",
        "Session length: 60–90 minutes; the circle with no head of table.",
        "Active paranoia is the classic contraindication for the insight-oriented group — the circle reads as an audience.",
        "Universality: 'I thought I was the only one' — the shame-dissolving factor.",
        "Altruism: the depressed member healed by being needed — helping as treatment.",
        "AA/NA: no professional conductor, no fee, spiritually framed twelve steps — the largest group-therapy network.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Behaviour in the group is a sample of outside life: the monopoliser is running his marital habit, the silent member her household silence — name the pattern gently inside the group's safety, where it can be re-learned at social speed.",
        "Preparation halves early attrition — two sessions spent before entry buy more retention than any technique spent after it; the first task ('tell the circle one thing nobody in your house knows about your illness') is the engagement engine.",
        "The two injuries are conductor failures, not group failures: the vulnerable member overwhelmed (containment held, individual check-in afterwards) and the monopoliser monopolising hope (early, kind, structural intervention — rounds, timing, the pause-and-include move).",
        "Inter-member contact outside sessions will happen — address it openly in the circle rather than banning reality into silence; and the teaching group's consent for trainee observers must be as real as it would be in theatre.",
        "India already runs on groups — the de-addiction milieu, the fellowship meeting list, the SHG circle: the professional's humble role with lay-facilitated circles is catalytic (help start, supervise quality, step back); with the fellowships it is referential (the meeting card carried like a drug dose, the 'just listen' briefing delivered, the sovereignty respected).",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The storm that cured the group",
      presentation: "By session four, three of eight members had vanished and the survivors opened the hour by questioning the conductor's competence — the healthiest thing that had yet happened in that room.",
      initialPresentation: "A slow-open interpersonal group at a district hospital — eight members with mixed indications (dysthymia with loneliness, social anxiety, and two members in stable remission from alcohol and opioid dependence) meeting weekly — arrived at its fourth session depleted: the two quietest had stopped attending after the supervisor's second unbroken monologue, a third had left unannounced, and the remaining members demanded to know whether the group was 'going anywhere'.",
      history: "The group had been prepared per protocol (contract, one-sentence rule, storm predicted), but the conductor had skipped the phone calls after the first two absences and had let the mill supervisor hold the floor in every session since the second — the same man whose wife reported he 'did not let anyone finish a sentence at home'; the absent members were the widow with dysthymia and the young man with social anxiety, both of whose difficulties were precisely about disappearing in rooms.",
      examination: "The group-level examination of the fourth session: grievance about the rules, a direct challenge to the conductor's competence, the supervisor talking over the first attempt at a round — and the two remaining quiet members visibly orienting toward the door in body language their outside lives knew well.",
      diagnosis: "Storming — the group's developmental stage arriving on schedule with its third-to-fifth-session drop-out wave, complicated by unmanaged monopolisation (the supervisor's marital habit running in the room).",
      management: "The conductor named the storm aloud as the predicted stage, not the group's failure; phoned the three absentees the same week (two agreed to return); introduced rounds and timing — 'let me pause you there and bring in the others' — and revisited the ground rules with the whole circle; the supervisor's pattern was named gently, inside the group's safety, as his outside-life habit rather than as a character verdict.",
      outcome: "The widow and the young man returned; by session six the working culture was audible — feelings named, members asking before advising — and by the middle months the conductor could fall deliberately silent for long stretches while the members ran the therapy on each other; the supervisor's floor-holding became the circle's most productive material, and the two who nearly left were the ones who later carried a newer member through his first disclosure.",
      teachingPoints: [
        "The drop-out wave belongs to the group, not to any one member: expect it around the third-to-fifth session, name it aloud in advance, and phone the missing — a storm survived together on prediction is what cements cohesion.",
        "The storm is curriculum: groups conducted too authoritatively stall in dependence, too loosely they fray into a grievance club — the surviving group produces its own norms.",
        "The monopoliser's early, kind, structural intervention (rounds, timing, the pause-and-include move) protects everyone, including him — and keeps the pattern treatable.",
        "Behaviour in the group is a sample of outside life: the man who talks over everyone is running his marital habit where it can finally be re-learned at social speed.",
      ],
    },
    {
      title: "The Kasaragod circle on a ₹1,000 phone",
      presentation: "A mother three hours from the district hospital, a facilitator in Bengaluru, and a caregiver circle that met entirely by telephone — reach traded for the chai and the eye.",
      initialPresentation: "A 52-year-old mother from Kasaragod, whose 24-year-old son's schizophrenia had relapsed twice in the past year, joined an NGO-run caregiver circle facilitated from Bengaluru that met fortnightly by telephone; travel to the district hospital's caregiver programme had become unaffordable, her only equipment was a basic smartphone costing about ₹1,000, and in the first two sessions she said nothing beyond her name.",
      history: "The son's illness of six years; two relapses marked by medicine refusal, each followed by the long bus journey, the outpatient queue and the family's exhaustion; the mother's own sleeplessness and isolation (the husband abroad, the neighbours' questions about 'what is wrong with the boy') — the isolation amplifier running at full volume around a treatable illness.",
      examination: "The tele-group's own audit: the facilitator's review of the circle's rounds showed two silent members, this mother among them — the precise members for whom the format was built, and the precise members a remote circle loses first without deliberate technique.",
      diagnosis: "Caregiver isolation with the circle available only at a distance — the tele-group's silent member, the format's specific duty and its specific risk.",
      management: "The honest technique notes applied: the circle kept small (4–6 members), stricter rounds used so that every voice was called by name each session, and proactive individual follow-up after each session for the silent member — a two-minute telephone call that named what she had not said aloud yet.",
      outcome: "By the sixth session she spoke in the round without being called first; by the third month she was the member who telephoned a newer mother outside sessions to talk her through a son's third day of refusing tablets — the follow-up call institutionalised as altruism, the isolation amplifier switched off at both ends; the son's relapse plan lived on the family's wall with the circle's number on it.",
      teachingPoints: [
        "The tele-group trades presence for reach — the Kasaragod caregiver seated in a Bengaluru-facilitated circle on a ₹1,000 phone; the technique (smaller size, stricter rounds, proactive follow-up) is what makes the trade clinical rather than sentimental.",
        "The silent member is the tele-conductor's specific duty: without the eye and the chai, silence is invisible — only rounds and individual follow-up keep it on the clinical map.",
        "Altruism travels by telephone: the helped member becoming the helper is the curative factor that no transport barrier blocks.",
        "Caregiver circles run on cohesion and mutual aid — maintenance rather than change — and for the families of chronic psychosis they are often the only accessible tier of their own treatment.",
      ],
    },
  ],
  clinicalPearls: [
    "The circle treats what the consulting room cannot manufacture: universality, the mirror, usefulness and belonging — because they need other patients, not a professional whose staying is contracted.",
    "The size law: six to ten members; below five the circle is fragile, above twelve it fragments — 60–90 minutes, weekly, the longer hour at the longer interval teaching pacing.",
    "The drop-out wave arrives at the third-to-fifth session — named in advance it loses half its power; phone the missing members; a storm survived together on prediction is what builds cohesion.",
    "Behaviour in the group is a sample of outside life: the monopoliser runs his marital habit, the silent member her household silence — name the pattern gently inside the group's safety, where it can be re-learned at social speed.",
    "Preparation is the cheapest intervention in the whole enterprise: two sessions — the contract, the one-sentence rule, the predicted storm, the first task — halve early attrition.",
    "Active paranoia is the cleanest contraindication for the insight-oriented group: the circle reads as an audience of observers; the stabilised psychotic patient is served by supportive or psychoeducational formats, only when stable.",
    "Combined individual-plus-group treatment was the classical indication, not the compromise: the private material in one room, the interpersonal work in the other.",
    "The two classic injuries are conductor failures: the vulnerable member overwhelmed by a strong-affect session (containment plus individual check-in afterwards) and the monopoliser's capture of airtime and hope (early, kind, structural intervention).",
    "The inpatient group is a riverbed, not a vessel — members flow through while the group endures; orienting to the ward and to hope is its honest job.",
    "AA/NA/Al-Anon: no professional conductor, no fee, no appointment, no record — refer with the seriousness of a prescription and respect the fellowship's non-professional sovereignty.",
    "The evidence position: strong in substance use and as a CBT delivery platform; broadly comparable to individual therapy where delivery is comparable — the group is a delivery engine, not a weaker medicine.",
    "India already runs on groups — de-addiction milieus, the fellowships, Kudumbashree's lakhs of circles: the constraint is trained conductors, never the concept; short psychoeducation facilitation training is among the highest-yield district investments.",
  ],
  highYieldSummary: [
    "Definition and economics: group therapy is the deliberate clinical use of a circle of six to ten patients meeting regularly with a trained conductor, in which the treatment is largely what the members do to and for each other — one therapist, eight patients, one hour, the only psychological treatment that multiplies a scarce workforce honestly; against a treatment gap measured in tens of millions it is the rational default wherever the clinical indications fit, not a charming alternative.",
    "The curative factors (Yalom's synthesis, paraphrased): universality (the shame-dissolving 'I thought I was the only one'); instillation of hope (the two-years-sober member as walking evidence); imparting of information (which chemist stocks the cheap brand, how the craving wave actually passed); altruism (usefulness restored to the depressed — the only therapy that prescribes being needed); the corrective family recapitulation (argues without expelling, depends without exploiting, can be re-entered after absence); socialising technique and imitative behaviour (scripts borrowed from fluent members); interpersonal learning through the group as mirror ('when you talk over me, I stop listening'); catharsis with containment (the difference between discharge and flooding); cohesiveness (belonging as an active clinical ingredient for the lonely, migrated, widowed and estranged); existential factors ('why me' maturing into 'what now').",
    "Development: forming (polite, dependent, the silent second session expected) → storming (challenge, the drop-out wave at sessions 3–5, the competence attack — predicted aloud it loses half its power; too-authoritative conduction stalls in dependence, too-loose conduction frays into a grievance club) → norming (what is said here stays here; feelings named; ask before advising) → the working phase (the conductor falling deliberately silent, the members running the therapy on each other) → termination (goodbye said, gains reviewed, separation survived — the ending as curriculum).",
    "Selection: who thrives — chronic stable difficulties with an interpersonal component (dysthymia with loneliness, social anxiety, avoidant and dependent patterns, motivated remission from substance dependence, chronic grief compounded by isolation); who needs preparation or combined work — acute severe depression (individual first), marked social anxiety (graduated exposure to the circle itself), psychosis (supportive or psychoeducational formats, only when stabilised); who stays out — the actively suicidal or acutely self-harming (the group cannot hold the responsibility; secrecy rules break down), acute paranoia (the circle as audience), severe unmanaged trauma with flooding, cognitive impairment beyond the group's pace, antisocial motivation (the group as an audience to con), active unstable substance use, and the family-escorted patient with no wish of their own. Preparation: two sessions — the contract, the one-sentence expectation, the predicted storm, the first task ('one thing nobody in your house knows about your illness').",
    "Formats by engine: the interactive/process group (here-and-now, slow-open, months to years); psychoeducation and skills groups (fixed 6–12-session curriculum — schizophrenia relapse-prevention, bipolar family-plus-patient education, CBT-in-groups, social-skills, insomnia CBT-I, anger management, DBT skills classes — the workhorse of district programmes and inpatient units); relapse-prevention/aftercare groups (rolling membership, check-ins, drug-testing and honesty norms — the spine of Indian addiction treatment); supportive groups (cohesion as the medicine); inpatient and day-hospital circles (riverbeds, not vessels); the AA/NA/Al-Anon fellowships (no professional, no fee, spiritually framed steps — the largest network on earth and in India).",
    "Craft and ethics: size six to ten (below five fragile, above twelve fragments); 60–90 minutes; the circle with no head of table; ground rules declared at the outset and reopened at the storm; co-therapy where possible (one carrying content, one carrying process, trainees learning in the second chair); combined individual-plus-group as the classical indication; confidentiality contracted with every new member; inter-member contact addressed openly, never banned; teaching-group consent for trainee observers as real as in theatre; and the monopoliser met early, kindly and structurally — rounds, timing, 'let me pause you there and bring in the others'.",
    "Evidence and India: group formats deliver roughly comparable outcomes to individual therapy where delivery quality and dose are comparable (the Cuijpers and McDermut meta-analytic lines; the Hope–Heimberg social-anxiety trials), with the strongest signal in substance use (aftercare and AA linkage improving drinking outcomes). India already runs on groups — de-addiction milieus, AA since the 1980s (meeting lists in the hundreds), NA with the opioid wave, Al-Anon/Alateen for families, the Kudumbashree-lineage SHG movement with lakhs of circles, and tele-groups since the pandemic (Tele-MANAS-style services; smaller 4–6-member circles, stricter rounds, proactive follow-up for the silent member); NGO and government groups run at ₹0–100 where charged, private metro groups at roughly ₹300–800 per session (approx 2026) — the binding constraint being trained conductors, and short psychoeducation facilitation training (weeks, not years) the highest-yield district investment.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "gt-quiz-1",
      question: "A depressed member spends a session talking a newer, younger member through a third day of craving. The curative factor most directly at work in the helper:",
      options: ["Instillation of hope", "Altruism — the experience of being useful, which depression specifically corrodes", "Existential factors", "Imparting of information"],
      correctIndex: 1,
      explanation: "The helper's depression lifts partly through being needed — the group is the only therapy that prescribes usefulness as a treatment.",
      afterSectionId: "mechanism",
    },
    {
      id: "gt-quiz-2",
      question: "A new outpatient group at sessions 3–5: three of eight members have dropped out and the survivors question the conductor's competence. The correct conductor's response:",
      options: ["Recruit replacements immediately and move on", "Refer the whole group for individual care", "Recognise the storm and its predicted drop-out wave — say so aloud, phone the absentees, and treat the challenge as stage-work", "Dissolve the group"],
      correctIndex: 2,
      explanation: "The storm is curriculum: named in advance and survived together, it builds exactly the norms and cohesion that follow.",
      afterSectionId: "timeline",
    },
    {
      id: "gt-quiz-3",
      question: "The clearest relative contraindication for an interactive (insight-oriented) outpatient group among these candidates:",
      options: ["Stable dysthymia with loneliness", "Social anxiety, prepared and motivated", "Active paranoia — the circle experienced as an observing audience", "Motivated opioid dependence in remission on maintenance treatment"],
      correctIndex: 2,
      explanation: "The circle runs on mutual trust, and the paranoid mind converts the circle into evidence — psychoeducation may still serve the stabilised patient.",
      afterSectionId: "diagnosis",
    },
    {
      id: "gt-quiz-4",
      question: "The honest evidence position for group-format CBT versus the same protocol delivered individually:",
      options: ["Far inferior", "Roughly comparable outcomes where delivery quality and dose are comparable — the group as a delivery engine with efficiency advantages", "Clearly superior for all disorders", "Effective only in inpatient settings"],
      correctIndex: 1,
      explanation: "Meta-analytic equivalence in quality-matched comparisons; the decision runs on cost, reach and the interpersonal-learning indications.",
      afterSectionId: "management",
    },
    {
      id: "gt-quiz-5",
      question: "The Indian self-help group movement (Kudumbashree the flagship) is relevant to group therapy because it demonstrates at population scale:",
      options: ["That only professionals can run effective groups", "Peer-facilitated mutual-aid circles delivering cohesion, universality and empowerment without a clinician conductor", "That groups work only for addictions", "That fees are necessary for engagement"],
      correctIndex: 1,
      explanation: "Lakhs of circles running on the same curative factors; the professional's role is catalytic — help start, supervise quality, step back.",
      afterSectionId: "indian-practice",
    },
    {
      id: "gt-quiz-6",
      question: "A trainee conductor notices one member speaking in every session while the two quietest drift toward dropping out. The structurally correct first move:",
      options: ["Expel the monopoliser from the group", "Confront the monopoliser's character in front of the group", "Introduce rounds and time-structuring — 'let me pause you there and bring in the others' — then explore the pattern as it affects the group", "Ignore it: members will self-correct"],
      correctIndex: 2,
      explanation: "The pattern is the member's outside-life habit running in the room; the conductor protects the circle's airtime while keeping the material treatable.",
      afterSectionId: "common-mistakes",
    },
  ],
  activeRecallQuestions: [
    { question: "Name Yalom's curative factors in your own words, and give an Indian clinical example each for universality, altruism, hope and the corrective family recapitulation.", answer: "The working list: UNIVERSALITY (the secret thought said aloud by a stranger dissolves shame — for stigma-heavy Indian presentations such as addiction, infertility-linked depression, HIV or self-harm, hearing 'I too hide bottles' is often the first relief in years); INSTILLATION OF HOPE (the two-years-sober member out-argues any leaflet — recovery observed, not promised); IMPARTING OF INFORMATION (the practical wisdom members exchange: which pharmacy keeps the affordable brand, how to answer a mother-in-law, what the craving wave felt like as it passed); ALTRUISM (the depressed woman who talks a younger member through a craving day — depression corrodes the sense of being useful, and the group is the only therapy that prescribes being needed); THE CORRECTIVE FAMILY RECAPITULATION (the group as a family that argues without expelling, depends without exploiting and can be re-entered after absence — for the patient whose dowry-house or childhood home was the wound, the circle is the controlled re-run); SOCIALISING TECHNIQUE AND IMITATIVE BEHAVIOUR (quiet members borrowing the scripts of fluent ones); INTERPERSONAL LEARNING — THE GROUP AS MIRROR ('when you talk over me, I stop listening': feedback no paid therapist is positioned to give); CATHARSIS WITH CONTAINMENT (strong feeling held by a circle that can bear it — discharge, not flooding); COHESIVENESS (the belonging itself, an active ingredient for lonely, migrated and widowed patients); EXISTENTIAL FACTORS (responsibility and finitude faced together — 'why me' maturing into 'what now'). The conductor's craft: aim the group's attention at the factor this member needs most this month.", topic: "Curative factors" },
    { question: "Sketch the group's developmental arc, mark where the drop-out wave arrives, and state what you say in advance to blunt it.", answer: "THE ARC: the first sessions are formal, polite and lean on the conductor (forming — expect the silent second session as a stage-sign); the storming early-middle phase brings challenge — who talks too much, who decides the rules, the direct or indirect attack on the conductor's competence — with the drop-out wave around the third-to-fifth session; conducted too authoritatively the group stalls here in dependence, too loosely and it frays into a grievance club without structure. Surviving the storm produces the norms (what is said here stays here; feelings named; members ask before advising), then the working phase — the conductor able to fall deliberately silent for long stretches while the members run the therapy on each other — and finally termination, itself the curriculum: goodbye said, gains reviewed, separation survived. THE WAVE: sessions three-to-five, a group phenomenon rather than a personal one. THE SCRIPT: named aloud at preparation and again at the storm — 'around session three-to-five a few people usually leave and the group grumbles; it happens to nearly every group, we will name it together, and I will phone anyone who misses' — and the naming loses half the wave's power; the phone calls are made the same week. Cohesion is built precisely by weathering predicted storms together.", topic: "Group development" },
    { question: "Give your list of exclusions from a mixed outpatient group — each with its one-sentence reason.", answer: "(1) THE ACTIVELY SUICIDAL OR ACUTELY SELF-HARMING — the group cannot hold the responsibility, and secrecy rules break down. (2) ACUTE PARANOIA — the circle reads as an audience of observers, so the setting itself feeds the illness. (3) SEVERE UNMANAGED TRAUMA WITH FLOODING EPISODES — the circle's shared affect can flood what is not yet stabilised. (4) BRAIN INJURY OR COGNITIVE IMPAIRMENT BEYOND THE GROUP'S PACE — the circle moves at social speed; it cannot slow indefinitely for one member. (5) ANTISOCIAL MOTIVATION — the group becomes an audience to con, and vulnerable members get injured. (6) ACTIVE UNSTABLE SUBSTANCE USE — the honesty norms collapse and the aftercare group is wasted. (7) THE FAMILY-ESCORTED PATIENT — attends under orders with a closed face, drops out by week three, and takes others' hope out of the room. The companion list: acute severe depression starts individual and joins as strength returns; marked social anxiety is prepared with graduated exposure to the circle itself; psychosis joins supportive or psychoeducational groups only when stabilised — never insight-oriented ones.", topic: "Selection" },
    { question: "Compare the interactive process group and the psychoeducation group on engine, membership and typical indication — one Indian example of each.", answer: "ENGINE: the interactive group runs on here-and-now member-to-member work — the conductor aims the circle's attention at the factor each member needs, and behaviour in the room is treated as a sample of outside life; the psychoeducation group runs on a structured curriculum with the group's warmth as a bonus on the didactic chassis — fixed content, measured language, handouts, practice homework. MEMBERSHIP: slow-open, members entering and leaving gradually over months to years (interactive) versus a closed fixed cohort of 6–12 sessions (psychoeducation); aftercare groups are the rolling-membership variant. INDICATION: interpersonal learning, the corrective recapitulation and the mirror for stable interpersonal difficulty (dysthymia with loneliness, avoidant and dependent patterns, chronic grief) versus the easier first exposure where disclosure is feared, inpatient orientation, and relapse prevention. INDIAN EXAMPLES: a metro private-practice slow-open circle for lonely dysthymia and social anxiety (the ₹300–800-per-session tier, approx 2026) versus the district de-addiction unit's 8-session relapse-prevention psychoeducation group for families and patients — the format Indian addiction aftercare is effectively built on, and the easier first circle in a culture where personal suffering is private property ('we are here to learn about the illness' sits easier than 'we are here to tell our truths').", topic: "Formats" },
    { question: "Why is combined individual-plus-group treatment an advantage rather than a compromise?", answer: "Because the two rooms do different jobs. The individual hour holds the private material — the trauma that cannot yet be said aloud to seven strangers, the residue of suicidality, the specific shames — at whatever depth and pace one relationship can bear. The group does the interpersonal work those private sessions cannot manufacture: universality (the secret met by 'I thought I was the only one'), the honest mirror of people with nothing to lose by giving feedback, rehearsal at social speed, usefulness prescribed, and a belonging that holds the difficult sessions. Far from being cheating, the combination was the classical indication: each room does what it is shaped for, and the referring clinician holds both frames. The clinical caveats: coordination of what is said where (the two conductors speaking, or one clinician holding both), honesty with the patient about the arrangement's purpose, and vigilance for the group becoming the individual therapy's hostage (the member processing circle events privately instead of inside the circle) — the work split, not the disclosure split, is the design.", topic: "Craft" },
    { question: "Give the cost-logic argument for groups as the default in a low-resource Indian district — and the two clinical populations for whom you would still choose individual work first.", answer: "THE ARGUMENT: one therapist, eight patients, one hour — nothing else in psychological medicine stretches a scarce workforce so honestly; in a country with a treatment gap measured in tens of millions, group therapy is the rational default wherever the clinical indications fit, not a charming alternative. The district design: a psychoeducation-plus-relapse-prevention architecture (fixed 6–12-session curricula for schizophrenia relapse prevention, bipolar family-plus-patient education, addiction aftercare) with trained ASHA-linked facilitators carrying the circles under a supervising psychologist — the viva's expected answer when the district has one clinical psychologist for two million people, and emphatically not eight strangers discussing childhoods. The evidence supports the architecture: comparable outcomes to individual therapy where delivery is comparable, strongest in substance use; the fellowships and SHG circles extend the tier at zero cost (₹0–100 per session where NGO and government groups charge at all). THE EXCEPTIONS: acute severe depression (start individual, bring to group as strength returns) and the actively suicidal or acutely self-harming (the group cannot hold the responsibility; secrecy rules break down) — individual care first in both, the circle as the recovery's second room.", topic: "Indian context" },
    { question: "What exactly do you tell a patient before sending them to their first AA meeting?", answer: "The briefing has five parts. (1) THE EXPECTATION: 'You will not be asked to speak — the instruction is just listen; you may pass on every turn, and nobody will press you.' (2) THE FACTS: no fee, no appointment, no record — the meeting list runs to hundreds across Indian cities and towns, and AA has met in India since the 1980s (NA for drugs, Al-Anon and Alateen for the families). (3) THE FRAME: the steps are spiritually framed — a grammar that fits many patients better than a clinic's; the professional respects the fellowship's non-professional sovereignty while referring into it. (4) THE SERIOUSNESS: the meeting card carried like a drug dose — the nearest meeting known before the patient needs it, and the referral made with the same weight as a prescription, because adding AA attendance to outpatient treatment measurably improves drinking outcomes, and in India it is often the only free aftercare that exists. (5) THE FOLLOW-UP: what the first meeting felt like, whether a second meeting will be attempted, and what the circle of the clinic (the relapse-prevention group) can rehearse — the fellowship referred into, never colonised.", topic: "Self-help fellowships" },
  ],
  faqs: [
    { question: "I cannot speak in front of people — how will group therapy work for me?", answer: "Nobody will make you perform — a single honest sentence counts, and the circle that makes room for its quiet members is the circle working as designed. For many with social anxiety the group is itself the treatment: a practice ladder climbed one sentence at a time, the conductor keeping the rounds moving so the quiet are called by name rather than passed over." },
    { question: "Why should I share my private matters with strangers?", answer: "Strangely, that is the point: strangers who share the problem can be told what the family must never hear — and they are still in the room next week. The confidentiality rule is the group's first and only standing contract: what is said in the circle stays in the circle, with its honest limits explained before you enter." },
    { question: "Is it not worse than individual therapy — less time with the doctor?", answer: "Time with the clinician is one input; the members supply the rest. Hope walking through the door, honest feedback, belonging — these come only from fellow patients, and for most stable difficulties the outcomes are comparable to individual therapy. Many people have both: the private material in one room, the interpersonal work in the other — the classical arrangement, not a compromise." },
    { question: "My son refuses to attend — should we send him anyway?", answer: "No. A patient under escort wears a closed face, is usually gone by week three, and takes the circle's hope out of the room with him. Win the motivation first, prepare second, and let a psychoeducation group ('we are all here to learn about the illness') be the gentlest door." },
    { question: "Are these free groups any good, doctor?", answer: "The free fellowship and self-help circles outperform their cost spectacularly — their strength is consistency and lived expertise, and lakhs of Indian self-help groups run on the same mechanisms as any conducted circle. Judge any group by its conductors, its facilitators and its drop-out behaviour, not by its fee; the professional groups add clinical structure, the free circles add permanence." },
    { question: "You already see me individually — why add the group?", answer: "Because my staying and my kindness are part of my job description; the circle's are not — and their staying anyway is the corrective experience no salary can buy. The circle also shows me how you actually come across to people — things you would never bring to me alone — and it lets you rehearse the difficult sentences on real faces before taking them home." },
    { question: "What happens in the meetings after mine, if I drop out?", answer: "The honest answer: the group continues, and your absence will be noticed and spoken about — which is why the difficult sessions are predicted in advance and you are phoned when you miss. Nobody vanishes silently from a healthy group; that noticing is half its therapy." },
    { question: "Can family members sit in?", answer: "In psychoeducation and family-skills groups, yes — often as co-learners, and in some Indian circles as a mixed-family format chosen deliberately where disclosure comfort demands it. In a personal-process group, no: the members' openness depends on the door staying closed to relatives — a family-inclusive format is chosen instead, never smuggled in." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Government of India NMHS (2015–16) and DMHP programme materials — the treatment-gap frame and the district delivery context (grey-literature tier, honestly labelled)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.6 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Yalom I — The Theory and Practice of Group Psychotherapy (5th edn, 2005 onward): the curative factors and the process canon; paraphrased, never quoted" },
      { source: "Budman S, Gurman A — Effective Short-Term Group Therapy (1988): the time-limited and homogeneous-group adaptations" },
    ],
    trials: [
      { source: "Project MATCH and the aftercare/matching literature (Weiss, McLellan) — twelve-step facilitation and aftercare outcomes; Tonigan J et al. — meeting attendance and drinking outcomes" },
      { source: "The Hope–Heimberg lineage — CBT-in-groups trials for social anxiety" },
      { source: "Patel V and colleagues (Goa), the SCARF Chennai community and family-intervention studies, Srinivasan & Tirupati (Chennai) group and family work — the Indian community group-care evidence" },
    ],
    reviews: [
      { source: "Cuijpers P et al. — meta-analyses of group-format treatment for depression and anxiety (2000s–2010s): comparable outcomes where delivery is comparable" },
      { source: "McDermut W, Miller I et al. — the founding group-therapy-for-depression meta-analysis" },
      { source: "Kelly J — the modern AA mechanisms research; the Mahajan review lineage: the recent synthesis on twelve-step facilitation" },
      { source: "Hughes J and the Cochrane-era reviews of self-help groups" },
      { source: "Chatterji M — the Indian Psychiatric Society and journal literature on de-addiction milieu programmes; NIMHANS de-addiction centre programme descriptions (context tier, grey literature honestly labelled)" },
    ],
    patientResources: [
      { source: "The AA/NA/Al-Anon meeting lists — the card every prescriber should carry and brief from ('just listen; you will not be asked to speak')" },
      { source: "Kudumbashree and the self-help group movement — the caregiver, disability and illness circles running the curative factors at population scale" },
      { source: "Tele-MANAS 14416 (24×7, free) — the national tele-mental-health service and its tele-group and signposting channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: what the circle is, why other patients heal, the bumpy session three-to-five, and what to expect at a first AA meeting.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The curative factors, the development arc, the selection lists, the formats and the craft numbers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "39 min",
      description: "Everything — the conductor's craft, the two injuries, the Indian delivery reality, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The machine, the curative factors, and the India-that-already-runs-on-groups.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can name the factors in your own words and say why the circle treats what the consulting room cannot." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Why other patients heal, the disclosure–feedback loop, the storm-to-cohesion arc.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can trace a disclosure to interpersonal learning and predict the weather by session number." },
    { number: 3, title: "Clinical Practice", description: "Selection, preparation, formats, craft and the two injuries.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the selection screen, choose the right machine, and script the preparation." },
    { number: 4, title: "Indian Context", description: "The fellowship card, the SHG lesson, the tele-group, the conductor shortage.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can answer the one-psychologist-for-two-million viva with a real architecture." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the storming and Kasaragod cases, and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can recite the factors, the stages, the exclusions and the evidence position cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.3.6 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Yalom I — The Theory and Practice of Group Psychotherapy (5th edn, 2005 onward): the curative-factor synthesis and process canon, paraphrased never quoted", sourceType: "textbook", year: "2005 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Tuckman B — the forming–storming–norming–performing sequence (1965, with the later adjourning addition), in its common clinical rendering", sourceType: "primary", year: "1965", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Budman S, Gurman A — Effective Short-Term Group Therapy: the time-limited and homogeneous-group adaptations", sourceType: "textbook", year: "1988", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Cuijpers P et al. — meta-analyses of group formats for depression and anxiety: comparable outcomes to individual therapy where delivery is comparable", sourceType: "meta-analysis", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Weiss R, McLellan A T and the Project MATCH / aftercare literature; Tonigan J and colleagues — twelve-step facilitation, AA linkage and meeting-attendance outcomes", sourceType: "trial", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Kelly J — the modern AA mechanisms research (meeting effect via mechanisms), with the Mahajan review lineage: the recent synthesis on twelve-step facilitation", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Hughes J and the Cochrane-era reviews of self-help groups", sourceType: "systematic-review", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Patel V and colleagues (Goa), the SCARF Chennai community and family-intervention studies, Srinivasan & Tirupati (Chennai) group and family work — the Indian community group-care evidence", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Kudumbashree and Kerala SHG documentation; Government of India NMHS (2015–16) and DMHP materials — the treatment-gap and programme context", sourceType: "government", year: "2015–16 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "McDermut W, Miller I et al. — the group-therapy-for-depression meta-analysis (founding); the Hope–Heimberg CBT-in-groups trials for social anxiety; Chatterji M and the NIMHANS de-addiction programme descriptions (grey literature honestly labelled)", sourceType: "meta-analysis", year: "2000s onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The curative-factor model: universality (shame dissolved by the shared secret), instillation of hope (recovery observed in members), imparting of information, altruism (usefulness restoring what depression corrodes), the corrective family recapitulation, socialising technique and imitative behaviour, interpersonal learning through the group as mirror, catharsis with containment, cohesiveness, and existential factors — the mechanisms the one-to-one room cannot manufacture.", grade: "supported", sources: ["S1", "S2"] },
    { text: "Group development as predictable weather: forming (polite, conductor-dependent), storming (challenge with the drop-out wave around the third-to-fifth session and the competence attack), norming (the working culture's rules), the working phase (the conductor falling deliberately silent) and termination as curriculum — predicted aloud, the wave loses half its power.", grade: "supported", sources: ["S2", "S3"] },
    { text: "Selection and preparation: chronic stable interpersonal difficulty predicts thriving; acute severe depression needs individual work first; the actively suicidal, acutely paranoid, flooding trauma, cognitive impairment beyond pace, antisocial motivation and unstable substance use are excluded from mixed groups; two preparation sessions halve early attrition.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The format architecture: interactive process groups (slow-open, here-and-now engine); psychoeducational and skills groups (fixed 6–12-session curricula — the district and inpatient workhorse); relapse-prevention and aftercare groups (rolling membership, check-ins, honesty norms); supportive groups; inpatient circles as riverbeds; and the AA/NA/Al-Anon fellowships (no professional, no fee, spiritually framed steps).", grade: "supported", sources: ["S1", "S2", "S4"] },
    { text: "The craft numbers: six to ten members (below five fragile, above twelve fragments); 60–90-minute sessions; the circle with no head of table; ground rules declared at the outset and reopened at the storm; co-therapy's content-process split; combined individual-plus-group treatment as the classical indication.", grade: "supported", sources: ["S1", "S2"] },
    { text: "The evidence position: group-format treatment for depression and anxiety delivers broadly comparable outcomes to individual therapy where delivery quality and dose are comparable (the Cuijpers and McDermut meta-analytic lines; the Hope–Heimberg social-anxiety trials); the strongest signal is in substance use, where aftercare formats and AA linkage added to outpatient treatment measurably improve drinking outcomes.", grade: "established", sources: ["S5", "S6", "S7", "S11"] },
    { text: "The two classic injuries and their management: the vulnerable member overwhelmed by a strong-affect session (containment rules held, individual check-in afterwards) and the monopoliser's capture of airtime and hope (early, kind, structural intervention — rounds, timing, the pause-and-include move).", grade: "supported", sources: ["S1", "S2"] },
    { text: "The Indian tier: de-addiction centre group programmes as the de facto national group-therapy system; AA in India since the 1980s with meeting lists running to hundreds, NA grown with the opioid wave, Al-Anon and Alateen for families; the Kudumbashree-lineage SHG movement with lakhs of circles delivering the curative factor set at population scale; the Vellore/SCARF/Goa community lines showing lay-facilitated group care reaching population scale; costs of ₹0–100 (NGO/government) to ₹300–800 per session (private metro, approx 2026).", grade: "supported", sources: ["S8", "S9", "S10"] },
    { text: "Tele-groups since the pandemic (Tele-MANAS-style services and NGO platforms): the circle gives up the chai and the eye and buys reach — a Kasaragod caregiver seated in a circle facilitated from Bengaluru with nothing but a ₹1,000 phone; the honest technique being smaller size (4–6), stricter rounds, and proactive individual follow-up for the silent member.", grade: "supported", sources: ["S10", "S1"] },
    { text: "The delivery arithmetic and the constraint: one therapist, eight patients, one hour — against a treatment gap measured in tens of millions (NMHS 2015–16), group treatment is the rational default wherever indications fit; short facilitator training in group psychoeducation (weeks, not years) is among the highest-yield district investments, the binding constraint being trained conductors rather than the concept.", grade: "supported", sources: ["S10", "S5"] },
  ],
};
