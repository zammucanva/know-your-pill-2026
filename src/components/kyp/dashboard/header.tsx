"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ChevronDown, LayoutDashboard, LogOut, Menu, Moon, Phone, Settings as SettingsIcon, Sun, UserRound,
} from "lucide-react";

import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { imgPath } from "@/lib/kyp/image-path";
import {
  LANDING_PAGE_HREF, useDashboardSettings,
} from "@/lib/kyp/dashboard/settings-store";
import { cn } from "@/lib/utils";

/**
 * DashboardHeader — the compact command bar of the dashboard.
 *
 * Left: sidebar toggle (desktop) / menu button (mobile) + the KYP logo,
 * which navigates to the configured default landing page.
 * Center: the existing universal search (FloatingSearch, button variant).
 * Right: Emergency (restrained outline pill), theme toggle (next-themes),
 * settings gear (opens the settings drawer), profile dropdown.
 *
 * Nothing here reimplements search, auth, or theming; each control
 * delegates to the platform surface that already owns it.
 */

export interface DashboardHeaderUser {
  name: string;
  email: string;
}

function initialsOf(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "U"
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  // Before mount, render a stable placeholder to avoid hydration drift.
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
    >
      {mounted ? (
        dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}

export function DashboardHeader({
  user, onToggleSidebar, onOpenMobileNav, onOpenSettings, sidebarCollapsed,
}: {
  user: DashboardHeaderUser | null;
  onToggleSidebar: () => void;
  onOpenMobileNav: () => void;
  onOpenSettings: () => void;
  sidebarCollapsed: boolean;
}) {
  const router = useRouter();
  const defaultLandingPage = useDashboardSettings((s) => s.defaultLandingPage);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [signingOut, setSigningOut] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close the profile dropdown on outside click / Escape.
  React.useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-2 px-4 sm:gap-3 sm:px-6">
        {/* Left: nav toggle + logo */}
        <button
          type="button"
          onClick={onOpenMobileNav}
          aria-label="Open navigation"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-pressed={!sidebarCollapsed}
          className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground lg:flex"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link
          href={LANDING_PAGE_HREF[defaultLandingPage]}
          className="flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          aria-label={`Know Your Pill, go to ${defaultLandingPage === "dashboard" ? "your dashboard" : defaultLandingPage}`}
        >
          <img
            src={imgPath("/logo-navy-128.png")}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-md"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-tight text-foreground sm:block">
            Know Your Pill
          </span>
        </Link>

        {/* Center: universal search */}
        <div className="mx-auto hidden max-w-md flex-1 justify-center md:flex">
          <FloatingSearch variant="button" className="w-full max-w-sm" />
        </div>

        {/* Right: emergency, theme, settings, profile */}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/#emergency"
            className="hidden items-center gap-1.5 rounded-full border border-emergency/40 px-3 py-1.5 text-xs font-semibold text-emergency transition-colors hover:bg-emergency-soft/60 sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            Emergency
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Open settings"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
          >
            <SettingsIcon className="h-4 w-4" />
          </button>

          {/* Profile dropdown */}
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Account menu"
              className="flex items-center gap-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand-ink">
                {user ? initialsOf(user.name) : <UserRound className="h-4 w-4" />}
              </span>
              <ChevronDown
                className={cn(
                  "hidden h-3.5 w-3.5 text-muted-foreground transition-transform sm:block",
                  menuOpen && "rotate-180"
                )}
              />
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-popover shadow-xl"
              >
                <div className="border-b border-border/60 px-4 py-3">
                  <p className="truncate text-sm font-semibold text-foreground">{user?.name ?? "Signed in"}</p>
                  <p className="truncate text-xs text-muted-foreground">{user?.email ?? ""}</p>
                </div>
                <div className="p-1.5">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenSettings();
                    }}
                    className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    <SettingsIcon className="h-4 w-4 text-muted-foreground" />
                    Account &amp; settings
                  </button>
                  <Link
                    href="/dashboard"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                    My dashboard
                  </Link>
                  <div className="my-1.5 h-px bg-border/60" />
                  <button
                    type="button"
                    role="menuitem"
                    onClick={signOut}
                    disabled={signingOut}
                    className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-emergency transition-colors hover:bg-emergency-soft/50 disabled:opacity-50"
                  >
                    <LogOut className="h-4 w-4" />
                    {signingOut ? "Signing out…" : "Sign out"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-border/40 px-4 py-2 md:hidden">
        <FloatingSearch variant="button" className="w-full" />
      </div>
    </header>
  );
}
