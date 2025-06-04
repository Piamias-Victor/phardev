/**
 * Desktop Navigation Component
 * Extraction pure du code original sans modification
 */

"use client"

import { Button } from "@/components/ui"
import { MAIN_NAVIGATION } from "@/lib/constants/navigation"
import Link from "next/link"

export function NavigationDesktop() {
  return (
    <>
      {/* Logo avec underline animé EXACTEMENT comme avant */}
      <div className="group relative">
        <Link href="/" className="flex items-center space-x-2 no-underline">
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

      {/* Navigation Desktop avec underline animé EXACTEMENT comme avant */}
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

      {/* CTA Desktop - Connexion en secondary EXACTEMENT comme avant */}
      <div className="hidden items-center space-x-3 md:flex">
        <Button variant="secondary" size="sm">
          Connexion
        </Button>
        <Button size="sm">Contact</Button>
      </div>
    </>
  )
}
