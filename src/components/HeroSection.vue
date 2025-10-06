<template>
  <section
      id="hero"
      class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white overflow-hidden
           bg-gradient-to-b from-indigo-950 via-purple-900 to-black"
  >
    <!-- ⭐ STARFIELD BACKGROUND -->
    <div class="absolute inset-0 z-0 animate-stars pointer-events-none" />

    <!-- MAIN CONTENT -->
    <div class="relative z-10 space-y-6 py-24 sm:py-32">
      <h1 class="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl mx-auto">
        50-Minute IFS Session + AI Insight Report
      </h1>

      <p class="text-lg sm:text-xl max-w-xl mx-auto text-slate-300">
        A deeply reflective Internal Family Systems therapy session — followed by an AI-generated, therapist-curated summary designed for meaningful insight.
      </p>

      <a href="#faq">
        <a
            href="https://calendly.com/robormiston/new-meeting-3"
            target="_blank"
            rel="noopener noreferrer"
        >
          <button
              class="mt-4 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-200 transition
           animate-subtle-bounce shadow-lg hover:shadow-purple-500/30"
          >
            Book Now
          </button>
        </a>



      </a>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes subtle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}
.animate-subtle-bounce {
  animation: subtle-bounce 2s ease-in-out infinite;
}

@keyframes moveStars {
  from {
    background-position: 0 0, 50px 50px;
  }
  to {
    background-position: -1000px 1000px, -950px 1050px;
  }
}

.animate-stars {
  background: radial-gradient(white 1px, transparent 1px),
  radial-gradient(white 1px, transparent 1px);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  animation: moveStars 60s linear infinite;
  opacity: 0.2;
}
</style>
style>