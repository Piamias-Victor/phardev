"use client"

import { Container, Section } from "@/components/layout"
import {
  AnimatedGrid,
  CardWithIcon,
  SectionHeader,
  Text,
} from "@/components/ui"
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
    },
  ]

  return (
    <Section spacing="lg" background="transparent">
      <Container size="lg">
        <SectionHeader.Root>
          <SectionHeader.Title gradient={["Excellence Phardev"]}>
            Les 3 Piliers de l&apos;Excellence Phardev
          </SectionHeader.Title>
          <SectionHeader.Description>
            Notre approche unique combine expertise pharmaceutique, innovation
            technologique et résultats mesurables pour transformer durablement
            votre activité.
          </SectionHeader.Description>
        </SectionHeader.Root>

        <AnimatedGrid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
          {pillars.map(pillar => (
            <CardWithIcon
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            >
              <div className="space-y-2">
                {pillar.features.map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                    <Text variant="small" className="font-medium text-gray-700">
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </CardWithIcon>
          ))}
        </AnimatedGrid>
      </Container>
    </Section>
  )
}
