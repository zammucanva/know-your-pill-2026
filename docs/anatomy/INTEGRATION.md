# KYP 3D Anatomy: integration notes

The standalone **KYP 3D Anatomy** project (`zammucanva/KYP-3D-ANATOMY`) now lives inside this site as
the `/anatomy` route. This file records how it was brought in, what was reused, and what to know when
extending it.

## Architecture at a glance

| | KYP 2026 (this repo, parent) | KYP 3D Anatomy (standalone) |
|---|---|---|
| Framework | Next.js 16 (App Router), Tailwind 4, `next-themes` | Next.js 16, Tailwind 4, own theme store |
| Shell | `Navbar` + `Footer` per page, global theme | Own `Header`, single route with ATLAS / MECHANISM modes |
| 3D | none | three 0.169, @react-three/fiber 9, @react-three/drei 10 |
| Model | n/a | BodyParts3D, 2,234 structures, 15 gzip chunks + `atlas.json` |
| State | zustand (some features) | zustand stores (selection, camera, loading) |

## What was brought over (atlas mode only)

- `src/components/anatomy/`: canvas, scene, model, camera rig, placeholder; `panels/` holds the systems list,
  inspector, viewport toolbar, zoom control, brain mode, loading overlay, mobile sheets, model status badge.
- `src/lib/anatomy/`: structures, systems, brain registry, explode logic, KYP normalisation, structure bridge,
  asset manifest; `store/` holds the zustand stores.
- `src/lib/hooks/`: `use-anatomy-model`, `use-atlas-data`, `use-device-tier`, `fetch-with-retry`.
- `public/models/`: `atlas.json`, `body-0..14.bin.gz`, attribution. (~33 MB, fetched only on `/anatomy`.)
- `src/components/ui/sheet.tsx` (shadcn sheet used by the mobile panels).

**Not brought over:** the standalone project's Mechanism Studio / cinematic player and its mock drug/disorder
browser. The mock browser was labelled "NOT real clinical data" by its own source and the site already owns the real
drug and psychiatry content.

## Shell, theme, brand

- Route `src/app/anatomy/page.tsx` uses the site's `Navbar`, `Footer`, `FloatingSearch`, breadcrumb pattern
  and `<main id="main-content">`. The standalone `Header`, theme toggle and theme store were dropped.
- The 3D scene backdrop follows the global `next-themes` theme (`useTheme().resolvedTheme`).
- Both projects already shared the same design tokens; the only addition is `--viewport-backdrop(-secondary)`
  in `globals.css`.
- Navigation: "3D Anatomy" added to `navLinks` (navbar) and the footer Platform column, `/anatomy` added to the
  sitemap, and `tests/study-ia.test.ts` updated to expect the new nav entry.

## Learning links (no fabricated links)

`src/lib/anatomy/kyp-links.ts` resolves the ids used by the anatomy data (`kypLinks` in `structures.ts`) to real
KYP pages: drugs -> `/drugs/<slug>`, conditions -> `/psychiatry/<slug>` or `/diseases/<slug>`, neurotransmitters ->
the Neurotransmitters & Signalling lesson. Ids with no KYP page (e.g. levodopa, Parkinson disease) resolve to
nothing and are not shown. To connect a structure to a new lesson, add the id to that file (and confirm the route).

## Technical notes

- **Asset paths:** model URLs go through `imgPath()` so the GitHub Pages `basePath` build also works.
- **JSX typing:** importing `@react-three/fiber` augments `JSX.IntrinsicElements`, which broke three polymorphic
  components typed as `React.ElementType` (`Container`, `Section`, `lesson-shell` phase style, `search-modal`
  icon map). They now use `React.ComponentType` types; behaviour is unchanged.
- **CSP:** no change needed. The loader uses `fetch` + `DecompressionStream` (same origin), no workers, no `blob:`.
- **Lazy loading:** the canvas is `next/dynamic` with `ssr: false`; three.js is only downloaded on `/anatomy`.
- **Failure states:** the standalone loader's WebGL / network / retry overlay is preserved.

## Licence

BodyParts3D, (c) The Database Center for Life Science, CC BY 4.0 (see `public/models/ATTRIBUTION.md`). The page
credits it under the viewport.

## Known limitations

- Mechanism Studio (drug-on-anatomy animations) is not part of this integration.
- Click-to-select on the model could not be exercised through automated pointer events in the test browser;
  selection through the systems / structure list, the inspector and Brain Mode was verified. Please click-test
  in a normal browser.
- The knowledge text in `structures.ts` (functions, clinical notes) was authored in the standalone project and
  should get the same clinical review as other KYP content.
