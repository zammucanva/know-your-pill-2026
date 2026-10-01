import type { Metadata } from "next";

/**
 * /study/mistakes — route-level metadata (the Mistake Book).
 *
 * mistakes/page.tsx is a client component (on-device mistake
 * records), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. No child routes exist under
 * /study/mistakes, so nothing else can inherit this block.
 */
export const metadata: Metadata = {
  title: "Mistake Book — Questions to Revisit · Know Your Pill",
  description:
    "Every question you answer incorrectly in practice and custom tests, kept on this device. Answer one correctly later and it leaves the list on its own — or clear it yourself once you're confident.",
  keywords: [
    "mistake book",
    "review mistakes",
    "MCQ practice review",
    "active recall",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Mistake Book · Know Your Pill",
    description:
      "Questions you got wrong, kept on this device until you get them right.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function MistakeBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
