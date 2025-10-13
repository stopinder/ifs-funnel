<template>
  <section
      id="testimonials"
      ref="testimonialSection"
      class="relative px-6 py-24 max-w-5xl mx-auto text-slate-100 opacity-0 translate-y-6 transition-all duration-700 ease-out"
  >
    <!-- Background layers -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"></div>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <h2 class="text-3xl font-serif font-semibold mb-4 text-center text-amber-100">
        Client Reflections
      </h2>
      <p class="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
        Some reflections from those who have taken part in this work.
      </p>

      <div class="grid gap-y-12 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-slate-800/40 border border-amber-100/10 rounded-2xl p-8 shadow-md backdrop-blur-sm hover:bg-slate-800/60 transition-transform hover:-translate-y-1"
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const testimonials = [
  { quote: 'These summaries are gold.', name: 'A.L.', location: 'Brighton, UK' },
  { quote: 'Robert’s IFS approach helped me connect with parts of myself I’d been avoiding. The written summary felt deeply personal and compassionate.', name: 'M.J.', location: 'Toronto, Canada' },
  { quote: 'Professional, grounded, and insightful. The blend of psychotherapy and reflective summaries has been genuinely transformative.', name: 'S.R.', location: 'Sydney, Australia' },
  { quote: 'I left our session with a deep sense of calm and clarity. The summary helped me see patterns I’d missed for years.', name: 'G.L.', location: 'London, UK' },
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

<style scoped>
h2 {
  font-family: Lora, Georgia, serif;
}
blockquote, p {
  font-family: Inter, system-ui, sans-serif;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

