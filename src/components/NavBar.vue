<template>
  <header
      class="sticky top-0 z-50
             border-b border-[#e4d9d1]/80
             bg-[#f3e8dd]/70
             backdrop-blur-xl
             shadow-[0_10px_30px_rgba(44,35,28,0.12)]"
  >
    <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
      <!-- On mobile: logo left, burger right.
           On desktop: logo + nav grouped together (no huge gulf). -->
      <div class="flex items-center h-16 gap-4 md:gap-8 justify-between md:justify-start">
        <!-- Brand -->
        <button
            @click="goHomeAndScroll(null)"
            class="flex items-center gap-4 md:gap-5"
            aria-label="Chrysalis Therapy home"
        >
          <img
              src="/images/ChrysalisLogo.svg"
              alt="Chrysalis logo"
              class="w-12 h-auto md:w-14 object-contain"
              loading="eager"
              decoding="async"
          />
          <span class="text-sm md:text-base font-semibold text-[#3c3a36]">
            Robert Ormiston MBACP
          </span>
        </button>

        <!-- Desktop nav -->
        <nav
            class="hidden md:flex items-center gap-6 md:ml-8"
            aria-label="Primary navigation"
        >
          <button
              @click="goHomeAndScroll('about')"
              class="text-sm font-medium
                     text-[#4a4743]
                     hover:text-[#c39e8a]
                     transition-colors-bg duration-200 ease-subtle"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('offers')"
              class="text-sm font-medium
                     text-[#4a4743]
                     hover:text-[#c39e8a]
                     transition-colors-bg duration-200 ease-subtle"
          >
            Approach
          </button>

          <button
              @click="goIfs()"
              class="text-sm font-medium
                     text-[#4a4743]
                     hover:text-[#c39e8a]
                     transition-colors-bg duration-200 ease-subtle"
          >
            IFS Therapy
          </button>

          <button
              @click="goEmdr()"
              class="text-sm font-medium
                     text-[#4a4743]
                     hover:text-[#c39e8a]
                     transition-colors-bg duration-200 ease-subtle"
          >
            EMDR
          </button>
        </nav>

        <!-- Mobile hamburger -->
        <div class="flex items-center md:hidden">
          <button
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen.toString()"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              class="p-2 rounded-md text-[#3c3a36]
                     hover:bg-[#eadace]
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c39e8a]/40"
          >
            <svg
                v-if="!mobileOpen"
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <svg
                v-else
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden bg-[#f9f3ee]/95 border-t border-[#e4d9d1] shadow-sm backdrop-blur-md"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex flex-col gap-3 text-center" aria-label="Mobile primary">
          <button
              @click="goHomeAndScroll('about'); closeMobile()"
              class="px-3 py-2 rounded text-[#4a4743]
                     hover:bg-[#eadace]
                     border border-transparent hover:border-[#e4d9d1]
                     text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('offers'); closeMobile()"
              class="px-3 py-2 rounded text-[#4a4743]
                     hover:bg-[#eadace]
                     border border-transparent hover:border-[#e4d9d1]
                     text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            Approach
          </button>

          <button
              @click="goIfs(); closeMobile()"
              class="px-3 py-2 rounded text-[#4a4743]
                     hover:bg-[#eadace]
                     border border-transparent hover:border-[#e4d9d1]
                     text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            IFS Therapy
          </button>

          <button
              @click="goEmdr(); closeMobile()"
              class="px-3 py-2 rounded text-[#4a4743]
                     hover:bg-[#eadace]
                     border border-transparent hover:border-[#e4d9d1]
                     text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            EMDR
          </button>
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

