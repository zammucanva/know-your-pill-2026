import type { Metadata } from "next";

/**
 * /study/analytics — route-level metadata (practice-history analytics).
 *
 * analytics/page.tsx is a client component (on-device practice
 * history), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. No child routes exist under
 * /study/analytics, so nothing else can inherit this block.
 */
export const metadata: Metadata = {
  title: "Practice Analytics · Know Your Pill",
  description:
    "Trends from your quiz and test history on this device — accuracy by topic and medication class, answer durations, and where the same mistakes return. Numbers appear only once there is enough history to be meaningful.",
  keywords: [
    "practice analytics",
    "quiz statistics",
    "test history",
    "accuracy by class",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Practice Analytics · Know Your Pill",
    description:
      "Accuracy by topic and class, durations, and returning mistakes — from your on-device practice history.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function PracticeAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
