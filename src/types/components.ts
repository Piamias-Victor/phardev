/**
 * Component-specific types for Phardev Design System
 */

// Common component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Button variants (sera utilisé plus tard)
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "destructive"
export type ButtonSize = "sm" | "md" | "lg"

// Card variants
export type CardVariant = "default" | "elevated" | "interactive" | "gradient"

// Animation variants
export type AnimationPreset =
  | "fadeIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"

// Navigation types
export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
  isExternal?: boolean
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
}

// Export nommé pour éviter warning ESLint
const ComponentTypes = {}
export default ComponentTypes
