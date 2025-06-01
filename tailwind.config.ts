import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Phardev Officielle Blue-Purple Gradient Tech
        phardev: {
          primary: {
            50: "#eff6ff",
            100: "#dbeafe", 
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6", // Bleu iOS technologique
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554"
          },
          secondary: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe", 
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6", // Violet innovation
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065"
          },
          accent: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9", 
            400: "#22d3ee",
            500: "#06b6d4", // Cyan premium
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
            950: "#083344"
          },
          background: "#fcfcff", // Blanc ultra-pur
          foreground: "#0f172a"
        }
      },
      backgroundImage: {
        "gradient-phardev": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-phardev-soft": "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(252,252,255,0.95) 0%, rgba(248,250,252,0.9) 100%)"
      },
      backdropBlur: {
        xs: "2px",
        glass: "20px", 
        heavy: "40px"
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(59, 130, 246, 0.12)",
        "glass-lg": "0 20px 60px rgba(59, 130, 246, 0.15)", 
        "glass-phardev": "0 4px 16px rgba(59, 130, 246, 0.25)",
        "phardev": "0 10px 40px rgba(59, 130, 246, 0.2)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "glass-shine": "glassShine 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        glassShine: {
          "0%, 100%": { backgroundPosition: "-200% 0" },
          "50%": { backgroundPosition: "200% 0" }
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"]
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem"
      }
    },
  },
  plugins: [],
}

export default config