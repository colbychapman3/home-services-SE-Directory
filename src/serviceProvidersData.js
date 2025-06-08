const serviceProviders = [
  // PLUMBING SERVICES (5 businesses)
  {
    id: 1,
    name: "Okefenokee Plumbing Services",
    category: "plumbing",
    city: "Waycross",
    phone: "(912) 283-4567",
    rating: 4.8,
    reviews: 127,
    description: "Full-service plumbing for Southeast Georgia. Emergency repairs, installations, and maintenance.",
    services: ["Emergency Repairs", "Water Heater Installation", "Drain Cleaning", "Pipe Repair"],
    hours: "24/7 Emergency Service",
    verified: true,
    distance: "2.3 miles",
    website: "https://okefenokee-plumbing.com",
    socialMedia: {
      facebook: "https://facebook.com/okefenokee.plumbing",
      instagram: "https://instagram.com/okefenokee_plumbing",
      google: "https://g.page/okefenokee-plumbing-waycross"
    }
  },
  {
    id: 2,
    name: "Brunswick Plumbing & Drain",
    category: "plumbing",
    city: "Brunswick",
    phone: "(912) 265-4321",
    rating: 4.6,
    reviews: 89,
    description: "Trusted plumbing services for the Golden Isles. Residential and commercial plumbing solutions.",
    services: ["Leak Repair", "Sewer Line Cleaning", "Fixture Installation", "Backflow Testing"],
    hours: "Mon-Fri 7AM-6PM, Emergency On-Call",
    verified: true,
    distance: "8.2 miles",
    website: "https://brunswickplumbingdrain.com",
    socialMedia: {
      facebook: "https://facebook.com/brunswick.plumbing",
      google: "https://g.page/brunswick-plumbing-drain"
    }
  },
  {
    id: 3,
    name: "Reliable Plumbing Solutions",
    category: "plumbing",
    city: "Jesup",
    phone: "(912) 427-8901",
    rating: 4.7,
    reviews: 156,
    description: "Professional plumbing services with over 20 years of experience in Southeast Georgia.",
    services: ["Water Heater Repair", "Toilet Installation", "Garbage Disposal", "Pipe Replacement"],
    hours: "Mon-Sat 8AM-5PM",
    verified: true,
    distance: "19.1 miles",
    website: "https://reliableplumbingga.com",
    socialMedia: {
      facebook: "https://facebook.com/reliable.plumbing.jesup",
      instagram: "https://instagram.com/reliableplumbingga",
      google: "https://g.page/reliable-plumbing-jesup"
    }
  },
  {
    id: 4,
    name: "Blackshear Plumbing Co",
    category: "plumbing",
    city: "Blackshear",
    phone: "(912) 449-7654",
    rating: 4.5,
    reviews: 73,
    description: "Local plumbing experts serving Pierce County and surrounding areas.",
    services: ["Emergency Service", "Repiping", "Drain Cleaning", "Water Line Repair"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "16.8 miles",
    website: "https://blackshearplumbing.net",
    socialMedia: {
      facebook: "https://facebook.com/blackshear.plumbing",
      google: "https://g.page/blackshear-plumbing-co"
    }
  },
  {
    id: 5,
    name: "Folkston Plumbing & Repair",
    category: "plumbing",
    city: "Folkston",
    phone: "(912) 496-3210",
    rating: 4.4,
    reviews: 62,
    description: "Family-owned plumbing business serving Charlton County for over 15 years.",
    services: ["Well Pump Repair", "Septic Connections", "Bathroom Remodeling", "Kitchen Plumbing"],
    hours: "Mon-Fri 7AM-4PM",
    verified: true,
    distance: "13.7 miles",
    website: "https://folkstonplumbing.com",
    socialMedia: {
      facebook: "https://facebook.com/folkston.plumbing.repair",
      google: "https://g.page/folkston-plumbing-repair"
    }
  },

  // ELECTRICAL SERVICES (5 businesses)
  {
    id: 6,
    name: "Golden Isles Electric",
    category: "electrical",
    city: "Brunswick",
    phone: "(912) 265-8901",
    rating: 4.9,
    reviews: 89,
    description: "Licensed electricians serving the Golden Isles area. Residential and commercial electrical services.",
    services: ["Panel Upgrades", "Outlet Installation", "Lighting Design", "Generator Installation"],
    hours: "Mon-Fri 8AM-6PM, Emergency Service",
    verified: true,
    distance: "8.2 miles",
    website: "https://goldenisleselectric.com",
    socialMedia: {
      facebook: "https://facebook.com/golden.isles.electric",
      instagram: "https://instagram.com/goldenisleselectric",
      google: "https://g.page/golden-isles-electric",
      linkedin: "https://linkedin.com/company/golden-isles-electric"
    }
  },
  {
    id: 7,
    name: "Waycross Electric Company",
    category: "electrical",
    city: "Waycross",
    phone: "(912) 283-7890",
    rating: 4.6,
    reviews: 134,
    description: "Full-service electrical contractor with over 25 years serving Southeast Georgia.",
    services: ["Wiring", "Circuit Breakers", "Electrical Repairs", "Code Compliance"],
    hours: "Mon-Sat 7AM-6PM",
    verified: true,
    distance: "2.1 miles",
    website: "https://waycrosselectric.net",
    socialMedia: {
      facebook: "https://facebook.com/waycross.electric",
      google: "https://g.page/waycross-electric-company"
    }
  },
  {
    id: 8,
    name: "Coastal Electric Solutions",
    category: "electrical",
    city: "Brunswick",
    phone: "(912) 264-5678",
    rating: 4.7,
    reviews: 98,
    description: "Modern electrical solutions for homes and businesses along the Georgia coast.",
    services: ["Smart Home Wiring", "Solar Installation", "EV Charger Setup", "Electrical Inspections"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "8.5 miles",
    website: "https://coastalelectricga.com",
    socialMedia: {
      facebook: "https://facebook.com/coastal.electric.solutions",
      instagram: "https://instagram.com/coastalelectricga",
      google: "https://g.page/coastal-electric-solutions"
    }
  },
  {
    id: 9,
    name: "Jesup Electrical Services",
    category: "electrical",
    city: "Jesup",
    phone: "(912) 427-3456",
    rating: 4.5,
    reviews: 67,
    description: "Reliable electrical services for Wayne County and surrounding areas.",
    services: ["Residential Wiring", "Commercial Electric", "Troubleshooting", "Safety Inspections"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "19.3 miles",
    website: "https://jesupelectrical.com",
    socialMedia: {
      facebook: "https://facebook.com/jesup.electrical",
      google: "https://g.page/jesup-electrical-services"
    }
  },
  {
    id: 10,
    name: "Hoboken Electric & Repair",
    category: "electrical",
    city: "Hoboken",
    phone: "(912) 458-2345",
    rating: 4.3,
    reviews: 45,
    description: "Local electrician serving Hoboken and surrounding communities with quality service.",
    services: ["Home Rewiring", "Ceiling Fans", "Outdoor Lighting", "Electrical Maintenance"],
    hours: "Mon-Sat 8AM-5PM",
    verified: false,
    distance: "5.2 miles",
    socialMedia: {
      facebook: "https://facebook.com/hoboken.electric.repair",
      google: "https://g.page/hoboken-electric-repair"
    }
  },

  // HVAC SERVICES (5 businesses)
  {
    id: 11,
    name: "Southeast Georgia HVAC",
    category: "hvac",
    city: "Waycross",
    phone: "(912) 283-9012",
    rating: 4.7,
    reviews: 156,
    description: "Complete heating and cooling solutions for Southeast Georgia homes and businesses.",
    services: ["AC Repair", "Heating Installation", "Duct Cleaning", "Maintenance Plans"],
    hours: "Mon-Sat 8AM-6PM, Emergency Service",
    verified: true,
    distance: "2.8 miles",
    website: "https://southeastgahvac.com",
    socialMedia: {
      facebook: "https://facebook.com/southeast.ga.hvac",
      instagram: "https://instagram.com/southeastgahvac",
      google: "https://g.page/southeast-georgia-hvac"
    }
  },
  {
    id: 12,
    name: "Coastal Climate Control",
    category: "hvac",
    city: "Brunswick",
    phone: "(912) 265-1234",
    rating: 4.8,
    reviews: 203,
    description: "Premier HVAC services for the Golden Isles. Energy-efficient solutions and expert repairs.",
    services: ["AC Installation", "Heat Pump Service", "Indoor Air Quality", "Energy Audits"],
    hours: "Mon-Fri 7AM-7PM, Weekend Emergency",
    verified: true,
    distance: "8.1 miles",
    website: "https://coastalclimatecontrol.com",
    socialMedia: {
      facebook: "https://facebook.com/coastal.climate.control",
      instagram: "https://instagram.com/coastalclimatecontrol",
      google: "https://g.page/coastal-climate-control",
      linkedin: "https://linkedin.com/company/coastal-climate-control"
    }
  },
  {
    id: 13,
    name: "Comfort Zone HVAC",
    category: "hvac",
    city: "Jesup",
    phone: "(912) 427-5678",
    rating: 4.6,
    reviews: 89,
    description: "Keeping Wayne County comfortable with reliable HVAC services and competitive pricing.",
    services: ["System Replacement", "Repair Service", "Preventive Maintenance", "Thermostat Installation"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "19.5 miles",
    website: "https://comfortzonehvacga.com",
    socialMedia: {
      facebook: "https://facebook.com/comfort.zone.hvac.jesup",
      google: "https://g.page/comfort-zone-hvac-jesup"
    }
  },
  {
    id: 14,
    name: "Air Pro Heating & Cooling",
    category: "hvac",
    city: "Blackshear",
    phone: "(912) 449-8901",
    rating: 4.4,
    reviews: 76,
    description: "Professional HVAC services for Pierce County. Quality installations and reliable repairs.",
    services: ["AC Repair", "Heating Service", "Ductwork", "Commercial HVAC"],
    hours: "Mon-Sat 8AM-6PM",
    verified: false,
    distance: "17.2 miles",
    website: "https://airprohvacga.net",
    socialMedia: {
      facebook: "https://facebook.com/airpro.heating.cooling",
      google: "https://g.page/air-pro-heating-cooling"
    }
  },
  {
    id: 15,
    name: "Swamp Country Cooling",
    category: "hvac",
    city: "Folkston",
    phone: "(912) 496-4567",
    rating: 4.5,
    reviews: 58,
    description: "Local HVAC experts serving Charlton County with honest service and fair pricing.",
    services: ["AC Installation", "Heat Pump Repair", "Duct Sealing", "Emergency Service"],
    hours: "Mon-Fri 8AM-5PM, Emergency On-Call",
    verified: true,
    distance: "14.1 miles",
    socialMedia: {
      facebook: "https://facebook.com/swamp.country.cooling",
      google: "https://g.page/swamp-country-cooling"
    }
  },

  // PEST CONTROL SERVICES (4 businesses)
  {
    id: 16,
    name: "Swamp Country Pest Control",
    category: "pest-control",
    city: "Folkston",
    phone: "(912) 496-7890",
    rating: 4.6,
    reviews: 112,
    description: "Comprehensive pest control for Southeast Georgia. Residential and commercial extermination services.",
    services: ["Termite Treatment", "Ant Control", "Rodent Removal", "Mosquito Control"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "13.9 miles",
    website: "https://swampcountrypest.com",
    socialMedia: {
      facebook: "https://facebook.com/swamp.country.pest",
      instagram: "https://instagram.com/swampcountrypest",
      google: "https://g.page/swamp-country-pest-control"
    }
  },
  {
    id: 17,
    name: "Golden Isles Pest Solutions",
    category: "pest-control",
    city: "Brunswick",
    phone: "(912) 265-3456",
    rating: 4.7,
    reviews: 145,
    description: "Professional pest management for the Golden Isles area. Eco-friendly and effective solutions.",
    services: ["Bed Bug Treatment", "Wildlife Removal", "Preventive Service", "Commercial Pest Control"],
    hours: "Mon-Sat 8AM-6PM",
    verified: true,
    distance: "8.3 miles",
    website: "https://goldenislespest.com",
    socialMedia: {
      facebook: "https://facebook.com/golden.isles.pest",
      google: "https://g.page/golden-isles-pest-solutions"
    }
  },
  {
    id: 18,
    name: "Waycross Exterminating",
    category: "pest-control",
    city: "Waycross",
    phone: "(912) 283-6789",
    rating: 4.5,
    reviews: 98,
    description: "Local pest control experts serving Ware County for over 30 years with proven results.",
    services: ["Termite Inspection", "Roach Control", "Flea Treatment", "Quarterly Service"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "2.5 miles",
    website: "https://waycrossexterminating.net",
    socialMedia: {
      facebook: "https://facebook.com/waycross.exterminating",
      google: "https://g.page/waycross-exterminating"
    }
  },
  {
    id: 19,
    name: "Southeast Pest Management",
    category: "pest-control",
    city: "Jesup",
    phone: "(912) 427-9012",
    rating: 4.4,
    reviews: 67,
    description: "Reliable pest control services for Wayne County and surrounding areas.",
    services: ["Spider Control", "Wasp Removal", "Lawn Pest Control", "Monthly Treatments"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "19.7 miles",
    socialMedia: {
      facebook: "https://facebook.com/southeast.pest.management",
      google: "https://g.page/southeast-pest-management"
    }
  },

  // GENERAL CONTRACTORS (5 businesses)
  {
    id: 20,
    name: "Coastal Contractors LLC",
    category: "general-contractors",
    city: "Brunswick",
    phone: "(912) 265-7890",
    rating: 4.8,
    reviews: 167,
    description: "Full-service general contracting for the Golden Isles. Residential and commercial construction.",
    services: ["Home Additions", "Kitchen Remodeling", "Bathroom Renovation", "Commercial Build-outs"],
    hours: "Mon-Fri 7AM-6PM",
    verified: true,
    distance: "8.4 miles",
    website: "https://coastalcontractorsllc.com",
    socialMedia: {
      facebook: "https://facebook.com/coastal.contractors.llc",
      instagram: "https://instagram.com/coastalcontractorsllc",
      google: "https://g.page/coastal-contractors-llc",
      linkedin: "https://linkedin.com/company/coastal-contractors-llc"
    }
  },
  {
    id: 21,
    name: "Okefenokee Construction",
    category: "general-contractors",
    city: "Waycross",
    phone: "(912) 283-4567",
    rating: 4.6,
    reviews: 134,
    description: "Trusted general contractor serving Southeast Georgia with quality construction services.",
    services: ["New Construction", "Home Repairs", "Deck Building", "Siding Installation"],
    hours: "Mon-Sat 7AM-5PM",
    verified: true,
    distance: "2.7 miles",
    website: "https://okefenokee-construction.com",
    socialMedia: {
      facebook: "https://facebook.com/okefenokee.construction",
      google: "https://g.page/okefenokee-construction"
    }
  },
  {
    id: 22,
    name: "Heritage Home Builders",
    category: "general-contractors",
    city: "Jesup",
    phone: "(912) 427-2345",
    rating: 4.7,
    reviews: 89,
    description: "Custom home building and renovation specialists serving Wayne County for over 20 years.",
    services: ["Custom Homes", "Renovations", "Flooring Installation", "Roofing"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "19.8 miles",
    website: "https://heritagehomebuildersga.com",
    socialMedia: {
      facebook: "https://facebook.com/heritage.home.builders.ga",
      instagram: "https://instagram.com/heritagehomebuildersga",
      google: "https://g.page/heritage-home-builders-jesup"
    }
  },
  {
    id: 23,
    name: "Reliable Construction Services",
    category: "general-contractors",
    city: "Blackshear",
    phone: "(912) 449-5678",
    rating: 4.5,
    reviews: 76,
    description: "Dependable construction services for Pierce County. Residential and light commercial projects.",
    services: ["Home Repairs", "Additions", "Concrete Work", "Electrical/Plumbing Coordination"],
    hours: "Mon-Fri 7AM-5PM",
    verified: false,
    distance: "17.5 miles",
    website: "https://reliableconstructionga.net",
    socialMedia: {
      facebook: "https://facebook.com/reliable.construction.blackshear",
      google: "https://g.page/reliable-construction-blackshear"
    }
  },
  {
    id: 24,
    name: "Swamp Country Builders",
    category: "general-contractors",
    city: "Folkston",
    phone: "(912) 496-8901",
    rating: 4.4,
    reviews: 58,
    description: "Local builders specializing in rural construction and home improvements in Charlton County.",
    services: ["Pole Barns", "Home Additions", "Porches & Decks", "Metal Roofing"],
    hours: "Mon-Sat 7AM-5PM",
    verified: true,
    distance: "14.3 miles",
    socialMedia: {
      facebook: "https://facebook.com/swamp.country.builders",
      google: "https://g.page/swamp-country-builders"
    }
  },

  // PAINTING SERVICES (4 businesses)
  {
    id: 25,
    name: "Golden Isles Painting Co",
    category: "painting",
    city: "Brunswick",
    phone: "(912) 265-2345",
    rating: 4.8,
    reviews: 123,
    description: "Professional painting services for the Golden Isles. Interior and exterior residential and commercial painting.",
    services: ["Interior Painting", "Exterior Painting", "Pressure Washing", "Deck Staining"],
    hours: "Mon-Sat 7AM-6PM",
    verified: true,
    distance: "8.6 miles",
    website: "https://goldenislespainting.com",
    socialMedia: {
      facebook: "https://facebook.com/golden.isles.painting",
      instagram: "https://instagram.com/goldenislespainting",
      google: "https://g.page/golden-isles-painting-co"
    }
  },
  {
    id: 26,
    name: "Precision Painting Services",
    category: "painting",
    city: "Waycross",
    phone: "(912) 283-5678",
    rating: 4.6,
    reviews: 89,
    description: "Detail-oriented painting contractors serving Southeast Georgia with quality workmanship.",
    services: ["Residential Painting", "Commercial Painting", "Cabinet Refinishing", "Wallpaper Removal"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "3.1 miles",
    website: "https://precisionpaintingga.com",
    socialMedia: {
      facebook: "https://facebook.com/precision.painting.waycross",
      google: "https://g.page/precision-painting-waycross"
    }
  },
  {
    id: 27,
    name: "Country Paint & Design",
    category: "painting",
    city: "Jesup",
    phone: "(912) 427-6789",
    rating: 4.5,
    reviews: 67,
    description: "Creative painting solutions for Wayne County homes and businesses.",
    services: ["Color Consultation", "Faux Finishes", "Trim Work", "Popcorn Ceiling Removal"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "20.1 miles",
    socialMedia: {
      facebook: "https://facebook.com/country.paint.design",
      google: "https://g.page/country-paint-design"
    }
  },
  {
    id: 28,
    name: "Professional Painters Plus",
    category: "painting",
    city: "Blackshear",
    phone: "(912) 449-3456",
    rating: 4.4,
    reviews: 54,
    description: "Experienced painters serving Pierce County with reliable service and competitive pricing.",
    services: ["House Painting", "Fence Staining", "Drywall Repair", "Power Washing"],
    hours: "Mon-Sat 8AM-5PM",
    verified: false,
    distance: "17.8 miles",
    website: "https://professionalpainters-plus.net",
    socialMedia: {
      facebook: "https://facebook.com/professional.painters.plus",
      google: "https://g.page/professional-painters-plus"
    }
  },

  // LANDSCAPING SERVICES (4 businesses)
  {
    id: 29,
    name: "Pine Tree Landscaping",
    category: "landscaping",
    city: "Jesup",
    phone: "(912) 427-4567",
    rating: 4.5,
    reviews: 98,
    description: "Complete landscaping services for Wayne County. Design, installation, and maintenance.",
    services: ["Landscape Design", "Lawn Maintenance", "Tree Service", "Irrigation Systems"],
    hours: "Mon-Sat 7AM-6PM",
    verified: true,
    distance: "20.3 miles",
    website: "https://pinetreelandscapingga.com",
    socialMedia: {
      facebook: "https://facebook.com/pine.tree.landscaping.jesup",
      instagram: "https://instagram.com/pinetreelandscapingga",
      google: "https://g.page/pine-tree-landscaping-jesup"
    }
  },
  {
    id: 30,
    name: "Coastal Lawn & Garden",
    category: "landscaping",
    city: "Brunswick",
    phone: "(912) 265-5678",
    rating: 4.7,
    reviews: 134,
    description: "Premier landscaping and lawn care services for the Golden Isles area.",
    services: ["Lawn Care", "Garden Design", "Mulching", "Seasonal Cleanup"],
    hours: "Mon-Fri 7AM-5PM",
    verified: true,
    distance: "8.8 miles",
    website: "https://coastallawnandgarden.com",
    socialMedia: {
      facebook: "https://facebook.com/coastal.lawn.garden",
      instagram: "https://instagram.com/coastallawnandgarden",
      google: "https://g.page/coastal-lawn-garden"
    }
  },
  {
    id: 31,
    name: "Okefenokee Outdoor Services",
    category: "landscaping",
    city: "Waycross",
    phone: "(912) 283-7890",
    rating: 4.6,
    reviews: 87,
    description: "Full-service outdoor maintenance and landscaping for Southeast Georgia properties.",
    services: ["Mowing", "Trimming", "Leaf Removal", "Landscape Installation"],
    hours: "Mon-Sat 7AM-6PM",
    verified: true,
    distance: "3.4 miles",
    website: "https://okefenokee-outdoor.com",
    socialMedia: {
      facebook: "https://facebook.com/okefenokee.outdoor",
      google: "https://g.page/okefenokee-outdoor-services"
    }
  },
  {
    id: 32,
    name: "Green Thumb Landscaping",
    category: "landscaping",
    city: "Blackshear",
    phone: "(912) 449-6789",
    rating: 4.3,
    reviews: 65,
    description: "Affordable landscaping services for Pierce County homes and small businesses.",
    services: ["Yard Cleanup", "Hedge Trimming", "Flower Bed Design", "Sod Installation"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "18.1 miles",
    socialMedia: {
      facebook: "https://facebook.com/green.thumb.blackshear",
      google: "https://g.page/green-thumb-landscaping-blackshear"
    }
  },

  // ROOFING SERVICES (4 businesses)
  {
    id: 33,
    name: "Okefenokee Roofing & Repair",
    category: "roofing",
    city: "Waycross",
    phone: "(912) 283-8901",
    rating: 4.7,
    reviews: 145,
    description: "Trusted roofing contractor serving Southeast Georgia with quality materials and workmanship.",
    services: ["Roof Replacement", "Leak Repair", "Gutter Installation", "Storm Damage Repair"],
    hours: "Mon-Sat 7AM-6PM",
    verified: true,
    distance: "3.6 miles",
    website: "https://okefenokee-roofing.com",
    socialMedia: {
      facebook: "https://facebook.com/okefenokee.roofing",
      instagram: "https://instagram.com/okefenokee_roofing",
      google: "https://g.page/okefenokee-roofing-repair"
    }
  },
  {
    id: 34,
    name: "Coastal Roofing Solutions",
    category: "roofing",
    city: "Brunswick",
    phone: "(912) 265-9012",
    rating: 4.8,
    reviews: 167,
    description: "Professional roofing services for the Golden Isles. Residential and commercial roofing specialists.",
    services: ["Metal Roofing", "Shingle Installation", "Flat Roof Repair", "Roof Inspections"],
    hours: "Mon-Fri 7AM-6PM",
    verified: true,
    distance: "9.1 miles",
    website: "https://coastalroofingsolutions.com",
    socialMedia: {
      facebook: "https://facebook.com/coastal.roofing.solutions",
      instagram: "https://instagram.com/coastalroofingsolutions",
      google: "https://g.page/coastal-roofing-solutions",
      linkedin: "https://linkedin.com/company/coastal-roofing-solutions"
    }
  },
  {
    id: 35,
    name: "Southeast Roofing Company",
    category: "roofing",
    city: "Jesup",
    phone: "(912) 427-7890",
    rating: 4.6,
    reviews: 89,
    description: "Experienced roofers serving Wayne County with reliable service and competitive pricing.",
    services: ["Asphalt Shingles", "Tile Roofing", "Roof Maintenance", "Emergency Repairs"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "20.5 miles",
    website: "https://southeastroofingco.net",
    socialMedia: {
      facebook: "https://facebook.com/southeast.roofing.company",
      google: "https://g.page/southeast-roofing-company"
    }
  },
  {
    id: 36,
    name: "Reliable Roofing & Construction",
    category: "roofing",
    city: "Blackshear",
    phone: "(912) 449-8901",
    rating: 4.5,
    reviews: 76,
    description: "Dependable roofing services for Pierce County. Quality installations and prompt repairs.",
    services: ["Roof Repair", "Gutter Cleaning", "Skylight Installation", "Ventilation Systems"],
    hours: "Mon-Sat 7AM-5PM",
    verified: false,
    distance: "18.4 miles",
    socialMedia: {
      facebook: "https://facebook.com/reliable.roofing.blackshear",
      google: "https://g.page/reliable-roofing-construction"
    }
  },

  // SEPTIC SERVICES (4 businesses)
  {
    id: 37,
    name: "Blackshear Septic Solutions",
    category: "septic-services",
    city: "Blackshear",
    phone: "(912) 449-2345",
    rating: 4.6,
    reviews: 98,
    description: "Complete septic system services for Pierce County. Installation, repair, and maintenance.",
    services: ["Septic Installation", "Pumping Service", "Drain Field Repair", "System Inspections"],
    hours: "Mon-Fri 8AM-5PM, Emergency Service",
    verified: true,
    distance: "18.7 miles",
    website: "https://blackshearseptic.com",
    socialMedia: {
      facebook: "https://facebook.com/blackshear.septic.solutions",
      google: "https://g.page/blackshear-septic-solutions"
    }
  },
  {
    id: 38,
    name: "Swamp Country Well Drilling",
    category: "septic-services",
    city: "Folkston",
    phone: "(912) 496-5678",
    rating: 4.9,
    reviews: 134,
    description: "Well drilling and septic services for Charlton County. Licensed and insured professionals.",
    services: ["Well Drilling", "Pump Installation", "Septic Systems", "Water Testing"],
    hours: "Mon-Sat 7AM-5PM",
    verified: true,
    distance: "14.8 miles",
    website: "https://swampcountrywell.com",
    socialMedia: {
      facebook: "https://facebook.com/swamp.country.well",
      google: "https://g.page/swamp-country-well-drilling"
    }
  },
  {
    id: 39,
    name: "Waycross Septic & Drain",
    category: "septic-services",
    city: "Waycross",
    phone: "(912) 283-3456",
    rating: 4.5,
    reviews: 87,
    description: "Local septic and drain specialists serving Ware County for over 25 years.",
    services: ["Septic Pumping", "Grease Trap Service", "Drain Cleaning", "System Repairs"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "4.1 miles",
    website: "https://waycrosssepticdrain.net",
    socialMedia: {
      facebook: "https://facebook.com/waycross.septic.drain",
      google: "https://g.page/waycross-septic-drain"
    }
  },
  {
    id: 40,
    name: "Coastal Septic Services",
    category: "septic-services",
    city: "Brunswick",
    phone: "(912) 265-6789",
    rating: 4.4,
    reviews: 76,
    description: "Professional septic services for the Golden Isles area. Residential and commercial systems.",
    services: ["System Design", "Permit Assistance", "Maintenance Contracts", "Emergency Repairs"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "9.3 miles",
    socialMedia: {
      facebook: "https://facebook.com/coastal.septic.services",
      google: "https://g.page/coastal-septic-services"
    }
  },

  // HANDYMAN SERVICES (4 businesses)
  {
    id: 41,
    name: "Reliable Handyman Services",
    category: "handyman",
    city: "Hoboken",
    phone: "(912) 458-7890",
    rating: 4.5,
    reviews: 89,
    description: "Dependable handyman services for small repairs and home improvements in Southeast Georgia.",
    services: ["Home Repairs", "Furniture Assembly", "Drywall Patching", "Minor Plumbing"],
    hours: "Mon-Sat 8AM-6PM",
    verified: true,
    distance: "5.8 miles",
    website: "https://reliablehandymanservices.net",
    socialMedia: {
      facebook: "https://facebook.com/reliable.handyman.hoboken",
      google: "https://g.page/reliable-handyman-services"
    }
  },
  {
    id: 42,
    name: "Fix-It-Right Handyman",
    category: "handyman",
    city: "Waycross",
    phone: "(912) 283-4567",
    rating: 4.6,
    reviews: 123,
    description: "Professional handyman services for Ware County. No job too small, quality work guaranteed.",
    services: ["Door Installation", "Window Repair", "Tile Work", "Painting Touch-ups"],
    hours: "Mon-Fri 8AM-5PM",
    verified: true,
    distance: "4.3 miles",
    website: "https://fixitrighthandyman.com",
    socialMedia: {
      facebook: "https://facebook.com/fixitright.handyman",
      instagram: "https://instagram.com/fixitrighthandyman",
      google: "https://g.page/fix-it-right-handyman"
    }
  },
  {
    id: 43,
    name: "Golden Isles Handyman",
    category: "handyman",
    city: "Brunswick",
    phone: "(912) 265-7890",
    rating: 4.7,
    reviews: 156,
    description: "Skilled handyman services for the Golden Isles area. Honest work at fair prices.",
    services: ["Deck Repair", "Gutter Cleaning", "Light Fixtures", "Pressure Washing"],
    hours: "Mon-Sat 8AM-6PM",
    verified: true,
    distance: "9.5 miles",
    website: "https://goldenisleshandyman.com",
    socialMedia: {
      facebook: "https://facebook.com/golden.isles.handyman",
      google: "https://g.page/golden-isles-handyman"
    }
  },
  {
    id: 44,
    name: "All-Around Handyman Services",
    category: "handyman",
    city: "Jesup",
    phone: "(912) 427-8901",
    rating: 4.3,
    reviews: 67,
    description: "Versatile handyman services for Wayne County. Interior and exterior home maintenance.",
    services: ["Carpentry", "Electrical Basics", "Plumbing Basics", "General Maintenance"],
    hours: "Mon-Fri 8AM-5PM",
    verified: false,
    distance: "18.3 miles",
    socialMedia: {
      facebook: "https://facebook.com/allaround.handyman.jesup",
      google: "https://g.page/all-around-handyman-services"
    }
  }
];

export default serviceProviders;
