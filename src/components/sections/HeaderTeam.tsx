"use client"

import { Container, Section } from "@/components/layout"
import { SectionHeader, StatsDisplay, Text } from "@/components/ui"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import { Award, Brain, Code, Users, Zap } from "lucide-react"

export function HeaderTeam() {
  const teamStats = [
    { icon: Users, value: "4", label: "Experts passionnés" },
    { icon: Brain, value: "50+", label: "Années expérience cumulées" },
    { icon: Code, value: "200+", label: "Projets réalisés ensemble" },
    { icon: Award, value: "95%", label: "Satisfaction client équipe" },
  ]

  return (
    <Section spacing="lg" background="gradient" className="pt-8">
      <Container size="lg" padding="md">
        <SectionHeader.Root>
          <SectionHeader.Badge icon={Zap}>
            Équipe innovation pharmaceutique
          </SectionHeader.Badge>
          <SectionHeader.Title
            level={1}
            className="text-3xl lg:text-4xl xl:text-5xl"
            gradient={["Innovation"]}
          >
            L&apos;Équipe Innovation Phardev
          </SectionHeader.Title>
          <SectionHeader.Description className="text-base lg:text-lg">
            Notre force ? L&apos;alliance unique entre{" "}
            <span className="phardev-gradient-text font-semibold">
              expertise métier pharmaceutique
            </span>{" "}
            et{" "}
            <span className="phardev-gradient-text font-semibold">
              maîtrise technologique de pointe
            </span>
            . Chaque membre apporte sa passion et son savoir-faire pour créer
            des solutions qui transforment réellement votre activité.
          </SectionHeader.Description>
        </SectionHeader.Root>

        {/* Citation Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl"
        >
          <div className="rounded-2xl border border-white/30 bg-white/20 p-6 backdrop-blur-sm">
            <Text
              variant="body"
              className="text-center leading-relaxed text-gray-700 italic"
            >
              &ldquo;Notre mission : transformer chaque défi pharmaceutique en
              opportunité d&apos;innovation. Ensemble, nous repoussons les
              limites du possible pour révolutionner le secteur.&rdquo;
            </Text>
            <Text
              variant="small"
              className="phardev-gradient-text mt-3 text-center font-semibold"
            >
              — L&apos;équipe {PHARDEV_CONFIG.name}
            </Text>
          </div>
        </motion.div>

        {/* Stats Équipe avec StatsDisplay */}
        <StatsDisplay
          stats={teamStats}
          variant="default"
          cols={4}
          delay={0.4}
          stagger={0.1}
        />
      </Container>
    </Section>
  )
}
