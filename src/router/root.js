const Root = () => import('@/components/root/RightContent.vue');
const FirstPathPage = () => import('@/components/root/right_content/first_rout/FirstRout.vue');
const SecondPathPage = () => import('@/components/root/right_content/second_rout/SecondRout.vue');
import SecondPathRout from '@/router/second_rout.js';

export default {
  path: '/',
  component: Root,
  children: [
    {
      path: '/',
      redirect: { path: 'first-path' },
    },
    {
      path: 'first-path',
      name: 'FirstPath',
      component: FirstPathPage,
    },
    {
      path: 'second-path',
      component: SecondPathPage,
      children: [ SecondPathRout ],
    },
    // {
    //   path: '/:catchAll(.*)',
    //   redirect: { path: '/' },
    // },
  ]
};
