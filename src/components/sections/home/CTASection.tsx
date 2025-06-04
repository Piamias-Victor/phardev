"use client"

import { Container, Section } from "@/components/layout"
import { CTAContent } from "./CTASection/CTAContent"
import { CTAForm } from "./CTASection/CTAForm"
import { CTAGuarantees } from "./CTASection/CTAGuarantees"

/**
 * CTA Section - Composition des composants CTA
 * Responsabilité : Orchestration layout et composants CTA
 */
export function CTASection() {
  return (
    <Section spacing="xl" background="gradient">
      <Container size="lg">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Contenu CTA */}
          <div>
            <CTAContent />
            <CTAGuarantees />
          </div>

          {/* Formulaire Contact */}
          <CTAForm />
        </div>
      </Container>
    </Section>
  )
}
