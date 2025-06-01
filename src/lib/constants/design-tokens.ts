/**
 * Design Tokens TypeScript Constants
 * Utilisation programmatique des tokens design
 */

export const DESIGN_TOKENS = {
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6", // Main
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    secondary: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6", // Main
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065",
    },
    accent: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4", // Main
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344",
    },
  },

  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "0.75rem", // 12px
    lg: "1rem", // 16px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    "3xl": "3rem", // 48px
    "4xl": "4rem", // 64px
    "5xl": "6rem", // 96px
  },

  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  shadow: {
    glassSm: "0 4px 16px rgba(59, 130, 246, 0.08)",
    glass: "0 8px 32px rgba(59, 130, 246, 0.12)",
    glassLg: "0 20px 60px rgba(59, 130, 246, 0.15)",
    glassXl: "0 32px 80px rgba(59, 130, 246, 0.18)",
    phardev: "0 10px 40px rgba(59, 130, 246, 0.2)",
  },

  borderRadius: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  blur: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    glass: "20px",
    xl: "24px",
    "2xl": "40px",
  },

  transition: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },
} as const

// Types corrects pour l'autocomplétion
export type ColorScale =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
export type SpacingScale = keyof typeof DESIGN_TOKENS.spacing
export type FontSizeScale = keyof typeof DESIGN_TOKENS.fontSize
export type ShadowScale = keyof typeof DESIGN_TOKENS.shadow
export type RadiusScale = keyof typeof DESIGN_TOKENS.borderRadius
export type BlurScale = keyof typeof DESIGN_TOKENS.blur
export type TransitionScale = keyof typeof DESIGN_TOKENS.transition
