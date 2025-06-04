"use client"

import { Text } from "@/components/ui"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface SectionHeaderBadgeProps {
  icon: LucideIcon
  children: React.ReactNode
  className?: string
  variant?: "default" | "gradient" | "outline"
}

/**
 * Section Header Badge - Badge avec icône et texte
 * Responsabilité : Badge d'introduction avec icône
 */
export function SectionHeaderBadge({
  icon: Icon,
  children,
  className,
  variant = "default",
}: SectionHeaderBadgeProps) {
  const variants = {
    default:
      "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/50",
    gradient: "bg-gradient-phardev border-white/30",
    outline: "bg-white/20 border-white/30",
  }

  return (
    <div
      className={cn(
        "mb-6 inline-flex items-center space-x-2 rounded-full border px-4 py-2 backdrop-blur-sm",
        variants[variant],
        className
      )}
    >
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <Icon className="h-2.5 w-2.5 text-white" />
      </div>
      <Text variant="small" className="phardev-gradient-text font-semibold">
        {children}
      </Text>
    </div>
  )
}
