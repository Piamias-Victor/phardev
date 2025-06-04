"use client"

import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface CardWithIconProps {
  icon: LucideIcon
  title: string
  description?: string
  children?: React.ReactNode
  variant?: "default" | "elevated" | "interactive" | "gradient"
  iconVariant?: "default" | "gradient" | "accent"
  iconSize?: "sm" | "md" | "lg"
  hoverable?: boolean
  className?: string
}

/**
 * Card With Icon Component - Pattern card standardisé avec icône
 * Responsabilité : Card + Icon + Content avec hover effects
 */
export function CardWithIcon({
  icon: Icon,
  title,
  description,
  children,
  variant = "elevated",
  iconVariant = "default",
  iconSize = "md",
  hoverable = true,
  className,
}: CardWithIconProps) {
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const iconContainerSizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const iconColors = {
    default: "phardev-gradient-text",
    gradient: "phardev-gradient-text",
    accent: "text-cyan-500",
  }

  const iconWrapperClass = cn(
    "mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 transition-transform duration-200",
    iconContainerSizes[iconSize],
    hoverable && "group-hover:scale-105"
  )

  const iconClass = cn(iconSizes[iconSize], iconColors[iconVariant])

  return (
    <Card
      variant={variant}
      hoverable={hoverable}
      className={cn("group h-full", className)}
    >
      <CardHeader className="p-6">
        <div className={iconWrapperClass}>
          <Icon className={iconClass} />
        </div>
        <Heading
          level={3}
          className="phardev-gradient-text mb-3 text-gray-900 transition-colors duration-200"
        >
          {title}
        </Heading>
        {description && (
          <Text variant="body" className="leading-relaxed text-gray-600">
            {description}
          </Text>
        )}
      </CardHeader>

      {children && <CardContent className="p-6 pt-0">{children}</CardContent>}
    </Card>
  )
}

export { type CardWithIconProps }
export default CardWithIcon
