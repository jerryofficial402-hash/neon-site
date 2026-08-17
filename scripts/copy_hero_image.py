import shutil
import os

src = r"C:\Users\DYNABOOK\.gemini\antigravity\brain\5f8bf77f-bbf0-4260-abcb-110c028b6bb5\open_auto_transport_hero_1786998937720.jpg"
dst_dir = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\images"
os.makedirs(dst_dir, exist_ok=True)
dst = os.path.join(dst_dir, "open-auto-transport-hero.jpg")

shutil.copy(src, dst)
print(f"SUCCESS: Copied hero image to {dst}")
