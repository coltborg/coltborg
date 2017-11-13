import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import StyleGuide from '@/components/StyleGuide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/style-guide',
      name: 'styleGuide',
      component: StyleGuide,
    },
  ],
});
