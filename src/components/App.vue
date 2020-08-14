<template>
  <div id="app">
    <GithubCorner url="https://github.com/rossjrw/rossjrw.github.io"
                  colorScheme="black"/>
    <div class="section">
      <div class="container">
        <Header/>
      </div>
    </div>
    <ProjectList v-for="category in categories"
                 :key="category.tag"
                 :title="category.title"
                 :filter-by-tag="category.tag"/>
    <Footer/>
  </div>
</template>

<script lang="js">
import Vue from "vue"
import GithubCorner from "vue-github-corners"

import Header from '@/components/Header.vue'
import ProjectList from '@/components/ProjectList.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: "App",
  components: {
    GithubCorner, Header, ProjectList, Footer
  },
  data() {
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
        },
        {
          title: "the graveyard",
          tag: "abandoned",
        },
      ]
    }
  }
})
</script>
