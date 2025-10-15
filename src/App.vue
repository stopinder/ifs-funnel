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

import FaqSection from './components/FaqSection.vue'
import Testimonials from './components/Testimonials.vue'
import ForTherapists from './components/ForTherapists.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body,
main {
  background-color: #1e213b; /* same as your navy */
  margin: 0;
  padding: 0;
}
</style>
