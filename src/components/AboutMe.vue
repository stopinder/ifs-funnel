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
          Informed by
          <span class="italic" itemprop="knowsAbout">Internal Family Systems (IFS)</span>
          and
          <span class="italic" itemprop="knowsAbout">EMDR</span>, my work rests on a simple
          premise: healing grows where safety and awareness meet. I bring a reflective,
          symbolic, and integrative approach — one that holds both the science of trauma and
          the poetry of meaning — and I aim to offer a grounded space where clarity,
          coherence, and genuine connection can emerge in their own time.
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
            <p class="text-slate-200 mb-8 leading-relaxed">
              My early clinical career unfolded during a period of profound transformation in psychiatric care across the UK.
              I worked on commissioning teams for several landmark projects that reshaped how mental-health services were delivered.
              These included the creation of the
              <span class="italic">first Psychiatric Intensive Care Unit (PICU) at Hackney Hospital</span>,
              the establishment of the
              <span class="italic">first community mental-health hospital in East Sussex</span>,
              and the development of the
              <span class="italic">first dedicated mental-health unit at St Bartholomew’s Hospital, London</span> —
              the first in the hospital’s long history.
            </p>

            <p class="text-slate-200 mb-8 leading-relaxed">
              At St Bartholomew’s, I contributed to the pioneering
              <span class="italic">Project 2000 Nursing Curriculum</span>
              under Professor Silverstone, integrating counselling and psychological models into traditionally custodial,
              medically dominated environments.
              These experiences deepened my conviction that meaningful change begins in relationship —
              whether within large healthcare systems or within the psyche itself.
            </p>

            <p class="text-slate-200 mb-8 leading-relaxed">
              Alongside clinical work, I participated in
              <span class="italic">international forums on eating disorders</span>
              and helped inform
              <span class="italic">policy development at clinical levels</span>,
              contributing to discussions on early intervention, somatic integration, and the ethics of care.
              These cross-disciplinary collaborations strengthened my belief that genuine innovation in mental health arises
              through cooperation — between professions, between ideas, and between human beings.
            </p>

            <p class="text-slate-200 mb-8 leading-relaxed">
              During the pandemic, my focus evolved toward bridging psychotherapy and technology.
              I trained as a
              <span class="italic">prompt engineer and full-stack developer</span>,
              designing <span class="italic">AI-powered therapeutic tools</span> and
              <span class="italic">container-based applications for clinicians</span>.
              My current work explores how digital systems can support reflection,
              streamline clinical administration, and protect the human presence at the heart of care.
              The goal remains the same as ever: to create structures — human or digital —
              that make room for presence, not replace it.
            </p>

            <p class="text-slate-200 mb-8 leading-relaxed">
              I am a registered member of the
              <span class="italic" itemprop="affiliation">British Association for Counselling and Psychotherapy (BACP)</span>
              and remain committed to reflective, trauma-informed practice.
              My orientation integrates
              <span class="italic" itemprop="knowsAbout">Internal Family Systems (IFS)</span>,
              <span class="italic" itemprop="knowsAbout">EMDR</span>, and symbolic-relational approaches —
              bringing together the science of trauma and the poetry of meaning.
              Across every phase of my work — from hospitals to code — my aim has remained constant:
              to help both clients and practitioners work with clarity, coherence, and compassion.
            </p>
            <hr class="my-8 border-slate-700 opacity-40" />

            <p class="text-slate-300 leading-relaxed mt-6">
              Over time, my focus has shifted from traditional talk therapy toward something quieter and more integrative.
              What I’ve come to understand is that healing rarely comes from more words — it comes from how we pay attention.
              This reflection has shaped how I now work with clients and therapists alike.
            </p>

            <p class="mt-4">
              <a
                  href="#philosophy"
                  class="text-purple-300 hover:text-purple-200 underline/50 text-sm"
              >
                Read more about my philosophy of practice ↓
              </a>
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
import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
@keyframes moveStars {
  from {
    background-position: 0 0, 100px 100px;
  }
  to {
    background-position: -500px 1000px, 500px -1000px;
  }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.18; }
  50% { opacity: 0.26; }
}

/* 🌟 Three-Layer Golden Starfield */
.animate-stars {
  background:
    /* Foreground stars – bright gold */
      radial-gradient(rgba(255, 230, 150, 0.9) 1px, transparent 1px),
        /* Midground stars – softer gold */
      radial-gradient(rgba(255, 215, 100, 0.7) 1px, transparent 1px),
        /* Background stars – faint champagne tone */
      radial-gradient(rgba(255, 200, 80, 0.5) 1px, transparent 1px);
  background-size: 80px 80px, 120px 120px, 200px 200px;
  background-position: 0 0, 100px 100px, 200px 200px;
  animation:
      moveStars1 60s linear infinite,
      moveStars2 120s linear infinite,
      moveStars3 180s linear infinite,
      twinkle 4s ease-in-out infinite alternate;
  opacity: 0.18;
}

/* 🌌 Layer movement animations */
@keyframes moveStars1 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: -600px 800px, 100px 100px, 200px 200px; }
}
@keyframes moveStars2 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: 0 0, -400px 900px, 200px 200px; }
}
@keyframes moveStars3 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: 0 0, 100px 100px, -300px 700px; }
}

/* ✨ Gentle shimmer animation */
@keyframes twinkle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}



</style>

