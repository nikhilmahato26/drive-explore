import React from "react";
import { howItWorksSteps } from "../data/services";
import { Car, Sliders, MessageCircle, CheckCircle, Navigation } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <Car className="w-5 h-5 text-forest-800" />,
    <Sliders className="w-5 h-5 text-forest-800" />,
    <MessageCircle className="w-5 h-5 text-forest-800" />,
    <CheckCircle className="w-5 h-5 text-forest-800" />,
    <Navigation className="w-5 h-5 text-gold-600" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-warm-100/60 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
            HOW IT WORKS
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 font-medium">
            Five clear steps to plan your vehicle requirement for Northeast travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {howItWorksSteps.map((item, idx) => (
            <div
              key={item.step}
              className={`relative bg-white rounded-3xl p-6 border shadow-soft flex flex-col justify-between transition hover:-translate-y-1 ${
                idx === 4
                  ? "border-gold-500/60 bg-gradient-to-b from-white to-gold-50/30"
                  : "border-warm-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-800 bg-forest-50 px-2.5 py-1 rounded-md">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-warm-100">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-charcoal-950 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-warm-200 text-[11px] font-bold text-charcoal-400">
                0{idx + 1} / 05
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-charcoal-500">
          *Note: All rentals are confirmed following enquiry verification with Drive Explore Northeast &amp; Tours. Instant or guaranteed availability is subject to direct confirmation.
        </div>
      </div>
    </section>
  );
};
