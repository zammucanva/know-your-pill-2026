/**
 * Fact layer: normalises KYP's content into (subject, relation, object)
 * facts and indexes them as a relationship graph.
 *
 * RULES (non-negotiable):
 *   - A fact is only created when the source data states it. Nothing is
 *     inferred, completed or paraphrased: `evidence` and `explanation` are
 *     verbatim strings from the data.
 *   - The extractor never assumes a field exists. A drug without a
 *     half-life simply has no half-life fact.
 *   - Sources are INJECTED (FactSources), so the same code runs on the
 *     real registry in production and on small fixtures in tests, with no
 *     network and no AI.
 *
 * The structural types below describe only the fields the extractor reads.
 * The real `Drug` type satisfies them, so the registry can be passed in
 * directly without adapters.
 */

import {
  contentTokens,
  displayLabel,
  hashString,
  normalizeText,
  stripParens,
  toId,
} from "./normalize";
import type {
  EntityRef,
  EntityType,
  Fact,
  RelationId,
  SourceRef,
  SyllabusPlacement,
} from "./types";

/* ============================================================
   Injected source shapes (structural subsets of the real types)
   ============================================================ */

export interface FactSourceDrug {
  slug: string;
  genericName: string;
  drugClassLabel: string;
  drugClassFullName: string;
  /** ["Psychiatry", "Antidepressants", "SSRIs", "Sertraline"] */
  learningPath: string[];
  neurotransmitters: string[];
  brainRegionIds: string[];
  indications: { name: string; status: string; description: string }[];
  contraindications: { name: string; severity: string; rationale: string }[];
  blackBoxWarnings: { title: string; text: string }[];
  commonSideEffects: { name: string; frequency: string; description: string }[];
  seriousSideEffects: {
    name: string;
    severity: string;
    description: string;
    management?: string;
  }[];
  monitoring: { parameter: string; frequency: string; rationale: string }[];
  interactions: { drug: string; severity: string; mechanism: string; action: string }[];
  mechanism: {
    effect: string;
    halfLife: string;
    activeMetabolite?: string;
    molecularTarget: string;
  };
  clinicalCases?: { title: string; presentation: string; diagnosis: string }[];
}

export interface FactSourceBrainRegion {
  id: string;
  name: string;
  functions: string[];
  disorders: string[];
  neurotransmitter: string;
}

export interface FactSourcePathway {
  id: string;
  name: string;
  origin: string;
  termination: string;
  neurotransmitter: string;
}

export interface FactSourceTarget {
  id: string;
  name: string;
  fullName: string;
  kind: "transporter" | "receptor" | "enzyme" | "ion-channel";
  geneSymbol?: string;
}

export interface FactSources {
  drugs: FactSourceDrug[];
  brainRegions: FactSourceBrainRegion[];
  pathways: FactSourcePathway[];
  targets?: FactSourceTarget[];
  /** Resolves a drug's single primary target id, or null. */
  primaryTargetOf?: (drugSlug: string) => string | null;
}

/* ============================================================
   Value extraction (mirrors the proven custom-test extractors)
   ============================================================ */

/** First time-range phrase in a half-life string, or null. */
export function extractHalfLife(text: string): string | null {
  const match = text.match(
    /~?\s*\d+(?:[.,]\d+)?\s*(?:[\u2013\u2014-]\s*\d+(?:[.,]\d+)?)?\s*(?:hours?|days?|minutes?)/
  );
  return match ? match[0].replace(/~/g, "").trim() : null;
}

/** The metabolite name at the head of an active-metabolite string, or null. */
export function extractMetaboliteName(text: string): string | null {
  if (/^no active metabolite/i.test(text.trim())) return null;
  const head = stripParens(text);
  return head.length >= 3 ? head : null;
}

/** Leading diagnosis name of a case diagnosis ("Major Depressive Disorder,
 *  single episode ..." -> "Major Depressive Disorder"). A verbatim prefix,
 *  never reworded. Returns null when no clean head can be isolated. */
export function diagnosisHead(text: string): string | null {
  const head = text.split(/[,;(]|\s\u2014\s|\.\s/)[0].trim();
  if (head.length < 4 || head.length > 100) return null;
  return head;
}

/* ============================================================
   Store
   ============================================================ */

export interface DrugNode {
  slug: string;
  name: string;
  classId: string;
  classLabel: string;
  classFullName: string;
  placement: SyllabusPlacement;
}

export interface FactStore {
  facts: Fact[];
  byId: Map<string, Fact>;
  drugs: Map<string, DrugNode>;
  entities: Map<string, EntityRef>;
  /** True when the relation holds between subject and object. */
  holds(relation: RelationId, subjectId: string, objectId: string): boolean;
  /** Facts of a relation whose subject is `subjectId`. */
  factsOf(relation: RelationId, subjectId: string): Fact[];
  /** Facts of a relation whose object is `objectId`. */
  factsAbout(relation: RelationId, objectId: string): Fact[];
  /** Every fact of a relation. */
  byRelation(relation: RelationId): Fact[];
}

function entity(type: EntityType, id: string, label: string): EntityRef {
  // Net effects are whole sentences and stay exactly as written; every other
  // label is shown without its editorial annotation (see displayLabel).
  return { type, id, label: type === "netEffect" ? label : displayLabel(label) };
}

/** "X belongs to the SSRI class (Selective Serotonin Reuptake Inhibitor)."
 *  Built from the data's own label and full name. Worded without a/an so it
 *  is grammatical for every label, including acronyms; when the full name
 *  already starts with the label it is not repeated. */
function classSentence(name: string, label: string, fullName: string): string {
  return normalizeText(fullName).startsWith(normalizeText(label))
    ? `${name} belongs to the ${fullName} class.`
    : `${name} belongs to the ${label} class (${fullName}).`;
}

function pushTo<K, V>(map: Map<K, V[]>, key: K, value: V): void {
  const list = map.get(key);
  if (list) list.push(value);
  else map.set(key, [value]);
}

export function buildFactStore(sources: FactSources): FactStore {
  const facts: Fact[] = [];
  const byId = new Map<string, Fact>();
  const entities = new Map<string, EntityRef>();
  const drugNodes = new Map<string, DrugNode>();
  const subjectIndex = new Map<string, Fact[]>();
  const objectIndex = new Map<string, Fact[]>();
  const relationIndex = new Map<RelationId, Fact[]>();

  const remember = (e: EntityRef) => {
    if (!entities.has(e.id)) entities.set(e.id, e);
    return e;
  };

  const add = (
    relation: RelationId,
    subject: EntityRef,
    object: EntityRef,
    evidence: string,
    explanation: string,
    source: SourceRef,
    attrs?: Record<string, string>
  ) => {
    const id = `${relation}|${subject.id}|${object.id}`;
    if (byId.has(id)) return; // first statement of a fact wins; no duplicates
    const fact: Fact = {
      id,
      relation,
      subject: remember(subject),
      object: remember(object),
      evidence,
      explanation,
      source,
      attrs,
    };
    facts.push(fact);
    byId.set(id, fact);
    pushTo(subjectIndex, `${relation}|${subject.id}`, fact);
    pushTo(objectIndex, `${relation}|${object.id}`, fact);
    pushTo(relationIndex, relation, fact);
  };

  /* ── brain atlas lookups ─────────────────────────────────── */
  const regionById = new Map(sources.brainRegions.map((r) => [r.id, r]));
  const regionIdByName = new Map(
    sources.brainRegions.map((r) => [normalizeText(r.name), r.id])
  );
  const regionEntity = (label: string): EntityRef => {
    const known = regionIdByName.get(normalizeText(label));
    return known
      ? entity("brainRegion", `brainRegion:${known}`, regionById.get(known)!.name)
      : entity("brainRegion", `brainRegion:${toId(label)}`, label);
  };

  /* ── drugs ───────────────────────────────────────────────── */
  for (const drug of sources.drugs) {
    const slug = drug.slug;
    const drugEntity = remember(entity("drug", `drug:${slug}`, drug.genericName));
    const lp = drug.learningPath;
    drugNodes.set(slug, {
      slug,
      name: drug.genericName,
      classId: `drugClass:${toId(drug.drugClassLabel)}`,
      classLabel: drug.drugClassLabel,
      classFullName: drug.drugClassFullName,
      placement: {
        subject: lp[0] ?? "",
        chapter: lp[1] ?? "",
        topic: lp[2] ?? drug.drugClassLabel,
        subtopic: slug,
      },
    });

    const src = (sectionLabel: string, anchor: string): SourceRef => ({
      slug,
      name: drug.genericName,
      sectionLabel,
      sectionHref: `/drugs/${slug}#${anchor}`,
      classLabel: drug.drugClassLabel,
    });

    // class membership
    add(
      "belongsToClass",
      drugEntity,
      entity("drugClass", `drugClass:${toId(drug.drugClassLabel)}`, drug.drugClassLabel),
      `${drug.genericName} · ${drug.drugClassFullName}`,
      classSentence(drug.genericName, drug.drugClassLabel, drug.drugClassFullName),
      src("Overview", "quick-facts")
    );

    // neurotransmitters (rank 0 = primary)
    drug.neurotransmitters.forEach((text, rank) => {
      const label = stripParens(text);
      if (!label) return;
      add(
        "modulatesNeurotransmitter",
        drugEntity,
        entity("neurotransmitter", `neurotransmitter:${toId(label)}`, label),
        text,
        `${drug.genericName} modulates ${drug.neurotransmitters.join(", ")}, as documented in its neuroscience profile.`,
        src("Neurotransmitters", "neurotransmitters"),
        { rank: String(rank) }
      );
    });

    // brain regions
    for (const regionId of drug.brainRegionIds) {
      const region = regionById.get(regionId);
      if (!region) continue;
      add(
        "actsOnBrainRegion",
        drugEntity,
        entity("brainRegion", `brainRegion:${region.id}`, region.name),
        `Brain regions: ${region.name}`,
        `${region.name}: ${region.functions.join(", ")}.`,
        src("Brain regions", "brain-regions")
      );
    }

    // indications
    for (const ind of drug.indications) {
      add(
        "indicatedFor",
        drugEntity,
        entity("indication", `indication:${toId(ind.name)}`, ind.name),
        `Indication: ${ind.name} [${ind.status}]`,
        `${ind.name}: ${ind.description}`,
        src("Clinical uses", "clinical-uses"),
        { status: ind.status }
      );
    }

    // adverse effects
    for (const se of drug.commonSideEffects) {
      add(
        "hasCommonAdverseEffect",
        drugEntity,
        entity("adverseEffect", `adverseEffect:${toId(se.name)}`, se.name),
        `Common side effect: ${se.name} (${se.frequency})`,
        `${se.name}: ${se.description}`,
        src("Side effects", "side-effects"),
        { frequency: se.frequency }
      );
    }
    for (const se of drug.seriousSideEffects) {
      add(
        "hasSeriousAdverseEffect",
        drugEntity,
        entity("adverseEffect", `adverseEffect:${toId(se.name)}`, se.name),
        `Serious side effect: ${se.name} (${se.severity})`,
        se.management
          ? `${se.name}: ${se.description} Management: ${se.management}`
          : `${se.name}: ${se.description}`,
        src("Side effects", "side-effects"),
        { severity: se.severity }
      );
    }

    // monitoring
    for (const m of drug.monitoring) {
      add(
        "requiresMonitoring",
        drugEntity,
        entity("monitoringParameter", `monitoringParameter:${toId(m.parameter)}`, m.parameter),
        `Monitoring: ${m.parameter} (${m.frequency})`,
        `${m.parameter}: ${m.frequency}. ${m.rationale}`,
        src("Monitoring", "monitoring"),
        { frequency: m.frequency }
      );
    }

    // contraindications
    for (const c of drug.contraindications) {
      add(
        "contraindicatedIn",
        drugEntity,
        entity("contraindication", `contraindication:${toId(c.name)}`, c.name),
        `Contraindication: ${c.name} (${c.severity})`,
        `${c.name} (${c.severity}): ${c.rationale}`,
        src("Contraindications", "contraindications"),
        { severity: c.severity }
      );
    }

    // interactions
    for (const i of drug.interactions) {
      const agent = stripParens(i.drug);
      if (!agent) continue;
      add(
        "interactsWith",
        drugEntity,
        entity("interactionAgent", `interactionAgent:${toId(agent)}`, agent),
        `Interaction: ${i.drug} (${i.severity})`,
        `${agent} (${i.severity}): ${i.mechanism} ${i.action}`,
        src("Interactions", "interactions"),
        { severity: i.severity, mechanism: i.mechanism }
      );
    }

    // black-box warnings
    for (const b of drug.blackBoxWarnings) {
      add(
        "hasBoxedWarning",
        drugEntity,
        entity("boxedWarning", `boxedWarning:${toId(b.title)}`, b.title),
        `Black-box warning: ${b.title}`,
        `${b.title}: ${b.text}`,
        src("Contraindications", "contraindications")
      );
    }

    // pharmacology
    const halfLife = extractHalfLife(drug.mechanism.halfLife);
    if (halfLife) {
      add(
        "hasHalfLife",
        drugEntity,
        entity("halfLife", `halfLife:${toId(halfLife)}`, halfLife),
        `Half-life: ${drug.mechanism.halfLife}`,
        `${drug.genericName}: ${drug.mechanism.halfLife}`,
        src("Mechanism", "mechanism")
      );
    }
    if (drug.mechanism.activeMetabolite) {
      const name = extractMetaboliteName(drug.mechanism.activeMetabolite);
      if (name) {
        add(
          "hasActiveMetabolite",
          drugEntity,
          entity("metabolite", `metabolite:${toId(name)}`, name),
          `Active metabolite: ${drug.mechanism.activeMetabolite}`,
          `${drug.genericName}: ${drug.mechanism.activeMetabolite}`,
          src("Mechanism", "mechanism")
        );
      }
    }
    if (drug.mechanism.effect) {
      add(
        "hasNetEffect",
        drugEntity,
        entity("netEffect", `netEffect:${hashString(drug.mechanism.effect)}`, drug.mechanism.effect),
        drug.mechanism.effect,
        `${drug.genericName}: ${drug.mechanism.effect}`,
        src("Mechanism", "mechanism")
      );
    }

    // primary target (graph-resolved)
    const targetId = sources.primaryTargetOf?.(slug) ?? null;
    const target = targetId ? sources.targets?.find((t) => t.id === targetId) : undefined;
    if (target) {
      add(
        "hasPrimaryTarget",
        drugEntity,
        entity(target.kind === "ion-channel" ? "ionChannel" : target.kind, `target:${target.id}`, target.name),
        `Primary target: ${target.name} (${slug})`,
        `${drug.genericName} resolves to ${target.name} (${target.fullName}) as its single primary molecular target.`,
        src("Mechanism", "mechanism"),
        { fullName: target.fullName }
      );
    }

    // authored teaching case (verbatim vignette)
    for (const c of drug.clinicalCases ?? []) {
      const head = diagnosisHead(c.diagnosis);
      if (!head || !c.presentation.trim()) continue;
      add(
        "hasTeachingCase",
        drugEntity,
        entity("diagnosis", `diagnosis:${toId(head)}`, head),
        `Clinical case: ${c.title}`,
        c.diagnosis,
        src("Clinical case", "clinical-case"),
        { presentation: c.presentation, title: c.title }
      );
    }
  }

  /* ── targets: gene symbols (where the data layer states one) ── */
  for (const t of sources.targets ?? []) {
    if (!t.geneSymbol) continue;
    const targetType: EntityType = t.kind === "ion-channel" ? "ionChannel" : t.kind;
    add(
      "encodedByGene",
      entity(targetType, `target:${t.id}`, t.name),
      entity("gene", `gene:${toId(t.geneSymbol)}`, t.geneSymbol),
      `${t.name} (${t.fullName}) · gene ${t.geneSymbol}`,
      `${t.name} (${t.fullName}) is encoded by ${t.geneSymbol}.`,
      { name: t.fullName, sectionLabel: "Knowledge graph", classLabel: t.kind }
    );
  }

  /* ── brain atlas ──────────────────────────────────────────── */
  for (const region of sources.brainRegions) {
    const subject = entity("brainRegion", `brainRegion:${region.id}`, region.name);
    const source: SourceRef = {
      name: region.name,
      sectionLabel: "Brain atlas",
      classLabel: "Brain region",
    };
    for (const fn of region.functions) {
      add(
        "hasBrainFunction",
        subject,
        entity("brainFunction", `brainFunction:${toId(fn)}`, fn),
        `${region.name} · function: ${fn}`,
        `${region.name}: ${region.functions.join(", ")}.`,
        source
      );
    }
    for (const dis of region.disorders) {
      add(
        "associatedWithDisorder",
        subject,
        entity("disorder", `disorder:${toId(dis)}`, dis),
        `${region.name} · disorder: ${dis}`,
        `${region.name} is associated with ${region.disorders.join(", ")}.`,
        source
      );
    }
  }
  for (const p of sources.pathways) {
    const subject = entity("pathway", `pathway:${p.id}`, p.name);
    const source: SourceRef = { name: p.name, sectionLabel: "Pathways", classLabel: "Pathway" };
    add(
      "originatesIn",
      subject,
      regionEntity(p.origin),
      `${p.name}: ${p.origin} → ${p.termination}`,
      `${p.name} runs from ${p.origin} to ${p.termination}.`,
      source
    );
    add(
      "terminatesIn",
      subject,
      regionEntity(p.termination),
      `${p.name}: ${p.origin} → ${p.termination}`,
      `${p.name} runs from ${p.origin} to ${p.termination}.`,
      source
    );
    const nt = stripParens(p.neurotransmitter);
    if (nt) {
      add(
        "usesNeurotransmitter",
        subject,
        entity("neurotransmitter", `neurotransmitter:${toId(nt)}`, nt),
        `${p.name} · neurotransmitter: ${p.neurotransmitter}`,
        `${p.name} is a ${p.neurotransmitter} pathway.`,
        source
      );
    }
  }

  const factsOf = (relation: RelationId, subjectId: string) =>
    subjectIndex.get(`${relation}|${subjectId}`) ?? [];
  const factsAbout = (relation: RelationId, objectId: string) =>
    objectIndex.get(`${relation}|${objectId}`) ?? [];

  return {
    facts,
    byId,
    drugs: drugNodes,
    entities,
    holds: (relation, subjectId, objectId) =>
      byId.has(`${relation}|${subjectId}|${objectId}`),
    factsOf,
    factsAbout,
    byRelation: (relation) => relationIndex.get(relation) ?? [],
  };
}

/** Content tokens of an entity label, for near-synonym ambiguity checks. */
export function labelTokens(label: string): Set<string> {
  return contentTokens(label);
}
