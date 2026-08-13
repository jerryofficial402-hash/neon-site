import os

def main():
    target_dir = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
    search_str = "Neon Auto Transport Inc."
    replace_str = "Neon Auto Transport LLC"

    modified_count = 0

    for root, _, files in os.walk(target_dir):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    if search_str in content:
                        new_content = content.replace(search_str, replace_str)
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        modified_count += 1
                        print(f"Modified: {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

    print(f"Total files modified: {modified_count}")

if __name__ == "__main__":
    main()
