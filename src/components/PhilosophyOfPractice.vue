<template>
  <section
      id="philosophy"
      class="relative px-6 py-20 max-w-4xl mx-auto text-slate-200 leading-relaxed"
  >
    <!-- Subtle star background -->
    <div class="absolute inset-0 z-0 animate-stars pointer-events-none opacity-10"></div>

    <div class="relative z-10 space-y-8">
      <h2 class="text-3xl font-bold text-center mb-8">Philosophy of Practice</h2>

      <p>
        Over the years, my work has evolved. What began as talking therapy has become something quieter —
        an inquiry into attention itself. The following reflection captures the essence of that shift.
      </p>

      <p>
        My approach weaves psychological precision with embodied presence. I work briefly and integratively,
        helping people reconnect with the steady attention that underlies real change.
        Talking alone can open awareness; presence makes it real.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌾 Why Talking Therapy No Longer Works the Way We Think It Does
      </h3>
      <p>
        After years of sitting in the room — IFS, Gestalt, person-centred, somatic — I began to notice a quiet pattern.
        The longer we talk about our experience, the further we drift from it.
        Insight piles upon insight, but the body grows no lighter.
      </p>
      <p>
        It isn’t that therapy fails; it’s that talk alone can’t carry consciousness all the way home.
        Words can open the door, but eventually they keep us at its threshold — describing the view instead of walking through it.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌿 The Real Work Is Attention
      </h3>
      <p>
        Everything depends on the quality of attention we bring to our own life.
        Attention is the first movement of love — how we meet experience before we interpret it.
        When attention becomes coherent, the nervous system regulates, thought quiets, and emotion finds its natural pulse.
      </p>
      <p>
        Attention, when embodied, becomes its own method — a way of listening that precedes words.
        This is where my approach to IFS diverges slightly from how it’s often taught.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🍂 From Parts Work to Wholeness Work
      </h3>
      <p>
        I still draw on Internal Family Systems — but as a short, catalytic process, not a lifelong excavation.
        A few conversations can reveal the architecture of the inner world: the critic, the controller, the weary child, the rescuer.
        Once they’re seen, the task is not to catalogue them endlessly but to listen through them.
      </p>
      <p>
        IFS becomes the doorway, not the dwelling. The true movement is from working on parts to living from the wholeness that already holds them.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌿 Embodied, Not Performed
      </h3>
      <p>
        Although my work draws from Internal Family Systems (IFS), I hold the process lightly.
        I’m not drawn to the theatrical or overly scripted versions of parts work often seen in demonstrations.
        In my experience, genuine transformation doesn’t come from acting out inner roles, but from learning to
        <span class="italic">listen through</span> them — to sense how each part lives in the body, in breath, in subtle shifts of tone or temperature.
      </p>
      <p>
        In practice, IFS becomes a quiet, embodied dialogue.<br />
        It doesn’t require performance, only presence: the willingness
        to stay with what is real rather than what is rehearsed. Protectors, exiles, and critics all reveal themselves more
        truthfully in silence than in speech.<br />
        When we stop performing our inner life, it begins to move again — slowly, honestly,
        and in rhythm with the body’s own intelligence.
      </p>
      <p>
        Real change, I believe, begins there: not in display, but in depth; not in drama, but in the steady work of attention.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌬️ Beyond the Orbit of Insight
      </h3>
      <p>
        Many long-term therapies become orbiting systems — self-study as self-maintenance.
        The next phase of inner work isn’t more dialogue; it’s deeper coherence. Less narrative, more embodiment.
      </p>
      <p>
        Body provides gravity and ground. Emotion offers movement and warmth. Thinking lends clarity and direction.
        When these harmonize, awareness becomes fertile again.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌾 How We Might Work Together
      </h3>
      <p>
        My work now is brief, integrative, and alive to what’s immediate — a meeting or two, perhaps a small arc of sessions,
        focused on helping you realign attention itself.<br />
        Together we might clarify which parts still over-function or over-guard,
        notice where thought overrides sensation, and re-tune attention so that the whole system can breathe again.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌼 Who This Work Is For
      </h3>
      <p>
        This approach tends to resonate with clinicians, healers, and long-term seekers who feel therapy has taken them as far as it can;
        people fluent in self-awareness, yet still tired or subtly disembodied;
        those drawn toward simplicity, honesty, and direct experience.
      </p>

      <h3 class="text-xl font-semibold text-purple-300 mt-10">
        🌾 A Closing Thought
      </h3>
      <p>
        Therapy was the bridge that carried us from unconscious pattern to conscious participation.
        But bridges are meant to be crossed. Beyond the bridge lies the practice of attention itself —
        the living synthesis of body, feeling, and thought in real time.
      </p>
      <p>
        You don’t have to keep orbiting your story.
        You can return to gravity, to ground, to breath.<br />
        Healing begins when words fall quiet and attention begins.
      </p>

      <p class="mt-10 text-slate-400 text-sm italic text-center">
        — Robert Ormiston · Integrative Psychotherapist · IFS Practitioner<br />
        <a
            href="https://www.bacp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple-300 hover:text-purple-200 underline/50"
        >
          Registered Member MBACP
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Fade-in animation on scroll */
section {
  scroll-margin-top: 4rem;
}
section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.6));
  z-index: 1;
}
.animate-stars {
  background:
      radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px),
      radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px);
  background-size: 120px 120px;
  background-position: 0 0, 100px 100px;
  animation: moveStars 90s linear infinite, twinkle 4s ease-in-out infinite alternate;
  opacity: 0.15;
}
@keyframes moveStars {
  from { background-position: 0 0, 100px 100px; }
  to { background-position: -500px 1000px, 500px -1000px; }
}
@keyframes twinkle {
  0%,100%{opacity:0.15;}
  50%{opacity:0.25;}
}
</style>
