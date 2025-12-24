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
            class="flex items-center gap-4 md:gap-5 h-16"
            aria-label="Chrysalis Therapy home"
        >
          <!-- LOGO -->
          <div class="flex items-center h-16">
            <img
                src="/images/ChrysalisLogo.svg"
                alt="Chrysalis logo"
                class="h-16 md:h-[72px] w-auto
                     scale-110
                     object-contain
                     -translate-y-1"
            />
          </div>

          <!-- NAME -->
          <span class="text-sm md:text-base font-semibold text-[#3c3a36]">
            Robert Ormiston MBACP
          </span>
        </button>

        <!-- DESKTOP NAV -->
        <nav
            class="hidden md:flex items-center gap-6 md:ml-8"
            aria-label="Primary navigation"
        >
          <button
              @click="goHomeAndScroll('about')"
              class="text-sm font-medium text-[#1f2a37]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('philosophy')"
              class="text-sm font-medium text-[#1f2a37]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            Approach
          </button>

          <button
              @click="goIfs()"
              class="text-sm font-medium text-[#1f2a37]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            IFS Therapy
          </button>

          <button
              @click="goEmdr()"
              class="text-sm font-medium text-[#1f2a37]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            EMDR
          </button>

          <!-- MINDWORKS EXTERNAL LINK -->
          <a
              href="https://therapy-orientation-quiz.vercel.app/about"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-[#1f2a37]
                   hover:text-[#243040]
                   transition-colors duration-200"
          >
            MindWorks
          </a>
        </nav>

        <!-- MOBILE TOGGLE -->
        <div class="flex items-center md:hidden">
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
        class="md:hidden bg-white/90 backdrop-blur-md
             border-t border-black/10 shadow-sm"
    >
      <div class="max-w-6xl mx-auto px-4 py-4">
        <nav class="flex flex-col gap-3 text-center">
          <button
              @click="goHomeAndScroll('about'); closeMobile()"
              class="px-3 py-2 rounded text-sm font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('philosophy'); closeMobile()"
              class="px-3 py-2 rounded text-sm font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            Approach
          </button>

          <button
              @click="goIfs(); closeMobile()"
              class="px-3 py-2 rounded text-sm font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            IFS Therapy
          </button>

          <button
              @click="goEmdr(); closeMobile()"
              class="px-3 py-2 rounded text-sm font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            EMDR
          </button>

          <!-- MINDWORKS (MOBILE) -->
          <a
              href="https://therapy-orientation-quiz.vercel.app/about"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobile()"
              class="px-3 py-2 rounded text-sm font-medium
                   text-[#1f2a37]
                   hover:bg-black/5"
          >
            Mindworks
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
