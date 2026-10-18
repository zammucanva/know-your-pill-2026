import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

/** WCAG 2 contrast of the design tokens, computed from src/app/globals.css (OKLCH to sRGB), so a palette edit cannot silently fall below AA. */
const css = readFileSync("src/app/globals.css", "utf8").replace(/\r\n/g, "\n");
const block = (start: string) => {
  const i = css.indexOf(start);
  return css.slice(i, css.indexOf("\n}", i));
};
const light = block("\n:root {");
const dark = block("\n.dark {");
const token = (b: string, name: string) => {
  const ref = new RegExp(String.raw`--${name}:\s*var\(--([a-z-]+)\)`).exec(b);
  if (ref) return token(b, ref[1]);
  const m = new RegExp(String.raw`--${name}:\s*oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)`).exec(b);
  if (!m) throw new Error(`token --${name} not found`);
  return [Number(m[1]), Number(m[2]), Number(m[3])] as [number, number, number];
};
function luminance([L, C, h]: [number, number, number]) {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s].map((x) => Math.min(1, Math.max(0, x)));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}
const ratio = (b: string, fg: string, bg: string) => {
  const [x, y] = [luminance(token(b, fg)), luminance(token(b, bg))];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

describe("design tokens meet WCAG AA (4.5:1) for normal-size text", () => {
  for (const [name, b] of [["light", light], ["dark", dark]] as const) {
    for (const [fg, bg] of [["brand", "background"], ["brand", "card"], ["brand", "muted"], ["muted-foreground", "background"], ["muted-foreground", "card"], ["foreground", "background"], ["primary-foreground", "primary"]] as const) {
      test(`${name}: --${fg} on --${bg}`, () => {
        expect(ratio(b, fg, bg)).toBeGreaterThanOrEqual(4.5);
      });
    }
  }
  for (const [name, b] of [["light", light], ["dark", dark]] as const) {
    for (const fg of ["brand-text", "emergency-text", "neural-text", "warning-text", "success-text"]) {
      // Each role sits on the page surfaces and on its own soft tint (never on another family's tint).
      for (const bg of ["background", "card", "muted", `${fg.replace("-text", "")}-soft`]) {
        test(`${name}: text role --${fg} on --${bg}`, () => {
          expect(ratio(b, fg, bg)).toBeGreaterThanOrEqual(4.5);
        });
      }
    }
  }
});

describe("small text is not faded below AA with an opacity modifier", () => {
  const walk = (d: string): string[] => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : /\.tsx$/.test(f) ? [join(d, f)] : []));
  test("no text-[0.6rem..0.65rem] label uses text-muted-foreground/NN", () => {
    const bad: string[] = [];
    for (const f of walk("src/components")) {
      for (const [i, line] of readFileSync(f, "utf8").split(/\r?\n/).entries()) if (/text-\[0\.6(25|5)?rem\][^"`]*text-(muted-foreground|brand)\/\d+/.test(line)) bad.push(`${f}:${i + 1}`);
    }
    expect(bad).toEqual([]);
  });
});

describe("text colour in component stylesheets uses the AA text role, not the fill token", () => {
  test("no 'color: var(--brand|emergency|neural|warning|success)' in src CSS", () => {
    const walk = (d: string): string[] => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : /\.css$/.test(f) ? [join(d, f)] : []));
    const bad: string[] = [];
    for (const f of walk("src")) for (const [i, l] of readFileSync(f, "utf8").split(/\r?\n/).entries()) if (/^\s*color:\s*var\(--(brand|emergency|neural|warning|success)\)/.test(l)) bad.push(`${f}:${i + 1}`);
    expect(bad).toEqual([]);
  });
});

describe("drug-class accent colours are used as text (classes.ts accentClass) and meet AA", () => {
  for (const [name, b] of [["light", light], ["dark", dark]] as const) {
    for (const c of ["depressant", "stimulant", "hallucinogen", "opioid", "cannabinoid", "dissociative", "inhalant", "ssri"]) {
      for (const bg of ["background", "card", "muted"]) {
        test(`${name}: --class-${c} on --${bg}`, () => {
          expect(ratio(b, `class-${c}`, bg)).toBeGreaterThanOrEqual(4.5);
        });
      }
    }
  }
});

describe("hard-coded text colours in the header have a dark-mode counterpart", () => {
  test("the Emergency link text colour (dark red) is replaced by a light one in dark mode", () => {
    const nav = readFileSync("src/components/kyp/sections/navbar.tsx", "utf8");
    const line = nav.split(/\r?\n/).find((l) => l.includes("text-[oklch(0.4_0.16_25)]"))!;
    expect(line).toContain("dark:text-[oklch(");
  });
  test("a fixed dark text colour (oklch lightness 0.45 or lower) in a component always carries a dark: counterpart", () => {
    const bad: string[] = [];
    const walk = (d: string): string[] => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : /\.tsx$/.test(f) ? [join(d, f)] : []));
    for (const f of walk("src/components")) for (const [i, l] of readFileSync(f, "utf8").split(/\r?\n/).entries()) {
      for (const m of l.matchAll(/(?<![:\w-])text-\[oklch\((0?\.\d+)_/g)) if (Number(m[1]) <= 0.45 && !/dark:text-\[/.test(l)) bad.push(`${f}:${i + 1}`);
    }
    expect(bad).toEqual([]);
  });
});
