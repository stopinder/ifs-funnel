<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
</script>

<template>
  <!-- ABOUT SECTION – PANEL STYLE FOR VISUAL CONSISTENCY -->
  <section
      id="about"
      class="relative px-6 pt-16 pb-20 bg-[#f3e8dd] text-[#4a4743] transition-colors-bg duration-300 ease-subtle"
      itemscope
      itemtype="https://schema.org/Person"
      aria-labelledby="about-heading"
  >
    <!-- soft ambient haze (top + bottom) -->
    <div
        class="absolute top-16 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-64
             bg-[radial-gradient(circle_at_top,rgba(195,158,138,0.18),transparent_70%)]
             blur-3xl pointer-events-none"
        aria-hidden="true"
    ></div>
    <div
        class="absolute bottom-0 right-1/2 translate-x-1/2 w-[70%] max-w-lg h-64
             bg-[radial-gradient(circle_at_bottom,rgba(210,174,145,0.2),transparent_70%)]
             blur-3xl opacity-60 pointer-events-none"
        aria-hidden="true"
    ></div>

    <!-- CONTENT PANEL -->
    <div
        class="relative z-10 bg-[#f9f3ee] rounded-2xl shadow-soft border border-[#e4d9d1]
             max-w-3xl mx-auto px-6 md:px-10 py-12"
    >
      <header class="text-center mb-10">
        <h2
            id="about-heading"
            class="text-3xl md:text-4xl font-serif font-semibold text-[#3c3a36] leading-snug"
            itemprop="name"
        >
          About Robert Ormiston
        </h2>

        <div class="mt-3 mx-auto h-1 w-16 bg-[#c39e8a] rounded" aria-hidden="true"></div>
      </header>

      <!-- Introductory Paragraphs -->
      <div class="text-[1.05rem] md:text-lg leading-relaxed space-y-6 text-[#4a4743]" itemprop="description">
        <p>
          I’m a psychotherapist with over 25 years’ experience in mental health, including clinical
          leadership within the NHS. I work to help people understand their inner world, meet painful
          parts with compassion, and recover a steadier sense of self and purpose.
        </p>

        <p>
          My practice is informed by
          <span class="italic">Internal Family Systems (IFS)</span> and
          <span class="italic">EMDR</span>. I combine trauma-informed methods with reflective writing
          and clear, practical summaries so clients leave sessions with clarity and an easy next step.
        </p>
      </div>

      <!-- Read More Toggle -->
      <div class="mt-8 text-center">
        <button
            @click="expanded = !expanded"
            class="inline-flex items-center gap-2 text-sm font-semibold rounded-full
            px-5 py-2 bg-[#f9f3ee] hover:bg-[#eadace]
            text-[#3c3a36]
            border border-[#e4d9d1]
            shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c39e8a]/40
            transition-all duration-300 ease-subtle"
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
      <transition name="fade-slide">
        <div
            v-if="expanded"
            id="fullBio"
            class="mt-10 space-y-5 text-[#4a4743] leading-relaxed text-[1.05rem]"
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

          <p class="italic mt-6 text-[#5a5753] text-center">– Robert Ormiston</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(.2,.9,.2,1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
