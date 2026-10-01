import type { Metadata } from "next";

/**
 * /compare — route-level metadata.
 *
 * compare/page.tsx is a client component (selection + comparison
 * state), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx.
 *
 * The deeper /compare/classes page defines its own complete metadata
 * block (title, description, keywords, openGraph) in its page file,
 * so every field defined here is fully overridden there.
 */
export const metadata: Metadata = {
  title: "Medication Comparison · Know Your Pill",
  description:
    "Pick 2–3 psychiatric medications and see them side by side — mechanism, side-effect profile with frequency bands, interactions, monitoring, and clinical use. Every cell is verbatim from the medication pages; an educational comparison, not a prescribing algorithm.",
  keywords: [
    "medication comparison",
    "compare psychiatric medications",
    "antidepressant comparison",
    "antipsychotic comparison",
    "side effect comparison",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Medication Comparison · Know Your Pill",
    description:
      "Two or three psychiatric medications side by side — mechanism to clinical use, verbatim from the medication pages.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
