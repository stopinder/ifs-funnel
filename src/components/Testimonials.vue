<template>
  <section
      id="testimonials"
      ref="testimonialSection"
      class="relative px-6 py-24 max-w-6xl mx-auto text-slate-100 opacity-0 translate-y-6 transition-all duration-700 ease-out"
      role="region"
      aria-label="Client testimonials carousel"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#23253d]/90 to-[#181a2f]"></div>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.06),transparent_80%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <div class="relative z-10">
      <h2 class="text-3xl font-serif font-semibold mb-4 text-center text-amber-100">Client Reflections</h2>
      <p class="text-slate-300 text-center mb-8 max-w-2xl mx-auto">Some reflections from those who have taken part in this work.</p>

      <!-- Controls -->
      <div class="flex items-center justify-between mb-4">
        <!-- Prev -->
        <button
            @click="scrollPrev"
            :disabled="currentIndex === 0"
            class="group inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/60 border border-amber-100/10 text-sm text-slate-100 disabled:opacity-50"
            aria-label="Previous testimonials"
        >
          ◀
        </button>

        <!-- Pagination dots -->
        <div class="flex gap-2 items-center">
          <button
              v-for="i in pageCount"
              :key="i"
              @click="goTo(i - 1)"
              :aria-pressed="currentIndex === i - 1"
              class="w-2 h-2 rounded-full focus:outline-none"
              :class="currentIndex === i - 1 ? 'bg-amber-300' : 'bg-slate-600/60'"
              :aria-label="`Go to testimonial page ${i}`"
          ></button>
        </div>

        <!-- Next -->
        <button
            @click="scrollNext"
            :disabled="currentIndex >= pageCount - 1"
            class="group inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/60 border border-amber-100/10 text-sm text-slate-100 disabled:opacity-50"
            aria-label="Next testimonials"
        >
          ▶
        </button>
      </div>

      <!-- Scroll container (native swipe on mobile) -->
      <div
          ref="track"
          class="relative overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-3 px-3 no-scrollbar"
          tabindex="0"
          @keydown.left.prevent="scrollPrev"
          @keydown.right.prevent="scrollNext"
          role="group"
          aria-roledescription="carousel"
      >
        <div class="flex gap-6" style="will-change: transform;">
          <article
              v-for="(t, i) in testimonials"
              :key="i"
              class="snap-start flex-none w-full sm:w-1/2 lg:w-1/3"
          >
            <div
                class="h-full bg-slate-800/40 border border-amber-100/10 rounded-2xl p-8 shadow-md backdrop-blur-sm hover:bg-slate-800/60 transition-transform hover:-translate-y-1 flex flex-col justify-between min-h-[200px]"
            >
              <blockquote class="text-slate-200 italic mb-6 leading-relaxed">“{{ t.quote }}”</blockquote>
              <footer class="mt-4">
                <p class="text-slate-300 font-medium">— {{ t.name }}</p>
                <p class="text-slate-500 text-sm">{{ t.location }}</p>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const testimonials = [
  { quote: 'These summaries are gold.', name: 'A.L.', location: 'Brighton, UK' },
  { quote: 'Robert’s IFS approach helped me connect with parts of myself I’d been avoiding. The written summary felt deeply personal and compassionate.', name: 'M.J.', location: 'Toronto, Canada' },
  { quote: 'Professional, grounded, and insightful. The blend of psychotherapy and reflective summaries has been genuinely transformative.', name: 'S.R.', location: 'Sydney, Australia' },
  { quote: 'I left our session with a deep sense of calm and clarity. The summary helped me see patterns I’d missed for years.', name: 'G.L.', location: 'London, UK' },
  { quote: 'Clear, practical, and quietly profound. I could return to the session notes between appointments and keep the gain.', name: 'H.K.', location: 'Chiang Mai, Thailand' },
  { quote: 'Compassionate, structured, and honest. The reflective write-ups actually sped up my progress.', name: 'T.P.', location: 'Dublin, Ireland' },
  { quote: 'A gentle but rigorous approach. The summaries are a therapy in themselves.', name: 'R.S.', location: 'Berlin, Germany' },
  { quote: 'Helped me map my inner life in a way that made action possible.', name: 'L.Y.', location: 'Auckland, NZ' }
]

const testimonialSection = ref(null)
const track = ref(null)
const currentIndex = ref(0)
const pageCount = ref(1)

// compute page count based on slidesPerView at current width
function computePageCount() {
  if (!track.value) return
  const containerWidth = track.value.clientWidth
  // Determine slides per view by CSS breakpoints:
  const w = window.innerWidth
  const spv = w >= 1024 ? 3 : w >= 640 ? 2 : 1
  // pages = ceil(totalSlides / spv)
  pageCount.value = Math.ceil(testimonials.length / spv)
  // sync index bounds
  if (currentIndex.value > pageCount.value - 1) currentIndex.value = pageCount.value - 1
}

// helper to get current page index from scrollLeft
function updateIndexFromScroll() {
  if (!track.value) return
  const w = window.innerWidth
  const spv = w >= 1024 ? 3 : w >= 640 ? 2 : 1
  // slide width equals container visible width / spv
  const slideWidth = track.value.clientWidth / spv
  const scrollLeft = track.value.scrollLeft
  const page = Math.round(scrollLeft / (slideWidth * spv))
  currentIndex.value = Math.max(0, Math.min(pageCount.value - 1, page))
}

// scroll helpers: scroll by one page (spv slides)
function scrollNext() {
  if (!track.value) return
  const w = window.innerWidth
  const spv = w >= 1024 ? 3 : w >= 640 ? 2 : 1
  const scrollAmount = track.value.clientWidth // one page width
  track.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}

function scrollPrev() {
  if (!track.value) return
  const scrollAmount = track.value.clientWidth
  track.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
}

function goTo(pageIndex) {
  if (!track.value) return
  const target = pageIndex * track.value.clientWidth
  track.value.scrollTo({ left: target, behavior: 'smooth' })
  currentIndex.value = pageIndex
}

let resizeObserver = null
function hookEvents() {
  if (!track.value) return
  // update index when user scrolls
  track.value.addEventListener('scroll', onScroll, { passive: true })
  // Watch resize to recalc pages
  window.addEventListener('resize', onResize)
  // optional - keyboard handled via tabindex and @keydown in template
}

function unhookEvents() {
  if (!track.value) return
  track.value.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
}

let scrollRaf = null
function onScroll() {
  // throttle with requestAnimationFrame
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    updateIndexFromScroll()
  })
}

function onResize() {
  computePageCount()
  updateIndexFromScroll()
}

onMounted(async () => {
  const el = testimonialSection.value
  // reveal animation
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && el) {
            el.classList.remove('opacity-0', 'translate-y-6')
            el.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.18 }
  )
  if (el) observer.observe(el)

  // Wait DOM to settle
  await nextTick()
  computePageCount()
  hookEvents()
})

onBeforeUnmount(() => {
  unhookEvents()
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
})
</script>

<style scoped>
/* hide native scrollbars across browsers */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none;             /* Chrome, Safari, Opera */
}

/* keep your other styles */
.snap-start { scroll-snap-align: start; }
.scroll-smooth { scroll-behavior: smooth; }
</style>
