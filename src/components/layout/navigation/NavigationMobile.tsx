/**
 * Mobile Navigation Component
 * OVERLAY CORRIGÉ : Ne couvre pas le header
 */

"use client"

import { Container } from "@/components/layout"
import { Button } from "@/components/ui"
import { MAIN_NAVIGATION } from "@/lib/constants/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface NavigationMobileProps {
  isMobileMenuOpen: boolean
  onToggle: () => void
}

export function NavigationMobile({
  isMobileMenuOpen,
  onToggle,
}: NavigationMobileProps) {
  return (
    <>
      {/* Menu Burger Mobile EXACTEMENT comme avant */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={onToggle}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Mobile Menu EXACTEMENT comme avant */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-0 left-0 z-40 border-b border-gray-200 bg-white shadow-lg md:hidden"
          >
            <Container padding="md">
              <nav className="space-y-4 py-6">
                {MAIN_NAVIGATION.map(item => (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="block py-3 text-lg text-gray-700 no-underline hover:text-blue-600"
                      onClick={onToggle}
                    >
                      {item.label}
                    </Link>
                    <div className="absolute right-0 -bottom-1 left-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                ))}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <Button variant="secondary" className="w-full">
                    Connexion
                  </Button>
                  <Button className="w-full">Contact</Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay CORRIGÉ : Ne couvre que SOUS le header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 right-0 bottom-0 left-0 z-30 bg-black/20 md:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>
    </>
  )
}
