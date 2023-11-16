import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HomeVue } from '../views/home';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
