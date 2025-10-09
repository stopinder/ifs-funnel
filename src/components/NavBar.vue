<template>
  <nav class="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 text-white">
    <ul class="flex justify-center space-x-6 py-4 text-sm sm:text-base">
      <li>
        <a
            href="#"
            @click.prevent="scrollToTop"
            class="hover:text-purple-300 transition"
        >
          Home
        </a>
      </li>
      <li><a href="#about" class="hover:text-purple-300 transition">About</a></li>
      <li><a href="#faq" class="hover:text-purple-300 transition">FAQ</a></li>
      <li><a href="#testimonials" class="hover:text-purple-300 transition">Testimonials</a></li>
    </ul>
  </nav>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
