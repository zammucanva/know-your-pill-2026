"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { DashboardShell } from "@/components/kyp/dashboard/shell";
import { StatsRow, WelcomeHero } from "@/components/kyp/dashboard/modules-hero";
import {
  ContinueLearningCard, DailyGoalCard, LearningProgress,
} from "@/components/kyp/dashboard/modules-learning";
import { RecentlyVisited, SavedKnowledge } from "@/components/kyp/dashboard/modules-library";
import {
  EmergencyCard, ExploreNext, QuickActions,
} from "@/components/kyp/dashboard/modules-discovery";
import { useDashboardSettings } from "@/lib/kyp/dashboard/settings-store";
import { IS_STATIC_EXPORT } from "@/lib/kyp/static-export";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { stats as platformStats } from "@/lib/kyp/data/platform";
import type { BookmarkEntry, ProgressEntry } from "@/lib/kyp/dashboard/dashboard-data";

/**
 * /dashboard — the premium personal knowledge workbench.
 *
 * Auth-gated personal surface (same session contract as before):
 * unauthenticated visitors are sent to /welcome; the static export
 * redirects to Study Mode (audit B1 — no server, no session there).
 *
 * Data sources, all real:
 *   /api/auth/session — who is signed in
 *   /api/progress     — reading history (drug/substance/disease pages)
 *   /api/bookmarks    — saved knowledge
 *   kyp:progress:v1   — local course/MCQ learning state
 *   platform stats     — the generated library counts
 * The module visibility toggles (Recently Visited, Explore Next) and
 * the daily goal card come from the settings store and take effect
 * immediately, with no page reload.
 */

interface SessionUser {
  name: string;
  email: string;
  learnerType: string;
}

function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Loading your dashboard…</p>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<SessionUser | null>(null);
  const [progress, setProgress] = React.useState<ProgressEntry[]>([]);
  const [bookmarks, setBookmarks] = React.useState<BookmarkEntry[]>([]);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const showRecentlyVisited = useDashboardSettings((s) => s.showRecentlyVisited);
  const showRecommendations = useDashboardSettings((s) => s.showRecommendations);
  const studyReminders = useDashboardSettings((s) => s.studyReminders);

  const localProgress = useLocalProgress();

  React.useEffect(() => {
    // Static export: the dashboard is a session surface and there is
    // no server — send the visitor to Study Mode (whose progress
    // persists locally) instead of bouncing through /welcome's
    // now-abstract login path [audit B1].
    if (IS_STATIC_EXPORT) {
      router.replace("/study");
      return;
    }
    async function load() {
      try {
        const sessionRes = await fetch("/api/auth/session");
        // Static deployments have no API routes — treat any non-OK
        // response exactly like "not logged in" [audit B2].
        if (!sessionRes.ok) {
          router.push("/welcome");
          return;
        }
        const sessionData = await sessionRes.json();
        if (!sessionData.user) {
          router.push("/welcome");
          return;
        }
        setUser(sessionData.user);

        const [progressRes, bookmarksRes] = await Promise.all([
          fetch("/api/progress?limit=20"),
          fetch("/api/bookmarks"),
        ]);
        const [progressData, bookmarksData] = await Promise.all([
          progressRes.json(),
          bookmarksRes.json(),
        ]);
        setProgress(progressData.progress || []);
        setBookmarks(bookmarksData.bookmarks || []);
      } catch {
        // Network failure after login: render the shell with the
        // signed-in user and empty module states, never fake data.
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  // The settings drawer can clear the reading history; listen for it.
  React.useEffect(() => {
    const onCleared = () => setProgress([]);
    window.addEventListener("kyp:progress-cleared", onCleared);
    return () => window.removeEventListener("kyp:progress-cleared", onCleared);
  }, []);

  const removeBookmark = async (type: string, slug: string) => {
    setBookmarks((prev) => prev.filter((b) => !(b.slug === slug && b.type === type)));
    await fetch(`/api/bookmarks?type=${type}&slug=${encodeURIComponent(slug)}`, {
      method: "DELETE",
    }).catch(() => {
      // Optimistic removal stands; the next visit re-syncs.
    });
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  // Real counts only. The medication library total comes from the
  // generated platform stats (single source of truth).
  const medicationTotal = Number(platformStats[0]?.value ?? 0) || 145;
  const medicationsStudied = progress.filter((p) => p.type === "drug").length;
  const courses = localProgress ? Object.values(localProgress.courses) : [];
  const mcqsAnswered = courses.reduce((sum, c) => sum + (c.quiz?.attempts ?? 0), 0);

  return (
    <DashboardShell user={user ? { name: user.name, email: user.email } : null}>
      <WelcomeHero
        name={user?.name ?? null}
        progress={progress}
        learnerType={user?.learnerType}
      />

      <StatsRow
        pagesExplored={progress.length}
        medicationsStudied={medicationsStudied}
        medicationTotal={medicationTotal}
        mcqsAnswered={mcqsAnswered}
        bookmarks={bookmarks.length}
      />

      <ContinueLearningCard progress={progress} />

      {mounted && studyReminders && <DailyGoalCard />}

      {/*
        Module order is responsive: on desktop (lg+) Learning Progress
        and Quick Actions share one row; on narrow screens the reading
        modules surface earlier in the flow.
      */}
      <div className="grid grid-cols-1 gap-[var(--dash-gap,1.25rem)] lg:grid-cols-2 lg:items-start">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <LearningProgress progress={progress} />
        </div>
        <div className="order-4 lg:col-start-2 lg:row-start-1">
          <QuickActions />
        </div>
        {(mounted ? showRecommendations : true) && (
          <div className="order-5 lg:col-span-2">
            <ExploreNext />
          </div>
        )}
        {(mounted ? showRecentlyVisited : true) && (
          <div className="order-2 lg:col-span-2">
            <RecentlyVisited progress={progress} onCleared={() => setProgress([])} />
          </div>
        )}
        <div className="order-3 lg:col-span-2">
          <SavedKnowledge bookmarks={bookmarks} onRemoved={removeBookmark} />
        </div>
        <div className="order-6 lg:col-span-2">
          <EmergencyCard />
        </div>
      </div>
    </DashboardShell>
  );
}
