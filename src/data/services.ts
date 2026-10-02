export const businessInfo = {
  name: "Drive Explore Northeast & Tours",
  tagline: "EXPLORE NORTHEAST. YOUR WAY.",
  supportingCopy: "Choose your ride and explore the beauty of Northeast India with Drive Explore Northeast & Tours.",
  subheading: "Cars, Bikes & Scooters for Your Next Journey",
  aboutCopy: "Drive Explore Northeast & Tours is a vehicle rental and tour service based in Hojai, Assam, offering cars, SUVs, a people-carrier option, motorcycles and scooty rentals.",
  phone: "9101517053",
  phoneDisplay: "9101517053",
  phoneLink: "tel:+919101517053",
  whatsappNumber: "9101517053",
  email: "driveexplorenortheast8@gmail.com",
  emailLink: "mailto:driveexplorenortheast8@gmail.com",
  serviceAvailability: "24×7 Service",
  serviceDescription: "Vehicle rental enquiries and travel assistance available around the clock.",
  address: {
    street: "Lanka, Shillong Road, Ward No. 11",
    city: "Hojai",
    state: "Assam",
    pincode: "782446",
    full: "Lanka, Shillong Road, Ward No. 11, Hojai, Assam – 782446",
  },
  googleMapsLink: "https://share.google/mY9VmMqNYfsa8LHmJ",
};

export interface QuickServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export const quickServices: QuickServiceItem[] = [
  {
    id: "cars",
    title: "CARS",
    category: "Car",
    description: "Choose from multiple car options.",
    iconName: "Car",
  },
  {
    id: "suv",
    title: "SUV",
    category: "SUV",
    description: "SUV options for travel and exploration.",
    iconName: "Compass",
  },
  {
    id: "people-carrier",
    title: "PEOPLE CARRIER",
    category: "Family / Utility",
    description: "Family/group-friendly vehicle option.",
    iconName: "Users",
  },
  {
    id: "bikes",
    title: "BIKES",
    category: "Bike",
    description: "Motorcycles for independent travel.",
    iconName: "Bike",
  },
  {
    id: "scooty",
    title: "SCOOTY",
    category: "Scooty",
    description: "Convenient two-wheeler option for local exploration.",
    iconName: "Zap",
  },
];

export const howItWorksSteps = [
  {
    step: "STEP 01",
    title: "Choose Your Vehicle",
    description: "Browse the available cars, SUVs, bikes and scooty.",
  },
  {
    step: "STEP 02",
    title: "Select Your Requirement",
    description: "Tell us your travel date, location and vehicle requirement.",
  },
  {
    step: "STEP 03",
    title: "Send Your Enquiry",
    description: "Contact Drive Explore Northeast & Tours by phone or WhatsApp.",
  },
  {
    step: "STEP 04",
    title: "Confirm Your Rental",
    description: "Confirm availability and rental details with the business.",
  },
  {
    step: "STEP 05",
    title: "START EXPLORING",
    description: "Begin your Northeast journey.",
  },
];

export const whyChooseUsReasons = [
  {
    title: "Multiple Vehicle Types",
    description: "Cars, SUVs, family/utility vehicles, bikes and scooty options.",
    iconName: "CarFront",
  },
  {
    title: "24×7 Service",
    description: "The business explicitly provides 24×7 service.",
    iconName: "Clock",
  },
  {
    title: "Northeast-Focused",
    description: "Branding and positioning centered around exploring Northeast India.",
    iconName: "MapPin",
  },
  {
    title: "Flexible Vehicle Choice",
    description: "Choose between four-wheelers and two-wheelers based on your travel requirement.",
    iconName: "Sliders",
  },
  {
    title: "Easy Enquiry",
    description: "Connect through phone or WhatsApp.",
    iconName: "MessageCircle",
  },
  {
    title: "Hojai Location",
    description: "Based in Hojai, Assam.",
    iconName: "Building2",
  },
];

export const travelCategories = [
  {
    title: "CITY EXPLORATION",
    subtitle: "For local travel.",
    image: "/images/travel/family-travel.webp",
  },
  {
    title: "ROAD TRIPS",
    subtitle: "For longer journeys.",
    image: "/images/travel/road-trip.webp",
  },
  {
    title: "FAMILY TRAVEL",
    subtitle: "For group and family requirements.",
    image: "/images/travel/hero-northeast.webp",
  },
  {
    title: "ADVENTURE RIDES",
    subtitle: "For customers interested in two-wheeler travel.",
    image: "/images/travel/bike-tour.webp",
  },
];
