<template>
  <section id="helios" class="px-6 py-24 bg-[#fdfaf7] text-[#4a4743]">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <header class="mb-10">
            <span class="text-xs font-bold tracking-[0.2em] uppercase text-[#2d4a43]">Current Work</span>
            <h2 class="mt-4 text-4xl md:text-5xl font-serif font-semibold text-[#3c3a36]">Building Helios</h2>
            <p class="mt-4 text-xl md:text-2xl text-[#5a5753] font-medium italic">Technology around the therapist, not instead of them.</p>
          </header>

          <div class="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              Helios grew out of decades spent seeing clinical systems from different sides — as a clinician, psychotherapist, service developer and writer.
            </p>
            <p>
              The question behind it is simple: what would clinical software look like if it began with how therapists actually work and think?
            </p>
            <p>
              Helios brings together session capture, clinical notes, clinical records, reflective practice, and professional development, alongside carefully bounded AI assistance. Crucially, the therapist remains responsible for clinical interpretation and decisions.
            </p>
          </div>

          <div class="mt-12">
            <a
                href="https://therapyworks.works"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold
                     bg-[#2d4a43] text-[#f9f3ee]
                     shadow-sm
                     hover:bg-[#3d5a53]
                     transition-all duration-200"
            >
              Explore Helios &rarr;
            </a>
          </div>
        </div>

        <div class="bg-[#f9f3ee] p-8 md:p-12 rounded-2xl border border-[#e4d9d1]">
          <h3 class="text-2xl font-serif font-semibold text-[#3c3a36] mb-8">Built with clinical boundaries in mind</h3>
          
          <div class="space-y-10">
            <div class="space-y-3">
              <h4 class="font-semibold text-[#3c3a36] text-lg">Therapist in control</h4>
              <p class="text-base leading-relaxed">
                AI can support drafting and reflection, but the therapist remains responsible for clinical meaning and decisions.
              </p>
            </div>

            <div class="space-y-3">
              <h4 class="font-semibold text-[#3c3a36] text-lg">Clinical boundaries matter</h4>
              <p class="text-base leading-relaxed">
                Private reflective and professional-development material is conceptually separated from the client's formal Clinical Record.
              </p>
            </div>

            <div class="space-y-3">
              <h4 class="font-semibold text-[#3c3a36] text-lg">Protected clinical information</h4>
              <p class="text-base leading-relaxed">
                Helios uses authenticated access and therapist-ownership boundaries around clinical workflows and information. Completed Clinical Records are treated with distinct persistence from editable working material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
