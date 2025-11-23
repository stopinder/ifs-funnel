<template>
  <section
      id="book-cta"
      class="py-8 px-6"
      aria-labelledby="book-cta-heading"
  >
    <div class="max-w-4xl mx-auto">
      <!-- Card wrapper -->
      <article
          class="p-6 md:p-8 bg-white rounded-lg border border-slate-100 shadow-sm max-w-xl mx-auto text-center"
      >
        <h2
            id="book-cta-heading"
            class="text-3xl md:text-4xl font-semibold leading-snug text-slate-900 mb-3"
        >
          Book a session
        </h2>

        <p
            class="text-lg leading-relaxed font-normal text-slate-700 mb-4"
        >
          50-minute confidential online session.
          Calm, structured, evidence-based support for trauma, overwhelm, and relationship strain.
        </p>

        <div class="flex justify-center">
          <a
              :href="contactMailtoHref"
              class="inline-flex items-center justify-center px-6 py-3 rounded-md
                 bg-amber-500 text-white text-base font-semibold shadow-md
                 hover:bg-amber-600
                 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          >
            Contact me
          </a>
        </div>
      </article>
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
