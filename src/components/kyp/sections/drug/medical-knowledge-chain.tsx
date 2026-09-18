"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import type { DrugKnowledgeChain } from "@/lib/kyp/knowledge";
import { knowledgeGraph } from "@/lib/kyp/knowledge";
import { drugClassIdFromLabel } from "@/lib/kyp/data/drug-taxonomy";
import { cn } from "@/lib/utils";
import { getDrugKnowledgeChain } from "@/lib/kyp/knowledge";

/**
 * MedicalKnowledgeChain — the drug's pharmacology as an evidence-backed
 * chain of rows (recovered feature: "Knowledge chain").
 *
 * Every row is DERIVED from the canonical knowledge graph
 * (src/lib/kyp/knowledge) — never hand-authored per drug. Entity rows
 * render as cards (label + kind badge + subtext), simple associations
 * render as chips; every element carries a tooltip title preserving
 * the verbatim evidence string, so the UI can never drift from the
 * locked data layer.
 *
 * buildKnowledgeChainRows(chain) is exported as a PURE function so the
 * test suite can pin the row contract without React.
 */

/* ============================================================
   Row model (pure)
   ============================================================ */

export interface KnowledgeChainChip {
  label: string;
  /** Small categorical badge on the element — e.g. "transporter". */
  badge?: { label: string };
  /**
   * Subtext rendered beneath the label — present on card-variant
   * elements (full names, action ids, origin → termination, class
   * descriptions).
   */
  subtext?: string;
  /** Inline meta text — e.g. a frequency label. */
  meta?: string;
  /** Clickable destination (basePath-aware at render time). */
  href?: string;
  /** Entity kind for colour coding. */
  kind?: "drug" | "class" | "target" | "neurotransmitter" | "region" | "pathway" | "condition" | "side-effect" | "monitoring";
  /** Tooltip text — the preserved evidence / entity description. */
  title?: string;
}

export interface KnowledgeChainRow {
  key: string;
  /** Overline row label — e.g. "Molecular targets". */
  label: string;
  /** Optional long-form text (mechanism row). */
  text?: string;
  chips: KnowledgeChainChip[];
}

const FREQUENCY_LABEL: Record<string, string> = {
  "very-common": "very common",
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  unknown: "frequency not quantified",
};

const TIER_LABEL: Record<"common" | "serious", string> = {
  common: "Common",
  serious: "Serious",
};

const KIND_LABEL: Record<string, string> = {
  transporter: "transporter",
  receptor: "receptor",
  enzyme: "enzyme",
  "ion-channel": "ion channel",
};

/**
 * Target card label — short name plus its parenthetical full name when
 * the registry carries a genuine expansion ("SERT (serotonin
 * transporter)", "NET (norepinephrine transporter)" — recovered QA
 * evidence format). Full names that restate, extend, or contain the
 * short name ("5-HT7 receptor", "α3β4 nicotinic acetylcholine
 * receptor" for name "α3β4 nAChR") render as the short name alone.
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
 * Pure derivation of the rendered rows from a drug knowledge chain.
 * Rows with no chips are omitted — data-driven rendering.
 */
export function buildKnowledgeChainRows(chain: DrugKnowledgeChain): KnowledgeChainRow[] {
  const rows: KnowledgeChainRow[] = [];

  /* ── MEDICATION · CLASS (cards: drug, class, substance class) ── */
  const classChips: KnowledgeChainChip[] = [
    {
      label: chain.genericName,
      badge: { label: chain.class.label },
      subtext: chain.class.fullName,
      href: `/drugs/${chain.slug}`,
      kind: "drug",
      title: `The ${chain.class.label} you are reading about`,
    },
    {
      label: chain.class.label,
      subtext: chain.class.fullName,
      href: `/drugs/class/${drugClassIdFromLabel(chain.class.label)}`,
      kind: "class",
      title: `Medication class collection — all KYP ${chain.class.label}s`,
    },
  ];
  // The substance-class card renders only when it adds information the
  // class card does not already carry (QA evidence: bupropion shows the
  // Stimulant card; sertraline's SSRI registry entry is redundant with
  // its class card and is omitted). Never fabricated — the entry comes
  // from the drug's own drugClass field via the canonical registry.
  if (
    chain.substanceClass &&
    chain.substanceClass.name.toLowerCase() !== chain.class.label.toLowerCase() &&
    chain.substanceClass.name.toLowerCase() !== chain.genericName.toLowerCase()
  ) {
    classChips.push({
      label: chain.substanceClass.name,
      subtext: chain.substanceClass.description,
      kind: "class",
      title: chain.substanceClass.description,
    });
  }
  rows.push({
    key: "medication-class",
    label: "Medication · Class",
    chips: classChips,
  });

  /* ── MECHANISM (text only — the data's own molecularTarget string) ── */
  rows.push({
    key: "mechanism",
    label: "Mechanism",
    text: chain.drug.mechanism.primaryTargetText,
    chips: [],
  });

  /* ── MOLECULAR TARGETS (cards: full name + kind badge + action id) ──
     Negligible-affinity edges are graph data but NOT target cards —
     the drug does not act there (bupropion's SERT: "NO clinically
     meaningful SERT affinity" stays in the mechanism text; the QA
     evidence's target cards are NET, DAT and the receptors only). */
  const targetChips: KnowledgeChainChip[] = chain.drug.targetEdges
    .filter((edge) => !(
      edge.actions.length === 1 && edge.actions[0] === "negligible-affinity"
    ))
    .map((edge) => {
      const target = knowledgeGraph.targets.get(edge.targetId);
      return {
        label: target
          ? targetCardLabel(target.name, target.fullName)
          : edge.targetId,
        badge: {
          label: target ? (KIND_LABEL[target.kind] ?? "target") : "target",
        },
        subtext: edge.actions.length > 0 ? edge.actions[0] : undefined,
        href: "#mechanism",
        kind: "target" as const,
        title: edge.evidence.join(" · "),
      };
    });
  for (const unresolved of chain.drug.unresolvedTargetTexts) {
    targetChips.push({
      label: unresolved,
      kind: "target",
      title: "Referenced in the drug data — not yet a registered graph entity",
    });
  }
  if (targetChips.length > 0) {
    rows.push({ key: "molecular-targets", label: "Molecular targets", chips: targetChips });
  }

  /* ── NEUROTRANSMITTERS (chips with abbreviation badges) ── */
  if (chain.neurotransmitters.length > 0 || chain.drug.unresolvedNeurotransmitterTexts.length > 0) {
    const ntChips: KnowledgeChainChip[] = chain.neurotransmitters.map((nt) => ({
      label: nt.name,
      badge: { label: nt.abbreviation },
      href: "#neurotransmitters",
      kind: "neurotransmitter" as const,
      title: `Neurotransmitter modulated by ${chain.genericName}`,
    }));
    for (const unresolved of chain.drug.unresolvedNeurotransmitterTexts) {
      ntChips.push({
        label: unresolved,
        kind: "neurotransmitter",
        title: "Referenced in the drug data — not yet a registered graph entity",
      });
    }
    rows.push({ key: "neurotransmitters", label: "Neurotransmitters", chips: ntChips });
  }

  /* ── BRAIN REGIONS ── */
  if (chain.brainRegions.length > 0) {
    rows.push({
      key: "brain-regions",
      label: "Brain regions",
      chips: chain.brainRegions.map(({ entity }) => ({
        label: entity.name,
        badge: { label: entity.neurotransmitter },
        href: "#brain-regions",
        kind: "region" as const,
        title: entity.functions.join(" · "),
      })),
    });
  }

  /* ── NEURAL PATHWAYS (cards: pathway name + origin → termination) ── */
  if (chain.pathways.length > 0) {
    rows.push({
      key: "neural-pathways",
      label: "Neural pathways",
      chips: chain.pathways.map(({ entity }) => ({
        label: entity.name,
        badge: { label: entity.neurotransmitter },
        subtext: `${entity.origin} → ${entity.termination}`,
        href: "#neural-pathways",
        kind: "pathway" as const,
        title: entity.function,
      })),
    });
  }

  /* ── CONDITIONS (★ = dedicated KYP disease page; ICD in title) ── */
  if (chain.drug.conditionEdges.length > 0) {
    rows.push({
      key: "conditions",
      label: "Conditions",
      chips: chain.drug.conditionEdges.map((edge) => {
        const condition = knowledgeGraph.conditions.get(edge.conditionKey);
        const relationship = edge.sources
          .map((s) => s.split(":")[1])
          .filter(Boolean)
          .map((rel) => rel.replace(/-/g, " "))
          .join(" · ");
        const icd = condition?.icd10 ? ` — ICD-10 ${condition.icd10}` : "";
        return {
          label: condition?.name ?? edge.conditionKey,
          badge: condition?.hasDiseasePage ? { label: "KYP page" } : undefined,
          meta: relationship || undefined,
          href: condition?.hasDiseasePage
            ? `/diseases/${edge.conditionKey}`
            : "#clinical-uses",
          kind: "condition" as const,
          title: `How this drug fits: ${relationship || "see clinical uses"}${icd}`,
        };
      }),
    });
  }

  /* ── SIDE EFFECTS (tier badge + frequency meta) ── */
  if (chain.drug.sideEffectEdges.length > 0) {
    rows.push({
      key: "side-effects",
      label: "Side effects",
      chips: chain.drug.sideEffectEdges.map((edge) => ({
        label: edge.name,
        badge: { label: TIER_LABEL[edge.tier] },
        meta: FREQUENCY_LABEL[edge.frequency] ?? edge.frequency,
        href: edge.sideEffectId ? "#side-effects" : "#side-effects",
        kind: "side-effect" as const,
        title: `${TIER_LABEL[edge.tier]} — ${edge.frequency.replace(/-/g, " ")} with ${chain.genericName}`,
      })),
    });
  }

  /* ── MONITORING (parameter + frequency meta) ── */
  if (chain.drug.monitoring.length > 0) {
    rows.push({
      key: "monitoring",
      label: "Monitoring",
      chips: chain.drug.monitoring.map((m) => ({
        label: m.parameter,
        meta: m.frequency,
        href: "#monitoring",
        kind: "monitoring" as const,
        title: m.rationale,
      })),
    });
  }

  return rows;
}

/* ============================================================
   Component
   ============================================================ */

interface MedicalKnowledgeChainProps {
  drugSlug: string;
}

const chipKindClass: Record<
  NonNullable<KnowledgeChainChip["kind"]>,
  string
> = {
  drug: "border-brand/30 bg-brand-soft/40 text-brand-ink hover:border-brand/60",
  class: "border-brand/30 bg-brand-soft/40 text-brand-ink hover:border-brand/60",
  target: "border-neural/30 bg-neural-soft/40 text-neural hover:border-neural/60",
  neurotransmitter: "border-neural/30 bg-neural-soft/40 text-neural hover:border-neural/60",
  region: "border-neural/30 bg-neural-soft/40 text-neural hover:border-neural/60",
  pathway: "border-brand/30 bg-brand-soft/40 text-brand-ink hover:border-brand/60",
  condition: "border-success/30 bg-success-soft/40 text-success hover:border-success/60",
  "side-effect": "border-warning/30 bg-warning-soft/40 text-warning hover:border-warning/60",
  monitoring: "border-border/70 bg-card text-foreground/90 hover:border-brand/40",
};

/** Rows whose elements render as cards (label + subtext) vs chips. */
function rowUsesCards(row: KnowledgeChainRow): boolean {
  return row.chips.some((chip) => typeof chip.subtext === "string");
}

export function MedicalKnowledgeChain({ drugSlug }: MedicalKnowledgeChainProps) {
  const chainData = getDrugKnowledgeChain(drugSlug);
  if (!chainData) return null;
  const builtRows = buildKnowledgeChainRows(chainData);

  return (
    <div
      id="knowledge-chain"
      className="mt-14 rounded-2xl border border-border/60 bg-card/50 p-5 sm:p-8"
    >
      {/* Section head — compact, sits inside the Knowledge Graph section */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Knowledge chain
        </h3>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link2 className="h-3 w-3" aria-hidden />
          Derived from the canonical knowledge graph — every link is data-backed.
        </span>
      </div>

      {/* Rows */}
      <dl className="mt-6 space-y-5">
        {builtRows.map((row) => {
          const cards = rowUsesCards(row);
          return (
            <div
              key={row.key}
              className="grid gap-2 border-t border-border/40 pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <dt className="text-overline text-muted-foreground sm:pt-1.5">
                {row.label}
              </dt>
              <dd className="min-w-0">
                {row.text && (
                  <p className="mb-3 text-sm leading-relaxed text-foreground/85 [overflow-wrap:anywhere]">
                    {row.text}
                  </p>
                )}
                {cards ? (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {row.chips.map((chip, i) => (
                      <li key={`${row.key}-${i}`} className="min-w-0">
                        <KnowledgeCard chip={chip} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex flex-wrap gap-2">
                    {row.chips.map((chip, i) => (
                      <li key={`${row.key}-${i}`}>
                        <KnowledgeChip chip={chip} />
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

/**
 * Card element — label + inline badge on the first line, subtext below
 * (recovered QA evidence: medication/class, molecular-target and
 * pathway elements).
 */
function KnowledgeCard({ chip }: { chip: KnowledgeChainChip }) {
  const content = (
    <>
      <span className="flex flex-wrap items-center gap-2">
        <span className="font-medium [overflow-wrap:anywhere]">{chip.label}</span>
        {chip.badge && (
          <span className="rounded-full border border-border/60 bg-background/70 px-1.5 py-px text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">
            {chip.badge.label}
          </span>
        )}
        {chip.href && !chip.href.startsWith("#") && (
          <ArrowRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
        )}
      </span>
      {chip.subtext && (
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
          {chip.subtext}
        </span>
      )}
    </>
  );

  const className = cn(
    "block h-full rounded-xl border px-4 py-3 text-xs leading-snug transition-colors",
    chipKindClass[chip.kind ?? "target"],
    chip.href ? "cursor-pointer" : "cursor-default"
  );

  if (!chip.href) {
    return (
      <span className={className} title={chip.title}>
        {content}
      </span>
    );
  }

  // In-page anchors stay raw <a>; page routes go through next/link so
  // client-side navigation + basePath both behave like the rest of KYP.
  if (chip.href.startsWith("#")) {
    return (
      <a href={chip.href} className={className} title={chip.title}>
        {content}
      </a>
    );
  }

  return (
    <Link href={chip.href} className={className} title={chip.title}>
      {content}
    </Link>
  );
}

function KnowledgeChip({ chip }: { chip: KnowledgeChainChip }) {
  const content = (
    <>
      <span className="font-medium [overflow-wrap:anywhere]">{chip.label}</span>
      {chip.badge && (
        <span className="rounded-full border border-border/60 bg-background/70 px-1.5 py-px text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">
          {chip.badge.label}
        </span>
      )}
      {chip.meta && (
        <span className="text-[0.65rem] italic text-muted-foreground/80 [overflow-wrap:anywhere]">
          {chip.meta}
        </span>
      )}
      {chip.href && !chip.href.startsWith("#") && (
        <ArrowRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
      )}
    </>
  );

  const className = cn(
    "inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-xs leading-snug transition-colors",
    chipKindClass[chip.kind ?? "target"],
    chip.href ? "cursor-pointer" : "cursor-default"
  );

  if (!chip.href) {
    return (
      <span className={className} title={chip.title}>
        {content}
      </span>
    );
  }

  // In-page anchors stay raw <a>; page routes go through next/link so
  // client-side navigation + basePath both behave like the rest of KYP.
  if (chip.href.startsWith("#")) {
    return (
      <a href={chip.href} className={className} title={chip.title}>
        {content}
      </a>
    );
  }

  return (
    <Link href={chip.href} className={className} title={chip.title}>
      {content}
    </Link>
  );
}
