/**
 * Navigation configuration for Phardev
 */

import type { NavigationItem } from '@/types/components'

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Projets',
    href: '/projets',
  },
  {
    label: 'Équipe',
    href: '/equipe',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: 'À propos', href: '/about' },
    { label: 'Équipe', href: '/equipe' },
    { label: 'Carrières', href: '/carrieres' },
  ],
  services: [
    { label: 'Développement Web', href: '/services/web' },
    { label: 'Applications Mobiles', href: '/services/mobile' },
    { label: 'Solutions IA', href: '/services/ia' },
    { label: 'IoT & Analytics', href: '/services/iot' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/legal' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'CGU', href: '/terms' },
  ],
} as const