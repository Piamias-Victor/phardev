"use client"

import { CertificationGrid } from "@/components/sections"
import { motion } from "framer-motion"

interface Certification {
  name: string
  level: string
  team: string
}

/**
 * Skills Certifications Component - Certifications officielles équipe
 * Responsabilité : Affichage certifications avec animation
 */
export function SkillsCertifications() {
  const certifications: Certification[] = [
    {
      name: "AWS Solutions Architect",
      level: "Professional",
      team: "Alexandre, Thomas",
    },
    { name: "React Developer", level: "Expert", team: "Marie, Sophie" },
    {
      name: "Google Cloud Platform",
      level: "Professional",
      team: "Thomas, Alexandre",
    },
    { name: "Microsoft Azure", level: "Associate", team: "Marie, Alexandre" },
    { name: "Scrum Master", level: "Certified", team: "Équipe complète" },
    { name: "ANSM Compliance", level: "Specialist", team: "Équipe complète" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <CertificationGrid certifications={certifications} />
    </motion.div>
  )
}
