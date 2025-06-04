/**
 * Header Navigation Premium Phardev - MOBILE FIXÉ
 * Header mobile TOUJOURS blanc, même quand menu ouvert
 */

"use client"

import {
  Container,
  NavigationDesktop,
  NavigationMobile,
} from "@/components/layout"
import { useNavigation } from "@/lib/hooks/useNavigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu } = useNavigation()

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          // MOBILE : TOUJOURS blanc avec shadow (menu ouvert OU fermé)
          "border-b border-gray-200 bg-white shadow-lg",
          // DESKTOP : glassmorphism conditionnel (surcharge mobile)
          !isMobileMenuOpen && [
            "md:border-0 md:shadow-none", // Reset mobile styles sur desktop
            isScrolled
              ? "md:backdrop-blur-glass md:shadow-glass md:border-b md:border-white/20 md:bg-white/80"
              : "md:border-0 md:bg-transparent",
          ],
          // ❌ SUPPRIMÉ : isMobileMenuOpen && "border-b border-gray-200 bg-white shadow-lg"
          // Car mobile doit TOUJOURS être blanc
          className
        )}
      >
        <Container size="xl" padding="md">
          <div className="flex h-16 items-center justify-between">
            {/* Composant NavigationDesktop contient logo + nav + boutons */}
            <NavigationDesktop />

            {/* Composant NavigationMobile contient burger + menu + overlay */}
            <NavigationMobile
              isMobileMenuOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
          </div>
        </Container>
      </motion.header>
    </>
  )
}

export default Header
