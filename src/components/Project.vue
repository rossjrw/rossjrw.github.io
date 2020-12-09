<template>
  <div class="px-6 relative"
       :class="[
                project.size === 'big' ? 'py-8' : 'py-4',
                project.size === 'small' ?
                  'col-span-1 rounded-lg shadow-lg mx-8' :
                  'col-span-2',
                project.size === 'small' && hasImage(project, 'oblique') ?
                  'mt-48' : '',
                side === 'left' ? 'justify-self-end' : '',
                side === 'right' ? 'justify-self-start' : ''
               ]"
       :style="{ backgroundImage: projectBackground }">
    <div class="w-full h-72 relative z-0 -mt-56 -mb-16"
         v-if="project.size === 'small' && hasImage(project, 'oblique')">
      <ProjectMedia :project='project'
                    :func="'oblique'"
                    class="filter-desat"/>
    </div>
    <div class="container flex items-center justify-center mx-auto
                relative z-10
                flex-wrap lg:flex-nowrap"
         :class="project.size === 'small' ? 'flex-col max-w-text' : ''">
      <div class="p-0 my-2 flex-initial flex-shrink-1 md:flex-shrink-0"
           :class="project.size === 'big' ? 'w-big' : 'w-72'"
           v-if="hasImage(project, 'main')">
        <ProjectMedia :project="project"
                      :func="'main'"
                      class="rounded-lg shadow-lg"/>
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
                      project.size === 'normal' && 'back' in project ||
                      project.size === 'small' && hasImage(project, 'oblique')
                        ? 'bg-white rounded-lg shadow-lg p-6' : 'p-3',
                      project.size === 'big' && project.fore === 'light' ?
                        'text-gray-100' : ''
                     ]">
          <div class="flex items-center"
               :class="{ big:'mb-4', normal:'mb-2', small:'' }[project.size]">
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
          <div class="oldstyle-nums space-y-2"
               :class="[
                        project.tech.includes('Fiction') ? 'font-serif' : '',
                        project.size === 'small' ? '' : 'max-w-text text-xl'
                       ]"
               v-html="description"/>
        </div>
        <div class="hidden md:flex flex-wrap items-center"
             :class="project.size === 'big' ? 'mt-6' : 'mt-2'">
          <p class="whitespace-nowrap rounded-full bg-white
                    pl-2 pr-3 pb-0.5 mx-1.5 my-1"
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
import Vue, { PropType } from "vue"
import marked from "marked"

import PolyBullet from "@/components/PolyBullet.vue"
import ProjectMedia from "@/components/ProjectMedia.vue"
import { hasImage, getImage } from "@/functions/images"
import { techColour } from "@/functions/techColours"
import { gradientMesh } from "@/functions/gradientMesh"
import { Project, Technology } from "@/types"

export default Vue.extend({
  name: "Project",
  props: {
    "project": Object as PropType<Project>,
    "side": String as PropType<'left' | 'right' | null>
  },
  components: { PolyBullet, ProjectMedia },
  computed: {
    colouredTech(): unknown {
      return this.project.tech.map((tech: Technology) => {
        return { name: tech, colour: techColour(tech) }
      })
    },
    prettyDate(): string {
      let date = (
        this.project.date as number[][]
      ).map(date => date.join("–")).join(", ")
      if (this.project.tags.includes("working")) date += "–"
      return date
    },
    projectBackground(): string {
      let colours = this.project.back
      if (!colours) colours = [
        [250, 250, 250],
        [245, 245, 245],
        [240, 240, 240],
        [200, 200, 200],
      ]
      let background = gradientMesh(colours)
      if (this.hasImage(this.project, 'back')) {
        background += `, url(${this.getImage(this.project, 'back')})`
      }
      return background
    },
    description(): string {
      return marked(this.project.desc)
    },
  },
  methods: { hasImage, getImage },
})
</script>
