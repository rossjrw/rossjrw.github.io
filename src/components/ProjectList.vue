<template>
  <section>
    <h2 class="text-5xl font-semibold text-center px-8">
      {{title}}
    </h2>
    <h3 class="text-xl text-center mt-1 px-8">
      {{subtitle}}
    </h3>
    <div class="grid grid-cols-2 items-start gap-y-16 grid-flow-row-dense
                my-16">
      <Project v-for="(project, projectId) in selectedProjects"
               :key="projectId"
               :project="project"
               :side="projectSide(projectId)"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

import Project from '@/components/Project.vue'
import { Project as ProjectType, Tag } from "@/types"

// TODO There must be a better way of doing this
type ThisVue = {
  $store: {
    state: {
      projects: ProjectType[]
    }
  }
  filterByTag: Tag
  selectedProjects: ProjectType[]
}

export default Vue.extend({
  name: "ProjectList",
  components: { Project },
  props: {
    "title": String as PropType<string>,
    "subtitle": String as PropType<string>,
    "filterByTag": String as PropType<Tag>
  },
  computed: {
    selectedProjects: {
      get (this: ThisVue): ProjectType[] {
        return this.$store.state.projects.filter(project => {
          return project.tags.includes(this.filterByTag)
        })
      }
    }
  },
  methods: {
    projectSide (this: ThisVue, projectId: number): 'left' | 'right' | null {
      // If this is a small project, which side of the screen should it be on?
      if (this.selectedProjects[projectId].size !== 'small') {
        return null
      }
      if (this.selectedProjects.slice(0, projectId + 1).reduce(
        (sum, project) => {
          if (project.size === 'small') return sum + 1
          return sum + 2
        }, 0
      ) % 2 === 0) return 'right'
      return 'left'
    }
  }
})
</script>
