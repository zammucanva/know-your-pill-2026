/**
 * Dashboard data utilities — shared types and helpers for the
 * dashboard modules. Server rows come from the existing APIs
 * (/api/progress, /api/bookmarks); nothing here invents data.
 */

import { BookOpen, Activity, HeartPulse, GraduationCap } from "lucide-react";

export interface ProgressEntry {
  id: string;
  type: string;
  slug: string;
  title: string;
  lastVisitedAt: string;
  visitCount: number;
}

export interface BookmarkEntry {
  id: string;
  type: string;
  slug: string;
  title: string;
  createdAt: string;
}

export const typeIcon: Record<string, typeof BookOpen> = {
  drug: BookOpen,
  substance: Activity,
  disease: HeartPulse,
};

export function typeHref(type: string, slug: string): string {
  if (type === "drug") return `/drugs/${slug}`;
  if (type === "substance") return `/substances/${slug}`;
  if (type === "disease") return `/diseases/${slug}`;
  return "/";
}

export const typeLabel: Record<string, string> = {
  drug: "Medication",
  substance: "Substance",
  disease: "Condition",
};

export function timeAgo(iso: string): string {
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

export function timeAgoShort(iso: string): string {
  return timeAgo(iso).replace(" ago", "").toUpperCase();
}

/**
 * Learner type label — maps the account's learnerType to the short
 * badge shown in the welcome row. Values mirror the role picker in
 * the welcome flow (src/app/api/auth/role/route.ts VALID_LEARNER_TYPES).
 */
const LEARNER_LABELS: Record<string, string> = {
  patient: "Patient & caregiver",
  student: "Medical student",
  mbbs_student: "MBBS student",
  medical_student: "Medical student",
  medical_resident: "Medical resident",
  psychiatry_resident: "Psychiatry resident",
  psychiatrist: "Psychiatrist",
  exam_aspirant: "NEET PG",
  healthcare_professional: "Healthcare professional",
};

export function learnerLabel(learnerType: string | undefined | null): string | null {
  if (!learnerType) return null;
  return LEARNER_LABELS[learnerType] ?? null;
}

/** Icons for the learning-progress rows (module: learning progress). */
export const progressRowIcon = {
  medications: BookOpen,
  psychiatry: GraduationCap,
};
