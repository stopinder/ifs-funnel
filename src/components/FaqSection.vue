<template>
  <section
      id="faq"
      class="px-6 py-24 max-w-5xl mx-auto text-white opacity-0 translate-y-6 transition-all duration-700 ease-out"
      ref="faqSection"
  >
    <h2 class="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
    <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
      Quick answers to common questions about IFS sessions and the AI reflection process.
    </p>

    <div class="space-y-6">
      <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-gradient-to-b from-slate-900 via-purple-900/70 to-black border border-slate-800 rounded-xl p-6 sm:p-8 shadow-md"
      >
        <button
            @click="toggle(index)"
            @keyup.enter="toggle(index)"
            class="w-full flex justify-between items-center text-left focus:outline-none"
            :aria-expanded="faq.open.toString()"
            :aria-controls="'answer-' + index"
        >
          <span class="text-lg font-semibold text-slate-100">
            {{ faq.question }}
          </span>
          <svg
              :class="['w-5 h-5 transition-transform', faq.open ? 'rotate-180' : 'rotate-0']"
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
              class="mt-4 text-slate-300 leading-relaxed"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
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
        'Internal Family Systems is a therapeutic model that helps you understand the different “parts” within yourself — protectors, exiles, and managers — so that you can meet each with compassion and curiosity.',
    open: false,
  },
  {
    question: 'What happens in a 50-minute IFS session?',
    answer:
        'We begin with grounding, then explore the inner dialogue between your parts. You set the pace and depth. The goal is understanding, not analysis — a space where every part can be heard safely.',
    open: false,
  },
  {
    question: 'What is the AI Insight Report?',
    answer:
        'After your session, a secure AI tool generates a reflective summary that I personally review and refine. It highlights patterns and insights to help you integrate what emerged.',
    open: false,
  },
  {
    question: 'Is this confidential?',
    answer:
        'Yes. All sessions follow standard clinical confidentiality. The AI-assisted report is stored securely and used only with your explicit consent.',
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
</style>
