"use client"

import { Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { Mail, Phone, Rocket } from "lucide-react"

/**
 * CTA Content Component - Contenu marketing et contact direct
 * Responsabilité : Message principal, badge, coordonnées
 */
export function CTAContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
        <Rocket className="phardev-gradient-text h-4 w-4" />
        <Text variant="small" className="phardev-gradient-text font-semibold">
          Prêt à transformer votre pharmacie ?
        </Text>
      </div>

      <Heading level={2} variant="default" className="mb-4 text-gray-900">
        Commençons votre projet{" "}
        <span className="phardev-gradient-text">dès aujourd&apos;hui</span>
      </Heading>

      <Text
        variant="lead"
        className="mx-auto mb-8 max-w-lg text-gray-600 lg:mx-0"
      >
        Rejoignez les 200+ pharmacies qui ont fait confiance à Phardev pour leur
        transformation digitale. Résultats garantis et accompagnement premium.
      </Text>

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
  )
}
