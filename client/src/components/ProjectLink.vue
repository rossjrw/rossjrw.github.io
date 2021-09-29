<template>
  <a
    class="
      group
      flex
      items-center
      relative
      whitespace-nowrap
      h-12
      transition-all
      duration-300
      hover:text-white
    "
    :class="fore === 'light' ? 'text-gray-100' : 'text-gray-700'"
    :key="link.href"
    :href="link.href"
  >
    <div
      class="
        rounded-full
        shadow-md
        flex
        justify-start
        items-center
        w-12
        group-hover:w-full
        absolute
        inset-y-0
        left-0
        h-12
        z-0
        bg-gradient-to-r
        from-white
        to-white
        transition-all
        duration-500
        group-hover:duration-200
        ease-out
        group-hover:ease-in
      "
      :class="linkGradient()"
    >
      <FontAwesomeIcon
        :icon="linkIcon()"
        size="lg"
        class="
          transform
          transition-all
          translate-x-3.5
          group-hover:translate-x-6
          text-blue-700
          group-hover:text-white
        "
      />
    </div>
    <div
      class="
        relative
        pl-14
        z-10
        pr-5
        text-3xl
        font-display font-extrabold
        tracking-tight
        link-line
        group-hover:no-underline
        text-opacity-80
        group-hover:text-opacity-100
      "
    >
      {{ link.name }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { ProjectLink } from "@/types"

export default defineComponent({
  name: "ProjectLink",
  props: {
    link: Object as PropType<ProjectLink>,
    fore: String as PropType<"light" | "dark" | undefined>,
  },
  components: { FontAwesomeIcon },
  methods: {
    linkGradient(this: { link: ProjectLink }): string {
      if (this.link.href.includes("docs.google.com/document")) {
        return "group-hover:from-blue-500 group-hover:to-indigo-600"
      }
      if (this.link.href.includes("docs.google.com/spreadsheets")) {
        return "group-hover:from-green-500 group-hover:to-green-600"
      }
      if (this.link.href.includes("github.com")) {
        return "group-hover:from-gray-500 group-hover:to-gray-700"
      }
      if (this.link.href.includes("linkedin.com")) {
        return "group-hover:from-blue-500 group-hover:to-blue-700"
      }
      return "group-hover:from-pink-600 group-hover:to-indigo-600"
    },
    linkIcon(this: { link: ProjectLink }): [string, string] {
      if (this.link.href.includes("github.com")) {
        return ["fab", "github"]
      }
      if (this.link.href.includes("docs.google.com")) {
        return ["fab", "google-drive"]
      }
      if (this.link.href.includes("pypi.org")) {
        return ["fab", "python"]
      }
      if (this.link.href.includes("linkedin.com")) {
        return ["fab", "linkedin-in"]
      }
      return ["fas", "arrow-right"]
    },
  },
})
</script>
