/**
 * Phardev brand constants and configuration
 */

export const PHARDEV_CONFIG = {
  name: "Phardev",
  tagline: "Solutions Innovation Pharmaceutique",
  description:
    "L'alliance parfaite entre expertise métier pharmaceutique et excellence technique",

  // Contact info
  contact: {
    email: "contact@phardev.fr",
    phone: "+33 X XX XX XX XX",
    address: "France",
  },

  // Social links
  social: {
    linkedin: "https://linkedin.com/company/phardev",
    twitter: "https://twitter.com/phardev_fr",
    github: "https://github.com/phardev",
  },

  // Business info
  stats: {
    clientsCount: 200,
    projectsCount: 150,
    yearsExperience: 8,
    satisfactionRate: 95,
  },
} as const

export const TECHNOLOGIES = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Vercel", "Docker", "Kubernetes"],
  ai: ["OpenAI", "TensorFlow", "Scikit-learn", "Pandas"],
  iot: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB"],
} as const

export const COLORS = {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  accent: "#06b6d4",
  background: "#fcfcff",
  foreground: "#0f172a",
} as const
