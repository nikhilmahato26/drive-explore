import React from "react";
import { Compass, MessageCircle, Phone } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-warm-50 py-16 sm:py-20 border-y-4 border-gold-500">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-forest-800 text-gold-400 text-xs sm:text-sm font-bold tracking-widest uppercase border border-forest-700">
          Drive Explore Northeast
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
          READY TO EXPLORE NORTHEAST?
        </h2>

        <p className="text-base sm:text-xl text-warm-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Choose your ride and start planning your next journey with Drive Explore Northeast.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
          <a
            href="#vehicles"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Compass className="w-5 h-5 text-charcoal-950" />
            <span>Explore Vehicles</span>
          </a>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:+91${businessInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 border border-forest-600 text-white font-bold text-sm sm:text-base transition"
          >
            <Phone className="w-5 h-5 text-gold-400" />
            <span>Call {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
