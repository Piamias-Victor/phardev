/**
 * UI Components exports - Nouvelle structure organisée
 * Centralizes all UI component exports for clean imports
 */

// Forms
export * from "./forms"

// Layout
export * from "./layout"

// Typography
export * from "./Typography"

// Feedback
export * from "./feedback"

// Compound Components (gardés à la racine ui/)
export { Modal, ModalContent, ModalNavigation, ModalRoot } from "./Modal"

export {
  SectionHeader,
  SectionHeaderBadge,
  SectionHeaderDescription,
  SectionHeaderRoot,
  SectionHeaderTitle,
} from "./SectionHeader"

export const UI_COMPONENTS_READY = true
