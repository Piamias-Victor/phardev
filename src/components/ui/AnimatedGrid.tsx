"use client"

import { Grid, type GridProps } from "@/components/layout"
import { motion } from "framer-motion"
import { forwardRef } from "react"

interface AnimatedGridProps extends GridProps {
  children: React.ReactNode
  stagger?: number
  duration?: number
  delay?: number
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "scale"
  viewport?: boolean
}

/**
 * Animated Grid Component - Grid avec animations Framer Motion intégrées
 * Responsabilité : Grid layout + animations séquentielles automatiques
 */
const AnimatedGrid = forwardRef<HTMLDivElement, AnimatedGridProps>(
  (
    {
      children,
      stagger = 0.1,
      duration = 0.5,
      delay = 0,
      animation = "fadeUp",
      viewport = true,
      ...gridProps
    },
    ref
  ) => {
    // Animation variants
    const animations = {
      fadeUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      },
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      },
      slideUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      },
      scale: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
      },
    }

    const selectedAnimation = animations[animation]

    // Convertir children en array pour animations séquentielles
    const childrenArray = Array.isArray(children) ? children : [children]

    return (
      <Grid ref={ref} {...gridProps}>
        {childrenArray.map((child, index) => {
          // Props de base avec key incluse
          const baseProps = {
            initial: selectedAnimation.initial,
            whileInView: selectedAnimation.animate,
            transition: {
              duration,
              delay: delay + index * stagger,
              type: "spring" as const,
              stiffness: 300,
              damping: 25,
            },
          }

          // Props avec viewport conditionnel
          const motionProps = viewport
            ? { ...baseProps, viewport: { once: true } }
            : baseProps

          return (
            <motion.div key={`animated-grid-item-${index}`} {...motionProps}>
              {child}
            </motion.div>
          )
        })}
      </Grid>
    )
  }
)

AnimatedGrid.displayName = "AnimatedGrid"

export { AnimatedGrid, type AnimatedGridProps }
export default AnimatedGrid
