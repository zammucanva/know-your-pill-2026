import type { Metadata } from "next";

/**
 * /study/review — route-level metadata (spaced review sessions).
 *
 * review/page.tsx is a client component (the Retention Engine's
 * review session state), so it cannot export metadata itself. This
 * pass-through server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. No child routes exist under
 * /study/review, so nothing else can inherit this block.
 */
export const metadata: Metadata = {
  title: "Spaced Review · Know Your Pill",
  description:
    "Questions you've missed come back at growing intervals — 1, 2, 4, 7, 14, then 30 days. Get one right and its next appearance moves further out; miss it and it returns tomorrow. Everything stays on this device.",
  keywords: [
    "spaced repetition",
    "spaced review",
    "retention",
    "exam preparation",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Spaced Review · Know Your Pill",
    description:
      "Missed questions return at growing intervals until they stick — spaced review built into KYP.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function SpacedReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
