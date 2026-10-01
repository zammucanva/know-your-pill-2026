import type { Metadata } from "next";

/**
 * /quiz — route-level metadata.
 *
 * quiz/page.tsx is a client component (the practice engine needs
 * local state), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx.
 *
 * Scope note: deliberately ONLY `title` + `description` here. Metadata
 * resolves per-field from the deepest segment, and the deeper
 * quiz/custom/layout.tsx defines just these two keys — anything more
 * defined here (openGraph, keywords) would leak onto /quiz/custom,
 * changing that page's rendered head. Those fields keep falling back
 * to the root layout for both routes.
 */
export const metadata: Metadata = {
  title: "Practice MCQs — Test Your Understanding · Know Your Pill",
  description:
    "Every multiple-choice question in KYP in one practice interface — medication-course micro quizzes, disease questions, and the Stahl's Prescriber-Guide clinical MCQ bank. Each answer comes with an explanation; nothing is invented.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
