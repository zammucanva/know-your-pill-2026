"use client";

import * as React from "react";
import { Globe, MapPin, Stethoscope } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * EvidenceAndIndianPractice — merged module combining:
 *   - Guideline Comparison (tab 1)
 *   - Evidence Hierarchy (tab 2)
 *
 * Replaces two separate sections with one tabbed module.
 *
 * Client Component — uses useState for active tab.
 */
interface EvidenceAndIndianPracticeProps {
  drug: Drug;
}

export function EvidenceAndIndianPractice({ drug }: EvidenceAndIndianPracticeProps) {
  const [tab, setTab] = React.useState<"comparison" | "hierarchy">("comparison");
  const hasComparison = drug.guidelineComparisons && drug.guidelineComparisons.length > 0;
  const hasHierarchy = Boolean(drug.evidenceHierarchy);

  if (!hasComparison && !hasHierarchy) return null;

  return (
    <Section id="evidence-practice">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Evidence & Indian Practice"
          title="Global evidence → Indian practice."
          description="What does international evidence say? What do Indian guidelines recommend? How is it actually practiced in India? These are related but not identical."
          tone="brand"
        />

        {/* Tab selector — minimal, no card */}
        <div className="mt-8 flex gap-4 border-b border-border/60">
          {hasComparison && (
            <button
              type="button"
              onClick={() => setTab("comparison")}
              className={cn(
                "pb-2 text-sm font-medium transition-colors border-b-2 -mb-px",
                tab === "comparison"
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Guideline Comparison
            </button>
          )}
          {hasHierarchy && (
            <button
              type="button"
              onClick={() => setTab("hierarchy")}
              className={cn(
                "pb-2 text-sm font-medium transition-colors border-b-2 -mb-px",
                tab === "hierarchy"
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Evidence Hierarchy
            </button>
          )}
        </div>

        {/* Tab content — no cards, just typography */}
        <div className="mt-6">
          {tab === "comparison" && hasComparison && (
            <div className="space-y-4">
              {drug.guidelineComparisons!.map((c, i) => {
                const hasIndian = c.indianSource !== null;
                return (
                  <div key={i} className="grid gap-3 sm:grid-cols-2">
                    {/* Topic spans both columns */}
                    <div className="sm:col-span-2">
                      <p className="text-overline text-muted-foreground">{c.topic}</p>
                    </div>
                    {/* International */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Globe className="h-3 w-3 text-brand" />
                        <span className="text-xs font-semibold text-brand">{c.internationalSource}</span>
                      </div>
                      <p className="text-sm text-foreground/90 leading-relaxed">{c.internationalRecommendation}</p>
                    </div>
                    {/* Indian */}
                    <div className={cn(hasIndian && "border-l-2 border-brand/20 pl-3")}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="h-3 w-3 text-brand" />
                        <span className="text-xs font-semibold text-brand">
                          {c.indianSource ?? "No dedicated Indian guideline"}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/90 leading-relaxed">{c.indianRecommendation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {tab === "hierarchy" && hasHierarchy && drug.evidenceHierarchy && (
            <div className="space-y-6">
              {/* International */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Globe className="h-3.5 w-3.5 text-brand" />
                  <h3 className="text-sm font-semibold text-brand">International Guidelines</h3>
                </div>
                <div className="space-y-2 pl-5">
                  {drug.evidenceHierarchy.international.map((item, i) => (
                    <div key={i}>
                      <span className="text-xs font-semibold text-foreground">{item.source}:</span>{" "}
                      <span className="text-sm text-muted-foreground">{item.recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indian */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  <h3 className="text-sm font-semibold text-brand">Indian Guidelines</h3>
                </div>
                <div className="space-y-2 pl-5">
                  {drug.evidenceHierarchy.indian.map((item, i) => (
                    <div key={i}>
                      <span className="text-xs font-semibold text-foreground">
                        {item.source ?? "No dedicated Indian guideline"}:
                      </span>{" "}
                      <span className="text-sm text-muted-foreground">{item.recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Practice */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Stethoscope className="h-3.5 w-3.5 text-brand" />
                  <h3 className="text-sm font-semibold text-brand">Indian Clinical Practice</h3>
                </div>
                <p className="pl-5 text-sm text-foreground/90 leading-relaxed">
                  {drug.evidenceHierarchy.indianClinicalPractice}
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
