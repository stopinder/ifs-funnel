<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.hidden = true
}
</script>

<template>
  <section
      id="hero"
      class="bg-surface px-6 pb-10 pt-8 md:pb-12 md:pt-10 lg:px-8"
      aria-labelledby="hero-title"
  >
    <div class="mx-auto max-w-7xl">
      <div
          class="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,320px)] md:items-start md:gap-14 lg:gap-20"
      >
        <div class="min-w-0">
          <p
              class="mb-4 text-sm font-medium tracking-tight text-text-muted md:text-base"
          >
            Psychotherapist · Writer · Founder of Helios
          </p>

          <h1
              id="hero-title"
              class="max-w-[46rem] font-serif text-4xl font-normal leading-[1.08] tracking-[-0.03em] text-text sm:text-5xl lg:text-6xl"
          >
            A working life shaped by
            <span class="text-cobalt">people</span>,
            stories,
            <span class="text-cobalt">systems</span>
            and change.
          </h1>

          <p
              class="mt-6 max-w-[40rem] text-base leading-[1.7] text-text-muted md:text-lg"
          >
            My work has moved through psychiatry, journalism, psychotherapy,
            writing and technology. Across each of them, I’ve remained interested
            in how people make sense of their lives—and what makes meaningful
            change possible.
          </p>
        </div>

        <figure
            class="mx-auto w-full max-w-[280px] overflow-hidden rounded-md md:mx-0 md:max-w-[320px] md:justify-self-end"
        >
          <img
              src="/images/profile-stone-2026.jpg"
              alt="Robert Ormiston"
              width="640"
              height="800"
              decoding="async"
              fetchpriority="high"
              class="aspect-[4/5] w-full object-cover object-center"
              @error="handleImageError"
          />
        </figure>
      </div>

      <a
          href="https://helio.works"
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-10 flex w-full items-center justify-between border-y border-text/20 py-4 text-sm font-bold uppercase tracking-wider text-text transition-colors hover:border-cobalt hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-4 md:mt-12"
      >
        <span class="flex items-center gap-4">
          <span
              class="h-px w-8 bg-text transition-all group-hover:w-12 group-hover:bg-cobalt"
              aria-hidden="true"
          ></span>
          Currently building Helios
        </span>

        <span
            class="text-xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
        >
          ↗
        </span>

        <span class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </section>
</template>