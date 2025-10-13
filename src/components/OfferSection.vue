<template>
  <section id="offer" class="relative px-6 py-24 max-w-3xl mx-auto text-center text-slate-100">
    <!-- Soft navy gradient -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#20233e] to-[#181a2f]"></div>

    <!-- Gentle radial glow -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.08),transparent_70%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <!-- Main content -->
    <div class="relative z-10 space-y-6">
      <h2 class="text-3xl font-serif font-semibold mb-6 text-amber-100">
        An Invitation to Begin
      </h2>

      <p class="text-slate-200 leading-relaxed max-w-2xl mx-auto">
        Sessions are a calm, structured space to explore what’s unfolding within.
        Each 50-minute meeting draws from Internal Family Systems and EMDR-informed practice,
        helping you to reconnect with the steadiness beneath complexity.
      </p>

      <p class="text-slate-300 leading-relaxed max-w-2xl mx-auto">
        Afterward, you’ll receive a short written reflection — a personalised insight summary
        prepared with a professional Thought Assistant — to help integrate what emerged.
      </p>

      <!-- Soft call-to-action -->
      <div class="mt-10">
        <a
            href="https://calendly.com/robormiston/new-meeting-3"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block rounded-full bg-amber-100/90 text-slate-900 font-medium px-8 py-3 hover:bg-amber-200 transition shadow-md hover:shadow-amber-400/30 focus:outline-none focus:ring-4 focus:ring-amber-300/30"
        >
          Schedule a Conversation
        </a>
        <p class="text-slate-400 text-sm mt-3 italic">
          Online · Confidential · £95 per session
        </p>
      </div>

      <hr class="border-amber-100/20 my-10 w-1/3 mx-auto" />

      <p class="text-slate-400 text-sm italic">
        — Registered Member&nbsp;
        <a
            href="https://www.bacp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-300 hover:text-amber-200 underline/50"
        >
          MBACP
        </a>
        · Confidential & Secure
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
h2 {
  font-family: Lora, Georgia, serif;
}
p {
  font-family: Inter, system-ui, sans-serif;
}
</style>
