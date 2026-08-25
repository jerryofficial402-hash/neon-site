import subprocess

print("=== TESTING API/GONE.JS ES MODULE SYNTAX ===")
try:
    res = subprocess.run(
        ["node", "-e", "import('./api/gone.js').then(m => console.log('ESM Import Success! Handler:', typeof m.default));"],
        cwd=r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site",
        capture_output=True,
        text=True
    )
    print("STDOUT:", res.stdout.strip())
    print("STDERR:", res.stderr.strip())
    if res.returncode == 0 and "function" in res.stdout:
        print("SUCCESS: api/gone.js ES Module syntax verified!")
    else:
        print("ERROR: Failed ES Module check.")
except Exception as e:
    print("Execution error:", e)
