"use client"

import { Heading } from "@/components/ui"
import { cn } from "@/lib/utils"

interface SectionHeaderTitleProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  gradient?: string | string[]
  className?: string
}

/**
 * Section Header Title - Titre avec mots en gradient
 * Responsabilité : Titre principal avec highlight gradient
 */
export function SectionHeaderTitle({
  children,
  level = 2,
  gradient,
  className,
}: SectionHeaderTitleProps) {
  // Si gradient est fourni et children est string, on traite
  if (gradient && typeof children === "string") {
    const gradientWords = Array.isArray(gradient) ? gradient : [gradient]

    // Créer les parties avec type correct
    const parts: React.ReactNode[] = []
    let remaining = children

    gradientWords.forEach((word, wordIndex) => {
      const regex = new RegExp(`\\b(${word})\\b`, "i")
      const match = remaining.match(regex)

      if (match && match.index !== undefined) {
        // Ajouter le texte avant le match
        if (match.index > 0) {
          parts.push(remaining.slice(0, match.index))
        }

        // Ajouter le mot avec gradient
        parts.push(
          <span key={`gradient-${wordIndex}`} className="phardev-gradient-text">
            {match[1]}
          </span>
        )

        // Continuer avec le reste
        remaining = remaining.slice(match.index + match[1]!.length)
      }
    })

    // Ajouter le texte restant
    if (remaining) {
      parts.push(remaining)
    }

    return (
      <Heading level={level} className={cn("mb-4 text-gray-900", className)}>
        {parts.length > 0 ? parts : children}
      </Heading>
    )
  }

  return (
    <Heading level={level} className={cn("mb-4 text-gray-900", className)}>
      {children}
    </Heading>
  )
}
