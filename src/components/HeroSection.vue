<script setup lang="ts">
function handleImageError(event: Event) {
  const image = event.target as HTMLImageElement
  image.style.display = 'none'
}
</script>

<template>
  <section
      id="hero"
      class="bg-surface px-6 py-12 md:py-16 lg:px-8"
      aria-labelledby="hero-title"
  >
    <div class="mx-auto max-w-7xl">
      <div
          class="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] md:items-start md:gap-12 lg:gap-16"
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

          <div
              class="mt-7 max-w-[36rem] space-y-4 text-lg leading-[1.65] text-text md:text-xl"
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

          <div class="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
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

        <div
            class="mx-auto w-full max-w-[520px] overflow-hidden rounded-md md:mx-0 md:justify-self-end"
        >
          <img
              src="/images/profile.png"
              alt="Robert Ormiston"
              class="aspect-[4/5] w-full object-cover object-center"
              @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>