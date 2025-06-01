"use client"

import { Container, Section } from "@/components/layout"
import { Button, Heading, Text } from "@/components/ui"
import { motion } from "framer-motion"
import {
  BarChart3,
  Bot,
  Globe,
  Search,
  ShoppingCart,
  Smartphone,
  X,
  Zap,
} from "lucide-react"
import { useState } from "react"

export function HeaderProjects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const filterCategories = [
    { id: "site-vitrine", label: "Sites", icon: Globe, count: 8 },
    { id: "e-commerce", label: "E-commerce", icon: ShoppingCart, count: 12 },
    { id: "iot", label: "IoT", icon: Smartphone, count: 6 },
    { id: "ia", label: "IA", icon: Bot, count: 9 },
    { id: "analytics", label: "Analytics", icon: BarChart3, count: 7 },
  ]

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const clearFilters = () => {
    setActiveFilters([])
    setSearchTerm("")
  }

  return (
    <Section spacing="md" background="gradient" className="pt-4 pb-2">
      <Container size="lg" padding="md">
        {/* Header Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          {/* Badge avec Design Identique HeroSection */}
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
              <Zap className="h-2.5 w-2.5 text-white" />
            </div>
            <Text
              variant="small"
              className="phardev-gradient-text font-semibold"
            >
              Portfolio innovation pharmaceutique
            </Text>
          </div>

          <Heading
            level={1}
            variant="default"
            className="mb-4 text-3xl text-gray-900 lg:text-4xl xl:text-5xl"
          >
            Nos <span className="phardev-gradient-text">Réalisations</span>
            <br />
            Innovation Pharmaceutique
          </Heading>

          <Text
            variant="lead"
            className="mx-auto max-w-2xl text-base text-gray-600 lg:text-lg"
          >
            Découvrez notre portfolio de solutions digitales qui transforment le
            secteur pharmaceutique. Expertise métier et excellence technique.
          </Text>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto mb-6 max-w-sm"
        >
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400 lg:h-5 lg:w-5" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="focus:border-phardev-primary-500 focus:ring-phardev-primary-200 w-full rounded-xl border border-white/50 bg-white/80 py-2.5 pr-4 pl-9 text-sm backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none lg:py-3 lg:pl-10 lg:text-base"
            />
          </div>
        </motion.div>

        {/* Filtres Catégories - Mobile Optimisé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <Text
            variant="small"
            className="mb-3 text-center text-sm font-semibold text-gray-600"
          >
            Filtrer par solution
          </Text>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:justify-center lg:gap-3">
            {filterCategories.map(category => {
              const Icon = category.icon
              const isActive = activeFilters.includes(category.id)
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "primary" : "secondary"}
                  size="sm"
                  leftIcon={<Icon className="h-3 w-3 lg:h-4 lg:w-4" />}
                  onClick={() => toggleFilter(category.id)}
                  className="justify-center px-2 py-1.5 text-xs lg:px-3 lg:py-2 lg:text-sm"
                >
                  <span className="truncate">{category.label}</span>
                  <span
                    className={`ml-1 rounded-full px-1 py-0.5 text-xs lg:ml-2 lg:px-1.5 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-phardev-secondary-100 text-phardev-secondary-700"
                    }`}
                  >
                    {category.count}
                  </span>
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* Filtres Actifs + Clear */}
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <Text variant="small" className="text-sm text-gray-600">
              Actifs: {activeFilters.length}
            </Text>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<X className="h-3 w-3" />}
              onClick={clearFilters}
              className="px-2 py-1 text-xs"
            >
              Effacer
            </Button>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
