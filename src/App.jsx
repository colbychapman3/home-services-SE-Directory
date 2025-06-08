import React, { useState, useMemo } from 'react'
import { Home, Search, Phone, MapPin, Star, Clock, CheckCircle, Menu, X, Wrench, Zap, Thermometer, Bug, Hammer, Paintbrush, Trees, Shield, Settings, User, Mail, Building, MessageSquare, ChevronDown, Filter } from 'lucide-react'
import './App.css'
import Chatbot from './components/Chatbot'

const serviceCategories = [
  { id: 'plumbing', name: 'Plumbing', icon: Wrench, color: 'bg-pink-100 border-pink-300 text-pink-700' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: 'bg-purple-100 border-purple-300 text-purple-700' },
  { id: 'hvac', name: 'HVAC', icon: Thermometer, color: 'bg-orange-100 border-orange-300 text-orange-700' },
  { id: 'pest', name: 'Pest Control', icon: Bug, color: 'bg-green-100 border-green-300 text-green-700' },
  { id: 'contractors', name: 'General Contractors', icon: Hammer, color: 'bg-red-100 border-red-300 text-red-700' },
  { id: 'painting', name: 'Painting', icon: Paintbrush, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { id: 'landscaping', name: 'Landscaping', icon: Trees, color: 'bg-pink-100 border-pink-300 text-pink-700' },
  { id: 'roofing', name: 'Roofing', icon: Shield, color: 'bg-green-100 border-green-300 text-green-700' },
  { id: 'septic', name: 'Septic Services', icon: Settings, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { id: 'handyman', name: 'Handyman', icon: User, color: 'bg-gray-100 border-gray-300 text-gray-700' }
]

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
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    city: '',
    phone: '',
    email: '',
    description: '',
    services: '',
    hours: '',
    website: ''
  })

  // Handler functions for buttons
  const handleViewDetails = (provider) => {
    setSelectedProvider(provider)
    setShowDetailsModal(true)
  }

  const handleCallNow = (phoneNumber) => {
    // Remove any formatting and create tel: link
    const cleanPhone = phoneNumber.replace(/[^\d]/g, '')
    window.location.href = `tel:${cleanPhone}`
  }

  const closeDetailsModal = () => {
    setShowDetailsModal(false)
    setSelectedProvider(null)
  }

  const filteredProviders = useMemo(() => {
    return serviceProviders.filter(provider => {
      const categoryName = serviceCategories.find(cat => cat.id === provider.category)?.name || ''
      
      const matchesSearch = searchTerm === '' || 
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase())) ||
        categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === '' || provider.category === selectedCategory
      const matchesCity = selectedCity === '' || provider.city === selectedCity
      
      return matchesSearch && matchesCategory && matchesCity
    })
  }, [searchTerm, selectedCategory, selectedCity])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedCity('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your submission! We will review your business information and contact you within 2-3 business days.')
    setFormData({
      businessName: '',
      category: '',
      city: '',
      phone: '',
      email: '',
      description: '',
      services: '',
      hours: '',
      website: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Best Home Services Near Me
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 drop-shadow-md max-w-3xl mx-auto">
              Top-rated local contractors in Waycross, Brunswick, Hoboken & all Southeast Georgia
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for services near me (e.g., emergency plumber, HVAC repair, electrician)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 bg-white border-2 border-white rounded-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">44+</div>
                <div className="text-blue-100 text-lg">Local Businesses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">8</div>
                <div className="text-blue-100 text-lg">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">24/7</div>
                <div className="text-blue-100 text-lg">Emergency Services</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">4.8★</div>
                <div className="text-blue-100 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 drop-shadow-sm">
            Top-Rated Local Services Near You
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Find trusted 24/7 emergency services and highly-rated local contractors in Waycross, Brunswick, and surrounding areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${category.color} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-center group`}
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm sm:text-base block">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">All Cities</option>
                <option value="Waycross">Waycross</option>
                <option value="Brunswick">Brunswick</option>
                <option value="Hoboken">Hoboken</option>
                <option value="Blackshear">Blackshear</option>
                <option value="Folkston">Folkston</option>
                <option value="Jesup">Jesup</option>
                <option value="Nahunta">Nahunta</option>
                <option value="Baxley">Baxley</option>
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">All Services</option>
                {serviceCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              
              <button
                onClick={clearFilters}
                className="px-6 py-3 text-lg bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border-2 border-gray-300"
              >
                Clear Filters
              </button>
            </div>
            
            <div className="text-lg font-medium text-gray-600">
              {filteredProviders.length} results found
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProviders.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProviders.map((provider) => {
                const categoryInfo = serviceCategories.find(cat => cat.id === provider.category)
                const Icon = categoryInfo?.icon || User
                
                return (
                  <div key={provider.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{provider.name}</h3>
                            {provider.verified && (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center text-gray-600 mb-2 text-lg">
                            <MapPin className="h-5 w-5 mr-2" />
                            {provider.city} • {provider.distance}
                          </div>
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              <Star className="h-5 w-5 text-yellow-400 fill-current" />
                              <span className="ml-1 text-lg font-semibold text-gray-900">{provider.rating}</span>
                              <span className="ml-1 text-gray-600 text-lg">({provider.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{provider.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {provider.services.map((service, index) => (
                          <span key={index} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-6 text-lg">
                        <Clock className="h-5 w-5 mr-2" />
                        {provider.hours}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                          onClick={() => handleViewDetails(provider)}
                          className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => handleCallNow(provider.phone)}
                          className="flex-1 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold flex items-center justify-center"
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )

  const renderAddBusinessPage = () => (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              Add Your Business
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join Southeast Georgia's premier home services directory and connect with local customers
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Service Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  {serviceCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your city</option>
                  <option value="Waycross">Waycross</option>
                  <option value="Brunswick">Brunswick</option>
                  <option value="Hoboken">Hoboken</option>
                  <option value="Blackshear">Blackshear</option>
                  <option value="Folkston">Folkston</option>
                  <option value="Jesup">Jesup</option>
                  <option value="Nahunta">Nahunta</option>
                  <option value="Baxley">Baxley</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(912) 555-0123"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Business Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your business and what makes you unique..."
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Services Offered *
              </label>
              <textarea
                name="services"
                value={formData.services}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your main services (e.g., Emergency Repairs, Installation, Maintenance)"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Business Hours *
              </label>
              <input
                type="text"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Mon-Fri 8AM-5PM, 24/7 Emergency Service"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• We'll review your submission within 2-3 business days</li>
                <li>• Our team will contact you to verify your business information</li>
                <li>• Once approved, your listing will go live on our directory</li>
                <li>• You'll receive instructions on how to manage your listing</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Submit Business Information
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('home')}
                className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold border-2 border-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  const renderAboutPage = () => (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              Best Local Home Services Near Me | Southeast Georgia Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for top-rated emergency services, 24/7 contractors, and verified local businesses in Waycross, Brunswick, Hoboken & surrounding areas since 2025
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every homeowner and business owner in Southeast Georgia deserves access to reliable, 
                trustworthy emergency home service professionals near them. Our comprehensive directory connects you with verified local contractors, 
                licensed technicians, and top-rated service providers who understand the unique needs of the Okefenokee region and Golden Isles area. 
                From 24/7 emergency plumbing to HVAC repair, electrical services, and pest control, we help you find the best local services when you need them most.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Why Choose Our Directory?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Verified Businesses</h3>
                  <p className="text-blue-800">All our featured businesses are verified for licensing, insurance, and quality of service.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Local Focus</h3>
                  <p className="text-green-800">We exclusively feature businesses that serve Southeast Georgia communities.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Real Reviews</h3>
                  <p className="text-purple-800">Authentic customer reviews help you make informed decisions about service providers.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Easy to Use</h3>
                  <p className="text-orange-800">Our mobile-friendly platform makes finding the right service provider quick and simple.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Service Areas</h2>
              <p className="text-lg text-gray-700 mb-4">
                We proudly serve the following Southeast Georgia communities:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Waycross', 'Brunswick', 'Hoboken', 'Blackshear', 'Folkston', 'Jesup', 'Nahunta', 'Baxley'].map(city => (
                  <div key={city} className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                    <span className="text-lg font-semibold text-gray-900">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">For Business Owners</h2>
              <p className="text-lg text-gray-700 mb-4">
                Are you a home service provider in Southeast Georgia? Join our directory to:
              </p>
              <ul className="text-lg text-gray-700 space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Reach more local customers in your service area
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Build trust with verified business badges
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Showcase your services and customer reviews
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Get direct customer inquiries and phone calls
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('add-business')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Add Your Business
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Contact Us</h2>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Have questions or need assistance? We're here to help!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-lg text-gray-700">
                    <Mail className="h-5 w-5 mr-3" />
                    info@southeastgadirectory.com
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Phone className="h-5 w-5 mr-3" />
                    (912) 555-HELP (4357)
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Building className="h-5 w-5 mr-3" />
                    Serving all of Southeast Georgia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Southeast Georgia</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Home Services Directory</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`font-medium text-lg px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Categories
              </button>
              <button 
                onClick={() => setCurrentPage('add-business')}
                className={`font-medium text-lg px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'add-business' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Add Business
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`font-medium text-lg px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'about' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <nav className="space-y-2">
                <button 
                  onClick={() => {
                    setCurrentPage('home')
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left font-medium text-lg px-3 py-3 rounded-lg transition-colors ${
                    currentPage === 'home' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('home')
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium text-lg px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Categories
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('add-business')
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left font-medium text-lg px-3 py-3 rounded-lg transition-colors ${
                    currentPage === 'add-business' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Add Business
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('about')
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left font-medium text-lg px-3 py-3 rounded-lg transition-colors ${
                    currentPage === 'about' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  About
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'add-business' && renderAddBusinessPage()}
      {currentPage === 'about' && renderAboutPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-lg font-bold">Southeast Georgia</h3>
                  <p className="text-sm text-gray-300">Directory</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Connecting Southeast Georgia residents with trusted local home service providers.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Waycross</li>
                <li>Brunswick</li>
                <li>Hoboken</li>
                <li>Blackshear</li>
                <li>Folkston</li>
                <li>Jesup</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Plumbing</li>
                <li>Electrical</li>
                <li>HVAC</li>
                <li>Pest Control</li>
                <li>General Contractors</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => setCurrentPage('add-business')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Add Your Business
                  </button>
                </li>
                <li>Advertise With Us</li>
                <li>Business Resources</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2025 Southeast Georgia Home Services Directory. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 text-lg">
              Serving the Okefenokee region and Golden Isles with pride.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot 
        serviceProviders={serviceProviders}
        serviceCategories={serviceCategories}
        cities={['Waycross', 'Brunswick', 'Hoboken', 'Blackshear', 'Folkston', 'Jesup', 'Nahunta', 'Baxley']}
      />

      {/* Details Modal */}
      {showDetailsModal && selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProvider.name}</h2>
                  <div className="flex items-center text-blue-100">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{selectedProvider.city} • {selectedProvider.distance}</span>
                  </div>
                </div>
                <button 
                  onClick={closeDetailsModal}
                  className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Rating and Verification */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400 mr-3">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-lg font-semibold text-gray-900">{selectedProvider.rating}</span>
                  </div>
                  <span className="text-gray-600">({selectedProvider.reviews} reviews)</span>
                </div>
                {selectedProvider.verified && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span className="font-semibold">Verified</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProvider.description}</p>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProvider.services.map((service, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span>{selectedProvider.hours}</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-2 text-green-500" />
                    <span className="font-medium">{selectedProvider.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-red-500" />
                    <span>{selectedProvider.city}, Georgia</span>
                  </div>
                  
                  {/* Website Link */}
                  {selectedProvider.website && (
                    <div className="flex items-center text-gray-700">
                      <Building className="h-5 w-5 mr-2 text-blue-500" />
                      <a 
                        href="https://www.yellowpages.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                      >
                        Visit Business Website
                      </a>
                    </div>
                  )}
                  
                  {/* Social Media Links */}
                  {selectedProvider.socialMedia && (
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Follow Us:</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProvider.socialMedia.facebook && (
                          <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <span className="mr-1">📘</span>
                            Facebook
                          </a>
                        )}
                        {selectedProvider.socialMedia.instagram && (
                          <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-pink-600 text-white text-sm rounded-lg hover:bg-pink-700 transition-colors"
                          >
                            <span className="mr-1">📷</span>
                            Instagram
                          </a>
                        )}
                        {selectedProvider.socialMedia.google && (
                          <a 
                            href="https://www.google.com/maps" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <span className="mr-1">🔍</span>
                            Google Maps
                          </a>
                        )}
                        {selectedProvider.socialMedia.linkedin && (
                          <a 
                            href="https://www.linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition-colors"
                          >
                            <span className="mr-1">💼</span>
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleCallNow(selectedProvider.phone)}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {selectedProvider.phone}
                </button>
                <button 
                  onClick={closeDetailsModal}
                  className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

