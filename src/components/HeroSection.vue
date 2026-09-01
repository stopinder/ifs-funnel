<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.target as HTMLImageElement
  image.style.display = 'none'
}
</script>

<template>
  <section
      id="hero"
      class="bg-surface px-6 pt-14 pb-10 md:pt-20 md:pb-14"
      aria-labelledby="hero-title"
  >
    <div class="mx-auto max-w-7xl">
      <div class="max-w-[68rem]">
        <p class="mb-7 text-sm font-medium tracking-[0.01em] text-text-muted md:text-[15px]">
          Psychotherapist · Writer · Founder of Helios
        </p>

        <h1
            id="hero-title"
            class="font-serif text-[3.25rem] font-normal leading-[1.04] tracking-[-0.035em] text-text md:text-[4.75rem] lg:text-[6rem] lg:leading-[1.01]"
        >
          I’ve spent my working life around
          <span class="text-cobalt">people</span>,
          stories,
          <span class="text-cobalt">systems</span>
          and change.
        </h1>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-[auto_minmax(0,620px)] md:items-start md:gap-14">
        <div class="flex-shrink-0">
          <img
              src="/images/profile.png"
              alt="Robert Ormiston"
              class="h-auto w-36 md:w-44"
              @error="handleImageError"
          />
        </div>

        <div>
          <div class="max-w-[39rem] space-y-5 text-lg leading-[1.72] text-text md:text-xl md:leading-[1.7]">
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

          <div class="mt-8 flex flex-wrap items-center gap-x-9 gap-y-4">
            <a
                href="#about"
                class="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-text transition-colors hover:text-cobalt"
            >
              <span class="h-px w-7 bg-text/70 transition-colors group-hover:bg-cobalt"></span>
              More about me
            </a>

            <a
                href="https://helio.works"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-cobalt"
            >
              Currently building Helios ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
