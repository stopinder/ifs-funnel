<!-- src/components/FooterSocials.vue -->
<template>
  <nav class="flex items-center gap-3" aria-label="Social links">
    <!-- Facebook -->
    <a
        class="social-btn"
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook (opens in new tab)"
        @click="handleClick('facebook')"
    >
      <span class="sr-only">Facebook</span>
      <svg class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
        <path fill="#1877F2" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.88v-6.99h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.99h-2.33v6.99C18.343 21.128 22 17 22 12z"/>
      </svg>
    </a>

    <!-- LinkedIn -->
    <a
        class="social-btn"
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in new tab)"
        @click="handleClick('linkedin')"
    >
      <span class="sr-only">LinkedIn</span>
      <svg class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
        <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.849-3.036-1.849 0-2.131 1.445-2.131 2.939v5.666H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.266 2.37 4.266 5.456v6.285zM5.337 7.433a2.06 2.06 0 11.001-4.121 2.06 2.06 0 01-.001 4.121zM6.687 20.452H3.988V9h2.699v11.452z"/>
      </svg>
    </a>
  </nav>
</template>

<script setup>
/* optional analytics hook (commented out)
   Uncomment and adapt if you use Google Analytics / gtag or another provider.
function handleClick(source) {
  window.gtag?.('event', 'social_click', { method: source })
}
*/
function handleClick(source) {
  // keep console.debug for local testing; remove in production if you like
  // console.debug('social click', source)
}
</script>

<style scoped>
.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: transparent;
  transition: transform .12s ease, box-shadow .12s ease;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .social-btn { transition: none; }
  .social-btn:hover { transform: none; box-shadow: none; }
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(11,15,25,0.38);
}

.social-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 6px rgba(111,71,192,0.08);
  transform: translateY(-2px);
}
</style>

