<template>
  <svg class="h-4 relative top-0.5"
       viewBox="0 0 100 100"
       preserveAspectRatio="none">
    <polygon :points="points"
             :fill="colour"
             style="paint-order: stroke"
             :stroke="hasStroke ? 'white' : undefined"
             stroke-width="20"
             stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { range } from "lodash"

import { TechnologyColours } from "@/types"

const SVG_SIZE = 100
const BORDER_WIDTH = 10

export default Vue.extend({
  name: "PolyBullet",
  props: {
    "shape": Number as PropType<number>,
    "colour": String as PropType<TechnologyColours[keyof TechnologyColours]>,
    "hasStroke": Boolean as PropType<boolean>,
  },
  computed: {
    points(): string {
      return polyPoints(this.shape)
    }
  },
})

function polyPoints (shape: number): string {
  /**
   * Takes a shape count and converts to polygon coordinates, relative to a
   * 100x100 viewBox.
   */
  const points: [number, number][] = range(0, shape).map(index => {
    const angle = index * 2 * Math.PI / shape - Math.PI / 2
    return [
      Math.cos(angle) * (SVG_SIZE/2 - BORDER_WIDTH) + SVG_SIZE/2,
      Math.sin(angle) * (SVG_SIZE/2 - BORDER_WIDTH) + SVG_SIZE/2,
    ]
  })
  return polystring(points)
}

function polystring (points: [number, number][]): string {
  return points.map(point => point.join(",")).join(" ")
}
</script>
