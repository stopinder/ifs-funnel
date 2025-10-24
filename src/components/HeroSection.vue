<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900"
      aria-label="Hero: calm, clinical, modern"
  >
    <!-- Decorative SVG (inline, zero network cost) -->
    <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="1" stop-color="#eef6f7" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- soft elliptical field for depth (cooler tone) -->
      <g transform="translate(600,300)" opacity="0.12">
        <ellipse rx="520" ry="200" fill="#e6f4f4" />
      </g>

      <!-- subtle vertical ribbon -->
      <g opacity="0.06">
        <rect x="820" y="-80" width="420" height="760" rx="40" transform="rotate(-14 820 -80)" fill="url(#g1)" />
      </g>
    </svg>

    <!-- Content card -->
    <div
        class="relative z-10 max-w-3xl w-full bg-white/96 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 md:p-12 shadow-sm"
        role="region"
        aria-labelledby="hero-title"
    >
      <!-- INLINE WORDMARK SVG — larger, responsive -->
      <div class="flex items-center gap-6">
        <svg
            class="w-56 md:w-80 lg:w-96 h-auto flex-none"
            viewBox="0 0 360 96"
            role="img"
            aria-labelledby="logoTitle logoDesc"
            xmlns="http://www.w3.org/2000/svg"
        >
          <title id="logoTitle">Chrysalis Therapy Services — Rob Ormiston</title>
          <desc id="logoDesc">Symbol mark and wordmark: Chrysalis Therapy Services</desc>

          <!-- Symbol (left) -->
          <g transform="translate(48,48)" aria-hidden="true">
            <path
                d="M0,-28 C14,-28 26,-12 26,4 C26,24 14,28 0,28 C-14,28 -26,16 -26,4 C-26,-12 -14,-28 0,-28 Z"
                fill="#0f766e"
            />
            <path d="M-6,-6 C-2,-12 6,-12 10,-6" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
            <path d="M-8,6 C-2,0 6,0 12,6" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
          </g>

          <!-- Wordmark (right) — bumped font sizes -->
          <g transform="translate(96,24)">
            <text x="0" y="16" font-family="Lora, Georgia, 'Times New Roman', serif" font-weight="600" font-size="36" fill="#0b1220">
              Chrysalis
            </text>
            <text x="0" y="46" font-family="Inter, Arial, sans-serif" font-weight="400" font-size="16" fill="#475569">
              Therapy Services — Rob Ormiston
            </text>
          </g>
        </svg>

        <h1 id="hero-title" class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-slate-900">
          Psychotherapy for clarity, integration and renewal
        </h1>
      </div>

      <!-- small teal accent bar -->
      <div class="w-16 h-1 bg-teal-500 rounded mt-6 mb-6" aria-hidden="true"></div>

      <p class="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
        EMDR-informed Internal Family Systems (IFS) therapy for adults wanting calm, deeper self-understanding,
        and practical change. Sessions are evidence-informed and compassionately direct.
      </p>

      <p class="text-sm md:text-base text-slate-600 italic leading-relaxed mb-6">
        Post-session summaries help you stay connected to what mattered most — theory translated into practice.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <button
            @click.prevent="scrollTo(bookTarget)"
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-200 bg-teal-600 text-white hover:bg-teal-700 transition-transform active:translate-y-0.5"
            aria-label="Book a therapy session"
        >
          Book a session
        </button>

        <a
            :href="learnMoreHref"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-slate-100 bg-transparent text-slate-800 hover:bg-slate-50"
            aria-label="Learn more about therapy approach"
        >
          Learn more
        </a>
      </div>
    </div>

    <!-- gentle fade into next section (inline style to avoid extra CSS file) -->
    <div
        class="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        aria-hidden="true"
        :style="{
        background:
          'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(247,250,252,0.95) 60%, rgba(247,250,252,1) 100%)'
      }"
    />
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
      el.setAttribute('tabindex', '-1') // make focusable for accessibility
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus({ preventScroll: true })
    } else {
      const fallback = document.getElementById(selector.replace('#', ''))
      if (fallback) fallback.scrollIntoView()
    }
  } catch (e) {
    // fallback: set hash to avoid breaking
    window.location.hash = selector
  }
}
</script>

