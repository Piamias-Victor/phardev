"use client"

import { Grid } from "@/components/layout"
import { Card, CardContent, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

/**
 * Skills Expertise Component - Expertise pharmaceutique équipe
 * Responsabilité : Affichage expertise métier avec animation
 */
export function SkillsExpertise() {
  const pharmaExpertise = [
    "Réglementation ANSM & European Medicines Agency",
    "Bonnes Pratiques de Distribution (GDP)",
    "Validation de systèmes informatisés critiques",
    "Traçabilité médicaments & sérialisation",
    "Conformité RGPD santé & données sensibles",
    "Intégrations ERP pharmacie (Pharmagest, Winpharma)",
    "E-commerce pharmaceutique réglementé",
    "Workflow officine & ergonomie métier",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card variant="elevated">
        <CardContent className="p-6">
          <Grid cols={1} responsive={{ md: 2 }} gap="md">
            {pharmaExpertise.map(expertise => (
              <div key={expertise} className="flex items-start space-x-3">
                <Shield className="phardev-gradient-text mt-1 h-4 w-4 flex-shrink-0" />
                <Text variant="small" className="leading-relaxed text-gray-700">
                  {expertise}
                </Text>
              </div>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  )
}
