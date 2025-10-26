<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900"
      aria-label="Hero: calm, clinical, modern"
  >
    <div
        class="relative z-10 max-w-3xl w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-12 shadow-md"
        role="region"
        aria-labelledby="hero-title"
        aria-describedby="hero-intro"
    >
      <div class="flex flex-col md:flex-row md:items-center md:gap-10 gap-6">

      <!-- Chrysalis logo -->
        <img
            src="/images/ChrysalisLogo.svg"
            alt="Chrysalis logo"
            class="mx-auto md:mx-0 w-40 md:w-48 lg:w-56 h-auto object-contain flex-none"
            loading="eager"
            decoding="async"
        />


        <div class="flex-1">
          <h1
              id="hero-title"
              class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-slate-900 text-center md:text-left"
          >
            Psychotherapy for clarity, integration and renewal
          </h1>

          <div
              class="w-16 h-1 bg-teal-600 rounded mt-4 mb-4 mx-auto md:mx-0"
              aria-hidden="true"
          ></div>

          <p
              id="hero-intro"
              class="text-base md:text-lg text-slate-700 leading-relaxed mb-4"
          >
            EMDR-informed Internal Family Systems (IFS) therapy for adults wanting calm, deeper self-understanding, and practical change.
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <button
                @click.prevent="scrollTo(bookTarget)"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200"
            >
              Book a session
            </button>

            <a
                :href="learnMoreHref"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-200 bg-transparent text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bookTarget: { type: String, default: '#book-cta' },
  learnMoreHref: { type: String, default: '#about' }
})

function scrollTo(selector) {
  try {
    const el = document.querySelector(selector)
    if (el) {
      el.setAttribute('tabindex', '-1')
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus({ preventScroll: true })
    } else {
      const fallback = document.getElementById(selector.replace('#', ''))
      if (fallback) fallback.scrollIntoView()
    }
  } catch (e) {
    window.location.hash = selector
  }
}
</script>

<style scoped>
/* small motion and stronger focus ring */
button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
}
</style>

