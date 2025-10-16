from IPython.display import Markdown

# Delivering the revised FAQ section (as requested: revised content, SEO improved, no major layout changes)
revised_faq_template = """
```vue
<template>
  <section
      id="faq"
      ref="faqSection"
      class="relative px-6 py-24 max-w-5xl mx-auto text-slate-100 opacity-0 translate-y-6 transition-all duration-700 ease-out"
  >
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#24263e]/80 to-[#181a2f]"></div>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <div class="relative z-10">
      <h2 class="text-3xl font-serif font-semibold mb-4 text-center text-amber-100">
        Frequently Asked Questions
      </h2>
      <p class="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
        Answers to common questions about Internal Family Systems (IFS) sessions, reflective reports, and how this therapeutic approach supports self-understanding.
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
        'IFS is a structured, evidence-based approach to therapy that helps you explore different parts of your inner world. These may include protectors, critics, or vulnerable parts. The goal is to build a compassionate relationship with them, allowing your system to find balance and integration.',
    open: false,
  },
  {
    question: 'What can I expect during a session?',
    answer:
        'Each 50-minute session begins with grounding and orienting to your current internal state. We then follow what arises naturally, using a gentle, client-led process. There’s no pressure to perform or explain — we listen, track, and reflect in a way that supports deep self-contact.',
    open: false,
  },
  {
    question: 'What is a Reflective Summary Report?',
    answer:
        'After your session, I prepare a therapeutic summary supported by a secure, supervised AI writing assistant. This summary highlights key themes, emotional movements, and inner shifts. It’s not a clinical note or transcript — it’s a reflective aid designed to support integration.',
    open: false,
  },
  {
    question: 'Is this process confidential and secure?',
    answer:
        'Yes. Your sessions are entirely confidential, held to the same standards expected in psychotherapy. Reflective summaries are created with your consent, stored securely, and never shared beyond our work together. AI support tools do not retain client data.',
    open: false,
  },
  {
    question: 'Do I need therapy experience to benefit from this?',
    answer:
        'No prior experience is required. This work suits both seasoned clients and those new to therapy. The main requirement is a willingness to pay quiet attention to what arises. You’ll be met with care and without judgment, wherever you are in your process.',
    open: false,
  },
])

const toggle = (index) => {
  faqs.forEach((f, i) => f.open = i === index ? !f.open : false) // auto-collapse others
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


