import os

hosts_path = r"C:\Windows\System32\drivers\etc\hosts"
try:
    with open(hosts_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    # Remove the null bytes / utf-16 corruption
    content = content.replace("\x00", "")
    content = content.replace("2 0 . 2 0 7 . 7 3 . 8 2", "20.207.73.82")
    content = content.replace("g i t h u b . c o m", "github.com")
    
    with open(hosts_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    # Ensure a proper line is at the end
    with open(hosts_path, "a", encoding="utf-8") as f:
        f.write("\n20.207.73.82 github.com\n")
        
    print("Hosts fixed")
except Exception as e:
    print(f"Error: {e}")
