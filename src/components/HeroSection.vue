<script setup lang="ts">
import { ref } from 'vue'

const mailtoHref =
    "mailto:emdrifs@robormiston.com?subject=Therapy%20enquiry"

const profileJpg = '/images/profile.jpg'
const imgEl = ref(null)

function scrollTo(selector: string) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
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
  <!-- HERO – REFINED BALANCED VARIANT -->
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center px-6 py-20 bg-[#f4ebe1] text-[#4a4743] overflow-hidden"
      aria-label="Hero section"
  >
    <!-- Layered background -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-[#f9f3ee] via-[#f4ebe1] to-[#ecd7c5]"></div>
      <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_45%),radial-gradient(circle_at_90%_100%,rgba(210,174,145,0.25)_0%,rgba(210,174,145,0)_55%)] opacity-80"
      ></div>
      <!-- subtle warm vignette -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,174,145,0.12)_0%,transparent_70%)]"></div>
    </div>

    <!-- CONTENT LAYOUT -->
    <div
        class="relative z-10 mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-16"
    >
      <!-- TEXT BLOCK -->
      <div class="flex-1 max-w-xl">
        <p class="text-xs font-medium tracking-[0.18em] text-slate-700 uppercase">
          IFS &amp; EMDR-informed
        </p>

        <p class="mt-3 text-lg font-medium text-[#5a5753]">
          Chrysalis Psychotherapy Services
        </p>

        <h1
            id="hero-title"
            class="mt-8 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-snug text-[#3c3a36]"
        >
          For adults who feel overwhelmed, worn down, or carrying too much on the inside.
        </h1>

        <p
            id="hero-intro"
            class="mt-5 text-base md:text-lg text-slate-700 leading-relaxed"
        >
          We work at a steady pace, focused on what’s really happening underneath. No pressure
          to be “sorted” — just clear, grounded space to help your system settle and find its
          bearings again.
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-col sm:flex-row md:justify-start sm:items-center gap-3 sm:gap-4">
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

        <p class="mt-6 text-xs text-slate-600 leading-relaxed">
          Online sessions for adults. MBACP Registered. 15+ years’ experience.
        </p>
      </div>

      <!-- PORTRAIT -->
      <div
          class="relative flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto md:self-center lg:self-end"
      >
        <!-- soft warm glow behind portrait -->
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,240,225,0.6)_0%,rgba(244,235,225,0)_70%)] scale-125 blur-2xl opacity-70"
            aria-hidden="true"
        ></div>

        <div
            class="relative bg-[#f9f3ee] border border-[#e4d9d1] rounded-lg p-1 shadow-soft"
        >
          <picture>
            <img
                :src="profileJpg"
                alt="Portrait of psychotherapist Robert Ormiston"
                class="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-[#c39e8a]"
                width="240"
                height="240"
                loading="lazy"
                decoding="async"
                @error="handleImgError"
                ref="imgEl"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
