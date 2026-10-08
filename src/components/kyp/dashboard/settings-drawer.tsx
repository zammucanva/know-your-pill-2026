"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowUpRight, KeyRound, Loader2, LogOut, RotateCcw, ShieldCheck, UserRound, X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  useDashboardSettings, type DailyGoal, type DashboardSettings,
} from "@/lib/kyp/dashboard/settings-store";

/**
 * SettingsDrawer — every dashboard preference, in one place.
 *
 * Desktop: right slide-over panel (~400px). Mobile: full-width bottom
 * sheet. Escape and outside click close it, body scroll locks while
 * open, focus moves in on open and returns to the opener on close.
 *
 * The theme row reads and writes next-themes (the site-wide single
 * source of truth). Every other control reads and writes the ONE
 * settings store (kyp:settings:v1) and takes effect immediately.
 * There are no decorative controls in this drawer.
 */

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title} className="border-t border-border/50 px-5 py-4 first:border-t-0">
      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

function RadioRow({
  checked, onChange, label, subtext,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  subtext?: string;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-lg px-2.5 py-2 transition-colors",
        checked ? "bg-brand-soft/40" : "hover:bg-accent/50"
      )}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
          checked ? "border-brand" : "border-muted-foreground/40"
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-brand" />}
      </span>
      <span className="min-w-0">
        <span className={cn("block text-sm", checked ? "font-medium text-foreground" : "text-foreground/90")}>
          {label}
        </span>
        {subtext && <span className="mt-0.5 block text-xs text-muted-foreground">{subtext}</span>}
      </span>
    </label>
  );
}

function ToggleRow({
  checked, onChange, label, subtext, disabled,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
  subtext?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-accent/40">
      <span className="min-w-0">
        <span className="block text-sm text-foreground">{label}</span>
        {subtext && <span className="mt-0.5 block text-xs text-muted-foreground">{subtext}</span>}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 disabled:opacity-50",
          checked ? "border-brand bg-brand/80" : "border-border bg-muted"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute top-0.5 h-4.5 w-4.5 rounded-full bg-background shadow transition-all",
            checked ? "left-[1.4rem]" : "left-0.5"
          )}
          style={{ height: "1.125rem", width: "1.125rem" }}
        />
      </button>
    </div>
  );
}

function TextSizeControl({ value, onChange }: { value: DashboardSettings["fontScale"]; onChange: (v: DashboardSettings["fontScale"]) => void }) {
  const options: { key: DashboardSettings["fontScale"]; label: string; cls: string }[] = [
    { key: "sm", label: "A", cls: "text-xs" },
    { key: "md", label: "A", cls: "text-sm" },
    { key: "lg", label: "A", cls: "text-base" },
  ];
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2">
      <span className="text-sm text-foreground">Text size</span>
      <div role="radiogroup" aria-label="Text size" className="flex overflow-hidden rounded-lg border border-border">
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            role="radio"
            aria-checked={value === opt.key}
            aria-label={opt.key === "sm" ? "Smaller text" : opt.key === "lg" ? "Larger text" : "Default text size"}
            onClick={() => onChange(opt.key)}
            className={cn(
              "w-10 py-1.5 font-semibold transition-colors",
              opt.cls,
              value === opt.key ? "bg-brand-soft/60 text-brand-ink" : "text-muted-foreground hover:bg-accent"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DailyGoalControl({ value, onChange }: { value: DailyGoal; onChange: (v: DailyGoal) => void }) {
  const options: DailyGoal[] = [10, 20, 30, 60];
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2">
      <span className="text-sm text-foreground">Daily goal</span>
      <div role="radiogroup" aria-label="Daily goal" className="flex overflow-hidden rounded-lg border border-border">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={value === opt}
            onClick={() => onChange(opt)}
            className={cn(
              "px-2.5 py-1.5 text-xs font-medium transition-colors",
              value === opt ? "bg-brand-soft/60 text-brand-ink" : "text-muted-foreground hover:bg-accent"
            )}
          >
            {opt} min
          </button>
        ))}
      </div>
    </div>
  );
}

export interface SettingsDrawerUser {
  name: string;
  email: string;
}

export function SettingsDrawer({
  open, onClose, user, onHistoryCleared,
}: {
  open: boolean;
  onClose: () => void;
  user: SettingsDrawerUser | null;
  onHistoryCleared: () => void;
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const settings = useDashboardSettings();
  const update = useDashboardSettings((s) => s.update);
  const reset = useDashboardSettings((s) => s.reset);

  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const openerRef = React.useRef<Element | null>(null);

  // Clear-history (destructive) needs a confirm step.
  const [confirmClear, setConfirmClear] = React.useState(false);
  const [clearing, setClearing] = React.useState(false);

  // Account security: the preserved password-change flow.
  const [showSecurity, setShowSecurity] = React.useState(false);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [securityError, setSecurityError] = React.useState("");
  const [securityMessage, setSecurityMessage] = React.useState("");
  const [securityBusy, setSecurityBusy] = React.useState(false);

  const [signingOut, setSigningOut] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement;
    setConfirmClear(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    }, 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  const clearHistory = async () => {
    if (clearing) return;
    setClearing(true);
    try {
      await fetch("/api/progress", { method: "DELETE" });
      onHistoryCleared();
      setConfirmClear(false);
    } catch {
      // Keep the confirm step if the call failed.
    } finally {
      setClearing(false);
    }
  };

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
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!res.ok) {
        setSecurityError(data.error || "Failed to change password. Please try again.");
        return;
      }
      setSecurityMessage(data.message || "Password updated. Other devices have been logged out.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setSecurityError("Network error: please try again.");
    } finally {
      setSecurityBusy(false);
    }
  };

  const signOut = async () => {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await fetch("/api/auth/session", { method: "DELETE" });
    } catch {
      // Signing out locally even if the network call failed.
    }
    router.push("/welcome");
  };

  if (!open) return null;

  const currentTheme = mounted ? theme ?? "system" : "system";

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Dashboard settings">
      <button
        type="button"
        aria-label="Close settings"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-foreground/40 backdrop-blur-[2px]"
      />
      <div
        ref={panelRef}
        className="dash-drawer absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col rounded-t-2xl border border-border bg-card shadow-2xl sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:max-h-none sm:w-[400px] sm:rounded-none sm:border-l sm:border-t-0"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border/60 px-5 py-4">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">Settings</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Saved to this device</p>
          </div>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Close settings"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <SettingsSection title="Appearance">
            <div>
              <p className="px-2.5 pb-1 pt-1 text-sm text-foreground">Theme</p>
              <RadioRow checked={currentTheme === "light"} onChange={() => setTheme("light")} label="Light" />
              <RadioRow checked={currentTheme === "dark"} onChange={() => setTheme("dark")} label="Dark" />
              <RadioRow checked={currentTheme === "system"} onChange={() => setTheme("system")} label="System" subtext="Follows your device preference" />
            </div>
            <div className="pt-2">
              <p className="px-2.5 pb-1 text-sm text-foreground">Accent</p>
              <RadioRow checked={settings.accent === "default"} onChange={() => update({ accent: "default" })} label="Default" />
              <RadioRow checked={settings.accent === "teal"} onChange={() => update({ accent: "teal" })} label="KYP Teal" />
              <RadioRow checked={settings.accent === "neutral"} onChange={() => update({ accent: "neutral" })} label="Neutral" />
            </div>
            <div className="pt-2">
              <p className="px-2.5 pb-1 text-sm text-foreground">Density</p>
              <RadioRow checked={settings.density === "comfortable"} onChange={() => update({ density: "comfortable" })} label="Comfortable" />
              <RadioRow checked={settings.density === "compact"} onChange={() => update({ density: "compact" })} label="Compact" subtext="Tighter grid and card spacing" />
            </div>
          </SettingsSection>

          <SettingsSection title="Accessibility">
            <TextSizeControl value={settings.fontScale} onChange={(fontScale) => update({ fontScale })} />
            <ToggleRow checked={settings.reducedMotion} onChange={(reducedMotion) => update({ reducedMotion })} label="Reduce motion" subtext="Minimize nonessential animation" />
            <ToggleRow checked={settings.highContrast} onChange={(highContrast) => update({ highContrast })} label="High contrast" subtext="Stronger borders and text" />
            <ToggleRow checked={settings.focusIndicators} onChange={(focusIndicators) => update({ focusIndicators })} label="Enhanced focus indicators" subtext="Thicker keyboard focus rings" />
          </SettingsSection>

          <SettingsSection title="Dashboard">
            <div>
              <p className="px-2.5 pb-1 text-sm text-foreground">Default landing page</p>
              <p className="px-2.5 pb-1 text-xs text-muted-foreground">Where the KYP logo in your dashboard takes you</p>
              <RadioRow checked={settings.defaultLandingPage === "dashboard"} onChange={() => update({ defaultLandingPage: "dashboard" })} label="Dashboard" />
              <RadioRow checked={settings.defaultLandingPage === "learn"} onChange={() => update({ defaultLandingPage: "learn" })} label="Learn" />
              <RadioRow checked={settings.defaultLandingPage === "medications"} onChange={() => update({ defaultLandingPage: "medications" })} label="Medications" />
              <RadioRow checked={settings.defaultLandingPage === "psychiatry"} onChange={() => update({ defaultLandingPage: "psychiatry" })} label="Psychiatry" />
            </div>
            <div className="pt-2">
              <p className="px-2.5 pb-1 text-sm text-foreground">Sidebar</p>
              <RadioRow checked={settings.sidebarState === "expanded"} onChange={() => update({ sidebarState: "expanded" })} label="Expanded" />
              <RadioRow checked={settings.sidebarState === "collapsed"} onChange={() => update({ sidebarState: "collapsed" })} label="Collapsed" subtext="Icon rail on desktop" />
            </div>
            <div className="pt-2">
              <ToggleRow checked={settings.showRecentlyVisited} onChange={(showRecentlyVisited) => update({ showRecentlyVisited })} label="Show recently visited" subtext="Recently Visited module on the dashboard" />
              <ToggleRow checked={settings.showRecommendations} onChange={(showRecommendations) => update({ showRecommendations })} label="Show recommendations" subtext="Explore Next module on the dashboard" />
            </div>
          </SettingsSection>

          <SettingsSection title="Learning">
            <ToggleRow checked={settings.studyReminders} onChange={(studyReminders) => update({ studyReminders })} label="Study reminders" subtext="Show a daily goal card on the dashboard" />
            <DailyGoalControl value={settings.dailyGoal} onChange={(dailyGoal) => update({ dailyGoal })} />
          </SettingsSection>

          <SettingsSection title="Privacy">
            <ToggleRow checked={settings.saveHistory} onChange={(saveHistory) => update({ saveHistory })} label="Save browsing history" subtext="Record the pages you visit" />
            <div className="rounded-lg px-2.5 py-2">
              {confirmClear ? (
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">Clear all reading history?</span>
                  <span className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setConfirmClear(false)}
                      className="rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent"
                    >
                      Keep
                    </button>
                    <button
                      type="button"
                      onClick={clearHistory}
                      disabled={clearing}
                      className="rounded-md border border-destructive/40 px-2 py-1 text-xs font-medium text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
                    >
                      {clearing ? "Clearing…" : "Clear it"}
                    </button>
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmClear(true)}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-destructive"
                >
                  Clear browsing data
                </button>
              )}
            </div>
          </SettingsSection>

          <SettingsSection title="Account">
            <div className="flex items-center gap-3 rounded-lg px-2.5 py-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand-ink">
                <UserRound className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">{user?.name ?? "Signed in"}</span>
                <span className="block truncate text-xs text-muted-foreground">{user?.email ?? ""}</span>
              </span>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowSecurity((v) => !v)}
                aria-expanded={showSecurity}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-accent/40"
              >
                <span className="flex items-center gap-2.5 text-sm text-foreground">
                  <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                  Security
                </span>
                <span className="text-xs text-muted-foreground">{showSecurity ? "Hide" : "Change password"}</span>
              </button>
              {showSecurity && (
                <form onSubmit={changePassword} className="mt-2 space-y-3 px-2.5 pb-2">
                  <div>
                    <Label htmlFor="dash-current-password" className="text-xs">Current password</Label>
                    <Input
                      id="dash-current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="mt-1 h-10 rounded-xl"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="dash-new-password" className="text-xs">New password</Label>
                      <Input
                        id="dash-new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        className="mt-1 h-10 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dash-confirm-new-password" className="text-xs">Confirm new password</Label>
                      <Input
                        id="dash-confirm-new-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        className="mt-1 h-10 rounded-xl"
                      />
                    </div>
                  </div>
                  {securityError && (
                    <p className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency" role="alert">
                      {securityError}
                    </p>
                  )}
                  {securityMessage && (
                    <p className="rounded-lg border border-brand/30 bg-brand-soft/20 px-3 py-2 text-xs text-brand" role="status">
                      {securityMessage}
                    </p>
                  )}
                  <Button type="submit" size="sm" className="rounded-xl" disabled={securityBusy || newPassword.length < 8 || confirmPassword.length < 8 || currentPassword.length === 0}>
                    {securityBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : (<><KeyRound className="mr-1 h-4 w-4" /> Update password</>)}
                  </Button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Updating your password signs out all other devices.
                  </p>
                </form>
              )}
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={signOut}
                disabled={signingOut}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-emergency transition-colors hover:bg-emergency-soft/40 disabled:opacity-50"
              >
                <LogOut className="h-4 w-4" />
                {signingOut ? "Signing out…" : "Sign out"}
              </button>
            </div>
          </SettingsSection>
        </div>

        {/* Footer */}
        <div className="border-t border-border/60 px-5 py-4">
          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Reset settings
          </button>
          <p className="mt-2 flex items-start gap-1.5 text-[0.7rem] leading-relaxed text-muted-foreground/70">
            <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0" />
            Theme is shared with the whole site. Other settings apply to your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
