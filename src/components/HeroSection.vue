<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900"
      aria-label="Hero: calm, clinical, modern"
  >
    <!-- Decorative background SVG (absolute) -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs><linearGradient id="g1" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#eef6f7" stop-opacity="1"/></linearGradient></defs>
      <g transform="translate(600,300)" opacity="0.12"><ellipse rx="520" ry="200" fill="#e6f4f4" /></g>
      <g opacity="0.06"><rect x="820" y="-80" width="420" height="760" rx="40" transform="rotate(-14 820 -80)" fill="url(#g1)" /></g>
    </svg>

    <!-- Content card -->
    <div class="relative z-10 max-w-3xl w-full bg-white/96 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 md:p-12 shadow-sm" role="region" aria-labelledby="hero-title" aria-describedby="hero-intro">
      <div class="flex flex-col md:flex-row md:items-center md:gap-6 gap-6">
        <!-- mobile symbol -->
        <svg class="mx-auto md:mx-0 block md:hidden w-12 h-12 flex-none text-teal-600" viewBox="-24 -24 48 48" role="img" aria-labelledby="symTitle" xmlns="http://www.w3.org/2000/svg">
          <title id="symTitle">Chrysalis symbol — butterfly</title>
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2">
            <path d="M-6,1 C-18,-6 -16,-20 -4,-24 C6,-28 18,-18 16,-8 C14,-2 6,6 0,10" />
            <path d="M6,1 C18,-6 16,-20 4,-24 C-6,-28 -18,-18 -16,-8 C-14,-2 -6,6 0,10" />
            <path d="M0,-5 L0,9" stroke-width="2.6" />
          </g>
        </svg>

        <!-- full wordmark (md+) -->
        <div class="hidden md:flex md:items-center md:gap-6 w-full">
          <!-- canonical symbol (same paths) scaled for hero -->
          <svg class="flex-none w-16 h-16 text-teal-600" viewBox="-24 -24 48 48" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
              <path d="M-6,1 C-18,-6 -16,-20 -4,-24 C6,-28 18,-18 16,-8 C14,-2 6,6 0,10" />
              <path d="M6,1 C18,-6 16,-20 4,-24 C-6,-28 -18,-18 -16,-8 C-14,-2 -6,6 0,10" />
              <path d="M0,-5 L0,9" stroke-width="3.6" />
            </g>
          </svg>

          <!-- wordmark text -->
          <div class="leading-tight">
            <div class="text-2xl lg:text-3xl font-semibold text-slate-900">Chrysalis</div>
            <div class="text-sm lg:text-base text-slate-700">Therapy Services — Rob Ormiston</div>
          </div>
        </div>

        <!-- headline -->
        <h1 id="hero-title" class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-slate-900 text-center md:text-left">
          Psychotherapy for clarity, integration and renewal
        </h1>
      </div>

      <div class="w-16 h-1 bg-teal-500 rounded mt-6 mb-6 mx-auto md:mx-0" aria-hidden="true"></div>

      <p id="hero-intro" class="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
        EMDR-informed Internal Family Systems (IFS) therapy for adults wanting calm, deeper self-understanding, and practical change. Sessions are evidence-informed and compassionately direct.
      </p>

      <p class="text-sm md:text-base text-slate-700 italic leading-relaxed mb-6">
        Post-session summaries help you stay connected to what mattered most — theory translated into practice.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <button @click.prevent="scrollTo(bookTarget)" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-200 bg-teal-600 text-white hover:bg-teal-700 transition-transform active:translate-y-0.5" aria-label="Book a therapy session">
          Book a session
        </button>

        <a :href="learnMoreHref" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-slate-100 bg-transparent text-slate-800 hover:bg-slate-50" aria-label="Learn more about therapy approach">
          Learn more
        </a>
      </div>
    </div>

    <!-- fade -->
    <div class="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" aria-hidden="true" :style="{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(247,250,252,0.95) 60%, rgba(247,250,252,1) 100%)' }" />
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
