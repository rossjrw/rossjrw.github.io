<template>
  <div>
    <h1 class="title is-1 has-text-centered">
      {{title}}
    </h1>
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
  props: ["title", "filterByTag"],
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
