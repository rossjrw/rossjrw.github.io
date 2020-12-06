<template>
  <section>
    <h2 class="text-5xl font-semibold text-center px-8">
      {{title}}
    </h2>
    <h3 class="text-xl text-center mt-1 px-8">
      {{subtitle}}
    </h3>
    <div class="grid grid-cols-2 gap-y-16 my-16">
      <Project v-for="(project, projectId) in selectedProjects"
               :key="projectId"
               :project="project"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import { includes, pickBy } from "lodash"

import Project from '@/components/Project.vue'

export default Vue.extend({
  name: "ProjectList",
  components: {
    Project
  },
  props: ["title", "subtitle", "filterByTag"],
  computed: {
    selectedProjects: {
      get(): unknown {
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
