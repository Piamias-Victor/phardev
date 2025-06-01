"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { Brain, CheckCircle, Rocket, TrendingUp } from "lucide-react"

export function ValuesSection() {
  const pillars = [
    {
      icon: Brain,
      title: "Expertise Métier Pharmaceutique",
      description:
        "Connaissance approfondie des contraintes réglementaires ANSM, GDP et spécificités sectorielles. Notre équipe maîtrise les enjeux métier pour des solutions parfaitement adaptées.",
      features: [
        "Conformité réglementaire",
        "Processus métier optimisés",
        "Formation équipes",
      ],
      iconColor: "text-phardev-primary-500",
      iconBg: "bg-phardev-primary-50",
    },
    {
      icon: Rocket,
      title: "Innovation Technologique",
      description:
        "Technologies de pointe (IA, IoT, Analytics) adaptées aux besoins pharmaceutiques. Stack moderne pour des solutions évolutives et performantes adaptés a vos besoins.",
      features: [
        "Intelligence Artificielle",
        "IoT & capteurs connectés",
        "Analytics avancés",
      ],
      iconColor: "text-phardev-secondary-500",
      iconBg: "bg-phardev-secondary-50",
    },
    {
      icon: TrendingUp,
      title: "Performance Mesurable",
      description:
        "ROI démontré sur chaque projet avec métriques précises. Amélioration quantifiable des performances opérationnelles et financières de nos clients.",
      features: [
        "ROI moyen +150%",
        "Gains temps -40%",
        "Erreurs réduites -70%",
      ],
      iconColor: "text-phardev-accent-500",
      iconBg: "bg-phardev-accent-50",
    },
  ]

  return (
    <Section spacing="lg" background="transparent">
      <Container size="lg">
        {/* Header Section Standardisé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Heading level={2} variant="default" className="mb-4">
            Les 3 Piliers de l&apos;
            <span className="phardev-gradient-text">Excellence Phardev</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Notre approche unique combine expertise pharmaceutique, innovation
            technologique et résultats mesurables pour transformer durablement
            votre activité.
          </Text>
        </motion.div>

        {/* Cards Grid Harmonisé */}
        <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hoverable className="group h-full">
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-xl ${pillar.iconBg} mb-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}
                    >
                      <Icon className={`h-6 w-6 ${pillar.iconColor}`} />
                    </div>
                    <Heading
                      level={3}
                      className="group-hover:text-phardev-primary-700 mb-3 text-gray-900 transition-colors duration-200"
                    >
                      {pillar.title}
                    </Heading>
                  </CardHeader>

                  <CardContent>
                    <Text
                      variant="body"
                      className="mb-4 leading-relaxed text-gray-600"
                    >
                      {pillar.description}
                    </Text>

                    <div className="space-y-2">
                      {pillar.features.map(feature => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                          <Text
                            variant="small"
                            className="font-medium text-gray-700"
                          >
                            {feature}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}
