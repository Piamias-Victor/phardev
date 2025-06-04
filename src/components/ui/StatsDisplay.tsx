"use client"

import { Heading, Text } from "@/components/ui"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatItem {
  icon: LucideIcon
  value: string | number
  label: string
  color?: "primary" | "accent" | "gradient"
}

interface StatsDisplayProps {
  stats: StatItem[]
  cols?: 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  variant?: "default" | "cards" | "glass"
  className?: string
  delay?: number
  stagger?: number
}

/**
 * Stats Display Component - Affichage statistiques avec animations
 * Responsabilité : Grid stats + icônes + animations séquentielles
 */
export function StatsDisplay({
  stats,
  cols = 3,
  gap = "lg",
  variant = "default",
  className,
  delay = 0,
  stagger = 0.1,
}: StatsDisplayProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }

  const gridGaps = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  }

  const variants = {
    default: "p-0",
    cards:
      "rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-8",
    glass: "rounded-2xl bg-gradient-phardev border border-blue-100 p-8",
  }

  const iconColors = {
    primary: "phardev-gradient-text",
    accent: "text-cyan-500",
    gradient: "phardev-gradient-text",
  }

  return (
    <div className={cn(variants[variant], className)}>
      <div className={cn("grid", gridCols[cols], gridGaps[gap])}>
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const iconColorClass = iconColors[stat.color || "primary"]

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: delay + index * stagger,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm lg:h-16 lg:w-16">
                <Icon className={cn("h-6 w-6 lg:h-8 lg:w-8", iconColorClass)} />
              </div>
              <div className="flex min-h-[60px] flex-col justify-center">
                <Heading
                  level={3}
                  className="phardev-gradient-text mb-1 text-2xl font-bold lg:text-3xl"
                >
                  {stat.value}
                </Heading>
                <Text variant="small" className="leading-tight text-gray-600">
                  {stat.label}
                </Text>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export { type StatItem, type StatsDisplayProps }
export default StatsDisplay
