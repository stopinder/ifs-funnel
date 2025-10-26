<template>
  <div
      id="app"
      class="bg-surface text-textsurface dark:bg-surface-dark dark:text-textsurface-dark
           transition-colors-bg duration-300 ease-subtle min-h-screen"
  >
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content Wrapper -->
    <main>
      <HeroSection />

      <AboutMe />

      <PhilosophyOfPractice />

      <OfferSection />

      <FaqSection />

      <!-- Divider before CTA -->


      <!-- Book CTA (target for smooth scroll) -->
      <BookCta />


      <Testimonials />

      <ForTherapists />

    </main>

    <!-- Footer -->
    <Footer />


  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import BookCta from './components/BookCta.vue'
import SectionDivider from './components/SectionDivider.vue'
import AboutMe from './components/AboutMe.vue'
import PhilosophyOfPractice from './components/PhilosophyOfPractice.vue'
import OfferSection from './components/OfferSection.vue'
import FaqSection from './components/FaqSection.vue'
import Testimonials from './components/Testimonials.vue'
import ForTherapists from './components/ForTherapists.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Remove the old manual background/text styling.
   Tailwind utilities now control colors, typography smoothing, and min-height. */
html, body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
