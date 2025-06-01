"use client"

import { Container } from "@/components/layout"
import { Button, Link } from "@/components/ui"
import { MAIN_NAVIGATION } from "@/lib/constants/navigation"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Header Navigation Premium Phardev
 * Header fixe avec glassmorphism et navigation responsive
 */

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Effet scroll pour glassmorphism dynamique
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fermer menu mobile si resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          // Header normal (desktop) ou fermé (mobile)
          !isMobileMenuOpen &&
            (isScrolled
              ? "backdrop-blur-glass shadow-glass border-b border-white/20 bg-white/80"
              : "bg-transparent"),
          // Header mobile ouvert - fond blanc pur
          isMobileMenuOpen && "border-b border-gray-200 bg-white shadow-lg",
          className
        )}
      >
        <Container size="xl" padding="md">
          <div className="flex h-16 items-center justify-between">
            {/* Logo avec underline animé SEULEMENT */}
            <div className="group relative">
              <Link
                href="/"
                className="flex items-center space-x-2 no-underline"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    <span className="text-lg font-bold text-white">P</span>
                  </div>
                  <span className="phardev-gradient-text text-xl font-bold">
                    Phardev
                  </span>
                </div>
              </Link>
              {/* Underline animé pour logo */}
              <div className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>

            {/* Navigation Desktop avec underline animé SEULEMENT */}
            <nav className="hidden items-center space-x-1 md:flex">
              {MAIN_NAVIGATION.map(item => (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="rounded-xl px-4 py-2 text-gray-700 no-underline transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                  {/* Underline animé pour chaque lien */}
                  <div className="absolute right-4 -bottom-1 left-4 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              ))}
            </nav>

            {/* CTA Desktop - Connexion en secondary */}
            <div className="hidden items-center space-x-3 md:flex">
              <Button variant="secondary" size="sm">
                Connexion
              </Button>
              <Button size="sm">Contact</Button>
            </div>

            {/* Menu Burger Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
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
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {/* Underline animé mobile aussi */}
                    <div className="absolute right-0 -bottom-1 left-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                ))}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  {/* Connexion en secondary sur mobile aussi */}
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

      {/* Overlay pour fermer menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export { Header }
export default Header
