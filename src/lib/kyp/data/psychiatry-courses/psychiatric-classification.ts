import type { PsychiatryCourse } from "./types";

/**
 * DIAGNOSIS & CLASSIFICATION (psychiatric-classification) — canonical
 * Psychiatry concept course (migration batch 15, Group Q —
 * Foundations & sciences).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatric-classification.md — untouched
 * foundation), whose own source_map: NOTP 2e (2009) ch 1.9
 * (Part 1), original rewrite of First & Pincus — the histories,
 * conceptual issues and DSM-IV/ICD-10 differences; modern updates
 * (DSM-5, ICD-11) flagged in-text as post-Oxford. Re-researched
 * against the lineages the note itself cites (the Feighner
 * criteria of Robins and Guze; the Spitzer-Endicott-Robins RDC;
 * the APA DSM editions with the four-volume Sourcebook; the WHO
 * ICD-6-through-ICD-10 family with Sartorius's 194-centre,
 * 55-country field trials; the Leckman family-study correction of
 * the panic-depression prohibition; the Kendell validity lineage
 * and van Praag's validity skepticism) with per-claim provenance.
 *
 * Drug routes: the note assigns no medication any role in
 * classification — drugLinks is empty by design; the disorder
 * courses carry their own pharmacology, and the DSM-5/ICD-11
 * detail, the RDoC framework and the ICF have no KYP lessons —
 * recorded in contentGaps, never invented.
 */
export const psychiatricClassificationCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatric-classification",
  title: "Diagnosis & Classification",
  shortName: "Classification",
  kind: "concept",
  category: "Foundations & Sciences",
  groupLetter: "Q",
  groupName: "Foundations & sciences",
  learningPath: ["Psychiatry", "Foundations & Sciences", "Diagnosis & Classification"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-30",

  estimatedReadTime: "31 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "DSM/ICD logic: categories, criteria, the operational revolution and its limits.",

  summary:
    "Psychiatric classification is descriptive and operationalised because aetiology remains unknown; ICD and DSM serve different masters, so the same patient can carry different labels in each. This course teaches the definitions, the operational-criteria revolution and the F-chapter architecture.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define diagnosis, disease, disorder, illness, sickness and classification, and state why disorder is psychiatry's honest term rather than disease.",
    "List the five stakeholder groups and their competing needs, and explain the ICD-10 strategy of different products for different users.",
    "State the four-plus conceptual issues: descriptive versus theory-based, pathology versus normalcy, categorical versus dimensional, lumping versus splitting, and the single- versus multiple-diagnosis hierarchy, with one example each.",
    "Trace the operational-criteria revolution: the Feighner criteria with their inclusion/exclusion structure and citation record, the Research Diagnostic Criteria, and their incorporation into DSM-III.",
    "Describe DSM-III's contributions (the descriptive atheoretical approach, the explicit criteria, the multiaxial system, the reliability gains) and the correction history that produced DSM-III-R.",
    "Describe ICD-10's development and its family of documents (the statistical/glossary version, the Blue Book, the research criteria and the primary-care version) with the field-trial scale of 194 centres in 55 countries.",
    "Explain the fundamental ICD-DSM differences: classification versus nomenclature with the mixed anxiety-depression example, the impairment rules with the New York snake-phobia example, and the F-chapter structural coding.",
    "Map the ICD-10 F-subchapters F0-F9 with their key relocation decisions, and know the DSM-5 and ICD-11 positions as flagged modern context.",
  ],
  quickFacts: [
    { label: "The honest term", value: "Disorder, not disease", detail: "Disease implies objective pathology or presumed aetiology (pancreatic cancer, strep throat, Alzheimer's); disorder is syndromic definition (symptoms, history, sometimes laboratory findings) where aetiology is unknown. The classification itself admits this." },
    { label: "The framing question", value: "Whose needs?", detail: "Clinicians wanting treatable categories; researchers wanting homogeneity; educators wanting structure; public-health administrators wanting statistics; critics wanting less stigmatizing misuse. ICD-10's answer: different products for different target groups." },
    { label: "The citation datum", value: "1,650 citations", detail: "The Feighner criteria (Robins and Guze, Washington University, St Louis, 1972): 16 disorders with inclusion and exclusion criteria, cited 1,650 times 1972-82 against the typical 2.1 per paper: the research community's vote for operationalisation." },
    { label: "The worked example", value: "The New York snake phobia", detail: "Marked snake fear, never a snake encountered, no functional impact: not a mental disorder in DSM-IV (the clinical-significance criterion unmet); a snake phobia in ICD-10 (symptoms sufficient): the same patient, two systems." },
    { label: "The classic discrepancy", value: "1 month vs 6 months", detail: "ICD-10 codes schizophrenia at 1 month of symptoms; DSM-IV requires 6 months of illness including prodrome: the genuine outlook difference between the systems, and the Indian record follows ICD's month." },
    { label: "The field-trial scale", value: "194 centres, 55 countries", detail: "The ICD-10 clinical guidelines were field-tested at unprecedented scale; International Revision Conference approval 1989, World Health Assembly approval for 1993 introduction." },
    { label: "The coding depth", value: "F10.31", detail: "Alcohol withdrawal state with convulsions: third digit the substance, fourth the syndrome, fifth the qualifier; four digits allow 1,000 diagnoses with one-third used, expansion designed in." },
    { label: "India's chapter", value: "F23", detail: "Acute and transient psychotic disorders were given particular attention for developing countries, where short-lasting good-prognosis psychoses are frequent: the classification built with Indian presentations in the field trials." },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The duration-gate classic: ICD-10's 1 month of symptoms vs DSM-IV's 6 months of illness including prodrome; the genuine outlook difference" },
    { label: "Acute & Transient Psychotic Disorders", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "F23's developing-country provision: the short-lasting good-prognosis psychoses the WHO field trials wrote the block for" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Neurotic depression's dissolution. ICD-9's 300.4 becoming mostly dysthymia (F34.1), the endogenous/neurotic dualism ended" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "F3 reunifies all mood disorders: recurrent mania coded bipolar regardless of depressions" },
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Mixed anxiety-depression: a category in ICD-10 by common usage, rejected by DSM-IV for validity; the classification-vs-nomenclature worked case" },
    { label: "Personality Disorders", type: "condition", href: "/psychiatry/personality-disorders-overview/", note: "F6's architecture: the specific personality disorders, the emotionally-unstable impulsive and borderline types, factitious disorder's innovation" },
    { label: "Schizoaffective & Schizotypal Disorders", type: "condition", href: "/psychiatry/schizoaffective-schizotypal/", note: "Schizotypal's relocation: coded F21 inside F2's schizophrenia-schizotypal-delusional block: a personality-type category living among the psychoses" },
    { label: "Descriptive Phenomenology", type: "condition", href: "/psychiatry/psychiatric-phenomenology/", note: "The descriptive material classification organises: symptoms, form and course before any criterion list is applied" },
    { label: "Psychiatric Assessment", type: "condition", href: "/psychiatry/psychiatric-assessment/", note: "Diagnosis as process: the clinical encounter whose output the classification names and codes" },
    { label: "Hypothalamus", type: "brain-region", href: "#brain", note: "Early-life stress producing persistent HPA/CRF changes: the note's one named biological validation of the disorder concept" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The engine of psychiatric classification is a bargain struck with ignorance. Because aetiology is unknown for most disorders, assessment rests on reports and observation with laboratory tests largely irrelevant, the systems define disorders descriptively, as syndromes of symptoms, history and sometimes laboratory findings. The operational move then converts each syndrome into an explicit criterion list with inclusion and exclusion conditions, so that two clinicians observing the same patient apply the same rules and reach the same label: reliability purchased, validity claims suspended. The atheoretical principle is what makes the list shareable: criteria are based on symptomatic presentation, not cause-theories, so the cognitivist, the neurobiologist and the psychodynamicist, who disagree utterly about why the panic happens, agree on how a panic attack presents. The threshold rules guard the boundary: duration gates (ICD's 1 month against DSM's 6 for schizophrenia) and DSM's clinical-significance criterion (clinically significant distress or impairment) standing where symptoms alone, occurring in non-disordered people too, would generate false positives. The multiaxial system spread the record across the biopsychosocial field: the florid presenting Axis I, personality and developmental on Axis II, physical conditions on III, stressors on IV, adaptive functioning on V. And the category then serves its masters differently: ICD includes by common international usage with no implication of validity, because statistics need unambiguous categories; DSM's inclusion implies APA sanction, clinical utility and an empirical database. Underneath the whole engine runs the unresolved question the Oxford chapter poses: are these categories bounded diseases awaiting discovery or descriptive compromises awaiting aetiological validation: the categorical-versus-dimensional issue that DSM-5 and ICD-11's hybrid reforms are still answering.",
    steps: [
      "The predicament: aetiology unknown for most disorders, assessment by reports and observation, laboratory tests largely irrelevant until recently; the disease term unavailable and disorder, the syndromic definition, the honest substitute.",
      "The descriptive turn: syndromes assembled from symptoms, history and course, grouped by principles of similarity and difference, and because the principles differ, classifications differ radically.",
      "The operational move: each syndrome converted into an explicit criterion list (inclusion and exclusion conditions, thresholds, duration rules) the Feighner-to-RDC-to-DSM-III lineage.",
      "The reliability purchase: explicit criteria let two clinicians reach the same label; the reliability gains over DSM-II's glossary demonstrated in the large NIMH field trial; the same compact every subsequent edition renews.",
      "The atheoretical sharing rule: criteria by presentation rather than cause-theory, so clinicians of all orientations apply the same list while disagreeing about the causes.",
      "The caseness gates: duration rules and the clinical-significance criterion (clinically significant distress or impairment) guarding against the false positives that symptoms alone, present in non-disordered people, would produce.",
      "The master-served divergence: ICD as classification-for-statistics (inclusion by usage, no validity claim) against DSM as nomenclature (inclusion implying sanction, utility and data); the categories diverging where the purposes do, and the validity question held open beneath both.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hypothalamus", name: "Hypothalamus (the validation address)", role: "The head of the HPA axis: early-life stress producing persistent CRF and HPA changes is the note's one named biological validation of the disorder concept: the address where aetiological validation would have to arrive for the descriptive categories to become diseases.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the symptom-without-disorder circuit)", role: "The fear circuitry behind the phobia example: the fear and avoidance are real circuit firing, and the clinical-significance criterion asks what the firing costs the life, not whether it happens. A teaching bridge the note's descriptive frame grades, not claims.", grade: "proposed" },
    { id: "prefrontal", name: "Prefrontal cortex (the criteria-application engine)", role: "Criterion counting, threshold judgement and category assignment are executive tasks: the operational revolution wrote the rules down precisely because they cannot be left to intuition. A teaching bridge, honestly graded.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Corticotropin-releasing factor", symbol: "CRF", role: "The note's one named biological validation: persistent CRF changes after early-life stress; the kind of finding that would have to generalise before the descriptive categories earn aetiological validation.", grade: "supported" },
    { name: "Dopamine", symbol: "DA", role: "The psychoses' pharmacological bridge: the F2 block whose treatment is dopaminergic; drug response as the external evidence the validity discussion asks for. A teaching bridge the note's descriptive frame awaits, never its claim.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood and neurotic blocks' equivalent bridge. The F3-F4 categories whose treatments are serotonergic, the same external evidence question in the affective territory. A teaching bridge, honestly graded.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "operational-pathway",
      name: "The operational-criteria pathway (encounter to category)",
      steps: [
        { label: "The clinical encounter", detail: "Reports and observation; laboratory tests largely irrelevant: the material the classification must sort" },
        { label: "The syndrome assembled", detail: "Symptoms, history, sometimes laboratory findings: the disorder's syndromic definition" },
        { label: "The criterion check", detail: "Inclusion and exclusion conditions applied: the operational move the Feighner criteria began" },
        { label: "The threshold gates", detail: "Duration (1 vs 6 months) and the clinical-significance criterion: distress or impairment deciding caseness" },
        { label: "The category assigned", detail: "The F-code or DSM name recorded; comorbidity questions following where hierarchy does not trump" },
        { label: "The validity question", detail: "Descriptive compromise or bounded disease? The question every assigned category leaves open" },
      ],
      clinicalManifestation: "The same patient leaves two clinics with two labels: the snake phobia that is a disorder in ICD-10 and health in DSM-IV.",
      grade: "established",
    },
    {
      id: "system-choice-pathway",
      name: "The system-choice pathway (whose needs?)",
      steps: [
        { label: "The user identified", detail: "Clinician, researcher, educator, public-health administrator or critic: the framing question of the whole field" },
        { label: "The product matched", detail: "ICD-10's different products: the statistical/glossary version, the Blue Book, the research criteria, the primary-care version" },
        { label: "The inclusion rule applied", detail: "Common international usage with no validity implication (ICD) against APA sanction, utility and data (DSM)" },
        { label: "The threshold difference met", detail: "Symptoms-only with impairment coded separately through the ICF, against the clinical-significance criterion" },
        { label: "The same patient read differently", detail: "Mixed anxiety-depression a category in one system and a validity failure in the other" },
      ],
      clinicalManifestation: "The researcher's stricter criteria excluding what the clinician's guidelines include: 'usually starts in early childhood' becoming 'should not be made if onset is after 30'.",
      grade: "established",
    },
    {
      id: "coding-pathway",
      name: "The coding pathway (the F-chapter in action)",
      steps: [
        { label: "The subchapter located", detail: "F0-F9: organic, substance, psychotic, mood, neurotic, behavioural, personality, retardation, developmental, childhood-onset" },
        { label: "The third digit", detail: "The special group, or the substance in F1: F10 alcohol" },
        { label: "The fourth digit", detail: "The syndrome: F10.3 withdrawal state: a thousand possibilities, one-third used, expansion designed in" },
        { label: "The fifth and sixth digits", detail: "Course and qualifiers: F10.31 withdrawal with convulsions" },
        { label: "The return made", detail: "Statistical returns, service planning, epidemiology: the classification's administrative purpose fulfilled" },
      ],
      clinicalManifestation: "F10.31: alcohol withdrawal state with convulsions: the clinical record's precision instrument in five characters.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "nomenclature-origin", time: "1855", title: "The nomenclature of causes of death", description: "The first international classification: built for mortality statistics, the ancestor whose statistical purpose ICD never lost: the coder's unambiguous category as the founding requirement.", phase: "onset" },
    { id: "icd6-dsm1", time: "1948-1952", title: "ICD-6 and DSM-I", description: "WHO adopts the classification in 1948 with a first mental-disorders section (26 categories: 10 psychoses, 9 psychoneuroses, 7 character/behaviour/intelligence); gaps (no dementias, most personality disorders, adjustment disorders) leaving only five adopter countries; DSM-I (1952) the American alternative, adding glossary definitions for the first time.", phase: "onset" },
    { id: "operational-revolution", time: "1972-1987", title: "The operational revolution", description: "The Feighner criteria (1972: 16 disorders, inclusion and exclusion, 1,650 citations in the decade) and the RDC answer the glossaries' vagueness; DSM-III (1980) incorporates them: descriptive atheoretical criteria, the multiaxial system, reliability gains; DSM-III-R (1987) corrects the panic-depression prohibition the family data overturned.", phase: "peak" },
    { id: "icd10-dsm4", time: "1982-1996", title: "The ICD-10 family and DSM-IV", description: "ICD-10 work from 1982 (Sartorius chairing): deliberately several versions, field trials in 194 centres in 55 countries, approval 1989, introduction 1993; DSM-IV (work from 1988) adds the three-stage empirical review and the four-volume Sourcebook; joint coordination meetings end with the systems much more similar than DSM-III and ICD-9, the 1-vs-6-month duration the surviving genuine difference.", phase: "peak" },
    { id: "dimensional-turn", time: "2013-2022", title: "The dimensional turn", description: "DSM-5 (2013) drops the multiaxial system, dimensional specifiers and cross-cutting measures appear, autism reorganised as a spectrum; ICD-11 (2022 operating) follows with dimensional hybrids, personality disorder by severity-plus-trait and complex-PTSD: the categorical-vs-dimensional issue's reform directions, predicted by the Oxford chapter's conceptual list.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the discipline as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "Structural, not numerical: the note's lineage records no survey counts, and classification's epidemiology is itself the point: public-health administrators needing to track epidemiology, utilisation and costs are one of the five stakeholder needs the systems balance. The ICD exists because international statistics need unambiguous categories (the coder's requirement, not the clinician's); the DSM because American practice needed a common nomenclature. Prevalence figures for disorders arrive through the classifications, never for them.",
    indianPrevalence: "India codes ICD: records, examinations, insurance and disability certification run on ICD-10, migrating to ICD-11; the treaty-mandated statistical system as the Indian record's language; the DSM difference-knowledge matters for reading the international literature and for the diploma questions that test both systems side by side.",
    lifetimeRisk: "Not applicable as a risk: classification is the frame through which every disorder's risks are counted, not a condition carrying one of its own.",
    genderRatio: "Not applicable, though the critics' stakeholder position (diagnosis as reductionistic labelling of individual differences and social deviance) is the standing reminder that categories can encode social judgements, not only describe clinical ones.",
    ageOfOnset: "Not applicable as a single figure: the F9 block's childhood-onset and the F0 block's dementias bracket the lifespan the classification covers, each block carrying its own onset logic.",
    indianNotes: "The F23 acute-and-transient provision is the Indian chapter: the WHO field trials that validated it drew heavily on developing-country data where brief good-prognosis psychoses are frequent; the somatoform block's developing-country importance and the primary-care version's district design are the classification's Indian-facing features.",
  },
  etiology: [
    { category: "biological", factor: "Unknown aetiopathogenesis", details: "Aetiology unknown for most disorders, assessment resting on reports and observation with laboratory tests largely irrelevant until recently: the predicament that forces descriptive syndromic definition and makes disorder, not disease, the honest term." },
    { category: "social", factor: "The five competing stakeholder needs", details: "Clinicians wanting treatable categories, researchers wanting homogeneity, educators wanting structure, public-health administrators wanting statistics, critics wanting less stigmatizing misuse: every system balances them imperfectly; ICD-10's different products for different target groups the explicit answer." },
    { category: "psychological", factor: "The reliability problem", details: "Glossary definitions too vague to identify homogeneous study populations: researchers building their own criteria (Feighner, RDC) because clinicians could not agree on what the words meant; the inter-orientation disagreement (why the panic happens) that only presentation-based criteria could bypass." },
    { category: "environmental", factor: "Historical accumulation and governance", details: "Categories grandfathered from earlier editions (DSM's uneven empirical database: old categories never faced the evidential standards new ones do from DSM-IV); the treaty machinery of the WHO against the professional association structure of the APA; timelines that defeated the DSM-IV/ICD-10 coordination attempt: the systems' shapes as much political inheritance as science." },
  ],
  symptomClusters: [
    {
      category: "1. The presentations the classification sorts",
      symptoms: ["Reports and observations with laboratory tests largely irrelevant: the material every criterion list must work from", "Syndromic patterns: symptoms, history and sometimes laboratory findings; the disorder's definitional substance", "The surrounding layers: distress reported by the individual (illness) and role failure observed by others (sickness) around the disorder itself"],
    },
    {
      category: "2. The caseness signals",
      symptoms: ["Symptoms occurring in non-disordered people too: the false-positive problem the clinical-significance criterion exists to catch", "Clinically significant distress or impairment: the threshold question asked before the label is written", "Boundary presentations: the New Yorker with marked snake fear, no snake encounters and no functional impact; a phobia in ICD-10, health in DSM-IV"],
    },
    {
      category: "3. The comorbidity pile-up",
      symptoms: ["Multiple diagnoses accumulating where the system encourages comorbidity over hierarchy. DSM's choice to communicate more diagnostic information", "Overlapping criteria sets generating co-diagnoses the clinic must still explain to the patient", "The known cost of the categorical compromise: the dimensional critics' standing exhibit"],
    },
    {
      category: "4. The coding signals",
      symptoms: ["Duration gates: 1 month of symptoms (ICD-10) against 6 months of illness including prodrome (DSM-IV) for schizophrenia", "Course and severity qualifiers: the fifth and sixth digits of the F-chapter", "Onset rules that differ by product: 'usually starts in early childhood' in the clinical guidelines against 'should not be made if onset is after 30' in the research criteria"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The definitional base",
      code: "Diagnosis, disease, disorder, illness, sickness",
      criteria: [
        "Diagnosis: both the name of a disease and the process of determining it.",
        "Disease: where objective pathology or presumed aetiology exists; pancreatic cancer, strep throat, Alzheimer's.",
        "Disorder: where aetiology is unknown and definition is syndromic; symptoms, history, sometimes laboratory findings; psychiatry's term.",
        "Illness: the individual's subjective awareness of distress.",
        "Sickness: the inability to perform social roles.",
        "Classification: placing diagnostic entities into systematic groupings by principles of similarity and difference, and depending on the principles, classifications differ radically.",
      ],
      duration: "The definitions are the apparatus every edition inherits; the framing question, whose needs? Decides how each edition uses them.",
      indianNote: "Indian records, examinations, insurance and disability certification code ICD: the definitions arrive through the F-chapter, with the DSM versions tested in parallel at postgraduate level.",
    },
    {
      system: "The conceptual issues",
      code: "The four-plus unresolved questions",
      criteria: [
        "Descriptive versus theory-based: classification drawn from aetiological theory (psychodynamic, behavioural, neurobiological) or a descriptive heuristic.",
        "Pathology versus normalcy: what assumptions distinguish mental disorder from normative behaviour; caseness.",
        "Categorical versus dimensional: discrete bounded categories or continua, and which dimensions, chosen how.",
        "Lumping versus splitting: few broad heterogeneous categories or many homogeneous ones.",
        "Single versus multiple diagnosis: a hierarchy where diagnoses trump one another, or encouraged comorbidity.",
        "The honest rider: systems do not apply their own rules consistently; compromises everywhere.",
      ],
      duration: "Unresolved since the beginning: the modern editions (DSM-5, ICD-11) are the current attempts at the categorical-dimensional settlement.",
      indianNote: "Categorical-versus-dimensional, the multiaxial logic, the ICD-DSM differences and the operationalisation history are standard Indian postgraduate and diploma essay questions.",
    },
    {
      system: "The ICD-10 F-chapter",
      code: "Chapter V, letter F",
      criteria: [
        "F0 organic, symptomatic: organic aetiology regardless of psychotic or non-psychotic presentation; organic implying nothing about other conditions lacking cerebral substrate.",
        "F1 substance, all psychoactive disorders in one place: third digit the substance, fourth the syndrome, fifth the qualifier (intoxication, harmful use, dependence, withdrawal with and without delirium, psychotic and amnesic syndromes).",
        "F2 schizophrenia, schizotypal, delusional: the 1-month duration rule; acute and transient psychotic disorders given particular attention for developing countries.",
        "F3 mood, all mood disorders together; the endogenous/neurotic distinction abandoned; neurotic depression dissolved mostly into dysthymia (F34.1); recurrent mania coded bipolar regardless of depressions.",
        "F4 neurotic, stress-related, somatoform: dissociative disorders in seven subtypes; hysteria abandoned; stress and adjustment reactions by time and severity; somatoform of particular developing-country importance; neurasthenia retained.",
        "F5 behavioural syndromes with physiological disturbances: eating, non-organic sleep, sexual dysfunction, puerperal; gender identity and sexual preference moved to F6; the F54 psychosomatic code alongside the somatic diagnosis.",
        "F6 personality and behaviour: the specific personality disorders; emotionally unstable personality with impulsive and borderline types; the factitious-disorder innovation.",
        "F7 mental retardation; F8 developmental; F9 childhood-onset.",
      ],
      duration: "Second digit the larger group, third the special group, fourth the syndrome, fifth and sixth the course and features; X/Y/Z codes for circumstances (suicide), symptoms and psychosocial factors.",
      indianNote: "Unique among ICD chapters, F carries short definitions plus inclusion and exclusion terms for every disorder, and F23 is the block the Indian exam favourites live in.",
    },
  ],
  differentialDiagnosis: [
    { condition: "ICD-10 versus DSM-IV (classification vs nomenclature)", distinguishingFeatures: "ICD is set up as a classification for statistical purposes. The coder needs an unambiguous category, and inclusion follows common international usage with no validity implication; DSM is a sanctioned nomenclature: inclusion implying APA sanction, clinical utility and an empirical database, unevenly applied (old categories grandfathered, new ones facing higher standards from DSM-IV).", keyDifferentiator: "The worked case: mixed anxiety-depression is a category in ICD-10 and a validity-rejected candidate in DSM-IV; the same patient, two systems, two labels, both internally correct." },
    { condition: "Symptom versus disorder (the impairment difference)", distinguishingFeatures: "ICD-10 disorders (dementia and phobias nearly alone among exceptions) are defined by symptoms alone, impairment indicated separately through the ICF; most DSM-IV criteria sets carry the clinical-significance criterion: clinically significant distress or impairment.", keyDifferentiator: "The New York snake phobia: marked fear, never a snake, no functional impact, not a mental disorder in DSM-IV, a snake phobia in ICD-10. Pneumonia is diagnosed by the bacillus regardless of function; psychiatric symptoms cannot be, absent pathology evidence." },
    { condition: "Disease versus disorder versus illness versus sickness", distinguishingFeatures: "Disease where objective pathology or presumed aetiology exists; disorder where aetiology is unknown and definition syndromic; illness the individual's subjective awareness of distress; sickness the inability to perform social roles.", keyDifferentiator: "Psychiatry's term is disorder. The classification's own admission that the pathological evidence has not arrived; the four terms answer four different questions and are not interchangeable." },
    { condition: "Category versus dimension", distinguishingFeatures: "Discrete bounded categories (with the lumping/splitting and hierarchy-versus-comorbidity questions inside them) against continua, and which dimensions, chosen how; the systems remain categorical, with dimensionalism the standing critique.", keyDifferentiator: "The critique's predicted reforms arrived: DSM-5's dimensional specifiers and cross-cutting measures, ICD-11's severity-plus-trait personality model and complex-PTSD; hybrids, not conversions." },
    { condition: "Endogenous versus neurotic depression (the abolished distinction)", distinguishingFeatures: "The pre-ICD-10 dualism splitting melancholic from neurotic depressive presentations. ICD-9's neurotic depression (300.4) a separate category from the psychotic and bipolar territory.", keyDifferentiator: "ICD-10 abolished the split: all mood disorders together in F3, neurotic depression dissolved mostly into dysthymia (F34.1): the endogenous/neurotic distinction lacked validity, and its abolition is one of classification's cleanest deletions." },
  ],
  management: [
    { category: "service-design", name: "Assign the code — the F-chapter discipline", description: "Locate the syndrome in the F0-F9 map, take the code to the fourth digit (the syndrome) and the fifth (the qualifier) where the record's precision serves: F10.31: alcohol withdrawal with convulsions. Unique among ICD chapters, F carries short definitions plus inclusion and exclusion terms for every disorder: the operational revolution's reliability inheritance built into the coding itself.", whenToUse: "Every Indian record: case sheets, statistical returns, insurance, disability certification.", indianContext: "India codes ICD-10 (migrating to ICD-11); the DSM differences are for the literature and the examination. The F-code is for the file." },
    { category: "psychotherapy", name: "Apply the criteria as written — inclusion, exclusion, threshold", description: "The operational move is a discipline: the inclusion conditions met, the exclusions ruled out, the duration gate respected (1 month or 6), the clinical-significance question asked (distress or impairment?) before the label is written. Criteria applied loosely are glossary definitions again: the vagueness the operational revolution abolished.", whenToUse: "Every diagnostic decision: doubly before research recruitment.", indianContext: "The research criteria are deliberately stricter than the clinical guidelines: 'usually starts in early childhood' becomes 'should not be made if onset is after 30'; clinicians do not observe strict rules in daily work; research demands them." },
    { category: "service-design", name: "Choose the right product — the family-of-documents discipline", description: "ICD-10 is deliberately several versions: the statistical/glossary version (treaty-mandated, for coders, statisticians and insurance clerks), the Clinical Descriptions and Diagnostic Guidelines (the Blue Book, the clinician's central text, where many unclear cases unsuitable for research criteria are described) the Diagnostic Criteria for Research (stricter by design), and the primary-care version (roughly two dozen categories with flowcharts and treatment guidance).", whenToUse: "Whenever the question is which rulebook applies: statistical return, clinical description, research inclusion or primary-care screening.", indianContext: "The primary-care version is the Indian instrument: fewer categories, flowcharts, treatment guidance; designed for exactly the district-health infrastructure the DMHP trains through." },
    { category: "psychotherapy", name: "Carry the multiaxial habit — whatever the current edition says", description: "DSM-III's multiaxial system separated (and thereby attended to) the florid presenting Axis I from personality and developmental disorders (II), physical conditions (III), stressors (IV) and adaptive functioning (V), institutionalising the biopsychosocial model. DSM-5 dropped the axes; the habit of asking all five questions survives the labels, and ICD-10's multiaxial presentation (axis I all disorders, psychiatric coded alongside other medical; axis II disability with WHO's DAS/WHODAS instruments; the contextual axis) remains available to the ICD-coded record.", whenToUse: "Every formulation: the axes were a checklist for what a complete diagnostic evaluation records.", indianContext: "The disability axis (WHODAS) is the Indian certificate's natural companion: the multiaxial habit as certification discipline." },
    { category: "service-design", name: "Read the two systems as a bilingual — the literature discipline", description: "The international literature codes both: schizophrenia's duration gate differs (1 vs 6 months), the impairment rules differ (symptoms-only vs clinical-significance), the inclusion philosophies differ (usage vs validity). Reading a DSM-based trial from an ICD-coded clinic requires knowing the differences; writing one requires stating which system's criteria were applied.", whenToUse: "Every journal read, every international collaboration, every postgraduate examination.", indianContext: "Indian postgraduate and diploma essays test the ICD-DSM differences, the operationalisation history and the categorical-versus-dimensional issue as standard questions: this discipline is the examination." },
    { category: "psychotherapy", name: "Hold the validity question open — the diagnostic humility discipline", description: "The categories are descriptive compromises awaiting aetiological validation; the critics' reminder (labelling, stigma, misuse) and the researchers' reminder (homogeneity, validity) both stand. The clinician's craft is using the label for communication, treatment and prognosis while remembering it names a pattern. It does not explain it; the formulation, not the label, carries the understanding.", whenToUse: "Whenever the label hardens into an identity or a dismissal: the classification's own framing question, whose needs is this serving?", indianContext: "Disability certification and insurance make the Indian label consequential. The humility discipline is also a fairness discipline, and the record should say no more than the presentation earns." },
  ],
  drugLinks: [],
  contentGaps: [
    "No medication is assigned any role by the note: drugLinks is empty by design; the disorder courses carry their own pharmacology, never invented here.",
    "DSM-5 and ICD-11 are taught as flagged post-Oxford context, exactly as the note frames them; no dedicated KYP lesson on either edition's full architecture exists. The reform directions (dimensional specifiers, severity-plus-trait personality, complex-PTSD) are named, not detailed.",
    "The RDoC-style frameworks the note's FAQ names have no KYP lesson: recorded as the modern validity attempt the note cites.",
    "The ICF (the impairment-and-functioning classification that carries what DSM's clinical-significance criterion guards and ICD codes separately) has no standalone KYP lesson; the note's line is taught here.",
    "Kendell's validity discussion and van Praag's validity-skeptic tradition are cited by the note; their full treatments have no KYP courses. The validity question is taught here at chapter depth.",
    "The child-epidemiology caseness figures the note references (the anxiety prevalence lesson of symptom-versus-disorder thresholds) belong to the child-assessment-epidemiology course: referenced conceptually, not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of knowledge, not an illness: how psychiatry names and groups mental conditions. Because the causes of most mental disorders are still unknown, psychiatrists define conditions by their patterns (symptoms, history and course) rather than by tests, and the names (the ICD and DSM systems) are agreed conventions serving communication, treatment choice, research and record-keeping. Two systems exist because they serve different purposes (statistics and nomenclature) which is why doctors may use different names for the same problem without either being wrong.",
    whatCausesIt:
      "Not applicable: the classification is not a condition. It exists precisely because causes are unknown: when a cause is found, a condition moves toward the disease side of medicine. The names change as evidence accumulates (categories merged (neurotic depression into dysthymia), relocated (schizotypal among the psychoses) or retired (hysteria)) and the systems are revised by international review, not by fashion.",
    symptoms:
      "Not applicable. What families actually meet: a coded diagnosis on the file (an F-code in India), the question of whether a second diagnosis also applies, and the doctor's threshold questions; how long the symptoms have lasted, how much distress they cause, and what they prevent the person doing. A symptom alone, present in many healthy people, is not automatically a disorder.",
    treatment:
      "The classification does not treat; it organises treatment. Its uses in your care: choosing the guideline that follows from the diagnosis, coding the record (India uses the ICD), certifying disability where applicable, and giving every doctor involved a shared language. Ask the treating doctor which system the code belongs to and what the name does and does not imply: a good clinician will answer both questions plainly.",
    selfHelp: [
      "Ask what the diagnosis means, not only what it is called. The label names a pattern; it does not explain it.",
      "Keep the follow-up appointments. Several categories (the acute psychoses above all) are defined by their course, and the first label is verified by what happens next.",
      "Tell the doctor every medicine and substance in use before any diagnosis is finalised: substance-related conditions are classified separately for good reason.",
      "Ask whether a second condition is being treated alongside, where two sets of criteria are met, both are recorded, and knowing both helps the family understand the plan.",
      "Do not read the internet's DSM page against an ICD-coded Indian file: ask the doctor to translate between the systems instead.",
    ],
    whenToSeekHelp: [
      "A first episode of confused, fearful or unusual behaviour: the duration counting starts at the first assessment, and early classification guides early treatment.",
      "A diagnosis that does not fit what the family sees. The classification is meant to be revised; say so at review.",
      "A certificate or insurance question about the diagnosis: ask the treating doctor to explain exactly what the recorded code states and implies.",
      "Symptoms returning after treatment stopped: recurrence can change the category, and single episode and recurrent course are coded differently.",
      "Any suggestion of self-harm: mentioned to the doctor immediately, whatever the label says.",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages), for distress and for guidance on where to go.",
      "The district hospital psychiatry OPD under the DMHP: the Indian record's home: assessment, coding and treatment in one place.",
      "The treating team's explanation visit: ask for the session where the diagnosis, its code and its meaning are explained to the whole family together.",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "India has no nosology of its own. Indian practice codes WHO's ICD: hospital records, postgraduate and diploma examinations, insurance and disability certification run on ICD-10, migrating to ICD-11. The DSM is the international literature's language and a standard examination topic, not the Indian record's.",
    systemContext: "The Indian patient meets the classification at the district OPD or the DMHP psychiatric tier, where the F-code written in the file decides the guideline followed, the certificate issued and the return counted; the ICD-10 primary-care version (fewer categories, flowcharts, treatment guidance) was designed for exactly this infrastructure: the front line where most Indian psychiatric contact happens.",
    programmeContext: "The DMHP district tier and Tele-MANAS 14416 are the orthodox channel; the ICD-10 primary-care version is its instrument and the natural deployment of the primary-care-psychiatry training curriculum; the F23 acute-and-transient provision and the somatoform block's developing-country flag are Indian-facing design features of the classification itself, written from field-trial data that included the presentations Indian OPDs actually see.",
    costConsiderations: "The classification itself is free at the point of use. The WHO systems are public instruments; the Indian cost realities are what the codes unlock (disability certification, insurance, service-planning returns) and the delay cost the somatic front door imposes when somatoform presentations reach psychiatry late: the design rationale the ICD-10 commentary itself flags for developing countries.",
    culturalConsiderations: "The Indian layer of the classification: the F23 acute-and-transient provision written for the brief polymorphic psychoses frequent in developing countries; the somatoform block's particular developing-country importance: the somatic presentations of Indian depression and anxiety acknowledged in the design rationale; neurasthenia retained (DSM-IV dropped it) giving the weakness and fatigue-centred presentations common in Indian and East Asian clinics a home in ICD that DSM denies; and the primary-care version as the instrument the district infrastructure can actually run.",
    patientCounselling: [
      "The label script: 'The code names the pattern we treat. It is a shared language for the team and the record, not a verdict on the person.'",
      "The two-systems script: 'Your file codes the WHO system because India codes ICD; the research you read may use the American names: bring it to us and we will translate.'",
      "The duration script: 'The clock matters: how long the symptoms have run decides which category fits, and the category guides the treatment. That is why we count the days precisely.'",
      "The certificate script: 'The disability board reads the F-code; let us make sure it says exactly what you have, no more and no less.'",
      "The acute-psychosis script: 'This block was written for presentations like yours (brief, with good prognosis) the label reports the course so far, and the follow-up confirms it.'",
    ],
  },
  decisionPath: {
    title: "Assigning the diagnosis: the classification discipline applied",
    nodes: [
      {
        id: "start",
        question: "The presentation is assembled: symptoms, history, course. The classification discipline begins: which question first?",
        branches: [
          { label: "Is this disorder or normative experience? (caseness)", next: "caseness-gate" },
          { label: "The syndrome is clear, which block?", next: "block-gate" },
          { label: "The picture is mixed: multiple candidates", next: "comorbidity-gate" },
        ],
      },
      {
        id: "caseness-gate",
        question: "The pathology-versus-normalcy question: symptoms alone, or disorder?",
        branches: [
          { label: "Symptoms with clinically significant distress or impairment", next: "block-gate" },
          { label: "Symptoms, no functional impact, no distress (the snake-phobia shape)", next: "no-disorder-path" },
        ],
      },
      {
        id: "no-disorder-path",
        question: "Not a disorder under DSM's threshold: the ICD record may still carry the symptom category.",
        recommendation: "The threshold explained rather than argued: descriptive symptoms are not specific to disorder; pneumonia is diagnosed by the bacillus regardless of function; psychiatric symptoms cannot be, hence the distress-impairment threshold. ICD-10 would code the phobia (symptoms sufficient), DSM-IV would not (no clinical significance): the same patient, two systems, both internally correct. Document the reasoning, respect the presentation, watch and review.",
      },
      {
        id: "block-gate",
        question: "The F-chapter located: which subchapter does the syndrome live in?",
        branches: [
          { label: "Organic suspicion (F0)", next: "organic-path" },
          { label: "Substance involved (F1)", next: "substance-path" },
          { label: "Psychotic (F2), mood (F3) or neurotic-somatoform (F4)", next: "duration-severity-gate" },
          { label: "Personality pattern (F6)", next: "personality-path" },
        ],
      },
      {
        id: "organic-path",
        question: "Physical cause first: the classification's own ordering.",
        recommendation: "F0 before everything: organic aetiology coded regardless of psychotic or non-psychotic presentation; the dementias and delirium worked up before any functional label is written; organic implying nothing about other conditions lacking cerebral substrate. The somatic comorbidity coded from the related chapters, never left implicit.",
      },
      {
        id: "substance-path",
        question: "The substance block: all psychoactive disorders in one place.",
        recommendation: "F1's architecture applied: the third digit the substance (F10 alcohol), the fourth the syndrome (F10.3 withdrawal state), the fifth the qualifier (F10.31 with convulsions): intoxication, harmful use, dependence, withdrawal with and without delirium, psychotic and amnesic syndromes each coded before comorbidity is considered. The substance history taken before the functional diagnosis, because the block outranks the speculation.",
      },
      {
        id: "duration-severity-gate",
        question: "The duration and severity gates of the major blocks.",
        branches: [
          { label: "Psychosis under 1 month, acute and polymorphic", next: "f23-path" },
          { label: "Psychosis 1-6 months: the systems' gap", next: "systems-gap-path" },
          { label: "Mood or neurotic-somatoform picture", next: "assign-code-path" },
        ],
      },
      {
        id: "f23-path",
        question: "The acute and transient block: the developing-country provision.",
        recommendation: "F23 given particular attention for developing countries where short-lasting good-prognosis psychoses are frequent: the WHO field trials drew on those presentations; the Indian record's natural home for the brief polymorphic psychoses. The onset dated precisely, the polymorphism documented, the follow-up booked: acute and transient is a course description verified prospectively, not a promise.",
      },
      {
        id: "systems-gap-path",
        question: "The 1-versus-6-month gap: the same patient, two labels.",
        recommendation: "ICD-10 codes schizophrenia at 1 month of symptoms; DSM-IV requires 6 months of illness including prodrome: the genuine outlook difference between the systems. The Indian record follows ICD's month; the literature is read bilingually; the examination is answered with both numbers and the source named.",
      },
      {
        id: "assign-code-path",
        question: "The category assigned: syndrome, criterion list, threshold met.",
        recommendation: "The F3-F4 assignments follow their own gates: all mood disorders together in F3 (recurrent mania coded bipolar regardless of depressions; neurotic depression dissolved into dysthymia, the endogenous/neurotic split ended); F4's neurotic-stress-somatoform block with dissociative disorders in seven subtypes, hysteria abandoned, somatoform of particular developing-country importance, neurasthenia retained. Code to the fourth digit, qualify with the fifth; record comorbidity where criteria are independently met.",
      },
      {
        id: "personality-path",
        question: "The personality block: pattern, not episode.",
        recommendation: "F6's discipline: the specific personality disorders with emotionally unstable personality split into impulsive and borderline types; cyclothymic coded in F3 as cyclothymia; schizotypal relocated to F21 among the psychoses; factitious disorder the block's innovation. The personality diagnosis recorded on its own grounds: the multiaxial habit's Axis II lesson: the pattern attended to even when the florid presentation has cleared.",
      },
      {
        id: "comorbidity-gate",
        question: "Multiple candidates: hierarchy or comorbidity?",
        branches: [
          { label: "Criteria independently met for two disorders", next: "comorbidity-path" },
          { label: "One disorder explains the whole picture", next: "hierarchy-path" },
        ],
      },
      {
        id: "comorbidity-path",
        question: "Comorbidity recorded: the information-maximising rule.",
        recommendation: "DSM encouraged multiple diagnoses to communicate more diagnostic information, having abandoned strict hierarchy: the pile-up is a known cost of the categorical compromise. Each label earns its place by independently met criteria, and the formulation explains how the diagnoses hang together; the label count is communication, not understanding.",
      },
      {
        id: "hierarchy-path",
        question: "One diagnosis explains: the parsimony check.",
        recommendation: "The single-diagnosis tradition where one disorder trumps another (organic over functional, substance over primary). ICD's coding rules still encode parts of it (F54's psychosomatic code alongside the somatic diagnosis rather than instead of it). The formulation, not the label count, carries the understanding the team works from.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Calling psychiatric conditions diseases",
      why: "Disease implies objective pathology or presumed aetiology: pancreatic cancer, strep throat, Alzheimer's; psychiatry's conditions are syndromically defined with causes mostly unknown, and the overclaim closes the validity question the classification keeps honestly open.",
      correction: "Disorder is the honest term: the classification's own admission. Use it, teach it, and explain to patients and families what it does and does not mean.",
    },
    {
      mistake: "Reading ICD and DSM as right and wrong",
      why: "They serve different masters: ICD's statistical inclusion by common usage with no validity claim, DSM's nomenclature inclusion implying sanction, utility and data. The differences are structural, not errors, and treating them as a scorecard misses every examinable point.",
      correction: "Both systems are internally correct on their own terms: learn the purpose difference (the mixed anxiety-declusion worked case), the impairment difference (the snake phobia) and the structural difference (the F-chapter coding) as three separable answers.",
    },
    {
      mistake: "Diagnosing on symptoms alone",
      why: "Symptoms occur in non-disordered people too: the false-positive problem; without the distress-impairment threshold the clinic pathologises ordinary fear, sadness and eccentricity, exactly the misuse the critics' stakeholder position warns of.",
      correction: "The clinical-significance question asked before the label is written: how much distress, what impairment, what duration. The threshold the child-epidemiology caseness lesson teaches in numbers.",
    },
    {
      mistake: "Ignoring the duration gate",
      why: "The 1-versus-6-month schizophrenia discrepancy is the classic criteria-set difference; mislabelling acute psychoses as schizophrenia (or dismissing schizophrenia as acute) gets both the code and the prognosis wrong, and the Indian record codes the month.",
      correction: "Count the symptoms' duration precisely, ask about the prodrome, and state which system's clock the record runs on. The arithmetic decides the block.",
    },
    {
      mistake: "Using the research criteria as clinical criteria (or the reverse)",
      why: "The ICD-10 family's products differ by design: the research criteria are stricter than the clinical guidelines ('usually starts in early childhood' becomes 'should not be made if onset is after 30'); applying the wrong product invalidates the output either way: a study recruited on Blue Book looseness or a clinic run on research strictness.",
      correction: "Match the product to the purpose: the Blue Book for the clinic, the Diagnostic Criteria for Research for the study, the primary-care version for the front line, the statistical version for the return.",
    },
    {
      mistake: "Treating the label as an explanation",
      why: "The categories are descriptive compromises awaiting aetiological validation. The label names the pattern, it does not explain it; treating it as explanation ends the inquiry and hands the critics their labelling critique on a plate.",
      correction: "Use the label for communication, treatment selection and prognosis; keep the validity question open in the formulation, and say to the family that the code names what is treated, not why it happened.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define diagnosis, disease, disorder, illness and sickness, and state why disorder, not disease, is psychiatry's term.",
        "The five stakeholder groups and their competing needs, with ICD-10's answer of different products for different target groups.",
        "The operational-criteria revolution: the Feighner criteria (inclusion and exclusion conditions, the 1,650-citation datum), the Research Diagnostic Criteria, and their incorporation into DSM-III.",
        "DSM-III's contributions (the descriptive atheoretical approach, the explicit criteria, the multiaxial system) and the panic-depression prohibition correction that produced DSM-III-R.",
        "The ICD-10 family of documents (four versions, named) and the field-trial numbers (194 centres, 55 countries).",
      ],
      practical: [
        "Code a case summary to the fourth and fifth digits using the F-chapter (for example F10.31), justifying each digit's choice aloud.",
        "Take one presentation (a phobia without functional impact) and argue the caseness question under ICD-10 and DSM-IV rules side by side, stating which system the Indian record follows.",
      ],
      longAnswer: [
        "The fundamental differences between ICD and DSM (purpose, impairment rules and structure) with the mixed anxiety-depression and snake-phobia worked examples.",
        "The historical development of psychiatric classification from ICD-6 to DSM-IV: the operational revolution, the multiaxial system and the empirical revision process.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DEFINITION SET: disease (objective pathology or presumed aetiology (pancreatic cancer, strep throat, Alzheimer's), disorder (aetiology unknown, syndromic) psychiatry's term), illness (subjective awareness of distress), sickness (inability to perform social roles); diagnosis is both the name and the process.",
        "THE CITATION DATUM: Feighner criteria 1972 (Robins and Guze, Washington University, St Louis); 16 disorders, inclusion plus exclusion criteria, 1,650 citations 1972-82 against the typical 2.1 per paper; expanded into the RDC (Spitzer, Endicott, Robins) for the NIMH collaborative depression psychobiology project; incorporated into DSM-III.",
        "DSM-III (1980): descriptive atheoretical criteria, explicit criteria, the multiaxial system (I florid, II personality/developmental, III physical, IV stressors, V functioning); the biopsychosocial model institutionalised; translated into 13 languages; DSM-III-R (1987) corrected the panic-depression prohibition that family data overturned.",
        "ICD-10'S FAMILY: the statistical/glossary version (treaty-mandated), the Blue Book (Clinical Descriptions and Diagnostic Guidelines, the clinician's central text), the Diagnostic Criteria for Research (stricter), the primary-care version (roughly two dozen categories with flowcharts); field trials 194 centres in 55 countries; 1989 approval, 1993 introduction.",
        "CLASSIFICATION VS NOMENCLATURE: ICD includes by common international usage with no validity implication (mixed anxiety-depression in); DSM inclusion implies APA sanction, clinical utility and an empirical database (mixed anxiety-depression out): old categories grandfathered, new categories facing higher standards from DSM-IV.",
        "THE IMPAIRMENT DIFFERENCE: ICD-10 symptoms-only (impairment via the ICF; dementia and phobias nearly alone among exceptions) against DSM's clinical-significance criterion: the New York snake phobia: a disorder in ICD-10, not a mental disorder in DSM-IV.",
        "THE DURATION GATES: schizophrenia. ICD-10 1 month of symptoms, DSM-IV 6 months of illness including prodrome; the genuine outlook difference, and the classic criteria-set discrepancy.",
        "THE F-CHAPTER CODING: second digit the larger group, third the special group or the substance (F10 alcohol), fourth the syndrome (F10.3 withdrawal state), fifth the qualifier (F10.31 with convulsions); three digits = 100 possibilities, four = 1,000 with one-third used: expansion designed in; X/Y/Z codes for circumstances (suicide), symptoms and psychosocial factors.",
        "THE RELOCATION DECISIONS: neurotic depression (ICD-9 300.4) dissolved mostly into dysthymia (F34.1); hysteria abandoned; schizotypal to F21 in F2; cyclothymic to F3; gender identity and sexual preference moved to F6; recurrent mania coded bipolar regardless of depressions.",
        "THE DEVELOPING-COUNTRY PROVISIONS: F23 acute and transient psychotic disorders (short-lasting good-prognosis psychoses frequent in developing countries); somatoform disorders of particular importance in developing countries; neurasthenia retained (unlike DSM-IV).",
        "THE MODERN TURN: DSM-5 (2013) dropped the multiaxial system, dimensional specifiers and cross-cutting measures appeared, autism-spectrum reorganised; ICD-11 (2022 operating) with dimensional hybrids, personality disorder by severity-plus-trait and complex-PTSD: the categorical-versus-dimensional issue's predicted reform directions.",
      ],
      pyqConcepts: [
        "The snake-phobia vignette: the impairment difference asked as a one-best-answer item.",
        "The 1-versus-6-month schizophrenia duration: the recurring systems-difference question.",
        "The Feighner criteria's claim to fame: the operationalisation question's expected anchor.",
        "The F10.31-style coding item: the digits' meanings tested on a worked code.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 23-year-old man reaches the district OPD with ten days of sleeplessness and rapidly shifting persecutory beliefs after a family dispute; the father asks directly whether this is schizophrenia: the reasoning: the duration arithmetic before the label (neither ICD-10's 1 month nor DSM-IV's 6 months met), the polymorphic acute picture routed to F23 whose developing-country provision was written for exactly this frequency pattern, the Indian record coded on ICD's clock, the family told what the block means (brief, good prognosis) without promising what only follow-up can verify. The teaching: the classification's gates are the first clinical act, and the same man is a DSM case only at six months.",
        "A 26-year-old accountant is brought by her mother to have a lifelong marked snake fear 'cured before the marriage talks'; she cannot look at photographs, has never met a live snake outside one zoo visit, works and travels without restriction and calls it her silly problem; the mother requests a certificate of treatment: the reasoning: the caseness question taken seriously rather than dismissed (the fear is real, the disorder is absent), the clinical-significance criterion unmet under DSM-IV while ICD-10's symptoms-only rule would code the phobia, the threshold explained with the pneumonia-versus-symptoms rationale, no courtesy diagnosis written into a record that a marriage negotiation might read. The teaching: not diagnosing is a diagnostic act, and the two systems' divergence on this exact shape is the classification's most practical lesson.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Disease needs pathology or aetiology; disorder is syndromic: psychiatry's term.",
        "ICD-10 schizophrenia: 1 month of symptoms; DSM-IV: 6 months of illness including prodrome.",
        "The Feighner criteria (1972): the first widely used operationalized criteria (Robins and Guze).",
        "The New York snake phobia: a disorder in ICD-10, no disorder in DSM-IV; the clinical-significance criterion.",
        "ICD-10 field trials: 194 centres, 55 countries; the Blue Book is the clinician's version.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The Blue Book against the research criteria is a discipline, not a preference: clinicians do not observe strict rules in daily work and research demands them; choosing the wrong product invalidates the output in either direction, and every paper you read should state which it used.",
        "The grandfather clause explains most ICD-DSM discrepancies you cannot otherwise explain: old categories never faced the evidential standards new ones do; most remaining differences are unjustified, a few (the 1-versus-6-month gate) genuine outlook differences worth knowing as such.",
        "Take the F-code to the digit the clinical decision needs (the fourth for the syndrome, the fifth for the qualifier) and let X/Y/Z codes carry what the categories cannot (suicide circumstances, symptoms, psychosocial factors); the record's precision is a clinical instrument, not clerical decoration.",
        "The comorbidity pile-up is the categorical compromise's bill: each label must earn its place by independently met criteria, and the formulation (not the label count) carries the understanding the team works from; a six-diagnosis patient needs a formulation more than a sixth label.",
        "Every Indian record you write is a statistical return: the F-code feeds the epidemiology the next classification revision will read. The clinician is the classification's data source, which is why coding discipline is clinical work and not secretarial.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The two weeks that would not reach six months",
      presentation: "Ten days of shifting delusions and sleepless nights in a district OPD, and the duration arithmetic that kept schizophrenia off the file.",
      initialPresentation: "A 23-year-old man brought by his father to the district psychiatric OPD with ten days of disturbed sleep, fearful talk and rapidly changing beliefs: that neighbours were sending signals through the television, then that a relative had performed black magic, then that he had a divine mission; the father reports the son was entirely well until a family dispute two weeks ago.",
      history: "Abrupt onset after the dispute; no substance use volunteered and none found on direct inquiry; no prior episodes; a paternal uncle treated years ago for a psychotic illness (noted without weighting the formulation); no fever, head injury or medical admission; the family first consulted the local practitioner, who referred the case on.",
      examination: "Alert and fully oriented; perplexed and frightened; speech relevant; thought content showing rapidly shifting persecutory and referential themes with retained fragments of insight ('I know this sounds mad, doctor'); no first-rank symptoms elicited; occasional misperceptions in noise but no clear hallucinations; no organic signs.",
      diagnosis: "Acute and transient psychotic disorder (the F23 block): polymorphic and under both systems' schizophrenia duration rules: under ICD-10's 1-month symptom rule schizophrenia is not coded, and DSM-IV's 6-month illness criterion is equally unmet. The presentation the developing-country provision was written for.",
      management: "The duration counted and documented as the first clinical act; the F23 code assigned with the course specifier the follow-up would determine; treatment per the acute-psychosis course (the antipsychotic and psychoeducation programme belongs there, no drug routes duplicated here); the family told what the block means: a short-lived, good-prognosis psychosis the classification wrote the category for, not the schizophrenia they feared; early review booked; the record coded ICD because India codes ICD.",
      outcome: "Resolution of the psychotic phenomena over the following three weeks with treatment; no residual symptoms at two months; the code revised at review as the course confirmed; the family's fear of the schizophrenia label addressed by the arithmetic that never reached it, and the follow-up discipline documented in case the course proved less transient than the block promises.",
      teachingPoints: [
        "The duration arithmetic decides: ten days of symptoms meets neither ICD-10's 1 month nor DSM-IV's 6 months for schizophrenia; the F23 block exists for exactly this presentation.",
        "The developing-country provision is not exotic courtesy: the WHO field trials drew on the presentations where brief good-prognosis psychoses dominate; the Indian OPD's bread and butter, written into the classification's design.",
        "The label's communication role is treatment: telling the family acute and transient, good prognosis answers the fear the S-word had already planted.",
        "The bilingual reading: the international literature's DSM six-month case is this same man at six months; know both clocks, code the Indian one.",
        "Follow-up is the classification's own discipline: acute and transient is a course description verified prospectively, not a promise.",
      ],
    },
    {
      title: "The phobia that never met a snake",
      presentation: "A marked fear of snakes, a high-rise life, and a marriage on the calendar: the certificate the classification declined to write.",
      initialPresentation: "A 26-year-old accountant brought by her mother to the OPD to have the phobia cured before the marriage talks go further; since childhood she has had marked fear of snakes. She cannot look at photographs, changes television channels, and once left a zoo enclosure quickly; she has never encountered a live snake outside that visit; she works full time, travels by bus and train without restriction, sleeps well, and describes the fear as her silly problem.",
      history: "No avoidance of work, travel or social life; no panic attacks; no other anxiety symptoms; no distress beyond the embarrassment the family's campaign produces; the mother insists a phobia is a mental illness and will show up in the horoscope matching; the marriage negotiation itself is unaffected so far.",
      examination: "Normal mental state; the fear elicited circumscribed and situational; no avoidance behaviour beyond photographs and channels; no functional impairment demonstrable on direct questioning; insight full: she knows nothing will happen to her in a city flat.",
      diagnosis: "Marked snake fear without disorder: under DSM-IV's rule not a mental disorder (no clinically significant distress or impairment: the clinical-significance criterion unmet); under ICD-10's symptoms-only rule a specific phobia would be codeable: the same patient, two systems, two answers, both internally correct.",
      management: "The caseness question taken seriously rather than dismissed: the threshold explained to the family; symptoms are not specific to disorder, and pneumonia is diagnosed by the bacillus regardless of function while psychiatric symptoms need the distress-impairment threshold; no diagnosis written into a record a marriage negotiation might read; the fear acknowledged as real and the disorder absent; the family's concern addressed without a courtesy label; simple exposure-based advice offered for the photograph avoidance if she wants it (the anxiety courses carry the treatment, no routes invented here); watchful respect documented with the door left open.",
      outcome: "No certificate issued and no diagnosis recorded; the fear unchanged, the life unimpaired; the family initially dissatisfied, then relieved when the would-be in-laws' enquiry met no psychiatric illness; the case stands in the file as the caseness discipline's worked example.",
      teachingPoints: [
        "The snake-phobia worked example is a real consultation shape: marked fear, no exposure, no functional impact; the clinical-significance criterion unmet.",
        "The systems diverge on this exact case: ICD-10's symptoms-only rule codes the phobia, DSM-IV's threshold does not, both internally correct, neither right in the abstract.",
        "The rationale worth teaching the family: descriptive symptoms are not specific to disorder. The false-positive guard exists because symptoms occur in non-disordered people too.",
        "The Indian record's power cuts both ways: the label that unlocks nothing here could have cost a marriage negotiation. The classification discipline is also a fairness discipline.",
        "Not diagnosing is a diagnostic act: documented reasoning, watchful follow-up and the open door beat a courtesy label every time.",
      ],
    },
  ],
  clinicalPearls: [
    "Psychiatry's honest term is disorder: disease needs objective pathology or presumed aetiology (pancreatic cancer, strep throat, Alzheimer's); where aetiology is unknown the definition is syndromic: symptoms, history, sometimes laboratory findings.",
    "The framing question of the whole field: whose needs is the classification primarily intended to address; clinicians, researchers, educators, administrators, critics; ICD-10's answer: different products for different target groups.",
    "The Feighner datum: 1,650 citations 1972-82 against the typical 2.1 per paper: operationalisation measured by citation, the research community's vote.",
    "The atheoretical compact: the cognitivist, the neurobiologist and the psychodynamicist disagree about why the panic happens and agree about how it presents; the shared language the criteria buy.",
    "ICD includes by common international usage with no validity implication; DSM inclusion implies APA sanction, clinical utility and an empirical database: mixed anxiety-depression is in ICD-10 and was rejected by DSM-IV.",
    "The New York snake phobia is the impairment rule in one case: marked fear, never a snake, no functional impact; a snake phobia in ICD-10, not a mental disorder in DSM-IV.",
    "Pneumonia is diagnosed by the bacillus regardless of function; psychiatric symptoms, absent pathology evidence, need the distress-impairment threshold: the rationale for DSM's clinical-significance criterion.",
    "F10.31: alcohol withdrawal with convulsions: third digit the substance, fourth the syndrome, fifth the qualifier; four digits allow a thousand diagnoses, one-third used, expansion designed in.",
    "ICD-10's F chapter is unique among ICD chapters: short definitions plus inclusion and exclusion terms for every disorder; the operational revolution's reliability inheritance, built into the coding.",
    "Neurotic depression is gone: ICD-9's 300.4 dissolved mostly into dysthymia (F34.1), the endogenous/neurotic dualism ended, one of classification's cleanest deletions.",
    "The systems ended much more similar than DSM-III and ICD-9: the coordination effort's achievement; the 1-versus-6-month schizophrenia duration remains the genuine outlook difference.",
    "India codes ICD: records, exams, insurance and disability certification, and the F23 block was written with developing-country presentations in the field trials; the classification has an Indian chapter.",
  ],
  highYieldSummary: [
    "The predicament and the terms: aetiology unknown for most disorders, assessment resting on reports and observation with laboratory tests largely irrelevant until recently; hence disease (objective pathology or presumed aetiology: pancreatic cancer, strep throat, Alzheimer's) unavailable as psychiatry's term; disorder (aetiology unknown, definition syndromic, symptoms, history, sometimes laboratory findings) the honest substitute; illness the individual's subjective awareness of distress; sickness the inability to perform social roles; diagnosis both the name of a disease and the process of determining it; classification the placing of diagnostic entities into systematic groupings by principles of similarity and difference, and depending on the principles, classifications differ radically.",
    "The stakeholder question and the conceptual issues: whose needs is the classification primarily intended to address; clinicians (categorise as many help-seekers as possible; facilitate identification, treatment, prognosis, cause), researchers (homogeneous groups for treatment-testing and aetiology), educators (structure for teaching psychopathology and differential diagnosis), public-health administrators (track epidemiology, utilisation, costs), critics (diagnosis as reductionistic labelling of individual differences and social deviance, exposing people to stigma, at minimum, less misuse); ICD-10's answer: different products for different target groups. The four-plus unresolved issues: descriptive versus theory-based; pathology versus normalcy (caseness); categorical versus dimensional; lumping versus splitting; the single- versus multiple-diagnosis hierarchy, and systems do not apply their own rules consistently: compromises everywhere.",
    "The operational revolution: the first international classification (1855) was a nomenclature of causes of death; WHO adopted it in 1948 as ICD-6, whose first mental-disorders section (10 psychoses, 9 psychoneuroses, 7 character/behaviour/intelligence categories) had gaps (no dementias, most personality disorders, adjustment disorders) leaving only five adopter countries; DSM-I (1952) arose as the American alternative, adding glossary definitions for the first time; ICD-8 (1968; the British-viewed glossary 1974) and DSM-II defined for US use. The early-1970s revolution: explicit operationalized criteria for research, the glossary definitions being too vague to identify homogeneous study populations; the Feighner criteria (Robins and Guze, Washington University, St Louis, named for the paper's first author): 16 disorders with inclusion and exclusion criteria, 1,650 citations 1972-82 against the typical 2.1 per paper; then the Research Diagnostic Criteria (Spitzer, Endicott, Robins) for the NIMH collaborative depression psychobiology project, heavily used in mood and psychotic research.",
    "DSM-III to DSM-IV: US dissatisfaction with ICD-9's research inadequacy produced DSM-III (1980). Spitzer's leadership, 14 advisory committees, drafts circulated internationally, criteria mostly derived from the RDC plus expert consensus, reliability gains over DSM-II demonstrated in the large NIMH field trial; the descriptive atheoretical principle (criteria by symptomatic presentation, not cause-theory); the multiaxial system institutionalising the biopsychosocial model; translated into 13 languages; the panic-depression prohibition overturned by family data → DSM-III-R (1987). ICD-10 (work from 1982, Sartorius chairing): deliberately several versions; the statistical/glossary version (treaty-mandated), the Blue Book Clinical Descriptions and Diagnostic Guidelines, the Diagnostic Criteria for Research (stricter: 'usually starts in early childhood' becomes 'should not be made if onset is after 30'), and the primary-care version; field-tested in 194 centres in 55 countries, approved 1989, introduced 1993. DSM-IV (work from 1988): the three-stage empirical review (systematic literature reviews with rules from a methods conference; MacArthur-funded data reanalyses answering questions like the minimum panic-attack count, limited by dataset incompatibilities; 15 NIMH-funded field trials), documented in the four-volume Sourcebook; joint coordination meetings defeated by timelines (ICD-10's categories were settled by 1989 when DSM-IV's work began) leaving the systems much more similar than DSM-III and ICD-9, with the 1-versus-6-month schizophrenia duration the genuine outlook difference and most remaining differences without justification.",
    "The systems compared: ICD is a classification set up for statistics; the coder needs an unambiguous category; the inclusion rule is common international usage with no implication of validity (mixed anxiety-depression is in ICD-10 and was rejected by DSM-IV for validity concerns); DSM is a sanctioned nomenclature: inclusion implies APA sanction, clinical utility and an empirical database, unevenly applied: old categories grandfathered, new categories facing higher standards from DSM-IV. The impairment difference: ICD-10 disorders (dementia and phobias nearly alone among exceptions) are defined by symptoms alone, impairment indicated separately through the ICF; most DSM-IV criteria sets carry the clinical-significance criterion (clinically significant distress or impairment): the threshold where symptoms alone, occurring in non-disordered people too, would produce false positives; the worked example: the New Yorker with snake phobia who never encounters snakes and suffers no functional impact, not a mental disorder in DSM-IV, a snake phobia in ICD-10; the rationale: pneumonia is diagnosed by the bacillus regardless of function, psychiatric symptoms cannot be, absent pathology evidence.",
    "The F-chapter architecture: Chapter V, letter F; the second digit the larger group, the third the special group (three digits = 100 possibilities; the fourth = 1,000, one-third used, designed for expansion); fifth and sixth digits code course or features; X/Y/Z codes add circumstances (suicide), symptoms and psychosocial factors; unique among ICD chapters, F carries short definitions plus inclusion and exclusion terms for every disorder. The subchapter map: F0 organic/symptomatic ('organic' not implying other conditions lack cerebral substrate); F1 substance (third digit the substance, fourth the syndrome, fifth the qualifier. F10.31 alcohol withdrawal with convulsions); F2 schizophrenia, schizotypal, delusional (the 1-month rule; acute and transient psychotic disorders given particular attention for developing countries); F3 mood (the endogenous/neurotic distinction abandoned; neurotic depression dissolved mostly into dysthymia F34.1; recurrent mania coded bipolar regardless of depressions); F4 neurotic, stress-related, somatoform (dissociative disorders in seven subtypes; hysteria abandoned; somatoform of particular developing-country importance; neurasthenia retained, unlike DSM-IV); F5 behavioural syndromes with physiological disturbances (eating, non-organic sleep, sexual dysfunction, puerperal; gender identity and sexual preference moved to F6; the F54 psychosomatic code alongside the somatic diagnosis); F6 personality and behaviour (emotionally unstable personality with impulsive and borderline types; the factitious-disorder innovation); F7 mental retardation; F8 developmental; F9 childhood-onset.",
    "The Indian layer and the modern turn: India codes ICD; records, exams, insurance and disability certification run on ICD-10, migrating to ICD-11; the F23 acute-and-transient provision is India's chapter (the WHO field trials drew heavily on developing-country data where brief good-prognosis psychoses are frequent); the somatoform block's developing-country importance acknowledges the somatic front door of Indian depression and anxiety; neurasthenia retained gives the weakness and fatigue-centred presentations common in Indian and East Asian clinics a home DSM denies; the primary-care version (fewer categories, flowcharts, treatment guidance) is the Indian district instrument. The DMHP's natural deployment; the conceptual issues are standard Indian postgraduate and diploma essay questions. The modern turn, flagged as post-Oxford: DSM-5 (2013) dropped the multiaxial system, dimensional specifiers and cross-cutting measures appeared, autism-spectrum reorganised; ICD-11 (2022 operating) followed with dimensional hybrids, personality disorder by severity-plus-trait, and complex-PTSD: the conceptual issues, categorical versus dimensional above all, predicted exactly these reform directions.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pc-quiz-1",
      question: "The fundamental difference in purpose between ICD-10 and DSM-IV is:",
      options: ["ICD is for children; DSM for adults", "ICD is a classification system for statistical purposes (inclusion by common international usage, no validity implication), whereas DSM is a diagnostic nomenclature (inclusion implies clinical utility and an empirical database)", "ICD is European; DSM is pharmacological", "No difference exists"],
      correctIndex: 1,
      explanation: "Classification versus nomenclature — the purpose difference that explains why mixed anxiety-depression could be included in ICD-10 but fail DSM-IV's validity screen.",
      afterSectionId: "mechanism",
    },
    {
      id: "pc-quiz-2",
      question: "A New Yorker with marked snake fear who never encounters snakes and suffers no functional impact:",
      options: ["Has a disorder in both systems", "Has specific phobia in ICD-10 (symptoms sufficient) but no mental disorder in DSM-IV (no clinically significant distress or impairment)", "Has a disorder in DSM-IV but not ICD-10", "Has schizophrenia"],
      correctIndex: 1,
      explanation: "The worked example of the impairment difference: DSM's clinical-significance criterion as the false-positive guard; ICD's orthogonal ICF for function.",
      afterSectionId: "symptoms",
    },
    {
      id: "pc-quiz-3",
      question: "The first widely used set of operationalized diagnostic criteria, cited 1,650 times in a decade, was:",
      options: ["The DSM-5 criteria", "The Feighner criteria (Robins and Guze, Washington University, 1972)", "The ICD-8 glossary", "Hippocrates' humours"],
      correctIndex: 1,
      explanation: "The research community's response to unmeasurably vague glossary definitions: 16 disorders with explicit inclusion and exclusion criteria, later expanded into the RDC and incorporated into DSM-III.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pc-quiz-4",
      question: "DSM-III's landmark contributions included:",
      options: ["The aetiological theory of schizophrenia", "The descriptive atheoretical approach (criteria by presentation, not cause-theory), explicit criteria, and the multiaxial system", "The abolition of diagnosis", "Psychoanalytic aetiology throughout"],
      correctIndex: 1,
      explanation: "The compact that let all orientations share one language, plus Axes II-V institutionalising the biopsychosocial evaluation.",
      afterSectionId: "differential",
    },
    {
      id: "pc-quiz-5",
      question: "In the ICD-10 F-chapter, the code F10.31 (alcohol withdrawal state with convulsions) illustrates:",
      options: ["Random numbering", "The systematic depth: third digit the substance, fourth the syndrome, fifth the qualifier", "A US-only code", "A personality-disorder code"],
      correctIndex: 1,
      explanation: "The coding architecture: substance-by-syndrome precision designed for statistical and clinical discrimination, expandable to a thousand diagnoses at four digits.",
      afterSectionId: "management",
    },
    {
      id: "pc-quiz-6",
      question: "ICD-10's special attention to acute and transient psychotic disorders was driven by:",
      options: ["European litigation", "Their frequency in developing countries, where short-lasting good-prognosis psychoses are common — the classification built with those presentations in the field trials", "Insurance companies", "DSM-IV's demands"],
      correctIndex: 1,
      explanation: "The developing-country provision: directly relevant to Indian practice, where the brief polymorphic psychoses are common and the F23 block serves them.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Define diagnosis, disease, disorder, illness and sickness, and explain why disorder is psychiatry's term.", answer: "DIAGNOSIS: both the name of a disease and the process of determining it. DISEASE: where objective pathology or presumed aetiology exists; pancreatic cancer, strep throat, Alzheimer's. DISORDER: where aetiology is unknown and the definition is syndromic; symptoms, history, sometimes laboratory findings; psychiatry's term, the classification's own admission that the pathological evidence has not arrived. ILLNESS: the individual's subjective awareness of distress. SICKNESS: the inability to perform social roles. The four answer four different questions and are not interchangeable; using disease for psychiatric conditions overclaims validity the field does not have.", topic: "Definitions" },
    { question: "List the five stakeholder groups and their wants, and state the ICD-10 answer.", answer: "CLINICIANS: categorise as many help-seekers as possible; facilitate identification, treatment, prognosis and cause. RESEARCHERS: homogeneous groups for treatment-testing and aetiology research. EDUCATORS: structure for teaching psychopathology and differential diagnosis. PUBLIC-HEALTH ADMINISTRATORS: track epidemiology, utilisation and costs. CRITICS: diagnosis as reductionistic labelling of individual differences and social deviance, exposing people to stigma, at minimum, less misuse. THE ICD-10 ANSWER: different products for different target groups; the statistical/glossary version, the Blue Book for clinicians, the research criteria, the primary-care version.", topic: "Stakeholders" },
    { question: "State the four-plus conceptual issues with one example each.", answer: "DESCRIPTIVE VERSUS THEORY-BASED: classification from aetiological theory (psychodynamic, behavioural, neurobiological) or a descriptive heuristic; example: DSM-III's symptom-based criteria against a psychodynamic aetiological grouping. PATHOLOGY VERSUS NORMALCY: what distinguishes mental disorder from normative behaviour (caseness); example: the snake fear that is a symptom in everyone and a disorder only with impact. CATEGORICAL VERSUS DIMENSIONAL: discrete bounded categories or continua, and which dimensions chosen how; example: the personality-disorder severity-plus-trait model of ICD-11 against F6's types. LUMPING VERSUS SPLITTING: few broad heterogeneous categories or many homogeneous ones; example: autism-spectrum reorganisation versus separate subtypes. SINGLE VERSUS MULTIPLE DIAGNOSIS: hierarchy where diagnoses trump one another, or encouraged comorbidity; example: the six-diagnosis DSM patient against the single-explanation formulation.", topic: "Conceptual issues" },
    { question: "Give the Feighner citation datum, state what inclusion and exclusion criteria added, and trace the RDC lineage.", answer: "THE DATUM: 1,650 citations 1972-82 against the typical 2.1 per paper: the research community's vote for operationalisation. WHAT THE CRITERIA ADDED: the Feighner criteria (Robins and Guze, Washington University, St Louis, 1972; named for the paper's first author) defined 16 disorders by explicit inclusion AND exclusion criteria, providing common ground for different research groups so that diagnostic definitions could be amended constructively: the vagueness of glossary definitions could not identify homogeneous study populations; explicit exclusions could. THE LINEAGE: the Research Diagnostic Criteria (Spitzer, Endicott, Robins), built for the NIMH collaborative depression psychobiology project and heavily used in mood and psychotic research; then incorporation into DSM-III, whose criteria were mostly derived from the RDC plus expert consensus.", topic: "Operationalisation" },
    { question: "Describe DSM-III's innovations and tell the panic-depression prohibition story as criteria-correction.", answer: "THE INNOVATIONS: (1) the descriptive atheoretical approach; criteria by symptomatic presentation, not cause-theory, so the cognitivist, the neurobiologist and the psychodynamicist agree on how a panic attack presents while disagreeing on why; (2) explicit operationalized criteria with demonstrated reliability gains over DSM-II's glossary in the large NIMH field trial; (3) the multiaxial system (Axis I florid presenting, II personality and developmental, III physical, IV stressors, V adaptive functioning) the biopsychosocial model institutionalised. Initially opposed by psychoanalysts, DSM-III became the common language, translated into 13 languages. THE PROHIBITION STORY: DSM-III prohibited diagnosing panic disorder alongside major depression; family data showed either disorder in the relatives of comorbid probands: the prohibition was wrong and was overturned in DSM-III-R (1987): the operational system correcting itself with data, the empirical discipline working.", topic: "DSM-III" },
    { question: "Name the ICD-10 family of documents and give the field-trial numbers.", answer: "THE FAMILY (deliberately several versions): (1) the statistical/glossary version; the treaty-mandated official classification, for coders, statisticians and insurance clerks; (2) the Clinical Descriptions and Diagnostic Guidelines, the Blue Book: the clinician's central text, where many unclear cases unsuitable for research criteria are described; (3) the Diagnostic Criteria for Research: stricter by design ('usually starts in early childhood' becomes 'should not be made if onset is after 30'), because clinicians do not observe strict rules in daily work while research demands them; (4) the primary-care version: fewer categories (roughly two dozen) with flowcharts and treatment guidance. Plus the multiaxial presentation (axis I all disorders; axis II disability with WHO's DAS/WHODAS instruments; the contextual-factors axis). THE NUMBERS: clinical guidelines field-tested in 194 centres in 55 countries; International Revision Conference approval 1989; World Health Assembly approval for 1993 introduction.", topic: "ICD-10" },
    { question: "Explain the classification-versus-nomenclature difference with the mixed anxiety-depression example, and the impairment difference with the snake phobia.", answer: "CLASSIFICATION VERSUS NOMENCLATURE: ICD is set up as a classification for statistical purposes; the coder needs an unambiguous category, so the inclusion rule is common international usage with NO implication of validity; DSM is a sanctioned nomenclature: inclusion implies APA sanction, clinical utility and an empirical database (unevenly: old categories grandfathered; new categories faced the higher standards from DSM-IV). THE EXAMPLE: mixed anxiety-depression is a category in ICD-10 (common usage) and was rejected by DSM-IV (validity concerns); the same patient, two systems. THE IMPAIRMENT DIFFERENCE: ICD-10 disorders (dementia and phobias nearly alone among exceptions) are defined by symptoms alone, impairment indicated separately through the ICF; most DSM-IV criteria sets carry the clinical-significance criterion (clinically significant distress or impairment) the threshold where symptoms alone, occurring in non-disordered people too, would produce false positives. THE SNAKE PHOBIA: the New Yorker with marked fear, no snake encounters, no functional impact, not a mental disorder in DSM-IV; a snake phobia in ICD-10. The rationale: pneumonia is diagnosed by the bacillus regardless of function; psychiatric symptoms cannot be, absent pathology evidence.", topic: "The systems' differences" },
    { question: "Walk the F-chapter coding logic (digits 3, 4, 5-6) and give the F0-F9 subchapter map with the key relocation decisions.", answer: "THE CODING: psychiatric disorders occupy Chapter V, letter F; the second digit gives the larger group, the third the special group (three digits = 100 possibilities), or in F1 the substance (F10 alcohol); the fourth digit gives the syndrome (F10.3 withdrawal state; four digits = 1,000 possibilities, one-third used, designed for expansion); the fifth and sixth digits code course or features (F10.31 withdrawal with convulsions); X/Y/Z codes add circumstances (suicide), symptoms and psychosocial factors. Unique among ICD chapters, F carries short definitions plus inclusion and exclusion terms for every disorder. THE MAP: F0 organic/symptomatic; F1 substance (all psychoactive disorders in one place); F2 schizophrenia, schizotypal, delusional (1-month rule; acute and transient psychotic disorders given particular attention for developing countries); F3 mood (the endogenous/neurotic distinction abandoned, neurotic depression, ICD-9's 300.4, dissolved mostly into dysthymia F34.1; recurrent mania coded bipolar regardless of depressions); F4 neurotic, stress-related, somatoform (dissociative disorders in seven subtypes; hysteria abandoned; somatoform of particular developing-country importance; neurasthenia retained); F5 behavioural syndromes with physiological disturbances (eating, non-organic sleep, sexual dysfunction, puerperal; the F54 psychosomatic code alongside the somatic diagnosis); F6 personality and behaviour (emotionally unstable personality split into impulsive and borderline types; factitious disorder's innovation); F7 mental retardation; F8 developmental; F9 childhood-onset. THE RELOCATIONS: schizotypal to F21 among the psychoses; cyclothymic to F3 as cyclothymia; gender identity and sexual preference moved to F6.", topic: "The F-chapter" },
  ],
  faqs: [
    { question: "Why do psychiatrists talk about disorders rather than diseases?", answer: "Disease implies known pathology or aetiology; psychiatry's conditions are defined syndromically (symptom patterns with distress and dysfunction) because their causes are mostly unknown. Disorder is the honest term, with the classification itself admitting this. When a cause is found, the condition moves toward the disease side of the ledger." },
    { question: "Which is right, ICD or DSM?", answer: "They serve different masters: ICD is a statistical classification (inclusion by international usage, no validity claim), DSM a sanctioned nomenclature (inclusion implies data); hence the same patient can be a case in one and not the other, the snake phobia with no functional impact being the worked example. Indian records use ICD; the international literature uses both." },
    { question: "Why does my DSM-diagnosed patient have six disorders?", answer: "DSM abandoned strict hierarchy for comorbidity, to communicate more diagnostic information; the dimensional critique and the overlapping criteria sets explain the pile-up: a known cost of the categorical compromise. Each label must still earn its place by independently met criteria, and the formulation, not the label count, carries the understanding." },
    { question: "Is schizophrenia 1 month or 6?", answer: "In ICD-10, 1 month of symptoms; in DSM-IV, 6 months of illness including prodrome: the classic genuine-outlook difference between the systems. The Indian record follows ICD's month; the literature is read bilingually." },
    { question: "Do these categories reflect brain reality?", answer: "Not yet: they are descriptive compromises awaiting aetiological validation; the modern moves (dimensional specifiers, RDoC-style frameworks, ICD-11's trait model) are the current attempts, exactly the conceptual issues the Oxford chapter laid out." },
    { question: "What was wrong with 'neurotic depression'?", answer: "The endogenous/neurotic split lacked validity: ICD-10 dissolved neurotic depression largely into dysthymia, ending the dualism, one of classification's cleanest deletions, and a standing lesson that categories can be abolished by evidence, not only added." },
    { question: "Why does my record say F23 when the internet says schizophrenia?", answer: "The Indian record codes ICD-10, where schizophrenia requires 1 month of symptoms and F23 covers the acute and transient psychoses; the internet page you read was DSM-based, with its 6-month gate. Both are internally correct. Ask the treating doctor to translate between the systems rather than choosing between them." },
    { question: "Will the categories keep changing?", answer: "Yes: by design: the systems are revised by international review as evidence accumulates. Categories merge (neurotic depression into dysthymia), relocate (schizotypal among the psychoses) and are retired (hysteria); DSM-5 and ICD-11's dimensional hybrids are the current turn of the same wheel. A diagnosis names the pattern the current evidence supports, not a permanent truth." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "World Health Organization — the ICD-10 family: Clinical Descriptions and Diagnostic Guidelines (the Blue Book, 1992), Diagnostic Criteria for Research (1993), the Primary Care version (1996) and the multiaxial presentation" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 1.9 (First & Pincus) — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Feighner JP et al. (1972) — Diagnostic criteria for use in psychiatric research, Hospital Practice (the Robins-Guze Washington University criteria)" },
      { source: "Spitzer RL et al. — the DSM-III field-trial reliability studies" },
      { source: "Sartorius N — ICD-10 development and the international field trials (194 centres, 55 countries)" },
      { source: "Leckman J et al. — the family-study data overturning the panic-depression prohibition (as cited)" },
    ],
    reviews: [
      { source: "Spitzer RL, Endicott J & Robins E — the Research Diagnostic Criteria" },
      { source: "Kendell RE — the validity discussion lineage" },
      { source: "van Praag H — the validity-skeptic tradition cited in the DSM-IV-ICD-10 differences literature" },
      { source: "American Psychiatric Association — DSM-I (1952) through DSM-IV (1994) with the four-volume Sourcebook; DSM-5 (2013)" },
      { source: "World Health Organization — ICD-6 (1948) through ICD-9 (1978); ICD-11 (2019/2022): modern updates flagged as post-Oxford context" },
    ],
    patientResources: [
      { source: "The WHO ICD-10 primary-care version — the flowchart instrument district practice runs on" },
      { source: "Tele-MANAS 14416 — where Indian patients and families first meet the pathway the classifications organise" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what a diagnosis is, why doctors may use different names, what the code on the file does and does not mean.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definitions, the stakeholders, the operational revolution, the multiaxial system, the F-chapter map.",
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
      description: "Everything: the coding discipline, the two-system literacy, the caseness craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definitional base, the stakeholder question, the conceptual issues.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the five terms, list the five stakeholders and state the four-plus conceptual issues with one example each." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The operational-criteria engine, the coding pathway, the 1855-to-ICD-11 history.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk syndrome to criterion list to threshold to category, and say why the systems diverge where their purposes do." },
    { number: 3, title: "Clinical Practice", description: "Caseness signals, the criteria apparatus, the systems' differences, the coding discipline.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can code a case to the fifth digit and argue the snake-phobia caseness question under both systems." },
    { number: 4, title: "Indian Context", description: "India codes ICD: the F23 provision, the somatoform flag, the primary-care instrument, the assignment discipline.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can assign the F-code through the duration and severity gates and explain to a family what the label does and does not mean." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the systems-differences essay cold and recite the F-tour's relocation decisions without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "NOTP 2e, ch 1.9 (First & Pincus) — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-30" },
    { id: "S2", source: "Feighner JP et al. — Diagnostic criteria for use in psychiatric research, Hospital Practice (the Robins-Guze Washington University criteria, 16 disorders, inclusion and exclusion criteria)", sourceType: "primary", year: "1972", dateReviewed: "2026-09-30" },
    { id: "S3", source: "Spitzer RL, Endicott J & Robins E — the Research Diagnostic Criteria (the NIMH collaborative depression psychobiology project's instrument)", sourceType: "primary", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S4", source: "American Psychiatric Association — DSM-I (1952), DSM-II (1968), DSM-III (1980), DSM-III-R (1987), DSM-IV (1994) with the four-volume Sourcebook", sourceType: "classification", year: "1952-1994", dateReviewed: "2026-09-30" },
    { id: "S5", source: "World Health Organization — ICD-6 (1948) through ICD-9 (1978): the international classification's early editions and glossaries", sourceType: "who", year: "1948-1978", dateReviewed: "2026-09-30" },
    { id: "S6", source: "World Health Organization — the ICD-10 family: Short Glossary; Clinical Descriptions and Diagnostic Guidelines (the Blue Book, 1992); Diagnostic Criteria for Research (1993); the Primary Care version (1996); the multiaxial presentation", sourceType: "who", year: "1992-1996", dateReviewed: "2026-09-30" },
    { id: "S7", source: "Sartorius N — ICD-10 development (work from 1982, chairing) and the international field trials (194 centres, 55 countries)", sourceType: "primary", year: "1982 onward", dateReviewed: "2026-09-30" },
    { id: "S8", source: "Spitzer RL et al. — the DSM-III field-trial reliability studies (reliability gains over DSM-II's glossary)", sourceType: "primary", year: "late 1970s", dateReviewed: "2026-09-30" },
    { id: "S9", source: "Leckman J et al. — the family-study data overturning the panic-depression prohibition (either disorder in relatives of comorbid probands; as cited)", sourceType: "primary", year: "pre-1987 (as cited)", dateReviewed: "2026-09-30" },
    { id: "S10", source: "Kendell RE — the validity discussion lineage", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S11", source: "van Praag H — the validity-skeptic tradition cited in the DSM-IV-ICD-10 differences literature", sourceType: "review", year: "n.d. (per the note's citation)", dateReviewed: "2026-09-30" },
    { id: "S12", source: "American Psychiatric Association — DSM-5 (2013); World Health Organization — ICD-11 (2019/2022): modern updates cited as flagged post-Oxford context", sourceType: "classification", year: "2013-2022", dateReviewed: "2026-09-30" },
    { id: "S13", source: "The Indian tier — ICD coding in Indian records, examinations, insurance and disability certification; the DMHP district infrastructure as the primary-care version's deployment; the F23 and somatoform developing-country provisions; practice-pattern description from Indian clinical literature (context honestly labelled)", sourceType: "review", year: "2026 context", dateReviewed: "2026-09-30" },
  ],
  evidenceMap: [
    { text: "The definitional set: diagnosis as both the name of a disease and the process of determining it; disease where objective pathology or presumed aetiology exists (pancreatic cancer, strep throat, Alzheimer's); disorder where aetiology is unknown and definition is syndromic: psychiatry's term; illness the individual's subjective awareness of distress; sickness the inability to perform social roles; classification as systematic grouping by principles of similarity and difference, classifications differing radically depending on the principles.", grade: "established", sources: ["S1"] },
    { text: "The stakeholder question: whose needs is the classification primarily intended to address; clinicians (identification, treatment, prognosis, cause), researchers (homogeneous groups), educators (teaching structure), public-health administrators (epidemiology, utilisation, costs), critics (less stigmatizing misuse), with ICD-10's answer of different products for different target groups.", grade: "established", sources: ["S1", "S6"] },
    { text: "The conceptual issues: descriptive versus theory-based; pathology versus normalcy (caseness); categorical versus dimensional; lumping versus splitting; single versus multiple diagnosis (hierarchy versus comorbidity), with systems not applying their own rules consistently: compromises everywhere.", grade: "established", sources: ["S1"] },
    { text: "The operational revolution: the Feighner criteria (Robins and Guze, Washington University, St Louis, 1972); 16 disorders with inclusion and exclusion criteria, 1,650 citations 1972-82 against the typical 2.1 per paper; the Research Diagnostic Criteria for the NIMH collaborative depression psychobiology project; both incorporated into DSM-III (1980) under Spitzer's leadership, criteria mostly derived from the RDC plus expert consensus, with reliability gains over DSM-II demonstrated in the large NIMH field trial.", grade: "established", sources: ["S1", "S2", "S3", "S8"] },
    { text: "DSM-III's contributions and corrections: the descriptive atheoretical principle (criteria by symptomatic presentation, not cause-theory); the multiaxial system (Axis I florid presenting, II personality and developmental, III physical, IV stressors, V adaptive functioning) institutionalising the biopsychosocial model; translated into 13 languages; the panic-depression prohibition overturned by family data showing either disorder in relatives of comorbid probands, producing DSM-III-R (1987).", grade: "established", sources: ["S1", "S4", "S9"] },
    { text: "The ICD-10 family and its validation: work from 1982 with Sartorius chairing; deliberately several versions (the treaty-mandated statistical/glossary version; the Clinical Descriptions and Diagnostic Guidelines: the Blue Book; the Diagnostic Criteria for Research, stricter than the clinical guidelines; the primary-care version with roughly two dozen categories and flowcharts); clinical guidelines field-tested in 194 centres in 55 countries; International Revision Conference approval 1989, World Health Assembly approval for 1993 introduction.", grade: "established", sources: ["S1", "S6", "S7"] },
    { text: "DSM-IV's empirical revision and the coordination outcome: work from 1988; systematic literature reviews (rules from a methods conference), MacArthur-funded data reanalyses (answering questions like the minimum panic-attack count, limited by dataset incompatibilities) and 15 NIMH-funded field trials, documented in the four-volume Sourcebook; joint DSM-IV/ICD-10 coordination meetings minimised differences but the timelines defeated identity (ICD-10 categories settled by 1989 when DSM-IV work began): the systems ending much more similar than DSM-III and ICD-9, with persisting small differences, most without justification, the 1-versus-6-month schizophrenia duration the genuine outlook difference.", grade: "established", sources: ["S1", "S4", "S6"] },
    { text: "The classification-versus-nomenclature difference: ICD set up as a classification for statistics; the coder needs an unambiguous category, inclusion by common international usage with no implication of validity; DSM a sanctioned nomenclature: inclusion implying APA sanction, clinical utility and an empirical database, unevenly applied (old categories grandfathered; new categories facing higher standards from DSM-IV). Worked case: mixed anxiety-depression included in ICD-10, rejected by DSM-IV for validity concerns.", grade: "established", sources: ["S1", "S6"] },
    { text: "The impairment difference: ICD-10 disorders (dementia and phobias nearly alone among exceptions) defined by symptoms alone, impairment indicated separately through the ICF; most DSM-IV criteria sets carrying the clinical-significance criterion (clinically significant distress or impairment) as the false-positive guard: the rationale being that descriptive symptoms are not specific to disorder (pneumonia diagnosed by the bacillus regardless of function; psychiatric symptoms cannot be, absent pathology evidence). Worked example: the New Yorker with snake phobia, no snake encounters, no functional impact, not a mental disorder in DSM-IV, a snake phobia in ICD-10.", grade: "established", sources: ["S1"] },
    { text: "The F-chapter architecture and subchapter map: Chapter V, letter F, with second digit the larger group, third the special group or substance, fourth the syndrome, fifth and sixth the course and qualifiers (F10.31 alcohol withdrawal with convulsions); three digits 100 possibilities, four digits 1,000 with one-third used: expansion designed in; X/Y/Z codes for circumstances, symptoms and psychosocial factors; unique among ICD chapters in carrying short definitions plus inclusion and exclusion terms for every disorder; F0-F9 subchapters with the key relocations (neurotic depression dissolved mostly into dysthymia F34.1; hysteria abandoned; schizotypal to F21; cyclothymic to F3; recurrent mania coded bipolar regardless of depressions; gender identity and sexual preference to F6; the F54 psychosomatic code; emotionally unstable personality split into impulsive and borderline types; factitious disorder's innovation; neurasthenia retained).", grade: "established", sources: ["S1", "S6"] },
    { text: "The developing-country provisions: acute and transient psychotic disorders given particular attention for developing countries where short-lasting good-prognosis psychoses are frequent; somatoform disorders of particular importance in developing countries; neurasthenia retained (unlike DSM-IV): the weakness and fatigue-centred presentations of Indian and East Asian clinics having a home in ICD that DSM denies.", grade: "established", sources: ["S1", "S6"] },
    { text: "The modern updates, flagged as post-Oxford context: DSM-5 (2013) dropped the multiaxial system, dimensional specifiers and cross-cutting measures appeared, autism-spectrum reorganised; ICD-11 (2022 operating) followed with dimensional hybrids, personality disorder by severity-plus-trait, and complex-PTSD: the conceptual issues, categorical versus dimensional above all, predicted exactly these reform directions.", grade: "established", sources: ["S12"], note: "Flagged as post-Oxford context by the source note." },
    { text: "The Indian tier: India codes ICD; records, examinations, insurance and disability certification run on ICD-10 (migrating to ICD-11); the F23 acute-and-transient provision written from field-trial data that drew heavily on developing-country presentations; the primary-care version designed for district-health infrastructure, the DMHP training curriculum its natural deployment; the conceptual issues as standard Indian postgraduate and diploma essay questions: practice-pattern description, context honestly labelled.", grade: "supported", sources: ["S13"] },
  ],
};
