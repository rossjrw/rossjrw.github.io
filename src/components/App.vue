<template>
  <div id="app"
       class="text-gray-800">
    <github-corners repo="rossjrw/rossjrw.github.io"/>
    <Header/>
    <ProjectList v-for="category in categories"
                 :key="category.tag"
                 :title="category.title"
                 :subtitle="category.subtitle"
                 :filter-by-tag="category.tag"/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import Header from '@/components/Header.vue'
import ProjectList from '@/components/ProjectList.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: "App",
  components: {
    Header, ProjectList, Footer
  },
  data() {
    return {
      categories: [
        {
          tag: "completed",
          title: "completed projects",
          subtitle: "finished projects, ready for you and the world",
        },
        {
          tag: "working",
          title: "working projects",
          subtitle: "stuff I'm still working on — shhh tell no one",
        },
        {
          tag: "unfinished",
          title: "unfinished projects",
          subtitle: "these were never finished, but I may return to them",
        },
        {
          tag: "abandoned",
          title: "the graveyard",
          subtitle: "abandoned projects that I will never touch again",
        },
      ]
    }
  }
})
</script>
