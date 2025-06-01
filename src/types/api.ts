/**
 * API and data types for Phardev
 */

// Project types
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: ProjectCategory
  difficulty: DifficultyLevel
  image?: string
  link?: string
  github?: string
  featured?: boolean
}

export type ProjectCategory =
  | "site-vitrine"
  | "e-commerce"
  | "iot"
  | "ia"
  | "analytics"

export type DifficultyLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert"

// Team member types
export interface TeamMember {
  id: string
  name: string
  role: string
  specialties: string[]
  bio: string
  image?: string
  linkedin?: string
  github?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: ProjectCategory
  message: string
  budget?: string
  timeline?: string
}

// Blog types (pour plus tard)
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  author: string
  readingTime: number
  featured?: boolean
}

// Export nommé pour éviter warning ESLint
const ApiTypes = {}
export default ApiTypes
