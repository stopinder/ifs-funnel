<template>
  <div id="app">
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content Wrapper -->
    <main>
      <HeroSection />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <PhilosophyOfPractice />

      <OfferSection />
      <SectionDivider />
      <FaqSection />

      <!-- Divider before CTA -->
      <SectionDivider />

      <!-- Book CTA (target for smooth scroll) -->
      <BookCta />

      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <ForTherapists />
      <SectionDivider />
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
/* Clean, clinical global background and base text color.
   This replaces the previous dark/navy background that made the navbar look sickly gray. */
body,
main,
#app {
  background-color: #f7fafc; /* pale, clinical off-white */
  color: #0b1220; /* strong dark text for contrast */
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Ensure main takes full height so hero sizing behaves consistently */
main {
  min-height: 100vh;
}

/* Optional small utility: keeps footer separated visually if needed */
footer {
  background: transparent;
}
</style>
