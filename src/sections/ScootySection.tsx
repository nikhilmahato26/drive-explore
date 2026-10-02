import React from "react";
import { MessageCircle, CalendarCheck, Zap } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const ScootySection: React.FC = () => {
  const handleEnquire = () => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleName: "Scooty",
            vehicleType: "Scooty",
          },
        })
      );
    }
  };

  const waUrl = generateWhatsAppLink({
    vehicleName: "Scooty",
    category: "Scooty",
  });

  return (
    <section id="scooty" className="py-16 sm:py-24 bg-warm-100/60 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-warm-200 shadow-card p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Scooty Image */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-lg bg-warm-50 rounded-2xl p-6 border border-warm-200 flex items-center justify-center">
                <img
                  src="/images/cars/scooty.webp"
                  alt="Scooty available for rental"
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-forest-900 text-warm-50 shadow">
                    Category: Scooty
                  </span>
                </div>
              </div>
            </div>

            {/* Scooty Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Two-Wheeler Rental</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
                  SCOOTY AVAILABLE
                </h2>
              </div>

              <div className="p-4 bg-warm-50 rounded-2xl border-l-4 border-gold-500">
                <h3 className="font-display font-extrabold text-2xl text-charcoal-900 uppercase">
                  SCOOTY
                </h3>
                <p className="text-sm sm:text-base text-charcoal-700 mt-1 font-medium leading-relaxed">
                  A convenient two-wheeler option for local travel and exploration.
                </p>
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                Looking for effortless local commuting or short scenic rides? Drive Explore Northeast offers scooty rentals with 24×7 booking assistance. Connect via phone or WhatsApp to verify terms and confirm your ride.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400" />
                  <span>Enquire About Scooty</span>
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold text-sm transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
