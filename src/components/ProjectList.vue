<template>
  <div>
    <p class="title is-1 has-text-centered">
      {{title}}
    </p>
    <p class="subtitle is-5 has-text-centered">
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
