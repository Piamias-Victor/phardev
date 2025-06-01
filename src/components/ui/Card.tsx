"use client"

import { cn } from "@/lib/utils"
import type { CardVariant } from "@/types/components"
import {
  motion,
  type HTMLMotionProps,
  type TargetAndTransition,
  type VariantLabels,
} from "framer-motion"
import { forwardRef } from "react"

/**
 * Card Component Phardev Premium
 * Glassmorphism card avec composition pattern et animations
 */

// Props interfaces avec types stricts Framer Motion
interface CardProps
  extends Omit<HTMLMotionProps<"div">, "whileHover" | "whileTap"> {
  variant?: CardVariant
  hoverable?: boolean
  children: React.ReactNode
  whileHover?: TargetAndTransition | VariantLabels
  whileTap?: TargetAndTransition | VariantLabels
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

// Card variants avec couleurs Tailwind standards
const cardVariants = {
  default: "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg",
  elevated: "bg-white/90 backdrop-blur-md border border-gray-300 shadow-xl",
  interactive:
    "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white/90 hover:border-gray-300 hover:shadow-xl cursor-pointer",
  gradient:
    "bg-gradient-to-br from-blue-50/90 to-purple-50/90 backdrop-blur-md border border-blue-200 shadow-xl",
}

// Animation variants
const cardAnimations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -4, scale: 1.02 },
  tap: { scale: 0.98 },
}

// Card Root Component
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      hoverable = false,
      children,
      className,
      whileHover,
      whileTap,
      ...props
    },
    ref
  ) => {
    const isInteractive = variant === "interactive" || hoverable

    // Construire les props motion conditionnellement
    const motionProps: Partial<HTMLMotionProps<"div">> = {
      variants: cardAnimations,
      initial: "initial",
      animate: "animate",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    }

    // Ajouter les animations conditionnellement
    if (isInteractive) {
      motionProps.whileHover = whileHover || "hover"
      motionProps.whileTap = whileTap || "tap"
    }

    return (
      <motion.div
        ref={ref}
        {...motionProps}
        className={cn(
          // Base styles
          "rounded-2xl transition-all duration-300",
          // Variant styles
          cardVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

// Card Header Component
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </div>
  )
)

// Card Content Component
const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
)

// Card Footer Component
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
)

// Display names
Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardContent.displayName = "CardContent"
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardFooter, CardHeader, type CardProps }
