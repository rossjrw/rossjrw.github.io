<template>
  <div>
    <video v-if="imageType(project, func) === 'webm'"
           class="rounded-lg shadow-lg bg-cover"
           :src="getImage(project, func)"
           :style="{ backgroundImage: `url(${fallbackImage})` }"
           autoplay muted loop controls/>
    <img v-else
         class="rounded-lg shadow-lg"
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
