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
import { includes, pickBy } from "lodash"

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
        return pickBy(this.$store.state.projects,
          value => {
            return includes(value.tags, this.filterByTag)
          }
        )
      }
    }
  }
})
</script>
