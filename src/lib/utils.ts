import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format text for display (capitalize first letter, etc.)
 */
export function formatText(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Generate unique ID for components
 */
export function generateId(prefix = "phardev"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}