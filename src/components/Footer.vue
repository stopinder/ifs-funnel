<template>
  <footer
      id="footer"
      class="relative px-6 py-16 text-slate-300 text-center overflow-hidden bg-gradient-to-b from-black via-purple-950 to-indigo-950"
  >
    <!-- ⭐ STARFIELD BACKGROUND -->
    <div class="absolute inset-0 z-0 animate-stars pointer-events-none"></div>

    <!-- MAIN CONTENT -->
    <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6">
      <!-- SMALL PROFILE IMAGE -->
      <img
          src="/profile.jpg"
          alt="Portrait of psychotherapist Robert Ormiston"
          class="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md"
          loading="lazy"
      />

      <!-- NAV LINKS -->
      <nav class="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
        <a href="#about" class="hover:text-white transition">About</a>
        <a href="#faq" class="hover:text-white transition">FAQ</a>
        <a href="#testimonials" class="hover:text-white transition">Client Reflections</a>
        <a
            href="https://calendly.com/robormiston/new-meeting-3"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition"
        >
          Book a Session
        </a>
      </nav>

      <!-- CREDENTIALS + COPYRIGHT -->
      <p class="text-xs text-slate-400 leading-relaxed text-center max-w-lg">
        Registered Member MBACP (British Association for Counselling and Psychotherapy) · Confidential & Secure
        <br />
        © {{ new Date().getFullYear() }} Robert Ormiston · Heliosynthesis · All rights reserved
      </p>
    </div>
  </footer>
</template>

<style scoped>
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
  opacity: 0.10; /* Softer opacity for footer */
}
</style>

