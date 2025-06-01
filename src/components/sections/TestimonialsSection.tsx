"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  Award,
  Building2,
  CheckCircle,
  Quote,
  Shield,
  Star,
  Users,
} from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Marie Dubois",
      role: "Pharmacienne Titulaire",
      company: "Pharmacie du Centre • Lyon",
      content:
        "Phardev a transformé notre gestion quotidienne. Leur solution e-commerce nous a permis d'augmenter nos ventes de 180% en 6 mois.",
      rating: 5,
      project: "E-commerce + Gestion Stock",
      iconColor: "text-phardev-primary-500",
      iconBg: "bg-phardev-primary-50",
    },
    {
      id: 2,
      name: "Philippe Martin",
      role: "Directeur Groupe",
      company: "Réseau PharmaSanté • Paris",
      content:
        "L'expertise métier de Phardev est remarquable. Ils comprennent parfaitement nos contraintes réglementaires.",
      rating: 5,
      project: "Analytics BI Multi-sites",
      iconColor: "text-phardev-secondary-500",
      iconBg: "bg-phardev-secondary-50",
    },
    {
      id: 3,
      name: "Dr. Rousseau",
      role: "Pharmacienne Associée",
      company: "Pharmacie Moderne • Marseille",
      content:
        "Le système IoT développé par Phardev révolutionne notre gestion des médicaments. Investissement rentabilisé rapidement.",
      rating: 5,
      project: "Armoire Connectée IoT",
      iconColor: "text-phardev-accent-500",
      iconBg: "bg-phardev-accent-50",
    },
  ]

  const trustSignals = [
    { icon: Users, value: "200+", label: "Pharmacies accompagnées" },
    { icon: Award, value: "95%", label: "Satisfaction client" },
    { icon: Shield, value: "100%", label: "Solutions conformes ANSM" },
    { icon: Building2, value: "5 ans", label: "Expertise pharmaceutique" },
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
            Ils nous font{" "}
            <span className="phardev-gradient-text">confiance</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Découvrez pourquoi les pharmaciens leaders choisissent Phardev pour
            leur transformation digitale et obtiennent des résultats
            exceptionnels.
          </Text>
        </motion.div>

        {/* Cards Grid Harmonisé */}
        <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg" className="mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" hoverable className="group h-full">
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-xl ${testimonial.iconBg} mb-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}
                  >
                    <Quote className={`h-6 w-6 ${testimonial.iconColor}`} />
                  </div>
                  <Heading
                    level={3}
                    className="group-hover:text-phardev-primary-700 mb-3 text-gray-900 transition-colors duration-200"
                  >
                    {testimonial.name}
                  </Heading>
                </CardHeader>

                <CardContent>
                  <Text
                    variant="body"
                    className="mb-4 leading-relaxed text-gray-700 italic"
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </Text>

                  {/* Rating avec CheckCircle */}
                  <div className="mb-4 flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Infos structurées */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                      <Text
                        variant="small"
                        className="font-medium text-gray-600"
                      >
                        {testimonial.role}
                      </Text>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                      <Text variant="small" className="text-gray-500">
                        {testimonial.company}
                      </Text>
                    </div>
                    <div className="mt-3">
                      <span className="bg-phardev-secondary-50 text-phardev-secondary-700 border-phardev-secondary-200 rounded-full border px-3 py-1.5 text-sm font-medium">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-8"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon
              return (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon className="text-phardev-primary-500 h-6 w-6" />
                  </div>
                  <div className="flex min-h-[60px] flex-col justify-center">
                    <Heading
                      level={3}
                      className="mb-1 text-2xl font-bold text-gray-900"
                    >
                      {signal.value}
                    </Heading>
                    <Text
                      variant="small"
                      className="leading-tight text-gray-600"
                    >
                      {signal.label}
                    </Text>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
