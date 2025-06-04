"use client"

import { Container, Section } from "@/components/layout"
import {
  AnimatedGrid,
  Button,
  CardWithIcon,
  SectionHeader,
  Text,
} from "@/components/ui"
import { motion } from "framer-motion"
import {
  BarChart3,
  CheckCircle,
  ShoppingCart,
  Smartphone,
  TrendingUp,
} from "lucide-react"

export function ProjectsShowcase() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Pharmaceutique",
      description:
        "Solution e-commerce complète avec gestion stocks temps réel, conformité réglementaire et paiements sécurisés.",
      technologies: ["Next.js", "Node.js", "Stripe"],
      metrics: [
        { label: "Ventes en ligne", value: "+200%" },
        { label: "Erreurs stock", value: "-50%" },
        { label: "Délai réalisation", value: "8 semaines" },
      ],
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Armoire Connectée IoT",
      description:
        "Système IoT intelligent pour gestion automatisée des stocks avec capteurs et alertes temps réel.",
      technologies: ["IoT", "AWS", "React"],
      metrics: [
        { label: "Gaspillage médicaments", value: "-30%" },
        { label: "Traçabilité produits", value: "+60%" },
        { label: "Délai réalisation", value: "12 semaines" },
      ],
      icon: Smartphone,
    },
    {
      id: 3,
      title: "Analytics BI Avancés",
      description:
        "Tableau de bord analytics avec IA prédictive pour pilotage performance et aide décision stratégique.",
      technologies: ["Python", "D3.js", "IA"],
      metrics: [
        { label: "Insights business", value: "+300%" },
        { label: "Reporting manuel", value: "-70%" },
        { label: "Délai réalisation", value: "16 semaines" },
      ],
      icon: BarChart3,
    },
  ]

  return (
    <Section spacing="lg" background="muted">
      <Container size="lg">
        <SectionHeader.Root>
          <SectionHeader.Title gradient={["Réalisations Phares"]}>
            Nos Réalisations Phares
          </SectionHeader.Title>
          <SectionHeader.Description>
            Découvrez comment nos solutions digitales transforment les
            pharmacies avec des résultats mesurables et un ROI exceptionnel.
          </SectionHeader.Description>
        </SectionHeader.Root>

        <div className="mb-12">
          <AnimatedGrid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
            {featuredProjects.map(project => (
              <CardWithIcon
                key={project.id}
                icon={project.icon}
                title={project.title}
                description={project.description}
              >
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="bg-gradient-phardev rounded-full border border-blue-200 px-3 py-1.5 text-sm font-medium"
                      >
                        <span className="phardev-gradient-text">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.metrics.map(metric => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                        <Text variant="small" className="text-gray-600">
                          {metric.label}:
                        </Text>
                      </div>
                      <Text
                        variant="small"
                        className="phardev-gradient-text font-semibold"
                      >
                        {metric.value}
                      </Text>
                    </div>
                  ))}
                </div>
              </CardWithIcon>
            ))}
          </AnimatedGrid>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" rightIcon={<TrendingUp className="h-5 w-5" />}>
            Voir tous nos projets
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
