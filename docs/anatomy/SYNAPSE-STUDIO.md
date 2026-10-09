# Synapse Studio inside KYP

`/synapse-studio` shows labelled 2D animations of where a medication acts in the brain and what happens at the
synapse (221 medications). It started as a standalone prototype (`zammucanva/KYP-3D-ANATOMY`, `apps/synapse-animator`)
and now lives here as a native route.

## How it is wired

- **Route:** `src/app/synapse-studio/page.tsx` (server page in the shared shell: Navbar, Footer, breadcrumb, theme).
- **Client island:** `src/components/synapse/synapse-studio.tsx` renders the authored markup
  (`studio-markup.ts`) and loads the engine scripts from `public/synapse-studio/js/` once, in order, only when the
  route is opened. Each visit mounts a fresh instance (`window.KYPStudioMount(root)`) and tears it down on leave
  (animation loop, document listeners, fullscreen state).
- **Look:** `synapse-studio.css` is scoped to `.syn-studio` and maps the studio's colours to the site's design
  tokens, so it follows the global light/dark theme. The diagram stage itself stays dark in both themes (the
  artwork is drawn for a dark background).
- **Entry points:** navbar, footer, homepage section, Medication Library button, and a "Watch it in the brain" card on
  every drug page whose slug the studio covers (`src/lib/kyp/synapse-studio.ts`, `STUDIO_DRUG_IDS`).
- **Old URL:** `/synapse-studio/index.html` is a small redirect to the route.

## Adding medications

Medications are defined in `public/synapse-studio/js/data-drugs*.js` (short JSON-like entries; the engine animates
them). After adding any, regenerate `STUDIO_DRUG_IDS` in `src/lib/kyp/synapse-studio.ts` so drug pages can link to them.
Users can also add their own medication in the page ("+ Add a medication"); those stay in their browser.

## Licence

The brain image (`public/synapse-studio/assets/brain_sagittal.png`) is a CC BY-SA 4.0 rendering of Z-Anatomy /
BodyParts3D models; attribution is in `public/synapse-studio/ATTRIBUTION.txt` and on the page.
