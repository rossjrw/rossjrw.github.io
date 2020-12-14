<template>
  <div class="relative col-span-2"
       :class="[
                project.size === 'big' ?
                  'p-8' :
                  projectBackground === 'none' ? 'p-2' : 'p-6',
                project.size === 'small' ?
                  'justify-self-center lg:col-span-1 lg:mx-8' : '',
                project.size === 'small' && hasImage(project, 'oblique') ?
                  'mt-48' : '',
                side === 'left' ? 'lg:justify-self-end' : '',
                side === 'right' ? 'lg:justify-self-start' : '',
                {
                 big: `3xl:max-w-screen-3xl 3xl:mx-4 3xl:justify-self-center
                       ${projectBackground === 'none'?
                         '' : '3xl:rounded-2xl 3xl:shadow-2xl'}`,
                 normal: `xl:max-w-screen-2xl xl:mx-4 xl:justify-self-center
                          ${projectBackground === 'none' ?
                            '' : 'xl:rounded-xl xl:shadow-xl'}`,
                 small: `${projectBackground === 'none'?
                           '' : 'rounded-lg shadow-lg'}`
                }[project.size]
               ]"
       :style="{ backgroundImage: projectBackground }">
    <div class="w-full h-72 relative z-0 -mt-56 -mb-16"
         v-if="project.size === 'small' && hasImage(project, 'oblique')">
      <ProjectMedia :project='project'
                    :func="'oblique'"
                    class="filter-desat"/>
    </div>
    <div class="container flex items-center justify-center mx-auto
                relative z-10"
         :class="project.size === 'small' ?
                   'flex-col space-y-2 max-w-prose' :
                   `space-y-4 lg:space-y-0 lg:space-x-8
                    flex-wrap lg:flex-nowrap`">
      <div class="flex space-x-4">
        <div class="flex-initial flex-shrink-1 md:flex-shrink-0"
             :class="project.size === 'big' ? 'w-big' : 'w-72'"
             v-if="hasImage(project, 'main')">
          <ProjectMedia :project="project"
                        :func="'main'"
                        class="rounded-lg shadow-lg"/>
        </div>
        <div class="flex-initial w-36
                    hidden xl:block flex-shrink-1 md:flex-shrink-0"
             v-if="hasImage(project, 'mobile')">
          <img class="block rounded-lg shadow-lg"
               :src="getImage(project, 'mobile')"/>
        </div>
      </div>
      <div class="basis-none flex justify-center flex-col"
           :class="project.size === 'big' ? 'space-y-6' : 'space-y-2'">
        <div :class="[
                      project.size === 'normal' && 'back' in project ||
                      project.size === 'small' && hasImage(project, 'oblique')
                        ? 'bg-white rounded-lg shadow-lg p-6' : 'p-2',
                      project.size === 'big' && project.fore === 'light' ?
                        'text-gray-100' : ''
                     ]">
          <div class="flex items-center"
               :class="project.size === 'big' ? 'mb-2' : 'mb-1'">
            <img v-if="hasImage(project, 'logo')"
                 class="max-h-32 min-h-8"
                 :class="project.size === 'big' ? 'max-w-sm' : 'max-w-xs'"
                 :src="getImage(project, 'logo')"
                 :alt="project.name"/>
            <h4 v-else
                class="text-4xl font-display font-bold">
              {{project.name}}
            </h4>
            <p class="text-xl font-display text-center ml-4 opacity-80 -mb-2">
              {{prettyDate}}
            </p>
          </div>
          <div class="inline-links space-y-2 max-w-text"
               :class="[
                        project.tech.includes('Fiction') ? 'font-serif' : '',
                        {
                          small: '', normal: 'text-lg', big: 'text-xl'
                        }[project.size]
                       ]"
               v-html="description"/>
        </div>
        <div class="flex flex-wrap items-center">
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
      <div class="flex-initial">
        <div class="space-y-2 flex flex-col items-start">
          <ProjectLink v-for="link in project.links"
                       :key="link.href"
                       :link="link"
                       :fore="project.fore"/>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 m-2 opacity-80 text-sm font-display"
         :class="[
                  attributionText ? '' : 'hidden',
                  project.fore === 'light' ? 'text-gray-100' : ''
                 ]"
         v-html="attributionText"/>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import marked from "marked"

import PolyBullet from "@/components/PolyBullet.vue"
import ProjectMedia from "@/components/ProjectMedia.vue"
import ProjectLink from "@/components/ProjectLink.vue"
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
  components: { PolyBullet, ProjectMedia, ProjectLink },
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
      if (
        this.project.size !== 'big' && !('back' in this.project) &&
        (this.project.size !== 'small' || !hasImage(this.project, 'oblique'))
      ) {
        return "none"
      }
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
      return marked(this.project.desc).replace(/--/g, "—")
    },
    attributionText(): string | null {
      if (!('images' in this.project)) return null
      const attributions = this.project.images.map(
        image => image.source
      ).filter(Boolean)
      if (attributions.length === 0) return null
      if (attributions.length === 1) {
        return `<p>
          <a class="link-line hover:no-underline font-extrabold tracking-tight"
             href="${attributions[0]}">
            Image attribution
          </a>
        </p>`
      }
      return `<p>
        Image attribution: ${
          attributions.map((link, index) => {
            return `
              <a class="link-line hover:no-underline font-extrabold"
                 href="${link}">
                ${index + 1}
              </a>
            `
          }).join(" · ")
        }
      </p>`
    }
  },
  methods: { hasImage, getImage },
})
</script>
