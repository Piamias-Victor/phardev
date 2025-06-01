/**
 * SEO Metadata utilities for Phardev
 * Generation automatique des meta tags optimisés
 */

import { DEFAULT_SEO, SEO_TEMPLATES } from "@/lib/constants/seo"
import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  canonical?: string
  noindex?: boolean
  type?: "website" | "article"
}

/**
 * Generate SEO metadata for pages
 */
export function generateMetadata({
  title,
  description = DEFAULT_SEO.description,
  keywords = [...DEFAULT_SEO.keywords], // Spread pour éviter readonly
  image = DEFAULT_SEO.image,
  canonical,
  noindex = false,
  type = "website",
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | Phardev` : DEFAULT_SEO.title

  const siteUrl = DEFAULT_SEO.siteUrl
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: DEFAULT_SEO.author }],
    creator: DEFAULT_SEO.author,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName: "Phardev",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || "Phardev - Solutions Innovation Pharmaceutique",
        },
      ],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: "@phardev_fr",
    },
    alternates: {
      canonical: fullCanonical,
    },
  }
}

/**
 * Get page-specific SEO templates
 */
export function getPageSEO(page: keyof typeof SEO_TEMPLATES) {
  return SEO_TEMPLATES[page] || SEO_TEMPLATES.home
}
