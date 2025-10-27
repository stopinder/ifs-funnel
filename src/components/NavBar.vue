<template>
  <header class="sticky top-0 z-50 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex items-center justify-between md:justify-between h-16">
        <!-- Brand -->
        <button
            @click="goHomeAndScroll(null)"
            class="flex items-center gap-2"
            aria-label="Chrysalis Therapy home"
        >
          <img
              src="/images/ChrysalisLogo.svg"
              alt="Chrysalis logo"
              class="w-10 h-auto md:w-12 object-contain"
              loading="eager"
              decoding="async"
          />
          <span class="text-base font-semibold text-slate-900">Chrysalis Therapy</span>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-4" aria-label="Primary navigation">
          <button
              @click="goHomeAndScroll('about')"
              class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('offers')"
              class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle"
          >
            Approach
          </button>

          <router-link
              to="/ifs-therapy"
              class="text-sm font-medium text-textsurface hover:text-primary transition-colors-bg duration-200 ease-subtle"
          >
            IFS Therapy
          </router-link>

          <button
              @click="goHomeAndScroll('book-cta')"
              class="text-sm font-semibold
                   px-3 py-1 rounded-lg
                   bg-primary text-white hover:bg-primary-hover
                   shadow-glow
                   focus:outline-none focus:ring-4 focus:ring-primary/40
                   transition-colors-bg duration-200 ease-subtle"
          >
            Book
          </button>
        </nav>

        <!-- Mobile hamburger -->
        <div class="md:hidden flex items-center justify-center">
          <button
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen.toString()"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              class="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
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
        class="md:hidden bg-white border-t border-slate-100 shadow-sm"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex flex-col gap-3 text-center" aria-label="Mobile primary">
          <button
              @click="goHomeAndScroll('about'); closeMobile()"
              class="px-3 py-2 rounded text-textsurface hover:bg-surface border border-transparent hover:border-bordercol-light text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            About
          </button>

          <button
              @click="goHomeAndScroll('offers'); closeMobile()"
              class="px-3 py-2 rounded text-textsurface hover:bg-surface border border-transparent hover:border-bordercol-light text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            Approach
          </button>

          <router-link
              to="/ifs-therapy"
              @click.native="closeMobile()"
              class="px-3 py-2 rounded text-textsurface hover:bg-surface border border-transparent hover:border-bordercol-light text-sm font-medium transition-colors-bg duration-200 ease-subtle"
          >
            IFS Therapy
          </router-link>

          <button
              @click="goHomeAndScroll('book-cta'); closeMobile()"
              class="px-3 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover shadow-glow text-sm transition-colors-bg duration-200 ease-subtle focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            Book
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
    // just scroll to top
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
  // already on home
  if (route.path === '/') {
    smoothScrollToId(targetId)
    return
  }

  // navigate home, then scroll
  router.push('/').then(() => {
    requestAnimationFrame(() => {
      smoothScrollToId(targetId)
    })
  })
}
</script>

<style scoped>
#mobile-menu {
  transition: opacity 0.15s ease;
}
</style>
