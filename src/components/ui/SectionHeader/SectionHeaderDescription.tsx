"use client"

import { Text } from "@/components/ui"
import { cn } from "@/lib/utils"

interface SectionHeaderDescriptionProps {
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl"
}

/**
 * Section Header Description - Texte descriptif
 * Responsabilité : Description sous le titre
 */
export function SectionHeaderDescription({
  children,
  className,
  maxWidth = "2xl",
}: SectionHeaderDescriptionProps) {
  const maxWidths = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  }

  return (
    <Text
      variant="lead"
      className={cn("mx-auto text-gray-600", maxWidths[maxWidth], className)}
    >
      {children}
    </Text>
  )
}
