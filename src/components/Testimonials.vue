<template>
  <section
      id="testimonials"
      ref="testimonialSection"
      class="relative px-6 py-24 max-w-6xl mx-auto
           bg-surface text-textsurface
           transition-colors-bg duration-300 ease-subtle
           opacity-0 translate-y-4
           motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out"
      role="region"
      aria-label="Client reflections carousel"
  >
    <!-- subtle teal radial haze behind panel -->
    <div
        class="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-64
             bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.08),transparent_70%)]
             blur-3xl pointer-events-none"
        aria-hidden="true"
    ></div>

    <!-- panel container -->
    <div
        class="relative z-10 bg-white/90 rounded-2xl shadow-soft border border-bordercol-light
             max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16"
    >
      <!-- Heading / intro -->
      <header class="text-center mb-10">
        <h2
            class="text-3xl md:text-4xl font-serif font-semibold text-textsurface leading-snug"
        >
          Client Reflections <span class="block text-sm font-sans font-normal text-textsurface/60 mt-2">(shared with permission)</span>
        </h2>

        <div
            class="mt-4 mx-auto h-1 w-16 bg-primary/50 rounded"
            aria-hidden="true"
        ></div>

        <p
            class="text-base md:text-lg leading-relaxed text-textsurface/80 max-w-2xl mx-auto mt-6"
        >
          A few words from clients who have taken part in this reflective work.
          These are their words and their language.
        </p>
      </header>

      <!-- Controls row -->
      <div class="flex items-center justify-between mb-6">
        <!-- Prev -->
        <button
            @click="scrollPrev"
            :disabled="currentIndex === 0"
            class="group inline-flex items-center justify-center gap-2 px-3 py-1 rounded-md
                 bg-surface border border-bordercol-light text-xs font-medium text-textsurface
                 hover:bg-primary/10 hover:border-primary hover:text-primary
                 disabled:opacity-40 disabled:cursor-not-allowed
                 transition-colors-bg duration-200 ease-subtle"
            aria-label="Previous testimonials"
        >
          <span aria-hidden="true">◀</span>
          <span class="sr-only">Previous</span>
        </button>

        <!-- Pagination dots -->
        <div class="flex gap-2 items-center">
          <button
              v-for="i in pageCount"
              :key="i"
              @click="goTo(i - 1)"
              :aria-pressed="currentIndex === i - 1"
              class="w-2 h-2 rounded-full focus:outline-none transition-colors-bg duration-200 ease-subtle"
              :class="currentIndex === i - 1
              ? 'bg-primary'
              : 'bg-bordercol-light'"
              :aria-label="`Go to testimonial page ${i}`"
          ></button>
        </div>

        <!-- Next -->
        <button
            @click="scrollNext"
            :disabled="currentIndex >= pageCount - 1"
            class="group inline-flex items-center justify-center gap-2 px-3 py-1 rounded-md
                 bg-surface border border-bordercol-light text-xs font-medium text-textsurface
                 hover:bg-primary/10 hover:border-primary hover:text-primary
                 disabled:opacity-40 disabled:cursor-not-allowed
                 transition-colors-bg duration-200 ease-subtle"
            aria-label="Next testimonials"
        >
          <span aria-hidden="true">▶</span>
          <span class="sr-only">Next</span>
        </button>
      </div>

      <!-- Scroll container -->
      <div
          ref="track"
          class="relative overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-3 px-3 no-scrollbar"
          tabindex="0"
          @keydown.left.prevent="scrollPrev"
          @keydown.right.prevent="scrollNext"
          role="group"
          aria-roledescription="carousel"
          aria-live="polite"
      >
        <div class="flex gap-6" style="will-change: transform;">
          <article
              v-for="(t, i) in testimonials"
              :key="i"
              class="snap-start flex-none w-full sm:w-1/2 lg:w-1/3"
          >
            <div
                class="h-full bg-white/70 rounded-xl border border-bordercol-light shadow-soft
                     hover:bg-white/90 hover:shadow-soft hover:-translate-y-[2px]
                     transition-transform transition-colors-bg duration-200 ease-subtle
                     flex flex-col justify-between min-h-[200px] p-6"
            >
              <blockquote
                  class="italic mb-6 leading-relaxed text-textsurface"
              >
                “{{ t.quote }}”
              </blockquote>

              <footer class="mt-4">
                <p class="text-textsurface font-medium">
                  — {{ t.name }}
                </p>
                <p class="text-textsurface/70 text-sm">
                  {{ t.location }}
                </p>
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
  { quote: 'Rob is a great therapist! He led me to explore my inner parts and address underlying issues from childhood that have never been addressed in such a way with other therapists in the past. He takes into account the spiritual aspect of our journey through life that is often ignored in Western therapy. Highly recommend for anyone dealing with trauma or complex trauma.', name: 'A.L.', location: 'Brighton, UK' },
  { quote: 'Robert’s IFS approach helped me connect with parts of myself I’d been avoiding. The written summary felt deeply personal and compassionate.', name: 'M.J.', location: 'Toronto, Canada' },
  { quote: 'I’m so grateful to have found Rob here on betterhelp. After switching from another therapist whom didn’t really understand me or what my concerns were, I was a bit hopeless about being able to click with someone who’d be able not only to understand me perfectly, but also to give me really valuable advice and insights.\n' +
        'Rob was able to deliver all of this and more, and I am extremely confident that my life will really improve on a deep fundamental level thanks to the work I am doing - and will keep on doing - here with him. His great experience in the field shines through in every session and he’s very knowledgeable about everything he talks about. Everything he talks about always makes perfect sense. I Would 100% recommend him. Very excited that I get to keep on working with him.', name: 'S.R.', location: 'Sydney, Australia' },
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

// figure out how many slides fit on screen → how many pages exist
function computePageCount() {
  if (!track.value) return
  const w = window.innerWidth
  const spv = w >= 1024 ? 3 : w >= 640 ? 2 : 1 // slides per view
  pageCount.value = Math.ceil(testimonials.length / spv)

  // ensure currentIndex is in range
  if (currentIndex.value > pageCount.value - 1) {
    currentIndex.value = pageCount.value - 1
  }
}

// recompute current page from scroll position
function updateIndexFromScroll() {
  if (!track.value) return
  const w = window.innerWidth
  const spv = w >= 1024 ? 3 : w >= 640 ? 2 : 1
  const slideWidth = track.value.clientWidth / spv
  const scrollLeft = track.value.scrollLeft
  const page = Math.round(scrollLeft / (slideWidth * spv))
  currentIndex.value = Math.max(0, Math.min(pageCount.value - 1, page))
}

// scroll helpers
function scrollNext() {
  if (!track.value) return
  const scrollAmount = track.value.clientWidth
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

// listeners
let scrollRaf = null
function onScroll() {
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    updateIndexFromScroll()
  })
}

function onResize() {
  computePageCount()
  updateIndexFromScroll()
}

function hookEvents() {
  if (!track.value) return
  track.value.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
}

function unhookEvents() {
  if (!track.value) return
  track.value.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
}

onMounted(async () => {
  const el = testimonialSection.value

  // reduced motion users: don't animate in
  const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    if (el) {
      el.classList.remove('opacity-0', 'translate-y-4')
      el.classList.add('opacity-100', 'translate-y-0')
    }
  } else {
    // intersection observer reveal
    const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && el) {
              el.classList.remove('opacity-0', 'translate-y-4')
              el.classList.add('opacity-100', 'translate-y-0')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.18 }
    )
    if (el) observer.observe(el)
  }

  // Wait for DOM so widths are stable
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

/* snapping for horizontal slides */
.snap-start { scroll-snap-align: start; }
.scroll-smooth { scroll-behavior: smooth; }

/* typography alignment with brand */
h2 {
  font-family: Lora, Georgia, serif;
}
blockquote,
p,
button,
span {
  font-family: Inter, system-ui, sans-serif;
}
</style>
