<template>
  <footer
      id="footer"
      class="relative px-6 py-8 md:py-12 text-slate-800 bg-slate-50 border-t border-slate-200"
      role="contentinfo"
  >
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">

      <!-- Inline legal preview if we're already on /terms.
           This is here because in production (Vercel) navigation to /terms
           sometimes leaves you anchored at the bottom of the page.
           This ensures users SEE the terms content immediately. -->
      <div
          v-if="isOnTermsPage"
          class="bg-white border border-slate-200 rounded-xl shadow-sm p-4 text-slate-700 leading-relaxed"
          aria-labelledby="footer-terms-heading"
      >
        <h2
            id="footer-terms-heading"
            class="text-base font-semibold text-slate-900 mb-2"
        >
          Terms &amp; Privacy
        </h2>
        <p class="text-xs text-slate-500 mb-3">
          Last updated: October 2025 · Chrysalis Therapy Services
        </p>
        <p class="text-sm text-slate-700 mb-3">
          This service is provided by Robert Ormiston (MBACP). The work is confidential and
          handled in line with the BACP Ethical Framework and UK GDPR. This is not an
          emergency service. If you are at immediate risk, contact your local emergency
          services, NHS 111/999, your GP, or crisis support.
        </p>
        <p class="text-sm text-slate-700">
          Clinical notes are stored securely, typically for up to 7 years after therapy
          ends. You can request access to your information and ask questions about how it
          is used.
        </p>
      </div>

      <!-- TIER 1: Identity / Social card (mobile first, right column on desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <!-- LEFT (desktop): Credentials / Background -->
        <div class="space-y-4 text-sm text-slate-600 leading-relaxed order-2 md:order-1">
          <!-- Accreditation / registration -->
          <div class="text-slate-600">
            <p>
              Registered Member
              <strong class="text-slate-800">MBACP</strong>
              (Membership No. 00948196)
              ·
              <a
                  href="https://www.bacp.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-700 hover:text-slate-900"
              >
                British Association for Counselling and Psychotherapy
              </a>
              · Confidential &amp; Secure
            </p>

            <p class="mt-2">
              Graduate of the
              <a
                  href="https://www.chi.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-700 hover:text-slate-900"
              >
                University of Chichester
              </a>
              · Trained at
              <a
                  href="https://www.syzygy.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-700 hover:text-slate-900"
              >
                SYZERGY
              </a>
              · EMDR trained with
              <a
                  href="https://emdrmasterclass.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-700 hover:text-slate-900"
              >
                EMDR Masterclass
              </a>
            </p>
          </div>

          <!-- Clinical background toggle -->
          <div>
            <button
                @click="expanded = !expanded"
                class="text-sm text-slate-700 underline hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 rounded px-1 py-0.5"
                :aria-expanded="expanded.toString()"
                aria-controls="footerExtra"
            >
              {{ expanded ? 'Hide details' : 'More about clinical background' }}
            </button>

            <div
                v-if="expanded"
                id="footerExtra"
                class="mt-3 text-slate-700 text-sm leading-relaxed"
            >
              <p>
                Clinical leadership roles within the NHS, commissioning for psychiatric services,
                and contributions to policy and training. I combine trauma-informed approaches
                with clear, practical summaries to support clients between sessions.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT (desktop): Profile card -->
        <div class="order-1 md:order-2 flex md:justify-end">
          <aside
              class="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col items-center md:items-end text-center md:text-right w-full max-w-[240px]"
          >
            <img
                :src="profileJpg"
                alt="Portrait of psychotherapist Robert Ormiston"
                class="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-slate-200 shadow-sm"
                width="224"
                height="224"
                loading="eager"
                decoding="async"
                @error="handleImgError"
                ref="imgEl"
            />

            <figcaption class="mt-3 text-sm text-slate-700 font-medium">
              Robert Ormiston — Psychotherapist
            </figcaption>

            <div class="mt-4">
              <FooterSocials />
            </div>
          </aside>
        </div>
      </div>

      <!-- TIER 2: Navigation / Legal -->
      <div class="flex flex-col gap-6 text-center md:text-left">
        <!-- Primary nav links -->
        <nav
            class="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm text-slate-700"
            aria-label="Footer navigation"
        >
          <a
              href="#about"
              class="px-2 py-1 rounded hover:bg-slate-100 transition"
          >
            About
          </a>

          <a
              href="#faq"
              class="px-2 py-1 rounded hover:bg-slate-100 transition"
          >
            FAQ
          </a>

          <a
              href="#testimonials"
              class="px-2 py-1 rounded hover:bg-slate-100 transition"
          >
            Client Reflections
          </a>

          <a
              href="#offer"
              class="px-2 py-1 rounded hover:bg-slate-100 transition"
          >
            Book a Session
          </a>
        </nav>

        <!-- Legal / privacy link -->
        <div class="text-center md:text-left">
          <router-link
              to="/terms"
              class="text-slate-500 text-xs underline underline-offset-2 hover:text-slate-700"
          >
            Terms &amp; Privacy
          </router-link>
        </div>

        <!-- Copyright / clinic line -->
        <p class="text-xs text-slate-500 text-center md:text-left">
          © {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved
        </p>
      </div>
    </div>

    <!-- Back-to-top button -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 shadow-lg transition-opacity duration-300"
        aria-label="Back to Top"
    >
      ↑
    </button>

    <!-- live region for a11y -->
    <span class="sr-only" aria-live="polite" ref="liveAnnounce">{{ liveMessage }}</span>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import FooterSocials from './FooterSocials.vue'

// route awareness
const route = useRoute()
const isOnTermsPage = route.name === 'terms'

// Public asset path (must match file name exactly)
const profileJpg = '/images/profile.jpg'

// refs/state
const imgEl = ref(null)
const expanded = ref(false)
const showScrollTop = ref(false)
const liveMessage = ref('')
const liveAnnounce = ref(null)

// image error handler
function handleImgError(e) {
  const failed = (e && e.target && e.target.src) || profileJpg
  console.warn('Profile image failed to load:', failed)
  if (e && e.target) {
    e.target.src =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="224" height="224"><rect width="100%" height="100%" fill="%23F8F4EA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Arial" font-size="18">Profile</text></svg>'
  }
}

/* scrolling */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  liveMessage.value = 'Scrolling to top'
  setTimeout(() => {
    liveMessage.value = ''
  }, 1400)
}
function onScroll() {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
footer {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

a:focus-visible,
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(34,197,94,0.08);
  border-radius: 6px;
}
</style>

