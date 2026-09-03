<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.target as HTMLImageElement
  image.style.display = 'none'
}
</script>

<template>
  <section id="hero" class="bg-surface px-6 py-12 md:py-14 lg:px-8" aria-labelledby="hero-title">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.13em] text-text-muted md:text-sm">
            Psychotherapist · Writer · Founder of Helios
          </p>

          <h1 id="hero-title" class="max-w-[42rem] font-serif text-[2.8rem] font-normal leading-[1.06] tracking-[-0.035em] text-text sm:text-[3.5rem] lg:text-[4rem]">
            I’ve spent my working life around <span class="text-cobalt">people</span>, stories,
            <span class="text-cobalt">systems</span> and change.
          </h1>

          <p class="mt-6 max-w-[35rem] text-base leading-7 text-text md:text-lg md:leading-8">
            As a psychotherapist and writer, I’m interested in how we understand ourselves,
            how our systems shape us, and how change becomes possible — in individuals,
            in organisations and in society.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-x-9 gap-y-5">
            <a href="#about" class="inline-flex items-center gap-3 rounded-sm bg-cobalt px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-opacity hover:opacity-90">
              About my work <span aria-hidden="true">→</span>
            </a>
            <a href="#work" class="border-b border-cobalt pb-1 text-xs font-semibold uppercase tracking-[0.13em] text-cobalt transition-opacity hover:opacity-70">
              Life &amp; work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="overflow-hidden rounded-md bg-border/30">
          <img
            src="/images/profile.png"
            alt="Robert Ormiston"
            class="aspect-[16/10] h-full w-full object-cover object-center"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>
