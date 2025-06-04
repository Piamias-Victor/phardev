/**
 * UI Components exports
 * Centralizes all UI component exports for clean imports
 */

export { Button, type ButtonProps } from "./Button"
export {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  type CardProps,
} from "./Card"
export { Link, type LinkProps } from "./Link"
export { ProjectCard } from "./ProjectCard"
export { Heading, Text, type HeadingProps, type TextProps } from "./Typography"

// Modal compound components
export { Modal, ModalContent, ModalNavigation, ModalRoot } from "./Modal"

// SectionHeader compound components
export {
  SectionHeader,
  SectionHeaderBadge,
  SectionHeaderDescription,
  SectionHeaderRoot,
  SectionHeaderTitle,
} from "./SectionHeader"

// AnimatedGrid component
export { AnimatedGrid, type AnimatedGridProps } from "./AnimatedGrid"

// StatsDisplay component
export {
  StatsDisplay,
  type StatItem,
  type StatsDisplayProps,
} from "./StatsDisplay"

// CardWithIcon component
export { CardWithIcon, type CardWithIconProps } from "./CardWithIcon"

export const UI_COMPONENTS_READY = true
