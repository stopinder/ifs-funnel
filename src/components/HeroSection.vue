<script setup lang="ts">
import { ref } from 'vue'

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
      class="relative min-h-[80vh] flex items-center px-6 pt-20 pb-24 bg-[#f9f3ee] text-[#4a4743] overflow-hidden"
      aria-label="Hero section"
  >
    <!-- BACKGROUND - Simplified and cleaner -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-[#f9f3ee]"></div>
      <div
          class="absolute inset-0 opacity-40
               bg-[radial-gradient(circle_at_70%_20%,rgba(45,74,67,0.05)_0%,transparent_50%)]"
      ></div>
    </div>

    <!-- CONTENT -->
    <div class="relative z-10 mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <!-- TEXT -->
      <div class="flex-1 max-w-2xl text-center md:text-left">
        <h1
            id="hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#3c3a36] leading-tight"
        >
          Robert Ormiston
        </h1>

        <p class="mt-4 text-lg md:text-xl text-[#5a5753] font-medium tracking-wide uppercase">
          Clinician &middot; Psychotherapist &middot; Writer &middot; Builder
        </p>

        <div class="mt-10 space-y-6 text-lg md:text-xl text-[#4a4743] leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            I've spent more than four decades working in and around mental health — from acute and forensic services to community care, psychotherapy, clinical leadership and service development.
          </p>
          <p>
            Alongside clinical practice, my work has included journalism, writing and international professional exchange. I'm interested in people, ideas and the systems we build around both.
          </p>
          <p>
            I'm currently bringing those strands together in <span class="font-semibold text-[#2d4a43]">Helios</span>, a clinical workspace designed around how therapists actually think and work.
          </p>
        </div>

        <!-- CTA -->
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
          <a
              href="https://therapyworks.works"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold
                   bg-[#2d4a43] text-[#f9f3ee]
                   shadow-sm
                   hover:bg-[#3d5a53]
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2d4a43]/30
                   transition-all duration-200"
          >
            Explore Helios &rarr;
          </a>

          <button
              type="button"
              @click.prevent="scrollTo('#about')"
              class="text-sm font-semibold text-[#5a5753] hover:text-[#3c3a36]
                   transition-colors duration-200 border-b border-transparent hover:border-[#3c3a36]"
          >
            My work
          </button>
        </div>
      </div>

      <!-- PORTRAIT -->
      <div class="relative flex-shrink-0 w-64 md:w-72 lg:w-96 grayscale-[20%] contrast-[1.05]">
        <div class="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-white/20">
          <img
              ref="imgEl"
              src="/images/profile.png"
              alt="Portrait of Robert Ormiston"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              @error="handleImgError"
          />
        </div>
      </div>
    </div>
  </section>
</template>
