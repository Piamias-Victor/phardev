"use client"

import { Container, Section } from "@/components/layout"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Heading,
  Text,
} from "@/components/ui"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react"

export function HeroSection() {
  return (
    <Section spacing="sm" background="gradient" className="pt-4">
      <Container size="xl" padding="md">
        <div className="grid min-h-[60vh] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contenu Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge Innovation avec Icône Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <Zap className="h-2.5 w-2.5 text-white" />
              </div>
              <Text
                variant="small"
                className="phardev-gradient-text font-semibold"
              >
                Solutions hyper-innovantes pour pharmacies
              </Text>
            </motion.div>

            {/* Titre Principal H1 SEO */}
            <div className="space-y-4">
              <Heading
                level={1}
                variant="default"
                className="text-4xl text-gray-900 lg:text-5xl xl:text-6xl"
              >
                Solutions{" "}
                <span className="phardev-gradient-text">Innovation</span>
                <br />
                Pharmaceutique
              </Heading>

              <Text
                variant="lead"
                className="mx-auto max-w-lg text-lg text-gray-600 lg:mx-0 lg:text-xl"
              >
                L&apos;alliance parfaite entre{" "}
                <span className="text-phardev-primary-600 font-semibold">
                  expertise métier pharmaceutique
                </span>{" "}
                et{" "}
                <span className="text-phardev-secondary-600 font-semibold">
                  excellence technique
                </span>
                . Transformez votre officine avec nos solutions digitales sur
                mesure.
              </Text>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto"
              >
                Découvrez nos solutions
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Audit gratuit
              </Button>
            </motion.div>

            {/* Stats Crédibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start lg:gap-6"
            >
              <div className="flex items-center space-x-2">
                <Building2 className="text-phardev-primary-500 h-4 w-4 lg:h-5 lg:w-5" />
                <Text
                  variant="small"
                  className="text-sm font-semibold text-gray-700"
                >
                  {PHARDEV_CONFIG.stats.clientsCount}+ pharmacies
                </Text>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 lg:h-5 lg:w-5" />
                <Text
                  variant="small"
                  className="text-sm font-semibold text-gray-700"
                >
                  {PHARDEV_CONFIG.stats.satisfactionRate}% satisfaction
                </Text>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-phardev-secondary-500 h-4 w-4 lg:h-5 lg:w-5" />
                <Text
                  variant="small"
                  className="text-sm font-semibold text-gray-700"
                >
                  {PHARDEV_CONFIG.stats.yearsExperience} ans expertise
                </Text>
              </div>
            </motion.div>
          </motion.div>

          {/* Card Mise en Valeur */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-full max-w-md lg:mr-0 lg:ml-auto"
          >
            <Card variant="gradient" className="w-full">
              <CardHeader>
                <div className="mb-4 flex items-center space-x-3">
                  <div className="rounded-lg bg-white/20 p-2">
                    <Sparkles className="text-phardev-primary-600 h-6 w-6" />
                  </div>
                  <Heading level={3} className="text-xl text-gray-900">
                    Pourquoi Phardev ?
                  </Heading>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Expertise exclusive secteur pharmaceutique",
                    "Technologies de pointe adaptées métier",
                    "ROI moyen +150% sur nos projets",
                    "Support technique 24/7 spécialisé",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <Text
                        variant="body"
                        className="text-sm text-gray-700 lg:text-base"
                      >
                        {benefit}
                      </Text>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
