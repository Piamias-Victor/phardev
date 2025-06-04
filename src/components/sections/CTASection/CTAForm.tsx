"use client"

import { Button, Card, CardContent, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  projectType: string
}

/**
 * CTA Form Component - Formulaire contact avec gestion état
 * Responsabilité : Formulaire, validation, soumission
 */
export function CTAForm() {
  const [formData, setFormData] = useState<FormData>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card variant="gradient" className="mx-auto max-w-md lg:mr-0 lg:ml-auto">
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
            <FormInput
              type="text"
              placeholder="Votre nom complet"
              value={formData.name}
              onChange={value => setFormData({ ...formData, name: value })}
              required
            />

            <FormInput
              type="email"
              placeholder="Votre email professionnel"
              value={formData.email}
              onChange={value => setFormData({ ...formData, email: value })}
              required
            />

            <FormSelect
              value={formData.projectType}
              onChange={value =>
                setFormData({ ...formData, projectType: value })
              }
              options={projectTypes}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Recevoir mon audit gratuit
            </Button>
          </form>

          <Text variant="small" className="mt-4 text-center text-gray-500">
            Vos données sont protégées et ne seront jamais partagées
          </Text>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Sous-composants helpers
function FormInput({
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
    />
  )
}

function FormSelect({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
