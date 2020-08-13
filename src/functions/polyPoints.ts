import { range } from "lodash"

import { Shape } from '@/types'

export function polyPoints (
  shape: Shape,
): string {
  /**
   * Takes a shape count and converts to polygon coordinates, relative to a
   * 100x100 viewBox.
   */
  const size = 100
  const points: [number, number][] = range(0, parseInt(shape)).map(
    index => {
      const angle = index * 2 * Math.PI / parseInt(shape)
      return [
        Math.cos(angle) * size/2 + size/2,
        Math.sin(angle) * size/2 + size/2,
      ]
    }
  )
  return polystring(points)
}

function polystring (
  points: [number, number][],
): string {
  return points.map(point => point.join(",")).join(" ")
}
