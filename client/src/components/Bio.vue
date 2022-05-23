<template>
  <section
    class="
      px-6
      sm:px-12
      my-12
      md:my-16
      grid grid-cols-1
      lg:grid-cols-2
      gap-y-12
      justify-items-center
      items-start
    "
  >
    <div
      v-for="bio in bios"
      :key="bio.title"
      class="
        sm:text-lg
        inline-links
        max-w-text
        mx-4
        md:ml-9 md:mr-7
        lg:odd:justify-self-end lg:even:justify-self-start
      "
    >
      <h2 class="text-3xl font-display font-bold mb-1">
        {{ bio.title }}
      </h2>
      <div v-html="bio.bio"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import marked from "marked"
import dedent from "dedent"

export default defineComponent({
  name: "Bio",
  data() {
    return {
      bios: [
        {
          title: "Who I am",
          bio: marked(dedent`
            I'm a web developer in the UK.
            I work mostly on the frontend, and I'm familiar with TypeScript and
            modern JavaScript build processes;
            however, I'm working towards full-stack development.
            I also have a Master's degree in computational chemistry from
            Cardiff University.
          `).replace(/--/g, "—"),
        },
        {
          title: "What I do",
          bio: marked(dedent`
            I make things you can see and play with -- tools you can touch.
            I also write experimental and/or interactive fiction,
            which I contribute to the [SCP Wiki](https://scp-wiki.wikidot.com/).
            My work wants to be seen or used or read or played:
            it wants to be memorable; it pushes the limits of its medium.
            You can see some of my projects below, including the technologies I
            used to create them.
          `).replace(/--/g, "—"),
        },
      ],
    }
  },
})
</script>
