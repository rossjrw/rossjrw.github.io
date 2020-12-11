<template>
  <div>
    <p class="text-5xl font-semibold text-center px-8">
      {{title}}
    </p>
    <p class="text-xl text-center mt-1 px-8">
      {{subtitle}}
    </p>
    <Project v-for="(project, projectId) in selectedProjects"
             :key="projectId"
             :project="project"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import Project from '@/components/Project.vue'
import { ProjectList } from '@/types'

export default Vue.extend({
  name: "ProjectList",
  components: {
    Project
  },
  props: ["title", "subtitle", "filterByTag"],
  computed: {
    selectedProjects: {
      get(): ProjectList {
        return this.$store.state.projects.filter(project => {
          return project.tags.includes(this.filterByTag)
        })
      }
    }
  }
})
</script>
