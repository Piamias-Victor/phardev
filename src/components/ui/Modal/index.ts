/**
 * Modal Compound Components
 * Composition modulaire pour modales complexes
 */

export { ModalContent } from "./ModalContent"
export { ModalNavigation } from "./ModalNavigation"
export { ModalRoot } from "./ModalRoot"

// Export compound pour facilité d'usage
import { ModalContent } from "./ModalContent"
import { ModalNavigation } from "./ModalNavigation"
import { ModalRoot } from "./ModalRoot"

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Navigation: ModalNavigation,
}
