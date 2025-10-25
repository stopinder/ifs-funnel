<template>
  <nav
      class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100"
      role="navigation"
      aria-label="Main navigation"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Brand -->
        <a href="/" class="flex items-center gap-3" aria-label="Chrysalis Therapy home">
          <!-- canonical butterfly symbol (same paths as hero) -->
          <svg
              class="w-9 h-9 text-teal-600 flex-none"
              viewBox="-24 -24 48 48"
              role="img"
              aria-labelledby="navSymLogoTitle navSymLogoDesc"
              xmlns="http://www.w3.org/2000/svg"
          >
            <title id="navSymLogoTitle">Chrysalis symbol</title>
            <desc id="navSymLogoDesc">Monoline butterfly symbol for Chrysalis Therapy</desc>
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2">
              <path d="M-6,1 C-18,-6 -16,-20 -4,-24 C6,-28 18,-18 16,-8 C14,-2 6,6 0,10" />
              <path d="M6,1 C18,-6 16,-20 4,-24 C-6,-28 -18,-18 -16,-8 C-14,-2 -6,6 0,10" />
              <path d="M0,-5 L0,9" stroke-width="2.6" />
            </g>
          </svg>

          <span class="sr-only md:not-sr-only md:inline text-sm font-medium text-slate-800">Chrysalis Therapy</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-6">
          <a href="#about" class="text-sm text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-200">About</a>
          <a href="#services" class="text-sm text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-200">Therapy</a>
          <a href="#book-cta" class="text-sm font-semibold px-3 py-1 rounded-lg bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300">Book</a>
        </div>

        <!-- Mobile controls -->
        <div class="flex items-center md:hidden">
          <button
              ref="menuButton"
              @click="toggle"
              :aria-expanded="isOpen.toString()"
              :aria-controls="mobileMenuId"
              class="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"
              aria-label="Toggle menu"
          >
            <span class="sr-only">Open main menu</span>

            <svg v-if="!isOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile slide-down panel -->
    <transition name="slide-fade">
      <div v-show="isOpen" :id="mobileMenuId" ref="menuEl" class="md:hidden" role="region" aria-label="Mobile menu">
        <div class="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-slate-100">
          <a href="#about" @click="onLinkClick" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200">About</a>
          <a href="#services" @click="onLinkClick" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200">Therapy</a>
          <a href="#book-cta" @click="onLinkClick" class="block px-3 py-2 rounded-md text-base font-semibold bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300">Book</a>
          <a href="#contact" @click="onLinkClick" class="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200">Contact</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const isOpen = ref(false)
const mobileMenuId = `mobile-menu-${Math.random().toString(36).slice(2, 9)}`

// refs
const menuEl = ref(null)
const menuButton = ref(null)

const firstFocusable = ref(null)
const lastFocusable = ref(null)

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) nextTick(setupFocusTrap)
  else nextTick(() => { if (menuButton.value) menuButton.value.focus() })
}

function close() {
  isOpen.value = false
  nextTick(() => { if (menuButton.value) menuButton.value.focus() })
}

function onLinkClick() {
  close()
}

function setupFocusTrap() {
  const root = menuEl.value
  if (!root) return
  const focusables = root.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])')
  if (focusables.length) {
    firstFocusable.value = focusables[0]
    lastFocusable.value = focusables[focusables.length - 1]
    firstFocusable.value.focus()
  }
}

function handleKey(e) {
  if (!isOpen.value) return
  if (e.key === 'Escape') { e.preventDefault(); close(); return }
  if (e.key === 'Tab') {
    if (!firstFocusable.value || !lastFocusable.value) return
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable.value) { e.preventDefault(); lastFocusable.value.focus() }
    } else {
      if (document.activeElement === lastFocusable.value) { e.preventDefault(); firstFocusable.value.focus() }
    }
  }
}

function handleDocClick(e) {
  if (!isOpen.value) return
  const root = menuEl.value
  const btn = menuButton.value
  const target = e.target
  if (root && !root.contains(target) && btn && !btn.contains(target)) close()
}

function handleResize() {
  if (window.innerWidth >= 768 && isOpen.value) isOpen.value = false
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleDocClick, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleDocClick, true)
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 180ms cubic-bezier(.2, .9, .2, 1);
}
.slide-fade-enter-from { transform: translateY(-8px); opacity: 0; }
.slide-fade-enter-to { transform: translateY(0); opacity: 1; }
.slide-fade-leave-from { transform: translateY(0); opacity: 1; }
.slide-fade-leave-to { transform: translateY(-8px); opacity: 0; }
</style>
