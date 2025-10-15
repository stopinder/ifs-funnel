<template>
  <footer
      id="footer"
      class="relative px-6 py-6 md:py-12 text-slate-300 overflow-hidden border-t border-slate-700 bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"
  >
    <!-- Subtle radial glow -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- 3-column layout -->
    <div
        class="relative z-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 items-center text-center md:text-left"
    >
      <!-- Column 1: Credentials -->
      <div class="space-y-3 text-[11px] md:text-sm text-slate-400 leading-relaxed">
        <p>
          Registered Member <strong>MBACP</strong> (Membership No. 00948196) ·
          <a
              href="https://www.bacp.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-300 hover:text-slate-100 underline/50"
          >
            British Association for Counselling and Psychotherapy
          </a>
          · Confidential & Secure
        </p>
        <p>
          © {{ new Date().getFullYear() }} Robert Ormiston · Chrysalis Therapy Services · All rights reserved
        </p>
      </div>

      <!-- Column 2: Chrysalis logo -->
      <div class="flex justify-center">
        <img
            ref="logoRef"
            :class="[
            'w-24 h-24 md:w-40 md:h-40 object-contain mx-auto transition-opacity duration-1000',
            logoVisible ? 'opacity-100' : 'opacity-0'
          ]"
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
    <nav class="mt-8 flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
      <a href="#about" class="px-2 py-1 rounded hover:bg-slate-800 transition">About</a>
      <a href="#faq" class="px-2 py-1 rounded hover:bg-slate-800 transition">FAQ</a>
      <a href="#testimonials" class="px-2 py-1 rounded hover:bg-slate-800 transition">Client Reflections</a>
      <a
          href="/terms.html"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 text-xs underline/50 hover:text-slate-200 px-2 py-1"
      >
        Terms & Privacy
      </a>
      <a href="#offer" class="px-2 py-1 rounded hover:bg-slate-800 transition">Book a Session</a>
    </nav>

    <!-- Back to Top Button -->
    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-lg transition-opacity duration-300"
        aria-label="Back to Top"
    >
      ↑
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)
const logoRef = ref(null)
const logoVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // Intersection Observer for logo fade-in
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

  // Show/hide Back to Top button
  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 300
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
footer {
  font-family: Inter, system-ui, sans-serif;
}

footer::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(30, 33, 59, 0.9));
  z-index: 1;
}
</style>

