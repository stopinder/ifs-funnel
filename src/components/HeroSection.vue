<template>
  <section
      id="hero"
      class="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-24
             bg-gradient-to-b from-slate-50 to-stone-100 text-slate-900"
      aria-label="Hero: calm, containing, approachable"
  >
    <!-- subtle rose radial glow behind the card -->
    <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
    >
      <div
          class="w-[480px] h-[480px] rounded-full
           bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18)_0%,rgba(255,255,255,0)_70%)]
           blur-2xl opacity-60"
      ></div>

    </div>

    <div
        class="relative z-10 max-w-2xl w-full
               rounded-2xl
               bg-gradient-to-br from-white/90 to-slate-50/90
               backdrop-blur-sm
               border border-white/60
               shadow-lg
               p-6 md:p-12"
        role="region"
        aria-labelledby="hero-title"
        aria-describedby="hero-intro"
    >
      <!-- Top bar: brand left / socials right -->
      <div
          class="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
      >
        <!-- Clinic ID row (left) -->
        <div class="flex items-center justify-center md:justify-start gap-3">
          <img
              src="/images/ChrysalisLogo.svg"
              alt="Chrysalis Psychotherapy"
              class="w-16 h-16 object-contain opacity-90"
              loading="eager"
              decoding="async"
          />
          <span class="text-sm font-medium text-slate-600">
            Chrysalis Psychotherapy
          </span>
        </div>

        <!-- Socials (right) with softer framing -->
        <div class="flex flex-col items-center md:items-end">
          <span
              class="text-[10px] uppercase tracking-wide text-slate-400 font-medium mb-1"
          >
            Profile
          </span>
          <FooterSocials />
        </div>
      </div>

      <!-- Divider between ID band and body -->
      <div
          class="border-t border-slate-200/60 pt-4 md:pt-6"
      ></div>

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
               bg-gradient-to-r from-amber-400/80 to-transparent pointer-events-none"
        aria-hidden="true"
    ></span>
  </span>
      </h1>

      <!-- Sub-head / emotional attunement line -->
      <p
          class="text-sm md:text-base text-slate-700 leading-relaxed mt-3 text-center md:text-left"
      >
        For adults who are done holding it all together in silence.
      </p>

      <!-- Accent line under headline block -->
      <div
          class="w-16 h-1 bg-teal-600 rounded mt-4 mb-4 mx-auto md:mx-0"
          aria-hidden="true"
      ></div>


      <!-- Credibility badges -->
      <ul
          class="flex flex-wrap justify-center md:justify-start gap-2 mb-4"
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
        <!-- Contact Me: mailto primary -->
        <a
            :href="mailtoHref"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
             bg-teal-600 text-white hover:bg-teal-700
             focus:outline-none focus:ring-4 focus:ring-teal-200"
        >
          Contact me
        </a>

        <!-- Philosophy of Practice: scroll secondary -->
        <button
            @click.prevent="scrollTo('#philosophy')"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-300
             bg-white text-slate-600 hover:bg-slate-50
             focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Philosophy of Practice
        </button>
      </div>


      <!-- Micro trust line -->
      <p
          class="mt-4 text-xs text-slate-600 text-center md:text-left leading-relaxed"
      >
        Online. Confidential. UK-based.
      </p>

      <!-- Compliance / reassurance row -->
      <div
          class="mt-6 flex items-center justify-center md:justify-start gap-2 text-slate-500"
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
              class="inline-block w-2 h-2 rounded-full bg-amber-400/70 translate-y-[5px] shadow-[0_0_8px_rgba(251,191,36,0.6)]"
              aria-hidden="true"
          ></span>

          <span>
            Registered Member (MBACP) — British Association for Counselling &amp;
            Psychotherapy
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import FooterSocials from '@/components/FooterSocials.vue'

const props = defineProps({
  bookTarget: { type: String, default: '#book-cta' }, // now unused externally but kept for backward compatibility
  learnMoreHref: { type: String, default: '#about' }  // also kept in case something else references it
})

// email CTA
// You told me this is the only address to use:
const emailAddress = 'chrysalisifs.robormiston.com'
const subject = 'Therapy enquiry'
const body = [
  'Hi Robert,',
  '',
  "I'd like to ask about therapy / booking a session.",
  '',
  "I'm getting in touch because..."
].join('%0D%0A')

const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${body}`

function scrollTo(selector) {
  try {
    const el = document.querySelector(selector)
    if (el) {
      el.setAttribute('tabindex', '-1')
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus?.({ preventScroll: true })
    } else {
      const fallback = document.getElementById(
          selector.replace('#', '')
      )
      if (fallback) {
        fallback.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  } catch (e) {
    window.location.hash = selector
  }
}
</script>

<style scoped>
/* keep accessible focus for keyboard users on the primary CTA */
a:focus,
button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
}
</style>

