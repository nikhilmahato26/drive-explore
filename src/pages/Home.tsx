import React from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "../components/Hero";
import { BookingWidget } from "../components/BookingWidget";
import { ServiceHighlights } from "../sections/ServiceHighlights";
import { About } from "../sections/About";
import { VehicleFleet } from "../sections/VehicleFleet";
import { FeaturedVehicles } from "../sections/FeaturedVehicles";
import { SUVSection } from "../sections/SUVSection";
import { FamilyVehicles } from "../sections/FamilyVehicles";
import { BikeSection } from "../sections/BikeSection";
import { ScootySection } from "../sections/ScootySection";
import { NortheastSection } from "../sections/NortheastSection";
import { HowItWorks } from "../sections/HowItWorks";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { BookingSection } from "../sections/Booking";
import { ContactSection } from "../sections/Contact";
import { CTASection } from "../components/CTASection";

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Drive Explore Northeast | Car &amp; Bike Rental in Hojai Assam</title>
        <meta
          name="description"
          content="Drive Explore Northeast offers car, SUV, bike and scooty rental services in Hojai, Assam with 24×7 service."
        />
        <meta
          name="keywords"
          content="Drive Explore Northeast, Drive Explore Northeast Hojai, car rental Hojai, self drive car Hojai, vehicle rental Hojai, SUV rental Hojai, bike rental Hojai, scooty rental Hojai, Scorpio rental Hojai, Thar rental Hojai, car rental Assam, bike rental Assam, Northeast car rental, Northeast vehicle rental"
        />
      </Helmet>

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Hero Booking Widget */}
      <BookingWidget />

      {/* 3. 24x7 Service Highlight & 4. Service Categories */}
      <ServiceHighlights />

      {/* 5. About Drive Explore Northeast */}
      <About />

      {/* 6. Vehicle Fleet with 7. Vehicle Filters / Search */}
      <VehicleFleet />

      {/* 8. Featured Vehicles (Scorpio-N, Thar 3 Door, Scram 411) */}
      <FeaturedVehicles />

      {/* 9. SUV Section */}
      <SUVSection />

      {/* 10. Family & Utility Vehicles */}
      <FamilyVehicles />

      {/* 11. Bike Section */}
      <BikeSection />

      {/* 12. Scooty Section */}
      <ScootySection />

      {/* 13. Northeast Travel Section */}
      <NortheastSection />

      {/* 14. How It Works */}
      <HowItWorks />

      {/* 15. Why Choose Us */}
      <WhyChooseUs />

      {/* 16. Booking Form */}
      <BookingSection />

      {/* 17. Location / Contact */}
      <ContactSection />

      {/* 18. Final CTA */}
      <CTASection />
    </>
  );
};
