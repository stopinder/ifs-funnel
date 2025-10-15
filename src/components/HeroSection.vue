<template>
  <section id="hero" class="hero-section">
    <!-- Background overlay -->
    <div class="overlay" aria-hidden="true"></div>

    <!-- Main content -->
    <div class="hero-content">
      <h1 class="headline">
        Psychotherapy for Clarity, Integration, and Renewal
      </h1>

      <p class="intro">
        Each 50-minute session offers a calm, structured space to explore what’s unfolding within.
        Drawing from Internal Family Systems and EMDR-informed practice, the work supports emotional
        balance and lasting change.
      </p>

      <p class="subtext">
        Thoughtfully prepared written reflections provide a bridge between sessions —
        a grounded way to keep the insights alive.
      </p>

      <div class="cta">
        <!-- Smooth scroll to Book CTA section -->
        <a href="#book-cta" class="btn btn-primary" aria-label="Scroll to booking section and book a therapy session">
          Book a Session
        </a>

        <!-- Smooth scroll to approach section -->
        <a href="#approach" class="btn btn-secondary" aria-label="Scroll to learn more about this approach">
          Learn More
        </a>
      </div>
    </div>

    <!-- Soft fade into next section -->
    <div class="hero-fade" aria-hidden="true"></div>
  </section>
</template>

<script setup>
// no script needed here
</script>

<style scoped>
:root {
  --navH: 64px;
  --gold: #d4a55d;
  --goldH: #c49746;
  --navy: #1e213b;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  height: calc(100vh - var(--navH));
  min-height: 600px;
  background: url("/misty-path.jpg") center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f8f7f4;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0 1.5rem;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(30, 33, 59, 0.45) 0%, rgba(30, 33, 59, 0.75) 80%);
  backdrop-filter: contrast(1.1) saturate(1.1);
  z-index: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  padding: 2rem;
  background: rgba(30, 33, 59, 0.3);
  border-radius: 8px;
  transform: translateY(-5vh);
}

.headline {
  font-family: Lora, Georgia, serif;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  line-height: 1.25;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.2rem;
  position: relative;
}

.headline::after {
  content: "";
  display: block;
  width: 56px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
  margin: 0.8rem auto 1.5rem;
}

.intro {
  font-size: 1.15rem;
  color: #f0f0f0;
  line-height: 1.7;
  margin: 0 auto 1.2rem;
}

.subtext {
  font-size: 1rem;
  color: #e2e2e2;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.btn {
  text-decoration: none;
  padding: 0.75rem 1.6rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.btn-primary {
  background: var(--gold);
  color: var(--navy);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
  background: var(--goldH);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);
}

.btn-secondary {
  border: 1px solid #ffffff;
  color: #ffffff;
  background: rgba(30, 33, 59, 0.4);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.btn-secondary:hover {
  background: rgba(30, 33, 59, 0.6);
}

.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(to bottom, rgba(30, 33, 59, 0) 0%, rgba(30, 33, 59, 0.4) 40%, rgba(30, 33, 59, 0.9) 100%);
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .hero-section {
    height: calc(100vh - 56px);
    min-height: 480px;
  }

  .hero-content {
    padding: 1.5rem;
    transform: translateY(-3vh);
  }

  .headline {
    font-size: 1.9rem;
  }

  .intro,
  .subtext {
    font-size: 1rem;
  }
}
</style>
