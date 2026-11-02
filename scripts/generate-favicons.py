"""
Render the Dora Spa SVG favicon to PNG at multiple sizes using Pillow.
Draws the SVG shapes manually at any requested size.
"""
from PIL import Image, ImageDraw
import math, os

OUT = os.path.join(os.path.dirname(__file__), '..', 'public')
os.makedirs(OUT, exist_ok=True)

def render(size):
    """Render the logo at `size`x`size` px."""
    # SVG viewBox is 0 0 120 110 — scale to our canvas
    W = H = size
    sx = W / 120
    sy = H / 110

    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    BG   = (26, 18, 9, 255)    # #1a1209
    FG   = (247, 234, 223, 255) # #F7EADF

    # Rounded-rect background
    r = max(1, int(16 * sx))
    draw.rounded_rectangle([0, 0, W-1, H-1], radius=r, fill=BG)

    def pt(x, y):
        return (x * sx, y * sy)

    # Path 1 – teardrop top
    draw.polygon([pt(60,4),pt(55,9),pt(51,14),pt(45,21),pt(47,28),
                  pt(53,33),pt(60,33),pt(67,33),pt(73,28),pt(75,21),
                  pt(69,14),pt(65,9)], fill=FG)

    # Path 2 – wide middle band
    draw.ellipse([pt(22,40), pt(107,72)], fill=FG)

    # Path 3 – lower band
    draw.ellipse([pt(37,68), pt(93,90)], fill=FG)

    # Path 4 – base / widest band
    draw.ellipse([pt(17,89), pt(111,108)], fill=FG)

    return img


sizes = {
    'favicon-16x16.png':   16,
    'favicon-32x32.png':   32,
    'apple-touch-icon.png':180,
    'favicon-192x192.png': 192,
    'favicon-512x512.png': 512,
}

for name, sz in sizes.items():
    img = render(sz)
    path = os.path.join(OUT, name)
    img.save(path, 'PNG')
    print(f'✓  {name}  ({sz}x{sz})')

# Also save a 32x32 as .ico
img32 = render(32)
img32.save(os.path.join(OUT, 'favicon.ico'), format='ICO', sizes=[(32,32),(16,16)])
print('✓  favicon.ico')
print('Done!')
