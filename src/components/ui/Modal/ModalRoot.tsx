"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"

interface ModalRootProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

/**
 * Modal Root Component - Gestion état et accessibility
 * Responsabilité : Overlay, animations, événements clavier
 */
export function ModalRoot({ isOpen, onClose, children }: ModalRootProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          {children}
        </div>
      )}
    </AnimatePresence>
  )
}
