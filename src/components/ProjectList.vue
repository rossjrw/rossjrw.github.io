<template>
  <section>
    <h2 class="text-5xl font-semibold text-center px-8">
      {{title}}
    </h2>
    <h3 class="text-xl text-center mt-1 px-8">
      {{subtitle}}
    </h3>
    <div class="grid grid-cols-2 items-start gap-y-16 my-16">
      <Project v-for="(project, projectId) in selectedProjects"
               :key="projectId"
               :project="project"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"

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
  props: [ "title", "subtitle", "filterByTag" ],
  computed: {
    selectedProjects: {
      get (this: ThisVue): ProjectType[] {
        return this.$store.state.projects.filter(project => {
          return project.tags.includes(this.filterByTag)
        })
      }
    }
  }
})
</script>
