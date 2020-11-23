<template>
  <div>
    <video v-if="imageType(project, func) === 'webm'"
           :src="getImage(project, func)"
           :style="{ backgroundImage: `url(${fallbackImage})` }"
           autoplay muted loop/>
    <img v-else
         :src="getImage(project, func)"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { hasImage, getImage, imageType } from "@/functions/images"

export default Vue.extend({
  props: [ 'project', 'func' ],
  computed: {
    fallbackImage() { return getImage(this.project, this.func, true) }
  },
  methods: { hasImage, getImage, imageType },
})
</script>

<style scoped>
* {
  display: block;
  border-radius: inherit;
}

video {
  background-size: cover;
}
</style>
