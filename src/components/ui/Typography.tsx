"use client"

import { cn } from "@/lib/utils"
import { createElement, forwardRef } from "react"

/**
 * Typography Components Phardev
 * Système typographique cohérent avec Heading et Text variants
 */

// Heading Props
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "default" | "gradient" | "muted"
  children: React.ReactNode
}

// Text Props
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "small" | "large" | "muted" | "lead"
  children: React.ReactNode
}

// Heading styles par niveau
const headingStyles = {
  1: "text-5xl font-bold tracking-tight lg:text-6xl",
  2: "text-4xl font-bold tracking-tight lg:text-5xl",
  3: "text-3xl font-bold tracking-tight lg:text-4xl",
  4: "text-2xl font-semibold tracking-tight lg:text-3xl",
  5: "text-xl font-semibold tracking-tight lg:text-2xl",
  6: "text-lg font-semibold tracking-tight lg:text-xl",
}

// Heading variants
const headingVariants = {
  default: "text-gray-900",
  gradient: "phardev-gradient-text",
  muted: "text-gray-600",
}

// Text variants
const textVariants = {
  body: "text-base text-gray-700 leading-relaxed",
  small: "text-sm text-gray-600 leading-relaxed",
  large: "text-lg text-gray-700 leading-relaxed",
  muted: "text-sm text-gray-500 leading-relaxed",
  lead: "text-xl text-gray-700 leading-relaxed font-light",
}

// Heading Component avec createElement
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, variant = "default", children, className, ...props }, ref) => {
    return createElement(
      `h${level}`,
      {
        ref,
        className: cn(
          headingStyles[level],
          headingVariants[variant],
          className
        ),
        ...props,
      },
      children
    )
  }
)

// Text Component
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          // Variant styles
          textVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

// Display names
Heading.displayName = "Heading"
Text.displayName = "Text"

export { Heading, Text, type HeadingProps, type TextProps }
