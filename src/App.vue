<template>
  <div id="app">
    <Corner></Corner>
    <Header></Header>
    <ProjectList v-for="category in categories"
                 :key="category.tag"
                 :title="category.title"
                 :tag="category.tag"/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Corner from '@/components/Corner.vue'
import Header from '@/components/Header.vue'
import ProjectList from '@/components/ProjectList'
import Footer from '@/components/Footer.vue'

import { getProjects } from '@/getProjects'

export default {
  name: "App",
  components: {
    Corner, Header, ProjectList, Footer
  },
  data(): Record<string,unknown> {
    return {
      projects: getProjects(),
      categories: [
        {
          title: "completed projects",
          tag: "completed"
        },
        {
          title: "working projects",
          tag: "working"
        },
        {
          title: "unfinished projects",
          tag: "unfinished"
        }
      ]
    }
  }
}
</script>
