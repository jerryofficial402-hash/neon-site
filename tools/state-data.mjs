// State-specific content for the 38 state pages that shared most of their text with each other.
// tools/state-content.mjs swaps the copied template blocks for this. Well-known, checkable facts only:
// interstates, metros, bases, ports, weather, which office registers cars. No prices, no reviews, no deadlines
// we cannot vouch for (readers are pointed to the state office instead).
// cities: routes/city slugs to link (only existing pages are linked).

export const STATES = {
  ohio: {
    name: 'Ohio', abbr: 'OH', office: 'the Ohio Bureau of Motor Vehicles (BMV)',
    about: [
      'Ohio sits between the East Coast and the Midwest, and several of the country\'s busiest truck routes cross it. I-70 runs east-west through Columbus, I-75 runs north-south from Toledo through Dayton to Cincinnati, I-71 links Cleveland, Columbus and Cincinnati, and the Ohio Turnpike (I-80/90) runs along the north.',
      'With that many through routes, carriers move in and out of Ohio every day. Cars from Columbus, Cleveland or Cincinnati are usually the quickest to schedule. Smaller towns are reachable too, often with a meeting point near the closest interstate.',
    ],
    tips: [
      'Northeast Ohio, from Cleveland to Ashtabula, gets heavy lake-effect snow. Winter pickups there can slip a day.',
      'Military families at Wright-Patterson AFB near Dayton can plan pickup around their PCS dates.',
      'Columbus is one of the easiest pickup cities in the state, because I-70 and I-71 cross there.',
    ],
    season: 'Fall is the busiest season for southbound moves, as Ohio snowbirds head to Florida and Arizona. Spring brings them back. Summer is the main moving season for families and Ohio State students.',
    faq: [
      ['Which Ohio cities are easiest to ship from?', 'Columbus, Cleveland, Cincinnati, Dayton and Toledo. All sit on major interstates that carriers already drive every day.'],
      ['How long does it take to ship a car from Ohio to Florida?', 'Usually three to five days after pickup. It is roughly 1,000 to 1,200 miles, depending on where in Florida.'],
    ],
    cities: ['columbus-oh', 'cleveland-oh', 'cincinnati-oh', 'toledo-oh', 'akron-oh', 'dayton-oh'],
  },
  pennsylvania: {
    name: 'Pennsylvania', abbr: 'PA', office: 'PennDOT',
    about: [
      'Pennsylvania is wide, and its two big metros are on opposite ends: Philadelphia in the east and Pittsburgh in the west. The Pennsylvania Turnpike (I-76) connects them, I-80 crosses the middle of the state, I-81 runs through Harrisburg and the Lehigh Valley, and I-95 runs along Philadelphia.',
      'Eastern Pennsylvania is on the I-95 corridor, so carriers there are scheduled like New York and Washington pickups. The middle of the state is mountainous and more rural, and pickups there often meet near I-80 or I-81.',
    ],
    tips: [
      'In Philadelphia\'s rowhouse neighborhoods, the streets are too narrow for a car hauler. Plan to meet on a wider road.',
      'Carlisle hosts large collector car shows several times a year. Book enclosed transport early for those weeks.',
      'Winter storms in the Alleghenies can close or slow the Turnpike and I-80 for short periods.',
    ],
    season: 'Spring and summer are peak moving seasons. Fall brings the snowbird rush south. Winter weather in the central mountains is the main source of delays.',
    faq: [
      ['Is it faster to ship from Philadelphia or Pittsburgh?', 'Both are major pickup cities. Philadelphia benefits from the busy I-95 corridor, and Pittsburgh from I-76, I-79 and I-70.'],
      ['Can you ship a classic car to a Carlisle show?', 'Yes. Enclosed carriers deliver to show grounds regularly. Share the event dates and drop-off rules when you book.'],
    ],
    cities: ['philadelphia-pa', 'pittsburgh-pa', 'allentown-pa', 'erie-pa', 'bethlehem-pa', 'lancaster-pa'],
  },
  illinois: {
    name: 'Illinois', abbr: 'IL', office: 'the Illinois Secretary of State',
    about: [
      'Chicago is one of the biggest freight hubs in the country, and that makes Illinois one of the easiest states to ship a car from. I-90, I-94, I-55, I-57, I-80 and I-88 all meet in or near the city, connecting it to both coasts and the South.',
      'Downstate Illinois is served by I-55 (Chicago to St. Louis), I-57, I-74 and I-70. Pickups near Springfield, Champaign, Peoria or the Metro East area around St. Louis are routine.',
    ],
    tips: [
      'Many Chicago neighborhoods have narrow streets, alleys and permit parking. Expect to meet your driver on a main street.',
      'Chicago winters are hard. Pickups from December to February may need an extra day of flexibility.',
      'Naval Station Great Lakes and Scott AFB families can plan pickup around PCS dates.',
    ],
    season: 'Chicago snowbirds head to Florida and Arizona from October to December and come back from March to May. Summer is busy with family and student moves.',
    faq: [
      ['Is Chicago a good place to ship a car from?', 'Yes. So many carriers pass through Chicago that pickups are usually quick to schedule, even on short notice.'],
      ['How long does it take to ship a car from Illinois to California?', 'Usually five to eight days after pickup. Chicago to Los Angeles is about 2,000 miles.'],
    ],
    cities: ['chicago-il', 'naperville-il', 'aurora-il', 'joliet-il'],
  },
  indiana: {
    name: 'Indiana', abbr: 'IN', office: 'the Indiana Bureau of Motor Vehicles (BMV)',
    about: [
      'Indiana calls itself the Crossroads of America, and for car haulers that is accurate. More interstates meet in Indianapolis than in almost any other city: I-65, I-69, I-70 and I-74.',
      'Northwest Indiana, around Gary and Hammond, is part of the Chicago market. Northern Indiana sits on the Indiana Toll Road (I-80/90), and southern Indiana is reached by I-64 and I-69 through Evansville.',
    ],
    tips: [
      'Indianapolis is the easiest pickup city in the state because so many routes meet there.',
      'In May, crowds around the Indianapolis 500 can slow pickups near the Speedway. Plan around race weekend.',
      'Rural pickups usually meet near the nearest interstate exit to save time.',
    ],
    season: 'Winter storms can slow northern Indiana, especially near Lake Michigan. Fall and spring are busy with snowbird moves to and from Florida.',
    faq: [
      ['Is Indianapolis on a major car shipping route?', 'Yes. I-65, I-69, I-70 and I-74 all meet there, so many cross-country carriers pass through.'],
      ['Do you ship cars from northwest Indiana?', 'Yes. Hammond, Gary and nearby towns are priced and scheduled much like Chicago pickups.'],
    ],
    cities: ['indianapolis-in', 'fort-wayne-in', 'evansville-in', 'south-bend-in', 'hammond-in', 'carmel-in'],
  },
  michigan: {
    name: 'Michigan', abbr: 'MI', office: 'the Michigan Secretary of State',
    about: [
      'Michigan is the home of the American auto industry, and people here ship cars for every reason: new and used purchases, auctions, relocations, and winters in Florida or Arizona. I-75, I-94, I-96 and I-69 carry most of the state\'s traffic.',
      'Southeast Michigan, around Detroit, Ann Arbor, Warren and Sterling Heights, is the busiest area for car shipping. Grand Rapids and Lansing are well served by I-96. The Upper Peninsula is reached over the Mackinac Bridge and has fewer carriers.',
    ],
    tips: [
      'Upper Peninsula pickups take longer to schedule. Many customers meet a carrier in the Lower Peninsula instead.',
      'Lake-effect snow on the west side of the state can delay winter pickups.',
      'Bought a car at an auction or dealer in Michigan? We can pick up straight from the lot.',
    ],
    season: 'Michigan snowbirds fill southbound trucks from October to December and northbound trucks from March to May. Summer is busy with family moves and University of Michigan and Michigan State students.',
    faq: [
      ['How long does it take to ship a car from Michigan to Florida?', 'Usually three to five days after pickup. Detroit to Orlando is roughly 1,150 miles.'],
      ['Can you pick up in the Upper Peninsula?', 'Yes, though it takes longer to schedule. Meeting near I-75 can make it faster.'],
    ],
    cities: ['grand-rapids-mi', 'ann-arbor-mi', 'lansing-mi', 'flint-mi', 'warren-mi'],
  },
  wisconsin: {
    name: 'Wisconsin', abbr: 'WI', office: 'the Wisconsin DMV',
    about: [
      'Most Wisconsin car shipping runs through the southeast: Milwaukee, Madison and the I-94 corridor to Chicago. I-90/94 continues northwest toward the Twin Cities, and I-41 and I-43 serve Green Bay and the Fox Valley.',
      'Southern Wisconsin is close to Chicago, so carriers there are easy to find. Northern Wisconsin is more rural, and pickups often meet in a town near the highway.',
    ],
    tips: [
      'Winter is long and snowy. From December to March, leave some flexibility in your pickup date.',
      'University of Wisconsin students in Madison ship cars at the start and end of the school year.',
      'Northwoods cabins and rural roads are hard for big carriers to reach. Plan a meeting spot in town.',
    ],
    season: 'Wisconsin snowbirds head south from October to December and return in spring. Summer is the easiest time to schedule.',
    faq: [
      ['Is shipping from Milwaukee like shipping from Chicago?', 'Close to it. Milwaukee is about 90 miles from Chicago on I-94, so carriers serve both often.'],
      ['Can you pick up a car up north?', 'Yes. For remote addresses, meeting in the nearest town on a main highway is usually fastest.'],
    ],
    cities: ['milwaukee-wi', 'madison-wi', 'green-bay-wi', 'kenosha-wi'],
  },
  minnesota: {
    name: 'Minnesota', abbr: 'MN', office: 'Minnesota Driver and Vehicle Services (DVS)',
    about: [
      'Minneapolis and St. Paul are the center of Minnesota car shipping. I-94 runs east to Chicago and west to Fargo, I-35 runs south to Des Moines and Kansas City and north to Duluth, and I-90 crosses southern Minnesota.',
      'The Twin Cities suburbs are easy to reach. Duluth, Rochester and St. Cloud are well served too. Far northern Minnesota has fewer carriers and longer scheduling times.',
    ],
    tips: [
      'Minnesota winters are some of the hardest in the country. Expect occasional weather delays from December to March.',
      'Minnesota snowbirds often ship to Arizona, Texas or Florida. Book southbound trips early in the fall.',
      'Pickups near I-94 or I-35 are the fastest to schedule.',
    ],
    season: 'Fall is the busiest time for southbound winter moves, and spring for the return trip. Summer is the easiest season for everything else.',
    faq: [
      ['How long does it take to ship a car from Minnesota to Arizona?', 'Usually four to six days after pickup. Minneapolis to Phoenix is about 1,600 miles.'],
      ['Do carriers run in the middle of winter?', 'Yes. Storms can delay pickups by a day or two, but carriers keep running all winter.'],
    ],
    cities: ['minneapolis-mn', 'st-paul-mn', 'duluth-mn', 'rochester-mn', 'bloomington-mn', 'plymouth-mn'],
  },
  iowa: {
    name: 'Iowa', abbr: 'IA', office: 'your county treasurer\'s office (Iowa DOT rules)',
    about: [
      'Iowa sits on I-80, one of the main coast-to-coast car hauler routes, and I-35 crosses it at Des Moines. I-29 runs along the western border through Sioux City and Council Bluffs, and I-380 links Cedar Rapids and Iowa City.',
      'Most pickups happen near Des Moines, Cedar Rapids, the Quad Cities around Davenport, or Iowa City. Farm and small-town addresses work too, usually with a meeting point near the highway.',
    ],
    tips: [
      'Long gravel driveways and farm lanes are hard for a full carrier. Meeting on a paved road saves time.',
      'Students at the University of Iowa and Iowa State ship cars in August and May.',
      'Winter storms and blowing snow can close stretches of I-80 for short periods.',
    ],
    season: 'Spring and fall are the easiest times to schedule. Winter weather is the main source of delays. Snowbird moves peak in fall and spring.',
    faq: [
      ['Is Iowa on a main car shipping route?', 'Yes. I-80 carries a steady stream of cross-country carriers, and I-35 crosses it in Des Moines.'],
      ['Can you pick up a car from a farm?', 'Yes. For long lanes or soft ground, we usually meet at the nearest paved road.'],
    ],
    cities: ['des-moines-ia', 'cedar-rapids-ia', 'davenport-ia', 'iowa-city-ia', 'sioux-city-ia', 'west-des-moines-ia'],
  },
  missouri: {
    name: 'Missouri', abbr: 'MO', office: 'the Missouri Department of Revenue',
    about: [
      'Missouri is near the middle of the country, and carriers cross it in every direction. I-70 links St. Louis and Kansas City, I-44 runs southwest to Springfield and Oklahoma, I-55 follows the Mississippi River, and I-35 and I-29 run north from Kansas City.',
      'St. Louis and Kansas City are the two big pickup hubs. Springfield and Columbia are also easy to reach. The Ozarks and rural northern Missouri take a little more planning.',
    ],
    tips: [
      'Military families at Fort Leonard Wood and Whiteman AFB can plan pickup around report dates.',
      'Ozarks lake homes and hilly roads may need a meeting point on the main highway.',
      'Spring storms and occasional winter ice can push back a pickup by a day.',
    ],
    season: 'Summer is the busiest moving season. Snowbird traffic to Florida, Texas and Arizona peaks in the fall.',
    faq: [
      ['Is it cheaper to ship from St. Louis or Kansas City?', 'Both are major hubs with plenty of carriers. Your price depends more on the destination and season than on which city you choose.'],
      ['How long does it take to ship a car from Missouri to California?', 'Usually five to seven days after pickup. It is about 1,600 to 1,800 miles from Kansas City or St. Louis.'],
    ],
    cities: ['st-louis-mo', 'kansas-city-mo', 'springfield-mo', 'columbia-mo', 'independence-mo', 'lees-summit-mo'],
  },
  kansas: {
    name: 'Kansas', abbr: 'KS', office: 'your county treasurer (Kansas Department of Revenue rules)',
    about: [
      'I-70 crosses Kansas from Kansas City to the Colorado line, and I-35 runs from Kansas City through Wichita to Oklahoma. Both are main cross-country routes, so carriers pass through Kansas every day.',
      'The Kansas City suburbs, including Overland Park, Olathe and Shawnee, are the busiest pickup area. Wichita, Topeka, Lawrence and Manhattan follow. Western Kansas is open country with long distances between towns.',
    ],
    tips: [
      'Fort Riley, Fort Leavenworth and McConnell AFB families can plan around PCS dates.',
      'Western Kansas pickups often meet near I-70 to keep scheduling simple.',
      'Spring is storm season on the plains, and severe weather can cause short delays.',
    ],
    season: 'Spring storms and occasional winter blizzards are the main weather risks. Summer is the busiest moving season, partly because of military PCS orders.',
    faq: [
      ['Do you ship cars for soldiers at Fort Riley?', 'Yes. We schedule around report dates and can meet near the base.'],
      ['Is western Kansas hard to ship from?', 'It takes a bit longer to schedule, but carriers on I-70 can usually pick up at a nearby town.'],
    ],
    cities: ['wichita-ks', 'overland-park-ks', 'kansas-city-ks', 'olathe-ks', 'topeka-ks', 'lawrence-ks'],
  },
  nebraska: {
    name: 'Nebraska', abbr: 'NE', office: 'your county treasurer (Nebraska DMV rules)',
    about: [
      'I-80 runs the full length of Nebraska, from Omaha through Lincoln, Grand Island, Kearney and North Platte. It is one of the main car hauler routes between the Midwest and the West, so carriers cross Nebraska constantly.',
      'Omaha and Lincoln are the easiest pickup cities. Towns along I-80 are also simple. Northern and western Nebraska are sparsely populated, and those pickups usually meet a carrier on the interstate.',
    ],
    tips: [
      'Offutt AFB families near Omaha can plan pickup around their PCS dates.',
      'University of Nebraska students in Lincoln ship cars in August and May.',
      'Wind and blowing snow can close stretches of I-80 in winter.',
    ],
    season: 'Winter weather on I-80 is the main source of delays. Summer and early fall are the smoothest times to ship.',
    faq: [
      ['Is Nebraska on a major car shipping route?', 'Yes. I-80 crosses the whole state and carries a steady stream of cross-country carriers.'],
      ['How long does it take to ship a car from Omaha to California?', 'Usually four to seven days after pickup. It is about 1,500 to 1,600 miles.'],
    ],
    cities: ['omaha-ne', 'lincoln-ne', 'grand-island-ne', 'kearney-ne', 'bellevue-ne', 'fremont-ne'],
  },
  'north-dakota': {
    name: 'North Dakota', abbr: 'ND', office: 'the North Dakota DOT Motor Vehicle Division',
    about: [
      'North Dakota has two main carrier routes: I-94 across the state from Fargo through Bismarck to Montana, and I-29 north and south along the Red River from Fargo to Grand Forks.',
      'Fargo is the busiest pickup city. Bismarck, Grand Forks and Minot follow. Western North Dakota, including Williston and the Bakken oil region, is far from other hubs, so plan a little more time for pickup.',
    ],
    tips: [
      'Minot AFB and Grand Forks AFB families can plan pickup around report dates.',
      'Oil field workers moving to or from the Williston area are a common route for us. Book a week or two ahead.',
      'Winters are severe. From December to March, pickups can slip a few days.',
    ],
    season: 'Late spring to early fall is the easiest time to ship. Winter cold and storms slow schedules statewide.',
    faq: [
      ['How long does it take to get a carrier in western North Dakota?', 'Often longer than in Fargo. Booking ahead, or meeting in a larger town on I-94, speeds it up.'],
      ['Do carriers run in North Dakota winters?', 'Yes, but storms can close roads for a day or two. We keep you updated on any changes.'],
    ],
    cities: ['fargo-nd', 'bismarck-nd', 'grand-forks-nd', 'minot-nd', 'williston-nd', 'west-fargo-nd'],
  },
  'south-dakota': {
    name: 'South Dakota', abbr: 'SD', office: 'your county treasurer (South Dakota Motor Vehicle Division rules)',
    about: [
      'I-90 crosses South Dakota from Sioux Falls to Rapid City and the Black Hills, and I-29 runs north and south along the eastern edge through Sioux Falls and Brookings.',
      'Sioux Falls is the easiest pickup city. Rapid City is the main hub in the west. The middle of the state is rural, with long distances between towns.',
    ],
    tips: [
      'The Sturgis Motorcycle Rally fills the Black Hills every August. Book motorcycle transport there early.',
      'Ellsworth AFB families near Rapid City can plan around PCS dates.',
      'Western South Dakota can get heavy snow and wind in winter.',
    ],
    season: 'Summer is the busiest season, especially in August around the Sturgis rally. Winter storms are the main source of delays.',
    faq: [
      ['Can you ship my motorcycle to Sturgis?', 'Yes. Book a few weeks before the rally, because motorcycle carriers going to the Black Hills fill up fast.'],
      ['Is Rapid City hard to ship from?', 'No. It is on I-90, and carriers headed to and from the West use that road regularly.'],
    ],
    cities: ['sioux-falls-sd', 'rapid-city-sd', 'aberdeen-sd', 'brookings-sd'],
  },
  oklahoma: {
    name: 'Oklahoma', abbr: 'OK', office: 'Service Oklahoma',
    about: [
      'Three major interstates cross Oklahoma: I-35 runs north-south through Oklahoma City, I-40 runs east-west through Oklahoma City, and I-44 connects Tulsa, Oklahoma City and Lawton. That gives carriers easy access to the state\'s main cities.',
      'Oklahoma City and Tulsa are the main pickup hubs. Norman, Edmond, Broken Arrow and Lawton are also easy. Panhandle and far rural addresses take more planning.',
    ],
    tips: [
      'Oklahoma has several military bases, including Fort Sill, Tinker AFB, Vance AFB and Altus AFB. PCS families can plan around report dates.',
      'Spring is tornado and hail season. Severe weather can delay pickups for a short time.',
      'University of Oklahoma students in Norman ship cars in August and May.',
    ],
    season: 'Spring storms are the main weather risk. Summer is busy with military PCS moves.',
    faq: [
      ['Do you ship cars for soldiers at Fort Sill?', 'Yes. We schedule around report dates and usually meet near the base in Lawton.'],
      ['How long does it take to ship a car from Oklahoma to California?', 'Usually three to six days after pickup. Oklahoma City to Los Angeles is about 1,300 miles.'],
    ],
    cities: ['oklahoma-city-ok', 'tulsa-ok', 'norman-ok', 'broken-arrow-ok', 'edmond-ok', 'lawton-ok'],
  },
  montana: {
    name: 'Montana', abbr: 'MT', office: 'the Montana Motor Vehicle Division (through your county treasurer)',
    about: [
      'Montana is big and sparsely populated, and distances between towns are long. I-90 crosses the state through Missoula, Butte, Bozeman and Billings. I-94 runs east from Billings, and I-15 runs north-south through Helena and Great Falls.',
      'Billings, Bozeman and Missoula are the main pickup cities. Most carriers here are on I-90, so pickups near it are the quickest to schedule.',
    ],
    tips: [
      'Mountain passes on I-90, such as Bozeman Pass and Homestake Pass near Butte, can slow or close in winter storms.',
      'Malmstrom AFB families near Great Falls can plan around PCS dates.',
      'Ranch and remote addresses usually need a meeting point in town.',
    ],
    season: 'Late spring to early fall is the smoothest time to ship. Winter can bring delays from snow on the passes.',
    faq: [
      ['Why does shipping to rural Montana take longer?', 'Fewer carriers run there, and towns are far apart. Meeting near I-90 or I-15 usually speeds things up.'],
      ['Do you ship cars to and from Bozeman?', 'Yes. Bozeman is on I-90, and its growth has made it a regular stop for carriers.'],
    ],
    cities: ['billings-mt', 'bozeman-mt', 'missoula-mt', 'great-falls-mt', 'helena-mt', 'butte-mt'],
  },
  wyoming: {
    name: 'Wyoming', abbr: 'WY', office: 'your county treasurer (WYDOT rules)',
    about: [
      'Wyoming has the fewest people of any state, but I-80 across its southern edge is one of the busiest car hauler routes in the West. I-25 runs north from Cheyenne through Casper, and I-90 crosses the northeast corner through Gillette.',
      'Cheyenne, Casper and Laramie are the main pickup cities. Rural Wyoming and towns far from an interstate usually need a meeting point on I-80 or I-25.',
    ],
    tips: [
      'High wind and snow can close I-80 between Laramie and Rawlins in winter, sometimes for a day or more.',
      'F.E. Warren AFB families in Cheyenne can plan around PCS dates.',
      'Energy workers moving to or from Gillette are a common route for us. Book a week or two ahead.',
    ],
    season: 'Summer is the easiest time to ship. Winter closures on I-80 are the main source of delays.',
    faq: [
      ['Does I-80 really close in winter?', 'Sometimes. Wind and snow can close stretches of I-80 in southern Wyoming. Carriers wait until it reopens, and we keep you updated.'],
      ['Is Cheyenne easy to ship from?', 'Yes. It sits where I-80 and I-25 meet, about 100 miles north of Denver.'],
    ],
    cities: ['cheyenne-wy', 'casper-wy', 'laramie-wy', 'gillette-wy'],
  },
  nevada: {
    name: 'Nevada', abbr: 'NV', office: 'the Nevada DMV',
    about: [
      'Most Nevada car shipping is in Las Vegas or Reno. Las Vegas sits on I-15, between Southern California and Utah. Reno is on I-80, between Sacramento and Salt Lake City.',
      'Both cities see constant carrier traffic, much of it from California. The rest of Nevada is wide open desert, and pickups there usually meet on US-95 or I-80.',
    ],
    tips: [
      'Las Vegas summers often pass 110°F. Drivers prefer early-morning pickups, and a weak battery may not start after a hot trip.',
      'Nellis AFB and NAS Fallon families can plan around PCS dates.',
      'Gated communities in Henderson and Summerlin may need the driver\'s name in advance.',
    ],
    season: 'Moves from California run all year. Winter snow over Donner Pass on I-80 can slow trips between Reno and Sacramento.',
    faq: [
      ['How long does it take to ship a car from Los Angeles to Las Vegas?', 'Usually one to two days after pickup. It is about 270 miles on I-15.'],
      ['Is Reno a good place to ship a car from?', 'Yes. I-80 brings regular carrier traffic between Northern California and the rest of the country.'],
    ],
    cities: ['las-vegas-nv', 'reno-nv', 'henderson-nv', 'north-las-vegas-nv', 'sparks-nv', 'carson-city-nv'],
  },
  'new-hampshire': {
    name: 'New Hampshire', abbr: 'NH', office: 'your town or city clerk first, then the New Hampshire DMV',
    about: [
      'Most New Hampshire car shipping is in the southern part of the state: Manchester, Nashua, Concord and the Seacoast around Portsmouth. I-93 runs north from the Massachusetts line through Manchester and Concord, and I-89 heads northwest toward Vermont.',
      'Southern New Hampshire is close to Boston, so carriers serving New England pass through often. The Lakes Region and the North Country take more planning.',
    ],
    tips: [
      'New Hampshire registration starts at your town or city clerk, not a state office. Ask your town what to bring.',
      'Mountain and lake roads up north can be hard for a big carrier. Plan a meeting point on a main road.',
      'Many New Hampshire residents ship cars to Florida for the winter. Book early in the fall.',
    ],
    season: 'The snowbird rush to Florida peaks from October to December, and the return trip from March to May. Winter storms can delay pickups up north.',
    faq: [
      ['How do I register a car shipped to New Hampshire?', 'Start with your town or city clerk, then finish with the New Hampshire DMV. Bring the title, ID and proof of address.'],
      ['How long does it take to ship a car from New Hampshire to Florida?', 'Usually three to five days after pickup. It is roughly 1,300 to 1,500 miles.'],
    ],
    cities: ['manchester-nh', 'nashua-nh', 'concord-nh', 'derry-nh', 'dover-nh', 'rochester-nh'],
  },
  vermont: {
    name: 'Vermont', abbr: 'VT', office: 'the Vermont DMV',
    about: [
      'Vermont is small, rural and hilly, and it is served by two interstates. I-89 runs from White River Junction through Montpelier to Burlington, and I-91 runs north-south along the Connecticut River.',
      'Burlington is the easiest pickup city. Rutland, Barre and southern Vermont are also served regularly. Small towns and mountain roads usually need a meeting point near a main highway.',
    ],
    tips: [
      'Mud season in spring makes dirt roads soft. Many Vermont homes are on gravel or dirt roads, so meet on pavement.',
      'Steep driveways and ski-area roads in winter are not safe for a full carrier.',
      'University of Vermont students in Burlington ship cars in late August and May.',
    ],
    season: 'Winter snow and spring mud season are the main challenges. Summer and fall are the easiest times to ship.',
    faq: [
      ['Can a car carrier get to my Vermont home?', 'If you are on a paved main road, often yes. For dirt roads or steep driveways, we meet nearby on pavement.'],
      ['How long does it take to ship a car from Vermont to Florida?', 'Usually three to five days after pickup. It is about 1,400 to 1,600 miles.'],
    ],
    cities: ['burlington-vt', 'south-burlington-vt', 'rutland-vt', 'barre-vt'],
  },
  maine: {
    name: 'Maine', abbr: 'ME', office: 'your municipal office (for excise tax) and the Maine BMV',
    about: [
      'Most Maine car shipping is along the southern coast and I-95: Portland, South Portland, Saco, Biddeford and Lewiston. I-95 and I-295 continue north to Augusta and Bangor.',
      'Southern Maine is close to Boston and easy for carriers. Northern and eastern Maine are far from other hubs and take longer to schedule.',
    ],
    tips: [
      'Maine has one of the largest snowbird populations in New England. Book Florida trips early in the fall.',
      'Coastal islands and peninsulas are hard for large carriers. Meet on the mainland near US-1 or I-95.',
      'In Maine, you pay excise tax at your town office before the BMV issues your registration.',
    ],
    season: 'The busiest stretches are October to December (south to Florida) and March to May (back to Maine). Winter storms can delay northern pickups.',
    faq: [
      ['How do I register a car after shipping it to Maine?', 'Pay the excise tax at your town or city office, then complete the registration with the Maine BMV.'],
      ['Can you pick up in northern Maine?', 'Yes. It takes longer to schedule, so book ahead or meet in Bangor or another town on I-95.'],
    ],
    cities: ['portland-me', 'bangor-me', 'lewiston-me', 'south-portland-me', 'saco-me', 'biddeford-me'],
  },
  massachusetts: {
    name: 'Massachusetts', abbr: 'MA', office: 'the Massachusetts RMV',
    about: [
      'Massachusetts car shipping centers on Greater Boston, with Worcester and Springfield as the next biggest hubs. The Mass Pike (I-90) crosses the state, I-95 and Route 128 ring Boston, I-93 runs through the city, and I-495 makes a wider loop.',
      'Boston\'s narrow streets, tight parking and one-way roads are tough for car haulers. Most Boston pickups happen at a nearby wide road or lot, not at the door.',
    ],
    tips: [
      'Around September 1, thousands of Boston leases turn over at once. Streets are packed and carriers are in high demand that week.',
      'After you register a car in Massachusetts, it needs a state inspection soon after. Ask the RMV or your inspection station for the exact window.',
      'College students in Boston, Cambridge and Worcester ship cars in late August and May.',
    ],
    season: 'Late August and early September are the busiest weeks in Greater Boston. The snowbird rush to Florida peaks in the fall. Winter storms can delay pickups.',
    faq: [
      ['Can a car carrier pick up in downtown Boston?', 'Usually not at the door. We meet at a nearby wider street or lot, and the driver calls ahead to agree on a spot.'],
      ['How long does it take to ship a car from Boston to Florida?', 'Usually three to five days after pickup. Boston to Orlando is about 1,300 miles.'],
    ],
    cities: ['boston-ma', 'worcester-ma', 'springfield-ma', 'cambridge-ma', 'lowell-ma', 'quincy-ma'],
  },
  'rhode-island': {
    name: 'Rhode Island', abbr: 'RI', office: 'the Rhode Island DMV',
    about: [
      'Rhode Island is the smallest state, and I-95 runs right through it between New York and Boston. Carriers on that corridor pass Providence every day, so pickups here are usually quick to schedule.',
      'Providence, Warwick, Cranston and Pawtucket are all close to I-95 or I-295. Newport and the coastal towns are reached by Route 138 and Route 24.',
    ],
    tips: [
      'Providence\'s College Hill and Federal Hill neighborhoods have narrow streets. Meet on a wider road.',
      'Naval Station Newport families can plan pickup around report dates.',
      'Students at Brown, URI and other schools ship cars in late August and May.',
    ],
    season: 'Summer is busy along the coast, and fall brings the snowbird rush south. Winter storms can briefly delay pickups.',
    faq: [
      ['Is Rhode Island easy to ship a car from?', 'Yes. It sits on I-95 between New York and Boston, so carriers pass through daily.'],
      ['Can you pick up in Newport?', 'Yes. In busy downtown areas, we usually meet on a wider road nearby.'],
    ],
    cities: ['providence-ri', 'warwick-ri', 'cranston-ri', 'pawtucket-ri'],
  },
  connecticut: {
    name: 'Connecticut', abbr: 'CT', office: 'the Connecticut DMV',
    about: [
      'Connecticut sits between New York City and Boston, and I-95 runs along its whole coast through Stamford, Bridgeport and New Haven. I-91 runs north from New Haven to Hartford, and I-84 crosses from Danbury through Hartford.',
      'Carriers running between New York and New England pass through Connecticut constantly, so pickups in Fairfield County, New Haven and Hartford are usually quick to schedule.',
    ],
    tips: [
      'Traffic on I-95 in Fairfield County is heavy. Drivers prefer mid-day pickups.',
      'Naval Submarine Base New London families in Groton can plan around report dates.',
      'Yale and UConn students ship cars in late August and May.',
    ],
    season: 'Summer moves and the fall snowbird rush to Florida are the busiest times. Winter storms can briefly delay pickups.',
    faq: [
      ['Is shipping from Connecticut priced like New York?', 'Fairfield County is close to New York and often priced similarly. Hartford and eastern Connecticut follow New England lanes.'],
      ['How long does it take to ship a car from Connecticut to Florida?', 'Usually three to five days after pickup. It is about 1,100 to 1,300 miles.'],
    ],
    cities: ['hartford-ct', 'stamford-ct', 'new-haven-ct', 'bridgeport-ct', 'norwalk-ct', 'danbury-ct'],
  },
  oregon: {
    name: 'Oregon', abbr: 'OR', office: 'the Oregon DMV',
    about: [
      'Most Oregon car shipping is along I-5, which runs from Portland through Salem and Eugene down to California. I-84 heads east from Portland up the Columbia River Gorge toward Idaho.',
      'Portland, Salem and Eugene are the easiest pickup cities. Bend has grown fast and is served regularly, though it sits over the Cascades. The coast and eastern Oregon take more planning.',
    ],
    tips: [
      'Cascade passes, like Santiam Pass on the way to Bend, can require chains in winter and may slow carriers.',
      'Portland\'s inner neighborhoods have narrow streets and tight parking. Meet on a wider road.',
      'Oregon has no sales tax, so many buyers have cars shipped here after a purchase.',
    ],
    season: 'Summer is the busiest moving season. Winter snow in the Cascades and the Siskiyou Pass on I-5 can delay trips to and from California.',
    faq: [
      ['How long does it take to ship a car from California to Portland?', 'From the Bay Area, usually two to four days after pickup. From Southern California, three to five days.'],
      ['Can you pick up in Bend?', 'Yes. Bend is a regular stop, but winter passes can add a day. Book a little ahead.'],
    ],
    cities: ['portland-or', 'salem-or', 'eugene-or', 'bend-or', 'gresham-or', 'hillsboro-or'],
  },
  washington: {
    name: 'Washington', abbr: 'WA', office: 'the Washington Department of Licensing (DOL)',
    about: [
      'Washington car shipping centers on the Puget Sound region: Seattle, Tacoma, Bellevue and Everett, all along I-5. I-90 crosses the Cascades to Spokane, and I-5 continues south to Vancouver, WA and Portland.',
      'The Port of Tacoma is also where most vehicles headed to Alaska board ships, so many Alaska moves start or end with a carrier trip to Tacoma.',
    ],
    tips: [
      'Snoqualmie Pass on I-90 can require chains or close in winter, which slows trips between Seattle and Spokane.',
      'JBLM, Naval Base Kitsap and NAS Whidbey Island families can plan around PCS dates.',
      'Seattle\'s hills and tight streets make door pickups hard. Expect a nearby meeting spot.',
    ],
    season: 'Summer is the busiest moving season and peak PCS time. Winter pass closures are the main source of delays east of the Cascades.',
    faq: [
      ['Can you get my car to Tacoma for shipping to Alaska?', 'Yes. We arrange the inland trip to the port and plan the timing with the ocean carrier.'],
      ['How long does it take to ship a car from Seattle to California?', 'Usually three to five days after pickup, depending on the city.'],
    ],
    cities: ['seattle-wa', 'tacoma-wa', 'spokane-wa', 'vancouver-wa'],
  },
  idaho: {
    name: 'Idaho', abbr: 'ID', office: 'your county assessor\'s motor vehicle office (Idaho DMV rules)',
    about: [
      'Most Idaho car shipping is in the Treasure Valley, around Boise, Meridian, Nampa and Caldwell, along I-84. Eastern Idaho is served by I-15 and I-86 through Pocatello and Idaho Falls, and northern Idaho by I-90 through Coeur d\'Alene.',
      'Many people have moved to Idaho from California, Washington and Oregon in recent years, so inbound routes from the West Coast are some of our most common.',
    ],
    tips: [
      'Mountain Home AFB families can plan pickup around PCS dates.',
      'Rural and mountain addresses usually need a meeting point near I-84, I-15 or I-90.',
      'Winter snow in the mountains and on I-84 near the Oregon line can cause short delays.',
    ],
    season: 'Summer is the busiest season, with many family moves from the West Coast. Winter weather in the mountains is the main source of delays.',
    faq: [
      ['How long does it take to ship a car from California to Boise?', 'Usually two to five days after pickup, depending on where in California.'],
      ['Can you pick up in northern Idaho?', 'Yes. Coeur d\'Alene is on I-90, and carriers between Spokane and Montana pass through it.'],
    ],
    cities: ['boise-id', 'meridian-id', 'nampa-id', 'idaho-falls-id', 'pocatello-id', 'coeur-dalene-id'],
  },
  utah: {
    name: 'Utah', abbr: 'UT', office: 'the Utah DMV',
    about: [
      'Most Utah car shipping is along the Wasatch Front, from Ogden through Salt Lake City to Provo, along I-15. I-80 crosses Salt Lake City east to Wyoming and west to Nevada, and I-70 starts in central Utah and heads to Colorado.',
      'Salt Lake City is one of the main carrier hubs in the Mountain West. St. George in the southwest is on I-15 between Las Vegas and Salt Lake, and it is popular with winter residents.',
    ],
    tips: [
      'Hill AFB families near Ogden can plan pickup around PCS dates.',
      'Students at BYU and the University of Utah ship cars in August and late April or May.',
      'Canyon roads to ski areas are not a safe place for a full carrier in winter. Meet in the valley.',
    ],
    season: 'Summer is the busiest moving season. Snowbirds head to St. George in the fall. Winter storms on I-80 in Wyoming can slow eastbound trips.',
    faq: [
      ['Is Salt Lake City easy to ship from?', 'Yes. I-15 and I-80 meet there, and it is one of the busiest carrier hubs in the region.'],
      ['How long does it take to ship a car from Utah to California?', 'Usually two to four days after pickup, depending on the cities.'],
    ],
    cities: ['salt-lake-city-ut', 'provo-ut', 'west-valley-city-ut', 'west-jordan-ut'],
  },
  'new-mexico': {
    name: 'New Mexico', abbr: 'NM', office: 'the New Mexico Motor Vehicle Division (MVD)',
    about: [
      'Two major routes cross New Mexico: I-40 from Texas through Albuquerque to Arizona, and I-25 from Colorado through Santa Fe and Albuquerque to Las Cruces. I-10 crosses the southwest corner through Las Cruces.',
      'Albuquerque is the main pickup hub. Santa Fe, Las Cruces and Rio Rancho are also easy. Much of the rest of the state is rural, with long distances between towns.',
    ],
    tips: [
      'New Mexico has several military bases, including Kirtland AFB, Holloman AFB, Cannon AFB and White Sands Missile Range. PCS families can plan around report dates.',
      'Spring winds and summer storms can briefly slow carriers on I-40.',
      'Rural and tribal land addresses usually meet a carrier near the interstate.',
    ],
    season: 'Summer is the main PCS and moving season. Winter is mild in the south, but northern New Mexico can get snow.',
    faq: [
      ['Is Albuquerque a good place to ship a car from?', 'Yes. I-25 and I-40 meet there, so carriers going east, west and north pass through.'],
      ['Do you ship cars for Kirtland AFB families?', 'Yes. We plan pickup around your report date and meet near the base.'],
    ],
    cities: ['albuquerque-nm', 'las-cruces-nm', 'santa-fe-nm', 'rio-rancho-nm', 'roswell-nm', 'farmington-nm'],
  },
  tennessee: {
    name: 'Tennessee', abbr: 'TN', office: 'your county clerk',
    about: [
      'Tennessee is long, stretching from Memphis in the west to Knoxville and Bristol in the east. I-40 crosses the whole state through Memphis, Nashville and Knoxville. I-65 and I-24 meet in Nashville, I-75 runs through Chattanooga and Knoxville, and I-81 runs through the northeast.',
      'Memphis is one of the biggest freight hubs in the country, and Nashville has grown quickly with people moving in. Both are easy places to find a carrier.',
    ],
    tips: [
      'Fort Campbell, on the Tennessee-Kentucky line, sends a steady stream of PCS moves.',
      'Smoky Mountain cabins and hill roads are hard for a big carrier. Plan to meet in town.',
      'Nashville\'s downtown and older neighborhoods can be tight. Meet on a wider road.',
    ],
    season: 'Summer is the busiest moving season. Spring storms can briefly delay pickups.',
    faq: [
      ['How long does it take to ship a car from California to Nashville?', 'Usually five to eight days after pickup. It is about 2,000 miles.'],
      ['Do you ship cars for soldiers at Fort Campbell?', 'Yes. We plan around PCS dates and usually meet near the base or in Clarksville.'],
    ],
    cities: ['nashville-tn', 'memphis-tn', 'knoxville-tn', 'chattanooga-tn'],
  },
  kentucky: {
    name: 'Kentucky', abbr: 'KY', office: 'your county clerk',
    about: [
      'Kentucky sits on several main north-south routes. I-65 runs from Louisville through Bowling Green to Nashville, I-75 runs through Lexington, and I-71 connects Louisville and Cincinnati. I-64 crosses the state east to west.',
      'Louisville and Lexington are the main pickup cities. Northern Kentucky is part of the Cincinnati area. Eastern Kentucky\'s mountain roads take more planning.',
    ],
    tips: [
      'Bowling Green is home to the Corvette assembly plant and the National Corvette Museum. We often ship Corvettes to and from the area.',
      'Fort Knox and Fort Campbell families can plan around PCS dates.',
      'Mountain roads in eastern Kentucky usually need a meeting point on a main highway.',
    ],
    season: 'Summer is the busiest moving season. Fall brings snowbird trips to Florida. Winter ice can briefly delay pickups.',
    faq: [
      ['Can you ship a Corvette to or from Bowling Green?', 'Yes, in an open or enclosed trailer. For new or collector Corvettes, many owners choose enclosed.'],
      ['How long does it take to ship a car from Kentucky to Florida?', 'Usually two to four days after pickup, depending on the cities.'],
    ],
    cities: ['louisville-ky', 'lexington-ky', 'bowling-green-ky', 'owensboro-ky', 'covington-ky', 'florence-ky'],
  },
  'west-virginia': {
    name: 'West Virginia', abbr: 'WV', office: 'the West Virginia DMV',
    about: [
      'West Virginia is mountainous, and most car shipping follows its interstates. I-64 runs through Huntington and Charleston, I-77 runs north-south through Charleston, I-79 runs to Morgantown, and I-81 crosses the Eastern Panhandle.',
      'Charleston, Huntington and Morgantown are the main pickup cities. The Eastern Panhandle, around Martinsburg, is close to Washington, DC and served by carriers on I-81.',
    ],
    tips: [
      'Many homes are on steep or winding roads. Expect to meet a carrier on a main road or in a town lot.',
      'WVU students in Morgantown ship cars in August and May.',
      'Winter weather in the mountains can slow carriers on I-64 and I-79.',
    ],
    season: 'Summer and fall are the easiest times to ship. Winter mountain weather is the main source of delays.',
    faq: [
      ['Can a car carrier reach my home in the mountains?', 'Often not on narrow or steep roads. We set a meeting point on the nearest main road.'],
      ['Is the Eastern Panhandle easier to ship from?', 'Usually, yes. I-81 brings regular carrier traffic between Virginia and Pennsylvania.'],
    ],
    cities: ['charleston-wv', 'huntington-wv', 'morgantown-wv', 'parkersburg-wv'],
  },
  'north-carolina': {
    name: 'North Carolina', abbr: 'NC', office: 'the NCDMV',
    about: [
      'North Carolina is one of the busiest states for car shipping on the East Coast. I-95 runs through the eastern part of the state, I-85 links Charlotte, Greensboro and Durham, and I-40 crosses from Wilmington through Raleigh to Asheville.',
      'Charlotte and the Research Triangle (Raleigh, Durham and Cary) are the biggest hubs. Many people move here from the Northeast and Midwest, so inbound routes from New York, New Jersey and Ohio are common.',
    ],
    tips: [
      'Fort Bragg, Camp Lejeune and Seymour Johnson AFB families can plan around PCS dates.',
      'From August to October, hurricanes can delay pickups along the coast and on I-95.',
      'Outer Banks and coastal island pickups usually meet on the mainland.',
    ],
    season: 'Summer is the busiest season for family and military moves. Hurricane season is the main source of delays.',
    faq: [
      ['Do you ship cars for Fort Bragg families?', 'Yes. We plan around your report date and usually meet near the base or in Fayetteville.'],
      ['How long does it take to ship a car from New York to Charlotte?', 'Usually two to four days after pickup. It is about 630 miles.'],
    ],
    cities: ['charlotte-nc', 'raleigh-nc', 'durham-nc', 'greensboro-nc', 'cary-nc', 'wilmington-nc'],
  },
  'south-carolina': {
    name: 'South Carolina', abbr: 'SC', office: 'the SCDMV',
    about: [
      'South Carolina sits on the main East Coast routes. I-95 runs through the eastern part of the state, I-26 links Charleston, Columbia and the Upstate, and I-85 runs through Greenville and Spartanburg.',
      'Charleston, Columbia and Greenville are the main pickup cities. The coast, including Myrtle Beach and Hilton Head, is popular with retirees and winter residents.',
    ],
    tips: [
      'The Port of Charleston is a major international port. Ask us if you are shipping a car overseas.',
      'Fort Jackson, Joint Base Charleston, Shaw AFB and Parris Island families can plan around PCS dates.',
      'Hurricanes from June to November can delay pickups along the coast.',
    ],
    season: 'Fall and spring are busy with retirees and winter residents. Summer is busy with military moves. Hurricane season is the main weather risk.',
    faq: [
      ['How long does it take to ship a car from New York to Charleston?', 'Usually two to four days after pickup. It is about 750 miles.'],
      ['Can you pick up a car on Hilton Head or another island?', 'Yes. Large carriers usually meet near the bridge or on the mainland.'],
    ],
    cities: ['charleston-sc', 'columbia-sc', 'north-charleston-sc', 'mount-pleasant-sc'],
  },
  maryland: {
    name: 'Maryland', abbr: 'MD', office: 'the Maryland MVA',
    about: [
      'Maryland is next door to our Woodbridge, Virginia office. Most shipments here are in the Baltimore and Washington suburbs. I-95 runs through Baltimore, I-270 runs up Montgomery County, I-70 heads west to Frederick and Hagerstown, and the Capital Beltway (I-495) wraps the DC suburbs.',
      'The Port of Baltimore is one of the busiest car ports in the country. Many vehicles arrive or leave Maryland by ship, and carriers run to and from the port every day.',
    ],
    tips: [
      'Maryland usually requires a state safety inspection before you can register a used car brought in from another state. Plan for it soon after delivery.',
      'Fort Meade, Aberdeen Proving Ground, Joint Base Andrews and the Naval Academy send many PCS moves through Maryland.',
      'Baltimore rowhouse streets and Annapolis\'s historic district are tight. Meet on a wider road.',
    ],
    season: 'Summer is the busiest season for military and government moves. Fall brings the snowbird rush to Florida.',
    faq: [
      ['Do I need an inspection after shipping a car to Maryland?', 'Usually, yes. Used vehicles coming from another state generally need a Maryland State Inspection before registration. Check with the MVA for your car.'],
      ['How fast can you pick up in Maryland?', 'Usually within one to five business days. Because our office is nearby, many local pickups are on the quicker end.'],
    ],
    cities: ['baltimore-md', 'rockville-md', 'gaithersburg-md', 'silver-spring-md', 'annapolis-md', 'frederick-md'],
  },
  louisiana: {
    name: 'Louisiana', abbr: 'LA', office: 'the Louisiana Office of Motor Vehicles (OMV)',
    about: [
      'Louisiana car shipping follows I-10, which crosses the south of the state through Lake Charles, Lafayette, Baton Rouge and New Orleans, and I-20 across the north through Shreveport and Monroe. I-49 connects Lafayette and Shreveport.',
      'New Orleans and Baton Rouge are the busiest pickup areas. Many people move between Louisiana and Texas, so the I-10 route to Houston is one of the most common.',
    ],
    tips: [
      'New Orleans neighborhoods like the French Quarter and the Garden District have narrow streets. Meet on a main road.',
      'Hurricane season runs from June to November, and storms can stop pickups for days.',
      'Barksdale AFB families near Shreveport can plan around PCS dates.',
    ],
    season: 'Hurricane season is the main weather risk. Mardi Gras crowds in New Orleans can make pickups hard for a couple of weeks before Fat Tuesday.',
    faq: [
      ['How long does it take to ship a car from New Orleans to Houston?', 'Usually one to two days after pickup. It is about 350 miles on I-10.'],
      ['What happens if a hurricane is coming?', 'Carriers wait until roads are safe. We keep you updated and reschedule as soon as possible.'],
    ],
    cities: ['new-orleans-la', 'baton-rouge-la', 'shreveport-la', 'lafayette-la', 'lake-charles-la', 'monroe-la'],
  },
  mississippi: {
    name: 'Mississippi', abbr: 'MS', office: 'your county tax collector',
    about: [
      'I-55 runs north-south through Jackson, from Memphis to New Orleans. I-20 crosses the middle of the state through Jackson and Meridian, and I-10 runs along the Gulf Coast through Gulfport and Biloxi.',
      'Jackson and the Gulf Coast are the main pickup areas. DeSoto County, including Southaven and Olive Branch, is part of the Memphis area and easy for carriers.',
    ],
    tips: [
      'Keesler AFB, Columbus AFB and NAS Meridian families can plan around PCS dates.',
      'Hurricanes from June to November can delay pickups on the Gulf Coast.',
      'Rural and Delta addresses usually need a meeting point near a main highway.',
    ],
    season: 'Summer is the main moving season. Hurricane season is the biggest weather risk on the coast.',
    faq: [
      ['Is northern Mississippi easier to ship from?', 'Southaven and Olive Branch are, because they are part of the Memphis freight area.'],
      ['Do you ship cars for Keesler AFB families?', 'Yes. We plan around your report date and usually meet near Biloxi.'],
    ],
    cities: ['jackson-ms', 'gulfport-ms', 'biloxi-ms', 'hattiesburg-ms', 'southaven-ms', 'tupelo-ms'],
  },
  alaska: {
    name: 'Alaska', abbr: 'AK', office: 'the Alaska DMV',
    about: [
      'Most cars reach Alaska by ship. Ocean carriers sail from the Port of Tacoma in Washington to Anchorage, and a carrier truck can take your car to or from Tacoma. The other option is driving the Alaska Highway through Canada, which is long and depends on the season.',
      'Anchorage is the main hub. Fairbanks is reached by road from Anchorage. Juneau, the state capital, has no road connection to the rest of North America, so vehicles go there by ferry or barge.',
    ],
    tips: [
      'Ocean shipping usually requires an empty car, a low fuel level and current registration. We share the exact rules for your sailing.',
      'JBER, Eielson AFB and Fort Wainwright families can plan around PCS dates.',
      'In winter, pickups in Fairbanks and the Interior can be slowed by extreme cold.',
    ],
    season: 'Summer is the busiest season for moves and PCS orders. Book early for June to August sailings.',
    faq: [
      ['How does a car get from the Lower 48 to Alaska?', 'Usually by truck to Tacoma, then by ship to Anchorage. We can arrange the whole trip.'],
      ['Can you ship a car to Juneau?', 'Yes, but Juneau has no road connection, so the last leg is by ferry or barge.'],
    ],
    cities: ['anchorage-ak', 'fairbanks-ak', 'juneau-ak', 'wasilla-ak', 'palmer-ak', 'ketchikan-ak'],
  },
  hawaii: {
    name: 'Hawaii', abbr: 'HI', office: 'your county\'s motor vehicle office',
    about: [
      'Every car going to or from Hawaii travels by ship. Vehicles sail from West Coast ports, mainly in Southern California, the Bay Area and the Pacific Northwest, to Honolulu on Oahu and to ports on Maui, the Big Island and Kauai.',
      'We arrange the truck trip to the mainland port, and the ocean carrier handles the sailing. On the islands, you pick up the car at the port or arrange local delivery.',
    ],
    tips: [
      'Ocean carriers usually require an empty car, a low fuel level and current registration. We share the exact rules for your sailing.',
      'Military families at Joint Base Pearl Harbor-Hickam, Schofield Barracks and Marine Corps Base Hawaii often ship one car under PCS orders. Check what your orders cover.',
      'Registration is handled by each county, so the rules on Oahu, Maui, Hawaii Island and Kauai can differ a little.',
    ],
    season: 'Summer is the busiest season for moves and PCS orders. Book ocean space a few weeks ahead.',
    faq: [
      ['Which mainland port should my car leave from?', 'Usually the one closest to you on the West Coast. We help you choose based on sailing schedules and where the car starts.'],
      ['Can you deliver my car to my door in Hawaii?', 'Most cars are picked up at the island port. Local delivery can sometimes be arranged.'],
    ],
    cities: ['honolulu-hi', 'kailua-hi', 'kahului-hi', 'hilo-hi', 'kapolei-hi', 'pearl-city-hi'],
  },
};
