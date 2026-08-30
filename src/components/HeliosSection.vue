<template>
  <section
      id="helios"
      class="bg-cobalt px-6 py-12 md:py-16 overflow-hidden"
      aria-labelledby="helios-heading"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-16">
        <div class="lg:col-span-8 relative z-10">
          <div class="flex items-center gap-6 mb-8">
            <div class="h-px w-12 bg-surface/30"></div>
            <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-surface/80"
            >
              Current project
            </p>
          </div>

          <h2
              id="helios-heading"
              class="font-serif text-5xl font-normal leading-tight tracking-[-0.02em] text-surface md:text-7xl"
          >
            Helios
          </h2>

          <div
              class="mt-6 space-y-6 text-xl leading-[1.7] text-surface md:text-2xl max-w-reading"
          >
            <p>
              I’m building Helios, an AI-supported clinical workspace for psychotherapists, shaped by my experience of clinical work and the systems surrounding it.
            </p>
          </div>

          <a
              href="https://helio.works"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-surface transition-colors hover:text-surface/80"
          >
            Visit Helios ↗
            <span class="h-px w-8 bg-surface transition-colors group-hover:bg-surface/80"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>