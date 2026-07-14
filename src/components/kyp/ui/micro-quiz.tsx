"use client";

import * as React from "react";
import { Check, X, Lightbulb, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MicroQuiz as MicroQuizType } from "@/lib/kyp/data";

/**
 * MicroQuiz — inline multiple-choice quiz with reveal explanation.
 *
 * Placed after key learning sections to test understanding.
 * The user selects an answer, then sees if they're correct + an explanation.
 *
 * Client Component — uses useState for selected answer.
 */
interface MicroQuizProps {
  quiz: MicroQuizType;
}

export function MicroQuiz({ quiz }: MicroQuizProps) {
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);

  const handleSelect = (idx: number) => {
    if (selectedIdx !== null) return; // Don't allow re-answering
    setSelectedIdx(idx);
    setShowExplanation(true);
  };

  const isCorrect = selectedIdx === quiz.correctIndex;

  return (
    <div className="my-6 border-l-2 border-neural/30 pl-4">
      {/* Quiz header */}
      <div className="flex items-center gap-1.5 mb-2">
        <Lightbulb className="h-3.5 w-3.5 text-neural" />
        <span className="text-xs font-semibold uppercase tracking-wide text-neural">Check your understanding</span>
      </div>

      {/* Question */}
      <p className="text-sm font-medium text-foreground mb-3">{quiz.question}</p>

      {/* Options */}
      <div className="space-y-1.5">
        {quiz.options.map((option, i) => {
          const isSelected = selectedIdx === i;
          const isAnswerCorrect = i === quiz.correctIndex;
          const showResult = selectedIdx !== null;

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(i)}
              disabled={selectedIdx !== null}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                !showResult && "border border-border/60 hover:border-neural/40 hover:bg-neural-soft/10",
                showResult && isAnswerCorrect && "border border-success/40 bg-success-soft/20 text-foreground",
                showResult && isSelected && !isAnswerCorrect && "border border-emergency/40 bg-emergency-soft/20 text-foreground",
                showResult && !isSelected && !isAnswerCorrect && "border border-border/40 opacity-50",
              )}
            >
              <span className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-mono",
                !showResult && "border-border",
                showResult && isAnswerCorrect && "border-success bg-success text-white",
                showResult && isSelected && !isAnswerCorrect && "border-emergency bg-emergency text-white",
                showResult && !isSelected && !isAnswerCorrect && "border-border",
              )}>
                {showResult && isAnswerCorrect ? <Check className="h-3 w-3" strokeWidth={3} /> :
                 showResult && isSelected && !isAnswerCorrect ? <X className="h-3 w-3" strokeWidth={3} /> :
                 String.fromCharCode(65 + i)}
              </span>
              <span className={cn("flex-1", showResult && !isSelected && !isAnswerCorrect && "text-muted-foreground")}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation — revealed after answering */}
      {showExplanation && (
        <div className={cn(
          "mt-3 rounded-md p-3 text-sm leading-relaxed",
          isCorrect ? "bg-success-soft/15 text-foreground" : "bg-emergency-soft/15 text-foreground"
        )}>
          <p className="flex items-center gap-1.5 mb-1">
            {isCorrect ? (
              <><Check className="h-3.5 w-3.5 text-success" /> <span className="text-xs font-semibold text-success">Correct!</span></>
            ) : (
              <><X className="h-3.5 w-3.5 text-emergency" /> <span className="text-xs font-semibold text-emergency">Not quite.</span></>
            )}
          </p>
          <p className="text-muted-foreground">{quiz.explanation}</p>
        </div>
      )}
    </div>
  );
}
