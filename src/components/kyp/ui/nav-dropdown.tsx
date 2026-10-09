"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * NavDropdown: a grouped destination menu for the main header.
 *
 * Keeps the top bar short by folding related destinations under one
 * clearly named label. Opens on click, Enter or Space, and also on
 * mouse hover; arrow keys move through the items, Escape closes and
 * returns focus to the trigger, and a route change closes it.
 * The trigger shows the current-page state when any item is current.
 */

export interface NavDropdownItem {
  href: string;
  label: string;
  /** One short line saying what is behind the link. */
  description?: string;
  /** Engine routes bundle the registry, so they are not prefetched. */
  prefetch?: false;
}

export function NavDropdown({
  label,
  items,
  isCurrent,
  className,
}: {
  label: string;
  items: NavDropdownItem[];
  isCurrent: (href: string) => boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  // The menu is open for the page it was opened on, so a route change
  // closes it without an effect.
  const [openOn, setOpenOn] = React.useState<string | null>(null);
  const open = openOn !== null && openOn === pathname;
  const setOpen = React.useCallback(
    (next: boolean | ((v: boolean) => boolean)) =>
      setOpenOn((cur) => {
        const was = cur !== null && cur === pathname;
        const value = typeof next === "function" ? next(was) : next;
        return value ? pathname : null;
      }),
    [pathname]
  );
  const rootRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<number | null>(null);
  const id = React.useId();

  const active = items.some((i) => isCurrent(i.href));

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  React.useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    []
  );

  const links = () =>
    Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);

  const onTriggerKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      window.setTimeout(() => links()[0]?.focus(), 0);
    }
  };

  const onMenuKey = (e: React.KeyboardEvent) => {
    const list = links();
    const i = list.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      list[(i + 1) % list.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      list[(i - 1 + list.length) % list.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      list[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      list[list.length - 1]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onPointerEnter={hoverOpen}
      onPointerLeave={hoverClose}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKey}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-current={active ? "page" : undefined}
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium outline-none transition-colors",
          "hover:bg-accent/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand/60 xl:px-3 xl:text-sm",
          active || open ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {label}
        <ChevronDown
          aria-hidden
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id={id}
            role="menu"
            aria-label={label}
            onKeyDown={onMenuKey}
            initial={reduced ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.13, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 pt-2"
          >
            <div className="w-72 rounded-2xl border border-border/60 bg-popover/95 p-2 shadow-xl backdrop-blur-sm">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={item.prefetch}
                  role="menuitem"
                  tabIndex={-1}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-transparent px-3 py-2.5 outline-none transition-colors hover:border-border/60 hover:bg-accent/50 focus-visible:border-brand/40 focus-visible:bg-accent/50"
                >
                  <span className="block text-sm font-medium text-foreground">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
