import React from "react";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Compass, ShieldCheck, MapPin, Clock } from "lucide-react";
import { businessInfo } from "../data/services";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-warm-100 border-b border-warm-200">
      {/* Background with optimized image and overlay designed for high contrast and readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/travel/hero-northeast.webp"
          alt="Scenic Northeast India mountain highway"
          className="w-full h-full object-cover object-center filter saturate-[0.85] brightness-[0.95]"
        />
        {/* Dual gradient overlay: soft light tint on left for text legibility, transparent on right to showcase landscape */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-50/95 via-warm-50/85 to-transparent md:to-warm-50/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-50 via-transparent to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 text-warm-50 text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            DRIVE EXPLORE NORTHEAST
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-950 font-display tracking-tight leading-[1.1] text-balance mb-4"
          >
            EXPLORE NORTHEAST. <span className="text-forest-800 underline decoration-gold-500 decoration-4 underline-offset-8">YOUR WAY.</span>
          </motion.h1>

          {/* Supporting Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl font-bold text-forest-900 mb-4"
          >
            Cars, Bikes &amp; Scooters for Your Next Journey
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-charcoal-800 leading-relaxed mb-8 max-w-xl font-medium"
          >
            Choose your ride and explore the roads, landscapes and destinations of Northeast India with Drive Explore Northeast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm sm:text-base shadow-lift transition-all transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5 text-gold-400" />
              <span>Explore Vehicles</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-warm-100 text-forest-900 border-2 border-forest-800 font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all"
            >
              <CalendarCheck className="w-5 h-5 text-forest-700" />
              <span>Book Now</span>
            </a>

            {/* Third CTA */}
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-warm-200/90 hover:bg-warm-300 text-charcoal-900 font-bold text-sm sm:text-base transition-colors"
            >
              <Phone className="w-5 h-5 text-forest-800" />
              <span>Call {businessInfo.phone}</span>
            </a>
          </motion.div>

          {/* Key Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 pt-6 border-t border-forest-900/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-charcoal-800"
          >
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-full bg-forest-100 text-forest-800">
                <Clock className="w-4 h-4" />
              </span>
              <span>24×7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-full bg-forest-100 text-forest-800">
                <MapPin className="w-4 h-4" />
              </span>
              <span>Based in Hojai, Assam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-full bg-forest-100 text-forest-800">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span>Cars, SUVs, Bikes &amp; Scooty</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
