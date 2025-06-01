"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

/**
 * Section Component Phardev
 * Section wrapper avec padding vertical intelligent et variants
 */

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "transparent" | "muted" | "accent" | "gradient"
  children: React.ReactNode
}

// Spacing vertical variants
const sectionSpacing = {
  none: "",
  sm: "py-8", // 32px
  md: "py-12 lg:py-16", // 48px mobile, 64px desktop
  lg: "py-16 lg:py-24", // 64px mobile, 96px desktop
  xl: "py-24 lg:py-32", // 96px mobile, 128px desktop
}

// Background variants
const sectionBackgrounds = {
  transparent: "",
  muted: "bg-gray-50",
  accent: "bg-blue-50",
  gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = "md",
      background = "transparent",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          // Base styles
          "w-full",
          // Spacing
          sectionSpacing[spacing],
          // Background
          sectionBackgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section, type SectionProps }
export default Section
