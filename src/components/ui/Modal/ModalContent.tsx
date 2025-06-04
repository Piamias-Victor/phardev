"use client"

import { Card, CardContent, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { CheckCircle, ExternalLink, Mail, X } from "lucide-react"

interface ModalContentProps {
  project: {
    id: number
    title: string
    category: string
    challenge: string
    solution: string
    impact: string
    technologies: string[]
    results: Array<{ label: string; value: string }>
    timeline: string
    budget: string
  }
  onClose: () => void
}

/**
 * Modal Content Component - Affichage contenu projet
 * Responsabilité : Layout contenu, informations projet
 */
export function ModalContent({ project, onClose }: ModalContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="relative h-full overflow-auto p-4 lg:p-8"
    >
      <div className="mx-auto max-w-4xl">
        <Card variant="gradient" className="relative">
          <CardContent className="p-4 lg:p-8">
            {/* Header avec fermeture */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <Text
                  variant="small"
                  className="phardev-gradient-text mb-2 font-semibold tracking-wide uppercase"
                >
                  {project.category}
                </Text>
                <Heading
                  level={2}
                  className="text-xl text-gray-900 lg:text-2xl"
                >
                  {project.title}
                </Heading>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenu principal */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Colonne gauche */}
              <div className="space-y-6">
                <ProjectSection
                  title="Défi Client"
                  content={project.challenge}
                />
                <ProjectSection
                  title="Solution Phardev"
                  content={project.solution}
                >
                  <TechTags technologies={project.technologies} />
                </ProjectSection>
                <ProjectSection
                  title="Impact Mesurable"
                  content={project.impact}
                >
                  <ResultsList results={project.results} />
                </ProjectSection>
              </div>

              {/* Colonne droite */}
              <div className="space-y-6">
                <ProjectPreview />
                <ProjectInfo
                  timeline={project.timeline}
                  budget={project.budget}
                  techCount={project.technologies.length}
                />
                <ProjectCTA />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// Sous-composants helpers (< 10 lignes chacun)
function ProjectSection({
  title,
  content,
  children,
}: {
  title: string
  content: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <Heading level={3} className="mb-3 text-lg text-gray-900">
        {title}
      </Heading>
      <Text
        variant="body"
        className="mb-4 text-sm leading-relaxed text-gray-600 lg:text-base"
      >
        {content}
      </Text>
      {children}
    </div>
  )
}

function TechTags({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 lg:gap-2">
      {technologies.map(tech => (
        <span
          key={tech}
          className="bg-gradient-phardev rounded-full border border-blue-200 px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5 lg:text-sm"
        >
          <span className="phardev-gradient-text">{tech}</span>
        </span>
      ))}
    </div>
  )
}

function ResultsList({
  results,
}: {
  results: Array<{ label: string; value: string }>
}) {
  return (
    <div className="space-y-2">
      {results.map(result => (
        <div key={result.label} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-500 lg:h-4 lg:w-4" />
            <Text variant="small" className="text-xs text-gray-600 lg:text-sm">
              {result.label}:
            </Text>
          </div>
          <Text
            variant="small"
            className="phardev-gradient-text text-xs font-semibold lg:text-sm"
          >
            {result.value}
          </Text>
        </div>
      ))}
    </div>
  )
}

function ProjectPreview() {
  return (
    <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="text-center">
        <ExternalLink className="mx-auto mb-2 h-6 w-6 text-gray-400 lg:h-8 lg:w-8" />
        <Text variant="small" className="text-xs text-gray-500 lg:text-sm">
          Captures d&apos;écran disponibles
        </Text>
      </div>
    </div>
  )
}

function ProjectInfo({
  timeline,
  budget,
  techCount,
}: {
  timeline: string
  budget: string
  techCount: number
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <Heading level={4} className="mb-4 text-base text-gray-900">
        Informations Projet
      </Heading>
      <div className="space-y-3">
        <InfoRow label="Durée" value={timeline} />
        <InfoRow label="Budget" value={budget} />
        <InfoRow label="Technologies" value={techCount.toString()} />
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <Text variant="small" className="text-xs text-gray-600 lg:text-sm">
        {label}:
      </Text>
      <Text
        variant="small"
        className="text-xs font-medium text-gray-900 lg:text-sm"
      >
        {value}
      </Text>
    </div>
  )
}

function ProjectCTA() {
  return (
    <div className="bg-gradient-phardev rounded-xl border border-blue-100 p-4">
      <Heading level={4} className="mb-2 text-base text-gray-900">
        Projet Similaire ?
      </Heading>
      <Text variant="small" className="mb-4 text-xs text-gray-600 lg:text-sm">
        Discutons de votre besoin pour une solution sur mesure.
      </Text>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg">
        <Mail className="h-4 w-4" />
        Demander un devis
      </button>
    </div>
  )
}
