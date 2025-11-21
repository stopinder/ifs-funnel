<script setup lang="ts">
const mailtoHref =
    "mailto:chrysalisifs@robormiston.com?subject=Therapy%20enquiry";

function scrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>

<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16
           bg-gradient-to-b from-[#f8f5f2] via-[#ffffff] to-[#f6f4f2] text-slate-900"
      aria-label="Hero section"
  >
    <!-- subtle radial softness in background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
          class="absolute top-16 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full
               bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.10)_0%,rgba(255,255,255,0)_70%)]
               blur-3xl opacity-40"
      ></div>
    </div>

    <div
        class="relative z-10 max-w-2xl w-full
             rounded-2xl
             bg-white/90
             backdrop-blur-sm
             shadow-[0_24px_70px_rgba(15,23,42,0.08)]
             p-6 md:p-8"
        role="region"
        aria-labelledby="hero-title"
        aria-describedby="hero-intro"
    >
      <!-- Identity block -->
      <div class="flex flex-col gap-2 text-center md:text-left">
        <div class="text-xs font-medium tracking-wide text-teal-800">
          Clinical IFS &amp; EMDR-informed psychotherapy
        </div>

        <div class="text-xl font-semibold text-slate-900 leading-snug tracking-tight">
          Chrysalis Psychotherapy
        </div>

        <div>
          <!-- Top line + softer symbolic SVG accent -->
          <div class="mt-1 flex items-center gap-3 text-sm text-slate-700 leading-snug">
            <span>Psychotherapy for adults feeling overwhelmed, stuck, or burnt out.</span>

            <!-- two open circles with a gentle connecting curve -->
            <svg
                class="h-16 w-16 md:h-20 md:w-20"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
              <defs>
                <!-- left circle gradient -->
                <linearGradient id="leftCircleGrad" x1="20" y1="30" x2="80" y2="90">
                  <stop offset="0%" stop-color="#0f766e" />   <!-- teal-700 -->
                  <stop offset="100%" stop-color="#14b8a6" /> <!-- teal-500 -->
                </linearGradient>

                <!-- right circle gradient -->
                <linearGradient id="rightCircleGrad" x1="100" y1="30" x2="40" y2="90">
                  <stop offset="0%" stop-color="#115e59" />   <!-- teal-800 -->
                  <stop offset="100%" stop-color="#0d9488" /> <!-- teal-600 -->
                </linearGradient>

                <!-- overlap "shared space" fill -->
                <radialGradient id="overlapFill" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stop-color="#a7f3d0" />   <!-- emerald-200 -->
                  <stop offset="70%" stop-color="#6ee7b7" />  <!-- emerald-300 -->
                  <stop offset="100%" stop-color="#22c55e" /> <!-- emerald-500 -->
                </radialGradient>
              </defs>

              <!-- left circle (slightly smaller) -->
              <circle
                  cx="44"
                  cy="60"
                  r="30"
                  stroke="url(#leftCircleGrad)"
                  stroke-width="3"
              />

              <!-- right circle (slightly larger, mild asymmetry) -->
              <circle
                  cx="76"
                  cy="60"
                  r="32"
                  stroke="url(#rightCircleGrad)"
                  stroke-width="3"
              />

              <!-- symbolic overlap: grounded shared space in the middle -->
              <circle
                  cx="60"
                  cy="60"
                  r="11"
                  fill="url(#overlapFill)"
                  fill-opacity="0.9"
                  stroke="white"
                  stroke-width="1.4"
              />
            </svg>




          </div>

          <div class="mt-1 text-[0.8rem] text-slate-600 leading-snug">
            Safe depth work for parts in distress.
          </div>

          <div class="w-10 h-[2px] bg-teal-700 rounded mt-3 md:mt-4 mx-auto md:mx-0"></div>
        </div>

        <!-- Headline -->
        <h1
            id="hero-title"
            class="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-snug text-slate-900 text-center md:text-left"
        >
          I help you calm what's overwhelming
          <span class="text-teal-800 relative">
            and make space to live
            <span
                class="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full
                     bg-gradient-to-r from-teal-700/70 to-transparent pointer-events-none"
                aria-hidden="true"
            ></span>
          </span>
        </h1>

        <!-- Sub-head -->
        <p
            class="text-sm md:text-base text-slate-700 leading-relaxed mt-2 text-center md:text-left"
        >
          For adults who are
          <span
              class="bg-teal-50 text-slate-800 rounded-md px-1.5 py-0.5 border border-teal-100"
          >
            done holding it all together in silence
          </span>
          .
        </p>

        <!-- Accent bar -->
        <div
            class="w-16 h-1 bg-teal-700 rounded mt-4 mb-4 mx-auto md:mx-0"
            aria-hidden="true"
        ></div>

        <!-- Body copy -->
        <p
            id="hero-intro"
            class="text-base md:text-lg text-slate-800 leading-loose md:leading-relaxed mb-6 text-center md:text-left"
        >
          For adults who want steadiness, deeper self-understanding, and change
          that actually holds in real life — not another cycle of coping and
          crashing. We go slowly, at a pace that feels safe.
        </p>

        <!-- CTA row -->
        <div
            class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-center md:text-left"
        >
          <a
              :href="mailtoHref"
              class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium
         bg-amber-500 text-white shadow-md hover:bg-amber-600
         focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300
         transition-all duration-200"
          >
            Email me
          </a>




          <button
              @click.prevent="scrollTo('#philosophy')"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-300/90
                   bg-white text-slate-700 hover:bg-slate-50
                   shadow-[0_12px_30px_rgba(15,23,42,0.10)]
                   focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            How I work
          </button>
        </div>

        <!-- Credibility badges -->
        <ul
            class="flex flex-wrap justify-center md:justify-start gap-2 mt-6 mb-4"
            aria-label="Clinical credibility markers"
        >
          <li
              class="px-2.5 py-1 rounded-full border border-slate-200 bg-white/90
                   text-[11px] font-medium text-slate-700 leading-none tracking-wide"
          >
            MBACP Registered
          </li>
          <li
              class="px-2.5 py-1 rounded-full border border-slate-200 bg-white/90
                   text-[11px] font-medium text-slate-700 leading-none tracking-wide"
          >
            15+ yrs clinical practice (NHS &amp; private)
          </li>
          <li
              class="px-2.5 py-1 rounded-full border border-slate-200 bg-white/90
                   text-[11px] font-medium text-slate-700 leading-none tracking-wide"
          >
            IFS &amp; EMDR-informed
          </li>
        </ul>

        <!-- Micro trust + BACP reassurance -->
        <p class="text-xs text-slate-600 text-center md:text-left leading-relaxed">
          Online. Confidential. UK-based. Registered Member (MBACP) — British
          Association for Counselling &amp; Psychotherapy.
        </p>
      </div>
    </div>
  </section>
</template>
