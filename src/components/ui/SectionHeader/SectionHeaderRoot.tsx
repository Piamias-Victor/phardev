"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderRootProps {
  children: React.ReactNode
  className?: string
  align?: "left" | "center" | "right"
  delay?: number
}

/**
 * Section Header Root - Container principal avec animation
 * Responsabilité : Layout, alignement, animation d'entrée
 */
export function SectionHeaderRoot({
  children,
  className,
  align = "center",
  delay = 0,
}: SectionHeaderRootProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {children}
    </motion.div>
  )
}
