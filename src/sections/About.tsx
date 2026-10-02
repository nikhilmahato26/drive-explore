import React from "react";
import { MapPin, Clock, Check, Compass, Phone } from "lucide-react";
import { businessInfo } from "../data/services";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-warm-100/60 border-y border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Logo and Visual Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-warm-200 shadow-lift max-w-sm w-full flex flex-col items-center">
              <div className="relative mb-5">
                <img
                  src="/images/logo.png"
                  alt="Drive Explore Northeast &amp; Tours Official Logo"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-forest-900 text-warm-50 text-[11px] font-bold uppercase tracking-widest">
                  Official Brand Emblem
                </span>
                <h4 className="font-display font-extrabold text-xl text-charcoal-950 uppercase tracking-tight">
                  DRIVE EXPLORE NORTHEAST &amp; TOURS
                </h4>
                <p className="text-xs text-charcoal-700 font-medium">
                  Lanka, Shillong Road, Ward No. 11, Hojai, Assam
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-warm-200 w-full flex items-center justify-center gap-4 text-xs font-semibold text-forest-900">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-600" />
                  24×7 Service
                </span>
                <span className="w-1 h-1 rounded-full bg-warm-300" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  Hojai, Assam
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Offerings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-forest-800">
                About The Business
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight leading-tight">
                EXPLORE MORE. <span className="text-forest-800">TRAVEL FREELY.</span>
              </h2>
            </div>

            <div className="p-5 rounded-2xl bg-white border-l-4 border-forest-800 shadow-soft">
              <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-semibold">
                "{businessInfo.aboutCopy}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Based at Lanka, Shillong Road, Ward No. 11 in Hojai, Assam, Drive Explore Northeast &amp; Tours provides dependable mobility options tailored for Northeast travel. Whether you need a rugged SUV for hilly terrain, a comfortable family carrier, a city car, or a two-wheeler for open-air freedom, vehicle enquiries and assistance are available 24×7.
            </p>

            {/* Factual Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warm-200 shadow-xs">
                <div className="p-1 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                  <Check className="w-4 h-4 text-forest-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Hojai, Assam Location</h4>
                  <p className="text-xs text-charcoal-600">Conveniently located on Lanka, Shillong Road.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warm-200 shadow-xs">
                <div className="p-1 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                  <Check className="w-4 h-4 text-forest-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">24×7 Service</h4>
                  <p className="text-xs text-charcoal-600">Assistance and booking enquiries around the clock.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warm-200 shadow-xs">
                <div className="p-1 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                  <Check className="w-4 h-4 text-forest-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Cars &amp; SUVs</h4>
                  <p className="text-xs text-charcoal-600">Options including Scorpio-N, Thar 3 Door, Brezza &amp; Alto.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warm-200 shadow-xs">
                <div className="p-1 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                  <Check className="w-4 h-4 text-forest-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Bikes &amp; Scooty</h4>
                  <p className="text-xs text-charcoal-600">Scram 411, NS 200 and Scooty options for riders.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#vehicles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Browse All 10 Vehicles</span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-warm-200 hover:bg-warm-300 text-charcoal-900 font-bold text-sm transition"
              >
                <Phone className="w-4 h-4 text-forest-800" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
