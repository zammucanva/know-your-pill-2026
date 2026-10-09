"use client";

import * as React from "react";
import {
  Info, Activity, X, Network, ChevronRight, ExternalLink,
} from "lucide-react";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useCameraStore } from "@/lib/anatomy/store/camera-store";
import { useAtlasData } from "@/lib/hooks/use-atlas-data";
import { getSystemById } from "@/lib/anatomy/systems";
import { matchKypStructure } from "@/lib/anatomy/structure-bridge";
import { AnatomyGuide } from "@/components/anatomy/panels/anatomy-guide";
import Link from "next/link";
import {
  resolveDrugLinks, resolveDisorderLinks, resolveNeurotransmitterLinks, type LearningLink,
} from "@/lib/anatomy/kyp-links";
import { getNormalizedSystem, getNormalizationOverride } from "@/lib/anatomy/kyp-normalization";

/**
 * InspectorPanel — right sidebar (KYP 2026 card styling).
 *
 * Shows details about the currently-selected structure. When the selection
 * comes from the real BodyParts3D model, the part is looked up in the
 * atlas to get its name, system, and concept ID. If the concept name
 * matches one of our pre-defined structures (e.g. "Hippocampus",
 * "Frontal lobe"), the rich KYP data (functions, clinical relevance,
 * drug/disorder links) is also displayed.
 *
 * When nothing is selected the panel becomes the KYP Knowledge Browser
 * (drugs / disorders / signals / pathways) instead of an empty state.
 */
export function InspectorPanel() {
  const selectedStructureId = useAnatomyStore((s) => s.selectedStructureId);
  const selectStructure = useAnatomyStore((s) => s.selectStructure);
  const setFocusTarget = useCameraStore((s) => s.setFocusTarget);
  const { getPartById, getConceptByPartId } = useAtlasData();

  if (!selectedStructureId) {
    return (
      <aside className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]" aria-label="Structure inspector">
        <AnatomyGuide />
      </aside>
    );
  }

  // Look up the part in the BodyParts3D atlas
  const part = getPartById(selectedStructureId);
  const concept = getConceptByPartId(selectedStructureId);

  if (!part && !concept) {
    return (
      <aside className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]" aria-label="Structure inspector">
        <AnatomyGuide />
      </aside>
    );
  }

  // Use the KYP-normalized system for display. For most parts this returns
  // the source system unchanged. For the small set of brain ventricles
  // that the source misclassified as cardiac, this returns "nervous".
  const normalizedSystemId = part ? getNormalizedSystem(part) : (concept ? "nervous" : "");
  const system = getSystemById(normalizedSystemId as any);
  // Use the KYP-normalized name for ventricular structures; otherwise the
  // raw BodyParts3D name.
  const override = concept ? getNormalizationOverride(concept.id) : undefined;
  const partName = override?.kypName ?? concept?.name ?? part?.name ?? "Unknown structure";
  const conceptId = part?.conceptId ?? concept?.id;

  // Show a small badge if this structure is normalized (e.g. brain
  // ventricle reclassified from cardiac → nervous).
  const isNormalized = !!override;

  // Try to match to our KYP structures by name (case-insensitive)
  // This bridges the real BodyParts3D names to our KYP data layer
  const kypStructure = matchKypStructure(partName);

  return (
    <aside className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold leading-tight text-[var(--foreground)]">
              {partName}
            </h2>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
              {system && (
                <>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: system.color }}
                    aria-hidden
                  />
                  <span>{system.name}</span>
                </>
              )}
              {conceptId && (
                <span className="rounded bg-[var(--secondary)] px-1.5 py-0.5 font-mono text-[10px]">
                  {conceptId}
                </span>
              )}
              {isNormalized && (
                <span className="rounded-full bg-[var(--brand-soft)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--brand-ink)]">
                  KYP normalized
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => selectStructure(null)}
            aria-label="Close inspector"
            className="rounded-md p-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
          >
            <X size={14} />
          </button>
        </div>

        {/* Focus button */}
        <button
          type="button"
          onClick={() => setFocusTarget(selectedStructureId)}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:shadow-[var(--shadow-glow)]"
        >
          <Activity size={12} />
          Focus camera on this structure
        </button>
      </div>

      {/* Body — scrollable */}
      <div className="kyp-scroll min-h-0 flex-1 overflow-y-auto p-3.5">
        {/* System description */}
        {system?.description && (
          <InspectorSection icon={<Info size={12} />} title="Overview">
            <p className="text-sm leading-relaxed text-[var(--foreground)]">
              {system.description}
            </p>
          </InspectorSection>
        )}

        {/* KYP data — only if the structure matches one of our pre-defined entries */}
        {kypStructure && (
          <>
            {kypStructure.functions.length > 0 && (
              <InspectorSection icon={<Info size={12} />} title="Functions">
                <ul className="space-y-1.5">
                  {kypStructure.functions.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[var(--foreground)]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </InspectorSection>
            )}

            {kypStructure.anatomyDescription && (
              <InspectorSection icon={<Info size={12} />} title="Anatomy">
                <p className="text-sm leading-relaxed text-[var(--foreground)]">
                  {kypStructure.anatomyDescription}
                </p>
              </InspectorSection>
            )}

            {kypStructure.clinicalRelevance && (
              <InspectorSection icon={<Info size={12} />} title="Clinical relevance">
                <p className="text-sm leading-relaxed text-[var(--foreground)]">
                  {kypStructure.clinicalRelevance}
                </p>
              </InspectorSection>
            )}

            {kypStructure.kypLinks && (
              <KypLinks
                neurotransmitters={resolveNeurotransmitterLinks(kypStructure.kypLinks.neurotransmitters)}
                drugs={resolveDrugLinks(kypStructure.kypLinks.drugs)}
                disorders={resolveDisorderLinks(kypStructure.kypLinks.disorders)}
              />
            )}
          </>
        )}

        {/* Concept elements — show which parts are included */}
        {concept && concept.elements.length > 1 && (
          <InspectorSection icon={<Network size={12} />} title="Included structures">
            <p className="mb-2 text-xs text-[var(--muted-foreground)]">
              This concept comprises {concept.elements.length} anatomical pieces:
            </p>
            <ul className="space-y-1">
              {concept.elements.slice(0, 20).map((elementId) => {
                const elementPart = getPartById(elementId);
                return (
                  <li key={elementId}>
                    <button
                      type="button"
                      onClick={() => selectStructure(elementId)}
                      className="flex w-full items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 text-left text-xs transition-all duration-[var(--duration-base)] hover:border-[var(--brand)]/40"
                    >
                      <ChevronRight size={10} className="shrink-0 text-[var(--muted-foreground)]" />
                      <span className="truncate">{elementPart?.name ?? elementId}</span>
                    </button>
                  </li>
                );
              })}
              {concept.elements.length > 20 && (
                <li className="text-xs text-[var(--muted-foreground)]">
                  And {concept.elements.length - 20} more…
                </li>
              )}
            </ul>
          </InspectorSection>
        )}

        {/* Source attribution */}
        <div className="mt-6 border-t border-[var(--border)] pt-3">
          <p className="text-[11px] italic text-[var(--muted-foreground)]">
            Anatomical data from Z-Anatomy (CC BY-SA 4.0) and BodyParts3D, ©
            The Database Center for Life Science (CC BY 4.0).
          </p>
          <a
            href="https://github.com/LluisV/Z-Anatomy"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-[var(--brand)] hover:underline"
          >
            View source <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </aside>
  );
}

function InspectorSection({
  icon, title, children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="kyp-label mb-2 flex items-center gap-1.5">
        {icon}
        {title}
      </h3>
      {children}
    </section>
  );
}

function KypLinks({
  neurotransmitters, drugs, disorders,
}: {
  neurotransmitters: LearningLink[];
  drugs: LearningLink[];
  disorders: LearningLink[];
}) {
  // Only links that resolve to a real KYP page are shown.
  if (neurotransmitters.length + drugs.length + disorders.length === 0) return null;
  return (
    <InspectorSection icon={<Network size={12} />} title="Related KYP learning">
      <div className="space-y-3">
        <KypLinkGroup label="Neurotransmitters" items={neurotransmitters} />
        <KypLinkGroup label="Medications" items={drugs} />
        <KypLinkGroup label="Conditions" items={disorders} />
      </div>
    </InspectorSection>
  );
}

function KypLinkGroup({ label, items }: { label: string; items: LearningLink[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-medium text-[var(--muted-foreground)]">{label}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href + item.name}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-sm transition-colors hover:border-[var(--brand)]/40"
            >
              <span className="min-w-0">
                <span className="block text-[var(--foreground)] group-hover:text-[var(--brand)]">{item.name}</span>
                {item.subtitle && (
                  <span className="block text-[11px] text-[var(--muted-foreground)]">{item.subtitle}</span>
                )}
              </span>
              <ChevronRight size={14} className="shrink-0 text-[var(--muted-foreground)]" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
