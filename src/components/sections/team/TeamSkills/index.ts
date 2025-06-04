/**
 * TeamSkills Components
 * Décomposition modulaire des compétences équipe
 */

export { SkillsCategories } from "./SkillsCategories"
export { SkillsCertifications } from "./SkillsCertifications"
export { SkillsExpertise } from "./SkillsExpertise"
export { SkillsTimeline } from "./SkillsTimeline"

// Export compound pour facilité d'usage
import { SkillsCategories } from "./SkillsCategories"
import { SkillsCertifications } from "./SkillsCertifications"
import { SkillsExpertise } from "./SkillsExpertise"
import { SkillsTimeline } from "./SkillsTimeline"

export const TeamSkillsComponents = {
  Categories: SkillsCategories,
  Certifications: SkillsCertifications,
  Expertise: SkillsExpertise,
  Timeline: SkillsTimeline,
}
