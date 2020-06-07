<template>
  <div>
    <h1 class="title is-1">
      <!-- <Project v-for="(project, index) in selectedProjects" -->
      <!--          :key="index"/> -->
    </h1>
  </div>
</template>

<script lang="ts">
import Project from '@/components/Project.vue'

export default {
  name: "ProjectList",
  components: {
    Project
  },
  props: ["title", "filter-by-tag"],
  data(): Record<string,unknown> {
    return {}
  }
}
</script>
