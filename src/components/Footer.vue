<template>
  <footer
      id="footer"
      class="relative px-6 py-16 text-[#4a4743] bg-[#fdfaf7] border-t border-[#e4d9d1]"
      role="contentinfo"
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        <!-- Identity -->
        <div class="space-y-4">
          <h3 class="text-xl font-serif font-semibold text-[#3c3a36]">Robert Ormiston</h3>
          <p class="text-sm leading-relaxed text-[#5a5753]">
            Clinician &middot; Psychotherapist &middot; Writer &middot; Builder of Helios
          </p>
        </div>

        <!-- Professional Links -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold tracking-wider uppercase text-[#6e6a66]">Professional</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="https://therapyworks.works" target="_blank" rel="noopener noreferrer" class="hover:text-[#2d4a43] transition-colors">Helios</a>
            </li>
            <li>
              <router-link to="/ifs-therapy" class="hover:text-[#2d4a43] transition-colors">IFS Therapy</router-link>
            </li>
            <li>
              <router-link to="/emdr-therapy" class="hover:text-[#2d4a43] transition-colors">EMDR</router-link>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold tracking-wider uppercase text-[#6e6a66]">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/terms" class="hover:text-[#2d4a43] transition-colors">Terms &amp; Privacy</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-[#e4d9d1] flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-xs text-[#6e6a66]">
          © {{ new Date().getFullYear() }} Robert Ormiston. All rights reserved.
        </p>

        <div class="flex items-center gap-6">
          <FooterSocials />
        </div>
      </div>
    </div>

    <!-- Back to top button -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full
               bg-[#2d4a43] text-[#f9f3ee] text-sm font-medium
               hover:bg-[#3d5a53] shadow-lg transition-opacity duration-300
               focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
        aria-label="Back to Top"
    >
      &uarr;
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSocials from './FooterSocials.vue'

const showScrollTop = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
</style>
