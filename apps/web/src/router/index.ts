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
        path: '/event-details',
        name: 'event-details',
        component: () => import('../views/EventDetailsView.vue'),
        meta: { title: 'Tech42 | Detalhes' },
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/AdminView.vue'),
        meta: { title: 'Tech42 | Admin' },
      },
    ],
  },
  // {
  //   path: '/unauthorized',
  //   name: 'Unauthorized',
  //   component: NotFound,
  //   meta: { title: 'Não autorizado' },
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: NotFound,
  //   meta: { title: 'Página não encontrada' },
  // },
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
