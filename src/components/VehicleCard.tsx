import React from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import type { Vehicle } from "../data/vehicles";
import { generateWhatsAppLink } from "../utils/whatsapp";

interface VehicleCardProps {
  vehicle: Vehicle;
  onEnquire?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onEnquire }) => {
  const whatsappUrl = generateWhatsAppLink({
    vehicleName: vehicle.name,
    category: vehicle.category,
  });

  const handleEnquireClick = () => {
    if (onEnquire) {
      onEnquire(vehicle);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleName: vehicle.name,
            vehicleType: vehicle.category,
          },
        })
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-warm-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Vehicle Image Container */}
      <div className="relative aspect-[16/10] bg-warm-100 overflow-hidden flex items-center justify-center p-4">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-forest-900 text-warm-50 shadow-sm border border-forest-800">
            {vehicle.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-extrabold text-xl text-charcoal-950 uppercase tracking-tight mb-2 group-hover:text-forest-800 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-sm text-charcoal-700 leading-relaxed mb-6 font-medium">
            "{vehicle.description}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-warm-200">
          <button
            type="button"
            onClick={handleEnquireClick}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Enquire Now</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs sm:text-sm transition-colors"
            title={`WhatsApp enquiry for ${vehicle.name}`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
