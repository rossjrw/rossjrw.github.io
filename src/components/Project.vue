<template>
  <div class="project"
       :style="{ backgroundImage: gradientMesh }">
    <div class="project-item project-img-main card"
         v-if="hasImage('main')">
      <img :src="getImage(project.image, 'main').default"/>
    </div>
    <div class="project-item project-img-mobile card"
         v-if="hasImage('mobile')">
      <img :src="getImage(project.image, 'mobile').default"/>
    </div>
    <div class="project-item project-info">
      <div class="card">
        <div class="card-content">
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
          <div class="project-desc content"
               v-html="description"/>
        </div>
      </div>
    </div>
    <div class="project-item project-meta">
      <div class="project-tech">
        <p v-for="(tech, index) in colouredTech"
           :key="tech.name">
          <span class="icon">
            <PolyBullet :shape="index + 3"
                        :colour="tech.colour"/>
          </span>
          {{tech.name}}
        </p>
      </div>
      <div class="project-link">
        <a v-for="link in project.link"
           :key="link.href"
           class="button is-rounded is-link is-inverted"
           :href="link.href">
          {{link.name}}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import marked from "marked"

import PolyBullet from '@/components/PolyBullet.vue'
import { techColour } from '@/functions/techColours'
import { gradientMesh } from '@/functions/gradientMesh'

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
    gradientMesh() {
      let colours = this.project.back
      if (!colours) colours = [
        new Array(3).fill(250),
        new Array(3).fill(245),
        new Array(3).fill(240),
        new Array(3).fill(200),
      ]
      return gradientMesh(colours)
    },
    description() {
      return marked(this.project.desc)
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
.project {
  display: flex;
  align-items: center;
  margin: 4rem 0;
  padding: 1rem 4rem;
}

.project-img-main {
  flex: 0 1 18rem;
}
.project-img-mobile {
  flex: 0 1 9rem;
}
.project-info, .project-meta {
  flex: 1 1 0;
}

.project-item {
  margin-left: 2rem;
}
.project-img-mobile {
  margin-left: 1rem;
}

.project-img-main img, .project-img-mobile img {
  /* Remove sliver of whitespace below image */
  display: block;
}
</style>
