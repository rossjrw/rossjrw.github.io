<template>
  <div id="app">
    <Corner></Corner>
    <Header></Header>
    <ProjectList v-for="category in categories"
                 :key="category.tag"
                 :title="category.title"
                 :filter-by-tag="category.tag"/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import Corner from '@/components/Corner.vue'
import Header from '@/components/Header.vue'
import ProjectList from '@/components/ProjectList.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: "App",
  components: {
    Corner, Header, ProjectList, Footer
  },
  data(): Record<string,unknown> {
    return {
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
})
</script>
