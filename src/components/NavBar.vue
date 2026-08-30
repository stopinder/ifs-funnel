<template>
  <header
      class="sticky top-2 z-50
           bg-white/60 backdrop-blur-md
           border-b border-black/10
           shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
  >
    <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex items-center h-16 gap-4 md:gap-8 justify-between md:justify-start">

        <!-- BRAND -->
        <button
            @click="goHomeAndScroll(null)"
            class="flex flex-col items-start gap-0.5"
            aria-label="Robert Ormiston home"
        >
          <span class="text-lg md:text-xl font-serif font-semibold text-[#3c3a36]">
            Robert Ormiston
          </span>
          <span class="text-[10px] md:text-xs tracking-wider uppercase text-[#5a5753] font-medium">
            Clinician &middot; Psychotherapist &middot; Writer
          </span>
        </button>

        <!-- DESKTOP NAV -->
        <nav
            class="hidden md:flex items-center gap-8 md:ml-auto"
            aria-label="Primary navigation"
        >
          <button
              @click="goHomeAndScroll('about')"
              class="text-sm font-medium text-[#4a4743]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('experience')"
              class="text-sm font-medium text-[#4a4743]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            Experience
          </button>

          <!-- HELIOS EXTERNAL LINK -->
          <a
              href="https://therapyworks.works"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 rounded-full
                   bg-[#2d4a43] text-[#f9f3ee] text-sm font-medium
                   hover:bg-[#3d5a53] transition-colors duration-200"
          >
            Helios
          </a>
        </nav>

        <!-- MOBILE TOGGLE -->
        <div class="flex items-center md:hidden ml-auto">
          <button
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen.toString()"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              class="p-2 rounded-md text-[#1f2a37]
                   hover:bg-black/5
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-[#243040]/40"
          >
            <svg
                v-if="!mobileOpen"
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 8h16M4 16h16" />
            </svg>
            <svg
                v-else
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden bg-white/95 backdrop-blur-md
             border-t border-black/10 shadow-lg"
    >
      <div class="max-w-6xl mx-auto px-4 py-6">
        <nav class="flex flex-col gap-4 text-center">
          <button
              @click="goHomeAndScroll('about'); closeMobile()"
              class="px-3 py-2 rounded text-base font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('experience'); closeMobile()"
              class="px-3 py-2 rounded text-base font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            Experience
          </button>

          <!-- HELIOS (MOBILE) -->
          <a
              href="https://therapyworks.works"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobile()"
              class="px-3 py-3 rounded text-base font-semibold
                   bg-[#2d4a43] text-[#f9f3ee]
                   hover:bg-[#3d5a53]"
          >
            Helios
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const mobileOpen = ref(false)
const router = useRouter()
const route = useRoute()

function closeMobile() {
  mobileOpen.value = false
}

function smoothScrollToId(id) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  el.setAttribute('tabindex', '-1')
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  el.focus?.({ preventScroll: true })
}

function goHomeAndScroll(targetId) {
  if (route.path === '/') {
    smoothScrollToId(targetId)
    return
  }
  router.push('/').then(() => {
    requestAnimationFrame(() => {
      smoothScrollToId(targetId)
    })
  })
}

function goIfs() {
  if (route.path === '/ifs-therapy') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  router.push('/ifs-therapy').then(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}

function goEmdr() {
  if (route.path === '/emdr-therapy') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  router.push('/emdr-therapy').then(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}
</script>

<style scoped>
#mobile-menu {
  transition: opacity 0.15s ease;
}
</style>
