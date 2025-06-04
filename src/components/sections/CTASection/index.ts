/**
 * CTASection Components
 * Décomposition modulaire de la section CTA
 */

export { CTAContent } from "./CTAContent"
export { CTAForm } from "./CTAForm"
export { CTAGuarantees } from "./CTAGuarantees"

// Export compound pour facilité d'usage
import { CTAContent } from "./CTAContent"
import { CTAForm } from "./CTAForm"
import { CTAGuarantees } from "./CTAGuarantees"

export const CTAComponents = {
  Content: CTAContent,
  Form: CTAForm,
  Guarantees: CTAGuarantees,
}
