<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900"
      aria-label="Hero: calm, clinical, modern"
  >
    <div
        class="relative z-10 max-w-2xl w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-12 shadow-md"
        role="region"
        aria-labelledby="hero-title"
        aria-describedby="hero-intro"
    >
      <!-- Clinic ID row -->
      <div class="flex items-center justify-center md:justify-start gap-3 mb-6">
        <img
            src="/images/ChrysalisLogo.svg"
            alt="Chrysalis Psychotherapy"
            class="w-16 h-16 object-contain opacity-90"
            loading="eager"
            decoding="async"
        />
        <span class="text-sm font-medium text-slate-600">
          Chrysalis Psychotherapy
        </span>
      </div>

      <!-- Headline -->
      <h1
          id="hero-title"
          class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-slate-900 text-center md:text-left"
      >
        Psychotherapy for clarity, integration and renewal
      </h1>

      <!-- Accent line -->
      <div
          class="w-16 h-1 bg-teal-600 rounded mt-4 mb-4 mx-auto md:mx-0"
          aria-hidden="true"
      ></div>

      <!-- Credibility line -->
      <div
          class="text-sm text-slate-600 leading-snug mb-4 text-center md:text-left"
      >
        Registered Member (MBACP), 15+ years clinical practice, EMDR-informed
        Internal Family Systems therapy
      </div>

      <!-- Body copy -->
      <p
          id="hero-intro"
          class="text-base md:text-lg text-slate-700 leading-relaxed mb-6 text-center md:text-left"
      >
        Therapy for adults wanting calm, deeper self-understanding, and practical
        change.
      </p>

      <!-- CTA row -->
      <div
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-center md:text-left"
      >
        <button
            @click.prevent="scrollTo(bookTarget)"
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold
                 bg-teal-600 text-white hover:bg-teal-700
                 focus:outline-none focus:ring-4 focus:ring-teal-200"
        >
          Book a session
        </button>

        <a
            :href="learnMoreHref"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-200
                 bg-transparent text-slate-800 hover:bg-slate-50
                 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Learn more
        </a>
      </div>

      <!-- Compliance / reassurance row -->
      <div
          class="mt-6 flex items-center justify-center md:justify-start gap-2 text-slate-500"
      >
        <img
            src="/images/bacp-logo.png"
            alt="BACP"
            class="h-6 w-auto opacity-80"
            loading="lazy"
            decoding="async"
        />
        <span class="text-xs leading-snug">
          Registered Member (MBACP) — British Association for Counselling &amp;
          Psychotherapy
        </span>
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
/* keep accessible focus for keyboard users on the primary CTA */
button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
}
</style>

