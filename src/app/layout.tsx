import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { generateMetadata } from "@/lib/seo/metadata"
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo/schema"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// SEO Metadata optimisé
export const metadata: Metadata = generateMetadata({
  title: "Solutions Innovation Pharmaceutique",
  description:
    "Développement de solutions digitales innovantes pour pharmacies. L'alliance entre expertise métier et excellence technique.",
  keywords: [
    "pharmacie innovation",
    "solutions digitales pharmacie",
    "tech pharmaceutique",
    "IA pharmacie",
    "transformation digitale officine",
  ],
  canonical: "/",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema markup JSON-LD
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Viewport meta tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only z-50 bg-blue-600 p-4 text-white focus:not-sr-only focus:absolute focus:top-0 focus:left-0"
        >
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" className="pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
