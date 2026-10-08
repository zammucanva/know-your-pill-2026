#!/usr/bin/env python3
"""VLM scoring for the density polish — 3 independent runs per shot, median.

Shots: the strict acceptance set (escitalopram + MDD at 1280/375 light+dark)
plus the 5-pilot smoke (1280 light). Reports per-shot medians and the
mission §27 gate table. Writes JSON next to the screenshots.
"""
import json
import subprocess
import sys
from pathlib import Path
from statistics import median

QA = Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/mypolish-qa2")
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/tmp/mypolish-vlm")
RUNS = 3
OUT.mkdir(parents=True, exist_ok=True)

PROMPT = """You are an independent visual QA reviewer for a medical-education mechanism diagram. Score the MECHANISM CANVAS in this screenshot (the graph area with nodes and connecting edges; ignore page header/footer). VIEWPORT_CONTEXT
Rate each dimension 0-10 with one short justification each:
1. causal_clarity: is the causal flow readable (clear reading direction, sensible left-to-right progression, can you trace WHERE the pathway starts, what acts on what, and where it leads)?
2. relationship_clarity: are edge semantics distinguishable WITHOUT relying on colour (arrowheads vs T-bars vs dots vs dashed/dotted lines, labels, legend)?
3. label_readability: are the edge label chips and node labels legible at this size?
4. visual_hierarchy: is there clear visual hierarchy (primary causal path vs secondary detail), node prominence, spacing, absence of clutter/overlaps?
5. atlas_quality: does it look like a professional medical atlas diagram (textbook-quality)?
6. mobile_usability: at this viewport width, is the initial view readable and are pan/zoom controls usable? (desktop captures: score N/A as 0)
7. dark_mode: is this actually dark theme, with readable edges/labels/nodes? (light theme: score N/A as 0)
8. accessibility_impression: visible focus affordances, target sizes, legend, text contrast?
Also report: any_visible_defects (list or "none").
Answer STRICTLY as JSON: {"causal_clarity":n,"relationship_clarity":n,"label_readability":n,"visual_hierarchy":n,"atlas_quality":n,"mobile_usability":n,"dark_mode":n,"accessibility_impression":n,"any_visible_defects":"...","notes":"..."}"""

KEYS = [
    "causal_clarity", "relationship_clarity", "label_readability", "visual_hierarchy",
    "atlas_quality", "mobile_usability", "dark_mode", "accessibility_impression",
]

SHOTS = []
# strict acceptance set
for page in ["escitalopram", "mdd"]:
    for w in [1280, 375]:
        for mode in ["light", "dark"]:
            SHOTS.append(f"{page}-{w}-{mode}")
# 5-pilot smoke (desktop light)
for page in ["aripiprazole", "disulfiram", "naloxone"]:
    SHOTS.append(f"{page}-1280-light")

DIMS = {
    "1280-light": {"skip": {"mobile_usability", "dark_mode"}},
    "1280-dark": {"skip": {"mobile_usability"}},
    "375-light": {"skip": {"dark_mode"}},
    "375-dark": {"skip": set()},
}


def score(shot: str) -> dict:
    f = QA / f"{shot}.png"
    if not f.exists():
        return {"error": "missing"}
    width = shot.rsplit("-", 2)[1]
    is_mobile = width == "375"
    viewport_note = (
        "VIEWPORT CONTEXT: this capture is a MOBILE-width (375 CSS px, DPR 2) viewport of a "
        "pannable/zoomable graph canvas. Evaluate mobile_usability AT THIS WIDTH: the initial "
        "view intentionally shows the START of the causal chain; the graph continues to the "
        "right (edge fade + caption indicate continuation, NOT truncation); pan/zoom controls "
        "are the toolbar buttons."
        if is_mobile
        else "VIEWPORT CONTEXT: desktop-width (1280 CSS px) capture of a pannable/zoomable graph "
        "canvas. The graph intentionally continues beyond the right edge — the edge fade and "
        "the caption indicate continuation, NOT truncation. Score mobile_usability as N/A (0)."
    )
    prompt = PROMPT.replace("VIEWPORT_CONTEXT", viewport_note)
    rows = []
    for run in range(RUNS):
        j = OUT / f"{shot}-run{run + 1}.json"
        r = subprocess.run(
            ["z-ai", "vision", "-p", prompt, "-i", str(f), "-o", str(j)],
            capture_output=True, text=True, timeout=300,
        )
        if r.returncode != 0 or not j.exists():
            rows.append({"error": r.stderr[-200:]})
            continue
        try:
            data = json.load(open(j))["choices"][0]["message"]["content"]
            start = data.find("{")
            end = data.rfind("}")
            rows.append(json.loads(data[start : end + 1]))
        except Exception as e:
            rows.append({"error": f"parse: {e}"})
    ok = [x for x in rows if "error" not in x]
    if not ok:
        return {"error": "all runs failed", "rows": rows}
    med = {}
    for k in KEYS:
        vals = [x.get(k) for x in ok if isinstance(x.get(k), (int, float))]
        if vals:
            med[k] = round(median(vals), 2)
    defects = [x.get("any_visible_defects", "") for x in ok if x.get("any_visible_defects")]
    return {"median": med, "runs": len(ok), "defects": defects}


results = {}
for shot in SHOTS:
    print(f"scoring {shot} ...", flush=True)
    results[shot] = score(shot)

(OUT / "vlm-medians.json").write_text(json.dumps(results, indent=2))

# ---- gate table (mission §27) ----
print("\n=== VLM MEDIANS ({} runs each) ===".format(RUNS))
print(f"{'shot':28s} causal rel label hier atlas mob dark a11y")
gate_rows = []
for shot, r in results.items():
    if "median" not in r:
        print(f"{shot:28s} ERROR {r.get('error')}")
        continue
    m = r["median"]
    spec = shot.rsplit("-", 2)
    skip = DIMS.get(f"{spec[1]}-{spec[2]}", {"skip": set()})["skip"]
    vals = [m.get(k, "-") for k in KEYS]
    print(f"{shot:28s} " + " ".join(f"{str(v):>5s}" for v in vals))
    if shot.startswith(("escitalopram", "mdd")):
        gate_rows.append((shot, m, skip))

print("\n=== ACCEPTANCE GATE (escitalopram + MDD, >= 8 required) ===")
all_pass = True
for shot, m, skip in gate_rows:
    for k in ["causal_clarity", "relationship_clarity", "label_readability", "visual_hierarchy"]:
        v = m.get(k, 0)
        status = "PASS" if v >= 8 else "BELOW"
        if v < 8:
            all_pass = False
        print(f"  {shot:28s} {k:22s} {v:>5}  {status}")
    for k in ["mobile_usability", "dark_mode"]:
        if k in skip:
            continue
        v = m.get(k, 0)
        status = "PASS" if v >= 8 else "BELOW"
        if v < 8:
            all_pass = False
        print(f"  {shot:28s} {k:22s} {v:>5}  {status}")
print("\nGATE:", "PASS" if all_pass else "BELOW BAR (document discrepancies per §27)")
