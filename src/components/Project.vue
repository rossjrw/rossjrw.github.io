<template>
  <div class="project">
    <div class="image"
         v-if="hasMainImage()">
      <img :src="getImgUrl(project.image, 'main').default"/>
    </div>
    <p v-for="(tech, index) in colouredTech"
       :key="tech.name">
    <span class="icon">
      <PolyBullet :shape="index + 3"
                  :colour="tech.colour"/>
    </span>
    {{tech.name}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import PolyBullet from '@/components/PolyBullet.vue'
import { techColour } from '@/functions/techColours'

export default Vue.extend({
  name: "Project",
  props: ["project"],
  components: {
    PolyBullet,
  },
  computed: {
    colouredTech() {
      return this.project.tech.map(tech => {
        return { name: tech, colour: techColour(tech) }
      })
    },
  },
  methods: {
    getImgUrl(image, type) {
      const url = image.filter(image => image.type === type)[0].href
      return require('@/assets/' + url)
    },
    hasMainImage() {
      return 'image' in this.project && this.project.image.some(
        image => image.type === "main"
      )
    },
  },
})
</script>
