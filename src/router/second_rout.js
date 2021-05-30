const Root = () => import('@/components/root/right_content/second_rout/SecondRout.vue');
const FirstPathPage = () => import('@/components/root/right_content/second_rout/FirstSubRout.vue');
const SecondPathPage = () => import('@/components/root/right_content/second_rout/SecondSubRout.vue');

export default {
  path: '/',
  component: Root,
  children: [
    {
      path: '/',
      redirect: { path: 'first-sub-path' },
    },
    {
      path: 'first-sub-path',
      name: 'FirstSubPath',
      component: FirstPathPage,
    },
    {
      path: 'second-sub-path',
      name: 'SecondSubPath',
      component: SecondPathPage,
    },
  ]
};
