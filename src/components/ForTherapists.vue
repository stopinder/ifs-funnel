<template>
  <section
      id="for-therapists"
      class="relative px-6 py-24 max-w-4xl mx-auto text-center animate-fade-in text-slate-100"
  >
    <!-- Background layers -->
    <div
        class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"
    ></div>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- Content -->
    <div class="relative z-10 space-y-6">
      <h2 class="text-3xl font-serif font-semibold text-slate-200 mb-6">
        For Therapists & Practitioners
      </h2>

      <p class="text-slate-300 leading-relaxed max-w-2xl mx-auto">
        This reflective framework can be integrated into your own therapeutic or supervisory practice.
        It provides a structure for creating therapist-curated session summaries — blending clear documentation
        with a reflective, human tone that supports clients between sessions.
      </p>

      <p class="text-slate-400 italic max-w-2xl mx-auto">
        Designed for clinicians who value precision, ethics, and depth — where technology serves reflection,
        and reflection serves care.
      </p>

      <!-- CTA Button with Tooltip and Icon -->
      <div class="relative inline-block group">
        <a
            href="mailto:you@example.com?subject=Integration%20Inquiry"
            class="inline-flex items-center gap-2 bg-midnight text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition shadow focus:outline-none focus:ring-2 focus:ring-gray-600/50"
        >
          <!-- Envelope Icon -->
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.723 1.665l-7.5 6.75a2.25 2.25 0 01-3.054 0l-7.5-6.75A2.25 2.25 0 012.25 6.993V6.75"
            />
          </svg>
          Enquire About Integration
        </a>

        <!-- Tooltip -->
        <div
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-700 text-sm text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Opens your email client
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic yet
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out both;
}

h2 {
  font-family: Lora, Georgia, serif;
}

p,
a {
  font-family: Inter, system-ui, sans-serif;
}
</style>
npm run dev
