/**
 * Global TypeScript definitions for Phardev
 */

// Global environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test"
      NEXT_PUBLIC_SITE_URL: string
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string
    }
  }
}

// Common utility types
export type ValueOf<T> = T[keyof T]

export type Nullable<T> = T | null

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>

// HTML element props
export type HTMLElementProps<T = HTMLElement> = React.HTMLAttributes<T>

// Component with children (sans paramètre T inutilisé)
export interface ComponentWithChildren {
  children: React.ReactNode
}

// Component props flexible
export type ComponentProps<T = object> = T & {
  children?: React.ReactNode
  className?: string
}

// Force module export
export {}
