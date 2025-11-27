<template>
  <section
      id="faq"
      ref="faqSection"
      class="relative px-6 py-24
             bg-[#f3e8dd] text-[#4a4743]
             transition-colors-bg duration-300 ease-subtle
             opacity-0 translate-y-4
             motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out"
      itemscope
      itemtype="https://schema.org/FAQPage"
      aria-labelledby="faq-heading"
  >
    <!-- subtle warm radial haze behind panel -->
    <div
        class="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-64
               bg-[radial-gradient(circle_at_top,rgba(195,158,138,0.18),transparent_70%)]
               blur-3xl pointer-events-none"
        aria-hidden="true"
    ></div>

    <!-- panel container -->
    <div
        class="relative z-10 bg-[#f9f3ee] rounded-2xl shadow-soft border border-[#e4d9d1]
               max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16"
    >
      <!-- Heading + intro -->
      <header class="text-center mb-10">
        <h2
            id="faq-heading"
            class="text-3xl md:text-4xl font-serif font-semibold text-[#3c3a36] leading-snug"
        >
          Frequently Asked Questions
        </h2>

        <div
            class="mt-4 mx-auto h-1 w-16 bg-[#c39e8a] rounded"
            aria-hidden="true"
        ></div>

        <p
            class="text-base md:text-lg leading-relaxed text-[#4a4743] max-w-2xl mx-auto mt-6"
        >
          What sessions are like, how reflective summaries work, and how your privacy is protected.
        </p>
      </header>

      <!-- FAQ list -->
      <div class="divide-y divide-[#e4d9d1]">
        <article
            v-for="(faq, index) in faqs"
            :key="index"
            class="py-6 first:pt-0 last:pb-0"
            itemprop="mainEntity"
            itemscope
            itemtype="https://schema.org/Question"
        >
          <!-- Question row -->
          <button
              role="button"
              @click="toggle(index)"
              @keyup.enter="toggle(index)"
              tabindex="0"
              class="w-full flex justify-between items-start text-left group focus:outline-none"
              :aria-expanded="faq.open.toString()"
              :aria-controls="'answer-' + index"
          >
            <div class="pr-6">
              <h3
                  class="text-lg md:text-xl font-semibold font-serif text-[#3c3a36] leading-snug flex items-baseline gap-2"
                  itemprop="name"
              >
                <span
                    class="text-sm font-mono font-medium text-[#c39e8a] tracking-tight"
                >
                  Q{{ index + 1 }}.
                </span>
                <span
                    class="group-hover:text-[#c39e8a] transition-colors-bg duration-200 ease-subtle"
                >
                  {{ faq.question }}
                </span>
              </h3>
            </div>

            <svg
                class="mt-1 h-5 w-5 text-[#6e6a66] group-hover:text-[#c39e8a] transition-transform duration-300 ease-subtle"
                :class="{ 'rotate-180': faq.open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Answer -->
          <transition name="slide-fade">
            <div
                v-if="faq.open"
                :id="'answer-' + index"
                class="mt-4 text-[#4a4743] text-base md:text-lg leading-relaxed"
                itemprop="acceptedAnswer"
                itemscope
                itemtype="https://schema.org/Answer"
            >
              <p itemprop="text" class="space-y-4">
                <span
                    v-for="(paragraph, i) in faq.answer"
                    :key="i"
                    class="block mb-4 last:mb-0"
                >
                  {{ paragraph }}
                </span>
              </p>
            </div>
          </transition>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

/**
 * FAQ content and clinical messaging
 * - Each answer is now an array of paragraphs for readability, SEO and consent clarity.
 * - Language is framed around privacy, agency, clarity.
 */
const faqs = reactive([
  {
    question: 'What is Internal Family Systems (IFS)?',
    answer: [
      'Internal Family Systems (IFS) is a therapeutic approach that views the mind as having different parts — for example, the inner critic, the protector, the overwhelmed part, the deeply tired part. None of these parts are “bad”; each one is trying in its own way to keep you safe.',
      'In this work, we learn how to meet those parts with clarity and compassion rather than battling or suppressing them. The aim is integration, steadiness, and relief — not perfection.',
    ],
    open: false,
  },
  {
    question: 'What can I expect during a session?',
    answer: [
      'Sessions are 50 minutes and calm in tone. We begin by noticing what feels most alive or most demanding in you that day — not forcing an agenda.',
      'Rather than analysing you, we stay close to your direct experience. You will not be pushed to “perform” emotions or reveal anything you don’t want to. You set the pace.',
    ],
    open: false,
  },
  {
    question: 'What is a reflective summary, and why do you offer it?',
    answer: [
      'After some sessions, I can create a short written reflective summary for you. Clients often find this helps them integrate, remember key insights, and stay with what actually matters between sessions.',
      'This is optional. You decide if you want it.',
      'To draft it, I use a privacy-protected clinical writing assistant under my supervision. Your material is not used to train public AI models, and these notes are not shared outside our work.',
    ],
    open: false,
  },
  {
    question: 'Is this process confidential and secure?',
    answer: [
      'Yes. Sessions are held to normal psychotherapy standards of confidentiality.',
      'Reflective summaries are only created with your consent. They are kept securely. They are not clinical risk notes and not legal records; they are for you.',
      'Any digital tools involved do not keep your identifiable session data for reuse.',
    ],
    open: false,
  },
  {
    question: 'Do I need previous therapy experience to work with you?',
    answer: [
      'No. Some clients have been in therapy for years and feel like they have “done all the work,” but still feel dysregulated or depleted. Others are coming for the first time.',
      'What matters most is willingness to slow down and pay real attention to what is happening inside you, without judgement.',
    ],
    open: false,
  },
])

const faqSection = ref(null)

const toggle = (index) => {
  faqs.forEach((f, i) => {
    f.open = i === index ? !f.open : false
  })
}

onMounted(() => {
  const el = faqSection.value
  if (!el) return

  const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    el.classList.remove('opacity-0', 'translate-y-4')
    el.classList.add('opacity-100', 'translate-y-0')
    return
  }

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-4')
            el.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
  )

  observer.observe(el)
})
</script>

<style scoped>
/* Accordion animation for answers */
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

/* Serif heading aesthetic for continuity with Philosophy section */
h2,
h3 {
  font-family: Lora, Georgia, serif;
}

/* Body text is Inter, consistent with clinical clarity */
p,
button,
span {
  font-family: Inter, system-ui, sans-serif;
}

/* If user prefers reduced motion, transitions above are skipped in script */
@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none !important;
  }
}
</style>

