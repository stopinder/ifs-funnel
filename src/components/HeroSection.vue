<template>
  <section id="hero" ref="sectionRef" class="hero-section" aria-label="Forest pathway leading to sunlight">
    <!-- Background image container (single JPEG; no missing webp imports) -->
    <div class="hero-bg" aria-hidden="true">
      <!-- blurred css placeholder (no external thumb needed) -->
      <div class="hero-placeholder"></div>

      <!-- single image using the one file you have: /misty-path.jpg -->
      <img
          ref="heroImg"
          class="hero-img"
          src="/misty-path.jpg"
          alt="Forest pathway leading to sunlight"
          width="1800"
          height="900"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          @load="onHeroLoad"
      />
    </div>

    <!-- Background overlay -->
    <div class="overlay" aria-hidden="true"></div>

    <!-- Main content (unchanged) -->
    <div class="hero-content">
      <h1 class="headline">
        Psychotherapy for Clarity, Integration, and Renewal
      </h1>

      <p class="intro">
        Each 50-minute Internal Family Systems (IFS) session offers a calm, focused space to explore emotions,
        trauma, and inner patterns — supporting insight, resilience, and psychological renewal.
      </p>

      <p class="subtext">
        Grounded in IFS and EMDR-informed practice, this approach blends clinical depth with reflective writing.
        Your post-session report helps you stay connected to what mattered most.
      </p>

      <div class="cta">
        <a href="#book-cta" class="btn btn-primary" aria-label="Scroll to booking section and book a therapy session">
          Book a Session
        </a>
      </div>
    </div>

    <!-- Soft fade into next section -->
    <div class="hero-fade" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const heroImg = ref(null)
const sectionRef = ref(null)

function onHeroLoad() {
  const el = sectionRef.value
  if (el) el.classList.add('hero-loaded')
}
</script>

<style scoped>
:root{
  --navH:64px; --gold:#d4a55d; --goldH:#c49746; --navy:#1e213b;
}

/* HERO SECTION (keeps your original layout, but no webp imports) */
.hero-section {
  position: relative;
  height: calc(100vh - var(--navH));
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f8f7f4;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0 1.5rem;
  overflow: hidden;
}

/* image container */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-color: #0b1220; /* fallback color while loading */
}

/* CSS-only blurred placeholder (uses a very subtle gradient so no extra file needed) */
.hero-placeholder {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(17,24,39,0.55), rgba(11,14,24,0.6));
  filter: blur(6px) saturate(.95);
  transform: scale(1.02);
  transition: opacity .45s ease, filter .45s ease;
  opacity: 1;
  z-index: 0;
}

/* actual image */
.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity .45s ease;
  z-index: 1;
  display: block;
}

/* when the real image loads, fade it in and hide the placeholder */
.hero-section.hero-loaded .hero-img { opacity: 1; }
.hero-section.hero-loaded .hero-placeholder { opacity: 0; filter: blur(0); }

/* overlay keeps the look you had */
.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(30, 33, 59, 0.45) 0%, rgba(30, 33, 59, 0.75) 80%);
  backdrop-filter: contrast(1.1) saturate(1.1);
  z-index: 10;
  pointer-events: none;
}

/* hero content (copied from your original) */
.hero-content {
  position: relative;
  z-index: 20;
  max-width: 680px;
  padding: 2rem;
  background: rgba(30, 33, 59, 0.3);
  border-radius: 8px;
  transform: translateY(-5vh);
}
.headline { font-family: Lora, Georgia, serif; font-size: clamp(2.4rem,4.5vw,3.6rem); line-height:1.25; font-weight:600; color:#fff; margin-bottom:1.2rem; }
.headline::after { content:""; display:block; width:56px; height:2px; background:var(--gold); border-radius:2px; margin:0.8rem auto 1.5rem; }
.intro { font-size:1.15rem; color:#f0f0f0; line-height:1.7; margin:0 auto 1.2rem; }
.subtext { font-size:1rem; color:#e2e2e2; font-style:italic; line-height:1.6; margin-bottom:2rem; }
.cta { display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:1.5rem; }
.btn{ text-decoration:none; padding:0.75rem 1.6rem; border-radius:6px; font-weight:600; transition:all .25s ease; }
.btn-primary{ background:var(--gold); color:var(--navy); box-shadow:0 4px 10px rgba(0,0,0,0.3); }
.btn-primary:hover{ background:var(--goldH); box-shadow:0 6px 10px rgba(0,0,0,0.35); }

/* fade strip */
.hero-fade{ position:absolute; bottom:0; left:0; right:0; height:140px; background: linear-gradient(to bottom, rgba(30,33,59,0) 0%, rgba(30,33,59,0.4) 40%, rgba(30,33,59,0.9) 100%); pointer-events:none; z-index:30; }

/* responsive */
@media (max-width:768px) {
  .hero-section { height: calc(100vh - 56px); min-height:480px; }
  .hero-content { padding:1.5rem; transform:translateY(-3vh); }
  .headline { font-size:1.9rem; }
  .intro, .subtext { font-size:1rem; }
}

/* prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-img, .hero-placeholder { transition: none !important; }
}
</style>
