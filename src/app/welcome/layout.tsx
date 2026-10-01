import type { Metadata } from "next";

/**
 * /welcome — route-level metadata.
 *
 * welcome/page.tsx is a client component (the multi-step signup /
 * login flow), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. Like the other auth surfaces
 * (/enter, /reset, /dashboard), /welcome is deliberately excluded
 * from the sitemap; the title/description exist for the tab,
 * bookmarks, and any organic landing — not for indexing. No child
 * routes exist under /welcome, so nothing else can inherit this
 * block.
 */
export const metadata: Metadata = {
  title: "Get Started — Sign Up or Log In · Know Your Pill",
  description:
    "Create a KYP account or log back in, choose the role that fits you — from patient to psychiatrist — and verify your email to enable progress tracking across devices.",
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
