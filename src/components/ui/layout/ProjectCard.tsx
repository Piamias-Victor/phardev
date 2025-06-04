"use client"

import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import type { ProjectModalData } from "@/lib/hooks/useProjectModal"
import { motion } from "framer-motion"
import { Calendar, CheckCircle, Euro, LucideIcon } from "lucide-react"

interface ProjectCardProps {
  project: ProjectModalData
  index: number
  onClick: (project: ProjectModalData) => void
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const Icon = project.icon as LucideIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        variant="elevated"
        hoverable
        className="group h-full cursor-pointer"
        onClick={() => onClick(project)}
      >
        <CardHeader>
          <div
            className={`h-12 w-12 rounded-xl ${project.iconBg} mb-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}
          >
            <Icon className={`h-6 w-6 ${project.iconColor}`} />
          </div>
          <Text
            variant="small"
            className="mb-2 font-semibold tracking-wide uppercase"
          >
            {project.category}
          </Text>
          <Heading
            level={3}
            className="phardev-gradient-text mb-3 text-gray-900"
          >
            {project.title}
          </Heading>
        </CardHeader>

        <CardContent>
          <Text
            variant="body"
            className="mb-4 text-sm leading-relaxed text-gray-600 lg:text-base"
          >
            {project.description}
          </Text>

          <div className="mb-4 flex flex-wrap gap-1.5 lg:gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="bg-gradient-phardev rounded-full border border-blue-200 px-2 py-1 text-xs font-medium lg:px-3 lg:py-1.5 lg:text-sm"
              >
                <span className="phardev-gradient-text">{tech}</span>
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="mb-4 space-y-2">
            {project.results.slice(0, 2).map(result => (
              <div
                key={result.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500 lg:h-4 lg:w-4" />
                  <Text
                    variant="small"
                    className="text-xs text-gray-600 lg:text-sm"
                  >
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

          <div className="flex items-center justify-between border-t border-gray-200 pt-3">
            <div className="flex items-center space-x-1.5 lg:space-x-2">
              <Calendar className="h-3 w-3 text-gray-400 lg:h-4 lg:w-4" />
              <Text
                variant="small"
                className="text-xs font-medium text-gray-600 lg:text-sm"
              >
                {project.timeline}
              </Text>
            </div>
            <div className="flex items-center space-x-1.5 lg:space-x-2">
              <Euro className="h-3 w-3 text-gray-400 lg:h-4 lg:w-4" />
              <Text
                variant="small"
                className="text-xs font-medium text-gray-600 lg:text-sm"
              >
                {project.budget}
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
