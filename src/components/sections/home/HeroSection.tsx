"use client"

import { Container, Section } from "@/components/layout"
import { Button, SectionHeader, StatsDisplay, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export function HeroSection() {
  const stats = [
    { icon: Users, value: "200+", label: "Pharmacies accompagnées" },
    { icon: Award, value: "95%", label: "Satisfaction client" },
    { icon: TrendingUp, value: "+150%", label: "ROI moyen" },
  ]

  const benefits = [
    "Solutions conformes ANSM",
    "ROI démontré en 6 mois",
    "Support expert 24/7",
    "Formation équipes incluse",
  ]

  return (
    <Section spacing="xl" background="gradient">
      <Container size="lg">
        <div className="text-center">
          <SectionHeader.Root>
            <SectionHeader.Badge icon={Zap}>
              #1 Solutions Innovation Pharmaceutique France
            </SectionHeader.Badge>
            <SectionHeader.Title
              level={1}
              className="text-4xl leading-tight font-bold text-gray-900 lg:text-6xl"
              gradient={["expertise métier", "excellence technique"]}
            >
              L&apos;alliance entre expertise métier et excellence technique
            </SectionHeader.Title>
            <SectionHeader.Description className="text-lg lg:text-xl">
              Transformez votre pharmacie avec nos solutions digitales
              innovantes. ROI garanti, conformité ANSM et accompagnement expert
              pour une croissance durable.
            </SectionHeader.Description>
          </SectionHeader.Root>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="px-8 py-4"
            >
              Démarrer votre projet
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-4">
              Découvrir nos solutions
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:gap-6">
              {benefits.map(benefit => (
                <div
                  key={benefit}
                  className="flex items-center space-x-2 text-left sm:text-center"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <Text variant="small" className="text-gray-600">
                    {benefit}
                  </Text>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats avec StatsDisplay */}
          <StatsDisplay
            stats={stats}
            variant="cards"
            cols={3}
            delay={0.8}
            stagger={0.1}
          />
        </div>
      </Container>
    </Section>
  )
}
