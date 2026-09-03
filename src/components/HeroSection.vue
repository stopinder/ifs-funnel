<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.hidden = true
}
</script>

<template>
  <section
      id="hero"
      class="bg-surface px-6 pb-8 pt-12 md:pb-10 md:pt-16 lg:px-8"
      aria-labelledby="hero-title"
  >
    <div class="mx-auto max-w-7xl">
      <div
          class="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] md:items-start md:gap-12 lg:gap-16"
      >
        <div class="min-w-0">
          <p
              class="mb-5 text-sm font-medium tracking-tight text-text-muted md:text-base"
          >
            Psychotherapist · Writer · Founder of Helios
          </p>

          <h1
              id="hero-title"
              class="max-w-[42rem] font-serif text-5xl font-normal leading-[1.06] tracking-[-0.03em] text-text md:text-6xl lg:text-7xl"
          >
            I’ve spent my working life around
            <span class="text-cobalt">people</span>,
            stories,
            <span class="text-cobalt">systems</span>
            and change.
          </h1>

          <p
              class="mt-7 max-w-[36rem] text-lg leading-[1.65] text-text md:text-xl"
          >
            My work has moved through psychiatric nursing, journalism,
            psychotherapy, writing and technology.
          </p>
        </div>

        <figure
            class="mx-auto w-full max-w-[420px] overflow-hidden rounded-md md:mx-0 md:justify-self-end"
        >
          <img
              src="/images/profile.png"
              alt="Robert Ormiston"
              width="840"
              height="1080"
              decoding="async"
              fetchpriority="high"
              class="h-[500px] w-full object-cover object-center lg:h-[540px]"
              @error="handleImageError"
          />
        </figure>
      </div>

      <a
          href="https://helio.works"
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-10 flex w-full items-center justify-between border-y border-text/20 py-5 text-sm font-bold uppercase tracking-wider text-text transition-colors hover:border-cobalt hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-4 md:mt-12"
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