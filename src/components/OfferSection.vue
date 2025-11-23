<template>
  <section
      id="offers"
      class="py-12 px-6 max-w-4xl mx-auto"
      aria-labelledby="offers-heading"
  >
    <h2
        id="offers-heading"
        class="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-3 text-center"
    >
      Psychotherapy and clinical consultation
    </h2>

    <p class="text-slate-700 mb-8 max-w-prose mx-auto text-center">
      IFS psychotherapy, EMDR-informed trauma work, and clinical consultation for therapists — grounded,
      evidence-informed, and focused on real change.
    </p>


    <div class="grid gap-4 sm:grid-cols-2">
      <!-- Card: Individual therapy -->
      <article
          class="p-5 bg-white rounded-lg border border-slate-100 shadow-sm"
          aria-labelledby="offer-individual"
      >
        <div class="flex items-start gap-3">
          <span class="flex-none mt-1" aria-hidden="true">
            <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c27b2e"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="inline-block"
            >
              <path
                  d="M20.8 7.6c0 5.2-8.8 11-8.8 11S3.2 12.8 3.2 7.6A4.4 4.4 0 017.6 3.2c1.6 0 3.2.9 4.2 2.3 1-1.4 2.6-2.3 4.2-2.3a4.4 4.4 0 014.6 4.4z"
              />
            </svg>
          </span>

          <div class="flex-1">
            <h3
                id="offer-individual"
                class="font-medium text-slate-900 mb-1"
            >
              Individual therapy
            </h3>

            <p class="text-sm text-slate-600 mb-2">
              50-minute sessions tailored to trauma work, parts-focused integration, and relational repair.
              Practical next steps and reflective summaries included.
            </p>

            <p class="text-xs text-slate-500">
              For fees and availability, please get in touch.
            </p>
          </div>
        </div>
      </article>

      <!-- Card: Clinical supervision -->
      <article
          class="p-5 bg-white rounded-lg border border-slate-100 shadow-sm"
          aria-labelledby="offer-supervision"
      >
        <div class="flex items-start gap-3">
          <span class="flex-none mt-1" aria-hidden="true">
            <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f766e"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <rect x="7" y="3" width="10" height="4" rx="1" />
              <rect x="5" y="7" width="14" height="14" rx="2" />
              <path d="M9 12h6M9 16h6" />
            </svg>
          </span>

          <div class="flex-1">
            <h3
                id="offer-supervision"
                class="font-medium text-slate-900 mb-1"
            >
              Clinical supervision
            </h3>

            <p class="text-sm text-slate-600 mb-2">
              IFS-informed supervision, EMDR integration support, and case formulation for clinicians seeking
              depth and clarity.
            </p>

            <p class="text-xs text-slate-500">
              For supervision arrangements and availability, please get in touch.
            </p>
          </div>
        </div>
      </article>
    </div>

    <!-- Single global CTA -->
    <div class="mt-8 flex justify-center">
      <a
          :href="contactMailtoHref"
          class="inline-flex items-center justify-center px-6 py-3 rounded-md
                 bg-amber-500 text-white text-sm md:text-base font-semibold shadow-md
                 hover:bg-amber-600
                 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          aria-label="Contact me about therapy or supervision"
      >
        Contact me
      </a>
    </div>

    <div class="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-600">
      Sessions are online. I provide concise post-session summaries to support integration and clinical reflection.
    </div>
  </section>
</template>

<script setup>
const baseEmail = "emdrifs@robormiston.com";

const contactSubject = "Therapy or supervision enquiry";
const contactBodyLines = [
  "Hi Robert,",
  "",
  "I'm getting in touch about therapy and/or clinical supervision.",
  "",
  "A bit about what I'm looking for:",
  "",
];
const contactBody = contactBodyLines.join("\n");

const contactMailtoHref =
    `mailto:${baseEmail}?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(contactBody)}`;
</script>

<style scoped>
section {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
svg {
  display: block;
}
a:focus-visible,
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.28); /* amber glow */
  border-radius: 8px;
}
</style>
