import os

def fix_state_to_state():
    filepath = 'routes/generate-state-to-state.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the replacements loop block
    replacements_block = """  for (const [key, val] of Object.entries(replacements)) {
    content = content.replace(new RegExp(key, 'g'), val);
  }"""
    
    # Remove it from its original position
    content = content.replace(replacements_block, '')
    
    # Insert it right before "Ensure output is in the ROOT dir"
    target_insert = "// Ensure output is in the ROOT dir"
    content = content.replace(target_insert, replacements_block + '\n\n  ' + target_insert)
    
    # Add DEST2_SLUG to checkStrings
    content = content.replace("'[TRANSIT_LOW]', 'virginia-to-'", "'[TRANSIT_LOW]', '[DEST2_SLUG]', 'virginia-to-'")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_state_pages_cities():
    filepath = 'routes/generate-routes-v2.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    target_cities = 'const newCitiesHTML = "<!-- Cities We Serve -->\\n" + generateCitiesHTML(state) + "\\n\\n                    <!-- FAQs -->";'
    replacement_cities = 'const newCitiesHTML = "<!-- Cities We Serve -->\\n<!-- FAQs -->";'
    
    content = content.replace(target_cities, replacement_cities)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_state_to_state()
fix_state_pages_cities()
print("Successfully patched generator scripts.")
