"use client";

import * as React from "react";
import Link from "next/link";
import { Link2, MoveDown, MoveRight } from "lucide-react";
import type {
  DrugKnowledgeChain,
  PrimaryTargetBasis,
  TargetEdge,
} from "@/lib/kyp/knowledge";
import {
  getDrugKnowledgeChain,
  isNegligibleAffinity,
  knowledgeGraph,
} from "@/lib/kyp/knowledge";
import { getMechanismActionLabel } from "@/lib/kyp/knowledge";
import { drugClassIdFromLabel } from "@/lib/kyp/data/drug-taxonomy";
import { cn } from "@/lib/utils";

/**
 * MedicalKnowledgeChain V2 — the drug's pharmacology as a connected,
 * editorial knowledge path rather than a database-style card wall.
 *
 * ─── Presentation-layer only ──────────────────────────────────────────
 * Every value rendered here is DERIVED from the canonical knowledge graph
 * (src/lib/kyp/knowledge — itself a pure derivation over the locked data
 * layer). No medical fact is authored, reworded, or dropped here:
 *
 *   LAYER 1  Section header — "Knowledge Chain" + how-to-read line +
 *            a quiet canonical-graph provenance note.
 *   LAYER 2  Primary knowledge path — medication → class → mechanism →
 *            THE primary target → its effect (registry action
 *            label). Exactly ONE "Primary target" node, or an
 *            explicit no-single-primary state — never a fallback, never
 *            a promoted additional target. The verbatim authored
 *            molecular-target string sits beneath the path as a caption.
 *   LAYER 3  Additional targets — compact relationship rows (name /
 *            action + expansion / kind as metadata), plus the
 *            neurotransmitters the drug modulates. Dangling references
 *            surface as unregistered rows, never dropped.
 *   LAYER 4  Clinical connections — conditions grouped by their existing
 *            metadata (page-linked / FDA approved / off-label), plus a
 *            quiet safety & monitoring summary and system context
 *            (brain regions, pathways, substance class).
 *
 * buildKnowledgeChainView(chain) is exported as a PURE function so the
 * test suite can pin the presentation contract without React.
 */

/* ============================================================
   View model (pure)
   ============================================================ */

export type KnowledgeChainPathRole =
  | "medication"
  | "class"
  | "mechanism"
  | "target"
  | "effect"
  | "missing-primary";

export interface KnowledgeChainPathNode {
  key: string;
  role: KnowledgeChainPathRole;
  /** Small overline above the label — e.g. "Medication", "Primary target", "Effect". */
  roleLabel: string;
  /** Strong node name — e.g. "Sertraline", "SSRI", "SERT", "Reuptake inhibition". */
  label: string;
  /** Secondary line — target full names, class expansions. */
  sublabel?: string;
  /** Subtle metadata — target kind, e.g. "Transporter". */
  kindLabel?: string;
  /** Clickable destination (in-page anchors, class collection pages). */
  href?: string;
  /** Tooltip — preserved verbatim evidence. */
  title?: string;
}

/** A row in the ADDITIONAL TARGETS section — never the primary. */
export interface AdditionalTargetRow {
  key: string;
  name: string;
  /** The drug→target relationship — registry action label(s). */
  relationship?: string;
  /** Registry full name, only when it expands the short name. */
  descriptor?: string;
  kindLabel: string;
  title: string;
  href?: string;
}

/**
 * THE primary target of the Knowledge Chain — a single target or null,
 * never an array (primary-target contract). Rendered as exactly one
 * "Primary target" node; when null, the chain renders the explicit
 * missing-primary state instead.
 */
export interface PrimaryTargetView {
  targetId: string;
  name: string;
  fullName?: string;
  kindLabel?: string;
  /** Registry action label(s) — the primary effect (effect isolation). */
  effectLabel?: string;
  /** Verbatim evidence, preserved for the tooltip. */
  evidence: string;
}

export interface KnowledgeChainConditionItem {
  key: string;
  name: string;
  /** Dedicated KYP disease page when one exists — never a dead link. */
  href?: string;
  icd10?: string;
  /** Human-readable statuses derived from the edge sources. */
  statuses: string[];
  title: string;
}

export interface KnowledgeChainConditionGroup {
  key:
    | "page-linked"
    | "primary"
    | "fda-approved"
    | "off-label"
    | "also-related";
  label: string;
  items: KnowledgeChainConditionItem[];
}

export interface KnowledgeChainView {
  drugName: string;
  /** Layer 2 — the connected primary path. */
  path: KnowledgeChainPathNode[];
  /**
   * THE single canonical primary target, or null — never an array,
   * never inferred from additional targets. Null means the canonical
   * data defines no single primary target and the chain renders the
   * explicit missing-primary state.
   */
  primaryTarget: PrimaryTargetView | null;
  /** How the primary resolution was established (audit transparency). */
  primaryBasis: PrimaryTargetBasis;
  /** The drug's own `mechanism.molecularTarget` string — verbatim. */
  mechanismCaption: string;
  /** Layer 3 — every target that is not the primary target. */
  additionalTargets: AdditionalTargetRow[];
  /** Free-text target strings that matched no registry entity. */
  unresolvedTargets: string[];
  neurotransmitters: {
    resolved: { name: string; abbreviation: string }[];
    unresolved: string[];
  };
  /** Layer 4 — conditions grouped by their existing metadata. */
  conditionGroups: KnowledgeChainConditionGroup[];
  safety: {
    sideEffectTiers: { tier: "common" | "serious"; label: string; names: string[] }[];
    monitoring: { parameter: string; frequency: string; rationale: string }[];
  };
  systemContext: {
    substanceClass?: { name: string; description: string };
    brainRegions: { name: string; note: string }[];
    pathways: { name: string; route: string; note: string }[];
  };
}

const KIND_LABEL: Record<string, string> = {
  transporter: "Transporter",
  receptor: "Receptor",
  enzyme: "Enzyme",
  "ion-channel": "Ion channel",
};

const TIER_LABEL: Record<"common" | "serious", string> = {
  common: "Common",
  serious: "Serious",
};

/**
 * Target names render with a parenthetical expansion only when the
 * registry full name genuinely expands the short name ("SERT" vs
 * "Serotonin transporter") — "5-HT7 receptor" adds nothing to "5-HT7"
 * and renders bare. (Recovered QA logic, reused verbatim.)
 */
function targetCardLabel(name: string, fullName: string): string {
  if (!fullName || fullName === name) return name;
  const lowerName = name.toLowerCase();
  const lowerFull = fullName.toLowerCase();
  if (lowerFull.startsWith(lowerName)) return name;
  if (lowerFull.includes(lowerName)) return name;
  const firstToken = lowerName.split(/\s+/)[0];
  if (firstToken && lowerFull.startsWith(firstToken)) return name;
  const expansion = fullName.charAt(0).toLowerCase() + fullName.slice(1);
  return `${name} (${expansion})`;
}

/**
 * An edge whose only action is negligible-affinity — canonical single
 * definition imported from the graph layer (never re-implemented here).
 */
function isNegligible(edge: TargetEdge): boolean {
  return isNegligibleAffinity(edge);
}

/** Registry action ids → the human label list, e.g. "Reuptake inhibition". */
function actionLabels(actions: string[]): string | undefined {
  const labels = actions
    .map((id) => getMechanismActionLabel(id))
    .filter((label): label is string => label !== null);
  return labels.length > 0 ? labels.join(" · ") : undefined;
}

/** Edge sources ("related:primary", "indication:fda-approved") →
 *  deduped human status labels in a stable, honest order. */
function statusLabels(sources: string[]): string[] {
  const order = ["primary", "fda-approved", "off-label"];
  const seen = new Set<string>();
  for (const source of sources) {
    const value = source.split(":")[1] ?? "";
    if (value) seen.add(value);
  }
  return [...seen].sort(
    (a, b) => order.indexOf(a) - order.indexOf(b) || a.localeCompare(b)
  ).map((value) => {
    if (value === "fda-approved") return "FDA approved";
    if (value === "off-label") return "off-label";
    return value.replace(/-/g, " ");
  });
}

/**
 * Presentation-level merge key for near-duplicate condition entries.
 * The data layer keys conditions by exact name, so "Major Depressive
 * Disorder" (relatedConditions) and "Major Depressive Disorder (MDD)"
 * (indications) are two edges for one condition. Only ACRONYM
 * parentheticals are folded away — qualifiers that carry meaning
 * ("(prophylaxis)", "(adult)", "— prevention") are preserved as
 * distinct entries. Pure display de-duplication: statuses are unioned,
 * never reinterpreted.
 */
function conditionMergeKey(name: string): string {
  const stripped = name.replace(/\s*\(([A-Z][A-Z0-9]*)\)\s*/g, " ");
  return stripped
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Pure derivation of the V2 presentation model from a drug knowledge
 * chain — the single canonical Knowledge Chain view builder.
 *
 * PRIMARY-TARGET CONTRACT:
 *   - `primaryTarget` is the chain's ONE primary target (from the
 *     graph layer's semantic resolution) or null — never an array,
 *     never a fallback, never an additional-target promotion.
 *   - The path renders medication → class → mechanism → primary target
 *     → effect, or the explicit missing-primary state when null.
 *   - Everything else stays in `additionalTargets` — including targets
 *     the data demoted (off-target / weak / secondary) — so no
 *     relationship is ever lost or silently re-ranked.
 *
 * Empty groups are omitted — data-driven rendering, never padded.
 */
export function buildKnowledgeChainView(chain: DrugKnowledgeChain): KnowledgeChainView {
  /* ── Layer 2: the primary path ── */
  const activeEdges = chain.drug.targetEdges.filter((e) => !isNegligible(e));
  const resolution = chain.drug.primaryTarget;
  const primaryEdge =
    resolution.primaryTargetId === null
      ? null
      : activeEdges.find((e) => e.targetId === resolution.primaryTargetId) ?? null;

  const path: KnowledgeChainPathNode[] = [
    {
      key: "medication",
      role: "medication",
      roleLabel: "Medication",
      label: chain.genericName,
    },
    {
      key: "class",
      role: "class",
      roleLabel: "Class",
      label: chain.class.label,
      href: `/drugs/class/${drugClassIdFromLabel(chain.class.label)}`,
      title: `All KYP ${chain.class.label}s — medication class collection`,
    },
    {
      key: "mechanism",
      role: "mechanism",
      roleLabel: "Mechanism",
      label: chain.class.fullName || chain.class.label,
      title: chain.drug.mechanism.primaryTargetText,
    },
  ];

  /* The single primary target node — or the explicit missing state.
     There is NO fallback: if the canonical data does not single out
     one primary target, none is rendered as such, ever. */
  let primaryTarget: PrimaryTargetView | null = null;
  if (primaryEdge) {
    const target = knowledgeGraph.targets.get(primaryEdge.targetId);
    const effectLabel = actionLabels(primaryEdge.actions);
    primaryTarget = {
      targetId: primaryEdge.targetId,
      name: target?.name ?? primaryEdge.targetId,
      fullName: target?.fullName,
      kindLabel: target ? KIND_LABEL[target.kind] : undefined,
      effectLabel,
      evidence: primaryEdge.evidence.join(" · "),
    };
    path.push({
      key: `target-${primaryEdge.targetId}`,
      role: "target",
      roleLabel: "Primary target",
      label: primaryTarget.name,
      sublabel: primaryTarget.fullName,
      kindLabel: primaryTarget.kindLabel,
      href: "#mechanism",
      title: primaryTarget.evidence,
    });
    // The primary effect — registry action label(s) of the primary
    // target relationship ONLY (an additional target's effect can
    // never occupy this node).
    if (effectLabel) {
      path.push({
        key: `effect-${primaryEdge.targetId}`,
        role: "effect",
        roleLabel: "Effect",
        label: effectLabel,
        title: primaryTarget.evidence,
      });
    }
  } else {
    path.push({
      key: "missing-primary",
      role: "missing-primary",
      roleLabel: "Primary target",
      label: "No single primary target",
      sublabel:
        "The canonical data names several co-equal molecular targets rather than one primary — see the full target list below.",
      title: chain.drug.mechanism.primaryTargetText,
    });
  }

  /* ── Layer 3: additional targets — everything that is not the
     primary target, in stable registry order. Never sliced by array
     position; never duplicating the primary. ── */
  const additionalTargets: AdditionalTargetRow[] = activeEdges
    .filter((e) => e.targetId !== primaryEdge?.targetId)
    .map((edge) => {
      const target = knowledgeGraph.targets.get(edge.targetId);
      const name = target?.name ?? edge.targetId;
      const fullName = target?.fullName ?? "";
      const descriptor =
        target && targetCardLabel(name, fullName) !== name ? fullName : undefined;
      return {
        key: `target-${edge.targetId}`,
        name,
        relationship: actionLabels(edge.actions),
        descriptor,
        kindLabel: target ? KIND_LABEL[target.kind] ?? "Target" : "Target",
        title: edge.evidence.join(" · "),
        href: "#mechanism",
      };
    });

  /* ── Neurotransmitters ── */
  const neurotransmitters = {
    resolved: chain.neurotransmitters.map((nt) => ({
      name: nt.name,
      abbreviation: nt.abbreviation,
    })),
    unresolved: [...chain.drug.unresolvedNeurotransmitterTexts],
  };

  /* ── Layer 4: clinical connections ──
     Merge acronym-suffixed near-duplicates first (see conditionMergeKey),
     then group by the merged entry's own metadata. */
  interface MergedCondition {
    name: string;
    href?: string;
    icd10?: string;
    statuses: string[];
    pageLinked: boolean;
    hasPrimary: boolean;
    hasFdaApproved: boolean;
    hasOffLabel: boolean;
  }
  const merged = new Map<string, MergedCondition>();
  for (const edge of chain.drug.conditionEdges) {
    const condition = knowledgeGraph.conditions.get(edge.conditionKey);
    const name = condition?.name ?? edge.conditionKey;
    const key = conditionMergeKey(name);
    const existing = merged.get(key);
    if (existing) {
      for (const status of statusLabels(edge.sources)) {
        if (!existing.statuses.includes(status)) existing.statuses.push(status);
      }
    } else {
      merged.set(key, {
        name,
        href: condition?.hasDiseasePage ? `/diseases/${edge.conditionKey}` : undefined,
        icd10: condition?.icd10,
        statuses: statusLabels(edge.sources),
        pageLinked: Boolean(condition?.hasDiseasePage),
        hasPrimary: edge.sources.includes("related:primary"),
        hasFdaApproved: edge.sources.includes("indication:fda-approved"),
        hasOffLabel: edge.sources.some((s) => s.endsWith(":off-label")),
      });
    }
  }

  /**
   * Promote the dedicated KYP page when the merged key matches a
   * page-linked registry condition (e.g. fluvoxamine's indication entry
   * "Major Depressive Disorder (MDD)" merges to the canonical MDD key,
   * whose /diseases/ page exists). Linking an existing page about the
   * same condition is navigation, not a new relationship — the item's
   * own statuses remain exactly what the data says.
   */
  for (const [key, entry] of merged) {
    if (!entry.pageLinked) {
      const canonical = knowledgeGraph.conditions.get(key);
      if (canonical?.hasDiseasePage) {
        entry.pageLinked = true;
        entry.name = canonical.name;
        entry.href = `/diseases/${key}`;
        entry.icd10 = canonical.icd10;
      }
    }
  }

  const groupOf = (entry: MergedCondition): KnowledgeChainConditionGroup["key"] => {
    if (entry.pageLinked) return "page-linked";
    if (entry.hasPrimary) return "primary";
    if (entry.hasFdaApproved) return "fda-approved";
    if (entry.hasOffLabel) return "off-label";
    return "also-related";
  };

  const groupItems: Record<
    KnowledgeChainConditionGroup["key"],
    KnowledgeChainConditionItem[]
  > = {
    "page-linked": [],
    primary: [],
    "fda-approved": [],
    "off-label": [],
    "also-related": [],
  };

  for (const [key, entry] of merged) {
    const icd = entry.icd10 ? ` — ICD-10 ${entry.icd10}` : "";
    groupItems[groupOf(entry)].push({
      key,
      name: entry.name,
      href: entry.href,
      icd10: entry.icd10,
      statuses: entry.statuses,
      title: `How ${chain.genericName} fits: ${entry.statuses.join(" · ") || "see clinical uses"}${icd}`,
    });
  }

  const groupLabels: Record<KnowledgeChainConditionGroup["key"], string> = {
    "page-linked": "Page-linked",
    primary: "Primary uses",
    "fda-approved": "FDA approved",
    "off-label": "Off-label",
    "also-related": "Also related",
  };
  const conditionGroups = (Object.keys(groupItems) as KnowledgeChainConditionGroup["key"][])
    .filter((key) => groupItems[key].length > 0)
    .map((key) => ({ key, label: groupLabels[key], items: groupItems[key] }));

  /* ── Safety & monitoring summary ── */
  const sideEffectTiers: KnowledgeChainView["safety"]["sideEffectTiers"] = [];
  for (const tier of ["common", "serious"] as const) {
    const names = chain.drug.sideEffectEdges
      .filter((e) => e.tier === tier)
      .map((e) => e.name);
    if (names.length > 0) {
      sideEffectTiers.push({ tier, label: TIER_LABEL[tier], names });
    }
  }

  /* ── System context ── */
  const substanceClass =
    chain.substanceClass &&
    chain.substanceClass.name.toLowerCase() !== chain.class.label.toLowerCase() &&
    chain.substanceClass.name.toLowerCase() !== chain.genericName.toLowerCase()
      ? { name: chain.substanceClass.name, description: chain.substanceClass.description }
      : undefined;

  return {
    drugName: chain.genericName,
    path,
    primaryTarget,
    primaryBasis: resolution.basis,
    mechanismCaption: chain.drug.mechanism.primaryTargetText,
    additionalTargets,
    unresolvedTargets: [...chain.drug.unresolvedTargetTexts],
    neurotransmitters,
    conditionGroups,
    safety: {
      sideEffectTiers,
      monitoring: chain.drug.monitoring,
    },
    systemContext: {
      substanceClass,
      brainRegions: chain.brainRegions.map(({ entity }) => ({
        name: entity.name,
        note: entity.functions.join(" · "),
      })),
      pathways: chain.pathways.map(({ entity }) => ({
        name: entity.name,
        route: `${entity.origin} → ${entity.termination}`,
        note: entity.function,
      })),
    },
  };
}

/* ============================================================
   Component
   ============================================================ */

interface MedicalKnowledgeChainProps {
  drugSlug: string;
}

export function MedicalKnowledgeChain({ drugSlug }: MedicalKnowledgeChainProps) {
  const chainData = getDrugKnowledgeChain(drugSlug);
  if (!chainData) return null;
  const view = buildKnowledgeChainView(chainData);

  const hasSafety =
    view.safety.sideEffectTiers.length > 0 || view.safety.monitoring.length > 0;
  const hasSystemContext =
    view.systemContext.substanceClass !== undefined ||
    view.systemContext.brainRegions.length > 0 ||
    view.systemContext.pathways.length > 0;

  return (
    <div id="knowledge-chain" className="mt-12 border-t border-border/60 pt-8">
      {/* ── LAYER 1 — Section header ── */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <div>
          <h3 className="text-h3 text-foreground">Knowledge Chain</h3>
          <p className="mt-1.5 text-body-sm text-muted-foreground">
            How {view.drugName} connects from class → mechanism → target → effect.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-caption text-muted-foreground/70">
          <Link2 className="h-3 w-3 shrink-0" aria-hidden />
          Derived from the canonical knowledge graph — every link is data-backed.
        </span>
      </div>

      {/* ── LAYER 2 — Primary knowledge path ──
          Deliberately no JS-driven entrance animation: the only motion here
          is the CSS-transition hover/focus colour work, which the global
          prefers-reduced-motion kill-switch in globals.css disables. */}
      <div className="mt-8">
        <ol
          aria-label={`Primary knowledge path for ${view.drugName}`}
          className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center"
        >
          {view.path.map((node, i) => (
            <li
              key={node.key}
              className="flex min-w-0 flex-col lg:flex-row lg:items-center"
            >
              <PathNode node={node} />
              {i < view.path.length - 1 && <PathConnector />}
            </li>
          ))}
        </ol>
        <p className="mt-4 max-w-2xl text-caption italic leading-relaxed text-muted-foreground/80 [overflow-wrap:anywhere]">
          <span className="not-italic text-muted-foreground/60">
            Molecular target, as authored:{" "}
          </span>
          {view.mechanismCaption}
        </p>
      </div>

      {/* ── LAYER 3 — Additional targets + neurotransmitters ── */}
      {(view.additionalTargets.length > 0 ||
        view.unresolvedTargets.length > 0 ||
        view.neurotransmitters.resolved.length > 0 ||
        view.neurotransmitters.unresolved.length > 0) && (
        <section aria-labelledby="knowledge-chain-additional-targets" className="mt-10">
          <h4
            id="knowledge-chain-additional-targets"
            className="text-overline text-muted-foreground"
          >
            {/* Label integrity: exactly one heading concept — the targets
                that are NOT the chain's single primary target. When no
                single primary exists, the section carries every
                molecular target under its own honest name. */}
            {view.primaryTarget
              ? "Additional targets"
              : "Molecular targets"}
          </h4>
          {view.additionalTargets.length > 0 && (
            <ul className="mt-2 divide-y divide-border/50">
              {view.additionalTargets.map((row) => (
                <li key={row.key}>
                  <a
                    href={row.href ?? "#mechanism"}
                    title={row.title}
                    className="kyp-focus-ring grid grid-cols-1 gap-x-4 gap-y-0.5 py-2.5 transition-colors hover:text-brand sm:grid-cols-[minmax(6.5rem,auto)_1fr_auto] sm:items-baseline"
                  >
                    <span className="text-sm font-semibold text-foreground [overflow-wrap:anywhere]">
                      {row.name}
                    </span>
                    <span className="min-w-0 text-body-sm text-foreground/75 [overflow-wrap:anywhere]">
                      {row.relationship || row.descriptor}
                      {row.relationship && row.descriptor ? ` · ${row.descriptor}` : ""}
                    </span>
                    <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-muted-foreground/60 sm:justify-self-end">
                      {row.kindLabel}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          {view.unresolvedTargets.length > 0 && (
            <ul className="mt-1 divide-y divide-border/50">
              {view.unresolvedTargets.map((text) => (
                <li
                  key={text}
                  title="Referenced in the drug data — not yet a registered graph entity"
                  className="grid grid-cols-1 gap-x-4 py-2.5 sm:grid-cols-[minmax(6.5rem,auto)_1fr] sm:items-baseline"
                >
                  <span className="text-sm font-medium text-foreground/80 [overflow-wrap:anywhere]">
                    {text}
                  </span>
                  <span className="text-caption text-muted-foreground/70">
                    referenced in the drug data — not yet a registered graph entity
                  </span>
                </li>
              ))}
            </ul>
          )}
          {(view.neurotransmitters.resolved.length > 0 ||
            view.neurotransmitters.unresolved.length > 0) && (
            <p className="mt-3 text-body-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">
                Neurotransmitters modulated —{" "}
              </span>
              {view.neurotransmitters.resolved
                .map((nt) => `${nt.name} (${nt.abbreviation})`)
                .concat(view.neurotransmitters.unresolved)
                .join(" · ")}
            </p>
          )}
        </section>
      )}

      {/* ── LAYER 4 — Clinical connections ── */}
      {view.conditionGroups.length > 0 && (
        <section aria-labelledby="knowledge-chain-clinical-connections" className="mt-10">
          <h4
            id="knowledge-chain-clinical-connections"
            className="text-overline text-muted-foreground"
          >
            Clinical connections
          </h4>
          <dl className="mt-2">
            {view.conditionGroups.map((group) => (
              <div
                key={group.key}
                className="grid gap-x-6 gap-y-1.5 border-t border-border/50 py-3 first:border-t-0 sm:grid-cols-[11rem_1fr] sm:gap-y-1"
              >
                <dt className="text-body-sm font-medium text-foreground/80 sm:pt-0.5">
                  {group.label}
                </dt>
                <dd className="min-w-0">
                  {group.key === "page-linked" ? (
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.key}>
                          <Link
                            href={item.href ?? "#clinical-uses"}
                            title={item.title}
                            className="kyp-focus-ring inline-flex min-h-[44px] flex-col items-start py-1 text-sm font-semibold text-foreground underline decoration-brand/40 decoration-1 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                          >
                            {item.name}
                            <span className="text-caption font-normal text-muted-foreground">
                              {item.statuses.join(" · ")}
                              {item.icd10 ? ` · ICD-10 ${item.icd10}` : ""}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-body-sm leading-relaxed text-foreground/80">
                      {group.items.map((item, i) => (
                        <React.Fragment key={item.key}>
                          {i > 0 && (
                            <span aria-hidden="true" className="mx-1.5 text-muted-foreground/50">
                              ·
                            </span>
                          )}
                          <span
                            title={item.title}
                            className="[overflow-wrap:anywhere]"
                          >
                            {item.name}
                          </span>
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* ── Safety & monitoring — quiet summary, details live in the
             page's own dedicated sections (anchor-linked). ── */}
      {hasSafety && (
        <section aria-labelledby="knowledge-chain-safety" className="mt-8">
          <h4 id="knowledge-chain-safety" className="text-overline text-muted-foreground">
            Safety &amp; monitoring
          </h4>
          <dl className="mt-2">
            {view.safety.sideEffectTiers.length > 0 && (
              <div className="border-t border-border/50 py-2.5">
                <dt className="text-caption text-muted-foreground">
                  <a
                    href="#side-effects"
                    className="kyp-focus-ring -my-2 inline-flex min-h-[44px] items-center py-2 font-medium text-foreground/80 underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                  >
                    Side effects
                  </a>
                </dt>
                <dd className="mt-1 text-body-sm leading-relaxed text-foreground/75">
                  {view.safety.sideEffectTiers.map((tier, i) => (
                    <React.Fragment key={tier.tier}>
                      {i > 0 && (
                        <span aria-hidden="true" className="mx-1.5 text-muted-foreground/50">
                          ·
                        </span>
                      )}
                      <span className="font-medium text-foreground/80">
                        {tier.label} ({tier.names.length}):
                      </span>{" "}
                      {tier.names.join(" · ")}
                    </React.Fragment>
                  ))}
                </dd>
              </div>
            )}
            {view.safety.monitoring.length > 0 && (
              <div className="border-t border-border/50 py-2.5">
                <dt className="text-caption text-muted-foreground">
                  <a
                    href="#monitoring"
                    className="kyp-focus-ring -my-2 inline-flex min-h-[44px] items-center py-2 font-medium text-foreground/80 underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                  >
                    Monitoring
                  </a>
                </dt>
                <dd className="mt-1 text-body-sm leading-relaxed text-foreground/75">
                  {view.safety.monitoring
                    .map((m) => `${m.parameter} (${m.frequency})`)
                    .join(" · ")}
                </dd>
              </div>
            )}
          </dl>
        </section>
      )}

      {/* ── System context — quiet footer (brain regions, pathways,
             substance class). Rendered only when the data carries it. ── */}
      {hasSystemContext && (
        <section aria-labelledby="knowledge-chain-system-context" className="mt-8">
          <h4
            id="knowledge-chain-system-context"
            className="text-overline text-muted-foreground"
          >
            System context
          </h4>
          <dl className="mt-2">
            {view.systemContext.substanceClass && (
              <div className="border-t border-border/50 py-2.5">
                <dt className="text-caption text-muted-foreground">Substance class</dt>
                <dd className="mt-0.5 text-body-sm text-foreground/80">
                  <span className="font-medium">{view.systemContext.substanceClass.name}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    — {view.systemContext.substanceClass.description}
                  </span>
                </dd>
              </div>
            )}
            {view.systemContext.brainRegions.length > 0 && (
              <div className="border-t border-border/50 py-2.5">
                <dt className="text-caption text-muted-foreground">Brain regions</dt>
                <dd className="mt-0.5 text-body-sm text-foreground/80">
                  {view.systemContext.brainRegions.map((r) => r.name).join(" · ")}
                </dd>
              </div>
            )}
            {view.systemContext.pathways.length > 0 && (
              <div className="border-t border-border/50 py-2.5">
                <dt className="text-caption text-muted-foreground">Neural pathways</dt>
                <dd className="mt-0.5 text-body-sm text-foreground/80">
                  {view.systemContext.pathways.map((p) => (
                    <span key={p.name} title={p.note}>
                      <span className="font-medium">{p.name}</span>
                      <span className="text-muted-foreground"> ({p.route})</span>
                    </span>
                  )).reduce<React.ReactNode[]>((acc, el, i) => {
                    if (i > 0) acc.push(
                      <span key={`sep-${i}`} aria-hidden="true" className="mx-1.5 text-muted-foreground/50">
                        ·
                      </span>
                    );
                    acc.push(el);
                    return acc;
                  }, [])}
                </dd>
              </div>
            )}
          </dl>
        </section>
      )}
    </div>
  );
}

/* ============================================================
   Presentation primitives
   ============================================================ */

const nodeChrome: Record<
  KnowledgeChainPathRole,
  string
> = {
  medication: "border-brand/40 bg-brand-soft/30",
  class: "border-border/70 bg-surface hover:border-brand/50",
  mechanism: "border-border/70 bg-surface",
  target: "border-border/70 bg-surface hover:border-neural/50",
  effect: "border-neural/40 bg-neural-soft/40",
  "missing-primary": "border-dashed border-border bg-transparent",
};

function PathNode({ node }: { node: KnowledgeChainPathNode }) {
  const content = (
    <>
      <span className="text-overline text-muted-foreground/80">{node.roleLabel}</span>
      <span className="text-h4 [overflow-wrap:anywhere] text-foreground">
        {node.label}
      </span>
      {node.sublabel && (
        <span className="text-caption leading-snug text-muted-foreground [overflow-wrap:anywhere]">
          {node.sublabel}
        </span>
      )}
    </>
  );

  const className = cn(
    // Width floor at lg: every node keeps at least the width an
    // ordinary canonical label needs ("SSRI", "SERT", "Reuptake
    // inhibition"), so a crowded path row can never squeeze a card
    // into character-level wrapping. The row itself wraps instead.
    "flex w-full min-w-0 flex-col gap-1 rounded-lg border px-4 py-3 lg:w-auto lg:min-w-[7.5rem] lg:max-w-[19rem]",
    nodeChrome[node.role],
    node.href && "kyp-focus-ring transition-colors"
  );

  if (!node.href) {
    return <div className={className}>{content}</div>;
  }
  if (node.href.startsWith("#")) {
    return (
      <a href={node.href} title={node.title} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={node.href} title={node.title} className={cn(className, "min-h-[44px] justify-center")}>
      {content}
    </Link>
  );
}

/**
 * Thin, restrained connector between path stages — a small arrow only.
 * Horizontal on desktop, vertical on mobile. Purely decorative.
 */
function PathConnector() {
  return (
    <>
      <span
        aria-hidden="true"
        className="flex py-1.5 pl-[1.35rem] text-brand/50 lg:hidden"
      >
        <MoveDown className="h-3.5 w-3.5" />
      </span>
      <span
        aria-hidden="true"
        className="hidden shrink-0 self-center px-1.5 text-brand/50 lg:flex"
      >
        <MoveRight className="h-4 w-4" />
      </span>
    </>
  );
}
