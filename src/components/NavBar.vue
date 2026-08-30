<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const mobileOpen = ref(false)

const router = useRouter()
const route = useRoute()

function closeMobile() {
  mobileOpen.value = false
}

function scrollToSection(id?: string) {
  if (!id) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  const el = document.getElementById(id)

  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function goHomeAndScroll(id?: string) {
  closeMobile()

  if (route.path === '/') {
    scrollToSection(id)
    return
  }

  router.push('/').then(() => {
    requestAnimationFrame(() => {
      scrollToSection(id)
    })
  })
}
</script>

<template>
  <header
      class="sticky top-0 z-50 border-b border-border bg-surface"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-[72px] items-center justify-between">

        <button
            type="button"
            class="font-serif text-xl font-normal tracking-[-0.015em] text-text transition-colors hover:text-accent"
            aria-label="Robert Ormiston home"
            @click="goHomeAndScroll()"
        >
          Robert Ormiston
        </button>

        <nav
            class="hidden items-center gap-10 md:flex"
            aria-label="Primary navigation"
        >
          <button
              type="button"
              class="text-sm font-bold uppercase tracking-widest text-text-muted transition-colors hover:text-text"
              @click="goHomeAndScroll('about')"
          >
            About
          </button>

          <button
              type="button"
              class="text-sm font-bold uppercase tracking-widest text-text-muted transition-colors hover:text-text"
              @click="goHomeAndScroll('work')"
          >
            Life &amp; Work
          </button>

          <a
              href="https://helio.works"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-bold uppercase tracking-widest text-text transition-colors hover:text-accent"
          >
            Helios ↗
          </a>
        </nav>

        <button
            type="button"
            class="-mr-2 flex h-10 w-10 items-center justify-center text-text md:hidden"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            @click="mobileOpen = !mobileOpen"
        >
          <svg
              v-if="!mobileOpen"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
          >
            <path
                d="M4 8h16M4 16h16"
                stroke-width="1.5"
                stroke-linecap="round"
            />
          </svg>

          <svg
              v-else
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
          >
            <path
                d="M6 6l12 12M18 6L6 18"
                stroke-width="1.5"
                stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="border-t border-border bg-surface md:hidden"
    >
      <nav
          class="mx-auto flex max-w-7xl flex-col px-6 py-5"
          aria-label="Mobile navigation"
      >
        <button
            type="button"
            class="border-b border-border py-4 text-left text-base text-text"
            @click="goHomeAndScroll('about')"
        >
          About
        </button>

        <button
            type="button"
            class="border-b border-border py-4 text-left text-base text-text"
            @click="goHomeAndScroll('work')"
        >
          Life &amp; Work
        </button>

        <a
            href="https://helio.works"
            target="_blank"
            rel="noopener noreferrer"
            class="py-4 text-base text-text"
            @click="closeMobile"
        >
          Helios ↗
        </a>
      </nav>
    </div>
  </header>
</template>