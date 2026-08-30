<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.target as HTMLImageElement
  image.style.display = 'none'
}
</script>

<template>
  <section
      id="hero"
      class="bg-surface px-6 pt-12 pb-8 md:pt-16 md:pb-12"
      aria-labelledby="hero-title"
  >
    <div class="mx-auto max-w-7xl">
      <div class="max-w-5xl">
        <p
            class="mb-6 text-sm font-medium tracking-tight text-text-muted md:text-base"
        >
          Psychotherapist · Writer · Founder of Helios
        </p>

        <h1
            id="hero-title"
            class="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-text md:text-7xl lg:text-8xl"
        >
          I’ve spent my working life around
          <span class="text-cobalt">people</span>,
          stories,
          <span class="text-cobalt">systems</span>
          and change.
        </h1>
      </div>

      <div
          class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[auto_minmax(0,650px)] md:items-start md:gap-12"
      >
        <div class="flex-shrink-0">
          <img
              src="/images/profile.png"
              alt="Robert Ormiston"
              class="h-auto w-40 md:w-48"
              @error="handleImageError"
          />
        </div>

        <div>
          <div
              class="space-y-5 text-xl leading-[1.65] text-text md:text-2xl"
          >
            <p>
              My work has moved through psychiatric nursing, journalism,
              psychotherapy, writing and technology.
            </p>

            <p class="text-text-muted">
              Different fields, but often the same questions: how people make
              sense of experience, and how the systems around them help or get
              in the way.
            </p>
          </div>

          <div
              class="mt-7 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <a
                href="#about"
                class="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-text transition-colors hover:text-cobalt"
            >
              <span
                  class="h-px w-6 bg-text transition-colors group-hover:bg-cobalt"
              ></span>
              More about me
            </a>

            <a
                href="https://helio.works"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-cobalt"
            >
              Currently building Helios ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>