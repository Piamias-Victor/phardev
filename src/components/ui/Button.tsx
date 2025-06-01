"use client"

import { cn } from "@/lib/utils"
import type { ButtonSize, ButtonVariant } from "@/types/components"
import { motion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

/**
 * Button Component Phardev Premium
 * Design system button avec glassmorphism et animations iOS-like
 */

// Props interface ultra-stricte
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

// Variants styles avec couleurs Tailwind intégrées
// Variants styles avec meilleur contraste secondary
const buttonVariants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-600",
  secondary:
    "bg-blue-50/80 backdrop-blur-glass border border-blue-200 text-blue-700 shadow-glass hover:bg-blue-100/90 hover:border-blue-300 hover:text-blue-800",
  ghost:
    "bg-transparent border-0 text-blue-600 hover:bg-blue-50 hover:text-blue-700",
  outline:
    "bg-transparent border border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700",
  destructive:
    "bg-red-500 text-white border-0 shadow-lg hover:bg-red-600 hover:shadow-xl",
}

const buttonSizes = {
  sm: "h-8 px-3 text-sm rounded-lg",
  md: "h-10 px-4 text-base rounded-xl",
  lg: "h-12 px-6 text-lg rounded-2xl",
}

// Animation variants iOS-like
const buttonAnimations = {
  initial: { scale: 1 },
  hover: { scale: 1.02, y: -1 },
  tap: { scale: 0.98, y: 0 },
  disabled: { scale: 1, opacity: 0.5 },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        ref={ref}
        variants={buttonAnimations}
        initial="initial"
        whileHover={!isDisabled ? "hover" : "disabled"}
        whileTap={!isDisabled ? "tap" : "disabled"}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed",
          // Variant styles
          buttonVariants[variant],
          // Size styles
          buttonSizes[size],
          // Disabled styles
          isDisabled && "pointer-events-none cursor-not-allowed opacity-50",
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading state */}
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
          />
        )}

        {/* Left icon */}
        {leftIcon && !loading && (
          <span className="flex items-center">{leftIcon}</span>
        )}

        {/* Button text */}
        <span>{children}</span>

        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="flex items-center">{rightIcon}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = "Button"

export { Button, type ButtonProps }
export default Button
