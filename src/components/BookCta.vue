<template>
  <section
      id="book-cta"
      ref="cta"
      class="relative text-center py-16 text-white space-y-6 opacity-0 transition-opacity duration-1000 ease-out bg-cover bg-center"
      :class="{ 'opacity-100': visible }"
      style="background-image: url('/moon-pink.jpg');"
  >
    <h2 class="text-3xl font-bold">50-Minute IFS Session</h2>
    <p class="text-lg">£85 per session</p>

    <a
        href="https://calendly.com/robormiston/new-meeting-3"
        target="_blank"
        rel="noopener noreferrer"
    >
      <button
          class="bg-white text-black font-medium px-6 py-3 rounded-full mt-6 focus:outline-none focus:ring-2 focus:ring-gray-600/50"
      >
        Book Your Session
      </button>
    </a>

    <p class="text-xs text-slate-300">
      Registered Member MBACP (BACP) • Confidential & Secure
    </p>
    <a
        href="https://docs.google.com/document/d/1jk1C-JASHqj1G2X6Wxr7plgi9IhsjEDnIU1G-MHpCi8/preview"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-sm text-purple-300 hover:text-purple-200 underline/50"
    >
      See a sample Insight Report →
    </a>

  </section>
</template>

<style scoped>
#book-cta::before,
#book-cta::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 4rem;
  pointer-events: none;
  z-index: 1;
}

#book-cta::before {
  top: 0;
  background: linear-gradient(to bottom, #0f172a, transparent); /* from-midnight to transparent */
}

#book-cta::after {
  bottom: 0;
  background: linear-gradient(to top, #0f172a, transparent); /* from-midnight to transparent */
}
</style>

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
