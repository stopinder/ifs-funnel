<template>
  <footer id="footer" class="bg-surface-dark py-12 text-surface" role="contentinfo">
    <div class="page-shell">
      <div class="grid gap-10 border-b border-surface/10 pb-10 md:grid-cols-12 md:gap-8">
        <div class="md:col-span-6">
          <div class="flex items-baseline gap-2">
            <p class="font-serif text-2xl">Robert Ormiston</p>
            <span class="text-[10px] font-semibold uppercase tracking-[0.14em] text-surface/45">MBACP</span>
          </div>
          <p class="mt-3 text-sm text-surface/60">Psychotherapist · Writer · Founder of Helios</p>
          <p class="mt-2 max-w-sm text-xs leading-relaxed text-surface/40">
            Member of the British Association for Counselling and Psychotherapy
          </p>
          <FooterSocials class="mt-5 text-surface/55" />
        </div>

        <nav class="md:col-span-3" aria-label="Footer navigation">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-surface/35">Explore</p>
          <ul class="mt-4 space-y-2.5 text-sm text-surface/65">
            <li><button type="button" class="transition-colors hover:text-surface" @click="scrollToSection('about')">About</button></li>
            <li><button type="button" class="transition-colors hover:text-surface" @click="scrollToSection('work')">Life &amp; Work</button></li>
            <li><a href="https://helio.works" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-surface">Helios ↗</a></li>
          </ul>
        </nav>

        <div class="md:col-span-3">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-surface/35">Contact</p>
          <a href="mailto:hello@helio.works" class="mt-4 inline-block font-serif text-xl transition-colors hover:text-surface/70">hello@helio.works</a>
          <button type="button" class="group mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-surface/45 transition-colors hover:text-surface" @click="scrollToTop">
            Back to top <span class="h-px w-7 bg-current" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4 pt-7 md:flex-row md:items-center md:justify-between">
        <p class="text-[10px] uppercase tracking-[0.18em] text-surface/30">© {{ new Date().getFullYear() }} Robert Ormiston</p>
        <p class="max-w-lg font-serif text-sm italic text-surface/40 md:text-right">Good systems should create more room for thought, not less.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import FooterSocials from './FooterSocials.vue'

const router = useRouter()
const route = useRoute()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(id) {
  if (route.path !== '/') {
    router.push('/').then(() => requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })))
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
