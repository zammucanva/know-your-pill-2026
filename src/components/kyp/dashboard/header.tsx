"use client";

import { ProfileMenu } from "@/components/kyp/ui/profile-menu";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu, Moon, Phone, Settings as SettingsIcon, Sun,
} from "lucide-react";

import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { imgPath } from "@/lib/kyp/image-path";
import {
  LANDING_PAGE_HREF, useDashboardSettings,
} from "@/lib/kyp/dashboard/settings-store";

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
  const [signingOut, setSigningOut] = React.useState(false);

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
          data-kyp-brand
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

          {/* Account menu: the same component as the main header */}
          <ProfileMenu
            user={user ?? { name: "Signed in", email: "" }}
            onLogout={signOut}
            onOpenSettings={onOpenSettings}
            signingOut={signingOut}
          />
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-border/40 px-4 py-2 md:hidden">
        <FloatingSearch variant="button" className="w-full" />
      </div>
    </header>
  );
}
