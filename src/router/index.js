import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Projects from '@/components/Projects';
import Bio from '@/components/Bio';
import Nav from '@/components/Nav';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio,
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
    },
  ],
});
