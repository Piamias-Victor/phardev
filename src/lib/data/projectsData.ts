/**
 * Projects data for Phardev showcase
 * Separated from components for better maintainability
 */

import type { ProjectModalData } from "@/lib/hooks/useProjectModal"
import { BarChart3, Bot, Globe, ShoppingCart, Smartphone } from "lucide-react"

export const PROJECTS_DATA: ProjectModalData[] = [
  {
    id: 1,
    title: "Site Vitrine Pharmacie Premium",
    category: "Site Vitrine",
    description:
      "Site vitrine moderne avec système de réservation en ligne, catalogue produits interactif et optimisation SEO pour référencement local maximum.",
    technologies: ["Next.js", "Tailwind", "CMS", "TypeScript"],
    results: [
      { label: "Visibilité web", value: "+40%" },
      { label: "Nouveaux clients", value: "+25%" },
      { label: "Taux de conversion", value: "+35%" },
    ],
    timeline: "3 semaines",
    budget: "8-12k€",
    challenge:
      "La pharmacie souffrait d'une faible visibilité en ligne et perdait des clients face à la concurrence digitale. Le site existant était obsolète et non responsive.",
    solution:
      "Développement d'un site vitrine moderne avec Next.js, optimisé SEO, système de réservation intégré et catalogue produits interactif. Design responsive et performance optimisée.",
    impact:
      "Transformation complète de la présence digitale avec un site moderne qui attire et convertit les visiteurs en clients fidèles.",
    screenshots: [],
    icon: Globe,
    iconColor: "phardev-gradient-text",
    iconBg: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
  {
    id: 2,
    title: "E-commerce Pharmaceutique Complete",
    category: "E-commerce",
    description:
      "Plateforme e-commerce complète avec gestion stock temps réel, paiements sécurisés Stripe, conformité ANSM et interface administration avancée.",
    technologies: ["React", "Node.js", "Stripe", "API", "PostgreSQL"],
    results: [
      { label: "Ventes en ligne", value: "+200%" },
      { label: "Erreurs stock", value: "-50%" },
      { label: "Satisfaction client", value: "+60%" },
    ],
    timeline: "8 semaines",
    budget: "25-35k€",
    challenge:
      "Besoin urgent de ventes en ligne suite COVID, mais complexité réglementaire pharmaceutique et synchronisation stock physique/digital problématique.",
    solution:
      "Plateforme e-commerce sur mesure avec API temps réel, conformité ANSM intégrée, paiements sécurisés et dashboard admin complet pour gestion centralisée.",
    impact:
      "Révolution du modèle économique avec diversification des revenus et optimisation opérationnelle majeure.",
    screenshots: [],
    icon: ShoppingCart,
    iconColor: "phardev-gradient-text",
    iconBg: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
  {
    id: 3,
    title: "Armoire Connectée IoT",
    category: "Innovation IoT",
    description:
      "Système IoT intelligent avec capteurs température/humidité, alertes temps réel, traçabilité complète et dashboard analytics prédictifs.",
    technologies: ["IoT", "AWS", "React", "Sensors", "MQTT"],
    results: [
      { label: "Gaspillage médicaments", value: "-30%" },
      { label: "Traçabilité produits", value: "+60%" },
      { label: "Alertes automatiques", value: "100%" },
    ],
    timeline: "12 semaines",
    budget: "40-60k€",
    challenge:
      "Pertes importantes par gaspillage médicaments, traçabilité manuelle fastidieuse et risques de rupture stock non anticipés.",
    solution:
      "Armoire intelligente avec capteurs IoT, dashboard temps réel, alertes automatiques et machine learning pour prédiction des besoins.",
    impact:
      "Transformation digitale complète de la gestion stock avec économies substantielles et sécurité renforcée.",
    screenshots: [],
    icon: Smartphone,
    iconColor: "phardev-gradient-text",
    iconBg: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
  {
    id: 4,
    title: "Générateur Devis Intelligent IA",
    category: "Intelligence IA",
    description:
      "Solution IA pour génération automatique de devis personnalisés avec machine learning, intégration comptabilité et export PDF automatique.",
    technologies: ["Python", "OpenAI", "PDF", "ML", "FastAPI"],
    results: [
      { label: "Temps génération devis", value: "-80%" },
      { label: "Précision calculs", value: "+95%" },
      { label: "Satisfaction pharmaciens", value: "+70%" },
    ],
    timeline: "6 semaines",
    budget: "15-25k€",
    challenge:
      "Processus de devis manuel chronophage, erreurs de calcul fréquentes et perte de clients par lenteur de réponse commerciale.",
    solution:
      "IA générative pour devis automatiques, machine learning pour optimisation prix et intégration comptabilité pour workflow fluide.",
    impact:
      "Accélération drastique du processus commercial avec précision maximale et satisfaction client renforcée.",
    screenshots: [],
    icon: Bot,
    iconColor: "phardev-gradient-text",
    iconBg: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
  {
    id: 5,
    title: "Plateforme Analytics BI",
    category: "Analytics BI",
    description:
      "Dashboard business intelligence avec visualisations D3.js, machine learning prédictif et reporting automatique pour pilotage stratégique.",
    technologies: ["Python", "D3.js", "ML", "BI", "Apache"],
    results: [
      { label: "Insights business", value: "+300%" },
      { label: "Reporting manuel", value: "-70%" },
      { label: "Décisions data-driven", value: "+150%" },
    ],
    timeline: "16 semaines",
    budget: "50-80k€",
    challenge:
      "Données éparpillées sans vision globale, reporting manuel fastidieux et décisions business basées sur l'intuition plutôt que data.",
    solution:
      "Plateforme BI centralisée avec visualisations interactives, machine learning prédictif et reporting automatique pour pilotage éclairé.",
    impact:
      "Transformation en organisation data-driven avec insights actionnables et optimisation performance continue.",
    screenshots: [],
    icon: BarChart3,
    iconColor: "phardev-gradient-text",
    iconBg: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
]
