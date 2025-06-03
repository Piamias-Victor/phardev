"use client"

import { Container, Section } from "@/components/layout"
import { Heading, Text } from "@/components/ui"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import { Award, Brain, Code, Users, Zap } from "lucide-react"

export function HeaderTeam() {
  const teamStats = [
    {
      icon: Users,
      value: "4",
      label: "Experts passionnés",
      color: "text-phardev-primary-500",
    },
    {
      icon: Brain,
      value: "50+",
      label: "Années expérience cumulées",
      color: "text-phardev-secondary-500",
    },
    {
      icon: Code,
      value: "200+",
      label: "Projets réalisés ensemble",
      color: "text-phardev-accent-500",
    },
    {
      icon: Award,
      value: "95%",
      label: "Satisfaction client équipe",
      color: "text-green-500",
    },
  ]

  return (
    <Section spacing="lg" background="gradient" className="pt-8">
      <Container size="lg" padding="md">
        {/* Header Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Badge avec Design Identique Hero/Projets */}
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
              <Zap className="h-2.5 w-2.5 text-white" />
            </div>
            <Text
              variant="small"
              className="phardev-gradient-text font-semibold"
            >
              Équipe innovation pharmaceutique
            </Text>
          </div>

          <Heading
            level={1}
            variant="default"
            className="mb-6 text-3xl text-gray-900 lg:text-4xl xl:text-5xl"
          >
            L&apos;Équipe{" "}
            <span className="phardev-gradient-text">Innovation</span>
            <br />
            Phardev
          </Heading>

          <Text
            variant="lead"
            className="mx-auto mb-8 max-w-3xl text-base text-gray-600 lg:text-lg"
          >
            Notre force ? L&apos;alliance unique entre{" "}
            <span className="text-phardev-primary-600 font-semibold">
              expertise métier pharmaceutique
            </span>{" "}
            et{" "}
            <span className="text-phardev-secondary-600 font-semibold">
              maîtrise technologique de pointe
            </span>
            . Chaque membre apporte sa passion et son savoir-faire pour créer
            des solutions qui transforment réellement votre activité.
          </Text>

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
                className="text-phardev-primary-600 mt-3 text-center font-semibold"
              >
                — L&apos;équipe {PHARDEV_CONFIG.name}
              </Text>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {teamStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <Heading
                  level={3}
                  className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl"
                >
                  {stat.value}
                </Heading>
                <Text variant="small" className="leading-tight text-gray-600">
                  {stat.label}
                </Text>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
