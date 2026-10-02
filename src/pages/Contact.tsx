import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactSection } from "../sections/Contact";
import { BookingSection } from "../sections/Booking";
import { CTASection } from "../components/CTASection";

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us &amp; Location | Drive Explore Northeast &amp; Tours</title>
        <meta
          name="description"
          content="Contact Drive Explore Northeast &amp; Tours in Hojai, Assam. Phone: 9101517053. Email: driveexplorenortheast8@gmail.com. 24x7 service availability."
        />
      </Helmet>

      {/* Banner */}
      <section className="bg-forest-900 text-warm-50 py-16 sm:py-20 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Hojai, Assam
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            CONTACT &amp; LOCATION
          </h1>
          <p className="text-sm sm:text-base text-warm-200 max-w-2xl mx-auto font-medium">
            Reach out around the clock for vehicle rental enquiries and Northeast journey planning.
          </p>
        </div>
      </section>

      <ContactSection />
      <BookingSection />
      <CTASection />
    </>
  );
};
