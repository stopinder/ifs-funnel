<script setup lang="ts">
const mailtoHref =
    "mailto:emdrifs@robormiston.com?subject=Therapy%20enquiry";

function scrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>

<template>
  <!-- HERO – WARM, SUBTLE DEPTH VARIANT -->
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center px-6 py-16 bg-[#f4ebe1] text-[#4a4743]"
      aria-label="Hero section"
  >
    <!-- Subtle layered background (no dark mode, no stars) -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <!-- Gentle vertical gradient to avoid flatness -->
      <div
          class="absolute inset-0 bg-gradient-to-b from-[#f9f3ee] via-[#f4ebe1] to-[#ecd7c5]"
      ></div>

      <!-- Very soft warm haze, off-centre, for a bit of dimension -->
      <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_45%),radial-gradient(circle_at_90%_100%,rgba(210,174,145,0.25)_0%,rgba(210,174,145,0)_55%)] opacity-80"
      ></div>
    </div>

    <div class="relative z-10 mx-auto w-full max-w-3xl">

      <!-- Identity line -->
      <p class="text-xs font-medium tracking-[0.18em] text-slate-700 uppercase">
        IFS &amp; EMDR-informed
      </p>

      <!-- Practice name -->
      <p class="mt-3 text-lg font-semibold text-slate-900">
        Chrysalis Psychotherapy Services
      </p>

      <!-- Headline -->
      <h1
          id="hero-title"
          class="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-snug text-[#3c3a36] text-center md:text-left"
      >
        For adults who feel overwhelmed, worn down, or carrying too much on the inside.
      </h1>

      <!-- Subhead -->
      <p
          id="hero-intro"
          class="mt-4 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl"
      >
        We work at a steady pace, focused on what’s really happening underneath. No pressure
        to be “sorted” — just clear, grounded space to help your system settle and find its
        bearings again.
      </p>

      <!-- CTA -->
      <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <!-- Primary CTA -->
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

        <!-- Secondary CTA -->
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

      <!-- Trust line -->
      <p class="mt-6 text-xs text-slate-600 leading-relaxed">
        Online sessions for adults. MBACP Registered. 15+ years’ experience.
      </p>

    </div>
  </section>
</template>

