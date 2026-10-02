import React from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const MobileCTA: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-warm-300 shadow-2xl p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href={`tel:+91${businessInfo.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-warm-100 hover:bg-warm-200 text-charcoal-900 border border-warm-300 text-[11px] font-bold transition active:scale-95"
        >
          <Phone className="w-4 h-4 text-forest-800 mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 text-[11px] font-bold transition active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* BOOK */}
        <a
          href="#booking"
          onClick={scrollToBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-[11px] font-bold shadow transition active:scale-95"
        >
          <CalendarCheck className="w-4 h-4 text-gold-400 mb-0.5" />
          <span>BOOK</span>
        </a>
      </div>
    </div>
  );
};
