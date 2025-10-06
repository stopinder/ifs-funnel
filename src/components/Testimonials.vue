<template>
  <section
      id="testimonials"
      class="px-6 py-24 max-w-5xl mx-auto text-white opacity-0 translate-y-6 transition-all duration-700 ease-out"
      ref="testimonialSection"
  >
    <h2 class="text-3xl font-bold mb-4 text-center">Client Reflections</h2>
    <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
      A few words from clients who have explored their inner worlds through IFS sessions.
    </p>

    <div class="grid gap-y-12 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <article
          v-for="(t, i) in testimonials"
          :key="i"
          class="bg-gradient-to-b from-slate-900 via-purple-900/70 to-black border border-slate-800 rounded-2xl p-8 shadow-md hover:shadow-purple-500/30 transition-transform hover:-translate-y-1"
      >
        <blockquote class="text-slate-200 italic mb-6 leading-relaxed">
          “{{ t.quote }}”
        </blockquote>
        <footer>
          <p class="text-slate-300 font-medium">— {{ t.name }}</p>
          <p class="text-slate-500 text-sm">{{ t.location }}</p>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const testimonials = [
  {
    quote:
        'I left our session with a deep sense of calm and clarity. The AI reflection helped me see patterns I’d missed for years.',
    name: 'A.L.',
    location: 'London, UK',
  },
  {
    quote:
        'Robert’s IFS approach helped me connect with parts of myself I’d been avoiding. The written summary felt deeply personal and compassionate.',
    name: 'M.J.',
    location: 'Toronto, Canada',
  },
  {
    quote:
        'Professional, grounded, and insightful. The blend of therapy and AI reflection is genuinely transformative.',
    name: 'S.R.',
    location: 'Sydney, Australia',
  },
]

const testimonialSection = ref(null)

onMounted(() => {
  const el = testimonialSection.value
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
