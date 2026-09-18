"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import type { DrugKnowledgeChain } from "@/lib/kyp/knowledge";
import { getMechanismActionLabel, knowledgeGraph } from "@/lib/kyp/knowledge";
import { drugClassIdFromLabel } from "@/lib/kyp/data/drug-taxonomy";
import { cn } from "@/lib/utils";
import { getDrugKnowledgeChain } from "@/lib/kyp/knowledge";

/**
 * MedicalKnowledgeChain — the drug's pharmacology as an evidence-backed
 * chain of rows (recovered feature: "Knowledge chain").
 *
 * Every row is DERIVED from the canonical knowledge graph
 * (src/lib/kyp/knowledge) — never hand-authored per drug. Every chip
 * carries its badge (entity kind), its meta (derived action), and a
 * tooltip title preserving the verbatim evidence string, so the UI can
 * never drift from the locked data layer.
 *
 * buildKnowledgeChainRows(chain) is exported as a PURE function so the
 * test suite can pin the row contract without React.
 */

/* ============================================================
   Row model (pure)
   ============================================================ */

export interface KnowledgeChainChip {
  label: string;
  /** Small categorical badge on the chip — e.g. "Transporter". */
  badge?: { label: string };
  /** Inline meta text — e.g. the derived action label. */
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

/**
 * Pure derivation of the rendered rows from a drug knowledge chain.
 * Rows with no chips are omitted — data-driven rendering.
 */
export function buildKnowledgeChainRows(chain: DrugKnowledgeChain): KnowledgeChainRow[] {
  const rows: KnowledgeChainRow[] = [];

  /* ── MEDICATION · CLASS ── */
  rows.push({
    key: "medication-class",
    label: "Medication · Class",
    chips: [
      {
        label: chain.genericName,
        badge: { label: "Medication" },
        href: `/drugs/${chain.slug}`,
        kind: "drug",
        title: `The ${chain.class.label} you are reading about`,
      },
      {
        label: chain.class.label,
        badge: { label: "Class" },
        href: `/drugs/class/${drugClassIdFromLabel(chain.class.label)}`,
        kind: "class",
        title: `Medication class collection — all KYP ${chain.class.label}s`,
      },
    ],
  });

  /* ── MECHANISM (text + derived actions) ── */
  const mechanismChips: KnowledgeChainChip[] = chain.drug.mechanism.actions.map(
    (actionId) => ({
      label: getMechanismActionLabel(actionId) ?? actionId,
      meta: actionId,
      kind: "target" as const,
      title: `Derived action — see the molecular-target evidence below`,
    })
  );
  rows.push({
    key: "mechanism",
    label: "Mechanism",
    text: chain.drug.mechanism.primaryTargetText,
    chips: mechanismChips,
  });

  /* ── MOLECULAR TARGETS (with kind badges + action meta + evidence) ── */
  const targetChips: KnowledgeChainChip[] = chain.drug.targetEdges.map((edge) => {
    const target = knowledgeGraph.targets.get(edge.targetId);
    const actionLabels = edge.actions
      .map((id) => getMechanismActionLabel(id) ?? id)
      .join(" · ");
    return {
      label: target?.name ?? edge.targetId,
      badge: {
        label:
          target?.kind === "transporter"
            ? "Transporter"
            : target?.kind === "receptor"
              ? "Receptor"
              : target?.kind === "enzyme"
                ? "Enzyme"
                : target?.kind === "ion-channel"
                  ? "Ion channel"
                  : "Target",
      },
      meta: actionLabels || undefined,
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

  /* ── NEUROTRANSMITTERS (abbreviation badges) ── */
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

  /* ── NEURAL PATHWAYS (origin → termination) ── */
  if (chain.pathways.length > 0) {
    rows.push({
      key: "neural-pathways",
      label: "Neural pathways",
      chips: chain.pathways.map(({ entity }) => ({
        label: `${entity.origin} → ${entity.termination}`,
        badge: { label: entity.neurotransmitter },
        href: "#neural-pathways",
        kind: "pathway" as const,
        title: `${entity.name} — ${entity.function}`,
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
        {builtRows.map((row) => (
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
              <ul className="flex flex-wrap gap-2">
                {row.chips.map((chip, i) => (
                  <li key={`${row.key}-${i}`}>
                    <KnowledgeChip chip={chip} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
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
