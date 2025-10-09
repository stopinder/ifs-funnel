<template>
  <section
      id="hero"
      class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white overflow-hidden
           bg-gradient-to-b from-indigo-950 via-purple-900 to-black"
  >
    <!-- ⭐ STARFIELD BACKGROUND -->
    <div class="absolute inset-0 z-0 animate-stars pointer-events-none"></div>

    <!-- MAIN CONTENT -->
    <div class="relative z-10 space-y-6 py-24 sm:py-32">
      <h1 class="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl mx-auto">
        50-Minute IFS Session + Personalised Insight Report
      </h1>

      <p class="text-lg sm:text-xl max-w-xl mx-auto text-slate-300">
        A deeply reflective Internal Family Systems session — followed by a therapist-curated,
        AI-assisted reflection designed to help you understand your inner world with clarity and compassion.
      </p>

      <p class="text-base text-slate-400 max-w-lg mx-auto italic">
        For those ready to listen inward — and meet every part with understanding.
      </p>

      <!-- CTA Block -->
      <div class="mt-8 flex flex-col items-center space-y-3">

        <!-- Main Button -->
        <a href="#book-cta">
          <button
              class="bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-200 transition
           animate-subtle-bounce shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-500/40"
          >
            Book Your Session
          </button>
        </a>


        <!-- Sample Report Link -->
        <a
            href="/report-sample.html"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-purple-300 hover:text-purple-200 underline/50"
        >
          See a sample Insight Report →
        </a>

      </div>
    </div>
  </section>
</template>

<script setup>
// no script needed here yet
</script>

<style scoped>
/* ✨ Subtle bounce animation for CTA button */
@keyframes subtle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}
.animate-subtle-bounce {
  animation: subtle-bounce 3.5s ease-in-out infinite;
}

/* 🌌 Starfield background animations */
@keyframes moveStars {
  from {
    background-position: 0 0, 100px 100px;
  }
  to {
    background-position: -500px 1000px, 500px -1000px;
  }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.18; }
  50% { opacity: 0.26; }
}

/* 🌟 Three-Layer Golden Starfield */
.animate-stars {
  background:
    /* Foreground stars – bright gold */
      radial-gradient(rgba(255, 230, 150, 0.9) 1px, transparent 1px),
        /* Midground stars – softer gold */
      radial-gradient(rgba(255, 215, 100, 0.7) 1px, transparent 1px),
        /* Background stars – faint champagne tone */
      radial-gradient(rgba(255, 200, 80, 0.5) 1px, transparent 1px);
  background-size: 80px 80px, 120px 120px, 200px 200px;
  background-position: 0 0, 100px 100px, 200px 200px;
  animation:
      moveStars1 60s linear infinite,
      moveStars2 120s linear infinite,
      moveStars3 180s linear infinite,
      twinkle 4s ease-in-out infinite alternate;
  opacity: 0.18;
}

/* 🌌 Layer movement animations */
@keyframes moveStars1 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: -600px 800px, 100px 100px, 200px 200px; }
}
@keyframes moveStars2 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: 0 0, -400px 900px, 200px 200px; }
}
@keyframes moveStars3 {
  from { background-position: 0 0, 100px 100px, 200px 200px; }
  to   { background-position: 0 0, 100px 100px, -300px 700px; }
}

/* ✨ Gentle shimmer animation */
@keyframes twinkle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}

</style>
