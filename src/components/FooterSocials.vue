<template>
  <nav class="flex items-center gap-4" aria-label="Social links">
    <a class="social-link" href="https://www.facebook.com/profile.php?id=61555851054901" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in new tab)">
      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg>
    </a>
    <a class="social-link" href="https://www.linkedin.com/in/chrysalistherapyservices/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">
      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.849-3.036-1.849 0-2.131 1.445-2.131 2.939v5.666H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.266 2.37 4.266 5.456v6.285zM5.337 7.433a2.06 2.06 0 11.001-4.121 2.06 2.06 0 01-.001 4.121zM6.687 20.452H3.988V9h2.699v11.452z" /></svg>
    </a>
  </nav>
</template>

<style scoped>
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 160ms ease, transform 160ms ease;
}
.social-link:hover { color: #f7f3ec; transform: translateY(-1px); }
@media (prefers-reduced-motion: reduce) { .social-link { transition: none; } }
</style>
