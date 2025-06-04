"use client"

import { Card, CardContent, CardHeader, Heading } from "@/components/ui"
import { CheckCircle, LucideIcon } from "lucide-react"

interface SkillCategoryProps {
  title: string
  icon: LucideIcon
  skills: string[]
  className?: string
}

export function SkillCategory({
  title,
  icon: Icon,
  skills,
  className,
}: SkillCategoryProps) {
  return (
    <Card variant="elevated" hoverable className={`group ${className}`}>
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 transition-transform duration-200 group-hover:scale-105">
          <Icon className="phardev-gradient-text h-6 w-6" />
        </div>
        <Heading
          level={4}
          className="phardev-gradient-text font-bold text-gray-900 transition-colors"
        >
          {title}
        </Heading>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {skills.map(skill => (
            <div key={skill} className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-500" />
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
