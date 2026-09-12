<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.hidden = true
}
</script>

<template>
  <section id="hero" class="bg-surface" aria-labelledby="hero-title">
    <div class="page-shell pb-6 pt-9 md:pb-8 md:pt-12">
      <div class="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:items-center md:gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div class="min-w-0">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            Psychotherapist · Writer · Founder of Helios
          </p>

          <h1 id="hero-title" class="max-w-[47rem] font-serif text-[2.75rem] font-normal leading-[1.04] tracking-[-0.035em] text-text sm:text-6xl lg:text-[4.25rem]">
            A working life shaped by
            <span class="text-cobalt">people</span>, stories,
            <span class="text-cobalt">systems</span> and change.
          </h1>

          <p class="mt-6 max-w-[39rem] text-[17px] leading-[1.72] text-text-muted md:text-lg">
            My work has moved through psychiatry, journalism, psychotherapy,
            writing and technology. Across each of them, I’ve remained interested
            in how people make sense of their lives—and what makes meaningful
            change possible.
          </p>
        </div>

        <figure class="relative mx-auto w-full max-w-[260px] md:max-w-none md:justify-self-end">
          <div class="absolute inset-x-5 bottom-0 top-8 rounded-sm bg-surface-soft" aria-hidden="true"></div>
          <img
            src="/images/profile.png"
            alt="Robert Ormiston"
            width="640"
            height="800"
            decoding="async"
            fetchpriority="high"
            class="relative aspect-[4/5] w-full object-cover object-center"
            @error="handleImageError"
          />
        </figure>
      </div>

      <a
        href="https://helio.works"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-8 flex w-full items-center justify-between border-y border-border py-4 text-xs font-semibold uppercase tracking-[0.16em] text-text transition-colors hover:border-cobalt hover:text-cobalt md:mt-10"
      >
        <span class="flex items-center gap-4">
          <span class="h-px w-8 bg-current transition-all group-hover:w-11" aria-hidden="true"></span>
          Currently building Helios
        </span>
        <span class="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
        <span class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </section>
</template>
