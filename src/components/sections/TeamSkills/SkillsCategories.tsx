"use client"

import { Grid } from "@/components/layout"
import { SkillCategory } from "@/components/sections"
import { motion } from "framer-motion"
import { Brain, Cloud, Laptop, Smartphone } from "lucide-react"

interface TechCategory {
  title: string
  icon: typeof Laptop
  skills: string[]
}

/**
 * Skills Categories Component - Technologies maîtrisées par l'équipe
 * Responsabilité : Affichage grid des catégories tech avec animations
 */
export function SkillsCategories() {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend Excellence",
      icon: Laptop,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="md">
        {techCategories.map(category => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </Grid>
    </motion.div>
  )
}
