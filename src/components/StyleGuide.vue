<template>
  <div>
    <header class="mb7">
      <h1 class="mv0 f-headline lh-title fw4">Style Guide</h1>
      <router-link
        class="f4 fw6 link light-purple hover-purple"
        :to="{ name: 'Home' }">
        Home
      </router-link>
    </header>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Font Family - Fira Sans</h2>
      </header>
      <div class="f2 fw4 tracked">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Headers</h2>
      </header>
      <div class="f-headline lh-title fw4">This is a main title</div>
      <div class="f-subheadline lh-title fw2">This is a subtitle</div>
      <div class="f1 lh-title fw6">This is a small, bold title</div>
      <div class="f2 lh-title fw6">This is a smaller, bold title</div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Paragraph</h2>
      </header>
      <p class="lh-copy measure f4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis necessitatibus laboriosam laborum nobis maxime minus consectetur quod architecto odio perferendis incidunt tempore eos, porro, quidem, cumque ullam molestiae aliquid repellat.</p>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Links</h2>
      </header>
      <p class="lh-copy measure f4">Lorem ipsum dolor sit amet, consectetur <a class="fw6 link light-purple hover-purple" href="#">adipisicing elit.</a></p>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Buttons</h2>
      </header>
      <div class="mb2 flex">
        <button type="button" class="f3 no-underline lh-copy bn br2 ph3 pv2 white bg-light-purple hover-bg-purple button-trans">Primary Button</button>
      </div>
      <div class="flex">
        <button type="button" class="f3 no-underline lh-copy bn br2 ph3 pv2 light-purple bg-white hover-bg-light-gray button-trans">Secondary Button</button>
      </div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Font Weight</h2>
      </header>
      <div class="f3 lh-copy fw6">The bold font</div>
      <div class="f3 lh-copy fw4">The normal font</div>
      <div class="f3 lh-copy fw2">The light font</div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Spacing</h2>
      </header>
      <div class="grid f3">
        <div>0</div>
        <div></div>
        <div>1</div>
        <div class="bg-light-purple" style="width: 0.25rem;"></div>
        <div>2</div>
        <div class="bg-light-purple" style="width: 0.5rem;"></div>
        <div>3</div>
        <div class="bg-light-purple" style="width: 1rem;"></div>
        <div>4</div>
        <div class="bg-light-purple" style="width: 2rem;"></div>
        <div>5</div>
        <div class="bg-light-purple" style="width: 4rem;"></div>
        <div>6</div>
        <div class="bg-light-purple" style="width: 8rem;"></div>
        <div>7</div>
        <div class="bg-light-purple" style="width: 16rem;"></div>
      </div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Colors</h2>
      </header>
      <div class="pa4 bg-near-black white">Near Black</div>
      <div class="pa4 bg-mid-gray white">Mid-Gray</div>
      <div class="pa4 bg-white black">White</div>
      <div class="pa4 bg-light-purple white">Light Purple</div>
    </article>
    <article class="mb6">
      <header class="mb3">
        <h2 class="mv0 lh-title f2">Transition</h2>
      </header>
      <div class="h4">
        <transition name="fade-move" mode="out-in">
          <div
            v-if="showAnimation"
            class="pa4 br-100 w3 h3 bg-near-black white pointer">
          </div>
        </transition>
      </div>
      <button
        type="button"
        class="f3 no-underline lh-copy bn br2 ph3 pv2 white bg-light-purple hover-bg-purple button-trans"
        @click="showAnimation = !showAnimation">
        Animate Circle
      </button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'StyleGuide',
  data() {
    return {
      showAnimation: true,
    };
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 0.25rem;
  grid-column-gap: 0.5rem;
}

.button-trans {
  transition:
    color 0.15s ease-in,
    background-color 0.15s ease-in;
}
</style>