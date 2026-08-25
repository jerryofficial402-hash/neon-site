import os
import shutil

BRAIN_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\brain\5f8bf77f-bbf0-4260-abcb-110c028b6bb5"
DEST_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\images"

if not os.path.exists(DEST_DIR):
    os.makedirs(DEST_DIR)

mappings = {
    "enclosed_car_shipping_cover_1787693031181.jpg": "enclosed-auto-transport-guide-hero.jpg",
    "expedited_car_shipping_cover_1787693121104.jpg": "expedited-auto-transport-guide-hero.jpg",
    "door_to_door_shipping_cover_1787693147801.jpg": "door-to-door-car-shipping-guide-hero.jpg"
}

for src_name, dest_name in mappings.items():
    src_path = os.path.join(BRAIN_DIR, src_name)
    dest_path = os.path.join(DEST_DIR, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"SUCCESS: Copied {src_name} -> {dest_path}")
    else:
        print(f"ERROR: Could not find {src_path}")
