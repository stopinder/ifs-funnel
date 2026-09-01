<template>
  <section
      id="helios"
      class="overflow-hidden bg-cobalt px-6 py-14 md:py-20"
      aria-labelledby="helios-heading"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-16">
        <div class="relative z-10 lg:col-span-8">
          <div class="mb-7 flex items-center gap-5">
            <div class="h-px w-10 bg-surface/35"></div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-surface/80">
              Current project
            </p>
          </div>

          <h2
              id="helios-heading"
              class="font-serif text-[3.25rem] font-normal leading-[1.05] tracking-[-0.025em] text-surface md:text-[4.5rem]"
          >
            Helios
          </h2>

          <div class="mt-6 max-w-[42rem] text-lg leading-[1.75] text-surface md:text-xl">
            <p>
              I’m building Helios, an AI-supported clinical workspace for psychotherapists, shaped by my experience of clinical work and the systems surrounding it.
            </p>
          </div>

          <a
              href="https://helio.works"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-9 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-surface transition-colors hover:text-surface/80"
          >
            Visit Helios ↗
            <span class="h-px w-8 bg-surface/80 transition-colors group-hover:bg-surface/60"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
