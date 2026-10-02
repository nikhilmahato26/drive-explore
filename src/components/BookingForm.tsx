import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, MessageCircle, Phone, Calendar, Clock, MapPin, User, Mail, Users, AlertCircle } from "lucide-react";
import { businessInfo } from "../data/services";
import { generateWhatsAppLink } from "../utils/whatsapp";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")),
  vehicleType: z.enum(["Car", "SUV", "People Carrier", "Bike", "Scooty"]),
  vehicle: z.string().min(1, "Please select a vehicle"),
  pickupLocation: z.string().min(2, "Please enter pickup location"),
  travelDate: z.string().min(1, "Please select travel date"),
  travelTime: z.string().optional(),
  returnDate: z.string().optional(),
  returnTime: z.string().optional(),
  passengers: z.string().optional(),
  additionalRequirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      vehicleType: "SUV",
      vehicle: "Scorpio-N",
      pickupLocation: "Hojai / Lanka, Assam",
      travelDate: "",
      travelTime: "10:00 AM",
      returnDate: "",
      returnTime: "06:00 PM",
      passengers: "1-4",
      additionalRequirements: "",
    },
  });

  const selectedVehicleType = watch("vehicleType");

  // Dynamic vehicle options for the dropdown
  const vehicleList = [
    { name: "Scorpio-N", type: "SUV" },
    { name: "Scorpio-S11", type: "SUV" },
    { name: "Thar 3 Door", type: "SUV" },
    { name: "Bolero", type: "People Carrier" },
    { name: "Maruti Brezza", type: "SUV" },
    { name: "Alto K10", type: "Car" },
    { name: "Maruti Suzuki Ertiga", type: "People Carrier" },
    { name: "Royal Enfield Scram 411", type: "Bike" },
    { name: "NS 200", type: "Bike" },
    { name: "Scooty", type: "Scooty" },
  ];

  const currentAvailableVehicles = vehicleList.filter((v) => {
    if (!selectedVehicleType) return true;
    if (selectedVehicleType === "People Carrier") return v.type === "People Carrier";
    return v.type === selectedVehicleType;
  });

  // Listen for custom prefill events from other components
  useEffect(() => {
    const handlePrefill = (e: any) => {
      if (e.detail) {
        if (e.detail.vehicleName) {
          setValue("vehicle", e.detail.vehicleName);
        }
        if (e.detail.vehicleType) {
          const type = e.detail.vehicleType === "Family / Utility" ? "People Carrier" : e.detail.vehicleType;
          setValue("vehicleType", type as any);
        }
        if (e.detail.pickupLocation) {
          setValue("pickupLocation", e.detail.pickupLocation);
        }
        if (e.detail.pickupDate) {
          setValue("travelDate", e.detail.pickupDate);
        }
        if (e.detail.pickupTime) {
          setValue("travelTime", e.detail.pickupTime);
        }
      }
    };

    window.addEventListener("prefill-booking", handlePrefill);
    return () => window.removeEventListener("prefill-booking", handlePrefill);
  }, [setValue]);

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);

    // Format WhatsApp Link
    const waUrl = generateWhatsAppLink({
      vehicleName: data.vehicle,
      category: data.vehicleType,
      travelDate: data.travelDate,
      travelTime: data.travelTime,
      pickupLocation: data.pickupLocation,
      fullName: data.fullName,
      passengers: data.passengers,
      additionalNotes: data.additionalRequirements,
    });

    // Automatically open WhatsApp in a new tab for instant enquiry
    window.open(waUrl, "_blank");
  };

  return (
    <div id="booking" className="max-w-4xl mx-auto bg-white rounded-3xl border border-warm-200 shadow-lift overflow-hidden">
      {/* Header Banner */}
      <div className="bg-forest-900 text-warm-50 p-6 sm:p-8 border-b-2 border-gold-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
              Vehicle Rental Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              BOOK YOUR RIDE
            </h2>
            <p className="text-sm text-warm-200 mt-1">
              Submit your travel requirement to connect directly with Drive Explore Northeast.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-lg bg-forest-800/80 border border-forest-700 text-xs font-semibold text-warm-100">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{businessInfo.serviceAvailability}</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        {submittedData ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-bold font-display text-charcoal-950">
                Enquiry Details Prepared!
              </h3>
              <p className="text-sm text-charcoal-700">
                Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry for{" "}
                <strong>{submittedData.vehicle}</strong> has been formatted.
              </p>
            </div>

            <div className="p-4 bg-warm-100 rounded-2xl max-w-md mx-auto text-left text-xs text-charcoal-800 space-y-1.5 border border-warm-200">
              <p><strong>Pickup:</strong> {submittedData.pickupLocation}</p>
              <p><strong>Travel Date:</strong> {submittedData.travelDate} ({submittedData.travelTime})</p>
              {submittedData.returnDate && (
                <p><strong>Return Date:</strong> {submittedData.returnDate} ({submittedData.returnTime})</p>
              )}
              <p><strong>Contact:</strong> {submittedData.phone}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppLink({
                  vehicleName: submittedData.vehicle,
                  category: submittedData.vehicleType,
                  travelDate: submittedData.travelDate,
                  travelTime: submittedData.travelTime,
                  pickupLocation: submittedData.pickupLocation,
                  fullName: submittedData.fullName,
                  passengers: submittedData.passengers,
                  additionalNotes: submittedData.additionalRequirements,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessInfo.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-charcoal-700 hover:text-charcoal-900 transition"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-forest-700" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  {...register("fullName")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.fullName ? "border-red-500" : "border-warm-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 font-medium">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9101517053"
                  {...register("phone")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.phone ? "border-red-500" : "border-warm-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-forest-700" />
                  <span>Email (Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.email ? "border-red-500" : "border-warm-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Pickup Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-forest-700" />
                  <span>Pickup Location *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lanka / Hojai, Assam"
                  {...register("pickupLocation")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.pickupLocation ? "border-red-500" : "border-warm-300"
                  }`}
                />
                {errors.pickupLocation && (
                  <p className="text-xs text-red-600 font-medium">{errors.pickupLocation.message}</p>
                )}
              </div>

              {/* Vehicle Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                  Vehicle Type *
                </label>
                <select
                  {...register("vehicleType")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                >
                  <option value="SUV">SUV</option>
                  <option value="Car">Car</option>
                  <option value="People Carrier">People Carrier</option>
                  <option value="Bike">Bike</option>
                  <option value="Scooty">Scooty</option>
                </select>
              </div>

              {/* Vehicle Required */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                  Vehicle Required *
                </label>
                <select
                  {...register("vehicle")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.vehicle ? "border-red-500" : "border-warm-300"
                  }`}
                >
                  {currentAvailableVehicles.map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name}
                    </option>
                  ))}
                  {/* Also permit selecting all other supplied options */}
                  {vehicleList
                    .filter((v) => !currentAvailableVehicles.some((cv) => cv.name === v.name))
                    .map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name} ({v.type})
                      </option>
                    ))}
                </select>
                {errors.vehicle && (
                  <p className="text-xs text-red-600 font-medium">{errors.vehicle.message}</p>
                )}
              </div>

              {/* Travel Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-forest-700" />
                  <span>Travel Date *</span>
                </label>
                <input
                  type="date"
                  {...register("travelDate")}
                  className={`w-full px-4 py-2.5 bg-warm-50 border rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition ${
                    errors.travelDate ? "border-red-500" : "border-warm-300"
                  }`}
                />
                {errors.travelDate && (
                  <p className="text-xs text-red-600 font-medium">{errors.travelDate.message}</p>
                )}
              </div>

              {/* Travel Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-forest-700" />
                  <span>Travel Time</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 09:30 AM"
                  {...register("travelTime")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                />
              </div>

              {/* Return Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-forest-700" />
                  <span>Return Date</span>
                </label>
                <input
                  type="date"
                  {...register("returnDate")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                />
              </div>

              {/* Return Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-forest-700" />
                  <span>Return Time</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 06:00 PM"
                  {...register("returnTime")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                />
              </div>

              {/* Number of Passengers */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-forest-700" />
                  <span>Number of Passengers / Travel Party</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 adults, or Solo rider, or Family"
                  {...register("passengers")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                />
              </div>

              {/* Additional Requirements */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                  Additional Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific journey requirements, routes, or questions..."
                  {...register("additionalRequirements")}
                  className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-charcoal-600">
                <AlertCircle className="w-4 h-4 text-forest-700 shrink-0" />
                <span>Rental terms and vehicle scheduling will be confirmed directly with the business.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-gold-400" />
                <span>SEND VEHICLE ENQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
