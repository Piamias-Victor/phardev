"use client"

import { Text } from "@/components/ui"
import { Target } from "lucide-react"

interface TimelineMilestone {
  year: string
  achievement: string
  impact: string
}

interface SkillsTimelineProps {
  milestones: TimelineMilestone[]
  className?: string
}

export function SkillsTimeline({ milestones, className }: SkillsTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
            >
              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-md">
                <div className="mb-2 flex items-center space-x-2">
                  <Target className="phardev-gradient-text h-4 w-4" />
                  <Text
                    variant="small"
                    className="phardev-gradient-text font-bold"
                  >
                    {milestone.year}
                  </Text>
                </div>
                <Text
                  variant="small"
                  className="phardev-gradient-text mb-1 font-bold"
                >
                  {milestone.achievement}
                </Text>
                <Text variant="small" className="text-gray-600">
                  {milestone.impact}
                </Text>
              </div>
            </div>
            <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
