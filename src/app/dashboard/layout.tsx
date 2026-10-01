import type { Metadata } from "next";

/**
 * /dashboard — route-level metadata.
 *
 * dashboard/page.tsx is a client component (auth-gated personal
 * data), so it cannot export metadata itself. This pass-through
 * server layout carries it — the same pattern as
 * src/app/quiz/custom/layout.tsx. /dashboard is deliberately excluded
 * from the sitemap (auth surface, not indexable content); the
 * title/description exist for the tab and bookmarks of a logged-in
 * user. No child routes exist under /dashboard, so nothing else can
 * inherit this block.
 */
export const metadata: Metadata = {
  title: "Your Dashboard · Know Your Pill",
  description:
    "Your personal KYP home — reading progress across the medication library, saved bookmarks, and search history in one place, with quick links back into whatever you were learning.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
