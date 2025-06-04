"use client"

import { Container, Section } from "@/components/layout"
import { Button, Heading, Text } from "@/components/ui"
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
          {/* Badge Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <Zap className="h-2.5 w-2.5 text-white" />
              </div>
              <Text
                variant="small"
                className="phardev-gradient-text font-semibold"
              >
                #1 Solutions Innovation Pharmaceutique France
              </Text>
            </div>
          </motion.div>

          {/* Titre Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Heading
              level={1}
              className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-6xl"
            >
              L&apos;alliance entre{" "}
              <span className="phardev-gradient-text">expertise métier</span>
              <br />
              et{" "}
              <span className="phardev-gradient-text">
                excellence technique
              </span>
            </Heading>
            <Text
              variant="lead"
              className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-xl"
            >
              Transformez votre pharmacie avec nos solutions digitales
              innovantes. ROI garanti, conformité ANSM et accompagnement expert
              pour une croissance durable.
            </Text>
          </motion.div>

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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="rounded-2xl border border-white/30 bg-white/20 p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
                      <Icon className="phardev-gradient-text h-8 w-8" />
                    </div>
                    <Heading
                      level={3}
                      className="phardev-gradient-text mb-2 text-3xl font-bold"
                    >
                      {stat.value}
                    </Heading>
                    <Text variant="small" className="text-gray-600">
                      {stat.label}
                    </Text>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
