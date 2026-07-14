"use client";

import * as React from "react";
import { Award, BookOpen, Lightbulb, GraduationCap } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { DrugExamFrequency, DrugPYQ } from "@/components/kyp/sections/drug/drug-exam-frequency-pyq";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * LearningModule — merged module combining:
 *   - Clinical Pearls (tab 1)
 *   - Exam Lens + Exam Frequency + PYQ (tab 2)
 *   - Memory Tricks (tab 3)
 *   - Indian Ward Pearls (tab 4)
 *
 * Replaces 4 separate sections with one tabbed module.
 * Tabbed interface dramatically reduces visual clutter while preserving
 * 100% of educational content.
 *
 * Client Component — uses useState for active tab.
 */
interface LearningModuleProps {
  drug: Drug;
}

export function LearningModule({ drug }: LearningModuleProps) {
  const [tab, setTab] = React.useState<"pearls" | "exam" | "tricks" | "ward">("pearls");

  const hasPearls = drug.clinicalPearls?.length > 0;
  const hasExam = Boolean(drug.examLens || drug.examPearls?.length);
  const hasTricks = drug.memoryTricks?.length > 0;
  const hasWard = Boolean(drug.wardPearls);

  const tabs = [
    { key: "pearls" as const, label: "Clinical Pearls", icon: Award, visible: hasPearls },
    { key: "exam" as const, label: "Exam Lens", icon: BookOpen, visible: hasExam },
    { key: "tricks" as const, label: "Memory Tricks", icon: Lightbulb, visible: hasTricks },
    { key: "ward" as const, label: "Ward Pearls", icon: GraduationCap, visible: hasWard },
  ].filter((t) => t.visible);

  if (tabs.length === 0) return null;

  return (
    <Section id="learning-module" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Learning & Exam"
          title="What you need to know."
          description="Clinical pearls, exam-specific content, mnemonics, and Indian ward pearls — all in one place. Switch between tabs to focus on what you need."
          tone="neural"
        />

        {/* Exam frequency badge — shown above tabs */}
        <div className="mt-6 mb-4">
          <DrugExamFrequency drug={drug} />
        </div>

        {/* Tabs */}
        <div className="flex gap-3 overflow-x-auto border-b border-border/60 kyp-scroll">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                "shrink-0 flex items-center gap-1.5 pb-2 text-sm font-medium transition-colors border-b-2 -mb-px",
                tab === t.key
                  ? "border-neural text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {/* Clinical Pearls */}
          {tab === "pearls" && hasPearls && (
            <div className="grid gap-3 sm:grid-cols-2">
              {drug.clinicalPearls.map((pearl, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft/60 text-brand font-mono text-xs font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">{pearl}</p>
                </div>
              ))}
            </div>
          )}

          {/* Exam Lens */}
          {tab === "exam" && hasExam && (
            <div>
              {/* If structured Exam Lens exists, render its content inline */}
              {drug.examLens ? (
                <ExamLensInline drug={drug} />
              ) : drug.examPearls ? (
                <ol className="space-y-2">
                  {drug.examPearls.map((pearl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neural-soft/60 text-neural font-mono text-xs font-semibold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-foreground/90 leading-relaxed">{pearl}</p>
                    </li>
                  ))}
                </ol>
              ) : null}

              {/* PYQ metadata */}
              <div className="mt-6">
                <DrugPYQ drug={drug} />
              </div>
            </div>
          )}

          {/* Memory Tricks */}
          {tab === "tricks" && hasTricks && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {drug.memoryTricks.map((trick, i) => (
                <div key={i}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Lightbulb className="h-3.5 w-3.5 text-neural" />
                    <h4 className="text-sm font-semibold text-foreground">{trick.title}</h4>
                  </div>
                  <div className="rounded-md bg-neural-soft/20 p-2.5">
                    <p className="font-serif text-sm font-semibold text-brand-ink leading-snug">
                      {trick.trick}
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{trick.remembers}</p>
                </div>
              ))}
            </div>
          )}

          {/* Ward Pearls */}
          {tab === "ward" && hasWard && drug.wardPearls && (
            <div className="grid gap-6 sm:grid-cols-2">
              {([
                { key: "professorMayAsk", label: "Professor May Ask", tone: "text-neural" },
                { key: "residentExpects", label: "Resident Expects", tone: "text-brand" },
                { key: "consultantsDo", label: "Consultants Do", tone: "text-success" },
                { key: "internsMiss", label: "Interns Miss", tone: "text-emergency" },
              ] as const).map(({ key, label, tone }) => {
                const items = drug.wardPearls![key];
                if (!items?.length) return null;
                return (
                  <div key={key}>
                    <h4 className={cn("text-sm font-semibold mb-2", tone)}>{label}</h4>
                    <ul className="space-y-1">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80 leading-relaxed">
                          <span className={cn("mt-1 h-1 w-1 shrink-0 rounded-full", tone.replace("text-", "bg-"))} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

/** Inline renderer for structured ExamLens content (no separate cards) */
function ExamLensInline({ drug }: { drug: Drug }) {
  const lens = drug.examLens!;
  const examConfig = [
    { key: "mbbs" as const, label: "MBBS", tone: "text-brand" },
    { key: "neetPg" as const, label: "NEET PG", tone: "text-neural" },
    { key: "inicet" as const, label: "INICET", tone: "text-warning" },
    { key: "fmge" as const, label: "FMGE", tone: "text-success" },
    { key: "psychiatryResidency" as const, label: "Psychiatry Residency", tone: "text-emergency" },
  ];

  return (
    <div className="space-y-6">
      {examConfig.map(({ key, label, tone }) => {
        const section = lens[key];
        if (!section) return null;
        const subSections = Object.entries(section).map(([subKey, items]) => ({
          title: formatSubKey(subKey),
          items: items as string[],
        }));
        const totalItems = subSections.reduce((sum, s) => sum + s.items.length, 0);
        if (totalItems === 0) return null;

        return (
          <div key={key}>
            <h4 className={cn("text-sm font-semibold mb-3", tone)}>{label}</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pl-4 border-l border-border/40">
              {subSections.map((sub) => (
                <div key={sub.title}>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">{sub.title}</p>
                  <ul className="space-y-1">
                    {sub.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1 text-xs text-foreground/80 leading-relaxed">
                        <span className={cn("mt-1 h-1 w-1 shrink-0 rounded-full", tone.replace("text-", "bg-"))} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function formatSubKey(subKey: string): string {
  const labels: Record<string, string> = {
    viva: "Viva", practical: "Practical", longAnswer: "Long Answer",
    highYield: "High-Yield", pyqConcepts: "PYQ Concepts",
    clinicalReasoning: "Clinical Reasoning", frequentlyTested: "Frequently Tested",
    advancedPearls: "Advanced Pearls",
  };
  return labels[subKey] ?? subKey;
}
