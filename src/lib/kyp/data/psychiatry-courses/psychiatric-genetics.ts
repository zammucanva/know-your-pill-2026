import type { PsychiatryCourse } from "./types";

/**
 * PSYCHIATRIC GENETICS — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatric-genetics.md — untouched
 * foundation, itself built on NOTP 2e (2009) ch 2.4.1
 * (Thapar & McGuffin — quantitative genetics) + ch 2.4.2
 * (Flint — molecular genetics); original rewrite), re-researched
 * against the lineages the note itself cites (Mendel 1866,
 * Fisher's polygenic-biometric framework, Falconer's
 * liability-threshold model, Kendler's 1995 G×E twin
 * demonstration, the DiLalla maltreatment-versus-corporal-
 * punishment study, the McGuffin-Neale Mx model-fitting
 * tradition, Morton's 1955 lod-score method, the International
 * HapMap Consortium, the Meaney-Weaver maternal-care
 * methylation programming, the Skuse Turner-syndrome work,
 * Plomin's non-shared-environment framework, Caspi's 2003
 * 5-HTT × life-stress landmark — flagged as a post-Oxford
 * update) with per-claim provenance.
 *
 * Drug routes: the note assigns no medication any clinical role
 * in genetics — pharmacogenetics is named as the clinical
 * translation but has no KYP lesson; drugLinks is empty by
 * design and the honest boundaries are recorded in
 * contentGaps, never invented.
 */
export const psychiatricGeneticsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatric-genetics",
  title: "Genetics in Psychiatry",
  shortName: "Psych Genetics",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Genetics in Psychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "From Mendel to the molecular maze — heritability, twin studies, linkage, the new genetics",

  summary:
    "Psychiatric genetics runs on two engines — quantitative genetics quantifying heritability through twin, family and adoption studies, and molecular genetics hunting actual risk genes through linkage and association. The central lesson: psychiatric disorders are polygenic, multifactorial and entangled with gene-environment interplay.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State Mendel's three laws with the working vocabulary (gene, allele, genotype, phenotype) and recognise the single-gene patterns of psychiatric relevance — autosomal dominant (Huntington's, acute intermittent porphyria), autosomal recessive (phenylketonuria, with consanguinity) and X-linked (fragile X, with no father-to-son transmission).",
    "Explain the polygenic/multifactorial threshold model — liability normally distributed, affection beyond a threshold, relatives' liability distributions shifted right — and what it predicts for relatives' risk in the common psychiatric disorders.",
    "Partition phenotypic variance (genetic, shared environmental, non-shared environmental), define narrow- and broad-sense heritability, and recite the three interpretive cautions: population-not-individual, population-specific, and modifiability-agnostic — the PKU diet lesson.",
    "Define gene-environment interaction (genetic differences in response to environments), the three gene-environment correlations (passive, active, evocative) and epistasis, and explain why apparently environmental risk factors partly reflect genetic propensities.",
    "Describe the research designs — family studies with ascertainment and age-correction, twin studies with the equal-environments assumption and zygosity by DNA typing, adoption studies in their three designs — with their assumptions, biases and classic model-fitting findings.",
    "Apply linkage logic (recombination fraction, centimorgans, lod scores, the 3/−2 conventions) and association logic (candidate genes versus whole-genome, linkage disequilibrium, the HapMap, population stratification) — and state the honest verdict: many variants of small effect, few replicable major loci.",
    "Explain the molecular machinery — transcription, DNA methylation and epigenetics, imprinting with its neurodevelopmental disorders, X-inactivation and the maternal-care programming of glucocorticoid-receptor expression.",
    "Deliver the clinical translation: genetic risk is not genetic determinism (the PKU paradigm); the pedigree remains the most informative genetic assessment available; counselling figures are framed probabilistically, never deterministically.",
  ],
  quickFacts: [
    { label: "The two engines", value: "Quantitative + molecular", detail: "Quantitative genetics (twin, family, adoption studies quantifying heritability, environment and their interplay) and molecular genetics (linkage, association and the whole-genome search for actual risk genes) — the field's whole apparatus" },
    { label: "The single-gene patterns", value: "Three, with psychiatric examples", detail: "Autosomal dominant: Huntington's and acute intermittent porphyria (heterozygote parent → 50% of offspring); autosomal recessive: phenylketonuria (carrier parents, commoner with consanguinity); X-linked: fragile X (carrier mother → half of sons affected, half of daughters carriers; no father-to-son transmission)" },
    { label: "The explanatory model", value: "The polygenic threshold", detail: "Liability continuously and normally distributed; affected individuals beyond a threshold; relatives' liability distributions shifted right, so a greater proportion exceed it — familial aggregation without Mendelian ratios" },
    { label: "The heritability cautions", value: "Three, ending in PKU", detail: "Population-not-individual (50% population heritability of IQ is not 50% of any person's IQ); population-specific; modifiability-agnostic — PKU is fully genetic yet fully preventable by diet" },
    { label: "The twin engine", value: "Two equations", detail: "rmz = h² + c² and rdz = ½h² + c² — MZ twins sharing 100% of genes against DZ's 50%, decomposed by path analysis or model-fitting; the equal-environments assumption tested with measured environmental sharing, most studies supporting it" },
    { label: "The gene-environment layer", value: "G×E + three correlations", detail: "Gene-environment interaction: Kendler's finding that those at higher genetic risk of major depression are more sensitive to the depressogenic effects of adverse life events; gene-environment correlation: passive, active and evocative — the sociable-parent/child examples" },
    { label: "The mapping conventions", value: "Lod 3 accepts, −2 excludes", detail: "Lod ≥ 3 = odds on linkage of 1000:1 (nominal P ≈ 0.0001); lod ≤ −2 excludes; 1 cM ≈ 1% recombination; the sex-averaged human genome ~3,700 cM — a whole-genome search with 200–300 evenly-spaced markers" },
    { label: "The verdict", value: "Polygenic, small effects", detail: "For schizophrenia, bipolar disorder and depression twin studies establish substantial heritability; linkage found few replicable loci; association and the whole-genome era confirmed many variants of small effect — clinical translation being risk quantification and pharmacogenetics, not gene tests for diagnosis" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The counselling figures' home: general population ~1%, MZ co-twin ~50%, DZ co-twin or child of affected ~10-15% — substantial heritability with no single causative gene" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Kendler's G×E demonstration (higher genetic risk, greater sensitivity to depressogenic life events) and the multivariate finding: the same genes, different non-shared environments, in anxiety and depression" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Substantial heritability by twin studies; the commonest Indian genetic-counselling question alongside schizophrenia" },
    { label: "Huntington's Disease Psychiatry", type: "condition", href: "/psychiatry/huntingtons-neuropsychiatry/", note: "The autosomal dominant psychiatric presentation, with anticipation molecularly explained by the unstable nucleotide repeat expansion" },
    { label: "Intellectual Disability", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "The imprinting disorders of intellectual disability — Rett, Prader-Willi, Angelman, Turner — and X-inactivation" },
    { label: "Genetic Syndromes in ID", type: "condition", href: "/psychiatry/id-syndromes/", note: "Fragile X (macro-orchidism, the X-linked rules) and the ATRX pleiotropy example — the behavioural-phenotype tier genetics reads" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The multivariate twin finding: broader cognitive-social phenotypes in autism relatives" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "Early-onset Alzheimer's as the locus-heterogeneity lesson — presenilin 1, presenilin 2 and amyloid precursor protein, three genes, one phenotype" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "The family history as the clinical genetic test — the pedigree woven into the assessment the interview course teaches" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The Skuse Turner-syndrome work: maternally-expressed X-linked genes influencing hippocampal development — the imprinting map written into brain anatomy" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Psychiatric genetics is the discipline that starts from the plainest clinical observation — psychiatric disorders run in families — and builds two engines to explain it. The quantitative engine decomposes resemblance: family studies establish aggregation; twin studies exploit the natural experiment of MZ twins sharing 100% of genes against DZ's 50% (rmz = h² + c²; rdz = ½h² + c²); adoption studies separate genes from rearing experimentally in their three designs; model-fitting partitions phenotypic variance into genetic, shared and non-shared environmental components. The result for the major disorders is substantial heritability — but nothing like Mendelian ratios, which is where the threshold model earns its keep: a continuously distributed liability, affection beyond a threshold, and relatives' liability distributions shifted right, so a greater proportion of relatives are affected without any single gene being necessary. The molecular engine then hunts the genes themselves: linkage scans multiplex families for co-segregating markers (lod ≥ 3 accepting, ≤ −2 excluding), association compares allele frequencies case against control (more powerful for small effects), and the whole-genome era — HapMap, linkage disequilibrium, tagging SNPs — industrialised the search. The verdict of both engines converges: psychiatric disorders are polygenic (many variants of small effect), multifactorial (genes plus environment), and entangled with gene-environment interaction (genetic differences in environmental response — Kendler's depression finding) and gene-environment correlation (genotypes shaping the environments experienced — passive, active, evocative). The epigenetic layer completes the picture: methylation and imprinting let the environment write on gene expression without changing the sequence — the maternal-care programming being the demonstration. The clinical translation is probabilistic risk quantification and counselling, never gene tests for diagnosis — and the PKU paradigm stands as the field's one-line answer to genetic determinism.",
    steps: [
      "The observation: psychiatric disorders aggregate in families — the starting point every genetic consultation in psychiatry begins from.",
      "The quantitative evidence: family studies (aggregation, with ascertainment and age-correction), twin studies (the MZ-DZ comparison and its model equations), adoption studies (three designs separating genes from rearing) — together partitioning phenotypic variance into genetic, shared and non-shared environmental components.",
      "The threshold model: liability normally distributed in the population; affected individuals beyond a threshold; relatives' distributions shifted right — the elegant explanation of familial aggregation without Mendel's ratios.",
      "The gene-finding attempt: linkage in multiplex families — co-segregation with markers, recombination fractions in centimorgans, lod scores with the 3/−2 conventions — hunting the major loci.",
      "The association turn: allelic association more powerful than linkage for small effects — candidate genes (the DRD2 and 5-HTT traditions) then whole-genome scanning (the HapMap, linkage disequilibrium, tagging SNPs), with population stratification the standing trap.",
      "The polygenic verdict: few replicable linkage loci for the common disorders; many variants of small effect confirmed by the whole-genome era; rare-variant and copy-number-variant stories (DISC1, neuregulin, the 22q11 deletion) continuing the theme.",
      "The entangling layer and the translation: gene-environment interaction and correlation weaving environment into the risk architecture; epigenetics writing environment onto expression; the clinical deliverables being probabilistic risk counselling and the PKU-diet determinism correction — never gene tests for diagnosis.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hippocampus", name: "Hippocampus (the maternal-gene structure)", role: "The Skuse Turner-syndrome work: maternally-expressed X-linked genes influencing hippocampal development — the parent-of-origin map written into the brain's memory architecture.", grade: "supported" },
    { id: "caudate", name: "Caudate nucleus (the paternal-gene counterpart)", role: "The paternally-expressed side of the Skuse work: caudate development under paternal-gene influence — the same imprinting logic mapped onto a different structure.", grade: "proposed" },
    { id: "thalamus", name: "Thalamus (the imprinting tier's third address)", role: "Thalamic development grouped with the caudate under paternally-expressed influence in the Skuse Turner-syndrome findings — the social-cognition implications that follow from the anatomy.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The candidate-gene era's first stop — DRD2 variation tested for allelic association with psychiatric disorders; the modern polygenic verdict subsumes dopaminergic genes among the many small effects.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The 5-HTT short variant × life-stress interaction (Caspi 2003, the post-Oxford G×E landmark, flagged as update) — serotonin-transporter variation moderating stress sensitivity.", grade: "proposed" },
    { name: "Monoamine oxidase", symbol: "MAO", role: "MAOA × maltreatment, the vulnerability-gene example from the post-Oxford literature: genetic risk manifesting only with adverse exposure — the prevention reframe (child protection as genetic medicine) rides on it.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "heritability-pathway",
      name: "The heritability pathway (from family resemblance to variance partition)",
      steps: [
        { label: "Familial aggregation observed", detail: "The disorder recurs in families — the clinical fact every consultation starts from" },
        { label: "The twin comparison", detail: "MZ twins sharing 100% of genes against DZ's 50% — intraclass correlations for continuous traits, concordance rates (pairwise, probandwise) for dichotomous" },
        { label: "The model equations", detail: "rmz = h² + c²; rdz = ½h² + c² — decomposed by path analysis or model-fitting (Mx software; likelihood maximisation; χ² comparisons)" },
        { label: "The variance partition", detail: "Phenotypic = genetic (additive + dominance) + shared environmental + non-shared environmental (including error) — narrow-sense h² = va/vp" },
        { label: "The interpretive cautions applied", detail: "A population statistic, population-specific, silent on modifiability — read as risk architecture, never as individual destiny" },
      ],
      clinicalManifestation: "The 'will my child get it?' consultation answered with population-relative figures honestly framed — never with the determinism the question secretly fears.",
      grade: "established",
    },
    {
      id: "threshold-pathway",
      name: "The liability-threshold pathway (from polygenes to relatives' risk)",
      steps: [
        { label: "Many genes of small effect", detail: "Plus environmental contribution — multifactorial inheritance approaching the normal distribution (one locus: three classes; adding loci: 2n + 1)" },
        { label: "Liability normally distributed", detail: "The whole population arrayed on a continuous liability curve — the Hardy-Weinberg equilibrium its population baseline" },
        { label: "The threshold", detail: "Affected individuals beyond it — quasi-continuous severity among the affected, gradeable along the curve" },
        { label: "Relatives shifted right", detail: "Relatives of affected individuals carry liability distributions shifted right, so a greater proportion exceed the threshold" },
        { label: "The empirical figures", detail: "Schizophrenia: general population ~1%; MZ co-twin ~50%; DZ co-twin or child of an affected parent ~10-15% — risk rising with kinship, never to certainty" },
      ],
      clinicalManifestation: "The familiar OPD picture — no Mendelian ratios, but risk climbing with kinship; the counselling figures the threshold model predicts and the pedigree delivers.",
      grade: "established",
    },
    {
      id: "gene-finding-pathway",
      name: "The gene-finding pathway (from linkage to the whole genome)",
      steps: [
        { label: "Multiplex families ascertained", detail: "The many-affected-family strategy linkage requires" },
        { label: "The linkage scan", detail: "Co-segregation with markers; recombination fraction θ; 1 cM ≈ 1% recombination; a whole-genome search with 200–300 evenly-spaced markers" },
        { label: "The lod-score test", detail: "The log-of-odds for linkage at a given θ versus 0.5 — lod ≥ 3 (1000:1 odds) accepting, lod ≤ −2 excluding; the model-specification problem (mis-specified penetrance → missed linkage)" },
        { label: "The heterogeneity wall", detail: "Different genes producing similar phenotypes — Usher's syndrome with six genes; early-onset Alzheimer's with presenilin 1, presenilin 2 and amyloid precursor protein" },
        { label: "The association turn", detail: "Allelic association more powerful for small effects; candidate genes (DRD2, 5-HTT) then whole-genome scanning — the HapMap's common-variation catalogue, linkage disequilibrium, tagging SNPs; population stratification the trap, family-based designs the defence" },
        { label: "The polygenic verdict", detail: "Few replicable major loci for the common disorders; many variants of small effect — the clinical translation being risk quantification and pharmacogenetics, not gene tests for diagnosis" },
      ],
      clinicalManifestation: "The genetic test for schizophrenia that does not exist — and the risk-counselling conversation, built on the pedigree, that does.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "mendel-1866", time: "1866 (rediscovered ~1900; 'gene' coined 1909)", title: "Mendel's particulate heredity", description: "The pea-plant experiments establishing dominance (heterozygotes display the dominant phenotype), segregation (1:3 recessive:dominant phenotypes; 1:2:1 genotypes) and independent assortment — heredity through discrete units, named genes in 1909, with alleles, genotype and phenotype following.", phase: "onset" },
    { id: "biometric-synthesis", time: "Early 20th century", title: "The polygenic-biometric synthesis", description: "Fisher's framework reconciling continuous traits with Mendelian principles: one locus with two alleles gives three phenotypic classes; adding loci multiplies them (2n + 1), approaching the normal distribution — polygenic inheritance, multifactorial with environment; the Hardy-Weinberg equilibrium (p²:2pq:q²) as the population baseline.", phase: "onset" },
    { id: "lod-1955", time: "1955", title: "Morton's lod-score method", description: "Sequential linkage analysis formalised — the log-of-odds for linkage at a given recombination fraction versus 0.5, with lod ≥ 3 (1000:1 odds) accepting and lod ≤ −2 excluding linkage; the convention the gene-mapping era inherited.", phase: "peak" },
    { id: "threshold-1960s", time: "1960s", title: "Falconer's liability-threshold model", description: "The continuously distributed liability with affection beyond a threshold and relatives' distributions shifted right — the elegant explanation of the familial aggregation of common psychiatric disorders without Mendelian ratios.", phase: "peak" },
    { id: "twin-model-fitting", time: "1990s", title: "Twin model-fitting and the G×E demonstrations", description: "The Mx model-fitting tradition delivering the multivariate findings (the same genes, different non-shared environments, in anxiety and depression; genetic influence on IQ increasing from childhood to adolescence) and Kendler's 1995 demonstration that higher genetic risk of major depression heightens sensitivity to the depressogenic effects of adverse life events.", phase: "duration" },
    { id: "genome-era", time: "2003–2005", title: "The whole-genome era", description: "Caspi's 5-HTT × life-stress interaction (2003, the post-Oxford G×E landmark) and the International HapMap's common-variation catalogue (2005) making whole-genome association possible — the polygenic verdict confirmed: many variants of small effect, gene tests for diagnosis nowhere in sight.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the genetic apparatus as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The genetic epidemiology of psychiatric disorders is risk-structural rather than prevalence-counting. Twin studies establish substantial heritability for the major disorders — schizophrenia, bipolar disorder, depression — with no single gene causing any of them; schizophrenia's counselling figures as the note gives them: general population ~1%, MZ co-twin ~50%, DZ co-twin or child of an affected parent ~10-15% (the counselling phrasing rounding to ~10-13%).",
    indianPrevalence: "The note's lineage records no Indian survey numbers — the Indian genetic epidemiology is structural: consanguinity (cousin marriage in several South Indian communities) raising homozygosity for autosomal-recessive conditions, including the PKU-like metabolic disorders presenting as intellectual disability and psychiatric symptoms; the infrastructure reality (karyotyping and fragile-X testing in major centres; genetic counselling scarce) defining the practical service.",
    lifetimeRisk: "The threshold model's recurrence figures, quoted probabilistically and never deterministically: for schizophrenia, ~1% general population risk rising to ~10-13% with one affected parent, higher still with both parents affected, and ~5-8% for an unaffected sibling of an affected person; MZ co-twin concordance 40-50% — leaving half or more of identical co-twins unaffected, the genetic-risk-not-destiny lesson in one number.",
    genderRatio: "Not a male:female prevalence account; the note's sex-specific genetics are the X-linked rules — a carrier mother transmits fragile X to half of sons (affected) and half of daughters (carriers); an affected father transmits to all daughters (carriers) and never to sons; no father-to-son transmission.",
    ageOfOnset: "Anticipation — earlier onset and greater severity across generations — marks the unstable nucleotide repeat expansions (Huntington's, fragile X) rather than the common psychiatric disorders; the generation-onset column in the pedigree is where it is read.",
    indianNotes: "Consanguinity is the Indian genetic variable: a three-generation pedigree with marriage-pattern enquiry is the Indian genetic assessment's opening move; neonatal PKU screening remains uneven across states — the preventable-burden frontier.",
  },
  etiology: [
    { category: "genetic", factor: "Single-gene (Mendelian) patterns", details: "Autosomal dominant — one allele suffices, every generation affected, heterozygote parent → 50% of offspring: Huntington's disease and acute intermittent porphyria presenting psychiatrically; autosomal recessive — two alleles needed, skips generations, carrier parents, commoner with consanguinity: phenylketonuria; X-linked — fragile X: carrier mother → half of sons affected, half of daughters carriers; affected father → all daughters carriers, no father-to-son transmission." },
    { category: "genetic", factor: "The polygenic/multifactorial threshold model", details: "A continuously distributed liability with affection beyond a threshold; relatives' liability distributions shifted right — the explanation of the familial aggregation of the common psychiatric disorders; alternative models in the same family: single-major-locus with incomplete penetrance, variable expression (neurofibromatosis from café-au-lait spots to the full syndrome), anticipation (repeat expansions), imprinting, mixed and oligogenic models." },
    { category: "genetic", factor: "Non-additive layers: epistasis, G×E, gene-environment correlation", details: "Epistasis — gene-gene interaction across loci; gene-environment interaction — genetic differences in response to environments (Kendler: higher genetic risk of major depression, greater sensitivity to depressogenic life events); gene-environment correlation — passive (sociable parents provide both genes and a socialising environment), active (the sociable child seeks social situations), evocative (the sociable child evokes friendly responses) — many 'environmental' risk factors correlating with genetic risk." },
    { category: "biological", factor: "Epigenetic modification", details: "DNA methylation at CpG dinucleotides repressing genes — reversible but maintained through cell division; the maternal-care finding: rat licking-grooming altering brain glucocorticoid-receptor expression and stress sensitivity in offspring, observable with cross-fostered pups, mediated by DNA methylation and histone acetylation, persisting two generations and reversible — environment writing on expression without changing the sequence." },
    { category: "genetic", factor: "Imprinting (parent-of-origin effects)", details: "Expression from only one parental chromosome — ~60 documented genes; maternally-expressed genes enhancing and paternally-expressed genes reducing brain size; the imprinting disorders of intellectual disability: Rett, Prader-Willi, Angelman, Turner; X-inactivation; the Skuse Turner-syndrome work linking maternally-expressed X-linked genes to hippocampal and paternally-expressed to caudate/thalamic development, with social-cognition implications." },
  ],
  symptomClusters: [
    {
      category: "1. The single-gene signals",
      symptoms: ["Vertical transmission — every generation affected, a heterozygous parent's 50% offspring risk: the Huntington's and porphyria pattern", "Sib clusters with unaffected parents, skipping generations, commoner where cousin marriage appears: the PKU and recessive-metabolic pattern", "Affected males linked through daughters — no father-to-son line anywhere in the pedigree: the fragile X pattern", "Anticipation read across generations — earlier onset, greater severity, the repeat-expansion signature (Huntington's, fragile X)"],
    },
    {
      category: "2. The syndromic phenotypes",
      symptoms: ["Male intellectual disability with macro-orchidism — the fragile-X testing rule, available in Indian metros", "One gene, many systems — the ATRX example: α-thalassaemia, facial appearance, developmental delay, hypotonia and genital abnormalities from a single X-linked chromatin-remodelling gene (pleiotropy)", "A psychiatric presentation with a full systemic syndrome attached — porphyria's attacks, Huntington's movement disorder and dementia — the single-gene tier announcing itself clinically"],
    },
    {
      category: "3. The imprinting disorders",
      symptoms: ["Intellectual disability with parent-of-origin-dependent manifestation: Rett, Prader-Willi, Angelman, Turner", "The same deletion producing Prader-Willi from the paternal copy and Angelman from the maternal — imprinting's textbook demonstration", "Turner-syndrome social-cognition profiles — the Skuse work linking X-linked imprinting to hippocampal and caudate/thalamic development"],
    },
    {
      category: "4. The common-disorder aggregation",
      symptoms: ["Schizophrenia, bipolar disorder or depression running in families without Mendelian ratios — the threshold model's territory", "Quasi-continuous severity — affected relatives gradeable along a severity continuum rather than cleanly affected/unaffected", "Risk rising with kinship but never to certainty — the MZ co-twin concordance of ~50% in schizophrenia being the ceiling, not the rule"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The pedigree",
      code: "The clinical genetic test",
      criteria: [
        "A three-generation pedigree with the marriage-pattern enquiry — consanguinity asked directly, the Indian genetic assessment's opening move.",
        "The inheritance pattern read: vertical transmission (autosomal dominant suspicion); sib clusters with unaffected parents, deepened by consanguinity (autosomal recessive); affected males through daughters with no father-to-son line (X-linked).",
        "The family-study method (direct interview of relatives) distinguished from the family-history method (report through the proband) — the former the research standard, the latter the clinic's instrument.",
        "Age-correction applied where affected status may still emerge — the Slater-Stromgren adaptation of Weinberg's method and life-table analysis in the research tier.",
      ],
      duration: "Minutes at first contact — the most informative genetic assessment available for psychiatric disorders.",
      indianNote: "The pedigree costs nothing but clinician time — the district psychiatrist's genetics is pedigree analysis, risk counselling and referral; the laboratory tier sits in major centres.",
    },
    {
      system: "The laboratory tier",
      code: "What karyotype, FISH and fragile-X testing actually deliver",
      criteria: [
        "Karyotype, FISH and microarray — the cytogenetic tier, available in few Indian centres; referral-tier, not first-contact.",
        "Fragile-X DNA testing — available in Indian metros; the rule: any male intellectual disability with macro-orchidism, or any family X-linked inheritance pattern (affected males through daughters), earns it.",
        "The molecular research apparatus taught for literacy, not the clinic: polymerase chain reaction, microarrays (genotyping chips, expression profiling), the Ensembl and UCSC genome browsers.",
        "The honest boundary: no gene test diagnoses schizophrenia, bipolar disorder or depression — the clinical translation is risk quantification and pharmacogenetics, never a diagnostic gene panel.",
      ],
      duration: "Referral and turnaround vary by centre; the counselling conversation should never wait on the laboratory.",
      indianNote: "The biochemical-screening layer — neonatal PKU screening — is uneven across Indian states; where it exists it is the preventable-burden frontier, fully genetic and fully diet-preventable.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Autosomal dominant pattern (Huntington's disease, acute intermittent porphyria)", distinguishingFeatures: "Vertical transmission with every generation affected; a heterozygous parent transmits to 50% of offspring; both sexes affected; anticipation may compress generations.", keyDifferentiator: "The single-gene tier where Mendelian counselling ratios genuinely apply — and the two named disorders that bring neurogenetics into psychiatric practice." },
    { condition: "Autosomal recessive pattern (phenylketonuria)", distinguishingFeatures: "Skips generations; carrier parents with affected children in sib clusters; prevalence deepened by consanguinity — both parents homozygous for the same rare variant.", keyDifferentiator: "The consanguinity question decides suspicion; PKU's dietary prevention makes it the treatable metabolic mimic worth finding before the label 'non-specific intellectual disability' settles." },
    { condition: "X-linked pattern (fragile X)", distinguishingFeatures: "Affected males connected through carrier daughters; no father-to-son transmission; carrier mother → half of sons affected, half of daughters carriers; affected father → all daughters carriers.", keyDifferentiator: "The male-line rule plus macro-orchidism in male intellectual disability earns fragile-X DNA testing — available in Indian metros." },
    { condition: "Imprinting and anticipation patterns (Prader-Willi, Angelman, Huntington's, fragile X)", distinguishingFeatures: "Parent-of-origin-dependent manifestation — the same deletion giving Prader-Willi from the paternal copy and Angelman from the maternal; anticipation — earlier onset, greater severity each generation, molecularly explained by unstable nucleotide repeat expansions.", keyDifferentiator: "The multigenerational pedigree read with parent-of-origin and generation-onset columns — the pattern that converts a clinical curiosity into a testable mechanism." },
    { condition: "Multifactorial threshold aggregation (schizophrenia, bipolar disorder, depression)", distinguishingFeatures: "Familial aggregation without Mendelian ratios; quasi-continuous severity; risk rising with kinship (schizophrenia ~1% population, MZ co-twin ~50%) but never to certainty.", keyDifferentiator: "The common psychiatric reality — counselled by the threshold model's empirical figures, probabilistically and never deterministically." },
  ],
  management: [
    { category: "psychotherapy", name: "Genetic counselling with the threshold model", description: "The population, familial and twin-derived risk figures delivered probabilistically: for schizophrenia, general population ~1%; MZ co-twin ~50%; DZ co-twin or child of an affected parent ~10-15% (the counselling phrasing ~10-13%); one affected parent raising a child's risk from ~1% to ~10-13%; both parents higher; an unaffected sibling ~5-8%. Framed never deterministically — the answer to the commonest Indian consultation question.", whenToUse: "Every 'will my child get it?' consultation — the question schizophrenia and bipolar disorder families ask most.", indianContext: "The commonest Indian genetic-counselling question, asked with a marriage alliance often in the balance — honest probabilistic answers without stigmatising labels." },
    { category: "psychotherapy", name: "The heritability-misuse correction", description: "'It's genetic, so nothing can be done' corrected in one example: PKU is fully genetic yet fully preventable by diet; every psychiatric heritability estimate coexists with environmental modifiability. Heritability measures the causes of differences in a population, not the modifiability of the condition.", whenToUse: "Whenever a heritability figure is disclosed — to family, to students, to yourself.", indianContext: "The determinism correction travels with every risk figure quoted in the Indian OPD — the two sentences belong together." },
    { category: "service-design", name: "The G×E reframing of prevention", description: "Vulnerability genes (MAOA × maltreatment; the 5-HTT short variant × stress — post-Oxford literature) mean prevention targets the environments interacting with risk: the high-genetic-risk offspring exposed to adverse rearing is where antisocial-behaviour risk multiplies, and protection matters most precisely where genetic risk is highest — child protection is genetic medicine.", whenToUse: "Prevention planning for high-genetic-risk families — and every child-protection decision in psychiatry.", indianContext: "The non-blaming prevention frame for Indian family work: the environment is the modifiable half of the risk architecture even when the genes are loaded." },
    { category: "assessment", name: "Family history as the clinical genetic test", description: "The pedigree — three generations, marriage patterns, parent-of-origin and generation-onset columns — remains the most informative genetic assessment available for psychiatric disorders; no laboratory replaces it for the common disorders.", whenToUse: "Every psychiatric assessment, and again whenever the clinical picture shifts.", indianContext: "The one instrument the district psychiatrist fully owns — the laboratory tier is scarce, the pedigree is free." },
    { category: "service-design", name: "Referral and the testing tier", description: "Karyotype, FISH and microarray in few centres; fragile-X DNA testing in metros — referral-tier instruments for the syndromic suspicion (macro-orchidism, X-linked patterns, imprinting phenotypes); neonatal PKU screening the public-health frontier; the district psychiatrist's genetics is pedigree analysis, risk counselling and referral.", whenToUse: "Whenever the pedigree shows a single-gene or syndromic signal rather than threshold-model aggregation.", indianContext: "Referral logistics are part of the counselling: what is testable, where, and what the result will and will not change — no improvised gene-test promises." },
  ],
  safety: {
    redFlags: [
      "Intellectual disability in a consanguineous family with regression, seizures or unexplained somatic signs — the metabolic-mimic screen (PKU among them) before the label settles",
      "Male intellectual disability with macro-orchidism or an X-linked family pattern — fragile-X testing indicated, available in Indian metros",
      "A pedigree suggesting Huntington's disease (dementia, movement disorder, anticipation across generations) — the single-gene tier where genetics changes the entire management, and referral is the duty",
      "Both parents affected with schizophrenia or bipolar disorder — the recurrence figures climb, and the counselling conversation is a clinical priority, not an aside",
    ],
    urgentGuidance:
      "Psychiatric genetics has no emergency, but it has preventable harm: the neonatal PKU screen missed (uneven across Indian states) is the paradigm — fully genetic, fully preventable by diet; the consanguineous family with one affected child deserves metabolic referral and counselling before the next pregnancy decision, not reassurance; the fragile-X rule (macro-orchidism or the male-line pattern) earns the metro referral; and the both-parents-affected couple needs the risk conversation delivered by someone competent to give it — the district psychiatrist's task being the pedigree, the risk counselling and the referral, never an improvised prediction.",
  },
  drugLinks: [],
  contentGaps: [
    "Pharmacogenetics — the note's named clinical translation (risk quantification and pharmacogenetics, not gene tests for diagnosis) — has no KYP lesson; the boundary is recorded here, never invented; no KYP drug page is linked on genetic grounds.",
    "The GWAS and copy-number-variant era beyond the note's post-Oxford riders (DISC1, neuregulin, the 22q11 deletion, the schizophrenia GWAS hits) — no dedicated molecular-psychiatry lesson exists; taught at verdict level here.",
    "Gene-environment interaction as its own methods course (the Caspi 5-HTT × life-stress and MAOA × maltreatment literatures) — no KYP lesson; the demonstrations are taught here exactly as the note frames them, flagged as post-Oxford updates.",
    "Epigenetics as a standalone mechanism course (DNA methylation, histone modification, the maternal-care programming) — no KYP lesson; taught at the imprinting-and-programming level here.",
    "Acute intermittent porphyria's own psychiatric course — the note names it with Huntington's as the autosomal dominant psychiatric presentation; no KYP lesson exists and no route is implied.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of knowledge, not an illness: the study of how mental disorders run in families — how much of their risk is inherited, how genes and environments work together, and how that knowledge is used to counsel families. Most psychiatric disorders are not caused by one gene: many small genetic differences combine with life experience, which is why risk in families rises but never becomes certainty — even the identical twin of a person with schizophrenia has only about a coin-toss chance of developing it.",
    whatCausesIt:
      "Heredity passes on a vulnerability, not the illness itself. Genes contribute substantially — twin studies show this clearly — but environments switch risk on and off: stressful life events matter more in some genetic backgrounds than others, and good care in early life measurably calms the stress system. A few rare conditions (Huntington's disease, fragile X syndrome, phenylketonuria) do follow single-gene rules, which is why the family tree matters in every assessment.",
    symptoms:
      "Not applicable as an illness. What families notice: more than one relative with schizophrenia, bipolar disorder, depression or intellectual disability; relatives affected at younger ages in successive generations; in consanguineous marriages, children with intellectual disability or unusual physical features. These patterns deserve a doctor's structured family history, not alarm.",
    treatment:
      "The treatment of genetics is information: a family tree taken properly, honest risk figures (for schizophrenia: about 1 in 100 in general, about 10 in 100 with one affected parent), and the correction that genetic never means untreatable — phenylketonuria is fully genetic and fully preventable by diet, and every psychiatric disorder with high heritability responds to treatment.",
    selfHelp: [
      "Bring the family history to the consultation — three generations, including cousin marriages, written down before the visit.",
      "Ask for the risk figures in plain numbers, and ask what they do not mean: risk is not destiny.",
      "If intellectual disability runs in the family with cousin marriages, ask about metabolic screening and newborn testing.",
      "Keep treatment going alongside the genetics: heritability says nothing about whether an illness responds to care.",
      "Write down questions before genetic counselling — the consultation goes better prepared.",
    ],
    whenToSeekHelp: [
      "A family member newly diagnosed with schizophrenia or bipolar disorder and a pregnancy or marriage decision approaching — counselling before the decision, not after",
      "Intellectual disability in a child whose parents are cousins — metabolic assessment and genetic referral",
      "Male intellectual disability with large testes at puberty, or affected males appearing only through the mother's line — fragile-X testing discussion",
      "A parent dying of Huntington's disease and the adult child asking about their own future — a single-gene-tier conversation needing specialist referral",
      "Deterioration in a treatable disorder while the family pursues only non-medical explanations of 'it is in the blood'",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — for the distress these questions carry and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP — where the pedigree, the risk counselling and the referral begin",
      "Medical-college genetic-medicine departments (metros) — the karyotype, FISH, microarray and fragile-X testing tier",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs psychiatric genetic counselling; practice follows the Oxford chapters' threshold-model figures with the determinism correction — probabilistic answers, never deterministic predictions — while the service reality (karyotyping and fragile-X testing in major centres; genetic counselling scarce) defines what can honestly be offered.",
    systemContext: "The Indian genetics consultation is usually the district OPD question — 'will my child get it?' — asked by a family with an affected member, frequently with a marriage alliance in the balance. The district psychiatrist's genetics is pedigree analysis, risk counselling and referral; the biochemical-screening layer (neonatal PKU screening, uneven across states) is the preventable-burden frontier.",
    programmeContext: "No national genetic-counselling programme for psychiatric disorders exists in the note's account; the capacity tier — karyotype, FISH and microarray in few centres, fragile-X testing in metros — is metropolitan and scarce. The public-health genetics that touches psychiatry is newborn metabolic screening, and its unevenness across states is the gap worth naming.",
    costConsiderations: "The note's lineage records no Indian cost figures (honest structural note): the pedigree and the risk counselling cost clinician time only; karyotyping, FISH, microarray and fragile-X testing sit in major centres at referral-tier costs; no figure is invented here.",
    culturalConsiderations: "Consanguinity — cousin marriage in several South Indian communities — raises homozygosity for recessive conditions, the PKU-like metabolic disorders presenting as intellectual disability and psychiatric symptoms; the three-generation pedigree with marriage-pattern enquiry is the Indian genetic assessment's opening move. Marriage-alliance genetics concentrates the disclosure dilemmas of psychiatric family history — confidentiality, stigma and counselling ethics converge, the clinical task being honest probabilistic answers without stigmatising labels. The fragile-X rule — any male intellectual disability with macro-orchidism, or any family X-linked inheritance pattern, earns testing — is deliverable in Indian metros. The epigenetic teaching gives a biological dignity to the Indian paediatric emphasis on early nurturing and a non-blaming framework for adversities' long reach.",
    patientCounselling: [
      "The risk script: 'The general chance is about 1 in 100; with one affected parent it is about 10 in 100 — a real rise, and still not certainty: half of identical twins of people with schizophrenia never develop it.'",
      "The determinism correction: 'It runs in families' does not mean 'nothing can be done' — phenylketonuria is fully inherited and fully prevented by diet; every one of these illnesses responds to treatment.",
      "The consanguinity script: 'Cousin marriage raises the chance that both of you carry the same rare variant — it matters for conditions like PKU and the metabolic causes of intellectual disability; the family tree and the newborn screen are our answers.'",
      "The fragile-X script: 'Intellectual disability in a boy with large testes at puberty, or affected males appearing only through the mother's line — that pattern earns a specific test, and it is available in the metros.'",
      "The marriage-alliance script: 'I will give you honest numbers, not labels — what the family does with them, and when anyone else hears them, is yours to decide; my duty is confidentiality.'",
      "The nurturing script: 'Early care shapes how genes are read — the environment writes on expression without changing the genes. It is biology, not blame.'",
    ],
  },
  decisionPath: {
    title: "The family history that changes the consultation",
    nodes: [
      {
        id: "start",
        question: "A three-generation pedigree with the marriage-pattern enquiry has been taken. What does it show?",
        branches: [
          { label: "No aggregation beyond the proband", next: "routine-path" },
          { label: "Single-gene pattern signals (vertical, sib-cluster or male-line)", next: "mendelian-gate" },
          { label: "Common-disorder aggregation without Mendelian ratios", next: "threshold-gate" },
        ],
      },
      {
        id: "mendelian-gate",
        question: "Which single-gene pattern does the pedigree hold?",
        branches: [
          { label: "Vertical — every generation affected", next: "ad-path" },
          { label: "Sib cluster, skipping generations, consanguinity", next: "ar-path" },
          { label: "Affected males through daughters, no father-to-son line", next: "x-linked-path" },
        ],
      },
      {
        id: "ad-path",
        question: "Autosomal dominant territory (Huntington's, acute intermittent porphyria).",
        recommendation: "Mendelian counselling with the honest ratio — a heterozygous parent transmits to 50% of offspring — plus anticipation read across the generation-onset column (repeat expansions: earlier onset, greater severity). Referral for molecular testing where the syndrome warrants it; the psychiatric presentations (Huntington's, porphyria) belong to their own clinical courses.",
      },
      {
        id: "ar-path",
        question: "Autosomal recessive suspicion (the consanguinity question answered yes).",
        recommendation: "Metabolic workup before the label settles — PKU among the mimics, fully genetic and fully diet-preventable; the newborn-screening question asked for existing and future children; carrier counselling for the couple; the consanguinity frame delivered without blame — homozygosity for the same rare variant is arithmetic, not fault.",
      },
      {
        id: "x-linked-path",
        question: "X-linked territory — the fragile X rule.",
        recommendation: "Fragile-X DNA testing earned by the pattern (or by macro-orchidism in male intellectual disability) — available in Indian metros; carrier counselling with the rules: carrier mother → half of sons affected, half of daughters carriers; affected father → all daughters carriers, never sons. The sister's carrier question answered at an appropriate age, not improvised at the bedside.",
      },
      {
        id: "threshold-gate",
        question: "The common-disorder tier: whose risk is the family asking about?",
        branches: [
          { label: "An affected parent, children planned", next: "parent-risk-path" },
          { label: "Both parents affected", next: "both-parent-path" },
          { label: "An unaffected sibling of an affected person", next: "sibling-path" },
        ],
      },
      {
        id: "parent-risk-path",
        question: "The commonest Indian consultation question — 'will my child get it?'",
        recommendation: "Threshold-model counselling with the figures: general population ~1%, rising to ~10-13% with one affected parent (the chapters' counselling figure for DZ co-twin/child: ~10-15%); the determinism correction delivered in the same breath — PKU fully genetic and fully diet-preventable; treatment responsiveness stated plainly; the marriage-alliance confidentiality held.",
      },
      {
        id: "both-parent-path",
        question: "Both parents affected with schizophrenia or bipolar disorder.",
        recommendation: "The recurrence risk is higher still with both parents affected — the exact figure delivered by specialist genetic counselling, and the couple's questions deserve that tier: referral, not improvisation; the counselling conversation is a clinical priority, not an aside.",
      },
      {
        id: "sibling-path",
        question: "The unaffected sibling of an affected person.",
        recommendation: "The ~5-8% lifetime figure for an unaffected sibling, against ~1% in the general population — a real rise and a reassuring ceiling compared with the family's usual fear; the MZ co-twin figure (40-50%) reserved for the twin who actually asks, and always paired with its converse: half or more of identical co-twins never develop the disorder.",
      },
      {
        id: "routine-path",
        question: "No aggregation beyond the proband.",
        recommendation: "Document, counsel with the population baseline, and re-ask at reviews — the pedigree remains the most informative genetic assessment available, and the family history that changes shape over follow-up is the finding worth catching; the marriage-pattern enquiry repeated where new alliances form.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Reading heritability as individual destiny",
      why: "A 50% heritability of IQ is a statement about the causes of differences in a population — it is not a claim that half of any individual's IQ is genetic, and it predicts nothing about one person's modifiability.",
      correction: "The three cautions recited with every figure: population-not-individual; population-specific; modifiability-agnostic — the PKU diet lesson closing the argument.",
    },
    {
      mistake: "'It's genetic, so nothing can be done'",
      why: "The determinism error the note names explicitly: heritability measures the causes of differences in a population, not the treatability of the condition — and every psychiatric disorder with high heritability responds to treatment.",
      correction: "The PKU paradigm in one sentence: fully genetic, fully preventable by diet — delivered with every risk figure quoted.",
    },
    {
      mistake: "Counselling Mendelian ratios — and quoting MZ concordance as certainty",
      why: "Schizophrenia, bipolar disorder and depression are polygenic and multifactorial: quoting a 50% offspring risk as if the disorder were autosomal dominant catastrophises the counselling — and the ~50% MZ co-twin concordance is quoted as if identical twins share a fate, when its deepest teaching is the converse: half of identical co-twins of affected people never develop the disorder.",
      correction: "The threshold model's empirical figures — ~1% population, ~10-13% with one affected parent, ~5-8% for an unaffected sibling, MZ co-twin ~40-50% — always paired with the complement: genetic risk, not genetic destiny, the single most reassuring true sentence in psychiatric genetic counselling.",
    },
    {
      mistake: "Interpreting life events as pure environment",
      why: "Gene-environment correlation means many 'environmental' risk factors — life events, parenting styles — partly reflect genetic propensities; the sociable child seeks and evokes the social world, so exposure is not independent of genotype.",
      correction: "Genetically sensitive designs before environmental causal claims: the twin and adoption methods exist precisely to separate the correlation from the causation.",
    },
    {
      mistake: "Overreading early gene findings",
      why: "Linkage peaks that fail replication and candidate-gene associations undone by population stratification — ancestry differences manufacturing spurious association — are the history the note records honestly.",
      correction: "The polygenic verdict held steady: many variants of small effect; no gene test diagnoses the common disorders; the clinical translation is risk quantification and pharmacogenetics.",
    },
    {
      mistake: "Skipping the marriage-pattern enquiry in the Indian pedigree",
      why: "The consanguinity variable is invisible without the direct question — and it is the one that raises autosomal-recessive risk, from PKU to the metabolic intellectual-disability mimics.",
      correction: "The three-generation pedigree with the marriage-pattern enquiry as the opening move, asked as routinely as the presenting complaint.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "State Mendel's three laws with the 1:2:1 genotype and 3:1 phenotype ratios, and define the six vocabulary terms — gene, allele, genotype, phenotype, dominance, segregation.",
        "The three single-gene patterns with one psychiatric example each: autosomal dominant (Huntington's, acute intermittent porphyria), autosomal recessive (PKU with consanguinity), X-linked (fragile X) — with the no-father-to-son rule.",
        "Draw and explain the polygenic threshold model — the liability curve, the threshold, the relatives' shifted distribution — and state what it predicts for relatives' risk.",
        "Write the variance partition (vp = vg + vc + ve), define narrow- and broad-sense heritability, and recite the three interpretive cautions with the PKU example.",
        "Define gene-environment interaction and the three gene-environment correlations with the sociable-parent/child examples.",
      ],
      practical: [
        "Construct a three-generation pedigree from a patient with schizophrenia, including the marriage-pattern enquiry — and counsel the 'will my child get it?' question with the threshold-model figures.",
        "Demonstrate the twin-method history: zygosity determination (DNA typing ideal; questionnaires 95%+ accurate), concordance versus intraclass correlation, and the equal-environments assumption explained to the examiner.",
      ],
      longAnswer: [
        "The genetics of schizophrenia: evidence from family, twin and adoption studies; the polygenic threshold model; and the principles of genetic counselling.",
        "Gene-environment interaction and gene-environment correlation in psychiatric disorders: definitions, evidence (Kendler's depression finding; the sociable-child example) and clinical implications.",
      ],
    },
    neetPg: {
      highYield: [
        "THE THRESHOLD MODEL: liability normally distributed, affected beyond a threshold, relatives' liability distributions shifted right — familial aggregation without Mendelian ratios; the answer to why common disorders cluster in families without 1:2:1 ratios.",
        "THE COUNSELLING FIGURES: schizophrenia ~1% general population; MZ co-twin ~50%; DZ co-twin/child of affected ~10-15%; one affected parent ~10-13%; unaffected sibling ~5-8%; both parents higher — quoted probabilistically, never deterministically.",
        "THE HERITABILITY CAUTIONS: population-not-individual; population-specific; modifiability-agnostic — PKU fully genetic yet fully preventable by diet.",
        "THE TWIN EQUATIONS: rmz = h² + c²; rdz = ½h² + c² — with the equal-environments assumption (tested with measured environmental sharing, most studies supporting it) and zygosity by DNA typing (questionnaires 95%+ accurate).",
        "THE THREE ADOPTION DESIGNS: the adoptee study, the adoptee's-family study and the cross-fostering study (the G×E experiment) — non-random placement by agencies the standing caveat.",
        "THE G×E LANDMARKS: Kendler 1995 — higher genetic risk of major depression, greater sensitivity to the depressogenic effects of adverse life events; maltreatment effects on antisocial behaviour environmentally mediated, corporal punishment genetically mediated; MAOA × maltreatment and 5-HTT × life stress (post-Oxford updates).",
        "THE rGE TRIO: passive (sociable parents provide both genes and environment), active (the sociable child seeks situations), evocative (the sociable child evokes friendliness) — the reason 'environmental' risk factors correlate with genotype.",
        "THE LOD CONVENTIONS: lod ≥ 3 = 1000:1 odds (nominal P ≈ 0.0001) accepts linkage; lod ≤ −2 excludes; 1 cM ≈ 1% recombination; the sex-averaged genome ~3,700 cM; whole-genome search with 200–300 evenly-spaced markers.",
        "LINKAGE VERSUS ASSOCIATION: association more powerful for small effects; candidate genes (DRD2, 5-HTT) versus whole-genome (HapMap, linkage disequilibrium, tagging SNPs); population stratification the trap, family-based designs the defence.",
        "THE IMPRINTING TIER: ~60 documented imprinted genes; maternal genes enhance and paternal genes reduce brain size; Rett, Prader-Willi, Angelman, Turner as the imprinting disorders of intellectual disability; the same deletion giving Prader-Willi (paternal) or Angelman (maternal).",
        "ANTICIPATION: earlier onset, greater severity across generations — molecularly explained by unstable nucleotide repeat expansions: Huntington's and fragile X.",
      ],
      pyqConcepts: [
        "The threshold-model drawing with the shifted relatives' curve — the recurring long-form favourite.",
        "Heritability-interpretation MCQs — the population-not-individual trap set with a 50% figure.",
        "Lod score 3 = 1000:1 odds — the linkage one-liner that recurs across formats.",
        "The same-deletion-different-parent question — Prader-Willi versus Angelman, imprinting's textbook examination.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-year-old man with recently diagnosed schizophrenia, stable on treatment, is brought by his parents: a marriage alliance is under negotiation, and the family asks directly whether his children will develop the illness — the pedigree shows one affected maternal uncle and no consanguinity; the counselling resolves through the threshold model's figures (population ~1%; one affected parent ~10-13%; both parents higher), the determinism correction delivered in the same breath (PKU fully genetic, fully diet-preventable; half of identical co-twins never develop the disorder), and the marriage-alliance confidentiality held — honest probabilistic answers without stigmatising labels; the teaching: the question is a genetics consultation, not a yes-or-no, and the pedigree plus the risk figures plus the correction is the complete answer.",
        "A 15-year-old boy with moderate intellectual disability and behavioural problems is brought to the district OPD; his maternal uncle has lifelong intellectual disability, and the mother reports the family's affected males appearing only through daughters; examination notes macro-orchidism — the X-linked pattern (no father-to-son transmission anywhere in the pedigree) plus the physical sign earns fragile-X DNA testing, available in the Indian metros; the mother's own status (carrier mother → half of sons affected, half of daughters carriers) frames the counselling for the unaffected 12-year-old sister as a later, planned conversation; the teaching: the fragile-X rule is a pattern-recognition question, and the metabolic/recessive differential (consanguinity absent here) is separated by the pedigree's male-line geometry.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Fragile X: X-linked — no father-to-son transmission; carrier mother → half of sons affected, half of daughters carriers.",
        "Huntington's disease: autosomal dominant, with anticipation by unstable nucleotide repeat expansion.",
        "Phenylketonuria: autosomal recessive, commoner with consanguinity — fully genetic, fully preventable by diet.",
        "The threshold model: relatives' liability distributions shifted right — familial aggregation without Mendelian ratios.",
        "Lod ≥ 3 = 1000:1 odds of linkage; lod ≤ −2 excludes.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The pedigree is the most informative genetic assessment available for psychiatric disorders — the clinical genetic test every clinician already owns, and in the Indian district the only affordable one.",
        "The G×E prevention reframe: vulnerability genes (MAOA × maltreatment in the post-Oxford literature) mean child protection is genetic medicine — protection matters most precisely where genetic risk is highest.",
        "The gene-environment correlation correction before any environmental causal claim: life events and parenting styles partly reflect genetic propensities — the sociable child seeks and evokes the world that then gets called his environment.",
        "The honest genetics consult: no gene test diagnoses schizophrenia, bipolar disorder or depression; the clinical translation is risk quantification and pharmacogenetics — the couple with both parents affected deserves specialist referral, not an improvised prediction.",
        "The Indian consanguinity discipline: the marriage-pattern enquiry as the pedigree's opening move, the fragile-X rule (macro-orchidism or the male-line pattern earns metro testing), and the neonatal PKU screen's unevenness across states named as the preventable-burden frontier.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The marriage alliance and the risk question",
      presentation: "A young man's schizophrenia is stable; the family's question is not about treatment but about the marriage under negotiation — will his children get it?",
      initialPresentation: "A 26-year-old man, six months recovered from a first episode of schizophrenia and stable on maintenance treatment, attends with both parents. The parents wait until the patient steps out for an investigation, then ask the question directly: an alliance is under negotiation, and the prospective in-laws know nothing of the diagnosis; will his children develop the illness?",
      history: "One maternal uncle with chronic schizophrenia, treated irregularly; no other affected relatives across three generations; the parents are unrelated (the marriage-pattern enquiry negative). The family's explanatory frame is that the illness 'came from the mother's side' and will therefore 'pass to every child'; they have read a 50% figure somewhere and have half-decided against the marriage proceeding.",
      examination: "The patient himself, seen separately, is in remission with good insight; he asks a second question — his younger brother, 23 and unaffected, wants to know his own risk. Mental state between the two conversations is unremarkable; the genetics of the situation lives entirely in the pedigree.",
      diagnosis: "No genetic diagnosis — a threshold-model counselling consultation: familial aggregation of schizophrenia without Mendelian pattern, riding on a misremembered 50% figure.",
      management: "The pedigree drawn with the family (three generations, the uncle marked, consanguinity excluded); the figures given honestly: general population ~1%; one affected parent ~10-13% (the chapters' counselling figure for DZ co-twin/child: ~10-15%); both parents higher — a question for specialist referral should that arise; the unaffected brother's figure ~5-8%; the MZ co-twin figure reserved for the twin who actually asks. The determinism correction delivered with the numbers — PKU fully genetic and fully diet-preventable; every disorder in this family responding to treatment, as the patient's own remission demonstrates. The marriage-alliance disclosure handled as the family's decision: honest probabilistic answers without stigmatising labels, confidentiality guarded, timing theirs.",
      outcome: "The family left with the figures written down and the 50% misreading corrected; the alliance proceeded with disclosure at the family's chosen timing; the brother attended one further session for his own risk; the patient continued maintenance treatment — the genetics consultation having strengthened, not undermined, the treatment alliance.",
      teachingPoints: [
        "The misremembered Mendelian ratio (50%) is the commonest contamination of psychiatric genetic counselling — the threshold model's figures are the correction.",
        "The determinism correction travels with every figure: PKU is the one-example answer to 'genetic means nothing can be done'.",
        "Marriage-alliance genetics is the Indian counselling reality: confidentiality, stigma and honest numbers converging — the clinician's task is probabilistic truth without stigmatising labels.",
        "The unaffected sibling's question deserves its own answer (~5-8%), not a dismissed reassurance — and the MZ co-twin figure is given only to the twin who asks, always with its converse.",
      ],
    },
    {
      title: "The boy whose pedigree drew the map",
      presentation: "Fifteen years of intellectual disability read as non-specific — until the family's male-line geometry and one physical sign earned the specific test.",
      initialPresentation: "A 15-year-old boy with moderate intellectual disability, hyperactivity and behavioural outbursts is brought to the district OPD for behavioural management. His mother, answering the pedigree questions, mentions that her brother — the boy's maternal uncle — has lifelong intellectual disability and lives with the grandparents; two other maternal aunts' sons, she recalls, 'were slow too'.",
      history: "The boy's early milestones were delayed; schooling failed by the third standard; behavioural problems have intensified through adolescence. No seizures, no regression. The affected relatives — the uncle and the cousins — are all on the mother's side of the family, all male, all connected through unaffected mothers; no affected male transmits to sons anywhere in the pedigree. The parents are unrelated; the affected males appear only through daughters.",
      examination: "Dysmorphic review notes macro-orchidism on genital examination — the physical sign completing the pattern. Otherwise the examination is that of non-syndromic intellectual disability; no café-au-lait spots, no neurocutaneous stigmata, no movement disorder.",
      diagnosis: "Fragile X syndrome suspected on the two-rule basis the note teaches: any male intellectual disability with macro-orchidism, or any family X-linked inheritance pattern (affected males through daughters) — earns fragile-X testing.",
      management: "Referral for fragile-X DNA testing, available in the Indian metros — the diagnosis confirmed by the laboratory, not assumed at the bedside. Genetic counselling reframed for the family: the mother is a carrier — a carrier mother transmits to half of sons (affected) and half of daughters (carriers); an affected father would transmit to all daughters and never to sons — the geometry the pedigree already drew. The unaffected 12-year-old sister's carrier question planned as a separate, age-appropriate conversation rather than an improvised bedside answer. Behavioural management continued alongside; the metabolic-mimic differential (consanguinity absent) closed by the pedigree itself.",
      outcome: "Testing confirmed fragile X syndrome; the behavioural programme was adjusted with the diagnosis in view; the mother attended counselling and later brought her sister (mother of one of the affected cousins) for the same conversation; the sister's carrier testing was planned for her mid-adolescence with the family's consent — the pedigree, in the end, having drawn the map that the district OPD could act on.",
      teachingPoints: [
        "The fragile-X rule is two-pattern recognition: macro-orchidism in male intellectual disability, or affected males appearing only through daughters — either earns the test, available in Indian metros.",
        "The X-linked geometry is the pedigree's own teaching: no father-to-son transmission, carrier mothers at the centre of the male-line cluster.",
        "Carrier counselling for the unaffected sister is a planned conversation, not a bedside aside — half of daughters of carrier mothers are carriers.",
        "The consanguinity enquiry (negative here) is what separates the X-linked pattern from the recessive-mimic differential — the marriage-pattern question earns its place in every paediatric genetics assessment.",
      ],
    },
  ],
  clinicalPearls: [
    "Two engines, one discipline: quantitative genetics (twin, family, adoption studies quantifying heritability and environment) and molecular genetics (linkage, association, the whole-genome search for actual risk genes).",
    "The single-gene psychiatric examples to recite cold: autosomal dominant — Huntington's and acute intermittent porphyria; autosomal recessive — PKU with consanguinity; X-linked — fragile X, with no father-to-son transmission.",
    "The threshold model in one figure: liability normally distributed, affection beyond a threshold, relatives' liability distributions shifted right — familial aggregation without Mendelian ratios.",
    "PKU is fully genetic and fully preventable by diet — the heritability-misuse answer in a single example; genetic risk is never genetic determinism.",
    "The MZ concordance of ~50% in schizophrenia is the ceiling, not the rule — half of identical co-twins never develop the disorder, the most reassuring true sentence in psychiatric genetics.",
    "The twin equations: rmz = h² + c² and rdz = ½h² + c² — with zygosity by DNA typing and the equal-environments assumption tested, not assumed.",
    "Kendler's G×E finding: those at higher genetic risk of major depression are more sensitive to the depressogenic effects of adverse life events — protection matters most where genetic risk is highest.",
    "The gene-environment correlation trio: passive (sociable parents provide genes and environment both), active (the sociable child seeks situations), evocative (the sociable child evokes friendliness) — many 'environmental' risk factors partly reflect genetic propensities.",
    "The lod conventions: ≥3 accepts linkage at 1000:1 odds (nominal P ≈ 0.0001); ≤ −2 excludes; 1 cM ≈ 1% recombination; a whole-genome search needs only 200–300 evenly-spaced markers.",
    "The same deletion produces Prader-Willi from the paternal copy and Angelman from the maternal — imprinting's textbook demonstration, and the four imprinting disorders of intellectual disability are Rett, Prader-Willi, Angelman and Turner.",
    "The maternal-care rat work: licking-grooming altering brain glucocorticoid-receptor expression and stress sensitivity through DNA methylation and histone acetylation — persisting two generations and reversible; environment writing on expression without changing the sequence.",
    "The verdict and the instrument: many variants of small effect, no gene test for diagnosis, clinical translation as risk quantification and pharmacogenetics — and the pedigree, the most informative genetic assessment available, in every clinician's hands already.",
  ],
  highYieldSummary: [
    "THE TWO ENGINES: quantitative genetics (twin, family and adoption studies quantifying heritability, environment and their interplay) and molecular genetics (linkage, association and the whole-genome search for actual risk genes). Mendel's foundation: heredity through discrete units — genes (named 1909), with alleles (alternative forms), genotype (the genetic endowment) and phenotype (the observed characteristic); the laws of dominance (heterozygotes display the dominant phenotype), segregation (intercrossed F1 heterozygotes give 1:3 recessive:dominant phenotypes, 1:2:1 genotypes) and independent assortment. Continuous traits follow the same principles: one locus with two alleles gives three phenotypic classes, adding loci multiplies them (2n + 1) toward the normal distribution — polygenic inheritance, multifactorial with environment, with the Hardy-Weinberg equilibrium (p²:2pq:q²) as the population baseline.",
    "THE THRESHOLD MODEL AND ITS SIBLINGS: most psychiatric disorders are neither Mendelian nor continuous but quasi-continuous (affected individuals gradeable along severity); the polygenic/multifactorial threshold model — a continuously distributed liability, affection beyond a threshold, relatives' liability distributions shifted right — explains familial aggregation without Mendel's ratios. The alternative models in the same family: single-major-locus with incomplete penetrance (the probability of manifesting with a given genotype, between 0 and 1); variable expression (neurofibromatosis, from café-au-lait spots to the full syndrome); anticipation (earlier onset, greater severity across generations, molecularly explained by unstable nucleotide repeat expansions — Huntington's, fragile X); imprinting (parent-of-origin-dependent manifestation — Prader-Willi, Angelman); mixed models (major gene + polygenic) and oligogenic models.",
    "THE VARIANCE PARTITION AND ITS CAUTIONS: phenotypic variance = genetic + shared environmental + non-shared environmental (including error); genetic variance subdividing into additive and dominance effects; heritability narrow-sense (h² = va/vp) and broad-sense (vg/vp). The three interpretive cautions: population-not-individual (a 50% population heritability of IQ does not mean 50% of any individual's IQ is genetic); population-specific (estimates differ between populations); modifiability-agnostic (heritability says nothing about environmental treatability — PKU fully genetic yet fully diet-preventable). The non-additive layers: epistasis (gene-gene interaction across loci); gene-environment interaction (genetic differences in environmental response); gene-environment correlation (passive, active, evocative — the sociable-parent/child examples) — with the critical implication that many 'environmental' risk factors correlate with genetic risk.",
    "THE RESEARCH DESIGNS: family studies (aggregation; family-history versus family-study methods; ascertainment and age-correction by the Slater-Stromgren adaptation of Weinberg's method); twin studies (MZ 100% shared genes versus DZ 50%; intraclass correlations for continuous traits, pairwise and probandwise concordance for dichotomous; rmz = h² + c² and rdz = ½h² + c², decomposed by path analysis or model-fitting with Mx software; the equal-environments assumption tested with measured sharing, most studies supporting it; zygosity by DNA typing, questionnaires 95%+ accurate); adoption studies in their three designs (adoptee, adoptee's-family, cross-fostering — the G×E experiment), with non-random placement the standing caveat. The classic multivariate findings: the same genes, different non-shared environments, in anxiety and depressive disorders; the genetic contribution to depression symptoms and IQ increasing from childhood to adolescence; broader cognitive-social phenotypes in autism relatives. The G×E demonstrations: maltreatment environmentally-mediated versus corporal punishment genetically-mediated effects on antisocial behaviour; Kendler's finding that higher genetic risk of major depression heightens sensitivity to the depressogenic effects of adverse life events; adoption evidence that antisocial-behaviour risk multiplies in high-genetic-risk offspring exposed to adverse rearing.",
    "THE MOLECULAR MACHINERY: DNA (the double helix, A-T/C-G complementarity, 5'/3' polarity) and RNA (single-stranded, mediating expression); transcription (splicing out introns, capping, polyadenylation) and translation (the three-letter code); genome organisation (chromosomes with centromeres, p and q arms, telomeres of TTAGGG repeats; the 3.3-gigabase, ~22,000-gene nuclear genome plus the small maternally-inherited mitochondrial genome). Gene regulation: transcription factors and pleiotropy (the ATRX example — α-thalassaemia, facial appearance, developmental delay, hypotonia, genital abnormalities from one X-linked chromatin-remodelling gene); DNA methylation (CpG dinucleotides, gene repression, reversible but maintained through cell division); imprinting (~60 documented genes; maternal genes enhancing and paternal genes reducing brain size; Rett, Prader-Willi, Angelman and Turner as the imprinting disorders of intellectual disability; X-inactivation; the Skuse Turner-syndrome work linking maternally-expressed X-linked genes to hippocampal and paternally-expressed to caudate/thalamic development). The epigenetic programming finding: maternal care (rat licking-grooming) altering brain glucocorticoid-receptor expression and stress sensitivity in offspring — observable with cross-fostered pups, mediated by DNA methylation and histone acetylation, persisting two generations and reversible.",
    "GENE MAPPING: linkage — the co-segregation of a disorder with genetic markers in families; the recombination fraction θ (0.5 for unlinked loci, smaller for closely linked; genetic distance in centimorgans, 1 cM ≈ 1% recombination; the sex-averaged genome ~3,700 cM; whole-genome search with 200–300 evenly-spaced markers); lod scores (the log-of-odds for linkage at a given θ versus 0.5; lod ≥ 3 = 1000:1 odds accepting, lod ≤ −2 excluding); the model-specification problem (mis-specified penetrance → missed linkage) and locus heterogeneity (Usher's syndrome with six genes; early-onset Alzheimer's with presenilin 1, presenilin 2 and amyloid precursor protein). Association — allelic association more powerful than linkage for small effects; candidate-gene studies (the DRD2 and 5-HTT traditions) versus whole-genome association (the HapMap's common-variation catalogue, linkage disequilibrium, haplotypes, tagging SNPs); population stratification the spurious-association trap, family-based designs (the TDT) the defence. The molecular tools: polymerase chain reaction, microarrays, expression profiling, the genome browsers (Ensembl, UCSC).",
    "THE VERDICT AND THE CLINICAL TRANSLATION: for the major disorders (schizophrenia, bipolar disorder, depression) twin studies establish substantial heritability; linkage found occasional major-locus families but few replicable loci; association and the whole-genome era confirmed polygenicity — many variants of small effect — with gene-environment interaction and correlation entangling the risk architecture, and the rare-variant and copy-number-variant stories (DISC1, neuregulin, the 22q11 deletion, GWAS's schizophrenia hits — post-Oxford developments) continuing the theme. The clinical deliverables: genetic counselling on the threshold model's figures (schizophrenia: population ~1%; MZ co-twin ~50%; DZ/child ~10-15%; one parent ~10-13%; sibling ~5-8%), framed probabilistically and never deterministically; the heritability-misuse correction (the PKU paradigm); the G×E reframing of prevention — child protection as genetic medicine; the pedigree as the clinical genetic test; and the India layer — consanguinity's recessive burden, the fragile-X rule with metro testing, the marriage-alliance disclosure dilemmas, and the neonatal PKU screen's unevenness as the preventable-burden frontier.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pg-quiz-1",
      question: "The polygenic threshold model of psychiatric disorders proposes:",
      options: ["A single dominant gene in every family", "A normally distributed liability, with affected individuals beyond a threshold and relatives' liability distributions shifted rightward", "Pure environmental causation", "Mitochondrial inheritance"],
      correctIndex: 1,
      explanation: "The elegant reconciliation: familial aggregation without Mendelian ratios — a continuum of inherited vulnerability with a manifest threshold.",
      afterSectionId: "mechanism",
    },
    {
      id: "pg-quiz-2",
      question: "The single-gene disorder patterns of psychiatric relevance pair correctly as:",
      options: ["Autosomal dominant: Huntington's; autosomal recessive: PKU; X-linked: fragile X", "Autosomal dominant: PKU; autosomal recessive: fragile X; X-linked: Huntington's", "Autosomal dominant: fragile X; autosomal recessive: Huntington's; X-linked: PKU", "All three are autosomal dominant with variable expression"],
      correctIndex: 0,
      explanation: "Autosomal dominant — Huntington's and acute intermittent porphyria; autosomal recessive — phenylketonuria, with consanguinity deepening it; X-linked — fragile X, with no father-to-son transmission.",
      afterSectionId: "symptoms",
    },
    {
      id: "pg-quiz-3",
      question: "A lod score of 3 in linkage analysis corresponds to:",
      options: ["3% probability of linkage", "Odds on linkage of 1000:1 (nominal P ≈ 0.0001), the accepted linkage-detection convention", "Three markers", "3 centimorgans"],
      correctIndex: 1,
      explanation: "Morton's convention: lod ≥ 3 accepts, lod ≤ −2 excludes linkage — with 1 cM ≈ 1% recombination and the sex-averaged genome at ~3,700 cM.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pg-quiz-4",
      question: "Imprinting is relevant to intellectual disability through:",
      options: ["Maternal malnutrition", "Parent-of-origin-dependent gene expression: Rett, Prader-Willi, Angelman and Turner syndromes", "Twin studies", "Population stratification"],
      correctIndex: 1,
      explanation: "The same deletion producing Prader-Willi (paternal) or Angelman (maternal) depending on the deleted parent's copy — imprinting's textbook demonstration; the Skuse work maps the parent-of-origin effects onto hippocampal and caudate/thalamic development.",
      afterSectionId: "brain",
    },
    {
      id: "pg-quiz-5",
      question: "Kendler's twin-study demonstration of gene-environment interaction in depression showed:",
      options: ["Life events affect only those without genetic risk", "Individuals at higher genetic risk of major depression are more sensitive to the depressogenic effects of adverse life events", "Genes and environment never interact", "Identical twins never develop depression"],
      correctIndex: 1,
      explanation: "The interaction: genetic susceptibility amplifying environmental sensitivity — the prevention implication being that protection matters most precisely where genetic risk is highest.",
      afterSectionId: "management",
    },
    {
      id: "pg-quiz-6",
      question: "In the Indian pedigree, cousin marriage in the family history most directly raises suspicion of:",
      options: ["Autosomal dominant disorders", "X-linked disorders", "Autosomal recessive disorders — homozygosity for the same rare variant", "Mitochondrial disorders"],
      correctIndex: 2,
      explanation: "Consanguinity raises the chance both parents carry the same rare variant — the PKU-like metabolic disorders presenting as intellectual disability and psychiatric symptoms; the pedigree with marriage-pattern enquiry and newborn screening are the responses.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite Mendel's three laws with the ratios, the six vocabulary terms, and the three single-gene patterns with one psychiatric example each.", answer: "THE LAWS: dominance (heterozygotes Aa display the dominant phenotype); segregation (intercrossing F1 heterozygotes produces recessive:dominant in 1:3, genotype proportions 1:2:1); independent assortment (traits transmitted independently when genes are on different chromosomes or far apart). THE VOCABULARY: gene (the discrete unit, named 1909), allele (alternative form), genotype (the genetic endowment), phenotype (the observed characteristic), plus dominance and segregation themselves. THE PATTERNS: autosomal dominant — one allele suffices, every generation affected, heterozygote parent → 50% of offspring (Huntington's disease, acute intermittent porphyria); autosomal recessive — two alleles needed, skips generations, carrier parents, commoner with consanguinity (phenylketonuria); X-linked — carrier mother → half of sons affected, half of daughters carriers; affected father → all daughters carriers; no father-to-son transmission (fragile X).", topic: "Foundations" },
    { question: "Draw the threshold model and explain what it predicts for relatives' risk.", answer: "THE DRAWING: a normal distribution of liability in the population, a threshold to its right, the affected proportion the tail beyond it; a second distribution — the relatives' — drawn shifted to the right of the population's, so a greater proportion of it exceeds the threshold. THE PREDICTIONS: familial aggregation without Mendelian ratios (no 1:2:1, no 50% — instead smoothly rising empirical risk); risk increasing with kinship (schizophrenia: general population ~1%; MZ co-twin ~50%; DZ co-twin or child of an affected parent ~10-15%, the counselling phrasing ~10-13%); risk never reaching certainty even for identical twins — half of MZ co-twins never develop the disorder; and quasi-continuous severity among the affected (gradeable along the liability curve). THE ALTERNATIVE MODELS it sits beside: single-major-locus with incomplete penetrance; variable expression; anticipation (repeat expansions — Huntington's, fragile X); imprinting; mixed and oligogenic models.", topic: "The threshold model" },
    { question: "Write the variance partition, define narrow- and broad-sense heritability, and recite the three interpretive cautions with the PKU example.", answer: "THE PARTITION: phenotypic variance vp = genetic variance vg + shared environmental vc + non-shared environmental ve (including error); genetic variance subdivides into additive (va) and dominance (vd) effects. THE DEFINITIONS: narrow-sense heritability h² = va/vp; broad-sense = vg/vp; with analogous proportions for shared (c²) and non-shared (e²) environment. THE THREE CAUTIONS: (1) POPULATION-NOT-INDIVIDUAL — a 50% population heritability of IQ does not mean 50% of any individual's IQ is genetic; (2) POPULATION-SPECIFIC — estimates differ between populations; (3) MODIFIABILITY-AGNOSTIC — heritability says nothing about environmental treatability. THE PKU EXAMPLE: phenylketonuria is fully genetic yet fully preventable by diet — the one-example answer to 'it's genetic, so nothing can be done', and the reason every psychiatric heritability estimate coexists with environmental modifiability.", topic: "Heritability" },
    { question: "Define gene-environment interaction, the three gene-environment correlations and epistasis — with the sociable-parent/child examples and the Kendler finding.", answer: "GENE-ENVIRONMENT INTERACTION (G×E): genetic differences in response to environments — those at genetic risk manifesting only with exposure, the exposed not all developing the disorder; Kendler's demonstration: individuals at higher genetic risk of major depression are more sensitive to the depressogenic effects of adverse life events (protection matters most precisely where genetic risk is highest). GENE-ENVIRONMENT CORRELATION (genotype shaping the environment experienced): PASSIVE — sociable parents provide both sociability genes and a socialising environment; ACTIVE — the sociable child seeks social situations; EVOCATIVE — the sociable child evokes friendly responses. The critical implication: many 'environmental' risk factors (life events, parenting styles) correlate with genetic risk — cautioning against pure-environmental causal claims and requiring genetically sensitive designs. EPISTASIS: gene-gene interaction across loci.", topic: "G×E and rGE" },
    { question: "Recite the twin method: the model equations, the correlation types, and the criticisms with their answers.", answer: "THE DESIGN: MZ twins share 100% of genes, DZ 50% — the natural experiment genetics could never ethically design; intraclass correlations for continuous traits, concordance rates (pairwise and probandwise) for dichotomous. THE EQUATIONS: rmz = h² + c²; rdz = ½h² + c² — decomposed by path analysis or model-fitting (Mx software, likelihood maximisation, χ² comparisons, the likelihood-ratio test). THE CRITICISMS AND ANSWERS: the equal-environments assumption (that MZ and DZ environments are equally similar) — tested with measured environmental sharing, most studies supporting it; zygosity determination — DNA typing ideal, questionnaires 95%+ accurate; twin representativeness — psychiatric disorder rates not elevated in twins; twinness itself — the residual worry that being a twin changes development. THE ADOPTION COMPLEMENT: three designs (adoptee, adoptee's-family, cross-fostering — the G×E experiment), with adoption itself increasing some risk and non-random placement by agencies matching characteristics as the caveats.", topic: "Twin and adoption methods" },
    { question: "State the two classic multivariate model-fitting findings and the antisocial-behaviour G×E demonstrations.", answer: "THE MULTIVARIATE FINDINGS: (1) the SAME GENES, DIFFERENT NON-SHARED ENVIRONMENTS influencing anxiety and depressive disorders; (2) the genetic contribution to depression symptoms and IQ INCREASING FROM CHILDHOOD TO ADOLESCENCE — plus broader cognitive-social phenotypes in autism relatives. THE ANTISOCIAL-BEHAVIOUR DEMONSTRATIONS: the twin-study of maltreatment (environmentally mediated) versus corporal punishment (genetically mediated) effects on antisocial behaviour; and the adoption evidence that antisocial-behaviour risk multiplies in high-genetic-risk offspring exposed to adverse adoptive rearing — the cross-fostering logic in action. THE POST-OXFORD UPDATES: MAOA × maltreatment and the 5-HTT short variant × life stress (Caspi 2003) — the vulnerability-gene literatures that reframe prevention as environmental protection of the genetically at-risk.", topic: "Multivariate findings" },
    { question: "Apply linkage and association logic: recombination, centimorgans, the lod conventions, candidate versus whole-genome approaches, and the stratification trap.", answer: "LINKAGE: the co-segregation of a disorder with genetic markers in families; the recombination fraction θ (recombinants/total; 0.5 for unlinked loci, smaller for closely linked); genetic distance in centimorgans (1 cM ≈ 1% recombination; the sex-averaged human genome ~3,700 cM); whole-genome search with 200–300 evenly-spaced markers; lod scores — the log-of-odds for linkage at a given θ versus 0.5, with lod ≥ 3 (1000:1 odds; nominal P ≈ 0.0001) accepting and lod ≤ −2 excluding linkage; the model-specification problem (mis-specified penetrance → missed linkage) and locus heterogeneity (Usher's syndrome, six genes; early-onset Alzheimer's — presenilin 1, presenilin 2, amyloid precursor protein). ASSOCIATION: allelic association (a marker allele and the disease occurring together more often than by chance) more powerful than linkage for small effects; CANDIDATE-GENE studies test biologically plausible genes (the DRD2 and 5-HTT traditions); WHOLE-GENOME association scans systematically (the HapMap's common-variation catalogue, linkage disequilibrium, haplotypes, tagging SNPs); POPULATION STRATIFICATION — spurious association from population ancestry differences — is the trap, family-based designs (the TDT) the defence. THE VERDICT: for the common disorders, few replicable linkage loci and many variants of small effect.", topic: "Gene mapping" },
    { question: "Explain the molecular machinery: epigenetics, imprinting with its disorders, X-inactivation, and the maternal-care programming story.", answer: "EPIGENETICS: DNA methylation at CpG dinucleotides repressing genes — reversible but maintained through cell division — the environment writing on expression without changing the sequence. IMPRINTING: expression from only one parental chromosome (~60 documented genes); maternally-expressed genes ENHANCING and paternally-expressed genes REDUCING brain size; the imprinting disorders of intellectual disability: RETT, PRADER-WILLI, ANGELMAN and TURNER — with the same deletion producing Prader-Willi from the paternal copy and Angelman from the maternal, imprinting's textbook demonstration. X-INACTIVATION and the Skuse Turner-syndrome work: maternally-expressed X-linked genes influencing HIPPOCAMPIC development, paternally-expressed CAUDATE/THALAMIC development — with social-cognition implications. THE MATERNAL-CARE PROGRAMMING: rat licking-grooming altering brain glucocorticoid-receptor expression and stress sensitivity in offspring — observable with cross-fostered pups, mediated by DNA methylation and histone acetylation, persisting two generations and reversible — the biology of environmental programming, and a non-blaming framework for adversities' long reach.", topic: "Molecular machinery" },
  ],
  faqs: [
    { question: "Is schizophrenia genetic?", answer: "Partially: heritability is high — identical-twin concordance ~50% against a ~1% population rate — but no single gene causes it. Many genes of small effect combine with environment through the threshold model: genetic risk, not genetic destiny." },
    { question: "If it's genetic, can it be treated?", answer: "Yes: heritability measures the causes of differences in a population, not the modifiability of the condition. PKU is 100% genetic and 100% diet-preventable — and every psychiatric disorder with high heritability responds to treatment." },
    { question: "Will my children get it?", answer: "Probabilistically: one affected parent with schizophrenia raises a child's risk from ~1% to ~10-13%; with both parents affected the risk is higher; an unaffected sibling of an affected person carries ~5-8%. These are the threshold model's numbers, always framed with the determinism correction." },
    { question: "Why study twins?", answer: "Because comparing identical twins (100% shared genes) with fraternal twins (50% shared) decomposes observation into genes, shared environment and unique environment — the natural experiment genetics could never ethically design." },
    { question: "What did the genome project change?", answer: "The maps and databases (the HapMap, Ensembl) that made whole-genome searches possible; the discovery that 'junk' DNA regulates gene activity; and the confirmation of polygenicity — thousands of small effects, not disease genes." },
    { question: "Can trauma change genes?", answer: "It changes gene expression: methylation marks laid down by early caregiving and stress alter which genes are read, persist across generations in animals, and are potentially reversible — environment writing on genetics without changing the sequence." },
    { question: "My cousin married a cousin — does that matter?", answer: "Consanguinity raises the chance of recessive conditions — both parents carrying the same rare variant — and it matters for disorders like PKU and the metabolic intellectual-disability mimics. The pedigree-based counselling and newborn screening are the responses." },
    { question: "Is there a gene test for mental illness?", answer: "Not for the common disorders: no gene test diagnoses schizophrenia, bipolar disorder or depression. The clinical translation of psychiatric genetics is risk quantification and genetic counselling built on the family history — the pedigree remains the most informative genetic assessment available." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford chapters' genetic-counselling frame — the threshold model's probabilistic risk figures delivered with the determinism correction (paraphrased from the source chapters)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 2.4.1 (Thapar & McGuffin — quantitative genetics) + ch 2.4.2 (Flint — molecular genetics) — source chapters mapped; content rewritten and updated beyond them (2009)" },
    ],
    trials: [
      { source: "Kendler K S et al. (1995) — the twin-study demonstration of gene-environment interaction in depression" },
      { source: "Caspi A et al. (2003) — the 5-HTT × life-stress interaction (post-Oxford G×E landmark, flagged as update)" },
      { source: "DiLalla L F — the maltreatment-versus-corporal-punishment twin study of antisocial behaviour (as cited by the note)" },
    ],
    reviews: [
      { source: "Mendel G (1866) — the founding experiments; the 1909 vocabulary" },
      { source: "Fisher R A — the polygenic-biometric framework underlying the threshold model" },
      { source: "Falconer D S — the liability-threshold model" },
      { source: "Morton N E (1955) — the lod-score method" },
      { source: "International HapMap Consortium (2005) — the common-variation catalogue" },
      { source: "McGuffin P et al. / Neale M — the Mx model-fitting software and the twin analytic tradition" },
      { source: "Plomin R — the non-shared-environment and gene-environment correlation framework (as cited)" },
      { source: "Meaney M et al. / Weaver I et al. — the maternal-care methylation programming (the epigenetics reference)" },
      { source: "Skuse D et al. — the Turner-syndrome X-imprinting social-cognition work" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for families carrying the 'will my child get it?' question" },
      { source: "The three-generation pedigree — the one instrument this course hands to every clinician and family, and the clinical genetic test that already exists" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: how mental illness runs in families, what 'genetic' really means, why risk is never certainty, what the family tree is for.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "Mendel's laws, the single-gene patterns, the threshold model, heritability and its cautions, the twin and adoption designs.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the counselling figures, the lod conventions, the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything — the quantitative and molecular engines, the counselling craft, the consanguinity discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two engines, Mendel's laws, the single-gene patterns, the vocabulary.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state Mendel's three laws and match each single-gene pattern to its psychiatric example." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The threshold model, the variance partition, G×E, the gene-finding pathway, the epigenetic layer.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the threshold model, write the twin equations and state the lod conventions cold." },
    { number: 3, title: "Clinical Practice", description: "The pedigree as the clinical genetic test, the laboratory tier, the counselling figures.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can read a pedigree for the single-gene patterns and counsel the risk question with threshold-model figures." },
    { number: 4, title: "Indian Context", description: "Consanguinity, the fragile-X rule, marriage-alliance genetics, the service reality.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the marriage-pattern enquiry, apply the fragile-X rule and deliver the determinism correction." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the threshold-model essay and the heritability-interpretation MCQ cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 2.4.1 (Thapar & McGuffin — quantitative genetics) and ch 2.4.2 (Flint — molecular genetics) — source chapters mapped; content rewritten and updated beyond them", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Mendel G — the founding experiments (1866); the 1909 vocabulary of genes, alleles, genotype and phenotype", sourceType: "primary", year: "1866", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Fisher R A — the polygenic-biometric framework underlying the threshold model", sourceType: "primary", year: "early 20th century", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Falconer D S — the liability-threshold model", sourceType: "primary", year: "1960s", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Kendler K S et al. (1995) — the twin-study demonstration of gene-environment interaction in depression (higher genetic risk, greater sensitivity to the depressogenic effects of adverse life events)", sourceType: "primary", year: "1995", dateReviewed: "2026-09-30" },
    { id: "S6", source: "DiLalla L F — the maltreatment-versus-corporal-punishment twin study of antisocial behaviour (as cited by the note)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-30" },
    { id: "S7", source: "McGuffin P et al. / Neale M — the Mx model-fitting software and the twin analytic tradition (likelihood maximisation, χ² comparisons)", sourceType: "primary", year: "1980s–1990s", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Morton N E (1955) — the lod-score method (lod ≥ 3 accepting, ≤ −2 excluding)", sourceType: "primary", year: "1955", dateReviewed: "2026-09-30" },
    { id: "S9", source: "International HapMap Consortium (2005) — the common-variation catalogue enabling whole-genome association", sourceType: "primary", year: "2005", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Meaney M et al. / Weaver I et al. — the maternal-care methylation programming of glucocorticoid-receptor expression and stress sensitivity (the epigenetics reference)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Skuse D et al. — the Turner-syndrome X-imprinting social-cognition work (maternally-expressed hippocampal, paternally-expressed caudate/thalamic development)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Plomin R — the non-shared-environment and gene-environment correlation framework (passive, active, evocative; as cited)", sourceType: "review", year: "1980s–2000s", dateReviewed: "2026-09-30" },
    { id: "S13", source: "Caspi A et al. (2003) — the 5-HTT short variant × life-stress interaction, the post-Oxford G×E landmark flagged as update beyond the Oxford chapters", sourceType: "primary", year: "2003", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "Mendel's laws with the working vocabulary (gene, allele, genotype, phenotype), and the single-gene patterns of psychiatric relevance: autosomal dominant (Huntington's disease, acute intermittent porphyria; heterozygote parent → 50% of offspring), autosomal recessive (phenylketonuria; carrier parents, commoner with consanguinity) and X-linked (fragile X: carrier mother → half of sons affected, half of daughters carriers; affected father → all daughters carriers; no father-to-son transmission).", grade: "established", sources: ["S1", "S2"] },
    { text: "The polygenic/multifactorial threshold model: a continuously distributed liability with affection beyond a threshold and relatives' liability distributions shifted right — the explanation of the familial aggregation of common psychiatric disorders without Mendelian ratios; continuous traits approaching the normal distribution as loci are added (2n + 1 classes), with the Hardy-Weinberg equilibrium (p²:2pq:q²) as the population baseline.", grade: "established", sources: ["S1", "S3", "S4"] },
    { text: "The variance partition (vp = vg + vc + ve, with genetic variance subdividing into additive and dominance effects) with narrow-sense heritability h² = va/vp and broad-sense vg/vp; the three interpretive cautions — population-not-individual, population-specific, and modifiability-agnostic, the last proven by PKU being fully genetic yet fully preventable by diet.", grade: "established", sources: ["S1"] },
    { text: "The non-additive layers: epistasis (gene-gene interaction across loci); gene-environment interaction — genetic differences in environmental response, with Kendler's 1995 finding that individuals at higher genetic risk of major depression are more sensitive to the depressogenic effects of adverse life events; and gene-environment correlation — passive, active and evocative (the sociable-parent/child examples), with the implication that many 'environmental' risk factors correlate with genetic risk.", grade: "established", sources: ["S1", "S5", "S12"] },
    { text: "The twin method: MZ twins sharing 100% of genes against DZ's 50%; the model equations rmz = h² + c² and rdz = ½h² + c², decomposed by path analysis or model-fitting (Mx software, likelihood maximisation, χ² comparisons); the equal-environments assumption tested with measured environmental sharing (most studies supporting it); zygosity by DNA typing (questionnaires 95%+ accurate); twin representativeness supported (psychiatric disorder rates not elevated).", grade: "established", sources: ["S1", "S7"] },
    { text: "The adoption designs (adoptee, adoptee's-family, cross-fostering — the G×E experiment) with non-random placement as the standing caveat; and the classic multivariate findings — the same genes, different non-shared environments, influencing anxiety and depressive disorders; the genetic contribution to depression symptoms and IQ increasing from childhood to adolescence; broader cognitive-social phenotypes in autism relatives; maltreatment effects on antisocial behaviour environmentally mediated, corporal-punishment effects genetically mediated.", grade: "established", sources: ["S1", "S6", "S12"] },
    { text: "The linkage apparatus: co-segregation with markers in families; the recombination fraction and centimorgans (1 cM ≈ 1% recombination; the sex-averaged human genome ~3,700 cM; whole-genome search with 200–300 evenly-spaced markers); lod scores with lod ≥ 3 (1000:1 odds; nominal P ≈ 0.0001) accepting and lod ≤ −2 excluding linkage; the model-specification problem and locus heterogeneity (Usher's syndrome with six genes; early-onset Alzheimer's with presenilin 1, presenilin 2 and amyloid precursor protein).", grade: "established", sources: ["S1", "S8"] },
    { text: "The association apparatus: allelic association more powerful than linkage for small effects; candidate-gene studies (the DRD2 and 5-HTT examples) versus whole-genome association (the HapMap's common-variation catalogue, linkage disequilibrium, haplotypes, tagging SNPs); population stratification the spurious-association trap, with family-based designs the defence; the molecular tools — polymerase chain reaction, microarrays, expression profiling, the Ensembl and UCSC browsers.", grade: "established", sources: ["S1", "S9"] },
    { text: "The epigenetic and imprinting tier: DNA methylation at CpG dinucleotides (reversible but maintained through cell division); imprinting with expression from one parental chromosome (~60 documented genes), maternal genes enhancing and paternal genes reducing brain size; the imprinting disorders of intellectual disability (Rett, Prader-Willi, Angelman, Turner — the same deletion producing Prader-Willi from the paternal copy and Angelman from the maternal); X-inactivation; the Skuse Turner-syndrome work (maternally-expressed hippocampal, paternally-expressed caudate/thalamic development); the maternal-care methylation programming — glucocorticoid-receptor expression and stress sensitivity altered by rat licking-grooming, cross-fosterable, mediated by methylation and histone acetylation, persisting two generations and reversible.", grade: "established", sources: ["S1", "S10", "S11"] },
    { text: "The polygenic verdict: for the major disorders (schizophrenia, bipolar disorder, depression) twin studies establish substantial heritability; linkage found occasional major-locus families but few replicable loci; association and the whole-genome era confirmed many variants of small effect, with the rare-variant and copy-number-variant stories (DISC1, neuregulin, the 22q11 deletion, GWAS's schizophrenia hits — post-Oxford developments) continuing the theme; the clinical translation being risk quantification and pharmacogenetics, not gene tests for diagnosis.", grade: "established", sources: ["S1", "S9", "S13"] },
    { text: "The counselling figures: schizophrenia — general population ~1%; MZ co-twin ~50% (40-50% in the India-lens counselling phrasing); DZ co-twin or child of an affected parent ~10-15% (the FAQ's counselling phrasing ~10-13%); both parents affected higher; an unaffected sibling ~5-8% — delivered probabilistically and never deterministically, with the PKU determinism correction.", grade: "established", sources: ["S1"] },
    { text: "The post-Oxford G×E updates: the 5-HTT short variant × life-stress interaction (Caspi 2003) and the MAOA × maltreatment vulnerability-gene literature — prevention targeting the environments interacting with risk, child protection as genetic medicine.", grade: "proposed", sources: ["S13", "S1"], note: "Flagged by the note as post-Oxford updates beyond the Oxford chapters." },
    { text: "The India layer: consanguinity (cousin marriage in several South Indian communities) raising homozygosity for recessive conditions including the PKU-like metabolic disorders presenting as intellectual disability and psychiatric symptoms; the fragile-X rule (male intellectual disability with macro-orchidism, or an X-linked family pattern, earns testing — available in Indian metros); marriage-alliance disclosure dilemmas (confidentiality, stigma, counselling ethics); the service reality (karyotype, FISH, microarray in few centres; genetic counselling scarce; neonatal PKU screening uneven across states) — practice-pattern description from Indian clinical literature, context honestly labelled.", grade: "supported", sources: ["S1"] },
  ],
};
