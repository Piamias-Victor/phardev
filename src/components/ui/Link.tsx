"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { forwardRef } from "react"

/**
 * Link Component Phardev Premium
 * Link avec Framer Motion et types stricts
 */

interface LinkProps {
  href: string
  variant?: "default" | "muted" | "gradient" | "button" | "subtle"
  external?: boolean
  children: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

// Link variants
const linkVariants = {
  default:
    "text-blue-600 hover:text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 transition-colors duration-200",
  muted:
    "text-gray-500 hover:text-gray-700 no-underline hover:underline decoration-gray-300 underline-offset-4 transition-colors duration-200",
  gradient:
    "phardev-gradient-text hover:opacity-80 no-underline font-medium transition-opacity duration-200",
  button:
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl hover:bg-blue-100/90 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 no-underline",
  subtle:
    "text-gray-700 hover:text-blue-600 no-underline hover:underline decoration-blue-300 underline-offset-4 transition-colors duration-200",
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = "default",
      external = false,
      children,
      className,
      onClick,
    },
    ref
  ) => {
    const isExternal =
      external || href.startsWith("http") || href.startsWith("mailto:")
    const linkClasses = cn(linkVariants[variant], className)

    if (isExternal) {
      return (
        <motion.a
          ref={ref}
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <NextLink href={href}>
        <motion.span
          ref={ref}
          className={linkClasses}
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {children}
        </motion.span>
      </NextLink>
    )
  }
)

Link.displayName = "Link"

export { Link, type LinkProps }
export default Link
