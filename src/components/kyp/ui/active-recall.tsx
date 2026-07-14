"use client";

import * as React from "react";
import { Brain, ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * ActiveRecallSection — end-of-page retrieval practice.
 *
 * Shows 4-6 open-ended questions. Each question has a "Reveal answer"
 * button so the user can test themselves before seeing the model answer.
 *
 * This is the single most evidence-based learning technique — retrieval
 * practice produces stronger memory than re-reading.
 *
 * Client Component — uses useState per question for reveal toggle.
 */
interface ActiveRecallSectionProps {
  drug: Drug;
}

export function ActiveRecallSection({ drug }: ActiveRecallSectionProps) {
  const questions = drug.activeRecallQuestions;
  if (!questions || questions.length === 0) return null;

  return (
    <Section id="active-recall" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Active Recall"
          title="Can you answer these without looking?"
          description="Retrieval practice is the most evidence-based learning technique. Try to answer each question in your head before revealing the answer. If you can answer all of these, you have exam-level mastery."
          tone="neural"
          align="center"
        />

        <div className="mt-10 space-y-3">
          {questions.map((q, i) => (
            <RecallCard key={i} index={i} question={q.question} answer={q.answer} topic={q.topic} />
          ))}
        </div>

        <div className="mt-8">
          <Callout variant="tip" title="Why this matters">
            Re-reading notes creates an illusion of competence. Retrieval practice — forcing your
            brain to recall information from memory — produces 2-3× stronger retention than
            re-reading. If you struggled with any question, go back and review that section.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}

function RecallCard({ index, question, answer, topic }: { index: number; question: string; answer: string; topic: string }) {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="border-l-2 border-neural/30 pl-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neural-soft/60 text-neural font-mono text-xs font-semibold">
          {index + 1}
        </span>
        <span className="text-xs font-medium text-muted-foreground">{topic}</span>
      </div>

      <p className="text-sm font-medium text-foreground leading-relaxed">{question}</p>

      {/* Reveal button */}
      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-neural transition-colors hover:text-brand"
        >
          <Brain className="h-3 w-3" />
          Think, then reveal answer
          <ChevronDown className="h-3 w-3" />
        </button>
      ) : (
        <div className="mt-2 rounded-md border border-success/20 bg-success-soft/10 p-3">
          <p className="flex items-center gap-1 text-xs font-semibold text-success mb-1">
            <Check className="h-3 w-3" strokeWidth={3} />
            Model Answer
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">{answer}</p>
          <button
            type="button"
            onClick={() => setRevealed(false)}
            className="mt-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Hide answer
          </button>
        </div>
      )}
    </div>
  );
}
