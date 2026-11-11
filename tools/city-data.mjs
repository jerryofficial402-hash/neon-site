// Local content for the 20 city pages we keep indexed (tools/city-content.mjs builds the pages from it).
// Only well-known, checkable local facts: highways, bases, universities, ports, seasons. No prices, no reviews.
// near: other city pages (routes/city/<slug>) or site paths; routes: destination keys from DEST in city-content.mjs.

export const CITIES = {
  'glendale-az': {
    name: 'Glendale', st: 'AZ', state: 'Arizona', ll: [33.54, -112.19],
    about: [
      'Glendale sits in the West Valley, next to Phoenix, and most shipments here move people in or out of the Phoenix metro: job moves, winter residents and airmen on orders for nearby Luke Air Force Base.',
      'Carriers reach Glendale easily. Loop 101 runs along its west side, I-10 sits to the south, and Grand Avenue (US-60) cuts across town. Car haulers already run Phoenix lanes every day, so Glendale pickups are usually quick to fill.',
    ],
    local: [
      'Westgate, around State Farm Stadium and Desert Diamond Arena, has big lots that make an easy meeting point on non-event days.',
      'Many newer neighborhoods have HOA rules or narrow streets that a 75-foot truck cannot use. Your driver may ask to meet at a nearby store or school lot instead.',
      'If you are on PCS orders at Luke AFB, tell us your report date and we plan pickup or delivery around it.',
    ],
    season: 'Winter residents push prices up twice a year: heading into Arizona from October to December, and heading north from March to May. Summer is quieter, but it is very hot, often above 110°F. Drivers prefer early-morning pickups then, and a car battery that is already weak may not start after sitting on a hot trailer.',
    routes: ['LA', 'LV', 'DEN', 'DAL', 'SEA', 'CHI'],
    faq: [
      ['Can you pick up on base at Luke AFB?', 'Base access depends on the gate and the driver\'s credentials, so most military pickups happen just outside the base. We confirm the exact meeting point when the driver is assigned.'],
      ['How far ahead should I book a Glendale shipment?', 'One to two weeks is enough most of the year. For March to May, when winter residents head north, book two to three weeks ahead.'],
    ],
    near: ['phoenix-az', 'scottsdale-az', 'tempe-az', 'mesa-az', 'chandler-az', 'gilbert-az'],
    links: [['/services/military-car-shipping/', 'Military car shipping'], ['/services/snow-bird-car-shipping/', 'Snowbird car shipping']],
  },
  'scottsdale-az': {
    name: 'Scottsdale', st: 'AZ', state: 'Arizona', ll: [33.49, -111.93],
    about: [
      'Scottsdale ships more high-value cars than most Arizona cities. Collectors, seasonal residents and buyers from the collector car auctions held here every January all need transport that protects the paint.',
      'Loop 101 (Pima Freeway) wraps the east and north side of the city and connects to I-17 and US-60, so carriers move in and out without long detours. Most Scottsdale customers choose enclosed transport for exotics, classics and fresh restorations, and open transport for daily drivers.',
    ],
    local: [
      'Gated and HOA communities in north Scottsdale often do not allow full-size car haulers. A nearby shopping center lot works well for the handoff.',
      'Enclosed carriers book up fast around the January auctions. Reserve early if you are buying or selling that week.',
      'Low cars need a liftgate or ramps. Tell us the ride height when you book so we send the right trailer.',
    ],
    season: 'October to December brings winter residents in, and March to May takes them home. Both stretches cost more and need more notice. January auction weeks are the busiest time for enclosed trailers.',
    routes: ['LA', 'LV', 'SD', 'DEN', 'CHI', 'NY'],
    faq: [
      ['Should I ship my car enclosed from Scottsdale?', 'For classics, exotics, new paint or anything you would not park outside, yes. For a normal daily driver, open transport is safe and costs less.'],
      ['Can you move a car I bought at a Scottsdale auction?', 'Yes. Send us the lot number and pickup window, and we schedule the carrier around the auction\'s release rules.'],
    ],
    near: ['phoenix-az', 'tempe-az', 'mesa-az', 'glendale-az', 'gilbert-az', 'chandler-az'],
    links: [['/services/enclosed-auto-transport/', 'Enclosed auto transport'], ['/services/luxury-car-shipping/', 'Luxury and exotic car shipping'], ['/services/auto-auction-shipping/', 'Auto auction shipping']],
  },
  'gilbert-az': {
    name: 'Gilbert', st: 'AZ', state: 'Arizona', ll: [33.35, -111.79],
    about: [
      'Gilbert is one of the fastest-growing towns in the East Valley, and a lot of its car shipping comes from families moving in from California, the Midwest and the Pacific Northwest.',
      'The Santan Freeway (Loop 202) and the Superstition Freeway (US-60) are the main truck routes. Carriers coming from I-10 reach most Gilbert neighborhoods in minutes, which keeps pickups simple.',
    ],
    local: [
      'Most of Gilbert is master-planned neighborhoods with HOA rules on large trucks. Plan for a meeting spot at a nearby park-and-ride, school or store lot.',
      'Moving with a household mover? Ship the car a few days after the moving truck, so someone is home to sign the delivery inspection.',
      'Leave about a quarter tank of gas and no personal items in the car. That keeps it within carrier weight and insurance rules.',
    ],
    season: 'Summer is the main moving season for families, so June to August fills fastest. Winter residents add to demand from October to December and from March to May.',
    routes: ['LA', 'SD', 'LV', 'SEA', 'DEN', 'DAL'],
    faq: [
      ['How long does car shipping from California to Gilbert take?', 'From Southern California it is usually one to three days once the car is picked up. From Northern California it is usually two to four.'],
      ['Do I need to be home for pickup in Gilbert?', 'You or someone you trust needs to be there to hand over the keys and sign the inspection report. It does not have to be the owner.'],
    ],
    near: ['mesa-az', 'chandler-az', 'tempe-az', 'phoenix-az', 'scottsdale-az', 'tucson-az'],
    links: [['/services/door-to-door-car-shipping/', 'Door-to-door car shipping'], ['/services/car-shipping-to-another-state/', 'Shipping a car to another state']],
  },
  'tempe-az': {
    name: 'Tempe', st: 'AZ', state: 'Arizona', ll: [33.43, -111.94],
    about: [
      'Tempe is home to Arizona State University\'s main campus, so a large share of its shipments are students and their families moving a car at the start or end of the school year.',
      'Few cities have better freeway access. I-10, Loop 101, Loop 202 and US-60 all pass through or along Tempe, and carriers working the Phoenix area pass by every day.',
    ],
    local: [
      'Around campus and downtown Mill Avenue, streets are tight and parking is limited. Meeting in a larger lot away from the center is faster for everyone.',
      'Apartment complexes often have gates and low entrances. Check with your leasing office and tell us before pickup day.',
      'Students can ship one way to Tempe in August and back home in May. Book both legs early, because those weeks are busy nationwide.',
    ],
    season: 'Expect the most demand in early August, before the fall semester, and in May after finals. Winter residents add to the busy stretches from October to December and from March to May.',
    routes: ['LA', 'SD', 'CHI', 'SEA', 'DEN', 'DAL'],
    faq: [
      ['Is it cheaper to ship a car to ASU or drive it?', 'For a few hundred miles, driving can cost less. For cross-country moves, shipping usually comes close to the cost of gas, hotels and lost days, and it saves wear on the car.'],
      ['Can a parent book the shipment for a student?', 'Yes. Anyone can book and pay. The student, or someone they choose, just needs to be at pickup or delivery to sign the inspection.'],
    ],
    near: ['phoenix-az', 'scottsdale-az', 'mesa-az', 'chandler-az', 'gilbert-az', 'glendale-az'],
    links: [['/services/college-car-shipping/', 'College car shipping']],
  },
  'hammond-in': {
    name: 'Hammond', st: 'IN', state: 'Indiana', ll: [41.58, -87.50],
    about: [
      'Hammond sits in the northwest corner of Indiana, right on the Illinois line and about 25 miles from downtown Chicago. For carriers it is part of the Chicago market, which is one of the busiest car shipping hubs in the country.',
      'The Borman Expressway (I-80/94) and the Indiana Toll Road (I-90) run through the area. Trucks heading east or west across the country pass Hammond constantly, so finding a carrier here is rarely the hard part.',
    ],
    local: [
      'Older neighborhoods have narrow streets and alley garages. Your driver may load from the nearest wide road or a store lot.',
      'Road salt in winter is hard on cars. Wash the car before shipping it so the inspection report clearly shows its condition.',
      'Many Hammond customers ship a car to Florida or Arizona for the winter. Book that move early in the fall.',
    ],
    season: 'Lake-effect snow can delay pickups from December to February, so build a day or two of slack into winter plans. Fall is busy with drivers heading south for the winter, and spring is busy with the return trip.',
    routes: ['ORL', 'PHX', 'DAL', 'LA', 'ATL', 'NY'],
    faq: [
      ['Is shipping from Hammond priced like Chicago?', 'Usually, yes. Hammond is on the same main lanes, so carriers treat it like a Chicago-area pickup.'],
      ['Do you ship cars from Hammond to Florida for the winter?', 'Yes. It is one of the most common routes we book for northwest Indiana. Book four to six weeks ahead for October and November.'],
    ],
    near: ['chicago-il', 'joliet-il', 'naperville-il', 'aurora-il', 'south-bend-in', 'indianapolis-in'],
    links: [['/services/snow-bird-car-shipping/', 'Snowbird car shipping']],
  },
  'ann-arbor-mi': {
    name: 'Ann Arbor', st: 'MI', state: 'Michigan', ll: [42.28, -83.74],
    about: [
      'Ann Arbor is a university town first. The University of Michigan brings in students, researchers and faculty from every state and many countries, and a lot of them need a car moved at the start or end of a term or job.',
      'I-94, US-23 and M-14 all reach the city, and Detroit is about 40 miles east. Carriers on Detroit runs add Ann Arbor pickups often.',
    ],
    local: [
      'Central campus and downtown streets are narrow with little parking. A larger lot on the edge of town is usually the easiest place to load.',
      'Student apartments often have tight parking garages. A full-size carrier cannot get in, so plan to meet outside.',
      'If you are moving for a university job, give us your start date and we will plan delivery around it.',
    ],
    season: 'Late August and May are the busiest weeks, matching the U-M calendar. Winter storms from December to February can push pickups back a day or two.',
    routes: ['CHI', 'NY', 'ORL', 'LA', 'DC', 'BOS'],
    faq: [
      ['How long does it take to ship a car from Ann Arbor to California?', 'Usually seven to ten days once the car is picked up. It is about 2,300 miles, much of it on I-80 or I-40.'],
      ['Can you ship a car for an international student or visiting researcher?', 'Yes, within the US. You need the title or registration, or a letter from the owner if the car is not in your name.'],
    ],
    near: ['dearborn-mi', 'flint-mi', 'lansing-mi', 'warren-mi', 'sterling-heights-mi', 'toledo-oh'],
    links: [['/services/college-car-shipping/', 'College car shipping'], ['/services/corporate-relocation/', 'Corporate relocation']],
  },
  'flint-mi': {
    name: 'Flint', st: 'MI', state: 'Michigan', ll: [43.01, -83.69],
    about: [
      'Flint is where General Motors was founded in 1908, and cars are still part of daily life here. People buy and sell vehicles out of state, send cars to family, and move for work across the Midwest and South.',
      'I-75, I-69 and US-23 all meet near Flint, about an hour north of Detroit. That junction puts the city on the main north-south lane through Michigan, so carriers pass through often.',
    ],
    local: [
      'Car haulers stay close to I-75 and I-69. Pickups near those freeways are usually faster to schedule than rural ones farther out in Genesee County.',
      'Bought a car at an online auction? We can pick up from the yard. Just send the lot number and gate pass.',
      'In winter, clear snow from the driveway or meet the driver on a plowed main road.',
    ],
    season: 'Snow from December to February slows schedules. Spring and fall are the easiest times to book. Florida-bound winter moves peak in October and November.',
    routes: ['ORL', 'ATL', 'DAL', 'PHX', 'CHI', 'LA'],
    faq: [
      ['Can you ship a non-running car from Flint?', 'Yes, if it rolls, brakes and steers. It needs a winch, so tell us when you book. Non-running cars cost a little more.'],
      ['How fast can a carrier pick up in Flint?', 'Usually within one to five business days of booking. Expedited service can shorten that.'],
    ],
    near: ['lansing-mi', 'ann-arbor-mi', 'warren-mi', 'sterling-heights-mi', 'grand-rapids-mi', 'dearborn-mi'],
    links: [['/services/auto-auction-shipping/', 'Auto auction shipping'], ['/services/expedited-auto-transport/', 'Expedited transport']],
  },
  'cary-nc': {
    name: 'Cary', st: 'NC', state: 'North Carolina', ll: [35.79, -78.78],
    about: [
      'Cary sits between Raleigh and Research Triangle Park, and many of the people shipping cars here are moving for tech, pharma and university jobs in the Triangle.',
      'I-40, I-540 and US-1/64 frame the town, and Raleigh-Durham International Airport is just to the north. Carriers on I-95 and I-40 runs reach Cary quickly, which keeps pickup windows short.',
    ],
    local: [
      'Many Cary neighborhoods have HOA rules or cul-de-sacs a large carrier cannot turn around in. A nearby shopping center lot is the usual fix.',
      'Relocating for a job in Research Triangle Park? Ask your employer whether car shipping is covered. You get an invoice and inspection reports to submit.',
      'Flying into RDU while your car ships? We can deliver to a meeting point near the airport.',
    ],
    season: 'Summer is peak moving season. From August to October, hurricanes can delay carriers on East Coast routes for a day or two, so add some slack to your plans.',
    routes: ['NY', 'BOS', 'ORL', 'DAL', 'CHI', 'LA'],
    faq: [
      ['How much notice do I need to ship a car from Cary?', 'One to two weeks is comfortable. In summer, two to three weeks gives you more choice of pickup dates.'],
      ['Can you ship a car from Cary to New York?', 'Yes, it is a common route. It is about 500 miles on I-95 and usually takes two to three days after pickup.'],
    ],
    near: ['raleigh-nc', 'durham-nc', 'greensboro-nc', 'charlotte-nc', 'fayetteville-nc', 'wilmington-nc'],
    links: [['/services/corporate-relocation/', 'Corporate relocation']],
  },
  'topeka-ks': {
    name: 'Topeka', st: 'KS', state: 'Kansas', ll: [39.05, -95.68],
    about: [
      'Topeka is the Kansas state capital, about 60 miles west of Kansas City. It sits right on I-70, one of the main cross-country routes car haulers use between the coasts.',
      'That location helps. Carriers crossing the country on I-70 can stop in Topeka without a detour, and the Kansas Turnpike connects south toward Wichita. Fort Riley, about an hour west, also sends a steady stream of soldiers on PCS orders through the area.',
    ],
    local: [
      'Pickups close to I-70 or I-470 are the easiest for carriers to add to a trip.',
      'For rural addresses outside town, we often meet in Topeka itself. That saves you time and money.',
      'Military families moving to or from Fort Riley can ship from Topeka, Manhattan or Junction City, whichever fits your move.',
    ],
    season: 'Plains weather sets the pace. Winter storms and ice can close I-70 for short stretches, and spring storms can bring brief delays. Late summer and fall are usually smooth.',
    routes: ['DEN', 'DAL', 'CHI', 'PHX', 'LA', 'ATL'],
    faq: [
      ['Is Topeka on a main car shipping route?', 'Yes. I-70 runs straight through town, so cross-country carriers pass Topeka all the time.'],
      ['Do you ship cars for soldiers at Fort Riley?', 'Yes. We work around PCS dates and can meet near the base or in Topeka.'],
    ],
    near: ['kansas-city-ks', 'kansas-city-mo', 'lawrence-ks', 'manhattan-ks', 'overland-park-ks', 'wichita-ks'],
    links: [['/services/military-car-shipping/', 'Military car shipping']],
  },
  'canton-oh': {
    name: 'Canton', st: 'OH', state: 'Ohio', ll: [40.80, -81.38],
    about: [
      'Canton is home to the Pro Football Hall of Fame and sits in Stark County, about 20 miles south of Akron and 60 miles south of Cleveland.',
      'I-77 runs north-south through the city and US-30 runs east-west. Carriers working Cleveland, Akron and Pittsburgh lanes add Canton pickups regularly.',
    ],
    local: [
      'The week of the Hall of Fame enshrinement in late summer brings heavy traffic and crowded hotels downtown. Avoid scheduling pickups near the stadium that week.',
      'Many people here ship cars to Florida for the winter, or buy classic cars from out of state. Enclosed transport is available for both.',
      'Pickups near I-77 are quickest. Rural Stark County addresses may need a meeting point in town.',
    ],
    season: 'Northeast Ohio winters bring lake-effect snow, so leave extra time from December to February. The southbound winter rush peaks in October and November.',
    routes: ['ORL', 'ATL', 'NY', 'CHI', 'DAL', 'PHX'],
    faq: [
      ['How long does it take to ship a car from Canton to Florida?', 'Usually three to five days after pickup. It is roughly 1,000 to 1,200 miles, depending on where in Florida.'],
      ['Can you ship a classic car from Canton in an enclosed trailer?', 'Yes. Enclosed carriers keep the car out of the weather and road debris. Book a little earlier, because there are fewer enclosed trucks.'],
    ],
    near: ['akron-oh', 'cleveland-oh', 'parma-oh', 'columbus-oh', 'pittsburgh-pa', 'toledo-oh'],
    links: [['/services/enclosed-auto-transport/', 'Enclosed auto transport'], ['/services/snow-bird-car-shipping/', 'Snowbird car shipping']],
  },
  'alexandria-va': {
    name: 'Alexandria', st: 'VA', state: 'Virginia', ll: [38.80, -77.05],
    about: [
      'Alexandria is close to home for us: our office is in Woodbridge, about 20 miles south on I-95. We ship cars here for federal workers, diplomats, contractors and military families from the Pentagon and Fort Belvoir.',
      'The Capital Beltway (I-495) and I-95 meet at the Woodrow Wilson Bridge on the south side of the city, and Route 1 runs through it. That gives carriers fast access to most of Alexandria.',
    ],
    local: [
      'Old Town has narrow, partly cobblestone streets and tight parking. A full car hauler cannot get through, so we meet on a wider road or in a lot nearby.',
      'Many condo and apartment buildings have garages a carrier cannot enter. The handoff happens out front or around the corner.',
      'PCS move to or from Fort Belvoir? Tell us your report date and we will plan around it.',
    ],
    season: 'Summer is PCS season for military families, so June to August books up fast. The Beltway is slow at rush hour, and pickups usually happen mid-morning or early afternoon.',
    routes: ['ORL', 'NY', 'BOS', 'ATL', 'DAL', 'LA'],
    faq: [
      ['Do you have a local office near Alexandria?', 'Yes. Neon Auto Transport is based at 2709 Neabsco Common Pl, Woodbridge, VA, about 20 miles south of Alexandria.'],
      ['Can you pick up a car in Old Town?', 'Yes, but usually at a nearby wider street or lot rather than at your door. The driver calls ahead to agree on a spot.'],
    ],
    near: ['/car-shipping-arlington-va/', 'fairfax-va', 'washington-dc', '/car-shipping-woodbridge-va/', 'chantilly-va', 'ashburn-va'],
    links: [['/services/military-car-shipping/', 'Military car shipping'], ['/services/corporate-relocation/', 'Corporate relocation']],
  },
  'fairfax-va': {
    name: 'Fairfax', st: 'VA', state: 'Virginia', ll: [38.85, -77.31],
    about: [
      'Fairfax is in the heart of Northern Virginia, home to George Mason University and to many federal contractors. It is about 25 minutes from our Woodbridge office.',
      'I-66, the Capital Beltway, Route 50, Route 29 and the Fairfax County Parkway all serve the area. That means carriers can reach almost any Fairfax address without leaving main roads for long.',
    ],
    local: [
      'Townhouse rows and cul-de-sacs are common, and a large carrier often cannot turn around in them. We usually meet at the end of the street or at a nearby lot.',
      'George Mason students ship cars in August and May. Book those weeks early.',
      'Military families heading to or from Fort Belvoir, about 20 minutes south, can ship from Fairfax on their own schedule.',
    ],
    season: 'Summer is the busiest time, with both job moves and PCS orders. I-66 and the Beltway are slow at rush hour, so drivers try to load mid-day.',
    routes: ['ORL', 'NY', 'ATL', 'DAL', 'LA', 'CHI'],
    faq: [
      ['How fast can you pick up in Fairfax?', 'Usually within one to five business days of booking. Because our office is nearby, local pickups are often on the quicker end, and expedited service can shorten it further.'],
      ['Can you ship a car for a George Mason student?', 'Yes, to or from campus or home. Anyone can book. Someone just needs to be there to sign at pickup and delivery.'],
    ],
    near: ['/car-shipping-arlington-va/', 'alexandria-va', 'chantilly-va', 'ashburn-va', 'washington-dc', '/car-shipping-woodbridge-va/'],
    links: [['/services/college-car-shipping/', 'College car shipping'], ['/services/military-car-shipping/', 'Military car shipping']],
  },
  'ashburn-va': {
    name: 'Ashburn', st: 'VA', state: 'Virginia', ll: [39.04, -77.49],
    about: [
      'Ashburn is in Loudoun County, near Washington Dulles International Airport, and is known for its many data centers. People move here for tech jobs from all over the country.',
      'Route 7 and the Dulles Greenway (VA-267) are the main roads, with Route 28 to the east. Carriers coming from I-95 or I-81 reach Ashburn in under an hour.',
    ],
    local: [
      'Planned communities like Brambleton, Broadlands and Ashburn Farm have HOA rules and curving streets. We usually meet at a nearby shopping center.',
      'Flying into Dulles? We can deliver your car to a meeting point near the airport.',
      'Relocating for work? We send an invoice and the signed inspection reports you can submit for reimbursement.',
    ],
    season: 'Summer is peak moving season. Winter storms are usually short here, but they can push a pickup by a day.',
    routes: ['LA', 'SF', 'SEA', 'DAL', 'ORL', 'NY'],
    faq: [
      ['How long does it take to ship a car from California to Ashburn?', 'Usually seven to ten days after pickup. It is about 2,600 miles.'],
      ['Can I get paperwork for my employer\'s relocation reimbursement?', 'Yes. You get an invoice and the signed inspection reports from pickup and delivery.'],
    ],
    near: ['chantilly-va', 'fairfax-va', 'alexandria-va', '/car-shipping-arlington-va/', 'frederick-md', 'washington-dc'],
    links: [['/services/corporate-relocation/', 'Corporate relocation']],
  },
  'rockville-md': {
    name: 'Rockville', st: 'MD', state: 'Maryland', ll: [39.08, -77.15],
    about: [
      'Rockville is the county seat of Montgomery County, just north of Washington, DC. Many residents work for federal agencies, hospitals and biotech companies along the I-270 corridor, and they move for work often.',
      'I-270 runs through the city and meets the Capital Beltway a few miles south. Rockville Pike (MD-355) is the main local road. Carriers on DC runs reach Rockville easily.',
    ],
    local: [
      'Town Center and the Rockville Pike area are busy with tight parking. A side street or store lot away from the Pike is easier for loading.',
      'Apartment and condo garages are too low for carriers, so plan to meet outside.',
      'From our Woodbridge, VA office, Rockville is a short drive. Local questions get a local answer.',
    ],
    season: 'Summer is the main moving season. Beltway and I-270 rush hours are heavy, so drivers prefer mid-day pickups.',
    routes: ['ORL', 'BOS', 'ATL', 'CHI', 'DAL', 'LA'],
    faq: [
      ['Do you serve Rockville and the rest of Montgomery County?', 'Yes, including Bethesda, Gaithersburg, Germantown and Silver Spring.'],
      ['How long does it take to ship a car from Rockville to Florida?', 'Usually two to four days after pickup, depending on the city in Florida.'],
    ],
    near: ['gaithersburg-md', 'germantown-md', 'silver-spring-md', 'washington-dc', 'columbia-md', 'frederick-md'],
    links: [['/services/corporate-relocation/', 'Corporate relocation'], ['/services/snow-bird-car-shipping/', 'Snowbird car shipping']],
  },
  'gaithersburg-md': {
    name: 'Gaithersburg', st: 'MD', state: 'Maryland', ll: [39.14, -77.20],
    about: [
      'Gaithersburg is in Montgomery County on the I-270 tech corridor and is home to the National Institute of Standards and Technology (NIST) headquarters. Scientists, contractors and federal staff move in and out all year.',
      'I-270 and MD-355 run through the city, and the Intercounty Connector (MD-200) links it east to I-95. That gives carriers several ways in.',
    ],
    local: [
      'The Kentlands and Lakelands neighborhoods have narrow, walkable streets. A full carrier will need to meet on a main road.',
      'Gated apartment complexes along I-270 often need the driver\'s name in advance. Add it to the gate list once we share it.',
      'Pickups close to I-270 are usually the quickest to schedule.',
    ],
    season: 'Summer fills fastest. Winter storms are usually short here, but they can push a pickup back by a day.',
    routes: ['ORL', 'NY', 'ATL', 'DAL', 'CHI', 'LA'],
    faq: [
      ['How quickly can you pick up in Gaithersburg?', 'Usually within one to five business days of booking, faster with expedited service.'],
      ['Can I ship my car and fly out of Dulles or BWI the same day?', 'Yes. Book a pickup a day or two before your flight, or hand the keys to someone you trust.'],
    ],
    near: ['rockville-md', 'germantown-md', 'frederick-md', 'silver-spring-md', 'columbia-md', 'washington-dc'],
    links: [['/services/door-to-door-car-shipping/', 'Door-to-door car shipping']],
  },
  'sacramento-ca': {
    name: 'Sacramento', st: 'CA', state: 'California', ll: [38.58, -121.49],
    about: [
      'Sacramento is California\'s capital and one of the main car shipping hubs in Northern California. I-5 and I-80 cross here, US-50 heads east to Lake Tahoe, and Highway 99 runs south through the Central Valley.',
      'With that many freeways, carriers going north to Oregon, east to Reno and Salt Lake City, or south to Los Angeles all pass through. Sacramento pickups fill quickly most of the year.',
    ],
    local: [
      'Older neighborhoods like Midtown and East Sacramento have tree-lined, narrow streets. A meeting spot on a wider road makes loading faster.',
      'Moving to California? The state asks new residents to register their car within 20 days. Bring your title and plan for a smog check.',
      'Summer heat in the Valley often passes 100°F. Drivers like early pickups, and a weak battery may not start after a hot trip.',
    ],
    season: 'Summer is the busiest time. Winter can bring snow over Donner Pass on I-80, which can slow eastbound carriers for a day or two.',
    routes: ['LA', 'SEA', 'PDX', 'PHX', 'DAL', 'DEN'],
    faq: [
      ['How long does it take to ship a car from Sacramento to Los Angeles?', 'Usually one to two days after pickup. It is about 385 miles on I-5.'],
      ['Do I need a smog check after shipping a car to Sacramento?', 'Most cars registered in California for the first time need one. Check with the California DMV for your vehicle.'],
    ],
    near: ['san-francisco-ca', 'oakland-ca', 'san-jose-ca', 'fresno-ca', 'reno-nv', '/chico-ca-car-shipping/'],
    links: [['/california-car-shipping/', 'California car shipping']],
  },
  'el-paso-tx': {
    name: 'El Paso', st: 'TX', state: 'Texas', ll: [31.76, -106.49],
    about: [
      'El Paso sits at the far west tip of Texas, closer to Phoenix than to Houston. Fort Bliss, one of the largest Army posts in the country, sends a steady flow of soldiers and families on PCS orders through the city.',
      'I-10 runs through El Paso from coast to coast, so carriers between California and the Southeast pass through regularly. US-54 and Loop 375 connect the rest of the city.',
    ],
    local: [
      'For PCS moves to or from Fort Bliss, we work around report dates. Pickup is usually near the base, not on it.',
      'Summer heat often tops 100°F. Drivers prefer morning pickups, and a weak battery may not start after a hot trip.',
      'For the far east side and other rural edges, meeting near I-10 makes scheduling easier.',
    ],
    season: 'Summer PCS season, June to August, fills fastest. Spring winds can sometimes slow carriers in West Texas and New Mexico.',
    routes: ['PHX', 'LA', 'DAL', 'HOU', 'DEN', 'ATL'],
    faq: [
      ['Is El Paso far from other Texas cities for shipping?', 'Yes. Dallas is about 630 miles and Houston about 750, so even in-state shipping here is a long-distance move.'],
      ['Do you ship cars for soldiers at Fort Bliss?', 'Yes, often. Share your orders date and destination and we plan around them.'],
    ],
    near: ['las-cruces-nm', 'albuquerque-nm', 'tucson-az', 'phoenix-az', 'san-antonio-tx', 'austin-tx'],
    links: [['/services/military-car-shipping/', 'Military car shipping']],
  },
  'corpus-christi-tx': {
    name: 'Corpus Christi', st: 'TX', state: 'Texas', ll: [27.80, -97.40],
    about: [
      'Corpus Christi is on the Texas Gulf Coast, about 145 miles southeast of San Antonio on I-37. Naval Air Station Corpus Christi, the port and a large number of winter visitors drive most of the car shipping here.',
      'I-37 is the main carrier route into the city, with US-77 heading south to the Rio Grande Valley and north toward Victoria. Many carriers come in from San Antonio, so pickups are usually scheduled around those trips.',
    ],
    local: [
      'Winter visitors from the Midwest and Canada fill Padre Island and the Coastal Bend from November to March. Book your trip down or home early.',
      'Navy families on PCS orders can schedule around their report dates. Pickup is usually near the air station.',
      'Salt air is hard on paint. Wash the car before pickup so the inspection report shows its true condition.',
    ],
    season: 'Hurricane season runs June to November, and a storm can delay coastal pickups for a few days. Winter visitors push demand up from October to April.',
    routes: ['HOU', 'DAL', 'CHI', 'DEN', 'PHX', 'ATL'],
    faq: [
      ['How long does it take to ship a car from Corpus Christi to Chicago?', 'Usually four to six days after pickup. It is about 1,300 miles.'],
      ['Can a hurricane delay my shipment?', 'Yes. If a storm is coming, carriers wait until roads are safe. We keep you updated and reschedule as quickly as possible.'],
    ],
    near: ['san-antonio-tx', 'houston-tx', 'austin-tx', 'dallas-tx', 'fort-worth-tx', 'el-paso-tx'],
    links: [['/services/snow-bird-car-shipping/', 'Snowbird car shipping'], ['/services/military-car-shipping/', 'Military car shipping']],
  },
  'fort-lauderdale-fl': {
    name: 'Fort Lauderdale', st: 'FL', state: 'Florida', ll: [26.12, -80.14],
    about: [
      'Fort Lauderdale is one of the busiest snowbird cities in the country. Every fall, thousands of cars come down from the Northeast and Midwest, and every spring most of them go back north.',
      'I-95, I-595 and Florida\'s Turnpike all run through Broward County, and Port Everglades sits on the south side of the city. Carriers between Miami and the rest of the East Coast pass through daily.',
    ],
    local: [
      'Many condos and high-rises have garages a carrier cannot enter, and canal neighborhoods have narrow streets. Plan to meet out front or at a nearby lot.',
      'Some buildings require a contractor or vendor pass. Ask your front desk before pickup day.',
      'For overseas shipping from Port Everglades, ask us about international transport.',
    ],
    season: 'Prices rise for cars heading south from October to December and for cars heading north from March to May. Book four to six weeks ahead for those windows. Hurricane season runs June to November and can cause short delays.',
    routes: ['NY', 'BOS', 'CHI', 'DC', 'ATL', 'DAL'],
    faq: [
      ['When is the cheapest time to ship a car to or from Fort Lauderdale?', 'Usually summer and early fall, between the snowbird seasons. Northbound prices are highest from March to May.'],
      ['How long does it take to ship a car from New York to Fort Lauderdale?', 'Usually three to five days after pickup. It is about 1,250 miles on I-95.'],
    ],
    near: ['hialeah-fl', 'st-petersburg-fl', 'jacksonville-fl', 'tallahassee-fl', '/florida-car-shipping/', 'atlanta-ga'],
    links: [['/services/snow-bird-car-shipping/', 'Snowbird car shipping'], ['/services/international-overseas-car-shipping-services/', 'International shipping']],
  },
  'long-beach-ca': {
    name: 'Long Beach', st: 'CA', state: 'California', ll: [33.77, -118.19],
    about: [
      'Long Beach has one of the busiest ports in the country. Along with the cars of people moving in and out of Los Angeles County, many shipments here are headed to the port for Hawaii or overseas.',
      'The I-405, I-710 and I-605 freeways all run through or next to the city, so carriers on Southern California runs reach Long Beach easily.',
    ],
    local: [
      'Belmont Shore, Naples and downtown have narrow streets and tight parking. A carrier will usually meet on a wider road.',
      'Shipping a car to Hawaii? We can take it to the port and handle the drop-off timing.',
      'I-405 and I-710 traffic is heavy at rush hour, so drivers prefer mid-day pickups.',
    ],
    season: 'Summer is the busiest moving season in Southern California. Winter is usually easy, though snow on mountain passes like I-15 and I-80 can slow eastbound trips.',
    routes: ['SEA', 'PHX', 'LV', 'DAL', 'CHI', 'NY'],
    faq: [
      ['Can you get my car to the port for shipping to Hawaii?', 'Yes. We arrange inland transport to the port terminal and coordinate the drop-off with the ocean carrier.'],
      ['How long does it take to ship a car from Long Beach to Texas?', 'Usually three to five days after pickup, depending on the city.'],
    ],
    near: ['san-diego-ca', 'san-jose-ca', 'fresno-ca', 'san-francisco-ca', 'sacramento-ca', 'las-vegas-nv'],
    links: [['/services/hawaii-auto-transport/', 'Hawaii auto transport'], ['/services/international-overseas-car-shipping-services/', 'International shipping']],
  },
};

export const SLUGS = Object.keys(CITIES);
