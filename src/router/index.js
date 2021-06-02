import Router from 'vue-router';

const Dashboard = () => import('@/pages/dashboard.vue');
const Login = () => import('@/pages/auth/login.vue');
const Registration = () => import('@/pages/auth/registration.vue');
const RootPage = () => import('@/pages/root.vue');
import RootRout from '@/router/root.js';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/',
      component: RootPage,
      children: [ RootRout ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { path: '/' },
    },
  ],
});

export default router;