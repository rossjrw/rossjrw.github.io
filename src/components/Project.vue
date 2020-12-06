<template>
  <div class="my-16 py-4 px-6"
       :class="project.size === 'big' ? 'py-8' : 'py-4'"
       :style="{ backgroundImage: projectBackground }">
    <div class="container flex items-center justify-center mx-auto
                flex-wrap lg:flex-nowrap">
      <div class="p-0 my-2 flex-initial flex-shrink-1 md:flex-shrink-0"
           :class="project.size === 'big' ? 'w-big' : 'w-72'"
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
      <div class="my-2 order-first basis-none flex justify-center flex-col
                  md:ml-8 lg:order-none">
        <div :class="[
                      project.size === 'normal' && 'back' in project ?
                        'bg-white rounded-lg shadow-lg p-6' : 'p-3',
                      project.size === 'big' && project.fore === 'light' ?
                        'text-gray-100' : ''
                     ]">
          <div class="flex items-center"
               :class="project.size === 'big' ? 'mb-4' : 'mb-2'">
            <img v-if="hasImage(project, 'logo')"
                 class="max-h-32 min-h-8"
                 :class="project.size === 'big' ? 'max-w-sm' : 'max-w-xs'"
                 :src="getImage(project, 'logo')"
                 :alt="project.name"/>
            <p v-else
               class="text-4xl font-bold text-center lining-nums">
              {{project.name}}
            </p>
            <p class="text-xl text-center lining-nums ml-4 opacity-80 -mb-2">
              {{prettyDate}}
            </p>
          </div>
          <div class="max-w-text oldstyle-nums space-y-2 text-xl"
               :class="project.tech.includes('Fiction') ? 'font-serif' : ''"
               v-html="description"/>
        </div>
        <div class="hidden md:flex space-x-3 ml-2"
             :class="project.size === 'big' ? 'mt-8' : 'mt-4'">
          <p class="whitespace-nowrap rounded-full bg-white pl-2 pr-3 pb-0.5"
             v-for="(tech, index) in colouredTech"
             :key="tech.name">
            <span class="w-4 h-6 inline-flex justify-center items-center">
              <PolyBullet :shape="index + 3"
                          :colour="tech.colour"
                          :hasStroke="true"/>
            </span>
              {{tech.name}}
          </p>
        </div>
      </div>
      <div class="my-2 md:ml-8 flex-initial w-full md:w-48">
        <div class="space-y-2 flex flex-col items-start">
          <a v-for="link in project.links"
             class="group flex items-center relative whitespace-nowrap h-12
                    text-blue-700 hover:text-white"
             :key="link.href"
             :href="link.href">
            <div class="rounded-full shadow-md w-12 h-12 z-0
                        flex justify-start items-center
                        absolute inset-y-0 left-0
                        bg-gradient-to-r from-white to-white
                        transform transition-all
                        group-hover:w-full group-hover:right-0"
                  :class="linkGradient(link)">
              <FontAwesomeIcon icon="arrow-right"
                               size="lg"
                               class="transform transition-all translate-x-3.5
                                      group-hover:translate-x-6"/>
            </div>
            <div class="relative pl-14 z-10 pr-5
                        text-3xl font-extrabold tracking-tight">
              {{link.name}}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import marked from "marked"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import PolyBullet from "@/components/PolyBullet.vue"
import ProjectMedia from "@/components/ProjectMedia.vue"
import { hasImage, getImage } from "@/functions/images"
import { techColour } from "@/functions/techColours"
import { gradientMesh } from "@/functions/gradientMesh"
import { Technology, ProjectLink } from "@/types"

export default Vue.extend({
  name: "Project",
  props: ["project"],
  components: { PolyBullet, ProjectMedia, FontAwesomeIcon },
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
  methods: {
    hasImage,
    getImage,
    linkGradient (link: ProjectLink): string {
      if (!('colour' in link) ){
        return 'group-hover:from-pink-600 group-hover:to-indigo-600'
      }
      if(link.colour === 'blue') {
        return 'group-hover:from-blue-500 group-hover:to-indigo-600'
      }
      if(link.colour === 'green') {
        return 'group-hover:from-green-500 group-hover:to-green-600'
      }
      if(link.colour === 'black') {
        return 'group-hover:from-gray-500 group-hover:to-gray-700'
      }
    }
  },
})
</script>
