"use client"

import { Container, Grid, Section } from "@/components/layout"
import { ProjectModal } from "@/components/sections"
import { ProjectCard } from "@/components/ui"
import { useProjectsData } from "@/lib/hooks/useProjectsData"

/**
 * Projects Grid Component - Refactored
 * Focused only on layout and composition
 */
export function ProjectsGrid() {
  const {
    projects,
    isOpen,
    selectedProject,
    handleProjectClick,
    closeModal,
    handlePrevious,
    handleNext,
    hasPrevious,
    hasNext,
  } = useProjectsData()

  return (
    <>
      <Section spacing="md" background="muted" className="pt-2">
        <Container size="lg" padding="md">
          <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="md">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={handleProjectClick}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <ProjectModal
        isOpen={isOpen}
        project={selectedProject}
        onClose={closeModal}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </>
  )
}
