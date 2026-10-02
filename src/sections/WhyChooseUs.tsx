import React from "react";
import { CarFront, Clock, MapPin, Sliders, MessageCircle, Building2 } from "lucide-react";
import { whyChooseUsReasons } from "../data/services";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CarFront: <CarFront className="w-6 h-6 text-forest-800" />,
    Clock: <Clock className="w-6 h-6 text-forest-800" />,
    MapPin: <MapPin className="w-6 h-6 text-forest-800" />,
    Sliders: <Sliders className="w-6 h-6 text-forest-800" />,
    MessageCircle: <MessageCircle className="w-6 h-6 text-forest-800" />,
    Building2: <Building2 className="w-6 h-6 text-forest-800" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
            Our Business Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
            WHY DRIVE EXPLORE NORTHEAST &amp; TOURS?
          </h2>
          <p className="text-base text-charcoal-700 font-medium">
            Dedicated vehicle rental solutions tailored for exploring Northeast India with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsReasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-warm-50 rounded-3xl p-6 sm:p-7 border border-warm-200 shadow-soft hover:shadow-card transition duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-warm-200 flex items-center justify-center mb-5 group-hover:bg-forest-900 group-hover:text-white transition-colors shadow-xs">
                  {iconMap[reason.iconName]}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-950 mb-2 group-hover:text-forest-800 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-warm-200/80 flex items-center gap-1.5 text-xs font-semibold text-forest-800">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
