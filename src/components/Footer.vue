<template>
  <footer
      id="footer"
      class="relative px-6 py-8 md:py-12 text-slate-800 bg-slate-50 border-t border-slate-200"
      role="contentinfo"
  >
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">

      <!-- Inline legal preview if we're already on /terms -->
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
          This service is provided by Robert Ormiston (MBACP). Your sessions are confidential and
          handled in line with the BACP Ethical Framework and UK GDPR. This is not an emergency
          service. If you are at immediate risk, contact local emergency services, NHS 111/999,
          your GP, or crisis support.
        </p>

        <p class="text-sm text-slate-700">
          Clinical notes are stored securely, typically for up to 7 years after therapy ends.
          You can request access to your information and ask questions about how it is used.
        </p>
      </div>

      <!-- TIER 1: Identity / Info / Contact -->
      <!-- On mobile: stacked column. On desktop: centered row with gap. -->
      <div
          class="flex flex-col md:flex-row md:justify-center md:gap-12 md:text-left text-left items-start"
      >
        <!-- LEFT BLOCK: credentials / background -->
        <div class="max-w-[28rem] text-sm text-slate-600 leading-relaxed space-y-4">
          <div>
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
                  href="https://www.emdrmasterclass.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-700 hover:text-slate-900"
              >
                EMDR Masterclass
              </a>
            </p>
          </div>

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
                Experience includes: clinical leadership in NHS settings, commissioning for
                psychiatric services, and contributions to training and policy. My work is
                trauma-informed and aims to give you practical clarity between sessions, not
                just “see you next week.”
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT BLOCK: practice / reassurance / contact / socials -->
        <div class="max-w-[20rem] text-left text-slate-600 leading-relaxed space-y-4 mt-8 md:mt-0">
          <div class="space-y-1">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-medium">
              Practice
            </p>
            <p class="text-sm font-medium text-slate-800">
              Chrysalis Psychotherapy
            </p>
            <p class="text-sm text-slate-600">
              Robert Ormiston — Psychotherapist
            </p>
          </div>

          <div class="text-xs text-slate-600 leading-relaxed">
            <p>Confidential. Trauma-informed. GDPR aligned. Clinically supervised.</p>
          </div>

          <!-- Contact button -->
          <div>
            <a
                :href="mailtoHref"
                class="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300
                       bg-white text-slate-800 text-sm font-medium hover:bg-slate-100
                       focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
                role="button"
            >
              Contact Robert
            </a>
          </div>

          <!-- Social icons -->
          <div class="pt-2">
            <FooterSocials />
          </div>
        </div>
      </div>

      <!-- TIER 2: Legal / Copyright -->
      <div class="flex flex-col items-center text-center gap-4">
        <router-link
            to="/terms"
            class="text-slate-500 text-xs underline underline-offset-2 hover:text-slate-700"
        >
          Terms &amp; Privacy
        </router-link>

        <p class="text-xs text-slate-500">
          © {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved
        </p>
      </div>
    </div>

    <!-- Back to top button -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full
         bg-amber-500 border border-amber-500 text-white text-sm font-medium
         hover:bg-amber-600 hover:border-amber-600 shadow-lg transition-opacity duration-300
         focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
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

// detect if we're on /terms so we can render the inline legal summary
const route = useRoute()
const isOnTermsPage = route.name === 'terms'

// email CTA
// NOTE: using the address you provided
const emailAddress = 'chrysalisifs.rubalmuston.com'
const subject = 'Therapy enquiry'
const body = [
  'Hi Robert,',
  '',
  "I'd like to ask about therapy / booking a session.",
  '',
  'I’m getting in touch because...'
].join('%0D%0A')

const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${body}`

// expand/collapse for clinical background block
const expanded = ref(false)

// back-to-top button logic
const showScrollTop = ref(false)
const liveMessage = ref('')
const liveAnnounce = ref(null)

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
  box-shadow: 0 0 0 4px rgba(251,191,36,0.28); /* amber glow on keyboard focus */
  border-radius: 6px;
}

</style>
