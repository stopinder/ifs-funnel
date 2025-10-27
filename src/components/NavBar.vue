<template>
  <header class="sticky top-0 z-50 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex items-center justify-between md:justify-between h-16">
        <!-- Brand (Chrysalis logo and name) -->
        <a href="/" class="flex items-center gap-2" aria-label="Chrysalis Therapy home">
          <img
              src="/images/ChrysalisLogo.svg"
              alt="Chrysalis logo"
              class="w-10 h-auto md:w-12 object-contain"
              loading="eager"
              decoding="async"
          />
          <span class="text-base font-semibold text-slate-900">Chrysalis Therapy</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-4" aria-label="Primary navigation">
          <a href="#about" class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle">About</a>

          <a href="#offers" class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle">Approach</a>

          <a href="/ifs-therapy" class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle">
            IFS Therapy
          </a>

          <a
              href="#book-cta"
              class="text-sm font-semibold
           px-3 py-1 rounded-lg
           bg-primary text-white hover:bg-primary-hover
           shadow-glow
           focus:outline-none focus:ring-4 focus:ring-primary/40
           transition-colors-bg duration-200 ease-subtle"
          >
            Book
          </a>
        </nav>


        <!-- Mobile hamburger -->
        <div class="md:hidden flex items-center justify-center">
          <button
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen.toString()"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              class="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/60"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" id="mobile-menu" class="md:hidden bg-white border-t border-slate-100 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex flex-col gap-3 text-center" aria-label="Mobile primary">
          <a @click="mobileOpen = false" href="#about" class="px-3 py-2 rounded text-slate-800 hover:bg-slate-50">About</a>
          <a @click="mobileOpen = false" href="#offers" class="px-3 py-2 rounded text-slate-800 hover:bg-slate-50">Approach</a>
          <a @click="mobileOpen = false" href="#book-cta" class="px-3 py-2 rounded bg-amber-100 text-slate-900 font-semibold hover:bg-amber-200">Book</a>
          <a
              @click="closeMobile()"
              href="/ifs-therapy"
              class="px-3 py-2 rounded
         text-textsurface
         hover:bg-surface
         border border-transparent hover:border-bordercol-light
         text-sm font-medium
         transition-colors-bg duration-200 ease-subtle"
          >
            IFS Therapy
          </a>

        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
function closeMobile() {
  mobileOpen.value = false
}

</script>

<style scoped>
#mobile-menu {
  transition: opacity 0.15s ease;
}
</style>
