"use client"

import { Container, Section } from "@/components/layout"
import {
  AnimatedGrid,
  CardWithIcon,
  SectionHeader,
  StatsDisplay,
  Text,
} from "@/components/ui"
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
        <SectionHeader.Root>
          <SectionHeader.Title gradient={["confiance"]}>
            Ils nous font confiance
          </SectionHeader.Title>
          <SectionHeader.Description>
            Découvrez pourquoi les pharmaciens leaders choisissent Phardev pour
            leur transformation digitale et obtiennent des résultats
            exceptionnels.
          </SectionHeader.Description>
        </SectionHeader.Root>

        <div className="mb-12">
          <AnimatedGrid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
            {testimonials.map(testimonial => (
              <CardWithIcon
                key={testimonial.id}
                icon={Quote}
                title={testimonial.name}
              >
                <Text
                  variant="body"
                  className="mb-4 leading-relaxed text-gray-700 italic"
                >
                  &ldquo;{testimonial.content}&rdquo;
                </Text>
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                    <Text variant="small" className="font-medium text-gray-600">
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
                    <span className="bg-gradient-phardev rounded-full border border-blue-200 px-3 py-1.5 text-sm font-medium">
                      <span className="phardev-gradient-text">
                        {testimonial.project}
                      </span>
                    </span>
                  </div>
                </div>
              </CardWithIcon>
            ))}
          </AnimatedGrid>
        </div>

        {/* Trust Signals avec StatsDisplay */}
        <StatsDisplay
          stats={trustSignals}
          variant="glass"
          cols={4}
          delay={0.3}
          stagger={0.1}
        />
      </Container>
    </Section>
  )
}
