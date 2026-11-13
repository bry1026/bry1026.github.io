// All site content lives here. Edit this file, save, refresh. No build step.
// Facts come from the "Puerto Rico Wedding Plan" page and the venues' own emails/PDFs.
// Privacy: never put venue staff phone numbers or emails in this file (the site is public).

window.SITE = {
  updated: "Fri Nov 13, 2026",
  couple: "Bryan & Cristal",
  date: { main: "Sat Nov 13, 2027", backup: "Sat Nov 20, 2027", guests: "about 100" },

  whereWeAre: [
    "20 of 27 venues have replied. 4 have both Nov 13 and Nov 20 open.",
    "Best value so far: La Mia Famiglia (Cabo Rojo). About $2,850 for 8 hrs, bring our own food and drinks, no corkage.",
    "No date is held yet, and nothing has been paid.",
    "Next step: lock a Thu–Sun scouting window, tour the top picks, then put a deposit on the winner (La Mia Famiglia holds a date with $500)."
  ],

  needFromYou: [
    { q: "Scouting trip planned for Thu Dec 3 – Sun Dec 6 (Nov 12–15 was too tight). OK?", options: ["Yes", "Another Thu–Sun"], note: "You prefer Thu–Sun over a full work week. Most venue offices are open Thu and Fri only on those trips. Hacienda Santiago tours are Mon/Tue, so it may need a special appointment or a skip." },
    { q: "OK to fill in Hacienda Cadenas's web form?", options: ["Yes", "No"], note: "They only send prices through the contact form on their site." },
    { q: "OK to send the tour-request drafts once dates are locked?", options: ["Yes", "No"], note: "Spanish drafts are ready. Nothing goes out until you approve." }
  ],

  // status: "both" = both dates open, "nov13" = Nov 13 open, "nov20" = Nov 20 only, "tbd" = date unconfirmed
  // ownFood / ownDrinks: true, false, or null (unknown)
  // photos: file names inside images/<slug>/ (add screenshots here too)
  venues: [
    { slug: "la-mia-famiglia", name: "Hacienda La Mia Famiglia", town: "Cabo Rojo", status: "both",
      price: "About $2,850 for 8 hrs (est.)", priceNote: "$2,500 for 6 hrs; 7th hr $150, then $200/hr",
      ends: "Midnight", ownFood: true, ownDrinks: true, corkage: "No corkage",
      distance: "About 2.5 hrs from SJU (est.)",
      take: "Video tour confirmed: Fri Nov 13 at 12:30 PM Eastern (1:30 PM Puerto Rico time); Judith will call from the hacienda. Ticks every box: covered gazebo for 100, our own food and drinks, cheap. $500 holds the date.",
      includes: "Covered gazebo, bar, stage, 100 chairs, tables, ice, generator, security, A/C dressing room. Free on-site ceremony.",
      link: "https://haciendalmf.com", linkLabel: "haciendalmf.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "tres-casitas", name: "Hacienda Tres Casitas", town: "Cabo Rojo", status: "both",
      price: "Custom quote coming", priceNote: "Full-property buyout for 100",
      ends: "Flexible with a buyout (to confirm)", ownFood: true, ownDrinks: true, corkage: "Corkage not stated",
      distance: "About 2.5 hrs from SJU (est.)",
      take: "Private and flexible, but they usually cap at 50. Tour to make sure 100 fits.",
      link: "https://haciendatrescasitas.com/wedding/", linkLabel: "haciendatrescasitas.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "jardines-del-castillo", name: "Los Jardines del Castillo", town: "Trujillo Alto", status: "both",
      price: "Package with their food (6 hrs)", priceNote: "Extra hours $700 + tax each; $1,070 holds the date",
      ends: "Not stated", ownFood: false, ownDrinks: true, corkage: "No corkage; bartender included",
      distance: "About 25 min from SJU (est.)",
      take: "FaceTime tour confirmed: Fri Nov 13 at 12:00 PM Eastern (1:00 PM Puerto Rico time) with Carol Castillo. Closest to San Juan, covered tent, our own alcohol free. Their food is required.",
      link: "https://www.instagram.com/losjardinesdelcastillo/", linkLabel: "Instagram",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] },

    { slug: "marias-luxury-villa", name: "María's Luxury Villa", town: "Rincón", status: "both",
      price: "$10,543.50 for 3 nights", priceNote: "Includes the villa stay + $3,000 event fee; refundable deposit TBD. No 8-hr space-only option",
      ends: "Not stated", ownFood: true, ownDrinks: true, corkage: "Bring everything ourselves",
      distance: "About 2.5 hrs from SJU (est.)",
      take: "Beach villa for 100 with lodging for us. Pricier, and we bring every rental. (Its sister Villa Bajo Blanco only fits 40.)",
      link: "https://www.mariasbeach.com/", linkLabel: "mariasbeach.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] },

    { slug: "hacienda-santiago", name: "Hacienda Santiago", town: "Dorado", status: "tbd",
      price: "Packages PDF; venue-only price not given", priceNote: "",
      ends: "Not stated", ownFood: null, ownDrinks: null, corkage: "Not answered",
      distance: "About 35 min from SJU (est.)",
      take: "Pretty gardens and a big covered gazebo near San Juan. Still need the date and BYO rules.",
      link: "https://haciendasantiagopr.com/", linkLabel: "haciendasantiagopr.com",
      photos: ["1.jpg","2.jpg","3.jpg"] },

    { slug: "casa-de-espana", name: "Casa de España", town: "San Juan", status: "tbd",
      price: "$5,352 for 6 hrs (Sept quote)", priceNote: "1 extra hr max, $800",
      ends: "Midnight (1 am with the extra hour)", ownFood: true, ownDrinks: true, corkage: "No corkage",
      distance: "About 15 min from SJU (est.)",
      take: "Best bring-your-own deal in the city with an A/C salon. Not a hacienda. Need to ask about Nov 13.",
      link: "https://www.casadeespanapr.com/bodas", linkLabel: "casadeespanapr.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "villa-flor", name: "Hacienda Villa Flor", town: "Peñuelas", status: "tbd",
      price: "$1,700 for 8 hrs", priceNote: "Tables, chairs, stage, cleaning, parking for 100",
      ends: "Not answered", ownFood: null, ownDrinks: null, corkage: "Not answered",
      distance: "About 1.5 hrs from SJU, near Ponce (est.)",
      take: "Cheapest hacienda rent so far. Still need the date, end time and BYO answers.",
      link: "https://haciendavillaflor.com/", linkLabel: "haciendavillaflor.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] },

    { slug: "el-jibarito", name: "Hacienda El Jibarito", town: "San Sebastián", status: "nov20",
      price: "$4,175.68 for 8 hrs", priceNote: "Event hall at a hotel",
      ends: "1:00 am", ownFood: true, ownDrinks: true, corkage: "No corkage if we bring our own food",
      distance: "About 2 hrs from SJU (est.)",
      take: "Great terms and the latest end time, but only for the backup date (Nov 20).",
      link: "https://www.haciendaeljibarito.com/eventos/", linkLabel: "haciendaeljibarito.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] },

    { slug: "munoz", name: "Hacienda Muñoz", town: "San Lorenzo", status: "nov13",
      price: "Their food: $47–$65 per person", priceNote: "$1,000 deposit to hold",
      ends: "11 pm", ownFood: false, ownDrinks: true, corkage: "Corkage not stated",
      distance: "About 45 min from SJU (est.)",
      take: "Rustic coffee hacienda, fun vibe. Their food only, open-air with no A/C, ends early.",
      link: "https://haciendamunozpr.com/blogs/news/events-at-hacienda-munoz", linkLabel: "haciendamunozpr.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "villa-sotomayor", name: "Hacienda Villa Sotomayor", town: "Adjuntas", status: "tbd",
      price: "$300 gazebo or $350 A/C hall", priceNote: "Hours not stated. Gazebo fits 350; hall fits 150 (up stairs)",
      ends: "Not stated", ownFood: true, ownDrinks: null, corkage: "Not answered",
      distance: "About 2 hrs from SJU, in the mountains (est.)",
      take: "Super cheap mountain option. Far for guests, and date and alcohol rules unknown.",
      link: "https://haciendavillasotomayor.com", linkLabel: "haciendavillasotomayor.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "campo-rico", name: "Hacienda Campo Rico (Mi Casa)", town: "Carolina", status: "tbd",
      price: "$11,484.50 for 8 hrs (Sept quote)", priceNote: "Includes A/C hall, kitchen, chairs, non-alcoholic bar. About $20K with their alcohol (est.)",
      ends: "Not stated", ownFood: true, ownDrinks: false, corkage: "Their bar only; wine/champagne $20 per bottle",
      distance: "About 15 min from SJU (est.)",
      take: "A/C hall near the hotels is a great rain plan, but their bar makes it pricey. Caterer from their list.",
      link: "https://haciendacamporico.com/venue/", linkLabel: "haciendacamporico.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] },

    { slug: "siesta-alegre", name: "Hacienda Siesta Alegre", town: "Río Grande", status: "tbd",
      price: "About $7,700 for 8 hrs (Sept rate, est.)", priceNote: "$5,500 for 6 hrs + 2 hrs $2,200; plus 22% service and 11.5% tax",
      ends: "Not stated", ownFood: true, ownDrinks: false, corkage: "Their bar only",
      distance: "About 40 min from SJU (est.)",
      take: "Classic hacienda with a free bridal-suite night. Their bar is required. Need November prices.",
      link: "https://www.instagram.com/siestaalegrevenue/", linkLabel: "Instagram",
      photos: ["1.jpg","2.jpg"] },

    { slug: "castillo-serralles", name: "Castillo Serrallés", town: "Ponce", status: "tbd",
      price: "$1,700 terrace, 6 pm–midnight", priceNote: "Published rates + 11.5% tax; ceremony area +$200–$500",
      ends: "Midnight", ownFood: true, ownDrinks: true, corkage: "No corkage",
      distance: "About 1.5 hrs from SJU (est.)",
      take: "Dramatic castle, cheap, BYO. Strict noise limits after 10 pm and no reply yet.",
      link: "https://museocastilloserrallespr.com/", linkLabel: "museocastilloserrallespr.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] },

    { slug: "el-bungalow", name: "El Bungalow", town: "Aguada", status: "nov20",
      price: "6-hr rental (quote in their PDF)", priceNote: "",
      ends: "Midnight", ownFood: false, ownDrinks: true, corkage: "No corkage",
      distance: "About 2.25 hrs from SJU (est.)",
      take: "Backup-date only, and their food is required. Low on the list.",
      link: "https://salonbungalow.com/decoracion/", linkLabel: "salonbungalow.com",
      photos: ["1.jpg","2.jpg","3.jpg","4.jpg"] }
  ],

  ruledOut: [
    { name: "Hacienda Azucena (Río Grande)", why: "$45K all-inclusive, no venue-only price." },
    { name: "Hacienda El Lago (Cayey)", why: "Both dates booked." },
    { name: "Hacienda El Amanecer (Camuy)", why: "Both Saturdays booked; offered Sundays." },
    { name: "Finca La Zafra (Gurabo)", why: "Their food required, $12K minimum." },
    { name: "Montis Fiesta (Hatillo)", why: "Max 80 guests, daytime only." },
    { name: "Pelican Point (Rincón)", why: "Property sold." },
    { name: "Museo de Arte de Ponce", why: "Closed for renovations until 2028." },
    { name: "Jardín Botánico de Caguas", why: "No private events Sept–Jan." },
    { name: "Hacienda Tres Ángeles (Adjuntas)", why: "Doesn't host weddings." },
    { name: "Villa Bajo Blanco (Rincón)", why: "Fits only 40 (its sister María's Luxury Villa is in play)." },
    { name: "The Gallery Inn (Old San Juan)", why: "Max 40 for dinner." },
    { name: "Hotel El Convento, Condado Vanderbilt, Antiguo Casino", why: "Fancy hotel-style, $20K–$25K food minimums." },
    { name: "Hilton Ponce", why: "Ballroom packages, not our vibe." }
  ],

  // Newest first. Copy an entry, change the fields, put it at the top.
  // tone: "good" (green), "wait" (amber), "bad" (red), or "" (neutral)
  journal: [
    { date: "Nov 13", time: "10:53 AM", title: "La Mia Famiglia: video tour confirmed", text: "Judith Rodriguez confirmed a video tour today, Fri Nov 13, at 12:30 PM Eastern (1:30 PM Puerto Rico time). She will call from the hacienda. This is right after the Los Jardines del Castillo FaceTime at 12:00 PM Eastern.", tag: "Video tour", tone: "good" },
    { date: "Nov 12", time: "6:01 PM", title: "Video tours: one confirmed, five pending", text: "Confirmed: FaceTime with Los Jardines del Castillo (Trujillo Alto) on Fri Nov 13 at 12:00 PM Eastern (1:00 PM Puerto Rico time), with Carol Castillo. Video-tour requests went out Nov 12 to Hacienda Siesta Alegre, Hacienda Campo Rico, Casa de España, Hacienda Santiago and Hacienda La Mia Famiglia; still waiting on replies. Windows we asked for: Fri Nov 13, 12–1 PM or after 5 PM Eastern, or Sat Nov 14, 9 AM–noon Eastern.", tag: "Video tour", tone: "good" },
    { date: "Nov 6", time: "12:14 PM", title: "Scouting trip: prefer Thu–Sun", text: "You and Cristal want a Thursday-to-Sunday trip rather than a full work week. Site options and tour drafts were switched to Thu–Sun windows. No date is locked yet.", tag: "Preference", tone: "" },
    { date: "Oct 30", time: "3:59 PM", title: "María's Luxury Villa (Rincón): both dates open", text: "Villa Bajo Blanco only fits 40, so they offered their sister beach villa for 100. $10,543.50 for a 3-night stay including a $3,000 event fee. We bring everything.", tag: "Available", tone: "good" },
    { date: "Oct 30", time: "3:45 PM", title: "Hacienda Cadenas (Carolina): wants their web form", text: "Prices only come by filling in the contact form on their site.", tag: "Form needed", tone: "wait" },
    { date: "Oct 30", time: "1:15 PM", title: "Hacienda Santiago (Dorado): packages, no date yet", text: "Sent a packages PDF but didn't confirm Nov 13 or 20 or answer the BYO questions. Tours Mon and Tue by appointment.", tag: "Date unconfirmed", tone: "wait" },
    { date: "Oct 30", time: "10:31 AM", title: "Hacienda Tres Ángeles: no weddings", text: "They don't rent for weddings or private parties.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 30", time: "8:39 AM", title: "Jardín Botánico de Caguas: unavailable", text: "No private events Sept–Jan because of their holiday programming.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 29", time: "4:22 PM", title: "Hacienda El Jibarito: Nov 20 only", text: "Hall $4,175.68 for 8 hrs, until 1 am, our own food and drinks with no corkage.", tag: "Nov 20 only", tone: "wait" },
    { date: "Oct 29", time: "3:21 PM", title: "Hacienda Villa Sotomayor: prices", text: "Gazebo for 350 at $300 or A/C hall for 150 at $350. Own food OK. Date not confirmed.", tag: "Date unconfirmed", tone: "wait" },
    { date: "Oct 29", time: "3:19 PM", title: "Hacienda La Mia Famiglia: both dates open", text: "$2,500 for 6 hrs in a covered gazebo (about $2,850 for 8). Own food and drinks, no corkage. Ends midnight. $500 holds the date.", tag: "Available", tone: "good" },
    { date: "Oct 29", time: "10:46 AM", title: "Los Jardines del Castillo: both dates open", text: "Their food required; own alcohol with no corkage, bartender included. 6-hr packages.", tag: "Available", tone: "good" },
    { date: "Oct 29", time: "10:20 AM", title: "Hacienda Tres Casitas: both dates open", text: "Own food and drinks OK. 100 guests means a full buyout; custom quote coming.", tag: "Available", tone: "good" },
    { date: "Oct 29", time: "9:38 AM", title: "El Bungalow: Nov 20 only", text: "6-hr rental ending midnight, their food only, own alcohol OK.", tag: "Nov 20 only", tone: "wait" },
    { date: "Oct 29", time: "8:50 AM", title: "Montis Fiesta: too small", text: "Max 80 guests and daytime only.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 29", time: "8:42 AM", title: "Museo de Arte de Ponce: closed", text: "Renovations until 2028.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 29", time: "8:41 AM", title: "Hacienda El Amanecer: booked", text: "Both Saturdays taken; offered Sun Nov 14 or 21.", tag: "Booked", tone: "bad" },
    { date: "Oct 29", time: "8:40 AM", title: "Hacienda Villa Flor: $1,700 for 8 hrs", text: "Includes tables, chairs, stage, cleaning and parking. Date and BYO not answered yet.", tag: "Date unconfirmed", tone: "wait" },
    { date: "Oct 29", time: "7:18 AM", title: "Hacienda Muñoz: Nov 13 open", text: "Their food only ($47–$65 per person), own drinks OK, ends 11 pm.", tag: "Available", tone: "good" },
    { date: "Oct 28", time: "7:27 PM", title: "Hacienda El Lago: booked", text: "Both dates taken.", tag: "Booked", tone: "bad" },
    { date: "Oct 28", time: "6:16 PM", title: "Finca La Zafra: no venue-only rental", text: "Their food required, $12K minimum.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 28", time: "5:44 PM", title: "Pelican Point: sold", text: "The property is no longer rented.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 28", time: "5:39 PM", title: "Quote requests sent to 27 venues", text: "Asked each for the 8-hr venue-only price, latest end time, and whether we can bring our own food and alcohol.", tag: "", tone: "" },
    { date: "Oct 28", time: "", title: "Hacienda Azucena ruled out", text: "$45K all-inclusive with no venue-only price.", tag: "Ruled out", tone: "bad" },
    { date: "Oct 28", time: "", title: "Date moved to Sat Nov 13, 2027", text: "Moved from September for lower hurricane risk. Backup: Sat Nov 20.", tag: "Decision", tone: "" },
    { date: "Oct 28", time: "", title: "Puerto Rico it is", text: "Picked over Cartagena and Miami. About 100 guests, a fun party, haciendas preferred, our own food and drinks preferred.", tag: "Decision", tone: "" }
  ],

  trip: {
    dates: "Planned: Thu Dec 3 – Sun Dec 6 (tours not requested yet)",
    note: "Draft plan for Thu–Sun (your preference). No tours are booked yet. On a Thu–Sun trip you get Thu and Fri for most venue offices; weekends are travel or optional look-sees. Hacienda Santiago's posted tours are Mon/Tue, so ask for a special slot or skip it.",
    days: [
      { day: "Thu · Fly in + San Juan side", plan: "Morning flight to SJU if you can (JetBlue FLL ~6:25 am → ~10:00 am). Afternoon: Los Jardines del Castillo (Trujillo Alto) and optional Casa de España. Sleep in San Juan." },
      { day: "Fri · West coast push", plan: "Leave early. Hacienda Villa Flor (Peñuelas), then Cabo Rojo for La Mia Famiglia and Tres Casitas (or split one to Saturday morning by appointment). Sleep in Cabo Rojo or Rincón." },
      { day: "Sat · West coast / beach", plan: "María's Luxury Villa (Rincón) if Friday was packed, or a second Cabo Rojo tour. Drive back toward San Juan (~2.5 hrs)." },
      { day: "Sun · Fly home", plan: "Morning flight. Put a deposit on the winner within days of getting home." }
    ],
    tour: ["Hacienda La Mia Famiglia", "Hacienda Tres Casitas", "Los Jardines del Castillo", "María's Luxury Villa", "Hacienda Villa Flor", "Casa de España (optional)", "Hacienda Santiago (only if they allow a Thu/Fri visit)"],
    flights: [
      { route: "FLL → SJU · Nov 12–15", fare: "Frontier one-way Thu from ~$79; JetBlue from ~$99; nearby RT from ~$102 (Nov 6 check)", href: "https://www.google.com/travel/flights/search?tfs=EAAaHhIKMjAyNi0xMS0xMmoHCAESA0ZMTHIHCAESA1NKVRoeEgoyMDI2LTExLTE1agcIARIDU0pVcgcIARIDRkxMQAFIAZgBAQ&curr=USD&hl=en" },
      { route: "FLL → SJU · Dec 3–6", fare: "Frontier nonstop RT from $376 for 2 ($188 each), 5:00 PM out; JetBlue from $474 incl. 6:15 AM. From MIA: $296 for 2 but lands 1:58 AM (Google Flights, Nov 5 check)", href: "https://www.google.com/travel/flights/search?tfs=EAAaHhIKMjAyNi0xMi0wM2oHCAESA0ZMTHIHCAESA1NKVRoeEgoyMDI2LTEyLTA2agcIARIDU0pVcgcIARIDRkxMQAFIAZgBAQ&curr=USD&hl=en" }
    ],
    flightNote: "Round trip per person, nonstop estimates checked Fri Nov 6, 2026. Blackouts: Orlando through Sun Nov 8, engagement party Nov 20–22. Prices move fast. Rent a car at SJU: west-coast venues are about 2–2.5 hrs away.",
    other: [
      "Thu Nov 12 – Sun Nov 15: soonest after Orlando. Only Thu+Fri for most offices.",
      "Thu Dec 3 – Sun Dec 6: after the engagement party. Same Thu+Fri office pattern."
    ]
  }
};
