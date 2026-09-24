import type { Metadata } from "next";

/**
 * /interactions — route-level metadata.
 *
 * interactions/page.tsx is a client component (the checker's
 * selection state), so it cannot export metadata itself. This
 * pass-through server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. No child routes exist under
 * /interactions, so nothing else can inherit this block.
 */
export const metadata: Metadata = {
  title: "Interaction Checker · Know Your Pill",
  description:
    "Pick 2–6 medications and see every interaction their own reviewed pages list between them — severity, mechanism, and what to do, copied verbatim. An educational reference, not a complete interaction database; confirm with your doctor or pharmacist.",
  keywords: [
    "drug interactions",
    "medication interactions",
    "interaction checker",
    "psychiatric medication safety",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Interaction Checker · Know Your Pill",
    description:
      "Every interaction the reviewed medication pages list between your selected drugs — verbatim, never re-graded.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function InteractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
