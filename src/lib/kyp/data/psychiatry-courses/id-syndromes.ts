import type { PsychiatryCourse } from "./types";

/**
 * GENETIC SYNDROMES IN ID — canonical Psychiatry course
 * (migration batch 9, Group N — intellectual disability, part 2 of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/id-syndromes.md — untouched foundation),
 * re-researched against current guidance (the Dykens behavioural-
 * phenotype literature, the Hagerman fragile X lifetime map, the
 * Cassidy imprinting line, the Neul Rett consensus, the Mervis
 * Williams profile, the Schneider/Swillen 22q11 psychosis cohorts,
 * the international TSC surveillance consensus, the AAP-lineage
 * Down health-supervision schedules) with per-claim provenance.
 *
 * Drug routes: NONE linked. No drug treats the syndromes' ID core;
 * the rider tiers (vigabatrin for the TSC spasms window, everolimus
 * and the mTOR era, growth hormone in Prader-Willi, the melatonin
 * sleep protocols, the stimulant and SSRI riders) have no syndrome-
 * specific KYP lessons — taught in content, recorded honestly in
 * contentGaps, the route never invented.
 */
export const idSyndromesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "id-syndromes",
  title: "Genetic Syndromes in ID",
  shortName: "Genetic Syndromes in ID",
  kind: "disorder",
  category: "Intellectual Disability",
  groupLetter: "N",
  groupName: "Intellectual disability",
  learningPath: ["Psychiatry", "Intellectual Disability", "Genetic Syndromes in ID"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Each syndrome carries its own organ clock, recurrence risk and behavioural phenotype",

  summary:
    "Named genetic syndromes account for a minority of intellectual disability but most severe identified cases. Each carries its own organ surveillance schedule, behavioural phenotype and recurrence risk, so naming the syndrome directs medical care and genetic counselling.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise the major syndrome gestalts on sight — Down, fragile X, Prader-Willi, Angelman, Rett, Williams, 22q11, tuberous sclerosis — plus the shorter catalogue (cri-du-chat, Cornelia de Lange, Smith-Magenis, Lesch-Nyhan, PKU, fetal alcohol spectrum).",
    "Run each major syndrome's medical surveillance table — the dated organ checks that prevent the deaths and the declines.",
    "Apply the behavioural-phenotype frame: match the teaching style and the management architecture to each syndrome's signature instead of running one generic programme.",
    "Explain the imprinting pair — Prader-Willi and Angelman, the same 15q11–13 neighbourhood, opposite parents, opposite pictures — and why it mesmerises every exam.",
    "Deliver the recurrence numbers honestly per syndrome and route the genetic counselling, including the fragile X three-generation family story.",
    "Manage the transition dangers: Down's early Alzheimer's window, 22q11's adolescent psychosis risk, Rett's regression-after-progress trap, the TSC spasms' urgent window.",
    "Handle the Indian realities: the missing newborn-screening layer, the named-then-neglected pattern, the cost-and-access translation of surveillance, and the syndrome-specific parent organisations.",
    "Support the family's syndrome journey — from the delivery of the karyotype result to the parents' network and the WhatsApp group's honest steering.",
  ],
  quickFacts: [
    { label: "The commonest identifiable", value: "Down syndrome", detail: "Roughly 1 in 700–1,000 births, risk rising with maternal age; the AVSD–VSD cardiac tier ~40–50%; the annual TSH; the APP gene on chromosome 21 running the Alzheimer's clock into the 40s" },
    { label: "The commonest inherited", value: "Fragile X syndrome", detail: "The FMR1 CGG expansion (full mutation >200 repeats silences the gene); ~1 in 4,000–7,000 boys; social ANXIETY with social DESIRE — the autism-mimic; macro-orchidism post-puberty; the FXTAS grandfathers and the POI carrier mothers" },
    { label: "The exam's favourite mechanism", value: "The imprinting pair", detail: "The same 15q11–13 neighbourhood: the PATERNAL copy lost gives Prader-Willi (hypotonic infant → hyperphagic child); the MATERNAL copy lost gives Angelman (severe ID, seizures, no speech, laughter)" },
    { label: "The regression signature", value: "Rett syndrome", detail: "MECP2, X-linked, almost only girls; the 6–18-month regression with purposeful hand use LOST to the wringing stereotypies; the four-stage arc; many girls carry an 'autism' label first" },
    { label: "The psychiatrist's syndrome", value: "22q11.2 deletion", detail: "Cardiac, palate, immune, hypocalcaemia — PLUS the highest known single genetic risk factor for schizophrenia: roughly 25–30% develop psychosis by adulthood; the annual screen from 12 is standard of care" },
    { label: "The urgent window", value: "TSC infantile spasms", detail: "The spasms treated FAST with vigabatrin — the weeks cost developmental years; the ash-leaf spots under the Woods lamp; the renal clock every 1–2 years; the mTOR-inhibitor era" },
    { label: "The missing brake", value: "Prader-Willi hyperphagia", detail: "The hypothalamic satiety circuitry runs without brakes — the locked kitchen, the fixed menu and the structured exercise are the treatment; willpower lectures are not" },
    { label: "The half-diagnosis", value: "The named-then-neglected pattern", detail: "The recurring Indian clinical failure: the syndrome named and the surveillance never scheduled — the named diagnosis without the dated table; the one-page calendar handed at the diagnosis consult is the counter" },
  ],
  knowledgeGraph: [
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The base map: the supports framework, the severity tiers and the family architecture this course's named syndromes sit inside" },
    { label: "Dual Diagnosis in ID", type: "condition", href: "/psychiatry/id-dual-diagnosis/", note: "The psychiatric riders (anxiety, mood, psychosis) read through the ID lens — the overshadowing trap and its corrections" },
    { label: "ID Treatment & Services", type: "condition", href: "/psychiatry/id-treatment-services/", note: "Where the surveillance calendar, the school package and the transition planning actually get delivered" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The overlap and the critical distinction: fragile X's anxious-wanting against autism's indifference; the Rett mislabel window; the TSC comorbidity's strong association" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The commonest rider: full treatment legitimacy in fragile X and 22q11 — never treated as merely 'the syndrome'" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The 22q11 story's destination: the highest known single genetic risk factor and the early-psychosis pathway it justifies" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The Down adult's 40s window: the APP gene on chromosome 21 running the same pathology decades early — the decline-audit gates borrowed back" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The Lesch-Nyhan self-injury science and the ADHD rider's shared currency across the syndromes" },
    { label: "Hypothalamus", type: "brain-region", href: "#brain", note: "The satiety-and-ghrelin circuitry that runs without brakes in Prader-Willi — the missing brake behind the locked kitchen" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The social-threat detector running in inverse in Williams — the cocktail-party warmth's wiring, and the stranger-danger teaching it obliges" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Five genetic gears drive the named-syndrome tier, and each gear produces not just an IQ but an organ clock and a temperament. The DOSE gear: trisomy 21's extra chromosome loads a whole gene set — including the amyloid-precursor protein (APP) gene on chromosome 21 — and that is why the Down brain runs Alzheimer's pathology on an earlier clock, with most adults showing clinical decline by their 40s–50s. The EXPANSION gear: the FMR1 gene's CGG repeat grows across generations (the Sherman paradox); the full mutation above 200 repeats silences the gene, while the premutation carrier tier carries its own late pictures — FXTAS in the grandfathers, ovarian insufficiency in the carrier women. The IMPRINTING gear: the 15q11–13 neighbourhood carries parent-of-origin-stamped genes — lose the paternal copies and Prader-Willi's two-phase arc unfolds; lose the maternal copies and Angelman's laughter-and-seizures picture appears from the same streets. The GROWTH-PATHWAY gear: the TSC1/TSC2 genes restrain the mTOR growth pathway; their loss releases hamartomas across the organs — brain tubers, renal angiomyolipomas, cardiac rhabdomyomas — and the tubers' epileptogenicity (the infantile spasms' urgent window) drives the developmental injury. The GENE-REGULATION gear: MECP2, the X-linked expression regulator whose failure produces Rett's staged regression — the purposeful hand use lost to the wringing stereotypies, the engagement surviving underneath. Above the gears sits the phenotype logic this course exists to teach: the genes shape the TEMPERAMENT, the anxiety-pattern, the social style and the obsessional tendency, not only the intelligence — so the management architecture gets matched to the signature. The generic ID programme treats the number; the phenotype-matched programme treats the child.",
    steps: [
      "The catalogue's logic: five gears — the extra chromosome, the deleted segment, the expanded repeat, the imprinted gene, the single gene — each producing a syndrome with its own mortality machinery, its own recurrence arithmetic and its own behavioural signature.",
      "The dose story: trisomy 21 (95% free trisomy from nondisjunction, the translocation form the karyotype must exclude, the mosaic form milder) — the extra gene load including the APP gene on chromosome 21 writing the early Alzheimer's window.",
      "The expansion story: FMR1's CGG repeats — the premutation amplifying across generations, the full mutation >200 repeats silencing the gene, the carriers' own tiers (FXTAS movement-and-cognition in grandfathers, POI in carrier women) making one diagnosis a three-generation story.",
      "The imprinting story: the 15q11–13 neighbourhood's parent-of-origin stamping — the paternal copies lost (deletion or maternal uniparental disomy) giving Prader-Willi; the maternal copies lost giving Angelman; the methylation-and-UPD testing that resolves the pair.",
      "The growth-pathway story: TSC1/TSC2 restraining the mTOR pathway — the loss releasing the multi-organ hamartoma machinery, the tubers' burden-and-location predicting the developmental-and-seizure outcome, and the spasms' urgent window deciding the developmental years.",
      "The gene-regulation story: MECP2's failure producing Rett's four-stage arc — the 6–18-month regression, the purposeful hand use lost to the wringing, the alert eyes that survive it.",
      "The phenotype logic: the genes shape temperament, social style and anxiety-pattern as much as IQ — the teaching architecture and the management matched to the signature (the fragile X small-warm-groups, the Williams exploitation-proofing, the Prader-Willi locked kitchen, the Rett eye-gaze channel).",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus (the appetite's brake house)", role: "The ghrelin-and-satiety circuitry that runs without brakes in Prader-Willi — the relentless food-seeking and the obesity machinery; the reason the locked kitchen, not the lecture, is the treatment.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the stranger detector)", role: "The social-threat machinery running in inverse in Williams — the striking warmth toward strangers, the empathy and the fascination with faces — and the exploitation risk that obliges the stranger-danger curriculum.", grade: "supported" },
    { id: "frontal-networks", name: "Frontal executive networks (the conductor)", role: "The ADHD, attention and organisation riders across fragile X, 22q11 and the fetal-alcohol spectrum — the 'conductor drunk at the wiring stage' frame; the stimulant tier's legitimate address.", grade: "supported" },
    { id: "basal-ganglia", name: "Basal ganglia (the dopaminergic tier)", role: "The dopamine-pathway science behind Lesch-Nyhan's self-injury — the self-destruction as the disease, and the anxiety-reduction-first management the understanding obliges.", grade: "proposed" },
    { id: "cerebellar-motor-systems", name: "Cerebellar and motor systems", role: "The ataxic puppet-gait of Angelman and Rett's stage-four motor deterioration run through the motor systems — the physiotherapy-and-standing architecture and the orthopaedic linkage.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The Lesch-Nyhan self-injury science and the ADHD rider's shared currency — the frontostriatal tier the stimulant-and-atomoxetine treatment addresses with full legitimacy in fragile X and 22q11.", grade: "proposed", drugConnection: "The ADHD rider's stimulant and atomoxetine tier carries full treatment legitimacy in these syndromes — no KYP drug lessons exist for it; the honest position is taught here and recorded in contentGaps." },
    { name: "Serotonin", symbol: "5-HT", role: "The anxiety-and-mood riders' chemistry — the social anxiety of fragile X, the phobias of Williams, the meltdown-prone anxiety of Prader-Willi; the cautious SSRI tier's target.", grade: "supported", drugConnection: "The SSRI rider tier is used cautiously and symptom-targeted in these populations; this course teaches the caution in content and links no drug route (drugLinks empty by honest design)." },
    { name: "GABA", symbol: "GABA", role: "The inhibitory currency of the seizure disorders — Angelman's epilepsy prominence, Rett's seizure epoch, the TSC spasms whose urgent vigabatrin window works through the GABAergic machinery.", grade: "established", drugConnection: "Vigabatrin (the TSC spasms' urgent-window drug) has no KYP lesson; the window and its evidence are taught here, the route never invented." },
    { name: "Melatonin", symbol: "MLT", role: "The sleep-architecture hormone — Smith-Magenis's inverted clock (the day-night reversal from the production disturbance) and the Angelman short-sleep tier; the timing protocol's core.", grade: "supported", drugConnection: "Melatonin's sleep protocols (Smith-Magenis, Angelman) have no KYP drug lesson; the timing architecture is taught here." },
  ],
  pathways: [
    {
      id: "imprinting-pathway",
      name: "The imprinting switch (15q11–13)",
      steps: [
        { label: "The parent-of-origin stamp", detail: "The 15q11–13 neighbourhood's genes carry methylation stamps marking which parent's copy is active" },
        { label: "The paternal copy lost", detail: "Deletion of the paternal segment (or inheritance of both copies from the mother — uniparental disomy) leaves the paternal-stamped genes unexpressed" },
        { label: "The Prader-Willi arc", detail: "Neonatal hypotonia with feeding failure → the toddlerhood switch-on of hyperphagia → obesity, short stature, hypogonadism, the obsessional phenotype" },
        { label: "The maternal copy lost", detail: "The same streets, the opposite parent — Angelman: severe ID, the ataxic puppet gait, near-absent speech, prominent epilepsy, the happy laughter" },
      ],
      clinicalManifestation: "The imprinting pair — the exam's favourite mechanism: the same 15q11–13 neighbourhood, the opposite parents' copies, the opposite clinical pictures.",
      grade: "established",
    },
    {
      id: "mtor-pathway",
      name: "The growth-pathway cascade (TSC1/TSC2 → mTOR)",
      steps: [
        { label: "The brake genes", detail: "TSC1 and TSC2 restrain the mTOR growth-signalling pathway" },
        { label: "The brake released", detail: "One gene lost → hamartomas across the organs: brain tubers, renal angiomyolipomas, cardiac rhabdomyomas, retinal hamartomas, the skin's ash-leaf and angiofibroma tier" },
        { label: "The epileptogenic machinery", detail: "The tubers' burden and location driving the seizures — the infantile spasms' classic urgent presentation (the West syndrome association)" },
        { label: "The developmental injury", detail: "The untreated spasms costing developmental years; the tuber count and the early spasms linked to the strong autism comorbidity — the developmental surveillance's autism screen built in" },
      ],
      clinicalManifestation: "The TSC child: the spasming infant with the hypopigmented spots, the seizures-autism association, the renal clock every 1–2 years — and the everolimus era's one arrived syndrome-specific pharmacology.",
      grade: "established",
    },
    {
      id: "fmr1-pathway",
      name: "The silenced gene (FMR1's CGG expansion)",
      steps: [
        { label: "The repeat grows", detail: "The CGG repeat expands across generations (the Sherman paradox) — the premutation carrier mother's transmission risk above 50% for a full mutation" },
        { label: "The full mutation silences", detail: "More than 200 repeats → the gene's methylation and silencing → the protein's loss" },
        { label: "The neurodevelopmental signature", detail: "The intellectual disability with the ADHD overlap in most boys; the autism-adjacent repetitive tier — WITH the critical difference: social desire paired with social anxiety" },
        { label: "The carriers' own tiers", detail: "The premutation not silent but unstable: the grandfathers' FXTAS movement-and-cognition syndrome, the carrier women's POI — one index child mapping three generations" },
      ],
      clinicalManifestation: "The fragile X signature: the long-faced, big-eared boy who WANTS contact and fears it — the gaze aversion as look-away-to-calm, the approach-then-withdraw dance, the autism-mimic that changes the teaching plan.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "newborn-window", time: "The newborn window", title: "The organ checks that cannot wait", description: "The Down echo in every newborn (the AVSD–VSD tier, ~40–50%); the 22q11 calcium check in the nursery; the Prader-Willi hypotonic feeding-failure newborn; the TSC cardiac rhabdomyomas that usually regress; the karyotype that names the syndrome before the family leaves.", phase: "onset" },
    { id: "regression-window", time: "6–18 months", title: "The regression window", description: "Rett's stage two: the purposeful hand use lost to the wringing, the speech lost, the head growth decelerating — the window where 'just autism' is the mislabel and the MECP2 test is the correction. In parallel infancy, the TSC spasms' vigabatrin window: the weeks cost developmental years.", phase: "peak" },
    { id: "phenotype-era", time: "Toddlerhood to school age", title: "The phenotype declares", description: "The Prader-Willi hyperphagia switching on; the fragile X social anxiety meeting the classroom; the Williams cocktail-party warmth paired with the visuospatial gap; the Down social-strength profile thriving on demonstration-and-pictures teaching.", phase: "peak" },
    { id: "adolescent-window", time: "Age 12 onward", title: "The psychiatric transition windows", description: "The 22q11 thought-disorder-and-function screen institutionalised annually from 12 — the highest known single genetic psychosis risk watched with early detectors, not terror; the Prader-Willi meltdowns around transitions; the fragile X anxiety-and-mood layer; the Angelman epilepsy vigilance.", phase: "duration" },
    { id: "adult-window", time: "The 30s–40s", title: "The Down Alzheimer's window opens", description: "The baseline cognitive map set at 35–40 — the file's treasure; the decline-audit gates (thyroid, B12, hearing, mood) before any verdict; the clinical onset typically by the 40s–50s; the FXTAS tier arriving in the grandfather-generation carriers.", phase: "duration" },
    { id: "surveillance-clock", time: "Lifelong", title: "The organ clocks that never stop", description: "The annual TSH; the renal MRI every 1–2 years in TSC; the Williams aortic serial echoes; the Prader-Willi weight-and-apnoea arc — the dated table is the diagnosis's first prescription, and the birthday-anchored audit the Indian craft that keeps it running.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Down syndrome: roughly 1 in 700–1,000 births — the commonest identifiable cause of intellectual disability, the risk rising with maternal age (the free-trisomy mechanism), and the surviving adult population growing through the cardiac-surgery era. Fragile X: ~1 in 4,000–7,000 boys — the commonest inherited cause, with girls affected in roughly half and milder pictures (the X-inactivation lottery). Prader-Willi and Angelman: ~1 in 15,000–25,000 each — the imprinting pair's rarity with outsized exam value. Rett: ~1 in 10,000–15,000 girls. Williams: ~1 in 10,000. 22q11.2 deletion: ~1 in 2,000–4,000 — the commonest of the 'rare' deletions, and the psychosis risk the reason every psychiatrist knows it. Tuberous sclerosis: ~1 in 6,000–10,000. Together the named-syndrome tier covers a minority of all intellectual disability but a majority of the severe identified cases.",
    indianPrevalence: "No national registry exists; hospital-tier estimates mirror the global rates on the enormous birth base — tens of thousands of Down syndrome births yearly, with Indian Down mothers skewing younger than Western cohorts (births happen earlier; the absolute population dominates). The detection-and-screening gaps shape the map: newborn screening for congenital hypothyroidism and PKU is still not universal (a few state programmes plus the private tier — the 'the child looked normal at birth and nobody tested' pattern), and the prenatal layer (double-marker, NT scan, NIPT) runs the urban-private-full to rural-PHC-minimal gradient.",
    lifetimeRisk: "The recurrence arithmetic is the diagnosis's third output: Down's free trisomy ~1% (the translocation form's familial higher tier — the karyotype's must-know); the fragile X carrier mathematics (the premutation mother's expansion risk above 50%, the sisters' testing question); the imprinting pair's form-dependent tiers (from the deletion-form's lowness to the 25%-plus of the UBE3A-mutation and imprinting-defect forms); the metabolic one-in-four tiers of the autosomal-recessive pattern.",
    genderRatio: "Fragile X: boys predominant, girls affected in roughly half with milder and variable pictures; Rett: almost only girls (the MECP2 X-linked story); Lesch-Nyhan: the X-linked boys; Angelman, Prader-Willi, Williams, 22q11 and TSC: both sexes.",
    ageOfOnset: "The diagnoses are congenital but the pictures are staged: the Prader-Willi phase-two hyperphagia switches on from toddlerhood; the Rett regression arrives at 6–18 months; the 22q11 psychosis window opens in adolescence; the Down dementia window opens in the 40s — each syndrome carrying its own clock.",
    indianNotes: "The syndrome organisations' uneven geography: the Down parent-networks strong in the metros; the smaller syndromes' families isolated until an internet group finds them — the WhatsApp-era's national reach partly correcting the map.",
  },
  etiology: [
    { category: "genetic", factor: "The chromosome tier", details: "Trisomy 21 — 95% free trisomy from nondisjunction; the translocation form (the familial tier the karyotype must exclude for recurrence accuracy); the mosaic form (the milder pictures). The commonest identifiable cause of ID." },
    { category: "genetic", factor: "The copy-number tier", details: "The microdeletions and microduplications the chromosomal microarray serves: 22q11.2 (cardiac-palate-immune-calcium plus the psychosis risk), Williams 7q11.23 (elastin-and-neighbours), cri-du-chat 5p, Smith-Magenis 17p — the commonest of the rare." },
    { category: "genetic", factor: "The repeat-expansion tier", details: "The FMR1 CGG expansion: the full mutation >200 repeats silencing the gene (fragile X, the commonest inherited cause in boys); the premutation carriers' own tiers — FXTAS in grandfathers, POI in carrier women; the Sherman paradox's amplification across generations." },
    { category: "genetic", factor: "The imprinting tier", details: "The 15q11–13 parent-of-origin stamping: the paternal copies lost (deletion or maternal uniparental disomy) → Prader-Willi; the maternal copies lost → Angelman — resolved by the methylation-and-UPD testing." },
    { category: "genetic", factor: "The single-gene tier", details: "MECP2 (Rett's staged regression, X-linked, almost only girls); TSC1/TSC2 (the mTOR growth pathway — tuberous sclerosis); HPRT (Lesch-Nyhan, the self-injury core); the phenylalanine-metabolism block (PKU — the preventable-by-screening syndrome)." },
    { category: "environmental", factor: "The preventable tier", details: "The fetal alcohol spectrum — the under-recognised Indian layer: the smooth philtrum, the thin vermillion, the small palpebral fissures, the ADHD-plus-conduct-plus-executive signature ('the brain's conductor drunk at the wiring stage'); plus the unscreened metabolic tier (PKU, congenital hypothyroidism) that universal newborn screening would catch — every birth deserves the test." },
  ],
  symptomClusters: [
    {
      category: "1. The gestalt drills (recognise on sight)",
      symptoms: [
        "Down: the upswept palpebral fissures, epicanthic folds, the single palmar crease, the sandal gap, the hypotonic infant, the Brushfield spots",
        "Fragile X: the long face, the large ears, the macro-orchidism (post-pubertal — the examination point), the high-arched palate, the joint laxity and flat feet — the shy boy with the hand-flapping",
        "Prader-Willi: the obese short child with the almond eyes, the narrow temples, the downturned mouth — and the history that begins with the hypotonic feeding-failure newborn",
        "Angelman: the laughing, ataxic, non-speaking child with the wide mouth and protruding tongue",
        "Rett: the girl whose hands wring and whose development reversed at 6–18 months",
        "Williams: the chatty, warm child with the elfin facies who cannot copy a square",
        "22q11: the hypernasal voice with the cardiac scar (the conotruncal repair)",
        "TSC: the ash-leaf spots under the Woods lamp, the butterfly-distribution angiofibromas, the shagreen patch — with the spasms",
        "The shorter catalogue: the joined brows and small hands (Cornelia de Lange); the day-sleeping, night-raging child (Smith-Magenis); the self-biting boy (Lesch-Nyhan); the musty-smelling fair infant (the untreated PKU tier)",
      ],
    },
    {
      category: "2. The behavioural-phenotype axes",
      symptoms: [
        "The SOCIAL-STYLE axis: fragile X anxious-and-wanting; Williams warm-to-everyone; Down imitative-and-engaged; Rett alert-but-trapped; Angelman excited-and-laughing",
        "The FOOD axis: Prader-Willi relentless (the missing brake); the others ordinary",
        "The SLEEP axis: Smith-Magenis inverted (the day-night reversal); Angelman short-architecture; Rett irregular breathing (the sighs, the apnoeas, the hyperventilation); Prader-Willi apnoeic with the obesity",
        "The ANXIETY-OBSSESSION axis: Prader-Willi obsessional (the collecting, the ordering, the skin-picking); Williams phobic and hyperacusic; fragile X socially anxious; 22q11 the OCD of childhood and the psychosis risk of adulthood",
        "The SELF-INJURY axis: Lesch-Nyhan's core (the lip-and-finger biting); Cornelia de Lange's tier; the Rett hand-to-mouth form; the Smith-Magenis onychotillomania and self-hug",
        "The PSYCHOSIS-RISK axis: 22q11's quarter (the 25–30%); fragile X's lower-but-real tier",
      ],
    },
    {
      category: "3. The regression and transition emergencies",
      symptoms: [
        "The ANY-regression rule: every lost skill gets the full hunt — metabolic, genetic, epileptic — before any 'just autism' verdict (the Rett reproach)",
        "The TSC spasms window: the clusters treated as the emergency they are — the vigabatrin window in which the weeks cost developmental years",
        "The 22q11 adolescent transition: the subtle early signs — the withdrawing, the suspiciousness, the functioning's dip — that the annual screen from 12 exists to catch",
        "The Down adult's decline episode: the slower mornings, the lost bus route, the quieter dinner table — the gates (thyroid, B12, hearing, mood) audited before the Alzheimer's verdict",
        "The PWS machinery: the snoring-and-tired-days apnoea flag; the severe meltdown and self-injury tiers; the obesity's mortality arc",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The confirmation architecture",
      code: "The test menu and its triggers",
      criteria: [
        "The karyotype: the Down tier's trisomy confirmation AND the translocation form's exclusion (the recurrence accuracy depends on it).",
        "The fragile X DNA analysis: the CGG-repeat molecular testing — the modern replacement of the old chromosome-culture era.",
        "The chromosomal microarray: the copy-number workhorse — the 22q11, the Williams, the cri-du-chat, the Smith-Magenis, the smaller deletions.",
        "The methylation-and-UPD testing: the imprinting pair's resolution (Prader-Willi against Angelman, the parental origin settled).",
        "The single-gene panels: MECP2 for the regressing girl; TSC1/TSC2 with the skin-and-imaging phenotyping; the syndrome panels where the gestalt points.",
        "The metabolic screen: the plasma amino acids and the urine organic acids — the treatables tier the ANY-regression rule obliges.",
        "The trigger discipline: the dysmorphism plus the family pattern plus the regression plus the specific signs drive WHICH test — the test-menu's cost-tiering for the Indian pocket; the Woods lamp, the retinal exam, the renal ultrasound and the brain MRI as the phenotyping supports.",
      ],
      duration: "One round of correctly-routed testing usually names the syndrome; the trigger discipline is what makes the round correct — the shotgun panel the expensive exception, not the rule.",
      indianNote: "The availability map: the metro genetic labs' full tier; the government institutions' subsidised tier; the district's null tier with the sample-transport workarounds. The approx-2026 costs: karyotype ₹2,000–5,000; the fragile X DNA ₹4,000–10,000; the microarray ₹12,000–25,000; the single-gene tests ₹3,000–15,000 — and the genetic counselling centres' thin map making the clinician's own recurrence-numbers fluency the real fallback.",
    },
    {
      system: "The recognition-to-test routing",
      code: "The gestalt gates and the regression rule",
      criteria: [
        "The autistic-appearing boy with the family's 'many quiet boys': the fragile X question — the social-anxiety-versus-indifference distinction, the macro-orchidism post-puberty, the uncles' tier.",
        "The hypotonic newborn with poor feeding: the Prader-Willi phase-one question (the later hyperphagia will declare) alongside the Down tier and the paediatric neuromuscular workup.",
        "The regressing girl with the hand-wringing: the MECP2 testing — and the ANY-regression rule's metabolic-and-neurodegenerative hunt.",
        "The psychiatric adolescent with the childhood cardiac-and-palate history: the 22q11 retrofit — the earlier diagnosis found late, the psychosis monitoring institutionalised from there.",
        "The declining Down adult: the decline-audit gates first — the thyroid, the B12, the hearing, the mood — before the Alzheimer's verdict on the earlier clock.",
      ],
      duration: "The recognition-to-test interval is where the outcomes are made: the Rett mislabel window and the TSC spasms window both close on weeks-to-months timescales.",
      indianNote: "The 'the doctor said just autism' era costs months in the Indian district tier — the ANY-lost-skill hunt belongs in every Indian paediatric and psychiatric pair of hands' muscle memory.",
    },
  ],
  severityScales: [
    {
      name: "The Rett four-stage map",
      fullName: "Rett syndrome staging arc",
      measures: "Where the girl stands on the staged course — the regression caught, the plateau worked, the late decline planned for.",
      ranges: [
        { min: 1, max: 1, severity: "Stage 1 — the early months", action: "Normal-or-near-normal development with the subtle slowing tier — the stage easiest to miss and the one where the watchful family's account matters most" },
        { min: 2, max: 2, severity: "Stage 2 — the regression (6–18 months)", action: "The purposeful hand use lost to the wringing-and-washing stereotypies, the speech lost, the head growth decelerating — the MECP2 confirmation and the mislabel window ('autism' first in many)" },
        { min: 3, max: 3, severity: "Stage 3 — the plateau-and-stabilisation", action: "The seizure epoch's onset, the breathing irregularities (sighs, apnoeas, hyperventilation), the scoliosis surveillance, the nutrition-and-GERD management — and the engagement's PARTIAL RETURN: the eye-gaze channel built on the alert eyes" },
        { min: 4, max: 4, severity: "Stage 4 — the late motor decline", action: "The wheelchair-tier progression: the physiotherapy-and-standing architecture, the orthopaedic linkage, the AAC-and-eye-gaze communication held throughout" },
      ],
      indianNote: "The four-stage map is the exam's structure and the family's map — the 'trapped-in-communication' picture (the alert eyes, the non-speaking hands) teaching that the mind stays more present than the hands suggest.",
    },
    {
      name: "The half-diagnosis ladder",
      fullName: "From the named syndrome to the treated child",
      measures: "What the diagnosis has actually delivered — the Indian recurring failure scored honestly.",
      ranges: [
        { min: 0, max: 0, severity: "Named only", action: "The half-diagnosis: the karyotype did its work, the family exited with nothing dated — the Down child without the annual TSH, the 22q11 adolescent without the psychiatric protocol, the TSC child without the renal clock" },
        { min: 1, max: 1, severity: "The dated surveillance calendar", action: "The one-page organ-check table handed AT the diagnosis consult, anchored to the birthday ('come at the birthday for the annual audit') — the counter-instrument to the named-then-neglected pattern" },
        { min: 2, max: 2, severity: "The phenotype-matched programme", action: "The teaching style and the management architecture matched to the behavioural signature, the recurrence counselling delivered, the parent organisation's number in the file — the full diagnosis" },
      ],
      indianNote: "The named-diagnosis-without-the-dated-table is the half-diagnosis — the recurring Indian clinical failure this ladder exists to catch in the clinician's own practice.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The autistic-appearing boy with 'many quiet boys' in the family", distinguishingFeatures: "Fragile X until proven otherwise: the social desire with the social anxiety (the gaze aversion as look-away-to-calm), the post-pubertal macro-orchidism, the sensory over-responsiveness, the family's quiet uncles.", keyDifferentiator: "The FMR1 DNA testing — and the teaching architecture's difference: the small-warm-groups classroom the anxious-wanting boy needs." },
    { condition: "The hypotonic newborn with poor feeding", distinguishingFeatures: "The Prader-Willi phase one (the weak cry, the failure-to-thrive paradox, the undescended testes) against the Down tier and the paediatric neuromuscular workup (the SMA-and-congenital-myopathy differential).", keyDifferentiator: "The two-phase history-taking: the hypotonic newborn who becomes the hyperphagic toddler is the Prader-Willi arc declaring itself; the methylation-and-UPD testing resolves." },
    { condition: "The regressing girl with the hand-wringing", distinguishingFeatures: "Rett's stage two (the 6–18-month regression, the purposeful hand use lost, the acquired microcephaly) against the autism regression's differential and the metabolic-and-neurodegenerative hunt.", keyDifferentiator: "The MECP2 testing — the ANY-regression rule; many Rett girls carry an 'autism' label first, and the test is the correction." },
    { condition: "The warm, chatty child who cannot copy a square", distinguishingFeatures: "Williams syndrome: the cocktail-party sociability with the fluent verbal chatter paired with the visuospatial blindness (the block-design and navigation weakness, the 'can talk about but cannot draw the bicycle' dissociation) and the hyperacusis.", keyDifferentiator: "The 7q11.23 deletion's confirmation; the social competence with the visuospatial gap as the signature — and the stranger-danger teaching it obliges." },
    { condition: "The psychiatric adolescent with a childhood cardiac-and-palate history", distinguishingFeatures: "The 22q11 retrofit: the conotruncal repair, the hypernasal speech, the childhood calcium-and-immune episodes — now presenting with the withdrawing or the odd thinking of the adolescent window.", keyDifferentiator: "The microarray or the earlier records; the annual thought-disorder-and-function screen from 12 institutionalised from the moment the question is asked." },
    { condition: "The spasming infant with hypopigmented spots", distinguishingFeatures: "Tuberous sclerosis: the clusters or the head-turning spasms with the ash-leaf maculae under the Woods lamp.", keyDifferentiator: "The urgency itself: the vigabatrin window in which the spasms' weeks cost developmental years — no wait-and-see in this presentation." },
    { condition: "The obese, short, food-obsessed child", distinguishingFeatures: "Prader-Willi phase two: the relentless food-seeking, the night raids, the temper meltdowns around food and transitions, the skin-picking.", keyDifferentiator: "The locked-kitchen architecture waiting for nothing — the environment's re-engineering is the diagnosis's management, not a stage after it." },
    { condition: "The declining Down adult", distinguishingFeatures: "The 40s window's decline episode against the treatable mimics: the silently failing thyroid, the dropping B12, the muffled hearing, the depressive withdrawal from a life event.", keyDifferentiator: "The decline-audit gates audited EVERY time before the Alzheimer's verdict — the treatables' yield in Down adults is large, and the earlier clock makes the discipline constant." },
  ],
  management: [
    {
      category: "lifestyle",
      name: "The medical surveillance spines (the dated calendar)",
      description: "Down: the newborn echo (the AVSD–VSD tier, ~40–50%) with the cardiology follow-through; the TSH at birth and annually (the silent Hashimoto's); the hearing-and-vision audits; the atlanto-axial radiograph before Special-Olympics-and-trampoline-style activities; the coeliac-and-anaemia screens; the leukaemia risk's treatable-tier awareness; the adult obesity-and-apnoea layer; the 35–40 baseline cognitive map with the decline protocol. Fragile X: the epilepsy vigilance; the mitral valve prolapse audit; the carriers' FXTAS-and-POI counselling layers. Prader-Willi: the GH assessment; the weight-and-BMI every visit; the sleep study and the adenoid tier; the scoliosis, diabetes and cholesterol screens; the endocrinology route. Angelman: the seizure architecture; the sleep's structured management; the scoliosis surveillance. Rett: the seizures' vigilant control; the scoliosis-orthopaedics linkage; the nutrition-and-GERD constant; the breathing-and-cardiac-conduction audits (the prolonged QT's report layer). Williams: the aortic-and-cardiac serial echoes; the calcium-and-renal audits; the blood pressure's attention. 22q11: the calcium-immune-cardiac-palate paediatric package PLUS the adolescent psychiatry protocol — the annual thought-disorder-and-function screen from 12, the early-psychosis pathway pre-built, the family counselled honestly without the terrorising. TSC: the brain-MRI-and-EEG seizure architecture; the renal ultrasound/MRI every 1–2 years; the eye, skin, cardiac and pulmonary dated tables; the everolimus option routed through the specialist.",
      whenToUse: "From the diagnosis day — the calendar is the diagnosis's first prescription, before any behavioural work begins.",
      indianContext: "The cost translation (approx 2026): the TSH ₹100–200; the echo through the government hospital's subsidised tier; the renal ultrasound ₹800–1,500 — the surveillance programme is nearly free where the system reaches it; the recurring failure is the scheduling, never the price.",
    },
    {
      category: "psychotherapy",
      name: "The behavioural-phenotype-matched programme",
      description: "Fragile X: the small-stable classroom; the warmed-up transitions; the sensory diet; the social anxiety's graded exposure (the child who WANTS contact helped to hold it); the ADHD's full treatment legitimacy. Prader-Willi: the food environment's engineering — the locked kitchen, the fixed-menu routine, the no-food-as-reward rule, the calories budgeted and the exercise built in; the transition warnings; the obsessional style harnessed (the list-loving child given jobs and checklists); the skin-picking's dermatology-and-behavioural tier. Williams: the STRANGER-DANGER curriculum (the explicit rules, the 'check-first-with-a-named-adult' discipline — the warm approach makes the exploitation-risk education mandatory); the verbal-first teaching for the visuospatial blindness; the anxiety-and-hyperacusis handling; the music's deliberate employment. Rett: the AAC-and-eye-gaze technology's building (the alert eyes' channel); the hands' occupied alternatives; the standing-and-mobility physiotherapy. Angelman: the AAC-and-gesture communication; the happy demeanour's dignity framing; the sleep's structure with the melatonin tiers. Smith-Magenis: the inverted clock's melatonin-and-sleep-timing protocol; the meltdowns' antecedent mapping; the self-hug-and-onychotillomania replacement programmes. Lesch-Nyhan: the dental protection and the mouthguards; the anxiety-reduction first principle (the self-injury spikes with distress); the restraint ethics and the arms' protection's compassionate architecture. Down: the visual-demonstration teaching; the early total communication with signing; the routine-loving transitions warned lightly; the social competence's employment route (the hospitality and structured social roles).",
      whenToUse: "From the first educational planning conversation — the phenotype-matched programme treats the child; the generic programme treats the number.",
      indianContext: "The school's tiffin architecture is treatment infrastructure; the joint-family assembly (the grandmother's love re-channelled from food to crafts and walks) is the Indian-specific layer; the family's default 'naughtiness' theories get the phenotype reframe — the genes shape the temperament, the parenting is not on trial.",
    },
    {
      category: "psychotherapy",
      name: "The family-and-genetics architecture",
      description: "The diagnosis-delivery craft: the day the family remembers — the naming with the honest map (the medical table, the phenotype, the recurrence numbers) in one consultation, the hope and the surveillance carried in both hands. The recurrence counselling per syndrome: Down's free-trisomy ~1% against the translocation tier (the karyotype must know); the fragile X carrier mathematics (the sisters' testing, the maternal uncle's diagnosis at 40, the FXTAS-and-POI three-generation ripple); the imprinting pair's form-dependent tiers; the prenatal-and-pre-implantation options' mapping. The family-wide testing's logic (the fragile X sisters and uncles; the 22q11 and TSC parents' mosaic tiers). The parent-organisation routing and the sibling-and-long-term layers.",
      whenToUse: "At the diagnosis and at every transition — the counselling is the diagnosis's third output, and the family's question ('will the next child have it?') deserves numbers, not guesses.",
      indianContext: "The marriage-and-disclosure architecture: the fragile X family's sisters'-carrier-testing and the privacy question — the partner's right to know against the family's concealment pressure, the clinic holding the honest side with the practical negotiation.",
    },
    {
      category: "pharmacotherapy",
      name: "The honest pharmacological position: the medicines serve the riders",
      description: "No drug treats the syndromes' ID core — the honest sentence every prescriber in this field carries. The riders the medicines DO serve: the seizures (the vigabatrin for the TSC spasms — the urgent window; the valproate-and-standard architecture for the rest); the ADHD layer (the stimulant-and-atomoxetine tier's full legitimacy in fragile X and 22q11); the anxiety-and-mood riders (the cautious SSRI tiers); the Prader-Willi severe-meltdown-and-self-injury tiers (cautious, monitored). The experimental tier's honest framing: the fragile X targeted trials not yet clinical; the mTOR inhibitors' TSC-specific legitimacy standing as the one syndrome-specific pharmacology that has arrived — the everolimus era for the tumours, routed through the specialist.",
      whenToUse: "Symptom-targeted, rider-by-rider, never as a syndrome treatment — and never as a substitute for the architecture.",
      indianContext: "The vigabatrin-and-everolimus tier's availability-and-price mapping; the GH treatment's cost reality (the PWS tier at ₹50,000–2,00,000/year — the few's access, the endocrinology-and-scheme routes the honest map).",
    },
    {
      category: "lifestyle",
      name: "The newborn-screening and prevention advocacy",
      description: "The PKU-and-hypothyroid tier: the preventable causes caught at birth — every birth deserves the test. The diet-as-treatment model (the phe-restricted diet's life architecture; the screened-and-dieted picture's normal-or-near-normal development); the MATERNAL-PKU danger (the treated woman's high-phenylalanine pregnancy damaging the baby — the pre-conception diet counselling); the FASD tier's honest maternal-alcohol interview with the shame layer navigated.",
      whenToUse: "As advocacy at every birth contact and as pre-conception counselling in every affected family — the prevention layer is this field's quiet victory.",
      indianContext: "The few state programmes and the private tier's availability mapped honestly; the clinical campaign's voice carried in every paediatric and psychiatry consultation that meets an unscreened child.",
    },
  ],
  safety: {
    redFlags: [
      "The spasming infant (or the infant with the head-dropping clusters): TSC until excluded — treat URGENTLY, the vigabatrin window in which the spasms' weeks cost developmental years",
      "ANY lost skill in ANY child — the regression rule: the metabolic-genetic-epileptic hunt before the 'just autism' verdict; the Rett mislabel window closing while the label settles",
      "The 22q11 adolescent unwatched: the 25–30% adult psychosis risk population without the annual screen from 12 — the highest-risk population unwatched is the system's failure, not the family's",
      "The Down adult's decline episode: the gates audited every time — the thyroid, the B12, the hearing, the mood — before the Alzheimer's verdict on the earlier clock",
      "The Prader-Willi machinery: the snoring-and-tired-days apnoea flag, the obesity's mortality arc, the severe meltdown-and-self-injury tiers",
      "The 22q11 newborn's calcium: the seizure-and-tetany episode — the nursery calcium check before the discharge, not after",
    ],
    urgentGuidance:
      "The order of operations: (1) the spasms window first — vigabatrin urgently in the TSC presentation, the developmental years priced in weeks; (2) every regression gets the hunt — the MECP2 and the metabolic-and-epileptic tiers together, never the dismissive label alone; (3) the Down adult's every decline episode audited gate-by-gate (thyroid, B12, hearing, mood, sleep) — the treatables' yield is large and the verdict can wait for the audit's answer; (4) the 22q11 adolescent's monitoring institutionalised, not improvised — the annual screen from 12 and the pre-built early-psychosis pathway; (5) the hypocalcaemia and the sleep-apnoea layers treated as their own emergencies; (6) the surveillance calendar handed at the diagnosis consult — the dated table that prevents the quiet deaths and declines the behavioural work would otherwise run alongside.",
  },
  drugLinks: [],
  contentGaps: [
    "Vigabatrin — the TSC infantile-spasms urgent-window drug — has no KYP drug lesson; the window and its evidence are taught here, the route never invented.",
    "Everolimus and the mTOR-inhibitor tier (the one syndrome-specific pharmacology that has arrived, for TSC's tumours) has no KYP lesson; taught here with the specialist route recorded.",
    "Growth hormone — the Prader-Willi modern standard — and the melatonin sleep protocols (the Smith-Magenis inverted clock, the Angelman short-sleep tier) have no KYP lessons; the timing architectures are taught in content.",
    "The ADHD-rider tier (stimulants and atomoxetine, full treatment legitimacy in fragile X and 22q11) has no KYP drug lessons; the legitimacy and the monitoring discipline are taught here.",
    "The cautious SSRI rider tier for the anxiety-and-mood layers is taught in content without drugLinks: this course's pharmacology is the surveillance-and-architecture programme, and no syndrome-specific drug route is implied or invented.",
  ],
  patientGuide: {
    whatIsIt:
      "A named genetic syndrome means a specific, identifiable difference in the genetic material — an extra chromosome (Down syndrome), a missing piece (22q11, Williams), a repeated stretch that switches a gene off (fragile X), a gene stamped by the parent it came from (Prader-Willi, Angelman), or a single changed gene (Rett, tuberous sclerosis). The name changes three things. It changes the MEDICAL calendar: a named syndrome carries its own organ checks (the heart, the thyroid, the kidneys, the spine) which we now schedule — untreated, some of these quietly cause damage. It changes the TEACHING STYLE: each syndrome shapes a recognisable personality-and-learning profile, and matching our methods to it works better than any one-size programme. And it changes the NEXT-PREGNANCY numbers: the name answers 'will it repeat' with real figures instead of guesses. The name is not a bigger label; it is a better map.",
    whatCausesIt:
      "The genetic difference was present from conception; nothing the parents did caused it and nothing they did could have prevented it. The genes shape more than learning — they shape the temperament too: the fragile X child's social anxiety, the Williams child's warmth, the Prader-Willi child's food focus are all part of the syndrome's signature, not naughtiness and not the parenting. That is the modern science (the behavioural phenotype): the same genes that set the body's pattern set the personality's pattern — which is why understanding the syndrome tells us how to teach the child.",
    symptoms:
      "Each syndrome has its own picture. Down: the warm, socially engaged learner who does best with demonstration and pictures, with a body needing heart, thyroid, hearing and neck checks through life. Fragile X: the boy who wants contact and finds it frightening — he looks away to calm himself, not because he is indifferent — often with big-picture attention difficulties. Prader-Willi: the floppy newborn who later never feels full; the food-seeking, the routines, the skin-picking. Angelman: the laughing, excitable child with little speech and seizures. Rett: the girl who developed, then lost the hand use and the words to the constant hand-wringing — while the eyes stay alert and engaged. Williams: the chatty, warm child who fears loud sounds and cannot judge shapes and spaces. 22q11: the heart-and-palate history with a teenage watchfulness we build in. TSC: the pale skin patches and the seizure risk. Warnings needing prompt care: any lost skill at any age, any blank spells or clusters of jerks, a slowing in an adult with Down, the snoring-and-tired-days pattern, or in Williams any worry about a stranger's attention.",
    treatment:
      "There is no tablet that treats the syndromes' learning core — the honest sentence. Today's treatment is a package: the surveillance table (the dated organ checks that keep the body safe), the phenotype-matched teaching (the capacities built on the strengths the syndrome leaves), and the architecture (the environment designed around the profile — the locked kitchen in Prader-Willi, the check-first rule in Williams, the eye-gaze communication in Rett). The medicines we do use serve the specific problems: seizures (including the urgent spasms medicine in TSC), attention difficulties, anxiety, sleep. Three genuine syndrome-specific treatments exist and we use them: the diet in PKU, the growth hormone in Prader-Willi, and the mTOR medicines in tuberous sclerosis's tumours. The research machinery is genuinely moving; today's cure-equivalents are the calendar, the teaching and the architecture.",
    selfHelp: [
      "The calendar on the wall: the dated organ-check table from the diagnosis consultation — and the birthday-anchored annual audit that fits the family's memory.",
      "The syndrome-specific parent organisation: the Down federation and the syndrome networks — the practical knowledge (the surveillance tiers, the therapists, the schemes) that genuinely outstrips the local clinic sometimes.",
      "The internet-group rule: the WhatsApp and Facebook groups are your best practical allies AND their miracle posts are the tax — run every protocol through the treating team before the money and the hope.",
      "The house's design is the willpower (in Prader-Willi): the locked kitchen, the fixed menu, the posted schedule — the architecture does what the body's missing brake cannot.",
      "The check-first script (in Williams): the explicit stranger rules — 'check first with a named adult' — taught early and kindly, because the warmth itself is the risk.",
      "The transition warnings: the routine-loving profiles (Down, Prader-Willi, fragile X) run on knowing what comes next — the visual timetable is treatment infrastructure, not decoration.",
      "The sibling's seat at the table: the brothers and sisters get the honest map too — and the family-wide testing conversation where the syndrome calls for it.",
    ],
    whenToSeekHelp: [
      "Any lost skill at any age — words, hand use, walking, continence: the same-week review, not the wait-and-see",
      "Blank spells, head-dropping clusters or jerks in an infant — the urgent window is measured in weeks",
      "A slowing in an adult with Down syndrome — the thyroid, the vitamins, the hearing and the mood get audited before any bigger verdict",
      "The snoring, tired-days, morning-headache pattern — the sleep-apnoea audit in Prader-Willi (and Down)",
      "In Williams syndrome, any worry about a stranger's attention or an inappropriate trust — the exploitation-proofing reviewed before it is needed",
      "In a 22q11 teenager: the withdrawing, the suspiciousness, the odd thinking, the functioning's dip — the pre-built pathway is exactly for this moment",
    ],
    indianResources: [
      "The Down-syndrome parent federation and the syndrome-specific networks — the metro hubs with the WhatsApp-era national reach",
      "The government genetic institutions' subsidised testing tier and the metro labs' full menu — the sample-transport workarounds for the district tier",
      "Tele-MANAS 14416 (24×7, free) — for the family's distress and the caregiver's own exhaustion",
      "The newborn-screening ask: every birth deserves the test — the question worth asking at every delivery in the family's circle",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific syndrome-pathway document exists; practice follows the international consensus lineages (the AAP-style Down health-supervision schedules, the international TSC surveillance consensus, the 22q11 psychiatric-monitoring consensus) delivered through the government paediatric-and-psychiatric tiers and ICD-11's syndromic coding, with the newborn-screening programmes still partial (a few states plus the private tier).",
    systemContext: "The Indian trajectory too often runs named-then-neglected: the karyotype does its work at a metro lab or a government institution, and the family exits with nothing dated — the Down child without the annual TSH, the 22q11 adolescent without the psychiatric protocol, the TSC child without the renal clock. The counter-instrument is the one-page surveillance calendar handed AT the diagnosis consultation, anchored to the birthday ('come at the birthday for the annual audit') — the architecture that fits the family's memory instead of fighting it.",
    programmeContext: "The newborn-screening layer (congenital hypothyroidism, PKU) still not universal — the few state programmes and the private tier's availability, and the clinical campaign's voice every clinician carries. The prenatal layer's access gradient: the double-marker-and-NT-and-NIPT full in urban-private practice, minimal at the rural PHC. The parent-networks' geography: the Down federation strong in the metros, the smaller syndromes' families isolated until the WhatsApp-and-Facebook groups find them — largely supportive, occasionally quack-adjacent, and genuinely better-informed on practical tiers than the local clinic sometimes.",
    costConsiderations: "The approx-2026 map: the karyotype ₹2,000–5,000; the fragile X DNA ₹4,000–10,000; the microarray ₹12,000–25,000; the single-gene tests ₹3,000–15,000 — the metro availability full, the government tier subsidised, the district tier null with the sample-transport workarounds. The surveillance itself is nearly free where the system reaches (the TSH ₹100–200; the echo through the government hospital's subsidised tier; the renal ultrasound ₹800–1,500). The expensive items: the GH treatment in Prader-Willi (₹50,000–2,00,000/year — the few's access, the endocrinology-and-scheme routes the honest map) and the everolimus tier's price. The scarcest resource is never the pharmacy; it is the scheduling discipline and the genetic counselling centres' thin map — the clinician's own recurrence-numbers fluency the real fallback.",
    culturalConsiderations: "The Indian family's default reading of the behavioural symptoms is the naughtiness-and-spoiling tier — the Prader-Willi stealing read as brought-up-wrong, the fragile X shyness read as the mother's over-protection, the Williams warmth read as indiscipline. The consultation's reframe craft: the phenotype as the diagnosis's voice (the genes shape the temperament, the behaviour is the syndrome's signature, the management architecture matches it — the parenting is not on trial). The joint family's open kitchen and the food-as-love culture are the Prader-Willi-specific layers (the grandmother's love re-channelled, never removed). The marriage-and-disclosure architecture in the fragile X families: the sisters' carrier testing, the marriage market's privacy pressure, the partner's right to know — the clinic on the honest side with the practical negotiation. The grandfather's tremor: the FXTAS tier's three-generation story, the one genetic diagnosis splashing the whole family wide.",
    patientCounselling: [
      "The calendar script: 'The name comes with a dated table — heart, thyroid, hearing, kidneys, spine — and we hand it to you today, on the same page as the diagnosis. Come at every birthday for the annual audit.'",
      "The missing-brake script (Prader-Willi): 'The appetite's brake never formed — the stealing is the missing brake's behaviour, not her morals and not your parenting. The house's design is the willpower now: the lock, the menu, the schedule.'",
      "The internet-group script: 'The groups know things we should hear — bring us what they say. The real ones (the diet in PKU, the growth hormone, the mTOR medicines, the spasms medicine) we will confirm; the miracle posts are commerce.'",
      "The regression script: 'A lost skill is never just autism until the hunt has run — the tests, the genetics, the EEG. That is why we are moving today.'",
      "The decline script (Down adults): 'The internet's clock is real but early-decline episodes are often the treatables — the thyroid, the vitamins, the hearing, the mood. We audit those gates every time before any verdict.'",
      "The three-generation script (fragile X): 'This one diagnosis maps the whole family — the carrier testing question for the sisters, the uncles' quiet history, the grandfather's tremor. We hold the conversation wide, with everyone's consent honoured.'",
    ],
  },
  decisionPath: {
    title: "The syndrome question at the bedside",
    nodes: [
      {
        id: "start",
        question: "The recognition moment: which door did the family come through?",
        branches: [
          { label: "A recognisable gestalt, a dysmorphic infant", next: "gestalt-gate" },
          { label: "A lost skill (regression)", next: "regression-gate" },
          { label: "A behavioural storm (food, sleep, self-injury, social)", next: "behaviour-gate" },
          { label: "A slowing adult with Down syndrome", next: "decline-gate" },
        ],
      },
      {
        id: "gestalt-gate",
        question: "The physical catalogue is the fastest route to the test.",
        recommendation: "The test menu routed by the gestalt: the karyotype for Down (and the translocation form's exclusion); the microarray for the 22q11-Williams-cri-du-chat tier; the FMR1 DNA for the long-faced shy boy; the methylation-and-UPD testing for the imprinting pair; the single-gene panels where the specific signs point. The surveillance calendar built the same day — the named-then-neglected pattern prevented at the source.",
      },
      {
        id: "regression-gate",
        question: "What regressed, and when?",
        branches: [
          { label: "Hand use and speech, at 6–18 months, in a girl", next: "rett-path" },
          { label: "Clusters or spasms in an infant", next: "spasms-path" },
          { label: "Thinking and functioning, in an adolescent", next: "psychosis-path" },
        ],
      },
      {
        id: "rett-path",
        question: "The regressing girl with the wringing hands.",
        recommendation: "The MECP2 testing (the 'autism' label first in many — the test the correction); the ANY-regression rule's metabolic-and-epileptic hunt alongside; the four-stage map explained to the family with the engagement's survival underneath — the eye-gaze channel, the seizures' control, the scoliosis-orthopaedics linkage, the nutrition-and-GERD constant, the prolonged-QT audit.",
      },
      {
        id: "spasms-path",
        question: "The spasming infant — the window priced in weeks.",
        recommendation: "The TSC hunt (the Woods lamp, the brain MRI) run WITH the treatment, not before it: the vigabatrin urgently — the spasms' weeks cost developmental years; then the full architecture (the renal clock every 1–2 years, the autism screen built in, the everolimus era's specialist route).",
      },
      {
        id: "psychosis-path",
        question: "The adolescent's thinking change — the highest-risk population unwatched?",
        recommendation: "The 22q11 retrofit question (the cardiac-and-palate history sought); the annual thought-disorder-and-function screen institutionalised from 12; the early-psychosis pathway pre-built and the family counselled honestly without the terrorising — the 25–30% risk managed with early detectors, not dread.",
      },
      {
        id: "behaviour-gate",
        question: "Which behavioural storm is running the house?",
        branches: [
          { label: "The relentless food-seeking, the stealing, the rages", next: "pws-path" },
          { label: "The shy, flapping boy with quiet uncles", next: "fragilex-path" },
          { label: "The day-night reversal, the night rages", next: "smith-magenis-path" },
        ],
      },
      {
        id: "pws-path",
        question: "The missing brake meets the unengineered environment.",
        recommendation: "The two-phase history confirmed (the hypotonic newborn behind the hyperphagic child); the environment's full re-engineering — the locked kitchen, the posted menu, the calories budgeted, the exercise built in, the joint-family assembly, the school's tiffin package; the medical tiers (the sleep study, the GH assessment completed, the scoliosis-and-thyroid screens); the reframe without the shame and still the boundary.",
      },
      {
        id: "fragilex-path",
        question: "The anxious-wanting boy — the autism-mimic.",
        recommendation: "The FMR1 DNA (not the old culture); the teaching architecture built on the signature (the small-stable classroom, the warmed-up transitions, the sensory diet, the graded exposure); the ADHD's full treatment legitimacy; the family-wide counselling (the sisters' carrier testing, the uncles, the FXTAS-and-POI three-generation map).",
      },
      {
        id: "smith-magenis-path",
        question: "The inverted clock — the child who sleeps by day and rages by night.",
        recommendation: "The 17p deletion's confirmation; the melatonin-and-sleep-timing protocol as the core (the day-night realignment); the meltdowns' antecedent mapping and the structure's maximalism; the self-hug-and-onychotillomania replacement programmes.",
      },
      {
        id: "decline-gate",
        question: "The Down adult who slowed down — the audit before the verdict.",
        recommendation: "The gates audited every time and in order: the TSH (the silent Hashimoto's), the B12, the hearing, the mood-and-sleep picture (the psychosocial layer sought — the workplace, the change, the shouting manager) — against the baseline cognitive map (the 35–40 testing the file's treasure); the treatables treated; the re-test at months; the Alzheimer's question held honestly for the audit's answer, the family's internet education delivered without the terror.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "The fragile X boy labelled 'just autism' — the family's quiet uncles never tested",
      why: "The autism label fits the surface (the flapping, the social difficulty) and stops the questioning; the uncles' learning difficulties and the grandfather's tremor stay hidden because nobody asked the three-generation question.",
      correction: "The family pattern triggers the FMR1 DNA: the 'many quiet boys' history, the shy-bright-anxious sisters, the maternal uncle diagnosed at 40 — and the teaching plan changes on the answer (the social anxiety treated as anxiety, the small-warm-groups classroom).",
    },
    {
      mistake: "The Prader-Willi child's stealing treated as spoiling",
      why: "The behavioural storm reads as a moral defect — the grandmother's indulgence, the school's 'character' frame — and the treatment becomes discipline, exactly what the missing brake cannot answer.",
      correction: "The reframe without the shame and still the boundary: the behaviour understood (the appetite's brake is missing) AND the rules taught — with the locked kitchen, the posted menu and the school's tiffin architecture doing the work willpower cannot.",
    },
    {
      mistake: "The Down adult's decline verdicted without the audit",
      why: "The internet's Alzheimer's story is half-known and the verdict arrives first — the silently failing thyroid, the B12, the muffled hearing and the depressive withdrawal left untreated under the label.",
      correction: "The gates every time: the TSH, the B12, the hearing, the mood — against the baseline map; the treatables' yield in Down adults is large, and the verdict waits for the audit's answer.",
    },
    {
      mistake: "The Rett regression dismissed as 'just autism' — the MECP2 never sent",
      why: "The regression window closes while the label settles; the treatable-and-explanatory tiers (the genetic confirmation, the seizure architecture) start months late.",
      correction: "The ANY-regression rule: every lost skill gets the metabolic-genetic-epileptic hunt — in the girl with the wringing hands the MECP2 is the test, and the eye-gaze channel starts from the diagnosis.",
    },
    {
      mistake: "The 22q11 adolescent without the psychiatric protocol",
      why: "The childhood cardiac-and-palate file closes when the surgery succeeds; the 25–30% adult psychosis risk — the highest known single genetic risk factor — arrives unmonitored.",
      correction: "The adolescent protocol institutionalised at the retrofit moment: the annual thought-disorder-and-function screen from 12, the early-psychosis pathway pre-built, the family's counselling honest and calm — surveillance, not a sentence.",
    },
    {
      mistake: "The surveillance never scheduled after the naming — the half-diagnosis",
      why: "The Indian recurring failure: the karyotype's answer treated as the endpoint; the family exits with nothing dated and the organ clocks run unwatched for years.",
      correction: "The one-page surveillance calendar handed AT the diagnosis consultation, anchored to the birthday; the named diagnosis without the dated table is the half-diagnosis — and the clinic's template file makes the full one a habit.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The major gestalts with their genetic gears in one breath each: Down (trisomy 21), fragile X (FMR1's CGG), Prader-Willi and Angelman (the 15q11–13 imprinting pair), Rett (MECP2), Williams (7q11.23), 22q11.2, tuberous sclerosis (TSC1/TSC2).",
        "The imprinting pair — the mechanism and the two pictures in four lines: the same neighbourhood, the paternal copy's loss giving the Prader-Willi two-phase arc, the maternal copy's loss giving Angelman's severe ID, seizures, absent speech and laughter.",
        "The behavioural phenotype: the concept with one example per syndrome — and the management consequence each example carries.",
        "The Down surveillance spine: the newborn echo (AVSD–VSD ~40–50%), the annual TSH, the atlanto-axial radiograph before Special-Olympics-style activities, the 35–40 baseline — and the Alzheimer's window's honest clock.",
        "The regression rule: any lost skill gets the hunt — the Rett arc (6–18 months, the hand-wringing) as the worked example.",
      ],
      practical: [
        "Demonstrate the dysmorphic examination: describe, measure and name — the four syndromes' gestalts identified from the bedside signs, the Woods lamp included.",
        "Take the three-generation family history that triggers the fragile X question: the quiet uncles, the shy sisters, the grandfather's tremor — the pedigree drawn and read aloud.",
      ],
      longAnswer: [
        "A 6-month-old hypotonic infant with poor feeding: differential diagnosis and approach (the Prader-Willi phase one, the Down tier, the paediatric workup — the evergreen opening).",
        "The behavioural phenotype: concept, examples, and the consequences for management.",
        "Preventable causes of intellectual disability: the newborn-screening tier (PKU, congenital hypothyroidism) and the fetal-alcohol spectrum layer.",
      ],
    },
    neetPg: {
      highYield: [
        "DOWN = the commonest IDENTIFIABLE cause: 1 in 700–1,000; the APP gene on chromosome 21 → the Alzheimer's window in the 40s; the AVSD–VSD tier ~40–50%; the annual TSH; the C1–C2 radiograph before Special Olympics.",
        "FRAGILE X = the commonest INHERITED cause (boys): the CGG full mutation >200 silencing; the post-pubertal macro-orchidism; the social ANXIETY with social DESIRE (the autism-mimic); the FXTAS grandfathers and the POI carrier mothers.",
        "THE IMPRINTING PAIR: the same 15q11–13 — the paternal loss → Prader-Willi's two-phase arc (hypotonic infant → hyperphagic child); the maternal loss → Angelman (severe ID, seizures, no speech, laughter).",
        "RETT: MECP2, girls; the 6–18-month regression; the HAND-WRINGING with the purposeful hand use lost; the four-stage arc; 'often mislabelled autism first'.",
        "WILLIAMS 7q: the cocktail-party sociability + the visuospatial blindness + the supravalvular aortic stenosis + the hypercalcaemia; the music affinity.",
        "22q11: cardiac-palate-immune-calcium + THE 25–30% psychosis risk — the psychiatrist's syndrome; the annual screen from 12.",
        "TSC: the infantile spasms treated URGENTLY (the vigabatrin window — the weeks cost years); the ash-leaf under the Woods lamp; the renal clock every 1–2 years; the mTOR-inhibitor era.",
        "PKU: preventable by screening; the diet as treatment; the MATERNAL-PKU danger (the pre-conception counselling).",
        "LESCH-NYHAN: the self-injury's core (HPRT, X-linked boys); SMITH-MAGENIS: the inverted sleep and the melatonin protocol.",
        "THE MNEMONICS: the imprinting PAIR (Paternal → Prader-Willi's Phagia; MAternal → Angelman's MAnia-laughter-and-Movement) and ASH-SAF-PF (Ash-leaf, Shagreen, AngioFibromas, Periungual Fibromas).",
        "THE RECURRENCE TIERS: Down's free trisomy ~1% (the translocation form higher — the karyotype's must-know); the fragile X carrier mathematics (the premutation mother's expansion risk above 50%); the metabolic one-in-four.",
        "THE HONEST PHARMACOLOGY: no drug treats the syndromes' ID core — the medicines serve the riders; the mTOR inhibitors the one syndrome-specific pharmacology that arrived.",
      ],
      pyqConcepts: [
        "The imprinting mechanism essay — the pair's evergreen appearance in every tier's paper.",
        "The girl who regressed with the hand-wringing — diagnosis and management (the Rett worked example).",
        "Preventable causes of intellectual disability — the newborn-screening tier as the discussion's spine.",
        "The behavioural-phenotype concept question — the definition with the fragile X and Williams contrasts.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 19-year-old Bengaluru man with Down syndrome, working in a bakery's structured employment, is brought with 'he is becoming demented like the internet says': six months of slower work tasks, less chat at dinner, occasional bus-route confusion. The decline-audit runs FIRST: the TSH 9.8 (the annual test forgotten in the lockdown year), the B12 low (the vegetarian tier), the hearing test's new conductive loss (wax and otitis), the mood screen's low-mood-and-withdrawal (the new manager's shouting), the early waking — against the age-16 baseline testing the file luckily holds. The treatables treated (thyroxine, B12, the ENT care, the workplace intervention, the depression's CBT-lite and routine structure); the re-test at four months shows the substantial recovery — the work tasks, the chat and the bus route back — with the slope-watch honestly maintained: the audit-before-verdict discipline, the baseline map's treasure, and the family's internet education delivered without the terror.",
        "A 9-year-old Pune girl with Prader-Willi syndrome (the hypotonic-NG-fed newborn, the toddler hyperphagia, the confirmed paternal deletion) is brought for 'the stealing and the lying': the tiffin raids, the money from the teacher's drawer, the night raids on the open joint-family kitchen, the 40-minute rages when refused, the BMI crossing the 95th centile — the skin-picking on the forearms, the snoring and the tired days, the GH referral never completed. The environment's full re-engineering: the kitchen lock and the posted weekly menu, the calorie-and-swimming plan, the grandmother's love re-channelled ('your job is the plate-serving, not the second helping'), the school's teacher-supervised tiffin package, the visual timetable and the monitor's jobs, the 5 p.m. snack redesign, the sleep study and the completed GH assessment. One year: the BMI stabilised then falling, the night raids gone (the lock's boring effect), the meltdowns at 10 minutes not 40 — and the report card's line, 'reliable and proud of her checklists': the phenotype matched to the architecture, the moral-defect frame dissolved without the boundary lost.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The paternal 15q11–13 loss gives Prader-Willi; the maternal gives Angelman.",
        "The regressing girl with the hand-wringing → Rett syndrome, MECP2, almost only girls.",
        "The highest known single genetic risk factor for schizophrenia → the 22q11.2 deletion.",
        "The TSC infant's spasms → vigabatrin, urgently — the weeks cost developmental years.",
        "The cocktail-party child who cannot copy a square and fears loud sounds → Williams syndrome.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The one-page surveillance calendar handed AT the diagnosis consultation is the single highest-yield clinical act in this field — the counter to the named-then-neglected pattern that wastes more Indian syndrome diagnoses than any test ever will.",
        "The phenotype-matched programme is the craft: the fragile X small-warm-groups classroom, the Williams exploitation-proofing, the Prader-Willi locked kitchen, the Rett eye-gaze channel — the generic programme treats the number, the matched one treats the child.",
        "The fragile X consultation is a three-generation conversation: the index boy, the carrier mother, the FXTAS grandfather at 55, the POI sister weighing fertility — the family-wide testing held with the wide lens and everyone's consent honoured.",
        "The decline-audit discipline in the Down adult: the treatables' yield is large (thyroid, B12, hearing, mood, the psychosocial layer), the baseline map at 35–40 the file's treasure, and the verdict always waiting for the audit's answer.",
        "The WhatsApp-group craft: ask 'what have the groups been saying?' before the family asks — the groups' practical knowledge (the surveillance tiers, the therapists, the schemes) genuinely outstrips the local clinic sometimes, and the miracle posts get the gentle counter that keeps the channel open.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The bakery that slowed",
      presentation: "A 19-year-old with Down syndrome, six months of slowing, and the internet's verdict — the thyroid, the B12, the wax and the shouting manager found first.",
      initialPresentation: "A 19-year-old man in Bengaluru with Down syndrome, working in a bakery's structured employment and living the engaged-and-social profile his school and family built, was brought by his parents with their sentence: 'he is becoming demented like the internet says'. Six months of slower work tasks, less chat at dinner, the occasional bus-route confusion and the longer morning start formed the history.",
      history: "The bakery employment structured and valued; no prior cognitive concerns; the age-16 baseline cognitive testing in the file (the one good thing the assessment found); the annual TSH missed in the lockdown year; a new bakery manager whose shouting era the family had not connected to the picture; new early waking on the sleep history.",
      examination: "The decline-audit run as the examination: the TSH 9.8 (the silent Hashimoto's again); the B12 low (the vegetarian adolescent tier); the hearing test's new conductive loss (the wax-and-otitis layer); the PHQ-adjacent mood screen's low mood and withdrawal; the baseline comparison showing a modest-but-real decline from the age-16 map.",
      diagnosis: "A decline episode in a Down syndrome adult — the treatable layers (hypothyroidism, B12 deficiency, conductive hearing loss, a depressive reaction to the workplace's psychosocial layer) stacked on the background of the syndrome's earlier Alzheimer's clock.",
      management: "The treatables treated: the thyroxine, the B12, the ENT's wax-and-otitis care; the workplace intervention (the manager's briefing, the transition support); the depression's CBT-lite with the routine structure; the family's Alzheimer's education delivered honestly — the clock runs earlier in Down, the 40s decline would need these gates audited EVERY time, the verdict later.",
      outcome: "The re-test at four months: the substantial recovery — the work tasks, the dinner chat and the bus route back — with the residual honest question-mark maintained (the slope-watch kept, the next baseline set). The family left with the gates written down, not the verdict.",
      teachingPoints: [
        "The decline-audit before the verdict: the treatables' yield in Down adults is large — thyroid, B12, hearing, mood — and the audit runs every episode, every time.",
        "The baseline cognitive testing (here at 16; the standard window 35–40) is the file's treasure: the decline only exists as a measured fact against a map.",
        "The workplace's psychosocial layer (the shouting manager) is a 'cognitive symptom's' cause — the life context examined as carefully as the bloods.",
        "The family's internet education ('demented like the internet says'): the honest numbers and the gates taught without the terror — the fear treated alongside the thyroid.",
      ],
    },
    {
      title: "The kitchen lock and the report card",
      presentation: "A 9-year-old with Prader-Willi, the emptied tiffins and the 40-minute rages — and the year that ended with 'reliable and proud of her checklists'.",
      initialPresentation: "A 9-year-old girl in Pune with Prader-Willi syndrome (the neonatal hypotonia and NG feeding, the toddler hyperphagia's typical arc; the confirmed paternal deletion) was brought for 'the stealing and the lying and the school's complaints': the classmate's tiffin emptied, the money taken from the teacher's drawer, the night raids on the fridge and the locker in the joint family's open kitchen, the 40-minute rages when refused, and the BMI crossing the 95th centile.",
      history: "The family's theories: the 'spoiled by grandmother' frame, the school's 'moral defect' frame, the mother's tearful what-did-we-do-wrong. The skin-picking on the forearms; the snoring and the tired days (the apnoea flag); the growth-hormone referral never completed — the access gap's tier; the 5 p.m. hunger window mapping onto the worst meltdowns.",
      examination: "The classic behavioural phenotype met in the unengineered environment: the hyperphagia's missing brake plus the open joint-family kitchen plus the food-as-love culture plus the school's unstructured tiffin architecture; the obesity's climb documented; the short stature and the Prader-Willi gestalt; the sleep study ordered on the snoring.",
      diagnosis: "Prader-Willi syndrome's phase-two behavioural storm in an unengineered environment — the missing brake behaving exactly as the phenotype predicts when no architecture holds it.",
      management: "The environment's full re-engineering: the kitchen lock and the posted weekly menu; the calorie-and-exercise plan with the dietitian and the swimming built in; the joint-family assembly — the grandmother's love channelled from the food to the crafts and the walks ('your job is the plate-serving, not the second helping'); the school's package (the teacher-supervised tiffin, the classmate boxes out of reach, the check-first script); the visual timetable and the monitor's jobs harnessing the routine-loving strength; the escalation plan (the 5 p.m. snack redesign, the calm corner, the not-food rewards); the medical tiers (the sleep study and the ENT route; the GH assessment completed and started with the endocrinology and the scheme's financial architecture; the scoliosis and thyroid screens); the SSRIs' cautious consideration deferred — the behavioural tier first, the architecture not yet given its trial.",
      outcome: "One year: the BMI stabilised then falling; the night raids gone (the lock's boring effect); the tiffin incidents rare; the meltdowns at 10 minutes, not 40 — and the report card's remark the family framed: 'reliable and proud of her checklists'.",
      teachingPoints: [
        "The behavioural phenotype meets the unengineered environment: the Prader-Willi behavioural storms are the architecture's absence, not the child's character.",
        "The Indian-specific layers — the joint family's open kitchen, the food-as-love culture, the grandmother's generosity — are re-channelled, never removed; the love keeps its address and loses its calories.",
        "The school's tiffin architecture is treatment infrastructure: the teacher-supervised, out-of-reach, check-first package carries as much weight as any prescription.",
        "The uncompleted referrals' cost (the growth hormone, the sleep study) is the access-gap reality addressed head-on — the endocrinology and the scheme routes mapped and finished.",
        "The 'moral defect' frame dissolved without losing the boundary: the behaviour understood as the missing brake's signature AND the rules still taught — the reframe without the shame, the limit without the label.",
      ],
    },
  ],
  clinicalPearls: [
    "The diagnosis's first prescription is the dated surveillance calendar; the second is the phenotype-matched teaching style; the third is the recurrence counselling; the fourth is the parent organisation's phone number.",
    "The named diagnosis without the dated table is the half-diagnosis — the recurring Indian clinical failure, and the one-page calendar at the diagnosis consult its counter.",
    "Down: the APP gene sits on chromosome 21 — the Alzheimer's clock runs earlier, the clinical onset typically by the 40s–50s; the baseline map at 35–40 and every decline audited gate by gate before the verdict.",
    "Fragile X: social anxiety WITH social desire — the gaze aversion is look-away-to-calm, not indifference; the autism-mimic that changes the teaching plan.",
    "The imprinting pair: the same 15q11–13 neighbourhood, the opposite parents' copies, the opposite pictures — the exam's favourite mechanism and the methylation-and-UPD test that resolves it.",
    "Rett: the 6–18-month regression with the purposeful hand use lost to the wringing — and many girls carry an 'autism' label first; the MECP2 test is the correction and the eye-gaze channel starts from the diagnosis.",
    "22q11: the 25–30% adult psychosis risk — the highest known single genetic risk factor for schizophrenia; the annual thought-disorder screen from 12 is standard of care, not optional vigilance.",
    "TSC: the spasms treated FAST — the vigabatrin window in which the weeks cost developmental years; the ash-leaf spots under the Woods lamp; the renal clock every 1–2 years.",
    "Prader-Willi: the lock works, willpower lectures do not — the house's design does what the body's design cannot.",
    "Williams: the cocktail-party warmth makes the stranger-danger curriculum mandatory; the visuospatial blindness makes the teaching verbal-first.",
    "No drug treats the syndromes' ID core — the medicines serve the riders; the mTOR inhibitors in TSC stand as the one syndrome-specific pharmacology that has arrived.",
    "The recurrence numbers differ by orders of magnitude — Down's free-trisomy ~1% against the metabolic one-in-four tiers; the counselling is the diagnosis's third output, and the answer is a consultation, never a guess.",
    "Ask 'what have the groups been saying?' — the WhatsApp parent network's practical knowledge often outstrips the local clinic; the miracle posts get the gentle counter that keeps the channel open.",
  ],
  highYieldSummary: [
    "Definition: the named-syndrome tier of intellectual disability — the genetic syndromes (Down, fragile X, Prader-Willi, Angelman, Rett, Williams, 22q11, tuberous sclerosis, plus the shorter catalogue) each carrying three things: a medical surveillance table, a behavioural phenotype (the recognisable personality-and-symptom signature the modern science carries), and a recurrence number — the frame: NAME the syndrome, BUILD the surveillance calendar, MATCH the management to the phenotype, HOLD the family's genetics-and-network architecture.",
    "Epidemiology: Down 1 in 700–1,000 (the commonest identifiable cause, the maternal-age risk); fragile X ~1 in 4,000–7,000 boys (the commonest inherited cause, girls roughly half-affected and milder); Prader-Willi and Angelman ~1 in 15,000–25,000 each; Rett ~1 in 10,000–15,000 girls; Williams ~1 in 10,000; 22q11 ~1 in 2,000–4,000; TSC ~1 in 6,000–10,000 — the tier covering a minority of all ID but a majority of the severe identified cases; India: no registry, tens of thousands of Down births yearly on the younger-mother distribution, the newborn-screening layer still not universal.",
    "Mechanism: the five gears — the chromosome dose (trisomy 21 with the APP gene's Alzheimer's link), the copy-number deletions (22q11, Williams 7q11.23), the FMR1 CGG expansion (the full mutation >200 silencing; the premutation's FXTAS-and-POI carrier tiers; the Sherman paradox), the 15q11–13 imprinting (paternal loss → Prader-Willi; maternal → Angelman), and the single genes (MECP2, TSC1/TSC2's mTOR restraint, HPRT, the PKU block) — each shaping the temperament as much as the intelligence.",
    "Clinical: the gestalt drills (the Down facies with the single palmar crease; the long-face-big-ears shy boy; the obese narrow-templed food-seeker; the laughing ataxic non-speaker; the wringing regressing girl; the chatty child who cannot copy a square; the hypernasal voice with the cardiac scar; the ash-leaf spots under the Woods lamp) and the phenotype axes (social style, food, sleep, anxiety-obsession, self-injury, psychosis risk) — with the regression rule (any lost skill gets the hunt) as the cross-cutting emergency discipline.",
    "Diagnosis: the confirmation architecture — the karyotype (with the translocation exclusion), the fragile X DNA, the microarray, the methylation-and-UPD testing, the single-gene panels, the metabolic screen — routed by the trigger discipline (the gestalt, the family pattern, the regression, the specific signs); the Indian access map (the metro-government-district tiers, the approx-2026 costs, the counselling centres' thinness making the clinician's own recurrence fluency the fallback).",
    "Management: the surveillance spines per syndrome (the Down echo-TSH-hearing-C1–C2-coeliac-Baseline package; the 22q11 adolescent psychiatry protocol; the TSC renal clock; the Prader-Willi GH-and-sleep arc); the phenotype-matched programmes (the fragile X small-warm-groups, the Williams stranger-danger curriculum, the Prader-Willi locked kitchen, the Rett eye-gaze channel, the Smith-Magenis melatonin protocol); the honest pharmacology (no drug treats the ID core; the riders served — the vigabatrin window, the ADHD tier's legitimacy, the cautious SSRIs; the mTOR inhibitors the one arrived) — and the family architecture (the diagnosis delivery, the recurrence counselling, the family-wide testing, the parent organisations).",
    "The Indian tier: the named-then-neglected pattern and the one-page calendar counter; the naughtiness-and-spoiling reframes (the parenting never on trial); the joint family's open kitchen and the food-as-love culture as the Prader-Willi-specific engineering; the regression rule's urgency against the 'the doctor said just autism' era; the WhatsApp groups' honest steering; the marriage-and-disclosure ethics in the fragile X families; the grandfather's tremor as the three-generation story.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ids-quiz-1",
      question: "The paternal copy's loss in the 15q11–13 neighbourhood gives:",
      options: ["Angelman syndrome", "Prader-Willi syndrome", "Williams syndrome", "Rett syndrome"],
      correctIndex: 1,
      explanation: "The imprinting pair's law: the paternal loss → Prader-Willi's two-phase arc (the hypotonic infant → the hyperphagic child); the maternal loss → Angelman's severe ID, seizures, absent speech and laughter.",
      afterSectionId: "mechanism",
    },
    {
      id: "ids-quiz-2",
      question: "The Rett girl's stage-two diagnostic signature:",
      options: ["Macro-orchidism", "Loss of purposeful hand use with the hand-wringing stereotypies", "Hyperphagia with the locked-kitchen need", "Supravalvular aortic stenosis"],
      correctIndex: 1,
      explanation: "The 6–18-month regression with the hands' purpose lost to the constant midline wringing — the MECP2 girls' arc, and the reason many carry an 'autism' label first.",
      afterSectionId: "timeline",
    },
    {
      id: "ids-quiz-3",
      question: "The infant with tuberous sclerosis presents with epileptic spasms. The move:",
      options: ["Wait — they often self-resolve", "Treat urgently with vigabatrin — the spasms' weeks cost developmental years", "Behavioural therapy only", "Reassure as benign myoclonus"],
      correctIndex: 1,
      explanation: "The urgent window's evidence: the earliest treatment protects the developmental outcome — the weeks genuinely priced in cognitive years.",
      afterSectionId: "symptoms",
    },
    {
      id: "ids-quiz-4",
      question: "The behavioural signature that most separates fragile X from idiopathic autism:",
      options: ["Complete social indifference", "Social desire with social anxiety — the gaze aversion as escape", "Absent repetitive movements", "No sensory issues"],
      correctIndex: 1,
      explanation: "The boy wants contact and fears it: the look-away-to-calm, the approach-then-withdraw dance — and the teaching architecture differs accordingly (the small-warm-groups).",
      afterSectionId: "differential",
    },
    {
      id: "ids-quiz-5",
      question: "The vigilance institutionalised in 22q11 deletion care from adolescence:",
      options: ["Annual renal ultrasound only", "Structured psychosis-risk monitoring — the ~25–30% adult transition risk", "Colour-vision testing", "None — psychiatric risk is not elevated"],
      correctIndex: 1,
      explanation: "The highest known single genetic risk factor for schizophrenia earns the annual thought-disorder-and-function screen from 12 and the pre-built early-psychosis pathway.",
      afterSectionId: "management",
    },
    {
      id: "ids-quiz-6",
      question: "The primary treatment for the eating behaviour in Prader-Willi syndrome:",
      options: ["Willpower and diet counselling", "Environmental architecture — the locked kitchen, the fixed menus, the structured exercise", "Appetite-suppressant syrups", "Punishment-based modification"],
      correctIndex: 1,
      explanation: "The appetite's brake never formed: the house's design does what the body's design cannot — the lock works, the lectures do not.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Name the imprinting pair's two syndromes, their opposite-parents' mechanism, and their opposite clinical pictures — in four lines.", answer: "PRADER-WILLI: the PATERNAL 15q11–13 copies lost or silenced (the deletion, or the maternal uniparental disomy leaving the paternal-stamped genes unexpressed) — the two-phase arc: the neonatal hypotonia with feeding failure and the weak cry, then the toddlerhood hyperphagia with the obesity, the short stature and the obsessional phenotype. ANGELMAN: the MATERNAL copies lost from the same neighbourhood — severe ID, the ataxic puppet gait, the near-absent speech, the prominent epilepsy, and the happy-demeanour laughter. The mnemonic: Paternal → Prader's Phagia; MAternal → Angelman's mAnia-laughter-and-movement. The resolution test: the methylation-and-UPD analysis, which settles the parental origin and therefore the syndrome — and the recurrence counselling differs by form (the deletion-form's lowness against the UBE3A-mutation-and-imprinting-defect forms' real numbers).", topic: "Genetics" },
    { question: "Run the Down surveillance table's dated entries, and the decline-audit's gates before the Alzheimer's verdict.", answer: "THE TABLE: the newborn echo (the AVSD–VSD tier, ~40–50%, every newborn — the cardiology follow-through); the TSH at birth and ANNUALLY (the silent Hashimoto's — the 'Down child's slowdown' is often thyroid, not the syndrome); the hearing-and-vision audits (the conductive-loss tier behind 'not listening'); the atlanto-axial radiograph before Special-Olympics-and-trampoline-style activities (the C1–C2 gap, the neck-positioning counselling); the coeliac-and-anaemia screens; the leukaemia risk's awareness; the adult obesity-and-apnoea layer. THE DECLINE PROTOCOL: the baseline cognitive map at 35–40 (the file's treasure); then every decline episode audited gate by gate — the thyroid, the B12, the hearing, the mood-and-sleep (the psychosocial layer sought) — BEFORE any Alzheimer's verdict, because the treatables' yield in Down adults is large and the APP gene's clock (chromosome 21, the clinical onset typically by the 40s–50s) makes the discipline constant rather than occasional. The verdict, when it finally comes, arrives on the earlier clock with the dementia team already known to the family.", topic: "Management" },
    { question: "The fragile X boy 'looks autistic'. What three features separate the fragile X signature, and how does the teaching architecture differ?", answer: "THE THREE SEPARATORS: (1) the SOCIAL DESIRE with the SOCIAL ANXIETY — the boy wants contact and fears it: the gaze aversion is look-away-to-calm (the escape), the approach-then-withdraw dance, against autism's indifference; (2) the PHYSICAL tier declaring post-puberty — the long face, the large ears, the macro-orchidism (the examination point), the high-arched palate, the joint laxity; (3) the FAMILY pattern — the 'many quiet boys' history, the shy-bright-anxious sisters (the X-inactivation's milder pictures), the maternal uncle diagnosed at 40, the FXTAS grandfather. THE TEACHING ARCHITECTURE: the small-stable classroom (never the large noisy one), the warmed-up transitions, the sensory diet for the over-responsiveness, the graded exposure for the social anxiety (the child who wants contact, helped to hold it), the ADHD's full treatment legitimacy, the hand-flapping handled without the autism assumption. THE FAMILY ARCHITECTURE: the FMR1 DNA (the CGG molecular testing, the modern replacement of the old culture), the sisters' carrier-testing conversation, the three-generation map (the FXTAS grandfather, the POI sister) — one index child, the whole family's genetic counselling.", topic: "Differential diagnosis" },
    { question: "Write the Prader-Willi two-phase arc and the four-component environmental architecture.", answer: "THE ARC: PHASE ONE (neonatal-infantile) — the marked hypotonia, the poor suck and feeding failure (the nasogastric era, the failure-to-thrive paradox), the weak cry, the undescended testes in boys; PHASE TWO (from toddlerhood) — the hyperphagia switches on: the hypothalamic satiety-and-ghrelin circuitry running without brakes, the relentless food-seeking, the obesity with the short stature and the hypogonadism, the sleep apnoea, the scoliosis, the type-2 diabetes, the thick saliva's caries. THE FOUR-COMPONENT ARCHITECTURE: (1) THE LOCK — the locked kitchen and the fixed-menu routine, the food never freely available, no food as reward; (2) THE MENU — the calories budgeted with the dietitian, the posted schedule, the exercise (the swimming) built in; (3) THE ASSEMBLY — the joint family's gathering and the re-channelled grandmother (the love kept, the calories removed), the family education at the centre ('the brake is missing: the house's design is the willpower'); (4) THE SCHOOL PACKAGE — the teacher-supervised tiffin, the classmate boxes out of reach, the check-first script, the visual timetable harnessing the routine-loving strength. Plus the medical tiers: the GH assessment (the modern standard), the sleep study, the scoliosis-and-thyroid screens — and the SSRIs' cautious, monitored role for the severe anxiety and meltdown tiers when the architecture has had its trial.", topic: "Clinical practice" },
    { question: "Which single genetic deletion carries the highest known schizophrenia risk, and what does the adolescent protocol institutionalise?", answer: "THE 22q11.2 DELETION (DiGeorge/VCFS — 'the psychiatrist's syndrome'): roughly a QUARTER-TO-A-THIRD (25–30%) of affected adults develop psychosis — the highest known single genetic risk factor for schizophrenia, the population's ~100-times elevation, with a lower-but-real bipolar tier alongside. THE ADOLESCENT PROTOCOL: the annual thought-disorder-and-function screen from age 12 (the subtle early signs' vigilance — the withdrawing, the suspiciousness, the functioning's dip); the early-psychosis pathway PRE-BUILT (the contacts and the route known before the first symptom, not improvised after it); the family counselled honestly without the terrorising ('the annual check does not mean we expect it; it means we watch with early detectors — the cardiac-echo-for-the-mind framing'). The paediatric package (the cardiac-immune-calcium-palate tier) runs alongside; the psychiatric monitoring is standard of care, and the adolescent presenting with the childhood cardiac-and-palate history earns the 22q11 retrofit question every time.", topic: "Exam core" },
    { question: "The Rett girl's four-stage arc, the two channels that must be built, and the regression rule's urgency.", answer: "THE FOUR STAGES: (1) the early months normal-or-near-normal (the subtle slowing tier); (2) the REGRESSION at 6–18 months — the purposeful hand use LOST (the diagnostic signature), the speech lost, the hand-wringing-and-washing stereotypies (the constant midline motion), the decelerated head growth (the acquired microcephaly) — and the misdiagnosis window, with many girls carrying an 'autism' label first; (3) the plateau-and-stabilisation — the seizure epoch's onset, the breathing irregularities (the sighs, the apnoeas, the hyperventilation), the scoliosis, and the eye-contact-and-engagement's PARTIAL RETURN; (4) the late motor decline (the wheelchair tier). THE TWO CHANNELS: the EYE-GAZE communication (the alert eyes' channel — the boards and the gaze-tracked devices built on the engagement that survives: the trapped-in-communication picture honoured rather than assumed absent) and the HANDS' occupied alternatives (the stereotypy's management with the soft toys and the adjacent tiers). THE REGRESSION RULE: any lost skill in any child gets the full hunt — the metabolic, the genetic (the MECP2 sent), the epileptic — before any dismissive label; the Indian 'the doctor said just autism' era costs months, and the months matter.", topic: "Clinical practice" },
    { question: "The TSC child's urgent window and the surveillance organ-clock — state both with their timelines.", answer: "THE URGENT WINDOW: the infantile spasms (the West syndrome association) treated FAST with vigabatrin — the evidence that the earliest treatment protects the developmental outcome, the spasms' weeks costing cognitive years; the spasming infant with the hypopigmented spots is an emergency, never a wait-and-see. THE ORGAN CLOCK: the brain MRI and the EEG (the seizure architecture — the later focal-and-refractory tier); the RENAL ultrasound/MRI every 1–2 years (the angiomyolipomas, the bleeding risk — the everolimus era's mTOR-inhibitor option routed through the specialist); the retinal hamartomas; the cardiac rhabdomyomas (the infancy tier that usually regresses); the pulmonary LAM (the women's adult layer); the skin's dated observation (the ash-leaf under the Woods lamp, the adolescent angiofibromas, the shagreen patch, the periungual fibromas — the ASH-SAF-PF mnemonic). And the developmental surveillance with the autism screen built in — the tuber count and the early spasms linked to the strong autism comorbidity.", topic: "Emergency" },
    { question: "The behavioural-phenotype frame in one sentence, with one matched-management example each for fragile X, Williams, Prader-Willi, Angelman and Smith-Magenis.", answer: "THE FRAME IN ONE SENTENCE: the syndrome's genes shape not only the intelligence but the temperament — the anxiety-pattern, the social style, the obsessional tendency — so the teaching style and the management architecture get matched to the signature, because the generic-ID-programme treats the number while the phenotype-matched-programme treats the child. THE EXAMPLES: FRAGILE X — the small-stable classroom with the warmed-up transitions and the graded exposure, built for the anxious-wanting boy (the social desire treated as the asset it is); WILLIAMS — the stranger-danger curriculum with the check-first-with-a-named-adult discipline, built for the cocktail-party warmth (the exploitation-proofing the amiability obliges) alongside the verbal-first teaching for the visuospatial blindness; PRADER-WILLI — the locked kitchen, the posted menu and the harnessing of the obsessional style into checklists and jobs, built for the missing brake and the routine-loving strength; ANGELMAN — the AAC-and-gesture communication with the dignity framing, built for the near-absent speech and the happy demeanour (the retired 'happy puppet' name's lesson); SMITH-MAGENIS — the melatonin-and-sleep-timing protocol with the meltdowns' antecedent mapping, built for the inverted clock (the melatonin-production disturbance) and the day-night reversal.", topic: "The science" },
  ],
  faqs: [
    { question: "The doctor said it is a syndrome, not just slow learning. Does the name change anything?", answer: "It changes three things. The MEDICAL calendar: a named syndrome carries its own organ checks (the heart, the thyroid, the kidneys, the spine), which we now schedule — untreated, some of those quietly cause damage. The TEACHING STYLE: each syndrome shapes a recognisable personality-and-learning profile, and matching our methods to it works better than any one-size programme. And the NEXT-PREGNANCY numbers: the name answers 'will it repeat' with real figures instead of guesses. The name is not a bigger label; it is a better map — and the diagnosis's first prescription is the dated table, handed the same day." },
    { question: "Why is he so different from other children with the same problem?", answer: "Because the syndromes ARE different. The fragile X boy is anxious-and-wanting-contact; the Williams child runs warm to strangers; the Down child imitates-and-engages; the Prader-Willi child's whole world runs through food. Same broad diagnosis — intellectual disability — different wiring-packages underneath. That is why we keep asking which syndrome: the surveillance machinery, the teaching style and the family counselling all differ by the name." },
    { question: "The internet says Down syndrome children get Alzheimer's at 40. Is my son going to forget us?", answer: "The honest version has two halves. The brain changes do accumulate earlier in Down — the amyloid gene sits on the extra chromosome, and the clinical window typically opens in the 40s. AND the part the internet leaves out: a large share of 'decline' episodes in Down adults turn out to be TREATABLE layers — the thyroid quietly failing, the B12 dropping, the hearing muffling, the depression from a life event. Our protection: the baseline testing around 35–40, then every decline audited gate by gate before any verdict. If the time comes, we will face it with the dementia team and the tools — not with the panic." },
    { question: "She eats everything and steals food. Is she spoiled? We never starved her.", answer: "In Prader-Willi, the appetite's brake mechanism never formed — the brain literally does not receive the 'full' signal. The stealing and hoarding is the missing brake's behaviour, not your parenting and not her morals. The treatment is architectural: the locked kitchen, the fixed menu, the structured exercise. The house's design does what her body's design cannot — discipline and lectures fail; the lock works." },
    { question: "His uncle is 55 and shaking, and the genetic doctor said it is related to the boy's condition. How?", answer: "Fragile X is a family story in three generations: your son's full mutation (the learning-and-social profile), his mother the carrier (the sister-testing question), and sometimes the grandfather-generation's carriers develop a movement-and-thinking condition at older ages — the FXTAS tier. The nephew's diagnosis often brings the whole family's map into the light; that is why we ask about uncles and cousins, and offer the family-wide testing conversation with everyone's consent honoured — including the marriage-and-disclosure questions it may raise." },
    { question: "They said the baby's calcium is low and the heart has a problem, and now at 16 they want psychiatric check-ups every year. Why?", answer: "The 22q11 deletion hits several systems at once — heart, palate, calcium, immunity in infancy — and in adolescence it carries the highest known genetic vulnerability to psychosis: roughly a quarter develop it. The annual check does not mean we EXPECT it; it means we WATCH with early detectors, and the early-detected is the better-treated. Think of it as a cardiac echo for the mind: surveillance, not a sentence." },
    { question: "My daughter with Rett was saying two words, then she lost them and her hands won't stop moving. Did we do something?", answer: "No. Rett's arc is built in: the development's reversal in the second year, the hands' purpose lost to the wringing, the words lost. The crucial finding underneath: the girl's mind stays more present than the hands suggest — the alert eyes, the engagement. Our work: the seizure control, the spine, the nutrition, and the communication channel built through the eyes and the technology. The loss was real; the trap is treating her as absent." },
    { question: "Will our next child have the same syndrome?", answer: "Per-syndrome honesty, because the numbers differ by orders of magnitude: Down's free trisomy runs about 1% (the translocation form higher — the karyotype's must-know); the fragile X carrier mathematics run the premutation-mother's expansion risk above 50% (the sisters' testing, the pre-conception counselling); the imprinting and metabolic tiers include the real one-in-four forms. The answer is a consultation — the genetic counselling with the prenatal options mapped for YOUR family and YOUR access — because the number matters too much for guessing." },
    { question: "The WhatsApp group says a therapy/diet/gene protocol cured a child like ours.", answer: "The groups are your best practical allies — the surveillance knowledge, the therapists, the schemes — and the miracle-tier posts are the groups' tax. The rule: run every protocol through us before the money and the hope. The ones that are real we will tell you (the diet in PKU, the growth hormone in Prader-Willi, the mTOR medicines in TSC, the spasms medicine); the rest is commerce." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "ICD-11 (WHO) — the syndromic coding logic, paraphrased" },
      { source: "AAP-lineage Down syndrome health supervision schedules — the dated-tables' basis" },
      { source: "The international tuberous sclerosis complex surveillance-and-management consensus lineages" },
      { source: "The 22q11 deletion psychiatric-monitoring consensus (the adolescent protocol's basis)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 10.4 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "The vigabatrin-for-infantile-spasms evidence (the TSC urgent window's basis)" },
      { source: "The everolimus/mTOR-inhibitor trials in tuberous sclerosis (the one arrived syndrome-specific pharmacology)" },
      { source: "The growth-hormone treatment trials in Prader-Willi syndrome (the body-composition-and-stature evidence)" },
    ],
    reviews: [
      { source: "Dykens EM — the behavioural-phenotype science (the syndrome-signature literature's spine)" },
      { source: "Hagerman RJ & Hagerman P — the fragile X full-mutation and premutation lifetime map (the FXTAS and POI tiers)" },
      { source: "Cassidy SB et al. — the Prader-Willi-and-Angelman imprinting literature" },
      { source: "Neul JL and the Rett consensus lineage — the four-stage revision and the communication-capacity evidence; the MECP2 literature" },
      { source: "Mervis CB — the Williams cognitive profile (the social-strength/visuospatial-weakness dissociation)" },
      { source: "Swillen A, Vorstman JA et al. and the Schneider M consensus — the 22q11 psychosis-risk cohorts" },
      { source: "The APP-gene-on-chromosome-21 and Down-syndrome Alzheimer's literature (the earlier-clock evidence)" },
      { source: "The Indian layer — newborn-screening programme status, genetic-lab access-and-cost tiers (approx 2026), and the parent-network organisations" },
    ],
    patientResources: [
      { source: "The Down-syndrome parent federation and the syndrome-specific organisations — the metro hubs and the WhatsApp-era national reach" },
      { source: "The one-page surveillance calendar template — the instrument this course hands to every Indian syndrome family at the diagnosis consultation" },
      { source: "Tele-MANAS 14416 (24×7, free) — the family-distress and caregiver channel" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "9 min",
      description: "Plain language: what the name changes, the calendar on the wall, the missing brake, the internet-group rule, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "31 min",
      description: "The gestalts, the imprinting pair, the behavioural-phenotype frame, the surveillance spines, the regression rule.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "37 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — the phenotype-matched craft, the three-generation genetics, the surveillance discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three currencies, the gestalt catalogue, the behavioural-phenotype frame.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can name the major syndromes' genetic gears and their one-line signatures cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The five gears, the imprinting switch, the mTOR cascade, the silenced gene.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the imprinting pair and the FMR1 expansion story, and place each syndrome on its clock." },
    { number: 3, title: "Clinical Practice", description: "The gestalt drills, the test menu, the surveillance spines, the phenotype-matched craft.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can route the recognition to the right test, build the dated calendar, and match the programme to the phenotype." },
    { number: 4, title: "Indian Context", description: "The named-then-neglected pattern, the cost map, the joint-family engineering, the WhatsApp craft.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can hand the one-page calendar at the diagnosis consult and deliver the missing-brake reframe without the shame." },
    { number: 5, title: "Exam Revision", description: "The exam lens, the two cases and the high-yield core.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the imprinting essay, the regression vignette and the surveillance long-case cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, the family's questions and the references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can run all the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 10.4 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Dykens EM — the behavioural-phenotype science: the syndrome-signature literature's spine", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO/AAIDD-tier frameworks and ICD-11's syndromic coding — the classification logic, paraphrased", sourceType: "classification", year: "2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "The Down-syndrome surveillance lineages: the AAP-lineage health supervision schedules; the APP-gene-on-chromosome-21 and Down-Alzheimer's literature (the earlier-clock evidence)", sourceType: "guideline", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Hagerman RJ & Hagerman P — the fragile X full-mutation and premutation phenotypes' lifetime map (the FXTAS and POI tiers)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Cassidy SB et al. — the Prader-Willi-and-Angelman imprinting literature; the growth-hormone treatment evidence trials", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Neul JL and the Rett-consensus lineage — the four-stage revision and the communication-capacity evidence; the MECP2 literature", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Mervis CB — the Williams syndrome cognitive profile (the social-strength/visuospatial-weakness dissociation); the medical-surveillance lineages", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "The 22q11 lineages: the Schneider M consensus and the psychosis-risk cohorts (Swillen A, Vorstman JA et al.)", sourceType: "review", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "The international TSC consensus surveillance-and-management lineages; the vigabatrin-for-spasms evidence (the urgent window's basis); the everolimus trials", sourceType: "guideline", year: "2010s–2020s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "The Indian layer — the newborn-screening programmes' status and campaigns; the genetic-lab access-and-cost tiers (approx 2026); the parent-network organisations (the Down-federation tier and the syndrome groups)", sourceType: "government", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The behavioural-phenotype claim: each major syndrome carries a recognisable behavioural-and-temperamental signature — the fragile X social anxiety with social desire, the Williams stranger-warmth with visuospatial blindness, the Prader-Willi obsessional-food architecture, the Angelman laughter, the Smith-Magenis inverted clock — and the management architecture is matched to the phenotype (the teaching style and the programme design as clinical acts).", grade: "supported", sources: ["S1", "S2"] },
    { text: "Down syndrome: the commonest identifiable cause (roughly 1 in 700–1,000 births, the maternal-age risk); the 95%-free-trisomy mechanism with the translocation and mosaic tiers; the surveillance spine (the newborn echo with the ~40–50% AVSD–VSD tier, the annual TSH, the hearing-and-vision audits, the atlanto-axial radiograph, the coeliac-and-anaemia screens); and the Alzheimer's window — the APP gene on chromosome 21, the clinical onset typically by the 40s–50s, the baseline cognitive testing at 35–40 with the decline-audit gates before any verdict.", grade: "established", sources: ["S1", "S4"] },
    { text: "The Down behavioural phenotype: the relatively strong social profile with the visual-over-auditory learning preference, the slower speech-and-motor channels (the signing-early tier), the routine-loving transition-needing frame — the teaching style built on the strengths.", grade: "supported", sources: ["S1", "S2", "S4"] },
    { text: "Fragile X syndrome: the FMR1 CGG expansion (the full mutation >200 repeats silencing the gene; the premutation's Sherman-paradox amplification across generations); the commonest inherited cause in boys (~1 in 4,000–7,000); the signature — the social anxiety WITH social desire (the gaze aversion as escape, the approach-then-withdraw dance), the ADHD overlap, the sensory over-responsiveness; the girls' milder X-inactivation pictures; the carriers' own tiers (FXTAS in grandfathers, POI in carrier women) making one diagnosis a three-generation family story.", grade: "established", sources: ["S1", "S5"] },
    { text: "The imprinting pair: the same 15q11–13 neighbourhood with parent-of-origin stamping — the paternal copies lost giving Prader-Willi (the neonatal hypotonia-and-feeding-failure phase one; the toddlerhood hyperphagia phase two with the hypothalamic satiety machinery running without brakes), the maternal copies lost giving Angelman (severe ID, the ataxic gait, near-absent speech, prominent epilepsy, the happy laughter); the recurrence tiers form-dependent (the deletion form's lowness against the UBE3A-mutation-and-imprinting-defect forms' real numbers).", grade: "established", sources: ["S1", "S6"] },
    { text: "Rett syndrome: MECP2, X-linked, almost only girls (~1 in 10,000–15,000); the four-stage arc with the 6–18-month regression (the purposeful hand use lost to the hand-wringing stereotypies, the speech lost, the acquired microcephaly), the misdiagnosis window (many girls labelled 'autism' first), the stage-three breathing irregularities and seizures with the engagement's partial return — the eye-gaze communication channel built on the alert eyes; and the ANY-regression rule (every lost skill gets the metabolic-genetic-epileptic hunt).", grade: "established", sources: ["S1", "S7"] },
    { text: "Williams syndrome (7q11.23 deletion, ~1 in 10,000): the cocktail-party sociability with the empathy and the fascination with faces paired with the visuospatial blindness (the 'can talk about but cannot draw the bicycle' dissociation); the hyperacusis; the musical affinity; the medical tier (the supravalvular aortic stenosis, the infantile hypercalcaemia, the renal-and-growth layers); the stranger-danger curriculum the warmth obliges.", grade: "established", sources: ["S1", "S8"] },
    { text: "The 22q11.2 deletion (~1 in 2,000–4,000): the multi-system hit (the conotruncal cardiac, the palate-and-velar insufficiency, the immune-thymic deficiency, the hypocalcaemia's neonatal check) plus the psychiatric arc — the learning-and-attention difficulties with the ADHD and autism-spectrum overlaps, the childhood anxiety, and the roughly 25–30% adult psychosis risk (the highest known single genetic risk factor for schizophrenia, the population's ~100-times elevation) managed by the adolescent protocol: the annual thought-disorder-and-function screen from 12 and the pre-built early-psychosis pathway.", grade: "established", sources: ["S1", "S9"] },
    { text: "Tuberous sclerosis complex (TSC1/TSC2, ~1 in 6,000–10,000): the mTOR growth-pathway dysregulation producing the multi-organ hamartomas; the skin signs (the ash-leaf maculae under the Woods lamp, the angiofibromas, the shagreen patch, the periungual fibromas); the infantile spasms' urgent vigabatrin window (the earliest treatment protecting the developmental outcome — the weeks cost years); the strong autism comorbidity (the tuber count and the early spasms' links); the surveillance clock (the renal ultrasound/MRI every 1–2 years, the retinal, cardiac and pulmonary tiers) and the everolimus-era mTOR-inhibitor option.", grade: "established", sources: ["S1", "S10"] },
    { text: "The honest pharmacological position: no drug treats the syndromes' intellectual-disability core — the medicines serve the riders (the seizures including the vigabatrin window, the ADHD tier's full legitimacy in fragile X and 22q11, the cautious SSRI tiers for the anxiety-and-mood layers, the cautious monitored tiers for the Prader-Willi meltdowns); the fragile X targeted-trials era honestly framed as not-yet-clinical, with the mTOR inhibitors standing as the one syndrome-specific pharmacology that has arrived.", grade: "established", sources: ["S1", "S5", "S10"] },
    { text: "The Indian tier: the newborn-screening layer (congenital hypothyroidism, PKU) still not universal — the few state programmes and the private tier; the prenatal access gradient; the named-then-neglected pattern (the named diagnosis without the dated table as the half-diagnosis) countered by the one-page surveillance calendar at the diagnosis consult and the birthday-anchored audit; the approx-2026 cost map (the karyotype ₹2,000–5,000; the fragile X DNA ₹4,000–10,000; the microarray ₹12,000–25,000; the single-gene ₹3,000–15,000; the TSH ₹100–200; the renal ultrasound ₹800–1,500; the GH ₹50,000–2,00,000/year); the parent-network organisations' geography and the WhatsApp-groups' steering craft.", grade: "supported", sources: ["S11"] },
  ],
};
