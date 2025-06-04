"use client"

import { Container, Section } from "@/components/layout"
import { Button, Card, CardContent, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Rocket,
  Shield,
} from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "site-vitrine",
  })

  const projectTypes = [
    { value: "site-vitrine", label: "Site Vitrine" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "iot", label: "Solution IoT" },
    { value: "ia", label: "Intelligence Artificielle" },
    { value: "analytics", label: "Analytics BI" },
    { value: "audit", label: "Audit Digital" },
  ]

  const guarantees = [
    { icon: Clock, text: "Réponse garantie sous 24h" },
    { icon: Shield, text: "Audit initial gratuit" },
    { icon: CheckCircle, text: "Devis personnalisé sans engagement" },
    { icon: Calendar, text: "RDV stratégique offert" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <Section spacing="xl" background="gradient">
      <Container size="lg">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Contenu CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Rocket className="phardev-gradient-text h-4 w-4" />
              <Text
                variant="small"
                className="phardev-gradient-text font-semibold"
              >
                Prêt à transformer votre pharmacie ?
              </Text>
            </div>

            <Heading level={2} variant="default" className="mb-4 text-gray-900">
              Commençons votre projet{" "}
              <span className="phardev-gradient-text">
                dès aujourd&apos;hui
              </span>
            </Heading>

            <Text
              variant="lead"
              className="mx-auto mb-8 max-w-lg text-gray-600 lg:mx-0"
            >
              Rejoignez les 200+ pharmacies qui ont fait confiance à Phardev
              pour leur transformation digitale. Résultats garantis et
              accompagnement premium.
            </Text>

            {/* Garanties */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon
                return (
                  <motion.div
                    key={guarantee.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                      <Icon className="h-4 w-4 text-green-600" />
                    </div>
                    <Text variant="small" className="font-medium text-gray-700">
                      {guarantee.text}
                    </Text>
                  </motion.div>
                )
              })}
            </div>

            {/* Contact Direct */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex items-center space-x-2">
                <Phone className="phardev-gradient-text h-4 w-4" />
                <Text variant="small" className="text-gray-600">
                  01 XX XX XX XX
                </Text>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="phardev-gradient-text h-4 w-4" />
                <Text variant="small" className="text-gray-600">
                  contact@phardev.fr
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Formulaire Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              variant="gradient"
              className="mx-auto max-w-md lg:mr-0 lg:ml-auto"
            >
              <CardContent>
                <div className="mb-6">
                  <Heading level={3} className="mb-2 text-gray-900">
                    Démarrons votre projet
                  </Heading>
                  <Text variant="body" className="text-gray-600">
                    Recevez votre audit gratuit et devis personnalisé
                  </Text>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Votre email professionnel"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <select
                      value={formData.projectType}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    >
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Recevoir mon audit gratuit
                  </Button>
                </form>

                <Text
                  variant="small"
                  className="mt-4 text-center text-gray-500"
                >
                  Vos données sont protégées et ne seront jamais partagées
                </Text>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
