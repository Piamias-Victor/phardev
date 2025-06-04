"use client"

import { Card, CardContent, Text } from "@/components/ui"
import { Award } from "lucide-react"
import { Grid } from "../layout"

interface Certification {
  name: string
  level: string
  team: string
}

interface CertificationGridProps {
  certifications: Certification[]
  className?: string
}

export function CertificationGrid({
  certifications,
  className,
}: CertificationGridProps) {
  return (
    <Card
      variant="elevated"
      className={`bg-gradient-phardev border border-blue-100 ${className}`}
    >
      <CardContent className="p-6">
        <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="md">
          {certifications.map(cert => (
            <div
              key={cert.name}
              className="flex items-start space-x-3 rounded-xl bg-white/60 p-3"
            >
              <Award className="phardev-gradient-text mt-0.5 h-5 w-5 flex-shrink-0" />
              <div>
                <Text
                  variant="small"
                  className="phardev-gradient-text font-bold"
                >
                  {cert.name}
                </Text>
                <Text
                  variant="small"
                  className="phardev-gradient-text font-semibold"
                >
                  {cert.level}
                </Text>
                <Text variant="small" className="text-gray-600">
                  {cert.team}
                </Text>
              </div>
            </div>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
