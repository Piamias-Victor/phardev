/**
 * Custom hook for projects data and modal management
 * Separates business logic from UI components
 */

"use client"

import { PROJECTS_DATA } from "@/lib/data/projectsData"
import { useProjectModal } from "@/lib/hooks/useProjectModal"

export function useProjectsData() {
  const { isOpen, selectedProject, openModal, closeModal } = useProjectModal()

  const handleProjectClick = (project: (typeof PROJECTS_DATA)[0]) => {
    openModal(project)
  }

  const handlePrevious = () => {
    if (!selectedProject) return
    const currentIndex = PROJECTS_DATA.findIndex(
      p => p.id === selectedProject.id
    )
    if (currentIndex > 0) {
      const previousProject = PROJECTS_DATA[currentIndex - 1]
      if (previousProject) {
        openModal(previousProject)
      }
    }
  }

  const handleNext = () => {
    if (!selectedProject) return
    const currentIndex = PROJECTS_DATA.findIndex(
      p => p.id === selectedProject.id
    )
    if (currentIndex < PROJECTS_DATA.length - 1) {
      const nextProject = PROJECTS_DATA[currentIndex + 1]
      if (nextProject) {
        openModal(nextProject)
      }
    }
  }

  const currentIndex = selectedProject
    ? PROJECTS_DATA.findIndex(p => p.id === selectedProject.id)
    : -1
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < PROJECTS_DATA.length - 1

  return {
    projects: PROJECTS_DATA,
    isOpen,
    selectedProject,
    handleProjectClick,
    closeModal,
    handlePrevious,
    handleNext,
    hasPrevious,
    hasNext,
  }
}
