/**
 * Single source of truth for everything business-specific.
 *
 * Every detail below that isn't marked TODO was taken from the Google
 * Business Profile for Star Growth Hub.
 *
 * ---------------------------------------------------------------
 *  BEFORE GOING LIVE - fill in the TODOs
 *   1. whatsappNumber   (build FAILS until this is set)
 *   2. phone            (phone links hide themselves until set)
 *   3. url              (your real domain)
 *   4. social.google    (your Google Maps listing share link)
 * ---------------------------------------------------------------
 */

export const site = {
  name: "Star Growth Hub",
  legalName: "Star Growth Hub",
  tagline: "Digital Marketing Agency in Bengaluru",

  // Google's own category for the listing.
  category: "Marketing agency",

  // TODO: replace with your live domain (no trailing slash).
  url: "https://stargrowthhub.com",

  description:
    "Star Growth Hub is a 5-star rated digital marketing agency in Banashankari, Bengaluru. We build SEO, Google Ads, Meta Ads, websites and branding that turn local searches into paying customers.",

  /**
   * TODO - REQUIRED. Country code + number, digits only, no "+", no spaces.
   * e.g. "919876543210"
   *
   * Left empty on purpose: a placeholder number would send real enquiries to
   * a stranger. `pnpm build` refuses to produce a deployable site until this
   * is filled in. `pnpm dev` works regardless, so you can still preview.
   */
  whatsappNumber: "",

  /**
   * TODO - the number people should call. Leave empty and every phone link
   * on the site hides itself rather than showing a fake one.
   * Example: phone "+91 98765 43210", phoneHref "tel:+919876543210"
   */
  phone: "",
  phoneHref: "",

  email: "stargrowthhub@gmail.com",

  address: {
    street: "18, 1st Floor, 80 Feet Road",
    // Landmark matters more than the street for local search in Bengaluru.
    landmark: "Near Bangalore One, BSK 1st Stage",
    locality: "Srinivasnagar, Banashankari",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560050",
    country: "IN",
    countryName: "India",
  },

  // Approximate coordinates for 80 Feet Road, BSK 1st Stage.
  // Optional: fine-tune from the pin on your Google Business Profile.
  geo: { latitude: 12.9426, longitude: 77.5626 },

  rating: { value: "5.0", count: 5 },

  hours: {
    label: "Mon – Sat, 10:00 am – 7:00 pm",
    closed: "Closed on Sundays",
    schema: ["Mo-Sa 10:00-19:00"],
  },

  social: {
    // From the LinkedIn result on your listing. Verify the exact URL - the
    // search snippet omitted whether it sits under /in/ or /company/.
    linkedin: "https://in.linkedin.com/in/star-growth-hub-2772a9424",
    instagram: "",
    facebook: "",
    // TODO: open your listing in Google Maps -> Share -> Copy link, and
    // paste it here. It's what tells Google this site and that listing are
    // the same business.
    google: "",
  },

  areasServed: [
    "Banashankari",
    "Jayanagar",
    "JP Nagar",
    "Basavanagudi",
    "Rajajinagar",
    "Kumaraswamy Layout",
    "Girinagar",
    "Padmanabhanagar",
    "Uttarahalli",
    "Bengaluru South",
  ],
} as const;

/**
 * Fail the production build rather than ship a site whose every call to
 * action is broken. Guarded to the server so it can never throw in a
 * visitor's browser.
 */
if (
  typeof window === "undefined" &&
  process.env.NODE_ENV === "production" &&
  !site.whatsappNumber
) {
  throw new Error(
    "\n\n  Star Growth Hub: `whatsappNumber` is not set in src/lib/site.ts\n" +
      "  Every button on the site links to WhatsApp, so the build is stopped here.\n" +
      '  Set it to your number in the form "919876543210" (country code, digits only).\n' +
      "  `pnpm dev` still runs if you just want to preview.\n",
  );
}

export const hasPhone = Boolean(site.phone && site.phoneHref);

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/**
 * Builds a wa.me deep link. Everything the user typed is packed into the
 * message body so the enquiry lands in WhatsApp fully formed - no backend,
 * no database, no form service to pay for.
 */
export function whatsappLink(message: string, number: string = site.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}`;
