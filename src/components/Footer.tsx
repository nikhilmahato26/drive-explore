import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-warm-100 pt-16 pb-24 md:pb-12 border-t-4 border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Drive Explore Northeast"
                className="w-14 h-14 object-contain filter drop-shadow-md"
              />
              <div>
                <span className="font-display font-extrabold text-lg text-white block uppercase tracking-wider">
                  Drive Explore
                </span>
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-widest block">
                  Northeast
                </span>
              </div>
            </Link>
            <p className="text-sm text-warm-300 leading-relaxed">
              Cars, SUVs, bikes and scooty rentals for your Northeast journey.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-xs font-semibold text-gold-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{businessInfo.serviceAvailability} Available</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-warm-300">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="hover:text-gold-400 transition-colors">
                  Vehicles Fleet
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Car" className="hover:text-gold-400 transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Bike" className="hover:text-gold-400 transition-colors">
                  Bikes
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Scooty" className="hover:text-gold-400 transition-colors">
                  Scooty
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-gold-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Categories */}
          <div>
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest-500"></span>
              Vehicle Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-warm-300">
              <li>
                <Link to="/vehicles?category=SUV" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>SUVs (Scorpio-N, Thar, Brezza)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Car" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Cars (Alto K10)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Family / Utility" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Family / Utility (Bolero, Ertiga)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Bike" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Bikes (Scram 411, NS 200)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                </Link>
              </li>
              <li>
                <Link to="/vehicles?category=Scooty" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Scooty (Convenient Two-Wheeler)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              Contact Us
            </h3>
            
            <div className="space-y-3 text-sm text-warm-300">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="flex items-start gap-3 hover:text-gold-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 {businessInfo.phone}</span>
              </a>

              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-start gap-3 hover:text-gold-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{businessInfo.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest-400 mt-1 shrink-0" />
                <span>{businessInfo.address.full}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 text-xs font-semibold border border-charcoal-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Google Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-400 gap-4">
          <p>© 2026 Drive Explore Northeast. All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Lanka, Shillong Road, Ward No. 11, Hojai, Assam – 782446
          </p>
        </div>
      </div>
    </footer>
  );
};
