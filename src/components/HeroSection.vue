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
  <!-- HERO – VERSION A: CLEAN CLINICAL -->
  <!-- HERO – VERSION B: WARM DEPTH & RELATIONAL -->
  <!-- HERO – VERSION C: MIDNIGHT PREMIUM CLINICAL -->
  <!-- HERO – VERSION B: WARM DEPTH & RELATIONAL -->
  <!-- HERO – VERSION A: CLEAN CLINICAL -->
  <!-- HERO – VERSION A (NON-CLINICAL, GROUNDED) -->
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center px-6 py-16 bg-[#f7f3ee] text-slate-900"
      aria-label="Hero section"
  >

    <!-- Soft warm glow (no darkness, no rain) -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_70%)] opacity-80"
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
          class="mt-6 text-3xl md:text-4xl font-semibold leading-snug text-slate-900"
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
        <a
            :href="mailtoHref"
            class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium
               bg-amber-500 text-white shadow-sm hover:bg-amber-600
               focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300
               transition-all duration-200"
        >
          Contact me
        </a>

        <button
            @click.prevent="scrollTo('#philosophy')"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-slate-300
               bg-white text-slate-800 hover:bg-slate-50
               shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-200 text-sm"
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
