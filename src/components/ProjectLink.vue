<template>
  <a class="group flex items-center relative whitespace-nowrap h-12
            hover:text-white"
     :class="fore === 'light' ? 'text-gray-100' : 'text-gray-700'"
     :key="link.href"
     :href="link.href">
    <div class="rounded-full shadow-md w-12 h-12 z-0
                flex justify-start items-center
                absolute inset-y-0 left-0
                text-blue-700 group-hover:text-white
                bg-gradient-to-r from-white to-white
                transform transition-all duration-500 group-hover:duration-200
                ease-out group-hover:ease-in
                group-hover:w-full group-hover:right-0"
          :class="linkGradient()">
      <FontAwesomeIcon :icon="linkIcon()"
                       size="lg"
                       class="transform transition-all translate-x-3.5
                              group-hover:translate-x-6"/>
    </div>
    <div class="relative pl-14 z-10 pr-5
                text-3xl font-extrabold tracking-tight
                text-opacity-80 group-hover:text-opacity-100">
      {{link.name}}
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { ProjectLink } from "@/types"

export default Vue.extend({
  name: "ProjectLink",
  props: [ "link", "fore" ],
  components: { FontAwesomeIcon },
  methods: {
    linkGradient (this: { link: ProjectLink }): string {
      if (!('colour' in this.link) ){
        return 'group-hover:from-pink-600 group-hover:to-indigo-600'
      }
      if (this.link.href.includes("docs.google.com/document")) {
        return 'group-hover:from-blue-500 group-hover:to-indigo-600'
      }
      if (this.link.href.includes("docs.google.com/spreadsheets")) {
        return 'group-hover:from-green-500 group-hover:to-green-600'
      }
      if (this.link.href.includes("github.com")) {
        return 'group-hover:from-gray-500 group-hover:to-gray-700'
      }
    },
    linkIcon (this: { link: ProjectLink }): [string, string] {
      if (this.link.href.includes("github.com")) {
        return ["fab", "github"]
      }
      if (this.link.href.includes("docs.google.com")) {
        return ["fab", "google-drive"]
      }
      if (this.link.href.includes("pypi.org")) {
        return ["fab", "python"]
      }
      return ["fas", "arrow-right"]
    }
  },
})
</script>
