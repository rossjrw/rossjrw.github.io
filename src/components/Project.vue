<template>
  <div class="my-16 py-4 md:py-2 px-6"
       :style="{ backgroundImage: projectBackground }">
    <div class="container flex items-center justify-center mx-auto
                flex-wrap lg:flex-nowrap">
      <div class="p-0 my-2 flex-initial w-72
                  flex-shrink-1 md:flex-shrink-0"
           v-if="hasImage(project, 'main')">
        <ProjectMedia :project="project"
                      :func="'main'"/>
      </div>
      <div class="ml-4 flex-initial w-36
                  hidden xl:block flex-shrink-1 md:flex-shrink-0"
           v-if="hasImage(project, 'mobile')">
        <img class="block rounded-lg shadow-lg"
             :src="getImage(project, 'mobile')"/>
      </div>
      <div class="my-2 md:ml-8 flex-1 max-w-4xl
                  order-first basis-full flex justify-center
                  lg:order-none lg:basis-none lg:block">
        <div class="card">
          <img class="max-w-xs max-h-32 min-h-8 mx-auto"
               :src="getImage(project, 'logo')"
               :alt="project.name"
               v-if="hasImage(project, 'logo')"/>
          <p class="text-3xl font-semibold text-center"
             v-else>
            {{project.name}}
          </p>
          <p class="text-xl text-center">
            {{prettyDate}}
          </p>
          <div v-html="description"/>
        </div>
      </div>
      <div class="my-2 md:ml-8 flex-initial w-full md:w-48">
        <div class="card bg-opacity-90 is-inset mb-3 hidden md:block">
          <p class="whitespace-nowrap -ml-2"
             v-for="(tech, index) in colouredTech"
             :key="tech.name">
            <span class="w-6 h-6 inline-flex justify-center items-center">
              <PolyBullet :shape="index + 3"
                          :colour="tech.colour"
                          :hasStroke="false"/>
            </span>
            {{tech.name}}
          </p>
        </div>
        <div class="flex justify-center">
          <a v-for="link in project.links"
             :key="link.href"
             class="rounded-full px-5 py-2 m-1 shadow-md z-0
                    bg-gradient-to-r from-white to-white
                    text-blue-700 whitespace-nowrap
                    transform transition-all
                    hover:text-white hover:scale-125 hover:z-10"
             :class="[
                      !('colour' in link) ?
                      'hover:from-pink-600 hover:to-indigo-600' : null,
                      link.colour === 'blue' ?
                      'hover:from-blue-500 hover:to-indigo-600' : null,
                      link.colour === 'green' ?
                      'hover:from-green-500 hover:to-green-600' : null,
                      link.colour === 'black' ?
                      'hover:from-gray-500 hover:to-gray-700' : null,
                     ]"
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
import ProjectMedia from "@/components/ProjectMedia.vue"
import { hasImage, getImage } from "@/functions/images"
import { techColour } from "@/functions/techColours"
import { gradientMesh } from "@/functions/gradientMesh"
import { Technology } from "@/types"

export default Vue.extend({
  name: "Project",
  props: ["project"],
  components: { PolyBullet, ProjectMedia },
  computed: {
    colouredTech() {
      return this.project.tech.map((tech: Technology) => {
        return { name: tech, colour: techColour(tech) }
      })
    },
    prettyDate() {
      let date = (
        this.project.date as number[][]
      ).map(date => date.join("–")).join(", ")
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
      if (this.hasImage(this.project, 'back')) {
        background += `, url(${this.getImage(this.project, 'back')})`
      }
      return background
    },
    description() {
      return marked(this.project.desc)
    },
  },
  methods: { hasImage, getImage },
})
</script>

<style>
.card {
  @apply bg-white;
  @apply shadow-lg;
  @apply rounded-lg;
  @apply p-6;
}
</style>
