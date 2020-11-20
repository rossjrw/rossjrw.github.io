<template>
  <div class="project"
       :style="{ backgroundImage: projectBackground }">
    <div class="project-container container">
      <div class="project-item project-img-main card"
           v-if="hasImage('main')">
        <img :src="getImage(project.images, 'main')"/>
      </div>
      <div class="project-item project-img-mobile card"
           v-if="hasImage('mobile')">
        <img :src="getImage(project.images, 'mobile')"/>
      </div>
      <div class="project-item project-info">
        <div class="card">
          <div class="card-content">
            <div class="project-name has-text-centered">
              <img :src="getImage(project.images, 'logo')"
                   :alt="project.name"
                   v-if="hasImage('logo')"/>
              <p class="title"
                 v-else>
                {{project.name}}
              </p>
            </div>
            <div class="project-date has-text-centered">
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
        <div class="project-tech card is-inset mb-3">
          <div class="card-content">
            <p v-for="(tech, index) in colouredTech"
               :key="tech.name">
              <span class="icon">
                <PolyBullet :shape="index + 3"
                            :colour="tech.colour"/>
              </span>
              {{tech.name}}
            </p>
          </div>
        </div>
        <div class="project-links buttons">
          <a v-for="link in project.links"
             :key="link.href"
             class="button is-rounded is-link is-inverted"
             :href="link.href">
            {{link.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import marked from "marked"

import PolyBullet from "@/components/PolyBullet.vue"
import { techColour } from "@/functions/techColours"
import { gradientMesh } from "@/functions/gradientMesh"
import { ProjectImage, ProjectImageType } from "@/types"

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
    projectBackground() {
      let colours = this.project.back
      if (!colours) colours = [
        new Array(3).fill(250),
        new Array(3).fill(245),
        new Array(3).fill(240),
        new Array(3).fill(200),
      ]
      let background = gradientMesh(colours)
      if (this.hasImage('back')) {
        background += `, url(${this.getImage(this.project.images, 'back')})`
      }
      console.log(background)
      return background
    },
    description() {
      return marked(this.project.desc)
    },
  },
  methods: {
    hasImage(type: ProjectImageType) {
      return 'images' in this.project && this.project.images.some(
        image => image.type === type
      )
    },
    getImage(images: ProjectImage[], type: ProjectImageType) {
      const url = images.filter(image => image.type === type)[0].href
      return require('@/assets/projects/' + url)
    },
  },
})
</script>

<style>
.card {
  border-radius: 0.5rem;
}

.project {
  margin: 4rem 0;
  padding: 0.5rem 4rem;
}

.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
}

.project-img-main {
  flex: 0 1 18rem;
  min-width: 12rem;
}
.project-img-mobile {
  flex: 0 1 9rem;
}
.project-info {
  flex: 1 1 0;
  max-width: 50rem;
}
.project-meta {
  flex: 0 1 0;
  min-width: 12rem;
}

.project-item {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
}
.project-img-mobile {
  margin-left: 1rem;
}

/* Limit the range of logo sizes */
.project-name {
  min-height: 2rem;
}
.project-name img {
  max-height: 8rem;
  max-width: min(18rem, 100%);
}

.project-img-main img, .project-img-mobile img {
  /* Remove sliver of whitespace below image */
  display: block;
}

.project-meta .card {
  background-color: rgba(255, 255, 255, 0.9);
}

.project-links.buttons {
  /* Already has flex from Bulma */
  justify-content: center;
}

@media only screen and (max-width: 75rem) {
  .project-img-mobile {
    display: none;
  }
}
@media only screen and (max-width: 60rem) {
  .project-container {
    flex-wrap: wrap;
  }
  .project-info {
    order: -1;
    width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
  .project-info .card {
    max-width: 80%;
  }
}

@media only screen and (max-width: 45rem) {
  .project {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
