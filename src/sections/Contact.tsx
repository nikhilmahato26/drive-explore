import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
            Reach Out Anytime
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 font-medium">
            Contact Drive Explore Northeast &amp; Tours for bookings, enquiries and travel mobility assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-warm-50 rounded-3xl p-6 sm:p-10 border border-warm-200 shadow-soft flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/logo.png"
                  alt="Drive Explore Northeast &amp; Tours"
                  className="w-14 h-14 object-contain filter drop-shadow"
                />
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-charcoal-950 uppercase tracking-tight">
                    DRIVE EXPLORE NORTHEAST &amp; TOURS
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 bg-forest-100 px-2.5 py-0.5 rounded-full mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    {businessInfo.serviceAvailability}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-warm-200">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-800 shrink-0">
                    <Phone className="w-5 h-5 text-forest-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:+91${businessInfo.phone}`}
                      className="text-base sm:text-lg font-bold text-charcoal-950 hover:text-forest-800 transition"
                    >
                      +91 {businessInfo.phone}
                    </a>
                    <p className="text-xs text-charcoal-600 mt-0.5">Available 24×7 for rental inquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-warm-200">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-800 shrink-0">
                    <Mail className="w-5 h-5 text-forest-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-sm sm:text-base font-bold text-charcoal-950 hover:text-forest-800 transition break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-warm-200">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-800 shrink-0">
                    <MapPin className="w-5 h-5 text-forest-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                      Office Location
                    </span>
                    <p className="text-sm font-bold text-charcoal-950 leading-relaxed">
                      {businessInfo.address.full}
                    </p>
                    <p className="text-xs text-charcoal-600 mt-1">Lanka, Shillong Road, Ward No. 11, Hojai, Assam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-warm-200">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm shadow transition"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Now</span>
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-warm-100 text-charcoal-900 border border-warm-300 font-bold text-xs sm:text-sm transition"
              >
                <Mail className="w-4 h-4 text-forest-800" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-warm-200 shadow-soft flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
                  Primary Location
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal-950 mt-1">
                  FIND US IN HOJAI
                </h3>
                <p className="text-sm text-charcoal-700 mt-1 font-medium">
                  {businessInfo.address.full}
                </p>
              </div>

              {/* Map Container */}
              <div className="relative rounded-2xl overflow-hidden border border-warm-200 aspect-[16/10] bg-warm-100 shadow-inner flex items-center justify-center">
                <iframe
                  title="Drive Explore Northeast &amp; Tours Location Map"
                  src="https://maps.google.com/maps?q=Lanka,%20Shillong%20Road,%20Ward%20No.%2011,%20Hojai,%20Assam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Google / Business Location Reference Button */}
            <div className="pt-6 mt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-charcoal-600">
                Official Google / Business location reference:
              </span>
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm shadow transition"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>View Location On Google</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-warm-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
