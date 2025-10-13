<template>
  <section
      id="faq"
      ref="faqSection"
      class="relative px-6 py-24 max-w-5xl mx-auto text-slate-100 opacity-0 translate-y-6 transition-all duration-700 ease-out"
  >
    <!-- Soft navy gradient background -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#24263e]/80 to-[#181a2f]"></div>

    <!-- Gentle radial glow -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- CONTENT -->
    <div class="relative z-10">
      <h2 class="text-3xl font-serif font-semibold mb-4 text-center text-amber-100">
        Frequently Asked Questions
      </h2>
      <p class="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
        Responses to common questions about Internal Family Systems sessions and the reflective report process.
      </p>

      <div class="space-y-6">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-slate-800/40 border border-amber-100/10 rounded-2xl p-6 sm:p-8 shadow-md backdrop-blur-sm hover:bg-slate-800/60 transition-colors"
        >
          <button
              role="button"
              @click="toggle(index)"
              @keyup.enter="toggle(index)"
              tabindex="0"
              class="w-full flex justify-between items-center text-left focus:outline-none"
              :aria-expanded="faq.open.toString()"
              :aria-controls="'answer-' + index"
          >
            <span class="text-lg font-semibold text-slate-100 font-serif">
              {{ faq.question }}
            </span>
            <svg
                :class="['w-5 h-5 transition-transform text-amber-300', faq.open ? 'rotate-180' : 'rotate-0']"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="slide-fade">
            <div
                v-if="faq.open"
                :id="'answer-' + index"
                class="mt-4 text-slate-300 leading-relaxed font-inter"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

const faqs = reactive([
  {
    question: 'What is Internal Family Systems (IFS)?',
    answer:
        'Internal Family Systems is a collaborative approach to understanding the many “parts” of your inner life — the protectors, the critics, the exiles, and the quieter places within you. Rather than analysing them, we learn to meet each one with curiosity and care, allowing the system to find its own balance.',
    open: false,
  },
  {
    question: 'What happens in a 50-minute IFS session?',
    answer:
        'Each session begins with grounding and a brief check-in. From there, we follow your pace. Together we listen for what wants attention — not through performance or effort, but through noticing. The process is gentle, reflective, and guided by your sense of safety. Every part is welcome, and nothing is forced.',
    open: false,
  },
  {
    question: 'What is the Insight Report?',
    answer:
        'After your session, I prepare a reflective summary supported by a professional Thought Assistant. It highlights themes and patterns to support integration — a mirror for meaning, not a replacement for human presence. You receive a concise reflection that helps you stay connected to what emerged in the work.',
    open: false,
  },
  {
    question: 'Is this confidential?',
    answer:
        'Yes. All sessions follow the same standards of clinical confidentiality you would expect in psychotherapy. The reflective summary is stored securely, reviewed only by me, and created with your explicit consent. Your material is never shared or used beyond your own therapeutic process.',
    open: false,
  },
  {
    question: 'Do I need to have therapy experience to benefit from this work?',
    answer:
        'No. Some people come with years of therapeutic experience; others are simply curious about self-understanding. This work meets you where you are. What matters most is your willingness to pay quiet attention to what arises.',
    open: false,
  },
])

const toggle = (index) => {
  faqs[index].open = !faqs[index].open
}

const faqSection = ref(null)

onMounted(() => {
  const el = faqSection.value
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
h2 {
  font-family: Lora, Georgia, serif;
}
p,
button {
  font-family: Inter, system-ui, sans-serif;
}
@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none;
  }
}
</style>

