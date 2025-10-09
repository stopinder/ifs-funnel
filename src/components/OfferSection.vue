<template>
  <section id="offer" class="px-6 py-20 max-w-3xl mx-auto text-center text-slate-200 relative">
    <div class="absolute inset-0 animate-stars opacity-10 pointer-events-none"></div>

    <h2 class="text-3xl font-bold mb-6">Your Session & Insight Report</h2>

    <p class="text-slate-300 mb-6 leading-relaxed">
      A 50-minute <span class="font-semibold">Internal Family Systems</span> session,
      designed to help you meet your inner world with clarity and compassion.
      Afterward, you’ll receive a personalised, therapist-curated
      <span class="font-semibold">AI-assisted Insight Report</span> —
      a reflective summary highlighting key themes and directions for integration.
    </p>

    <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mt-6 shadow-md backdrop-blur-sm max-w-md mx-auto">
      <p class="text-xl font-semibold text-purple-300">£95 GBP</p>
      <p class="text-sm text-slate-400 italic mb-4">per 50-minute session + written Insight Report</p>

      <p class="text-slate-400 mb-6">
        Sessions are confidential and held online via Zoom.
        Payment is processed securely through Calendly using Stripe.
      </p>

      <a
          href="https://calendly.com/robormiston/new-meeting-3"
          target="_blank"
          rel="noopener noreferrer"
      >
        <button
            class="bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-200 transition
                 shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-500/40"
        >
          Book Your Session
        </button>
      </a>
    </div>

    <p class="text-slate-400 text-sm mt-8">
      00948196 · Registered Member
      <a
          href="https://www.bacp.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-purple-300 hover:text-purple-200 underline/50"
      >
        MBACP
      </a>
      · Confidential & Secure
    </p>
  </section>
</template>

<script setup>
</script>

<style scoped>
.animate-stars {
  background:
      radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
      radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  animation: moveStars 60s linear infinite, twinkle 4s ease-in-out infinite alternate;
  opacity: 0.1;
}
@keyframes moveStars {
  from { background-position: 0 0, 50px 50px; }
  to { background-position: -1000px 1000px, -950px 1050px; }
}
@keyframes twinkle {
  0%,100%{opacity:0.1;}
  50%{opacity:0.2;}
}
</style>
