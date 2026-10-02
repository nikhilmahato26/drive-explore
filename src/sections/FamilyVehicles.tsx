import React from "react";
import { MessageCircle, CalendarCheck, Users } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const FamilyVehicles: React.FC = () => {
  const list = [
    {
      name: "Bolero",
      category: "Family / Utility",
      image: "/images/cars/bolero.webp",
      desc: "Practical vehicle option for different travel requirements.",
    },
    {
      name: "Alto K10",
      category: "Car",
      image: "/images/cars/alto.webp",
      desc: "Choose from multiple car options for convenient travel.",
    },
    {
      name: "Maruti Suzuki Ertiga",
      category: "Family / Utility",
      image: "/images/cars/ertiga.webp",
      desc: "Family/group-friendly vehicle option for Northeast journeys.",
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
    <section id="people-carrier" className="py-16 sm:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Family &amp; Utility Options</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
              TRAVEL TOGETHER
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-700 max-w-md font-medium">
            Practical vehicle options for different travel requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item) => {
            const waUrl = generateWhatsAppLink({
              vehicleName: item.name,
              category: item.category,
            });

            return (
              <div
                key={item.name}
                className="bg-white rounded-2xl border border-warm-200 shadow-soft hover:shadow-card transition flex flex-col overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-warm-50 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-forest-800 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-charcoal-950 uppercase">
                      {item.name}
                    </h3>
                    <p className="text-sm text-charcoal-700 mt-2 font-medium leading-relaxed">
                      "{item.desc}"
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-warm-200 grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleEnquire(item.name, item.category)}
                      className="py-2.5 px-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-gold-400" />
                      <span>Enquire</span>
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
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
