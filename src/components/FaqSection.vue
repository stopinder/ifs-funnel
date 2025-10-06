<template>
  <section id="faq" class="px-6 py-20 max-w-4xl mx-auto text-white">
    <h2 class="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

    <div v-for="(faq, index) in faqs" :key="index" class="border-b border-slate-700 py-4">
      <button
          @click="toggle(index)"
          class="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span class="text-lg font-medium text-slate-200">{{ faq.question }}</span>
        <span class="text-slate-400 text-xl transition-transform duration-300"
              :class="{ 'rotate-45': faq.open }">+</span>
      </button>

      <transition name="slide-fade">
        <div v-if="faq.open" class="mt-2 text-slate-400">
          <p>{{ faq.answer }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    question: 'What happens in the 50-minute session?',
    answer:
        'We explore your internal system using the Internal Family Systems model. You’ll be guided to connect with different parts of yourself safely and reflectively.',
    open: false,
  },
  {
    question: 'What is the AI Insight Report?',
    answer:
        'After your session, I’ll curate an AI-generated summary using a specialized GPT trained in psychotherapy. It reflects key themes, parts, and relational patterns — written in clear, human language.',
    open: false,
  },
  {
    question: 'Is my information private?',
    answer:
        'Absolutely. All sessions are confidential and compliant with UK and EU data protection standards. The AI summary uses anonymized notes only.',
    open: false,
  },
  {
    question: 'How much does it cost?',
    answer:
        'A 50-minute IFS therapy session plus your personalized AI Insight Report costs £85 GBP.',
    open: false,
  },
  {
    question: 'How do I book a session?',
    answer:
        'Click the “Book Now” button above to open my Calendly page and choose a time that suits you.',
    open: false,
  },
])

function toggle(index) {
  faqs[index].open = !faqs[index].open
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
