<template>
  <div id="app" class="text-gray-800">
    <Header></Header>
    <Bio></Bio>
    <ProjectList
      v-for="category in categories"
      :key="category.tag"
      :title="category.title"
      :subtitle="category.subtitle"
      :filter-by-tag="category.tag"
    ></ProjectList>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Header from "@/components/Header.vue"
import Bio from "@/components/Bio.vue"
import ProjectList from "@/components/ProjectList.vue"
import Footer from "@/components/Footer.vue"
import { Tag } from "../types"

type Category = { tag: Tag; title: string; subtitle: string }

export default defineComponent({
  name: "App",
  components: { Header, Bio, ProjectList, Footer },
  data(): { categories: Category[] } {
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
      ],
    }
  },
})
</script>
