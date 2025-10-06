<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-950 text-white">
    <main>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <FaqSection />
      <Testimonials />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue'
import FaqSection from './components/FaqSection.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue' // 👈 You were missing this line
</script>





