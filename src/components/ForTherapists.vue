<template>
  <section
      id="for-therapists"
      ref="therapistSection"
      class="relative px-6 py-24 max-w-6xl mx-auto
             bg-[#f3e8dd] text-[#4a4743]
             transition-colors-bg duration-300 ease-subtle
             opacity-0 translate-y-4
             motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out"
      aria-label="Information for therapists and practitioners"
  >
    <!-- subtle warm radial haze behind panel -->
    <div
        class="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-64
               bg-[radial-gradient(circle_at_top,rgba(195,158,138,0.18),transparent_70%)]
               blur-3xl pointer-events-none"
        aria-hidden="true"
    ></div>

    <!-- contained panel -->
    <div
        class="relative z-10 bg-[#f9f3ee] rounded-2xl shadow-soft border border-[#e4d9d1]
               max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center"
    >
      <h2
          class="text-3xl md:text-4xl font-serif font-semibold text-[#3c3a36] leading-snug"
      >
        For Therapists &amp; Practitioners
      </h2>

      <div
          class="mt-4 mx-auto h-1 w-16 bg-[#c39e8a] rounded"
          aria-hidden="true"
      ></div>

      <p
          class="text-base md:text-lg leading-relaxed text-[#4a4743] max-w-2xl mx-auto mt-6"
      >
        This reflective framework can be woven into your own therapeutic or
        supervisory practice. It supports therapist-guided session summaries and
        process notes that help clients between sessions, without drifting into
        clinical jargon or generic auto-generated language.
      </p>

      <p
          class="italic text-sm md:text-base text-[#6e6a66] max-w-2xl mx-auto mt-4 leading-relaxed"
      >
        It’s intended for clinicians who value precision, ethics, and depth —
        where technology serves reflection, and reflection serves care.
      </p>

      <p
          class="text-sm text-[#6e6a66] max-w-xl mx-auto mt-6 leading-relaxed"
      >
        I offer 1:1 consultation for therapists and supervisors who want to
        introduce reflective summaries safely, meaningfully, and in line with
        their existing way of working.
      </p>

      <!-- CTA Button -->
      <div class="mt-8">
        <a
            :href="mailtoHref"
            @click="handleMailtoClick"
            class="inline-flex items-center justify-center gap-2
                   px-6 py-3 rounded-lg font-semibold text-white
                   bg-[#3c3a36] hover:bg-[#6d5f52]
                   shadow-glow
                   transition-colors-bg duration-200 ease-subtle
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c39e8a]/40"
            aria-label="Contact Robert about reflective integration support for therapists"
        >
          <!-- Envelope Icon -->
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
              aria-hidden="true"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.723 1.665l-7.5 6.75a2.25 2.25 0 01-3.054 0l-7.5-6.75A2.25 2.25 0 012.25 6.993V6.75"
            />
          </svg>

          <span>Contact me</span>
        </a>

        <p class="text-xs text-[#6e6a66] mt-3 leading-relaxed">
          Confidential, collegial, and clinically grounded.
        </p>
      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const therapistSection = ref(null)

// therapist-facing mailto
const emailAddress = 'emdrifs@robormiston.com'
const subject = 'Reflective integration / supervision enquiry'
const bodyLines = [
  'Hi Robert,',
  '',
  "I'm getting in touch about reflective integration / supervision.",
  '',
  'A brief outline of my current practice and what I am looking for:',
  '',
]
const body = bodyLines.join('\n')

const mailtoHref =
    `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

function handleMailtoClick() {
  // optional hook for analytics
}

// ❗ FIXED — plain JS, no types
let observer = null

onMounted(() => {
  const el = therapistSection.value
  if (!el) return

  const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    el.classList.remove('opacity-0', 'translate-y-4')
    el.classList.add('opacity-100', 'translate-y-0')
    return
  }

  observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && el) {
            el.classList.remove('opacity-0', 'translate-y-4')
            el.classList.add('opacity-100', 'translate-y-0')
            observer && observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
  )

  observer.observe(el)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>


<style scoped>
/* Typography alignment with rest of site */
h2,
h3 {
  font-family: Lora, Georgia, serif;
}
p,
a,
span,
button {
  font-family: Inter, system-ui, sans-serif;
}
</style>
