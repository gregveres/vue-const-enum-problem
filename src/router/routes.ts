import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/app/App.vue')
    // children: [
    //   // { path: "", component: () => import("pages/app/Index.vue") },
    // ]
  }
];

export default routes;
