<template>
  <div
      id="app"
      class="bg-surface text-textsurface transition-colors-bg duration-300 ease-subtle min-h-screen"
  >
    <NavBar />

    <main id="main">
      <!-- This is where the current route will render -->
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
