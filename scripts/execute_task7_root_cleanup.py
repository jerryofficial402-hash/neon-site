import os
import shutil

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SCRATCH_DIR = os.path.join(SITE_DIR, "scratch")
os.makedirs(SCRATCH_DIR, exist_ok=True)

# Root files to clean up
root_cleanup_targets = [
    "neon-site-deploy.zip",
    "bump-cache.cjs",
    "user_template.md",
    "original_index",
    "original_utf8",
    "services-grid",
    "slider",
    "tailwind-output.css"
]

moved_count = 0

for item in os.listdir(SITE_DIR):
    item_path = os.path.join(SITE_DIR, item)
    if item in root_cleanup_targets:
        target_path = os.path.join(SCRATCH_DIR, item)
        if os.path.isdir(item_path):
            if os.path.exists(target_path):
                shutil.rmtree(target_path)
            shutil.move(item_path, target_path)
        else:
            if os.path.exists(target_path):
                os.remove(target_path)
            shutil.move(item_path, target_path)
        moved_count += 1

print(f"SUCCESS: Executed Task 7 — Cleaned up {moved_count} non-page scratch files from site root!")
