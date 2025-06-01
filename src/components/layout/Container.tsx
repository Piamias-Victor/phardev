"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

/**
 * Container Component Phardev
 * Container responsive avec max-width adaptatifs et padding intelligent
 */

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
  center?: boolean
  children: React.ReactNode
}

// Container sizes avec breakpoints optimisés
const containerSizes = {
  sm: "max-w-2xl", // 672px
  md: "max-w-4xl", // 896px
  lg: "max-w-6xl", // 1152px
  xl: "max-w-7xl", // 1280px
  full: "max-w-none", // No limit
}

// Padding variants
const containerPadding = {
  none: "",
  sm: "px-4", // 16px
  md: "px-6 lg:px-8", // 24px mobile, 32px desktop
  lg: "px-8 lg:px-12", // 32px mobile, 48px desktop
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "lg",
      padding = "md",
      center = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "w-full",
          // Size constraints
          containerSizes[size],
          // Padding
          containerPadding[padding],
          // Centering
          center && "mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Container, type ContainerProps }
export default Container
