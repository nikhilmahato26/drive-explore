import React from "react";
import { Clock, Car, Compass, Users, Bike, Zap, ArrowRight } from "lucide-react";
import { businessInfo, quickServices } from "../data/services";

export const ServiceHighlights: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Car: <Car className="w-6 h-6 text-forest-800" />,
    Compass: <Compass className="w-6 h-6 text-forest-800" />,
    Users: <Users className="w-6 h-6 text-forest-800" />,
    Bike: <Bike className="w-6 h-6 text-forest-800" />,
    Zap: <Zap className="w-6 h-6 text-forest-800" />,
  };

  return (
    <section className="pt-16 pb-8 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 24x7 Service Highlight Strip */}
        <div className="bg-forest-900 text-warm-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border-l-8 border-gold-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-2xl bg-forest-800 text-gold-400 shrink-0 border border-forest-700">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-1">
                <span>Availability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                24×7 SERVICE
              </h2>
              <p className="text-sm sm:text-base text-warm-200 mt-1 max-w-2xl font-medium">
                Vehicle rental enquiries and travel assistance available around the clock.
              </p>
            </div>
          </div>

          <a
            href={`tel:+91${businessInfo.phone}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-sm shadow transition shrink-0"
          >
            <span>Call 24×7 Support</span>
          </a>
        </div>

        {/* Quick Service Category Cards (5 Categories) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
              Vehicle Categories
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-charcoal-950 mt-1">
              Choose Your Travel Style
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {quickServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-white rounded-2xl p-5 border border-warm-200 shadow-soft hover:shadow-card hover:border-forest-700/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center mb-4 group-hover:bg-forest-900 group-hover:text-white transition-colors">
                    {iconMap[service.iconName] || <Car className="w-6 h-6 text-forest-800" />}
                  </div>
                  <h4 className="font-display font-extrabold text-base text-charcoal-950 tracking-tight uppercase group-hover:text-forest-800 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-1.5 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-warm-200 flex items-center text-xs font-bold text-forest-800 group-hover:text-forest-950">
                  <span>View Options</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform text-gold-600" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
