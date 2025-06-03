"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  Brain,
  CheckCircle,
  Code,
  ExternalLink,
  Linkedin,
  Palette,
  Server,
} from "lucide-react"

export function TeamProfiles() {
  const teamMembers = [
    {
      id: 1,
      name: "Alexandre Dubois",
      role: "CEO & CTO",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Architecture Cloud", "Stratégie Tech"],
      expertise:
        "15 ans d'expérience développement logiciel pharmaceutique. Expert architecture scalable et réglementations sectorielles.",
      achievements: ["10+ certifications AWS", "Expert conformité GDP"],
      pharmaKnowledge:
        "Réglementation ANSM • Bonnes Pratiques Distribution • Validation systèmes critiques",
      linkedin: "https://linkedin.com/in/alexandre-dubois-phardev",
      icon: Server,
      iconColor: "text-phardev-primary-500",
      iconBg: "bg-phardev-primary-50",
    },
    {
      id: 2,
      name: "Marie Rousseau",
      role: "Lead Developer",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["React/Node.js", "API Design"],
      expertise:
        "Spécialiste développement full-stack avec focus e-commerce pharmaceutique. Experte optimisation performance.",
      achievements: ["React Expert certifiée", "Performance Web champion"],
      pharmaKnowledge:
        "E-commerce réglementé • Traçabilité médicaments • Intégrations ERP pharmacie",
      linkedin: "https://linkedin.com/in/marie-rousseau-phardev",
      icon: Code,
      iconColor: "text-phardev-secondary-500",
      iconBg: "bg-phardev-secondary-50",
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Data Scientist",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Machine Learning", "Analytics BI"],
      expertise:
        "Expert IA et analytics avec spécialisation secteur santé. Développe solutions prédictives pour optimisation stocks.",
      achievements: ["PhD Machine Learning", "15+ projets IA santé"],
      pharmaKnowledge:
        "Prédiction demande médicaments • Analytics rotation stocks • IA diagnostic aide",
      linkedin: "https://linkedin.com/in/thomas-martin-phardev",
      icon: Brain,
      iconColor: "text-phardev-accent-500",
      iconBg: "bg-phardev-accent-50",
    },
    {
      id: 4,
      name: "Sophie Lemoine",
      role: "UX/UI Designer",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["Design Systems", "UX Research"],
      expertise:
        "Designer senior spécialisée interfaces métier santé. Experte ergonomie logiciels pharmaceutiques.",
      achievements: ["10+ ans UX santé", "Design Systems expert"],
      pharmaKnowledge:
        "Ergonomie logiciels officine • UX workflow pharmacien • Design compliance ANSM",
      linkedin: "https://linkedin.com/in/sophie-lemoine-phardev",
      icon: Palette,
      iconColor: "text-phardev-primary-500",
      iconBg: "bg-phardev-primary-50",
    },
  ]

  return (
    <Section spacing="lg" background="muted">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Heading level={2} variant="default" className="mb-4">
            Rencontrez nos{" "}
            <span className="phardev-gradient-text">Experts</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Chaque membre combine excellence technique et connaissance
            approfondie du secteur pharmaceutique.
          </Text>
        </motion.div>

        <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="lg">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hoverable className="group h-full">
                  <CardHeader>
                    <div className="relative mb-4">
                      <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-2xl">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div
                        className={`absolute -right-2 -bottom-2 h-8 w-8 ${member.iconBg} flex items-center justify-center rounded-lg border-2 border-white`}
                      >
                        <Icon className={`h-4 w-4 ${member.iconColor}`} />
                      </div>
                    </div>
                    <Heading
                      level={3}
                      className="group-hover:text-phardev-primary-700 mb-1 text-center text-gray-900 transition-colors duration-200"
                    >
                      {member.name}
                    </Heading>
                    <Text
                      variant="small"
                      className="text-phardev-secondary-600 mb-3 text-center font-semibold"
                    >
                      {member.role}
                    </Text>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {member.specialties.map(specialty => (
                          <span
                            key={specialty}
                            className="bg-phardev-secondary-50 text-phardev-secondary-700 border-phardev-secondary-200 rounded-full border px-2 py-1 text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Text
                      variant="small"
                      className="mb-4 text-center leading-relaxed text-gray-600"
                    >
                      {member.expertise}
                    </Text>
                    <div className="mb-4 space-y-2">
                      {member.achievements.map(achievement => (
                        <div
                          key={achievement}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-500" />
                          <Text
                            variant="small"
                            className="text-xs text-gray-700"
                          >
                            {achievement}
                          </Text>
                        </div>
                      ))}
                    </div>
                    <div className="mb-4 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-3">
                      <Text
                        variant="small"
                        className="text-xs leading-relaxed font-medium text-gray-700"
                      >
                        <span className="text-phardev-primary-600 font-semibold">
                          Expertise Pharma:
                        </span>
                        <br />
                        {member.pharmaKnowledge}
                      </Text>
                    </div>
                    <div className="text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-phardev-primary-600 hover:text-phardev-primary-700 inline-flex items-center space-x-2 transition-colors duration-200"
                      >
                        <Linkedin className="h-4 w-4" />
                        <Text variant="small" className="font-medium">
                          Profil LinkedIn
                        </Text>
                        <ExternalLink className="h-3 w-3" />
                      </a>
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
