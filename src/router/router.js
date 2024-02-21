import Vue from 'vue';
import Router from 'vue-router';
import KanbanBoard from '../components/KanbanBoard.vue';
import UserProfile from '../components/UserProfile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: KanbanBoard,
    },
    {
      path: '/user-profile/:id',
      name: 'userProfile',
      component: UserProfile,
      props: true,
    },
    {
      path: ':notFound(.*)',
      component: null,
    },
  ],
});
