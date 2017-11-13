<template>
  <div class="">
    <h1 class="mv0 f-headline lh-title fw4">Colt Borg</h1>
    <h2 class="mv0 f-subheadline lh-title fw2 mid-gray">UX Developer</h2>
    <router-link class="f4 fw6 link light-purple hover-purple" :to="{ name: 'styleGuide' }">Style Guide</router-link>
  </div>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  store,
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'settings',
      'defaultTemplate',
    ]),
  },
};
</script>

<style>

</style>
