<template>
  <section>
    <div class="my-24">
      <h2
        class="
          text-5xl
          font-display font-bold
          text-center
          px-8
          tracking-tight
          flex
          justify-around
          items-center
        "
      >
        <span
          class="
            hidden
            md:block
            h-0
            flex-grow flex-shrink
            border-b-4 border-dotted border-current
            mx-16
            mt-2
          "
        />
        <span class="block">{{ title }}</span>
        <span
          class="
            hidden
            md:block
            h-0
            flex-grow flex-shrink
            border-b-4 border-dotted border-current
            mx-16
            mt-2
          "
        />
      </h2>
      <h3 class="text-xl font-display text-center mt-1 px-8 opacity-80">
        {{ subtitle }}
      </h3>
    </div>
    <div
      class="
        grid grid-cols-2
        gap-y-16
        grid-flow-row-dense
        justify-items-stretch
        items-start
        my-24
      "
    >
      <Project
        v-for="(project, projectId) in selectedProjects"
        :key="projectId"
        :project="project"
        :side="projectSide(projectId)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

import { projects } from "@/projects"
import Project from "@/components/Project.vue"
import { Project as ProjectType, Tag } from "@/types"

export default Vue.extend({
  name: "ProjectList",
  components: { Project },
  props: {
    title: String as PropType<string>,
    subtitle: String as PropType<string>,
    filterByTag: String as PropType<Tag>,
  },
  computed: {
    selectedProjects: {
      get(): ProjectType[] {
        return projects
          .filter((project) => {
            return project.tags.includes(this.filterByTag)
          })
          .sort((a, b) => b.interestingness - a.interestingness)
      },
    },
  },
  methods: {
    projectSide(projectId: number): "left" | "right" | null {
      // If this is a small project, which side of the screen should it be on?
      if (this.selectedProjects[projectId].size !== "small") {
        return null
      }
      if (
        this.selectedProjects
          .slice(0, projectId + 1)
          .reduce((sum, project) => {
            if (project.size === "small") return sum + 1
            return sum + 2
          }, 0) %
          2 ===
        0
      )
        return "right"
      return "left"
    },
  },
})
</script>
