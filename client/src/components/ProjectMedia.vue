<template>
  <div class="relative w-full h-full overflow-hidden">
    <div :class="aspectRatio"></div>
    <video
      v-if="imageType(project, func) === 'webm'"
      class="absolute inset-0 bg-cover w-full h-full"
      :src="getImage(project, func, false, false)"
      :style="{ backgroundImage: `url(${fallbackImage})` }"
      autoplay
      muted
      loop
      controls
    ></video>
    <SwipeImage
      v-else-if="hasImage(project, func, 2)"
      :project="project"
      :func="func"
      class="absolute inset-0 w-full h-full"
    ></SwipeImage>
    <img
      v-else
      class="absolute inset-0 w-full h-full object-contain"
      :src="getImage(project, func, false, false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import SwipeImage from "@/components/SwipeImage.vue"
import { hasImage, getImage, imageType } from "@/functions/images"
import { Project, ProjectImageFunc } from "@/types"

export default defineComponent({
  props: {
    project: Object as PropType<Project>,
    func: String as PropType<ProjectImageFunc>,
  },
  components: { SwipeImage },
  computed: {
    fallbackImage(): string | undefined {
      return getImage(this.project, this.func, true, false)
    },
    aspectRatio(): string {
      if (this.func === "main") {
        return "aspect-ratio-1/1"
      } else if (this.func === "mobile") {
        return "aspect-ratio-1/2"
      } else if (this.func === "oblique") {
        return "aspect-ratio-1/1"
      }
      return "aspect-ratio-none"
    },
  },
  methods: { hasImage, getImage, imageType },
})
</script>
