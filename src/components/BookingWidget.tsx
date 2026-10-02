import React, { useState, useMemo } from "react";
import { Search, MapPin, Calendar, Clock, Car, ChevronRight, AlertCircle } from "lucide-react";
import { vehicles } from "../data/vehicles";
import { generateWhatsAppLink } from "../utils/whatsapp";

interface BookingWidgetProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSelectVehicle }) => {
  const [pickupLocation, setPickupLocation] = useState("Hojai / Lanka");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00 AM");
  const [vehicleType, setVehicleType] = useState<string>("SUV");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("Scorpio-N");

  // Dynamic vehicle options based on category
  const filteredVehicles = useMemo(() => {
    if (!vehicleType) return vehicles;
    if (vehicleType === "People Carrier") {
      return vehicles.filter((v) => v.category === "Family / Utility");
    }
    return vehicles.filter((v) => v.category === vehicleType);
  }, [vehicleType]);

  const handleTypeChange = (newType: string) => {
    setVehicleType(newType);
    let matched: typeof vehicles = [];
    if (newType === "People Carrier") {
      matched = vehicles.filter((v) => v.category === "Family / Utility");
    } else {
      matched = vehicles.filter((v) => v.category === newType);
    }
    if (matched.length > 0) {
      setSelectedVehicle(matched[0].name);
    } else {
      setSelectedVehicle("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSelectVehicle && selectedVehicle) {
      onSelectVehicle(selectedVehicle);
    }
    
    // Redirect to booking section with prefilled data or open WhatsApp directly
    const targetElement = document.getElementById("booking");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Dispatch a custom event to notify booking form
      window.dispatchEvent(
        new CustomEvent("prefill-booking", {
          detail: {
            vehicleName: selectedVehicle,
            vehicleType: vehicleType,
            pickupLocation,
            pickupDate,
            pickupTime,
          },
        })
      );
    } else {
      // Direct WhatsApp fallback
      const link = generateWhatsAppLink({
        vehicleName: selectedVehicle,
        category: vehicleType,
        pickupLocation,
        travelDate: pickupDate,
        travelTime: pickupTime,
      });
      window.open(link, "_blank");
    }
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 lg:-mt-12">
      <div className="bg-white rounded-2xl shadow-card border border-warm-200 p-5 sm:p-7 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-warm-200">
          <div>
            <span className="text-[11px] font-bold text-forest-700 tracking-wider uppercase block">
              Enquiry Interface
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal-950 flex items-center gap-2">
              <span>FIND YOUR RIDE</span>
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal-600 bg-warm-100 px-3 py-1.5 rounded-lg border border-warm-200 self-start sm:self-auto">
            <AlertCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
            <span>Submit requirements to confirm rental details</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Pickup Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-forest-700" />
              <span>Pickup Location</span>
            </label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="e.g. Hojai / Lanka, Assam"
              className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
              required
            />
          </div>

          {/* Pickup Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-forest-700" />
              <span>Pickup Date</span>
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
            />
          </div>

          {/* Pickup Time */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-forest-700" />
              <span>Pickup Time</span>
            </label>
            <input
              type="text"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              placeholder="e.g. 10:00 AM"
              className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
            />
          </div>

          {/* Vehicle Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-forest-700" />
              <span>Vehicle Type</span>
            </label>
            <select
              value={vehicleType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
            >
              <option value="SUV">SUV</option>
              <option value="Car">Car</option>
              <option value="People Carrier">People Carrier</option>
              <option value="Bike">Bike</option>
              <option value="Scooty">Scooty</option>
            </select>
          </div>

          {/* Dynamic Vehicle Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-forest-700" />
              <span>Vehicle</span>
            </label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
            >
              {filteredVehicles.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Action */}
          <div className="sm:col-span-2 lg:col-span-5 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-warm-200 mt-2">
            <p className="text-xs text-charcoal-600">
              *Enquiry only. Connect directly with Drive Explore Northeast for rental terms and vehicle scheduling.
            </p>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm rounded-xl shadow-md transition-all group"
            >
              <span>Check Vehicle Options</span>
              <ChevronRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
