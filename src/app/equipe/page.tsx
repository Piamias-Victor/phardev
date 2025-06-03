import { HeaderTeam, TeamProfiles, TeamSkills } from "@/components/sections"
import { generateMetadata } from "@/lib/seo/metadata"
import type { Metadata } from "next"

// SEO Metadata pour page équipe
export const metadata: Metadata = generateMetadata({
  title: "L'Équipe Innovation Phardev | Experts Tech Pharmaceutique",
  description:
    "Rencontrez notre équipe d'experts alliant connaissance du secteur pharmaceutique et maîtrise des technologies modernes.",
  keywords: [
    "équipe innovation pharmaceutique",
    "experts tech pharmacie",
    "développeurs spécialisés pharmacie",
  ],
  canonical: "/equipe",
})

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <HeaderTeam />
      <TeamProfiles />
      <TeamSkills />
    </div>
  )
}
