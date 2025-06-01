"use client"

import { Button, Card, CardContent, Heading, Text } from "@/components/ui"
import type { ProjectModalData } from "@/lib/hooks/useProjectModal"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Mail,
  X,
} from "lucide-react"
import { useEffect } from "react"

interface ProjectModalProps {
  isOpen: boolean
  project: ProjectModalData | null
  onClose: () => void
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
}

export function ProjectModal({
  isOpen,
  project,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ProjectModalProps) {
  // Fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
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
                  {/* Header Modal */}
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <Text
                        variant="small"
                        className="text-phardev-secondary-600 mb-2 font-semibold tracking-wide uppercase"
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
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Contenu Principal */}
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div>
                        <Heading
                          level={3}
                          className="mb-3 text-lg text-gray-900"
                        >
                          Défi Client
                        </Heading>
                        <Text
                          variant="body"
                          className="text-sm leading-relaxed text-gray-600 lg:text-base"
                        >
                          {project.challenge}
                        </Text>
                      </div>

                      {/* Solution */}
                      <div>
                        <Heading
                          level={3}
                          className="mb-3 text-lg text-gray-900"
                        >
                          Solution Phardev
                        </Heading>
                        <Text
                          variant="body"
                          className="mb-4 text-sm leading-relaxed text-gray-600 lg:text-base"
                        >
                          {project.solution}
                        </Text>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="bg-phardev-secondary-50 text-phardev-secondary-700 border-phardev-secondary-200 rounded-full border px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5 lg:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div>
                        <Heading
                          level={3}
                          className="mb-3 text-lg text-gray-900"
                        >
                          Impact Mesurable
                        </Heading>
                        <Text
                          variant="body"
                          className="mb-4 text-sm leading-relaxed text-gray-600 lg:text-base"
                        >
                          {project.impact}
                        </Text>

                        {/* Résultats */}
                        <div className="space-y-2">
                          {project.results.map(result => (
                            <div
                              key={result.label}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-500 lg:h-4 lg:w-4" />
                                <Text
                                  variant="small"
                                  className="text-xs text-gray-600 lg:text-sm"
                                >
                                  {result.label}:
                                </Text>
                              </div>
                              <Text
                                variant="small"
                                className="text-phardev-primary-600 text-xs font-semibold lg:text-sm"
                              >
                                {result.value}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                      {/* Screenshot Placeholder */}
                      <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="text-center">
                          <ExternalLink className="mx-auto mb-2 h-6 w-6 text-gray-400 lg:h-8 lg:w-8" />
                          <Text
                            variant="small"
                            className="text-xs text-gray-500 lg:text-sm"
                          >
                            Captures d&apos;écran disponibles
                          </Text>
                        </div>
                      </div>

                      {/* Infos Projet */}
                      <div className="rounded-xl bg-gray-50 p-4">
                        <Heading
                          level={4}
                          className="mb-4 text-base text-gray-900"
                        >
                          Informations Projet
                        </Heading>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <Text
                              variant="small"
                              className="text-xs text-gray-600 lg:text-sm"
                            >
                              Durée:
                            </Text>
                            <Text
                              variant="small"
                              className="text-xs font-medium text-gray-900 lg:text-sm"
                            >
                              {project.timeline}
                            </Text>
                          </div>
                          <div className="flex justify-between">
                            <Text
                              variant="small"
                              className="text-xs text-gray-600 lg:text-sm"
                            >
                              Budget:
                            </Text>
                            <Text
                              variant="small"
                              className="text-xs font-medium text-gray-900 lg:text-sm"
                            >
                              {project.budget}
                            </Text>
                          </div>
                          <div className="flex justify-between">
                            <Text
                              variant="small"
                              className="text-xs text-gray-600 lg:text-sm"
                            >
                              Technologies:
                            </Text>
                            <Text
                              variant="small"
                              className="text-xs font-medium text-gray-900 lg:text-sm"
                            >
                              {project.technologies.length}
                            </Text>
                          </div>
                        </div>
                      </div>

                      {/* CTA Contact */}
                      <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                        <Heading
                          level={4}
                          className="mb-2 text-base text-gray-900"
                        >
                          Projet Similaire ?
                        </Heading>
                        <Text
                          variant="small"
                          className="mb-4 text-xs text-gray-600 lg:text-sm"
                        >
                          Discutons de votre besoin pour une solution sur
                          mesure.
                        </Text>
                        <Button
                          size="sm"
                          className="w-full text-sm"
                          leftIcon={<Mail className="h-4 w-4" />}
                        >
                          Demander un devis
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Footer - Mobile Optimisé */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 lg:mt-8 lg:pt-6">
                    {/* Flèche Précédent */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onPrevious}
                      disabled={!hasPrevious}
                      className="px-2 lg:px-3"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>

                    {/* Compteur Centré */}
                    <Text variant="small" className="font-medium text-gray-500">
                      {project.id} / 5
                    </Text>

                    {/* Flèche Suivant */}
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
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
