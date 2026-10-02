export type VehicleCategory = "SUV" | "Car" | "Family / Utility" | "Bike" | "Scooty";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  description: string;
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "scorpio-n",
    name: "Scorpio-N",
    category: "SUV",
    image: "/images/cars/scorpio-n.webp",
    description: "Premium SUV option for your Northeast journey.",
    featured: true,
  },
  {
    id: "scorpio-s11",
    name: "Scorpio-S11",
    category: "SUV",
    image: "/images/cars/scorpio-s11.webp",
    description: "SUV option for travel and exploration across Northeast India.",
    featured: false,
  },
  {
    id: "thar-3-door",
    name: "Thar 3 Door",
    category: "SUV",
    image: "/images/cars/thar.webp",
    description: "SUV option for your Northeast road journey.",
    featured: true,
  },
  {
    id: "bolero",
    name: "Bolero",
    category: "Family / Utility",
    image: "/images/cars/bolero.webp",
    description: "Practical vehicle option for different travel requirements.",
    featured: false,
  },
  {
    id: "maruti-brezza",
    name: "Maruti Brezza",
    category: "SUV",
    image: "/images/cars/brezza.webp",
    description: "SUV option for travel and exploration.",
    featured: false,
  },
  {
    id: "alto-k10",
    name: "Alto K10",
    category: "Car",
    image: "/images/cars/alto.webp",
    description: "Choose from multiple car options for your journey.",
    featured: false,
  },
  {
    id: "maruti-suzuki-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Family / Utility",
    image: "/images/cars/ertiga.webp",
    description: "Family/group-friendly vehicle option for Northeast travel.",
    featured: false,
  },
  {
    id: "royal-enfield-scram-411",
    name: "Royal Enfield Scram 411",
    category: "Bike",
    image: "/images/cars/scram-411.webp",
    description: "Motorcycle for independent travel and two-wheeler exploration.",
    featured: true,
  },
  {
    id: "ns-200",
    name: "NS 200",
    category: "Bike",
    image: "/images/cars/ns-200.webp",
    description: "Choose a motorcycle and experience your journey from a different perspective.",
    featured: false,
  },
  {
    id: "scooty",
    name: "Scooty",
    category: "Scooty",
    image: "/images/cars/scooty.webp",
    description: "Convenient two-wheeler option for local exploration.",
    featured: false,
  },
];

export const vehicleCategories: { key: "ALL" | VehicleCategory; label: string }[] = [
  { key: "ALL", label: "All Vehicles" },
  { key: "SUV", label: "SUVs" },
  { key: "Car", label: "Cars" },
  { key: "Family / Utility", label: "Family / Utility" },
  { key: "Bike", label: "Bikes" },
  { key: "Scooty", label: "Scooty" },
];
