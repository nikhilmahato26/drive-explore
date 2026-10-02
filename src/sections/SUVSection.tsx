import React from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const SUVSection: React.FC = () => {
  const suvList = [
    {
      name: "Scorpio-N",
      category: "SUV",
      image: "/images/cars/scorpio-n.webp",
      desc: "Premium SUV option for your Northeast journey.",
    },
    {
      name: "Scorpio-S11",
      category: "SUV",
      image: "/images/cars/scorpio-s11.webp",
      desc: "SUV options for travel and exploration across Northeast India.",
    },
    {
      name: "Thar 3 Door",
      category: "SUV",
      image: "/images/cars/thar.webp",
      desc: "SUV option for your Northeast road journey.",
    },
    {
      name: "Maruti Brezza",
      category: "SUV",
      image: "/images/cars/brezza.webp",
      desc: "SUV option for travel and exploration.",
    },
  ];

  const handleEnquire = (name: string) => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleName: name,
            vehicleType: "SUV",
          },
        })
      );
    }
  };

  return (
    <section id="suv" className="py-16 sm:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with mountain road imagery and clean text */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-card border border-warm-200 bg-charcoal-900">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/travel/road-trip.webp"
              alt="Mountain Road Northeast SUV"
              className="w-full h-full object-cover opacity-35 filter saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 max-w-2xl text-white space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              SUV Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              SUV ADVENTURES START HERE
            </h2>
            <p className="text-base sm:text-lg text-warm-200 font-medium leading-relaxed">
              Choose an SUV and take your Northeast journey beyond the ordinary.
            </p>
          </div>
        </div>

        {/* SUV Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suvList.map((suv) => {
            const waUrl = generateWhatsAppLink({
              vehicleName: suv.name,
              category: "SUV",
            });

            return (
              <div
                key={suv.name}
                className="bg-warm-50 rounded-2xl border border-warm-200 overflow-hidden shadow-soft hover:shadow-card transition flex flex-col group"
              >
                <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={suv.image}
                    alt={suv.name}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-forest-800 uppercase tracking-widest block mb-1">
                      SUV Option
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-charcoal-950 uppercase">
                      {suv.name}
                    </h3>
                    <p className="text-xs text-charcoal-700 mt-1 font-medium leading-relaxed">
                      "{suv.desc}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-warm-200 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleEnquire(suv.name)}
                      className="py-2 px-3 rounded-lg bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <CalendarCheck className="w-3 h-3 text-gold-400" />
                      <span>Enquire</span>
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp</span>
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
