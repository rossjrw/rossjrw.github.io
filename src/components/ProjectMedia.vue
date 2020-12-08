<template>
  <div class="relative overflow-hidden">
    <div :class="aspectRatio"/>
    <video v-if="imageType(project, func) === 'webm'"
           class="absolute inset-0 bg-cover w-full h-full"
           :src="getImage(project, func)"
           :style="{ backgroundImage: `url(${fallbackImage})` }"
           autoplay muted loop controls/>
    <img v-else
         class="absolute inset-0"
         :src="getImage(project, func)"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { hasImage, getImage, imageType } from "@/functions/images"

export default Vue.extend({
  props: [ 'project', 'func' ],
  computed: {
    fallbackImage () { return getImage(this.project, this.func, true) },
    aspectRatio () {
      if (this.func === "main") {
        return "aspect-ratio-1/1"
      } else if (this.func === "mobile") {
        return "aspect-ratio-1/2"
      }
      return "aspect-ratio-none"
    }
  },
  methods: { hasImage, getImage, imageType },
})
</script>
