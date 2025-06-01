/**
 * Schema markup utilities for Phardev
 * JSON-LD structured data generation
 */

import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { DEFAULT_SEO } from "@/lib/constants/seo"

/**
 * Organization schema markup
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PHARDEV_CONFIG.name,
    description: PHARDEV_CONFIG.description,
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/logo-phardev.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHARDEV_CONFIG.contact.phone,
      contactType: "customer service",
      email: PHARDEV_CONFIG.contact.email,
      availableLanguage: "French",
      areaServed: "FR",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: PHARDEV_CONFIG.contact.address,
    },
    sameAs: [
      PHARDEV_CONFIG.social.linkedin,
      PHARDEV_CONFIG.social.twitter,
      PHARDEV_CONFIG.social.github,
    ],
    foundingDate: "2016",
    numberOfEmployees: "4-10",
    industry: "Software Development",
    serviceArea: {
      "@type": "Country",
      name: "France",
    },
  }
}

/**
 * Website schema markup
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PHARDEV_CONFIG.name,
    description: PHARDEV_CONFIG.description,
    url: DEFAULT_SEO.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${DEFAULT_SEO.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: PHARDEV_CONFIG.name,
      logo: `${DEFAULT_SEO.siteUrl}/logo-phardev.png`,
    },
  }
}

/**
 * Breadcrumb schema markup
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
