"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  Award,
  Brain,
  CheckCircle,
  Cloud,
  Laptop,
  Shield,
  Smartphone,
  Target,
} from "lucide-react"

export function TeamSkills() {
  const techCategories = [
    {
      title: "Frontend Excellence",
      icon: Laptop,
      color: "text-phardev-primary-500",
      bg: "bg-phardev-primary-50",
      skills: [
        "React 18",
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
      ],
    },
    {
      title: "Backend & Cloud",
      icon: Cloud,
      color: "text-phardev-secondary-500",
      bg: "bg-phardev-secondary-50",
      skills: [
        "Node.js",
        "Python",
        "AWS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Intelligence Artificielle",
      icon: Brain,
      color: "text-phardev-accent-500",
      bg: "bg-phardev-accent-50",
      skills: [
        "Machine Learning",
        "TensorFlow",
        "OpenAI GPT",
        "Computer Vision",
        "NLP",
        "Pandas",
      ],
    },
    {
      title: "Mobile & IoT",
      icon: Smartphone,
      color: "text-phardev-accent-500",
      bg: "bg-phardev-accent-50",
      skills: [
        "React Native",
        "Flutter",
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "InfluxDB",
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS Solutions Architect",
      level: "Professional",
      team: "Alexandre, Thomas",
    },
    { name: "React Developer", level: "Expert", team: "Marie, Sophie" },
    {
      name: "Google Cloud Platform",
      level: "Professional",
      team: "Thomas, Alexandre",
    },
    { name: "Microsoft Azure", level: "Associate", team: "Marie, Alexandre" },
    { name: "Scrum Master", level: "Certified", team: "Équipe complète" },
    { name: "ANSM Compliance", level: "Specialist", team: "Équipe complète" },
  ]

  const pharmaExpertise = [
    "Réglementation ANSM & European Medicines Agency",
    "Bonnes Pratiques de Distribution (GDP)",
    "Validation de systèmes informatisés critiques",
    "Traçabilité médicaments & sérialisation",
    "Conformité RGPD santé & données sensibles",
    "Intégrations ERP pharmacie (Pharmagest, Winpharma)",
    "E-commerce pharmaceutique réglementé",
    "Workflow officine & ergonomie métier",
  ]

  const timeline = [
    {
      year: "2019",
      achievement: "Première certification AWS équipe",
      impact: "Architecture cloud maîtrisée",
    },
    {
      year: "2020",
      achievement: "Spécialisation secteur pharmaceutique",
      impact: "Expertise métier approfondie",
    },
    {
      year: "2021",
      achievement: "Certification conformité ANSM",
      impact: "Solutions 100% conformes",
    },
    {
      year: "2022",
      achievement: "Leadership IA secteur santé",
      impact: "Projets ML innovants",
    },
    {
      year: "2023",
      achievement: "Équipe sénior complète",
      impact: "Autonomie projets complexes",
    },
    {
      year: "2024",
      achievement: "200+ projets réalisés",
      impact: "Expertise reconnue marché",
    },
  ]

  return (
    <Section spacing="lg" background="transparent">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Heading level={2} variant="default" className="mb-4">
            Notre{" "}
            <span className="phardev-gradient-text">Expertise Collective</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Technologies de pointe, certifications officielles et connaissance
            approfondie du secteur pharmaceutique.
          </Text>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Technologies Maîtrisées
            </Heading>
            <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="md">
              {techCategories.map(category => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.title}
                    variant="elevated"
                    hoverable
                    className="group"
                  >
                    <CardHeader>
                      <div
                        className={`h-12 w-12 ${category.bg} mb-3 flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105`}
                      >
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <Heading
                        level={4}
                        className="group-hover:text-phardev-primary-700 text-gray-900 transition-colors"
                      >
                        {category.title}
                      </Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.skills.map(skill => (
                          <div
                            key={skill}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-500" />
                            <Text
                              variant="small"
                              className="text-sm text-gray-700"
                            >
                              {skill}
                            </Text>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </Grid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Certifications Officielles
            </Heading>
            <Card
              variant="elevated"
              className="border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50"
            >
              <CardContent className="p-6">
                <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="md">
                  {certifications.map(cert => (
                    <div
                      key={cert.name}
                      className="flex items-start space-x-3 rounded-xl bg-white/60 p-3"
                    >
                      <Award className="text-phardev-secondary-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                      <div>
                        <Text
                          variant="small"
                          className="font-semibold text-gray-900"
                        >
                          {cert.name}
                        </Text>
                        <Text
                          variant="small"
                          className="text-phardev-primary-600"
                        >
                          {cert.level}
                        </Text>
                        <Text variant="small" className="text-gray-600">
                          {cert.team}
                        </Text>
                      </div>
                    </div>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Expertise Pharmaceutique
            </Heading>
            <Card variant="elevated">
              <CardContent className="p-6">
                <Grid cols={1} responsive={{ md: 2 }} gap="md">
                  {pharmaExpertise.map(expertise => (
                    <div key={expertise} className="flex items-start space-x-3">
                      <Shield className="text-phardev-accent-500 mt-1 h-4 w-4 flex-shrink-0" />
                      <Text
                        variant="small"
                        className="leading-relaxed text-gray-700"
                      >
                        {expertise}
                      </Text>
                    </div>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Heading level={3} className="mb-6 text-center text-gray-900">
              Timeline Succès Collectifs
            </Heading>
            <div className="relative">
              <div className="from-phardev-primary-500 to-phardev-secondary-500 absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-gradient-to-b"></div>
              <div className="space-y-8">
                {timeline.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                    >
                      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-md">
                        <div className="mb-2 flex items-center space-x-2">
                          <Target className="text-phardev-primary-500 h-4 w-4" />
                          <Text
                            variant="small"
                            className="text-phardev-primary-600 font-bold"
                          >
                            {milestone.year}
                          </Text>
                        </div>
                        <Text
                          variant="small"
                          className="mb-1 font-semibold text-gray-900"
                        >
                          {milestone.achievement}
                        </Text>
                        <Text variant="small" className="text-gray-600">
                          {milestone.impact}
                        </Text>
                      </div>
                    </div>
                    <div className="bg-phardev-primary-500 absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white shadow-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
