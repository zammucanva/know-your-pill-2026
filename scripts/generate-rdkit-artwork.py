#!/usr/bin/env python3
"""
Generate professional molecule artwork using RDKit.
Style matches existing KYP artwork: clean black structure on white background.
"""

from rdkit import Chem
from rdkit.Chem import Draw
from rdkit.Chem.Draw import rdMolDraw2D
from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "/home/z/my-project/public/artwork"

def get_font(size):
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
    ]
    for p in font_paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def render_molecule(smiles, name, subtitle, output_path, size=1000):
    """Render a molecule using RDKit with clean black-on-white style."""
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        print(f"  ERROR: Could not parse SMILES: {smiles}")
        return False
    
    # Use RDKit's 2D drawer
    drawer = rdMolDraw2D.MolDraw2DCairo(size, size)
    
    # Set draw options for clean black-on-white style
    opts = drawer.drawOptions()
    opts.bondLineWidth = 2.5
    opts.baseFontSize = 0.8
    opts.padding = 0.15
    # Black bonds, white background
    opts.useBWAtomPalette()
    opts.setBackgroundColour((1, 1, 1))
    opts.setHighlightColour((0.8, 0.8, 0.8))
    
    drawer.DrawMolecule(mol)
    drawer.FinishDrawing()
    
    # Save the molecule image
    mol_png = drawer.GetDrawingText()
    with open(output_path, "wb") as f:
        f.write(mol_png)
    
    # Now add the title text below the molecule using PIL
    img = Image.open(output_path).convert("RGBA")
    
    # Create a taller canvas to add text at the bottom
    canvas = Image.new("RGBA", (size, size + 250), (255, 255, 255, 255))
    canvas.paste(img, (0, 0))
    
    draw = ImageDraw.Draw(canvas)
    font_large = get_font(72)
    font_small = get_font(48)
    
    # Draw molecule name
    bbox = draw.textbbox((0, 0), name, font=font_large)
    w = bbox[2] - bbox[0]
    x = (size - w) // 2
    y = size + 30
    draw.text((x, y), name, fill="black", font=font_large)
    
    # Draw subtitle
    if subtitle:
        bbox2 = draw.textbbox((0, 0), subtitle, font=font_small)
        w2 = bbox2[2] - bbox2[0]
        x2 = (size - w2) // 2
        draw.text((x2, y + 90), subtitle, fill="black", font=font_small)
    
    canvas.save(output_path, "PNG")
    print(f"  OK {os.path.basename(output_path)}")
    return True

# ============================================================
# Generate all 4 missing molecule artworks
# ============================================================
print("Generating molecule artwork with RDKit...")

# 1. Cannabis — THC (tetrahydrocannabinol)
print("1. Cannabis (THC)...")
render_molecule(
    "CCCCCc1cc(O)c2C3CC(C)(C)OC3=CCc2c1",
    "CANNABIS",
    "(THC / MARIJUANA)",
    f"{OUTPUT_DIR}/cannabis.png"
)

# 2. Barbiturates — Phenobarbital
print("2. Barbiturates (Phenobarbital)...")
render_molecule(
    "CCC1(c2ccccc2)C(=O)NC(=O)NC1=O",
    "BARBITURATES",
    "(PHENOBARBITAL)",
    f"{OUTPUT_DIR}/barbiturate.png"
)

# 3. Inhalants — Toluene
print("3. Inhalants (Toluene)...")
render_molecule(
    "Cc1ccccc1",
    "INHALANTS",
    "(TOLUENE / SOLVENTS)",
    f"{OUTPUT_DIR}/inhalants.png"
)

# 4. Withdrawal — No single molecule, use a conceptual diagram
# For withdrawal, we'll create a simple brain/neuron diagram
print("4. Withdrawal State (conceptual diagram)...")
# Use chlordiazepoxide as a representative withdrawal management drug
# Actually, let's use a generic approach - draw a simple neurotransmitter diagram
from PIL import Image, ImageDraw, ImageFont
import math

img = Image.new("RGBA", (1000, 1250), (255, 255, 255, 255))
draw = ImageDraw.Draw(img)
font = get_font(56)
font_small = get_font(40)
font_title = get_font(72)
font_sub = get_font(48)

cx, cy = 500, 500

# Draw two neurons with synapse
# Neuron 1 (presynaptic)
draw.ellipse([cx-180, cy-100, cx-20, cy+100], outline="black", width=4)
# Axon
draw.line([(cx-20, cy), (cx+180, cy)], fill="black", width=4)
# Synaptic cleft (gap)
draw.line([(cx+180, cy-60), (cx+180, cy+60)], fill=(180,180,180), width=2)
# Neuron 2 (postsynaptic)
draw.ellipse([cx+200, cy-90, cx+360, cy+90], outline="black", width=4)

# Draw vesicles (small circles) in neuron 1
for i in range(5):
    vx = cx - 140 + i * 25
    vy = cy
    r = 12
    draw.ellipse([vx-r, vy-r, vx+r, vy+r], outline="black", width=2)

# Draw neurotransmitters in cleft
import random
random.seed(42)
for i in range(8):
    nx = cx + 185 + random.randint(0, 10)
    ny = cy - 40 + random.randint(0, 80)
    r = 6
    draw.ellipse([nx-r, ny-r, nx+r, ny+r], fill="black")

# Draw receptors on neuron 2
for i in range(4):
    rx = cx + 200
    ry = cy - 30 + i * 20
    draw.rectangle([rx-3, ry-6, rx+3, ry+6], fill="black")

# Labels with arrows
font_arrow = get_font(48)

# GABA down arrow
draw.text((cx - 250, cy - 200), "GABA \u2193", fill="black", font=font_arrow)
draw.line([(cx-180, cy-170), (cx-100, cy-110)], fill="black", width=2)

# Glutamate up arrow
draw.text((cx + 220, cy - 200), "Glutamate \u2191", fill="black", font=font_arrow)
draw.line([(cx+280, cy-170), (cx+280, cy-100)], fill="black", width=2)

# Dopamine down
draw.text((cx - 80, cy + 200), "Dopamine \u2193", fill="black", font=font_arrow)

# Title
bbox = draw.textbbox((0, 0), "WITHDRAWAL", font=font_title)
w = bbox[2] - bbox[0]
draw.text(((1000 - w) // 2, 1050), "WITHDRAWAL", fill="black", font=font_title)

bbox2 = draw.textbbox((0, 0), "(NEUROTRANSMITTER IMBALANCE)", font=font_sub)
w2 = bbox2[2] - bbox2[0]
draw.text(((1000 - w2) // 2, 1140), "(NEUROTRANSMITTER IMBALANCE)", fill="black", font=font_sub)

img.save(f"{OUTPUT_DIR}/withdrawal.png", "PNG")
print("  OK withdrawal.png")

print("\nDone! All 4 artworks generated.")
