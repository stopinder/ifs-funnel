<template>
  <div class="relative flex justify-center my-16 sm:my-24">
    <!-- Gradient line -->
    <div
        class="w-3/4 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"
    ></div>


    <!-- Center glow -->
    <div
        class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-200/40 blur-md"
    ></div>

  </div>
</template>

<style scoped>
/* Optional gentle pulse animation */
@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.3);
  }
}

div > div:last-child {
  animation: pulseGlow 6s ease-in-out infinite;
}
:host {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

</style>
