"use client"

import { LucideIcon } from "lucide-react"
import { useState } from "react"

export interface ProjectModalData {
  id: number
  title: string
  category: string
  description: string
  technologies: string[]
  results: Array<{ label: string; value: string }>
  timeline: string
  budget: string
  challenge: string
  solution: string
  impact: string
  screenshots: string[]
  icon: LucideIcon
  iconColor: string
  iconBg: string
}

export function useProjectModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] =
    useState<ProjectModalData | null>(null)

  const openModal = (project: ProjectModalData) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedProject(null)
  }

  return { isOpen, selectedProject, openModal, closeModal }
}
