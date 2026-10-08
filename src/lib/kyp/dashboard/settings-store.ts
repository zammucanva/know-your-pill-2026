"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Dashboard settings — ONE versioned store, the single source of truth
 * for every dashboard preference (the settings drawer reads AND writes
 * here; nothing else keeps its own copy).
 *
 *   localStorage namespace: kyp:settings:v1
 *
 * Theme is deliberately NOT stored here: next-themes owns the theme
 * (single site-wide source). The drawer reads/writes the theme through
 * next-themes directly.
 *
 * Persistence rules (mirrors the progress store's philosophy):
 *   - learning-state ONLY. No PII, no credentials, no clinical data.
 *   - SSR-safe: persisted state rehydrates after mount; components
 *     render store defaults server-side and re-render on hydration
 *     (guarded by a mounted flag at the call sites).
 *   - corrupt or future-version payloads are discarded gracefully.
 */

export type Accent = "default" | "teal" | "neutral";
export type Density = "comfortable" | "compact";
export type FontScale = "sm" | "md" | "lg";
export type SidebarState = "expanded" | "collapsed";
export type LandingPage = "dashboard" | "learn" | "medications" | "psychiatry";
export type DailyGoal = 10 | 20 | 30 | 60;

export interface DashboardSettings {
  /** Accent palette used across the dashboard shell. */
  accent: Accent;
  /** Spacing density of the dashboard grid. */
  density: Density;
  /** Root font scale (accessibility). */
  fontScale: FontScale;
  /** Minimize nonessential animation. */
  reducedMotion: boolean;
  /** Stronger borders and text. */
  highContrast: boolean;
  /** Thicker keyboard focus rings. */
  focusIndicators: boolean;
  /** Desktop sidebar rail state. */
  sidebarState: SidebarState;
  /** Where the KYP logo in the dashboard header navigates. */
  defaultLandingPage: LandingPage;
  /** Show the Recently Visited module. */
  showRecentlyVisited: boolean;
  /** Show the Explore Next module. */
  showRecommendations: boolean;
  /** Show the daily goal card. */
  studyReminders: boolean;
  /** Daily learning goal in minutes. */
  dailyGoal: DailyGoal;
  /** Record browsing history (progress tracking). */
  saveHistory: boolean;
}

export const DEFAULT_DASHBOARD_SETTINGS: DashboardSettings = {
  accent: "default",
  density: "comfortable",
  fontScale: "md",
  reducedMotion: false,
  highContrast: false,
  focusIndicators: false,
  sidebarState: "expanded",
  defaultLandingPage: "dashboard",
  showRecentlyVisited: true,
  showRecommendations: true,
  studyReminders: false,
  dailyGoal: 20,
  saveHistory: true,
};

interface DashboardSettingsStore extends DashboardSettings {
  update: (patch: Partial<DashboardSettings>) => void;
  reset: () => void;
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Rehydrate-guard: only known keys with valid shapes pass through. */
function sanitize(persisted: unknown): Partial<DashboardSettings> {
  if (!isPlainObject(persisted)) return {};
  const out: Partial<DashboardSettings> = {};
  const p = persisted;
  if (p.accent === "default" || p.accent === "teal" || p.accent === "neutral") out.accent = p.accent;
  if (p.density === "comfortable" || p.density === "compact") out.density = p.density;
  if (p.fontScale === "sm" || p.fontScale === "md" || p.fontScale === "lg") out.fontScale = p.fontScale;
  if (typeof p.reducedMotion === "boolean") out.reducedMotion = p.reducedMotion;
  if (typeof p.highContrast === "boolean") out.highContrast = p.highContrast;
  if (typeof p.focusIndicators === "boolean") out.focusIndicators = p.focusIndicators;
  if (p.sidebarState === "expanded" || p.sidebarState === "collapsed") out.sidebarState = p.sidebarState;
  if (
    p.defaultLandingPage === "dashboard" ||
    p.defaultLandingPage === "learn" ||
    p.defaultLandingPage === "medications" ||
    p.defaultLandingPage === "psychiatry"
  ) out.defaultLandingPage = p.defaultLandingPage;
  if (typeof p.showRecentlyVisited === "boolean") out.showRecentlyVisited = p.showRecentlyVisited;
  if (typeof p.showRecommendations === "boolean") out.showRecommendations = p.showRecommendations;
  if (typeof p.studyReminders === "boolean") out.studyReminders = p.studyReminders;
  if (p.dailyGoal === 10 || p.dailyGoal === 20 || p.dailyGoal === 30 || p.dailyGoal === 60) out.dailyGoal = p.dailyGoal;
  if (typeof p.saveHistory === "boolean") out.saveHistory = p.saveHistory;
  return out;
}

export const useDashboardSettings = create<DashboardSettingsStore>()(
  persist(
    (set) => ({
      ...DEFAULT_DASHBOARD_SETTINGS,
      update: (patch) => set(patch),
      reset: () => set({ ...DEFAULT_DASHBOARD_SETTINGS }),
    }),
    {
      name: "kyp:settings:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      merge: (persisted, current) => ({ ...current, ...sanitize(persisted) }),
    }
  )
);

/** Where the dashboard logo takes you, as a real route. */
export const LANDING_PAGE_HREF: Record<LandingPage, string> = {
  dashboard: "/dashboard",
  learn: "/learn",
  medications: "/medicine",
  psychiatry: "/psychiatry",
};
