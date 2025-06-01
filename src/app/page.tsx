"use client"

import { Container, Grid, Section } from "@/components/layout"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@/components/ui"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import { ExternalLink, FileText, Hash, Type } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Container>
        <Section>
          <Card>
            <CardContent>
              <Heading level={1} variant="gradient">
                {PHARDEV_CONFIG.name}
              </Heading>
              <Text variant="lead">Typography Loading...</Text>
            </CardContent>
          </Card>
        </Section>
      </Container>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
      {/* Hero Section */}
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
                  Typography System & Design Foundation
                </Text>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" leftIcon={<Type className="h-5 w-5" />}>
                    Typography
                  </Button>
                  <Button variant="secondary" size="lg">
                    Components
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Typography Showcase */}
      <Section spacing="lg">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            Typography System
          </Heading>

          <Grid cols={1} responsive={{ lg: 2 }} gap="xl">
            {/* Headings */}
            <Card variant="elevated">
              <CardHeader>
                <Hash className="mb-2 h-8 w-8 text-blue-500" />
                <Heading level={3}>Headings</Heading>
                <Text variant="muted">
                  Hiérarchie typographique complète H1-H6
                </Text>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Heading level={1}>Heading 1</Heading>
                    <Text variant="small" className="text-gray-400">
                      text-5xl font-bold
                    </Text>
                  </div>
                  <div>
                    <Heading level={2}>Heading 2</Heading>
                    <Text variant="small" className="text-gray-400">
                      text-4xl font-bold
                    </Text>
                  </div>
                  <div>
                    <Heading level={3}>Heading 3</Heading>
                    <Text variant="small" className="text-gray-400">
                      text-3xl font-bold
                    </Text>
                  </div>
                  <div>
                    <Heading level={4}>Heading 4</Heading>
                    <Text variant="small" className="text-gray-400">
                      text-2xl font-semibold
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Text Variants */}
            <Card variant="elevated">
              <CardHeader>
                <FileText className="mb-2 h-8 w-8 text-purple-500" />
                <Heading level={3}>Text Variants</Heading>
                <Text variant="muted">Variantes de texte pour tous usages</Text>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Text variant="lead">
                      Text Lead - Pour introductions importantes
                    </Text>
                  </div>
                  <div>
                    <Text variant="body">
                      Text Body - Contenu principal avec espacement optimal
                    </Text>
                  </div>
                  <div>
                    <Text variant="large">
                      Text Large - Mise en avant de contenu
                    </Text>
                  </div>
                  <div>
                    <Text variant="small">
                      Text Small - Informations secondaires
                    </Text>
                  </div>
                  <div>
                    <Text variant="muted">
                      Text Muted - Annotations et métadonnées
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Heading Variants */}
      <Section spacing="lg" background="muted">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            Heading Variants
          </Heading>

          <Grid cols={1} responsive={{ md: 3 }} gap="lg">
            <Card>
              <CardContent className="text-center">
                <Heading level={2} variant="default">
                  Default
                </Heading>
                <Text variant="muted">Noir standard</Text>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center">
                <Heading level={2} variant="gradient">
                  Gradient
                </Heading>
                <Text variant="muted">Dégradé Phardev</Text>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center">
                <Heading level={2} variant="muted">
                  Muted
                </Heading>
                <Text variant="muted">Gris atténué</Text>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Links Showcase */}
      <Section spacing="lg">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            Link Components
          </Heading>

          <Card variant="elevated" className="mx-auto max-w-3xl">
            <CardHeader>
              <ExternalLink className="mb-2 h-8 w-8 text-cyan-500" />
              <Heading level={3}>Link Variants</Heading>
              <Text variant="muted">
                Links avec animations et états glassmorphism
              </Text>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Default Link
                    </Text>
                    <Link href="#" variant="default">
                      Lien standard avec underline
                    </Link>
                  </div>

                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Muted Link
                    </Text>
                    <Link href="#" variant="muted">
                      Lien discret hover reveal
                    </Link>
                  </div>

                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Gradient Link
                    </Text>
                    <Link href="#" variant="gradient">
                      Lien avec dégradé Phardev
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Button Link
                    </Text>
                    <Link href="#" variant="button">
                      Link avec style button
                    </Link>
                  </div>

                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Subtle Link
                    </Text>
                    <Link href="#" variant="subtle">
                      Lien subtil dans texte
                    </Link>
                  </div>

                  <div>
                    <Text
                      variant="small"
                      className="mb-2 font-medium text-gray-700"
                    >
                      External Link
                    </Text>
                    <Link href="https://phardev.fr" external>
                      Lien externe (nouvel onglet)
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Content Example */}
      <Section spacing="lg" background="accent">
        <Container size="md">
          <Card variant="gradient">
            <CardContent>
              <Heading level={3} className="mb-6">
                Exemple de Contenu Riche
              </Heading>

              <Text variant="lead" className="mb-4">
                Ceci est un exemple de composition typographique utilisant tous
                nos composants pour créer du contenu riche et hiérarchisé.
              </Text>

              <Text variant="body" className="mb-4">
                Le système typographique Phardev assure une cohérence visuelle
                parfaite à travers toute l'application. Chaque composant
                respecte les
                <Link href="#" variant="subtle" className="mx-1">
                  principes de design
                </Link>
                établis et s'intègre harmonieusement.
              </Text>

              <Text variant="small" className="mb-6">
                Les variantes permettent une flexibilité maximale tout en
                maintenant la cohérence du design system Phardev.
              </Text>

              <div className="flex gap-4">
                <Link href="#" variant="button">
                  En savoir plus
                </Link>
                <Link href="#" variant="gradient">
                  Documentation
                </Link>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Status */}
      <Section spacing="sm">
        <Container>
          <Text variant="muted" className="text-center">
            Phase 1.2.5 Typography System Complete | Design Foundation Ready
          </Text>
        </Container>
      </Section>
    </div>
  )
}
