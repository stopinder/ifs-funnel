<script setup lang="ts">
import { ref } from 'vue'

const mailtoHref =
    'mailto:emdrifs@robormiston.com?subject=Therapy%20enquiry'

const imgEl = ref<HTMLImageElement | null>(null)

function scrollTo(selector: string) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleImgError(e: Event) {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="100%" height="100%" fill="%23F8F4EA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Arial" font-size="14">Profile</text></svg>'
  }
}
</script>

<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-start px-6 pt-12 pb-20 bg-[#f4ebe1] text-[#4a4743] overflow-hidden"
      aria-label="Hero section"
  >
    <!-- BACKGROUND -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-[#f9f3ee] via-[#f4ebe1] to-[#ecd7c5]"></div>
      <div
          class="absolute inset-0 opacity-80
               bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_45%),
                   radial-gradient(circle_at_90%_100%,rgba(210,174,145,0.25)_0%,rgba(210,174,145,0)_55%)]"
      ></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,174,145,0.12)_0%,transparent_70%)]"></div>
    </div>

    <!-- CONTENT -->
    <div class="relative z-10 mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-16">
      <!-- TEXT -->
      <div class="flex-1 max-w-xl -mt-2">
        <p
            class="inline-block text-[11px] font-bold tracking-[0.25em] uppercase
                 text-[#243040] border-b border-[#243040]/30 pb-1"
        >
          IFS &amp; EMDR-informed
        </p>

        <p class="mt-3 text-lg font-semibold text-[#5a5753]">
          Chrysalis Psychotherapy Services
        </p>

        <h1
            id="hero-title"
            class="mt-8 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-snug text-[#3c3a36]"
        >
          A steady, reflective space for adults navigating overwhelm, sustained pressure, or inner strain.
        </h1>

        <p
            id="hero-intro"
            class="mt-5 text-base md:text-lg text-slate-700 leading-relaxed"
        >
          Our work focuses on what’s happening beneath the surface, approached carefully and without urgency.
          Rather than pushing for solutions, we create the conditions for your system to stabilise, orient,
          and respond with greater coherence over time.
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <a
              :href="mailtoHref"
              class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium
                   bg-[#3c3a36] text-[#f9f3ee]
                   shadow-[0_10px_30px_rgba(44,35,28,0.18)]
                   hover:bg-[#6d5f52]
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c39e8a]/45
                   transition-all duration-200"
          >
            Contact me
          </a>

          <button
              type="button"
              @click.prevent="scrollTo('#philosophy')"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-md
                   border border-[#e4d9d1]
                   bg-[#f9f3ee]/90
                   text-sm font-medium text-[#4a4743]
                   hover:bg-[#f3e8dd]
                   shadow-sm
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c39e8a]/35
                   transition-all duration-200"
          >
            How I work
          </button>
        </div>
      </div>

      <!-- PORTRAIT -->
      <div class="relative flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,240,225,0.6)_0%,rgba(244,235,225,0)_70%)]
                 scale-125 blur-2xl opacity-70"
            aria-hidden="true"
        ></div>

        <div class="relative w-56 md:w-64 lg:w-80 overflow-hidden">
          <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,240,225,0.5)_0%,rgba(244,235,225,0)_70%)]
                   blur-2xl opacity-50 scale-110"
              aria-hidden="true"
          ></div>

          <img
              ref="imgEl"
              src="/images/profile.png"
              alt="Portrait of psychotherapist Robert Ormiston"
              class="relative z-10 w-full h-auto object-contain drop-shadow-[0_6px_12px_rgba(60,58,54,0.18)]"
              width="320"
              height="320"
              loading="lazy"
              decoding="async"
              @error="handleImgError"
          />

          <div
              class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4ebe1] via-transparent to-transparent z-20 pointer-events-none"
              aria-hidden="true"
          ></div>
        </div>

        <!-- CREDENTIALS -->
        <div class="mt-4 max-w-[14rem] mx-auto text-center">
          <p class="text-sm font-bold text-[#4a4743]">
            Online sessions for adults,<br />
            couples &amp; children
          </p>
          <p class="mt-1 text-sm font-bold text-[#4a4743]">
            MBACP Registered
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
