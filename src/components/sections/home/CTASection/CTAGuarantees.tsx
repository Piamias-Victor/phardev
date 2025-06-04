"use client"

import { Text } from "@/components/ui"
import { motion } from "framer-motion"
import { Calendar, CheckCircle, Clock, Shield } from "lucide-react"

/**
 * CTA Guarantees Component - Garanties et trust signals
 * Responsabilité : Affichage garanties avec animations
 */
export function CTAGuarantees() {
  const guarantees = [
    { icon: Clock, text: "Réponse garantie sous 24h" },
    { icon: Shield, text: "Audit initial gratuit" },
    { icon: CheckCircle, text: "Devis personnalisé sans engagement" },
    { icon: Calendar, text: "RDV stratégique offert" },
  ]

  return (
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
  )
}
