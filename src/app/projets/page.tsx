import { HeaderProjects, ProjectsGrid } from "@/components/sections"
import { generateMetadata } from "@/lib/seo/metadata"
import type { Metadata } from "next"

// SEO Metadata pour page projets
export const metadata: Metadata = generateMetadata({
  title: "Projets Innovation Pharmaceutique",
  description:
    "Découvrez notre portfolio de solutions digitales pour pharmacies : e-commerce, IoT, IA et analytics. Expertise tech + connaissance métier.",
  keywords: [
    "projets pharmacie",
    "portfolio pharmaceutique",
    "réalisations tech pharmacie",
  ],
  canonical: "/projets",
})

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <HeaderProjects />
      <ProjectsGrid />
    </div>
  )
}
