<template>
  <footer
      id="footer"
      class="relative px-6 py-16 text-slate-300 overflow-hidden bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"
  >
    <!-- Subtle amber glow -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- 3-column layout -->
    <div
        class="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left"
    >
      <!-- Column 1: Credentials -->
      <div class="space-y-3 text-xs md:text-sm text-slate-400 leading-relaxed">
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

      <!-- Column 2: Chrysalis logo (fade-in on scroll) -->
      <div class="flex justify-center">
        <img
            ref="logoRef"
            :class="['w-20 h-20 object-contain mx-auto transition-opacity duration-1000', logoVisible ? 'opacity-100' : 'opacity-0']"
            src="/ChrysalisLogo.png"
            alt="Chrysalis Therapy Services Logo"
            loading="lazy"
        />
      </div>

      <!-- Column 3: Profile image -->
      <div class="flex justify-center">
        <img
            src="/profile.jpg"
            alt="Portrait of psychotherapist Robert Ormiston"
            class="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md"
            loading="lazy"
        />
      </div>
    </div>

    <!-- Footer nav links -->
    <nav class="mt-10 flex flex-wrap justify-center gap-4 text-sm">
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
      <a href="#offer" class="hover:text-amber-200 transition">Book a Session</a>
    </nav>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const logoRef = ref(null)
const logoVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logoVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
  )
  if (logoRef.value) observer.observe(logoRef.value)
})
</script>

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
  background: linear-gradient(to bottom, transparent, rgba(30, 33, 59, 0.9));
  z-index: 1;
}
</style>
