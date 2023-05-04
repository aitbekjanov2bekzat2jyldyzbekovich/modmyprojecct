import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'searchPage',
      component: () => import('../views/SearchPage.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/Movie.vue')
    },
    {
      path: '/movie/:name',
      name: 'filter',
      component: () => import('../views/FilterMovies.vue')
    },
    {
      path: '/cartoons',
      name: 'cartoon',
      component: () => import('../views/Cartoons.vue')
    },
    {
      path: '/cartoons/:name',
      name: 'cartoonf',
      component: () => import('../views/CartoonsFilter.vue')

    },
    {
      path: '/show/:id/:name',
      name: 'show',
      component: () => import('../views/Show.vue')
    },
    
   
  ]
})

export default router
