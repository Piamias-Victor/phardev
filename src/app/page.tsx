"use client"

import { Container, Grid, Section } from "@/components/layout"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Heading,
  Text,
} from "@/components/ui"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import { Menu as MenuIcon, Navigation, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Section>
        <Container>
          <Card>
            <CardContent>
              <Heading level={1} variant="gradient">
                {PHARDEV_CONFIG.name}
              </Heading>
              <Text variant="lead">Header Loading...</Text>
            </CardContent>
          </Card>
        </Container>
      </Section>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
      {/* Hero Section avec Header visible */}
      <Section spacing="xl" background="gradient">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card variant="gradient" className="mx-auto max-w-4xl">
              <CardHeader>
                <Heading level={1} variant="gradient">
                  {PHARDEV_CONFIG.name}
                </Heading>
                <Text variant="lead" className="text-gray-700">
                  Layout Principal & Navigation Premium
                </Text>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    leftIcon={<Navigation className="h-5 w-5" />}
                  >
                    Navigation
                  </Button>
                  <Button variant="secondary" size="lg">
                    Menu Mobile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Navigation Features */}
      <Section spacing="lg">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            Header Premium Features
          </Heading>

          <Grid cols={1} responsive={{ md: 3 }} gap="lg">
            <Card variant="elevated">
              <CardHeader>
                <Sparkles className="mb-2 h-8 w-8 text-blue-500" />
                <Heading level={3}>Glassmorphism</Heading>
              </CardHeader>
              <CardContent>
                <Text variant="body">
                  Header fixe avec effet glassmorphism qui s&apos;active au
                  scroll pour un effet premium.
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <MenuIcon className="mb-2 h-8 w-8 text-purple-500" />
                <Heading level={3}>Menu Responsive</Heading>
              </CardHeader>
              <CardContent>
                <Text variant="body">
                  Navigation responsive avec menu burger sophistiqué et
                  animations fluides.
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <Navigation className="mb-2 h-8 w-8 text-cyan-500" />
                <Heading level={3}>Logo Animé</Heading>
              </CardHeader>
              <CardContent>
                <Text variant="body">
                  Logo Phardev avec micro-animations hover et transitions
                  d&apos;état premium.
                </Text>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Test Scroll Effect */}
      <Section spacing="xl" background="muted">
        <Container>
          <Card variant="gradient" className="text-center">
            <CardContent>
              <Heading level={3} className="mb-4">
                Test Scroll Effect
              </Heading>
              <Text variant="body" className="mb-6">
                Scrolle vers le haut pour voir l&apos;effet glassmorphism du
                header. Le background devient semi-transparent avec
                backdrop-blur.
              </Text>
              <Button>Scroll vers le haut</Button>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Contenu additionnel pour tester scroll */}
      {[1, 2, 3, 4].map(section => (
        <Section key={section} spacing="lg">
          <Container>
            <Card>
              <CardContent>
                <Heading level={4} className="mb-4">
                  Section Test {section}
                </Heading>
                <Text variant="body">
                  Cette section sert à tester l&apos;effet de scroll du header.
                  Plus tu scrolls, plus l&apos;effet glassmorphism du header se
                  révèle.
                </Text>
              </CardContent>
            </Card>
          </Container>
        </Section>
      ))}

      {/* Status */}
      <Section spacing="sm">
        <Container>
          <Text variant="muted" className="text-center">
            Phase 1.3 Layout Principal & Navigation TERMINÉE ✅ | SEO Ready
          </Text>
        </Container>
      </Section>

      {/* Footer Test Section */}
      <Section spacing="xl" background="accent">
        <Container>
          <Card variant="gradient" className="text-center">
            <CardContent>
              <Heading level={2} className="mb-6">
                Footer Premium Ready
              </Heading>
              <Text variant="lead" className="mb-6">
                Le Footer Phardev inclut newsletter, liens organisés, contact et
                réseaux sociaux avec animations.
              </Text>
              <Button size="lg">Voir le Footer ↓</Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  )
}
