<template>
  <section
      id="book-cta"
      ref="cta"
      class="text-center py-16 bg-gradient-to-r from-midnight to-slate-900 text-white space-y-6 opacity-0 transition-opacity duration-1000 ease-out"
      :class="{ 'opacity-100': visible }"
  >
    <h2 class="text-3xl font-bold">50-Minute IFS Session</h2>
    <p class="text-lg">£95 per session</p>

    <a
        href="https://calendly.com/robormiston/new-meeting-3"
        target="_blank"
        rel="noopener noreferrer"
    >
      <button
          class="bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/40 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
      >
        Book Your Session
      </button>
    </a>

    <p class="text-xs text-slate-300">
      Registered Member MBACP (BACP) • Confidential & Secure
    </p>
    <a
        href="https://docs.google.com/document/d/REPLACE_WITH_YOUR_DOC_ID/preview"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-sm text-purple-300 hover:text-purple-200 underline/50"
    >
      See a sample Insight Report →
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cta = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
  )

  if (cta.value) observer.observe(cta.value)

  onUnmounted(() => observer.disconnect())
})
</script>
