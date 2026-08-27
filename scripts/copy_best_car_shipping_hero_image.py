import os
import shutil

SOURCE_IMG = r"C:\Users\DYNABOOK\.gemini\antigravity\brain\5f8bf77f-bbf0-4260-abcb-110c028b6bb5\.user_uploaded\media_1787682550297.jpg"
DEST_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\images"
DEST_IMG = os.path.join(DEST_DIR, "best-car-shipping-companies-hero.jpg")

if not os.path.exists(DEST_DIR):
    os.makedirs(DEST_DIR)

if os.path.exists(SOURCE_IMG):
    shutil.copy2(SOURCE_IMG, DEST_IMG)
    print(f"SUCCESS: Copied hero image to {DEST_IMG}")
else:
    print(f"ERROR: Source image not found at {SOURCE_IMG}")
