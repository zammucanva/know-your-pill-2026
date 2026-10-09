# /public/models/

Drop real anatomical GLB/GLTF files here.

The current engine ships with a **clearly-marked placeholder model**
(procedural wireframe shapes — see `src/components/anatomy/placeholder-body.tsx`).
The placeholder is NOT real anatomy — it exists only to exercise the
engine, UI, and selection system.

## To add a real anatomical GLB

1. Source a legally-licensed GLB (see `docs/asset-pipeline.md`).
2. Drop it at `/public/models/human-body.glb`.
3. Update `src/lib/anatomy/asset-manifest.ts`:
   - Set `assetPath: "/models/human-body.glb"`
   - Set `kind: "real"`
   - Set `license` and `sourceUrl` (required for open-dataset attribution)
4. Verify the GLB's mesh names match the `meshName` field in
   `src/lib/anatomy/structures.ts`.
5. The `AnatomyScene` will automatically load the real GLB instead of
   the placeholder — no other code changes.

## Compression

Use **Draco** compression (mandatory for any model >5 MB).
Use **meshopt** as a fallback if Draco isn't supported.

Set `draco: true` and `meshopt: true` in the asset manifest when the
GLB is compressed.

## File size budget

- Full body (skeletal + nervous + organs): target ≤ 30 MB Draco-compressed
- Brain detail: target ≤ 15 MB
- LOD low: ≤ 5 MB

Larger files will still work but will take longer to load on first visit.
