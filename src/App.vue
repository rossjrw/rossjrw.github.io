<template>
  <div id="app">
    <Corner></Corner>
    <Header></Header>
    <section class="section">
    </section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Corner from '@/components/Corner.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    Corner, Footer, Header
  },
}
</script>
