#!/usr/bin/env python3
"""
Generate molecule artwork for 4 missing substances using PIL.
Style: Black chemical structure on white background, with molecule name in serif font below.
Matches the existing artwork style (ethanol.png, cocaine.png, etc.)
"""

from PIL import Image, ImageDraw, ImageFont
import math
import os

OUTPUT_DIR = "/home/z/my-project/public/artwork"

def get_font(size):
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf",
    ]
    for p in font_paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def draw_bond(draw, x1, y1, x2, y2, width=3):
    draw.line([(x1, y1), (x2, y2)], fill="black", width=width)

def draw_double_bond(draw, x1, y1, x2, y2, offset=8, width=3):
    dx = x2 - x1
    dy = y2 - y1
    length = math.sqrt(dx*dx + dy*dy)
    if length == 0:
        return
    px = -dy / length * offset
    py = dx / length * offset
    draw_bond(draw, x1, y1, x2, y2, width)
    draw_bond(draw, x1+px, y1+py, x2+px, y2+py, width)

def draw_hexagon(draw, cx, cy, r, y_offset=0):
    points = []
    for i in range(6):
        angle = math.pi / 3 * i - math.pi / 2
        px = cx + r * math.cos(angle)
        py = cy + r * math.sin(angle) + y_offset
        points.append((px, py))
    for i in range(6):
        draw_bond(draw, points[i][0], points[i][1], points[(i+1)%6][0], points[(i+1)%6][1])
    for i in [0, 2, 4]:
        draw_double_bond(draw, points[i][0], points[i][1], points[(i+1)%6][0], points[(i+1)%6][1])

def add_label(draw, text, x, y, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.rectangle([x-w//2-4, y-h//2-2, x+w//2+4, y+h//2+2], fill="white")
    draw.text((x-w//2, y-h//2), text, fill="black", font=font)

def add_title(draw, name, subtitle, img_width, img_height):
    font_large = get_font(72)
    font_small = get_font(48)
    bbox = draw.textbbox((0, 0), name, font=font_large)
    w = bbox[2] - bbox[0]
    x = (img_width - w) // 2
    y = img_height - 200
    draw.text((x, y), name, fill="black", font=font_large)
    if subtitle:
        bbox2 = draw.textbbox((0, 0), subtitle, font=font_small)
        w2 = bbox2[2] - bbox2[0]
        x2 = (img_width - w2) // 2
        draw.text((x2, y + 85), subtitle, fill="black", font=font_small)

def create_canvas(size=2000):
    return Image.new("RGBA", (size, size), (255, 255, 255, 255))

# ============================================================
# 1. CANNABIS — THC molecule (simplified)
# ============================================================
def create_cannabis():
    img = create_canvas(2000)
    draw = ImageDraw.Draw(img)
    font = get_font(56)
    cx, cy = 1000, 850
    r = 120

    # Left hexagon (benzene)
    draw_hexagon(draw, cx - 200, cy, r)
    # Middle hexagon
    draw_hexagon(draw, cx, cy, r)
    # Right ring with O
    points = []
    for i in range(6):
        angle = math.pi / 3 * i - math.pi / 2
        px = cx + 200 + r * math.cos(angle)
        py = cy + r * math.sin(angle)
        points.append((px, py))
    for i in range(6):
        draw_bond(draw, points[i][0], points[i][1], points[(i+1)%6][0], points[(i+1)%6][1])
    add_label(draw, "O", points[0][0], points[0][1], font)

    # Alkyl side chain
    sx, sy = cx - 200 - r * math.cos(math.pi/6), cy + r * math.sin(math.pi/6)
    chain = [(sx, sy), (sx - 80, sy + 40), (sx - 160, sy), (sx - 240, sy + 40), (sx - 320, sy)]
    for i in range(len(chain) - 1):
        draw_bond(draw, chain[i][0], chain[i][1], chain[i+1][0], chain[i+1][1])
    add_label(draw, "CH\u2083", chain[-1][0] - 10, chain[-1][1], font)

    # Methyl group
    add_label(draw, "CH\u2083", cx, cy - r - 20, font)
    draw_bond(draw, cx, cy - r, cx, cy - r - 15)

    # OH group
    add_label(draw, "OH", cx + 200 + r + 20, cy - r + 20, font)

    add_title(draw, "CANNABIS", "(THC / MARIJUANA)", 2000, 2000)
    img.save(f"{OUTPUT_DIR}/cannabis.png", "PNG")
    print("OK cannabis.png")

# ============================================================
# 2. BARBITURATES — Phenobarbital molecule (simplified)
# ============================================================
def create_barbiturate():
    img = create_canvas(2000)
    draw = ImageDraw.Draw(img)
    font = get_font(56)
    cx, cy = 1000, 800
    r = 120

    # Barbituric acid ring
    points = []
    for i in range(6):
        angle = math.pi / 3 * i - math.pi / 2
        px = cx + r * math.cos(angle)
        py = cy + r * math.sin(angle)
        points.append((px, py))
    for i in range(6):
        draw_bond(draw, points[i][0], points[i][1], points[(i+1)%6][0], points[(i+1)%6][1])

    # C=O groups
    draw_double_bond(draw, points[1][0], points[1][1], points[1][0] + 80, points[1][1] - 60)
    add_label(draw, "O", points[1][0] + 90, points[1][1] - 70, font)
    draw_double_bond(draw, points[3][0], points[3][1], points[3][0] + 80, points[3][1] - 60)
    add_label(draw, "O", points[3][0] + 90, points[3][1] - 70, font)

    # NH groups
    add_label(draw, "NH", points[5][0] - 30, points[5][1] + 40, font)
    add_label(draw, "NH", points[2][0] + 30, points[2][1] + 40, font)

    # Phenyl ring
    draw_hexagon(draw, cx - 280, cy - 80, r - 20)
    draw_bond(draw, points[4][0], points[4][1], cx - 200, cy - 80)

    # Ethyl group
    add_label(draw, "CH\u2082", cx - 80, cy + 120, font)
    draw_bond(draw, points[4][0], points[4][1] - 10, cx - 80, cy + 100)
    add_label(draw, "CH\u2083", cx - 80, cy + 200, font)
    draw_bond(draw, cx - 80, cy + 130, cx - 80, cy + 180)

    add_title(draw, "BARBITURATES", "(PHENOBARBITAL)", 2000, 2000)
    img.save(f"{OUTPUT_DIR}/barbiturate.png", "PNG")
    print("OK barbiturate.png")

# ============================================================
# 3. INHALANTS — Toluene molecule
# ============================================================
def create_inhalants():
    img = create_canvas(2000)
    draw = ImageDraw.Draw(img)
    font = get_font(56)
    cx, cy = 1000, 850
    r = 140

    draw_hexagon(draw, cx, cy, r)
    mx, my = cx, cy + r + 60
    draw_bond(draw, cx, cy + r, mx, my)
    add_label(draw, "CH\u2083", mx, my + 10, font)

    add_title(draw, "INHALANTS", "(TOLUENE / SOLVENTS)", 2000, 2000)
    img.save(f"{OUTPUT_DIR}/inhalants.png", "PNG")
    print("OK inhalants.png")

# ============================================================
# 4. WITHDRAWAL STATE — Neurotransmitter imbalance
# ============================================================
def create_withdrawal():
    img = create_canvas(2000)
    draw = ImageDraw.Draw(img)
    font = get_font(56)
    font_small = get_font(40)
    cx, cy = 1000, 800

    # Neuron 1 (circle)
    draw.ellipse([cx-120, cy-120, cx+120, cy+120], outline="black", width=4)
    # Axon
    draw.line([(cx+120, cy), (cx+400, cy)], fill="black", width=4)
    # Synaptic cleft
    draw.line([(cx+400, cy-80), (cx+400, cy+80)], fill="black", width=2)
    # Neuron 2
    draw.ellipse([cx+420, cy-100, cx+620, cy+100], outline="black", width=4)

    # Neurotransmitter arrows
    arrows = [
        (cx+250, cy-40, "\u2193"), (cx+300, cy+30, "\u2193"),
        (cx+350, cy-20, "\u2193"),
        (cx+150, cy-60, "\u2191"), (cx+200, cy+50, "\u2191"),
    ]
    big_font = get_font(60)
    for px, py, arrow in arrows:
        draw.text((px-12, py-20), arrow, fill="black", font=big_font)

    # Labels
    add_label(draw, "GABA \u2193", cx - 50, cy + 200, font_small)
    add_label(draw, "Glutamate \u2191", cx + 350, cy + 200, font_small)
    add_label(draw, "Dopamine \u2193", cx + 150, cy - 200, font_small)

    add_title(draw, "WITHDRAWAL", "(NEUROTRANSMITTER IMBALANCE)", 2000, 2000)
    img.save(f"{OUTPUT_DIR}/withdrawal.png", "PNG")
    print("OK withdrawal.png")

# Generate all
print("Generating molecule artwork...")
create_cannabis()
create_barbiturate()
create_inhalants()
create_withdrawal()
print("Done!")
