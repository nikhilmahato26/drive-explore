import React from "react";
import { MessageCircle, CalendarCheck, Sparkles } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const FeaturedVehicles: React.FC = () => {
  const featuredList = [
    {
      name: "SCORPIO-N",
      category: "SUV",
      tagline: "Premium SUV option for your Northeast journey.",
      image: "/images/cars/scorpio-n.webp",
      ctaLabel: "Explore Scorpio-N",
    },
    {
      name: "THAR 3 DOOR",
      category: "SUV",
      tagline: "SUV option for your Northeast road journey.",
      image: "/images/cars/thar.webp",
      ctaLabel: "Explore Thar",
    },
    {
      name: "ROYAL ENFIELD SCRAM 411",
      category: "BIKE",
      tagline: "Motorcycle for independent travel and two-wheeler exploration.",
      image: "/images/cars/scram-411.webp",
      ctaLabel: "Explore Bike",
    },
  ];

  const handleEnquire = (name: string, category: string) => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleName: name,
            vehicleType: category,
          },
        })
      );
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Handpicked Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
              FEATURED VEHICLES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-700 max-w-md font-medium">
            Discover some of the most sought-after rides for exploring Northeast India's scenic roads and mountain routes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredList.map((item) => {
            const waUrl = generateWhatsAppLink({
              vehicleName: item.name,
              category: item.category,
            });

            return (
              <div
                key={item.name}
                className="bg-white rounded-3xl overflow-hidden border border-warm-200 shadow-card hover:shadow-lift transition-all duration-300 flex flex-col group"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] bg-warm-100 overflow-hidden p-6 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-forest-900 text-warm-50 shadow">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-2xl font-extrabold font-display text-charcoal-950 uppercase tracking-tight group-hover:text-forest-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-charcoal-700 mt-2 font-medium leading-relaxed">
                      "{item.tagline}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleEnquire(item.name, item.category)}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                    >
                      <CalendarCheck className="w-4 h-4 text-gold-400" />
                      <span>{item.ctaLabel}</span>
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition flex items-center justify-center"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
