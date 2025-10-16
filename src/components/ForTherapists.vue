<template>
  <section
      id="for-therapists"
      class="relative px-6 py-24 max-w-4xl mx-auto text-center animate-fade-in text-slate-100 bg-cover bg-center bg-no-repeat"
      :style="sectionStyle"
      aria-label="For therapists and practitioners"
  >
    <!-- ensure the image actually loads (visually-hidden) so you can see the request in Network tab -->
    <img
        :src="imagePath"
        alt="Therapist reflective woman"
        class="sr-only"
        aria-hidden="true"
    />

    <!-- Gradient overlay (reduced opacity so image shows through) -->
    <div
        class="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        :style="{
        background:
          'linear-gradient(to bottom, rgba(30,33,59,0.35), rgba(35,37,61,0.28) 40%, rgba(24,26,47,0.42))'
      }"
    ></div>

    <!-- Subtle radial glow (decorative) -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.04),transparent_80%)] blur-3xl z-0 pointer-events-none"
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

      <!-- CTA Button -->
      <div class="relative inline-block group">
        <a
            @click="handleMailtoClick"
            :href="mailtoHref"
            class="inline-flex items-center gap-2 bg-[#8B5E2B] text-white font-medium px-6 py-3 rounded-full hover:bg-[#7a4e20] transition-transform transition-shadow shadow-sm hover:shadow-md active:translate-y-[1px] focus:outline-none focus:ring-4 focus:ring-[#8B5E2B]/25"
            aria-label="Enquire about integration via email"
        >
          <!-- Envelope Icon (unchanged) -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.723 1.665l-7.5 6.75a2.25 2.25 0 01-3.054 0l-7.5-6.75A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          Enquire About Integration
        </a>



        <!-- Tooltip -->
        <div
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-700 text-sm text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        >
          Opens your email client
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div
        v-if="showToast"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300"
        role="status"
        aria-live="polite"
    >
      Your email client should open. <br />
      If not, please email: <strong>chrysalisifs@robormiston.com</strong>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const imagePath = '/reflective-woman.png' // <--- updated to your PNG
const sectionStyle = `background-image: url('${imagePath}'); background-position: center; background-size: cover; background-repeat: no-repeat;`

const showToast = ref(false)
const mailtoHref = 'mailto:chrysalisifs@robormiston.com?subject=Integration%20Inquiry&body=Hello%20Robert,%0D%0A%0D%0AI%27m%20interested%20in%20learning%20more%20about%20integrating%20your%20reflective%20framework%20into%20my%20practice.%0D%0A%0D%0AThank%20you,'

const handleMailtoClick = () => {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 6000)
}
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
h2 { font-family: Lora, Georgia, serif; }
p, a { font-family: Inter, system-ui, sans-serif; }

/* fallback color if image fails to load */
#for-therapists {
  background-color: #0b1220;
}
</style>
