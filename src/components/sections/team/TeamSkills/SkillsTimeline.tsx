"use client"

import { SkillsTimeline as TimelineComponent } from "@/components/sections"
import { motion } from "framer-motion"

interface TimelineMilestone {
  year: string
  achievement: string
  impact: string
}

/**
 * Skills Timeline Component - Timeline succès collectifs équipe
 * Responsabilité : Affichage timeline avec animation
 */
export function SkillsTimeline() {
  const timeline: TimelineMilestone[] = [
    {
      year: "2019",
      achievement: "Première certification AWS équipe",
      impact: "Architecture cloud maîtrisée",
    },
    {
      year: "2020",
      achievement: "Spécialisation secteur pharmaceutique",
      impact: "Expertise métier approfondie",
    },
    {
      year: "2021",
      achievement: "Certification conformité ANSM",
      impact: "Solutions 100% conformes",
    },
    {
      year: "2022",
      achievement: "Leadership IA secteur santé",
      impact: "Projets ML innovants",
    },
    {
      year: "2023",
      achievement: "Équipe sénior complète",
      impact: "Autonomie projets complexes",
    },
    {
      year: "2024",
      achievement: "200+ projets réalisés",
      impact: "Expertise reconnue marché",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <TimelineComponent milestones={timeline} />
    </motion.div>
  )
}
