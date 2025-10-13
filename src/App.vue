# src/App.vue
```vue
<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content Wrapper -->
    <main>
      <HeroSection />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <PhilosophyOfPractice />
      <SectionDivider />
      <OfferSection />
      <SectionDivider />
      <FaqSection />
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
import SectionDivider from './components/SectionDivider.vue'
import AboutMe from './components/AboutMe.vue'

import PhilosophyOfPractice from './components/PhilosophyOfPractice.vue'
import OfferSection from './components/OfferSection.vue'
import FaqSection from './components/FaqSection.vue'
import Testimonials from './components/Testimonials.vue'
import ForTherapists from './components/ForTherapists.vue'
import Footer from './components/Footer.vue'
// BookCTA import removed to eliminate duplicate booking section
</script>

<style>
body,
main {
  background-color: #1e213b; /* same as your navy */
  margin: 0;
  padding: 0;
}

</style>
