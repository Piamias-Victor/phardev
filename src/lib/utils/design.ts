/**
 * Design utilities and helpers
 */

import type {
  ColorScale,
  FontSizeScale,
  SpacingScale,
} from "@/lib/constants/design-tokens"
import { DESIGN_TOKENS } from "@/lib/constants/design-tokens"

/**
 * Get color value from design tokens
 */
export function getColor(
  color: "primary" | "secondary" | "accent",
  scale: ColorScale
): string {
  return DESIGN_TOKENS.colors[color][scale]
}

/**
 * Get spacing value from design tokens
 */
export function getSpacing(scale: SpacingScale): string {
  return DESIGN_TOKENS.spacing[scale]
}

/**
 * Get font size value from design tokens
 */
export function getFontSize(scale: FontSizeScale): string {
  return DESIGN_TOKENS.fontSize[scale]
}

/**
 * Generate glassmorphism CSS properties
 */
export function createGlassmorphism(
  options: {
    opacity?: number
    blur?: keyof typeof DESIGN_TOKENS.blur
    border?: boolean
    shadow?: keyof typeof DESIGN_TOKENS.shadow
  } = {}
) {
  const {
    opacity = 0.1,
    blur = "glass",
    border = true,
    shadow = "glass",
  } = options

  return {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${DESIGN_TOKENS.blur[blur]})`,
    ...(border && {
      border: `1px solid rgba(255, 255, 255, ${opacity * 2})`,
    }),
    boxShadow: DESIGN_TOKENS.shadow[shadow],
  }
}

/**
 * Generate gradient background
 */
export function createGradient(
  from: string = DESIGN_TOKENS.colors.primary[500],
  to: string = DESIGN_TOKENS.colors.secondary[500],
  direction: number = 135
): string {
  return `linear-gradient(${direction}deg, ${from} 0%, ${to} 100%)`
}

/**
 * Simple spacing helper (sans media queries complexes)
 */
export function getResponsiveSpacing(
  mobile: SpacingScale,
  desktop?: SpacingScale
): string {
  if (desktop) {
    return `${DESIGN_TOKENS.spacing[mobile]} /* mobile */ ${DESIGN_TOKENS.spacing[desktop]} /* desktop */`
  }
  return DESIGN_TOKENS.spacing[mobile]
}
