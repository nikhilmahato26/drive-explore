import { businessInfo } from "../data/services";

export const getPhoneLink = () => businessInfo.phoneLink;
export const getEmailLink = () => businessInfo.emailLink;
export const getGoogleMapsLink = () => businessInfo.googleMapsLink;
export const getDirectionsUrl = () => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address.full)}`;
};
