"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight, Bookmark, Clock, Trash2, BookOpen, Activity, HeartPulse,
  KeyRound, Loader2, ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * /dashboard — personal dashboard showing the user's reading progress,
 * bookmarks, and search history.
 *
 * Requires authentication. If not logged in, shows a prompt to log in.
 */

interface ProgressEntry {
  id: string;
  type: string;
  slug: string;
  title: string;
  lastVisitedAt: string;
  visitCount: number;
}

interface BookmarkEntry {
  id: string;
  type: string;
  slug: string;
  title: string;
  createdAt: string;
}

const typeIcon: Record<string, typeof BookOpen> = {
  drug: BookOpen,
  substance: Activity,
  disease: HeartPulse,
};

const typeHref = (type: string, slug: string) => {
  if (type === "drug") return `/drugs/${slug}`;
  if (type === "substance") return `/substances/${slug}`;
  if (type === "disease") return `/diseases/${slug}`;
  return "/";
};

const typeLabel: Record<string, string> = {
  drug: "Medication",
  substance: "Substance",
  disease: "Disease",
};

function timeAgo(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return date.toLocaleDateString();
}

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<{ name: string; email: string; learnerType: string } | null>(null);
  const [progress, setProgress] = React.useState<ProgressEntry[]>([]);
  const [bookmarks, setBookmarks] = React.useState<BookmarkEntry[]>([]);

  React.useEffect(() => {
    async function load() {
      try {
        const sessionRes = await fetch("/api/auth/session");
        // Static deployments (GitHub Pages) have no API routes — the
        // session endpoint 404s with an HTML page that would fail
        // .json() parsing and fall through to a fake empty dashboard.
        // Treat any non-OK response exactly like "not logged in":
        // go to /welcome, which offers the login/signup path.
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
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  const removeBookmark = async (type: string, slug: string) => {
    await fetch(`/api/bookmarks?type=${type}&slug=${encodeURIComponent(slug)}`, {
      method: "DELETE",
    });
    setBookmarks((prev) => prev.filter((b) => b.slug !== slug || b.type !== type));
  };

  const clearProgress = async () => {
    await fetch("/api/progress", { method: "DELETE" });
    setProgress([]);
  };

  // ── Account security: change password ──
  const [showSecurity, setShowSecurity] = React.useState(false);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [securityError, setSecurityError] = React.useState("");
  const [securityMessage, setSecurityMessage] = React.useState("");
  const [securityBusy, setSecurityBusy] = React.useState(false);

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (securityBusy) return;
    setSecurityError("");
    setSecurityMessage("");
    if (newPassword !== confirmPassword) {
      setSecurityError("New passwords do not match");
      return;
    }
    setSecurityBusy(true);
    try {
      const res = await fetch("/api/auth/password/change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };
      if (!res.ok) {
        setSecurityError(data.error || "Failed to change password. Please try again.");
        return;
      }
      setSecurityMessage(
        data.message || "Password updated. Other devices have been logged out."
      );
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setSecurityError("Network error — please try again.");
    } finally {
      setSecurityBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Container>
            <p className="text-muted-foreground">Loading dashboard…</p>
          </Container>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        <Section>
          <Container>
            {/* Header */}
            <div className="mb-12">
              <p className="text-overline text-brand mb-3">Your Dashboard</p>
              <h1
                className="font-serif font-semibold tracking-tight text-foreground"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Welcome back, {user?.name?.split(" ")[0] || "there"}.
              </h1>
              <p className="mt-3 text-body text-muted-foreground max-w-xl">
                Track what you&apos;ve read, what you&apos;ve saved, and jump back into your learning.
              </p>
            </div>

            {/* Stats row */}
            <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-2xl font-serif font-bold text-foreground">{progress.length}</p>
                <p className="text-xs text-muted-foreground mt-1">Pages visited</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-2xl font-serif font-bold text-foreground">{bookmarks.length}</p>
                <p className="text-xs text-muted-foreground mt-1">Bookmarks</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-2xl font-serif font-bold text-foreground">
                  {progress.filter((p) => p.type === "drug").length}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Medications read</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-2xl font-serif font-bold text-foreground">
                  {progress.filter((p) => p.type === "substance").length}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Substances read</p>
              </div>
            </div>

            {/* Two-column layout: Bookmarks + Recent Progress */}
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Bookmarks */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-brand" />
                    Bookmarks
                  </h2>
                  <span className="text-xs text-muted-foreground">{bookmarks.length} saved</span>
                </div>

                {bookmarks.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-border/60 p-8 text-center">
                    <Bookmark className="mx-auto h-6 w-6 text-muted-foreground/30 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No bookmarks yet. Click the bookmark icon on any page to save it here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {bookmarks.map((b) => {
                      const Icon = typeIcon[b.type] || BookOpen;
                      return (
                        <div
                          key={b.id}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent/40"
                        >
                          <Link
                            href={typeHref(b.type, b.slug)}
                            className="flex flex-1 items-center gap-3 min-w-0"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-brand">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">{b.title}</p>
                              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                                {typeLabel[b.type]} · {timeAgo(b.createdAt)}
                              </p>
                            </div>
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeBookmark(b.type, b.slug)}
                            aria-label="Remove bookmark"
                            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground/40 opacity-0 transition-opacity hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Recent Progress */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand" />
                    Recently Visited
                  </h2>
                  {progress.length > 0 && (
                    <button
                      type="button"
                      onClick={clearProgress}
                      className="flex items-center gap-1 text-xs text-muted-foreground/50 hover:text-destructive"
                    >
                      <Trash2 className="h-2.5 w-2.5" />
                      Clear
                    </button>
                  )}
                </div>

                {progress.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-border/60 p-8 text-center">
                    <Clock className="mx-auto h-6 w-6 text-muted-foreground/30 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No reading history yet. Visit a medication or substance page to start tracking.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {progress.map((p) => {
                      const Icon = typeIcon[p.type] || BookOpen;
                      return (
                        <Link
                          key={p.id}
                          href={typeHref(p.type, p.slug)}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent/40"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-muted-foreground">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground">{p.title}</p>
                            <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                              {typeLabel[p.type]} · {timeAgo(p.lastVisitedAt)}
                              {p.visitCount > 1 && ` · ${p.visitCount} visits`}
                            </p>
                          </div>
                          <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Account security */}
            <div className="mt-16 border-t border-border/30 pt-8">
              <button
                type="button"
                onClick={() => {
                  setShowSecurity((v) => !v);
                  setSecurityError("");
                  setSecurityMessage("");
                }}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={showSecurity}
              >
                <h2 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  Account security
                </h2>
                <span className="text-xs text-muted-foreground">
                  {showSecurity ? "Hide" : "Change password"}
                </span>
              </button>
              {showSecurity && (
                <form onSubmit={changePassword} className="mt-4 max-w-md space-y-4">
                  <div>
                    <Label htmlFor="current-password" className="text-xs">
                      Current password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="mt-1 h-11 rounded-xl"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="new-password" className="text-xs">
                        New password
                      </Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        className="mt-1 h-11 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-new-password" className="text-xs">
                        Confirm new password
                      </Label>
                      <Input
                        id="confirm-new-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        className="mt-1 h-11 rounded-xl"
                      />
                    </div>
                  </div>
                  {securityError && (
                    <p
                      className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency"
                      role="alert"
                    >
                      {securityError}
                    </p>
                  )}
                  {securityMessage && (
                    <p
                      className="rounded-lg border border-brand/30 bg-brand-soft/20 px-3 py-2 text-xs text-brand"
                      role="status"
                    >
                      {securityMessage}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={securityBusy || newPassword.length < 6 || confirmPassword.length < 6 || currentPassword.length === 0}
                    className="rounded-xl"
                  >
                    {securityBusy ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <KeyRound className="mr-1 h-4 w-4" /> Update password
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Updating your password signs out all other devices.
                  </p>
                </form>
              )}
            </div>

            {/* Quick links */}
            <div className="mt-16 border-t border-border/30 pt-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Continue Learning
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/#library">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Browse Medications
                  </Button>
                </Link>
                <Link href="/#substances">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Browse Substances
                  </Button>
                </Link>
                <Link href="/#neuroarcade">
                  <Button variant="outline" size="sm" className="rounded-full">
                    NeuroArcade
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
