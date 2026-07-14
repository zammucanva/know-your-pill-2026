"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, GitCompare, Users } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugNavigationModule — merged module combining:
 *   - Drug Family Navigator (tab 1)
 *   - Comparison Tables (tab 2)
 *   - Indian Comparison (tab 3)
 *   - Related Drugs (tab 4)
 *
 * Replaces 4 separate sections with one tabbed module.
 *
 * Client Component — uses useState for active tab.
 */
interface DrugNavigationModuleProps {
  drug: Drug;
}

export function DrugNavigationModule({ drug }: DrugNavigationModuleProps) {
  const [tab, setTab] = React.useState<"family" | "comparison" | "indian" | "related">("family");

  const hasFamily = Boolean(drug.drugFamilyNav);
  const hasComparison = drug.comparisonTables?.length > 0;
  const hasIndian = drug.indianComparisonContexts?.length > 0;
  const hasRelated = drug.relatedDrugs?.length > 0;

  const tabs = [
    { key: "family" as const, label: "Drug Family", visible: hasFamily },
    { key: "comparison" as const, label: "Comparison Table", visible: hasComparison },
    { key: "indian" as const, label: "Indian Scenarios", visible: hasIndian },
    { key: "related" as const, label: "Related Drugs", visible: hasRelated },
  ].filter((t) => t.visible);

  if (tabs.length === 0) return null;

  return (
    <Section id="drug-navigation">
      <Container>
        <SectionHeader
          eyebrow="Drug Navigation"
          title="Which drug, in which context?"
          description="Explore the drug family, compare with alternatives, see Indian-specific scenarios, and find related drugs — all in one place."
          tone="brand"
        />

        {/* Tabs */}
        <div className="mt-8 flex gap-3 overflow-x-auto border-b border-border/60 kyp-scroll">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                "shrink-0 pb-2 text-sm font-medium transition-colors border-b-2 -mb-px",
                tab === t.key
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {/* Drug Family */}
          {tab === "family" && hasFamily && drug.drugFamilyNav && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {drug.drugFamilyNav.members.map((member) => {
                const isCurrent = member.name === drug.genericName;
                const hasPage = Boolean(member.slug);
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.relationship}</p>
                      </div>
                      {isCurrent && <Badge variant="brand" size="sm">Current</Badge>}
                      {hasPage && !isCurrent && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
                    </div>
                    <p className="mt-1.5 text-xs text-foreground/80 leading-relaxed">{member.distinguishing}</p>
                  </>
                );
                if (hasPage && !isCurrent) {
                  return (
                    <Link key={member.name} href={`/drugs/${member.slug}`} className="rounded-lg border border-border/40 p-3 transition-colors hover:border-brand/40 hover:bg-brand-soft/10">
                      {content}
                    </Link>
                  );
                }
                return (
                  <div key={member.name} className={cn("rounded-lg p-3", isCurrent ? "border border-brand/30 bg-brand-soft/10 ring-1 ring-brand/20" : "border border-border/40")}>
                    {content}
                  </div>
                );
              })}
            </div>
          )}

          {/* Comparison Table */}
          {tab === "comparison" && hasComparison && drug.comparisonTables.map((table, i) => (
            <div key={i}>
              <h3 className="text-h3 mb-4">{table.title}</h3>
              <div className="overflow-x-auto kyp-scroll">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/70">
                      <th scope="col" className="py-2 pr-3 text-left text-overline text-muted-foreground">Attribute</th>
                      <th scope="col" className="py-2 px-3 text-left text-overline text-brand bg-brand-soft/20">{table.primaryDrug} ★</th>
                      {table.rows[0]?.comparisons.map((c) => (
                        <th key={c.drug} scope="col" className="py-2 px-3 text-left text-overline text-muted-foreground">{c.drug}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, ri) => (
                      <tr key={row.attribute} className={cn("border-b border-border/40", ri % 2 === 1 && "bg-muted/10")}>
                        <th scope="row" className="py-2 pr-3 text-left text-xs font-semibold text-foreground">{row.attribute}</th>
                        <td className="py-2 px-3 text-xs font-medium text-foreground bg-brand-soft/10">{row.primaryValue}</td>
                        {row.comparisons.map((c) => (
                          <td key={c.drug} className="py-2 px-3 text-xs text-muted-foreground">{c.value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Callout variant="tip">{table.takeaway}</Callout>
              </div>
            </div>
          ))}

          {/* Indian Comparison */}
          {tab === "indian" && hasIndian && (
            <div className="grid gap-3 sm:grid-cols-2">
              {drug.indianComparisonContexts!.map((ctx, i) => (
                <div key={i}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <GitCompare className="h-3.5 w-3.5 text-brand" />
                    <span className="text-xs font-semibold text-brand">{ctx.scenario}</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{ctx.recommendation}</p>
                  {ctx.alternative && (
                    <p className="mt-1 text-xs text-muted-foreground">↳ {ctx.alternative}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Related Drugs */}
          {tab === "related" && hasRelated && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {drug.relatedDrugs.map((rd, i) => {
                const href = rd.slug ? `/drugs/${rd.slug}` : undefined;
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Badge variant="outline" size="sm">{rd.drugClass}</Badge>
                        <p className="mt-1 text-sm font-medium text-foreground">{rd.name}</p>
                      </div>
                      {href && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      <span className="font-medium text-success">Choose when:</span> {rd.relationship}
                    </p>
                  </>
                );
                if (href) {
                  return (
                    <Link key={i} href={href} className="rounded-lg border border-border/40 p-3 transition-colors hover:border-brand/40 hover:bg-brand-soft/10">
                      {content}
                    </Link>
                  );
                }
                return (
                  <div key={i} className="rounded-lg border border-border/40 p-3">
                    {content}
                    <Badge variant="default" size="sm" className="mt-1">Page coming soon</Badge>
                  </div>
                );
              })}

              {/* When NOT to choose this drug */}
              {drug.whenNotToUse && drug.whenNotToUse.length > 0 && (
                <div className="sm:col-span-2 lg:col-span-3 mt-2">
                  <Callout variant="warning" title={`When NOT to choose ${drug.genericName}`}>
                    <ul className="space-y-1 mt-2">
                      {drug.whenNotToUse.map((w, i) => (
                        <li key={i} className="text-xs">
                          <strong className="text-foreground">{w.scenario}:</strong>{" "}
                          <span className="text-muted-foreground">{w.reason}</span>{" "}
                          <span className="text-success">→ {w.alternative}</span>
                        </li>
                      ))}
                    </ul>
                  </Callout>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
