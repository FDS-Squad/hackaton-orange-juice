import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import PageBody from '../structure/PageBody.vue';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home',
    component: PageBody,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
        meta: { title: 'Tech42 | Home' },
      },
      {
        path: '/event-details/:id',
        name: 'event-details',
        props: true,
        component: () => import('../views/EventDetailsView.vue'),
        meta: { title: 'Tech42 | Detalhes' },
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/AdminView.vue'),
        meta: { title: 'Tech42 | Admin' },
      },
      {
        path: '/events/:search',
        name: 'results',
        props: true,
        component: () => import('../views/ResultsView.vue'),
        meta: { title: 'Tech42 | Results' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(from) {
    if (!from.meta.doNotSlide) {
      return { top: 0 };
    }
  },
});

export default router;
