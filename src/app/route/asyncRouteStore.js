import { AsyncRouteStore } from 'react-router-store';

export const asyncRouteStore = new AsyncRouteStore([
  {
    path: '/',
    exact: true,
    component: () => import('../pages/main'),
  },
  {
    path: '/translation-sample',
    component: () => import('../pages/translation-sample'),
  },
  {
    path: '/timezone-sample',
    component: () => import('../pages/timezone-sample'),
  },
]);