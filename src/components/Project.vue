<template>
  <div class="project">
    <div class="project-image-main"
         v-if="hasImage('main')">
      <img :src="getImage(project.image, 'main').default"/>
    </div>
    <div class="project-image-mobile"
         v-if="hasImage('mobile')">
      <img :src="getImage(project.image, 'mobile').default"/>
    </div>
    <div class="project-name">
      <p class="title">
      {{project.name}}
      </p>
    </div>
    <div class="project-date">
      <p class="subtitle">
      {{prettyDate}}
      </p>
    </div>
    <div class="project-desc">
      <p class="content">
      {{project.desc}}
      </p>
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
    prettyDate() {
      let date = this.project.date.map(date => date.join("–")).join(", ")
      if (this.project.tags.includes("working")) date += "–"
      return date
    },
  },
  methods: {
    hasImage(type) {
      return 'image' in this.project && this.project.image.some(
        image => image.type === type
      )
    },
    getImage(image, type) {
      const url = image.filter(image => image.type === type)[0].href
      return require('@/assets/' + url)
    },
  },
})
</script>

<style>

</style>
