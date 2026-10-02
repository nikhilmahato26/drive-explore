export interface WhatsAppEnquiryParams {
  vehicleName?: string;
  category?: string;
  travelDate?: string;
  travelTime?: string;
  pickupLocation?: string;
  fullName?: string;
  passengers?: string;
  additionalNotes?: string;
}

export const WHATSAPP_PHONE = "919101517053";

export function generateWhatsAppLink(params?: WhatsAppEnquiryParams | string): string {
  if (typeof params === "string") {
    const text = encodeURIComponent(params);
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  }

  if (!params || (!params.vehicleName && !params.category && !params.pickupLocation)) {
    const defaultMsg = "Hello Drive Explore Northeast & Tours, I would like to enquire about your vehicle rental and tour services. Please share the available options and details.";
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const { vehicleName, category, travelDate, travelTime, pickupLocation, fullName, passengers, additionalNotes } = params;

  let message = `Hello Drive Explore Northeast & Tours,`;

  if (vehicleName) {
    message += ` I am interested in renting the ${vehicleName}`;
    if (category) {
      message += ` (${category})`;
    }
    message += `.`;
  } else if (category) {
    message += ` I am interested in exploring vehicle rental options in the ${category} category.`;
  } else {
    message += ` I would like to enquire about your vehicle rental services.`;
  }

  const details: string[] = [];
  if (fullName) details.push(`Name: ${fullName}`);
  if (pickupLocation) details.push(`Pickup Location: ${pickupLocation}`);
  if (travelDate) details.push(`Travel Date: ${travelDate}${travelTime ? ` at ${travelTime}` : ""}`);
  if (passengers) details.push(`Passengers: ${passengers}`);
  if (additionalNotes) details.push(`Requirements: ${additionalNotes}`);

  if (details.length > 0) {
    message += `\n\nBooking Details:\n` + details.map(d => `• ${d}`).join("\n");
  }

  message += `\n\nPlease share the availability and rental details.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
