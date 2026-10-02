import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center">
      {/* Tooltip */}
      <div
        className={`hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-charcoal-950 text-white text-xs font-semibold shadow-lg transition-all duration-300 pointer-events-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat With Drive Explore Northeast
      </div>

      {/* Button with subtle pulse animation */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lift transition-transform duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat With Drive Explore Northeast on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping group-hover:opacity-100" />
        <MessageCircle className="relative w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};
