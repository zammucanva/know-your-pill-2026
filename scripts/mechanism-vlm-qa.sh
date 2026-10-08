#!/usr/bin/env bash
# VLM-assisted visual acceptance scoring (mission §35).
# Scores the primary screenshot set: 5 pilots x (1280-light, 1280-dark, 375-light).
# Output: /tmp/mechanism-qa-v2/vlm-scores/<page>-<width>-<mode>.json
set -u
QA_DIR="${1:-/tmp/mechanism-qa-v2}"
OUT_DIR="$QA_DIR/vlm-scores"
mkdir -p "$OUT_DIR"

PROMPT='You are an independent visual QA reviewer for a medical-education mechanism diagram. Score the MECHANISM CANVAS in this screenshot (the graph area with nodes and connecting edges; ignore page header/footer). Rate each dimension 0-10 with one short justification each:
1. causal_clarity: is the causal flow readable (clear reading direction, sensible left-to-right progression)?
2. relationship_clarity: are edge semantics distinguishable WITHOUT relying on colour (arrowheads vs T-bars vs dots vs dashed/dotted lines, labels, legend)?
3. visual_hierarchy: node prominence, spacing, alignment, absence of clutter/overlaps?
4. atlas_quality: does it look like a professional medical atlas diagram (textbook-quality)?
5. mobile_usability: at this viewport width, is the initial view readable and are pan/zoom controls usable? (score N/A=0 if desktop width)
6. dark_mode: is this actually dark theme, with readable edges/labels/nodes? (score N/A=0 if light theme)
7. accessibility_impression: visible focus affordances, target sizes, legend, text contrast?
Also report: any_visible_defects (list or "none").
Answer STRICTLY as JSON: {"causal_clarity":n,"relationship_clarity":n,"visual_hierarchy":n,"atlas_quality":n,"mobile_usability":n,"dark_mode":n,"accessibility_impression":n,"any_visible_defects":"...","notes":"..."}'

for page in escitalopram aripiprazole mdd disulfiram naloxone; do
  for spec in "1280 light" "1280 dark" "375 light"; do
    set -- $spec
    width=$1; mode=$2
    f="$QA_DIR/$page-$width-$mode.png"
    [ -f "$f" ] || { echo "MISSING $f"; continue; }
    echo "scoring $page-$width-$mode ..."
    z-ai vision -p "$PROMPT" -i "$f" -o "$OUT_DIR/$page-$width-$mode.json" >/dev/null 2>&1 || echo "  (vlm failed for $page-$width-$mode)"
    sleep 1
  done
done
echo "done"
