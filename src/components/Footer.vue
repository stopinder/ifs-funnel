<template>
  <footer
      id="footer"
      class="relative bg-cobalt-deep px-6 py-10 text-surface md:py-12"
      role="contentinfo"
  >
    <div class="mx-auto max-w-7xl">

      <div
          class="grid grid-cols-1 gap-10 border-b border-surface/10 pb-10 md:grid-cols-3 md:gap-12"
      >
        <!-- Identity -->
        <div>
          <p class="font-serif text-2xl text-surface">
            Robert Ormiston MBACP
          </p>

          <p
              class="mt-3 max-w-xs text-[11px] uppercase leading-relaxed tracking-[0.18em] text-surface/50"
          >
            Psychotherapist · Writer · Founder of Helios
          </p>

          <div class="mt-5">
            <FooterSocials
                class="text-surface/40 transition-colors hover:text-surface"
            />
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface/30"
          >
            Explore
          </h4>

          <ul class="mt-5 space-y-3">
            <li>
              <button
                  type="button"
                  class="text-sm text-surface/70 transition-colors hover:text-surface"
                  @click="scrollToSection('about')"
              >
                About
              </button>
            </li>

            <li>
              <button
                  type="button"
                  class="text-sm text-surface/70 transition-colors hover:text-surface"
                  @click="scrollToSection('work')"
              >
                Life &amp; Work
              </button>
            </li>

            <li>
              <a
                  href="https://helio.works"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-surface/70 transition-colors hover:text-surface"
              >
                Helios ↗
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface/30"
          >
            Contact
          </h4>

          <div class="mt-5 space-y-5">
            <a
                href="mailto:hello@helio.works"
                class="inline-block font-serif text-xl text-surface transition-colors hover:text-surface/70"
            >
              hello@helio.works
            </a>

            <button
                type="button"
                class="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-surface/40 transition-colors hover:text-surface"
                @click="scrollToTop"
            >
              Back to top
              <span
                  class="h-px w-8 bg-surface/20 transition-colors group-hover:bg-surface/60"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Closing row -->
      <div
          class="flex flex-col gap-5 pt-7 md:flex-row md:items-end md:justify-between"
      >
        <p
            class="text-[10px] uppercase tracking-[0.2em] text-surface/30"
        >
          © {{ new Date().getFullYear() }} Robert Ormiston
        </p>

        <p
            class="max-w-lg font-serif text-base italic leading-relaxed text-surface/45 md:text-right"
        >
          Good systems should create more room for thought, not less.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import FooterSocials from './FooterSocials.vue'

const router = useRouter()
const route = useRoute()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function scrollToSection(id) {
  if (route.path !== '/') {
    router.push('/').then(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id)

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })

    return
  }

  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
