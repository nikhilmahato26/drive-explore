import React from "react";
import { MessageCircle, CalendarCheck, Bike, ArrowRight } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const BikeSection: React.FC = () => {
  const bikes = [
    {
      name: "Royal Enfield Scram 411",
      category: "Bike",
      image: "/images/cars/scram-411.webp",
      desc: "Motorcycle for independent travel.",
    },
    {
      name: "NS 200",
      category: "Bike",
      image: "/images/cars/ns-200.webp",
      desc: "Experience your journey from a different perspective.",
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
            vehicleType: "Bike",
          },
        })
      );
    }
  };

  const handleGeneralBikeEnquiry = () => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleType: "Bike",
            vehicleName: "Royal Enfield Scram 411",
          },
        })
      );
    }
  };

  return (
    <section id="bikes" className="py-16 sm:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with bike road trip aesthetic */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-card border border-warm-200 bg-charcoal-900">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/travel/bike-tour.webp"
              alt="Motorcycle touring in Northeast mountains"
              className="w-full h-full object-cover opacity-35 filter saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 max-w-2xl text-white space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider border border-forest-700">
              <Bike className="w-3.5 h-3.5" />
              <span>Motorcycle Section</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              TWO WHEELS. MORE FREEDOM.
            </h2>
            <p className="text-base sm:text-lg text-warm-200 font-medium leading-relaxed">
              Choose a motorcycle and experience your journey from a different perspective.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGeneralBikeEnquiry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-sm shadow-md transition"
              >
                <span>Enquire About Bikes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Motorcycle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bikes.map((bike) => {
            const waUrl = generateWhatsAppLink({
              vehicleName: bike.name,
              category: "Bike",
            });

            return (
              <div
                key={bike.name}
                className="bg-warm-50 rounded-3xl border border-warm-200 shadow-soft hover:shadow-card transition flex flex-col overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-white p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-forest-800 uppercase tracking-widest block mb-1">
                      Category: {bike.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-charcoal-950 uppercase">
                      {bike.name}
                    </h3>
                    <p className="text-sm text-charcoal-700 mt-2 font-medium leading-relaxed">
                      "{bike.desc}"
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-warm-200 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleEnquire(bike.name)}
                      className="py-3 px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <CalendarCheck className="w-4 h-4 text-gold-400" />
                      <span>Enquire</span>
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
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
