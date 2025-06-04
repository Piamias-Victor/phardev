/**
 * SectionHeader Compound Component
 * Pattern réutilisable pour headers de sections
 */

export { SectionHeaderBadge } from "./SectionHeaderBadge"
export { SectionHeaderDescription } from "./SectionHeaderDescription"
export { SectionHeaderRoot } from "./SectionHeaderRoot"
export { SectionHeaderTitle } from "./SectionHeaderTitle"

// Export compound pour facilité d'usage
import { SectionHeaderBadge } from "./SectionHeaderBadge"
import { SectionHeaderDescription } from "./SectionHeaderDescription"
import { SectionHeaderRoot } from "./SectionHeaderRoot"
import { SectionHeaderTitle } from "./SectionHeaderTitle"

export const SectionHeader = {
  Root: SectionHeaderRoot,
  Badge: SectionHeaderBadge,
  Title: SectionHeaderTitle,
  Description: SectionHeaderDescription,
}
