<template>
  <footer
      id="footer"
      class="relative px-6 py-8 md:py-12 text-slate-800 bg-slate-50 border-t border-slate-200"
      role="contentinfo"
  >
    <!-- main two-column grid -->
    <div class="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-center md:text-left footer-grid">
      <!-- LEFT: credentials/text -->
      <div class="space-y-3 text-sm text-slate-600 leading-relaxed">
        <p>
          Registered Member <strong class="text-slate-800">MBACP</strong> (Membership No. 00948196) ·
          <a href="https://www.bacp.co.uk" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900 underline">
            British Association for Counselling and Psychotherapy
          </a>
          · Confidential &amp; Secure
        </p>

        <p>
          Graduate of the
          <a href="https://www.chi.ac.uk" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900 underline">University of Chichester</a>
          · Trained at
          <a href="https://www.syzygy.org.uk" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900 underline">SYZERGY</a>
          · EMDR trained with
          <a href="https://emdrmasterclass.com" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900 underline">EMDR Masterclass</a>
        </p>

        <!-- microcopy toggle: optional expanded text for practitioners -->
        <div>
          <button
              @click="expanded = !expanded"
              class="text-sm text-slate-700 underline hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 rounded px-1 py-0.5"
              :aria-expanded="expanded.toString()"
              aria-controls="footerExtra"
          >
            {{ expanded ? 'Hide details' : 'More about clinical background' }}
          </button>

          <div v-if="expanded" id="footerExtra" class="mt-3 text-slate-700 text-sm leading-relaxed">
            <p>
              Clinical leadership roles within the NHS, commissioning for psychiatric services, and contributions to policy and training.
              I combine trauma-informed approaches with clear, practical summaries to support clients between sessions.
            </p>
          </div>
        </div>

        <p class="text-xs text-slate-500 mt-2">© {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved</p>
      </div>

      <!-- RIGHT: profile image + socials -->
      <div class="flex flex-col items-center md:items-end gap-3">
        <figure class="flex flex-col items-center md:items-end">
          <picture>
            <!-- single JPEG approach bound via variable to avoid Vite import analysis -->
            <img
                :src="profileJpg"
                alt="Portrait of psychotherapist Robert Ormiston"
                class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-slate-200 shadow-sm"
                width="288"
                height="288"
                loading="eager"
                decoding="async"
                @error="handleImgError"
                ref="imgEl"
            />
          </picture>

          <figcaption class="mt-2 text-sm text-slate-700 text-center md:text-right">
            Robert Ormiston — Psychotherapist
          </figcaption>
        </figure>

        <div class="mt-2">
          <FooterSocials />
        </div>
      </div>
    </div>

    <!-- footer nav -->
    <nav class="mt-8 flex flex-wrap justify-center gap-2 md:gap-4 text-sm z-10 relative" aria-label="Footer navigation">
      <a href="#about" class="px-2 py-1 rounded hover:bg-slate-100 transition">About</a>
      <a href="#faq" class="px-2 py-1 rounded hover:bg-slate-100 transition">FAQ</a>
      <a href="#testimonials" class="px-2 py-1 rounded hover:bg-slate-100 transition">Client Reflections</a>
      <a href="/terms.html" target="_blank" rel="noopener noreferrer" class="text-slate-500 text-xs underline hover:text-slate-700 px-2 py-1">Terms &amp; Privacy</a>
      <a href="#offer" class="px-2 py-1 rounded hover:bg-slate-100 transition">Book a Session</a>
    </nav>

    <!-- Back-to-top -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 shadow-lg transition-opacity duration-300"
        aria-label="Back to Top"
    >
      ↑
    </button>
    <span class="sr-only" aria-live="polite" ref="liveAnnounce">{{ liveMessage }}</span>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSocials from './FooterSocials.vue'

// Public asset path (must match file name exactly)
const profileJpg = '/images/profile.jpg'

// refs/state
const imgEl = ref(null)
const expanded = ref(false)
const showScrollTop = ref(false)
const liveMessage = ref('')
const liveAnnounce = ref(null)

// image error handler: fallback to inline SVG placeholder & log for debugging
function handleImgError(e) {
  const failed = (e && e.target && e.target.src) || profileJpg
  // log so you can copy the failing URL into chat if needed
  // eslint-disable-next-line no-console
  console.warn('Profile image failed to load:', failed)
  // set a lightweight inline SVG placeholder so UI isn't blank
  if (e && e.target) {
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="288" height="288"><rect width="100%" height="100%" fill="%23F8F4EA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Arial" font-size="18">Profile</text></svg>'
  }
}

/* scrolling */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  liveMessage.value = 'Scrolling to top'
  setTimeout(() => { liveMessage.value = '' }, 1400)
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
/* base font */
footer {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
}

/* layout tweaks */
.footer-grid { grid-template-columns: 1fr; column-gap: 1rem; }
@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 1fr minmax(180px, 320px); column-gap: 0.75rem; align-items: start; }
  .footer-grid > :last-child { padding-right: 0.5rem; padding-left: 0.25rem; }
}

/* accessible focus style */
a:focus-visible, button:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(34,197,94,0.08); border-radius: 6px; }
</style>
