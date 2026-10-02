import React from "react";
import { Compass, ArrowRight } from "lucide-react";
import { travelCategories } from "../data/services";

export const NortheastSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Brand Storytelling &amp; Inspiration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
            EXPLORE THE NORTHEAST
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-medium">
            Roads, hills, landscapes and unforgettable journeys — choose your ride and explore Northeast India your way.
          </p>
        </div>

        {/* Travel Categories 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-warm-200 bg-charcoal-950 flex flex-col justify-end min-h-[340px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <span className="text-[10px] font-bold tracking-widest text-gold-400 uppercase">
                  Category 0{idx + 1}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight uppercase">
                  {cat.title}
                </h3>
                <p className="text-xs text-warm-200 font-medium">
                  {cat.subtitle}
                </p>

                <div className="pt-3">
                  <a
                    href="#vehicles"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-white transition-colors"
                  >
                    <span>View vehicles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer about visual positioning */}
        <div className="mt-8 text-center text-xs text-charcoal-500 max-w-2xl mx-auto">
          *Visuals depict the regional beauty of Northeast India for travel inspiration. Service options and rental terms are coordinated from our Hojai, Assam hub.
        </div>
      </div>
    </section>
  );
};
