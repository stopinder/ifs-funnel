<!-- src/components/OfferSection.vue -->
<template>
  <section id="offers" class="py-12 px-6 max-w-4xl mx-auto" aria-labelledby="offers-heading">
    <h2 id="offers-heading" class="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-3">
      What I offer
    </h2>

    <p class="text-slate-700 mb-8 max-w-prose">
      Short-term and open-ended IFS psychotherapy, EMDR-informed trauma work, and focused clinical
      consultation for therapists. Practical, evidence-informed, and warm — tailored to the change you want.
    </p>

    <div class="grid gap-4 sm:grid-cols-2">
      <!-- Card: Individual therapy -->
      <article class="p-5 bg-white rounded-lg border border-slate-100 shadow-sm" aria-labelledby="offer-individual">
        <div class="flex items-start gap-3">
          <span class="flex-none mt-1" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c27b2e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="inline-block">
              <path d="M20.8 7.6c0 5.2-8.8 11-8.8 11S3.2 12.8 3.2 7.6A4.4 4.4 0 017.6 3.2c1.6 0 3.2.9 4.2 2.3 1-1.4 2.6-2.3 4.2-2.3a4.4 4.4 0 014.6 4.4z"/>
            </svg>
          </span>

          <div class="flex-1">
            <h3 id="offer-individual" class="font-medium text-slate-900 mb-1">Individual therapy</h3>
            <p class="text-sm text-slate-600 mb-4">
              50-minute sessions tailored to trauma work, parts-focused integration, and relational repair.
              Practical next steps and reflective summaries included.
            </p>

            <div class="flex items-center gap-3">
              <a href="#book-cta" class="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-slate-900 font-semibold shadow-sm hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/60" aria-label="Book individual therapy">
                Book
              </a>
              <a href="#about" class="text-sm text-slate-700 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </article>

      <!-- Card: Clinical supervision -->
      <article class="p-5 bg-white rounded-lg border border-slate-100 shadow-sm" aria-labelledby="offer-supervision">
        <div class="flex items-start gap-3">
          <span class="flex-none mt-1" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="7" y="3" width="10" height="4" rx="1" />
              <rect x="5" y="7" width="14" height="14" rx="2" />
              <path d="M9 12h6M9 16h6" />
            </svg>
          </span>

          <div class="flex-1">
            <h3 id="offer-supervision" class="font-medium text-slate-900 mb-1">Clinical supervision</h3>
            <p class="text-sm text-slate-600 mb-4">
              IFS-informed supervision, EMDR integration support, and case formulation for clinicians seeking depth and clarity.
            </p>

            <div class="flex items-center gap-3">
              <a href="#for-therapists" class="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 font-semibold shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/40" aria-label="Learn about supervision">
                Learn
              </a>
              <a href="#book-cta" class="text-sm text-slate-700 hover:underline">Book supervision</a>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-600">
      Sessions are online. I provide concise post-session summaries to support integration and clinical reflection.
    </div>
  </section>
</template>

<script setup>
// intentionally minimal — presentational only
</script>

<style scoped>
/* theme and accessibility niceties */
section { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
svg { display: block; }
a:focus-visible, button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 6px rgba(162,122,62,0.08);
  border-radius: 8px;
}
</style>
