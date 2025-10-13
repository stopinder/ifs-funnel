<template>
  <footer
      id="footer"
      class="relative px-6 py-16 text-slate-300 text-center overflow-hidden bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"
  >
    <!-- Subtle amber glow -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6">
      <!-- Small profile image -->
      <img
          src="/profile.jpg"
          alt="Portrait of psychotherapist Robert Ormiston"
          class="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md"
          loading="lazy"
      />

      <!-- Nav links -->
      <nav class="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
        <a href="#about" class="hover:text-amber-200 transition">About</a>
        <a href="#faq" class="hover:text-amber-200 transition">FAQ</a>
        <a href="#testimonials" class="hover:text-amber-200 transition">Client Reflections</a>
        <a
            href="/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-amber-200 text-xs underline/50"
        >
          Terms & Privacy
        </a>
        <a
            href="#offer"
            class="hover:text-amber-200 transition"
        >
          Book a Session
        </a>
      </nav>

      <!-- Credentials + Copyright -->
      <div class="text-xs text-slate-400 leading-relaxed text-center max-w-lg space-y-3">
        <p>
          Registered Member <strong>MBACP</strong> (Membership No. 00948196) ·
          <a
              href="https://www.bacp.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              class="text-amber-300 hover:text-amber-200 underline/50"
          >
            British Association for Counselling and Psychotherapy
          </a>
          · Confidential & Secure
        </p>

        <p>
          © {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: Inter, system-ui, sans-serif;
}

footer::before {
  content: "";
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(30,33,59,0.9));
  z-index: 1;
}
</style>
