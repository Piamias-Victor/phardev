"use client"

import { Container, Section } from "@/components/layout"
import { Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  SkillsCategories,
  SkillsCertifications,
  SkillsExpertise,
  SkillsTimeline,
} from "./TeamSkills/"

/**
 * Team Skills Section - Composition des compétences équipe
 * Responsabilité : Orchestration des sous-sections skills
 */
export function TeamSkills() {
  return (
    <Section spacing="lg" background="transparent">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Heading level={2} variant="default" className="mb-4">
            Notre{" "}
            <span className="phardev-gradient-text">Expertise Collective</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Technologies de pointe, certifications officielles et connaissance
            approfondie du secteur pharmaceutique.
          </Text>
        </motion.div>

        <div className="space-y-12">
          <div>
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Technologies Maîtrisées
            </Heading>
            <SkillsCategories />
          </div>

          <div>
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Certifications Officielles
            </Heading>
            <SkillsCertifications />
          </div>

          <div>
            <Heading
              level={3}
              className="phardev-gradient-text mb-6 text-center font-bold"
            >
              Expertise Pharmaceutique
            </Heading>
            <SkillsExpertise />
          </div>

          <div>
            <Heading
              level={3}
              className="phardev-gradient-text mb-6 text-center font-bold"
            >
              Timeline Succès Collectifs
            </Heading>
            <SkillsTimeline />
          </div>
        </div>
      </Container>
    </Section>
  )
}
