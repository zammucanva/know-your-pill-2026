"use client";

import * as React from "react";
import { Pill, Building2, Briefcase, GraduationCap, Stethoscope, Brain, ClipboardCheck, Calendar, AlertTriangle, FileText, IndianRupee, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * IndianClinicalModule — merged module combining:
 *   - Indian Practice (brands, doses, availability, cost, counselling)
 *   - Indian Hospital Encounter
 *   - Prescription Workflow
 *   - Educational Prescription
 *
 * Tabbed interface reduces 4 sections to 1.
 *
 * Client Component — uses useState for active tab.
 */
interface IndianClinicalModuleProps {
  drug: Drug;
}

const costConfig = {
  low: { icon: "🟢", label: "Low cost", color: "text-success" },
  moderate: { icon: "🟡", label: "Moderate cost", color: "text-warning" },
  high: { icon: "🔴", label: "High cost", color: "text-emergency" },
};

export function IndianClinicalModule({ drug }: IndianClinicalModuleProps) {
  const [tab, setTab] = React.useState<"practice" | "encounter" | "workflow" | "prescription">("practice");
  const ip = drug.indianPractice;
  const ec = drug.indianEncounterContext;
  const wf = drug.prescriptionWorkflow;
  const rx = drug.educationalPrescription;

  if (!ip && !ec && !wf && !rx) return null;

  const tabs = [
    { key: "practice" as const, label: "Practice & Brands", visible: Boolean(ip) },
    { key: "encounter" as const, label: "Hospital Encounter", visible: Boolean(ec) },
    { key: "workflow" as const, label: "Prescription Workflow", visible: Boolean(wf) },
    { key: "prescription" as const, label: "Sample Prescription", visible: Boolean(rx) },
  ].filter((t) => t.visible);

  return (
    <Section id="indian-clinical" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Indian Clinical Practice"
          title="Prescribing in India."
          description="Brands, availability, cost, hospital encounter, prescription workflow, and a sample Indian OPD prescription — all in one place."
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
          {/* Practice & Brands */}
          {tab === "practice" && ip && (
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              {/* Left: Identity */}
              <div className="space-y-4">
                {/* Brands — compact list, no cards */}
                <div>
                  <p className="text-overline text-muted-foreground mb-2">Common Indian Brands</p>
                  <div className="space-y-1">
                    {ip.brands.map((b) => (
                      <div key={b.name} className="flex items-baseline justify-between gap-2 text-sm">
                        <span className="font-medium text-foreground">{b.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {b.manufacturer && `${b.manufacturer} · `}
                          {b.strengths}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prescription status + cost — horizontal strip */}
                <div className="flex flex-wrap items-center gap-4 py-2">
                  <div className="flex items-center gap-1.5">
                    <Pill className="h-3 w-3 text-brand" />
                    <span className="text-xs text-muted-foreground">Rx:</span>
                    <span className="text-xs font-medium text-foreground">{ip.prescriptionStatus}</span>
                  </div>
                  <span className="h-3 w-px bg-border" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{costConfig[ip.costCategory].icon}</span>
                    <span className={cn("text-xs font-medium", costConfig[ip.costCategory].color)}>
                      {costConfig[ip.costCategory].label}
                    </span>
                  </div>
                  {drug.janAushadhi?.available && (
                    <>
                      <span className="h-3 w-px bg-border" />
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3 w-3 text-brand" />
                        <span className="text-xs font-medium text-brand">Jan Aushadhi ✓</span>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{ip.costNote}</p>

                {/* Typical doses — prose, not card */}
                <div>
                  <p className="text-overline text-muted-foreground mb-1">Typical Indian Doses</p>
                  <p className="text-sm text-foreground/90 leading-relaxed">{ip.typicalDoses}</p>
                </div>

                {/* Availability — compact inline */}
                <div>
                  <p className="text-overline text-muted-foreground mb-1.5">Availability</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className={cn("flex items-center gap-1", ip.availability.governmentHospitals ? "text-foreground" : "text-muted-foreground/50")}>
                      {ip.availability.governmentHospitals ? <CheckCircle2 className="h-3 w-3 text-success" /> : "✗"} Govt hospitals
                    </span>
                    <span className={cn("flex items-center gap-1", ip.availability.privatePharmacies ? "text-foreground" : "text-muted-foreground/50")}>
                      {ip.availability.privatePharmacies ? <CheckCircle2 className="h-3 w-3 text-success" /> : "✗"} Private pharmacies
                    </span>
                    <span className={cn("flex items-center gap-1", ip.availability.urban ? "text-foreground" : "text-muted-foreground/50")}>
                      {ip.availability.urban ? <CheckCircle2 className="h-3 w-3 text-success" /> : "✗"} Urban
                    </span>
                    <span className={cn("flex items-center gap-1", ip.availability.rural ? "text-foreground" : "text-muted-foreground/50")}>
                      {ip.availability.rural ? <CheckCircle2 className="h-3 w-3 text-success" /> : "✗"} Rural
                    </span>
                  </div>
                  {ip.availability.note && (
                    <p className="mt-1 text-xs text-muted-foreground">{ip.availability.note}</p>
                  )}
                </div>
              </div>

              {/* Right: Counselling + Scenarios */}
              <div className="space-y-4">
                <div>
                  <p className="text-overline text-muted-foreground mb-2">Patient Counselling</p>
                  <ul className="space-y-1">
                    {ip.patientCounselling.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80 leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-overline text-muted-foreground mb-2">Prescribing Scenarios</p>
                  <ul className="space-y-1">
                    {ip.prescribingScenarios.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80 leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-overline text-muted-foreground mb-1">Indian Monitoring</p>
                  <p className="text-sm text-foreground/90 leading-relaxed">{ip.monitoring}</p>
                </div>
              </div>
            </div>
          )}

          {/* Hospital Encounter */}
          {tab === "encounter" && ec && (
            <div className="grid gap-4 sm:grid-cols-2">
              {([
                { key: "governmentHospitals", label: "Government Hospitals", icon: Building2 },
                { key: "privateHospitals", label: "Private Hospitals", icon: Briefcase },
                { key: "medicalColleges", label: "Medical Colleges", icon: GraduationCap },
                { key: "primaryCare", label: "Primary Care", icon: Stethoscope },
                { key: "psychiatryOPD", label: "Psychiatry OPD", icon: Brain },
              ] as const).map(({ key, label, icon: Icon }) => (
                <div key={key}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="h-3.5 w-3.5 text-brand" />
                    <span className="text-xs font-semibold text-foreground">{label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ec[key]}</p>
                </div>
              ))}
            </div>
          )}

          {/* Prescription Workflow */}
          {tab === "workflow" && wf && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {([
                { key: "beforePrescribing", label: "Before Prescribing", icon: ClipboardCheck, tone: "text-brand" },
                { key: "duringTreatment", label: "During Treatment", icon: Stethoscope, tone: "text-neural" },
                { key: "followUp", label: "Follow-Up", icon: Calendar, tone: "text-warning" },
                { key: "whenToRefer", label: "When to Refer", icon: AlertTriangle, tone: "text-emergency" },
              ] as const).map(({ key, label, icon: Icon, tone }) => {
                const items = wf[key];
                if (!items?.length) return null;
                return (
                  <div key={key}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Icon className={cn("h-3.5 w-3.5", tone)} />
                      <span className={cn("text-xs font-semibold", tone)}>{label}</span>
                    </div>
                    <ol className="space-y-1">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80 leading-relaxed">
                          <span className={cn("mt-0.5 font-mono text-[0.6rem] font-bold shrink-0", tone)}>{i + 1}.</span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          )}

          {/* Sample Prescription */}
          {tab === "prescription" && rx && (
            <div className="mx-auto max-w-xl">
              <div className="border-l-2 border-brand/30 pl-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <FileText className="h-4 w-4 text-brand" />
                  <span className="text-sm font-semibold text-foreground">Rx — {rx.scenario}</span>
                </div>
                <div className="space-y-0.5">
                  {rx.lines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        line === "" ? "h-2"
                        : line.startsWith("Then") || line.startsWith("Advice")
                          ? "mt-2 text-sm font-medium text-muted-foreground"
                          : "font-mono text-sm text-foreground"
                      }
                    >
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
                <div className="mt-4 border-t border-border/40 pt-3">
                  <p className="text-xs font-semibold text-brand mb-1">Follow-up</p>
                  <ul className="space-y-0.5">
                    {rx.followUp.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80 leading-relaxed">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <Callout variant="warning">{rx.disclaimer}</Callout>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
