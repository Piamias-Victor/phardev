"use client"

import { Modal } from "@/components/ui"
import type { ProjectModalData } from "@/lib/hooks/useProjectModal"

interface ProjectModalProps {
  isOpen: boolean
  project: ProjectModalData | null
  onClose: () => void
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
}

/**
 * Project Modal - Composition de Modal compound components
 * Responsabilité : Orchestration Modal.Root + Modal.Content + Modal.Navigation
 */
export function ProjectModal({
  isOpen,
  project,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ProjectModalProps) {
  if (!project) return null

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content project={project} onClose={onClose} />
      <Modal.Navigation
        currentId={project.id}
        totalProjects={5}
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </Modal.Root>
  )
}
