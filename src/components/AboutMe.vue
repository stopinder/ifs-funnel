<template>
  <section
      id="about"
      class="px-6 py-24 max-w-5xl mx-auto text-white opacity-0 translate-y-6 transition-all duration-700 ease-out"
      itemscope
      itemtype="https://schema.org/Person"
      ref="aboutSection"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
      <!-- PROFILE IMAGE -->
      <div class="relative flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <div
            class="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-radial from-purple-600/30 to-transparent blur-2xl"
            aria-hidden="true"
        ></div>
        <img
            src="/profile.jpg"
            alt="Portrait of psychotherapist Robert Ormiston"
            class="relative w-44 h-44 rounded-full object-cover border border-slate-700 shadow-md mx-auto md:mx-0"
            itemprop="image"
        />
      </div>

      <!-- TEXT BLOCK -->
      <div class="max-w-2xl">
        <h2
            class="text-3xl font-bold mb-6 focus:outline-none"
            itemprop="name"
            tabindex="0"
        >
          About Robert Ormiston
        </h2>

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
            class="text-sm bg-gradient-to-r from-purple-100 to-white text-slate-900 rounded-full px-5 py-2 hover:from-purple-200 hover:to-white transition focus:outline-none focus:ring-4 focus:ring-purple-500/40"
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
              environments.
            </p>
            <p>
              During the pandemic, I began bridging psychotherapy and technology —
              becoming a prompt engineer and full-stack developer. I now build
              AI-powered therapeutic tools, develop container-based apps for clinicians,
              and contribute to the evolving field of human–AI integration in mental
              health.
            </p>
            <p>
              My focus remains on supporting reflective, trauma-informed care while
              reducing the administrative and emotional burden on practitioners.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const expanded = ref(false)
const aboutSection = ref(null)

// Scroll fade-in effect
onMounted(() => {
  const el = aboutSection.value
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-6')
            el.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
  )
  if (el) observer.observe(el)
})
</script>

<style scoped>
@keyframes slide-fade-enter {
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    max-height: 1000px;
    opacity: 1;
    transform: translateY(0);
  }
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
