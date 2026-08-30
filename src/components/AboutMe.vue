<template>
  <section
      id="about"
      class="bg-surface px-6 pt-8 pb-0 md:pt-12"
      aria-labelledby="about-heading"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">

        <!-- Section introduction -->
        <div class="lg:col-span-4">
          <div class="mb-8 flex items-center gap-6">
            <div
                class="h-px w-12 bg-cobalt/30"
                aria-hidden="true"
            ></div>

            <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt"
            >
              Perspective
            </p>
          </div>

          <h2
              id="about-heading"
              class="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.025em] text-text md:text-5xl"
          >
            A life in different kinds of work.
          </h2>
        </div>

        <!-- Main copy -->
        <div class="lg:col-span-7 lg:col-start-6">
          <div
              class="max-w-reading space-y-8 text-xl leading-[1.7] text-text md:text-2xl"
          >
            <p>
              My background includes more than four decades working in and
              around mental health, as a Registered Mental Health Nurse,
              practising psychotherapist and in roles across acute, forensic,
              PICU and community care.
            </p>

            <p class="text-text-muted">
              I also trained in journalism and have worked as a writer. That
              combination has left me interested not only in individual
              experience, but in language, institutions, culture and the way
              professional systems shape what people are able to do.
            </p>

            <p>
              I’m a humanist by outlook. Across very different settings, I keep
              returning to the relationship between people, ideas and systems —
              particularly the difficult work of making
              <span class="text-cobalt">
                complicated things more usable
              </span>
              without making them simplistic.
            </p>
          </div>
        </div>
      </div>

      <!-- Classical editorial transition -->
      <div
          class="mt-14 flex items-center gap-4 md:mt-16"
          aria-hidden="true"
      >
        <div class="h-px flex-1 bg-border"></div>

        <span
            class="relative -top-px px-2 font-serif text-sm leading-none text-cobalt/65"
        >
          ✦
        </span>

        <div class="h-px flex-1 bg-border"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>