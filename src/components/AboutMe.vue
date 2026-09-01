<template>
  <section
      id="about"
      class="bg-surface px-6 pt-10 pb-0 md:pt-14"
      aria-labelledby="about-heading"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div class="lg:col-span-4">
          <div class="mb-7 flex items-center gap-5">
            <div class="h-px w-10 bg-cobalt/35" aria-hidden="true"></div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt">
              Perspective
            </p>
          </div>

          <h2
              id="about-heading"
              class="max-w-sm font-serif text-[2.5rem] font-normal leading-[1.12] tracking-[-0.025em] text-text md:text-[3rem]"
          >
            A life in different kinds of work.
          </h2>
        </div>

        <div class="lg:col-span-7 lg:col-start-6">
          <div class="max-w-[42rem] space-y-7 text-lg leading-[1.78] text-text md:text-xl md:leading-[1.75]">
            <p>
              My background includes more than four decades working in and
              around mental health, as a Registered Mental Health Nurse,
              practising psychotherapist and in roles across acute, forensic,
              PICU and community care.
            </p>

            <p class="text-text-muted">
              I also trained in journalism and have worked as a writer. That
              combination has left me curious not only in individual
              experience, but in language, institutions, culture and the way
              professional systems shape what people are able to do.
            </p>

            <p>
              I’m a humanist by outlook. Across very different settings, I keep
              returning to the relationship between people, ideas and systems —
              particularly the difficult work of making
              <span class="text-cobalt">complicated things more usable</span>
              without making them simplistic.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-16 flex items-center gap-4 md:mt-20" aria-hidden="true">
        <div class="h-px flex-1 bg-border"></div>
        <span class="relative -top-px px-2 font-serif text-xs leading-none text-cobalt/55">✦</span>
        <div class="h-px flex-1 bg-border"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
