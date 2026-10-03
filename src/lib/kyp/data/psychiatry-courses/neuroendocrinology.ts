import type { PsychiatryCourse } from "./types";

/**
 * NEUROENDOCRINOLOGY — canonical Psychiatry concept course
 * (migration batch 15, Group Q — Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/neuroendocrinology.md — untouched
 * foundation, itself an original rewrite of the Oxford
 * ch 2.3.3 synthesis: NOTP 2e, 2009, Part 1, Nemeroff &
 * Neigh — the axes, the neuroendocrine window, and the
 * HPA/CRF story of depression). Re-researched against the
 * lineages the note itself cites — Vale's 1981
 * characterisation of the 41-residue ovine CRF, the
 * Prange and Kastin TSH-blunting reports, Bunevicius's
 * thyroxine-versus-combination trial, the STAR*D level-3
 * T3 confirmation, the Board/Bunney/Hamburg and
 * Carroll/Sachar/Stokes/Besser founding HPA-depression
 * observations, Nemeroff's CSF-CRF and CRF-1 studies,
 * Holsboer's combined dexamethasone-CRF test and the
 * never-symptomatic relatives finding, Heim & Nemeroff's
 * early-adversity persistence with the CRF1-polymorphism
 * moderation, Sapolsky's glucocorticoid-hippocampal
 * damage, Checkley's clonidine-GH tradition, the
 * fenfluramine-prolactin studies, and Bissette's
 * somatostatin and CRF-neurone degeneration work — with
 * per-claim provenance.
 *
 * Drug routes: NONE — the note's endocrine interventions
 * (T3/liothyronine augmentation, T4, leuprolide,
 * dexamethasone) have no KYP drug lessons among the
 * platform's twelve, and the antidepressants it names are
 * research instruments (serotonergic probes) or response
 * hints, not treatment roles in a concept course;
 * drugLinks is empty by design and the honest boundaries
 * are recorded in contentGaps, never invented.
 *
 * Born-normalized metadata: title "Neuroendocrinology in
 * Psychiatry" (topic only, no em-dash subtitle), tagline
 * 80 characters, summary 39 words — this course meets the
 * final curriculum normalization rules on arrival.
 */
export const neuroendocrinologyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "neuroendocrinology",
  title: "Neuroendocrinology in Psychiatry",
  shortName: "Neuroendocrine",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Neuroendocrinology in Psychiatry"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The hypothalamic-pituitary axes: hormones as the brain's messengers and markers",

  summary:
    "The discipline that reads the hypothalamic-pituitary axes as a window on the brain. Its durable findings: HPA-axis hyperactivity and the CRF hypothesis of depression, the thyroid-depression relationship, blunted growth-hormone and prolactin probes, and the endocrine fingerprint of early adversity.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define neuroendocrinology's scope (the five components) and state the hormone-neurotransmitter pleiotropy principle with its two named examples (adrenaline in the adrenal medulla versus the CNS; CRF as hypothalamic hormone and extrahypothalamic neurotransmitter).",
    "Explain the neuroendocrine-window strategy, its assumption, and its limitation: why the monoamine circuits regulating hormone secretion may not resemble the pathophysiological circuits, and why the tuberoinfundibular prolactin window says nothing about limbic dopamine.",
    "Describe the generic hypothalamic-pituitary-end-organ architecture (releasing-factor transcription, portal transport, trophic-hormone release, end-organ secretion, feedback at pituitary and brain) with GnRH as the exemplar.",
    "Recite the HPT-depression findings: the four grades of hypothyroidism; the blunted TSH response to TRH in approximately 25% of depressives; the T3 (25–50 μg) acceleration and augmentation findings (STAR*D); the grade-4 autoimmunity of comorbid depression-anxiety.",
    "Recite the HPA/CRF story: cortisol and CSF-CRF hypersecretion; ACTH co-secretion with pituitary and adrenal enlargement; CRF-1 downregulation; the dexamethasone suppression test and the combined Dex-CRF test with the never-symptomatic relatives finding; CRF's depressogenic-anxiogenic preclinical profile; the CRF-1-antagonist direction; hippocampal glucocorticoid damage; the early-abuse persistence with CRF1-receptor polymorphisms.",
    "State the growth-hormone findings (the clonidine-blunted response, its trait persistence and its suicide-attempt robustness) and the axis's uniquenesses: dual regulation by somatostatin and GHRH, and no single target gland.",
    "Summarise the HPG-axis literature honestly (the small database, the menopausal-phase and contraceptive controls demanded, leuprolide in premenstrual syndrome, the oestrogen and testosterone data) and the prolactin-serotonin story: blunted responses to serotonergic probes, 5-HT1A mediation, and the cluster-B and borderline findings.",
    "Name the systemic-disease implications of the HPA findings (coronary disease, stroke, reduced bone density, inflammation) and the chapter's closing research agenda of PET-ligand receptor measurement in living brain.",
  ],
  quickFacts: [
    { label: "The founding principle", value: "One molecule, two jobs", detail: "Pleiotropy: the same substance acts as a hormone at one site and a neurotransmitter at another; adrenaline in the adrenal medulla versus the CNS; CRF as hypothalamic hypophysiotrophic hormone and extrahypothalamic neurotransmitter; TRH likewise: the reason the endocrine/neuronal demarcations lost their heuristic value" },
    { label: "The biggest finding", value: "HPA hyperactivity in depression", detail: "The chapter's claim: HPA-axis hyperactivity in a significant subgroup of major depression is the most important finding in all of biological psychiatry; cortisol and CSF-CRF hypersecretion, ACTH co-secretion with pituitary and adrenal enlargement, CRF-1 downregulation, everything normalising on recovery" },
    { label: "The thyroid ladder", value: "Four grades", detail: "Grade 1 classic primary (raised TSH, low hormones, exaggerated TRH response); grade 2 normal hormones with raised basal TSH; grade 3 normal basal everything with exaggerated TRH response on stimulation only; grade 4 all tests normal with antithyroid antibodies: untreated patients progress from grade 4 to grade 1" },
    { label: "The blunting quartet", value: "TSH, ACTH, GH, prolactin", detail: "Blunted TSH response to TRH in ~25% of depressives; blunted ACTH response to intravenous CRF (downregulated corticotrophs); blunted GH response to clonidine: the most consistent affective-disorders finding; blunted prolactin responses to serotonergic probes in depression and cluster-B/borderline personality" },
    { label: "The dissociated pattern", value: "PTSD's signature", detail: "Elevated CSF-CRF with normal or reduced adrenocortical activity: the opposite signature to melancholia's hypercortisolism; one axis, two signatures, and the reason trauma's antidepressant response differs" },
    { label: "The augmentation dividend", value: "T3, 25–50 μg", detail: "Both accelerates antidepressant onset and converts non-responders: confirmed in STAR*D; hypothyroid patients (and animals) respond poorly to antidepressants; post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius)" },
    { label: "The adversity fingerprint", value: "Early abuse recalibrates the axis", detail: "Persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early untoward life events (child abuse and neglect, demonstrated in rats, primates and humans of both sexes) with CRF1-receptor SNPs conferring vulnerability or resistance to depression after abuse" },
    { label: "The systemic turn", value: "Depression as internal-medicine risk state", detail: "Increased coronary artery disease and stroke, perhaps cancer, reduced bone density with hip-fracture risk, raised inflammatory measures: possibly mediated by the endocrine alterations themselves: the neuroendocrine findings becoming internal-medicine findings" },
  ],
  knowledgeGraph: [
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The findings' home: HPA hyperactivity in a significant subgroup, the ~25% TSH blunting, the clonidine-GH trait marker, the T3 augmentation step in the algorithm" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The dissociated pattern: elevated CSF-CRF with normal or reduced adrenocortical activity: trauma's physiology against melancholia's hypercortisolism" },
    { label: "Neurotransmitters & Signalling", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The monoamine systems behind the window: the raphe and locus-coeruleus projection logic that made it plausible, and the dopamine circuits that broke it" },
    { label: "Genetics in Psychiatry", type: "condition", href: "/psychiatry/psychiatric-genetics/", note: "The CRF1-receptor SNPs conferring vulnerability or resistance to abuse-related depression: the gene-environment bridge (migrating in this same batch)" },
    { label: "Brain Imaging in Psychiatry", type: "condition", href: "/psychiatry/neuroimaging/", note: "The structural HPA findings read by scanner: adrenocortical and pituitary enlargement on CT and MRI, and the hippocampal volume story (migrating in this same batch)" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "Elderly depressives' increasing adrenocortical activity: the hippocampal glucocorticoid-damage hypothesis at the aging interface" },
    { label: "Hypothalamus (paraventricular nucleus)", type: "brain-region", href: "#brain", note: "The axis head: the magnocellular vasopressin-oxytocin neurones, the releasing factors, the tuberoinfundibular dopamine cells" },
    { label: "Pituitary", type: "brain-region", href: "#brain", note: "The trophic amplifier: ACTH with its pro-opiomelanocortin co-products, the downregulated corticotrophs, the enlarged gland of the depressed state" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The glucocorticoid feedback site chronic cortisol damages: the MRI-documented neuronal loss of the aging-depression story" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The mesolimbicocortical dopamine target the prolactin window cannot see: the circuit-dissociation caveat's address" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The engine of psychiatric neuroendocrinology is the hypothalamic-pituitary axis itself. Neurones are true endocrine tissue: magnocellular paraventricular cells synthesise vasopressin and oxytocin and release them from the posterior pituitary, while the releasing and release-inhibiting factors (transcribed from prohormone DNA, translated in the endoplasmic reticulum, processed during axonal transport, packaged in terminal vesicles) reach the median eminence, enter the primary plexus of the hypothalamo-hypophyseal portal vessels, and act on adenohypophyseal trophic cells whose hormones drive the end-organ glands under pituitary and brain feedback. The founding dissolution follows: because one substance can be a hormone at one site and a neurotransmitter at another (adrenaline; CRF; TRH), the endocrine/neuronal/neuroendocrine demarcations lost their heuristic value, and plasma hormones became readable as an index of brain monoamine activity, the neuroendocrine window. The window's honesty is the dopamine caveat: the tuberoinfundibular system regulating prolactin has no reason to co-vary with the mesolimbicocortical pathway implicated in schizophrenia, so the prolactin-dopamine window tells nothing about limbic dopamine. The strategy was only ever plausible for the widely projecting raphe-serotonin and locus-coeruleus-noradrenaline systems. Through the window the field read its five axes: thyroid (four grades of hypothyroidism, the blunted TSH response to TRH in a quarter of depressives, the T3 acceleration and augmentation findings); adrenal (the CRF story: cortisol and CSF-CRF hypersecretion, ACTH co-secretion with pituitary and adrenocortical enlargement, CRF-1 downregulation, the dexamethasone and combined Dex-CRF tests, hippocampal glucocorticoid damage, and early-abuse persistence with CRF1-polymorphism moderation); growth hormone (the clonidine-blunted response, the most consistent affective-disorders finding); gonadal (the honest small database with the leuprolide-PMS exception); and prolactin (the blunted response to serotonergic probes, a 5-HT1A story). The window failed as a monoamine assay and succeeded beyond it: the CRF hypothesis of depression is its monument.",
    steps: [
      "The founding act: neurones as endocrine tissue; the magnocellular vasopressin-oxytocin system of the paraventricular hypothalamus releasing from the posterior pituitary, and the hypothalamic releasing-factor system controlling the anterior pituitary; the endocrine/neuronal demarcations then dissolved, because pleiotropy lets one substance act as hormone at one site and neurotransmitter at another (adrenaline, CRF, TRH).",
      "The generic axis architecture: transcription of the prohormone DNA, translation in the endoplasmic reticulum, processing during axonal transport, packaging in terminal vesicles, release at the median eminence into the primary plexus of the hypothalamo-hypophyseal portal vessels, humoral transport to the adenohypophyseal sinusoids, specific membrane receptors on trophic-hormone cells, trophic-hormone release, end-organ secretion, and feedback at pituitary and brain. GnRH (a decapeptide) driving LH and FSH the exemplar.",
      "The window strategy: basal and stimulated pituitary and end-organ hormones measured in plasma as an index of brain monoamine activity; plausible for the widely projecting raphe-serotonin and locus-coeruleus-noradrenaline systems, implausible for dopamine, where tuberoinfundibular prolactin regulation is physiologically unrelated to the mesolimbicocortical pathway of schizophrenia.",
      "The thyroid layer: the four grades of hypothyroidism (classic primary; raised basal TSH; exaggerated TRH response on stimulation only; antibody-positive with normal tests) with an inordinately high rate of HPT dysfunction in major depression, and the blunted TSH response to TRH in approximately 25% of depressives: best accounted for by chronic TRH hypersecretion with pituitary TRH-receptor downregulation (elevated CSF TRH in drug-free depressives the supporting evidence).",
      "The adrenal layer: stress drives paraventricular CRF through the portal system to corticotroph ACTH (co-secreted with pro-opiomelanocortin products) and adrenal cortisol; the axis hyperactive in a significant subgroup of major depression, with cortisol and CSF-CRF hypersecretion, adrenocortical and pituitary enlargement, CRF-1 receptor downregulation, a blunted ACTH response to intravenous CRF, normalisation on recovery, and prognostic persistence of abnormality.",
      "The adversity layer: early untoward life events leave HPA-axis and extrahypothalamic-CRF hyperactivity persisting into adult life (rats, primates and humans of both sexes), posited to underlie the abuse-depression vulnerability association, with CRF-1-receptor polymorphisms conferring vulnerability or resistance, and chronic cortisol damaging the hippocampal glucocorticoid-feedback site.",
      "The probe layer: growth hormone blunted to clonidine (the α2-agonist), apomorphine, desipramine and levodopa; the most consistent affective-disorders finding, trait-persistent and suicide-robust; prolactin blunted to serotonergic probes in depression and cluster-B/borderline personality, mediated by altered 5-HT1A receptor responsiveness: the axis whose prolactin-to-TRH response, unlike the TSH, does not blunt.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "hypothalamus-pvn", name: "Hypothalamus (paraventricular nucleus)", role: "The axis head: the magnocellular vasopressin-oxytocin neurones of the posterior-pituitary story, the hypophysiotrophic releasing factors released at the median eminence, and the arcuate/periventricular tuberoinfundibular dopamine cells; every axis this course reads begins here.", grade: "established" },
    { id: "pituitary", name: "Pituitary (the trophic amplifier)", role: "The adenohypophyseal trophic cells the portal system serves: corticotrophs co-secreting ACTH with pro-opiomelanocortin products (downregulated in depression, hence the blunted intravenous-CRF response), the thyrotrophs and somatotrophs of the stimulation probes, and the gland whose CT- and MRI-documented enlargement is part of the HPA finding.", grade: "established" },
    { id: "hippocampus-glucocorticoid", name: "Hippocampus (the glucocorticoid feedback site)", role: "The receptor field where cortisol's feedback closes, and the structure chronic glucocorticoid exposure damages: MRI-documented hippocampal neuronal loss, potentially explaining elderly depressives' increasing adrenocortical activity.", grade: "supported" },
    { id: "amygdala-dissociation", name: "Amygdala (the circuit-dissociation witness)", role: "A projection target of the mesolimbicocortical dopamine pathway (with accumbens and cortex) implicated in schizophrenia: the circuit the tuberoinfundibular prolactin window cannot see, the honest limit of the strategy.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Corticotropin-releasing factor", symbol: "CRF", role: "The pleiotropy exemplar and the axis's head: hypothalamic hypophysiotrophic hormone driving ACTH, and extrahypothalamic neurotransmitter coordinating the endocrine, immune, autonomic and behavioural effects of stress; intracerebral CRF produces decreased libido, appetite and weight loss, sleep disturbance and neophobia, the profile behind the CRF-1-antagonist programme (CRF-2 with urocortin ligands the second receptor story).", grade: "established" },
    { name: "Thyrotropin-releasing hormone", symbol: "TRH", role: "Hypothalamic hormone and extrahypothalamic transmitter with heterogeneous brain distribution and direct brain effects: chronically hypersecreted in depression (the receptor-downregulation account of the blunted TSH response, supported by elevated CSF TRH); a candidate physiological prolactin-releasing factor; intrathecal antidepressant effects reported but unconfirmed.", grade: "proposed" },
    { name: "Dopamine", symbol: "DA", role: "The prolactin release-inhibiting factor (the unique non-peptide inhibitor of the axis) and the window's caution: arcuate/periventricular perikarya projecting to the median eminence regulate prolactin without any necessary co-variation with the mesolimbicocortical pathway of schizophrenia.", grade: "established" },
    { name: "Serotonin", symbol: "5-HT", role: "The window's plausible read (widely projecting raphe neurones) and the prolactin probe's mediator: blunted responses to serotonergic challenges in depression and cluster-B/borderline personality disorder, attributed to altered 5-HT1A receptor responsiveness.", grade: "supported" },
    { name: "Noradrenaline", symbol: "NE", role: "The other plausible window (locus-coeruleus projections) and the growth-hormone probe's transmitter: clonidine, the α2-agonist, is the stimulus whose blunted GH response is the most consistent affective-disorders finding.", grade: "supported" },
    { name: "Somatostatin", symbol: "SRIF", role: "The growth-hormone release-inhibiting factor (with GHRH the axis's dual regulators, the only axis with unequivocally two physiological hypophysiotrophic hormones) and a widely distributed CNS transmitter: markedly reduced in Alzheimer's, elevated in Huntington's basal ganglia.", grade: "established" },
  ],
  pathways: [
    {
      id: "hpa-axis-chain",
      name: "The HPA axis chain (stress to cortisol to receptor effects)",
      steps: [
        { label: "The stress signal arrives", detail: "Neural input reaches the paraventricular hypothalamus, with early untoward life events leaving the system persistently recalibrated" },
        { label: "CRF release at the median eminence", detail: "The 41-residue peptide enters the primary plexus of the hypothalamo-hypophyseal portal vessels" },
        { label: "ACTH from the corticotrophs", detail: "Co-secreted with its pro-opiomelanocortin products; downregulated corticotrophs give the blunted intravenous-CRF response" },
        { label: "Adrenal cortisol", detail: "Chronic trophic drive enlarges the adrenal cortex and the pituitary (CT and MRI)" },
        { label: "Feedback at pituitary and brain", detail: "Glucocorticoid receptors close the loop: the hippocampal feedback site that chronic cortisol damages" },
        { label: "The readouts", detail: "Urinary free cortisol, CSF cortisol, the dexamethasone suppression test, the combined dexamethasone-CRF test" },
      ],
      clinicalManifestation: "Melancholia's hypercortisolism: cortisol and CSF-CRF hypersecretion with dexamethasone non-suppression, normalising on recovery, persistent abnormality predicting poor antidepressant response; in PTSD the dissociated pattern (elevated CSF-CRF with normal or reduced cortisol).",
      grade: "established",
    },
    {
      id: "hpt-axis-chain",
      name: "The HPT axis chain (TRH to thyroid hormones to the depression findings)",
      steps: [
        { label: "Hypothalamic TRH", detail: "Synthesised, transported and released at the median eminence into the portal system" },
        { label: "TSH from the thyrotrophs", detail: "Trophic stimulation of the thyroid gland, with feedback at pituitary and brain" },
        { label: "Thyroid hormones", detail: "T3 and T4 secretion: the end-organ output a century of medicine knows" },
        { label: "The depression alteration", detail: "Chronic TRH hypersecretion with pituitary TRH-receptor downregulation: the blunted TSH response to the TRH stimulation test in ~25% of depressives (elevated CSF TRH the supporting evidence)" },
        { label: "The grades ladder", detail: "Grade 1 classic primary to grade 4 antibody-positive with normal function: the untreated progression from grade 4 to grade 1" },
        { label: "The treatment dividend", detail: "T3 (25–50 μg) accelerating onset and converting non-responders; T4 (100–300 μg) augmentation; post-ablation T3-plus-T4" },
      ],
      clinicalManifestation: "The depressed patient whose thyroid screen belongs in the assessment and whose added T3 rescues the non-response: the endocrine intervention inside the routine algorithm.",
      grade: "established",
    },
    {
      id: "somatotrophic-probe-chain",
      name: "The somatotrophic probe chain (the clonidine-GH readout)",
      steps: [
        { label: "The provocative stimulus", detail: "Clonidine (the α2-agonist), also apomorphine, desipramine and levodopa" },
        { label: "Dual hypothalamic regulation", detail: "GHRH stimulatory and somatostatin inhibitory: the only axis with unequivocally two physiological hypophysiotrophic hormones" },
        { label: "GH from the somatotrophs", detail: "Possibly with a reduced nocturnal rise at baseline in depression" },
        { label: "Peripheral action without a single target gland", detail: "Somatomedin C from the liver; direct bone and muscle effects" },
        { label: "The depression finding", detail: "Blunted GH response: persisting after recovery in some studies, particularly robust in recent suicide attempters" },
      ],
      clinicalManifestation: "The most consistent neuroendocrine finding in affective-disorders research: a trait marker of depression vulnerability and a suicide-linked readout.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "founding-era", time: "1950s", title: "Neurones proved endocrine tissue", description: "The neurohistology controversy (Gomori-positive, granule-containing neurones that looked like endocrine cells) resolves into certainty: magnocellular paraventricular neurones synthesise vasopressin and oxytocin, transport them down axons to the posterior pituitary, and release them physiologically; the hypothalamic releasing-factor system controlling the anterior pituitary follows, and the same decade brings the crude discovery of the ACTH-releasing activity that awaits chemical identification.", phase: "onset" },
    { id: "window-era", time: "1970s–80s", title: "The neuroendocrine window opens", description: "Before functional imaging, plasma hormones become the accessible brain: basal and stimulated pituitary and end-organ secretion read as an index of monoamine-circuit activity in the monoamine-theory era. The founding HPA-depression observations (Board, Bunney and Hamburg; Carroll, Sachar, Stokes and Besser) apply Cushing's-diagnostic tests to depressives; Prange's and Kastin's TSH-blunting reports begin their replication run.", phase: "peak" },
    { id: "crf-identified", time: "1981", title: "CRF chemically identified", description: "Vale and colleagues characterise the 41-residue ovine hypothalamic peptide that stimulates ACTH secretion (Science 213:1394–7) (twenty-six years after the crude discovery) opening comprehensive HPA assessment and the scrutiny of the peptide that coordinates the endocrine, immune, autonomic and behavioural effects of stress.", phase: "peak" },
    { id: "hpa-anatomy-era", time: "1980s–1990s", title: "The HPA anatomy of depression completed", description: "CSF-CRF elevation and postmortem CRF-mRNA hyperexpression; CRF-1 receptor downregulation in binding and mRNA studies including suicide victims (Nemeroff); adrenocortical and pituitary enlargement on CT and MRI; the blunted ACTH response to intravenous CRF; Holsboer's combined dexamethasone-CRF test with its greater sensitivity and the never-symptomatic first-degree-relatives finding.", phase: "duration" },
    { id: "adversity-era", time: "1990s–2000s", title: "The endocrine fingerprint of early adversity", description: "Persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early untoward life events demonstrated in rats, primates and humans of both sexes (Heim and Nemeroff); the CRF-1-receptor polymorphisms conferring vulnerability or resistance to abuse-related depression; Sapolsky's glucocorticoid-hippocampal damage giving the aging-depression link its mechanism.", phase: "duration" },
    { id: "systemic-present", time: "1999 to the chapter's present", title: "The systemic turn", description: "Bunevicius shows post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (NEJM, 1999); the STAR*D level-3 report confirms T3 augmentation as the modern confirmation; and the chapter closes on depression as a systemic disease (coronary artery disease, stroke, reduced bone density, inflammation) possibly mediated by the endocrine alterations themselves, with PET ligands for glucocorticoid, CRF and peptide receptors as the research agenda.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the endocrine layer as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "No community prevalence figure belongs to this science: the note's epidemiology is the distribution of endocrine findings across psychiatric populations. HPA-axis hyperactivity occurs in a significant subgroup of patients with major depression, its magnitude correlating with depression severity (thousands of reports since the founding observations); an inordinately high rate of HPT dysfunction in major depression, with comorbid depression-and-anxiety patients especially showing grade-4 autoimmune thyroiditis while schizophrenia and anxiety disorders show normal thyroid axes; a blunted TSH response to TRH in approximately 25% of depressives, replicated for over 25 years; the blunted clonidine-GH response the most consistent affective-disorders finding; and HPA hyperactivity common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's, with little evidence in schizophrenia.",
    indianPrevalence: "The Indian layer is structural rather than numerical: thyroid disease is common, autoimmune thyroiditis under-detected, and iodine-deficiency regions persist on the goitre-belt history and its iodisation programmes, making the depression-thyroid screen an Indian clinical duty more than most. No Indian survey numbers are given by the note, and none are invented here.",
    lifetimeRisk: "The vulnerability question the combined dexamethasone-CRF test raises: axis alteration detectable in never-symptomatic first-degree relatives of depressives; the trait marker's claim, still a research instrument rather than a clinical predictor.",
    genderRatio: "The note's gender statement is the HPG rationale: the female prevalence of depression and postpartum rates are the reasons gonadal hypoactivity was expected. The axis remains under-researched, its studies demanding menopausal-status, cycle-phase and contraceptive controls. The HPA and HPT findings carry no gender split in this lineage.",
    ageOfOnset: "The one age statement: elderly depressives show increasing adrenocortical activity; potentially explained by chronic cortisol's hippocampal neuronal loss accumulating at the glucocorticoid-feedback site.",
    indianNotes: "Cost gradient (approx 2026): dexamethasone cheap; TSH and anti-TPO moderately priced and variably available; midnight-cortisol assays and CRF-stimulation tests confined to specialist centres; T3 (liothyronine) inexpensive and available: the practical Indian augmentation option.",
  },
  etiology: [
    { category: "biological", factor: "Pleiotropy, one substance, multiple roles", details: "The founding principle that makes the whole discipline possible: adrenaline is a hormone in the adrenal medulla and a transmitter in the CNS; CRF is a hypothalamic hypophysiotrophic hormone and an extrahypothalamic neurotransmitter; TRH likewise: the reason endocrine measurements can reflect brain events at all, and the reason the demarcations dissolved." },
    { category: "biological", factor: "HPA-axis hyperactivity in depression", details: "Cortisol and CSF-CRF hypersecretion, ACTH co-secretion with its pro-opiomelanocortin products, trophic pituitary and adrenocortical enlargement, CRF-1 receptor downregulation: the most important finding in all of biological psychiatry per the chapter, its magnitude correlating with depression severity." },
    { category: "psychological", factor: "Early adversity recalibrates the stress system", details: "Persistent HPA-axis and extrahypothalamic-CRF hyperactivity after child abuse and neglect (demonstrated in rats, primates and humans of both sexes) posited to underlie the abuse-depression vulnerability association: the biological bridge between early trauma and adult depression." },
    { category: "genetic", factor: "The CRF1-receptor moderator", details: "CRF-1-receptor SNPs conferring vulnerability or resistance to depression after abuse: the gene-environment interaction that explains why not every abused child develops depression, and the reason the vulnerability is probabilistic, never deterministic." },
    { category: "biological", factor: "Subtle thyroid failure", details: "The four grades of hypothyroidism down to the antibody-only grade 4: over-represented in major depression, and the substrate of the poor antidepressant response that makes the thyroid screen actionable." },
  ],
  symptomClusters: [
    {
      category: "1. The melancholic endocrine signals",
      symptoms: [
        "A depression whose severity tracks its biology: the magnitude of HPA hyperactivity correlating with depression severity",
        "The vegetative signature CRF itself produces intracerebrally in animals: decreased libido, appetite and weight loss, sleep disturbance, neophobia; melancholia's profile mirrored by its own mediator",
        "Dexamethasone non-suppression: the HPA readout that failed as a diagnostic separator yet normalises with recovery",
        "Persistent abnormality after recovery: the non-suppression or CSF-CRF elevation that predicts poorer antidepressant response",
      ],
    },
    {
      category: "2. The thyroid signals",
      symptoms: [
        "Depression with cognitive impairment: the century's knowledge of adult hypothyroidism's profound CNS disturbance",
        "The comorbid depression-and-anxiety presentation: the group especially showing grade-4 autoimmune thyroiditis with normal function tests",
        "The non-responding depressed patient: subtle hypothyroidism's poor antidepressant response, the actionable finding",
        "Anxiety disorders alone and schizophrenia showing normal thyroid axes: the contrast that localises the association",
      ],
    },
    {
      category: "3. The trauma signals",
      symptoms: [
        "PTSD's physiological distinctness: elevated CSF-CRF with normal or reduced adrenocortical activity against melancholia's hypercortisolism",
        "Differing antidepressant-response expectations in trauma presentations: the two-signature lesson applied to prognosis",
        "The early-adversity history beneath recurrent depression: abuse, neglect and early loss with the stress system recalibrated in childhood",
      ],
    },
    {
      category: "4. The systemic signals",
      symptoms: [
        "Increased coronary artery disease and stroke risk in depression: possibly mediated by the endocrine alterations themselves",
        "Reduced bone density with hip-fracture risk: the skeletal price of chronic cortisol excess",
        "Raised inflammatory measures: the immunological arm of the same systemic turn",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The four grades of hypothyroidism",
      code: "The HPT ladder",
      criteria: [
        "Grade 1: classic primary hypothyroidism: raised TSH, low thyroid hormones, exaggerated TRH response",
        "Grade 2: normal thyroid hormones, raised basal TSH, exaggerated TRH response",
        "Grade 3: normal basal everything; exaggerated TRH response detectable only by the stimulation test",
        "Grade 4, all function tests normal, antithyroid antibodies present: symptomless autoimmune thyroiditis",
        "The progression: untreated patients move from grade 4 to grade 1; the antibody-positive, functionally normal patient still merits follow-up and treatment-attention",
      ],
      duration: "A progression, not a state: the antibody-only grade is the entry door the standard panel misses.",
      indianNote: "The Indian screen: TSH, and where available anti-TPO antibodies; the grade-4 lesson applied where autoimmune thyroiditis is under-detected and iodine-deficiency regions persist.",
    },
    {
      system: "The dexamethasone suppression test and its successors",
      code: "The HPA probes",
      criteria: [
        "Urinary free cortisol and CSF cortisol: the Cushing's-diagnostic tests the founding observations applied to depressives",
        "The dexamethasone suppression test: dexamethasone given, cortisol suppression measured; failed as a diagnostic separator (too insensitive), the field's lesson in test-honesty",
        "Persistent non-suppression after recovery retains prognostic value: the prediction of harder-to-treat illness",
        "The combined dexamethasone-CRF test (Holsboer): dexamethasone one day, standardised CRF stimulation the next; markedly greater sensitivity, detecting axis alteration in never-symptomatic first-degree relatives of depressives",
        "The intravenous-CRF test: blunted ACTH response (downregulated corticotrophs and/or cortisol feedback)",
      ],
      duration: "Two days for the combined test; the interpretation discipline lasts a career.",
      indianNote: "The availability gradient: dexamethasone cheap; CRF unavailable outside specialist centres: the Indian testable layer stops at the DST.",
    },
    {
      system: "The stimulation probes",
      code: "The window's instruments",
      criteria: [
        "TRH stimulation (the blunted TSH response in ~25% of depressives (with the prolactin-to-TRH response NOT blunting) the dissociation within one test)",
        "Clonidine (α2-agonist) growth-hormone probe: the most consistent affective-disorders finding; also apomorphine, desipramine and levodopa",
        "Serotonergic probes of prolactin (l-tryptophan, 5-HTP, fenfluramines, clomipramine, direct agonists): blunted in depression and in cluster-B and borderline personality disorder",
        "Intravenous GnRH stimulation: the sensitive HPG probe, influenced by GnRH secretion, gonadotrophin secretion and gonadal-steroid feedback at pituitary and brain",
      ],
      duration: "Research instruments, not routine panels: the note's honesty about their clinical place.",
      indianNote: "None of the stimulation probes belongs to the Indian district OPD; the reasoning they taught (which axis, which finding, which prognosis) travels without the assay.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Melancholic depression's hypercortisolism vs PTSD's dissociated pattern", distinguishingFeatures: "Depression: cortisol and CSF-CRF both elevated, magnitude tracking severity, normalising on recovery. PTSD: elevated CSF-CRF with normal or reduced adrenocortical activity; the dissociated pattern.", keyDifferentiator: "One axis, two signatures: the contrast that explains trauma's physiological distinctness from melancholia and the differing antidepressant-response expectations." },
    { condition: "Primary depression vs endocrine disease presenting as depression", distinguishingFeatures: "Adult hypothyroidism's profound CNS disturbance, cognitive impairment and depression: the century's knowledge; the Cushing's-diagnostic tests were applied to depressives precisely because the endocrine picture can mirror melancholia; the grade-4 patient carries antibodies with entirely normal function.", keyDifferentiator: "The endocrine workup: thyroid function including the antibody-grade subtleties belongs in the assessment of major depression; the screen separates the treatable endocrine substrate from the primary illness." },
    { condition: "Depression complicating medical illness vs primary depression", distinguishingFeatures: "HPA hyperactivity is common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's; schizophrenia shows little HPA evidence and normal thyroid axes.", keyDifferentiator: "The axis findings as diagnostic context: the same depression reading differently against a neurodegenerative or inflammatory backdrop, the consultation-liaison application of the HPA literature." },
    { condition: "The anxiety-depression comorbidity with grade-4 autoimmunity", distinguishingFeatures: "Comorbid depression-and-anxiety patients especially show grade-4 autoimmune thyroiditis (symptomless on function tests, positive on antibodies) while anxiety disorders alone show normal thyroid axes.", keyDifferentiator: "The antibody test decides what the hormone panel cannot: the anxious depressed patient whose thyroid function reads normal may still carry the autoimmune grade needing follow-up." },
    { condition: "Alzheimer's CRF-neurone degeneration vs depression's CRF hypersecretion", distinguishingFeatures: "Alzheimer's disease: cortical CRF-neurone degeneration with reciprocal receptor upregulation, temporally preceding the cholinergic involvement. CRF reduced, the opposite direction to depression's elevation.", keyDifferentiator: "The direction of the CRF change separates the two (hypersecretion in depression, degeneration in Alzheimer's) with somatostatin's marked Alzheimer's reduction and Huntington's basal-ganglia elevation completing the neuropeptide dementia map." },
  ],
  management: [
    { category: "pharmacotherapy", name: "The thyroid workup of major depression", description: "Thyroid function (including the antibody-grade subtleties) belongs in the assessment of major depression: the inordinately high rate of HPT dysfunction, the comorbid depression-anxiety grade-4 autoimmunity, and the poor antidepressant response of subtle hypothyroidism make the screen actionable rather than optional.", whenToUse: "Every major-depression assessment. TSH first, anti-TPO where available.", indianContext: "The Indian duty: the goitre-belt history, iodisation programmes and high autoimmune-thyroid prevalence make the HPT screen obligatory. TSH, and where available anti-TPO, with the antibody-positive, functionally normal patient still meriting follow-up and treatment-attention." },
    { category: "pharmacotherapy", name: "T3 acceleration and augmentation", description: "T3 (25–50 μg) both accelerates antidepressant onset and converts non-responders: confirmed in STAR*D; T4 (100–300 μg) supplementation as an augmentation strategy; post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius). One of the best-validated antidepressant strategies: an endocrine intervention inside the routine algorithm.", whenToUse: "Slow-onset and non-responding depressions, with the dose-logic and monitoring the strategy demands.", indianContext: "T3 (liothyronine) is inexpensive and available in India. The augmentation strategy is a practical Indian option, taught explicitly in the STAR*D context." },
    { category: "psychotherapy", name: "The early-adversity formulation — the recalibrated stress system", description: "The CRF-persistence model gives clinicians a biological, non-blaming formulation for abuse survivors' depression vulnerability (the stress system recalibrated in childhood) with the CRF1-polymorphism work explaining why not every abused child develops depression. The mechanism is real, physical, and treatable-in-principle.", whenToUse: "Every depressed patient with an abuse or neglect history, and every court report that must explain recurrence.", indianContext: "Child abuse, neglect and early loss are prevalent and under-addressed in India; the formulation is powerful in psychoeducation and in court reports: the note's named Indian clinical duty for abuse survivors." },
    { category: "service-design", name: "The systemic-disease consultation — depression as internal-medicine risk state", description: "HPA-driven cortisol excess links depression to increased coronary artery disease and stroke, perhaps cancer, reduced bone density with hip-fracture risk, and raised inflammatory measures: possibly mediated by the endocrine alterations themselves: the neuroendocrine findings become internal-medicine findings, and the treatment becomes prevention.", whenToUse: "Every long-term depression management plan: the internal-medicine screen and the liaison conversation.", indianContext: "Depression-post-MI and post-stroke care in India is cardiology-first. The HPA-mediated risk framing gives psychiatry a seat in that consultation." },
    { category: "service-design", name: "The test-honesty discipline — what to order and what to reason", description: "The DST's diagnostic failure taught the field test-honesty: the endocrine tests are research-grade machinery, not routine panels; order TSH (and anti-TPO where available) in depression, and reason the rest. Persistent HPA abnormality retains prognostic value; the combined Dex-CRF test remains the research future, not the clinic present.", whenToUse: "Whenever an endocrine test is contemplated in psychiatry. The question is what the result would change.", indianContext: "The Indian gradient: dexamethasone cheap, midnight cortisol and CRF confined to specialist centres; the Indian application of the HPA literature is primarily clinical reasoning (the systemic-risk teaching, the early-adversity formulation) rather than test-based." },
  ],
  safety: {
    redFlags: [
      "The untreated grade-4 patient: antithyroid antibodies with normal function progress toward grade 1; scheduled follow-up is the safety act, not reassurance",
      "The leuprolide-treated patient: the chemical ovariectomy carries bone-density and cardiovascular caveats, and add-back oestrogen-progesterone reduces efficacy; a monitored trade-off, never an unattended one",
      "Chronic hypercortisolic depression: reduced bone density with hip-fracture risk; the osteoporosis layer of the systemic-disease screen",
      "Elderly depression with increasing adrenocortical activity: the hippocampal glucocorticoid-damage hypothesis; the cognitive workup runs alongside the mood treatment",
    ],
    urgentGuidance:
      "This note's flags are progression flags rather than acute emergencies: the antibody-positive patient needs scheduled thyroid follow-up (the grade-4-to-grade-1 progression); the leuprolide-treated premenstrual-syndrome patient needs bone-density and cardiovascular monitoring; the chronically hypercortisolic depressed patient needs the systemic screen: coronary, stroke, bone. Acute endocrine emergencies belong to internal medicine and are not this note's subject; the psychiatric duty is to recognise the door and route through it.",
  },
  drugLinks: [],
  contentGaps: [
    "T3 (liothyronine) augmentation: the note's best-validated endocrine intervention (25–50 μg acceleration and augmentation, STAR*D-confirmed); has no KYP drug lesson: liothyronine is not among the platform's twelve drug courses; the strategy is taught here, the drug page is never invented.",
    "Leuprolide (the GnRH-agonist chemical ovariectomy for premenstrual syndrome) and dexamethasone (the suppression test) have no KYP drug lessons, both are taught here as the note's instruments, their pages do not exist.",
    "The premenstrual-syndrome and perinatal-depression territory the HPG findings point to (leuprolide in PMS; oestrogen's possible contribution in perimenopausal and postpartum depression) has no dedicated course among the registered set. The hormonal-window findings are taught here, the syndromes' own lessons are recorded as gaps.",
    "Cushing's syndrome and the endocrinopathies whose behavioural consequences form the discipline's fifth limb have no KYP lessons. The axis findings are taught here; the endocrine disease courses belong to internal medicine and are recorded, not invented.",
    "The CRF-1-antagonist class: the putative antidepressant direction the note describes (activity in every preclinical screen, open-trial antidepressant effects); has no KYP drug lesson; the profile is taught as research direction, never as an available prescription.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of knowledge, not an illness: the study of how the brain and the body's hormone systems talk to each other; the thyroid, the adrenal (stress) glands, growth hormone, the sex glands and prolactin. The same molecules work as hormones in the blood and as chemical messengers in the brain, which is why body-hormone tests can sometimes tell doctors about brain states, and why thyroid checks belong in a depression assessment.",
    whatCausesIt:
      "Nature reuses its chemistry: one substance can be a hormone in one place and a messenger in the brain in another. Long-lasting stress (including the stress of childhood hardship) can leave the stress system set to a higher level, raising the risk of later depression; and subtle thyroid problems are more common in depression than in healthy people, which is one reason depression sometimes fails to respond to treatment.",
    symptoms:
      "Not applicable as an illness. The situations where this knowledge matters: a depression that does not improve with antidepressant treatment (a subtle thyroid problem can be the reason); low mood with mental slowing that others also notice; depression that keeps coming back in someone who had a very difficult childhood; the after-effects of trauma, which respond differently to medicines than ordinary depression.",
    treatment:
      "The doctor's discipline: the thyroid test (TSH, and an antibody test where available) in every depression assessment; thyroid hormone (T3) added to an antidepressant to speed up or rescue the response, one of the best-validated strategies; the follow-up of antibody-positive thyroid findings; and for trauma survivors, the explanation that the stress system was recalibrated in childhood: a physical change, treatable in principle, never a weakness of character.",
    selfHelp: [
      "Tell the doctor if your depression has not improved after full courses of two antidepressants. The thyroid review comes next",
      "Ask about the thyroid antibody test if your thyroid readings are 'normal' but you have depression with anxiety, and keep the follow-up appointments if it is positive",
      "If T3 has been added to your antidepressant, give the combination the full trial your doctor describes, with the monitoring visits it needs",
      "If there was hardship in childhood and the depression keeps returning, ask the doctor to explain it in terms of the stress system: the physical explanation helps the treatment and the self-understanding",
      "Long-term depression affects bones and heart as well as mood: ask for those checks at your medical reviews",
    ],
    whenToSeekHelp: [
      "Depression not improving after two adequate antidepressant courses: ask for the thyroid review",
      "Low mood with noticeable mental slowing that others also report: the thyroid test is part of the assessment",
      "Depression that keeps relapsing under stress, with a history of childhood abuse or neglect: a psychiatric assessment helps both the understanding and the treatment",
      "Trauma after-effects not responding to treatment as expected: the doctor may adjust the plan and the expectations",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages), for distress and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP, where the depression thyroid screen is available",
      "Ask at your centre whether anti-TPO antibody testing is available: the grade-4 autoimmune layer of the depression workup",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs psychiatric neuroendocrinology: practice follows the Oxford chapter's findings with Indian thyroid epidemiology forcing the screen: TSH (and anti-TPO where available) is an obligatory part of the depression workup in Indian practice, not an optional extra; the augmentation and formulation layers follow the chapter's own teaching.",
    systemContext: "The Indian pathway: the depressed patient meets the district OPD or the physician first; the thyroid screen is the endocrine layer the system can actually run. TSH widely available, anti-TPO variable. The cortisol layer (midnight-cortisol assays, CRF-stimulation tests) is confined to specialist centres, so the Indian application of the HPA literature is primarily clinical reasoning (the systemic-risk teaching and the early-adversity formulation) rather than test-based practice.",
    programmeContext: "The iodisation programmes and the goitre-belt history are the public-health backdrop that makes thyroid disease an Indian clinical given; the DMHP district tier carries the depression workup; no neuroendocrine-specific programme exists or is needed: the screen rides the standard psychiatric assessment.",
    costConsiderations: "The gradient (approx 2026): dexamethasone cheap; TSH and anti-TPO moderately priced and variably available across centres; midnight-cortisol assays and CRF-stimulation tests specialist-centre confined; T3 (liothyronine) inexpensive and available: the practical Indian augmentation option taught in the STAR*D context with its dose-logic and monitoring.",
    culturalConsiderations: "The early-adversity mechanism lands hard in Indian practice: child abuse, neglect and early loss are prevalent and under-addressed, and the CRF-persistence model gives clinicians a biological, non-blaming formulation for abuse survivors' depression vulnerability (the stress system recalibrated in childhood) powerful in psychoeducation and in court reports. PTSD's high-CRF/low-cortisol pattern explains the physiological distinctness of trauma from melancholia in India's disaster, conflict and displacement populations, informing why antidepressant response differs from melancholia's. The systemic-disease teaching reaches Indian internal medicine cardiology-first: depression-post-MI and post-stroke care is where the HPA-mediated risk framing gives psychiatry its seat in the consultation.",
    patientCounselling: [
      "The thyroid script: 'Your depression workup includes a thyroid test, not because we doubt the diagnosis, but because subtle thyroid problems are over-represented in depression and have their own treatment.'",
      "The antibody script: 'Your thyroid readings are normal, but the antibody test is positive. That needs watching with scheduled follow-up, because untreated it can progress.'",
      "The augmentation script: 'Adding a small dose of thyroid hormone (T3) to your antidepressant can speed up and sometimes rescue the response. It is one of the best-validated strategies we have, and in India it is inexpensive.'",
      "The adversity script: 'What happened in childhood recalibrated your stress system; the hormones of stress stayed switched high; that is a physical, treatable-in-principle change, not a weakness of character.'",
      "The trauma-physiology script: 'Trauma's chemistry is different from ordinary depression (high stress-hormone signalling in the brain with normal blood cortisol) which is why the medicines can work differently, and we adjust expectations accordingly.'",
      "The bones-and-heart script: 'Long-term depression affects the body, not only the mind; bone density and heart risk are part of the illness, so the treatment is prevention too.'",
    ],
  },
  decisionPath: {
    title: "The endocrine screen in a psychiatric presentation",
    nodes: [
      {
        id: "start",
        question: "The psychiatric presentation is on the table. Which endocrine question does it raise?",
        branches: [
          { label: "Major depression at first assessment", next: "thyroid-gate" },
          { label: "Depression not responding to adequate antidepressant treatment", next: "augmentation-gate" },
          { label: "Depression with an abuse or neglect history", next: "adversity-path" },
          { label: "A trauma presentation (PTSD picture)", next: "ptsd-path" },
          { label: "Depression in the medically ill or the elderly", next: "systemic-gate" },
        ],
      },
      {
        id: "thyroid-gate",
        question: "The thyroid screen: what is available, and what does it show?",
        branches: [
          { label: "TSH abnormal: the grades ladder begins", next: "grades-path" },
          { label: "TSH normal, anti-TPO available and positive", next: "grade4-path" },
          { label: "All normal, no antibodies tested", next: "screen-done-path" },
        ],
      },
      {
        id: "grades-path",
        question: "Raised TSH, where on the four-grade ladder is this patient?",
        recommendation: "Read the grades: grade 1 classic primary (raised TSH, low hormones, exaggerated TRH response); grade 2 normal hormones with raised basal TSH; grade 3 normal basal with exaggerated TRH response on stimulation only; grade 4 antibody-positive with normal function. Treat the thyroid disease with its own medicine (the endocrine substrate treated before or alongside the depression) remembering that hypothyroid patients respond poorly to antidepressants: correcting the substrate is the response-rescue.",
      },
      {
        id: "grade4-path",
        question: "Grade 4: normal function tests, positive antithyroid antibodies.",
        recommendation: "The comorbid depression-and-anxiety patient especially carries this grade. The management is follow-up and treatment-attention: untreated patients progress from grade 4 to grade 1, so the antibody-positive, functionally normal patient is scheduled for thyroid review; the screen's answer to the patient the standard panel misses.",
      },
      {
        id: "screen-done-path",
        question: "Thyroid screen normal, no antibody layer available.",
        recommendation: "Proceed with the standard depression algorithm: the endocrine layer has done its duty. The ~25% TSH-to-TRH blunting is a research finding, not a routine test; the stimulation probes stay in the research vocabulary, and the treatment follows the clinical picture.",
      },
      {
        id: "augmentation-gate",
        question: "The non-responder: what does the endocrine intervention offer?",
        branches: [
          { label: "Considering augmentation strategies", next: "t3-path" },
          { label: "Hypothyroid history or post-ablation patient", next: "combination-path" },
        ],
      },
      {
        id: "t3-path",
        question: "The endocrine augmentation decision.",
        recommendation: "T3 (25–50 μg) both accelerates antidepressant onset and converts non-responders. STAR*D-confirmed; T4 (100–300 μg) supplementation is the alternative strategy; one of the best-validated antidepressant strategies, an endocrine intervention inside the routine algorithm. In India: liothyronine inexpensive and available; the dose-logic and monitoring taught explicitly in the STAR*D context.",
      },
      {
        id: "combination-path",
        question: "The already-thyroid-treated patient whose mood fails.",
        recommendation: "Post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius). The combination is the evidence-based answer in the thyroid-replaced patient whose depression persists: the endocrine review before the next psychiatric escalation.",
      },
      {
        id: "adversity-path",
        question: "Depression in an abuse or neglect survivor.",
        recommendation: "The early-adversity formulation: persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early untoward life events (rats, primates and humans of both sexes), posited to underlie the abuse-depression vulnerability association, with CRF1-receptor polymorphisms explaining why not every abused child. The script (the stress system recalibrated in childhood) biological, non-blaming, powerful in psychoeducation and court reports.",
      },
      {
        id: "ptsd-path",
        question: "The trauma presentation: the endocrine reading.",
        recommendation: "PTSD's dissociated pattern: elevated CSF-CRF with normal or reduced adrenocortical activity; opposite to melancholia's hypercortisolism. No routine cortisol test is indicated. The pattern is a formulation, not a panel. The reading informs treatment expectations: trauma's physiology differs from melancholia's, and antidepressant response may differ accordingly.",
      },
      {
        id: "systemic-gate",
        question: "Depression complicating medical illness or advancing age: the systemic and prognostic reading.",
        recommendation: "HPA hyperactivity is common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's; elderly depressives show increasing adrenocortical activity (the hippocampal glucocorticoid-damage hypothesis). The systemic layer (coronary disease, stroke, bone density, inflammation) makes the endocrine findings internal-medicine findings: the depression treated as prevention, the liaison conversation opened. And persistent HPA abnormality after recovery predicts poorer antidepressant response: the prognostic residue of the dexamethasone story.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Ordering the dexamethasone suppression test as a depression diagnostic",
      why: "The DST failed as a diagnostic separator (too insensitive) and its history is the field's lesson in test-honesty; cortisol was never the routine panel's answer to 'is this depression?'",
      correction: "Thyroid function (TSH, anti-TPO where available) is the endocrine screen that belongs in the depression assessment; the HPA tests are research machinery: persistent abnormality retains prognostic value, the combined Dex-CRF test the research future.",
    },
    {
      mistake: "Reading normal thyroid function as thyroid-normal",
      why: "The grade-4 lesson: all function tests normal with antithyroid antibodies positive; symptomless autoimmune thyroiditis, over-represented in the comorbid depression-anxiety picture, progressing untreated toward grade 1.",
      correction: "Where the antibodies are available, order them in the anxious depressed patient with normal TSH, and follow the positive: follow-up and treatment-attention are the management.",
    },
    {
      mistake: "Treating PTSD's stress system as depression's",
      why: "PTSD shows elevated CSF-CRF with normal or reduced adrenocortical activity: the dissociated pattern opposite to melancholia's hypercortisolism; assuming one stress physiology sets wrong treatment expectations.",
      correction: "One axis, two signatures: read the trauma presentation through its own pattern, and let the difference inform the response expectations.",
    },
    {
      mistake: "Forgetting the endocrine layer of treatment resistance",
      why: "Hypothyroid patients (and animals) respond poorly to antidepressants; the non-responder worked up without the thyroid screen misses the treatable substrate and the T3 augmentation option.",
      correction: "The endocrine review of the non-responder: TSH and antibodies first, then the T3 (25–50 μg) acceleration-augmentation strategy. STAR*D-confirmed and, in India, inexpensive.",
    },
    {
      mistake: "Blaming the abused patient's biology without the moderator",
      why: "The early-adversity HPA persistence is real, but the CRF1-receptor polymorphisms confer vulnerability or resistance, not every abused child develops depression; biological determinism is as wrong as dismissal.",
      correction: "The formulation holds both: the recalibrated stress system AND the genetic moderator; 'why not every abused child' is a finding, not a rhetorical question.",
    },
    {
      mistake: "Stopping at the psychiatric reading of the HPA findings",
      why: "Depression as a systemic disease (coronary artery disease, stroke, reduced bone density, raised inflammatory measures, possibly mediated by the endocrine alterations themselves) is the chapter's closing clinical reframing; missing it misses the internal-medicine duty.",
      correction: "The chronically depressed patient gets the systemic screen (bone density, cardiovascular risk, inflammation) the endocrine findings become internal-medicine findings and their treatment becomes prevention.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define neuroendocrinology's scope (the five components) and state the pleiotropy principle with its two named examples (adrenaline; CRF).",
        "The neuroendocrine window: its assumption, why it was plausible for serotonin and noradrenaline, and why it failed for dopamine; the tuberoinfundibular versus mesolimbicocortical dissociation.",
        "The four grades of hypothyroidism and the depression findings: the blunted TSH response to TRH (~25%) with its mechanism, and the T3 treatment findings.",
        "The HPA-axis findings in depression: the full anatomy: cortisol and CSF-CRF hypersecretion, ACTH co-secretion with enlargement, CRF-1 downregulation, recovery normalisation, prognosis persistence.",
        "Why the growth-hormone response to clonidine is called the most consistent neuroendocrine finding in affective disorders, and what makes the somatotrophic axis unique (dual regulation; no single target gland).",
      ],
      practical: [
        "Demonstrate the endocrine review of a depressed patient: the thyroid history and screen, the medication-response history that flags subtle hypothyroidism, and the explanation to the patient of why the thyroid test is being ordered.",
        "Present the trauma-versus-melancholia physiology contrast on a case: the PTSD formulation (high CRF, low-normal cortisol) against the melancholic pattern, with the treatment-expectation reasoning it carries.",
      ],
      longAnswer: [
        "The hypothalamic-pituitary-adrenal axis in depression: the findings, the tests (the dexamethasone suppression test, the combined Dex-CRF test), the CRF hypothesis and its therapeutic implications.",
        "Neuroendocrinology in psychiatry: the axis architecture, the window strategy and its limits, and the axis-by-axis findings; thyroid, adrenal, growth hormone, gonadal, prolactin.",
      ],
    },
    neetPg: {
      highYield: [
        "THE PLEIOTROPY PRINCIPLE: the same substance a hormone at one site and a neurotransmitter at another (adrenaline (adrenal medulla vs CNS), CRF (hypothalamic hormone vs extrahypothalamic transmitter), TRH likewise) the reason the endocrine/neuronal demarcations dissolved.",
        "THE BIGGEST FINDING: HPA-axis hyperactivity in a significant subgroup of major depression; the most important finding in all of biological psychiatry per the chapter, its magnitude correlating with depression severity.",
        "THE FOUR GRADES: grade 1 classic primary (raised TSH, low hormones, exaggerated TRH response); grade 2 normal hormones, raised basal TSH; grade 3 normal basal, exaggerated TRH response on stimulation only; grade 4 all normal plus antithyroid antibodies: untreated progression from grade 4 to grade 1.",
        "THE 25% BLUNTING: blunted TSH response to TRH in approximately a quarter of depressives; chronic TRH hypersecretion with pituitary receptor downregulation (elevated CSF TRH the support); replicated over 25 years since Prange and Kastin; the prolactin-to-TRH response does NOT blunt.",
        "THE DEXAMETHASONE STORY: the DST failed diagnostically (too insensitive) but its machinery produced the field's biggest finding; persistent non-suppression after recovery predicts poor antidepressant response; the combined Dex-CRF test (Holsboer, dexamethasone one day, CRF the next) markedly more sensitive, detecting alteration in never-symptomatic first-degree relatives.",
        "THE GH CHAMPION: blunted GH response to clonidine (the α2-agonist); the most consistent affective-disorders finding; also apomorphine, desipramine and levodopa; persists after recovery in some studies (trait marker) and particularly robust in recent suicide attempters.",
        "THE PTSD DISSOCIATION: elevated CSF-CRF with normal or reduced adrenocortical activity; the opposite signature to melancholia; one axis, two signatures.",
        "THE T3 DIVIDEND: T3 (25–50 μg) accelerates onset and converts non-responders (STAR*D); T4 (100–300 μg) augmentation; hypothyroid patients respond poorly to antidepressants; post-ablation patients do better on T3-plus-T4 (Bunevicius).",
        "THE ADVERSITY FINGERPRINT: persistent HPA and extrahypothalamic-CRF hyperactivity after early abuse and neglect; rats, primates, humans, both sexes; CRF-1-receptor SNPs confer vulnerability or resistance: the why-not-every-abused-child answer.",
        "THE PROLACTIN-5HT1A: blunted prolactin responses to serotonergic probes (l-tryptophan, 5-HTP, fenfluramines, clomipramine, direct agonists) in depression AND cluster-B/borderline personality; mediated by altered 5-HT1A receptor responsiveness.",
        "THE ALZHEIMER'S CONTRAST: cortical CRF-neurone degeneration with reciprocal receptor upregulation (CRF reduced, the opposite direction to depression) temporally preceding the cholinergic involvement; somatostatin markedly reduced in Alzheimer's, elevated in Huntington's basal ganglia.",
      ],
      pyqConcepts: [
        "The dexamethasone suppression test: the diagnostic-failure question that recurs in every format (what it was, why it failed, what it retains).",
        "The four grades of hypothyroidism: the grading-ladder question built on the TSH-antibody distinction.",
        "PTSD's endocrine pattern versus melancholia's: the contrast question.",
        "T3 augmentation: the STAR*D-confirmed strategy question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old woman with two years of depression and prominent anxiety has failed two adequate antidepressant courses; a screening TSH a year ago was normal: the endocrine review repeats the TSH and adds anti-TPO antibodies (positive (grade 4, the comorbid depression-anxiety association)) and the augmentation decision follows: T3 (25–50 μg) added to the antidepressant, the STAR*D-confirmed strategy that both accelerates onset and converts non-responders, inexpensive in India as liothyronine; the teaching: the non-responder's endocrine review, the antibody-only grade the standard panel misses, and the progression-watch follow-up the grade-4 patient is owed.",
        "A 27-year-old abuse survivor with recurrent depression is referred for a court report asking whether the recurrence is physical or controllable: the formulation delivered is the CRF-persistence model (early adversity leaving HPA-axis and brain-CRF hyperactivity persistently elevated (rats, primates, humans of both sexes), the stress system recalibrated in childhood) with the CRF1-polymorphism work explaining why not every abused child develops depression; the teaching: the biological, non-blaming formulation powerful in psychoeducation and defensible in court reports, the Indian clinical duty the note names for abuse survivors' depression vulnerability.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Pleiotropy: adrenaline and CRF; hormone at one site, transmitter at another.",
        "Blunted TSH response to TRH: approximately 25% of depressives.",
        "Clonidine-blunted GH: the most consistent affective-disorders finding.",
        "PTSD: high CSF-CRF with normal or reduced cortisol; the dissociated pattern.",
        "CRF chemically identified 1981 by Vale: the 41-residue ovine peptide.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The test-honesty discipline: the DST's diagnostic failure is why the endocrine tests are read as research machinery. The thyroid screen is the only endocrine test the routine depression workup carries; everything else is reasoning.",
        "The prognostic residue: persistent dexamethasone non-suppression or CSF-CRF elevation after recovery predicts poor antidepressant response; the finding that survived the diagnostic collapse.",
        "The relatives' question: the combined Dex-CRF test detects axis alteration in never-symptomatic first-degree relatives; the vulnerability marker edging toward clinical reality; know it, order none of it.",
        "The formulation script ('the stress system recalibrated in childhood') the CRF-persistence model delivered as biological, non-blaming psychoeducation for abuse survivors, and defensible in court reports.",
        "The systemic turn: chronic depression's cortisol excess links to coronary disease, stroke, bone density and inflammation (possibly mediated by the endocrine alterations themselves) which makes the psychiatry consultation an internal-medicine prevention visit.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The non-responder whose thyroid screen was 'normal'",
      presentation: "Two failed antidepressant courses, a normal TSH, and the antibody test that changed the algorithm.",
      initialPresentation: "A 34-year-old woman at the district psychiatric OPD with two years of depressive illness (low mood, anhedonia, insomnia, fatigue) and prominent anxiety symptoms alongside the depression from the beginning. Two adequate antidepressant courses (an SSRI, then an agent from a different class) had produced no sustained response; the referral note recorded treatment-resistant depression and a normal thyroid-stimulating hormone from a screening test a year earlier.",
      history: "The comorbid depression-and-anxiety pattern the endocrine literature flags: grade-4 autoimmune thyroiditis associates precisely with this comorbidity. No prior thyroid disease; a maternal aunt's thyroid disorder volunteered only on direct endocrine review. No substance use; no other medical treatment.",
      examination: "Mental state: a moderate depressive episode with anxious distress, no psychotic features, no suicidality at assessment; insight intact. Physical examination unremarkable: the grade the examination cannot see is the grade the antibody test finds.",
      diagnosis: "Major depression, non-responsive at two adequate courses, with grade-4 autoimmune thyroiditis (normal function tests, positive antithyroid antibodies): the comorbid depression-anxiety association of the HPT literature.",
      management: "The endocrine review of the non-responder: TSH repeated (normal) and anti-TPO antibodies added; positive. The grade-4 lesson applied: follow-up and treatment-attention for the antibody-positive, functionally normal patient, the progression from grade 4 to grade 1 the reason. The augmentation decision: T3 (25–50 μg) added to the antidepressant (the STAR*D-confirmed strategy that both accelerates onset and converts non-responders) with the dose-logic and monitoring taught in that context, and inexpensive Indian liothyronine the practical enabler.",
      outcome: "Response to the augmented regimen over the following weeks: the non-responder converted, as the augmentation literature predicts. The antibody-positive thyroid scheduled for periodic follow-up (the grade-4 patient's progression watch) and the team briefed on the poor-antidepressant-response finding the subtle thyroid grades carry.",
      teachingPoints: [
        "The endocrine review of the non-responder: TSH first, anti-TPO where available; the inordinately high rate of HPT dysfunction in major depression makes the screen actionable, not optional.",
        "Grade 4 is invisible to function tests: all normal, antibodies positive, and the comorbid depression-and-anxiety patient is exactly who carries it.",
        "Untreated patients progress from grade 4 to grade 1: the antibody-positive patient merits follow-up and treatment-attention, not reassurance.",
        "T3 (25–50 μg) augmentation is one of the best-validated antidepressant strategies: an endocrine intervention inside the routine algorithm (STAR*D); in India, inexpensive liothyronine makes it practical.",
      ],
    },
    {
      title: "The stress system recalibrated in childhood",
      presentation: "The court asked why her depression keeps returning: the report that answered with endocrinology.",
      initialPresentation: "A 27-year-old woman referred for a psychiatric report as part of proceedings following the disclosure of childhood abuse, with recurrent depressive episodes since late adolescence: each treated, each recovered, each relapsing under new stress. The court's question, relayed through her lawyer: whether the recurrence reflected something physical or something she could control.",
      history: "Childhood abuse and neglect disclosed for the first time in adulthood; three prior depressive episodes with good inter-episode recovery; relapses clustered around psychosocial stressors; no substance use; no medical illness. Previous records documented recurrent depression without an adversity formulation.",
      examination: "Mental state: a moderate depressive episode; low mood, self-critical cognitions, disturbed sleep; no psychotic features; full insight. The pattern the history supplied: recovery between episodes, collapse under stress; the sensitisation the CRF-persistence model predicts.",
      diagnosis: "Recurrent depression in an abuse survivor: the endocrine formulation: persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early adversity, posited to underlie the abuse-depression vulnerability association.",
      management: "The formulation delivered in the session: the stress system recalibrated in childhood; the biological, non-blaming account of the recurrence (persistent HPA-axis and brain-CRF hyperactivity after early untoward life events, shown in rats, primates and humans), with the CRF1-polymorphism work explaining why not every abused child develops depression. Standard depression treatment continued; the court report written around the same formulation: the vulnerability as a physical, treatable-in-principle change rather than a character deficiency.",
      outcome: "Engagement retained through the proceedings; the formulation accepted by the patient as the first non-blaming account of her recurrences, and cited in the court's disposition. The episode treated to recovery as before, with the relapse-prevention plan now naming the stress-sensitivity the formulation describes.",
      teachingPoints: [
        "The early-adversity mechanism: persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early abuse and neglect; demonstrated in rats, primates and humans of both sexes.",
        "The formulation script (the stress system recalibrated in childhood) is biological and non-blaming: the mechanism real, physical, and treatable-in-principle.",
        "The CRF1-receptor polymorphisms confer vulnerability or resistance: why not every abused child develops depression; the formulation holds the mechanism and the moderator together.",
        "The same formulation serves psychoeducation and court reports: the Indian clinical duty the note names for abuse survivors' depression vulnerability.",
      ],
    },
  ],
  clinicalPearls: [
    "Pleiotropy: adrenaline is a hormone in the adrenal medulla and a transmitter in the CNS; CRF is a hypothalamic hormone and an extrahypothalamic transmitter. The reason endocrine measurements can reflect brain events at all.",
    "HPA-axis hyperactivity in a significant subgroup of major depression is, per the chapter, the most important finding in all of biological psychiatry: its magnitude correlating with depression severity.",
    "The four thyroid grades end at the antibody: grade 4 has all function tests normal, and the antibody-positive patient still merits follow-up and treatment-attention.",
    "Blunted TSH response to TRH in about a quarter of depressives: chronic TRH hypersecretion with pituitary receptor downregulation; the prolactin response to TRH does not blunt.",
    "The DST failed as a diagnostic separator; its residue: persistent non-suppression after recovery predicts poor antidepressant response.",
    "The combined dexamethasone-CRF test detects HPA alteration in never-symptomatic first-degree relatives: the vulnerability question the trait marker asks.",
    "Blunted clonidine-GH is the most consistent neuroendocrine finding in affective disorders: trait-persistent in some studies, particularly robust in recent suicide attempters.",
    "PTSD runs the dissociated pattern: elevated CSF-CRF with normal or reduced cortisol; trauma's signature against melancholia's hypercortisolism.",
    "T3 (25–50 μg) both accelerates antidepressant onset and converts non-responders. STAR*D-confirmed; post-ablation patients do better on T3-plus-T4 than T4 alone.",
    "Early abuse leaves the stress system recalibrated: persistent HPA and CRF hyperactivity in rats, primates and humans, with CRF1-receptor SNPs deciding who is vulnerable.",
    "The prolactin serotonergic probes blunt in depression and in cluster-B and borderline personality: a 5-HT1A story.",
    "Depression's endocrine findings become internal-medicine findings: coronary disease, stroke, bone density, inflammation; possibly mediated by the hormones themselves.",
  ],
  highYieldSummary: [
    "DEFINITION AND THE FOUNDING PRINCIPLE: neuroendocrinology in psychiatry comprises five things; neural regulation of hormonal secretion; the neurotransmitter regulation of that; the CNS effects of every axis's hormones; axis alterations in psychiatric disorders; and the behavioural consequences of endocrinopathies: the discipline institutionalised in the journal and Society of Psychoneuroendocrinology. The founding discovery: neurones can function as true endocrine tissue; the magnocellular vasopressin-oxytocin system of the paraventricular hypothalamus releasing from the posterior pituitary, and the hypothalamic releasing-factor system controlling the anterior pituitary, with the immediate dissolution of the endocrine/neuronal/neuroendocrine demarcations, because PLEIOTROPY lets one substance act as hormone at one site and neurotransmitter at another: adrenaline in the adrenal medulla versus the CNS; CRF as hypothalamic hormone and extrahypothalamic neurotransmitter; TRH likewise.",
    "THE WINDOW AND THE ARCHITECTURE: the NEUROENDOCRINE WINDOW (the 1970s-80s strategy, still occasional) measured basal and stimulated pituitary and end-organ hormones in plasma as an index of brain monoamine activity, before functional imaging. Its assumption: the monoamine neurones regulating endocrine secretion are disordered (or not) to the same extent as the pathophysiological circuits; plausible for the widely projecting raphe-serotonin and locus-coeruleus-noradrenaline systems, IMPLAUSIBLE FOR DOPAMINE: the tuberoinfundibular system (arcuate/periventricular perikarya to the median eminence, regulating prolactin) has no reason to co-vary with the mesolimbicocortical pathway (ventral tegmental perikarya to accumbens, amygdala, cortex) implicated in schizophrenia. The prolactin-dopamine window tells nothing about limbic dopamine. The contribution despite the failure: the CRF hypothesis of depression, the HPT findings, and the research direction toward PET-ligand measurement of peptide receptors in living brain. The generic architecture underneath: prohormone transcription, translation in the endoplasmic reticulum, processing during axonal transport, terminal-vesicle packaging, median-eminence release into the primary plexus of the hypothalamo-hypophyseal portal vessels, adenohypophyseal sinusoids, trophic-cell membrane receptors, trophic hormone, end-organ secretion, feedback at pituitary and brain. GnRH (a decapeptide) driving LH and FSH the exemplar, the intravenous GnRH test the sensitive HPG probe.",
    "THE HPT AXIS: a century's knowledge of adult hypothyroidism's profound CNS disturbance, cognitive impairment and depression; the modern focus the subtle alterations. THE FOUR GRADES: grade 1 classic primary (raised TSH, low thyroid hormones, exaggerated TRH response); grade 2 normal hormones with raised basal TSH and exaggerated response; grade 3 normal basal everything with exaggerated TRH response detectable only by stimulation test; grade 4 all tests normal with antithyroid antibodies: symptomless autoimmune thyroiditis; untreated patients progress from grade 4 to grade 1. THE DEPRESSION FINDINGS: an inordinately high rate of HPT dysfunction in major depression, comorbid depression-and-anxiety patients especially showing grade-4 autoimmunity (schizophrenia and anxiety disorders showing normal axes); BLUNTED TSH RESPONSE TO TRH IN ~25% of depressives, replicated over 25 years since Prange and Kastin, mechanism obscure but best accounted for by chronic TRH hypersecretion with pituitary TRH-receptor downregulation: elevated CSF TRH in drug-free depressives the supporting evidence; TRH as extrahypothalamic transmitter with reported but unconfirmed intrathecal antidepressant effects. THE TREATMENT LITERATURE: T3 (25–50 μg) both accelerates onset and converts non-responders. STAR*D-confirmed; T4 (100–300 μg) augmentation; hypothyroid patients (and animals) respond poorly to antidepressants; post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius).",
    "THE HPA AXIS. THE CRF STORY: CRF chemically identified in 1981 (Vale, the 41-residue ovine peptide) after the 1955 crude discovery, opening comprehensive HPA assessment of the peptide coordinating the endocrine, immune, autonomic and behavioural effects of stress. THE CENTRAL CLAIM: HPA-axis hyperactivity in a significant subgroup of major depression is the most important finding in all of biological psychiatry, its magnitude correlating with severity; thousands of reports since Board/Bunney/Hamburg and Carroll/Sachar/Stokes/Besser applied Cushing's-diagnostic tests (urinary free cortisol, CSF cortisol, the dexamethasone suppression test) to depressives. THE ANATOMY: cortisol hypersecretion with ACTH hypersecretion (and co-secreted pro-opiomelanocortin products) driving trophic adrenocortical and pituitary enlargement (CT and MRI); CSF-CRF elevation and postmortem CRF-mRNA hyperexpression with CRF-1 receptor downregulation (binding and mRNA, including suicide victims); the intravenous-CRF test's blunted ACTH response (downregulated corticotrophs and/or cortisol feedback); everything normalising on recovery: persistent abnormality (dexamethasone non-suppression or CSF-CRF elevation) predicting poor antidepressant response. THE TESTS: the DST failed as a diagnostic separator (too insensitive, the test-honesty lesson); the COMBINED DEXAMETHASONE-CRF TEST (Holsboer: dexamethasone one day, standardised CRF stimulation the next) markedly more sensitive, detecting axis alteration in never-symptomatic first-degree relatives; the trait-vulnerability question. THE PRECLINICAL AND THERAPEUTIC WING: intracerebral CRF produces a depressive-anxiety syndrome in animals (decreased libido, appetite and weight loss, sleep disturbance, neophobia); hence CRF-1 receptor antagonists as a putative antidepressant class (activity in every preclinical screen, open-trial antidepressant effects; CRF-2 with urocortin ligands the second receptor story). THE CONSEQUENCES AND THE ADVERSITY LAYER: hippocampal neuronal loss at the glucocorticoid feedback site (MRI-documented), potentially explaining elderly depressives' increasing adrenocortical activity; persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early untoward life events (child abuse and neglect, rats, primates and humans of both sexes), posited to underlie the abuse-depression vulnerability association, with CRF-1-receptor SNPs conferring vulnerability or resistance and CRF-antagonist early intervention the prophylactic speculation. OTHER DISORDERS: HPA hyperactivity common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's; little evidence in schizophrenia; PTSD the dissociated pattern: elevated CSF-CRF with normal or reduced adrenocortical activity; Alzheimer's with cortical CRF-neurone degeneration and reciprocal receptor upregulation, temporally preceding the cholinergic involvement.",
    "THE SOMATOTROPHIC AXIS: the blunted GH response to provocative stimuli (particularly CLONIDINE (the α2-agonist), also apomorphine, desipramine and levodopa) is THE MOST CONSISTENT FINDING in affective-disorders research, persisting after recovery in some studies (a trait marker of depression vulnerability) and PARTICULARLY ROBUST IN RECENT SUICIDE ATTEMPTERS; basal secretion possibly showing a reduced nocturnal rise. The axis's uniquenesses: dual hypothalamic regulation by somatostatin (inhibitory) and GHRH (stimulatory); the only axis with unequivocally two physiological hypophysiotrophic hormones; and no single target gland (somatomedin C from the liver; direct bone and muscle effects). Somatostatin is itself a widely distributed CNS transmitter: markedly reduced in Alzheimer's, elevated in Huntington's basal ganglia; the GH-to-GHRH blunting in depressives carries a smaller database; the postmortem research gap is acknowledged; schizophrenia GH findings are confounded by antipsychotic treatment.",
    "THE GONADAL AXIS AND PROLACTIN: the rationale for expecting HPG hypoactivity (the female prevalence of depression, postpartum rates, depression's lost libido) against a remarkably small database; no basal gonadotrophin differences; small GnRH-test studies (blunted or normal); the field demanding menopausal-status, cycle-phase, contraceptive and baseline-steroid controls. The exceptions: LEUPROLIDE (the GnRH agonist) in premenstrual syndrome; a chemical ovariectomy via GnRH-receptor downregulation, with bone-density and cardiovascular caveats and add-back oestrogen-progesterone reducing efficacy; oestrogen's possible antidepressant contribution in perimenopausal and postpartum depression; the fluoxetine-response hint in oestrogen-replaced postmenopausal women; testosterone's antidepressant effect in hypogonadal depressed men. PROLACTIN: the unique axis: a non-peptide release-inhibiting factor (dopamine), a prolactin-releasing factor long sought but unisolated (TRH a candidate physiological PRF); basal prolactin mostly unaltered in depression, while the TSH-to-TRH blunts, the prolactin-to-TRH does not; the provocative-test database: BLUNTED PROLACTIN RESPONSES TO SEROTONERGIC PROBES (l-tryptophan, 5-HTP, fenfluramines, clomipramine, direct agonists) in depression AND in cluster-B and borderline personality disorder, mediated by altered 5-HT1A receptor responsiveness.",
    "THE SYNTHESIS, THE SYSTEMIC TURN AND THE INDIAN LAYER: the window strategy failed at its monoamine-assay purpose but succeeded beyond it; the CRF hypothesis of depression (multidisciplinary support, novel-therapeutic direction), the mechanism linking early trauma to adult depression, the replicated HPA and HPT findings (most depressives showing alteration in one of the two), the GH-clonidine and prolactin-serotonin bluntings. THE RESEARCH AGENDA: PET ligands for glucocorticoid, CRF and peptide receptors; target-hormone receptor measurement in patient brain. THE SYSTEMIC REFRAMING: depression as a systemic disease (increased coronary artery disease, stroke, perhaps cancer, reduced bone density (hip-fracture risk), raised inflammatory measures) POSSIBLY MEDIATED BY THE ENDOCRINE ALTERATIONS THEMSELVES, the neuroendocrine findings becoming internal-medicine findings. THE INDIAN LAYER: the goitre-belt history, iodisation programmes and high autoimmune-thyroid prevalence making the HPT screen obligatory (TSH, and anti-TPO where available, the grade-4 lesson: the antibody-positive, functionally normal patient still merits follow-up); T3 (liothyronine) inexpensive and available: the practical augmentation option taught in the STAR*D context; the cortisol-availability gradient (dexamethasone cheap; midnight-cortisol assays and CRF-stimulation tests specialist-confined) making the Indian application of the HPA literature clinical reasoning rather than test-based; the early-adversity formulation (the stress system recalibrated in childhood) powerful in psychoeducation and court reports; PTSD's pattern explaining trauma's distinctness in India's disaster, conflict and displacement populations; and the systemic-disease teaching giving psychiatry a seat in the cardiology-first post-MI and post-stroke consultation.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ne-quiz-1",
      question: "The principle that the same substance functions as a hormone at one site and a neurotransmitter at another is best illustrated by:",
      options: [
        "Adrenaline in the adrenal medulla versus the CNS, and CRF as hypothalamic hormone versus extrahypothalamic transmitter",
        "Insulin acting in the pancreas only",
        "Digestive enzymes acting on food",
        "Haemoglobin carrying oxygen",
      ],
      correctIndex: 0,
      explanation: "Pleiotropy — the founding reason the endocrine/neuronal demarcations lost their heuristic value, and the logical basis of the neuroendocrine window.",
      afterSectionId: "mechanism",
    },
    {
      id: "ne-quiz-2",
      question: "The major limitation of the neuroendocrine window strategy for schizophrenia research is that:",
      options: [
        "Plasma is unavailable for sampling",
        "The tuberoinfundibular dopamine system regulating prolactin is physiologically unrelated to the mesolimbicocortical dopamine pathway implicated in schizophrenia",
        "Prolactin cannot be measured in blood",
        "Dopamine is absent from the brain",
      ],
      correctIndex: 1,
      explanation: "The circuit-dissociation caveat: plasma prolactin-dopamine coupling says nothing about limbic dopamine — unlike the plausible serotonin and noradrenaline windows with their widely projecting cell groups.",
      afterSectionId: "brain",
    },
    {
      id: "ne-quiz-3",
      question: "Per the chapter, the 'most important finding in all of biological psychiatry' is:",
      options: [
        "The 5-HT2 receptor blockade rule",
        "HPA-axis hyperactivity in a significant subgroup of patients with major depression",
        "The dexamethasone suppression test's diagnostic validity",
        "Ventricular enlargement on imaging",
      ],
      correctIndex: 1,
      explanation: "Cortisol and CSF-CRF hypersecretion, pituitary and adrenal enlargement, CRF-1 downregulation, recovery-normalisation and prognosis-persistence — the HPA story in one claim, its magnitude correlating with depression severity.",
      afterSectionId: "timeline",
    },
    {
      id: "ne-quiz-4",
      question: "The blunted TSH response to TRH found in approximately 25% of patients with major depression is attributed most plausibly to:",
      options: [
        "Excess circulating thyroid hormone",
        "Chronic TRH hypersecretion with pituitary TRH-receptor downregulation, supported by elevated CSF TRH",
        "Prior pituitary surgery",
        "Excess iodine intake",
      ],
      correctIndex: 1,
      explanation: "The downregulation account — one of the field's durable, replicated findings (over 25 years since Prange and Kastin), with the prolactin response to TRH notably NOT blunting.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ne-quiz-5",
      question: "In PTSD, the neuroendocrine pattern is:",
      options: [
        "Identical to melancholic depression — high cortisol with high CRF",
        "Elevated CSF-CRF with normal or reduced adrenocortical activity — a dissociated pattern",
        "Low CRF with high cortisol",
        "No measurable abnormality",
      ],
      correctIndex: 1,
      explanation: "The trauma-physiology contrast with melancholia — one axis, two signatures — and the reason antidepressant-response expectations differ between trauma and melancholic presentations.",
      afterSectionId: "differential",
    },
    {
      id: "ne-quiz-6",
      question: "In a depressed patient failing an adequate antidepressant course, the endocrine intervention with STAR*D-confirmed evidence for both accelerating onset and converting non-responders is:",
      options: [
        "T3 at 25–50 μg",
        "T4 at 100–300 μg only",
        "Dexamethasone",
        "Leuprolide",
      ],
      correctIndex: 0,
      explanation: "T3 both accelerates antidepressant onset and converts non-responders — one of the best-validated antidepressant strategies, and inexpensive in India as liothyronine; T4 supplementation is the alternative augmentation strategy.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Define the pleiotropy principle and give its two named examples.", answer: "PLEIOTROPY: one substance, multiple roles; a hormone at one site and a neurotransmitter at another. THE EXAMPLES: adrenaline; a hormone released by the adrenal medulla, and the identical molecule acting as a transmitter in CNS synapses; and CRF: a hypothalamic hypophysiotrophic hormone driving ACTH, and an extrahypothalamic neurotransmitter (TRH likewise, with heterogeneous brain distribution and direct brain effects). The principle's consequence: the artificial endocrine/neuronal/neuroendocrine demarcations lost their heuristic value; the founding dissolution that makes endocrine measurement a legitimate window onto brain events.", topic: "Founding principle" },
    { question: "Explain the neuroendocrine-window strategy: its assumption, its plausibility for the monoamines, and the dopamine-circuit caveat.", answer: "THE STRATEGY (1970s-80s, still occasional): measuring basal and stimulated pituitary and end-organ hormones in plasma as an index of brain monoamine activity, before functional imaging, plasma hormones were the accessible brain. THE ASSUMPTION: the monoamine neurones regulating endocrine secretion are disordered (or not) to the same extent as the pathophysiological circuits. PLAUSIBLE for the widely projecting raphe-serotonin and locus-coeruleus-noradrenaline systems. IMPLAUSIBLE FOR DOPAMINE: the tuberoinfundibular system (arcuate/periventricular perikarya projecting to the median eminence, regulating prolactin) has no reason to co-vary with the mesolimbicocortical pathway (ventral tegmental perikarya to accumbens, amygdala and cortex) implicated in schizophrenia, so the prolactin-dopamine window tells nothing about limbic dopamine. THE CONTRIBUTION DESPITE THE FAILURE: the CRF hypothesis of depression, the HPT findings, and the research direction toward PET-ligand measurement of peptide receptors in living brain.", topic: "The window" },
    { question: "Recite the four grades of hypothyroidism, the depression findings of the HPT axis, and the treatment literature.", answer: "THE FOUR GRADES: grade 1 classic primary; raised TSH, low thyroid hormones, exaggerated TRH response; grade 2: normal thyroid hormones, raised basal TSH, exaggerated response; grade 3: normal basal everything, exaggerated TRH response detectable only by stimulation test; grade 4, all function tests normal with antithyroid antibodies: symptomless autoimmune thyroiditis; untreated patients progress from grade 4 to grade 1. THE DEPRESSION FINDINGS: an inordinately high rate of HPT dysfunction in major depression; comorbid depression-and-anxiety patients especially showing grade-4 autoimmunity (schizophrenia and anxiety disorders showing normal axes); blunted TSH response to TRH in ~25% of depressives: replicated over 25 years since Prange and Kastin, best accounted for by chronic TRH hypersecretion with pituitary TRH-receptor downregulation (elevated CSF TRH in drug-free depressives the support). THE TREATMENT LITERATURE: T3 (25–50 μg) both accelerates antidepressant onset and converts non-responders. STAR*D-confirmed; T4 (100–300 μg) supplementation as augmentation; hypothyroid patients (and animals) respond poorly to antidepressants; post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius).", topic: "The HPT axis" },
    { question: "Recite the HPA-depression findings list: the full anatomy of the field's biggest finding.", answer: "THE CENTRAL CLAIM: HPA-axis hyperactivity in a significant subgroup of major depression; the most important finding in all of biological psychiatry, its magnitude correlating with depression severity, with thousands of reports since the founding observations (Board/Bunney/Hamburg; Carroll/Sachar/Stokes/Besser) applied Cushing's-diagnostic tests to depressives. THE ANATOMY: cortisol hypersecretion with ACTH hypersecretion (and its co-secreted pro-opiomelanocortin products) driving trophic adrenocortical and pituitary enlargement (CT and MRI); CSF-CRF elevation and postmortem CRF-mRNA hyperexpression; CRF-1 receptor downregulation (binding and mRNA studies, including in suicide victims); the intravenous-CRF test's blunted ACTH response (downregulated corticotrophs and/or cortisol feedback); everything normalising on recovery, and persistent HPA abnormality (dexamethasone non-suppression or CSF-CRF elevation) predicting poor antidepressant response. THE OTHER-DISORDERS LAYER: HPA hyperactivity common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's; little evidence in schizophrenia; PTSD the dissociated pattern: elevated CSF-CRF with normal or reduced adrenocortical activity; Alzheimer's with cortical CRF-neurone degeneration and reciprocal receptor upregulation, temporally preceding the cholinergic involvement.", topic: "The HPA axis" },
    { question: "What is the combined dexamethasone-CRF test, and what does the never-symptomatic relatives finding raise?", answer: "THE TEST (Holsboer): dexamethasone administered one day, standardised CRF stimulation the next; a markedly more sensitive probe than either test alone, born of the DST's diagnostic failure (too insensitive as a separator; the field's lesson in test-honesty, with persistent non-suppression after recovery retaining prognostic value: the prediction of harder-to-treat illness). THE RELATIVES FINDING: the combined test detects axis alteration in never-symptomatic first-degree relatives of depressives; raising the trait-vulnerability question: whether the endocrine abnormality is a state marker of illness or an endophenotype of vulnerability. The finding edges the endocrine marker toward a vulnerability test: a research instrument, not a clinical predictor, but the future the DST story was always reaching for.", topic: "The Dex-CRF test" },
    { question: "Describe CRF's preclinical behavioural profile and the therapeutic consequence.", answer: "THE PROFILE: intracerebral CRF produces a depressive-anxiety syndrome in animals (decreased libido, appetite and weight loss, sleep disturbance and neophobia) the peptide coordinating the endocrine, immune, autonomic and behavioural effects of stress, and behaving like depression's own mediator when placed directly into the brain. THE THERAPEUTIC CONSEQUENCE: CRF-1 receptor antagonists as a putative antidepressant class (activity in every preclinical screen, open-trial antidepressant effects) with CRF-2 and its urocortin ligands the second receptor story. The grade of honesty: a novel-therapeutic direction, not a settled prescription; the class that would convert the CRF hypothesis into pharmacology.", topic: "The CRF hypothesis" },
    { question: "Recount the early-abuse neuroendocrine persistence story and its genetic moderator.", answer: "THE PERSISTENCE: early untoward life events (child abuse and neglect) leave HPA-axis and extrahypothalamic-CRF hyperactivity persisting into adult life, demonstrated in rats, primates and humans of both sexes; the persistence is posited to underlie the abuse-depression vulnerability association: the biological bridge between early trauma and adult depression, and the formulation clinicians deliver as 'the stress system recalibrated in childhood' (biological, non-blaming, powerful in psychoeducation and court reports). THE MODERATOR: CRF-1-receptor SNPs confer vulnerability or resistance to depression after abuse; the gene-environment interaction answering why not every abused child develops depression. THE SPECULATION: CRF-antagonist early intervention as prophylaxis; the direction the vulnerability findings point toward.", topic: "Early adversity" },
    { question: "State the growth-hormone findings, the somatotrophic axis's two uniquenesses, and the prolactin-serotonin story.", answer: "THE GH FINDINGS: the blunted GH response to provocative stimuli (particularly clonidine (the α2-agonist), also apomorphine, desipramine and levodopa) is the most consistent neuroendocrine finding in affective-disorders research; it persists after recovery in some studies (a trait marker of depression vulnerability) and is particularly robust in recent suicide attempters; basal secretion possibly shows a reduced nocturnal rise. THE TWO UNIQUENESSES: dual hypothalamic regulation by somatostatin (inhibitory) and GHRH (stimulatory); the only axis with unequivocally two physiological hypophysiotrophic hormones; and no single target gland (somatomedin C from the liver; direct bone and muscle effects), with somatostatin also a widely distributed CNS transmitter (markedly reduced in Alzheimer's, elevated in Huntington's basal ganglia). THE PROLACTIN-SEROTONIN STORY: basal prolactin mostly unaltered in depression (while the TSH-to-TRH blunts, the prolactin-to-TRH does not) but the provocative-test database shows blunted prolactin responses to serotonergic probes (l-tryptophan, 5-HTP, fenfluramines, clomipramine, direct agonists) in depression AND in cluster-B and borderline personality disorder, mediated by altered 5-HT1A receptor responsiveness.", topic: "GH and prolactin" },
  ],
  faqs: [
    { question: "How can a hormone also be a neurotransmitter?", answer: "Same molecule, different job by location: adrenaline from the adrenal medulla is a hormone; the identical molecule released in CNS synapses is a transmitter; CRF and TRH likewise. The body reuses its chemistry, which is why endocrine measurements can reflect brain events, and why the boundaries between the systems dissolved." },
    { question: "Why does my depressed patient need thyroid tests?", answer: "Because subtle thyroid failure is over-represented in depression (down to the antibody-only grade 4) and hypothyroid patients respond poorly to antidepressants. The screen and the augmentation (T3 speeding and rescuing response, STAR*D-confirmed) are the practical dividends of the finding." },
    { question: "What is the dexamethasone test's status?", answer: "As a diagnostic separator it failed: too insensitive; as research machinery it produced the field's biggest finding (HPA hyperactivity in depression); and persistent non-suppression after recovery retains prognostic value, predicting harder-to-treat illness. The combined dexamethasone-CRF test is the modern sensitive version, still a research instrument." },
    { question: "How does childhood abuse raise adult depression risk biologically?", answer: "Through a recalibrated stress system: early adversity leaves HPA-axis and brain-CRF activity persistently elevated (shown in rats, monkeys and humans) sensitising the person to later depression, with CRF-1-receptor gene variants determining who is most vulnerable. The mechanism is real, physical, and treatable-in-principle." },
    { question: "Is PTSD's stress system the same as depression's?", answer: "No: PTSD shows high brain CRF with normal or reduced cortisol; a dissociated pattern opposite to melancholia's hypercortisolism. The difference matters for treatment expectations, which is why the two presentations can respond differently to the same medicines." },
    { question: "Why does the doctor mention my bones and heart when treating depression?", answer: "Because HPA-driven cortisol excess links depression to systemic disease (reduced bone density with fracture risk, coronary disease and stroke risk, raised inflammatory measures) the endocrine findings turning depression into an internal-medicine risk state, and its treatment into prevention." },
    { question: "Which endocrine tests belong in the routine psychiatric workup in India?", answer: "TSH in every depression assessment, with anti-TPO antibodies added where available: the grade-4 lesson applied in a country where autoimmune thyroiditis is under-detected and iodine-deficiency regions persist. Dexamethasone is cheap but the HPA tests remain research machinery; midnight cortisol and CRF stimulation are confined to specialist centres. The Indian application of the HPA literature is primarily clinical reasoning rather than test-based." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford chapter's clinical position — the endocrine workup of depression (thyroid function including the antibody grades) and the T3 augmentation algorithm step (paraphrased from the source chapter)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 2.3.3 (Nemeroff & Neigh) — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Bunevicius R et al. — thyroxine versus thyroxine plus triiodothyronine in thyroid replacement: mood and cognition outcomes (NEJM, 1999)" },
      { source: "Altshuler L et al. / the STAR*D level-3 report — T3 augmentation confirmed as the modern confirmation of the chapter's citation" },
    ],
    reviews: [
      { source: "Vale W et al. — characterization of a 41-residue ovine hypothalamic peptide that stimulates ACTH secretion (Science 213:1394–7, 1981): CRF's identification" },
      { source: "Prange AJ et al. and Kastin A et al. — the original TSH-blunting reports and the intrathecal-TRH antidepressant observations" },
      { source: "Board F, Bunney W & Hamburg D; Carroll B, Sachar E, Stokes P & Besser G — the founding HPA-depression observations" },
      { source: "Nemeroff CB et al. — CSF-CRF elevation; CRF-1 downregulation in suicide victims; adrenocortical and pituitary enlargement" },
      { source: "Holsboer F et al. — the combined dexamethasone/CRH test; the never-symptomatic relatives study" },
      { source: "Heim C & Nemeroff CB — the early-adversity HPA/CRF persistence and the CRF1-polymorphism moderation" },
      { source: "Sapolsky R — glucocorticoid-hippocampal damage: the neuronal-loss mechanism" },
      { source: "Checkley S — the clonidine-GH blunting tradition; Matussek N — the apomorphine lineage" },
      { source: "Casper R et al. / the fenfluramine-prolactin studies — the serotonergic-probe blunting in depression and borderline personality" },
      { source: "Bissette G et al. — somatostatin reduction in Alzheimer's; the CRF-neurone degeneration literature" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for distress and guidance on where to go" },
      { source: "The thyroid-explanation script — the one-minute instrument this course hands to every clinician ordering the depression thyroid screen" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: how hormones and the brain talk to each other, why thyroid tests belong in a depression workup, the stress-system explanation for childhood hardship.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The pleiotropy principle, the window, the axis architecture, the five axes' findings, the tests and their honesty.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
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
      estimatedTime: "37 min",
      description: "Everything: the endocrine review craft, the formulation scripts, the Indian availability gradient, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The pleiotropy principle, the five components, the axes' scope.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the discipline's five components and state the pleiotropy principle with both named examples." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The axis engine, the window and its dopamine caveat, the HPA, HPT and somatotrophic chains, the field's own history.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the generic axis chain, recite the HPA anatomy of depression, and say why the prolactin window cannot see limbic dopamine." },
    { number: 3, title: "Clinical Practice", description: "The endocrine signals, the workup criteria, the differentials, and the practical interventions.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the thyroid screen of depression, read the four grades, and deploy the T3 augmentation and the adversity formulation." },
    { number: 4, title: "Indian Context", description: "The thyroid-epidemiology duty, the availability gradient, the decision path and the common mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the thyroid, augmentation and adversity scripts, and decide which endocrine test the Indian setting can actually run." },
    { number: 5, title: "Exam Revision", description: "The exam lens, the two cases and the high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the four-grades question, the DST-status question and the PTSD-pattern question cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer all eight recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 2.3.3 (Nemeroff & Neigh) — the source chapter; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Vale W et al. — characterization of a 41-residue ovine hypothalamic peptide that stimulates ACTH secretion (Science 213:1394–7): CRF's chemical identification", sourceType: "primary", year: "1981", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Prange AJ et al. and Kastin A et al. — the original TSH-blunting reports and the intrathecal-TRH antidepressant observations", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S4", source: "Bunevicius R et al. — thyroxine versus thyroxine plus triiodothyronine in thyroid replacement (NEJM)", sourceType: "trial", year: "1999", dateReviewed: "2026-09-30" },
    { id: "S5", source: "Altshuler L et al. / the STAR*D level-3 report — T3 augmentation confirmed (the modern confirmation of the chapter's citation)", sourceType: "trial", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S6", source: "Board F, Bunney W & Hamburg D; Carroll B, Sachar E, Stokes P & Besser G — the founding HPA-depression observations applying Cushing's-diagnostic tests to depressives", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Nemeroff CB et al. — CSF-CRF elevation; CRF-1 receptor downregulation in suicide victims; adrenocortical and pituitary enlargement", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Holsboer F et al. — the combined dexamethasone/CRH test; the never-symptomatic first-degree-relatives study", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Heim C & Nemeroff CB — the early-adversity HPA/CRF persistence and the CRF1-polymorphism moderation (as cited)", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Sapolsky R — glucocorticoid-hippocampal damage: the neuronal-loss mechanism (as cited)", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S11", source: "Checkley S — the clonidine-GH blunting tradition; Matussek N — the apomorphine lineage (as cited)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S12", source: "Casper R et al. / the fenfluramine-prolactin studies — the serotonergic-probe blunting in depression and cluster-B/borderline personality", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S13", source: "Bissette G et al. — somatostatin reduction in Alzheimer's; the CRF-neurone degeneration literature", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The founding principle: neurones can function as true endocrine tissue; the magnocellular vasopressin-oxytocin system of the paraventricular hypothalamus releasing from the posterior pituitary, and the hypothalamic releasing-factor system controlling the anterior pituitary, with the endocrine/neuronal/neuroendocrine demarcations dissolving because pleiotropy lets one substance act as hormone at one site and neurotransmitter at another (adrenaline in the adrenal medulla versus the CNS; CRF as hypothalamic hormone and extrahypothalamic neurotransmitter; TRH likewise); neuroendocrinology in psychiatry comprising neural regulation of hormonal secretion, the neurotransmitter regulation thereof, the CNS effects of every axis's hormones, axis alterations in psychiatric disorders, and the behavioural consequences of endocrinopathies.", grade: "established", sources: ["S1"] },
    { text: "The neuroendocrine window: the 1970s-80s strategy of measuring basal and stimulated pituitary and end-organ hormones in plasma as an index of brain monoamine activity rests on the assumption that the monoamine neurones regulating endocrine secretion are disordered (or not) to the same extent as the pathophysiological circuits; plausible for the widely projecting raphe-serotonin and locus-coeruleus-noradrenaline systems, implausible for dopamine, where the tuberoinfundibular system regulating prolactin (arcuate/periventricular perikarya to the median eminence) has no reason to co-vary with the mesolimbicocortical pathway implicated in schizophrenia (ventral tegmental perikarya to accumbens, amygdala, cortex); the strategy's contributions despite this failure: the CRF hypothesis of depression, the HPT findings, and the research direction toward PET-ligand measurement of peptide receptors in living brain.", grade: "established", sources: ["S1"] },
    { text: "The generic axis architecture: transcription of the prohormone DNA, translation in the endoplasmic reticulum, processing during axonal transport, packaging in terminal vesicles, release at the median eminence into the primary plexus of the hypothalamo-hypophyseal portal vessels, humeral transport to the adenohypophyseal sinusoids, specific membrane receptors on trophic-hormone cells, release or inhibition of the trophic hormone, end-organ secretion and feedback at pituitary and brain; the exemplar GnRH (a decapeptide) driving LH and FSH to oestrogen/progesterone in women and testosterone in men, with the exogenous intravenous GnRH stimulation test the sensitive HPG probe (influenced by GnRH secretion, gonadotrophin secretion and gonadal-steroid feedback at pituitary and brain).", grade: "established", sources: ["S1"] },
    { text: "The HPT findings: the four grades of hypothyroidism; grade 1 classic primary (raised TSH, low thyroid hormones, exaggerated TRH response), grade 2 normal hormones with raised basal TSH and exaggerated response, grade 3 normal basal everything with exaggerated TRH response detectable only by stimulation test, grade 4 all tests normal with antithyroid antibodies (symptomless autoimmune thyroiditis), untreated patients progressing from grade 4 to grade 1; an inordinately high rate of HPT dysfunction in major depression with comorbid depression-and-anxiety patients especially showing grade-4 autoimmunity (schizophrenia and anxiety disorders showing normal axes); and the blunted TSH response to TRH in approximately 25% of depressives: replicated for over 25 years since Prange and Kastin, best accounted for by chronic TRH hypersecretion with pituitary TRH-receptor downregulation, supported by elevated CSF TRH in drug-free depressives, with TRH as extrahypothalamic transmitter and intrathecal antidepressant effects reported but unconfirmed.", grade: "established", sources: ["S1", "S3"] },
    { text: "The thyroid treatment literature: T3 (25–50 μg) both accelerates antidepressant onset and converts non-responders; confirmed in STAR*D; T4 (100–300 μg) supplementation as an augmentation strategy; hypothyroid patients (and animals) respond poorly to antidepressants; and post-ablation patients do better on T3-plus-T4 than T4 alone for mood and cognition (Bunevicius).", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "The HPA core claim: hyperactivity in a significant subgroup of major depression (the most important finding in all of biological psychiatry, its magnitude correlating with depression severity) with the anatomy of the finding: cortisol hypersecretion with ACTH hypersecretion and its co-secreted pro-opiomelanocortin products; trophic adrenocortical and pituitary enlargement (CT and MRI); CSF-CRF elevation and postmortem CRF-mRNA hyperexpression with CRF-1 receptor downregulation in binding and mRNA studies including suicide victims; the blunted ACTH response to intravenous CRF (downregulated corticotrophs and/or cortisol feedback); everything normalising on recovery, and persistent HPA abnormality (dexamethasone non-suppression or CSF-CRF elevation) predicting poor antidepressant response.", grade: "established", sources: ["S1", "S6", "S7"] },
    { text: "The dexamethasone story: the founding observations (Board/Bunney/Hamburg; Carroll/Sachar/Stokes/Besser) applied Cushing's-diagnostic tests (urinary free cortisol, CSF cortisol, the dexamethasone suppression test) to depressives; the DST failed as a diagnostic separator (too insensitive), teaching the field test-honesty, while persistent non-suppression after recovery retains prognostic value; and the combined dexamethasone-CRF test (Holsboer: dexamethasone one day, standardised CRF stimulation the next) shows markedly greater sensitivity, detecting axis alteration in never-symptomatic first-degree relatives of depressives; the trait-vulnerability question.", grade: "supported", sources: ["S1", "S8"] },
    { text: "The preclinical wing and the therapeutic direction: intracerebral CRF produces a depressive-anxiety syndrome in animals (decreased libido, appetite and weight loss, sleep disturbance, neophobia) CRF being the peptide coordinating the endocrine, immune, autonomic and behavioural effects of stress; hence CRF-1 receptor antagonists as a putative antidepressant class (activity in every preclinical screen, open-trial antidepressant effects), with CRF-2 and its urocortin ligands the second receptor story; the consequences of chronic cortisol include hippocampal neuronal loss at the glucocorticoid feedback site (MRI-documented), potentially explaining elderly depressives' increasing adrenocortical activity.", grade: "proposed", sources: ["S1", "S2", "S10"] },
    { text: "The early-adversity findings: persistent HPA-axis and extrahypothalamic-CRF hyperactivity after early untoward life events (child abuse and neglect, demonstrated in rats, primates and humans of both sexes) posited to underlie the abuse-depression vulnerability association, with CRF-1-receptor SNPs conferring vulnerability or resistance to depression after abuse, and CRF-antagonist early intervention the prophylactic speculation.", grade: "supported", sources: ["S1", "S9"] },
    { text: "The growth-hormone findings: the blunted GH response to provocative stimuli (particularly clonidine (the α2-agonist), also apomorphine, desipramine and levodopa) the most consistent neuroendocrine finding in affective-disorders research, persisting after recovery in some studies (a trait marker of depression vulnerability) and particularly robust in recent suicide attempters, with basal secretion possibly showing a reduced nocturnal rise; the axis's uniquenesses: dual hypothalamic regulation by somatostatin and GHRH (the only axis with unequivocally two physiological hypophysiotrophic hormones) and no single target gland (somatomedin C from the liver; direct bone and muscle effects); somatostatin a widely distributed CNS transmitter, markedly reduced in Alzheimer's and elevated in Huntington's basal ganglia; blunted GH-to-GHRH in depressives on a smaller database; the postmortem research gap acknowledged; schizophrenia GH findings confounded by antipsychotic treatment.", grade: "established", sources: ["S1", "S11"] },
    { text: "The gonadal-axis literature read honestly: the rationale for expecting hypoactivity (the female prevalence of depression, postpartum rates, depression's lost libido) against a remarkably small database; no basal gonadotrophin differences, small GnRH-test studies (blunted or normal), the field demanding menopausal-status, cycle-phase, contraceptive and baseline-steroid controls; the exceptions: leuprolide (the GnRH agonist) in premenstrual syndrome; a chemical ovariectomy via GnRH-receptor downregulation, with bone-density and cardiovascular caveats and add-back oestrogen-progesterone reducing efficacy; oestrogen's possible antidepressant contribution in perimenopausal and postpartum depression; the fluoxetine-response hint in oestrogen-replaced postmenopausal women; testosterone's antidepressant effect in hypogonadal depressed men.", grade: "supported", sources: ["S1"] },
    { text: "The prolactin story: the unique axis with a non-peptide release-inhibiting factor (dopamine) and a prolactin-releasing factor long sought but unisolated (TRH a candidate physiological PRF); basal prolactin mostly unaltered in depression (while the TSH-to-TRH blunts, the prolactin-to-TRH does not) with the provocative-test database showing blunted prolactin responses to serotonergic probes (l-tryptophan, 5-HTP, fenfluramines, clomipramine, direct agonists) in depression AND in cluster-B and borderline personality disorder, mediated by altered 5-HT1A receptor responsiveness.", grade: "established", sources: ["S1", "S12"] },
    { text: "The other-disorders contrasts and the systemic reframing: HPA hyperactivity common when depression complicates multiple sclerosis, Alzheimer's, multi-infarct dementia and Huntington's, with little evidence in schizophrenia; PTSD showing the dissociated pattern: elevated CSF-CRF with normal or reduced adrenocortical activity; Alzheimer's showing cortical CRF-neurone degeneration with reciprocal receptor upregulation, temporally preceding the cholinergic involvement; and depression reframed as a systemic disease (increased coronary artery disease, stroke, perhaps cancer, reduced bone density (hip-fracture risk), raised inflammatory measures) possibly mediated by the endocrine alterations themselves, with the research agenda of PET ligands for glucocorticoid, CRF and peptide receptors and target-hormone receptor measurement in patient brain.", grade: "supported", sources: ["S1", "S13"] },
  ],
};
