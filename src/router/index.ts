import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
  {
    path: '/countries',
    component: () => import(/* webpackChunkName: "countries" */ '../views/Countries/CountriesIndexView.vue'),
    children: [
      {
        path: '',
        name: 'CountriesListView',
        component: () => import(
          /* webpackChunkName: "countries" */ '../views/Countries/CountriesListView.vue'
        ),
      },
      {
        path: ':countryId',
        name: 'CountryView',
        component: () => import(
          /* webpackChunkName: "countries" */ '../views/Countries/CountryView.vue'
        ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
