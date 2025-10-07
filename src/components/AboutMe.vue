<template>
  <section
      id="about"
      class="relative px-6 py-24 max-w-5xl mx-auto text-white overflow-hidden"
      itemscope
      itemtype="https://schema.org/Person"
  >
    <!-- ⭐ STARFIELD BACKGROUND -->
    <div class="absolute inset-0 z-0 animate-stars pointer-events-none"></div>

    <div
        class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left"
    >
      <!-- PROFILE IMAGE -->
      <div class="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <img
            src="/profile.jpg"
            alt="Portrait of psychotherapist Robert Ormiston"
            class="w-44 h-44 rounded-full object-cover border border-slate-700 shadow-md mx-auto md:mx-0"
            itemprop="image"
        />
      </div>

      <!-- TEXT BLOCK -->
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold mb-6" itemprop="name">About Robert Ormiston</h2>

        <p class="text-slate-200 mb-6 leading-relaxed" itemprop="description">
          I’m a psychotherapist and the founder of
          <span class="font-semibold" itemprop="affiliation">Heliosynthesis</span>,
          with over 25 years of experience in mental health — including clinical
          leadership roles within the NHS. Across these decades, my focus has remained
          steady: helping people understand their inner world, meet their pain with
          compassion, and rediscover the quiet strengths that sustain them.
        </p>

        <p class="text-slate-200 mb-8 leading-relaxed">
          My work is shaped by
          <span class="italic" itemprop="knowsAbout">Internal Family Systems (IFS)</span>
          and
          <span class="italic" itemprop="knowsAbout">EMDR</span>, and grounded in a
          belief that healing happens through relationship — with ourselves and with one
          another. I bring a reflective, symbolic, and relational approach: one that
          holds both the science of trauma and the poetry of meaning. My intention is to
          offer spaces of clarity, containment, and authentic connection.
        </p>

        <!-- TOGGLE BUTTON -->
        <button
            @click="expanded = !expanded"
            class="text-sm bg-white text-slate-900 font-semibold rounded-full px-5 py-2 hover:bg-slate-200 transition focus:outline-none focus:ring-4 focus:ring-purple-500/40"
            :aria-expanded="expanded.toString()"
            aria-controls="fullBio"
        >
          {{ expanded ? 'Hide Full Bio' : 'Read More About My Background' }}
        </button>

        <!-- SLIDE-DOWN FULL BIO -->
        <transition name="slide-fade">
          <div
              v-if="expanded"
              id="fullBio"
              class="mt-8 space-y-4 text-slate-300 leading-relaxed"
          >
            <p>
              My early clinical career was shaped by the transformation of psychiatric
              services in the UK. I worked on commissioning teams for several landmark
              projects — including the first psychiatric intensive care unit at Hackney
              Hospital, a community mental health hospital in East Sussex, and the
              mental-health unit at St Bartholomew’s Hospital under Professor
              Silverstone.
            </p>
            <p>
              At St Bart’s, I contributed to the pioneering
              <span class="italic">Project 2000 Nursing Curriculum</span>, integrating
              counselling and psychological models into traditionally custodial
              environments. These experiences deepened my belief that meaningful change
              begins in relationship — whether within systems or within the self.
            </p>
            <p>
              During the pandemic, I began bridging psychotherapy and technology,
              becoming a prompt engineer and full-stack developer. I now build
              AI-powered therapeutic tools, develop container-based applications for
              clinicians, and contribute to the evolving field of human–AI integration in
              mental health.
            </p>
            <p>
              I am a registered member of the
              <span class="font-semibold">British Association for Counselling and Psychotherapy (BACP)</span>
              and remain dedicated to reflective, trauma-informed care — helping both
              clients and practitioners work with clarity while reducing the
              administrative and emotional burden of clinical practice.
            </p>
          </div>
        </transition>
      </div>
    </div>
    <!-- Call to Action -->
    <div class="mt-12 text-center">
      <BookCta />
    </div>

  </section>
</template>

<script setup>
import BookCta from './BookCta.vue'

import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
@keyframes moveStars {
  from {
    background-position: 0 0, 50px 50px;
  }
  to {
    background-position: -1000px 1000px, -950px 1050px;
  }
}

.animate-stars {
  background: radial-gradient(white 1px, transparent 1px),
  radial-gradient(white 1px, transparent 1px);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  animation: moveStars 60s linear infinite;
  opacity: 0.15;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>

