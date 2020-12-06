<template>
  <div class="px-6"
       :class="[
                project.size === 'big' ? 'py-8' : 'py-4',
                project.size === 'small' ?
                  'col-span-1 rounded-lg shadow-lg m-4' :
                  'col-span-2'
               ]"
       :style="{ backgroundImage: projectBackground }">
    <div class="container flex items-center justify-center mx-auto
                flex-wrap lg:flex-nowrap"
         :class="project.size === 'small' ? 'flex-col' : ''">
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
            <h4 v-else
               class="text-4xl font-bold text-center lining-nums">
              {{project.name}}
            </h4>
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
                      'hover:from-pink-600 hover:to-indigo-600' : '',
                      link.colour === 'blue' ?
                      'hover:from-blue-500 hover:to-indigo-600' : '',
                      link.colour === 'green' ?
                      'hover:from-green-500 hover:to-green-600' : '',
                      link.colour === 'black' ?
                      'hover:from-gray-500 hover:to-gray-700' : '',
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
