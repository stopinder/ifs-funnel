<template>
  <section
      id="about"
      class="relative px-6 py-24 max-w-5xl mx-auto text-white overflow-visible bg-[url('/horizon.jpg')] bg-cover bg-center bg-no-repeat"
      itemscope
      itemtype="https://schema.org/Person"
  >
    <!-- Soft navy gradient background overlay -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b]/80 via-[#20233e]/80 to-[#181a2f]/80"></div>

    <!-- Optional soft radial glow behind portrait -->
    <div
        class="absolute top-32 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,165,93,0.15),transparent_70%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- MAIN CONTENT -->
    <div
        class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left"
    >
      <!-- PORTRAIT -->
      <div class="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <img
            src="/profile.jpg"
            alt="Portrait of psychotherapist Robert Ormiston"
            class="w-44 h-44 rounded-full object-cover border-4 border-amber-200/60 shadow-lg shadow-amber-900/30 mx-auto md:mx-0"
            itemprop="image"
        />
      </div>

      <!-- TEXT BLOCK -->
      <div class="max-w-2xl">
        <h2 class="text-3xl font-serif font-semibold mb-6 text-amber-100" itemprop="name">
          About Robert Ormiston
        </h2>

        <p class="text-slate-100 mb-6 leading-relaxed" itemprop="description">
          I’m a psychotherapist with over 25 years of experience in mental health — including
          clinical leadership roles within the NHS. Across these decades, my focus has remained
          steady: helping people understand their inner world, meet their pain with compassion,
          and rediscover the quiet strengths that sustain them.
        </p>

        <p class="text-slate-200 mb-8 leading-relaxed">
          Informed by
          <span class="italic" itemprop="knowsAbout">Internal Family Systems (IFS)</span> and
          <span class="italic" itemprop="knowsAbout">EMDR</span>, my work rests on a simple premise:
          healing grows where safety and awareness meet. I bring a reflective, symbolic, and
          integrative approach — one that holds both the science of trauma and the poetry of
          meaning — and I aim to offer a grounded space where clarity, coherence, and genuine
          connection can emerge in their own time.
        </p>

        <!-- Toggle Button -->
        <button
            @click="expanded = !expanded"
            class="text-sm bg-amber-100 text-slate-900 font-semibold rounded-full px-5 py-2 hover:bg-amber-200 transition focus:outline-none focus:ring-4 focus:ring-amber-400/40"
            :aria-expanded="expanded.toString()"
            aria-controls="fullBio"
        >
          {{ expanded ? 'Hide Full Bio' : 'Read More About My Background' }}
        </button>

        <!-- Full Bio -->
        <transition name="slide-fade">
          <div
              v-if="expanded"
              id="fullBio"
              class="mt-8 space-y-4 text-slate-200 leading-relaxed"
          >
            <p>
              My early clinical career unfolded during a period of profound transformation in
              psychiatric care across the UK. I worked on commissioning teams for several landmark
              projects that reshaped how mental-health services were delivered — from the first
              Psychiatric Intensive Care Unit at Hackney Hospital to new community mental-health
              hospitals in East Sussex and at St Bartholomew’s Hospital, London.
            </p>

            <p>
              These experiences deepened my conviction that meaningful change begins in
              relationship — whether within large healthcare systems or within the psyche itself.
              Alongside clinical work, I participated in international forums on eating disorders
              and contributed to policy development, strengthening my belief that genuine
              innovation in mental health arises through cooperation — between professions,
              between ideas, and between human beings.
            </p>

            <p>
              During the pandemic, my focus evolved toward bridging psychotherapy and technology.
              I trained as a prompt engineer and full-stack developer, designing therapeutic tools
              and systems that help clinicians reflect, integrate, and protect the human presence at
              the heart of care.
            </p>

            <p>
              I am a registered member of the
              <span class="italic" itemprop="affiliation">British Association for Counselling and Psychotherapy (BACP)</span>
              and remain committed to reflective, trauma-informed practice.
            </p>

            <hr class="my-8 border-amber-100/20" />

            <p class="text-slate-300 leading-relaxed mt-6">
              Over time, my focus has shifted from traditional talk therapy toward something quieter
              and more integrative. Healing rarely comes from more words — it comes from how we pay
              attention. This reflection has shaped how I now work with clients and therapists
              alike.
            </p>

            <p class="mt-4">
              <a
                  href="#philosophy"
                  class="text-amber-200 hover:text-amber-100 underline/50 text-sm"
              >
                Read more about my philosophy of practice ↓
              </a>
            </p>
          </div>
        </transition>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center relative z-10">
      <BookCta />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
/* Slide-fade animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

