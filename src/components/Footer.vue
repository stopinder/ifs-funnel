<template>
  <footer
      id="footer"
      class="relative px-6 py-8 md:py-12 text-slate-300 overflow-hidden border-t border-slate-700 bg-cover bg-center"
      :style="`background-image: url('${backgroundImage}');`"
      role="contentinfo"
  >
    <!-- radial glow (decorative) -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0 pointer-events-none" aria-hidden="true"></div>

    <!-- main two-column grid -->
    <div class="relative z-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center md:text-left footer-grid">

      <!-- LEFT: credentials/text -->
      <div class="space-y-3 text-[12px] md:text-sm text-slate-400 leading-relaxed">
        <p>
          Registered Member <strong>MBACP</strong> (Membership No. 00948196) ·
          <a href="https://www.bacp.co.uk" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-slate-100 underline/50">
            British Association for Counselling and Psychotherapy
          </a>
          · Confidential & Secure
        </p>

        <p>
          Graduate of the
          <a href="https://www.chi.ac.uk" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-slate-100 underline/50">University of Chichester</a>
          · Trained at
          <a href="https://www.syzygy.org.uk" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-slate-100 underline/50">SYZERGY</a>
          · EMDR trained with
          <a href="https://emdrmasterclass.com" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-slate-100 underline/50">EMDR Masterclass</a>
        </p>

        <!-- microcopy toggle: optional expanded text for practitioners -->
        <div>
          <button
              @click="expanded = !expanded"
              class="text-sm text-slate-300 underline/50 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6f47c0]/12 rounded px-1 py-0.5"
              :aria-expanded="expanded.toString()"
              aria-controls="footerExtra"
          >
            {{ expanded ? 'Hide details' : 'More about clinical background' }}
          </button>

          <div v-if="expanded" id="footerExtra" class="mt-3 text-slate-300 text-sm leading-relaxed">
            <p>
              Clinical leadership roles within the NHS, commissioning for psychiatric services, and contributions to policy and training. I combine trauma-informed approaches with practical summaries to support clinicians and clients between sessions.
            </p>
          </div>
        </div>

        <p class="text-xs text-slate-400 mt-2">© {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved</p>
      </div>

      <!-- RIGHT: profile image + socials -->
      <div class="flex flex-col items-center md:items-end gap-3">
        <figure class="flex flex-col items-center md:items-end">
          <!-- optimized profile image: ensure the source files exist in /public -->
          <img
              src="/profile.jpg"
              srcset="/profile.jpg 400w, /profile.jpg 800w, /profile.jpg 1200w"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
              alt="Portrait of psychotherapist Robert Ormiston"
              class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-amber-200/30 shadow-md"
              width="288" height="288"
              loading="eager"
              decoding="async"
              fetchpriority="high"
          />


          <figcaption class="mt-2 text-sm text-slate-400 text-center md:text-right">
            Robert Ormiston — Psychotherapist
          </figcaption>
        </figure>

        <!-- socials under the image (44px targets) -->
        <div class="mt-2">
          <FooterSocials />
        </div>
      </div>
    </div>

    <!-- footer nav (compact) -->
    <nav class="mt-8 flex flex-wrap justify-center gap-2 md:gap-4 text-sm z-20 relative" aria-label="Footer navigation">
      <a href="#about" class="px-2 py-1 rounded hover:bg-slate-800 transition">About</a>
      <a href="#faq" class="px-2 py-1 rounded hover:bg-slate-800 transition">FAQ</a>
      <a href="#testimonials" class="px-2 py-1 rounded hover:bg-slate-800 transition">Client Reflections</a>
      <a href="/terms.html" target="_blank" rel="noopener noreferrer" class="text-slate-400 text-xs underline/50 hover:text-slate-200 px-2 py-1">Terms & Privacy</a>
      <a href="#offer" class="px-2 py-1 rounded hover:bg-slate-800 transition">Book a Session</a>
    </nav>

    <!-- Back-to-top (with polite aria-live for screen reader feedback) -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-lg transition-opacity duration-300"
        aria-label="Back to Top"
    >
      ↑
    </button>
    <span class="sr-only" aria-live="polite" ref="liveAnnounce">{{ liveMessage }}</span>

    <!-- overlay to improve contrast; variable alpha for easy tuning -->
    <div class="absolute inset-0 z-10 pointer-events-none" aria-hidden="true" :style="overlayStyle"></div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSocials from './FooterSocials.vue'

/* CONFIG */
const backgroundImage = '/forest-floor.jpg'  // (provide optimized versions if possible)
const overlayStyle =
    'background: linear-gradient(to bottom, rgba(17,24,39,var(--overlay-alpha,0.32)), rgba(28,33,50,0.42) 50%, rgba(24,26,47,0.56));'

/* local state */
const expanded = ref(false)
const showScrollTop = ref(false)
const liveMessage = ref('')

/* scrolling */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  liveMessage.value = 'Scrolling to top'
  setTimeout(() => { liveMessage.value = '' }, 1500)
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
footer { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

/* respect reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
}

/* overlay alpha CSS var for quick tweaks */
:root { --overlay-alpha: 0.32; }

/* top fade */
footer::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(17,24,39,0.9));
  z-index: 1;
}

/* unified overlay, uses overlayStyle from script for extra flexibility */
#footer::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(17,24,39,0.18), rgba(28,33,50,0.32), rgba(24,26,47,0.48));
  pointer-events: none;
}

/* small screen portrait sizing tweak */
@media (max-width: 480px) {
  .w-28 { width: 7rem; height: 7rem; } /* portrait */
}

/* accessible focus style (extra contrast for keyboard users) */
a:focus-visible, button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 6px rgba(111,71,192,0.09);
  border-radius: 8px;
}
/* surgical layout tweak: keep right col compact and pull columns closer */
.footer-grid {
  /* default single-column on small screens (already handled by grid-cols-1) */
  grid-template-columns: 1fr;
  column-gap: 1rem; /* extra safety */
}

/* desktop: main content flexible, right column stays compact */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr minmax(180px, 320px); /* change 320px lower/upper to taste */
    column-gap: 0.75rem; /* smaller than before */
    align-items: center;
  }

  /* make the right column content align a touch inward (reduce right-side visual gap) */
  .footer-grid > :last-child {
    padding-right: 0.5rem;
    padding-left: 0.25rem;
  }
}

</style>




