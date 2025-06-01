"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

/**
 * Grid Component Phardev
 * Grid system personnalisé avec breakpoints intelligents
 */

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: "none" | "sm" | "md" | "lg" | "xl"
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  }
  children: React.ReactNode
}

// Grid columns mapping
const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
}

// Responsive grid columns
const responsiveGridCols = {
  sm: {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    12: "sm:grid-cols-12",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    12: "md:grid-cols-12",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    12: "lg:grid-cols-12",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    12: "xl:grid-cols-12",
  },
}

// Gap variants
const gridGaps = {
  none: "gap-0",
  sm: "gap-4", // 16px
  md: "gap-6", // 24px
  lg: "gap-8", // 32px
  xl: "gap-12", // 48px
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { cols = 1, gap = "md", responsive, children, className, ...props },
    ref
  ) => {
    // Build responsive classes
    const responsiveClasses = responsive
      ? [
          responsive.sm && responsiveGridCols.sm[responsive.sm],
          responsive.md && responsiveGridCols.md[responsive.md],
          responsive.lg && responsiveGridCols.lg[responsive.lg],
          responsive.xl && responsiveGridCols.xl[responsive.xl],
        ].filter(Boolean)
      : []

    return (
      <div
        ref={ref}
        className={cn(
          // Base grid
          "grid",
          // Default columns
          gridCols[cols],
          // Gap
          gridGaps[gap],
          // Responsive columns
          ...responsiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = "Grid"

export { Grid, type GridProps }
export default Grid
