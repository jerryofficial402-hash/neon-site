import os

statesData = [
    { "name": "Alabama", "abbr": "AL", "cities": ["Birmingham", "Montgomery", "Huntsville", "Mobile"] },
    { "name": "Alaska", "abbr": "AK", "cities": ["Anchorage", "Fairbanks", "Juneau", "Sitka"] },
    { "name": "Arizona", "abbr": "AZ", "cities": ["Phoenix", "Tucson", "Mesa", "Chandler"] },
    { "name": "Arkansas", "abbr": "AR", "cities": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"] },
    { "name": "California", "abbr": "CA", "cities": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"] },
    { "name": "Colorado", "abbr": "CO", "cities": ["Denver", "Colorado Springs", "Aurora", "Fort Collins"] },
    { "name": "Connecticut", "abbr": "CT", "cities": ["Bridgeport", "New Haven", "Stamford", "Hartford"] },
    { "name": "Delaware", "abbr": "DE", "cities": ["Wilmington", "Dover", "Newark", "Middletown"] },
    { "name": "Florida", "abbr": "FL", "cities": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg"] },
    { "name": "Georgia", "abbr": "GA", "cities": ["Atlanta", "Augusta", "Columbus", "Macon"] },
    { "name": "Hawaii", "abbr": "HI", "cities": ["Honolulu", "Pearl City", "Hilo", "Kailua"] },
    { "name": "Idaho", "abbr": "ID", "cities": ["Boise", "Meridian", "Nampa", "Idaho Falls"] },
    { "name": "Illinois", "abbr": "IL", "cities": ["Chicago", "Aurora", "Naperville", "Joliet"] },
    { "name": "Indiana", "abbr": "IN", "cities": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"] },
    { "name": "Iowa", "abbr": "IA", "cities": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"] },
    { "name": "Kansas", "abbr": "KS", "cities": ["Wichita", "Overland Park", "Kansas City", "Olathe"] },
    { "name": "Kentucky", "abbr": "KY", "cities": ["Louisville", "Lexington", "Bowling Green", "Owensboro"] },
    { "name": "Louisiana", "abbr": "LA", "cities": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"] },
    { "name": "Maine", "abbr": "ME", "cities": ["Portland", "Lewiston", "Bangor", "South Portland"] },
    { "name": "Maryland", "abbr": "MD", "cities": ["Baltimore", "Columbia", "Germantown", "Silver Spring"] },
    { "name": "Massachusetts", "abbr": "MA", "cities": ["Boston", "Worcester", "Springfield", "Cambridge"] },
    { "name": "Michigan", "abbr": "MI", "cities": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"] },
    { "name": "Minnesota", "abbr": "MN", "cities": ["Minneapolis", "St. Paul", "Rochester", "Duluth"] },
    { "name": "Mississippi", "abbr": "MS", "cities": ["Jackson", "Gulfport", "Southaven", "Biloxi"] },
    { "name": "Missouri", "abbr": "MO", "cities": ["Kansas City", "St. Louis", "Springfield", "Columbia"] },
    { "name": "Montana", "abbr": "MT", "cities": ["Billings", "Missoula", "Great Falls", "Bozeman"] },
    { "name": "Nebraska", "abbr": "NE", "cities": ["Omaha", "Lincoln", "Bellevue", "Grand Island"] },
    { "name": "Nevada", "abbr": "NV", "cities": ["Las Vegas", "Henderson", "Reno", "North Las Vegas"] },
    { "name": "New Hampshire", "abbr": "NH", "cities": ["Manchester", "Nashua", "Concord", "Derry"] },
    { "name": "New Jersey", "abbr": "NJ", "cities": ["Newark", "Jersey City", "Paterson", "Elizabeth"] },
    { "name": "New Mexico", "abbr": "NM", "cities": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"] },
    { "name": "New York", "abbr": "NY", "cities": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"] },
    { "name": "North Carolina", "abbr": "NC", "cities": ["Charlotte", "Raleigh", "Greensboro", "Durham"] },
    { "name": "North Dakota", "abbr": "ND", "cities": ["Fargo", "Bismarck", "Grand Forks", "Minot"] },
    { "name": "Ohio", "abbr": "OH", "cities": ["Columbus", "Cleveland", "Cincinnati", "Toledo"] },
    { "name": "Oklahoma", "abbr": "OK", "cities": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"] },
    { "name": "Oregon", "abbr": "OR", "cities": ["Portland", "Salem", "Eugene", "Gresham"] },
    { "name": "Pennsylvania", "abbr": "PA", "cities": ["Philadelphia", "Pittsburgh", "Allentown", "Erie"] },
    { "name": "Rhode Island", "abbr": "RI", "cities": ["Providence", "Cranston", "Warwick", "Pawtucket"] },
    { "name": "South Carolina", "abbr": "SC", "cities": ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"] },
    { "name": "South Dakota", "abbr": "SD", "cities": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"] },
    { "name": "Tennessee", "abbr": "TN", "cities": ["Nashville", "Memphis", "Knoxville", "Chattanooga"] },
    { "name": "Texas", "abbr": "TX", "cities": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"] },
    { "name": "Utah", "abbr": "UT", "cities": ["Salt Lake City", "West Valley City", "Provo", "West Jordan"] },
    { "name": "Vermont", "abbr": "VT", "cities": ["Burlington", "South Burlington", "Rutland", "Barre"] },
    { "name": "Virginia", "abbr": "VA", "cities": ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"] },
    { "name": "Washington", "abbr": "WA", "cities": ["Seattle", "Spokane", "Tacoma", "Vancouver"] },
    { "name": "Washington D.C.", "abbr": "DC", "cities": ["Washington"] },
    { "name": "West Virginia", "abbr": "WV", "cities": ["Charleston", "Huntington", "Morgantown", "Parkersburg"] },
    { "name": "Wisconsin", "abbr": "WI", "cities": ["Milwaukee", "Madison", "Green Bay", "Kenosha"] },
    { "name": "Wyoming", "abbr": "WY", "cities": ["Cheyenne", "Casper", "Laramie", "Gillette"] }
]

def get_slug(name):
    return name.lower().replace(" ", "-").replace(".", "")

for state in statesData:
    slug_state = get_slug(state["name"])
    if slug_state == "washington-dc":
        file_path = "washington-dc-car-shipping/index.html"
    else:
        file_path = f"{slug_state}-car-shipping/index.html"
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "Cities We Serve in" in content:
        continue

    links = []
    for city in state["cities"]:
        city_slug = get_slug(city)
        url = f"/routes/city/{city_slug}-{state['abbr'].lower()}.html"
        links.append(f'<a href="{url}" class="hover:text-[#0a2540] transition">{city}</a>')
    links_html = "\n        ".join(links)

    cities_html = f"""
<!-- Cities We Serve -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12">
    <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Cities We Serve in {state["name"]}</h2>
    <p class="text-[#425466] mb-8 leading-relaxed">Neon Auto Transport provides car shipping services to cities throughout {state["name"]}. Click on any major metro area below to learn more about auto transport options in that region.</p>
    
    <div class="font-bold text-[#635bff] mb-4 text-sm uppercase tracking-wider">{len(state["cities"])} major cities served in {state["name"]}</div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-sm text-[#468de6] font-semibold">
        {links_html}
    </div>
</div>
"""

    if "<!-- FAQs -->" in content:
        content = content.replace("<!-- FAQs -->", cities_html + "\n<!-- FAQs -->")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Patched {file_path}")
    else:
        print(f"No FAQs found in {file_path}")
