<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16
           bg-gradient-to-b from-[#fafafa] via-[#ffffff] to-[#f5f7f7] text-slate-900"
      aria-label="Hero section"
  >
    <!-- subtle radial softness in background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
          class="absolute top-16 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full
               bg-[radial-gradient(circle_at_center,rgba(0,150,136,0.12)_0%,rgba(255,255,255,0)_70%)]
               blur-3xl opacity-40"
      ></div>
    </div>

    <div
        class="relative z-10 max-w-2xl w-full
             rounded-2xl
             bg-white/80
             backdrop-blur-sm
             border border-white/70
             shadow-[0_30px_80px_rgba(0,0,0,0.08)]
             p-6 md:p-8"
        role="region"
        aria-labelledby="hero-title"
        aria-describedby="hero-intro"
    >
      <!-- TOP BAR: identity (left) / socials (right) -->
      <div
          class="flex flex-col md:flex-row md:items-start md:justify-between gap-4"
      >
        <!-- Identity block -->
        <div class="flex-1 text-center md:text-left">
          <div class="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Clinical • IFS · EMDR-informed
          </div>

          <div class="mt-1 text-xl font-semibold text-slate-900 leading-snug tracking-tight">
            Chrysalis Psychotherapy
          </div>

          <div class="mt-1 text-[0.8rem] text-slate-600 leading-snug">
            Safe depth work for parts in distress.
          </div>

          <div
              class="w-10 h-[2px] bg-teal-600 rounded mt-3 md:mt-4 mx-auto md:mx-0"
          ></div>
        </div>

        <!-- Socials block (now explicit icons) -->
        <div class="flex flex-col items-center md:items-end min-w-[140px]">
          <span
              class="text-[10px] uppercase tracking-wide text-slate-600 font-medium mb-2"
          >
            Connect
          </span>

          <div class="flex items-center gap-3">
            <a
                href="https://www.linkedin.com/in/robertormiston/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 hover:text-teal-700 transition-colors"
                aria-label="LinkedIn"
            >
              <!-- LinkedIn SVG -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.7 2.63 4.7 6.05V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.6h-4V8z"
                />
              </svg>
            </a>

            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 hover:text-teal-700 transition-colors"
                aria-label="Facebook"
            >
              <!-- Facebook SVG -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider with tighter spacing -->
      <div class="border-t border-slate-200/70 mt-4 pt-4"></div>

      <!-- Headline -->
      <h1
          id="hero-title"
          class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-snug text-slate-900 text-center md:text-left"
      >
        I help you calm what's overwhelming
        <span class="text-teal-700 relative">
          and make space to live
          <span
              class="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full
                   bg-gradient-to-r from-teal-600/70 to-transparent pointer-events-none"
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
            class="bg-teal-50 text-slate-800 rounded-md px-1.5 py-0.5 border border-teal-200/60"
        >
          done holding it all together in silence
        </span>
        .
      </p>

      <!-- Accent bar -->
      <div
          class="w-16 h-1 bg-teal-600 rounded mt-4 mb-4 mx-auto md:mx-0"
          aria-hidden="true"
      ></div>

      <!-- Body copy -->
      <p
          id="hero-intro"
          class="text-base md:text-lg text-slate-800 leading-loose md:leading-relaxed mb-6 text-center md:text-left"
      >
        For adults who want steadiness, deeper self-understanding, and change
        that actually holds in real life — not another cycle of coping and
        crashing.
      </p>

      <!-- CTA row -->
      <div
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-center md:text-left"
      >
        <a
            :href="mailtoHref"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                 bg-teal-600 text-white hover:bg-teal-700
                 shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                 focus:outline-none focus:ring-4 focus:ring-teal-200"
        >
          Contact me
        </a>

        <button
            @click.prevent="scrollTo('#philosophy')"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-300
                 bg-white text-slate-600 hover:bg-slate-50
                 shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Philosophy of Practice
        </button>
      </div>

      <!-- Credibility badges -->
      <ul
          class="flex flex-wrap justify-center md:justify-start gap-2 mt-6 mb-4"
          aria-label="Clinical credibility markers"
      >
        <li
            class="px-2 py-1 rounded-md border border-slate-300 bg-white
                 text-[11px] font-medium text-slate-700 leading-none tracking-wide"
        >
          MBACP Registered
        </li>
        <li
            class="px-2 py-1 rounded-md border border-slate-300 bg-white
                 text-[11px] font-medium text-slate-700 leading-none tracking-wide"
        >
          15+ yrs clinical practice (NHS &amp; private)
        </li>
        <li
            class="px-2 py-1 rounded-md border border-slate-300 bg-white
                 text-[11px] font-medium text-slate-700 leading-none tracking-wide"
        >
          IFS &amp; EMDR-informed
        </li>
      </ul>

      <!-- Micro trust line -->
      <p
          class="text-xs text-slate-600 text-center md:text-left leading-relaxed"
      >
        Online. Confidential. UK-based.
      </p>

      <!-- Compliance / reassurance row -->
      <div
          class="mt-4 flex items-center justify-center md:justify-start gap-2 text-slate-500"
      >
        <img
            src="/images/bacp-logo.png"
            alt="BACP"
            class="h-6 w-auto opacity-80"
            loading="lazy"
            decoding="async"
        />
        <span class="text-xs leading-snug flex items-start gap-1">
          <span
              class="inline-block w-2 h-2 rounded-full bg-teal-600 translate-y-[5px] shadow-[0_0_6px_rgba(13,148,136,0.6)]"
              aria-hidden="true"
          ></span>

          <span class="text-slate-700">
            Registered Member (MBACP) — British Association for Counselling &amp;
            Psychotherapy
          </span>
        </span>
      </div>
    </div>
  </section>
</template>
