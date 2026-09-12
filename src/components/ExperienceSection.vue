<script setup lang="ts">
const chapters = [
  {
    number: '01',
    title: 'Early clinical work',
    copy: "Beginning at age 22, I worked as a group therapist in the UK's largest inpatient detoxification and rehabilitation unit—an environment experimenting with art and group therapy as central approaches.",
  },
  {
    number: '02',
    title: 'Changing psychiatric services',
    copy: 'My NHS career spanned acute, community and forensic services. I was part of the team that established the first mental-health unit at St Bartholomew’s Hospital, and was involved in commissioning Brighton’s first community mental health hospital and London PICUs.',
  },
  {
    number: '03',
    title: 'Writing and humanities',
    copy: 'Trained in journalism at City University, I have worked as a published writer and journalist. I served on the planning committee for an International Humanities Conference and have presented at international eating disorder conferences.',
  },
  {
    number: '04',
    title: 'Clinical practice',
    copy: 'I remain a practising psychotherapist and mental-health clinician. My work continues to be informed by Internal Family Systems (IFS), EMDR, and a career spent at the intersection of people, ideas and clinical systems.',
  },
]
</script>

<template>
  <section id="work" class="bg-surface-soft py-20 md:py-28" aria-labelledby="work-heading">
    <div class="page-shell">
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <header class="lg:col-span-5">
          <p class="section-kicker">Life &amp; Work</p>
          <h2 id="work-heading" class="section-title mt-6 max-w-lg">
            Different fields.<br />Recurring questions.
          </h2>
        </header>

        <p class="body-copy max-w-[38rem] lg:col-span-6 lg:col-start-7 lg:pt-12">
          Clinical work, journalism, service development and psychotherapy have
          given me different ways of looking at people and at the structures built
          around them.
        </p>
      </div>

      <div class="mt-14 border-b border-text/15 md:mt-18">
        <article
          v-for="chapter in chapters"
          :key="chapter.number"
          class="grid gap-4 border-t border-text/15 py-8 md:grid-cols-12 md:gap-x-10 md:py-9"
        >
          <p class="text-[11px] font-semibold tracking-[0.16em] text-cobalt md:col-span-1">{{ chapter.number }}</p>
          <h3 class="font-serif text-[1.65rem] font-normal leading-[1.2] tracking-[-0.02em] text-text md:col-span-4 md:text-[1.85rem]">
            {{ chapter.title }}
          </h3>
          <p class="max-w-[39rem] text-[16px] leading-[1.75] text-text-muted md:col-span-6 md:col-start-7 md:text-[17px]">
            {{ chapter.copy }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
