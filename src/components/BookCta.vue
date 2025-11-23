<template>
  <section
      id="book-cta"
      class="relative px-6 py-20 md:py-24
           bg-surface dark:bg-surface-dark
           text-textsurface dark:text-textsurface-dark
           border-t border-bordercol-light dark:border-bordercol-dark
           transition-colors-bg duration-300 ease-subtle"
      aria-labelledby="book-cta-heading"
  >
    <!-- optional soft aura / depth -->
    <div
        class="pointer-events-none absolute inset-0
             bg-gradient-to-b from-transparent to-primary/5
             dark:from-transparent dark:to-primary/10"
        aria-hidden="true"
    ></div>

    <div class="relative max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <!-- Left block: headline + reassurance -->
      <div class="text-center md:text-left max-w-xl mx-auto md:mx-0">
        <h2
            id="book-cta-heading"
            class="text-3xl md:text-4xl font-semibold leading-snug
         text-textsurface dark:text-textsurface-dark
         text-center"
        >
          Book a session
        </h2>

        <p
            class="mt-4 text-lg leading-relaxed font-normal
         text-textsurface dark:text-textsurface-dark
         text-center max-w-prose mx-auto"
        >
          50-minute confidential online session.
          Calm, structured, evidence-based support for trauma, overwhelm, and relationship strain.
        </p>


        <p
            class="mt-2 text-sm leading-relaxed text-textsurface/80 dark:text-textsurface-dark/80"
        >
          No obligation. You’re not “signing up for therapy.”
          It’s a first conversation to see if this feels like a fit.
        </p>
      </div>

      <!-- Right block: action & reassurance tag -->
      <div class="flex flex-col items-center md:items-end gap-3 md:gap-4 min-w-[220px]">

        <!-- Primary CTA button — replaced with Amber Email Button -->
        <a
            :href="mailtoHref"
            class="inline-flex items-center justify-center
                 w-full md:w-auto
                 px-6 py-3 rounded-md text-base font-medium
                 bg-amber-500 text-white shadow-md
                 hover:bg-amber-600
                 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300
                 transition-all duration-200"
        >
          Email me
        </a>

        <!-- micro-trust line -->
        <div
            class="text-xs text-textsurface/80 dark:text-textsurface-dark/80 text-center md:text-right leading-snug"
        >
          Secure & confidential
          <span class="inline-block align-middle ml-1 w-2 h-2 rounded-full bg-amber-500 shadow-glow"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emailAddress = "emdrifs@robormiston.com";
const subject = "Therapy enquiry";
const bodyLines = [
  "Hi Robert,",
  "",
  "I'd like to ask about therapy / booking a session.",
  "",
  "I'm getting in touch because..."
];
const body = bodyLines.join("\n");

const mailtoHref =
    `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
</script>

<style scoped>
/* CTA styling comes from Tailwind tokens */
</style>
