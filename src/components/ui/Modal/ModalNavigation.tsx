"use client"

import { Button, Text } from "@/components/ui"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ModalNavigationProps {
  currentId: number
  totalProjects: number
  onPrevious?: (() => void) | undefined
  onNext?: (() => void) | undefined
  hasPrevious?: boolean | undefined
  hasNext?: boolean | undefined
}

/**
 * Modal Navigation Component - Navigation entre projets
 * Responsabilité : Previous/Next, indicateur position
 */
export function ModalNavigation({
  currentId,
  totalProjects,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ModalNavigationProps) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-4 lg:pt-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="px-2 lg:px-3"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <Text variant="small" className="font-medium text-gray-500">
        {currentId} / {totalProjects}
      </Text>

      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={!hasNext}
        className="px-2 lg:px-3"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
