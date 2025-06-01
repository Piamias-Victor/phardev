/**
 * SEO constants and metadata for Phardev
 */

export const DEFAULT_SEO = {
  title: 'Phardev - Solutions Innovation Pharmaceutique',
  description: 'Développement de solutions digitales innovantes pour pharmacies. L\'alliance entre expertise métier et excellence technique.',
  keywords: [
    'pharmacie innovation',
    'solutions digitales pharmacie',
    'tech pharmaceutique',
    'IA pharmacie',
    'transformation digitale officine',
    'développement logiciel pharmacien',
  ],
  author: 'Équipe Phardev',
  siteUrl: 'https://phardev.fr',
  image: '/og/phardev-og-main.jpg',
} as const

export const SEO_TEMPLATES = {
  home: {
    title: 'Phardev - Solutions Innovation Pharmaceutique',
    description: 'Leader français des solutions digitales pharmaceutiques. Expertise métier + excellence technique pour la transformation digitale de votre officine.',
  },
  projects: {
    title: 'Projets Innovation Pharmaceutique | Phardev',
    description: 'Découvrez nos réalisations : sites vitrines pharmacie, e-commerce, IoT, IA et analytics. Portfolio de solutions digitales pharmaceutiques.',
  },
  team: {
    title: 'L\'Équipe Innovation Phardev | Experts Tech Pharmaceutique',
    description: 'Rencontrez notre équipe d\'experts alliant connaissance du secteur pharmaceutique et maîtrise des technologies modernes.',
  },
  contact: {
    title: 'Contact Phardev | Devis Solutions Digitales Pharmacie',
    description: 'Contactez Phardev pour votre projet de transformation digitale pharmaceutique. Conseil gratuit et devis sur mesure.',
  },
} as const

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phardev',
    url: 'https://phardev.fr',
    logo: 'https://phardev.fr/logo-phardev.png',
    description: 'Solutions digitales innovantes pour pharmacies',
    sameAs: [
      'https://linkedin.com/company/phardev',
      'https://twitter.com/phardev_fr',
    ],
  },
} as const