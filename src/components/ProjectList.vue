<template>
  <div>
    <h1 class="title is-1">{{title}}</h1>
    <Project v-for="(project, projectId) in selectedProjects"
             :key="projectId"
             :project="project"/>
  </div>
</template>

<script lang="ts">
import { includes, pickBy } from "lodash"

import Project from '@/components/Project.vue'
import { ProjectList } from '@/types'

export default {
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
            const i = includes(value.tags, this.filterByTag)
            console.log(value, this.filterByTag, i)
            return i
          }
        )
      }
    }
  }
}
</script>
