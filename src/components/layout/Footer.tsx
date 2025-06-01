"use client"

import { Container, Grid, Section } from "@/components/layout"
import { Button, Heading, Link, Text } from "@/components/ui"
import { FOOTER_LINKS } from "@/lib/constants/navigation"
import { PHARDEV_CONFIG } from "@/lib/constants/phardev"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

/**
 * Footer Component Phardev
 * Footer informatif avec sections organisées et animations
 */

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <Section spacing="lg" background="transparent">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-8 lg:p-12">
            <Grid
              cols={1}
              responsive={{ lg: 2 }}
              gap="lg"
              className="items-center"
            >
              <div>
                <Heading level={3} className="mb-4 text-white">
                  Restez Informé
                </Heading>
                <Text variant="large" className="text-blue-50">
                  Recevez nos dernières actualités et insights sur
                  l&apos;innovation pharmaceutique.
                </Text>
              </div>
              <div className="space-y-4 lg:flex lg:items-stretch lg:gap-3 lg:space-y-0">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="h-12 w-full rounded-xl border-0 bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white/70 focus:outline-none lg:flex-1"
                />
                <Button
                  variant="secondary"
                  className="h-12 w-full border-0 bg-white px-6 text-blue-600 hover:bg-blue-50 lg:w-auto"
                >
                  S&apos;abonner
                </Button>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>
      {/* Main Footer */}
      <Section spacing="lg" background="transparent">
        <Container>
          <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="lg">
            {/* Company Info */}
            <div>
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                  <span className="text-lg font-bold text-white">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Phardev</span>
              </div>
              <Text variant="body" className="mb-6 text-gray-600">
                {PHARDEV_CONFIG.description}
              </Text>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: PHARDEV_CONFIG.social.github },
                  { icon: Linkedin, href: PHARDEV_CONFIG.social.linkedin },
                  { icon: Twitter, href: PHARDEV_CONFIG.social.twitter },
                ].map(({ icon: Icon, href }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={href}
                      external
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 no-underline transition-all duration-200 hover:bg-blue-500 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <Heading level={4} className="mb-6 text-gray-900">
                Services
              </Heading>
              <div className="space-y-3">
                {FOOTER_LINKS.services.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 no-underline transition-colors duration-200 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <Heading level={4} className="mb-6 text-gray-900">
                Entreprise
              </Heading>
              <div className="space-y-3">
                {FOOTER_LINKS.company.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 no-underline transition-colors duration-200 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <Heading level={4} className="mb-6 text-gray-900">
                Contact
              </Heading>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <Link
                    href={`mailto:${PHARDEV_CONFIG.contact.email}`}
                    className="text-gray-600 no-underline transition-colors duration-200 hover:text-blue-600"
                  >
                    {PHARDEV_CONFIG.contact.email}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <Text variant="body" className="text-gray-600">
                    {PHARDEV_CONFIG.contact.phone}
                  </Text>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <Text variant="body" className="text-gray-600">
                    {PHARDEV_CONFIG.contact.address}
                  </Text>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <Container>
          <div className="flex flex-col items-center justify-between space-y-4 py-6 md:flex-row md:space-y-0">
            <Text variant="small" className="text-gray-500">
              © {currentYear} {PHARDEV_CONFIG.name}. Tous droits réservés.
            </Text>
            <div className="flex space-x-6">
              {FOOTER_LINKS.legal.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 no-underline transition-colors duration-200 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
