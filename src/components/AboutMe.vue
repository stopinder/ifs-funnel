<template>
  <section
      id="about"
      class="relative px-6 py-20 max-w-5xl mx-auto
         bg-[#f3e8dd] text-[#4a4743]
         transition-colors-bg duration-300 ease-subtle"

      itemscope
      itemtype="https://schema.org/Person"
      aria-labelledby="about-heading"
  >
    <!-- subtle radial teal glow -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         w-96 h-96 bg-[#e8d3c4] rounded-full blur-3xl opacity-40 pointer-events-none"

        aria-hidden="true"
    ></div>

    <!-- MAIN CONTENT -->
    <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
      <!-- PORTRAIT -->
      <div class="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <div
            class="bg-[#f9f3ee] border border-[#e4d9d1]
         rounded-lg p-1 shadow-soft"
        >

        >
          <picture>
            <img
                :src="profileJpg"
                alt="Portrait of psychotherapist Robert Ormiston"
                class="w-44 h-44 rounded-full object-cover border-2 border-[#c39e8a]"

                itemprop="image"
                width="176"
                height="176"
                loading="lazy"
                decoding="async"
                @error="handleImgError"
                ref="imgEl"
            />
          </picture>
        </div>
      </div>

      <!-- TEXT BLOCK -->
      <div class="max-w-2xl">
        <h2
            id="about-heading"
            class="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#3c3a36]"

            itemprop="name"
        >
          About Robert Ormiston
        </h2>

        <!-- accent bar -->
        <div class="w-14 h-1 bg-[#c39e8a] rounded mb-6" aria-hidden="true"></div>


        <p class="text-lg mb-6 leading-relaxed text-[#4a4743]" itemprop="description">

        I’m a psychotherapist with over 25 years’ experience in mental health, including clinical leadership
          within the NHS. I work to help people understand their inner world, meet painful parts with compassion,
          and recover a steadier sense of self and purpose.
        </p>

        <p class="text-base mb-6 leading-relaxed text-[#4a4743]">

        My practice is informed by
          <span class="italic">Internal Family Systems (IFS)</span> and
          <span class="italic">EMDR</span>. I combine trauma-informed methods with reflective writing and clear,
          practical summaries so clients leave sessions with clarity and an easy next-step.
        </p>

        <!-- Toggle Button -->
        <div class="mt-2">
          <button
              @click="expanded = !expanded"
              class="inline-flex items-center gap-2 text-sm font-semibold rounded-full
       px-4 py-2 bg-[#f9f3ee] hover:bg-[#eadace]
       text-[#3c3a36]
       border border-[#e4d9d1]
       shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c39e8a]/40
       transition-colors-bg duration-200 ease-subtle"

              :aria-expanded="expanded.toString()"
              aria-controls="fullBio"
          >
            <span>{{ expanded ? 'Hide Full Bio' : 'Read More About My Background' }}</span>
            <svg
                v-if="!expanded"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 5v14M5 12h14"
              />
            </svg>
            <svg
                v-else
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
              />
            </svg>
          </button>
        </div>

        <!-- Full Bio -->
        <transition name="slide-fade">
          <div
              v-if="expanded"
              id="fullBio"
              class="mt-8 space-y-4 text-[#4a4743] leading-relaxed"
          >

          <p>
              My early career unfolded during major shifts in UK psychiatric care. I was involved in commissioning
              projects including the psychiatric intensive care unit at Hackney Hospital and early developments at
              St Bartholomew’s. These roles shaped my practical approach to systems, safety, and service design.
            </p>

            <p>
              I’ve worked on national panels about eating disorders, collaborated on nursing protocol development,
              and maintained a strong interest in how clinical theory translates into day-to-day practice.
            </p>

            <p>
              More recently I’ve focused on integrating psychotherapy with digital tools — building practical
              systems that help clinicians reflect and clients to stay connected to what matters between sessions.
            </p>

            <p>
              I remain a registered member of the British Association for Counselling and Psychotherapy (BACP)
              and continue ongoing training in EMDR-informed IFS approaches.
            </p>
          </div>
        </transition>
      </div>
    </div>

    <!-- CTA below profile -->
    <div class="mt-12 text-center">
      <!-- intentionally left empty -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const profileJpg = '/images/profile.jpg'
const imgEl = ref(null)
const expanded = ref(false)

function handleImgError(e) {
  const failed = (e && e.target && e.target.src) || profileJpg
  console.warn('Profile image failed to load:', failed)
  if (e && e.target) {
    e.target.src =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="176" height="176"><rect width="100%" height="100%" fill="%23F8F4EA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Arial" font-size="14">Profile</text></svg>'
  }
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(.2,.9,.2,1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>

