import { site, hasPhone } from "./site";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * LocalBusiness — the single most valuable schema for a physical agency.
 * It feeds the address, opening hours, service list and the 5.0 star
 * rating into Google's knowledge panel and local pack.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "MarketingAgency", "LocalBusiness"],
  "@id": ORG_ID,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  // Omitted entirely rather than published as a placeholder — a wrong
  // number in structured data is worse than no number at all.
  ...(hasPhone ? { telephone: site.phone } : {}),
  email: site.email,
  image: `${site.url}/opengraph-image`,
  // Square brand mark, not the wide share card — this is what Google pulls
  // into a knowledge panel, and it expects a logo rather than a banner.
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.landmark}`,
    addressLocality: `${site.address.locality}, ${site.address.city}`,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: site.areasServed.map((name) => ({
    "@type": "City",
    name: `${name}, ${site.address.city}`,
  })),
  sameAs: Object.values(site.social).filter(Boolean),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital marketing services",
    itemListElement: [
      "Search engine optimisation",
      "Google Ads / pay-per-click management",
      "Meta Ads (Instagram & Facebook)",
      "Web design and development",
      "Branding and logo design",
      "Social media marketing",
      "Local SEO and Google Business Profile management",
      "Lead generation",
      "Content management",
      "Email marketing",
      "Graphic design",
      "Technical SEO audits",
      "Link building",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, provider: { "@id": ORG_ID } },
    })),
  },
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: site.url,
  name: site.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
} as const;

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  const url = `${site.url}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author, worksFor: { "@id": ORG_ID } },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
    image: `${site.url}/opengraph-image`,
  };
}

export function serviceSchema(name: string, description: string, slug?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    // Anchors the entity to the section of /services that describes it, so
    // Google can associate the two rather than treating them as unrelated.
    ...(slug ? { url: `${site.url}/services/#${slug}` } : {}),
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: site.address.city },
  };
}
