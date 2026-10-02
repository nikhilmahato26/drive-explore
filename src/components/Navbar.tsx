import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, CalendarCheck } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Vehicles", href: "/vehicles" },
    { label: "Cars", href: "/vehicles?category=Car" },
    { label: "SUVs", href: "/vehicles?category=SUV" },
    { label: "Bikes", href: "/vehicles?category=Bike" },
    { label: "Scooty", href: "/vehicles?category=Scooty" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top 24x7 Announcement Bar */}
      <div className="bg-forest-900 text-warm-100 text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-gold-500 text-charcoal-950">
              {businessInfo.serviceAvailability}
            </span>
            <span className="hidden sm:inline text-warm-200">
              Vehicle rental enquiries in Hojai, Assam
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+91 {businessInfo.phone}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-warm-200"
            : "bg-white py-4 border-b border-warm-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-800 rounded-lg p-1"
            >
              <img
                src="/images/logo.png"
                alt="Drive Explore Northeast & Tours Logo"
                className={`transition-all duration-300 drop-shadow-sm ${
                  isScrolled ? "w-10 h-10 sm:w-11 sm:h-11" : "w-12 h-12 sm:w-14 sm:h-14"
                }`}
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg md:text-xl tracking-wider text-forest-900 group-hover:text-forest-700 transition-colors leading-tight uppercase">
                  Drive Explore
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-gold-600 uppercase">
                  Northeast &amp; Tours
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-charcoal-800 hover:text-forest-800 transition-colors relative py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-forest-900 bg-forest-50 hover:bg-forest-100 border border-forest-200 rounded-lg transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-charcoal-900 bg-warm-100 hover:bg-warm-200 border border-warm-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-forest-800" />
                <span>{businessInfo.phone}</span>
              </a>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-white bg-forest-900 hover:bg-forest-800 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <CalendarCheck className="w-4 h-4 text-gold-400" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="p-2 text-forest-900 bg-forest-50 hover:bg-forest-100 rounded-lg transition-colors border border-forest-200"
                aria-label="Call Business"
              >
                <Phone className="w-5 h-5 text-forest-800" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-charcoal-800 hover:text-forest-900 hover:bg-warm-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-warm-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-forest-50 hover:text-forest-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-warm-200 flex flex-col gap-2.5">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-forest-900 text-white font-bold text-sm shadow hover:bg-forest-800 transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-gold-400" />
                <span>Book Now</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-warm-300 bg-warm-50 text-charcoal-900 font-semibold text-xs hover:bg-warm-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-forest-800" />
                  <span>Call Us</span>
                </a>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-950 font-semibold text-xs hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
