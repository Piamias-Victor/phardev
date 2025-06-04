"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Card, CardContent, CardHeader, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import { CheckCircle, ExternalLink, Linkedin } from "lucide-react"

export function TeamProfiles() {
  const team = [
    {
      name: "Alexandre Dubois",
      role: "CEO & CTO",
      expertise:
        "15 ans développement logiciel pharmaceutique. Expert architecture scalable.",
      skills: ["Architecture Cloud", "Stratégie Tech"],
      achievements: ["10+ certifications AWS", "Expert conformité GDP"],
      pharmaKnowledge:
        "Réglementation ANSM • Bonnes Pratiques Distribution • Validation systèmes critiques",
    },
    {
      name: "Marie Rousseau",
      role: "Lead Developer",
      expertise:
        "Spécialiste full-stack e-commerce pharmaceutique. Experte performance.",
      skills: ["React/Node.js", "API Design"],
      achievements: ["React Expert certifiée", "Performance Web champion"],
      pharmaKnowledge:
        "E-commerce réglementé • Traçabilité médicaments • Intégrations ERP pharmacie",
    },
    {
      name: "Thomas Martin",
      role: "Data Scientist",
      expertise:
        "Expert IA secteur santé. Solutions prédictives optimisation stocks.",
      skills: ["Machine Learning", "Analytics BI"],
      achievements: ["PhD Machine Learning", "15+ projets IA santé"],
      pharmaKnowledge:
        "Prédiction demande médicaments • Analytics rotation stocks • IA diagnostic aide",
    },
    {
      name: "Sophie Lemoine",
      role: "UX/UI Designer",
      expertise:
        "Designer interfaces métier santé. Experte ergonomie pharmaceutique.",
      skills: ["Design Systems", "UX Research"],
      achievements: ["10+ ans UX santé", "Design Systems expert"],
      pharmaKnowledge:
        "Ergonomie logiciels officine • UX workflow pharmacien • Design compliance ANSM",
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
          <Heading level={2} className="mb-4">
            Rencontrez nos{" "}
            <span className="phardev-gradient-text">Experts</span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-2xl text-gray-600">
            Excellence technique et connaissance pharmaceutique approfondie.
          </Text>
        </motion.div>

        <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="lg">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" hoverable className="group h-full">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <span className="phardev-gradient-text text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  {/* ✅ NOM AVEC GRADIENT COMME AILLEURS */}
                  <Heading
                    level={3}
                    className="phardev-gradient-text mb-2 text-center font-bold"
                  >
                    {member.name}
                  </Heading>
                  {/* ✅ ROLE AVEC GRADIENT */}
                  <Text
                    variant="small"
                    className="phardev-gradient-text text-center font-semibold"
                  >
                    {member.role}
                  </Text>
                </CardHeader>
                <CardContent>
                  <Text
                    variant="small"
                    className="mb-4 text-center text-gray-600"
                  >
                    {member.expertise}
                  </Text>

                  {/* ✅ SKILLS AVEC GRADIENT COMME AILLEURS */}
                  <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {member.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-gradient-phardev rounded-full border border-blue-200 px-3 py-1 text-xs font-medium"
                      >
                        <span className="phardev-gradient-text font-semibold">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 space-y-2">
                    {member.achievements.map(achievement => (
                      <div
                        key={achievement}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-500" />
                        <Text variant="small" className="text-xs text-gray-700">
                          {achievement}
                        </Text>
                      </div>
                    ))}
                  </div>

                  {/* ✅ EXPERTISE PHARMA AVEC GRADIENT */}
                  <div className="bg-gradient-phardev mb-4 rounded-lg border border-blue-100 p-3">
                    <Text
                      variant="small"
                      className="text-xs leading-relaxed font-medium text-gray-700"
                    >
                      <span className="phardev-gradient-text font-bold">
                        Expertise Pharma:
                      </span>
                      <br />
                      {member.pharmaKnowledge}
                    </Text>
                  </div>

                  {/* ✅ LINKEDIN AVEC GRADIENT */}
                  <div className="text-center">
                    <a
                      href="#"
                      className="phardev-gradient-text inline-flex items-center space-x-2 text-sm font-bold no-underline hover:opacity-80"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>Profil LinkedIn</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
