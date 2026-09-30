import type { PsychiatryCourse } from "./types";

/**
 * CHILD NEUROPSYCHIATRY — BEHAVIOURAL PHENOTYPES — canonical Psychiatry
 * course (migration batch 12, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-neuropsychiatry.md — untouched foundation),
 * re-researched against current guidance (the Nyhan behavioural-
 * phenotype concept, the Streissguth longitudinal prenatal-alcohol
 * cohort, the Rutter closed-head-injury series, the Stores and Saygi
 * frontal-epilepsy accounts, the British national child mental health
 * survey, the Willford/Sowell FASD neuroimaging lineage) with per-claim
 * provenance.
 *
 * Drug routes: NONE linked. The antiepileptic tier (carbamazepine,
 * valproate), the ADHD-comorbidity medication tier, levothyroxine for
 * congenital hypothyroidism and the lead-testing route have no KYP drug
 * lessons; each is taught in content and recorded honestly in
 * contentGaps, the route never invented.
 */
export const childNeuropsychiatryCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-neuropsychiatry",
  title: "Child Neuropsychiatry",
  shortName: "Child Neuropsychiatry",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Neuropsychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline: "Behavioural phenotypes — when the behaviour itself is the physical sign",
  summary:
    "Child neuropsychiatry covers the neurobiological basis of behaviour, from behavioural phenotypes of genetic syndromes to prenatal insults, epilepsy and brain injury. Parent guidance is part of treatment, and asking the pregnancy question early prevents disability.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define developmental neuropsychiatry and its scope; explain the developmental and transactional perspective using the ADHD-to-conduct-disorder progression.",
    "Define the behavioural phenotype (Nyhan 1972) and give the five classic syndromes with their signatures.",
    "List the inheritance mechanisms behind behavioural phenotypes — triplet repeat amplification, microdeletion, imprinting, transcriptional derepression, gene dosage — and explain why single mutations yield rich behavioural syndromes.",
    "Apply neurobehavioural teratology: the embryogenesis vulnerability window (days 14–60), dose- and stage-dependence, and the HOX-gene/retinoid/ethanol connection.",
    "Diagnose and manage foetal alcohol spectrum disorder: clinical features, behavioural phenotype, natural history, epidemiology (1.9 and ~9.1 per 1,000) and the prevention-first treatment.",
    "Summarise gestational opiate and cocaine exposure outcomes with the primacy of the postnatal environment, and recognise epilepsy's psychiatric faces — complex partial seizures, frontal-lobe epilepsy, Lennox–Gastaut — mastering the pseudoseizure differentiation.",
    "Quote the paediatric traumatic brain injury figures, explain the young-brain vulnerability paradox, and apply the Indian lens: hypothyroidism, lead and epilepsy stigma.",
    "State the one management law that runs through the whole domain: the parent's response, adjustment and involvement in treatment is a critical element in outcome.",
  ],
  quickFacts: [
    { label: "The term and the five signatures", value: "Nyhan 1972 — five classics", detail: "Behaviour so characteristic of a neurogenetic syndrome that it suggests the diagnosis (a visible readout of neuroanatomy): fragile X (gaze aversion, hyperkinesia), Williams (hypersociability, visuospatial deficits), Lesch–Nyhan (compulsive self-injury), Prader–Willi (hyperphagia, compulsions), Down (the language profile)" },
    { label: "The teratology window", value: "Days 14–60 of embryogenesis", detail: "Craniofacial, neural and organ malformations; the foetal period that follows produces behavioural and cognitive effects without physical abnormality — the same dose, differently timed, a different disease" },
    { label: "The FASD rates", value: "~1.9 and ~9.1 per 1,000", detail: "Full foetal alcohol syndrome worldwide incidence ~1.9 per 1,000 live births; FAS plus alcohol-related neurodevelopmental disorder ~9.1 per 1,000 in one US study — approaching 1%, and under-recognised because physicians do not systematically ask" },
    { label: "The electricity", value: "0.7–1.1% epilepsy prevalence", detail: "About half of all epilepsy begins in childhood; ~3% of children have febrile convulsions, of whom ~98% never develop epilepsy; the British national survey found 0.7% of 5–15-year-olds with epilepsy carrying excess emotional, behavioural and peer problems" },
    { label: "The pseudoseizure rule", value: "Electrical vs non-electrical", detail: "Observed-only occurrence, gradual onset, uncontrolled flailing, histrionics, painful stimuli avoided, sudden cessation with immediate alertness, no paroxysmal EEG discharge — and children with pseudoseizures commonly ALSO have true seizures" },
    { label: "The TBI paradox", value: "185 per 100,000; under-7s fare worse", detail: "Roughly 90% of paediatric traumatic brain injuries are mild; children under 7 paradoxically do WORSE than older children despite assumed plasticity; verbal memory deficits persist up to 10 years" },
    { label: "The one management law", value: "The parent is treatment", detail: "The parent's response, adjustment and involvement in treatment is a critical element in outcome across every domain in this course — parent guidance is not an adjunct to treatment, it is treatment" },
    { label: "The Indian lens", value: "TSH, lead, stigma", detail: "Where newborn screening is patchy, prolonged jaundice, large fontanelle, macroglossia and umbilical hernia must trigger TSH testing — every month of delay costs IQ points; lead hides in paint, batteries, contaminated water and surma; epilepsy carries marriage, schooling and employment discrimination" },
  ],
  knowledgeGraph: [
    { label: "Genetic Syndromes in ID", type: "condition", href: "/psychiatry/id-syndromes/", note: "The per-syndrome psychiatric maps this course's behavioural-phenotype principle populates — fragile X, Prader–Willi, Williams and Lesch–Nyhan in full clinical detail" },
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The supports framework the phenotype child is assessed inside — the genetics-informed look begins at the delay, not the behaviour" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The autistic-like patterns of fragile X and the tuberous-sclerosis regression — the overlap the phenotype lens keeps honest" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The prefrontal executive disorder that mislabels electrical episodes and rides with FASD — the most-referred wrong label in this domain" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "Where the transactional spiral lands — the ADHD-to-conduct progression this course's mechanism explains and interrupts" },
    { label: "Traumatic Brain Injury Neuropsychiatry", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The adult-facing TBI account this course's paediatric half complements — the under-7 paradox and the decade-long memory deficits" },
    { label: "GABA", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The inhibition half of the seizure equation — the immature brain's fewer high-affinity GABA-A receptors explaining childhood's peak incidence" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The excitation half — the imbalance that generates seizures and the psychiatric faces riding them" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The disinhibition address after severe closed injury — and the frontal-lobe epilepsy that mimics psychiatry with pedalling, laughter and nightmares" },
    { label: "Mesial temporal structures", type: "brain-region", href: "#brain", note: "The complex partial seizure's address — automatisms, affect and memory changes; mesial temporal sclerosis the structural cause the MRI hunts" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four mechanism stories carry child neuropsychiatry. The transactional story: the old passive model (the brain matures, behaviour appears) is dead — the active child shapes the responses of adults, which shape the child's brain further; the ADHD-to-conduct spiral is its clinical name, and the treatment target is the INTERACTION, not just the child. The phenotype story: a single mutated or misregulated gene — a triplet repeat, a microdeletion, an imprinting error, a transcriptional derepression, a whole extra chromosome's gene dosage — can regulate many downstream genes, which is why 'one gene' yields a rich behavioural syndrome rather than one symptom: behaviour becomes a visible readout of neuroanatomy (Nyhan's 1972 insight). The teratology story: HOX regulatory genes govern the face, head, hindbrain, heart and thymus (all neural-crest derivatives); retinoids control HOX genes; ethanol competitively inhibits retinol metabolism through a shared alcohol dehydrogenase — hence a 'funny face' can genuinely signal an abnormal brain, and the same dose malforms during embryogenesis (days 14–60) while 'only' altering behaviour in the foetal period. The excitability story: seizures arise from an imbalance between inhibition (GABA) and excitation (glutamate); the immature brain is MORE vulnerable — fewer high-affinity GABA-A receptors, larger excitatory postsynaptic potentials — which is why epilepsy's incidence peaks in childhood; and recurrent seizures then disturb the very functions psychiatrists assess: affect, memory, perception and behaviour.",
    steps: [
      "The transactional engine: the child acts on the environment which acts back — attention deficits drawing correction over warmth, the amplified behaviour drawing harsher handling, the spiral landing in conduct disorder; the parent's response a critical treatment variable, not background noise.",
      "The downstream-gene principle: single-gene mutations produce complex behavioural symptoms when the affected protein regulates many downstream genes — the reason a triplet repeat or an imprinting error assembles an entire personality signature rather than a single symptom.",
      "The teratology clock: HOX genes govern face, head, hindbrain, heart and thymus (the neural-crest derivatives); retinoids control HOX genes; ethanol competitively inhibits retinol metabolism via the shared alcohol dehydrogenase — malformation and behaviour change are one chemistry at different timings.",
      "The timing-and-dose law: embryogenesis (days 14–60) is the malformation window — craniofacial, neural and organ; the foetal period is the behavioural window — cognitive and behavioural effects without physical abnormality; the same dose, differently timed, produces a different disease.",
      "The excitability imbalance: GABA inhibition against glutamate excitation; the immature brain more vulnerable (fewer high-affinity GABA-A receptors, larger excitatory postsynaptic potentials) — epilepsy's incidence peaking in childhood.",
      "The environment multiplier: impoverished rearing disproportionately harms methadone-exposed children; a better home environment equalled the four-year scores of non-exposed cocaine children — the postnatal environment as the dose modifier of the prenatal insult.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the executive desk)", role: "ADHD investigated as a prefrontal executive disorder — and the developmental immaturity that makes the transactional spiral's first turn; the seat the complex-attention and executive deficits of FASD declare themselves in.", grade: "supported" },
    { id: "mesial-temporal", name: "Mesial temporal structures (the complex partial address)", role: "Temporal-lobe complex partial seizures with automatisms and affect and memory changes — mesial temporal sclerosis the structural cause the high-resolution MRI hunts; the psychiatry-neurology overlap at its widest.", grade: "established" },
    { id: "frontal-lobes", name: "Frontal lobes (the disinhibition address)", role: "Behavioural disinhibition after severe closed injury (Rutter's classical finding); frontal-lobe epilepsy's brief unresponsiveness with clonic phenomena, laughing/crying and pedalling; frontal injuries predicting the post-TBI behavioural profile.", grade: "established" },
    { id: "corpus-callosum", name: "Corpus callosum and midline frontal structures", role: "The FASD neuroimaging signature — corpus callosum and midline frontal abnormalities in the prenatal-alcohol cohorts; the structural echo of the behavioural phenotype.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "GABA", symbol: "GABA", role: "The inhibition half of the seizure equation — the immature brain's fewer high-affinity GABA-A receptors explaining why childhood is epilepsy's peak-incidence era.", grade: "established" },
    { name: "Glutamate", symbol: "Glu", role: "The excitation half — larger excitatory postsynaptic potentials in the immature brain; the imbalance that generates seizures and the psychiatric pictures that ride them.", grade: "established" },
    { name: "Endogenous opioid system", symbol: "END", role: "The gestational-opiate story's target — heroin and methadone exposure producing neonatal withdrawal and variable long-term outcomes, the methadone window raising vulnerability to the poor parent-infant relationships that must be monitored.", grade: "supported" },
  ],
  pathways: [
    {
      id: "teratogenesis-clock",
      name: "The teratogenesis clock (ethanol to the dysmorphic brain)",
      steps: [
        { label: "Ethanol competes for the shared dehydrogenase", detail: "Ethanol competitively inhibits retinol metabolism — the retinoid and ethanol systems share the alcohol dehydrogenase route" },
        { label: "Retinoid control of HOX genes disrupted", detail: "Retinoids control the HOX regulatory genes that govern face, head, hindbrain, heart and thymus — the neural-crest derivatives" },
        { label: "Embryogenesis mispatterning (days 14–60)", detail: "Craniofacial, neural and organ malformations during the vulnerability window; the same exposure later in pregnancy producing prematurity and small-for-dates" },
        { label: "Foetal-period behavioural damage", detail: "The same dose, in the foetal period, alters behaviour and cognition without physical abnormality — the FASD spectrum's wider end" },
      ],
      clinicalManifestation: "The child with the thin upper lip, the third-centile head and the arithmetic failure — a 'funny face' genuinely signalling an abnormal brain.",
      grade: "supported",
    },
    {
      id: "transactional-spiral",
      name: "The transactional spiral (ADHD to conduct disorder)",
      steps: [
        { label: "The child with attention deficits", detail: "The active child shapes the responses of adults — the passive maturation model abandoned" },
        { label: "More correction, less warmth", detail: "The elicited response amplifies the disruptive tendencies it means to suppress" },
        { label: "The amplified behaviour draws harsher handling", detail: "The environment the child created now acts back on the child's developing brain" },
        { label: "The spiral lands in conduct disorder", detail: "Treatment must therefore aim at the interaction — the parent's response a critical element in outcome" },
      ],
      clinicalManifestation: "The referral that names the child but not the interaction — and the treatment that must reach both.",
      grade: "established",
    },
    {
      id: "excitability-chain",
      name: "The excitability chain (imbalance to psychiatric presentation)",
      steps: [
        { label: "GABA-glutamate imbalance in a vulnerable brain", detail: "Fewer high-affinity GABA-A receptors and larger excitatory postsynaptic potentials — the immature brain more excitable" },
        { label: "Recurrent seizures", detail: "Complex partial, frontal-lobe and Lennox–Gastaut patterns declaring themselves in childhood, the incidence peak" },
        { label: "The assessed functions disturbed", detail: "Affect, memory, perception and behaviour — the very domains the psychiatrist evaluates" },
        { label: "The psychiatric presentation", detail: "Automatisms read as inattention, disorganisation read as conduct, hallucinations read as psychosis — the masquerade this course exists to unmask" },
      ],
      clinicalManifestation: "The 'behaviour problem' that was electrical — the seven-year-old whose aggression and daydreaming settled with carbamazepine.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "teratogenesis-window", time: "Gestational days 14–60", title: "The malformation window", description: "Embryogenesis: the dose that will malform the face, neural tube and organs does its structural work — craniofacial, neural and organ malformations from teratogen exposure (alcohol, retinoids, anticonvulsants); the HOX-governed derivatives at their most vulnerable.", phase: "onset" },
    { id: "foetal-period", time: "The foetal period", title: "Behaviour without malformation", description: "The same exposures now produce behavioural and cognitive effects without physical abnormality; late-pregnancy alcohol use mainly prematurity and small-for-dates — stage-specificity and dose-dependence the whole law.", phase: "onset" },
    { id: "infancy-window", time: "Birth and infancy", title: "Irritability, withdrawal and the screen window", description: "FASD growth deficiency, microcephaly and infantile irritability declare themselves; neonatal opiate withdrawal; the congenital-hypothyroidism window in which early diagnosis and levothyroxine prevent the intellectual disability — every month of delay costing IQ points where screening is unavailable.", phase: "peak" },
    { id: "preschool-era", time: "Years 1–7", title: "The phenotype declares itself", description: "Gaze aversion and hyperkinesia (fragile X), hypersocial hyperverbalness (Williams), hyperphagia (Prader–Willi), compulsive self-injury (Lesch–Nyhan); Lennox–Gastaut declares itself at 1–7 years; ~3% of children have febrile convulsions, ~98% never developing epilepsy.", phase: "peak" },
    { id: "school-era", time: "The school years", title: "The referral season — and the mislabels", description: "Maths-specific learning problems and attention deficits at average IQ (FASD); episodes read as ADHD and aggression; TBI at ~185 per 100,000 children (~90% mild) with new psychiatric disorder in a majority of severe injuries; the teacher's letter that names the wrong condition.", phase: "peak" },
    { id: "long-horizon", time: "Adolescence and beyond", title: "The life-course truth", description: "The CNS effects of FASD persist for life, ~50% functioning as intellectually disabled; in non-disabled adults the commonest structured-interview diagnoses are alcohol/drug dependence, mood disorders and personality disorders (passive-aggressive, antisocial); verbal memory deficits measurable a decade after TBI.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "FASD: full foetal alcohol syndrome ~1.9 per 1,000 live births worldwide; FAS plus alcohol-related neurodevelopmental disorder together ~9.1 per 1,000 in one US study — approaching 1% and among the most common preventable causes of intellectual disability; under-recognised because physicians do not systematically ask about alcohol. Epilepsy: incidence 0.7–1.1% of the general population; ~50% of all epilepsy begins in childhood; ~5% of children have recurrent seizures without extracerebral cause; ~3% have febrile convulsions, of whom ~98% never develop epilepsy; the British national survey found 0.7% of 5–15-year-olds with epilepsy and increased emotional, behavioural and peer-relationship problems among them. Traumatic brain injury: ~185 per 100,000 children (infancy to 14 years), ~90% mild. Congenital hypothyroidism: a preventable cause of intellectual disability where early diagnosis and levothyroxine prevent the syndrome — the argument for newborn screening.",
    indianPrevalence: "The Indian picture amplifies every one of these numbers' public-health meanings: epilepsy carries heavy stigma (marriage, schooling, employment discrimination) on top of its psychiatric load; TBI from road traffic accidents is a large and growing paediatric burden; congenital hypothyroidism screening is patchy outside major centres; lead exposure remains common in Indian environments; and FASD, though less prominent than in high-alcohol-consumption countries, is essentially unmeasured — the warning that physicians may not systematically enquire about alcohol applies with full force to Indian antenatal practice.",
    ageOfOnset: "The whole of childhood: Lennox–Gastaut declares itself at 1–7 years and Landau–Kleffner later (the late-onset language disorder); ~50% of all epilepsy begins in childhood; TBI spans infancy to 14 years (185 per 100,000, ~90% mild); FASD is present from birth with CNS effects persisting for life.",
    genderRatio: "The X-linked syndromes (fragile X, Lesch–Nyhan — classic Mendelian X-linked recessive) predominate in boys — the family-history pattern the inheritance clues ride on.",
    indianNotes: "Costs (approx 2026): genetic testing from karyotype to microarray ranges from a few thousand rupees in public institutions to far more privately; antiepileptics and levothyroxine are inexpensive and on essential-medicines lists; the scarce resources are developmental paediatrics, child neuropsychology and epilepsy monitoring beds — plan referrals realistically.",
  },
  etiology: [
    { category: "genetic", factor: "The syndrome tier", details: "Down syndrome (trisomy 21 — gene dosage), fragile X (triplet repeat amplification), Williams syndrome (microdeletion/contiguous gene deletion), Prader–Willi (imprinting), Rett (transcriptional derepression), Lesch–Nyhan (classic Mendelian X-linked recessive) — each carrying its behavioural phenotype." },
    { category: "biological", factor: "The prenatal exposure tier", details: "Teratogenic with gross malformation potential: alcohol (the best studied), retinoids, anticonvulsants (carbamazepine, valproate, lithium), SSRIs; neurotoxic without gross malformation: lead, heroin, methadone." },
    { category: "biological", factor: "The timing law and the shared pathways", details: "Embryogenesis (days 14–60) produces craniofacial, neural and organ malformations; the foetal period produces behavioural and cognitive effects without physical abnormality; effects are stage-specific and dose-dependent — the same alcohol dose that malforms during embryogenesis may 'only' alter behaviour in the foetal period. The mechanism: HOX regulatory genes govern face, head, hindbrain, heart and thymus (all neural-crest derivatives); retinoids control HOX genes; ethanol competitively inhibits retinol metabolism (shared alcohol dehydrogenase) — hence a 'funny face' can genuinely signal an abnormal brain." },
    { category: "social", factor: "The postnatal environment", details: "Impoverished rearing disproportionately harms methadone-exposed children; family instability perpetuates FASD behaviour problems; parents with ADHD or mood disorders may self-medicate with drugs; child abuse tracks substance abuse closely." },
    { category: "biological", factor: "The acquired tier", details: "Traumatic brain injury (falls, road traffic accidents); epilepsy from mesial temporal sclerosis, tuberous sclerosis, migrational disorders and tumours — the structural causes the high-resolution MRI exists to find." },
    { category: "biological", factor: "The endocrine tier", details: "Congenital hypothyroidism — intellectual disability preventable by neonatal diagnosis and levothyroxine; where screening is patchy, the clinical features (prolonged jaundice, large fontanelle, macroglossia, umbilical hernia) must trigger TSH testing." },
  ],
  symptomClusters: [
    {
      category: "1. The neurogenetic signatures (the five phenotypes)",
      symptoms: [
        "Fragile X: gaze aversion, hyperkinesia and autistic-like behaviour — the triplet-repeat boy",
        "Williams: sociability and hyperverbalness with striking visuospatial deficits — the microdeletion extrovert",
        "Lesch–Nyhan: compulsive self-injury and aggression — the X-linked recessive classic that gave Nyhan the concept",
        "Prader–Willi: hyperphagia with obsessive-compulsive features — the imprinting lesson",
        "Down: the language profile shaping the pattern of difficulty — gene dosage in a third chromosome",
        "Personality phenotypes (five-factor assessment) differ across syndromes and relate to parental behaviour and family context",
        "Isolated special abilities (calculation, music) may themselves be phenotypes — modular brain organisation",
      ],
    },
    {
      category: "2. The FASD spectrum (the preventable teratology)",
      symptoms: [
        "Full syndrome: prenatal and postnatal growth deficiency, microcephaly, infantile irritability, mild-to-moderate intellectual disability, characteristic facies",
        "~half have coordination problems, hypotonia and attention deficits; 20–50% have eye, ear and cardiac anomalies",
        "The wider spectrum (alcohol-related neurodevelopmental disorder) without growth retardation or anomalies: attention problems, disruptive behaviour, slow processing, clumsiness, speech disorders, fine motor impairment, maths-specific learning problems",
        "Even average-IQ children show deficits in complex attention, verbal learning and executive functioning",
        "The behavioural phenotype: poor abstraction, difficulty grasping cause-and-effect and generalising, impaired judgement, impulsivity — vulnerability to later oppositional and conduct diagnoses",
        "Natural history: CNS effects persist for life, ~50% functioning as intellectually disabled; in non-disabled adults the commonest structured-interview diagnoses are alcohol/drug dependence, mood disorders and personality disorders (passive-aggressive, antisocial)",
      ],
    },
    {
      category: "3. The gestational-exposure pictures",
      symptoms: [
        "Opiates: neonatal withdrawal with variable long-term outcomes; methadone exposure raising vulnerability to poor parent-infant relationships — the relationship itself the thing to monitor",
        "Cocaine: reduced gestational age, birth weight and head circumference; genitourinary, cardiac, CNS and limb-reduction anomalies (interrupted blood supply)",
        "Cocaine at 4 years: IQ effects not demonstrated but specific cognitive impairments were; a better home environment equalled the scores of non-exposed children; irritability and impulsivity diminish with behavioural intervention — the environment as the dose modifier",
        "Child abuse tracks substance abuse closely — the safeguarding shadow over every exposure history",
      ],
    },
    {
      category: "4. Epilepsy's psychiatric faces",
      symptoms: [
        "Complex partial seizures (temporal/frontal): automatisms, perceptual alterations, affect and memory changes, distorted thinking, hallucinations — the neurology-psychiatry overlap at its widest",
        "Frontal-lobe epilepsy: brief sudden unresponsiveness with preserved consciousness understanding, facial/arm clonic phenomena, laughing/crying, pedalling, sexual automatisms; sexual disinhibition, pressured tangential speech, screaming, aggression, disorganised behaviour and nightmares in children; a normal EEG does not exclude it",
        "Lennox–Gastaut: onset 1–7 years, intractable mixed seizures, slow spike-wave EEG, ~half intellectually disabled, marked language delay, overactivity, irritability — behaviour may improve with seizure control",
        "Prolonged minor status: weeks of social unresponsiveness, aggression and reduced articulation with minor twitching — distinguishable from psychiatric regression only by keeping it in mind",
        "Landau–Kleffner (late-onset language disorder); tuberous sclerosis with infantile-onset cognitive impairment and autistic regression linked to epilepsy",
      ],
    },
    {
      category: "5. The TBI sequelae and the interrelations",
      symptoms: [
        "Verbal memory impairment persisting up to 10 years — the most common long-term outcome",
        "Behavioural disinhibition after severe closed injury (Rutter's classical finding); frontal injuries predicting the behavioural profile",
        "New psychiatric disorder in a majority of severe-injury children, including over half of those WITHOUT premorbid disorder",
        "Level of consciousness, somatic injury and length of post-traumatic amnesia index severity; PTA ends when new memories form",
        "The interrelations: Tourette's with ADHD carries the disruptive behaviour and social dysfunction ('TS alone' has a different, milder social-emotional profile); OCD symptoms may be part of 'pure' Tourette's",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The behavioural-phenotype gateway",
      code: "Delay + signature → the genetics-informed look",
      criteria: [
        "Any child with intellectual disability plus a distinctive behavioural or personality signature deserves the genetics-informed look — dysmorphic features sought on examination, the five phenotype syndromes known cold.",
        "The inheritance modes read from the family history: X-linked patterns in Lesch–Nyhan and fragile X; imprinting clues in Prader–Willi.",
        "Neurogenetic assessment plus behavioural, neuropsychological and brain-imaging correlation — the modern pathway from genes to cognition.",
        "The behavioural phenotype itself (how he socialises, eats, worries) is diagnostic information even without a test.",
      ],
      duration: "The look happens at the first assessment of any delayed child with a signature — not after the behavioural programme has failed.",
      indianNote: "Genetic testing costs (approx 2026) run from a few thousand rupees (karyotype, public institutions) to far more (microarray, private) — the counselling about what each tier buys belongs in the first conversation.",
    },
    {
      system: "FASD assessment",
      code: "Ask, measure, test arithmetic",
      criteria: [
        "Ask systematically about alcohol in EVERY pregnancy history — the core prevention point; no agreed safe dose exists; binge patterns with high peaks are most deleterious; late-pregnancy use mainly causes prematurity and small-for-dates.",
        "Examine growth, head circumference, facies and heart (~half have coordination problems, hypotonia and attention deficits; 20–50% eye, ear and cardiac anomalies) — and test cognition, attention, executive function and arithmetic specifically: the disabilities live at average IQs too.",
      ],
      duration: "The question takes one minute at booking; the diagnosis otherwise waits until the arithmetic fails — years later, at a worse address.",
      indianNote: "Indian antenatal booking rarely asks about alcohol systematically, and local, traditional alcoholic preparations go unmentioned — ask privately, with the mother alone, with sensitivity where partner alcohol use complicates household dynamics.",
    },
    {
      system: "The epilepsy differentiation",
      code: "Clinical before laboratory",
      criteria: [
        "Epilepsy is a clinical, not laboratory, diagnosis; errors come from inadequate history — the episode analysis (abruptness, duration, stereotypy, post-episode drowsiness, occurrence during the interview) is the instrument.",
        "Sleep arousal disorders can mimic seizures; frontal versus temporal complex partial seizures distinguished by signature (see differential).",
        "Pseudoseizure differentiation: occur only when observed; gradual onset; uncontrolled flailing rather than rhythmic flexion-extension; histrionics; painful stimuli avoided; sudden cessation with immediate alertness; no paroxysmal EEG discharge.",
        "Video-EEG (sometimes with depth electrodes) settles difficult frontal-lobe cases — before psychotropic escalation.",
      ],
      duration: "The differentiation is made at the first history in most cases; video-EEG monitoring is reserved for the cases the history cannot settle.",
      indianNote: "Faith-healing circuits delay diagnosis and the school letter is often the first casualty — diagnosis confirmation, family psychoeducation and school liaison belong to the same consultation.",
    },
    {
      system: "TBI workup",
      code: "Beyond the IQ score",
      criteria: [
        "Neuropsychological profiling beyond IQ: visuomotor integration, learning disability detectable at low-average ability.",
        "Document post-traumatic amnesia duration — PTA ends when new memories form; with level of consciousness and somatic injury it indexes severity.",
        "Monitor for new psychiatric disorder after even 'mild' injuries in the young — the majority of severe-injury children develop one, including over half of those without premorbid disorder.",
      ],
      duration: "Follow-up on the decade horizon — verbal memory deficits are measurable up to 10 years after injury.",
      indianNote: "Road-traffic-injury survivors need the school-and-family reintegration package; disability certification and the RPwD Act's educational entitlements (concessions, scribes) are the practical Indian tools.",
    },
  ],
  severityScales: [
    {
      name: "PTA indexing",
      fullName: "Post-traumatic amnesia as the paediatric TBI severity index",
      measures: "Length of post-traumatic amnesia (PTA ends when new memories form) alongside level of consciousness and somatic injury — the severity indices for paediatric head injury.",
      ranges: [],
      indianNote: "Documenting PTA duration costs nothing and outperforms any imaging score for prognosis in the district hospital — the history the family can give, taken the day it happens.",
    },
    {
      name: "The dysmorphology-plus-growth set",
      fullName: "The FASD physical examination screen",
      measures: "Prenatal and postnatal growth, head circumference, the characteristic facies, and the eye, ear and cardiac anomalies (present in 20–50%) — the physical tier of the FASD assessment.",
      ranges: [],
      indianNote: "Head circumference charted on every developmental-delay child in the Indian OPD — the growth chart and the measuring tape are the highest-yield instruments in the building.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Complex partial epilepsy presenting as ADHD", distinguishingFeatures: "Episodes are abrupt in onset, brief (under a minute), interrupt mid-sentence, carry automatisms (lip-smacking, hand fumbling) and end with minutes of drowsiness — none of which inattention does.", keyDifferentiator: "The episode analysis: abruptness, stereotypy, automatisms and post-episode drowsiness point electrical; the EEG (temporal discharges) confirms what the history already knew." },
    { condition: "Frontal-lobe epilepsy vs schizophrenia or mania", distinguishingFeatures: "Sensory, gustatory and olactory hallucinations, disorganised behaviour and pressured tangential speech occurring as brief stereotyped episodes with partial awareness — not the sustained psychotic or manic state.", keyDifferentiator: "The episodic structure and the frontal motor signature (tonic posturing, pedalling, contralateral head/eye deviation); a normal EEG does not exclude it — video-EEG settles it." },
    { condition: "Pseudoseizure vs epileptic seizure", distinguishingFeatures: "Occur only when observed; gradual onset; uncontrolled flailing rather than rhythmic flexion-extension; histrionics; painful stimuli avoided; sudden cessation with immediate alertness; no paroxysmal EEG discharge.", keyDifferentiator: "The coexistence rule: children with pseudoseizures commonly ALSO have true seizures — the distinction is electrical vs non-electrical, never 'real vs psychological' (emotional dysphoria can precipitate true seizures)." },
    { condition: "Prolonged minor status vs psychiatric regression", distinguishingFeatures: "Weeks of social unresponsiveness, aggression and reduced articulation WITH minor twitching, in a child with known epilepsy (especially Lennox–Gastaut) — the twitching the tell.", keyDifferentiator: "Neurological review and EEG before the regression label; behaviour may improve with seizure control — the treatment that names the diagnosis." },
    { condition: "FASD/ARND vs 'laziness' or conduct problems", distinguishingFeatures: "Arithmetic-specific learning problems, abstraction deficits, difficulty grasping cause-and-effect, impulsivity and disinhibition — at average IQ, with growth or facies clues on examination and a pregnancy alcohol history nobody asked for.", keyDifferentiator: "The private, systematic pregnancy history plus growth, head circumference, facies and arithmetic-targeted testing — 'does not learn from consequences' is a neuropsychological sign here, not a character verdict." },
    { condition: "Sleep arousal disorders vs seizures", distinguishingFeatures: "Episodes arising from sleep with confusion and automotor activity — the classic seizure mimic the history must separate.", keyDifferentiator: "The sleep-bound timing and the arousal context; video-EEG where the history cannot settle it — the same arbiter as the frontal cases." },
  ],
  management: [
    { category: "prevention", name: "FASD: prevention is the treatment", description: "No safe dose in pregnancy: women pregnant or planning pregnancy should abstain; educate women of childbearing age; refer identified children early for educational services. Management of the identified child: parental acknowledgement of aetiology (with treatment of the parent's alcohol misuse as indicated); counselling on the physical and behavioural phenotype; special educational programmes; behavioural management; family therapy; treatment of comorbid ADHD, disruptive and mood disorders.", whenToUse: "Every antenatal booking (the question) and every identified child (the package).", indianContext: "The prevention package is cheap — ask, advise abstinence, educate — but Indian antenatal booking rarely asks, and local traditional alcoholic preparations go unmentioned; ask privately, with the mother alone, with sensitivity where partner alcohol use complicates household dynamics." },
    { category: "psychosocial", name: "Gestational substance exposure: treat the environment", description: "Attend to the postnatal rearing environment as much as the prenatal insult: treat parental substance use and psychiatric disorder (including the self-medicating ADHD and mood disorders); early intervention, special schooling, behavioural programmes, structured day programmes, ongoing parent training; monitor the methadone-exposed child's parent-infant relationship deliberately — the exposure raises vulnerability to its impairment.", whenToUse: "From the neonatal period onward — the relationship monitoring starts in the postnatal ward.", indianContext: "Child abuse tracks substance abuse closely — the safeguarding assessment belongs to every gestational-exposure consultation; the better home environment that equalled cocaine-exposed children's scores is buildable, and building it is the treatment." },
    { category: "pharmacotherapy", name: "Epilepsy: seizure control is behavioural control", description: "In Lennox–Gastaut, behaviour may improve with seizure control — the antiepileptic tier (carbamazepine settled the temporal-lobe case's behaviour) is the behavioural intervention of first rank; psychosocial support of the whole family; behavioural and psychiatric comorbidity treated in its own right; for apparent psychiatric presentations of seizure disorders (minor status, frontal automatisms), video-EEG BEFORE psychotropic escalation.", whenToUse: "From the first recognised episode — the clinical diagnosis made on history, the EEG supporting, the comorbidity treated alongside.", indianContext: "Antiepileptics are inexpensive; the scarce resources are epilepsy monitoring beds and the specialists who read them — refer for video-EEG where the history cannot settle the case, and screen explicitly for comorbidity at each visit." },
    { category: "surgical", name: "The epilepsy referral network", description: "Modern neuroimaging (high-resolution MRI identifying mesial temporal sclerosis, tuberous sclerosis, migrational disorders, small tumours) and surgical options (callosotomy, hemisphere procedures for catastrophic seizures) belong in the referral network — know the doors and send the right children through them.", whenToUse: "Refractory or catastrophic seizure patterns, regression with epileptiform signatures, and the structural questions the MRI answers.", indianContext: "The journey is long from the district hospital to the monitoring bed — the explicit referral conversation, the cost counselling and the follow-up plan are the referring clinician's treatment." },
    { category: "psychosocial", name: "TBI rehabilitation", description: "Early rehabilitation; family education about disinhibition and memory; school reintegration planning; long-horizon follow-up with effects measurable a decade later — verbal memory impairment persisting up to 10 years.", whenToUse: "From the acute admission's first week — the family educated before the disinhibition is misread as character.", indianContext: "Road-traffic-injury survivors need the school-and-family reintegration package; disability certification and the RPwD Act's educational entitlements (concessions, scribes) are the practical instruments." },
    { category: "prevention", name: "The universal ingredient: the parent", description: "Across all domains, the one management law: the parent's response, adjustment and involvement in treatment is a critical element in outcome — parent guidance is not an adjunct to treatment, it is treatment; the transactional model made operational in every clinic room.", whenToUse: "Every consultation, every condition — the levers the family controls are the levers the evidence names.", indianContext: "The Indian family is the delivery system for every intervention in this course — the psychoeducation, the school letter, the behavioural programme and the follow-through all travel through the parent's response and adjustment." },
  ],
  safety: {
    redFlags: [
      "Episodic unresponsiveness with automatisms and post-episode drowsiness being treated as 'daydreaming' or ADHD — the electrical mislabel; epilepsy is a clinical diagnosis and the history is the test",
      "Weeks of social unresponsiveness, aggression and reduced articulation with minor twitching in a child with known epilepsy (especially Lennox–Gastaut) — prolonged minor status, not psychiatric regression: neurology and EEG now",
      "Pseudoseizure diagnosed and the epilepsy file closed — children with pseudoseizures commonly ALSO have true seizures; both need their own management",
      "Self-injury in a child with intellectual disability — the Lesch–Nyhan signature; protection and the genetics-informed look, not behavioural blame",
      "A hypotonic, prolonged-jaundiced newborn with a large fontanelle, macroglossia or umbilical hernia where screening is unavailable — TSH now: every month of delay costs IQ points, and levothyroxine is on every essential-medicines list",
      "Developmental delay with anaemia and irritability in a lead-exposed household (paint, batteries, contaminated water, surma) — the lead level before the label",
    ],
    urgentGuidance:
      "The order of operations: (1) any episodic behaviour gets the episode analysis before any psychotropic — abruptness, duration, stereotypy, automatisms, post-episode drowsiness; (2) suspected minor status or frontal automatisms get video-EEG (with depth electrodes where needed) BEFORE psychotropic escalation — a normal interictal EEG does not exclude frontal-lobe epilepsy; (3) the pseudoseizure conclusion never closes the file — the coexisting true seizures arrive on their own schedule; (4) the hypothyroid screen features (prolonged jaundice, large fontanelle, macroglossia, umbilical hernia) trigger TSH testing the same week; (5) the lead level joins the workup of developmental delay with anaemia and irritability; (6) safeguarding runs through every gestational-exposure household — child abuse tracks substance abuse closely.",
  },
  drugLinks: [],
  contentGaps: [
    "The antiepileptic tier (carbamazepine, valproate and the rest) has no KYP drug lessons; seizure control as behavioural control is taught here, the dosing route never invented.",
    "The ADHD-comorbidity medication tier (treated 'with medication if needed' in the FASD management) has no KYP drug lessons linked here; the comorbidity's legitimacy and monitoring discipline are taught in content.",
    "Levothyroxine — the congenital-hypothyroidism prevention's whole pharmacology — has no KYP drug lesson; the screen-and-replace logic is taught here, the dosing never invented.",
    "The lead-testing and chelation route has no KYP content; the screening threshold (developmental delay with anaemia and irritability, the Indian exposure routes) is taught, the treatment referred.",
    "The gestational-exposure pharmacology (neonatal opiate withdrawal protocols, methadone-maintenance decisions in pregnancy) has no KYP lessons here; the parent's own substance-use treatment belongs to the substance-use course family and is cross-referenced, not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "This field of medicine looks at children whose behaviour, learning or emotions carry the mark of the brain itself — how it was built by genes, shaped before birth by alcohol, medicines, thyroid hormone or lead, or changed later by injury or seizures. Its founding idea is hopeful and demanding at once: development runs in both directions. The child shapes the people around him, and the people around him shape his developing brain — which means your responses, your adjustment and your involvement are a real, measured part of the treatment, not background to it.",
    whatCausesIt:
      "Several forces, often several at once. Genetic syndromes can carry characteristic behaviour patterns — so distinctive they can point to the diagnosis. Alcohol in pregnancy can affect the developing baby in a way that depends on when and how much: in the earliest weeks it can alter the face and organs; later it more often affects behaviour, attention and learning without any visible change — and there is no agreed safe dose. A thyroid hormone shortage from birth, if not treated, slows the mind; the newborn screen exists to catch it, and every month of delay costs IQ points. Lead — in old paint, batteries, contaminated water and some traditional eye cosmetics like surma — can quietly slow development. Head injury and seizures change behaviour directly, and children under 7 are, paradoxically, the most vulnerable of all.",
    symptoms:
      "Patterns, more than single symptoms: a genetic syndrome's signature (the fragile X boy who avoids your gaze and cannot sit still; the Williams child who talks to everyone but cannot judge space; the Lesch–Nyhan child who hurts himself; the Prader–Willi child who cannot stop eating); the alcohol-exposed child's arithmetic failure, impulsivity and 'not learning from punishment'; episodes of stillness with lip-smacking and fumbling that end in minutes of drowsiness; sudden disorganised or sexualised behaviour in brief bursts; weeks of fading responsiveness in a child with epilepsy; new behaviour and memory problems after a head injury.",
    treatment:
      "Prevention first: no alcohol in pregnancy — the advice for every woman planning one, and the question asked at every booking. For the identified child: naming the cause without blame, treating the parent's own alcohol or drug problem where it exists, special educational programmes (arithmetic-targeted where maths fails), structured behavioural management, family therapy, and treatment of the additional ADHD, disruptive or mood problems in their own right. For epilepsy: seizure control often controls the behaviour; the family gets support; and odd episodes are filmed and monitored before any behaviour-label treatment. For brain injury: early rehabilitation, family education about disinhibition and memory, school reintegration and follow-up over years, not weeks.",
    selfHelp: [
      "The transactional truth made practical: your responses are a treatment variable — warmth over correction where the attention deficits run, and help for your own ADHD, mood or drinking where they sit behind the harsher handling.",
      "The pregnancy question asked early and honestly with the doctor — privately if that helps — naming local and traditional drinks as well as bottles; no agreed safe dose exists, and abstinence is the advice.",
      "The arithmetic watch: maths-specific difficulty with average overall ability is a signature, not laziness — ask for the educational assessment rather than the punishment.",
      "The episode diary: what the episode looked like from onset to full alertness, how long, what came after — the single most useful document the neurologist will read.",
      "The home-environment audit for any exposed child: the better home equalled the better outcome in the cocaine-exposed children — the variable the family controls.",
      "The hypothyroidism urgency: prolonged jaundice, a large fontanelle, a large tongue or an umbilical hernia in a newborn mean TSH now, not next month.",
      "The school letter for epilepsy — the child is not possessed, not contagious, can study — asked for in writing and delivered to the class teacher.",
    ],
    whenToSeekHelp: [
      "Any episode of unresponsiveness with lip-smacking, fumbling or drowsiness afterwards — the EEG, not the behaviour clinic first",
      "Weeks of fading responsiveness and reduced speech in a child with known epilepsy — same-week neurological review (minor status)",
      "Self-injury in a child with developmental delay — assessment, protection and the genetics-informed look",
      "A newborn with prolonged jaundice and the hypothyroid screen features — TSH testing urgently; every month of delay costs IQ points",
      "Behaviour or memory changes after any head injury, even one 'without being knocked out' — watch, don't dismiss; children under 7 are the most vulnerable",
      "Signs of abuse or neglect in any household where drugs or alcohol live — the safeguarding conversation is part of this domain's medicine",
    ],
    indianResources: [
      "The school liaison letter for epilepsy — 'not possessed, not contagious, can study' — written by the treating team and delivered to the school",
      "Disability certification and the RPwD Act's educational entitlements (concessions, scribes) — the access instruments for TBI and neurodevelopmental disability",
      "Levothyroxine and antiepileptics through every essential-medicines channel, including Jan Aushadhi — inexpensive and universally listed",
      "Tele-MANAS 14416 (24×7, free) — the family distress channel for parents carrying a child's diagnosis",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific child-neuropsychiatry pathway exists; practice follows the developmental-neuropsychiatry framework taught here (behavioural phenotypes, teratology, TBI and epilepsy), with newborn screening for congenital hypothyroidism the one formal programme — patchy outside the major centres, which is why the clinical fallback features must do the screening's work where the programme has not reached.",
    systemContext: "The child meets the system at the paediatric OPD, the district hospital or the school referral — usually late, usually labelled 'behaviour problem', 'weak in studies' or 'not possessed' before any doctor is involved; faith-healing circuits absorb a large share of the epilepsy presentations before medicine sees them; the epistemology of the first consultation (episode analysis, pregnancy history, growth chart) decides everything downstream.",
    programmeContext: "The practical programme for epilepsy: diagnosis confirmation (the clinical-diagnosis rule), family psychoeducation, the school liaison letter (the child is not possessed, not contagious, can study) and explicit comorbidity screening at each visit; for TBI survivors, the school-and-family reintegration package with disability certification and the RPwD Act's educational entitlements (concessions, scribes); levothyroxine and antiepileptics on every essential-medicines list.",
    costConsiderations: "Approx 2026: genetic testing (karyotype to microarray) ranges from a few thousand rupees in public institutions to far more privately; antiepileptics and levothyroxine are inexpensive; the scarce resources are developmental paediatrics, child neuropsychology and epilepsy monitoring beds — plan referrals realistically and counsel families about what each tier of testing buys before ordering it.",
    culturalConsiderations: "Epilepsy's double burden: beyond the psychiatric comorbidity, Indian children with epilepsy face school expulsion, marriage-market discrimination and faith-healing circuits — stigma management is clinical work here, not etiquette. The FASD blind spot: antenatal booking rarely asks about alcohol, local traditional alcoholic preparations go unmentioned, and the question must be asked privately where partner alcohol use complicates household dynamics. Lead's Indian routes — paint, batteries, contaminated water, traditional cosmetics like surma — justify a low threshold for lead levels in developmental delay with anaemia and irritability. Congenital hypothyroidism: where screening is unavailable, prolonged jaundice, a large fontanelle, macroglossia and umbilical hernia must trigger TSH testing — every month of delay costs IQ points.",
    patientCounselling: [
      "The 'was it something I did?' script: genes, timing and biology shaped the wiring; your responses now are the strongest lever you control — and blaming yourself wastes the energy the child needs.",
      "The epilepsy script: 'It is an electrical disorder of the brain with emotional and behavioural difficulties attached. Both deserve treatment; neither is shame.'",
      "The school letter script: 'The child is not possessed, not contagious, can study' — written, signed, delivered to the class teacher, with the comorbidity screening at every visit.",
      "The alcohol script: 'I drank before I knew I was pregnant — is the baby harmed?' — the exposure window and amount matter, no safe dose exists, the advice now is abstinence and a developmental check with attention to arithmetic, attention and abstraction, not panic.",
      "The hypothyroid script: 'Every month of delay costs IQ points — the test today and the tablet (cheap, on every essential list) are the whole difference.'",
      "The head-injury script: 'Most recover fully, but children under 7 are paradoxically more vulnerable — watch for attention, memory and behaviour changes months later; watch, don't dismiss.'",
    ],
  },
  decisionPath: {
    title: "The child with the unexplained behaviour",
    nodes: [
      {
        id: "start",
        question: "A child is referred with behaviour the school cannot explain — aggression, 'daydreaming', failure to learn. First: the tempo, the company it keeps, and the timeline.",
        branches: [
          { label: "Episodic, abrupt, stereotyped, post-episode drowsiness", next: "epilepsy-path" },
          { label: "Intellectual disability with a distinctive behavioural signature", next: "phenotype-gate" },
          { label: "Delay or disinhibition with growth or facies clues", next: "fasd-gate" },
          { label: "Changed after a head injury", next: "tbi-path" },
        ],
      },
      {
        id: "epilepsy-path",
        question: "The episodes look electrical. Which electrical?",
        branches: [
          { label: "Amnesia disproportionate to consciousness loss; tonic posturing, pedalling, partial awareness", next: "frontal-path" },
          { label: "Oroalimentary and hand automatisms, looking around, post-episode confusion", next: "temporal-path" },
          { label: "Observed-only; gradual onset; uncontrolled flailing; histrionics", next: "pseudoseizure-path" },
        ],
      },
      {
        id: "frontal-path",
        question: "The frontal-lobe signature — brief, motor, bizarre.",
        recommendation: "Frontal-lobe epilepsy — and the rule that a normal EEG does not exclude it: video-EEG (sometimes with depth electrodes) settles the difficult cases BEFORE any psychotropic escalation; the sensory, gustatory and olfactory hallucinations separated from schizophrenia and mania by their episodic structure and motor signature.",
      },
      {
        id: "temporal-path",
        question: "The temporal-lobe signature — the behaviour problem that was electrical.",
        recommendation: "Complex partial epilepsy of temporal origin: a clinical diagnosis (errors come from inadequate history), the EEG supporting; treat the seizures — behaviour settling with seizure control is the confirmation — then treat the comorbid behaviour and night fears in their own right, explicitly, rather than assuming they will vanish.",
      },
      {
        id: "pseudoseizure-path",
        question: "The observed-only events — gradual, flailing, histrionic.",
        recommendation: "Pseudoseizure differentiation held honestly: gradual onset, uncontrolled flailing rather than rhythmic flexion-extension, painful stimuli avoided, sudden cessation with immediate alertness, no paroxysmal EEG discharge — AND the coexistence rule: children with pseudoseizures commonly also have true seizures; the distinction is electrical versus non-electrical, never 'real versus psychological' (emotional dysphoria can precipitate TRUE seizures).",
      },
      {
        id: "phenotype-gate",
        question: "Global delay plus a signature: gaze aversion with hyperkinesia? Hypersocial hyperverbalness? Self-injury? Hyperphagia with compulsions?",
        branches: [
          { label: "A five-syndrome signature matches", next: "genetics-path" },
          { label: "No match; the delay unexplained", next: "delay-workup" },
        ],
      },
      {
        id: "genetics-path",
        question: "The behavioural-phenotype gateway.",
        recommendation: "Dysmorphic examination, the family-history inheritance pattern (X-linked in Lesch–Nyhan and fragile X; imprinting clues in Prader–Willi), neurogenetic assessment with behavioural, neuropsychological and brain-imaging correlation — the modern pathway from genes to cognition; cost-counselled per the local tier (approx 2026, karyotype to microarray).",
      },
      {
        id: "delay-workup",
        question: "The unexplained delay — the Indian OPD's tier before and beside genetics.",
        recommendation: "TSH for the hypothyroid screen (prolonged jaundice, large fontanelle, macroglossia, umbilical hernia — every month of delay costs IQ points; levothyroxine on every essential-medicines list); a lead level where anaemia and irritability join the delay (paint, batteries, contaminated water, surma); then the genetics tier with realistic cost counselling.",
      },
      {
        id: "fasd-gate",
        question: "Delay or disinhibition with growth failure, microcephaly or the thin upper lip.",
        recommendation: "FASD assessment: the systematic alcohol history taken privately with the mother (no agreed safe dose; binge peaks most deleterious; late-pregnancy use mainly prematurity and small-for-dates); growth, head circumference, facies and heart; cognition tested for attention, executive function and ARITHMETIC specifically — the disabilities live at average IQs. Management: prevention-first, the parent treated where the alcohol misuse is theirs, the phenotype counselled, the school engaged.",
      },
      {
        id: "tbi-path",
        question: "The child who changed after the fall or the road accident.",
        recommendation: "Document PTA duration (it ends when new memories form) alongside consciousness level and somatic injury; neuropsychological profiling beyond IQ; family education on disinhibition and memory; school reintegration planning; follow-up on the decade horizon — and no 'plasticity' reassurance for the under-7s, who fare worse; the RPwD Act's entitlements and disability certification where the disability persists.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the electrical as behavioural (the inattention-to-ADHD mislabel)",
      why: "Brief episodes of unresponsiveness that interrupt mid-sentence, with automatisms and post-episode drowsiness, read as daydreaming and aggression — the teacher's letter requests ADHD treatment and the EEG is never ordered.",
      correction: "The episode analysis at every 'behaviour' referral: abruptness of onset, duration, stereotypy, automatisms, post-episode drowsiness — epilepsy is a clinical diagnosis, and the history is the test that orders the test.",
    },
    {
      mistake: "Reading pseudoseizure as 'not real' and closing the file",
      why: "The observed-only, flailing, histrionic picture invites dismissal — and children with pseudoseizures commonly ALSO have true seizures, which then go untreated under the discharged label.",
      correction: "The distinction held honestly: electrical versus non-electrical, never 'real versus psychological' — emotional dysphoria can precipitate TRUE seizures; both conditions get their own management and follow-up.",
    },
    {
      mistake: "Not asking about alcohol in pregnancy",
      why: "FASD is under-recognised precisely because physicians do not systematically ask; Indian antenatal booking rarely does, and local traditional preparations go unmentioned — the diagnosis hides behind the unasked question at every IQ level.",
      correction: "Ask every pregnancy history, privately and systematically (with the mother alone where partner dynamics complicate) — no agreed safe dose exists, and the identified child is referred early for educational services.",
    },
    {
      mistake: "Reassuring families with 'children's brains are plastic'",
      why: "The paradox: children under 7 fare WORSE after traumatic brain injury than older children — the developing brain is not a regenerating one; the reassurance dismisses the very population needing the follow-up.",
      correction: "Replace reassurance with a monitoring plan: attention, memory and behaviour watched for months after even 'mild' injuries in the young, follow-up on the decade horizon (verbal memory deficits up to 10 years), and new psychiatric disorder expected — including in children without premorbid disorder.",
    },
    {
      mistake: "Missing congenital hypothyroidism where the screen never reached the newborn",
      why: "Prolonged jaundice, a large fontanelle, macroglossia and umbilical hernia read as newborn variance; screening is patchy outside major centres, and every month of untreated delay costs IQ points.",
      correction: "The clinical fallback held in mind: the four features trigger TSH testing the same week; levothyroxine is inexpensive and on every essential-medicines list — the cheapest IQ protection in paediatrics.",
    },
    {
      mistake: "Treating the child only",
      why: "Every domain in this course carries the same law — the parent's response, adjustment and involvement is a critical element in outcome; impoverished rearing disproportionately harms the exposed child while a better home equalises the cocaine-exposed cohort's scores; treating the child alone leaves the treatment's load-bearing wall unbuilt.",
      correction: "Parent guidance as treatment, not adjunct: the psychoeducation, the school letter, the behavioural programme and the follow-through all travel through the parent — and the parent's own ADHD, mood disorder or drinking gets its own treatment, because the transactional spiral runs through them.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define developmental neuropsychiatry and its scope; define the behavioural phenotype (Nyhan, 1972) and give the five classic syndromes with their signatures.",
        "The inheritance mechanisms behind behavioural phenotypes: triplet repeat amplification (fragile X), microdeletion (Williams), imprinting (Prader–Willi), transcriptional derepression (Rett), gene dosage (Down), classic Mendelian X-linked recessive (Lesch–Nyhan).",
        "The teratology numbers: embryogenesis days 14–60 (the malformation window); stage- and dose-dependence; the HOX–retinoid–ethanol connection through the shared alcohol dehydrogenase.",
        "The pseudoseizure discriminators as a list: observed-only, gradual onset, uncontrolled flailing, histrionics, painful stimuli avoided, sudden cessation with immediate alertness, no paroxysmal EEG discharge — plus the coexistence rule.",
        "Paediatric TBI: 185 per 100,000 children, ~90% mild, verbal memory deficits up to 10 years, Rutter's finding of new disorder in over half of those without premorbid disorder, and the under-7 paradox.",
      ],
      practical: [
        "Take the pregnancy alcohol history privately and systematically — demonstrate the question that un-hides FASD, asked with the mother alone.",
        "Analyse an 'episode' at the bedside: abruptness, duration, stereotypy, automatisms, post-episode drowsiness — the clinical diagnosis of epilepsy done properly.",
        "Measure and chart head circumference and examine the dysmorphic child — the behavioural-phenotype gateway's physical examination, growth chart in hand.",
      ],
      longAnswer: [
        "Behavioural phenotypes in childhood psychiatric disorder: the concept, the inheritance mechanisms and the clinical application.",
        "The psychiatric faces of childhood epilepsy: recognition, differentiation (including the pseudoseizure differentiation) and management.",
        "Foetal alcohol spectrum disorder: teratogenesis, clinical features, natural history and the prevention-first management.",
      ],
    },
    neetPg: {
      highYield: [
        "NYHAN 1972: behaviour so characteristic of a neurogenetic syndrome that it suggests the diagnosis — the behavioural phenotype; stereotyped behaviour in sizeable numbers of affected individuals, reflecting structural CNS deficits.",
        "PHENOTYPE MATCHING (the short-answer favourite): fragile X = gaze aversion + hyperkinesia + autistic-like patterns; Williams = hypersocial + hyperverbal + visuospatial deficits; Lesch–Nyhan = compulsive self-injury; Prader–Willi = hyperphagia + compulsions; Down = the language profile.",
        "TERATOLOGY NUMBERS: embryogenesis days 14–60; FAS ~1.9 per 1,000 live births worldwide; FAS + ARND ~9.1 per 1,000 (approaching 1%); ~50% of FASD adults functioning as intellectually disabled.",
        "EPILEPSY NUMBERS: prevalence 0.7–1.1%; ~50% of all epilepsy begins in childhood; febrile convulsions ~3% with ~98% never developing epilepsy; the British national survey's 0.7% of 5–15-year-olds with excess emotional, behavioural and peer problems.",
        "FRONTAL vs TEMPORAL complex partial: frontal = amnesia disproportionate to consciousness loss, tonic posturing, pedalling, partial awareness, contralateral head/eye deviation; temporal = oroalimentary and hand automatisms with looking around.",
        "LENNOX–GASTAUT: onset 1–7 years, intractable mixed seizures, slow spike-wave EEG, ~half intellectually disabled, marked language delay, overactivity, irritability — behaviour may improve with seizure control.",
        "PSEUDOSEIZURE DISCRIMINATORS: observed-only, gradual onset, flailing not rhythm, histrionics, pain avoided, abrupt cessation with immediate alertness, no EEG discharge — AND commonly coexisting true seizures.",
        "PAEDIATRIC TBI: ~185 per 100,000 children (infancy to 14), ~90% mild; under-7s paradoxically WORSE; verbal memory impairment up to 10 years; new psychiatric disorder in a majority of severe injuries including over half without premorbid disorder (Rutter).",
        "THE PARENT LAW: the parent's response, adjustment and involvement in treatment is a critical element in outcome across every domain — parent guidance is treatment, not adjunct; the Indian exam corner adds congenital hypothyroidism and newborn screening (every month of delay costs IQ points), lead in developmental delay (paint, batteries, contaminated water, surma), epilepsy stigma management (the school letter) and FASD screening questions in antenatal booking.",
      ],
      pyqConcepts: [
        "The Nyhan behavioural-phenotype concept — the recurring definitions question.",
        "The days 14–60 window with the binge-timing twist — the teratology short note (high peaks most deleterious; late pregnancy mainly prematurity and small-for-dates).",
        "Frontal-lobe epilepsy's psychiatric presentations — sexual disinhibition, aggression, disorganised behaviour and nightmares in children (the Stores and Saygi lineage).",
        "Rutter's closed-head-injury series — new psychiatric disorder in previously well children, and the behavioural disinhibition finding.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 7-year-old Kochi boy referred by his school for 'sudden aggression and daydreaming' with a teacher's letter requesting 'treatment for ADHD': episodes of unresponsiveness with lip-smacking and hand fumbling, each under a minute, interrupting him mid-sentence — twice during the interview itself, with several minutes of drowsiness afterwards, plus worsening night fears. The episode analysis (abruptness, brevity, automatisms, post-episode drowsiness) points electrical; the EEG shows temporal discharges; complex partial epilepsy — the behaviour settling with carbamazepine and the ADHD letter withdrawn, the night fears treated explicitly rather than assumed to vanish. The learning: the misdiagnosis route (inattention to ADHD) is the standing warning; epilepsy is a clinical diagnosis made on history; the comorbid anxiety treated in its own right.",
        "A 5-year-old with known Lennox–Gastaut epilepsy brought for 'regression and behaviour': three weeks of social unresponsiveness, aggression and reduced articulation, with minor twitching the paediatric referral calls 'habits'. The recognition: prolonged minor status — weeks of reduced articulation and social withdrawal with minor twitching must be distinguished from psychiatric regression — and the response: video-EEG before any psychotropic escalation, the seizure control that is behavioural control in this syndrome, the family psychoeducation and the school letter (not possessed, not contagious, can study), with explicit comorbidity screening at each visit. The learning: regression in a child with epilepsy is an electrical question until proven otherwise.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Behavioural phenotype = Nyhan 1972; Lesch–Nyhan = the compulsive self-injury classic (X-linked recessive).",
        "FASD: no agreed safe alcohol dose; binge patterns with high peaks most deleterious; prevention is the treatment.",
        "Children with pseudoseizures commonly also have true seizures.",
        "Epilepsy is a clinical, not laboratory, diagnosis — the history first; a normal EEG does not exclude frontal-lobe epilepsy.",
        "Under-7 TBI paradox: the younger brain, the worse the outcome — plasticity is not regeneration.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The coexistence rule operationalised: never close the epilepsy file when the video-EEG shows non-epileptic events — the true seizures arrive on their own schedule in a substantial share of these children.",
        "A normal EEG does not exclude frontal-lobe epilepsy — the referral for video-EEG (depth electrodes where needed) IS the intervention; the psychotropic prescribed before it is the error this course exists to prevent.",
        "The FASD question belongs in every antenatal booking: asked privately, with the mother alone, naming the local traditional preparations — the diagnosis hides behind the unasked question at every IQ level, and the disabilities live at average IQs (complex attention, verbal learning, executive functioning, arithmetic).",
        "The under-7 family counselling: replace 'plasticity' reassurance with a monitoring plan — attention, memory and behaviour surfacing months later, verbal memory deficits measurable a decade on, new disorder expected even in the previously well.",
        "The school liaison letter for epilepsy ('not possessed, not contagious, can study') is first-order clinical work in the Indian context — stigma management changes adherence, schooling and the marriage market's arithmetic; write it, sign it, and deliver it to the class teacher yourself.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The behaviour problem that was electrical",
      presentation: "A seven-year-old's 'daydreaming and sudden aggression', a teacher's letter asking for ADHD treatment — and an EEG that read the behaviour correctly.",
      initialPresentation: "A 7-year-old boy was referred by his Kochi school for 'sudden aggression and daydreaming' in class: brief episodes of unresponsiveness with lip-smacking and fumbling of the hands, post-episode confusion, and worsening night fears at home. The referral letter explicitly requested 'treatment for ADHD'. During the first interview two episodes occurred, each lasting under a minute and interrupting him mid-sentence, with several minutes of drowsiness afterwards.",
      history: "Episodes began abruptly, lasted under a minute, interrupted him mid-sentence, and stereotyped from event to event; they had occurred twice during the assessment itself; night fears worsening over recent months; no head injury, no febrile convulsion history recorded; developmental milestones unremarkable.",
      examination: "Two witnessed episodes with lip-smacking and hand fumbling; several minutes of post-episode drowsiness documented on both occasions; otherwise intact neurological and developmental examination.",
      diagnosis: "Complex partial (temporal lobe) epilepsy presenting as school 'behaviour' — the inattention misread as ADHD, the aggression as conduct.",
      management: "EEG: temporal discharges. Carbamazepine commenced; psychoeducation delivered to the parents and, by letter, to the school; the comorbid night fears treated explicitly in their own right rather than assumed to vanish with seizure control.",
      outcome: "The behaviour settled with carbamazepine and the school's ADHD request was withdrawn; the night fears responded to the anxiety work the referral had never mentioned.",
      teachingPoints: [
        "Abrupt onset, brief duration, automatisms and post-episode drowsiness point electrical — the episode analysis is the diagnostic instrument.",
        "The misdiagnosis route (inattention read as ADHD) is the standing warning of this whole domain; the EEG that orders itself from a proper history is the correction.",
        "Treat the comorbid night fears explicitly — comorbidity is the rule in childhood epilepsy, not the exception.",
        "Epilepsy is a clinical, not laboratory, diagnosis: the history taken in front of you (two episodes during the interview) did the diagnostic work.",
      ],
    },
    {
      title: "The maths problem and the missed question",
      presentation: "A nine-year-old failing arithmetic who 'never learns from punishment' — the diagnosis hiding behind a question nobody had asked.",
      initialPresentation: "A 9-year-old boy in a Ludhiana school, referred for repeated arithmetic failure, restlessness, disinhibition and 'not learning from punishment'. No dysmorphism had been recorded on his school health file. The pregnancy history — taken systematically, privately, with the mother alone — revealed first-trimester binge alcohol exposure before the pregnancy was known.",
      history: "Repeated arithmetic failure against an average-range overall performance; restlessness and disinhibition in class; punishments repeated without behavioural change; no recorded dysmorphism; the private maternal history positive for first-trimester binge drinking before pregnancy recognition.",
      examination: "Thin upper lip; head circumference at the third centile; coordination difficulty on the bedside motor screen; no other dysmorphic features recorded.",
      diagnosis: "Foetal alcohol spectrum disorder — alcohol-related neurodevelopmental disorder: the arithmetic-specific learning difficulty, abstraction deficits and impulsivity are the phenotype, not 'laziness'.",
      management: "Parent counselling naming the cause without prosecution; educational assessment with maths-specific remediation; a structured behavioural programme; ADHD comorbidity treated with medication if needed; sibling-relevant prevention counselling for future pregnancies.",
      outcome: "The educational assessment confirmed the arithmetic-specific difficulty at average IQ; the remediation and behavioural programme were set up, and the future-pregnancy prevention counselling completed — the honest long-term frame being the course's: the CNS effects persist, and the management is educational and behavioural, never punitive.",
      teachingPoints: [
        "The disabilities live at normal IQ — arithmetic-specific difficulty with average overall ability is a signature, not an attitude.",
        "The diagnosis hides behind unasked questions: the private, systematic pregnancy alcohol history is the highest-yield instrument in the room.",
        "'Does not learn from consequences' is a neuropsychological sign in this group (poor abstraction, difficulty grasping cause-and-effect and generalising) — not a character verdict.",
        "Prevention counselling extends forward — the sibling-relevant conversation is part of the index child's management.",
      ],
    },
  ],
  clinicalPearls: [
    "Nyhan, 1972: behaviour so characteristic of a neurogenetic syndrome that it suggests the diagnosis — the behavioural phenotype, a visible readout of neuroanatomy.",
    "The five signatures: fragile X (gaze aversion, hyperkinesia, autistic-like), Williams (hypersocial, hyperverbal, visuospatial deficits), Lesch–Nyhan (compulsive self-injury), Prader–Willi (hyperphagia, compulsions), Down (the language profile).",
    "The inheritance list to recite cold: triplet repeat (fragile X), microdeletion (Williams), imprinting (Prader–Willi), transcriptional derepression (Rett), gene dosage (Down), Mendelian X-linked recessive (Lesch–Nyhan).",
    "Days 14–60 — the embryogenesis malformation window; the same alcohol dose in the foetal period 'only' alters behaviour: timing and dose, not exposure alone, decide the disease.",
    "A 'funny face' can genuinely signal an abnormal brain: HOX genes govern face, head, hindbrain, heart and thymus; retinoids control HOX; ethanol competitively inhibits retinol metabolism through the shared alcohol dehydrogenase.",
    "FASD rates: full FAS ~1.9 per 1,000 live births; the combined spectrum ~9.1 per 1,000 — approaching 1%; ~50% of affected adults function as intellectually disabled.",
    "The FASD behavioural phenotype: poor abstraction, difficulty grasping cause-and-effect and generalising, impaired judgement, impulsivity — 'does not learn from punishment' is a neuropsychological sign, not a character verdict.",
    "No agreed safe dose of alcohol in pregnancy — and binge patterns with high peaks are the most deleterious; the prevention is a question asked at booking.",
    "The pseudoseizure differentiation: observed-only, gradual onset, uncontrolled flailing, histrionics, pain avoided, sudden cessation with immediate alertness, no paroxysmal EEG discharge — with true seizures commonly coexisting.",
    "The under-7 paradox: the younger brain fares WORSE after injury — plasticity is not regeneration; verbal memory deficits persist up to 10 years.",
    "The one management law: the parent's response, adjustment and involvement in treatment is a critical element in outcome across every domain — parent guidance is treatment, not its adjunct.",
  ],
  highYieldSummary: [
    "Scope and perspective: developmental neuropsychiatry addresses the neurobiological basis of behaviour in infants, children and adolescents with neurodevelopmental disorders or brain damage acquired during development; development is transactional — the child acts on the environment which acts back (the ADHD-to-conduct spiral its clinical name), making the parent's response a critical treatment variable; the discipline's thesis: brain and behaviour are one continuous story.",
    "Behavioural phenotypes: Nyhan's 1972 term for behaviour so characteristic of a neurogenetic syndrome that it suggests the diagnosis — fragile X (gaze aversion, hyperkinesia, autistic-like patterns; triplet repeat), Williams (hypersociality, hyperverbalness, visuospatial deficits; microdeletion), Lesch–Nyhan (compulsive self-injury; X-linked recessive), Prader–Willi (hyperphagia with obsessive-compulsive features; imprinting), Down (the language profile; gene dosage), with Rett (transcriptional derepression) completing the inheritance list; personality phenotypes differ across syndromes, and isolated special abilities (calculation, music) may themselves be phenotypes.",
    "Neurobehavioural teratology: HOX regulatory genes govern face, head, hindbrain, heart and thymus (neural-crest derivatives); retinoids control HOX genes; ethanol competitively inhibits retinol metabolism (shared alcohol dehydrogenase) — one chemistry at different timings: embryogenesis (days 14–60) malforms, the foetal period alters behaviour and cognition without visible anomaly, late pregnancy mainly prematurity and small-for-dates; effects are stage-specific and dose-dependent.",
    "FASD and the gestational exposures: full syndrome = prenatal/postnatal growth deficiency, microcephaly, infantile irritability, mild-to-moderate ID, characteristic facies (~half with coordination problems, hypotonia, attention deficits; 20–50% eye, ear, cardiac anomalies); the wider spectrum (ARND) = attention problems, disruptive behaviour, slow processing, clumsiness, speech disorders, fine motor impairment, maths-specific learning problems — with deficits in complex attention, verbal learning and executive functioning even at average IQ; the behavioural phenotype runs to poor abstraction, impaired judgement and impulsivity; natural history: CNS effects persist for life, ~50% functioning as intellectually disabled, the adult structured-interview diagnoses running to alcohol/drug dependence, mood and personality disorders; rates ~1.9 per 1,000 (FAS) and ~9.1 per 1,000 (combined); prevention is the treatment — no safe dose, abstinence advised, women of childbearing age educated, identified children referred early; the exposure tier: opiates produce neonatal withdrawal with variable long-term outcomes, methadone raising vulnerability to poor parent-infant relationships (monitor the relationship); cocaine reduces gestational age, birth weight and head circumference (GU, cardiac, CNS and limb-reduction anomalies from interrupted blood supply), with specific cognitive — not global IQ — impairments at 4 years that a better home environment equalises; child abuse tracks substance abuse closely.",
    "Epilepsy's psychiatric faces: complex partial seizures (temporal/frontal) with automatisms, perceptual alterations, affect and memory changes, distorted thinking and hallucinations; frontal-lobe epilepsy (brief unresponsiveness with preserved consciousness understanding, clonic phenomena, laughing/crying, pedalling, sexual automatisms; sexual disinhibition, pressured tangential speech, screaming, aggression, disorganised behaviour and nightmares in children; a normal EEG does not exclude it); Lennox–Gastaut (onset 1–7 years, intractable mixed seizures, slow spike-wave, ~half intellectually disabled, language delay, overactivity, irritability — behaviour may improve with seizure control); prolonged minor status (weeks of social unresponsiveness, aggression, reduced articulation with minor twitching) distinguished from psychiatric regression; Landau–Kleffner (late-onset language disorder); tuberous sclerosis (infantile cognitive impairment and autistic regression linked to epilepsy).",
    "The differentiations: epilepsy is a clinical, not laboratory, diagnosis (errors from inadequate history; sleep arousal disorders mimic); frontal vs temporal complex partial (amnesia disproportionate to consciousness loss, tonic posturing, pedalling, partial awareness, contralateral head/eye deviation vs oroalimentary and hand automatisms with looking around); sensory/gustatory/olfactory hallucinations separated from schizophrenia and mania by their episodic structure; pseudoseizure (observed-only, gradual onset, uncontrolled flailing, histrionics, pain avoided, sudden cessation with immediate alertness, no paroxysmal EEG discharge — commonly coexisting with true seizures; the distinction electrical vs non-electrical, since emotional dysphoria can precipitate true seizures); video-EEG, sometimes with depth electrodes, settles the difficult frontal cases before psychotropic escalation.",
    "Paediatric TBI: ~185 per 100,000 children (infancy to 14), ~90% mild; the most common long-term outcome is verbal memory impairment persisting up to 10 years; behavioural disinhibition follows severe closed injury (Rutter), with new psychiatric disorder in a majority of severe-injury children including over half WITHOUT premorbid disorder, and frontal injuries predicting the behavioural profile; the under-7 paradox — the developing brain is not a regenerating one; management: early rehabilitation, family education, school reintegration, decade-horizon follow-up.",
    "The management law and the Indian tier: the parent's response, adjustment and involvement is a critical element in outcome across every domain — parent guidance is treatment; the Indian programme: epilepsy's double burden (stigma: school expulsion, marriage-market discrimination, faith-healing circuits — the school liaison letter and comorbidity screening), the FASD blind spot (ask privately at booking; local traditional preparations named), congenital hypothyroidism (clinical fallback features — prolonged jaundice, large fontanelle, macroglossia, umbilical hernia — triggering TSH; every month of delay costs IQ points; levothyroxine on every essential list), lead (paint, batteries, contaminated water, surma — a low threshold in developmental delay with anaemia and irritability), and costs approx 2026 (genetics from a few thousand rupees publicly to far more privately; the scarce resources developmental paediatrics, child neuropsychology and epilepsy monitoring beds).",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cnp-quiz-1",
      question: "A pregnant woman binge-drinks during days 20–40 of gestation. Compared with the same intake in the third trimester, the embryogenesis exposure is more likely to produce:",
      options: [
        "Craniofacial and major organ malformations",
        "Only prematurity and low birth weight",
        "No effects at all",
        "Purely behavioural abnormalities without any physical changes",
      ],
      correctIndex: 0,
      explanation: "The vulnerability window for malformations is embryogenesis (days 14–60); foetal-period exposure more often yields behavioural-cognitive effects without visible anomaly, and late pregnancy mainly prematurity and small-for-dates.",
      afterSectionId: "mechanism",
    },
    {
      id: "cnp-quiz-2",
      question: "A hypersocial, hyperverbal child with striking visuospatial deficits. The inheritance mechanism to teach the family:",
      options: [
        "Triplet repeat amplification (fragile X)",
        "Contiguous-gene microdeletion (Williams syndrome)",
        "Imprinting error (Prader–Willi)",
        "Gene dosage (Down syndrome)",
      ],
      correctIndex: 1,
      explanation: "The Williams signature — sociability and hyperverbalness against visuospatial deficits — rides on the microdeletion/contiguous gene deletion; fragile X is the gaze-aversion boy, Prader–Willi the hyperphagia, Down the language profile.",
      afterSectionId: "symptoms",
    },
    {
      id: "cnp-quiz-3",
      question: "Which constellation most strongly argues pseudoseizure rather than epileptic seizure?",
      options: [
        "Abrupt onset mid-sentence with post-episode drowsiness",
        "Rhythmic flexion-extension with postictal confusion",
        "Episodes only when observed, gradual onset, uncontrolled flailing with painful stimuli avoided, sudden cessation with immediate alertness",
        "Contralateral head and eye deviation with tonic posturing",
      ],
      correctIndex: 2,
      explanation: "The pseudoseizure signature: observed-only occurrence, gradual onset, uncontrolled flailing rather than rhythmic flexion-extension, histrionics, pain avoided, sudden cessation with immediate alertness — and no paroxysmal EEG discharge; the other options are the true-seizure and frontal-epilepsy signatures.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cnp-quiz-4",
      question: "The feature most strongly suggesting frontal- rather than temporal-lobe origin of complex partial seizures:",
      options: [
        "Oroalimentary automatisms with looking around",
        "Amnesia disproportionate to the degree of consciousness loss, with tonic posturing and pedalling movements",
        "Continuous spike-wave during sleep",
        "Postictal migraine",
      ],
      correctIndex: 1,
      explanation: "The frontal signature: prominent amnesia, bilateral motor phenomena (tonic posturing, pedalling) and partial awareness; the temporal seizure shows oroalimentary and hand automatisms with environmental scanning.",
      afterSectionId: "differential",
    },
    {
      id: "cnp-quiz-5",
      question: "The one intervention that runs through every condition in this course — the phenotypes, FASD, TBI and epilepsy alike:",
      options: [
        "Antipsychotic for aggression",
        "The parent's response, adjustment and involvement in treatment",
        "Exclusion from mainstream school",
        "Annual CT surveillance",
      ],
      correctIndex: 1,
      explanation: "The management law of the whole domain: the parent's response, adjustment and involvement is a critical element in outcome — parent guidance is treatment, not an adjunct to it.",
      afterSectionId: "management",
    },
    {
      id: "cnp-quiz-6",
      question: "A developmentally delayed, irritable, anaemic child in an Indian OPD whose grandmother applies surma to his eyes. The screening tier before the genetics referral:",
      options: [
        "MRI brain first",
        "Serum lead level — with the exposure routes named: paint, batteries, contaminated water, traditional cosmetics",
        "Nothing — wait and reassess in a year",
        "Routine EEG",
      ],
      correctIndex: 1,
      explanation: "Indian exposure routes justify a low threshold for lead levels in developmental delay with anaemia and irritability — the level before the label; the genetics tier follows, cost-counselled.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Define developmental neuropsychiatry and its scope, and explain the transactional model using the ADHD-to-conduct progression.", answer: "DEFINITION: the discipline that addresses the neurobiological basis of behaviour in infants, children and adolescents with neurodevelopmental disorders or brain damage acquired during development — a six-domain scope of which this course teaches the behavioural phenotypes, neurobehavioural teratology, traumatic brain injury and epilepsy in depth, with the endocrine (congenital hypothyroidism) and postnatal-environment lenses alongside. THE TRANSACTIONAL MODEL: the old passive account (the brain matures, behaviour appears) is dead — the active child shapes the responses of adults, which shape the child's brain further. The child with attention deficits elicits more correction and less warmth; that response amplifies the disruptive tendencies; the amplified behaviour draws harsher handling; the spiral lands in conduct disorder. THE CLINICAL CONSEQUENCE: treatment aims at the INTERACTION, not just the child — the parent's response, adjustment and involvement is a critical element in outcome, which is why parent guidance is treatment and not its adjunct.", topic: "Foundations" },
    { question: "Give the five classic behavioural phenotypes with syndrome, inheritance mechanism and signature.", answer: "FRAGILE X — triplet repeat amplification: gaze aversion, hyperkinesia and autistic-like behaviour in boys. WILLIAMS — microdeletion/contiguous gene deletion: sociability and hyperverbalness with striking visuospatial deficits. LESCH–NYHAN — classic Mendelian X-linked recessive: compulsive self-injury and aggression (the observation that gave Nyhan the 1972 concept). PRADER–WILLI — imprinting: hyperphagia with obsessive-compulsive features. DOWN — trisomy 21, gene dosage: the language profile shaping the pattern of difficulty. Two framing additions: RETT (transcriptional derepression) completes the inheritance-mechanism list; and personality phenotypes assessed on the five-factor model differ across syndromes, relating to parental behaviour and family context — while isolated special abilities (calculation, music) may themselves be phenotypes, suggesting modular brain organisation.", topic: "Genetics" },
    { question: "Draw the timing logic of teratology: embryogenesis versus foetal-period exposure, with the alcohol example and the HOX–retinoid connection.", answer: "EMBRYOGENESIS (DAYS 14–60): the vulnerability window for structural damage — craniofacial, neural and organ malformations from teratogen exposure (alcohol the best studied; retinoids, anticonvulsants such as carbamazepine, valproate and lithium, and SSRIs on the exposure list). FOETAL PERIOD: the same exposures produce behavioural and cognitive effects WITHOUT physical abnormality — attention problems, learning difficulty, slow processing; late pregnancy alcohol use mainly prematurity and small-for-dates. THE LAW: effects are stage-specific and dose-dependent — the same alcohol dose that malforms during embryogenesis may 'only' alter behaviour in the foetal period. THE MECHANISM STORY: HOX regulatory genes govern face, head, hindbrain, heart and thymus (all neural-crest derivatives); retinoids control HOX genes; ethanol competitively inhibits retinol metabolism through the shared alcohol dehydrogenase — which is why a 'funny face' can genuinely signal an abnormal brain, and why FASD's dysmorphology and its behaviour are one chemistry at different timings.", topic: "Teratology" },
    { question: "State the FASD diagnostic picture, the behavioural phenotype, the natural history and the two epidemiological rates.", answer: "DIAGNOSTIC PICTURE (full syndrome): prenatal and postnatal growth deficiency, microcephaly, infantile irritability, mild-to-moderate intellectual disability, characteristic facies — with roughly half having coordination problems, hypotonia and attention deficits, and 20–50% eye, ear and cardiac anomalies; the wider spectrum (alcohol-related neurodevelopmental disorder) runs without growth retardation or anomalies: attention problems, disruptive behaviour, slow processing, clumsiness, speech disorders, fine motor impairment and maths-specific learning problems. BEHAVIOURAL PHENOTYPE: poor abstraction, difficulty grasping cause-and-effect and generalising, impaired judgement, impulsivity — with vulnerability to later oppositional and conduct diagnoses; even average-IQ children show deficits in complex attention, verbal learning and executive functioning. NATURAL HISTORY: CNS effects persist for life; ~50% function as intellectually disabled; in non-disabled adults the commonest structured-interview diagnoses are alcohol/drug dependence, mood disorders and personality disorders (passive-aggressive, antisocial). RATES: full FAS ~1.9 per 1,000 live births worldwide; FAS plus ARND ~9.1 per 1,000 in one US study — approaching 1% and among the most common preventable causes of intellectual disability.", topic: "Clinical practice" },
    { question: "Contrast frontal with temporal complex partial seizures, and give the pseudoseizure discriminators with the coexistence rule.", answer: "FRONTAL: amnesia disproportionate to the degree of consciousness loss, tonic posturing and pedalling, partial awareness, contralateral head and eye deviation; in children the behavioural presentation runs to sexual disinhibition, pressured tangential speech, screaming, aggression, disorganised behaviour and nightmares — and a NORMAL EEG DOES NOT EXCLUDE IT. TEMPORAL: oroalimentary and hand automatisms with looking around, post-episode confusion, automatisms and perceptual, affect and memory changes. PSEUDOSEIZURE DISCRIMINATORS: occur only when observed; gradual onset; uncontrolled flailing rather than rhythmic flexion-extension; histrionics; painful stimuli avoided; sudden cessation with immediate alertness; no paroxysmal EEG discharge. THE COEXISTENCE RULE: children with pseudoseizures commonly ALSO have true seizures — so the distinction is electrical versus non-electrical, never 'real versus psychological'; emotional dysphoria can precipitate TRUE seizures. The arbiter: video-EEG, sometimes with depth electrodes, which settles the difficult frontal-lobe cases before any psychotropic escalation.", topic: "Diagnosis" },
    { question: "Why do children under 7 do worse after traumatic brain injury, how long can verbal memory deficits persist, and what did Rutter's classical series show about new psychiatric disorder?", answer: "THE PARADOX: children under 7 fare WORSE than older children despite the assumed plasticity — because the developing brain is not a regenerating one; early injury damages the very programme that would have compensated, displacing the architecture rather than merely the contents. THE DURATION: verbal memory impairment — the most common long-term outcome — persists up to 10 years. RUTTER'S CLASSICAL FINDINGS: behavioural disinhibition after severe closed injury, and new psychiatric disorder in a MAJORITY of severe-injury children — including over half of those WITHOUT premorbid disorder (the finding that ended the 'premorbid vulnerability explains it all' reading); frontal injuries predict the behavioural profile. THE NUMBERS: ~185 per 100,000 children (infancy to 14), ~90% mild; severity indexed by level of consciousness, somatic injury and post-traumatic amnesia length (PTA ends when new memories form). THE PRACTICE: early rehabilitation, family education about disinhibition and memory, school reintegration, and follow-up on the decade horizon.", topic: "Clinical practice" },
    { question: "Which factors make methadone and cocaine outcomes so environment-dependent — and what is the one management law running through the whole domain?", answer: "METHADONE: exposure raises the child's vulnerability to poor parent-infant relationships — the relationship itself the thing to monitor and support, because impoverished rearing disproportionately harms the exposed child; outcomes are variable precisely because the postnatal environment varies. COCAINE: reduced gestational age, birth weight and head circumference with GU, cardiac, CNS and limb-reduction anomalies (interrupted blood supply); at 4 years IQ effects were NOT demonstrated but specific cognitive impairments were — and a BETTER HOME ENVIRONMENT equalled the scores of non-exposed children; irritability and impulsivity diminish with behavioural intervention. THE FAMILY SHADOW: child abuse tracks substance abuse closely, and parents with ADHD or mood disorders may self-medicate with drugs — treating the parent is part of treating the child. THE MANAGEMENT LAW: across all domains, the parent's response, adjustment and involvement in treatment is a critical element in outcome — parent guidance is not an adjunct to treatment, it IS treatment.", topic: "Management" },
    { question: "The Indian tier: state the three screening/stigma tasks — hypothyroidism, lead and epilepsy stigma — with the specifics.", answer: "CONGENITAL HYPOTHYROIDISM: where newborn screening is unavailable, the clinical fallback must do the screen's work — prolonged jaundice, large fontanelle, macroglossia and umbilical hernia trigger TSH testing; every month of delay costs IQ points, and levothyroxine is on every essential-medicines list (the preventable-argument for screening made flesh). LEAD: Indian exposure routes — paint, batteries, contaminated water, traditional cosmetics like surma — justify a low threshold for lead levels in developmental delay presenting with anaemia and irritability. EPILEPSY STIGMA: beyond the psychiatric comorbidity, Indian children face school expulsion, marriage-market discrimination and faith-healing circuits — the practical programme is diagnosis confirmation (the clinical-diagnosis rule), family psychoeducation, the school liaison letter (the child is not 'possessed', not contagious, can study) and explicit comorbidity screening at each visit. THE COST FRAME (approx 2026): genetic testing from a few thousand rupees publicly to far more privately; antiepileptics and levothyroxine inexpensive; developmental paediatrics, child neuropsychology and epilepsy monitoring beds the scarce resources.", topic: "Indian context" },
  ],
  faqs: [
    { question: "Was it something I did?", answer: "The question every parent of a child with a developmental disorder asks. The honest answer: genes, timing and biology shaped the wiring; your responses now are the strongest lever you control — and blaming yourself wastes the energy the child needs." },
    { question: "Can a genetic test explain his behaviour?", answer: "Sometimes specifically (fragile X, Prader–Willi), often partially, sometimes not yet. The behavioural phenotype itself — how he socialises, eats, worries — is diagnostic information even without a test." },
    { question: "I drank before I knew I was pregnant — is the baby harmed?", answer: "The exposure window and amount matter; risk rises with binge-pattern drinking in early pregnancy. There is no safe established dose, so the advice now is abstinence — and a developmental check with attention to arithmetic, attention and abstraction, not panic." },
    { question: "Is epilepsy a mental illness — and can my child attend a normal school?", answer: "No: it is an electrical disorder of the brain with high rates of emotional and behavioural difficulties attached — both deserve treatment, neither is shame. And yes, almost always she can study alongside everyone: the school liaison letter exists to make it so (the child is not possessed, not contagious, can study) — ask the treating team for it in writing; where expulsion is threatened, it is the instrument that answers." },
    { question: "He wasn't even knocked out — can a mild head injury matter?", answer: "Most recover fully, but children younger than 7 are paradoxically more vulnerable, and subtle problems (attention, memory, behaviour) can surface months later; watch, don't dismiss." },
    { question: "Will the seizures make her intellectually disabled?", answer: "Most childhood epilepsy does not; specific syndromes (Lennox–Gastaut, tuberous sclerosis-related) carry much higher risk, and early seizure control improves behaviour and development in several of them." },
    { question: "Why does the doctor keep treating me (the parent)?", answer: "Because your response and adjustment are the best-documented modifiers of outcome in every condition in this domain — the transactional model in clinic form. Treating the parent is part of treating the child." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Newborn-screening programmes for congenital hypothyroidism — the early-diagnosis-and-levothyroxine prevention argument this course's endocrine lens teaches" },
      { source: "The clinical-diagnosis rule in epilepsy (history before investigation) with video-EEG as the arbiter of difficult cases — the differentiation standard followed here" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Streissguth AP et al. — the prospective longitudinal cohort of prenatal alcohol exposure (500 offspring, birth to 14 years): dose-dependent effects" },
    ],
    reviews: [
      { source: "Nyhan WL (1972) — the behavioural phenotype concept, born from the Lesch–Nyhan self-injury observation" },
      { source: "Rutter M et al. — the classical studies of the psychiatric sequelae of closed head injury: behavioural disinhibition and new disorder in previously well children" },
      { source: "Stores G et al. — frontal-lobe epilepsy's psychiatric presentations in children; Saygi I et al. — the sexual disinhibition, aggression and disorganised behaviour series" },
      { source: "The British Child and Adolescent Mental Health Survey — 0.7% epilepsy prevalence among 5–15-year-olds with increased emotional, behavioural and peer-relationship problems" },
      { source: "Willford J et al. and Sowell ER et al. — FASD neuroimaging: corpus callosum and midline frontal abnormalities (as cited in the source chapter)" },
      { source: "Hindocha R et al. — methadone-exposed children and parent-infant relationship vulnerability; Messer J et al. — home-environment moderation of cocaine-exposed children's outcomes" },
      { source: "Fleming P & Blair PS — the SIDS-related sleep-safety counselling lineage referenced in the source chapter's prevention counselling" },
    ],
    patientResources: [
      { source: "The school liaison letter for epilepsy — 'not possessed, not contagious, can study' — the stigma instrument this course hands to Indian families" },
      { source: "Disability certification and the RPwD Act's educational entitlements (concessions, scribes) — the access tools for TBI and neurodevelopmental disability" },
      { source: "Tele-MANAS 14416 (24×7, free) — the family distress channel for parents carrying a child's diagnosis" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the behaviour that points to the brain, the pregnancy question, the episode diary, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The five phenotypes, the inheritance mechanisms, the teratology window, the pseudoseizure list, the TBI numbers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian tier and both clinical cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything — the episode-analysis craft, the phenotype gateway, the video-EEG discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The transactional perspective, the behavioural phenotype, the five signatures, the numbers.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the five phenotype syndromes with their inheritance mechanisms cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The teratogenesis clock, the transactional spiral, the excitability chain.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why a 'funny face' can genuinely signal an abnormal brain, and why the immature brain is the excitable one." },
    { number: 3, title: "Clinical Practice", description: "The phenotype gateway, the FASD question, the epilepsy differentiation, the TBI workup.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the episode analysis and the private pregnancy history without prompting." },
    { number: 4, title: "Indian Context", description: "The stigma programme, the hypothyroidism fallback, the lead threshold, the decision tree.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the school liaison letter conversation and the TSH-now script." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield numbers.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the phenotype essay and the pseudoseizure list-question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Nyhan WL — the behavioural phenotype concept: stereotyped behaviour in sizeable numbers of affected individuals, likely reflecting structural CNS deficits (the Lesch–Nyhan self-injury observation)", sourceType: "primary", year: "1972", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Streissguth AP et al. — the prospective longitudinal cohort of prenatal alcohol exposure (500 offspring, birth to 14 years); dose-dependent effects", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Rutter M et al. — the classical studies of the psychiatric sequelae of closed head injury in children: behavioural disinhibition and new psychiatric disorder in previously well children", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Stores G et al. — frontal-lobe epilepsy's psychiatric presentations in children", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Saygi I et al. — frontal epilepsy: sexual disinhibition, aggression and disorganised behaviour", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S7", source: "The British Child and Adolescent Mental Health Survey — 0.7% epilepsy prevalence among 5–15-year-olds with increased emotional, behavioural and peer-relationship problems", sourceType: "government", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Fleming P & Blair PS — the SIDS-related sleep-safety lineage (cited in the source chapter's prevention counselling)", sourceType: "primary", year: "late 20th century onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Willford J et al. and Sowell ER et al. — FASD neuroimaging: corpus callosum and midline frontal abnormalities (as cited in the source chapter)", sourceType: "primary", year: "late 20th century onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Hindocha R et al. — methadone-exposed children and parent-infant relationship vulnerability", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Messer J et al. — cocaine-exposed children: the home environment's moderation of outcomes", sourceType: "primary", year: "late 20th century", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The transactional model: the active child shapes the responses of adults, which shape the child's brain further — the ADHD-to-conduct-disorder spiral its clinical name; the parent's response a critical treatment variable, making parent guidance treatment rather than adjunct across every domain in this course.", grade: "established", sources: ["S1"] },
    { text: "The behavioural phenotype (Nyhan, 1972): behaviour so characteristic of a neurogenetic syndrome that it suggests the diagnosis — the five classic signatures (fragile X, Williams, Lesch–Nyhan, Prader–Willi, Down) with their non-Mendelian inheritance mechanisms (triplet repeat, microdeletion, imprinting, transcriptional derepression, gene dosage) and the downstream-gene principle explaining single mutations' rich syndromes.", grade: "established", sources: ["S1", "S2"] },
    { text: "Neurobehavioural teratology: the embryogenesis vulnerability window (days 14–60) for craniofacial, neural and organ malformations; foetal-period exposure producing behavioural and cognitive effects without physical abnormality; stage-specific and dose-dependent effects; the HOX-gene/retinoid/ethanol connection through the shared alcohol dehydrogenase.", grade: "supported", sources: ["S1"] },
    { text: "FASD epidemiology and natural history: full FAS ~1.9 per 1,000 live births worldwide with FAS plus ARND ~9.1 per 1,000 in one US study (approaching 1%); under-recognition because physicians do not systematically ask; CNS effects persisting for life with ~50% functioning as intellectually disabled; non-disabled adults' structured-interview diagnoses running to alcohol/drug dependence, mood disorders and personality disorders (passive-aggressive, antisocial).", grade: "established", sources: ["S1", "S3"] },
    { text: "The FASD clinical picture: growth deficiency, microcephaly, infantile irritability, mild-to-moderate intellectual disability, characteristic facies; ~half with coordination problems, hypotonia and attention deficits; 20–50% with eye, ear and cardiac anomalies; the ARND end with maths-specific learning problems and deficits in complex attention, verbal learning and executive functioning at average IQ; the behavioural phenotype of poor abstraction, impaired judgement and impulsivity; prevention as the treatment (no agreed safe dose; binge peaks most deleterious; late-pregnancy use mainly prematurity and small-for-dates).", grade: "established", sources: ["S1", "S3"] },
    { text: "Gestational substance exposure outcomes and the postnatal environment's primacy: methadone raising vulnerability to poor parent-infant relationships (the relationship itself to be monitored); cocaine reducing gestational age, birth weight and head circumference with specific — not global IQ — cognitive impairments at 4 years that a better home environment equalled; child abuse tracking substance abuse closely.", grade: "supported", sources: ["S1", "S10", "S11"] },
    { text: "Epilepsy's numbers and psychiatric comorbidity: prevalence 0.7–1.1% with ~50% of all epilepsy beginning in childhood; ~5% of children with recurrent seizures without extracerebral cause; ~3% with febrile convulsions of whom ~98% never develop epilepsy; the British national survey finding 0.7% of 5–15-year-olds with epilepsy carrying increased emotional, behavioural and peer-relationship problems.", grade: "established", sources: ["S1", "S7"] },
    { text: "Epilepsy's psychiatric faces and the differentiation: complex partial seizures (automatisms, perceptual alterations, affect and memory changes, hallucinations); frontal-lobe epilepsy (brief unresponsiveness with clonic phenomena, laughing/crying, pedalling, sexual automatisms; sexual disinhibition, pressured tangential speech, screaming, aggression, disorganised behaviour and nightmares in children; a normal EEG does not exclude it); Lennox–Gastaut (onset 1–7 years, slow spike-wave, ~half intellectually disabled, behaviour improving with seizure control); prolonged minor status distinguished from psychiatric regression; epilepsy a clinical, not laboratory, diagnosis; frontal-versus-temporal signatures; the pseudoseizure discriminators with the coexistence rule; video-EEG (sometimes with depth electrodes) settling difficult frontal cases before psychotropic escalation.", grade: "established", sources: ["S1", "S5", "S6"] },
    { text: "Paediatric TBI: ~185 per 100,000 children (infancy to 14 years) with ~90% mild; verbal memory impairment persisting up to 10 years; behavioural disinhibition after severe closed injury and new psychiatric disorder in a majority of severe-injury children including over half without premorbid disorder; frontal injuries predicting the behavioural profile; the under-7 paradox — the developing brain is not a regenerating one.", grade: "established", sources: ["S1", "S4"] },
    { text: "The FASD neuroimaging lineage: corpus callosum and midline frontal abnormalities in the prenatal-alcohol cohorts — the structural echo of the behavioural phenotype.", grade: "supported", sources: ["S9"] },
    { text: "The Indian tier: epilepsy's double burden (school expulsion, marriage-market discrimination, faith-healing circuits) met with diagnosis confirmation, family psychoeducation, the school liaison letter and explicit comorbidity screening; the FASD blind spot in Indian antenatal booking (local traditional preparations unmentioned; the question asked privately); congenital hypothyroidism's clinical fallback features (prolonged jaundice, large fontanelle, macroglossia, umbilical hernia) triggering TSH testing with every month of delay costing IQ points and levothyroxine on every essential-medicines list; lead exposure routes (paint, batteries, contaminated water, surma) justifying a low threshold in developmental delay with anaemia and irritability; costs approx 2026 (genetics from a few thousand rupees publicly to far more privately; the scarce resources developmental paediatrics, child neuropsychology and epilepsy monitoring beds).", grade: "supported", sources: ["S1"] },
    { text: "The one management law: the parent's response, adjustment and involvement in treatment is a critical element in outcome across every domain — with the gestational-exposure tier's parallel findings (impoverished rearing disproportionately harming the methadone-exposed; the better home environment equalising cocaine-exposed children's scores) as its strongest worked example; TBI management (early rehabilitation, family education, school reintegration, decade-horizon follow-up) and the epilepsy referral network (high-resolution MRI for mesial temporal sclerosis, tuberous sclerosis, migrational disorders and small tumours; callosotomy and hemisphere procedures for catastrophic seizures) as its delivery forms.", grade: "established", sources: ["S1", "S4", "S10", "S11"] },
  ],
};
