<template>
  <section id="about" class="px-6 py-20 max-w-5xl mx-auto text-white">
    <div class="flex flex-col md:flex-row items-start gap-8">
      <!-- PROFILE IMAGE -->
      <img
          src="/profile.jpg"
          alt="Robert Ormiston"
          class="w-32 h-32 rounded-full object-cover border border-slate-700 shadow-md"
      />

      <!-- TEXT BLOCK -->
      <div>
        <h2 class="text-3xl font-bold mb-4">About Me</h2>

        <p class="text-slate-300 mb-4">
          I’m a psychotherapist and the founder of
          <span class="font-semibold">Heliosynthesis</span>, with over
          25 years’ experience in mental health — including clinical
          leadership roles within the NHS. My work centres on trauma, memory,
          and meaning, helping people make sense of their inner world and
          reconnect with resilience.
        </p>

        <p class="text-slate-300 mb-4">
          I’m informed by
          <span class="italic">Internal Family Systems (IFS)</span> and
          <span class="italic">EMDR</span>. My approach is reflective,
          symbolic, and relational — offering clarity, containment, and
          authentic connection.
        </p>

        <!-- TOGGLE BUTTON -->
        <button
            @click="expanded = !expanded"
            class="text-sm text-slate-900 bg-white rounded-full px-4 py-2 hover:bg-slate-100 transition"
        >
          {{ expanded ? 'Hide Full Bio' : 'Read More About My Background' }}
        </button>

        <!-- SLIDE-DOWN FULL BIO -->
        <transition name="slide-fade">
          <div v-if="expanded" class="mt-6 space-y-4 text-slate-300">
            <p>
              My early clinical career was shaped by the transformation of
              psychiatric services in the UK. I worked on commissioning teams
              for several landmark projects — including the first psychiatric
              intensive care unit at Hackney Hospital, a community mental
              health hospital in East Sussex, and the mental-health unit at St Bartholomew’s Hospital under Professor Silverstone.
            </p>
            <p>
              At St Bart’s, I contributed to the pioneering
              <span class="italic">Project 2000 Nursing Curriculum</span>,
              integrating counselling and psychological models into
              traditionally custodial environments.
            </p>
            <p>
              During the pandemic, I began bridging psychotherapy and
              technology — becoming a prompt engineer and full-stack developer.
              I now build AI-powered therapeutic tools, develop container-based
              apps for clinicians, and contribute to the evolving field of
              human–AI integration in mental health.
            </p>
            <p>
              My focus remains on supporting reflective, trauma-informed care
              while reducing the administrative and emotional burden on
              practitioners.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
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
