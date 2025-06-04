/**
 * Button Component Examples & Tests
 * Pour tester toutes les variantes et états
 */

import { ArrowRight, Download, Heart, Settings } from "lucide-react"
import { Button } from "./forms"

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Variantes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Variantes</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Tailles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Tailles</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Avec icônes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Avec Icônes</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<Heart className="h-4 w-4" />}>Favorite</Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
            Continue
          </Button>
          <Button
            variant="secondary"
            leftIcon={<Download className="h-4 w-4" />}
          >
            Download
          </Button>
        </div>
      </div>

      {/* États */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">États</h3>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading...</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" loading>
            Processing
          </Button>
        </div>
      </div>

      {/* Actions complexes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            leftIcon={<Settings className="h-5 w-5" />}
            onClick={() => alert("Settings clicked!")}
          >
            Open Settings
          </Button>
          <Button
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
            onClick={() => alert("Next step!")}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}
