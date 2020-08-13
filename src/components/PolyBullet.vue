<template>
  <svg class="poly-bullet"
       viewBox="0 0 100 100"
       preserveAspectRatio="none">
    <polygon :points="points"
             :fill="colour"/>
  </svg>
</template>

<script lang="ts">
import Vue from "vue"

import { polyPoints } from '@/functions/polyPoints'

export default Vue.extend({
  name: "PolyBullet",
  props: ["shape", "colour"],
  computed: {
    points() {
      return polyPoints(this.shape)
    }
  },
})
</script>

<style>
.poly-bullet {
  height: 50%;
}
</style>
