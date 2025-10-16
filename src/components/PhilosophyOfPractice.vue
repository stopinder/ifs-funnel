<template>
  <section
      id="philosophy"
      class="relative px-6 py-24 max-w-4xl mx-auto text-slate-300 leading-relaxed text-base md:text-lg"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1e213b] via-[#20233e] to-[#181a2f]"></div>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[60%] bg-[radial-gradient(circle_at_top_center,rgba(212,165,93,0.08),transparent_70%)] blur-3xl z-0"
        aria-hidden="true"
    ></div>

    <div class="relative z-10 space-y-8">
      <!-- Section Heading -->
      <h2 class="text-3xl font-serif font-semibold text-center mb-10 text-slate-100">
        Philosophy of Practice
      </h2>

      <!-- Introductory Paragraphs -->
      <p>
        Over the years, my work has evolved. What began as talking therapy has become something quieter —
        an inquiry into attention itself. The following reflection captures the essence of that shift.
      </p>

      <p>
        My approach weaves psychological precision with embodied presence. I work briefly and integratively,
        helping people reconnect with the steady attention that underlies real change.
        Talking alone can open awareness; presence makes it real.
      </p>

      <!-- Accordion Blocks -->
      <article
          v-for="(block, index) in philosophy"
          :key="block.title"
          :id="`philosophy-${index + 1}`"
          class="border-b border-slate-700 pb-4"
      >
        <!-- Accordion Header -->
        <button
            @click="block.open = !block.open"
            class="w-full text-left py-4 flex justify-between items-center group focus:outline-none"
            :aria-expanded="block.open"
        >
          <h3 class="text-lg md:text-xl font-semibold text-slate-100 group-hover:text-slate-300 transition-colors">
            {{ String(index + 1).padStart(2, '0') }} · {{ block.title }}
          </h3>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-slate-400 group-hover:text-slate-300 transform transition-transform duration-300"
              :class="{ 'rotate-180': block.open }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Accordion Content -->
        <transition name="fade">
          <div v-if="block.open" class="space-y-4">
            <p v-for="p in block.text" :key="p">{{ p }}</p>
          </div>
        </transition>
      </article>

      <!-- Signature -->
      <p class="mt-12 text-slate-400 text-sm italic text-center">
        — Robert Ormiston · Integrative Psychotherapist · IFS Practitioner<br />
        <a
            href="https://www.bacp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-300 hover:text-amber-200 underline/50"
        >
          Registered Member MBACP
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const philosophy = reactive([
  {
    title: "Why Talking Therapy No Longer Works the Way We Think It Does",
    open: false,
    text: [
      "After years of sitting in the room — IFS, Gestalt, person-centred, somatic — I began to notice a quiet pattern. The longer we talk about our experience, the further we drift from it. Insight piles upon insight, but the body grows no lighter.",
      "It isn’t that therapy fails; it’s that talk alone can’t carry consciousness all the way home. Words can open the door, but eventually they keep us at its threshold — describing the view instead of walking through it."
    ]
  },
  {
    title: "The Real Work Is Attention – A Somatic and Reflective Approach",
    open: false,
    text: [
      "Everything depends on the quality of attention we bring to our own life. Attention is the first movement of love — how we meet experience before we interpret it. When attention becomes coherent, the nervous system regulates, thought quiets, and emotion finds its natural pulse.",
      "Attention, when embodied, becomes its own method — a way of listening that precedes words. This is where my approach to IFS diverges slightly from how it’s often taught."
    ]
  },
  {
    title: "From IFS Parts Work to Whole-System Integration",
    open: false,
    text: [
      "I still draw on Internal Family Systems — but as a short, catalytic process, not a lifelong excavation. A few conversations can reveal the architecture of the inner world: the critic, the controller, the weary child, the rescuer.",
      "Once they’re seen, the task is not to catalogue them endlessly but to listen through them. IFS becomes the doorway, not the dwelling. The true movement is from working on parts to living from the wholeness that already holds them."
    ]
  },
  {
    title: "Embodied Practice, Not Roleplay",
    open: false,
    text: [
      "Although my work draws from Internal Family Systems (IFS), I hold the process lightly. I’m not drawn to the theatrical or overly scripted versions of parts work often seen in demonstrations. In my experience, genuine transformation doesn’t come from acting out inner roles, but from learning to listen through them — to sense how each part lives in the body, in breath, in subtle shifts of tone or temperature.",
      "IFS becomes a quiet, embodied dialogue. It doesn’t require performance, only presence: the willingness to stay with what is real rather than what is rehearsed. Protectors, exiles, and critics all reveal themselves more truthfully in silence than in speech. Real change begins there: not in display, but in depth; not in drama, but in the steady work of attention."
    ]
  },
  {
    title: "Beyond Insight: Embodied Coherence in Therapy",
    open: false,
    text: [
      "Many long-term therapies become orbiting systems — self-study as self-maintenance. The next phase of inner work isn’t more dialogue; it’s deeper coherence. Less narrative, more embodiment.",
      "Body provides gravity and ground. Emotion offers movement and warmth. Thinking lends clarity and direction. When these harmonize, awareness becomes fertile again."
    ]
  },
  {
    title: "Working Briefly and Intuitively with Attention",
    open: false,
    text: [
      "My work now is brief, integrative, and alive to what’s immediate — a meeting or two, perhaps a small arc of sessions, focused on helping you realign attention itself.",
      "Together we might clarify which parts still over-function or over-guard, notice where thought overrides sensation, and re-tune attention so that the whole system can breathe again."
    ]
  },
  {
    title: "Who This Reflective Therapy Model Is For",
    open: false,
    text: [
      "This approach tends to resonate with clinicians, healers, and long-term seekers who feel therapy has taken them as far as it can; people fluent in self-awareness, yet still tired or subtly disembodied; those drawn toward simplicity, honesty, and direct experience."
    ]
  },
  {
    title: "A Closing Thought – Returning to Ground",
    open: false,
    text: [
      "Therapy was the bridge that carried us from unconscious pattern to conscious participation. But bridges are meant to be crossed. Beyond the bridge lies the practice of attention itself — the living synthesis of body, feeling, and thought in real time.",
      "You don’t have to keep orbiting your story. You can return to gravity, to ground, to breath. Healing begins when words fall quiet and attention begins."
    ]
  }
])
</script>

<style scoped>
section {
  scroll-margin-top: 4rem;
}

h2, h3 {
  font-family: Lora, Georgia, serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
