<template>
  <section id="testimonials" class="px-6 py-20 max-w-5xl mx-auto text-white">
    <h2 class="text-3xl font-bold mb-10 text-center">Client Reflections</h2>

    <div class="grid gap-8 md:grid-cols-3">
      <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-md
               hover:shadow-purple-500/30 transition hover:-translate-y-1"
      >
        <p class="text-slate-300 italic mb-4">“{{ t.quote }}”</p>
        <p class="text-slate-400 text-sm">— {{ t.name }}, {{ t.location }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote:
        'I left our session with a deep sense of calm and clarity. The AI summary helped me see patterns I’d missed for years.',
    name: 'A.L.',
    location: 'London, UK',
  },
  {
    quote:
        'Robert’s IFS approach helped me connect with parts of myself I’d been avoiding. The written reflection felt deeply personal.',
    name: 'M.J.',
    location: 'Toronto, Canada',
  },
  {
    quote:
        'Professional, grounded, and insightful. The combination of therapy and AI reflection is genuinely transformative.',
    name: 'S.R.',
    location: 'Sydney, Australia',
  },
]
</script>
