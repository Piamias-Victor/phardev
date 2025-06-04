"use client"

import {
  CTASection,
  HeroSection,
  ProjectsShowcase,
  TestimonialsSection,
  ValuesSection,
} from "@/components/sections/home"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-500">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
